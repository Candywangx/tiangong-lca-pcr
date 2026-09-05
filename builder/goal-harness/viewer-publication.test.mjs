import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

import { GoalEventStore } from "./event-store.mjs";
import {
  commitRepositoryValidation,
  reserveRepositoryCandidate,
} from "./repository-coordinator.mjs";
import {
  listViewerPublications,
  listViewerPreActivationRecords,
  probeViewerArtifactStore,
  publishPendingViewerSnapshots,
  reconstructViewerArtifactStore,
  recoverViewerPublications,
} from "./viewer-publication.mjs";
import { landGoalSnapshot } from "./landing.mjs";
import { VIEWER_INCREMENTAL_GENERATOR_VERSION } from "../../packages/pcr-viewer/scripts/build-viewer-data.mjs";
import { ViewerSnapshotStore } from "../../packages/pcr-viewer/scripts/snapshot-store.mjs";

function git(root, args, options = {}) {
  return execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    stdio: [options.input === undefined ? "ignore" : "pipe", "pipe", "pipe"],
    input: options.input,
  }).trim();
}

function fixture({ baselineFiles = {} } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "goal-viewer-publication-"));
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "Goal Test"]);
  git(root, ["config", "user.email", "goal@example.invalid"]);
  writeFileSync(path.join(root, ".gitignore"), ".worktrees/\nlibrary/.pcr-builder-state/\n");
  writeFileSync(path.join(root, "tracked.txt"), "baseline\n");
  for (const [relativePath, content] of Object.entries(baselineFiles)) {
    writeFileSync(path.join(root, relativePath), content);
  }
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "baseline"]);
  const baseline = git(root, ["rev-parse", "HEAD"]);
  const artifactStore = path.join(root, "viewer-history");
  const config = {
    project_root: root,
    goal_id: "goal-a",
    artifact_store: artifactStore,
    baseline: { tracked_roots: [".gitignore", "tracked.txt", "pre-activation.txt", ...Object.keys(baselineFiles)] },
  };
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

function commitValidationFiles({ root, parent, goalId, snapshotId, files, changedFiles }) {
  const candidate = reserveRepositoryCandidate({ projectRoot: root, goalId, snapshotId, fallbackHead: parent });
  const treeInput = Object.entries(files).sort(([left], [right]) => left.localeCompare(right)).map(([file, content]) => {
    const blob = git(root, ["hash-object", "-w", "--stdin"], { input: content });
    return `100644 blob ${blob}\t${file}\n`;
  }).join("");
  const tree = git(root, ["mktree"], { input: treeInput });
  const commit = git(root, ["commit-tree", tree, "-p", parent], { input: `${snapshotId}\n` });
  const stateDir = path.join(root, "library/.pcr-builder-state/goals", goalId);
  new GoalEventStore({ stateDir }).initialize({
    goal_id: goalId,
    baseline: { commit: parent },
    tasks: [],
    snapshots: [{ id: snapshotId, goal_id: goalId, task_ids: [], state: "integrating", worktree_path: root }],
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
      worktree_path: root,
      changed_files: changedFiles,
      command_results: [{ name: "validate", exit_code: 0 }],
    },
  });
}

function commitFullTreeValidation({ root, parent, goalId, snapshotId, content }) {
  const candidate = reserveRepositoryCandidate({ projectRoot: root, goalId, snapshotId, fallbackHead: parent });
  writeFileSync(path.join(root, "tracked.txt"), `${content}\n`);
  git(root, ["add", "tracked.txt"]);
  const tree = git(root, ["write-tree"]);
  const commit = git(root, ["commit-tree", tree, "-p", parent], { input: `${snapshotId}\n` });
  git(root, ["reset", "-q", "--", "tracked.txt"]);
  const stateDir = path.join(root, "library/.pcr-builder-state/goals", goalId);
  new GoalEventStore({ stateDir }).initialize({
    goal_id: goalId,
    baseline: { commit: parent },
    tasks: [],
    snapshots: [{ id: snapshotId, goal_id: goalId, task_ids: [], state: "integrating", worktree_path: root }],
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
      worktree_path: root,
      changed_files: ["tracked.txt"],
      command_results: [{ name: "validate", exit_code: 0 }],
    },
  });
}

