#!/usr/bin/env node
import { pathToFileURL } from "node:url";

import { loadGoalConfig } from "../goal-harness/config.mjs";
import { goalStateDir } from "../goal-harness/commands.mjs";
import { asGoalHarnessError, GoalHarnessError } from "../goal-harness/errors.mjs";
import { finalizeHybridSearchReceipt, recordHybridCandidateDirectRead, runHybridSearchWithReceipt } from "../goal-harness/uuid-search-receipts.mjs";

const HELP = `TianGong Goal authenticated UUID search receipts

Usage:
  node builder/cli/goal-uuid-search.mjs query --config <goal.yaml> --task <task-id> --query <text> [--flow-type product|waste|elementary] [--limit 1..100] [--format human|json]
  node builder/cli/goal-uuid-search.mjs direct-read --config <goal.yaml> --task <task-id> --receipt <id> --uuid <candidate-uuid> [--format human|json]
  node builder/cli/goal-uuid-search.mjs finalize --config <goal.yaml> --task <task-id> --receipt <id> --decisions <absolute-json-file> [--format human|json]

Run from the visible author's bound worktree. Query receipts and raw result hashes are written outside the worktree under the Goal state directory. Credentials are loaded by the caller's Node --env-file-if-exists option and are never printed or stored in receipts.
`;

export async function main(argv = process.argv.slice(2), io = process) {
  if (argv.length === 0 || argv.includes("--help") || argv.includes("-h")) {
    io.stdout.write(HELP);
    return 0;
  }
  const format = valueAfter(argv, "--format") ?? "json";
  try {
    const options = parseArgs(argv);
    const config = loadGoalConfig({ configPath: options.configPath });
    const stateDir = goalStateDir(config);
    const result = options.command === "query"
      ? runHybridSearchWithReceipt({
          stateDir,
          taskId: options.taskId,
          query: options.query,
          flowType: options.flowType,
          limit: options.limit,
          toolConfig: config.tools,
        })
      : options.command === "direct-read"
        ? recordHybridCandidateDirectRead({
            stateDir,
            taskId: options.taskId,
            receiptId: options.receiptId,
            uuid: options.uuid,
            tiangongCliRoot: config.tools?.tiangong_cli_root,
          })
        : finalizeHybridSearchReceipt({
          stateDir,
          taskId: options.taskId,
          receiptId: options.receiptId,
          decisionsPath: options.decisionsPath,
        });
    const safe = options.command === "query"
      ? { receipt: result.receipt, candidates: result.receipt.candidate_uuids }
      : { receipt: result };
    if (format === "json") io.stdout.write(`${JSON.stringify({ ok: true, command: options.command, result: safe }, null, 2)}\n`);
    else io.stdout.write(`PASS ${options.command}: ${options.command === "query" ? result.receipt.receipt_id : result.receipt_id}\n`);
    return 0;
  } catch (rawError) {
    const error = asGoalHarnessError(rawError);
    const envelope = { ok: false, error: { code: error.code, message: error.message, details: error.details }, next_action: "Fix the reported UUID-search condition and retry from the same bound worktree." };
    if (format === "json") io.stderr.write(`${JSON.stringify(envelope, null, 2)}\n`);
    else io.stderr.write(`[${error.code}] ${error.message}\n`);
    return 2;
  }
}

function parseArgs(argv) {
  const command = argv[0];
  if (!["query", "direct-read", "finalize"].includes(command)) throw new GoalHarnessError("GOAL_UUID_SEARCH_COMMAND_UNKNOWN", `Unknown UUID-search command: ${command}`);
  const options = { command, configPath: null, taskId: null, query: null, flowType: null, limit: 20, receiptId: null, decisionsPath: null, uuid: null };
  for (let index = 1; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--config") options.configPath = requiredValue(argv, ++index, token);
    else if (token === "--task") options.taskId = requiredValue(argv, ++index, token);
    else if (token === "--query") options.query = requiredValue(argv, ++index, token);
    else if (token === "--flow-type") options.flowType = requiredValue(argv, ++index, token);
    else if (token === "--limit") options.limit = Number(requiredValue(argv, ++index, token));
    else if (token === "--receipt") options.receiptId = requiredValue(argv, ++index, token);
    else if (token === "--uuid") options.uuid = requiredValue(argv, ++index, token);
    else if (token === "--decisions") options.decisionsPath = requiredValue(argv, ++index, token);
    else if (token === "--format") index += 1;
    else throw new GoalHarnessError("GOAL_OPTION_UNKNOWN", `Unknown option: ${token}`);
  }
  if (!options.configPath || !options.taskId) throw new GoalHarnessError("GOAL_OPTION_VALUE_REQUIRED", "--config and --task are required.");
  if (command === "query" && !options.query) throw new GoalHarnessError("GOAL_OPTION_VALUE_REQUIRED", "query requires --query.");
  if (command === "direct-read" && (!options.receiptId || !options.uuid)) throw new GoalHarnessError("GOAL_OPTION_VALUE_REQUIRED", "direct-read requires --receipt and --uuid.");
  if (command === "finalize" && (!options.receiptId || !options.decisionsPath)) throw new GoalHarnessError("GOAL_OPTION_VALUE_REQUIRED", "finalize requires --receipt and --decisions.");
  return options;
}

function requiredValue(argv, index, option) {
  const value = argv[index];
  if (!value || value.startsWith("--")) throw new GoalHarnessError("GOAL_OPTION_VALUE_REQUIRED", `${option} requires a value.`);
  return value;
}

function valueAfter(argv, option) {
  const index = argv.indexOf(option);
  return index === -1 ? null : argv[index + 1];
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) process.exitCode = await main();
