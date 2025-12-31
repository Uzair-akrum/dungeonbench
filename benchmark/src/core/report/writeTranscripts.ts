import { writeFileSync } from "node:fs";
import { join } from "node:path";
import type { TranscriptEntry } from "../../types";
import { ensureDir } from "../../util/path";

export function writeTranscripts(
  entries: TranscriptEntry[],
  outDir: string,
  runId: string
): string {
  const artifactsDir = join(outDir, runId, "artifacts");
  ensureDir(artifactsDir);
  const filePath = join(artifactsDir, "transcripts.jsonl");
  const lines = entries.map((entry) => JSON.stringify(entry));
  writeFileSync(filePath, lines.join("\n"), "utf-8");
  return filePath;
}
