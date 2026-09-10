import { createHash, randomUUID } from "node:crypto";
import { closeSync, constants, existsSync, fsyncSync, fstatSync, linkSync, lstatSync, mkdirSync, openSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";

import { GoalHarnessError } from "./errors.mjs";
import { GoalEventStore } from "./event-store.mjs";
import { withGoalLock } from "./lock.mjs";

export function persistIntegrationCompletion({ stateDir, record }) {
  assertRecord(record);
  const target = completionPath(stateDir, record.prepared_snapshot.id, record.operation_id);
  mkdirSync(path.dirname(target), { recursive: true, mode: 0o700 });
  assertParents(target);
  if (existsSync(target)) {
    const existing = readIntegrationCompletion({ stateDir, snapshotId: record.prepared_snapshot.id, operationId: record.operation_id });
    if (!isDeepStrictEqual(existing, record)) throw corrupt("Completion operation ID was reused with different content.");
    return target;
  }
  const temporary = `${target}.${randomUUID()}.tmp`;
  const descriptor = openSync(temporary, "wx", 0o600);
  try {
    writeFileSync(descriptor, `${JSON.stringify({ record, sha256: hash(record) })}\n`);
    fsyncSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
  // Hard-link publication is atomic and refuses to replace an existing result.
  linkSync(temporary, target);
  const directory = openSync(path.dirname(target), "r");
  try { fsyncSync(directory); } finally { closeSync(directory); }
  unlinkSync(temporary);
  return target;
}

export function readIntegrationCompletion({ stateDir, snapshotId, operationId }) {
  const target = completionPath(stateDir, snapshotId, operationId);
  if (!existsSync(target)) return null;
  assertParents(target);
  const descriptor = openSync(target, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
  try {
    const stat = fstatSync(descriptor);
    if (!stat.isFile() || stat.size > 32 * 1024 * 1024) throw corrupt("Completion must be a bounded regular file.");
    const envelope = JSON.parse(readFileSync(descriptor, "utf8"));
    assertRecord(envelope.record);
    if (hash(envelope.record) !== envelope.sha256 || envelope.record.operation_id !== operationId || envelope.record.prepared_snapshot.id !== snapshotId) {
      throw corrupt("Completion hash or operation identity does not match.");
    }
    return envelope.record;
  } catch (error) {
    if (error.code === "GOAL_INTEGRATION_COMPLETION_CORRUPT") throw error;
    throw corrupt("Completion record cannot be decoded or verified.");
  } finally {
    closeSync(descriptor);
  }
}

export function finalizeIntegrationCompletion({ stateDir, record, resolveFinalization = (completed) => completed }) {
  assertRecord(record);
  return withGoalLock(stateDir, "integration-finalize", () => {
    const store = new GoalEventStore({ stateDir });
    const eventId = `${record.operation_id}-finalized`;
    // A repository CAS can reject a completed build as stale. Its atomic failure
    // event is authoritative on replay; do not repeat the repository side effect.
    const existing = store.readEvents().find((entry) => entry.event_id === eventId);
    if (existing) {
      if (existing.type !== "integration_finalized") throw corrupt("Completion event identity was reused.");
      assertFinalizationOutcome(record, { ...record, snapshot: existing.payload.snapshot, tasks: existing.payload.tasks });
      return store.rebuild();
    }
    const state = store.rebuild();
    const snapshot = state.snapshots.find((entry) => entry.id === record.prepared_snapshot.id);
    const tasks = record.prepared_tasks.map((selected) => state.tasks.find((entry) => entry.id === selected.id));
    if (state.goal_id !== record.goal_id || !isDeepStrictEqual(snapshot, record.prepared_snapshot) || !isDeepStrictEqual(tasks, record.prepared_tasks)) {
      throw new GoalHarnessError("GOAL_INTEGRATION_STATE_CONFLICT", "Selected snapshot or author tasks changed during integration; completion was preserved without overwriting state.");
    }
    // External acceptance happens only after selected-state CAS, while the short
    // Goal lock still prevents either selected record from changing.
    const finalized = resolveFinalization(record);
    assertFinalizationOutcome(record, finalized);
    store.append({ event_id: eventId, type: "integration_finalized", payload: { snapshot: finalized.snapshot, tasks: finalized.tasks } });
    return store.rebuild();
  });
}

function assertFinalizationOutcome(record, finalized) {
  assertRecord(finalized);
  if (isDeepStrictEqual(record, finalized)) return;
  const rejected = {
    ...record,
    snapshot: {
      ...record.snapshot,
      state: "retryable_failure",
      failure_code: finalized.snapshot.failure_code,
      failure_message: finalized.snapshot.failure_message,
    },
    tasks: record.prepared_tasks,
  };
  if (record.snapshot.state !== "validated" || typeof rejected.snapshot.failure_code !== "string" ||
      typeof rejected.snapshot.failure_message !== "string" || !isDeepStrictEqual(finalized, rejected)) {
    throw corrupt("Finalization changed the completed operation instead of accepting or rejecting it.");
  }
}

function completionPath(stateDir, snapshotId, operationId) {
  for (const id of [snapshotId, operationId]) if (typeof id !== "string" || !/^[a-zA-Z0-9][a-zA-Z0-9-]{0,160}$/u.test(id)) throw corrupt("Invalid completion identity.");
  return path.join(stateDir, "integration-completions", snapshotId, `${operationId}.json`);
}

function assertRecord(record) {
  if (record?.schema_version !== 1 || typeof record.goal_id !== "string" || !record.operation_id ||
    !record.prepared_snapshot?.id || record.snapshot?.id !== record.prepared_snapshot.id ||
    !["validated", "retryable_failure"].includes(record.snapshot.state) ||
    !Array.isArray(record.prepared_tasks) || !Array.isArray(record.tasks) || !Array.isArray(record.command_results) ||
    !isDeepStrictEqual(record.prepared_tasks.map((task) => task.id), record.tasks.map((task) => task.id)) ||
    !isDeepStrictEqual(record.prepared_snapshot.task_ids, record.prepared_tasks.map((task) => task.id))) {
    throw corrupt("Completion Schema or selected-task binding is invalid.");
  }
  const prepared = record.prepared_snapshot;
  const final = record.snapshot;
  const mutableSnapshot = new Set(["state", "integration_commit", "changed_files", "decision_ref", "accepted_codes", "command_results", "validated_at", "failure_code", "failure_message"]);
  const mutableTask = new Set(["state", "updated_at", "transition_ids", "integration_commit"]);
  const unchanged = (value, omitted) => Object.fromEntries(Object.entries(value).filter(([key]) => !omitted.has(key)));
  const sha = (value) => typeof value === "string" && /^[a-f0-9]{40}$/u.test(value);
  if (prepared.state !== "integrating" || prepared.goal_id !== record.goal_id || prepared.operation_id !== record.operation_id ||
    !path.isAbsolute(prepared.worktree_path ?? "") || !sha(prepared.base_commit) ||
    !isDeepStrictEqual(unchanged(prepared, mutableSnapshot), unchanged(final, mutableSnapshot)) ||
    !isDeepStrictEqual(prepared.author_commits, record.prepared_tasks.map((task) => task.author_commit)) ||
    new Set(prepared.task_ids).size !== prepared.task_ids.length ||
    !record.worktree_verification || !sha(record.worktree_verification.head) ||
    !Array.isArray(record.worktree_verification.status) || !record.worktree_verification.files ||
    record.prepared_tasks.some((task, index) => task.state !== "integrating" || !sha(task.author_commit) ||
      !isDeepStrictEqual(unchanged(task, mutableTask), unchanged(record.tasks[index], mutableTask)))) {
    throw corrupt("Completion operation, worktree, or author identity binding is inconsistent.");
  }
  if (final.state === "validated" && (!sha(final.integration_commit) || final.integration_commit !== record.worktree_verification.head ||
    record.worktree_verification.status.length !== 0 ||
    record.tasks.some((task) => task.state !== "validated" || task.integration_commit !== final.integration_commit))) {
    throw corrupt("Validated completion is not bound to its clean integration commit and task results.");
  }
  if (final.state === "retryable_failure" && !isDeepStrictEqual(record.tasks, record.prepared_tasks)) {
    throw corrupt("Failed integration may not advance author task states.");
  }
}

function assertParents(target) {
  for (let directory = path.dirname(path.resolve(target)); ; directory = path.dirname(directory)) {
    if (!lstatSync(directory).isDirectory() || lstatSync(directory).isSymbolicLink()) throw corrupt("Completion parent is not a regular directory.");
    if (directory === path.dirname(directory)) break;
  }
}

function hash(record) { return createHash("sha256").update(JSON.stringify(record)).digest("hex"); }
function corrupt(message) { return new GoalHarnessError("GOAL_INTEGRATION_COMPLETION_CORRUPT", message); }
