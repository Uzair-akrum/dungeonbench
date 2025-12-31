import { applyDamage, getCharacterStats } from "./roleplayState";

type ResolveCombatActionArgs = {
  attacker: string;
  target: string;
  action: "attack" | "cast" | "defend";
  damage?: number;
  rollResult?: number;
};

export function resolveCombatAction({
  target,
  action,
  damage,
  rollResult
}: ResolveCombatActionArgs): {
  success: boolean;
  damageDealt: number;
  targetHp: number;
} {
  if (action === "defend") {
    return {
      success: true,
      damageDealt: 0,
      targetHp: getCharacterStats(target)?.hp ?? 0
    };
  }

  const success = rollResult === undefined ? true : rollResult >= 10;
  const baseDamage = damage ?? Math.max(1, Math.floor((rollResult ?? 10) / 2));
  const damageDealt = success ? baseDamage : 0;
  const targetHp =
    damageDealt > 0 ? applyDamage(target, damageDealt) : getCharacterStats(target)?.hp ?? 0;

  return { success, damageDealt, targetHp };
}
