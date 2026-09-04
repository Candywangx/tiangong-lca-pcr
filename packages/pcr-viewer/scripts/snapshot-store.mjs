import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  fsyncSync,
  linkSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  statSync,
  unlinkSync,
  writeSync,
} from "node:fs";
import path from "node:path";

import {
  assertSha256Ref,
  canonicalBytes,
  canonicalJson,
  createViewerSnapshotSchemaRegistry,
  refDigest,
  sha256Ref,
  viewerSchemaContractSha256,
} from "./snapshot-format.mjs";

const SHA256_PREFIX = "sha256:";
const OBJECT_KINDS = new Set([
  "ui_bundle",
  "pcr_detail",
  "catalog_entry",
  "alias_entry",
  "catalog_shard",
  "catalog_root",
  "alias_shard",
  "alias_root",
  "coverage_entry",
  "coverage_shard",
  "coverage_root",
  "history_page",
]);
const HISTORY_PAGE_MAX_ENTRIES = 2;

export class ViewerSnapshotStoreError extends Error {
  constructor(code, message, options = {}) {
    super(message, options);
    this.name = "ViewerSnapshotStoreError";
    this.code = code;
  }
}

/**
 * A deliberately small durable artifact store.  The caller supplies a store path;
 * this module never derives one from a checkout or Harness workspace.
 */
export class ViewerSnapshotStore {
  constructor({ root, generatorVersion, capabilities = {}, capabilityProbe = null, sourceVerifier = null, staleLockMs = 300_000 } = {}) {
    if (typeof root !== "string" || !root.trim()) {
      throw new ViewerSnapshotStoreError("VIEWER_STORE_REQUIRED", "An explicit artifact store path is required.");
    }
    if (typeof generatorVersion !== "string" || !generatorVersion) {
      throw new ViewerSnapshotStoreError("VIEWER_GENERATOR_VERSION_REQUIRED", "A generator version is required.");
    }
    this.root = path.resolve(root);
    this.generatorVersion = generatorVersion;
    this.capabilities = {
      fsync: capabilities.fsync ?? true,
      atomicRename: capabilities.atomicRename ?? true,
      createIfAbsent: capabilities.createIfAbsent ?? true,
    };
    this.capabilityProbe = capabilityProbe;
    this.sourceVerifier = sourceVerifier;
    this.staleLockMs = staleLockMs;
    this.schemas = createViewerSnapshotSchemaRegistry();
    this.schemaContractSha256 = viewerSchemaContractSha256();
    this.lockLease = null;
    this.currentJournal = null;
  }

  probe() {
    for (const [name, available] of Object.entries(this.capabilities)) {
      if (!available) {
        throw new ViewerSnapshotStoreError("VIEWER_STORE_CAPABILITY_UNAVAILABLE", `Artifact store lacks required ${name} capability.`);
      }
    }
    ensureSafeDirectory(this.root, "artifact store");
    for (const part of ["objects", "manifests", "history", "staging", "locks"]) {
      ensureSafeDirectory(path.join(this.root, part), `artifact store ${part}`);
    }
    for (const leaf of ["active.json", "history-head.json", "journal.json"]) {
      assertRegularOrMissing(path.join(this.root, leaf), `artifact store ${leaf}`);
    }
    const stagingStat = statSync(this.path("staging"));
    const rootStat = statSync(this.root);
    if (stagingStat.dev !== rootStat.dev) {
      throw new ViewerSnapshotStoreError("VIEWER_STORE_CROSS_FILESYSTEM", "Artifact-store staging must be on the same filesystem as the store root.");
    }
    const descriptor = openSync(this.root, fsConstants.O_RDONLY | fsConstants.O_DIRECTORY | fsConstants.O_NOFOLLOW);
    try {
      fsyncSync(descriptor);
    } catch (error) {
      throw new ViewerSnapshotStoreError("VIEWER_STORE_FSYNC_UNAVAILABLE", "Artifact store does not support fsync.", { cause: error });
    } finally {
      closeSync(descriptor);
    }
    this.#probeCreateIfAbsentAndRename();
    if (this.capabilityProbe) {
      const reported = this.capabilityProbe({ root: this.root });
      for (const capability of ["fsync", "atomicRename", "createIfAbsent"]) {
        if (reported?.[capability] !== true) {
          throw new ViewerSnapshotStoreError("VIEWER_STORE_CAPABILITY_UNAVAILABLE", `Artifact store capability probe rejected ${capability} capability.`);
        }
      }
    }
    return Object.freeze({ root: this.root, same_filesystem: true, fsync: true, atomic_rename: true, create_if_absent: true });
  }

  writeObject(value) {
    this.probe();
    return this.#writeObject(value);
  }

  readObject(ref) {
    return this.#readObject(ref, null);
  }

