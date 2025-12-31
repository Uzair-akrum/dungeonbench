# Tool-Call Doctor Report

Run ID: `nvidia-nemotron-3-nano-30b-a3b-free_2025-12-30_18-53-34`
Timestamp: 2025-12-30T18:53:34.143Z
Suite: roleplay (0.1.0)

## Critical Metrics Dashboard

| Model | Type Safety | Parsing Stability | Obedience | Cost (tok/action) |
| --- | --- | --- | --- | --- |
| nvidia/nemotron-3-nano-30b-a3b:free | ✅ 100.0% | ✅ 100.0% | ✅ 99.4% | 46526 |

## Violation Breakdown

### nvidia/nemotron-3-nano-30b-a3b:free


## Targets

| Target | Score | Pass Rate | Tests |
| --- | --- | --- | --- |
| openrouter:nvidia/nemotron-3-nano-30b-a3b:free | 0.22 | 21.7% | 30 |

## Top failures

- openrouter:nvidia/nemotron-3-nano-30b-a3b:free · roleplay.dm.state.mass-effects.v01/step1: Expected tool describeScene to be called
- openrouter:nvidia/nemotron-3-nano-30b-a3b:free · roleplay.dm.state.mass-effects.v01/step1: Expected tool describeScene to be called
- openrouter:nvidia/nemotron-3-nano-30b-a3b:free · roleplay.dm.state.mass-effects.v01/step1: Expected tool updateCharacterStats to be called
- openrouter:nvidia/nemotron-3-nano-30b-a3b:free · roleplay.dm.state.mass-effects.v01/step1: Expected updateCharacterStats to be called 8 time(s), got 0
- openrouter:nvidia/nemotron-3-nano-30b-a3b:free · roleplay.dm.state.mass-effects.v01/step1: Expected tool updateCharacterStats to be called

## Spicy

- Most failed tests: openrouter:nvidia/nemotron-3-nano-30b-a3b:free · roleplay.dm.spatial.los-ammo.v01 (27 fails), openrouter:nvidia/nemotron-3-nano-30b-a3b:free · roleplay.dm.spatial.los-ammo.v02 (27 fails), openrouter:nvidia/nemotron-3-nano-30b-a3b:free · roleplay.dm.spatial.los-ammo.v03 (27 fails)
- Common failure types: argsMatch (260), mustCallTool (179), argsEqual (90), toolCallCount (90), argsNotContains (70)
- Example failure: openrouter:nvidia/nemotron-3-nano-30b-a3b:free · roleplay.dm.state.mass-effects.v01/step1

```json
{
  "message": "Expected tool describeScene to be called",
  "toolCalls": [],
  "rawText": ""
}
```

## Per-test summary

### openrouter:nvidia/nemotron-3-nano-30b-a3b:free

- roleplay.dm.state.mass-effects.v01 (0.16): DM State: Mass effects + modifiers (v01)
- roleplay.dm.state.mass-effects.v02 (0.16): DM State: Mass effects + modifiers (v02)
- roleplay.dm.state.mass-effects.v03 (0.16): DM State: Mass effects + modifiers (v03)
- roleplay.dm.state.mass-effects.v04 (0.16): DM State: Mass effects + modifiers (v04)
- roleplay.dm.state.mass-effects.v05 (0.16): DM State: Mass effects + modifiers (v05)
- roleplay.dm.state.mass-effects.v06 (0.16): DM State: Mass effects + modifiers (v06)
- roleplay.dm.state.mass-effects.v07 (0.16): DM State: Mass effects + modifiers (v07)
- roleplay.dm.state.mass-effects.v08 (0.16): DM State: Mass effects + modifiers (v08)
- roleplay.dm.state.mass-effects.v09 (0.16): DM State: Mass effects + modifiers (v09)
- roleplay.dm.state.mass-effects.v10 (0.16): DM State: Mass effects + modifiers (v10)
- roleplay.dm.spatial.los-ammo.v01 (0.29): DM Spatial: Line of sight + ammo (v01)
- roleplay.dm.spatial.los-ammo.v02 (0.29): DM Spatial: Line of sight + ammo (v02)
- roleplay.dm.spatial.los-ammo.v03 (0.29): DM Spatial: Line of sight + ammo (v03)
- roleplay.dm.spatial.los-ammo.v04 (0.29): DM Spatial: Line of sight + ammo (v04)
- roleplay.dm.spatial.los-ammo.v05 (0.29): DM Spatial: Line of sight + ammo (v05)
- roleplay.dm.spatial.los-ammo.v06 (0.29): DM Spatial: Line of sight + ammo (v06)
- roleplay.dm.spatial.los-ammo.v07 (0.29): DM Spatial: Line of sight + ammo (v07)
- roleplay.dm.spatial.los-ammo.v08 (0.29): DM Spatial: Line of sight + ammo (v08)
- roleplay.dm.spatial.los-ammo.v09 (0.29): DM Spatial: Line of sight + ammo (v09)
- roleplay.dm.spatial.los-ammo.v10 (0.29): DM Spatial: Line of sight + ammo (v10)
- roleplay.dm.temporal.delayed-blast.v01 (0.20): DM Temporal: Delayed blast radius (v01)
- roleplay.dm.temporal.delayed-blast.v02 (0.20): DM Temporal: Delayed blast radius (v02)
- roleplay.dm.temporal.delayed-blast.v03 (0.20): DM Temporal: Delayed blast radius (v03)
- roleplay.dm.temporal.delayed-blast.v04 (0.20): DM Temporal: Delayed blast radius (v04)
- roleplay.dm.temporal.delayed-blast.v05 (0.20): DM Temporal: Delayed blast radius (v05)
- roleplay.dm.temporal.delayed-blast.v06 (0.20): DM Temporal: Delayed blast radius (v06)
- roleplay.dm.temporal.delayed-blast.v07 (0.20): DM Temporal: Delayed blast radius (v07)
- roleplay.dm.temporal.delayed-blast.v08 (0.20): DM Temporal: Delayed blast radius (v08)
- roleplay.dm.temporal.delayed-blast.v09 (0.20): DM Temporal: Delayed blast radius (v09)
- roleplay.dm.temporal.delayed-blast.v10 (0.20): DM Temporal: Delayed blast radius (v10)
