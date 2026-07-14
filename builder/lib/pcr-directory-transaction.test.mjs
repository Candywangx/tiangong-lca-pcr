import assert from "node:assert/strict";
import {
  cpSync,
  existsSync,
  lstatSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
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
    invocation_token: "00000000-0000-4000-8000-000000000001",
    pid: 2_147_483_647,
    hostname: os.hostname(),
    command: "interrupted-test",
    started_at_utc: new Date().toISOString(),
    ...overrides,
  };
}

function caseAlias(target) {
  return path.join(path.dirname(target), path.basename(target).toUpperCase());
}

function filesystemEntryIsCaseInsensitive(target) {
  const alias = caseAlias(target);
  if (!existsSync(alias)) {
    return false;
  }
  const actual = lstatSync(target);
  const alternate = lstatSync(alias);
  return actual.dev === alternate.dev && actual.ino === alternate.ino;
}

function installSuccessorLock(paths, invocationToken) {
  mkdirSync(paths.lockDir);
  writeJson(paths.lockOwnerPath, ownerFor(paths, {
    invocation_token: invocationToken,
    pid: process.pid,
    command: "successor-test",
  }));
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

test("the final digest check immediately before rename preserves a late concurrent edit", () => {
  const target = fixture();
  assert.throws(
    () => runPcrDirectoryTransaction({
      ...target,
      prepareStage({ stageDir }) {
        installNewStage(stageDir);
      },
      onPhase({ phase }) {
        if (phase === "prepared") {
          writeFileSync(path.join(target.pcrDir, "pcr.en-US.md"), "late concurrent methodology\n");
        }
      },
    }),
    { code: "PCR_TRANSACTION_SOURCE_CHANGED" },
  );
  assert.equal(readMethodology(target.pcrDir), "late concurrent methodology\n");
  assert.equal(existsSync(path.join(target.root, "library", ".pcr-builder-state")), false);
});

test("a concurrent edit after current is moved is restored instead of deleted", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  assert.throws(
    () => runPcrDirectoryTransaction({
      ...target,
      prepareStage({ stageDir }) {
        installNewStage(stageDir);
      },
      onPhase({ phase }) {
        if (phase === "current_moved") {
          writeFileSync(
            path.join(paths.backupDir, "pcr.en-US.md"),
            "rename-window concurrent methodology\n",
          );
        }
      },
    }),
    { code: "PCR_TRANSACTION_SOURCE_CHANGED" },
  );
  assert.equal(readMethodology(target.pcrDir), "rename-window concurrent methodology\n");
  assert.equal(existsSync(path.join(target.root, "library", ".pcr-builder-state")), false);
});

test("a concurrent edit to the moved original before commit rolls back the install", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  assert.throws(
    () => runPcrDirectoryTransaction({
      ...target,
      prepareStage({ stageDir }) {
        installNewStage(stageDir);
      },
      onPhase({ phase }) {
        if (phase === "new_installed") {
          writeFileSync(
            path.join(paths.backupDir, "pcr.en-US.md"),
            "pre-commit concurrent methodology\n",
          );
        }
      },
    }),
    { code: "PCR_TRANSACTION_SOURCE_CHANGED" },
  );
  assert.equal(readMethodology(target.pcrDir), "pre-commit concurrent methodology\n");
  assert.equal(existsSync(path.join(target.root, "library", ".pcr-builder-state")), false);
});

test("a moved-original mutation after commit is preserved as recovery evidence", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  const result = runPcrDirectoryTransaction({
    ...target,
    prepareStage({ stageDir }) {
      installNewStage(stageDir);
    },
    onPhase({ phase }) {
      if (phase === "committed") {
        writeFileSync(
          path.join(paths.backupDir, "pcr.en-US.md"),
          "post-commit concurrent methodology\n",
        );
      }
    },
  });
  assert.equal(result.committed, true);
  assert.equal(result.recoveryRequired, true);
  assert.equal(readMethodology(paths.pcrDir), "new methodology\n");
  assert.equal(readMethodology(paths.backupDir), "post-commit concurrent methodology\n");
  assert.equal(existsSync(paths.journalPath), true);
});

test("a lock handoff after commit preserves the successor lock and treats lock-only ENOTEMPTY as normal", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  const successorToken = "00000000-0000-4000-8000-000000000002";
  const result = runPcrDirectoryTransaction({
    ...target,
    prepareStage({ stageDir }) {
      installNewStage(stageDir);
    },
    onLockReleased() {
      installSuccessorLock(paths, successorToken);
    },
  });
  assert.equal(result.committed, true);
  assert.equal(JSON.parse(readFileSync(paths.lockOwnerPath, "utf8")).invocation_token, successorToken);
});

