import { execFileSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import {
  closeSync,
  existsSync,
  fsyncSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import {
  publishViewerSnapshot,
  recoverViewerSnapshot,
  VIEWER_INCREMENTAL_GENERATOR_VERSION,
} from "../../packages/pcr-viewer/scripts/build-viewer-data.mjs";
import { ViewerSnapshotStore } from "../../packages/pcr-viewer/scripts/snapshot-store.mjs";
import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { withGoalLock } from "./lock.mjs";
import {
  listCommittedRepositoryValidations,
  repositoryCoordinatorStateDir,
} from "./repository-coordinator.mjs";

const SHA256_REF = /^sha256:[a-f0-9]{64}$/u;

export function viewerPublicationStateDir(projectRoot) {
  return path.join(repositoryCoordinatorStateDir(projectRoot), "viewer-publication");
}

export function probeViewerArtifactStore({ config, capabilityProbe = null }) {
  const artifactStore = requireArtifactStore(config);
  const store = new ViewerSnapshotStore({
    root: artifactStore,
    generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION,
    capabilityProbe,
    // The capability probe does not read retained snapshots.
    sourceVerifier: () => true,
  });
  return store.probe();
}

export function listViewerPublications({ projectRoot }) {
  const directory = path.join(viewerPublicationStateDir(projectRoot), "records");
  if (!existsSync(directory)) return [];
  assertDirectory(directory, "GOAL_VIEWER_PUBLICATION_STATE_INVALID");
  const names = readdirSync(directory);
  if (names.some((name) => !/^\d{12}\.json$/u.test(name))) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_STATE_INVALID", "Viewer publication record directory contains an unexpected entry.");
  }
  const records = names
    .sort()
    .map((name) => readJson(path.join(directory, name), "GOAL_VIEWER_PUBLICATION_STATE_INVALID"));
  records.forEach((record, index) => {
    validatePublication(record);
    if (record.repository_sequence !== index + 1) {
      throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_SEQUENCE_INVALID", "Viewer publication records are not contiguous.", {
        expected_sequence: index + 1,
        actual_sequence: record.repository_sequence,
      });
    }
  });
  return records;
}

export function publishPendingViewerSnapshots({
  config,
  snapshotId = null,
  publishSnapshot = publishViewerSnapshot,
  capabilityProbe = null,
  now = () => new Date().toISOString(),
  faultInjector = () => {},
  forceStaleLock = false,
} = {}) {
  const verifyPublishedStore = publishSnapshot === publishViewerSnapshot;
  const projectRoot = config?.project_root;
  if (typeof projectRoot !== "string" || !projectRoot) {
    throw new GoalHarnessError("GOAL_PROJECT_ROOT_INVALID", "Viewer publication requires a Goal project root.");
  }
  probeViewerArtifactStore({ config, capabilityProbe });
  const stateDir = viewerPublicationStateDir(projectRoot);
  return withGoalLock(stateDir, "viewer-publish", () => {
    recoverPublicationJournal({ config, stateDir, now, faultInjector });
    const validations = listCommittedRepositoryValidations({ projectRoot });
    const publications = listViewerPublications({ projectRoot });
    assertPublicationStore(publications, requireArtifactStore(config));
    const next = validations[publications.length] ?? null;

    if (snapshotId) {
      const selected = validations.find((record) => record.harness_snapshot_id === snapshotId && record.goal_id === config.goal_id)
        ?? validations.find((record) => record.harness_snapshot_id === snapshotId);
      if (!selected) {
        throw new GoalHarnessError("GOAL_VIEWER_SNAPSHOT_NOT_VALIDATED", `No committed repository validation exists for snapshot ${snapshotId}.`);
      }
      const already = publications.find((record) => record.repository_sequence === selected.repository_sequence);
      if (already) {
        if (verifyPublishedStore) verifyArtifactStoreHead({ config, publications });
        projectViewerPublication({ projectRoot, publication: already });
        return { status: "already_published", publication: already, publications };
      }
      if (!next || selected.repository_sequence !== next.repository_sequence) {
        throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_SEQUENCE_GAP", "Viewer snapshots must be published in repository validation order.", {
          requested_sequence: selected.repository_sequence,
          next_sequence: next?.repository_sequence ?? null,
        });
      }
    }

    if (!next) {
      if (verifyPublishedStore && publications.length > 0) verifyArtifactStoreHead({ config, publications });
      for (const publication of publications) projectViewerPublication({ projectRoot, publication });
      return { status: "up_to_date", publication: publications.at(-1) ?? null, publications };
    }
    const publication = publishValidation({
      config,
      stateDir,
      validation: next,
      publishSnapshot,
      now,
      faultInjector,
      forceStaleLock,
    });
    return { status: "published", publication, publications: listViewerPublications({ projectRoot }) };
  });
}

