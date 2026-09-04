import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import {
  auditHybridSearchReceipts,
  finalizeHybridSearchReceipt,
  recordHybridCandidateDirectRead,
  runHybridSearchWithReceipt,
} from "./uuid-search-receipts.mjs";
import { authenticatedHybridSearchDryRunCheck } from "./tooling.mjs";
import { assertAuthorDispatchInfrastructure } from "./commands.mjs";
import { appendGoalCacheReceipt } from "./goal-cache.mjs";

const UUID_A = "11111111-1111-4111-8111-111111111111";
const UUID_B = "22222222-2222-4222-8222-222222222222";

function fixture() {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-uuid-receipt-"));
  const stateDir = path.join(root, "state");
  const worktreePath = path.join(root, "worktree");
  mkdirSync(worktreePath, { recursive: true });
  mkdirSync(stateDir, { recursive: true });
  writeFileSync(path.join(stateDir, "state.json"), `${JSON.stringify({
    goal_id: "receipt-test",
    tasks: [{ id: "task-1", cpc_code: "41111", state: "authoring", worktree_path: worktreePath, attempt: 1 }],
  })}\n`);
  return { root, stateDir, worktreePath };
}

test("authenticated doctor executes a live hybrid query and a public state_code=100 direct read without leaking credentials", () => {
  const calls = [];
  const secret = "do-not-leak-this-token";
  const check = authenticatedHybridSearchDryRunCheck({
    tiangongCliRoot: "/tools/tiangong-cli",
    flowHybridSearchRoot: "/tools/flow-hybrid-search",
    runner(command, args) {
      calls.push({ command, args });
      if (args.includes("doctor-auth")) {
        return { status: 0, stdout: JSON.stringify({ status: "passed", live: { authenticated: true } }), stderr: secret };
      }
      if (args.some((arg) => arg.endsWith("/run-flow-hybrid-search.mjs"))) {
        return { status: 0, stdout: JSON.stringify({ data: [{ id: UUID_A, score: 0.99 }] }), stderr: secret };
      }
      return { status: 0, stdout: JSON.stringify({ state_code: 100, flow: { flowDataSet: { flowInformation: { dataSetInformation: { "common:UUID": UUID_A } } } } }), stderr: secret };
    },
  });
  assert.equal(check.ok, true);
  assert.deepEqual(check.detail, { authenticated: true, live_query: true, state_code_100_read: true, credentials_redacted: true });
  assert.equal(JSON.stringify(check).includes(secret), false);
  assert.equal(calls.length, 3);
  assert.ok(calls.every((call) => call.args.some((arg) => arg === "--env-file-if-exists=/tools/tiangong-cli/.env")));
});

test("author dispatch fails closed when authenticated hybrid infrastructure is unavailable", () => {
  let dispatchAttempted = false;
  assert.throws(
    () => {
      assertAuthorDispatchInfrastructure({ tools: {} }, () => ({ ok: false, detail: { code: "GOAL_HYBRID_AUTHENTICATED_PREFLIGHT_FAILED", stage: "authenticated_session", credentials_redacted: true } }));
      dispatchAttempted = true;
    },
    (error) => error.code === "GOAL_HYBRID_AUTHENTICATED_PREFLIGHT_FAILED" && error.details.credentials_redacted === true,
  );
  assert.equal(dispatchAttempted, false);
});

