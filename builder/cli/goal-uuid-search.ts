#!/usr/bin/env node
import { pathToFileURL } from "node:url";

import { loadGoalConfig } from "../goal-harness/config.ts";
import { goalStateDir } from "../goal-harness/paths.ts";
import { asGoalHarnessError, GoalHarnessError } from "../goal-harness/errors.ts";
import { finalizeHybridSearchReceipt, recordHybridCandidateDirectRead, runHybridSearchWithReceipt } from "../goal-harness/uuid-search-receipts.ts";

import type { CliIo } from "./goal-io.ts";
type BaseOptions = {configPath: string; taskId: string};
type SearchOptions = BaseOptions & (
  {command: "query"; query: string; flowType: string | null; limit: number} |
  {command: "direct-read"; receiptId: string; uuid: string} |
  {command: "finalize"; receiptId: string; decisionsPath: string}
);
const HELP = `TianGong Goal authenticated UUID search receipts

Usage:
  node builder/cli/goal-uuid-search.ts query --config <goal.yaml> --task <task-id> --query <text> [--flow-type product|waste|elementary] [--limit 1..100] [--format human|json]
  node builder/cli/goal-uuid-search.ts direct-read --config <goal.yaml> --task <task-id> --receipt <id> --uuid <candidate-uuid> [--format human|json]
  node builder/cli/goal-uuid-search.ts finalize --config <goal.yaml> --task <task-id> --receipt <id> --decisions <absolute-json-file> [--format human|json]

Run from the visible author's bound worktree. Query receipts and raw result hashes are written outside the worktree under the Goal state directory. Credentials are loaded by the caller's Node --env-file-if-exists option and are never printed or stored in receipts.
`;

export async function main(argv: string[] = process.argv.slice(2), io: CliIo = process) {
  if (argv.length === 0 || argv.includes("--help") || argv.includes("-h")) {
    io.stdout.write(HELP);
    return 0;
  }
  const format = valueAfter(argv, "--format") ?? "json";
  try {
    const options = parseArgs(argv);
    const config = loadGoalConfig({ configPath: options.configPath });
    const stateDir = goalStateDir(config);
    let safe: {receipt: unknown; candidates?: string[]};
    let receiptId: unknown;
    if (options.command === "query") {
      const result = runHybridSearchWithReceipt({stateDir, taskId: options.taskId, query: options.query, flowType: options.flowType, limit: options.limit, toolConfig: config.tools});
      safe = {receipt: result.receipt, candidates: result.receipt.candidate_uuids};
      receiptId = result.receipt.receipt_id;
    } else {
      const receipt = options.command === "direct-read"
        ? recordHybridCandidateDirectRead({stateDir, taskId: options.taskId, receiptId: options.receiptId, uuid: options.uuid, tiangongCliRoot: config.tools.tiangong_cli_root})
        : finalizeHybridSearchReceipt({stateDir, taskId: options.taskId, receiptId: options.receiptId, decisionsPath: options.decisionsPath});
      safe = {receipt};
      receiptId = receipt.receipt_id;
    }
    if (format === "json") io.stdout.write(`${JSON.stringify({ ok: true, command: options.command, result: safe }, null, 2)}\n`);
    else io.stdout.write(`PASS ${options.command}: ${receiptId}\n`);
    return 0;
  } catch (rawError) {
    const error = asGoalHarnessError(rawError);
    const envelope = { ok: false, error: { code: error.code, message: error.message, details: error.details }, next_action: "Fix the reported UUID-search condition and retry from the same bound worktree." };
    if (format === "json") io.stderr.write(`${JSON.stringify(envelope, null, 2)}\n`);
    else io.stderr.write(`[${error.code}] ${error.message}\n`);
    return 2;
  }
}

function parseArgs(argv: string[]): SearchOptions {
  const command = argv[0];
  if (command !== "query" && command !== "direct-read" && command !== "finalize") throw new GoalHarnessError("GOAL_UUID_SEARCH_COMMAND_UNKNOWN", `Unknown UUID-search command: ${command}`);
  const options: {command: string; configPath: string | null; taskId: string | null; query: string | null; flowType: string | null; limit: number; receiptId: string | null; decisionsPath: string | null; uuid: string | null} = { command, configPath: null, taskId: null, query: null, flowType: null, limit: 20, receiptId: null, decisionsPath: null, uuid: null };
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
  const base = {configPath: options.configPath, taskId: options.taskId};
  if (command === "query" && options.query) return {...base, command, query: options.query, flowType: options.flowType, limit: options.limit};
  if (command === "direct-read" && options.receiptId && options.uuid) return {...base, command, receiptId: options.receiptId, uuid: options.uuid};
  if (command === "finalize" && options.receiptId && options.decisionsPath) return {...base, command, receiptId: options.receiptId, decisionsPath: options.decisionsPath};
  throw new GoalHarnessError("GOAL_OPTION_VALUE_REQUIRED", "Required command fields are missing.");
}

function requiredValue(argv: string[], index: number, option: string) {
  const value = argv[index];
  if (!value || value.startsWith("--")) throw new GoalHarnessError("GOAL_OPTION_VALUE_REQUIRED", `${option} requires a value.`);
  return value;
}

function valueAfter(argv: string[], option: string) {
  const index = argv.indexOf(option);
  return index === -1 ? null : argv[index + 1];
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) process.exitCode = await main();
