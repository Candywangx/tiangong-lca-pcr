import assert from "node:assert/strict";
import fs from "node:fs";
import { syncBuiltinESMExports } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { GoalEventStore } from "./event-store.mjs";
import {
  auditHybridSearchReceipts,
  finalizeHybridSearchReceipt,
  recordHybridCandidateDirectRead,
  runHybridSearchWithReceipt,
} from "./uuid-search-receipts.mjs";

test("receipt audit rejects parsed tampered bytes even when originals return before seal verification", { concurrency: false }, (t) => {
  const root = fs.mkdtempSync(path.join(tmpdir(), "pcr-receipt-integrity-race-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const stateDir = path.join(root, "state");
  const cwd = path.join(root, "author");
  fs.mkdirSync(cwd);
  const task = {
    id: "race-task",
    cpc_code: "44125",
    state: "authoring",
    attempt: 1,
    turn_id: "race-turn",
    worktree_path: cwd,
    authoring_contract_version: 2,
  };
  new GoalEventStore({ stateDir }).initialize({ goal_id: "race-goal", tasks: [task], snapshots: [] });
  const receiptId = "race-receipt";
  const uuid = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
  const query = runHybridSearchWithReceipt({
    stateDir,
    taskId: task.id,
    cwd,
    query: "finished baler",
    randomId: () => receiptId,
    toolConfig: { flow_hybrid_search_root: "/unused-test-tool" },
    runner: () => ({ status: 0, stdout: JSON.stringify({ data: [{ id: uuid }] }) }),
  });
  recordHybridCandidateDirectRead({
    stateDir,
    taskId: task.id,
    cwd,
    receiptId,
    uuid,
    tiangongCliRoot: "/unused-test-tool",
    reader: () => ({ uuid, state_code: 100, response_sha256: `sha256:${"a".repeat(64)}` }),
  });
  const originalReason = "Candidate is an unfinished subassembly.";
  const decision = {
    uuid,
    decision: "rejected",
    reason_code: "semantic_mismatch",
    reason: originalReason,
    general_comment_review: "The candidate boundary excludes final assembly.",
  };
  const decisionsPath = path.join(root, "decisions.json");
  fs.writeFileSync(decisionsPath, JSON.stringify([decision]));
  finalizeHybridSearchReceipt({ stateDir, taskId: task.id, cwd, receiptId, decisionsPath });
  const report = {
    hybrid_search_receipt_ids: [receiptId],
    uuid_audits: [],
    inventory: { unresolved: [] },
    rejected_uuid_candidates: [{ uuid, receipt_id: receiptId, reason_code: decision.reason_code, reason: originalReason }],
  };
  assert.equal(auditHybridSearchReceipts({ stateDir, task, report }).length, 1);

  const finalizedPath = path.join(path.dirname(query.receipt.result_path), `${receiptId}.decisions.json`);
  const originalBytes = fs.readFileSync(finalizedPath);
  const tampered = JSON.parse(originalBytes);
  const tamperedReason = "This reason was never finalized or attested.";
  tampered.candidate_decisions[0].reason = tamperedReason;
  fs.writeFileSync(finalizedPath, JSON.stringify(tampered));
  report.rejected_uuid_candidates[0].reason = tamperedReason;

  // Restore the attested bytes after the first descriptor read has completed.
  // This deterministically models a concurrent writer between parsing and a
  // later verification read, without relying on process scheduling or timers.
  const originalClose = fs.closeSync;
  let restored = false;
  fs.closeSync = (descriptor) => {
    let openedPath;
    try {
      openedPath = fs.readlinkSync(`/proc/self/fd/${descriptor}`);
    } catch {
      // Directory or unrelated descriptors do not participate in the swap.
    }
    originalClose(descriptor);
    if (!restored && openedPath === finalizedPath) {
      restored = true;
      fs.writeFileSync(finalizedPath, originalBytes);
    }
  };
  syncBuiltinESMExports();
  try {
    assert.throws(
      () => auditHybridSearchReceipts({ stateDir, task, report }),
      (error) => ["GOAL_RECEIPT_INTEGRITY_MISMATCH", "GOAL_ARTIFACT_UNSAFE"].includes(error.code),
      "Audit must reject the unattested reason even when a subsequent read sees original bytes.",
    );
    assert.equal(restored, true, "The test must exercise the swap after reading the tampered file.");
    assert.deepEqual(fs.readFileSync(finalizedPath), originalBytes);
  } finally {
    fs.closeSync = originalClose;
    syncBuiltinESMExports();
  }
});
