import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { dispatchGoalAuthors, harvestGoalAuthors } from "./orchestrator.mjs";
import { GoalEventStore } from "./event-store.mjs";

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function fixture({ taskCount = 1 } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-goal-orchestrator-"));
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "Goal Test"]);
  git(root, ["config", "user.email", "goal@example.invalid"]);
  mkdirSync(path.join(root, "library/pcrs/category/item"), { recursive: true });
  writeFileSync(path.join(root, ".gitignore"), "library/.pcr-builder-state/\n.worktrees/\n");
  for (const file of ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"]) writeFileSync(path.join(root, "library/pcrs/category/item", file), `${file}\n`);
  writeFileSync(path.join(root, "policy.txt"), "policy\n");
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "base"]);
  const baselineCommit = git(root, ["rev-parse", "HEAD"]);
  const stateDir = path.join(root, "library/.pcr-builder-state/goals/fixture");
  const tasks = Array.from({ length: taskCount }, (_, index) => ({
    id: `cpc:3.0:${41111 + index}`, cpc_code: String(41111 + index), product_name_en: `Product ${index + 1}`, product_name_zh: `产品 ${index + 1}`,
    pcr_path: "library/pcrs/category/item", queue_action: "promote_legacy", state: "queued", queue_order: index + 1,
  }));
  new GoalEventStore({ stateDir }).initialize({
    schema_version: 1,
    goal_id: "fixture",
    baseline: { commit: baselineCommit },
    tasks,
    snapshots: [],
    stopped: false,
    verified_common_uuids: [],
  });
  const config = {
    goal_id: "fixture",
    project_root: root,
    policy_prompt_path: path.join(root, "policy.txt"),
    author_slots: 6,
    tools: {},
    codex: { sandbox: "danger-full-access", approval_policy: "never" },
  };
  return { root, stateDir, config };
}

