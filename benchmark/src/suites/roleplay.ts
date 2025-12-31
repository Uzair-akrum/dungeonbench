import type { Expectation, TestCase, TestSuite } from "../types";
import { describeSceneTool } from "../tools/specs/describeScene";
import { rollDiceTool } from "../tools/specs/rollDice";
import { resolveCombatActionTool } from "../tools/specs/resolveCombatAction";
import { updateCharacterStatsTool } from "../tools/specs/updateCharacterStats";
import { baseSystemPrompt } from "./helpers";

const losAmmoPrompt = [
  baseSystemPrompt,
  "You are a Dungeon Master running a D&D game.",
  "Grid uses 5ft squares; movement and distance use Manhattan (no diagonals).",
  "Walls block movement and line of sight.",
  "Only corridor squares with x=0 are open; all squares with x!=0 are walls.",
  "Ranged attacks require line of sight; you cannot shoot through walls.",
  "Ranged attacks have a maximum range of 30ft (6 squares).",
  "You can only make one ranged attack per turn.",
  "Dashing uses your action; if you dash you cannot attack that turn.",
  "Aria has a bow and exactly 2 arrows.",
  "Represent inventory as an array of strings: 'bow' and one 'arrow' per remaining arrow.",
  "Each valid shot consumes 1 arrow. Invalid shots (no line of sight or out of range) do not consume ammo.",
  "Attacks automatically hit for this test. Do not roll dice.",
  "Each arrow deals exactly 4 damage.",
  "Track HP for all named creatures using updateCharacterStats.",
  "Only call updateCharacterStats when HP or inventory changes.",
  "Use describeScene for narration, resolveCombatAction for attacks, updateCharacterStats for inventory or HP changes.",
  "IMPORTANT: Do not output raw text. You MUST use describeScene for narration."
].join("\n");

const withLosAmmoRecap = (recap: string): string =>
  [losAmmoPrompt, `Session recap: ${recap}`].join("\n");

const massEffectsPrompt = [
  baseSystemPrompt,
  "You are a Dungeon Master running a D&D game.",
  "No dice. Use fixed damage values; do not roll.",
  "Effect 1 (Turn 1): Arcane Pulse hits all creatures now. Base damage 7.",
  "Modifiers: shielded take 3, vulnerable take 14, resistant take 4 (round down).",
  "Effect 2 (Turn 2): Frost Wave hits only creatures with y<=1. Base damage 5.",
  "Modifiers: shielded take 2, vulnerable take 10, resistant take 2 (round down).",
  "Do not re-apply Arcane Pulse on Turn 2; only apply Frost Wave then.",
  "Track HP for all named creatures using updateCharacterStats.",
  "Call updateCharacterStats once per creature affected.",
  "Only call updateCharacterStats when HP changes.",
  "Use describeScene for narration, updateCharacterStats for HP changes.",
  "IMPORTANT: Do not output raw text. You MUST use describeScene for narration."
].join("\n");

const withMassEffectsRecap = (recap: string): string =>
  [massEffectsPrompt, `Session recap: ${recap}`].join("\n");

const delayedBlastPrompt = [
  baseSystemPrompt,
  "You are a Dungeon Master running a D&D game.",
  "No dice. Use fixed damage values; do not roll.",
  "Aria is poisoned: she takes 1 damage at the start of every turn (including Turn 1) before any other effects.",
  "At the start of Turn 2, a ceiling shard hits Goblin E for 3 damage.",
  "Bomb at (0,2) explodes at the start of Turn 3 (after two full turns).",
  "Explosion deals 10 fire damage to any creature within Manhattan distance 2 of the bomb.",
  "Shielded creatures take only 4 damage. Vulnerable creatures take 20 damage.",
  "Track HP for all named creatures using updateCharacterStats.",
  "Call updateCharacterStats once per creature affected.",
  "Only call updateCharacterStats when HP changes.",
  "Use describeScene for narration, updateCharacterStats for HP changes.",
  "IMPORTANT: Do not output raw text. You MUST use describeScene for narration."
].join("\n");

const withDelayedBlastRecap = (recap: string): string =>
  [delayedBlastPrompt, `Session recap: ${recap}`].join("\n");

type Trait = "shielded" | "vulnerable" | "resistant" | "normal";

