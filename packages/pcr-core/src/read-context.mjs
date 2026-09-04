import { createHash } from "node:crypto";
import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  realpathSync,
} from "node:fs";
import path from "node:path";

import {
  PCR_ID_ALIAS_REGISTRY_PATH,
  pcrIdAliasValidationDependencies,
  readPcrIdAliases,
} from "./pcr-id-aliases.mjs";
import { parseYaml } from "./yaml-lite.mjs";

const CATALOG_PATH = "library/catalog.yaml";
const MANAGED_READ_FLAGS =
  fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW | fsConstants.O_NONBLOCK;
const contextBindings = new WeakMap();
const contextAliasDependencyPaths = new WeakMap();
const contextSessions = new WeakMap();
const contextCatalogs = new WeakMap();
const contextObservers = new WeakMap();

export class PcrReadContextStaleError extends Error {
  constructor({ root, source, reason }) {
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
  beforeBoundSourceOpen = null,
}) {
  const rootPath = canonicalRoot(root);
  const catalogSource = readRepositoryFile({ root: rootPath, relativePath: CATALOG_PATH });
  const catalog = parseCatalog(catalogSource.text, rootPath);
  const dependencyPaths = catalogDependencyPaths(catalog, rootPath);
  const aliasDependencyPathsBefore = pcrIdAliasValidationDependencies({ root: rootPath });
  const boundPaths = [CATALOG_PATH, ...dependencyPaths, ...aliasDependencyPathsBefore];
  beforeAliasValidation?.({ root: rootPath });
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
  const aliases = readPcrIdAliases({ root: rootPath });
  onAliasValidation?.({
    root: rootPath,
    aliases: deepFreeze(structuredClone(aliases)),
  });
  const aliasDependencyPathsAfter = pcrIdAliasValidationDependencies({ root: rootPath });
  if (!sameStrings(aliasDependencyPathsBefore, aliasDependencyPathsAfter)) {
    throw new PcrReadContextStaleError({
      root: rootPath,
      source: PCR_ID_ALIAS_REGISTRY_PATH,
      reason: "alias validation dependencies changed while aliases were validated",
    });
  }
  const bindingsAfter = captureBindings({
    root: rootPath,
    relativePaths: boundPaths,
    beforeBoundSourceOpen,
  });
  assertBindingSnapshotsMatch({ root: rootPath, before: bindingsBefore, after: bindingsAfter });

  const aliasByPcrId = new Map();
  for (const alias of aliases) {
    aliasByPcrId.set(String(alias?.source_pcr_id), deepFreeze(structuredClone(alias)));
  }
  const immutableAliases = deepFreeze([...aliasByPcrId.values()].map((alias) => structuredClone(alias)));
  const context = {
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
  contextObservers.set(context, { onBindingCheck, onCatalogSnapshot });
  return Object.freeze(context);
}

export function isPcrReadContext(value) {
  return Boolean(
    value?._pcrReadContext === true &&
      typeof value.root === "string" &&
      contextBindings.has(value),
  );
}

export function assertPcrReadContextFresh({ context, root }) {
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

export function withPcrReadContextSession({ context, root, read }) {
  assertPcrReadContextFresh({ context, root });
  const active = contextSessions.get(context);
  if (active) {
    active.depth += 1;
    try {
      return read();
    } finally {
      active.depth -= 1;
    }
  }
  const session = { root: context.root, depth: 1 };
  contextSessions.set(context, session);
  try {
    return read();
  } finally {
    contextSessions.delete(context);
    assertPcrReadContextFresh({ context, root });
  }
}

export function getPcrReadContextCatalog({ context, root, readCatalog }) {
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
  return contextCatalogs.get(context);
}

export function findPcrIdAliasInReadContext({ context, root, pcrId }) {
  assertPcrReadContextFresh({ context, root });
  return context.findPcrIdAlias(pcrId);
}

function canonicalRoot(root) {
  const resolved = path.resolve(root);
  const stats = lstatSync(resolved);
  if (stats.isSymbolicLink() || !stats.isDirectory()) {
    throw new Error(`PCR repository root is not a canonical directory: ${resolved}`);
  }
  return realpathSync(resolved);
}

function parseCatalog(text, root) {
  let catalog;
  try {
    catalog = parseYaml(text);
  } catch (error) {
    throw new PcrReadContextStaleError({
      root,
      source: CATALOG_PATH,
      reason: `catalog could not be parsed (${error instanceof Error ? error.message : String(error)})`,
    });
  }
  if (!catalog || typeof catalog !== "object" || Array.isArray(catalog)) {
    throw new PcrReadContextStaleError({ root, source: CATALOG_PATH, reason: "catalog is not an object" });
  }
  return catalog;
}

function catalogDependencyPaths(catalog, root) {
  const paths = [
    declaredPath(catalog.pcr_index, "pcr_index", root),
    declaredPath(catalog.pcr_id_aliases?.path, "pcr_id_aliases.path", root),
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

function declaredPaths(value, name, root) {
  if (!Array.isArray(value)) {
    throw new PcrReadContextStaleError({ root, source: CATALOG_PATH, reason: `${name} must be an array` });
  }
  return value.map((entry) => declaredPath(entry, name, root));
}

function declaredPath(value, name, root) {
  if (typeof value !== "string" || value.trim() !== value || value.length === 0) {
    throw new PcrReadContextStaleError({ root, source: CATALOG_PATH, reason: `${name} must be a canonical path` });
  }
  const normalized = path.posix.normalize(value);
  if (normalized !== value || normalized.startsWith("../") || path.posix.isAbsolute(normalized)) {
    throw new PcrReadContextStaleError({ root, source: CATALOG_PATH, reason: `${name} escapes the repository root` });
  }
  return normalized;
}

function captureBindings({ root, relativePaths, beforeBoundSourceOpen = null }) {
  return new Map(
    relativePaths.map((relativePath) => [
      relativePath,
      readRepositoryFile({ root, relativePath, beforeBoundSourceOpen }).sha256,
    ]),
  );
}

function assertBindingSnapshotsMatch({ root, before, after }) {
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

function readRepositoryFile({ root, relativePath, beforeBoundSourceOpen = null }) {
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

function assertContainedRegularFile({ root, relativePath, filePath }) {
  const segments = relativePath.split("/");
  let currentPath = root;
  const chain = [];
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

function isInside(root, candidate) {
  const relative = path.relative(root, candidate);
  return relative !== "" && !path.isAbsolute(relative) && relative !== ".." && !relative.startsWith(`..${path.sep}`);
}

function deepFreeze(value) {
  if (!value || typeof value !== "object" || Object.isFrozen(value)) {
    return value;
  }
  for (const child of Object.values(value)) {
    deepFreeze(child);
  }
  return Object.freeze(value);
}

function sameStrings(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function sameFileIdentity(left, right) {
  return left.dev === right.dev && left.ino === right.ino;
}

function samePathChain(left, right) {
  return left.length === right.length && left.every(
    (stats, index) => sameFileIdentity(stats, right[index]),
  );
}
