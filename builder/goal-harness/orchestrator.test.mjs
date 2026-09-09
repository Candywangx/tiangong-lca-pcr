import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { dispatchGoalAuthors, harvestGoalAuthors } from "./orchestrator.mjs";
import { GoalEventStore } from "./event-store.mjs";
import { activeAuthorCount } from "./scheduler.mjs";
import { registerMaterial, resolveMaterialsRoot } from "../lib/shared-materials.mjs";

function boundaryReport(task, commit) {
  return {
    schema_version: 1, cpc_code: task.cpc_code, product_name_en: "Example", product_name_zh: "示例", pcr_path: task.pcr_path,
    queue_action: task.queue_action, files: task.allowed_files, sources: [], hybrid_search_receipt_ids: [], uuid_audits: [], rejected_uuid_candidates: [],
    inventory: { total_rows: 0, matched_rows: 0, unresolved_rows: 0, unresolved: [] }, reference_product_uuid_confirmed: false, ranges: [],
    bilingual: { aligned: false, en_inventory_rows: 0, zh_inventory_rows: 0 }, structured_sync: { first_run_ok: false, second_run_clean: false, schema_valid: false },
    validate: { ok: false, exit_code: 0, known_shared_artifact_only: false, summary: "Not run: boundary review requested." },
    complexity_justification: null, cartesian_expansion_review: null, methodology_necessity_approved: null, commit_sha: commit, unresolved_issues: [],
    boundary_review: { reason_code: "semantic_boundary_unresolved", summary: "Classification alone does not establish a distinct methodology boundary.", questions: ["Is a separate PCR needed?"], evidence: [{ locator: "https://example.invalid/source", observation: "Multiple product routes overlap." }] },
  };
}

for (const repair of [false, true]) test(`explicit boundary referral preserves partial work and is idempotent (repair=${repair})`, async (t) => {
  const { root, stateDir, config } = fixture({ taskCount: 7 });
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const store = new GoalEventStore({ stateDir });
  const first = await dispatchGoalAuthors({ config, stateDir, slots: 1, adapter: { async createAuthorTask() { return { thread_id: "visible", turn_id: "terminal" }; } } });
  let task = first.dispatched[0];
  const baseline = git(task.worktree_path, ["rev-parse", "HEAD"]);
  writeFileSync(path.join(task.worktree_path, task.allowed_files[0]), "preserved partial\n");
  if (repair) {
    task = { ...task, state: "authoring_repair", repair_count: 1, repair_history: [{ ended_at: null }] };
    store.append({ event_id: "repair-fixture", type: "task_replaced", payload: { task } });
  }
  for (const ready of store.rebuild().tasks.slice(1, 6)) store.append({ event_id: `${ready.id}-ready`, type: "task_replaced", payload: { task: { ...ready, state: "valid_result", author_commit: baseline, valid_at: "2026-01-01" } } });
  store.append({ event_id: "stopped-referral", type: "scheduling_stopped", payload: {} });
  const report = boundaryReport(task, baseline);
  let reads = 0;
  const adapter = { async readThread() { reads++; return { thread: { turns: [{ id: task.turn_id, status: "completed", items: [{ type: "agentMessage", text: JSON.stringify(report) }] }] } }; } };
  const harvested = await harvestGoalAuthors({ config, stateDir, adapter, reviewFn() { throw new Error("referral must not run acceptance"); } });
  const referred = harvested.state.tasks[0];
  assert.equal(referred.state, "manual_review");
  assert.equal(referred.queue_action, "manual_review");
  assert.equal(referred.boundary_review_audit.original_queue_action, "promote_legacy");
  assert.equal(referred.boundary_review_audit.status, "unadjudicated");
  assert.equal(referred.boundary_review_audit.baseline_commit, baseline);
  assert.equal(referred.thread_id, task.thread_id);
  assert.equal(referred.worktree_path, task.worktree_path);
  assert.equal(readFileSync(path.join(task.worktree_path, task.allowed_files[0]), "utf8"), "preserved partial\n");
  assert.deepEqual(JSON.parse(readFileSync(referred.report_path, "utf8")), report);
  assert.deepEqual(harvested.valid_results, []);
  assert.deepEqual(harvested.failures, []);
  assert.equal(harvested.snapshot, null);
  assert.equal(harvested.state.stopped, true);
  const sequence = harvested.state.last_event_sequence;
  assert.equal((await harvestGoalAuthors({ config, stateDir, adapter })).state.last_event_sequence, sequence);
  assert.equal(reads, 1);
  const refill = await dispatchGoalAuthors({ config, stateDir, slots: 1, resumeStopped: true, adapter: { async createAuthorTask() { return { thread_id: "next", turn_id: "next-turn" }; } } });
  assert.equal(refill.dispatched.length, 1);
  assert.equal(refill.dispatched[0].id, "cpc:3.0:41117");
});

