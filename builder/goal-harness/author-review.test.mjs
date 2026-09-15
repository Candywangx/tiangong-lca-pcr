import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { completeAuthorReviewIdentity, extractCompletedTurnReport, inspectAuthorCommit, reviewAuthorWorktree, runStructuredSyncDeterminism } from "./author-review.mjs";

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function repoFixture() {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-author-review-"));
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "Goal Test"]);
  git(root, ["config", "user.email", "goal@example.invalid"]);
  mkdirSync(path.join(root, "pcr"), { recursive: true });
  for (const file of ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"]) writeFileSync(path.join(root, "pcr", file), `base ${file}\n`);
  writeFileSync(path.join(root, ".gitignore"), ".worktrees/\n");
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "base"]);
  return { root, baseline: git(root, ["rev-parse", "HEAD"]), allowed: ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map((file) => `pcr/${file}`) };
}

function reviewFixture() {
  const fixture = repoFixture();
  for (const file of fixture.allowed) writeFileSync(path.join(fixture.root, file), `authored ${file}\n`);
  git(fixture.root, ["add", "pcr"]);
  git(fixture.root, ["commit", "-qm", "author"]);
  const report = { commit_sha: git(fixture.root, ["rev-parse", "HEAD"]), pcr_path: "pcr", cpc_code: "41111", files: fixture.allowed, sources: [], uuid_audits: [], inventory: { unresolved: [] } };
  return { ...fixture, report, options: {
    projectRoot: fixture.root, baselineCommit: fixture.baseline, worktreePath: fixture.root,
    task: { id: "test-task", pcr_path: "pcr", cpc_code: "41111", allowed_files: fixture.allowed, authoring_contract_version: 2 }, report,
    inspectFn: () => ({ problems: [], warnings: [], measurement: { status: "pass" } }),
    parseMarkdownFn: () => ({ processInventory: [], referenceFlows: [] }), parseManifestFn: () => ({ id: "test-pcr" }),
    qualityFn: () => ({ valid: true, findings: [] }), syncFn: () => ({ first_run_clean: true, second_run_clean: true }),
  } };
}

test("author review collects independent builder, quality and sync failures after safety checks", () => {
  const fixture = reviewFixture();
  try {
    const result = reviewAuthorWorktree({ ...fixture.options,
      inspectFn: () => ({ problems: ["bad methodology"], warnings: [], measurement: { status: "pass" } }),
      qualityFn: () => ({ valid: false, findings: [{ code: "QUALITY_FAILURE", message: "bad inventory" }] }),
      syncFn: () => { throw Object.assign(new Error("sync changed"), { code: "GOAL_STRUCTURED_SYNC_STALE" }); },
    });
    assert.equal(result.valid, false);
    assert.deepEqual(result.checks.filter(c => c.status === "failed").map(c => c.check_id), ["builder", "quality", "structured_sync"]);
    assert.ok(result.findings.some(f => f.code === "QUALITY_FAILURE"));
    assert.ok(result.findings.some(f => f.code === "GOAL_STRUCTURED_SYNC_STALE"));
  } finally { rmSync(fixture.root, { recursive: true, force: true }); }
});

test("failed parsing skips its dependent checks but preserves independent sync results", () => {
  const fixture = reviewFixture();
  let qualityCalled = false, syncCalled = false;
  try {
    const result = reviewAuthorWorktree({ ...fixture.options,
      parseMarkdownFn: () => { throw new Error("cannot parse the authored table"); },
      qualityFn: () => { qualityCalled = true; return { valid: true }; },
      syncFn: () => { syncCalled = true; return { first_run_clean: true, second_run_clean: true }; },
    });
    assert.equal(result.valid, false);
    assert.equal(qualityCalled, false);
    assert.equal(syncCalled, true);
    assert.equal(result.checks.find(c => c.check_id === "quality").status, "skipped");
    assert.equal(result.subjects, null);
    assert.equal(result.findings.some(f => f.code === "INVENTORY_ACCOUNTING_MISMATCH"), false);
  } finally { rmSync(fixture.root, { recursive: true, force: true }); }
});

test("expired review deadline is execution-window exhaustion before synchronous git starts", () => {
  const fixture = reviewFixture();
  try {
    assert.throws(() => reviewAuthorWorktree({ ...fixture.options, deadline: Date.now() - 1 }),
      error => error.code === "GOAL_REVIEW_WINDOW_EXHAUSTED" && error.details.failure_kind === "execution_window");
  } finally { rmSync(fixture.root, { recursive: true, force: true }); }
});

