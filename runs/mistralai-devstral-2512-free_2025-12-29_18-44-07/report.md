# Tool-Call Doctor Report

Run ID: `mistralai-devstral-2512-free_2025-12-29_18-44-07`
Timestamp: 2025-12-29T18:44:07.328Z
Suite: roleplay (0.1.0)

## Critical Metrics Dashboard

| Model | Type Safety | Parsing Stability | Obedience | Cost (tok/action) |
| --- | --- | --- | --- | --- |
| mistralai/devstral-2512:free | ✅ 100.0% | ✅ 100.0% | ❌ 77.8% | 52 |

## Violation Breakdown

### mistralai/devstral-2512:free


## Targets

| Target | Score | Pass Rate | Tests |
| --- | --- | --- | --- |
| openrouter:mistralai/devstral-2512:free | 0.71 | 71.4% | 30 |

## Top failures

- openrouter:mistralai/devstral-2512:free · roleplay.dm.state.mass-effects.v01/step2: Expected updateCharacterStats to be called 4 time(s), got 3
- openrouter:mistralai/devstral-2512:free · roleplay.dm.state.mass-effects.v01/step2: Expected updateCharacterStats to include characterName=Aria, hp=15 in a single call
- openrouter:mistralai/devstral-2512:free · roleplay.dm.state.mass-effects.v01/step2: Expected updateCharacterStats to include characterName=Goblin E, hp=6 in a single call
- openrouter:mistralai/devstral-2512:free · roleplay.dm.state.mass-effects.v02/step1: Expected updateCharacterStats to include characterName=Goblin C, hp=9 in a single call
- openrouter:mistralai/devstral-2512:free · roleplay.dm.state.mass-effects.v02/step1: Expected updateCharacterStats to include characterName=Goblin G, hp=12 in a single call

## Spicy

- Most failed tests: openrouter:mistralai/devstral-2512:free · roleplay.dm.spatial.los-ammo.v06 (16 fails), openrouter:mistralai/devstral-2512:free · roleplay.dm.temporal.delayed-blast.v03 (14 fails), openrouter:mistralai/devstral-2512:free · roleplay.dm.temporal.delayed-blast.v08 (14 fails)
- Common failure types: argsMatch (102), toolCallCount (45), mustNotCallTool (40), argsNotContains (30), mustCallTool (22)
- Example failure: openrouter:mistralai/devstral-2512:free · roleplay.dm.state.mass-effects.v01/step2

```json
{
  "message": "Expected updateCharacterStats to be called 4 time(s), got 3",
  "toolCalls": [
    {
      "toolName": "describeScene",
      "arguments": {
        "scene": "combat",
        "description": "A chilling Frost Wave sweeps through the battlefield, targeting all creatures with y-coordinate less than or equal to 1. The wave deals 5 base damage, but modifiers apply based on their statuses.",
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
      "id": "vkT0l37Eq",
      "rawToolCall": {
        "id": "vkT0l37Eq",
        "function": {
          "name": "describeScene",
          "arguments": "{\"scene\": \"combat\", \"description\": \"A chilling Frost Wave sweeps through the battlefield, targeting all creatures with y-coordinate less than or equal to 1. The wave deals 5 base damage, but modifiers apply based on their statuses.\", \"charactersPresent\": [\"Aria\", \"Goblin A\", \"Goblin B\", \"Goblin C\", \"Goblin D\", \"Goblin E\", \"Goblin F\", \"Goblin G\"]}"
        },
        "index": 0,
        "type": "function"
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Aria",
        "hp": 14,
        "maxHp": 20
      },
      "id": "njeNGRopA",
      "rawToolCall": {
        "id": "njeNGRopA",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Aria\", \"hp\": 14, \"maxHp\": 20}"
        },
        "index": 0,
        "type": "function"
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin A",
        "hp": 4,
        "maxHp": 10
      },
      "id": "3zzssLUNB",
      "rawToolCall": {
        "id": "3zzssLUNB",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin A\", \"hp\": 4, \"maxHp\": 10}"
        },
        "index": 1,
        "type": "function"
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin B",
        "hp": 2,
        "maxHp": 15
      },
      "id": "3yupE4h5x",
      "rawToolCall": {
        "id": "3yupE4h5x",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin B\", \"hp\": 2, \"maxHp\": 15}"
        },
        "index": 2,
        "type": "function"
      }
    },
    {
      "toolName": "describeScene",
      "arguments": {
        "scene": "combat",
        "description": "The Frost Wave has passed. Aria, Goblin A, and Goblin B have taken damage based on their vulnerabilities and resistances. The battlefield is now colder, and the affected creatures must endure the lingering chill.",
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
      "id": "Ph7FvXEEw",
      "rawToolCall": {
        "id": "Ph7FvXEEw",
        "function": {
          "name": "describeScene",
          "arguments": "{\"scene\": \"combat\", \"description\": \"The Frost Wave has passed. Aria, Goblin A, and Goblin B have taken damage based on their vulnerabilities and resistances. The battlefield is now colder, and the affected creatures must endure the lingering chill.\", \"charactersPresent\": [\"Aria\", \"Goblin A\", \"Goblin B\", \"Goblin C\", \"Goblin D\", \"Goblin E\", \"Goblin F\", \"Goblin G\"]}"
        },
        "index": 0,
        "type": "function"
      }
    }
  ],
  "rawText": ""
}
```