type Entity = {
  name: string;
  trait?: Trait;
  x: number;
  y: number;
  hp: number;
};

const arcaneDamageByTrait: Record<Trait, number> = {
  shielded: 3,
  vulnerable: 14,
  resistant: 4,
  normal: 7
};

const frostDamageByTrait: Record<Trait, number> = {
  shielded: 2,
  vulnerable: 10,
  resistant: 2,
  normal: 5
};

const blastDamageByTrait: Record<Trait, number> = {
  shielded: 4,
  vulnerable: 20,
  resistant: 10,
  normal: 10
};

const traitLabel = (trait?: Trait): string =>
  trait && trait !== "normal" ? ` (${trait})` : "";

const traitKey = (trait?: Trait): Trait => trait ?? "normal";

const formatEntity = (entity: Entity, hp: number): string =>
  `${entity.name}${traitLabel(entity.trait)} at (${entity.x},${entity.y}) HP ${hp}`;

const formatEntityState = (entity: Entity, hp: number): string =>
  `${entity.name}${traitLabel(entity.trait)} ${hp} at (${entity.x},${entity.y})`;

const baseMassEntities: Entity[] = [
  { name: "Aria", trait: "resistant", x: 0, y: 0, hp: 21 },
  { name: "Goblin A", trait: "shielded", x: 1, y: 0, hp: 9 },
  { name: "Goblin B", trait: "vulnerable", x: 2, y: 0, hp: 26 },
  { name: "Goblin C", x: 0, y: 2, hp: 14 },
  { name: "Goblin D", trait: "resistant", x: 1, y: 2, hp: 18 },
  { name: "Goblin E", trait: "shielded", x: 2, y: 1, hp: 11 },
  { name: "Goblin F", trait: "vulnerable", x: 0, y: 3, hp: 23 },
  { name: "Goblin G", x: 2, y: 2, hp: 17 }
];

const baseDelayedEntities: Entity[] = [
  { name: "Aria", x: 0, y: 0, hp: 15 },
  { name: "Goblin A", trait: "shielded", x: 0, y: 2, hp: 11 },
  { name: "Goblin B", trait: "vulnerable", x: 0, y: 3, hp: 23 },
  { name: "Goblin C", x: 0, y: 4, hp: 14 },
  { name: "Goblin D", x: 0, y: 6, hp: 16 },
  { name: "Goblin E", trait: "shielded", x: 1, y: 2, hp: 12 },
  { name: "Goblin F", x: 0, y: 8, hp: 10 }
];

const variantId = (index: number): string => `v${String(index).padStart(2, "0")}`;

const applyDamage = (hp: number, damage: number): number => Math.max(0, hp - damage);

