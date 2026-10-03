import { createHash } from "node:crypto";
import { closeSync, constants, fstatSync, lstatSync, openSync, readFileSync, readSync } from "node:fs";
import path from "node:path";
import { GoalEventStore } from "./event-store.ts";
import { GoalHarnessError } from "./errors.ts";
import { withGoalLock } from "./lock.ts";

import type { BinaryLike } from "node:crypto";
import type { BigIntStats } from "node:fs";
import { field, record, records, text, goalState, errorMessage } from "./domain.ts";
import type { GoalTask, UnknownRecord } from "./domain.ts";
interface HoldRequest {action:string;state_dir:string;task_id:string;operation_id:string;coordinator:string;reason:string;expected_task_sha256:string;expected_report_sha256:string}
export interface CoordinatorHoldResult extends UnknownRecord {action:string;operation_id:string;coordinator:string;reason:string;at:string;task_id:string;original_task_sha256:string;report:UnknownRecord;provenance:UnknownRecord}
const HOLD_STATES = new Set(["authoring", "authoring_repair", "author_review", "repair_requested", "retryable_failure"]);
const MAX_REPORT_BYTES = 1024 * 1024;

/** Canonical SHA-256 of the complete persisted task, including any hold/history. */
export function coordinatorTaskSha256(task:unknown) {
  return sha256(stableJson(task));
}

/** Explicit coordinator decision only; no report prose is interpreted here. */
export function holdCoordinatorTask(input:unknown) {
  return applyCoordinatorOperation("hold", input);
}

/** Release requires fresh task/report CAS; execution counters are preserved. */
export function releaseCoordinatorTask(input:unknown) {
  return applyCoordinatorOperation("release", input);
}

function applyCoordinatorOperation(action:string, input:unknown):CoordinatorHoldResult {
  const request = validateRequest(action, input);
  const stateDir = request.state_dir;
  return withGoalLock(stateDir, `coordinator-${action}`, () => {
    const store = new GoalEventStore({ stateDir });
    const state = store.rebuild();
    const previous = store.getEvent(`coordinator-operation-${sha256(request.operation_id)}`);
    if (previous) {
      const operation = record(previous.payload.coordinator_operation);
      if (stableJson(operation.request) !== stableJson(request)) {
        fail("GOAL_COORDINATOR_OPERATION_CONFLICT", "Coordinator operation id was reused with a different request.");
      }
      // Replays return the original receipt without restoring its old task snapshot.
      return holdResult(operation.result);
    }
    const task = state.tasks?.find((entry) => entry.id === request.task_id);
    if (!task) fail("GOAL_COORDINATOR_TASK_MISSING", "Coordinator task does not exist.");
    if (coordinatorTaskSha256(task) !== request.expected_task_sha256) {
      fail("GOAL_COORDINATOR_TASK_STALE", "Task changed since the coordinator reviewed it.");
    }
    if (!HOLD_STATES.has(task.state)) fail("GOAL_COORDINATOR_HOLD_STATE", `Coordinator ${action} is unavailable in state ${task.state}.`);
    if (action === "hold" && task.coordinator_hold) fail("GOAL_COORDINATOR_HOLD_EXISTS", "Task already has a coordinator hold.");
    if (action === "release" && !task.coordinator_hold) fail("GOAL_COORDINATOR_HOLD_MISSING", "Task has no coordinator hold to release.");

    const report = openReport(stateDir, task.report_path);
    try {
      if (report.sha256 !== request.expected_report_sha256) {
        fail("GOAL_COORDINATOR_REPORT_STALE", "Persisted report bytes changed since coordinator review.");
      }
      const result = {
        action,
        operation_id: request.operation_id,
        coordinator: request.coordinator,
        reason: request.reason,
        at: new Date().toISOString(),
        task_id: task.id,
        original_task_sha256: request.expected_task_sha256,
        report: {
          path: task.report_path,
          sha256: report.sha256,
          recorded_provenance: reportProvenance(store, task),
        },
        provenance: taskProvenance(task),
        ...(action === "release" ? { hold_operation_id: field(task.coordinator_hold,"operation_id") } : {}),
      };
      const replacement = action === "hold"
        ? { ...task, coordinator_hold: result }
        : { ...task, coordinator_hold: null,
          coordinator_hold_history: [...records(task.coordinator_hold_history ?? []), { hold: task.coordinator_hold, release: result }] };
      // Recheck the bounded bytes and every pathname binding immediately before append.
      report.verify();
      if (!field(input,"dry_run")) {
        store.append({
          event_id: `coordinator-operation-${sha256(request.operation_id)}`,
          at: result.at,
          type: "task_replaced",
          payload: { task: replacement, coordinator_operation: { request, result } },
        });
      }
      return result;
    } finally {
      report.close();
    }
  });
}

