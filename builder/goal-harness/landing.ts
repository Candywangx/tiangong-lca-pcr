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

import { GoalHarnessError } from "./errors.ts";
import { GoalEventStore } from "./event-store.ts";
import { withGoalLock } from "./lock.ts";
import { assertRepoPath, resolveRepoPath } from "./paths.ts";
import { applyTaskTransition } from "./state-machine.ts";
import { assertReconciliationInputs } from "./reconciliation.ts";
import { listCommittedRepositoryValidations, repositoryCoordinatorStateDir } from "./repository-coordinator.ts";
import { listViewerPublications, verifyPublishedViewerArtifact, writeViewerLandingProvenance } from "./viewer-publication.ts";

import { record, records, strings, text, field, isRecord, errorMessage, jsonRecord } from "./domain.ts";
import type { GoalConfig, GoalSnapshot, UnknownRecord } from "./domain.ts";
import type { CommittedRepositoryValidation } from "./repository-coordinator.ts";
export interface FileFingerprint extends UnknownRecord {kind:string;sha256:string|null;size:number}
export type FileFingerprintMap=Record<string,FileFingerprint>;
interface LandingSource {repoPath:string;absolutePath:string;fingerprint:FileFingerprint}
interface LandingJournal extends UnknownRecord {status:string;paths:string[];sources?:LandingSource[];expected?:FileFingerprintMap}
interface LandingHead extends UnknownRecord {schema_version:1;repository_sequence:number;integration_commit:string|undefined;path_fingerprints:FileFingerprintMap;landed_at?:string}
interface RepositoryLandingTransaction extends UnknownRecord {schema_version:1;phase:string;repository_sequence:number;integration_commit:string;expected_old_head_base64:string|null;expected_old_head_sha256:string|null;next_head:LandingHead;next_head_sha256:string;landed_at:string;applied_paths:string[]}
type LandingConfig=Pick<GoalConfig,"project_root"|"goal_id"|"artifact_store"> & {baseline?:{tracked_roots?:string[]}};
interface LandFilesOptions {projectRoot:string;sourceRoot:string;sourceCommit?:string|null;paths:readonly string[];expected:FileFingerprintMap;stateDir:string;snapshotId:string;dryRun?:boolean}
export interface LandFilesResult {status:string;snapshot_id:string;paths:string[];sources?:LandingSource[];recovery_required?:boolean}
function fingerprintValue(input:unknown):FileFingerprint {const value=record(input,"file fingerprint");if(typeof value.kind!=="string" || (value.sha256!==null&&typeof value.sha256!=="string") || typeof value.size!=="number")throw new GoalHarnessError("GOAL_LAND_JOURNAL_INVALID","File fingerprint is malformed.");return {...value,kind:value.kind,sha256:value.sha256,size:value.size};}
export function readFileFingerprints(input:unknown):FileFingerprintMap {return Object.fromEntries(Object.entries(record(input,"file fingerprints")).map(([key,value])=>[key,fingerprintValue(value)]));}
function fingerprintAt(values:FileFingerprintMap,key:string):FileFingerprint {const value=values[key];if(!value)throw new GoalHarnessError("GOAL_LAND_SOURCE_INVALID",`Missing source fingerprint: ${key}`);return value;}
function sourceAt(values:readonly LandingSource[],key:string):LandingSource {const value=values.find(entry=>entry.repoPath===key);if(!value)throw new GoalHarnessError("GOAL_LAND_RECOVERY_INVALID",`Missing landing source: ${key}`);return value;}
function landingJournal(input:unknown):LandingJournal {const value=record(input,"landing journal");return {...value,status:text(value.status),paths:strings(value.paths),...(value.sources===undefined?{}:{sources:records(value.sources).map(entry=>({...entry,repoPath:text(entry.repoPath),absolutePath:text(entry.absolutePath),fingerprint:fingerprintValue(entry.fingerprint)}))}),...(value.expected===undefined?{}:{expected:readFileFingerprints(value.expected)})};}
const GIT_BLOB_MAX_BUFFER = 256 * 1024 * 1024;

