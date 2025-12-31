import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Tabs, TabsList, TabsTrigger, TabsContent, Badge, Button } from "./ui/components";
import { cn } from "../lib/utils";
import { User, Shield, Zap, Skull, Box, EyeOff, Bomb, Flame } from "lucide-react";

// Types for Visualization
type Entity = {
  x: number;
  y: number;
  name: string;
  trait: 'shielded' | 'vulnerable' | 'resistant' | 'normal' | 'poisoned';
  hp: number;
  maxHp: number;
};

type Wall = {
  x: number;
  y: number;
};

type Effect = {
  type: 'blast' | 'cone' | 'line' | 'hits-all' | 'spatial-filter';
  origin?: { x: number, y: number };
  radius?: number;
  cells?: { x: number, y: number }[];
  filter?: (entity: Entity) => boolean; // For spatial filtering like y<=1
  active?: boolean;
};

type TurnData = {
  turn: number;
  label: string;
  entities: Entity[];
  effects: Effect[];
  description: string;
  hpChanges?: { [entityName: string]: { before: number; after: number; damage: number } };
  inventory?: { [characterName: string]: string[] };
  highlightedEntities?: string[]; // Entity names to highlight
};

interface ScenarioProps {
  gridSize: { w: number, h: number };
  entities: Entity[];
  walls: Wall[];
  effects: Effect[];
  description: string;
  name: string;
}

interface ScenarioWithTurns {
  name: string;
  turns: TurnData[];
  gridSize: { w: number, h: number };
  walls: Wall[];
  ruleExplanation?: string;
}

const EntityIcon = ({ trait }: { trait: Entity['trait'] }) => {
  switch (trait) {
    case 'shielded': return <Shield className="w-4 h-4 text-blue-400" />;
    case 'vulnerable': return <Zap className="w-4 h-4 text-yellow-400" />;
    case 'resistant': return <Box className="w-4 h-4 text-emerald-400" />;
    case 'poisoned': return <Skull className="w-4 h-4 text-green-500" />;
    default: return <User className="w-4 h-4 text-neutral-200" />;
  }
};