export function publishAllPendingViewerSnapshots(options = {}) {
  const published = [];
  while (true) {
    const result = publishPendingViewerSnapshots({ ...options, snapshotId: null });
    if (result.status === "up_to_date") return { status: published.length ? "published" : "up_to_date", published, publications: result.publications };
    published.push(result.publication);
  }
}

export function recoverViewerPublications({
  config,
  recoverSnapshot = recoverViewerSnapshot,
  publishSnapshot = publishViewerSnapshot,
  reconstructMissingArtifacts = true,
  forceStaleLock = false,
  now = () => new Date().toISOString(),
  faultInjector = () => {},
} = {}) {
  probeViewerArtifactStore({ config });
  const stateDir = viewerPublicationStateDir(config.project_root);
  return withGoalLock(stateDir, "viewer-recover", () => {
    const artifact_recovery = recoverSnapshot({
      root: config.project_root,
      artifactStore: requireArtifactStore(config),
      forceStaleLock,
    });
    const recovered = recoverPublicationJournal({ config, stateDir, now, faultInjector });
    const publications = listViewerPublications({ projectRoot: config.project_root });
    assertPublicationStore(publications, requireArtifactStore(config));
    let reconstruction = null;
    if (publications.length > 0) {
      const activePath = path.join(requireArtifactStore(config), "active.json");
      if (!existsSync(activePath) && reconstructMissingArtifacts) {
        reconstruction = reconstructViewerArtifactStore({ config, publications, publishSnapshot, forceStaleLock });
      } else if (existsSync(activePath)) {
        verifyArtifactStoreHead({ config, publications });
      }
    }
    for (const publication of publications) projectViewerPublication({ projectRoot: config.project_root, publication });
    return { status: recovered || reconstruction ? "recovered" : "clean", recovered, artifact_recovery, reconstruction, publications };
  });
}

export function reconstructViewerArtifactStore({ config, publications, publishSnapshot = publishViewerSnapshot, forceStaleLock = false }) {
  const artifactStore = requireArtifactStore(config);
  assertPristineRecoverableStore(artifactStore);
  const validations = listCommittedRepositoryValidations({ projectRoot: config.project_root });
  if (validations.length !== publications.length) {
    throw new GoalHarnessError("GOAL_VIEWER_RECONSTRUCTION_INCOMPLETE", "Every committed repository validation after activation needs a retained Viewer publication record.", {
      validation_count: validations.length,
      publication_count: publications.length,
    });
  }
  const temporaryStore = `${artifactStore}.rebuild-${randomUUID()}`;
  const backupStore = `${artifactStore}.empty-${randomUUID()}`;
  try {
    for (const [index, validation] of validations.entries()) {
      const expected = publications[index];
      if (expected.repository_sequence !== validation.repository_sequence || expected.integration_commit !== validation.integration_commit) {
        throw new GoalHarnessError("GOAL_VIEWER_RECONSTRUCTION_PROVENANCE_INVALID", "Viewer publication history does not match repository validation history.");
      }
      const result = withPinnedSourceWorktree({
        projectRoot: config.project_root,
        validation,
        read(sourceRoot, sourceVerifier) {
          return publishSnapshot({
            root: sourceRoot,
            artifactStore: temporaryStore,
            snapshotId: expected.viewer_snapshot_id,
            goalId: validation.goal_id,
            harnessSnapshotId: validation.harness_snapshot_id,
            sequence: validation.repository_sequence,
            sourceRef: validation.source_ref,
            integrationCommit: validation.integration_commit,
            baseCommit: validation.expected_old_head,
            treeHash: validation.tree_hash,
            capturedAt: expected.captured_at,
            validatedAt: validation.validated_at,
            validationSummary: validationSummary(validation),
            bootstrap: validation.repository_sequence === 1,
            changedPcrIds: changedPcrIds(validation),
            sourceVerifier,
            forceStaleLock,
          });
        },
      });
      if (result.manifestRef !== expected.manifest_ref || result.sequence !== expected.repository_sequence) {
        throw new GoalHarnessError("GOAL_VIEWER_RECONSTRUCTION_DIVERGED", "Reconstructed Viewer bytes differ from retained publication provenance.", {
          repository_sequence: expected.repository_sequence,
          expected_manifest_ref: expected.manifest_ref,
          actual_manifest_ref: result.manifestRef,
        });
      }
    }
    renameSync(artifactStore, backupStore);
    try {
      renameSync(temporaryStore, artifactStore);
      fsyncDirectory(path.dirname(artifactStore));
    } catch (error) {
      renameSync(backupStore, artifactStore);
      throw error;
    }
    rmSync(backupStore, { recursive: true, force: true });
    verifyArtifactStoreHead({ config, publications });
    return { rebuilt: true, sequences: publications.map((entry) => entry.repository_sequence) };
  } finally {
    rmSync(temporaryStore, { recursive: true, force: true });
  }
}

