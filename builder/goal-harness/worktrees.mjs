import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, realpathSync } from "node:fs";
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
  return { created: true, path: resolvedPath, commit: git(resolvedPath, ["rev-parse", "HEAD"]), branch };
}

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}
