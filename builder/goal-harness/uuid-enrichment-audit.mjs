import { existsSync, readFileSync } from "node:fs";

import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { withGoalLock } from "./lock.mjs";
import { applyTaskTransition } from "./state-machine.mjs";

const REVIEWABLE_STATES = new Set([
  "preflight",
  "authoring",
  "author_review",
  "valid_result",
  "integration_pending",
  "integrating",
  "integrated",
  "validated",
  "completed",
  "retryable_failure",
]);

export function findUuidEnrichmentCandidates(state, { stateDir = null } = {}) {
  const affected = [];
  for (const task of state.tasks ?? []) {
    if (task.queue_action === "map_existing" || !REVIEWABLE_STATES.has(task.state)) continue;
    const reasons = new Set();
    let report = null;
    if (task.report_path) {
      if (!existsSync(task.report_path)) {
        reasons.add("author_report_missing");
      } else {
        try { report = JSON.parse(readFileSync(task.report_path, "utf8")); }
        catch { reasons.add("author_report_invalid_json"); }
      }
    }
    if (report) {
      const unresolved = report.inventory?.unresolved ?? [];
      if (unresolved.some((entry) => entry.reason_code === "tiangong_cli_unavailable")) reasons.add("tiangong_cli_unavailable");
      if ((report.uuid_audits ?? []).some((entry) => !entry.hybrid_search_receipt_id)) reasons.add("uuid_audit_receipt_missing");
      if ((report.rejected_uuid_candidates ?? []).some((entry) => !entry.receipt_id)) reasons.add("rejected_candidate_receipt_missing");
      for (const reasonCode of ["no_exact_candidate", "manual_review_required"]) {
        if (unresolved.some((entry) => entry.reason_code === reasonCode && (entry.hybrid_search_receipt_ids?.length ?? 0) === 0)) {
          reasons.add(`${reasonCode}_receipt_missing`);
        }
      }
      const referencedReceipts = [
        ...(report.uuid_audits ?? []).map((entry) => entry.hybrid_search_receipt_id),
        ...(report.rejected_uuid_candidates ?? []).map((entry) => entry.receipt_id),
        ...unresolved.flatMap((entry) => entry.hybrid_search_receipt_ids ?? []),
      ].filter(Boolean);
      if (referencedReceipts.some((receiptId) => !(report.hybrid_search_receipt_ids ?? []).includes(receiptId))) {
        reasons.add("receipt_index_incomplete");
      }
      if (stateDir && (report.hybrid_search_receipt_ids ?? []).some((receiptId) => !receiptArtifactsExist({ stateDir, task, receiptId }))) {
        reasons.add("receipt_artifact_missing");
      }
    } else if (["preflight", "authoring", "author_review"].includes(task.state) && task.uuid_search_contract_version !== 1) {
      reasons.add("author_prompt_receipt_contract_missing");
    }
    if (reasons.size > 0) affected.push({ task_id: task.id, cpc_code: task.cpc_code, state: task.state, reasons: [...reasons].sort() });
  }
  return affected;
}

export function auditGoalUuidResults({ stateDir, apply = false }) {
  const execute = () => {
    const store = new GoalEventStore({ stateDir });
    let state = store.rebuild();
    const affected = findUuidEnrichmentCandidates(state, { stateDir });
    if (!apply) return { affected, requeued: [], applied: false, state };
    if (!state.stopped) {
      throw new GoalHarnessError("GOAL_UUID_AUDIT_REQUIRES_STOP", "Stop Goal scheduling before requeueing UUID enrichment work.");
    }
    if ((state.snapshots ?? []).some((snapshot) => snapshot.state === "integrating")) {
      throw new GoalHarnessError("GOAL_UUID_AUDIT_INTEGRATION_ACTIVE", "Cannot requeue UUID enrichment while an integration snapshot is actively integrating.");
    }
    const requeued = [];
    for (const finding of affected) {
      state = store.rebuild();
      const current = state.tasks.find((task) => task.id === finding.task_id);
      if (!current) continue;
      const generation = (current.uuid_enrichment_generation ?? 0) + 1;
      let task = current.state === "retryable_failure" ? current : applyTaskTransition(current, {
            transition_id: `${current.id}-uuid-enrichment-${generation}`,
            to: "retryable_failure",
            at: new Date().toISOString(),
          });
      const history = {
        generation,
        prior_state: current.state,
        author_commit: current.author_commit ?? null,
        report_path: current.report_path ?? null,
        worktree_path: current.worktree_path ?? null,
        author_branch: current.author_branch ?? null,
        thread_id: current.thread_id ?? null,
        turn_id: current.turn_id ?? null,
        reasons: finding.reasons,
        preserved_at: new Date().toISOString(),
      };
      const canRepairInPlace = Boolean(current.thread_id && current.worktree_path && existsSync(current.worktree_path));
      if (canRepairInPlace) {
        task = applyTaskTransition(task, {
          transition_id: `${current.id}-uuid-enrichment-${generation}-repair`,
          to: "repair_requested",
          at: new Date().toISOString(),
        });
      }
      task = {
        ...task,
        attempt: canRepairInPlace ? current.attempt : 0,
        uuid_enrichment_generation: generation,
        uuid_enrichment_reasons: finding.reasons,
        uuid_enrichment_history: [...(current.uuid_enrichment_history ?? []), history],
        author_content_base_commit: current.author_content_base_commit ?? current.author_base_commit ?? state.baseline.commit,
        author_base_commit: current.author_commit ?? current.author_base_commit ?? state.baseline.commit,
        worktree_path: canRepairInPlace ? current.worktree_path : null,
        author_branch: canRepairInPlace ? current.author_branch : null,
        thread_id: canRepairInPlace ? current.thread_id : null,
        turn_id: canRepairInPlace ? current.turn_id : null,
        report_path: canRepairInPlace ? current.report_path : null,
        author_commit: current.author_commit ?? null,
        valid_at: null,
        integration_snapshot_id: null,
        validation_result: null,
        evidence_audit: null,
        failure_code: "GOAL_UUID_ENRICHMENT_REQUIRED",
        failure_message: `UUID enrichment required: ${finding.reasons.join(", ")}`,
        pending_gate_findings: finding.reasons.map((code) => ({ code, remediation: "Run authenticated receipt-backed UUID enrichment and return a corrected report." })),
      };
      store.append({ event_id: `${current.id}-uuid-enrichment-${generation}-requeued`, type: "task_replaced", payload: { task } });
      requeued.push({ task_id: task.id, cpc_code: task.cpc_code, generation, reasons: finding.reasons });
    }
    return { affected, requeued, applied: true, state: store.rebuild() };
  };
  return apply ? withGoalLock(stateDir, "uuid-audit", execute) : execute();
}

function receiptArtifactsExist({ stateDir, task, receiptId }) {
  const safeTask = String(task.id).replace(/[^a-z0-9._-]+/giu, "-").slice(0, 128);
  const dir = `${stateDir}/uuid-search-receipts/${safeTask}/attempt-${task.attempt ?? 0}`;
  return ["search", "result", "decisions"].every((suffix) => existsSync(`${dir}/${receiptId}.${suffix}.json`));
}
