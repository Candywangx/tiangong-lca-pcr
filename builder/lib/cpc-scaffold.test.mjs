import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import {
  chmodSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  symlinkSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { hostname } from "node:os";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { cpcImportLockPath, importCpc } from "./cpc-scaffold.mjs";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const sampleSource = path.join(repositoryRoot, "builder/fixtures/cpc-structure.sample.csv");
const roots = [];

function temporaryRoot(prefix = "cpc-import-") {
  const root = mkdtempSync(path.join(os.tmpdir(), prefix));
  roots.push(root);
  return root;
}

function options(root, overrides = {}) {
  return {
    root,
    source: sampleSource,
    "classification-version": "3.0",
    ...overrides,
  };
}

function lockDocument(overrides = {}) {
  return {
    schema_version: 1,
    coordinate: "cpc:3.0",
    owner_token: randomUUID(),
    pid: process.pid,
    hostname: hostname(),
    created_at_utc: new Date().toISOString(),
    ...overrides,
  };
}

function installLock(root, document) {
  const lockPath = cpcImportLockPath(root, "3.0");
  mkdirSync(path.dirname(lockPath), { recursive: true });
  const bytes = typeof document === "string"
    ? document
    : `${JSON.stringify(document, null, 2)}\n`;
  writeFileSync(lockPath, bytes, { mode: 0o600 });
  return { bytes, lockPath };
}

test.afterEach(() => {
  for (const root of roots.splice(0)) {
    rmSync(root, { recursive: true, force: true });
  }
});

test("CPC import requires a registered source descriptor before repository mutation", () => {
  const root = temporaryRoot();

  assert.throws(
    () => importCpc(options(root, { "classification-version": "2.1" })),
    /requires a registered coverage source descriptor before import/u,
  );
  assert.deepEqual(readdirSync(root), []);
});

test("CPC import rejects symlink, malformed UTF-8, mismatched header, and incomplete hierarchy sources", async (t) => {
  await t.test("source symlink", () => {
    const root = temporaryRoot();
    const sourceRoot = temporaryRoot("cpc-source-");
    const linkedSource = path.join(sourceRoot, "linked.csv");
    symlinkSync(sampleSource, linkedSource);

    assert.throws(
      () => importCpc(options(root, { source: linkedSource })),
      /regular non-symlink file/u,
    );
    assert.deepEqual(readdirSync(root), []);
  });

  await t.test("invalid UTF-8", () => {
    const root = temporaryRoot();
    const source = path.join(root, "invalid.csv");
    writeFileSync(source, Buffer.from([0xff, 0xfe, 0xfd]));

    assert.throws(() => importCpc(options(root, { source })), /not valid UTF-8/u);
    assert.deepEqual(readdirSync(root), ["invalid.csv"]);
  });

  await t.test("header version mismatch", () => {
    const root = temporaryRoot();
    const source = path.join(root, "mismatch.csv");
    writeFileSync(source, "CPC Ver. 2.1 Code,CPC Ver. 2.1 Title\n0,Root\n");

    assert.throws(
      () => importCpc(options(root, { source })),
      /header version 2\.1 does not match.*3\.0/u,
    );
    assert.deepEqual(readdirSync(root), ["mismatch.csv"]);
  });

  await t.test("missing parent", () => {
    const root = temporaryRoot();
    const source = path.join(root, "missing-parent.csv");
    writeFileSync(source, "Code,Title\n0,Root\n011,Orphan\n");

    assert.throws(() => importCpc(options(root, { source })), /requires missing parent 01/u);
    assert.deepEqual(readdirSync(root), ["missing-parent.csv"]);
  });
});

test("CPC import never overwrites retained raw evidence with the same filename", () => {
  const root = temporaryRoot();
  importCpc(options(root));
  const rawPath = path.join(
    root,
    "classifications/systems/cpc/3.0/raw",
    path.basename(sampleSource),
  );
  const retainedBytes = readFileSync(rawPath);

  const replacementRoot = temporaryRoot("cpc-replacement-");
  const replacementSource = path.join(replacementRoot, path.basename(sampleSource));
  writeFileSync(
    replacementSource,
    readFileSync(sampleSource, "utf8").replace("Wheat, seed", "Wheat seed replacement"),
  );

  assert.throws(
    () => importCpc(options(root, { source: replacementSource })),
    /raw evidence has different bytes and will not be overwritten/u,
  );
  assert.deepEqual(readFileSync(rawPath), retainedBytes);
});

test("CPC import initialization refuses a managed PCR directory symlink without writing outside", () => {
  const root = temporaryRoot();
  const outside = temporaryRoot("cpc-import-outside-");
  mkdirSync(path.join(root, "library"));
  symlinkSync(outside, path.join(root, "library/pcrs"));

  assert.throws(
    () => importCpc(options(root)),
    /(?:CPC managed path contains a symbolic link|PCR scaffold path is not a safe directory)/u,
  );
  assert.deepEqual(readdirSync(outside), []);
});

test("CPC import stages repository artifacts with readable modes and preserves existing modes", () => {
  const root = temporaryRoot();
  importCpc(options(root));
  const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
  const leavesPath = path.join(root, "classifications/systems/cpc/3.0/normalized/leaves.json");

  assert.equal(statSync(mappingPath).mode & 0o777, 0o644);
  assert.equal(statSync(leavesPath).mode & 0o777, 0o644);
  chmodSync(mappingPath, 0o640);
  importCpc(options(root));
  assert.equal(statSync(mappingPath).mode & 0o777, 0o640);
});

test("legacy CPC import commits mapping last and rejects a divergent unmapped target", () => {
  const root = temporaryRoot();
  const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
  const manifestPath = path.join(
    root,
    "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed/manifest.yaml",
  );

  assert.throws(
    () => importCpc(options(root, {
      "legacy-scaffolds": true,
      __testHooks: {
        beforeMappingCommit() {
          throw new Error("injected mapping commit failure");
        },
      },
    })),
    /injected mapping commit failure/u,
  );
  assert.equal(existsSync(mappingPath), false);
  assert.equal(existsSync(manifestPath), true);

  writeFileSync(manifestPath, "divergent authored content\n");
  assert.throws(
    () => importCpc(options(root, { "legacy-scaffolds": true })),
    /contains authored, material, partial, or modified content/u,
  );
  assert.equal(existsSync(mappingPath), false);
});

test("CPC mapping baseline CAS preserves a concurrent mapping", () => {
  const root = temporaryRoot();
  const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
  const concurrentMapping = `schema_version: 1
classification_system: CPC
classification_version: "3.0"
status: current
mappings: []
`;

  assert.throws(
    () => importCpc(options(root, {
      __testHooks: {
        beforeCommit() {
          mkdirSync(path.dirname(mappingPath), { recursive: true });
          writeFileSync(mappingPath, concurrentMapping);
        },
      },
    })),
    /changed concurrently/u,
  );
  assert.equal(readFileSync(mappingPath, "utf8"), concurrentMapping);
});

test("CPC mapping-last commit rejects a concurrently replaced source projection", () => {
  const root = temporaryRoot();
  const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
  const leavesPath = path.join(
    root,
    "classifications/systems/cpc/3.0/normalized/leaves.json",
  );

  assert.throws(
    () => importCpc(options(root, {
      "legacy-scaffolds": true,
      __testHooks: {
        beforeMappingCommit() {
          writeFileSync(
            leavesPath,
            `${JSON.stringify({
              schema_version: 1,
              classification_system: "CPC",
              classification_version: "3.0",
              status: "scaffold",
              leaves: [],
            }, null, 2)}\n`,
          );
        },
      },
    })),
    /normalized leaves changed after installation; mapping commit was aborted/u,
  );
  assert.equal(existsSync(mappingPath), false);
  assert.deepEqual(JSON.parse(readFileSync(leavesPath, "utf8")).leaves, []);
});

test("CPC import refuses live and untrusted locks without replacing them", async (t) => {
  await t.test("live lock", () => {
    const root = temporaryRoot();
    const installed = installLock(root, lockDocument());

    assert.throws(() => importCpc(options(root)), /already active/u);
    assert.equal(readFileSync(installed.lockPath, "utf8"), installed.bytes);
  });

  await t.test("untrusted lock", () => {
    const root = temporaryRoot();
    const installed = installLock(root, "not-json\n");

    assert.throws(() => importCpc(options(root)), /untrusted and will not be removed/u);
    assert.equal(readFileSync(installed.lockPath, "utf8"), installed.bytes);
  });
});

test("CPC import safely claims a stale lock and preserves a successor in a stale-lock race", () => {
  const root = temporaryRoot();
  const installed = installLock(root, lockDocument({ pid: 2_147_483_647 }));
  const successor = `${JSON.stringify(lockDocument(), null, 2)}\n`;

  assert.throws(
    () => importCpc(options(root, {
      __testHooks: {
        afterStaleLockValidated({ lockPath }) {
          unlinkSync(lockPath);
          writeFileSync(lockPath, successor, { mode: 0o600 });
        },
      },
    })),
    /lock ownership changed before stale-claim/u,
  );
  assert.equal(readFileSync(installed.lockPath, "utf8"), successor);
});

test("CPC import preserves a successor that appears during lock release", () => {
  const root = temporaryRoot();
  const successor = `${JSON.stringify(lockDocument(), null, 2)}\n`;
  let lockPath;

  assert.throws(
    () => importCpc(options(root, {
      __testHooks: {
        beforeLockReleaseClaim(context) {
          lockPath = context.lockPath;
          unlinkSync(lockPath);
          writeFileSync(lockPath, successor, { mode: 0o600 });
        },
      },
    })),
    /lock ownership changed before release-claim/u,
  );
  assert.equal(readFileSync(lockPath, "utf8"), successor);
});
