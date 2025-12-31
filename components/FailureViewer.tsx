import React, { useMemo, useState } from 'react';
import { X, AlertCircle, Flame, Eye, Zap, Ban, XCircle, ChevronDown, ChevronUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Badge, Button, Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/components";
import { ModelCategoryData, ModelFailure, TEST_CATEGORIES, TestCategoryId } from "../data/benchmark";

interface FailureViewerProps {
  model: ModelCategoryData | null;
  onClose: () => void;
}

const categoryIcons = {
  'mass-effects': Flame,
  'los-ammo': Eye,
  'delayed-blast': Zap,
  'overall': AlertCircle,
};

// Extract numbers for visual comparison
const extractNumbers = (failure: ModelFailure): { expected?: number; actual?: number } => {
  const exp = failure.failedExpectations[0];
  const match = exp.message?.match(/called (\d+) time\(s\), got (\d+)/);
  if (match) {
    return { expected: parseInt(match[1]), actual: parseInt(match[2]) };
  }
  return {};
};

// Convert technical failures into human-readable explanations
const explainFailure = (failure: ModelFailure): { title: string; description: string } => {
  const exp = failure.failedExpectations[0];
  const stepDesc = failure.stepDescription.toLowerCase();
  const testName = failure.testName.toLowerCase();
  
  // Line of sight failures - shooting through walls
  if (stepDesc.includes('line of sight') || stepDesc.includes('ammo') || stepDesc.includes('shoot')) {
    if (exp.type === 'mustNotCallTool' && exp.toolName === 'resolveCombatAction') {
      return {
        title: "Shot Through a Wall",
        description: "The model knew the wall existed but still processed the attack anyway."
      };
    }
    if (exp.message?.includes('updateCharacterStats') && exp.message?.includes('not to be called')) {
      return {
        title: "Updated Wrong Target",
        description: "Updated HP for a goblin that couldn't be hit (behind a wall or out of range)."
      };
    }
  }
  
  // Mass effects failures - double counting
  if (testName.includes('mass effects')) {
    const nums = extractNumbers(failure);
    if (nums.expected && nums.actual && nums.actual > nums.expected) {
      return {
        title: `Counted ${nums.actual} Instead of ${nums.expected}`,
        description: `Updated HP ${nums.actual} times instead of ${nums.expected}. Counted some goblins twice in a fight with ${nums.expected} clearly-named entities.`
      };
    }
    if (exp.message?.includes('not to be called')) {
      return {
        title: "Updated Wrong Entities",
        description: "Updated HP for entities that shouldn't have been affected by this effect."
      };
    }
  }
  
  // Delayed blast failures - temporal tracking
  if (testName.includes('delayed blast') || testName.includes('temporal')) {
    const nums = extractNumbers(failure);
    if (nums.expected && nums.actual) {
      return {
        title: `Lost Track of Turns`,
        description: `Updated HP ${nums.actual} times instead of ${nums.expected}. Lost track of which turn it was or which entities were affected.`
      };
    }
    if (exp.message?.includes('not to be called')) {
      return {
        title: "Updated at Wrong Time",
        description: "Updated HP when it shouldn't have (wrong turn or wrong entities)."
      };
    }
  }
  
  return {
    title: "Rule Violation",
    description: "Failed to follow the game rules correctly."
  };
};

const InteractiveFailureCard = ({ failure, index }: { failure: ModelFailure; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const explanation = explainFailure(failure);
  const Icon = categoryIcons[failure.category] || AlertCircle;
  const numbers = extractNumbers(failure);
  
  // Simplify step description
  const simpleStep = failure.stepDescription
    .replace(/Apply (.*) to all creatures/, "$1")
    .replace(/Out of ammo and no line of sight blocks a shot/, "Tried to shoot through a wall")
    .replace(/Line of sight blocks one shot/, "Shooting with walls")
    .replace(/Second valid shot/, "Second shot")
    .replace(/Blast resolves on turn (\d+)/, "Turn $1: Explosion")
    .replace(/Light fuse and reposition/, "Turn 1: Set up bomb");
  
  return (
    <div 
      className="group relative opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <Card 
        className="bg-neutral-900/50 border-2 border-neutral-800 hover:border-red-500/70 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 cursor-pointer overflow-hidden"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className="p-0">
          {/* Main Content */}
          <div className="p-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500/30 to-red-600/20 flex items-center justify-center border-2 border-red-500/50 group-hover:scale-110 transition-transform duration-300">
                  <XCircle className="w-7 h-7 text-red-400" />
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-white text-base">{simpleStep}</h4>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <h5 className="text-lg font-bold text-red-300">{explanation.title}</h5>
                  <p className="text-sm text-red-200/90 leading-relaxed">{explanation.description}</p>
                </div>

                {/* Visual Comparison */}
                {numbers.expected && numbers.actual && (
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex-1 p-3 bg-green-950/30 border border-green-500/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-xs text-green-300 font-semibold">Should Be</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">{numbers.expected}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-neutral-500" />
                    <div className="flex-1 p-3 bg-red-950/30 border border-red-500/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <XCircle className="w-4 h-4 text-red-400" />
                        <span className="text-xs text-red-300 font-semibold">Actually Did</span>
                      </div>
                      <div className="text-2xl font-bold text-red-400">{numbers.actual}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Expanded Details */}
          {isExpanded && (
            <div className="border-t border-neutral-800 bg-neutral-950/50 p-5 animate-[slideDown_0.2s_ease-out]">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="font-semibold">Test:</span>
                  <span>{failure.testName}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="font-semibold">Step:</span>
                  <span>{failure.stepDescription}</span>
                </div>
                {failure.failedExpectations.length > 1 && (
                  <div className="pt-2 border-t border-neutral-800">
                    <p className="text-xs text-neutral-400 mb-2">
                      {failure.failedExpectations.length} total issues in this step:
                    </p>
                    <ul className="space-y-1">
                      {failure.failedExpectations.slice(1).map((exp, idx) => (
                        <li key={idx} className="text-xs text-red-300/80 pl-4">
                          • {exp.message || 'Additional rule violation'}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default function FailureViewer({ model, onClose }: FailureViewerProps) {
  const failuresByCategory = useMemo(() => {
    if (!model) return {} as Record<TestCategoryId, ModelFailure[]>;
    
    const failures = model.failures ?? [];
    const grouped: Record<TestCategoryId, ModelFailure[]> = {
      'mass-effects': [],
      'los-ammo': [],
      'delayed-blast': [],
      'overall': [],
    };

    for (const failure of failures) {
      if (grouped[failure.category]) {
        grouped[failure.category].push(failure);
      }
    }

    return grouped;
  }, [model]);

  const failures = model?.failures ?? [];
  const totalFailures = failures.length;
  const hasFailures = totalFailures > 0;

  if (!model) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <Card 
        className="w-full max-w-4xl max-h-[90vh] bg-neutral-900 border-neutral-800 flex flex-col shadow-2xl animate-[zoomIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="flex-shrink-0 border-b border-neutral-800 bg-gradient-to-r from-neutral-900 to-neutral-800/50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                {model.model}
              </CardTitle>
              <CardDescription className="mt-2 text-base">
                {hasFailures ? (
                  <div className="flex items-center gap-2">
                    <span className="text-red-300 font-semibold">
                      {totalFailures} mistake{totalFailures !== 1 ? 's' : ''} found
                    </span>
                    <Badge variant="outline" className="border-red-500/50 text-red-400">
                      {((1 - model.successRate / 100) * 100).toFixed(1)}% error rate
                    </Badge>
                  </div>
                ) : (
                  <span className="text-green-400">Perfect score! No mistakes found.</span>
                )}
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-9 w-9 hover:bg-neutral-800 hover:scale-110 transition-transform"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-y-auto pt-6">
          {!hasFailures ? (
            <div className="text-center py-16 animate-[fadeInZoom_0.4s_ease-out]">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 mb-6 animate-pulse">
                <AlertCircle className="w-12 h-12 text-green-500" />
              </div>
              <p className="text-2xl font-semibold text-white mb-2">Perfect Performance!</p>
              <p className="text-sm text-neutral-400">This model passed all tests without any mistakes.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <Tabs defaultValue={Object.keys(failuresByCategory).find(k => failuresByCategory[k as TestCategoryId].length > 0) || "mass-effects"} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-neutral-950 border-2 border-neutral-800 h-14">
                  <TabsTrigger 
                    value="mass-effects" 
                    className="gap-2 text-sm data-[state=active]:bg-red-500/20 data-[state=active]:border-red-500/50 border-2 border-transparent transition-all"
                  >
                    <Flame className="w-5 h-5" />
                    <span>Mass Effects</span>
                    {failuresByCategory['mass-effects'].length > 0 && (
                      <Badge variant="outline" className="ml-1 border-red-500/50 text-red-400 text-xs px-2 py-0 bg-red-500/10">
                        {failuresByCategory['mass-effects'].length}
                      </Badge>
                    )}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="los-ammo" 
                    className="gap-2 text-sm data-[state=active]:bg-red-500/20 data-[state=active]:border-red-500/50 border-2 border-transparent transition-all"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Line of Sight</span>
                    {failuresByCategory['los-ammo'].length > 0 && (
                      <Badge variant="outline" className="ml-1 border-red-500/50 text-red-400 text-xs px-2 py-0 bg-red-500/10">
                        {failuresByCategory['los-ammo'].length}
                      </Badge>
                    )}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="delayed-blast" 
                    className="gap-2 text-sm data-[state=active]:bg-red-500/20 data-[state=active]:border-red-500/50 border-2 border-transparent transition-all"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Delayed Blast</span>
                    {failuresByCategory['delayed-blast'].length > 0 && (
                      <Badge variant="outline" className="ml-1 border-red-500/50 text-red-400 text-xs px-2 py-0 bg-red-500/10">
                        {failuresByCategory['delayed-blast'].length}
                      </Badge>
                    )}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="mass-effects" className="mt-6 space-y-4">
                  {failuresByCategory['mass-effects'].length === 0 ? (
                    <div className="text-center py-16 text-neutral-400 animate-[fadeIn_0.3s_ease-out]">
                      <Ban className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-lg">No mistakes in this test</p>
                    </div>
                  ) : (
                    failuresByCategory['mass-effects'].map((failure, idx) => (
                      <InteractiveFailureCard key={idx} failure={failure} index={idx} />
                    ))
                  )}
                </TabsContent>

                <TabsContent value="los-ammo" className="mt-6 space-y-4">
                  {failuresByCategory['los-ammo'].length === 0 ? (
                    <div className="text-center py-16 text-neutral-400 animate-[fadeIn_0.3s_ease-out]">
                      <Ban className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-lg">No mistakes in this test</p>
                    </div>
                  ) : (
                    failuresByCategory['los-ammo'].map((failure, idx) => (
                      <InteractiveFailureCard key={idx} failure={failure} index={idx} />
                    ))
                  )}
                </TabsContent>

                <TabsContent value="delayed-blast" className="mt-6 space-y-4">
                  {failuresByCategory['delayed-blast'].length === 0 ? (
                    <div className="text-center py-16 text-neutral-400 animate-[fadeIn_0.3s_ease-out]">
                      <Ban className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-lg">No mistakes in this test</p>
                    </div>
                  ) : (
                    failuresByCategory['delayed-blast'].map((failure, idx) => (
                      <InteractiveFailureCard key={idx} failure={failure} index={idx} />
                    ))
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
