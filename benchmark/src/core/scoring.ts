import type {
  Expectation,
  ExpectationResult,
  SchemaViolation,
  ToolCall,
  ToolSpec
} from "../types";
import { categorizeZodError } from "./schemaAnalysis";

export function evaluateExpectations(
  expectations: Expectation[],
  toolCalls: ToolCall[],
  toolSpecs: ToolSpec[],
  responseText = "",
  usage?: { inputTokens?: number; outputTokens?: number; totalTokens?: number }
): ExpectationResult[] {
  const specByName = new Map(toolSpecs.map((spec) => [spec.name, spec]));

  return expectations.map((expectation) => {
    switch (expectation.type) {
      case "mustCallTool":
        return buildResult(
          expectation,
          toolCalls.some((call) => call.toolName === expectation.toolName),
          `Expected tool ${expectation.toolName} to be called`
        );
      case "mustNotCallTool":
        return buildResult(
          expectation,
          !toolCalls.some((call) => call.toolName === expectation.toolName),
          `Expected tool ${expectation.toolName} not to be called`
        );
      case "exactlyNToolCalls":
        return buildResult(
          expectation,
          toolCalls.length === expectation.n,
          `Expected exactly ${expectation.n} tool call(s), got ${toolCalls.length}`
        );
      case "toolCallOrder": {
        const actual = toolCalls.map((call) => call.toolName);
        const pass =
          actual.length === expectation.toolNames.length &&
          actual.every((name, index) => name === expectation.toolNames[index]);
        return buildResult(
          expectation,
          pass,
          `Expected tool call order ${expectation.toolNames.join(", ")}, got ${actual.join(
            ", "
          )}`
        );
      }
      case "argsSchemaValid": {
        const toolSpec = specByName.get(expectation.toolName);
        if (!toolSpec) {
          return {
            ...buildResult(
              expectation,
              false,
              `Missing tool spec for ${expectation.toolName}`
            ),
            schemaViolations: [],
            schemaChecks: { total: 0, passed: 0 }
          };
        }

        const calls = toolCalls.filter((call) => call.toolName === expectation.toolName);
        if (calls.length === 0) {
          return {
            ...buildResult(
              expectation,
              false,
              `Expected tool ${expectation.toolName} to be called`
            ),
            schemaViolations: [],
            schemaChecks: { total: 0, passed: 0 }
          };
        }

        const violations: SchemaViolation[] = [];
        let passed = 0;
        for (const call of calls) {
          const parsed = toolSpec.inputSchema.safeParse(call.arguments);
          if (!parsed.success) {
            violations.push(...categorizeZodError(parsed.error));
          } else {
            passed += 1;
          }
        }

        return {
          ...buildResult(
            expectation,
            violations.length === 0,
            violations.length > 0
              ? `Schema violations: ${violations.map((v) => v.type).join(", ")}`
              : undefined
          ),
          schemaViolations: violations,
          schemaChecks: { total: calls.length, passed }
        };
      }
      case "argsEqual": {
        const matchingCalls = getAllToolCalls(toolCalls, expectation.toolName);
        if (matchingCalls.length === 0) {
          return buildResult(
            expectation,
            false,
            `Expected tool ${expectation.toolName} to be called`
          );
        }

        // Check all calls - if any match, it's a partial success
        let matchedCallIndex = -1;
        for (let i = 0; i < matchingCalls.length; i++) {
          const call = matchingCalls[i];
          if (!call) continue;
          const value = getPathValue(call.arguments, expectation.path);
          if (value.found && value.value !== undefined && isDeepEqual(value.value, expectation.value)) {
            matchedCallIndex = i;
            break;
          }
        }

        const pass = matchedCallIndex >= 0;
        const efficiencyNote =
          matchingCalls.length > 1 && pass
            ? ` (matched on call ${matchedCallIndex + 1} of ${matchingCalls.length}, efficiency issue)`
            : "";
        return buildResult(
          expectation,
          pass,
          pass
            ? undefined
            : `Expected ${expectation.toolName}.${expectation.path} to equal ${stringifyValue(
              expectation.value
            )}${efficiencyNote}`
        );
      }
      case "argsOneOf": {
        const matchingCalls = getAllToolCalls(toolCalls, expectation.toolName);
        if (matchingCalls.length === 0) {
          return buildResult(
            expectation,
            false,
            `Expected tool ${expectation.toolName} to be called`
          );
        }

        // Check all calls - if any match, it's a partial success
        let matchedCallIndex = -1;
        for (let i = 0; i < matchingCalls.length; i++) {
          const call = matchingCalls[i];
          if (!call) continue;
          const value = getPathValue(call.arguments, expectation.path);
          if (
            value.found &&
            value.value !== undefined &&
            expectation.values.some((candidate) => isDeepEqual(candidate, value.value))
          ) {
            matchedCallIndex = i;
            break;
          }
        }

        const pass = matchedCallIndex >= 0;
        const efficiencyNote =
          matchingCalls.length > 1 && pass
            ? ` (matched on call ${matchedCallIndex + 1} of ${matchingCalls.length}, efficiency issue)`
            : "";
        return buildResult(
          expectation,
          pass,
          pass
            ? undefined
            : `Expected ${expectation.toolName}.${expectation.path} to match one of ${stringifyValue(
              expectation.values
            )}${efficiencyNote}`
        );
      }
      case "argsMatch": {
        const matchingCalls = getAllToolCalls(toolCalls, expectation.toolName);
        if (matchingCalls.length === 0) {
          return buildResult(
            expectation,
            false,
            `Expected tool ${expectation.toolName} to be called`
          );
        }

        let matchedCallIndex = -1;
        for (let i = 0; i < matchingCalls.length; i++) {
          const call = matchingCalls[i];
          if (!call) continue;
          const allMatch = expectation.conditions.every((condition) =>
            doesConditionMatch(call.arguments, condition)
          );
          if (allMatch) {
            matchedCallIndex = i;
            break;
          }
        }

        const pass = matchedCallIndex >= 0;
        const requirement = expectation.conditions
          .map((condition) => formatCondition(condition))
          .join(", ");
        const efficiencyNote =
          matchingCalls.length > 1 && pass
            ? ` (matched on call ${matchedCallIndex + 1} of ${matchingCalls.length}, efficiency issue)`
            : "";
        return buildResult(
          expectation,
          pass,
          pass
            ? undefined
            : `Expected ${expectation.toolName} to include ${requirement} in a single call${efficiencyNote}`
        );
      }
      case "argsNotEqual": {
        const matchingCalls = getAllToolCalls(toolCalls, expectation.toolName);
        if (matchingCalls.length === 0) {
          return buildResult(
            expectation,
            false,
            `Expected tool ${expectation.toolName} to be called`
          );
        }

        // Check all calls - pass if ALL calls don't match the forbidden value
        let violatingCallIndex = -1;
        for (let i = 0; i < matchingCalls.length; i++) {
          const call = matchingCalls[i];
          if (!call) continue;
          const value = getPathValue(call.arguments, expectation.path);
          if (value.found && value.value !== undefined && isDeepEqual(value.value, expectation.value)) {
            violatingCallIndex = i;
            break;
          }
        }

        const pass = violatingCallIndex < 0;
        const efficiencyNote =
          matchingCalls.length > 1 && pass
            ? ` (checked ${matchingCalls.length} calls, efficiency issue)`
            : "";
        return buildResult(
          expectation,
          pass,
          pass
            ? undefined
            : `Expected ${expectation.toolName}.${expectation.path} to not equal ${stringifyValue(
              expectation.value
            )}${efficiencyNote}`
        );
      }
      case "argsNotContains": {
        const matchingCalls = getAllToolCalls(toolCalls, expectation.toolName);
        if (matchingCalls.length === 0) {
          return buildResult(
            expectation,
            false,
            `Expected tool ${expectation.toolName} to be called`
          );
        }

        // Check all calls - pass if ALL calls don't contain the pattern
        const regex = new RegExp(expectation.pattern, "i"); // case-insensitive
        let violatingCallIndex = -1;
        for (let i = 0; i < matchingCalls.length; i++) {
          const call = matchingCalls[i];
          if (!call) continue;
          const argsString = JSON.stringify(call.arguments);
          if (regex.test(argsString)) {
            violatingCallIndex = i;
            break;
          }
        }

        const pass = violatingCallIndex < 0;
        const efficiencyNote =
          matchingCalls.length > 1 && pass
            ? ` (checked ${matchingCalls.length} calls, efficiency issue)`
            : "";
        return buildResult(
          expectation,
          pass,
          pass
            ? undefined
            : `Expected ${expectation.toolName} arguments to not contain pattern ${expectation.pattern}${efficiencyNote}`
        );
      }
      case "noExtraKeys": {
        const matchingCalls = getAllToolCalls(toolCalls, expectation.toolName);
        if (matchingCalls.length === 0) {
          return buildResult(
            expectation,
            false,
            `Expected tool ${expectation.toolName} to be called`
          );
        }

        // Check all calls - pass if ALL calls have no extra keys
        let violatingCallIndex = -1;
        let extraKeys: string[] = [];
        for (let i = 0; i < matchingCalls.length; i++) {
          const call = matchingCalls[i];
          if (!call) continue;
          const args = call.arguments;
          if (typeof args !== "object" || args === null) {
            violatingCallIndex = i;
            extraKeys = [];
            break;
          }

          const keys = Object.keys(args as Record<string, unknown>);
          const extra = keys.filter((key) => !expectation.allowedKeys.includes(key));
          if (extra.length > 0) {
            violatingCallIndex = i;
            extraKeys = extra;
            break;
          }
        }

        const pass = violatingCallIndex < 0;
        const efficiencyNote =
          matchingCalls.length > 1 && pass
            ? ` (checked ${matchingCalls.length} calls, efficiency issue)`
            : "";
        return buildResult(
          expectation,
          pass,
          pass
            ? undefined
            : `Unexpected keys for ${expectation.toolName}: ${extraKeys.join(", ")}${efficiencyNote}`
        );
      }
      case "responseMustIncludeText": {
        const pass = responseText.includes(expectation.substring);
        return buildResult(
          expectation,
          pass,
          `Expected response to include "${expectation.substring}"`
        );
      }
      case "responsePatternMatch": {
        const regex = new RegExp(expectation.pattern, "i");
        const pass = regex.test(responseText);
        return buildResult(
          expectation,
          pass,
          `Expected response to match pattern ${expectation.pattern}`
        );
      }
      case "argsPatternMatch": {
        const matchingCalls = getAllToolCalls(toolCalls, expectation.toolName);
        if (matchingCalls.length === 0) {
          return buildResult(
            expectation,
            false,
            `Expected tool ${expectation.toolName} to be called`
          );
        }

        // Check all calls - if any match, it's a partial success
        const regex = new RegExp(expectation.pattern);
        let matchedCallIndex = -1;
        for (let i = 0; i < matchingCalls.length; i++) {
          const call = matchingCalls[i];
          if (!call) continue;
          const value = getPathValue(call.arguments, expectation.path);
          if (value.found && value.value !== undefined) {
            const valueString = String(value.value);
            if (regex.test(valueString)) {
              matchedCallIndex = i;
              break;
            }
          }
        }

        const pass = matchedCallIndex >= 0;
        const efficiencyNote =
          matchingCalls.length > 1 && pass
            ? ` (matched on call ${matchedCallIndex + 1} of ${matchingCalls.length}, efficiency issue)`
            : "";
        return buildResult(
          expectation,
          pass,
          pass
            ? undefined
            : `Expected ${expectation.toolName}.${expectation.path} to match pattern ${expectation.pattern}${efficiencyNote}`
        );
      }
      case "maxOutputTokens": {
        const outputTokens = usage?.outputTokens ?? 0;
        const pass = outputTokens <= expectation.count;
        return buildResult(
          expectation,
          pass,
          pass
            ? undefined
            : `Expected output tokens to be ≤ ${expectation.count}, got ${outputTokens}`
        );
      }
      case "toolCallCount": {
        const count = toolCalls.filter((call) => call.toolName === expectation.toolName).length;
        return buildResult(
          expectation,
          count === expectation.count,
          `Expected ${expectation.toolName} to be called ${expectation.count} time(s), got ${count}`
        );
      }
      default:
        return buildResult(expectation, false, "Unknown expectation type");
    }
  });
}