const GridRenderer = ({ scenario, highlightedEntities, hpChanges }: { 
  scenario: ScenarioProps; 
  highlightedEntities?: string[];
  hpChanges?: { [entityName: string]: { before: number; after: number; damage: number } };
}) => {
  const { gridSize, entities, walls, effects } = scenario;
  
  // Helper to check if a cell is affected
  const isAffected = (x: number, y: number) => {
    return effects.some(e => {
        if (e.active === false) return false;
        if (e.type === 'blast' && e.radius && e.origin) {
            // Manhattan distance
            return (Math.abs(e.origin.x - x) + Math.abs(e.origin.y - y)) <= e.radius;
        }
        if (e.type === 'spatial-filter' && e.filter) {
            const entity = entities.find(ent => ent.x === x && ent.y === y);
            return entity ? e.filter(entity) : false;
        }
        return false;
    });
  };

  // Check if entity is affected by "hits all" effect
  const isHitsAll = effects.some(e => e.type === 'hits-all' && e.active !== false);
  const entityAffected = (entity: Entity) => {
    if (isHitsAll) return true;
    if (highlightedEntities && highlightedEntities.includes(entity.name)) return true;
    if (hpChanges && hpChanges[entity.name]) return true;
    return isAffected(entity.x, entity.y);
  };

  const rows = [];
  for (let y = 0; y < gridSize.h; y++) {
    const cols = [];
    for (let x = 0; x < gridSize.w; x++) {
      const entity = entities.find(e => e.x === x && e.y === y);
      const isWall = walls.some(w => w && w.x === x && w.y === y);
      const affected = isAffected(x, y);
      const isOrigin = effects.some(e => e.origin && e.origin.x === x && e.origin.y === y);

      cols.push(
        <div 
          key={`${x}-${y}`} 
          className={cn(
            "relative w-12 h-12 md:w-16 md:h-16 border border-neutral-800 flex items-center justify-center text-xs",
            isWall ? "bg-neutral-800" : "bg-neutral-900/50",
            affected && !isWall && "bg-amber-900/20 shadow-[inset_0_0_10px_rgba(245,158,11,0.2)]",
            isOrigin && "bg-red-900/30"
          )}
        >
          {/* Coordinates helper (faint) */}
          <span className="absolute top-0.5 right-0.5 text-[0.5rem] text-neutral-700 font-mono">{x},{y}</span>

          {isWall && <EyeOff className="text-neutral-600 w-6 h-6" />}
          
          {isOrigin && <Bomb className="absolute w-8 h-8 text-red-500/50 animate-pulse" />}

          {entity && (
            <div className="z-10 flex flex-col items-center">
              <div className={cn(
                "p-1.5 rounded-full border border-neutral-700 bg-neutral-900", 
                (affected || entityAffected(entity)) ? "animate-bounce border-amber-500" : ""
              )}>
                <EntityIcon trait={entity.trait} />
              </div>
              <span className="text-[0.6rem] mt-0.5 font-semibold truncate max-w-[4rem] text-center bg-black/50 px-1 rounded">
                {entity.name}
              </span>
              <div className="w-full h-1 bg-neutral-800 mt-0.5 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500" style={{ width: `${(entity.hp / entity.maxHp) * 100}%` }}></div>
              </div>
              {hpChanges && hpChanges[entity.name] && (
                <span className="text-[0.5rem] text-red-400 mt-0.5">
                  -{hpChanges[entity.name].damage}
                </span>
              )}
            </div>
          )}
          
          {(affected || isHitsAll) && !isWall && !entity && <Flame className="w-4 h-4 text-amber-500/20" />}
        </div>
      );
    }
    rows.push(<div key={y} className="flex">{cols}</div>);
  }

  return (
    <div className="flex flex-col gap-4 items-center overflow-auto p-4 rounded-lg border border-neutral-800 bg-neutral-950">
      <div className="flex flex-col border border-neutral-800 rounded-md overflow-hidden">
        {rows}
      </div>
      <div className="flex flex-wrap gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-1"><Shield className="w-3 h-3 text-blue-400"/> Shielded</div>
        <div className="flex items-center gap-1"><Zap className="w-3 h-3 text-yellow-400"/> Vulnerable</div>
        <div className="flex items-center gap-1"><Box className="w-3 h-3 text-emerald-400"/> Resistant</div>
        <div className="flex items-center gap-1"><Flame className="w-3 h-3 text-amber-500"/> Damage Area</div>
        {isHitsAll && <div className="flex items-center gap-1 text-amber-500"><Flame className="w-3 h-3"/> Hits ALL</div>}
      </div>
    </div>
  );
};

