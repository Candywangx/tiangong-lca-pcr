import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  rmSync,
  utimesSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { passingReview } from "./fixtures/review-results.ts";
import { GoalEventStore } from "./event-store.ts";
import { GoalHarnessError } from "./errors.ts";
import { runHybridSearchWithReceipt, recordHybridCandidateDirectRead, finalizeHybridSearchReceipt } from "./uuid-search-receipts.ts";
import { resolveAuthorSubmission } from "./author-submission.ts";
import * as api from "./report-preparation.ts";
const { assembleAuthorReport, prepareAuthorReport, resolvePreparedReport } =
  api;
import { record, records, field, text, errorCode, jsonRecord } from "./domain.ts";
import type { UnknownRecord, GoalEventInput } from "./domain.ts";
import type { TestContext } from "node:test";
import type { ResolvedPreparationFailure } from "./report-preparation.ts";
function item<T>(values: readonly T[], index: number): T {const value=values[index];assert.ok(value);return value;}
function fileAt(values: readonly string[], index: number): string {return item(values,index);}
function failure(value:ResolvedPreparationFailure|null):ResolvedPreparationFailure {assert.ok(value);return value;}
const evidence=records(jsonRecord(readFileSync(new URL("./fixtures/44125-rejection-differences.json",import.meta.url),"utf8")).findings).map(item=>({...item,uuid:text(item.uuid),expected:{...record(item.expected),decision:text(field(item.expected,"decision"))},claimed:record(item.claimed)}));
const firstEvidence=item(evidence,0);
const git = (cwd:string, args:string[]) =>
  execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
