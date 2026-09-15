import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { GoalHarnessError, selectRecovery } from "./errors.mjs";

const TERRA = "gpt-5.6-terra";
const SOL = "gpt-5.6-sol";
const hash = value => createHash("sha256").update(JSON.stringify(value)).digest("hex");
function reject(message) { throw new GoalHarnessError("GOAL_MODEL_TRIAL_INVALID", message); }
const safetyFinding = f => /tamper|fabricat|forg|unverified.*uuid|uuid.*unverified|receipt.*hash.*mismatch/i.test(`${f.code} ${f.message ?? ""}`);

export function trialControlFingerprints(config) {
  const root = path.dirname(fileURLToPath(import.meta.url));
  const files = readdirSync(root).filter(f => f.endsWith(".mjs") && !f.endsWith(".test.mjs")).sort();
  return { harness_sha256: hash(files.map(f => [f, readFileSync(path.join(root, f), "utf8")])),
    policy_sha256: createHash("sha256").update(readFileSync(config.policy_prompt_path)).digest("hex"),
    config_sha256: hash({ timeout: config.author_timeout_seconds, retry: config.retry_policy, tools: config.tools, slots: config.author_slots, batch: config.integration_batch_size }) };
}

export function assertTrialControls(task, config) {
  if (!task.model_trial?.controls) return;
  const actual = trialControlFingerprints(config);
  for (const key of Object.keys(actual)) if (actual[key] !== task.model_trial.controls[key]) reject(`Trial ${key} changed; review protocol drift before dispatch.`);
}

export function trialAssignmentEvent({ state, trialId, assignments, controls }) {
  if (!/^[a-z0-9-]+$/.test(trialId) || !Array.isArray(assignments) || assignments.length !== 6) reject("A stage must contain exactly six paired samples.");
  if ((state.model_trials ?? []).length) reject("Report the registered stage before explicitly designing a bounded extension; automatic extension is disabled.");
  for (const key of ["harness_sha256", "policy_sha256", "config_sha256", "cache_sha256"]) {
    if (!/^[a-f0-9]{64}$/.test(controls?.[key] ?? "")) reject(`Missing trial control fingerprint: ${key}`);
  }
  const seen = new Set(); const paths = new Set(); const pairs = new Map();
  const samples = assignments.map(a => {
    const task = state.tasks.find(t => t.id === a.task_id);
    if (!task || task.state !== "queued" || task.thread_id || task.worktree_path || task.attempt || task.model_trial || task.coordinator_hold) reject("Only untouched queued tasks may be allocated.");
    if (!["create_new", "promote_legacy"].includes(task.queue_action) || seen.has(task.id) || paths.has(task.pcr_path)) reject("Duplicate or non-authorable PCR sample.");
    if (![TERRA, SOL].includes(a.model) || !a.pair_id || !a.difficulty || !a.rationale) reject("Model and a priori pairing explanation required.");
    seen.add(task.id); paths.add(task.pcr_path);
    const pair = pairs.get(a.pair_id) ?? []; pair.push({ model: a.model, action: task.queue_action }); pairs.set(a.pair_id, pair);
    return { ...a, cpc_code: task.cpc_code, pcr_path: task.pcr_path, action: task.queue_action, effort: "high" };
  });
  if (pairs.size !== 3 || [...pairs.values()].some(p => p.length !== 2 || new Set(p.map(a => a.model)).size !== 2 || new Set(p.map(a => a.action)).size !== 1)) reject("Each of three pairs must match action and contain both models.");
  const trial = { schema_version: 1, id: trialId, stage: 1, sample_limit: 6, assignments: samples, controls, cache_policy: "shared_identical_rules_record_exposure", extension: "requires_report_and_explicit_registration" };
  return { event_id: `model-trial-${trialId}-registered`, type: "model_trial_registered", payload: { trial } };
}

export function trialModel(task, config) {
  if (!task.model_trial) return config.codex ?? {};
  const repairing = task.state === "repair_requested";
  const continuation = task.infrastructure_resume_pending || task.execution_continue_pending || task.repair_resume_pending;
  if (repairing && !continuation && (task.repair_count ?? 0) >= (config.retry_policy?.max_repairs ?? 2)) reject("Trial repair budget exhausted; preserve original worktree for review.");
  const model = continuation ? (task.author_model ?? task.model_trial.model)
    : (repairing && (task.repair_count ?? 0) >= 1 ? SOL : task.model_trial.model);
  if (![TERRA, SOL].includes(model)) reject("Unsupported trial model.");
  return { ...config.codex, model, reasoning_effort: "high" };
}

export function trialDispatchState(state) {
  const risks = new Set(state.tasks.filter(t => t.model_trial && ((t.pending_gate_findings ?? []).some(safetyFinding)
    || (t.trial_safety_incidents ?? []).some(i => ["needs_adjudication", "confirmed"].includes(i.status))))
    .map(t => t.model_trial.trial_id));
  return { ...state, tasks: state.tasks.map(task => {
    if (!task.model_trial || ["authoring", "authoring_repair"].includes(task.state)) return task;
    const recovery = selectRecovery(task.failure_details ? {code:task.failure_code,details:task.failure_details} : {code:task.failure_code});
    const recovering = ['resume','recheck','defer'].includes(recovery.action);
    const exhausted = !recovering && (task.repair_count ?? 0) >= 2 && ["retryable_failure", "repair_requested"].includes(task.state) && !task.infrastructure_resume_pending && !task.execution_continue_pending && !task.repair_resume_pending;
    const risk = risks.has(task.model_trial.trial_id) && task.model_trial.model === TERRA && !task.thread_id;
    if (exhausted || risk) return { ...task, coordinator_hold: task.coordinator_hold ?? { reason: risk ? "GOAL_TRIAL_SAFETY_REVIEW_REQUIRED" : "GOAL_TRIAL_REPAIR_LIMIT_REACHED" } };
    return task.state === "queued" ? { ...task, queue_order: -100 + (state.model_trials?.find(t => t.id === task.model_trial.trial_id)?.assignments.findIndex(a => a.task_id === task.id) ?? 0) } : task;
  }) };
}

