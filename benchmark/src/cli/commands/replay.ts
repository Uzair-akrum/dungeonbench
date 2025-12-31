import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { RunResult } from "../../types";
import { writeMarkdownReport } from "../../core/report/writeMarkdown";

export async function replayCommand(args: string[]): Promise<void> {
  const inputPath = args[0];
  if (!inputPath) {
    console.error("Usage: toolcall-doctor replay <runDir|run.json>");
    return;
  }

  const runPath = inputPath.endsWith(".json") ? inputPath : join(inputPath, "run.json");
  const raw = readFileSync(runPath, "utf-8");
  const run = JSON.parse(raw) as RunResult;
  const outDir = dirname(runPath).includes(run.metadata.runId)
    ? dirname(dirname(runPath))
    : dirname(runPath);

  const reportPath = writeMarkdownReport(run, outDir);
  console.log(`Report written to ${reportPath}`);
}
