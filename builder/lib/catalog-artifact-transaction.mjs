import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fchmodSync,
  fstatSync,
  fsyncSync,
  linkSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  realpathSync,
  renameSync,
  rmSync,
  rmdirSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { createHash, randomUUID } from "node:crypto";
import os from "node:os";
import path from "node:path";
import { TextDecoder } from "node:util";

const STATE_SCHEMA_VERSION = 1;
const TRANSACTION_KIND = "catalog-artifact-set";
const TRANSACTION_DIRECTORY_NAME = "catalog";
const STATE_DIRECTORY_RELATIVE_PATH = "library/.pcr-builder-state";
const CATALOG_PATH = "library/catalog.yaml";
const PHASES = Object.freeze([
  "preparing",
  "prepared",
  "installing",
  "installed",
  "committed",
]);
const PRE_COMMIT_PHASES = new Set(PHASES.filter((phase) => phase !== "committed"));
const DIGEST_PATTERN = /^[0-9a-f]{64}$/u;
const UUID_PATTERN = "[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}";
const UUID_V4_PATTERN = new RegExp(`^${UUID_PATTERN}$`, "u");
const RELEASED_LOCK_PATTERN = new RegExp(`^\\.lock\\.released\\.(${UUID_PATTERN})$`, "u");
const JOURNAL_TEMP_PATTERN = new RegExp(
  `^\\.journal\\.json\\.\\d+\\.(${UUID_PATTERN})\\.tmp$`,
  "u",
);
const READ_FLAGS =
  fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0) | (fsConstants.O_NONBLOCK ?? 0);
const WRITE_FLAGS =
  fsConstants.O_WRONLY
  | fsConstants.O_CREAT
  | fsConstants.O_EXCL
  | (fsConstants.O_NOFOLLOW ?? 0);
const FATAL_UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });

class CatalogArtifactTransactionError extends Error {
  constructor(code, message, options = {}) {
    super(message, options);
    this.name = "CatalogArtifactTransactionError";
    this.code = code;
  }
}

function transactionError(code, message, options) {
  return new CatalogArtifactTransactionError(code, message, options);
}

function recoverHint() {
  return "Run `npm run catalog:recover` before retrying catalog publication.";
}

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function sameIdentity(left, right) {
  return left?.dev === right?.dev && left?.ino === right?.ino;
}

function identityOf(stat) {
  return Object.freeze({ dev: stat.dev, ino: stat.ino });
}

function descriptorOf(snapshot) {
  if (snapshot === null) {
    return null;
  }
  return Object.freeze({
    sha256: snapshot.sha256,
    byte_length: snapshot.byte_length,
    mode: snapshot.mode,
  });
}

function sameDescriptor(left, right) {
  return Boolean(
    left
      && right
      && left.sha256 === right.sha256
      && left.byte_length === right.byte_length
      && left.mode === right.mode,
  );
}

function requirePlainDirectory(target, label) {
  let stat;
  try {
    stat = lstatSync(target);
  } catch (error) {
    throw transactionError("CATALOG_TRANSACTION_DIRECTORY_MISSING", `${label} is missing: ${target}`, {
      cause: error,
    });
  }
  if (stat.isSymbolicLink()) {
    throw transactionError("CATALOG_TRANSACTION_SYMLINK", `${label} must not be a symbolic link: ${target}`);
  }
  if (!stat.isDirectory()) {
    throw transactionError("CATALOG_TRANSACTION_NOT_DIRECTORY", `${label} must be a directory: ${target}`);
  }
  return stat;
}

function safeFileSnapshot(filePath, label, { allowMissing = true } = {}) {
  let pathStat;
  try {
    pathStat = lstatSync(filePath);
  } catch (error) {
    if (allowMissing && error?.code === "ENOENT") {
      return null;
    }
    throw transactionError("CATALOG_TRANSACTION_FILE_READ_FAILED", `${label} could not be inspected: ${filePath}`, {
      cause: error,
    });
  }
  if (pathStat.isSymbolicLink()) {
    throw transactionError("CATALOG_TRANSACTION_SYMLINK", `${label} must not be a symbolic link: ${filePath}`);
  }
  if (!pathStat.isFile()) {
    throw transactionError("CATALOG_TRANSACTION_NOT_FILE", `${label} must be a regular file: ${filePath}`);
  }

  let descriptor;
  try {
    descriptor = openSync(filePath, READ_FLAGS);
  } catch (error) {
    throw transactionError("CATALOG_TRANSACTION_FILE_READ_FAILED", `${label} could not be safely opened: ${filePath}`, {
      cause: error,
    });
  }
  try {
    const descriptorStat = fstatSync(descriptor);
    const currentStat = lstatSync(filePath);
    if (
      !descriptorStat.isFile()
      || currentStat.isSymbolicLink()
      || !currentStat.isFile()
      || descriptorStat.dev !== currentStat.dev
      || descriptorStat.ino !== currentStat.ino
    ) {
      throw transactionError(
        "CATALOG_TRANSACTION_FILE_CHANGED",
        `${label} changed while it was being opened: ${filePath}`,
      );
    }
    const bytes = readFileSync(descriptor);
    return Object.freeze({
      ...identityOf(descriptorStat),
      sha256: sha256(bytes),
      byte_length: bytes.length,
      mode: descriptorStat.mode & 0o777,
      bytes,
    });
  } finally {
    closeSync(descriptor);
  }
}

function safeUtf8Json(filePath, label) {
  const snapshot = safeFileSnapshot(filePath, label, { allowMissing: false });
  let text;
  try {
    text = FATAL_UTF8_DECODER.decode(snapshot.bytes);
  } catch (error) {
    throw transactionError("CATALOG_TRANSACTION_MALFORMED_STATE", `${label} is not valid UTF-8: ${filePath}`, {
      cause: error,
    });
  }
  let value;
  try {
    value = JSON.parse(text);
  } catch (error) {
    throw transactionError("CATALOG_TRANSACTION_MALFORMED_STATE", `${label} is not valid JSON: ${filePath}`, {
      cause: error,
    });
  }
  if (text !== renderJson(value)) {
    throw transactionError(
      "CATALOG_TRANSACTION_MALFORMED_STATE",
      `${label} is not in the canonical transaction JSON form: ${filePath}`,
    );
  }
  return value;
}

function renderJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function fsyncDirectory(directory) {
  const descriptor = openSync(directory, fsConstants.O_RDONLY);
  try {
    fsyncSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
}

function writeExclusiveFile(filePath, bytes, { mode = 0o600 } = {}) {
  let descriptor;
  try {
    descriptor = openSync(filePath, WRITE_FLAGS, mode);
  } catch (error) {
    throw transactionError(
      "CATALOG_TRANSACTION_EXCLUSIVE_CREATE_FAILED",
      `Could not create an exclusive transaction file: ${filePath}`,
      { cause: error },
    );
  }
  try {
    const stat = fstatSync(descriptor);
    if (!stat.isFile()) {
      throw transactionError("CATALOG_TRANSACTION_NOT_FILE", `Created transaction path is not a regular file: ${filePath}`);
    }
    fchmodSync(descriptor, mode);
    writeFileSync(descriptor, bytes);
    fsyncSync(descriptor);
    return identityOf(stat);
  } finally {
    closeSync(descriptor);
  }
}

function writeJsonAtomic(target, value) {
  const parent = path.dirname(target);
  const temporary = path.join(parent, `.${path.basename(target)}.${process.pid}.${randomUUID()}.tmp`);
  let ownedIdentity = null;
  try {
    ownedIdentity = writeExclusiveFile(temporary, Buffer.from(renderJson(value), "utf8"));
    renameSync(temporary, target);
    ownedIdentity = null;
    fsyncDirectory(parent);
  } finally {
    if (ownedIdentity !== null) {
      let current;
      try {
        current = lstatSync(temporary);
      } catch {
        current = null;
      }
      if (current?.isFile() && sameIdentity(current, ownedIdentity)) {
        unlinkSync(temporary);
        fsyncDirectory(parent);
      }
    }
  }
}

function normalizedArtifactPath(value) {
  if (
    typeof value !== "string"
    || value.length === 0
    || value.includes("\\")
    || value.includes("\0")
    || value.endsWith("/")
    || path.posix.isAbsolute(value)
    || path.posix.normalize(value) !== value
    || value === "."
    || value === ".."
    || value.startsWith("../")
  ) {
    throw transactionError(
      "CATALOG_TRANSACTION_PATH_INVALID",
      `Catalog artifact path must be a normalized repository-relative path: ${String(value)}`,
    );
  }
  if (!/^[a-z0-9][a-z0-9._/-]*$/u.test(value)) {
    throw transactionError(
      "CATALOG_TRANSACTION_PATH_INVALID",
      `Catalog artifact path must use lowercase portable path tokens: ${value}`,
    );
  }
  if (value === STATE_DIRECTORY_RELATIVE_PATH || value.startsWith(`${STATE_DIRECTORY_RELATIVE_PATH}/`)) {
    throw transactionError(
      "CATALOG_TRANSACTION_PATH_INVALID",
      `Catalog artifacts must not target transaction state: ${value}`,
    );
  }
  if (
    value !== CATALOG_PATH
    && !value.startsWith("library/indexes/")
    && !value.startsWith("classifications/indexes/")
  ) {
    throw transactionError(
      "CATALOG_TRANSACTION_PATH_INVALID",
      `Catalog artifact path is outside the managed catalog/index set: ${value}`,
    );
  }
  return value;
}

function relativeSegments(relativePath) {
  return relativePath.split("/");
}

function assertPathWithin(root, target, label) {
  const relative = path.relative(root, target);
  if (path.isAbsolute(relative) || relative === ".." || relative.startsWith(`..${path.sep}`)) {
    throw transactionError("CATALOG_TRANSACTION_PATH_ESCAPE", `${label} escapes the repository root: ${target}`);
  }
}

function inspectDirectoryChain(root, target, label, { allowMissing = false } = {}) {
  assertPathWithin(root, target, label);
  let current = root;
  let currentStat = requirePlainDirectory(current, "Catalog repository root");
  const relative = path.relative(root, target);
  for (const segment of relative.split(path.sep).filter(Boolean)) {
    current = path.join(current, segment);
    try {
      currentStat = lstatSync(current);
    } catch (error) {
      if (allowMissing && error?.code === "ENOENT") {
        return null;
      }
      throw transactionError("CATALOG_TRANSACTION_DIRECTORY_MISSING", `${label} is missing: ${current}`, {
        cause: error,
      });
    }
    if (currentStat.isSymbolicLink()) {
      throw transactionError("CATALOG_TRANSACTION_SYMLINK", `${label} contains a symbolic link: ${current}`);
    }
    if (!currentStat.isDirectory()) {
      throw transactionError("CATALOG_TRANSACTION_NOT_DIRECTORY", `${label} must contain only directories: ${current}`);
    }
  }
  return currentStat;
}

function ensureDirectoryChain(root, target, label, { mode = 0o700 } = {}) {
  assertPathWithin(root, target, label);
  inspectDirectoryChain(root, root, label);
  let current = root;
  const relative = path.relative(root, target);
  for (const segment of relative.split(path.sep).filter(Boolean)) {
    current = path.join(current, segment);
    try {
      mkdirSync(current, { mode });
      fsyncDirectory(path.dirname(current));
    } catch (error) {
      if (error?.code !== "EEXIST") {
        throw error;
      }
    }
    const stat = lstatSync(current);
    if (stat.isSymbolicLink()) {
      throw transactionError("CATALOG_TRANSACTION_SYMLINK", `${label} contains a symbolic link: ${current}`);
    }
    if (!stat.isDirectory()) {
      throw transactionError("CATALOG_TRANSACTION_NOT_DIRECTORY", `${label} must contain only directories: ${current}`);
    }
  }
  return requirePlainDirectory(target, label);
}

function rootLocation(root) {
  const requested = path.resolve(String(root ?? ""));
  let resolved;
  try {
    resolved = realpathSync(requested);
  } catch (error) {
    throw transactionError("CATALOG_TRANSACTION_ROOT_INVALID", `Catalog repository root does not exist: ${requested}`, {
      cause: error,
    });
  }
  requirePlainDirectory(resolved, "Catalog repository root");
  return resolved;
}

export function catalogTransactionStatePaths({ root }) {
  const resolvedRoot = rootLocation(root);
  const stateRoot = path.join(resolvedRoot, ...relativeSegments(STATE_DIRECTORY_RELATIVE_PATH));
  const transactionDir = path.join(stateRoot, TRANSACTION_DIRECTORY_NAME);
  return Object.freeze({
    root: resolvedRoot,
    stateRoot,
    transactionDir,
    lockDir: path.join(transactionDir, "lock"),
    lockOwnerPath: path.join(transactionDir, "lock", "owner.json"),
    journalPath: path.join(transactionDir, "journal.json"),
    stageDir: path.join(transactionDir, "stage"),
    backupDir: path.join(transactionDir, "backup"),
  });
}

function ensureStateContainer(paths) {
  const library = path.join(paths.root, "library");
  ensureDirectoryChain(paths.root, library, "Catalog state parent", { mode: 0o755 });
  ensureDirectoryChain(paths.root, paths.stateRoot, "Catalog transaction state root");
  ensureDirectoryChain(paths.root, paths.transactionDir, "Catalog transaction state directory");
}

function hasExactKeys(value, keys) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const actual = Object.keys(value).sort();
  const expected = [...keys].sort();
  return actual.length === expected.length && actual.every((key, index) => key === expected[index]);
}

function isCanonicalTimestamp(value) {
  if (typeof value !== "string") {
    return false;
  }
  const parsed = new Date(value);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString() === value;
}

function validDescriptor(value) {
  return Boolean(
    hasExactKeys(value, ["sha256", "byte_length", "mode"])
      && DIGEST_PATTERN.test(value.sha256)
      && Number.isSafeInteger(value.byte_length)
      && value.byte_length >= 0
      && Number.isInteger(value.mode)
      && value.mode >= 0
      && value.mode <= 0o777,
  );
}

function validateJournal(value) {
  if (!hasExactKeys(value, [
    "schema_version",
    "transaction_kind",
    "transaction_id",
    "command",
    "phase",
    "created_at_utc",
    "updated_at_utc",
    "artifacts",
  ])) {
    throw transactionError("CATALOG_TRANSACTION_JOURNAL_UNTRUSTED", "Catalog transaction journal has unexpected fields.");
  }
  if (
    value.schema_version !== STATE_SCHEMA_VERSION
    || value.transaction_kind !== TRANSACTION_KIND
    || !UUID_V4_PATTERN.test(value.transaction_id)
    || typeof value.command !== "string"
    || value.command.length === 0
    || !PHASES.includes(value.phase)
    || !isCanonicalTimestamp(value.created_at_utc)
    || !isCanonicalTimestamp(value.updated_at_utc)
    || !Array.isArray(value.artifacts)
    || value.artifacts.length === 0
  ) {
    throw transactionError("CATALOG_TRANSACTION_JOURNAL_UNTRUSTED", "Catalog transaction journal identity or phase is invalid.");
  }

  const paths = new Set();
  const orders = new Set();
  for (const artifact of value.artifacts) {
    if (!hasExactKeys(artifact, ["path", "install_order", "old", "new", "write_required"])) {
      throw transactionError("CATALOG_TRANSACTION_JOURNAL_UNTRUSTED", "Catalog transaction journal artifact has unexpected fields.");
    }
    const relativePath = normalizedArtifactPath(artifact.path);
    if (
      paths.has(relativePath)
      || !Number.isInteger(artifact.install_order)
      || artifact.install_order < 0
      || orders.has(artifact.install_order)
      || (artifact.old !== null && !validDescriptor(artifact.old))
      || !validDescriptor(artifact.new)
      || typeof artifact.write_required !== "boolean"
    ) {
      throw transactionError("CATALOG_TRANSACTION_JOURNAL_UNTRUSTED", `Catalog transaction journal artifact is invalid: ${relativePath}`);
    }
    const expectedWrite = artifact.old === null || !sameDescriptor(artifact.old, artifact.new);
    if (artifact.write_required !== expectedWrite) {
      throw transactionError("CATALOG_TRANSACTION_JOURNAL_UNTRUSTED", `Catalog transaction journal write decision is invalid: ${relativePath}`);
    }
    paths.add(relativePath);
    orders.add(artifact.install_order);
  }
  if ([...orders].sort((left, right) => left - right).some((order, index) => order !== index)) {
    throw transactionError("CATALOG_TRANSACTION_JOURNAL_UNTRUSTED", "Catalog transaction install order is not contiguous.");
  }
  const catalog = value.artifacts.find((artifact) => artifact.path === CATALOG_PATH);
  if (catalog && catalog.install_order !== value.artifacts.length - 1) {
    throw transactionError("CATALOG_TRANSACTION_JOURNAL_UNTRUSTED", "The catalog artifact must be installed last.");
  }
  return Object.freeze(value);
}