function fixture(t:TestContext) {
  const root = mkdtempSync(path.join(tmpdir(), "pcr-prepared-report-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const pcr = "library/pcrs/machinery/general/baler",
    stateDir = path.join(root, "library/.pcr-builder-state/goals/test");
  mkdirSync(path.join(root, pcr), { recursive: true });
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "Test"]);
  git(root, ["config", "user.email", "test@example.invalid"]);
  writeFileSync(
    path.join(root, ".gitignore"),
    "library/.pcr-builder-state/\n.worktrees/\n",
  );
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "baseline"]);
  const baseline = git(root, ["rev-parse", "HEAD"]);
  const files = [
    "manifest.yaml",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "structured.yaml",
  ].map((f) => `${pcr}/${f}`);
  for (const f of files) writeFileSync(path.join(root, f), `test ${f}\n`);
  git(root, ["add", ...files]);
  git(root, ["commit", "-qm", "author"]);
  const commit = git(root, ["rev-parse", "HEAD"]);
  const task = {
    id: "cpc:3.0:44125",
    cpc_code: "44125",
    pcr_path: pcr,
    queue_action: "create_new",
    state: "authoring",
    attempt: 1,
    repair_count: 0,
    turn_id: "turn-1",
    worktree_path: root,
    allowed_files: files,
    author_base_commit: baseline,
    authoring_contract_version: 2,
  };
  const store = new GoalEventStore({ stateDir });
  store.initialize({
    goal_id: "test",
    baseline: { commit: baseline },
    tasks: [task],
    snapshots: [],
  });
  const draft:UnknownRecord = {
    schema_version: 1,
    cpc_code: "44125",
    product_name_en: "Baler",
    product_name_zh: "打捆机",
    pcr_path: pcr,
    queue_action: "create_new",
    files,
    sources: [],
    uuid_audits: [],
    receipt_ids: [],
    inventory: {
      total_rows: 0,
      matched_rows: 0,
      unresolved_rows: 0,
      unresolved: [],
    },
    reference_product_uuid_confirmed: false,
    ranges: [],
    bilingual: { aligned: true, en_inventory_rows: 0, zh_inventory_rows: 0 },
    structured_sync: {
      first_run_ok: true,
      second_run_clean: true,
      schema_valid: true,
    },
    validate: {
      ok: true,
      exit_code: 0,
      known_shared_artifact_only: false,
      summary: null,
    },
    complexity_justification: null,
    cartesian_expansion_review: null,
    methodology_necessity_approved: null,
    commit_sha: commit,
    unresolved_issues: [],
    boundary_review: null,
  };
  const draftPath = path.join(stateDir, "draft.json");
  writeFileSync(draftPath, JSON.stringify(draft));
  const options = {
    config: { project_root: root, goal_id: "test", tools: {} },
    stateDir,
    taskId: task.id,
    draftPath,
    cwd: root,
    reviewFn: passingReview,
  };
  return { root, stateDir, task, store, draft, draftPath, options, files };
}
test("report assembly uses the exact real 44125 rejection reasons without changing the draft", () => {
  const draft = {
      receipt_ids: ["receipt-44125"],
      uuid_audits: [],
      inventory: { unresolved: [] },
    },
    before = JSON.stringify(draft);
  const receipts = [
    {
      receipt_id: "receipt-44125",
      task_id: "task",
      candidate_decisions: evidence.map((e) => ({
        uuid: e.uuid,
        ...e.expected,
      })),
    },
  ];
  const result = assembleAuthorReport({ draft, receiptAudits: receipts });
  assert.deepEqual(
    records(result.rejected_uuid_candidates).map((r) => r.reason),
    evidence.map((e) => field(e.expected,"reason")),
  );
  assert.equal(JSON.stringify(draft), before);
});
test("assembly rejects explicit paraphrases and adoption conflicts instead of overriding them", () => {
  const receiptAudits = [
    {
      receipt_id: "r",
      candidate_decisions: [
        { uuid: firstEvidence.uuid, ...firstEvidence.expected },
      ],
    },
  ];
  for (const draft of [
    {
      rejected_uuid_candidates: [
        { receipt_id: "r", uuid: firstEvidence.uuid, ...firstEvidence.claimed },
      ],
    },
    {
      uuid_audits: [{ uuid: firstEvidence.uuid, hybrid_search_receipt_id: "r" }],
    },
  ])
    assert.throws(
      () => assembleAuthorReport({ draft, receiptAudits }),
      (e) => errorCode(e) === "GOAL_REPORT_DECISION_CONFLICT",
    );
});
test("preparation preserves draft, binds a real four-file commit and repeats without counter changes", (t) => {
  const f = fixture(t),
    before = readFileSync(f.draftPath),
    first = prepareAuthorReport(f.options),
    second = prepareAuthorReport(f.options);
  assert.deepEqual(first, second);
  assert.deepEqual(readFileSync(f.draftPath), before);
  const loaded = resolvePreparedReport({
    stateDir: f.stateDir,
    task: f.task,
    submission: first,
  });
  assert.equal(loaded.report.commit_sha, f.draft.commit_sha);
  assert.equal(item(f.store.rebuild().tasks,0).repair_count, 0);
  assert.equal(
    f.store.readEvents().filter((e) => e.type === "author_report_prepared")
      .length,
    1,
  );
});
test("prepared reports cannot be replayed into another turn or task", (t) => {
  const f = fixture(t),
    submission = prepareAuthorReport(f.options);
  for (const task of [
    { ...f.task, turn_id: "turn-2" },
    { ...f.task, id: "other-task" },
  ])
    assert.throws(() =>
      resolvePreparedReport({ stateDir: f.stateDir, task, submission }),
    );
});
test("prepared report byte changes invalidate the old reference", (t) => {
  const f = fixture(t),
    submission = prepareAuthorReport(f.options),
    loaded = resolvePreparedReport({
      stateDir: f.stateDir,
      task: f.task,
      submission,
    });
  writeFileSync(loaded.report_path, "{}");
  assert.throws(() =>
    resolvePreparedReport({ stateDir: f.stateDir, task: f.task, submission }),
  );
});
test("preparation refuses held tasks and non-passing checks", (t) => {
  const f = fixture(t);
  assert.throws(() =>
    prepareAuthorReport({
      ...f.options,
      reviewFn: () => ({
        valid: true,
        builder: { measurement: { status: "manual_review" } },
        sync: { first_run_clean: true, second_run_clean: true },
      }),
    }),
  );
  f.store.append({
    event_id: "held",
    type: "task_replaced",
    payload: { task: { ...f.task, coordinator_hold: { reason: "review" } } },
  });
  assert.throws(() => prepareAuthorReport(f.options));
});
test("resolver rejects an old task snapshot after the authoritative turn changes", (t) => {
  const f = fixture(t),
    submission = prepareAuthorReport(f.options);
  f.store.append({
    event_id: "advance-turn",
    type: "task_replaced",
    payload: { task: { ...f.task, turn_id: "turn-2" } },
  });
  assert.throws(
    () =>
      resolvePreparedReport({ stateDir: f.stateDir, task: f.task, submission }),
    (e) => errorCode(e) === "GOAL_REPORT_BINDING_MISMATCH",
  );
});
test("assembly rejects an explicitly inconsistent generated receipt membership", () => {
  assert.throws(
    () =>
      assembleAuthorReport({
        draft: { hybrid_search_receipt_ids: [], receipt_ids: ["r"] },
        receiptAudits: [{ receipt_id: "r", candidate_decisions: [] }],
      }),
    (e) => errorCode(e) === "GOAL_REPORT_DECISION_CONFLICT",
  );
});