export default function ScenarioVisualizer() {
  const [activeTab, setActiveTab] = useState("mass-effects");
  const [massEffectsTurn, setMassEffectsTurn] = useState(0);
  const [losStep, setLosStep] = useState(0);
  const [blastTurn, setBlastTurn] = useState(0);

  // Mass Effects - Initial entities
  const massEffectsInitial: Entity[] = [
    { x: 0, y: 0, name: "Aria", trait: "resistant", hp: 21, maxHp: 21 },
    { x: 1, y: 0, name: "Goblin A", trait: "shielded", hp: 9, maxHp: 9 },
    { x: 2, y: 0, name: "Goblin B", trait: "vulnerable", hp: 26, maxHp: 26 },
    { x: 0, y: 2, name: "Goblin C", trait: "normal", hp: 14, maxHp: 14 },
    { x: 1, y: 2, name: "Goblin D", trait: "resistant", hp: 18, maxHp: 18 },
    { x: 2, y: 1, name: "Goblin E", trait: "shielded", hp: 11, maxHp: 11 },
    { x: 0, y: 3, name: "Goblin F", trait: "vulnerable", hp: 23, maxHp: 23 },
    { x: 2, y: 2, name: "Goblin G", trait: "normal", hp: 17, maxHp: 17 },
  ];

  // Mass Effects Turn 1: Arcane Pulse hits all
  const massEffectsTurn1Entities: Entity[] = [
    { x: 0, y: 0, name: "Aria", trait: "resistant", hp: 17, maxHp: 21 },
    { x: 1, y: 0, name: "Goblin A", trait: "shielded", hp: 6, maxHp: 9 },
    { x: 2, y: 0, name: "Goblin B", trait: "vulnerable", hp: 12, maxHp: 26 },
    { x: 0, y: 2, name: "Goblin C", trait: "normal", hp: 7, maxHp: 14 },
    { x: 1, y: 2, name: "Goblin D", trait: "resistant", hp: 14, maxHp: 18 },
    { x: 2, y: 1, name: "Goblin E", trait: "shielded", hp: 8, maxHp: 11 },
    { x: 0, y: 3, name: "Goblin F", trait: "vulnerable", hp: 9, maxHp: 23 },
    { x: 2, y: 2, name: "Goblin G", trait: "normal", hp: 10, maxHp: 17 },
  ];

  // Mass Effects Turn 2: Frost Wave hits y<=1
  const massEffectsTurn2Entities: Entity[] = [
    { x: 0, y: 0, name: "Aria", trait: "resistant", hp: 15, maxHp: 21 },
    { x: 1, y: 0, name: "Goblin A", trait: "shielded", hp: 4, maxHp: 9 },
    { x: 2, y: 0, name: "Goblin B", trait: "vulnerable", hp: 2, maxHp: 26 },
    { x: 0, y: 2, name: "Goblin C", trait: "normal", hp: 7, maxHp: 14 },
    { x: 1, y: 2, name: "Goblin D", trait: "resistant", hp: 14, maxHp: 18 },
    { x: 2, y: 1, name: "Goblin E", trait: "shielded", hp: 6, maxHp: 11 },
    { x: 0, y: 3, name: "Goblin F", trait: "vulnerable", hp: 9, maxHp: 23 },
    { x: 2, y: 2, name: "Goblin G", trait: "normal", hp: 10, maxHp: 17 },
  ];

  const massEffectsTurns: TurnData[] = [
    {
      turn: 1,
      label: "Turn 1: Arcane Pulse",
      entities: massEffectsTurn1Entities,
      effects: [{ type: 'hits-all' }],
      description: "Arcane Pulse hits ALL creatures. Base damage 7.",
      hpChanges: {
        "Aria": { before: 21, after: 17, damage: 4 },
        "Goblin A": { before: 9, after: 6, damage: 3 },
        "Goblin B": { before: 26, after: 12, damage: 14 },
        "Goblin C": { before: 14, after: 7, damage: 7 },
        "Goblin D": { before: 18, after: 14, damage: 4 },
        "Goblin E": { before: 11, after: 8, damage: 3 },
        "Goblin F": { before: 23, after: 9, damage: 14 },
        "Goblin G": { before: 17, after: 10, damage: 7 },
      },
      highlightedEntities: ["Aria", "Goblin A", "Goblin B", "Goblin C", "Goblin D", "Goblin E", "Goblin F", "Goblin G"],
    },
    {
      turn: 2,
      label: "Turn 2: Frost Wave",
      entities: massEffectsTurn2Entities,
      effects: [{ type: 'spatial-filter', filter: (e) => e.y <= 1 }],
      description: "Frost Wave hits only creatures with y<=1. Base damage 5.",
      hpChanges: {
        "Aria": { before: 17, after: 15, damage: 2 },
        "Goblin A": { before: 6, after: 4, damage: 2 },
        "Goblin B": { before: 12, after: 2, damage: 10 },
        "Goblin E": { before: 8, after: 6, damage: 2 },
      },
      highlightedEntities: ["Aria", "Goblin A", "Goblin B", "Goblin E"],
    },
  ];

  const massEffectsScenario: ScenarioWithTurns = {
    name: "Mass Effects + Modifiers",
    turns: massEffectsTurns,
    gridSize: { w: 3, h: 4 },
    walls: [],
    ruleExplanation: "Fixed damage (no dice). Arcane Pulse hits ALL creatures. Frost Wave hits only y<=1.",
  };

  // Line of Sight - Step data
  const losWalls = Array.from({ length: 4 }, (_, y) => 
    Array.from({ length: 4 }, (_, x) => x !== 0 ? { x, y } : null)
  ).flat().filter((w): w is Wall => w !== null);

  const losSteps: TurnData[] = [
    {
      turn: 0,
      label: "Step 0: Dash",
      entities: [
        { x: 0, y: 1, name: "Aria", trait: "normal", hp: 20, maxHp: 20 },
        { x: 0, y: 3, name: "Goblin A", trait: "normal", hp: 10, maxHp: 10 },
        { x: 2, y: 3, name: "Goblin B", trait: "vulnerable", hp: 10, maxHp: 10 },
      ],
      effects: [],
      description: "Dash action - cannot attack this turn.",
      inventory: { "Aria": ["bow", "arrow", "arrow"] },
    },
    {
      turn: 1,
      label: "Step 1: Two Shots",
      entities: [
        { x: 0, y: 1, name: "Aria", trait: "normal", hp: 20, maxHp: 20 },
        { x: 0, y: 3, name: "Goblin A", trait: "normal", hp: 6, maxHp: 10 },
        { x: 2, y: 3, name: "Goblin B", trait: "vulnerable", hp: 10, maxHp: 10 },
      ],
      effects: [],
      description: "Two shots: Goblin A hit (valid), Goblin B blocked (no line of sight).",
      hpChanges: {
        "Goblin A": { before: 10, after: 6, damage: 4 },
      },
      inventory: { "Aria": ["bow", "arrow"] },
    },
    {
      turn: 2,
      label: "Step 2: Second Shot",
      entities: [
        { x: 0, y: 1, name: "Aria", trait: "normal", hp: 20, maxHp: 20 },
        { x: 0, y: 3, name: "Goblin A", trait: "normal", hp: 2, maxHp: 10 },
        { x: 2, y: 3, name: "Goblin B", trait: "vulnerable", hp: 10, maxHp: 10 },
      ],
      effects: [],
      description: "Second shot at Goblin A. Last arrow consumed.",
      hpChanges: {
        "Goblin A": { before: 6, after: 2, damage: 4 },
      },
      inventory: { "Aria": ["bow"] },
    },
    {
      turn: 3,
      label: "Step 3: Out of Ammo",
      entities: [
        { x: 0, y: 1, name: "Aria", trait: "normal", hp: 20, maxHp: 20 },
        { x: 0, y: 3, name: "Goblin A", trait: "normal", hp: 2, maxHp: 10 },
        { x: 2, y: 3, name: "Goblin B", trait: "vulnerable", hp: 10, maxHp: 10 },
      ],
      effects: [],
      description: "Out of ammo / No line of sight. Attack blocked.",
      inventory: { "Aria": ["bow"] },
    },
  ];

  const losScenario: ScenarioWithTurns = {
    name: "Line of Sight + Ammo",
    turns: losSteps,
    gridSize: { w: 4, h: 4 },
    walls: losWalls,
    ruleExplanation: "Only x=0 is open; walls block line of sight. Range 6 squares. Dash uses action; invalid shots don't consume ammo.",
  };

  // Delayed Blast - Turn data
  const blastInitial: Entity[] = [
    { x: 0, y: 0, name: "Aria", trait: "poisoned", hp: 15, maxHp: 15 },
    { x: 0, y: 2, name: "Goblin A", trait: "shielded", hp: 11, maxHp: 11 },
    { x: 0, y: 3, name: "Goblin B", trait: "vulnerable", hp: 23, maxHp: 23 },
    { x: 0, y: 4, name: "Goblin C", trait: "normal", hp: 14, maxHp: 14 },
    { x: 0, y: 6, name: "Goblin D", trait: "normal", hp: 16, maxHp: 16 },
    { x: 1, y: 2, name: "Goblin E", trait: "shielded", hp: 12, maxHp: 12 },
    { x: 0, y: 8, name: "Goblin F", trait: "normal", hp: 10, maxHp: 10 },
  ];

  const blastTurns: TurnData[] = [
    {
      turn: 1,
      label: "Turn 1: Light Fuse",
      entities: [
        { x: 0, y: 5, name: "Aria", trait: "poisoned", hp: 14, maxHp: 15 },
        { x: 0, y: 2, name: "Goblin A", trait: "shielded", hp: 11, maxHp: 11 },
        { x: 0, y: 3, name: "Goblin B", trait: "vulnerable", hp: 23, maxHp: 23 },
        { x: 0, y: 4, name: "Goblin C", trait: "normal", hp: 14, maxHp: 14 },
        { x: 0, y: 6, name: "Goblin D", trait: "normal", hp: 16, maxHp: 16 },
        { x: 1, y: 2, name: "Goblin E", trait: "shielded", hp: 12, maxHp: 12 },
        { x: 0, y: 8, name: "Goblin F", trait: "normal", hp: 10, maxHp: 10 },
      ],
      effects: [{ type: 'blast', origin: { x: 0, y: 2 }, radius: 2, active: false }],
      description: "Light fuse, move to (0,5), poison tick.",
      hpChanges: {
        "Aria": { before: 15, after: 14, damage: 1 },
      },
    },
    {
      turn: 2,
      label: "Turn 2: Ceiling Shard",
      entities: [
        { x: 0, y: 5, name: "Aria", trait: "poisoned", hp: 13, maxHp: 15 },
        { x: 0, y: 2, name: "Goblin A", trait: "shielded", hp: 11, maxHp: 11 },
        { x: 0, y: 3, name: "Goblin B", trait: "vulnerable", hp: 23, maxHp: 23 },
        { x: 0, y: 4, name: "Goblin C", trait: "normal", hp: 14, maxHp: 14 },
        { x: 0, y: 6, name: "Goblin D", trait: "normal", hp: 16, maxHp: 16 },
        { x: 1, y: 2, name: "Goblin E", trait: "shielded", hp: 9, maxHp: 12 },
        { x: 0, y: 8, name: "Goblin F", trait: "normal", hp: 10, maxHp: 10 },
      ],
      effects: [{ type: 'blast', origin: { x: 0, y: 2 }, radius: 2, active: false }],
      description: "Poison tick, ceiling shard hits Goblin E.",
      hpChanges: {
        "Aria": { before: 14, after: 13, damage: 1 },
        "Goblin E": { before: 12, after: 9, damage: 3 },
      },
    },
    {
      turn: 3,
      label: "Turn 3: Explosion!",
      entities: [
        { x: 0, y: 5, name: "Aria", trait: "poisoned", hp: 12, maxHp: 15 },
        { x: 0, y: 2, name: "Goblin A", trait: "shielded", hp: 7, maxHp: 11 },
        { x: 0, y: 3, name: "Goblin B", trait: "vulnerable", hp: 3, maxHp: 23 },
        { x: 0, y: 4, name: "Goblin C", trait: "normal", hp: 4, maxHp: 14 },
        { x: 0, y: 6, name: "Goblin D", trait: "normal", hp: 16, maxHp: 16 },
        { x: 1, y: 2, name: "Goblin E", trait: "shielded", hp: 5, maxHp: 12 },
        { x: 0, y: 8, name: "Goblin F", trait: "normal", hp: 10, maxHp: 10 },
      ],
      effects: [{ type: 'blast', origin: { x: 0, y: 2 }, radius: 2 }],
      description: "Explosion! Poison tick continues. Manhattan distance 2. Aria outside radius.",
      hpChanges: {
        "Aria": { before: 13, after: 12, damage: 1 },
        "Goblin A": { before: 11, after: 7, damage: 4 },
        "Goblin B": { before: 23, after: 3, damage: 20 },
        "Goblin C": { before: 14, after: 4, damage: 10 },
        "Goblin E": { before: 9, after: 5, damage: 4 },
      },
      highlightedEntities: ["Goblin A", "Goblin B", "Goblin C", "Goblin E"],
    },
  ];

  const blastScenario: ScenarioWithTurns = {
    name: "Delayed Blast Radius",
    turns: blastTurns,
    gridSize: { w: 3, h: 9 },
    walls: [],
    ruleExplanation: "Poison ticks every turn. Bomb explodes on Turn 3. Manhattan distance = |x1-x2| + |y1-y2|.",
  };

  const renderScenario = (scenario: ScenarioWithTurns, currentTurn: number, setTurn: (turn: number) => void) => {
    const currentTurnData = scenario.turns[currentTurn];
    const scenarioProps: ScenarioProps = {
      gridSize: scenario.gridSize,
      entities: currentTurnData.entities,
      walls: scenario.walls,
      effects: currentTurnData.effects,
      description: currentTurnData.description,
      name: scenario.name,
    };

    return (
      <div className="space-y-4">
        {/* Turn/Step Selector */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span>Currently showing:</span>
            <Badge variant="outline" className="border-primary/50 text-primary">
              {currentTurnData.label}
            </Badge>
          </div>
          <div className="flex gap-2 flex-wrap">
            {scenario.turns.map((turn, idx) => (
              <Button
                key={idx}
                variant={currentTurn === idx ? "default" : "outline"}
                size="sm"
                onClick={() => setTurn(idx)}
                className={cn(
                  "text-xs",
                  currentTurn === idx && "bg-primary text-primary-foreground"
                )}
              >
                {turn.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <GridRenderer 
            scenario={scenarioProps} 
            highlightedEntities={currentTurnData.highlightedEntities}
            hpChanges={currentTurnData.hpChanges}
          />
          <div className="space-y-4 text-sm text-neutral-300 flex-1">
            <h4 className="font-serif text-lg text-foreground">{scenario.name}</h4>
            <p className="text-neutral-400">{currentTurnData.description}</p>
            
            {scenario.ruleExplanation && (
              <div className="p-3 bg-blue-950/30 rounded border border-blue-800/50 text-xs">
                <p className="text-blue-300 font-semibold mb-1">Rule:</p>
                <p className="text-blue-200">{scenario.ruleExplanation}</p>
              </div>
            )}

            {currentTurnData.hpChanges && Object.keys(currentTurnData.hpChanges).length > 0 && (
              <div className="p-3 bg-black/40 rounded border border-neutral-800">
                <p className="text-muted-foreground mb-2 font-semibold">HP Changes:</p>
                <div className="space-y-1 font-mono text-xs">
                  {Object.entries(currentTurnData.hpChanges).map(([name, change]) => (
                    <div key={name} className="flex justify-between">
                      <span>{name}:</span>
                      <span className="text-red-400">
                        {change.before} → {change.after} (-{change.damage})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentTurnData.inventory && (
              <div className="p-3 bg-black/40 rounded border border-neutral-800">
                <p className="text-muted-foreground mb-2 font-semibold">Inventory:</p>
                <div className="space-y-1 font-mono text-xs">
                  {Object.entries(currentTurnData.inventory).map(([name, items]) => (
                    <div key={name}>
                      <span className="font-semibold">{name}:</span>{" "}
                      <span className="text-neutral-300">
                        [{items.join(", ")}]
                        {name === "Aria" && items.filter(i => i === "arrow").length > 0 && (
                          <span className="ml-2 text-amber-400">
                            ({items.filter(i => i === "arrow").length} arrow{items.filter(i => i === "arrow").length !== 1 ? "s" : ""})
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 bg-black/40 rounded border border-neutral-800 font-mono text-xs">
              <p className="text-muted-foreground mb-2">// {currentTurnData.label} Details</p>
              {scenario.name === "Mass Effects + Modifiers" && (
                <>
                  {currentTurn === 0 && (
                    <>
                      <p>Arcane Pulse: Base damage 7</p>
                      <p>Shielded: 3 damage</p>
                      <p>Vulnerable: 14 damage</p>
                      <p>Resistant: 4 damage</p>
                      <p>Normal: 7 damage</p>
                    </>
                  )}
                  {currentTurn === 1 && (
                    <>
                      <p>Frost Wave: Base damage 5</p>
                      <p>Only hits y &lt;= 1</p>
                      <p>Shielded: 2 damage</p>
                      <p>Vulnerable: 10 damage</p>
                      <p>Resistant: 2 damage</p>
                      <p>Normal: 5 damage</p>
                    </>
                  )}
                </>
              )}
              {scenario.name === "Line of Sight + Ammo" && (
                <>
                  {currentTurn === 0 && (
                    <p>Dash uses action. Cannot attack this turn.</p>
                  )}
                  {currentTurn === 1 && (
                    <>
                      <p>Two shots attempted:</p>
                      <p>- Goblin A: Valid (line of sight)</p>
                      <p>- Goblin B: Blocked (x!=0 is wall)</p>
                      <p>Only valid shot consumes ammo.</p>
                    </>
                  )}
                  {currentTurn === 2 && (
                    <p>Second shot at Goblin A. Last arrow consumed.</p>
                  )}
                  {currentTurn === 3 && (
                    <p>Out of ammo. Attack blocked.</p>
                  )}
                </>
              )}
              {scenario.name === "Delayed Blast Radius" && (
                <>
                  {currentTurn === 0 && (
                    <>
                      <p>Turn 1: Poison tick (-1 HP)</p>
                      <p>Aria moves to (0,5)</p>
                      <p>Bomb fuse lit</p>
                    </>
                  )}
                  {currentTurn === 1 && (
                    <>
                      <p>Turn 2: Poison tick (-1 HP)</p>
                      <p>Ceiling shard hits Goblin E (-3 HP)</p>
                    </>
                  )}
                  {currentTurn === 2 && (
                    <>
                      <p>Turn 3: Explosion!</p>
                      <p>Manhattan distance &lt;= 2 from (0,2)</p>
                      <p>Shielded: 4 damage</p>
                      <p>Vulnerable: 20 damage</p>
                      <p>Normal: 10 damage</p>
                      <p>Poison tick (-1 HP)</p>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-neutral-900/50 border-neutral-800">
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
                <Box className="w-5 h-5 text-primary" />
                Scenario Preview
            </CardTitle>
            <Badge variant="outline" className="border-primary/50 text-primary">Interactive</Badge>
        </div>
        <CardDescription>Visualize the logic tests the models are subjected to.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="mass-effects" onValueChange={(value) => {
          setActiveTab(value);
          // Reset turn/step when switching tabs
          if (value === "mass-effects") setMassEffectsTurn(0);
          if (value === "los") setLosStep(0);
          if (value === "blast") setBlastTurn(0);
        }} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-neutral-950 border border-neutral-800">
            <TabsTrigger value="mass-effects">Mass Effects</TabsTrigger>
            <TabsTrigger value="los">Line of Sight</TabsTrigger>
            <TabsTrigger value="blast">Delayed Blast</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="mass-effects" className="space-y-4">
              {renderScenario(massEffectsScenario, massEffectsTurn, setMassEffectsTurn)}
            </TabsContent>

            <TabsContent value="los" className="space-y-4">
              {renderScenario(losScenario, losStep, setLosStep)}
            </TabsContent>

            <TabsContent value="blast" className="space-y-4">
              {renderScenario(blastScenario, blastTurn, setBlastTurn)}
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
