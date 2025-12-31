# Tool-Call Doctor Report

Run ID: `openai-gpt-4o-2024-11-20_2025-12-29_17-02-53`
Timestamp: 2025-12-29T17:02:53.233Z
Suite: roleplay (0.1.0)

## Critical Metrics Dashboard

| Model | Type Safety | Parsing Stability | Obedience | Cost (tok/action) |
| --- | --- | --- | --- | --- |
| openai/gpt-4o-2024-11-20 | ✅ 100.0% | ✅ 100.0% | ✅ 100.0% | 62 |

## Violation Breakdown

### openai/gpt-4o-2024-11-20


## Targets

| Target | Score | Pass Rate | Tests |
| --- | --- | --- | --- |
| openrouter:openai/gpt-4o-2024-11-20 | 0.77 | 76.8% | 30 |

## Top failures

- openrouter:openai/gpt-4o-2024-11-20 · roleplay.dm.spatial.los-ammo.v01/step0: Expected tool describeScene to be called
- openrouter:openai/gpt-4o-2024-11-20 · roleplay.dm.spatial.los-ammo.v01/step0: Expected tool describeScene to be called
- openrouter:openai/gpt-4o-2024-11-20 · roleplay.dm.spatial.los-ammo.v01/step0: Expected tool describeScene to be called
- openrouter:openai/gpt-4o-2024-11-20 · roleplay.dm.spatial.los-ammo.v01/step1: Expected resolveCombatAction to be called 1 time(s), got 2
- openrouter:openai/gpt-4o-2024-11-20 · roleplay.dm.spatial.los-ammo.v01/step1: Expected resolveCombatAction arguments to not contain pattern Goblin B

## Spicy

- Most failed tests: openrouter:openai/gpt-4o-2024-11-20 · roleplay.dm.temporal.delayed-blast.v04 (18 fails), openrouter:openai/gpt-4o-2024-11-20 · roleplay.dm.temporal.delayed-blast.v09 (17 fails), openrouter:openai/gpt-4o-2024-11-20 · roleplay.dm.temporal.delayed-blast.v01 (16 fails)
- Common failure types: argsMatch (94), argsNotContains (42), toolCallCount (37), mustCallTool (30), argsEqual (21)
- Example failure: openrouter:openai/gpt-4o-2024-11-20 · roleplay.dm.spatial.los-ammo.v01/step0

```json
{
  "message": "Expected tool describeScene to be called",
  "toolCalls": [],
  "rawText": "You cannot attack and dash in the same turn. Would you like to dash closer to Goblin A this turn and attack on the next turn?"
}
```

## Per-test summary

### openrouter:openai/gpt-4o-2024-11-20

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
- roleplay.dm.spatial.los-ammo.v01 (0.84): DM Spatial: Line of sight + ammo (v01)
- roleplay.dm.spatial.los-ammo.v02 (0.78): DM Spatial: Line of sight + ammo (v02)
- roleplay.dm.spatial.los-ammo.v03 (0.78): DM Spatial: Line of sight + ammo (v03)
- roleplay.dm.spatial.los-ammo.v04 (0.88): DM Spatial: Line of sight + ammo (v04)
- roleplay.dm.spatial.los-ammo.v05 (0.76): DM Spatial: Line of sight + ammo (v05)
- roleplay.dm.spatial.los-ammo.v06 (0.79): DM Spatial: Line of sight + ammo (v06)
- roleplay.dm.spatial.los-ammo.v07 (0.75): DM Spatial: Line of sight + ammo (v07)
- roleplay.dm.spatial.los-ammo.v08 (0.76): DM Spatial: Line of sight + ammo (v08)
- roleplay.dm.spatial.los-ammo.v09 (0.76): DM Spatial: Line of sight + ammo (v09)
- roleplay.dm.spatial.los-ammo.v10 (0.76): DM Spatial: Line of sight + ammo (v10)
- roleplay.dm.temporal.delayed-blast.v01 (0.53): DM Temporal: Delayed blast radius (v01)
- roleplay.dm.temporal.delayed-blast.v02 (0.53): DM Temporal: Delayed blast radius (v02)
- roleplay.dm.temporal.delayed-blast.v03 (0.53): DM Temporal: Delayed blast radius (v03)
- roleplay.dm.temporal.delayed-blast.v04 (0.48): DM Temporal: Delayed blast radius (v04)
- roleplay.dm.temporal.delayed-blast.v05 (0.53): DM Temporal: Delayed blast radius (v05)
- roleplay.dm.temporal.delayed-blast.v06 (0.53): DM Temporal: Delayed blast radius (v06)
- roleplay.dm.temporal.delayed-blast.v07 (0.53): DM Temporal: Delayed blast radius (v07)
- roleplay.dm.temporal.delayed-blast.v08 (0.53): DM Temporal: Delayed blast radius (v08)
- roleplay.dm.temporal.delayed-blast.v09 (0.50): DM Temporal: Delayed blast radius (v09)
- roleplay.dm.temporal.delayed-blast.v10 (0.53): DM Temporal: Delayed blast radius (v10)
