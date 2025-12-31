import { z } from "zod";
import type { ToolSpec } from "../../types";

export const updateCharacterStatsInputSchema = z.object({
  characterName: z.string().min(1),
  hp: z.number().int().min(0).optional(),
  maxHp: z.number().int().min(1).optional(),
  inventory: z.array(z.string().min(1)).optional(),
  status: z.enum(["healthy", "poisoned", "unconscious"]).optional()
});

export const updateCharacterStatsTool: ToolSpec = {
  name: "updateCharacterStats",
  description: "Track player HP, inventory, and status",
  inputSchema: updateCharacterStatsInputSchema
};