export function observeTrialTurn(task, observation) {
  if (!task.model_trial) return task;
  const turns = task.trial_turns ?? [];
  const existing = turns.find(t => t.thread_id === task.thread_id && t.turn_id === task.turn_id);
  const identity = { thread_id: task.thread_id, turn_id: task.turn_id, model: task.author_model, effort: task.author_reasoning_effort };
  if (existing && (existing.model !== identity.model || existing.effort !== identity.effort)) reject("Recorded turn model parameters changed.");
  if (existing) return task;
  return { ...task, trial_turns: [...turns, { ...identity, ...observation, original_commit: task.last_author_commit ?? null,
    repair_count: task.repair_count ?? 0, tokens: "unavailable", verified_cost: "unavailable", query_wait_ms: "unavailable" }] };
}

export function observeTrialReview(task, { ok, findings = [], at, durationMs }) {
  if (!task.model_trial) return task;
  const key = `${task.thread_id}:${task.turn_id}`;
  const reviews = task.trial_reviews ?? [];
  if (reviews.some(r => r.key === key)) return task;
  const classification = selectRecovery(findings);
  const incidents = findings.filter(safetyFinding).map(f => ({ key: `${key}:${f.code}`, status: "needs_adjudication", at, finding: f }));
  return { ...task, trial_safety_incidents: [...(task.trial_safety_incidents ?? []), ...incidents], trial_reviews: [...reviews, { key, ok, at, duration_ms: durationMs, model: task.author_model,
    category: ok ? "pass" : classification.category === "content" ? "quality" : classification.category, findings, commit: task.author_commit ?? task.last_author_commit ?? null }] };
}

export function trialCacheObservation({ uuids, sources, materials }) {
  return { injected_uuid_count: uuids.length, injected_source_count: sources.length,
    injected_evidence_sha256: hash({ uuids, sources, materials }), actual_query_cache_hits: "unavailable" };
}

export function trialSemanticApproved(task, commit) {
  if (!task.model_trial) return true;
  const review = task.trial_semantic_review;
  return Boolean(review?.decision === "approved" && review.commit_sha === commit && review.reviewed_by
    && Number.isFinite(Date.parse(review.reviewed_at)) && typeof review.model_blinded === "boolean"
    && ["source_support", "uuid_applicability", "inventory_completeness", "chinese_alignment"].every(key =>
      Array.isArray(review[key]) && review[key].length > 0 && review[key].every(evidence => typeof evidence === "string" && evidence.trim())));
}

export function summarizeTrial(state, trialId) {
  const samples = state.tasks.filter(t => t.model_trial?.trial_id === trialId).map(t => {
    const turns = t.trial_turns ?? [];
    const mixed = t.model_trial.model === TERRA && turns.some(x => x.model === SOL);
    const protocolStatus = turns.some(x => x.usage?.observed_model && (x.usage.observed_model !== x.model || x.usage.observed_reasoning_effort !== x.effort))
      ? "invalid_model_parameters" : turns.length && turns.every(x => x.usage?.observed_model) ? "observed_parameters_match" : "awaiting_observed_parameters";
    const tokens = turns.length && turns.every(x => x.usage?.status === "available")
      ? Object.fromEntries(["input_tokens", "output_tokens", "cached_input_tokens", "total_tokens"].map(k => [k, turns.reduce((n, x) => n + x.usage.tokens[k], 0)])) : "unavailable";
    const measuredTimes = turns.map(x => ({ start: Date.parse(x.usage?.started_at), end: Date.parse(x.usage?.completed_at) }));
    const authorMs = measuredTimes.length && measuredTimes.every(x => Number.isFinite(x.start) && Number.isFinite(x.end) && x.end >= x.start)
      ? measuredTimes.reduce((n, x) => n + x.end - x.start, 0) : "unavailable";
    const snapshot = state.snapshots?.find(s => s.id === t.integration_snapshot_id);
    return { ...t.model_trial, cpc_code: t.cpc_code, pcr_path: t.pcr_path, state: t.state, protocol_status: protocolStatus,
      safety_incidents: t.trial_safety_incidents ?? [],
      completion_group: mixed ? "terra_draft_sol_repair" : t.model_trial.model === TERRA ? "terra_independent" : "sol_independent",
      landed: t.state === "completed" && Boolean(t.landed_at), landed_at: t.landed_at ?? null,
      first_gate: t.trial_reviews?.[0] ?? "unavailable", reviews: t.trial_reviews ?? [], turns,
      tokens, verified_cost: "unavailable", author_ms: authorMs,
      end_to_end_ms: t.landed_at && Number.isFinite(measuredTimes[0]?.start) ? Date.parse(t.landed_at) - measuredTimes[0].start : "unavailable",
      integration_checks: snapshot?.validation_results ?? snapshot?.checks ?? "unavailable",
      semantic_review: t.trial_semantic_review ?? "pending",
      integration_snapshot_id: t.integration_snapshot_id ?? null };
  });
  return { trial_id: trialId, samples, sample_count: samples.length, landed: samples.filter(s => s.landed).length,
    checkpoint: samples.length === 6 && samples.every(s => s.landed) ? "six_samples_landed_review_required" : "in_progress",
    limitation: "Paired observational production trial, not identical workloads; shared cache warming and infrastructure exposure must be reported. Unavailable is not zero. No automatic extension." };
}
