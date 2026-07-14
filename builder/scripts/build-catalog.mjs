import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  realpathSync,
  readdirSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { TextDecoder } from "node:util";

import {
  CLASSIFICATION_MAPPING_RELATION_VALUES,
  CONTENT_MATURITY_VALUES,
  PCR_STATUS_VALUES,
} from "../../packages/pcr-core/src/generated/controlled-vocabulary.mjs";
import {
  CLASSIFICATION_COVERAGE_CONTRACT_VERSION,
  CLASSIFICATION_COVERAGE_GENERATOR,
  CLASSIFICATION_COVERAGE_GENERATOR_VERSION,
  CLASSIFICATION_COVERAGE_STATUSES,
} from "../../packages/pcr-core/src/classification-coverage.mjs";
import { createSchemaRegistry } from "../../packages/pcr-core/src/schema-validation.mjs";
import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  CPC_3_COVERAGE_PATH,
  CPC_3_LEAVES_PATH,
  CPC_3_MAPPING_PATH,
  COVERAGE_SOURCE_DESCRIPTORS,
} from "../lib/classification-coverage-sources.mjs";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

export const CATALOG_PATH = "library/catalog.yaml";
export const MATERIAL_INDEX_PATH = "library/indexes/pcr-index.yaml";
export {
  CPC_3_COVERAGE_PATH,
  CPC_3_LEAVES_PATH,
  CPC_3_MAPPING_PATH,
  COVERAGE_SOURCE_DESCRIPTORS,
};

const COMPATIBILITY_MAPPING_PATHS = Object.freeze([
  "classifications/mappings/cpc-2.1-to-pcr.yaml",
]);

const MATERIAL_INDEX_SCHEMA_ID =
  "https://tiangong-lca.org/schemas/pcr/v1/pcr-material-index.schema.json";
const COVERAGE_SCHEMA_ID =
  "https://tiangong-lca.org/schemas/pcr/v1/classification-coverage.schema.json";
const CATALOG_SCHEMA_ID = "https://tiangong-lca.org/schemas/pcr/v1/catalog.schema.json";
const MAPPING_RELATIONS = new Set(CLASSIFICATION_MAPPING_RELATION_VALUES);
const PCR_STATUSES = new Set(PCR_STATUS_VALUES);
const CONTENT_MATURITIES = new Set(CONTENT_MATURITY_VALUES);
const MANAGED_READ_FLAGS =
  fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW | fsConstants.O_NONBLOCK;
const FATAL_UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });

const schemaRegistry = createSchemaRegistry([
  readJsonFromUrl(new URL("../schemas/catalog.schema.json", import.meta.url)),
  readJsonFromUrl(new URL("../schemas/pcr-material-index.schema.json", import.meta.url)),
  readJsonFromUrl(
    new URL("../../packages/pcr-core/schemas/controlled-vocabulary.schema.json", import.meta.url),
  ),
  readJsonFromUrl(
    new URL("../../packages/pcr-core/schemas/classification-coverage.schema.json", import.meta.url),
  ),
]);

