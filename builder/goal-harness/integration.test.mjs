import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { GoalEventStore } from "./event-store.mjs";
import { withGoalLock } from "./lock.mjs";
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

function withIntegrationFixture(run) {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-integration-concurrency-"));
  const stateDir = path.join(root, "state");
  const pcrPath = "library/pcrs/metal/example";
  const allowedFiles = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map((name) => `${pcrPath}/${name}`);
  try {
    git(root, ["init", "-q"]);
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    writeFileSync(path.join(root, ".gitignore"), ".worktrees/\nstate/\npackages/pcr-viewer/dist/\n");
    mkdirSync(path.join(root, pcrPath), { recursive: true });
    mkdirSync(path.join(root, "classifications/mappings"), { recursive: true });
    writeFileSync(path.join(root, allowedFiles[0]), "id: pcr.metal.example\ncontent_maturity: authored_methodology\nclassification_refs:\n  - system: cpc\n    version: '3.0'\n    code: '41111'\n    mapping_type: exact\n");
    for (const file of allowedFiles.slice(1)) writeFileSync(path.join(root, file), "fixture\n");
    writeFileSync(path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml"), "schema_version: 2\nclassification_system: CPC\nclassification_version: '3.0'\nstatus: current\nmappings: []\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "fixture baseline"]);
    const commit = git(root, ["rev-parse", "HEAD"]);
    const task = { id: "one", cpc_code: "41111", product_name_en: "Example", pcr_id: "pcr.metal.example", pcr_path: pcrPath, allowed_files: allowedFiles, author_commit: commit, state: "integration_pending" };
    const snapshot = { id: "snapshot-concurrency", goal_id: "fixture", task_ids: [task.id], author_commits: [commit], state: "integration_pending", created_at: "2026-09-08T00:00:00Z" };
    const store = new GoalEventStore({ stateDir });
    store.initialize({ goal_id: "fixture", baseline: { commit }, tasks: [task, { id: "two", state: "authoring" }], snapshots: [snapshot] });
    const config = { goal_id: "fixture", project_root: root, target_category_relative: "library/pcrs/metal", classification_system: "cpc", classification_version: "3.0", integration: { decided_by: "maintainer" } };
    return run({ root, stateDir, store, config, commit, task, snapshot });
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

function fixtureBuild({ cwd, name }) {
  if (name === "viewer_build") {
    mkdirSync(path.join(cwd, "packages/pcr-viewer/dist"), { recursive: true });
    writeFileSync(path.join(cwd, "packages/pcr-viewer/dist/.tiangong-pcr-viewer-build"), "fixture\n");
  }
  return { name, exit_code: 0 };
}

for (const taskState of ["integrating", "integrated"]) {
  test(`legacy validated snapshot with ${taskState} tasks is not offered as ready to land`, () => {
    withIntegrationFixture(({ stateDir, store, config, snapshot, task }) => {
      store.append({ event_id: "legacy-snapshot-completed", type: "snapshot_replaced", payload: { snapshot: { ...snapshot, state: "validated" } } });
      store.append({ event_id: "legacy-task-interrupted", type: "task_replaced", payload: { task: { ...task, state: taskState } } });
      assert.throws(() => integrateGoalSnapshot({ config, stateDir, snapshotId: snapshot.id }), (error) => error.code === "GOAL_INTEGRATION_FINALIZATION_INCOMPLETE");
      assert.equal(store.rebuild().tasks[0].state, taskState);
    });
  });
}

test("integration build permits queue state updates while rejecting a concurrent integration", () => {
  withIntegrationFixture(({ root, stateDir, store, config, commit }) => {
    const stoppedAfterProbe = new Error("fixture stops before expensive builds");
    let queueUpdated = false;
    assert.throws(() => integrateGoalSnapshot({ config, stateDir, commandRunner: () => {
      withGoalLock(stateDir, "queue-probe", () => {
        new GoalEventStore({ stateDir }).append({ event_id: "probe-stop", type: "scheduling_stopped", payload: {} });
        queueUpdated = true;
      });
      assert.throws(() => integrateGoalSnapshot({ config, stateDir }), (error) => error.code === "GOAL_LOCKED");
      throw stoppedAfterProbe;
    } }), (error) => error === stoppedAfterProbe);
    assert.equal(queueUpdated, true);
    assert.equal(store.rebuild().stopped, true);
    assert.equal(store.rebuild().snapshots[0].state, "retryable_failure");
    assert.equal(git(root, ["rev-parse", "HEAD"]), commit);
    assert.equal(git(root, ["status", "--porcelain"]), "");
  });
});

test("successful integration preserves another author's result, next snapshot, and dirty main", () => {
  withIntegrationFixture(({ root, stateDir, store, config, commit }) => {
    writeFileSync(path.join(root, "user.txt"), "staged user data\n");
    git(root, ["add", "user.txt"]);
    writeFileSync(path.join(root, "user.txt"), "unstaged user data\n");
    const index = readFileSync(path.join(root, ".git/index"));
    const status = git(root, ["status", "--porcelain"]);
    const result = integrateGoalSnapshot({ config, stateDir, commandRunner: (command) => {
      if (command.name === "aliases_build") withGoalLock(stateDir, "author-review", () => {
        store.append({ event_id: "other-reviewed", type: "task_replaced", payload: { task: { id: "two", state: "valid_result" } } });
        store.append({ event_id: "next-snapshot", type: "snapshot_created", payload: { id: "snapshot-next", state: "integration_pending", task_ids: ["two"] } });
        assert.throws(() => integrateGoalSnapshot({ config, stateDir, snapshotId: "snapshot-next" }), (error) => error.code === "GOAL_LOCKED");
      });
      return fixtureBuild(command);
    } });
    assert.equal(result.status, "validated");
    const state = store.rebuild();
    assert.equal(state.tasks[0].state, "validated");
    assert.equal(state.tasks[1].state, "valid_result");
    assert.equal(state.snapshots[1].state, "integration_pending");
    assert.ok(store.readEvents().every((event, index) => event.sequence === index + 1));
    assert.equal(git(root, ["rev-parse", "HEAD"]), commit);
    assert.equal(git(root, ["status", "--porcelain"]), status);
    assert.deepEqual(readFileSync(path.join(root, ".git/index")), index);
    assert.equal(readFileSync(path.join(root, "user.txt"), "utf8"), "unstaged user data\n");
  });
});

for (const failBuild of [false, true]) {
  for (const replace of ["task", "snapshot"]) {
    test(`${failBuild ? "failed" : "successful"} integration cannot overwrite concurrent selected ${replace} changes`, () => {
      withIntegrationFixture(({ stateDir, store, config }) => {
        const commandRunner = (command) => {
          if (command.name === "aliases_build") withGoalLock(stateDir, "conflict-probe", () => {
            const state = store.rebuild();
            if (replace === "task") store.append({ event_id: "selected-task-changed", type: "task_replaced", payload: { task: { ...state.tasks[0], review_marker: "changed" } } });
            else store.append({ event_id: "selected-snapshot-changed", type: "snapshot_replaced", payload: { snapshot: { ...state.snapshots[0], review_marker: "changed" } } });
          });
          if (failBuild) throw new Error("fixture build failure");
          return fixtureBuild(command);
        };
        assert.throws(() => integrateGoalSnapshot({ config, stateDir, commandRunner }), (error) => error.code === "GOAL_INTEGRATION_STATE_CONFLICT");
        const state = store.rebuild();
        assert.equal((replace === "task" ? state.tasks[0] : state.snapshots[0]).review_marker, "changed");
        assert.equal(state.snapshots[0].state, "integrating");
      });
    });
  }
  test(`${failBuild ? "failed" : "successful"} build resumes finalization after lock contention without repeating commands`, () => {
    withIntegrationFixture(({ stateDir, store, config }) => {
      let calls = 0;
      const commandRunner = (command) => {
        calls += 1;
        if (command.name === "smoke_guidance") {
          writeFileSync(path.join(stateDir, "goal.lock"), JSON.stringify({ pid: process.pid, token: "fixture-owned", operation: "author-review" }));
          if (failBuild) throw new Error("fixture validation failed");
        }
        return fixtureBuild(command);
      };
      assert.throws(() => integrateGoalSnapshot({ config, stateDir, commandRunner }), (error) => error.code === "GOAL_LOCKED");
      assert.equal(store.rebuild().snapshots[0].state, "integrating");
      assert.equal(calls, 7);
      unlinkSync(path.join(stateDir, "goal.lock"));
      const resume = () => integrateGoalSnapshot({ config, stateDir, commandRunner: () => assert.fail("completed command must not run again") });
      if (failBuild) assert.throws(resume, (error) => error.code === "GOAL_INTEGRATION_COMMAND_FAILED");
      else assert.equal(resume().status, "validated");
      assert.equal(store.rebuild().snapshots[0].state, failBuild ? "retryable_failure" : "validated");
    });
  });
}

test("completed integration refuses recovery after output bytes change", () => {
  withIntegrationFixture(({ stateDir, store, config }) => {
    assert.throws(() => integrateGoalSnapshot({ config, stateDir, commandRunner: (command) => {
      if (command.name === "smoke_guidance") writeFileSync(path.join(stateDir, "goal.lock"), JSON.stringify({ pid: process.pid, token: "fixture-owned" }));
      return fixtureBuild(command);
    } }), (error) => error.code === "GOAL_LOCKED");
    unlinkSync(path.join(stateDir, "goal.lock"));
    const worktree = store.rebuild().snapshots[0].worktree_path;
    writeFileSync(path.join(worktree, "library/pcrs/metal/example/manifest.yaml"), "changed after validation\n");
    assert.throws(() => integrateGoalSnapshot({ config, stateDir, commandRunner: () => assert.fail("must not build") }), (error) => error.code === "GOAL_INTEGRATION_COMPLETION_CONFLICT");
    assert.equal(store.rebuild().snapshots[0].state, "integrating");
  });
});

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

test("correction snapshots retain an existing semantically identical accepted edge", () => {
  const existing = {
    code: "41112", label: "Ferro-manganese", pcr_id: "pcr.metal.ferro-manganese", mapping_type: "exact", confidence: "reviewed",
    acceptance: { status: "accepted", decided_by: "maintainer", decided_at_utc: "2026-09-02T00:00:00Z", decision_ref: "docs/adr/0083.md" },
  };
  const correctionProposal = {
    ...existing,
    acceptance: { ...existing.acceptance, decided_at_utc: "2026-09-03T00:00:00Z", decision_ref: "docs/adr/0087.md" },
  };

  const merged = mergeAcceptedMappings(
    { schema_version: 2, classification_system: "CPC", classification_version: "3.0", status: "current", mappings: [existing] },
    [correctionProposal],
    { materialPcrIds: new Set([existing.pcr_id]) },
  );

  assert.deepEqual(merged.mappings, [existing]);
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
  assert.equal(selectIntegrationBaseCommit({
    ...state,
    runtime_baseline: { commit: "e".repeat(40), base_commit: "d".repeat(40) },
  }), "e".repeat(40));
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
