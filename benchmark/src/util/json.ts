export function safeJsonParse<T = unknown>(value: string): {
  ok: boolean;
  value?: T;
  error?: string;
} {
  try {
    return { ok: true, value: JSON.parse(value) as T };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid JSON";
    return { ok: false, error: message };
  }
}
