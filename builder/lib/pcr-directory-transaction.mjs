import {
  chmodSync,
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  realpathSync,
  renameSync,
  rmSync,
  rmdirSync,
  writeFileSync,
} from "node:fs";
import { createHash, randomUUID } from "node:crypto";
import os from "node:os";
import path from "node:path";

import {
  repoRelativePcrPath,
  resolvePcrLocationForRecovery,
  resolvePcrWorkspacePaths,
} from "./pcr-paths.mjs";

export const PCR_TRANSACTION_PHASES = Object.freeze([
  "prepared",
  "current_moved",
  "new_installed",
  "committed",
]);

const STATE_SCHEMA_VERSION = 1;
const DIGEST_PATTERN = /^[0-9a-f]{64}$/u;
const JOURNAL_TEMP_PATTERN = /^\.journal\.json\.\d+\.[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\.tmp$/u;

export class PcrDirectoryTransactionError extends Error {
  constructor(code, message, options = {}) {
    super(message, options);
    this.name = "PcrDirectoryTransactionError";
    this.code = code;
  }
}

function transactionError(code, message, options) {
  return new PcrDirectoryTransactionError(code, message, options);
}

function recoverHint(relativePcrPath) {
  return [
    "Use the explicit PCR directory recovery operation before retrying.",
    `Recovery target: library/pcrs/${relativePcrPath}`,
  ].join(" ");
}

function requirePlainDirectory(target, label) {
  const entry = lstatSync(target);
  if (entry.isSymbolicLink()) {
    throw transactionError("PCR_TRANSACTION_SYMLINK", `${label} must not be a symbolic link: ${target}`);
  }
  if (!entry.isDirectory()) {
    throw transactionError("PCR_TRANSACTION_NOT_DIRECTORY", `${label} must be a directory: ${target}`);
  }
  return entry;
}

function requirePlainFile(target, label) {
  const entry = lstatSync(target);
  if (entry.isSymbolicLink()) {
    throw transactionError("PCR_TRANSACTION_SYMLINK", `${label} must not be a symbolic link: ${target}`);
  }
  if (!entry.isFile()) {
    throw transactionError("PCR_TRANSACTION_NOT_FILE", `${label} must be a regular file: ${target}`);
  }
  return entry;
}

function readPlainFileBytes(target, label) {
  requirePlainFile(target, label);
  const descriptor = openSync(
    target,
    fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0),
  );
  try {
    if (!fstatSync(descriptor).isFile()) {
      throw transactionError(
        "PCR_TRANSACTION_NOT_FILE",
        `${label} must remain a regular file while it is read: ${target}`,
      );
    }
    return readFileSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
}

function assertStateDirectorySafe(target, label) {
  if (!existsSync(target)) {
    return;
  }
  requirePlainDirectory(target, label);
}

function treeEntries(root) {
  requirePlainDirectory(root, "PCR tree");
  const entries = [];

  function visit(directory, relativeDirectory) {
    const names = readdirSync(directory).sort((left, right) =>
      Buffer.compare(Buffer.from(left, "utf8"), Buffer.from(right, "utf8")),
    );
    for (const name of names) {
      const absolutePath = path.join(directory, name);
      const relativePath = relativeDirectory ? `${relativeDirectory}/${name}` : name;
      const entry = lstatSync(absolutePath);
      if (entry.isSymbolicLink()) {
        throw transactionError(
          "PCR_TRANSACTION_SYMLINK",
          `PCR directory transactions reject symbolic links: ${absolutePath}`,
        );
      }
      if (entry.isDirectory()) {
        entries.push({ type: "directory", relativePath, absolutePath, mode: entry.mode & 0o777 });
        visit(absolutePath, relativePath);
        continue;
      }
      if (entry.isFile()) {
        entries.push({
          type: "file",
          relativePath,
          absolutePath,
          mode: entry.mode & 0o777,
          size: entry.size,
        });
        continue;
      }
      throw transactionError(
        "PCR_TRANSACTION_SPECIAL_FILE",
        `PCR directory transactions support only regular files and directories: ${absolutePath}`,
      );
    }
  }

  visit(root, "");
  return entries;
}

/** A deterministic digest of relative paths, entry types, and file bytes. */
export function digestDirectoryTree(root) {
  const hash = createHash("sha256");
  hash.update("tiangong-pcr-directory-tree-v1\0");
  for (const entry of treeEntries(root)) {
    hash.update(entry.type === "directory" ? "d\0" : "f\0");
    hash.update(entry.relativePath, "utf8");
    hash.update("\0");
    if (entry.type === "file") {
      hash.update(String(entry.size));
      hash.update("\0");
      hash.update(readPlainFileBytes(entry.absolutePath, "PCR tree artifact"));
      hash.update("\0");
    }
  }
  return hash.digest("hex");
}

function copyDirectoryTree(source, destination, onCopyEntry) {
  if (existsSync(destination)) {
    throw transactionError(
      "PCR_TRANSACTION_STAGE_EXISTS",
      `Transaction staging directory already exists: ${destination}`,
    );
  }
  const sourceMode = requirePlainDirectory(source, "Current PCR directory").mode & 0o777;
  const entries = treeEntries(source);
  mkdirSync(destination, { mode: 0o700 });
  for (const entry of entries) {
    const destinationPath = path.join(destination, ...entry.relativePath.split("/"));
    if (entry.type === "directory") {
      mkdirSync(destinationPath, { mode: 0o700 });
    } else {
      writeFileSync(
        destinationPath,
        readPlainFileBytes(entry.absolutePath, "Current PCR artifact"),
        { flag: "wx", mode: entry.mode },
      );
      chmodSync(destinationPath, entry.mode);
    }
    invokeSync(
      onCopyEntry,
      Object.freeze({
        sourceDir: source,
        destinationDir: destination,
        relativePath: entry.relativePath,
        type: entry.type,
      }),
      "onCopyEntry",
    );
  }
  for (const entry of [...entries].reverse()) {
    if (entry.type === "directory") {
      chmodSync(path.join(destination, ...entry.relativePath.split("/")), entry.mode);
    }
  }
  chmodSync(destination, sourceMode);
}

function invokeSync(callback, context, label) {
  if (typeof callback !== "function") {
    return;
  }
  const result = callback(context);
  if (result && typeof result.then === "function") {
    throw transactionError(
      "PCR_TRANSACTION_ASYNC_CALLBACK",
      `${label} must be synchronous so filesystem phases cannot advance after control returns.`,
    );
  }
}

function writeJsonAtomic(target, value) {
  const temporary = path.join(path.dirname(target), `.${path.basename(target)}.${process.pid}.${randomUUID()}.tmp`);
  try {
    writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx", mode: 0o600 });
    renameSync(temporary, target);
  } finally {
    rmSync(temporary, { force: true });
  }
}

function readJsonFile(target, label) {
  try {
    return JSON.parse(readPlainFileBytes(target, label).toString("utf8"));
  } catch (error) {
    throw transactionError("PCR_TRANSACTION_MALFORMED_STATE", `${label} is not valid JSON: ${target}`, {
      cause: error,
    });
  }
}

function stateKey(relativePcrPath) {
  return createHash("sha256").update(relativePcrPath).digest("hex");
}

export function transactionStatePaths({ root, pcr }) {
  const location = resolvePcrLocationForRecovery({ root, pcr });
  const stateRoot = path.join(location.root, "library", ".pcr-builder-state");
  const transactionDir = path.join(stateRoot, stateKey(location.relativePcrPath));
  return Object.freeze({
    ...location,
    stateRoot,
    transactionDir,
    lockDir: path.join(transactionDir, "lock"),
    lockOwnerPath: path.join(transactionDir, "lock", "owner.json"),
    journalPath: path.join(transactionDir, "journal.json"),
    stageDir: path.join(transactionDir, "stage"),
    backupDir: path.join(transactionDir, "backup"),
  });
}

function assertNormalStateClean(paths, { ignoreOwnedLock = false } = {}) {
  assertStateDirectorySafe(paths.stateRoot, "PCR transaction state root");
  assertStateDirectorySafe(paths.transactionDir, "PCR transaction state directory");
  if (!ignoreOwnedLock && existsSync(paths.lockDir)) {
    throw transactionError(
      "PCR_TRANSACTION_LOCKED",
      `PCR directory transaction lock already exists at ${paths.lockDir}. ${recoverHint(paths.relativePcrPath)}`,
    );
  }
  const leftovers = [paths.journalPath, paths.stageDir, paths.backupDir].filter(existsSync);
  if (leftovers.length > 0) {
    throw transactionError(
      "PCR_TRANSACTION_RECOVERY_REQUIRED",
      `PCR transaction recovery state already exists (${leftovers.join(", ")}). ${recoverHint(paths.relativePcrPath)}`,
    );
  }
  const unexpectedEntries = existsSync(paths.transactionDir)
    ? readdirSync(paths.transactionDir).filter((entry) => !(ignoreOwnedLock && entry === "lock"))
    : [];
  if (unexpectedEntries.length > 0) {
    throw transactionError(
      "PCR_TRANSACTION_RECOVERY_REQUIRED",
      `PCR transaction state directory contains unrecognized entries: ${paths.transactionDir}. ${recoverHint(paths.relativePcrPath)}`,
    );
  }
}

function ensureStateContainer(paths) {
  mkdirSync(paths.stateRoot, { recursive: true, mode: 0o700 });
  assertStateDirectorySafe(paths.stateRoot, "PCR transaction state root");
  mkdirSync(paths.transactionDir, { recursive: true, mode: 0o700 });
  assertStateDirectorySafe(paths.transactionDir, "PCR transaction state directory");
}

function lockOwner(paths, command) {
  return {
    schema_version: STATE_SCHEMA_VERSION,
    pcr_path: paths.relativePcrPath,
    pid: process.pid,
    hostname: os.hostname(),
    command,
    started_at_utc: new Date().toISOString(),
  };
}

function acquireLock(paths, command) {
  try {
    mkdirSync(paths.lockDir, { mode: 0o700 });
  } catch (error) {
    if (error?.code === "EEXIST") {
      throw transactionError(
        "PCR_TRANSACTION_LOCKED",
        `PCR directory transaction lock already exists at ${paths.lockDir}. ${recoverHint(paths.relativePcrPath)}`,
        { cause: error },
      );
    }
    throw error;
  }
  try {
    writeJsonAtomic(paths.lockOwnerPath, lockOwner(paths, command));
  } catch (error) {
    rmSync(paths.lockDir, { recursive: true, force: true });
    throw error;
  }
}

function releaseLock(paths) {
  rmSync(paths.lockDir, { recursive: true, force: true });
}

function removeEmptyStateContainers(paths) {
  try {
    rmdirSync(paths.transactionDir);
  } catch (error) {
    if (error?.code !== "ENOENT") {
      if (error?.code === "ENOTEMPTY") {
        throw transactionError(
          "PCR_TRANSACTION_STATE_NOT_EMPTY",
          `PCR transaction state directory still contains recovery evidence: ${paths.transactionDir}`,
          { cause: error },
        );
      }
      throw error;
    }
  }
  try {
    rmdirSync(paths.stateRoot);
  } catch (error) {
    // The state root is shared by every PCR and may legitimately contain other transactions.
    if (!["ENOENT", "ENOTEMPTY"].includes(error?.code)) {
      throw error;
    }
  }
}

function journalTemporaryPaths(paths) {
  if (!existsSync(paths.transactionDir)) {
    return [];
  }
  return readdirSync(paths.transactionDir)
    .filter((entry) => JOURNAL_TEMP_PATTERN.test(entry))
    .map((entry) => path.join(paths.transactionDir, entry))
    .map((temporaryPath) => {
      requirePlainFile(temporaryPath, "PCR transaction journal temporary file");
      return temporaryPath;
    });
}

function removeJournalTemporaryFiles(paths) {
  for (const temporaryPath of journalTemporaryPaths(paths)) {
    rmSync(temporaryPath);
  }
}

function recoveryUnexpectedEntries(paths) {
  if (!existsSync(paths.transactionDir)) {
    return [];
  }
  const known = new Set(["lock", "journal.json", "stage", "backup"]);
  return readdirSync(paths.transactionDir).filter(
    (entry) => !known.has(entry) && !JOURNAL_TEMP_PATTERN.test(entry),
  );
}

function assertRecoveryEntriesRecognized(paths) {
  const unexpected = recoveryUnexpectedEntries(paths);
  if (unexpected.length > 0) {
    throw transactionError(
      "PCR_TRANSACTION_UNRECOGNIZED_STATE",
      `PCR transaction state directory contains unrecognized recovery evidence: ${unexpected.join(", ")}.`,
    );
  }
}

function journalValue(paths, command, transactionId, oldDigest, newDigest) {
  const now = new Date().toISOString();
  return {
    schema_version: STATE_SCHEMA_VERSION,
    transaction_id: transactionId,
    pcr_path: paths.relativePcrPath,
    command,
    phase: "prepared",
    old_tree_sha256: oldDigest,
    new_tree_sha256: newDigest,
    created_at_utc: now,
    updated_at_utc: now,
  };
}

function writeJournalPhase(paths, journal, phase) {
  if (!PCR_TRANSACTION_PHASES.includes(phase)) {
    throw transactionError("PCR_TRANSACTION_PHASE_INVALID", `Unsupported transaction phase: ${phase}`);
  }
  const next = { ...journal, phase, updated_at_utc: new Date().toISOString() };
  writeJsonAtomic(paths.journalPath, next);
  return next;
}

function validJournal(value, paths) {
  return Boolean(
    value &&
      value.schema_version === STATE_SCHEMA_VERSION &&
      typeof value.transaction_id === "string" &&
      value.transaction_id.length > 0 &&
      value.pcr_path === paths.relativePcrPath &&
      typeof value.command === "string" &&
      value.command.length > 0 &&
      PCR_TRANSACTION_PHASES.includes(value.phase) &&
      DIGEST_PATTERN.test(value.old_tree_sha256) &&
      DIGEST_PATTERN.test(value.new_tree_sha256) &&
      typeof value.created_at_utc === "string" &&
      typeof value.updated_at_utc === "string"
  );
}

function digestState(directory, journal) {
  if (!existsSync(directory)) {
    return Object.freeze({ kind: "missing", digest: null });
  }
  const digest = digestDirectoryTree(directory);
  let kind = "unknown";
  if (digest === journal.old_tree_sha256 && digest === journal.new_tree_sha256) {
    kind = "old_and_new";
  } else if (digest === journal.old_tree_sha256) {
    kind = "old";
  } else if (digest === journal.new_tree_sha256) {
    kind = "new";
  }
  return Object.freeze({ kind, digest });
}

function isOld(state) {
  return state.kind === "old" || state.kind === "old_and_new";
}

function isNew(state) {
  return state.kind === "new" || state.kind === "old_and_new";
}

function inspectRecoveryTrees(paths, journal) {
  const trees = {
    current: digestState(paths.pcrDir, journal),
    stage: digestState(paths.stageDir, journal),
    backup: digestState(paths.backupDir, journal),
  };
  const unknown = Object.entries(trees).filter(([, value]) => value.kind === "unknown");
  if (unknown.length > 0) {
    throw transactionError(
      "PCR_TRANSACTION_DIGEST_MISMATCH",
      `Recovery found tree content that matches neither recorded digest: ${unknown
        .map(([name, value]) => `${name}=${value.digest}`)
        .join(", ")}.`,
    );
  }
  return trees;
}

function removeKnownTree(directory) {
  if (existsSync(directory)) {
    digestDirectoryTree(directory);
    rmSync(directory, { recursive: true, force: true });
  }
}

function rollbackPreparedTransaction(paths, journal) {
  const trees = inspectRecoveryTrees(paths, journal);
  if (isOld(trees.current)) {
    removeKnownTree(paths.backupDir);
  } else if (isOld(trees.backup)) {
    removeKnownTree(paths.pcrDir);
    renameSync(paths.backupDir, paths.pcrDir);
  } else if (isOld(trees.stage)) {
    removeKnownTree(paths.pcrDir);
    removeKnownTree(paths.backupDir);
    renameSync(paths.stageDir, paths.pcrDir);
  } else {
    throw transactionError(
      "PCR_TRANSACTION_OLD_TREE_MISSING",
      `Cannot roll back transaction ${journal.transaction_id}; no tree matches ${journal.old_tree_sha256}.`,
    );
  }

  if (digestDirectoryTree(paths.pcrDir) !== journal.old_tree_sha256) {
    throw transactionError(
      "PCR_TRANSACTION_ROLLBACK_VERIFY_FAILED",
      `Rolled-back PCR tree does not match ${journal.old_tree_sha256}.`,
    );
  }
  return "rolled_back";
}

function finishCommittedTransaction(paths, journal) {
  const trees = inspectRecoveryTrees(paths, journal);
  if (!isNew(trees.current)) {
    if (isNew(trees.stage)) {
      removeKnownTree(paths.pcrDir);
      renameSync(paths.stageDir, paths.pcrDir);
    } else if (isNew(trees.backup)) {
      removeKnownTree(paths.pcrDir);
      renameSync(paths.backupDir, paths.pcrDir);
    } else {
      throw transactionError(
        "PCR_TRANSACTION_NEW_TREE_MISSING",
        `Cannot finish transaction ${journal.transaction_id}; no tree matches ${journal.new_tree_sha256}.`,
      );
    }
  }
  if (digestDirectoryTree(paths.pcrDir) !== journal.new_tree_sha256) {
    throw transactionError(
      "PCR_TRANSACTION_FORWARD_VERIFY_FAILED",
      `Committed PCR tree does not match ${journal.new_tree_sha256}.`,
    );
  }
  return "finished";
}

function cleanupRecoveredState(paths) {
  removeKnownTree(paths.stageDir);
  removeKnownTree(paths.backupDir);
  rmSync(paths.journalPath, { force: true });
  removeJournalTemporaryFiles(paths);
}

function cleanupCommittedState(paths) {
  removeKnownTree(paths.stageDir);
  removeKnownTree(paths.backupDir);
  rmSync(paths.journalPath, { force: true });
}

function callbackContext(paths, extra = {}) {
  return Object.freeze({
    root: paths.root,
    pcrDir: paths.pcrDir,
    relativePcrPath: paths.relativePcrPath,
    stageDir: paths.stageDir,
    backupDir: paths.backupDir,
    journalPath: paths.journalPath,
    ...extra,
  });
}

/**
 * Replace one complete canonical PCR leaf through two same-filesystem renames.
 * Callback ordering is preflight (while locked, before stage/journal writes), prepareStage,
 * validateStage, then postValidate.
 */
export function runPcrDirectoryTransaction(options) {
  const strictPaths = resolvePcrWorkspacePaths({
    root: options.root,
    pcr: options.pcr,
    workspace: "current",
  });
  const paths = transactionStatePaths({ root: strictPaths.root, pcr: strictPaths.pcrDir });
  const command = String(options.command ?? "pcr-directory-transaction").trim();
  if (!command) {
    throw transactionError("PCR_TRANSACTION_COMMAND_REQUIRED", "Transaction command must not be empty.");
  }

  assertNormalStateClean(paths);

  ensureStateContainer(paths);
  acquireLock(paths, command);
  let createdStage = false;
  let journal = null;
  let phase = null;
  let oldDigest = null;
  let newDigest = null;
  const transactionId = randomUUID();

  try {
    assertNormalStateClean(paths, { ignoreOwnedLock: true });
    invokeSync(options.preflight, callbackContext(paths), "preflight");

    oldDigest = digestDirectoryTree(paths.pcrDir);
    // Claim ownership before copying: a mid-copy error may already have created a partial stage.
    createdStage = true;
    copyDirectoryTree(paths.pcrDir, paths.stageDir, options.onCopyEntry);
    if (digestDirectoryTree(paths.stageDir) !== oldDigest) {
      throw transactionError(
        "PCR_TRANSACTION_STAGE_COPY_MISMATCH",
        "The complete staging copy does not match the current PCR tree.",
      );
    }

    invokeSync(options.prepareStage, callbackContext(paths, { transactionId }), "prepareStage");
    newDigest = digestDirectoryTree(paths.stageDir);
    invokeSync(
      options.validateStage,
      callbackContext(paths, { transactionId, oldTreeSha256: oldDigest, newTreeSha256: newDigest }),
      "validateStage",
    );
    if (digestDirectoryTree(paths.pcrDir) !== oldDigest) {
      throw transactionError(
        "PCR_TRANSACTION_SOURCE_CHANGED",
        "The current PCR tree changed after staging began; no replacement was attempted.",
      );
    }

    journal = journalValue(paths, command, transactionId, oldDigest, newDigest);
    writeJsonAtomic(paths.journalPath, journal);
    phase = "prepared";
    invokeSync(options.onPhase, callbackContext(paths, { phase, journal: Object.freeze({ ...journal }) }), "onPhase");

    renameSync(paths.pcrDir, paths.backupDir);
    journal = writeJournalPhase(paths, journal, "current_moved");
    phase = "current_moved";
    invokeSync(options.onPhase, callbackContext(paths, { phase, journal: Object.freeze({ ...journal }) }), "onPhase");

    renameSync(paths.stageDir, paths.pcrDir);
    journal = writeJournalPhase(paths, journal, "new_installed");
    phase = "new_installed";
    invokeSync(options.onPhase, callbackContext(paths, { phase, journal: Object.freeze({ ...journal }) }), "onPhase");

    invokeSync(
      options.postValidate,
      callbackContext(paths, { transactionId, oldTreeSha256: oldDigest, newTreeSha256: newDigest }),
      "postValidate",
    );
    if (digestDirectoryTree(paths.pcrDir) !== newDigest) {
      throw transactionError(
        "PCR_TRANSACTION_POSTVALIDATE_MUTATION",
        "Post-validation changed the installed PCR tree after its digest was recorded.",
      );
    }

    journal = writeJournalPhase(paths, journal, "committed");
    phase = "committed";
    invokeSync(options.onPhase, callbackContext(paths, { phase, journal: Object.freeze({ ...journal }) }), "onPhase");

    cleanupCommittedState(paths);
    releaseLock(paths);
    removeEmptyStateContainers(paths);
    return Object.freeze({
      committed: true,
      recoveryRequired: false,
      transactionId,
      oldTreeSha256: oldDigest,
      newTreeSha256: newDigest,
      warnings: Object.freeze([]),
    });
  } catch (error) {
    if (phase === "committed") {
      const warning = `Transaction ${transactionId} committed, but cleanup did not finish: ${error.message}`;
      try {
        releaseLock(paths);
        removeEmptyStateContainers(paths);
      } catch {
        // The committed journal is intentionally retained for explicit forward recovery.
      }
      return Object.freeze({
        committed: true,
        recoveryRequired: true,
        transactionId,
        oldTreeSha256: oldDigest,
        newTreeSha256: newDigest,
        warnings: Object.freeze([warning]),
      });
    }

    let rollbackError = null;
    try {
      if (journal && existsSync(paths.journalPath)) {
        rollbackPreparedTransaction(paths, readJsonFile(paths.journalPath, "PCR transaction journal"));
        cleanupRecoveredState(paths);
      } else if (createdStage) {
        // This stage was created by this invocation and has not been journaled. rm removes a
        // discovered symlink entry itself without following it outside the owned stage root.
        rmSync(paths.stageDir, { recursive: true, force: true });
      }
    } catch (candidateRollbackError) {
      rollbackError = candidateRollbackError;
    }
    try {
      releaseLock(paths);
      removeEmptyStateContainers(paths);
    } catch (candidateCleanupError) {
      rollbackError ??= candidateCleanupError;
    }
    if (rollbackError) {
      throw transactionError(
        "PCR_TRANSACTION_ROLLBACK_FAILED",
        `${error.message}\nRollback also failed: ${rollbackError.message}\n${recoverHint(paths.relativePcrPath)}`,
        { cause: error },
      );
    }
    throw error;
  }
}

function validLockOwner(owner, paths) {
  return Boolean(
    owner &&
      owner.schema_version === STATE_SCHEMA_VERSION &&
      owner.pcr_path === paths.relativePcrPath &&
      Number.isInteger(owner.pid) &&
      owner.pid > 0 &&
      typeof owner.hostname === "string" &&
      owner.hostname.length > 0 &&
      typeof owner.command === "string" &&
      owner.command.length > 0 &&
      typeof owner.started_at_utc === "string"
  );
}

function pidIsLive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    if (error?.code === "ESRCH") {
      return false;
    }
    return true;
  }
}

