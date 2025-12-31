import { join } from "node:path";
import { loadConfig } from "../../config/load";
import { runSuite } from "../../core/runner";
import { writeJsonReport } from "../../core/report/writeJson";
import { writeMarkdownReport } from "../../core/report/writeMarkdown";
import { writeTranscripts } from "../../core/report/writeTranscripts";
import { Suites } from "../../suites";
import { parseFlags } from "../flags";
import type { TranscriptEntry } from "../../types";
import { collectSecrets } from "../../util/redact";

export async function runCommand(args: string[]): Promise<void> {
  const { overrides, formats, testIds } = parseFlags(args);
  const config = loadConfig(overrides);
  let suite = Suites[config.run.suite as keyof typeof Suites];

  if (!suite) {
    throw new Error(`Unknown suite: ${config.run.suite}`);
  }

  if (testIds && testIds.length > 0) {
    const tests = suite.tests.filter((test) => testIds.includes(test.id));
    if (tests.length === 0) {
      throw new Error(`No tests matched: ${testIds.join(", ")}`);
    }
    suite = { ...suite, tests };
  }

  const transcripts: TranscriptEntry[] = [];
  const run = await runSuite(config, suite, {
    transcriptSink: config.run.saveTranscripts
      ? (entry) => transcripts.push(entry)
      : undefined,
    redactionSecrets: collectSecrets(process.env)
  });
  let runDir = join(config.run.outDir, run.metadata.runId);
  if (formats.has("json")) {
    runDir = writeJsonReport(run, config.run.outDir);
  }

  if (formats.has("md")) {
    writeMarkdownReport(run, config.run.outDir);
  }

  if (config.run.saveTranscripts) {
    writeTranscripts(transcripts, config.run.outDir, run.metadata.runId);
  }

  console.log(`Run written to ${runDir}`);
}
