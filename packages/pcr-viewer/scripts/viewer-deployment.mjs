import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fsyncSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  rmSync,
  writeSync,
} from "node:fs";
import path from "node:path";

export const VIEWER_DEPLOYMENT_MARKER = ".tiangong-pcr-viewer-build";

export class ViewerDeploymentError extends Error {
  constructor(code, message, options = {}) {
    super(message, options);
    this.name = "ViewerDeploymentError";
    this.code = code;
  }
}

export function commitViewerDeployment({ stageDir, outDir, failurePhase = null } = {}) {
  const target = path.resolve(requiredPath(outDir, "deployment output"));
  const stage = path.resolve(requiredPath(stageDir, "deployment stage"));
  const parent = path.dirname(target);
  if (path.dirname(stage) !== parent || stage === target) {
    throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_STAGE_INVALID", "Viewer deployment stage must be a distinct sibling of the output directory.");
  }
  recoverViewerDeployment({ outDir: target });
  assertOwnedDirectory(stage, "Viewer deployment stage");
  const journalPath = deploymentJournalPath(target);
  const backup = unusedSiblingPath(path.join(parent, `.${path.basename(target)}-deployment-backup`));
  let journal = {
    schema_version: 1,
    kind: "viewer-deployment-journal",
    phase: "deployment_prepared",
    output_name: path.basename(target),
    stage_name: path.basename(stage),
    backup_name: existsSync(target) ? path.basename(backup) : null,
  };
  writeJournal(journalPath, journal);
  interrupt(failurePhase, journal.phase);
  try {
    journal = { ...journal, phase: "old_move_prepared" };
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);
    if (journal.backup_name !== null) {
      renameSync(target, backup);
      fsyncDirectory(parent);
    }
    journal = { ...journal, phase: "old_moved" };
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);

    journal = { ...journal, phase: "new_commit_prepared" };
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);
    renameSync(stage, target);
    fsyncDirectory(parent);
    journal = { ...journal, phase: "new_committed" };
    writeJournal(journalPath, journal);
    interrupt(failurePhase, journal.phase);

    assertOwnedDirectory(target, "Viewer deployment output");
    if (journal.backup_name !== null) rmSync(backup, { recursive: true, force: true });
    rmSync(journalPath);
    fsyncDirectory(parent);
    return Object.freeze({ committed: true, recovered: false });
  } catch (error) {
    if (error?.code !== "VIEWER_DEPLOYMENT_INTERRUPTED") {
      try { recoverViewerDeployment({ outDir: target }); } catch { /* preserve the original failure and durable journal */ }
    }
    throw error;
  }
}

