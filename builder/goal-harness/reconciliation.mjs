import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, lstatSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";
import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { captureExpectedFiles } from "./landing.mjs";
import { withGoalLock } from "./lock.mjs";
import { assertRepoPath, resolveRepoPath } from "./paths.mjs";
import { selectGoalRuntimeBaseCommit } from "./runtime-baseline.mjs";
import { applyTaskTransition } from "./state-machine.mjs";
import { selectRepositoryIntegrationHead } from "./repository-coordinator.mjs";

const shared = new Set(["classifications/mappings/cpc-3.0-to-pcr.yaml", "classifications/aliases/pcr-id-aliases.yaml", "classifications/indexes/cpc-3.0-coverage.json", "library/catalog.yaml", "library/indexes/pcr-index.yaml"]);
const runtimeDelivery = new Set(["packages/pcr-core/src/projection-completeness.mjs"]);

// F4 audit boundary: plans bind exact bytes, never a broad permission to refresh CAS.
// The coordinator supplies the user's approval reference; no approval is inferred.
export function planReconciliation({ config, stateDir, snapshotId, inputPaths, deliveryPaths = [] }) {
  const state = new GoalEventStore({ stateDir }).rebuild();
  const snapshot = state.snapshots.find(s => s.id === snapshotId);
  if (!state.stopped || snapshot?.state !== "validated" || state.tasks.some(t => ["authoring", "authoring_repair", "preflight", "integrating"].includes(t.state)) ||
      existsSync(path.join(stateDir, "landings", snapshotId, "journal.json"))) {
    throw failure("NOT_READY", "Stop scheduling and finish active operations before reconciling an unlanded validated snapshot.");
  }
  const tasks = snapshot.task_ids.map(id => state.tasks.find(t => t.id === id));
  if (tasks.some(t => !t || t.state !== "validated")) throw failure("NOT_READY", "Snapshot author results must still be validated.");
  const authorFiles = new Set(tasks.flatMap(t => t.allowed_files));
  const inputs = normalize(inputPaths);
  const delivery = normalize(deliveryPaths);
  if (!inputs.length) throw failure("PATH_INVALID", "An exact input allowlist is required.");
  for (const file of inputs) {
    if (!(shared.has(file) || /^docs\/adr\/[\w.-]+\.md$/u.test(file) || /^library\/pcrs\/(?:[\w.-]+\/)+(?:manifest\.yaml|structured\.yaml|pcr\.(?:en-US|zh-CN)\.md)$/u.test(file)) || authorFiles.has(file)) {
      throw failure("PATH_INVALID", `Input path is outside the reconciliation allowlist or overlaps an author: ${file}`);
    }
  }
  for (const file of delivery) if (!runtimeDelivery.has(file)) throw failure("PATH_INVALID", `Runtime delivery path is not approved: ${file}`);
  for (const file of [...inputs, ...delivery]) assertRegular(config.project_root, file);
  const plan = {
    schema_version: 1, goal_id: config.goal_id, project_root: config.project_root,
    snapshot_id: snapshotId, snapshot_sha256: hash(snapshot), task_sha256: hash(tasks),
    main_head: git(config.project_root, ["rev-parse", "HEAD"]),
    base_commit: selectRepositoryIntegrationHead({ projectRoot: config.project_root, fallbackHead: selectGoalRuntimeBaseCommit(state, { projectRoot: config.project_root }) }),
    input_paths: inputs, delivery_paths: delivery,
    expected_inputs: captureExpectedFiles(config.project_root, [...inputs, ...delivery]),
  };
  return { ...plan, plan_sha256: hash(plan) };
}