function lockOwner(command, invocationToken) {
  return {
    schema_version: STATE_SCHEMA_VERSION,
    transaction_kind: TRANSACTION_KIND,
    invocation_token: invocationToken,
    pid: process.pid,
    hostname: os.hostname(),
    command,
    started_at_utc: new Date().toISOString(),
  };
}

function validLockOwner(owner) {
  return Boolean(
    hasExactKeys(owner, [
      "schema_version",
      "transaction_kind",
      "invocation_token",
      "pid",
      "hostname",
      "command",
      "started_at_utc",
    ])
      && owner.schema_version === STATE_SCHEMA_VERSION
      && owner.transaction_kind === TRANSACTION_KIND
      && UUID_V4_PATTERN.test(owner.invocation_token)
      && Number.isInteger(owner.pid)
      && owner.pid > 0
      && typeof owner.hostname === "string"
      && owner.hostname.length > 0
      && typeof owner.command === "string"
      && owner.command.length > 0
      && isCanonicalTimestamp(owner.started_at_utc),
  );
}

function acquireLock(paths, command, invocationToken = randomUUID()) {
  try {
    mkdirSync(paths.lockDir, { mode: 0o700 });
    fsyncDirectory(paths.transactionDir);
  } catch (error) {
    if (error?.code === "EEXIST") {
      throw transactionError(
        "CATALOG_TRANSACTION_LOCKED",
        `Catalog artifact transaction lock already exists. ${recoverHint()}`,
        { cause: error },
      );
    }
    throw error;
  }
  try {
    const ownerPath = paths.lockOwnerPath;
    writeExclusiveFile(ownerPath, Buffer.from(renderJson(lockOwner(command, invocationToken)), "utf8"));
    fsyncDirectory(paths.lockDir);
  } catch (error) {
    rmSync(paths.lockDir, { recursive: true, force: true });
    fsyncDirectory(paths.transactionDir);
    throw error;
  }
  return invocationToken;
}

function releasedLockPaths(paths) {
  if (!existsSync(paths.transactionDir)) {
    return [];
  }
  return readdirSync(paths.transactionDir)
    .map((entry) => ({ entry, match: RELEASED_LOCK_PATTERN.exec(entry) }))
    .filter(({ match }) => match !== null)
    .map(({ entry, match }) => {
      const releasedPath = path.join(paths.transactionDir, entry);
      requirePlainDirectory(releasedPath, "Released catalog transaction lock");
      const names = readdirSync(releasedPath);
      if (names.length !== 1 || names[0] !== "owner.json") {
        throw transactionError("CATALOG_TRANSACTION_RELEASED_LOCK_UNTRUSTED", `Released lock contains unexpected entries: ${releasedPath}`);
      }
      const owner = safeUtf8Json(path.join(releasedPath, "owner.json"), "Released catalog transaction lock owner");
      if (!validLockOwner(owner) || owner.invocation_token !== match[1]) {
        throw transactionError("CATALOG_TRANSACTION_RELEASED_LOCK_UNTRUSTED", `Released lock owner token does not match: ${releasedPath}`);
      }
      return releasedPath;
    });
}

function moveOwnedLockToResidue(paths, invocationToken) {
  if (!existsSync(paths.lockDir)) {
    return null;
  }
  let owner;
  try {
    owner = safeUtf8Json(paths.lockOwnerPath, "Catalog transaction lock owner");
  } catch {
    return null;
  }
  if (!validLockOwner(owner) || owner.invocation_token !== invocationToken) {
    return null;
  }
  const residue = path.join(paths.transactionDir, `.lock.released.${invocationToken}`);
  renameSync(paths.lockDir, residue);
  fsyncDirectory(paths.transactionDir);
  const movedOwner = safeUtf8Json(path.join(residue, "owner.json"), "Released catalog transaction lock owner");
  if (!validLockOwner(movedOwner) || movedOwner.invocation_token !== invocationToken) {
    if (!existsSync(paths.lockDir)) {
      renameSync(residue, paths.lockDir);
      fsyncDirectory(paths.transactionDir);
    }
    throw transactionError(
      "CATALOG_TRANSACTION_LOCK_OWNERSHIP_CHANGED",
      "Catalog transaction lock ownership changed while release was in progress.",
    );
  }
  return residue;
}

function releaseLock(paths, invocationToken) {
  const residue = moveOwnedLockToResidue(paths, invocationToken);
  if (residue === null) {
    return false;
  }
  rmSync(residue, { recursive: true });
  fsyncDirectory(paths.transactionDir);
  return true;
}

function pidIsLive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return error?.code !== "ESRCH";
  }
}

function inspectExistingLock(paths, force) {
  if (!existsSync(paths.lockDir)) {
    return Object.freeze({ exists: false, trusted: false, forced: false, owner: null });
  }
  let owner;
  try {
    requirePlainDirectory(paths.lockDir, "Catalog transaction lock");
    owner = safeUtf8Json(paths.lockOwnerPath, "Catalog transaction lock owner");
  } catch (error) {
    if (!force) {
      throw transactionError(
        "CATALOG_TRANSACTION_FORCE_REQUIRED",
        "Catalog transaction lock is malformed; explicit stale-lock force is required.",
        { cause: error },
      );
    }
    return Object.freeze({ exists: true, trusted: false, forced: true, owner: null });
  }
  if (!validLockOwner(owner)) {
    if (!force) {
      throw transactionError(
        "CATALOG_TRANSACTION_FORCE_REQUIRED",
        "Catalog transaction lock owner is malformed; explicit stale-lock force is required.",
      );
    }
    return Object.freeze({ exists: true, trusted: false, forced: true, owner });
  }
  if (owner.hostname !== os.hostname()) {
    if (!force) {
      throw transactionError(
        "CATALOG_TRANSACTION_FORCE_REQUIRED",
        `Catalog transaction lock belongs to foreign host ${owner.hostname}; explicit stale-lock force is required.`,
      );
    }
    return Object.freeze({ exists: true, trusted: true, forced: true, owner });
  }
  if (pidIsLive(owner.pid)) {
    throw transactionError(
      "CATALOG_TRANSACTION_LIVE_LOCK",
      `Catalog transaction lock is owned by live process ${owner.pid} on ${owner.hostname}; recovery is refused.`,
    );
  }
  return Object.freeze({ exists: true, trusted: true, forced: false, owner });
}

function breakInspectedLock(paths, inspection) {
  if (!inspection.exists) {
    return;
  }
  if (inspection.trusted) {
    if (!releaseLock(paths, inspection.owner.invocation_token)) {
      throw transactionError(
        "CATALOG_TRANSACTION_LOCK_CHANGED",
        "Catalog transaction lock changed after recovery inspected it; retry recovery.",
      );
    }
    return;
  }
  const stat = lstatSync(paths.lockDir);
  if (stat.isSymbolicLink()) {
    unlinkSync(paths.lockDir);
  } else {
    rmSync(paths.lockDir, { recursive: true });
  }
  fsyncDirectory(paths.transactionDir);
}

function journalTemporaryPaths(paths) {
  if (!existsSync(paths.transactionDir)) {
    return [];
  }
  return readdirSync(paths.transactionDir)
    .filter((entry) => JOURNAL_TEMP_PATTERN.test(entry))
    .map((entry) => path.join(paths.transactionDir, entry))
    .map((temporaryPath) => {
      safeFileSnapshot(temporaryPath, "Catalog transaction journal temporary", { allowMissing: false });
      return temporaryPath;
    });
}