export function captureExpectedFiles(root:string, paths:readonly string[]):FileFingerprintMap {
  return Object.fromEntries(paths.map((entry) => {
    const repoPath = assertRepoPath(entry, { allowSensitive: true });
    return [repoPath, fingerprint(resolveRepoPath(root, repoPath, { allowSensitive: true }))];
  }));
}

export function captureExpectedFilesFromCommit(root:string,commit:string,paths:readonly string[]):FileFingerprintMap {
  return Object.fromEntries(paths.map((entry) => {
    const repoPath = assertRepoPath(entry, { allowSensitive: true });
    const result = execFileSync("git", ["cat-file", "-e", `${commit}:${repoPath}`], { cwd: root, stdio: "ignore" , encoding: "utf8" });
    void result;
    const bytes = readCommitFile(root, commit, repoPath);
    return [repoPath, { kind: "file", sha256: createHash("sha256").update(bytes).digest("hex"), size: bytes.length }];
  }));
}

export function landGoalSnapshot({ config, stateDir, snapshotId = null, dryRun = false, artifactStoreVerifier = verifyPublishedViewerArtifact, faultInjector = () => {} }: {config:LandingConfig;stateDir:string;snapshotId?:string|null;dryRun?:boolean;artifactStoreVerifier?:typeof verifyPublishedViewerArtifact;faultInjector?:(phase:string,transaction:RepositoryLandingTransaction|null)=>unknown}) {
  const landingStateDir = path.join(repositoryCoordinatorStateDir(config.project_root), "landing");
  return withGoalLock(landingStateDir, "repository-land", () => withGoalLock(stateDir, "land", () => {
    const store = new GoalEventStore({ stateDir });
    const state = store.rebuild();
    let snapshot = snapshotId
      ? state.snapshots.find((entry) => entry.id === snapshotId)
      : state.snapshots.find((entry) => entry.state === "validated");
    if (!snapshot) {
      throw new GoalHarnessError("GOAL_LAND_NOT_READY", "No validated integration snapshot is ready to land.");
    }
    if ((typeof snapshot.state!=="string" || !["validated", "landed"].includes(snapshot.state)) || !snapshot.integration_commit) {
      throw new GoalHarnessError("GOAL_LAND_NOT_READY", `Snapshot ${snapshot.id} is not fully validated.`);
    }
    // Task membership is required only for an execution that projects authors;
    // sparse historical snapshot metadata remains readable for dry-run inspection.
    if (!dryRun && (!Array.isArray(snapshot.task_ids) || !snapshot.task_ids.every(id=>typeof id==="string" && state.tasks.some(task=>task.id===id)))) {
      throw new GoalHarnessError("GOAL_LAND_NOT_READY","Landing requires the snapshot's exact existing author task membership.");
    }
    const publications = listViewerPublications({ projectRoot: config.project_root });
    const activationSequence = publications[0]?.repository_sequence ?? 1;
    const validations = listCommittedRepositoryValidations({
      projectRoot: config.project_root,
      sourceVerificationFromSequence: activationSequence,
    });
    const snapshotSequence=snapshot.repository_sequence;
    const validation = validations.find((entry) => entry.repository_sequence === snapshotSequence);
    if (!validation || validation.goal_id !== config.goal_id || validation.harness_snapshot_id !== snapshot.id || validation.integration_commit !== snapshot.integration_commit) {
      throw new GoalHarnessError("GOAL_LAND_REPOSITORY_IDENTITY_INVALID", "Snapshot does not match committed repository validation truth.");
    }
    const publication = publications.find((entry: {repository_sequence:number;integration_commit:string;artifact_store:string;viewer_sequence:number}) => entry.repository_sequence === validation.repository_sequence);
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
    const landingJournal = reconcileRepositoryLandingJournal({ landingStateDir, landingHeadPath, dryRun });
    const hasLandingHead = existsSync(landingHeadPath);
    const landingHead:LandingHead = hasLandingHead
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
      if (dryRun) {
        return { status: "dry_run", snapshot, recovery_required: snapshot.state !== "landed" || landingJournal?.phase !== "projected",
          next_action: "Repeat goal:land without --dry-run to reconcile landing state and Viewer provenance." };
      }
      writeViewerLandingProvenance({ publication, landingState: "landed", landedAt: landingHead.landed_at });
      const repairedFingerprints = Object.fromEntries((landingJournal?.applied_paths ?? strings(snapshot.changed_files))
        .map((entry) => [entry, landingHead.path_fingerprints[entry]]));
      snapshot = projectLandedGoalState({ store, snapshot, pathFingerprints: readFileFingerprints(repairedFingerprints),
        landedAt:text(landingHead.landed_at),landingStatus:typeof snapshot.landing_status==="string"?snapshot.landing_status:"recovered_landing_head" });
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
      : strings(snapshot.changed_files);
    const firstValidation=validations[0];if(!firstValidation)throw new GoalHarnessError("GOAL_LAND_REPOSITORY_IDENTITY_INVALID","Repository validation history is missing.");
    const expectedFromBaseline = captureExpectedFilesFromCommitAllowMissing(config.project_root, firstValidation.expected_old_head, landingPaths);
    const expected = { ...expectedFromBaseline, ...(landingHead.path_fingerprints ?? {}), ...(field(snapshot.reconciliation,"expected_inputs")==null?{}:readFileFingerprints(field(snapshot.reconciliation,"expected_inputs"))) };
    if (snapshot.reconciliation) {
      assertReconciliationInputs({ projectRoot: config.project_root, expected: Object.fromEntries(Object.entries(readFileFingerprints(field(snapshot.reconciliation,"expected_inputs"))).filter(([file]) => !landingPaths.includes(file))) });
    }
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
    const selectedSnapshot=snapshot;
    const result = withPinnedLandingSource({
      projectRoot: config.project_root,
      validation,
      read(sourceRoot) {
        return landFilesCas({
          projectRoot: config.project_root,
          sourceRoot,
          sourceCommit: validation.integration_commit,
          paths: landingPaths,
          expected,
          stateDir,
          snapshotId: selectedSnapshot.id,
          dryRun,
        });
      },
    });
    if (dryRun) {
      return { ...result, snapshot, expected, next_action: "Review the CAS path set, then repeat goal:land without --dry-run." };
    }
    if(!landingTransaction)throw new GoalHarnessError("GOAL_LAND_JOURNAL_INVALID","Landing transaction is unavailable.");
    const pathFingerprints = captureExpectedFiles(config.project_root, landingPaths);
    completeRepositoryLandingHead({ landingStateDir, landingHeadPath, transaction: landingTransaction });
    faultInjector("after_repository_landing_head", landingTransaction);
    snapshot = projectLandedGoalState({ store, snapshot, pathFingerprints, landedAt: landingTransaction.landed_at, landingStatus: result.status });
    writeViewerLandingProvenance({ publication, landingState: "landed", landedAt: snapshot.landed_at });
    writeJsonDurable(path.join(landingStateDir, "journal.json"), { ...landingTransaction, phase: "projected" });
    return { status: result.status, snapshot, path_fingerprints: pathFingerprints, state: store.rebuild(), next_action: "Resume scheduling; author worktrees remain preserved until explicit audited cleanup." };
  }));
}

