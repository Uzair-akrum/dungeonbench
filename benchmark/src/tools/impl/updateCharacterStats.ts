import { upsertCharacterStats } from "./roleplayState";

type UpdateCharacterStatsArgs = {
  characterName: string;
  hp?: number;
  maxHp?: number;
  inventory?: string[];
  status?: "healthy" | "poisoned" | "unconscious";
};

export function updateCharacterStats(args: UpdateCharacterStatsArgs): {
  characterName: string;
  currentStats: {
    hp?: number;
    maxHp?: number;
    inventory?: string[];
    status?: "healthy" | "poisoned" | "unconscious";
  };
} {
  const update: Omit<UpdateCharacterStatsArgs, "characterName"> = {};

  if (args.hp !== undefined) update.hp = args.hp;
  if (args.maxHp !== undefined) update.maxHp = args.maxHp;
  if (args.inventory !== undefined) update.inventory = args.inventory;
  if (args.status !== undefined) update.status = args.status;

  const currentStats = upsertCharacterStats(args.characterName, update);

  return { characterName: args.characterName, currentStats };
}
