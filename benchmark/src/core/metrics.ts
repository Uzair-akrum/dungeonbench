import type { ProtocolViolation, SchemaViolation, TargetResult } from "../types";

export function computeTypeSafety(target: TargetResult): {
  rate: number;
  total: number;
  passed: number;
  violations: SchemaViolation[];
} {
  let total = 0;
  let passed = 0;
  const violations: SchemaViolation[] = [];

  for (const test of target.suite.tests) {
    for (const step of test.steps) {
      for (const exp of step.expectations) {
        if (exp.schemaChecks) {
          total += exp.schemaChecks.total;
          passed += exp.schemaChecks.passed;
        }
        if (exp.schemaViolations) {
          violations.push(...exp.schemaViolations);
        }
      }
    }
  }

  return {
    rate: total > 0 ? passed / total : 1,
    total,
    passed,
    violations
  };
}

export function computeParsingStability(target: TargetResult): {
  rate: number;
  total: number;
  clean: number;
  violations: ProtocolViolation[];
} {
  let total = 0;
  let clean = 0;
  const violations: ProtocolViolation[] = [];

  for (const test of target.suite.tests) {
    for (const step of test.steps) {
      if (step.protocolChecks) {
        total += step.protocolChecks.total;
        clean += step.protocolChecks.clean;
      }
      violations.push(...step.protocolViolations);
    }
  }

  return {
    rate: total > 0 ? clean / total : 1,
    total,
    clean,
    violations
  };
}

export function computeObedienceRate(target: TargetResult): {
  rate: number;
  total: number;
  followed: number;
} {
  let total = 0;
  let followed = 0;

  for (const test of target.suite.tests) {
    for (const step of test.steps) {
      for (const exp of step.expectations) {
        if (exp.expectation.type === "mustNotCallTool") {
          total += 1;
          if (exp.pass) followed += 1;
        }
      }
    }
  }

  return {
    rate: total > 0 ? followed / total : 1,
    total,
    followed
  };
}
