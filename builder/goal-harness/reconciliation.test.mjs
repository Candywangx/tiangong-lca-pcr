import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { GoalEventStore } from "./event-store.mjs";
import { captureExpectedFiles, landGoalSnapshot } from "./landing.mjs";
import * as reconciliation from "./reconciliation.mjs";
import { reserveRepositoryCandidate, commitRepositoryValidation } from "./repository-coordinator.mjs";
import { publishPendingViewerSnapshots } from "./viewer-publication.mjs";

const mapping = "classifications/mappings/cpc-3.0-to-pcr.yaml";
const adr = "docs/adr/0130-user.md";
const runtime = "packages/pcr-core/src/projection-completeness.mjs";
const files = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map(f => `library/pcrs/category/item/${f}`);
const git = (root, args) => execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
function put(root, file, value) { mkdirSync(path.dirname(path.join(root, file)), { recursive: true }); writeFileSync(path.join(root, file), value); }
function fixture(t) {
  const root = mkdtempSync(path.join(tmpdir(), "goal-reconcile-test-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  git(root, ["init", "-q"]); git(root, ["config", "user.name", "Test"]); git(root, ["config", "user.email", "test@localhost"]);
  put(root, ".gitignore", "state/\nlibrary/.pcr-builder-state/\n.worktrees/\n.env\n");
  for (const f of [mapping, runtime, ...files]) put(root, f, "base\n");
  git(root, ["add", "."]); git(root, ["commit", "-qm", "base"]);
  const base = git(root, ["rev-parse", "HEAD"]);
  const source = path.join(root, ".worktrees/old");
  git(root, ["worktree", "add", "--detach", source, base]);
  put(source, mapping, "old integration\n");
  for (const f of files) put(source, f, "author\n");
  git(source, ["add", "."]); git(source, ["commit", "-qm", "integration"]);
  const commit = git(source, ["rev-parse", "HEAD"]);
  put(root, mapping, "user additions\n"); put(root, adr, "user decision\n");
  put(root, "unrelated.txt", "user asset\n"); put(root, ".env", "PRIVATE_TEST_SENTINEL\n");
  const stateDir = path.join(root, "library/.pcr-builder-state/goals/test-goal");
  const snapshot = { id: "snapshot-old", state: "validated", task_ids: ["one"], base_commit: base, integration_commit: commit, worktree_path: source, changed_files: [mapping, ...files], author_commits: [commit] };
  const store = new GoalEventStore({ stateDir });
  store.initialize({ goal_id: "test-goal", stopped: true, baseline: { commit: base }, tasks: [{ id: "one", state: "validated", allowed_files: files, author_commit: commit, integration_snapshot_id: snapshot.id }], snapshots: [snapshot] });
  const config = { project_root: root, goal_id: "test-goal", artifact_store: path.join(root, "state/viewer"), baseline: { tracked_roots: ["classifications", "docs", "library", "packages"] } };
  return { root, source, base, commit, stateDir, store, snapshot, config };
}
function plan(f) {
  assert.equal(typeof reconciliation.planReconciliation, "function", "reconciliation planning must exist");
  return reconciliation.planReconciliation({ config: f.config, stateDir: f.stateDir, snapshotId: f.snapshot.id, inputPaths: [mapping, adr], deliveryPaths: [runtime] });
}
const apply = (f, p, approvalReference = "user approval 2026-09-10") => reconciliation.applyReconciliation({ config: f.config, stateDir: f.stateDir, plan: p, approvalReference });

test("approved reconciliation preserves dirty main/index/old worktree and is idempotent", t => {
  const f = fixture(t);
  const before = [git(f.root, ["status", "--porcelain=v1", "-uall"]), git(f.root, ["write-tree"]), git(f.root, ["rev-parse", "HEAD"])];
  const p = plan(f);
  assert.throws(() => apply(f, p, ""), e => e.code === "GOAL_RECONCILIATION_APPROVAL_REQUIRED");
  const result = apply(f, p);
  assert.equal(git(f.root, ["show", `${result.base_commit}:${mapping}`]), "user additions");
  assert.equal(git(f.root, ["show", `${result.base_commit}:${adr}`]), "user decision");
  assert.throws(() => git(f.root, ["show", `${result.base_commit}:.env`]));
  assert.throws(() => git(f.root, ["show", `${result.base_commit}:unrelated.txt`]));
  assert.equal(git(f.source, ["rev-parse", "HEAD"]), f.commit);
  assert.deepEqual([git(f.root, ["status", "--porcelain=v1", "-uall"]), git(f.root, ["write-tree"]), git(f.root, ["rev-parse", "HEAD"])], before);
  const state = f.store.rebuild();
  assert.equal(state.snapshots[0].state, "superseded");
  assert.equal(state.snapshots[0].integration_commit, f.commit);
  assert.equal(state.tasks[0].state, "integration_pending");
  assert.deepEqual(apply(f, p), result);
  assert.equal(f.store.rebuild().snapshots.length, 2);
  assert.equal(readFileSync(path.join(f.stateDir, "events.jsonl"), "utf8").includes("PRIVATE_TEST_SENTINEL"), false);
});

test("approval is pinned to input hashes, snapshot, and stopped scheduling", t => {
  const f = fixture(t); const p = plan(f);
  put(f.root, mapping, "concurrent change\n");
  assert.throws(() => apply(f, p), e => e.code === "GOAL_RECONCILIATION_INPUT_CHANGED");
  put(f.root, mapping, "user additions\n");
  f.store.append({ type: "scheduling_resumed", payload: {} });
  assert.throws(() => apply(f, p), e => e.code === "GOAL_RECONCILIATION_NOT_READY");
});

test("reconciliation forbids broad/sensitive paths and overlapping author files", t => {
  const f = fixture(t);
  for (const inputPaths of [[".env"], ["library"], [files[0]], ["unrelated.txt"]]) {
    assert.throws(() => reconciliation.planReconciliation({ config: f.config, stateDir: f.stateDir, snapshotId: f.snapshot.id, inputPaths }), /path|author|allowlist|Sensitive/i);
  }
});

test("reconciled landing keeps CAS on both original author files and preserved user inputs", t => {
  const f = fixture(t); const result = apply(f, plan(f));
  const state = f.store.rebuild(); const next = state.snapshots.find(s => s.id === result.snapshot_id);
  assert.throws(() => landGoalSnapshot({ config: f.config, stateDir: f.stateDir, snapshotId: next.id }), e => e.code === "GOAL_LAND_NOT_READY");
  const source = path.join(f.root, ".worktrees/new");
  git(f.root, ["worktree", "add", "--detach", source, result.base_commit]);
  for (const file of files) put(source, file, "author\n");
  put(source, mapping, "user additions plus batch\n");
  git(source, ["add", "."]); git(source, ["commit", "-qm", "revalidated"]);
  const valid = { ...next, state: "validated", worktree_path: source, integration_commit: git(source, ["rev-parse", "HEAD"]), changed_files: [mapping, ...files, runtime] };
  f.store.append({ type: "snapshot_replaced", payload: { snapshot: valid } });
  const candidate = reserveRepositoryCandidate({ projectRoot: f.root, goalId: f.config.goal_id, snapshotId: next.id, fallbackHead: f.base });
  commitRepositoryValidation({ projectRoot: f.root, candidateToken: candidate.candidate_token, integrationCommit: valid.integration_commit, goalStateDir: f.stateDir, snapshotProjection: valid });
  assert.throws(() => landGoalSnapshot({ config: f.config, stateDir: f.stateDir, snapshotId: next.id }), e => e.code === "GOAL_LAND_VIEWER_UNPUBLISHED");
  publishPendingViewerSnapshots({ config: f.config, publishSnapshot: options => ({ manifestRef: `sha256:${"9".repeat(64)}`, sequence: options.sequence }) });
  const land = (dryRun = true) => landGoalSnapshot({ config: f.config, stateDir: f.stateDir, snapshotId: next.id, dryRun, artifactStoreVerifier: () => true });
  const originals = captureExpectedFiles(f.root, files);
  put(f.root, files[0], "new user PCR edit\n");
  assert.throws(() => land(), e => e.code === "GOAL_LAND_CAS_CONFLICT");
  put(f.root, files[0], "base\n");
  assert.deepEqual(captureExpectedFiles(f.root, files), originals);
  put(f.root, adr, "new user decision\n");
  assert.throws(() => land(), e => ["GOAL_RECONCILIATION_INPUT_CHANGED", "GOAL_LAND_CAS_CONFLICT"].includes(e.code));
  put(f.root, adr, "user decision\n");
  assert.equal(land().status, "dry_run");
  assert.equal(readFileSync(path.join(f.root, mapping), "utf8"), "user additions\n");
  assert.equal(land(false).status, "landed");
  assert.equal(land(false).status, "already_landed");
  assert.equal(readFileSync(path.join(f.root, adr), "utf8"), "user decision\n");
});
