import { createHash } from "node:crypto";
import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  realpathSync,
  type Stats,
} from "node:fs";
import path from "node:path";

import {
  PCR_ID_ALIAS_REGISTRY_PATH,
  pcrIdAliasValidationDependencies,
  pcrIdAliasSourcePcrPathStates,
  readPcrIdAliases,
  isPcrIdAlias,
  type PcrIdAlias,
  type AliasSourcePcrPathState,
} from "./pcr-id-aliases.ts";
import { parseYaml } from "./yaml-lite.ts";

import type { CatalogEntry } from './types.ts';
export interface PcrReadContext {
  readonly root: string;
  readonly aliases: readonly PcrIdAlias[];
  findPcrIdAlias(pcrId: unknown, options?: {root?: string | undefined}): PcrIdAlias | null;
}
interface RootEvent { root: string }
interface ContextObservers {
  onBindingCheck: ((event: RootEvent) => void) | null;
  onCatalogSnapshot: ((event: RootEvent & {entryCount: number}) => void) | null;
  onPcrArtifactRead: ((event: RootEvent & {relative_path: string}) => void) | null;
}
/** Trusted internal compatibility receipt. Matching current bytes/fingerprints
 * proves freshness, not that arbitrary caller-authored aliases were previously
 * semantically validated. Existing Viewer callers supply their own validated
 * snapshot attestation; public repository/library sessions must not forward
 * untrusted JSON into this extension. Viewer receipt hardening is separate work. */
