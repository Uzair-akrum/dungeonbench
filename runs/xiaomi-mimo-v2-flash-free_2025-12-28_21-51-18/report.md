# Tool-Call Doctor Report

Run ID: `xiaomi-mimo-v2-flash-free_2025-12-28_21-51-18`
Timestamp: 2025-12-28T21:51:18.630Z
Suite: roleplay (0.1.0)

## Critical Metrics Dashboard

| Model | Type Safety | Parsing Stability | Obedience | Cost (tok/action) |
| --- | --- | --- | --- | --- |
| xiaomi/mimo-v2-flash:free | ✅ 100.0% | ✅ 100.0% | ❌ 78.9% | 117 |

## Violation Breakdown

### xiaomi/mimo-v2-flash:free


## Targets

| Target | Score | Pass Rate | Tests |
| --- | --- | --- | --- |
| openrouter:xiaomi/mimo-v2-flash:free | 0.56 | 56.1% | 30 |

## Top failures

- openrouter:xiaomi/mimo-v2-flash:free · roleplay.dm.state.mass-effects.v01/step1: Expected updateCharacterStats to be called 8 time(s), got 2
- openrouter:xiaomi/mimo-v2-flash:free · roleplay.dm.state.mass-effects.v01/step1: Expected updateCharacterStats to include characterName=Goblin B, hp=12 in a single call
- openrouter:xiaomi/mimo-v2-flash:free · roleplay.dm.state.mass-effects.v01/step1: Expected updateCharacterStats to include characterName=Goblin C, hp=7 in a single call
- openrouter:xiaomi/mimo-v2-flash:free · roleplay.dm.state.mass-effects.v01/step1: Expected updateCharacterStats to include characterName=Goblin D, hp=14 in a single call
- openrouter:xiaomi/mimo-v2-flash:free · roleplay.dm.state.mass-effects.v01/step1: Expected updateCharacterStats to include characterName=Goblin E, hp=8 in a single call

## Spicy

- Most failed tests: openrouter:xiaomi/mimo-v2-flash:free · roleplay.dm.temporal.delayed-blast.v01 (21 fails), openrouter:xiaomi/mimo-v2-flash:free · roleplay.dm.temporal.delayed-blast.v05 (21 fails), openrouter:xiaomi/mimo-v2-flash:free · roleplay.dm.temporal.delayed-blast.v08 (21 fails)
- Common failure types: argsMatch (195), toolCallCount (68), argsNotContains (45), mustCallTool (39), mustNotCallTool (38)
- Example failure: openrouter:xiaomi/mimo-v2-flash:free · roleplay.dm.state.mass-effects.v01/step1

```json
{
  "message": "Expected updateCharacterStats to be called 8 time(s), got 2",
  "toolCalls": [
    {
      "toolName": "describeScene",
      "arguments": {
        "scene": "combat",
        "description": "Arcane Pulse detonates across the battlefield! A blinding wave of magical energy washes over all creatures. The air crackles with raw arcane power as the pulse expands outward, striking everyone in its path.",
        "charactersPresent": [
          "Aria",
          "Goblin A",
          "Goblin B",
          "Goblin C",
          "Goblin D",
          "Goblin E",
          "Goblin F",
          "Goblin G"
        ]
      },
      "id": "call_9f3dc7efd76b4ab8b73d27ed",
      "rawToolCall": {
        "id": "call_9f3dc7efd76b4ab8b73d27ed",
        "index": 0,
        "type": "function",
        "function": {
          "name": "describeScene",
          "arguments": "{\"scene\": \"combat\", \"description\": \"Arcane Pulse detonates across the battlefield! A blinding wave of magical energy washes over all creatures. The air crackles with raw arcane power as the pulse expands outward, striking everyone in its path.\", \"charactersPresent\": [\"Aria\", \"Goblin A\", \"Goblin B\", \"Goblin C\", \"Goblin D\", \"Goblin E\", \"Goblin F\", \"Goblin G\"]}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Aria",
        "hp": 17
      },
      "id": "call_4a34d907ecc8423ea45cba14",
      "rawToolCall": {
        "id": "call_4a34d907ecc8423ea45cba14",
        "index": 0,
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Aria\", \"hp\": 17}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin A",
        "hp": 6
      },
      "id": "call_3fd2cc5cf68f4a54bc6f4c68",
      "rawToolCall": {
        "id": "call_3fd2cc5cf68f4a54bc6f4c68",
        "index": 0,
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin A\", \"hp\": 6}"
        }
      }
    }
  ],
  "rawText": ""
}
```

