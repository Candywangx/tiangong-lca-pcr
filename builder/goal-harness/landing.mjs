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
import { assertRepoPath, resolveRepoPath } from "./paths.mjs";

export function captureExpectedFiles(root, paths) {
  return Object.fromEntries(paths.map((entry) => {
    const repoPath = assertRepoPath(entry, { allowSensitive: true });
    return [repoPath, fingerprint(resolveRepoPath(root, repoPath, { allowSensitive: true }))];
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
    throw new GoalHarnessError("GOAL_LAND_RECOVERY_REQUIRED", `Incomplete landing journal requires recovery: ${journalPath}`, { journal });
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

function writeJson(filePath, value) {
  const temporary = `${filePath}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" });
  renameSync(temporary, filePath);
}
