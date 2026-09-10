import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { syncBuiltinESMExports } from "node:module";
import { GoalEventStore } from "./event-store.mjs";

// Dynamic loading lets the first TDD run report an explicit missing-API assertion.
const api = await import("./coordinator-hold.mjs").catch((error) => {
  if (error.code === "ERR_MODULE_NOT_FOUND") return {};
  throw error;
});
const { holdCoordinatorTask, releaseCoordinatorTask, coordinatorTaskSha256 } = api;
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");

function fixture(t, state = "author_review") {
  assert.equal(typeof holdCoordinatorTask, "function", "coordinator hold API must exist");
  const stateDir = fs.mkdtempSync(path.join(os.tmpdir(), "goal-coordinator-hold-"));
  t.after(() => fs.rmSync(stateDir, { recursive: true, force: true }));
  const reportPath = path.join(stateDir, "authors", "author-one", "author-report.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, '{"result":"repair_required"}\n');
  const task = { id: "one", state, cpc_code: "12345", classification: { code: "12345" },
    report_path: reportPath, thread_id: "thread-old", turn_id: "turn-old", attempt: 2,
    repair_count: 3, retry_count: 4, repair_resume_count: 1, infrastructure_resume_count: 2,
    dispatch_cycle: 7, retry_cycle: 8, uuid_enrichment_generation: 1,
    worktree_path: "/preserved/worktree", transition_ids: ["previous"] };
  const store = new GoalEventStore({ stateDir });
  store.initialize({ tasks: [task] });
  const current = () => new GoalEventStore({ stateDir }).rebuild().tasks[0];
  const request = (overrides = {}) => ({ stateDir, task_id: "one", operation_id: "hold-one",
    coordinator: "coordinator-task-42", reason: "Boundary review requires an explicit coordinator decision.",
    expected_task_sha256: coordinatorTaskSha256(current()),
    expected_report_sha256: digest(fs.readFileSync(reportPath)), ...overrides });
  return { stateDir, reportPath, task, store, current, request };
}

test("task fingerprints are canonical and match persisted JSON semantics", () => {
  assert.equal(typeof coordinatorTaskSha256, "function");
  assert.equal(coordinatorTaskSha256({ b: 2, a: [1, undefined], missing: undefined }),
    coordinatorTaskSha256({ a: [1, null], b: 2 }));
});

for (const state of ["authoring", "authoring_repair", "author_review", "repair_requested", "retryable_failure"]) {
  test(`explicit hold accepts ${state} without changing task execution fields`, (t) => {
    const f = fixture(t, state);
    const request = f.request();
    const result = holdCoordinatorTask(request);
    const held = f.current();
    const { coordinator_hold, coordinator_hold_history, ...untouched } = held;
    assert.deepEqual(untouched, f.task);
    assert.deepEqual(coordinator_hold, result);
    assert.equal(result.operation_id, request.operation_id);
    assert.equal(result.coordinator, request.coordinator);
    assert.equal(result.reason, request.reason);
    assert.equal(result.original_task_sha256, request.expected_task_sha256);
    assert.equal(result.report.sha256, request.expected_report_sha256);
    assert.equal(result.report.path, f.reportPath);
    assert.equal(result.provenance.thread_id, "thread-old");
    assert.equal(result.provenance.repair_count, 3);
    assert.equal(result.provenance.repair_resume_count, 1);
    assert.equal(result.provenance.infrastructure_resume_count, 2);
    assert.equal(result.provenance.dispatch_cycle, 7);
    assert.equal(result.provenance.retry_cycle, 8);
    assert.match(result.at, /^\d{4}-\d{2}-\d{2}T.*Z$/u);
    assert.equal(f.store.readEvents().at(-1).type, "task_replaced");
  });
}

for (const state of ["queued", "planned", "valid_result", "integrating", "integration_failed", "completed", "stopped", "unknown",
  "integration_pending", "integrated", "validated", "manual_review", "blocked", "failed", "cancelled", "preflight", "discovered", "classified", "map_existing"]) {
  test(`hold rejects ${state}`, (t) => {
    const f = fixture(t, state);
    assert.throws(() => holdCoordinatorTask(f.request()), { code: "GOAL_COORDINATOR_HOLD_STATE" });
    assert.equal(f.store.readEvents().length, 0);
  });
  test(`release rejects an externally advanced held task in ${state}`, (t) => {
    const f = fixture(t);
    holdCoordinatorTask(f.request());
    f.store.append({ event_id: "advanced", type: "task_replaced", payload: { task: { ...f.current(), state } } });
    assert.throws(() => releaseCoordinatorTask(f.request({ operation_id: "release-one" })), { code: "GOAL_COORDINATOR_HOLD_STATE" });
    assert.equal(f.store.readEvents().length, 2);
    assert.ok(f.current().coordinator_hold);
  });
}

test("required request identity and substantive reason fail before writes", (t) => {
  const f = fixture(t);
  for (const [field, value] of [["operation_id", ""], ["coordinator", " "], ["reason", "hold"],
    ["task_id", ""], ["expected_task_sha256", "bad"], ["expected_report_sha256", "bad"]]) {
    assert.throws(() => holdCoordinatorTask(f.request({ [field]: value })), { code: "GOAL_COORDINATOR_HOLD_INPUT" });
  }
  assert.equal(f.store.readEvents().length, 0);
});

test("task CAS ignores forged state.json and rejects changed event task", (t) => {
  const f = fixture(t);
  const request = f.request();
  f.store.append({ event_id: "changed", type: "task_replaced", payload: { task: { ...f.task, retry_count: 5 } } });
  fs.writeFileSync(path.join(f.stateDir, "state.json"), JSON.stringify({ tasks: [f.task] }));
  assert.throws(() => holdCoordinatorTask(request), { code: "GOAL_COORDINATOR_TASK_STALE" });
  assert.equal(f.store.readEvents().length, 1);
});

test("report exact-byte CAS rejects whitespace changes and missing reports", (t) => {
  const f = fixture(t);
  const request = f.request();
  fs.appendFileSync(f.reportPath, " ");
  assert.throws(() => holdCoordinatorTask(request), { code: "GOAL_COORDINATOR_REPORT_STALE" });
  fs.unlinkSync(f.reportPath);
  assert.throws(() => holdCoordinatorTask(request), { code: "GOAL_COORDINATOR_REPORT_UNSAFE" });
  assert.equal(f.store.readEvents().length, 0);
});

test("dry run validates hold and release without event or projection writes", (t) => {
  const f = fixture(t);
  const request = f.request();
  const before = fs.readFileSync(path.join(f.stateDir, "state.json"));
  holdCoordinatorTask({ ...request, dry_run: true });
  assert.equal(f.store.readEvents().length, 0);
  assert.deepEqual(fs.readFileSync(path.join(f.stateDir, "state.json")), before);
  holdCoordinatorTask(request);
  const heldBytes = fs.readFileSync(path.join(f.stateDir, "state.json"));
  releaseCoordinatorTask(f.request({ operation_id: "release-one", dry_run: true }));
  assert.equal(f.store.readEvents().length, 1);
  assert.deepEqual(fs.readFileSync(path.join(f.stateDir, "state.json")), heldBytes);
  assert.throws(() => releaseCoordinatorTask(f.request({ operation_id: "release-one", dry_run: true,
    expected_report_sha256: "0".repeat(64) })), { code: "GOAL_COORDINATOR_REPORT_STALE" });
});

test("exact operation replay survives task change and release without restoring stale task", (t) => {
  const f = fixture(t);
  const request = f.request();
  const hold = holdCoordinatorTask(request);
  assert.deepEqual(holdCoordinatorTask(request), hold);
  const releaseRequest = f.request({ operation_id: "release-one" });
  const release = releaseCoordinatorTask(releaseRequest);
  const released = f.current();
  assert.equal(released.coordinator_hold, null);
  assert.deepEqual(released.coordinator_hold_history, [{ hold, release }]);
  for (const [key, value] of Object.entries(f.task)) assert.deepEqual(released[key], value);
  f.store.append({ event_id: "later", type: "task_replaced", payload: { task: { ...released, state: "completed" } } });
  fs.unlinkSync(f.reportPath);
  assert.deepEqual(holdCoordinatorTask(request), hold);
  assert.deepEqual(releaseCoordinatorTask(releaseRequest), release);
  assert.equal(f.current().state, "completed");
  assert.equal(f.current().coordinator_hold, null);
  assert.equal(f.store.readEvents().length, 3);
  assert.throws(() => holdCoordinatorTask({ ...request, reason: "Different explicit reason for coordinator intervention." }),
    { code: "GOAL_COORDINATOR_OPERATION_CONFLICT" });
  assert.throws(() => releaseCoordinatorTask(request), { code: "GOAL_COORDINATOR_OPERATION_CONFLICT" });
});

test("operation identity is global across tasks and pins both hashes", (t) => {
  const f = fixture(t);
  const request = f.request();
  holdCoordinatorTask(request);
  for (const changes of [{ task_id: "two" }, { expected_task_sha256: "1".repeat(64) },
    { expected_report_sha256: "2".repeat(64) }, { coordinator: "another-coordinator" }]) {
    assert.throws(() => holdCoordinatorTask({ ...request, ...changes }), { code: "GOAL_COORDINATOR_OPERATION_CONFLICT" });
  }
});

test("release requires an active hold and current task CAS; later holds preserve history", (t) => {
  const f = fixture(t);
  assert.throws(() => releaseCoordinatorTask(f.request()), { code: "GOAL_COORDINATOR_HOLD_MISSING" });
  const stale = f.request({ operation_id: "release-one" });
  holdCoordinatorTask(f.request());
  assert.throws(() => releaseCoordinatorTask(stale), { code: "GOAL_COORDINATOR_TASK_STALE" });
  assert.throws(() => holdCoordinatorTask(f.request({ operation_id: "hold-two" })), { code: "GOAL_COORDINATOR_HOLD_EXISTS" });
  releaseCoordinatorTask(f.request({ operation_id: "release-one" }));
  holdCoordinatorTask(f.request({ operation_id: "hold-two" }));
  assert.equal(f.current().coordinator_hold_history.length, 1);
});

test("older persisted report has separate recorded provenance from active turn", (t) => {
  const f = fixture(t);
  f.store.append({ event_id: "new-turn", type: "task_replaced", payload: { task: {
    ...f.task, state: "authoring_repair", thread_id: "thread-new", turn_id: "turn-new", repair_count: 4 } } });
  const hold = holdCoordinatorTask(f.request());
  assert.equal(hold.provenance.turn_id, "turn-new");
  assert.equal(hold.report.recorded_provenance.turn_id, "turn-old");
  assert.equal(hold.report.recorded_provenance.thread_id, "thread-old");
  assert.equal(hold.report.recorded_provenance.source, "initial-state");
});

for (const kind of ["file-symlink", "directory-symlink", "escape", "oversize", "directory", "missing-path"]) {
  test(`rejects unsafe report: ${kind}`, (t) => {
    const f = fixture(t);
    const request = f.request();
    if (kind === "file-symlink") {
      fs.renameSync(f.reportPath, `${f.reportPath}.saved`);
      fs.symlinkSync(`${f.reportPath}.saved`, f.reportPath);
    } else if (kind === "directory-symlink") {
      fs.renameSync(path.dirname(f.reportPath), `${path.dirname(f.reportPath)}.saved`);
      fs.symlinkSync(`${path.dirname(f.reportPath)}.saved`, path.dirname(f.reportPath));
    } else if (kind === "oversize") fs.writeFileSync(f.reportPath, Buffer.alloc(1024 * 1024 + 1));
    else if (kind === "directory") { fs.unlinkSync(f.reportPath); fs.mkdirSync(f.reportPath); }
    else {
      const task = { ...f.task, report_path: kind === "escape" ? path.join(f.stateDir, "initial-state.json") : null };
      f.store.append({ event_id: "unsafe-path", type: "task_replaced", payload: { task } });
      request.expected_task_sha256 = coordinatorTaskSha256(task);
    }
    assert.throws(() => holdCoordinatorTask(request), { code: "GOAL_COORDINATOR_REPORT_UNSAFE" });
    assert.equal(f.current().coordinator_hold, undefined);
  });
}

test("report replacement during bounded read is rejected", (t) => {
  const f = fixture(t);
  const request = f.request();
  const originalRead = fs.readSync;
  const reportIdentity = fs.statSync(f.reportPath);
  let replaced = false;
  t.after(() => { fs.readSync = originalRead; syncBuiltinESMExports(); });
  fs.readSync = function (...args) {
    const count = originalRead.apply(this, args);
    const readIdentity = fs.fstatSync(args[0]);
    if (!replaced && readIdentity.dev === reportIdentity.dev && readIdentity.ino === reportIdentity.ino) {
      replaced = true;
      fs.renameSync(f.reportPath, `${f.reportPath}.old`);
      fs.writeFileSync(f.reportPath, '{"substituted":true}');
    }
    return count;
  };
  syncBuiltinESMExports();
  assert.throws(() => holdCoordinatorTask(request), { code: "GOAL_COORDINATOR_REPORT_UNSAFE" });
  assert.equal(replaced, true);
  assert.equal(f.store.readEvents().length, 0);
});
