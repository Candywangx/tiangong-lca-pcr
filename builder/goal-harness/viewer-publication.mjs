import { execFileSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
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
  computeViewerGeneratorContractSha256,
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
    if (record.viewer_sequence !== index + 1 || (index > 0 && record.repository_sequence !== records[index - 1].repository_sequence + 1)) {
      throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_SEQUENCE_INVALID", "Viewer publication records are not contiguous.", {
        expected_viewer_sequence: index + 1,
        actual_viewer_sequence: record.viewer_sequence,
      });
    }
  });
  return records;
}

export function listViewerPreActivationRecords({ projectRoot }) {
  const directory = path.join(viewerPublicationStateDir(projectRoot), "pre-activation");
  if (!existsSync(directory)) return [];
  assertDirectory(directory, "GOAL_VIEWER_ACTIVATION_INVALID");
  return readdirSync(directory).sort().map((name) => {
    if (!/^\d{12}\.json$/u.test(name)) throw new GoalHarnessError("GOAL_VIEWER_ACTIVATION_INVALID", "Pre-activation history contains an unexpected entry.");
    const record = readJson(path.join(directory, name), "GOAL_VIEWER_ACTIVATION_INVALID");
    if (record?.schema_version !== 1 || record.status !== "pre_activation_unavailable" || !Number.isSafeInteger(record.repository_sequence) ||
        !["available", "divergent", "missing"].includes(record.source_status)) {
      throw new GoalHarnessError("GOAL_VIEWER_ACTIVATION_INVALID", "Pre-activation provenance is malformed.");
    }
    return { ...record, ...currentPreActivationSourceStatus(projectRoot, record) };
  });
}

function readViewerActivation(projectRoot) {
  const file = path.join(viewerPublicationStateDir(projectRoot), "activation.json");
  if (!existsSync(file)) return null;
  const activation = readJson(file, "GOAL_VIEWER_ACTIVATION_INVALID");
  if (activation?.schema_version !== 1 || !Number.isSafeInteger(activation.repository_sequence) || activation.repository_sequence < 1 ||
      !/^[a-f0-9]{40,64}$/u.test(activation.integration_commit ?? "") || !Number.isFinite(Date.parse(activation.activated_at ?? ""))) {
    throw new GoalHarnessError("GOAL_VIEWER_ACTIVATION_INVALID", "Viewer activation checkpoint is malformed.");
  }
  return activation;
}

function requireViewerActivation(projectRoot) {
  const activation = readViewerActivation(projectRoot);
  if (!activation) throw new GoalHarnessError("GOAL_VIEWER_ACTIVATION_MISSING", "Viewer publication history has no activation checkpoint.");
  return activation;
}

function activateViewerPublication({ projectRoot, validations, snapshotId, now }) {
  const selected = snapshotId
    ? validations.find((entry) => entry.harness_snapshot_id === snapshotId)
    : validations.at(-1);
  const current = validations.at(-1);
  if (!selected) throw new GoalHarnessError("GOAL_VIEWER_SNAPSHOT_NOT_VALIDATED", `No committed repository validation exists for snapshot ${snapshotId}.`);
  if (selected.repository_sequence !== current.repository_sequence) {
    throw new GoalHarnessError("GOAL_VIEWER_ACTIVATION_NOT_CURRENT", "First Viewer activation must bootstrap the current accepted repository validation.", {
      requested_sequence: selected.repository_sequence,
      current_sequence: current.repository_sequence,
    });
  }
  verifyPinnedSource({ projectRoot, validation: selected });
  const activation = {
    schema_version: 1,
    repository_sequence: selected.repository_sequence,
    integration_commit: selected.integration_commit,
    harness_snapshot_id: selected.harness_snapshot_id,
    activated_at: now(),
  };
  writeJsonCreate(path.join(viewerPublicationStateDir(projectRoot), "activation.json"), activation);
  for (const prior of validations.filter((entry) => entry.repository_sequence < selected.repository_sequence)) {
    materializePreActivationRecord({ projectRoot, validation: prior, activatedAt: activation.activated_at });
  }
  return activation;
}

function materializePreActivationRecord({ projectRoot, validation, activatedAt }) {
  let actualRef = null;
  try { actualRef = git(projectRoot, ["rev-parse", "--verify", `${validation.source_ref}^{commit}`]); } catch { /* explicitly unavailable */ }
  const sourceStatus = actualRef === null ? "missing" : actualRef === validation.integration_commit ? "available" : "divergent";
  const record = {
    schema_version: 1,
    status: "pre_activation_unavailable",
    reason: "viewer_snapshot_not_captured_before_activation",
    repository_sequence: validation.repository_sequence,
    goal_id: validation.goal_id,
    harness_snapshot_id: validation.harness_snapshot_id,
    integration_commit: validation.integration_commit,
    source_ref: validation.source_ref,
    expected_tree_hash: validation.tree_hash,
    source_status: sourceStatus,
    actual_source_commit: actualRef,
    activation_at: activatedAt,
  };
  const file = path.join(viewerPublicationStateDir(projectRoot), "pre-activation", `${String(validation.repository_sequence).padStart(12, "0")}.json`);
  const bytes = `${JSON.stringify(record, null, 2)}\n`;
  mkdirSync(path.dirname(file), { recursive: true });
  if (existsSync(file)) {
    const retained = readJson(file, "GOAL_VIEWER_ACTIVATION_INVALID");
    for (const field of ["repository_sequence", "goal_id", "harness_snapshot_id", "integration_commit", "source_ref", "expected_tree_hash", "activation_at"]) {
      if (retained[field] !== record[field]) throw new GoalHarnessError("GOAL_VIEWER_ACTIVATION_INVALID", "Pre-activation provenance identity changed.", { field });
    }
  } else {
    writeFileSync(file, bytes, { flag: "wx", mode: 0o600 });
    fsyncFile(file);
    fsyncDirectory(path.dirname(file));
  }
  projectPreActivationUnavailable({ projectRoot, record: { ...record, ...currentPreActivationSourceStatus(projectRoot, record) } });
}

