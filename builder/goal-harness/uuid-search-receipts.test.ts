import type {TestContext} from "node:test";
import {item,goalError,object,string} from "./fixtures/assertions.ts";
import {records,jsonRecord,goalTasks} from "./domain.ts";
import {nested} from "./evidence-types.ts";
import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import {
  auditHybridSearchReceipts,
  loadReportReceiptEvidence,
  finalizeHybridSearchReceipt,
  recordHybridCandidateDirectRead,
  runHybridSearchWithReceipt,
} from "./uuid-search-receipts.ts";
import { authenticatedHybridSearchDryRunCheck } from "./tooling.ts";
import { assertAuthorDispatchInfrastructure } from "./dispatch-infrastructure.ts";
import { GoalEventStore } from "./event-store.ts";
import { appendGoalCacheReceipt } from "./goal-cache.ts";

const UUID_A = "11111111-1111-4111-8111-111111111111";
const UUID_B = "22222222-2222-4222-8222-222222222222";
const UUID_C = "33333333-3333-4333-8333-333333333333";

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
  const calls:{command:string;args:string[]}[] = [];
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

test("authenticated hybrid preflight retries one transient whole-chain failure before dispatch", () => {
  let callCount = 0;
  const waits:number[] = [];
  const check = authenticatedHybridSearchDryRunCheck({
    tiangongCliRoot: "/tools/tiangong-cli",
    flowHybridSearchRoot: "/tools/flow-hybrid-search",
    maxAttempts: 3,
    retryDelayMs: 25,
    sleeper: (milliseconds) => waits.push(milliseconds),
    runner(_command, args) {
      callCount += 1;
      if (callCount === 1) return { status: 1, stdout: "", stderr: "transient upstream failure" };
      if (args.includes("doctor-auth")) return { status: 0, stdout: JSON.stringify({ status: "passed" }), stderr: "" };
      if (args.some((arg) => arg.endsWith("/run-flow-hybrid-search.mjs"))) {
        return { status: 0, stdout: JSON.stringify({ data: [{ id: UUID_A }] }), stderr: "" };
      }
      return { status: 0, stdout: JSON.stringify({ state_code: 100, flow: { flowDataSet: { flowInformation: { dataSetInformation: { "common:UUID": UUID_A } } } } }), stderr: "" };
    },
  });
  assert.equal(check.ok, true);
  assert.equal(check.detail.attempts, 2);
  assert.equal(callCount, 4);
  assert.deepEqual(waits, [25]);
});

test("authenticated hybrid preflight increases the delay between repeated whole-chain failures", () => {
  let authAttempts = 0;
  const waits:number[] = [];
  const check = authenticatedHybridSearchDryRunCheck({
    tiangongCliRoot: "/tools/tiangong-cli",
    flowHybridSearchRoot: "/tools/flow-hybrid-search",
    maxAttempts: 3,
    retryDelayMs: 25,
    sleeper: (milliseconds) => waits.push(milliseconds),
    runner(_command, args) {
      if (args.includes("doctor-auth")) {
        authAttempts += 1;
        if (authAttempts < 3) return { status: 1, stdout: "", stderr: "transient upstream failure" };
        return { status: 0, stdout: JSON.stringify({ status: "passed" }), stderr: "" };
      }
      if (args.some((arg) => arg.endsWith("/run-flow-hybrid-search.mjs"))) {
        return { status: 0, stdout: JSON.stringify({ data: [{ id: UUID_A }] }), stderr: "" };
      }
      return { status: 0, stdout: JSON.stringify({ state_code: 100, flow: { flowDataSet: { flowInformation: { dataSetInformation: { "common:UUID": UUID_A } } } } }), stderr: "" };
    },
  });
  assert.equal(check.ok, true);
  assert.equal(check.detail.attempts, 3);
  assert.deepEqual(waits, [25, 50]);
});

test("authenticated hybrid preflight still fails closed after bounded retries without leaking stderr", () => {
  const secret = "must-not-escape";
  let callCount = 0;
  const check = authenticatedHybridSearchDryRunCheck({
    tiangongCliRoot: "/tools/tiangong-cli",
    flowHybridSearchRoot: "/tools/flow-hybrid-search",
    maxAttempts: 3,
    retryDelayMs: 0,
    sleeper: () => {},
    runner() {
      callCount += 1;
      return { status: 1, stdout: "", stderr: secret };
    },
  });
  assert.equal(check.ok, false);
  assert.equal(check.detail.stage, "authenticated_session");
  assert.equal(check.detail.attempts, 3);
  assert.equal(callCount, 3);
  assert.equal(JSON.stringify(check).includes(secret), false);
});

