import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { GoalEventStore } from "./event-store.mjs";
import { ensureGoalRuntimeBaseline, selectGoalRuntimeBaseCommit } from "./runtime-baseline.mjs";

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

test("installed author runtime includes the working shared-materials CLI and author guidance", () => {
  const root = mkdtempSync(path.join(tmpdir(), "goal-runtime-materials-"));
  const authorRoot = `${root}-author`;
  const stateDir = path.join(root, "library/.pcr-builder-state/goals/fixture");
  const files = [
    "builder/cli/materials.mjs",
    "builder/lib/shared-materials.mjs",
    "builder/lib/shared-materials.test.mjs",
    "builder/docs/tools/shared-materials.md",
    "builder/docs/tools/data-sources-and-tools.md",
    "builder/docs/workflows/create-pcr.md",
    "builder/docs/prompts/codex-create-pcr.md",
    "builder/docs/prompts/claude-create-pcr.md",
  ];
  try {
    git(root, ["init", "-q"]);
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    writeFileSync(path.join(root, ".gitignore"), "library/.pcr-builder-state/\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "baseline without materials"]);
    const baseline = git(root, ["rev-parse", "HEAD"]);
    for (const file of files) {
      mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
      writeFileSync(path.join(root, file), readFileSync(new URL(`../../${file}`, import.meta.url)));
    }
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "shared materials source"]);
    new GoalEventStore({ stateDir }).initialize({ goal_id: "fixture", baseline: { commit: baseline }, tasks: [], snapshots: [] });
    const runtime = ensureGoalRuntimeBaseline({ projectRoot: root, sourceRoot: root, stateDir, goalId: "fixture" });
    assert.deepEqual(runtime.paths, [...files].sort());
    git(root, ["worktree", "add", "--detach", "-q", authorRoot, runtime.commit]);
    const query = JSON.parse(execFileSync(process.execPath, ["builder/cli/materials.mjs", "query", "--product", "wheat seed"], { cwd: authorRoot, encoding: "utf8" }));
    assert.equal(query.root, path.join(root, ".git/pcr-materials"));
    for (const file of files) assert.deepEqual(readFileSync(path.join(authorRoot, file)), readFileSync(path.join(root, file)));
  } finally {
    try { git(root, ["worktree", "remove", "--force", authorRoot]); } catch {}
    rmSync(authorRoot, { recursive: true, force: true });
    rmSync(root, { recursive: true, force: true });
  }
});