function inspectExistingRecoveryLock(paths, force) {
  if (!existsSync(paths.lockDir)) {
    return false;
  }
  let owner = null;
  try {
    requirePlainDirectory(paths.lockDir, "PCR transaction lock");
    owner = readJsonFile(paths.lockOwnerPath, "PCR transaction lock owner");
  } catch (error) {
    if (!force) {
      throw transactionError(
        "PCR_TRANSACTION_FORCE_REQUIRED",
        `PCR transaction lock is malformed; recovery requires force: ${paths.lockDir}`,
        { cause: error },
      );
    }
    rmSync(paths.lockDir, { recursive: true, force: true });
    return true;
  }
  if (!validLockOwner(owner, paths)) {
    if (!force) {
      throw transactionError(
        "PCR_TRANSACTION_FORCE_REQUIRED",
        `PCR transaction lock owner is malformed; recovery requires force: ${paths.lockOwnerPath}`,
      );
    }
    rmSync(paths.lockDir, { recursive: true, force: true });
    return true;
  }
  if (owner.hostname !== os.hostname()) {
    if (!force) {
      throw transactionError(
        "PCR_TRANSACTION_FORCE_REQUIRED",
        `PCR transaction lock belongs to foreign host ${owner.hostname}; recovery requires force.`,
      );
    }
    rmSync(paths.lockDir, { recursive: true, force: true });
    return true;
  }
  if (pidIsLive(owner.pid)) {
    throw transactionError(
      "PCR_TRANSACTION_LIVE_LOCK",
      `PCR transaction lock is owned by live process ${owner.pid} on ${owner.hostname}; recovery is refused.`,
    );
  }
  rmSync(paths.lockDir, { recursive: true, force: true });
  return false;
}

