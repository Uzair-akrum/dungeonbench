# Tool-Call Doctor Report

Run ID: `google-gemini-3-flash-preview_2025-12-29_18-22-52`
Timestamp: 2025-12-29T18:22:52.598Z
Suite: roleplay (0.1.0)

## Critical Metrics Dashboard

| Model | Type Safety | Parsing Stability | Obedience | Cost (tok/action) |
| --- | --- | --- | --- | --- |
| google/gemini-3-flash-preview | ✅ 100.0% | ✅ 100.0% | ⚠️ 91.7% | 53 |

## Violation Breakdown

### google/gemini-3-flash-preview


## Targets

| Target | Score | Pass Rate | Tests |
| --- | --- | --- | --- |
| openrouter:google/gemini-3-flash-preview | 0.87 | 87.4% | 30 |

## Top failures

- openrouter:google/gemini-3-flash-preview · roleplay.dm.state.mass-effects.v01/step1: Expected updateCharacterStats to be called 8 time(s), got 12
- openrouter:google/gemini-3-flash-preview · roleplay.dm.state.mass-effects.v01/step2: Expected updateCharacterStats to be called 4 time(s), got 3
- openrouter:google/gemini-3-flash-preview · roleplay.dm.state.mass-effects.v01/step2: Expected updateCharacterStats to include characterName=Goblin E, hp=6 in a single call
- openrouter:google/gemini-3-flash-preview · roleplay.dm.state.mass-effects.v02/step1: Expected updateCharacterStats to be called 8 time(s), got 12
- openrouter:google/gemini-3-flash-preview · roleplay.dm.state.mass-effects.v02/step2: Expected updateCharacterStats to be called 4 time(s), got 3

## Spicy

- Most failed tests: openrouter:google/gemini-3-flash-preview · roleplay.dm.temporal.delayed-blast.v02 (8 fails), openrouter:google/gemini-3-flash-preview · roleplay.dm.temporal.delayed-blast.v05 (8 fails), openrouter:google/gemini-3-flash-preview · roleplay.dm.temporal.delayed-blast.v08 (8 fails)
- Common failure types: argsMatch (46), toolCallCount (34), mustNotCallTool (15), argsNotContains (12), argsEqual (7)
- Example failure: openrouter:google/gemini-3-flash-preview · roleplay.dm.state.mass-effects.v01/step1