test("dispatch creates one worktree-visible task and repeated resume does not duplicate it", async () => {
  const { root, stateDir, config } = fixture();
  const calls = [];
  const adapter = {
    async createAuthorTask(input) { calls.push(input); return { thread_id: "thread-1", turn_id: "turn-1" }; },
  };
  try {
    const first = await dispatchGoalAuthors({ config, stateDir, slots: 1, adapter });
    assert.equal(first.dispatched.length, 1);
    assert.equal(calls.length, 1);
    assert.equal(git(first.dispatched[0].worktree_path, ["rev-parse", "HEAD"]), git(root, ["rev-parse", "HEAD"]));
    const state = new GoalEventStore({ stateDir }).rebuild();
    assert.equal(state.tasks[0].state, "authoring");
    assert.equal(state.tasks[0].thread_id, "thread-1");
    assert.equal(state.tasks[0].turn_id, "turn-1");
    assert.equal(state.tasks[0].attempt, 1);

    const second = await dispatchGoalAuthors({ config, stateDir, slots: 1, adapter });
    assert.equal(second.dispatched.length, 0);
    assert.equal(calls.length, 1);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("dispatch advances past a legacy transition cycle whose persisted counter is stale", async () => {
  const { root, stateDir, config } = fixture();
  const store = new GoalEventStore({ stateDir });
  const original = store.rebuild().tasks[0];
  const transitionIdentity = "goal-fixture-41111-u1-a5-c6";
  const legacyAuthoring = {
    ...original,
    state: "authoring",
    attempt: 5,
    dispatch_cycle: 5,
    uuid_enrichment_generation: 1,
    author_base_commit: store.rebuild().baseline.commit,
    worktree_path: root,
    author_branch: git(root, ["branch", "--show-current"]),
    thread_id: "thread-legacy",
    turn_id: "turn-legacy",
    transition_ids: [`${transitionIdentity}-authoring`],
  };
  store.append({
    event_id: `${transitionIdentity}-dispatched`,
    type: "task_replaced",
    payload: { task: legacyAuthoring },
  });
  store.append({
    event_id: "fixture-legacy-cycle-requeued",
    type: "task_replaced",
    payload: { task: {
      ...legacyAuthoring,
      state: "queued",
      thread_id: null,
      turn_id: null,
      transition_ids: [...legacyAuthoring.transition_ids, "legacy-requeue"],
    } },
  });
  const calls = [];
  try {
    const result = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      adapter: {
        async createAuthorTask(input) {
          calls.push(input);
          return { thread_id: "thread-current", turn_id: "turn-current" };
        },
      },
    });
    assert.equal(calls.length, 1);
    assert.equal(result.state.tasks[0].state, "authoring");
    assert.equal(result.state.tasks[0].dispatch_cycle, 7);
    assert.equal(result.state.tasks[0].thread_id, "thread-current");
    assert.ok(result.state.tasks[0].transition_ids.includes("goal-fixture-41111-u1-a5-c7-authoring"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resume recovers a visible turn created before a dispatch event conflict without duplicating it", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_attempts: 6, max_repairs: 2 };
  const first = await dispatchGoalAuthors({
    config,
    stateDir,
    slots: 1,
    adapter: {
      async createAuthorTask() {
        return { thread_id: "thread-already-created", turn_id: "turn-already-created" };
      },
    },
  });
  const store = new GoalEventStore({ stateDir });
  const original = first.dispatched[0];
  store.append({
    event_id: "fixture-dispatch-event-conflict",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "retryable_failure",
      failure_code: "GOAL_EVENT_ID_CONFLICT",
      failure_message: "dispatch event id collided with legacy state",
      repair_count: 2,
      transition_ids: [...original.transition_ids, "legacy-dispatch-failed"],
    } },
  });
  store.append({ event_id: "fixture-stopped", type: "scheduling_stopped", payload: { reason: "GOAL_EVENT_ID_CONFLICT" } });
  let createCalls = 0;
  try {
    const result = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      adapter: {
        async createAuthorTask() {
          createCalls += 1;
          return { thread_id: "thread-duplicate", turn_id: "turn-duplicate" };
        },
      },
    });
    assert.equal(createCalls, 0);
    assert.equal(result.state.stopped, false);
    assert.equal(result.state.tasks[0].state, "authoring");
    assert.equal(result.state.tasks[0].thread_id, "thread-already-created");
    assert.equal(result.state.tasks[0].turn_id, "turn-already-created");
    assert.equal(result.state.tasks[0].dispatch_recovered_from_event_conflict, true);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("dispatch fills every open slot when another author is already active", async () => {
  const { root, stateDir, config } = fixture({ taskCount: 7 });
  const store = new GoalEventStore({ stateDir });
  const [first] = store.rebuild().tasks;
  store.append({
    event_id: "fixture-existing-author",
    type: "task_replaced",
    payload: { task: { ...first, state: "authoring", thread_id: "existing-thread", turn_id: "existing-turn", transition_ids: ["authoring"] } },
  });
  let calls = 0;
  const adapter = {
    async createAuthorTask() {
      calls += 1;
      return { thread_id: `thread-${calls}`, turn_id: `turn-${calls}` };
    },
  };
  try {
    const result = await dispatchGoalAuthors({ config, stateDir, slots: 6, adapter });
    assert.equal(result.dispatched.length, 5);
    assert.equal(calls, 5);
    assert.equal(result.state.tasks.filter((task) => task.state === "authoring").length, 6);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("new authors start from the verified runtime base while existing task baselines remain explicit", async () => {
  const { root, stateDir, config } = fixture({ taskCount: 2 });
  const store = new GoalEventStore({ stateDir });
  writeFileSync(path.join(root, "runtime.txt"), "verified runtime\n");
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "runtime"]);
  const runtimeCommit = git(root, ["rev-parse", "HEAD"]);
  store.append({
    event_id: "fixture-runtime",
    type: "runtime_baseline_updated",
    payload: { runtime_baseline: { commit: runtimeCommit, base_commit: store.rebuild().baseline.commit, source_commit: runtimeCommit } },
  });
  const calls = [];
  const adapter = {
    async createAuthorTask(input) { calls.push(input); return { thread_id: `thread-${calls.length}`, turn_id: `turn-${calls.length}` }; },
  };
  try {
    const result = await dispatchGoalAuthors({ config, stateDir, slots: 1, adapter });
    assert.equal(git(result.dispatched[0].worktree_path, ["rev-parse", "HEAD"]), runtimeCommit);
    assert.equal(result.dispatched[0].author_base_commit, runtimeCommit);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("visible app-server failure preserves prepared worktree and stops scheduling without fallback", async () => {
  const { root, stateDir, config } = fixture();
  const adapter = {
    async createAuthorTask() {
      const error = new Error("thread/start unsupported");
      error.code = "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE";
      throw error;
    },
  };
  try {
    await assert.rejects(
      () => dispatchGoalAuthors({ config, stateDir, slots: 1, adapter }),
      (error) => error.code === "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE",
    );
    const state = new GoalEventStore({ stateDir }).rebuild();
    assert.equal(state.stopped, true);
    assert.equal(state.tasks[0].state, "retryable_failure");
    assert.equal(state.tasks[0].failure_code, "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE");
    assert.equal(git(state.tasks[0].worktree_path, ["rev-parse", "HEAD"]), state.baseline.commit);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("harvest records a completed machine report and promotes a reviewed task exactly once", async () => {
  const { root, stateDir, config } = fixture();
  const store = new GoalEventStore({ stateDir });
  let task = store.rebuild().tasks[0];
  task = {
    ...task,
    state: "authoring",
    thread_id: "thread-1",
    turn_id: "turn-1",
    worktree_path: root,
    allowed_files: ["a", "b", "c", "d"],
    failure_code: "GOAL_AUTHOR_REPAIR_REQUIRED",
    failure_message: "stale repair finding",
    pending_gate_findings: [{ code: "stale_finding" }],
    transition_ids: ["prepared", "authoring"],
  };
  store.append({ event_id: "fixture-authoring", type: "task_replaced", payload: { task } });
  const report = { schema_version: 1, commit_sha: "a".repeat(40) };
  const adapter = {
    async readThread() {
      return { thread: { turns: [{ id: "turn-1", status: "completed", items: [{ type: "agentMessage", text: JSON.stringify(report) }] }] } };
    },
  };
  let reviewCount = 0;
  try {
    const first = await harvestGoalAuthors({
      config,
      stateDir,
      adapter,
      auditUuidsFn: () => [{
        uuid: "11111111-1111-4111-8111-111111111111",
        state_code: 100,
        base_name_en: "Alternating current",
        base_name_zh: "交流电",
        flow_type: "product",
        classifications: [{ id: "17100", label: "Electrical energy" }],
        hybrid_search_receipt_id: "receipt-1",
        response_sha256: "sha256:fixture",
      }],
      verifySourcesFn: async () => [],
      validateReportFn: () => ({ valid: true, errors: [] }),
      reviewFn: () => { reviewCount += 1; return { valid: true, counts: { total: 2, matched: 1, unresolved: 1 } }; },
    });
    assert.equal(first.valid_results.length, 1);
    assert.equal(first.state.tasks[0].state, "valid_result");
    assert.equal(first.state.tasks[0].author_commit, report.commit_sha);
    assert.equal(first.state.tasks[0].failure_code, null);
    assert.equal(first.state.tasks[0].failure_message, null);
    assert.deepEqual(first.state.tasks[0].pending_gate_findings, []);
    assert.deepEqual(first.state.verified_common_uuids.map((entry) => entry.uuid), ["11111111-1111-4111-8111-111111111111"]);
    assert.equal(reviewCount, 1);
    const second = await harvestGoalAuthors({ config, stateDir, adapter, reviewFn: () => { reviewCount += 1; } });
    assert.equal(second.valid_results.length, 0);
    assert.equal(reviewCount, 1);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("harvest interrupts an expired visible author and requests recovery in the same thread", async () => {
  const { root, stateDir, config } = fixture();
  config.author_timeout_seconds = 60;
  const store = new GoalEventStore({ stateDir });
  const original = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-expired-author",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "authoring",
      thread_id: "thread-expired",
      turn_id: "turn-expired",
      dispatched_at: "2026-09-02T00:00:00.000Z",
      worktree_path: root,
      transition_ids: ["authoring"],
    } },
  });
  const interrupts = [];
  const adapter = {
    async readThread() {
      return { thread: { turns: [{ id: "turn-expired", status: "inProgress", items: [] }] } };
    },
    async interruptTurn(input) { interrupts.push(input); },
  };
  try {
    const result = await harvestGoalAuthors({
      config,
      stateDir,
      adapter,
      now: () => new Date("2026-09-02T00:02:00.000Z"),
    });
    assert.equal(result.failures.length, 1);
    assert.equal(result.state.tasks[0].state, "repair_requested");
    assert.equal(result.state.tasks[0].failure_code, "GOAL_AUTHOR_TIMEOUT_REPAIR_REQUIRED");
    assert.equal(result.state.tasks[0].thread_id, "thread-expired");
    assert.equal(result.state.tasks[0].worktree_path, root);
    assert.deepEqual(interrupts, [{ threadId: "thread-expired", turnId: "turn-expired" }]);
    assert.equal(result.state.tasks[0].worktree_path, root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("an interrupted repair resumes once in the same thread without consuming another repair", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_repairs: 2 };
  const store = new GoalEventStore({ stateDir });
  const original = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-interrupted-repair",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "authoring_repair",
      thread_id: "thread-same",
      turn_id: "turn-repair-2",
      worktree_path: root,
      repair_count: 2,
      repair_history: [{
        repair_count: 2,
        turn_id: "turn-repair-2",
        started_at: "2026-09-02T00:00:00.000Z",
        ended_at: null,
        original_commit: "a".repeat(40),
        new_commit: null,
        gate_findings: [{ code: "missing_receipt" }],
      }],
      transition_ids: ["authoring_repair"],
    } },
  });
  const adapter = {
    async readThread() {
      return { thread: { turns: [{ id: "turn-repair-2", status: "interrupted", items: [] }] } };
    },
  };
  try {
    const harvested = await harvestGoalAuthors({ config, stateDir, adapter });
    const pending = harvested.state.tasks[0];
    assert.equal(pending.state, "repair_requested");
    assert.equal(pending.repair_count, 2);
    assert.equal(pending.repair_resume_pending, true);
    assert.equal(pending.thread_id, "thread-same");
    assert.equal(pending.worktree_path, root);

    const starts = [];
    const resumed = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      adapter: {
        async startRepairTurn(input) {
          starts.push(input);
          return { thread_id: input.threadId, turn_id: "turn-repair-2-resume-1" };
        },
      },
    });
    const active = resumed.state.tasks[0];
    assert.equal(starts.length, 1);
    assert.equal(active.state, "authoring_repair");
    assert.equal(active.repair_count, 2);
    assert.equal(active.repair_resume_count, 1);
    assert.equal(active.repair_resume_pending, false);
    assert.equal(active.repair_history[0].turn_id, "turn-repair-2");
    assert.deepEqual(active.repair_history[0].resume_turn_ids, ["turn-repair-2-resume-1"]);
    const repairDir = path.join(stateDir, "authors", "goal-fixture-41111-a1");
    assert.equal(existsSync(path.join(repairDir, "repair-2-resume-1-prompt.txt")), true);
    assert.equal(existsSync(path.join(repairDir, "repair-2-resume-1-output-schema.json")), true);

    const repeated = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      adapter: { async startRepairTurn() { throw new Error("must not duplicate repair continuation"); } },
    });
    assert.equal(repeated.dispatched.length, 0);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a missing repair continuation replaces only the thread and preserves its safe worktree", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_attempts: 3, max_repairs: 2 };
  const first = await dispatchGoalAuthors({
    config,
    stateDir,
    slots: 1,
    adapter: { async createAuthorTask() { return { thread_id: "thread-old", turn_id: "turn-original" }; } },
  });
  const original = first.dispatched[0];
  const store = new GoalEventStore({ stateDir });
  store.append({
    event_id: "fixture-missing-repair-continuation",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "authoring_repair",
      turn_id: "turn-repair-resume-missing",
      repair_count: 1,
      repair_resume_count: 1,
      repair_history: [{
        repair_count: 1,
        turn_id: "turn-repair",
        resume_turn_ids: ["turn-repair-resume-missing"],
        started_at: "2026-09-02T00:00:00.000Z",
        ended_at: null,
        original_commit: original.author_base_commit,
        new_commit: null,
        gate_findings: [{ code: "missing_receipt" }],
      }],
      transition_ids: [...original.transition_ids, "authoring_repair", "repair-resume-1"],
    } },
  });
  try {
    const harvested = await harvestGoalAuthors({
      config,
      stateDir,
      adapter: {
        async readThread() {
          return { thread: { turns: [{ id: "turn-original", status: "interrupted", items: [] }] } };
        },
      },
    });
    const failed = harvested.state.tasks[0];
    assert.equal(failed.state, "retryable_failure");
    assert.equal(failed.failure_code, "GOAL_REPAIR_RESUME_FAILED");
    assert.equal(failed.thread_id, "thread-old");
    assert.equal(failed.worktree_path, original.worktree_path);

    let repairStarts = 0;
    let replacements = 0;
    const resumed = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      adapter: {
        async startRepairTurn() { repairStarts += 1; throw new Error("same thread must not be resumed again"); },
        async createAuthorTask() {
          replacements += 1;
          return { thread_id: "thread-replacement", turn_id: "turn-replacement" };
        },
      },
    });
    const replacement = resumed.state.tasks[0];
    assert.equal(repairStarts, 0);
    assert.equal(replacements, 1);
    assert.equal(replacement.state, "authoring");
    assert.equal(replacement.worktree_path, original.worktree_path);
    assert.equal(replacement.thread_id, "thread-replacement");
    assert.deepEqual(replacement.previous_thread_ids, ["thread-old"]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a repeated missing turn id advances from one repair continuation to replacement without event conflict", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_attempts: 3, max_repairs: 2 };
  const first = await dispatchGoalAuthors({
    config,
    stateDir,
    slots: 1,
    adapter: { async createAuthorTask() { return { thread_id: "thread-same", turn_id: "turn-original" }; } },
  });
  const store = new GoalEventStore({ stateDir });
  const original = first.dispatched[0];
  store.append({
    event_id: "fixture-repeated-missing-turn",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "authoring_repair",
      turn_id: "turn-missing",
      repair_count: 1,
      repair_resume_count: 0,
      repair_history: [{ repair_count: 1, turn_id: "turn-missing", resume_turn_ids: [], started_at: "2026-09-02T00:00:00.000Z" }],
      transition_ids: [...original.transition_ids, "repair-1-authoring"],
    } },
  });
  const missingThread = { thread: { turns: [{ id: "turn-original", status: "interrupted", items: [] }] } };
  try {
    const firstHarvest = await harvestGoalAuthors({
      config,
      stateDir,
      adapter: { async readThread() { return missingThread; } },
    });
    assert.equal(firstHarvest.state.tasks[0].state, "repair_requested");
    assert.equal(firstHarvest.state.tasks[0].repair_resume_pending, true);

    const resumed = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      adapter: {
        async startRepairTurn() {
          return { thread_id: "thread-same", turn_id: "turn-missing" };
        },
      },
    });
    assert.equal(resumed.state.tasks[0].repair_resume_count, 1);
    assert.equal(resumed.state.tasks[0].turn_id, "turn-missing");

    const secondHarvest = await harvestGoalAuthors({
      config,
      stateDir,
      adapter: { async readThread() { return missingThread; } },
    });
    assert.equal(secondHarvest.state.tasks[0].state, "retryable_failure");
    assert.equal(secondHarvest.state.tasks[0].failure_code, "GOAL_REPAIR_RESUME_FAILED");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a timed-out repair is interrupted then offered one same-thread continuation", async () => {
  const { root, stateDir, config } = fixture();
  config.author_timeout_seconds = 60;
  config.retry_policy = { max_repairs: 2 };
  const store = new GoalEventStore({ stateDir });
  const original = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-timed-out-repair",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "authoring_repair",
      thread_id: "thread-same",
      turn_id: "turn-repair-2",
      worktree_path: root,
      repair_count: 2,
      repair_history: [{ repair_count: 2, turn_id: "turn-repair-2", started_at: "2026-09-02T00:00:00.000Z" }],
      dispatched_at: "2026-09-02T00:00:00.000Z",
      transition_ids: ["authoring_repair"],
    } },
  });
  const interrupts = [];
  try {
    const harvested = await harvestGoalAuthors({
      config,
      stateDir,
      adapter: {
        async readThread() {
          return { thread: { turns: [{ id: "turn-repair-2", status: "inProgress", items: [] }] } };
        },
        async interruptTurn(input) { interrupts.push(input); },
      },
      now: () => new Date("2026-09-02T00:02:00.000Z"),
    });
    const pending = harvested.state.tasks[0];
    assert.deepEqual(interrupts, [{ threadId: "thread-same", turnId: "turn-repair-2" }]);
    assert.equal(pending.state, "repair_requested");
    assert.equal(pending.repair_count, 2);
    assert.equal(pending.repair_resume_pending, true);
    assert.equal(pending.failure_code, "GOAL_REPAIR_TIMEOUT_RESUME_REQUIRED");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("an active repair timeout is measured from the current repair turn, not the original author dispatch", async () => {
  const { root, stateDir, config } = fixture();
  config.author_timeout_seconds = 60;
  config.retry_policy = { max_repairs: 2 };
  const store = new GoalEventStore({ stateDir });
  const original = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-recent-repair-with-old-dispatch",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "authoring_repair",
      thread_id: "thread-same",
      turn_id: "turn-repair-current",
      worktree_path: root,
      repair_count: 1,
      repair_started_at: "2026-09-02T00:01:30.000Z",
      repair_history: [{ repair_count: 1, turn_id: "turn-repair-current", started_at: "2026-09-02T00:01:30.000Z" }],
      dispatched_at: "2026-09-02T00:00:00.000Z",
      transition_ids: ["authoring_repair"],
    } },
  });
  const interrupts = [];
  try {
    const harvested = await harvestGoalAuthors({
      config,
      stateDir,
      adapter: {
        async readThread() {
          return { thread: { turns: [{ id: "turn-repair-current", status: "inProgress", items: [] }] } };
        },
        async interruptTurn(input) { interrupts.push(input); },
      },
      now: () => new Date("2026-09-02T00:02:00.000Z"),
    });
    assert.deepEqual(interrupts, []);
    assert.equal(harvested.failures.length, 0);
    assert.equal(harvested.state.tasks[0].state, "authoring_repair");
    assert.equal(harvested.state.tasks[0].turn_id, "turn-repair-current");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a review failure requests repair in the original visible thread and worktree", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_repairs: 2 };
  const store = new GoalEventStore({ stateDir });
  const original = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-review-author",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "authoring",
      thread_id: "thread-same",
      turn_id: "turn-original",
      worktree_path: root,
      transition_ids: ["authoring"],
    } },
  });
  const report = { schema_version: 1, commit_sha: "a".repeat(40) };
  const adapter = {
    async readThread() {
      return { thread: { turns: [{ id: "turn-original", status: "completed", items: [{ type: "agentMessage", text: JSON.stringify(report) }] }] } };
    },
  };
  try {
    const harvested = await harvestGoalAuthors({
      config,
      stateDir,
      adapter,
      auditHybridSearchFn: () => [],
      auditUuidsFn: () => [],
      verifySourcesFn: async () => [],
      validateReportFn: () => ({ valid: true, errors: [] }),
      reviewFn: () => {
        const error = new Error("four-file gate failed");
        error.code = "GOAL_AUTHOR_RESULT_INVALID";
        error.details = { findings: [{ code: "unauthorized_file", files: ["shared.yaml"] }] };
        throw error;
      },
    });
    const repair = harvested.state.tasks[0];
    assert.equal(repair.state, "repair_requested");
    assert.equal(repair.thread_id, "thread-same");
    assert.equal(repair.worktree_path, root);
    assert.equal(repair.repair_count, 0);
    assert.deepEqual(repair.pending_gate_findings, [{ code: "unauthorized_file", files: ["shared.yaml"] }]);

    const starts = [];
    const dispatched = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      adapter: {
        async startRepairTurn(input) {
          starts.push(input);
          return { thread_id: input.threadId, turn_id: "turn-repair-1" };
        },
      },
    });
    assert.equal(starts.length, 1);
    assert.equal(starts[0].threadId, "thread-same");
    assert.equal(starts[0].worktreePath, root);
    assert.match(starts[0].prompt, /unauthorized_file/u);
    assert.match(starts[0].prompt, /goal-uuid-search\.mjs query/u);
    assert.match(starts[0].prompt, /goal-uuid-search\.mjs direct-read/u);
    assert.ok(starts[0].outputSchema.required.includes("hybrid_search_receipt_ids"));
    const repairDir = path.join(stateDir, "authors", "goal-fixture-41111-a1");
    assert.equal(existsSync(path.join(repairDir, "repair-1-prompt.txt")), true);
    assert.deepEqual(
      JSON.parse(readFileSync(path.join(repairDir, "repair-1-output-schema.json"), "utf8")),
      starts[0].outputSchema,
    );
    assert.equal(dispatched.state.tasks[0].state, "authoring_repair");
    assert.equal(dispatched.state.tasks[0].repair_count, 1);
    assert.equal(dispatched.state.tasks[0].repair_history[0].original_commit, report.commit_sha);

    const repeated = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      adapter: { async startRepairTurn() { throw new Error("must not duplicate repair turn"); } },
    });
    assert.equal(repeated.dispatched.length, 0);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("repair limit is the point where a result becomes retryable for replacement", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_repairs: 1 };
  const store = new GoalEventStore({ stateDir });
  const original = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-repair-limit",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "author_review",
      thread_id: "thread-same",
      turn_id: "turn-repair-1",
      worktree_path: root,
      report_path: path.join(stateDir, "report.json"),
      repair_count: 1,
      transition_ids: ["author_review"],
    } },
  });
  writeFileSync(path.join(stateDir, "report.json"), `${JSON.stringify({ schema_version: 1, commit_sha: "b".repeat(40) })}\n`);
  try {
    const result = await harvestGoalAuthors({
      config,
      stateDir,
      adapter: {},
      auditHybridSearchFn: () => [],
      auditUuidsFn: () => [],
      verifySourcesFn: async () => [],
      validateReportFn: () => ({ valid: true, errors: [] }),
      reviewFn: () => { const error = new Error("still invalid"); error.code = "GOAL_AUTHOR_RESULT_INVALID"; error.details = { findings: [{ code: "bad" }] }; throw error; },
    });
    assert.equal(result.state.tasks[0].state, "retryable_failure");
    assert.equal(result.state.tasks[0].failure_code, "GOAL_REPAIR_LIMIT_REACHED");
    assert.equal(result.state.tasks[0].thread_id, "thread-same");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("failed repair continuation replaces only the thread and preserves the safe worktree", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_attempts: 3, max_repairs: 2 };
  const first = await dispatchGoalAuthors({
    config,
    stateDir,
    slots: 1,
    adapter: { async createAuthorTask() { return { thread_id: "thread-old", turn_id: "turn-old" }; } },
  });
  const worktreePath = first.dispatched[0].worktree_path;
  const markerPath = path.join(worktreePath, "library/pcrs/category/item/manifest.yaml");
  writeFileSync(markerPath, "preserved repair bytes\n");
  const store = new GoalEventStore({ stateDir });
  const active = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-resume-failed",
    type: "task_replaced",
    payload: { task: {
      ...active,
      state: "retryable_failure",
      failure_code: "GOAL_REPAIR_RESUME_FAILED",
      repair_count: 2,
      repair_resume_count: 1,
      transition_ids: [...active.transition_ids, "repair-resume-failed"],
    } },
  });
  const starts = [];
  try {
    const result = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      adapter: {
        async createAuthorTask(input) {
          starts.push(input);
          return { thread_id: `thread-new-${starts.length}`, turn_id: `turn-new-${starts.length}` };
        },
      },
    });
    const replacement = result.state.tasks[0];
    assert.equal(starts.length, 1);
    assert.equal(starts[0].worktreePath, worktreePath);
    assert.equal(replacement.worktree_path, worktreePath);
    assert.equal(readFileSync(markerPath, "utf8"), "preserved repair bytes\n");
    assert.equal(replacement.thread_id, "thread-new-1");
    assert.deepEqual(replacement.previous_thread_ids, ["thread-old"]);
    assert.equal(replacement.continuing_repair_after_thread_replacement, true);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("failed repair continuation never falls back to the same thread when its worktree is unsafe", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_attempts: 3, max_repairs: 2 };
  const first = await dispatchGoalAuthors({
    config,
    stateDir,
    slots: 1,
    adapter: { async createAuthorTask() { return { thread_id: "thread-old", turn_id: "turn-old" }; } },
  });
  const oldWorktree = first.dispatched[0].worktree_path;
  const unauthorized = path.join(oldWorktree, "unsafe-repair-artifact.txt");
  writeFileSync(unauthorized, "preserve me\n");
  const store = new GoalEventStore({ stateDir });
  const active = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-unsafe-repair-resume-failed",
    type: "task_replaced",
    payload: { task: {
      ...active,
      state: "retryable_failure",
      failure_code: "GOAL_REPAIR_RESUME_FAILED",
      repair_count: 1,
      repair_resume_count: 1,
      transition_ids: [...active.transition_ids, "repair-resume-failed"],
    } },
  });
  let repairStarts = 0;
  let replacements = 0;
  try {
    const result = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      adapter: {
        async startRepairTurn() {
          repairStarts += 1;
          return { thread_id: "thread-old", turn_id: "turn-same-thread" };
        },
        async createAuthorTask() {
          replacements += 1;
          return { thread_id: "thread-replacement", turn_id: "turn-replacement" };
        },
      },
    });
    const replacement = result.state.tasks[0];
    assert.equal(repairStarts, 0);
    assert.equal(replacements, 1);
    assert.notEqual(replacement.worktree_path, oldWorktree);
    assert.equal(replacement.thread_id, "thread-replacement");
    assert.deepEqual(replacement.previous_thread_ids, ["thread-old"]);
    assert.equal(replacement.attempt, 2);
    assert.equal(readFileSync(unauthorized, "utf8"), "preserve me\n");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("repair-limit replacement reuses a worktree only when its dirty paths remain authorized", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_attempts: 3, max_repairs: 2 };
  const first = await dispatchGoalAuthors({
    config,
    stateDir,
    slots: 1,
    adapter: { async createAuthorTask() { return { thread_id: "thread-old", turn_id: "turn-old" }; } },
  });
  const worktreePath = first.dispatched[0].worktree_path;
  const originalContentBase = first.dispatched[0].author_base_commit;
  assert.equal(first.dispatched[0].author_content_base_commit, originalContentBase);
  const allowedPath = path.join(worktreePath, "library/pcrs/category/item/manifest.yaml");
  for (const file of first.dispatched[0].allowed_files) {
    writeFileSync(path.join(worktreePath, file), `authored ${path.basename(file)}\n`);
  }
  git(worktreePath, ["add", ...first.dispatched[0].allowed_files]);
  git(worktreePath, ["commit", "-qm", "author fixture"]);
  const authoredCommit = git(worktreePath, ["rev-parse", "HEAD"]);
  const store = new GoalEventStore({ stateDir });
  const active = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-repair-limit-safe-worktree",
    type: "task_replaced",
    payload: { task: {
      ...active,
      state: "retryable_failure",
      failure_code: "GOAL_REPAIR_LIMIT_REACHED",
      repair_count: 2,
      author_commit: authoredCommit,
      last_author_commit: authoredCommit,
      author_base_commit: authoredCommit,
      author_content_base_commit: undefined,
      repair_history: [{ repair_count: 1, original_commit: authoredCommit, new_commit: authoredCommit }],
      transition_ids: [...active.transition_ids, "repair-limit"],
    } },
  });
  const starts = [];
  try {
    const result = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      adapter: {
        async createAuthorTask(input) {
          starts.push(input);
          return { thread_id: "thread-new", turn_id: "turn-new" };
        },
      },
    });
    assert.equal(starts[0].worktreePath, worktreePath);
    assert.equal(result.state.tasks[0].worktree_path, worktreePath);
    assert.equal(readFileSync(allowedPath, "utf8"), "authored manifest.yaml\n");
    assert.equal(result.state.tasks[0].author_content_base_commit, originalContentBase);
    assert.equal(result.state.tasks[0].author_base_commit, authoredCommit);
    assert.equal(result.state.tasks[0].attempt, 2);

    const firstReplacement = result.state.tasks[0];
    store.append({
      event_id: "fixture-repair-limit-safe-worktree-again",
      type: "task_replaced",
      payload: { task: {
        ...firstReplacement,
        state: "retryable_failure",
        failure_code: "GOAL_REPAIR_LIMIT_REACHED",
        transition_ids: [...firstReplacement.transition_ids, "repair-limit-again"],
      } },
    });
    const second = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      adapter: {
        async createAuthorTask(input) {
          starts.push(input);
          return { thread_id: `thread-new-${starts.length}`, turn_id: `turn-new-${starts.length}` };
        },
      },
    });
    assert.equal(starts.length, 2);
    assert.equal(second.state.tasks[0].state, "authoring");
    assert.equal(second.state.tasks[0].thread_id, "thread-new-2");
    assert.deepEqual(second.state.tasks[0].previous_thread_ids, ["thread-old", "thread-new"]);
    assert.equal(second.state.tasks[0].author_content_base_commit, originalContentBase);
    assert.equal(second.state.tasks[0].attempt, 3);

    const secondReplacement = second.state.tasks[0];
    store.append({
      event_id: "fixture-repair-limit-safe-worktree-max-attempts",
      type: "task_replaced",
      payload: { task: {
        ...secondReplacement,
        state: "retryable_failure",
        failure_code: "GOAL_REPAIR_LIMIT_REACHED",
        transition_ids: [...secondReplacement.transition_ids, "repair-limit-max-attempts"],
      } },
    });
    const exhausted = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      adapter: { async createAuthorTask() { throw new Error("max_attempts must prevent another replacement thread"); } },
    });
    assert.equal(exhausted.dispatched.length, 0);
    assert.equal(exhausted.state.tasks[0].state, "retryable_failure");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("repair-limit replacement preserves but does not reuse an unauthorized dirty worktree", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_attempts: 3, max_repairs: 2 };
  const first = await dispatchGoalAuthors({
    config,
    stateDir,
    slots: 1,
    adapter: { async createAuthorTask() { return { thread_id: "thread-old", turn_id: "turn-old" }; } },
  });
  const oldWorktree = first.dispatched[0].worktree_path;
  const unauthorized = path.join(oldWorktree, "unauthorized.txt");
  writeFileSync(unauthorized, "must remain preserved\n");
  const store = new GoalEventStore({ stateDir });
  const active = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-repair-limit-unsafe-worktree",
    type: "task_replaced",
    payload: { task: {
      ...active,
      state: "retryable_failure",
      failure_code: "GOAL_REPAIR_LIMIT_REACHED",
      repair_count: 2,
      transition_ids: [...active.transition_ids, "repair-limit"],
    } },
  });
  try {
    const result = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      adapter: { async createAuthorTask() { return { thread_id: "thread-new", turn_id: "turn-new" }; } },
    });
    assert.notEqual(result.state.tasks[0].worktree_path, oldWorktree);
    assert.equal(readFileSync(unauthorized, "utf8"), "must remain preserved\n");
    assert.equal(result.state.tasks[0].attempt, 2);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
