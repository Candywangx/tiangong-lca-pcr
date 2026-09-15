import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { randomBytes } from "node:crypto";

/**
 * Build relocation for storage-constrained hosts.
 *
 * The provider clone at `/dev/shm/...` ran out of space while Next copied prerendered HTML from
 * `.next/server/app` into `out/`, because that shared-memory mount has to hold the checkout, the
 * installed dependencies, `.generated`, `public/generated`, `.next` and `out` at the same time.
 * Nothing about the content is wrong; there is simply not enough room on that filesystem.
 *
 * So the ordinary build stays exactly as it is, and relocation happens only when the repository
 * really sits on a memory-backed mount (or when an operator asks for it explicitly to verify this
 * path). The build then runs on a scratch directory on a disk-backed temporary filesystem, and
 * only the validated `out` export is copied back.
 *
 * Every gate that already exists keeps running: this module moves *where* the pipeline runs, it
 * never changes *what* the pipeline checks, and it never publishes an export whose identity or
 * integrity could not be proven.
 */

export const RELOCATE_ENV = "PCR_BUILD_RELOCATE";
export const IN_SCRATCH_ENV = "PCR_BUILD_IN_SCRATCH";

/** Memory-backed filesystem types as reported by the kernel mount table. */
const MEMORY_FILESYSTEMS = new Set(["tmpfs", "ramfs", "devtmpfs", "hugetlbfs", "shm"]);
/** Paths whose contents live in shared memory on Linux regardless of the reported mount type. */
const SHARED_MEMORY_PREFIXES = ["/dev/shm/", "/run/shm/"];

/**
 * Heavy derived directories, relative to the repository root. These are the only things left
 * behind when the source is copied: everything else — including the installed dependencies and a
 * worktree `.git` file — travels with the checkout so the build needs no network and keeps the
 * exact Git identity it started with.
 */
const DERIVED_PATHS = [
  "packages/pcr-docs/.next",
  "packages/pcr-docs/out",
  "packages/pcr-docs/.generated",
  "packages/pcr-docs/public/generated",
];

/** Evidence from the failed provider build: about 3.5 GB of derived output on a fresh run. */
export const DEFAULT_OUTPUT_BYTES = 4 * 1024 ** 3;
const SAFETY_FACTOR = 1.25;
export const HEADROOM_BYTES = 512 * 1024 ** 2;
/** The same provider limits the export gate uses. */
export const MAX_OUTPUT_BYTES = 1_500_000_000;
export const MAX_OUTPUT_FILES = 20_000;

/* ------------------------------------------------------------------ derived paths */

export function isDerivedPath(relative) {
  const normalized = String(relative).split(path.sep).join("/");
  if (normalized === "" || normalized === ".") return false;
  if (DERIVED_PATHS.some((dir) => normalized === dir || normalized.startsWith(dir + "/")))
    return true;
  if (/^packages\/pcr-docs\/out\.(?:stage|prev)-[^/]+(?:\/|$)/u.test(normalized)) return true;
  // Stage directories are created beside the generated root as `.generated-stage-<unique>`.
  return normalized.split("/").some((segment) => segment.startsWith(".generated-stage-"));
}

/* ------------------------------------------------------------------ tree accounting */

/**
 * Exact accounting for a copy set. Symlinks are entries in their own right — counted once, sized by
 * their target string, and listed — because a link that silently becomes a real file, or a
 * different link, is a different tree.
 */
export function summarizeTree(root, excludes = () => false) {
  let files = 0;
  let bytes = 0;
  const links = [];
  const walk = (absolute, relative) => {
    const entries = fs.readdirSync(absolute, { withFileTypes: true }).sort((left, right) =>
      left.name.localeCompare(right.name),
    );
    for (const entry of entries) {
      const childRelative = relative === "" ? entry.name : relative + "/" + entry.name;
      if (excludes(childRelative)) continue;
      const child = path.join(absolute, entry.name);
      const stats = fs.lstatSync(child);
      if (stats.isSymbolicLink()) {
        links.push(childRelative);
        files += 1;
        bytes += stats.size;
        continue;
      }
      if (stats.isDirectory()) walk(child, childRelative);
      else {
        files += 1;
        bytes += stats.size;
      }
    }
  };
  walk(fs.realpathSync(root), "");
  return { files, bytes, links };
}