test("unassembled reports skip report-dependent quality while retaining actual PCR checks", () => {
  const fixture = reviewFixture();
  let qualityCalled = false;
  try {
    const result = reviewAuthorWorktree({ ...fixture.options, reportAvailable: false,
      qualityFn: () => { qualityCalled = true; return { valid: true }; },
    });
    assert.equal(qualityCalled, false);
    assert.equal(result.checks.find(check => check.check_id === "quality").reason, "report_unavailable");
    assert.equal(result.checks.find(check => check.check_id === "structured_sync").status, "passed");
    assert.ok(result.subjects);
    assert.equal(result.valid, false);
  } finally { rmSync(fixture.root, { recursive: true, force: true }); }
});

test("source subjects include parsed data-source tables and quantitative evidence references", () => {
  const fixture = reviewFixture();
  try {
    const result = reviewAuthorWorktree({ ...fixture.options,
      parseMarkdownFn: () => ({ processInventory: [], dataSources: [{ id: "method-standard" }], referenceFlowDefinition: { source_ids: ["reference-evidence"] }, calculationRules: [{ source_ids: ["calculation-source"] }], amount: { evidence: { source_ids: ["amount-source"] } } }),
    });
    assert.deepEqual(result.subjects.source_ids, ["amount-source", "calculation-source", "method-standard", "reference-evidence"]);
  } finally { rmSync(fixture.root, { recursive: true, force: true }); }
});

test("deferred identity completion does not rerun builder, parsing or sync and retains unrelated findings", () => {
  const fixture = reviewFixture();
  let builderCalls = 0, syncCalls = 0;
  const qualityFn = ({ verifiedUuidReads }) => {
    if (!verifiedUuidReads.length) throw Object.assign(new Error("identity unavailable"), { code: "GOAL_AUTHOR_RESULT_INVALID", details: { findings: [], checks: [{ check_id: "uuid_identity", status: "skipped" }] } });
    return { valid: true, findings: [] };
  };
  try {
    const first = reviewAuthorWorktree({ ...fixture.options, qualityFn,
      inspectFn: () => { builderCalls++; return { problems: ["independent builder problem"], warnings: [], measurement: { status: "pass" } }; },
      syncFn: () => { syncCalls++; return { first_run_clean: true, second_run_clean: true }; },
    });
    assert.equal(first.checks.find(check => check.check_id === "quality").status, "skipped");
    const completed = completeAuthorReviewIdentity({ review: first, task: fixture.options.task, report: fixture.report, verifiedUuidReads: [{ uuid: "verified" }], qualityFn });
    assert.equal(completed.checks.find(check => check.check_id === "quality").status, "passed");
    assert.equal(builderCalls, 1);
    assert.equal(syncCalls, 1);
    assert.equal(completed.valid, false);
    assert.ok(completed.findings.some(finding => finding.message === "independent builder problem"));
  } finally { rmSync(fixture.root, { recursive: true, force: true }); }
});

test("the absolute deadline bounds the actual npm sync subprocess", () => {
  const fixture = repoFixture();
  try {
    writeFileSync(path.join(fixture.root, "package.json"), JSON.stringify({ scripts: { "pcr:sync-structured": "node -e 'setTimeout(() => {}, 10000)' --" } }));
    git(fixture.root, ["add", "package.json"]);
    git(fixture.root, ["commit", "-qm", "slow sync fixture"]);
    const start = Date.now();
    assert.throws(() => runStructuredSyncDeterminism({ projectRoot: fixture.root, commit: git(fixture.root, ["rev-parse", "HEAD"]), pcrPath: "pcr", reviewRoot: path.join(fixture.root, ".worktrees/slow-review"), deadline: start + 250 }),
      error => error.code === "GOAL_REVIEW_WINDOW_EXHAUSTED");
    assert.ok(Date.now() - start < 2000, "the child process must not run for its full 10-second delay");
  } finally { rmSync(fixture.root, { recursive: true, force: true }); }
});

test("sync failures retain machine status without persisting arbitrary subprocess output", () => {
  const fixture = repoFixture();
  try {
    writeFileSync(path.join(fixture.root, "package.json"), JSON.stringify({ scripts: { "pcr:sync-structured": "node -e 'console.log(\"PRIVATE_STDOUT\"); console.error(\"PRIVATE_STDERR\"); process.exit(42)' --" } }));
    git(fixture.root, ["add", "package.json"]);
    git(fixture.root, ["commit", "-qm", "failed sync fixture"]);
    assert.throws(() => runStructuredSyncDeterminism({ projectRoot: fixture.root, commit: git(fixture.root, ["rev-parse", "HEAD"]), pcrPath: "pcr", reviewRoot: path.join(fixture.root, ".worktrees/failed-review") }), error => {
      assert.equal(error.details.exit_code, 42);
      assert.equal(JSON.stringify(error.details).includes("PRIVATE_"), false);
      return error.details.failure_kind === "unknown";
    });
  } finally { rmSync(fixture.root, { recursive: true, force: true }); }
});

