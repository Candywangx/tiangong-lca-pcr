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
} from "node:fs";
import path from "node:path";
import { TextDecoder } from "node:util";

import { assertCoreContract } from "./contracts.mjs";
import {
  CLASSIFICATION_COVERAGE_STATUS_VALUES,
  CLASSIFICATION_MAPPING_RELATION_VALUES,
} from "./generated/controlled-vocabulary.mjs";
import { parseYaml } from "./yaml-lite.mjs";

export const CLASSIFICATION_COVERAGE_STATUSES = CLASSIFICATION_COVERAGE_STATUS_VALUES;
export const CLASSIFICATION_COVERAGE_CONTRACT_VERSION = "1";
export const CLASSIFICATION_COVERAGE_GENERATOR = "builder/scripts/build-catalog.mjs";
export const CLASSIFICATION_COVERAGE_GENERATOR_VERSION = "1";

const CLASSIFICATION_MAPPING_RELATIONS = new Set(CLASSIFICATION_MAPPING_RELATION_VALUES);

export class PcrClassificationCoverageNotFoundError extends Error {
  constructor({ system, version, relativePath }) {
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
  constructor({ system, version, code }) {
    super(`Classification code is not present in the coverage index: ${system}:${version}:${code}`);
    this.name = "PcrClassificationCodeUnknownError";
    this.code = "PCR_CLASSIFICATION_CODE_UNKNOWN";
    this.details = { classification: `${system}:${version}:${code}` };
  }
}

export class PcrClassificationCoverageSemanticError extends Error {
  constructor({ system, version, source, issues }) {
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
  constructor(status) {
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

export function classificationCoveragePath({ root, system, version }) {
  const normalized = normalizeClassification({ system, version });
  return path.join(
    path.resolve(root),
    "classifications/indexes",
    `${normalized.system}-${normalized.version}-coverage.json`,
  );
}

export function hasClassificationCoverage({ root, system, version }) {
  return existsSync(classificationCoveragePath({ root, system, version }));
}

export function readClassificationCoverage({ root, system, version }) {
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

  let coverage;
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
  assertCoverageSemantics({ coverage, normalized, source: relativePath });
  assertCoverageSources({
    coverage,
    normalized,
    root: normalizedRoot,
    source: relativePath,
  });
  return structuredClone(coverage);
}

export function getClassificationCoverageSummary({ root, system, version }) {
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

export function listClassificationCoverage({ root, system, version, status = null }) {
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

export function findClassificationCoverageEntry({ root, system, version, code }) {
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

function normalizeClassification({ system, version }) {
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

function assertCoverageSemantics({ coverage, normalized, source }) {
  const issues = [];
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

  const seenCodes = new Set();
  const statusCounts = Object.fromEntries(
    CLASSIFICATION_COVERAGE_STATUSES.map((status) => [status, 0]),
  );
  for (const entry of coverage.entries) {
    if (seenCodes.has(entry.code)) {
      issues.push(`duplicate entry code ${entry.code}`);
    }
    seenCodes.add(entry.code);
    statusCounts[entry.coverage_status] += 1;
    if (entry.path_codes.length !== entry.path_titles.length) {
      issues.push(`entry ${entry.code} has mismatched path_codes and path_titles lengths`);
    }
    if (entry.coverage_status === "mapped" && !entry.mapping) {
      issues.push(`mapped entry ${entry.code} has no mapping`);
    }
    if (entry.coverage_status === "mapped" && entry.mapping?.mapping_type === "manual_review") {
      issues.push(`mapped entry ${entry.code} cannot use mapping_type manual_review`);
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
    if (coverage.summary[status] !== statusCounts[status]) {
      issues.push(
        `summary.${status} ${coverage.summary[status]} does not match entry count ${statusCounts[status]}`,
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

function assertCoverageSources({ coverage, normalized, root, source }) {
  const issues = [];
  const verifiedSources = {};
  for (const [sourceName, descriptor, canonicalPath] of [
    [
      "normalized_leaves",
      coverage.source.normalized_leaves,
      canonicalNormalizedLeavesPath(normalized),
    ],
    ["mapping", coverage.source.mapping, canonicalMappingPath(normalized)],
  ]) {
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
    let normalizedLeaves;
    let mapping;
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

function sourcePathBindingIssue({ sourceName, descriptor, canonicalPath, normalized }) {
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

function coverageProjectionIssues({ coverage, normalized, normalizedLeaves, mapping }) {
  const issues = [];
  if (
    String(normalizedLeaves.classification_system).toLowerCase() !== normalized.system
    || String(normalizedLeaves.classification_version) !== normalized.version
  ) {
    issues.push(
      `source normalized_leaves coordinate ${String(normalizedLeaves.classification_system)}:${String(normalizedLeaves.classification_version)} does not match ${normalized.system}:${normalized.version}`,
    );
  }
  if (
    String(mapping.classification_system).toLowerCase() !== normalized.system
    || String(mapping.classification_version) !== normalized.version
  ) {
    issues.push(
      `source mapping coordinate ${String(mapping.classification_system)}:${String(mapping.classification_version)} does not match ${normalized.system}:${normalized.version}`,
    );
  }

  if (!Array.isArray(normalizedLeaves.leaves)) {
    issues.push("source normalized_leaves.leaves must be an array");
    return issues;
  }
  if (!Array.isArray(mapping.mappings)) {
    issues.push("source mapping.mappings must be an array");
    return issues;
  }

  const leavesByCode = new Map();
  for (const leaf of normalizedLeaves.leaves) {
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

  const mappingsByCode = new Map();
  for (const candidate of mapping.mappings) {
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
      for (const field of ["pcr_id", "mapping_type", "confidence"]) {
        if (entry.mapping[field] !== sourceMapping[field]) {
          issues.push(`coverage entry ${code} mapping.${field} does not match canonical mapping`);
        }
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

function sourceCode(value) {
  if (!value || typeof value !== "object" || value.code === undefined || value.code === null) {
    return null;
  }
  const code = String(value.code);
  return code.length > 0 ? code : null;
}

function isProjectedLeaf(leaf) {
  return (
    leaf
    && typeof leaf === "object"
    && typeof leaf.title === "string"
    && leaf.title.length > 0
    && isStringArray(leaf.path_codes)
    && leaf.path_codes.length > 0
    && isStringArray(leaf.path_titles)
    && leaf.path_titles.length > 0
  );
}

function isProjectedMapping(mapping) {
  return (
    mapping
    && typeof mapping === "object"
    && typeof mapping.pcr_id === "string"
    && mapping.pcr_id.startsWith("pcr.")
    && CLASSIFICATION_MAPPING_RELATIONS.has(mapping.mapping_type)
    && typeof mapping.confidence === "string"
    && mapping.confidence.length > 0
  );
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function sameStringArrays(left, right) {
  return (
    isStringArray(left)
    && isStringArray(right)
    && left.length === right.length
    && left.every((value, index) => value === right[index])
  );
}

function compareText(left, right) {
  const normalizedLeft = String(left);
  const normalizedRight = String(right);
  return normalizedLeft < normalizedRight ? -1 : normalizedLeft > normalizedRight ? 1 : 0;
}

function canonicalNormalizedLeavesPath({ system, version }) {
  return `classifications/systems/${system}/${version}/normalized/leaves.json`;
}

function canonicalMappingPath({ system, version }) {
  return `classifications/mappings/${system}-${version}-to-pcr.yaml`;
}

function readContainedUtf8RegularFile({ root, relativePath, label }) {
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

  let descriptor;
  let bytes;
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
      `${label} could not be opened without following symbolic links: ${relativePath} (${error instanceof Error ? error.code ?? error.message : String(error)})`,
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

function assertRegularPathChain({ resolvedRoot, containedRelativePath, relativePath, label }) {
  const segments = containedRelativePath.split(path.sep);
  let currentPath = resolvedRoot;
  let finalStats;
  for (const [index, segment] of segments.entries()) {
    currentPath = path.join(currentPath, segment);
    let stats;
    try {
      stats = lstatSync(currentPath);
    } catch (error) {
      throw new Error(
        `${label} does not exist at ${relativePath} (${error instanceof Error ? error.code ?? error.message : String(error)})`,
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
  return finalStats;
}

function decodeFatalUtf8(bytes, { label, relativePath }) {
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch (error) {
    throw new Error(
      `${label} is not valid UTF-8: ${relativePath} (${error instanceof Error ? error.message : String(error)})`,
    );
  }
}

function assertRealPathContained({ root, candidate, label, relativePath }) {
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

function exactByteSha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}
