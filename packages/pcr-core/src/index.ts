export { withPcrReadSession, PcrReadSessionError, MAX_READ_BATCH } from "./read-session.ts";
export type { PcrReadSource, PcrReadSession, PcrReadSourceIdentity, PcrReadSessionStats } from "./read-session.ts";
import type { Stats } from "node:fs";
import type { PcrReadContext } from "./read-context.ts";
import type { PcrIdAlias } from "./pcr-id-aliases.ts";
import type { CoverageSnapshot, CoverageDocument, CoverageEntry } from "./classification-coverage.ts";
import type { PcrRecord, CatalogEntry, PcrManifest, PcrCatalogScope, PcrRecordKind, Readiness, ReadinessFingerprint, ContractIssue, CapturedArtifact, CapturedPcrSnapshot, CurrentPcrSnapshot, StructuredProjection, VerifiedPcrProjection, CompleteGuidance, ValidationReport, ValidationFinding, PerformedCheck, SkippedCheck, FindingSeverity, UnknownRecord } from "./types.ts";
import { unknownField } from "./types.ts";

export interface ReadPcrOptions { root?: string | undefined; pcrId: string; context?: PcrReadContext | null | undefined; refresh?: boolean }
export interface RootOptions { root: string; refresh?: boolean }
export interface CatalogOptions extends RootOptions { scope?: PcrCatalogScope }
export interface ClassificationOptions { root: string; system: string; version: string; code: string; context?: PcrReadContext | null | undefined }
type PcrIdentity = Omit<PcrRecord, "readiness">;
type PcrOperation = "guidance" | "validation";
interface ProjectionInspection { fingerprint: ReadinessFingerprint; structured: StructuredProjection | null; structuredPath: string; structuredAvailable: boolean; completenessIssues: ContractIssue[] }
interface MappingDocument extends UnknownRecord { schema_version: 2; status: "current"; mappings: UnknownRecord[] }
interface AcceptedMapping extends UnknownRecord { pcr_id: string; mapping_type: string; acceptance: UnknownRecord }
interface CanonicalMapping { mappingFile: MappingDocument; mapping: AcceptedMapping }
interface SnapshotAttemptError extends Error { snapshotCode: string; snapshotDetails: UnknownRecord }
interface PcrTreeNode { children: PcrTree; pcrs: PcrRecord[] }
export type PcrTree = Record<string, PcrTreeNode>;
function requiredRoot(root: string | undefined, context: PcrReadContext | null | undefined): string {
  const value = root ?? context?.root;
  if (typeof value !== "string") throw new TypeError("PCR reads require a repository root or bound read context.");
  return value;
}
function parsedRecord(text: string, label: string): UnknownRecord {
  const value = parseYaml(text);
  if (!isRecord(value)) throw new TypeError(`${label} must be a mapping.`);
  return value;
}
import { buildCompleteGuidance, deriveSnapshotGuidanceContext } from "./compiler/guidance-envelope.ts";
import { pcrSource } from "./source-context.ts";
import { createHash } from "node:crypto";
import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  realpathSync,
  readdirSync,
} from "node:fs";
import path from "node:path";
import { TextDecoder } from "node:util";

import {
  PcrClassificationCodeUnknownError,
  PcrClassificationCoverageSemanticError,
  readClassificationCoverage,
} from "./classification-coverage.ts";
import { assertCoreContract, validateCoreContract } from "./contracts.ts";
import {
  inspectProjectionIntegrity,
  projectionNotRequiredState,
} from "./projection-integrity.ts";
import {
  hasDeclaredUnresolvedReferenceProductFlow,
  materialProjectionCompletenessIssues,
} from "./projection-completeness.ts";
import { findPcrIdAlias as findRepositoryPcrIdAlias } from "./pcr-id-aliases.ts";
import {
  assertPcrReadContextFresh,
  createPcrReadContext,
  getPcrReadContextCatalog,
  observePcrReadContextArtifactRead,
  pcrReadContextAliasInputFingerprint,
  withPcrReadContextSession,
} from "./read-context.ts";
import { parseYaml } from "./yaml-lite.ts";
import {
  declaredPcrLanguages,
  expectedPcrArtifactHashes,
  LEGACY_PCR_ARTIFACT_HASH_FIELDS,
  pcrArtifactFiles,
} from "./languages.ts";
import {
  CLASSIFICATION_MAPPING_RELATION_VALUES,
  CONTENT_MATURITY_VALUES,
  FEEDBACK_TYPE_VALUES,
  PCR_STATUS_VALUES,
} from "./vocabulary.ts";

export const FEEDBACK_TYPES = FEEDBACK_TYPE_VALUES;
export { createPcrReadContext, pcrReadContextAliasInputFingerprint, withPcrReadContextSession };
export {
  CLASSIFICATION_COVERAGE_STATUSES,
  PcrClassificationCodeUnknownError,
  PcrClassificationCoverageNotFoundError,
  PcrClassificationCoverageSemanticError,
  PcrClassificationCoverageStatusError,
  classificationCoveragePath,
  findClassificationCoverageEntry,
  getClassificationCoverageSummary,
  hasClassificationCoverage,
  listClassificationCoverage,
  readClassificationCoverage,
  readClassificationCoverageSnapshot,
} from "./classification-coverage.ts";
export const PCR_CATALOG_SCOPES = Object.freeze(["all", "material", "legacy"] as const);
export const PCR_RECORD_KINDS = Object.freeze([
  "methodology",
  "legacy_scaffold_reference",
  "invalid_lifecycle_state",
]);
const CLASSIFICATION_MAPPING_RELATIONS = new Set(CLASSIFICATION_MAPPING_RELATION_VALUES);
const PCR_CATALOG_SCOPE_SET = new Set<string>(PCR_CATALOG_SCOPES);
const METHODOLOGY_LIFECYCLE_STATUSES = new Set(
  PCR_STATUS_VALUES.filter((value) => value !== "scaffold"),
);
const METHODOLOGY_MATURITIES = new Set(
  CONTENT_MATURITY_VALUES.filter((value) => value !== "empty_scaffold"),
);

const CURRENT_SNAPSHOT_MAX_ATTEMPTS = 3;
const pcrCatalogCache = new Map<string, CatalogEntry[]>();
const RELEASE_ARTIFACTS = LEGACY_PCR_ARTIFACT_HASH_FIELDS;
const GUIDANCE_MATURITIES = new Set([
  "authored_methodology",
  "reviewed_methodology",
  "published_methodology",
]);
const REVIEWED_MATURITIES = new Set(["reviewed_methodology", "published_methodology"]);
const USABLE_LIFECYCLE_STATES = new Map([
  ["candidate", new Set(["authored_methodology"])],
  ["active", new Set(["reviewed_methodology"])],
  ["published", new Set(["published_methodology"])],
]);
const GUIDANCE_LIFECYCLE_STATUSES = new Set(["candidate", "active", "published"]);

export class PcrUsabilityError extends Error {
  readonly code: string;
  readonly readiness: Readiness;
  constructor({ pcrId, operation, readiness }: { pcrId: string; operation: PcrOperation; readiness: Readiness }) {
    const blockers = readiness.blockers.map((blocker) => blocker.code).join(", ");
    super(
      `PCR ${pcrId} is not usable for ${operation}: content_maturity=${readiness.methodology_status}; blockers=${blockers || "unknown"}`,
    );
    this.name = "PcrUsabilityError";
    this.code = `PCR_NOT_USABLE_FOR_${operation.toUpperCase()}`;
    this.readiness = structuredClone(readiness);
  }
}

export class PcrClassificationMappingError extends Error {
  readonly code: string;
  readonly details: { classification: string; mapping_type: unknown; allowed_mapping_types: string[]; issue: string | null };
  constructor({ system, version, code, mappingType, issue = null }: { system: string; version: string; code: string; mappingType?: unknown; issue?: string | null }) {
    super(issue
      ? `Classification mapping ${system}:${version}:${code} is not an accepted current mapping: ${issue}.`
      : `Classification mapping ${system}:${version}:${code} uses unsupported mapping_type ${String(mappingType)}.`);
    this.name = "PcrClassificationMappingError";
    this.code = "PCR_INVALID_CLASSIFICATION_MAPPING";
    this.details = {
      classification: `${system}:${version}:${code}`,
      mapping_type: mappingType ?? null,
      allowed_mapping_types: [...CLASSIFICATION_MAPPING_RELATION_VALUES],
      issue,
    };
  }
}

export class PcrLegacyIdRedirectError extends Error {
  readonly code: string;
  readonly details: ReturnType<typeof legacyPcrIdRedirect>;
  constructor(alias: PcrIdAlias) {
    const redirect = legacyPcrIdRedirect(alias);
    super(
      `PCR id ${redirect.source_pcr_id} is a retired legacy identity. ` +
        `Use the redirect target with: ${redirect.next_command}`,
    );
    this.name = "PcrLegacyIdRedirectError";
    this.code = "PCR_LEGACY_ID_REDIRECT";
    this.details = redirect;
  }
}

export class PcrClassificationTargetStateError extends Error {
  readonly code: string;
  readonly details: { classification: string; pcr_id: string; status: string; content_maturity: string | null; record_kind: PcrRecordKind };
  constructor({ system, version, code, pcr }: { system: string; version: string; code: string; pcr: PcrRecord }) {
    super(
      `Classification mapping ${system}:${version}:${code} points to PCR ${pcr.id} with invalid ` +
        `lifecycle identity ${pcr.status}/${pcr.content_maturity}.`,
    );
    this.name = "PcrClassificationTargetStateError";
    this.code = "PCR_INVALID_CLASSIFICATION_TARGET";
    this.details = {
      classification: `${system}:${version}:${code}`,
      pcr_id: pcr.id,
      status: pcr.status,
      content_maturity: pcr.content_maturity,
      record_kind: pcr.record_kind,
    };
  }
}

export class PcrCurrentSnapshotInconsistentError extends Error {
  readonly code: string;
  readonly details: { pcr_id: string; pcr_path: string; attempts: number; last_failure: UnknownRecord | null };
  constructor({ pcrId, pcrPath, attempts, lastFailure }: { pcrId: string; pcrPath: string; attempts: number; lastFailure: UnknownRecord | null }) {
    super(
      `PCR ${pcrId} current snapshot could not be read consistently after ${attempts} attempts.`,
    );
    this.name = "PcrCurrentSnapshotInconsistentError";
    this.code = "PCR_CURRENT_SNAPSHOT_INCONSISTENT";
    this.details = {
      pcr_id: pcrId,
      pcr_path: pcrPath,
      attempts,
      last_failure: lastFailure,
    };
  }
}

export class PcrDuplicateIdError extends Error {
  readonly code: string;
  readonly details: { pcr_id: string; paths: string[] };
  constructor({ pcrId, paths }: { pcrId: string; paths: readonly string[] }) {
    super(`Duplicate canonical PCR id ${pcrId}: ${paths.join(", ")}`);
    this.name = "PcrDuplicateIdError";
    this.code = "PCR_DUPLICATE_ID";
    this.details = { pcr_id: pcrId, paths: [...paths] };
  }
}