for (const authorState of ["authoring", "authoring_repair"]) for (const status of ["completed", "inProgress", "pending"]) test(`coordinator hold preserves ${status} ${authorState} without acceptance or timeout`, async (t) => {
  const { root, stateDir, config } = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  config.author_timeout_seconds = 1;
  const first = await dispatchGoalAuthors({ config, stateDir, slots: 1, adapter: { async createAuthorTask() { return { thread_id: "held", turn_id: "held-turn" }; } } });
  const task = { ...first.dispatched[0], state: authorState, coordinator_hold: { reason: "review" }, dispatched_at: "2000-01-01T00:00:00Z", updated_at: "2000-01-01T00:00:00Z", repair_started_at: "2000-01-01T00:00:00Z" };
  const store = new GoalEventStore({ stateDir });
  store.append({ event_id: "hold-fixture", type: "task_replaced", payload: { task } });
  const report = boundaryReport(task, git(task.worktree_path, ["rev-parse", "HEAD"]));
  const adapter = { async readThread() { return { thread: { turns: [{ id: task.turn_id, status, items: [{ type: "agentMessage", text: JSON.stringify(report) }] }] } }; }, async interruptTurn() { assert.fail("held author must not be interrupted"); } };
  const result = await harvestGoalAuthors({ config, stateDir, adapter, reviewFn() { assert.fail("held author must not be reviewed"); } });
  assert.deepEqual(result.failures, []);
  assert.deepEqual(result.valid_results, []);
  const held = result.state.tasks[0];
  assert.equal(held.state, status === "completed" ? "author_review" : authorState);
  assert.equal(activeAuthorCount([held]), status === "completed" ? 0 : 1);
  if (status === "completed") {
    assert.deepEqual(JSON.parse(readFileSync(held.report_path, "utf8")), report);
    const again = await harvestGoalAuthors({ config, stateDir, adapter: {}, reviewFn() { assert.fail("held review repeated"); } });
    assert.equal(again.state.last_event_sequence, result.state.last_event_sequence);
    store.append({ event_id: "release-fixture", type: "task_replaced", payload: { task: { ...held, coordinator_hold: null } } });
    assert.equal((await harvestGoalAuthors({ config, stateDir, adapter: {} })).state.tasks[0].state, "manual_review");
  }
});

for (const infrastructure of [false, true]) test(`compiled continuation permits explicit boundary referral (infrastructure=${infrastructure})`, async (t) => {
  const { root, stateDir, config } = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const store = new GoalEventStore({ stateDir });
  const task = { ...store.rebuild().tasks[0], state: "repair_requested", thread_id: "same", worktree_path: root, infrastructure_resume_pending: infrastructure };
  store.append({ event_id: "prompt-fixture", type: "task_replaced", payload: { task } });
  let prompt;
  await dispatchGoalAuthors({ config, stateDir, slots: 1, adapter: { async startRepairTurn(input) { prompt = input.prompt; return { thread_id: "same", turn_id: "continued" }; } } });
  assert.match(prompt, /For a completed PCR/u);
  assert.match(prompt, /For an explicit boundary_review referral/u);
  assert.doesNotMatch(prompt, /Fix every structured gate finding below, rerun/u);
  assert.doesNotMatch(prompt, /Resume from the files already present, complete all required checks/u);
});

