import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

import { GoalEventStore } from "./event-store.ts";
import { GoalHarnessError } from "./errors.ts";
import { withGoalLock } from "./lock.ts";

import { record, text, strings, field } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";
export interface GoalRuntimeBaseline extends UnknownRecord {
  commit: string; base_commit: string; source_commit: string; paths: string[];
  path_sha256?: Record<string, string | null>; created_at?: string;
}
interface RuntimeBaselineOptions { projectRoot: string; sourceRoot: string; stateDir: string; goalId: string; now?: () => string }
function runtimeBaseline(value: unknown): GoalRuntimeBaseline {
  const data=record(value, "runtime baseline");
  return {...data,commit:text(data.commit),base_commit:text(data.base_commit),source_commit:text(data.source_commit),paths:strings(data.paths)};
}
const EXACT_RUNTIME_PATHS = new Set([
  "AGENTS.md",
  "docs/authoring-guide.md",
  "docs/architecture.md",
  "builder/docs/methods/reference-flow-decision-rules.md",
  "builder/AGENTS.md",
  "builder/cli/index.ts",
  "builder/cli/goal-prepare-report.ts",
  "builder/cli/goal-prepare-report.test.ts",
  "builder/cli/pcr-check.test.ts",
  "builder/lib/pcr-check.ts",
  "builder/lib/measurement-consistency.ts",
  "builder/lib/measurement-consistency.test.ts",
  "builder/lib/lint-rules.ts",
  "builder/schemas/goal-author-draft.schema.json",
  "builder/schemas/goal-author-submission.schema.json",
  "builder/docs/methods/measurement-unit-rules.md",
  "builder/docs/workflows/update-pcr.md",
  "builder/fixtures/measurement-44125/manifest.yaml",
  "builder/fixtures/measurement-44125/pcr.en-US.md",
  "builder/fixtures/measurement-44125/pcr.zh-CN.md",
  "builder/fixtures/measurement-44125/structured.yaml",
  "builder/fixtures/measurement-44125/provenance.json",

  "README.md",
  "builder/README.md",
  "builder/cli/goal.ts",
  "builder/cli/goal.test.ts",
  "builder/cli/goal-uuid-search.ts",
  "builder/cli/materials.ts",
  "builder/docs/prompts/claude-create-pcr.md",
  "builder/docs/prompts/codex-create-pcr.md",
  "builder/docs/tools/data-sources-and-tools.md",
  "builder/docs/tools/goal-harness.md",
  "builder/docs/tools/shared-materials.md",
  "builder/docs/workflows/create-pcr.md",
  "builder/lib/schema-contracts.test.ts",
  "builder/lib/shared-materials.ts",
  "builder/lib/shared-materials.test.ts",
  "builder/schemas/goal-author-report.schema.json",
  "builder/schemas/goal-harness-config.schema.json",
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "tsconfig.viewer-browser.json",
  "packages/pcr-viewer/scripts/publisher-source.json",
  "packages/pcr-core/src/projection-completeness.ts",
  "packages/pcr-viewer/viewer-build.test.ts",
]);

