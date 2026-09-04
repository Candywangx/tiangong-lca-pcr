import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";

import { withGoalLock } from "./lock.mjs";

const lockModuleUrl = pathToFileURL(path.join(process.cwd(), "builder/goal-harness/lock.mjs")).href;

function spawnLockProcess(source) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("close", (code) => resolve({ code, stdout, stderr }));
  });
}

function runContender(stateDir, holdMilliseconds = 80) {
  return spawnLockProcess(`import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
try {
  const value = withGoalLock(${JSON.stringify(stateDir)}, "race", () => { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ${holdMilliseconds}); return "entered"; });
  process.stdout.write(JSON.stringify({ ok: true, value }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, code: error.code, message: error.message }));
  process.exitCode = 1;
}`).then(({ stdout, stderr }) => {
    assert.equal(stderr, "");
    assert.notEqual(stdout, "");
    return JSON.parse(stdout);
  });
}

function deadLease(token = "stale-token") {
  return { schema_version: 1, token, pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
}

test("a dead process lock is archived and recovered without weakening live lock exclusion", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.equal(withGoalLock(stateDir, "integrate", () => "recovered"), "recovered");
    assert.equal(existsSync(lockPath), false);
    const archived = readdirSync(path.join(stateDir, "lock-history"));
    assert.equal(archived.length, 1);
    const archivedOwner = path.join(stateDir, "lock-history", archived[0], "owner.json");
    assert.deepEqual(JSON.parse(readFileSync(archivedOwner, "utf8")), stale);

    writeFileSync(lockPath, `${JSON.stringify({ ...stale, token: "live-token", pid: process.pid })}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "integrate", () => "must not run"),
      (error) => error.code === "GOAL_LOCKED",
    );
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("multiple concurrent stale-lock reclaimers retire one exact owner and only one enters", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-race-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    const moduleUrl = pathToFileURL(path.join(process.cwd(), "builder/goal-harness/lock.mjs")).href;
    const run = () => new Promise((resolve) => {
      const source = `import { withGoalLock } from ${JSON.stringify(moduleUrl)};
try {
  const value = withGoalLock(${JSON.stringify(stateDir)}, "race", () => { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500); return "entered"; });
  process.stdout.write(JSON.stringify({ ok: true, value }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, code: error.code }));
  process.exitCode = 1;
}`;
      const child = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
      let stdout = "";
      child.stdout.on("data", (chunk) => { stdout += chunk; });
      child.on("close", () => resolve(JSON.parse(stdout)));
    });
    const results = await Promise.all(Array.from({ length: 8 }, () => run()));
    assert.equal(results.filter((entry) => entry.ok).length, 1);
    assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"));
    const archives = readdirSync(path.join(stateDir, "lock-history"));
    assert.equal(archives.length, 1);
    assert.deepEqual(JSON.parse(readFileSync(path.join(stateDir, "lock-history", archives[0], "owner.json"), "utf8")), stale);
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("concurrent reclaimers recover a crash after the retirement directory was created", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-claim-crash-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "crash", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => error.code === "TEST_CRASH",
    );
    const [incompleteClaim] = readdirSync(path.join(stateDir, "lock-history"));
    assert.deepEqual(readdirSync(path.join(stateDir, "lock-history", incompleteClaim)), []);
    assert.deepEqual(JSON.parse(readFileSync(lockPath, "utf8")), stale);

    const moduleUrl = pathToFileURL(path.join(process.cwd(), "builder/goal-harness/lock.mjs")).href;
    const run = () => new Promise((resolve) => {
      const source = `import { withGoalLock } from ${JSON.stringify(moduleUrl)};
try {
  const value = withGoalLock(${JSON.stringify(stateDir)}, "race", () => { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500); return "entered"; });
  process.stdout.write(JSON.stringify({ ok: true, value }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, code: error.code }));
  process.exitCode = 1;
}`;
      const child = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
      let stdout = "";
      child.stdout.on("data", (chunk) => { stdout += chunk; });
      child.on("close", () => resolve(JSON.parse(stdout)));
    });
    const results = await Promise.all(Array.from({ length: 8 }, () => run()));
    assert.equal(results.filter((entry) => entry.ok).length, 1);
    assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"));
    assert.deepEqual(JSON.parse(readFileSync(path.join(stateDir, "lock-history", incompleteClaim, "owner.json"), "utf8")), stale);
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("retirement never removes a replacement live lease", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-replaced-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  const live = { ...stale, token: "live-token", pid: process.pid, acquired_at: new Date().toISOString() };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "race", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") writeFileSync(lockPath, `${JSON.stringify(live)}\n`);
        },
      }),
      (error) => error.code === "GOAL_LOCKED",
    );
    assert.deepEqual(JSON.parse(readFileSync(lockPath, "utf8")), live);
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    assert.deepEqual(readdirSync(path.join(stateDir, "lock-history", retired)), []);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("concurrent reclaimers recover a process death after stale owner capture", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-owner-capture-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  const moduleUrl = pathToFileURL(path.join(process.cwd(), "builder/goal-harness/lock.mjs")).href;
  const spawnRun = (source) => new Promise((resolve) => {
    const child = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.on("close", (code) => resolve({ code, stdout }));
  });
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    const crashing = await spawnRun(`import { withGoalLock } from ${JSON.stringify(moduleUrl)};
withGoalLock(${JSON.stringify(stateDir)}, "capture-crash", () => "must not run", {
  faultInjector(phase) {
    if (phase === "after_stale_owner_captured") process.exit(86);
  },
});`);
    assert.equal(crashing.code, 86);
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    const retiredDir = path.join(stateDir, "lock-history", retired);
    assert.deepEqual(JSON.parse(readFileSync(path.join(retiredDir, "owner.json"), "utf8")), stale);
    assert.deepEqual(JSON.parse(readFileSync(lockPath, "utf8")), stale);

    const run = () => spawnRun(`import { withGoalLock } from ${JSON.stringify(moduleUrl)};
