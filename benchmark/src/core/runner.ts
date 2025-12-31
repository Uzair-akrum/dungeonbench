import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { OpenRouterAdapter } from "../adapters/openrouter/adapter";
import type { Config } from "../config/schema";
import { computeObedienceRate, computeParsingStability, computeTypeSafety } from "./metrics";
import { evaluateExpectations } from "./scoring";
import { computeTokenMetrics } from "./tokenMetrics";
import {
  executeToolCall,
  resetToolState,
  serializeToolResult
} from "../tools/runtime";
import { collectSecrets, redactMessage } from "../util/redact";
import type {
  ExpectationResult,
  Message,
  ModelAdapter,
  ModelResponse,
  ProtocolViolation,
  RunMetadata,
  RunResult,
  StepResult,
  Target,
  TargetResult,
  TestCase,
  TestResult,
  TestStep,
  TranscriptEntry,
  TestSuite,
  ToolCall,
  ToolExecutionError,
  ToolResult
} from "../types";

const TOOL_RESULT_MAX_BYTES = 2048;

export type RunOptions = {
  transcriptSink?: (entry: TranscriptEntry) => void;
  redactionSecrets?: string[];
};

export async function runSuite(
  config: Config,
  suite: TestSuite,
  options: RunOptions = {}
): Promise<RunResult> {
  if (config.targets.length === 0) {
    throw new Error("No targets configured. Provide targets via config or CLI flags.");
  }

  const runId = config.run.runId ?? generateRunId(suite, config.targets);
  const metadata = buildMetadata(config, suite, runId);
  const targets: TargetResult[] = [];
  const redactionSecrets = options.redactionSecrets ?? collectSecrets(process.env);

  for (const target of config.targets) {
    targets.push(await runTarget(config, suite, target, options, redactionSecrets));
  }

  const totals = countTotals(targets);

  return {
    metadata,
    totals,
    targets
  };
}

async function runTarget(
  config: Config,
  suite: TestSuite,
  target: Target,
  options: RunOptions,
  redactionSecrets: string[]
): Promise<TargetResult> {
  const adapter = adapterForTarget(target);
  const tests: TestResult[] = [];

  for (const test of suite.tests) {
    tests.push(await runTestCase(adapter, config, target, test, options, redactionSecrets));
  }

  const { score, passRate } = averageScores(tests.map((test) => test.score));

  const suiteResult = {
    suiteId: suite.id,
    suiteVersion: suite.version,
    tests,
    score,
    passRate
  };
  const targetResult: TargetResult = {
    target,
    suite: suiteResult,
    metrics: {
      typeSafety: { rate: 1, total: 0, passed: 0, violations: [] },
      parsingStability: { rate: 1, total: 0, clean: 0, violations: [] },
      obedience: { rate: 1, total: 0, followed: 0 },
      cost: { totalOutputTokens: 0, totalInputTokens: 0, successfulActions: 0, tokensPerAction: 0 }
    }
  };

  const typeSafety = computeTypeSafety(targetResult);
  const parsingStability = computeParsingStability(targetResult);
  const obedience = computeObedienceRate(targetResult);
  const tokenMetrics = computeTokenMetrics(targetResult);

  targetResult.metrics = {
    typeSafety,
    parsingStability,
    obedience,
    cost: {
      totalOutputTokens: tokenMetrics.totalOutput,
      totalInputTokens: tokenMetrics.totalInput,
      successfulActions: tokenMetrics.successfulActions,
      tokensPerAction: tokenMetrics.tokensPerAction
    }
  };

  return targetResult;
}

async function runTestCase(
  adapter: ModelAdapter,
  config: Config,
  target: Target,
  test: TestCase,
  options: RunOptions,
  redactionSecrets: string[]
): Promise<TestResult> {
  const steps: StepResult[] = [];

  resetToolState();

  for (const step of test.steps) {
    steps.push(
      await runStep(
        adapter,
        config,
        target,
        test.id,
        step,
        options,
        redactionSecrets
      )
    );
  }

  const { score, passRate } = averageScores(steps.map((step) => step.score));

  return {
    testId: test.id,
    name: test.name,
    tags: test.tags,
    steps,
    score,
    passRate
  };
}