const buildMassEffectsTest = (index: number, hpOffset: number): TestCase => {
  const suffix = variantId(index);
  const entities = baseMassEntities.map((entity) => ({
    ...entity,
    hp: entity.hp + hpOffset
  }));
  const afterPulse = new Map(
    entities.map((entity) => [
      entity.name,
      applyDamage(entity.hp, arcaneDamageByTrait[traitKey(entity.trait)])
    ])
  );
  const pulseSummary = entities.map((entity) =>
    formatEntityState(entity, afterPulse.get(entity.name) ?? entity.hp)
  );
  const frostTargets = entities.filter((entity) => entity.y <= 1);
  const frostSummary = frostTargets.map((entity) =>
    formatEntityState(
      entity,
      applyDamage(
        afterPulse.get(entity.name) ?? entity.hp,
        frostDamageByTrait[traitKey(entity.trait)]
      )
    )
  );
  const frostExcluded = entities.filter((entity) => entity.y > 1).map((entity) => entity.name);

  return {
    id: `roleplay.dm.state.mass-effects.${suffix}`,
    name: `DM State: Mass effects + modifiers (${suffix})`,
    tags: ["roleplay", "dm", "state", "numeric", "hard"],
    steps: [
      {
        id: "step1",
        description: "Apply Arcane Pulse to all creatures",
        systemPrompt: withMassEffectsRecap(
          `Turn 1. Positions and traits: ${entities.map((entity) => formatEntity(entity, entity.hp)).join(
            ". "
          )}.`
        ),
        userPrompt: "The arcane pulse detonates now.",
        tools: [describeSceneTool, rollDiceTool, resolveCombatActionTool, updateCharacterStatsTool],
        expect: [
          { type: "mustCallTool", toolName: "describeScene" },
          { type: "argsEqual", toolName: "describeScene", path: "scene", value: "combat" },
          { type: "mustCallTool", toolName: "updateCharacterStats" },
          { type: "toolCallCount", toolName: "updateCharacterStats", count: entities.length },
          { type: "mustNotCallTool", toolName: "rollDice" },
          { type: "mustNotCallTool", toolName: "resolveCombatAction" },
          ...entities.map((entity): Expectation => ({
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: entity.name },
              { path: "hp", value: afterPulse.get(entity.name)! }
            ]
          }))
        ]
      },
      {
        id: "step2",
        description: "Apply Frost Wave to y<=1 only",
        systemPrompt: withMassEffectsRecap(
          `Turn 2. Arcane Pulse already occurred. Current HP after pulse: ${pulseSummary.join(
            ". "
          )}. Apply Frost Wave now to y<=1 only.`
        ),
        userPrompt: "The frost wave hits.",
        tools: [describeSceneTool, rollDiceTool, resolveCombatActionTool, updateCharacterStatsTool],
        expect: [
          { type: "mustCallTool", toolName: "describeScene" },
          { type: "argsEqual", toolName: "describeScene", path: "scene", value: "combat" },
          { type: "mustCallTool", toolName: "updateCharacterStats" },
          { type: "toolCallCount", toolName: "updateCharacterStats", count: frostTargets.length },
          { type: "mustNotCallTool", toolName: "rollDice" },
          { type: "mustNotCallTool", toolName: "resolveCombatAction" },
          ...frostTargets.map((entity): Expectation => ({
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: entity.name },
              {
                path: "hp",
                value: applyDamage(
                  afterPulse.get(entity.name) ?? entity.hp,
                  frostDamageByTrait[traitKey(entity.trait)]
                )
              }
            ]
          })),
          frostExcluded.length > 0
            ? {
                type: "argsNotContains",
                toolName: "updateCharacterStats",
                pattern: `(${frostExcluded.join("|")})`
              }
            : { type: "argsNotContains", toolName: "updateCharacterStats", pattern: "UNUSED" }
        ]
      }
    ]
  };
};

