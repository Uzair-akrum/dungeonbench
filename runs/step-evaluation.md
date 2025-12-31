# Run Step Evaluation

## google-gemini-3-flash-preview_2025-12-29_18-22-52

Target: openrouter:google/gemini-3-flash-preview

### roleplay.dm.state.mass-effects.v01 - DM State: Mass effects + modifiers (v01)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 12
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Goblin E, hp=6 in a single call

### roleplay.dm.state.mass-effects.v02 - DM State: Mass effects + modifiers (v02)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 12
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Goblin E, hp=8 in a single call

### roleplay.dm.state.mass-effects.v03 - DM State: Mass effects + modifiers (v03)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 12
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 6; Expected updateCharacterStats to include characterName=Goblin E, hp=10 in a single call

### roleplay.dm.state.mass-effects.v04 - DM State: Mass effects + modifiers (v04)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 20
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v05 - DM State: Mass effects + modifiers (v05)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 10
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v06 - DM State: Mass effects + modifiers (v06)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 16
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 12

### roleplay.dm.state.mass-effects.v07 - DM State: Mass effects + modifiers (v07)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 24
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 8

### roleplay.dm.state.mass-effects.v08 - DM State: Mass effects + modifiers (v08)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 14
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 9; Expected updateCharacterStats to include characterName=Goblin E, hp=20 in a single call

### roleplay.dm.state.mass-effects.v09 - DM State: Mass effects + modifiers (v09)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 12
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Goblin E, hp=22 in a single call

### roleplay.dm.state.mass-effects.v10 - DM State: Mass effects + modifiers (v10)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 16
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Goblin E, hp=24 in a single call

### roleplay.dm.spatial.los-ammo.v01 - DM Spatial: Line of sight + ammo (v01)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v02 - DM Spatial: Line of sight + ammo (v02)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v03 - DM Spatial: Line of sight + ammo (v03)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v04 - DM Spatial: Line of sight + ammo (v04)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v05 - DM Spatial: Line of sight + ammo (v05)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected updateCharacterStats to be called 2 time(s), got 4
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v06 - DM Spatial: Line of sight + ammo (v06)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v07 - DM Spatial: Line of sight + ammo (v07)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v08 - DM Spatial: Line of sight + ammo (v08)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v09 - DM Spatial: Line of sight + ammo (v09)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v10 - DM Spatial: Line of sight + ammo (v10)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected updateCharacterStats to be called 2 time(s), got 4
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool updateCharacterStats not to be called

### roleplay.dm.temporal.delayed-blast.v01 - DM Temporal: Delayed blast radius (v01)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 3; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=7 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=3 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=4 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=5 in a single call

### roleplay.dm.temporal.delayed-blast.v02 - DM Temporal: Delayed blast radius (v02)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 8; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool rollDice not to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=5 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=6 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=7 in a single call

### roleplay.dm.temporal.delayed-blast.v03 - DM Temporal: Delayed blast radius (v03)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 8; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=11 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=7 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=8 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=9 in a single call

### roleplay.dm.temporal.delayed-blast.v04 - DM Temporal: Delayed blast radius (v04)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 3; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=13 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=10 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=11 in a single call

### roleplay.dm.temporal.delayed-blast.v05 - DM Temporal: Delayed blast radius (v05)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 8; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool rollDice not to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=11 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=12 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=13 in a single call

### roleplay.dm.temporal.delayed-blast.v06 - DM Temporal: Delayed blast radius (v06)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 8; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=13 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=14 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=15 in a single call

### roleplay.dm.temporal.delayed-blast.v07 - DM Temporal: Delayed blast radius (v07)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 7; Expected updateCharacterStats arguments to not contain pattern (Goblin A|Goblin B|Goblin C|Goblin D|Goblin F)
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=16 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=17 in a single call

### roleplay.dm.temporal.delayed-blast.v08 - DM Temporal: Delayed blast radius (v08)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 7; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 8; Expected updateCharacterStats arguments to not contain pattern (Goblin A|Goblin B|Goblin C|Goblin D|Goblin F)
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=18 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=19 in a single call

### roleplay.dm.temporal.delayed-blast.v09 - DM Temporal: Delayed blast radius (v09)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=23 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=20 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=21 in a single call

### roleplay.dm.temporal.delayed-blast.v10 - DM Temporal: Delayed blast radius (v10)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 7; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 7; Expected updateCharacterStats arguments to not contain pattern (Goblin A|Goblin B|Goblin C|Goblin D|Goblin F)
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=25 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=22 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=23 in a single call

## minimax-minimax-m2-1_2025-12-28_19-42-53

Target: openrouter:minimax/minimax-m2.1

### roleplay.dm.state.mass-effects.v01 - DM State: Mass effects + modifiers (v01)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=15 in a single call