export class PcrCatalogScopeError extends Error {
  readonly code: string;
  readonly details: { scope: string; allowed_scopes: string[] };
  constructor(scope: unknown) {
    super(`Unsupported PCR catalog scope ${String(scope)}. Expected one of: ${PCR_CATALOG_SCOPES.join(", ")}.`);
    this.name = "PcrCatalogScopeError";
    this.code = "PCR_INVALID_CATALOG_SCOPE";
    this.details = {
      scope: String(scope),
      allowed_scopes: [...PCR_CATALOG_SCOPES],
    };
  }
}

function findPcrIdAlias(options: ReadPcrOptions & { root: string }) {
  const source = pcrSource(options.root);
  return source ? source.findAlias(options.pcrId) : findRepositoryPcrIdAlias({ root: options.root, pcrId: options.pcrId, context: options.context ?? null });
}

export function listPcrs({ root, refresh = false, scope = "all" }: CatalogOptions): PcrRecord[] {
  const source = pcrSource(root);
  if (source) return source.listPcrs(normalizeCatalogScope(scope));
  const normalizedScope = normalizeCatalogScope(scope);
  const normalizedRoot = path.resolve(root);
  const catalog = getPcrCatalog({ root: normalizedRoot, refresh });
  const candidates = normalizedScope === "all"
    ? catalog
    : catalog.filter((entry) => currentCatalogEntryMatchesScope(normalizedRoot, entry, normalizedScope));
  return candidates
    .map((entry) => currentPcrEntry(normalizedRoot, entry))
    .filter((entry) => recordMatchesScope(entry, normalizedScope));
}

export interface CatalogPageOptions extends CatalogOptions {
  offset?: number; limit?: number; status?: string | null; contentMaturity?: string | null; pathPrefix?: string | null; context?: PcrReadContext | null;
}
/** Apply metadata filters and the page boundary before expensive projection
 * verification. Every returned repository item still uses the full snapshot gate. */
export function readPcrCatalogPage(options: CatalogPageOptions): { totalCount: number; items: PcrRecord[] } {
  return options.context ? withPcrReadContextSession({ context: options.context, root: options.root, read: () => readPcrCatalogPageWithinContext(options) }) : readPcrCatalogPageWithinContext(options);
}
function readPcrCatalogPageWithinContext({ root, refresh = false, scope = "all", offset = 0, limit = 10, status = null, contentMaturity = null, pathPrefix = null, context = null }: CatalogPageOptions): { totalCount: number; items: PcrRecord[] } {
  if (!Number.isSafeInteger(offset) || offset < 0 || !Number.isSafeInteger(limit) || limit < 1 || limit > 100) throw new RangeError("Catalog pages require a nonnegative offset and limit from 1 to 100.");
  const normalizedScope = normalizeCatalogScope(scope);
  const matches = (record: Pick<PcrIdentity, "path" | "status" | "content_maturity">) => {
    const relative = record.path.replace(/^library\/pcrs\/?/u, "");
    return (status === null || record.status === status) && (contentMaturity === null || record.content_maturity === contentMaturity)
      && (pathPrefix === null || relative === pathPrefix || relative.startsWith(`${pathPrefix}/`));
  };
  const source = pcrSource(root);
  if (source) { const records = source.listPcrs(normalizedScope).filter(matches); return { totalCount: records.length, items: records.slice(offset, offset + limit) }; }
  const normalizedRoot = path.resolve(root);
  const bindings: { entry: CatalogEntry; bytes: Buffer }[] = [];
  const candidates: CatalogEntry[] = [];
  for (const entry of getPcrCatalog({ root: normalizedRoot, refresh })) {
    const captured = readConsistentManifestSnapshot({ root: normalizedRoot, entry });
    bindings.push({ entry, bytes: captured.bytes });
    const kind = recordKindForPcr({ status: optionalString(captured.manifest.status, "unknown", "PCR status"), content_maturity: nullableString(captured.manifest.content_maturity, "PCR maturity") });
    if (normalizedScope !== "all" && kind !== (normalizedScope === "material" ? "methodology" : "legacy_scaffold_reference")) continue;
    const identity = pcrFromManifest({ root: normalizedRoot, pcrDir: path.dirname(entry.manifestPath), manifest: captured.manifest });
    if (matches(identity)) candidates.push(entry);
  }
  const items = candidates.slice(offset, offset + limit).map(entry => currentPcrSnapshot(normalizedRoot, entry, context).pcr);
  for (const binding of bindings) {
    const current = readConsistentManifestSnapshot({ root: normalizedRoot, entry: binding.entry });
    if (!current.bytes.equals(binding.bytes)) throw new PcrCurrentSnapshotInconsistentError({ pcrId: binding.entry.id, pcrPath: binding.entry.path, attempts: CURRENT_SNAPSHOT_MAX_ATTEMPTS, lastFailure: { code: "catalog_selection_changed", message: "PCR metadata changed while selecting the requested page." } });
  }
  return { totalCount: candidates.length, items };
}

function getPcrCatalog({ root, refresh = false }: RootOptions): CatalogEntry[] {
  const normalizedRoot = path.resolve(root);
  if (refresh || !pcrCatalogCache.has(normalizedRoot)) {
    pcrCatalogCache.set(normalizedRoot, readPcrCatalog(normalizedRoot));
  }
  const cached = pcrCatalogCache.get(normalizedRoot);
  if (!cached) throw new Error("PCR catalog was not initialized.");
  return cached;
}

function readPcrCatalog(root: string): CatalogEntry[] {
  const pcrRoot = path.join(root, "library/pcrs");
  if (!isCanonicalDirectory(pcrRoot)) {
    throw new Error(`PCR catalog root not found: ${toPosix(path.relative(root, pcrRoot))}`);
  }
  const catalog = findManifestFiles(pcrRoot)
    .map((manifestPath) => {
      const manifest = parsedRecord(readCanonicalFileBytes(manifestPath).toString("utf8"), "PCR manifest");
      if (!manifest.id) return null;
      if (typeof manifest.id !== "string") throw new TypeError("PCR manifest id must be a string.");
      const pcrDir = path.dirname(manifestPath);
      return {
        id: manifest.id,
        path: toPosix(path.relative(root, pcrDir)),
        manifestPath,
      };
    })
    .filter((entry): entry is CatalogEntry => entry !== null);
  const entriesById = new Map<string, CatalogEntry>();
  for (const entry of catalog) {
    const existing = entriesById.get(entry.id);
    if (existing) {
      throw new PcrDuplicateIdError({
        pcrId: entry.id,
        paths: [existing.path, entry.path].sort(),
      });
    }
    entriesById.set(entry.id, entry);
  }
  return catalog.sort((left, right) => left.id.localeCompare(right.id));
}