function reconcilePreActivationRecords({ projectRoot, activation, validations }) {
  if (!activation) return;
  for (const validation of validations.filter((entry) => entry.repository_sequence < activation.repository_sequence)) {
    materializePreActivationRecord({ projectRoot, validation, activatedAt: activation.activated_at });
  }
}

function currentPreActivationSourceStatus(projectRoot, record) {
  let actualRef = null;
  try { actualRef = git(projectRoot, ["rev-parse", "--verify", `${record.source_ref}^{commit}`]); } catch { /* explicitly unavailable */ }
  return {
    source_status: actualRef === null ? "missing" : actualRef === record.integration_commit ? "available" : "divergent",
    actual_source_commit: actualRef,
  };
}

function projectPreActivationUnavailable({ projectRoot, record }) {
  const stateDir = path.join(projectRoot, "library", ".pcr-builder-state", "goals", record.goal_id);
  if (!existsSync(path.join(stateDir, "initial-state.json"))) return;
  const store = new GoalEventStore({ stateDir });
  const snapshot = store.rebuild().snapshots?.find((entry) => entry.id === record.harness_snapshot_id);
  if (!snapshot) return;
  store.append({
    event_id: `viewer-pre-activation-${String(record.repository_sequence).padStart(12, "0")}-${record.source_status}`,
    type: "viewer_snapshot_unavailable",
    payload: record,
  });
}

function assertActivationPublicationLineage({ activation, publications }) {
  if (!activation && publications.length > 0) throw new GoalHarnessError("GOAL_VIEWER_ACTIVATION_MISSING", "Viewer publications exist without an activation checkpoint.");
  if (!activation) return;
  for (const [index, publication] of publications.entries()) {
    const expectedRepositorySequence = activation.repository_sequence + index;
    if (publication.repository_sequence !== expectedRepositorySequence || publication.viewer_sequence !== index + 1) {
      throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_SEQUENCE_INVALID", "Viewer publication lineage does not match its activation checkpoint.");
    }
  }
}

function assertActivationMatchesValidations({ activation, validations }) {
  if (!activation) return;
  const selected = validations.find((entry) => entry.repository_sequence === activation.repository_sequence);
  if (!selected || selected.integration_commit !== activation.integration_commit || selected.harness_snapshot_id !== activation.harness_snapshot_id) {
    throw new GoalHarnessError("GOAL_VIEWER_ACTIVATION_INVALID", "Viewer activation checkpoint differs from committed repository validation truth.");
  }
}

