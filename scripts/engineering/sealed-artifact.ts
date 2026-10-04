import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { copyFileSync, createReadStream, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { isDeepStrictEqual } from 'node:util';
import { verifyProductArtifacts } from '../../builder/scripts/product-release.ts';
import { assertProductIdentity, type ProductIdentity } from '../../builder/scripts/product-identity.ts';
import { record, text, field, type ArtifactProof, type ProductManifest } from '../../builder/scripts/release-types.ts';
import { verifyRuntime } from './runtime.ts';
import { OfflineLibrary } from '../../packages/pcr-core/src/offline-library.ts';
import { withPcrSource } from '../../packages/pcr-core/src/source-context.ts';
import { buildGuidance } from '../../packages/pcr-core/src/index.ts';

export interface SealedArtifactOptions {
  root: string;
  /** A fresh external evidence directory; never an installation directory. */
  report: string;
  expectedSource: string;
  expectedIdentity?: ProductIdentity;
  expectedArchitecture?: string;
  npmCli?: string;
}
export interface QualificationCheck { name: string; passed: boolean; detail: Record<string, unknown> }
export interface SealedArtifactReport {
  schema: 1; kind: 'pcr-sealed-artifact-qualification'; passed: boolean;
  startedAt: string; finishedAt: string | null; root: string; report: string; expectedSource: string;
  runtime: { platform: string; architecture: string; expectedArchitecture: string | null; node: string; npm: string | null; npmCli: string | null; npmCliSha256: string | null };
  identity: ProductIdentity | null; artifacts: ArtifactProof[];
  checks: QualificationCheck[]; installation: { directory: string | null; removed: boolean };
  selected: { id: string; recordKind: string; version: unknown } | null; error: string | null;
}
interface CommandResult { code: number | null; signal: NodeJS.Signals | null; stdout: string; stderr: string; durationMs: number }
const MAX_OUTPUT = 32 * 1024 * 1024;
function requireCondition(value: boolean, message: string): void { if (!value) throw new Error(message); }
function jsonFile(filename: string): unknown { const value: unknown = JSON.parse(readFileSync(filename, 'utf8')); return value; }
function json(text: string): Record<string, unknown> { const value: unknown = JSON.parse(text); return record(value, 'consumer JSON'); }
function array(value: unknown, label: string): unknown[] { if (!Array.isArray(value)) throw new Error(`Missing ${label}.`); return value; }
function inside(root: string, filename: string): boolean { const relative = path.relative(root, filename); return relative === '' || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative)); }
async function hash(filename: string): Promise<string> { const digest = createHash('sha256'); for await (const bytes of createReadStream(filename)) digest.update(bytes); return digest.digest('hex'); }
function regular(filename: string): string { const stat = lstatSync(filename); if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`Expected a regular file: ${filename}`); return realpathSync(filename); }
function sameIdentity(left: ProductIdentity, right: ProductIdentity): boolean { return (['schema', 'version', 'tag', 'sourceCommit', 'sourceFingerprint'] as const).every(key => left[key] === right[key]); }

/** Locate npm's actual JS entry rather than relying on Windows shell wrappers. */
export function resolveNpmCli(configured = process.env.npm_execpath): string {
  if (configured) return regular(configured);
  const binary = path.dirname(process.execPath);
  const candidates = [path.join(binary, 'node_modules/npm/bin/npm-cli.js'), path.join(binary, '../lib/node_modules/npm/bin/npm-cli.js')];
  for (const directory of (process.env.PATH ?? '').split(path.delimiter).filter(Boolean)) {
    candidates.push(path.join(directory, 'node_modules/npm/bin/npm-cli.js'));
    const wrapper = path.join(directory, 'npm');
    if (existsSync(wrapper)) { const resolved = realpathSync(wrapper); if (resolved.endsWith('npm-cli.js')) candidates.push(resolved); }
  }
  for (const candidate of candidates) if (existsSync(candidate)) return regular(candidate);
  throw new Error('Cannot locate npm-cli.js; run via npm or supply --npm-cli.');
}

