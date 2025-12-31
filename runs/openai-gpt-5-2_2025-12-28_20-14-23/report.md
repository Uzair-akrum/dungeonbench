# Tool-Call Doctor Report

Run ID: `openai-gpt-5-2_2025-12-28_20-14-23`
Timestamp: 2025-12-28T20:14:23.268Z
Suite: roleplay (0.1.0)

## Critical Metrics Dashboard

| Model | Type Safety | Parsing Stability | Obedience | Cost (tok/action) |
| --- | --- | --- | --- | --- |
| openai/gpt-5.2 | ✅ 100.0% | ✅ 99.1% | ✅ 100.0% | 167 |

## Violation Breakdown

### openai/gpt-5.2
**Protocol Violations:**
- jsonParseFailure: 2


## Targets

| Target | Score | Pass Rate | Tests |
| --- | --- | --- | --- |
| openrouter:openai/gpt-5.2 | 0.87 | 87.1% | 30 |

## Top failures

- openrouter:openai/gpt-5.2 · roleplay.dm.spatial.los-ammo.v01/step2: Expected updateCharacterStats to be called 2 time(s), got 1
- openrouter:openai/gpt-5.2 · roleplay.dm.spatial.los-ammo.v01/step2: Expected updateCharacterStats to include characterName=Goblin A, hp=1 in a single call
- openrouter:openai/gpt-5.2 · roleplay.dm.spatial.los-ammo.v02/step1: Expected updateCharacterStats to be called 2 time(s), got 1
- openrouter:openai/gpt-5.2 · roleplay.dm.spatial.los-ammo.v02/step1: Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call
- openrouter:openai/gpt-5.2 · roleplay.dm.spatial.los-ammo.v02/step2: Expected resolveCombatAction to be called 1 time(s), got 2

## Spicy

- Most failed tests: openrouter:openai/gpt-5.2 · roleplay.dm.temporal.delayed-blast.v10 (20 fails), openrouter:openai/gpt-5.2 · roleplay.dm.temporal.delayed-blast.v01 (16 fails), openrouter:openai/gpt-5.2 · roleplay.dm.temporal.delayed-blast.v05 (15 fails)
- Common failure types: argsMatch (57), toolCallCount (28), argsNotContains (20), argsEqual (17), mustCallTool (11)
- Example failure: openrouter:openai/gpt-5.2 · roleplay.dm.spatial.los-ammo.v01/step2

```json
{
  "message": "Expected updateCharacterStats to be called 2 time(s), got 1",
  "toolCalls": [
    {
      "toolName": "describeScene",
      "arguments": {
        "scene": "combat",
        "description": "Aria (0,12) nocks her last arrow, draws her bow, and looses a shot straight down the narrow corridor at Goblin A.",
        "charactersPresent": [
          "Aria",
          "Goblin A",
          "Goblin B"
        ]
      },
      "id": "call_YjD4eC2Id8EwaCMva4KX2b8s",
      "rawToolCall": {
        "id": "call_YjD4eC2Id8EwaCMva4KX2b8s",
        "index": 0,
        "type": "function",
        "function": {
          "name": "describeScene",
          "arguments": "{\"scene\":\"combat\",\"description\":\"Aria (0,12) nocks her last arrow, draws her bow, and looses a shot straight down the narrow corridor at Goblin A.\",\"charactersPresent\":[\"Aria\",\"Goblin A\",\"Goblin B\"]}"
        }
      }
    },
    {
      "toolName": "resolveCombatAction",
      "arguments": {
        "attacker": "Aria",
        "target": "Goblin A",
        "action": "attack",
        "damage": 4,
        "rollResult": 20
      },
      "id": "call_dDFQqXA875sN49KgNVdY6dgL",
      "rawToolCall": {
        "id": "call_dDFQqXA875sN49KgNVdY6dgL",
        "index": 0,
        "type": "function",
        "function": {
          "name": "resolveCombatAction",
          "arguments": "{\"attacker\":\"Aria\",\"target\":\"Goblin A\",\"action\":\"attack\",\"damage\":4,\"rollResult\":20}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Aria",
        "hp": 12,
        "maxHp": 12,
        "inventory": [
          "bow"
        ],
        "status": "healthy"
      },
      "id": "call_e1CCRGZswPe6rd1s8qsNRdX0",
      "rawToolCall": {
        "id": "call_e1CCRGZswPe6rd1s8qsNRdX0",
        "index": 0,
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\":\"Aria\",\"hp\":12,\"maxHp\":12,\"inventory\":[\"bow\"],\"status\":\"healthy\"}"
        }
      }
    }
  ],
  "rawText": ""
}
```

