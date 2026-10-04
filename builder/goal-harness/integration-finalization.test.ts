import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { record as object, field, errorCode, jsonRecord } from "./domain.ts";
import type { IntegrationCompletion } from "./integration-completion.ts";
function one<T>(value:T):[T] {return [value];}
function item<T>(values:readonly T[], index:number):T {const value=values[index];assert.ok(value);return value;}
function saved(value: IntegrationCompletion | null): IntegrationCompletion {assert.ok(value);return value;}
import { GoalEventStore } from "./event-store.ts";
import * as completion from "./integration-completion.ts";
import { withGoalLock } from "./lock.ts";

function fixtureRecord(outcome = "validated") {
  const preparedTask = { id: "one", state: "integrating", author_commit: "a".repeat(40), pcr_path: "library/pcrs/example", worktree_path: "/fixture/author" };
  const preparedSnapshot = { id: "snapshot-one", goal_id: "fixture", state: "integrating", operation_id: "operation-one", task_ids: ["one"], author_commits: [preparedTask.author_commit], worktree_path: "/fixture/integration", base_commit: "b".repeat(40) };
  const integrationCommit = "c".repeat(40);
  return {
    schema_version: 1, operation_id: "operation-one", goal_id: "fixture",
    prepared_snapshot: preparedSnapshot, prepared_tasks: one(preparedTask),
    snapshot: { ...preparedSnapshot, state: outcome, ...(outcome === "validated" ? { integration_commit: integrationCommit } : {}) },
    tasks: one({ ...preparedTask, state: outcome === "validated" ? "validated" : "integrating", ...(outcome === "validated" ? { integration_commit: integrationCommit } : {}) }),
    command_results: [{ name: "validate", exit_code: outcome === "validated" ? 0 : 1 }],
    worktree_verification: { head: outcome === "validated" ? integrationCommit : preparedSnapshot.base_commit, status: [], files: {} },
  };
}

for (const [name, mutate] of new Map<string,(record:ReturnType<typeof fixtureRecord>)=>void>([
  ["operation", (record) => { record.snapshot.operation_id = "another-operation"; }],
  ["worktree", (record) => { record.snapshot.worktree_path = "/different"; }],
  ["base", (record) => { record.snapshot.base_commit = "d".repeat(40); }],
  ["membership", (record) => { record.snapshot.task_ids = ["other"]; }],
  ["author commit", (record) => { record.tasks[0].author_commit = "d".repeat(40); }],
  ["PCR identity", (record) => { record.tasks[0].pcr_path = "library/pcrs/different"; }],
  ["integration commit", (record) => { record.snapshot.integration_commit = "d".repeat(40); }],
])) {
  test(`completion rejects correctly checksummed but inconsistent ${name} binding`, () => {
    const stateDir = mkdtempSync(path.join(tmpdir(), "goal-completion-bindings-"));
    try {
      const record = fixtureRecord();
      const journalPath = completion.persistIntegrationCompletion({ stateDir, record });
      mutate(record);
      writeFileSync(journalPath, JSON.stringify({ record, sha256: createHash("sha256").update(JSON.stringify(record)).digest("hex") }));
      assert.throws(() => completion.readIntegrationCompletion({ stateDir, snapshotId: "snapshot-one", operationId: "operation-one" }), (error) => errorCode(error) === "GOAL_INTEGRATION_COMPLETION_CORRUPT");
    } finally { rmSync(stateDir, { recursive: true, force: true }); }
  });
}

for (const outcome of ["validated", "retryable_failure"]) {
  test(`durable ${outcome} completion survives a busy state lock and resumes without losing other tasks`, () => {
    const stateDir = mkdtempSync(path.join(tmpdir(), "goal-completion-journal-"));
    try {
      const record = fixtureRecord(outcome);
      const beforeTask = record.prepared_tasks[0];
      const beforeSnapshot = record.prepared_snapshot;
      const store = new GoalEventStore({ stateDir });
      store.initialize({ goal_id: "fixture", tasks: [beforeTask, { id: "two", state: "authoring" }], snapshots: [beforeSnapshot] });
      const journalPath = completion.persistIntegrationCompletion({ stateDir, record });
      const bytes = readFileSync(journalPath);
      withGoalLock(stateDir, "author-review", () => {
        assert.throws(() => completion.finalizeIntegrationCompletion({ stateDir, record }), (error) => errorCode(error) === "GOAL_LOCKED");
        store.append({ event_id: "second-author-finished", type: "task_replaced", payload: { task: { id: "two", state: "valid_result" } } });
      });
      const restored = completion.readIntegrationCompletion({ stateDir, snapshotId: beforeSnapshot.id, operationId: record.operation_id });
      completion.finalizeIntegrationCompletion({ stateDir, record: restored });
      assert.equal(item(store.rebuild().snapshots,0).state, outcome);
      assert.equal(item(store.rebuild().tasks,1).state, "valid_result");
      completion.finalizeIntegrationCompletion({ stateDir, record: restored });
      assert.equal(store.readEvents().length, 2);
      assert.deepEqual(readFileSync(journalPath), bytes);
      const envelope=jsonRecord(bytes.toString("utf8"));
      const commands=field(envelope.record,"command_results"); assert.ok(Array.isArray(commands)); object(commands[0]).exit_code=42;
      writeFileSync(journalPath, JSON.stringify(envelope));
      assert.throws(() => completion.readIntegrationCompletion({ stateDir, snapshotId: beforeSnapshot.id, operationId: record.operation_id }), (error) => errorCode(error) === "GOAL_INTEGRATION_COMPLETION_CORRUPT");
    } finally {
      rmSync(stateDir, { recursive: true, force: true });
    }
  });
}

