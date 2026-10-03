import { pcrSource } from "./source-context.ts";
import { createHash } from "node:crypto";
import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  realpathSync,
  type Stats,
} from "node:fs";
import path from "node:path";
import { TextDecoder } from "node:util";

import { assertCoreContract } from "./contracts.ts";
import vocabularySchema from '../schemas/controlled-vocabulary.schema.json' with { type: 'json' };
const CLASSIFICATION_COVERAGE_STATUS_VALUES = vocabularySchema.$defs.classification_coverage_status.enum;
const CLASSIFICATION_MAPPING_RELATION_VALUES = vocabularySchema.$defs.classification_mapping_relation.enum;

export type CoverageStatus = 'mapped' | 'unmapped' | 'candidate_suggestion' | 'manual_review' | 'unknown';
export type CoverageMappingType = 'exact' | 'broader' | 'narrower' | 'proxy';
export interface CoverageAcceptance { status: 'accepted'; decided_by: string; decided_at_utc: string; decision_ref: string }
export interface CoverageMapping { pcr_id: string; mapping_type: CoverageMappingType; confidence: string; acceptance: CoverageAcceptance }
export interface CoverageSourceArtifact { path: string; hash_mode: 'exact_bytes'; sha256: string }
export interface CoverageSource { contract_version: '2'; generator: string; generator_version: '2'; normalized_leaves: CoverageSourceArtifact; mapping: CoverageSourceArtifact }
export interface CoverageEntry {
  code: string; label: string; path_codes: string[]; path_titles: string[]; coverage_status: CoverageStatus;
  mapping: CoverageMapping | null; legacy_reference: {kind: 'legacy_scaffold_reference'; pcr_id: string; path: string} | null;
}
export interface CoverageSummary { total: number; mapped: number; unmapped: number; candidate_suggestion: number; manual_review: number; unknown: number }
export interface CoverageDocument { schema_version: 1; index_kind: 'classification-pcr-coverage'; classification_system: string; classification_version: string; source: CoverageSource; summary: CoverageSummary; entries: CoverageEntry[] }
export interface CoverageSnapshot { readonly document: CoverageDocument; readonly relative_path: string; readonly sha256: string }
export type ClassificationCoverageSnapshot = CoverageSnapshot;
interface ClassificationCoordinate { system: string; version: string }
interface CoverageReadOptions { root: string; system: unknown; version: unknown }
interface FileSource { bytes: Buffer; text: string }
interface FileOptions { root: string; relativePath: string; label: string }
interface ProjectedLeaf { title: string; path_codes: string[]; path_titles: string[] }
function record(value: unknown): value is Record<string, unknown> { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function field(value: unknown, key: string): unknown { return record(value) ? value[key] : undefined; }
function errorDetail(value: unknown): string { return value instanceof Error ? String(field(value, 'code') ?? value.message) : String(value); }
function sourceArtifact(value: unknown): value is CoverageSourceArtifact {
  return record(value) && typeof value.path === 'string' && value.hash_mode === 'exact_bytes' && typeof value.sha256 === 'string';
}
function mappingShape(value: unknown): value is CoverageMapping {
  if (!record(value) || typeof value.pcr_id !== 'string' || typeof value.mapping_type !== 'string'
    || !CLASSIFICATION_MAPPING_RELATIONS.has(value.mapping_type) || value.mapping_type === 'manual_review'
    || typeof value.confidence !== 'string' || !record(value.acceptance)) return false;
  return value.acceptance.status === 'accepted' && typeof value.acceptance.decided_by === 'string'
    && typeof value.acceptance.decided_at_utc === 'string' && typeof value.acceptance.decision_ref === 'string';
}
function coverageEntry(value: unknown): value is CoverageEntry {
  if (!record(value) || typeof value.code !== 'string' || typeof value.label !== 'string' || !isStringArray(value.path_codes) || !isStringArray(value.path_titles)
    || typeof value.coverage_status !== 'string' || !CLASSIFICATION_COVERAGE_STATUSES.includes(value.coverage_status)) return false;
  return (value.mapping === null || mappingShape(value.mapping)) && (value.legacy_reference === null
    || record(value.legacy_reference) && value.legacy_reference.kind === 'legacy_scaffold_reference'
      && typeof value.legacy_reference.pcr_id === 'string' && typeof value.legacy_reference.path === 'string');
}
/** Shape narrowing after schema validation; source/projection consistency remains a separate check. */
export function isCoverageDocumentShape(value: unknown): value is CoverageDocument {
  if (!record(value) || value.schema_version !== 1 || value.index_kind !== 'classification-pcr-coverage' || typeof value.classification_system !== 'string'
    || typeof value.classification_version !== 'string' || !record(value.source) || !record(value.summary) || !Array.isArray(value.entries)) return false;
  const source = value.source;
  return source.contract_version === '2' && typeof source.generator === 'string' && source.generator_version === '2'
    && sourceArtifact(source.normalized_leaves) && sourceArtifact(source.mapping)
    && ['total',...CLASSIFICATION_COVERAGE_STATUSES].every(key => typeof field(value.summary,key) === 'number') && value.entries.every(coverageEntry);
}
import { parseYaml } from "./yaml-lite.ts";

export const CLASSIFICATION_COVERAGE_STATUSES = CLASSIFICATION_COVERAGE_STATUS_VALUES;
export const CLASSIFICATION_COVERAGE_CONTRACT_VERSION = "2";
export const CLASSIFICATION_COVERAGE_GENERATOR = "builder/scripts/build-catalog.mjs";
export const CLASSIFICATION_COVERAGE_GENERATOR_VERSION = "2";

const CLASSIFICATION_MAPPING_RELATIONS = new Set(CLASSIFICATION_MAPPING_RELATION_VALUES);

export class PcrClassificationCoverageNotFoundError extends Error {
  readonly code: string;
  readonly details: Record<string, unknown>;
  constructor({ system, version, relativePath }: ClassificationCoordinate & { relativePath: string }) {
    super(`Classification coverage index not found for ${system}:${version}: ${relativePath}`);
    this.name = "PcrClassificationCoverageNotFoundError";
    this.code = "PCR_CLASSIFICATION_COVERAGE_NOT_FOUND";
    this.details = {
      classification: `${system}:${version}`,
      coverage_index: relativePath,
    };
  }
}

export class PcrClassificationCodeUnknownError extends Error {
  readonly code: string;
  readonly details: Record<string, unknown>;
  constructor({ system, version, code }: ClassificationCoordinate & { code: string }) {
    super(`Classification code is not present in the coverage index: ${system}:${version}:${code}`);
    this.name = "PcrClassificationCodeUnknownError";
    this.code = "PCR_CLASSIFICATION_CODE_UNKNOWN";
    this.details = { classification: `${system}:${version}:${code}` };
  }
}

export class PcrClassificationCoverageSemanticError extends Error {
  readonly code: string;
  readonly details: {classification: string; source: string; issues: string[]};
  constructor({ system, version, source, issues }: ClassificationCoordinate & { source: string; issues: readonly string[] }) {
    super(
      `Classification coverage index is inconsistent for ${system}:${version}: ${issues.join("; ")}`,
    );
    this.name = "PcrClassificationCoverageSemanticError";
    this.code = "PCR_INVALID_CLASSIFICATION_COVERAGE";
    this.details = {
      classification: `${system}:${version}`,
      source,
      issues: [...issues],
    };
  }
}

export class PcrClassificationCoverageStatusError extends Error {
  readonly code: string;
  readonly details: Record<string, unknown>;
  constructor(status: unknown) {
    super(
      `Unsupported classification coverage status ${String(status)}. Expected one of: ${CLASSIFICATION_COVERAGE_STATUSES.join(", ")}.`,
    );
    this.name = "PcrClassificationCoverageStatusError";
    this.code = "PCR_INVALID_CLASSIFICATION_COVERAGE_STATUS";
    this.details = {
      status: String(status),
      allowed_statuses: [...CLASSIFICATION_COVERAGE_STATUSES],
    };
  }
}

export function classificationCoveragePath({ root, system, version }: CoverageReadOptions) {
  const normalized = normalizeClassification({ system, version });
  return path.join(
    path.resolve(root),
    "classifications/indexes",
    `${normalized.system}-${normalized.version}-coverage.json`,
  );
}

export function hasClassificationCoverage({ root, system, version }: CoverageReadOptions) {
  return existsSync(classificationCoveragePath({ root, system, version }));
}

export function readClassificationCoverage({ root, system, version }: CoverageReadOptions) {
  return readClassificationCoverageSnapshot({ root, system, version }).document;
}

export function readClassificationCoverageSnapshot({ root, system, version }: CoverageReadOptions): CoverageSnapshot {
  const storage = pcrSource(root);
  if (storage) return storage.coverageSnapshot(system, version);
  const normalizedRoot = path.resolve(root);
  const normalized = normalizeClassification({ system, version });
  const coveragePath = classificationCoveragePath({
    root: normalizedRoot,
    system: normalized.system,
    version: normalized.version,
  });
  const relativePath = toPosix(path.relative(normalizedRoot, coveragePath));
  if (!existsSync(coveragePath)) {
    throw new PcrClassificationCoverageNotFoundError({
      ...normalized,
      relativePath,
    });
  }

  let coverageSource;
  try {
    coverageSource = readContainedUtf8RegularFile({
      root: normalizedRoot,
      relativePath,
      label: "coverage index",
    });
  } catch (error) {
    throw new PcrClassificationCoverageSemanticError({
      ...normalized,
      source: relativePath,
      issues: [error instanceof Error ? error.message : String(error)],
    });
  }

  let coverage: unknown;
  try {
    coverage = JSON.parse(coverageSource.text);
  } catch (error) {
    throw new PcrClassificationCoverageSemanticError({
      ...normalized,
      source: relativePath,
      issues: [`invalid JSON (${error instanceof Error ? error.message : String(error)})`],
    });
  }

  assertCoreContract("classification-coverage.schema.json", coverage, {
    code: "PCR_INVALID_CLASSIFICATION_COVERAGE",
    entityKind: "Classification coverage index",
    source: relativePath,
  });
  if (!isCoverageDocumentShape(coverage)) throw new PcrClassificationCoverageSemanticError({ ...normalized, source: relativePath, issues: ["coverage projection has an invalid data shape"] });
  assertCoverageSemantics({ coverage, normalized, source: relativePath });
  assertCoverageSources({
    coverage,
    normalized,
    root: normalizedRoot,
    source: relativePath,
  });
  return Object.freeze({
    document: structuredClone(coverage),
    relative_path: relativePath,
    sha256: exactByteSha256(coverageSource.bytes),
  });
}

export function getClassificationCoverageSummary({ root, system, version }: CoverageReadOptions) {
  const coverage = readClassificationCoverage({ root, system, version });
  return {
    schema_version: coverage.schema_version,
    index_kind: coverage.index_kind,
    classification_system: coverage.classification_system,
    classification_version: coverage.classification_version,
    source: structuredClone(coverage.source),
    summary: structuredClone(coverage.summary),
  };
}

export function listClassificationCoverage({ root, system, version, status = null }: CoverageReadOptions & {status?: unknown}) {
  if (status !== null && !CLASSIFICATION_COVERAGE_STATUSES.includes(String(status))) {
    throw new PcrClassificationCoverageStatusError(status);
  }
  const coverage = readClassificationCoverage({ root, system, version });
  const entries = status === null
    ? coverage.entries
    : coverage.entries.filter((entry) => entry.coverage_status === String(status));
  return {
    classification_system: coverage.classification_system,
    classification_version: coverage.classification_version,
    available_statuses: [...CLASSIFICATION_COVERAGE_STATUSES],
    entries: structuredClone(entries),
  };
}

export function findClassificationCoverageEntry({ root, system, version, code }: CoverageReadOptions & {code: unknown}): CoverageEntry {
  const coverage = readClassificationCoverage({ root, system, version });
  const entry = coverage.entries.find((candidate) => String(candidate.code) === String(code));
  if (!entry) {
    throw new PcrClassificationCodeUnknownError({
      system: String(system).toLowerCase(),
      version: String(version),
      code: String(code),
    });
  }
  return structuredClone(entry);
}

function normalizeClassification({ system, version }: {system: unknown; version: unknown}): ClassificationCoordinate {
  const normalizedSystem = String(system).toLowerCase();
  const normalizedVersion = String(version);
  if (!/^[a-z0-9][a-z0-9_-]*$/u.test(normalizedSystem)) {
    throw new Error(`Unsupported classification system token: ${String(system)}`);
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(normalizedVersion)) {
    throw new Error(`Unsupported classification version token: ${String(version)}`);
  }
  return { system: normalizedSystem, version: normalizedVersion };
}

function assertCoverageSemantics({ coverage, normalized, source }: {coverage: CoverageDocument; normalized: ClassificationCoordinate; source: string}): void {
  const issues: string[] = [];
  if (String(coverage.classification_system).toLowerCase() !== normalized.system) {
    issues.push(
      `classification_system ${String(coverage.classification_system)} does not match ${normalized.system}`,
    );
  }
  if (String(coverage.classification_version) !== normalized.version) {
    issues.push(
      `classification_version ${String(coverage.classification_version)} does not match ${normalized.version}`,
    );
  }

  const seenCodes = new Set<string>();
  const statusCounts = Object.fromEntries(
    CLASSIFICATION_COVERAGE_STATUSES.map((status) => [status, 0]),
  );
  for (const entry of coverage.entries) {
    if (seenCodes.has(entry.code)) {
      issues.push(`duplicate entry code ${entry.code}`);
    }
    seenCodes.add(entry.code);
    statusCounts[entry.coverage_status] = (statusCounts[entry.coverage_status] ?? 0) + 1;
    if (entry.path_codes.length !== entry.path_titles.length) {
      issues.push(`entry ${entry.code} has mismatched path_codes and path_titles lengths`);
    }
    if (entry.coverage_status === "mapped" && !entry.mapping) {
      issues.push(`mapped entry ${entry.code} has no mapping`);
    }
    if (entry.mapping && !isProjectedMapping(entry.mapping)) {
      issues.push(`entry ${entry.code} has a mapping without an accepted decision projection`);
    }
    if (
      ["unmapped", "candidate_suggestion", "manual_review"].includes(entry.coverage_status)
      && entry.mapping
    ) {
      issues.push(`${entry.coverage_status} entry ${entry.code} cannot carry an accepted mapping`);
    }
    if (entry.mapping && entry.legacy_reference) {
      issues.push(`entry ${entry.code} cannot be both a material mapping and a legacy reference`);
    }
    if (entry.legacy_reference && entry.coverage_status !== "unmapped") {
      issues.push(`legacy reference entry ${entry.code} must have coverage_status unmapped`);
    }
  }
  if (coverage.summary.total !== coverage.entries.length) {
    issues.push(
      `summary.total ${coverage.summary.total} does not match entries length ${coverage.entries.length}`,
    );
  }
  for (const status of CLASSIFICATION_COVERAGE_STATUSES) {
    if (field(coverage.summary, status) !== statusCounts[status]) {
      issues.push(
        `summary.${status} ${field(coverage.summary, status)} does not match entry count ${statusCounts[status]}`,
      );
    }
  }

  if (issues.length > 0) {
    throw new PcrClassificationCoverageSemanticError({
      ...normalized,
      source,
      issues,
    });
  }
}

function assertCoverageSources({ coverage, normalized, root, source }: {coverage: CoverageDocument; normalized: ClassificationCoordinate; root: string; source: string}): void {
  const issues: string[] = [];
  const verifiedSources: { normalized_leaves?: FileSource; mapping?: FileSource } = {};
  const sourceBindings: ["normalized_leaves" | "mapping", CoverageSourceArtifact, string][] = [
    [
      "normalized_leaves",
      coverage.source.normalized_leaves,
      canonicalNormalizedLeavesPath(normalized),
    ],
    ["mapping", coverage.source.mapping, canonicalMappingPath(normalized)],
  ];
  for (const [sourceName, descriptor, canonicalPath] of sourceBindings) {
    if (descriptor.path !== canonicalPath) {
      issues.push(sourcePathBindingIssue({ sourceName, descriptor, canonicalPath, normalized }));
      continue;
    }

    let sourceFile;
    try {
      sourceFile = readContainedUtf8RegularFile({
        root,
        relativePath: canonicalPath,
        label: `source ${sourceName}`,
      });
    } catch (error) {
      issues.push(error instanceof Error ? error.message : String(error));
      continue;
    }
    const actualSha256 = exactByteSha256(sourceFile.bytes);
    if (actualSha256 !== descriptor.sha256) {
      issues.push(
        `source ${sourceName} exact-byte SHA-256 mismatch: expected ${descriptor.sha256}, received ${actualSha256}`,
      );
      continue;
    }
    verifiedSources[sourceName] = sourceFile;
  }

  if (verifiedSources.normalized_leaves && verifiedSources.mapping) {
    let normalizedLeaves: unknown;
    let mapping: unknown;
    try {
      normalizedLeaves = JSON.parse(verifiedSources.normalized_leaves.text);
    } catch (error) {
      issues.push(
        `source normalized_leaves is not valid JSON (${error instanceof Error ? error.message : String(error)})`,
      );
    }
    try {
      mapping = parseYaml(verifiedSources.mapping.text);
    } catch (error) {
      issues.push(
        `source mapping is not valid YAML (${error instanceof Error ? error.message : String(error)})`,
      );
    }
    if (normalizedLeaves && mapping) {
      issues.push(
        ...coverageProjectionIssues({ coverage, normalized, normalizedLeaves, mapping }),
      );
    }
  }
  if (issues.length > 0) {
    throw new PcrClassificationCoverageSemanticError({
      ...normalized,
      source,
      issues,
    });
  }
}

function sourcePathBindingIssue({ sourceName, descriptor, canonicalPath, normalized }: {sourceName: string; descriptor: CoverageSourceArtifact; canonicalPath: string; normalized: ClassificationCoordinate}): string {
  const reportedPath = String(descriptor.path);
  const normalizedPath = path.posix.normalize(reportedPath);
  const escapesRoot = (
    path.posix.isAbsolute(reportedPath)
    || normalizedPath === ".."
    || normalizedPath.startsWith("../")
  );
  const reason = escapesRoot
    ? "escapes the repository root and does not match"
    : "does not match";
  return `source ${sourceName} path ${reportedPath} ${reason} canonical path ${canonicalPath} for ${normalized.system}:${normalized.version}`;
}

function coverageProjectionIssues({ coverage, normalized, normalizedLeaves, mapping }: {coverage: CoverageDocument; normalized: ClassificationCoordinate; normalizedLeaves: unknown; mapping: unknown}): string[] {
  const issues: string[] = [];
  if (
    String(field(normalizedLeaves, "classification_system")).toLowerCase() !== normalized.system
    || String(field(normalizedLeaves, "classification_version")) !== normalized.version
  ) {
    issues.push(
      `source normalized_leaves coordinate ${String(field(normalizedLeaves, "classification_system"))}:${String(field(normalizedLeaves, "classification_version"))} does not match ${normalized.system}:${normalized.version}`,
    );
  }
  if (
    String(field(mapping, "classification_system")).toLowerCase() !== normalized.system
    || String(field(mapping, "classification_version")) !== normalized.version
  ) {
    issues.push(
      `source mapping coordinate ${String(field(mapping, "classification_system"))}:${String(field(mapping, "classification_version"))} does not match ${normalized.system}:${normalized.version}`,
    );
  }
  if (field(mapping, "schema_version") !== 2 || field(mapping, "status") !== "current") {
    issues.push("source mapping must use accepted-only schema_version 2 with status current");
  }

  if (!Array.isArray(field(normalizedLeaves, "leaves"))) {
    issues.push("source normalized_leaves.leaves must be an array");
    return issues;
  }
  if (!Array.isArray(field(mapping, "mappings"))) {
    issues.push("source mapping.mappings must be an array");
    return issues;
  }

  const leavesByCode = new Map<string, ProjectedLeaf>();
  for (const leaf of unknownArray(field(normalizedLeaves, "leaves"))) {
    const code = sourceCode(leaf);
    if (code === null) {
      issues.push("source normalized_leaves contains a leaf without a code");
      continue;
    }
    if (!isProjectedLeaf(leaf)) {
      issues.push(`source normalized leaf ${code} cannot be projected deterministically`);
      continue;
    }
    if (leavesByCode.has(code)) {
      issues.push(`source normalized_leaves contains duplicate code ${code}`);
      continue;
    }
    leavesByCode.set(code, leaf);
  }

  const entriesByCode = new Map(coverage.entries.map((entry) => [String(entry.code), entry]));
  const sourceCodes = [...leavesByCode.keys()].sort(compareText);
  const entryCodes = coverage.entries.map((entry) => String(entry.code));
  if (!sameStringArrays(entryCodes, sourceCodes)) {
    issues.push("coverage entries do not match the deterministic normalized-leaf code order");
  }
  for (const code of sourceCodes) {
    const leaf = leavesByCode.get(code);
    if (!leaf) throw new Error("Missing projected normalized leaf");
    const entry = entriesByCode.get(code);
    if (!entry) {
      issues.push(`coverage entries are missing normalized leaf ${code}`);
      continue;
    }
    if (entry.label !== leaf.title) {
      issues.push(`coverage entry ${code} label does not match normalized leaf title`);
    }
    if (!sameStringArrays(entry.path_codes, leaf.path_codes)) {
      issues.push(`coverage entry ${code} path_codes do not match normalized leaf path_codes`);
    }
    if (!sameStringArrays(entry.path_titles, leaf.path_titles)) {
      issues.push(`coverage entry ${code} path_titles do not match normalized leaf path_titles`);
    }
  }
  for (const code of entryCodes) {
    if (!leavesByCode.has(code)) {
      issues.push(`coverage entries contain code ${code} absent from normalized leaves`);
    }
  }

  const mappingsByCode = new Map<string, CoverageMapping>();
  for (const candidate of unknownArray(field(mapping, "mappings"))) {
    const code = sourceCode(candidate);
    if (code === null) {
      issues.push("source mapping contains an edge without a code");
      continue;
    }
    if (!leavesByCode.has(code)) {
      issues.push(`source mapping code ${code} is absent from normalized leaves`);
    }
    if (!isProjectedMapping(candidate)) {
      issues.push(`source mapping for ${code} cannot be projected deterministically`);
      continue;
    }
    if (mappingsByCode.has(code)) {
      issues.push(`source mapping contains duplicate code ${code}`);
      continue;
    }
    mappingsByCode.set(code, candidate);
  }

  for (const [code, entry] of entriesByCode) {
    const sourceMapping = mappingsByCode.get(code);
    if (!sourceMapping) {
      if (entry.mapping || entry.legacy_reference) {
        issues.push(`coverage entry ${code} projects an edge absent from canonical mapping`);
      }
      continue;
    }
    if (entry.mapping) {
      for (const field of ["pcr_id", "mapping_type", "confidence"] as const) {
        if (entry.mapping[field] !== sourceMapping[field]) {
          issues.push(`coverage entry ${code} mapping.${field} does not match canonical mapping`);
        }
      }
      for (const field of ["status", "decided_by", "decided_at_utc", "decision_ref"] as const) {
        if (entry.mapping.acceptance?.[field] !== sourceMapping.acceptance?.[field]) {
          issues.push(
            `coverage entry ${code} mapping.acceptance.${field} does not match canonical mapping`,
          );
        }
      }
      if (entry.coverage_status !== "mapped") {
        issues.push(
          `coverage entry ${code} coverage_status ${entry.coverage_status} does not match accepted canonical mapping projection mapped`,
        );
      }
      continue;
    }
    if (entry.legacy_reference) {
      if (entry.legacy_reference.pcr_id !== sourceMapping.pcr_id) {
        issues.push(`coverage entry ${code} legacy_reference.pcr_id does not match canonical mapping`);
      }
      continue;
    }
    issues.push(`coverage entry ${code} does not represent its canonical mapping edge`);
  }
  return issues;
}

function sourceCode(value: unknown): string | null {
  if (!record(value) || value.code === undefined || value.code === null) {
    return null;
  }
  const code = String(value.code);
  return code.length > 0 ? code : null;
}

function isProjectedLeaf(leaf: unknown): leaf is ProjectedLeaf {
  return (
    record(leaf)
    && typeof leaf.title === "string"
    && leaf.title.length > 0
    && isStringArray(leaf.path_codes)
    && leaf.path_codes.length > 0
    && isStringArray(leaf.path_titles)
    && leaf.path_titles.length > 0
  );
}

function isProjectedMapping(mapping: unknown): mapping is CoverageMapping {
  if (!record(mapping) || typeof mapping.pcr_id !== 'string' || !mapping.pcr_id.startsWith('pcr.')
    || typeof mapping.mapping_type !== 'string' || !CLASSIFICATION_MAPPING_RELATIONS.has(mapping.mapping_type) || mapping.mapping_type === 'manual_review'
    || typeof mapping.confidence !== 'string' || mapping.confidence.length === 0 || !record(mapping.acceptance)) return false;
  const acceptance = mapping.acceptance;
  return acceptance.status === 'accepted' && typeof acceptance.decided_by === 'string' && acceptance.decided_by.trim().length > 0
    && isCanonicalUtcTimestamp(acceptance.decided_at_utc) && typeof acceptance.decision_ref === 'string' && acceptance.decision_ref.trim().length > 0;
}

function isCanonicalUtcTimestamp(value: unknown): boolean {
  const match = typeof value === "string"
    ? /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(?:\.[0-9]+)?Z$/u.exec(value)
    : null;
  if (!match) {
    return false;
  }
  const year = Number(match[1]); const month = Number(match[2]); const day = Number(match[3]);
  const hour = Number(match[4]); const minute = Number(match[5]); const second = Number(match[6]);
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

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function sameStringArrays(left: unknown, right: unknown): boolean {
  return (
    isStringArray(left)
    && isStringArray(right)
    && left.length === right.length
    && left.every((value, index) => value === right[index])
  );
}

function compareText(left: unknown, right: unknown): number {
  const normalizedLeft = String(left);
  const normalizedRight = String(right);
  return normalizedLeft < normalizedRight ? -1 : normalizedLeft > normalizedRight ? 1 : 0;
}

function canonicalNormalizedLeavesPath({ system, version }: ClassificationCoordinate): string {
  return `classifications/systems/${system}/${version}/normalized/leaves.json`;
}

function canonicalMappingPath({ system, version }: ClassificationCoordinate): string {
  return `classifications/mappings/${system}-${version}-to-pcr.yaml`;
}

function readContainedUtf8RegularFile({ root, relativePath, label }: FileOptions): FileSource {
  if (typeof relativePath !== "string" || relativePath.length === 0) {
    throw new Error(`${label} path must be a non-empty repository-relative path`);
  }
  if (
    path.posix.isAbsolute(relativePath)
    || relativePath.includes("\\")
    || path.posix.normalize(relativePath) !== relativePath
  ) {
    throw new Error(`${label} path is not a canonical repository-relative path: ${relativePath}`);
  }

  const resolvedRoot = path.resolve(root);
  const resolvedPath = path.resolve(resolvedRoot, ...relativePath.split("/"));
  const containedRelativePath = path.relative(resolvedRoot, resolvedPath);
  if (
    containedRelativePath.length === 0
    || containedRelativePath === ".."
    || containedRelativePath.startsWith(`..${path.sep}`)
    || path.isAbsolute(containedRelativePath)
  ) {
    throw new Error(`${label} path escapes the repository root: ${relativePath}`);
  }

  assertRegularPathChain({
    resolvedRoot,
    containedRelativePath,
    relativePath,
    label,
  });
  assertRealPathContained({
    root: resolvedRoot,
    candidate: resolvedPath,
    label,
    relativePath,
  });

  let descriptor: number | undefined;
  let bytes: Buffer;
  try {
    descriptor = openSync(
      resolvedPath,
      fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW | fsConstants.O_NONBLOCK,
    );
    const openedStats = fstatSync(descriptor);
    if (!openedStats.isFile()) {
      throw new Error(`${label} is not a regular file: ${relativePath}`);
    }
    const currentStats = assertRegularPathChain({
      resolvedRoot,
      containedRelativePath,
      relativePath,
      label,
    });
    assertRealPathContained({
      root: resolvedRoot,
      candidate: resolvedPath,
      label,
      relativePath,
    });
    if (openedStats.dev !== currentStats.dev || openedStats.ino !== currentStats.ino) {
      throw new Error(`${label} path changed while it was being opened: ${relativePath}`);
    }
    bytes = readFileSync(descriptor);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith(`${label} `)) {
      throw error;
    }
    throw new Error(
      `${label} could not be opened without following symbolic links: ${relativePath} (${errorDetail(error)})`,
    );
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }

  return {
    bytes,
    text: decodeFatalUtf8(bytes, { label, relativePath }),
  };
}

function assertRegularPathChain({ resolvedRoot, containedRelativePath, relativePath, label }: { resolvedRoot: string; containedRelativePath: string; relativePath: string; label: string }): Stats {
  const segments = containedRelativePath.split(path.sep);
  let currentPath = resolvedRoot;
  let finalStats: Stats | undefined;
  for (const [index, segment] of segments.entries()) {
    currentPath = path.join(currentPath, segment);
    let stats;
    try {
      stats = lstatSync(currentPath);
    } catch (error) {
      throw new Error(
        `${label} does not exist at ${relativePath} (${errorDetail(error)})`,
      );
    }
    if (stats.isSymbolicLink()) {
      throw new Error(`${label} path contains a symbolic link: ${relativePath}`);
    }
    const isLastSegment = index === segments.length - 1;
    if (isLastSegment && !stats.isFile()) {
      throw new Error(`${label} is not a regular file: ${relativePath}`);
    }
    if (!isLastSegment && !stats.isDirectory()) {
      throw new Error(`${label} parent is not a directory: ${relativePath}`);
    }
    if (isLastSegment) {
      finalStats = stats;
    }
  }
  if (!finalStats) throw new Error(`${label} has an empty path: ${relativePath}`);
  return finalStats;
}

function decodeFatalUtf8(bytes: Buffer, { label, relativePath }: {label: string; relativePath: string}): string {
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch (error) {
    throw new Error(
      `${label} is not valid UTF-8: ${relativePath} (${error instanceof Error ? error.message : String(error)})`,
    );
  }
}

function assertRealPathContained({ root, candidate, label, relativePath }: FileOptions & {candidate: string}): void {
  const realRoot = realpathSync(root);
  const realCandidate = realpathSync(candidate);
  const realRelativePath = path.relative(realRoot, realCandidate);
  if (
    realRelativePath.length === 0
    || realRelativePath === ".."
    || realRelativePath.startsWith(`..${path.sep}`)
    || path.isAbsolute(realRelativePath)
  ) {
    throw new Error(`${label} real path escapes the repository root: ${relativePath}`);
  }
}

function exactByteSha256(bytes: Buffer): string {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function toPosix(value: string): string {
  return value.split(path.sep).join("/");
}

function unknownArray(value: unknown): unknown[] { return Array.isArray(value) ? value : []; }
