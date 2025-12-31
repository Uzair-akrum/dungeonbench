import type { ToolSpec } from "../types";

import { describeScene } from "./impl/describeScene";
import { resolveCombatAction } from "./impl/resolveCombatAction";
import { rollDice } from "./impl/rollDice";
import { updateCharacterStats } from "./impl/updateCharacterStats";

import { describeSceneTool } from "./specs/describeScene";
import { resolveCombatActionTool } from "./specs/resolveCombatAction";
import { rollDiceTool } from "./specs/rollDice";
import { updateCharacterStatsTool } from "./specs/updateCharacterStats";

export type ToolImplementation = (args: unknown) => unknown;

export const toolSpecs: ToolSpec[] = [
  describeSceneTool,
  rollDiceTool,
  updateCharacterStatsTool,
  resolveCombatActionTool
];

export const toolSpecByName = new Map(toolSpecs.map((tool) => [tool.name, tool]));

export const toolImplementations: Record<string, ToolImplementation> = {
  describeScene,
  resolveCombatAction,
  rollDice,
  updateCharacterStats
};
