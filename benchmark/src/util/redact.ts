import type { Message } from "../types";

const DEFAULT_PATTERNS = [/Bearer\s+[A-Za-z0-9_\-\.]+/g];

export function redactString(input: string, extraSecrets: string[] = []): string {
  let output = input;
  for (const pattern of DEFAULT_PATTERNS) {
    output = output.replace(pattern, "Bearer [REDACTED]");
  }

  for (const secret of extraSecrets) {
    if (!secret) continue;
    output = output.split(secret).join("[REDACTED]");
  }

  return output;
}

export function redactValue(value: unknown, extraSecrets: string[] = []): unknown {
  if (typeof value === "string") {
    return redactString(value, extraSecrets);
  }

  if (Array.isArray(value)) {
    return value.map((item) => redactValue(item, extraSecrets));
  }

  if (value && typeof value === "object") {
    const output: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) {
      output[key] = redactValue(item, extraSecrets);
    }
    return output;
  }

  return value;
}

export function redactMessage(message: Message, extraSecrets: string[] = []): Message {
  return {
    ...message,
    content: redactString(message.content, extraSecrets),
    toolCalls: message.toolCalls?.map((call) => ({
      ...call,
      arguments: redactValue(call.arguments, extraSecrets)
    }))
  };
}

export function collectSecrets(env: NodeJS.ProcessEnv): string[] {
  return [
    env.OPENROUTER_API_KEY ?? "",
    env.OPENAI_API_KEY ?? "",
    env.ANTHROPIC_API_KEY ?? ""
  ].filter(Boolean);
}
