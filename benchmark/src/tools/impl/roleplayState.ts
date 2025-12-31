export type CharacterStatus = "healthy" | "poisoned" | "unconscious";

export type CharacterStats = {
  hp?: number;
  maxHp?: number;
  inventory?: string[];
  status?: CharacterStatus;
};

type CharacterStatsUpdate = Partial<CharacterStats>;

const characterStats = new Map<string, CharacterStats>();

export function getCharacterStats(name: string): CharacterStats | undefined {
  return characterStats.get(name);
}

export function upsertCharacterStats(
  name: string,
  update: CharacterStatsUpdate
): CharacterStats {
  const current = characterStats.get(name) ?? {};
  const next: CharacterStats = { ...current };

  if (update.hp !== undefined) {
    next.hp = update.hp;
  }
  if (update.maxHp !== undefined) {
    next.maxHp = update.maxHp;
  }
  if (update.inventory !== undefined) {
    next.inventory = [...update.inventory];
  }
  if (update.status !== undefined) {
    next.status = update.status;
  }

  if (update.maxHp !== undefined && update.hp === undefined && current.hp === undefined) {
    next.hp = update.maxHp;
  }

  if (next.maxHp !== undefined && next.hp !== undefined) {
    next.hp = Math.min(next.hp, next.maxHp);
  }

  if (next.status === undefined && next.hp !== undefined) {
    next.status = next.hp > 0 ? "healthy" : "unconscious";
  }

  characterStats.set(name, next);
  return next;
}

export function resetCharacterStats(): void {
  characterStats.clear();
}

export function applyDamage(name: string, damage: number): number {
  if (damage <= 0) {
    return getCharacterStats(name)?.hp ?? 0;
  }

  const current = characterStats.get(name) ?? {};
  const currentHp = current.hp ?? 0;
  const nextHp = Math.max(0, currentHp - damage);
  const next: CharacterStats = { ...current, hp: nextHp };

  if (nextHp <= 0) {
    next.status = "unconscious";
  } else if (next.status === undefined) {
    next.status = "healthy";
  }

  characterStats.set(name, next);
  return nextHp;
}