export function createCatalogArtifacts(
  root = REPOSITORY_ROOT,
  { coverageSources = COVERAGE_SOURCE_DESCRIPTORS } = {},
) {
  const manifestResult = readManifestRecords(root);
  const materialIndex = buildMaterialIndex(manifestResult.records);
  const coverageBuilds = coverageSources.map((descriptor) => {
    const leavesSource = readJsonSource(root, descriptor.normalizedLeavesPath);
    const mappingSource = readYamlSource(root, descriptor.mappingPath);
    const result = buildCoverageIndex({
      leavesDocument: leavesSource.value,
      mappingDocument: mappingSource.value,
      manifests: manifestResult.records,
      sourceDescriptor: descriptor,
      sourceHashes: {
        normalizedLeaves: exactByteSha256(leavesSource.bytes),
        mapping: exactByteSha256(mappingSource.bytes),
      },
    });
    return {
      descriptor,
      leavesDocument: leavesSource.value,
      result,
    };
  });
  const catalog = buildCatalog(coverageSources);

  assertArtifactSchemas({
    catalog,
    materialIndex,
    coverages: coverageBuilds.map(({ descriptor, result }) => ({
      path: descriptor.coveragePath,
      value: result.index,
    })),
  });

  const issues = [
    ...manifestResult.issues,
    ...materialIndexSemanticIssues(materialIndex),
    ...coverageBuilds.flatMap(({ leavesDocument, result }) => [
      ...result.issues,
      ...coverageSemanticIssues({
        index: result.index,
        leavesDocument,
        manifests: manifestResult.records,
      }),
    ]),
  ];

  return {
    artifacts: [
      {
        path: CATALOG_PATH,
        value: catalog,
        content: renderYaml(catalog),
      },
      {
        path: MATERIAL_INDEX_PATH,
        value: materialIndex,
        content: renderYaml(materialIndex),
      },
      ...coverageBuilds.map(({ descriptor, result }) => ({
        path: descriptor.coveragePath,
        value: result.index,
        content: `${JSON.stringify(result.index, null, 2)}\n`,
      })),
    ],
    issues: uniqueSorted(issues),
  };
}

export function buildCatalog(coverageSources = COVERAGE_SOURCE_DESCRIPTORS) {
  return {
    schema_version: 1,
    catalog_status: "current",
    pcr_index: MATERIAL_INDEX_PATH,
    classification_mappings: uniqueInOrder([
      ...coverageSources.map((descriptor) => descriptor.mappingPath),
      ...COMPATIBILITY_MAPPING_PATHS,
    ]),
    classification_coverage_indexes: uniqueInOrder(
      coverageSources.map((descriptor) => descriptor.coveragePath),
    ),
    notes: [
      "Canonical PCR ids are independent from classification codes.",
      "Classification mappings may point many external codes to one PCR.",
      "Generated indexes contain current material PCRs and deterministic classification coverage.",
    ],
  };
}

export function buildMaterialIndex(manifests) {
  const pcrs = manifests
    .filter((record) => classifyPcrRecord(record) === "methodology")
    .map((record) => ({
      id: record.manifest.id,
      path: record.path,
      title: {
        "en-US": record.manifest.title?.["en-US"],
        "zh-CN": record.manifest.title?.["zh-CN"],
      },
      status: record.manifest.status,
      content_maturity: record.manifest.content_maturity,
    }))
    .sort((left, right) => compareText(left.id, right.id) || compareText(left.path, right.path));

  return {
    schema_version: 1,
    index_kind: "tiangong-pcr-material-catalog",
    status: "current",
    summary: { total: pcrs.length },
    pcrs,
  };
}

