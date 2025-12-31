import { writeFileSync } from "node:fs";
import { join } from "node:path";
import type { RunResult } from "../../types";
import { ensureDir } from "../../util/path";

export function writeJsonReport(run: RunResult, outDir: string): string {
  const runDir = join(outDir, run.metadata.runId);
  ensureDir(runDir);
  const runPath = join(runDir, "run.json");
  writeFileSync(runPath, JSON.stringify(run, null, 2), "utf-8");
  return runDir;
}
