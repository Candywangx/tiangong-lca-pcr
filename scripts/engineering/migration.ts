import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { lstatSync, readFileSync, realpathSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { API } from 'typescript/unstable/sync';
import { createVirtualFileSystem } from 'typescript/unstable/fs';
import { SyntaxKind, getLeadingCommentRanges, getTrailingCommentRanges } from 'typescript/unstable/ast';
import type { Node } from 'typescript/unstable/ast';

const manifestPath = 'config/typescript-migration.json';
const legacyPattern = /\.(?:[cm]?js|jsx)$/iu;
const tsPattern = /\.(?:[cm]?ts|tsx)$/iu;
const pythonPath = 'scripts/vendor/workspace-seo/check.py';
const generatedDefinitions = [
  { path: 'packages/pcr-core/src/generated/controlled-vocabulary.ts', kind: 'controlled-vocabulary', generator: 'builder/scripts/generate-controlled-vocabulary.ts', source: 'builder/vocab', optional: false },
  { path: 'packages/pcr-docs/public/generated/search-worker.mjs', kind: 'typescript-browser', generator: 'packages/pcr-docs/scripts/browser-assets.ts', source: 'packages/pcr-docs/lib/search-worker.ts', optional: true },
] as const;

type GeneratedEntry = { path: string; kind: string; generator: string; source: string; optional: boolean };
type Manifest = { schemaVersion: 1; baselineCommit: string; legacy: string[]; generated: GeneratedEntry[]; retainedPython: { path: string; approval: string; reason: string }[] };
export type MigrationFinding = { code: string; path: string; message: string };
export type MigrationReport = { schemaVersion: 1; ok: boolean; counts: { legacy: number; generated: number; retainedPython: number; typescript: number }; findings: MigrationFinding[] };

function git(root: string, args: string[]): string {
  return execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 32 * 1024 * 1024 });
}
function safePath(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/[\\\x00-\x1f\x7f]/u.test(value) && !path.posix.isAbsolute(value) && !/^[a-z]:/iu.test(value) && value.split('/').every(part => part !== '' && part !== '.' && part !== '..');
}
function object(value: unknown, keys: string[]): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).sort().join('|') === [...keys].sort().join('|');
}
function parseManifest(value: unknown): Manifest {
  if (!object(value, ['schemaVersion', 'baselineCommit', 'legacy', 'generated', 'retainedPython']) || value.schemaVersion !== 1 || typeof value.baselineCommit !== 'string' || !/^[a-f0-9]{40}$/u.test(value.baselineCommit) || !Array.isArray(value.legacy) || !Array.isArray(value.generated) || !Array.isArray(value.retainedPython)) throw new Error('Expected schemaVersion 1, exact baseline commit, and legacy/generated/retainedPython arrays.');
  const seen = new Set<string>();
  function claim(candidate: unknown): string {
    if (!safePath(candidate)) throw new Error(`Unsafe inventory path: ${String(candidate)}`);
    if (seen.has(candidate)) throw new Error(`Duplicate inventory path: ${candidate}`);
    seen.add(candidate);
    return candidate;
  }
  const legacy = value.legacy.map(candidate => {
    const entry = claim(candidate);
    if (generatedDefinitions.some(known => known.path === entry)) throw new Error(`Generated artifact cannot be reclassified as authored legacy: ${entry}`);
    if (!legacyPattern.test(entry)) throw new Error(`Legacy entry must name a JavaScript source: ${entry}`);
    return entry;
  });
  const generated = value.generated.map((candidate: unknown): GeneratedEntry => {
    if (!object(candidate, ['path', 'kind', 'generator', 'source', 'optional']) || typeof candidate.kind !== 'string' || typeof candidate.optional !== 'boolean' || !safePath(candidate.generator) || !safePath(candidate.source)) throw new Error('Invalid generated-artifact entry.');
    const entry = { path: claim(candidate.path), kind: candidate.kind, generator: candidate.generator, source: candidate.source, optional: candidate.optional };
    if (!generatedDefinitions.some(known => Object.keys(known).every(key => known[key as keyof typeof known] === entry[key as keyof GeneratedEntry]))) throw new Error(`Unapproved generated-artifact classification: ${entry.path}`);
    return entry;
  });
  const retainedPython = value.retainedPython.map((candidate: unknown) => {
    if (!object(candidate, ['path', 'approval', 'reason']) || typeof candidate.approval !== 'string' || !/^https:\/\/github\.com\/tiangong-lca\/pcr\/(?:issues|pull)\/\d+$/u.test(candidate.approval) || typeof candidate.reason !== 'string' || candidate.reason.trim().length === 0) throw new Error('Retained Python requires a durable approval and reason.');
    const entry = { path: claim(candidate.path), approval: candidate.approval, reason: candidate.reason };
    if (entry.path !== pythonPath) throw new Error(`Unapproved retained Python path: ${entry.path}`);
    return entry;
  });
  return { schemaVersion: 1, baselineCommit: value.baselineCommit, legacy, generated, retainedPython };
}
function present(root: string, relative: string): boolean {
  try { lstatSync(path.join(root, relative)); return true; }
  catch (error) {
    if (error !== null && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') return false;
    throw error;
  }
}
function readRegularBytes(root: string, relative: string): Buffer {
  const absolute = path.join(root, relative);
  const stat = lstatSync(absolute);
  if (!stat.isFile() || stat.isSymbolicLink() || realpathSync(absolute) !== absolute) throw new Error('Expected a regular file with no symlink components.');
  return readFileSync(absolute);
}
function readRegularFile(root: string, relative: string): string {
  return readRegularBytes(root, relative).toString('utf8');
}
function inspectTypeScript(root: string, files: string[], findings: MigrationFinding[]): void {
  if (files.length === 0) return;
  // An in-memory project avoids mutating tsconfig or writing compiler caches.
  // TypeScript 7's pinned API supplies the actual parser and distinguishes types from text.
  // The native parser resolves Windows paths against its drive. Match its absolute,
  // forward-slash filenames instead of relying on a POSIX-only virtual root.
  const virtualRoot = path.join(root, '__pcr_migration__').replaceAll(path.sep, '/').replace(/^[A-Z]:/u, drive => drive.toLowerCase());
  const virtualPath = (file: string): string => `${virtualRoot}/${file}`;
  const config = virtualPath('tsconfig.json');
  const virtualFiles: Record<string, string> = {};
  const sources = new Map<string, string>();
  for (const file of files) {
    try { sources.set(file, readRegularFile(root, file)); }
    catch (error) { findings.push({ code: 'SOURCE_UNREADABLE', path: file, message: errorMessage(error) }); }
  }
  for (const [file, content] of sources) virtualFiles[virtualPath(file)] = content;
  virtualFiles[config] = JSON.stringify({ compilerOptions: { noLib: true, noResolve: true, jsx: 'preserve' }, files: [...sources.keys()].map(file => `./${file}`) });
  const api = new API({ cwd: root, fs: createVirtualFileSystem(virtualFiles) });
  try {
    const snapshot = api.updateSnapshot({ openProject: config });
    const project = snapshot.getProject(config);
    if (!project) throw new Error('TypeScript parser project is unavailable.');
    for (const [file, text] of sources) {
      const source = project.program.getSourceFile(virtualPath(file));
      if (!source) throw new Error(`TypeScript parser omitted ${file}`);
      for (const diagnostic of project.program.getSyntacticDiagnostics(source.fileName)) findings.push({ code: 'TYPESCRIPT_SYNTAX', path: file, message: diagnostic.text });
      const comments = new Map<number, number>();
      const visit = (node: Node): void => {
        if (node.kind === SyntaxKind.AnyKeyword) {
          const position = source.getLineAndCharacterOfPosition(node.getStart());
          findings.push({ code: 'TYPESCRIPT_ANY', path: file, message: `Explicit any at ${position.line + 1}:${position.character + 1}; use a checked type or unknown.` });
        }
        for (const range of [...(getLeadingCommentRanges(text, node.pos) ?? []), ...(getTrailingCommentRanges(text, node.end) ?? [])]) comments.set(range.pos, range.end);
        node.forEachChild(visit);
      };
      visit(source);
      for (const [start, end] of comments) {
        const comment = text.slice(start, end);
        for (const directive of comment.matchAll(/@ts-(?:nocheck|ignore|expect-error)\b/gu)) {
          const position = source.getLineAndCharacterOfPosition(start + (directive.index ?? 0));
          findings.push({ code: 'TYPESCRIPT_SUPPRESSION', path: file, message: `Type-check suppression ${directive[0]} at ${position.line + 1}:${position.character + 1}.` });
        }
      }
    }
    snapshot.dispose();
  } finally { api.close(); }
}
function errorMessage(error: unknown): string { return error instanceof Error ? error.message : String(error); }

/** Read-only migration gate; discovered source includes tracked and nonignored untracked files. */
export async function checkMigration(requestedRoot: string = process.cwd()): Promise<MigrationReport> {
  const root = realpathSync(path.resolve(requestedRoot));
  const report: MigrationReport = { schemaVersion: 1, ok: false, counts: { legacy: 0, generated: 0, retainedPython: 0, typescript: 0 }, findings: [] };
  const add = (code: string, file: string, message: string): void => { report.findings.push({ code, path: file, message }); };
  try {
    // Git and Node can retain different drive/directory casing for the same Windows
    // directory. Compare filesystem identity, preserving rejection of nested roots.
    const repositoryRoot = git(root, ['rev-parse', '--show-toplevel']).trim();
    const requestedIdentity = statSync(root, { bigint: true });
    const repositoryIdentity = statSync(repositoryRoot, { bigint: true });
    if (!requestedIdentity.isDirectory() || !repositoryIdentity.isDirectory() || requestedIdentity.dev !== repositoryIdentity.dev || requestedIdentity.ino !== repositoryIdentity.ino || git(root, ['rev-parse', '--show-prefix']).trim() !== '') throw new Error('--root must be the Git repository root.');
    const manifest = parseManifest(JSON.parse(readRegularFile(root, manifestPath)) as unknown);
    const discovered = [...new Set(git(root, ['ls-files', '--cached', '--others', '--exclude-standard', '-z']).split('\0').filter(Boolean))].filter(file => present(root, file)).sort();
    const baseline = new Set(git(root, ['ls-tree', '-r', '--name-only', '-z', manifest.baselineCommit]).split('\0').filter(Boolean));
    const legacy = new Set(manifest.legacy);
    const generated = new Set(manifest.generated.map(entry => entry.path));
    const python = new Set(manifest.retainedPython.map(entry => entry.path));
    for (const file of manifest.legacy) {
      if (!baseline.has(file)) add('BASELINE_GROWTH', file, 'Legacy path was not present at the recorded baseline commit; new implementation must use TypeScript.');
    }
    for (const file of [...manifest.legacy, ...manifest.retainedPython.map(entry => entry.path)]) {
      if (!discovered.includes(file)) add('STALE_INVENTORY', file, 'Inventory entry is absent from repository discovery. Remove it only after conversion or approved retirement.');
      try { readRegularFile(root, file); } catch (error) { add('SOURCE_UNREADABLE', file, errorMessage(error)); }
    }
    for (const file of discovered) {
      if (!safePath(file)) { add('UNSAFE_PATH', file, 'Noncanonical repository path.'); continue; }
      if (legacyPattern.test(file)) {
        if (legacy.has(file)) report.counts.legacy++;
        else if (!generated.has(file)) add('UNINVENTORIED_JAVASCRIPT', file, 'Authored JavaScript is outside the migration inventory; new code must use TypeScript.');
      } else if (/\.py$/iu.test(file)) {
        if (python.has(file)) report.counts.retainedPython++;
        else add('UNAPPROVED_PYTHON', file, 'Python is outside the exact approved SEO retention.');
      }
    }
    for (const entry of manifest.generated) {
      // Ignored build workareas are outside source discovery; a tracked or nonignored copy is verified.
      if (entry.optional && !discovered.includes(entry.path)) continue;
      const exists = present(root, entry.path);
      if (!exists && entry.optional) continue;
      try {
        const content = readRegularBytes(root, entry.path);
        readRegularFile(root, entry.generator);
        if (content.length === 0) throw new Error('Generated artifact is empty.');
        execFileSync(process.execPath, [path.join(root, entry.generator), '--check'], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 30_000 });
        report.counts.generated++;
      } catch (error) { add('GENERATED_EVIDENCE', entry.path, errorMessage(error)); }
    }
    for (const entry of manifest.retainedPython) {
      try {
        const evidence: unknown = JSON.parse(readRegularFile(root, 'scripts/vendor/workspace-seo/manifest.json'));
        if (!object(evidence, ['schema', 'generated', 'source_repository', 'source_commit', 'source_path', 'sha256']) || evidence.schema !== 1 || evidence.generated !== true || evidence.source_repository !== 'tiangong-lca/workspace' || evidence.source_path !== 'scripts/seo/check.py' || typeof evidence.source_commit !== 'string' || !/^[a-f0-9]{40}$/u.test(evidence.source_commit) || evidence.sha256 !== createHash('sha256').update(readRegularBytes(root, entry.path)).digest('hex')) throw new Error('SEO vendor manifest does not match retained Python bytes.');
      } catch (error) { add('PYTHON_EVIDENCE', entry.path, errorMessage(error)); }
    }
    const typescript = discovered.filter(file => tsPattern.test(file));
    report.counts.typescript = typescript.length;
    inspectTypeScript(root, typescript, report.findings);
  } catch (error) { add('INVENTORY_INVALID', manifestPath, errorMessage(error)); }
  report.findings.sort((a, b) => a.path.localeCompare(b.path, 'en') || a.code.localeCompare(b.code, 'en') || a.message.localeCompare(b.message, 'en'));
  report.ok = report.findings.length === 0;
  return report;
}

