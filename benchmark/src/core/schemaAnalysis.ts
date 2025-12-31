import type { ZodError } from "zod";
import type { SchemaViolation, SchemaViolationType } from "../types";

export function categorizeZodError(error: ZodError): SchemaViolation[] {
  return error.errors.map((issue) => {
    let type: SchemaViolationType;

    switch (issue.code) {
      case "invalid_type":
        type = issue.received === "undefined" ? "missingRequired" : "typeMismatch";
        break;
      case "invalid_enum_value":
        type = "enumViolation";
        break;
      case "unrecognized_keys":
        type = "extraKeys";
        break;
      case "invalid_string":
        type = "formatError";
        break;
      default:
        type = "typeMismatch";
    }

    return {
      type,
      path: issue.path.join("."),
      expected: issue.expected ?? "unknown",
      received: issue.received ?? "unknown"
    };
  });
}