## Per-test summary

### openrouter:xiaomi/mimo-v2-flash:free

- roleplay.dm.state.mass-effects.v01 (0.57): DM State: Mass effects + modifiers (v01)
- roleplay.dm.state.mass-effects.v02 (0.61): DM State: Mass effects + modifiers (v02)
- roleplay.dm.state.mass-effects.v03 (0.57): DM State: Mass effects + modifiers (v03)
- roleplay.dm.state.mass-effects.v04 (0.61): DM State: Mass effects + modifiers (v04)
- roleplay.dm.state.mass-effects.v05 (0.57): DM State: Mass effects + modifiers (v05)
- roleplay.dm.state.mass-effects.v06 (0.61): DM State: Mass effects + modifiers (v06)
- roleplay.dm.state.mass-effects.v07 (0.58): DM State: Mass effects + modifiers (v07)
- roleplay.dm.state.mass-effects.v08 (0.57): DM State: Mass effects + modifiers (v08)
- roleplay.dm.state.mass-effects.v09 (0.53): DM State: Mass effects + modifiers (v09)
- roleplay.dm.state.mass-effects.v10 (0.53): DM State: Mass effects + modifiers (v10)
- roleplay.dm.spatial.los-ammo.v01 (0.59): DM Spatial: Line of sight + ammo (v01)
- roleplay.dm.spatial.los-ammo.v02 (0.65): DM Spatial: Line of sight + ammo (v02)
- roleplay.dm.spatial.los-ammo.v03 (0.73): DM Spatial: Line of sight + ammo (v03)
- roleplay.dm.spatial.los-ammo.v04 (0.55): DM Spatial: Line of sight + ammo (v04)
- roleplay.dm.spatial.los-ammo.v05 (0.73): DM Spatial: Line of sight + ammo (v05)
- roleplay.dm.spatial.los-ammo.v06 (0.73): DM Spatial: Line of sight + ammo (v06)
- roleplay.dm.spatial.los-ammo.v07 (0.74): DM Spatial: Line of sight + ammo (v07)
- roleplay.dm.spatial.los-ammo.v08 (0.61): DM Spatial: Line of sight + ammo (v08)
- roleplay.dm.spatial.los-ammo.v09 (0.59): DM Spatial: Line of sight + ammo (v09)
- roleplay.dm.spatial.los-ammo.v10 (0.73): DM Spatial: Line of sight + ammo (v10)
- roleplay.dm.temporal.delayed-blast.v01 (0.37): DM Temporal: Delayed blast radius (v01)
- roleplay.dm.temporal.delayed-blast.v02 (0.39): DM Temporal: Delayed blast radius (v02)
- roleplay.dm.temporal.delayed-blast.v03 (0.48): DM Temporal: Delayed blast radius (v03)
- roleplay.dm.temporal.delayed-blast.v04 (0.54): DM Temporal: Delayed blast radius (v04)
- roleplay.dm.temporal.delayed-blast.v05 (0.37): DM Temporal: Delayed blast radius (v05)
- roleplay.dm.temporal.delayed-blast.v06 (0.54): DM Temporal: Delayed blast radius (v06)
- roleplay.dm.temporal.delayed-blast.v07 (0.48): DM Temporal: Delayed blast radius (v07)
- roleplay.dm.temporal.delayed-blast.v08 (0.37): DM Temporal: Delayed blast radius (v08)
- roleplay.dm.temporal.delayed-blast.v09 (0.52): DM Temporal: Delayed blast radius (v09)
- roleplay.dm.temporal.delayed-blast.v10 (0.37): DM Temporal: Delayed blast radius (v10)
