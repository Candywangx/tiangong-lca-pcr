import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { GoalEventStore } from "./event-store.mjs";
import {
  REPOSITORY_INTEGRATION_HEAD_REF,
  commitRepositoryValidation,
  listCommittedRepositoryValidations,
  recoverRepositoryCoordinator,
  reserveRepositoryCandidate,
  selectRepositoryIntegrationHead,
} from "./repository-coordinator.mjs";

function git(root, args, input = undefined) {
  return execFileSync("git", args, {
    cwd: root,
    input,
    encoding: "utf8",
    stdio: [input === undefined ? "ignore" : "pipe", "pipe", "pipe"],
  }).trim();
}

function createRepository() {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-repository-coordinator-"));
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "Goal Test"]);
  git(root, ["config", "user.email", "goal@example.invalid"]);
  writeFileSync(path.join(root, "tracked.txt"), "baseline\n");
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "baseline"]);
  return { root, baseline: git(root, ["rev-parse", "HEAD"]) };
}

function childCommit(root, base, label) {
  const tree = git(root, ["rev-parse", `${base}^{tree}`]);
  return git(root, ["commit-tree", tree, "-p", base], `${label}\n`);
}

function initializeGoal(root, goalId, snapshotId) {
  const stateDir = path.join(root, "library", ".pcr-builder-state", "goals", goalId);
  mkdirSync(stateDir, { recursive: true });
  new GoalEventStore({ stateDir }).initialize({
    schema_version: 1,
    goal_id: goalId,
    baseline: { commit: git(root, ["rev-parse", "HEAD"]) },
    tasks: [{ id: "task-a", state: "integrating", transition_ids: [] }],
    snapshots: [{ id: snapshotId, goal_id: goalId, state: "integrating", task_ids: ["task-a"] }],
  });
  return stateDir;
}

