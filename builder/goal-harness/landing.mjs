import { execFileSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import {
  copyFileSync,
  closeSync,
  existsSync,
  fsyncSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";
import { GoalEventStore } from "./event-store.mjs";
import { withGoalLock } from "./lock.mjs";
import { assertRepoPath, resolveRepoPath } from "./paths.mjs";
import { applyTaskTransition } from "./state-machine.mjs";
import { listCommittedRepositoryValidations, repositoryCoordinatorStateDir } from "./repository-coordinator.mjs";
import { listViewerPublications, verifyPublishedViewerArtifact, writeViewerLandingProvenance } from "./viewer-publication.mjs";

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

export function landGoalSnapshot({ config, stateDir, snapshotId = null, dryRun = false, artifactStoreVerifier = verifyPublishedViewerArtifact, faultInjector = () => {} }) {
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
    if (!["validated", "landed"].includes(snapshot.state) || !snapshot.integration_commit) {
      throw new GoalHarnessError("GOAL_LAND_NOT_READY", `Snapshot ${snapshot.id} is not fully validated.`);
    }
    const publications = listViewerPublications({ projectRoot: config.project_root });
    const activationSequence = publications[0]?.repository_sequence ?? 1;
    const validations = listCommittedRepositoryValidations({
      projectRoot: config.project_root,
      sourceVerificationFromSequence: activationSequence,
    });
    const validation = validations.find((entry) => entry.repository_sequence === snapshot.repository_sequence);
    if (!validation || validation.goal_id !== config.goal_id || validation.harness_snapshot_id !== snapshot.id || validation.integration_commit !== snapshot.integration_commit) {
      throw new GoalHarnessError("GOAL_LAND_REPOSITORY_IDENTITY_INVALID", "Snapshot does not match committed repository validation truth.");
    }
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
    artifactStoreVerifier({ config, publication, publications });
    const landingHeadPath = path.join(landingStateDir, "head.json");
    reconcileRepositoryLandingJournal({ landingStateDir, landingHeadPath });
    const hasLandingHead = existsSync(landingHeadPath);
    const landingHead = hasLandingHead
      ? readLandingHead(landingHeadPath)
      : {
          schema_version: 1,
          repository_sequence: activationSequence - 1,
          integration_commit: validations.find((entry) => entry.repository_sequence === activationSequence)?.expected_old_head,
          path_fingerprints: {},
        };
    if (landingHead.repository_sequence === validation.repository_sequence) {
      if (landingHead.integration_commit !== validation.integration_commit) {
        throw new GoalHarnessError("GOAL_LAND_HEAD_INVALID", "Repository landing head sequence has a different integration commit.");
      }
      writeViewerLandingProvenance({ publication, landingState: "landed", landedAt: landingHead.landed_at });
      if (snapshot.state !== "landed") {
        const repairedFingerprints = Object.fromEntries(snapshot.changed_files.map((entry) => [entry, landingHead.path_fingerprints[entry]]));
        snapshot = projectLandedGoalState({ store, snapshot, pathFingerprints: repairedFingerprints, landedAt: landingHead.landed_at, landingStatus: "recovered_landing_head" });
      }
      markRepositoryLandingProjected({ landingStateDir, validation });
      return { status: "already_landed", snapshot, next_action: "Continue author scheduling or inspect Goal status." };
    }
    if (validation.repository_sequence !== landingHead.repository_sequence + 1) {
      throw new GoalHarnessError("GOAL_LAND_SEQUENCE_GAP", "Repository snapshots must land in repository validation order without cross-Goal skips.", {
        requested_sequence: validation.repository_sequence,
        next_sequence: landingHead.repository_sequence + 1,
      });
    }
    const activationBootstrap = !hasLandingHead && publication.viewer_sequence === 1;
    const landingPaths = activationBootstrap
      ? captureActivationLandingPaths({ config, validations, validation })
      : snapshot.changed_files;
    const expectedFromBaseline = captureExpectedFilesFromCommitAllowMissing(config.project_root, validations[0].expected_old_head, landingPaths);
    const expected = { ...expectedFromBaseline, ...(landingHead.path_fingerprints ?? {}) };
    const landingTransaction = dryRun ? null : prepareRepositoryLanding({
      landingStateDir,
      landingHeadPath,
      landingHead,
      validation,
      publication,
      pathFingerprints: captureExpectedFilesFromCommitAllowMissing(config.project_root, validation.integration_commit, landingPaths),
      appliedPaths: landingPaths,
    });
    if (landingTransaction) {
      faultInjector("after_repository_landing_prepared", landingTransaction);
      reconcileRepositoryLandingJournal({ landingStateDir, landingHeadPath });
    }
    const result = withPinnedLandingSource({
      projectRoot: config.project_root,
      validation,
      read(sourceRoot) {
        return landFilesCas({
          projectRoot: config.project_root,
          sourceRoot,
          paths: landingPaths,
          expected,
          stateDir,
          snapshotId: snapshot.id,
          dryRun,
        });
      },
    });
    if (dryRun) {
      return { ...result, snapshot, expected, next_action: "Review the CAS path set, then repeat goal:land without --dry-run." };
    }
    const pathFingerprints = captureExpectedFiles(config.project_root, landingPaths);
    completeRepositoryLandingHead({ landingStateDir, landingHeadPath, transaction: landingTransaction });
    faultInjector("after_repository_landing_head", landingTransaction);
    snapshot = projectLandedGoalState({ store, snapshot, pathFingerprints, landedAt: landingTransaction.landed_at, landingStatus: result.status });
    writeViewerLandingProvenance({ publication, landingState: "landed", landedAt: snapshot.landed_at });
    writeJsonDurable(path.join(landingStateDir, "journal.json"), { ...landingTransaction, phase: "projected" });
    return { status: result.status, snapshot, path_fingerprints: pathFingerprints, state: store.rebuild(), next_action: "Resume scheduling; author worktrees remain preserved until explicit audited cleanup." };
  }));
}