export interface ValidatedAliasReuse { readonly fingerprint: string; readonly aliases: readonly PcrIdAlias[] }
export interface PcrReadContextOptions {
  root: string;
  onAliasValidation?: ((event: RootEvent & {aliases: readonly PcrIdAlias[]}) => void) | null;
  beforeAliasValidation?: ((event: RootEvent) => void) | null;
  onBindingCheck?: ContextObservers['onBindingCheck']; onCatalogSnapshot?: ContextObservers['onCatalogSnapshot']; onPcrArtifactRead?: ContextObservers['onPcrArtifactRead'];
  beforeBoundSourceOpen?: ((event: RootEvent & {relativePath: string}) => void) | null;
  validatedAliasReuse?: ValidatedAliasReuse | null;
}
interface BoundReadOptions { root: string; relativePath: string; beforeBoundSourceOpen?: PcrReadContextOptions['beforeBoundSourceOpen'] }
interface ContextOptions { context: PcrReadContext; root?: string | undefined }
function record(value: unknown): value is Record<string, unknown> { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function field(value: unknown, key: string): unknown {
  if (value === null || (typeof value !== 'object' && typeof value !== 'function')) return undefined;
  const result: unknown = Reflect.get(value, key);
  return result;
}
function aliasesIn(value: unknown): PcrIdAlias[] | null { return Array.isArray(value) && value.every(isPcrIdAlias) ? value : null; }
const CATALOG_PATH = "library/catalog.yaml";
const MANAGED_READ_FLAGS =
  fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW | fsConstants.O_NONBLOCK;
const contextBindings = new WeakMap<object, Map<string, string>>();
const contextAliasDependencyPaths = new WeakMap<object, string[]>();
const contextAliasSourcePathStates = new WeakMap<object, AliasSourcePcrPathState[]>();
const contextSessions = new WeakMap<object, {root: string; depth: number}>();
const contextCatalogs = new WeakMap<object, Map<string, CatalogEntry>>();
const contextObservers = new WeakMap<object, ContextObservers>();

export class PcrReadContextStaleError extends Error {
  readonly code: string;
  readonly details: {root: string; source: string; reason: string};
  constructor({ root, source, reason }: {root: string; source: string; reason: string}) {
    super(`PCR read context is stale for ${source}: ${reason}.`);
    this.name = "PcrReadContextStaleError";
    this.code = "PCR_READ_CONTEXT_STALE";
    this.details = { root, source, reason };
  }
}

/**
 * Bind repeated PCR reads to one validated repository state. The context is
 * deliberately independent from the process-global catalog cache: callers
 * may retain it only while all catalog-declared inputs remain byte-identical.
 */
export function createPcrReadContext({
  root,
  onAliasValidation = null,
  beforeAliasValidation = null,
  onBindingCheck = null,
  onCatalogSnapshot = null,
  onPcrArtifactRead = null,
  beforeBoundSourceOpen = null,
  validatedAliasReuse = null,
}: PcrReadContextOptions): PcrReadContext {
  const rootPath = canonicalRoot(root);
  const catalogSource = readRepositoryFile({ root: rootPath, relativePath: CATALOG_PATH });
  const catalog = parseCatalog(catalogSource.text, rootPath);
  const dependencyPaths = catalogDependencyPaths(catalog, rootPath);
  const aliasDependencyPathsBefore = pcrIdAliasValidationDependencies({ root: rootPath });
  const aliasSourcePathStatesBefore = pcrIdAliasSourcePcrPathStates({ root: rootPath });
  const boundPaths = [CATALOG_PATH, ...dependencyPaths, ...aliasDependencyPathsBefore];
  const bindingsBefore = captureBindings({
    root: rootPath,
    relativePaths: boundPaths,
    beforeBoundSourceOpen,
  });
  if (bindingsBefore.get(CATALOG_PATH) !== catalogSource.sha256) {
    throw new PcrReadContextStaleError({
      root: rootPath,
      source: CATALOG_PATH,
      reason: "catalog changed after its dependency declarations were read",
    });
  }
  const aliasFingerprintBefore = aliasInputFingerprint({
    bindings: bindingsBefore,
    aliasDependencyPaths: aliasDependencyPathsBefore,
    aliasSourcePathStates: aliasSourcePathStatesBefore,
  });
  let aliases: PcrIdAlias[];
  if (validatedAliasReuse !== null) {
    // The internal caller attests prior semantic validation. Keep exact-data and
    // before/after freshness checks, while preserving the legacy no-revalidation
    // path; this is not an opaque capability or hostile-caller-proof receipt.
    const declaredRegistry = parseYaml(readRepositoryFile({
      root: rootPath,
      relativePath: declaredPath(field(catalog.pcr_id_aliases, "path"), "pcr_id_aliases.path", rootPath),
    }).text);
    const parsedAliases = aliasesIn(field(declaredRegistry, "aliases"));
    const declaredAliases = parsedAliases === null ? null : structuredClone(parsedAliases).sort(compareAliases);
    const attestedAliases = Array.isArray(validatedAliasReuse?.aliases)
      ? structuredClone(validatedAliasReuse.aliases).sort(compareAliases)
      : null;
    if (
      validatedAliasReuse?.fingerprint !== aliasFingerprintBefore ||
      attestedAliases === null ||
      declaredAliases === null ||
      stableJson(attestedAliases) !== stableJson(declaredAliases)
    ) {
      throw new PcrReadContextStaleError({
        root: rootPath,
        source: PCR_ID_ALIAS_REGISTRY_PATH,
        reason: "validated alias reuse attestation does not match current bound inputs",
      });
    }
    aliases = attestedAliases;
  } else {
    beforeAliasValidation?.({ root: rootPath });
    aliases = readPcrIdAliases({ root: rootPath });
    onAliasValidation?.({
      root: rootPath,
      aliases: deepFreeze(structuredClone(aliases)),
    });
  }
  const aliasDependencyPathsAfter = pcrIdAliasValidationDependencies({ root: rootPath });
  const aliasSourcePathStatesAfter = pcrIdAliasSourcePcrPathStates({ root: rootPath });
  if (!sameStrings(aliasDependencyPathsBefore, aliasDependencyPathsAfter)) {
    throw new PcrReadContextStaleError({
      root: rootPath,
      source: PCR_ID_ALIAS_REGISTRY_PATH,
      reason: "alias validation dependencies changed while aliases were validated",
    });
  }
  if (!sameRecords(aliasSourcePathStatesBefore, aliasSourcePathStatesAfter)) {
    throw new PcrReadContextStaleError({
      root: rootPath,
      source: PCR_ID_ALIAS_REGISTRY_PATH,
      reason: "alias source PCR path states changed while aliases were validated",
    });
  }
  const bindingsAfter = captureBindings({
    root: rootPath,
    relativePaths: boundPaths,
    beforeBoundSourceOpen,
  });
  assertBindingSnapshotsMatch({ root: rootPath, before: bindingsBefore, after: bindingsAfter });
  if (aliasInputFingerprint({
    bindings: bindingsAfter,
    aliasDependencyPaths: aliasDependencyPathsAfter,
    aliasSourcePathStates: aliasSourcePathStatesAfter,
  }) !== aliasFingerprintBefore) {
    throw new PcrReadContextStaleError({
      root: rootPath,
      source: PCR_ID_ALIAS_REGISTRY_PATH,
      reason: "alias reuse inputs changed while the read context was created",
    });
  }

  const aliasByPcrId = new Map<string, PcrIdAlias>();
  for (const alias of aliases) {
    aliasByPcrId.set(String(alias?.source_pcr_id), deepFreeze(structuredClone(alias)));
  }
  const immutableAliases = deepFreeze([...aliasByPcrId.values()].map((alias) => structuredClone(alias)));
  const context: PcrReadContext = {
    root: rootPath,
    aliases: immutableAliases,
    findPcrIdAlias(pcrId, { root: requestedRoot = rootPath } = {}) {
      assertPcrReadContextFresh({ context, root: requestedRoot });
      const alias = aliasByPcrId.get(String(pcrId));
      return alias ? structuredClone(alias) : null;
    },
  };
  Object.defineProperty(context, "_pcrReadContext", { value: true });
  contextBindings.set(context, bindingsAfter);
  contextAliasDependencyPaths.set(context, aliasDependencyPathsAfter);
  contextAliasSourcePathStates.set(context, aliasSourcePathStatesAfter);
  contextObservers.set(context, { onBindingCheck, onCatalogSnapshot, onPcrArtifactRead });
  return Object.freeze(context);
}

export function pcrReadContextAliasInputFingerprint({ root }: {root: string}): string {
  const rootPath = canonicalRoot(root);
  const dependencyPaths = pcrIdAliasValidationDependencies({ root: rootPath });
  const sourcePathStates = pcrIdAliasSourcePcrPathStates({ root: rootPath });
  const bindings = captureBindings({
    root: rootPath,
    relativePaths: [CATALOG_PATH, ...dependencyPaths],
  });
  return aliasInputFingerprint({
    bindings,
    aliasDependencyPaths: dependencyPaths,
    aliasSourcePathStates: sourcePathStates,
  });
}

export function isPcrReadContext(value: unknown): value is PcrReadContext {
  return Boolean(
    record(value) && value._pcrReadContext === true &&
      typeof value.root === "string" &&
      contextBindings.has(value),
  );
}

export function assertPcrReadContextFresh({ context, root }: {context: unknown; root?: string | undefined}): PcrReadContext {
  if (!isPcrReadContext(context)) {
    throw new TypeError("context must be created by createPcrReadContext");
  }
  let canonicalRequestedRoot;
  try {
    canonicalRequestedRoot = canonicalRoot(root ?? context.root);
  } catch {
    throw new PcrReadContextStaleError({
      root: context.root,
      source: CATALOG_PATH,
      reason: "requested root is unavailable",
    });
  }
  if (canonicalRequestedRoot !== context.root) {
    throw new PcrReadContextStaleError({
      root: context.root,
      source: CATALOG_PATH,
      reason: "context belongs to another repository root",
    });
  }
  if (contextSessions.get(context)?.root === context.root) {
    return context;
  }
  contextObservers.get(context)?.onBindingCheck?.({ root: context.root });
  let currentAliasDependencyPaths;
  try {
    currentAliasDependencyPaths = pcrIdAliasValidationDependencies({ root: context.root });
  } catch {
    throw new PcrReadContextStaleError({
      root: context.root,
      source: PCR_ID_ALIAS_REGISTRY_PATH,
      reason: "alias validation dependencies are unavailable",
    });
  }
  if (!sameStrings(contextAliasDependencyPaths.get(context) ?? [], currentAliasDependencyPaths)) {
    throw new PcrReadContextStaleError({
      root: context.root,
      source: PCR_ID_ALIAS_REGISTRY_PATH,
      reason: "alias validation dependency set changed",
    });
  }
  const currentAliasSourcePathStates = pcrIdAliasSourcePcrPathStates({ root: context.root });
  if (!sameRecords(contextAliasSourcePathStates.get(context) ?? [], currentAliasSourcePathStates)) {
    throw new PcrReadContextStaleError({
      root: context.root,
      source: PCR_ID_ALIAS_REGISTRY_PATH,
      reason: "alias source PCR path state changed",
    });
  }
  for (const [relativePath, expectedSha256] of contextBindings.get(context) ?? []) {
    let actualSha256;
    try {
      actualSha256 = readRepositoryFile({ root: context.root, relativePath }).sha256;
    } catch {
      throw new PcrReadContextStaleError({
        root: context.root,
        source: relativePath,
        reason: "bound source is unavailable",
      });
    }
    if (actualSha256 !== expectedSha256) {
      throw new PcrReadContextStaleError({
        root: context.root,
        source: relativePath,
        reason: "exact-byte fingerprint changed",
      });
    }
  }
  return context;
}

export function withPcrReadContextSession<T>({ context, root, read }: ContextOptions & {read: () => T}): T {
  assertPcrReadContextFresh({ context, root });
  const active = contextSessions.get(context);
  if (active) {
    active.depth += 1;
    try {
      return readSynchronously(read);
    } finally {
      active.depth -= 1;
    }
  }
  const session = { root: context.root, depth: 1 };
  contextSessions.set(context, session);
  try {
    return readSynchronously(read);
  } finally {
    contextSessions.delete(context);
    assertPcrReadContextFresh({ context, root });
  }
}

export function getPcrReadContextCatalog({ context, root, readCatalog }: ContextOptions & {readCatalog: (root: string) => readonly CatalogEntry[]}): Map<string, CatalogEntry> {
  assertPcrReadContextFresh({ context, root });
  if (!contextCatalogs.has(context)) {
    const entries = readCatalog(context.root);
    const entriesById = new Map(entries.map((entry) => [entry.id, structuredClone(entry)]));
    contextCatalogs.set(context, entriesById);
    contextObservers.get(context)?.onCatalogSnapshot?.({
      root: context.root,
      entryCount: entriesById.size,
    });
  }
  const catalog = contextCatalogs.get(context);
  if (!catalog) throw new Error("Missing context catalog snapshot");
  return catalog;
}

export function observePcrReadContextArtifactRead({ context, root, relativePath }: ContextOptions & {relativePath: unknown}): void {
  assertPcrReadContextFresh({ context, root });
  contextObservers.get(context)?.onPcrArtifactRead?.({
    root: context.root,
    relative_path: String(relativePath),
  });
}

export function findPcrIdAliasInReadContext({ context, root, pcrId }: ContextOptions & {pcrId: unknown}): PcrIdAlias | null {
  assertPcrReadContextFresh({ context, root });
  return context.findPcrIdAlias(pcrId);
}

function canonicalRoot(root: string): string {
  const resolved = path.resolve(root);
  const stats = lstatSync(resolved);
  if (stats.isSymbolicLink() || !stats.isDirectory()) {
    throw new Error(`PCR repository root is not a canonical directory: ${resolved}`);
  }
  return realpathSync(resolved);
}

function parseCatalog(text: string, root: string): Record<string, unknown> {
  let catalog: unknown;
  try {
    catalog = parseYaml(text);
  } catch (error) {
    throw new PcrReadContextStaleError({
      root,
      source: CATALOG_PATH,
      reason: `catalog could not be parsed (${error instanceof Error ? error.message : String(error)})`,
    });
  }
  if (!record(catalog)) {
    throw new PcrReadContextStaleError({ root, source: CATALOG_PATH, reason: "catalog is not an object" });
  }
  return catalog;
}

function catalogDependencyPaths(catalog: Record<string, unknown>, root: string): string[] {
  const paths = [
    declaredPath(catalog.pcr_index, "pcr_index", root),
    declaredPath(field(catalog.pcr_id_aliases, "path"), "pcr_id_aliases.path", root),
    ...declaredPaths(catalog.classification_mappings, "classification_mappings", root),
    ...declaredPaths(catalog.classification_coverage_indexes ?? [], "classification_coverage_indexes", root),
  ];
  if (!paths.includes(PCR_ID_ALIAS_REGISTRY_PATH)) {
    throw new PcrReadContextStaleError({
      root,
      source: CATALOG_PATH,
      reason: `pcr_id_aliases.path must be ${PCR_ID_ALIAS_REGISTRY_PATH}`,
    });
  }
  return [...new Set(paths)];
}

function declaredPaths(value: unknown, name: string, root: string): string[] {
  if (!Array.isArray(value)) {
    throw new PcrReadContextStaleError({ root, source: CATALOG_PATH, reason: `${name} must be an array` });
  }
  return value.map((entry) => declaredPath(entry, name, root));
}

function declaredPath(value: unknown, name: string, root: string): string {
  if (typeof value !== "string" || value.trim() !== value || value.length === 0) {
    throw new PcrReadContextStaleError({ root, source: CATALOG_PATH, reason: `${name} must be a canonical path` });
  }
  const normalized = path.posix.normalize(value);
  if (normalized !== value || normalized.startsWith("../") || path.posix.isAbsolute(normalized)) {
    throw new PcrReadContextStaleError({ root, source: CATALOG_PATH, reason: `${name} escapes the repository root` });
  }
  return normalized;
}

function captureBindings({ root, relativePaths, beforeBoundSourceOpen = null }: {root: string; relativePaths: readonly string[]; beforeBoundSourceOpen?: PcrReadContextOptions["beforeBoundSourceOpen"]}): Map<string, string> {
  return new Map(
    relativePaths.map((relativePath) => [
      relativePath,
      readRepositoryFile({ root, relativePath, beforeBoundSourceOpen }).sha256,
    ]),
  );
}

function assertBindingSnapshotsMatch({ root, before, after }: {root: string; before: Map<string, string>; after: Map<string, string>}): void {
  for (const [relativePath, beforeSha256] of before) {
    if (after.get(relativePath) !== beforeSha256) {
      throw new PcrReadContextStaleError({
        root,
        source: relativePath,
        reason: "bound source changed while aliases were validated",
      });
    }
  }
}

function readRepositoryFile({ root, relativePath, beforeBoundSourceOpen = null }: BoundReadOptions): {text: string; sha256: string} {
  const filePath = path.join(root, ...relativePath.split("/"));
  const before = assertContainedRegularFile({ root, relativePath, filePath });
  beforeBoundSourceOpen?.({ root, relativePath });
  const descriptor = openSync(filePath, MANAGED_READ_FLAGS);
  try {
    const opened = fstatSync(descriptor);
    if (!opened.isFile()) {
      throw new Error(`bound source is not a regular file: ${relativePath}`);
    }
    const after = assertContainedRegularFile({ root, relativePath, filePath });
    if (!sameFileIdentity(opened, before.at(-1)) || !sameFileIdentity(opened, after.at(-1)) || !samePathChain(before, after)) {
      throw new Error(`bound source path changed while it was being opened: ${relativePath}`);
    }
    const bytes = readFileSync(descriptor);
    return {
      text: new TextDecoder("utf-8", { fatal: true }).decode(bytes),
      sha256: `sha256:${createHash("sha256").update(bytes).digest("hex")}`,
    };
  } finally {
    closeSync(descriptor);
  }
}

function assertContainedRegularFile({ root, relativePath, filePath }: {root: string; relativePath: string; filePath: string}): Stats[] {
  const segments = relativePath.split("/");
  let currentPath = root;
  const chain: Stats[] = [];
  for (const [index, segment] of segments.entries()) {
    currentPath = path.join(currentPath, segment);
    const stats = lstatSync(currentPath);
    if (stats.isSymbolicLink() || (index === segments.length - 1 ? !stats.isFile() : !stats.isDirectory())) {
      throw new Error(`bound source is not a canonical file: ${relativePath}`);
    }
    chain.push(stats);
  }
  const realFile = realpathSync(filePath);
  if (!isInside(root, realFile)) {
    throw new Error(`bound source escapes the repository root: ${relativePath}`);
  }
  return chain;
}

function isInside(root: string, candidate: string): boolean {
  const relative = path.relative(root, candidate);
  return relative !== "" && !path.isAbsolute(relative) && relative !== ".." && !relative.startsWith(`..${path.sep}`);
}

function deepFreeze<T>(value: T): T {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) {
    return value;
  }
  for (const child of Object.values(value)) {
    deepFreeze(child);
  }
  return Object.freeze(value);
}