export function buildCoverageIndex({
  leavesDocument,
  mappingDocument,
  manifests,
  sourceDescriptor = COVERAGE_SOURCE_DESCRIPTORS[0],
  sourceHashes = defaultSourceHashes({ leavesDocument, mappingDocument }),
}) {
  const issues = [];
  if (leavesDocument.classification_system !== mappingDocument.classification_system) {
    issues.push("classification system differs between normalized leaves and mapping source");
  }
  if (String(leavesDocument.classification_version) !== String(mappingDocument.classification_version)) {
    issues.push("classification version differs between normalized leaves and mapping source");
  }
  if (
    String(leavesDocument.classification_system).toLowerCase()
    !== String(sourceDescriptor.classificationSystem).toLowerCase()
  ) {
    issues.push("normalized leaves classification system differs from coverage source descriptor");
  }
  if (
    String(leavesDocument.classification_version)
    !== String(sourceDescriptor.classificationVersion)
  ) {
    issues.push("normalized leaves classification version differs from coverage source descriptor");
  }

  const leaves = Array.isArray(leavesDocument.leaves) ? leavesDocument.leaves : [];
  const mappings = Array.isArray(mappingDocument.mappings) ? mappingDocument.mappings : [];
  const manifestsById = groupBy(manifests, (record) => record.manifest.id);
  const leavesByCode = groupBy(leaves, (leaf) => String(leaf.code));
  const mappingsByCode = groupBy(mappings, (mapping) => String(mapping.code));

  for (const [code, matchingLeaves] of leavesByCode) {
    if (matchingLeaves.length > 1) {
      issues.push(`normalized leaves contain duplicate code ${code}`);
    }
  }
  for (const [code, matchingMappings] of mappingsByCode) {
    if (!leavesByCode.has(code)) {
      issues.push(`mapping code ${code} does not exist in normalized leaves`);
    }
    if (matchingMappings.length > 1) {
      issues.push(`classification mapping contains conflicting code ${code}`);
    }
  }

  const entries = [...leaves]
    .sort((left, right) => compareText(String(left.code), String(right.code)))
    .map((leaf) => {
      const code = String(leaf.code);
      const matchingLeaves = leavesByCode.get(code) ?? [];
      const matchingMappings = mappingsByCode.get(code) ?? [];
      const base = {
        code,
        label: leaf.title,
        path_codes: leaf.path_codes,
        path_titles: leaf.path_titles,
      };

      if (matchingLeaves.length !== 1 || matchingMappings.length > 1) {
        return coverageEntry(base, "unknown");
      }
      if (matchingMappings.length === 0) {
        return coverageEntry(base, "unmapped");
      }

      const mapping = matchingMappings[0];
      if (!isValidMappingProjection(mapping)) {
        issues.push(`classification mapping for ${code} has an invalid mapping projection`);
        return coverageEntry(base, "unknown");
      }
      const targetRecords = manifestsById.get(mapping.pcr_id) ?? [];
      if (targetRecords.length !== 1) {
        issues.push(
          targetRecords.length === 0
            ? `classification mapping for ${code} points to missing PCR ${mapping.pcr_id}`
            : `classification mapping for ${code} points to duplicate PCR id ${mapping.pcr_id}`,
        );
        return coverageEntry(base, "unknown", { mapping: mappingProjection(mapping) });
      }

      const target = targetRecords[0];
      const targetKind = classifyPcrRecord(target);
      if (targetKind === "invalid") {
        issues.push(
          `classification mapping for ${code} points to invalid PCR lifecycle pair ${mapping.pcr_id}`,
        );
        return coverageEntry(base, "unknown", { mapping: mappingProjection(mapping) });
      }
      if (targetKind === "legacy") {
        return coverageEntry(base, "unmapped", {
          legacyReference: {
            kind: "legacy_scaffold_reference",
            pcr_id: mapping.pcr_id,
            path: target.path,
          },
        });
      }
      if (mapping.mapping_type === "manual_review") {
        return coverageEntry(base, "manual_review", { mapping: mappingProjection(mapping) });
      }
      return coverageEntry(base, "mapped", { mapping: mappingProjection(mapping) });
    });

  const summary = Object.fromEntries(
    CLASSIFICATION_COVERAGE_STATUSES.map((status) => [status, 0]),
  );
  for (const entry of entries) {
    summary[entry.coverage_status] += 1;
  }

  return {
    index: {
      schema_version: 1,
      index_kind: "classification-pcr-coverage",
      classification_system: leavesDocument.classification_system,
      classification_version: String(leavesDocument.classification_version),
      source: {
        contract_version: CLASSIFICATION_COVERAGE_CONTRACT_VERSION,
        generator: CLASSIFICATION_COVERAGE_GENERATOR,
        generator_version: CLASSIFICATION_COVERAGE_GENERATOR_VERSION,
        normalized_leaves: sourceArtifactDescriptor(
          sourceDescriptor.normalizedLeavesPath,
          sourceHashes.normalizedLeaves,
        ),
        mapping: sourceArtifactDescriptor(
          sourceDescriptor.mappingPath,
          sourceHashes.mapping,
        ),
      },
      summary: {
        total: entries.length,
        mapped: summary.mapped,
        unmapped: summary.unmapped,
        candidate_suggestion: summary.candidate_suggestion,
        manual_review: summary.manual_review,
        unknown: summary.unknown,
      },
      entries,
    },
    issues,
  };
}

