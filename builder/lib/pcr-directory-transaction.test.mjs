import assert from "node:assert/strict";
import {
  cpSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  digestDirectoryTree,
  recoverPcrDirectoryTransaction,
  runPcrDirectoryTransaction,
  transactionStatePaths,
} from "./pcr-directory-transaction.mjs";

const temporaryRoots = [];

function fixture() {
  const root = mkdtempSync(path.join(os.tmpdir(), "pcr-transaction-"));
  temporaryRoots.push(root);
  const pcr = "library/pcrs/agriculture/crops/wheat-seed";
  const pcrDir = path.join(root, pcr);
  mkdirSync(pcrDir, { recursive: true });
  writeFileSync(path.join(pcrDir, "manifest.yaml"), "id: wheat-seed\nstatus: candidate\n");
  writeFileSync(path.join(pcrDir, "pcr.en-US.md"), "old methodology\n");
  mkdirSync(path.join(pcrDir, "evidence"));
  writeFileSync(path.join(pcrDir, "evidence", "source.txt"), "old evidence\n");
  return { root, pcr, pcrDir };
}

function readMethodology(pcrDir) {
  return readFileSync(path.join(pcrDir, "pcr.en-US.md"), "utf8");
}

function installNewStage(stageDir) {
  writeFileSync(path.join(stageDir, "pcr.en-US.md"), "new methodology\n");
  writeFileSync(path.join(stageDir, "evidence", "source.txt"), "new evidence\n");
}

function journalFor(paths, phase, oldDigest, newDigest) {
  const now = new Date().toISOString();
  return {
    schema_version: 1,
    transaction_id: `test-${phase}`,
    pcr_path: paths.relativePcrPath,
    command: "test-recovery",
    phase,
    old_tree_sha256: oldDigest,
    new_tree_sha256: newDigest,
    created_at_utc: now,
    updated_at_utc: now,
  };
}