function readTrustedJournal(paths) {
  if (existsSync(paths.journalPath)) {
    let journal;
    try {
      journal = readJsonFile(paths.journalPath, "PCR transaction journal");
    } catch (error) {
      throw transactionError(
        "PCR_TRANSACTION_JOURNAL_UNTRUSTED",
        `PCR transaction journal is malformed; recovery evidence was preserved: ${paths.journalPath}`,
        { cause: error },
      );
    }
    if (!validJournal(journal, paths)) {
      throw transactionError(
        "PCR_TRANSACTION_JOURNAL_UNTRUSTED",
        `PCR transaction journal is malformed or belongs to another PCR; recovery evidence was preserved: ${paths.journalPath}`,
      );
    }
    return journal;
  }

  const hasTrees = existsSync(paths.stageDir) || existsSync(paths.backupDir);
  if (!hasTrees) {
    return null;
  }

  const temporaryPaths = journalTemporaryPaths(paths);
  if (temporaryPaths.length !== 1) {
    throw transactionError(
      "PCR_TRANSACTION_TRUSTED_JOURNAL_REQUIRED",
      "PCR transaction has staged or backup trees but no single trustworthy journal; recovery evidence was preserved.",
    );
  }
  let journal;
  try {
    journal = readJsonFile(temporaryPaths[0], "PCR transaction journal temporary file");
  } catch (error) {
    throw transactionError(
      "PCR_TRANSACTION_TRUSTED_JOURNAL_REQUIRED",
      "PCR transaction has trees but its only journal temporary file is malformed; recovery evidence was preserved.",
      { cause: error },
    );
  }
  if (!validJournal(journal, paths)) {
    throw transactionError(
      "PCR_TRANSACTION_TRUSTED_JOURNAL_REQUIRED",
      "PCR transaction journal temporary file is not trustworthy for this PCR; recovery evidence was preserved.",
    );
  }
  // A complete atomic-write temporary is trustworthy only when its recorded digests explain
  // every extant tree. Finalizing that rename preserves evidence and makes recovery repeatable.
  inspectRecoveryTrees(paths, journal);
  renameSync(temporaryPaths[0], paths.journalPath);
  return journal;
}