function verifyArtifactStoreHead({ config, publications }) {
  const validations = listCommittedRepositoryValidations({ projectRoot: config.project_root });
  const store = new ViewerSnapshotStore({
    root: requireArtifactStore(config),
    generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION,
    sourceVerifier: ({ capture }) => {
      const validation = validations.find((entry) => entry.repository_sequence === publications.find((item) => item.integration_commit === capture.integration_commit)?.repository_sequence);
      if (!validation) return false;
      verifyPinnedSource({ projectRoot: config.project_root, validation });
      return true;
    },
  });
  const active = store.readActive();
  const latest = publications.at(-1);
  if (active.sequence !== latest.repository_sequence || active.snapshot_id !== latest.viewer_snapshot_id || active.manifest_ref !== latest.manifest_ref) {
    throw new GoalHarnessError("GOAL_VIEWER_ARTIFACT_HEAD_CONFLICT", "Durable Viewer active pointer differs from repository publication history.");
  }
}

function assertPristineRecoverableStore(artifactStore) {
  const allowedDirectories = new Set(["objects", "manifests", "routes", "history", "staging", "locks"]);
  for (const entry of readdirSync(artifactStore, { withFileTypes: true })) {
    if (!entry.isDirectory() || !allowedDirectories.has(entry.name) || readdirSync(path.join(artifactStore, entry.name)).length > 0) {
      throw new GoalHarnessError("GOAL_VIEWER_RECONSTRUCTION_STORE_NOT_EMPTY", "Automatic Viewer reconstruction requires a newly created empty artifact store.", {
        artifact_store: artifactStore,
      });
    }
  }
}

export function projectViewerPublication({ projectRoot, publication }) {
  validatePublication(publication);
  writeViewerLandingProvenance({ publication, landingState: "validated_not_landed" });
  const stateDir = path.join(projectRoot, "library", ".pcr-builder-state", "goals", publication.goal_id);
  if (!existsSync(path.join(stateDir, "initial-state.json"))) {
    return { status: "goal_state_unavailable", goal_id: publication.goal_id, snapshot_id: publication.harness_snapshot_id };
  }
  const store = new GoalEventStore({ stateDir });
  const state = store.rebuild();
  const snapshot = state.snapshots?.find((entry) => entry.id === publication.harness_snapshot_id);
  if (!snapshot || snapshot.repository_sequence !== publication.repository_sequence || snapshot.integration_commit !== publication.integration_commit) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_PROJECTION_CONFLICT", "Viewer publication cannot be projected onto a different Goal validation identity.", {
      goal_id: publication.goal_id,
      snapshot_id: publication.harness_snapshot_id,
      repository_sequence: publication.repository_sequence,
    });
  }
  if (snapshot.viewer_publication === "published") {
    if (snapshot.viewer_manifest_ref !== publication.manifest_ref || snapshot.viewer_sequence !== publication.repository_sequence) {
      throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_PROJECTION_CONFLICT", "Goal snapshot carries a different Viewer publication identity.");
    }
    return { status: "already_projected", goal_id: publication.goal_id, snapshot_id: publication.harness_snapshot_id };
  }
  store.append({
    event_id: `viewer-publication-${String(publication.repository_sequence).padStart(12, "0")}`,
    type: "viewer_snapshot_published",
    payload: {
      snapshot_id: publication.harness_snapshot_id,
      repository_sequence: publication.repository_sequence,
      integration_commit: publication.integration_commit,
      manifest_ref: publication.manifest_ref,
      viewer_snapshot_id: publication.viewer_snapshot_id,
      published_at: publication.published_at,
    },
  });
  return { status: "projected", goal_id: publication.goal_id, snapshot_id: publication.harness_snapshot_id };
}

