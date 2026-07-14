import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  fsyncSync,
  linkSync,
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
import { createHash, randomUUID } from "node:crypto";
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
import { readPcrIdAliases } from "../../packages/pcr-core/src/pcr-id-aliases.mjs";
import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  CPC_3_COVERAGE_PATH,
  CPC_3_LEAVES_PATH,
  CPC_3_MAPPING_PATH,
  COVERAGE_SOURCE_DESCRIPTORS,
} from "../lib/classification-coverage-sources.mjs";
import { assertClassificationMapping } from "../lib/schema-contracts.mjs";
import {
  buildOrCheckPcrIdAliases,
  CPC_3_LEAF_SLUGS_PATH,
} from "./build-pcr-id-aliases.mjs";
import {
  inspectCatalogArtifactTransaction,
  recoverCatalogArtifactTransaction,
  runCatalogArtifactTransaction,
} from "../lib/catalog-artifact-transaction.mjs";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

export const CATALOG_PATH = "library/catalog.yaml";
export const MATERIAL_INDEX_PATH = "library/indexes/pcr-index.yaml";
export const PCR_ID_ALIASES_PATH = "classifications/aliases/pcr-id-aliases.yaml";
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
  const aliasProjection = readCatalogAliasProjection(root);
  const pcrIdAliases = {
    path: PCR_ID_ALIASES_PATH,
    hash_mode: "exact_bytes",
    sha256: exactByteSha256(aliasProjection.bytes),
    entry_count: aliasProjection.aliases.length,
  };
  const compatibilityMappings = COMPATIBILITY_MAPPING_PATHS
    .filter((mappingPath) => existsSync(path.join(root, ...mappingPath.split("/"))))
    .map((mappingPath) => {
      const source = readYamlSource(root, mappingPath);
      assertAcceptedMappingDocument(source.value, mappingPath);
      return { mappingPath, mappingDocument: source.value };
    });
  const manifestResult = readManifestRecords(root);
  const materialIndex = buildMaterialIndex(manifestResult.records);
  const coverageBuilds = coverageSources.map((descriptor) => {
    const leavesSource = readJsonSource(root, descriptor.normalizedLeavesPath);
    const mappingSource = readYamlSource(root, descriptor.mappingPath);
    assertAcceptedMappingDocument(mappingSource.value, descriptor.mappingPath);
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
      mappingDocument: mappingSource.value,
      result,
    };
  });
  const catalog = buildCatalog(coverageSources, { pcrIdAliases });

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
    ...compatibilityMappings.flatMap(({ mappingPath, mappingDocument }) =>
      mappingDecisionReferenceIssues(root, mappingDocument, mappingPath)),
    ...coverageBuilds.flatMap(({ descriptor, leavesDocument, mappingDocument, result }) => [
      ...mappingDecisionReferenceIssues(root, mappingDocument, descriptor.mappingPath),
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
    aliases: aliasProjection.aliases,
  };
}

