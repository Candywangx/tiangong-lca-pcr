import { createHash } from "node:crypto";
import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fsyncSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  readlinkSync,
  realpathSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
  writeSync,
} from "node:fs";
import path from "node:path";

export const VIEWER_DEPLOYMENT_MARKER = ".tiangong-pcr-viewer-build";
const GENERATIONS_DIRECTORY = ".generations";
const CURRENT_POINTER = "current";
const GENERATION_NAME = /^[a-f0-9]{64}$/u;
const DEFAULT_STALE_LOCK_MS = 5 * 60 * 1000;

export class ViewerDeploymentError extends Error {
  constructor(code, message, options = {}) {
    super(message, options);
    this.name = "ViewerDeploymentError";
    this.code = code;
  }
}

/** Install an immutable generation, then expose it by replacing one small symlink. */
export function commitViewerDeployment({
  stageDir,
  outDir,
  failurePhase = null,
  forceStaleLock = false,
  staleLockMs = DEFAULT_STALE_LOCK_MS,
  onPhase = null,
  beforePointerCommit = null,
} = {}) {
  const target = path.resolve(requiredPath(outDir, "deployment output"));
  const stage = path.resolve(requiredPath(stageDir, "deployment stage"));
  const parent = path.dirname(target);
  if (path.dirname(stage) !== parent || stage === target) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_STAGE_INVALID", "Viewer deployment stage must be a distinct sibling of the output directory.");
  }
  assertOwnedDirectory(stage, "Viewer deployment stage");
  assertSafeTree(stage, "Viewer deployment stage");
  const lease = acquireDeploymentLock({ target, forceStaleLock, staleLockMs, onPhase });
  try {
    recoverViewerDeploymentLocked({ target, lease });
    ensureStableRoot(target);
    const generationName = directoryDigest(stage);
    const generation = path.join(target, GENERATIONS_DIRECTORY, generationName);
    const pointerTempName = `.current-${process.pid}-${Date.now()}`;
    const journalPath = deploymentJournalPath(target);
    let journal = {
      schema_version: 2,
      kind: "viewer-deployment-journal",
      phase: "generation_prepared",
      output_name: path.basename(target),
      stage_name: path.basename(stage),
      generation_name: generationName,
      pointer_temp_name: pointerTempName,
    };
    assertDeploymentLockOwned(target, lease);
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);
    notifyPhase(onPhase, journal.phase);
    assertDeploymentLockOwned(target, lease);

    installGeneration({ stage, generation, generationName });
    journal = { ...journal, phase: "generation_installed" };
    assertDeploymentLockOwned(target, lease);
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);
    notifyPhase(onPhase, journal.phase);
    assertDeploymentLockOwned(target, lease);

    preparePointer({ target, pointerTempName, generationName });
    journal = { ...journal, phase: "pointer_prepared" };
    assertDeploymentLockOwned(target, lease);
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);
    notifyPhase(onPhase, journal.phase);
    assertDeploymentLockOwned(target, lease);
    if (beforePointerCommit) {
      try {
        beforePointerCommit();
      } catch (error) {
        abortBeforePointerCommit({ target, journalPath, pointerTempName, lease });
        throw error;
      }
    }
    assertDeploymentLockOwned(target, lease);

    commitPointer({ target, pointerTempName, generationName });
    journal = { ...journal, phase: "pointer_committed" };
    assertDeploymentLockOwned(target, lease);
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);
    notifyPhase(onPhase, journal.phase);
    assertDeploymentLockOwned(target, lease);

    finishDeployment({ target, journalPath, pointerTempName, generationName });
    return Object.freeze({ committed: true, recovered: false, generation: generationName });
  } catch (error) {
    if (error?.code !== "VIEWER_DEPLOYMENT_INTERRUPTED") {
      try { recoverViewerDeploymentLocked({ target, lease }); } catch { /* keep the original error and journal */ }
    }
    throw error;
  } finally {
    releaseDeploymentLock(target, lease, onPhase);
  }
}