function recognizedTransactionEntries(paths) {
  if (!existsSync(paths.transactionDir)) {
    return;
  }
  const known = new Set(["lock", "journal.json", "stage", "backup"]);
  const unexpected = readdirSync(paths.transactionDir).filter(
    (entry) => !known.has(entry) && !JOURNAL_TEMP_PATTERN.test(entry) && !RELEASED_LOCK_PATTERN.test(entry),
  );
  if (unexpected.length > 0) {
    throw transactionError(
      "CATALOG_TRANSACTION_UNRECOGNIZED_STATE",
      `Catalog transaction state contains unrecognized entries: ${unexpected.join(", ")}`,
    );
  }
  releasedLockPaths(paths);
  journalTemporaryPaths(paths);
}

function assertNormalStateClean(paths) {
  if (!existsSync(paths.transactionDir)) {
    return;
  }
  requirePlainDirectory(paths.stateRoot, "Catalog transaction state root");
  requirePlainDirectory(paths.transactionDir, "Catalog transaction state directory");
  recognizedTransactionEntries(paths);
  const entries = readdirSync(paths.transactionDir);
  if (entries.length > 0) {
    throw transactionError(
      "CATALOG_TRANSACTION_RECOVERY_REQUIRED",
      `Catalog transaction recovery state already exists. ${recoverHint()}`,
    );
  }
}

function journalForPlan(command, transactionId, artifacts) {
  const now = new Date().toISOString();
  return {
    schema_version: STATE_SCHEMA_VERSION,
    transaction_kind: TRANSACTION_KIND,
    transaction_id: transactionId,
    command,
    phase: "preparing",
    created_at_utc: now,
    updated_at_utc: now,
    artifacts: artifacts.map((artifact) => ({
      path: artifact.relativePath,
      install_order: artifact.installOrder,
      old: descriptorOf(artifact.targetSnapshot),
      new: artifact.newDescriptor,
      write_required: artifact.writeRequired,
    })),
  };
}

function writeJournalPhase(paths, journal, phase) {
  if (!PHASES.includes(phase)) {
    throw transactionError("CATALOG_TRANSACTION_PHASE_INVALID", `Unsupported catalog transaction phase: ${phase}`);
  }
  const next = validateJournal({ ...journal, phase, updated_at_utc: new Date().toISOString() });
  writeJsonAtomic(paths.journalPath, next);
  return next;
}

function peekTrustedJournal(paths) {
  if (existsSync(paths.journalPath)) {
    return validateJournal(safeUtf8Json(paths.journalPath, "Catalog transaction journal"));
  }
  const temporaries = journalTemporaryPaths(paths);
  if (temporaries.length === 0) {
    return null;
  }
  if (temporaries.length !== 1) {
    throw transactionError(
      "CATALOG_TRANSACTION_TRUSTED_JOURNAL_REQUIRED",
      "Catalog transaction has multiple journal temporaries and no authoritative journal.",
    );
  }
  return validateJournal(safeUtf8Json(temporaries[0], "Catalog transaction journal temporary"));
}

function readTrustedJournal(paths) {
  if (existsSync(paths.journalPath)) {
    return validateJournal(safeUtf8Json(paths.journalPath, "Catalog transaction journal"));
  }
  const temporaries = journalTemporaryPaths(paths);
  if (temporaries.length === 0) {
    if (existsSync(paths.stageDir) || existsSync(paths.backupDir)) {
      throw transactionError(
        "CATALOG_TRANSACTION_TRUSTED_JOURNAL_REQUIRED",
        "Catalog transaction has stage or backup state without a trustworthy journal.",
      );
    }
    return null;
  }
  if (temporaries.length !== 1) {
    throw transactionError(
      "CATALOG_TRANSACTION_TRUSTED_JOURNAL_REQUIRED",
      "Catalog transaction has multiple journal temporaries and no authoritative journal.",
    );
  }
  const journal = validateJournal(safeUtf8Json(temporaries[0], "Catalog transaction journal temporary"));
  assertStateTreesRecognized(paths, journal);
  renameSync(temporaries[0], paths.journalPath);
  fsyncDirectory(paths.transactionDir);
  return journal;
}

function invokeSync(callback, context, label) {
  if (typeof callback !== "function") {
    return;
  }
  const result = callback(Object.freeze(context));
  if (result && typeof result.then === "function") {
    throw transactionError(
      "CATALOG_TRANSACTION_ASYNC_CALLBACK",
      `${label} must be synchronous so filesystem phases cannot advance after control returns.`,
    );
  }
}

function prepareArtifactPlan(paths, artifacts) {
  if (!Array.isArray(artifacts) || artifacts.length === 0) {
    throw transactionError("CATALOG_TRANSACTION_ARTIFACTS_REQUIRED", "Catalog transaction requires at least one artifact.");
  }
  const rootIdentity = identityOf(requirePlainDirectory(paths.root, "Catalog repository root"));
  const seen = new Set();
  const raw = artifacts.map((artifact, originalIndex) => {
    const relativePath = normalizedArtifactPath(artifact?.path);
    if (seen.has(relativePath)) {
      throw transactionError("CATALOG_TRANSACTION_PATH_DUPLICATE", `Catalog artifact path is duplicated: ${relativePath}`);
    }
    seen.add(relativePath);
    if (typeof artifact.content !== "string" && !Buffer.isBuffer(artifact.content)) {
      throw transactionError("CATALOG_TRANSACTION_CONTENT_INVALID", `Catalog artifact content must be text or bytes: ${relativePath}`);
    }
    const mode = artifact.mode === undefined ? 0o644 : artifact.mode;
    if (!Number.isInteger(mode) || mode < 0 || mode > 0o777) {
      throw transactionError("CATALOG_TRANSACTION_MODE_INVALID", `Catalog artifact mode is invalid: ${relativePath}`);
    }
    const bytes = Buffer.isBuffer(artifact.content)
      ? Buffer.from(artifact.content)
      : Buffer.from(artifact.content, "utf8");
    const outputPath = path.join(paths.root, ...relativeSegments(relativePath));
    const parentPath = path.dirname(outputPath);
    inspectDirectoryChain(paths.root, parentPath, `Catalog artifact ${relativePath} parent`, { allowMissing: true });
    ensureDirectoryChain(paths.root, parentPath, `Catalog artifact ${relativePath} parent`, { mode: 0o755 });
    const parentStat = inspectDirectoryChain(paths.root, parentPath, `Catalog artifact ${relativePath} parent`);
    return {
      relativePath,
      originalIndex,
      bytes,
      outputPath,
      parentPath,
      parentIdentity: identityOf(parentStat),
      rootIdentity,
      targetSnapshot: safeFileSnapshot(outputPath, `Catalog artifact ${relativePath}`),
      newDescriptor: Object.freeze({ sha256: sha256(bytes), byte_length: bytes.length, mode }),
    };
  });

  const ordered = [
    ...raw.filter((artifact) => artifact.relativePath !== CATALOG_PATH),
    ...raw.filter((artifact) => artifact.relativePath === CATALOG_PATH),
  ];
  const orderByPath = new Map(ordered.map((artifact, index) => [artifact.relativePath, index]));
  return raw
    .map((artifact) => ({
      ...artifact,
      installOrder: orderByPath.get(artifact.relativePath),
      writeRequired:
        artifact.targetSnapshot === null
        || !sameDescriptor(descriptorOf(artifact.targetSnapshot), artifact.newDescriptor),
      stagePath: path.join(paths.stageDir, ...relativeSegments(artifact.relativePath)),
      backupPath: path.join(paths.backupDir, ...relativeSegments(artifact.relativePath)),
    }))
    .sort((left, right) => left.installOrder - right.installOrder);
}

function planFromJournal(paths, journal) {
  return [...journal.artifacts]
    .sort((left, right) => left.install_order - right.install_order)
    .map((artifact) => ({
      relativePath: artifact.path,
      installOrder: artifact.install_order,
      targetSnapshot: artifact.old,
      newDescriptor: artifact.new,
      writeRequired: artifact.write_required,
      outputPath: path.join(paths.root, ...relativeSegments(artifact.path)),
      parentPath: path.dirname(path.join(paths.root, ...relativeSegments(artifact.path))),
      stagePath: path.join(paths.stageDir, ...relativeSegments(artifact.path)),
      backupPath: path.join(paths.backupDir, ...relativeSegments(artifact.path)),
    }));
}