function validateRecoveredTree(paths, options, details, expectedDigest) {
  if (!existsSync(paths.pcrDir)) {
    throw transactionError(
      "PCR_TRANSACTION_RECOVERED_TREE_MISSING",
      `Recovery did not produce a current PCR directory: ${paths.pcrDir}`,
    );
  }
  if (expectedDigest !== null && digestDirectoryTree(paths.pcrDir) !== expectedDigest) {
    throw transactionError(
      "PCR_TRANSACTION_RECOVERED_TREE_MISMATCH",
      `Recovered PCR tree does not match its journal digest ${expectedDigest}.`,
    );
  }
  invokeSync(
    options.validateRecovered,
    callbackContext(paths, details),
    "validateRecovered",
  );
  if (expectedDigest !== null && digestDirectoryTree(paths.pcrDir) !== expectedDigest) {
    throw transactionError(
      "PCR_TRANSACTION_RECOVERY_VALIDATION_MUTATION",
      "Recovery validation changed the PCR tree after its journal digest was verified.",
    );
  }
}

/** Recover an interrupted transaction by rolling back every pre-commit phase or finishing a committed phase. */
export function recoverPcrDirectoryTransaction(options) {
  const paths = transactionStatePaths({ root: options.root, pcr: options.pcr });
  const force = options.force === true;
  if (!existsSync(paths.transactionDir)) {
    return Object.freeze({ action: "nothing_to_recover", phase: null, forced: false, warnings: Object.freeze([]) });
  }
  assertStateDirectorySafe(paths.stateRoot, "PCR transaction state root");
  assertStateDirectorySafe(paths.transactionDir, "PCR transaction state directory");
  const forcedLock = inspectExistingRecoveryLock(paths, force);

  acquireLock(paths, String(options.command ?? "recover-pcr-directory-transaction"));
  let action;
  let phase = null;
  const forced = forcedLock;
  try {
    assertRecoveryEntriesRecognized(paths);
    // Validate recognized journal temporaries up front so a look-alike symlink or special file
    // cannot be silently removed during successful recovery.
    journalTemporaryPaths(paths);
    const journal = readTrustedJournal(paths);
    if (journal === null) {
      action = "cleared_stale_lock";
      validateRecoveredTree(paths, options, { action, forced, phase: null }, null);
      removeJournalTemporaryFiles(paths);
    } else {
      phase = journal.phase;
      action =
        phase === "committed"
          ? finishCommittedTransaction(paths, journal)
          : rollbackPreparedTransaction(paths, journal);
      const expectedDigest = phase === "committed"
        ? journal.new_tree_sha256
        : journal.old_tree_sha256;
      validateRecoveredTree(
        paths,
        options,
        { action, forced, phase, journal: Object.freeze({ ...journal }) },
        expectedDigest,
      );
      cleanupRecoveredState(paths);
    }
    releaseLock(paths);
    removeEmptyStateContainers(paths);
    return Object.freeze({ action, phase, forced, warnings: Object.freeze([]) });
  } catch (error) {
    try {
      releaseLock(paths);
      removeEmptyStateContainers(paths);
    } catch {
      // Preserve the primary recovery error and all journal/tree evidence.
    }
    throw error;
  }
}

export function currentPcrDigest({ root, pcr }) {
  const paths = resolvePcrWorkspacePaths({ root, pcr, workspace: "current" });
  return Object.freeze({
    pcrPath: repoRelativePcrPath(paths),
    sha256: digestDirectoryTree(paths.pcrDir),
    realpath: realpathSync(paths.pcrDir),
  });
}