export function recoverViewerDeployment({
  outDir,
  forceStaleLock = false,
  staleLockMs = DEFAULT_STALE_LOCK_MS,
} = {}) {
  const target = path.resolve(requiredPath(outDir, "deployment output"));
  const journalPath = deploymentJournalPath(target);
  if (!existsSync(journalPath)) return Object.freeze({ recovered: false });
  const lease = acquireDeploymentLock({ target, forceStaleLock, staleLockMs });
  try {
    return recoverViewerDeploymentLocked({ target, lease });
  } finally {
    releaseDeploymentLock(target, lease);
  }
}

function recoverViewerDeploymentLocked({ target, lease }) {
  const journalPath = deploymentJournalPath(target);
  if (!existsSync(journalPath)) return Object.freeze({ recovered: false });
  assertDeploymentLockOwned(target, lease);
  assertRegularFile(journalPath, "Viewer deployment journal");
  const journal = JSON.parse(readFileSync(journalPath, "utf8"));
  validateJournal(journal, target);
  ensureStableRoot(target);

  const stage = path.join(path.dirname(target), journal.stage_name);
  const generation = path.join(target, GENERATIONS_DIRECTORY, journal.generation_name);
  if (journal.phase === "generation_prepared") {
    assertDeploymentLockOwned(target, lease);
    installGeneration({ stage, generation, generationName: journal.generation_name });
  } else {
    assertGeneration(generation, journal.generation_name);
    if (existsSync(stage)) removeMatchingStage(stage, generation);
  }
  assertDeploymentLockOwned(target, lease);
  preparePointer({ target, pointerTempName: journal.pointer_temp_name, generationName: journal.generation_name });
  assertDeploymentLockOwned(target, lease);
  commitPointer({ target, pointerTempName: journal.pointer_temp_name, generationName: journal.generation_name });
  assertDeploymentLockOwned(target, lease);
  finishDeployment({ target, journalPath, pointerTempName: journal.pointer_temp_name, generationName: journal.generation_name });
  return Object.freeze({ recovered: true, phase: journal.phase, generation: journal.generation_name });
}

/** Resolve and pin the immutable generation used for one read/request. */
export function resolveViewerDeploymentGeneration(outDir) {
  const target = path.resolve(requiredPath(outDir, "deployment output"));
  if (!existsSync(target)) return target;
  const stat = lstatSync(target);
  if (stat.isSymbolicLink() || !stat.isDirectory()) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", "Viewer deployment output must be a real directory.");
  }
  const pointer = path.join(target, CURRENT_POINTER);
  let pointerStat;
  try {
    pointerStat = lstatSync(pointer);
  } catch (error) {
    if (error?.code === "ENOENT") return realpathSync(target);
    throw error;
  }
  if (!pointerStat.isSymbolicLink()) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment current pointer must be a symbolic link.");
  }
  const relativeTarget = readlinkSync(pointer);
  const match = /^\.generations\/([a-f0-9]{64})$/u.exec(relativeTarget);
  if (!match) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment current pointer has an unsafe target.");
  }
  // Resolve the path named by the readlink result, not `current` again. If a
  // publisher flips the pointer now, this request remains pinned to the old
  // immutable generation.
  const generation = realpathSync(path.resolve(target, relativeTarget));
  const generationsRoot = realpathSync(path.join(target, GENERATIONS_DIRECTORY));
  if (!isInsideOrEqual(generationsRoot, generation) || path.basename(generation) !== match[1]) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment current pointer escapes its generation store.");
  }
  assertOwnedDirectory(generation, "Viewer deployment generation");
  return generation;
}

function ensureStableRoot(target) {
  if (!existsSync(target)) mkdirSync(target);
  const stat = lstatSync(target);
  if (stat.isSymbolicLink() || !stat.isDirectory()) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", "Viewer deployment output must be a real directory.");
  }
  const marker = path.join(target, VIEWER_DEPLOYMENT_MARKER);
  if (!existsSync(marker)) {
    if (readdirSync(target).length !== 0) {
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", "Viewer deployment output is not owned by the Viewer builder.");
    }
    writeFileSync(marker, "Stable PCR Viewer deployment root.\n", { flag: "wx" });
    fsyncFile(marker);
  } else {
    assertRegularFile(marker, "Viewer deployment output marker");
  }
  const generations = path.join(target, GENERATIONS_DIRECTORY);
  if (!existsSync(generations)) mkdirSync(generations);
  const generationsStat = lstatSync(generations);
  if (generationsStat.isSymbolicLink() || !generationsStat.isDirectory()) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", "Viewer deployment generations path must be a real directory.");
  }
  fsyncDirectory(target);
}

