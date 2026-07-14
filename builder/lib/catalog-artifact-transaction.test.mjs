import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import {
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  catalogTransactionStatePaths,
  inspectCatalogArtifactTransaction,
  recoverCatalogArtifactTransaction,
  runCatalogArtifactTransaction,
} from "./catalog-artifact-transaction.mjs";

const transactionModuleUrl = new URL("./catalog-artifact-transaction.mjs", import.meta.url).href;
const temporaryRoots = [];

test.afterEach(() => {
  for (const root of temporaryRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true });
  }
});

function fixture() {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-transaction-"));
  temporaryRoots.push(root);
  mkdirSync(path.join(root, "library/indexes"), { recursive: true });
  mkdirSync(path.join(root, "classifications/indexes"), { recursive: true });
  writeFileSync(path.join(root, "library/catalog.yaml"), "catalog generation: stable\n", "utf8");
  writeFileSync(path.join(root, "library/indexes/pcr-index.yaml"), "material generation: old\n", "utf8");
  writeFileSync(
    path.join(root, "classifications/indexes/cpc-3.0-coverage.json"),
    "coverage generation: old\n",
    "utf8",
  );
  return root;
}

function nextArtifacts() {
  return [
    {
      path: "library/catalog.yaml",
      content: "catalog generation: stable\n",
    },
    {
      path: "library/indexes/pcr-index.yaml",
      content: "material generation: new\n",
    },
    {
      path: "classifications/indexes/cpc-3.0-coverage.json",
      content: "coverage generation: new\n",
    },
  ];
}

function readArtifact(root, relativePath) {
  return readFileSync(path.join(root, ...relativePath.split("/")), "utf8");
}

function crashTransaction(root, failpoint, { exitCode = 73 } = {}) {
  const source = `
    import { runCatalogArtifactTransaction } from ${JSON.stringify(transactionModuleUrl)};
    const artifacts = JSON.parse(process.env.CATALOG_TEST_ARTIFACTS);
    const failpoint = process.env.CATALOG_TEST_FAILPOINT;
    const exitCode = Number(process.env.CATALOG_TEST_EXIT_CODE);
    runCatalogArtifactTransaction({
      root: process.env.CATALOG_TEST_ROOT,
      artifacts,
      hooks: {
        afterLockAcquired() {
          if (failpoint === "after-lock") process.exit(exitCode);
        },
        afterArtifactBackedUp({ path }) {
          if (failpoint === "after-first-backup" && path === "library/indexes/pcr-index.yaml") {
            process.exit(exitCode);
          }
        },
        afterArtifactInstalled({ path }) {
          if (failpoint === "after-first-install" && path === "library/indexes/pcr-index.yaml") {
            process.exit(exitCode);
          }
        },
        onPhase({ phase }) {
          if (failpoint === phase) process.exit(exitCode);
        },
      },
    });
  `;
  return spawnSync(process.execPath, ["--input-type=module", "-e", source], {
    env: {
      ...process.env,
      CATALOG_TEST_ROOT: root,
      CATALOG_TEST_ARTIFACTS: JSON.stringify(nextArtifacts()),
      CATALOG_TEST_FAILPOINT: failpoint,
      CATALOG_TEST_EXIT_CODE: String(exitCode),
    },
    encoding: "utf8",
  });
}

test("catalog artifact transaction commits the complete set and removes recovery state", () => {
  const root = fixture();
  const phases = [];
  let validated = false;

  const result = runCatalogArtifactTransaction({
    root,
    command: "catalog:test",
    prepareArtifacts({ transactionId }) {
      assert.match(transactionId, /^[0-9a-f-]{36}$/u);
      return nextArtifacts();
    },
    validateInstalled({ phase, artifacts }) {
      validated = true;
      assert.equal(phase, "installed");
      assert.equal(artifacts.length, 3);
      assert.equal(
        readArtifact(root, "library/indexes/pcr-index.yaml"),
        "material generation: new\n",
      );
      assert.equal(
        readArtifact(root, "classifications/indexes/cpc-3.0-coverage.json"),
        "coverage generation: new\n",
      );
    },
    hooks: {
      onPhase({ phase }) {
        phases.push(phase);
      },
    },
  });

  assert.equal(result.committed, true);
  assert.equal(result.recoveryRequired, false);
  assert.equal(result.artifactCount, 3);
  assert.equal(validated, true);
  assert.deepEqual(phases, ["preparing", "prepared", "installing", "installed", "committed"]);
  assert.equal(readArtifact(root, "library/catalog.yaml"), "catalog generation: stable\n");
  assert.equal(readArtifact(root, "library/indexes/pcr-index.yaml"), "material generation: new\n");
  assert.equal(
    readArtifact(root, "classifications/indexes/cpc-3.0-coverage.json"),
    "coverage generation: new\n",
  );
  assert.equal(statSync(path.join(root, "library/indexes/pcr-index.yaml")).mode & 0o777, 0o644);
  assert.deepEqual(inspectCatalogArtifactTransaction({ root }), {
    status: "clean",
    phase: null,
    transactionId: null,
    artifactCount: 0,
    locked: false,
    recoveryRequired: false,
  });
});