function buildResult(
  expectation: Expectation,
  pass: boolean,
  message?: string
): ExpectationResult {
  return {
    expectation,
    pass,
    weight: 1,
    message: pass ? undefined : message
  };
}

function getToolArgs(
  toolCalls: ToolCall[],
  toolName: string
): { found: boolean; value?: unknown } {
  const call = toolCalls.find((candidate) => candidate.toolName === toolName);
  if (!call) return { found: false };
  return { found: true, value: call.arguments };
}

function getAllToolCalls(
  toolCalls: ToolCall[],
  toolName: string
): ToolCall[] {
  return toolCalls.filter((call) => call.toolName === toolName);
}

function getPathValue(
  value: unknown,
  path: string
): { found: boolean; value?: unknown } {
  // Normalize path to handle bracket notation: items[0] -> items.0
  const normalizedPath = path.replace(/\[(\d+)\]/g, ".$1");
  const segments = normalizedPath.split(".").filter(Boolean);
  let current: unknown = value;

  for (const segment of segments) {
    if (current === null || current === undefined) {
      return { found: false };
    }

    // Handle array indices
    if (Array.isArray(current)) {
      const index = Number(segment);
      if (!Number.isNaN(index)) {
        current = current[index];
        continue;
      }
    }

    // Handle object properties (including array.length)
    if (typeof current === "object") {
      if (segment in (current as Record<string, unknown>)) {
        current = (current as Record<string, unknown>)[segment];
        continue;
      }
    }

    return { found: false };
  }

  return { found: true, value: current };
}

function isDeepEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true;

  if (typeof a !== typeof b) return false;
  if (typeof a !== "object" || a === null || b === null) return false;

  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;
    return a.every((item, index) => isDeepEqual(item, (b as unknown[])[index]));
  }

  const aKeys = Object.keys(a as Record<string, unknown>);
  const bKeys = Object.keys(b as Record<string, unknown>);
  if (aKeys.length !== bKeys.length) return false;

  return aKeys.every((key) =>
    isDeepEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key])
  );
}

function stringifyValue(value: unknown): string {
  return typeof value === "string" ? value : JSON.stringify(value);
}

function doesConditionMatch(
  args: unknown,
  condition: { path: string; value?: unknown; values?: unknown[] }
): boolean {
  const value = getPathValue(args, condition.path);
  if (!value.found || value.value === undefined) return false;

  if (Object.prototype.hasOwnProperty.call(condition, "values")) {
    const candidates = condition.values ?? [];
    return candidates.some((candidate) => isDeepEqual(candidate, value.value));
  }

  return isDeepEqual(condition.value, value.value);
}

function formatCondition(condition: { path: string; value?: unknown; values?: unknown[] }): string {
  if (Object.prototype.hasOwnProperty.call(condition, "values")) {
    return `${condition.path} in ${stringifyValue(condition.values ?? [])}`;
  }
  return `${condition.path}=${stringifyValue(condition.value)}`;
}
