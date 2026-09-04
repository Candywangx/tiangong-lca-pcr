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
} from "./snapshot-format.mjs";

const SHA256_PREFIX = "sha256:";
const OBJECT_KINDS = new Set([
  "pcr_entry",
  "alias_entry",
  "catalog_shard",
  "alias_shard",
  "coverage_shard",
  "history_page",
]);

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
  constructor({ root, generatorVersion, capabilities = {}, staleLockMs = 300_000 } = {}) {
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
    this.staleLockMs = staleLockMs;
    this.schemas = createViewerSnapshotSchemaRegistry();
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
    return Object.freeze({ root: this.root, same_filesystem: true, fsync: true, atomic_rename: true, create_if_absent: true });
  }

  writeObject(value) {
    this.probe();
    return this.#writeObject(value);
  }

  readObject(ref) {
    const bytes = this.#readImmutable(this.path("objects", `${refDigest(ref)}.json`), ref, "object");
    const value = parseCanonicalJson(bytes, "viewer object");
    this.schemas.assert("viewer-object", value);
    return value;
  }

  readManifest(ref) {
    const bytes = this.#readImmutable(this.path("manifests", `${refDigest(ref)}.json`), ref, "manifest");
    const manifest = parseCanonicalJson(bytes, "viewer manifest");
    this.schemas.assert("viewer-snapshot-manifest", manifest);
    this.#validateManifestObjects(manifest);
    return manifest;
  }

  readHistory() {
    const historyPath = this.path("history-head.json");
    if (!existsRegular(historyPath, "history head")) return { schema_version: 1, kind: "viewer-history", entries: [] };
    const history = parseCanonicalJson(readSafeFile(historyPath, "history head"), "viewer history");
    this.schemas.assert("viewer-history", history);
    let previousSequence = 0;
    for (const entry of history.entries) {
      if (entry.sequence !== previousSequence + 1) {
        throw new ViewerSnapshotStoreError("VIEWER_HISTORY_CORRUPT", "Viewer history sequences must be contiguous and ordered.");
      }
      const manifest = this.readManifest(entry.manifest_ref);
      if (manifest.sequence !== entry.sequence) {
        throw new ViewerSnapshotStoreError("VIEWER_HISTORY_CORRUPT", `History sequence ${entry.sequence} does not match its manifest.`);
      }
      previousSequence = entry.sequence;
    }
    return history;
  }

  readActive() {
    const active = parseCanonicalJson(readSafeFile(this.path("active.json"), "active pointer"), "viewer active pointer");
    this.schemas.assert("viewer-active", active);
    const manifest = this.readManifest(active.manifest_ref);
    if (manifest.sequence !== active.sequence) {
      throw new ViewerSnapshotStoreError("VIEWER_ACTIVE_CORRUPT", "Active pointer sequence does not match its manifest.");
    }
    const history = this.readHistory();
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
    this.#validatePinnedSources(normalized.pinnedSources);
    const previous = this.#readCurrentOrEmpty();
    if (normalized.sequence !== previous.sequence + 1) {
      throw new ViewerSnapshotStoreError("VIEWER_SEQUENCE_CONFLICT", `Snapshot sequence ${normalized.sequence} must follow ${previous.sequence}.`);
    }

    const pcrEntries = this.#writeEntries(normalized.pcrEntries, "pcr_entry");
    const aliasEntries = this.#writeEntries(normalized.aliasEntries, "alias_entry");
    const catalogShards = this.#writePrefixShards(pcrEntries, "catalog_shard", (id) => twoCharacterPrefix(id));
    const aliasShards = this.#writePrefixShards(aliasEntries, "alias_shard", (id) => twoCharacterPrefix(id));
    const coverageShards = this.#writeCoverageShards(normalized.coverageEntries);
    const lineage = this.#deriveLineage(normalized.pcrEntries, previous.manifest);
    const manifest = {
      schema_version: 1,
      kind: "viewer-snapshot-manifest",
      snapshot_id: normalized.snapshotId,
      sequence: normalized.sequence,
      generator_version: this.generatorVersion,
      generator_contract_sha256: normalized.generatorContractSha256,
      source: normalized.source,
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
        catalog_shards: catalogShards,
        alias_shards: aliasShards,
        coverage_shards: coverageShards,
      },
    };
    this.schemas.assert("viewer-snapshot-manifest", manifest);
    const manifestBytes = canonicalBytes(manifest);
    const manifestRef = sha256Ref(manifestBytes);
    this.#writeImmutable(this.path("manifests", `${refDigest(manifestRef)}.json`), manifestBytes, "manifest");

    let journal = { schema_version: 1, kind: "viewer-publication-journal", phase: "prepared", manifest_ref: manifestRef, sequence: normalized.sequence };
    this.#writePointer("journal.json", journal);
    this.#interrupt(normalized.failurePhase, journal.phase);

    const oldHistory = previous.history;
    const history = { ...oldHistory, entries: [...oldHistory.entries, { sequence: normalized.sequence, manifest_ref: manifestRef }] };
    this.schemas.assert("viewer-history", history);
    const historyBytes = canonicalBytes(history);
    const historyRef = sha256Ref(historyBytes);
    this.#writeImmutable(this.path("history", `${refDigest(historyRef)}.json`), historyBytes, "history page");
    journal = { ...journal, phase: "history_prepared", history_ref: historyRef };
    this.#writePointer("journal.json", journal);
    this.#interrupt(normalized.failurePhase, journal.phase);

    this.#writePointer("history-head.json", history);
    journal = { ...journal, phase: "history_committed" };
    this.#writePointer("journal.json", journal);
    this.#interrupt(normalized.failurePhase, journal.phase);

    const active = { schema_version: 1, kind: "viewer-active", manifest_ref: manifestRef, sequence: normalized.sequence };
    this.schemas.assert("viewer-active", active);
    this.#writePointer("active.json", active);
    journal = { ...journal, phase: "active_committed" };
    this.#writePointer("journal.json", journal);
    this.#interrupt(normalized.failurePhase, journal.phase);
    unlinkSync(this.path("journal.json"));
    fsyncDirectory(this.root);
    return Object.freeze({ manifestRef, sequence: normalized.sequence, reused: previous.manifest ? countReused(pcrEntries, previous.manifest.refs.pcr_entries) : 0 });
  }

  #recoverLocked() {
    const journalPath = this.path("journal.json");
    if (!existsRegular(journalPath, "publication journal")) return Object.freeze({ recovered: false });
    const journal = parseCanonicalJson(readSafeFile(journalPath, "publication journal"), "publication journal");
    validateJournal(journal);
    const manifest = this.readManifest(journal.manifest_ref);
    if (manifest.sequence !== journal.sequence) throw new ViewerSnapshotStoreError("VIEWER_JOURNAL_CORRUPT", "Journal sequence does not match its manifest.");
    if (journal.phase === "prepared") {
      const history = this.readHistory();
      const entries = history.entries.at(-1)?.manifest_ref === journal.manifest_ref
        ? history.entries
        : [...history.entries, { sequence: journal.sequence, manifest_ref: journal.manifest_ref }];
      const nextHistory = { schema_version: 1, kind: "viewer-history", entries };
      this.schemas.assert("viewer-history", nextHistory);
      const bytes = canonicalBytes(nextHistory);
      const ref = sha256Ref(bytes);
      this.#writeImmutable(this.path("history", `${refDigest(ref)}.json`), bytes, "history page");
      this.#writePointer("journal.json", { ...journal, phase: "history_prepared", history_ref: ref });
      return this.#recoverLocked();
    }
    const historyBytes = this.#readImmutable(this.path("history", `${refDigest(journal.history_ref)}.json`), journal.history_ref, "history page");
    const history = parseCanonicalJson(historyBytes, "viewer history page");
    this.schemas.assert("viewer-history", history);
    if (journal.phase === "history_prepared") {
      this.#writePointer("history-head.json", history);
      this.#writePointer("journal.json", { ...journal, phase: "history_committed" });
      return this.#recoverLocked();
    }
    const active = { schema_version: 1, kind: "viewer-active", manifest_ref: journal.manifest_ref, sequence: journal.sequence };
    if (journal.phase === "history_committed") {
      this.#writePointer("active.json", active);
      this.#writePointer("journal.json", { ...journal, phase: "active_committed" });
      return this.#recoverLocked();
    }
    this.readActive();
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
      sequence: requireSequence(input.sequence),
      generatorContractSha256: assertSha256Ref(input.generatorContractSha256, "generator contract reference"),
      source: {
        catalog: assertSha256Ref(source.catalog, "catalog source reference"),
        aliases: assertSha256Ref(source.aliases, "alias source reference"),
        coverage,
        release_revision_marker: source.releaseRevisionMarker === null || source.releaseRevisionMarker === undefined ? null : assertSha256Ref(source.releaseRevisionMarker, "release/revision marker reference"),
      },
      pcrEntries: requireEntries(input.pcrEntries, "PCR"),
      aliasEntries: requireEntries(input.aliasEntries, "alias"),
      coverageEntries: requireCoverageEntries(input.coverageEntries),
      pinnedSources: input.pinnedSources ?? [],
      failurePhase: input.failurePhase ?? null,
      forceStaleLock: input.forceStaleLock === true,
    };
    return normalized;
  }

  #writeEntries(entries, kind) {
    const refs = {};
    for (const entry of entries) {
      refs[entry.id] = this.#writeObject({ schema_version: 1, object_kind: kind, entry });
    }
    return sortedObject(refs);
  }

  #writePrefixShards(entryRefs, kind, prefixFor) {
    const groups = new Map();
    for (const [id, objectRef] of Object.entries(entryRefs)) {
      const prefix = prefixFor(id);
      const group = groups.get(prefix) ?? [];
      group.push({ id, object_ref: objectRef });
      groups.set(prefix, group);
    }
    const refs = {};
    for (const prefix of [...groups.keys()].sort()) {
      refs[prefix] = this.#writeObject({ schema_version: 1, object_kind: kind, entry: { prefix, entries: groups.get(prefix).sort(compareById) } });
    }
    return sortedObject(refs);
  }

  #writeCoverageShards(entries) {
    const groups = new Map();
    for (const entry of entries) {
      const coordinate = normalizeCoordinate(entry.coordinate);
      const prefix = coverageCodePrefix(entry.code);
      const key = `${coordinate.system}:${coordinate.version}/${prefix}`;
      const group = groups.get(key) ?? { coordinate, prefix, entries: [] };
      group.entries.push(structuredClone(entry));
      groups.set(key, group);
    }
    const refs = {};
    for (const key of [...groups.keys()].sort()) {
      const group = groups.get(key);
      group.entries.sort((left, right) => String(left.code).localeCompare(String(right.code)));
      refs[key] = this.#writeObject({ schema_version: 1, object_kind: "coverage_shard", entry: group });
    }
    return sortedObject(refs);
  }

  #deriveLineage(entries, previousManifest) {
    const renames = {};
    for (const entry of entries) {
      if (!Object.hasOwn(entry, "renamed_from")) continue;
      const oldId = requireText(entry.renamed_from, "renamed_from");
      if (!previousManifest || !Object.hasOwn(previousManifest.refs.pcr_entries, oldId)) {
        throw new ViewerSnapshotStoreError("VIEWER_RENAME_PREDECESSOR_MISSING", `Rename predecessor is not present in the previous manifest: ${oldId}.`);
      }
      renames[entry.id] = oldId;
    }
    return { renames: sortedObject(renames) };
  }

  #writeObject(value) {
    if (!value || !OBJECT_KINDS.has(value.object_kind)) throw new ViewerSnapshotStoreError("VIEWER_OBJECT_KIND_INVALID", "Invalid viewer object kind.");
    this.schemas.assert("viewer-object", value);
    const bytes = canonicalBytes(value);
    const ref = sha256Ref(bytes);
    this.#writeImmutable(this.path("objects", `${refDigest(ref)}.json`), bytes, "object");
    return ref;
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

  #validateManifestObjects(manifest) {
    const refs = manifest.refs;
    for (const map of [refs.pcr_entries, refs.alias_entries, refs.catalog_shards, refs.alias_shards, refs.coverage_shards]) {
      for (const ref of Object.values(map)) this.readObject(ref);
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
    for (const ref of Object.values(refs.coverage_shards)) coverage += this.readObject(ref).entry.entries.length;
    if (manifest.counts.coverage !== coverage) throw new ViewerSnapshotStoreError("VIEWER_MANIFEST_CORRUPT", "Manifest coverage count does not match coverage shards.");
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

  #readCurrentOrEmpty() {
    const hasActive = existsRegular(this.path("active.json"), "active pointer");
    const hasHistory = existsRegular(this.path("history-head.json"), "history head");
    if (hasActive !== hasHistory) throw new ViewerSnapshotStoreError("VIEWER_STORE_PARTIAL_STATE", "Active and history pointers must either both exist or both be absent.");
    if (!hasActive) return { sequence: 0, manifestRef: null, manifest: null, history: this.readHistory() };
    const active = this.readActive();
    return { sequence: active.sequence, manifestRef: active.manifest_ref, manifest: this.readManifest(active.manifest_ref), history: this.readHistory() };
  }

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
      try { const payload = canonicalBytes({ pid: process.pid, created_at: new Date().toISOString() }); writeSync(descriptor, payload); fsyncSync(descriptor); } finally { closeSync(descriptor); }
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
    return () => { try { unlinkSync(lockPath); fsyncDirectory(path.dirname(lockPath)); } catch (error) { if (error?.code !== "ENOENT") throw error; } };
  }

  #interrupt(requested, phase) {
    if (requested === phase) throw new ViewerSnapshotStoreError("VIEWER_PUBLICATION_INTERRUPTED", `Publication interrupted at ${phase}.`);
  }

  path(...parts) { return path.join(this.root, ...parts); }
}

function normalizeCoordinate(value) {
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

function requireSequence(value) {
  if (!Number.isSafeInteger(value) || value < 1) throw new ViewerSnapshotStoreError("VIEWER_SNAPSHOT_INVALID", "Snapshot sequence must be a positive safe integer.");
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
  if (value.phase !== "prepared") assertSha256Ref(value.history_ref, "journal history reference");
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