test("author dispatch fails closed when authenticated hybrid infrastructure is unavailable", () => {
  let dispatchAttempted = false;
  assert.throws(
    () => {
      assertAuthorDispatchInfrastructure({ tools: {} }, () => ({ ok: false, detail: { code: "GOAL_HYBRID_AUTHENTICATED_PREFLIGHT_FAILED", stage: "authenticated_session", credentials_redacted: true } }));
      dispatchAttempted = true;
    },
    (error) => goalError(error).code === "GOAL_HYBRID_AUTHENTICATED_PREFLIGHT_FAILED" && goalError(error).details.credentials_redacted === true,
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
      runner: () => ({ status: 0, stdout: JSON.stringify({ data: [{ id: UUID_A, json: { flow_property_uuid: "33333333-3333-4333-8333-333333333333" } }, { uuid: UUID_B }, { uuid: UUID_C }] }), stderr: "" }),
      now: () => "2026-09-03T00:00:00.000Z",
      randomId: () => "receipt-1",
    });
    assert.equal(query.receipt.receipt_id, "receipt-1");
    assert.deepEqual(query.receipt.candidate_uuids, [UUID_A, UUID_B, UUID_C]);
    assert.match(query.receipt.result_sha256, /^sha256:[a-f0-9]{64}$/u);
    assert.equal(query.receipt.endpoint_id, "tiangong-flow-hybrid-search");
    assert.ok(query.receipt.tool.version);
    assert.deepEqual(query.receipt.candidates.map((candidate) => candidate.rank), [1, 2, 3]);
    assert.deepEqual(JSON.parse(readFileSync(query.receipt.result_path, "utf8")), { data: [{ id: UUID_A, json: { flow_property_uuid: "33333333-3333-4333-8333-333333333333" } }, { uuid: UUID_B }, { uuid: UUID_C }] });
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
    assert.deepEqual(cached.receipt.candidate_uuids, [UUID_A, UUID_B, UUID_C]);

    for (const uuid of [UUID_A, UUID_B, UUID_C]) {
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
          base_name_en: uuid === UUID_A ? "Pig iron" : uuid === UUID_B ? "Alloy steel" : "Carbon steel",
          base_name_zh: uuid === UUID_A ? "生铁" : uuid === UUID_B ? "合金钢" : "碳钢",
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
      { uuid: UUID_C, decision: "rejected", reason_code: "product_state_mismatch", reason: "Candidate represents finished carbon steel rather than molten pig iron.", general_comment_review: "Comment confirms finished-product state." },
    ])}\n`);
    finalizeHybridSearchReceipt({ stateDir, taskId: "task-1", receiptId: "receipt-1", decisionsPath, cwd: worktreePath, now: () => "2026-09-03T00:01:00.000Z" });

    const report = {
      hybrid_search_receipt_ids: ["receipt-1"],
      uuid_audits: [{ uuid: UUID_A, hybrid_search_receipt_id: "receipt-1" }],
      rejected_uuid_candidates: [
        { uuid: UUID_B, receipt_id: "receipt-1", reason_code: "semantic_mismatch", reason: "Candidate represents alloy steel rather than pig iron." },
        { uuid: UUID_C, receipt_id: "receipt-1", reason_code: "product_state_mismatch", reason: "Candidate represents finished carbon steel rather than molten pig iron." },
      ],
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
    assert.equal(item(item(audit)[0]).result_sha256, query.receipt.result_sha256);
    assert.equal(object(item(item(item(audit)[0]).candidate_decisions[0]).direct_read).state_code, 100);

    const retriedTaskAudit = auditHybridSearchReceipts({
      report,
      stateDir,
      task: { id: "task-1", cpc_code: "41111", attempt: 2 },
      verifiedUuidReads: [verifiedUuidRead],
    });
    assert.equal(item(item(retriedTaskAudit)[0]).scope, "task_retry_reuse");
    assert.equal(item(item(retriedTaskAudit)[0]).source_task_id, "task-1");

    const mismatchedRejection = structuredClone(report);
    item(item(mismatchedRejection.rejected_uuid_candidates)[0]).reason = "Paraphrased rejection reason.";
    item(item(mismatchedRejection.rejected_uuid_candidates)[1]).reason = "Another paraphrased rejection reason.";
    assert.throws(
      () => auditHybridSearchReceipts({
        report: mismatchedRejection,
        stateDir,
        task: { id: "task-1", cpc_code: "41111", attempt: 1 },
        verifiedUuidReads: [verifiedUuidRead],
      }),
      (error) => goalError(error).code === "GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH"
        && records(goalError(error).details.findings).length === 2
        && nested(item(records(goalError(error).details.findings)[0]),"expected","reason") === "Candidate represents alloy steel rather than pig iron."
        && nested(item(records(goalError(error).details.findings)[0]),"claimed","reason") === "Paraphrased rejection reason."
        && nested(item(records(goalError(error).details.findings)[1]),"expected","reason") === "Candidate represents finished carbon steel rather than molten pig iron."
        && nested(item(records(goalError(error).details.findings)[1]),"claimed","reason") === "Another paraphrased rejection reason."
        && /verbatim/i.test(string(item(records(goalError(error).details.findings)[0]).remediation)),
    );

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
      (error) => goalError(error).code === "GOAL_HYBRID_SEARCH_RECEIPT_MISSING",
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
    assert.equal(item(item(reused)[0]).scope, "goal_cache_reuse");
    assert.equal(item(item(reused)[0]).source_task_id, "task-1");

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
      (error) => goalError(error).code === "GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH",
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
      (error) => goalError(error).code === "GOAL_HYBRID_SEARCH_RECEIPT_MISSING",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("receipt membership gate reports every missing top-level receipt id in one repair", () => {
  const { root, stateDir } = fixture();
  try {
    assert.throws(
      () => auditHybridSearchReceipts({
        report: {
          hybrid_search_receipt_ids: ["receipt-listed"],
          uuid_audits: [],
          rejected_uuid_candidates: [{ uuid: UUID_A, receipt_id: "receipt-rejected", reason_code: "semantic_mismatch", reason: "Not exact." }],
          inventory: { unresolved: [{ row_id: "input_x", reason_code: "no_exact_candidate", explanation: "No exact public flow.", hybrid_search_receipt_ids: ["receipt-unresolved"] }] },
        },
        stateDir,
        task: { id: "task-1", cpc_code: "41111", attempt: 1 },
      }),
      (error) => goalError(error).code === "GOAL_HYBRID_SEARCH_RECEIPT_MISSING"
        && records(goalError(error).details.findings).length === 2
        && records(goalError(error).details.findings).map((finding) => finding.receipt_id).sort().join(",") === "receipt-rejected,receipt-unresolved",
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
        (error) => goalError(error).code === "GOAL_HYBRID_SEARCH_RECEIPT_MISSING",
      );
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('collected local receipt failures do not hide subsequent receipt checks', async t => {
  const f=fixture();t.after(()=>rmSync(f.root,{recursive:true,force:true}));
  const {loadReportReceiptEvidence}=await import('./uuid-search-receipts.ts');
  const task=item(goalTasks(jsonRecord(readFileSync(path.join(f.stateDir,'state.json'),'utf8')).tasks)[0]);
  const result=loadReportReceiptEvidence({stateDir:f.stateDir,task,report:{hybrid_search_receipt_ids:['missing-a','missing-b']},collect:true,phase:'preparation'});
  assert.equal(result.valid,false);
  assert.deepEqual(result.checks.map(c=>[c.phase,c.check_id,c.subject_id,c.status]),[['preparation','receipt_integrity','missing-a','failed'],['preparation','receipt_integrity','missing-b','failed']]);
  assert.equal(result.findings.length,2);
});

function adoptedReceiptCollectionFixture(t:TestContext, sealed = false) {
  const f=fixture();t.after(()=>rmSync(f.root,{recursive:true,force:true}));
  if (sealed) {
    const initial = jsonRecord(readFileSync(path.join(f.stateDir, 'state.json'), 'utf8'));
    const tasks=goalTasks(initial.tasks);
    tasks[0] = { ...item(tasks[0]), authoring_contract_version: 2, turn_id: 'turn-1' };
    initial.tasks=tasks;
    new GoalEventStore({ stateDir: f.stateDir }).initialize(initial);
  }
  runHybridSearchWithReceipt({stateDir:f.stateDir,taskId:'task-1',query:'pig iron',cwd:f.worktreePath,
    toolConfig:{tiangong_cli_root:'/unused/cli',flow_hybrid_search_root:'/unused/hybrid'},randomId:()=> 'adopted-receipt',
    runner:()=>({status:0,stdout:JSON.stringify({data:[{id:UUID_A},{id:UUID_B}]})})});
  const direct={uuid:UUID_A,state_code:100,base_name_en:'Pig iron',base_name_zh:'生铁',flow_type:'product',classifications:[],property:'Mass',flow_property_uuid:UUID_B,unit_group_uuid:UUID_C,unit_group_name_en:'Units of mass',unit_group_name_zh:'质量',reference_unit:'kg',response_sha256:`sha256:${'a'.repeat(64)}`};
  for(const uuid of [UUID_A,UUID_B]) recordHybridCandidateDirectRead({stateDir:f.stateDir,taskId:'task-1',receiptId:'adopted-receipt',uuid,cwd:f.worktreePath,tiangongCliRoot:'/unused/cli',reader:()=>({...direct,uuid})});
  const decisionsPath=path.join(f.root,'decisions.json');
  writeFileSync(decisionsPath,JSON.stringify([
    {uuid:UUID_A,decision:'adopted',reason_code:null,reason:'Suitable iron flow.',general_comment_review:'No limitation.'},
    {uuid:UUID_B,decision:'rejected',reason_code:'semantic_mismatch',reason:'Different material.',general_comment_review:'Different material.'},
  ]));
  finalizeHybridSearchReceipt({stateDir:f.stateDir,taskId:'task-1',receiptId:'adopted-receipt',decisionsPath,cwd:f.worktreePath});
  const task=item(goalTasks(jsonRecord(readFileSync(path.join(f.stateDir,'state.json'),'utf8')).tasks)[0]);
  const report={hybrid_search_receipt_ids:['adopted-receipt'],uuid_audits:[{uuid:UUID_A,hybrid_search_receipt_id:'adopted-receipt'}],rejected_uuid_candidates:[{uuid:UUID_B,receipt_id:'adopted-receipt',reason_code:'semantic_mismatch',reason:'Different material.'}]};
  return {...f,task,report,direct};
}

test('receipt local integrity passes while unavailable online adoption is skipped as a dependency', t=>{
  const f=adoptedReceiptCollectionFixture(t);
  const result=auditHybridSearchReceipts({...f,collect:true,verifiedUuidReads:[]});
  assert.equal(result.valid,false);
  assert.equal(item(item(result.checks.find(c=>c.check_id==='receipt_integrity'))).status,'passed');
  const adoption=item(item(result.checks.find(c=>c.check_id==='receipt_adoption')));
  assert.equal(adoption.subject_id,`adopted-receipt:${UUID_A}`);
  assert.equal(adoption.status,'skipped');assert.equal(adoption.reason,'dependency_unavailable');
  assert.deepEqual(result.findings,[]);
  assert.equal(result.results.length,1);
  assert.equal(auditHybridSearchReceipts({...f,collect:true,verifiedUuidReads:[f.direct]}).valid,true);
});

test('local rejected claims are checked even while adopted UUID online evidence is unavailable', t=>{
  const f=adoptedReceiptCollectionFixture(t);item(item(f.report.rejected_uuid_candidates)[0]).reason='Changed wording';
  const result=auditHybridSearchReceipts({...f,collect:true,verifiedUuidReads:[]});
  assert.equal(result.valid,false);assert.equal(result.findings.length,1);
  assert.equal(item(item(item(result.findings)[0]).details).failure_kind,'author_claim');
  assert.equal(item(item(result.checks.find(c=>c.check_id==='receipt_adoption'))).status,'skipped');
});

test('missing local adoption is a content finding even when the online read is unavailable', t=>{
  const f=adoptedReceiptCollectionFixture(t);item(item(f.report.uuid_audits)[0]).uuid=UUID_B;
  const result=auditHybridSearchReceipts({...f,collect:true,verifiedUuidReads:[]});
  assert.equal(item(item(result.checks.find(c=>c.check_id==='receipt_adoption'))).status,'failed');
  assert.equal(item(item(result.findings)[0]).code,'GOAL_HYBRID_SEARCH_RECEIPT_MISSING');
});

test('missing receipt membership does not conceal an independently damaged receipt', async t=>{
  const f=adoptedReceiptCollectionFixture(t);
  const {loadReportReceiptEvidence}=await import('./uuid-search-receipts.ts');
  const paths:string[]=[];
  const {readdirSync}=await import('node:fs');
  const visit=(dir:string)=>{for(const entry of readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())visit(file);else if(entry.name==='adopted-receipt.result.json')paths.push(file);}};
  visit(path.join(f.stateDir,'uuid-search-receipts'));
  writeFileSync(item(item(paths)[0]),readFileSync(item(item(paths)[0]),'utf8')+'\n');
  f.report.hybrid_search_receipt_ids=[];
  const result=loadReportReceiptEvidence({...f,collect:true});
  assert.equal(result.valid,false);
  assert.deepEqual(result.findings.map(finding=>finding.code).sort(),['GOAL_HYBRID_SEARCH_RECEIPT_HASH_MISMATCH','GOAL_HYBRID_SEARCH_RECEIPT_MISSING']);
});

test('all rejection mismatches within one receipt remain visible', t=>{
  const f=adoptedReceiptCollectionFixture(t);
  f.report.rejected_uuid_candidates=[{uuid:UUID_B,receipt_id:'adopted-receipt',reason_code:'semantic_mismatch',reason:'Changed one'}, {uuid:UUID_B,receipt_id:'adopted-receipt',reason_code:'semantic_mismatch',reason:'Changed two'}];
  const result=auditHybridSearchReceipts({...f,collect:true,verifiedUuidReads:[]});
  assert.equal(result.findings.length,2);
});

for (const result of [{}, {valid:false,data:[]}]) test(`hybrid tool protocol failure cannot become an empty successful receipt: ${JSON.stringify(result)}`, t=>{
  const f=fixture();t.after(()=>rmSync(f.root,{recursive:true,force:true}));
  assert.throws(()=>runHybridSearchWithReceipt({stateDir:f.stateDir,taskId:'task-1',query:'pig iron',cwd:f.worktreePath,
    toolConfig:{tiangong_cli_root:'/unused/cli',flow_hybrid_search_root:'/unused/hybrid'},randomId:()=> 'invalid-receipt',runner:()=>({status:0,stdout:JSON.stringify(result)})}),error=>goalError(error).code==='GOAL_HYBRID_SEARCH_RESULT_INVALID');
});

test('receipt adoption continuation advances within a receipt after the execution window ends', t=>{
  const f=adoptedReceiptCollectionFixture(t);
  f.report.uuid_audits.push({uuid:UUID_B,hybrid_search_receipt_id:'adopted-receipt'});
  let tick=0;
  const first=auditHybridSearchReceipts({...f,collect:true,verifiedUuidReads:[f.direct],deadline:5,now:()=>++tick});
  assert.equal(item(first.checks.find(c=>c.subject_id===`adopted-receipt:${UUID_A}`)).status,'passed');
  assert.equal(item(first.checks.find(c=>c.subject_id===`adopted-receipt:${UUID_B}`)).reason,'execution_window');
  assert.equal(first.progress.start_after,`adopted-receipt:${UUID_A}`);
  tick=0;
  const resumed=auditHybridSearchReceipts({...f,collect:true,verifiedUuidReads:[f.direct],deadline:5,now:()=>++tick,startAfter:first.progress.start_after});
  assert.equal(item(resumed.checks.find(c=>c.subject_id===`adopted-receipt:${UUID_B}`)).status,'failed');
  assert.equal(resumed.findings.some(finding=>finding.code==='GOAL_HYBRID_SEARCH_RECEIPT_MISSING'),true);
});

function receiptRequestFixture(t:TestContext) {
  const f = adoptedReceiptCollectionFixture(t, true);
  return { ...f, eventStore: new GoalEventStore({ stateDir: f.stateDir }) };
}

test('request stages share one full traversal while independently checking adoption each time', t => {
  const f = receiptRequestFixture(t);
  let scans = 0;
  const iterate = GoalEventStore.prototype.iterateEvents;
  t.mock.method(GoalEventStore.prototype, 'iterateEvents', function* (this:GoalEventStore,options:Parameters<GoalEventStore["iterateEvents"]>[0]) { scans++; yield* iterate.call(this, options); });
  f.eventStore.rebuild();
  assert.equal(loadReportReceiptEvidence(f).length, 1);
  assert.equal(loadReportReceiptEvidence({ ...f, collect: true }).valid, true);
  assert.equal(auditHybridSearchReceipts({ ...f, collect: true, verifiedUuidReads: [f.direct] }).valid, true);
  assert.equal(auditHybridSearchReceipts({ ...f, verifiedUuidReads: [f.direct] }).length, 1);
  const changed = { ...f.direct, base_name_en: 'Changed material identity' };
  const rejected = auditHybridSearchReceipts({ ...f, collect: true, verifiedUuidReads: [changed] });
  assert.equal(rejected.valid, false);
  assert.equal(item(rejected.checks.find(c => c.check_id === 'receipt_adoption')).status, 'failed');
  assert.equal(item(auditHybridSearchReceipts({ ...f, collect: true, verifiedUuidReads: [] }).checks.find(c => c.check_id === 'receipt_adoption')).status, 'skipped');
  assert.equal(scans, 1);
});

test('shared receipt index sees legitimate appends and rejects subsequent chain corruption', t => {
  const f = receiptRequestFixture(t);
  assert.equal(loadReportReceiptEvidence(f).length, 1);
  const writer = new GoalEventStore({ stateDir: f.stateDir });
  writer.append({ event_id: 'legitimate-append', type: 'fixture', payload: { value: 'original' } });
  assert.equal(loadReportReceiptEvidence(f).length, 1);
  const file = path.join(f.stateDir, 'events.jsonl');
  writeFileSync(file, readFileSync(file, 'utf8').replace('original', 'modified'));
  assert.throws(() => loadReportReceiptEvidence(f), { code: 'GOAL_EVENT_LOG_CORRUPT' });
});

test('shared receipt index never caches a passing artifact hash or task binding', t => {
  const f = receiptRequestFixture(t);
  assert.equal(loadReportReceiptEvidence(f).length, 1);
  assert.throws(() => loadReportReceiptEvidence({ ...f, task: { ...f.task, id: 'another-task' } }));
  const paths = path.join(f.stateDir, 'uuid-search-receipts', 'task-1', 'attempt-1');
  const raw = path.join(paths, 'adopted-receipt.result.json');
  const original = readFileSync(raw);
  const search = path.join(paths, 'adopted-receipt.search.json');
  const metadata = jsonRecord(readFileSync(search,"utf8"));
  writeFileSync(raw, original.toString().replace(UUID_A, UUID_C));
  // A new author-controlled hash also cannot replace the original event seal.
  metadata.result_sha256 = `sha256:${'c'.repeat(64)}`;
  writeFileSync(search, JSON.stringify(metadata));
  assert.throws(() => loadReportReceiptEvidence(f), { code: 'GOAL_RECEIPT_INTEGRITY_MISMATCH' });
  const second = auditHybridSearchReceipts({ ...f, collect: true, verifiedUuidReads: [f.direct] });
  assert.equal(second.valid, false);
  assert.equal(item(second.checks.find(c => c.check_id === 'receipt_integrity')).status, 'failed');
  assert.equal(item(second.checks.find(c => c.check_id === 'receipt_adoption')).status, 'skipped');
});

test('receipt entry points reject an index from another directory even with an empty report', t => {
  const f = receiptRequestFixture(t), other = receiptRequestFixture(t);
  const args = { ...f, eventStore: other.eventStore, report: { hybrid_search_receipt_ids: [] } };
  assert.throws(() => loadReportReceiptEvidence(args), { code: 'GOAL_RECEIPT_INTEGRITY_MISMATCH' });
  assert.throws(() => auditHybridSearchReceipts({ ...args, collect: true }), { code: 'GOAL_RECEIPT_INTEGRITY_MISMATCH' });
});

test('shared receipt index preserves sealed earlier-turn evidence for the same task retry', t => {
  const f = receiptRequestFixture(t);
  assert.equal(loadReportReceiptEvidence(f).length, 1);
  const next = { ...f.task, attempt: 2, turn_id: 'turn-2', state: 'authoring_repair' };
  new GoalEventStore({ stateDir: f.stateDir }).append({ event_id: 'same-task-retry', type: 'task_replaced', payload: { task: next } });
  const results = loadReportReceiptEvidence({ ...f, task: next });
  assert.equal(results.length, 1);
  assert.equal(item(item(results)[0]).scope, 'task_retry_reuse');
  assert.equal(auditHybridSearchReceipts({ ...f, task: next, collect: true, verifiedUuidReads: [f.direct] }).valid, true);
});