try {
  const value = withGoalLock(${JSON.stringify(stateDir)}, "race", () => { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500); return "entered"; });
  process.stdout.write(JSON.stringify({ ok: true, value }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, code: error.code }));
  process.exitCode = 1;
}`).then(({ stdout }) => JSON.parse(stdout));
    const results = await Promise.all(Array.from({ length: 8 }, () => run()));
    assert.equal(results.filter((entry) => entry.ok).length, 1);
    assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"));
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("every durable retirement boundary is crash-recoverable by concurrent successors", async () => {
  for (const phase of [
    "after_retirement_directory_created",
    "after_stale_owner_captured",
    "after_stale_lock_unlinked",
    "after_stale_retirement_completed",
  ]) {
    const stateDir = mkdtempSync(path.join(tmpdir(), `goal-stale-boundary-${phase}-`));
    const lockPath = path.join(stateDir, "goal.lock");
    const stale = deadLease(phase);
    try {
      writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
      const crashing = await spawnLockProcess(`import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
withGoalLock(${JSON.stringify(stateDir)}, "boundary-crash", () => "must not run", {
  faultInjector(currentPhase) {
    if (currentPhase === ${JSON.stringify(phase)}) process.exit(86);
  },
});`);
      assert.equal(crashing.code, 86, `${phase} was not reached`);

      const results = await Promise.all(Array.from({ length: 6 }, () => runContender(stateDir)));
      assert.equal(results.filter((entry) => entry.ok).length, 1, phase);
      assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"), phase);
      assert.equal(existsSync(lockPath), false, phase);
      const [retired] = readdirSync(path.join(stateDir, "lock-history"));
      assert.deepEqual(JSON.parse(readFileSync(path.join(stateDir, "lock-history", retired, "owner.json"), "utf8")), stale, phase);
    } finally {
      rmSync(stateDir, { recursive: true, force: true });
    }
  }
});

test("a successor adopts an already captured dead recovery lease", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-recovery-captured-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = deadLease();
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "prepare", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => error.code === "TEST_CRASH",
    );
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    const retiredDir = path.join(stateDir, "lock-history", retired);
    const recoveryPath = path.join(retiredDir, "recovery.lock");
    const recovery = Buffer.from(`${JSON.stringify({ schema_version: 1, pid: 2147483647, token: "dead-reclaimer", acquired_at: "2026-09-04T00:00:00.000Z" })}\n`);
    writeFileSync(recoveryPath, recovery);
    const archivePath = path.join(retiredDir, `recovery-dead-${createHash("sha256").update(recovery).digest("hex")}.json`);
    const crashing = await spawnLockProcess(`import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
