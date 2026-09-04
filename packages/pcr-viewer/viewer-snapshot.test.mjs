import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import {
  canonicalJson,
  createViewerSnapshotSchemaRegistry,
  sha256Ref,
} from "./scripts/snapshot-format.mjs";
import { ViewerSnapshotStore } from "./scripts/snapshot-store.mjs";

function fixtureStore() {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-snapshot-"));
  const verificationCalls = [];
  return {
    root,
    verificationCalls,
    store: new ViewerSnapshotStore({
      root,
      generatorVersion: "viewer-1",
      sourceVerifier: (request) => {
        verificationCalls.push(request.phase);
        return true;
      },
    }),
  };
}

function snapshotInput(overrides = {}) {
  return {
    snapshotId: "snapshot-001",
    goalId: "goal-001",
    harnessSnapshotId: "harness-001",
    capturedAt: "2026-09-05T00:00:00Z",
    validatedAt: "2026-09-05T00:01:00Z",
    validationSummary: { status: "passed", checks: 12 },
    catalogScope: "material",
    sequence: 1,
    generatorContractSha256: sha256Ref("generator-contract-v1\n"),
    source: {
      catalog: sha256Ref("catalog-v1\n"),
      aliases: sha256Ref("aliases-v1\n"),
      coverage: [
        { coordinate: { system: "cpc", version: "3.0" }, ref: sha256Ref("coverage-v1\n") },
      ],
      releaseRevisionMarkers: {},
      source_ref: "refs/heads/integration",
      integration_commit: "a".repeat(40),
      base_commit: "b".repeat(40),
      tree_hash: "c".repeat(40),
    },
    pcrEntries: [
      { id: "pcr.agriculture.wheat-seed", title: "Wheat seed", lifecycle_status: "active", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance("pcr.agriculture.wheat-seed") },
      { id: "pcr.industrial.cement", title: "Cement", lifecycle_status: "active", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance("pcr.industrial.cement") },
    ],
    aliasEntries: [{ id: "pcr.legacy.wheat", locator: "cpc:3.0:01111" }],
    coverageEntries: [
      { coordinate: { system: "cpc", version: "3.0" }, code: "01111", pcr_id: "pcr.agriculture.wheat-seed" },
    ],
    ...overrides,
  };
}

function objectIdentity() {
  return {
    generator_contract_sha256: sha256Ref("generator-contract-v1\n"),
    schema_contract_sha256: sha256Ref("schema-contract-v1\n"),
    source_fingerprint: sha256Ref("source-v1\n"),
    release_revision_marker: null,
  };
}

function viewerReadiness() {
  return {
    status: "ready", lifecycle_status: "active", methodology_status: "reviewed_methodology", structured_projection_available: true,
    projection_fingerprint: {
      required: true, status: "current", schema_valid: true, contract_version: "1",
      source_sha256: sha256Ref("viewer-source\n"), generated_content_sha256: sha256Ref("viewer-content\n"),
      source_hash_valid: true, content_hash_valid: true, issues: [],
    },
    usable_for_guidance: true, usable_for_validation: true, blockers: [], warnings: [],
  };
}

// Complete pcr-core buildGuidance-shaped payload, deliberately not a viewer summary.
function viewerGuidance(id = "pcr.a") {
  return {
    schema_version: 1, guidance_kind: "tiangong-pcr-agent-guidance",
    pcr: { id, path: "library/pcrs/example", title: { "en-US": "Example", "zh-CN": null } },
    readiness: viewerReadiness(), source_structured: "library/pcrs/example/structured.yaml",
    system_boundary: { rules: [] }, boundary_abstraction: { boundary_level: "foreground" }, reference_flow: { reference_unit: "kg" },
    measurement_rules: [], process_map: [], process_inventory: [],
    production_guidance: { collection_protocols: [], calculation_rules: [], data_quality_requirements: [] },
    published_dataset_profile: { target: "dataset" }, allocation_rules: [], data_quality_rules: [], validation_rules: [], data_sources: [],
    validation_notes: ["Validate the foreground dataset."],
  };
}

test("canonical snapshot JSON is sorted, compact, finite, and exactly newline-terminated", () => {
  const text = canonicalJson({ z: [3, { b: true, a: null }], a: "汉字", n: -0 });
  assert.equal(text, '{"a":"汉字","n":0,"z":[3,{"a":null,"b":true}]}\n');
  assert.equal(sha256Ref(text), `sha256:${createHash("sha256").update(text).digest("hex")}`);
  assert.throws(() => canonicalJson({ n: Number.NaN }), /finite JSON number/u);
  assert.throws(() => canonicalJson({ missing: undefined }), /Unsupported JSON value/u);
});

test("viewer snapshot schemas are strict", () => {
  const schemas = createViewerSnapshotSchemaRegistry();
  assert.throws(
    () => schemas.assert("viewer-object", { schema_version: 1, object_kind: "pcr_entry", entry: {}, extra: true }),
    /schema validation failed/u,
  );
  assert.throws(
    () => schemas.assert("viewer-active", { schema_version: 1, kind: "viewer-active", manifest_ref: "not-a-ref", sequence: 1 }),
    /schema validation failed/u,
  );
  const identity = objectIdentity();
  assert.equal(schemas.validate("viewer-object", { schema_version: 1, object_kind: "catalog_shard", identity, entry: { prefix: "aa", entries: [{ id: "pcr.a", object_ref: sha256Ref("a"), generated_at: "now" }] } }).valid, false);
  assert.equal(schemas.validate("viewer-object", { schema_version: 1, object_kind: "catalog_root", identity, entry: { shards: { aa: "not-a-ref" }, details: {} } }).valid, false);
  assert.equal(schemas.validate("viewer-object", { schema_version: 1, object_kind: "history_page", identity, entry: { entries: [{ sequence: 1, manifest_ref: sha256Ref("m"), generated_at: "now" }], previous_page_ref: null } }).valid, false);
});

