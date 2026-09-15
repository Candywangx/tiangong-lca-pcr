import assert from "node:assert/strict";
import test from "node:test";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { GoalEventStore } from "./event-store.mjs";
import { trialAssignmentEvent, trialModel, trialDispatchState, observeTrialTurn, observeTrialReview, summarizeTrial, trialSemanticApproved } from "./model-trial.mjs";

const config = { codex: { model: "gpt-5.6-sol", reasoning_effort: "high" }, retry_policy: { max_repairs: 2 } };
const tasks = Array.from({ length: 7 }, (_, i) => ({ id: `t${i}`, cpc_code: String(i), pcr_path: `library/pcrs/example/p${i}`, state: "queued", queue_action: "promote_legacy", queue_order: i }));
const assignments = tasks.slice(0, 6).map((t, i) => ({ task_id: t.id, pair_id: `pair${Math.floor(i / 2)}`, model: i % 2 ? "gpt-5.6-sol" : "gpt-5.6-terra", difficulty: "medium", rationale: "Matched action, physical complexity, source retrieval and UUID burden; estimates require review." }));
const controls = { harness_sha256: "a".repeat(64), policy_sha256: "b".repeat(64), config_sha256: "c".repeat(64), cache_sha256: "d".repeat(64) };
test("trial extra semantic review requires exact commit and evidence for all four checks", () => {
  const task = { model_trial: { trial_id: "one" } };
  assert.equal(trialSemanticApproved(task, "commit"), false);
  const review = { decision: "approved", commit_sha: "commit", reviewed_at: "2026-09-11T00:00:00Z", reviewed_by: "coordinator", model_blinded: false,
    source_support: ["source-1 supports product boundary"], uuid_applicability: ["receipt-1 exact semantics reviewed"], inventory_completeness: ["route stages and exchanges checked"], chinese_alignment: ["official baseName checked"] };
  assert.equal(trialSemanticApproved({ ...task, trial_semantic_review: review }, "commit"), true);
  assert.equal(trialSemanticApproved({ ...task, trial_semantic_review: review }, "new-commit"), false);
  assert.equal(trialSemanticApproved({ ...task, trial_semantic_review: { ...review, source_support: [] } }, "commit"), false);
});
function event(state = { tasks }, changes = {}) { return trialAssignmentEvent({ state, trialId: "trial-1", assignments, controls, ...changes }); }

test("trial registration is one atomic replayable event; duplicate registration is idempotent", (t) => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-trial-"));
  t.after(() => rmSync(stateDir, { recursive: true, force: true }));
  const store = new GoalEventStore({ stateDir }); store.initialize({ tasks });
  const e = event(); store.append(e); store.append(e);
  const state = store.rebuild();
  assert.equal(state.last_event_sequence, 1);
  assert.equal(state.tasks.filter(t => t.model_trial).length, 6);
  assert.deepEqual(state.tasks[6], tasks[6]);
  assert.equal(state.model_trials[0].assignments.length, 6);
  assert.deepEqual(new GoalEventStore({ stateDir }).rebuild(), state);
  assert.throws(() => store.append({ event_id: "rewrite", type: "task_replaced", payload: { task: { ...state.tasks[0], model_trial: { model: "gpt-5.6-sol" } } } }), /immutable/i);
  assert.equal(new GoalEventStore({ stateDir }).rebuild().last_event_sequence, 1);
});

test("protocol fingerprint can be audited before first sample only, never during a running trial", (t) => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "trial-protocol-"));
  t.after(() => rmSync(stateDir, { recursive: true, force: true }));
  const store = new GoalEventStore({ stateDir }); store.initialize({ tasks }); store.append(event());
  const revised = { ...controls, harness_sha256: "e".repeat(64) };
  store.append({ event_id: "prelaunch-fix", type: "model_trial_controls_prelaunch", payload: { trial_id: "trial-1", previous_controls: controls, controls: revised, reason: "Fix bounded capacity before any sample starts" } });
  assert.equal(store.rebuild().tasks[0].model_trial.controls.harness_sha256, revised.harness_sha256);
  const task = { ...store.rebuild().tasks[0], state: "authoring", thread_id: "started" };
  store.append({ event_id: "started", type: "task_replaced", payload: { task } });
  assert.throws(() => store.append({ event_id: "late-fix", type: "model_trial_controls_prelaunch", payload: { trial_id: "trial-1", previous_controls: revised, controls, reason: "too late" } }), /started/i);
  assert.equal(new GoalEventStore({ stateDir }).rebuild().last_event_sequence, 3);
});

test("reject started task, duplicate PCR, unbalanced allocation, changed action and unbounded sample count", () => {
  assert.throws(() => event({ tasks: tasks.map((t, i) => i ? t : { ...t, state: "authoring", thread_id: "existing" }) }));
  assert.throws(() => event({ tasks: tasks.map((t, i) => i === 1 ? { ...t, pcr_path: tasks[0].pcr_path } : t) }));
  assert.throws(() => event(undefined, { assignments: assignments.map(a => ({ ...a, model: "gpt-5.6-terra" })) }));
  assert.throws(() => event({ tasks: tasks.map((t, i) => i ? t : { ...t, queue_action: "manual_review" }) }));
  assert.throws(() => event(undefined, { assignments: assignments.slice(0, 4) }));
  assert.throws(() => event({ tasks, model_trials: [{ id: "existing" }] }));
});