test("a prepared directory is not a ready report until its event commits, and retry recovers it", t => {
  const f = fixture(t);
  const original = GoalEventStore.prototype.append;
  try {
    GoalEventStore.prototype.append = function(this:GoalEventStore,event:GoalEventInput) {
      if (event.type === "author_report_prepared") throw new Error("fixture: crash before ready event");
      return original.call(this, event);
    };
    assert.throws(() => prepareAuthorReport(f.options), /crash before ready event/);
  } finally {
    GoalEventStore.prototype.append = original;
  }
  assert.equal(f.store.readEvents().filter(event => event.type === "author_report_prepared").length, 0);
  const reference = prepareAuthorReport(f.options);
  assert.equal(resolvePreparedReport({stateDir:f.stateDir,task:f.task,submission:reference}).report.commit_sha, f.draft.commit_sha);
  assert.deepEqual(prepareAuthorReport(f.options), reference);
  assert.equal(f.store.readEvents().filter(event => event.type === "author_report_prepared").length, 1);
  assert.equal(item(f.store.rebuild().tasks,0).repair_count, 0);
});

test("preparation rejects a config bound to a different goal without publishing a report", t => {
  const f = fixture(t);
  assert.throws(() => prepareAuthorReport({...f.options, config:{...f.options.config, goal_id:"other"}}), error => errorCode(error) === "GOAL_REPORT_BINDING_MISMATCH");
  assert.equal(f.store.readEvents().filter(event => event.type === "author_report_prepared").length, 0);
});

test("dirty PCR content cannot produce a prepared report even with a passing review callback", t => {
  const f = fixture(t);
  writeFileSync(path.join(f.root, fileAt(f.files,1)), "uncommitted change\n");
  let reviews = 0;
  assert.throws(() => prepareAuthorReport({...f.options, reviewFn:() => { reviews++; return {}; }}), error => errorCode(error) === "GOAL_REPORT_COMMIT_INVALID");
  assert.equal(reviews, 0);
  assert.equal(f.store.readEvents().filter(event => event.type === "author_report_prepared").length, 0);
  assert.equal(item(f.store.rebuild().tasks,0).repair_count, 0);
});

test("preparation failure is independently bound and readable without trusting the author's failure code", t => {
  const f = fixture(t);
  const observed = new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "Public identity read timed out.", {
    phase: "preparation", origin: "tool_transport", failure_kind: "network", retryable: true,
    subject_id: "fixture-uuid", findings: [{ code: "GOAL_UUID_DIRECT_READ_FAILED", message: "Public read timed out." }],
  });
  assert.throws(() => prepareAuthorReport({ ...f.options, auditUuidsFn: () => { throw observed; } }),
    error => errorCode(error) === observed.code && Boolean(field(field(error,"details"),"preparation_failure_id")));
  const loaded = failure(api.resolvePreparationFailure({ stateDir: f.stateDir, task: f.task }));
  assert.equal(loaded.failure.code, observed.code);
  assert.equal(loaded.failure.details.origin, "tool_transport");
  assert.equal(field(loaded.manifest.binding,"turn_id"), "turn-1");
  assert.deepEqual(item(f.store.rebuild().tasks,0), f.task);
  assert.equal(f.store.readEvents().filter(e => e.type === "author_report_prepared").length, 0);
  assert.throws(() => resolveAuthorSubmission({ stateDir: f.stateDir, task: f.task, wire: {
    schema_version: 2, prepared_report: null, boundary_review_report: null,
    failure: { code: "GOAL_AUTHOR_PREFLIGHT_FAILED", message: "Author guessed a different cause." },
  } }), error => errorCode(error) === observed.code && field(field(error,"details"),"independently_observed") === true);
  writeFileSync(loaded.failure_path, "{}");
  assert.throws(() => api.resolvePreparationFailure({ stateDir: f.stateDir, task: f.task }),
    error => errorCode(error) === "GOAL_REPORT_BINDING_MISMATCH");
});

