import { createHash } from 'node:crypto';
import { existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

/** These runtime JSON files are read through fs URLs, so tsc cannot emit them. */
export const TEST_RUNTIME_SCHEMAS = [
  'agent-review.schema.json', 'classification-coverage.schema.json',
  'controlled-vocabulary.schema.json', 'dataset-validation-input.schema.json',
  'feedback-draft-output.schema.json', 'feedback.schema.json',
  'guidance-batch-request.schema.json', 'guidance-output.schema.json',
  'model-validation-input.schema.json', 'pcr-id-aliases.schema.json',
  'readiness.schema.json', 'structured-projection.schema.json', 'validation-output.schema.json',
] as const;
const MARKER = '.pcr-test-assets.json';
const digest = (bytes: Buffer) => createHash('sha256').update(bytes).digest('hex');
function object(value: unknown): value is Record<string, unknown> { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function regular(file: string): void { const stat = lstatSync(file); if (!stat.isFile() || stat.isSymbolicLink()) throw new Error('Test asset must be a regular file: ' + file); }
function directory(root: string, relative: string, create = false): string {
  let current = root;
  for (const part of relative.split('/')) {
    current = path.join(current, part);
    if (create && !existsSync(current) && !lstatSync(current, { throwIfNoEntry: false })) mkdirSync(current);
    const stat = lstatSync(current);
    if (!stat.isDirectory() || stat.isSymbolicLink()) throw new Error('Test asset directory must not follow aliases: ' + current);
  }
  return current;
}
function verifyOwned(directory: string, current: ReadonlyMap<string, Buffer>): void {
  const entries = readdirSync(directory);
  if (entries.some(name => name !== MARKER && !current.has(name))) throw new Error('Existing test asset output contains unowned files.');
  let previous: Record<string, unknown> = {};
  if (entries.includes(MARKER)) {
    regular(path.join(directory, MARKER));
    const value: unknown = JSON.parse(readFileSync(path.join(directory, MARKER), 'utf8'));
    if (!object(value) || value.schema !== 1 || value.owner !== 'pcr-emitted-engineering-tests' || !object(value.files) ||
      JSON.stringify(Object.keys(value.files).sort()) !== JSON.stringify([...TEST_RUNTIME_SCHEMAS].sort())) throw new Error('Existing test asset output lacks ownership.');
    previous = value.files;
  }
  // resolveJsonModule may have just emitted a subset, including updated bytes.
  // Those files must match this source exactly; remaining prior assets must
  // retain their recorded owned bytes. Neither case authorizes arbitrary data.
  for (const name of entries.filter(name => name !== MARKER)) {
    regular(path.join(directory, name));
    const bytes = current.get(name); if (!bytes) throw new Error('Unowned test asset: ' + name);
    const hash = digest(readFileSync(path.join(directory, name)));
    // TypeScript 7's resolveJsonModule output uses four-space JSON formatting.
    // Accept that exact known emission, then install the original source bytes.
    const compilerBytes = Buffer.from(JSON.stringify(JSON.parse(bytes.toString('utf8')) as unknown, null, 4) + '\n');
    if (hash !== digest(bytes) && hash !== digest(compilerBytes) && hash !== previous[name]) throw new Error('Existing test asset output was modified: ' + name);
  }
}

/** Stage only the fs-loaded schema closure after tsc; never clean arbitrary output. */
export function stageTestRuntimeAssets(inputRoot = process.cwd()): { files: number; output: string } {
  const root = realpathSync(inputRoot);
  const source = directory(root, 'packages/pcr-core/schemas');
  const output = directory(root, 'dist/test-engineering');
  regular(path.join(directory(output, 'scripts/engineering'), 'runtime.js'));
  const bytes = new Map(TEST_RUNTIME_SCHEMAS.map(name => { const file = path.join(source, name); regular(file); return [name, readFileSync(file)] as const; }));
  const parent = directory(output, 'packages/pcr-core', true), target = path.join(parent, 'schemas');
  if (lstatSync(target, { throwIfNoEntry: false })) { directory(parent, 'schemas'); verifyOwned(target, bytes); }
  const scratch = mkdtempSync(path.join(parent, '.pcr-test-assets-')), stage = path.join(scratch, 'assets'), previous = path.join(scratch, 'previous');
  let moved = false;
  try {
    mkdirSync(stage);
    for (const [name, value] of bytes) writeFileSync(path.join(stage, name), value);
    writeFileSync(path.join(stage, MARKER), JSON.stringify({ schema: 1, owner: 'pcr-emitted-engineering-tests', files: Object.fromEntries([...bytes].map(([name, value]) => [name, digest(value)])) }) + '\n');
    if (existsSync(target)) { renameSync(target, previous); moved = true; }
    try { renameSync(stage, target); } catch (error) { if (moved && !existsSync(target)) renameSync(previous, target); throw error; }
    return { files: bytes.size, output: target };
  } finally { rmSync(scratch, { recursive: true, force: true }); }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try { if (process.argv.length !== 2) throw new Error('Usage: node scripts/engineering/test-assets.ts'); process.stdout.write(JSON.stringify(stageTestRuntimeAssets()) + '\n'); }
  catch (error) { process.stderr.write((error instanceof Error ? error.message : String(error)) + '\n'); process.exitCode = 1; }
}