function sameShape(left, right) {
  return (
    left.files === right.files && left.bytes === right.bytes && left.links.join("\n") === right.links.join("\n")
  );
}

/* ------------------------------------------------------------------ filesystem facts */

/** Decode the octal escapes the kernel mount table uses for spaces, tabs, newlines and `\`. */
function decodeMountPath(value) {
  return value.replace(/\\(0[0-7]{2})/gu, (_, digits) =>
    String.fromCharCode(Number.parseInt(digits, 8)),
  );
}

/** `/proc/self/mounts` when the kernel exposes it; an empty list is treated as "unprovable". */
export function mountEntries({ read = fs.readFileSync } = {}) {
  let raw;
  try {
    raw = read("/proc/self/mounts", "utf8");
  } catch {
    return [];
  }
  return String(raw)
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [source, target, fileSystemType] = line.split(" ");
      return {
        source,
        mountPoint: decodeMountPath(target ?? ""),
        fileSystemType: fileSystemType ?? null,
      };
    })
    .filter((entry) => entry.mountPoint.startsWith("/"));
}

/**
 * Device, mount, filesystem type and free space for a path. Free space comes from `statfs`, so it
 * reflects the real remaining capacity rather than a configured quota.
 */
export function filesystemFacts(target, { mounts = mountEntries() } = {}) {
  const resolved = fs.realpathSync(target);
  const stats = fs.statSync(resolved);
  const statistics = fs.statfsSync(resolved);
  const mount = mounts
    .filter(
      (entry) =>
        resolved === entry.mountPoint ||
        resolved.startsWith(entry.mountPoint === "/" ? "/" : entry.mountPoint + "/"),
    )
    .sort((left, right) => right.mountPoint.length - left.mountPoint.length)[0];
  return {
    path: resolved,
    device: String(stats.dev),
    mountPoint: mount?.mountPoint ?? null,
    fileSystemType: mount?.fileSystemType ?? null,
    availableBytes: Number(statistics.bavail) * Number(statistics.bsize),
    totalBytes: Number(statistics.blocks) * Number(statistics.bsize),
  };
}

function isMemoryBacked(facts) {
  if (facts.fileSystemType && MEMORY_FILESYSTEMS.has(String(facts.fileSystemType).toLowerCase()))
    return true;
  const resolved = facts.path.endsWith("/") ? facts.path : facts.path + "/";
  return SHARED_MEMORY_PREFIXES.some((prefix) => resolved.startsWith(prefix));
}

/* ------------------------------------------------------------------ decision */

/**
 * Relocate only for a memory-backed checkout, or when an operator explicitly opts in to exercise
 * this path locally. `IN_SCRATCH_ENV` makes the relocated child refuse to relocate again.
 */
export function relocationRequested({ repoRoot, env = {}, facts = filesystemFacts }) {
  if (env[IN_SCRATCH_ENV] === "1")
    return { relocate: false, forced: false, reason: "already-running-in-scratch" };
  if (env[RELOCATE_ENV] === "1")
    return { relocate: true, forced: true, reason: "explicit-opt-in" };
  const own = facts(repoRoot);
  if (isMemoryBacked(own))
    return { relocate: true, forced: false, reason: "memory-backed-checkout" };
  return { relocate: false, forced: false, reason: "ordinary-checkout", facts: own };
}