function installGeneration({ stage, generation, generationName }) {
  if (existsSync(generation)) {
    assertGeneration(generation, generationName);
    if (existsSync(stage)) removeMatchingStage(stage, generation);
    return;
  }
  assertOwnedDirectory(stage, "Viewer deployment stage");
  if (directoryDigest(stage) !== generationName) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_STAGE_CHANGED", "Viewer deployment stage changed after its journal was written.");
  }
  renameSync(stage, generation);
  fsyncDirectory(path.dirname(generation));
  assertGeneration(generation, generationName);
}

function removeMatchingStage(stage, generation) {
  assertOwnedDirectory(stage, "Viewer deployment stage");
  assertSafeTree(stage, "Viewer deployment stage");
  const expected = path.basename(generation);
  if (directoryDigest(stage) !== expected || directoryDigest(generation) !== expected) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_GENERATION_CONFLICT", "An immutable Viewer generation has conflicting bytes.");
  }
  rmSync(stage, { recursive: true });
}

function assertGeneration(generation, generationName) {
  if (!GENERATION_NAME.test(generationName)) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_GENERATION_INVALID", "Viewer deployment generation identity is invalid.");
  }
  assertOwnedDirectory(generation, "Viewer deployment generation");
  assertSafeTree(generation, "Viewer deployment generation");
  if (directoryDigest(generation) !== generationName) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_GENERATION_CONFLICT", "An immutable Viewer generation was substituted.");
  }
}

function preparePointer({ target, pointerTempName, generationName }) {
  const pointerTemp = path.join(target, pointerTempName);
  const relativeTarget = `${GENERATIONS_DIRECTORY}/${generationName}`;
  if (existsSync(pointerTemp)) {
    const stat = lstatSync(pointerTemp);
    if (!stat.isSymbolicLink() || readlinkSync(pointerTemp) !== relativeTarget) {
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment temporary pointer was substituted.");
    }
    return;
  }
  symlinkSync(relativeTarget, pointerTemp);
  fsyncDirectory(target);
}

function commitPointer({ target, pointerTempName, generationName }) {
  const pointer = path.join(target, CURRENT_POINTER);
  if (pointerTargets(pointer, generationName)) {
    const pointerTemp = path.join(target, pointerTempName);
    if (existsSync(pointerTemp)) rmSync(pointerTemp);
    return;
  }
  const pointerTemp = path.join(target, pointerTempName);
  const tempStat = lstatSync(pointerTemp);
  if (!tempStat.isSymbolicLink() || readlinkSync(pointerTemp) !== `${GENERATIONS_DIRECTORY}/${generationName}`) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment temporary pointer was substituted.");
  }
  if (existsSync(pointer) && !lstatSync(pointer).isSymbolicLink()) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment current pointer is not replaceable.");
  }
  renameSync(pointerTemp, pointer);
  fsyncDirectory(target);
  if (!pointerTargets(pointer, generationName)) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment current pointer did not commit exactly.");
  }
}

function finishDeployment({ target, journalPath, pointerTempName, generationName }) {
  const generation = path.join(target, GENERATIONS_DIRECTORY, generationName);
  assertGeneration(generation, generationName);
  if (!pointerTargets(path.join(target, CURRENT_POINTER), generationName)) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_POINTER_INVALID", "Viewer deployment recovery did not select the journaled generation.");
  }
  const pointerTemp = path.join(target, pointerTempName);
  if (existsSync(pointerTemp)) rmSync(pointerTemp);
  for (const entry of readdirSync(target)) {
    if ([VIEWER_DEPLOYMENT_MARKER, GENERATIONS_DIRECTORY, CURRENT_POINTER].includes(entry)) continue;
    rmSync(path.join(target, entry), { recursive: true, force: true });
  }
  rmSync(journalPath);
  fsyncDirectory(path.dirname(journalPath));
  fsyncDirectory(target);
}

