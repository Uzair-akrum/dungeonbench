export class HttpError extends Error {
  status: number;
  body: string;

  constructor(status: number, body: string) {
    super(body);
    this.status = status;
    this.body = body;
  }
}

export type RetryOptions = {
  retries?: number;
  minDelayMs?: number;
  maxDelayMs?: number;
  retryableStatusCodes?: number[];
};

const DEFAULT_RETRYABLE_STATUS = [429, 502, 503, 504];

export function isRetryableStatus(status: number, retryable = DEFAULT_RETRYABLE_STATUS): boolean {
  return retryable.includes(status);
}

export async function withRetries<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const retries = options.retries ?? 0;
  const minDelayMs = options.minDelayMs ?? 250;
  const maxDelayMs = options.maxDelayMs ?? 2000;
  const retryable = options.retryableStatusCodes ?? DEFAULT_RETRYABLE_STATUS;

  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt += 1;
      const shouldRetry =
        error instanceof HttpError && isRetryableStatus(error.status, retryable);

      if (!shouldRetry || attempt > retries) {
        throw error;
      }

      const delay = Math.min(maxDelayMs, minDelayMs * 2 ** (attempt - 1));
      await sleep(delay);
    }
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