function projectLandedGoalState({store,snapshot,pathFingerprints,landedAt,landingStatus}:{store:GoalEventStore;snapshot:GoalSnapshot;pathFingerprints:FileFingerprintMap;landedAt:string;landingStatus:string}):GoalSnapshot {
  const taskIds=strings(snapshot.task_ids);
  const projected = { ...snapshot, state: "landed", landed_at: landedAt, landing_status: landingStatus };
  store.append({ event_id: `${snapshot.id}-landed`, type: "snapshot_replaced", payload: { snapshot: projected } });
  for (const taskId of taskIds) {
    const state = store.rebuild();
    let task = state.tasks.find((entry) => entry.id === taskId);
    if (!task)throw new GoalHarnessError("GOAL_LAND_NOT_READY",`Missing author task: ${taskId}`);
    if (task.state === "validated") {
      task = applyTaskTransition(task, { transition_id: `${snapshot.id}-${task.id}-completed`, to: "completed", at: landedAt });
      task = { ...task, landed_at: landedAt };
      store.append({ event_id: `${snapshot.id}-${task.id}-completed-result`, type: "task_replaced", payload: { task } });
    }
  }
  store.append({ event_id: `${snapshot.id}-landing-fingerprints`, type: "landing_completed", payload: { snapshot_id: snapshot.id, path_fingerprints: pathFingerprints } });
  const refreshed=store.rebuild().snapshots.find(entry=>entry.id===snapshot.id);
  if(!refreshed)throw new GoalHarnessError("GOAL_LAND_NOT_READY","Landed snapshot is missing from state.");
  return refreshed;
}

