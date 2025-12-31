import type { ToolCall, ToolExecutionError, ToolResult } from "../types";
import { toolImplementations, toolSpecByName } from "./registry";
import { resetSceneCounter } from "./impl/describeScene";
import { resetRollSeed } from "./impl/rollDice";
import { resetCharacterStats } from "./impl/roleplayState";

export function resetToolState(): void {
  resetCharacterStats();
  resetRollSeed();
  resetSceneCounter();
}

export function executeToolCall(toolCall: ToolCall): {
  result?: ToolResult;
  error?: ToolExecutionError;
} {
  const spec = toolSpecByName.get(toolCall.toolName);
  if (!spec) {
    return { error: { toolName: toolCall.toolName, message: "Tool not found" } };
  }

  const parseResult = spec.inputSchema.safeParse(toolCall.arguments);
  if (!parseResult.success) {
    return {
      error: {
        toolName: toolCall.toolName,
        message: parseResult.error.message
      }
    };
  }

  const impl = toolImplementations[toolCall.toolName];
  if (!impl) {
    return { error: { toolName: toolCall.toolName, message: "Tool implementation missing" } };
  }

  try {
    const result = impl(parseResult.data);
    return { result: { toolName: toolCall.toolName, result } };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: { toolName: toolCall.toolName, message } };
  }
}

export function executeToolCalls(toolCalls: ToolCall[]): {
  results: ToolResult[];
  errors: ToolExecutionError[];
} {
  const results: ToolResult[] = [];
  const errors: ToolExecutionError[] = [];

  for (const call of toolCalls) {
    const { result, error } = executeToolCall(call);
    if (result) {
      results.push(result);
    }
    if (error) {
      errors.push(error);
    }
  }

  return { results, errors };
}

export function serializeToolResult(result: unknown, maxBytes: number): string {
  const json = JSON.stringify(result);
  if (byteLength(json) <= maxBytes) {
    return json;
  }

  return truncateJsonString(json, maxBytes);
}

export function truncateJsonString(json: string, maxBytes: number): string {
  if (byteLength(json) <= maxBytes) {
    return json;
  }

  const suffix = "\"}";
  let previewLength = Math.max(0, maxBytes - byteLength("{\"truncated\":true,\"preview\":\"") - byteLength(suffix));
  let preview = json.slice(0, previewLength);
  let wrapped = JSON.stringify({ truncated: true, preview });

  while (byteLength(wrapped) > maxBytes && previewLength > 0) {
    previewLength = Math.max(0, previewLength - 16);
    preview = json.slice(0, previewLength);
    wrapped = JSON.stringify({ truncated: true, preview });
  }

  if (byteLength(wrapped) <= maxBytes) {
    return wrapped;
  }

  return JSON.stringify({ truncated: true });
}

function byteLength(value: string): number {
  return Buffer.byteLength(value, "utf8");
}
