import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  HEADROOM_BYTES,
  MAX_OUTPUT_BYTES,
  RELOCATE_ENV,
  DEFAULT_OUTPUT_BYTES,
  assertScratchSuitable,
  copySourceTree,
  describeEnvironment,
  filesystemFacts,
  gitHead,
  isDerivedPath,
  measureOutputBytes,
  mountEntries,
  publishOutput,
  relocationRequested,
  requiredScratchBytes,
  runRelocatedBuild,
  scratchEnvironment,
  selectScratchWorkspace,
  summarizeTree,
} from "./build-storage.mjs";

const silent = () => {};

function tempRoot(label) {
  return fs.mkdtempSync(path.join(os.tmpdir(), `pcr-${label}-`));
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function git(args, cwd) {
  return execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function commit(cwd, message) {
  git(["add", "-A"], cwd);
  git(
    ["-c", "user.email=fixture@example.invalid", "-c", "user.name=Fixture", "commit", "-m", message],
    cwd,
  );
  return git(["rev-parse", "HEAD"], cwd);
}

/**
 * A real repository with a real linked worktree, so `.git` is a file rather than a directory —
 * the shape the provider clone and every local task worktree actually has.
 */
function worktreeFixture() {
  const base = tempRoot("fixture");
  const main = path.join(base, "main");
  fs.mkdirSync(main, { recursive: true });
  git(["init", "--quiet", "."], main);
  write(path.join(main, "library", "catalog.yaml"), "schema_version: 1\n");
  write(path.join(main, "packages", "pcr-docs", "package.json"), '{"name":"fixture"}\n');
  git(["add", "-A"], main);
  const head = commit(main, "fixture");
  const worktree = path.join(base, "worktree");
  git(["worktree", "add", "--quiet", "--detach", worktree, head], main);
  return { base, main, worktree, head };
}

function fakeFacts(overrides = {}) {
  return {
    path: "path" in overrides ? overrides.path : "/scratch",
    device: "device" in overrides ? overrides.device : "1",
    mountPoint: "mountPoint" in overrides ? overrides.mountPoint : "/scratch",
    fileSystemType: "fileSystemType" in overrides ? overrides.fileSystemType : "ext4",
    availableBytes: "availableBytes" in overrides ? overrides.availableBytes : 100 * 1024 ** 3,
    totalBytes: "totalBytes" in overrides ? overrides.totalBytes : 200 * 1024 ** 3,
  };
}

/* ------------------------------------------------------------------ derived paths */

test("only derived build output is excluded from the copy", () => {
  for (const derived of [
    "packages/pcr-docs/.next",
    "packages/pcr-docs/.next/cache/x",
    "packages/pcr-docs/out",
    "packages/pcr-docs/out/index.html",
    "packages/pcr-docs/.generated",
    "packages/pcr-docs/.generated/site.json",
    "packages/pcr-docs/public/generated/search/x.json",
    "packages/pcr-docs/.generated-stage-ab12",
    ".edgeone",
    ".edgeone/assets/index.html",
  ])
    assert.equal(isDerivedPath(derived), true, derived);
  for (const kept of [
    "library/catalog.yaml",
    "packages/pcr-docs/app/page.tsx",
    "packages/pcr-docs/public/logo-light.svg",
    "packages/pcr-docs/node_modules/next/package.json",
    ".git",
    "node_modules/.bin/next",
  ])
    assert.equal(isDerivedPath(kept), false, kept);
});

/* ------------------------------------------------------------------ decision */

test("relocation is requested only for a memory-backed checkout or an explicit opt-in", () => {
  const disk = fakeFacts({ fileSystemType: "ext4", path: "/work/repo" });
  const shm = fakeFacts({ fileSystemType: "tmpfs", path: "/dev/shm/repo" });

  assert.deepEqual(relocationRequested({ repoRoot: "/work/repo", env: {}, facts: () => disk }), {
    relocate: false,
    forced: false,
    reason: "ordinary-checkout",
    facts: disk,
  });
  assert.equal(
    relocationRequested({ repoRoot: "/dev/shm/repo", env: {}, facts: () => shm }).reason,
    "memory-backed-checkout",
  );
  assert.equal(
    relocationRequested({ repoRoot: "/work/repo", env: { [RELOCATE_ENV]: "1" }, facts: () => disk })
      .forced,
    true,
  );
  assert.equal(
    relocationRequested({
      repoRoot: "/dev/shm/repo",
      env: { PCR_BUILD_IN_SCRATCH: "1" },
      facts: () => shm,
    }).relocate,
    false,
  );
});

test("a shared-memory path is memory-backed even without a mount table", () => {
  const unproven = fakeFacts({ fileSystemType: null, path: "/dev/shm/repo" });
  assert.equal(
    relocationRequested({ repoRoot: "/dev/shm/repo", env: {}, facts: () => unproven }).relocate,
    true,
  );
});

/* ------------------------------------------------------------------ filesystem facts */

test("mount entries decode kernel escapes and the longest mount wins", () => {
  const mounts = mountEntries({
    read: () =>
      [
        "/dev/sda1 / ext4 rw 0 0",
        "tmpfs /dev/shm tmpfs rw,nosuid 0 0",
        "/dev/sdb1 /mnt/data\\040disk ext4 rw 0 0",
      ].join("\n"),
  });
  assert.deepEqual(mounts[1], { source: "tmpfs", mountPoint: "/dev/shm", fileSystemType: "tmpfs" });
  assert.equal(mounts[2].mountPoint, "/mnt/data disk");

  const scratch = tempRoot("facts");
  const facts = filesystemFacts(scratch, { mounts });
  assert.equal(facts.fileSystemType, "ext4");
  assert.equal(facts.mountPoint, "/");
  assert.ok(facts.availableBytes > 0 && facts.totalBytes > 0);
  assert.equal(typeof facts.device, "string");
  fs.rmSync(scratch, { recursive: true, force: true });
});

/* ------------------------------------------------------------------ capacity */

test("required scratch space scales with the copy and the measured output", () => {
  const copyBytes = 700 * 1024 ** 2;
  const withDefault = requiredScratchBytes({ copyBytes, outputBytes: 0 });
  assert.ok(withDefault >= (copyBytes + DEFAULT_OUTPUT_BYTES) * 1.25);
  const measured = requiredScratchBytes({ copyBytes, outputBytes: 3 * 1024 ** 3 });
  assert.equal(measured, withDefault, "partial prior output cannot lower the safe estimate");
  assert.ok(requiredScratchBytes({ copyBytes, outputBytes: 5 * 1024 ** 3 }) > withDefault);
});

test("an insufficient or unusable scratch is refused with diagnostics", () => {
  const constraint = fakeFacts({ path: "/dev/shm/repo", device: "7", fileSystemType: "tmpfs" });
  const requiredBytes = 5 * 1024 ** 3;

  assert.throws(
    () =>
      assertScratchSuitable({
        constraint,
        scratch: fakeFacts({ availableBytes: 1024, device: "8" }),
        requiredBytes,
        warn: silent,
      }),
    /insufficient capacity: needs 5368709120 bytes/u,
  );
  assert.throws(
    () =>
      assertScratchSuitable({
        constraint,
        scratch: fakeFacts({ device: "8", fileSystemType: "tmpfs", path: "/tmp" }),
        requiredBytes,
        warn: silent,
      }),
    /memory-backed/u,
  );
  assert.throws(
    () =>
      assertScratchSuitable({
        constraint,
        scratch: fakeFacts({ device: "7", fileSystemType: "ext4" }),
        requiredBytes,
        warn: silent,
      }),
    /same constrained filesystem/u,
  );
  assert.throws(
    () =>
      assertScratchSuitable({
        constraint,
        scratch: fakeFacts({ device: "8", fileSystemType: null }),
        requiredBytes,
        warn: silent,
      }),
    /could not be proven/u,
  );
  const warnings = [];
  const suitable = assertScratchSuitable({
    constraint,
    scratch: fakeFacts({ device: "8", fileSystemType: null }),
    requiredBytes,
    forced: true,
    warn: (message) => warnings.push(message),
  });
  assert.equal(suitable.sameDevice, false);
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /unproven/u);
});

/* ------------------------------------------------------------------ copy fidelity */

test("the copy keeps a worktree git identity and leaves derived output behind", () => {
  const fixture = worktreeFixture();
  try {
    write(path.join(fixture.worktree, "packages/pcr-docs/.next/server/app/x.html"), "<html></html>");
    write(path.join(fixture.worktree, "packages/pcr-docs/out/old.html"), "<html>old</html>");
    write(path.join(fixture.worktree, "packages/pcr-docs/.generated/site.json"), "{}");
    write(path.join(fixture.worktree, "packages/pcr-docs/public/generated/raw/x.md"), "raw");
    write(path.join(fixture.worktree, ".edgeone/assets/index.html"), "provider");
    fs.mkdirSync(path.join(fixture.worktree, "packages/pcr-docs/node_modules/.bin"), {
      recursive: true,
    });
    fs.symlinkSync(
      "../next/dist/bin/next",
      path.join(fixture.worktree, "packages/pcr-docs/node_modules/.bin/next"),
    );

    const scratch = tempRoot("copy");
    const target = path.join(scratch, "repo");
    const copied = copySourceTree({ from: fixture.worktree, to: target });

    assert.equal(fs.lstatSync(path.join(target, ".git")).isFile(), true, ".git stays a file");
    assert.equal(gitHead(target), fixture.head, "the copy resolves the same commit");
    assert.equal(
      fs.lstatSync(path.join(target, "packages/pcr-docs/node_modules/.bin/next")).isSymbolicLink(),
      true,
      "dependency symlinks are preserved, not dereferenced",
    );
    for (const derived of [
      "packages/pcr-docs/.next",
      "packages/pcr-docs/out",
      "packages/pcr-docs/.generated",
      "packages/pcr-docs/public/generated",
      ".edgeone",
    ])
      assert.equal(fs.existsSync(path.join(target, derived)), false, derived);
    assert.equal(fs.existsSync(path.join(target, "library/catalog.yaml")), true);
    const expected = summarizeTree(fixture.worktree, isDerivedPath);
    assert.deepEqual(
      { files: copied.files, bytes: copied.bytes, links: copied.links },
      expected,
    );
    assert.deepEqual(copied.links, ["packages/pcr-docs/node_modules/.bin/next"]);
    assert.equal(
      fs.readlinkSync(path.join(target, "packages/pcr-docs/node_modules/.bin/next")),
      "../next/dist/bin/next",
      "the link target is reproduced verbatim, not rewritten to an absolute path",
    );
    fs.rmSync(scratch, { recursive: true, force: true });
  } finally {
    fs.rmSync(fixture.base, { recursive: true, force: true });
  }
});

test("an incomplete copy is refused rather than built on", () => {
  const fixture = worktreeFixture();
  try {
    const scratch = tempRoot("copyfail");
    const target = path.join(scratch, "repo");
    let skipped = false;
    assert.throws(
      () =>
        copySourceTree({
          from: fixture.worktree,
          to: target,
          // A copy that silently drops a file must not become a build input.
          cp: (source, destination, options) =>
            fs.cpSync(source, destination, {
              ...options,
              filter: (candidate) => {
                if (!options.filter(candidate)) return false;
                if (!skipped && candidate.endsWith("catalog.yaml")) {
                  skipped = true;
                  return false;
                }
                return true;
              },
            }),
        }),
      /Source copy is incomplete/u,
    );
    fs.rmSync(scratch, { recursive: true, force: true });
  } finally {
    fs.rmSync(fixture.base, { recursive: true, force: true });
  }
});

/* ------------------------------------------------------------------ publishing */

function scratchAppWithExport(root, files) {
  const app = path.join(root, "repo", "packages/pcr-docs");
  for (const [name, content] of Object.entries(files)) write(path.join(app, "out", name), content);
  return app;
}

test("publishing replaces the export and removes its own staging directories", () => {
  const root = tempRoot("publish");
  try {
    const app = path.join(root, "app");
    write(path.join(app, "out/index.html"), "OLD");
    const scratchApp = scratchAppWithExport(path.join(root, "scratch"), { "index.html": "NEW" });
    const published = publishOutput({ app, scratchApp, token: "test1" });
    assert.deepEqual(published, { files: 1, bytes: 3, staged: true });
    assert.equal(fs.readFileSync(path.join(app, "out/index.html"), "utf8"), "NEW");
    assert.deepEqual(fs.readdirSync(app).sort(), ["out"]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("publishing refuses symlinked exports and insufficient destination space", () => {
  const root = tempRoot("publish-guard");
  try {
    const app = path.join(root, "app");
    fs.mkdirSync(app, { recursive: true });
    const elsewhere = path.join(root, "elsewhere");
    write(path.join(elsewhere, "index.html"), "OLD");
    fs.symlinkSync(elsewhere, path.join(app, "out"));
    const scratchApp = scratchAppWithExport(path.join(root, "scratch"), { "index.html": "NEW" });
    assert.throws(() => publishOutput({ app, scratchApp, token: "test2" }), /symlinked export/u);

    fs.rmSync(path.join(app, "out"));
    fs.symlinkSync(path.join(root, "missing"), path.join(app, "out"));
    assert.throws(() => publishOutput({ app, scratchApp, token: "dangling" }), /symlinked export/u);
    fs.rmSync(path.join(app, "out"));
    write(path.join(app, "out/index.html"), "OLD");
    assert.throws(
      () => publishOutput({ app, scratchApp, token: "test3", freeBytes: 1 }),
      /cannot stage the export/u,
    );
    assert.equal(fs.readFileSync(path.join(app, "out/index.html"), "utf8"), "OLD");

    fs.symlinkSync("../elsewhere/index.html", path.join(scratchApp, "out/link.html"));
    assert.throws(() => publishOutput({ app, scratchApp, token: "test4" }), /contains a symlink/u);
    assert.equal(fs.readFileSync(path.join(app, "out/index.html"), "utf8"), "OLD");
    assert.deepEqual(fs.readdirSync(app).sort(), ["out"]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("an oversized export is refused before anything is swapped", () => {
  const root = tempRoot("publish-budget");
  try {
    const app = path.join(root, "app");
    write(path.join(app, "out/index.html"), "OLD");
    const scratchApp = scratchAppWithExport(path.join(root, "scratch"), { "index.html": "NEW" });
    const exportBytes = summarizeTree(path.join(scratchApp, "out")).bytes;
    assert.ok(exportBytes < MAX_OUTPUT_BYTES);
    assert.throws(
      () =>
        publishOutput({
          app,
          scratchApp,
          token: "test5",
          freeBytes: exportBytes + HEADROOM_BYTES - 1,
        }),
      /cannot stage the export/u,
    );
    assert.equal(fs.readFileSync(path.join(app, "out/index.html"), "utf8"), "OLD");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

/* ------------------------------------------------------------------ environment */

test("the scratch environment preserves the verification marker and never logs values", () => {
  const env = {
    PCR_GOOGLE_SITE_VERIFICATION: "marker-value",
    PCR_BAIDU_SITE_VERIFICATION: "baidu-marker-value",
    SOME_TOKEN: "super-secret-value",
  };
  const forwarded = scratchEnvironment(env);
  assert.equal(forwarded.PCR_GOOGLE_SITE_VERIFICATION, "marker-value");
  assert.equal(forwarded.PCR_BAIDU_SITE_VERIFICATION, "baidu-marker-value");
  assert.equal(forwarded.SOME_TOKEN, "super-secret-value");
  assert.equal(forwarded.PCR_BUILD_IN_SCRATCH, "1");
  assert.equal(forwarded.NEXT_TELEMETRY_DISABLED, "1");
  const described = JSON.stringify(describeEnvironment(env));
  assert.match(described, /PCR_GOOGLE_SITE_VERIFICATION":"set/u);
  assert.match(described, /PCR_BAIDU_SITE_VERIFICATION":"set/u);
  assert.doesNotMatch(described, /marker-value|super-secret-value/u);
  assert.equal(describeEnvironment({}).PCR_GOOGLE_SITE_VERIFICATION, "absent");
  assert.equal(describeEnvironment({}).PCR_BAIDU_SITE_VERIFICATION, "absent");
});

/* ------------------------------------------------------------------ orchestration */

/** Everything the real pipeline leaves behind that ties the export to a commit. */
function writePipelineEvidence(cwd, commit, content = "NEW-EXPORT") {
  write(path.join(cwd, "out/index.html"), content);
  write(path.join(cwd, ".generated/site.json"), JSON.stringify({ sourceCommit: commit }));
  write(path.join(cwd, "out/generated/version.json"), JSON.stringify({ sourceCommit: commit }));
}

function orchestrationFixture() {
  const fixture = worktreeFixture();
  const app = path.join(fixture.worktree, "packages/pcr-docs");
  write(path.join(app, "out/index.html"), "PREVIOUS-GOOD");
  return { ...fixture, app };
}

test("a relocated build publishes the verified export and cleans up its scratch", async () => {
  const fixture = orchestrationFixture();
  const scratchParent = tempRoot("scratchparent");
  try {
    let observed = null;
    const result = await runRelocatedBuild({
      app: fixture.app,
      repoRoot: fixture.worktree,
      env: { [RELOCATE_ENV]: "1", PCR_GOOGLE_SITE_VERIFICATION: "marker" },
      scratchParent,
      log: silent,
      token: "run1",
      runPipeline: async ({ cwd, env }) => {
        observed = { cwd, env };
        writePipelineEvidence(cwd, fixture.head);
      },
    });

    assert.equal(result.relocated, true);
    assert.equal(result.sourceCommit, fixture.head);
    assert.equal(result.published.files, 2);
    assert.equal(observed.cwd.startsWith(fs.realpathSync(scratchParent) + path.sep), true, "the pipeline ran on scratch");
    assert.equal(observed.env.PCR_BUILD_IN_SCRATCH, "1", "recursion is disabled in the child");
    assert.equal(observed.env.PCR_GOOGLE_SITE_VERIFICATION, "marker");
    assert.equal(fs.readFileSync(path.join(fixture.app, "out/index.html"), "utf8"), "NEW-EXPORT");
    assert.deepEqual(
      fs.readdirSync(fixture.app).filter((name) => name.startsWith("out.")),
      [],
      "no staging leftovers",
    );
    assert.deepEqual(fs.readdirSync(scratchParent), [], "scratch removed");
  } finally {
    fs.rmSync(fixture.base, { recursive: true, force: true });
    fs.rmSync(scratchParent, { recursive: true, force: true });
  }
});

test("a failed build retains the previous export and removes only its own scratch", async () => {
  const fixture = orchestrationFixture();
  const scratchParent = tempRoot("scratchparent");
  try {
    await assert.rejects(
      runRelocatedBuild({
        app: fixture.app,
        repoRoot: fixture.worktree,
        env: { [RELOCATE_ENV]: "1" },
        scratchParent,
        log: silent,
        token: "run2",
        runPipeline: async ({ cwd }) => {
          write(path.join(cwd, "out/index.html"), "PARTIAL");
          throw new Error("pipeline exploded");
        },
      }),
      /pipeline exploded/u,
    );
    assert.equal(fs.readFileSync(path.join(fixture.app, "out/index.html"), "utf8"), "PREVIOUS-GOOD");
    assert.deepEqual(fs.readdirSync(fixture.app).filter((name) => name.startsWith("out.")), []);
    assert.deepEqual(fs.readdirSync(scratchParent), []);
  } finally {
    fs.rmSync(fixture.base, { recursive: true, force: true });
    fs.rmSync(scratchParent, { recursive: true, force: true });
  }
});

test("a source commit that moves mid-build blocks publication", async () => {
  const fixture = orchestrationFixture();
  const scratchParent = tempRoot("scratchparent");
  try {
    await assert.rejects(
      runRelocatedBuild({
        app: fixture.app,
        repoRoot: fixture.worktree,
        env: { [RELOCATE_ENV]: "1" },
        scratchParent,
        log: silent,
        token: "run3",
        runPipeline: async ({ cwd }) => {
          writePipelineEvidence(cwd, fixture.head);
          // A concurrent commit lands on the source branch while the export is being built.
          write(path.join(fixture.worktree, "library/late.yaml"), "late: true\n");
          commit(fixture.worktree, "concurrent commit");
        },
      }),
      // The scratch copy resolves through the same object database, so the re-check after the
      // pipeline sees the concurrent commit and refuses to publish.
      /moved during the build/u,
    );
    assert.equal(fs.readFileSync(path.join(fixture.app, "out/index.html"), "utf8"), "PREVIOUS-GOOD");
    assert.deepEqual(fs.readdirSync(scratchParent), []);
  } finally {
    fs.rmSync(fixture.base, { recursive: true, force: true });
    fs.rmSync(scratchParent, { recursive: true, force: true });
  }
});

test("an export recording a different commit than the checkout blocks publication", async () => {
  const fixture = orchestrationFixture();
  const scratchParent = tempRoot("scratchparent");
  try {
    await assert.rejects(
      runRelocatedBuild({
        app: fixture.app,
        repoRoot: fixture.worktree,
        env: { [RELOCATE_ENV]: "1" },
        scratchParent,
        log: silent,
        token: "run4",
        runPipeline: async ({ cwd }) => {
          writePipelineEvidence(cwd, "0".repeat(40));
        },
      }),
      /Generated manifest records commit/u,
    );
    assert.equal(fs.readFileSync(path.join(fixture.app, "out/index.html"), "utf8"), "PREVIOUS-GOOD");
    assert.deepEqual(fs.readdirSync(scratchParent), []);
  } finally {
    fs.rmSync(fixture.base, { recursive: true, force: true });
    fs.rmSync(scratchParent, { recursive: true, force: true });
  }
});

test("publication requires the generated identity evidence to be present and matching", async () => {
  for (const [label, prepare, expected] of [
    [
      "missing manifest",
      (cwd, commit) => {
        write(path.join(cwd, "out/index.html"), "NEW");
        write(path.join(cwd, "out/generated/version.json"), JSON.stringify({ sourceCommit: commit }));
      },
      /Generation manifest .* is missing/u,
    ],
    [
      "missing version document",
      (cwd, commit) => {
        write(path.join(cwd, "out/index.html"), "NEW");
        write(path.join(cwd, ".generated/site.json"), JSON.stringify({ sourceCommit: commit }));
      },
      /version document generated\/version.json is missing/u,
    ],
    [
      "version document from another commit",
      (cwd, commit) => {
        write(path.join(cwd, "out/index.html"), "NEW");
        write(path.join(cwd, ".generated/site.json"), JSON.stringify({ sourceCommit: commit }));
        write(path.join(cwd, "out/generated/version.json"), JSON.stringify({ sourceCommit: "1".repeat(40) }));
      },
      /Export version document records commit/u,
    ],
  ]) {
    const fixture = orchestrationFixture();
    const scratchParent = tempRoot("scratchparent");
    try {
      await assert.rejects(
        runRelocatedBuild({
          app: fixture.app,
          repoRoot: fixture.worktree,
          env: { [RELOCATE_ENV]: "1" },
          scratchParent,
          log: silent,
          token: "evidence",
          runPipeline: async ({ cwd }) => prepare(cwd, fixture.head),
        }),
        expected,
        label,
      );
      assert.equal(
        fs.readFileSync(path.join(fixture.app, "out/index.html"), "utf8"),
        "PREVIOUS-GOOD",
        label,
      );
      assert.deepEqual(fs.readdirSync(scratchParent), [], label);
    } finally {
      fs.rmSync(fixture.base, { recursive: true, force: true });
      fs.rmSync(scratchParent, { recursive: true, force: true });
    }
  }
});

test("the last budget gate runs after staging and before the swap", () => {
  const root = tempRoot("preswap");
  try {
    const app = path.join(root, "app");
    write(path.join(app, "out/index.html"), "PREVIOUS-GOOD");
    const scratchApp = scratchAppWithExport(path.join(root, "scratch"), {
      "index.html": "NEW-EXPORT",
      "version.json": "{}",
    });
    const order = [];
    assert.throws(
      () =>
        publishOutput({
          app,
          scratchApp,
          token: "preswap1",
          beforeSwap: () => {
            order.push(fs.existsSync(path.join(app, "out.stage-preswap1")) ? "staged" : "unstaged");
            throw new Error("budget exceeded before the swap");
          },
        }),
      /budget exceeded before the swap/u,
    );
    assert.deepEqual(order, ["staged"], "the gate runs on the staged export");
    assert.equal(fs.readFileSync(path.join(app, "out/index.html"), "utf8"), "PREVIOUS-GOOD");
    assert.deepEqual(fs.readdirSync(app).sort(), ["out"], "staging cleaned up");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("a scratch that cannot hold the build stops before anything is copied", async () => {
  const fixture = orchestrationFixture();
  const scratchParent = tempRoot("scratchparent");
  try {
    let ran = false;
    await assert.rejects(
      runRelocatedBuild({
        app: fixture.app,
        repoRoot: fixture.worktree,
        env: {},
        scratchParent,
        log: silent,
        token: "run5",
        facts: (target) =>
          target === fixture.worktree
            ? fakeFacts({ path: "/dev/shm/repo", device: "7", fileSystemType: "tmpfs", availableBytes: 1024 })
            : fakeFacts({ device: "8", fileSystemType: "ext4", availableBytes: 1024 }),
        runPipeline: async () => {
          ran = true;
        },
      }),
      /insufficient capacity/u,
    );
    assert.equal(ran, false, "the pipeline never starts");
    assert.deepEqual(fs.readdirSync(scratchParent), []);
  } finally {
    fs.rmSync(fixture.base, { recursive: true, force: true });
    fs.rmSync(scratchParent, { recursive: true, force: true });
  }
});

test("previous generated directories are measured without assuming a complete build", () => {
  const root = tempRoot("measure");
  try {
    const app = path.join(root, "packages/pcr-docs");
    write(path.join(app, "out/index.html"), "x".repeat(2048));
    write(path.join(app, ".generated/site.json"), "y".repeat(1024));
    write(path.join(app, ".next/server/app/index.html"), "z".repeat(512));
    assert.equal(measureOutputBytes(app), 2048 + 1024 + 512);
    assert.equal(measureOutputBytes(path.join(root, "absent")), 0);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});


test("a scratch parent inside the repository is refused before recursive copying", async () => {
  const fixture = orchestrationFixture();
  try {
    await assert.rejects(runRelocatedBuild({
      app: fixture.app, repoRoot: fixture.worktree,
      env: { [RELOCATE_ENV]: "1" }, scratchParent: fixture.worktree,
      runPipeline: async () => assert.fail("must not build inside source"), log: silent,
    }), /outside the source repository/u);
    assert.equal(fs.readFileSync(path.join(fixture.app, "out/index.html"), "utf8"), "PREVIOUS-GOOD");
    assert.equal(fs.readdirSync(fixture.worktree).some(name => name.startsWith("pcr-build-")), false);
  } finally { fs.rmSync(fixture.base, { recursive: true, force: true }); }
});


test("interrupted output stages are excluded without deleting their owner's files", () => {
  const root = tempRoot("stale-output-stage");
  try {
    const source = path.join(root, "source");
    write(path.join(source, "library/source.md"), "SOURCE");
    for (const name of ["out.stage-interrupted", "out.prev-interrupted"]) {
      write(path.join(source, "packages/pcr-docs", name, "index.html"), "PREVIOUS-STAGE");
    }
    const target = path.join(root, "copy");
    copySourceTree({ from: source, to: target });
    assert.equal(fs.readFileSync(path.join(target, "library/source.md"), "utf8"), "SOURCE");
    for (const name of ["out.stage-interrupted", "out.prev-interrupted"]) {
      assert.equal(fs.existsSync(path.join(target, "packages/pcr-docs", name)), false);
      assert.equal(fs.readFileSync(path.join(source, "packages/pcr-docs", name, "index.html"), "utf8"), "PREVIOUS-STAGE");
    }
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});


test("scratch selection skips constrained and unusable parents before copying", () => {
  const root = fs.realpathSync(tempRoot("candidate-selection"));
  try {
    const repo = path.join(root, "source");
    const memory = path.join(root, "memory");
    const disk = path.join(root, "disk");
    for (const dir of [repo, memory, disk]) fs.mkdirSync(dir);
    const file = path.join(root, "regular-file"); fs.writeFileSync(file, "keep");
    const facts = (target) => fakeFacts({ path: target, device: "8",
      fileSystemType: target.startsWith(memory) ? "tmpfs" : "ext4" });
    const chosen = selectScratchWorkspace({ repoRoot: repo, requiredBytes: 1000,
      constraint: fakeFacts({ device: "7", fileSystemType: "tmpfs" }), facts, log: silent,
      candidates: [path.join(root, "missing"), memory, file, disk] });
    assert.equal(chosen.scratchBase, disk);
    assert.equal(fs.statSync(chosen.scratchRoot).isDirectory(), true);
    assert.deepEqual(fs.readdirSync(memory), []);
    assert.equal(fs.readFileSync(file, "utf8"), "keep");
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});

test("explicit scratch override is honored without silently using a fallback", () => {
  const root = fs.realpathSync(tempRoot("candidate-override"));
  try {
    const repo = path.join(root, "source"), disk = path.join(root, "disk");
    fs.mkdirSync(repo); fs.mkdirSync(disk);
    const options = { repoRoot: repo, requiredBytes: 1000, candidates: [disk], log: silent,
      constraint: fakeFacts({ device: "7", fileSystemType: "tmpfs" }),
      facts: (target) => fakeFacts({ path: target, device: "8", fileSystemType: "ext4" }) };
    assert.throws(() => selectScratchWorkspace({ ...options,
      env: { PCR_BUILD_SCRATCH_DIR: path.join(root, "missing") } }), /No usable disk-backed/u);
    assert.deepEqual(fs.readdirSync(disk), []);
    assert.throws(() => selectScratchWorkspace({ ...options,
      env: { PCR_BUILD_SCRATCH_DIR: "" } }), /non-empty/u);
    const chosen = selectScratchWorkspace({ ...options, candidates: [], env: { PCR_BUILD_SCRATCH_DIR: disk } });
    assert.equal(chosen.scratchBase, disk);
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});

test("a candidate that becomes unsuitable after its write probe leaves no scratch behind", () => {
  const root = fs.realpathSync(tempRoot("candidate-probe"));
  try {
    const repo = path.join(root, "source"), candidate = path.join(root, "candidate");
    fs.mkdirSync(repo); fs.mkdirSync(candidate);
    assert.throws(() => selectScratchWorkspace({ repoRoot: repo, requiredBytes: 1000,
      candidates: [candidate], log: silent,
      constraint: fakeFacts({ device: "7", fileSystemType: "tmpfs" }),
      facts: (target) => fakeFacts({ path: target, device: "8", fileSystemType: "ext4",
        availableBytes: target === candidate ? 1e9 : 0 }) }), /insufficient capacity/u);
    assert.deepEqual(fs.readdirSync(candidate), []);
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});

/* ------------------------------------------------------------------ provider assets */

/** A provider-shaped root: the repository whose `.edgeone` the platform consumes. */
function providerFixture(outFiles) {
  const root = tempRoot("provider");
  const app = path.join(root, "app");
  write(path.join(app, "out/index.html"), "PREVIOUS-GOOD");
  const scratchApp = scratchAppWithExport(path.join(root, "scratch"), outFiles);
  return { root, app, scratchApp, providerRoot: root };
}

function inode(file) {
  const stats = fs.lstatSync(file);
  return { dev: stats.dev, ino: stats.ino, links: stats.nlink, bytes: stats.size };
}

test("provider assets are hard links of the published export, not a second copy", () => {
  const fixture = providerFixture({ "index.html": "PAGE", "topics/a.json": "TOPIC" });
  try {
    const published = publishOutput({
      app: fixture.app,
      scratchApp: fixture.scratchApp,
      token: "assets1",
      providerRoot: fixture.providerRoot,
    });
    // "PAGE" + "TOPIC": the stats are the linked files themselves, not a directory listing.
    assert.deepEqual(published.providerAssets, { mode: "hardlink", files: 2, bytes: 9 });

    for (const relative of ["index.html", "topics/a.json"]) {
      const exported = path.join(fixture.app, "out", relative);
      const asset = path.join(fixture.providerRoot, ".edgeone/assets", relative);
      assert.equal(fs.lstatSync(asset).isFile(), true, relative);
      const [from, to] = [inode(exported), inode(asset)];
      assert.deepEqual(to, { ...to, dev: from.dev, ino: from.ino }, relative);
      assert.ok(to.links >= 2, "the asset shares its inode with the export");
      assert.equal(fs.readFileSync(asset, "utf8"), fs.readFileSync(exported, "utf8"));
    }
    assert.deepEqual(
      fs.readdirSync(path.join(fixture.providerRoot, ".edgeone")).filter((n) => n.startsWith(".")),
      [],
      "no assets stage is left behind",
    );
  } finally {
    fs.rmSync(fixture.root, { recursive: true, force: true });
  }
});

test("existing or symlinked provider state is refused without touching the export", () => {
  for (const [label, prepare, expected] of [
    [
      "existing assets",
      (root) => write(path.join(root, ".edgeone/assets/index.html"), "SOMEONE-ELSE"),
      /assets this build did not create/u,
    ],
    [
      "symlinked .edgeone",
      (root) => {
        fs.mkdirSync(path.join(root, "elsewhere"), { recursive: true });
        fs.symlinkSync(path.join(root, "elsewhere"), path.join(root, ".edgeone"));
      },
      /symlinked directory/u,
    ],
  ]) {
    const fixture = providerFixture({ "index.html": "PAGE" });
    try {
      prepare(fixture.root);
      assert.throws(
        () =>
          publishOutput({
            app: fixture.app,
            scratchApp: fixture.scratchApp,
            token: "assets2",
            providerRoot: fixture.providerRoot,
          }),
        expected,
        label,
      );
      assert.equal(
        fs.readFileSync(path.join(fixture.app, "out/index.html"), "utf8"),
        "PREVIOUS-GOOD",
        label,
      );
      assert.deepEqual(fs.readdirSync(fixture.app).sort(), ["out"], label);
    } finally {
      fs.rmSync(fixture.root, { recursive: true, force: true });
    }
  }
});

test("a budget failure after asset staging leaves export and provider assets untouched", () => {
  const fixture = providerFixture({ "index.html": "PAGE" });
  try {
    assert.throws(
      () =>
        publishOutput({
          app: fixture.app,
          scratchApp: fixture.scratchApp,
          token: "assets3",
          providerRoot: fixture.providerRoot,
          beforeSwap: () => {
            throw new Error("budget exceeded");
          },
        }),
      /budget exceeded/u,
    );
    assert.equal(fs.readFileSync(path.join(fixture.app, "out/index.html"), "utf8"), "PREVIOUS-GOOD");
    assert.equal(fs.existsSync(path.join(fixture.providerRoot, ".edgeone/assets")), false);
    assert.deepEqual(fs.readdirSync(path.join(fixture.providerRoot, ".edgeone")), []);
    assert.deepEqual(fs.readdirSync(fixture.app).sort(), ["out"]);
  } finally {
    fs.rmSync(fixture.root, { recursive: true, force: true });
  }
});

test("a rejected assets rename rolls the export back, or leaves a first build unpublished", () => {
  for (const hadPrevious of [true, false]) {
    const fixture = providerFixture({ "index.html": "PAGE" });
    try {
      if (!hadPrevious) fs.rmSync(path.join(fixture.app, "out"), { recursive: true, force: true });
      const refusing = (from, to) => {
        if (path.basename(to) === "assets") throw new Error("assets rename refused");
        return fs.renameSync(from, to);
      };
      assert.throws(
        () =>
          publishOutput({
            app: fixture.app,
            scratchApp: fixture.scratchApp,
            token: hadPrevious ? "assets4" : "assets5",
            providerRoot: fixture.providerRoot,
            rename: refusing,
          }),
        /assets rename refused/u,
      );
      if (hadPrevious) {
        assert.equal(fs.readFileSync(path.join(fixture.app, "out/index.html"), "utf8"), "PREVIOUS-GOOD");
        assert.deepEqual(fs.readdirSync(fixture.app).sort(), ["out"]);
      } else {
        assert.deepEqual(fs.readdirSync(fixture.app), [], "a first build publishes nothing");
      }
      assert.equal(fs.existsSync(path.join(fixture.providerRoot, ".edgeone/assets")), false);
      assert.deepEqual(fs.readdirSync(path.join(fixture.providerRoot, ".edgeone")), []);
    } finally {
      fs.rmSync(fixture.root, { recursive: true, force: true });
    }
  }
});

test("the provider handoff happens for a memory-backed origin or an explicit opt-in only", async () => {
  for (const [label, env, memoryBacked, expectedAssets] of [
    ["opt-in", { [RELOCATE_ENV]: "1", PCR_EDGEONE_PREBUILT_ASSETS: "1" }, false, true],
    ["memory-backed origin", { [RELOCATE_ENV]: "1" }, true, true],
    ["neither", { [RELOCATE_ENV]: "1" }, false, false],
  ]) {
    const fixture = orchestrationFixture();
    const scratchParent = tempRoot("scratchparent");
    try {
      const result = await runRelocatedBuild({
        app: fixture.app,
        repoRoot: fixture.worktree,
        env,
        facts: (target) => memoryBacked && target === fixture.worktree
          ? fakeFacts({ path: target, device: "provider-shm", fileSystemType: "tmpfs" })
          : filesystemFacts(target),
        scratchParent,
        log: silent,
        token: `provider-${label}`,
        runPipeline: async ({ cwd }) => {
          writePipelineEvidence(cwd, fixture.head);
          write(path.join(cwd, "out/topics/a.json"), "TOPIC");
        },
      });
      const assets = path.join(fixture.worktree, ".edgeone/assets");
      assert.equal(fs.existsSync(assets), expectedAssets, label);
      assert.equal(Boolean(result.published.providerAssets), expectedAssets, label);
      if (expectedAssets) {
        const exported = path.join(fixture.app, "out/index.html");
        assert.deepEqual(inode(path.join(assets, "index.html")).ino, inode(exported).ino, label);
      }
    } finally {
      fs.rmSync(fixture.base, { recursive: true, force: true });
      fs.rmSync(scratchParent, { recursive: true, force: true });
    }
  }
});

test("dangling provider targets remain untouched when handoff is refused", () => {
  for (const name of ["assets", ".pcr-assets-stage-dangling"]) {
    const fixture = providerFixture({ "index.html": "PAGE" });
    try {
      const directory = path.join(fixture.providerRoot, ".edgeone");
      fs.mkdirSync(directory, { recursive: true });
      const link = path.join(directory, name), missing = path.join(fixture.root, "missing");
      fs.symlinkSync(missing, link);
      assert.throws(() => publishOutput({ app: fixture.app, scratchApp: fixture.scratchApp,
        token: "dangling", providerRoot: fixture.providerRoot }), /Refusing/u);
      assert.equal(fs.readlinkSync(link), missing);
      assert.equal(fs.readFileSync(path.join(fixture.app, "out/index.html"), "utf8"), "PREVIOUS-GOOD");
    } finally { fs.rmSync(fixture.root, { recursive: true, force: true }); }
  }
});
