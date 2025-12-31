import type { ProtocolViolation, ToolCall } from "../../types";
import { safeJsonParse } from "../../util/json";

type ToolCallCandidate = {
  id?: string;
  function?: { name?: string; arguments?: unknown };
  name?: string;
  arguments?: unknown;
  [key: string]: unknown; // Allow additional provider-specific fields
};

export function normalizeToolCalls(
  raw: unknown,
  protocolViolations: ProtocolViolation[] = []
): ToolCall[] {
  if (!raw) return [];

  if (Array.isArray(raw)) {
    return raw
      .map((call) =>
        toolCallFromCandidate(call as ToolCallCandidate, protocolViolations)
      )
      .filter((call): call is ToolCall => call !== null);
  }

  if (typeof raw === "object") {
    const message = raw as Record<string, unknown>;
    if (Array.isArray(message.tool_calls)) {
      return normalizeToolCalls(message.tool_calls, protocolViolations);
    }

    if (message.function_call) {
      const single = toolCallFromCandidate(
        message.function_call as ToolCallCandidate,
        protocolViolations
      );
      return single ? [single] : [];
    }
  }

  return [];
}

function toolCallFromCandidate(
  candidate: ToolCallCandidate,
  protocolViolations: ProtocolViolation[]
): ToolCall | null {
  const toolName = candidate.function?.name ?? candidate.name;
  if (!toolName) return null;

  const rawArgs = candidate.function?.arguments ?? candidate.arguments ?? {};
  return {
    toolName,
    arguments: parseArguments(rawArgs, protocolViolations),
    id: candidate.id,
    // Preserve the complete raw tool call for provider-specific fields (e.g., Gemini thought_signature)
    rawToolCall: candidate as Record<string, unknown>
  };
}

function parseArguments(
  rawArgs: unknown,
  protocolViolations: ProtocolViolation[]
): unknown {
  if (typeof rawArgs === "string") {
    const parsed = safeJsonParse(rawArgs);
    if (!parsed.ok) {
      protocolViolations.push({
        type: "jsonParseFailure",
        raw: rawArgs.slice(0, 100)
      });
    }
    return parsed.ok ? parsed.value : rawArgs;
  }

  return rawArgs;
}