test("candidate tokens are unordered and a stale candidate consumes no repository sequence", () => {
  const { root, baseline } = createRepository();
  try {
    const first = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    const second = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-b", snapshotId: "snapshot-b", fallbackHead: baseline });
    assert.notEqual(first.candidate_token, second.candidate_token);
    assert.equal(first.repository_sequence, undefined);
    assert.equal(second.repository_sequence, undefined);
    assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: root }), []);

    const secondCommit = childCommit(root, baseline, "goal b integration");
    const committed = commitRepositoryValidation({ projectRoot: root, candidateToken: second.candidate_token, integrationCommit: secondCommit });
    assert.equal(committed.phase, "validation_committed");
    assert.equal(committed.repository_sequence, 1);
    assert.equal(committed.viewer_publication, "pending");

    const firstCommit = childCommit(root, baseline, "goal a stale integration");
    assert.throws(
      () => commitRepositoryValidation({ projectRoot: root, candidateToken: first.candidate_token, integrationCommit: firstCommit }),
      (error) => error.code === "GOAL_REPOSITORY_CANDIDATE_STALE" && error.details.current_head === secondCommit,
    );
    assert.equal(listCommittedRepositoryValidations({ projectRoot: root }).length, 1);
    assert.equal(selectRepositoryIntegrationHead({ projectRoot: root, fallbackHead: baseline }), secondCommit);
    const retry = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    assert.notEqual(retry.candidate_token, first.candidate_token);
    assert.equal(retry.observed_integration_head, secondCommit);
    assert.equal(retry.repository_sequence, undefined);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("validation commit atomically guards the integration head and immutable source ref", () => {
  const { root, baseline } = createRepository();
  try {
    const candidate = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    const integrationCommit = childCommit(root, baseline, "integration");
    const record = commitRepositoryValidation({ projectRoot: root, candidateToken: candidate.candidate_token, integrationCommit });

    assert.equal(git(root, ["rev-parse", REPOSITORY_INTEGRATION_HEAD_REF]), integrationCommit);
    assert.equal(git(root, ["rev-parse", record.source_ref]), integrationCommit);
    assert.equal(record.source_ref, "refs/tiangong-viewer-sources/goal-a/snapshot-a");
    assert.equal(record.tree_hash, git(root, ["rev-parse", `${integrationCommit}^{tree}`]));

    const reread = listCommittedRepositoryValidations({ projectRoot: root });
    assert.deepEqual(reread, [record]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("retained validation reads fail closed after source-ref substitution", () => {
  const { root, baseline } = createRepository();
  try {
    const candidate = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    const integrationCommit = childCommit(root, baseline, "integration");
    const record = commitRepositoryValidation({ projectRoot: root, candidateToken: candidate.candidate_token, integrationCommit });
    const substituted = childCommit(root, integrationCommit, "substituted source");
    git(root, ["update-ref", record.source_ref, substituted]);

    assert.throws(
      () => listCommittedRepositoryValidations({ projectRoot: root }),
      (error) => error.code === "GOAL_REPOSITORY_SOURCE_REF_CONFLICT",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("recovery commits an exact prepared validation after refs advanced and repairs its Goal projection", () => {
  const { root, baseline } = createRepository();
  const stateDir = initializeGoal(root, "goal-a", "snapshot-a");
  try {
    const candidate = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    const integrationCommit = childCommit(root, baseline, "integration");

    assert.throws(
      () => commitRepositoryValidation({
        projectRoot: root,
        candidateToken: candidate.candidate_token,
        integrationCommit,
        snapshotProjection: { task_ids: ["task-a"], changed_files: ["tracked.txt"] },
        faultInjector(phase) {
          if (phase === "after_refs") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => error.code === "TEST_CRASH",
    );
    assert.equal(listCommittedRepositoryValidations({ projectRoot: root }).length, 0);

    const recovered = recoverRepositoryCoordinator({ projectRoot: root, repairGoalProjections: true });
    assert.equal(recovered.recovered.phase, "validation_committed");
    assert.equal(recovered.recovered.repository_sequence, 1);
    assert.equal(recovered.projections.length, 1);

    const snapshot = new GoalEventStore({ stateDir }).rebuild().snapshots[0];
    assert.equal(snapshot.state, "validated");
    assert.equal(snapshot.integration_commit, integrationCommit);
    assert.equal(snapshot.repository_sequence, 1);
    assert.equal(snapshot.source_ref, "refs/tiangong-viewer-sources/goal-a/snapshot-a");
    assert.equal(snapshot.viewer_publication, "pending");
    const task = new GoalEventStore({ stateDir }).rebuild().tasks[0];
    assert.equal(task.state, "validated");
    assert.equal(task.integration_commit, integrationCommit);

    const eventsBefore = new GoalEventStore({ stateDir }).readEvents().length;
    recoverRepositoryCoordinator({ projectRoot: root, repairGoalProjections: true });
    assert.equal(new GoalEventStore({ stateDir }).readEvents().length, eventsBefore);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("recovery fails closed when prepared refs were substituted", () => {
  const { root, baseline } = createRepository();
  try {
    const candidate = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    const integrationCommit = childCommit(root, baseline, "integration");
    assert.throws(
      () => commitRepositoryValidation({
        projectRoot: root,
        candidateToken: candidate.candidate_token,
        integrationCommit,
        faultInjector(phase) {
          if (phase === "after_prepare") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => error.code === "TEST_CRASH",
    );

    const substituted = childCommit(root, baseline, "substituted head");
    git(root, ["update-ref", REPOSITORY_INTEGRATION_HEAD_REF, substituted]);
    assert.throws(
      () => recoverRepositoryCoordinator({ projectRoot: root }),
      (error) => error.code === "GOAL_REPOSITORY_RECOVERY_CONFLICT",
    );
    assert.equal(listCommittedRepositoryValidations({ projectRoot: root }).length, 0);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("coordinator state is rooted outside every Goal directory", () => {
  const { root, baseline } = createRepository();
  try {
    reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    const metadataPath = path.join(root, "library", ".pcr-builder-state", "repository-coordinator", "metadata.json");
    const metadata = JSON.parse(readFileSync(metadataPath, "utf8"));
    assert.equal(metadata.initial_head, baseline);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