function writeJson(target, value) {
  writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`);
}

function createRecoveryState(fixtureValue, phase, { owner = null } = {}) {
  const paths = transactionStatePaths(fixtureValue);
  mkdirSync(paths.transactionDir, { recursive: true });
  const oldDigest = digestDirectoryTree(paths.pcrDir);
  cpSync(paths.pcrDir, paths.stageDir, { recursive: true });
  installNewStage(paths.stageDir);
  const newDigest = digestDirectoryTree(paths.stageDir);
  writeJson(paths.journalPath, journalFor(paths, phase, oldDigest, newDigest));

  if (phase === "current_moved" || phase === "new_installed" || phase === "committed") {
    renameSync(paths.pcrDir, paths.backupDir);
  }
  if (phase === "new_installed" || phase === "committed") {
    renameSync(paths.stageDir, paths.pcrDir);
  }
  if (owner !== null) {
    mkdirSync(paths.lockDir);
    if (typeof owner === "string") {
      writeFileSync(paths.lockOwnerPath, owner);
    } else {
      writeJson(paths.lockOwnerPath, owner);
    }
  }
  return { paths, oldDigest, newDigest };
}

function ownerFor(paths, overrides = {}) {
  return {
    schema_version: 1,
    pcr_path: paths.relativePcrPath,
    pid: 2_147_483_647,
    hostname: os.hostname(),
    command: "interrupted-test",
    started_at_utc: new Date().toISOString(),
    ...overrides,
  };
}

test.afterEach(() => {
  for (const root of temporaryRoots.splice(0)) {
    rmSync(root, { recursive: true, force: true });
  }
});

test("preflight failure performs no transaction-state write", () => {
  const target = fixture();
  assert.throws(
    () =>
      runPcrDirectoryTransaction({
        ...target,
        preflight() {
          throw new Error("preflight rejected");
        },
      }),
    /preflight rejected/u,
  );
  assert.equal(existsSync(path.join(target.root, "library", ".pcr-builder-state")), false);
  assert.equal(readMethodology(target.pcrDir), "old methodology\n");
});

test("preflight runs while locked and before the current tree is copied", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  const events = [];
  runPcrDirectoryTransaction({
    ...target,
    preflight() {
      events.push("preflight");
      assert.equal(existsSync(paths.lockDir), true);
      assert.equal(existsSync(paths.stageDir), false);
      writeFileSync(path.join(target.pcrDir, "pcr.en-US.md"), "preflight methodology\n");
    },
    prepareStage({ stageDir }) {
      events.push("prepareStage");
      assert.equal(readMethodology(stageDir), "preflight methodology\n");
      installNewStage(stageDir);
    },
  });
  assert.deepEqual(events, ["preflight", "prepareStage"]);
  assert.equal(readMethodology(target.pcrDir), "new methodology\n");
});

test("a mid-copy failure removes the owned partial stage and lock", () => {
  const target = fixture();
  let copiedEntries = 0;
  assert.throws(
    () =>
      runPcrDirectoryTransaction({
        ...target,
        onCopyEntry() {
          copiedEntries += 1;
          if (copiedEntries === 2) {
            throw new Error("copy interrupted");
          }
        },
      }),
    /copy interrupted/u,
  );
  assert.equal(copiedEntries, 2);
  assert.equal(readMethodology(target.pcrDir), "old methodology\n");
  assert.equal(existsSync(path.join(target.root, "library", ".pcr-builder-state")), false);
});

test("a concurrent current-tree edit aborts before replacement and preserves that edit", () => {
  const target = fixture();
  assert.throws(
    () =>
      runPcrDirectoryTransaction({
        ...target,
        prepareStage({ pcrDir, stageDir }) {
          installNewStage(stageDir);
          writeFileSync(path.join(pcrDir, "pcr.en-US.md"), "concurrent methodology\n");
        },
      }),
    { code: "PCR_TRANSACTION_SOURCE_CHANGED" },
  );
  assert.equal(readMethodology(target.pcrDir), "concurrent methodology\n");
  assert.equal(existsSync(path.join(target.root, "library", ".pcr-builder-state")), false);
});

test("commits a complete staged copy and removes transaction state after post-validation", () => {
  const target = fixture();
  const initialDigest = digestDirectoryTree(target.pcrDir);
  let postValidated = false;
  const result = runPcrDirectoryTransaction({
    ...target,
    command: "test-success",
    prepareStage({ stageDir }) {
      installNewStage(stageDir);
    },
    validateStage({ stageDir }) {
      assert.equal(readMethodology(stageDir), "new methodology\n");
      assert.equal(readFileSync(path.join(stageDir, "manifest.yaml"), "utf8").includes("wheat-seed"), true);
    },
    postValidate({ pcrDir }) {
      assert.equal(readMethodology(pcrDir), "new methodology\n");
      postValidated = true;
    },
  });
  assert.equal(result.committed, true);
  assert.equal(result.recoveryRequired, false);
  assert.equal(result.oldTreeSha256, initialDigest);
  assert.equal(result.newTreeSha256, digestDirectoryTree(target.pcrDir));
  assert.notEqual(result.oldTreeSha256, result.newTreeSha256);
  assert.equal(postValidated, true);
  assert.equal(existsSync(path.join(target.root, "library", ".pcr-builder-state")), false);
});

for (const faultPhase of ["prepared", "current_moved", "new_installed"]) {
  test(`rolls back reliably when the ${faultPhase} phase hook throws`, () => {
    const target = fixture();
    const oldDigest = digestDirectoryTree(target.pcrDir);
    assert.throws(
      () =>
        runPcrDirectoryTransaction({
          ...target,
          prepareStage({ stageDir }) {
            installNewStage(stageDir);
          },
          onPhase({ phase }) {
            if (phase === faultPhase) {
              throw new Error(`fault at ${phase}`);
            }
          },
        }),
      new RegExp(`fault at ${faultPhase}`, "u"),
    );
    assert.equal(readMethodology(target.pcrDir), "old methodology\n");
    assert.equal(digestDirectoryTree(target.pcrDir), oldDigest);
    assert.equal(existsSync(path.join(target.root, "library", ".pcr-builder-state")), false);
  });
}

test("post-validation failure rolls back the installed directory", () => {
  const target = fixture();
  const oldDigest = digestDirectoryTree(target.pcrDir);
  assert.throws(
    () =>
      runPcrDirectoryTransaction({
        ...target,
        prepareStage({ stageDir }) {
          installNewStage(stageDir);
        },
        postValidate() {
          throw new Error("post-validation failed");
        },
      }),
    /post-validation failed/u,
  );
  assert.equal(digestDirectoryTree(target.pcrDir), oldDigest);
  assert.equal(readMethodology(target.pcrDir), "old methodology\n");
});

test("a failure after committed is success with a warning and explicit recovery finishes forward", () => {
  const target = fixture();
  const result = runPcrDirectoryTransaction({
    ...target,
    prepareStage({ stageDir }) {
      installNewStage(stageDir);
    },
    onPhase({ phase }) {
      if (phase === "committed") {
        throw new Error("cleanup unavailable");
      }
    },
  });
  assert.equal(result.committed, true);
  assert.equal(result.recoveryRequired, true);
  assert.equal(result.warnings.length, 1);
  assert.match(result.warnings[0], /cleanup unavailable/u);
  assert.equal(readMethodology(target.pcrDir), "new methodology\n");

  const recovery = recoverPcrDirectoryTransaction(target);
  assert.deepEqual(
    { action: recovery.action, phase: recovery.phase, forced: recovery.forced },
    { action: "finished", phase: "committed", forced: false },
  );
  assert.equal(readMethodology(target.pcrDir), "new methodology\n");
  assert.equal(existsSync(path.join(target.root, "library", ".pcr-builder-state")), false);
});

for (const phase of ["prepared", "current_moved", "new_installed"]) {
  test(`recovery infers and restores the old tree from ${phase} filesystem state`, () => {
    const target = fixture();
    const { oldDigest } = createRecoveryState(target, phase);
    const result = recoverPcrDirectoryTransaction(target);
    assert.equal(result.action, "rolled_back");
    assert.equal(result.phase, phase);
    assert.equal(digestDirectoryTree(target.pcrDir), oldDigest);
    assert.equal(readMethodology(target.pcrDir), "old methodology\n");
  });
}

test("same-host dead owners are recoverable without force", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  const state = createRecoveryState(target, "current_moved", { owner: ownerFor(paths) });
  const result = recoverPcrDirectoryTransaction(target);
  assert.equal(result.action, "rolled_back");
  assert.equal(digestDirectoryTree(target.pcrDir), state.oldDigest);
});

test("normal transactions reject contention and recovery refuses a live lock even with force", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  mkdirSync(paths.lockDir, { recursive: true });
  writeJson(paths.lockOwnerPath, ownerFor(paths, { pid: process.pid }));

  assert.throws(() => runPcrDirectoryTransaction(target), {
    code: "PCR_TRANSACTION_LOCKED",
  });
  assert.throws(() => recoverPcrDirectoryTransaction({ ...target, force: true }), {
    code: "PCR_TRANSACTION_LIVE_LOCK",
  });
});

test("malformed and foreign lock owners require force", () => {
  {
    const target = fixture();
    createRecoveryState(target, "prepared", { owner: "{not-json" });
    assert.throws(() => recoverPcrDirectoryTransaction(target), {
      code: "PCR_TRANSACTION_FORCE_REQUIRED",
    });
    assert.equal(recoverPcrDirectoryTransaction({ ...target, force: true }).action, "rolled_back");
  }

  {
    const target = fixture();
    const paths = transactionStatePaths(target);
    createRecoveryState(target, "prepared", {
      owner: ownerFor(paths, { hostname: "foreign-host.invalid" }),
    });
    assert.throws(() => recoverPcrDirectoryTransaction(target), {
      code: "PCR_TRANSACTION_FORCE_REQUIRED",
    });
    assert.equal(recoverPcrDirectoryTransaction({ ...target, force: true }).action, "rolled_back");
  }
});

test("recovery removes recognized orphan journal temporaries after validation", () => {
  const target = fixture();
  const { paths, oldDigest } = createRecoveryState(target, "prepared");
  const temporaryPath = path.join(
    paths.transactionDir,
    ".journal.json.123.00000000-0000-4000-8000-000000000000.tmp",
  );
  writeFileSync(temporaryPath, "orphan atomic write\n");
  const result = recoverPcrDirectoryTransaction({
    ...target,
    validateRecovered({ pcrDir }) {
      assert.equal(digestDirectoryTree(pcrDir), oldDigest);
    },
  });
  assert.equal(result.action, "rolled_back");
  assert.equal(existsSync(paths.transactionDir), false);
});

test("recovery finalizes one complete atomic journal temporary before using it", () => {
  const target = fixture();
  const { paths, oldDigest } = createRecoveryState(target, "prepared");
  const journalText = readFileSync(paths.journalPath, "utf8");
  rmSync(paths.journalPath);
  writeFileSync(
    path.join(
      paths.transactionDir,
      ".journal.json.123.00000000-0000-4000-8000-000000000000.tmp",
    ),
    journalText,
  );
  const result = recoverPcrDirectoryTransaction(target);
  assert.equal(result.action, "rolled_back");
  assert.equal(digestDirectoryTree(target.pcrDir), oldDigest);
  assert.equal(existsSync(paths.transactionDir), false);
});

test("force never guesses a tree when no trustworthy journal exists", () => {
  const target = fixture();
  const { paths, oldDigest, newDigest } = createRecoveryState(target, "current_moved");
  rmSync(paths.journalPath);

  assert.throws(
    () => recoverPcrDirectoryTransaction({ ...target, force: true }),
    { code: "PCR_TRANSACTION_TRUSTED_JOURNAL_REQUIRED" },
  );
  assert.equal(existsSync(paths.pcrDir), false);
  assert.equal(digestDirectoryTree(paths.backupDir), oldDigest);
  assert.equal(digestDirectoryTree(paths.stageDir), newDigest);
  assert.equal(existsSync(paths.journalPath), false);
  assert.equal(existsSync(paths.transactionDir), true);
});

test("failed recovered-tree validation preserves journal and tree evidence", () => {
  const target = fixture();
  const { paths, oldDigest } = createRecoveryState(target, "current_moved");
  assert.throws(
    () =>
      recoverPcrDirectoryTransaction({
        ...target,
        validateRecovered() {
          throw new Error("recovered tree is invalid");
        },
      }),
    /recovered tree is invalid/u,
  );
  assert.equal(digestDirectoryTree(paths.pcrDir), oldDigest);
  assert.equal(existsSync(paths.journalPath), true);
  assert.equal(existsSync(paths.stageDir), true);
  assert.equal(existsSync(paths.transactionDir), true);
});

test("recovery does not report success while unrecognized state remains", () => {
  const target = fixture();
  const { paths } = createRecoveryState(target, "prepared");
  writeFileSync(path.join(paths.transactionDir, "operator-note.txt"), "preserve me\n");
  assert.throws(() => recoverPcrDirectoryTransaction(target), {
    code: "PCR_TRANSACTION_UNRECOGNIZED_STATE",
  });
  assert.equal(existsSync(path.join(paths.transactionDir, "operator-note.txt")), true);
  assert.equal(existsSync(paths.journalPath), true);
});

test("rejects symbolic links in both the current tree and a prepared stage", () => {
  {
    const target = fixture();
    symlinkSync(path.join(target.pcrDir, "manifest.yaml"), path.join(target.pcrDir, "manifest.link.yaml"));
    assert.throws(() => runPcrDirectoryTransaction(target), {
      code: "PCR_TRANSACTION_SYMLINK",
    });
    assert.equal(readMethodology(target.pcrDir), "old methodology\n");
  }

  {
    const target = fixture();
    assert.throws(
      () =>
        runPcrDirectoryTransaction({
          ...target,
          prepareStage({ stageDir }) {
            symlinkSync(path.join(stageDir, "manifest.yaml"), path.join(stageDir, "manifest.link.yaml"));
          },
        }),
      { code: "PCR_TRANSACTION_SYMLINK" },
    );
    assert.equal(readMethodology(target.pcrDir), "old methodology\n");
  }
});
