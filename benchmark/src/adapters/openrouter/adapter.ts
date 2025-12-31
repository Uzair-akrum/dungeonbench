import type { Message, ModelAdapter, ModelRequest, ModelResponse, ProtocolViolation, ToolSpec } from "../../types";
import { analyzeProtocol } from "../../core/protocolAnalysis";
import { safeJsonParse } from "../../util/json";
import { toJsonSchema } from "../../util/zodSchema";
import { normalizeToolCalls } from "./normalize";
import { HttpError, withRetries } from "./retry";

// Rate limiter to prevent exceeding OpenRouter's limits and smooth request spacing.
class RateLimiter {
  private requests: number[] = [];
  private readonly maxRequests: number;
  private readonly windowMs: number;
  private readonly minSpacingMs: number;
  private readonly jitterMs: number;
  private lastRequestAt = 0;
  private queue: Promise<void> = Promise.resolve();

  constructor(
    maxRequests: number = 20,
    windowMs: number = 60000,
    minSpacingMs?: number,
    jitterMs: number = 0
  ) {
    this.maxRequests = Math.max(1, maxRequests);
    this.windowMs = windowMs;
    const computedSpacing = Math.ceil(windowMs / this.maxRequests);
    this.minSpacingMs = Math.max(0, minSpacingMs ?? computedSpacing);
    this.jitterMs = Math.max(0, jitterMs);
  }

  waitIfNeeded(): Promise<void> {
    const task = async () => {
      const now = Date.now();
      this.requests = this.requests.filter((time) => now - time < this.windowMs);

      let waitTimeMs = 0;
      if (this.requests.length >= this.maxRequests) {
        const oldestRequest = this.requests[0];
        waitTimeMs = Math.max(waitTimeMs, this.windowMs - (now - oldestRequest) + 100);
      }

      if (this.lastRequestAt > 0) {
        const sinceLast = now - this.lastRequestAt;
        if (sinceLast < this.minSpacingMs) {
          waitTimeMs = Math.max(waitTimeMs, this.minSpacingMs - sinceLast);
        }
      }

      const jitter = this.jitterMs > 0 ? Math.floor(Math.random() * this.jitterMs) : 0;
      if (waitTimeMs > 0 || jitter > 0) {
        await new Promise((resolve) => setTimeout(resolve, waitTimeMs + jitter));
      }

      const stampedAt = Date.now();
      this.requests = this.requests.filter((time) => stampedAt - time < this.windowMs);
      this.requests.push(stampedAt);
      this.lastRequestAt = stampedAt;
    };

    this.queue = this.queue.then(task, task);
    return this.queue;
  }
}

// Shared rate limiter instance across all requests
const rateLimiter = new RateLimiter(
  parsePositiveInt(process.env.OPENROUTER_RATE_LIMIT_PER_MINUTE) ?? 20,
  60000,
  parseNonNegativeInt(process.env.OPENROUTER_RATE_LIMIT_MIN_SPACING_MS),
  parseNonNegativeInt(process.env.OPENROUTER_RATE_LIMIT_JITTER_MS) ?? 0
);

export class OpenRouterAdapter implements ModelAdapter {
  name = "openrouter";

  async invoke(req: ModelRequest): Promise<ModelResponse> {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error("OPENROUTER_API_KEY is required");
    }