  #readObject(ref, cache) {
    if (cache?.objects.has(ref)) return cache.objects.get(ref);
    const bytes = this.#readImmutable(this.path("objects", `${refDigest(ref)}.json`), ref, "object");
    const value = parseCanonicalJson(bytes, "viewer object");
    if (!bytes.equals(canonicalBytes(value))) {
      throw new ViewerSnapshotStoreError("VIEWER_OBJECT_NONCANONICAL", "Viewer object bytes are not canonical compact JSON.");
    }
    this.schemas.assert("viewer-object", value);
    this.#assertObjectSemantics(value);
    cache?.objects.set(ref, value);
    return value;
  }

  readManifest(ref) {
    return this.#readManifest(ref, this.#readCache(), true);
  }

  #readManifest(ref, cache, validatePredecessor) {
    if (cache.manifests.has(ref)) return cache.manifests.get(ref);
    const bytes = this.#readImmutable(this.path("manifests", `${refDigest(ref)}.json`), ref, "manifest");
    const manifest = parseCanonicalJson(bytes, "viewer manifest");
    this.schemas.assert("viewer-snapshot-manifest", manifest);
    cache.manifests.set(ref, manifest);
    try {
      this.#validateManifestObjects(manifest, cache, validatePredecessor);
    } catch (error) {
      cache.manifests.delete(ref);
      throw error;
    }
    if (this.#readObject(manifest.capture.ui_bundle_ref, cache).object_kind !== "ui_bundle") {
      throw new ViewerSnapshotStoreError("VIEWER_UI_BUNDLE_MISSING", "Manifest references an unavailable retained UI bundle.");
    }
    return manifest;
  }

  readHistory() {
    return this.#readHistory(this.#readCache());
  }

  #readHistory(cache) {
    const historyPath = this.path("history-head.json");
    if (!existsRegular(historyPath, "history head")) return { head: null, entries: [] };
    const head = parseCanonicalJson(readSafeFile(historyPath, "history head"), "viewer history head");
    this.schemas.assert("viewer-history", head);
    const pages = [];
    const seen = new Set();
    let pageRef = head.page_ref;
    while (pageRef) {
      if (seen.has(pageRef)) throw new ViewerSnapshotStoreError("VIEWER_HISTORY_CORRUPT", "Viewer history pages must not cycle.");
      seen.add(pageRef);
      const page = this.#readObject(pageRef, cache);
      if (page.object_kind !== "history_page" || !Array.isArray(page.entry.entries) || page.entry.entries.length === 0 || page.entry.entries.length > HISTORY_PAGE_MAX_ENTRIES) {
        throw new ViewerSnapshotStoreError("VIEWER_HISTORY_CORRUPT", "Viewer history page is invalid or exceeds its fixed bound.");
      }
      pages.push(page.entry);
      pageRef = page.entry.previous_page_ref;
      if (pageRef !== null && pageRef !== undefined) assertSha256Ref(pageRef, "history previous page reference");
    }
    const entries = pages.reverse().flatMap((page) => page.entries);
    let previousSequence = 0;
    let previousManifest = null;
    let previousManifestRef = null;
    for (const entry of entries) {
      if (entry.sequence !== previousSequence + 1) {
        throw new ViewerSnapshotStoreError("VIEWER_HISTORY_CORRUPT", "Viewer history sequences must be contiguous and ordered.");
      }
      const manifest = this.#readManifest(entry.manifest_ref, cache, false);
      if (manifest.sequence !== entry.sequence) {
        throw new ViewerSnapshotStoreError("VIEWER_HISTORY_CORRUPT", `History sequence ${entry.sequence} does not match its manifest.`);
      }
      if (entry.sequence === 1) {
        if (manifest.predecessor !== null || manifest.previous_manifest_ref !== null || manifest.previous_snapshot_id !== null) throw new ViewerSnapshotStoreError("VIEWER_HISTORY_CORRUPT", "Initial retained manifest has a predecessor.");
      } else if (manifest.predecessor !== previousManifestRef || manifest.previous_manifest_ref !== previousManifestRef || manifest.previous_snapshot_id !== previousManifest.snapshot_id) {
        throw new ViewerSnapshotStoreError("VIEWER_HISTORY_CORRUPT", "Retained manifest predecessor does not equal the immediately preceding history entry.");
      }
      this.#validateRetainedRenames(manifest, previousManifest);
      this.#verifySource({ source: manifest.source, capture: manifest.capture }, "retained");
      previousSequence = entry.sequence;
      previousManifest = manifest;
      previousManifestRef = entry.manifest_ref;
    }
    if (head.latest_sequence !== previousSequence) throw new ViewerSnapshotStoreError("VIEWER_HISTORY_CORRUPT", "Viewer history head sequence does not match retained pages.");
    return { head, entries };
  }

  #validateRetainedRenames(manifest, predecessor) {
    const values = new Set();
    for (const [successor, oldId] of Object.entries(manifest.lineage.renames)) {
      if (values.has(oldId) || Object.hasOwn(manifest.refs.pcr_entries, oldId) || !Object.hasOwn(manifest.refs.pcr_entries, successor) || !predecessor || !Object.hasOwn(predecessor.refs.pcr_entries, oldId)) {
        throw new ViewerSnapshotStoreError("VIEWER_HISTORY_CORRUPT", "Retained rename lineage is invalid.");
      }
      values.add(oldId);
    }
  }

  readActive() {
    return this.#readActive(this.#readCache(), null);
  }

  #readActive(cache, retainedHistory) {
    const active = parseCanonicalJson(readSafeFile(this.path("active.json"), "active pointer"), "viewer active pointer");
    this.schemas.assert("viewer-active", active);
    const manifest = this.#readManifest(active.manifest_ref, cache, false);
    if (active.snapshot_hash !== active.manifest_ref || active.snapshot_id !== manifest.snapshot_id || active.ui_bundle_ref !== manifest.capture.ui_bundle_ref) {
      throw new ViewerSnapshotStoreError("VIEWER_ACTIVE_CORRUPT", "Active snapshot identity does not match its manifest.");
    }
    if (this.#readObject(active.ui_bundle_ref, cache).object_kind !== "ui_bundle") {
      throw new ViewerSnapshotStoreError("VIEWER_UI_BUNDLE_MISSING", "Active snapshot references an unavailable retained UI bundle.");
    }
    if (manifest.sequence !== active.sequence) {
      throw new ViewerSnapshotStoreError("VIEWER_ACTIVE_CORRUPT", "Active pointer sequence does not match its manifest.");
    }
    const history = retainedHistory ?? this.#readHistory(cache);
    const entry = history.entries.at(-1);
    if (!entry || entry.manifest_ref !== active.manifest_ref || entry.sequence !== active.sequence) {
      throw new ViewerSnapshotStoreError("VIEWER_ACTIVE_HISTORY_MISMATCH", "Active pointer must be the last permanently retained history entry.");
    }
    return active;
  }

  publish(input) {
    this.probe();
    const release = this.#acquireLock(input.forceStaleLock === true);
    try {
      if (existsRegular(this.path("journal.json"), "publication journal")) this.#recoverLocked();
      return this.#publishLocked(input);
    } finally {
      release();
    }
  }

  recover({ forceStaleLock = false } = {}) {
    this.probe();
    const release = this.#acquireLock(forceStaleLock);
    try {
      return this.#recoverLocked();
    } finally {
      release();
    }
  }

  #publishLocked(input) {
    const normalized = this.#normalizeInput(input);
    this.#verifySource(normalized, "before");
    this.#validatePinnedSources(normalized.pinnedSources);
    const previous = this.#readCurrentOrEmpty();
    if (normalized.sequence !== previous.sequence + 1) {
      throw new ViewerSnapshotStoreError("VIEWER_SEQUENCE_CONFLICT", `Snapshot sequence ${normalized.sequence} must follow ${previous.sequence}.`);
    }
    for (const pcrId of Object.keys(normalized.source.release_revision_markers)) {
      if (!normalized.pcrEntries.some((entry) => entry.id === pcrId)) throw new ViewerSnapshotStoreError("VIEWER_PCR_MARKER_UNKNOWN", `PCR release/revision marker has no matching current PCR entry: ${pcrId}.`);
    }
    const lineage = this.#deriveLineage(normalized.pcrEntries, previous.manifest);
    this.#validateCoverageInputs(normalized);

    const pcrIdentity = this.#objectIdentity(normalized, { catalog: normalized.source.catalog });
    const catalogIdentity = this.#objectIdentity(normalized, { catalog: normalized.source.catalog });
    const aliasIdentity = this.#objectIdentity(normalized, { aliases: normalized.source.aliases });
    const coverageIdentity = this.#objectIdentity(normalized, { coverage: normalized.source.coverage });
    const historyIdentity = this.#objectIdentity(normalized, { source: normalized.source, capture: normalized.capture });
    const uiIdentity = this.#objectIdentity(normalized, { ui_bundle_ref: normalized.capture.ui_bundle_ref });
    const sourceRefForCoordinate = new Map(normalized.source.coverage.map((source) => [`${source.coordinate.system}:${source.coordinate.version}`, source.ref]));
    const coverageIdentityFor = (coordinate) => this.#objectIdentity(normalized, { coverage: { coordinate, ref: sourceRefForCoordinate.get(`${coordinate.system}:${coordinate.version}`) } });
    const pcrEntries = this.#writeEntries(normalized.pcrEntries, "pcr_detail", pcrIdentity, normalized.source.release_revision_markers);
    const catalogEntries = this.#writeCatalogEntries(normalized.pcrEntries, catalogIdentity);
    const aliasEntries = this.#writeEntries(normalized.aliasEntries, "alias_entry", aliasIdentity);
    const coverageEntries = this.#writeCoverageEntries(normalized.coverageEntries, coverageIdentityFor);
    const catalogShards = this.#writePrefixShards(catalogEntries, "catalog_shard", (id) => twoCharacterPrefix(id), catalogIdentity);
    const aliasShards = this.#writePrefixShards(aliasEntries, "alias_shard", (id) => twoCharacterPrefix(id), aliasIdentity);
    const coverageShards = this.#writeCoverageShards(normalized.coverageEntries, coverageEntries, coverageIdentityFor);
    const catalogRoot = this.#writeObject({ schema_version: 1, object_kind: "catalog_root", identity: catalogIdentity, entry: { shards: catalogShards, details: pcrEntries } });
    const aliasRoot = this.#writeObject({ schema_version: 1, object_kind: "alias_root", identity: aliasIdentity, entry: { shards: aliasShards, entries: aliasEntries } });
    const coverageRoot = this.#writeObject({ schema_version: 1, object_kind: "coverage_root", identity: coverageIdentity, entry: { shards: coverageShards, entries: coverageEntries } });
    const uiBundleRef = this.#writeObject({ schema_version: 1, object_kind: "ui_bundle", identity: uiIdentity, entry: { id: normalized.capture.ui_bundle_ref, asset_url: normalized.uiBundleUrl } });
    normalized.capture.ui_bundle_ref = uiBundleRef;
    const manifest = {
      schema_version: 1,
      kind: "viewer-snapshot-manifest",
      snapshot_id: normalized.snapshotId,
      goal_id: normalized.goalId,
      harness_snapshot_id: normalized.harnessSnapshotId,
      captured_at: normalized.capturedAt,
      validated_at: normalized.validatedAt,
      validation_summary: normalized.validationSummary,
      catalog_scope: normalized.catalogScope,
      previous_snapshot_id: previous.manifest?.snapshot_id ?? null,
      previous_manifest_ref: previous.manifestRef,
      sequence: normalized.sequence,
      generator_version: this.generatorVersion,
      generator_contract_sha256: normalized.generatorContractSha256,
      schema_contract_sha256: this.schemaContractSha256,
      source: normalized.source,
      capture: normalized.capture,
      predecessor: previous.manifestRef,
      lineage,
      counts: {
        pcr: Object.keys(pcrEntries).length,
        alias: Object.keys(aliasEntries).length,
        coverage: normalized.coverageEntries.length,
        catalog_shards: Object.keys(catalogShards).length,
        alias_shards: Object.keys(aliasShards).length,
        coverage_shards: Object.keys(coverageShards).length,
      },
      refs: {
        pcr_entries: pcrEntries,
        alias_entries: aliasEntries,
        coverage_entries: coverageEntries,
        catalog_shards: catalogShards,
        alias_shards: aliasShards,
        coverage_shards: coverageShards,
        catalog_root: catalogRoot,
        alias_root: aliasRoot,
        coverage_root: coverageRoot,
      },
    };
    this.schemas.assert("viewer-snapshot-manifest", manifest);
    const manifestBytes = canonicalBytes(manifest);
    const manifestRef = sha256Ref(manifestBytes);
    this.#writeImmutable(this.path("manifests", `${refDigest(manifestRef)}.json`), manifestBytes, "manifest");

    const history = this.#nextHistory(previous.history, { sequence: normalized.sequence, manifest_ref: manifestRef }, historyIdentity);
    const active = { schema_version: 1, kind: "viewer-active", snapshot_id: normalized.snapshotId, snapshot_url: `snapshots/${normalized.snapshotId}`, snapshot_hash: manifestRef, manifest_ref: manifestRef, sequence: normalized.sequence, cache_version: 1, ui_bundle_ref: normalized.capture.ui_bundle_ref, validation_state: "validated" };
    this.schemas.assert("viewer-active", active);
    const historyHeadBytes = canonicalBytes(history.head);
    const activeBytes = canonicalBytes(active);
    let journal = {
      schema_version: 1, kind: "viewer-publication-journal", phase: "prepared", manifest_ref: manifestRef, sequence: normalized.sequence,
      history_head: history.head, active,
      source: normalized.source, capture: normalized.capture, source_fingerprint: historyIdentity.source_fingerprint,
      reservation: { snapshot_id: normalized.snapshotId, sequence: normalized.sequence },
      cas: {
        history_head: { old_ref: this.#pointerRef("history-head.json"), new_ref: sha256Ref(historyHeadBytes) },
        active: { old_ref: this.#pointerRef("active.json"), new_ref: sha256Ref(activeBytes) },
      },
    };
    this.#writePointer("journal.json", journal);
    this.currentJournal = journal;
    normalized.onPhase?.("prepared", this);
    this.#interrupt(normalized.failurePhase, journal.phase);

    journal = { ...journal, phase: "history_prepared" };
    this.#writePointer("journal.json", journal);
    this.currentJournal = journal;
    this.#interrupt(normalized.failurePhase, journal.phase);

    // This is the final source read.  It must succeed before either retained
    // history or active state becomes externally visible.
    try {
      this.#verifySource(normalized, "after");
    } catch (error) {
      this.#assertLockOwned();
      unlinkSync(this.path("journal.json"));
      fsyncDirectory(this.root);
      throw error;
    }

    this.#writePointerCas("history-head.json", history.head, journal.cas.history_head);
    journal = { ...journal, phase: "history_committed" };
    this.#writePointer("journal.json", journal);
    this.currentJournal = journal;
    this.#interrupt(normalized.failurePhase, journal.phase);

    this.#writePointerCas("active.json", active, journal.cas.active);
    journal = { ...journal, phase: "active_committed" };
    this.#writePointer("journal.json", journal);
    this.currentJournal = journal;
    this.#interrupt(normalized.failurePhase, journal.phase);
    this.#assertLockOwned();
    unlinkSync(this.path("journal.json"));
    fsyncDirectory(this.root);
    return Object.freeze({ manifestRef, sequence: normalized.sequence, reused: previous.manifest ? countReused(pcrEntries, previous.manifest.refs.pcr_entries) : 0 });
  }

  #recoverLocked() {
    const journalPath = this.path("journal.json");
    if (!existsRegular(journalPath, "publication journal")) return Object.freeze({ recovered: false });
    const journal = parseCanonicalJson(readSafeFile(journalPath, "publication journal"), "publication journal");
    this.currentJournal = journal;
    validateJournal(journal);
    const manifest = this.readManifest(journal.manifest_ref);
    if (manifest.sequence !== journal.sequence) throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", "Journal sequence does not match its manifest.");
    this.#assertJournalMatchesManifest(journal, manifest);
    this.#restoreCapturedPointer(journal);
    this.#verifySource({ source: journal.source, capture: journal.capture, sourceFingerprint: journal.source_fingerprint }, "before");
    if (journal.phase === "history_prepared") {
      this.#verifySource({ source: journal.source, capture: journal.capture, sourceFingerprint: journal.source_fingerprint }, "after");
      this.#writePointerCas("history-head.json", journal.history_head, journal.cas.history_head);
      this.#writePointer("journal.json", { ...journal, phase: "history_committed" });
      return this.#recoverLocked();
    }
    if (journal.phase === "prepared") {
      this.#writePointer("journal.json", { ...journal, phase: "history_prepared" });
      return this.#recoverLocked();
    }
    if (journal.phase === "history_committed") {
      this.#writePointerCas("active.json", journal.active, journal.cas.active);
      this.#writePointer("journal.json", { ...journal, phase: "active_committed" });
      return this.#recoverLocked();
    }
    this.readActive();
    this.#verifySource({ source: journal.source, capture: journal.capture, sourceFingerprint: journal.source_fingerprint }, "after");
    this.#assertLockOwned();
    unlinkSync(journalPath);
    fsyncDirectory(this.root);
    return Object.freeze({ recovered: true, manifestRef: journal.manifest_ref, sequence: journal.sequence });
  }

  #normalizeInput(input) {
    if (!input || typeof input !== "object") throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", "Snapshot input must be an object.");
    const source = input.source;
    if (!source || typeof source !== "object") throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", "Snapshot source is required.");
    const coverage = Array.isArray(source.coverage) ? source.coverage.map((entry) => ({ coordinate: normalizeCoordinate(entry.coordinate), ref: assertSha256Ref(entry.ref, "coverage source reference") })) : null;
    if (!coverage) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", "Snapshot source coverage must be an array.");
    const normalized = {
      snapshotId: requireText(input.snapshotId, "snapshot id"),
      goalId: requireText(input.goalId, "goal id"),
      harnessSnapshotId: requireText(input.harnessSnapshotId, "harness snapshot id"),
      capturedAt: requireUtc(input.capturedAt, "capture timestamp"),
      validatedAt: requireUtc(input.validatedAt, "validation timestamp"),
      validationSummary: requireValidationSummary(input.validationSummary),
      catalogScope: requireCatalogScope(input.catalogScope),
      sequence: requireSequence(input.sequence),
      generatorContractSha256: assertSha256Ref(input.generatorContractSha256, "generator contract reference"),
      source: {
        catalog: assertSha256Ref(source.catalog, "catalog source reference"),
        aliases: assertSha256Ref(source.aliases, "alias source reference"),
        coverage,
        release_revision_markers: normalizeMarkerMap(source.releaseRevisionMarkers),
      },
      capture: {
        source_ref: requireText(source.source_ref, "source ref"),
        integration_commit: requireGitHash(source.integration_commit, "integration commit"),
        base_commit: requireGitHash(source.base_commit, "base commit"),
        tree_hash: requireGitHash(source.tree_hash, "tree hash"),
        validation_state: "validated",
        ui_bundle_ref: source.ui_bundle_ref === undefined ? sha256Ref("viewer-ui-bundle:unconfigured\n") : assertSha256Ref(source.ui_bundle_ref, "UI bundle reference"),
      },
      uiBundleUrl: typeof input.uiBundleUrl === "string" ? input.uiBundleUrl : "",
      pcrEntries: requireEntries(input.pcrEntries, "PCR"),
      aliasEntries: requireEntries(input.aliasEntries, "alias"),
      coverageEntries: requireCoverageEntries(input.coverageEntries),
      pinnedSources: input.pinnedSources ?? [],
      failurePhase: input.failurePhase ?? null,
      forceStaleLock: input.forceStaleLock === true,
      onPhase: typeof input.onPhase === "function" ? input.onPhase : null,
    };
    return normalized;
  }

  #writeEntries(entries, kind, identity, markerMap = null) {
    const refs = {};
    for (const entry of entries) {
      const entryIdentity = markerMap === null ? identity : { ...identity, release_revision_marker: markerMap[entry.id] ?? null };
      const payload = kind === "pcr_detail" ? projectPcrDetail(entry) : entry;
      refs[entry.id] = this.#writeObject({ schema_version: 1, object_kind: kind, identity: entryIdentity, entry: payload });
    }
    return sortedObject(refs);
  }

  #writeCatalogEntries(entries, identity) {
    const refs = {};
    for (const entry of entries) {
      refs[entry.id] = this.#writeObject({ schema_version: 1, object_kind: "catalog_entry", identity, entry: {
        id: entry.id,
        path: typeof entry.path === "string" ? entry.path : "",
        title: localeMap(entry.catalog_title ?? entry.title, entry.id),
        status: typeof entry.status === "string" ? entry.status : (typeof entry.lifecycle_status === "string" ? entry.lifecycle_status : "active"),
        version: typeof entry.version === "string" ? entry.version : null,
        content_maturity: typeof entry.content_maturity === "string" ? entry.content_maturity : null,
        languages: languageInfo(entry.languages),
        translation_status: translationStatus(entry.translation_status),
        classification_refs: Array.isArray(entry.classification_refs) ? structuredClone(entry.classification_refs) : [],
        record_kind: typeof entry.record_kind === "string" ? entry.record_kind : "methodology",
        readiness: resolvedReadiness(entry),
        search_text: typeof entry.search_text === "string" ? entry.search_text : entry.id,
      } });
    }
    return sortedObject(refs);
  }

  #writeCoverageEntries(entries, identityForCoordinate) {
    const refs = {};
    for (const entry of entries) {
      const coordinate = normalizeCoordinate(entry.coordinate);
      const key = `${coordinate.system}:${coordinate.version}:${entry.code}`;
      refs[key] = this.#writeObject({ schema_version: 1, object_kind: "coverage_entry", identity: identityForCoordinate(coordinate), entry: structuredClone(entry) });
    }
    return sortedObject(refs);
  }

  #writePrefixShards(entryRefs, kind, prefixFor, identity) {
    const groups = new Map();
    for (const [id, objectRef] of Object.entries(entryRefs)) {
      const prefix = prefixFor(id);
      const group = groups.get(prefix) ?? [];
      group.push({ id, object_ref: objectRef });
      groups.set(prefix, group);
    }
    const refs = {};
    for (const prefix of [...groups.keys()].sort()) {
      refs[prefix] = this.#writeObject({ schema_version: 1, object_kind: kind, identity, entry: { prefix, entries: groups.get(prefix).sort(compareById) } });
    }
    return sortedObject(refs);
  }

  #writeCoverageShards(entries, entryRefs, identityForCoordinate) {
    const groups = new Map();
    for (const entry of entries) {
      const coordinate = normalizeCoordinate(entry.coordinate);
      const prefix = coverageCodePrefix(entry.code);
      const key = `${coordinate.system}:${coordinate.version}/${prefix}`;
      const group = groups.get(key) ?? { coordinate, prefix, entries: [] };
      const entryKey = `${coordinate.system}:${coordinate.version}:${entry.code}`;
      group.entries.push({ code: entry.code, coverage_entry_ref: entryRefs[entryKey] });
      groups.set(key, group);
    }
    const refs = {};
    for (const key of [...groups.keys()].sort()) {
      const group = groups.get(key);
      group.entries.sort((left, right) => String(left.code).localeCompare(String(right.code)));
      refs[key] = this.#writeObject({ schema_version: 1, object_kind: "coverage_shard", identity: identityForCoordinate(group.coordinate), entry: group });
    }
    return sortedObject(refs);
  }

  #deriveLineage(entries, previousManifest) {
    const renames = {};
    const currentIds = new Set(entries.map((entry) => entry.id));
    const predecessors = new Set();
    for (const entry of entries) {
      if (!Object.hasOwn(entry, "renamed_from")) continue;
      const oldId = requireText(entry.renamed_from, "renamed_from");
      if (!previousManifest || !Object.hasOwn(previousManifest.refs.pcr_entries, oldId)) {
        throw new ViewerSnapshotStoreError("VIEWER_RENAME_PREDECESSOR_MISSING", `Rename predecessor is not present in the previous manifest: ${oldId}.`);
      }
      if (currentIds.has(oldId)) throw new ViewerSnapshotStoreError("VIEWER_RENAME_OLD_ID_PRESENT", `Renamed predecessor must be absent from the new manifest: ${oldId}.`);
      if (predecessors.has(oldId)) throw new ViewerSnapshotStoreError("VIEWER_RENAME_AMBIGUOUS", `Rename predecessor has more than one successor: ${oldId}.`);
      predecessors.add(oldId);
      renames[entry.id] = oldId;
    }
    return { renames: sortedObject(renames) };
  }

  #objectIdentity(normalized, relevantSources = {}) {
    return {
      generator_contract_sha256: normalized.generatorContractSha256,
      schema_contract_sha256: this.schemaContractSha256,
      // Commit/tree capture is snapshot provenance, never an entry-object input.
      source_fingerprint: sha256Ref(canonicalBytes(relevantSources)),
      release_revision_marker: null,
    };
  }

  #nextHistory(previousHistory, nextEntry, identity) {
    const oldHead = previousHistory.head;
    // Pages are append-only: never rewrite or bypass a previously retained page.
    // A page may contain up to HISTORY_PAGE_MAX_ENTRIES; one entry per publish keeps
    // every immutable page reachable from the current head.
    const pageRef = this.#writeObject({ schema_version: 1, object_kind: "history_page", identity, entry: { entries: [nextEntry], previous_page_ref: oldHead?.page_ref ?? null } });
    return { page_ref: pageRef, head: { schema_version: 1, kind: "viewer-history-head", page_ref: pageRef, latest_sequence: nextEntry.sequence } };
  }

  #verifySource(normalized, phase) {
    if (typeof this.sourceVerifier !== "function") {
      throw new ViewerSnapshotStoreError("VIEWER_SOURCE_VERIFIER_REQUIRED", "A verifiable pinned Git source verifier is required.");
    }
    const result = this.sourceVerifier({ phase, source: structuredClone(normalized.source), capture: structuredClone(normalized.capture) });
    if (result !== true && result?.valid !== true) {
      throw new ViewerSnapshotStoreError("VIEWER_SOURCE_VERIFICATION_FAILED", `Pinned Git source verification failed during ${phase}.`);
    }
  }

  #assertJournalMatchesManifest(journal, manifest) {
    this.schemas.assert("viewer-active", journal.active);
    this.schemas.assert("viewer-history", journal.history_head);
    if (
      canonicalJson(journal.source) !== canonicalJson(manifest.source) ||
      canonicalJson(journal.capture) !== canonicalJson(manifest.capture) ||
      journal.reservation.snapshot_id !== manifest.snapshot_id ||
      journal.reservation.sequence !== manifest.sequence ||
      journal.active.manifest_ref !== journal.manifest_ref ||
      journal.active.snapshot_id !== manifest.snapshot_id ||
      journal.active.sequence !== manifest.sequence ||
      journal.active.ui_bundle_ref !== manifest.capture.ui_bundle_ref ||
      journal.active.snapshot_hash !== journal.manifest_ref ||
      journal.active.snapshot_url !== `snapshots/${manifest.snapshot_id}` ||
      journal.history_head.latest_sequence !== manifest.sequence
    ) {
      throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", "Journal identities are not exactly bound to the referenced manifest.");
    }
    if (journal.cas.history_head.new_ref !== sha256Ref(canonicalBytes(journal.history_head)) || journal.cas.active.new_ref !== sha256Ref(canonicalBytes(journal.active))) {
      throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", "Journal pointer digests are not exactly bound to their values.");
    }
    const historyPage = this.readObject(journal.history_head.page_ref);
    if (historyPage.object_kind !== "history_page" || historyPage.entry.entries.at(-1)?.manifest_ref !== journal.manifest_ref || historyPage.entry.entries.at(-1)?.sequence !== manifest.sequence) {
      throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", "Journal history page is not bound to the referenced manifest.");
    }
  }

  #writeObject(value) {
    if (!value || !OBJECT_KINDS.has(value.object_kind)) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_KIND_INVALID", "Invalid viewer object kind.");
    this.schemas.assert("viewer-object", value);
    this.#assertObjectSemantics(value);
    const bytes = canonicalBytes(value);
    const ref = sha256Ref(bytes);
    this.#writeImmutable(this.path("objects", `${refDigest(ref)}.json`), bytes, "object");
    return ref;
  }

  #assertObjectSemantics(value) {
    const entry = value.entry;
    const requiredText = (field) => requireText(entry[field], `${value.object_kind}.${field}`);
    if (value.object_kind === "pcr_detail") {
      assertExactKeys(entry, ["id", "markdown", "guidance"], "pcr_detail");
      requiredText("id");
      assertMarkdown(entry.markdown);
    } else if (value.object_kind === "catalog_entry") {
      assertExactKeys(entry, ["id", "path", "title", "status", "version", "content_maturity", "languages", "translation_status", "classification_refs", "record_kind", "readiness", "search_text"], "catalog_entry");
      for (const field of ["id", "status", "record_kind", "search_text"]) requiredText(field);
      assertMarkdown(entry.title);
    } else if (value.object_kind === "alias_entry") {
      assertExactKeys(entry, ["id", "locator"], "alias_entry");
      requiredText("id"); requiredText("locator");
    } else if (value.object_kind === "coverage_entry") {
      assertExactKeys(entry, ["coordinate", "code", "pcr_id"], "coverage_entry");
      normalizeCoordinate(entry.coordinate); requiredText("code");
      if (entry.pcr_id !== null && (typeof entry.pcr_id !== "string" || !entry.pcr_id)) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", "coverage_entry.pcr_id must be a string or null.");
    } else if (value.object_kind === "ui_bundle") {
      assertExactKeys(entry, ["id", "asset_url"], "ui_bundle");
      requiredText("id");
      if (typeof entry.asset_url !== "string") throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", "ui_bundle.asset_url must be a string.");
    } else if (["catalog_shard", "alias_shard"].includes(value.object_kind)) {
      assertExactKeys(entry, ["prefix", "entries"], value.object_kind);
      requiredText("prefix");
      if (!Array.isArray(entry.entries) || entry.entries.some((item) => { if (!item || typeof item !== "object") return true; assertExactKeys(item, ["id", "object_ref"], `${value.object_kind} item`); return typeof item.id !== "string" || !/^sha256:[a-f0-9]{64}$/u.test(item.object_ref); })) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", `${value.object_kind} entries are invalid.`);
    } else if (value.object_kind === "coverage_shard") {
      assertExactKeys(entry, ["coordinate", "prefix", "entries"], "coverage_shard");
      normalizeCoordinate(entry.coordinate); requiredText("prefix");
      if (!Array.isArray(entry.entries) || entry.entries.some((item) => { if (!item || typeof item !== "object") return true; assertExactKeys(item, ["code", "coverage_entry_ref"], "coverage_shard item"); return typeof item.code !== "string" || !/^sha256:[a-f0-9]{64}$/u.test(item.coverage_entry_ref); })) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", "coverage_shard entries are invalid.");
    } else if (["catalog_root", "alias_root", "coverage_root"].includes(value.object_kind)) {
      assertExactKeys(entry, value.object_kind === "catalog_root" ? ["shards", "details"] : ["shards", "entries"], value.object_kind);
      if (!entry || typeof entry !== "object") throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", `${value.object_kind} relationships are invalid.`);
      for (const [name, map] of Object.entries(entry)) assertRefMap(map, `${value.object_kind}.${name}`);
    } else if (value.object_kind === "history_page") {
      assertExactKeys(entry, ["entries", "previous_page_ref"], "history_page");
      if (!Array.isArray(entry.entries) || entry.entries.length === 0 || entry.entries.some((item) => { if (!item || typeof item !== "object") return true; assertExactKeys(item, ["sequence", "manifest_ref"], "history_page item"); return !Number.isSafeInteger(item.sequence) || item.sequence < 1 || !/^sha256:[a-f0-9]{64}$/u.test(item.manifest_ref); }) || (entry.previous_page_ref !== null && !/^sha256:[a-f0-9]{64}$/u.test(entry.previous_page_ref))) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", "history_page entries are invalid.");
    }
  }

  #readImmutable(target, expectedRef, label) {
    assertSha256Ref(expectedRef, `${label} reference`);
    let bytes;
    try {
      bytes = readSafeFile(target, `immutable ${label}`);
    } catch (error) {
      if (error?.code === "ENOENT") {
        throw new ViewerSnapshotStoreError("VIEWER_IMMUTABLE_MISSING", `Missing immutable ${label}: ${path.basename(target)}.`, { cause: error });
      }
      throw error;
    }
    if (sha256Ref(bytes) !== expectedRef) {
      throw new ViewerSnapshotStoreError("VIEWER_IMMUTABLE_SUBSTITUTED", `Immutable ${label} digest does not match ${expectedRef}.`);
    }
    return bytes;
  }

  #validateManifestObjects(manifest, cache, validatePredecessor) {
    const refs = manifest.refs;
    const sourceCoordinates = new Set(manifest.source.coverage.map((source) => `${source.coordinate.system}:${source.coordinate.version}`));
    for (const [id, ref] of Object.entries(refs.pcr_entries)) {
      const object = this.#readObject(ref, cache);
      if (object.object_kind !== "pcr_detail" || object.entry.id !== id) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Manifest keyed PCR detail reference is invalid for ${id}.`);
    }
    for (const [id, ref] of Object.entries(refs.alias_entries)) {
      const object = this.#readObject(ref, cache);
      if (object.object_kind !== "alias_entry" || object.entry.id !== id) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Manifest keyed alias entry reference is invalid for ${id}.`);
    }
    for (const [key, ref] of Object.entries(refs.coverage_entries)) {
      const object = this.#readObject(ref, cache);
      const coordinate = object.entry.coordinate;
      const expected = coordinate ? `${coordinate.system}:${coordinate.version}:${object.entry.code}` : null;
      if (object.object_kind !== "coverage_entry" || expected !== key || !sourceCoordinates.has(`${coordinate.system}:${coordinate.version}`)) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Manifest keyed coverage entry reference is invalid for ${key}.`);
      if (object.entry.pcr_id !== null && !Object.hasOwn(refs.pcr_entries, object.entry.pcr_id)) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Coverage entry PCR target is absent from the manifest: ${object.entry.pcr_id}.`);
    }
    for (const [prefix, ref] of Object.entries(refs.catalog_shards)) this.#validatePrefixShard(ref, "catalog_shard", prefix, refs, "catalog_entry", cache);
    for (const [prefix, ref] of Object.entries(refs.alias_shards)) this.#validatePrefixShard(ref, "alias_shard", prefix, refs, "alias_entry", cache);
    for (const [key, ref] of Object.entries(refs.coverage_shards)) this.#validateCoverageShard(ref, key, refs.coverage_entries, cache);
    const roots = [
      [refs.catalog_root, "catalog_root"], [refs.alias_root, "alias_root"], [refs.coverage_root, "coverage_root"],
    ];
    for (const [ref, kind] of roots) {
      const object = this.#readObject(ref, cache);
      if (object.object_kind !== kind) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Manifest root must reference a ${kind} object.`);
    }
    const expected = {
      pcr: Object.keys(refs.pcr_entries).length,
      alias: Object.keys(refs.alias_entries).length,
      catalog_shards: Object.keys(refs.catalog_shards).length,
      alias_shards: Object.keys(refs.alias_shards).length,
      coverage_shards: Object.keys(refs.coverage_shards).length,
    };
    for (const [name, actual] of Object.entries(expected)) {
      if (manifest.counts[name] !== actual) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Manifest ${name} count does not match referenced objects.`);
    }
    let coverage = 0;
    for (const ref of Object.values(refs.coverage_shards)) coverage += this.#readObject(ref, cache).entry.entries.length;
    if (manifest.counts.coverage !== coverage) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", "Manifest coverage count does not match coverage shards.");
    const catalogRoot = this.#readObject(refs.catalog_root, cache).entry;
    const aliasRoot = this.#readObject(refs.alias_root, cache).entry;
    const coverageRoot = this.#readObject(refs.coverage_root, cache).entry;
    if (canonicalJson(catalogRoot.shards) !== canonicalJson(refs.catalog_shards) || canonicalJson(catalogRoot.details) !== canonicalJson(refs.pcr_entries) || canonicalJson(aliasRoot.shards) !== canonicalJson(refs.alias_shards) || canonicalJson(aliasRoot.entries) !== canonicalJson(refs.alias_entries) || canonicalJson(coverageRoot.shards) !== canonicalJson(refs.coverage_shards) || canonicalJson(coverageRoot.entries) !== canonicalJson(refs.coverage_entries)) {
      throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", "Manifest root relationships are incomplete or substituted.");
    }
    const catalogIds = Object.values(refs.catalog_shards).flatMap((ref) => this.#readObject(ref, cache).entry.entries.map((entry) => entry.id)).sort();
    const aliasIds = Object.values(refs.alias_shards).flatMap((ref) => this.#readObject(ref, cache).entry.entries.map((entry) => entry.id)).sort();
    const coverageKeys = Object.values(refs.coverage_shards).flatMap((ref) => {
      const shard = this.#readObject(ref, cache).entry;
      return shard.entries.map((entry) => `${shard.coordinate.system}:${shard.coordinate.version}:${entry.code}`);
    }).sort();
    if (canonicalJson(catalogIds) !== canonicalJson(Object.keys(refs.pcr_entries).sort()) || canonicalJson(aliasIds) !== canonicalJson(Object.keys(refs.alias_entries).sort()) || canonicalJson(coverageKeys) !== canonicalJson(Object.keys(refs.coverage_entries).sort())) {
      throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", "Manifest index roots do not provide complete one-to-one membership.");
    }
    if (manifest.predecessor && validatePredecessor) {
      const predecessor = this.#readManifest(manifest.predecessor, cache, true);
      if (predecessor.sequence + 1 !== manifest.sequence) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", "Manifest predecessor sequence is invalid.");
      if (manifest.previous_manifest_ref !== manifest.predecessor || manifest.previous_snapshot_id !== predecessor.snapshot_id) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", "Manifest predecessor snapshot identity is not the immediate retained predecessor.");
    } else if (!manifest.predecessor && (manifest.previous_manifest_ref !== null || manifest.previous_snapshot_id !== null)) {
      throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", "Initial manifest must not declare a previous snapshot.");
    }
  }

  #validatePrefixShard(ref, kind, prefix, manifestRefs, entryKind, cache) {
    const shard = this.#readObject(ref, cache);
    if (shard.object_kind !== kind || shard.entry.prefix !== prefix || !Array.isArray(shard.entry.entries)) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Invalid ${kind} semantic structure for prefix ${prefix}.`);
    for (const item of shard.entry.entries) {
      const expectedAliasRef = entryKind === "alias_entry" ? manifestRefs.alias_entries[item.id] : null;
      if (twoCharacterPrefix(item.id) !== prefix || (entryKind === "alias_entry" && expectedAliasRef !== item.object_ref)) {
        throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Invalid ${kind} prefix membership for ${item.id}.`);
      }
      const entry = this.#readObject(item.object_ref, cache);
      if (entry.object_kind !== entryKind || entry.entry.id !== item.id) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Invalid ${kind} entry relationship for ${item.id}.`);
    }
  }

  #validateCoverageShard(ref, key, coverageEntries, cache) {
    const shard = this.#readObject(ref, cache);
    if (shard.object_kind !== "coverage_shard" || !Array.isArray(shard.entry.entries)) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Invalid coverage shard ${key}.`);
    const [coordinate, prefix] = key.split("/");
    if (`${shard.entry.coordinate?.system}:${shard.entry.coordinate?.version}` !== coordinate || shard.entry.prefix !== prefix) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Coverage shard coordinate/prefix mismatch for ${key}.`);
    for (const item of shard.entry.entries) {
      const expectedKey = `${coordinate}:${item.code}`;
      if (coverageCodePrefix(item.code) !== prefix || coverageEntries[expectedKey] !== item.coverage_entry_ref) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", `Coverage shard entry relationship mismatch for ${expectedKey}.`);
    }
  }

  #validatePinnedSources(sources) {
    if (!Array.isArray(sources)) throw new ViewerSnapshotStoreError("VIEWER_PINNED_SOURCE_INVALID", "Pinned sources must be an array.");
    for (const source of sources) {
      if (!source || typeof source !== "object" || typeof source.path !== "string") throw new ViewerSnapshotStoreError("VIEWER_PINNED_SOURCE_INVALID", "Pinned source needs a relative path and sha256 reference.");
      const ref = assertSha256Ref(source.ref, "pinned source reference");
      const absolute = resolveContained(this.root, source.path, "pinned source");
      let bytes;
      try { bytes = readSafeFile(absolute, "pinned source"); } catch (error) {
        if (error.code === "ENOENT" || /Missing/u.test(error.message)) throw new ViewerSnapshotStoreError("VIEWER_PINNED_SOURCE_MISSING", `Pinned source is missing: ${source.path}`, { cause: error });
        throw error;
      }
      if (sha256Ref(bytes) !== ref) throw new ViewerSnapshotStoreError("VIEWER_PINNED_SOURCE_SUBSTITUTED", `Pinned source digest mismatch: ${source.path}.`);
    }
  }

  #validateCoverageInputs(normalized) {
    const pcrIds = new Set(normalized.pcrEntries.map((entry) => entry.id));
    const sourceCoordinates = new Set(normalized.source.coverage.map((source) => `${source.coordinate.system}:${source.coordinate.version}`));
    for (const entry of normalized.coverageEntries) {
      const coordinate = `${entry.coordinate.system}:${entry.coordinate.version}`;
      if (!sourceCoordinates.has(coordinate)) throw new ViewerSnapshotStoreError("VIEWER_COVERAGE_SOURCE_MISSING", `Coverage coordinate is not represented by a pinned source: ${coordinate}.`);
      if (entry.pcr_id !== null && !pcrIds.has(entry.pcr_id)) throw new ViewerSnapshotStoreError("VIEWER_COVERAGE_PCR_MISSING", `Coverage PCR target is not present in this snapshot: ${entry.pcr_id}.`);
    }
  }

  #readCurrentOrEmpty() {
    const hasActive = existsRegular(this.path("active.json"), "active pointer");
    const hasHistory = existsRegular(this.path("history-head.json"), "history head");
    if (hasActive !== hasHistory) throw new ViewerSnapshotStoreError("VIEWER_STORE_PARTIAL_STATE", "Active and history pointers must either both exist or both be absent.");
    if (!hasActive) return { sequence: 0, manifestRef: null, manifest: null, history: this.readHistory() };
    const cache = this.#readCache();
    const history = this.#readHistory(cache);
    const active = this.#readActive(cache, history);
    return { sequence: active.sequence, manifestRef: active.manifest_ref, manifest: this.#readManifest(active.manifest_ref, cache, false), history };
  }

  #readCache() { return { objects: new Map(), manifests: new Map() }; }

  #writeImmutable(destination, bytes, label) {
    assertRegularOrMissing(destination, `immutable ${label}`);
    const expected = `sha256:${path.basename(destination, ".json")}`;
    if (sha256Ref(bytes) !== expected) throw new ViewerSnapshotStoreError("VIEWER_STORE_DIGEST_PATH_MISMATCH", `Immutable ${label} name does not match its exact bytes.`);
    if (existsRegular(destination, `immutable ${label}`)) {
      const actual = readSafeFile(destination, `immutable ${label}`);
      if (!actual.equals(bytes)) throw new ViewerSnapshotStoreError("VIEWER_IMMUTABLE_BYTE_CONFLICT", `Immutable ${label} byte conflict at ${path.basename(destination)}.`);
      return;
    }
    const stage = this.#stage(bytes);
    try {
      try {
        linkSync(stage, destination);
        fsyncDirectory(path.dirname(destination));
      } catch (error) {
        if (error?.code !== "EEXIST") throw error;
        const actual = readSafeFile(destination, `immutable ${label}`);
        if (!actual.equals(bytes)) throw new ViewerSnapshotStoreError("VIEWER_IMMUTABLE_BYTE_CONFLICT", `Immutable ${label} byte conflict at ${path.basename(destination)}.`);
      }
    } finally {
      try { unlinkSync(stage); } catch (error) { if (error?.code !== "ENOENT") throw error; }
    }
  }

  #writePointer(leaf, value) {
    this.#assertLockOwned();
    const destination = this.path(leaf);
    assertRegularOrMissing(destination, `artifact store ${leaf}`);
    const stage = this.#stage(canonicalBytes(value));
    try {
      if (statSync(path.dirname(stage)).dev !== statSync(path.dirname(destination)).dev) {
        throw new ViewerSnapshotStoreError("VIEWER_STORE_CROSS_FILESYSTEM", "Pointer staging must use atomic same-filesystem rename.");
      }
      renameSync(stage, destination);
      fsyncDirectory(path.dirname(destination));
    } catch (error) {
      try { unlinkSync(stage); } catch { /* already atomically renamed */ }
      throw error;
    }
  }

  #pointerRef(leaf) {
    const target = this.path(leaf);
    if (!existsRegular(target, `artifact store ${leaf}`)) return null;
    return sha256Ref(readSafeFile(target, `artifact store ${leaf}`));
  }

  #writePointerCas(leaf, value, cas) {
    if (!cas || !Object.hasOwn(cas, "old_ref") || !Object.hasOwn(cas, "new_ref")) {
      throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", `Missing ${leaf} CAS reservation.`);
    }
    const bytes = canonicalBytes(value);
    const newRef = sha256Ref(bytes);
    if (cas.new_ref !== newRef) throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", `${leaf} CAS new digest does not match its pointer bytes.`);
    const current = this.#pointerRef(leaf);
    if (current === newRef) return;
    if (current !== cas.old_ref) {
      throw new ViewerSnapshotStoreError("VIEWER_POINTER_CAS_CONFLICT", `${leaf} pointer CAS conflict: expected ${cas.old_ref ?? "missing"}, found ${current ?? "missing"}.`);
    }
    this.#replacePointerConditionally(leaf, bytes, cas.old_ref);
    if (this.#pointerRef(leaf) !== newRef) throw new ViewerSnapshotStoreError("VIEWER_POINTER_CAS_CONFLICT", `${leaf} pointer was substituted during commit.`);
  }

  #replacePointerConditionally(leaf, bytes, expectedOldRef) {
    this.#assertLockOwned();
    const destination = this.path(leaf);
    const stage = this.#stage(bytes);
    const journalRef = this.currentJournal?.manifest_ref;
    if (!journalRef) throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", "Conditional pointer replacement requires a durable journal.");
    const backup = this.path("staging", `.pointer-backup-${refDigest(journalRef)}-${leaf}`);
    let moved = false;
    try {
      const before = this.#pointerRef(leaf);
      if (before !== expectedOldRef) throw new ViewerSnapshotStoreError("VIEWER_POINTER_CAS_CONFLICT", `${leaf} pointer changed before conditional replacement.`);
      if (before !== null) {
        const capture = { ...this.currentJournal, pointer_capture: { leaf, backup_path: path.basename(backup), expected_old_ref: expectedOldRef } };
        this.#writePointer("journal.json", capture);
        this.currentJournal = capture;
        renameSync(destination, backup);
        moved = true;
        if (sha256Ref(readSafeFile(backup, `${leaf} CAS backup`)) !== expectedOldRef) {
          renameSync(backup, destination); moved = false;
          throw new ViewerSnapshotStoreError("VIEWER_POINTER_CAS_CONFLICT", `${leaf} pointer was substituted during backup capture.`);
        }
      }
      try {
        linkSync(stage, destination);
      } catch (error) {
        if (moved) { renameSync(backup, destination); moved = false; }
        if (error?.code === "EEXIST") throw new ViewerSnapshotStoreError("VIEWER_POINTER_CAS_CONFLICT", `${leaf} pointer appeared during conditional replacement.`);
        throw error;
      }
      fsyncDirectory(path.dirname(destination));
      if (moved) { unlinkSync(backup); moved = false; }
      if (this.currentJournal?.pointer_capture) {
        const cleared = { ...this.currentJournal, pointer_capture: null };
        this.#writePointer("journal.json", cleared);
        this.currentJournal = cleared;
      }
    } catch (error) {
      if (moved) {
        try { if (!existsRegular(destination, `artifact store ${leaf}`)) renameSync(backup, destination); } catch { /* preserve original failure */ }
      }
      throw error;
    } finally {
      try { unlinkSync(stage); } catch { /* hard linked or absent */ }
      try { if (moved) unlinkSync(backup); } catch { /* restored or absent */ }
    }
  }

  #restoreCapturedPointer(journal) {
    const capture = journal.pointer_capture;
    if (!capture) return;
    if (!/^(history-head\.json|active\.json)$/u.test(capture.leaf) || typeof capture.backup_path !== "string" || path.basename(capture.backup_path) !== capture.backup_path) {
      throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", "Journal pointer capture is invalid.");
    }
    const backup = this.path("staging", capture.backup_path);
    if (!existsRegular(backup, "pointer backup")) return;
    const expected = capture.expected_old_ref;
    if (sha256Ref(readSafeFile(backup, "pointer backup")) !== expected) throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", "Pointer backup digest does not match its journal capture.");
    const destination = this.path(capture.leaf);
    const current = this.#pointerRef(capture.leaf);
    if (current === null) {
      renameSync(backup, destination);
      fsyncDirectory(path.dirname(destination));
    } else if (current === expected || current === journal.cas[capture.leaf === "active.json" ? "active" : "history_head"].new_ref) {
      unlinkSync(backup);
    } else {
      throw new ViewerSnapshotStoreError("VIEWER_POINTER_CAS_CONFLICT", "Captured pointer cannot be restored without overwriting a substitute.");
    }
    const cleared = { ...journal, pointer_capture: null };
    this.#writePointer("journal.json", cleared);
    this.currentJournal = cleared;
  }

  #stage(bytes) {
    const filename = `.stage-${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}.json`;
    const stage = this.path("staging", filename);
    assertRegularOrMissing(stage, "staging file");
    const descriptor = openSync(stage, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
    try { writeSync(descriptor, bytes); fsyncSync(descriptor); } finally { closeSync(descriptor); }
    const stat = lstatSync(stage);
    if (!stat.isFile() || stat.nlink !== 1) throw new ViewerSnapshotStoreError("VIEWER_STAGING_UNSAFE", "Staging path is not an unlinked regular file.");
    return stage;
  }

  #acquireLock(forceStaleLock) {
    const lockPath = this.path("locks", "publisher.lock");
    try {
      const descriptor = openSync(lockPath, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
      try { const payload = canonicalBytes({ pid: process.pid, created_at: new Date().toISOString(), owner_token: `${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}` }); writeSync(descriptor, payload); fsyncSync(descriptor); this.lockLease = payload; } finally { closeSync(descriptor); }
    } catch (error) {
      if (error?.code !== "EEXIST") throw error;
      assertRegularOrMissing(lockPath, "publisher lock");
      const lock = parseCanonicalJson(readSafeFile(lockPath, "publisher lock"), "publisher lock");
      const age = Date.now() - Date.parse(lock.created_at);
      const live = Number.isInteger(lock.pid) && processAlive(lock.pid);
      if (!forceStaleLock || live || !Number.isFinite(age) || age < this.staleLockMs) {
        throw new ViewerSnapshotStoreError("VIEWER_PUBLISHER_LOCKED", "Viewer publisher lock already exists.");
      }
      unlinkSync(lockPath);
      return this.#acquireLock(false);
    }
    return () => { try { this.#assertLockOwned(); unlinkSync(lockPath); fsyncDirectory(path.dirname(lockPath)); } catch (error) { if (error?.code !== "ENOENT") throw error; } finally { this.lockLease = null; } };
  }

  #assertLockOwned() {
    if (!this.lockLease) return;
    const lockPath = this.path("locks", "publisher.lock");
    const actual = readSafeFile(lockPath, "publisher lock");
    if (!actual.equals(this.lockLease)) throw new ViewerSnapshotStoreError("VIEWER_LOCK_OWNERSHIP_LOST", "Publisher lock owner token was substituted.");
  }

  #probeCreateIfAbsentAndRename() {
    const staging = this.path("staging", `.probe-${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`);
    const target = this.path("staging", `${path.basename(staging)}.target`);
    let descriptor;
    try {
      descriptor = openSync(staging, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
      writeSync(descriptor, Buffer.from("probe\n"));
      fsyncSync(descriptor);
      closeSync(descriptor); descriptor = null;
      let exists = false;
      try { const duplicate = openSync(staging, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW); closeSync(duplicate); } catch (error) { exists = error?.code === "EEXIST"; }
      if (!exists) throw new ViewerSnapshotStoreError("VIEWER_STORE_CAPABILITY_UNAVAILABLE", "Artifact store create-if-absent capability probe failed.");
      renameSync(staging, target);
      if (!existsRegular(target, "atomic rename probe")) throw new ViewerSnapshotStoreError("VIEWER_STORE_CAPABILITY_UNAVAILABLE", "Artifact store atomic rename capability probe failed.");
    } finally {
      if (descriptor !== undefined && descriptor !== null) closeSync(descriptor);
      for (const file of [staging, target]) { try { unlinkSync(file); } catch (error) { if (error?.code !== "ENOENT") throw error; } }
    }
  }

  #interrupt(requested, phase) {
    if (requested === phase) throw new ViewerSnapshotStoreError("VIEWER_PUBLICATION_INTERRUPTED", `Publication interrupted at ${phase}.`);
  }

  path(...parts) { return path.join(this.root, ...parts); }
}

function normalizeCoordinate(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) assertExactKeys(value, ["system", "version"], "coverage coordinate");
  if (!value || typeof value !== "object" || !/^[a-z0-9][a-z0-9_-]*$/u.test(value.system) || !/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(value.version)) {
    throw new ViewerSnapshotStoreError("VIEWER_COORDINATE_INVALID", "Invalid coverage coordinate.");
  }
  return { system: value.system, version: value.version };
}

function requireEntries(entries, label) {
  if (!Array.isArray(entries)) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", `${label} entries must be an array.`);
  const ids = new Set();
  return entries.map((entry) => {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", `${label} entry must be an object.`);
    const copy = structuredClone(entry);
    const id = requireText(copy.id, `${label} entry id`);
    if (ids.has(id)) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_DUPLICATE_ENTRY", `Duplicate ${label} entry: ${id}.`);
    ids.add(id);
    return copy;
  }).sort(compareById);
}

function requireCoverageEntries(entries) {
  if (!Array.isArray(entries)) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", "Coverage entries must be an array.");
  const keys = new Set();
  return entries.map((entry) => {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", "Coverage entry must be an object.");
    const copy = structuredClone(entry);
    copy.coordinate = normalizeCoordinate(copy.coordinate);
    copy.code = requireText(copy.code, "coverage code");
    const key = `${copy.coordinate.system}:${copy.coordinate.version}:${copy.code}`;
    if (keys.has(key)) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_DUPLICATE_COVERAGE", `Duplicate coverage entry: ${key}.`);
    keys.add(key);
    return copy;
  });
}

function requireText(value, label) {
  if (typeof value !== "string" || !value || value !== value.trim()) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", `Invalid ${label}.`);
  return value;
}

function assertExactKeys(value, allowed, label) {
  const unknown = Object.keys(value).filter((key) => !allowed.includes(key));
  if (unknown.length) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", `${label} contains undeclared field(s): ${unknown.sort().join(", ")}.`);
}

function assertRefMap(value, label) {
  if (!isPlainObject(value)) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", `${label} must be a plain reference map.`);
  for (const [key, ref] of Object.entries(value)) {
    requireText(key, `${label} key`);
    try { assertSha256Ref(ref, `${label}.${key}`); } catch (error) {
      throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", `${label}.${key} must be a sha256 reference.`, { cause: error });
    }
  }
}

function projectPcrDetail(entry) {
  return {
    id: entry.id,
    markdown: structuredClone(entry.markdown),
    guidance: structuredClone(entry.guidance),
  };
}

function localeMap(value, fallback) {
  if (isPlainObject(value)) return structuredClone(value);
  return { "en-US": typeof value === "string" ? value : fallback, "zh-CN": null };
}

function languageInfo(value) {
  if (isPlainObject(value)) return structuredClone(value);
  return { canonical: "en-US", available: [] };
}

function translationStatus(value) {
  if (isPlainObject(value)) return structuredClone(value);
  return {};
}

function resolvedReadiness(entry) {
  const catalogReadiness = entry.readiness;
  const guidanceReadiness = entry.guidance?.readiness;
  if (catalogReadiness === undefined && guidanceReadiness === undefined) {
    throw new ViewerSnapshotStoreError("VIEWER_READINESS_REQUIRED", "Catalog readiness must be supplied or derived from validated guidance readiness.");
  }
  if (catalogReadiness !== undefined && guidanceReadiness !== undefined && canonicalJson(catalogReadiness) !== canonicalJson(guidanceReadiness)) {
    throw new ViewerSnapshotStoreError("VIEWER_READINESS_MISMATCH", "Catalog readiness must exactly equal guidance readiness.");
  }
  return structuredClone(catalogReadiness ?? guidanceReadiness);
}

function assertMarkdown(value) {
  if (!isPlainObject(value)) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", "pcr_detail.markdown must be a closed language map.");
  assertExactKeys(value, ["en-US", "zh-CN"], "pcr_detail.markdown");
  for (const language of ["en-US", "zh-CN"]) {
    if (!Object.hasOwn(value, language) || (value[language] !== null && typeof value[language] !== "string")) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", `pcr_detail.markdown.${language} must be a string or null.`);
  }
}

function isPlainObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function assertPcrDetailSubobject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", `${label} must be an object.`);
  assertExactKeys(value, ["reference_unit", "reference_amount", "unit", "amount", "qualifiers"], label);
  if (value.qualifiers !== undefined) assertNoGeneratedMetadata(value.qualifiers, `${label}.qualifiers`);
}

function assertNoGeneratedMetadata(value, label) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertNoGeneratedMetadata(item, `${label}[${index}]`));
  } else if (value && typeof value === "object") {
    if (Object.hasOwn(value, "generated_at")) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_SEMANTIC_INVALID", `${label} contains undeclared field(s): generated_at.`);
    for (const [key, child] of Object.entries(value)) assertNoGeneratedMetadata(child, `${label}.${key}`);
  }
}

function requireSequence(value) {
  if (!Number.isSafeInteger(value) || value < 1) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", "Snapshot sequence must be a positive safe integer.");
  return value;
}

function requireUtc(value, label) {
  if (typeof value !== "string" || !value.endsWith("Z") || Number.isNaN(Date.parse(value))) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", `Invalid ${label}.`);
  return value;
}

function requireValidationSummary(value) {
  if (!value || value.status !== "passed" || !Number.isSafeInteger(value.checks) || value.checks < 0 || Object.keys(value).some((key) => !["status", "checks"].includes(key))) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", "Invalid validation summary.");
  return structuredClone(value);
}

function requireCatalogScope(value) {
  if (!["material", "all", "legacy"].includes(value)) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", "Invalid catalog scope.");
  return value;
}

function normalizeMarkerMap(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", "releaseRevisionMarkers must be an object keyed by PCR id.");
  return sortedObject(Object.fromEntries(Object.entries(value).map(([id, ref]) => [requireText(id, "PCR marker id"), assertSha256Ref(ref, "PCR release/revision marker reference")])));
}

function requireGitHash(value, label) {
  if (typeof value !== "string" || !/^[a-f0-9]{40,64}$/u.test(value)) throw new ViewerSnapshotStoreError("VIEWER_SOURCE_IDENTITY_INVALID", `Invalid ${label}.`);
  return value;
}

function twoCharacterPrefix(value) { return sha256Ref(value).slice(SHA256_PREFIX.length, SHA256_PREFIX.length + 2); }
function coverageCodePrefix(value) { return String(value).slice(0, 2); }
function compareById(left, right) { return String(left.id).localeCompare(String(right.id)); }
function sortedObject(value) { return Object.fromEntries(Object.keys(value).sort().map((key) => [key, value[key]])); }
function countReused(next, previous) { return Object.entries(next).filter(([id, ref]) => previous[id] === ref).length; }

function validateJournal(value) {
  if (!value || value.schema_version !== 1 || value.kind !== "viewer-publication-journal" || !["prepared", "history_prepared", "history_committed", "active_committed"].includes(value.phase)) {
    throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", "Invalid publication journal.");
  }
  assertSha256Ref(value.manifest_ref, "journal manifest reference");
  requireSequence(value.sequence);
  if (!value.history_head || !value.active || !value.cas || !value.reservation || !value.source || !value.capture || typeof value.source_fingerprint !== "string") {
    throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", "Journal is missing durable CAS/source/reservation state.");
  }
  for (const pointer of ["history_head", "active"]) {
    const reservation = value.cas[pointer];
    if (!reservation || !Object.hasOwn(reservation, "old_ref") || !Object.hasOwn(reservation, "new_ref") || (reservation.old_ref !== null && !/^sha256:[a-f0-9]{64}$/u.test(reservation.old_ref)) || !/^sha256:[a-f0-9]{64}$/u.test(reservation.new_ref)) {
      throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", `Journal ${pointer} CAS reservation is invalid.`);
    }
  }
}

function parseCanonicalJson(bytes, label) {
  try { return JSON.parse(bytes.toString("utf8")); } catch (error) { throw new ViewerSnapshotStoreError("VIEWER_STORE_JSON_INVALID", `Invalid ${label} JSON.`, { cause: error }); }
}

function ensureSafeDirectory(target, label) {
  const absolute = path.resolve(target);
  const parsed = path.parse(absolute);
  let current = parsed.root;
  for (const segment of absolute.slice(parsed.root.length).split(path.sep).filter(Boolean)) {
    current = path.join(current, segment);
    try {
      const stat = lstatSync(current);
      if (stat.isSymbolicLink()) throw new ViewerSnapshotStoreError("VIEWER_STORE_UNSAFE_PATH", `${label} contains a symbolic link: ${current}`);
      if (!stat.isDirectory()) throw new ViewerSnapshotStoreError("VIEWER_STORE_UNSAFE_PATH", `${label} must be a directory: ${current}`);
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
      mkdirSync(current, { mode: 0o700 });
      const stat = lstatSync(current);
      if (!stat.isDirectory() || stat.isSymbolicLink()) throw new ViewerSnapshotStoreError("VIEWER_STORE_UNSAFE_PATH", `${label} directory creation was substituted: ${current}`);
    }
  }
}

function assertRegularOrMissing(target, label) {
  const parent = path.dirname(target);
  ensureSafeDirectory(parent, `${label} parent`);
  try {
    const stat = lstatSync(target);
    if (stat.isSymbolicLink()) throw new ViewerSnapshotStoreError("VIEWER_STORE_UNSAFE_PATH", `${label} must not be a symbolic link: ${target}`);
    if (!stat.isFile()) throw new ViewerSnapshotStoreError("VIEWER_STORE_UNSAFE_PATH", `${label} must be a regular file: ${target}`);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

function existsRegular(target, label) { return assertRegularOrMissing(target, label); }

function readSafeFile(target, label) {
  if (!assertRegularOrMissing(target, label)) {
    const error = new ViewerSnapshotStoreError("VIEWER_STORE_MISSING", `Missing ${label}: ${target}`);
    error.code = "ENOENT";
    throw error;
  }
  const descriptor = openSync(target, fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW | fsConstants.O_NONBLOCK);
  try {
    const opened = fstatSync(descriptor);
    const current = lstatSync(target);
    if (!opened.isFile() || !current.isFile() || current.isSymbolicLink() || opened.dev !== current.dev || opened.ino !== current.ino) {
      throw new ViewerSnapshotStoreError("VIEWER_STORE_UNSAFE_PATH", `${label} was substituted while opening.`);
    }
    return readFileSync(descriptor);
  } finally { closeSync(descriptor); }
}

function resolveContained(root, relative, label) {
  if (!relative || path.isAbsolute(relative) || relative.split(/[\\/]/u).includes("..")) throw new ViewerSnapshotStoreError("VIEWER_PINNED_SOURCE_INVALID", `${label} path must be relative and contained.`);
  const resolved = path.resolve(root, relative);
  if (path.relative(root, resolved).startsWith("..") || path.isAbsolute(path.relative(root, resolved))) throw new ViewerSnapshotStoreError("VIEWER_PINNED_SOURCE_INVALID", `${label} path escapes the artifact store.`);
  return resolved;
}

function fsyncDirectory(directory) {
  const descriptor = openSync(directory, fsConstants.O_RDONLY | fsConstants.O_DIRECTORY | fsConstants.O_NOFOLLOW);
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function processAlive(pid) {
  try { process.kill(pid, 0); return true; } catch (error) { return error?.code === "EPERM"; }
}