```json
{
  "message": "Expected updateCharacterStats to be called 8 time(s), got 12",
  "toolCalls": [
    {
      "toolName": "describeScene",
      "arguments": {
        "scene": "combat",
        "description": "A violent ripple of violet energy erupts from the center of the chamber. The Arcane Pulse expands outward in a perfect sphere, slamming into every creature present regardless of their position. Aria braces herself against the magical pressure, while the goblins are thrown back by the sheer force of the detonation.",
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
      "id": "tool_describeScene_G7Xbg4hqbdS2QYaZpLLj",
      "rawToolCall": {
        "index": 0,
        "id": "tool_describeScene_G7Xbg4hqbdS2QYaZpLLj",
        "type": "function",
        "function": {
          "name": "describeScene",
          "arguments": "{\"scene\":\"combat\",\"description\":\"A violent ripple of violet energy erupts from the center of the chamber. The Arcane Pulse expands outward in a perfect sphere, slamming into every creature present regardless of their position. Aria braces herself against the magical pressure, while the goblins are thrown back by the sheer force of the detonation.\",\"charactersPresent\":[\"Aria\",\"Goblin A\",\"Goblin B\",\"Goblin C\",\"Goblin D\",\"Goblin E\",\"Goblin F\",\"Goblin G\"]}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "status": "healthy",
        "characterName": "Aria",
        "maxHp": 21,
        "hp": 17
      },
      "id": "tool_updateCharacterStats_0ECfAarYxbUHpadBQYSm",
      "rawToolCall": {
        "index": 1,
        "id": "tool_updateCharacterStats_0ECfAarYxbUHpadBQYSm",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"status\":\"healthy\",\"characterName\":\"Aria\",\"maxHp\":21,\"hp\":17}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "maxHp": 9,
        "status": "healthy",
        "characterName": "Goblin A",
        "hp": 6
      },
      "id": "tool_updateCharacterStats_caIS8svxrsQhOk46C7sI",
      "rawToolCall": {
        "index": 2,
        "id": "tool_updateCharacterStats_caIS8svxrsQhOk46C7sI",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"maxHp\":9,\"status\":\"healthy\",\"characterName\":\"Goblin A\",\"hp\":6}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin B",
        "status": "healthy",
        "hp": 12,
        "maxHp": 26
      },
      "id": "tool_updateCharacterStats_aHjJ2Lc2nedtfhpFHZbO",
      "rawToolCall": {
        "index": 3,
        "id": "tool_updateCharacterStats_aHjJ2Lc2nedtfhpFHZbO",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\":\"Goblin B\",\"status\":\"healthy\",\"hp\":12,\"maxHp\":26}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "status": "healthy",
        "characterName": "Goblin C",
        "maxHp": 14,
        "hp": 7
      },
      "id": "tool_updateCharacterStats_TYmTE8c5t12DsX1rMjnH",
      "rawToolCall": {
        "index": 4,
        "id": "tool_updateCharacterStats_TYmTE8c5t12DsX1rMjnH",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"status\":\"healthy\",\"characterName\":\"Goblin C\",\"maxHp\":14,\"hp\":7}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "status": "healthy",
        "characterName": "Goblin D",
        "hp": 14,
        "maxHp": 18
      },
      "id": "tool_updateCharacterStats_JjmSgrHj1aUakpjQ9YNW",
      "rawToolCall": {
        "index": 5,
        "id": "tool_updateCharacterStats_JjmSgrHj1aUakpjQ9YNW",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"status\":\"healthy\",\"characterName\":\"Goblin D\",\"hp\":14,\"maxHp\":18}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "maxHp": 11,
        "status": "healthy",
        "hp": 8,
        "characterName": "Goblin E"
      },
      "id": "tool_updateCharacterStats_KnP2yAmEExOXrd2ddyKi",
      "rawToolCall": {
        "index": 6,
        "id": "tool_updateCharacterStats_KnP2yAmEExOXrd2ddyKi",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"maxHp\":11,\"status\":\"healthy\",\"hp\":8,\"characterName\":\"Goblin E\"}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin F",
        "hp": 9,
        "status": "healthy",
        "maxHp": 23
      },
      "id": "tool_updateCharacterStats_B3212nq4SQxJI8rmV39H",
      "rawToolCall": {
        "index": 7,
        "id": "tool_updateCharacterStats_B3212nq4SQxJI8rmV39H",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\":\"Goblin F\",\"hp\":9,\"status\":\"healthy\",\"maxHp\":23}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "hp": 10,
        "status": "healthy",
        "maxHp": 17,
        "characterName": "Goblin G"
      },
      "id": "tool_updateCharacterStats_47ncPgrHnBklFAA3MJxT",
      "rawToolCall": {
        "index": 8,
        "id": "tool_updateCharacterStats_47ncPgrHnBklFAA3MJxT",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"hp\":10,\"status\":\"healthy\",\"maxHp\":17,\"characterName\":\"Goblin G\"}"
        }
      }
    },
    {
      "toolName": "describeScene",
      "arguments": {
        "description": "As the violet light of the pulse fades, a freezing mist begins to coalesce along the floor. A Frost Wave surges across the ground, encasing the feet of those standing in the lower section of the room in jagged ice. Aria and the nearby goblins shiver as the supernatural cold bites into them, while those on the higher ledges remain untouched by the low-creeping frost.",
        "charactersPresent": [
          "Aria",
          "Goblin A",
          "Goblin B",
          "Goblin E"
        ],
        "scene": "combat"
      },
      "id": "tool_describeScene_JjjHA1GCt8IhzwnRchk9",
      "rawToolCall": {
        "index": 0,
        "id": "tool_describeScene_JjjHA1GCt8IhzwnRchk9",
        "type": "function",
        "function": {
          "name": "describeScene",
          "arguments": "{\"description\":\"As the violet light of the pulse fades, a freezing mist begins to coalesce along the floor. A Frost Wave surges across the ground, encasing the feet of those standing in the lower section of the room in jagged ice. Aria and the nearby goblins shiver as the supernatural cold bites into them, while those on the higher ledges remain untouched by the low-creeping frost.\",\"charactersPresent\":[\"Aria\",\"Goblin A\",\"Goblin B\",\"Goblin E\"],\"scene\":\"combat\"}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "hp": 15,
        "maxHp": 21,
        "characterName": "Aria",
        "status": "healthy"
      },
      "id": "tool_updateCharacterStats_SvKo9WeCI7AyKzPwidEa",
      "rawToolCall": {
        "index": 1,
        "id": "tool_updateCharacterStats_SvKo9WeCI7AyKzPwidEa",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"hp\":15,\"maxHp\":21,\"characterName\":\"Aria\",\"status\":\"healthy\"}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "characterName": "Goblin A",
        "maxHp": 9,
        "hp": 4,
        "status": "healthy"
      },
      "id": "tool_updateCharacterStats_HeJqamS7aNvWntqvQjgS",
      "rawToolCall": {
        "index": 2,
        "id": "tool_updateCharacterStats_HeJqamS7aNvWntqvQjgS",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"characterName\":\"Goblin A\",\"maxHp\":9,\"hp\":4,\"status\":\"healthy\"}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "maxHp": 26,
        "characterName": "Goblin B",
        "status": "healthy",
        "hp": 2
      },
      "id": "tool_updateCharacterStats_CthYcSYVYnNOe7fi81U9",
      "rawToolCall": {
        "index": 3,
        "id": "tool_updateCharacterStats_CthYcSYVYnNOe7fi81U9",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"maxHp\":26,\"characterName\":\"Goblin B\",\"status\":\"healthy\",\"hp\":2}"
        }
      }
    },
    {
      "toolName": "updateCharacterStats",
      "arguments": {
        "maxHp": 11,
        "status": "healthy",
        "characterName": "Goblin E",
        "hp": 6
      },
      "id": "tool_updateCharacterStats_Cu4TI9K4Q9uW6DxzHRVF",
      "rawToolCall": {
        "index": 4,
        "id": "tool_updateCharacterStats_Cu4TI9K4Q9uW6DxzHRVF",
        "type": "function",
        "function": {
          "name": "updateCharacterStats",
          "arguments": "{\"maxHp\":11,\"status\":\"healthy\",\"characterName\":\"Goblin E\",\"hp\":6}"
        }
      }
    },
    {
      "toolName": "describeScene",
      "arguments": {
        "description": "The magical energies dissipate, leaving the chamber in a tense silence. Aria stands her ground, her resistance to magic having saved her from the worst of the onslaught. The goblins are in various states of distress; Goblins B and F, particularly vulnerable to the arcane, look severely weakened, while the shielded Goblins A and E managed to mitigate some of the impact. The frost still clings to the floor where the wave passed, marking the reach of the second blast.",
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
        "scene": "combat"
      },
      "id": "tool_describeScene_GtjJJ6fBhrELnHA3NSdA",
      "rawToolCall": {
        "index": 0,
        "id": "tool_describeScene_GtjJJ6fBhrELnHA3NSdA",
        "type": "function",
        "function": {
          "name": "describeScene",
          "arguments": "{\"description\":\"The magical energies dissipate, leaving the chamber in a tense silence. Aria stands her ground, her resistance to magic having saved her from the worst of the onslaught. The goblins are in various states of distress; Goblins B and F, particularly vulnerable to the arcane, look severely weakened, while the shielded Goblins A and E managed to mitigate some of the impact. The frost still clings to the floor where the wave passed, marking the reach of the second blast.\",\"charactersPresent\":[\"Aria\",\"Goblin A\",\"Goblin B\",\"Goblin C\",\"Goblin D\",\"Goblin E\",\"Goblin F\",\"Goblin G\"],\"scene\":\"combat\"}"
        }
      }
    }
  ],
  "rawText": ""
}
```

