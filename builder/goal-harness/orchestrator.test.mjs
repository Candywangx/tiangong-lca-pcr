import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
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
      }],
      verifySourcesFn: async () => [],
      reviewFn: () => { reviewCount += 1; return { valid: true, counts: { total: 2, matched: 1, unresolved: 1 } }; },
    });
    assert.equal(first.valid_results.length, 1);
    assert.equal(first.state.tasks[0].state, "valid_result");
    assert.equal(first.state.tasks[0].author_commit, report.commit_sha);
    assert.deepEqual(first.state.verified_common_uuids.map((entry) => entry.uuid), ["11111111-1111-4111-8111-111111111111"]);
    assert.equal(reviewCount, 1);
    const second = await harvestGoalAuthors({ config, stateDir, adapter, reviewFn: () => { reviewCount += 1; } });
    assert.equal(second.valid_results.length, 0);
    assert.equal(reviewCount, 1);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("harvest interrupts an expired visible author and makes the target retryable", async () => {
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
    assert.equal(result.state.tasks[0].state, "retryable_failure");
    assert.equal(result.state.tasks[0].failure_code, "GOAL_AUTHOR_TIMEOUT");
    assert.deepEqual(interrupts, [{ threadId: "thread-expired", turnId: "turn-expired" }]);
    assert.equal(result.state.tasks[0].worktree_path, root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