withGoalLock(${JSON.stringify(stateDir)}, "capture-dead-recovery", () => "must not run", {
  faultInjector(phase) {
    if (phase === "after_legacy_recovery_claim_captured") process.exit(86);
  },
});`);
    assert.equal(crashing.code, 86);
    assert.equal(existsSync(recoveryPath), true);
    assert.deepEqual(readFileSync(archivePath), recovery);

    const results = await Promise.all(Array.from({ length: 6 }, () => runContender(stateDir)));
    assert.equal(results.filter((entry) => entry.ok).length, 1);
    assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"));
    assert.equal(existsSync(recoveryPath), false);
    assert.deepEqual(readFileSync(archivePath), recovery);
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("a torn legacy recovery claim is quarantined instead of wedging retirement", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-recovery-torn-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = deadLease();
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "prepare", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => error.code === "TEST_CRASH",
    );
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    const retiredDir = path.join(stateDir, "lock-history", retired);
    const torn = Buffer.from('{"schema_version":1,"pid":');
    writeFileSync(path.join(retiredDir, "recovery.lock"), torn);

    assert.equal(withGoalLock(stateDir, "recover", () => "entered"), "entered");
    const tornArchives = readdirSync(retiredDir).filter((name) => name.startsWith("recovery-torn-"));
    assert.equal(tornArchives.length, 1);
    assert.deepEqual(readFileSync(path.join(retiredDir, tornArchives[0])), torn);
    assert.equal(existsSync(path.join(retiredDir, "recovery.lock")), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("recovery claim disappearance at every inspection boundary never escapes as a raw error", () => {
  for (const injectedPhase of [
    "before_legacy_recovery_claim_read",
    "after_legacy_recovery_claim_read",
    "after_legacy_recovery_claim_captured",
  ]) {
    const stateDir = mkdtempSync(path.join(tmpdir(), `goal-recovery-disappear-${injectedPhase}-`));
    const lockPath = path.join(stateDir, "goal.lock");
    const stale = deadLease(injectedPhase);
    let injected = false;
    try {
      writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
      assert.throws(
        () => withGoalLock(stateDir, "prepare", () => "must not run", {
          faultInjector(phase) {
            if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
          },
        }),
        (error) => error.code === "TEST_CRASH",
      );
      const [retired] = readdirSync(path.join(stateDir, "lock-history"));
      const claimPath = path.join(stateDir, "lock-history", retired, "recovery.lock");
      writeFileSync(claimPath, `${JSON.stringify({ schema_version: 1, pid: 2147483647, token: "dead", acquired_at: "2026-09-04T00:00:00.000Z" })}\n`);

      const outcome = (() => {
        try {
          return withGoalLock(stateDir, "recover", () => "entered", {
            faultInjector(phase) {
              if (phase === injectedPhase) {
                injected = true;
                try { unlinkSync(claimPath); } catch (error) { if (error?.code !== "ENOENT") throw error; }
              }
            },
          });
        } catch (error) {
          assert.equal(error.code, "GOAL_LOCKED", injectedPhase);
          return "locked";
        }
      })();
      assert.equal(injected, true, injectedPhase);
      assert.ok(outcome === "entered" || outcome === "locked", injectedPhase);
    } finally {
      rmSync(stateDir, { recursive: true, force: true });
    }
  }
});

test("a replacement live recovery lease is never removed after dead-lease capture", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-recovery-replaced-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = deadLease();
  const live = Buffer.from(`${JSON.stringify({ schema_version: 1, pid: process.pid, token: "live-reclaimer", acquired_at: new Date().toISOString() })}\n`);
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "prepare", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => error.code === "TEST_CRASH",
    );
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    const claimPath = path.join(stateDir, "lock-history", retired, "recovery.lock");
    writeFileSync(claimPath, `${JSON.stringify({ schema_version: 1, pid: 2147483647, token: "dead-reclaimer", acquired_at: "2026-09-04T00:00:00.000Z" })}\n`);

    assert.throws(
      () => withGoalLock(stateDir, "recover", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_legacy_recovery_claim_captured") {
            unlinkSync(claimPath);
            writeFileSync(claimPath, live);
          }
        },
      }),
      (error) => error.code === "GOAL_LOCKED",
    );
    assert.deepEqual(readFileSync(claimPath), live);
    assert.deepEqual(JSON.parse(readFileSync(lockPath, "utf8")), stale);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("repeated concurrent stale retirement returns only stable lock outcomes", async () => {
  for (let round = 0; round < 12; round += 1) {
    const stateDir = mkdtempSync(path.join(tmpdir(), `goal-stale-stress-${round}-`));
    try {
      writeFileSync(path.join(stateDir, "goal.lock"), `${JSON.stringify(deadLease(`stress-${round}`))}\n`);
      const results = await Promise.all(Array.from({ length: 6 }, () => runContender(stateDir, 30)));
      assert.equal(results.filter((entry) => entry.ok).length, 1, `round ${round}`);
      assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"), `round ${round}`);
    } finally {
      rmSync(stateDir, { recursive: true, force: true });
    }
  }
});

test("a newly published lock is withdrawn when a retirement barrier appears concurrently", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-retirement-barrier-race-"));
  let callbackEntered = false;
  try {
    assert.throws(
      () => withGoalLock(stateDir, "race", () => { callbackEntered = true; }, {
        faultInjector(phase) {
          if (phase === "after_goal_lock_published") {
            mkdirSync(path.join(stateDir, "lock-history", `goal-lock-stale-2147483647-${"0".repeat(64)}`), { recursive: true });
          }
        },
      }),
      (error) => error.code === "GOAL_LOCKED",
    );
    assert.equal(callbackEntered, false);
    assert.equal(existsSync(path.join(stateDir, "goal.lock")), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});