## Per-test summary

### openrouter:mistralai/devstral-2512:free

- roleplay.dm.state.mass-effects.v01 (0.86): DM State: Mass effects + modifiers (v01)
- roleplay.dm.state.mass-effects.v02 (0.79): DM State: Mass effects + modifiers (v02)
- roleplay.dm.state.mass-effects.v03 (0.79): DM State: Mass effects + modifiers (v03)
- roleplay.dm.state.mass-effects.v04 (0.83): DM State: Mass effects + modifiers (v04)
- roleplay.dm.state.mass-effects.v05 (0.86): DM State: Mass effects + modifiers (v05)
- roleplay.dm.state.mass-effects.v06 (0.83): DM State: Mass effects + modifiers (v06)
- roleplay.dm.state.mass-effects.v07 (0.76): DM State: Mass effects + modifiers (v07)
- roleplay.dm.state.mass-effects.v08 (0.79): DM State: Mass effects + modifiers (v08)
- roleplay.dm.state.mass-effects.v09 (0.86): DM State: Mass effects + modifiers (v09)
- roleplay.dm.state.mass-effects.v10 (0.79): DM State: Mass effects + modifiers (v10)
- roleplay.dm.spatial.los-ammo.v01 (0.79): DM Spatial: Line of sight + ammo (v01)
- roleplay.dm.spatial.los-ammo.v02 (0.70): DM Spatial: Line of sight + ammo (v02)
- roleplay.dm.spatial.los-ammo.v03 (0.76): DM Spatial: Line of sight + ammo (v03)
- roleplay.dm.spatial.los-ammo.v04 (0.70): DM Spatial: Line of sight + ammo (v04)
- roleplay.dm.spatial.los-ammo.v05 (0.76): DM Spatial: Line of sight + ammo (v05)
- roleplay.dm.spatial.los-ammo.v06 (0.60): DM Spatial: Line of sight + ammo (v06)
- roleplay.dm.spatial.los-ammo.v07 (0.74): DM Spatial: Line of sight + ammo (v07)
- roleplay.dm.spatial.los-ammo.v08 (0.76): DM Spatial: Line of sight + ammo (v08)
- roleplay.dm.spatial.los-ammo.v09 (0.74): DM Spatial: Line of sight + ammo (v09)
- roleplay.dm.spatial.los-ammo.v10 (0.72): DM Spatial: Line of sight + ammo (v10)
- roleplay.dm.temporal.delayed-blast.v01 (0.66): DM Temporal: Delayed blast radius (v01)
- roleplay.dm.temporal.delayed-blast.v02 (0.62): DM Temporal: Delayed blast radius (v02)
- roleplay.dm.temporal.delayed-blast.v03 (0.55): DM Temporal: Delayed blast radius (v03)
- roleplay.dm.temporal.delayed-blast.v04 (0.62): DM Temporal: Delayed blast radius (v04)
- roleplay.dm.temporal.delayed-blast.v05 (0.62): DM Temporal: Delayed blast radius (v05)
- roleplay.dm.temporal.delayed-blast.v06 (0.60): DM Temporal: Delayed blast radius (v06)
- roleplay.dm.temporal.delayed-blast.v07 (0.58): DM Temporal: Delayed blast radius (v07)
- roleplay.dm.temporal.delayed-blast.v08 (0.56): DM Temporal: Delayed blast radius (v08)
- roleplay.dm.temporal.delayed-blast.v09 (0.60): DM Temporal: Delayed blast radius (v09)
- roleplay.dm.temporal.delayed-blast.v10 (0.58): DM Temporal: Delayed blast radius (v10)