test("runtime baseline overlays only approved Harness files on the latest landed snapshot", () => {
  const root = mkdtempSync(path.join(tmpdir(), "goal-runtime-baseline-"));
  const stateDir = path.join(root, "library/.pcr-builder-state/goals/fixture");
  try {
    git(root, ["init", "-q"]);
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    mkdirSync(path.join(root, "builder/goal-harness"), { recursive: true });
    mkdirSync(path.join(root, "builder/lib"), { recursive: true });
    mkdirSync(path.join(root, "packages/pcr-core/src"), { recursive: true });
    mkdirSync(path.join(root, "library/pcrs/example"), { recursive: true });
    writeFileSync(path.join(root, "builder/goal-harness/runtime.mjs"), "old runtime\n");
    writeFileSync(path.join(root, "builder/lib/schema-contracts.test.mjs"), "old contract test\n");
    writeFileSync(path.join(root, "packages/pcr-core/src/projection-completeness.mjs"), "old completeness\n");
    writeFileSync(path.join(root, "library/pcrs/example/manifest.yaml"), "baseline PCR\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "baseline"]);
    const baseline = git(root, ["rev-parse", "HEAD"]);

    writeFileSync(path.join(root, "library/pcrs/example/manifest.yaml"), "integrated PCR\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "landed snapshot"]);
    const landed = git(root, ["rev-parse", "HEAD"]);

    writeFileSync(path.join(root, "builder/goal-harness/runtime.mjs"), "optimized runtime\n");
    writeFileSync(path.join(root, "builder/lib/schema-contracts.test.mjs"), "updated contract test\n");
    writeFileSync(path.join(root, "packages/pcr-core/src/projection-completeness.mjs"), "updated completeness\n");
    writeFileSync(path.join(root, "library/pcrs/example/manifest.yaml"), "source branch must not leak\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "runtime source"]);
    const source = git(root, ["rev-parse", "HEAD"]);

    new GoalEventStore({ stateDir }).initialize({
      goal_id: "fixture",
      baseline: { commit: baseline },
      tasks: [],
      snapshots: [{ id: "landed", state: "landed", integration_commit: landed, landed_at: "2026-09-03T00:00:00Z" }],
    });
    const result = ensureGoalRuntimeBaseline({ projectRoot: root, sourceRoot: root, stateDir, goalId: "fixture" });
    assert.equal(result.source_commit, source);
    assert.equal(git(root, ["rev-parse", `${result.commit}^`]), landed);
    assert.equal(git(root, ["show", `${result.commit}:builder/goal-harness/runtime.mjs`]), "optimized runtime");
    assert.equal(git(root, ["show", `${result.commit}:builder/lib/schema-contracts.test.mjs`]), "updated contract test");
    assert.equal(git(root, ["show", `${result.commit}:packages/pcr-core/src/projection-completeness.mjs`]), "updated completeness");
    assert.equal(git(root, ["show", `${result.commit}:library/pcrs/example/manifest.yaml`]), "integrated PCR");
    assert.deepEqual(result.paths, [
      "builder/goal-harness/runtime.mjs",
      "builder/lib/schema-contracts.test.mjs",
      "packages/pcr-core/src/projection-completeness.mjs",
    ]);
    assert.equal(selectGoalRuntimeBaseCommit(new GoalEventStore({ stateDir }).rebuild(), { projectRoot: root }), result.commit);

    const replay = ensureGoalRuntimeBaseline({ projectRoot: root, sourceRoot: root, stateDir, goalId: "fixture" });
    assert.equal(replay.commit, result.commit);
    assert.equal(new GoalEventStore({ stateDir }).readEvents().filter((event) => event.type === "runtime_baseline_updated").length, 1);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a later landed snapshot descended from the runtime becomes the next effective base", () => {
  const root = mkdtempSync(path.join(tmpdir(), "goal-runtime-descendant-"));
  try {
    git(root, ["init", "-q"]);
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    writeFileSync(path.join(root, "file"), "one\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "baseline"]);
    const baseline = git(root, ["rev-parse", "HEAD"]);
    writeFileSync(path.join(root, "file"), "runtime\n");
    git(root, ["commit", "-am", "runtime", "-q"]);
    const runtime = git(root, ["rev-parse", "HEAD"]);
    writeFileSync(path.join(root, "file"), "later\n");
    git(root, ["commit", "-am", "later landed", "-q"]);
    const later = git(root, ["rev-parse", "HEAD"]);
    const state = {
      baseline: { commit: baseline },
      runtime_baseline: { commit: runtime, base_commit: baseline },
      snapshots: [{ id: "later", state: "landed", integration_commit: later, landed_at: "2026-09-03T01:00:00Z" }],
    };
    assert.equal(selectGoalRuntimeBaseCommit(state, { projectRoot: root }), later);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("runtime installation advances to a later landed snapshot even when Harness source is unchanged", () => {
  const root = mkdtempSync(path.join(tmpdir(), "goal-runtime-advance-"));
  const sourceRoot = `${root}-source`;
  const stateDir = path.join(root, "library/.pcr-builder-state/goals/fixture");
  try {
    git(root, ["init", "-q"]);
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    mkdirSync(path.join(root, "builder/goal-harness"), { recursive: true });
    mkdirSync(path.join(root, "library/pcrs/example"), { recursive: true });
    writeFileSync(path.join(root, ".gitignore"), "library/.pcr-builder-state/\n");
    writeFileSync(path.join(root, "builder/goal-harness/runtime.mjs"), "old runtime\n");
    writeFileSync(path.join(root, "library/pcrs/example/manifest.yaml"), "baseline PCR\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "baseline"]);
    const baseline = git(root, ["rev-parse", "HEAD"]);

    git(root, ["worktree", "add", "-qb", "runtime-source", sourceRoot, baseline]);
    writeFileSync(path.join(sourceRoot, "builder/goal-harness/runtime.mjs"), "optimized runtime\n");
    git(sourceRoot, ["commit", "-am", "runtime source", "-q"]);

    const store = new GoalEventStore({ stateDir });
    store.initialize({ goal_id: "fixture", baseline: { commit: baseline }, tasks: [], snapshots: [] });
    const first = ensureGoalRuntimeBaseline({ projectRoot: root, sourceRoot, stateDir, goalId: "fixture" });

    git(root, ["switch", "--detach", "-q", first.commit]);
    writeFileSync(path.join(root, "library/pcrs/example/manifest.yaml"), "integrated PCR\n");
    git(root, ["add", "library/pcrs/example/manifest.yaml"]);
    git(root, ["commit", "-qm", "landed snapshot"]);
    const landed = git(root, ["rev-parse", "HEAD"]);
    store.append({
      event_id: "later-landed",
      type: "snapshot_created",
      payload: { id: "later", state: "landed", integration_commit: landed, landed_at: "2026-09-03T01:00:00Z" },
    });

    const advanced = ensureGoalRuntimeBaseline({ projectRoot: root, sourceRoot, stateDir, goalId: "fixture" });
    assert.notEqual(advanced.commit, first.commit);
    assert.equal(advanced.base_commit, landed);
    assert.equal(git(root, ["rev-parse", `${advanced.commit}^`]), landed);
    assert.equal(git(root, ["show", `${advanced.commit}:builder/goal-harness/runtime.mjs`]), "optimized runtime");
    assert.equal(git(root, ["show", `${advanced.commit}:library/pcrs/example/manifest.yaml`]), "integrated PCR");
  } finally {
    try { git(root, ["worktree", "remove", "--force", sourceRoot]); } catch {}
    rmSync(sourceRoot, { recursive: true, force: true });
    rmSync(root, { recursive: true, force: true });
  }
});