export async function runMigrationCli(args: string[]): Promise<number> {
  let root = process.cwd();
  let format = 'human';
  for (let index = 0; index < args.length; index++) {
    const argument = args[index];
    if (argument === '--help') { process.stdout.write('Usage: node scripts/engineering/migration.ts [--root <repository>] [--format human|json]\nRead-only inventory, generated evidence, Python approval, and TypeScript escape check.\n'); return 0; }
    const value = args[index + 1];
    if ((argument !== '--root' && argument !== '--format') || !value || value.startsWith('--')) { process.stderr.write(`Invalid migration option: ${argument ?? ''}\n`); return 2; }
    if (argument === '--root') root = value; else format = value;
    index++;
  }
  if (format !== 'human' && format !== 'json') { process.stderr.write('Expected --format human|json.\n'); return 2; }
  let report: MigrationReport;
  try { report = await checkMigration(root); }
  catch (error) { report = { schemaVersion: 1, ok: false, counts: { legacy: 0, generated: 0, retainedPython: 0, typescript: 0 }, findings: [{ code: 'INVENTORY_INVALID', path: manifestPath, message: errorMessage(error) }] }; }
  process.stdout.write(format === 'json' ? `${JSON.stringify(report, null, 2)}\n` : [`TypeScript migration inventory: ${report.ok ? 'PASS' : 'FAIL'}`, `Legacy authored JavaScript: ${report.counts.legacy}; verified generated: ${report.counts.generated}; retained Python: ${report.counts.retainedPython}; TypeScript: ${report.counts.typescript}.`, ...report.findings.map(finding => `${finding.code} ${finding.path}: ${finding.message}`)].join('\n') + '\n');
  return report.ok ? 0 : 1;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) process.exitCode = await runMigrationCli(process.argv.slice(2));
