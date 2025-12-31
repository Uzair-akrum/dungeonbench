import { z } from "zod";
import type { ToolSpec } from "../../types";

export const rollDiceInputSchema = z.object({
    sides: z.number().int().min(1),
    count: z.number().int().min(1),
    modifier: z.number().int().optional()
});

export const rollDiceTool: ToolSpec = {
    name: "rollDice",
    description: "Roll dice for game mechanics",
    inputSchema: rollDiceInputSchema
};