export function writeViewerLandingProvenance({ publication, landingState, landedAt = null }) {
  validatePublication(publication);
  if (!new Set(["validated_not_landed", "landed"]).has(landingState)) {
    throw new GoalHarnessError("GOAL_VIEWER_PROVENANCE_INVALID", `Invalid Viewer landing state: ${landingState}.`);
  }
  if (landingState === "landed" && !Number.isFinite(Date.parse(landedAt ?? ""))) {
    throw new GoalHarnessError("GOAL_VIEWER_PROVENANCE_INVALID", "Landed Viewer provenance requires a UTC landing timestamp.");
  }
  const directory = path.join(publication.artifact_store, "provenance");
  mkdirSync(directory, { recursive: true });
  const file = path.join(directory, `${publication.viewer_snapshot_id}.json`);
  const next = {
    schema_version: 1,
    snapshot_id: publication.viewer_snapshot_id,
    goal_id: publication.goal_id,
    harness_snapshot_id: publication.harness_snapshot_id,
    repository_sequence: publication.repository_sequence,
    integration_commit: publication.integration_commit,
    manifest_ref: publication.manifest_ref,
    landing_state: landingState,
    landed_at: landingState === "landed" ? landedAt : null,
  };
  if (existsSync(file)) {
    const current = readJson(file, "GOAL_VIEWER_PROVENANCE_INVALID");
    if (current.schema_version !== 1 || !["validated_not_landed", "landed"].includes(current.landing_state) ||
        (current.landing_state === "landed" && !Number.isFinite(Date.parse(current.landed_at ?? "")))) {
      throw new GoalHarnessError("GOAL_VIEWER_PROVENANCE_INVALID", "Viewer landing provenance is malformed.");
    }
    for (const field of ["snapshot_id", "goal_id", "harness_snapshot_id", "repository_sequence", "integration_commit", "manifest_ref"]) {
      if (current[field] !== next[field]) {
        throw new GoalHarnessError("GOAL_VIEWER_PROVENANCE_CONFLICT", "Viewer landing provenance identity was substituted.", { field });
      }
    }
    if (current.landing_state === "landed" && landingState === "validated_not_landed") return current;
    if (current.landing_state === "landed" && current.landed_at !== landedAt) {
      throw new GoalHarnessError("GOAL_VIEWER_PROVENANCE_CONFLICT", "Viewer snapshot already carries a different landing timestamp.");
    }
  }
  writeJsonAtomic(file, next);
  return next;
}

