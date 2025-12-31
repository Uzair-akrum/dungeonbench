import { z } from "zod";
import type { Config } from "./config/schema";

export type Target = {
  provider: "openrouter";
  model: string;
  label?: string;
};

export type ToolSpec = {
  name: string;
  description: string;
  inputSchema: z.ZodTypeAny;
};

export type SchemaViolationType =
  | "typeMismatch"
  | "enumViolation"
  | "missingRequired"
  | "extraKeys"
  | "formatError";

export type SchemaViolation = {
  type: SchemaViolationType;
  path: string;
  expected: string;
  received: string;
};

export type ProtocolViolationType =
  | "thinkingLeakage"
  | "markdownPollution"
  | "jsonParseFailure"
  | "unescapedChars";

export type ProtocolViolation = {
  type: ProtocolViolationType;
  raw: string;
};

export type CriticalMetrics = {
  typeSafety: {
    rate: number;
    total: number;
    passed: number;
    violations: SchemaViolation[];
  };
  parsingStability: {
    rate: number;
    total: number;
    clean: number;
    violations: ProtocolViolation[];
  };
  obedience: {
    rate: number;
    total: number;
    followed: number;
  };
  cost: {
    totalOutputTokens: number;
    totalInputTokens: number;
    successfulActions: number;
    tokensPerAction: number;
  };
};

export type ToolCall = {
  toolName: string;
  arguments: unknown;
  id?: string;
  /** Raw tool call object from provider response - used to preserve thought_signature etc */
  rawToolCall?: Record<string, unknown>;
};

export type ToolResult = {
  toolName: string;
  result: unknown;
};

export type ToolExecutionError = {
  toolName: string;
  message: string;
};

export type Message = {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  name?: string;
  toolCalls?: ToolCall[];
  /** Provider-specific reasoning details to preserve across turns (e.g., for Gemini thought_signature) */
  reasoningDetails?: unknown[];
};

export type ModelRequest = {
  target: Target;
  messages: Message[];
  tools: ToolSpec[];
  temperature: number;
  maxOutputTokens: number;
  seed?: number;
  timeoutMs: number;
  retries?: number;
};

export type ModelResponse = {
  rawText?: string;
  toolCalls: ToolCall[];
  usage?: { inputTokens?: number; outputTokens?: number; totalTokens?: number };
  latencyMs: number;
  protocolViolations: ProtocolViolation[];
  /** Provider-specific reasoning details to preserve across turns */
  reasoningDetails?: unknown[];
};

export interface ModelAdapter {
  name: string;
  invoke(req: ModelRequest): Promise<ModelResponse>;
}

export type ExpectationResult = {
  expectation: Expectation;
  pass: boolean;
  weight: number;
  message?: string;
  schemaViolations?: SchemaViolation[];
  schemaChecks?: { total: number; passed: number };
};

export type ArgsMatchCondition =
  | { path: string; value: unknown }
  | { path: string; values: unknown[] };

export type Expectation =
  | { type: "mustCallTool"; toolName: string }
  | { type: "mustNotCallTool"; toolName: string }
  | { type: "argsSchemaValid"; toolName: string }
  | { type: "argsEqual"; toolName: string; path: string; value: unknown }
  | { type: "argsOneOf"; toolName: string; path: string; values: unknown[] }
  | { type: "argsMatch"; toolName: string; conditions: ArgsMatchCondition[] }
  | { type: "argsNotEqual"; toolName: string; path: string; value: unknown }
  | { type: "argsNotContains"; toolName: string; pattern: string }
  | { type: "argsPatternMatch"; toolName: string; path: string; pattern: string }
  | { type: "maxOutputTokens"; count: number }
  | { type: "exactlyNToolCalls"; n: number }
  | { type: "toolCallCount"; toolName: string; count: number }
  | { type: "noExtraKeys"; toolName: string; allowedKeys: string[] }
  | { type: "toolCallOrder"; toolNames: string[] }
  | { type: "responseMustIncludeText"; substring: string }
  | { type: "responsePatternMatch"; pattern: string };

export type TestStep = {
  id: string;
  description: string;
  systemPrompt: string;
  userPrompt: string;
  tools: ToolSpec[];
  expect: Expectation[];
};

export type TestCase = {
  id: string;
  name: string;
  tags: string[];
  steps: TestStep[];
};

export type TestSuite = {
  id: string;
  version: string;
  tests: TestCase[];
};

export type StepResult = {
  stepId: string;
  description: string;
  toolCalls: ToolCall[];
  rawText?: string;
  expectations: ExpectationResult[];
  protocolViolations: ProtocolViolation[];
  schemaViolations: SchemaViolation[];
  protocolChecks?: { total: number; clean: number };
  score: number;
  passRate: number;
  latencyMs: number;
  usage?: { inputTokens?: number; outputTokens?: number; totalTokens?: number };
  toolExecution?: {
    results: ToolResult[];
    errors: ToolExecutionError[];
    durationMs: number;
  };
};

export type TestResult = {
  testId: string;
  name: string;
  tags: string[];
  steps: StepResult[];
  score: number;
  passRate: number;
};

export type SuiteResult = {
  suiteId: string;
  suiteVersion: string;
  tests: TestResult[];
  score: number;
  passRate: number;
};

export type TargetResult = {
  target: Target;
  suite: SuiteResult;
  metrics: CriticalMetrics;
};

export type RunMetadata = {
  runId: string;
  timestamp: string;
  toolcallDoctorVersion: string;
  suiteId: string;
  suiteVersion: string;
  config: Config;
  environment: {
    bunVersion?: string;
    nodeVersion?: string;
    platform?: string;
    arch?: string;
    gitCommit?: string;
  };
};

export type RunResult = {
  metadata: RunMetadata;
  totals: {
    tests: number;
    steps: number;
    expectations: number;
    outputTokens: number;
    inputTokens: number;
  };
  targets: TargetResult[];
};

export type TranscriptEntry = {
  target: Target;
  testId: string;
  stepId: string;
  messages: Message[];
};
