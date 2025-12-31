import type { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

export type JsonSchema = Record<string, unknown>;

/**
 * Converts a Zod schema to JSON Schema, ensuring the result has type: "object" at the root
 * (required by OpenRouter/OpenAI API for function parameters).
 */
export function toJsonSchema(schema: z.ZodTypeAny): JsonSchema {
  const jsonSchema = zodToJsonSchema(schema, { $refStrategy: "none" }) as JsonSchema;
  
  // OpenRouter/OpenAI API requires type: "object" at the root for function parameters.
  // Some complex Zod schemas (like discriminated unions with .and()) may produce schemas
  // without a root type or with type: null/undefined.
  const rootType = jsonSchema.type;
  
  // If type is missing, null, or not "object", we need to normalize it
  if (!rootType || rootType === null || (typeof rootType === "string" && rootType !== "object")) {
    // Create a normalized schema with type: "object" at root
    // Preserve all other fields (allOf, anyOf, properties, etc.)
    const normalized: JsonSchema = {
      type: "object",
    };
    
    // Copy all existing fields except type
    for (const [key, value] of Object.entries(jsonSchema)) {
      if (key !== "type") {
        normalized[key] = value;
      }
    }
    
    return normalized;
  }
  
  return jsonSchema;
}