export function publishPendingViewerSnapshots({
  config,
  snapshotId = null,
  publishSnapshot = publishViewerSnapshot,
  capabilityProbe = null,
  now = () => new Date().toISOString(),
  faultInjector = () => {},
  forceStaleLock = false,
  artifactFailurePhase = null,
} = {}) {
  const verifyPublishedStore = publishSnapshot === publishViewerSnapshot;
  const projectRoot = config?.project_root;
  if (typeof projectRoot !== "string" || !projectRoot) {
    throw new GoalHarnessError("GOAL_PROJECT_ROOT_INVALID", "Viewer publication requires a Goal project root.");
  }
  const stateDir = viewerPublicationStateDir(projectRoot);
  return withGoalLock(stateDir, "viewer-publish", () => {
    const preflight = verifyPublishedStore
      ? preflightPublicationRecovery({ config, stateDir, now, faultInjector })
      : { recover_inner: true };
    probeViewerArtifactStore({ config, capabilityProbe });
    if (verifyPublishedStore) {
      if (preflight.recover_inner) {
        recoverViewerSnapshot({
          root: projectRoot,
          artifactStore: requireArtifactStore(config),
          sourceVerifier: createCoordinatorArtifactSourceVerifier(config),
          forceStaleLock,
        });
      }
    }
    recoverPublicationJournal({
      config,
      stateDir,
      now,
      faultInjector,
      artifactStoreVerifier: verifyPublishedStore ? verifyPublishedViewerArtifact : () => true,
    });
    let activation = readViewerActivation(projectRoot);
    let validations = listCommittedRepositoryValidations({
      projectRoot,
      // Before activation, inspect retained coordinator provenance without
      // pretending historical source refs are still available. The selected
      // current checkpoint is re-read strictly immediately after activation.
      sourceVerificationFromSequence: activation?.repository_sequence ?? Number.MAX_SAFE_INTEGER,
    });
    if (!activation && validations.length > 0) {
      activation = activateViewerPublication({ projectRoot, validations, snapshotId, now });
      validations = listCommittedRepositoryValidations({ projectRoot, sourceVerificationFromSequence: activation.repository_sequence });
    }
    assertActivationMatchesValidations({ activation, validations });
    reconcilePreActivationRecords({ projectRoot, activation, validations });
    const publications = listViewerPublications({ projectRoot });
    assertPublicationStore(publications, requireArtifactStore(config));
    assertActivationPublicationLineage({ activation, publications });
    const next = activation
      ? validations.find((entry) => entry.repository_sequence === activation.repository_sequence + publications.length) ?? null
      : null;

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
      if (activation && selected.repository_sequence < activation.repository_sequence) {
        const unavailable = listViewerPreActivationRecords({ projectRoot }).find((entry) => entry.repository_sequence === selected.repository_sequence);
        return { status: "pre_activation_unavailable", publication: null, unavailable, publications };
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
      viewerSequence: publications.length + 1,
      publishSnapshot,
      now,
      faultInjector,
      forceStaleLock,
      artifactFailurePhase,
    });
    return { status: "published", publication, publications: listViewerPublications({ projectRoot }) };
  }, { allowDeadLockRecovery: forceStaleLock });
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
  artifactStoreVerifier = verifyPublishedViewerArtifact,
} = {}) {
  const stateDir = viewerPublicationStateDir(config.project_root);
  return withGoalLock(stateDir, "viewer-recover", () => {
    const preflight = recoverSnapshot === recoverViewerSnapshot
      ? preflightPublicationRecovery({ config, stateDir, now, faultInjector })
      : { recover_inner: true };
    probeViewerArtifactStore({ config });
    const artifact_recovery = preflight.recover_inner
      ? recoverSnapshot({
        root: config.project_root,
        artifactStore: requireArtifactStore(config),
        sourceVerifier: createCoordinatorArtifactSourceVerifier(config),
        forceStaleLock,
      })
      : { recovered: false, skipped_after_outer_preflight: true };
    let publications = listViewerPublications({ projectRoot: config.project_root });
    assertPublicationStore(publications, requireArtifactStore(config));
    let reconstruction = null;
    if (publications.length > 0) {
      const activePath = path.join(requireArtifactStore(config), "active.json");
      if (!existsSync(activePath) && reconstructMissingArtifacts) {
        reconstruction = reconstructViewerArtifactStore({ config, publications, publishSnapshot, forceStaleLock });
      } else if (!existsSync(activePath)) {
        throw new GoalHarnessError("GOAL_VIEWER_ARTIFACT_MISSING", "Viewer publication records exist but the durable artifact store has no active snapshot.");
      }
    }
    const recovered = recoverPublicationJournal({ config, stateDir, now, faultInjector, artifactStoreVerifier });
    publications = listViewerPublications({ projectRoot: config.project_root });
    assertPublicationStore(publications, requireArtifactStore(config));
    for (const publication of publications) artifactStoreVerifier({ config, publication, publications });
    for (const publication of publications) projectViewerPublication({ projectRoot: config.project_root, publication });
    if (publications.length > 0) {
      const activation = requireViewerActivation(config.project_root);
      const validations = listCommittedRepositoryValidations({ projectRoot: config.project_root, sourceVerificationFromSequence: activation.repository_sequence });
      assertActivationMatchesValidations({ activation, validations });
      reconcilePreActivationRecords({ projectRoot: config.project_root, activation, validations });
    }
    return { status: recovered || reconstruction ? "recovered" : "clean", recovered, artifact_recovery, reconstruction, publications };
  }, { allowDeadLockRecovery: forceStaleLock });
}

export function reconstructViewerArtifactStore({ config, publications, publishSnapshot = publishViewerSnapshot, forceStaleLock = false }) {
  const artifactStore = requireArtifactStore(config);
  assertPristineRecoverableStore(artifactStore);
  const activation = requireViewerActivation(config.project_root);
  const validations = listCommittedRepositoryValidations({
    projectRoot: config.project_root,
    sourceVerificationFromSequence: activation.repository_sequence,
  }).filter((entry) => entry.repository_sequence >= activation.repository_sequence);
  assertActivationMatchesValidations({ activation, validations });
  if (validations.length < publications.length) {
    throw new GoalHarnessError("GOAL_VIEWER_RECONSTRUCTION_INCOMPLETE", "Viewer publication history is longer than committed repository validation history.", {
      validation_count: validations.length,
      publication_count: publications.length,
    });
  }
  const temporaryStore = `${artifactStore}.rebuild-${randomUUID()}`;
  const backupStore = `${artifactStore}.empty-${randomUUID()}`;
  try {
    for (const [index, validation] of validations.slice(0, publications.length).entries()) {
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
            sequence: expected.viewer_sequence,
            sourceRef: validation.source_ref,
            integrationCommit: validation.integration_commit,
            baseCommit: validation.expected_old_head,
            treeHash: validation.tree_hash,
            capturedAt: expected.captured_at,
            validatedAt: validation.validated_at,
            validationSummary: validationSummary(validation),
            bootstrap: expected.viewer_sequence === 1,
            changedPcrIds: changedPcrIds(validation),
            sourceVerifier,
            forceStaleLock,
          });
        },
      });
      if (result.manifestRef !== expected.manifest_ref || result.sequence !== expected.viewer_sequence) {
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
  const store = new ViewerSnapshotStore({
    root: requireArtifactStore(config),
    generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION,
    sourceVerifier: createCoordinatorArtifactSourceVerifier(config),
  });
  const active = store.readActive();
  const latest = publications.at(-1);
  if (active.sequence !== latest.viewer_sequence || active.snapshot_id !== latest.viewer_snapshot_id || active.manifest_ref !== latest.manifest_ref) {
    throw new GoalHarnessError("GOAL_VIEWER_ARTIFACT_HEAD_CONFLICT", "Durable Viewer active pointer differs from repository publication history.");
  }
}

