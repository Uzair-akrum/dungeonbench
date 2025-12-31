# 🎲 CritFail

**A benchmark that makes AI models DM a D&D combat. They can't.**

GPT-5.2 scores 42% on "remember when the bomb explodes." Gemini counts 8 goblins as 12. GLM-4.7 shoots through walls.

Your nephew running his first campaign does better than frontier AI.

---

## The Problem

Every LLM benchmark tests isolated capabilities: math, coding, knowledge retrieval. Models ace them all.

But real-world agent tasks require **integrated reasoning** — tracking multiple entities, applying rules conditionally, maintaining state over time, refusing invalid actions. When capabilities must work together, models collapse.

We built a benchmark that exposes this. It's disguised as D&D.

---

## What We Test

A model plays Dungeon Master for a simple combat encounter. 8 goblins. A poisoned player. A ticking bomb.

| Test | What Breaks |
|------|-------------|
| **Mass Effects** | "Damage all 8 goblins with trait modifiers" → Models double-count entities, apply wrong modifiers |
| **Line of Sight** | "Shoot the goblin behind the wall" → Models roll damage, then mention the wall exists |
| **Delayed Blast** | "Bomb explodes turn 3, track poison each turn" → Models forget which turn it is |

These aren't cherry-picked failures. They're consistent, reproducible breakdowns in state management.

---

## Results

| Model | Overall | Temporal Reasoning |
|-------|---------|-------------------|
| Gemini 3 Flash | 87.4% | 76-83% |
| GPT-5.2 | 87.1% | 42-79% |
| GLM-4.7 | 81.0% | 38-76% |
| Minimax M2.1 | 76.5% | 40-81% |
| Devstral | 71.4% | 55-66% |
| Nemotron 3 | 21.7% | ~20% |

The temporal test breaks everyone. "Remember the bomb, count to 3" shouldn't be hard.

---

## Greatest Hits (Failures)

**Gemini counts 8 goblins as 12:**

```
Expected updateCharacterStats to be called 8 times, got 12
```

It updated some goblins twice. In a fight with 8 clearly-named entities.

**GPT-5.2 shoots a goblin, forgets to record the damage:**

```
Expected updateCharacterStats to include characterName=Goblin A, hp=1
Tool calls: updateCharacterStats (Aria only)
```

It dealt the damage. It remembered to update Aria's arrows. It forgot the goblin it shot.

**GLM-4.7 shoots through walls:**

```
Expected tool resolveCombatAction not to be called
Tool calls: resolveCombatAction (Aria attacks Goblin B)
```

Goblin B is behind a wall. No line of sight. GLM rolled to hit anyway, then described the wall in its narration.

**Minimax forgets poison for 2 turns:**

```
Expected Aria hp=15, got hp=13
```

Aria takes 1 poison damage per turn. Minimax forgot. Twice.

---

## Why D&D?

D&D isn't the point. It's a delivery mechanism for testing capabilities that matter:

| D&D Mechanic | Real Capability | Production Failure Mode |
|--------------|-----------------|------------------------|
| Track 8 goblin HP values | Multi-entity state management | Duplicate API calls, lost context |
| Poison ticks every turn | Temporal reasoning | Missed scheduled tasks, wrong event timing |
| Can't shoot through walls | Constraint enforcement | Invalid operations executed |
| Shielded = half damage | Conditional rule application | Wrong business logic |
| 2 arrows, can't fire 3 | Resource tracking | Quota violations, resource leaks |
| Dash OR attack, not both | Mutual exclusion | Race conditions, invalid state |

If a model can't track 8 HP values over 3 turns, it can't reliably manage a multi-file refactor, maintain agent state, or execute a plan with resource constraints.

---

## Test Structure

### Mass Effects + Modifiers

8 entities with different traits (shielded, vulnerable, resistant, normal). Two area attacks.

**Turn 1:** Arcane Pulse hits everyone
- Shielded: 3 damage
- Vulnerable: 14 damage  
- Resistant: 4 damage
- Normal: 7 damage

**Turn 2:** Frost Wave hits only y≤1
- Must remember Turn 1 damage
- Must filter by position
- Must NOT update entities with y>1

### Line of Sight + Ammo

Corridor combat with walls blocking shots.

- Only x=0 squares are open
- Ranged attacks require line of sight
- Invalid shots must NOT consume ammo
- Dashing prevents attacking same turn

### Delayed Blast

A bomb, a poisoned player, multiple goblins in varying positions.

- Poison: 1 damage every turn (including turn 1)
- Bomb explodes turn 3
- Blast radius: Manhattan distance ≤2
- Must track cumulative damage across turns

---

## Capabilities Tested

1. **Multi-entity state tracking** — Maintain 7-8 entity states with distinct properties

2. **Same-call binding** — Name and HP must be updated in a single tool call

3. **Temporal reasoning** — Track turn count, apply recurring effects, resolve delayed triggers

4. **Spatial reasoning** — Grid positions, Manhattan distance, line-of-sight through obstacles