export function writeCatalogArtifacts(root, artifacts) {
  const pending = [];
  try {
    for (const [index, artifact] of artifacts.entries()) {
      const outputPath = path.join(root, artifact.path);
      mkdirSync(path.dirname(outputPath), { recursive: true });
      const temporaryPath = path.join(
        path.dirname(outputPath),
        `.${path.basename(outputPath)}.catalog-${process.pid}-${index}.tmp`,
      );
      if (existsSync(temporaryPath)) {
        unlinkSync(temporaryPath);
      }
      writeFileSync(temporaryPath, artifact.content, "utf8");
      pending.push({ outputPath, temporaryPath });
    }
    for (const { outputPath, temporaryPath } of pending) {
      renameSync(temporaryPath, outputPath);
    }
  } finally {
    for (const { temporaryPath } of pending) {
      if (existsSync(temporaryPath)) {
        unlinkSync(temporaryPath);
      }
    }
  }
}

export function buildOrCheckCatalog(root = REPOSITORY_ROOT, { checkOnly = false } = {}) {
  const result = createCatalogArtifacts(root);
  const issues = [
    ...result.issues,
    ...(checkOnly ? staleArtifactIssues(root, result.artifacts) : []),
  ];
  if (issues.length > 0) {
    throw catalogFailure(checkOnly ? "check" : "build", issues);
  }
  if (!checkOnly) {
    writeCatalogArtifacts(root, result.artifacts);
  }
  return result;
}

export function staleArtifactIssues(root, artifacts) {
  const issues = [];
  for (const artifact of artifacts) {
    const outputPath = path.join(root, artifact.path);
    if (!existsSync(outputPath)) {
      issues.push(`${artifact.path} is missing; run npm run catalog:build`);
      continue;
    }
    let actualContent;
    try {
      actualContent = readManagedUtf8File({
        root,
        filePath: outputPath,
        label: artifact.path,
      }).text;
    } catch (error) {
      issues.push(
        `${artifact.path} could not be safely read: ${error.message}; run npm run catalog:build`,
      );
      continue;
    }
    if (actualContent !== artifact.content) {
      issues.push(`${artifact.path} is stale; run npm run catalog:build`);
    }
  }
  return issues;
}

function readManifestRecords(root) {
  const pcrRoot = path.join(root, "library/pcrs");
  const records = [];
  const issues = [];
  if (!existsSync(pcrRoot)) {
    return { records, issues: ["library/pcrs is missing"] };
  }

  const discovery = discoverCanonicalManifests(pcrRoot, root);
  issues.push(...discovery.issues);
  for (const manifestPath of discovery.files) {
    const directory = path.dirname(manifestPath);
    const relativePath = portablePath(path.relative(root, directory));
    try {
      const source = readManagedUtf8File({
        root,
        filePath: manifestPath,
        label: `${relativePath}/manifest.yaml`,
      });
      records.push({
        path: relativePath,
        manifest: parseYaml(source.text),
      });
    } catch (error) {
      issues.push(`${relativePath}/manifest.yaml could not be read or parsed: ${error.message}`);
    }
  }

  const recordsById = groupBy(records, (record) => record.manifest.id);
  for (const [id, matchingRecords] of recordsById) {
    if (!id) {
      issues.push("a PCR manifest is missing its id");
    } else if (matchingRecords.length > 1) {
      issues.push(`PCR manifest id ${id} occurs ${matchingRecords.length} times`);
    }
  }
  for (const record of records) {
    if (classifyPcrRecord(record) === "invalid") {
      issues.push(
        `${record.path}/manifest.yaml has an invalid lifecycle pair: status=${String(record.manifest.status)}, content_maturity=${String(record.manifest.content_maturity)}`,
      );
    }
  }
  return { records, issues };
}