function createCoordinatorArtifactSourceVerifier(config) {
  const activation = readViewerActivation(config.project_root);
  if (!activation) return () => false;
  const validations = listCommittedRepositoryValidations({
    projectRoot: config.project_root,
    sourceVerificationFromSequence: activation.repository_sequence,
  });
  return ({ capture }) => {
    const validation = validations.find((entry) => entry.integration_commit === capture.integration_commit);
    if (!validation || validation.source_ref !== capture.source_ref || validation.tree_hash !== capture.tree_hash ||
        validation.expected_old_head !== capture.base_commit) return false;
    try {
      verifyPinnedSource({ projectRoot: config.project_root, validation });
      return true;
    } catch {
      return false;
    }
  };
}

export function verifyPublishedViewerArtifact({ config, publication, publications = null }) {
  validatePublication(publication);
  const retained = publications ?? listViewerPublications({ projectRoot: config.project_root });
  assertPublicationStore(retained, requireArtifactStore(config));
  verifyArtifactStoreHead({ config, publications: retained });
  const activation = requireViewerActivation(config.project_root);
  const validations = listCommittedRepositoryValidations({ projectRoot: config.project_root, sourceVerificationFromSequence: activation.repository_sequence });
  const validation = validations.find((entry) => entry.repository_sequence === publication.repository_sequence);
  if (!validation || validation.integration_commit !== publication.integration_commit) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_PROVENANCE_INVALID", "Viewer publication does not match repository validation truth.");
  }
  const store = new ViewerSnapshotStore({
    root: requireArtifactStore(config),
    generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION,
    sourceVerifier: () => {
      verifyPinnedSource({ projectRoot: config.project_root, validation });
      return true;
    },
  });
  const manifest = store.readManifest(publication.manifest_ref);
  if (manifest.snapshot_id !== publication.viewer_snapshot_id || manifest.goal_id !== publication.goal_id ||
      manifest.harness_snapshot_id !== publication.harness_snapshot_id || manifest.sequence !== publication.viewer_sequence ||
      manifest.captured_at !== publication.captured_at || manifest.validated_at !== validation.validated_at ||
      manifest.capture.integration_commit !== publication.integration_commit || manifest.capture.source_ref !== publication.source_ref ||
      manifest.capture.tree_hash !== publication.tree_hash || manifest.capture.base_commit !== validation.expected_old_head ||
      manifest.capture.validation_state !== "validated") {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_PROVENANCE_INVALID", "Retained Viewer manifest capture differs from the coordinator publication record.");
  }
  const history = store.readHistory();
  if (!history.entries.some((entry) => entry.sequence === manifest.sequence && entry.manifest_ref === publication.manifest_ref)) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_PROVENANCE_INVALID", "Viewer publication is not retained in durable history.");
  }
  return true;
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
      viewer_sequence: publication.viewer_sequence,
    });
  }
  if (snapshot.viewer_publication === "published") {
    if (snapshot.viewer_manifest_ref !== publication.manifest_ref || snapshot.viewer_sequence !== publication.viewer_sequence) {
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
      viewer_sequence: publication.viewer_sequence,
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
    viewer_sequence: publication.viewer_sequence,
    integration_commit: publication.integration_commit,
    manifest_ref: publication.manifest_ref,
    landing_state: landingState,
    landed_at: landingState === "landed" ? landedAt : null,
  };
  if (existsSync(file)) {
    const current = readJson(file, "GOAL_VIEWER_PROVENANCE_INVALID");
    if (current.schema_version !== 1 || !Number.isSafeInteger(current.viewer_sequence) || current.viewer_sequence < 1 ||
        !["validated_not_landed", "landed"].includes(current.landing_state) ||
        (current.landing_state === "landed" && !Number.isFinite(Date.parse(current.landed_at ?? "")))) {
      throw new GoalHarnessError("GOAL_VIEWER_PROVENANCE_INVALID", "Viewer landing provenance is malformed.");
    }
    for (const field of ["snapshot_id", "goal_id", "harness_snapshot_id", "repository_sequence", "viewer_sequence", "integration_commit", "manifest_ref"]) {
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

function publishValidation({ config, stateDir, validation, viewerSequence, publishSnapshot, now, faultInjector, forceStaleLock, artifactFailurePhase }) {
  const artifactStore = requireArtifactStore(config);
  const viewerSnapshotId = viewerSnapshotIdFor(validation);
  const reserved = {
    schema_version: 1,
    phase: "reserved",
    goal_id: validation.goal_id,
    harness_snapshot_id: validation.harness_snapshot_id,
    repository_sequence: validation.repository_sequence,
    viewer_sequence: viewerSequence,
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

  let preparedExpectation = null;
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
        sequence: viewerSequence,
        sourceRef: validation.source_ref,
        integrationCommit: validation.integration_commit,
        baseCommit: validation.expected_old_head,
        treeHash: validation.tree_hash,
        capturedAt: reserved.captured_at,
        validatedAt: validation.validated_at,
        validationSummary: validationSummary(validation),
        bootstrap: viewerSequence === 1,
        changedPcrIds: changedPcrIds(validation),
        generatorContractRoot: sourceRoot,
        sourceVerifier,
        forceStaleLock,
        failurePhase: artifactFailurePhase,
        onPublicationPhase(phase, viewerStore) {
          if (phase !== "prepared") return;
          const activeViewerJournal = viewerStore.currentJournal;
          const manifest = viewerStore.readManifest(activeViewerJournal.manifest_ref);
          preparedExpectation = {
            expected_manifest_ref: activeViewerJournal.manifest_ref,
            expected_manifest_capture: manifest.capture,
            expected_manifest_source: manifest.source,
            expected_generator_contract_sha256: manifest.generator_contract_sha256,
            expected_schema_contract_sha256: manifest.schema_contract_sha256,
            expected_inner_manifest_ref: activeViewerJournal.manifest_ref,
            expected_inner_source_fingerprint: activeViewerJournal.source_fingerprint,
            expected_inner_journal_identity_sha256: innerJournalIdentitySha256(activeViewerJournal),
          };
          const artifactPrepared = {
            ...reserved,
            ...preparedExpectation,
            phase: "artifact_prepared",
            artifact_prepared_at: now(),
          };
          writeJsonAtomic(path.join(stateDir, "journal.json"), artifactPrepared);
          faultInjector("after_artifact_prepared", artifactPrepared);
        },
      });
    },
  });
  if (!SHA256_REF.test(published?.manifestRef ?? "") || published.sequence !== viewerSequence) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_RESULT_INVALID", "Viewer publisher returned an invalid manifest identity.");
  }
  if (preparedExpectation && published.manifestRef !== preparedExpectation.expected_manifest_ref) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_RESULT_INVALID", "Viewer publisher result differs from the exact manifest reserved in the Harness journal.");
  }
  const publication = {
    schema_version: 1,
    status: "published",
    goal_id: validation.goal_id,
    harness_snapshot_id: validation.harness_snapshot_id,
    repository_sequence: validation.repository_sequence,
    viewer_sequence: viewerSequence,
    integration_commit: validation.integration_commit,
    source_ref: validation.source_ref,
    tree_hash: validation.tree_hash,
    artifact_store: artifactStore,
    viewer_snapshot_id: viewerSnapshotId,
    manifest_ref: published.manifestRef,
    captured_at: reserved.captured_at,
    published_at: now(),
  };
  const artifactPublished = { ...reserved, ...(preparedExpectation ?? {}), phase: "artifact_published", publication };
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