async function runStep(
  adapter: ModelAdapter,
  config: Config,
  target: Target,
  testId: string,
  step: TestStep,
  options: RunOptions,
  redactionSecrets: string[]
): Promise<StepResult> {
  let messages: Message[] = [
    { role: "system", content: step.systemPrompt },
    { role: "user", content: step.userPrompt }
  ];
  const transcriptMessages: Message[] = [...messages];

  const allToolCalls: ToolCall[] = [];
  const rawTextParts: string[] = [];
  const protocolViolations: ProtocolViolation[] = [];
  let protocolTotal = 0;
  let protocolClean = 0;
  let totalLatencyMs = 0;
  let usage: ModelResponse["usage"] = undefined;
  const toolResults: ToolResult[] = [];
  const toolErrors: ToolExecutionError[] = [];
  let toolDurationMs = 0;

  for (let turn = 0; turn < config.run.maxTurns; turn += 1) {
    const response = await adapter.invoke({
      target,
      messages,
      tools: step.tools,
      temperature: config.model.temperature,
      maxOutputTokens: config.model.maxOutputTokens,
      seed: config.run.seed,
      timeoutMs: config.run.timeoutMs,
      retries: config.run.retries
    });

    totalLatencyMs += response.latencyMs;
    usage = mergeUsage(usage, response.usage);
    protocolTotal += 1;
    if (response.protocolViolations.length === 0) {
      protocolClean += 1;
    }
    protocolViolations.push(...response.protocolViolations);

    if (response.rawText) {
      rawTextParts.push(response.rawText);
    }

    const toolCalls = response.toolCalls.map((call, index) => ({
      ...call,
      id: call.id ?? `call_${turn}_${index}`
    }));

    allToolCalls.push(...toolCalls);
    const assistantMessage: Message = {
      role: "assistant",
      content: response.rawText ?? "",
      toolCalls: toolCalls.length > 0 ? toolCalls : undefined,
      // Preserve reasoning_details for models that need them (e.g., Gemini thought_signature)
      reasoningDetails: response.reasoningDetails
    };
    transcriptMessages.push(assistantMessage);
    messages = messages.concat(assistantMessage);

    if (toolCalls.length === 0) {
      break;
    }

    const toolStart = Date.now();
    const toolMessages: Message[] = [];
    for (const call of toolCalls) {
      const { result, error } = executeToolCall(call);
      if (result) {
        toolResults.push(result);
      }
      if (error) {
        toolErrors.push(error);
      }

      const payload = result?.result ?? { error: error?.message ?? "Tool error" };
      toolMessages.push({
        role: "tool",
        content: serializeToolResult(payload, TOOL_RESULT_MAX_BYTES),
        name: call.id ?? call.toolName
      });
    }
    toolDurationMs += Date.now() - toolStart;

    messages = messages.concat(toolMessages);
    transcriptMessages.push(...toolMessages);
  }

  const rawText = rawTextParts.join("\n");
  const expectations = evaluateExpectations(step.expect, allToolCalls, step.tools, rawText, usage);
  const schemaViolations = expectations.flatMap((exp) => exp.schemaViolations ?? []);
  const { score, passRate } = scoreExpectations(expectations);

  if (options.transcriptSink) {
    const sanitized = transcriptMessages.map((message) =>
      redactMessage(message, redactionSecrets)
    );
    options.transcriptSink({
      target,
      testId,
      stepId: step.id,
      messages: sanitized
    });
  }

  return {
    stepId: step.id,
    description: step.description,
    toolCalls: allToolCalls,
    rawText: rawText || undefined,
    expectations,
    protocolViolations,
    schemaViolations,
    protocolChecks: { total: protocolTotal, clean: protocolClean },
    score,
    passRate,
    latencyMs: totalLatencyMs,
    usage,
    toolExecution: {
      results: toolResults,
      errors: toolErrors,
      durationMs: toolDurationMs
    }
  };
}