### roleplay.dm.state.mass-effects.v02 - DM State: Mass effects + modifiers (v02)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v03 - DM State: Mass effects + modifiers (v03)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v04 - DM State: Mass effects + modifiers (v04)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v05 - DM State: Mass effects + modifiers (v05)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v06 - DM State: Mass effects + modifiers (v06)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v07 - DM State: Mass effects + modifiers (v07)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v08 - DM State: Mass effects + modifiers (v08)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v09 - DM State: Mass effects + modifiers (v09)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | jsonParseFailure: {"charactersPresent": ["Aria", "Goblin A", "Goblin B", "Goblin C", "Goblin D", "; describeScene: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected describeScene.scene to equal combat
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v10 - DM State: Mass effects + modifiers (v10)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.spatial.los-ammo.v01 - DM Spatial: Line of sight + ammo (v01)
- step0 (Dash to reach range but cannot shoot): MODEL issue | jsonParseFailure: {"scene": "combat", "charactersPresent": ["Aria", "Goblin A", "Goblin B"], "desc; describeScene: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Dd]ash|[Uu]sed your action|cannot attack this turn|no time to attack|can't attack this turn)
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | resolveCombatAction: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "rollResult" ], "message": "Expected n; resolveCombatAction: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "rollResult" ], "message": "Expected n; Expected resolveCombatAction to be called 1 time(s), got 4; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v02 - DM Spatial: Line of sight + ammo (v02)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool rollDice not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | jsonParseFailure: {"charactersPresent": ["Aria", "Goblin A", "Goblin B"], "description": "Aria noc; describeScene: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v03 - DM Spatial: Line of sight + ammo (v03)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction to include attacker=Aria, target in ["Goblin A","goblin a"], action=attack, damage=4 in a single call; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats to include characterName=Goblin A, hp=9 in a single call; Expected updateCharacterStats arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v04 - DM Spatial: Line of sight + ammo (v04)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v05 - DM Spatial: Line of sight + ammo (v05)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected resolveCombatAction to include attacker=Aria, target in ["Goblin A","goblin a"], action=attack, damage=4 in a single call; Expected updateCharacterStats to be called 2 time(s), got 3
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | resolveCombatAction: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "rollResult" ], "message": "Expected n; Expected tool resolveCombatAction not to be called

### roleplay.dm.spatial.los-ammo.v06 - DM Spatial: Line of sight + ammo (v06)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): MODEL issue | updateCharacterStats: [ { "code": "invalid_type", "expected": "array", "received": "string", "path": [ "inventory" ], "message": "Expected arr; Expected updateCharacterStats to be called 2 time(s), got 3
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v07 - DM Spatial: Line of sight + ammo (v07)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected describeScene.description to match pattern ([Dd]ash|[Uu]sed your action|cannot attack this turn|no time to attack|can't attack this turn); Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): MODEL issue | resolveCombatAction: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "rollResult" ], "message": "Expected n
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v08 - DM Spatial: Line of sight + ammo (v08)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | resolveCombatAction: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "rollResult" ], "message": "Expected n; resolveCombatAction: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "rollResult" ], "message": "Expected n; Expected resolveCombatAction to be called 1 time(s), got 3; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v09 - DM Spatial: Line of sight + ammo (v09)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to include characterName=Aria, inventory=["bow"] in a single call
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v10 - DM Spatial: Line of sight + ammo (v10)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to include characterName=Goblin A, hp=19 in a single call; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.temporal.delayed-blast.v01 - DM Temporal: Delayed blast radius (v01)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to be called 5 time(s), got 4; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=7 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=3 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=4 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=5 in a single call; Expected updateCharacterStats to include characterName=Aria, hp=12 in a single call

### roleplay.dm.temporal.delayed-blast.v02 - DM Temporal: Delayed blast radius (v02)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=5 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=6 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=7 in a single call; Expected updateCharacterStats to include characterName=Aria, hp=14 in a single call

### roleplay.dm.temporal.delayed-blast.v03 - DM Temporal: Delayed blast radius (v03)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v04 - DM Temporal: Delayed blast radius (v04)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | jsonParseFailure: {"charactersPresent": ["Aria", "Goblin A", "Goblin B", "Goblin C", "Goblin D", "; describeScene: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to be called 5 time(s), got 4; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=13 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=10 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=11 in a single call; Expected updateCharacterStats to include characterName=Aria, hp=18 in a single call

