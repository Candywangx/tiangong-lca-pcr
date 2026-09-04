import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";

import { inspectPcrDirectory } from "../lib/lint-rules.mjs";
import { parsePcrMarkdownToStructured } from "../lib/markdown-projection.mjs";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { assertAuthorQuality, flattenProcessInventory } from "./author-gates.mjs";
import { GoalHarnessError } from "./errors.mjs";

export function extractCompletedTurnReport(response, turnId) {
  const turn = response?.thread?.turns?.find((entry) => entry.id === turnId);
  if (!turn) {
    throw new GoalHarnessError("GOAL_AUTHOR_TURN_MISSING", `Codex thread does not contain turn ${turnId}`);
  }
  if (turn.status !== "completed") {
    if (turn.status === "interrupted") {
      const lastMaterial = [...(turn.items ?? [])].reverse().find((item) => item.type !== "reasoning");
      if (lastMaterial?.type === "agentMessage" && lastMaterial.text?.trim()) {
        return {
          status: "completed",
          report: parseStrictReport(lastMaterial.text, turnId),
          recovered_from: "interrupted_after_final_report",
        };
      }
    }
    return turn.error
      ? { status: turn.status, report: null, error: turn.error }
      : { status: turn.status, report: null };
  }
  const message = [...(turn.items ?? [])].reverse().find((item) => item.type === "agentMessage" && item.text?.trim());
  if (!message) {
    throw new GoalHarnessError("GOAL_AUTHOR_REPORT_PARSE_FAILED", `Completed turn ${turnId} has no final agent JSON message`);
  }
  return { status: "completed", report: parseStrictReport(message.text, turnId) };
}

function parseStrictReport(text, turnId) {
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new GoalHarnessError("GOAL_AUTHOR_REPORT_PARSE_FAILED", `Completed turn ${turnId} final message is not strict JSON`, { cause: error.message });
  }
}

