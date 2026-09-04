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
  return { root, store: new ViewerSnapshotStore({ root, generatorVersion: "viewer-1" }) };
}

function snapshotInput(overrides = {}) {
  return {
    snapshotId: "snapshot-001",
    sequence: 1,
    generatorContractSha256: sha256Ref("generator-contract-v1\n"),
    source: {
      catalog: sha256Ref("catalog-v1\n"),
      aliases: sha256Ref("aliases-v1\n"),
      coverage: [
        { coordinate: { system: "cpc", version: "3.0" }, ref: sha256Ref("coverage-v1\n") },
      ],
      releaseRevisionMarker: null,
    },
    pcrEntries: [
      { id: "pcr.agriculture.wheat-seed", title: "Wheat seed", lifecycle_status: "active" },
      { id: "pcr.industrial.cement", title: "Cement", lifecycle_status: "active" },
    ],
    aliasEntries: [{ id: "pcr.legacy.wheat", locator: "cpc:3.0:01111" }],
    coverageEntries: [
      { coordinate: { system: "cpc", version: "3.0" }, code: "01111", pcr_id: "pcr.agriculture.wheat-seed" },
    ],
    ...overrides,
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
        pcrEntries: [{ id: "pcr.agriculture.wheat-seed-v2", title: "Wheat seed", renamed_from: "pcr.agriculture.wheat-seed" }],
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
    const ref = sha256Ref(canonicalJson({ schema_version: 1, object_kind: "pcr_entry", entry: { id: "pcr.a" } }));
    mkdirSync(path.join(root, "objects"), { recursive: true });
    writeFileSync(path.join(root, "objects", `${ref.slice("sha256:".length)}.json`), "{}\n");
    assert.throws(
      () => store.writeObject({ schema_version: 1, object_kind: "pcr_entry", entry: { id: "pcr.a" } }),
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
    writeFileSync(path.join(root, "active.json"), '{"bad":true}\n');
    assert.throws(() => store.readActive(), /schema validation failed/u);
    writeFileSync(path.join(root, "active.json"), canonicalJson({ schema_version: 1, kind: "viewer-active", manifest_ref: published.manifestRef, sequence: 1 }));
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