function assertRootAndParentUnchanged(paths, artifact) {
  const rootStat = requirePlainDirectory(paths.root, "Catalog repository root");
  if (artifact.rootIdentity && !sameIdentity(rootStat, artifact.rootIdentity)) {
    throw transactionError("CATALOG_TRANSACTION_ROOT_CHANGED", "Catalog repository root changed during publication.");
  }
  const parentStat = inspectDirectoryChain(paths.root, artifact.parentPath, `Catalog artifact ${artifact.relativePath} parent`);
  if (artifact.parentIdentity && !sameIdentity(parentStat, artifact.parentIdentity)) {
    throw transactionError(
      "CATALOG_TRANSACTION_PARENT_CHANGED",
      `Catalog artifact parent changed during publication: ${artifact.relativePath}`,
    );
  }
}

function assertTargetBaseline(artifact) {
  const current = safeFileSnapshot(artifact.outputPath, `Catalog artifact ${artifact.relativePath}`);
  const baseline = artifact.targetSnapshot;
  if (
    (current === null) !== (baseline === null)
    || (current !== null && (
      !sameDescriptor(current, baseline)
      || (baseline.dev !== undefined && !sameIdentity(current, baseline))
    ))
  ) {
    throw transactionError(
      "CATALOG_TRANSACTION_TARGET_CHANGED",
      `Catalog artifact changed after its baseline was captured: ${artifact.relativePath}`,
    );
  }
}

function ensureMirroredParent(root, filePath, label) {
  const parent = path.dirname(filePath);
  ensureDirectoryChain(root, parent, label);
  return parent;
}

function stageArtifacts(paths, plan, hooks) {
  ensureDirectoryChain(paths.root, paths.stageDir, "Catalog transaction stage");
  const stateDevice = requirePlainDirectory(paths.stageDir, "Catalog transaction stage").dev;
  for (const artifact of plan) {
    assertRootAndParentUnchanged(paths, artifact);
    const parentStat = inspectDirectoryChain(
      paths.root,
      artifact.parentPath,
      `Catalog artifact ${artifact.relativePath} parent`,
    );
    if (parentStat.dev !== stateDevice) {
      throw transactionError(
        "CATALOG_TRANSACTION_CROSS_DEVICE",
        `Catalog artifact and transaction state must share a filesystem: ${artifact.relativePath}`,
      );
    }
    if (!artifact.writeRequired) {
      continue;
    }
    const stageParent = ensureMirroredParent(paths.stageDir, artifact.stagePath, "Catalog transaction stage path");
    writeExclusiveFile(artifact.stagePath, artifact.bytes, { mode: artifact.newDescriptor.mode });
    fsyncDirectory(stageParent);
    const staged = safeFileSnapshot(artifact.stagePath, `Staged catalog artifact ${artifact.relativePath}`, { allowMissing: false });
    if (!sameDescriptor(staged, artifact.newDescriptor)) {
      throw transactionError("CATALOG_TRANSACTION_STAGE_MISMATCH", `Staged catalog artifact does not match its planned bytes: ${artifact.relativePath}`);
    }
    invokeSync(
      hooks.afterArtifactStaged,
      { path: artifact.relativePath, installOrder: artifact.installOrder },
      "afterArtifactStaged",
    );
  }
}

function verifyPreparedPlan(paths, plan) {
  for (const artifact of plan) {
    assertRootAndParentUnchanged(paths, artifact);
    assertTargetBaseline(artifact);
    const staged = safeFileSnapshot(artifact.stagePath, `Staged catalog artifact ${artifact.relativePath}`);
    if (artifact.writeRequired) {
      if (!sameDescriptor(staged, artifact.newDescriptor)) {
        throw transactionError("CATALOG_TRANSACTION_STAGE_MISMATCH", `Staged catalog artifact changed: ${artifact.relativePath}`);
      }
    } else if (staged !== null) {
      throw transactionError("CATALOG_TRANSACTION_STAGE_UNEXPECTED", `Unchanged catalog artifact has unexpected stage state: ${artifact.relativePath}`);
    }
  }
}

function installArtifact(paths, artifact, hooks) {
  if (!artifact.writeRequired) {
    return;
  }
  invokeSync(
    hooks.beforeArtifactInstall,
    { path: artifact.relativePath, installOrder: artifact.installOrder },
    "beforeArtifactInstall",
  );
  assertRootAndParentUnchanged(paths, artifact);
  assertTargetBaseline(artifact);
  const stage = safeFileSnapshot(artifact.stagePath, `Staged catalog artifact ${artifact.relativePath}`, { allowMissing: false });
  if (!sameDescriptor(stage, artifact.newDescriptor)) {
    throw transactionError("CATALOG_TRANSACTION_STAGE_MISMATCH", `Staged catalog artifact changed: ${artifact.relativePath}`);
  }

  if (artifact.targetSnapshot !== null) {
    const backupParent = ensureMirroredParent(paths.backupDir, artifact.backupPath, "Catalog transaction backup path");
    if (existsSync(artifact.backupPath)) {
      throw transactionError("CATALOG_TRANSACTION_BACKUP_EXISTS", `Catalog backup already exists: ${artifact.relativePath}`);
    }
    renameSync(artifact.outputPath, artifact.backupPath);
    fsyncDirectory(artifact.parentPath);
    fsyncDirectory(backupParent);
    const moved = safeFileSnapshot(artifact.backupPath, `Catalog backup ${artifact.relativePath}`, { allowMissing: false });
    if (!sameIdentity(moved, artifact.targetSnapshot) || !sameDescriptor(moved, artifact.targetSnapshot)) {
      if (!existsSync(artifact.outputPath)) {
        renameSync(artifact.backupPath, artifact.outputPath);
        fsyncDirectory(artifact.parentPath);
        fsyncDirectory(backupParent);
      }
      throw transactionError(
        "CATALOG_TRANSACTION_TARGET_CHANGED",
        `The artifact moved to backup was not the recorded baseline: ${artifact.relativePath}`,
      );
    }
    invokeSync(
      hooks.afterArtifactBackedUp,
      { path: artifact.relativePath, installOrder: artifact.installOrder },
      "afterArtifactBackedUp",
    );
  }

  try {
    linkSync(artifact.stagePath, artifact.outputPath);
  } catch (error) {
    throw transactionError(
      "CATALOG_TRANSACTION_INSTALL_NO_CLOBBER",
      `Catalog artifact target appeared before no-clobber installation: ${artifact.relativePath}`,
      { cause: error },
    );
  }
  fsyncDirectory(artifact.parentPath);
  const installed = safeFileSnapshot(artifact.outputPath, `Installed catalog artifact ${artifact.relativePath}`, { allowMissing: false });
  if (!sameIdentity(installed, stage) || !sameDescriptor(installed, artifact.newDescriptor)) {
    throw transactionError("CATALOG_TRANSACTION_INSTALL_MISMATCH", `Installed catalog artifact does not match its stage: ${artifact.relativePath}`);
  }
  unlinkSync(artifact.stagePath);
  fsyncDirectory(path.dirname(artifact.stagePath));
  invokeSync(
    hooks.afterArtifactInstalled,
    { path: artifact.relativePath, installOrder: artifact.installOrder },
    "afterArtifactInstalled",
  );
}

function classifySnapshot(snapshot, oldDescriptor, newDescriptor) {
  if (snapshot === null) {
    return "missing";
  }
  if (
    oldDescriptor
    && sameDescriptor(snapshot, oldDescriptor)
    && sameDescriptor(snapshot, newDescriptor)
  ) {
    return "old_and_new";
  }
  if (oldDescriptor && sameDescriptor(snapshot, oldDescriptor)) {
    return "old";
  }
  if (sameDescriptor(snapshot, newDescriptor)) {
    return "new";
  }
  return "unknown";
}

function artifactStates(artifact) {
  const current = safeFileSnapshot(artifact.outputPath, `Current catalog artifact ${artifact.relativePath}`);
  const stage = safeFileSnapshot(artifact.stagePath, `Staged catalog artifact ${artifact.relativePath}`);
  const backup = safeFileSnapshot(artifact.backupPath, `Catalog backup ${artifact.relativePath}`);
  return Object.freeze({
    current: Object.freeze({ snapshot: current, kind: classifySnapshot(current, artifact.targetSnapshot, artifact.newDescriptor) }),
    stage: Object.freeze({ snapshot: stage, kind: classifySnapshot(stage, artifact.targetSnapshot, artifact.newDescriptor) }),
    backup: Object.freeze({ snapshot: backup, kind: classifySnapshot(backup, artifact.targetSnapshot, artifact.newDescriptor) }),
  });
}

