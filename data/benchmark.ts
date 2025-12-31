export interface ModelData {
  model: string;
  correct: number;
  incorrect: number;
  errors: number;
  totalTests: number;
  successRate: number;
  errorRate: number;
  averageDuration: number; // in ms
  tokensPerAction: number;
  totalTokens: number;
}

// Test category definitions for filtering
export const TEST_CATEGORIES = {
  'mass-effects': {
    id: 'mass-effects',
    name: 'Test 1: Mass Effects',
    pattern: 'roleplay.dm.state.mass-effects',
  },
  'los-ammo': {
    id: 'los-ammo',
    name: 'Test 2: Line of Sight',
    pattern: 'roleplay.dm.spatial.los-ammo',
  },
  'delayed-blast': {
    id: 'delayed-blast',
    name: 'Test 3: Delayed Blast',
    pattern: 'roleplay.dm.temporal.delayed-blast',
  },
  'overall': {
    id: 'overall',
    name: 'Overall',
    pattern: null,
  }
} as const;

export type TestCategoryId = keyof typeof TEST_CATEGORIES;

export interface CategoryScore {
  passRate: number;
  testCount: number;
  fullPasses: number;
  zeroPasses: number;
}

export interface ModelCategoryData extends ModelData {
  categoryScores: Record<TestCategoryId, CategoryScore>;
}

type RunResult = {
  metadata: {
    runId: string;
    timestamp: string;
    suiteId: string;
    suiteVersion: string;
  };
  targets: {
    target: {
      provider?: string;
      model: string;
      label?: string;
    };
    suite: {
      passRate: number;
      tests: {
        testId: string;
        passRate: number;
        steps: {
          latencyMs: number;
        }[];
      }[];
    };
    metrics: {
      cost: {
        totalOutputTokens: number;
        totalInputTokens: number;
        successfulActions: number;
        tokensPerAction: number;
      };
    };
  }[];
};

type ModelEntry = ModelCategoryData & {
  runTimestamp: string;
  totalSteps: number;
};

// Explicit imports for each run.json file
import run1 from "../runs/google-gemini-3-flash-preview_2025-12-29_18-22-52/run.json";
import run2 from "../runs/minimax-minimax-m2-1_2025-12-28_19-42-53/run.json";
import run3 from "../runs/mistralai-devstral-2512-free_2025-12-29_18-44-07/run.json";
import run4 from "../runs/openai-gpt-4o-2024-11-20_2025-12-29_17-02-53/run.json";
import run5 from "../runs/openai-gpt-5-2_2025-12-28_20-14-23/run.json";
import run6 from "../runs/xiaomi-mimo-v2-flash-free_2025-12-28_21-51-18/run.json";
import run7 from "../runs/z-ai-glm-4-7_2025-12-29_17-48-10/run.json";
import run8 from "../runs/moonshotai-kimi-k2-thinking_2025-12-30_19-08-26/run.json";
import run9 from "../runs/nvidia-nemotron-3-nano-30b-a3b-free_2025-12-30_18-54-45/run.json";

const runs: RunResult[] = [run1, run2, run3, run4, run5, run6, run7, run8, run9] as RunResult[];

const scenarioMetadata = [
  {
    id: "mass-effects",
    name: "Mass Effects + Modifiers",
    description: "Applies trait-based damage to 8 entities on a grid. Tests filtering and arithmetic.",
    complexity: "High"
  },
  {
    id: "los-ammo",
    name: "Line of Sight + Ammo",
    description: "Validates archery mechanics, wall obstruction, and resource tracking.",
    complexity: "High"
  },
  {
    id: "delayed-blast",
    name: "Delayed Blast Radius",
    description: "Handles temporal explosions and poison ticks over 3 turns.",
    complexity: "High"
  }
];