## Per-test summary

### openrouter:openai/gpt-5.2

- roleplay.dm.state.mass-effects.v01 (1.00): DM State: Mass effects + modifiers (v01)
- roleplay.dm.state.mass-effects.v02 (1.00): DM State: Mass effects + modifiers (v02)
- roleplay.dm.state.mass-effects.v03 (1.00): DM State: Mass effects + modifiers (v03)
- roleplay.dm.state.mass-effects.v04 (1.00): DM State: Mass effects + modifiers (v04)
- roleplay.dm.state.mass-effects.v05 (1.00): DM State: Mass effects + modifiers (v05)
- roleplay.dm.state.mass-effects.v06 (1.00): DM State: Mass effects + modifiers (v06)
- roleplay.dm.state.mass-effects.v07 (1.00): DM State: Mass effects + modifiers (v07)
- roleplay.dm.state.mass-effects.v08 (1.00): DM State: Mass effects + modifiers (v08)
- roleplay.dm.state.mass-effects.v09 (1.00): DM State: Mass effects + modifiers (v09)
- roleplay.dm.state.mass-effects.v10 (1.00): DM State: Mass effects + modifiers (v10)
- roleplay.dm.spatial.los-ammo.v01 (0.95): DM Spatial: Line of sight + ammo (v01)
- roleplay.dm.spatial.los-ammo.v02 (0.91): DM Spatial: Line of sight + ammo (v02)
- roleplay.dm.spatial.los-ammo.v03 (0.94): DM Spatial: Line of sight + ammo (v03)
- roleplay.dm.spatial.los-ammo.v04 (0.96): DM Spatial: Line of sight + ammo (v04)
- roleplay.dm.spatial.los-ammo.v05 (0.91): DM Spatial: Line of sight + ammo (v05)
- roleplay.dm.spatial.los-ammo.v06 (1.00): DM Spatial: Line of sight + ammo (v06)
- roleplay.dm.spatial.los-ammo.v07 (0.96): DM Spatial: Line of sight + ammo (v07)
- roleplay.dm.spatial.los-ammo.v08 (0.97): DM Spatial: Line of sight + ammo (v08)
- roleplay.dm.spatial.los-ammo.v09 (1.00): DM Spatial: Line of sight + ammo (v09)
- roleplay.dm.spatial.los-ammo.v10 (0.96): DM Spatial: Line of sight + ammo (v10)
- roleplay.dm.temporal.delayed-blast.v01 (0.57): DM Temporal: Delayed blast radius (v01)
- roleplay.dm.temporal.delayed-blast.v02 (0.79): DM Temporal: Delayed blast radius (v02)
- roleplay.dm.temporal.delayed-blast.v03 (0.72): DM Temporal: Delayed blast radius (v03)
- roleplay.dm.temporal.delayed-blast.v04 (0.73): DM Temporal: Delayed blast radius (v04)
- roleplay.dm.temporal.delayed-blast.v05 (0.60): DM Temporal: Delayed blast radius (v05)
- roleplay.dm.temporal.delayed-blast.v06 (0.68): DM Temporal: Delayed blast radius (v06)
- roleplay.dm.temporal.delayed-blast.v07 (0.68): DM Temporal: Delayed blast radius (v07)
- roleplay.dm.temporal.delayed-blast.v08 (0.76): DM Temporal: Delayed blast radius (v08)
- roleplay.dm.temporal.delayed-blast.v09 (0.61): DM Temporal: Delayed blast radius (v09)
- roleplay.dm.temporal.delayed-blast.v10 (0.42): DM Temporal: Delayed blast radius (v10)
