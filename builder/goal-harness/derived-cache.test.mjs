import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { runCachedViewerBuild } from "./derived-cache.mjs";

test("viewer derivation cache reuses only an exact verified input fingerprint and safely rebuilds corruption", () => {
  const root = mkdtempSync(path.join(tmpdir(), "goal-viewer-cache-root-"));
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-viewer-cache-state-"));
  let builds = 0;
  const runner = () => {
    builds += 1;
    const dist = path.join(root, "packages/pcr-viewer/dist");
    mkdirSync(dist, { recursive: true });
    writeFileSync(path.join(dist, ".tiangong-pcr-viewer-build"), "owned\n");
    writeFileSync(path.join(dist, "data.json"), `build ${builds}\n`);
    return { name: "viewer_build", exit_code: 0 };
  };
  try {
    mkdirSync(path.join(root, "library/pcrs/example"), { recursive: true });
    mkdirSync(path.join(root, "classifications/mappings"), { recursive: true });
    writeFileSync(path.join(root, "library/pcrs/example/manifest.yaml"), "id: pcr.example\n");
    writeFileSync(path.join(root, "classifications/mappings/cpc.yaml"), "mappings: []\n");
    const first = runCachedViewerBuild({ root, stateDir, runner });
    assert.equal(first.cache_hit, false);
    rmSync(path.join(root, "packages/pcr-viewer/dist"), { recursive: true, force: true });
    const second = runCachedViewerBuild({ root, stateDir, runner });
    assert.equal(second.cache_hit, true);
    assert.equal(builds, 1);
    assert.equal(readFileSync(path.join(root, "packages/pcr-viewer/dist/data.json"), "utf8"), "build 1\n");

    writeFileSync(path.join(root, "classifications/mappings/cpc.yaml"), "mappings: [changed]\n");
    assert.equal(runCachedViewerBuild({ root, stateDir, runner }).cache_hit, false);
    assert.equal(builds, 2);

    const cacheData = first.cache_path;
    writeFileSync(path.join(cacheData, "data.json"), "corrupt\n");
    writeFileSync(path.join(root, "classifications/mappings/cpc.yaml"), "mappings: []\n");
    assert.equal(runCachedViewerBuild({ root, stateDir, runner }).cache_hit, false);
    assert.equal(builds, 3);
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(stateDir, { recursive: true, force: true });
  }
});