export function buildCatalog(
  coverageSources = COVERAGE_SOURCE_DESCRIPTORS,
  { pcrIdAliases = null } = {},
) {
  if (!pcrIdAliases) {
    throw new Error("buildCatalog requires a pinned pcrIdAliases descriptor");
  }
  return {
    schema_version: 1,
    catalog_status: "current",
    pcr_index: MATERIAL_INDEX_PATH,
    pcr_id_aliases: structuredClone(pcrIdAliases),
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

function readCatalogAliasProjection(root) {
  if (pcrIdAliasesRequireGeneratedProjection(root)) {
    const generated = buildOrCheckPcrIdAliases(root, { checkOnly: true });
    return {
      aliases: generated.registry.aliases,
      bytes: Buffer.from(generated.content, "utf8"),
    };
  }

  const source = readYamlSource(root, PCR_ID_ALIASES_PATH);
  const aliases = readPcrIdAliases({ root, verifyCatalogBinding: false });
  if (aliases.length !== 0 || source.value?.aliases?.length !== 0) {
    throw new Error(
      `${PCR_ID_ALIASES_PATH} contains aliases but ${CPC_3_LEAF_SLUGS_PATH} is absent`,
    );
  }
  return { aliases, bytes: source.bytes };
}

function pcrIdAliasesRequireGeneratedProjection(root) {
  if (managedEntryExists(root, CPC_3_LEAF_SLUGS_PATH)) {
    return true;
  }
  if (!managedEntryExists(root, CATALOG_PATH)) {
    return false;
  }
  const catalog = readYamlSource(root, CATALOG_PATH).value;
  if (
    !catalog
    || typeof catalog !== "object"
    || Array.isArray(catalog)
    || !Object.hasOwn(catalog, "pcr_id_aliases")
  ) {
    throw new Error(
      `${CATALOG_PATH} must declare an exact-byte pcr_id_aliases binding`,
    );
  }
  const descriptor = catalog.pcr_id_aliases;
  if (!descriptor || typeof descriptor !== "object" || Array.isArray(descriptor)) {
    // A legacy scalar catalog can be upgraded in a repository that has only
    // the canonical empty registry and no leaf-slug migration source. Any
    // non-empty registry still fails in readCatalogAliasProjection.
    return typeof descriptor !== "string";
  }
  return Number(descriptor.entry_count) > 0;
}

function managedEntryExists(root, relativePath) {
  try {
    lstatSync(path.join(root, ...relativePath.split("/")));
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") {
      return false;
    }
    throw error;
  }
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
  assertAcceptedMappingDocument(mappingDocument, sourceDescriptor.mappingPath);
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
        issues.push(
          `accepted classification mapping for ${code} points to legacy empty scaffold ${mapping.pcr_id}`,
        );
        return coverageEntry(base, "unknown", { mapping: mappingProjection(mapping) });
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

export function writeCatalogArtifacts(
  root,
  artifacts,
  { tokenFactory = randomUUID, hooks = {} } = {},
) {
  const prepared = prepareCatalogArtifactWrites(root, artifacts);
  const pending = [];
  try {
    for (const [index, artifact] of prepared.entries()) {
      const token = tokenFactory({ artifactPath: artifact.relativePath, index });
      assertCatalogTemporaryToken(token, artifact.relativePath);
      const temporaryPath = path.join(
        artifact.parentPath,
        `.${path.basename(artifact.outputPath)}.catalog-${token}.tmp`,
      );

      assertCatalogParentUnchanged(artifact);
      let fileDescriptor;
      try {
        fileDescriptor = openSync(
          temporaryPath,
          fsConstants.O_WRONLY
            | fsConstants.O_CREAT
            | fsConstants.O_EXCL
            | fsConstants.O_NOFOLLOW,
          0o644,
        );
      } catch (error) {
        throw new Error(
          `could not create an exclusive temporary for ${artifact.relativePath}: ${error.message}`,
          { cause: error },
        );
      }

      const temporaryStat = fstatSync(fileDescriptor);
      const staged = {
        ...artifact,
        temporaryPath,
        temporaryIdentity: fileIdentity(temporaryStat),
        temporarySha256: exactByteSha256(Buffer.from(artifact.content, "utf8")),
      };
      pending.push(staged);
      try {
        if (!temporaryStat.isFile()) {
          throw new Error(`temporary for ${artifact.relativePath} is not a regular file`);
        }
        writeFileSync(fileDescriptor, artifact.content, "utf8");
        fsyncSync(fileDescriptor);
      } finally {
        closeSync(fileDescriptor);
      }
    }

    hooks.afterStage?.({
      artifacts: pending.map(({ relativePath, outputPath, temporaryPath }) => ({
        path: relativePath,
        outputPath,
        temporaryPath,
      })),
    });

    // Artifacts span directories, so this is an ordered publish rather than a group-atomic
    // transaction. Keep the catalog last so it never advertises an index before installation.
    const installOrder = [
      ...pending.filter((artifact) => artifact.relativePath !== CATALOG_PATH),
      ...pending.filter((artifact) => artifact.relativePath === CATALOG_PATH),
    ];
    for (const artifact of installOrder) {
      hooks.beforeInstall?.({
        path: artifact.relativePath,
        outputPath: artifact.outputPath,
        temporaryPath: artifact.temporaryPath,
      });
      assertCatalogParentUnchanged(artifact);
      assertCatalogTargetUnchanged(artifact);
      assertCatalogTemporaryUnchanged(artifact);
      if (artifact.targetSnapshot === null) {
        linkSync(artifact.temporaryPath, artifact.outputPath);
        unlinkSync(artifact.temporaryPath);
      } else {
        renameSync(artifact.temporaryPath, artifact.outputPath);
      }
    }
  } finally {
    for (const artifact of pending) {
      cleanupOwnedCatalogTemporary(artifact);
    }
  }
}

function prepareCatalogArtifactWrites(root, artifacts) {
  if (!Array.isArray(artifacts)) {
    throw new Error("catalog artifacts must be an array");
  }

  const resolvedRoot = realpathSync(path.resolve(root));
  const rootStat = lstatSync(resolvedRoot);
  if (rootStat.isSymbolicLink() || !rootStat.isDirectory()) {
    throw new Error(`catalog repository root must be a directory: ${resolvedRoot}`);
  }
  const rootIdentity = fileIdentity(rootStat);

  const seenPaths = new Set();
  const validated = artifacts.map((artifact) => {
    const relativePath = validateCatalogArtifact(artifact);
    if (seenPaths.has(relativePath)) {
      throw new Error(`catalog artifact path is duplicated: ${relativePath}`);
    }
    seenPaths.add(relativePath);
    const outputPath = path.join(resolvedRoot, ...relativePath.split("/"));
    return {
      content: artifact.content,
      relativePath,
      rootPath: resolvedRoot,
      rootIdentity,
      outputPath,
      parentPath: path.dirname(outputPath),
    };
  });

  for (const artifact of validated) {
    assertCatalogParentChain(resolvedRoot, artifact.parentPath, artifact.relativePath, {
      allowMissing: true,
      rootIdentity,
    });
  }
  for (const artifact of validated) {
    createCatalogParentChain(
      resolvedRoot,
      artifact.parentPath,
      artifact.relativePath,
      rootIdentity,
    );
  }

  return validated.map((artifact) => ({
    ...artifact,
    parentIdentity: fileIdentity(
      assertCatalogParentChain(resolvedRoot, artifact.parentPath, artifact.relativePath, {
        rootIdentity,
      }),
    ),
    targetSnapshot: catalogFileSnapshot(artifact.outputPath, artifact.relativePath),
  }));
}

function validateCatalogArtifact(artifact) {
  const relativePath = artifact?.path;
  if (
    typeof relativePath !== "string"
    || relativePath.length === 0
    || relativePath.includes("\\")
    || relativePath.includes("\0")
    || relativePath.endsWith("/")
    || path.posix.isAbsolute(relativePath)
    || path.posix.normalize(relativePath) !== relativePath
    || relativePath === "."
    || relativePath === ".."
    || relativePath.startsWith("../")
  ) {
    throw new Error(
      `catalog artifact path must be a normalized repository-relative path: ${String(relativePath)}`,
    );
  }
  if (typeof artifact.content !== "string") {
    throw new Error(`catalog artifact ${relativePath} content must be a string`);
  }
  return relativePath;
}

function assertCatalogParentChain(
  resolvedRoot,
  parentPath,
  relativePath,
  { allowMissing = false, rootIdentity = null } = {},
) {
  const parentRelativePath = path.relative(resolvedRoot, parentPath);
  if (
    path.isAbsolute(parentRelativePath)
    || parentRelativePath === ".."
    || parentRelativePath.startsWith(`..${path.sep}`)
  ) {
    throw new Error(`catalog artifact ${relativePath} parent escapes the repository root`);
  }

  let currentPath = resolvedRoot;
  let currentStat = lstatSync(currentPath);
  if (currentStat.isSymbolicLink() || !currentStat.isDirectory()) {
    throw new Error(`catalog repository root changed while preparing ${relativePath}`);
  }
  if (rootIdentity && !sameFileIdentity(currentStat, rootIdentity)) {
    throw new Error(`catalog repository root changed while preparing ${relativePath}`);
  }
  for (const segment of parentRelativePath.split(path.sep).filter(Boolean)) {
    currentPath = path.join(currentPath, segment);
    try {
      currentStat = lstatSync(currentPath);
    } catch (error) {
      if (allowMissing && error?.code === "ENOENT") {
        return null;
      }
      throw new Error(`catalog artifact ${relativePath} parent is missing: ${currentPath}`, {
        cause: error,
      });
    }
    if (currentStat.isSymbolicLink()) {
      throw new Error(
        `catalog artifact ${relativePath} parent contains a symbolic link: ${currentPath}`,
      );
    }
    if (!currentStat.isDirectory()) {
      throw new Error(`catalog artifact ${relativePath} parent must be a directory: ${currentPath}`);
    }
  }
  return currentStat;
}

function createCatalogParentChain(resolvedRoot, parentPath, relativePath, rootIdentity) {
  assertCatalogParentChain(resolvedRoot, resolvedRoot, relativePath, { rootIdentity });
  const parentRelativePath = path.relative(resolvedRoot, parentPath);
  let currentPath = resolvedRoot;
  for (const segment of parentRelativePath.split(path.sep).filter(Boolean)) {
    currentPath = path.join(currentPath, segment);
    try {
      mkdirSync(currentPath, { mode: 0o755 });
    } catch (error) {
      if (error?.code !== "EEXIST") {
        throw error;
      }
    }
    const stat = lstatSync(currentPath);
    if (stat.isSymbolicLink()) {
      throw new Error(
        `catalog artifact ${relativePath} parent contains a symbolic link: ${currentPath}`,
      );
    }
    if (!stat.isDirectory()) {
      throw new Error(`catalog artifact ${relativePath} parent must be a directory: ${currentPath}`);
    }
  }
  assertCatalogParentChain(resolvedRoot, parentPath, relativePath, { rootIdentity });
}

function assertCatalogTemporaryToken(token, relativePath) {
  if (typeof token !== "string" || !/^[A-Za-z0-9_-]{1,128}$/u.test(token)) {
    throw new Error(`temporary token for ${relativePath} is invalid`);
  }
}

function catalogFileSnapshot(filePath, label, { allowMissing = true } = {}) {
  let pathStat;
  try {
    pathStat = lstatSync(filePath);
  } catch (error) {
    if (allowMissing && error?.code === "ENOENT") {
      return null;
    }
    throw error;
  }
  if (pathStat.isSymbolicLink()) {
    throw new Error(`catalog artifact ${label} must not be a symbolic link`);
  }
  if (!pathStat.isFile()) {
    throw new Error(`catalog artifact ${label} must be a regular file`);
  }

  const fileDescriptor = openSync(filePath, MANAGED_READ_FLAGS);
  try {
    const descriptorStat = fstatSync(fileDescriptor);
    const currentStat = lstatSync(filePath);
    if (
      !descriptorStat.isFile()
      || descriptorStat.dev !== currentStat.dev
      || descriptorStat.ino !== currentStat.ino
    ) {
      throw new Error(`catalog artifact ${label} changed while it was being opened`);
    }
    return {
      ...fileIdentity(descriptorStat),
      sha256: exactByteSha256(readFileSync(fileDescriptor)),
    };
  } finally {
    closeSync(fileDescriptor);
  }
}

function assertCatalogParentUnchanged(artifact) {
  const currentIdentity = fileIdentity(
    assertCatalogParentChain(
      artifact.rootPath,
      artifact.parentPath,
      artifact.relativePath,
      { rootIdentity: artifact.rootIdentity },
    ),
  );
  if (!sameFileIdentity(currentIdentity, artifact.parentIdentity)) {
    throw new Error(`catalog artifact ${artifact.relativePath} parent changed after staging`);
  }
}

function assertCatalogTargetUnchanged(artifact) {
  const current = catalogFileSnapshot(artifact.outputPath, artifact.relativePath);
  const baseline = artifact.targetSnapshot;
  if (
    (baseline === null) !== (current === null)
    || (baseline !== null && (
      !sameFileIdentity(baseline, current)
      || baseline.sha256 !== current.sha256
    ))
  ) {
    throw new Error(`catalog artifact ${artifact.relativePath} changed after staging`);
  }
}

function assertCatalogTemporaryUnchanged(artifact) {
  const current = catalogFileSnapshot(
    artifact.temporaryPath,
    `temporary for ${artifact.relativePath}`,
    { allowMissing: false },
  );
  if (
    !sameFileIdentity(current, artifact.temporaryIdentity)
    || current.sha256 !== artifact.temporarySha256
  ) {
    throw new Error(`temporary for ${artifact.relativePath} changed after staging`);
  }
}

function cleanupOwnedCatalogTemporary(artifact) {
  let parentStat;
  try {
    parentStat = assertCatalogParentChain(
      artifact.rootPath,
      artifact.parentPath,
      artifact.relativePath,
      { rootIdentity: artifact.rootIdentity },
    );
  } catch {
    return;
  }
  if (!parentStat.isDirectory() || !sameFileIdentity(parentStat, artifact.parentIdentity)) {
    return;
  }
  let temporaryStat;
  try {
    temporaryStat = lstatSync(artifact.temporaryPath);
  } catch {
    return;
  }
  if (temporaryStat.isFile() && sameFileIdentity(temporaryStat, artifact.temporaryIdentity)) {
    unlinkSync(artifact.temporaryPath);
  }
}

function fileIdentity(stat) {
  return { dev: stat.dev, ino: stat.ino };
}

function sameFileIdentity(left, right) {
  return left?.dev === right?.dev && left?.ino === right?.ino;
}

export function buildOrCheckCatalog(root = REPOSITORY_ROOT, { checkOnly = false } = {}) {
  if (checkOnly) {
    const state = inspectCatalogArtifactTransaction({ root });
    if (state.status !== "clean") {
      throw new Error(
        `PCR catalog check found transaction state ${state.status}` +
          `${state.phase ? ` at phase ${state.phase}` : ""}; run npm run catalog:recover before checking.`,
      );
    }
    const result = createCatalogArtifacts(root);
    const issues = [...result.issues, ...staleArtifactIssues(root, result.artifacts)];
    if (issues.length > 0) {
      throw catalogFailure("check", issues);
    }
    return result;
  }

  let result;
  const transaction = runCatalogArtifactTransaction({
    root,
    command: "catalog:build",
    prepareArtifacts() {
      result = createCatalogArtifacts(root);
      if (result.issues.length > 0) {
        throw catalogFailure("build", result.issues);
      }
      return result.artifacts;
    },
    validateInstalled() {
      const verification = createCatalogArtifacts(root);
      const issues = [
        ...verification.issues,
        ...staleArtifactIssues(root, verification.artifacts),
      ];
      if (issues.length > 0) {
        throw catalogFailure("installed-set validation", issues);
      }
    },
  });
  if (transaction.recoveryRequired) {
    throw new Error(
      `PCR catalog artifacts were committed, but transaction cleanup is incomplete. ` +
        `Run npm run catalog:recover before continuing. ${transaction.warnings.join(" ")}`,
    );
  }
  return { ...result, transaction };
}

export function recoverCatalog(root = REPOSITORY_ROOT, { forceStaleLock = false } = {}) {
  return recoverCatalogArtifactTransaction({
    root,
    force: forceStaleLock,
    command: "catalog:recover",
  });
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
    acceptance: structuredClone(mapping.acceptance),
  };
}

function isValidMappingProjection(mapping) {
  return (
    typeof mapping?.pcr_id === "string" &&
    mapping.pcr_id.startsWith("pcr.") &&
    MAPPING_RELATIONS.has(mapping.mapping_type) &&
    mapping.mapping_type !== "manual_review" &&
    typeof mapping.confidence === "string" &&
    mapping.confidence.length > 0 &&
    mapping.acceptance?.status === "accepted" &&
    typeof mapping.acceptance?.decided_by === "string" &&
    mapping.acceptance.decided_by.trim().length > 0 &&
    typeof mapping.acceptance?.decided_at_utc === "string" &&
    typeof mapping.acceptance?.decision_ref === "string" &&
    mapping.acceptance.decision_ref.trim().length > 0
  );
}

function assertAcceptedMappingDocument(mappingDocument, source) {
  assertClassificationMapping(mappingDocument, {
    entityKind: "accepted classification mapping",
    source,
  });
  if (mappingDocument.schema_version !== 2 || mappingDocument.status !== "current") {
    throw new Error(
      `${source} must use accepted-only mapping schema_version 2 with status current`,
    );
  }
}

function mappingDecisionReferenceIssues(root, mappingDocument, mappingPath) {
  const issues = [];
  const checked = new Map();
  for (const mapping of mappingDocument.mappings) {
    const reference = String(mapping.acceptance?.decision_ref ?? "");
    const relativePath = reference.split("#", 1)[0];
    if (!checked.has(relativePath)) {
      try {
        readManagedUtf8File({
          root,
          filePath: path.join(root, ...relativePath.split("/")),
          label: `mapping decision reference ${relativePath}`,
        });
        checked.set(relativePath, null);
      } catch (error) {
        checked.set(relativePath, error instanceof Error ? error.message : String(error));
      }
    }
    const problem = checked.get(relativePath);
    if (problem) {
      issues.push(
        `${mappingPath} code ${String(mapping.code)} has an unreadable acceptance decision_ref: ${problem}`,
      );
    }
  }
  return issues;
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
  if (args.includes("--help")) {
    if (args.length !== 1) {
      throw new Error("--help cannot be combined with other catalog options");
    }
    process.stdout.write(catalogHelpText());
    return;
  }
  const allowed = new Set(["--check", "--recover", "--force-stale-lock"]);
  const unknown = args.find((arg) => !allowed.has(arg));
  if (unknown) {
    throw new Error(`Unknown catalog option: ${unknown}`);
  }
  if (args.includes("--check") && args.includes("--recover")) {
    throw new Error("--check and --recover are mutually exclusive");
  }
  if (args.includes("--force-stale-lock") && !args.includes("--recover")) {
    throw new Error("--force-stale-lock is valid only with --recover");
  }
  if (args.includes("--recover")) {
    const recovery = recoverCatalog(REPOSITORY_ROOT, {
      forceStaleLock: args.includes("--force-stale-lock"),
    });
    console.log(
      `PCR catalog recovery action: ${recovery.action}. ` +
        `Recovered phase: ${recovery.phase ?? "none"}. ` +
        `Artifacts: ${recovery.artifactCount}.`,
    );
    console.log("Next: run npm run catalog:check, then rerun the command that was interrupted.");
    return;
  }
  const checkOnly = args.includes("--check");
  const result = buildOrCheckCatalog(REPOSITORY_ROOT, { checkOnly });

  const action = checkOnly ? "is current" : "was rebuilt";
  console.log(
    `PCR catalog ${action}: ${result.artifacts.map((artifact) => artifact.path).join(", ")}`,
  );
}

function catalogHelpText() {
  return `Usage: node builder/scripts/build-catalog.mjs [--check | --recover [--force-stale-lock]]\n\n` +
    `Build, verify, or recover the catalog/material/coverage artifact set. Publication uses a journaled whole-set transaction.\n\n` +
    `Options:\n` +
    `  --check               Verify source contracts and exact generated bytes without changing files.\n` +
    `  --recover             Restore the old set after an interrupted pre-commit transaction, or finish cleanup after commit.\n` +
    `  --force-stale-lock    With --recover, clear a malformed or foreign-host stale lock after confirming no writer is active.\n` +
    `  --help                Show this help.\n\n` +
    `Next: run npm run catalog:check after build or recovery.\n`;
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
