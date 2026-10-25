import fs, { type Stats } from 'node:fs';
import path from 'node:path';
import { createHash, randomBytes } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

export const STATIC_ROUTE_ALIASES_FILE = 'generated/static-route-aliases.json';
export const MAX_STATIC_ROUTE_ALIASES_BYTES = 16 * 1024 * 1024;
/** EdgeOne rewrites retain both HTTP URLs without a redirect or a second physical file. */
export const STATIC_ROUTE_REWRITES = [
  { source: '/__next._full.txt', destination: '/index.txt' },
  { source: '/*/__next._full.txt', destination: '/:splat/index.txt' },
] as const;
export interface StaticRouteAlias { source: string; target: string; bytes: number; sha256: string }
export interface StaticRouteAliases { schemaVersion: 1; sourceCommit: string; pairs: StaticRouteAlias[] }
export interface StaticRouteAliasFile { path: string; bytes: number; sha256?: string }
const fullName = '__next._full.txt';
const maximumFileBytes = 25_000_000;
const maximumFiles = 20_000;
const digestPattern = /^[a-f0-9]{64}$/u;
function requireThat(value: unknown, message: string): asserts value { if (!value) throw new Error(message); }
function record(value: unknown): Record<string, unknown> {
  requireThat(value !== null && typeof value === 'object' && !Array.isArray(value), 'Invalid static route alias object.');
  return value as Record<string, unknown>;
}
function fields(value: Record<string, unknown>, expected: string[]): void {
  requireThat(JSON.stringify(Object.keys(value).sort()) === JSON.stringify(expected.sort()), 'Unexpected static route alias fields.');
}
function sourceCommit(value: string): void { requireThat(/^[a-f0-9]{40}$/u.test(value), 'Static route aliases require an exact source commit.'); }
function safeRelative(value: string): string {
  requireThat(value !== '' && !value.startsWith('/') && !/[\\\u0000-\u001f\u007f:?#]/u.test(value)
    && value.split('/').every(part => part !== '' && part !== '.' && part !== '..'), 'Unsafe static route alias path.');
  return value;
}
function routeUrl(relative: string): string { return '/' + safeRelative(relative).split('/').map(encodeURIComponent).join('/'); }
function assetPath(relative: string): boolean { return ['generated', '_next'].includes(relative.split('/')[0]!); }
function navigationIndex(relative: string): boolean { return !assetPath(relative) && path.posix.basename(relative) === 'index.txt'; }
function routePath(url: string): string {
  requireThat(url.startsWith('/') && !/[?#\\\u0000-\u001f\u007f]/u.test(url), 'Unsafe static route alias URL.');
  let relative: string;
  try { relative = url.slice(1).split('/').map(part => {
    const decoded = decodeURIComponent(part);
    requireThat(!decoded.includes('/'), 'Encoded path separator in static route alias.');
    return decoded;
  }).join('/'); } catch { throw new Error('Invalid encoded static route alias URL.'); }
  safeRelative(relative);
  requireThat(routeUrl(relative) === url, 'Noncanonical static route alias URL.');
  return relative;
}
/** Resolve only the documented full-payload alias; queries are deliberately not pathnames. */
export function rscAliasTarget(pathname: string): string | undefined {
  try {
    const relative = routePath(pathname);
    return !assetPath(relative) && path.posix.basename(relative) === fullName
      ? routeUrl(path.posix.join(path.posix.dirname(relative), 'index.txt')) : undefined;
  } catch { return undefined; }
}
function serialized(manifest: StaticRouteAliases): Buffer { return Buffer.from(JSON.stringify(manifest) + '\n'); }
function boundedManifest(manifest: StaticRouteAliases): Buffer {
  const bytes = serialized(manifest);
  requireThat(bytes.length <= MAX_STATIC_ROUTE_ALIASES_BYTES && bytes.length < maximumFileBytes, 'Static route alias manifest exceeds its byte limit.');
  return bytes;
}
/** The same inventory binding is used by disk verification and sealed archive verification. */
export function verifyStaticRouteAliasInventory(value: unknown, expectedSourceCommit: string, files: readonly StaticRouteAliasFile[]): StaticRouteAliases {
  sourceCommit(expectedSourceCommit);
  const input = record(value); fields(input, ['schemaVersion', 'sourceCommit', 'pairs']);
  requireThat(input.schemaVersion === 1 && input.sourceCommit === expectedSourceCommit && Array.isArray(input.pairs)
    && input.pairs.length < maximumFiles, 'Static route alias source identity or pair inventory differs.');
  requireThat(files.length > 0 && files.length < maximumFiles, 'Static route alias export exceeds its file limit.');
  const inventory = new Map<string, StaticRouteAliasFile>();
  for (const file of files) {
    safeRelative(file.path);
    requireThat(!inventory.has(file.path) && Number.isSafeInteger(file.bytes) && file.bytes >= 0 && file.bytes < maximumFileBytes
      && (file.sha256 === undefined || digestPattern.test(file.sha256)), 'Invalid or duplicated static route alias export inventory.');
    requireThat(path.posix.basename(file.path) !== fullName, 'A physical full navigation payload remains after alias preparation.');
    inventory.set(file.path, file);
  }
  const pairs: StaticRouteAlias[] = [], targets = new Set<string>();
  let previous = '';
  for (const item of input.pairs) {
    const pair = record(item); fields(pair, ['source', 'target', 'bytes', 'sha256']);
    requireThat(typeof pair.source === 'string' && typeof pair.target === 'string' && typeof pair.sha256 === 'string'
      && typeof pair.bytes === 'number' && Number.isSafeInteger(pair.bytes) && pair.bytes >= 0 && pair.bytes < maximumFileBytes
      && digestPattern.test(pair.sha256), 'Malformed static route alias pair.');
    const source = routePath(pair.source), target = routePath(pair.target);
    requireThat(pair.source > previous && rscAliasTarget(pair.source) === pair.target && !inventory.has(source)
      && !targets.has(target), 'Unsorted, reused or unsupported static route alias pair.');
    const actual = inventory.get(target);
    requireThat(actual && actual.bytes === pair.bytes && actual.sha256 === pair.sha256, 'Static route alias target bytes or hash differ.');
    previous = pair.source; targets.add(target);
    pairs.push({ source: pair.source, target: pair.target, bytes: pair.bytes, sha256: pair.sha256 });
  }
  const indexes = [...inventory.keys()].filter(navigationIndex);
  requireThat(indexes.length === targets.size && indexes.every(file => targets.has(file)), 'Static route alias manifest is incomplete.');
  const manifest: StaticRouteAliases = { schemaVersion: 1, sourceCommit: expectedSourceCommit, pairs };
  const bytes = boundedManifest(manifest), metadata = inventory.get(STATIC_ROUTE_ALIASES_FILE);
  requireThat(metadata && metadata.bytes === bytes.length && metadata.sha256 === createHash('sha256').update(bytes).digest('hex'), 'Static route alias manifest bytes are not canonical or bound to the inventory.');
  return manifest;
}
function identity(stat: Stats): string { return `${stat.dev}:${stat.ino}:${stat.size}:${stat.mode}:${stat.mtimeMs}:${stat.ctimeMs}:${stat.nlink}`; }
function regularDirectory(value: string): string {
  const absolute = path.resolve(value), stat = fs.lstatSync(absolute);
  requireThat(stat.isDirectory() && !stat.isSymbolicLink() && fs.realpathSync(absolute) === absolute, 'Static route aliases require a canonical regular export directory.');
  return absolute;
}
function layout(out: string): Map<string, Stats> {
  out = regularDirectory(out);
  const files = new Map<string, Stats>(); let entries = 0;
  const walk = (directory: string): void => {
    regularDirectory(directory);
    for (const name of fs.readdirSync(directory).sort()) {
      requireThat(++entries <= 100_000, 'Static route alias scan exceeds its entry bound.');
      const absolute = path.join(directory, name), relative = safeRelative(path.relative(out, absolute).split(path.sep).join('/'));
      const stat = fs.lstatSync(absolute);
      requireThat(!stat.isSymbolicLink() && fs.realpathSync(absolute) === absolute, 'Static route aliases refuse symlinks and path aliases.');
      if (stat.isDirectory()) walk(absolute);
      else {
        requireThat(stat.isFile() && stat.size < maximumFileBytes, 'Static route aliases require bounded regular files.');
        requireThat(files.size < 2 * maximumFiles, 'Static route alias scan exceeds its file bound.');
        files.set(relative, stat);
      }
    }
  };
  walk(out); return files;
}
function openRegular(filename: string, before: Stats): number {
  requireThat(before.isFile() && !before.isSymbolicLink() && fs.realpathSync(filename) === filename, 'Static route alias file is unsafe.');
  const descriptor = fs.openSync(filename, fs.constants.O_RDONLY | (fs.constants.O_NOFOLLOW ?? 0));
  try { requireThat(identity(before) === identity(fs.fstatSync(descriptor)), 'Static route alias changed during open.'); }
  catch (error) { fs.closeSync(descriptor); throw error; }
  return descriptor;
}
function unchanged(filename: string, descriptor: number, before: Stats): void {
  requireThat(identity(before) === identity(fs.fstatSync(descriptor)) && identity(before) === identity(fs.lstatSync(filename))
    && fs.realpathSync(filename) === filename, 'Static route alias file changed during inspection.');
}
function fileHash(filename: string, before: Stats): string {
  const descriptor = openRegular(filename, before), digest = createHash('sha256'), buffer = Buffer.alloc(1024 * 1024);
  let bytes = 0;
  try {
    for (;;) {
      const length = fs.readSync(descriptor, buffer, 0, buffer.length, null); if (!length) break;
      requireThat(bytes + length <= before.size, 'Static route alias file grew during inspection.');
      digest.update(buffer.subarray(0, length)); bytes += length;
    }
    requireThat(bytes === before.size, 'Static route alias file size changed.'); unchanged(filename, descriptor, before);
  } finally { fs.closeSync(descriptor); }
  return digest.digest('hex');
}
function manifestBytes(filename: string, before: Stats): Buffer {
  requireThat(before.size <= MAX_STATIC_ROUTE_ALIASES_BYTES, 'Unbounded static route alias manifest.');
  const descriptor = openRegular(filename, before), bytes = Buffer.alloc(before.size);
  try {
    let offset = 0;
    while (offset < bytes.length) {
      const length = fs.readSync(descriptor, bytes, offset, bytes.length - offset, null);
      requireThat(length > 0, 'Static route alias manifest was truncated.'); offset += length;
    }
    requireThat(fs.readSync(descriptor, Buffer.alloc(1), 0, 1, null) === 0, 'Static route alias manifest grew during read.');
    unchanged(filename, descriptor, before); return bytes;
  } finally { fs.closeSync(descriptor); }
}
function identicalPair(source: string, target: string, left: Stats, right: Stats): string {
  requireThat(left.size === right.size, 'Static route alias pair differs in byte count.');
  const a = openRegular(source, left);
  let b: number | undefined;
  try {
    b = openRegular(target, right);
    const digest = createHash('sha256'), first = Buffer.alloc(1024 * 1024), second = Buffer.alloc(first.length);
    let bytes = 0;
    for (;;) {
      const n = fs.readSync(a, first, 0, first.length, null), m = fs.readSync(b, second, 0, second.length, null);
      requireThat(n === m && first.subarray(0, n).equals(second.subarray(0, m)), 'Static route alias pair differs in exact bytes.');
      if (!n) break;
      requireThat(bytes + n <= left.size, 'Static route alias pair grew during inspection.');
      digest.update(first.subarray(0, n)); bytes += n;
    }
    requireThat(bytes === left.size, 'Static route alias pair size changed.');
    unchanged(source, a, left); unchanged(target, b, right);
    return digest.digest('hex');
  } finally { fs.closeSync(a); if (b !== undefined) fs.closeSync(b); }
}
/** Verify every physical target and completeness without changing the export. */
export function verifyStaticRouteAliases(out: string, expectedSourceCommit: string): StaticRouteAliases {
  out = regularDirectory(out); sourceCommit(expectedSourceCommit);
  const files = layout(out), stat = files.get(STATIC_ROUTE_ALIASES_FILE);
  requireThat(stat && stat.size <= MAX_STATIC_ROUTE_ALIASES_BYTES, 'Missing or unbounded static route alias manifest.');
  const filename = path.join(out, STATIC_ROUTE_ALIASES_FILE), metadata = manifestBytes(filename, stat);
  const metadataHash = createHash('sha256').update(metadata).digest('hex'), raw: unknown = JSON.parse(metadata.toString('utf8'));
  const inventory: StaticRouteAliasFile[] = [];
  for (const [relative, stats] of files) inventory.push({ path: relative, bytes: stats.size,
    ...(relative === STATIC_ROUTE_ALIASES_FILE ? { sha256: metadataHash }
      : navigationIndex(relative) ? { sha256: fileHash(path.join(out, relative), stats) } : {}) });
  requireThat(JSON.stringify([...files].map(([relative, stats]) => [relative, identity(stats)]))
    === JSON.stringify([...layout(out)].map(([relative, stats]) => [relative, identity(stats)])), 'Static route alias tree changed during verification.');
  return verifyStaticRouteAliasInventory(raw, expectedSourceCommit, inventory);
}
/** Only a fresh, owned Next export is eligible. Validate ALL pairs before removing any file. */
export function prepareStaticRouteAliases(out: string, expectedSourceCommit: string): StaticRouteAliases {
  out = regularDirectory(out); sourceCommit(expectedSourceCommit);
  const files = layout(out), destination = path.join(out, STATIC_ROUTE_ALIASES_FILE);
  requireThat(!fs.lstatSync(destination, { throwIfNoEntry: false }), 'Refusing to replace existing static route alias metadata.');
  const pairs: StaticRouteAlias[] = [], sources = new Set<string>(), indexes = [...files.keys()].filter(navigationIndex);
  for (const [relative, stat] of files) {
    if (path.posix.basename(relative) !== fullName) continue;
    requireThat(!assetPath(relative), 'Static route aliases cannot reserve an asset-root full payload.');
    const target = path.posix.join(path.posix.dirname(relative), 'index.txt'), targetStat = files.get(target);
    requireThat(targetStat, 'Static route alias is missing its same-parent index.txt.');
    const sha256 = identicalPair(path.join(out, relative), path.join(out, target), stat, targetStat);
    pairs.push({ source: routeUrl(relative), target: routeUrl(target), bytes: stat.size, sha256 }); sources.add(relative);
  }
  requireThat(indexes.length === pairs.length && indexes.every(index => sources.has(path.posix.join(path.posix.dirname(index), fullName))), 'Static route alias preparation has an unpaired index.txt.');
  pairs.sort((a, b) => a.source < b.source ? -1 : a.source > b.source ? 1 : 0);
  const manifest: StaticRouteAliases = { schemaVersion: 1, sourceCommit: expectedSourceCommit, pairs }, bytes = boundedManifest(manifest);
  requireThat(files.size - pairs.length + 1 < maximumFiles, 'Prepared static route alias export exceeds the file limit.');
  // Recheck the complete baseline after comparison and before the first mutation.
  requireThat(JSON.stringify([...files].map(([relative, stat]) => [relative, identity(stat)]))
    === JSON.stringify([...layout(out)].map(([relative, stat]) => [relative, identity(stat)])), 'Static route alias export changed before preparation.');
  const parent = path.dirname(destination); fs.mkdirSync(parent, { recursive: true }); regularDirectory(parent);
  const temporary = path.join(parent, `.static-route-aliases-${randomBytes(12).toString('hex')}.tmp`);
  try {
    fs.writeFileSync(temporary, bytes, { flag: 'wx', mode: 0o644 });
    for (const relative of sources) {
      const filename = path.join(out, relative), original = files.get(relative)!, current = fs.lstatSync(filename);
      requireThat(current.isFile() && !current.isSymbolicLink() && fs.realpathSync(filename) === filename
        && current.dev === original.dev && current.ino === original.ino && current.size === original.size
        && current.mode === original.mode && current.mtimeMs === original.mtimeMs, 'Static route alias source changed before removal.');
      fs.unlinkSync(filename);
    }
    // link is exclusive: unlike rename, it cannot overwrite metadata another writer created.
    fs.linkSync(temporary, destination);
  } finally { fs.rmSync(temporary, { force: true }); }
  return verifyStaticRouteAliases(out, expectedSourceCommit);
}
function main(): void {
  const args = process.argv.slice(2);
  let action: string, out: string, commit: string;
  if (args.length === 0) {
    action = 'prepare'; out = path.resolve('out');
    commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: process.cwd(), encoding: 'utf8', timeout: 120_000 }).trim();
  } else {
    requireThat(args.length === 3 && ['prepare', 'verify'].includes(args[0]!), 'Usage: static-route-aliases.ts [prepare|verify <out> <source-commit>]');
    [action, out, commit] = args as [string, string, string];
  }
  const manifest = action === 'prepare' ? prepareStaticRouteAliases(out, commit) : verifyStaticRouteAliases(out, commit);
  console.log(JSON.stringify({ event: `static-route-aliases-${action}`, sourceCommit: manifest.sourceCommit, pairs: manifest.pairs.length,
    aliasedBytes: manifest.pairs.reduce((sum, pair) => sum + pair.bytes, 0), manifest: STATIC_ROUTE_ALIASES_FILE }));
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try { main(); } catch (error) { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1; }
}