for (const heldState of ["queued", "preflight", "repair_requested", "retryable_failure"]) test(`held ${heldState} excluded from dispatch and resume preview`, async (t) => {
  const { root, stateDir, config } = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const store = new GoalEventStore({ stateDir });
  const task = { ...store.rebuild().tasks[0], state: heldState, coordinator_hold: { reason: "operator review" }, attempt: 1, repair_count: 2, repair_resume_count: 1, failure_code: "GOAL_REPAIR_LIMIT_REACHED", worktree_path: root, thread_id: heldState === "preflight" ? null : "held-thread" };
  store.append({ event_id: "held-dispatch-fixture", type: "task_replaced", payload: { task } });
  assert.deepEqual((await dispatchGoalAuthors({ config, stateDir, slots: 1, adapter: {}, resumeStopped: true, dryRun: true })).would_dispatch, []);
  assert.deepEqual((await dispatchGoalAuthors({ config, stateDir, slots: 1, adapter: {}, resumeStopped: true })).dispatched, []);
  assert.deepEqual(store.rebuild().tasks[0], task);
});

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

for (const status of ["completed", "failed", "interrupted"]) test(`held malformed ${status} terminal observation is retained until release`, async (t) => {
  const { root, stateDir, config } = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const store = new GoalEventStore({ stateDir });
  const task = { ...store.rebuild().tasks[0], state: "authoring_repair", coordinator_hold: { reason: "inspection" }, thread_id: "held", turn_id: "held-terminal", worktree_path: root, repair_count: 2 };
  store.append({ event_id: "malformed-hold", type: "task_replaced", payload: { task } });
  const raw = "partial boundary discussion, not JSON";
  const adapter = { async readThread() { return { thread: { turns: [{ id: task.turn_id, status, items: [{ type: "agentMessage", text: raw }], error: { code: "usageLimitExceeded", message: "usage limit" } }] } }; } };
  const result = await harvestGoalAuthors({ config, stateDir, adapter });
  const held = result.state.tasks[0];
  assert.equal(held.state, "author_review");
  assert.equal(held.author_turn_observation.status, status);
  assert.equal(held.author_turn_observation.raw_final_message, raw);
  assert.equal(JSON.parse(readFileSync(held.report_path, "utf8")), null);
  assert.deepEqual(result.failures, []);
  assert.equal(activeAuthorCount([held]), 0);
  await harvestGoalAuthors({ config, stateDir, adapter: {} });
  store.append({ event_id: "malformed-release", type: "task_replaced", payload: { task: { ...held, coordinator_hold: null } } });
  const released = await harvestGoalAuthors({ config, stateDir, adapter: {} });
  assert.equal(released.valid_results.length, 0);
  assert.equal(released.failures.length, 1);
});

for (const repairCount of [0, 2]) test(`released held failed report preserves infrastructure priority at repair count ${repairCount}`, async (t) => {
  const { root, stateDir, config } = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const store = new GoalEventStore({ stateDir });
  const task = { ...store.rebuild().tasks[0], state: "authoring_repair", coordinator_hold: { reason: "inspection" }, thread_id: "held", turn_id: "held-failed", worktree_path: root, repair_count: repairCount };
  store.append({ event_id: "held-failed-infrastructure", type: "task_replaced", payload: { task } });
  const report = boundaryReport(task, git(root, ["rev-parse", "HEAD"]));
  report.files = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map((file) => `${task.pcr_path}/${file}`);
  report.inventory.unresolved = [{ row_id: "r1", reason_code: "tiangong_cli_unavailable" }];
  const result = await harvestGoalAuthors({ config, stateDir, adapter: { async readThread() { return { thread: { turns: [{ id: task.turn_id, status: "failed", items: [{ type: "agentMessage", text: JSON.stringify(report) }] }] } }; } } });
  const held = result.state.tasks[0];
  assert.equal(held.state, "author_review");
  assert.deepEqual(JSON.parse(readFileSync(held.report_path, "utf8")), report);
  assert.deepEqual(result.failures, []);
  store.append({ event_id: "held-infrastructure-release", type: "task_replaced", payload: { task: { ...held, coordinator_hold: null } } });
  const released = await harvestGoalAuthors({ config, stateDir, adapter: {} });
  assert.equal(released.valid_results.length, 0);
  assert.equal(released.failures.length, 1);
  assert.equal(released.state.tasks[0].state, "retryable_failure");
  assert.equal(released.state.tasks[0].failure_code, "GOAL_REPORTED_UUID_INFRASTRUCTURE_UNAVAILABLE");
  assert.equal(released.state.tasks[0].repair_count, repairCount);
});

