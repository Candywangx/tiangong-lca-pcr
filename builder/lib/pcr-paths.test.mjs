import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, symlinkSync, unlinkSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  resolvePcrLocationForRecovery,
  resolvePcrWorkspacePaths,
} from "./pcr-paths.mjs";

const temporaryRoots = [];

function fixture({ revision = true } = {}) {
  const root = mkdtempSync(path.join(os.tmpdir(), "pcr-paths-"));
  temporaryRoots.push(root);
  const relative = "library/pcrs/agriculture/crops/wheat-seed";
  const pcrDir = path.join(root, relative);
  mkdirSync(pcrDir, { recursive: true });
  writeFileSync(path.join(pcrDir, "manifest.yaml"), "id: wheat-seed\n");
  if (revision) {
    const revisionDir = path.join(pcrDir, "revision");
    mkdirSync(revisionDir);
    writeFileSync(path.join(revisionDir, "manifest.next.yaml"), "id: wheat-seed\n");
  }
  return { root, relative, pcrDir };
}

test.afterEach(() => {
  for (const root of temporaryRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resolves only direct current and revision manifests from a canonical three-level leaf", () => {
  const { root, relative, pcrDir } = fixture();
  const current = resolvePcrWorkspacePaths({ root, pcr: relative, workspace: "current" });
  assert.equal(current.relativePcrPath, "agriculture/crops/wheat-seed");
  assert.equal(current.pcrDir, pcrDir);
  assert.equal(current.workspaceDir, pcrDir);
  assert.equal(current.manifestPath, path.join(pcrDir, "manifest.yaml"));

  const revision = resolvePcrWorkspacePaths({ root, pcr: pcrDir, workspace: "revision" });
  assert.equal(revision.workspaceDir, path.join(pcrDir, "revision"));
  assert.equal(revision.manifestPath, path.join(pcrDir, "revision", "manifest.next.yaml"));
});

test("rejects non-canonical depth, traversal syntax, invalid workspaces, and nested-only manifests", () => {
  const { root, pcrDir } = fixture({ revision: false });
  assert.throws(
    () => resolvePcrWorkspacePaths({ root, pcr: "library/pcrs/agriculture/crops" }),
    { code: "PCR_PATH_NOT_CANONICAL_LEAF" },
  );
  mkdirSync(path.join(pcrDir, "nested"));
  writeFileSync(path.join(pcrDir, "nested", "manifest.yaml"), "id: nested\n");
  assert.throws(
    () => resolvePcrWorkspacePaths({ root, pcr: "library/pcrs/agriculture/crops/wheat-seed/nested" }),
    { code: "PCR_PATH_NOT_CANONICAL_LEAF" },
  );
  assert.throws(
    () => resolvePcrWorkspacePaths({ root, pcr: "library/pcrs/agriculture/../crops/wheat-seed" }),
    { code: "PCR_PATH_TRAVERSAL" },
  );
  assert.throws(
    () => resolvePcrWorkspacePaths({ root, pcr: pcrDir, workspace: "draft" }),
    { code: "PCR_WORKSPACE_INVALID" },
  );

  unlinkSync(path.join(pcrDir, "manifest.yaml"));
  assert.throws(() => resolvePcrWorkspacePaths({ root, pcr: pcrDir }), {
    code: "PCR_MANIFEST_NOT_FOUND",
  });
});

test("rejects symbolic links in canonical components and direct manifests", () => {
  {
    const { root, pcrDir } = fixture({ revision: false });
    const manifestPath = path.join(pcrDir, "manifest.yaml");
    const actualManifest = path.join(pcrDir, "manifest.actual.yaml");
    unlinkSync(manifestPath);
    writeFileSync(actualManifest, "id: wheat-seed\n");
    symlinkSync(actualManifest, manifestPath);
    assert.throws(() => resolvePcrWorkspacePaths({ root, pcr: pcrDir }), {
      code: "PCR_PATH_SYMLINK",
    });
  }

  {
    const root = mkdtempSync(path.join(os.tmpdir(), "pcr-paths-link-"));
    temporaryRoots.push(root);
    const outside = mkdtempSync(path.join(os.tmpdir(), "pcr-paths-outside-"));
    temporaryRoots.push(outside);
    mkdirSync(path.join(root, "library", "pcrs"), { recursive: true });
    const outsideLeaf = path.join(outside, "crops", "wheat-seed");
    mkdirSync(outsideLeaf, { recursive: true });
    writeFileSync(path.join(outsideLeaf, "manifest.yaml"), "id: wheat-seed\n");
    symlinkSync(outside, path.join(root, "library", "pcrs", "agriculture"));
    assert.throws(
      () =>
        resolvePcrWorkspacePaths({
          root,
          pcr: "library/pcrs/agriculture/crops/wheat-seed",
        }),
      { code: "PCR_PATH_SYMLINK" },
    );
  }
});

test("recovery resolver allows only a temporarily missing leaf, not missing or linked parents", () => {
  const { root, pcrDir } = fixture({ revision: false });
  rmSync(pcrDir, { recursive: true });
  const location = resolvePcrLocationForRecovery({
    root,
    pcr: "library/pcrs/agriculture/crops/wheat-seed",
  });
  assert.equal(location.relativePcrPath, "agriculture/crops/wheat-seed");

  rmSync(path.join(root, "library", "pcrs", "agriculture", "crops"), { recursive: true });
  assert.throws(
    () =>
      resolvePcrLocationForRecovery({
        root,
        pcr: "library/pcrs/agriculture/crops/wheat-seed",
      }),
    { code: "PCR_PATH_NOT_FOUND" },
  );
});
