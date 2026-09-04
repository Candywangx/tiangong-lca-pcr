import { execFileSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import {
  closeSync,
  existsSync,
  fsyncSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { withGoalLock } from "./lock.mjs";

export const REPOSITORY_INTEGRATION_HEAD_REF = "refs/tiangong-viewer/integration-head";
const SOURCE_REF_PREFIX = "refs/tiangong-viewer-sources";

export function repositoryCoordinatorStateDir(projectRoot) {
  return path.join(projectRoot, "library", ".pcr-builder-state", "repository-coordinator");
}

export function reserveRepositoryCandidate({
  projectRoot,
  goalId,
  snapshotId,
  fallbackHead,
  candidateToken = randomUUID(),
  now = () => new Date().toISOString(),
}) {
  assertIdentityToken(goalId, "Goal id");
  assertIdentityToken(snapshotId, "snapshot id");
  assertIdentityToken(candidateToken, "candidate token");
  const initialHead = resolveCommit(projectRoot, fallbackHead, "fallback integration head");
  const stateDir = repositoryCoordinatorStateDir(projectRoot);
  return withGoalLock(stateDir, "repository-candidate-reserve", () => {
    ensureMetadata({ projectRoot, stateDir, initialHead, now });
    recoverPreparedValidation({ projectRoot, stateDir, now });
    const observedHead = readAcceptedHead({ projectRoot, stateDir });
    const existing = listCandidates(stateDir).find((candidate) =>
      candidate.goal_id === goalId &&
      candidate.harness_snapshot_id === snapshotId &&
      candidate.observed_integration_head === observedHead &&
      candidate.status === "reserved",
    );
    if (existing) return existing;

    const candidate = {
      schema_version: 1,
      status: "reserved",
      candidate_token: candidateToken,
      goal_id: goalId,
      harness_snapshot_id: snapshotId,
      observed_integration_head: observedHead,
      reserved_at: now(),
    };
    writeJsonCreate(candidatePath(stateDir, candidateToken), candidate);
    return candidate;
  });
}

export function commitRepositoryValidation({
  projectRoot,
  candidateToken,
  integrationCommit,
  goalStateDir = null,
  snapshotProjection = null,
  now = () => new Date().toISOString(),
  faultInjector = () => {},
}) {
  assertIdentityToken(candidateToken, "candidate token");
  const commit = resolveCommit(projectRoot, integrationCommit, "integration commit");
  const stateDir = repositoryCoordinatorStateDir(projectRoot);
  const record = withGoalLock(stateDir, "repository-validation-commit", () => {
    recoverPreparedValidation({ projectRoot, stateDir, now });
    const candidate = readJsonFile(candidatePath(stateDir, candidateToken), "GOAL_REPOSITORY_CANDIDATE_UNKNOWN");
    validateCandidate(candidate, candidateToken);
    const alreadyCommitted = listCommittedRepositoryValidations({ projectRoot })
      .find((entry) => entry.candidate_token === candidateToken);
    if (alreadyCommitted) {
      if (alreadyCommitted.integration_commit !== commit) {
        throw new GoalHarnessError("GOAL_REPOSITORY_CANDIDATE_CONFLICT", "Candidate token was already committed with a different integration commit.", {
          candidate_token: candidateToken,
          expected_commit: alreadyCommitted.integration_commit,
          actual_commit: commit,
        });
      }
      return alreadyCommitted;
    }

    const currentHead = readAcceptedHead({ projectRoot, stateDir });
    if (candidate.observed_integration_head !== currentHead) {
      throw new GoalHarnessError("GOAL_REPOSITORY_CANDIDATE_STALE", "Repository integration head advanced while the candidate was being validated; re-integrate on the accepted head.", {
        candidate_token: candidateToken,
        observed_head: candidate.observed_integration_head,
        current_head: currentHead,
      });
    }
    if (!isAncestor(projectRoot, currentHead, commit)) {
      throw new GoalHarnessError("GOAL_REPOSITORY_INTEGRATION_DIVERGED", "Integration commit is not based on the accepted repository integration head.", {
        expected_base: currentHead,
        integration_commit: commit,
      });
    }

    const validations = listCommittedRepositoryValidations({ projectRoot });
    const repositorySequence = (validations.at(-1)?.repository_sequence ?? 0) + 1;
    const sourceRef = `${SOURCE_REF_PREFIX}/${candidate.goal_id}/${candidate.harness_snapshot_id}`;
    const currentHeadRef = readRef(projectRoot, REPOSITORY_INTEGRATION_HEAD_REF);
    const expectedHeadRef = validations.length === 0 ? null : currentHead;
    if (currentHeadRef !== expectedHeadRef || readRef(projectRoot, sourceRef) !== null) {
      throw new GoalHarnessError("GOAL_REPOSITORY_REF_CONFLICT", "Repository integration or source ref does not match the coordinator state.", {
        expected_integration_ref: expectedHeadRef,
        actual_integration_ref: currentHeadRef,
        source_ref: sourceRef,
        actual_source_ref: readRef(projectRoot, sourceRef),
      });
    }

    const validatedAt = now();
    const prepared = {
      schema_version: 1,
      phase: "validation_prepared",
      candidate_token: candidateToken,
      goal_id: candidate.goal_id,
      harness_snapshot_id: candidate.harness_snapshot_id,
      repository_sequence: repositorySequence,
      expected_old_head: currentHead,
      expected_head_ref: currentHeadRef,
      integration_commit: commit,
      tree_hash: git(projectRoot, ["rev-parse", `${commit}^{tree}`]),
      source_ref: sourceRef,
      validated_at: validatedAt,
      viewer_publication: "pending",
      goal_projection: snapshotProjection ? structuredClone(snapshotProjection) : null,
    };
    writeJsonAtomic(journalPath(stateDir), prepared);
    faultInjector("after_prepare", prepared);
    updateValidationRefs({ projectRoot, prepared });
    faultInjector("after_refs", prepared);
    return finalizePreparedValidation({ stateDir, prepared, faultInjector });
  });

  if (goalStateDir) projectRepositoryValidation({ goalStateDir, record });
  return record;
}

export function recoverRepositoryCoordinator({
  projectRoot,
  repairGoalProjections = true,
  now = () => new Date().toISOString(),
}) {
  const stateDir = repositoryCoordinatorStateDir(projectRoot);
  if (!existsSync(path.join(stateDir, "metadata.json"))) {
    return { recovered: null, projections: [] };
  }
  const recovered = withGoalLock(stateDir, "repository-recovery", () =>
    recoverPreparedValidation({ projectRoot, stateDir, now }),
  );
  const committed = listCommittedRepositoryValidations({ projectRoot });
  const projections = [];
  if (repairGoalProjections) {
    for (const record of committed) {
      const goalStateDir = path.join(projectRoot, "library", ".pcr-builder-state", "goals", record.goal_id);
      if (!existsSync(path.join(goalStateDir, "initial-state.json"))) continue;
      projections.push(withGoalLock(goalStateDir, "repository-validation-recovery", () =>
        projectRepositoryValidation({ goalStateDir, record }),
      ));
    }
  }
  return { recovered, projections };
}

export function selectRepositoryIntegrationHead({ projectRoot, fallbackHead }) {
  const stateDir = repositoryCoordinatorStateDir(projectRoot);
  if (!existsSync(path.join(stateDir, "metadata.json"))) {
    return resolveCommit(projectRoot, fallbackHead, "fallback integration head");
  }
  return readAcceptedHead({ projectRoot, stateDir });
}

export function listCommittedRepositoryValidations({ projectRoot }) {
  const stateDir = repositoryCoordinatorStateDir(projectRoot);
  const directory = path.join(stateDir, "validations");
  const records = [];
  if (existsSync(directory)) {
    assertDirectory(directory, "GOAL_REPOSITORY_STATE_INVALID");
    records.push(...readdirSync(directory)
      .filter((name) => /^\d{12}\.json$/u.test(name))
      .sort()
      .map((name) => readJsonFile(path.join(directory, name), "GOAL_REPOSITORY_STATE_INVALID")));
  }
  const coordinatorJournalPath = journalPath(stateDir);
  let journal = null;
  if (existsSync(coordinatorJournalPath)) {
    journal = readJsonFile(coordinatorJournalPath, "GOAL_REPOSITORY_JOURNAL_INVALID");
    if (journal.phase === "validation_committed") {
      validateCommittedRecord(journal);
      const retained = records.find((entry) => entry.repository_sequence === journal.repository_sequence);
      if (retained && stableJson(retained) !== stableJson(journal)) {
        throw new GoalHarnessError("GOAL_REPOSITORY_JOURNAL_CONFLICT", "Committed coordinator journal differs from its retained validation record.");
      }
      if (!retained) records.push(journal);
    } else {
      validatePreparedRecord(journal);
      if (records.some((entry) => entry.repository_sequence >= journal.repository_sequence)) {
        throw new GoalHarnessError("GOAL_REPOSITORY_JOURNAL_CONFLICT", "Prepared coordinator journal conflicts with a visible validation record.");
      }
    }
  }
  if (records.length === 0) return [];
  if (!journal) {
    throw new GoalHarnessError("GOAL_REPOSITORY_JOURNAL_MISSING", "Repository validation records exist without an authoritative coordinator journal.");
  }
  if (journal.phase === "validation_committed" && records.some((entry) => entry.repository_sequence > journal.repository_sequence)) {
    throw new GoalHarnessError("GOAL_REPOSITORY_JOURNAL_CONFLICT", "Repository validation records advance beyond the authoritative coordinator journal.");
  }
  records.sort((left, right) => left.repository_sequence - right.repository_sequence);
  const metadata = readJsonFile(path.join(stateDir, "metadata.json"), "GOAL_REPOSITORY_STATE_INVALID");
  let priorHead = resolveCommit(projectRoot, metadata.initial_head, "coordinator initial head");
  for (const [index, record] of records.entries()) {
    validateCommittedRecord(record);
    if (record.repository_sequence !== index + 1) {
      throw new GoalHarnessError("GOAL_REPOSITORY_SEQUENCE_INVALID", "Repository validation sequence is not contiguous.", {
        expected_sequence: index + 1,
        actual_sequence: record.repository_sequence,
      });
    }
    if (record.expected_old_head !== priorHead || !isAncestor(projectRoot, priorHead, record.integration_commit)) {
      throw new GoalHarnessError("GOAL_REPOSITORY_LINEAGE_INVALID", "Repository validation lineage is not based on the preceding accepted head.", {
        repository_sequence: record.repository_sequence,
        expected_old_head: priorHead,
        recorded_old_head: record.expected_old_head,
        integration_commit: record.integration_commit,
      });
    }
    const actualSource = readRef(projectRoot, record.source_ref);
    if (actualSource !== record.integration_commit) {
      throw new GoalHarnessError("GOAL_REPOSITORY_SOURCE_REF_CONFLICT", "Pinned Viewer source ref differs from its committed validation record.", {
        repository_sequence: record.repository_sequence,
        source_ref: record.source_ref,
        expected_commit: record.integration_commit,
        actual_commit: actualSource,
      });
    }
    const actualTree = git(projectRoot, ["rev-parse", `${record.integration_commit}^{tree}`]);
    if (actualTree !== record.tree_hash) {
      throw new GoalHarnessError("GOAL_REPOSITORY_SOURCE_TREE_CONFLICT", "Pinned integration commit tree differs from its committed validation record.", {
        repository_sequence: record.repository_sequence,
        expected_tree: record.tree_hash,
        actual_tree: actualTree,
      });
    }
    priorHead = record.integration_commit;
  }
  return records;
}

export function projectRepositoryValidation({ goalStateDir, record }) {
  validateCommittedRecord(record);
  const store = new GoalEventStore({ stateDir: goalStateDir });
  const state = store.rebuild();
  if (state.goal_id !== record.goal_id) {
    throw new GoalHarnessError("GOAL_REPOSITORY_PROJECTION_GOAL_CONFLICT", "Committed repository validation was projected into the wrong Goal state.", {
      expected_goal_id: record.goal_id,
      actual_goal_id: state.goal_id,
    });
  }
  const snapshot = state.snapshots?.find((entry) => entry.id === record.harness_snapshot_id);
  if (!snapshot) {
    throw new GoalHarnessError("GOAL_REPOSITORY_PROJECTION_TARGET_MISSING", "Committed repository validation refers to a missing Goal snapshot.", {
      goal_id: record.goal_id,
      snapshot_id: record.harness_snapshot_id,
    });
  }
  if (snapshot.repository_sequence !== undefined && snapshot.repository_sequence !== record.repository_sequence) {
    throw new GoalHarnessError("GOAL_REPOSITORY_PROJECTION_CONFLICT", "Goal snapshot already carries a different repository validation sequence.", {
      snapshot_id: snapshot.id,
      expected_sequence: record.repository_sequence,
      actual_sequence: snapshot.repository_sequence,
    });
  }
  const projection = {
    ...(record.goal_projection ?? {}),
    state: snapshot.state === "landed" ? "landed" : "validated",
    integration_commit: record.integration_commit,
    repository_sequence: record.repository_sequence,
    source_ref: record.source_ref,
    source_tree: record.tree_hash,
    validated_at: record.validated_at,
    viewer_publication: record.viewer_publication,
  };
  const taskProjections = (record.goal_projection?.task_ids ?? []).map((taskId) => {
    const task = state.tasks?.find((entry) => entry.id === taskId);
    if (!task) {
      throw new GoalHarnessError("GOAL_REPOSITORY_PROJECTION_TASK_MISSING", "Committed repository validation refers to a missing Goal task.", {
        goal_id: record.goal_id,
        snapshot_id: snapshot.id,
        task_id: taskId,
      });
    }
    const transitionIds = [...new Set([
      ...(task.transition_ids ?? []),
      `${snapshot.id}-${task.id}-integrated`,
      `${snapshot.id}-${task.id}-validated`,
    ])];
    return {
      ...task,
      state: task.state === "completed" ? "completed" : "validated",
      integration_commit: record.integration_commit,
      updated_at: record.validated_at,
      transition_ids: transitionIds,
    };
  });
  const snapshotMatches = Object.entries(projection).every(([key, value]) => stableJson(snapshot[key]) === stableJson(value));
  const tasksMatch = taskProjections.every((projected) => {
    const current = state.tasks.find((entry) => entry.id === projected.id);
    return stableJson(current) === stableJson(projected);
  });
  if (snapshotMatches && tasksMatch) return { goal_id: record.goal_id, snapshot_id: snapshot.id, status: "already_projected" };
  store.append({
    event_id: `repository-validation-${String(record.repository_sequence).padStart(12, "0")}`,
    type: "repository_validation_projected",
    payload: { snapshot_id: snapshot.id, projection, tasks: taskProjections },
  });
  return { goal_id: record.goal_id, snapshot_id: snapshot.id, status: "projected" };
}

function recoverPreparedValidation({ projectRoot, stateDir, now }) {
  const file = journalPath(stateDir);
  if (!existsSync(file)) return null;
  const journal = readJsonFile(file, "GOAL_REPOSITORY_JOURNAL_INVALID");
  if (journal.phase === "validation_committed") {
    validateCommittedRecord(journal);
    const actualHead = readRef(projectRoot, REPOSITORY_INTEGRATION_HEAD_REF);
    const actualSource = readRef(projectRoot, journal.source_ref);
    if (actualHead !== journal.integration_commit || actualSource !== journal.integration_commit) {
      throw new GoalHarnessError("GOAL_REPOSITORY_RECOVERY_CONFLICT", "Committed coordinator validation refs no longer match its authoritative journal.", {
        integration_ref: actualHead,
        source_ref: actualSource,
        journal,
      });
    }
    materializeCommittedRecord({ stateDir, committed: journal });
    return journal;
  }
  validatePreparedRecord(journal);
  const actualHead = readRef(projectRoot, REPOSITORY_INTEGRATION_HEAD_REF);
  const actualSource = readRef(projectRoot, journal.source_ref);
  const beforeHead = journal.expected_head_ref ?? null;
  const refsBefore = actualHead === beforeHead && actualSource === null;
  const refsAfter = actualHead === journal.integration_commit && actualSource === journal.integration_commit;
  if (refsBefore) {
    updateValidationRefs({ projectRoot, prepared: journal });
  } else if (!refsAfter) {
    throw new GoalHarnessError("GOAL_REPOSITORY_RECOVERY_CONFLICT", "Prepared coordinator validation refs are neither before nor after the guarded transaction.", {
      integration_ref: actualHead,
      source_ref: actualSource,
      prepared: journal,
    });
  }
  return finalizePreparedValidation({ stateDir, prepared: journal });
}

function finalizePreparedValidation({ stateDir, prepared, faultInjector = () => {} }) {
  const committed = { ...prepared, phase: "validation_committed" };
  writeJsonAtomic(journalPath(stateDir), committed);
  faultInjector("after_validation_committed", committed);
  materializeCommittedRecord({ stateDir, committed });
  faultInjector("after_record_persisted", committed);
  return committed;
}

function materializeCommittedRecord({ stateDir, committed }) {
  const retainedPath = validationPath(stateDir, committed.repository_sequence);
  if (existsSync(retainedPath)) {
    const retained = readJsonFile(retainedPath, "GOAL_REPOSITORY_STATE_INVALID");
    if (stableJson(retained) !== stableJson(committed)) {
      throw new GoalHarnessError("GOAL_REPOSITORY_VALIDATION_CONFLICT", "Repository sequence already contains a different validation record.", {
        repository_sequence: committed.repository_sequence,
      });
    }
  } else {
    writeJsonCreate(retainedPath, committed);
  }
}

function updateValidationRefs({ projectRoot, prepared }) {
  const nullObjectId = "0".repeat(git(projectRoot, ["rev-parse", "--show-object-format"]) === "sha256" ? 64 : 40);
  const oldHead = prepared.expected_head_ref ?? nullObjectId;
  const input = [
    "start",
    `update ${REPOSITORY_INTEGRATION_HEAD_REF} ${prepared.integration_commit} ${oldHead}`,
    `update ${prepared.source_ref} ${prepared.integration_commit} ${nullObjectId}`,
    "prepare",
    "commit",
    "",
  ].join("\n");
  try {
    git(projectRoot, ["update-ref", "--stdin"], input);
  } catch (error) {
    throw new GoalHarnessError("GOAL_REPOSITORY_REF_TRANSACTION_FAILED", "Guarded repository validation ref transaction failed.", {
      integration_ref: REPOSITORY_INTEGRATION_HEAD_REF,
      source_ref: prepared.source_ref,
      cause: error.stderr?.toString?.() ?? error.message,
    });
  }
}

function readAcceptedHead({ projectRoot, stateDir }) {
  const metadata = readJsonFile(path.join(stateDir, "metadata.json"), "GOAL_REPOSITORY_STATE_INVALID");
  const initialHead = resolveCommit(projectRoot, metadata.initial_head, "coordinator initial head");
  const validations = listCommittedRepositoryValidations({ projectRoot });
  const accepted = validations.at(-1)?.integration_commit ?? initialHead;
  const actualRef = readRef(projectRoot, REPOSITORY_INTEGRATION_HEAD_REF);
  const expectedRef = validations.length === 0 ? null : accepted;
  if (actualRef !== expectedRef) {
    throw new GoalHarnessError("GOAL_REPOSITORY_HEAD_CONFLICT", "Repository integration ref differs from committed coordinator state.", {
      expected_head: expectedRef,
      actual_head: actualRef,
    });
  }
  return accepted;
}

function ensureMetadata({ projectRoot, stateDir, initialHead, now }) {
  const file = path.join(stateDir, "metadata.json");
  if (!existsSync(file)) {
    writeJsonCreate(file, { schema_version: 1, initial_head: initialHead, created_at: now() });
    return;
  }
  const metadata = readJsonFile(file, "GOAL_REPOSITORY_STATE_INVALID");
  resolveCommit(projectRoot, metadata.initial_head, "coordinator initial head");
}

function listCandidates(stateDir) {
  const directory = path.join(stateDir, "candidates");
  if (!existsSync(directory)) return [];
  assertDirectory(directory, "GOAL_REPOSITORY_STATE_INVALID");
  return readdirSync(directory)
    .filter((name) => name.endsWith(".json"))
    .sort()
    .map((name) => readJsonFile(path.join(directory, name), "GOAL_REPOSITORY_STATE_INVALID"));
}

function validateCandidate(candidate, token) {
  if (candidate?.schema_version !== 1 || candidate.status !== "reserved" || candidate.candidate_token !== token ||
      typeof candidate.goal_id !== "string" || typeof candidate.harness_snapshot_id !== "string" ||
      !isObjectId(candidate.observed_integration_head)) {
    throw new GoalHarnessError("GOAL_REPOSITORY_CANDIDATE_INVALID", "Repository candidate record is malformed.", { candidate_token: token });
  }
}

function validatePreparedRecord(record) {
  if (record?.schema_version !== 1 || record.phase !== "validation_prepared" ||
      !Number.isSafeInteger(record.repository_sequence) || record.repository_sequence < 1 ||
      !isObjectId(record.expected_old_head) || !isObjectId(record.integration_commit) || !isObjectId(record.tree_hash) ||
      (record.expected_head_ref !== null && !isObjectId(record.expected_head_ref)) ||
      typeof record.source_ref !== "string" || record.viewer_publication !== "pending" ||
      !Number.isFinite(Date.parse(record.validated_at ?? ""))) {
    throw new GoalHarnessError("GOAL_REPOSITORY_JOURNAL_INVALID", "Prepared repository validation journal is malformed.");
  }
  assertIdentityToken(record.candidate_token, "candidate token");
  assertIdentityToken(record.goal_id, "Goal id");
  assertIdentityToken(record.harness_snapshot_id, "snapshot id");
  if (record.source_ref !== `${SOURCE_REF_PREFIX}/${record.goal_id}/${record.harness_snapshot_id}`) {
    throw new GoalHarnessError("GOAL_REPOSITORY_JOURNAL_INVALID", "Prepared repository validation source ref does not match its Goal/snapshot identity.");
  }
}

function validateCommittedRecord(record) {
  if (record?.phase !== "validation_committed") {
    throw new GoalHarnessError("GOAL_REPOSITORY_STATE_INVALID", "Retained repository validation is not committed.");
  }
  validatePreparedRecord({ ...record, phase: "validation_prepared" });
}

function resolveCommit(root, value, label) {
  if (!isObjectId(value)) {
    throw new GoalHarnessError("GOAL_REPOSITORY_COMMIT_INVALID", `Invalid ${label}: ${value}`);
  }
  try {
    return git(root, ["rev-parse", "--verify", `${value}^{commit}`]);
  } catch {
    throw new GoalHarnessError("GOAL_REPOSITORY_COMMIT_INVALID", `${label} is not an available Git commit: ${value}`);
  }
}

function isAncestor(root, ancestor, descendant) {
  try {
    execFileSync("git", ["merge-base", "--is-ancestor", ancestor, descendant], { cwd: root, stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function readRef(root, ref) {
  try {
    return git(root, ["rev-parse", "--verify", `${ref}^{commit}`]);
  } catch {
    return null;
  }
}

function git(root, args, input = undefined) {
  return execFileSync("git", args, {
    cwd: root,
    input,
    encoding: "utf8",
    stdio: [input === undefined ? "ignore" : "pipe", "pipe", "pipe"],
  }).trim();
}

function journalPath(stateDir) {
  return path.join(stateDir, "validation-journal.json");
}

function candidatePath(stateDir, token) {
  return path.join(stateDir, "candidates", `${token}.json`);
}

function validationPath(stateDir, sequence) {
  return path.join(stateDir, "validations", `${String(sequence).padStart(12, "0")}.json`);
}

function readJsonFile(filePath, code) {
  try {
    const stat = lstatSync(filePath);
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error("not a regular file");
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new GoalHarnessError(code, `Cannot read coordinator state file: ${filePath}`, { cause: error.message });
  }
}

function writeJsonCreate(filePath, value) {
  mkdirDurable(path.dirname(filePath));
  const bytes = `${JSON.stringify(value, null, 2)}\n`;
  try {
    writeFileSync(filePath, bytes, { flag: "wx", mode: 0o600 });
  } catch (error) {
    if (!existsSync(filePath)) throw error;
    const stat = lstatSync(filePath);
    if (!stat.isFile() || stat.isSymbolicLink() || readFileSync(filePath, "utf8") !== bytes) throw error;
  }
  fsyncFileAndDirectory(filePath);
}

function writeJsonAtomic(filePath, value) {
  mkdirDurable(path.dirname(filePath));
  const temporary = `${filePath}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx", mode: 0o600 });
  fsyncFile(temporary);
  renameSync(temporary, filePath);
  fsyncDirectory(path.dirname(filePath));
}

function mkdirDurable(directory) {
  mkdirSync(directory, { recursive: true, mode: 0o700 });
}

function fsyncFileAndDirectory(filePath) {
  fsyncFile(filePath);
  fsyncDirectory(path.dirname(filePath));
}

function fsyncFile(filePath) {
  const descriptor = openSync(filePath, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function fsyncDirectory(directory) {
  const descriptor = openSync(directory, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function assertDirectory(directory, code) {
  const stat = lstatSync(directory);
  if (!stat.isDirectory() || stat.isSymbolicLink()) {
    throw new GoalHarnessError(code, `Coordinator state path is not a directory: ${directory}`);
  }
}

function assertIdentityToken(value, label) {
  if (typeof value !== "string" || !/^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/u.test(value) || value.includes("..") || value.endsWith(".lock")) {
    throw new GoalHarnessError("GOAL_REPOSITORY_IDENTITY_INVALID", `${label} is not safe for durable coordinator identity: ${value}`);
  }
}

function isObjectId(value) {
  return /^[a-f0-9]{40,64}$/u.test(String(value));
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map((entry) => stableJson(entry)).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).filter((key) => value[key] !== undefined).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}