export function requiredScratchBytes({ copyBytes, outputBytes }) {
  const outputs = Math.max(DEFAULT_OUTPUT_BYTES, Number.isFinite(outputBytes) ? outputBytes : 0);
  return Math.ceil((copyBytes + outputs) * SAFETY_FACTOR) + HEADROOM_BYTES;
}

/** Size of the derived output a previous run left behind, when one is present to measure. */
export function measureOutputBytes(app) {
  let total = 0;
  for (const relative of DERIVED_PATHS) {
    const target = path.join(app, relative.slice("packages/pcr-docs/".length));
    if (!fs.existsSync(target)) continue;
    total += summarizeTree(target).bytes;
  }
  return total;
}

function describe(facts) {
  return [
    `path=${facts.path}`,
    `mount=${facts.mountPoint ?? "unknown"}`,
    `type=${facts.fileSystemType ?? "unknown"}`,
    `device=${facts.device}`,
    `available=${facts.availableBytes}`,
    `total=${facts.totalBytes}`,
  ].join(" ");
}

/**
 * Every relocation must be provably useful before anything is copied. A scratch directory on the
 * same memory-backed mount cannot help, a memory-backed scratch is not scratch at all, and a
 * scratch without room for the copy plus a full build cannot finish. An unknown filesystem type is
 * accepted only for an explicit opt-in run, and it is always reported.
 */
export function assertScratchSuitable({
  constraint,
  scratch,
  requiredBytes,
  forced = false,
  warn = console.warn,
}) {
  if (scratch.availableBytes < requiredBytes)
    throw new Error(
      `Scratch filesystem has insufficient capacity: needs ${requiredBytes} bytes, ${describe(scratch)}. ` +
        "Free space or set TMPDIR to a larger disk-backed temporary filesystem.",
    );
  if (isMemoryBacked(scratch))
    throw new Error(
      `Scratch filesystem is memory-backed and cannot relieve a constrained host: ${describe(scratch)}. Set TMPDIR to a disk-backed directory.`,
    );
  const sameDevice = String(scratch.device) === String(constraint.device);
  if (sameDevice && isMemoryBacked(constraint))
    throw new Error(
      `Scratch is on the same constrained filesystem as the checkout: ${describe(scratch)}. ` +
        "Relocation must use a different, disk-backed filesystem.",
    );
  if (!scratch.fileSystemType && !forced)
    throw new Error(
      `Scratch filesystem type could not be proven: ${describe(scratch)}. ` +
        `Set ${RELOCATE_ENV}=1 to accept an unproven local scratch explicitly.`,
    );
  if (!scratch.fileSystemType)
    warn(`Scratch filesystem type is unproven; continuing under ${RELOCATE_ENV}=1: ${describe(scratch)}`);
  if (sameDevice)
    warn(
      `Scratch shares a filesystem with the checkout: ${describe(scratch)}. ` +
        `Continuing under ${RELOCATE_ENV}=1; this run verifies relocation, it does not gain space.`,
    );
  return { sameDevice, memoryBacked: false, requiredBytes };
}

/* ------------------------------------------------------------------ source copy */

/**
 * Copy the checkout, leaving only derived directories behind. Symlinks are preserved rather than
 * dereferenced, so installed dependency links and a worktree `.git` *file* stay exactly as they
 * are; the copy is then measured and compared against the source set before it is trusted.
 */
