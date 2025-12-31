# Tool-Call Doctor Report

Run ID: `z-ai-glm-4-7_2025-12-29_17-48-10`
Timestamp: 2025-12-29T17:48:10.167Z
Suite: roleplay (0.1.0)

## Critical Metrics Dashboard

| Model | Type Safety | Parsing Stability | Obedience | Cost (tok/action) |
| --- | --- | --- | --- | --- |
| z-ai/glm-4.7 | ✅ 100.0% | ⚠️ 98.5% | ⚠️ 98.3% | 218 |

## Violation Breakdown

### z-ai/glm-4.7
**Protocol Violations:**
- jsonParseFailure: 3


## Targets

| Target | Score | Pass Rate | Tests |
| --- | --- | --- | --- |
| openrouter:z-ai/glm-4.7 | 0.81 | 81.0% | 30 |

## Top failures

- openrouter:z-ai/glm-4.7 · roleplay.dm.spatial.los-ammo.v01/step3: Expected tool resolveCombatAction not to be called
- openrouter:z-ai/glm-4.7 · roleplay.dm.spatial.los-ammo.v02/step0: Expected describeScene.scene to equal combat
- openrouter:z-ai/glm-4.7 · roleplay.dm.spatial.los-ammo.v03/step0: Expected describeScene.scene to equal combat
- openrouter:z-ai/glm-4.7 · roleplay.dm.spatial.los-ammo.v04/step0: Expected describeScene.scene to equal combat
- openrouter:z-ai/glm-4.7 · roleplay.dm.spatial.los-ammo.v04/step1: Expected tool updateCharacterStats to be called

## Spicy

- Most failed tests: openrouter:z-ai/glm-4.7 · roleplay.dm.temporal.delayed-blast.v01 (21 fails), openrouter:z-ai/glm-4.7 · roleplay.dm.temporal.delayed-blast.v03 (21 fails), openrouter:z-ai/glm-4.7 · roleplay.dm.temporal.delayed-blast.v09 (21 fails)
- Common failure types: argsMatch (64), argsEqual (34), toolCallCount (28), argsNotContains (28), mustCallTool (21)
- Example failure: openrouter:z-ai/glm-4.7 · roleplay.dm.spatial.los-ammo.v01/step3

```json
{
  "message": "Expected tool resolveCombatAction not to be called",
  "toolCalls": [
    {
      "toolName": "resolveCombatAction",
      "arguments": {
        "attacker": "Aria",
        "target": "Goblin B",
        "action": "attack",
        "rollResult": 1,
        "damage": 0
      },
      "id": "call_0be5586b3bc242de9f7cd4b3",
      "rawToolCall": {
        "id": "call_0be5586b3bc242de9f7cd4b3",
        "index": 0,
        "type": "function",
        "function": {
          "name": "resolveCombatAction",
          "arguments": "{\"attacker\":\"Aria\",\"target\":\"Goblin B\",\"action\":\"attack\",\"rollResult\":1,\"damage\":0}"
        }
      }
    },
    {
      "toolName": "describeScene",
      "arguments": {
        "scene": "combat",
        "description": "Aria draws her bow and aims at Goblin B, but realizes she has no arrows left. Even if she did, Goblin B is safely behind the wall at (2,14), completely out of sight. The arrowless shot is futile.",
        "charactersPresent": [
          "Aria",
          "Goblin B"
        ]
      },
      "id": "call_4975010b2d7a42d1a9266f4d",
      "rawToolCall": {
        "id": "call_4975010b2d7a42d1a9266f4d",
        "index": 1,
        "type": "function",
        "function": {
          "name": "describeScene",
          "arguments": "{\"scene\":\"combat\",\"description\":\"Aria draws her bow and aims at Goblin B, but realizes she has no arrows left. Even if she did, Goblin B is safely behind the wall at (2,14), completely out of sight. The arrowless shot is futile.\",\"charactersPresent\":[\"Aria\", \"Goblin B\"]}"
        }
      }
    }
  ],
  "rawText": "The attack fails - no line of sight to Goblin B behind the wall, and you have no arrows remaining."
}
```

## Per-test summary

### openrouter:z-ai/glm-4.7

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
- roleplay.dm.spatial.los-ammo.v01 (0.96): DM Spatial: Line of sight + ammo (v01)
- roleplay.dm.spatial.los-ammo.v02 (0.96): DM Spatial: Line of sight + ammo (v02)
- roleplay.dm.spatial.los-ammo.v03 (0.96): DM Spatial: Line of sight + ammo (v03)
- roleplay.dm.spatial.los-ammo.v04 (0.86): DM Spatial: Line of sight + ammo (v04)
- roleplay.dm.spatial.los-ammo.v05 (0.96): DM Spatial: Line of sight + ammo (v05)
- roleplay.dm.spatial.los-ammo.v06 (0.91): DM Spatial: Line of sight + ammo (v06)
- roleplay.dm.spatial.los-ammo.v07 (0.96): DM Spatial: Line of sight + ammo (v07)
- roleplay.dm.spatial.los-ammo.v08 (0.88): DM Spatial: Line of sight + ammo (v08)
- roleplay.dm.spatial.los-ammo.v09 (0.84): DM Spatial: Line of sight + ammo (v09)
- roleplay.dm.spatial.los-ammo.v10 (0.92): DM Spatial: Line of sight + ammo (v10)
- roleplay.dm.temporal.delayed-blast.v01 (0.38): DM Temporal: Delayed blast radius (v01)
- roleplay.dm.temporal.delayed-blast.v02 (0.65): DM Temporal: Delayed blast radius (v02)
- roleplay.dm.temporal.delayed-blast.v03 (0.38): DM Temporal: Delayed blast radius (v03)
- roleplay.dm.temporal.delayed-blast.v04 (0.76): DM Temporal: Delayed blast radius (v04)
- roleplay.dm.temporal.delayed-blast.v05 (0.60): DM Temporal: Delayed blast radius (v05)
- roleplay.dm.temporal.delayed-blast.v06 (0.52): DM Temporal: Delayed blast radius (v06)
- roleplay.dm.temporal.delayed-blast.v07 (0.55): DM Temporal: Delayed blast radius (v07)
- roleplay.dm.temporal.delayed-blast.v08 (0.52): DM Temporal: Delayed blast radius (v08)
- roleplay.dm.temporal.delayed-blast.v09 (0.38): DM Temporal: Delayed blast radius (v09)
- roleplay.dm.temporal.delayed-blast.v10 (0.38): DM Temporal: Delayed blast radius (v10)
