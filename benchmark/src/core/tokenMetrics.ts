import type { TargetResult } from "../types";

export type TokenSummary = {
  totalInput: number;
  totalOutput: number;
  successfulActions: number;
  tokensPerAction: number;
};

export function computeTokenMetrics(target: TargetResult): TokenSummary {
  let totalInput = 0;
  let totalOutput = 0;
  let successfulActions = 0;

  for (const test of target.suite.tests) {
    for (const step of test.steps) {
      totalInput += step.usage?.inputTokens ?? 0;
      totalOutput += step.usage?.outputTokens ?? 0;

      // Count actual tool calls instead of expectations
      // This fixes the issue where multiple expectations (mustCallTool + argsSchemaValid)
      // for the same tool call were being double-counted
      successfulActions += step.toolCalls.length;
    }
  }

  return {
    totalInput,
    totalOutput,
    successfulActions,
    tokensPerAction: successfulActions > 0 ? Math.round(totalOutput / successfulActions) : 0
  };
}