export function copySourceTree({ from, to, excludes = isDerivedPath, cp = fs.cpSync }) {
  const source = fs.realpathSync(from);
  const before = summarizeTree(source, excludes);
  fs.mkdirSync(to, { recursive: true });
  cp(source, to, {
    recursive: true,
    dereference: false,
    force: false,
    errorOnExist: true,
    filter: (candidate) => {
      const relative = path.relative(source, candidate);
      if (relative === "") return true;
      if (excludes(relative)) return false;
      // `fs.cpSync` rewrites a copied symlink to an absolute path into the source tree, which
      // would leave installed dependency links pointing back at the original checkout. They are
      // reproduced verbatim below instead.
      return !fs.lstatSync(candidate).isSymbolicLink();
    },
  });
  for (const relative of before.links) {
    const target = path.join(to, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.symlinkSync(fs.readlinkSync(path.join(source, relative)), target);
  }
  const after = summarizeTree(to);
  if (!sameShape(before, after))
    throw new Error(
      `Source copy is incomplete: expected ${before.files} files / ${before.bytes} bytes / ` +
        `${before.links.length} links, found ${after.files} files / ${after.bytes} bytes / ` +
        `${after.links.length} links.`,
    );
  return { ...before, path: to };
}

/* ------------------------------------------------------------------ git identity */

/**
 * Read the commit a checkout resolves to. A worktree `.git` file is a pointer to the shared
 * object database, so this works without duplicating history — and it is why the identity is
 * re-checked in the copy and again in the original after the build.
 */
export function gitHead(root, { run = execFileSync } = {}) {
  const head = run("git", ["rev-parse", "HEAD"], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    timeout: 120000,
  });
  return String(head).trim();
}

/* ------------------------------------------------------------------ environment */

/**
 * Child environment for the relocated pipeline. The caller's environment is preserved verbatim —
 * including the Search Console verification marker the export verifies — and only the recursion
 * guard and the build's own telemetry/heap settings are added. Values are never logged.
 */
export function scratchEnvironment(env = {}) {
  return {
    ...env,
    NEXT_TELEMETRY_DISABLED: "1",
    NODE_OPTIONS: "--max-old-space-size=4096",
    [IN_SCRATCH_ENV]: "1",
  };
}

/** Presence-only report for the variables the build depends on; never the values. */
export function describeEnvironment(env = {}) {
  const names = ["PCR_GOOGLE_SITE_VERIFICATION", "NODE_OPTIONS", "NEXT_TELEMETRY_DISABLED"];
  return Object.fromEntries(names.map((name) => [name, env[name] === undefined ? "absent" : "set"]));
}

/* ------------------------------------------------------------------ publishing */

function uniqueSuffix(token) {
  return (token ?? randomBytes(4).toString("hex")).toString();
}

function assertNoSymlinks(root) {
  const walk = (absolute) => {
    for (const entry of fs.readdirSync(absolute, { withFileTypes: true })) {
      const child = path.join(absolute, entry.name);
      const stats = fs.lstatSync(child);
      if (stats.isSymbolicLink())
        throw new Error(`Published export contains a symlink: ${path.relative(root, child)}`);
      if (stats.isDirectory()) walk(child);
    }
  };
  walk(root);
}

/**
 * Publish the scratch export by staging a full copy next to the live one and renaming it into
 * place. The previous export survives every failure before the final rename, and only directories
 * this call created are ever removed.
 */
