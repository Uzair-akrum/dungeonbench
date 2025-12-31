import { z } from "zod";
import type { ToolSpec } from "../../types";

export const resolveCombatActionInputSchema = z.object({
  attacker: z.string().min(1),
  target: z.string().min(1),
  action: z.enum(["attack", "cast", "defend"]),
  damage: z.number().int().min(0).optional(),
  rollResult: z.number().int().min(1).optional()
});

export const resolveCombatActionTool: ToolSpec = {
  name: "resolveCombatAction",
  description: "Process combat actions like attacks, spells, and defense",
  inputSchema: resolveCombatActionInputSchema
};