function publishValidation({ config, stateDir, validation, publishSnapshot, now, faultInjector, forceStaleLock }) {
  const artifactStore = requireArtifactStore(config);
  const viewerSnapshotId = viewerSnapshotIdFor(validation);
  const reserved = {
    schema_version: 1,
    phase: "reserved",
    goal_id: validation.goal_id,
    harness_snapshot_id: validation.harness_snapshot_id,
    repository_sequence: validation.repository_sequence,
    integration_commit: validation.integration_commit,
    source_ref: validation.source_ref,
    tree_hash: validation.tree_hash,
    artifact_store: artifactStore,
    viewer_snapshot_id: viewerSnapshotId,
    captured_at: now(),
    reserved_at: now(),
  };
  writeJsonAtomic(path.join(stateDir, "journal.json"), reserved);
  faultInjector("after_reserved", reserved);

  const published = withPinnedSourceWorktree({
    projectRoot: config.project_root,
    validation,
    read(sourceRoot, sourceVerifier) {
      return publishSnapshot({
        root: sourceRoot,
        artifactStore,
        snapshotId: viewerSnapshotId,
        goalId: validation.goal_id,
        harnessSnapshotId: validation.harness_snapshot_id,
        sequence: validation.repository_sequence,
        sourceRef: validation.source_ref,
        integrationCommit: validation.integration_commit,
        baseCommit: validation.expected_old_head,
        treeHash: validation.tree_hash,
        capturedAt: reserved.captured_at,
        validatedAt: validation.validated_at,
        validationSummary: validationSummary(validation),
        bootstrap: validation.repository_sequence === 1,
        changedPcrIds: changedPcrIds(validation),
        sourceVerifier,
        forceStaleLock,
      });
    },
  });
  if (!SHA256_REF.test(published?.manifestRef ?? "") || published.sequence !== validation.repository_sequence) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_RESULT_INVALID", "Viewer publisher returned an invalid manifest identity.");
  }
  const publication = {
    schema_version: 1,
    status: "published",
    goal_id: validation.goal_id,
    harness_snapshot_id: validation.harness_snapshot_id,
    repository_sequence: validation.repository_sequence,
    integration_commit: validation.integration_commit,
    source_ref: validation.source_ref,
    tree_hash: validation.tree_hash,
    artifact_store: artifactStore,
    viewer_snapshot_id: viewerSnapshotId,
    manifest_ref: published.manifestRef,
    captured_at: reserved.captured_at,
    published_at: now(),
  };
  const artifactPublished = { ...reserved, phase: "artifact_published", publication };
  writeJsonAtomic(path.join(stateDir, "journal.json"), artifactPublished);
  faultInjector("after_artifact_published", artifactPublished);
  materializePublication({ stateDir, publication });
  const committed = { ...artifactPublished, phase: "publication_committed" };
  writeJsonAtomic(path.join(stateDir, "journal.json"), committed);
  faultInjector("after_publication_committed", committed);
  projectViewerPublication({ projectRoot: config.project_root, publication });
  const projected = { ...committed, phase: "projected" };
  writeJsonAtomic(path.join(stateDir, "journal.json"), projected);
  faultInjector("after_goal_projection", projected);
  return publication;
}

function recoverPublicationJournal({ config, stateDir, now, faultInjector }) {
  const journalPath = path.join(stateDir, "journal.json");
  if (!existsSync(journalPath)) return null;
  const journal = readJson(journalPath, "GOAL_VIEWER_PUBLICATION_JOURNAL_INVALID");
  if (!["reserved", "artifact_published", "publication_committed", "projected"].includes(journal.phase)) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_JOURNAL_INVALID", "Unknown Viewer publication journal phase.");
  }
  if (journal.phase === "reserved") {
    const recovered = publicationFromReservedActive({ config, journal, now });
    if (!recovered) return { retry_required: true, ...journal };
    const artifactPublished = { ...journal, phase: "artifact_published", publication: recovered };
    writeJsonAtomic(journalPath, artifactPublished);
    return recoverPublicationJournal({ config, stateDir, now, faultInjector });
  }
  validatePublication(journal.publication);
  assertPublicationStore([journal.publication], requireArtifactStore(config));
  materializePublication({ stateDir, publication: journal.publication });
  if (journal.phase !== "projected") {
    projectViewerPublication({ projectRoot: config.project_root, publication: journal.publication });
    const projected = { ...journal, phase: "projected", recovered_at: now() };
    writeJsonAtomic(journalPath, projected);
    faultInjector("after_recovered_goal_projection", projected);
  } else {
    projectViewerPublication({ projectRoot: config.project_root, publication: journal.publication });
  }
  return journal.publication;
}

