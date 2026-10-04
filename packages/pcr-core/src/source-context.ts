import { AsyncLocalStorage } from 'node:async_hooks';
import path from 'node:path';
import type { PcrSource } from './types.ts';

// Scope a storage adapter to one consumption request. Repository readers remain
// authoritative by default; adapters do not become a process-global root cache.
const sources = new AsyncLocalStorage<{ readonly root: string; readonly source: PcrSource | null }>();
export function withPcrSource<T>(root: string, source: PcrSource, callback: () => T): T {
  return sources.run({ root: path.resolve(root), source }, callback);
}
/** Explicit repository selection shadows an enclosing library adapter even when
 * both resolve to the same root. Normal ALS nesting restores the prior binding. */
export function withRepositoryPcrSource<T>(root: string, callback: () => T): T {
  return sources.run({ root: path.resolve(root), source: null }, callback);
}
export function pcrSource(root: string): PcrSource | null {
  const current = sources.getStore();
  return current && path.resolve(root) === current.root ? current.source : null;
}
