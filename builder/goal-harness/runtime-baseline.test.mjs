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

test("runtime baseline overlays only approved Harness files on the latest landed snapshot", () => {
  const root = mkdtempSync(path.join(tmpdir(), "goal-runtime-baseline-"));
  const stateDir = path.join(root, "library/.pcr-builder-state/goals/fixture");
  try {
    git(root, ["init", "-q"]);
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    mkdirSync(path.join(root, "builder/goal-harness"), { recursive: true });
    mkdirSync(path.join(root, "library/pcrs/example"), { recursive: true });
    writeFileSync(path.join(root, "builder/goal-harness/runtime.mjs"), "old runtime\n");
    writeFileSync(path.join(root, "library/pcrs/example/manifest.yaml"), "baseline PCR\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "baseline"]);
    const baseline = git(root, ["rev-parse", "HEAD"]);

    writeFileSync(path.join(root, "library/pcrs/example/manifest.yaml"), "integrated PCR\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "landed snapshot"]);
    const landed = git(root, ["rev-parse", "HEAD"]);

    writeFileSync(path.join(root, "builder/goal-harness/runtime.mjs"), "optimized runtime\n");
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
    assert.equal(git(root, ["show", `${result.commit}:library/pcrs/example/manifest.yaml`]), "integrated PCR");
    assert.deepEqual(result.paths, ["builder/goal-harness/runtime.mjs"]);
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
