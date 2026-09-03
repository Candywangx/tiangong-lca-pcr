import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { GoalEventStore } from "./event-store.mjs";
import { auditGoalUuidResults, findUuidEnrichmentCandidates } from "./uuid-enrichment-audit.mjs";

function oldReport(reasonCode = "no_exact_candidate") {
  return {
    uuid_audits: [{ uuid: "11111111-1111-4111-8111-111111111111", hybrid_search: true }],
    rejected_uuid_candidates: [],
    inventory: { unresolved: [{ row_id: "input_x", reason_code: reasonCode, explanation: "old evidence" }] },
  };
}

test("audit identifies unavailable infrastructure and receipt-free accepted/manual results", () => {
  const root = mkdtempSync(path.join(tmpdir(), "goal-uuid-audit-"));
  try {
    const unavailable = path.join(root, "unavailable.json");
    const missing = path.join(root, "missing.json");
    const current = path.join(root, "current.json");
    writeFileSync(unavailable, JSON.stringify(oldReport("tiangong_cli_unavailable")));
    writeFileSync(missing, JSON.stringify(oldReport("manual_review_required")));
    writeFileSync(current, JSON.stringify({
      hybrid_search_receipt_ids: ["r1"],
      uuid_audits: [{ uuid: "11111111-1111-4111-8111-111111111111", hybrid_search_receipt_id: "r1" }],
      rejected_uuid_candidates: [],
      inventory: { unresolved: [{ row_id: "input_x", reason_code: "no_exact_candidate", explanation: "searched", hybrid_search_receipt_ids: ["r1"] }] },
    }));
    const affected = findUuidEnrichmentCandidates({ tasks: [
      { id: "unavailable", cpc_code: "1", queue_action: "promote_legacy", state: "completed", report_path: unavailable },
      { id: "missing", cpc_code: "2", queue_action: "promote_legacy", state: "valid_result", report_path: missing },
      { id: "current", cpc_code: "3", queue_action: "promote_legacy", state: "valid_result", report_path: current, uuid_search_contract_version: 1 },
      { id: "active-old-prompt", cpc_code: "4", queue_action: "promote_legacy", state: "authoring", uuid_search_contract_version: 0 },
      { id: "mapped", cpc_code: "5", queue_action: "map_existing", state: "completed" },
    ] });
    assert.deepEqual(affected.map((entry) => entry.task_id), ["unavailable", "missing", "active-old-prompt"]);
    assert.ok(affected[0].reasons.includes("tiangong_cli_unavailable"));
    assert.ok(affected[1].reasons.includes("uuid_audit_receipt_missing"));
    assert.ok(affected[1].reasons.includes("manual_review_required_receipt_missing"));
    assert.ok(affected[2].reasons.includes("author_prompt_receipt_contract_missing"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("apply requires a stopped goal and requeues affected results without deleting prior pointers", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-uuid-audit-state-"));
  try {
    const reportPath = path.join(stateDir, "report.json");
    writeFileSync(reportPath, JSON.stringify(oldReport()));
    const store = new GoalEventStore({ stateDir, clock: () => "2026-09-03T00:00:00.000Z" });
    store.initialize({
      schema_version: 1,
      goal_id: "audit-goal",
      created_at: "2026-09-02T00:00:00.000Z",
      baseline: { commit: "b".repeat(40) },
      tasks: [{
        id: "task-1", cpc_code: "41111", queue_action: "promote_legacy", state: "completed", attempt: 6,
        report_path: reportPath, author_commit: "a".repeat(40), thread_id: "thread-1", turn_id: "turn-1", worktree_path: "/keep/worktree",
        transition_ids: [],
      }],
    });
    assert.throws(() => auditGoalUuidResults({ stateDir, apply: true }), (error) => error.code === "GOAL_UUID_AUDIT_REQUIRES_STOP");
    store.append({ event_id: "stop", type: "scheduling_stopped", payload: {} });
    const result = auditGoalUuidResults({ stateDir, apply: true });
    assert.equal(result.requeued.length, 1);
    const task = new GoalEventStore({ stateDir }).rebuild().tasks[0];
    assert.equal(task.state, "retryable_failure");
    assert.equal(task.attempt, 0);
    assert.equal(task.uuid_enrichment_generation, 1);
    assert.equal(task.author_base_commit, "a".repeat(40));
    assert.equal(task.worktree_path, null);
    assert.equal(task.uuid_enrichment_history[0].worktree_path, "/keep/worktree");
    assert.equal(readFileSync(reportPath, "utf8").length > 0, true);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("historical enrichment keeps a recoverable original thread and worktree for repair", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-uuid-audit-repair-"));
  const worktreePath = path.join(stateDir, "existing-worktree");
  try {
    writeFileSync(path.join(stateDir, "report.json"), JSON.stringify(oldReport()));
    mkdirSync(worktreePath);
    const store = new GoalEventStore({ stateDir });
    store.initialize({
      goal_id: "audit-repair",
      baseline: { commit: "b".repeat(40) },
      stopped: true,
      tasks: [{
        id: "task-1", cpc_code: "41111", queue_action: "promote_legacy", state: "completed", attempt: 1,
        report_path: path.join(stateDir, "report.json"), author_commit: "a".repeat(40),
        thread_id: "thread-1", turn_id: "turn-1", worktree_path: worktreePath, transition_ids: [],
      }],
    });
    const result = auditGoalUuidResults({ stateDir, apply: true });
    assert.equal(result.state.tasks[0].state, "repair_requested");
    assert.equal(result.state.tasks[0].thread_id, "thread-1");
    assert.equal(result.state.tasks[0].worktree_path, worktreePath);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});
