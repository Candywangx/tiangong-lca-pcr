import assert from 'node:assert/strict';
import fs, { mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { mock, type TestContext } from 'node:test';
import { syncBuiltinESMExports } from 'node:module';
import { catalogTransactionStatePaths, recoverCatalogArtifactTransaction, runCatalogArtifactTransaction } from '../catalog-artifact-transaction.ts';
import { recoverPcrDirectoryTransaction, runPcrDirectoryTransaction, transactionStatePaths } from '../pcr-directory-transaction.ts';
import { field, type UnknownRecord } from '../guards.ts';

export const catalogArtifacts = [
  { path: 'library/catalog.yaml', content: 'unchanged catalog\n' },
  { path: 'library/indexes/material.yaml', content: 'new material\n' },
  { path: 'classifications/indexes/new.json', content: 'new coverage\n', mode: 0o640 },
];

export function transactionFixture(t: TestContext) {
  const root = mkdtempSync(path.join(realpathSync(os.tmpdir()), 'pcr-transaction-recovery-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  put(path.join(root, 'library/catalog.yaml'), 'unchanged catalog\n');
  put(path.join(root, 'library/indexes/material.yaml'), 'old material\n');
  mkdirSync(path.join(root, 'classifications/indexes'), { recursive: true });
  const pcr = path.join(root, 'library/pcrs/agriculture/crops/wheat');
  put(path.join(pcr, 'manifest.yaml'), 'id: wheat\nstatus: candidate\n');
  put(path.join(pcr, 'pcr.en-US.md'), 'old methodology\n');
  put(path.join(pcr, 'evidence/source.txt'), 'old source\n');
  return { root, pcr, catalog: catalogTransactionStatePaths({ root }), directory: transactionStatePaths({ root, pcr }) };
}

export function put(target: string, bytes: string | Buffer): void {
  mkdirSync(path.dirname(target), { recursive: true });
  writeFileSync(target, bytes);
}
export function json(target: string, value: unknown): void { put(target, `${JSON.stringify(value, null, 2)}\n`); }
function isRecord(value: unknown): value is UnknownRecord { return value !== null && typeof value === 'object' && !Array.isArray(value); }
export function record(value: unknown): UnknownRecord {
  assert.ok(isRecord(value));
  return value;
}
export function readRecord(target: string): UnknownRecord { return record(JSON.parse(readFileSync(target, 'utf8')) as unknown); }
export function errorIs(code: string): (error: unknown) => boolean {
  return error => { assert.equal(field(error, 'code'), code); return true; };
}
export function crash(fixture: ReturnType<typeof transactionFixture>, kind: 'catalog' | 'directory', phase: string): void {
  const result = spawnSync(process.execPath, [fileURLToPath(import.meta.url), '--crash', kind, fixture.root, fixture.pcr, phase], { encoding: 'utf8' });
  assert.equal(result.status, 73, `${kind}/${phase}: ${result.stderr}\n${result.stdout}`);
}

export interface FilesystemFault {
  operation: 'openSync' | 'fstatSync' | 'lstatSync' | 'mkdirSync' | 'renameSync' | 'linkSync' | 'readFileSync' | 'writeFileSync' | 'fsyncSync' | 'rmdirSync' | 'rmSync';
  pathContains: string;
  exactPath?: boolean;
  activateOnPhase?: string;
  at?: number;
  when?: 'before' | 'after';
  action: 'throw' | 'write' | 'remove' | 'replace' | 'directory' | 'not-file' | 'device' | 'symlink';
  target?: string;
  content?: string;
  code?: string;
}

/** Faults affect one operation in an isolated process. All surrounding I/O remains real. */
export function filesystemFault(fixture: ReturnType<typeof transactionFixture>, kind: 'catalog' | 'directory', mode: 'run' | 'recover', fault: FilesystemFault): UnknownRecord {
  const result = spawnSync(process.execPath, [fileURLToPath(import.meta.url), '--fault', kind, fixture.root, fixture.pcr, mode, JSON.stringify(fault)], { encoding: 'utf8' });
  assert.equal(result.status, 0, `${result.stderr}\n${result.stdout}`);
  return record(JSON.parse(result.stdout.trim()) as unknown);
}

if (process.argv[2] === '--fault') {
  const [, , , kind, root, pcr, mode, encoded] = process.argv;
  assert.ok(root && pcr && encoded);
  const fault = readFault(JSON.parse(encoded) as unknown);
  const descriptors = new Map<number, string>();
  let matches = 0;
  let fired = false;
  let active = fault.activateOnPhase === undefined;
  const operations = ['openSync', 'fstatSync', 'lstatSync', 'mkdirSync', 'renameSync', 'linkSync', 'readFileSync', 'writeFileSync', 'fsyncSync', 'rmdirSync', 'rmSync'] as const;
  const originals = { ...fs };
  function matchesTarget(args: unknown[]): boolean {
    const operand = args[0];
    const target = typeof operand === 'number' ? descriptors.get(operand) ?? '' : String(operand);
    return fault.exactPath ? target === fault.pathContains : target.includes(fault.pathContains);
  }
  function inject(result: unknown, args: unknown[]): void {
    fired = true;
    const target = fault.target ?? (typeof args[0] === 'string' ? args[0] : typeof args[0] === 'number' ? descriptors.get(args[0]) : undefined);
    if (fault.action === 'throw') throw Object.assign(new Error('injected filesystem failure'), { code: fault.code ?? 'EIO' });
    if (fault.action === 'not-file') { assert.ok(result && typeof result === 'object'); Object.defineProperty(result, 'isFile', { value: () => false }); return; }
    if (fault.action === 'device') { assert.ok(result && typeof result === 'object'); Object.defineProperty(result, 'dev', { value: -1 }); return; }
    assert.ok(target);
    if (fault.action === 'remove') originals.rmSync(target, { recursive: true, force: true });
    if (fault.action === 'write') originals.writeFileSync(target, fault.content ?? 'concurrent writer\n');
    if (fault.action === 'replace') { originals.renameSync(target, `${target}.displaced`); originals.writeFileSync(target, fault.content ?? 'concurrent writer\n'); }
    if (fault.action === 'directory') { originals.rmSync(target, { recursive: true, force: true }); originals.mkdirSync(target, { recursive: true }); }
    if (fault.action === 'symlink') { originals.renameSync(target, `${target}.displaced`); originals.symlinkSync(`${target}.displaced`, target); }
  }
  for (const operation of operations) {
    const original = originals[operation];
    mock.method(fs, operation, (...args: unknown[]) => {
      const selected = active && operation === fault.operation && !fired && matchesTarget(args) && ++matches === (fault.at ?? 1);
      if (selected && fault.when !== 'after') inject(undefined, args);
      const result: unknown = Reflect.apply(original, fs, args);
      if (operation === 'openSync' && typeof result === 'number') descriptors.set(result, String(args[0]));
      if (selected && fault.when === 'after') inject(result, args);
      return result;
    });
  }
  syncBuiltinESMExports();
  try {
    const result = kind === 'catalog'
      ? mode === 'recover' ? recoverCatalogArtifactTransaction({ root }) : runCatalogArtifactTransaction({ root, artifacts: catalogArtifacts, hooks: { onPhase: c => { if (c.phase === fault.activateOnPhase) active = true; } } })
      : mode === 'recover' ? recoverPcrDirectoryTransaction({ root, pcr }) : runPcrDirectoryTransaction({ root, pcr, prepareStage: c => put(path.join(c.stageDir, 'pcr.en-US.md'), 'new methodology\n') });
    process.stdout.write(JSON.stringify({ fired, result }));
  } catch (error) {
    process.stdout.write(JSON.stringify({ fired, error: { code: field(error, 'code'), message: field(error, 'message'), causeCode: field(field(error, 'cause'), 'code') } }));
  }
}

function readFault(value: unknown): FilesystemFault {
  const input = record(value);
  const operations = ['openSync', 'fstatSync', 'lstatSync', 'mkdirSync', 'renameSync', 'linkSync', 'readFileSync', 'writeFileSync', 'fsyncSync', 'rmdirSync', 'rmSync'] as const;
  const actions = ['throw', 'write', 'remove', 'replace', 'directory', 'not-file', 'device', 'symlink'] as const;
  const operation = operations.find(item => item === input.operation); const action = actions.find(item => item === input.action);
  assert.ok(operation && action); assert.equal(typeof input.pathContains, 'string');
  assert.ok(typeof input.pathContains === 'string');
  const when = input.when; assert.ok(when === undefined || when === 'before' || when === 'after');
  const exactPath = input.exactPath; const activateOnPhase = input.activateOnPhase;
  assert.ok(exactPath === undefined || typeof exactPath === 'boolean'); assert.ok(activateOnPhase === undefined || typeof activateOnPhase === 'string');
  const at = input.at; assert.ok(at === undefined || (typeof at === 'number' && Number.isSafeInteger(at) && at > 0));
  const target = input.target; const content = input.content; const code = input.code;
  assert.ok(target === undefined || typeof target === 'string'); assert.ok(content === undefined || typeof content === 'string'); assert.ok(code === undefined || typeof code === 'string');
  return { operation, action, pathContains: input.pathContains, ...(when ? { when } : {}), ...(at === undefined ? {} : { at }), ...(exactPath === undefined ? {} : { exactPath }), ...(activateOnPhase === undefined ? {} : { activateOnPhase }), ...(target === undefined ? {} : { target }), ...(content === undefined ? {} : { content }), ...(code === undefined ? {} : { code }) };
}

if (process.argv[2] === '--crash') {
  const [, , , kind, root, pcr, phase] = process.argv;
  assert.ok(root && pcr && phase);
  if (kind === 'catalog') {
    runCatalogArtifactTransaction({ root, artifacts: catalogArtifacts, hooks: {
      afterLockAcquired: () => { if (phase === 'lock') process.exit(73); },
      afterArtifactBackedUp: () => { if (phase === 'backed-up') process.exit(73); },
      afterArtifactInstalled: () => { if (phase === 'first-installed') process.exit(73); },
      onPhase: context => { if (context.phase === phase) process.exit(73); },
    } });
  } else if (kind === 'directory') {
    runPcrDirectoryTransaction({ root, pcr,
      prepareStage: context => { put(path.join(context.stageDir, 'pcr.en-US.md'), 'new methodology\n'); if (phase === 'stage') process.exit(73); },
      onPhase: context => { if (context.phase === phase) process.exit(73); },
    });
  } else throw new Error('Unknown transaction subprocess kind');
  throw new Error('Crash phase was not reached');
}