function expectedTreeDirectories(allowedFiles) {
  const directories = new Set([""]);
  for (const file of allowedFiles) {
    const segments = relativeSegments(file);
    for (let index = 1; index < segments.length; index += 1) {
      directories.add(segments.slice(0, index).join("/"));
    }
  }
  return directories;
}

function assertStateTreeInventory(treeRoot, allowedFiles, label) {
  if (!existsSync(treeRoot)) {
    return;
  }
  requirePlainDirectory(treeRoot, label);
  const allowed = new Set(allowedFiles);
  const allowedDirectories = expectedTreeDirectories(allowedFiles);
  function visit(directory, relativeDirectory) {
    for (const name of readdirSync(directory)) {
      const absolute = path.join(directory, name);
      const relative = relativeDirectory ? `${relativeDirectory}/${name}` : name;
      const stat = lstatSync(absolute);
      if (stat.isSymbolicLink()) {
        throw transactionError("CATALOG_TRANSACTION_SYMLINK", `${label} contains a symbolic link: ${absolute}`);
      }
      if (stat.isDirectory()) {
        if (!allowedDirectories.has(relative)) {
          throw transactionError("CATALOG_TRANSACTION_UNRECOGNIZED_STATE", `${label} contains an unexpected directory: ${relative}`);
        }
        visit(absolute, relative);
      } else if (stat.isFile()) {
        if (!allowed.has(relative)) {
          throw transactionError("CATALOG_TRANSACTION_UNRECOGNIZED_STATE", `${label} contains an unexpected file: ${relative}`);
        }
      } else {
        throw transactionError("CATALOG_TRANSACTION_UNRECOGNIZED_STATE", `${label} contains a special file: ${relative}`);
      }
    }
  }
  visit(treeRoot, "");
}

function assertStateTreesRecognized(paths, journal) {
  const plan = planFromJournal(paths, journal);
  assertStateTreeInventory(
    paths.stageDir,
    plan.filter((artifact) => artifact.writeRequired).map((artifact) => artifact.relativePath),
    "Catalog transaction stage",
  );
  assertStateTreeInventory(
    paths.backupDir,
    plan
      .filter((artifact) => artifact.writeRequired && artifact.targetSnapshot !== null)
      .map((artifact) => artifact.relativePath),
    "Catalog transaction backup",
  );
}

function inspectArtifactSet(paths, journal) {
  assertStateTreesRecognized(paths, journal);
  const rootIdentity = identityOf(requirePlainDirectory(paths.root, "Catalog repository root"));
  const stateDevice = requirePlainDirectory(paths.transactionDir, "Catalog transaction state directory").dev;
  const plan = planFromJournal(paths, journal).map((artifact) => {
    const parentStat = inspectDirectoryChain(
      paths.root,
      artifact.parentPath,
      `Catalog artifact ${artifact.relativePath} parent`,
    );
    if (parentStat.dev !== stateDevice) {
      throw transactionError(
        "CATALOG_TRANSACTION_CROSS_DEVICE",
        `Catalog artifact and recovery state no longer share a filesystem: ${artifact.relativePath}`,
      );
    }
    return {
      ...artifact,
      rootIdentity,
      parentIdentity: identityOf(parentStat),
    };
  });
  const inspected = plan.map((artifact) => ({ artifact, states: artifactStates(artifact) }));
  for (const { artifact, states } of inspected) {
    for (const [location, state] of Object.entries(states)) {
      if (state.kind === "unknown") {
        throw transactionError(
          "CATALOG_TRANSACTION_DIGEST_MISMATCH",
          `Catalog recovery found unrecognized ${location} bytes for ${artifact.relativePath}.`,
        );
      }
    }
    if (!artifact.writeRequired) {
      if (states.current.kind !== "old_and_new" || states.stage.kind !== "missing" || states.backup.kind !== "missing") {
        throw transactionError(
          "CATALOG_TRANSACTION_STATE_CONTRADICTION",
          `Unchanged catalog artifact has contradictory transaction state: ${artifact.relativePath}`,
        );
      }
      continue;
    }
    if (!["missing", "new"].includes(states.stage.kind)) {
      throw transactionError("CATALOG_TRANSACTION_STATE_CONTRADICTION", `Catalog stage is not new bytes: ${artifact.relativePath}`);
    }
    if (artifact.targetSnapshot === null) {
      if (states.backup.kind !== "missing") {
        throw transactionError("CATALOG_TRANSACTION_STATE_CONTRADICTION", `Absent-baseline artifact has a backup: ${artifact.relativePath}`);
      }
    } else if (!["missing", "old"].includes(states.backup.kind)) {
      throw transactionError("CATALOG_TRANSACTION_STATE_CONTRADICTION", `Catalog backup is not old bytes: ${artifact.relativePath}`);
    }
  }
  return inspected;
}

function verifyInstalledSet(paths, journal) {
  const inspected = inspectArtifactSet(paths, journal);
  for (const { artifact, states } of inspected) {
    if (!["new", "old_and_new"].includes(states.current.kind)) {
      throw transactionError(
        "CATALOG_TRANSACTION_INSTALLED_SET_MISMATCH",
        `Catalog artifact set is not fully installed: ${artifact.relativePath}`,
      );
    }
    if (artifact.writeRequired && artifact.targetSnapshot !== null && states.backup.kind !== "old") {
      throw transactionError(
        "CATALOG_TRANSACTION_BACKUP_MISSING",
        `Catalog artifact old backup is missing before commit: ${artifact.relativePath}`,
      );
    }
  }
  return inspected;
}

