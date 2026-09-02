import { execFileSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { existsSync, lstatSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";
import { assertRepoPath, isSensitiveRepoPath, resolveRepoPath } from "./paths.mjs";

export function createSyntheticBaseline({ projectRoot, goalId, trackedRoots, untrackedAllowlist, stateDir }) {
  const safeGoalId = String(goalId);
  if (!/^[a-z0-9][a-z0-9._-]{2,79}$/u.test(safeGoalId)) {
    throw new GoalHarnessError("GOAL_ID_INVALID", `Invalid Goal id for Git ref: ${goalId}`);
  }
  const normalizedTracked = trackedRoots.map((entry) => assertRepoPath(entry, { allowSensitive: true }));
  const normalizedUntracked = untrackedAllowlist.map((entry) => assertRepoPath(entry));
  for (const entry of normalizedTracked) {
    if (isSensitiveRepoPath(entry)) {
      throw new GoalHarnessError("GOAL_BASELINE_SENSITIVE_PATH", `Sensitive tracked root is forbidden: ${entry}`);
    }
  }
  mkdirSync(stateDir, { recursive: true });
  const indexPath = path.join(stateDir, `baseline-${process.pid}-${randomUUID()}.index`);
  const environment = { ...process.env, GIT_INDEX_FILE: indexPath };
  try {
    git(projectRoot, ["read-tree", "HEAD"], { env: environment });
    if (normalizedTracked.length > 0) {
      git(projectRoot, ["add", "-u", "--", ...normalizedTracked], { env: environment });
    }
    for (const entry of normalizedUntracked) {
      const absolutePath = resolveRepoPath(projectRoot, entry);
      if (!existsSync(absolutePath)) {
        throw new GoalHarnessError("GOAL_BASELINE_ALLOWLIST_MISSING", `Allowlisted path does not exist: ${entry}`);
      }
      const stat = lstatSync(absolutePath);
      if (stat.isSymbolicLink() || (!stat.isFile() && !stat.isDirectory())) {
        throw new GoalHarnessError("GOAL_BASELINE_PATH_TYPE_INVALID", `Allowlisted path must be a regular file or directory: ${entry}`);
      }
      git(projectRoot, ["add", "--", entry], { env: environment });
    }
    const stagedPaths = gitZ(projectRoot, ["diff", "--cached", "--name-only", "-z"], { env: environment });
    for (const stagedPath of stagedPaths) {
      if (isSensitiveRepoPath(stagedPath)) {
        throw new GoalHarnessError("GOAL_BASELINE_SENSITIVE_PATH", `Sensitive staged path is forbidden: ${stagedPath}`);
      }
    }
    const parent = git(projectRoot, ["rev-parse", "HEAD"]);
    const tree = git(projectRoot, ["write-tree"], { env: environment });
    const commit = git(projectRoot, ["commit-tree", tree, "-p", parent, "-m", `chore(goal): synthetic baseline ${safeGoalId}`]);
    const ref = `refs/tiangong-goals/${safeGoalId}/baseline`;
    git(projectRoot, ["update-ref", ref, commit]);
    const files = Object.fromEntries(stagedPaths.map((repoPath) => [repoPath, fingerprintPath(projectRoot, repoPath)]));
    return { goal_id: safeGoalId, parent, tree, commit, ref, staged_paths: stagedPaths, files };
  } catch (error) {
    if (error instanceof GoalHarnessError) {
      throw error;
    }
    throw new GoalHarnessError("GOAL_BASELINE_CREATE_FAILED", `Cannot create synthetic baseline: ${error.message}`);
  } finally {
    rmSync(indexPath, { force: true });
  }
}

function git(root, args, options = {}) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...options }).trim();
}

function gitZ(root, args, options = {}) {
  const output = execFileSync("git", args, { cwd: root, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"], ...options });
  return output.toString("utf8").split("\0").filter(Boolean);
}

function fingerprintPath(root, repoPath) {
  const absolutePath = resolveRepoPath(root, repoPath, { allowSensitive: true });
  if (!existsSync(absolutePath)) {
    return { kind: "missing", sha256: null };
  }
  const stat = lstatSync(absolutePath);
  if (!stat.isFile()) {
    throw new GoalHarnessError("GOAL_BASELINE_PATH_TYPE_INVALID", `Staged path is not a regular file: ${repoPath}`);
  }
  return { kind: "file", sha256: createHash("sha256").update(readFileSync(absolutePath)).digest("hex"), size: stat.size };
}