function validateRequest(action:string, inputValue:unknown):HoldRequest {
  const input=record(inputValue);
  if (!input || typeof input !== "object") fail("GOAL_COORDINATOR_HOLD_INPUT", "Coordinator request is required.");
  for (const field of ["stateDir", "task_id", "operation_id", "coordinator", "reason"]) {
    if (typeof input[field] !== "string" || !text(input[field]).trim()) {
      fail("GOAL_COORDINATOR_HOLD_INPUT", `${field} is required.`);
    }
  }
  // A minimum explanation is required, but its substantive meaning remains human judgment.
  if (text(input.reason).trim().length < 20) fail("GOAL_COORDINATOR_HOLD_INPUT", "Provide a substantive coordinator reason (at least 20 characters).");
  for (const field of ["expected_task_sha256", "expected_report_sha256"]) {
    if (typeof input[field] !== "string" || !/^[a-f0-9]{64}$/u.test(text(input[field]))) {
      fail("GOAL_COORDINATOR_HOLD_INPUT", `${field} must be an exact lowercase SHA-256 digest.`);
    }
  }
  if (input.dry_run !== undefined && typeof input.dry_run !== "boolean") {
    fail("GOAL_COORDINATOR_HOLD_INPUT", "dry_run must be a boolean.");
  }
  const allowed = new Set(["stateDir", "task_id", "operation_id", "coordinator", "reason", "expected_task_sha256", "expected_report_sha256", "dry_run"]);
  if (Object.keys(input).some((key) => !allowed.has(key))) fail("GOAL_COORDINATOR_HOLD_INPUT", "Unknown coordinator request field.");
  return { action, state_dir: path.resolve(text(input.stateDir)), task_id: text(input.task_id),
    operation_id: text(input.operation_id), coordinator: text(input.coordinator), reason: text(input.reason),
    expected_task_sha256: text(input.expected_task_sha256), expected_report_sha256: text(input.expected_report_sha256) };
}

function taskProvenance(task:unknown) {
  const keys = ["state", "thread_id", "turn_id", "attempt", "repair_count", "retry_count", "repair_resume_count",
    "infrastructure_resume_count", "dispatch_cycle", "retry_cycle", "uuid_enrichment_generation", "worktree_path", "transition_ids"];
  return Object.fromEntries(keys.filter((key) => field(task,key) !== undefined).map((key) => [key, field(task,key)]));
}

function reportProvenance(store:GoalEventStore, task:GoalTask) {
  const initial = goalState(JSON.parse(readFileSync(store.initialPath, "utf8")));
  let prior:UnknownRecord|undefined = initial.tasks?.find((entry) => entry.id === task.id);
  let recorded:UnknownRecord|null = prior?.report_path === task.report_path
    ? { source: "initial-state", ...taskProvenance(prior) } : null;
  for (const event of store.iterateEvents()) {
    const next = event.type === "task_replaced" ? record(event.payload.task)
      : event.type === "integration_finalized" ? records(event.payload.tasks ?? []).find((entry) => entry.id === task.id) : null;
    if (next?.id !== task.id) continue;
    if (next.report_path === task.report_path && prior?.report_path !== next.report_path) {
      recorded = { source: "event", event_id: event.event_id, sequence: event.sequence, at: event.at, ...taskProvenance(next) };
    }
    prior = next;
  }
  // This records pathname provenance only: the exact current bytes are pinned separately.
  return recorded;
}