export function classifyPcrRecord(record) {
  const status = record?.manifest?.status;
  const maturity = record?.manifest?.content_maturity;
  if (!PCR_STATUSES.has(status) || !CONTENT_MATURITIES.has(maturity)) {
    return "invalid";
  }
  const scaffoldStatus = status === "scaffold";
  const emptyMaturity = maturity === "empty_scaffold";
  if (scaffoldStatus && emptyMaturity) {
    return "legacy";
  }
  if (!scaffoldStatus && !emptyMaturity) {
    return "methodology";
  }
  return "invalid";
}

function coverageEntry(base, coverageStatus, options = {}) {
  return {
    ...base,
    coverage_status: coverageStatus,
    mapping: options.mapping ?? null,
    legacy_reference: options.legacyReference ?? null,
  };
}

function mappingProjection(mapping) {
  return {
    pcr_id: mapping.pcr_id,
    mapping_type: mapping.mapping_type,
    confidence: mapping.confidence,
  };
}

function isValidMappingProjection(mapping) {
  return (
    typeof mapping?.pcr_id === "string" &&
    mapping.pcr_id.startsWith("pcr.") &&
    MAPPING_RELATIONS.has(mapping.mapping_type) &&
    typeof mapping.confidence === "string" &&
    mapping.confidence.length > 0
  );
}

function defaultSourceHashes({ leavesDocument, mappingDocument }) {
  return {
    normalizedLeaves: exactByteSha256(
      Buffer.from(`${JSON.stringify(leavesDocument, null, 2)}\n`, "utf8"),
    ),
    mapping: exactByteSha256(Buffer.from(renderYaml(mappingDocument), "utf8")),
  };
}

function sourceArtifactDescriptor(sourcePath, sha256) {
  return {
    path: sourcePath,
    hash_mode: "exact_bytes",
    sha256,
  };
}