type TreeOptions = CatalogOptions & { depth?: number; context?: PcrReadContext | null };
export function buildPcrTree(options: TreeOptions): PcrTree {
  return options.context ? withPcrReadContextSession({ context: options.context, root: options.root, read: () => buildPcrTreeWithinContext(options) }) : buildPcrTreeWithinContext(options);
}
function buildPcrTreeWithinContext({ root, depth = Infinity, scope = "all", context = null }: CatalogOptions & { depth?: number; context?: PcrReadContext | null }): PcrTree {
  const normalizedScope = normalizeCatalogScope(scope);
  const source = pcrSource(root);
  if (source) return treeFromRecords(source.listPcrs(normalizedScope), depth);
  const normalizedRoot = path.resolve(root);
  const tree: PcrTree = {};
  for (const entry of getPcrCatalog({ root: normalizedRoot })) {
    if (normalizedScope !== "all" && !currentCatalogEntryMatchesScope(normalizedRoot, entry, normalizedScope)) continue;
    const segments = entry.path.replace(/^library\/pcrs\//u, "").split("/");
    let node = tree;
    for (const [index, segment] of segments.entries()) {
      if (index >= depth) break;
      const child = (Object.hasOwn(node, segment) ? node[segment] : undefined) ?? { children: {}, pcrs: [] };
      Object.defineProperty(node, segment, { value: child, writable: true, enumerable: true, configurable: true });
      if (index === segments.length - 1) {
        const pcr = currentPcrSnapshot(normalizedRoot, entry, context).pcr;
        if (recordMatchesScope(pcr, normalizedScope)) child.pcrs.push(pcr);
      }
      node = child.children;
    }
  }
  return tree;
}
function treeFromRecords(records: readonly PcrRecord[], depth: number): PcrTree {
  const tree: PcrTree = {};
  for (const pcr of records) {
    const segments = pcr.path.replace(/^library\/pcrs\//u, "").split("/"); let node = tree;
    for (const [index, segment] of segments.entries()) {
      if (index >= depth) break;
      const child = (Object.hasOwn(node, segment) ? node[segment] : undefined) ?? { children: {}, pcrs: [] }; Object.defineProperty(node, segment, { value: child, writable: true, enumerable: true, configurable: true });
      if (index === segments.length - 1) child.pcrs.push(pcr);
      node = child.children;
    }
  }
  return tree;
}

export function resolveClassification({ root, system, version, code, context = null }: ClassificationOptions) {
  const normalizedSystem = String(system).toLowerCase();
  const normalizedVersion = String(version);
  const normalizedCode = String(code);
  const coverageIndex = readClassificationCoverage({
    root,
    system: normalizedSystem,
    version: normalizedVersion,
  });
  return resolveClassificationWithCoverage({
    root,
    system: normalizedSystem,
    version: normalizedVersion,
    code: normalizedCode,
    coverageIndex,
    context,
  });
}

export function verifyDistributionCoverage({ root, snapshot, context }: { root: string; snapshot: CoverageSnapshot; context?: PcrReadContext | null | undefined }): void {
  const coverageIndex = snapshot.document;
  for (const entry of coverageIndex.entries) {
    if (entry.coverage_status === "mapped" || entry.legacy_reference) {
      resolveClassificationWithCoverage({ root, system: String(coverageIndex.classification_system).toLowerCase(),
        version: String(coverageIndex.classification_version), code: String(entry.code), coverageIndex, context });
    }
  }
}

function resolveClassificationWithCoverage({ root, system, version, code, coverageIndex, context = null }: ClassificationOptions & { coverageIndex: CoverageDocument }) {
  const coverage = coverageIndex.entries.find(
    (candidate) => String(candidate.code) === String(code),
  );
  if (!coverage) {
    throw new PcrClassificationCodeUnknownError({ system, version, code });
  }
  if (coverage.coverage_status === "mapped") {
    const canonical = readCanonicalClassificationMapping({
      root,
      system,
      version,
      code,
    });
    assertCoverageMappingMatchesCanonical({ coverage, canonical, system, version, code });
    const pcr = getPcrById({ root, pcrId: canonical.mapping.pcr_id, context });
    if (pcr.record_kind !== "methodology") {
      throw invalidCoverageResolution({
        system,
        version,
        code,
        issue: `mapped coverage points to non-material PCR ${pcr.id}`,
      });
    }
    return {
      classification_system: canonical.mappingFile.classification_system,
      classification_version: canonical.mappingFile.classification_version,
      mapping: canonical.mapping,
      pcr,
      resolution_status: "mapped",
      coverage_status: coverage.coverage_status,
      coverage,
    };
  }

  if (coverage.legacy_reference) {
    const canonical = readCanonicalClassificationMapping({
      root,
      system,
      version,
      code,
    });
    if (canonical.mapping.pcr_id !== coverage.legacy_reference.pcr_id) {
      throw invalidCoverageResolution({
        system,
        version,
        code,
        issue: `legacy reference ${coverage.legacy_reference.pcr_id} does not match canonical mapping ${canonical.mapping.pcr_id}`,
      });
    }
    const pcr = getPcrById({ root, pcrId: canonical.mapping.pcr_id, context });
    if (pcr.record_kind !== "legacy_scaffold_reference") {
      throw invalidCoverageResolution({
        system,
        version,
        code,
        issue: `legacy reference points to material PCR ${pcr.id}`,
      });
    }
    return {
      classification_system: canonical.mappingFile.classification_system,
      classification_version: canonical.mappingFile.classification_version,
      mapping: canonical.mapping,
      pcr,
      resolution_status: "legacy_scaffold_compatibility",
      coverage_status: coverage.coverage_status,
      coverage,
    };
  }

  return {
    classification_system: String(coverageIndex.classification_system),
    classification_version: String(coverageIndex.classification_version),
    mapping: null,
    pcr: null,
    resolution_status: "unmapped",
    coverage_status: coverage.coverage_status,
    coverage,
    review_candidate:
      ["manual_review", "unknown"].includes(coverage.coverage_status) && coverage.mapping
        ? structuredClone(coverage.mapping)
        : null,
  };
}

function readCanonicalClassificationMapping({ root, system, version, code }: ClassificationOptions): CanonicalMapping {
  const normalizedRoot = path.resolve(root);
  const mappingPath = path.join(
    normalizedRoot,
    "classifications/mappings",
    `${system}-${version}-to-pcr.yaml`,
  );
  const mappingRelativePath = toPosix(path.relative(normalizedRoot, mappingPath));
  let rawMapping: unknown;
  try {
    const mappingBytes = pcrSource(root)?.readFile(mappingRelativePath) ?? readControlledRepositoryFileBytes({
      root: normalizedRoot,
      filePath: mappingPath,
      relativePath: mappingRelativePath,
      label: "classification mapping",
    });
    rawMapping = parseYaml(new TextDecoder("utf-8", { fatal: true }).decode(mappingBytes));
  } catch (error) {
    if (error instanceof PcrClassificationMappingError) {
      throw error;
    }
    throw new PcrClassificationMappingError({
      system,
      version,
      code,
      issue:
        `canonical mapping source ${mappingRelativePath} could not be read safely ` +
        `(${error instanceof Error ? error.message : String(error)})`,
    });
  }
  const mappingFile = checkedMappingDocument(rawMapping, { system, version, code });
  const matches = (mappingFile.mappings ?? []).filter(
    (entry) => String(entry.code) === String(code),
  );
  if (matches.length === 0) {
    throw new Error(`No PCR mapping found for ${system}:${version}:${code}`);
  }
  if (matches.length !== 1) {
    throw new PcrClassificationMappingError({
      system,
      version,
      code,
      issue: `expected one selected edge, found ${matches.length}`,
    });
  }
  const mapping = matches[0];
  if (!mapping) throw new Error("Selected mapping disappeared.");
  if (
    typeof mapping.mapping_type !== "string" || !CLASSIFICATION_MAPPING_RELATIONS.has(mapping.mapping_type)
    || mapping.mapping_type === "manual_review"
  ) {
    throw new PcrClassificationMappingError({
      system,
      version,
      code,
      mappingType: mapping.mapping_type,
    });
  }
  assertAcceptedMappingDecision({ mapping, system, version, code });
  if (typeof mapping.pcr_id !== "string") throw new PcrClassificationMappingError({ system, version, code, issue: "selected mapping requires a string PCR id" });
  const acceptance = mapping.acceptance;
  if (!isRecord(acceptance)) throw new PcrClassificationMappingError({ system, version, code, issue: "selected mapping requires acceptance" });
  return { mappingFile, mapping: { ...mapping, pcr_id: mapping.pcr_id, mapping_type: mapping.mapping_type, acceptance } };
}

function checkedMappingDocument(value: unknown, { system, version, code }: Omit<ClassificationOptions, "root" | "context">): MappingDocument {
  if (!isRecord(value) || value.schema_version !== 2 || value.status !== "current") {
    throw new PcrClassificationMappingError({ system, version, code, issue: `expected schema_version 2 with status current, found ${String(unknownField(value, "schema_version"))}/${String(unknownField(value, "status"))}` });
  }
  if (String(value.classification_system).toLowerCase() !== system.toLowerCase() || String(value.classification_version) !== version || !Array.isArray(value.mappings)) {
    throw new PcrClassificationMappingError({ system, version, code, issue: "mapping document coordinate or mappings array does not match the requested classification" });
  }
  if (!value.mappings.every(isRecord)) throw new PcrClassificationMappingError({ system, version, code, issue: "mapping entries must be objects" });
  return { ...value, schema_version: 2, status: "current", mappings: value.mappings };
}

function assertAcceptedMappingDecision({ mapping, system, version, code }: { mapping: UnknownRecord; system: string; version: string; code: string }): void {
  const acceptance = isRecord(mapping.acceptance) ? mapping.acceptance : null;
  if (
    acceptance?.status !== "accepted"
    || typeof acceptance?.decided_by !== "string"
    || acceptance.decided_by.trim().length === 0
    || !isRealCanonicalUtcTimestamp(acceptance?.decided_at_utc)
    || typeof acceptance?.decision_ref !== "string"
    || !/^(?:docs|classifications\/migrations)\/[A-Za-z0-9][A-Za-z0-9._/-]*\.(?:md|ya?ml|json)(?:#[A-Za-z0-9][A-Za-z0-9._-]*)?$/u.test(
      acceptance.decision_ref,
    )
  ) {
    throw new PcrClassificationMappingError({
      system,
      version,
      code,
      mappingType: mapping?.mapping_type,
      issue:
        "selected edge requires acceptance.status=accepted, decided_by, strict decided_at_utc, and decision_ref",
    });
  }
}

function isRealCanonicalUtcTimestamp(value: unknown): boolean {
  const match = typeof value === "string"
    ? /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(?:\.[0-9]+)?Z$/u.exec(value)
    : null;
  if (!match) {
    return false;
  }
  const year = Number(match[1]), month = Number(match[2]), day = Number(match[3]), hour = Number(match[4]), minute = Number(match[5]), second = Number(match[6]);
  const parsed = new Date(0);
  parsed.setUTCFullYear(year, month - 1, day);
  parsed.setUTCHours(hour, minute, second, 0);
  return (
    parsed.getUTCFullYear() === year
    && parsed.getUTCMonth() === month - 1
    && parsed.getUTCDate() === day
    && parsed.getUTCHours() === hour
    && parsed.getUTCMinutes() === minute
    && parsed.getUTCSeconds() === second
  );
}

function assertCoverageMappingMatchesCanonical({ coverage, canonical, system, version, code }: { coverage: CoverageEntry; canonical: CanonicalMapping; system: string; version: string; code: string }): void {
  const coverageMapping = coverage.mapping;
  const canonicalMapping = canonical.mapping;
  for (const field of ["pcr_id", "mapping_type", "confidence"] as const) {
    if (String(coverageMapping?.[field]) !== String(canonicalMapping?.[field])) {
      throw invalidCoverageResolution({
        system,
        version,
        code,
        issue: `coverage mapping ${field} ${String(coverageMapping?.[field])} does not match canonical mapping ${String(canonicalMapping?.[field])}`,
      });
    }
  }
  for (const field of ["status", "decided_by", "decided_at_utc", "decision_ref"] as const) {
    if (
      String(coverageMapping?.acceptance?.[field])
      !== String(canonicalMapping?.acceptance?.[field])
    ) {
      throw invalidCoverageResolution({
        system,
        version,
        code,
        issue:
          `coverage mapping acceptance.${field} ${String(coverageMapping?.acceptance?.[field])} ` +
          `does not match canonical mapping ${String(canonicalMapping?.acceptance?.[field])}`,
      });
    }
  }
}

function invalidCoverageResolution({ system, version, code, issue }: { system: string; version: string; code: string; issue: string }) {
  return new PcrClassificationCoverageSemanticError({
    system,
    version,
    source: `classifications/indexes/${system}-${version}-coverage.json`,
    issues: [`entry ${code}: ${issue}`],
  });
}

/**
 * Resolve a PCR identity without silently following a retired id. Alias
 * lookup intentionally happens before catalog lookup, including while the
 * old scaffold directory still exists during a staged migration.
 */
export function resolvePcrIdentity({ root, pcrId, context = null }: ReadPcrOptions) {
  const readRoot = requiredRoot(root, context);
  const normalizedPcrId = String(pcrId);
  const alias = findPcrIdAlias({ root: readRoot, pcrId: normalizedPcrId, context });
  if (alias) {
    return {
      resolution_status: "legacy_id_redirect",
      requested_pcr_id: normalizedPcrId,
      redirect: legacyPcrIdRedirect(alias),
      pcr: null,
    };
  }
  return {
    resolution_status: "canonical",
    requested_pcr_id: normalizedPcrId,
    redirect: null,
    pcr: getCurrentPcrSnapshotUnchecked({ root: readRoot, pcrId: normalizedPcrId, context }).pcr,
  };
}

function legacyPcrIdRedirect(alias: PcrIdAlias) {
  return {
    source_pcr_id: alias.source_pcr_id,
    source_pcr_path: alias.source_pcr_path,
    target: structuredClone(alias.target),
    reason: alias.reason,
    decision_ref: alias.decision_ref,
    next_command: nextCommandForLegacyPcrAlias(alias.target),
  };
}

function nextCommandForLegacyPcrAlias(target: PcrIdAlias["target"]): string {
  if (target.kind === "classification_coverage") {
    return (
      "npm --silent run tiangong-pcr -- resolve --classification " +
      `${target.classification_system}:${target.classification_version}:${target.code} --format json`
    );
  }
  return (
    "npm --silent run tiangong-pcr -- resolve --pcr " +
    `${target.pcr_id} --format json`
  );
}

function throwIfLegacyPcrId({ root, pcrId, context = null }: ReadPcrOptions): void {
  const alias = findPcrIdAlias({ root: requiredRoot(root, context), pcrId: String(pcrId), context });
  if (alias) {
    throw new PcrLegacyIdRedirectError(alias);
  }
}

export function getPcrById({ root, pcrId, refresh = false, context = null }: ReadPcrOptions): PcrRecord {
  return getCurrentPcrSnapshot({ root: requiredRoot(root, context), pcrId, refresh, context }).pcr;
}

export function getPcrReadiness({ root, pcrId, refresh = false, context = null }: ReadPcrOptions): Readiness {
  return structuredClone(getPcrById({ root: requiredRoot(root, context), pcrId, refresh, context }).readiness);
}

export function readPcrMarkdown({ root, pcrId, language = "en-US", context = null }: ReadPcrOptions & { language?: string }): string {
  const readRoot = requiredRoot(root, context);
  const snapshot = getCurrentPcrSnapshot({ root: readRoot, pcrId, context });
  const source = pcrSource(readRoot);
  if (source && !source.languages.includes(language)) {
    throw Object.assign(new Error(`Offline library contains English only; requested ${language}. Use --lang en-US.`), { code: "PCR_LIBRARY_LANGUAGE_UNAVAILABLE" });
  }
  const markdownName = `pcr.${language}.md`;
  const markdownPath = path.join(readRoot, snapshot.pcr.path, markdownName);
  const artifact = snapshot.artifacts[markdownName];
  if (!artifact?.bytes) {
    throw new Error(`PCR Markdown not found: ${toPosix(path.relative(readRoot, markdownPath))}`);
  }
  return artifact.bytes.toString("utf8");
}

/** A complete current document, read once through the same integrity boundary as guidance. */
export function readPcrDocumentBundle({ root, pcrId, context = null }: ReadPcrOptions) {
  root = requiredRoot(root, context);
  const snapshot = getCurrentPcrSnapshot({ root, pcrId, context });
  const { pcr, manifest, manifestBytes, structured } = snapshot;
  assertPcrUsable({ pcr, operation: "guidance" });
  const languages = pcrSource(root)?.languages ?? declaredPcrLanguages(manifest);
  if (manifest.schema_version !== 1 && manifest.schema_version !== 2) throw new Error(`Unsupported document manifest schema: ${manifest.schema_version}`);
  for (const language of languages) { const title = unknownField(manifest.title, language); if (typeof title !== "string" || !title.trim()) throw new Error(`Document requires a nonempty ${language} title.`); }
  const artifacts: Record<string, { path: string; bytes: Buffer; text: string; sha256: string }> = {};
  const decoder = new TextDecoder("utf-8", { fatal: true });
  for (const name of ["manifest.yaml", ...(pcrSource(root) ? [...languages.map((language) => `pcr.${language}.md`), "structured.yaml"] : pcrArtifactFiles(manifest))]) {
    const bytes = name === "manifest.yaml" ? manifestBytes : snapshot.artifacts[name]?.bytes;
    if (!bytes) throw new Error(`PCR document artifact is unavailable: ${pcr.path}/${name}`);
    // A copy prevents consumers from changing a cached snapshot through Buffer aliasing.
    const copy = Buffer.from(bytes);
    const text = decoder.decode(copy);
    if (!text.trim()) throw new Error(`PCR document artifact is empty: ${pcr.path}/${name}`);
    artifacts[name] = {
      path: `${pcr.path}/${name}`,
      bytes: copy,
      text,
      sha256: exactByteSha256(copy),
    };
  }
  return {
    schema_version: 1,
    workspace: "current",
    pcr: structuredClone(pcr),
    manifest: structuredClone(manifest),
    structured: structuredClone(structured),
    languages,
    artifacts,
  };
}

/** Complete referenced legacy module source; scaffold status remains explicit. */
export function readPcrModuleDocumentBundle({ root, group, moduleId }: { root: string; group: string; moduleId: string }) {
  for (const value of [group, moduleId]) if (typeof value !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(value)) throw new Error("Invalid PCR module identity.");
  const relativePath = `library/modules/${group}/${moduleId}.md`;
  const filePath = path.join(root, relativePath);
  const read = () => pcrSource(root)?.readFile(relativePath) ?? readControlledRepositoryFileBytes({ root, filePath, relativePath, label: "PCR module" });
  const bytes = read();
  const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  const envelope = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u.exec(text);
  if (!envelope) throw new Error(`Module requires frontmatter: ${relativePath}`);
  const frontmatter = parsedRecord(envelope[1] ?? "", "Module frontmatter");
  if (frontmatter.id !== `module.${group}.${moduleId}` || frontmatter.module_type !== group) throw new Error(`Module identity mismatch: ${relativePath}`);
  if (!text.slice(envelope[0].length).trim()) throw new Error(`Module body is empty: ${relativePath}`);
  if (!bytes.equals(read())) throw new Error(`Module changed during read: ${relativePath}`);
  return { frontmatter, language: frontmatter.language ?? "en-US", artifact: { path: relativePath, bytes: Buffer.from(bytes), text, sha256: exactByteSha256(bytes) } };
}

export function buildGuidance({ root, pcrId, context = null }: ReadPcrOptions): CompleteGuidance {
  return buildGuidanceForOperation({ root: requiredRoot(root, context), pcrId, operation: "guidance", context });
}

/** Internal captured source boundary used by synchronous read sessions. */
export function readVerifiedSnapshotForSession(options: ReadPcrOptions): CurrentPcrSnapshot & { structured: StructuredProjection } {
  const snapshot = getCurrentPcrSnapshot(options);
  assertPcrUsable({ pcr: snapshot.pcr, operation: "guidance" });
  if (!snapshot.structured) throw new Error(`PCR ${options.pcrId} passed readiness without a verified structured projection.`);
  return { ...snapshot, structured: snapshot.structured };
}
/** Compose from the captured verified source, never from a second file read. */
export function projectionFromVerifiedSnapshot(snapshot: CurrentPcrSnapshot & { structured: StructuredProjection }, root: string): VerifiedPcrProjection {
  return { pcr: structuredClone(snapshot.pcr), readiness: structuredClone(snapshot.pcr.readiness),
    source_structured: toPosix(path.relative(root, snapshot.structuredPath)),
    structured: structuredClone(snapshot.structured), ...deriveSnapshotGuidanceContext(snapshot) };
}
export function getVerifiedPcrProjection(options: ReadPcrOptions): VerifiedPcrProjection {
  return projectionFromVerifiedSnapshot(readVerifiedSnapshotForSession(options), requiredRoot(options.root, options.context));
}

function buildGuidanceForOperation({ root, pcrId, operation, context = null }: ReadPcrOptions & { operation: PcrOperation }): CompleteGuidance {
  root = requiredRoot(root, context);
  const snapshot = getCurrentPcrSnapshot({ root, pcrId, context });
  const { pcr, structured, structuredPath } = snapshot;
  assertPcrUsable({ pcr, operation });
  if (!structured) {
    throw new Error(
      `PCR ${pcrId} passed readiness without a verified structured projection.`,
    );
  }
  const guidance = buildCompleteGuidance({ ...snapshot, structured }, toPosix(path.relative(root, structuredPath)));
  assertCoreContract("guidance-output.schema.json", guidance, {
    code: "PCR_INTERNAL_CONTRACT_INVALID",
    entityKind: "Agent guidance output",
    source: toPosix(path.relative(root, structuredPath)),
  });
  return guidance;
}

export function createFeedbackDraft({
  root,
  pcrId,
  type,
  affectedSection = "",
  processId = "",
  flowRole = "",
  summary = "",
  evidence = "",
  proposedChange = "",
  agent = "tiangong-pcr",
}: { root: string; pcrId?: string; type: string; affectedSection?: string; processId?: string; flowRole?: string; summary?: string; evidence?: string; proposedChange?: string; agent?: string }) {
  if (!FEEDBACK_TYPES.includes(type)) {
    throw new Error(`Unsupported feedback type: ${type}`);
  }
  const pcr = pcrId ? getPcrById({ root, pcrId }) : null;
  const title = `PCR feedback: ${type}${pcrId ? ` for ${pcrId}` : ""}`;
  const body = `## Summary

${summary || "Describe the PCR issue or improvement."}

## Feedback metadata

| Field | Value |
| --- | --- |
| PCR id | ${pcrId || ""} |
| PCR version | ${pcr?.version ?? ""} |
| Feedback type | ${type} |
| Affected section | ${affectedSection} |
| Affected process_id | ${processId} |
| Affected flow role | ${flowRole} |
| Generated by | ${agent} |

## Current PCR text or rule excerpt


## Proposed change

${proposedChange}

## Evidence sources

${evidence}

## Impact on foreground data package construction


## Maintainer intake checklist

- [ ] Classify the feedback as PCR content, classification mapping, UUID identity, translation, source evidence, or CLI/validator behavior.
- [ ] Verify cited evidence and Tiangong UUID references before changing PCR content.
- [ ] Update canonical \`pcr.en-US.md\` first when methodology changes.
- [ ] Align \`pcr.zh-CN.md\` when user-facing text changes.
- [ ] Run \`npm run pcr:sync-structured -- --pcr <library/pcrs/...>\` when canonical Markdown changes.
- [ ] Bump or publish the PCR manifest if lifecycle state changes.
`;

  const draft = { title, body };
  assertCoreContract("feedback-draft-output.schema.json", draft, {
    code: "PCR_INTERNAL_CONTRACT_INVALID",
    entityKind: "PCR feedback issue draft output",
  });
  return draft;
}

export function validateModelAgainstGuidance({ root, pcrId, model }: { root: string; pcrId: string; model: unknown }): ValidationReport {
  const guidance = buildGuidanceForOperation({ root, pcrId, operation: "validation" });
  const findings: ValidationFinding[] = [];
  const accepted = validateCoreContract("model-validation-input.schema.json", model).valid;
  const text = typeof model === "string" ? model : accepted ? JSON.stringify(model) : "";
  const checksPerformed: PerformedCheck[] = [];
  const checksSkipped: SkippedCheck[] = [];

  if (!accepted) {
    findings.push({
      severity: "error",
      code: "invalid_model_input",
      message: "Model input must be text or a JSON object.",
    });
  }

  const requiredQualifiers = asArray(guidance.reference_flow.required_qualifiers);
  if (accepted && requiredQualifiers.length > 0) {
    checksPerformed.push(performedCheck(
      "required_qualifier_presence",
      "reference_flow.required_qualifiers",
      requiredQualifiers.length,
    ));
    for (const qualifier of requiredQualifiers) {
      if (!text.toLowerCase().includes(String(qualifier).toLowerCase())) {
        findings.push({
          severity: "warning",
          code: "missing_required_qualifier",
          message: `Model text does not mention required qualifier: ${qualifier}`,
        });
      }
    }
  }

  if (accepted) {
    addSkippedCheck(
      checksSkipped,
      "system_boundary_rules",
      "system_boundary.rules",
      asArray(guidance.system_boundary?.rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "boundary_abstraction",
      "boundary_abstraction",
      topLevelRequirementCount(guidance.boundary_abstraction),
    );
    addSkippedCheck(
      checksSkipped,
      "reference_flow_definition",
      "reference_flow",
      topLevelRequirementCount(guidance.reference_flow, ["required_qualifiers"]),
    );
    addSkippedCheck(checksSkipped, "measurement_rules", "measurement_rules", asArray(guidance.measurement_rules).length);
    addSkippedCheck(checksSkipped, "process_map", "process_map", asArray(guidance.process_map).length);
    addSkippedCheck(checksSkipped, "process_inventory", "process_inventory", countInventoryRows(guidance.process_inventory));
    addSkippedCheck(
      checksSkipped,
      "collection_protocols",
      "production_guidance.collection_protocols",
      asArray(guidance.production_guidance.collection_protocols).length,
    );
    addSkippedCheck(
      checksSkipped,
      "calculation_rules",
      "production_guidance.calculation_rules",
      asArray(guidance.production_guidance.calculation_rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "data_quality_requirements",
      "production_guidance.data_quality_requirements",
      asArray(guidance.production_guidance.data_quality_requirements).length,
    );
    addSkippedCheck(checksSkipped, "data_quality_rules", "data_quality_rules", asArray(guidance.data_quality_rules).length);
    addSkippedCheck(checksSkipped, "allocation_rules", "allocation_rules", asArray(guidance.allocation_rules).length);
    addSkippedCheck(checksSkipped, "validation_rules", "validation_rules", asArray(guidance.validation_rules).length);
    addSkippedCheck(
      checksSkipped,
      "published_dataset_profile",
      "published_dataset_profile",
      topLevelRequirementCount(guidance.published_dataset_profile),
    );
  }

  return buildValidationReport({
    validationKind: "tiangong-pcr-model-validation",
    guidance,
    input: {
      input_kind: "process_or_lifecyclemodel",
      representation: typeof model === "string" ? "text" : Array.isArray(model) ? "array" : typeof model,
      accepted,
    },
    findings,
    checksPerformed,
    checksSkipped,
  });
}

export function validateDatasetAgainstGuidance({ root, pcrId, dataset }: { root: string; pcrId: string; dataset: unknown }): ValidationReport {
  const guidance = buildGuidanceForOperation({ root, pcrId, operation: "validation" });
  const findings: ValidationFinding[] = [];
  const accepted = validateCoreContract("dataset-validation-input.schema.json", dataset).valid;
  const checksPerformed: PerformedCheck[] = [];
  const checksSkipped: SkippedCheck[] = [];
  const records = accepted ? collectionRecordArrays(dataset) : [];
  const requiredProtocolIds = asArray(guidance.production_guidance.collection_protocols)
    .map((protocol) => unknownField(protocol, "protocol_id"))
    .filter(Boolean);
  const presentProtocolIds = accepted ? collectCollectionRecordProtocolIds(dataset) : new Set();

  if (!accepted) {
    findings.push({
      severity: "error",
      code: "invalid_dataset_input",
      message: "Foreground data package input must be a JSON object.",
    });
  }

  if (accepted && requiredProtocolIds.length > 0) {
    checksPerformed.push(performedCheck(
      "collection_protocol_presence",
      "production_guidance.collection_protocols",
      requiredProtocolIds.length,
    ));
    for (const protocolId of requiredProtocolIds) {
      if (!presentProtocolIds.has(String(protocolId))) {
        findings.push({
          severity: "error",
          code: "missing_collection_protocol_record",
          message: `Foreground data package is missing collection record for protocol_id ${protocolId}`,
        });
      }
    }
  }

  if (accepted) {
    addSkippedCheck(
      checksSkipped,
      "system_boundary_rules",
      "system_boundary.rules",
      asArray(guidance.system_boundary?.rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "boundary_abstraction",
      "boundary_abstraction",
      topLevelRequirementCount(guidance.boundary_abstraction),
    );
    addSkippedCheck(
      checksSkipped,
      "reference_flow_rules",
      "reference_flow",
      topLevelRequirementCount(guidance.reference_flow, ["required_qualifiers"]) +
        asArray(guidance.reference_flow?.required_qualifiers).length,
    );
    addSkippedCheck(checksSkipped, "measurement_rules", "measurement_rules", asArray(guidance.measurement_rules).length);
    addSkippedCheck(checksSkipped, "process_map", "process_map", asArray(guidance.process_map).length);
    addSkippedCheck(checksSkipped, "process_inventory", "process_inventory", countInventoryRows(guidance.process_inventory));
    addSkippedCheck(
      checksSkipped,
      "calculation_rules",
      "production_guidance.calculation_rules",
      asArray(guidance.production_guidance.calculation_rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "data_quality_requirements",
      "production_guidance.data_quality_requirements",
      asArray(guidance.production_guidance.data_quality_requirements).length,
    );
    addSkippedCheck(checksSkipped, "data_quality_rules", "data_quality_rules", asArray(guidance.data_quality_rules).length);
    addSkippedCheck(checksSkipped, "allocation_rules", "allocation_rules", asArray(guidance.allocation_rules).length);
    addSkippedCheck(checksSkipped, "validation_rules", "validation_rules", asArray(guidance.validation_rules).length);
    addSkippedCheck(
      checksSkipped,
      "published_dataset_profile",
      "published_dataset_profile",
      topLevelRequirementCount(guidance.published_dataset_profile),
    );
  }

  return buildValidationReport({
    validationKind: "tiangong-pcr-dataset-validation",
    guidance,
    input: {
      input_kind: "foreground_data_package",
      representation: Array.isArray(dataset) ? "array" : dataset === null ? "null" : typeof dataset,
      accepted,
      collection_record_count: records.length,
      distinct_protocol_id_count: presentProtocolIds.size,
    },
    findings,
    checksPerformed,
    checksSkipped,
  });
}

function collectCollectionRecordProtocolIds(dataset: unknown): Set<string> {
  if (typeof dataset === "string") {
    return new Set();
  }
  const ids = new Set<string>();
  for (const record of collectionRecordArrays(dataset)) {
    const protocolId = unknownField(record, "protocol_id") ?? unknownField(record, "collection_protocol_id");
    if (protocolId) {
      ids.add(String(protocolId));
    }
  }
  return ids;
}

function collectionRecordArrays(value: unknown): unknown[] {
  if (!isRecord(value)) {
    return [];
  }
  const records = [];
  for (const key of ["collection_records", "foreground_records", "measurement_records"]) {
    const rows = value[key];
    if (Array.isArray(rows)) records.push(...rows);
  }
  if (value.data && typeof value.data === "object") {
    records.push(...collectionRecordArrays(value.data));
  }
  return records;
}

function currentPcrEntry(root: string, entry: CatalogEntry): PcrRecord {
  return currentPcrSnapshot(root, entry).pcr;
}

function getCurrentPcrSnapshot({ root, pcrId, refresh = false, context = null }: ReadPcrOptions): CurrentPcrSnapshot {
  throwIfLegacyPcrId({ root, pcrId, context });
  return getCurrentPcrSnapshotUnchecked({ root, pcrId, refresh, context });
}

export function readPcrDistributionCatalog({ root }: { root: string }): CatalogEntry[] {
  return readPcrCatalog(path.resolve(root));
}

// Builder-only: preserves legacy catalog records without following alias redirects.
export function readPcrDistributionSnapshot(options: ReadPcrOptions): CurrentPcrSnapshot {
  return getCurrentPcrSnapshotUnchecked(options);
}

function getCurrentPcrSnapshotUnchecked({ root, pcrId, refresh = false, context = null }: ReadPcrOptions): CurrentPcrSnapshot {
  root = requiredRoot(root, context);
  const source = pcrSource(root);
  if (source) {
    const entry = source.entry(pcrId);
    if (!entry) throw new Error(`PCR not found: ${pcrId}`);
    return currentPcrSnapshot(root, entry);
  }
  const normalizedRoot = path.resolve(root);
  if (context) {
    assertPcrReadContextFresh({ context, root: normalizedRoot });
  }
  const entry = context
    ? getPcrReadContextCatalog({ context, root: normalizedRoot, readCatalog: readPcrCatalog }).get(pcrId)
    : getPcrCatalog({ root: normalizedRoot, refresh }).find(candidate => candidate.id === pcrId);
  if (!entry) {
    throw new Error(`PCR not found: ${pcrId}`);
  }
  return currentPcrSnapshot(normalizedRoot, entry, context);
}

function currentPcrSnapshot(root: string, entry: CatalogEntry, context: PcrReadContext | null = null): CurrentPcrSnapshot {
  const snapshotFiles = pcrSource(root)?.snapshotFiles(entry) ?? readConsistentSnapshotFiles({ root, entry, context });
  const pcr = pcrFromManifest({
    root,
    pcrDir: path.dirname(entry.manifestPath),
    manifest: snapshotFiles.manifest,
  });
  let projection;
  try {
    projection = inspectPcrProjection({
      root,
      pcr,
      manifest: snapshotFiles.manifest,
      artifacts: snapshotFiles.artifacts,
    });
  } catch (error) {
    projection = failedProjectionInspection({ root, pcr, error });
  }
  const readiness = assessPcrReadiness({
    pcr,
    projectionFingerprint: projection.fingerprint,
    structuredAvailable: projection.structuredAvailable,
    projectionCompletenessIssues: projection.completenessIssues,
  });
  return {
    pcr: { ...pcr, readiness },
    manifest: snapshotFiles.manifest,
    manifestBytes: snapshotFiles.manifestBytes,
    artifacts: snapshotFiles.artifacts,
    ...projection,
  };
}

function readConsistentSnapshotFiles({ root, entry, context = null }: { root: string; entry: CatalogEntry; context?: PcrReadContext | null | undefined }): CapturedPcrSnapshot {
  let lastFailure = null;
  for (let attempt = 1; attempt <= CURRENT_SNAPSHOT_MAX_ATTEMPTS; attempt += 1) {
    try {
      const locationA = assertCurrentSnapshotLocation({ root, entry });
      const manifestABytes = readCanonicalFileBytes(locationA.manifestPath);
      const manifest = parsedRecord(manifestABytes.toString("utf8"), "PCR manifest");
      if (manifest.id !== entry.id) {
        throw snapshotAttemptError(
          "manifest_identity_changed",
          `Expected PCR id ${entry.id}, found ${String(manifest.id)}.`,
          { expected_pcr_id: entry.id, actual_pcr_id: manifest.id ?? null },
        );
      }

      const managedMarkersA = currentManagedStateMarkers(locationA.pcrDir);
      assertManagedSnapshotHashesDeclared({ manifest, managedMarkers: managedMarkersA });
      const artifacts = Object.fromEntries(
        pcrArtifactFiles(manifest, { strict: false }).map((filename) => [
          filename,
          readObservedPcrArtifact({ root, context, pcrDir: locationA.pcrDir, filename }),
        ]),
      );
      const releaseFailures = releaseArtifactFailures({ manifest, artifacts });
      const locationB = assertCurrentSnapshotLocation({ root, entry });
      const managedMarkersB = currentManagedStateMarkers(locationB.pcrDir);
      if (!sameStrings(managedMarkersA, managedMarkersB)) {
        throw snapshotAttemptError(
          "managed_state_changed_during_read",
          "PCR managed release state changed while its current snapshot was being read.",
          {
            managed_markers_before: managedMarkersA,
            managed_markers_after: managedMarkersB,
          },
        );
      }
      const manifestBBytes = readCanonicalFileBytes(locationB.manifestPath);
      if (!manifestABytes.equals(manifestBBytes)) {
        throw snapshotAttemptError(
          "manifest_changed_during_read",
          "manifest.yaml changed while its current artifacts were being read.",
        );
      }
      if (releaseFailures.length > 0) {
        throw snapshotAttemptError(
          "release_artifact_hash_mismatch",
          "Current PCR artifacts do not match manifest.release_artifacts.",
          { manifest_status: manifest.status ?? null, artifacts: releaseFailures },
        );
      }
      return { manifest, manifestBytes: manifestABytes, artifacts };
    } catch (error) {
      lastFailure = snapshotFailureDetails(error);
    }
  }
  throw new PcrCurrentSnapshotInconsistentError({
    pcrId: entry.id,
    pcrPath: entry.path,
    attempts: CURRENT_SNAPSHOT_MAX_ATTEMPTS,
    lastFailure,
  });
}

function readObservedPcrArtifact({ root, context, pcrDir, filename }: { root: string; context: PcrReadContext | null; pcrDir: string; filename: string }): CapturedArtifact {
  const artifactPath = path.join(pcrDir, filename);
  if (context) {
    observePcrReadContextArtifactRead({
      context,
      root,
      relativePath: toPosix(path.relative(root, artifactPath)),
    });
  }
  return readOptionalCanonicalFile(artifactPath);
}

function releaseArtifactFailures({ manifest, artifacts }: { manifest: PcrManifest; artifacts: Record<string, CapturedArtifact> }): { artifact: string; hash_field: string | undefined; expected: string | null; actual: string | null; reason: string }[] {
  if (!Object.hasOwn(manifest, "release_artifacts")) {
    return [];
  }
  const expectedHashes = expectedPcrArtifactHashes(manifest);
  const failures = [];
  for (const [filename, expected] of Object.entries(expectedHashes)) {
    const hashField = manifest.schema_version === 2 && filename !== "structured.yaml"
      ? `markdown_sha256.${filename.slice(4, -3)}`
      : Object.entries(RELEASE_ARTIFACTS).find(([, file]) => file === filename)?.[0];
    const artifact = artifacts[filename];
    if (!artifact?.bytes) {
      failures.push({
        artifact: filename,
        hash_field: hashField,
        expected: typeof expected === "string" ? expected : null,
        actual: null,
        reason: `artifact_unreadable:${errorCode(artifact?.error)}`,
      });
      continue;
    }
    const actual = exactByteSha256(artifact.bytes);
    if (typeof expected !== "string" || expected !== actual) {
      failures.push({
        artifact: filename,
        hash_field: hashField,
        expected: typeof expected === "string" ? expected : null,
        actual,
        reason: "sha256_mismatch",
      });
    }
  }
  return failures;
}

function assertManagedSnapshotHashesDeclared({ manifest, managedMarkers }: { manifest: PcrManifest; managedMarkers: readonly string[] }): void {
  if (managedMarkers.length === 0 || Object.hasOwn(manifest, "release_artifacts")) {
    return;
  }
  throw snapshotAttemptError(
    "managed_release_artifacts_missing",
    "Managed PCR current state requires manifest.release_artifacts and cannot use legacy snapshot semantics.",
    {
      manifest_status: manifest.status ?? null,
      managed_markers: managedMarkers,
      required_field: "manifest.release_artifacts",
      required_hash_fields: Object.keys(RELEASE_ARTIFACTS),
    },
  );
}

function currentManagedStateMarkers(pcrDir: string) {
  return ["release-history.yaml", "releases"]
    .filter((name) => pathEntryExists(path.join(pcrDir, name)))
    .sort((left, right) => left.localeCompare(right));
}

function pathEntryExists(targetPath: string): boolean {
  try {
    lstatSync(targetPath);
    return true;
  } catch (error) {
    if (errorCode(error) === "ENOENT") {
      return false;
    }
    throw error;
  }
}

function sameStrings(left: readonly string[], right: readonly string[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function assertCurrentSnapshotLocation({ root, entry }: { root: string; entry: CatalogEntry }): { manifestPath: string; pcrDir: string } {
  const normalizedRoot = path.resolve(root);
  const pathSegments = String(entry.path).split("/");
  if (
    pathSegments.length !== 5 ||
    pathSegments[0] !== "library" ||
    pathSegments[1] !== "pcrs" ||
    pathSegments.slice(2).some((segment) => !segment || segment === "." || segment === "..")
  ) {
    throw snapshotAttemptError(
      "canonical_pcr_path_invalid",
      "Cached PCR path is not a canonical domain/subdomain/leaf path.",
      {
        pcr_path: entry.path,
        reason: "non_canonical_relative_path",
      },
    );
  }

  const directoryPaths = [normalizedRoot];
  let pcrDir = normalizedRoot;
  for (const segment of pathSegments) {
    pcrDir = path.join(pcrDir, segment);
    directoryPaths.push(pcrDir);
  }

  let rootRealPath = null;
  for (const [index, directoryPath] of directoryPaths.entries()) {
    const relativePath = toPosix(path.relative(normalizedRoot, directoryPath)) || ".";
    let stat;
    try {
      stat = lstatSync(directoryPath);
    } catch (error) {
      throw snapshotAttemptError(
        "canonical_pcr_path_invalid",
        `Canonical PCR directory is unavailable: ${relativePath}.`,
        {
          path_component: relativePath,
          reason: `directory_unreadable:${errorCode(error)}`,
          expected_type: "regular_directory",
        },
      );
    }
    if (stat.isSymbolicLink() || !stat.isDirectory()) {
      throw snapshotAttemptError(
        "canonical_pcr_path_invalid",
        `Canonical PCR path component is not a regular directory: ${relativePath}.`,
        {
          path_component: relativePath,
          reason: stat.isSymbolicLink() ? "symbolic_link" : "not_a_directory",
          expected_type: "regular_directory",
        },
      );
    }

    let realPath;
    try {
      realPath = realpathSync(directoryPath);
    } catch (error) {
      throw snapshotAttemptError(
        "canonical_pcr_path_invalid",
        `Canonical PCR directory cannot be resolved: ${relativePath}.`,
        {
          path_component: relativePath,
          reason: `realpath_unavailable:${errorCode(error)}`,
          expected_type: "regular_directory",
        },
      );
    }
    if (index === 0) {
      rootRealPath = realPath;
    } else if (rootRealPath === null || !pathIsInside(rootRealPath, realPath)) {
      throw snapshotAttemptError(
        "canonical_pcr_path_invalid",
        `Canonical PCR directory resolves outside the repository root: ${relativePath}.`,
        {
          path_component: relativePath,
          reason: "realpath_outside_root",
          expected_type: "regular_directory_within_root",
        },
      );
    }
  }

  const manifestPath = path.join(pcrDir, "manifest.yaml");
  if (path.resolve(entry.manifestPath) !== manifestPath) {
    throw snapshotAttemptError(
      "canonical_pcr_path_invalid",
      "Cached manifest path is not the direct manifest.yaml child of its canonical PCR leaf.",
      {
        pcr_path: entry.path,
        reason: "manifest_not_direct_leaf_child",
      },
    );
  }
  return { manifestPath, pcrDir };
}

function pathIsInside(rootPath: string, candidatePath: string): boolean {
  const relativePath = path.relative(rootPath, candidatePath);
  return relativePath === "" || (!path.isAbsolute(relativePath) && relativePath !== ".." && !relativePath.startsWith(`..${path.sep}`));
}

function exactByteSha256(bytes: Uint8Array): string {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function readOptionalCanonicalFile(filePath: string): CapturedArtifact {
  try {
    return { bytes: readCanonicalFileBytes(filePath), error: null };
  } catch (error) {
    return { bytes: null, error };
  }
}

function readControlledRepositoryFileBytes({ root, filePath, relativePath, label }: { root: string; filePath: string; relativePath: string; label: string }): Buffer {
  const normalizedRoot = path.resolve(root);
  const normalizedFilePath = path.resolve(filePath);
  const containedPath = path.relative(normalizedRoot, normalizedFilePath);
  if (
    containedPath.length === 0
    || path.isAbsolute(containedPath)
    || containedPath === ".."
    || containedPath.startsWith(`..${path.sep}`)
  ) {
    throw new Error(`${label} path escapes the repository root: ${relativePath}`);
  }

  const expectedRelativePath = toPosix(containedPath);
  if (expectedRelativePath !== relativePath) {
    throw new Error(`${label} path is not canonical: ${relativePath}`);
  }

  const before = assertControlledRepositoryPath({
    root: normalizedRoot,
    containedPath,
    relativePath,
    label,
  });
  let descriptor;
  try {
    descriptor = openSync(
      normalizedFilePath,
      fsConstants.O_RDONLY
        | (fsConstants.O_NOFOLLOW ?? 0)
        | (fsConstants.O_NONBLOCK ?? 0),
    );
    const opened = fstatSync(descriptor);
    if (!opened.isFile()) {
      throw new Error(`${label} is not a regular file: ${relativePath}`);
    }
    const after = assertControlledRepositoryPath({
      root: normalizedRoot,
      containedPath,
      relativePath,
      label,
    });
    if (
      opened.dev !== before.dev
      || opened.ino !== before.ino
      || opened.dev !== after.dev
      || opened.ino !== after.ino
    ) {
      throw new Error(`${label} path changed while it was being opened: ${relativePath}`);
    }
    return readFileSync(descriptor);
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }
}

function assertControlledRepositoryPath({ root, containedPath, relativePath, label }: { root: string; containedPath: string; relativePath: string; label: string }): Stats {
  let currentPath = root;
  let finalStats;
  const segments = containedPath.split(path.sep);
  for (const [index, segment] of segments.entries()) {
    currentPath = path.join(currentPath, segment);
    const stats = lstatSync(currentPath);
    if (stats.isSymbolicLink()) {
      throw new Error(`${label} path contains a symbolic link: ${relativePath}`);
    }
    const isLast = index === segments.length - 1;
    if (isLast ? !stats.isFile() : !stats.isDirectory()) {
      throw new Error(
        isLast
          ? `${label} is not a regular file: ${relativePath}`
          : `${label} parent is not a directory: ${relativePath}`,
      );
    }
    if (isLast) {
      finalStats = stats;
    }
  }

  const realRoot = realpathSync(root);
  const realFile = realpathSync(path.join(root, containedPath));
  if (!pathIsInside(realRoot, realFile) || realRoot === realFile) {
    throw new Error(`${label} real path escapes the repository root: ${relativePath}`);
  }
  if (!finalStats) throw new Error(`${label} path has no file component: ${relativePath}`);
  return finalStats;
}

function readCanonicalFileBytes(filePath: string): Buffer {
  const stat = lstatSync(filePath);
  if (stat.isSymbolicLink() || !stat.isFile()) {
    throw Object.assign(new Error(`Canonical PCR artifact is not a regular file: ${filePath}`), { code: stat.isSymbolicLink() ? "PCR_CANONICAL_SYMLINK_REJECTED" : "PCR_CANONICAL_FILE_NOT_REGULAR" });
  }
  const descriptor = openSync(
    filePath,
    fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0),
  );
  try {
    if (!fstatSync(descriptor).isFile()) {
      throw Object.assign(new Error(`Canonical PCR artifact is not a regular file: ${filePath}`), { code: "PCR_CANONICAL_FILE_NOT_REGULAR" });
    }
    return readFileSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
}

function snapshotAttemptError(code: string, message: string, details: UnknownRecord = {}): SnapshotAttemptError {
  return Object.assign(new Error(message), { snapshotCode: code, snapshotDetails: details });
}

function snapshotFailureDetails(error: unknown): UnknownRecord {
  return {
    code: unknownField(error, "snapshotCode") ?? errorCode(error),
    message: error instanceof Error ? error.message : String(error),
    ...(isRecord(unknownField(error, "snapshotDetails")) ? unknownField(error, "snapshotDetails") as UnknownRecord : {}),
  };
}

function optionalString(value: unknown, fallback: string, label: string): string {
  if (value === null || value === undefined) return fallback;
  if (typeof value !== "string") throw new TypeError(`${label} must be a string.`);
  return value;
}
function nullableString(value: unknown, label: string): string | null {
  return value === null || value === undefined ? null : optionalString(value, "", label);
}
function stringRecord(value: unknown, label: string): Record<string, string> {
  if (value === null || value === undefined) return {};
  if (!isRecord(value)) throw new TypeError(`${label} must be a mapping.`);
  const entries: [string, string][] = [];
  for (const [key, entry] of Object.entries(value)) {
    if (typeof entry !== "string") throw new TypeError(`${label}.${key} must be a string.`);
    entries.push([key, entry]);
  }
  return Object.fromEntries<string>(entries);
}
function titleRecord(value: unknown): Record<string, string | null> {
  if (value === null || value === undefined) return {};
  if (!isRecord(value)) throw new TypeError("PCR title must be a mapping.");
  const entries: [string, string | null][] = [];
  for (const [key, title] of Object.entries(value)) {
    if (title !== null && typeof title !== "string") throw new TypeError(`PCR title.${key} must be a string or null.`);
    entries.push([key, title]);
  }
  return Object.fromEntries<string | null>(entries);
}
function pcrFromManifest({ root, pcrDir, manifest }: { root: string; pcrDir: string; manifest: PcrManifest }): PcrIdentity {
  if (typeof manifest.id !== "string") throw new TypeError("PCR manifest id must be a string.");
  const languages = manifest.languages ?? {};
  if (!isRecord(languages) || (languages.canonical !== undefined && typeof languages.canonical !== "string")
    || (languages.available !== undefined && (!Array.isArray(languages.available) || !languages.available.every(language => typeof language === "string")))) {
    throw new TypeError("PCR language metadata must contain string language tags.");
  }
  const references = manifest.classification_refs ?? [];
  if (!Array.isArray(references) || !references.every(isRecord)) throw new TypeError("PCR classification references must be objects.");
  const pcr = {
    id: manifest.id, path: toPosix(path.relative(root, pcrDir)),
    title: titleRecord(manifest.title),
    status: optionalString(manifest.status, "unknown", "PCR status"),
    version: nullableString(manifest.version, "PCR version"),
    content_maturity: nullableString(manifest.content_maturity, "PCR maturity"),
    languages: { ...languages, ...(typeof languages.canonical === "string" ? { canonical: languages.canonical } : {}), ...(Array.isArray(languages.available) ? { available: languages.available.filter((language): language is string => typeof language === "string") } : {}) },
    translation_status: stringRecord(manifest.translation_status, "PCR translation status"),
    classification_refs: references,
  };
  return { ...pcr, record_kind: recordKindForPcr(pcr) };
}

function inspectPcrProjection({ root, pcr, manifest, artifacts }: { root: string; pcr: PcrIdentity; manifest: PcrManifest; artifacts: Record<string, CapturedArtifact> }): ProjectionInspection {
  const pcrDir = path.join(root, pcr.path);
  const structuredPath = path.join(pcrDir, "structured.yaml");
  const structuredArtifact = artifacts["structured.yaml"];
  const markdownArtifact = artifacts["pcr.en-US.md"];
  if (!isMaterialPcr(pcr)) {
    return {
      fingerprint: {
        ...projectionNotRequiredState(),
        schema_valid: null,
      },
      structured: null,
      structuredPath,
      structuredAvailable: Boolean(structuredArtifact?.bytes),
      completenessIssues: [],
    };
  }

  if (!structuredArtifact?.bytes && errorCode(structuredArtifact?.error) === "ENOENT") {
    return unavailableProjectionInspection({
      structuredPath,
      structuredAvailable: false,
      fingerprint: missingProjectionState(
        "missing",
        "structured_projection_missing",
        "structured.yaml is required for material PCR guidance and validation.",
      ),
    });
  }

  if (!markdownArtifact?.bytes && errorCode(markdownArtifact?.error) === "ENOENT") {
    return unavailableProjectionInspection({
      structuredPath,
      structuredAvailable: Boolean(structuredArtifact?.bytes),
      fingerprint: missingProjectionState(
        "source_missing",
        "projection_source_missing",
        "Canonical pcr.en-US.md is required to verify the structured projection.",
      ),
    });
  }

  if (!markdownArtifact?.bytes) {
    return unavailableProjectionInspection({
      structuredPath,
      structuredAvailable: Boolean(structuredArtifact?.bytes),
      fingerprint: invalidProjectionState(
        "projection_source_unreadable",
        `Canonical pcr.en-US.md could not be read (${errorCode(markdownArtifact?.error)}).`,
        null,
      ),
    });
  }

  if (!structuredArtifact?.bytes) {
    return unavailableProjectionInspection({
      structuredPath,
      structuredAvailable: false,
      fingerprint: invalidProjectionState(
        "structured_projection_unreadable",
        `structured.yaml could not be read (${errorCode(structuredArtifact?.error)}).`,
        false,
      ),
    });
  }

  const sourceMarkdown = markdownArtifact.bytes.toString("utf8");
  const structuredText = structuredArtifact.bytes.toString("utf8");

  let structured: unknown;
  try {
    structured = parseYaml(structuredText);
  } catch (error) {
    return unavailableProjectionInspection({
      structuredPath,
      structuredAvailable: true,
      fingerprint: invalidProjectionState(
        "structured_projection_parse_error",
        `structured.yaml could not be parsed (${errorCode(error)}).`,
        false,
      ),
    });
  }

  const schemaResult = validateCoreContract(
    "structured-projection.schema.json",
    structured,
    { entityKind: "material structured projection" },
  );
  const integrity = inspectProjectionIntegrity({
    sourceMarkdown,
    structuredText,
    metadata: unknownField(structured, "projection_metadata"),
    structuredProjection: structured,
  });
  const schemaIssues = schemaResult.valid
    ? []
    : [
        {
          code: "structured_schema_invalid",
          message: `structured.yaml violates the material projection schema (${schemaResult.errors.length} issue(s)).`,
        },
        ...schemaResult.errors.map((error) => ({
          code: `structured_schema.${error.keyword}`,
          message: `${error.instance_path}: ${error.message}`,
        })),
      ];
  const issues = deduplicateMessages([...schemaIssues, ...integrity.issues]);
  const fingerprint = {
    ...integrity,
    status: schemaResult.valid ? integrity.status : "invalid",
    schema_valid: schemaResult.valid,
    issues,
  };

  return {
    fingerprint,
    structured: schemaResult.valid && integrity.status === "current" ? structured as StructuredProjection : null,
    structuredPath,
    structuredAvailable: true,
    completenessIssues: schemaResult.valid
      ? materialProjectionCompletenessIssues(structured, {
          expectedPcrId: pcr.id,
          allowUnresolvedProductFlowUuid:
            hasDeclaredUnresolvedReferenceProductFlow(structured, manifest),
        })
      : [],
  };
}

function unavailableProjectionInspection({ fingerprint, structuredPath, structuredAvailable }: { fingerprint: ReadinessFingerprint; structuredPath: string; structuredAvailable: boolean }): ProjectionInspection {
  return {
    fingerprint,
    structured: null,
    structuredPath,
    structuredAvailable,
    completenessIssues: [],
  };
}

function failedProjectionInspection({ root, pcr, error }: { root: string; pcr: PcrIdentity; error: unknown }): ProjectionInspection {
  return unavailableProjectionInspection({
    structuredPath: path.join(root, pcr.path, "structured.yaml"),
    structuredAvailable: false,
    fingerprint: invalidProjectionState(
      "projection_inspection_failed",
      `Projection integrity inspection failed (${errorCode(error)}).`,
      false,
    ),
  });
}

function invalidProjectionState(code: string, message: string, schemaValid: boolean | null): ReadinessFingerprint {
  return {
    required: true,
    status: "invalid",
    schema_valid: schemaValid,
    contract_version: null,
    source_sha256: null,
    generated_content_sha256: null,
    source_hash_valid: null,
    content_hash_valid: null,
    issues: [{ code, message }],
  };
}

function errorCode(error: unknown): string {
  const code = unknownField(error, "code");
  return typeof code === "string" && code ? code : "unknown_error";
}

function missingProjectionState(status: ReadinessFingerprint["status"], code: string, message: string): ReadinessFingerprint {
  return {
    required: true,
    status,
    schema_valid: null,
    contract_version: null,
    source_sha256: null,
    generated_content_sha256: null,
    source_hash_valid: null,
    content_hash_valid: null,
    issues: [{ code, message }],
  };
}

function isMaterialPcr(pcr: Pick<PcrIdentity, "status" | "content_maturity">): boolean {
  return recordKindForPcr(pcr) === "methodology";
}

function normalizeCatalogScope(scope: unknown): PcrCatalogScope {
  const normalized = String(scope);
  if (!PCR_CATALOG_SCOPE_SET.has(normalized)) {
    throw new PcrCatalogScopeError(scope);
  }
  if (normalized === "all" || normalized === "material" || normalized === "legacy") return normalized;
  throw new PcrCatalogScopeError(scope);
}

function recordMatchesScope(pcr: PcrIdentity, scope: PcrCatalogScope): boolean {
  if (scope === "all") {
    return true;
  }
  return scope === "material"
    ? pcr.record_kind === "methodology"
    : pcr.record_kind === "legacy_scaffold_reference";
}

function currentCatalogEntryMatchesScope(root: string, entry: CatalogEntry, scope: PcrCatalogScope): boolean {
  const manifest = readConsistentCurrentManifest({ root, entry });
  const recordKind = recordKindForPcr({
    status: optionalString(manifest.status, "unknown", "PCR status"),
    content_maturity: nullableString(manifest.content_maturity, "PCR maturity"),
  });
  return scope === "material"
    ? recordKind === "methodology"
    : recordKind === "legacy_scaffold_reference";
}

function readConsistentCurrentManifest(options: { root: string; entry: CatalogEntry }): PcrManifest { return readConsistentManifestSnapshot(options).manifest; }

function readConsistentManifestSnapshot({ root, entry }: { root: string; entry: CatalogEntry }): { manifest: PcrManifest; bytes: Buffer } {
  let lastFailure = null;
  for (let attempt = 1; attempt <= CURRENT_SNAPSHOT_MAX_ATTEMPTS; attempt += 1) {
    try {
      const locationA = assertCurrentSnapshotLocation({ root, entry });
      const manifestABytes = readCanonicalFileBytes(locationA.manifestPath);
      const manifest = parsedRecord(manifestABytes.toString("utf8"), "PCR manifest");
      if (manifest.id !== entry.id) {
        throw snapshotAttemptError(
          "manifest_identity_changed",
          `Expected PCR id ${entry.id}, found ${String(manifest.id)}.`,
          { expected_pcr_id: entry.id, actual_pcr_id: manifest.id ?? null },
        );
      }

      const locationB = assertCurrentSnapshotLocation({ root, entry });
      const manifestBBytes = readCanonicalFileBytes(locationB.manifestPath);
      if (!manifestABytes.equals(manifestBBytes)) {
        throw snapshotAttemptError(
          "manifest_changed_during_read",
          "manifest.yaml changed while its catalog scope was being determined.",
        );
      }
      return { manifest, bytes: manifestABytes };
    } catch (error) {
      lastFailure = snapshotFailureDetails(error);
    }
  }
  throw new PcrCurrentSnapshotInconsistentError({
    pcrId: entry.id,
    pcrPath: entry.path,
    attempts: CURRENT_SNAPSHOT_MAX_ATTEMPTS,
    lastFailure,
  });
}

function recordKindForPcr(pcr: Pick<PcrIdentity, "status" | "content_maturity">): PcrRecordKind {
  if (pcr.status === "scaffold" && pcr.content_maturity === "empty_scaffold") {
    return "legacy_scaffold_reference";
  }
  if (
    METHODOLOGY_LIFECYCLE_STATUSES.has(pcr.status) &&
    pcr.content_maturity !== null && METHODOLOGY_MATURITIES.has(pcr.content_maturity)
  ) {
    return "methodology";
  }
  return "invalid_lifecycle_state";
}

function assessPcrReadiness({
  pcr,
  projectionFingerprint,
  structuredAvailable,
  projectionCompletenessIssues = [],
}: { pcr: PcrIdentity; projectionFingerprint: ReadinessFingerprint; structuredAvailable: boolean; projectionCompletenessIssues?: readonly ContractIssue[] }): Readiness {
  const blockers: ContractIssue[] = [];
  const warnings: ContractIssue[] = [];
  const methodologyStatus = pcr.content_maturity ?? "unknown";
  const lifecycleStatus = pcr.status ?? "unknown";
  const chineseTranslationStatus = pcr.translation_status?.["zh-CN"] ?? "unknown";
  if (pcr.record_kind === "invalid_lifecycle_state") {
    blockers.push({
      code: "invalid_lifecycle_identity",
      message:
        `status ${lifecycleStatus} and content_maturity ${methodologyStatus} do not identify either ` +
        "a legacy scaffold or a material methodology record.",
    });
  }
  if (!GUIDANCE_MATURITIES.has(methodologyStatus)) {
    blockers.push({
      code: "methodology_not_authored",
      message: `content_maturity ${methodologyStatus} is not usable methodology.`,
    });
  }
  if (lifecycleStatus === "scaffold") {
    blockers.push({
      code: "scaffold_lifecycle",
      message: "PCR lifecycle status is scaffold.",
    });
  } else if (!GUIDANCE_LIFECYCLE_STATUSES.has(lifecycleStatus)) {
    blockers.push({
      code: "lifecycle_not_usable",
      message: `PCR lifecycle status ${lifecycleStatus} is not available for guidance.`,
    });
  }
  if (lifecycleStatus === "deprecated" || methodologyStatus === "deprecated_methodology") {
    blockers.push({
      code: "deprecated_methodology",
      message: "Deprecated PCR methodology must not guide new work.",
    });
  }
  if (projectionFingerprint.required && (
    projectionFingerprint.schema_valid !== true || projectionFingerprint.status !== "current"
  )) {
    blockers.push(...projectionFingerprint.issues);
  }
  if (
    projectionFingerprint.required &&
    projectionFingerprint.schema_valid === true &&
    projectionFingerprint.status === "current"
  ) {
    blockers.push(...projectionCompletenessIssues);
  }
  if (
    GUIDANCE_MATURITIES.has(methodologyStatus) &&
    !USABLE_LIFECYCLE_STATES.get(lifecycleStatus)?.has(methodologyStatus)
  ) {
    blockers.push({
      code: "incompatible_lifecycle_state",
      message: `status ${lifecycleStatus} is incompatible with content_maturity ${methodologyStatus}.`,
    });
  }
  if (
    lifecycleStatus === "active" &&
    !["aligned", "reviewed"].includes(chineseTranslationStatus)
  ) {
    blockers.push({
      code: "translation_not_aligned",
      message: `active PCR requires aligned or reviewed zh-CN translation; found ${chineseTranslationStatus}.`,
    });
  }
  if (lifecycleStatus === "published" && chineseTranslationStatus !== "reviewed") {
    blockers.push({
      code: "translation_not_reviewed",
      message: `published PCR requires reviewed zh-CN translation; found ${chineseTranslationStatus}.`,
    });
  }

  if (methodologyStatus === "authored_methodology") {
    warnings.push({
      code: "methodology_not_reviewed",
      message: "Authored methodology is candidate guidance and still requires methodology review.",
    });
  }
  if (
    lifecycleStatus === "candidate" &&
    !["aligned", "reviewed"].includes(chineseTranslationStatus)
  ) {
    warnings.push({
      code: "translation_not_aligned",
      message: `Candidate zh-CN translation is ${chineseTranslationStatus}; use canonical en-US guidance for methodology decisions.`,
    });
  }

  const uniqueBlockers = deduplicateMessages(blockers);
  const uniqueWarnings = deduplicateMessages(warnings);
  const usable = uniqueBlockers.length === 0;
  const readiness: Readiness = {
    status: usable
      ? (REVIEWED_MATURITIES.has(methodologyStatus) && lifecycleStatus !== "candidate" ? "ready" : "review_required")
      : "unavailable",
    lifecycle_status: lifecycleStatus,
    methodology_status: methodologyStatus,
    structured_projection_available: structuredAvailable,
    projection_fingerprint: structuredClone(projectionFingerprint),
    usable_for_guidance: usable,
    usable_for_validation: usable,
    blockers: uniqueBlockers,
    warnings: uniqueWarnings,
  };
  assertCoreContract("readiness.schema.json", readiness, {
    code: "PCR_INTERNAL_CONTRACT_INVALID",
    entityKind: "PCR readiness",
  });
  return readiness;
}

function assertPcrUsable({ pcr, operation }: { pcr: PcrRecord; operation: PcrOperation }): void {
  const usabilityKey = operation === "validation" ? "usable_for_validation" : "usable_for_guidance";
  if (!pcr.readiness?.[usabilityKey]) {
    throw new PcrUsabilityError({ pcrId: pcr.id, operation, readiness: pcr.readiness });
  }
}

function buildValidationReport({
  validationKind,
  guidance,
  input,
  findings,
  checksPerformed,
  checksSkipped,
}: { validationKind: ValidationReport["validation_kind"]; guidance: CompleteGuidance; input: ValidationReport["input"]; findings: ValidationFinding[]; checksPerformed: PerformedCheck[]; checksSkipped: SkippedCheck[] }): ValidationReport {
  const checkedRequirementCount = checksPerformed.reduce((total, check) => total + check.requirement_count, 0);
  const skippedRequirementCount = checksSkipped.reduce((total, check) => total + check.requirement_count, 0);
  const completeness = checksPerformed.length === 0
    ? "none"
    : checksSkipped.length > 0
      ? "partial"
      : "complete";
  const findingSummary = countFindingsBySeverity(findings);
  const validationStatus = findingSummary.error > 0
    ? "failed"
    : checksPerformed.length === 0
      ? "inconclusive"
      : "passed";

  const report: ValidationReport = {
    schema_version: 1,
    validation_kind: validationKind,
    pcr: guidance.pcr,
    readiness: structuredClone(guidance.readiness),
    validation_status: validationStatus,
    completeness,
    input,
    check_coverage: {
      total_requirement_count: checkedRequirementCount + skippedRequirementCount,
      checked_requirement_count: checkedRequirementCount,
      skipped_requirement_count: skippedRequirementCount,
      checks_performed: checksPerformed,
      checks_skipped: checksSkipped,
    },
    finding_count: findings.length,
    finding_summary: findingSummary,
    findings,
  };
  assertCoreContract("validation-output.schema.json", report, {
    code: "PCR_INTERNAL_CONTRACT_INVALID",
    entityKind: "PCR validation report",
  });
  return report;
}

function performedCheck(checkId: string, requirementFamily: string, requirementCount: number): PerformedCheck {
  return {
    check_id: checkId,
    requirement_family: requirementFamily,
    requirement_count: requirementCount,
    evaluated_requirement_count: requirementCount,
  };
}

function addSkippedCheck(checks: SkippedCheck[], checkId: string, requirementFamily: string, requirementCount: number): void {
  if (requirementCount <= 0) {
    return;
  }
  checks.push({
    check_id: checkId,
    requirement_family: requirementFamily,
    requirement_count: requirementCount,
    reason: "Validator does not yet implement this requirement family.",
  });
}

function countFindingsBySeverity(findings: readonly ValidationFinding[]): Record<FindingSeverity, number> {
  const summary = { error: 0, warning: 0, info: 0 };
  for (const finding of findings) {
    if (Object.hasOwn(summary, finding.severity)) {
      summary[finding.severity] += 1;
    }
  }
  return summary;
}

function deduplicateMessages(entries: readonly ContractIssue[]): ContractIssue[] {
  return [
    ...new Map(
      entries.map((entry) => [`${entry.code}\0${entry.message}`, entry]),
    ).values(),
  ];
}

function countInventoryRows(processInventory: unknown): number {
  let count = 0;
  for (const process of asArray(processInventory)) {
    for (const direction of ["inputs", "outputs"]) {
      const groups = unknownField(process, direction);
      if (!isRecord(groups)) {
        continue;
      }
      for (const rows of Object.values(groups)) {
        count += asArray(rows).length;
      }
    }
  }
  return count;
}

function topLevelRequirementCount(value: unknown, excludedKeys: readonly string[] = []): number {
  if (!isRecord(value)) {
    return 0;
  }
  const excluded = new Set(excludedKeys);
  return Object.entries(value).filter(
    ([key, requirement]) => !excluded.has(key) && hasRequirementValue(requirement),
  ).length;
}

function hasRequirementValue(value: unknown): boolean {
  if (Array.isArray(value)) {
    return value.some(hasRequirementValue);
  }
  if (isRecord(value)) {
    return Object.values(value).some(hasRequirementValue);
  }
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function isRecord(value: unknown): value is UnknownRecord {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function findManifestFiles(directory: string): string[] {
  const results = [];
  for (const domainDir of canonicalChildDirectories(directory)) {
    for (const subdomainDir of canonicalChildDirectories(domainDir)) {
      for (const pcrDir of canonicalChildDirectories(subdomainDir)) {
        const manifestPath = path.join(pcrDir, "manifest.yaml");
        if (isCanonicalFile(manifestPath)) {
          results.push(manifestPath);
        }
      }
    }
  }
  return results;
}

function canonicalChildDirectories(directory: string): string[] {
  return readdirSync(directory)
    .map((entry) => path.join(directory, entry))
    .filter(isCanonicalDirectory)
    .sort((left, right) => left.localeCompare(right));
}

function isCanonicalDirectory(directory: string): boolean {
  try {
    const stat = lstatSync(directory);
    return !stat.isSymbolicLink() && stat.isDirectory();
  } catch (error) {
    if (errorCode(error) === "ENOENT") {
      return false;
    }
    throw error;
  }
}

function isCanonicalFile(filePath: string): boolean {
  try {
    const stat = lstatSync(filePath);
    return !stat.isSymbolicLink() && stat.isFile();
  } catch (error) {
    if (errorCode(error) === "ENOENT") {
      return false;
    }
    throw error;
  }
}

function toPosix(value: string): string {
  return value.split(path.sep).join("/");
}
