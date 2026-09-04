import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { GoalEventStore } from "./event-store.mjs";
import {
  commitRepositoryValidation,
  reserveRepositoryCandidate,
} from "./repository-coordinator.mjs";
import {
  listViewerPublications,
  publishPendingViewerSnapshots,
  recoverViewerPublications,
} from "./viewer-publication.mjs";
import { landGoalSnapshot } from "./landing.mjs";

function git(root, args, options = {}) {
  return execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    stdio: [options.input === undefined ? "ignore" : "pipe", "pipe", "pipe"],
    input: options.input,
  }).trim();
}

function fixture() {
  const root = mkdtempSync(path.join(tmpdir(), "goal-viewer-publication-"));
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "Goal Test"]);
  git(root, ["config", "user.email", "goal@example.invalid"]);
  writeFileSync(path.join(root, ".gitignore"), ".worktrees/\nlibrary/.pcr-builder-state/\n");
  writeFileSync(path.join(root, "tracked.txt"), "baseline\n");
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "baseline"]);
  const baseline = git(root, ["rev-parse", "HEAD"]);
  const artifactStore = path.join(root, "viewer-history");
  const config = { project_root: root, goal_id: "goal-a", artifact_store: artifactStore };
  return { root, baseline, artifactStore, config };
}

function commitValidation({ root, parent, goalId, snapshotId, content }) {
  const candidate = reserveRepositoryCandidate({
    projectRoot: root,
    goalId,
    snapshotId,
    fallbackHead: parent,
  });
  const blob = git(root, ["hash-object", "-w", "--stdin"], { input: `${content}\n` });
  const treeInput = `100644 blob ${blob}\ttracked.txt\n`;
  const tree = git(root, ["mktree"], { input: treeInput });
  const commit = git(root, ["commit-tree", tree, "-p", parent], { input: `${snapshotId}\n` });
  const stateDir = path.join(root, "library/.pcr-builder-state/goals", goalId);
  const landingSource = path.join(root, ".worktrees", "landing-sources", snapshotId);
  mkdirSync(landingSource, { recursive: true });
  writeFileSync(path.join(landingSource, "tracked.txt"), `${content}\n`);
  new GoalEventStore({ stateDir }).initialize({
    goal_id: goalId,
    baseline: { commit: parent },
    tasks: [],
    snapshots: [{ id: snapshotId, goal_id: goalId, task_ids: [], state: "integrating", worktree_path: landingSource }],
  });
  return commitRepositoryValidation({
    projectRoot: root,
    candidateToken: candidate.candidate_token,
    integrationCommit: commit,
    goalStateDir: stateDir,
    snapshotProjection: {
      id: snapshotId,
      goal_id: goalId,
      task_ids: [],
      state: "validated",
      integration_commit: commit,
      base_commit: parent,
      worktree_path: landingSource,
      changed_files: ["tracked.txt"],
      command_results: [{ name: "validate", exit_code: 0 }],
    },
  });
}

