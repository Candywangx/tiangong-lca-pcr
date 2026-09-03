import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { GoalEventStore } from "./event-store.mjs";
import {
  assertAcceptedMappingDecision,
  materializeAuthorCommitTree,
  integrateGoalSnapshot,
  mergeAcceptedMappings,
  prepareIntegrationWorkspace,
  selectIntegrationBaseCommit,
} from "./integration.mjs";

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

test("accepted mapping gate requires material identity, reviewed relation, and durable acceptance metadata", () => {
  const entry = {
    code: "41111",
    label: "Pig iron",
    pcr_id: "pcr.metal.pig-iron",
    mapping_type: "exact",
    confidence: "reviewed",
    acceptance: {
      status: "accepted",
      decided_by: "tiangong-lca-pcr-maintainers",
      decided_at_utc: "2026-09-02T00:00:00Z",
      decision_ref: "docs/adr/0080-accept-metal-goal.md",
    },
  };
  assert.equal(assertAcceptedMappingDecision(entry, { materialPcrIds: new Set([entry.pcr_id]) }), true);
  assert.throws(
    () => assertAcceptedMappingDecision({ ...entry, mapping_type: "manual_review" }, { materialPcrIds: new Set([entry.pcr_id]) }),
    (error) => error.code === "GOAL_MAPPING_DECISION_INVALID",
  );
  assert.throws(
    () => assertAcceptedMappingDecision(entry, { materialPcrIds: new Set() }),
    (error) => error.code === "GOAL_MAPPING_TARGET_NOT_MATERIAL",
  );
});

test("mapping merge is sorted, idempotent, and refuses a competing positive edge", () => {
  const document = { schema_version: 2, classification_system: "CPC", classification_version: "3.0", status: "current", mappings: [] };
  const entry = {
    code: "41111", label: "Pig iron", pcr_id: "pcr.metal.pig-iron", mapping_type: "exact", confidence: "reviewed",
    acceptance: { status: "accepted", decided_by: "maintainer", decided_at_utc: "2026-09-02T00:00:00Z", decision_ref: "docs/adr/0080.md" },
  };
  const first = mergeAcceptedMappings(document, [entry], { materialPcrIds: new Set([entry.pcr_id]) });
  const second = mergeAcceptedMappings(first, [entry], { materialPcrIds: new Set([entry.pcr_id]) });
  assert.deepEqual(second, first);
  assert.throws(
    () => mergeAcceptedMappings(first, [{ ...entry, pcr_id: "pcr.metal.other" }], { materialPcrIds: new Set(["pcr.metal.other"]) }),
    (error) => error.code === "GOAL_MAPPING_EDGE_CONFLICT",
  );
});

