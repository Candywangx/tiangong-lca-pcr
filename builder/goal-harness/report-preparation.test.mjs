import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { passingReview } from "./fixtures/review-results.mjs";
import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { resolveAuthorSubmission } from "./author-submission.mjs";
const api = await import("./report-preparation.mjs").catch(() => ({}));
const { assembleAuthorReport, prepareAuthorReport, resolvePreparedReport } =
  api;
const evidence = JSON.parse(
  readFileSync(
    new URL("./fixtures/44125-rejection-differences.json", import.meta.url),
  ),
).findings;
const git = (cwd, args) =>
  execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
function fixture(t) {
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
  const draft = {
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
    result.rejected_uuid_candidates.map((r) => r.reason),
    evidence.map((e) => e.expected.reason),
  );
  assert.equal(JSON.stringify(draft), before);
});
test("assembly rejects explicit paraphrases and adoption conflicts instead of overriding them", () => {
  const receiptAudits = [
    {
      receipt_id: "r",
      candidate_decisions: [
        { uuid: evidence[0].uuid, ...evidence[0].expected },
      ],
    },
  ];
  for (const draft of [
    {
      rejected_uuid_candidates: [
        { receipt_id: "r", uuid: evidence[0].uuid, ...evidence[0].claimed },
      ],
    },
    {
      uuid_audits: [{ uuid: evidence[0].uuid, hybrid_search_receipt_id: "r" }],
    },
  ])
    assert.throws(
      () => assembleAuthorReport({ draft, receiptAudits }),
      (e) => e.code === "GOAL_REPORT_DECISION_CONFLICT",
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
  assert.equal(f.store.rebuild().tasks[0].repair_count, 0);
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
    (e) => e.code === "GOAL_REPORT_BINDING_MISMATCH",
  );
});
test("assembly rejects an explicitly inconsistent generated receipt membership", () => {
  assert.throws(
    () =>
      assembleAuthorReport({
        draft: { hybrid_search_receipt_ids: [], receipt_ids: ["r"] },
        receiptAudits: [{ receipt_id: "r", candidate_decisions: [] }],
      }),
    (e) => e.code === "GOAL_REPORT_DECISION_CONFLICT",
  );
});

