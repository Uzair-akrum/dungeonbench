import { z } from "zod";
import type { ToolSpec } from "../../types";

export const describeSceneInputSchema = z.object({
  scene: z.enum(["combat", "exploration", "dialogue"]),
  description: z.string().min(1),
  charactersPresent: z.array(z.string().min(1)).min(1)
});

export const describeSceneTool: ToolSpec = {
  name: "describeScene",
  description: "Narrate what happens in the game",
  inputSchema: describeSceneInputSchema
};
