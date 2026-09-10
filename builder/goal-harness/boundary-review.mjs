import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { closeSync, constants, fstatSync, lstatSync, openSync, readSync } from "node:fs";
import path from "node:path";

import { validateAuthorReport } from "./author-gates.mjs";
import { GoalHarnessError } from "./errors.mjs";

const MAX_FILE_BYTES = 16 * 1024 * 1024;
const MAX_REPORT_BYTES = 1024 * 1024;
const CANONICAL_FILES = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"];

/** Audit preserved author work only. Evidence remains unverified; this is never PCR acceptance. */
export function auditBoundaryReview({ task, report, baselineCommit, worktreePath }) {
  // Infrastructure takes precedence even when the remaining report is malformed.
  const unavailable = Array.isArray(report?.inventory?.unresolved)
    ? report.inventory.unresolved.filter((row) => row?.reason_code === "tiangong_cli_unavailable") : [];
  if (unavailable.length) {
    throw new GoalHarnessError("GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE", "UUID lookup infrastructure is unavailable; boundary referral cannot bypass retry handling.", {
      retryable: true, row_ids: unavailable.map((row) => row.row_id),
    });
  }
  const schema = validateAuthorReport(report);
  if (!schema.valid) fail("REPORT_INVALID", "Boundary author report does not satisfy the runtime schema.", { errors: schema.errors });
  if (!Object.hasOwn(report, "boundary_review") || report.boundary_review === null) {
    fail("REPORT_INVALID", "An explicit non-null boundary_review is required.");
  }
  const reportJson = stableJson(report);
  if (Buffer.byteLength(reportJson) > MAX_REPORT_BYTES) fail("REPORT_INVALID", "Boundary author report exceeds the read limit.");
  const request = report.boundary_review;
  if (request.summary.trim().length < 20 || request.questions.some((value) => !value.trim()) ||
    request.evidence.some((entry) => !entry.locator.trim() || !entry.observation.trim())) {
    fail("REPORT_INVALID", "Boundary review requires a substantive summary, questions, and evidence locators and observations.");
  }
  const inventory = report.inventory;
  if (inventory.total_rows !== 0 || inventory.matched_rows !== 0 || inventory.unresolved_rows !== 0 || inventory.unresolved.length ||
    report.uuid_audits.length || report.ranges.length || report.reference_product_uuid_confirmed ||
    report.bilingual.aligned || report.bilingual.en_inventory_rows !== 0 || report.bilingual.zh_inventory_rows !== 0 ||
    Object.values(report.structured_sync).some(Boolean) || report.validate.ok || report.validate.known_shared_artifact_only ||
    !report.validate.summary?.trim()) {
    fail("FINAL_CLAIMS", "Boundary referral cannot carry final PCR inventory, UUID, bilingual, sync, or validation success claims.");
  }
  if (!task || !safeRepoPath(task.pcr_path) || !task.pcr_path.startsWith("library/pcrs/") ||
    report.pcr_path !== task.pcr_path || report.cpc_code !== task.cpc_code) {
    fail("PATH_INVALID", "Reported CPC and PCR path must match the authorized task.");
  }
  const allowed = CANONICAL_FILES.map((file) => `${task.pcr_path}/${file}`).sort();
  if (!samePaths(task.allowed_files, allowed) || !samePaths(report.files, allowed)) {
    fail("PATH_INVALID", "Task and report must declare the exact four canonical files without duplicates.");
  }
  if (typeof worktreePath !== "string" || !path.isAbsolute(worktreePath) || path.resolve(worktreePath) !== worktreePath ||
    task.worktree_path !== worktreePath) fail("PATH_INVALID", "Worktree must exactly match the task's absolute path.");
  if (!/^[a-f0-9]{40,64}$/u.test(String(baselineCommit))) {
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", "Invalid baseline commit SHA.");
  }
  const worktreeParents = inspectParents(worktreePath);
  if (!worktreeParents.complete) fail("PATH_INVALID", "Author worktree does not exist.");
  if (git(worktreePath, ["rev-parse", "--show-toplevel"]).trim() !== worktreePath) fail("PATH_INVALID", "Author path is not the Git worktree root.");
  const head = git(worktreePath, ["rev-parse", "HEAD"]).trim();
  if (head !== report.commit_sha) throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", "Reported commit must equal actual author HEAD.");
  try { git(worktreePath, ["merge-base", "--is-ancestor", baselineCommit, head]); }
  catch { throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", "Author HEAD does not descend from the task baseline."); }

  // Inspect every commit, not just the net diff: reverting an unauthorized edit is not authorization.
  const committedPaths = uniquePaths(git(worktreePath, ["log", "--format=", "--name-only", "-z", "--no-renames", "-m", `${baselineCommit}..${head}`, "--"]));
  const state = readGitState(worktreePath);
  const dirtyPaths = statusPaths(state.status);
  const untrackedPaths = uniquePaths(state.untracked);
  const changedPaths = [...new Set([...dirtyPaths, ...untrackedPaths])].sort();
  const unauthorized = [...new Set([...committedPaths, ...changedPaths])].filter((file) => !allowed.includes(file));
  if (unauthorized.length) fail("PATH_INVALID", "Author committed or uncommitted paths exceed the exact allowlist.", { unauthorized_paths: unauthorized });

  const snapshots = Object.fromEntries(allowed.map((file) => [file, snapshotFile(path.join(worktreePath, file))]));
  // A second stable read detects byte changes invisible to Git status's coarse change categories.
  for (const file of allowed) {
    if (JSON.stringify(snapshots[file]) !== JSON.stringify(snapshotFile(path.join(worktreePath, file)))) {
      fail("CONCURRENT_CHANGE", "An authorized file changed during boundary review.", { file });
    }
  }
  if (head !== git(worktreePath, ["rev-parse", "HEAD"]).trim() || JSON.stringify(state) !== JSON.stringify(readGitState(worktreePath)) ||
    JSON.stringify(worktreeParents) !== JSON.stringify(inspectParents(worktreePath))) {
    fail("CONCURRENT_CHANGE", "Author HEAD, status, or parent directories changed during boundary review.");
  }
  return {
    status: "unadjudicated", evidence_status: "unverified_author_claims",
    goal_id: task.goal_id ?? null, task_id: task.id ?? null, thread_id: task.thread_id ?? null, turn_id: task.turn_id ?? null,
    cpc_code: task.cpc_code, pcr_path: task.pcr_path, worktree_path: worktreePath,
    baseline_commit: baselineCommit, head_commit: head, report_sha256: sha256(reportJson), report_sha256_kind: "canonical_json",
    files_sha256: Object.fromEntries(allowed.map((file) => [file, snapshots[file].sha256])),
    path_audit: { allowed_files: allowed, committed_paths: committedPaths, dirty_paths: changedPaths, status_porcelain: state.status },
    request: structuredClone(request),
  };
}

function safeRepoPath(value) {
  return typeof value === "string" && value.length <= 4096 && !value.includes("\\") && !/[\x00-\x1f\x7f]/u.test(value) &&
    !path.posix.isAbsolute(value) && value.split("/").every((part) => part && part !== "." && part !== "..");
}

function samePaths(values, expected) {
  return Array.isArray(values) && values.length === expected.length && values.every(safeRepoPath) &&
    JSON.stringify([...values].sort()) === JSON.stringify(expected);
}

function git(cwd, args) {
  try {
    return execFileSync("git", ["--no-optional-locks", "-c", "core.fsmonitor=false", ...args], {
      cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 10_000, maxBuffer: 8 * 1024 * 1024,
    });
  } catch (error) { fail("GIT_INSPECTION_FAILED", "Unable to inspect author Git state within bounded limits.", { cause: error.message }); }
}

function readGitState(root) {
  return {
    status: git(root, ["-c", "status.renames=false", "status", "--porcelain=v1", "-z", "--untracked-files=all"]),
    // Match Git author status: ignored Harness dependencies are not authored changes.
    untracked: git(root, ["ls-files", "--others", "--exclude-standard", "-z"]),
  };
}

function uniquePaths(output) {
  return [...new Set(output.split("\0").filter(Boolean))].sort();
}

function statusPaths(output) {
  return uniquePaths(output).map((entry) => {
    if (!/^[ MADRCU?!]{2} /u.test(entry)) fail("GIT_INSPECTION_FAILED", "Malformed Git status entry.");
    return entry.slice(3);
  }).sort();
}

function inspectParents(directory) {
  const parents = [];
  let current = path.parse(directory).root;
  for (const component of directory.slice(current.length).split("/").filter(Boolean)) {
    current = path.join(current, component);
    let stat;
    try { stat = lstatSync(current, { bigint: true }); }
    catch (error) { if (error.code === "ENOENT") return { complete: false, parents }; throw error; }
    if (stat.isSymbolicLink() || !stat.isDirectory()) fail("FILE_INVALID", "Parent paths must be real directories, never symlinks.", { path: current });
    parents.push([current, String(stat.dev), String(stat.ino), String(stat.mode)]);
  }
  return { complete: true, parents };
}

function signature(stat) {
  return [stat.dev, stat.ino, stat.mode, stat.size, stat.mtimeNs, stat.ctimeNs].map(String);
}

function snapshotFile(file) {
  let fd;
  try {
    const parents = inspectParents(path.dirname(file));
    let before;
    try { before = lstatSync(file, { bigint: true }); }
    catch (error) {
      if (error.code !== "ENOENT") throw error;
      return { sha256: null, parents };
    }
    if (!before.isFile() || before.size > BigInt(MAX_FILE_BYTES)) fail("FILE_INVALID", "Allowed files must be bounded regular files, never symlinks.", { file });
    fd = openSync(file, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
    const opened = fstatSync(fd, { bigint: true });
    if (!opened.isFile() || JSON.stringify(signature(before)) !== JSON.stringify(signature(opened))) fail("CONCURRENT_CHANGE", "Allowed file was replaced before reading.", { file });
    const hash = createHash("sha256");
    const buffer = Buffer.alloc(64 * 1024);
    let total = 0;
    let count;
    while ((count = readSync(fd, buffer, 0, buffer.length, null)) > 0) {
      total += count;
      if (total > MAX_FILE_BYTES) fail("FILE_INVALID", "Allowed file exceeds bounded read limit.", { file });
      hash.update(buffer.subarray(0, count));
    }
    const after = fstatSync(fd, { bigint: true });
    if (BigInt(total) !== before.size || JSON.stringify(signature(before)) !== JSON.stringify(signature(after)) ||
      JSON.stringify(signature(after)) !== JSON.stringify(signature(lstatSync(file, { bigint: true }))) ||
      JSON.stringify(parents) !== JSON.stringify(inspectParents(path.dirname(file)))) {
      fail("CONCURRENT_CHANGE", "Allowed file or its parent changed while reading.", { file });
    }
    return { sha256: hash.digest("hex"), signature: signature(after), parents };
  } catch (error) {
    if (error instanceof GoalHarnessError) throw error;
    fail("FILE_INVALID", "Could not safely read authorized file.", { file, cause: error.message });
  } finally { if (fd !== undefined) closeSync(fd); }
}

function sha256(value) { return createHash("sha256").update(value).digest("hex"); }
function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
function fail(suffix, message, details = {}) { throw new GoalHarnessError(`GOAL_BOUNDARY_REVIEW_${suffix}`, message, details); }
