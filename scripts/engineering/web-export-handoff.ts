import { createHash } from 'node:crypto';
import { closeSync, constants, copyFileSync, createReadStream, fstatSync, linkSync, lstatSync, mkdirSync, mkdtempSync, openSync, readFileSync, readdirSync, realpathSync, renameSync, rmSync, writeFileSync, type Stats } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { readProductIdentity, readProductVersion, productGit, type ProductIdentity } from '../../builder/scripts/product-identity.ts';
import { productTreeSha256 } from '../../builder/scripts/product-release.ts';
import { assertBuildResources } from '../../packages/pcr-docs/scripts/resource-budget.ts';
import { isReusableContext, verifyCiPlan, type CiPlan } from './ci-plan.ts';
import { readCurrentQualificationPlan } from './qualification-plan.ts';
import { assertCoverageQualificationBinding, qualificationBinding, type CoverageQualificationBinding } from './coverage-qualification.ts';
import { inventory } from './coverage-inventory.ts';
import { config, hash } from './coverage-types.ts';

interface ExportFile { path: string; bytes: number; sha256: string }
interface Context {
  identity: ProductIdentity; sourceTree: string; node: string; runId: string; attempt: string;
  ci: CiPlan; qualification: CoverageQualificationBinding | null;
}
interface ExportTree { directories: string[]; files: ExportFile[]; bytes: number; treeSha256: string }
export interface WebExportCheckpoint {
  schema: 1; kind: 'pcr-verified-web-export-handoff'; publishable: false;
  context: Context; build: Record<string, unknown>; coverage: Record<string, unknown> | null;
  tree: ExportTree;
}
const commands = ['scripts/generate.ts', 'node_modules/next/dist/bin/next build', 'scripts/verify.ts'];
const documentationCommand = ['npm', '--prefix', 'packages/pcr-docs', 'run', 'build'];
const metadataBytes = 32 * 1024 * 1024;
function object(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Expected handoff object.');
  return value as Record<string, unknown>;
}
function same(left: unknown, right: unknown): boolean {
  const canonical = (value: unknown): unknown => Array.isArray(value) ? value.map(canonical)
    : value !== null && typeof value === 'object' ? Object.fromEntries(Object.entries(value).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([key, item]) => [key, canonical(item)])) : value;
  return JSON.stringify(canonical(left)) === JSON.stringify(canonical(right));
}
function requireThat(condition: unknown, message: string): asserts condition { if (!condition) throw new Error(message); }
function integer(value: unknown): value is number { return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0; }
function regularDirectory(directory: string): string {
  const absolute = path.resolve(directory), stat = lstatSync(absolute);
  requireThat(stat.isDirectory() && !stat.isSymbolicLink() && realpathSync(absolute) === absolute, 'Handoff requires canonical regular directories.');
  return absolute;
}
function json(filename: string): unknown {
  filename = path.resolve(filename);
  const stat = lstatSync(filename);
  requireThat(stat.isFile() && !stat.isSymbolicLink() && realpathSync(filename) === filename, 'Handoff metadata must be a canonical regular file.');
  requireThat(stat.size <= metadataBytes, 'Handoff metadata is unbounded.');
  return JSON.parse(readFileSync(filename, 'utf8')) as unknown;
}
function inside(parent: string, candidate: string): boolean { return candidate === parent || candidate.startsWith(parent + path.sep); }
function safePath(value: string): string {
  requireThat(value !== '' && !value.includes('\\') && !/[\u0000-\u001f\u007f:]/u.test(value)
    && !value.startsWith('/') && !value.split('/').some(part => !part || part === '.' || part === '..'), 'Unsafe export path.');
  return value;
}
function statIdentity(stat: Stats): string { return `${stat.dev}:${stat.ino}:${stat.size}:${stat.mtimeMs}:${stat.ctimeMs}:${stat.nlink}`; }
/** Enumerate every regular file, including hidden files. Reject aliases before reading bytes. */
function layout(directory: string): { directories: string[]; files: { path: string; bytes: number }[] } {
  directory = regularDirectory(directory);
  const files: { path: string; bytes: number }[] = [];
  const walk = (folder: string): void => {
    regularDirectory(folder);
    for (const name of readdirSync(folder).sort()) {
      const absolute = path.join(folder, name), relative = safePath(path.relative(directory, absolute).split(path.sep).join('/'));
      const stat = lstatSync(absolute);
      requireThat(!stat.isSymbolicLink() && realpathSync(absolute) === absolute, 'Export refuses symbolic links and path aliases.');
      if (stat.isDirectory()) walk(absolute);
      else { requireThat(stat.isFile(), 'Export requires regular files.'); files.push({ path: relative, bytes: stat.size }); }
    }
  };
  walk(directory);
  files.sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
  // Actions uploads regular files only, as does the final product archive.
  // Empty directories are not payload; traverse them for unsafe entries without
  // requiring their survival or recreating paths supplied by a checkpoint.
  const ancestors = new Set<string>();
  for (const file of files) {
    let parent = path.posix.dirname(file.path);
    while (parent !== '.') { ancestors.add(parent); parent = path.posix.dirname(parent); }
  }
  const directories = [...ancestors].sort();
  requireThat(files.length > 0 && files.length < 20_000 && files.every(file => file.bytes < 25_000_000), 'Export violates existing provider file limits.');
  return { directories, files };
}
async function fileHash(filename: string): Promise<string> {
  const before = lstatSync(filename);
  requireThat(before.isFile() && !before.isSymbolicLink() && realpathSync(filename) === filename, 'Export file is no longer regular.');
  const fd = openSync(filename, constants.O_RDONLY | (constants.O_NOFOLLOW ?? 0));
  const digest = createHash('sha256'); let bytes = 0;
  try {
    requireThat(statIdentity(before) === statIdentity(fstatSync(fd)), 'Export changed during open.');
    for await (const chunk of createReadStream(filename, { fd, autoClose: false, highWaterMark: 1024 * 1024 })) { digest.update(chunk); bytes += chunk.length; }
    requireThat(bytes === before.size && statIdentity(before) === statIdentity(fstatSync(fd)) && statIdentity(before) === statIdentity(lstatSync(filename))
      && realpathSync(filename) === filename, 'Export changed during read.');
  } finally { closeSync(fd); }
  return digest.digest('hex');
}
async function inspectTree(directory: string): Promise<ExportTree> {
  const before = layout(directory), files: ExportFile[] = [];
  const identities = new Map(before.files.map(file => [file.path, statIdentity(lstatSync(path.join(directory, file.path)))]));
  for (const file of before.files) {
    const absolute = path.join(directory, file.path);
    requireThat(statIdentity(lstatSync(absolute)) === identities.get(file.path), 'Export changed before inspection.');
    files.push({ ...file, sha256: await fileHash(absolute) });
  }
  requireThat(same(before, layout(directory)), 'Export tree changed during inspection.');
  requireThat(before.files.every(file => statIdentity(lstatSync(path.join(directory, file.path))) === identities.get(file.path)), 'Export changed after inspection.');
  return { directories: before.directories, files, bytes: files.reduce((sum, file) => sum + file.bytes, 0), treeSha256: productTreeSha256(files) };
}
function currentContext(root: string, planDirectory: string, env: NodeJS.ProcessEnv): Context {
  const ci = verifyCiPlan(root, json(path.join(planDirectory, 'ci.json')), {
    event: env.CI_EVENT_NAME ?? '', reusable: isReusableContext(env.CI_WORKFLOW_INPUTS),
    ...(env.CI_BASE_SHA ? { base: env.CI_BASE_SHA } : {}), head: env.CI_HEAD_SHA ?? '',
  });
  requireThat(/^[1-9][0-9]*$/u.test(env.GITHUB_RUN_ID ?? '') && /^[1-9][0-9]*$/u.test(env.GITHUB_RUN_ATTEMPT ?? ''), 'Invalid current CI run/attempt.');
  const version = readProductVersion(root);
  requireThat(process.versions.node === version.node, 'Handoff runtime differs from the pinned product Node.');
  const identity = readProductIdentity(root), sourceTree = productGit(root, 'rev-parse', 'HEAD^{tree}');
  requireThat(identity.sourceCommit === ci.head && /^[a-f0-9]{40}$/u.test(sourceTree), 'Handoff source differs from CI plan.');
  const qualification = ci.mode === 'full' ? qualificationBinding(readCurrentQualificationPlan(root, path.join(planDirectory, 'qualification.json')), 'documentation') : null;
  return { identity, sourceTree, node: process.version, runId: env.GITHUB_RUN_ID!, attempt: env.GITHUB_RUN_ATTEMPT!, ci, qualification };
}
function validateCoverage(root: string, value: unknown, context: Context): Record<string, unknown> | null {
  if (context.qualification === null) { requireThat(value === null, 'Data handoff must not claim full coverage.'); return null; }
  const run = object(value);
  requireThat(same(Object.keys(run).sort(), ['schemaVersion', 'commit', 'configSha256', 'node', 'sources', 'command', 'qualification', 'status', 'unchanged'].sort()), 'Invalid documentation measurement fields.');
  assertCoverageQualificationBinding(run.qualification, context.qualification);
  const bytes = readFileSync(path.join(root, 'config/coverage.json'));
  requireThat(run.schemaVersion === 1 && run.commit === context.identity.sourceCommit && run.node === context.node && run.status === 0 && run.unchanged === true
    && run.configSha256 === hash(bytes) && same(run.command, documentationCommand), 'Failed, stale, foreign-runtime or incomplete documentation measurement.');
  requireThat(same(run.sources, inventory(root, config(JSON.parse(bytes.toString('utf8')) as unknown))), 'Documentation measurement source inventory differs.');
  return run;
}
function validateBuild(value: unknown, context: Context, tree: ExportTree): Record<string, unknown> {
  const build = object(value);
  requireThat(build.status === 'passed' && !Object.hasOwn(build, 'failure') && integer(build.buildMs) && build.buildMs > 0 && Array.isArray(build.stages)
    && build.stages.length === commands.length, 'Missing successful complete build metrics.');
  requireThat(typeof build.peakResidentBytes === 'number' && typeof build.memoryMeasurement === 'string', 'Missing build resource metrics.');
  assertBuildResources({ peakResidentBytes: build.peakResidentBytes, memoryMeasurement: build.memoryMeasurement });
  let duration = 0;
  for (const [index, value] of build.stages.entries()) {
    const stage = object(value);
    requireThat(stage.command === commands[index] && stage.status === 'passed' && stage.exitCode === 0 && !Object.hasOwn(stage, 'failure')
      && integer(stage.durationMs) && typeof stage.peakResidentBytes === 'number' && typeof stage.memoryMeasurement === 'string', 'Failed or incomplete measured build stage.');
    assertBuildResources({ peakResidentBytes: stage.peakResidentBytes, memoryMeasurement: stage.memoryMeasurement });
    requireThat(stage.peakResidentBytes <= build.peakResidentBytes, 'Stage RSS exceeds reported complete-build peak.');
    duration += stage.durationMs;
  }
  requireThat(build.buildMs >= duration, 'Complete build duration omits a required stage.');
  const relocation = object(build.relocation), exported = object(relocation.export);
  requireThat(relocation.sourceCommit === context.identity.sourceCommit && exported.staged === true && exported.files === tree.files.length && exported.bytes === tree.bytes, 'Build export counts/source do not match handoff tree.');
  return build;
}
function verifyExportIdentity(directory: string, context: Context): void {
  requireThat(same(json(path.join(directory, 'generated/product-release.json')), context.identity), 'Export product identity differs.');
  const version = object(json(path.join(directory, 'generated/version.json')));
  requireThat(version.sourceCommit === context.identity.sourceCommit && version.releaseVersion === context.identity.version
    && version.releaseTag === context.identity.tag && version.sourceFingerprint === context.identity.sourceFingerprint, 'Export version differs from source.');
}
/** Capture only completed verified bytes. Hard links avoid duplicating a multi-GB export. */
export async function captureWebExport(root: string, planDirectory: string, sourceOut: string, output: string, metricsFile: string, coverageDirectory: string, env: NodeJS.ProcessEnv = process.env): Promise<WebExportCheckpoint> {
  root = realpathSync(root); planDirectory = regularDirectory(planDirectory); sourceOut = regularDirectory(sourceOut);
  output = path.resolve(output); const parent = regularDirectory(path.dirname(output));
  requireThat(!inside(root, output) && !inside(sourceOut, output) && !inside(output, sourceOut) && !lstatSync(output, { throwIfNoEntry: false }), 'Handoff destination must be new and outside source/export.');
  const context = currentContext(root, planDirectory, env), build = object(json(metricsFile));
  const coverage = validateCoverage(root, context.qualification ? json(path.join(regularDirectory(coverageDirectory), 'run.json')) : null, context);
  verifyExportIdentity(sourceOut, context);
  const initial = layout(sourceOut);
  validateBuild(build, context, { directories: initial.directories, files: initial.files.map(file => ({ ...file, sha256: '' })), bytes: initial.files.reduce((sum, file) => sum + file.bytes, 0), treeSha256: '' });
  const sourceStats = new Map(initial.files.map(file => [file.path, lstatSync(path.join(sourceOut, file.path))]));
  const inodeKey = (stat: Stats) => `${stat.dev}:${stat.ino}`;
  // Linking changes nlink/ctime. Track only those known changes, including aliases
  // already present as ordinary hard links within the original export.
  const expectedInodes = new Map([...sourceStats.values()].map(stat => [inodeKey(stat), statIdentity(stat)]));
  const stage = mkdtempSync(path.join(parent, `.${path.basename(output)}.stage-`));
  const ownedStage = lstatSync(stage);
  try {
    const stagedOut = path.join(stage, 'out'); mkdirSync(stagedOut);
    for (const relative of initial.directories) mkdirSync(path.join(stagedOut, relative));
    const files: ExportFile[] = [];
    for (const entry of initial.files) {
      const original = path.join(sourceOut, entry.path), target = path.join(stagedOut, entry.path);
      const before = lstatSync(original);
      requireThat(before.isFile() && before.size === entry.bytes && realpathSync(original) === original
        && inodeKey(before) === inodeKey(sourceStats.get(entry.path)!) && statIdentity(before) === expectedInodes.get(inodeKey(before)), 'Export changed before capture.');
      try { linkSync(original, target); }
      catch (error) {
        const code = error !== null && typeof error === 'object' && 'code' in error ? error.code : null;
        if (!['EXDEV', 'EPERM', 'ENOTSUP', 'EOPNOTSUPP'].includes(String(code))) throw error;
        copyFileSync(original, target, constants.COPYFILE_EXCL | constants.COPYFILE_FICLONE);
      }
      const linked = lstatSync(original);
      requireThat(before.dev === linked.dev && before.ino === linked.ino && before.size === linked.size && before.mtimeMs === linked.mtimeMs, 'Export changed during capture.');
      expectedInodes.set(inodeKey(linked), statIdentity(linked));
      const sha256 = await fileHash(original);
      requireThat(await fileHash(target) === sha256, 'Captured export bytes differ.');
      files.push({ ...entry, sha256 });
    }
    const tree: ExportTree = { directories: initial.directories, files, bytes: files.reduce((sum, file) => sum + file.bytes, 0), treeSha256: productTreeSha256(files) };
    requireThat(same(initial, layout(sourceOut)) && same(await inspectTree(stagedOut), tree), 'Export mutated during capture.');
    requireThat([...sourceStats].every(([relative, stat]) => statIdentity(lstatSync(path.join(sourceOut, relative))) === expectedInodes.get(inodeKey(stat))), 'Original export changed after capture.');
    validateBuild(build, context, tree);
    requireThat(same(currentContext(root, planDirectory, env), context), 'Source or plan changed during capture.');
    verifyExportIdentity(stagedOut, context);
    const checkpoint: WebExportCheckpoint = { schema: 1, kind: 'pcr-verified-web-export-handoff', publishable: false, context, build, coverage, tree };
    const serialized = JSON.stringify(checkpoint) + '\n';
    requireThat(Buffer.byteLength(serialized) <= metadataBytes, 'Export checkpoint exceeds its consumer metadata bound.');
    writeFileSync(path.join(stage, 'checkpoint.json'), serialized, { flag: 'wx' });
    requireThat(!lstatSync(output, { throwIfNoEntry: false }), 'Handoff destination appeared during capture.');
    renameSync(stage, output);
    return checkpoint;
  } catch (error) {
    const current = lstatSync(stage, { throwIfNoEntry: false });
    if (current?.isDirectory() && !current.isSymbolicLink() && current.dev === ownedStage.dev && current.ino === ownedStage.ino && realpathSync(stage) === stage)
      rmSync(stage, { recursive: true, force: true });
    throw error;
  }
}
/** Authenticate every received byte afresh, before any product hosting transformation. */
export async function verifyWebExport(root: string, planDirectory: string, directory: string, env: NodeJS.ProcessEnv = process.env): Promise<WebExportCheckpoint> {
  root = realpathSync(root); directory = regularDirectory(directory); planDirectory = regularDirectory(planDirectory);
  requireThat(same(readdirSync(directory).sort(), ['checkpoint.json', 'out']), 'Handoff has missing or extra top-level entries.');
  const raw = object(json(path.join(directory, 'checkpoint.json')));
  requireThat(same(Object.keys(raw).sort(), ['schema', 'kind', 'publishable', 'context', 'build', 'coverage', 'tree'].sort())
    && raw.schema === 1 && raw.kind === 'pcr-verified-web-export-handoff' && raw.publishable === false, 'Invalid export checkpoint.');
  const context = currentContext(root, planDirectory, env);
  requireThat(same(raw.context, context), 'Handoff source, plan, runtime or current run/attempt differs.');
  const tree = await inspectTree(path.join(directory, 'out'));
  requireThat(same(raw.tree, tree), 'Handoff file tree is missing, extra, changed, duplicated or unsafe.');
  const build = validateBuild(raw.build, context, tree), coverage = validateCoverage(root, raw.coverage, context);
  verifyExportIdentity(path.join(directory, 'out'), context);
  requireThat(same(currentContext(root, planDirectory, env), context), 'Source or plan changed during verification.');
  return { schema: 1, kind: 'pcr-verified-web-export-handoff', publishable: false, context, build, coverage, tree };
}
async function main(): Promise<void> {
  const [action, ...args] = process.argv.slice(2);
  let checkpoint: WebExportCheckpoint;
  if (action === 'capture' && args.length === 5) checkpoint = await captureWebExport(process.cwd(), args[0]!, args[1]!, args[2]!, args[3]!, args[4]!);
  else if (action === 'verify' && args.length === 2) checkpoint = await verifyWebExport(process.cwd(), args[0]!, args[1]!);
  else throw new Error('Usage: web-export-handoff.ts capture <plan-dir> <source-out> <new-handoff-dir> <build-metrics-file> <coverage-run-dir> | verify <plan-dir> <handoff-dir>');
  console.log(JSON.stringify({ event: `web-export-${action}`, sourceCommit: checkpoint.context.identity.sourceCommit, runId: checkpoint.context.runId, attempt: checkpoint.context.attempt,
    files: checkpoint.tree.files.length, bytes: checkpoint.tree.bytes, treeSha256: checkpoint.tree.treeSha256, mode: checkpoint.context.ci.mode, publishable: false }));
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) main().catch(error => { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1; });