test("an installing-phase process exit rolls the complete artifact set back", () => {
  const root = fixture();
  const child = crashTransaction(root, "after-first-install");
  assert.equal(child.status, 73, child.stderr);

  const interrupted = inspectCatalogArtifactTransaction({ root });
  assert.equal(interrupted.status, "recovery_required");
  assert.equal(interrupted.phase, "installing");
  assert.equal(interrupted.locked, true);
  assert.equal(
    readArtifact(root, "library/indexes/pcr-index.yaml"),
    "material generation: new\n",
  );
  assert.equal(
    readArtifact(root, "classifications/indexes/cpc-3.0-coverage.json"),
    "coverage generation: old\n",
  );

  const recovered = recoverCatalogArtifactTransaction({ root });
  assert.equal(recovered.action, "rolled_back");
  assert.equal(recovered.phase, "installing");
  assert.equal(recovered.forced, false);
  assert.equal(readArtifact(root, "library/catalog.yaml"), "catalog generation: stable\n");
  assert.equal(readArtifact(root, "library/indexes/pcr-index.yaml"), "material generation: old\n");
  assert.equal(
    readArtifact(root, "classifications/indexes/cpc-3.0-coverage.json"),
    "coverage generation: old\n",
  );
  assert.equal(inspectCatalogArtifactTransaction({ root }).status, "clean");
});

test("a synchronous install hook failure rolls back before returning the error", () => {
  const root = fixture();
  assert.throws(
    () => runCatalogArtifactTransaction({
      root,
      artifacts: nextArtifacts(),
      hooks: {
        afterArtifactInstalled({ path: artifactPath }) {
          if (artifactPath === "library/indexes/pcr-index.yaml") {
            throw new Error("injected install failure");
          }
        },
      },
    }),
    /injected install failure/u,
  );
  assert.equal(readArtifact(root, "library/indexes/pcr-index.yaml"), "material generation: old\n");
  assert.equal(
    readArtifact(root, "classifications/indexes/cpc-3.0-coverage.json"),
    "coverage generation: old\n",
  );
  assert.equal(inspectCatalogArtifactTransaction({ root }).status, "clean");
});

test("a committed process exit finishes forward without reverting new artifacts", () => {
  const root = fixture();
  const child = crashTransaction(root, "committed", { exitCode: 74 });
  assert.equal(child.status, 74, child.stderr);

  const interrupted = inspectCatalogArtifactTransaction({ root });
  assert.equal(interrupted.phase, "committed");
  assert.equal(interrupted.recoveryRequired, true);
  assert.equal(readArtifact(root, "library/indexes/pcr-index.yaml"), "material generation: new\n");
  assert.equal(
    readArtifact(root, "classifications/indexes/cpc-3.0-coverage.json"),
    "coverage generation: new\n",
  );

  const recovered = recoverCatalogArtifactTransaction({ root });
  assert.equal(recovered.action, "finished");
  assert.equal(recovered.phase, "committed");
  assert.equal(readArtifact(root, "library/indexes/pcr-index.yaml"), "material generation: new\n");
  assert.equal(
    readArtifact(root, "classifications/indexes/cpc-3.0-coverage.json"),
    "coverage generation: new\n",
  );
  assert.equal(inspectCatalogArtifactTransaction({ root }).status, "clean");
});

