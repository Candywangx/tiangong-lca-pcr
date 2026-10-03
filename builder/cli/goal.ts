#!/usr/bin/env node
import { pathToFileURL } from "node:url";

import { runGoalCommand } from "../goal-harness/commands.ts";
import { asGoalHarnessError, GoalHarnessError } from "../goal-harness/errors.ts";

import { field, record, records, array } from "../goal-harness/domain.ts";
import type { GoalCommandOptions } from "../goal-harness/commands.ts";
import type { CliIo } from "./goal-io.ts";
interface Options extends GoalCommandOptions {command?: string; help: boolean; format: string; dryRun: boolean}
interface Envelope {result: unknown; command?: string | undefined; dry_run?: boolean; next_action?: unknown}
const HELP = `TianGong PCR Goal Harness

Usage:
  node builder/cli/goal.ts doctor --config <goal.yaml> [--format human|json]
  node builder/cli/goal.ts plan --config <goal.yaml> [--dry-run] [--format human|json]
  node builder/cli/goal.ts start --config <goal.yaml> [--slots 1..6] [--dry-run]
  node builder/cli/goal.ts status --config <goal.yaml> [--format human|json]
  node builder/cli/goal.ts resume --config <goal.yaml> [--dry-run]
  node builder/cli/goal.ts integrate --config <goal.yaml> [--snapshot <id>] [--allow-partial] [--dry-run]
  node builder/cli/goal.ts land --config <goal.yaml> [--snapshot <id>] [--dry-run]
  node builder/cli/goal.ts viewer-publish --config <goal.yaml> [--snapshot <id>]
  node builder/cli/goal.ts viewer-recover --config <goal.yaml> [--force-stale-lock]
  node builder/cli/goal.ts stop --config <goal.yaml>
  node builder/cli/goal.ts uuid-audit --config <goal.yaml> [--apply] [--format human|json]

Package aliases: goal:doctor, goal:plan, goal:start, goal:status, goal:resume,
goal:integrate, goal:land, goal:viewer-publish, goal:viewer-recover, goal:stop,
goal:uuid-audit.

Commands are idempotent. JSON failures keep stdout empty and emit a stable error code on stderr.
`;

export async function main(argv: string[] = process.argv.slice(2), io: CliIo = process) {
  const options = parseArgs(argv);
  if (options.help) {
    io.stdout.write(HELP);
    return 0;
  }
  try {
    const result = await runGoalCommand(options.command, options);
    const envelope = { ok: field(result, "ok") ?? true, command: options.command, dry_run: options.dryRun, result, next_action: field(result, "next_action") ?? null };
    if (options.format === "json") {
      io.stdout.write(`${JSON.stringify(envelope, null, 2)}\n`);
    } else {
      io.stdout.write(renderHuman(envelope));
    }
    return field(result, "ok") === false ? 1 : 0;
  } catch (rawError) {
    const error = asGoalHarnessError(rawError);
    const envelope = { ok: false, command: options.command ?? null, error: { code: error.code, message: error.message, details: error.details }, next_action: nextAction(error) };
    if (options.format === "json") {
      io.stderr.write(`${JSON.stringify(envelope, null, 2)}\n`);
    } else {
      io.stderr.write(`[${error.code}] ${error.message}\nNext: ${envelope.next_action}\n`);
    }
    return 2;
  }
}

function parseArgs(argv: string[]): Options {
  if (argv.length === 0 || argv.includes("--help") || argv.includes("-h")) return { help: true, format: "human", dryRun: false };
  const command = argv[0] ?? "";
  const options: Options = { command, configPath: undefined, format: "human", dryRun: false, slots: null, snapshotId: null, allowPartial: false, apply: false, forceStaleLock: false, help: false };
  for (let index = 1; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--dry-run") options.dryRun = true;
    else if (token === "--config") options.configPath = requiredValue(argv, ++index, token);
    else if (token === "--format") options.format = requiredValue(argv, ++index, token);
    else if (token === "--slots") options.slots = Number(requiredValue(argv, ++index, token));
    else if (token === "--snapshot") options.snapshotId = requiredValue(argv, ++index, token);
    else if (token === "--allow-partial") options.allowPartial = true;
    else if (token === "--apply") options.apply = true;
    else if (token === "--force-stale-lock") options.forceStaleLock = true;
    else throw new GoalHarnessError("GOAL_OPTION_UNKNOWN", `Unknown option: ${token}`);
  }
  if (!["human", "json"].includes(options.format)) throw new GoalHarnessError("GOAL_FORMAT_INVALID", `Invalid format: ${options.format}`);
  if (options.slots != null && (!Number.isInteger(options.slots) || options.slots < 1 || options.slots > 6)) {
    throw new GoalHarnessError("GOAL_SLOTS_INVALID", "--slots must be an integer from 1 through 6");
  }
  return options;
}

