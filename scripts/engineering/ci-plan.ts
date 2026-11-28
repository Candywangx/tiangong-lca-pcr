import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export type QualificationMode = 'full' | 'data' | 'pr-code' | 'docs-only';
export interface QualificationDecision {
  readonly mode: QualificationMode;
  readonly reason: string;
  readonly changedPaths: readonly string[];
  readonly changedPcrs: readonly string[];
}
export interface ChangeContext {
  readonly event: string;
  readonly reusable: boolean;
  readonly verifiedDiff: boolean;
  readonly paths: readonly string[];
  readonly forceFull?: boolean;
}
export interface CiPlan extends QualificationDecision {
  readonly schema: 1;
  readonly base: string | null;
  readonly head: string;
  readonly event: string;
  readonly reusable: boolean;
  readonly forceFull?: boolean;
}
const SHA = /^[a-f0-9]{40}$/u;
const canonical = /^library\/pcrs\/([a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+)\/(manifest\.yaml|structured\.yaml|pcr\.(?:en-US|zh-CN)\.md)$/u;
const derived = new Set([
  'library/catalog.yaml', 'library/indexes/pcr-index.yaml',
  'classifications/aliases/pcr-id-aliases.yaml',
  'classifications/mappings/cpc-3.0-to-pcr.yaml',
  'classifications/indexes/cpc-3.0-coverage.json',
]);
const docsOnlyExact = new Set(['AGENTS.md', 'README.md', '.docpact/config.yaml']);
const docsOnlyTopLevel = /^docs\/[a-z0-9-]+\.md$/u;
const isDocsOnlyPath = (p: string): boolean => docsOnlyExact.has(p) || docsOnlyTopLevel.test(p);
const isPrCodePath = (p: string): boolean => {
  if (isDocsOnlyPath(p)) return true;
  if (p === 'builder/lib/pcr-document-history.ts') return false;
  return p.startsWith('builder/cli/')
    || p.startsWith('builder/goal-harness/')
    || p.startsWith('builder/lib/')
    || p.startsWith('packages/tiangong-pcr-cli/')
    || p.startsWith('packages/pcr-viewer/')
    || p.startsWith('skills/')
    || p.startsWith('tests/');
};
/** Only complete, known content surfaces receive a reduced lane. This does not
 * certify scientific meaning: source checks and release qualification remain required. */
export function classifyQualification(context: ChangeContext): QualificationDecision {
  const paths = [...new Set(context.paths)].sort();
  const changedPcrs = [...new Set(paths.flatMap(p => {
    const match = canonical.exec(p); return match ? [`library/pcrs/${match[1]}`] : [];
  }))].sort();
  const full = (reason: string): QualificationDecision => ({ mode: 'full', reason, changedPaths: paths, changedPcrs });
  if (context.reusable || context.event === 'workflow_call') return full('reusable-release-qualification');
  if (context.forceFull) return full('forced-full-qualification');
  if (!['pull_request', 'push'].includes(context.event)) return full('unrecognized-or-manual-event');
  if (!context.verifiedDiff) return full('diff-not-proven');
  if (!paths.length) return full('empty-diff');
  if (paths.some(p => p.includes('\\') || /[\u0000-\u0020\u007f]/u.test(p)
    || path.posix.isAbsolute(p) || p.split('/').some(part => part === '..' || part === '.' || part === ''))) return full('unrecognized-path');
  if (changedPcrs.length && paths.every(p => canonical.test(p) || derived.has(p)
    || /^docs\/adr\/[0-9]{4}-[a-z0-9-]+\.md$/u.test(p))) {
    return { mode: 'data', reason: 'canonical-records-and-bounded-derived-data', changedPaths: paths, changedPcrs };
  }
  // PR-only reduced lanes never apply to main pushes, reusable releases, ADRs, web/docs-app,
  // dependencies, workflows, or engineering harnesses.
  if (context.event === 'pull_request') {
    if (paths.every(isDocsOnlyPath)) return { mode: 'docs-only', reason: 'repository-docs-only-pr', changedPaths: paths, changedPcrs };
    if (paths.every(isPrCodePath)) return { mode: 'pr-code', reason: 'non-web-non-release-code-pr', changedPaths: paths, changedPcrs };
  }
  if (!changedPcrs.length && paths.every(p => derived.has(p) || /^docs\/adr\/[0-9]{4}-[a-z0-9-]+\.md$/u.test(p))) {
    return full('no-selected-canonical-record');
  }
  return full('code-shared-or-unknown-change');
}
/** Reusable workflows receive declared inputs even for an empty legacy product
 * tag. Never infer the full release gate from the tag's truthiness. */
export function isReusableContext(value: string | undefined): boolean {
  if (value === undefined || value === '' || value === 'null') return false;
  try {
    const parsed: unknown = JSON.parse(value);
    return parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)
      || Object.keys(parsed).length > 0;
  } catch { return true; }
}
function git(root: string, args: readonly string[]): string {
  return execFileSync('git', [...args], { cwd: root, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
}
export function createCiPlan(root: string, context: { event: string; reusable: boolean; base?: string; head: string; forceFull?: boolean }): CiPlan {
  if (!SHA.test(context.head) || git(root, ['rev-parse', 'HEAD']).trim() !== context.head) throw new Error('CI head must identify the exact checked-out commit.');
  git(root, ['diff', '--exit-code', 'HEAD', '--']);
  let base: string | null = null;
  let paths: string[] = [];
  let verifiedDiff = false;
  if (context.base && SHA.test(context.base) && !/^0{40}$/u.test(context.base)) {
    try {
      git(root, ['cat-file', '-e', `${context.base}^{commit}`]);
      git(root, ['merge-base', '--is-ancestor', context.base, context.head]);
      const result = git(root, ['diff', '--name-only', '-z', '--no-renames', context.base, context.head, '--']);
      paths = result.split('\0').filter(Boolean); base = context.base; verifiedDiff = true;
    } catch { /* Missing or non-ancestral history must select full qualification. */ }
  }
  const forceFull = context.forceFull === true;
  return { schema: 1, base, head: context.head, event: context.event, reusable: context.reusable, ...(forceFull ? { forceFull: true } : {}),
    ...classifyQualification({ event: context.event, reusable: context.reusable, verifiedDiff, paths, forceFull }) };
}
export function verifyCiPlan(root: string, value: unknown, context: { event: string; reusable: boolean; base?: string; head: string; forceFull?: boolean }): CiPlan {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid CI plan.');
  const input = value as Record<string, unknown>;
  if (typeof input.head !== 'string' || typeof input.event !== 'string' || typeof input.reusable !== 'boolean'
    || !(input.base === null || typeof input.base === 'string')) throw new Error('Invalid CI plan identity.');
  const expected = createCiPlan(root, context);
  if (JSON.stringify(input) !== JSON.stringify(expected)) throw new Error('CI plan changed or no longer matches its exact source diff.');
  return expected;
}
function environmentContext() {
  return { event: process.env.CI_EVENT_NAME ?? '', reusable: isReusableContext(process.env.CI_WORKFLOW_INPUTS),
    ...(process.env.CI_FORCE_FULL === 'true' ? { forceFull: true } : {}),
    ...(process.env.CI_BASE_SHA ? { base: process.env.CI_BASE_SHA } : {}), head: process.env.CI_HEAD_SHA ?? '' };
}
function main(): void {
  const [action, filename] = process.argv.slice(2);
  if (!filename || process.argv.length !== 4) throw new Error('Usage: ci-plan.ts plan <new-file> | verify <file>');
  if (action === 'plan') {
    const value = createCiPlan(process.cwd(), environmentContext());
    writeFileSync(filename, JSON.stringify(value) + '\n', { flag: 'wx' });
    console.log(JSON.stringify(value));
  } else if (action === 'verify') console.log(JSON.stringify(verifyCiPlan(process.cwd(), JSON.parse(readFileSync(filename, 'utf8')) as unknown, environmentContext())));
  else throw new Error('Unknown CI plan action.');
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try { main(); } catch (error) { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1; }
}