test("integration dry-run exposes the serial Builder and consumer checks without mutation", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-integration-plan-"));
  const stateDir = path.join(root, "state");
  try {
    const tasks = Array.from({ length: 6 }, (_, index) => ({
      id: `task-${index}`, cpc_code: `4111${index}`, pcr_id: `pcr.metal.${index}`, pcr_path: `library/pcrs/metal/${index}`,
      author_commit: `${index}`.repeat(40), state: "integration_pending",
    }));
    const snapshot = { id: "snapshot-fixture", goal_id: "fixture", task_ids: tasks.map((task) => task.id), author_commits: tasks.map((task) => task.author_commit), state: "integration_pending" };
    new GoalEventStore({ stateDir }).initialize({ goal_id: "fixture", baseline: { commit: "a".repeat(40) }, tasks, snapshots: [snapshot] });
    const config = {
      goal_id: "fixture", project_root: root, target_category_relative: "library/pcrs/metal", classification_system: "cpc", classification_version: "3.0",
      integration_batch_size: 6, integration: { decided_by: "maintainer" },
    };
    const result = integrateGoalSnapshot({ config, stateDir, dryRun: true });
    assert.equal(result.status, "dry_run");
    assert.deepEqual(result.commands.map((command) => command.name), ["aliases_build", "catalog_build", "viewer_build", "validate", "smoke_list", "smoke_resolve", "smoke_guidance"]);
    assert.equal(new GoalEventStore({ stateDir }).rebuild().snapshots[0].state, "integration_pending");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("integration selects the latest landed snapshot commit as its cumulative base", () => {
  const state = {
    baseline: { commit: "a".repeat(40) },
    snapshots: [
      { id: "one", state: "landed", integration_commit: "b".repeat(40), landed_at: "2026-09-02T01:00:00Z" },
      { id: "two", state: "validated", integration_commit: "c".repeat(40), validated_at: "2026-09-02T02:00:00Z" },
      { id: "three", state: "landed", integration_commit: "d".repeat(40), landed_at: "2026-09-02T03:00:00Z" },
    ],
  };
  assert.equal(selectIntegrationBaseCommit(state), "d".repeat(40));
  assert.equal(selectIntegrationBaseCommit({ baseline: state.baseline, snapshots: [] }), "a".repeat(40));
});

test("integration materializes the complete author tree for a retry commit chain", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-integration-author-tree-"));
  const integrationRoot = path.join(root, "integration");
  const files = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map((name) => `library/pcrs/example/${name}`);
  try {
    git(root, ["init", "-q"]);
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    mkdirSync(path.join(root, "library/pcrs/example"), { recursive: true });
    for (const file of files) writeFileSync(path.join(root, file), `scaffold ${file}\n`);
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "baseline"]);
    const baseline = git(root, ["rev-parse", "HEAD"]);

    for (const file of files) writeFileSync(path.join(root, file), `authored ${file}\n`);
    git(root, ["add", "--", ...files]);
    git(root, ["commit", "-qm", "first author attempt"]);
    writeFileSync(path.join(root, files[1]), "repaired English PCR\n");
    git(root, ["add", "--", files[1]]);
    git(root, ["commit", "-qm", "retry repair"]);
    const retryCommit = git(root, ["rev-parse", "HEAD"]);

    git(root, ["worktree", "add", "--detach", integrationRoot, baseline]);
    materializeAuthorCommitTree({ worktreePath: integrationRoot, authorCommit: retryCommit, allowedFiles: files });

    for (const file of files) {
      assert.equal(readFileSync(path.join(integrationRoot, file), "utf8"), readFileSync(path.join(root, file), "utf8"));
    }
    assert.deepEqual(git(integrationRoot, ["diff", "--cached", "--name-only"]).split("\n").filter(Boolean).sort(), files.sort());
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("integration recovery preserves a dirty failed worktree and starts a clean retry", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-integration-recovery-"));
  const config = { project_root: root, goal_id: "fixture" };
  const snapshot = { id: "snapshot-fixture", integration_attempt: 1 };
  const defaultPath = path.join(root, ".worktrees/goals/fixture/integrations/snapshot-fixture");
  const defaultBranch = "codex/goal-fixture-snapshot-fixture";
  try {
    git(root, ["init", "-q"]);
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    writeFileSync(path.join(root, ".gitignore"), ".worktrees/\n");
    writeFileSync(path.join(root, "tracked.txt"), "baseline\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "baseline"]);
    const baseline = git(root, ["rev-parse", "HEAD"]);
    mkdirSync(path.dirname(defaultPath), { recursive: true });
    git(root, ["worktree", "add", "-b", defaultBranch, defaultPath, baseline]);
    writeFileSync(path.join(defaultPath, "tracked.txt"), "failed partial integration\n");

    const recovered = prepareIntegrationWorkspace({
      config,
      snapshot: { ...snapshot, worktree_path: defaultPath, branch: defaultBranch },
      baseCommit: baseline,
    });

    assert.equal(recovered.integrationAttempt, 2);
    assert.equal(recovered.worktreePath, `${defaultPath}-retry-2`);
    assert.deepEqual(recovered.preservedWorktreePaths, [defaultPath]);
    assert.equal(readFileSync(path.join(defaultPath, "tracked.txt"), "utf8"), "failed partial integration\n");
    assert.equal(readFileSync(path.join(recovered.worktreePath, "tracked.txt"), "utf8"), "baseline\n");
    assert.equal(git(recovered.worktreePath, ["status", "--porcelain"]), "");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