test("held missing turn remains live until terminal evidence exists", async (t) => {
  const { root, stateDir, config } = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const store = new GoalEventStore({ stateDir });
  const task = { ...store.rebuild().tasks[0], state: "authoring", coordinator_hold: { reason: "inspect" }, thread_id: "held", turn_id: "omitted", worktree_path: root };
  store.append({ event_id: "held-missing", type: "task_replaced", payload: { task } });
  const result = await harvestGoalAuthors({ config, stateDir, adapter: { async readThread() { return { thread: { turns: [] } }; } } });
  assert.deepEqual(result.state.tasks[0], task);
  assert.equal(activeAuthorCount(result.state.tasks), 1);
});

test("new repair completion does not inherit released held-turn failure", async (t) => {
  const { root, stateDir, config } = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const first = await dispatchGoalAuthors({ config, stateDir, slots: 1, adapter: { async createAuthorTask() { return { thread_id: "same", turn_id: "new-completed" }; } } });
  const task = { ...first.dispatched[0], state: "authoring_repair", author_turn_observation: { turn_id: "old-held", status: "failed", extracted_status: "failed" } };
  new GoalEventStore({ stateDir }).append({ event_id: "released-prior-observation", type: "task_replaced", payload: { task } });
  const report = boundaryReport(task, git(task.worktree_path, ["rev-parse", "HEAD"]));
  const result = await harvestGoalAuthors({ config, stateDir, adapter: { async readThread() { return { thread: { turns: [{ id: task.turn_id, status: "completed", items: [{ type: "agentMessage", text: JSON.stringify(report) }] }] } }; } } });
  assert.equal(result.state.tasks[0].state, "manual_review");
});

for (const variant of ["malformed", "unsafe", "prose", "null", "infrastructure", "infrastructure-limit", "baseline"]) test(`referral preserves ordinary gates: ${variant}`, async (t) => {
  const { root, stateDir, config } = fixture();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const first = await dispatchGoalAuthors({ config, stateDir, slots: 1, adapter: { async createAuthorTask() { return { thread_id: "gate", turn_id: "gate-turn" }; } } });
  let task = first.dispatched[0];
  const report = boundaryReport(task, git(task.worktree_path, ["rev-parse", "HEAD"]));
  if (variant === "malformed") report.boundary_review = {};
  if (variant === "unsafe") writeFileSync(path.join(task.worktree_path, "unauthorized"), "must not accept");
  if (variant === "prose") { delete report.boundary_review; report.unresolved_issues = ["semantic_boundary_unresolved: please refer for manual review"]; }
  if (variant === "null") report.boundary_review = null;
  if (variant.startsWith("infrastructure")) report.inventory.unresolved = [{ row_id: "r1", reason_code: "tiangong_cli_unavailable" }];
  if (variant === "infrastructure-limit") {
    task = { ...task, repair_count: 2 };
    new GoalEventStore({ stateDir }).append({ event_id: "repair-limit-infrastructure", type: "task_replaced", payload: { task } });
  }
  if (variant === "baseline") {
    writeFileSync(path.join(task.worktree_path, "policy.txt"), "unauthorized committed earlier\n");
    git(task.worktree_path, ["add", "policy.txt"]); git(task.worktree_path, ["commit", "-qm", "unauthorized runtime baseline"]);
    report.commit_sha = git(task.worktree_path, ["rev-parse", "HEAD"]);
    task = { ...task, author_base_commit: report.commit_sha };
    new GoalEventStore({ stateDir }).append({ event_id: "misleading-runtime-base", type: "task_replaced", payload: { task } });
  }
  let normalReview = 0;
  const result = await harvestGoalAuthors({ config, stateDir, adapter: { async readThread() { return { thread: { turns: [{ id: task.turn_id, status: "completed", items: [{ type: "agentMessage", text: JSON.stringify(report) }] }] } }; } }, reviewFn() { normalReview++; throw new Error("ordinary completion gates remain required"); } });
  assert.equal(result.failures.length, 1);
  assert.equal(result.valid_results.length, 0);
  assert.notEqual(result.state.tasks[0].state, "manual_review");
  assert.equal(normalReview, ["prose", "null"].includes(variant) ? 1 : 0);
  assert.equal(result.state.tasks[0].boundary_review_audit, undefined);
  if (variant.startsWith("infrastructure")) {
    assert.equal(result.state.tasks[0].pending_gate_findings[0].code, "GOAL_REPORTED_UUID_INFRASTRUCTURE_UNAVAILABLE");
    assert.equal(result.state.tasks[0].state, "retryable_failure");
    assert.equal(result.state.tasks[0].failure_code, "GOAL_REPORTED_UUID_INFRASTRUCTURE_UNAVAILABLE");
  }
});

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