test("hybrid query writes an immutable result receipt and final candidate decisions", () => {
  const { root, stateDir, worktreePath } = fixture();
  try {
    const query = runHybridSearchWithReceipt({
      stateDir,
      taskId: "task-1",
      query: "pig iron product flow",
      flowType: "product",
      limit: 5,
      cwd: worktreePath,
      toolConfig: { tiangong_cli_root: "/tools/cli", flow_hybrid_search_root: "/tools/hybrid" },
      runner: () => ({ status: 0, stdout: JSON.stringify({ data: [{ id: UUID_A, json: { flow_property_uuid: "33333333-3333-4333-8333-333333333333" } }, { uuid: UUID_B }] }), stderr: "" }),
      now: () => "2026-09-03T00:00:00.000Z",
      randomId: () => "receipt-1",
    });
    assert.equal(query.receipt.receipt_id, "receipt-1");
    assert.deepEqual(query.receipt.candidate_uuids, [UUID_A, UUID_B]);
    assert.match(query.receipt.result_sha256, /^sha256:[a-f0-9]{64}$/u);
    assert.equal(query.receipt.endpoint_id, "tiangong-flow-hybrid-search");
    assert.ok(query.receipt.tool.version);
    assert.deepEqual(query.receipt.candidates.map((candidate) => candidate.rank), [1, 2]);
    assert.deepEqual(JSON.parse(readFileSync(query.receipt.result_path, "utf8")), { data: [{ id: UUID_A, json: { flow_property_uuid: "33333333-3333-4333-8333-333333333333" } }, { uuid: UUID_B }] });
    const cached = runHybridSearchWithReceipt({
      stateDir,
      taskId: "task-1",
      query: "pig iron product flow",
      flowType: "product",
      limit: 5,
      cwd: worktreePath,
      toolConfig: { tiangong_cli_root: "/tools/cli", flow_hybrid_search_root: "/tools/hybrid" },
      runner: () => assert.fail("exact Goal-level query cache must be reused"),
      randomId: () => "receipt-2",
    });
    assert.equal(cached.receipt.cache.hit, true);
    assert.deepEqual(cached.receipt.candidate_uuids, [UUID_A, UUID_B]);

    for (const uuid of [UUID_A, UUID_B]) {
      recordHybridCandidateDirectRead({
        stateDir,
        taskId: "task-1",
        receiptId: "receipt-1",
        uuid,
        cwd: worktreePath,
        tiangongCliRoot: "/tools/cli",
        reader: () => ({
          uuid,
          state_code: 100,
          base_name_en: uuid === UUID_A ? "Pig iron" : "Alloy steel",
          base_name_zh: uuid === UUID_A ? "生铁" : "合金钢",
          flow_type: "product",
          classifications: [{ id: "41210", label: "Basic iron and steel" }],
          property: "Mass",
          flow_property_uuid: "33333333-3333-4333-8333-333333333333",
          unit_group_uuid: "44444444-4444-4444-8444-444444444444",
          unit_group_name_en: "Units of mass",
          unit_group_name_zh: "质量单位",
          reference_unit: "kg",
          general_comment: "Public reference flow.",
          response_sha256: `sha256:${"a".repeat(64)}`,
        }),
        now: () => "2026-09-03T00:00:30.000Z",
      });
    }
    const decisionsPath = path.join(root, "decisions.json");
    writeFileSync(decisionsPath, `${JSON.stringify([
      { uuid: UUID_A, decision: "adopted", reason_code: null, reason: "Exact candidate.", general_comment_review: "No conflicting limitation." },
      { uuid: UUID_B, decision: "rejected", reason_code: "semantic_mismatch", reason: "Candidate represents alloy steel rather than pig iron.", general_comment_review: "Comment confirms alloy scope." },
    ])}\n`);
    finalizeHybridSearchReceipt({ stateDir, taskId: "task-1", receiptId: "receipt-1", decisionsPath, cwd: worktreePath, now: () => "2026-09-03T00:01:00.000Z" });

    const report = {
      hybrid_search_receipt_ids: ["receipt-1"],
      uuid_audits: [{ uuid: UUID_A, hybrid_search_receipt_id: "receipt-1" }],
      rejected_uuid_candidates: [{ uuid: UUID_B, receipt_id: "receipt-1", reason_code: "semantic_mismatch", reason: "Candidate represents alloy steel rather than pig iron." }],
      inventory: { unresolved: [] },
    };
    const verifiedUuidRead = {
      uuid: UUID_A,
      state_code: 100,
      base_name_en: "Pig iron",
      base_name_zh: "生铁",
      flow_type: "product",
      classifications: [{ id: "41210", label: "Basic iron and steel" }],
      property: "Mass",
      flow_property_uuid: "33333333-3333-4333-8333-333333333333",
      unit_group_uuid: "44444444-4444-4444-8444-444444444444",
      unit_group_name_en: "Units of mass",
      unit_group_name_zh: "质量单位",
      reference_unit: "kg",
      general_comment: "Public reference flow.",
      response_sha256: `sha256:${"b".repeat(64)}`,
      hybrid_search_receipt_id: "receipt-1",
    };
    const audit = auditHybridSearchReceipts({
      report,
      stateDir,
      task: { id: "task-1", cpc_code: "41111", attempt: 1 },
      verifiedUuidReads: [verifiedUuidRead],
    });
    assert.equal(audit.length, 1);
    assert.equal(audit[0].result_sha256, query.receipt.result_sha256);
    assert.equal(audit[0].candidate_decisions[0].direct_read.state_code, 100);

    const reusableReport = {
      hybrid_search_receipt_ids: ["receipt-1"],
      uuid_audits: [{ uuid: UUID_A, hybrid_search_receipt_id: "receipt-1" }],
      rejected_uuid_candidates: [{ uuid: UUID_B, receipt_id: "receipt-1", reason_code: "semantic_mismatch", reason: "Candidate represents alloy steel rather than pig iron." }],
      inventory: { unresolved: [] },
    };
    assert.throws(
      () => auditHybridSearchReceipts({
        report: reusableReport,
        stateDir,
        task: { id: "task-2", cpc_code: "41112", attempt: 1 },
        verifiedUuidReads: [verifiedUuidRead],
      }),
      (error) => error.code === "GOAL_HYBRID_SEARCH_RECEIPT_MISSING",
    );
    appendGoalCacheReceipt({
      stateDir,
      namespace: "verified_common_uuids",
      keyInput: { uuid: UUID_A, semantic_scope: "common pig iron fixture" },
      tool: { name: "tiangong-cli-public-direct-read", version: "state-code-100-v1" },
      sourceFingerprint: verifiedUuidRead.response_sha256,
      value: verifiedUuidRead,
      receiptId: "common-uuid-1",
    });
    const reused = auditHybridSearchReceipts({
      report: reusableReport,
      stateDir,
      task: { id: "task-2", cpc_code: "41112", attempt: 1 },
      verifiedUuidReads: [verifiedUuidRead],
    });
    assert.equal(reused[0].scope, "goal_cache_reuse");
    assert.equal(reused[0].source_task_id, "task-1");

    assert.throws(
      () => auditHybridSearchReceipts({
        report,
        stateDir,
        task: { id: "task-1", cpc_code: "41111", attempt: 1 },
        verifiedUuidReads: [{
          uuid: UUID_A,
          state_code: 100,
          base_name_en: "A different product",
          base_name_zh: "生铁",
          flow_type: "product",
          classifications: [{ id: "41210", label: "Basic iron and steel" }],
          property: "Mass",
          flow_property_uuid: "33333333-3333-4333-8333-333333333333",
          unit_group_uuid: "44444444-4444-4444-8444-444444444444",
          unit_group_name_en: "Units of mass",
          unit_group_name_zh: "质量单位",
          reference_unit: "kg",
          general_comment: "Public reference flow.",
          response_sha256: `sha256:${"b".repeat(64)}`,
        }],
      }),
      (error) => error.code === "GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a self-reported hybrid_search boolean cannot substitute for a receipt", () => {
  const { root, stateDir } = fixture();
  try {
    assert.throws(
      () => auditHybridSearchReceipts({
        report: {
          hybrid_search_receipt_ids: [],
          uuid_audits: [{ uuid: UUID_A, hybrid_search: true }],
          rejected_uuid_candidates: [],
          inventory: { unresolved: [] },
        },
        stateDir,
        task: { id: "task-1", cpc_code: "41111", attempt: 1 },
      }),
      (error) => error.code === "GOAL_HYBRID_SEARCH_RECEIPT_MISSING",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("no_exact_candidate and manual_review_required need a finalized receipt", () => {
  const { root, stateDir } = fixture();
  try {
    for (const reasonCode of ["no_exact_candidate", "manual_review_required"]) {
      assert.throws(
        () => auditHybridSearchReceipts({
          report: {
            hybrid_search_receipt_ids: [],
            uuid_audits: [],
            rejected_uuid_candidates: [],
            inventory: { unresolved: [{ row_id: "input_x", reason_code: reasonCode, explanation: "No exact public flow.", hybrid_search_receipt_ids: [] }] },
          },
          stateDir,
          task: { id: "task-1", cpc_code: "41111", attempt: 1 },
        }),
        (error) => error.code === "GOAL_HYBRID_SEARCH_RECEIPT_MISSING",
      );
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
