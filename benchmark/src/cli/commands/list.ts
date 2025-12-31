import { Suites } from "../../suites";
import { toolSpecs } from "../../tools/registry";

export async function listCommand(args: string[]): Promise<void> {
  const suiteId = getArgValue(args, "--suite");

  console.log("Suites:");
  for (const suite of Object.values(Suites)) {
    console.log(`- ${suite.id} (${suite.version}) [${suite.tests.length} tests]`);
  }

  if (suiteId) {
    const suite = Suites[suiteId as keyof typeof Suites];
    if (!suite) {
      console.error(`Unknown suite: ${suiteId}`);
      return;
    }

    console.log(`\nTests in ${suite.id}:`);
    for (const test of suite.tests) {
      console.log(`- ${test.id}: ${test.name}`);
    }
  }

  console.log("\nTools:");
  for (const tool of toolSpecs) {
    console.log(`- ${tool.name}: ${tool.description}`);
  }
}

function getArgValue(args: string[], flag: string): string | undefined {
  const index = args.indexOf(flag);
  if (index === -1) return undefined;
  return args[index + 1];
}
