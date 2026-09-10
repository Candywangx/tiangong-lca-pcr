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
import { commitRepositoryValidation, listCommittedRepositoryValidations, reserveRepositoryCandidate } from "./repository-coordinator.mjs";
import { publishAllPendingViewerSnapshots } from "./viewer-publication.mjs";
import { checkViewerCandidates } from "../../packages/pcr-viewer/scripts/build-viewer-data.mjs";

const repositoryRoot = path.resolve(import.meta.dirname, "../..");
const boundedPcrs = [
  {
    id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed",
    path: "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed",
  },
  {
    id: "pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone",
    path: "library/pcrs/agriculture-forestry-and-fishery-products/fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products/coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone",
  },
];

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
    writeFileSync(path.join(root, ".gitignore"), ".worktrees/\nstate/\nlibrary/.pcr-builder-state/\npackages/pcr-viewer/dist/\n");
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

function integrateFixtureSnapshot(options) {
  return integrateGoalSnapshot({ artifactStoreProbe: () => {}, viewerPublisher: () => {}, ...options });
}

for (const taskState of ["integrating", "integrated"]) {
  test(`legacy validated snapshot with ${taskState} tasks is not offered as ready to land`, () => {
    withIntegrationFixture(({ stateDir, store, config, snapshot, task }) => {
      store.append({ event_id: "legacy-snapshot-completed", type: "snapshot_replaced", payload: { snapshot: { ...snapshot, state: "validated" } } });
      store.append({ event_id: "legacy-task-interrupted", type: "task_replaced", payload: { task: { ...task, state: taskState } } });
      assert.throws(() => integrateFixtureSnapshot({ config, stateDir, snapshotId: snapshot.id }), (error) => error.code === "GOAL_INTEGRATION_FINALIZATION_INCOMPLETE");
      assert.equal(store.rebuild().tasks[0].state, taskState);
    });
  });
}

