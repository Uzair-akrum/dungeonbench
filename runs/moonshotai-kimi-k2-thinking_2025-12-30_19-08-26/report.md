# Tool-Call Doctor Report

Run ID: `moonshotai-kimi-k2-thinking_2025-12-30_19-08-26`
Timestamp: 2025-12-30T19:08:26.547Z
Suite: roleplay (0.1.0)

## Critical Metrics Dashboard

| Model | Type Safety | Parsing Stability | Obedience | Cost (tok/action) |
| --- | --- | --- | --- | --- |
| moonshotai/kimi-k2-thinking | ✅ 100.0% | ✅ 99.2% | ✅ 100.0% | 236 |

## Violation Breakdown

### moonshotai/kimi-k2-thinking
**Protocol Violations:**
- jsonParseFailure: 2


## Targets

| Target | Score | Pass Rate | Tests |
| --- | --- | --- | --- |
| openrouter:moonshotai/kimi-k2-thinking | 0.78 | 77.7% | 30 |

## Top failures

- openrouter:moonshotai/kimi-k2-thinking · roleplay.dm.state.mass-effects.v01/step1: Expected updateCharacterStats to be called 8 time(s), got 24
- openrouter:moonshotai/kimi-k2-thinking · roleplay.dm.state.mass-effects.v02/step2: Expected updateCharacterStats to be called 4 time(s), got 2
- openrouter:moonshotai/kimi-k2-thinking · roleplay.dm.state.mass-effects.v02/step2: Expected updateCharacterStats to include characterName=Goblin B, hp=4 in a single call
- openrouter:moonshotai/kimi-k2-thinking · roleplay.dm.state.mass-effects.v02/step2: Expected updateCharacterStats to include characterName=Goblin E, hp=8 in a single call
- openrouter:moonshotai/kimi-k2-thinking · roleplay.dm.state.mass-effects.v03/step1: Expected updateCharacterStats to be called 8 time(s), got 2

## Spicy

- Most failed tests: openrouter:moonshotai/kimi-k2-thinking · roleplay.dm.temporal.delayed-blast.v07 (21 fails), openrouter:moonshotai/kimi-k2-thinking · roleplay.dm.temporal.delayed-blast.v01 (20 fails), openrouter:moonshotai/kimi-k2-thinking · roleplay.dm.temporal.delayed-blast.v09 (20 fails)
- Common failure types: argsMatch (93), toolCallCount (60), argsEqual (26), mustCallTool (21), argsNotContains (19)
- Example failure: openrouter:moonshotai/kimi-k2-thinking · roleplay.dm.state.mass-effects.v01/step1

