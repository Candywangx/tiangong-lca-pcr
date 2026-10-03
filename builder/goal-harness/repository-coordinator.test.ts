import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";

import { errorCode, field, isRecord, type UnknownRecord } from "./domain.ts";
import type { CommittedRepositoryValidation } from "./repository-coordinator.ts";
function present<T>(value: T | null | undefined): T { assert.ok(value !== null && value !== undefined); return value; }
function record(value: unknown): UnknownRecord { assert.ok(isRecord(value)); return value; }
interface CommitAttempt { code: number | null; stdout: string; stderr: string; result: UnknownRecord }

import { GoalEventStore } from "./event-store.ts";
import {
  REPOSITORY_INTEGRATION_HEAD_REF,
  commitRepositoryValidation,
  listCommittedRepositoryValidations,
  recoverRepositoryCoordinator,
  repositoryCoordinatorStateDir,
  reserveRepositoryCandidate,
  selectRepositoryIntegrationHead,
} from "./repository-coordinator.ts";

function git(root: string, args: string[], input: string | undefined = undefined): string {
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

function childCommit(root: string, base: string, label: string): string {
  const tree = git(root, ["rev-parse", `${base}^{tree}`]);
  return git(root, ["commit-tree", tree, "-p", base], `${label}\n`);
}

function initializeGoal(root: string, goalId: string, snapshotId: string): string {
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
      (error: unknown) => errorCode(error) === "GOAL_REPOSITORY_CANDIDATE_STALE" && field(field(error, "details"), "current_head") === secondCommit,
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
      (error: unknown) => errorCode(error) === "GOAL_REPOSITORY_SOURCE_REF_CONFLICT",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("retained validation reads require the integration-head ref to exist and match the latest commit", () => {
  for (const mutation of ["delete", "substitute"]) {
    const { root, baseline } = createRepository();
    try {
      const candidate = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
      const integrationCommit = childCommit(root, baseline, "integration");
      commitRepositoryValidation({ projectRoot: root, candidateToken: candidate.candidate_token, integrationCommit });
      if (mutation === "delete") {
        git(root, ["update-ref", "-d", REPOSITORY_INTEGRATION_HEAD_REF]);
      } else {
        const substituted = childCommit(root, integrationCommit, "substituted head");
        git(root, ["update-ref", REPOSITORY_INTEGRATION_HEAD_REF, substituted]);
      }
      assert.throws(
        () => listCommittedRepositoryValidations({ projectRoot: root }),
        (error: unknown) => errorCode(error) === "GOAL_REPOSITORY_HEAD_CONFLICT",
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  }
});

test("recovery replaces a torn retained record from the authoritative committed journal", () => {
  const { root, baseline } = createRepository();
  try {
    const candidate = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    const integrationCommit = childCommit(root, baseline, "integration");
    const record = commitRepositoryValidation({ projectRoot: root, candidateToken: candidate.candidate_token, integrationCommit });
    const retainedPath = path.join(repositoryCoordinatorStateDir(root), "validations", "000000000001.json");
    writeFileSync(retainedPath, "{\"phase\":");
    assert.throws(() => listCommittedRepositoryValidations({ projectRoot: root }), (error: unknown) => errorCode(error) === "GOAL_REPOSITORY_STATE_INVALID");

    recoverRepositoryCoordinator({ projectRoot: root });
    assert.deepEqual(JSON.parse(readFileSync(retainedPath, "utf8")), record);
    assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: root }), [record]);
    const quarantined = readdirSync(path.join(repositoryCoordinatorStateDir(root), "record-recovery"));
    assert.equal(quarantined.length, 1);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a reader during retained-record staging sees only the complete committed journal", () => {
  const { root, baseline } = createRepository();
  try {
    const candidate = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    const integrationCommit = childCommit(root, baseline, "integration");
    let observed: CommittedRepositoryValidation[] | null = null;
    const record = commitRepositoryValidation({
      projectRoot: root,
      candidateToken: candidate.candidate_token,
      integrationCommit,
      faultInjector(phase, committed) {
        if (phase !== "after_record_staged") return;
        const retainedPath = path.join(repositoryCoordinatorStateDir(root), "validations", "000000000001.json");
        assert.equal(existsSync(retainedPath), false);
        observed = listCommittedRepositoryValidations({ projectRoot: root });
        assert.deepEqual(observed, [committed]);
      },
    });
    assert.deepEqual(observed, [record]);
    assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: root }), [record]);
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
      (error: unknown) => errorCode(error) === "TEST_CRASH",
    );
    assert.equal(listCommittedRepositoryValidations({ projectRoot: root }).length, 0);

    const recovered = recoverRepositoryCoordinator({ projectRoot: root, repairGoalProjections: true });
    assert.equal(present(recovered.recovered).phase, "validation_committed");
    assert.equal(present(recovered.recovered).repository_sequence, 1);
    assert.equal(recovered.projections.length, 1);

    const snapshot = present(new GoalEventStore({ stateDir }).rebuild().snapshots[0]);
    assert.equal(snapshot.state, "validated");
    assert.equal(snapshot.integration_commit, integrationCommit);
    assert.equal(snapshot.repository_sequence, 1);
    assert.equal(snapshot.source_ref, "refs/tiangong-viewer-sources/goal-a/snapshot-a");
    assert.equal(snapshot.viewer_publication, "pending");
    const task = present(new GoalEventStore({ stateDir }).rebuild().tasks[0]);
    assert.equal(task.state, "validated");
    assert.equal(task.integration_commit, integrationCommit);

    const eventsBefore = new GoalEventStore({ stateDir }).readEvents().length;
    recoverRepositoryCoordinator({ projectRoot: root, repairGoalProjections: true });
    assert.equal(new GoalEventStore({ stateDir }).readEvents().length, eventsBefore);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a merely prepared journal stays invisible and recovery retries its unchanged refs", () => {
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
      (error: unknown) => errorCode(error) === "TEST_CRASH",
    );
    assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: root }), []);
    assert.throws(() => git(root, ["rev-parse", REPOSITORY_INTEGRATION_HEAD_REF]));

    const recovered = recoverRepositoryCoordinator({ projectRoot: root });
    assert.equal(present(recovered.recovered).phase, "validation_committed");
    assert.equal(git(root, ["rev-parse", REPOSITORY_INTEGRATION_HEAD_REF]), integrationCommit);
    assert.equal(git(root, ["rev-parse", present(recovered.recovered).source_ref]), integrationCommit);
    assert.equal(listCommittedRepositoryValidations({ projectRoot: root }).length, 1);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("validation_committed journal is authoritative before the retained record is materialized", () => {
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
          if (phase === "after_validation_committed") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error: unknown) => errorCode(error) === "TEST_CRASH",
    );

    const coordinatorDir = repositoryCoordinatorStateDir(root);
    const journal = JSON.parse(readFileSync(path.join(coordinatorDir, "validation-journal.json"), "utf8"));
    assert.equal(journal.phase, "validation_committed");
    assert.equal(existsSync(path.join(coordinatorDir, "validations", "000000000001.json")), false);
    assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: root }), [journal]);

    const recovered = recoverRepositoryCoordinator({ projectRoot: root, repairGoalProjections: true });
    assert.equal(present(recovered.recovered).phase, "validation_committed");
    assert.equal(existsSync(path.join(coordinatorDir, "validations", "000000000001.json")), true);
    assert.equal(present(new GoalEventStore({ stateDir }).rebuild().snapshots[0]).viewer_publication, "pending");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("crash after authoritative commit but before Goal projection is repaired idempotently", () => {
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
        snapshotProjection: { task_ids: ["task-a"] },
        faultInjector(phase) {
          if (phase === "after_record_persisted") throw Object.assign(new Error("crash before Goal append"), { code: "TEST_CRASH" });
        },
      }),
      (error: unknown) => errorCode(error) === "TEST_CRASH",
    );
    assert.equal(present(new GoalEventStore({ stateDir }).rebuild().snapshots[0]).state, "integrating");

    recoverRepositoryCoordinator({ projectRoot: root });
    const recovered = new GoalEventStore({ stateDir });
    assert.equal(present(recovered.rebuild().snapshots[0]).state, "validated");
    const eventCount = recovered.readEvents().length;
    recoverRepositoryCoordinator({ projectRoot: root });
    assert.equal(recovered.readEvents().length, eventCount);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("project then land then recover preserves later state and allows the next repository integration", () => {
  const { root, baseline } = createRepository();
  const stateDir = initializeGoal(root, "goal-a", "snapshot-a");
  try {
    const firstCandidate = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    const firstCommit = childCommit(root, baseline, "first integration");
    commitRepositoryValidation({
      projectRoot: root,
      candidateToken: firstCandidate.candidate_token,
      integrationCommit: firstCommit,
      goalStateDir: stateDir,
      snapshotProjection: { task_ids: ["task-a"] },
    });
    const store = new GoalEventStore({ stateDir });
    let state = store.rebuild();
    store.append({ event_id: "snapshot-a-landed", type: "snapshot_replaced", payload: { snapshot: { ...present(state.snapshots[0]), state: "landed", landed_at: "2026-09-05T03:00:00.000Z" } } });
    state = store.rebuild();
    store.append({ event_id: "task-a-completed", type: "task_replaced", payload: { task: { ...present(state.tasks[0]), state: "completed", updated_at: "2026-09-05T03:00:00.000Z" } } });
    const eventsBeforeRecovery = store.readEvents().length;

    recoverRepositoryCoordinator({ projectRoot: root });
    assert.equal(store.readEvents().length, eventsBeforeRecovery);
    assert.equal(present(store.rebuild().snapshots[0]).state, "landed");
    assert.equal(present(store.rebuild().tasks[0]).state, "completed");

    store.append({ event_id: "snapshot-b-created", type: "snapshot_created", payload: { id: "snapshot-b", goal_id: "goal-a", state: "integrating", task_ids: [] } });
    const secondCandidate = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-b", fallbackHead: baseline });
    const secondCommit = childCommit(root, firstCommit, "second integration");
    const second = commitRepositoryValidation({ projectRoot: root, candidateToken: secondCandidate.candidate_token, integrationCommit: secondCommit, goalStateDir: stateDir });
    assert.equal(second.repository_sequence, 2);
    assert.equal(store.rebuild().snapshots.find((entry) => entry.id === "snapshot-a")?.state, "landed");
    assert.equal(store.rebuild().snapshots.find((entry) => entry.id === "snapshot-b")?.state, "validated");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("concurrent repository validation commits expose one atomic winner and one stale loser", async () => {
  const { root, baseline } = createRepository();
  try {
    const first = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-a", snapshotId: "snapshot-a", fallbackHead: baseline });
    const second = reserveRepositoryCandidate({ projectRoot: root, goalId: "goal-b", snapshotId: "snapshot-b", fallbackHead: baseline });
    const firstCommit = childCommit(root, baseline, "first integration");
    const secondCommit = childCommit(root, baseline, "second integration");
    const moduleUrl = pathToFileURL(path.join(process.cwd(), "builder/goal-harness/repository-coordinator.ts")).href;
    const runCommit = (candidateToken: string, integrationCommit: string) => new Promise<CommitAttempt>((resolve, reject) => {
      const source = `import { commitRepositoryValidation } from ${JSON.stringify(moduleUrl)};
try {
  const value = commitRepositoryValidation({ projectRoot: ${JSON.stringify(root)}, candidateToken: ${JSON.stringify(candidateToken)}, integrationCommit: ${JSON.stringify(integrationCommit)} });
  process.stdout.write(JSON.stringify({ ok: true, value }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, code: error.code }));
  process.exitCode = 1;
}`;
      const child = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
      let stdout = "";
      let stderr = "";
      child.stdout.on("data", (chunk) => { stdout += chunk; });
      child.stderr.on("data", (chunk) => { stderr += chunk; });
      child.on("error", reject);
      child.on("close", (code) => { try { const result = record(JSON.parse(stdout) as unknown); assert.equal(typeof result.ok, "boolean"); resolve({ code, stdout, stderr, result }); } catch (error) { reject(error); } });
    });

    const attempts = await Promise.all([
      runCommit(first.candidate_token, firstCommit),
      runCommit(second.candidate_token, secondCommit),
    ]);
    const winner = attempts.find((entry) => entry.result.ok);
    const loser = attempts.find((entry) => !entry.result.ok);
    assert.ok(winner);
    assert.ok(loser);
    assert.equal(typeof loser.result.code, "string");
    assert.match(String(loser.result.code), /^GOAL_(?:LOCKED|REPOSITORY_CANDIDATE_STALE)$/u);

    const records = listCommittedRepositoryValidations({ projectRoot: root });
    assert.equal(records.length, 1);
    assert.equal(present(records[0]).repository_sequence, 1);
    assert.equal(git(root, ["rev-parse", REPOSITORY_INTEGRATION_HEAD_REF]), present(records[0]).integration_commit);
    assert.equal(git(root, ["rev-parse", present(records[0]).source_ref]), present(records[0]).integration_commit);

    const losingCandidate = present(records[0]).candidate_token === first.candidate_token ? second : first;
    const losingCommit = present(records[0]).candidate_token === first.candidate_token ? secondCommit : firstCommit;
    assert.throws(
      () => commitRepositoryValidation({ projectRoot: root, candidateToken: losingCandidate.candidate_token, integrationCommit: losingCommit }),
      (error: unknown) => errorCode(error) === "GOAL_REPOSITORY_CANDIDATE_STALE",
    );
    assert.equal(listCommittedRepositoryValidations({ projectRoot: root }).length, 1);
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
      (error: unknown) => errorCode(error) === "TEST_CRASH",
    );

    const substituted = childCommit(root, baseline, "substituted head");
    git(root, ["update-ref", REPOSITORY_INTEGRATION_HEAD_REF, substituted]);
    assert.throws(
      () => recoverRepositoryCoordinator({ projectRoot: root }),
      (error: unknown) => errorCode(error) === "GOAL_REPOSITORY_RECOVERY_CONFLICT",
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