function recoverPublicationJournal({ config, stateDir, now, faultInjector, artifactStoreVerifier }) {
  const journalPath = path.join(stateDir, "journal.json");
  if (!existsSync(journalPath)) return null;
  const journal = readJson(journalPath, "GOAL_VIEWER_PUBLICATION_JOURNAL_INVALID");
  if (!["reserved", "artifact_prepared", "artifact_published", "publication_committed", "projected"].includes(journal.phase)) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_JOURNAL_INVALID", "Unknown Viewer publication journal phase.");
  }
  if (["reserved", "artifact_prepared"].includes(journal.phase)) {
    const recovered = publicationFromReservedActive({ config, journal, now });
    if (!recovered) return { retry_required: true, ...journal };
    const artifactPublished = { ...journal, phase: "artifact_published", publication: recovered };
    writeJsonAtomic(journalPath, artifactPublished);
    return recoverPublicationJournal({ config, stateDir, now, faultInjector, artifactStoreVerifier });
  }
  validatePublication(journal.publication);
  assertPublicationStore([journal.publication], requireArtifactStore(config));
  const retained = listViewerPublications({ projectRoot: config.project_root });
  const publications = retained.some((entry) => entry.repository_sequence === journal.publication.repository_sequence)
    ? retained
    : [...retained, journal.publication].sort((left, right) => left.viewer_sequence - right.viewer_sequence);
  artifactStoreVerifier({ config, publication: journal.publication, publications });
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