function execute(program: string, args: readonly string[], cwd: string, env: NodeJS.ProcessEnv): Promise<CommandResult> {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    const child = spawn(program, [...args], { cwd, env, stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true });
    const stdout: Buffer[] = [], stderr: Buffer[] = []; let size = 0; let failure: Error | null = null;
    const timer = setTimeout(() => { failure = new Error('Qualification command timed out.'); child.kill(); }, 300_000);
    const collect = (target: Buffer[]) => (chunk: Buffer) => { size += chunk.length; if (size > MAX_OUTPUT) { failure = new Error('Qualification output exceeds 32 MiB.'); child.kill(); } else target.push(chunk); };
    child.stdout.on('data', collect(stdout)); child.stderr.on('data', collect(stderr));
    child.on('error', error => { clearTimeout(timer); reject(error); });
    child.on('close', (code, signal) => { clearTimeout(timer); if (failure) reject(failure); else resolve({ code, signal, stdout: Buffer.concat(stdout).toString('utf8'), stderr: Buffer.concat(stderr).toString('utf8'), durationMs: performance.now() - start }); });
  });
}

/** Qualify existing sealed bytes. No builder, packer or publisher is called here. */
export async function qualifySealedArtifacts(options: SealedArtifactOptions): Promise<SealedArtifactReport> {
  const root = realpathSync(options.root);
  const report = path.resolve(options.report);
  requireCondition(!inside(root, report), 'Evidence must be outside the sealed directory.');
  requireCondition(!existsSync(report), 'Evidence directory already exists; supply a fresh path.');
  mkdirSync(path.dirname(report), { recursive: true });
  const evidence = path.join(realpathSync(path.dirname(report)), path.basename(report));
  requireCondition(!inside(root, evidence), 'Evidence parent resolves inside sealed artifacts.');
  mkdirSync(evidence);
  const receipt: SealedArtifactReport = {
    schema: 1, kind: 'pcr-sealed-artifact-qualification', passed: false, startedAt: new Date().toISOString(), finishedAt: null,
    root, report: evidence, expectedSource: options.expectedSource,
    runtime: { platform: process.platform, architecture: process.arch, expectedArchitecture: options.expectedArchitecture ?? null, node: process.versions.node, npm: null, npmCli: null, npmCliSha256: null },
    identity: null, artifacts: [], checks: [], installation: { directory: null, removed: false }, selected: null, error: null,
  };
  const persist = () => writeFileSync(path.join(evidence, 'qualification.json'), `${JSON.stringify(receipt, null, 2)}\n`);
  persist();
  let temporary: string | null = null; let server: ReturnType<typeof createServer> | null = null; let requests = 0;
  let activeCommand = 'sentinel_setup'; const network: { command: string; method: string; target: string }[] = [];
  async function check<T>(name: string, operation: () => Promise<T> | T, detail: (value: T) => Record<string, unknown> = () => ({})): Promise<T> {
    try { const value = await operation(); receipt.checks.push({ name, passed: true, detail: detail(value) }); persist(); return value; }
    catch (error) { receipt.checks.push({ name, passed: false, detail: { error: error instanceof Error ? error.message : String(error) } }); persist(); throw error; }
  }
  try {
    const metadataProofs: ArtifactProof[] = [];
    const manifest: ProductManifest = await check('sealed_artifacts', async () => {
      requireCondition(/^[a-f0-9]{40}$/u.test(options.expectedSource) && !/^0+$/u.test(options.expectedSource), 'Expected source must be a full nonzero lowercase commit SHA.');
      const expected = options.expectedIdentity ? { ...assertProductIdentity(options.expectedIdentity) } : assertProductIdentity(field(jsonFile(path.join(root, 'release.json')), 'identity'));
      requireCondition(expected.sourceCommit === options.expectedSource, 'Sealed product differs from expected source commit.');
      for (const filename of ['release.json', 'SHA256SUMS']) {
        const target = regular(path.join(root, filename)); metadataProofs.push({ filename, bytes: lstatSync(target).size, sha256: await hash(target) });
      }
      const verified = await verifyProductArtifacts(root, { expectedIdentity: expected });
      for (const proof of metadataProofs) requireCondition(await hash(regular(path.join(root, proof.filename))) === proof.sha256, 'Sealed metadata changed during verification.');
      return verified;
    }, value => ({ identity: value.identity, artifacts: value.artifacts }));
    receipt.identity = { ...manifest.identity }; receipt.artifacts = [...manifest.artifacts.map(artifact => ({ ...artifact })), ...metadataProofs]; persist();
    const npmCli = await check('npm_entry', () => resolveNpmCli(options.npmCli));
    receipt.runtime.npmCli = npmCli; receipt.runtime.npmCliSha256 = await hash(npmCli);
    const version = await execute(process.execPath, [npmCli, '--version', '--offline', '--no-update-notifier'], root, { ...process.env, NODE_OPTIONS: '' });
    writeFileSync(path.join(evidence, 'npm-version.stdout'), version.stdout); writeFileSync(path.join(evidence, 'npm-version.stderr'), version.stderr);
    requireCondition(version.code === 0, `Cannot read actual npm version: ${version.stderr}`);
    receipt.runtime.npm = version.stdout.trim();
    await check('runtime', () => {
      requireCondition(/^12\./u.test(receipt.runtime.npm ?? ''), 'Offline qualification requires actual npm 12.');
      verifyRuntime(manifest.toolchain, { node: process.versions.node, npm: receipt.runtime.npm ?? '', platform: process.platform, arch: process.arch }, true, options.expectedArchitecture);
    }, () => ({ ...receipt.runtime }));
    temporary = mkdtempSync(path.join(realpathSync(tmpdir()), 'pcr-sealed-install-'));
    receipt.installation.directory = temporary;
    const installation = path.join(temporary, 'installation'); const cache = path.join(temporary, 'empty-cache'); const archives = path.join(temporary, 'sealed-inputs');
    mkdirSync(installation); mkdirSync(cache); mkdirSync(archives);
    writeFileSync(path.join(installation, 'package.json'), '{"private":true}\n');
    writeFileSync(path.join(temporary, 'npmrc'), '');
    const packages: string[] = [];
    await check('copied_tarball_digests', async () => {
      for (const kind of ['tool', 'library'] as const) {
        const artifact = manifest.packages[kind]; const target = path.join(archives, artifact.filename);
        copyFileSync(regular(path.join(root, artifact.filename)), target);
        requireCondition(lstatSync(target).size === artifact.bytes && await hash(target) === artifact.sha256, `Sealed ${kind} changed before installation.`);
        packages.push(target);
      }
    });
    server = createServer((request, response) => { requests += 1; network.push({ command: activeCommand, method: request.method ?? 'unknown', target: request.url ?? '' }); response.writeHead(503); response.end('Offline qualification forbids registry access.'); });
    server.on('connect', (request, socket) => { requests += 1; network.push({ command: activeCommand, method: 'CONNECT', target: request.url ?? '' }); socket.destroy(); });
    await new Promise<void>((resolve, reject) => { server?.once('error', reject); server?.listen(0, '127.0.0.1', resolve); });
    const address = server.address(); requireCondition(address !== null && typeof address !== 'string', 'Registry sentinel lacks a port.');
    if (address === null || typeof address === 'string') throw new Error('Registry sentinel unavailable.');
    const sentinel = `http://127.0.0.1:${address.port}`;
    const env: NodeJS.ProcessEnv = { ...process.env, NODE_OPTIONS: '', NODE_USE_ENV_PROXY: '1', HTTP_PROXY: sentinel, HTTPS_PROXY: sentinel, ALL_PROXY: sentinel,
      NO_PROXY: '127.0.0.1,localhost', npm_config_registry: sentinel, npm_config_cache: cache, npm_config_offline: 'true', npm_config_update_notifier: 'false', npm_config_userconfig: path.join(temporary, 'npmrc') };
    delete env.NODE_PATH; delete env.PCR_LIBRARY;
    async function command(name: string, args: readonly string[], expectedCode = 0): Promise<CommandResult> {
      return check(name, async () => {
        activeCommand = name;
        const result = await execute(process.execPath, args, installation, env);
        writeFileSync(path.join(evidence, `${name}.stdout`), result.stdout); writeFileSync(path.join(evidence, `${name}.stderr`), result.stderr);
        requireCondition(result.code === expectedCode && result.signal === null, `${name} exited ${result.code}: ${result.stderr}`);
        return result;
      }, value => ({ program: process.execPath, arguments: args, cwd: installation, exitCode: value.code, durationMs: value.durationMs,
        stdoutBytes: Buffer.byteLength(value.stdout), stderrBytes: Buffer.byteLength(value.stderr),
        stdoutSha256: createHash('sha256').update(value.stdout).digest('hex'), stderrSha256: createHash('sha256').update(value.stderr).digest('hex') }));
    }
    await command('offline_install', [npmCli, 'install', ...packages, '--offline', '--ignore-scripts', '--no-audit', '--no-fund', '--no-update-notifier', '--cache', cache, '--registry', sentinel]);
    const toolRoot = path.join(installation, 'node_modules/@tiangong-lca/pcr'); const libraryRoot = path.join(installation, 'node_modules/@tiangong-lca/pcr-library');
    const bin = await check('installed_identity', () => {
      for (const [kind, directory] of [['tool', toolRoot], ['library', libraryRoot]] as const) {
        const metadata = record(jsonFile(path.join(directory, 'package.json')));
        requireCondition(metadata.name === manifest.packages[kind].name && metadata.version === manifest.identity.version && metadata.gitHead === manifest.identity.sourceCommit, `Installed ${kind} metadata differs from sealed identity.`);
        requireCondition(sameIdentity(assertProductIdentity(jsonFile(path.join(directory, 'product-release.json'))), manifest.identity), `Installed ${kind} product identity differs.`);
      }
      const relative = text(field(jsonFile(path.join(toolRoot, 'package.json')), 'bin', 'tiangong-pcr'), 'emitted bin');
      const target = path.resolve(toolRoot, relative);
      requireCondition(inside(toolRoot, target) && path.extname(target) === '.js', 'Installed bin must be emitted JavaScript inside the tool package.');
      requireCondition(!existsSync(path.join(installation, 'node_modules/typescript')) && !existsSync(path.join(toolRoot, 'node_modules/typescript')), 'Installed consumer must not require TypeScript.');
      return regular(target);
    });
    const sqlite = regular(path.join(libraryRoot, 'library.sqlite'));
    const sqliteProof = manifest.artifacts.find(artifact => artifact.filename === 'library.sqlite'); if (!sqliteProof) throw new Error('Missing SQLite sealed proof.');
    const pinnedHash = `sha256:${sqliteProof.sha256}`;
    await check('installed_sqlite_digest', async () => requireCondition(await hash(sqlite) === sqliteProof.sha256, 'Installed SQLite differs from sealed bytes.'));
    const consume = (name: string, args: readonly string[], expectedCode = 0) => command(name, ['--no-strip-types', bin, ...args, '--format', 'json'], expectedCode);
    const verified = json((await consume('sqlite_integrity', ['library', 'verify', '--library', sqlite, '--library-sha256', pinnedHash])).stdout);
    requireCondition(verified.verified === true && field(verified, 'snapshot', 'source_commit') === manifest.identity.sourceCommit && field(verified, 'snapshot', 'content_version') === manifest.identity.version, 'SQLite integrity/source identity was not verified.');
    let selected: Record<string, unknown> | null = null; let page = 1;
    while (!selected) {
      const listed = json((await consume(`list_${page}`, ['list', '--scope', 'material', '--page-size', '100', '--page', String(page), '--library', sqlite, '--library-sha256', pinnedHash])).stdout);
      selected = array(listed.items, 'catalog items').map(value => record(value)).find(item => field(item, 'readiness', 'usable_for_guidance') === true) ?? null;
      if (selected || listed.has_more !== true) break;
      page += 1; requireCondition(page <= 10_000, 'Catalog pagination exceeds its qualification bound.');
    }
    requireCondition(selected !== null, 'Sealed library contains no usable material record.'); if (!selected) throw new Error('No selected record.');
    const id = text(selected.id, 'selected PCR ID'); requireCondition(id.length > 0, 'Selected PCR identity is empty.'); receipt.selected = { id, recordKind: text(selected.record_kind), version: selected.version }; persist();
    const expectedGuidance = await check('independent_source_guidance', () => {
      // Read through this tag's source implementation, separately from the installed
      // executable. Its core regenerates normative context from canonical Markdown
      // and checks schema, projection, source spans, provenance and readiness.
      const source = new OfflineLibrary(sqlite, { expectedSha256: pinnedHash, verify: true });
      try {
        requireCondition(source.manifest.snapshot.source_commit === manifest.identity.sourceCommit && source.manifest.snapshot.content_version === manifest.identity.version, 'Independent SQLite source identity differs.');
        return json(JSON.stringify(withPcrSource(source.root, source, () => buildGuidance({ root: source.root, pcrId: id }))));
      } finally { source.close(); }
    }, value => ({ id, units: array(field(value, 'normative_context', 'units'), 'verified normative units').length,
      bindings: array(field(value, 'normative_context', 'bindings'), 'verified normative bindings').length,
      provenance: field(value, 'normative_context_provenance'), readiness: value.readiness }));
    writeFileSync(path.join(evidence, 'source-guidance.json'), `${JSON.stringify(expectedGuidance, null, 2)}\n`);
    const resolved = json((await consume('resolve', ['resolve', '--pcr', id, '--library', sqlite, '--library-sha256', pinnedHash])).stdout);
    requireCondition(field(resolved, 'pcr', 'id') === id, 'Resolution did not retain the selected canonical identity.');
    const guidanceFile = path.join(evidence, 'guidance.json');
    await consume('guidance', ['guidance', '--pcr', id, '--library', sqlite, '--library-sha256', pinnedHash, '--output', guidanceFile]);
    const guidance = record(jsonFile(guidanceFile)); requireCondition(field(guidance, 'pcr', 'id') === id && guidance.schema_version === 2, 'Guidance did not retain its selected identity/contract.');
    await check('guidance_source_fidelity', () => requireCondition(isDeepStrictEqual(guidance, expectedGuidance), 'Installed guidance differs from independently verified SQLite source guidance.'));
    const batchInput = path.join(evidence, 'batch-request.json'); const batchOutput = path.join(evidence, 'batch.json');
    writeFileSync(batchInput, JSON.stringify({ schema_version: 1, pcr_ids: [id, id] }));
    await consume('batch', ['guidance', 'batch', '--input', batchInput, '--library', sqlite, '--library-sha256', pinnedHash, '--output', batchOutput]);
    const batch = record(jsonFile(batchOutput)); const items = array(batch.items, 'batch items');
    requireCondition(batch.count === 2 && items.length === 2 && items.every(item => field(item, 'pcr', 'id') === id), 'Batch lost input order, duplicates or identity.');
    await check('batch_source_fidelity', () => requireCondition(items.every(item => isDeepStrictEqual(item, expectedGuidance)), 'Batch differs from independently verified complete source guidance.'));
    const invalid = await consume('invalid_source', ['guidance', '--pcr', id, '--library', path.join(installation, 'missing.sqlite')], 1);
    requireCondition(invalid.stdout.trim() === '' && field(json(invalid.stderr), 'error', 'code') === 'PCR_LIBRARY_INVALID', 'Invalid source did not fail closed with a clean stdout.');
    await check('registry_no_network_sanity', () => requireCondition(requests === 0, 'Registry/proxy network access was attempted.'), () => ({ requests, offline: true, scope: 'offline npm plus registry/proxy sentinel; not OS-wide network isolation' }));
    await check('sealed_inputs_unchanged', async () => {
      for (const artifact of receipt.artifacts) requireCondition(await hash(regular(path.join(root, artifact.filename))) === artifact.sha256, `Sealed artifact changed during qualification: ${artifact.filename}`);
    });
    receipt.passed = true;
  } catch (error) { receipt.error = error instanceof Error ? error.message : String(error); }
  finally {
    if (server) await new Promise<void>(resolve => { server?.closeAllConnections(); server?.close(() => resolve()); });
    writeFileSync(path.join(evidence, 'network-sanity.json'), `${JSON.stringify(network, null, 2)}\n`);
    if (temporary) { try { rmSync(temporary, { recursive: true, force: true }); receipt.installation.removed = !existsSync(temporary); }
      catch (error) { receipt.passed = false; receipt.error = [receipt.error, `Installation cleanup failed: ${error instanceof Error ? error.message : String(error)}`].filter(Boolean).join('\n'); } }
    else receipt.installation.removed = true;
    receipt.finishedAt = new Date().toISOString(); persist();
  }
  return receipt;
}