function adapterForTarget(target: Target): ModelAdapter {
  if (target.provider === "openrouter") {
    return new OpenRouterAdapter();
  }

  throw new Error(`Unsupported provider: ${target.provider}`);
}

function scoreExpectations(results: ExpectationResult[]): { score: number; passRate: number } {
  const total = results.reduce((sum, result) => sum + result.weight, 0);
  const passed = results.reduce((sum, result) => sum + (result.pass ? result.weight : 0), 0);
  const score = total === 0 ? 1 : passed / total;
  return { score, passRate: score };
}

function averageScores(scores: number[]): { score: number; passRate: number } {
  if (scores.length === 0) return { score: 1, passRate: 1 };
  const total = scores.reduce((sum, value) => sum + value, 0);
  const score = total / scores.length;
  return { score, passRate: score };
}

function mergeUsage(
  current: ModelResponse["usage"],
  incoming: ModelResponse["usage"]
): ModelResponse["usage"] {
  if (!incoming) return current;
  const next = { ...current };

  if (incoming.inputTokens !== undefined) {
    next.inputTokens = (next.inputTokens ?? 0) + incoming.inputTokens;
  }
  if (incoming.outputTokens !== undefined) {
    next.outputTokens = (next.outputTokens ?? 0) + incoming.outputTokens;
  }
  if (incoming.totalTokens !== undefined) {
    next.totalTokens = (next.totalTokens ?? 0) + incoming.totalTokens;
  }

  return next;
}

function buildMetadata(config: Config, suite: TestSuite, runId: string): RunMetadata {
  const bunGlobal = (globalThis as { Bun?: { version: string } }).Bun;
  const bunVersion = bunGlobal?.version;
  return {
    runId,
    timestamp: new Date().toISOString(),
    toolcallDoctorVersion: "0.1.0",
    suiteId: suite.id,
    suiteVersion: suite.version,
    config,
    environment: {
      bunVersion,
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      gitCommit: readGitCommit()
    }
  };
}

function generateRunId(suite: TestSuite, targets: Target[]): string {
  // Extract and sanitize model name(s)
  const modelNames = targets.map((target) => {
    // Replace slashes and other special chars with dashes, keep alphanumeric and dashes
    return target.model.replace(/[^a-zA-Z0-9-]/g, "-");
  });
  const modelName = modelNames.length === 1 
    ? modelNames[0] 
    : modelNames.join("+");

  // Format date/time as YYYY-MM-DD_HH-MM-SS
  const now = new Date();
  const date = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");
  const time = `${hours}-${minutes}-${seconds}`;

  return `${modelName}_${date}_${time}`;
}

function countTotals(targets: TargetResult[]): RunResult["totals"] {
  let tests = 0;
  let steps = 0;
  let expectations = 0;
  let outputTokens = 0;
  let inputTokens = 0;

  for (const target of targets) {
    tests += target.suite.tests.length;
    for (const test of target.suite.tests) {
      steps += test.steps.length;
      for (const step of test.steps) {
        expectations += step.expectations.length;
        inputTokens += step.usage?.inputTokens ?? 0;
        outputTokens += step.usage?.outputTokens ?? 0;
      }
    }
  }

  return { tests, steps, expectations, outputTokens, inputTokens };
}

function readGitCommit(): string | undefined {
  const headPath = join(".git", "HEAD");
  if (!existsSync(headPath)) return undefined;

  const head = readFileSync(headPath, "utf-8").trim();
  if (head.startsWith("ref: ")) {
    const refPath = head.slice("ref: ".length);
    const refFile = join(".git", refPath);
    if (existsSync(refFile)) {
      return readFileSync(refFile, "utf-8").trim();
    }
    return undefined;
  }

  return head.match(/^[0-9a-f]{40}$/i) ? head : undefined;
}