/** Linux anchored no-follow traversal, failing closed if /proc descriptors are unavailable. */
function openReport(stateDir:string, reportPath:unknown) {
  const descriptors:number[] = [];
  const bindings:{anchored:string;fd:number;identity:string;final:boolean}[] = [];
  const close = () => { for (const fd of descriptors.reverse()) closeSync(fd); };
  try {
    const authorsDir = path.join(stateDir, "authors");
    if (typeof reportPath !== "string" || !path.isAbsolute(reportPath) || reportPath.includes("\0")) throw new Error("Report path must be absolute.");
    const resolved = path.resolve(reportPath);
    if (!resolved.startsWith(`${authorsDir}${path.sep}`) || resolved !== reportPath) throw new Error("Report path must stay inside the goal authors directory.");
    if (process.platform !== "linux" || constants.O_NOFOLLOW === undefined) throw new Error("Secure no-follow report traversal is unavailable.");
    let parent = openSync(path.parse(resolved).root, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW);
    descriptors.push(parent);
    const parts = resolved.split(path.sep).filter(Boolean);
    for (let index = 0; index < parts.length; index += 1) {
      const final = index === parts.length - 1;
      const anchored = `/proc/self/fd/${parent}/${parts[index]}`;
      const before = lstatSync(anchored, { bigint: true });
      if (before.isSymbolicLink() || (final ? !before.isFile() : !before.isDirectory())) throw new Error("Report path contains a symlink or unsupported file type.");
      const fd = openSync(anchored, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK | (final ? 0 : constants.O_DIRECTORY));
      descriptors.push(fd);
      const opened = fstatSync(fd, { bigint: true });
      if (identity(before) !== identity(opened)) throw new Error("Report path changed during open.");
      bindings.push({ anchored, fd, identity: identity(opened), final });
      parent = fd;
    }
    const fd = descriptors.at(-1);if(fd===undefined) throw new Error("Missing anchored report descriptor.");
    const before = fstatSync(fd, { bigint: true });
    if (!before.isFile() || before.size > BigInt(MAX_REPORT_BYTES)) throw new Error("Report exceeds the 1 MiB regular-file limit.");
    const read = () => {
      const buffer = Buffer.alloc(MAX_REPORT_BYTES + 1);
      let count = 0;
      while (count < buffer.length) {
        const received = readSync(fd, buffer, count, buffer.length - count, count);
        if (!received) break;
        count += received;
      }
      if (count > MAX_REPORT_BYTES) throw new Error("Report grew beyond the 1 MiB limit.");
      return buffer.subarray(0, count);
    };
    const bytes = read();
    const digest = sha256(bytes);
    const verifyBindings = () => {
      if (signature(before) !== signature(fstatSync(fd, { bigint: true }))) throw new Error("Report changed during read.");
      for (const binding of bindings) {
        const current = lstatSync(binding.anchored, { bigint: true });
        if (current.isSymbolicLink() || identity(current) !== binding.identity) throw new Error("Report pathname changed during read.");
      }
    };
    verifyBindings();
    return { sha256: digest, close, verify: () => {
      try {
        verifyBindings();
        if (sha256(read()) !== digest) throw new Error("Report bytes changed before append.");
        verifyBindings();
      } catch (error) { unsafeReport(error); }
    } };
  } catch (error) {
    close();
    unsafeReport(error);
  }
}

function identity(stats:BigIntStats) { return `${stats.dev}:${stats.ino}:${stats.mode}`; }
function signature(stats:BigIntStats) { return `${identity(stats)}:${stats.size}:${stats.mtimeNs}:${stats.ctimeNs}`; }
function unsafeReport(error:unknown):never { throw new GoalHarnessError("GOAL_COORDINATOR_REPORT_UNSAFE", "Cannot safely read the persisted author report.", { cause: errorMessage(error) }); }
function fail(code:string, message:string):never { throw new GoalHarnessError(code, message); }
function sha256(value:BinaryLike|undefined) { if(value===undefined)throw new TypeError("Missing coordinator bytes"); return createHash("sha256").update(value).digest("hex"); }
function stableJson(value:unknown):string|undefined {
  if (Array.isArray(value)) return `[${value.map((entry) => entry === undefined ? "null" : stableJson(entry)).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).filter((key) => field(value,key) !== undefined).sort().map((key) => `${JSON.stringify(key)}:${stableJson(field(value,key))}`).join(",")}}`;
  return JSON.stringify(value);
}

function holdResult(value:unknown):CoordinatorHoldResult {const r=record(value);return {...r,action:text(r.action),operation_id:text(r.operation_id),coordinator:text(r.coordinator),reason:text(r.reason),at:text(r.at),task_id:text(r.task_id),original_task_sha256:text(r.original_task_sha256),report:record(r.report),provenance:record(r.provenance)};}