test("a preparation failure from an earlier turn is never reused for a continuation", t => {
  const f = fixture(t);
  assert.throws(() => prepareAuthorReport({ ...f.options, auditUuidsFn: () => {
    throw new GoalHarnessError("GOAL_REVIEW_WINDOW_EXHAUSTED", "Assessment window expired.", {
      phase: "preparation", origin: "harness_deadline", failure_kind: "execution_window", retryable: false,
    });
  } }));
  assert.equal(typeof api.resolvePreparationFailure, "function");
  const next = { ...f.task, turn_id: "turn-2" };
  f.store.append({ event_id: "continue", type: "task_replaced", payload: { task: next } });
  assert.equal(api.resolvePreparationFailure({ stateDir: f.stateDir, task: next }), null);
  assert.throws(() => api.resolvePreparationFailure({ stateDir: f.stateDir, task: f.task }),
    error => errorCode(error) === "GOAL_REPORT_BINDING_MISMATCH");
});

test("a returned failed or incomplete UUID result cannot publish a ready preparation", t => {
  const f = fixture(t);
  for (const result of [ { valid: false, results: [], checks: [], findings: [] },
    { valid: true, results: [], checks: [{ phase: "preparation", check_id: "uuid_public_read", subject_id: "missing", status: "skipped" }], findings: [] } ]) {
    assert.throws(() => prepareAuthorReport({ ...f.options, auditUuidsFn: () => result }));
    assert.equal(f.store.readEvents().filter(e => e.type === "author_report_prepared").length, 0);
  }
});

test("an exhausted preparation window before commit inspection leaves a bound failure observation", t => {
  const f = fixture(t);
  assert.throws(() => prepareAuthorReport({ ...f.options, deadline: Date.now() - 1 }), error =>
    field(field(error,"details"),"failure_kind") === "execution_window" && Boolean(field(field(error,"details"),"preparation_failure_id")));
  const loaded = failure(api.resolvePreparationFailure({ stateDir: f.stateDir, task: f.task }));
  assert.equal(loaded.failure.details.failure_kind, "execution_window");
  assert.equal(loaded.manifest.content_verified, false);
  assert.equal(item(f.store.rebuild().tasks,0).attempt, 1);
});

test("early missing-file and invalid-schema failures remain independently readable", t => {
  const f = fixture(t);
  const missing = path.join(f.root, fileAt(f.files,3));
  rmSync(missing);
  assert.throws(() => prepareAuthorReport(f.options), error => Boolean(field(field(error,"details"),"preparation_failure_id")));
  const loaded = failure(api.resolvePreparationFailure({ stateDir:f.stateDir, task:f.task }));
  assert.equal(record(loaded.manifest.files)[fileAt(f.files,3)], null);
  writeFileSync(missing, `test ${fileAt(f.files,3)}\n`);
  assert.throws(() => api.resolvePreparationFailure({ stateDir:f.stateDir, task:f.task }), error => errorCode(error) === "GOAL_REPORT_BINDING_MISMATCH");
  delete f.draft.product_name_en;
  writeFileSync(f.draftPath, JSON.stringify(f.draft));
  assert.throws(() => prepareAuthorReport(f.options), error => Boolean(field(field(error,"details"),"preparation_failure_id")));
  const schemaFailure = failure(api.resolvePreparationFailure({ stateDir:f.stateDir,task:f.task }));
  assert.ok(records(schemaFailure.failure.details.findings).every(finding => field(finding.details,"failure_kind") === "author_claim"));
});

test('preparation cannot publish ready when its final input recheck has exhausted the window', t => {
  const f=fixture(t); let clock=Date.now(); const deadline=clock+5000;
  t.mock.method(Date,'now',()=>clock);
  assert.throws(()=>prepareAuthorReport({...f.options,deadline,reviewFn:args=>{
    const result=passingReview(args); clock=deadline; return result;
  }}),error=>errorCode(error)==='GOAL_REVIEW_WINDOW_EXHAUSTED');
  assert.equal(f.store.readEvents().filter(event=>event.type==='author_report_prepared').length,0);
});

