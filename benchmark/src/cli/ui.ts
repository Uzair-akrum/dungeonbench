export function printHelp(): void {
  console.log(`dungeonbench-bench <command>

Commands:
  run       Run the roleplay suite against target models
  list      List suites, tests, and tools
  explain   Show details for a test
  replay    Regenerate markdown from a run

Flags:
  --help    Show help
  --provider <name>
  --model <id>
  --models <csv>
  --providers <csv>
  --suite <id> (default: roleplay)
  --test <id|csv>
  --out <dir>
  --temperature <n>
  --max-output-tokens <n>
  --timeout-ms <n>
  --max-turns <n>
  --retries <n>
  --seed <n>
  --run-id <id>
  --save-transcripts
  --format md,json
`);
}
