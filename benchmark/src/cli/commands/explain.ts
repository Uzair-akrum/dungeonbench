import { Suites } from "../../suites";

export async function explainCommand(args: string[]): Promise<void> {
  const testId = args[0];
  if (!testId) {
    console.error("Usage: toolcall-doctor explain <testId>");
    return;
  }

  for (const suite of Object.values(Suites)) {
    const test = suite.tests.find((candidate) => candidate.id === testId);
    if (test) {
      console.log(JSON.stringify(test, null, 2));
      return;
    }
  }

  console.error(`Test not found: ${testId}`);
}