const buildLosAmmoTest = (index: number, baseY: number, hpOffset: number): TestCase => {
  const suffix = variantId(index);
  const goblinAY = baseY + 2;
  const goblinAHp = 9 + hpOffset;
  const goblinBHp = 7 + hpOffset;
  const goblinAAfterFirst = goblinAHp - 4;
  const goblinAAfterSecond = goblinAHp - 8;
  const step0Y = baseY - 12;
  return {
    id: `roleplay.dm.spatial.los-ammo.${suffix}`,
    name: `DM Spatial: Line of sight + ammo (${suffix})`,
    tags: ["roleplay", "dm", "spatial", "resource", "hard"],
    steps: [
      {
        id: "step0",
        description: "Dash to reach range but cannot shoot",
        systemPrompt: withLosAmmoRecap(
          `Positions: Aria at (0,${step0Y}). Goblin A at (0,${goblinAY}) in the corridor (HP ${goblinAHp}). Goblin B at (2,${goblinAY}) behind a wall (HP ${goblinBHp}). Inventory: ['bow','arrow','arrow'].`
        ),
        userPrompt: "I dash up to get in range and fire at Goblin A.",
        tools: [describeSceneTool, rollDiceTool, resolveCombatActionTool, updateCharacterStatsTool],
        expect: [
          { type: "mustCallTool", toolName: "describeScene" },
          { type: "argsEqual", toolName: "describeScene", path: "scene", value: "combat" },
          {
            type: "argsPatternMatch",
            toolName: "describeScene",
            path: "description",
            pattern:
              "([Dd]ash|[Uu]sed your action|cannot attack this turn|no time to attack|can't attack this turn)"
          },
          { type: "mustNotCallTool", toolName: "rollDice" },
          { type: "mustNotCallTool", toolName: "resolveCombatAction" },
          { type: "mustNotCallTool", toolName: "updateCharacterStats" }
        ]
      },
      {
        id: "step1",
        description: "Line of sight blocks one shot; ammo decrements for valid shot",
        systemPrompt: withLosAmmoRecap(
          `Positions: Aria at (0,${baseY}). Goblin A at (0,${goblinAY}) in the corridor (HP ${goblinAHp}). Goblin B at (2,${goblinAY}) behind a wall (HP ${goblinBHp}). Inventory: ['bow','arrow','arrow'].`
        ),
        userPrompt: "I fire two arrows: one at Goblin A, one at Goblin B.",
        tools: [describeSceneTool, rollDiceTool, resolveCombatActionTool, updateCharacterStatsTool],
        expect: [
          { type: "mustNotCallTool", toolName: "rollDice" },
          { type: "mustCallTool", toolName: "resolveCombatAction" },
          { type: "toolCallCount", toolName: "resolveCombatAction", count: 1 },
          {
            type: "argsMatch",
            toolName: "resolveCombatAction",
            conditions: [
              { path: "attacker", value: "Aria" },
              { path: "target", values: ["Goblin A", "goblin a"] },
              { path: "action", value: "attack" },
              { path: "damage", value: 4 }
            ]
          },
          { type: "argsNotContains", toolName: "resolveCombatAction", pattern: "Goblin B" },
          { type: "mustCallTool", toolName: "updateCharacterStats" },
          { type: "toolCallCount", toolName: "updateCharacterStats", count: 2 },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Goblin A" },
              { path: "hp", value: goblinAAfterFirst }
            ]
          },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Aria" },
              { path: "inventory", value: ["bow", "arrow"] }
            ]
          },
          { type: "argsNotContains", toolName: "updateCharacterStats", pattern: "Goblin B" },
          { type: "mustCallTool", toolName: "describeScene" },
          { type: "argsEqual", toolName: "describeScene", path: "scene", value: "combat" },
          {
            type: "argsPatternMatch",
            toolName: "describeScene",
            path: "description",
            pattern: "([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)"
          }
        ]
      },
      {
        id: "step2",
        description: "Second valid shot consumes the last arrow",
        systemPrompt: withLosAmmoRecap(
          `Aria is at (0,${baseY}) with one arrow left. Goblin A HP ${goblinAAfterFirst}. Goblin B HP ${goblinBHp} behind the wall. Inventory: ['bow','arrow'].`
        ),
        userPrompt: "I shoot Goblin A again.",
        tools: [describeSceneTool, rollDiceTool, resolveCombatActionTool, updateCharacterStatsTool],
        expect: [
          { type: "mustNotCallTool", toolName: "rollDice" },
          { type: "mustCallTool", toolName: "resolveCombatAction" },
          { type: "toolCallCount", toolName: "resolveCombatAction", count: 1 },
          {
            type: "argsMatch",
            toolName: "resolveCombatAction",
            conditions: [
              { path: "attacker", value: "Aria" },
              { path: "target", values: ["Goblin A", "goblin a"] },
              { path: "action", value: "attack" },
              { path: "damage", value: 4 }
            ]
          },
          { type: "mustCallTool", toolName: "updateCharacterStats" },
          { type: "toolCallCount", toolName: "updateCharacterStats", count: 2 },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Goblin A" },
              { path: "hp", value: goblinAAfterSecond }
            ]
          },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Aria" },
              { path: "inventory", value: ["bow"] }
            ]
          },
          { type: "mustCallTool", toolName: "describeScene" },
          { type: "argsEqual", toolName: "describeScene", path: "scene", value: "combat" }
        ]
      },
      {
        id: "step3",
        description: "Out of ammo and no line of sight blocks a shot",
        systemPrompt: withLosAmmoRecap(
          `Aria is at (0,${baseY}) with no arrows left. Goblin B remains behind the wall at (2,${goblinAY}). Inventory: ['bow'].`
        ),
        userPrompt: "I shoot Goblin B anyway.",
        tools: [describeSceneTool, rollDiceTool, resolveCombatActionTool, updateCharacterStatsTool],
        expect: [
          { type: "mustCallTool", toolName: "describeScene" },
          { type: "argsEqual", toolName: "describeScene", path: "scene", value: "combat" },
          {
            type: "argsPatternMatch",
            toolName: "describeScene",
            path: "description",
            pattern:
              "([Nn]o arrows|[Oo]ut of arrows|[Nn]o ammunition|[Cc]an('t|not) shoot|[Ll]ine of sight|[Ww]all|[Bb]locked)"
          },
          { type: "mustNotCallTool", toolName: "rollDice" },
          { type: "mustNotCallTool", toolName: "resolveCombatAction" },
          { type: "mustNotCallTool", toolName: "updateCharacterStats" }
        ]
      }
    ]
  };
};

