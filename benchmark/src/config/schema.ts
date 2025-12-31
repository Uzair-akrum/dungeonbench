import { z } from "zod";

const RunConfigSchema = z.object({
  outDir: z.string().default("./runs"),
  suite: z.string().default("roleplay"),
  saveTranscripts: z.boolean().default(false),
  maxTurns: z.number().int().min(1).max(10).default(3),
  retries: z.number().int().min(0).max(5).default(1),
  timeoutMs: z.number().int().min(1000).default(1800000),
  seed: z.number().int().optional(),
  runId: z.string().optional()
});

const ModelConfigSchema = z.object({
  temperature: z.number().min(0).max(2).default(0),
  maxOutputTokens: z.number().int().min(32).max(4096).default(1024)
});

export const ConfigSchema = z.object({
  run: RunConfigSchema.default({}),
  model: ModelConfigSchema.default({}),
  targets: z
    .array(
      z.object({
        provider: z.string(),
        model: z.string(),
        label: z.string().optional()
      })
    )
    .default([])
});

export type Config = z.infer<typeof ConfigSchema>;