function projectLandedGoalState({ store, snapshot, pathFingerprints, landedAt, landingStatus }) {
  let projected = { ...snapshot, state: "landed", landed_at: landedAt, landing_status: landingStatus };
  store.append({ event_id: `${snapshot.id}-landed`, type: "snapshot_replaced", payload: { snapshot: projected } });
  for (const taskId of snapshot.task_ids) {
    const state = store.rebuild();
    let task = state.tasks.find((entry) => entry.id === taskId);
    if (task.state === "validated") {
      task = applyTaskTransition(task, { transition_id: `${snapshot.id}-${task.id}-completed`, to: "completed", at: landedAt });
      task = { ...task, landed_at: landedAt };
      store.append({ event_id: `${snapshot.id}-${task.id}-completed-result`, type: "task_replaced", payload: { task } });
    }
  }
  store.append({ event_id: `${snapshot.id}-landing-fingerprints`, type: "landing_completed", payload: { snapshot_id: snapshot.id, path_fingerprints: pathFingerprints } });
  projected = store.rebuild().snapshots.find((entry) => entry.id === snapshot.id);
  return projected;
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
    if (!existsSync(absolutePath)) return { repoPath, absolutePath, fingerprint: { kind: "missing", sha256: null, size: 0 } };
    if (!lstatSync(absolutePath).isFile()) {
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
    if (source.fingerprint.kind === "file") {
      mkdirSync(path.dirname(staged), { recursive: true });
      copyFileSync(source.absolutePath, staged);
    }
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
      const source = sources.find((entry) => entry.repoPath === repoPath);
      if (source.fingerprint.kind === "missing") {
        if (existsSync(destination)) unlinkSync(destination);
        continue;
      }
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
    if (source.fingerprint.kind === "missing") {
      if (existsSync(destination)) unlinkSync(destination);
      continue;
    }
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

function prepareRepositoryLanding({ landingStateDir, landingHeadPath, landingHead, validation, publication, pathFingerprints, appliedPaths }) {
  const journalPath = path.join(landingStateDir, "journal.json");
  const currentBytes = existsSync(landingHeadPath) ? readFileSync(landingHeadPath) : null;
  const nextHead = {
    schema_version: 1,
    repository_sequence: validation.repository_sequence,
    integration_commit: validation.integration_commit,
    goal_id: validation.goal_id,
    harness_snapshot_id: validation.harness_snapshot_id,
    viewer_manifest_ref: publication.manifest_ref,
    landed_at: new Date().toISOString(),
    path_fingerprints: { ...(landingHead.path_fingerprints ?? {}), ...pathFingerprints },
  };
  const prepared = {
    schema_version: 1,
    phase: "prepared",
    repository_sequence: validation.repository_sequence,
    integration_commit: validation.integration_commit,
    expected_old_head_base64: currentBytes?.toString("base64") ?? null,
    expected_old_head_sha256: currentBytes ? createHash("sha256").update(currentBytes).digest("hex") : null,
    next_head: nextHead,
    next_head_sha256: createHash("sha256").update(jsonBytes(nextHead)).digest("hex"),
    landed_at: nextHead.landed_at,
    applied_paths: [...appliedPaths].sort(),
  };
  if (existsSync(journalPath)) {
    const retained = readRepositoryLandingJournal(journalPath);
    if (retained.repository_sequence === prepared.repository_sequence && retained.integration_commit === prepared.integration_commit &&
        ["prepared", "head_committed", "projected"].includes(retained.phase)) {
      if (retained.next_head.goal_id !== validation.goal_id || retained.next_head.harness_snapshot_id !== validation.harness_snapshot_id ||
          retained.next_head.viewer_manifest_ref !== publication.manifest_ref ||
          stableJson(retained.applied_paths) !== stableJson(prepared.applied_paths) ||
          stableJson(retained.next_head.path_fingerprints) !== stableJson(prepared.next_head.path_fingerprints)) {
        throw new GoalHarnessError("GOAL_LAND_JOURNAL_CONFLICT", "Retained repository landing transaction has a different publication identity.");
      }
      return retained;
    }
    if (retained.phase !== "projected") throw new GoalHarnessError("GOAL_LAND_JOURNAL_CONFLICT", "Another repository landing transaction is incomplete.");
  }
  writeJsonDurable(journalPath, prepared);
  return prepared;
}

function completeRepositoryLandingHead({ landingStateDir, landingHeadPath, transaction }) {
  const journalPath = path.join(landingStateDir, "journal.json");
  const oldBytes = transaction.expected_old_head_base64 === null ? null : Buffer.from(transaction.expected_old_head_base64, "base64");
  const nextBytes = jsonBytes(transaction.next_head);
  if (createHash("sha256").update(nextBytes).digest("hex") !== transaction.next_head_sha256 ||
      (oldBytes && createHash("sha256").update(oldBytes).digest("hex") !== transaction.expected_old_head_sha256)) {
    throw new GoalHarnessError("GOAL_LAND_JOURNAL_INVALID", "Repository landing journal pointer digests are invalid.");
  }
  const currentBytes = existsSync(landingHeadPath) ? readFileSync(landingHeadPath) : null;
  const matchesOld = currentBytes === null ? oldBytes === null : oldBytes !== null && currentBytes.equals(oldBytes);
  const matchesNew = currentBytes !== null && currentBytes.equals(nextBytes);
  if (!matchesOld && !matchesNew) {
    throw new GoalHarnessError("GOAL_LAND_HEAD_CAS_CONFLICT", "Repository landing head changed outside its exact-byte transaction.");
  }
  if (matchesOld) writeJsonDurable(landingHeadPath, transaction.next_head);
  writeJsonDurable(journalPath, { ...transaction, phase: "head_committed" });
}

function reconcileRepositoryLandingJournal({ landingStateDir, landingHeadPath }) {
  const journalPath = path.join(landingStateDir, "journal.json");
  if (!existsSync(journalPath)) return null;
  const transaction = readRepositoryLandingJournal(journalPath);
  const oldBytes = transaction.expected_old_head_base64 === null ? null : Buffer.from(transaction.expected_old_head_base64, "base64");
  const nextBytes = jsonBytes(transaction.next_head);
  if (createHash("sha256").update(nextBytes).digest("hex") !== transaction.next_head_sha256 ||
      (oldBytes && createHash("sha256").update(oldBytes).digest("hex") !== transaction.expected_old_head_sha256)) {
    throw new GoalHarnessError("GOAL_LAND_JOURNAL_INVALID", "Repository landing journal pointer digests are invalid.");
  }
  const currentBytes = existsSync(landingHeadPath) ? readFileSync(landingHeadPath) : null;
  const matchesOld = currentBytes === null ? oldBytes === null : oldBytes !== null && currentBytes.equals(oldBytes);
  const matchesNew = currentBytes !== null && currentBytes.equals(nextBytes);
  if (transaction.phase === "prepared") {
    if (!matchesOld && !matchesNew) throw new GoalHarnessError("GOAL_LAND_HEAD_CAS_CONFLICT", "Repository landing head changed outside its exact-byte transaction.");
    if (matchesNew) writeJsonDurable(journalPath, { ...transaction, phase: "head_committed" });
  } else if (!matchesNew) {
    throw new GoalHarnessError("GOAL_LAND_HEAD_CAS_CONFLICT", "Committed repository landing head no longer matches its journal.");
  }
  return transaction;
}

function readRepositoryLandingJournal(journalPath) {
  let value;
  try { value = JSON.parse(readFileSync(journalPath, "utf8")); } catch (error) {
    throw new GoalHarnessError("GOAL_LAND_JOURNAL_INVALID", "Repository landing journal is unreadable.", { cause: error.message });
  }
  if (value?.schema_version !== 1 || !["prepared", "head_committed", "projected"].includes(value.phase) ||
      !Number.isSafeInteger(value.repository_sequence) || value.repository_sequence < 1 ||
      !/^[a-f0-9]{40,64}$/u.test(value.integration_commit ?? "") ||
      (value.expected_old_head_base64 !== null && typeof value.expected_old_head_base64 !== "string") ||
      (value.expected_old_head_sha256 !== null && !/^[a-f0-9]{64}$/u.test(value.expected_old_head_sha256 ?? "")) ||
      !/^[a-f0-9]{64}$/u.test(value.next_head_sha256 ?? "") || !value.next_head ||
      value.next_head.schema_version !== 1 || value.next_head.repository_sequence !== value.repository_sequence ||
      value.next_head.integration_commit !== value.integration_commit ||
      typeof value.next_head.goal_id !== "string" || typeof value.next_head.harness_snapshot_id !== "string" ||
      !/^sha256:[a-f0-9]{64}$/u.test(value.next_head.viewer_manifest_ref ?? "") ||
      !Number.isFinite(Date.parse(value.next_head.landed_at ?? "")) || value.next_head.landed_at !== value.landed_at ||
      !value.next_head.path_fingerprints || typeof value.next_head.path_fingerprints !== "object" ||
      !Array.isArray(value.applied_paths) || value.applied_paths.some((entry) => typeof entry !== "string")) {
    throw new GoalHarnessError("GOAL_LAND_JOURNAL_INVALID", "Repository landing journal is malformed.");
  }
  return value;
}

function markRepositoryLandingProjected({ landingStateDir, validation }) {
  const journalPath = path.join(landingStateDir, "journal.json");
  if (!existsSync(journalPath)) return;
  const transaction = readRepositoryLandingJournal(journalPath);
  if (transaction.repository_sequence === validation.repository_sequence && transaction.integration_commit === validation.integration_commit && transaction.phase !== "projected") {
    writeJsonDurable(journalPath, { ...transaction, phase: "projected" });
  }
}

function jsonBytes(value) {
  return Buffer.from(`${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function writeJsonDurable(filePath, value) {
  const temporary = `${filePath}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, jsonBytes(value), { flag: "wx", mode: 0o600 });
  const descriptor = openSync(temporary, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
  renameSync(temporary, filePath);
  const directory = openSync(path.dirname(filePath), "r");
  try { fsyncSync(directory); } finally { closeSync(directory); }
}

function withPinnedLandingSource({ projectRoot, validation, read }) {
  verifyPinnedLandingSource(projectRoot, validation);
  const parent = path.join(projectRoot, ".worktrees", "goal-landings");
  mkdirSync(parent, { recursive: true });
  const sourceRoot = path.join(parent, `${String(validation.repository_sequence).padStart(12, "0")}-${randomUUID()}`);
  try {
    execFileSync("git", ["worktree", "add", "--detach", sourceRoot, validation.integration_commit], { cwd: projectRoot, stdio: "ignore" });
    assertDetachedLandingSource(sourceRoot, validation);
    const result = read(sourceRoot);
    verifyPinnedLandingSource(projectRoot, validation);
    assertDetachedLandingSource(sourceRoot, validation);
    return result;
  } finally {
    if (existsSync(sourceRoot)) {
      execFileSync("git", ["worktree", "remove", "--force", sourceRoot], { cwd: projectRoot, stdio: "ignore" });
    }
  }
}

function verifyPinnedLandingSource(projectRoot, validation) {
  const refCommit = execFileSync("git", ["rev-parse", "--verify", `${validation.source_ref}^{commit}`], { cwd: projectRoot, encoding: "utf8" }).trim();
  const tree = execFileSync("git", ["rev-parse", "--verify", `${validation.integration_commit}^{tree}`], { cwd: projectRoot, encoding: "utf8" }).trim();
  if (refCommit !== validation.integration_commit || tree !== validation.tree_hash) {
    throw new GoalHarnessError("GOAL_LAND_SOURCE_REF_CONFLICT", "Pinned landing source ref or tree differs from repository validation truth.");
  }
}

function assertDetachedLandingSource(sourceRoot, validation) {
  const head = execFileSync("git", ["rev-parse", "--verify", "HEAD^{commit}"], { cwd: sourceRoot, encoding: "utf8" }).trim();
  const tree = execFileSync("git", ["rev-parse", "--verify", "HEAD^{tree}"], { cwd: sourceRoot, encoding: "utf8" }).trim();
  const status = execFileSync("git", ["status", "--porcelain=v1", "--untracked-files=all"], { cwd: sourceRoot, encoding: "utf8" }).trim();
  if (head !== validation.integration_commit || tree !== validation.tree_hash || status !== "") {
    throw new GoalHarnessError("GOAL_LAND_SOURCE_INVALID", "Detached landing source does not match the pinned integration commit and tree.");
  }
}

function captureActivationLandingPaths({ config, validations, validation }) {
  const baseline = validations[0].expected_old_head;
  const output = execFileSync("git", ["diff", "--name-only", "-z", baseline, validation.integration_commit, "--"], {
    cwd: config.project_root,
    encoding: "buffer",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: GIT_BLOB_MAX_BUFFER,
  });
  const paths = output.toString("utf8").split("\0").filter(Boolean).map((entry) => assertRepoPath(entry, { allowSensitive: true })).sort();
  const configuredRoots = config.baseline?.tracked_roots;
  const allowedRoots = Array.isArray(configuredRoots) && configuredRoots.length > 0
    ? configuredRoots.map((entry) => assertRepoPath(entry, { allowSensitive: true }))
    : validations.flatMap((entry) => entry.goal_projection?.changed_files ?? []).map((entry) => assertRepoPath(entry, { allowSensitive: true }));
  const unauthorized = paths.filter((entry) => !allowedRoots.some((root) => entry === root || entry.startsWith(`${root}/`)));
  if (unauthorized.length > 0) {
    throw new GoalHarnessError("GOAL_LAND_ACTIVATION_SCOPE_INVALID", "Activation landing includes paths outside the configured repository roots.", { unauthorized, allowed_roots: allowedRoots });
  }
  return paths;
}

function sameFingerprint(left, right) {
  return Boolean(left && right && left.kind === right.kind && left.sha256 === right.sha256 && left.size === right.size);
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
