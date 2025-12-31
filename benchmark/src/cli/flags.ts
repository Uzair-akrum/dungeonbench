import type { ConfigOverrides } from "../config/load";

export type ParsedFlags = {
  overrides: ConfigOverrides;
  formats: Set<string>;
  testIds?: string[];
};

export function parseFlags(_argv: string[]): ParsedFlags {
  const overrides: ConfigOverrides = {};
  const models: string[] = [];
  const providers: string[] = [];
  let provider: string | undefined;
  let formats = new Set<string>(["json", "md"]);
  const testIds: string[] = [];

  for (let index = 0; index < _argv.length; index += 1) {
    const arg = _argv[index];
    if (!arg.startsWith("--")) continue;

    switch (arg) {
      case "--provider":
        provider = nextValue(_argv, ++index, arg);
        break;
      case "--providers":
        providers.push(...splitCsv(nextValue(_argv, ++index, arg)));
        break;
      case "--model":
        models.push(nextValue(_argv, ++index, arg));
        break;
      case "--models":
        models.push(...splitCsv(nextValue(_argv, ++index, arg)));
        break;
      case "--suite":
        overrides.run = { ...overrides.run, suite: nextValue(_argv, ++index, arg) };
        break;
      case "--out":
        overrides.run = { ...overrides.run, outDir: nextValue(_argv, ++index, arg) };
        break;
      case "--temperature":
        overrides.model = {
          ...overrides.model,
          temperature: Number(nextValue(_argv, ++index, arg))
        };
        break;
      case "--max-output-tokens":
        overrides.model = {
          ...overrides.model,
          maxOutputTokens: Number(nextValue(_argv, ++index, arg))
        };
        break;
      case "--timeout-ms":
        overrides.run = {
          ...overrides.run,
          timeoutMs: Number(nextValue(_argv, ++index, arg))
        };
        break;
      case "--max-turns":
        overrides.run = {
          ...overrides.run,
          maxTurns: Number(nextValue(_argv, ++index, arg))
        };
        break;
      case "--retries":
        overrides.run = {
          ...overrides.run,
          retries: Number(nextValue(_argv, ++index, arg))
        };
        break;
      case "--seed":
        overrides.run = { ...overrides.run, seed: Number(nextValue(_argv, ++index, arg)) };
        break;
      case "--run-id":
        overrides.run = { ...overrides.run, runId: nextValue(_argv, ++index, arg) };
        break;
      case "--save-transcripts":
        overrides.run = { ...overrides.run, saveTranscripts: true };
        break;
      case "--format": {
        const list = splitCsv(nextValue(_argv, ++index, arg));
        formats = new Set(list);
        break;
      }
      case "--test":
        testIds.push(...splitCsv(nextValue(_argv, ++index, arg)));
        break;
      default:
        break;
    }
  }

  if (provider) {
    providers.length = 0;
    providers.push(provider);
  }

  if (providers.length > 0 && models.length > 0) {
    overrides.targets = providers.flatMap((selectedProvider) =>
      models.map((model) => ({ provider: selectedProvider, model }))
    );
  }

  return { overrides, formats, testIds: testIds.length > 0 ? testIds : undefined };
}

function nextValue(argv: string[], index: number, flag: string): string {
  const value = argv[index];
  if (!value || value.startsWith("--")) {
    throw new Error(`Missing value for ${flag}`);
  }
  return value;
}

function splitCsv(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}