test("a committed transaction catch cannot delete a successor that acquired after lock release", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  const successorToken = "00000000-0000-4000-8000-000000000003";
  const result = runPcrDirectoryTransaction({
    ...target,
    prepareStage({ stageDir }) {
      installNewStage(stageDir);
    },
    onLockReleased() {
      installSuccessorLock(paths, successorToken);
      throw new Error("handoff observer failed");
    },
  });
  assert.equal(result.committed, true);
  assert.equal(result.recoveryRequired, true);
  assert.equal(JSON.parse(readFileSync(paths.lockOwnerPath, "utf8")).invocation_token, successorToken);
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

test("case aliases share one state identity and recovery finds it while current is absent", (t) => {
  const target = fixture();
  if (!filesystemEntryIsCaseInsensitive(path.dirname(target.pcrDir))) {
    t.skip("fixture filesystem is case-sensitive");
    return;
  }
  const aliasTarget = {
    root: target.root,
    pcr: "library/pcrs/AGRICULTURE/CROPS/WHEAT-SEED",
  };
  const canonicalPathsBeforeCrash = transactionStatePaths(target);
  const aliasPathsBeforeCrash = transactionStatePaths(aliasTarget);
  assert.equal(aliasPathsBeforeCrash.transactionDir, canonicalPathsBeforeCrash.transactionDir);

  const { paths, oldDigest } = createRecoveryState(target, "current_moved");
  const aliasPaths = transactionStatePaths(aliasTarget);
  assert.equal(aliasPaths.transactionDir, paths.transactionDir);
  assert.equal(aliasPaths.relativePcrPath, paths.relativePcrPath);
  assert.equal(aliasPaths.pcrDir, target.pcrDir);

  const result = recoverPcrDirectoryTransaction(aliasTarget);
  assert.equal(result.action, "rolled_back");
  assert.equal(digestDirectoryTree(target.pcrDir), oldDigest);
});

test("journal and lock owner path aliases validate as the same PCR only on case-insensitive filesystems", (t) => {
  const target = fixture();
  if (!filesystemEntryIsCaseInsensitive(path.dirname(target.pcrDir))) {
    t.skip("fixture filesystem is case-sensitive");
    return;
  }
  const { paths } = createRecoveryState(target, "prepared", {
    owner: ownerFor(transactionStatePaths(target), {
      pcr_path: "AGRICULTURE/CROPS/WHEAT-SEED",
    }),
  });
  const journal = JSON.parse(readFileSync(paths.journalPath, "utf8"));
  writeJson(paths.journalPath, {
    ...journal,
    pcr_path: "AGRICULTURE/CROPS/WHEAT-SEED",
  });
  const result = recoverPcrDirectoryTransaction(target);
  assert.equal(result.action, "rolled_back");
});

test("journal and lock owner identity matching never admits a different PCR", () => {
  {
    const target = fixture();
    const { paths } = createRecoveryState(target, "prepared");
    const journal = JSON.parse(readFileSync(paths.journalPath, "utf8"));
    writeJson(paths.journalPath, {
      ...journal,
      pcr_path: "agriculture/crops/barley-seed",
    });
    assert.throws(() => recoverPcrDirectoryTransaction(target), {
      code: "PCR_TRANSACTION_JOURNAL_UNTRUSTED",
    });
    assert.equal(existsSync(paths.journalPath), true);
  }

  {
    const target = fixture();
    const paths = transactionStatePaths(target);
    createRecoveryState(target, "prepared", {
      owner: ownerFor(paths, { pcr_path: "agriculture/crops/barley-seed" }),
    });
    assert.throws(() => recoverPcrDirectoryTransaction(target), {
      code: "PCR_TRANSACTION_FORCE_REQUIRED",
    });
    assert.equal(existsSync(paths.lockDir), true);
  }
});

test("case-sensitive filesystems keep legitimate differently-cased PCR leaves distinct", (t) => {
  const target = fixture();
  if (filesystemEntryIsCaseInsensitive(path.dirname(target.pcrDir))) {
    t.skip("fixture filesystem is case-insensitive");
    return;
  }
  const alternateDir = caseAlias(target.pcrDir);
  mkdirSync(alternateDir);
  writeFileSync(path.join(alternateDir, "manifest.yaml"), "id: upper-wheat-seed\n");
  const lower = transactionStatePaths(target);
  const upper = transactionStatePaths({ root: target.root, pcr: alternateDir });
  assert.notEqual(lower.transactionDir, upper.transactionDir);
  assert.notEqual(lower.relativePcrPath, upper.relativePcrPath);
});

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

test("recovery validates and cleans an interrupted tokenized lock-release residue", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  const invocationToken = "00000000-0000-4000-8000-000000000005";
  const releasedLockDir = path.join(paths.transactionDir, `.lock.released.${invocationToken}`);
  mkdirSync(releasedLockDir, { recursive: true });
  writeJson(
    path.join(releasedLockDir, "owner.json"),
    ownerFor(paths, { invocation_token: invocationToken }),
  );

  const result = recoverPcrDirectoryTransaction(target);
  assert.equal(result.action, "cleared_stale_lock");
  assert.equal(existsSync(paths.transactionDir), false);
});

