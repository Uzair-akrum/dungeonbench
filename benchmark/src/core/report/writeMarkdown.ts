import { writeFileSync } from "node:fs";
import { join } from "node:path";
import type { ExpectationResult, RunResult, ToolCall } from "../../types";
import { ensureDir } from "../../util/path";
import { markdownTemplates } from "./templates";

type Failure = {
  targetLabel: string;
  testId: string;
  stepId: string;
  message: string;
  expectationType: string;
  toolCalls: ToolCall[];
  rawText?: string;
};

export function writeMarkdownReport(run: RunResult, outDir: string): string {
  const runDir = join(outDir, run.metadata.runId);
  ensureDir(runDir);
  const reportPath = join(runDir, "report.md");

  const content = renderMarkdown(run);
  writeFileSync(reportPath, content, "utf-8");

  return reportPath;
}

function renderMarkdown(run: RunResult): string {
  const lines: string[] = [];
  lines.push(markdownTemplates.header);
  lines.push("");
  lines.push(`Run ID: \`${run.metadata.runId}\``);
  lines.push(`Timestamp: ${run.metadata.timestamp}`);
  lines.push(`Suite: ${run.metadata.suiteId} (${run.metadata.suiteVersion})`);
  if (run.metadata.config.run.saveTranscripts) {
    lines.push("Transcripts: artifacts/transcripts.jsonl");
  }
  lines.push("");

  lines.push(...renderMetricsTable(run));
  lines.push("");
  lines.push(...renderViolationBreakdown(run));
  lines.push("");

  lines.push("## Targets");
  lines.push("");
  lines.push("| Target | Score | Pass Rate | Tests |");
  lines.push("| --- | --- | --- | --- |");
  for (const target of run.targets) {
    const label = target.target.label ?? `${target.target.provider}:${target.target.model}`;
    lines.push(
      `| ${label} | ${formatScore(target.suite.score)} | ${formatPercent(
        target.suite.passRate
      )} | ${target.suite.tests.length} |`
    );
  }
  lines.push("");

  const failures = collectFailures(run);
  if (failures.length > 0) {
    lines.push("## Top failures");
    lines.push("");
    for (const failure of failures.slice(0, 5)) {
      lines.push(
        `- ${failure.targetLabel} · ${failure.testId}/${failure.stepId}: ${failure.message}`
      );
    }
    lines.push("");
  }

  const spicy = collectSpicy(run, failures);
  if (spicy) {
    lines.push("## Spicy");
    lines.push("");
    if (spicy.mostFailedTests.length > 0) {
      lines.push(
        `- Most failed tests: ${spicy.mostFailedTests
          .map((item) => `${item.label} (${item.failures} fails)`) 
          .join(", ")}`
      );
    }
    if (spicy.commonFailureTypes.length > 0) {
      lines.push(
        `- Common failure types: ${spicy.commonFailureTypes
          .map((item) => `${item.type} (${item.count})`)
          .join(", ")}`
      );
    }
    if (spicy.example) {
      lines.push(
        `- Example failure: ${spicy.example.targetLabel} · ${spicy.example.testId}/${spicy.example.stepId}`
      );
      lines.push("");
      lines.push("```json");
      lines.push(
        JSON.stringify(
          {
            message: spicy.example.message,
            toolCalls: spicy.example.toolCalls,
            rawText: truncateText(spicy.example.rawText ?? "", 240)
          },
          null,
          2
        )
      );
      lines.push("```");
    }
    lines.push("");
  }

  lines.push("## Per-test summary");
  lines.push("");
  for (const target of run.targets) {
    const label = target.target.label ?? `${target.target.provider}:${target.target.model}`;
    lines.push(`### ${label}`);
    lines.push("");
    for (const test of target.suite.tests) {
      lines.push(
        `- ${test.testId} (${formatScore(test.score)}): ${test.name}`
      );
    }
    lines.push("");
  }

  return lines.join("\n");
}

function renderMetricsTable(run: RunResult): string[] {
  const lines: string[] = [];
  lines.push("## Critical Metrics Dashboard");
  lines.push("");
  lines.push("| Model | Type Safety | Parsing Stability | Obedience | Cost (tok/action) |");
  lines.push("| --- | --- | --- | --- | --- |");

  for (const target of run.targets) {
    const label = target.target.label ?? target.target.model;
    const metrics = target.metrics;
    lines.push(
      `| ${label} | ${formatPct(metrics.typeSafety.rate)} | ${formatPct(
        metrics.parsingStability.rate
      )} | ${formatPct(metrics.obedience.rate)} | ${metrics.cost.tokensPerAction} |`
    );
  }

  return lines;
}