export function applyReconciliation({ config, stateDir, plan, approvalReference, dryRun = false }) {
  if (typeof approvalReference !== "string" || !approvalReference.trim()) throw failure("APPROVAL_REQUIRED", "An explicit user approval reference is required.");
  const { plan_sha256: digest, ...unsigned } = plan;
  if (plan.schema_version !== 1 || !/^[a-f0-9]{64}$/u.test(digest ?? "") || hash(unsigned) !== digest || plan.goal_id !== config.goal_id || plan.project_root !== config.project_root) {
    throw failure("PLAN_INVALID", "Reconciliation plan hash, version or Goal binding is invalid.");
  }
  return withGoalLock(path.join(stateDir, "integration-operation"), "reconcile", () => withGoalLock(stateDir, "reconcile", () => {
    const store = new GoalEventStore({ stateDir });
    const eventId = `reconciliation-${digest}`;
    const existing = store.readEvents().find(e => e.event_id === eventId);
    if (existing) {
      if (!isDeepStrictEqual(existing.payload.plan, plan) || existing.payload.approval_reference !== approvalReference) throw failure("PLAN_INVALID", "Reconciliation approval identity changed.");
      return existing.payload.result;
    }
    assertReconciliationInputs({ projectRoot: config.project_root, expected: plan.expected_inputs });
    const current = planReconciliation({ config, stateDir, snapshotId: plan.snapshot_id, inputPaths: plan.input_paths, deliveryPaths: plan.delivery_paths });
    if (!isDeepStrictEqual(current, plan)) throw failure("INPUT_CHANGED", "Goal, snapshot, runtime, HEAD or selected author evidence changed after planning.");
    if (dryRun) return { status: "dry_run", plan_sha256: digest, next_action: "Apply the same approved plan to create a fresh integration snapshot." };
    const state = store.rebuild();
    const old = state.snapshots.find(s => s.id === plan.snapshot_id);
    const at = new Date().toISOString();
    const indexDir = mkdtempSync(path.join(tmpdir(), "goal-reconciliation-index-"));
    let commit;
    try {
      const env = { ...process.env, GIT_INDEX_FILE: path.join(indexDir, "index") };
      git(config.project_root, ["read-tree", plan.base_commit], { env });
      for (const file of plan.input_paths) {
        assertRegular(config.project_root, file);
        const bytes = readFileSync(resolveRepoPath(config.project_root, file));
        if (hashBytes(bytes) !== plan.expected_inputs[file].sha256) throw failure("INPUT_CHANGED", `Input changed during capture: ${file}`);
        const blob = git(config.project_root, ["hash-object", "-w", "--stdin"], { input: bytes });
        git(config.project_root, ["update-index", "--add", "--cacheinfo", "100644", blob, file], { env });
      }
      assertReconciliationInputs({ projectRoot: config.project_root, expected: plan.expected_inputs });
      const tree = git(config.project_root, ["write-tree"], { env });
      commit = git(config.project_root, ["commit-tree", tree, "-p", plan.base_commit, "-m", `chore(goal): reconcile approved inputs ${digest}`]);
      git(config.project_root, ["update-ref", `refs/tiangong-goals/${config.goal_id}/reconciliations/${digest}`, commit]);
    } finally { rmSync(indexDir, { recursive: true, force: true }); }
    const id = `snapshot-reconcile-${digest.slice(0, 20)}`;
    const next = {
      id, goal_id: config.goal_id, state: "integration_pending", task_ids: old.task_ids,
      author_commits: old.author_commits, created_at: at,
      reconciliation: { plan_sha256: digest, approval_reference: approvalReference, previous_snapshot_id: old.id, base_commit: commit, expected_inputs: plan.expected_inputs, delivery_paths: plan.delivery_paths },
    };
    const tasks = old.task_ids.map(taskId => {
      let task = state.tasks.find(t => t.id === taskId);
      task = applyTaskTransition(task, { transition_id: `${id}-${taskId}-retry`, to: "retryable_failure", at });
      task = applyTaskTransition(task, { transition_id: `${id}-${taskId}-pending`, to: "integration_pending", at });
      return { ...task, integration_snapshot_id: id };
    });
    const result = { status: "reconciliation_prepared", snapshot_id: id, previous_snapshot_id: old.id, base_commit: commit, plan_sha256: digest, next_action: "Integrate the new snapshot; all validation and CAS gates remain required." };
    store.append({ event_id: eventId, type: "snapshot_reconciled", at, payload: {
      plan, approval_reference: approvalReference, result,
      previous_snapshot: { ...old, state: "superseded", superseded_by: id, superseded_at: at }, snapshot: next, tasks,
    } });
    return result;
  }));
}

export function assertReconciliationInputs({ projectRoot, expected }) {
  for (const file of Object.keys(expected)) assertRegular(projectRoot, file);
  const actual = captureExpectedFiles(projectRoot, Object.keys(expected));
  const conflicts = Object.keys(expected).flatMap(file => isDeepStrictEqual(actual[file], expected[file]) ? [] : [{ path: file, expected: expected[file], actual: actual[file] }]);
  if (conflicts.length) throw failure("INPUT_CHANGED", "Approved inputs changed; reconciliation will not refresh their hashes automatically.", { conflicts });
}

function assertRegular(root, file) {
  const absolute = resolveRepoPath(root, file);
  for (let entry = absolute; entry !== path.resolve(root); entry = path.dirname(entry)) {
    if (!existsSync(entry) || lstatSync(entry).isSymbolicLink() || (entry === absolute ? !lstatSync(entry).isFile() : !lstatSync(entry).isDirectory())) throw failure("PATH_INVALID", `Reconciliation path must be a regular no-follow file: ${file}`);
  }
}
function normalize(paths) {
  if (!Array.isArray(paths)) throw failure("PATH_INVALID", "An exact file path allowlist is required.");
  return [...new Set(paths.map(p => assertRepoPath(p)))].sort();
}
function git(root, args, options = {}) { return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["pipe", "pipe", "pipe"], ...options }).trim(); }
function hash(value) { return hashBytes(JSON.stringify(value)); }
function hashBytes(value) { return createHash("sha256").update(value).digest("hex"); }
function failure(suffix, message, details) { return new GoalHarnessError(`GOAL_RECONCILIATION_${suffix}`, message, details); }