function publishFastValidViewerSnapshot(options) {
  const store = new ViewerSnapshotStore({
    root: options.artifactStore,
    generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION,
    sourceVerifier: options.sourceVerifier,
  });
  store.recover({ forceStaleLock: options.forceStaleLock });
  return store.publish({
    snapshotId: options.snapshotId,
    goalId: options.goalId,
    harnessSnapshotId: options.harnessSnapshotId,
    capturedAt: options.capturedAt,
    validatedAt: options.validatedAt,
    validationSummary: options.validationSummary,
    catalogScope: "material",
    sequence: options.sequence,
    generatorContractSha256: `sha256:${"1".repeat(64)}`,
    source: {
      catalog: `sha256:${"2".repeat(64)}`,
      aliases: `sha256:${"3".repeat(64)}`,
      coverage: [],
      releaseRevisionMarkers: {},
      source_ref: options.sourceRef,
      integration_commit: options.integrationCommit,
      base_commit: options.baseCommit,
      tree_hash: options.treeHash,
      ui_bundle_ref: `sha256:${"4".repeat(64)}`,
    },
    pcrEntries: [],
    aliasEntries: [],
    coverageEntries: [],
    pinnedSources: [],
    forceStaleLock: options.forceStaleLock,
  });
}

function replacePreparedWithSelfConsistentSubstitute({ artifactStore, journalPath }) {
  const store = new ViewerSnapshotStore({
    root: artifactStore,
    generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION,
    sourceVerifier: () => true,
  });
  const originalJournal = JSON.parse(readFileSync(journalPath, "utf8"));
  const manifest = store.readManifest(originalJournal.manifest_ref);
  const pcrEntries = Object.values(manifest.refs.pcr_entries).map((ref) => structuredClone(store.readObject(ref).entry));
  pcrEntries[0].markdown["en-US"] += "\n<!-- self-consistent substitute -->\n";
  const aliasEntries = Object.values(manifest.refs.alias_entries).map((ref) => structuredClone(store.readObject(ref).entry));
  const coverageEntries = Object.values(manifest.refs.coverage_entries).map((ref) => structuredClone(store.readObject(ref).entry));
  const uiBundle = store.readObject(manifest.capture.ui_bundle_ref).entry;
  rmSync(journalPath);
  assert.throws(
    () => store.publish({
      snapshotId: manifest.snapshot_id,
      goalId: manifest.goal_id,
      harnessSnapshotId: manifest.harness_snapshot_id,
      capturedAt: manifest.captured_at,
      validatedAt: manifest.validated_at,
      validationSummary: manifest.validation_summary,
      catalogScope: manifest.catalog_scope,
      sequence: manifest.sequence,
      generatorContractSha256: manifest.generator_contract_sha256,
      source: {
        catalog: manifest.source.catalog,
        aliases: manifest.source.aliases,
        coverage: manifest.source.coverage,
        releaseRevisionMarkers: manifest.source.release_revision_markers,
        source_ref: manifest.capture.source_ref,
        integration_commit: manifest.capture.integration_commit,
        base_commit: manifest.capture.base_commit,
        tree_hash: manifest.capture.tree_hash,
        ui_bundle_ref: uiBundle.id,
      },
      pcrEntries,
      aliasEntries,
      coverageEntries,
      pinnedSources: [],
      uiBundleUrl: uiBundle.asset_url,
      failurePhase: "prepared_before_callback",
    }),
    (error) => error.code === "VIEWER_PUBLICATION_INTERRUPTED",
  );
  return { original_manifest_ref: originalJournal.manifest_ref, substituted: JSON.parse(readFileSync(journalPath, "utf8")) };
}

