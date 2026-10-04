import { createHash } from 'node:crypto';
import { OfflineLibrary } from './offline-library.ts';
import { createPcrReadContext, withPcrReadContextSession } from './read-context.ts';
import { withPcrSource, withRepositoryPcrSource } from './source-context.ts';
import { projectionFromVerifiedSnapshot, readVerifiedSnapshotForSession } from './index.ts';
import { buildGuidanceFromProjection } from './compiler/guidance-envelope.ts';
import type { CompleteGuidance, CurrentPcrSnapshot, VerifiedPcrProjection } from './types.ts';

export const MAX_READ_BATCH = 100;
export type PcrReadSource = { kind: 'repository'; root: string } | { kind: 'library'; filename: string; expectedSha256?: string; verify?: boolean };
export type PcrReadSourceIdentity = Readonly<{ kind: 'repository'; root: string } | { kind: 'library'; filename: string; content_version: string; source_commit: string; sha256: string; verified: boolean }>;
export interface PcrReadSessionStats { records_loaded: number; cache_hits: number; final_verifications: number; alias_validations: number }
export interface PcrReadSession {
  readonly source: PcrReadSourceIdentity;
  guidance(pcrId: string): CompleteGuidance;
  projection(pcrId: string): VerifiedPcrProjection;
  guidanceMany(pcrIds: readonly string[]): CompleteGuidance[];
  projectionMany(pcrIds: readonly string[]): VerifiedPcrProjection[];
  stats(): Readonly<PcrReadSessionStats>;
}
export class PcrReadSessionError extends Error {
  readonly code: string;
  readonly details: Readonly<Record<string, unknown>>;
  constructor(code: string, message: string, details: Record<string, unknown> = {}) {
    super(message); this.name = 'PcrReadSessionError'; this.code = code; this.details = details;
  }
}
function validateIds(ids: readonly string[]): string[] {
  if (!Array.isArray(ids) || ids.length > MAX_READ_BATCH || ids.some(id => typeof id !== 'string' || !id.trim())) {
    throw new PcrReadSessionError('PCR_READ_BATCH_INVALID', `Provide at most ${MAX_READ_BATCH} nonempty PCR IDs; no partial batch is returned.`);
  }
  return [...ids];
}
function fingerprint(snapshot: CurrentPcrSnapshot): string {
  const digest = (bytes: Uint8Array) => createHash('sha256').update(bytes).digest('hex');
  const entries: [string, string][] = [['manifest.yaml', digest(snapshot.manifestBytes)]];
  for (const name of Object.keys(snapshot.artifacts).sort()) {
    const artifact = snapshot.artifacts[name];
    const error: unknown = artifact?.error;
    const code: unknown = error !== null && typeof error === 'object' ? Reflect.get(error, 'code') : undefined;
    entries.push([name, artifact?.bytes ? digest(artifact.bytes) : `unavailable:${String(code ?? 'unknown_error')}`]);
  }
  return digest(Buffer.from(JSON.stringify(entries)));
}
function synchronous<T>(read: () => T): T {
  const result = read();
  if (result !== null && (typeof result === 'object' || typeof result === 'function')) {
    const then: unknown = Reflect.get(result, 'then');
    if (typeof then === 'function') {
      void Promise.resolve(result).catch(() => {});
      throw new PcrReadSessionError('PCR_READ_SESSION_ASYNC', 'PCR read sessions require a synchronous callback.');
    }
  }
  return result;
}

/** One owned, synchronous source scope. Each selected repository record is bound
 * by exact captured bytes and rechecked before return. SQLite already opens one
 * read-only transaction in OfflineLibrary; this function owns its lifetime. */