function requiredValue(argv: string[], index: number, option: string) {
  const value = argv[index];
  if (!value || value.startsWith("--")) throw new GoalHarnessError("GOAL_OPTION_VALUE_REQUIRED", `${option} requires a value`);
  return value;
}

export function renderHuman(envelope: Envelope) {
  const result = record(envelope.result);
  if (envelope.command === "plan") {
    const plan = record(result.plan), summary = record(plan.summary), scope = record(plan.scope), baseline = record(result.baseline);
    return `Goal plan ${plan.goal_id}${envelope.dry_run ? " (dry run)" : ""}\nScope: ${scope.selected_leaves}/${scope.total_classification_leaves} target CPC leaves\nQueue: ${summary.promote_legacy} promote, ${summary.create_new} create, ${summary.map_existing} map existing, ${summary.manual_review} manual review, ${summary.blocked} blocked\nBaseline: ${baseline.commit ?? `preview tree ${baseline.tree}`}\nNext: ${envelope.next_action}\n`;
  }
  if (envelope.command === "status" || envelope.command === "stop") {
    const state = record(result.state);
    return `Goal ${state.goal_id}: ${array(state.tasks).length} tasks; scheduling ${state.stopped ? "stopped" : "active"}.\nNext: ${envelope.next_action}\n`;
  }
  if (envelope.command === "doctor") {
    const checks = records(result.checks);
    return `${field(result, "ok") ? "PASS" : "FAIL"} Goal doctor (${checks.filter((entry) => entry.ok).length}/${checks.length} checks)\n${checks.map((entry) => `${entry.ok ? "PASS" : "FAIL"} ${entry.name}: ${typeof entry.detail === "string" ? entry.detail : JSON.stringify(entry.detail)}`).join("\n")}\nNext: ${envelope.next_action}\n`;
  }
  if (envelope.command === "uuid-audit") {
    return `Goal UUID audit: ${array(result.affected).length} affected; ${array(result.requeued).length} requeued${result.applied ? " (applied)" : " (dry run)"}.\nNext: ${envelope.next_action}\n`;
  }
  if (envelope.command === "start" || envelope.command === "resume") {
    const validResults = records(field(result.harvest, "valid_results") ?? []);
    const failures = array(field(result.harvest, "failures") ?? []);
    const dispatched = records(result.dispatched ?? []);
    const validCodes = validResults.map((entry) => entry.cpc_code).filter(Boolean).join(", ") || "none";
    const dispatchedCodes = dispatched.map((entry) => entry.cpc_code).filter(Boolean).join(", ") || "none";
    return `Goal ${envelope.command}: ${validResults.length} valid, ${failures.length} failed, ${dispatched.length} dispatched.\nValid CPCs: ${validCodes}\nDispatched CPCs: ${dispatchedCodes}\nNext: ${envelope.next_action}\n`;
  }
  if (envelope.command === "integrate") {
    const snapshot = record(result.snapshot ?? {});
    const checks = records(snapshot.command_results ?? []);
    const passed = checks.filter((entry) => entry.exit_code === 0).length;
    return `Goal integrate: ${snapshot.id ?? "unknown snapshot"} ${snapshot.state ?? (envelope.dry_run ? "dry_run" : "unknown")}.\nCommit: ${snapshot.integration_commit ?? "not created"}\nChecks: ${passed}/${checks.length} passed.\nNext: ${envelope.next_action}\n`;
  }
  if (envelope.command === "land") {
    const snapshotId = field(result.snapshot, "id") ?? result.snapshot_id ?? "unknown snapshot";
    const pathCount = (result.paths == null ? undefined : array(result.paths).length) ?? Object.keys(record(result.path_fingerprints ?? {})).length;
    return `Goal land: ${result.status ?? "unknown"} ${snapshotId}.\nCommit: ${field(result.snapshot, "integration_commit") ?? "not available"}\nPaths: ${pathCount}.\nNext: ${envelope.next_action}\n`;
  }
  return `${JSON.stringify(result, null, 2)}\nNext: ${envelope.next_action}\n`;
}

function nextAction(error: GoalHarnessError) {
  if (error.code === "GOAL_COMMAND_UNKNOWN") return "Run goal:doctor -- --help to list commands.";
  if (error.code === "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE") return "Update or restart Codex with app-server durable thread support, then run goal:resume.";
  if (error.code === "GOAL_LAND_CAS_CONFLICT") return "Review the exact conflicting paths; do not overwrite the user's newer files.";
  return "Fix the reported condition and repeat the same idempotent command.";
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  process.exitCode = await main();
}