```json
{
  "message": "Expected updateCharacterStats to be called 8 time(s), got 24",
  "toolCalls": [
    {
      "toolName": "describeScene",
      "arguments": {
        "scene": "combat",
        "description": "A blinding sphere of raw arcane energy erupts at the center of the chamber, expanding in a violent pulse of blue-white light. The magical detonation washes over everyone present—Aria and all seven goblins are caught in the blast wave. The air crackles with residual energy as the pulse fades, leaving behind the sharp scent of ozone and the groans of wounded combatants.",
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
      "id": "describeScene:0",
      "rawToolCall": {
        "type": "function",
        "index": 0,
        "id": "describeScene:0",
        "function": {
          "name": "describeScene",
          "arguments": "{\"scene\": \"combat\", \"description\": \"A blinding sphere of raw arcane energy erupts at the center of the chamber, expanding in a violent pulse of blue-white light. The magical detonation washes over everyone present—Aria and all seven goblins are caught in the blast wave. The air crackles with residual energy as the pulse fades, leaving behind the sharp scent of ozone and the groans of wounded combatants.\", \"charactersPresent\": [\"Aria\", \"Goblin A\", \"Goblin B\", \"Goblin C\", \"Goblin D\", \"Goblin E\", \"Goblin F\", \"Goblin G\"]}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Aria",
        "hp": 17,
        "maxHp": 21
      },
      "id": "updateCharacterStats:1",
      "rawToolCall": {
        "type": "function",
        "index": 1,
        "id": "updateCharacterStats:1",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Aria\", \"hp\": 17, \"maxHp\": 21}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin A",
        "hp": 6,
        "maxHp": 9
      },
      "id": "updateCharacterStats:2",
      "rawToolCall": {
        "type": "function",
        "index": 2,
        "id": "updateCharacterStats:2",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin A\", \"hp\": 6, \"maxHp\": 9}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin B",
        "hp": 12,
        "maxHp": 26
      },
      "id": "updateCharacterStats:3",
      "rawToolCall": {
        "type": "function",
        "index": 3,
        "id": "updateCharacterStats:3",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin B\", \"hp\": 12, \"maxHp\": 26}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin C",
        "hp": 7,
        "maxHp": 14
      },
      "id": "updateCharacterStats:4",
      "rawToolCall": {
        "type": "function",
        "index": 4,
        "id": "updateCharacterStats:4",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin C\", \"hp\": 7, \"maxHp\": 14}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin D",
        "hp": 14,
        "maxHp": 18
      },
      "id": "updateCharacterStats:5",
      "rawToolCall": {
        "type": "function",
        "index": 5,
        "id": "updateCharacterStats:5",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin D\", \"hp\": 14, \"maxHp\": 18}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin E",
        "hp": 8,
        "maxHp": 11
      },
      "id": "updateCharacterStats:6",
      "rawToolCall": {
        "type": "function",
        "index": 6,
        "id": "updateCharacterStats:6",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin E\", \"hp\": 8, \"maxHp\": 11}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin F",
        "hp": 9,
        "maxHp": 23
      },
      "id": "updateCharacterStats:7",
      "rawToolCall": {
        "type": "function",
        "index": 7,
        "id": "updateCharacterStats:7",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin F\", \"hp\": 9, \"maxHp\": 23}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin G",
        "hp": 10,
        "maxHp": 17
      },
      "id": "updateCharacterStats:8",
      "rawToolCall": {
        "type": "function",
        "index": 8,
        "id": "updateCharacterStats:8",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin G\", \"hp\": 10, \"maxHp\": 17}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Aria",
        "hp": 17,
        "maxHp": 21
      },
      "id": "updateCharacterStats:9",
      "rawToolCall": {
        "type": "function",
        "index": 0,
        "id": "updateCharacterStats:9",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Aria\", \"hp\": 17, \"maxHp\": 21}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin A",
        "hp": 6,
        "maxHp": 9
      },
      "id": "updateCharacterStats:10",
      "rawToolCall": {
        "type": "function",
        "index": 1,
        "id": "updateCharacterStats:10",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin A\", \"hp\": 6, \"maxHp\": 9}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin B",
        "hp": 12,
        "maxHp": 26
      },
      "id": "updateCharacterStats:11",
      "rawToolCall": {
        "type": "function",
        "index": 2,
        "id": "updateCharacterStats:11",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin B\", \"hp\": 12, \"maxHp\": 26}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin C",
        "hp": 7,
        "maxHp": 14
      },
      "id": "updateCharacterStats:12",
      "rawToolCall": {
        "type": "function",
        "index": 3,
        "id": "updateCharacterStats:12",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin C\", \"hp\": 7, \"maxHp\": 14}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin D",
        "hp": 14,
        "maxHp": 18
      },
      "id": "updateCharacterStats:13",
      "rawToolCall": {
        "type": "function",
        "index": 4,
        "id": "updateCharacterStats:13",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin D\", \"hp\": 14, \"maxHp\": 18}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin E",
        "hp": 8,
        "maxHp": 11
      },
      "id": "updateCharacterStats:14",
      "rawToolCall": {
        "type": "function",
        "index": 5,
        "id": "updateCharacterStats:14",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin E\", \"hp\": 8, \"maxHp\": 11}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin F",
        "hp": 9,
        "maxHp": 23
      },
      "id": "updateCharacterStats:15",
      "rawToolCall": {
        "type": "function",
        "index": 6,
        "id": "updateCharacterStats:15",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin F\", \"hp\": 9, \"maxHp\": 23}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin G",
        "hp": 10,
        "maxHp": 17
      },
      "id": "updateCharacterStats:16",
      "rawToolCall": {
        "type": "function",
        "index": 7,
        "id": "updateCharacterStats:16",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin G\", \"hp\": 10, \"maxHp\": 17}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Aria",
        "hp": 17,
        "maxHp": 21
      },
      "id": "updateCharacterStats:17",
      "rawToolCall": {
        "type": "function",
        "index": 0,
        "id": "updateCharacterStats:17",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Aria\", \"hp\": 17, \"maxHp\": 21}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin A",
        "hp": 6,
        "maxHp": 9
      },
      "id": "updateCharacterStats:18",
      "rawToolCall": {
        "type": "function",
        "index": 1,
        "id": "updateCharacterStats:18",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin A\", \"hp\": 6, \"maxHp\": 9}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin B",
        "hp": 12,
        "maxHp": 26
      },
      "id": "updateCharacterStats:19",
      "rawToolCall": {
        "type": "function",
        "index": 2,
        "id": "updateCharacterStats:19",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin B\", \"hp\": 12, \"maxHp\": 26}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin C",
        "hp": 7,
        "maxHp": 14
      },
      "id": "updateCharacterStats:20",
      "rawToolCall": {
        "type": "function",
        "index": 3,
        "id": "updateCharacterStats:20",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin C\", \"hp\": 7, \"maxHp\": 14}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin D",
        "hp": 14,
        "maxHp": 18
      },
      "id": "updateCharacterStats:21",
      "rawToolCall": {
        "type": "function",
        "index": 4,
        "id": "updateCharacterStats:21",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin D\", \"hp\": 14, \"maxHp\": 18}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin E",
        "hp": 8,
        "maxHp": 11
      },
      "id": "updateCharacterStats:22",
      "rawToolCall": {
        "type": "function",
        "index": 5,
        "id": "updateCharacterStats:22",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin E\", \"hp\": 8, \"maxHp\": 11}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin F",
        "hp": 9,
        "maxHp": 23
      },
      "id": "updateCharacterStats:23",
      "rawToolCall": {
        "type": "function",
        "index": 6,
        "id": "updateCharacterStats:23",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin F\", \"hp\": 9, \"maxHp\": 23}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin G",
        "hp": 10,
        "maxHp": 17
      },
      "id": "updateCharacterStats:24",
      "rawToolCall": {
        "type": "function",
        "index": 7,
        "id": "updateCharacterStats:24",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\": \"Goblin G\", \"hp\": 10, \"maxHp\": 17}"
        }
      }
    }
  ],
  "rawText": "The arcane pulse detonates in a blinding flash of blue-white energy, expanding outward in a crackling wave that engulfs the entire chamber. Everyone caught in the blast staggers as raw magical force tears through them—Aria grits her teeth a..."
}
```