function renderViolationBreakdown(run: RunResult): string[] {
  const lines: string[] = [];
  lines.push("## Violation Breakdown");
  lines.push("");

  for (const target of run.targets) {
    const label = target.target.label ?? target.target.model;
    lines.push(`### ${label}`);

    const schemaByType = groupBy(target.metrics.typeSafety.violations, (v) => v.type);
    if (Object.keys(schemaByType).length > 0) {
      lines.push("**Schema Violations:**");
      for (const [type, violations] of Object.entries(schemaByType)) {
        lines.push(`- ${type}: ${violations.length}`);
      }
    }

    const protocolByType = groupBy(
      target.metrics.parsingStability.violations,
      (v) => v.type
    );
    if (Object.keys(protocolByType).length > 0) {
      lines.push("**Protocol Violations:**");
      for (const [type, violations] of Object.entries(protocolByType)) {
        lines.push(`- ${type}: ${violations.length}`);
      }
    }

    lines.push("");
  }

  return lines;
}

function collectFailures(run: RunResult): Failure[] {
  const failures: Failure[] = [];

  for (const target of run.targets) {
    const targetLabel = target.target.label ?? `${target.target.provider}:${target.target.model}`;
    for (const test of target.suite.tests) {
      for (const step of test.steps) {
        for (const expectation of step.expectations) {
          if (!expectation.pass) {
            failures.push({
              targetLabel,
              testId: test.testId,
              stepId: step.stepId,
              message: expectation.message ?? formatExpectation(expectation),
              expectationType: expectation.expectation.type,
              toolCalls: step.toolCalls,
              rawText: step.rawText
            });
          }
        }
      }
    }
  }

  return failures;
}

function collectSpicy(
  run: RunResult,
  failures: Failure[]
): {
  mostFailedTests: Array<{ label: string; failures: number }>;
  commonFailureTypes: Array<{ type: string; count: number }>;
  example?: Failure;
} | null {
  if (failures.length === 0) return null;

  const testFailures = new Map<string, { label: string; failures: number }>();
  for (const target of run.targets) {
    const targetLabel = target.target.label ?? `${target.target.provider}:${target.target.model}`;
    for (const test of target.suite.tests) {
      const failedCount = test.steps.reduce(
        (sum, step) => sum + step.expectations.filter((exp) => !exp.pass).length,
        0
      );
      if (failedCount === 0) continue;
      const label = `${targetLabel} · ${test.testId}`;
      testFailures.set(label, { label, failures: failedCount });
    }
  }

  const mostFailedTests = Array.from(testFailures.values())
    .sort((a, b) => b.failures - a.failures)
    .slice(0, 3);

  const failureTypeCounts = new Map<string, number>();
  for (const failure of failures) {
    failureTypeCounts.set(
      failure.expectationType,
      (failureTypeCounts.get(failure.expectationType) ?? 0) + 1
    );
  }
  const commonFailureTypes = Array.from(failureTypeCounts.entries())
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return {
    mostFailedTests,
    commonFailureTypes,
    example: failures[0]
  };
}

function formatExpectation(expectation: ExpectationResult): string {
  return JSON.stringify(expectation.expectation);
}

function formatScore(score: number): string {
  return score.toFixed(2);
}

function formatPercent(score: number): string {
  return `${(score * 100).toFixed(1)}%`;
}

function formatPct(rate: number): string {
  const pct = (rate * 100).toFixed(1);
  if (rate >= 0.99) return `✅ ${pct}%`;
  if (rate >= 0.9) return `⚠️ ${pct}%`;
  return `❌ ${pct}%`;
}

function truncateText(value: string, maxChars: number): string {
  if (value.length <= maxChars) return value;
  return `${value.slice(0, maxChars)}...`;
}

function groupBy<T, K extends string>(
  items: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  const grouped = {} as Record<K, T[]>;
  for (const item of items) {
    const key = keyFn(item);
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
  }
  return grouped;
}