    const baseUrl = process.env.OPENROUTER_BASE_URL ?? "https://openrouter.ai/api/v1";
    const url = `${baseUrl.replace(/\/$/, "")}/chat/completions`;
    const headers: Record<string, string> = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    };

    const referer = process.env.OPENROUTER_REFERER;
    if (referer) headers["HTTP-Referer"] = referer;

    const title = process.env.OPENROUTER_TITLE;
    if (title) headers["X-Title"] = title;

    const body = buildRequestBody(req);

    const startedAt = Date.now();

    const { text } = await withRetries(
      async () => {
        // Rate limit: wait if we're approaching the limit
        await rateLimiter.waitIfNeeded();
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), req.timeoutMs);

        try {
          const response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
            signal: controller.signal
          });
          const text = await response.text();
          if (!response.ok) {
            // Debug: log request and response details for 400 errors
            if (response.status === 400) {
              console.error(`[OpenRouter 400 Error] Model: ${body.model}`);
              if (Array.isArray(body.tools) && body.tools.length > 0) {
                console.error(`[OpenRouter 400 Error] Tools count: ${body.tools.length}`);
                try {
                  const firstTool = body.tools[0];
                  const toolStr = JSON.stringify(firstTool, null, 2);
                  console.error(`[OpenRouter 400 Error] First tool schema:`, toolStr.substring(0, 800));
                } catch (e) {
                  console.error(`[OpenRouter 400 Error] Failed to serialize tool:`, e);
                }
              }
            }
            console.error(`[OpenRouter Error] Status: ${response.status}, Response length: ${text.length}`);
            console.error(`[OpenRouter Error] Response text:`, text.substring(0, 1000));
            
            const parsed = safeJsonParse<{ 
              error?: { 
                message?: string; 
                code?: number; 
                type?: string;
                metadata?: { raw?: string };
              } 
            }>(text);
            let errorMessage = `HTTP ${response.status}`;
            if (parsed.ok && parsed.value) {
              const error = parsed.value.error;
              // Try to extract the nested error from metadata.raw (OpenRouter wraps provider errors)
              let actualMessage = error?.message;
              if (error?.metadata?.raw) {
                const rawParsed = safeJsonParse<{ error?: { message?: string; type?: string; param?: string } }>(error.metadata.raw);
                if (rawParsed.ok && rawParsed.value?.error?.message) {
                  actualMessage = rawParsed.value.error.message;
                  if (rawParsed.value.error.param) {
                    actualMessage += ` (param: ${rawParsed.value.error.param})`;
                  }
                }
              }
              
              if (actualMessage) {
                errorMessage += `: ${actualMessage}`;
                if (error?.type) {
                  errorMessage += ` (type: ${error.type})`;
                }
                if (error?.code) {
                  errorMessage += ` [code: ${error.code}]`;
                }
              } else {
                errorMessage += `: ${JSON.stringify(parsed.value)}`;
              }
            } else {
              // If response isn't JSON, show the raw text (truncated if too long)
              const displayText = text.length > 500 ? text.substring(0, 500) + "..." : text;
              errorMessage += `: ${displayText || "(empty response)"}`;
            }
            
            // Add helpful message for 401 errors that might be rate-limit related
            if (response.status === 401) {
              errorMessage += "\nNote: 401 'User not found' errors can occur when rate limits are exceeded. OpenRouter limits: 20 requests/minute for free models. Consider adding delays between requests (e.g., OPENROUTER_RATE_LIMIT_MIN_SPACING_MS) or upgrading your account.";
            }
            
            throw new HttpError(response.status, errorMessage);
          }
          return { text };
        } catch (error) {
          // Handle AbortError from timeout (can be DOMException in Bun)
          if (
            (error instanceof Error && error.name === "AbortError") ||
            (error instanceof DOMException && error.code === DOMException.ABORT_ERR)
          ) {
            clearTimeout(timeout);
            throw new Error(`Request timeout after ${req.timeoutMs}ms`);
          }
          throw error;
        } finally {
          clearTimeout(timeout);
        }
      },
      { retries: req.retries ?? 0 }
    );

    const latencyMs = Date.now() - startedAt;
    const parsed = safeJsonParse<Record<string, unknown>>(text);
    if (!parsed.ok || !parsed.value) {
      throw new Error(`Invalid JSON response: ${parsed.error ?? "Unknown error"}`);
    }

    const message = (parsed.value.choices as Array<{ message?: Record<string, unknown> }> | undefined)?.[0]
      ?.message;
    const rawContent = typeof message?.content === "string" ? message.content : "";
    const protocolAnalysis = analyzeProtocol(rawContent);
    const protocolViolations: ProtocolViolation[] = [...protocolAnalysis.violations];
    const toolCalls = normalizeToolCalls(message as unknown, protocolViolations);
    const usage = parseUsage(parsed.value.usage as Record<string, unknown> | undefined);
    
    // Extract reasoning_details from the response for models that need them preserved (e.g., Gemini)
    const reasoningDetails = message?.reasoning_details as unknown[] | undefined;

    return {
      rawText: protocolAnalysis.cleanContent || undefined,
      toolCalls,
      usage,
      latencyMs,
      protocolViolations,
      reasoningDetails
    };
  }
}