test("recovery preserves a released-lock lookalike whose owner token does not match", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  const invocationToken = "00000000-0000-4000-8000-000000000006";
  const releasedLockDir = path.join(paths.transactionDir, `.lock.released.${invocationToken}`);
  mkdirSync(releasedLockDir, { recursive: true });
  writeJson(
    path.join(releasedLockDir, "owner.json"),
    ownerFor(paths, { invocation_token: "00000000-0000-4000-8000-000000000007" }),
  );

  assert.throws(() => recoverPcrDirectoryTransaction(target), {
    code: "PCR_TRANSACTION_RELEASED_LOCK_UNTRUSTED",
  });
  assert.equal(existsSync(releasedLockDir), true);
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

test("forced recovery treats a path-shaped lock token as malformed and preserves external state", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  const escapeTarget = path.join(paths.stateRoot, "escape-target");
  mkdirSync(escapeTarget, { recursive: true });
  createRecoveryState(target, "prepared", {
    owner: ownerFor(paths, { invocation_token: "../../escape-target" }),
  });

  assert.throws(() => recoverPcrDirectoryTransaction(target), {
    code: "PCR_TRANSACTION_FORCE_REQUIRED",
  });
  const result = recoverPcrDirectoryTransaction({ ...target, force: true });

  assert.equal(result.action, "rolled_back");
  assert.equal(existsSync(escapeTarget), true);
});

test("state identity discovery ignores a symlink lock directory and its external owner", () => {
  const target = fixture();
  const defaultPaths = transactionStatePaths(target);
  mkdirSync(defaultPaths.stateRoot, { recursive: true });
  const alternateKey = path.basename(defaultPaths.transactionDir) === "f".repeat(64)
    ? "e".repeat(64)
    : "f".repeat(64);
  const alternateState = path.join(defaultPaths.stateRoot, alternateKey);
  mkdirSync(alternateState);

  const externalRoot = mkdtempSync(path.join(os.tmpdir(), "pcr-transaction-external-lock-"));
  temporaryRoots.push(externalRoot);
  writeJson(path.join(externalRoot, "owner.json"), ownerFor(defaultPaths));
  symlinkSync(externalRoot, path.join(alternateState, "lock"));

  const resolved = transactionStatePaths(target);

  assert.equal(resolved.transactionDir, defaultPaths.transactionDir);
  assert.notEqual(resolved.transactionDir, alternateState);
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

test("forced recovery discards an owned pre-journal stage while preserving current", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  const oldDigest = digestDirectoryTree(paths.pcrDir);
  mkdirSync(paths.transactionDir, { recursive: true });
  mkdirSync(paths.lockDir);
  writeJson(paths.lockOwnerPath, ownerFor(paths));
  cpSync(paths.pcrDir, paths.stageDir, { recursive: true });
  installNewStage(paths.stageDir);

  assert.throws(() => recoverPcrDirectoryTransaction(target), {
    code: "PCR_TRANSACTION_FORCE_REQUIRED",
  });
  assert.equal(existsSync(paths.lockDir), true);
  assert.equal(existsSync(paths.stageDir), true);

  const result = recoverPcrDirectoryTransaction({ ...target, force: true });
  assert.equal(result.action, "discarded_pre_journal_stage");
  assert.equal(result.forced, true);
  assert.equal(digestDirectoryTree(paths.pcrDir), oldDigest);
  assert.equal(readMethodology(paths.pcrDir), "old methodology\n");
  assert.equal(existsSync(paths.transactionDir), false);
});

test("failed pre-journal validation preserves trusted owner evidence for retry", () => {
  const target = fixture();
  const paths = transactionStatePaths(target);
  const oldDigest = digestDirectoryTree(paths.pcrDir);
  mkdirSync(paths.transactionDir, { recursive: true });
  mkdirSync(paths.lockDir);
  writeJson(paths.lockOwnerPath, ownerFor(paths));
  cpSync(paths.pcrDir, paths.stageDir, { recursive: true });
  installNewStage(paths.stageDir);

  assert.throws(
    () => recoverPcrDirectoryTransaction({
      ...target,
      force: true,
      validateRecovered() {
        throw new Error("repair PCR content before retry");
      },
    }),
    /repair PCR content before retry/u,
  );
  assert.equal(existsSync(paths.stageDir), true);
  assert.equal(existsSync(paths.lockDir), false);
  assert.equal(
    readdirSync(paths.transactionDir).some((entry) => entry.startsWith(".lock.released.")),
    true,
  );

  const result = recoverPcrDirectoryTransaction({ ...target, force: true });
  assert.equal(result.action, "discarded_pre_journal_stage");
  assert.equal(digestDirectoryTree(paths.pcrDir), oldDigest);
  assert.equal(existsSync(paths.transactionDir), false);
});

test("recovery catch after lock release preserves a successor recovery lock", () => {
  const target = fixture();
  const { paths } = createRecoveryState(target, "prepared");
  const successorToken = "00000000-0000-4000-8000-000000000004";
  assert.throws(
    () => recoverPcrDirectoryTransaction({
      ...target,
      onLockReleased() {
        installSuccessorLock(paths, successorToken);
        throw new Error("recovery handoff observer failed");
      },
    }),
    /recovery handoff observer failed/u,
  );
  assert.equal(JSON.parse(readFileSync(paths.lockOwnerPath, "utf8")).invocation_token, successorToken);
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