function withPinnedSourceWorktree({ projectRoot, validation, read }) {
  verifyPinnedSource({ projectRoot, validation });
  const parent = path.join(projectRoot, ".worktrees", "viewer-publication");
  mkdirSync(parent, { recursive: true });
  const sourceRoot = path.join(parent, `${String(validation.repository_sequence).padStart(12, "0")}-${randomUUID()}`);
  try {
    git(projectRoot, ["worktree", "add", "--detach", sourceRoot, validation.source_ref]);
    const sourceVerifier = ({ capture }) => {
      try {
        verifyPinnedSource({ projectRoot, validation });
        const head = git(sourceRoot, ["rev-parse", "--verify", "HEAD^{commit}"]);
        const tree = git(sourceRoot, ["rev-parse", "--verify", "HEAD^{tree}"]);
        const status = git(sourceRoot, ["status", "--porcelain=v1", "--untracked-files=all"]);
        return head === capture.integration_commit && tree === capture.tree_hash && status === "";
      } catch {
        return false;
      }
    };
    if (!sourceVerifier({ capture: { integration_commit: validation.integration_commit, tree_hash: validation.tree_hash } })) {
      throw new GoalHarnessError("GOAL_VIEWER_SOURCE_INVALID", "Detached Viewer publication source does not match its pinned validation identity.");
    }
    const result = read(sourceRoot, sourceVerifier);
    if (!sourceVerifier({ capture: { integration_commit: validation.integration_commit, tree_hash: validation.tree_hash } })) {
      throw new GoalHarnessError("GOAL_VIEWER_SOURCE_CHANGED", "Detached Viewer publication source changed while it was being read.");
    }
    return result;
  } finally {
    if (existsSync(sourceRoot)) {
      git(projectRoot, ["worktree", "remove", "--force", sourceRoot]);
    }
  }
}

function verifyPinnedSource({ projectRoot, validation }) {
  const refCommit = git(projectRoot, ["rev-parse", "--verify", `${validation.source_ref}^{commit}`]);
  const tree = git(projectRoot, ["rev-parse", "--verify", `${validation.integration_commit}^{tree}`]);
  if (refCommit !== validation.integration_commit || tree !== validation.tree_hash) {
    throw new GoalHarnessError("GOAL_VIEWER_SOURCE_REF_CONFLICT", "Pinned Viewer source ref or tree differs from repository validation truth.", {
      source_ref: validation.source_ref,
      expected_commit: validation.integration_commit,
      actual_commit: refCommit,
      expected_tree: validation.tree_hash,
      actual_tree: tree,
    });
  }
}

function validationSummary(validation) {
  const successful = (validation.goal_projection?.command_results ?? [])
    .filter((entry) => entry?.exit_code === 0).length;
  return { status: "passed", checks: Math.max(1, successful) };
}

function publicationFromReservedActive({ config, journal, now }) {
  const activePath = path.join(requireArtifactStore(config), "active.json");
  if (!existsSync(activePath)) return null;
  const validations = listCommittedRepositoryValidations({ projectRoot: config.project_root });
  const validation = validations.find((entry) => entry.repository_sequence === journal.repository_sequence);
  if (!validation || validation.integration_commit !== journal.integration_commit) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_JOURNAL_INVALID", "Reserved Viewer publication no longer matches repository validation truth.");
  }
  const store = new ViewerSnapshotStore({
    root: requireArtifactStore(config),
    generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION,
    sourceVerifier: () => {
      verifyPinnedSource({ projectRoot: config.project_root, validation });
      return true;
    },
  });
  const active = store.readActive();
  if (active.sequence !== journal.repository_sequence || active.snapshot_id !== journal.viewer_snapshot_id) return null;
  return {
    schema_version: 1,
    status: "published",
    goal_id: journal.goal_id,
    harness_snapshot_id: journal.harness_snapshot_id,
    repository_sequence: journal.repository_sequence,
    integration_commit: journal.integration_commit,
    source_ref: journal.source_ref,
    tree_hash: journal.tree_hash,
    artifact_store: journal.artifact_store,
    viewer_snapshot_id: journal.viewer_snapshot_id,
    manifest_ref: active.manifest_ref,
    captured_at: journal.captured_at,
    published_at: now(),
  };
}

function changedPcrIds(validation) {
  if (Array.isArray(validation.goal_projection?.changed_pcr_ids)) {
    return validation.goal_projection.changed_pcr_ids.map(String).sort();
  }
  const ids = validation.goal_projection?.task_ids;
  const tasks = validation.goal_projection?.tasks;
  if (Array.isArray(tasks)) return tasks.map((entry) => entry.pcr_id).filter(Boolean);
  // The Viewer can derive the exact Git delta when no hint is available.
  return Array.isArray(ids) && ids.length === 0 ? [] : undefined;
}

