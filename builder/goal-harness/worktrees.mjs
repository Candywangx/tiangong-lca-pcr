import { execFileSync } from "node:child_process";
import { existsSync, lstatSync, mkdirSync, readdirSync, realpathSync, symlinkSync } from "node:fs";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";

export function ensureGoalWorktree({ projectRoot, worktreePath, commit, branch }) {
  const resolvedRoot = realpathSync(projectRoot);
  const resolvedPath = path.resolve(worktreePath);
  if (path.relative(resolvedRoot, resolvedPath).startsWith("..")) {
    throw new GoalHarnessError("GOAL_WORKTREE_PATH_INVALID", `Worktree must be inside project root: ${resolvedPath}`);
  }
  if (existsSync(resolvedPath)) {
    const actualCommit = git(resolvedPath, ["rev-parse", "HEAD"]);
    const actualBranch = git(resolvedPath, ["branch", "--show-current"]);
    if (actualCommit !== commit || actualBranch !== branch) {
      throw new GoalHarnessError("GOAL_WORKTREE_CONFLICT", `Existing worktree does not match requested baseline: ${resolvedPath}`, {
        expected_commit: commit,
        actual_commit: actualCommit,
        expected_branch: branch,
        actual_branch: actualBranch,
      });
    }
    ensureWorkspaceDependencies({ projectRoot: resolvedRoot, worktreePath: resolvedPath });
    return { created: false, path: resolvedPath, commit: actualCommit, branch: actualBranch };
  }
  mkdirSync(path.dirname(resolvedPath), { recursive: true });
  try {
    execFileSync("git", ["worktree", "add", "-b", branch, resolvedPath, commit], {
      cwd: resolvedRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (error) {
    throw new GoalHarnessError("GOAL_WORKTREE_CREATE_FAILED", `Cannot create worktree ${resolvedPath}: ${error.stderr || error.message}`);
  }
  ensureWorkspaceDependencies({ projectRoot: resolvedRoot, worktreePath: resolvedPath });
  return { created: true, path: resolvedPath, commit: git(resolvedPath, ["rev-parse", "HEAD"]), branch };
}

export function ensureWorkspaceDependencies({ projectRoot, worktreePath }) {
  const sourceRoot = path.join(projectRoot, "node_modules");
  if (!existsSync(sourceRoot)) return { available: false, linked: [] };
  const sourceStat = lstatSync(sourceRoot);
  if (!sourceStat.isDirectory() || sourceStat.isSymbolicLink()) {
    throw new GoalHarnessError("GOAL_WORKTREE_DEPENDENCY_SOURCE_INVALID", `Project dependency root must be a real directory: ${sourceRoot}`);
  }
  const targetRoot = path.join(worktreePath, "node_modules");
  if (!existsSync(targetRoot)) mkdirSync(targetRoot, { mode: 0o755 });
  const targetStat = lstatSync(targetRoot);
  if (!targetStat.isDirectory() || targetStat.isSymbolicLink()) {
    throw new GoalHarnessError("GOAL_WORKTREE_DEPENDENCY_PATH_INVALID", `Worktree dependency root must be a real directory: ${targetRoot}`);
  }
  const linked = [];
  for (const entry of readdirSync(sourceRoot, { withFileTypes: true })) {
    const source = path.join(sourceRoot, entry.name);
    const target = path.join(targetRoot, entry.name);
    if (existsSync(target)) {
      if (!lstatSync(target).isSymbolicLink() || realpathSync(target) !== realpathSync(source)) {
        throw new GoalHarnessError("GOAL_WORKTREE_DEPENDENCY_CONFLICT", `Dependency mirror entry is not the expected link: ${target}`);
      }
      continue;
    }
    symlinkSync(source, target, process.platform === "win32" && entry.isDirectory() ? "junction" : undefined);
    linked.push(entry.name);
  }
  return { available: true, linked };
}

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}