test("a prepared directory is not a ready report until its event commits, and retry recovers it", t => {
  const f = fixture(t);
  const original = GoalEventStore.prototype.append;
  try {
    GoalEventStore.prototype.append = function(event) {
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
  assert.equal(f.store.rebuild().tasks[0].repair_count, 0);
});

test("preparation rejects a config bound to a different goal without publishing a report", t => {
  const f = fixture(t);
  assert.throws(() => prepareAuthorReport({...f.options, config:{...f.options.config, goal_id:"other"}}), error => error.code === "GOAL_REPORT_BINDING_MISMATCH");
  assert.equal(f.store.readEvents().filter(event => event.type === "author_report_prepared").length, 0);
});

test("dirty PCR content cannot produce a prepared report even with a passing review callback", t => {
  const f = fixture(t);
  writeFileSync(path.join(f.root, f.files[1]), "uncommitted change\n");
  let reviews = 0;
  assert.throws(() => prepareAuthorReport({...f.options, reviewFn:() => { reviews++; return {}; }}), error => error.code === "GOAL_REPORT_COMMIT_INVALID");
  assert.equal(reviews, 0);
  assert.equal(f.store.readEvents().filter(event => event.type === "author_report_prepared").length, 0);
  assert.equal(f.store.rebuild().tasks[0].repair_count, 0);
});

test("preparation failure is independently bound and readable without trusting the author's failure code", t => {
  const f = fixture(t);
  const observed = new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "Public identity read timed out.", {
    phase: "preparation", origin: "tool_transport", failure_kind: "network", retryable: true,
    subject_id: "fixture-uuid", findings: [{ code: "GOAL_UUID_DIRECT_READ_FAILED", message: "Public read timed out." }],
  });
  assert.throws(() => prepareAuthorReport({ ...f.options, auditUuidsFn: () => { throw observed; } }),
    error => error.code === observed.code && Boolean(error.details.preparation_failure_id));
  const loaded = api.resolvePreparationFailure({ stateDir: f.stateDir, task: f.task });
  assert.equal(loaded.failure.code, observed.code);
  assert.equal(loaded.failure.details.origin, "tool_transport");
  assert.equal(loaded.manifest.binding.turn_id, "turn-1");
  assert.deepEqual(f.store.rebuild().tasks[0], f.task);
  assert.equal(f.store.readEvents().filter(e => e.type === "author_report_prepared").length, 0);
  assert.throws(() => resolveAuthorSubmission({ stateDir: f.stateDir, task: f.task, wire: {
    schema_version: 2, prepared_report: null, boundary_review_report: null,
    failure: { code: "GOAL_AUTHOR_PREFLIGHT_FAILED", message: "Author guessed a different cause." },
  } }), error => error.code === observed.code && error.details.independently_observed === true);
  writeFileSync(loaded.failure_path, "{}");
  assert.throws(() => api.resolvePreparationFailure({ stateDir: f.stateDir, task: f.task }),
    error => error.code === "GOAL_REPORT_BINDING_MISMATCH");
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
    error => error.code === "GOAL_REPORT_BINDING_MISMATCH");
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
    error.details?.failure_kind === "execution_window" && Boolean(error.details.preparation_failure_id));
  const loaded = api.resolvePreparationFailure({ stateDir: f.stateDir, task: f.task });
  assert.equal(loaded.failure.details.failure_kind, "execution_window");
  assert.equal(loaded.manifest.content_verified, false);
  assert.equal(f.store.rebuild().tasks[0].attempt, 1);
});

test("early missing-file and invalid-schema failures remain independently readable", t => {
  const f = fixture(t);
  const missing = path.join(f.root, f.files[3]);
  rmSync(missing);
  assert.throws(() => prepareAuthorReport(f.options), error => Boolean(error.details?.preparation_failure_id));
  const loaded = api.resolvePreparationFailure({ stateDir:f.stateDir, task:f.task });
  assert.equal(loaded.manifest.files[f.files[3]], null);
  writeFileSync(missing, `test ${f.files[3]}\n`);
  assert.throws(() => api.resolvePreparationFailure({ stateDir:f.stateDir, task:f.task }), error => error.code === "GOAL_REPORT_BINDING_MISMATCH");
  delete f.draft.product_name_en;
  writeFileSync(f.draftPath, JSON.stringify(f.draft));
  assert.throws(() => prepareAuthorReport(f.options), error => Boolean(error.details?.preparation_failure_id));
  const schemaFailure = api.resolvePreparationFailure({ stateDir:f.stateDir,task:f.task });
  assert.ok(schemaFailure.failure.details.findings.every(finding => finding.details.failure_kind === "author_claim"));
});

test('preparation cannot publish ready when its final input recheck has exhausted the window', t => {
  const f=fixture(t); let clock=Date.now(); const deadline=clock+5000;
  t.mock.method(Date,'now',()=>clock);
  assert.throws(()=>prepareAuthorReport({...f.options,deadline,reviewFn:args=>{
    const result=passingReview(args); clock=deadline; return result;
  }}),error=>error.code==='GOAL_REVIEW_WINDOW_EXHAUSTED');
  assert.equal(f.store.readEvents().filter(event=>event.type==='author_report_prepared').length,0);
});

test('prepared reference resolution observes the harvest deadline before git inspection', t => {
  const f=fixture(t), reference=prepareAuthorReport(f.options);
  assert.throws(()=>resolveAuthorSubmission({stateDir:f.stateDir,task:f.task,wire:{schema_version:2,prepared_report:reference,boundary_review_report:null,failure:null},deadline:Date.now()-1}),error=>error.code==='GOAL_REVIEW_WINDOW_EXHAUSTED');
});