test("PCR detail preserves the complete buildGuidance-shaped payload", () => {
  const { root, store } = fixtureStore();
  try {
    const guidance = viewerGuidance("pcr.agriculture.wheat-seed");
    const markdown = { "en-US": "# Wheat", "zh-CN": "# 小麦" };
    const result = store.publish(snapshotInput({ pcrEntries: [
      { id: "pcr.agriculture.wheat-seed", title: "Wheat seed", markdown, guidance },
      { id: "pcr.industrial.cement", title: "Cement", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance("pcr.industrial.cement") },
    ] }));
    const manifest = store.readManifest(result.manifestRef);
    const detail = store.readObject(manifest.refs.pcr_entries["pcr.agriculture.wheat-seed"]);
    assert.deepEqual(detail.entry.markdown, markdown);
    assert.deepEqual(detail.entry.guidance, guidance);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("catalog entries retain list metadata, classification text, and search_text", () => {
  const { root, store } = fixtureStore();
  try {
    const pcr = {
      id: "pcr.agriculture.wheat-seed", path: "library/pcrs/agriculture/wheat-seed",
      title: { "en-US": "Wheat seed", "zh-CN": "小麦种子" }, status: "active", version: "1.2.3",
      content_maturity: "reviewed_methodology", languages: { canonical: "en-US", available: ["en-US", "zh-CN"] },
      translation_status: { "zh-CN": "reviewed" },
      classification_refs: [{ system: "CPC", version: "3.0", code: "01111", title: "Wheat seed for sowing", mapping_type: "exact" }],
      record_kind: "methodology", readiness: viewerReadiness(),
      search_text: "Wheat seed 小麦种子 CPC 01111 Wheat seed for sowing",
      markdown: { "en-US": "# Wheat", "zh-CN": "# 小麦" }, guidance: viewerGuidance("pcr.agriculture.wheat-seed"),
    };
    const result = store.publish(snapshotInput({ pcrEntries: [pcr, snapshotInput().pcrEntries[1]] }));
    const manifest = store.readManifest(result.manifestRef);
    const shard = Object.values(manifest.refs.catalog_shards)
      .map((ref) => store.readObject(ref))
      .find((object) => object.entry.entries.some((item) => item.id === pcr.id));
    const catalogEntry = store.readObject(shard.entry.entries.find((item) => item.id === pcr.id).object_ref);
    assert.equal(catalogEntry.entry.search_text, pcr.search_text);
    assert.deepEqual(catalogEntry.entry.title, pcr.title);
    assert.deepEqual(catalogEntry.entry.classification_refs, pcr.classification_refs);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("catalog readiness is derived from guidance or must exactly agree with it", () => {
  const { root, store } = fixtureStore();
  try {
    const derived = store.publish(snapshotInput());
    assert.ok(derived.manifestRef);
    assert.throws(() => store.publish(snapshotInput({
      snapshotId: "snapshot-002", sequence: 2,
      pcrEntries: snapshotInput().pcrEntries.map((entry) => entry.id === "pcr.agriculture.wheat-seed"
        ? { ...entry, readiness: { ...viewerReadiness(), status: "unavailable" } }
        : entry),
    })), /readiness.*guidance|guidance.*readiness/u);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("publication binds coverage targets and object provenance to exact source inputs", () => {
  const { root, store } = fixtureStore();
  try {
    assert.throws(() => store.publish(snapshotInput({ coverageEntries: [{ coordinate: { system: "cpc", version: "3.0" }, code: "01111", pcr_id: "pcr.unknown" }] })), /coverage.*PCR|PCR.*coverage/iu);
    assert.throws(() => store.publish(snapshotInput({ coverageEntries: [{ coordinate: { system: "hs", version: "2022" }, code: "01111", pcr_id: null }] })), /coverage.*source|source.*coverage/iu);
    const first = store.publish(snapshotInput());
    const firstManifest = store.readManifest(first.manifestRef);
    const second = store.publish(snapshotInput({ snapshotId: "snapshot-002", sequence: 2, source: { ...snapshotInput().source, catalog: sha256Ref("catalog-v2\n") } }));
    const secondManifest = store.readManifest(second.manifestRef);
    assert.equal(secondManifest.refs.pcr_entries["pcr.agriculture.wheat-seed"], firstManifest.refs.pcr_entries["pcr.agriculture.wheat-seed"]);
    assert.notEqual(secondManifest.refs.catalog_root, firstManifest.refs.catalog_root);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("global source attestations do not invalidate unchanged alias or coverage entries", () => {
  const { root, store } = fixtureStore();
  try {
    const aliases = [
      { id: "pcr.legacy.wheat", locator: "cpc:3.0:01111" },
      { id: "pcr.legacy.cement", locator: "cpc:3.0:25232" },
    ];
    const coverage = [
      { coordinate: { system: "cpc", version: "3.0" }, code: "01111", pcr_id: "pcr.agriculture.wheat-seed" },
      { coordinate: { system: "cpc", version: "3.0" }, code: "01112", pcr_id: "pcr.agriculture.wheat-seed" },
    ];
    const first = store.publish(snapshotInput({ aliasEntries: aliases, coverageEntries: coverage }));
    const before = store.readManifest(first.manifestRef);
    const second = store.publish(snapshotInput({
      snapshotId: "snapshot-002", sequence: 2,
      source: { ...snapshotInput().source, aliases: sha256Ref("aliases-v2\n"), coverage: [{ coordinate: { system: "cpc", version: "3.0" }, ref: sha256Ref("coverage-v2\n") }] },
      aliasEntries: [{ ...aliases[0], locator: "cpc:3.0:01110" }, aliases[1]],
      coverageEntries: [{ ...coverage[0], pcr_id: null }, coverage[1]],
    }));
    const after = store.readManifest(second.manifestRef);
    assert.notEqual(after.refs.alias_entries[aliases[0].id], before.refs.alias_entries[aliases[0].id]);
    assert.equal(after.refs.alias_entries[aliases[1].id], before.refs.alias_entries[aliases[1].id]);
    assert.notEqual(after.refs.coverage_entries["cpc:3.0:01111"], before.refs.coverage_entries["cpc:3.0:01111"]);
    assert.equal(after.refs.coverage_entries["cpc:3.0:01112"], before.refs.coverage_entries["cpc:3.0:01112"]);
    assert.notEqual(after.refs.alias_root, before.refs.alias_root);
    assert.notEqual(after.refs.coverage_root, before.refs.coverage_root);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("readObject rejects digest-addressed JSON that is not canonical bytes", () => {
  const { root, store } = fixtureStore();
  try {
    const value = { schema_version: 1, object_kind: "alias_entry", identity: objectIdentity(), entry: { id: "pcr.legacy", locator: "cpc:3.0:01111" } };
    const noncanonical = Buffer.from(`${JSON.stringify(value, null, 2)}\n`, "utf8");
    const ref = sha256Ref(noncanonical);
    store.probe();
    writeFileSync(path.join(root, "objects", `${ref.slice(7)}.json`), noncanonical);
    assert.throws(() => store.readObject(ref), /canonical/u);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("readManifest rejects digest-addressed JSON that is not canonical bytes", () => {
  const { root, store } = fixtureStore();
  try {
    const published = store.publish(snapshotInput());
    const manifest = store.readManifest(published.manifestRef);
    const noncanonical = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`, "utf8");
    const ref = sha256Ref(noncanonical);
    writeFileSync(path.join(root, "manifests", `${ref.slice(7)}.json`), noncanonical);
    assert.throws(() => store.readManifest(ref), /canonical/u);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("duplicate coverage source coordinates fail before publication", () => {
  const { root, store } = fixtureStore();
  try {
    assert.throws(() => store.publish(snapshotInput({ source: {
      ...snapshotInput().source,
      coverage: [
        { coordinate: { system: "cpc", version: "3.0" }, ref: sha256Ref("coverage-v1\n") },
        { coordinate: { system: "cpc", version: "3.0" }, ref: sha256Ref("coverage-v2\n") },
      ],
    } })), /duplicate coverage source coordinate/iu);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("direct Ajv validation rejects generation metadata anywhere in guidance", () => {
  const schemas = createViewerSnapshotSchemaRegistry();
  const base = { schema_version: 1, object_kind: "pcr_detail", identity: objectIdentity(), entry: { id: "pcr.a", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance() } };
  assert.equal(schemas.validate("viewer-object", base).valid, true);
  for (const guidance of [
    { ...viewerGuidance(), pcr: { ...viewerGuidance().pcr, generated_at: "now" } },
    { ...viewerGuidance(), reference_flow: { ...viewerGuidance().reference_flow, generated_at_utc: "now" } },
    { ...viewerGuidance(), measurement_rules: [{ generation_timestamp: "now" }] },
  ]) {
    assert.equal(schemas.validate("viewer-object", { ...base, entry: { ...base.entry, guidance } }).valid, false);
  }
});

test("store creates immutable entry objects and deterministic prefix shards", () => {
  const { root, store } = fixtureStore();
  try {
    const result = store.publish(snapshotInput());
    const manifest = store.readManifest(result.manifestRef);
    assert.equal(manifest.counts.pcr, 2);
    assert.equal(manifest.counts.alias, 1);
    assert.equal(manifest.counts.coverage, 1);
    assert.equal(Object.keys(manifest.refs.catalog_shards).length, 2);
    assert.equal(Object.keys(manifest.refs.alias_shards).length, 1);
    assert.equal(Object.keys(manifest.refs.coverage_shards).length, 1);
    for (const ref of Object.values(manifest.refs.pcr_entries)) assert.ok(store.readObject(ref));
    assert.equal(store.readActive().manifest_ref, result.manifestRef);

    const identical = store.publish(snapshotInput({ snapshotId: "snapshot-002", sequence: 2 }));
    const next = store.readManifest(identical.manifestRef);
    assert.deepEqual(next.refs.pcr_entries, manifest.refs.pcr_entries);
    assert.deepEqual(next.refs.alias_entries, manifest.refs.alias_entries);
    assert.equal(next.predecessor, result.manifestRef);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("new manifests remove lifecycle-deleted entries and preserve rename lineage without mutating history", () => {
  const { root, store } = fixtureStore();
  try {
    const first = store.publish(snapshotInput());
    const second = store.publish(
      snapshotInput({
        snapshotId: "snapshot-002",
        sequence: 2,
        pcrEntries: [{ id: "pcr.agriculture.wheat-seed-v2", title: "Wheat seed", renamed_from: "pcr.agriculture.wheat-seed", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance("pcr.agriculture.wheat-seed-v2") }],
        aliasEntries: [],
        coverageEntries: [],
      }),
    );
    const oldManifest = store.readManifest(first.manifestRef);
    const newManifest = store.readManifest(second.manifestRef);
    assert.ok(oldManifest.refs.pcr_entries["pcr.agriculture.wheat-seed"]);
    assert.equal(newManifest.refs.pcr_entries["pcr.agriculture.wheat-seed"], undefined);
    assert.equal(newManifest.lineage.renames["pcr.agriculture.wheat-seed-v2"], "pcr.agriculture.wheat-seed");
    assert.deepEqual(store.readHistory().entries.map((entry) => entry.manifest_ref), [first.manifestRef, second.manifestRef]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("objects are create-only and reject a pre-existing byte substitution", () => {
  const { root, store } = fixtureStore();
  try {
    const ref = sha256Ref(canonicalJson({ schema_version: 1, object_kind: "pcr_detail", identity: objectIdentity(), entry: { id: "pcr.a", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance() } }));
    mkdirSync(path.join(root, "objects"), { recursive: true });
    writeFileSync(path.join(root, "objects", `${ref.slice("sha256:".length)}.json`), "{}\n");
    assert.throws(
      () => store.writeObject({ schema_version: 1, object_kind: "pcr_detail", identity: objectIdentity(), entry: { id: "pcr.a", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance() } }),
      /immutable object byte conflict/iu,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("journal recovery completes each durable publication phase", () => {
  for (const phase of ["prepared", "history_prepared", "history_committed", "active_committed"]) {
    const { root, store } = fixtureStore();
    try {
      assert.throws(
        () => store.publish(snapshotInput({ failurePhase: phase })),
        new RegExp(`interrupted at ${phase}`),
      );
      const recovered = store.recover();
      assert.equal(recovered.recovered, true);
      assert.equal(store.readActive().sequence, 1);
      assert.equal(store.readHistory().entries.length, 1);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  }
});

test("store rejects unsafe substitutions, corrupted retained state, and invalid pinned sources", () => {
  const { root, store } = fixtureStore();
  try {
    assert.throws(() => store.publish(snapshotInput({ pinnedSources: [{ path: "missing.txt", ref: sha256Ref("x") }] })), /pinned source is missing/iu);
    const sourcePath = path.join(root, "source.txt");
    writeFileSync(sourcePath, "trusted\n");
    assert.throws(
      () => store.publish(snapshotInput({ pinnedSources: [{ path: "source.txt", ref: sha256Ref("substituted\n") }] })),
      /pinned source digest mismatch/iu,
    );
    const published = store.publish(snapshotInput({ pinnedSources: [{ path: "source.txt", ref: sha256Ref("trusted\n") }] }));
    const validActive = readFileSync(path.join(root, "active.json"));
    writeFileSync(path.join(root, "active.json"), '{"bad":true}\n');
    assert.throws(() => store.readActive(), /schema validation failed/u);
    writeFileSync(path.join(root, "active.json"), validActive);
    const manifestPath = path.join(root, "manifests", `${published.manifestRef.slice(7)}.json`);
    rmSync(manifestPath);
    assert.throws(() => store.readActive(), /Missing immutable manifest/iu);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("store fails closed for symlink paths and concurrent/stale locks", () => {
  const { root, store } = fixtureStore();
  try {
    mkdirSync(path.join(root, "objects"), { recursive: true });
    const outside = mkdtempSync(path.join(tmpdir(), "tiangong-viewer-outside-"));
    rmSync(path.join(root, "objects"), { recursive: true });
    symlinkSync(outside, path.join(root, "objects"));
    assert.throws(() => store.probe(), /symbolic link/u);
    rmSync(path.join(root, "objects"));
    mkdirSync(path.join(root, "locks"), { recursive: true });
    writeFileSync(path.join(root, "locks", "publisher.lock"), canonicalJson({ pid: process.pid, created_at: new Date().toISOString() }));
    assert.throws(() => store.publish(snapshotInput()), /publisher lock already exists/u);
    rmSync(outside, { recursive: true, force: true });
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("coverage shards use classification coordinates and literal code prefixes", () => {
  const { root, store } = fixtureStore();
  try {
    const published = store.publish(snapshotInput());
    const manifest = store.readManifest(published.manifestRef);
    assert.deepEqual(Object.keys(manifest.refs.coverage_shards), ["cpc:3.0/01"]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("capability probes and special file substitutions fail closed", (t) => {
  const unavailable = fixtureStore();
  try {
    const store = new ViewerSnapshotStore({ root: unavailable.root, generatorVersion: "viewer-1", capabilities: { fsync: false } });
    assert.throws(() => store.probe(), /lacks required fsync capability/u);
  } finally {
    rmSync(unavailable.root, { recursive: true, force: true });
  }

  const fifo = fixtureStore();
  try {
    mkdirSync(path.join(fifo.root, "objects"), { recursive: true });
    rmSync(path.join(fifo.root, "objects"), { recursive: true });
    const result = spawnSync("mkfifo", [path.join(fifo.root, "objects")], { encoding: "utf8" });
    if (result.error?.code === "ENOENT") {
      t.skip("mkfifo is unavailable on this platform");
      return;
    }
    assert.equal(result.status, 0, result.stderr);
    assert.throws(() => fifo.store.probe(), /must be a directory/u);
  } finally {
    rmSync(fifo.root, { recursive: true, force: true });
  }
});

test("PCR detail changes preserve catalog entries and index shards", () => {
  const { root, store } = fixtureStore();
  try {
    const first = store.publish(snapshotInput());
    const firstManifest = store.readManifest(first.manifestRef);
    const second = store.publish(snapshotInput({
      snapshotId: "snapshot-002",
      sequence: 2,
      pcrEntries: [
        { id: "pcr.agriculture.wheat-seed", title: "Wheat seed", lifecycle_status: "active", markdown: { "en-US": "Changed body", "zh-CN": null }, guidance: viewerGuidance("pcr.agriculture.wheat-seed") },
        { id: "pcr.industrial.cement", title: "Cement", lifecycle_status: "active", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance("pcr.industrial.cement") },
      ],
    }));
    const secondManifest = store.readManifest(second.manifestRef);
    assert.notEqual(secondManifest.refs.pcr_entries["pcr.agriculture.wheat-seed"], firstManifest.refs.pcr_entries["pcr.agriculture.wheat-seed"]);
    assert.deepEqual(secondManifest.refs.catalog_shards, firstManifest.refs.catalog_shards);
    assert.notEqual(secondManifest.refs.catalog_root, firstManifest.refs.catalog_root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("journal records pointer CAS values and recovery rejects a substituted history head", () => {
  const { root, store } = fixtureStore();
  try {
    store.publish(snapshotInput());
    assert.throws(() => store.publish(snapshotInput({ snapshotId: "snapshot-002", sequence: 2, failurePhase: "history_prepared" })), /interrupted/u);
    const journal = JSON.parse(readFileSync(path.join(root, "journal.json"), "utf8"));
    assert.ok(journal.cas.history_head.old_ref);
    assert.ok(journal.cas.history_head.new_ref);
    writeFileSync(path.join(root, "history-head.json"), canonicalJson({ schema_version: 1, kind: "viewer-history-head", page_ref: sha256Ref("substituted"), latest_sequence: 1 }));
    assert.throws(() => store.recover(), /CAS conflict|substitut/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("history is retained as bounded immutable linked pages and source verification brackets publication", () => {
  const { root, store, verificationCalls } = fixtureStore();
  try {
    for (let sequence = 1; sequence <= 3; sequence += 1) {
      store.publish(snapshotInput({ snapshotId: `snapshot-${sequence}`, sequence }));
    }
    const head = JSON.parse(readFileSync(path.join(root, "history-head.json"), "utf8"));
    assert.equal(head.kind, "viewer-history-head");
    assert.ok(head.page_ref);
    const page = store.readObject(head.page_ref);
    assert.equal(page.object_kind, "history_page");
    assert.ok(page.entry.entries.length <= 2);
    assert.ok(page.entry.previous_page_ref);
    assert.ok(verificationCalls.filter((phase) => phase === "before").length >= 3);
    assert.ok(verificationCalls.filter((phase) => phase === "after").length >= 3);
    assert.ok(verificationCalls.includes("retained"));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("publication requires verifiable pinned git identity and runs real capability probes", () => {
  const noVerifier = fixtureStore();
  try {
    const store = new ViewerSnapshotStore({ root: noVerifier.root, generatorVersion: "viewer-1" });
    assert.throws(() => store.publish(snapshotInput()), /source verifier is required/u);
    const verified = new ViewerSnapshotStore({
      root: noVerifier.root,
      generatorVersion: "viewer-1",
      sourceVerifier: () => true,
      capabilityProbe: () => ({ fsync: true, atomicRename: true, createIfAbsent: false }),
    });
    assert.throws(() => verified.probe(), /createIfAbsent capability/u);
  } finally {
    rmSync(noVerifier.root, { recursive: true, force: true });
  }
});

test("generator and release marker fingerprints invalidate content-addressed objects", () => {
  const { root, store } = fixtureStore();
  try {
    const first = store.publish(snapshotInput());
    const firstManifest = store.readManifest(first.manifestRef);
    const generatorChanged = store.publish(snapshotInput({
      snapshotId: "snapshot-002", sequence: 2, generatorContractSha256: sha256Ref("generator-contract-v2\n"),
    }));
    const generatorManifest = store.readManifest(generatorChanged.manifestRef);
    assert.notEqual(generatorManifest.refs.pcr_entries["pcr.agriculture.wheat-seed"], firstManifest.refs.pcr_entries["pcr.agriculture.wheat-seed"]);
    const markerChanged = store.publish(snapshotInput({
      snapshotId: "snapshot-003", sequence: 3,
      generatorContractSha256: sha256Ref("generator-contract-v2\n"),
      source: { ...snapshotInput().source, releaseRevisionMarkers: { "pcr.agriculture.wheat-seed": sha256Ref("revision-marker-v2\n") } },
    }));
    const markerManifest = store.readManifest(markerChanged.manifestRef);
    assert.notEqual(markerManifest.refs.pcr_entries["pcr.agriculture.wheat-seed"], generatorManifest.refs.pcr_entries["pcr.agriculture.wheat-seed"]);
    assert.equal(markerManifest.refs.alias_root, generatorManifest.refs.alias_root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("semantic manifest validation rejects mismatched keyed detail references", () => {
  const { root, store } = fixtureStore();
  try {
    const published = store.publish(snapshotInput());
    const manifest = store.readManifest(published.manifestRef);
    const swapped = structuredClone(manifest);
    swapped.refs.pcr_entries["pcr.agriculture.wheat-seed"] = manifest.refs.pcr_entries["pcr.industrial.cement"];
    const catalogRoot = store.readObject(manifest.refs.catalog_root);
    swapped.refs.catalog_root = store.writeObject({
      ...catalogRoot,
      entry: { ...catalogRoot.entry, details: swapped.refs.pcr_entries },
    });
    const bytes = canonicalJson(swapped);
    const ref = sha256Ref(bytes);
    writeFileSync(path.join(root, "manifests", `${ref.slice(7)}.json`), bytes);
    assert.throws(() => store.readManifest(ref), /keyed PCR detail|semantic/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("manifest validation rejects an alias shard that diverges from alias entry refs", () => {
  const { root, store } = fixtureStore();
  try {
    const published = store.publish(snapshotInput());
    const manifest = store.readManifest(published.manifestRef);
    const aliasId = "pcr.legacy.wheat";
    const changedAliasRef = store.writeObject({
      ...store.readObject(manifest.refs.alias_entries[aliasId]),
      entry: { id: aliasId, locator: "cpc:3.0:99999" },
    });
    const [prefix, shardRef] = Object.entries(manifest.refs.alias_shards)[0];
    const alteredShard = store.writeObject({
      ...store.readObject(shardRef),
      entry: { prefix, entries: [{ id: aliasId, object_ref: changedAliasRef }] },
    });
    const altered = structuredClone(manifest);
    altered.refs.alias_shards[prefix] = alteredShard;
    altered.refs.alias_root = store.writeObject({
      ...store.readObject(manifest.refs.alias_root),
      entry: { shards: altered.refs.alias_shards, entries: altered.refs.alias_entries },
    });
    const bytes = canonicalJson(altered);
    const ref = sha256Ref(bytes);
    writeFileSync(path.join(root, "manifests", `${ref.slice(7)}.json`), bytes);
    assert.throws(() => store.readManifest(ref), /alias_shard|prefix membership/u);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("a live owner-token lock rejects a concurrent publisher and post-commit source substitution stays journaled", () => {
  const { root, store } = fixtureStore();
  try {
    let attempted = false;
    store.publish(snapshotInput({
      onPhase: () => {
        attempted = true;
        assert.throws(() => store.publish(snapshotInput({ snapshotId: "concurrent", sequence: 1 })), /publisher lock already exists/u);
      },
    }));
    assert.equal(attempted, true);
    const invalidated = new ViewerSnapshotStore({
      root,
      generatorVersion: "viewer-1",
      sourceVerifier: ({ phase }) => phase !== "after",
    });
    assert.throws(() => invalidated.publish(snapshotInput({ snapshotId: "snapshot-002", sequence: 2 })), /source verification failed during after/u);
    assert.throws(() => readFileSync(path.join(root, "journal.json")), /ENOENT/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("recovery crash matrix rejects active CAS substitution and retained history-page substitution", () => {
  const { root, store } = fixtureStore();
  try {
    store.publish(snapshotInput());
    assert.throws(() => store.publish(snapshotInput({ snapshotId: "snapshot-002", sequence: 2, failurePhase: "history_committed" })), /interrupted/u);
    writeFileSync(path.join(root, "active.json"), "{}\n");
    assert.throws(() => store.recover(), /CAS conflict|substitut/u);

    rmSync(path.join(root, "journal.json"));
    const retainedManifestRef = store.readHistory().entries.at(-1).manifest_ref;
    const retainedManifest = store.readManifest(retainedManifestRef);
    writeFileSync(path.join(root, "active.json"), canonicalJson({
      schema_version: 1, kind: "viewer-active", snapshot_id: retainedManifest.snapshot_id, snapshot_url: `snapshots/${retainedManifest.snapshot_id}`, snapshot_hash: retainedManifestRef,
      manifest_ref: retainedManifestRef, sequence: 2,
      cache_version: 1, ui_bundle_ref: retainedManifest.capture.ui_bundle_ref, validation_state: "validated",
    }));
    const head = JSON.parse(readFileSync(path.join(root, "history-head.json"), "utf8"));
    writeFileSync(path.join(root, "objects", `${head.page_ref.slice(7)}.json`), "{}\n");
    assert.throws(() => store.readHistory(), /digest|substitut/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("failed final source verification leaves the prior active and history pointers exposed", () => {
  const { root, store } = fixtureStore();
  try {
    const first = store.publish(snapshotInput());
    const priorActive = readFileSync(path.join(root, "active.json"));
    const priorHistory = readFileSync(path.join(root, "history-head.json"));
    const failing = new ViewerSnapshotStore({ root, generatorVersion: "viewer-1", sourceVerifier: ({ phase }) => phase !== "after" });
    assert.throws(() => failing.publish(snapshotInput({ snapshotId: "snapshot-002", sequence: 2 })), /source verification failed during after/u);
    assert.deepEqual(readFileSync(path.join(root, "active.json")), priorActive);
    assert.deepEqual(readFileSync(path.join(root, "history-head.json")), priorHistory);
    assert.equal(failing.readActive().manifest_ref, first.manifestRef);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("different capture commits and trees reuse unchanged viewer objects", () => {
  const { root, store } = fixtureStore();
  try {
    const first = store.publish(snapshotInput());
    const firstManifest = store.readManifest(first.manifestRef);
    const second = store.publish(snapshotInput({
      snapshotId: "snapshot-002", sequence: 2,
      source: { ...snapshotInput().source, integration_commit: "d".repeat(40), tree_hash: "e".repeat(40) },
    }));
    const secondManifest = store.readManifest(second.manifestRef);
    assert.deepEqual(secondManifest.refs.pcr_entries, firstManifest.refs.pcr_entries);
    assert.deepEqual(secondManifest.refs.alias_entries, firstManifest.refs.alias_entries);
    assert.deepEqual(secondManifest.refs.catalog_shards, firstManifest.refs.catalog_shards);
    assert.deepEqual(secondManifest.refs.coverage_shards, firstManifest.refs.coverage_shards);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("an unverifiable retained source pin blocks reads and the next publication", () => {
  const { root, store } = fixtureStore();
  try {
    store.publish(snapshotInput());
    const rejected = new ViewerSnapshotStore({ root, generatorVersion: "viewer-1", sourceVerifier: ({ phase }) => phase !== "retained" });
    assert.throws(() => rejected.readHistory(), /source verification failed during retained/u);
    assert.throws(() => rejected.publish(snapshotInput({ snapshotId: "snapshot-002", sequence: 2 })), /source verification failed during retained/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("rename contracts require the old id to disappear and a unique successor", () => {
  const { root, store } = fixtureStore();
  try {
    store.publish(snapshotInput());
    assert.throws(() => store.publish(snapshotInput({
      snapshotId: "snapshot-002", sequence: 2,
      pcrEntries: [
        { id: "pcr.agriculture.wheat-seed", title: "Old still present", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance("pcr.agriculture.wheat-seed") },
        { id: "pcr.successor.one", title: "New", renamed_from: "pcr.agriculture.wheat-seed", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance("pcr.successor.one") },
      ],
    })), /predecessor must be absent/u);
    assert.throws(() => store.publish(snapshotInput({
      snapshotId: "snapshot-002", sequence: 2,
      pcrEntries: [
        { id: "pcr.successor.one", title: "New", renamed_from: "pcr.agriculture.wheat-seed", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance("pcr.successor.one") },
        { id: "pcr.successor.two", title: "New", renamed_from: "pcr.agriculture.wheat-seed", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance("pcr.successor.two") },
      ],
    })), /more than one successor/u);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a single alias update only changes its entry, shard, and alias root", () => {
  const { root, store } = fixtureStore();
  try {
    const first = store.publish(snapshotInput());
    const before = store.readManifest(first.manifestRef);
    const second = store.publish(snapshotInput({
      snapshotId: "snapshot-002", sequence: 2,
      aliasEntries: [{ id: "pcr.legacy.wheat", locator: "cpc:3.0:09999" }],
    }));
    const after = store.readManifest(second.manifestRef);
    assert.notEqual(after.refs.alias_entries["pcr.legacy.wheat"], before.refs.alias_entries["pcr.legacy.wheat"]);
    assert.notEqual(after.refs.alias_root, before.refs.alias_root);
    assert.deepEqual(after.refs.pcr_entries, before.refs.pcr_entries);
    assert.deepEqual(after.refs.catalog_shards, before.refs.catalog_shards);
    assert.deepEqual(after.refs.coverage_shards, before.refs.coverage_shards);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a tampered recovery journal cannot mutate active or history", () => {
  const { root, store } = fixtureStore();
  try {
    store.publish(snapshotInput());
    const priorActive = readFileSync(path.join(root, "active.json"));
    const priorHistory = readFileSync(path.join(root, "history-head.json"));
    assert.throws(() => store.publish(snapshotInput({ snapshotId: "snapshot-002", sequence: 2, failurePhase: "prepared" })), /interrupted/u);
    const journalPath = path.join(root, "journal.json");
    const journal = JSON.parse(readFileSync(journalPath, "utf8"));
    journal.capture.tree_hash = "f".repeat(40);
    writeFileSync(journalPath, canonicalJson(journal));
    assert.throws(() => store.recover(), /not exactly bound/u);
    assert.deepEqual(readFileSync(path.join(root, "active.json")), priorActive);
    assert.deepEqual(readFileSync(path.join(root, "history-head.json")), priorHistory);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("a journal with a recomputed active URL digest still cannot recover", () => {
  const { root, store } = fixtureStore();
  try {
    store.publish(snapshotInput());
    const priorActive = readFileSync(path.join(root, "active.json"));
    const priorHistory = readFileSync(path.join(root, "history-head.json"));
    assert.throws(() => store.publish(snapshotInput({ snapshotId: "snapshot-002", sequence: 2, failurePhase: "prepared" })), /interrupted/u);
    const journalPath = path.join(root, "journal.json");
    const journal = JSON.parse(readFileSync(journalPath, "utf8"));
    journal.active.snapshot_url = "snapshots/forged";
    journal.cas.active.new_ref = sha256Ref(canonicalJson(journal.active));
    writeFileSync(journalPath, canonicalJson(journal));
    assert.throws(() => store.recover(), /identities are not exactly bound/u);
    assert.deepEqual(readFileSync(path.join(root, "active.json")), priorActive);
    assert.deepEqual(readFileSync(path.join(root, "history-head.json")), priorHistory);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("a per-PCR revision marker invalidates only its detail object", () => {
  const { root, store } = fixtureStore();
  try {
    const first = store.publish(snapshotInput());
    const before = store.readManifest(first.manifestRef);
    const second = store.publish(snapshotInput({
      snapshotId: "snapshot-002", sequence: 2,
      source: { ...snapshotInput().source, releaseRevisionMarkers: { "pcr.agriculture.wheat-seed": sha256Ref("wheat-marker-v2\n") } },
    }));
    const after = store.readManifest(second.manifestRef);
    assert.notEqual(after.refs.pcr_entries["pcr.agriculture.wheat-seed"], before.refs.pcr_entries["pcr.agriculture.wheat-seed"]);
    assert.equal(after.refs.pcr_entries["pcr.industrial.cement"], before.refs.pcr_entries["pcr.industrial.cement"]);
    assert.deepEqual(after.refs.alias_entries, before.refs.alias_entries);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("object-kind contracts reject undeclared generated metadata", () => {
  const { root, store } = fixtureStore();
  try {
    const identity = objectIdentity();
    assert.throws(() => store.writeObject({
      schema_version: 1, object_kind: "catalog_shard", identity,
      entry: { prefix: "aa", entries: [], generated_at: "2026-09-05T00:00:00Z" },
    }), /schema validation failed/u);
    assert.throws(() => store.writeObject({
      schema_version: 1, object_kind: "coverage_entry", identity,
      entry: { coordinate: { system: "cpc", version: "3.0" }, code: "01111", pcr_id: "pcr.a", generated_at: "now" },
    }), /schema validation failed/u);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("nested immutable object records reject undeclared generated metadata", () => {
  const { root, store } = fixtureStore();
  try {
    const identity = objectIdentity();
    assert.throws(() => store.writeObject({ schema_version: 1, object_kind: "catalog_shard", identity, entry: { prefix: "aa", entries: [{ id: "pcr.a", object_ref: sha256Ref("a"), generated_at: "now" }] } }), /schema validation failed/u);
    assert.throws(() => store.writeObject({ schema_version: 1, object_kind: "coverage_shard", identity, entry: { coordinate: { system: "cpc", version: "3.0", generated_at: "now" }, prefix: "01", entries: [] } }), /schema validation failed/u);
    assert.throws(() => store.writeObject({ schema_version: 1, object_kind: "history_page", identity, entry: { entries: [{ sequence: 1, manifest_ref: sha256Ref("m"), generated_at: "now" }], previous_page_ref: null } }), /schema validation failed/u);
    assert.throws(() => store.writeObject({ schema_version: 1, object_kind: "pcr_detail", identity, entry: { id: "pcr.a", title: "A", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance() } }), /schema validation failed/u);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test("closed split-viewer nested contracts reject wrong types and non-reference maps", () => {
  const { root, store } = fixtureStore();
  try {
    const identity = objectIdentity();
    const pcr = (entry) => ({ schema_version: 1, object_kind: "pcr_detail", identity, entry });
    assert.throws(() => store.writeObject(pcr({ id: "pcr.a", markdown: "no", guidance: viewerGuidance() })), /schema validation failed/u);
    assert.throws(() => store.writeObject(pcr({ id: "pcr.a", markdown: { "en-US": 4, "zh-CN": null }, guidance: viewerGuidance() })), /schema validation failed/u);
    assert.throws(() => store.writeObject(pcr({ id: "pcr.a", markdown: { "en-US": null, "zh-CN": null }, guidance: "no" })), /schema validation failed/u);
    assert.throws(() => store.writeObject(pcr({ id: "pcr.a", markdown: { "en-US": null, "zh-CN": null }, guidance: { ...viewerGuidance(), generated_at: "now" } })), /schema validation failed/u);
    assert.throws(() => store.writeObject(pcr({ id: "pcr.a", title: "not detail", markdown: { "en-US": null, "zh-CN": null }, guidance: viewerGuidance() })), /schema validation failed/u);
    assert.throws(() => store.writeObject({ schema_version: 1, object_kind: "catalog_root", identity, entry: { shards: { aa: "not-a-ref" }, details: {} } }), /schema validation failed/u);
    assert.throws(() => store.writeObject({ schema_version: 1, object_kind: "coverage_entry", identity, entry: { coordinate: { system: "cpc", version: "3.0" }, code: "01111", pcr_id: {} } }), /schema validation failed/u);
    assert.throws(() => store.writeObject({ schema_version: 1, object_kind: "history_page", identity, entry: { entries: [{ sequence: "1", manifest_ref: sha256Ref("m") }], previous_page_ref: null } }), /schema validation failed/u);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
