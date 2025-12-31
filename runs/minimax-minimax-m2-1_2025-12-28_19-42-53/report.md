# Tool-Call Doctor Report

Run ID: `minimax-minimax-m2-1_2025-12-28_19-42-53`
Timestamp: 2025-12-28T19:42:53.835Z
Suite: roleplay (0.1.0)

## Critical Metrics Dashboard

| Model | Type Safety | Parsing Stability | Obedience | Cost (tok/action) |
| --- | --- | --- | --- | --- |
| minimax/minimax-m2.1 | ✅ 100.0% | ⚠️ 97.1% | ⚠️ 95.0% | 307 |

## Violation Breakdown

### minimax/minimax-m2.1
**Protocol Violations:**
- jsonParseFailure: 6


## Targets

| Target | Score | Pass Rate | Tests |
| --- | --- | --- | --- |
| openrouter:minimax/minimax-m2.1 | 0.77 | 76.5% | 30 |

## Top failures

- openrouter:minimax/minimax-m2.1 · roleplay.dm.state.mass-effects.v01/step2: Expected updateCharacterStats to include characterName=Aria, hp=15 in a single call
- openrouter:minimax/minimax-m2.1 · roleplay.dm.state.mass-effects.v09/step1: Expected describeScene.scene to equal combat
- openrouter:minimax/minimax-m2.1 · roleplay.dm.spatial.los-ammo.v01/step0: Expected describeScene.scene to equal combat
- openrouter:minimax/minimax-m2.1 · roleplay.dm.spatial.los-ammo.v01/step0: Expected describeScene.description to match pattern ([Dd]ash|[Uu]sed your action|cannot attack this turn|no time to attack|can't attack this turn)
- openrouter:minimax/minimax-m2.1 · roleplay.dm.spatial.los-ammo.v01/step1: Expected resolveCombatAction to be called 1 time(s), got 4

## Spicy

- Most failed tests: openrouter:minimax/minimax-m2.1 · roleplay.dm.temporal.delayed-blast.v03 (20 fails), openrouter:minimax/minimax-m2.1 · roleplay.dm.temporal.delayed-blast.v09 (20 fails), openrouter:minimax/minimax-m2.1 · roleplay.dm.spatial.los-ammo.v05 (18 fails)
- Common failure types: argsMatch (81), toolCallCount (40), mustCallTool (37), argsNotContains (34), argsEqual (27)
- Example failure: openrouter:minimax/minimax-m2.1 · roleplay.dm.state.mass-effects.v01/step2

```json
{
  "message": "Expected updateCharacterStats to include characterName=Aria, hp=15 in a single call",
  "toolCalls": [
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Aria",
        "hp": 13
      },
      "id": "call_function_xydyovpivyrn_1",
      "rawToolCall": {
        "id": "call_function_xydyovpivyrn_1",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Aria\", \"hp\": 13}"
        },
        "index": 0
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin A",
        "hp": 4
      },
      "id": "call_function_xydyovpivyrn_2",
      "rawToolCall": {
        "id": "call_function_xydyovpivyrn_2",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin A\", \"hp\": 4}"
        },
        "index": 1
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin B",
        "hp": 2
      },
      "id": "call_function_xydyovpivyrn_3",
      "rawToolCall": {
        "id": "call_function_xydyovpivyrn_3",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin B\", \"hp\": 2}"
        },
        "index": 2
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin E",
        "hp": 6
      },
      "id": "call_function_xydyovpivyrn_4",
      "rawToolCall": {
        "id": "call_function_xydyovpivyrn_4",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin E\", \"hp\": 6}"
        },
        "index": 3
      }
    },
    {
      "toolName": "describeScene",
      "arguments": {
        "charactersPresent": [
          "Aria",
          "Goblin A",
          "Goblin B",
          "Goblin C",
          "Goblin D",
          "Goblin E",
          "Goblin F",
          "Goblin G"
        ],
        "description": "A wave of freezing energy radiates outward from the caster! The frost ripples across the ground, coating the creatures in the lower row (y≤1).\n\n**Affected targets:**\n- **Aria**, bolstered by her resistances, weathers the frost with only minor chilling effects (-4 HP, now 13).\n- **Goblin A** and **Goblin E**, their shields cracking under the magical cold, each take 2 damage (A: 4 HP, E: 6 HP).\n- **Goblin B**, vulnerable to the arcane frost, screams as the cold sears through him (-10 HP, now 2 HP).\n\nThe creatures at y≥2—Goblins C, D, F, and G—stand untouched by the wave, watching their wounded allies with alarm.",
        "scene": "combat"
      },
      "id": "call_function_xydyovpivyrn_5",
      "rawToolCall": {
        "id": "call_function_xydyovpivyrn_5",
        "type": "function",
        "function": {
          "name": "describeScene",
          "arguments": "{\"charactersPresent\": [\"Aria\", \"Goblin A\", \"Goblin B\", \"Goblin C\", \"Goblin D\", \"Goblin E\", \"Goblin F\", \"Goblin G\"], \"description\": \"A wave of freezing energy radiates outward from the caster! The frost ripples across the ground, coating the creatures in the lower row (y≤1).\\n\\n**Affected targets:**\\n- **Aria**, bolstered by her resistances, weathers the frost with only minor chilling effects (-4 HP, now 13).\\n- **Goblin A** and **Goblin E**, their shields cracking under the magical cold, each take 2 damage (A: 4 HP, E: 6 HP).\\n- **Goblin B**, vulnerable to the arcane frost, screams as the cold sears through him (-10 HP, now 2 HP).\\n\\nThe creatures at y≥2—Goblins C, D, F, and G—stand untouched by the wave, watching their wounded allies with alarm.\", \"scene\": \"combat\"}"
        },
        "index": 4
      }
    }
  ],
  "rawText": "The frost wave has been successfully applied! Turn 2 is complete. Four creatures were affected based on their positions (y≤1), and their HP has been updated:\n\n- **Aria** (resistant): 17 → 13 HP\n- **Goblin A** (shielded): 6 → 4 HP\n- **Goblin..."
}
```

## Per-test summary

### openrouter:minimax/minimax-m2.1

- roleplay.dm.state.mass-effects.v01 (0.95): DM State: Mass effects + modifiers (v01)
- roleplay.dm.state.mass-effects.v02 (1.00): DM State: Mass effects + modifiers (v02)
- roleplay.dm.state.mass-effects.v03 (1.00): DM State: Mass effects + modifiers (v03)
- roleplay.dm.state.mass-effects.v04 (1.00): DM State: Mass effects + modifiers (v04)
- roleplay.dm.state.mass-effects.v05 (1.00): DM State: Mass effects + modifiers (v05)
- roleplay.dm.state.mass-effects.v06 (1.00): DM State: Mass effects + modifiers (v06)
- roleplay.dm.state.mass-effects.v07 (1.00): DM State: Mass effects + modifiers (v07)
- roleplay.dm.state.mass-effects.v08 (1.00): DM State: Mass effects + modifiers (v08)
- roleplay.dm.state.mass-effects.v09 (0.96): DM State: Mass effects + modifiers (v09)
- roleplay.dm.state.mass-effects.v10 (1.00): DM State: Mass effects + modifiers (v10)
- roleplay.dm.spatial.los-ammo.v01 (0.82): DM Spatial: Line of sight + ammo (v01)
- roleplay.dm.spatial.los-ammo.v02 (0.66): DM Spatial: Line of sight + ammo (v02)
- roleplay.dm.spatial.los-ammo.v03 (0.88): DM Spatial: Line of sight + ammo (v03)
- roleplay.dm.spatial.los-ammo.v04 (0.72): DM Spatial: Line of sight + ammo (v04)
- roleplay.dm.spatial.los-ammo.v05 (0.55): DM Spatial: Line of sight + ammo (v05)
- roleplay.dm.spatial.los-ammo.v06 (0.70): DM Spatial: Line of sight + ammo (v06)
- roleplay.dm.spatial.los-ammo.v07 (0.88): DM Spatial: Line of sight + ammo (v07)
- roleplay.dm.spatial.los-ammo.v08 (0.88): DM Spatial: Line of sight + ammo (v08)
- roleplay.dm.spatial.los-ammo.v09 (0.85): DM Spatial: Line of sight + ammo (v09)
- roleplay.dm.spatial.los-ammo.v10 (0.57): DM Spatial: Line of sight + ammo (v10)
- roleplay.dm.temporal.delayed-blast.v01 (0.56): DM Temporal: Delayed blast radius (v01)
- roleplay.dm.temporal.delayed-blast.v02 (0.40): DM Temporal: Delayed blast radius (v02)
- roleplay.dm.temporal.delayed-blast.v03 (0.42): DM Temporal: Delayed blast radius (v03)
- roleplay.dm.temporal.delayed-blast.v04 (0.48): DM Temporal: Delayed blast radius (v04)
- roleplay.dm.temporal.delayed-blast.v05 (0.81): DM Temporal: Delayed blast radius (v05)
- roleplay.dm.temporal.delayed-blast.v06 (0.74): DM Temporal: Delayed blast radius (v06)
- roleplay.dm.temporal.delayed-blast.v07 (0.59): DM Temporal: Delayed blast radius (v07)
- roleplay.dm.temporal.delayed-blast.v08 (0.65): DM Temporal: Delayed blast radius (v08)
- roleplay.dm.temporal.delayed-blast.v09 (0.42): DM Temporal: Delayed blast radius (v09)
- roleplay.dm.temporal.delayed-blast.v10 (0.48): DM Temporal: Delayed blast radius (v10)