function rollbackArtifactSet(paths, journal) {
  const inspected = inspectArtifactSet(paths, journal);
  for (const { artifact, states } of [...inspected].reverse()) {
    assertRootAndParentUnchanged(paths, artifact);
    if (!artifact.writeRequired) {
      continue;
    }
    if (artifact.targetSnapshot === null) {
      if (states.current.kind === "new") {
        if (states.stage.kind === "missing") {
          ensureDirectoryChain(paths.stageDir, path.dirname(artifact.stagePath), "Catalog rollback stage");
          linkSync(artifact.outputPath, artifact.stagePath);
          fsyncDirectory(path.dirname(artifact.stagePath));
          const preserved = safeFileSnapshot(
            artifact.stagePath,
            `Preserved new catalog artifact ${artifact.relativePath}`,
            { allowMissing: false },
          );
          if (!sameIdentity(preserved, states.current.snapshot) || !sameDescriptor(preserved, artifact.newDescriptor)) {
            throw transactionError(
              "CATALOG_TRANSACTION_ROLLBACK_UNSAFE",
              `Could not preserve the installed artifact before restoring absence: ${artifact.relativePath}`,
            );
          }
          const current = safeFileSnapshot(
            artifact.outputPath,
            `Installed catalog artifact ${artifact.relativePath}`,
            { allowMissing: false },
          );
          if (!sameIdentity(current, states.current.snapshot)) {
            throw transactionError(
              "CATALOG_TRANSACTION_TARGET_CHANGED",
              `Catalog artifact changed while rollback was preserving it: ${artifact.relativePath}`,
            );
          }
          unlinkSync(artifact.outputPath);
        } else {
          if (!sameIdentity(states.current.snapshot, states.stage.snapshot)) {
            throw transactionError(
              "CATALOG_TRANSACTION_STATE_CONTRADICTION",
              `Current and staged new artifacts do not share transaction ownership: ${artifact.relativePath}`,
            );
          }
          const current = safeFileSnapshot(
            artifact.outputPath,
            `Installed catalog artifact ${artifact.relativePath}`,
            { allowMissing: false },
          );
          if (!sameIdentity(current, states.current.snapshot)) {
            throw transactionError(
              "CATALOG_TRANSACTION_TARGET_CHANGED",
              `Catalog artifact changed while rollback was removing it: ${artifact.relativePath}`,
            );
          }
          unlinkSync(artifact.outputPath);
        }
        fsyncDirectory(artifact.parentPath);
        fsyncDirectory(path.dirname(artifact.stagePath));
      } else if (states.current.kind !== "missing") {
        throw transactionError("CATALOG_TRANSACTION_ROLLBACK_UNSAFE", `Cannot restore absent baseline for ${artifact.relativePath}.`);
      }
      continue;
    }

    if (states.current.kind === "old") {
      continue;
    }
    if (!["new", "missing"].includes(states.current.kind) || states.backup.kind !== "old") {
      throw transactionError(
        "CATALOG_TRANSACTION_OLD_ARTIFACT_MISSING",
        `Cannot restore the recorded old artifact for ${artifact.relativePath}.`,
      );
    }
    if (states.current.kind === "new") {
      if (states.stage.kind === "missing") {
        ensureDirectoryChain(paths.stageDir, path.dirname(artifact.stagePath), "Catalog rollback stage");
        linkSync(artifact.outputPath, artifact.stagePath);
        fsyncDirectory(path.dirname(artifact.stagePath));
        const preserved = safeFileSnapshot(
          artifact.stagePath,
          `Preserved new catalog artifact ${artifact.relativePath}`,
          { allowMissing: false },
        );
        if (!sameIdentity(preserved, states.current.snapshot) || !sameDescriptor(preserved, artifact.newDescriptor)) {
          throw transactionError(
            "CATALOG_TRANSACTION_ROLLBACK_UNSAFE",
            `Could not preserve the installed artifact before restoring old bytes: ${artifact.relativePath}`,
          );
        }
      } else {
        if (!sameIdentity(states.current.snapshot, states.stage.snapshot)) {
          throw transactionError(
            "CATALOG_TRANSACTION_STATE_CONTRADICTION",
            `Current and staged new artifacts do not share transaction ownership: ${artifact.relativePath}`,
          );
        }
      }
      const current = safeFileSnapshot(
        artifact.outputPath,
        `Installed catalog artifact ${artifact.relativePath}`,
        { allowMissing: false },
      );
      if (!sameIdentity(current, states.current.snapshot)) {
        throw transactionError(
          "CATALOG_TRANSACTION_TARGET_CHANGED",
          `Catalog artifact changed while rollback was preserving it: ${artifact.relativePath}`,
        );
      }
      unlinkSync(artifact.outputPath);
      fsyncDirectory(artifact.parentPath);
      fsyncDirectory(path.dirname(artifact.stagePath));
    }
    const backup = safeFileSnapshot(
      artifact.backupPath,
      `Catalog backup ${artifact.relativePath}`,
      { allowMissing: false },
    );
    try {
      linkSync(artifact.backupPath, artifact.outputPath);
    } catch (error) {
      throw transactionError(
        "CATALOG_TRANSACTION_RESTORE_NO_CLOBBER",
        `Catalog target appeared before no-clobber rollback restoration: ${artifact.relativePath}`,
        { cause: error },
      );
    }
    fsyncDirectory(artifact.parentPath);
    const restored = safeFileSnapshot(
      artifact.outputPath,
      `Restored catalog artifact ${artifact.relativePath}`,
      { allowMissing: false },
    );
    if (!sameIdentity(restored, backup) || !sameDescriptor(restored, artifact.targetSnapshot)) {
      throw transactionError(
        "CATALOG_TRANSACTION_ROLLBACK_VERIFY_FAILED",
        `Restored catalog artifact does not match its backup: ${artifact.relativePath}`,
      );
    }
    unlinkSync(artifact.backupPath);
    fsyncDirectory(path.dirname(artifact.backupPath));
  }

  const plan = planFromJournal(paths, journal);
  for (const artifact of plan) {
    const current = safeFileSnapshot(artifact.outputPath, `Rolled-back catalog artifact ${artifact.relativePath}`);
    if (artifact.targetSnapshot === null) {
      if (current !== null) {
        throw transactionError("CATALOG_TRANSACTION_ROLLBACK_VERIFY_FAILED", `Catalog rollback did not restore absence: ${artifact.relativePath}`);
      }
    } else if (!sameDescriptor(current, artifact.targetSnapshot)) {
      throw transactionError("CATALOG_TRANSACTION_ROLLBACK_VERIFY_FAILED", `Catalog rollback did not restore old bytes: ${artifact.relativePath}`);
    }
  }
  return "rolled_back";
}

function finishCommittedSet(paths, journal) {
  const inspected = inspectArtifactSet(paths, journal);
  for (const { artifact, states } of inspected) {
    if (!["new", "old_and_new"].includes(states.current.kind)) {
      throw transactionError(
        "CATALOG_TRANSACTION_COMMITTED_SET_MISMATCH",
        `Committed catalog artifact is not the recorded new version: ${artifact.relativePath}`,
      );
    }
  }
  return "finished";
}

function removeTransactionTrees(paths) {
  if (existsSync(paths.stageDir)) {
    rmSync(paths.stageDir, { recursive: true });
    fsyncDirectory(paths.transactionDir);
  }
  if (existsSync(paths.backupDir)) {
    rmSync(paths.backupDir, { recursive: true });
    fsyncDirectory(paths.transactionDir);
  }
}

function removeJournalState(paths) {
  for (const temporary of journalTemporaryPaths(paths)) {
    unlinkSync(temporary);
  }
  if (existsSync(paths.journalPath)) {
    unlinkSync(paths.journalPath);
  }
  fsyncDirectory(paths.transactionDir);
  for (const residue of releasedLockPaths(paths)) {
    rmSync(residue, { recursive: true });
  }
  fsyncDirectory(paths.transactionDir);
}

function cleanupTransactionEvidence(paths) {
  removeTransactionTrees(paths);
  removeJournalState(paths);
}

function removeEmptyStateContainers(paths, { allowSuccessorLock = false } = {}) {
  try {
    rmdirSync(paths.transactionDir);
    fsyncDirectory(paths.stateRoot);
  } catch (error) {
    if (error?.code === "ENOENT") {
      return;
    }
    if (error?.code === "ENOTEMPTY" && allowSuccessorLock) {
      const entries = readdirSync(paths.transactionDir);
      if (entries.length === 1 && entries[0] === "lock") {
        return;
      }
    }
    if (error?.code === "ENOTEMPTY") {
      throw transactionError(
        "CATALOG_TRANSACTION_STATE_NOT_EMPTY",
        `Catalog transaction state still contains recovery evidence: ${paths.transactionDir}`,
        { cause: error },
      );
    }
    throw error;
  }
  try {
    rmdirSync(paths.stateRoot);
    fsyncDirectory(path.dirname(paths.stateRoot));
  } catch (error) {
    if (!["ENOENT", "ENOTEMPTY"].includes(error?.code)) {
      throw error;
    }
  }
}

function phaseContext(paths, journal) {
  return {
    root: paths.root,
    transactionDir: paths.transactionDir,
    journalPath: paths.journalPath,
    transactionId: journal.transaction_id,
    phase: journal.phase,
    artifacts: journal.artifacts.map((artifact) => Object.freeze({ ...artifact })),
  };
}