export function ensureGoalRuntimeBaseline({ projectRoot, sourceRoot, stateDir, goalId, now = () => new Date().toISOString() }: RuntimeBaselineOptions): GoalRuntimeBaseline {
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
    if (state.runtime_baseline?.source_commit === sourceCommit && state.runtime_baseline.commit === baseCommit) {
      return runtimeBaseline(state.runtime_baseline);
    }

    const paths = gitZ(projectRoot, ["diff", "--name-only", "-z", text(field(state.baseline,"commit")), sourceCommit, "--"])
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
        if (!match || !match[1]?.startsWith("100") || !match[2]) throw new GoalHarnessError("GOAL_RUNTIME_SOURCE_INVALID", `Runtime source path is not a regular Git file: ${file}`);
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

export function selectGoalRuntimeBaseCommit(input: unknown, { projectRoot = null }: { projectRoot?: string | null } = {}): string {
  const state=record(input,"Goal runtime state");
  const snapshots=state.snapshots ?? [];
  if (!Array.isArray(snapshots)) throw new TypeError("Goal snapshots must be an array.");
  const latestLanded = snapshots.map(snapshot => record(snapshot,"Goal snapshot"))
    .filter((snapshot) => snapshot.state === "landed" && snapshot.integration_commit)
    .sort((left, right) => String(left.landed_at ?? left.created_at ?? "").localeCompare(String(right.landed_at ?? right.created_at ?? "")))
    .at(-1)?.integration_commit ?? field(state.baseline,"commit");
  const landedCommit = text(latestLanded,"latest landed commit");
  const runtime = state.runtime_baseline == null ? null : record(state.runtime_baseline,"runtime baseline");
  if (!runtime?.commit) return landedCommit;
  const runtimeCommit=text(runtime.commit,"runtime commit");
  if (runtime.commit === latestLanded || runtime.base_commit === latestLanded) return runtimeCommit;
  if (!projectRoot) return landedCommit;
  if (isAncestor(projectRoot, runtimeCommit, landedCommit)) return landedCommit;
  if (isAncestor(projectRoot, landedCommit, runtimeCommit)) return runtimeCommit;
  throw new GoalHarnessError("GOAL_RUNTIME_BASE_DIVERGED", "Verified Harness runtime and latest landed integration snapshot have diverged; automatic authoring and integration are blocked.", {
    runtime_commit: runtime.commit,
    latest_landed_commit: latestLanded,
  });
}

export function isApprovedRuntimePath(file: string): boolean {
  return EXACT_RUNTIME_PATHS.has(file) || EXACT_RUNTIME_PATHS.has(file.replace(/\.mjs$/u, ".ts")) || file.startsWith("builder/goal-harness/") ||
    /^builder\/(?:cli|lib|scripts)\/[\w.-]+\.(?:ts|mjs)$/u.test(file) ||
    /^builder\/schemas\/[\w.-]+\.json$/u.test(file) ||
    /^packages\/pcr-core\/(?:src\/(?:(?:compiler|generated)\/)?[\w.-]+\.(?:ts|mjs|json)|schemas\/[\w.-]+\.json|[\w.-]+\.test\.(?:ts|mjs))$/u.test(file) ||
    /^packages\/pcr-viewer\/(?:(?:scripts|static)\/[\w.-]+\.(?:ts|mjs|js|css|html)|schemas\/[\w.-]+\.json|[\w.-]+\.test\.(?:ts|mjs))$/u.test(file);
}

function hashGitPath(root: string, commit: string, file: string): string | null {
  try {
    const bytes = execFileSync("git", ["show", `${commit}:${file}`], { cwd: root, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] });
    return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
  } catch { return null; }
}

function isAncestor(root: string, ancestor: string, descendant: string): boolean {
  try {
    execFileSync("git", ["merge-base", "--is-ancestor", ancestor, descendant], { cwd: root, stdio: "ignore" });
    return true;
  } catch { return false; }
}

function gitZ(root: string, args: string[]): string[] {
  const output = execFileSync("git", args, { cwd: root, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] });
  return output.toString("utf8").split("\0").filter(Boolean);
}

function tryGit(root: string, args: string[]): string | null {
  try { return git(root, args); } catch { return null; }
}

function git(root: string, args: string[], { environment = process.env, input = undefined }: { environment?: NodeJS.ProcessEnv; input?: string | undefined } = {}): string {
  return execFileSync("git", args, { cwd: root, env: environment, input, encoding: "utf8", stdio: [input === undefined ? "ignore" : "pipe", "pipe", "pipe"] }).trim();
}

function safeToken(value: unknown): string { return String(value).replace(/[^A-Za-z0-9._-]+/gu, "-"); }
