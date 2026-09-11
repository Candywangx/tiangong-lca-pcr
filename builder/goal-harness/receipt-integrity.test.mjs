import assert from "node:assert/strict";
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  rmSync,
  symlinkSync,
  unlinkSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { GoalEventStore } from "./event-store.mjs";
import {
  runHybridSearchWithReceipt,
  recordHybridCandidateDirectRead,
  finalizeHybridSearchReceipt,
  auditHybridSearchReceipts,
} from "./uuid-search-receipts.mjs";

const evidence = JSON.parse(
  readFileSync(
    new URL("./fixtures/44125-rejection-differences.json", import.meta.url),
  ),
);
const candidate = evidence.findings[0];
function fixture(t, version = 2) {
  const root = mkdtempSync(path.join(tmpdir(), "pcr-receipt-seal-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const stateDir = path.join(root, "state"),
    cwd = path.join(root, "author");
  mkdirSync(cwd);
  const task = {
    id: "task-44125",
    cpc_code: "44125",
    state: "authoring",
    attempt: 1,
    turn_id: "turn-1",
    worktree_path: cwd,
    authoring_contract_version: version,
  };
  const store = new GoalEventStore({ stateDir });
  store.initialize({ goal_id: "fixture", tasks: [task], snapshots: [] });
  const query = runHybridSearchWithReceipt({
    stateDir,
    taskId: task.id,
    cwd,
    query: "finished baler",
    randomId: () => "receipt-44125",
    toolConfig: { flow_hybrid_search_root: "/missing-test-tool" },
    runner: () => ({
      status: 0,
      stdout: JSON.stringify({ data: [{ id: candidate.uuid }] }),
    }),
  });
  recordHybridCandidateDirectRead({
    stateDir,
    taskId: task.id,
    cwd,
    receiptId: "receipt-44125",
    uuid: candidate.uuid,
    tiangongCliRoot: "/missing-test-tool",
    reader: () => ({
      uuid: candidate.uuid,
      state_code: 100,
      base_name_en: "Baler subassembly",
      base_name_zh: "打捆机组件",
      response_sha256: "sha256:" + "a".repeat(64),
    }),
  });
  const decision = {
    uuid: candidate.uuid,
    ...candidate.expected,
    general_comment_review: "Factory gate unfinished subassemblies only.",
  };
  const decisionsPath = path.join(root, "decisions.json");
  writeFileSync(decisionsPath, JSON.stringify([decision]));
  const options = {
    stateDir,
    taskId: task.id,
    cwd,
    receiptId: "receipt-44125",
    decisionsPath,
  };
  const dir = path.dirname(query.receipt.result_path);
  const report = {
    hybrid_search_receipt_ids: ["receipt-44125"],
    uuid_audits: [],
    inventory: { unresolved: [] },
    rejected_uuid_candidates: [
      {
        uuid: candidate.uuid,
        receipt_id: "receipt-44125",
        reason_code: decision.reason_code,
        reason: decision.reason,
      },
    ],
  };
  return { root, stateDir, task, store, options, dir, report, decision };
}
test("new finalization anchors exact artifacts in the append-only Goal audit and is idempotent", (t) => {
  const f = fixture(t);
  const first = finalizeHybridSearchReceipt(f.options);
  const events = f.store
    .readEvents()
    .filter((e) => e.type === "uuid_receipt_finalized");
  assert.equal(events.length, 1);
  assert.ok(events[0].payload.files["receipt-44125.decisions.json"]);
  assert.deepEqual(finalizeHybridSearchReceipt(f.options), first);
  assert.equal(
    f.store.readEvents().filter((e) => e.type === "uuid_receipt_finalized")
      .length,
    1,
  );
  assert.equal(
    auditHybridSearchReceipts({
      report: f.report,
      stateDir: f.stateDir,
      task: f.task,
    }).length,
    1,
  );
});
test("changing finalized rejection and report together cannot make tampered evidence valid", (t) => {
  const f = fixture(t);
  finalizeHybridSearchReceipt(f.options);
  const p = path.join(f.dir, "receipt-44125.decisions.json"),
    d = JSON.parse(readFileSync(p));
  d.candidate_decisions[0].reason = candidate.claimed.reason;
  writeFileSync(p, JSON.stringify(d));
  f.report.rejected_uuid_candidates[0].reason = candidate.claimed.reason;
  assert.throws(
    () =>
      auditHybridSearchReceipts({
        report: f.report,
        stateDir: f.stateDir,
        task: f.task,
      }),
    (e) => e.code === "GOAL_RECEIPT_INTEGRITY_MISMATCH",
  );
});
test("repeating finalization refuses changed decisions instead of resealing them", (t) => {
  const f = fixture(t);
  finalizeHybridSearchReceipt(f.options);
  writeFileSync(
    f.options.decisionsPath,
    JSON.stringify([{ ...f.decision, decision: "adopted", reason_code: null }]),
  );
  assert.throws(
    () => finalizeHybridSearchReceipt(f.options),
    (e) => e.code === "GOAL_HYBRID_SEARCH_DECISIONS_CONFLICT",
  );
});
test("legacy receipt cannot be retroactively sealed for a new contract", (t) => {
  const f = fixture(t, 1);
  finalizeHybridSearchReceipt(f.options);
  f.store.append({
    event_id: "new-contract-for-test",
    type: "task_replaced",
    payload: { task: { ...f.task, authoring_contract_version: 2 } },
  });
  assert.throws(
    () => finalizeHybridSearchReceipt(f.options),
    (e) => e.code === "GOAL_RECEIPT_INTEGRITY_MISSING",
  );
});
test("a symlink cannot substitute for finalized evidence", (t) => {
  const f = fixture(t);
  finalizeHybridSearchReceipt(f.options);
  const p = path.join(f.dir, "receipt-44125.decisions.json"),
    target = path.join(f.root, "outside.json");
  writeFileSync(target, readFileSync(p));
  unlinkSync(p);
  symlinkSync(target, p);
  assert.throws(
    () =>
      auditHybridSearchReceipts({
        report: f.report,
        stateDir: f.stateDir,
        task: f.task,
      }),
    (e) => e.code === "GOAL_ARTIFACT_UNSAFE",
  );
});
test("interrupted finalization resumes only exact journal-bound bytes", (t) => {
  const f = fixture(t);
  assert.throws(
    () =>
      finalizeHybridSearchReceipt({
        ...f.options,
        faultInjector: (stage) => {
          if (stage === "after_attestation") throw new Error("simulated crash");
        },
      }),
    /simulated crash/,
  );
  const first = finalizeHybridSearchReceipt(f.options);
  assert.equal(first.candidate_decisions[0].reason, candidate.expected.reason);
  assert.equal(
    f.store.readEvents().filter((e) => e.type === "uuid_receipt_finalized")
      .length,
    1,
  );
});
for (const field of ["receipt_id", "goal_id", "task_id", "cpc_code", "attempt"])
  test(`finalization rejects substituted ${field} before sealing`, (t) => {
    const f = fixture(t),
      p = path.join(f.dir, "receipt-44125.search.json"),
      s = JSON.parse(readFileSync(p));
    s[field] = field === "attempt" ? 8 : "substituted";
    writeFileSync(p, JSON.stringify(s));
    assert.throws(
      () => finalizeHybridSearchReceipt(f.options),
      (e) => e.code === "GOAL_RECEIPT_INTEGRITY_MISMATCH",
    );
    assert.equal(
      f.store.readEvents().filter((e) => e.type === "uuid_receipt_finalized")
        .length,
      0,
    );
  });
test("corrupt raw results fail before finalization appends an attestation", (t) => {
  const f = fixture(t);
  writeFileSync(path.join(f.dir, "receipt-44125.result.json"), "{}");
  assert.throws(
    () => finalizeHybridSearchReceipt(f.options),
    (e) => e.code === "GOAL_RECEIPT_INTEGRITY_MISMATCH",
  );
  assert.equal(
    f.store.readEvents().filter((e) => e.type === "uuid_receipt_finalized")
      .length,
    0,
  );
});
test("legacy finalization preserves its prior decisions-input behavior", (t) => {
  const f = fixture(t, 1),
    link = path.join(f.root, "decision-link.json");
  symlinkSync(f.options.decisionsPath, link);
  assert.equal(
    finalizeHybridSearchReceipt({ ...f.options, decisionsPath: link })
      .candidate_decisions[0].reason,
    candidate.expected.reason,
  );
});