export function recoverViewerDeployment({ outDir } = {}) {
  const target = path.resolve(requiredPath(outDir, "deployment output"));
  const parent = path.dirname(target);
  const journalPath = deploymentJournalPath(target);
  if (!existsSync(journalPath)) return Object.freeze({ recovered: false });
  assertRegularFile(journalPath, "Viewer deployment journal");
  const journal = JSON.parse(readFileSync(journalPath, "utf8"));
  validateJournal(journal, target);
  const stage = path.join(parent, journal.stage_name);
  const backup = journal.backup_name === null ? null : path.join(parent, journal.backup_name);

  if (journal.phase === "deployment_prepared") {
    if (journal.backup_name === null && !existsSync(target) && existsSync(stage)) {
      assertOwnedDirectory(stage, "Viewer deployment stage");
      renameSync(stage, target);
    } else if (existsSync(stage)) {
      rmOwnedDirectory(stage, "Viewer deployment stage");
    }
  } else if (journal.phase === "old_move_prepared") {
    const targetExists = existsSync(target);
    const backupExists = backup !== null && existsSync(backup);
    if (targetExists && !backupExists) {
      if (existsSync(stage)) rmOwnedDirectory(stage, "Viewer deployment stage");
    } else if (!targetExists && backupExists) {
      assertOwnedDirectory(backup, "Viewer deployment backup");
      renameSync(backup, target);
      if (existsSync(stage)) rmOwnedDirectory(stage, "Viewer deployment stage");
    } else if (journal.backup_name === null && !targetExists && existsSync(stage)) {
      assertOwnedDirectory(stage, "Viewer deployment stage");
      renameSync(stage, target);
    } else {
      throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_RECOVERY_CONFLICT", "Viewer deployment old-directory move is ambiguous.");
    }
  } else if (journal.phase === "old_moved" || journal.phase === "new_commit_prepared") {
    if (journal.backup_name !== null) {
      if (existsSync(target) && journal.phase === "new_commit_prepared" && !existsSync(stage)) {
        assertOwnedDirectory(target, "Viewer deployment output");
        if (existsSync(backup)) rmOwnedDirectory(backup, "Viewer deployment backup");
      } else if (existsSync(target) || !existsSync(backup)) {
        throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_RECOVERY_CONFLICT", "Viewer deployment backup cannot be restored without overwriting another directory.");
      } else {
        assertOwnedDirectory(backup, "Viewer deployment backup");
        renameSync(backup, target);
        if (existsSync(stage)) rmOwnedDirectory(stage, "Viewer deployment stage");
      }
    } else {
      if (existsSync(target) && journal.phase === "new_commit_prepared" && !existsSync(stage)) {
        assertOwnedDirectory(target, "Viewer deployment output");
      } else if (existsSync(target) || !existsSync(stage)) {
        throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_RECOVERY_CONFLICT", "Viewer bootstrap stage cannot be committed safely.");
      } else {
        assertOwnedDirectory(stage, "Viewer deployment stage");
        renameSync(stage, target);
      }
    }
  } else if (journal.phase === "new_committed") {
    assertOwnedDirectory(target, "Viewer deployment output");
    if (backup && existsSync(backup)) rmOwnedDirectory(backup, "Viewer deployment backup");
    if (existsSync(stage)) rmOwnedDirectory(stage, "Viewer deployment stage");
  }
  rmSync(journalPath);
  fsyncDirectory(parent);
  return Object.freeze({ recovered: true, phase: journal.phase });
}

function validateJournal(journal, target) {
  const keys = Object.keys(journal ?? {}).sort();
  const expected = ["backup_name", "kind", "output_name", "phase", "schema_version", "stage_name"].sort();
  if (
    JSON.stringify(keys) !== JSON.stringify(expected) ||
    journal.schema_version !== 1 ||
    journal.kind !== "viewer-deployment-journal" ||
    journal.output_name !== path.basename(target) ||
    !["deployment_prepared", "old_move_prepared", "old_moved", "new_commit_prepared", "new_committed"].includes(journal.phase) ||
    !safeSiblingName(journal.stage_name) ||
    !new RegExp(`^\\.${escapeRegExp(journal.output_name)}-(?:build|mirror)-`, "u").test(journal.stage_name) ||
    (journal.backup_name !== null && (
      !safeSiblingName(journal.backup_name) ||
      !journal.backup_name.startsWith(`.${journal.output_name}-deployment-backup-`)
    ))
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

function assertOwnedDirectory(directory, label) {
  const stat = lstatSync(directory);
  if (stat.isSymbolicLink() || !stat.isDirectory()) throw new ViewerDeploymentError("VIEWER_DEPLOYMENT_PATH_UNSAFE", `${label} must be a real directory.`);
  assertRegularFile(path.join(directory, VIEWER_DEPLOYMENT_MARKER), `${label} marker`);
}

function rmOwnedDirectory(directory, label) {
  assertOwnedDirectory(directory, label);
  rmSync(directory, { recursive: true });
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

function unusedSiblingPath(prefix) {
  let candidate = `${prefix}-${process.pid}`;
  let suffix = 0;
  while (existsSync(candidate)) {
    suffix += 1;
    candidate = `${prefix}-${process.pid}-${suffix}`;
  }
  return candidate;
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