function preflightPublicationRecovery({ config, stateDir, now, faultInjector = () => {} }) {
  const outerPath = path.join(stateDir, "journal.json");
  const innerPath = path.join(requireArtifactStore(config), "journal.json");
  const outer = pathEntryExists(outerPath)
    ? readJson(outerPath, "GOAL_VIEWER_PUBLICATION_JOURNAL_INVALID")
    : null;
  const inner = pathEntryExists(innerPath)
    ? readJson(innerPath, "GOAL_VIEWER_PUBLICATION_RECOVERY_AMBIGUOUS")
    : null;

  if (!outer) {
    if (inner) {
      throw new GoalHarnessError(
        "GOAL_VIEWER_PUBLICATION_RECOVERY_AMBIGUOUS",
        "Viewer artifact recovery is not bound to a Harness publication journal.",
      );
    }
    return { recover_inner: true };
  }
  if (!["reserved", "artifact_prepared", "artifact_published", "publication_committed", "projected"].includes(outer.phase)) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_JOURNAL_INVALID", "Unknown Viewer publication journal phase.");
  }
  if (outer.phase === "reserved") {
    if (inner) {
      return bridgeReservedInnerJournal({ config, stateDir, outer, observedInner: inner, now, faultInjector });
    }
    return { recover_inner: true };
  }
  if (outer.phase === "artifact_prepared") {
    assertPreparedOuterIdentity(outer);
    if (inner) {
      if (
        inner.manifest_ref !== outer.expected_inner_manifest_ref ||
        inner.source_fingerprint !== outer.expected_inner_source_fingerprint ||
        innerJournalIdentitySha256(inner) !== outer.expected_inner_journal_identity_sha256
      ) {
        throw new GoalHarnessError(
          "GOAL_VIEWER_PUBLICATION_MANIFEST_SUBSTITUTED",
          "Viewer artifact journal differs from the exact manifest and source captured by the Harness.",
        );
      }
      assertPreparedManifestContent({ config, outer });
      return { recover_inner: true };
    }
    const adopted = publicationFromReservedActive({ config, journal: outer, now });
    if (!adopted) {
      throw new GoalHarnessError(
        "GOAL_VIEWER_PUBLICATION_RECOVERY_AMBIGUOUS",
        "Prepared Viewer publication has neither its bound inner journal nor exact durable pointers.",
      );
    }
    return { recover_inner: false };
  }
  if (inner) {
    throw new GoalHarnessError(
      "GOAL_VIEWER_PUBLICATION_RECOVERY_AMBIGUOUS",
      "A completed Harness artifact phase cannot adopt an unexpected Viewer artifact journal.",
    );
  }
  return { recover_inner: false };
}

function bridgeReservedInnerJournal({ config, stateDir, outer, observedInner, now, faultInjector }) {
  let activation;
  let validations;
  let publications;
  let inspected;
  try {
    activation = requireViewerActivation(config.project_root);
    validations = listCommittedRepositoryValidations({
      projectRoot: config.project_root,
      sourceVerificationFromSequence: activation.repository_sequence,
    });
    assertActivationMatchesValidations({ activation, validations });
    publications = listViewerPublications({ projectRoot: config.project_root });
    assertActivationPublicationLineage({ activation, publications });
    assertPublicationStore(publications, requireArtifactStore(config));
    const store = new ViewerSnapshotStore({
      root: requireArtifactStore(config),
      generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION,
      sourceVerifier: createCoordinatorArtifactSourceVerifier(config),
    });
    inspected = store.inspectPreparedJournal();
  } catch (error) {
    throw innerMismatch("Reserved Viewer publication cannot adopt its prepared inner journal.", error);
  }
  const validation = validations.find((entry) => entry.repository_sequence === outer.repository_sequence);
  const journal = inspected?.journal;
  const manifest = inspected?.manifest;
  if (
    !validation || !journal || !manifest ||
    outer.repository_sequence !== activation.repository_sequence + publications.length ||
    outer.viewer_sequence !== publications.length + 1 ||
    outer.goal_id !== validation.goal_id ||
    outer.harness_snapshot_id !== validation.harness_snapshot_id ||
    outer.integration_commit !== validation.integration_commit ||
    outer.source_ref !== validation.source_ref ||
    outer.tree_hash !== validation.tree_hash ||
    outer.artifact_store !== requireArtifactStore(config) ||
    outer.viewer_snapshot_id !== viewerSnapshotIdFor(validation) ||
    journal.reservation.snapshot_id !== outer.viewer_snapshot_id ||
    journal.reservation.sequence !== outer.viewer_sequence ||
    manifest.snapshot_id !== outer.viewer_snapshot_id ||
    manifest.goal_id !== outer.goal_id ||
    manifest.harness_snapshot_id !== outer.harness_snapshot_id ||
    manifest.sequence !== outer.viewer_sequence ||
    manifest.captured_at !== outer.captured_at ||
    manifest.validated_at !== validation.validated_at ||
    stableJson(manifest.validation_summary) !== stableJson(validationSummary(validation)) ||
    manifest.catalog_scope !== "material" ||
    manifest.generator_version !== VIEWER_INCREMENTAL_GENERATOR_VERSION ||
    manifest.capture.source_ref !== outer.source_ref ||
    manifest.capture.integration_commit !== outer.integration_commit ||
    manifest.capture.base_commit !== validation.expected_old_head ||
    manifest.capture.tree_hash !== outer.tree_hash ||
    manifest.capture.validation_state !== "validated" ||
    stableJson(observedInner) !== stableJson(journal)
  ) {
    throw innerMismatch("Reserved Viewer publication identity differs from its prepared inner journal.");
  }

  let expectedGeneratorContract;
  try {
    expectedGeneratorContract = withPinnedSourceWorktree({
      projectRoot: config.project_root,
      validation,
      read(sourceRoot) {
        return computeViewerGeneratorContractSha256({ contractRoot: sourceRoot });
      },
    });
  } catch (error) {
    throw innerMismatch("Prepared Viewer generator contract cannot be reproduced from its pinned source tree.", error);
  }
  if (manifest.generator_contract_sha256 !== expectedGeneratorContract) {
    throw innerMismatch("Prepared Viewer generator contract differs from its pinned source tree.");
  }
  const innerPath = path.join(requireArtifactStore(config), "journal.json");
  const finalInner = readJson(innerPath, "GOAL_VIEWER_PUBLICATION_INNER_MISMATCH");
  if (innerJournalIdentitySha256(finalInner) !== innerJournalIdentitySha256(journal) || finalInner.phase !== "prepared") {
    throw innerMismatch("Prepared Viewer journal changed while the Harness was validating it.");
  }
  const artifactPrepared = {
    ...outer,
    expected_manifest_ref: journal.manifest_ref,
    expected_manifest_capture: manifest.capture,
    expected_manifest_source: manifest.source,
    expected_generator_contract_sha256: manifest.generator_contract_sha256,
    expected_schema_contract_sha256: manifest.schema_contract_sha256,
    expected_inner_manifest_ref: journal.manifest_ref,
    expected_inner_source_fingerprint: journal.source_fingerprint,
    expected_inner_journal_identity_sha256: innerJournalIdentitySha256(journal),
    phase: "artifact_prepared",
    artifact_prepared_at: now(),
    recovered_from_reserved_inner: true,
  };
  writeJsonAtomic(path.join(stateDir, "journal.json"), artifactPrepared);
  faultInjector("after_reserved_inner_bridge", artifactPrepared);
  return { recover_inner: true, bridged: true };
}

