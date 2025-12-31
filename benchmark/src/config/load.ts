import { existsSync, readFileSync } from "node:fs";
import { ConfigSchema, type Config } from "./schema";

const CONFIG_FILE = "dungeonbench.config.json";

export type ConfigOverrides = Partial<Config>;

export function loadConfig(overrides: ConfigOverrides = {}): Config {
  const fileConfig = readConfigFile();

  const merged = {
    run: { ...fileConfig.run, ...overrides.run },
    model: { ...fileConfig.model, ...overrides.model },
    targets: overrides.targets ?? fileConfig.targets
  };

  return ConfigSchema.parse(merged);
}

function readConfigFile(): Partial<Config> {
  if (!existsSync(CONFIG_FILE)) {
    return {};
  }

  const raw = readFileSync(CONFIG_FILE, "utf-8");
  const parsed = JSON.parse(raw) as Partial<Config>;
  return parsed;
}
