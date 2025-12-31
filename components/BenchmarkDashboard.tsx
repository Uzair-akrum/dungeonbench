import React, { useState, useMemo } from 'react';
import { Trophy, Scroll, Sword, Dna, Flame, Eye, Zap, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/components";
import { benchmarkData, ModelData, ModelCategoryData, TEST_CATEGORIES, TestCategoryId } from "../data/benchmark";
import FailureViewer from "./FailureViewer";

type MetricId = "accuracy";

// Pure CSS Vertical Bar Chart Component
const CSSBarChart = ({
  data,
  dataKey,
  maxValue,
  formatter = (v: number) => v.toString(),
  colorFn = (_i: number) => "#fbbf24",
  onBarClick
}: {
  data: ModelData[];
  dataKey: keyof ModelData;
  maxValue: number;
  formatter?: (v: number) => string;
  colorFn?: (index: number) => string;
  onBarClick?: (item: ModelData) => void;
}) => {
  const chartHeight = 300; // Fixed pixel height for bars
  const safeMaxValue = maxValue > 0 ? maxValue : 1;

  return (
    <div className="pt-8 pb-4">
      {/* Chart Container */}
      <div className="flex items-end justify-center gap-4" style={{ height: chartHeight }}>
        {data.map((item, index) => {
          const value = item[dataKey] as number;
          const barHeight = Math.max((value / safeMaxValue) * chartHeight, 8);
          const color = colorFn(index);

          return (
            <div key={item.model} className="flex flex-col items-center group" style={{ width: 80 }}>
              {/* Rank Badge for top 3 */}
              {index < 3 && (
                <div
                  className="mb-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                  style={{
                    backgroundColor: index === 0 ? '#fbbf24' : index === 1 ? '#9ca3af' : '#cd7f32',
                    color: '#000'
                  }}
                >
                  {index + 1}
                </div>
              )}
              {index >= 3 && <div className="mb-2 h-7" />}

              {/* Value Label */}
              <div
                className="text-sm font-mono font-bold mb-2"
                style={{ color }}
              >
                {formatter(value)}
              </div>

              {/* Bar */}
              <div
                className="w-14 rounded-t-lg transition-all duration-700 ease-out hover:scale-105 cursor-pointer"
                style={{
                  height: barHeight,
                  background: `linear-gradient(to top, ${color}cc, ${color})`,
                  boxShadow: `0 0 30px ${color}50, inset 0 1px 0 rgba(255,255,255,0.2)`
                }}
                title={`${item.model}: ${formatter(value)}`}
                onClick={() => onBarClick?.(item)}
              />
            </div>
          );
        })}
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-center gap-4 mt-4 border-t border-neutral-700/50 pt-6 pb-10">
        {data.map((item) => (
          <div key={item.model} className="text-center" style={{ width: 80 }}>
            <div
              className="overflow-visible"
              title={item.model}
            >
              <span
                className="inline-block origin-top-left rotate-[35deg] whitespace-nowrap leading-none text-[11px] tracking-wide text-neutral-200 hover:text-white transition-colors cursor-default font-normal"
              >
                {item.model.split('/').pop()?.split(':')[0] || item.model}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function BenchmarkDashboard() {
  const { rankings, metadata } = benchmarkData;
  const [activeMetric, setActiveMetric] = useState<MetricId>("accuracy");
  const [testMode, setTestMode] = useState<TestCategoryId>("delayed-blast");
  const [selectedModel, setSelectedModel] = useState<ModelCategoryData | null>(null);

  const derivedByMode = useMemo(() => {
    const result = {} as Record<TestCategoryId, {
      filteredRankings: ModelCategoryData[];
      sortedByAccuracy: ModelCategoryData[];
      totalScenarios: number;
      avgSuccessRate: number;
    }>;

    const modes = Object.keys(TEST_CATEGORIES) as TestCategoryId[];
    for (const mode of modes) {
      let totalScenarios = 0;
      let successTotal = 0;

      const filteredRankings = rankings.map((model) => {
        const categoryData = model.categoryScores[mode];
        const totalTests = categoryData.testCount;
        const successRate = categoryData.passRate;
        const incorrect = Math.max(
          totalTests - categoryData.fullPasses - categoryData.zeroPasses,
          0
        );

        totalScenarios += totalTests;
        successTotal += successRate;

        return {
          ...model,
          successRate,
          totalTests,
          correct: categoryData.fullPasses,
          errors: categoryData.zeroPasses,
          incorrect,
        };
      });

      const avgSuccessRate = filteredRankings.length > 0 ? successTotal / filteredRankings.length : 0;
      const sortedByAccuracy = [...filteredRankings].sort((a, b) => b.successRate - a.successRate);

      result[mode] = {
        filteredRankings,
        sortedByAccuracy,
        totalScenarios,
        avgSuccessRate,
      };
    }

    return result;
  }, [rankings]);

  const { sortedByAccuracy, totalScenarios, avgSuccessRate } = derivedByMode[testMode];


  return (
    <div className="space-y-8">
      
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-neutral-900/50 border-neutral-800">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 rounded-full">
              <Scroll className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-400">Total Scenarios Run</p>
              <p className="text-2xl font-serif font-bold text-white">{totalScenarios.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900/50 border-neutral-800">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-full">
              <Dna className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-400">Models Benchmarked</p>
              <p className="text-2xl font-serif font-bold text-white">{metadata.totalModels}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-neutral-900/50 border-neutral-800">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-full">
              <Sword className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm text-neutral-400">Avg Success Rate</p>
              <p className="text-2xl font-serif font-bold text-white">
                {avgSuccessRate.toFixed(1)}%
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Test Mode Filter Tabs */}
      <Tabs value={testMode} className="w-full" onValueChange={(v) => setTestMode(v as TestCategoryId)}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Filter by Test</h3>
            <TabsList className="bg-neutral-900 border border-neutral-800">
              <TabsTrigger value="mass-effects" className="gap-2 data-[state=active]:bg-rose-600 data-[state=active]:text-white">
                <Flame className="w-4 h-4" /> Test 1
              </TabsTrigger>
              <TabsTrigger value="los-ammo" className="gap-2 data-[state=active]:bg-cyan-600 data-[state=active]:text-white">
                <Eye className="w-4 h-4" /> Test 2
              </TabsTrigger>
              <TabsTrigger value="delayed-blast" className="gap-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                <Zap className="w-4 h-4" /> Test 3
              </TabsTrigger>
              <TabsTrigger value="overall" className="gap-2 data-[state=active]:bg-neutral-600 data-[state=active]:text-white">
                <Target className="w-4 h-4" /> Overall
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="text-sm text-neutral-400">
            Showing: <span className="text-white font-medium">{TEST_CATEGORIES[testMode].name}</span>
          </div>
        </div>
      </Tabs>

      <Tabs value={activeMetric} className="w-full" onValueChange={(value) => setActiveMetric(value as MetricId)}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <TabsList className="bg-neutral-900 border border-neutral-800">
            <TabsTrigger value="accuracy" className="gap-2 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                <Trophy className="w-4 h-4" /> Accuracy (Wisdom)
            </TabsTrigger>
            </TabsList>

            <div className="text-sm text-neutral-400 font-mono">
                <span className="text-primary mr-2">●</span>
                Higher is better
            </div>
        </div>

        {/* Accuracy Chart */}
        <TabsContent value="accuracy" className="mt-0">
          {activeMetric === 'accuracy' && (
            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardHeader>
                  <CardTitle>Dungeon Master Proficiency Check</CardTitle>
                  <CardDescription>Percentage of successfully managed game states and rule applications.</CardDescription>
              </CardHeader>
              <CardContent>
                <CSSBarChart
                  data={sortedByAccuracy}
                  dataKey="successRate"
                  maxValue={100}
                  formatter={(v) => `${v.toFixed(1)}%`}
                  colorFn={(i) => {
                    const colors = ['#f59e0b', '#94a3b8', '#d97706', '#6366f1', '#8b5cf6', '#a855f7', '#c084fc'];
                    return colors[i] || '#6b7280';
                  }}
                  onBarClick={(item) => setSelectedModel(item as ModelCategoryData)}
                />
              </CardContent>
            </Card>
          )}
        </TabsContent>


      </Tabs>

      {/* Failure Viewer Modal */}
      {selectedModel && (
        <FailureViewer
          model={selectedModel}
          onClose={() => setSelectedModel(null)}
        />
      )}
    </div>
  );
}