function exactByteSha256(bytes) {
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

function materialIndexSemanticIssues(index) {
  const issues = [];
  if (index.summary.total !== index.pcrs.length) {
    issues.push("material PCR index summary.total does not match pcrs length");
  }
  const ids = new Set();
  for (const entry of index.pcrs) {
    if (ids.has(entry.id)) {
      issues.push(`material PCR index contains duplicate id ${entry.id}`);
    }
    ids.add(entry.id);
  }
  return issues;
}

function coverageSemanticIssues({ index, leavesDocument, manifests }) {
  const issues = [];
  const expectedCodes = (leavesDocument.leaves ?? []).map((leaf) => String(leaf.code));
  const actualCodes = index.entries.map((entry) => entry.code);
  if (actualCodes.length !== expectedCodes.length) {
    issues.push("coverage entries do not cover every normalized leaf");
  }
  const codeCounts = groupBy(index.entries, (entry) => entry.code);
  for (const [code, entries] of codeCounts) {
    if (entries.length !== 1) {
      issues.push(`coverage entries contain duplicate code ${code}`);
    }
  }
  for (const code of new Set(expectedCodes)) {
    if (!codeCounts.has(code)) {
      issues.push(`coverage entries are missing normalized leaf ${code}`);
    }
  }

  const statusCounts = Object.fromEntries(
    CLASSIFICATION_COVERAGE_STATUSES.map((status) => [status, 0]),
  );
  for (const entry of index.entries) {
    statusCounts[entry.coverage_status] += 1;
  }
  const countTotal = CLASSIFICATION_COVERAGE_STATUSES.reduce(
    (total, status) => total + statusCounts[status],
    0,
  );
  if (index.summary.total !== countTotal) {
    issues.push("coverage summary.total does not match entries length");
  }
  for (const status of CLASSIFICATION_COVERAGE_STATUSES) {
    if (index.summary[status] !== statusCounts[status]) {
      issues.push(`coverage summary.${status} does not match entry statuses`);
    }
  }

  const manifestsById = groupBy(manifests, (record) => record.manifest.id);
  for (const entry of index.entries) {
    if (entry.coverage_status !== "mapped") {
      continue;
    }
    const targets = manifestsById.get(entry.mapping?.pcr_id) ?? [];
    if (targets.length !== 1 || classifyPcrRecord(targets[0]) !== "methodology") {
      issues.push(`mapped coverage entry ${entry.code} does not target one material PCR`);
    }
  }
  return issues;
}

function assertArtifactSchemas({ catalog, materialIndex, coverages }) {
  schemaRegistry.assert(CATALOG_SCHEMA_ID, catalog, {
    entityKind: "PCR catalog",
    source: CATALOG_PATH,
  });
  schemaRegistry.assert(MATERIAL_INDEX_SCHEMA_ID, materialIndex, {
    entityKind: "material PCR index",
    source: MATERIAL_INDEX_PATH,
  });
  for (const coverage of coverages) {
    schemaRegistry.assert(COVERAGE_SCHEMA_ID, coverage.value, {
      entityKind: "classification coverage index",
      source: coverage.path,
    });
  }
}

function readYamlSource(root, relativePath) {
  const source = readManagedUtf8File({
    root,
    filePath: path.join(root, relativePath),
    label: relativePath,
  });
  return { bytes: source.bytes, value: parseYaml(source.text) };
}

function readJsonSource(root, relativePath) {
  const source = readManagedUtf8File({
    root,
    filePath: path.join(root, relativePath),
    label: relativePath,
  });
  return { bytes: source.bytes, value: JSON.parse(source.text) };
}

function readJsonFromUrl(url) {
  const filePath = fileURLToPath(url);
  return JSON.parse(
    readManagedUtf8File({
      root: REPOSITORY_ROOT,
      filePath,
      label: portablePath(path.relative(REPOSITORY_ROOT, filePath)),
    }).text,
  );
}

function readManagedUtf8File({ root, filePath, label }) {
  const resolvedRoot = path.resolve(root);
  const resolvedFilePath = path.resolve(filePath);
  const relativePath = path.relative(resolvedRoot, resolvedFilePath);
  if (
    !relativePath ||
    path.isAbsolute(relativePath) ||
    relativePath === ".." ||
    relativePath.startsWith(`..${path.sep}`)
  ) {
    throw new Error(`${label} escapes the repository root: ${resolvedFilePath}`);
  }

  const displayPath = portablePath(relativePath);
  assertManagedPathChain({
    resolvedRoot,
    relativePath,
    displayPath,
    label,
  });
  assertManagedRealPathContained({
    resolvedRoot,
    resolvedFilePath,
    displayPath,
    label,
  });

  let fileDescriptor;
  try {
    fileDescriptor = openSync(resolvedFilePath, MANAGED_READ_FLAGS);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new Error(`Missing ${label}: ${displayPath}`, { cause: error });
    }
    if (error?.code === "ELOOP") {
      throw new Error(`${label} must not be a symbolic link: ${displayPath}`, { cause: error });
    }
    throw error;
  }

  try {
    const stat = fstatSync(fileDescriptor);
    if (!stat.isFile()) {
      throw new Error(`${label} must be a regular file: ${displayPath}`);
    }
    const currentStat = assertManagedPathChain({
      resolvedRoot,
      relativePath,
      displayPath,
      label,
    });
    assertManagedRealPathContained({
      resolvedRoot,
      resolvedFilePath,
      displayPath,
      label,
    });
    if (stat.dev !== currentStat.dev || stat.ino !== currentStat.ino) {
      throw new Error(`${label} changed while it was being opened: ${displayPath}`);
    }
    const bytes = readFileSync(fileDescriptor);
    try {
      return { bytes, text: FATAL_UTF8_DECODER.decode(bytes) };
    } catch (error) {
      throw new Error(`${label} must contain valid UTF-8: ${displayPath}`, { cause: error });
    }
  } finally {
    closeSync(fileDescriptor);
  }
}