function pointerTargets(pointer, generationName) {
  try {
    return lstatSync(pointer).isSymbolicLink() && readlinkSync(pointer) === `${GENERATIONS_DIRECTORY}/${generationName}`;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

function validateJournal(journal, target) {
  const keys = Object.keys(journal ?? {}).sort();
  const expected = ["generation_name", "kind", "output_name", "phase", "pointer_temp_name", "schema_version", "stage_name"].sort();
  if (
    JSON.stringify(keys) !== JSON.stringify(expected) ||
    journal.schema_version !== 2 ||
    journal.kind !== "viewer-deployment-journal" ||
    journal.output_name !== path.basename(target) ||
    !["generation_prepared", "generation_installed", "pointer_prepared", "pointer_committed"].includes(journal.phase) ||
    !GENERATION_NAME.test(journal.generation_name) ||
    !safeSiblingName(journal.stage_name) ||
    !new RegExp(`^\\.${escapeRegExp(journal.output_name)}-(?:build|mirror)-`, "u").test(journal.stage_name) ||
    !/^\.current-[0-9]+-[0-9]+$/u.test(journal.pointer_temp_name)
  ) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_JOURNAL_INVALID", "Viewer deployment journal is invalid or targets another output.");
  }
}

function writeJournal(journalPath, journal) {
  const parent = path.dirname(journalPath);
  mkdirSync(parent, { recursive: true });
  const stage = path.join(parent, `.${path.basename(journalPath)}-${process.pid}-${Date.now()}`);
  const descriptor = openSync(stage, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
  try {
    writeSync(descriptor, Buffer.from(`${JSON.stringify(journal)}\n`, "utf8"));
    fsyncSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
  renameSync(stage, journalPath);
  fsyncDirectory(parent);
}

function deploymentJournalPath(outDir) {
  return path.join(path.dirname(outDir), `.${path.basename(outDir)}-deployment-journal.json`);
}

function deploymentLockPath(outDir) {
  return path.join(path.dirname(outDir), `.${path.basename(outDir)}-deployment.lock.json`);
}

function acquireDeploymentLock({ target, forceStaleLock, staleLockMs, onPhase = null }) {
  if (!Number.isFinite(staleLockMs) || staleLockMs < 0) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCK_OPTION_INVALID", "Viewer deployment stale-lock age must be a non-negative finite number.");
  }
  const lockPath = deploymentLockPath(target);
  const parent = path.dirname(lockPath);
  mkdirSync(parent, { recursive: true });
  const owner = {
    schema_version: 1,
    kind: "viewer-deployment-lock",
    pid: process.pid,
    created_at: new Date().toISOString(),
    owner_token: `${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  };
  const payload = Buffer.from(`${JSON.stringify(owner)}\n`, "utf8");
  if (installDeploymentLock(lockPath, payload, owner.owner_token)) return payload;

  const { bytes: existingBytes, owner: existing, storage } = readDeploymentLock(lockPath);
  const age = Date.now() - Date.parse(existing.created_at);
  if (
    !forceStaleLock ||
    processAlive(existing.pid) ||
    !Number.isFinite(age) ||
    age < staleLockMs
  ) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCKED", "Viewer deployment lock is owned by another live or unconfirmed writer.");
  }
  notifyPhase(onPhase, "stale_lock_validated");
  retireStaleDeploymentLock(lockPath, existingBytes, storage);
  if (installDeploymentLock(lockPath, payload, owner.owner_token)) return payload;
  throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCKED", "Another writer acquired the Viewer deployment lock during stale-owner recovery.");
}

function assertDeploymentLockOwned(target, lease) {
  const lockPath = deploymentLockPath(target);
  let actual;
  try {
    actual = readDeploymentLock(lockPath).bytes;
  } catch (error) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCK_OWNERSHIP_LOST", "Viewer deployment lock disappeared or became unsafe.", { cause: error });
  }
  if (!actual.equals(lease)) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCK_OWNERSHIP_LOST", "Viewer deployment lock owner token was substituted.");
  }
}

function releaseDeploymentLock(target, lease, onPhase = null) {
  assertDeploymentLockOwned(target, lease);
  const lockPath = deploymentLockPath(target);
  notifyPhase(onPhase, "deployment_lock_release_checked");
  const releasedPath = `${lockPath}.released-${lockLeaseDigest(lease)}`;
  retireDeploymentLockDirectory({ lockPath, retiredPath: releasedPath, expectedLease: lease });
  rmSync(releasedPath, { recursive: true });
  fsyncDirectory(path.dirname(releasedPath));
}

function installDeploymentLock(lockPath, payload, ownerToken) {
  const parent = path.dirname(lockPath);
  const candidate = `${lockPath}.candidate-${ownerToken}`;
  mkdirSync(candidate);
  try {
    const ownerPath = path.join(candidate, "owner.json");
    const descriptor = openSync(ownerPath, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
    try {
      writeSync(descriptor, payload);
      fsyncSync(descriptor);
    } finally {
      closeSync(descriptor);
    }
    fsyncDirectory(candidate);
    if (existsSync(lockPath)) return false;
    try {
      renameSync(candidate, lockPath);
    } catch (error) {
      if (["EEXIST", "ENOTEMPTY", "ENOTDIR"].includes(error?.code)) return false;
      throw error;
    }
    fsyncDirectory(parent);
    return true;
  } finally {
    if (existsSync(candidate)) rmSync(candidate, { recursive: true });
  }
}

function readDeploymentLock(lockPath) {
  let stat;
  try {
    stat = lstatSync(lockPath);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCKED", "Viewer deployment lock changed while its owner was being checked.", { cause: error });
    }
    throw error;
  }
  if (stat.isSymbolicLink() || (!stat.isDirectory() && !stat.isFile())) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCK_INVALID", "Viewer deployment lock must be an owned directory or legacy regular file.");
  }
  const storage = stat.isDirectory() ? "directory" : "legacy-file";
  if (storage === "directory") {
    const entries = readdirSync(lockPath);
    if (entries.length !== 1 || entries[0] !== "owner.json") {
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCK_INVALID", "Viewer deployment lock directory has an untrusted shape.");
    }
  }
  const ownerPath = storage === "directory" ? path.join(lockPath, "owner.json") : lockPath;
  assertRegularFile(ownerPath, "Viewer deployment lock owner");
  const bytes = readFileSync(ownerPath);
  let owner;
  try {
    owner = JSON.parse(bytes.toString("utf8"));
  } catch (error) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCK_INVALID", "Viewer deployment lock is not trusted JSON.", { cause: error });
  }
  const keys = Object.keys(owner ?? {}).sort();
  if (
    JSON.stringify(keys) !== JSON.stringify(["created_at", "kind", "owner_token", "pid", "schema_version"].sort()) ||
    owner.schema_version !== 1 ||
    owner.kind !== "viewer-deployment-lock" ||
    !Number.isInteger(owner.pid) || owner.pid < 1 ||
    typeof owner.owner_token !== "string" || !/^[a-zA-Z0-9-]+$/u.test(owner.owner_token) ||
    typeof owner.created_at !== "string"
  ) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCK_INVALID", "Viewer deployment lock has an untrusted owner record.");
  }
  return { bytes, owner, storage };
}

function retireStaleDeploymentLock(lockPath, expectedLease, storage) {
  const retiredPath = `${lockPath}.retired-${lockLeaseDigest(expectedLease)}`;
  try {
    if (storage === "legacy-file") {
      retireLegacyDeploymentLockFile({ lockPath, retiredPath, expectedLease });
    } else {
      retireDeploymentLockDirectory({ lockPath, retiredPath, expectedLease });
    }
  } catch (error) {
    if (["EEXIST", "ENOENT", "ENOTEMPTY"].includes(error?.code)) {
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCKED", "Another writer already retired or replaced the stale Viewer deployment lock.", { cause: error });
    }
    throw error;
  }
  // Retain the stale owner's directory as a durable breaker. A delayed force
  // contender that validated the same lease cannot rename a replacement live
  // lock over this non-empty directory.
  fsyncDirectory(path.dirname(retiredPath));
}

function retireLegacyDeploymentLockFile({ lockPath, retiredPath, expectedLease }) {
  mkdirSync(retiredPath);
  const retiredOwnerPath = path.join(retiredPath, "owner.json");
  try {
    renameSync(lockPath, retiredOwnerPath);
    const actual = readFileSync(retiredOwnerPath);
    if (!actual.equals(expectedLease)) {
      if (!existsSync(lockPath)) renameSync(retiredOwnerPath, lockPath);
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCK_OWNERSHIP_LOST", "Legacy Viewer deployment lock owner was replaced before atomic retirement.");
    }
  } catch (error) {
    if (existsSync(retiredPath) && readdirSync(retiredPath).length === 0) rmSync(retiredPath, { recursive: true });
    throw error;
  }
}

function retireDeploymentLockDirectory({ lockPath, retiredPath, expectedLease }) {
  renameSync(lockPath, retiredPath);
  let actual;
  try {
    actual = readDeploymentLock(retiredPath).bytes;
  } catch (error) {
    restoreRetiredDeploymentLock({ lockPath, retiredPath });
    throw error;
  }
  if (!actual.equals(expectedLease)) {
    restoreRetiredDeploymentLock({ lockPath, retiredPath });
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_LOCK_OWNERSHIP_LOST", "Viewer deployment lock owner was replaced before atomic retirement.");
  }
}

function restoreRetiredDeploymentLock({ lockPath, retiredPath }) {
  if (existsSync(lockPath)) return;
  try {
    renameSync(retiredPath, lockPath);
    fsyncDirectory(path.dirname(lockPath));
  } catch (error) {
    if (!["EEXIST", "ENOTEMPTY"].includes(error?.code)) throw error;
  }
}

function lockLeaseDigest(lease) {
  return createHash("sha256").update(lease).digest("hex");
}

function abortBeforePointerCommit({ target, journalPath, pointerTempName, lease }) {
  assertDeploymentLockOwned(target, lease);
  const pointerTemp = path.join(target, pointerTempName);
  if (existsSync(pointerTemp)) rmSync(pointerTemp);
  rmSync(journalPath);
  fsyncDirectory(target);
  fsyncDirectory(path.dirname(journalPath));
}

function processAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return error?.code === "EPERM";
  }
}

function notifyPhase(onPhase, phase) {
  if (onPhase === null || onPhase === undefined) return;
  if (typeof onPhase !== "function") {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_HOOK_INVALID", "Viewer deployment phase observer must be a function.");
  }
  onPhase(phase);
}

function assertOwnedDirectory(directory, label) {
  const stat = lstatSync(directory);
  if (stat.isSymbolicLink() || !stat.isDirectory()) throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", `${label} must be a real directory.`);
  assertRegularFile(path.join(directory, VIEWER_DEPLOYMENT_MARKER), `${label} marker`);
}

function assertSafeTree(directory, label) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    const stat = lstatSync(target);
    if (stat.isSymbolicLink() || (!stat.isDirectory() && !stat.isFile())) {
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", `${label} contains an unsafe path.`);
    }
    if (stat.isDirectory()) assertSafeTree(target, label);
  }
}

function directoryDigest(directory) {
  const hash = createHash("sha256");
  for (const relativePath of listFiles(directory).sort()) {
    hash.update(relativePath, "utf8");
    hash.update("\0");
    hash.update(readFileSync(path.join(directory, ...relativePath.split("/"))));
    hash.update("\0");
  }
  return hash.digest("hex");
}

function listFiles(directory, prefix = "") {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) return listFiles(path.join(directory, entry.name), relativePath);
    if (!entry.isFile()) throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", "Viewer deployment tree contains an unsafe path.");
    return [relativePath];
  });
}

function assertRegularFile(filePath, label) {
  const stat = lstatSync(filePath);
  if (stat.isSymbolicLink() || !stat.isFile()) throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", `${label} must be a regular file.`);
}

function safeSiblingName(value) {
  return typeof value === "string" && value.length > 1 && path.basename(value) === value && value !== "." && value !== "..";
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

function requiredPath(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_REQUIRED", `${label} path is required.`);
  return value;
}

function isInsideOrEqual(root, candidate) {
  const relative = path.relative(root, candidate);
  return relative === "" || (relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative));
}

function fsyncFile(filePath) {
  const descriptor = openSync(filePath, fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW);
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function fsyncDirectory(directory) {
  const descriptor = openSync(directory, fsConstants.O_RDONLY | fsConstants.O_DIRECTORY | fsConstants.O_NOFOLLOW);
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function interrupt(requested, phase) {
  if (requested === phase) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_INTERRUPTED", `Viewer deployment interrupted at ${phase}.`);
  }
}