function parsePositiveInt(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return undefined;
  return parsed;
}

function parseNonNegativeInt(value: string | undefined): number | undefined {
  if (value === undefined) return undefined;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < 0) return undefined;
  return parsed;
}

function buildRequestBody(req: ModelRequest): Record<string, unknown> {
  const payload: Record<string, unknown> = {
    model: req.target.model,
    messages: req.messages.map(mapMessage),
    temperature: req.temperature,
    max_tokens: req.maxOutputTokens
  };

  if (req.tools.length > 0) {
    payload.tools = req.tools.map(mapTool);
    payload.tool_choice = "auto";
  }

  if (req.seed !== undefined) {
    payload.seed = req.seed;
  }

  return payload;
}

function mapMessage(message: Message): Record<string, unknown> {
  if (message.role === "tool") {
    return {
      role: "tool",
      content: message.content,
      tool_call_id: message.name ?? "tool"
    };
  }

  const mapped: Record<string, unknown> = {
    role: message.role,
    content: message.content
  };

  if (message.name) {
    mapped.name = message.name;
  }

  if (message.role === "assistant" && message.toolCalls && message.toolCalls.length > 0) {
    mapped.tool_calls = message.toolCalls.map((call, index) => {
      // If we have the raw tool call from the provider, use it to preserve
      // provider-specific fields like Gemini's thought_signature
      if (call.rawToolCall) {
        return {
          ...call.rawToolCall,
          id: call.id ?? call.rawToolCall.id ?? `call_${index}`,
          type: "function",
          function: {
            name: call.toolName,
            arguments: typeof call.rawToolCall.function === "object" && 
                       call.rawToolCall.function !== null &&
                       typeof (call.rawToolCall.function as Record<string, unknown>).arguments === "string"
              ? (call.rawToolCall.function as Record<string, unknown>).arguments
              : JSON.stringify(call.arguments ?? {})
          }
        };
      }
      // Fallback for tool calls without raw data
      return {
        id: call.id ?? `call_${index}`,
        type: "function",
        function: {
          name: call.toolName,
          arguments: JSON.stringify(call.arguments ?? {})
        }
      };
    });
  }
  
  // Preserve reasoning_details for models that need them (e.g., Gemini thought_signature)
  if (message.reasoningDetails && message.reasoningDetails.length > 0) {
    mapped.reasoning_details = message.reasoningDetails;
  }

  return mapped;
}

function mapTool(tool: ToolSpec): Record<string, unknown> {
  return {
    type: "function",
    function: {
      name: tool.name,
      description: tool.description,
      parameters: toJsonSchema(tool.inputSchema)
    }
  };
}

function parseUsage(usage?: Record<string, unknown>): ModelResponse["usage"] | undefined {
  if (!usage) return undefined;

  const inputTokens = pickNumber(usage, ["prompt_tokens", "input_tokens", "inputTokens"]);
  const outputTokens = pickNumber(usage, ["completion_tokens", "output_tokens", "outputTokens"]);
  const totalTokens = pickNumber(usage, ["total_tokens", "totalTokens"]);

  if (inputTokens === undefined && outputTokens === undefined && totalTokens === undefined) {
    return undefined;
  }

  return { inputTokens, outputTokens, totalTokens };
}

function pickNumber(
  record: Record<string, unknown>,
  keys: string[]
): number | undefined {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "number") {
      return value;
    }
  }
  return undefined;
}