test("turn report extraction requires the completed target turn and strict JSON agent message", () => {
  const report = { schema_version: 1, commit_sha: "a".repeat(40) };
  const response = { thread: { turns: [{ id: "turn-1", status: "completed", items: [{ type: "agentMessage", text: JSON.stringify(report) }] }] } };
  assert.deepEqual(extractCompletedTurnReport(response, "turn-1"), { status: "completed", report });
  assert.deepEqual(extractCompletedTurnReport({ thread: { turns: [{ id: "turn-1", status: "inProgress", items: [] }] } }, "turn-1"), { status: "inProgress", report: null });
  assert.throws(
    () => extractCompletedTurnReport({ thread: { turns: [{ id: "turn-1", status: "completed", items: [{ type: "agentMessage", text: "not json" }] }] } }, "turn-1"),
    (error) => error.code === "GOAL_AUTHOR_REPORT_PARSE_FAILED",
  );
});

test("an interrupted turn recovers only a strict final report with no later material action", () => {
  const report = { schema_version: 1, commit_sha: "b".repeat(40) };
  const recovered = extractCompletedTurnReport({
    thread: { turns: [{
      id: "turn-1",
      status: "interrupted",
      items: [
        { type: "agentMessage", text: JSON.stringify(report) },
        { type: "reasoning", summary: [] },
      ],
    }] },
  }, "turn-1");
  assert.deepEqual(recovered, { status: "completed", report, recovered_from: "interrupted_after_final_report" });
  assert.deepEqual(
    extractCompletedTurnReport({
      thread: { turns: [{
        id: "turn-1",
        status: "interrupted",
        items: [
          { type: "agentMessage", text: JSON.stringify(report) },
          { type: "commandExecution", status: "completed", command: "git status" },
        ],
      }] },
    }, "turn-1"),
    { status: "interrupted", report: null },
  );
});

test("author commit inspection derives the tree diff and rejects non-descendants", () => {
  const { root, baseline, allowed } = repoFixture();
  try {
    writeFileSync(path.join(root, allowed[0]), "changed\n");
    git(root, ["add", allowed[0]]);
    git(root, ["commit", "-qm", "author"]);
    const commit = git(root, ["rev-parse", "HEAD"]);
    const result = inspectAuthorCommit({ projectRoot: root, baselineCommit: baseline, authorCommit: commit });
    assert.deepEqual(result.changed_files, [allowed[0]]);
    assert.equal(result.is_descendant, true);
    assert.throws(
      () => inspectAuthorCommit({ projectRoot: root, baselineCommit: "f".repeat(40), authorCommit: commit }),
      (error) => error.code === "GOAL_AUTHOR_COMMIT_INVALID",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("structured sync determinism uses an isolated review worktree and requires both runs clean", () => {
  const { root, baseline } = repoFixture();
  try {
    const clean = runStructuredSyncDeterminism({
      projectRoot: root,
      commit: baseline,
      pcrPath: "pcr",
      reviewRoot: path.join(root, ".worktrees/review-clean"),
      syncRunner: () => {},
    });
    assert.equal(clean.first_run_clean, true);
    assert.equal(clean.second_run_clean, true);

    assert.throws(
      () => runStructuredSyncDeterminism({
        projectRoot: root,
        commit: baseline,
        pcrPath: "pcr",
        reviewRoot: path.join(root, ".worktrees/review-dirty"),
        syncRunner: (worktree) => writeFileSync(path.join(worktree, "pcr/structured.yaml"), "changed by sync\n"),
      }),
      (error) => error.code === "GOAL_STRUCTURED_SYNC_STALE",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test('local completed checks resume only for the same report and always recheck worktree safety',t=>{
  const fixture=reviewFixture();t.after(()=>rmSync(fixture.root,{recursive:true,force:true}));
  let inspections=0,syncs=0;
  const options={...fixture.options,inspectFn:()=>{inspections++;return {problems:[],measurement:{status:'pass'}};},syncFn:()=>{syncs++;return {first_run_clean:true,second_run_clean:true};}};
  const first=reviewAuthorWorktree(options);
  const resumed=reviewAuthorWorktree({...options,priorReview:JSON.parse(JSON.stringify(first))});
  assert.equal(resumed.valid,true);assert.equal(inspections,1);assert.equal(syncs,1);
  reviewAuthorWorktree({...options,report:{...options.report,unresolved_issues:['changed report']},priorReview:first});
  assert.equal(inspections,2);assert.equal(syncs,2);
  writeFileSync(path.join(fixture.root,'pcr','manifest.yaml'),'dirty');
  assert.throws(()=>reviewAuthorWorktree({...options,priorReview:first}),e=>e.code==='GOAL_AUTHOR_WORKTREE_DIRTY');
});