test("recovery refuses a live lock even with force and clears a dead same-host lock", () => {
  const liveRoot = fixture();
  const livePaths = catalogTransactionStatePaths({ root: liveRoot });
  mkdirSync(livePaths.lockDir, { recursive: true });
  const liveOwner = {
    schema_version: 1,
    transaction_kind: "catalog-artifact-set",
    invocation_token: randomUUID(),
    pid: process.pid,
    hostname: os.hostname(),
    command: "catalog:test-live-lock",
    started_at_utc: new Date().toISOString(),
  };
  writeFileSync(livePaths.lockOwnerPath, `${JSON.stringify(liveOwner, null, 2)}\n`, "utf8");

  assert.throws(
    () => recoverCatalogArtifactTransaction({ root: liveRoot, force: true }),
    (error) => {
      assert.equal(error.code, "CATALOG_TRANSACTION_LIVE_LOCK");
      assert.match(error.message, /live process/u);
      return true;
    },
  );
  assert.equal(existsSync(livePaths.lockOwnerPath), true);

  const staleRoot = fixture();
  const child = crashTransaction(staleRoot, "after-lock", { exitCode: 75 });
  assert.equal(child.status, 75, child.stderr);
  assert.equal(inspectCatalogArtifactTransaction({ root: staleRoot }).status, "locked");
  const recovered = recoverCatalogArtifactTransaction({ root: staleRoot });
  assert.equal(recovered.action, "cleared_stale_lock");
  assert.equal(recovered.forced, false);
  assert.equal(inspectCatalogArtifactTransaction({ root: staleRoot }).status, "clean");
});

test("recovery fails closed and preserves evidence when backup bytes are tampered", () => {
  const root = fixture();
  const child = crashTransaction(root, "after-first-backup", { exitCode: 76 });
  assert.equal(child.status, 76, child.stderr);
  const paths = catalogTransactionStatePaths({ root });
  const backupPath = path.join(paths.backupDir, "library/indexes/pcr-index.yaml");
  assert.equal(readFileSync(backupPath, "utf8"), "material generation: old\n");
  writeFileSync(backupPath, "tampered old bytes\n", "utf8");

  assert.throws(
    () => recoverCatalogArtifactTransaction({ root }),
    (error) => {
      assert.equal(error.code, "CATALOG_TRANSACTION_DIGEST_MISMATCH");
      assert.match(error.message, /backup bytes/u);
      return true;
    },
  );
  assert.equal(readFileSync(backupPath, "utf8"), "tampered old bytes\n");
  assert.equal(existsSync(paths.journalPath), true);
  assert.equal(inspectCatalogArtifactTransaction({ root }).status, "recovery_required");
});

test("transaction paths reject traversal and never follow a symbolic-link output parent", () => {
  const traversalRoot = fixture();
  const outsidePath = path.join(path.dirname(traversalRoot), `${path.basename(traversalRoot)}-outside.txt`);
  assert.throws(
    () => runCatalogArtifactTransaction({
      root: traversalRoot,
      artifacts: [{ path: `../${path.basename(outsidePath)}`, content: "escape\n" }],
    }),
    (error) => {
      assert.equal(error.code, "CATALOG_TRANSACTION_PATH_INVALID");
      return true;
    },
  );
  assert.equal(existsSync(outsidePath), false);
  assert.equal(inspectCatalogArtifactTransaction({ root: traversalRoot }).status, "clean");

  const symlinkRoot = fixture();
  const outsideRoot = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-transaction-outside-"));
  temporaryRoots.push(outsideRoot);
  symlinkSync(outsideRoot, path.join(symlinkRoot, "library/indexes/linked"));
  assert.throws(
    () => runCatalogArtifactTransaction({
      root: symlinkRoot,
      artifacts: [{ path: "library/indexes/linked/catalog.yaml", content: "must not escape\n" }],
    }),
    (error) => {
      assert.equal(error.code, "CATALOG_TRANSACTION_SYMLINK");
      return true;
    },
  );
  assert.equal(existsSync(path.join(outsideRoot, "catalog.yaml")), false);
  assert.equal(lstatSync(path.join(symlinkRoot, "library/indexes/linked")).isSymbolicLink(), true);
  assert.equal(inspectCatalogArtifactTransaction({ root: symlinkRoot }).status, "clean");
});

test("recovery never follows a symbolic link substituted into owned stage state", () => {
  const root = fixture();
  const child = crashTransaction(root, "after-first-backup", { exitCode: 77 });
  assert.equal(child.status, 77, child.stderr);
  const paths = catalogTransactionStatePaths({ root });
  const stagePath = path.join(paths.stageDir, "library/indexes/pcr-index.yaml");
  const outsideRoot = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-stage-outside-"));
  temporaryRoots.push(outsideRoot);
  const canary = path.join(outsideRoot, "canary.txt");
  writeFileSync(canary, "preserve me\n", "utf8");
  rmSync(stagePath);
  symlinkSync(canary, stagePath);

  assert.throws(
    () => recoverCatalogArtifactTransaction({ root }),
    (error) => {
      assert.equal(error.code, "CATALOG_TRANSACTION_SYMLINK");
      return true;
    },
  );
  assert.equal(readFileSync(canary, "utf8"), "preserve me\n");
  assert.equal(lstatSync(stagePath).isSymbolicLink(), true);
  assert.equal(existsSync(paths.journalPath), true);
});