export function runCatalogArtifactTransaction(options) {
  const paths = catalogTransactionStatePaths({ root: options.root });
  const command = String(options.command ?? "catalog:build").trim();
  if (!command) {
    throw transactionError("CATALOG_TRANSACTION_COMMAND_REQUIRED", "Catalog transaction command must not be empty.");
  }
  assertNormalStateClean(paths);
  ensureStateContainer(paths);
  const transactionId = randomUUID();
  const invocationToken = acquireLock(paths, command, transactionId);
  let journal = null;
  let phase = null;
  let lockReleased = false;
  try {
    invokeSync(options.hooks?.afterLockAcquired, {
      root: paths.root,
      transactionDir: paths.transactionDir,
      transactionId,
    }, "afterLockAcquired");
    const supplied = typeof options.prepareArtifacts === "function"
      ? options.prepareArtifacts(Object.freeze({ root: paths.root, transactionId }))
      : options.artifacts;
    if (supplied && typeof supplied.then === "function") {
      throw transactionError("CATALOG_TRANSACTION_ASYNC_CALLBACK", "prepareArtifacts must be synchronous.");
    }
    const plan = prepareArtifactPlan(paths, supplied);
    journal = validateJournal(journalForPlan(command, transactionId, plan));
    writeJsonAtomic(paths.journalPath, journal);
    phase = "preparing";
    invokeSync(options.hooks?.onPhase, phaseContext(paths, journal), "onPhase");

    stageArtifacts(paths, plan, options.hooks ?? {});
    journal = writeJournalPhase(paths, journal, "prepared");
    phase = "prepared";
    invokeSync(options.hooks?.onPhase, phaseContext(paths, journal), "onPhase");

    verifyPreparedPlan(paths, plan);
    ensureDirectoryChain(paths.root, paths.backupDir, "Catalog transaction backup");
    journal = writeJournalPhase(paths, journal, "installing");
    phase = "installing";
    invokeSync(options.hooks?.onPhase, phaseContext(paths, journal), "onPhase");
    for (const artifact of plan) {
      installArtifact(paths, artifact, options.hooks ?? {});
    }

    verifyInstalledSet(paths, journal);
    journal = writeJournalPhase(paths, journal, "installed");
    phase = "installed";
    invokeSync(options.hooks?.onPhase, phaseContext(paths, journal), "onPhase");
    invokeSync(options.validateInstalled, phaseContext(paths, journal), "validateInstalled");
    verifyInstalledSet(paths, journal);

    journal = writeJournalPhase(paths, journal, "committed");
    phase = "committed";
    invokeSync(options.hooks?.onPhase, phaseContext(paths, journal), "onPhase");
    invokeSync(options.hooks?.beforeCleanup, phaseContext(paths, journal), "beforeCleanup");
    verifyInstalledSet(paths, journal);
    cleanupTransactionEvidence(paths);
    lockReleased = releaseLock(paths, invocationToken);
    invokeSync(options.hooks?.onLockReleased, {
      root: paths.root,
      transactionDir: paths.transactionDir,
      transactionId,
      invocationToken,
    }, "onLockReleased");
    removeEmptyStateContainers(paths, { allowSuccessorLock: lockReleased });
    return Object.freeze({
      committed: true,
      recoveryRequired: false,
      transactionId,
      artifactCount: plan.length,
      warnings: Object.freeze([]),
    });
  } catch (error) {
    if (phase === "committed") {
      const warning = `Catalog transaction ${transactionId} committed, but cleanup did not finish: ${error.message}`;
      try {
        lockReleased = releaseLock(paths, invocationToken) || lockReleased;
        removeEmptyStateContainers(paths, { allowSuccessorLock: lockReleased });
      } catch {
        // The committed journal is deliberately retained for explicit forward recovery.
      }
      return Object.freeze({
        committed: true,
        recoveryRequired: true,
        transactionId,
        artifactCount: journal?.artifacts.length ?? 0,
        warnings: Object.freeze([warning]),
      });
    }

    let rollbackError = null;
    try {
      if (journal !== null && existsSync(paths.journalPath)) {
        const trusted = validateJournal(safeUtf8Json(paths.journalPath, "Catalog transaction journal"));
        rollbackArtifactSet(paths, trusted);
        cleanupTransactionEvidence(paths);
      } else {
        removeTransactionTrees(paths);
      }
    } catch (candidate) {
      rollbackError = candidate;
    }
    try {
      lockReleased = releaseLock(paths, invocationToken) || lockReleased;
      removeEmptyStateContainers(paths, { allowSuccessorLock: lockReleased });
    } catch (candidate) {
      rollbackError ??= candidate;
    }
    if (rollbackError) {
      throw transactionError(
        "CATALOG_TRANSACTION_ROLLBACK_FAILED",
        `${error.message}\nCatalog rollback also failed: ${rollbackError.message}\n${recoverHint()}`,
        { cause: error },
      );
    }
    throw error;
  }
}

export function recoverCatalogArtifactTransaction(options) {
  const paths = catalogTransactionStatePaths({ root: options.root });
  if (!existsSync(paths.transactionDir)) {
    return Object.freeze({
      action: "nothing_to_recover",
      phase: null,
      forced: false,
      transactionId: null,
      artifactCount: 0,
      warnings: Object.freeze([]),
    });
  }
  requirePlainDirectory(paths.stateRoot, "Catalog transaction state root");
  requirePlainDirectory(paths.transactionDir, "Catalog transaction state directory");
  recognizedTransactionEntries(paths);
  const force = options.force === true;
  const lockInspection = inspectExistingLock(paths, force);
  breakInspectedLock(paths, lockInspection);
  const invocationToken = acquireLock(
    paths,
    String(options.command ?? "catalog:recover"),
  );
  let lockReleased = false;
  let action;
  let phase = null;
  let transactionId = null;
  let artifactCount = 0;
  try {
    recognizedTransactionEntries(paths);
    const journal = readTrustedJournal(paths);
    if (journal === null) {
      action = "cleared_stale_lock";
      for (const residue of releasedLockPaths(paths)) {
        rmSync(residue, { recursive: true });
      }
      for (const temporary of journalTemporaryPaths(paths)) {
        unlinkSync(temporary);
      }
      fsyncDirectory(paths.transactionDir);
    } else {
      phase = journal.phase;
      transactionId = journal.transaction_id;
      artifactCount = journal.artifacts.length;
      action = phase === "committed"
        ? finishCommittedSet(paths, journal)
        : rollbackArtifactSet(paths, journal);
      invokeSync(options.hooks?.afterRestore, {
        ...phaseContext(paths, journal),
        action,
        forced: lockInspection.forced,
      }, "afterRestore");
      if (phase === "committed") {
        finishCommittedSet(paths, journal);
      } else {
        const plan = planFromJournal(paths, journal);
        for (const artifact of plan) {
          const current = safeFileSnapshot(artifact.outputPath, `Recovered catalog artifact ${artifact.relativePath}`);
          if (
            (artifact.targetSnapshot === null && current !== null)
            || (artifact.targetSnapshot !== null && !sameDescriptor(current, artifact.targetSnapshot))
          ) {
            throw transactionError(
              "CATALOG_TRANSACTION_RECOVERY_VERIFY_FAILED",
              `Recovered catalog artifact does not match its old baseline: ${artifact.relativePath}`,
            );
          }
        }
      }
      cleanupTransactionEvidence(paths);
    }
    lockReleased = releaseLock(paths, invocationToken);
    invokeSync(options.hooks?.onLockReleased, {
      root: paths.root,
      transactionDir: paths.transactionDir,
      transactionId,
      invocationToken,
      action,
      phase,
    }, "onLockReleased");
    removeEmptyStateContainers(paths, { allowSuccessorLock: lockReleased });
    return Object.freeze({
      action,
      phase,
      forced: lockInspection.forced,
      transactionId,
      artifactCount,
      warnings: Object.freeze([]),
    });
  } catch (error) {
    try {
      lockReleased = releaseLock(paths, invocationToken) || lockReleased;
      removeEmptyStateContainers(paths, { allowSuccessorLock: lockReleased });
    } catch {
      // Preserve the primary recovery error and all transaction evidence.
    }
    throw error;
  }
}

export function inspectCatalogArtifactTransaction({ root }) {
  const paths = catalogTransactionStatePaths({ root });
  if (!existsSync(paths.transactionDir)) {
    return Object.freeze({
      status: "clean",
      phase: null,
      transactionId: null,
      artifactCount: 0,
      locked: false,
      recoveryRequired: false,
    });
  }
  requirePlainDirectory(paths.stateRoot, "Catalog transaction state root");
  requirePlainDirectory(paths.transactionDir, "Catalog transaction state directory");
  recognizedTransactionEntries(paths);
  let owner = null;
  if (existsSync(paths.lockDir)) {
    requirePlainDirectory(paths.lockDir, "Catalog transaction lock");
    owner = safeUtf8Json(paths.lockOwnerPath, "Catalog transaction lock owner");
    if (!validLockOwner(owner)) {
      throw transactionError("CATALOG_TRANSACTION_LOCK_UNTRUSTED", "Catalog transaction lock owner is malformed.");
    }
  }
  const journal = peekTrustedJournal(paths);
  const hasTrees = existsSync(paths.stageDir) || existsSync(paths.backupDir);
  if (journal === null && hasTrees) {
    throw transactionError(
      "CATALOG_TRANSACTION_TRUSTED_JOURNAL_REQUIRED",
      "Catalog transaction has stage or backup state without a trustworthy journal.",
    );
  }
  if (journal !== null) {
    assertStateTreesRecognized(paths, journal);
  }
  const recoveryRequired = journal !== null || hasTrees;
  return Object.freeze({
    status: recoveryRequired ? "recovery_required" : owner ? "locked" : "state_present",
    phase: journal?.phase ?? null,
    transactionId: journal?.transaction_id ?? null,
    artifactCount: journal?.artifacts.length ?? 0,
    locked: owner !== null,
    recoveryRequired,
  });
}