test('prepared reference resolution observes the harvest deadline before git inspection', t => {
  const f=fixture(t), reference=prepareAuthorReport(f.options);
  assert.throws(()=>resolveAuthorSubmission({stateDir:f.stateDir,task:f.task,wire:{schema_version:2,prepared_report:reference,boundary_review_report:null,failure:null},deadline:Date.now()-1}),error=>errorCode(error)==='GOAL_REVIEW_WINDOW_EXHAUSTED');
});

function countFullTraversals(t:TestContext) {
  let count = 0;
  const iterate = GoalEventStore.prototype.iterateEvents;
  t.mock.method(GoalEventStore.prototype, "iterateEvents", function* (this:GoalEventStore,options:Parameters<GoalEventStore["iterateEvents"]>[0]) {
    count++; yield* iterate.call(this, options);
  });
  return () => count;
}

test("preparation shares its request index and retains one fresh publication verification", t => {
  const f = fixture(t), scans = countFullTraversals(t);
  prepareAuthorReport(f.options);
  assert.equal(scans(), 2, "one request traversal and one fresh publication traversal");
});

test("early preparation error shares the request index with the outer failure handler", t => {
  const f = fixture(t);
  delete f.draft.product_name_en;
  writeFileSync(f.draftPath, JSON.stringify(f.draft));
  const scans = countFullTraversals(t);
  assert.throws(() => prepareAuthorReport(f.options), error => Boolean(field(field(error,"details"),"preparation_failure_id")));
  assert.equal(scans(), 2, "one request traversal and one fresh failure publication traversal");
});

test("failure resolver shares a verified index and applies prepared clearing in event sequence order", t => {
  const f = fixture(t);
  assert.throws(() => prepareAuthorReport({ ...f.options, auditUuidsFn: () => {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "Fixture public read unavailable.");
  } }));
  const eventStore = new GoalEventStore({ stateDir: f.stateDir }), scans = countFullTraversals(t);
  eventStore.rebuild();
  const args = { stateDir: f.stateDir, task: f.task, eventStore };
  const first = failure(api.resolvePreparationFailure(args));
  assert.equal(first.failure.code, "GOAL_UUID_DIRECT_READ_FAILED");
  assert.deepEqual(api.resolvePreparationFailure(args), first);
  assert.equal(scans(), 1);
  // A legitimate append through a different store invalidates the request index.
  const failed = f.store.getEventsByType("author_report_preparation_failed").at(-1); assert.ok(failed);
  const beforeAppend = scans();
  f.store.append({ event_id: "clear-failure", type: "author_report_prepared", payload: { binding: failed.payload.binding } });
  assert.equal(api.resolvePreparationFailure(args), null);
  assert.equal(scans(), beforeAppend + 1);
  f.store.append({ event_id: "later-failure", type: "author_report_preparation_failed", payload: failed.payload });
  assert.deepEqual(api.resolvePreparationFailure(args), first);
});

test("shared failure resolver rechecks task binding, commit and content", t => {
  const f = fixture(t);
  assert.throws(() => prepareAuthorReport({ ...f.options, auditUuidsFn: () => {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "Fixture read unavailable.");
  } }));
  const eventStore = new GoalEventStore({ stateDir: f.stateDir });
  const args = { stateDir: f.stateDir, task: f.task, eventStore };
  assert.ok(api.resolvePreparationFailure(args));
  assert.equal(api.resolvePreparationFailure({ ...args, forCommit: "other-commit" }), null);
  writeFileSync(path.join(f.root, fileAt(f.files,1)), "changed content\n");
  assert.throws(() => api.resolvePreparationFailure(args), { code: "GOAL_REPORT_COMMIT_INVALID" });
  git(f.root, ["add", fileAt(f.files,1)]);
  git(f.root, ["commit", "-qm", "changed author content"]);
  assert.throws(() => api.resolvePreparationFailure(args), { code: "GOAL_REPORT_COMMIT_INVALID" });
  const next = { ...f.task, turn_id: "turn-2" };
  f.store.append({ event_id: "next-turn", type: "task_replaced", payload: { task: next } });
  assert.equal(api.resolvePreparationFailure({ ...args, task: next }), null);
  assert.throws(() => api.resolvePreparationFailure(args), { code: "GOAL_REPORT_BINDING_MISMATCH" });
});

