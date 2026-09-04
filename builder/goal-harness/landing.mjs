import { execFileSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";
import { GoalEventStore } from "./event-store.mjs";
import { withGoalLock } from "./lock.mjs";
import { assertRepoPath, resolveRepoPath } from "./paths.mjs";
import { applyTaskTransition } from "./state-machine.mjs";
import { listCommittedRepositoryValidations, repositoryCoordinatorStateDir } from "./repository-coordinator.mjs";
import { listViewerPublications, writeViewerLandingProvenance } from "./viewer-publication.mjs";

const GIT_BLOB_MAX_BUFFER = 256 * 1024 * 1024;

export function captureExpectedFiles(root, paths) {
  return Object.fromEntries(paths.map((entry) => {
    const repoPath = assertRepoPath(entry, { allowSensitive: true });
    return [repoPath, fingerprint(resolveRepoPath(root, repoPath, { allowSensitive: true }))];
  }));
}

export function captureExpectedFilesFromCommit(root, commit, paths) {
  return Object.fromEntries(paths.map((entry) => {
    const repoPath = assertRepoPath(entry, { allowSensitive: true });
    const result = execFileSync("git", ["cat-file", "-e", `${commit}:${repoPath}`], { cwd: root, stdio: "ignore" , encoding: "utf8" });
    void result;
    const bytes = execFileSync("git", ["show", `${commit}:${repoPath}`], {
      cwd: root,
      encoding: "buffer",
      stdio: ["ignore", "pipe", "pipe"],
      maxBuffer: GIT_BLOB_MAX_BUFFER,
    });
    return [repoPath, { kind: "file", sha256: createHash("sha256").update(bytes).digest("hex"), size: bytes.length }];
  }));
}

export function landGoalSnapshot({ config, stateDir, snapshotId = null, dryRun = false }) {
  const landingStateDir = path.join(repositoryCoordinatorStateDir(config.project_root), "landing");
  return withGoalLock(landingStateDir, "repository-land", () => withGoalLock(stateDir, "land", () => {
    const store = new GoalEventStore({ stateDir });
    let state = store.rebuild();
    let snapshot = snapshotId
      ? state.snapshots.find((entry) => entry.id === snapshotId)
      : state.snapshots.find((entry) => entry.state === "validated");
    if (!snapshot) {
      throw new GoalHarnessError("GOAL_LAND_NOT_READY", "No validated integration snapshot is ready to land.");
    }
    if (!["validated", "landed"].includes(snapshot.state) || !snapshot.integration_commit || !snapshot.worktree_path) {
      throw new GoalHarnessError("GOAL_LAND_NOT_READY", `Snapshot ${snapshot.id} is not fully validated.`);
    }
    const validations = listCommittedRepositoryValidations({ projectRoot: config.project_root });
    const validation = validations.find((entry) => entry.repository_sequence === snapshot.repository_sequence);
    if (!validation || validation.goal_id !== config.goal_id || validation.harness_snapshot_id !== snapshot.id || validation.integration_commit !== snapshot.integration_commit) {
      throw new GoalHarnessError("GOAL_LAND_REPOSITORY_IDENTITY_INVALID", "Snapshot does not match committed repository validation truth.");
    }
    const publications = listViewerPublications({ projectRoot: config.project_root });
    const publication = publications.find((entry) => entry.repository_sequence === validation.repository_sequence);
    if (!publication || publication.integration_commit !== validation.integration_commit) {
      throw new GoalHarnessError("GOAL_LAND_VIEWER_UNPUBLISHED", "A validated snapshot cannot land before its Viewer snapshot is durably published.", {
        repository_sequence: validation.repository_sequence,
        snapshot_id: snapshot.id,
      });
    }
    if (path.resolve(publication.artifact_store) !== path.resolve(config.artifact_store)) {
      throw new GoalHarnessError("GOAL_VIEWER_ARTIFACT_STORE_CONFLICT", "Landing configuration differs from retained Viewer publication history.");
    }
    const landingHeadPath = path.join(landingStateDir, "head.json");
    const landingHead = existsSync(landingHeadPath)
      ? readLandingHead(landingHeadPath)
      : { schema_version: 1, repository_sequence: 0, integration_commit: validations[0].expected_old_head, path_fingerprints: {} };
    if (landingHead.repository_sequence === validation.repository_sequence) {
      if (landingHead.integration_commit !== validation.integration_commit) {
        throw new GoalHarnessError("GOAL_LAND_HEAD_INVALID", "Repository landing head sequence has a different integration commit.");
      }
      writeViewerLandingProvenance({ publication, landingState: "landed", landedAt: landingHead.landed_at });
      return { status: "already_landed", snapshot, next_action: "Continue author scheduling or inspect Goal status." };
    }
    if (validation.repository_sequence !== landingHead.repository_sequence + 1) {
      throw new GoalHarnessError("GOAL_LAND_SEQUENCE_GAP", "Repository snapshots must land in repository validation order without cross-Goal skips.", {
        requested_sequence: validation.repository_sequence,
        next_sequence: landingHead.repository_sequence + 1,
      });
    }
    const expectedFromBaseline = captureExpectedFilesFromCommitAllowMissing(config.project_root, validations[0].expected_old_head, snapshot.changed_files);
    const expected = { ...expectedFromBaseline, ...(landingHead.path_fingerprints ?? {}) };
    const result = landFilesCas({
      projectRoot: config.project_root,
      sourceRoot: snapshot.worktree_path,
      paths: snapshot.changed_files,
      expected,
      stateDir,
      snapshotId: snapshot.id,
      dryRun,
    });
    if (dryRun) {
      return { ...result, snapshot, expected, next_action: "Review the CAS path set, then repeat goal:land without --dry-run." };
    }
    const pathFingerprints = captureExpectedFiles(config.project_root, snapshot.changed_files);
    snapshot = { ...snapshot, state: "landed", landed_at: new Date().toISOString(), landing_status: result.status };
    store.append({ event_id: `${snapshot.id}-landed`, type: "snapshot_replaced", payload: { snapshot } });
    for (const taskId of snapshot.task_ids) {
      state = store.rebuild();
      let task = state.tasks.find((entry) => entry.id === taskId);
      if (task.state === "validated") {
        task = applyTaskTransition(task, { transition_id: `${snapshot.id}-${task.id}-completed`, to: "completed", at: new Date().toISOString() });
        task = { ...task, landed_at: snapshot.landed_at };
        store.append({ event_id: `${snapshot.id}-${task.id}-completed-result`, type: "task_replaced", payload: { task } });
      }
    }
    store.append({ event_id: `${snapshot.id}-landing-fingerprints`, type: "landing_completed", payload: { snapshot_id: snapshot.id, path_fingerprints: pathFingerprints } });
    writeJson(landingHeadPath, {
      schema_version: 1,
      repository_sequence: validation.repository_sequence,
      integration_commit: validation.integration_commit,
      goal_id: validation.goal_id,
      harness_snapshot_id: validation.harness_snapshot_id,
      viewer_manifest_ref: publication.manifest_ref,
      landed_at: snapshot.landed_at,
      path_fingerprints: { ...(landingHead.path_fingerprints ?? {}), ...pathFingerprints },
    });
    writeViewerLandingProvenance({ publication, landingState: "landed", landedAt: snapshot.landed_at });
    return { status: result.status, snapshot, path_fingerprints: pathFingerprints, state: store.rebuild(), next_action: "Resume scheduling; author worktrees remain preserved until explicit audited cleanup." };
  }));
}

export function landFilesCas({ projectRoot, sourceRoot, paths, expected, stateDir, snapshotId, dryRun = false }) {
  const normalized = [...new Set(paths.map((entry) => assertRepoPath(entry, { allowSensitive: true })))].sort();
  const operationDir = path.join(stateDir, "landings", snapshotId);
  const journalPath = path.join(operationDir, "journal.json");
  if (existsSync(journalPath)) {
    const journal = JSON.parse(readFileSync(journalPath, "utf8"));
    if (journal.status === "landed") {
      return { status: "already_landed", snapshot_id: snapshotId, paths: journal.paths };
    }
    return recoverLandingJournal({ projectRoot, operationDir, journalPath, journal, normalized, snapshotId });
  }

  const conflicts = [];
  for (const repoPath of normalized) {
    const actual = fingerprint(resolveRepoPath(projectRoot, repoPath, { allowSensitive: true }));
    const wanted = expected[repoPath];
    if (!wanted || actual.kind !== wanted.kind || actual.sha256 !== wanted.sha256) {
      conflicts.push({ path: repoPath, expected: wanted ?? null, actual });
    }
  }
  if (conflicts.length > 0) {
    throw new GoalHarnessError("GOAL_LAND_CAS_CONFLICT", `Landing stopped because ${conflicts.length} destination path(s) changed`, { conflicts });
  }

  const sources = normalized.map((repoPath) => {
    const absolutePath = resolveRepoPath(sourceRoot, repoPath, { allowSensitive: true });
    if (!existsSync(absolutePath) || !lstatSync(absolutePath).isFile()) {
      throw new GoalHarnessError("GOAL_LAND_SOURCE_INVALID", `Landing source is not a regular file: ${repoPath}`);
    }
    return { repoPath, absolutePath, fingerprint: fingerprint(absolutePath) };
  });
  if (dryRun) {
    return { status: "dry_run", snapshot_id: snapshotId, paths: normalized, sources };
  }

  mkdirSync(operationDir, { recursive: true });
  const stageDir = path.join(operationDir, "stage");
  const backupDir = path.join(operationDir, "backup");
  for (const source of sources) {
    const staged = resolveRepoPath(stageDir, source.repoPath, { allowSensitive: true });
    mkdirSync(path.dirname(staged), { recursive: true });
    copyFileSync(source.absolutePath, staged);
    const existing = resolveRepoPath(projectRoot, source.repoPath, { allowSensitive: true });
    if (existsSync(existing)) {
      const backup = resolveRepoPath(backupDir, source.repoPath, { allowSensitive: true });
      mkdirSync(path.dirname(backup), { recursive: true });
      copyFileSync(existing, backup);
    }
  }
  writeJson(journalPath, { schema_version: 1, snapshot_id: snapshotId, status: "prepared", paths: normalized, expected, sources });

  try {
    writeJson(journalPath, { schema_version: 1, snapshot_id: snapshotId, status: "applying", paths: normalized, expected, sources });
    for (const repoPath of normalized) {
      const destination = resolveRepoPath(projectRoot, repoPath, { allowSensitive: true });
      const staged = resolveRepoPath(stageDir, repoPath, { allowSensitive: true });
      mkdirSync(path.dirname(destination), { recursive: true });
      const temporary = `${destination}.goal-${snapshotId}-${randomUUID()}.tmp`;
      copyFileSync(staged, temporary);
      renameSync(temporary, destination);
    }
  } catch (error) {
    throw new GoalHarnessError("GOAL_LAND_APPLY_FAILED", `Landing failed and requires journal recovery: ${error.message}`, { journal_path: journalPath });
  }
  writeJson(journalPath, { schema_version: 1, snapshot_id: snapshotId, status: "landed", paths: normalized, expected, sources });
  return { status: "landed", snapshot_id: snapshotId, paths: normalized };
}

export function recoverLandingJournal({ projectRoot, operationDir, journalPath, journal, normalized, snapshotId }) {
  if (!["prepared", "applying"].includes(journal.status) || journal.snapshot_id !== snapshotId || stableJson(journal.paths) !== stableJson(normalized)) {
    throw new GoalHarnessError("GOAL_LAND_RECOVERY_INVALID", `Landing journal cannot be recovered safely: ${journalPath}`, { journal });
  }
  const sourceByPath = new Map((journal.sources ?? []).map((entry) => [entry.repoPath, entry]));
  const conflicts = [];
  for (const repoPath of normalized) {
    const staged = resolveRepoPath(path.join(operationDir, "stage"), repoPath, { allowSensitive: true });
    const source = sourceByPath.get(repoPath);
    const stagedFingerprint = fingerprint(staged);
    const actual = fingerprint(resolveRepoPath(projectRoot, repoPath, { allowSensitive: true }));
    const before = journal.expected?.[repoPath];
    if (!source || !sameFingerprint(stagedFingerprint, source.fingerprint) ||
        (!sameFingerprint(actual, before) && !sameFingerprint(actual, source.fingerprint))) {
      conflicts.push({ path: repoPath, expected_before: before ?? null, expected_source: source?.fingerprint ?? null, actual, staged: stagedFingerprint });
    }
  }
  if (conflicts.length > 0) {
    throw new GoalHarnessError("GOAL_LAND_RECOVERY_CONFLICT", `Landing recovery stopped because ${conflicts.length} path(s) no longer match the journal`, { conflicts, journal_path: journalPath });
  }
  writeJson(journalPath, { ...journal, status: "applying", recovered_at: new Date().toISOString() });
  for (const repoPath of normalized) {
    const destination = resolveRepoPath(projectRoot, repoPath, { allowSensitive: true });
    const staged = resolveRepoPath(path.join(operationDir, "stage"), repoPath, { allowSensitive: true });
    const source = sourceByPath.get(repoPath);
    if (sameFingerprint(fingerprint(destination), source.fingerprint)) continue;
    mkdirSync(path.dirname(destination), { recursive: true });
    const temporary = `${destination}.goal-${snapshotId}-${randomUUID()}.tmp`;
    copyFileSync(staged, temporary);
    renameSync(temporary, destination);
  }
  const verificationConflicts = normalized.flatMap((repoPath) => {
    const actual = fingerprint(resolveRepoPath(projectRoot, repoPath, { allowSensitive: true }));
    const expectedSource = sourceByPath.get(repoPath).fingerprint;
    return sameFingerprint(actual, expectedSource) ? [] : [{ path: repoPath, expected: expectedSource, actual }];
  });
  if (verificationConflicts.length > 0) {
    throw new GoalHarnessError("GOAL_LAND_RECOVERY_VERIFY_FAILED", "Recovered landing did not match staged source fingerprints", { conflicts: verificationConflicts, journal_path: journalPath });
  }
  writeJson(journalPath, { ...journal, status: "landed", recovered_at: new Date().toISOString() });
  return { status: "recovered_landing", snapshot_id: snapshotId, paths: normalized };
}

function fingerprint(absolutePath) {
  if (!existsSync(absolutePath)) {
    return { kind: "missing", sha256: null, size: 0 };
  }
  const stat = lstatSync(absolutePath);
  if (!stat.isFile()) {
    return { kind: stat.isSymbolicLink() ? "symlink" : "other", sha256: null, size: stat.size };
  }
  return { kind: "file", sha256: createHash("sha256").update(readFileSync(absolutePath)).digest("hex"), size: stat.size };
}

function captureExpectedFilesFromCommitAllowMissing(root, commit, paths) {
  const result = {};
  for (const repoPath of paths) {
    try {
      Object.assign(result, captureExpectedFilesFromCommit(root, commit, [repoPath]));
    } catch (error) {
      if (error.status === 128 || error.status === 1) {
        result[repoPath] = { kind: "missing", sha256: null, size: 0 };
      } else {
        throw error;
      }
    }
  }
  return result;
}

function writeJson(filePath, value) {
  const temporary = `${filePath}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" });
  renameSync(temporary, filePath);
}

function readLandingHead(filePath) {
  let value;
  try { value = JSON.parse(readFileSync(filePath, "utf8")); } catch (error) {
    throw new GoalHarnessError("GOAL_LAND_HEAD_INVALID", "Repository landing head is unreadable.", { cause: error.message });
  }
  if (value?.schema_version !== 1 || !Number.isSafeInteger(value.repository_sequence) || value.repository_sequence < 1 ||
      !/^[a-f0-9]{40,64}$/u.test(value.integration_commit ?? "") || !value.path_fingerprints || typeof value.path_fingerprints !== "object") {
    throw new GoalHarnessError("GOAL_LAND_HEAD_INVALID", "Repository landing head is malformed.");
  }
  return value;
}

function sameFingerprint(left, right) {
  return Boolean(left && right && left.kind === right.kind && left.sha256 === right.sha256 && left.size === right.size);
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