5. **Conditional logic** — Apply different damage based on entity traits

6. **Resource constraints** — Track consumables, enforce limits

7. **Action economy** — Understand mutually exclusive actions

8. **Exclusion validation** — NOT updating unaffected entities is as important as updating affected ones

---

## Quick Start

```bash
# Clone the repo
git clone https://github.com/[your-username]/critfail.git
cd critfail

# Install dependencies
npm install

# Run against a model
npm run eval -- --model openai/gpt-4o

# Run specific test
npm run eval -- --model openai/gpt-4o --test roleplay.dm.temporal.delayed-blast.v01
```

---

## Understanding Results

```
# Tool-Call Doctor Report

## Critical Metrics Dashboard
| Model | Type Safety | Parsing Stability | Obedience | 
| --- | --- | --- | --- |
| openai/gpt-5.2 | ✅ 100.0% | ✅ 99.1% | ✅ 100.0% |

## Per-test summary
**Mass effects (v01-v10):** All 1.00
**Spatial LOS+ammo (v01-v10):** 0.95, 0.91, 0.94...
**Temporal delayed-blast (v01-v10):** 0.57, 0.79, 0.72...
```

- **Type Safety:** Did tool arguments match schemas?

- **Parsing Stability:** Did the model produce valid JSON?

- **Obedience:** Did the model use tools vs. raw text output?

- **Per-test scores:** 1.0 = all expectations passed, 0.0 = all failed

---

## Expectation Types

| Type | What It Validates |
|------|-------------------|
| `mustCallTool` | Tool was called at least once |
| `mustNotCallTool` | Tool was never called |
| `toolCallCount` | Tool was called exactly N times |
| `argsMatch` | Multiple conditions match in the SAME call |
| `argsNotContains` | Tool arguments do NOT contain pattern |
| `argsPatternMatch` | Argument matches regex pattern |

The `argsMatch` expectation is key — it enforces **same-call binding**. A model that emits `characterName="Aria"` in one call and `hp=15` in another call fails, even though both values are correct.

---

## Adding Your Own Tests

Tests are defined in `tests/roleplay/`:

```typescript
{
  id: "roleplay.dm.temporal.delayed-blast.v01",
  name: "DM Temporal: Delayed blast radius (v01)",
  tags: ["roleplay", "dm", "temporal", "spatial", "state", "hard"],
  steps: [
    {
      systemPrompt: DELAYED_BLAST_SYSTEM_PROMPT,
      userPrompt: "I light the fuse and move to (0,5).",
      tools: [describeScene, rollDice, resolveCombatAction, updateCharacterStats],
      expectations: [
        { type: "mustCallTool", toolName: "describeScene" },
        { type: "argsEqual", toolName: "describeScene", path: "scene", value: "combat" },
        { type: "mustCallTool", toolName: "updateCharacterStats" },
        { type: "toolCallCount", toolName: "updateCharacterStats", count: 1 },
        { type: "argsMatch", toolName: "updateCharacterStats", conditions: [
          { path: "characterName", value: "Aria" },
          { path: "hp", value: 19 }  // 20 - 1 poison
        ]},
        { type: "mustNotCallTool", toolName: "rollDice" },
      ]
    },
    // ... more steps
  ]
}
```

---

## Why This Benchmark Resists Saturation

Most benchmarks get solved because models memorize patterns from training data.

CritFail resists this through:

1. **10 variants per test** — Different HP offsets, positions, trait assignments

2. **Same-call binding** — Correct values in wrong structure = failure  

3. **Bidirectional validation** — Tests inclusion AND exclusion

4. **Cumulative state** — Each turn depends on previous calculations

5. **Distractor resistance** — Irrelevant user actions between effect applications

---

## Limitations

This benchmark is **v0.1**. Known gaps:

- **Clean prompts** — No irrelevant clauses or typos in user messages

- **No adversarial pressure** — Users don't argue for incorrect rules

- **Short sequences** — 2-4 steps per test; longer horizons would show steeper decay

- **Single-hop spatial reasoning** — Direct coordinate checks, not multi-step inference

- **No unsolvable scenarios** — Never tests if models recognize impossibility

PRs addressing these are welcome.

---

## Citation

```bibtex
@misc{critfail2025,
  title={CritFail: A D&D-Based Benchmark for Multi-Entity State Management in LLMs},
  author={[Your Name]},
  year={2025},
  url={https://github.com/[your-username]/critfail}
}
```

---

## Contributing

The goal is tests that make frontier models sweat. We're looking for:

- New test archetypes (initiative tracking, concentration, multi-target with friendly fire)

- Adversarial variants (player argues for wrong rule interpretation)  

- Longer sequences (6-8 steps to test exponential decay)

- Confusingly-named entities ("Goblin Guard" vs "Guard Goblin")

- Impossible scenarios (test graceful refusal)

Open an issue or PR. Let's find out what else breaks.

---

## License

MIT

---

<p align="center">
  <i>If your AI can't DM a goblin fight, maybe don't let it manage your infrastructure.</i>
</p>