test("one completion event atomically finalizes selected tasks and preserves concurrent queue changes", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-integration-finalization-"));
  try {
    const store = new GoalEventStore({ stateDir });
    const selected = { id: "selected", state: "integrating", author_commit: "a".repeat(40) };
    const unrelated = { id: "next-author", state: "authoring" };
    const snapshot = { id: "snapshot-one", state: "integrating", task_ids: [selected.id] };
    store.initialize({ goal_id: "fixture", tasks: [selected, unrelated], snapshots: [snapshot] });
    const reviewed = { ...unrelated, state: "valid_result", author_commit: "b".repeat(40) };
    store.append({ event_id: "other-author-reviewed", type: "task_replaced", payload: { task: reviewed } });
    store.append({ event_id: "operator-stop", type: "scheduling_stopped", payload: {} });
    const complete = {
      event_id: "integration-operation-one-finalized",
      type: "integration_finalized",
      payload: {
        snapshot: { ...snapshot, state: "validated", integration_commit: "c".repeat(40) },
        tasks: [{ ...selected, state: "validated", integration_commit: "c".repeat(40) }],
      },
    };
    store.append(complete);
    // Simulate process loss immediately after the single durable append.
    const recovered = new GoalEventStore({ stateDir });
    assert.equal(item(recovered.rebuild().snapshots,0).state, "validated");
    assert.equal(item(recovered.rebuild().tasks,0).state, "validated");
    assert.deepEqual(item(recovered.rebuild().tasks,1), reviewed);
    assert.equal(recovered.rebuild().stopped, true);
    recovered.append(complete);
    assert.equal(recovered.readEvents().length, 3);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});


test("repository rejection finalizes a completed build once and replays its atomic failure", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-completion-rejection-"));
  try {
    const record = fixtureRecord();
    const store = new GoalEventStore({ stateDir });
    store.initialize({ goal_id: "fixture", tasks: record.prepared_tasks, snapshots: [record.prepared_snapshot] });
    completion.persistIntegrationCompletion({ stateDir, record });
    let resolutions = 0;
    const resolveFinalization = (completed:IntegrationCompletion) => {
      resolutions += 1;
      return {
        ...completed,
        snapshot: { ...completed.snapshot, state: "retryable_failure", failure_code: "GOAL_REPOSITORY_CANDIDATE_STALE", failure_message: "Repository advanced." },
        tasks: completed.prepared_tasks,
      };
    };
    completion.finalizeIntegrationCompletion({ stateDir, record, resolveFinalization });
    completion.finalizeIntegrationCompletion({ stateDir, record, resolveFinalization });
    assert.equal(resolutions, 1);
    assert.equal(store.readEvents().length, 1);
    assert.equal(item(store.rebuild().snapshots,0).state, "retryable_failure");
    assert.equal(item(store.rebuild().tasks,0).state, "integrating");
    assert.equal(saved(completion.readIntegrationCompletion({ stateDir, snapshotId: record.snapshot.id, operationId: record.operation_id })).snapshot.state, "validated");
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("repository finalization cannot substitute completed build results", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-completion-substitution-"));
  try {
    const record = fixtureRecord();
    const store = new GoalEventStore({ stateDir });
    store.initialize({ goal_id: "fixture", tasks: record.prepared_tasks, snapshots: [record.prepared_snapshot] });
    assert.throws(() => completion.finalizeIntegrationCompletion({ stateDir, record, resolveFinalization: (completed) => ({
      ...completed, snapshot: { ...completed.snapshot, changed_files: ["unrelated.txt"] },
    }) }), (error) => errorCode(error) === "GOAL_INTEGRATION_COMPLETION_CORRUPT");
    assert.equal(store.readEvents().length, 0);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});