export function publishOutput({ app, scratchApp, token, freeBytes = null, beforeSwap = () => {} }) {
  const scratchOut = path.join(scratchApp, "out");
  if (!fs.existsSync(scratchOut)) throw new Error("Relocated build produced no export directory.");
  if (fs.lstatSync(scratchOut).isSymbolicLink())
    throw new Error("Relocated export is a symlink and will not be published.");

  const target = path.join(app, "out");
  if (fs.lstatSync(target, { throwIfNoEntry: false })?.isSymbolicLink())
    throw new Error("Refusing to replace a symlinked export directory: " + target);

  // Rejected before measuring: the export is expected to be plain files, and a symlink would
  // otherwise be rewritten to an absolute path by the copy below.
  assertNoSymlinks(scratchOut);
  const measured = summarizeTree(scratchOut);
  if (measured.bytes > MAX_OUTPUT_BYTES)
    throw new Error(`Export exceeds the declared deployment budget: ${measured.bytes} bytes.`);
  if (measured.files > MAX_OUTPUT_FILES)
    throw new Error(`Export exceeds the declared file budget: ${measured.files} files.`);
  const available = freeBytes ?? filesystemFacts(app).availableBytes;
  if (available < measured.bytes + HEADROOM_BYTES)
    throw new Error(
      `Destination filesystem cannot stage the export: needs ${measured.bytes + HEADROOM_BYTES} ` +
        `bytes free, has ${available}. The previous export is left untouched.`,
    );

  const suffix = uniqueSuffix(token);
  const stage = path.join(app, `out.stage-${suffix}`);
  const previous = path.join(app, `out.prev-${suffix}`);
  if (fs.lstatSync(stage, { throwIfNoEntry: false }) || fs.lstatSync(previous, { throwIfNoEntry: false }))
    throw new Error("Refusing to reuse an existing stage or previous-export path.");

  let swapped = false;
  try {
    fs.cpSync(scratchOut, stage, { recursive: true, dereference: false, force: false, errorOnExist: true });
    const staged = summarizeTree(stage);
    if (!sameShape(measured, staged))
      throw new Error(
        `Staged export is incomplete: expected ${measured.files} files / ${measured.bytes} bytes, ` +
          `found ${staged.files} files / ${staged.bytes} bytes.`,
      );
    assertNoSymlinks(stage);
    // Last gate before anything replaces the live export: every copy is complete and measured, so
    // a budget failure here still leaves the previous export exactly as it was.
    beforeSwap();
    const hadPrevious = fs.existsSync(target);
    if (hadPrevious) fs.renameSync(target, previous);
    try {
      fs.renameSync(stage, target);
      swapped = true;
    } catch (error) {
      if (hadPrevious && !fs.existsSync(target)) fs.renameSync(previous, target);
      throw error;
    }
    // The previous export is released by the `finally` below, so nothing after the swap can fail
    // in a way that would suggest the old export was kept.
    return { files: measured.files, bytes: measured.bytes, staged: true };
  } finally {
    fs.rmSync(stage, { recursive: true, force: true, maxRetries: 3 });
    if (swapped) fs.rmSync(previous, { recursive: true, force: true, maxRetries: 3 });
  }
}

/* ------------------------------------------------------------------ orchestration */

function readJson(file) {
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    throw new Error(`Generated artifact is not readable JSON: ${file}`);
  }
}

/**
 * The generated evidence that ties the export to a commit: the generation manifest and the
 * version document served from the export root. Both are required — a missing one means the
 * pipeline did not produce what this adapter is supposed to hand over, so nothing is published.
 */
function assertGeneratedIdentity(scratchApp, expectedCommit) {
  const manifest = readJson(path.join(scratchApp, ".generated/site.json"));
  if (!manifest) throw new Error("Generation manifest .generated/site.json is missing.");
  if (manifest.sourceCommit !== expectedCommit)
    throw new Error(
      `Generated manifest records commit ${manifest.sourceCommit} but the checkout is at ${expectedCommit}.`,
    );
  const versionFile = path.join(scratchApp, "out/generated/version.json");
  if (!fs.existsSync(versionFile)) throw new Error("Export version document generated/version.json is missing.");
  const version = readJson(versionFile);
  if (version?.sourceCommit !== expectedCommit)
    throw new Error(
      `Export version document records commit ${version?.sourceCommit} but the checkout is at ${expectedCommit}.`,
    );
  return { manifest, version, versionFile };
}

/**
 * Run the ordinary pipeline on a scratch copy and publish only its validated export.
 *
 * `runPipeline` is the caller's own stage runner, so the time, memory and artifact gates stay in
 * exactly one place. Everything else is injectable for tests.
 */