export async function main(args: readonly string[]): Promise<number> {
  try {
    if (args.length === 1 && args[0] === '--help') {
      process.stdout.write('Usage: sealed-artifact --bundle <existing sealed directory> --expected-source <commit> --report <NEW external evidence directory> [--npm-cli <npm-cli.js>]\nVerifies sealed bytes, installs entirely offline with npm12 and an empty cache, and exercises emitted consumers without TypeScript. Does not build, repack or publish. Qualification JSON and command logs survive installation cleanup.\n'); return 0;
    }
    const values = new Map<string, string>();
    for (let index = 0; index < args.length; index += 2) { const key = args[index], value = args[index + 1]; if (!key || !['--bundle', '--report', '--expected-source', '--npm-cli'].includes(key) || !value || values.has(key)) throw new Error('Usage: --bundle <sealed-dir> --report <new-evidence-dir> --expected-source <commit> [--npm-cli <npm-cli.js>]'); values.set(key, value); }
    const root = values.get('--bundle'), report = values.get('--report'), expectedSource = values.get('--expected-source');
    if (!root || !report || !expectedSource) throw new Error('Root, fresh report directory and expected source are required.');
    const npmCli = values.get('--npm-cli'), expectedArchitecture = process.env.PCR_EXPECTED_ARCH; const result = await qualifySealedArtifacts({ root, report, expectedSource, ...(npmCli ? { npmCli } : {}), ...(expectedArchitecture ? { expectedArchitecture } : {}) });
    process.stdout.write(JSON.stringify(result) + '\n'); return result.passed ? 0 : 1;
  } catch (error) { process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`); return 1; }
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) process.exitCode = await main(process.argv.slice(2));