test("publishes the next repository sequence from an exact detached pinned source and projects success", () => {
  const { root, baseline, artifactStore, config } = fixture();
  try {
    const validation = commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "accepted" });
    const calls = [];
    const result = publishPendingViewerSnapshots({
      config,
      snapshotId: "snapshot-a",
      publishSnapshot(options) {
        calls.push(options);
        assert.notEqual(options.root, root);
        assert.equal(git(options.root, ["rev-parse", "HEAD"]), validation.integration_commit);
        assert.equal(readFileSync(path.join(options.root, "tracked.txt"), "utf8"), "accepted\n");
        assert.equal(options.sourceVerifier({ phase: "before", capture: {
          source_ref: validation.source_ref,
          integration_commit: validation.integration_commit,
          tree_hash: validation.tree_hash,
        } }), true);
        return { manifestRef: `sha256:${"a".repeat(64)}`, sequence: validation.repository_sequence };
      },
    });

    assert.equal(result.status, "published");
    assert.equal(calls.length, 1);
    assert.equal(calls[0].artifactStore, path.resolve(artifactStore));
    const publication = listViewerPublications({ projectRoot: root })[0];
    assert.equal(publication.repository_sequence, 1);
    assert.equal(publication.manifest_ref, `sha256:${"a".repeat(64)}`);
    const goalState = new GoalEventStore({ stateDir: path.join(root, "library/.pcr-builder-state/goals/goal-a") }).rebuild();
    assert.equal(goalState.snapshots[0].viewer_publication, "published");
    assert.equal(goalState.snapshots[0].viewer_manifest_ref, publication.manifest_ref);
    assert.equal(JSON.parse(readFileSync(path.join(artifactStore, "provenance", `${publication.viewer_snapshot_id}.json`), "utf8")).landing_state, "validated_not_landed");
    assert.equal(existsSync(calls[0].root), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("landing is repository ordered across Goals and requires the Viewer publication", () => {
  const { root, baseline, artifactStore } = fixture();
  try {
    const first = commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "first" });
    commitValidation({ root, parent: first.integration_commit, goalId: "goal-b", snapshotId: "snapshot-b", content: "second" });
    const publishConfig = { project_root: root, goal_id: "goal-a", artifact_store: artifactStore };
    publishAll(publishConfig);

    const configA = { ...publishConfig, goal_id: "goal-a" };
    const configB = { ...publishConfig, goal_id: "goal-b" };
    const stateA = path.join(root, "library/.pcr-builder-state/goals/goal-a");
    const stateB = path.join(root, "library/.pcr-builder-state/goals/goal-b");
    assert.throws(
      () => landGoalSnapshot({ config: configB, stateDir: stateB, snapshotId: "snapshot-b" }),
      (error) => error.code === "GOAL_LAND_SEQUENCE_GAP",
    );
    assert.equal(readFileSync(path.join(root, "tracked.txt"), "utf8"), "baseline\n");
    assert.equal(landGoalSnapshot({ config: configA, stateDir: stateA, snapshotId: "snapshot-a" }).status, "landed");
    assert.equal(landGoalSnapshot({ config: configB, stateDir: stateB, snapshotId: "snapshot-b" }).status, "landed");
    assert.equal(readFileSync(path.join(root, "tracked.txt"), "utf8"), "second\n");
    const secondPublication = listViewerPublications({ projectRoot: root }).at(-1);
    const provenance = JSON.parse(readFileSync(path.join(artifactStore, "provenance", `${secondPublication.viewer_snapshot_id}.json`), "utf8"));
    assert.equal(provenance.landing_state, "landed");
    assert.equal(provenance.integration_commit, secondPublication.integration_commit);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

function publishAll(config) {
  while (true) {
    const result = publishPendingViewerSnapshots({
      config,
      publishSnapshot(options) {
        return { manifestRef: `sha256:${String(options.sequence).padStart(64, "0")}`, sequence: options.sequence };
      },
    });
    if (result.status === "up_to_date") return;
  }
}

test("publication refuses an explicit snapshot that would skip a repository predecessor", () => {
  const { root, baseline, config } = fixture();
  try {
    const first = commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "first" });
    const second = commitValidation({ root, parent: first.integration_commit, goalId: "goal-b", snapshotId: "snapshot-b", content: "second" });
    assert.throws(
      () => publishPendingViewerSnapshots({ config, snapshotId: second.harness_snapshot_id, publishSnapshot() { throw new Error("must not publish"); } }),
      (error) => error.code === "GOAL_VIEWER_PUBLICATION_SEQUENCE_GAP",
    );
    assert.deepEqual(listViewerPublications({ projectRoot: root }), []);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("publication fails closed when the durable store capability probe rejects a requirement", () => {
  const { root, config } = fixture();
  try {
    assert.throws(
      () => publishPendingViewerSnapshots({
        config,
        capabilityProbe: () => ({ fsync: true, atomicRename: false, createIfAbsent: true }),
      }),
      (error) => error.code === "VIEWER_STORE_CAPABILITY_UNAVAILABLE",
    );
    assert.equal(existsSync(path.join(root, "library/.pcr-builder-state/repository-coordinator/viewer-publication/journal.json")), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("recovery materializes a publication committed before the Goal projection", () => {
  const { root, baseline, config } = fixture();
  try {
    commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "accepted" });
    assert.throws(
      () => publishPendingViewerSnapshots({
        config,
        snapshotId: "snapshot-a",
        publishSnapshot() { return { manifestRef: `sha256:${"b".repeat(64)}`, sequence: 1 }; },
        faultInjector(phase) { if (phase === "after_publication_committed") throw Object.assign(new Error("crash"), { code: "TEST_CRASH" }); },
      }),
      (error) => error.code === "TEST_CRASH",
    );
    const recovered = recoverViewerPublications({ config, recoverSnapshot: () => ({ recovered: false }), reconstructMissingArtifacts: false });
    assert.equal(recovered.publications.at(-1).manifest_ref, `sha256:${"b".repeat(64)}`);
    const state = new GoalEventStore({ stateDir: path.join(root, "library/.pcr-builder-state/goals/goal-a") }).rebuild();
    assert.equal(state.snapshots[0].viewer_publication, "published");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