## Per-test summary

### openrouter:moonshotai/kimi-k2-thinking

- roleplay.dm.state.mass-effects.v01 (0.96): DM State: Mass effects + modifiers (v01)
- roleplay.dm.state.mass-effects.v02 (0.86): DM State: Mass effects + modifiers (v02)
- roleplay.dm.state.mass-effects.v03 (0.75): DM State: Mass effects + modifiers (v03)
- roleplay.dm.state.mass-effects.v04 (0.70): DM State: Mass effects + modifiers (v04)
- roleplay.dm.state.mass-effects.v05 (0.70): DM State: Mass effects + modifiers (v05)
- roleplay.dm.state.mass-effects.v06 (0.61): DM State: Mass effects + modifiers (v06)
- roleplay.dm.state.mass-effects.v07 (0.95): DM State: Mass effects + modifiers (v07)
- roleplay.dm.state.mass-effects.v08 (0.96): DM State: Mass effects + modifiers (v08)
- roleplay.dm.state.mass-effects.v09 (0.95): DM State: Mass effects + modifiers (v09)
- roleplay.dm.state.mass-effects.v10 (1.00): DM State: Mass effects + modifiers (v10)
- roleplay.dm.spatial.los-ammo.v01 (0.91): DM Spatial: Line of sight + ammo (v01)
- roleplay.dm.spatial.los-ammo.v02 (0.96): DM Spatial: Line of sight + ammo (v02)
- roleplay.dm.spatial.los-ammo.v03 (0.96): DM Spatial: Line of sight + ammo (v03)
- roleplay.dm.spatial.los-ammo.v04 (0.96): DM Spatial: Line of sight + ammo (v04)
- roleplay.dm.spatial.los-ammo.v05 (0.79): DM Spatial: Line of sight + ammo (v05)
- roleplay.dm.spatial.los-ammo.v06 (0.77): DM Spatial: Line of sight + ammo (v06)
- roleplay.dm.spatial.los-ammo.v07 (0.91): DM Spatial: Line of sight + ammo (v07)
- roleplay.dm.spatial.los-ammo.v08 (0.96): DM Spatial: Line of sight + ammo (v08)
- roleplay.dm.spatial.los-ammo.v09 (0.96): DM Spatial: Line of sight + ammo (v09)
- roleplay.dm.spatial.los-ammo.v10 (0.91): DM Spatial: Line of sight + ammo (v10)
- roleplay.dm.temporal.delayed-blast.v01 (0.42): DM Temporal: Delayed blast radius (v01)
- roleplay.dm.temporal.delayed-blast.v02 (0.77): DM Temporal: Delayed blast radius (v02)
- roleplay.dm.temporal.delayed-blast.v03 (0.61): DM Temporal: Delayed blast radius (v03)
- roleplay.dm.temporal.delayed-blast.v04 (0.58): DM Temporal: Delayed blast radius (v04)
- roleplay.dm.temporal.delayed-blast.v05 (0.75): DM Temporal: Delayed blast radius (v05)
- roleplay.dm.temporal.delayed-blast.v06 (0.48): DM Temporal: Delayed blast radius (v06)
- roleplay.dm.temporal.delayed-blast.v07 (0.38): DM Temporal: Delayed blast radius (v07)
- roleplay.dm.temporal.delayed-blast.v08 (0.76): DM Temporal: Delayed blast radius (v08)
- roleplay.dm.temporal.delayed-blast.v09 (0.42): DM Temporal: Delayed blast radius (v09)
- roleplay.dm.temporal.delayed-blast.v10 (0.57): DM Temporal: Delayed blast radius (v10)