function sameStrings(left: readonly string[], right: readonly string[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function sameFileIdentity(left: Stats | undefined, right: Stats | undefined): boolean {
  return left !== undefined && right !== undefined && left.dev === right.dev && left.ino === right.ino;
}

function samePathChain(left: readonly Stats[], right: readonly Stats[]): boolean {
  return left.length === right.length && left.every(
    (stats, index) => sameFileIdentity(stats, right[index]),
  );
}

function sameRecords(left: readonly AliasSourcePcrPathState[], right: readonly AliasSourcePcrPathState[]): boolean {
  return left.length === right.length && left.every(
    (entry, index) => entry.path === right[index]?.path && entry.state === right[index]?.state,
  );
}

function compareAliases(left: PcrIdAlias, right: PcrIdAlias): number {
  return String(left?.source_pcr_id ?? "").localeCompare(String(right?.source_pcr_id ?? ""));
}

function stableJson(value: unknown): string | undefined {
  if (Array.isArray(value)) {
    return `[${value.map((entry) => stableJson(entry)).join(",")}]`;
  }
  if (record(value)) {
    return `{${Object.keys(value)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

function aliasInputFingerprint({ bindings, aliasDependencyPaths, aliasSourcePathStates }: { bindings: Map<string, string>; aliasDependencyPaths: readonly string[]; aliasSourcePathStates: readonly AliasSourcePcrPathState[] }): string {
  const sources = [CATALOG_PATH, ...aliasDependencyPaths]
    .filter((value, index, values) => values.indexOf(value) === index)
    .sort()
    .map((relativePath) => ({ relative_path: relativePath, sha256: bindings.get(relativePath) }));
  return `sha256:${createHash("sha256").update(JSON.stringify({
    sources,
    source_path_states: aliasSourcePathStates,
  })).digest("hex")}`;
}

function readSynchronously<T>(read: () => T): T {
  const result = read();
  if (result && typeof field(result, "then") === "function") {
    throw new TypeError("PCR read context sessions require a synchronous callback; use an explicit async API.");
  }
  return result;
}
