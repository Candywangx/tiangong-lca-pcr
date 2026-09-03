import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { withGoalLock } from "./lock.mjs";

const EXACT_RUNTIME_PATHS = new Set([
  "README.md",
  "builder/README.md",
  "builder/cli/goal.mjs",
  "builder/cli/goal.test.mjs",
  "builder/cli/goal-uuid-search.mjs",
  "builder/docs/tools/goal-harness.md",
  "builder/schemas/goal-author-report.schema.json",
  "builder/schemas/goal-harness-config.schema.json",
  "package.json",
  "packages/pcr-viewer/viewer-build.test.mjs",
]);

export function ensureGoalRuntimeBaseline({ projectRoot, sourceRoot, stateDir, goalId, now = () => new Date().toISOString() }) {
  return withGoalLock(stateDir, "runtime-baseline", () => {
    const store = new GoalEventStore({ stateDir });
    const state = store.rebuild();
    const sourceCommit = git(sourceRoot, ["rev-parse", "HEAD"]);
    const baseCommit = selectGoalRuntimeBaseCommit(state, { projectRoot });
    const dirty = [...new Set([
      ...gitZ(sourceRoot, ["diff", "--name-only", "-z", "HEAD", "--"]),
      ...gitZ(sourceRoot, ["ls-files", "--others", "--exclude-standard", "-z", "--"]),
    ].filter(isApprovedRuntimePath))].sort();
    if (dirty.length > 0) {
      throw new GoalHarnessError("GOAL_RUNTIME_SOURCE_DIRTY", "Harness runtime source has uncommitted approved-path changes; commit and verify them before installing a Goal runtime baseline.", { paths: dirty });
    }
    if (state.runtime_baseline?.source_commit === sourceCommit && isAncestor(projectRoot, state.runtime_baseline.commit, baseCommit)) {
      return state.runtime_baseline;
    }

    const paths = gitZ(projectRoot, ["diff", "--name-only", "-z", state.baseline.commit, sourceCommit, "--"])
      .filter(isApprovedRuntimePath)
      .sort();
    if (paths.length === 0) {
      return { schema_version: 1, commit: baseCommit, base_commit: baseCommit, source_commit: sourceCommit, paths: [], path_sha256: {}, created_at: now() };
    }

    const indexDir = mkdtempSync(path.join(tmpdir(), "tiangong-goal-runtime-index-"));
    const indexPath = path.join(indexDir, "index");
    const environment = { ...process.env, GIT_INDEX_FILE: indexPath };
    try {
      git(projectRoot, ["read-tree", baseCommit], { environment });
      for (const file of paths) {
        const entry = git(projectRoot, ["ls-tree", sourceCommit, "--", file]);
        if (!entry) {
          git(projectRoot, ["update-index", "--force-remove", "--", file], { environment });
          continue;
        }
        const match = /^(\d+)\s+blob\s+([a-f0-9]+)\t/u.exec(entry);
        if (!match || !match[1].startsWith("100")) throw new GoalHarnessError("GOAL_RUNTIME_SOURCE_INVALID", `Runtime source path is not a regular Git file: ${file}`);
        git(projectRoot, ["update-index", "--add", "--cacheinfo", match[1], match[2], file], { environment });
      }
      const tree = git(projectRoot, ["write-tree"], { environment });
      const createdAt = now();
      const commit = git(projectRoot, ["commit-tree", tree, "-p", baseCommit], {
        environment: {
          ...environment,
          GIT_AUTHOR_NAME: "TianGong Goal Harness",
          GIT_AUTHOR_EMAIL: "goal-harness@localhost",
          GIT_COMMITTER_NAME: "TianGong Goal Harness",
          GIT_COMMITTER_EMAIL: "goal-harness@localhost",
          GIT_AUTHOR_DATE: createdAt,
          GIT_COMMITTER_DATE: createdAt,
        },
        input: `chore(goal): install verified runtime ${sourceCommit.slice(0, 12)}\n`,
      });
      const ref = `refs/tiangong-goals/${safeToken(goalId)}/runtime`;
      const priorRef = tryGit(projectRoot, ["rev-parse", "--verify", ref]);
      git(projectRoot, ["update-ref", ref, commit, priorRef || "0".repeat(40)]);
      const runtime = {
        schema_version: 1,
        commit,
        tree,
        ref,
        base_commit: baseCommit,
        source_commit: sourceCommit,
        paths,
        path_sha256: Object.fromEntries(paths.map((file) => [file, hashGitPath(projectRoot, sourceCommit, file)])),
        created_at: createdAt,
      };
      store.append({ event_id: `runtime-baseline-${commit}`, type: "runtime_baseline_updated", payload: { runtime_baseline: runtime } });
      return runtime;
    } finally {
      rmSync(indexDir, { recursive: true, force: true });
    }
  });
}

export function selectGoalRuntimeBaseCommit(state, { projectRoot = null } = {}) {
  const latestLanded = (state.snapshots ?? [])
    .filter((snapshot) => snapshot.state === "landed" && snapshot.integration_commit)
    .sort((left, right) => String(left.landed_at ?? left.created_at ?? "").localeCompare(String(right.landed_at ?? right.created_at ?? "")))
    .at(-1)?.integration_commit ?? state.baseline.commit;
  const runtime = state.runtime_baseline;
  if (!runtime?.commit) return latestLanded;
  if (runtime.commit === latestLanded || runtime.base_commit === latestLanded) return runtime.commit;
  if (!projectRoot) return latestLanded;
  if (isAncestor(projectRoot, runtime.commit, latestLanded)) return latestLanded;
  if (isAncestor(projectRoot, latestLanded, runtime.commit)) return runtime.commit;
  throw new GoalHarnessError("GOAL_RUNTIME_BASE_DIVERGED", "Verified Harness runtime and latest landed integration snapshot have diverged; automatic authoring and integration are blocked.", {
    runtime_commit: runtime.commit,
    latest_landed_commit: latestLanded,
  });
}

function isApprovedRuntimePath(file) {
  return EXACT_RUNTIME_PATHS.has(file) || file.startsWith("builder/goal-harness/");
}

function hashGitPath(root, commit, file) {
  try {
    const bytes = execFileSync("git", ["show", `${commit}:${file}`], { cwd: root, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] });
    return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
  } catch { return null; }
}

function isAncestor(root, ancestor, descendant) {
  try {
    execFileSync("git", ["merge-base", "--is-ancestor", ancestor, descendant], { cwd: root, stdio: "ignore" });
    return true;
  } catch { return false; }
}

function gitZ(root, args) {
  const output = execFileSync("git", args, { cwd: root, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] });
  return output.toString("utf8").split("\0").filter(Boolean);
}

function tryGit(root, args) {
  try { return git(root, args); } catch { return null; }
}

function git(root, args, { environment = process.env, input = undefined } = {}) {
  return execFileSync("git", args, { cwd: root, env: environment, input, encoding: "utf8", stdio: [input === undefined ? "ignore" : "pipe", "pipe", "pipe"] }).trim();
}

function safeToken(value) { return String(value).replace(/[^A-Za-z0-9._-]+/gu, "-"); }