function recoverFromDivergentCurrentCheckout({ root, config }) {
  const sourceRoot = path.resolve(import.meta.dirname, "../..");
  if (!existsSync(path.join(root, "node_modules"))) symlinkSync(path.join(sourceRoot, "node_modules"), path.join(root, "node_modules"), "dir");
  const orchestrator = "builder/goal-harness/viewer-publication.mjs";
  writeFileSync(path.join(root, orchestrator), readFileSync(path.join(sourceRoot, orchestrator)));
  const worker = "builder/goal-harness/pinned-viewer-publisher-worker.mjs";
  if (existsSync(path.join(sourceRoot, worker))) {
    writeFileSync(path.join(root, worker), readFileSync(path.join(sourceRoot, worker)));
  }

  const currentGenerator = path.join(root, "packages/pcr-viewer/scripts/build-viewer-data.mjs");
  writeFileSync(currentGenerator, `${readFileSync(currentGenerator, "utf8")}\nthrow new Error("CURRENT_CHECKOUT_GENERATOR_MUST_NOT_LOAD");\n`);
  const currentStatic = path.join(root, "packages/pcr-viewer/static/index.html");
  writeFileSync(currentStatic, `${readFileSync(currentStatic, "utf8")}\n<!-- divergent-current-ui -->\n`);
  const [currentPcr] = git(root, ["ls-files", ":(glob)library/pcrs/**/pcr.en-US.md"]).split("\n").filter(Boolean);
  writeFileSync(path.join(root, currentPcr), `${readFileSync(path.join(root, currentPcr), "utf8")}\n<!-- divergent-current-pcr -->\n`);

  const script = [
    `const module = await import(${JSON.stringify(`${pathToFileURL(path.join(root, orchestrator)).href}?checkout=${Date.now()}`)});`,
    "const result = module.recoverViewerPublications({ config: JSON.parse(process.argv[1]) });",
    "process.stdout.write(JSON.stringify(result));",
  ].join("\n");
  return JSON.parse(execFileSync(process.execPath, ["--input-type=module", "-e", script, JSON.stringify(config)], { encoding: "utf8" }));
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
          base_commit: validation.expected_old_head,
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
  const { root, baseline, artifactStore, config: baseConfig } = fixture();
  try {
    const first = commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "first" });
    const publishConfig = { ...baseConfig, goal_id: "goal-a" };
    publishAll(publishConfig);
    commitValidation({ root, parent: first.integration_commit, goalId: "goal-b", snapshotId: "snapshot-b", content: "second" });
    publishAll(publishConfig);

    const configA = { ...publishConfig, goal_id: "goal-a" };
    const configB = { ...publishConfig, goal_id: "goal-b" };
    const stateA = path.join(root, "library/.pcr-builder-state/goals/goal-a");
    const stateB = path.join(root, "library/.pcr-builder-state/goals/goal-b");
    assert.throws(
      () => landGoalSnapshot({ config: configA, stateDir: stateA, snapshotId: "snapshot-a" }),
      (error) => error.name === "ViewerSnapshotStoreError" || String(error.code).startsWith("VIEWER_") || error.code === "GOAL_VIEWER_ARTIFACT_HEAD_CONFLICT",
    );
    const verifiedArtifacts = () => true;
    assert.throws(
      () => landGoalSnapshot({ config: configB, stateDir: stateB, snapshotId: "snapshot-b", artifactStoreVerifier: verifiedArtifacts }),
      (error) => error.code === "GOAL_LAND_SEQUENCE_GAP",
    );
    assert.equal(readFileSync(path.join(root, "tracked.txt"), "utf8"), "baseline\n");
    writeFileSync(path.join(root, ".worktrees/landing-sources/snapshot-a/tracked.txt"), "mutable attacker bytes\n");
    assert.equal(landGoalSnapshot({ config: configA, stateDir: stateA, snapshotId: "snapshot-a", artifactStoreVerifier: verifiedArtifacts }).status, "landed");
    assert.equal(readFileSync(path.join(root, "tracked.txt"), "utf8"), "first\n");
    assert.equal(landGoalSnapshot({ config: configB, stateDir: stateB, snapshotId: "snapshot-b", artifactStoreVerifier: verifiedArtifacts }).status, "landed");
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
    publishAll(config);
    const second = commitValidation({ root, parent: first.integration_commit, goalId: "goal-b", snapshotId: "snapshot-b", content: "second" });
    const third = commitValidation({ root, parent: second.integration_commit, goalId: "goal-c", snapshotId: "snapshot-c", content: "third" });
    assert.throws(
      () => publishPendingViewerSnapshots({ config: { ...config, goal_id: "goal-c" }, snapshotId: third.harness_snapshot_id, publishSnapshot() { throw new Error("must not publish"); } }),
      (error) => error.code === "GOAL_VIEWER_PUBLICATION_SEQUENCE_GAP",
    );
    assert.deepEqual(listViewerPublications({ projectRoot: root }).map((entry) => entry.repository_sequence), [1]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("first activation bootstraps the current accepted validation and records earlier history as unavailable", () => {
  const { root, baseline, config } = fixture();
  try {
    const first = commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "first" });
    const second = commitValidation({ root, parent: first.integration_commit, goalId: "goal-b", snapshotId: "snapshot-b", content: "second" });
    const third = commitValidation({ root, parent: second.integration_commit, goalId: "goal-c", snapshotId: "snapshot-c", content: "third" });
    git(root, ["update-ref", "-d", first.source_ref]);
    const result = publishPendingViewerSnapshots({
      config: { ...config, goal_id: "goal-c" },
      snapshotId: "snapshot-c",
      publishSnapshot(options) {
        assert.equal(options.sequence, 1);
        assert.equal(options.bootstrap, true);
        assert.equal(options.integrationCommit, third.integration_commit);
        return { manifestRef: `sha256:${"c".repeat(64)}`, sequence: 1 };
      },
    });
    assert.equal(result.publication.repository_sequence, 3);
    assert.equal(result.publication.viewer_sequence, 1);
    assert.deepEqual(listViewerPreActivationRecords({ projectRoot: root }).map((entry) => entry.repository_sequence), [1, 2]);
    assert.ok(listViewerPreActivationRecords({ projectRoot: root }).every((entry) => entry.status === "pre_activation_unavailable"));
    assert.equal(listViewerPreActivationRecords({ projectRoot: root })[0].source_status, "missing");
    const stateDir = path.join(root, "library/.pcr-builder-state/goals/goal-c");
    assert.equal(landGoalSnapshot({ config: { ...config, goal_id: "goal-c" }, stateDir, snapshotId: "snapshot-c", artifactStoreVerifier: () => true }).status, "landed");
    assert.equal(readFileSync(path.join(root, "tracked.txt"), "utf8"), "third\n");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("first activation landing materializes cumulative additions and deletions from the pinned tree", () => {
  const { root, baseline, config } = fixture({ baselineFiles: { "obsolete.txt": "remove me\n" } });
  try {
    const ignored = ".worktrees/\nlibrary/.pcr-builder-state/\n";
    const first = commitValidationFiles({
      root,
      parent: baseline,
      goalId: "goal-a",
      snapshotId: "snapshot-a",
      files: { ".gitignore": ignored, "obsolete.txt": "remove me\n", "pre-activation.txt": "first\n", "tracked.txt": "baseline\n" },
      changedFiles: ["pre-activation.txt"],
    });
    const second = commitValidationFiles({
      root,
      parent: first.integration_commit,
      goalId: "goal-b",
      snapshotId: "snapshot-b",
      files: { ".gitignore": ignored, "pre-activation.txt": "first\n", "tracked.txt": "second\n" },
      changedFiles: ["obsolete.txt", "tracked.txt"],
    });
    publishPendingViewerSnapshots({
      config: { ...config, goal_id: "goal-b" },
      publishSnapshot: (options) => ({ manifestRef: `sha256:${"8".repeat(64)}`, sequence: options.sequence }),
    });
    assert.equal(existsSync(path.join(root, "pre-activation.txt")), false);
    const stateDir = path.join(root, "library/.pcr-builder-state/goals/goal-b");
    assert.equal(landGoalSnapshot({ config: { ...config, goal_id: "goal-b" }, stateDir, artifactStoreVerifier: () => true }).status, "landed");
    assert.equal(readFileSync(path.join(root, "pre-activation.txt"), "utf8"), "first\n");
    assert.equal(readFileSync(path.join(root, "tracked.txt"), "utf8"), "second\n");
    assert.equal(existsSync(path.join(root, "obsolete.txt")), false);
    const head = JSON.parse(readFileSync(path.join(root, "library/.pcr-builder-state/repository-coordinator/landing/head.json"), "utf8"));
    assert.deepEqual(Object.keys(head.path_fingerprints).sort(), ["obsolete.txt", "pre-activation.txt", "tracked.txt"]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("post-activation publication fails closed when its pinned source ref disappears", () => {
  const { root, baseline, config } = fixture();
  try {
    const validation = commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "accepted" });
    publishPendingViewerSnapshots({
      config,
      publishSnapshot: (options) => ({ manifestRef: `sha256:${"e".repeat(64)}`, sequence: options.sequence }),
    });
    git(root, ["update-ref", "-d", validation.source_ref]);
    assert.throws(
      () => publishPendingViewerSnapshots({ config, publishSnapshot() { throw new Error("must not publish"); } }),
      (error) => error.code === "GOAL_REPOSITORY_SOURCE_REF_CONFLICT",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("pre-activation provenance reports a moved source ref as divergence without fabricating history", () => {
  const { root, baseline, config } = fixture();
  try {
    const first = commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "first" });
    const second = commitValidation({ root, parent: first.integration_commit, goalId: "goal-b", snapshotId: "snapshot-b", content: "second" });
    publishPendingViewerSnapshots({
      config: { ...config, goal_id: "goal-b" },
      snapshotId: second.harness_snapshot_id,
      publishSnapshot: (options) => ({ manifestRef: `sha256:${"d".repeat(64)}`, sequence: options.sequence }),
    });
    git(root, ["update-ref", first.source_ref, second.integration_commit]);
    const [record] = listViewerPreActivationRecords({ projectRoot: root });
    assert.equal(record.source_status, "divergent");
    assert.equal(record.actual_source_commit, second.integration_commit);
    assert.deepEqual(listViewerPublications({ projectRoot: root }).map((entry) => entry.repository_sequence), [2]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("landing head recovery is durable after a crash between head CAS and Goal projection", () => {
  const { root, baseline, artifactStore, config } = fixture();
  try {
    commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "accepted" });
    publishAll(config);
    const stateDir = path.join(root, "library/.pcr-builder-state/goals/goal-a");
    assert.throws(
      () => landGoalSnapshot({
        config,
        stateDir,
        artifactStoreVerifier: () => true,
        faultInjector(phase) { if (phase === "after_repository_landing_head") throw Object.assign(new Error("crash"), { code: "TEST_CRASH" }); },
      }),
      (error) => error.code === "TEST_CRASH",
    );
    assert.equal(readFileSync(path.join(root, "tracked.txt"), "utf8"), "accepted\n");
    assert.equal(landGoalSnapshot({ config, stateDir, artifactStoreVerifier: () => true }).status, "already_landed");
    const journal = JSON.parse(readFileSync(path.join(root, "library/.pcr-builder-state/repository-coordinator/landing/journal.json"), "utf8"));
    assert.equal(journal.phase, "projected");
    const publication = listViewerPublications({ projectRoot: root })[0];
    assert.equal(JSON.parse(readFileSync(path.join(artifactStore, "provenance", `${publication.viewer_snapshot_id}.json`), "utf8")).landing_state, "landed");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("landing head exact-byte CAS rejects pointer substitution before touching repository files", () => {
  const { root, baseline, config } = fixture();
  try {
    commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "accepted" });
    publishAll(config);
    const stateDir = path.join(root, "library/.pcr-builder-state/goals/goal-a");
    const headPath = path.join(root, "library/.pcr-builder-state/repository-coordinator/landing/head.json");
    assert.throws(
      () => landGoalSnapshot({
        config,
        stateDir,
        artifactStoreVerifier: () => true,
        faultInjector(phase, transaction) {
          if (phase === "after_repository_landing_prepared") {
            mkdirSync(path.dirname(headPath), { recursive: true });
            writeFileSync(headPath, `${JSON.stringify({ ...transaction.next_head, goal_id: "attacker" }, null, 2)}\n`);
          }
        },
      }),
      (error) => error.code === "GOAL_LAND_HEAD_CAS_CONFLICT",
    );
    assert.equal(readFileSync(path.join(root, "tracked.txt"), "utf8"), "baseline\n");
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

test("repository publication lock requires force for a confirmed dead owner and never steals a live owner", () => {
  const { root, config } = fixture();
  const lockPath = path.join(root, "library/.pcr-builder-state/repository-coordinator/viewer-publication/goal.lock");
  try {
    mkdirSync(path.dirname(lockPath), { recursive: true });
    writeFileSync(lockPath, `${JSON.stringify({ schema_version: 1, token: "dead", pid: 2147483647, operation: "viewer-publish", acquired_at: "2026-09-05T00:00:00.000Z" })}\n`);
    assert.throws(
      () => publishPendingViewerSnapshots({ config }),
      (error) => error.code === "GOAL_STALE_LOCK_FORCE_REQUIRED",
    );
    assert.equal(publishPendingViewerSnapshots({ config, forceStaleLock: true }).status, "up_to_date");
    writeFileSync(lockPath, `${JSON.stringify({ schema_version: 1, token: "live", pid: process.pid, operation: "viewer-publish", acquired_at: new Date().toISOString() })}\n`);
    assert.throws(
      () => publishPendingViewerSnapshots({ config, forceStaleLock: true }),
      (error) => error.code === "GOAL_LOCKED",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("simultaneous Harness publishers serialize to one exact publication", async () => {
  const { root, baseline, config } = fixture();
  try {
    commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "accepted" });
    const moduleUrl = new URL("./viewer-publication.mjs", import.meta.url).href;
    const source = `import { publishPendingViewerSnapshots } from ${JSON.stringify(moduleUrl)};
const config = JSON.parse(process.argv[1]);
try {
  const result = publishPendingViewerSnapshots({ config, publishSnapshot(options) { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 750); return { manifestRef: 'sha256:' + '7'.repeat(64), sequence: options.sequence }; } });
  process.stdout.write(JSON.stringify({ ok: true, status: result.status, sequence: result.publication?.viewer_sequence ?? null }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, code: error.code }));
}`;
    const run = () => new Promise((resolve, reject) => {
      const child = spawn(process.execPath, ["--input-type=module", "-e", source, JSON.stringify(config)], { stdio: ["ignore", "pipe", "pipe"] });
      let stdout = "";
      let stderr = "";
      child.stdout.on("data", (chunk) => { stdout += chunk; });
      child.stderr.on("data", (chunk) => { stderr += chunk; });
      child.on("error", reject);
      child.on("close", (code) => code === 0 ? resolve(JSON.parse(stdout)) : reject(new Error(stderr)));
    });
    const results = await Promise.all([run(), run()]);
    assert.equal(results.filter((entry) => entry.status === "published" && entry.sequence === 1).length, 1);
    const follower = results.find((entry) => entry.status !== "published");
    assert.equal(
      follower.code === "GOAL_LOCKED" || (follower.ok === true && ["up_to_date", "already_published"].includes(follower.status) && follower.sequence === 1),
      true,
    );
    assert.deepEqual(listViewerPublications({ projectRoot: root }).map((entry) => entry.viewer_sequence), [1]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("Harness publication outer journal recovers every injected crash phase to one exact projection", () => {
  for (const phase of ["after_reserved", "after_artifact_published", "after_publication_committed", "after_goal_projection"]) {
    const { root, baseline, config } = fixture();
    try {
      commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "accepted" });
      const fakePublisher = (options) => ({ manifestRef: `sha256:${"6".repeat(64)}`, sequence: options.sequence });
      assert.throws(
        () => publishPendingViewerSnapshots({
          config,
          publishSnapshot: fakePublisher,
          faultInjector(actual) { if (actual === phase) throw Object.assign(new Error("crash"), { code: "TEST_CRASH" }); },
        }),
        (error) => error.code === "TEST_CRASH",
        phase,
      );
      publishPendingViewerSnapshots({ config, publishSnapshot: fakePublisher });
      const publications = listViewerPublications({ projectRoot: root });
      assert.equal(publications.length, 1, phase);
      assert.equal(publications[0].viewer_sequence, 1, phase);
      const state = new GoalEventStore({ stateDir: path.join(root, "library/.pcr-builder-state/goals/goal-a") }).rebuild();
      assert.equal(state.snapshots[0].viewer_publication, "published", phase);
      assert.equal(state.snapshots[0].viewer_manifest_ref, `sha256:${"6".repeat(64)}`, phase);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  }
});

test("recovery keeps Goal publication pending when a committed coordinator record has no durable Viewer artifacts", () => {
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
    assert.throws(
      () => recoverViewerPublications({ config, recoverSnapshot: () => ({ recovered: false }), reconstructMissingArtifacts: false }),
      (error) => error.code === "GOAL_VIEWER_ARTIFACT_MISSING",
    );
    const state = new GoalEventStore({ stateDir: path.join(root, "library/.pcr-builder-state/goals/goal-a") }).rebuild();
    assert.equal(state.snapshots[0].viewer_publication, "pending");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("real publisher recovery abandons uncommitted inner payloads and republishes only pinned source", { timeout: 240_000 }, () => {
  const parent = mkdtempSync(path.join(tmpdir(), "goal-viewer-real-"));
  const root = path.join(parent, "repo");
  const source = path.resolve(import.meta.dirname, "../..");
  try {
    execFileSync("git", ["clone", "--shared", "-q", source, root], { stdio: "ignore" });
    symlinkSync(path.join(source, "node_modules"), path.join(root, "node_modules"), "dir");
    git(root, ["config", "user.name", "Goal Test"]);
    git(root, ["config", "user.email", "goal@example.invalid"]);
    writeFileSync(path.join(root, "tracked.txt"), "baseline\n");
    git(root, ["add", "tracked.txt"]);
    git(root, ["commit", "-qm", "viewer recovery baseline"]);
    const baseline = git(root, ["rev-parse", "HEAD"]);
    const config = { project_root: root, goal_id: "goal-a", artifact_store: path.join(parent, "viewer-history") };
    const first = commitFullTreeValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "accepted" });
    assert.throws(
      () => publishPendingViewerSnapshots({
        config,
        faultInjector(phase) { if (phase === "after_artifact_prepared") throw Object.assign(new Error("crash"), { code: "TEST_CRASH" }); },
      }),
      (error) => error.code === "TEST_CRASH",
    );
    const journalPath = path.join(root, "library/.pcr-builder-state/repository-coordinator/viewer-publication/journal.json");
    const preparedBytes = readFileSync(journalPath, "utf8");
    const prepared = JSON.parse(preparedBytes);
    assert.equal(prepared.phase, "artifact_prepared");
    assert.match(prepared.expected_manifest_ref, /^sha256:[a-f0-9]{64}$/u);
    assert.equal(prepared.expected_inner_manifest_ref, prepared.expected_manifest_ref);
    assert.match(prepared.expected_inner_source_fingerprint, /^sha256:[a-f0-9]{64}$/u);
    assert.match(prepared.expected_inner_journal_identity_sha256, /^sha256:[a-f0-9]{64}$/u);
    assert.equal(prepared.expected_publisher_api_version, 1);
    assert.equal(prepared.expected_viewer_generator_version, VIEWER_INCREMENTAL_GENERATOR_VERSION);
    assert.equal(prepared.expected_manifest_schema_version, 1);
    assert.match(prepared.expected_schema_contract_sha256, /^sha256:[a-f0-9]{64}$/u);
    const innerJournalPath = path.join(config.artifact_store, "journal.json");
    const innerJournalBytes = readFileSync(innerJournalPath);
    assert.equal(existsSync(path.join(config.artifact_store, "active.json")), false);
    assert.equal(existsSync(path.join(config.artifact_store, "history-head.json")), false);
    writeFileSync(journalPath, `${JSON.stringify({ ...prepared, expected_manifest_ref: `sha256:${"f".repeat(64)}` }, null, 2)}\n`);
    assert.throws(
      () => recoverViewerPublications({ config }),
      (error) => error.code === "GOAL_VIEWER_PUBLICATION_MANIFEST_SUBSTITUTED",
    );
    assert.equal(existsSync(path.join(config.artifact_store, "active.json")), false);
    assert.equal(existsSync(path.join(config.artifact_store, "history-head.json")), false);
    assert.deepEqual(readFileSync(innerJournalPath), innerJournalBytes);
    const pendingState = new GoalEventStore({ stateDir: path.join(root, "library/.pcr-builder-state/goals/goal-a") }).rebuild();
    assert.equal(pendingState.snapshots[0].viewer_publication, "pending");
    writeFileSync(journalPath, preparedBytes);
    const recovered = recoverViewerPublications({ config });
    assert.equal(recovered.publications[0].manifest_ref, prepared.expected_manifest_ref);

    commitFullTreeValidation({ root, parent: first.integration_commit, goalId: "goal-b", snapshotId: "snapshot-b", content: "accepted twice" });
    assert.throws(
      () => publishPendingViewerSnapshots({
        config: { ...config, goal_id: "goal-b" },
        artifactFailurePhase: "prepared_before_callback",
      }),
      (error) => error.code === "VIEWER_PUBLICATION_INTERRUPTED",
    );
    const reservedBytes = readFileSync(journalPath);
    assert.equal(JSON.parse(reservedBytes).phase, "reserved");
    const secondInnerBytes = readFileSync(innerJournalPath);
    const oldActiveBytes = readFileSync(path.join(config.artifact_store, "active.json"));
    const oldHistoryBytes = readFileSync(path.join(config.artifact_store, "history-head.json"));
    const inner = JSON.parse(secondInnerBytes);
    const mismatches = [
      { ...inner, reservation: { ...inner.reservation, snapshot_id: "substituted-snapshot" } },
      { ...inner, cas: { ...inner.cas, active: { ...inner.cas.active, old_ref: null } } },
      { ...inner, phase: "history_prepared" },
    ];
    for (const mismatch of mismatches) {
      writeFileSync(innerJournalPath, `${JSON.stringify(mismatch)}\n`);
      const mismatchedBytes = readFileSync(innerJournalPath);
      assert.throws(
        () => recoverViewerPublications({ config: { ...config, goal_id: "goal-b" } }),
        (error) => error.code === "GOAL_VIEWER_PUBLICATION_INNER_MISMATCH",
      );
      assert.deepEqual(readFileSync(journalPath), reservedBytes);
      assert.deepEqual(readFileSync(innerJournalPath), mismatchedBytes);
      assert.deepEqual(readFileSync(path.join(config.artifact_store, "active.json")), oldActiveBytes);
      assert.deepEqual(readFileSync(path.join(config.artifact_store, "history-head.json")), oldHistoryBytes);
      writeFileSync(innerJournalPath, secondInnerBytes);
    }

    writeFileSync(path.join(config.artifact_store, "active.json"), `${JSON.stringify(inner.active)}\n`);
    const visibleActiveBytes = readFileSync(path.join(config.artifact_store, "active.json"));
    assert.throws(
      () => recoverViewerPublications({
        config: { ...config, goal_id: "goal-b" },
      }),
      (error) => error.code === "GOAL_VIEWER_PUBLICATION_INNER_MISMATCH",
    );
    assert.deepEqual(readFileSync(journalPath), reservedBytes);
    assert.deepEqual(readFileSync(innerJournalPath), secondInnerBytes);
    assert.deepEqual(readFileSync(path.join(config.artifact_store, "active.json")), visibleActiveBytes);
    assert.deepEqual(readFileSync(path.join(config.artifact_store, "history-head.json")), oldHistoryBytes);
    writeFileSync(path.join(config.artifact_store, "active.json"), oldActiveBytes);

    const substitute = replacePreparedWithSelfConsistentSubstitute({ artifactStore: config.artifact_store, journalPath: innerJournalPath });
    assert.notEqual(substitute.substituted.manifest_ref, substitute.original_manifest_ref);
    const substitutedBytes = readFileSync(innerJournalPath);
    assert.throws(
      () => recoverViewerPublications({
        config: { ...config, goal_id: "goal-b" },
        artifactAbandonFailurePhase: "abandon_archived",
      }),
      (error) => error.code === "GOAL_VIEWER_PUBLICATION_INNER_MISMATCH",
    );
    assert.deepEqual(readFileSync(journalPath), reservedBytes);
    assert.deepEqual(readFileSync(innerJournalPath), substitutedBytes);
    assert.deepEqual(readFileSync(path.join(config.artifact_store, "active.json")), oldActiveBytes);
    assert.deepEqual(readFileSync(path.join(config.artifact_store, "history-head.json")), oldHistoryBytes);
    assert.ok(readdirSync(path.join(config.artifact_store, "staging", "abandoned-journals")).length > 0);

    assert.throws(
      () => recoverViewerPublications({
        config: { ...config, goal_id: "goal-b" },
        artifactAbandonFailurePhase: "abandon_removed",
      }),
      (error) => error.code === "GOAL_VIEWER_PUBLICATION_INNER_MISMATCH",
    );
    assert.deepEqual(readFileSync(journalPath), reservedBytes);
    assert.equal(existsSync(innerJournalPath), false);
    assert.deepEqual(readFileSync(path.join(config.artifact_store, "active.json")), oldActiveBytes);
    assert.deepEqual(readFileSync(path.join(config.artifact_store, "history-head.json")), oldHistoryBytes);

    const recoveredPublication = recoverFromDivergentCurrentCheckout({ root, config: { ...config, goal_id: "goal-b" } });
    assert.deepEqual(recoveredPublication.publications.map((entry) => entry.viewer_sequence), [1, 2]);
    const recoveredStore = new ViewerSnapshotStore({ root: config.artifact_store, generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION, sourceVerifier: () => true });
    const recoveredManifest = recoveredStore.readManifest(recoveredPublication.publications.at(-1).manifest_ref);
    assert.deepEqual(recoveredManifest, recoveredStore.readManifest(substitute.original_manifest_ref));
    assert.notEqual(recoveredPublication.publications.at(-1).manifest_ref, substitute.substituted.manifest_ref);
    const recoveredUi = readFileSync(path.join(config.artifact_store, recoveredStore.readRoute(recoveredPublication.publications.at(-1).manifest_ref).ui_bundle_url, "index.html"), "utf8");
    assert.doesNotMatch(recoveredUi, /divergent-current-ui/u);
    const retry = recoverViewerPublications({ config: { ...config, goal_id: "goal-b" } });
    assert.deepEqual(retry.publications.map((entry) => entry.manifest_ref), recoveredPublication.publications.map((entry) => entry.manifest_ref));
  } finally {
    rmSync(parent, { recursive: true, force: true });
  }
});

test("deleted artifact reconstruction rebuilds only the published prefix and leaves the next validation publishable", () => {
  const { root, baseline, config } = fixture();
  try {
    const first = commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "first" });
    publishPendingViewerSnapshots({ config, publishSnapshot: publishFastValidViewerSnapshot });
    commitValidation({ root, parent: first.integration_commit, goalId: "goal-b", snapshotId: "snapshot-b", content: "second" });
    const publications = listViewerPublications({ projectRoot: root });

    rmSync(config.artifact_store, { recursive: true, force: true });
    probeViewerArtifactStore({ config });
    const direct = reconstructViewerArtifactStore({ config, publications, publishSnapshot: publishFastValidViewerSnapshot });
    assert.deepEqual(direct.sequences, [1]);

    rmSync(config.artifact_store, { recursive: true, force: true });
    const recovered = recoverViewerPublications({ config, publishSnapshot: publishFastValidViewerSnapshot });
    assert.deepEqual(recovered.reconstruction.sequences, [1]);
    assert.deepEqual(recovered.publications.map((entry) => entry.repository_sequence), [1]);

    const next = publishPendingViewerSnapshots({ config: { ...config, goal_id: "goal-b" }, publishSnapshot: publishFastValidViewerSnapshot });
    assert.equal(next.publication.repository_sequence, 2);
    assert.equal(next.publication.viewer_sequence, 2);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

for (const sourceState of ["missing", "substituted"]) {
  test(`deleted artifact reconstruction rejects a ${sourceState} post-activation source without projection`, () => {
    const { root, baseline, config } = fixture();
    try {
      const validation = commitValidation({ root, parent: baseline, goalId: "goal-a", snapshotId: "snapshot-a", content: "accepted" });
      assert.throws(
        () => publishPendingViewerSnapshots({
          config,
          publishSnapshot: publishFastValidViewerSnapshot,
          faultInjector(phase) {
            if (phase === "after_publication_committed") throw Object.assign(new Error("crash"), { code: "TEST_CRASH" });
          },
        }),
        (error) => error.code === "TEST_CRASH",
      );
      const goalStateDir = path.join(root, "library/.pcr-builder-state/goals/goal-a");
      assert.equal(new GoalEventStore({ stateDir: goalStateDir }).rebuild().snapshots[0].viewer_publication, "pending");
      rmSync(config.artifact_store, { recursive: true, force: true });
      git(root, ["update-ref", sourceState === "missing" ? "-d" : validation.source_ref, ...(sourceState === "missing" ? [validation.source_ref] : [baseline])]);

      assert.throws(
        () => recoverViewerPublications({ config, publishSnapshot: publishFastValidViewerSnapshot }),
        (error) => error.code === "GOAL_REPOSITORY_SOURCE_REF_CONFLICT",
      );
      assert.equal(existsSync(path.join(config.artifact_store, "active.json")), false);
      assert.equal(existsSync(path.join(config.artifact_store, "history-head.json")), false);
      assert.equal(new GoalEventStore({ stateDir: goalStateDir }).rebuild().snapshots[0].viewer_publication, "pending");
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
}
