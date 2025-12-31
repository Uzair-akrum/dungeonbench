type RollDiceArgs = {
  sides: number;
  count: number;
  modifier?: number;
};

const DEFAULT_ROLL_SEED = 42;
let rollSeed = DEFAULT_ROLL_SEED;

export function resetRollSeed(seed: number = DEFAULT_ROLL_SEED): void {
  rollSeed = seed;
}

function nextRandom(): number {
  rollSeed = (rollSeed * 1664525 + 1013904223) % 4294967296;
  return rollSeed / 4294967296;
}

export function rollDice({ sides, count, modifier = 0 }: RollDiceArgs): {
  total: number;
  rolls: number[];
} {
  const rolls = Array.from({ length: count }, () => 1 + Math.floor(nextRandom() * sides));
  const total = rolls.reduce((sum, value) => sum + value, 0) + modifier;
  return { total, rolls };
}