function assertManagedPathChain({ resolvedRoot, relativePath, displayPath, label }) {
  const segments = relativePath.split(path.sep);
  let currentPath = resolvedRoot;
  let finalStat;
  for (const [index, segment] of segments.entries()) {
    currentPath = path.join(currentPath, segment);
    let stat;
    try {
      stat = lstatSync(currentPath);
    } catch (error) {
      throw new Error(`Missing ${label}: ${displayPath}`, { cause: error });
    }
    if (stat.isSymbolicLink()) {
      throw new Error(`${label} path contains a symbolic link: ${displayPath}`);
    }
    const finalSegment = index === segments.length - 1;
    if (finalSegment && !stat.isFile()) {
      throw new Error(`${label} must be a regular file: ${displayPath}`);
    }
    if (!finalSegment && !stat.isDirectory()) {
      throw new Error(`${label} parent must be a directory: ${displayPath}`);
    }
    if (finalSegment) {
      finalStat = stat;
    }
  }
  return finalStat;
}

function assertManagedRealPathContained({
  resolvedRoot,
  resolvedFilePath,
  displayPath,
  label,
}) {
  const realRoot = realpathSync(resolvedRoot);
  const realFilePath = realpathSync(resolvedFilePath);
  const relativePath = path.relative(realRoot, realFilePath);
  if (
    !relativePath ||
    path.isAbsolute(relativePath) ||
    relativePath === ".." ||
    relativePath.startsWith(`..${path.sep}`)
  ) {
    throw new Error(`${label} real path escapes the repository root: ${displayPath}`);
  }
}

function discoverCanonicalManifests(directory, root) {
  const files = [];
  const issues = [];
  for (const entry of readdirSync(directory, { withFileTypes: true }).sort((left, right) =>
    compareText(left.name, right.name),
  )) {
    const candidate = path.join(directory, entry.name);
    const relativePath = portablePath(path.relative(root, candidate));
    if (entry.name === "manifest.yaml") {
      const segments = portablePath(path.relative(path.join(root, "library/pcrs"), candidate)).split(
        "/",
      );
      if (segments.length !== 4) {
        issues.push(
          `PCR manifest must use library/pcrs/<domain>/<subdomain>/<slug>/manifest.yaml: ${relativePath}`,
        );
      } else {
        files.push(candidate);
      }
      continue;
    }
    if (entry.isSymbolicLink()) {
      issues.push(`PCR discovery rejects symbolic link ${relativePath}`);
      continue;
    }
    if (entry.isDirectory()) {
      const nested = discoverCanonicalManifests(candidate, root);
      files.push(...nested.files);
      issues.push(...nested.issues);
    }
  }
  return { files, issues };
}

function groupBy(values, keyForValue) {
  const groups = new Map();
  for (const value of values) {
    const key = keyForValue(value);
    const group = groups.get(key) ?? [];
    group.push(value);
    groups.set(key, group);
  }
  return groups;
}

function portablePath(filePath) {
  return filePath.split(path.sep).join("/");
}

function compareText(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function uniqueSorted(values) {
  return [...new Set(values)].sort(compareText);
}

function uniqueInOrder(values) {
  return [...new Set(values)];
}

function catalogFailure(action, issues) {
  return new Error(
    `PCR catalog ${action} failed:\n${uniqueSorted(issues)
      .map((issue) => `- ${issue}`)
      .join("\n")}`,
  );
}

function run() {
  const args = process.argv.slice(2);
  if (args.some((arg) => arg !== "--check")) {
    throw new Error(`Unknown catalog option: ${args.find((arg) => arg !== "--check")}`);
  }
  const checkOnly = args.includes("--check");
  const result = buildOrCheckCatalog(REPOSITORY_ROOT, { checkOnly });

  const action = checkOnly ? "is current" : "was rebuilt";
  console.log(
    `PCR catalog ${action}: ${result.artifacts.map((artifact) => artifact.path).join(", ")}`,
  );
}

const isDirectExecution =
  process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isDirectExecution) {
  try {
    run();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