export function landFilesCas({ projectRoot, sourceRoot, sourceCommit = null, paths, expected, stateDir, snapshotId, dryRun = false }:LandFilesOptions):LandFilesResult {
  const normalized = [...new Set(paths.map((entry) => assertRepoPath(entry, { allowSensitive: true })))].sort();
  if (sourceCommit) {
    execFileSync("git", ["rev-parse", "--verify", `${sourceCommit}^{commit}`], { cwd: sourceRoot, stdio: "ignore" });
  }
  const sourceFingerprints = sourceCommit
    ? captureExpectedFilesFromCommitAllowMissing(sourceRoot, sourceCommit, normalized)
    : null;
  const operationDir = path.join(stateDir, "landings", snapshotId);
  const journalPath = path.join(operationDir, "journal.json");
  if (existsSync(journalPath)) {
    const journal=landingJournal(jsonRecord(readFileSync(journalPath,"utf8")));
    if (sourceFingerprints && normalized.some((repoPath) =>
      !sameFingerprint(journal.sources?.find((entry) => entry.repoPath === repoPath)?.fingerprint, fingerprintAt(sourceFingerprints,repoPath)))) {
      throw new GoalHarnessError("GOAL_LAND_SOURCE_INVALID", "Landing journal does not match the validated integration commit.");
    }
    if (journal.status === "landed") {
      return { status: "already_landed", snapshot_id: snapshotId, paths: journal.paths };
    }
    return recoverLandingJournal({ projectRoot, operationDir, journalPath, journal, normalized, snapshotId, dryRun });
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

  const sources:LandingSource[] = normalized.map((repoPath) => {
    const absolutePath = resolveRepoPath(sourceRoot, repoPath, { allowSensitive: true });
    if (sourceFingerprints) {
      return { repoPath, absolutePath, fingerprint: fingerprintAt(sourceFingerprints,repoPath) };
    }
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
      if (sourceCommit) {
        writeFileSync(staged, readCommitFile(sourceRoot, sourceCommit, source.repoPath));
      } else {
        copyFileSync(source.absolutePath, staged);
      }
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
      const source=sourceAt(sources,repoPath);
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
    throw new GoalHarnessError("GOAL_LAND_APPLY_FAILED", `Landing failed and requires journal recovery: ${errorMessage(error)}`, { journal_path: journalPath });
  }
  writeJson(journalPath, { schema_version: 1, snapshot_id: snapshotId, status: "landed", paths: normalized, expected, sources });
  return { status: "landed", snapshot_id: snapshotId, paths: normalized };
}

export function recoverLandingJournal({projectRoot,operationDir,journalPath,journal:input,normalized,snapshotId,dryRun=false}:{projectRoot:string;operationDir:string;journalPath:string;journal:unknown;normalized:string[];snapshotId:string;dryRun?:boolean}):LandFilesResult {
  const journal=landingJournal(input);
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
  if (dryRun) {
    return { status: "dry_run", snapshot_id: snapshotId, paths: normalized, sources:journal.sources ?? [], recovery_required: true };
  }
  writeJson(journalPath, { ...journal, status: "applying", recovered_at: new Date().toISOString() });
  for (const repoPath of normalized) {
    const destination = resolveRepoPath(projectRoot, repoPath, { allowSensitive: true });
    const staged = resolveRepoPath(path.join(operationDir, "stage"), repoPath, { allowSensitive: true });
    const source = sourceAt(journal.sources ?? [],repoPath);
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
    const expectedSource = sourceAt(journal.sources ?? [],repoPath).fingerprint;
    return sameFingerprint(actual, expectedSource) ? [] : [{ path: repoPath, expected: expectedSource, actual }];
  });
  if (verificationConflicts.length > 0) {
    throw new GoalHarnessError("GOAL_LAND_RECOVERY_VERIFY_FAILED", "Recovered landing did not match staged source fingerprints", { conflicts: verificationConflicts, journal_path: journalPath });
  }
  writeJson(journalPath, { ...journal, status: "landed", recovered_at: new Date().toISOString() });
  return { status: "recovered_landing", snapshot_id: snapshotId, paths: normalized };
}

function readCommitFile(root:string,commit:string,repoPath:string):Buffer {
  return execFileSync("git", ["show", `${commit}:${repoPath}`], {
    cwd: root,
    encoding: "buffer",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: GIT_BLOB_MAX_BUFFER,
  });
}

function fingerprint(absolutePath:string):FileFingerprint {
  if (!existsSync(absolutePath)) {
    return { kind: "missing", sha256: null, size: 0 };
  }
  const stat = lstatSync(absolutePath);
  if (!stat.isFile()) {
    return { kind: stat.isSymbolicLink() ? "symlink" : "other", sha256: null, size: stat.size };
  }
  return { kind: "file", sha256: createHash("sha256").update(readFileSync(absolutePath)).digest("hex"), size: stat.size };
}

function captureExpectedFilesFromCommitAllowMissing(root:string,commit:string,paths:readonly string[]):FileFingerprintMap {
  const result:FileFingerprintMap = {};
  for (const repoPath of paths) {
    try {
      Object.assign(result, captureExpectedFilesFromCommit(root, commit, [repoPath]));
    } catch (error) {
      if (field(error,"status") === 128 || field(error,"status") === 1) {
        result[repoPath] = { kind: "missing", sha256: null, size: 0 };
      } else {
        throw error;
      }
    }
  }
  return result;
}

function writeJson(filePath:string,value:unknown):void {
  const temporary = `${filePath}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" });
  renameSync(temporary, filePath);
}

function readLandingHead(filePath:string):LandingHead {
  let value:UnknownRecord;
  try { value = jsonRecord(readFileSync(filePath, "utf8")); } catch (error) {
    throw new GoalHarnessError("GOAL_LAND_HEAD_INVALID", "Repository landing head is unreadable.", { cause: errorMessage(error) });
  }
  if (value?.schema_version !== 1 || typeof value.repository_sequence!=="number" || !Number.isSafeInteger(value.repository_sequence) || value.repository_sequence < 1 ||
      !(typeof value.integration_commit==="string" && /^[a-f0-9]{40,64}$/u.test(value.integration_commit)) || !value.path_fingerprints || typeof value.path_fingerprints !== "object") {
    throw new GoalHarnessError("GOAL_LAND_HEAD_INVALID", "Repository landing head is malformed.");
  }
  return {...value,schema_version:1,repository_sequence:value.repository_sequence,integration_commit:text(value.integration_commit),path_fingerprints:readFileFingerprints(value.path_fingerprints),...(value.landed_at===undefined?{}:{landed_at:text(value.landed_at)})};
}

function prepareRepositoryLanding({landingStateDir,landingHeadPath,landingHead,validation,publication,pathFingerprints,appliedPaths}:{landingStateDir:string;landingHeadPath:string;landingHead:LandingHead;validation:CommittedRepositoryValidation;publication:UnknownRecord;pathFingerprints:FileFingerprintMap;appliedPaths:string[]}):RepositoryLandingTransaction {
  const journalPath = path.join(landingStateDir, "journal.json");
  const currentBytes = existsSync(landingHeadPath) ? readFileSync(landingHeadPath) : null;
  const nextHead:LandingHead = {
    schema_version: 1,
    repository_sequence: validation.repository_sequence,
    integration_commit: validation.integration_commit,
    goal_id: validation.goal_id,
    harness_snapshot_id: validation.harness_snapshot_id,
    viewer_manifest_ref: publication.manifest_ref,
    landed_at: new Date().toISOString(),
    path_fingerprints: { ...(landingHead.path_fingerprints ?? {}), ...pathFingerprints },
  };
  const prepared:RepositoryLandingTransaction = {
    schema_version: 1,
    phase: "prepared",
    repository_sequence: validation.repository_sequence,
    integration_commit: validation.integration_commit,
    expected_old_head_base64: currentBytes?.toString("base64") ?? null,
    expected_old_head_sha256: currentBytes ? createHash("sha256").update(currentBytes).digest("hex") : null,
    next_head: nextHead,
    next_head_sha256: createHash("sha256").update(jsonBytes(nextHead)).digest("hex"),
    landed_at: text(nextHead.landed_at),
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

function completeRepositoryLandingHead({landingStateDir,landingHeadPath,transaction}:{landingStateDir:string;landingHeadPath:string;transaction:RepositoryLandingTransaction}) {
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

function reconcileRepositoryLandingJournal({landingStateDir,landingHeadPath,dryRun=false}:{landingStateDir:string;landingHeadPath:string;dryRun?:boolean}):RepositoryLandingTransaction|null {
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
    if (matchesNew && !dryRun) writeJsonDurable(journalPath, { ...transaction, phase: "head_committed" });
  } else if (!matchesNew) {
    throw new GoalHarnessError("GOAL_LAND_HEAD_CAS_CONFLICT", "Committed repository landing head no longer matches its journal.");
  }
  return transaction;
}

function readRepositoryLandingJournal(journalPath:string):RepositoryLandingTransaction {
  let value:UnknownRecord;
  try { value=jsonRecord(readFileSync(journalPath,"utf8")); } catch (error) {
    throw new GoalHarnessError("GOAL_LAND_JOURNAL_INVALID", "Repository landing journal is unreadable.", { cause: errorMessage(error) });
  }
  if (value?.schema_version !== 1 || (typeof value.phase!=="string" || !["prepared", "head_committed", "projected"].includes(value.phase)) ||
      typeof value.repository_sequence!=="number" || !Number.isSafeInteger(value.repository_sequence) || value.repository_sequence < 1 ||
      !(typeof value.integration_commit==="string" && /^[a-f0-9]{40,64}$/u.test(value.integration_commit)) ||
      (value.expected_old_head_base64 !== null && typeof value.expected_old_head_base64 !== "string") ||
      (value.expected_old_head_sha256 !== null && !(typeof value.expected_old_head_sha256==="string" && /^[a-f0-9]{64}$/u.test(value.expected_old_head_sha256))) ||
      !(typeof value.next_head_sha256==="string" && /^[a-f0-9]{64}$/u.test(value.next_head_sha256)) || !isRecord(value.next_head) ||
      value.next_head.schema_version !== 1 || value.next_head.repository_sequence !== value.repository_sequence ||
      value.next_head.integration_commit !== value.integration_commit ||
      typeof value.next_head.goal_id !== "string" || typeof value.next_head.harness_snapshot_id !== "string" ||
      !(typeof value.next_head.viewer_manifest_ref==="string" && /^sha256:[a-f0-9]{64}$/u.test(value.next_head.viewer_manifest_ref)) ||
      !Number.isFinite(Date.parse(typeof value.next_head.landed_at==="string"?value.next_head.landed_at:"")) || value.next_head.landed_at !== value.landed_at ||
      !value.next_head.path_fingerprints || typeof value.next_head.path_fingerprints !== "object" ||
      !Array.isArray(value.applied_paths) || value.applied_paths.some((entry) => typeof entry !== "string")) {
    throw new GoalHarnessError("GOAL_LAND_JOURNAL_INVALID", "Repository landing journal is malformed.");
  }
  return {...value,schema_version:1,phase:text(value.phase),repository_sequence:value.repository_sequence,integration_commit:text(value.integration_commit),expected_old_head_base64:value.expected_old_head_base64===null?null:text(value.expected_old_head_base64),expected_old_head_sha256:value.expected_old_head_sha256===null?null:text(value.expected_old_head_sha256),next_head:{...value.next_head,schema_version:1,repository_sequence:value.repository_sequence,integration_commit:text(value.integration_commit),path_fingerprints:readFileFingerprints(value.next_head.path_fingerprints),landed_at:text(value.next_head.landed_at)},next_head_sha256:text(value.next_head_sha256),landed_at:text(value.landed_at),applied_paths:strings(value.applied_paths)};
}

function markRepositoryLandingProjected({landingStateDir,validation}:{landingStateDir:string;validation:CommittedRepositoryValidation}) {
  const journalPath = path.join(landingStateDir, "journal.json");
  if (!existsSync(journalPath)) return;
  const transaction = readRepositoryLandingJournal(journalPath);
  if (transaction.repository_sequence === validation.repository_sequence && transaction.integration_commit === validation.integration_commit && transaction.phase !== "projected") {
    writeJsonDurable(journalPath, { ...transaction, phase: "projected" });
  }
}

function jsonBytes(value:unknown):Buffer {
  return Buffer.from(`${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function writeJsonDurable(filePath:string,value:unknown) {
  const temporary = `${filePath}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, jsonBytes(value), { flag: "wx", mode: 0o600 });
  const descriptor = openSync(temporary, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
  renameSync(temporary, filePath);
  const directory = openSync(path.dirname(filePath), "r");
  try { fsyncSync(directory); } finally { closeSync(directory); }
}

function withPinnedLandingSource<T>({projectRoot,validation,read}:{projectRoot:string;validation:CommittedRepositoryValidation;read:(root:string)=>T}):T {
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

function verifyPinnedLandingSource(projectRoot:string,validation:CommittedRepositoryValidation) {
  const refCommit = execFileSync("git", ["rev-parse", "--verify", `${validation.source_ref}^{commit}`], { cwd: projectRoot, encoding: "utf8" }).trim();
  const tree = execFileSync("git", ["rev-parse", "--verify", `${validation.integration_commit}^{tree}`], { cwd: projectRoot, encoding: "utf8" }).trim();
  if (refCommit !== validation.integration_commit || tree !== validation.tree_hash) {
    throw new GoalHarnessError("GOAL_LAND_SOURCE_REF_CONFLICT", "Pinned landing source ref or tree differs from repository validation truth.");
  }
}

function assertDetachedLandingSource(sourceRoot:string,validation:CommittedRepositoryValidation) {
  const head = execFileSync("git", ["rev-parse", "--verify", "HEAD^{commit}"], { cwd: sourceRoot, encoding: "utf8" }).trim();
  const tree = execFileSync("git", ["rev-parse", "--verify", "HEAD^{tree}"], { cwd: sourceRoot, encoding: "utf8" }).trim();
  const status = execFileSync("git", ["status", "--porcelain=v1", "--untracked-files=all"], { cwd: sourceRoot, encoding: "utf8" }).trim();
  if (head !== validation.integration_commit || tree !== validation.tree_hash || status !== "") {
    throw new GoalHarnessError("GOAL_LAND_SOURCE_INVALID", "Detached landing source does not match the pinned integration commit and tree.");
  }
}

function captureActivationLandingPaths({config,validations,validation}:{config:LandingConfig;validations:CommittedRepositoryValidation[];validation:CommittedRepositoryValidation}):string[] {
  const first=validations[0];if(!first)throw new GoalHarnessError("GOAL_LAND_REPOSITORY_IDENTITY_INVALID","Validation history is missing.");
  const baseline=first.expected_old_head;
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
    : validations.flatMap((entry) => strings(entry.goal_projection?.changed_files ?? [])).map((entry) => assertRepoPath(entry, { allowSensitive: true }));
  const unauthorized = paths.filter((entry) => !allowedRoots.some((root) => entry === root || entry.startsWith(`${root}/`)));
  if (unauthorized.length > 0) {
    throw new GoalHarnessError("GOAL_LAND_ACTIVATION_SCOPE_INVALID", "Activation landing includes paths outside the configured repository roots.", { unauthorized, allowed_roots: allowedRoots });
  }
  return paths;
}

function sameFingerprint(left:unknown,right:unknown):boolean {
  return Boolean(left && right && field(left,"kind")===field(right,"kind") && field(left,"sha256")===field(right,"sha256") && field(left,"size")===field(right,"size"));
}

function stableJson(value:unknown):string|undefined {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(field(value,key))}`).join(",")}}`;
  return JSON.stringify(value);
}