const buildDelayedBlastTest = (index: number, hpOffset: number): TestCase => {
  const suffix = variantId(index);
  const entities = baseDelayedEntities.map((entity) => ({
    ...entity,
    hp: entity.hp + hpOffset
  }));
  const get = (name: string) => entities.find((entity) => entity.name === name);
  const aria = get("Aria");
  const goblinA = get("Goblin A");
  const goblinB = get("Goblin B");
  const goblinC = get("Goblin C");
  const goblinD = get("Goblin D");
  const goblinE = get("Goblin E");
  const goblinF = get("Goblin F");

  if (!aria || !goblinA || !goblinB || !goblinC || !goblinD || !goblinE || !goblinF) {
    throw new Error(`Missing delayed-blast entities for ${suffix}`);
  }

  const ariaAfterTurn1 = aria.hp - 1;
  const ariaAfterTurn2 = aria.hp - 2;
  const ariaAfterTurn3 = aria.hp - 3;
  const goblinEAfterShard = goblinE.hp - 3;

  const goblinAAfterBlast = applyDamage(
    goblinA.hp,
    blastDamageByTrait[traitKey(goblinA.trait)]
  );
  const goblinBAfterBlast = applyDamage(
    goblinB.hp,
    blastDamageByTrait[traitKey(goblinB.trait)]
  );
  const goblinCAfterBlast = applyDamage(
    goblinC.hp,
    blastDamageByTrait[traitKey(goblinC.trait)]
  );
  const goblinEAfterBlast = applyDamage(
    goblinEAfterShard,
    blastDamageByTrait[traitKey(goblinE.trait)]
  );

  return {
    id: `roleplay.dm.temporal.delayed-blast.${suffix}`,
    name: `DM Temporal: Delayed blast radius (${suffix})`,
    tags: ["roleplay", "dm", "temporal", "spatial", "state", "hard"],
    steps: [
      {
        id: "step1",
        description: "Light fuse and reposition",
        systemPrompt: withDelayedBlastRecap(
          `Turn 1. Positions: Aria at (0,0) HP ${aria.hp} (poisoned). Goblin A (shielded) at (0,2) HP ${goblinA.hp}. Goblin B (vulnerable) at (0,3) HP ${goblinB.hp}. Goblin C at (0,4) HP ${goblinC.hp}. Goblin D at (0,6) HP ${goblinD.hp}. Goblin E (shielded) at (1,2) HP ${goblinE.hp}. Goblin F at (0,8) HP ${goblinF.hp}. Bomb at (0,2).`
        ),
        userPrompt: "I light the fuse and move to (0,5).",
        tools: [describeSceneTool, rollDiceTool, resolveCombatActionTool, updateCharacterStatsTool],
        expect: [
          { type: "mustCallTool", toolName: "describeScene" },
          { type: "argsEqual", toolName: "describeScene", path: "scene", value: "combat" },
          {
            type: "argsPatternMatch",
            toolName: "describeScene",
            path: "description",
            pattern: "([Ff]use|[Ll]it|[Bb]urning|[Hh]issing|[Ss]park)"
          },
          { type: "mustNotCallTool", toolName: "rollDice" },
          { type: "mustNotCallTool", toolName: "resolveCombatAction" },
          { type: "mustCallTool", toolName: "updateCharacterStats" },
          { type: "toolCallCount", toolName: "updateCharacterStats", count: 1 },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Aria" },
              { path: "hp", value: ariaAfterTurn1 }
            ]
          },
          { type: "argsNotContains", toolName: "updateCharacterStats", pattern: "Goblin" }
        ]
      },
      {
        id: "step2",
        description: "Distraction before the blast",
        systemPrompt: withDelayedBlastRecap(
          `Turn 2. Aria at (0,5) HP ${ariaAfterTurn1} (poisoned). Goblin A (shielded) at (0,2) HP ${goblinA.hp}. Goblin B (vulnerable) at (0,3) HP ${goblinB.hp}. Goblin C at (0,4) HP ${goblinC.hp}. Goblin D at (0,6) HP ${goblinD.hp}. Goblin E (shielded) at (1,2) HP ${goblinE.hp}. Goblin F at (0,8) HP ${goblinF.hp}. Fuse lit 1 turn ago.`
        ),
        userPrompt: "I check the door for traps.",
        tools: [describeSceneTool, rollDiceTool, resolveCombatActionTool, updateCharacterStatsTool],
        expect: [
          { type: "mustCallTool", toolName: "describeScene" },
          { type: "argsEqual", toolName: "describeScene", path: "scene", value: "combat" },
          { type: "mustNotCallTool", toolName: "rollDice" },
          { type: "mustNotCallTool", toolName: "resolveCombatAction" },
          { type: "mustCallTool", toolName: "updateCharacterStats" },
          { type: "toolCallCount", toolName: "updateCharacterStats", count: 2 },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Aria" },
              { path: "hp", value: ariaAfterTurn2 }
            ]
          },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Goblin E" },
              { path: "hp", value: goblinEAfterShard }
            ]
          },
          {
            type: "argsNotContains",
            toolName: "updateCharacterStats",
            pattern: "(Goblin A|Goblin B|Goblin C|Goblin D|Goblin F)"
          }
        ]
      },
      {
        id: "step3",
        description: "Blast resolves on turn 3",
        systemPrompt: withDelayedBlastRecap(
          `Turn 3. Aria at (0,5) HP ${ariaAfterTurn2} (poisoned). Goblin A (shielded) at (0,2). Goblin B (vulnerable) at (0,3). Goblin C at (0,4). Goblin D at (0,6). Goblin E (shielded) at (1,2). Goblin F at (0,8). Fuse lit 2 turns ago.`
        ),
        userPrompt: "I look back at the goblin.",
        tools: [describeSceneTool, rollDiceTool, resolveCombatActionTool, updateCharacterStatsTool],
        expect: [
          { type: "mustCallTool", toolName: "describeScene" },
          { type: "argsEqual", toolName: "describeScene", path: "scene", value: "combat" },
          {
            type: "argsPatternMatch",
            toolName: "describeScene",
            path: "description",
            pattern: "([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire)"
          },
          { type: "mustCallTool", toolName: "updateCharacterStats" },
          { type: "toolCallCount", toolName: "updateCharacterStats", count: 5 },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", values: ["Goblin A", "goblin a"] },
              { path: "hp", value: goblinAAfterBlast }
            ]
          },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Goblin B" },
              { path: "hp", value: goblinBAfterBlast }
            ]
          },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Goblin C" },
              { path: "hp", value: goblinCAfterBlast }
            ]
          },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Goblin E" },
              { path: "hp", value: goblinEAfterBlast }
            ]
          },
          {
            type: "argsMatch",
            toolName: "updateCharacterStats",
            conditions: [
              { path: "characterName", value: "Aria" },
              { path: "hp", value: ariaAfterTurn3 }
            ]
          },
          { type: "argsNotContains", toolName: "updateCharacterStats", pattern: "Goblin D" },
          { type: "argsNotContains", toolName: "updateCharacterStats", pattern: "Goblin F" },
          { type: "mustNotCallTool", toolName: "rollDice" },
          { type: "mustNotCallTool", toolName: "resolveCombatAction" }
        ]
      }
    ]
  };
};

const variantCount = 10;
const variantOffsets = Array.from({ length: variantCount }, (_, index) => index * 2);

const massEffectsTests = variantOffsets.map((offset, index) =>
  buildMassEffectsTest(index + 1, offset)
);
const losAmmoTests = variantOffsets.map((offset, index) =>
  buildLosAmmoTest(index + 1, 12 + index * 2, offset)
);
const delayedBlastTests = variantOffsets.map((offset, index) =>
  buildDelayedBlastTest(index + 1, offset)
);

export const RoleplaySuite: TestSuite = {
  id: "roleplay",
  version: "0.1.0",
  tests: [...massEffectsTests, ...losAmmoTests, ...delayedBlastTests]
};