function innerMismatch(message, cause = null) {
  return new GoalHarnessError(
    "GOAL_VIEWER_PUBLICATION_INNER_MISMATCH",
    message,
    cause ? { cause: cause.message } : {},
  );
}

function pathEntryExists(file) {
  try {
    lstatSync(file);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

function assertPreparedOuterIdentity(outer) {
  if (
    !SHA256_REF.test(outer.expected_manifest_ref ?? "") ||
    !SHA256_REF.test(outer.expected_inner_source_fingerprint ?? "") ||
    !SHA256_REF.test(outer.expected_inner_journal_identity_sha256 ?? "") ||
    !outer.expected_manifest_capture ||
    !outer.expected_manifest_source
  ) {
    throw new GoalHarnessError(
      "GOAL_VIEWER_PUBLICATION_RECOVERY_AMBIGUOUS",
      "Prepared Viewer recovery lacks an exact outer-to-inner manifest and source binding.",
    );
  }
  if (outer.expected_inner_manifest_ref !== outer.expected_manifest_ref) {
    throw new GoalHarnessError(
      "GOAL_VIEWER_PUBLICATION_MANIFEST_SUBSTITUTED",
      "The outer Viewer manifest reference differs from its bound inner journal reference.",
    );
  }
}

function assertPreparedManifestContent({ config, outer }) {
  const store = new ViewerSnapshotStore({
    root: requireArtifactStore(config),
    generatorVersion: VIEWER_INCREMENTAL_GENERATOR_VERSION,
    sourceVerifier: createCoordinatorArtifactSourceVerifier(config),
  });
  let manifest;
  try {
    manifest = store.readManifest(outer.expected_manifest_ref);
  } catch (error) {
    throw new GoalHarnessError(
      "GOAL_VIEWER_PUBLICATION_MANIFEST_SUBSTITUTED",
      "The exact Viewer manifest captured by the Harness is missing or corrupt.",
      { cause: error.message },
    );
  }
  if (
    stableJson(manifest.capture) !== stableJson(outer.expected_manifest_capture) ||
    stableJson(manifest.source) !== stableJson(outer.expected_manifest_source) ||
    manifest.generator_contract_sha256 !== outer.expected_generator_contract_sha256 ||
    manifest.schema_contract_sha256 !== outer.expected_schema_contract_sha256
  ) {
    throw new GoalHarnessError(
      "GOAL_VIEWER_PUBLICATION_MANIFEST_SUBSTITUTED",
      "The exact Viewer manifest content differs from the source captured by the Harness.",
    );
  }
}

function innerJournalIdentitySha256(journal) {
  const identity = {
    schema_version: journal?.schema_version,
    kind: journal?.kind,
    manifest_ref: journal?.manifest_ref,
    sequence: journal?.sequence,
    source: journal?.source,
    capture: journal?.capture,
    source_fingerprint: journal?.source_fingerprint,
    reservation: journal?.reservation,
    cas: journal?.cas,
  };
  return `sha256:${createHash("sha256").update(stableJson(identity), "utf8").digest("hex")}`;
}

function withPinnedSourceWorktree({ projectRoot, validation, read }) {
  verifyPinnedSource({ projectRoot, validation });
  const parent = path.join(projectRoot, ".worktrees", "viewer-publication");
  mkdirSync(parent, { recursive: true });
  const sourceRoot = path.join(parent, `${String(validation.repository_sequence).padStart(12, "0")}-${randomUUID()}`);
  try {
    git(projectRoot, ["worktree", "add", "--detach", sourceRoot, validation.integration_commit]);
    const coordinatorVerifier = createCoordinatorArtifactSourceVerifier({ project_root: projectRoot });
    const currentCapture = {
      source_ref: validation.source_ref,
      integration_commit: validation.integration_commit,
      base_commit: validation.expected_old_head,
      tree_hash: validation.tree_hash,
    };
    const sourceVerifier = ({ capture }) => {
      try {
        if (!coordinatorVerifier({ capture })) return false;
        if (capture.integration_commit !== validation.integration_commit) return true;
        const head = git(sourceRoot, ["rev-parse", "--verify", "HEAD^{commit}"]);
        const tree = git(sourceRoot, ["rev-parse", "--verify", "HEAD^{tree}"]);
        const status = git(sourceRoot, ["status", "--porcelain=v1", "--untracked-files=all"]);
        return head === capture.integration_commit && tree === capture.tree_hash && status === "";
      } catch {
        return false;
      }
    };
    if (!sourceVerifier({ capture: currentCapture })) {
      throw new GoalHarnessError("GOAL_VIEWER_SOURCE_INVALID", "Detached Viewer publication source does not match its pinned validation identity.");
    }
    const result = read(sourceRoot, sourceVerifier);
    if (!sourceVerifier({ capture: currentCapture })) {
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
  const activation = requireViewerActivation(config.project_root);
  const validations = listCommittedRepositoryValidations({ projectRoot: config.project_root, sourceVerificationFromSequence: activation.repository_sequence });
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
  if (active.sequence !== journal.viewer_sequence || active.snapshot_id !== journal.viewer_snapshot_id) return null;
  if (!SHA256_REF.test(journal.expected_manifest_ref ?? "")) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_RECOVERY_AMBIGUOUS", "An active Viewer pointer cannot be adopted from a reservation that never captured its exact manifest reference.");
  }
  if (active.manifest_ref !== journal.expected_manifest_ref) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_MANIFEST_SUBSTITUTED", "The active Viewer manifest differs from the exact reference captured by the Harness journal.", {
      expected_manifest_ref: journal.expected_manifest_ref,
      actual_manifest_ref: active.manifest_ref,
    });
  }
  const manifest = store.readManifest(active.manifest_ref);
  if (manifest.snapshot_id !== journal.viewer_snapshot_id || manifest.goal_id !== journal.goal_id ||
      manifest.harness_snapshot_id !== journal.harness_snapshot_id || manifest.sequence !== journal.viewer_sequence ||
      manifest.captured_at !== journal.captured_at || manifest.validated_at !== validation.validated_at ||
      manifest.capture.integration_commit !== journal.integration_commit || manifest.capture.source_ref !== journal.source_ref ||
      manifest.capture.tree_hash !== journal.tree_hash || manifest.capture.base_commit !== validation.expected_old_head ||
      stableJson(manifest.capture) !== stableJson(journal.expected_manifest_capture) ||
      stableJson(manifest.source) !== stableJson(journal.expected_manifest_source) ||
      manifest.generator_contract_sha256 !== journal.expected_generator_contract_sha256 ||
      manifest.schema_contract_sha256 !== journal.expected_schema_contract_sha256) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_MANIFEST_SUBSTITUTED", "The retained Viewer manifest content differs from the exact capture recorded by the Harness journal.");
  }
  const history = store.readHistory();
  if (!history.entries.some((entry) => entry.sequence === journal.viewer_sequence && entry.manifest_ref === journal.expected_manifest_ref)) {
    throw new GoalHarnessError("GOAL_VIEWER_PUBLICATION_MANIFEST_SUBSTITUTED", "The exact Viewer manifest is not present in durable history.");
  }
  return {
    schema_version: 1,
    status: "published",
    goal_id: journal.goal_id,
    harness_snapshot_id: journal.harness_snapshot_id,
    repository_sequence: journal.repository_sequence,
    viewer_sequence: journal.viewer_sequence,
    integration_commit: journal.integration_commit,
    source_ref: journal.source_ref,
    tree_hash: journal.tree_hash,
    artifact_store: journal.artifact_store,
    viewer_snapshot_id: journal.viewer_snapshot_id,
    manifest_ref: journal.expected_manifest_ref,
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
      !Number.isSafeInteger(record.viewer_sequence) || record.viewer_sequence < 1 ||
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

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}

function writeJsonAtomic(file, value) {
  mkdirSync(path.dirname(file), { recursive: true });
  const temporary = `${file}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx", mode: 0o600 });
  fsyncFile(temporary);
  renameSync(temporary, file);
  fsyncDirectory(path.dirname(file));
}

function writeJsonCreate(file, value) {
  mkdirSync(path.dirname(file), { recursive: true });
  const bytes = `${JSON.stringify(value, null, 2)}\n`;
  try {
    writeFileSync(file, bytes, { flag: "wx", mode: 0o600 });
    fsyncFile(file);
    fsyncDirectory(path.dirname(file));
  } catch (error) {
    if (error?.code !== "EEXIST" || readFileSync(file, "utf8") !== bytes) throw error;
  }
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