### roleplay.dm.temporal.delayed-blast.v05 - DM Temporal: Delayed blast radius (v05)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): OK
- step3 (Blast resolves on turn 3): MODEL issue | jsonParseFailure: {"characterName": "Goblin A"; updateCharacterStats: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected updateCharacterStats to be called 5 time(s), got 2; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=11 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=12 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=13 in a single call

### roleplay.dm.temporal.delayed-blast.v06 - DM Temporal: Delayed blast radius (v06)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 5; Expected updateCharacterStats arguments to not contain pattern (Goblin A|Goblin B|Goblin C|Goblin D|Goblin F)
- step3 (Blast resolves on turn 3): MODEL issue | updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected updateCharacterStats to be called 5 time(s), got 7; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=13 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=14 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=15 in a single call

### roleplay.dm.temporal.delayed-blast.v07 - DM Temporal: Delayed blast radius (v07)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 2 time(s), got 5; Expected updateCharacterStats to include characterName=Goblin E, hp=21 in a single call; Expected updateCharacterStats arguments to not contain pattern (Goblin A|Goblin B|Goblin C|Goblin D|Goblin F)
- step3 (Blast resolves on turn 3): MODEL issue | jsonParseFailure: {"characterName": "Goblin D", "hp": 15; updateCharacterStats: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=16 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=17 in a single call; Expected updateCharacterStats arguments to not contain pattern Goblin D

### roleplay.dm.temporal.delayed-blast.v08 - DM Temporal: Delayed blast radius (v08)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=18 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=19 in a single call

### roleplay.dm.temporal.delayed-blast.v09 - DM Temporal: Delayed blast radius (v09)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v10 - DM Temporal: Delayed blast radius (v10)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 3; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; updateCharacterStats: [ { "received": "dead", "code": "invalid_enum_value", "options": [ "healthy", "poisoned", "unconscious" ], "path": [ "st; updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected updateCharacterStats to be called 5 time(s), got 11; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=25 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=22 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=23 in a single call

## mistralai-devstral-2512-free_2025-12-29_18-44-07

Target: openrouter:mistralai/devstral-2512:free

### roleplay.dm.state.mass-effects.v01 - DM State: Mass effects + modifiers (v01)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=6 in a single call

### roleplay.dm.state.mass-effects.v02 - DM State: Mass effects + modifiers (v02)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to include characterName=Goblin C, hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=12 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=8 in a single call

### roleplay.dm.state.mass-effects.v03 - DM State: Mass effects + modifiers (v03)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to include characterName=Goblin C, hp=11 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=14 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=10 in a single call

### roleplay.dm.state.mass-effects.v04 - DM State: Mass effects + modifiers (v04)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to include characterName=Goblin C, hp=13 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=12 in a single call

### roleplay.dm.state.mass-effects.v05 - DM State: Mass effects + modifiers (v05)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, hp=23 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=14 in a single call

### roleplay.dm.state.mass-effects.v06 - DM State: Mass effects + modifiers (v06)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to include characterName=Goblin C, hp=17 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, hp=25 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=16 in a single call

### roleplay.dm.state.mass-effects.v07 - DM State: Mass effects + modifiers (v07)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to include characterName=Goblin C, hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=20 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=22 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, hp=27 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=18 in a single call

### roleplay.dm.state.mass-effects.v08 - DM State: Mass effects + modifiers (v08)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to include characterName=Goblin C, hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=24 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, hp=29 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=20 in a single call

### roleplay.dm.state.mass-effects.v09 - DM State: Mass effects + modifiers (v09)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, hp=31 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=22 in a single call

### roleplay.dm.state.mass-effects.v10 - DM State: Mass effects + modifiers (v10)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to include characterName=Goblin C, hp=25 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=28 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, hp=33 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=24 in a single call

### roleplay.dm.spatial.los-ammo.v01 - DM Spatial: Line of sight + ammo (v01)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v02 - DM Spatial: Line of sight + ammo (v02)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats to include characterName=Goblin A, hp=7 in a single call; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call; Expected updateCharacterStats arguments to not contain pattern Goblin B; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v03 - DM Spatial: Line of sight + ammo (v03)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v04 - DM Spatial: Line of sight + ammo (v04)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats to include characterName=Goblin A, hp=11 in a single call; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call; Expected updateCharacterStats arguments to not contain pattern Goblin B; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v05 - DM Spatial: Line of sight + ammo (v05)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v06 - DM Spatial: Line of sight + ammo (v06)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v07 - DM Spatial: Line of sight + ammo (v07)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats arguments to not contain pattern Goblin B; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v08 - DM Spatial: Line of sight + ammo (v08)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v09 - DM Spatial: Line of sight + ammo (v09)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats arguments to not contain pattern Goblin B; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v10 - DM Spatial: Line of sight + ammo (v10)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats to include characterName=Goblin A, hp=23 in a single call; Expected updateCharacterStats arguments to not contain pattern Goblin B; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.temporal.delayed-blast.v01 - DM Temporal: Delayed blast radius (v01)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=7 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=3 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=4 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=5 in a single call

### roleplay.dm.temporal.delayed-blast.v02 - DM Temporal: Delayed blast radius (v02)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=5 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=6 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=7 in a single call

### roleplay.dm.temporal.delayed-blast.v03 - DM Temporal: Delayed blast radius (v03)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 7; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=11 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=7 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=8 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=9 in a single call

### roleplay.dm.temporal.delayed-blast.v04 - DM Temporal: Delayed blast radius (v04)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=13 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=10 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=11 in a single call

### roleplay.dm.temporal.delayed-blast.v05 - DM Temporal: Delayed blast radius (v05)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=11 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=12 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=13 in a single call

### roleplay.dm.temporal.delayed-blast.v06 - DM Temporal: Delayed blast radius (v06)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to be called 5 time(s), got 6; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=13 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=14 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=15 in a single call

### roleplay.dm.temporal.delayed-blast.v07 - DM Temporal: Delayed blast radius (v07)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=16 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=17 in a single call

### roleplay.dm.temporal.delayed-blast.v08 - DM Temporal: Delayed blast radius (v08)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to be called 5 time(s), got 1; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=18 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=19 in a single call

### roleplay.dm.temporal.delayed-blast.v09 - DM Temporal: Delayed blast radius (v09)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=23 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=20 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=21 in a single call; Expected updateCharacterStats to include characterName=Aria, hp=28 in a single call

### roleplay.dm.temporal.delayed-blast.v10 - DM Temporal: Delayed blast radius (v10)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=25 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=22 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=23 in a single call

## nvidia-nemotron-3-nano-30b-a3b-free_2025-12-30_18-53-34

Target: openrouter:nvidia/nemotron-3-nano-30b-a3b:free

### roleplay.dm.state.mass-effects.v01 - DM State: Mass effects + modifiers (v01)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v02 - DM State: Mass effects + modifiers (v02)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v03 - DM State: Mass effects + modifiers (v03)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v04 - DM State: Mass effects + modifiers (v04)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v05 - DM State: Mass effects + modifiers (v05)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v06 - DM State: Mass effects + modifiers (v06)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v07 - DM State: Mass effects + modifiers (v07)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v08 - DM State: Mass effects + modifiers (v08)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v09 - DM State: Mass effects + modifiers (v09)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v10 - DM State: Mass effects + modifiers (v10)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.spatial.los-ammo.v01 - DM Spatial: Line of sight + ammo (v01)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v02 - DM Spatial: Line of sight + ammo (v02)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v03 - DM Spatial: Line of sight + ammo (v03)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v04 - DM Spatial: Line of sight + ammo (v04)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v05 - DM Spatial: Line of sight + ammo (v05)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v06 - DM Spatial: Line of sight + ammo (v06)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v07 - DM Spatial: Line of sight + ammo (v07)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v08 - DM Spatial: Line of sight + ammo (v08)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v09 - DM Spatial: Line of sight + ammo (v09)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v10 - DM Spatial: Line of sight + ammo (v10)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.temporal.delayed-blast.v01 - DM Temporal: Delayed blast radius (v01)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v02 - DM Temporal: Delayed blast radius (v02)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v03 - DM Temporal: Delayed blast radius (v03)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v04 - DM Temporal: Delayed blast radius (v04)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v05 - DM Temporal: Delayed blast radius (v05)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v06 - DM Temporal: Delayed blast radius (v06)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v07 - DM Temporal: Delayed blast radius (v07)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v08 - DM Temporal: Delayed blast radius (v08)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v09 - DM Temporal: Delayed blast radius (v09)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v10 - DM Temporal: Delayed blast radius (v10)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool rollDice not to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

## nvidia-nemotron-3-nano-30b-a3b-free_2025-12-30_18-54-45

Target: openrouter:nvidia/nemotron-3-nano-30b-a3b:free

### roleplay.dm.state.mass-effects.v01 - DM State: Mass effects + modifiers (v01)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v02 - DM State: Mass effects + modifiers (v02)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v03 - DM State: Mass effects + modifiers (v03)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v04 - DM State: Mass effects + modifiers (v04)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v05 - DM State: Mass effects + modifiers (v05)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v06 - DM State: Mass effects + modifiers (v06)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v07 - DM State: Mass effects + modifiers (v07)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v08 - DM State: Mass effects + modifiers (v08)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v09 - DM State: Mass effects + modifiers (v09)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.state.mass-effects.v10 - DM State: Mass effects + modifiers (v10)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 8 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 4 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.spatial.los-ammo.v01 - DM Spatial: Line of sight + ammo (v01)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v02 - DM Spatial: Line of sight + ammo (v02)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v03 - DM Spatial: Line of sight + ammo (v03)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v04 - DM Spatial: Line of sight + ammo (v04)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v05 - DM Spatial: Line of sight + ammo (v05)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v06 - DM Spatial: Line of sight + ammo (v06)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v07 - DM Spatial: Line of sight + ammo (v07)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v08 - DM Spatial: Line of sight + ammo (v08)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v09 - DM Spatial: Line of sight + ammo (v09)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.spatial.los-ammo.v10 - DM Spatial: Line of sight + ammo (v10)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called

### roleplay.dm.temporal.delayed-blast.v01 - DM Temporal: Delayed blast radius (v01)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v02 - DM Temporal: Delayed blast radius (v02)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v03 - DM Temporal: Delayed blast radius (v03)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool rollDice not to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v04 - DM Temporal: Delayed blast radius (v04)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool rollDice not to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v05 - DM Temporal: Delayed blast radius (v05)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v06 - DM Temporal: Delayed blast radius (v06)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v07 - DM Temporal: Delayed blast radius (v07)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool rollDice not to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v08 - DM Temporal: Delayed blast radius (v08)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v09 - DM Temporal: Delayed blast radius (v09)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v10 - DM Temporal: Delayed blast radius (v10)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

## openai-gpt-4o-2024-11-20_2025-12-29_17-02-53

Target: openrouter:openai/gpt-4o-2024-11-20

### roleplay.dm.state.mass-effects.v01 - DM State: Mass effects + modifiers (v01)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v02 - DM State: Mass effects + modifiers (v02)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v03 - DM State: Mass effects + modifiers (v03)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v04 - DM State: Mass effects + modifiers (v04)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v05 - DM State: Mass effects + modifiers (v05)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v06 - DM State: Mass effects + modifiers (v06)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v07 - DM State: Mass effects + modifiers (v07)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v08 - DM State: Mass effects + modifiers (v08)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v09 - DM State: Mass effects + modifiers (v09)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v10 - DM State: Mass effects + modifiers (v10)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.spatial.los-ammo.v01 - DM Spatial: Line of sight + ammo (v01)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v02 - DM Spatial: Line of sight + ammo (v02)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call; Expected updateCharacterStats arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v03 - DM Spatial: Line of sight + ammo (v03)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call; Expected updateCharacterStats arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v04 - DM Spatial: Line of sight + ammo (v04)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v05 - DM Spatial: Line of sight + ammo (v05)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats to include characterName=Goblin A, hp=13 in a single call; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call; Expected updateCharacterStats arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v06 - DM Spatial: Line of sight + ammo (v06)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=15 in a single call
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=11 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v07 - DM Spatial: Line of sight + ammo (v07)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 3; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call; Expected updateCharacterStats arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to include characterName=Aria, inventory=["bow"] in a single call
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v08 - DM Spatial: Line of sight + ammo (v08)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=19 in a single call; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v09 - DM Spatial: Line of sight + ammo (v09)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=21 in a single call; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v10 - DM Spatial: Line of sight + ammo (v10)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=23 in a single call; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.temporal.delayed-blast.v01 - DM Temporal: Delayed blast radius (v01)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=14 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v02 - DM Temporal: Delayed blast radius (v02)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=16 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v03 - DM Temporal: Delayed blast radius (v03)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=18 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v04 - DM Temporal: Delayed blast radius (v04)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=20 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v05 - DM Temporal: Delayed blast radius (v05)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=22 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v06 - DM Temporal: Delayed blast radius (v06)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=24 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v07 - DM Temporal: Delayed blast radius (v07)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=26 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v08 - DM Temporal: Delayed blast radius (v08)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=28 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v09 - DM Temporal: Delayed blast radius (v09)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=30 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v10 - DM Temporal: Delayed blast radius (v10)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=32 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

## openai-gpt-5-2_2025-12-28_20-14-23

Target: openrouter:openai/gpt-5.2

### roleplay.dm.state.mass-effects.v01 - DM State: Mass effects + modifiers (v01)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v02 - DM State: Mass effects + modifiers (v02)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v03 - DM State: Mass effects + modifiers (v03)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v04 - DM State: Mass effects + modifiers (v04)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v05 - DM State: Mass effects + modifiers (v05)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v06 - DM State: Mass effects + modifiers (v06)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v07 - DM State: Mass effects + modifiers (v07)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v08 - DM State: Mass effects + modifiers (v08)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v09 - DM State: Mass effects + modifiers (v09)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v10 - DM State: Mass effects + modifiers (v10)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.spatial.los-ammo.v01 - DM Spatial: Line of sight + ammo (v01)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=1 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v02 - DM Spatial: Line of sight + ammo (v02)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected updateCharacterStats to be called 2 time(s), got 4
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v03 - DM Spatial: Line of sight + ammo (v03)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call; Expected describeScene.description to match pattern ([Cc]an('t|not) see|[Ll]ine of sight|[Ww]all|[Bb]locked)
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v04 - DM Spatial: Line of sight + ammo (v04)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v05 - DM Spatial: Line of sight + ammo (v05)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=9 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v06 - DM Spatial: Line of sight + ammo (v06)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v07 - DM Spatial: Line of sight + ammo (v07)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v08 - DM Spatial: Line of sight + ammo (v08)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 3
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v09 - DM Spatial: Line of sight + ammo (v09)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v10 - DM Spatial: Line of sight + ammo (v10)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.temporal.delayed-blast.v01 - DM Temporal: Delayed blast radius (v01)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v02 - DM Temporal: Delayed blast radius (v02)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | jsonParseFailure: {"scene":"combat","description":"You glance back over your shoulder toward the c; describeScene: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=5 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=6 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=7 in a single call

### roleplay.dm.temporal.delayed-blast.v03 - DM Temporal: Delayed blast radius (v03)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 5; Expected updateCharacterStats to include characterName=Goblin E, hp=13 in a single call; Expected updateCharacterStats arguments to not contain pattern (Goblin A|Goblin B|Goblin C|Goblin D|Goblin F)
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=11 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=7 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=8 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=9 in a single call

### roleplay.dm.temporal.delayed-blast.v04 - DM Temporal: Delayed blast radius (v04)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | jsonParseFailure: {"characterName":"Aria","hp":18,"maxHp":; updateCharacterStats: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected updateCharacterStats to be called 5 time(s), got 6; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=13 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=10 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=11 in a single call

### roleplay.dm.temporal.delayed-blast.v05 - DM Temporal: Delayed blast radius (v05)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v06 - DM Temporal: Delayed blast radius (v06)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v07 - DM Temporal: Delayed blast radius (v07)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 2 time(s), got 5; Expected updateCharacterStats to include characterName=Goblin E, hp=21 in a single call; Expected updateCharacterStats arguments to not contain pattern (Goblin A|Goblin B|Goblin C|Goblin D|Goblin F)
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=16 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=17 in a single call

### roleplay.dm.temporal.delayed-blast.v08 - DM Temporal: Delayed blast radius (v08)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=18 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=19 in a single call

### roleplay.dm.temporal.delayed-blast.v09 - DM Temporal: Delayed blast radius (v09)
- step1 (Light fuse and reposition): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=23 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=20 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=21 in a single call

### roleplay.dm.temporal.delayed-blast.v10 - DM Temporal: Delayed blast radius (v10)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

## xiaomi-mimo-v2-flash-free_2025-12-28_21-51-18

Target: openrouter:xiaomi/mimo-v2-flash:free

### roleplay.dm.state.mass-effects.v01 - DM State: Mass effects + modifiers (v01)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin B, hp=12 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=7 in a single call; Expected updateCharacterStats to include characterName=Goblin D, hp=14 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=8 in a single call; Expected updateCharacterStats to include characterName=Goblin F, hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=10 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 2; Expected updateCharacterStats to include characterName=Aria, hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=2 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=6 in a single call

### roleplay.dm.state.mass-effects.v02 - DM State: Mass effects + modifiers (v02)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin B, hp=14 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin D, hp=16 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=10 in a single call; Expected updateCharacterStats to include characterName=Goblin F, hp=11 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=12 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 2; Expected updateCharacterStats to include characterName=Aria, hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=8 in a single call

### roleplay.dm.state.mass-effects.v03 - DM State: Mass effects + modifiers (v03)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin B, hp=16 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=11 in a single call; Expected updateCharacterStats to include characterName=Goblin D, hp=18 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=12 in a single call; Expected updateCharacterStats to include characterName=Goblin F, hp=13 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=14 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 2; Expected updateCharacterStats to include characterName=Aria, hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=6 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=10 in a single call

### roleplay.dm.state.mass-effects.v04 - DM State: Mass effects + modifiers (v04)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin B, hp=18 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=13 in a single call; Expected updateCharacterStats to include characterName=Goblin D, hp=20 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=14 in a single call; Expected updateCharacterStats to include characterName=Goblin F, hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=16 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 2; Expected updateCharacterStats to include characterName=Aria, hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=12 in a single call

### roleplay.dm.state.mass-effects.v05 - DM State: Mass effects + modifiers (v05)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin B, hp=20 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin D, hp=22 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=16 in a single call; Expected updateCharacterStats to include characterName=Goblin F, hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=18 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 2; Expected updateCharacterStats to include characterName=Aria, hp=23 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=10 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=14 in a single call

### roleplay.dm.state.mass-effects.v06 - DM State: Mass effects + modifiers (v06)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin B, hp=22 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin D, hp=24 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=18 in a single call; Expected updateCharacterStats to include characterName=Goblin F, hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=20 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin B, hp=12 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=16 in a single call

### roleplay.dm.state.mass-effects.v07 - DM State: Mass effects + modifiers (v07)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin A, hp=18 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=24 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin D, hp=26 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=20 in a single call; Expected updateCharacterStats to include characterName=Goblin F, hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=22 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin B, hp=14 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=18 in a single call

### roleplay.dm.state.mass-effects.v08 - DM State: Mass effects + modifiers (v08)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin B, hp=26 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin D, hp=28 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=22 in a single call; Expected updateCharacterStats to include characterName=Goblin F, hp=23 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=24 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 2; Expected updateCharacterStats to include characterName=Aria, hp=29 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=16 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=20 in a single call

### roleplay.dm.state.mass-effects.v09 - DM State: Mass effects + modifiers (v09)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin A, hp=22 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=28 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=23 in a single call; Expected updateCharacterStats to include characterName=Goblin D, hp=30 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=24 in a single call; Expected updateCharacterStats to include characterName=Goblin F, hp=25 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=26 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 2; Expected updateCharacterStats to include characterName=Aria, hp=31 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=18 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=22 in a single call

### roleplay.dm.state.mass-effects.v10 - DM State: Mass effects + modifiers (v10)
- step1 (Apply Arcane Pulse to all creatures): MODEL issue | Expected updateCharacterStats to be called 8 time(s), got 2; Expected updateCharacterStats to include characterName=Goblin A, hp=24 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=30 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=25 in a single call; Expected updateCharacterStats to include characterName=Goblin D, hp=32 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=26 in a single call; Expected updateCharacterStats to include characterName=Goblin F, hp=27 in a single call; Expected updateCharacterStats to include characterName=Goblin G, hp=28 in a single call
- step2 (Apply Frost Wave to y<=1 only): MODEL issue | Expected updateCharacterStats to be called 4 time(s), got 2; Expected updateCharacterStats to include characterName=Aria, hp=33 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=20 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=24 in a single call

### roleplay.dm.spatial.los-ammo.v01 - DM Spatial: Line of sight + ammo (v01)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=1 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called

### roleplay.dm.spatial.los-ammo.v02 - DM Spatial: Line of sight + ammo (v02)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=3 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v03 - DM Spatial: Line of sight + ammo (v03)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=9 in a single call; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=5 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v04 - DM Spatial: Line of sight + ammo (v04)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=7 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v05 - DM Spatial: Line of sight + ammo (v05)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=13 in a single call; Expected updateCharacterStats to include characterName=Aria, inventory=["bow","arrow"] in a single call
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=9 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v06 - DM Spatial: Line of sight + ammo (v06)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=11 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v07 - DM Spatial: Line of sight + ammo (v07)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=17 in a single call
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=13 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v08 - DM Spatial: Line of sight + ammo (v08)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=15 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.spatial.los-ammo.v09 - DM Spatial: Line of sight + ammo (v09)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool resolveCombatAction to be called; Expected resolveCombatAction to be called 1 time(s), got 0; Expected tool resolveCombatAction to be called; Expected tool resolveCombatAction to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=17 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called

### roleplay.dm.spatial.los-ammo.v10 - DM Spatial: Line of sight + ammo (v10)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected updateCharacterStats to be called 2 time(s), got 1; Expected updateCharacterStats to include characterName=Goblin A, hp=19 in a single call
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called; Expected tool updateCharacterStats not to be called

### roleplay.dm.temporal.delayed-blast.v01 - DM Temporal: Delayed blast radius (v01)
- step1 (Light fuse and reposition): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v02 - DM Temporal: Delayed blast radius (v02)
- step1 (Light fuse and reposition): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v03 - DM Temporal: Delayed blast radius (v03)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=18 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v04 - DM Temporal: Delayed blast radius (v04)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v05 - DM Temporal: Delayed blast radius (v05)
- step1 (Light fuse and reposition): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v06 - DM Temporal: Delayed blast radius (v06)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v07 - DM Temporal: Delayed blast radius (v07)
- step1 (Light fuse and reposition): MODEL issue | Expected updateCharacterStats to include characterName=Aria, hp=26 in a single call
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v08 - DM Temporal: Delayed blast radius (v08)
- step1 (Light fuse and reposition): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v09 - DM Temporal: Delayed blast radius (v09)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v10 - DM Temporal: Delayed blast radius (v10)
- step1 (Light fuse and reposition): MODEL issue | Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 1 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

## z-ai-glm-4-7_2025-12-29_17-48-10

Target: openrouter:z-ai/glm-4.7

### roleplay.dm.state.mass-effects.v01 - DM State: Mass effects + modifiers (v01)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v02 - DM State: Mass effects + modifiers (v02)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v03 - DM State: Mass effects + modifiers (v03)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v04 - DM State: Mass effects + modifiers (v04)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v05 - DM State: Mass effects + modifiers (v05)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v06 - DM State: Mass effects + modifiers (v06)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v07 - DM State: Mass effects + modifiers (v07)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v08 - DM State: Mass effects + modifiers (v08)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v09 - DM State: Mass effects + modifiers (v09)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.state.mass-effects.v10 - DM State: Mass effects + modifiers (v10)
- step1 (Apply Arcane Pulse to all creatures): OK
- step2 (Apply Frost Wave to y<=1 only): OK

### roleplay.dm.spatial.los-ammo.v01 - DM Spatial: Line of sight + ammo (v01)
- step0 (Dash to reach range but cannot shoot): OK
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called

### roleplay.dm.spatial.los-ammo.v02 - DM Spatial: Line of sight + ammo (v02)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected describeScene.scene to equal combat
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v03 - DM Spatial: Line of sight + ammo (v03)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected describeScene.scene to equal combat
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v04 - DM Spatial: Line of sight + ammo (v04)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected describeScene.scene to equal combat
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | describeScene: [ { "code": "invalid_type", "expected": "array", "received": "undefined", "path": [ "charactersPresent" ], "message": "R; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v05 - DM Spatial: Line of sight + ammo (v05)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected describeScene.scene to equal combat
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v06 - DM Spatial: Line of sight + ammo (v06)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected describeScene.scene to equal combat
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected updateCharacterStats to be called 2 time(s), got 3
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v07 - DM Spatial: Line of sight + ammo (v07)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected describeScene.scene to equal combat
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v08 - DM Spatial: Line of sight + ammo (v08)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v09 - DM Spatial: Line of sight + ammo (v09)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): MODEL issue | Expected resolveCombatAction to be called 1 time(s), got 2; Expected resolveCombatAction arguments to not contain pattern Goblin B
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): OK

### roleplay.dm.spatial.los-ammo.v10 - DM Spatial: Line of sight + ammo (v10)
- step0 (Dash to reach range but cannot shoot): MODEL issue | Expected describeScene.description to match pattern ([Dd]ash|[Uu]sed your action|cannot attack this turn|no time to attack|can't attack this turn)
- step1 (Line of sight blocks one shot; ammo decrements for valid shot): OK
- step2 (Second valid shot consumes the last arrow): OK
- step3 (Out of ammo and no line of sight blocks a shot): MODEL issue | Expected tool resolveCombatAction not to be called

### roleplay.dm.temporal.delayed-blast.v01 - DM Temporal: Delayed blast radius (v01)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 1 time(s), got 3; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v02 - DM Temporal: Delayed blast radius (v02)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | jsonParseFailure: {"scene": "combat", "description": "At the start of Turn 3, the bomb at (0,2) er; describeScene: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=5 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=6 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=7 in a single call

### roleplay.dm.temporal.delayed-blast.v03 - DM Temporal: Delayed blast radius (v03)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v04 - DM Temporal: Delayed blast radius (v04)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat
- step3 (Blast resolves on turn 3): MODEL issue | jsonParseFailure: {"characterName": ; updateCharacterStats: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected updateCharacterStats to be called 5 time(s), got 6; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=13 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=9 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=11 in a single call

### roleplay.dm.temporal.delayed-blast.v05 - DM Temporal: Delayed blast radius (v05)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | updateCharacterStats: [ { "code": "invalid_type", "expected": "string", "received": "undefined", "path": [ "characterName" ], "message": "Requ; Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 5 time(s), got 6; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=11 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=12 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=13 in a single call

### roleplay.dm.temporal.delayed-blast.v06 - DM Temporal: Delayed blast radius (v06)
- step1 (Light fuse and reposition): OK
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected describeScene.scene to equal combat; Expected describeScene.description to match pattern ([Bb]oom|[Bb]last|[Ee]xplod|[Dd]etonat|[Ff]ire); Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v07 - DM Temporal: Delayed blast radius (v07)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | jsonParseFailure: {"scene": "combat", "description": "At the start of Turn 3, poison courses throu; describeScene: [ { "code": "invalid_type", "expected": "object", "received": "string", "path": [], "message": "Expected object, receive; Expected describeScene.scene to equal combat; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=19 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=15 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=16 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=17 in a single call

### roleplay.dm.temporal.delayed-blast.v08 - DM Temporal: Delayed blast radius (v08)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | updateCharacterStats: [ { "code": "invalid_type", "expected": "number", "received": "string", "path": [ "hp" ], "message": "Expected number, r; Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 5 time(s), got 6; Expected updateCharacterStats to include characterName in ["Goblin A","goblin a"], hp=21 in a single call; Expected updateCharacterStats to include characterName=Goblin B, hp=17 in a single call; Expected updateCharacterStats to include characterName=Goblin C, hp=18 in a single call; Expected updateCharacterStats to include characterName=Goblin E, hp=19 in a single call

### roleplay.dm.temporal.delayed-blast.v09 - DM Temporal: Delayed blast radius (v09)
- step1 (Light fuse and reposition): MODEL issue | Expected tool resolveCombatAction not to be called; Expected updateCharacterStats to be called 1 time(s), got 3; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

### roleplay.dm.temporal.delayed-blast.v10 - DM Temporal: Delayed blast radius (v10)
- step1 (Light fuse and reposition): MODEL issue | Expected describeScene.scene to equal combat; Expected updateCharacterStats to be called 1 time(s), got 2; Expected updateCharacterStats arguments to not contain pattern Goblin
- step2 (Distraction before the blast): MODEL issue | Expected describeScene.scene to equal combat; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 2 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called
- step3 (Blast resolves on turn 3): MODEL issue | Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool describeScene to be called; Expected tool updateCharacterStats to be called; Expected updateCharacterStats to be called 5 time(s), got 0; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called; Expected tool updateCharacterStats to be called