const modelEntries: ModelEntry[] = runs.flatMap((run) =>
  run.targets.map((target) => {
    const tests = target.suite.tests ?? [];
    let totalLatency = 0;
    let stepCount = 0;
    let fullPasses = 0;
    let zeroPasses = 0;

    // Initialize category accumulators
    const categoryStats: Record<string, {
      totalPassRate: number;
      count: number;
      fullPasses: number;
      zeroPasses: number;
    }> = {
      'mass-effects': { totalPassRate: 0, count: 0, fullPasses: 0, zeroPasses: 0 },
      'los-ammo': { totalPassRate: 0, count: 0, fullPasses: 0, zeroPasses: 0 },
      'delayed-blast': { totalPassRate: 0, count: 0, fullPasses: 0, zeroPasses: 0 },
      'overall': { totalPassRate: 0, count: 0, fullPasses: 0, zeroPasses: 0 },
    };

    for (const test of tests) {
      if (test.passRate === 1) fullPasses += 1;
      if (test.passRate === 0) zeroPasses += 1;

      // Accumulate for overall
      categoryStats['overall'].totalPassRate += test.passRate;
      categoryStats['overall'].count += 1;
      if (test.passRate === 1) categoryStats['overall'].fullPasses += 1;
      if (test.passRate === 0) categoryStats['overall'].zeroPasses += 1;

      // Determine which category this test belongs to and accumulate
      for (const [catKey, catConfig] of Object.entries(TEST_CATEGORIES)) {
        if (catConfig.pattern && test.testId?.startsWith(catConfig.pattern)) {
          categoryStats[catKey].totalPassRate += test.passRate;
          categoryStats[catKey].count += 1;
          if (test.passRate === 1) categoryStats[catKey].fullPasses += 1;
          if (test.passRate === 0) categoryStats[catKey].zeroPasses += 1;
        }
      }

      for (const step of test.steps ?? []) {
        totalLatency += step.latencyMs ?? 0;
        stepCount += 1;
      }
    }

    // Build categoryScores
    const categoryScores = {} as Record<TestCategoryId, CategoryScore>;
    for (const catKey of Object.keys(TEST_CATEGORIES) as TestCategoryId[]) {
      const stats = categoryStats[catKey];
      categoryScores[catKey] = {
        passRate: stats.count > 0 ? Number(((stats.totalPassRate / stats.count) * 100).toFixed(1)) : 0,
        testCount: stats.count,
        fullPasses: stats.fullPasses,
        zeroPasses: stats.zeroPasses,
      };
    }

    const totalTests = tests.length;
    const totalTokens =
      (target.metrics.cost.totalInputTokens ?? 0) +
      (target.metrics.cost.totalOutputTokens ?? 0);
    const successRate = Number(((target.suite.passRate ?? 0) * 100).toFixed(1));
    const errorRate = totalTests > 0 ? Number(((zeroPasses / totalTests) * 100).toFixed(1)) : 0;
    const incorrect = Math.max(totalTests - fullPasses - zeroPasses, 0);

    return {
      model: target.target.label ?? target.target.model,
      correct: fullPasses,
      incorrect,
      errors: zeroPasses,
      totalTests,
      successRate,
      errorRate,
      averageDuration: stepCount > 0 ? totalLatency / stepCount : 0,
      tokensPerAction: target.metrics.cost.tokensPerAction ?? 0,
      totalTokens,
      categoryScores,
      runTimestamp: run.metadata.timestamp,
      totalSteps: stepCount
    };
  })
);

const uniqueByModel = new Map<string, ModelEntry>();
for (const entry of modelEntries) {
  const existing = uniqueByModel.get(entry.model);
  if (!existing || entry.runTimestamp > existing.runTimestamp) {
    uniqueByModel.set(entry.model, entry);
  }
}

const dedupedEntries = Array.from(uniqueByModel.values());
const totalTests = dedupedEntries.reduce((sum, entry) => sum + entry.totalTests, 0);
const totalSteps = dedupedEntries.reduce((sum, entry) => sum + entry.totalSteps, 0);
const latestTimestamp = dedupedEntries
  .map((entry) => entry.runTimestamp)
  .sort()
  .slice(-1)[0];

export const benchmarkData = {
  rankings: dedupedEntries.map(({ runTimestamp, totalSteps: _steps, ...entry }) => entry) as ModelCategoryData[],
  metadata: {
    testSuite: runs[0]?.metadata.suiteId ?? "roleplay",
    version: runs[0]?.metadata.suiteVersion ?? "0.1.0",
    totalModels: dedupedEntries.length,
    totalTests,
    totalSteps,
    timestamp: latestTimestamp ?? new Date().toISOString(),
    scenarios: scenarioMetadata,
    categories: TEST_CATEGORIES
  }
};