function viewerSnapshotIdFor(validation) {
  return `viewer-${String(validation.repository_sequence).padStart(12, "0")}-${validation.integration_commit.slice(0, 16)}`;
}

function materializePublication({ stateDir, publication }) {
  validatePublication(publication);
  const file = path.join(stateDir, "records", `${String(publication.repository_sequence).padStart(12, "0")}.json`);
  mkdirSync(path.dirname(file), { recursive: true });
  const bytes = `${JSON.stringify(publication, null, 2)}\n`;
  if (existsSync(file)) {
    if (readFileSync(file, "utf8") !== bytes) {
      throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_RECORD_CONFLICT", "Viewer publication sequence already has different bytes.");
    }
    return;
  }
  writeFileSync(file, bytes, { flag: "wx", mode: 0o600 });
  fsyncFile(file);
  fsyncDirectory(path.dirname(file));
}

function validatePublication(record) {
  if (record?.schema_version !== 1 || record.status !== "published" ||
      !/^[a-z0-9][a-z0-9._-]{2,79}$/u.test(record.goal_id ?? "") || !/^[a-zA-Z0-9._-]+$/u.test(record.harness_snapshot_id ?? "") ||
      !Number.isSafeInteger(record.repository_sequence) || record.repository_sequence < 1 ||
      !/^[a-f0-9]{40,64}$/u.test(record.integration_commit ?? "") ||
      !/^[a-f0-9]{40,64}$/u.test(record.tree_hash ?? "") ||
      !SHA256_REF.test(record.manifest_ref ?? "") || record.source_ref !== `refs/tiangong-viewer-sources/${record.goal_id}/${record.harness_snapshot_id}` ||
      !path.isAbsolute(record.artifact_store ?? "") || !/^viewer-\d{12}-[a-f0-9]{16}$/u.test(record.viewer_snapshot_id ?? "") ||
      !Number.isFinite(Date.parse(record.captured_at ?? "")) ||
      !Number.isFinite(Date.parse(record.published_at ?? ""))) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_STATE_INVALID", "Viewer publication record is malformed.");
  }
}

function requireArtifactStore(config) {
  if (typeof config?.artifact_store !== "string" || !config.artifact_store.trim()) {
    throw new GoalHarnessError("GOAL_VIEWER_ARTIFACT_STORE_REQUIRED", "Goal Harness configuration requires artifact_store for durable Viewer history.");
  }
  return path.resolve(config.artifact_store);
}

function assertPublicationStore(publications, artifactStore) {
  const conflict = publications.find((entry) => path.resolve(entry.artifact_store) !== artifactStore);
  if (conflict) {
    throw new GoalHarnessError("GOAL_VIEWER_ARTIFACT_STORE_CONFLICT", "Configured Viewer artifact store differs from retained repository publication history.", {
      expected_artifact_store: conflict.artifact_store,
      actual_artifact_store: artifactStore,
    });
  }
}

function readJson(file, code) {
  const stat = lstatSync(file);
  if (!stat.isFile() || stat.isSymbolicLink()) throw new GoalHarnessError(code, `Expected a regular state file: ${file}`);
  try { return JSON.parse(readFileSync(file, "utf8")); } catch (error) {
    throw new GoalHarnessError(code, `Invalid JSON state file: ${file}`, { cause: error.message });
  }
}

function assertDirectory(directory, code) {
  const stat = lstatSync(directory);
  if (!stat.isDirectory() || stat.isSymbolicLink()) throw new GoalHarnessError(code, `Expected a real state directory: ${directory}`);
}

function writeJsonAtomic(file, value) {
  mkdirSync(path.dirname(file), { recursive: true });
  const temporary = `${file}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx", mode: 0o600 });
  fsyncFile(temporary);
  renameSync(temporary, file);
  fsyncDirectory(path.dirname(file));
}

function fsyncFile(file) {
  const descriptor = openSync(file, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function fsyncDirectory(directory) {
  const descriptor = openSync(directory, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}