test("integration build permits queue state updates while rejecting a concurrent integration", () => {
  withIntegrationFixture(({ root, stateDir, store, config, commit }) => {
    const stoppedAfterProbe = new Error("fixture stops before expensive builds");
    let queueUpdated = false;
    assert.throws(() => integrateFixtureSnapshot({ config, stateDir, commandRunner: () => {
      withGoalLock(stateDir, "queue-probe", () => {
        new GoalEventStore({ stateDir }).append({ event_id: "probe-stop", type: "scheduling_stopped", payload: {} });
        queueUpdated = true;
      });
      assert.throws(() => integrateFixtureSnapshot({ config, stateDir }), (error) => error.code === "GOAL_LOCKED");
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
    const result = integrateFixtureSnapshot({ config, stateDir, commandRunner: (command) => {
      if (command.name === "aliases_build") withGoalLock(stateDir, "author-review", () => {
        store.append({ event_id: "other-reviewed", type: "task_replaced", payload: { task: { id: "two", state: "valid_result" } } });
        store.append({ event_id: "next-snapshot", type: "snapshot_created", payload: { id: "snapshot-next", state: "integration_pending", task_ids: ["two"] } });
        assert.throws(() => integrateFixtureSnapshot({ config, stateDir, snapshotId: "snapshot-next" }), (error) => error.code === "GOAL_LOCKED");
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
      withIntegrationFixture(({ root, stateDir, store, config }) => {
        const commandRunner = (command) => {
          if (command.name === "aliases_build") withGoalLock(stateDir, "conflict-probe", () => {
            const state = store.rebuild();
            if (replace === "task") store.append({ event_id: "selected-task-changed", type: "task_replaced", payload: { task: { ...state.tasks[0], review_marker: "changed" } } });
            else store.append({ event_id: "selected-snapshot-changed", type: "snapshot_replaced", payload: { snapshot: { ...state.snapshots[0], review_marker: "changed" } } });
          });
          if (failBuild) throw new Error("fixture build failure");
          return fixtureBuild(command);
        };
        assert.throws(() => integrateFixtureSnapshot({ config, stateDir, commandRunner }), (error) => error.code === "GOAL_INTEGRATION_STATE_CONFLICT");
        const state = store.rebuild();
        assert.equal((replace === "task" ? state.tasks[0] : state.snapshots[0]).review_marker, "changed");
        assert.equal(state.snapshots[0].state, "integrating");
        assert.equal(listCommittedRepositoryValidations({ projectRoot: root }).length, 0);
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
      assert.throws(() => integrateFixtureSnapshot({ config, stateDir, commandRunner }), (error) => error.code === "GOAL_LOCKED");
      assert.equal(store.rebuild().snapshots[0].state, "integrating");
      assert.equal(calls, 7);
      unlinkSync(path.join(stateDir, "goal.lock"));
      const resume = () => integrateFixtureSnapshot({ config, stateDir, commandRunner: () => assert.fail("completed command must not run again") });
      if (failBuild) assert.throws(resume, (error) => error.code === "GOAL_INTEGRATION_COMMAND_FAILED");
      else assert.equal(resume().status, "validated");
      assert.equal(store.rebuild().snapshots[0].state, failBuild ? "retryable_failure" : "validated");
    });
  });
}

test("completed integration refuses recovery after output bytes change", () => {
  withIntegrationFixture(({ stateDir, store, config }) => {
    assert.throws(() => integrateFixtureSnapshot({ config, stateDir, commandRunner: (command) => {
      if (command.name === "smoke_guidance") writeFileSync(path.join(stateDir, "goal.lock"), JSON.stringify({ pid: process.pid, token: "fixture-owned" }));
      return fixtureBuild(command);
    } }), (error) => error.code === "GOAL_LOCKED");
    unlinkSync(path.join(stateDir, "goal.lock"));
    const worktree = store.rebuild().snapshots[0].worktree_path;
    writeFileSync(path.join(worktree, "library/pcrs/metal/example/manifest.yaml"), "changed after validation\n");
    assert.throws(() => integrateFixtureSnapshot({ config, stateDir, commandRunner: () => assert.fail("must not build") }), (error) => error.code === "GOAL_INTEGRATION_COMPLETION_CONFLICT");
    assert.equal(store.rebuild().snapshots[0].state, "integrating");
  });
});

for (const changeOutput of [false, true]) {
  test(`repository acceptance before interrupted Goal finalization ${changeOutput ? "rejects changed output" : "recovers without rerunning gates"}`, () => {
    withIntegrationFixture(({ root, stateDir, store, config }) => {
      const append = GoalEventStore.prototype.append;
      let interrupted = false;
      GoalEventStore.prototype.append = function (event) {
        if (!interrupted && event.type === "integration_finalized") {
          interrupted = true;
          throw new Error("fixture interruption after repository acceptance");
        }
        return append.call(this, event);
      };
      try {
        assert.throws(() => integrateFixtureSnapshot({ config, stateDir, commandRunner: fixtureBuild }), /fixture interruption/u);
      } finally {
        GoalEventStore.prototype.append = append;
      }
      assert.equal(listCommittedRepositoryValidations({ projectRoot: root }).length, 1);
      assert.equal(store.rebuild().snapshots[0].state, "integrating");
      if (changeOutput) {
        writeFileSync(path.join(store.rebuild().snapshots[0].worktree_path, "library/pcrs/metal/example/manifest.yaml"), "changed after repository acceptance\n");
      }
      const resume = () => integrateFixtureSnapshot({ config, stateDir, commandRunner: () => assert.fail("completed gates must not run again") });
      if (changeOutput) {
        assert.throws(resume, (error) => error.code === "GOAL_INTEGRATION_COMPLETION_CONFLICT");
        assert.equal(store.rebuild().snapshots[0].state, "integrating");
      } else {
        const result = resume();
        assert.equal(result.status, "validated");
        assert.equal(result.snapshot.repository_sequence, 1);
        assert.deepEqual(result.snapshot.changed_pcr_ids, ["pcr.metal.example"]);
        assert.equal(store.rebuild().tasks[0].state, "validated");
        assert.equal(listCommittedRepositoryValidations({ projectRoot: root }).length, 1);
      }
    });
  });
}

test("Viewer publication retries after durable finalization without repeating integration gates", () => {
  withIntegrationFixture(({ root, stateDir, store, config }) => {
    assert.throws(() => integrateFixtureSnapshot({ config, stateDir, commandRunner: fixtureBuild, viewerPublisher: () => { throw new Error("fixture publication outage"); } }),
      (error) => error.code === "GOAL_VIEWER_PUBLICATION_FAILED");
    assert.equal(store.rebuild().snapshots[0].state, "validated");
    let published = 0;
    const result = integrateFixtureSnapshot({ config, stateDir, commandRunner: () => assert.fail("completed gates must not run again"), viewerPublisher: ({ snapshotId }) => {
      assert.equal(snapshotId, store.rebuild().snapshots[0].id);
      published += 1;
    } });
    assert.equal(result.status, "validated");
    assert.equal(published, 1);
    assert.equal(listCommittedRepositoryValidations({ projectRoot: root }).length, 1);
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
    assert.deepEqual(result.commands.map((command) => command.name), ["aliases_build", "catalog_build", "viewer_candidate_check", "validate", "smoke_list", "smoke_resolve", "smoke_guidance"]);
    const viewerCandidate = result.commands.find((command) => command.name === "viewer_candidate_check");
    assert.equal(viewerCandidate.args.filter((token) => token === "--pcr").length, 6);
    assert.ok(tasks.every((task) => viewerCandidate.args.includes(task.pcr_id)));
    assert.equal(new GoalEventStore({ stateDir }).rebuild().snapshots[0].state, "integration_pending");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("Harness Viewer candidate gate performs bounded PCR reads and each real global validation once", () => {
  const artifactReads = [];
  const gates = [];
  const result = checkViewerCandidates({
    root: repositoryRoot,
    pcrIds: boundedPcrs.map((entry) => entry.id),
    onPcrArtifactRead: (event) => artifactReads.push(event.relative_path),
    onGlobalGate: (event) => gates.push(event),
  });

  assert.deepEqual(result.checked_pcr_ids, boundedPcrs.map((entry) => entry.id).sort());
  assert.equal(artifactReads.every((relativePath) => boundedPcrs.some((entry) => relativePath.startsWith(`${entry.path}/`))), true);
  for (const pcr of boundedPcrs) {
    for (const leaf of ["pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"]) {
      assert.ok(artifactReads.filter((relativePath) => relativePath === `${pcr.path}/${leaf}`).length >= 1);
    }
  }
  const byGate = Object.fromEntries(gates.map((event) => [event.gate, event]));
  assert.deepEqual(gates.map((event) => event.gate).sort(), ["aliases", "catalog", "coverage", "full_contract"]);
  assert.ok(byGate.aliases.entry_count > 0);
  assert.ok(byGate.catalog.entry_count > 0);
  assert.ok(byGate.coverage.entry_count > 0);
  assert.equal(byGate.full_contract.object_count, boundedPcrs.length);
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

test("integration uses the accepted repository head across divergent Goal state", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-integration-global-head-"));
  try {
    git(root, ["init", "-q"]);
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    writeFileSync(path.join(root, "tracked.txt"), "baseline\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "baseline"]);
    const baseline = git(root, ["rev-parse", "HEAD"]);
    const candidate = reserveRepositoryCandidate({
      projectRoot: root,
      goalId: "other-goal",
      snapshotId: "snapshot-other",
      fallbackHead: baseline,
    });
    const tree = git(root, ["rev-parse", `${baseline}^{tree}`]);
    const accepted = execFileSync("git", ["commit-tree", tree, "-p", baseline], {
      cwd: root,
      input: "accepted other Goal\n",
      encoding: "utf8",
    }).trim();
    commitRepositoryValidation({ projectRoot: root, candidateToken: candidate.candidate_token, integrationCommit: accepted });

    const localGoalState = {
      baseline: { commit: baseline },
      snapshots: [{ id: "local-old", state: "landed", integration_commit: baseline }],
    };
    assert.equal(selectIntegrationBaseCommit(localGoalState, { projectRoot: root }), accepted);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
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

test("a Goal made stale during gates rematerializes on the accepted head and reruns every gate", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-integration-stale-e2e-"));
  const pcrPath = "library/pcrs/metal/test-product";
  const allowedFiles = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map((name) => `${pcrPath}/${name}`);
  try {
    git(root, ["init", "-q"]);
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    mkdirSync(path.join(root, pcrPath), { recursive: true });
    mkdirSync(path.join(root, "classifications/mappings"), { recursive: true });
    writeFileSync(path.join(root, ".gitignore"), ".worktrees/\nlibrary/.pcr-builder-state/\npackages/pcr-viewer/dist/\n");
    for (const file of allowedFiles) writeFileSync(path.join(root, file), `scaffold ${path.basename(file)}\n`);
    writeFileSync(path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml"), "schema_version: 2\nclassification_system: cpc\nclassification_version: '3.0'\nstatus: current\nmappings: []\n");
    git(root, ["add", "."]);
    git(root, ["commit", "-qm", "baseline"]);
    const baseline = git(root, ["rev-parse", "HEAD"]);

    writeFileSync(path.join(root, pcrPath, "manifest.yaml"), "id: pcr.metal.test-product\ncontent_maturity: authored_methodology\nclassification_refs:\n  - system: cpc\n    version: '3.0'\n    code: '41111'\n    mapping_type: exact\n");
    writeFileSync(path.join(root, pcrPath, "pcr.en-US.md"), "# Test product\n");
    writeFileSync(path.join(root, pcrPath, "pcr.zh-CN.md"), "# 测试产品\n");
    writeFileSync(path.join(root, pcrPath, "structured.yaml"), "schema_version: 1\n");
    git(root, ["add", "--", ...allowedFiles]);
    git(root, ["commit", "-qm", "author PCR"]);
    const authorCommit = git(root, ["rev-parse", "HEAD"]);

    const goalId = "goal-stale";
    const snapshotId = "snapshot-stale";
    const stateDir = path.join(root, "library/.pcr-builder-state/goals", goalId);
    const task = {
      id: "task-41111",
      cpc_code: "41111",
      product_name_en: "Test product",
      pcr_id: "pcr.metal.test-product",
      pcr_path: pcrPath,
      author_commit: authorCommit,
      allowed_files: allowedFiles,
      state: "integration_pending",
      transition_ids: [],
    };
    const snapshot = { id: snapshotId, goal_id: goalId, task_ids: [task.id], author_commits: [authorCommit], state: "integration_pending", created_at: "2026-09-05T00:00:00.000Z" };
    new GoalEventStore({ stateDir }).initialize({ goal_id: goalId, baseline: { commit: baseline }, tasks: [task], snapshots: [snapshot] });
    const config = {
      goal_id: goalId,
      project_root: root,
      target_category_relative: "library/pcrs/metal",
      classification_system: "cpc",
      classification_version: "3.0",
      integration_batch_size: 1,
      integration: { decided_by: "maintainer" },
      artifact_store: path.join(root, "viewer-artifacts"),
    };

    const gateRuns = new Map();
    let competingCommit = null;
    const runner = ({ cwd, name }) => {
      gateRuns.set(name, (gateRuns.get(name) ?? 0) + 1);
      if (!competingCommit) {
        const competing = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-other", snapshotId: "snapshot-other", fallbackHead: baseline });
        const competingWorktree = path.join(root, ".worktrees", "other-integration");
        mkdirSync(path.dirname(competingWorktree), { recursive: true });
        git(root, ["worktree", "add", "--detach", competingWorktree, baseline]);
        writeFileSync(path.join(competingWorktree, "classifications/mappings/other-goal.txt"), "other accepted input\n");
        git(competingWorktree, ["add", "."]);
        git(competingWorktree, ["commit", "-qm", "other Goal"]);
        competingCommit = git(competingWorktree, ["rev-parse", "HEAD"]);
        commitRepositoryValidation({ projectRoot: root, candidateToken: competing.candidate_token, integrationCommit: competingCommit });
      }
      return { name, exit_code: 0 };
    };
    const viewerPublisher = ({ config: publishConfig }) => publishAllPendingViewerSnapshots({
      config: publishConfig,
      publishSnapshot(options) {
        return { manifestRef: `sha256:${String(options.sequence).padStart(64, "0")}`, sequence: options.sequence };
      },
    });

    assert.throws(
      () => integrateGoalSnapshot({ config, stateDir, commandRunner: runner, viewerPublisher }),
      (error) => error.code === "GOAL_REPOSITORY_CANDIDATE_STALE",
    );
    const stale = new GoalEventStore({ stateDir }).rebuild().snapshots[0];
    assert.equal(stale.state, "retryable_failure");
    assert.equal(stale.base_commit, baseline);

    const result = integrateGoalSnapshot({ config, stateDir, commandRunner: runner, viewerPublisher });
    assert.equal(result.status, "validated");
    assert.equal(result.snapshot.base_commit, competingCommit);
    assert.equal(result.snapshot.integration_attempt, 2);
    assert.equal(result.snapshot.repository_sequence, 2);
    assert.equal(result.snapshot.viewer_publication, "published");
    assert.notEqual(result.snapshot.worktree_path, stale.worktree_path);
    for (const count of gateRuns.values()) assert.equal(count, 2);
    assert.equal(gateRuns.size, 7);
    const records = listCommittedRepositoryValidations({ projectRoot: root });
    assert.deepEqual(records.map((entry) => entry.repository_sequence), [1, 2]);
    assert.equal(records[1].expected_old_head, competingCommit);

    const store = new GoalEventStore({ stateDir });
    let landedState = store.rebuild();
    store.append({ event_id: `${snapshotId}-landed-test`, type: "snapshot_replaced", payload: { snapshot: { ...landedState.snapshots[0], state: "landed", landed_at: "2026-09-05T03:00:00.000Z" } } });
    landedState = store.rebuild();
    store.append({ event_id: `${task.id}-completed-test`, type: "task_replaced", payload: { task: { ...landedState.tasks[0], state: "completed", updated_at: "2026-09-05T03:00:00.000Z" } } });
    const completedTask = store.rebuild().tasks[0];
    store.append({ event_id: `${task.id}-next-integration`, type: "task_replaced", payload: { task: { ...completedTask, state: "integration_pending", author_commit: authorCommit } } });
    store.append({ event_id: "snapshot-next-created", type: "snapshot_created", payload: { id: "snapshot-next", goal_id: goalId, task_ids: [task.id], author_commits: [authorCommit], state: "integration_pending", created_at: "2026-09-05T04:00:00.000Z" } });

    const next = integrateGoalSnapshot({ config, stateDir, snapshotId: "snapshot-next", commandRunner: runner, viewerPublisher });
    assert.equal(next.snapshot.repository_sequence, 3);
    assert.equal(store.rebuild().snapshots.find((entry) => entry.id === snapshotId).state, "landed");
    assert.equal(store.rebuild().snapshots.find((entry) => entry.id === "snapshot-next").state, "validated");
    for (const count of gateRuns.values()) assert.equal(count, 3);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