## Per-test summary

### openrouter:google/gemini-3-flash-preview

- roleplay.dm.state.mass-effects.v01 (0.87): DM State: Mass effects + modifiers (v01)
- roleplay.dm.state.mass-effects.v02 (0.87): DM State: Mass effects + modifiers (v02)
- roleplay.dm.state.mass-effects.v03 (0.87): DM State: Mass effects + modifiers (v03)
- roleplay.dm.state.mass-effects.v04 (0.96): DM State: Mass effects + modifiers (v04)
- roleplay.dm.state.mass-effects.v05 (0.96): DM State: Mass effects + modifiers (v05)
- roleplay.dm.state.mass-effects.v06 (0.92): DM State: Mass effects + modifiers (v06)
- roleplay.dm.state.mass-effects.v07 (0.92): DM State: Mass effects + modifiers (v07)
- roleplay.dm.state.mass-effects.v08 (0.87): DM State: Mass effects + modifiers (v08)
- roleplay.dm.state.mass-effects.v09 (0.87): DM State: Mass effects + modifiers (v09)
- roleplay.dm.state.mass-effects.v10 (0.87): DM State: Mass effects + modifiers (v10)
- roleplay.dm.spatial.los-ammo.v01 (0.96): DM Spatial: Line of sight + ammo (v01)
- roleplay.dm.spatial.los-ammo.v02 (0.96): DM Spatial: Line of sight + ammo (v02)
- roleplay.dm.spatial.los-ammo.v03 (0.92): DM Spatial: Line of sight + ammo (v03)
- roleplay.dm.spatial.los-ammo.v04 (1.00): DM Spatial: Line of sight + ammo (v04)
- roleplay.dm.spatial.los-ammo.v05 (0.92): DM Spatial: Line of sight + ammo (v05)
- roleplay.dm.spatial.los-ammo.v06 (0.92): DM Spatial: Line of sight + ammo (v06)
- roleplay.dm.spatial.los-ammo.v07 (0.92): DM Spatial: Line of sight + ammo (v07)
- roleplay.dm.spatial.los-ammo.v08 (0.96): DM Spatial: Line of sight + ammo (v08)
- roleplay.dm.spatial.los-ammo.v09 (0.96): DM Spatial: Line of sight + ammo (v09)
- roleplay.dm.spatial.los-ammo.v10 (0.88): DM Spatial: Line of sight + ammo (v10)
- roleplay.dm.temporal.delayed-blast.v01 (0.79): DM Temporal: Delayed blast radius (v01)
- roleplay.dm.temporal.delayed-blast.v02 (0.76): DM Temporal: Delayed blast radius (v02)
- roleplay.dm.temporal.delayed-blast.v03 (0.79): DM Temporal: Delayed blast radius (v03)
- roleplay.dm.temporal.delayed-blast.v04 (0.79): DM Temporal: Delayed blast radius (v04)
- roleplay.dm.temporal.delayed-blast.v05 (0.76): DM Temporal: Delayed blast radius (v05)
- roleplay.dm.temporal.delayed-blast.v06 (0.79): DM Temporal: Delayed blast radius (v06)
- roleplay.dm.temporal.delayed-blast.v07 (0.83): DM Temporal: Delayed blast radius (v07)
- roleplay.dm.temporal.delayed-blast.v08 (0.76): DM Temporal: Delayed blast radius (v08)
- roleplay.dm.temporal.delayed-blast.v09 (0.79): DM Temporal: Delayed blast radius (v09)
- roleplay.dm.temporal.delayed-blast.v10 (0.76): DM Temporal: Delayed blast radius (v10)