test("resume dry run previews dispatch without changing stopped state or the event log", async () => {
  const { root, stateDir, config } = fixture();
  const store = new GoalEventStore({ stateDir });
  store.append({ event_id: "fixture-stopped-for-dry-run", type: "scheduling_stopped", payload: {} });
  const eventsPath = path.join(stateDir, "events.jsonl");
  const eventsBefore = readFileSync(eventsPath, "utf8");
  let createCalls = 0;
  try {
    const result = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      dryRun: true,
      adapter: {
        async createAuthorTask() {
          createCalls += 1;
          return { thread_id: "thread-must-not-exist", turn_id: "turn-must-not-exist" };
        },
      },
    });

    assert.deepEqual(result.would_dispatch, ["cpc:3.0:41111"]);
    assert.equal(result.state.stopped, true);
    assert.equal(new GoalEventStore({ stateDir }).rebuild().stopped, true);
    assert.equal(readFileSync(eventsPath, "utf8"), eventsBefore);
    assert.equal(createCalls, 0);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resume dry run includes retryable in-place repairs without persisting their transition", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_attempts: 6, max_repairs: 2 };
  const store = new GoalEventStore({ stateDir });
  const original = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-retryable-for-dry-run",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "retryable_failure",
      attempt: 1,
      thread_id: "thread-preserved",
      turn_id: "turn-interrupted",
      worktree_path: root,
      author_branch: git(root, ["branch", "--show-current"]),
      author_base_commit: store.rebuild().baseline.commit,
      failure_code: "GOAL_CODEX_USAGE_LIMIT_EXCEEDED",
      repair_count: 0,
      transition_ids: ["fixture-authoring", "fixture-retryable"],
    } },
  });
  store.append({ event_id: "fixture-retryable-dry-run-stopped", type: "scheduling_stopped", payload: {} });
  const eventsPath = path.join(stateDir, "events.jsonl");
  const eventsBefore = readFileSync(eventsPath, "utf8");
  try {
    const result = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      dryRun: true,
      adapter: {},
    });

    assert.deepEqual(result.would_dispatch, ["cpc:3.0:41111"]);
    assert.equal(result.state.stopped, true);
    assert.equal(new GoalEventStore({ stateDir }).rebuild().tasks[0].state, "retryable_failure");
    assert.equal(readFileSync(eventsPath, "utf8"), eventsBefore);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("dispatch infrastructure recheck fails before resume mutates state or creates a visible task", async () => {
  const { root, stateDir, config } = fixture();
  const store = new GoalEventStore({ stateDir });
  store.append({ event_id: "fixture-stopped-before-infrastructure-recheck", type: "scheduling_stopped", payload: {} });
  const eventsPath = path.join(stateDir, "events.jsonl");
  const eventsBefore = readFileSync(eventsPath, "utf8");
  let createCalls = 0;
  try {
    await assert.rejects(
      dispatchGoalAuthors({
        config,
        stateDir,
        slots: 1,
        resumeStopped: true,
        preDispatchCheck() {
          const error = new Error("state_code=100 direct read unavailable after harvest");
          error.code = "GOAL_HYBRID_AUTHENTICATED_PREFLIGHT_FAILED";
          throw error;
        },
        adapter: {
          async createAuthorTask() {
            createCalls += 1;
            return { thread_id: "thread-must-not-exist", turn_id: "turn-must-not-exist" };
          },
        },
      }),
      (error) => error.code === "GOAL_HYBRID_AUTHENTICATED_PREFLIGHT_FAILED",
    );

    const state = new GoalEventStore({ stateDir }).rebuild();
    assert.equal(state.stopped, true);
    assert.equal(state.tasks[0].state, "queued");
    assert.equal(createCalls, 0);
    assert.equal(readFileSync(eventsPath, "utf8"), eventsBefore);
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

test("generation dispatch actually queries shared sources and passes bounded candidates and shared write root", async () => {
  const { root, stateDir, config } = fixture({ taskCount: 2 });
  const materialsRoot = path.join(root, "library/.pcr-builder-state/shared-evidence");
  config.tools.materials_root = materialsRoot;
  const saved = registerMaterial({ root: materialsRoot, input: { source: { title: "Product 1 and Product 2 official method", url: "https://example.org/method", version: "1" }, tags: ["Product 1", "Product 2"] } });
  const calls = [];
  try {
    const result = await dispatchGoalAuthors({ config, stateDir, slots: 2, adapter: {
      async createAuthorTask(input) { calls.push(input); return { thread_id: `t${calls.length}`, turn_id: `u${calls.length}` }; },
    } });
    assert.equal(result.dispatched.length, 2);
    for (const call of calls) {
      assert.deepEqual(call.additionalWorkspaceRoots, [materialsRoot]);
      assert.match(call.prompt, new RegExp(saved.id));
      assert.match(call.prompt, /acquire_original/);
      assert.match(call.prompt, /read .*--id/);
      assert.match(call.prompt, /register .*--input/);
      assert.match(call.prompt, /query .*--product/);
      assert.match(call.prompt, /metadata.*discovery only/i);
      const authorDirs = readdirSync(path.join(stateDir, "authors")).map(name => path.join(stateDir, "authors", name, "materials-query.json"));
      assert.equal(authorDirs.length, 2);
      for (const file of authorDirs) assert.equal(JSON.parse(readFileSync(file, "utf8")).local_candidate_hits, 1);
    }
    assert.equal(resolveMaterialsRoot({ cwd: calls[0].worktreePath, env: {} }), resolveMaterialsRoot({ cwd: calls[1].worktreePath, env: {} }));
  } finally { rmSync(root, { recursive: true, force: true }); }
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

test("Codex usage-limit failures are infrastructure retryable without consuming a content repair", async () => {
  const { root, stateDir, config } = fixture();
  const store = new GoalEventStore({ stateDir });
  const original = store.rebuild().tasks[0];
  store.append({
    event_id: "fixture-codex-usage-limit",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "authoring_repair",
      thread_id: "thread-quota",
      turn_id: "turn-quota",
      worktree_path: root,
      repair_count: 1,
      repair_history: [{
        repair_count: 1,
        turn_id: "turn-quota",
        started_at: "2026-09-04T00:00:00.000Z",
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
      return { thread: { turns: [{
        id: "turn-quota",
        status: "failed",
        error: {
          message: "You've hit your usage limit. Try again later.",
          codexErrorInfo: "usageLimitExceeded",
        },
        items: [],
      }] } };
    },
  };
  try {
    const harvested = await harvestGoalAuthors({ config, stateDir, adapter });
    const failed = harvested.state.tasks[0];
    assert.equal(failed.state, "retryable_failure");
    assert.equal(failed.failure_code, "GOAL_CODEX_USAGE_LIMIT_EXCEEDED");
    assert.equal(failed.repair_count, 1);
    assert.equal(failed.thread_id, "thread-quota");
    assert.equal(failed.worktree_path, root);
    assert.equal(failed.pending_gate_findings[0].code, "codex_usage_limit_exceeded");
    assert.match(failed.pending_gate_findings[0].remediation, /usage capacity/i);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resuming an author after a usage limit preserves its content repair budget", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_attempts: 6, max_repairs: 2 };
  const store = new GoalEventStore({ stateDir });
  const continuationCalls = [];
  let replacementCalls = 0;
  try {
    const first = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      adapter: {
        async createAuthorTask() {
          return { thread_id: "thread-quota", turn_id: "turn-quota" };
        },
      },
    });
    const original = first.state.tasks[0];
    store.append({
      event_id: "fixture-quota-retryable",
      type: "task_replaced",
      payload: { task: {
        ...original,
        state: "retryable_failure",
        failure_code: "GOAL_CODEX_USAGE_LIMIT_EXCEEDED",
        failure_message: "usage capacity unavailable",
        repair_count: 0,
        repair_history: [],
        transition_ids: [...original.transition_ids, "fixture-quota-retryable"],
      } },
    });
    const result = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      preDispatchCheck() {},
      adapter: {
        async startRepairTurn(input) {
          continuationCalls.push(input);
          return { thread_id: input.threadId, turn_id: `turn-quota-resumed-${continuationCalls.length}` };
        },
        async createAuthorTask() {
          replacementCalls += 1;
          return { thread_id: "thread-replacement", turn_id: "turn-replacement" };
        },
      },
    });

    const resumed = result.state.tasks[0];
    assert.equal(resumed.state, "authoring");
    assert.equal(resumed.thread_id, "thread-quota");
    assert.equal(resumed.turn_id, "turn-quota-resumed-1");
    assert.equal(resumed.worktree_path, original.worktree_path);
    assert.equal(resumed.repair_count, 0);
    assert.deepEqual(resumed.repair_history, []);
    assert.equal(resumed.infrastructure_resume_count, 1);
    assert.equal(continuationCalls.length, 1);
    assert.equal(replacementCalls, 0);

    store.append({
      event_id: "fixture-quota-retryable-again",
      type: "task_replaced",
      payload: { task: {
        ...resumed,
        state: "retryable_failure",
        failure_code: "GOAL_CODEX_USAGE_LIMIT_EXCEEDED",
        failure_message: "usage capacity unavailable again",
        transition_ids: [...resumed.transition_ids, "fixture-quota-retryable-again"],
      } },
    });
    const resumedAgain = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      resumeStopped: true,
      preDispatchCheck() {},
      adapter: {
        async startRepairTurn(input) {
          continuationCalls.push(input);
          return { thread_id: input.threadId, turn_id: `turn-quota-resumed-${continuationCalls.length}` };
        },
        async createAuthorTask() {
          replacementCalls += 1;
          return { thread_id: "thread-replacement", turn_id: "turn-replacement" };
        },
      },
    });
    const second = resumedAgain.state.tasks[0];
    assert.equal(second.state, "authoring");
    assert.equal(second.turn_id, "turn-quota-resumed-2");
    assert.equal(second.repair_count, 0);
    assert.equal(second.infrastructure_resume_count, 2);
    assert.equal(continuationCalls.length, 2);
    assert.equal(replacementCalls, 0);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a content repair after legacy quota migration uses a distinct event identity", async () => {
  const { root, stateDir, config } = fixture();
  const store = new GoalEventStore({ stateDir });
  try {
    const first = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      adapter: {
        async createAuthorTask() {
          return { thread_id: "thread-legacy-quota", turn_id: "turn-author" };
        },
      },
    });
    const authored = first.state.tasks[0];
    store.append({
      event_id: `${authored.id}-repair-1-started`,
      type: "task_replaced",
      payload: { task: {
        ...authored,
        state: "authoring_repair",
        repair_count: 1,
        transition_ids: [...authored.transition_ids, `${authored.id}-repair-1-authoring`],
      } },
    });
    const migrated = store.rebuild().tasks[0];
    store.append({
      event_id: `${authored.id}-quota-ledger-migrated`,
      type: "task_replaced",
      payload: { task: {
        ...migrated,
        state: "repair_requested",
        repair_count: 0,
        repair_history: [],
        pending_gate_findings: [{ code: "receipt_mismatch", remediation: "copy the receipt decision" }],
        transition_ids: [...migrated.transition_ids, `${authored.id}-quota-ledger-migrated`],
      } },
    });

    const result = await dispatchGoalAuthors({
      config,
      stateDir,
      slots: 1,
      preDispatchCheck() {},
      adapter: {
        async startRepairTurn(input) {
          return { thread_id: input.threadId, turn_id: "turn-content-repair" };
        },
      },
    });
    const repaired = result.state.tasks[0];
    assert.equal(repaired.state, "authoring_repair");
    assert.equal(repaired.repair_count, 1);
    assert.equal(repaired.turn_id, "turn-content-repair");
    assert.equal(repaired.repair_history.at(-1).gate_findings[0].code, "receipt_mismatch");
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

test("a queued repair turn is not duplicated while another turn in the same thread is active", async () => {
  const { root, stateDir, config } = fixture();
  config.retry_policy = { max_attempts: 3, max_repairs: 2 };
  const first = await dispatchGoalAuthors({
    config,
    stateDir,
    slots: 1,
    adapter: { async createAuthorTask() { return { thread_id: "thread-same", turn_id: "turn-original" }; } },
  });
  const original = first.dispatched[0];
  const store = new GoalEventStore({ stateDir });
  store.append({
    event_id: "fixture-queued-repair-behind-active-turn",
    type: "task_replaced",
    payload: { task: {
      ...original,
      state: "authoring_repair",
      turn_id: "turn-repair-queued",
      repair_count: 1,
      repair_history: [{
        repair_count: 1,
        turn_id: "turn-repair-queued",
        resume_turn_ids: [],
        started_at: "2026-09-02T00:00:00.000Z",
        ended_at: null,
        original_commit: original.author_base_commit,
        new_commit: null,
        gate_findings: [{ code: "missing_receipt" }],
      }],
      transition_ids: [...original.transition_ids, "repair-1-authoring"],
    } },
  });
  try {
    const harvested = await harvestGoalAuthors({
      config,
      stateDir,
      adapter: {
        async readThread() {
          return { thread: { turns: [{ id: "turn-original", status: "inProgress", items: [] }] } };
        },
      },
    });
    const active = harvested.state.tasks[0];
    assert.equal(active.state, "authoring_repair");
    assert.equal(active.turn_id, "turn-repair-queued");
    assert.equal(active.repair_resume_count ?? 0, 0);
    assert.equal(harvested.failures.length, 0);
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
      failure_message: "Builder PCR inspection found 1 problem(s).",
      pending_gate_findings: [{ code: "GOAL_AUTHOR_PCR_INVALID", message: "Builder PCR inspection found 1 problem(s)." }],
      validation_result: { problems: ["Reference Flow Definition is missing flow_property_ref.uuid."] },
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
    assert.match(starts[0].prompt, /GOAL_AUTHOR_PCR_INVALID/u);
    assert.match(starts[0].prompt, /Reference Flow Definition is missing flow_property_ref\.uuid/u);

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
  const allowedPath = path.join(oldWorktree, "library/pcrs/category/item/manifest.yaml");
  writeFileSync(allowedPath, "last recorded author commit\n");
  git(oldWorktree, ["add", "library/pcrs/category/item/manifest.yaml"]);
  git(oldWorktree, ["commit", "-qm", "recorded author result"]);
  const authoredCommit = git(oldWorktree, ["rev-parse", "HEAD"]);
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
      author_commit: authoredCommit,
      last_author_commit: authoredCommit,
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
    assert.equal(git(result.state.tasks[0].worktree_path, ["rev-parse", "HEAD"]), authoredCommit);
    assert.equal(result.state.tasks[0].author_base_commit, authoredCommit);
    assert.equal(readFileSync(path.join(result.state.tasks[0].worktree_path, "library/pcrs/category/item/manifest.yaml"), "utf8"), "last recorded author commit\n");
    assert.equal(result.state.tasks[0].attempt, 2);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