test("shared failure resolver rejects unchanged-length chain corruption after verification", t => {
  const f = fixture(t), eventStore = new GoalEventStore({ stateDir: f.stateDir });
  f.store.append({ event_id: "history", type: "fixture", payload: { value: "original" } });
  const file = path.join(f.stateDir, "events.jsonl"), fixedTime = new Date('2026-09-01T00:00:00Z');
  utimesSync(file, fixedTime, fixedTime);
  const args = { stateDir: f.stateDir, task: f.task, eventStore };
  assert.equal(api.resolvePreparationFailure(args), null);
  writeFileSync(file, readFileSync(file, "utf8").replace("original", "modified"));
  utimesSync(file, fixedTime, fixedTime);
  assert.throws(() => api.resolvePreparationFailure(args), { code: "GOAL_EVENT_LOG_CORRUPT" });
});

test("failure resolver rejects a request index from another Goal directory", t => {
  const f = fixture(t), other = fixture(t);
  const eventStore = new GoalEventStore({ stateDir: other.stateDir });
  assert.throws(() => api.resolvePreparationFailure({ stateDir: f.stateDir, task: f.task, eventStore }),
    { code: "GOAL_REPORT_BINDING_MISMATCH" });
});

test("fresh publication verification rejects task changes during a shared-index preparation", t => {
  const f = fixture(t);
  assert.throws(() => prepareAuthorReport({ ...f.options, reviewFn: args => {
    f.store.append({ event_id: "change-during-review", type: "task_replaced", payload: { task: { ...f.task, turn_id: "turn-2" } } });
    return passingReview(args);
  } }), { code: "GOAL_REPORT_BINDING_MISMATCH" });
  assert.equal(f.store.getEventsByType("author_report_prepared").length, 0);
});

function sealedPreparationFixture(t:TestContext) {
  const f = fixture(t), receiptId = 'prepared-receipt', uuid = firstEvidence.uuid;
  const args = { stateDir: f.stateDir, taskId: f.task.id, cwd: f.root, receiptId };
  const { receipt } = runHybridSearchWithReceipt({ ...args, query: 'baler component', randomId: () => receiptId,
    toolConfig: { flow_hybrid_search_root: '/unused/hybrid' },
    runner: () => ({ status: 0, stdout: JSON.stringify({ data: [{ id: uuid }] }) }) });
  recordHybridCandidateDirectRead({ ...args, uuid, tiangongCliRoot: '/unused/cli',
    reader: () => ({ uuid, state_code: 100, base_name_en: 'Baler component', response_sha256: `sha256:${'a'.repeat(64)}` }) });
  const decisionsPath = path.join(f.stateDir, 'decisions-input.json');
  writeFileSync(decisionsPath, JSON.stringify([{ uuid, ...firstEvidence.expected, general_comment_review: 'Different component scope.' }]));
  finalizeHybridSearchReceipt({ ...args, decisionsPath });
  f.draft.receipt_ids = [receiptId];
  writeFileSync(f.draftPath, JSON.stringify(f.draft));
  return { ...f, receipt };
}

test('sealed receipt preparation shares both request batches and rereads evidence under a fresh publication index', t => {
  const f = sealedPreparationFixture(t), scans = countFullTraversals(t);
  const submission = prepareAuthorReport(f.options);
  assert.equal(scans(), 2);
  const firstScans = scans();
  assert.deepEqual(prepareAuthorReport(f.options), submission);
  assert.equal(scans() - firstScans, 2, 'repeat uses one request and one fresh guard even when resolving a prior reference');
  assert.equal(f.store.getEventsByType('author_report_prepared').length, 1);
});

test('publication guard detects receipt substitution after both request batches passed', t => {
  const f = sealedPreparationFixture(t);
  let scans = 0;
  const iterate = GoalEventStore.prototype.iterateEvents;
  t.mock.method(GoalEventStore.prototype, 'iterateEvents', function* (this:GoalEventStore,options:Parameters<GoalEventStore["iterateEvents"]>[0]) {
    scans++;
    // The second reconstruction is the freshly constructed store under the publication lock.
    if (scans === 2) writeFileSync(text(f.receipt.result_path), readFileSync(text(f.receipt.result_path), 'utf8') + '\n');
    yield* iterate.call(this, options);
  });
  assert.throws(() => prepareAuthorReport(f.options), { code: 'GOAL_RECEIPT_INTEGRITY_MISMATCH' });
  assert.equal(f.store.getEventsByType('author_report_prepared').length, 0);
});