export function inspectAuthorCommit({ projectRoot, baselineCommit, authorCommit }) {
  if (!/^[a-f0-9]{40,64}$/u.test(String(authorCommit))) {
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Invalid author commit SHA: ${authorCommit}`);
  }
  try {
    execFileSync("git", ["merge-base", "--is-ancestor", baselineCommit, authorCommit], { cwd: projectRoot, stdio: "ignore" });
  } catch {
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Author commit ${authorCommit} is not descended from baseline ${baselineCommit}`);
  }
  let changedFiles;
  try {
    const output = execFileSync("git", ["diff", "--name-only", "-z", baselineCommit, authorCommit, "--"], { cwd: projectRoot, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] });
    changedFiles = output.toString("utf8").split("\0").filter(Boolean).sort();
  } catch (error) {
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Cannot inspect author commit ${authorCommit}: ${error.message}`);
  }
  return { author_commit: authorCommit, baseline_commit: baselineCommit, is_descendant: true, changed_files: changedFiles };
}

export function runStructuredSyncDeterminism({ projectRoot, commit, pcrPath, reviewRoot, syncRunner = defaultSyncRunner }) {
  if (existsSync(reviewRoot)) {
    throw new GoalHarnessError("GOAL_REVIEW_WORKTREE_CONFLICT", `Review worktree path already exists: ${reviewRoot}`);
  }
  mkdirSync(path.dirname(reviewRoot), { recursive: true });
  execFileSync("git", ["worktree", "add", "--detach", reviewRoot, commit], { cwd: projectRoot, stdio: ["ignore", "pipe", "pipe"] });
  let removeWorktree = true;
  try {
    syncRunner(reviewRoot, pcrPath, 1);
    const firstStatus = gitStatus(reviewRoot);
    if (firstStatus.length > 0) {
      removeWorktree = false;
      throw new GoalHarnessError("GOAL_STRUCTURED_SYNC_STALE", "The committed structured projection changes on the first canonical sync.", { review_worktree: reviewRoot, diff: firstStatus });
    }
    syncRunner(reviewRoot, pcrPath, 2);
    const secondStatus = gitStatus(reviewRoot);
    if (secondStatus.length > 0) {
      removeWorktree = false;
      throw new GoalHarnessError("GOAL_STRUCTURED_SYNC_NONDETERMINISTIC", "The second structured sync changes repository bytes.", { review_worktree: reviewRoot, diff: secondStatus });
    }
    return { first_run_clean: true, second_run_clean: true, review_worktree: reviewRoot };
  } finally {
    if (removeWorktree) {
      execFileSync("git", ["worktree", "remove", reviewRoot], { cwd: projectRoot, stdio: ["ignore", "pipe", "pipe"] });
    }
  }
}

export function reviewAuthorWorktree({ projectRoot, baselineCommit, worktreePath, task, report, stateDir, runSync = true }) {
  const head = git(worktreePath, ["rev-parse", "HEAD"]);
  if (head !== report.commit_sha) {
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Author report commit ${report.commit_sha} does not equal worktree HEAD ${head}`);
  }
  const status = gitStatus(worktreePath);
  if (status.length > 0) {
    throw new GoalHarnessError("GOAL_AUTHOR_WORKTREE_DIRTY", "Author worktree contains uncommitted or untracked changes after the reported commit.", { status });
  }
  const commitInspection = inspectAuthorCommit({ projectRoot, baselineCommit, authorCommit: report.commit_sha });
  const pcrDir = path.join(worktreePath, ...task.pcr_path.split("/"));
  const inspection = inspectPcrDirectory({
    root: worktreePath,
    pcrDir,
    checkManifestLifecycle: true,
    checkBilingualRuleAlignment: true,
  });
  if (inspection.problems.length > 0) {
    throw new GoalHarnessError("GOAL_AUTHOR_PCR_INVALID", `Builder PCR inspection found ${inspection.problems.length} problem(s).`, { problems: inspection.problems, warnings: inspection.warnings });
  }
  const english = parsePcrMarkdownToStructured(readFileSync(path.join(pcrDir, "pcr.en-US.md"), "utf8"));
  const chinese = parsePcrMarkdownToStructured(readFileSync(path.join(pcrDir, "pcr.zh-CN.md"), "utf8"));
  const manifest = parseYaml(readFileSync(path.join(pcrDir, "manifest.yaml"), "utf8"));
  const manifestUnresolved = extractManifestUnresolved(manifest);
  const quality = assertAuthorQuality({
    report,
    authorizedFiles: task.allowed_files,
    changedFiles: commitInspection.changed_files,
    inventoryRows: { en: flattenProcessInventory(english), zh: flattenProcessInventory(chinese) },
    manifestUnresolved,
  });
  const sync = runSync
    ? runStructuredSyncDeterminism({
        projectRoot,
        commit: report.commit_sha,
        pcrPath: task.pcr_path,
        reviewRoot: path.join(projectRoot, ".worktrees", "goals", task.goal_id ?? "goal", "reviews", `${task.cpc_code}-${report.commit_sha.slice(0, 12)}`),
      })
    : { skipped: true };
  return { valid: true, pcr_id: manifest.id, commit: commitInspection, builder: inspection, quality, sync, warnings: inspection.warnings };
}

function defaultSyncRunner(worktree, pcrPath) {
  const result = spawnSync("npm", ["run", "pcr:sync-structured", "--", "--pcr", pcrPath], {
    cwd: worktree,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  if (result.status !== 0) {
    throw new GoalHarnessError("GOAL_STRUCTURED_SYNC_FAILED", `Structured sync failed with exit ${result.status}`, { stdout: result.stdout, stderr: result.stderr });
  }
}

function extractManifestUnresolved(manifest) {
  const entries = manifest?.review_metadata?.unresolved?.inventory_flow_uuids ?? [];
  return entries.map((entry) => typeof entry === "string" ? entry : entry?.row_id).filter(Boolean);
}

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function gitStatus(root) {
  const output = execFileSync("git", ["status", "--porcelain=v1", "-z", "--untracked-files=all"], { cwd: root, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] });
  return output.toString("utf8").split("\0").filter(Boolean);
}