test("original model receives one content repair then Terra switches to Sol within existing repair budget", () => {
  const task = { ...tasks[0], model_trial: { model: "gpt-5.6-terra", trial_id: "trial-1" } };
  assert.equal(trialModel(task, config).model, "gpt-5.6-terra");
  assert.equal(trialModel({ ...task, state: "repair_requested", repair_count: 0 }, config).model, "gpt-5.6-terra");
  assert.equal(trialModel({ ...task, state: "repair_requested", repair_count: 1 }, config).model, "gpt-5.6-sol");
  assert.equal(trialModel({ ...task, state: "repair_requested", repair_count: 1, author_model: "gpt-5.6-terra", repair_resume_pending: true }, config).model, "gpt-5.6-terra");
  assert.equal(trialModel({ ...task, state: "repair_requested", repair_count: 1, author_model: "gpt-5.6-terra", infrastructure_resume_pending: true }, config).model, "gpt-5.6-terra");
  assert.throws(() => trialModel({ ...task, state: "repair_requested", repair_count: 2 }, config), /repair/i);
  assert.deepEqual(trialModel(tasks[6], config), config.codex);
});

test("risk guard blocks new Terra only, leaves active authors unchanged, and does not mutate state", () => {
  const annotated = tasks.map((t, i) => ({ ...t, model_trial: assignments[i] && { ...assignments[i], trial_id: "trial-1" } }));
  annotated[0] = { ...annotated[0], state: "author_review", pending_gate_findings: [{ code: "hybrid_receipt_tampered" }] };
  annotated[2] = { ...annotated[2], state: "authoring", thread_id: "alive" };
  const state = { tasks: annotated }; const before = structuredClone(state);
  const filtered = trialDispatchState(state);
  assert.equal(filtered.tasks[4].coordinator_hold.reason, "GOAL_TRIAL_SAFETY_REVIEW_REQUIRED");
  assert.deepEqual(filtered.tasks[2], annotated[2]);
  assert.equal(filtered.tasks[1].coordinator_hold, undefined);
  assert.deepEqual(state, before);
});

test("receipt safety suspicion survives repair success until explicit adjudication; mismatched observed model invalidates attribution", () => {
  let task = { ...tasks[0], model_trial: { trial_id: "trial-1", model: "gpt-5.6-terra" }, thread_id: "th", turn_id: "a" };
  task = observeTrialReview(task, { ok: false, findings: [{ code: "GOAL_HYBRID_SEARCH_RECEIPT_HASH_MISMATCH" }], at: "2026-09-11T00:00:00Z", durationMs: 1 });
  task = { ...task, pending_gate_findings: [], state: "valid_result" };
  const next = { ...tasks[2], model_trial: task.model_trial };
  assert.ok(trialDispatchState({ tasks: [task, next] }).tasks[1].coordinator_hold);
  assert.equal(task.trial_safety_incidents[0].status, "needs_adjudication");
  task = { ...task, trial_turns: [{ model: "gpt-5.6-terra", effort: "high", usage: { observed_model: "gpt-5.6-sol", observed_reasoning_effort: "high" } }] };
  assert.equal(summarizeTrial({ tasks: [task] }, "trial-1").samples[0].protocol_status, "invalid_model_parameters");
});

test("turn observation is idempotent, rejects parameter drift, and rescue success remains mixed", () => {
  let task = { ...tasks[0], model_trial: { trial_id: "trial-1", model: "gpt-5.6-terra" }, thread_id: "th", turn_id: "a", author_model: "gpt-5.6-terra", author_reasoning_effort: "high" };
  task = observeTrialTurn(task, { started_at: "2026-09-11T00:00:00Z", cache: { injected_uuid_count: 2 } });
  assert.deepEqual(observeTrialTurn(task, { started_at: "2026-09-11T00:00:00Z", cache: { injected_uuid_count: 2 } }), task);
  assert.throws(() => observeTrialTurn({ ...task, author_model: "gpt-5.6-sol" }, {}));
  task = observeTrialTurn({ ...task, turn_id: "b", author_model: "gpt-5.6-sol" }, { started_at: "2026-09-11T01:00:00Z" });
  const report = summarizeTrial({ tasks: [{ ...task, state: "completed", landed_at: "2026-09-11T02:00:00Z" }] }, "trial-1");
  assert.equal(report.samples[0].completion_group, "terra_draft_sol_repair");
  assert.equal(report.samples[0].tokens, "unavailable");
  assert.equal(report.samples[0].verified_cost, "unavailable");
  assert.equal(report.samples[0].turns.length, 2);
  const measured = { ...task, trial_turns: task.trial_turns.map(turn => ({ ...turn, usage: { status: "available", tokens: { input_tokens: 10, output_tokens: 2, cached_input_tokens: 5, total_tokens: 12 } } })) };
  const cost = summarizeTrial({ tasks: [{ ...measured, state: "completed", landed_at: "2026-09-11T02:00:00Z" }] }, "trial-1");
  assert.equal(cost.samples[0].tokens.total_tokens, 24);
  assert.equal(cost.samples[0].tokens.input_tokens, 20);
});

test('phase1a trial review categories follow machine classification instead of error prose',()=>{
  const task={id:'t',thread_id:'thread',turn_id:'turn',model_trial:{model:'gpt-5.6-terra'},author_model:'gpt-5.6-terra'};
  const unknown=observeTrialReview(task,{ok:false,findings:[{code:'NEW',message:'HTTP timeout unavailable'}],at:'2026-01-01',durationMs:1});
  assert.equal(unknown.trial_reviews[0].category,'unknown');
  const window=observeTrialReview(task,{ok:false,findings:[{code:'GOAL_AUTHOR_TIMEOUT',details:{origin:'harness',failure_kind:'execution_window'}}],at:'2026-01-01',durationMs:1});
  assert.equal(window.trial_reviews[0].category,'execution_window');
});
