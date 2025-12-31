#!/usr/bin/env node
// Load .env file automatically (Node.js 20+)
if (typeof process.loadEnvFile === "function") {
  process.loadEnvFile();
}

import { runCommand } from "./commands/run";
import { listCommand } from "./commands/list";
import { explainCommand } from "./commands/explain";
import { replayCommand } from "./commands/replay";
import { printHelp } from "./ui";

const [, , command, ...args] = process.argv;

switch (command) {
  case "run":
    await runCommand(args);
    break;
  case "list":
    await listCommand(args);
    break;
  case "explain":
    await explainCommand(args);
    break;
  case "replay":
    await replayCommand(args);
    break;
  case "-h":
  case "--help":
  case undefined:
    printHelp();
    break;
  default:
    console.error(`Unknown command: ${command}`);
    printHelp();
    process.exit(1);
}