export async function runRelocatedBuild({
  app,
  repoRoot,
  env = {},
  runPipeline,
  scratchParent = os.tmpdir(),
  reason = "relocation-requested",
  facts = filesystemFacts,
  head = gitHead,
  sample = () => {},
  assertBudget = () => {},
  copy = copySourceTree,
  publish = publishOutput,
  cleanup = fs.rmSync,
  log = console.warn,
  token = null,
}) {
  if (typeof runPipeline !== "function") throw new Error("Relocation requires the build pipeline runner.");
  const headBefore = head(repoRoot);
  const constraint = facts(repoRoot);
  const copyEstimate = summarizeTree(repoRoot, isDerivedPath);
  const requiredBytes = requiredScratchBytes({
    copyBytes: copyEstimate.bytes,
    outputBytes: measureOutputBytes(app),
  });
  const scratchBase = fs.realpathSync(scratchParent);
  const sourceRoot = fs.realpathSync(repoRoot);
  if (scratchBase === sourceRoot || scratchBase.startsWith(sourceRoot + path.sep))
    throw new Error("Scratch parent must be outside the source repository.");
  const scratchRoot = fs.mkdtempSync(path.join(scratchBase, "pcr-build-"));
  const scratchRepo = path.join(scratchRoot, "repo");
  let published = null;
  try {
    const scratchFacts = facts(scratchRoot);
    const suitability = assertScratchSuitable({
      constraint,
      scratch: scratchFacts,
      requiredBytes,
      forced: env[RELOCATE_ENV] === "1",
      warn: log,
    });
    sample();
    const copied = copy({ from: repoRoot, to: scratchRepo });
    sample();
    assertBudget();
    const scratchHead = head(scratchRepo);
    if (scratchHead !== headBefore)
      throw new Error(
        `Scratch copy does not resolve the expected source commit: expected ${headBefore}, resolved ${scratchHead}.`,
      );
    const scratchApp = path.join(scratchRepo, "packages/pcr-docs");
    await runPipeline({ cwd: scratchApp, env: scratchEnvironment(env) });
    sample();
    assertBudget();
    // The copy is built on a checkout that shares its object database, so identity is checked
    // again after the pipeline: nothing may have moved while it ran.
    const scratchHeadAfter = head(scratchRepo);
    if (scratchHeadAfter !== headBefore)
      throw new Error(
        `Scratch checkout moved during the build: started at ${headBefore}, now ${scratchHeadAfter}.`,
      );
    const headAfter = head(repoRoot);
    if (headAfter !== headBefore)
      throw new Error(
        `Source commit moved during the build: started at ${headBefore}, now ${headAfter}. ` +
          "The export is not published.",
      );
    const generated = assertGeneratedIdentity(scratchApp, headBefore);
    published = publish({
      app,
      scratchApp,
      token,
      // Measured after the copy back into the destination, immediately before the swap.
      beforeSwap: () => {
        sample();
        assertBudget();
      },
    });
    // Reporting must never turn a published export into a reported failure.
    try {
      log(
        JSON.stringify({
          event: "build-relocated",
          reason,
          scratch: {
            root: scratchRoot,
            mount: scratchFacts.mountPoint,
            type: scratchFacts.fileSystemType,
            device: scratchFacts.device,
            availableBytes: scratchFacts.availableBytes,
          },
          checkout: {
            device: constraint.device,
            mount: constraint.mountPoint,
            type: constraint.fileSystemType,
          },
          sameDevice: suitability.sameDevice,
          requiredBytes,
          copiedBytes: copied.bytes,
          sourceCommit: headBefore,
          generatedAt: generated.versionFile,
          environment: describeEnvironment(env),
          export: published,
        }),
      );
    } catch {
      // Diagnostics only; the export is already published and verified.
    }
    return { relocated: true, sourceCommit: headBefore, scratchRoot, copied, published };
  } finally {
    // Only the unique scratch directory this call created is ever removed.
    if (scratchRoot.startsWith(scratchBase + path.sep) && path.basename(scratchRoot).startsWith("pcr-build-"))
      cleanup(scratchRoot, { recursive: true, force: true, maxRetries: 3 });
  }
}