export function withPcrReadSession<T>(source: PcrReadSource, read: (session: PcrReadSession) => T): T {
  if (typeof read !== 'function' || !source || (source.kind !== 'repository' && source.kind !== 'library')) {
    throw new PcrReadSessionError('PCR_READ_SOURCE_INVALID', 'Select a repository root or a fixed SQLite library.');
  }
  if (source.kind === 'repository' ? typeof source.root !== 'string' || !source.root : typeof source.filename !== 'string' || !source.filename) {
    throw new PcrReadSessionError('PCR_READ_SOURCE_INVALID', 'The selected source requires a nonempty path.');
  }
  if (source.kind === 'library' && ((source.verify !== undefined && typeof source.verify !== 'boolean')
    || (source.expectedSha256 !== undefined && (typeof source.expectedSha256 !== 'string' || !/^sha256:[a-f0-9]{64}$/u.test(source.expectedSha256))))) {
    throw new PcrReadSessionError('PCR_READ_SOURCE_INVALID', 'Library verification must be a boolean and its optional pin a sha256 digest.');
  }
  let library: OfflineLibrary | undefined;
  const stats: PcrReadSessionStats = { records_loaded: 0, cache_hits: 0, final_verifications: 0, alias_validations: 0 };
  let active = true;
  try {
    const context = source.kind === 'repository' ? withRepositoryPcrSource(source.root, () => createPcrReadContext({ root: source.root, onAliasValidation: () => { stats.alias_validations += 1; } })) : undefined;
    if (source.kind === 'library') library = new OfflineLibrary(source.filename, { expectedSha256: source.expectedSha256 ?? null, verify: source.verify ?? true });
    const selectedRoot = context?.root ?? library?.root;
    if (!selectedRoot) throw new PcrReadSessionError('PCR_READ_SOURCE_INVALID', 'Source initialization failed.');
    const root: string = selectedRoot;
    const adapter = library;
    const scope = <R>(operation: () => R): R => adapter ? withPcrSource(root, adapter, operation) : withRepositoryPcrSource(root, operation);
    const identity: PcrReadSourceIdentity = Object.freeze(adapter ? {
      kind: 'library' as const, filename: adapter.filename, content_version: adapter.manifest.snapshot.content_version,
      source_commit: adapter.manifest.snapshot.source_commit, sha256: adapter.manifest.sha256,
      verified: source.kind === 'library' && ((source.verify ?? true) || source.expectedSha256 !== undefined),
    } : { kind: 'repository' as const, root });
    const bindings = new Map<string, string>();
    const cache = new Map<string, VerifiedPcrProjection>();
    function requireActive(): void { if (!active) throw new PcrReadSessionError('PCR_READ_SESSION_CLOSED', 'PCR read session has ended.'); }
    function capture(pcrId: string) {
      return scope(() => readVerifiedSnapshotForSession({ root, pcrId, ...(context ? { context } : {}) }));
    }
    function load(pcrId: string): VerifiedPcrProjection {
      requireActive(); validateIds([pcrId]);
      const cached = cache.get(pcrId);
      if (cached) { stats.cache_hits += 1; cache.delete(pcrId); cache.set(pcrId, cached); return cached; }
      const snapshot = capture(pcrId);
      const binding = fingerprint(snapshot);
      const previous = bindings.get(pcrId);
      if (previous !== undefined && previous !== binding) throw new PcrReadSessionError('PCR_READ_SESSION_STALE', 'Selected PCR source changed during the session.', { pcr_id: pcrId });
      bindings.set(pcrId, binding);
      const value = projectionFromVerifiedSnapshot(snapshot, root);
      stats.records_loaded += 1; cache.set(pcrId, value);
      if (cache.size > MAX_READ_BATCH) { const oldest = cache.keys().next().value; if (oldest !== undefined) cache.delete(oldest); }
      return value;
    }
    const session: PcrReadSession = Object.freeze({
      source: identity,
      guidance: (pcrId: string) => structuredClone(buildGuidanceFromProjection(load(pcrId))),
      projection: (pcrId: string) => structuredClone(load(pcrId)),
      guidanceMany: (ids: readonly string[]) => { requireActive(); return validateIds(ids).map(id => structuredClone(buildGuidanceFromProjection(load(id)))); },
      projectionMany: (ids: readonly string[]) => { requireActive(); return validateIds(ids).map(id => structuredClone(load(id))); },
      stats: () => Object.freeze({ ...stats }),
    });
    const operation = () => {
      try {
        const result = synchronous(() => scope(() => read(session)));
        if (context) {
          for (const [pcrId, expected] of bindings) {
            let snapshot: ReturnType<typeof capture>;
            try { snapshot = capture(pcrId); }
            catch (error: unknown) { throw new PcrReadSessionError('PCR_READ_SESSION_STALE', 'Selected PCR can no longer be verified.', { pcr_id: pcrId, reason: error instanceof Error ? error.message : String(error) }); }
            stats.final_verifications += 1;
            if (fingerprint(snapshot) !== expected) throw new PcrReadSessionError('PCR_READ_SESSION_STALE', 'Selected PCR source changed during the session.', { pcr_id: pcrId });
          }
        }
        return result;
      } finally { active = false; cache.clear(); }
    };
    return context ? withPcrReadContextSession({ context, root, read: operation }) : operation();
  } finally { active = false; library?.close(); }
}
