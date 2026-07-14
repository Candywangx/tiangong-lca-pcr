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

import { assertCoreContract } from "./contracts.mjs";
import {
  CLASSIFICATION_COVERAGE_STATUS_VALUES,
} from "./generated/controlled-vocabulary.mjs";

export const CLASSIFICATION_COVERAGE_STATUSES = CLASSIFICATION_COVERAGE_STATUS_VALUES;
export const CLASSIFICATION_COVERAGE_CONTRACT_VERSION = "1";
export const CLASSIFICATION_COVERAGE_GENERATOR = "builder/scripts/build-catalog.mjs";
export const CLASSIFICATION_COVERAGE_GENERATOR_VERSION = "1";

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

  let coverageBytes;
  try {
    coverageBytes = readContainedRegularFile({
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
    coverage = JSON.parse(coverageBytes.toString("utf8"));
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
  for (const [sourceName, descriptor] of [
    ["normalized_leaves", coverage.source.normalized_leaves],
    ["mapping", coverage.source.mapping],
  ]) {
    let bytes;
    try {
      bytes = readContainedRegularFile({
        root,
        relativePath: descriptor.path,
        label: `source ${sourceName}`,
      });
    } catch (error) {
      issues.push(error instanceof Error ? error.message : String(error));
      continue;
    }
    const actualSha256 = exactByteSha256(bytes);
    if (actualSha256 !== descriptor.sha256) {
      issues.push(
        `source ${sourceName} exact-byte SHA-256 mismatch: expected ${descriptor.sha256}, received ${actualSha256}`,
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

function readContainedRegularFile({ root, relativePath, label }) {
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

  const segments = containedRelativePath.split(path.sep);
  let currentPath = resolvedRoot;
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
  }
  assertRealPathContained({
    root: resolvedRoot,
    candidate: resolvedPath,
    label,
    relativePath,
  });

  let descriptor;
  try {
    descriptor = openSync(resolvedPath, fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW);
    if (!fstatSync(descriptor).isFile()) {
      throw new Error(`${label} is not a regular file: ${relativePath}`);
    }
    return readFileSync(descriptor);
  } catch (error) {
    if (error instanceof Error && error.message.startsWith(`${label} is not`)) {
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
