import type { ProtocolViolation } from "../types";

const THINKING_PATTERNS = [
  /<thinking>[\s\S]*?<\/thinking>/gi,
  /<antThinking>[\s\S]*?<\/antThinking>/gi,
  /<reflection>[\s\S]*?<\/reflection>/gi
];

const MARKDOWN_PATTERN = /```(?:json)?\s*([\s\S]*?)```/gi;

export type ProtocolAnalysis = {
  cleanContent: string;
  violations: ProtocolViolation[];
  wasClean: boolean;
};

export function analyzeProtocol(raw: string): ProtocolAnalysis {
  const violations: ProtocolViolation[] = [];
  let content = raw;

  for (const pattern of THINKING_PATTERNS) {
    const matches = content.match(pattern);
    if (matches) {
      violations.push({
        type: "thinkingLeakage",
        raw: matches[0].slice(0, 100)
      });
      content = content.replace(pattern, "");
    }
  }

  const mdMatches = content.match(MARKDOWN_PATTERN);
  if (mdMatches) {
    violations.push({
      type: "markdownPollution",
      raw: mdMatches[0].slice(0, 100)
    });
    content = content.replace(MARKDOWN_PATTERN, "$1");
  }

  return {
    cleanContent: content.trim(),
    violations,
    wasClean: violations.length === 0
  };
}

export function analyzeJsonParsing(raw: unknown): ProtocolViolation | null {
  if (typeof raw !== "string") return null;

  try {
    JSON.parse(raw);
    return null;
  } catch {
    return {
      type: "jsonParseFailure",
      raw: String(raw).slice(0, 100)
    };
  }
}
