import { isUnknownRecord, errorMessage, errorCode, type UnknownRecord } from "../../packages/pcr-core/src/types.ts";
import type {BuilderOptions} from "./types.ts";
interface FileIdentity {dev:number;ino:number}
interface FilePresent extends FileIdentity {exists:true;bytes:Buffer;sha256:string;mode:number}
interface FileAbsent {exists:false;bytes:null;sha256:null;dev:null;ino:null;mode:null}
type FileSnapshot=FilePresent|FileAbsent;
interface CpcArtifact {relativePath:string;bytes:Buffer;label:string;baseline:FileSnapshot}
export interface CpcCsvEntry {code:string;title:string;level:number}
export interface CpcClassificationNode extends CpcCsvEntry {parent_code:string|null;path_codes:string[];path_titles:string[];child_codes:string[];is_leaf:boolean}
interface CpcIdentityLeaf extends CpcClassificationNode {pcr_directory:string;pcr_dir:string;pcr_id:string}
interface LegacyIdentityEntry {code:string;title:string;pcr_dir:string;pcr_id:string}
interface LegacyInventory {schema_version:number;classification_system:unknown;classification_version:unknown;status?:unknown;leaves:LegacyIdentityEntry[]}
interface CpcMappingEntry extends UnknownRecord {code:string;label:string;pcr_id:string;mapping_type:string;confidence:string}
interface CpcMappingDocument extends UnknownRecord {schema_version:number;status:string;classification_system:string;classification_version:string;mappings:CpcMappingEntry[]}
interface CpcLockDocument {schema_version:number;coordinate:string;pid:number;hostname:string;owner_token:string;created_at_utc:string}
interface CpcImportLock {bytes:Buffer;coordinate:string;identity:FileIdentity;lockPath:string;ownerToken:string}
export interface CpcImportHooks {afterLegacyScaffolds?:(context:{root:string;mappingPath:string})=>void;beforeCommit?:(context:{root:string;mappingPath:string})=>void;beforeMappingCommit?:(context:{root:string;mappingPath:string})=>void;afterStaleLockValidated?:(context:{coordinate:string;lockPath:string})=>void;beforeLockReleaseClaim?:(context:{lockPath:string})=>void}
interface CpcImportOptions extends BuilderOptions {__testHooks?:CpcImportHooks}
interface LegacyTarget {exists:boolean;relativePath:string;absolutePath:string;expectedFiles:Map<string,Buffer>;directoryIdentity?:FileIdentity;leaf:CpcIdentityLeaf;classificationVersion:string;created:boolean}
import { createHash, randomUUID } from "node:crypto";
import {
  closeSync,
  existsSync,
  fchmodSync,
  fstatSync,
  fsyncSync,
  linkSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  readdirSync,
  realpathSync,
  renameSync,
  rmSync,
  unlinkSync,
  writeSync,
} from "node:fs";
import { constants as fsConstants } from "node:fs";
import { hostname } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { init } from "./builder-operations.ts";
import { REQUIRED_DIRS } from "./builder-constants.ts";
import { findCoverageSourceDescriptor } from "./classification-coverage-sources.ts";
import { PCR_EN_FILE, PCR_ZH_FILE, enPcrBody, zhPcrBody } from "./scaffold-templates.ts";
import { assertClassificationMapping } from "./schema-contracts.ts";
import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(__dirname, "../..");
const LOCK_SCHEMA_VERSION = 1;
const LOCK_OWNER_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/u;
const LEGACY_PCR_FILES = ["manifest.yaml", PCR_EN_FILE, PCR_ZH_FILE, "structured.yaml"];
const INIT_WRITE_TARGETS = [
  "library/catalog.yaml",
  "library/pcrs/README.md",
  "library/modules/README.md",
  "builder/README.md",
  "builder/docs/index.md",
];

function lstatIfExists(target: string) {
  return lstatSync(target, { throwIfNoEntry: false }) ?? null;
}

function rootFromOptions(options: BuilderOptions) {
  const resolved = path.resolve(String(options.root ?? defaultRoot));
  if (!existsSync(resolved)) {
    mkdirSync(resolved, { recursive: true, mode: 0o755 });
  }
  const root = realpathSync(resolved);
  const stats = lstatSync(root);
  if (!stats.isDirectory()) {
    throw new Error(`CPC repository root is not a directory: ${root}`);
  }
  return root;
}

function managedTargetPath(root: string, relativePath: unknown) {
  if (
    typeof relativePath !== "string"
    || relativePath.length === 0
    || path.posix.isAbsolute(relativePath)
    || relativePath.includes("\\")
    || path.posix.normalize(relativePath) !== relativePath
  ) {
    throw new Error(`Invalid CPC managed path: ${String(relativePath)}`);
  }
  const target = path.resolve(root, ...relativePath.split("/"));
  const relativeTarget = path.relative(root, target);
  if (
    relativeTarget === ".."
    || relativeTarget.startsWith(`..${path.sep}`)
    || path.isAbsolute(relativeTarget)
  ) {
    throw new Error(`CPC managed path escapes the repository root: ${relativePath}`);
  }

  const segments = relativeTarget.split(path.sep).filter(Boolean);
  let current = root;
  for (const [index, segment] of segments.entries()) {
    current = path.join(current, segment);
    const stats = lstatIfExists(current);
    if (!stats) {
      break;
    }
    if (stats.isSymbolicLink()) {
      throw new Error(`CPC managed path contains a symbolic link: ${relativePath}`);
    }
    if (index < segments.length - 1 && !stats.isDirectory()) {
      throw new Error(`CPC managed path parent is not a directory: ${relativePath}`);
    }
    if (index === segments.length - 1 && !stats.isDirectory() && !stats.isFile()) {
      throw new Error(`CPC managed path is not a regular file or directory: ${relativePath}`);
    }
  }
  return target;
}

function ensureManagedDirectory(root: string, relativePath: string) {
  managedTargetPath(root, `${relativePath}/.directory-check`);
  let current = root;
  for (const segment of relativePath.split("/")) {
    current = path.join(current, segment);
    let stats = lstatIfExists(current);
    if (!stats) {
      try {
        mkdirSync(current, { mode: 0o755 });
      } catch (error) {
        if (errorCode(error) !== "EEXIST") {
          throw error;
        }
      }
      stats = lstatIfExists(current);
    }
    if (!stats?.isDirectory() || stats.isSymbolicLink()) {
      throw new Error(`CPC managed directory is unsafe: ${relativePath}`);
    }
  }
  return current;
}

function safeReadRegularFile(absolutePath: string, label: string) {
  const before = lstatIfExists(absolutePath);
  if (!before) {
    return null;
  }
  if (!before.isFile() || before.isSymbolicLink()) {
    throw new Error(`${label} is not a regular file: ${absolutePath}`);
  }
  let descriptor: number | undefined;
  try {
    descriptor = openSync(
      absolutePath,
      fsConstants.O_RDONLY
        | (fsConstants.O_NOFOLLOW ?? 0)
        | (fsConstants.O_NONBLOCK ?? 0),
    );
    const opened = fstatSync(descriptor);
    if (!opened.isFile() || opened.dev !== before.dev || opened.ino !== before.ino) {
      throw new Error(`${label} changed while it was opened: ${absolutePath}`);
    }
    return {
      bytes: readFileSync(descriptor),
      dev: opened.dev,
      ino: opened.ino,
      mode: opened.mode & 0o777,
    };
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }
}

function fileSnapshot(root: string, relativePath: string, label = "CPC managed file"): FileSnapshot {
  const absolutePath = managedTargetPath(root, relativePath);
  const value = safeReadRegularFile(absolutePath, label);
  return value
    ? {
        exists: true,
        bytes: value.bytes,
        sha256: sha256Bytes(value.bytes),
        dev: value.dev,
        ino: value.ino,
        mode: value.mode,
      }
    : { exists: false, bytes: null, sha256: null, dev: null, ino: null, mode: null };
}

function assertFileSnapshot(root: string, relativePath: string, baseline: FileSnapshot, label = "CPC managed file") {
  const current = fileSnapshot(root, relativePath, label);
  if (
    current.exists !== baseline.exists
    || current.sha256 !== baseline.sha256
    || (current.exists && !current.bytes.equals(baseline.bytes!))
  ) {
    throw new Error(`${label} changed concurrently; import aborted without replacing it: ${relativePath}`);
  }
}

function createExclusiveFile(target: string, content: unknown, { mode = 0o600 } = {}) {
  let descriptor: number | undefined;
  try {
    descriptor = openSync(
      target,
      fsConstants.O_WRONLY
        | fsConstants.O_CREAT
        | fsConstants.O_EXCL
        | fsConstants.O_NOFOLLOW,
      mode,
    );
    fchmodSync(descriptor, mode);
    const bytes = Buffer.isBuffer(content) ? content : Buffer.from(String(content));
    let offset = 0;
    while (offset < bytes.length) {
      offset += writeSync(descriptor, bytes, offset, bytes.length - offset);
    }
    fsyncSync(descriptor);
    const stats = fstatSync(descriptor);
    if (!stats.isFile()) {
      throw new Error(`CPC staged path is not a regular file: ${target}`);
    }
    return { dev: stats.dev, ino: stats.ino };
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }
}

function assertOwnedPath(target: string, identity: FileIdentity, expectedKind: string) {
  const stats = lstatIfExists(target);
  if (
    !stats
    || stats.dev !== identity.dev
    || stats.ino !== identity.ino
    || stats.isSymbolicLink()
    || (expectedKind === "file" ? !stats.isFile() : !stats.isDirectory())
  ) {
    throw new Error(`CPC staged ${expectedKind} ownership could not be verified: ${target}`);
  }
}

function removeOwnedPath(target: string, identity: FileIdentity, expectedKind: string) {
  const stats = lstatIfExists(target);
  if (!stats) {
    return;
  }
  if (
    stats.dev !== identity.dev
    || stats.ino !== identity.ino
    || stats.isSymbolicLink()
    || (expectedKind === "file" ? !stats.isFile() : !stats.isDirectory())
  ) {
    return;
  }
  if (expectedKind === "file") {
    unlinkSync(target);
  } else {
    rmSync(target, { recursive: true });
  }
}

function commitFileFromBaseline(root: string, relativePath: string, content: unknown, baseline: FileSnapshot, label: string) {
  const parentRelative = path.posix.dirname(relativePath);
  const parent = ensureManagedDirectory(root, parentRelative);
  const target = managedTargetPath(root, relativePath);
  const temporaryPath = path.join(parent, `.${path.basename(target)}.cpc-${randomUUID()}.tmp`);
  const temporaryIdentity = createExclusiveFile(temporaryPath, content, {
    mode: baseline.exists ? baseline.mode : 0o644,
  });
  try {
    assertFileSnapshot(root, relativePath, baseline, label);
    assertOwnedPath(temporaryPath, temporaryIdentity, "file");
    if (!baseline.exists) {
      // link(2) provides an atomic no-clobber installation for an absent target.
      linkSync(temporaryPath, target);
      unlinkSync(temporaryPath);
    } else {
      renameSync(temporaryPath, target);
    }
  } finally {
    removeOwnedPath(temporaryPath, temporaryIdentity, "file");
  }
}

function writeArtifactIfChanged(root: string, artifact: CpcArtifact) {
  if (artifact.baseline.exists && artifact.baseline.bytes.equals(artifact.bytes)) {
    assertFileSnapshot(root, artifact.relativePath, artifact.baseline, artifact.label);
    return false;
  }
  commitFileFromBaseline(
    root,
    artifact.relativePath,
    artifact.bytes,
    artifact.baseline,
    artifact.label,
  );
  return true;
}

function assertInstalledArtifact(root: string, artifact: CpcArtifact) {
  const current = fileSnapshot(root, artifact.relativePath, artifact.label);
  if (!current.exists || !current.bytes.equals(artifact.bytes)) {
    throw new Error(
      `${artifact.label} changed after installation; mapping commit was aborted: ${artifact.relativePath}`,
    );
  }
}

function parseCsvRows(text: string) {
  const rows: string[][] = [];
  let current = "";
  let row: string[] = [];
  let inQuotes = false;
  const normalized = text.replace(/^\uFEFF/u, "");

  for (let index = 0; index < normalized.length; index += 1) {
    const char = normalized[index];
    const next = normalized[index + 1];
    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      index += 1;
      continue;
    }
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === "," && !inQuotes) {
      row.push(current);
      current = "";
      continue;
    }
    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(current);
      if (row.some((value) => value.trim() !== "")) {
        rows.push(row);
      }
      row = [];
      current = "";
      continue;
    }
    current += char;
  }

  if (inQuotes) {
    throw new Error("Invalid CPC CSV: unterminated quoted field");
  }

  if (current.length > 0 || row.length > 0) {
    row.push(current);
    if (row.some((value) => value.trim() !== "")) {
      rows.push(row);
    }
  }

  return rows;
}

function decodeUtf8(sourceBytes: Uint8Array) {
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(sourceBytes);
  } catch (error) {
    throw new Error(`Invalid CPC CSV: source is not valid UTF-8 (${errorMessage(error)})`);
  }
}

function headerClassificationVersion(header: readonly string[]) {
  const versions = new Set<string>();
  for (const column of header) {
    const match = String(column).match(/\bcpc\b.*?\bver(?:sion)?\.?\s*(\d+(?:\.\d+)*)/iu);
    if (match) {
      versions.add(match[1]!);
    }
  }
  if (versions.size > 1) {
    throw new Error(`Invalid CPC CSV: header contains conflicting versions ${[...versions].join(", ")}`);
  }
  return [...versions][0] ?? null;
}

function readCpcCsv(sourceBytes: Uint8Array, classificationVersion: string) {
  const rows = parseCsvRows(decodeUtf8(sourceBytes));
  if (rows.length < 2) {
    throw new Error("Invalid CPC CSV: expected a header and at least one classification row");
  }
  const rawHeader = rows[0]!.map((value) => String(value).trim());
  const header = rawHeader.map((value) => value.toLowerCase());
  if (!header[0]?.includes("code") || !header[1]?.includes("title")) {
    throw new Error("Invalid CPC CSV: first two columns must be code and title");
  }
  const headerVersion = headerClassificationVersion(rawHeader);
  if (headerVersion && headerVersion !== classificationVersion) {
    throw new Error(
      `CPC CSV header version ${headerVersion} does not match --classification-version ${classificationVersion}`,
    );
  }
  const entries: CpcCsvEntry[] = [];
  const seenCodes = new Set();
  for (const [index, row] of rows.entries()) {
    if (index === 0) {
      continue;
    }
    const [codeRaw, titleRaw] = row;
    const code = String(codeRaw ?? "").trim();
    const title = String(titleRaw ?? "").trim();
    if (!code || !title) {
      throw new Error(`Invalid CPC CSV row ${index + 1}: non-empty rows require code and title`);
    }
    if (!/^\d{1,5}$/u.test(code)) {
      throw new Error(`Invalid CPC code at CSV row ${index + 1}: ${code}`);
    }
    if (seenCodes.has(code)) {
      throw new Error(`Duplicate CPC code at CSV row ${index + 1}: ${code}`);
    }
    seenCodes.add(code);
    entries.push({ code, title, level: code.length - 1 });
  }
  if (entries.length === 0) {
    throw new Error("Invalid CPC CSV: no classification rows were found");
  }
  return entries;
}

function parentCodeFor(code: string) {
  return code.length > 1 ? code.slice(0, code.length - 1) : null;
}

function normalizeAsciiSlug(value: unknown) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase()
    .replace(/&/gu, " and ")
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "")
    .replace(/-{2,}/gu, "-");
}

function stableHash(value: unknown) {
  return createHash("sha256").update(String(value)).digest("hex").slice(0, 8);
}

function boundedSlug(value: unknown, maxLength = 96) {
  const slug = normalizeAsciiSlug(value) || "untitled";
  if (slug.length <= maxLength) {
    return slug;
  }
  const hash = stableHash(value);
  const prefix = slug.slice(0, maxLength - hash.length - 1).replace(/-+$/gu, "");
  return `${prefix}-${hash}`;
}

function yamlString(value: unknown) {
  return JSON.stringify(String(value));
}

function buildCpcModel(entries: CpcCsvEntry[]) {
  const byCode = new Map<string,CpcCsvEntry & {parent_code:string|null}>(entries.map((entry) => [entry.code, { ...entry,parent_code:null }]));
  const childCodesByParent = new Map<string,string[]>();

  for (const entry of byCode.values()) {
    const parentCode = parentCodeFor(entry.code);
    entry.parent_code = parentCode;
    if (parentCode && !byCode.has(parentCode)) {
      throw new Error(
        `Invalid CPC hierarchy: code ${entry.code} requires missing parent ${parentCode}`,
      );
    }
    if (parentCode) {
      const childCodes = childCodesByParent.get(parentCode) ?? [];
      childCodes.push(entry.code);
      childCodesByParent.set(parentCode, childCodes);
    }
  }

  function pathFor(code: string) {
    const pathEntries: (CpcCsvEntry & {parent_code:string|null})[] = [];
    let current: (CpcCsvEntry & {parent_code:string|null})|null|undefined = byCode.get(code);
    while (current) {
      pathEntries.push(current);
      current = current.parent_code ? byCode.get(current.parent_code) : null;
    }
    return pathEntries.reverse();
  }

  const nodes = Array.from(byCode.values()).map((entry) => {
    const pathEntries = pathFor(entry.code);
    const children = childCodesByParent.get(entry.code) ?? [];
    return {
      code: entry.code,
      title: entry.title,
      level: entry.level,
      parent_code: entry.parent_code,
      path_codes: pathEntries.map((pathEntry) => pathEntry.code),
      path_titles: pathEntries.map((pathEntry) => pathEntry.title),
      child_codes: children,
      is_leaf: children.length === 0,
    };
  });

  const leaves = nodes.filter((node) => node.is_leaf);
  return { nodes, leaves };
}

function basePcrDirectoryForLeaf(leaf: CpcClassificationNode) {
  const section = leaf.path_titles[0] ?? "unclassified";
  const division = leaf.path_titles[1] ?? section;
  return path.join(
    boundedSlug(section, 80),
    boundedSlug(division, 80),
    boundedSlug(leaf.title, 96),
  );
}

function pcrIdForLeaf(leaf: CpcClassificationNode & {pcr_directory?:string}) {
  const pcrDirectory = leaf.pcr_directory ?? basePcrDirectoryForLeaf(leaf);
  return `pcr.${pcrDirectory.replaceAll(path.sep, ".")}`;
}

function withPcrIdentity(leaves: CpcClassificationNode[]): CpcIdentityLeaf[] {
  const leavesByBaseDirectory = new Map<string,CpcClassificationNode[]>();
  for (const leaf of leaves) {
    const baseDirectory = basePcrDirectoryForLeaf(leaf);
    const entries = leavesByBaseDirectory.get(baseDirectory) ?? [];
    entries.push(leaf);
    leavesByBaseDirectory.set(baseDirectory, entries);
  }

  const directoryByCode = new Map<string,string>();
  for (const [baseDirectory, entries] of leavesByBaseDirectory.entries()) {
    if (entries.length === 1) {
      directoryByCode.set(entries[0]!.code, baseDirectory);
      continue;
    }
    for (const leaf of entries) {
      directoryByCode.set(leaf.code, `${baseDirectory}-${stableHash(`${leaf.code}:${leaf.title}`)}`);
    }
  }

  return leaves.map((leaf) => {
    const pcrDirectory = directoryByCode.get(leaf.code)!;
    return {
      ...leaf,
      pcr_directory: pcrDirectory,
      pcr_dir: `library/pcrs/${pcrDirectory.replaceAll(path.sep, "/")}`,
      pcr_id: `pcr.${pcrDirectory.replaceAll(path.sep, ".")}`,
    };
  });
}

function cpcLeafManifest(leaf: CpcIdentityLeaf, classificationVersion: string) {
  const pcrId = pcrIdForLeaf(leaf);
  return `schema_version: 1
id: ${pcrId}
title:
  en-US: ${yamlString(leaf.title)}
  zh-CN: null
status: scaffold
pcr_kind: product_category_rule
content_maturity: empty_scaffold
domains:
  - ${yamlString(normalizeAsciiSlug(leaf.path_titles[0] ?? "unclassified"))}
modules:
  core:
    - pcr-minimum-content
    - unit-of-analysis
    - reference-flow
    - inventory-flow-taxonomy
    - system-boundary
    - allocation
    - data-quality
    - validation-rules
target_entities:
  - flow
  - process
  - lifecyclemodel
  - dataset
languages:
  canonical: en-US
  available:
    - en-US
    - zh-CN
translation_status:
  zh-CN: scaffold_pending_translation
classification_refs:
  - system: CPC
    version: ${yamlString(classificationVersion)}
    code: ${yamlString(leaf.code)}
    title: ${yamlString(leaf.title)}
    mapping_type: exact
`;
}

function cpcLeafMarkdown(leaf: CpcIdentityLeaf, language: string) {
  const pcrId = pcrIdForLeaf(leaf);
  const title = language === "zh-CN" ? "待补充" : leaf.title;
  return `---
pcr_id: ${pcrId}
language: ${language}
status: scaffold
sync_with: ${language === "zh-CN" ? PCR_EN_FILE : PCR_ZH_FILE}
---

# ${title}

${language === "zh-CN" ? zhPcrBody() : enPcrBody()}`;
}

function cpcStructuredYaml(leaf: CpcIdentityLeaf, classificationVersion: string) {
  return `schema_version: 1
status: scaffold
classification_seed:
  system: CPC
  version: ${yamlString(classificationVersion)}
  code: ${yamlString(leaf.code)}
  title: ${yamlString(leaf.title)}
reference_flows: []
flow_properties: []
unit_conventions: []
system_boundary:
  rules: []
boundary_abstraction: {}
process_map: []
process_inventory: []
dataset_production:
  collection_protocols: []
  calculation_rules: []
  data_quality_requirements: []
published_dataset_profile: {}
allocation_rules: []
data_quality_rules: []
validation_rules: []
data_sources: []
`;
}

function sha256Bytes(bytes: Uint8Array) {
  return createHash("sha256").update(bytes).digest("hex");
}

function currentEmptyMappingDocument(classificationVersion: string): CpcMappingDocument {
  return {
    schema_version: 2,
    classification_system: "CPC",
    classification_version: classificationVersion,
    status: "current",
    mappings: [],
  };
}

function legacyMappingEntryForLeaf(leaf: CpcIdentityLeaf): CpcMappingEntry {
  return {
    code: leaf.code,
    label: leaf.title,
    pcr_id: pcrIdForLeaf(leaf),
    mapping_type: "exact",
    confidence: "scaffold",
  };
}

function readExistingMapping({ root, relativePath, classificationVersion, leafCodes }: {root:string;relativePath:string;classificationVersion:string;leafCodes:Set<string>}) {
  const snapshot = fileSnapshot(root, relativePath, "CPC classification mapping");
  if (!snapshot.exists) {
    return {
      document: currentEmptyMappingDocument(classificationVersion),
      sourceText: null,
      snapshot,
    };
  }

  const sourceText = decodeUtf8(snapshot.bytes);
  let document: unknown;
  try {
    document = parseYaml(sourceText);
  } catch (error) {
    throw new Error(`Invalid existing CPC mapping ${relativePath}: ${errorMessage(error)}`);
  }
  assertClassificationMapping(document, {
    code: "PCR_INVALID_CLASSIFICATION_MAPPING",
    entityKind: "CPC classification mapping",
    source: relativePath,
  });
  const mappingDocument = document as CpcMappingDocument;
  if (
    String(mappingDocument.classification_system).toLowerCase() !== "cpc"
    || String(mappingDocument.classification_version) !== classificationVersion
  ) {
    throw new Error(
      `Existing CPC mapping coordinate does not match cpc:${classificationVersion}: ${relativePath}`,
    );
  }

  const seenCodes = new Set();
  for (const mapping of mappingDocument.mappings) {
    if (seenCodes.has(mapping.code)) {
      throw new Error(`Existing CPC mapping contains duplicate code ${mapping.code}: ${relativePath}`);
    }
    seenCodes.add(mapping.code);
    if (!leafCodes.has(mapping.code)) {
      throw new Error(
        `Existing CPC mapping code ${mapping.code} is absent from the imported source; review the mapping before re-importing`,
      );
    }
  }
  return { document: mappingDocument, sourceText, snapshot };
}

function assertLegacyScaffoldMapping(document: CpcMappingDocument, relativePath: string) {
  if (document.schema_version === 1 && document.status === "scaffold") {
    return;
  }
  throw new Error(
    `--legacy-scaffolds cannot modify ${relativePath}: schema_version 2 status current mappings are accepted-only. Use classification-only import and the reviewed mapping workflow instead.`,
  );
}

function readLegacyLeafInventory({ root, relativePath, classificationVersion }: {root:string;relativePath:string;classificationVersion:string}) {
  const snapshot = fileSnapshot(root, relativePath, "Legacy CPC leaf identity inventory");
  if (!snapshot.exists) {
    return {
      document: {
        schema_version: 1,
        classification_system: "CPC",
        classification_version: classificationVersion,
        status: "scaffold",
        leaves: [],
      },
      snapshot,
    };
  }

  let document: unknown;
  try {
    document = JSON.parse(decodeUtf8(snapshot.bytes));
  } catch (error) {
    throw new Error(`Invalid legacy CPC leaf identity inventory ${relativePath}: ${errorMessage(error)}`);
  }
  if (
    !isUnknownRecord(document) || document.schema_version !== 1
    || String(document.classification_system).toLowerCase() !== "cpc"
    || String(document.classification_version) !== classificationVersion
    || !Array.isArray(document.leaves)
  ) {
    throw new Error(`Invalid legacy CPC leaf identity inventory contract: ${relativePath}`);
  }
  const seenCodes = new Set();
  const seenPcrIds = new Set();
  const seenPcrDirectories = new Set();
  for (const leaf of document.leaves) {
    if (
      !isUnknownRecord(leaf) || typeof leaf.code !== "string"
      || typeof leaf?.title !== "string"
      || typeof leaf?.pcr_dir !== "string"
      || typeof leaf?.pcr_id !== "string"
    ) {
      throw new Error(`Invalid legacy CPC leaf identity entry: ${relativePath}`);
    }
    if (
      !leaf.pcr_id.startsWith("pcr.")
      || !leaf.pcr_dir.startsWith("library/pcrs/")
      || path.posix.normalize(leaf.pcr_dir) !== leaf.pcr_dir
    ) {
      throw new Error(`Unsafe legacy CPC leaf identity entry: ${relativePath}`);
    }
    if (seenCodes.has(leaf.code)) {
      throw new Error(`Duplicate legacy CPC leaf identity code ${leaf.code}: ${relativePath}`);
    }
    if (seenPcrIds.has(leaf.pcr_id)) {
      throw new Error(`Duplicate legacy CPC leaf identity PCR id ${leaf.pcr_id}: ${relativePath}`);
    }
    if (seenPcrDirectories.has(leaf.pcr_dir)) {
      throw new Error(
        `Duplicate legacy CPC leaf identity PCR directory ${leaf.pcr_dir}: ${relativePath}`,
      );
    }
    seenCodes.add(leaf.code);
    seenPcrIds.add(leaf.pcr_id);
    seenPcrDirectories.add(leaf.pcr_dir);
  }
  return { document: document as unknown as LegacyInventory, snapshot };
}

function planLegacyCompatibility({ leaves, mappingDocument: existingMapping, leafInventory }: {leaves:CpcClassificationNode[];mappingDocument:CpcMappingDocument;leafInventory:LegacyInventory}) {
  const identityLeaves = withPcrIdentity(leaves);
  const mappedCodes = new Set(existingMapping.mappings.map((mapping) => mapping.code));
  const inventoryByCode = new Map(leafInventory.leaves.map((leaf) => [leaf.code, leaf]));
  const inventoryByPcrId = new Map(leafInventory.leaves.map((leaf) => [leaf.pcr_id, leaf.code]));

  for (const leaf of identityLeaves) {
    const pcrId = pcrIdForLeaf(leaf);
    const existingIdentity = inventoryByCode.get(leaf.code);
    if (
      existingIdentity
      && (existingIdentity.pcr_id !== pcrId || existingIdentity.pcr_dir !== leaf.pcr_dir)
    ) {
      throw new Error(
        `Legacy CPC identity drift for ${leaf.code}; preserve the existing alias before changing slug rules`,
      );
    }
    const collidingCode = inventoryByPcrId.get(pcrId);
    if (collidingCode && collidingCode !== leaf.code) {
      throw new Error(
        `Legacy CPC PCR identity collision between ${collidingCode} and ${leaf.code}: ${pcrId}`,
      );
    }
  }

  const legacyLeaves = identityLeaves.filter((leaf) => !mappedCodes.has(leaf.code));
  const appendedInventoryEntries = legacyLeaves
    .filter((leaf) => !inventoryByCode.has(leaf.code))
    .map((leaf) => ({
      code: leaf.code,
      title: leaf.title,
      pcr_dir: leaf.pcr_dir,
      pcr_id: pcrIdForLeaf(leaf),
    }));
  const appendedMappings = legacyLeaves.map(legacyMappingEntryForLeaf);
  const mergedMapping = {
    ...existingMapping,
    mappings: [...existingMapping.mappings, ...appendedMappings],
  };
  assertClassificationMapping(mergedMapping, {
    code: "PCR_INVALID_CLASSIFICATION_MAPPING",
    entityKind: "CPC classification mapping",
  });

  return {
    appendedInventoryEntries,
    appendedMappings,
    identityInventory: {
      ...leafInventory,
      leaves: [...leafInventory.leaves, ...appendedInventoryEntries],
    },
    legacyLeaves,
    mergedMapping,
  };
}

function sourceMetadata({
  classificationVersion,
  metadataSnapshot,
  sourceFile,
  sourceSha256,
  sourceUrl,
}: {classificationVersion:string;metadataSnapshot:FileSnapshot;sourceFile:string;sourceSha256:string;sourceUrl:unknown}) {
  let existing: UnknownRecord | null = null;
  if (metadataSnapshot.exists) {
    try {
      const raw = parseYaml(decodeUtf8(metadataSnapshot.bytes));
      if (!isUnknownRecord(raw)) throw new Error("Invalid existing CPC source metadata contract");
      existing=raw;
    } catch (error) {
      throw new Error(`Invalid existing CPC source metadata: ${errorMessage(error)}`);
    }
    if (
      existing?.schema_version !== 1
      || String(existing.classification_system).toLowerCase() !== "cpc"
      || String(existing.classification_version) !== classificationVersion
      || typeof existing.source_file !== "string"
      || typeof existing.source_url !== "string"
      || !/^[0-9a-f]{64}$/u.test(String(existing.sha256))
      || typeof existing.retrieved_at_utc !== "string"
    ) {
      throw new Error("Invalid existing CPC source metadata contract");
    }
  }
  const resolvedSourceUrl = sourceUrl === undefined
    ? String(existing?.source_url ?? "")
    : String(sourceUrl);
  const sameSource =
    existing?.schema_version === 1
    && String(existing.classification_system).toLowerCase() === "cpc"
    && String(existing.classification_version) === classificationVersion
    && existing.source_file === sourceFile
    && existing.source_url === resolvedSourceUrl
    && existing.sha256 === sourceSha256
    && typeof existing.retrieved_at_utc === "string";
  return {
    document: {
      schema_version: 1,
      classification_system: "CPC",
      classification_version: classificationVersion,
      source_file: sourceFile,
      source_url: resolvedSourceUrl,
      sha256: sourceSha256,
      retrieved_at_utc: sameSource ? existing!.retrieved_at_utc : new Date().toISOString(),
    },
    preserveExactBytes: sameSource,
  };
}

function trustedLockDocument(document: unknown, coordinate: string): document is CpcLockDocument {
  return isUnknownRecord(document) && document.schema_version === LOCK_SCHEMA_VERSION
    && document.coordinate === coordinate
    && typeof document.pid === "number" && Number.isInteger(document.pid)
    && document.pid > 0
    && document.pid <= 2_147_483_647
    && typeof document.hostname === "string"
    && document.hostname.length > 0
    && typeof document.owner_token === "string"
    && LOCK_OWNER_PATTERN.test(document.owner_token)
    && typeof document.created_at_utc === "string"
    && Number.isFinite(Date.parse(document.created_at_utc));
}

function processIsLive(pid: number) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    if (errorCode(error) === "ESRCH") {
      return false;
    }
    return true;
  }
}

export function cpcImportLockPath(root: string, classificationVersion: string) {
  return path.join(
    path.resolve(root),
    "library/.pcr-builder-state/cpc-import",
    `cpc-${classificationVersion}.lock`,
  );
}

function claimImportLockPath(lockPath: string, expected: FileIdentity & {bytes:Buffer}, purpose: string) {
  const claimedPath = `${lockPath}.${purpose}.${randomUUID()}`;
  try {
    renameSync(lockPath, claimedPath);
  } catch (error) {
    if (errorCode(error) === "ENOENT") {
      throw new Error(`CPC import lock disappeared before ${purpose}: ${lockPath}`);
    }
    throw error;
  }

  try {
    const claimed = safeReadRegularFile(claimedPath, "Claimed CPC import lock");
    if (
      !claimed
      || claimed.dev !== expected.dev
      || claimed.ino !== expected.ino
      || !claimed.bytes.equals(expected.bytes)
    ) {
      throw new Error(`CPC import lock ownership changed before ${purpose}: ${lockPath}`);
    }
    return claimedPath;
  } catch (error) {
    if (!lstatIfExists(lockPath) && lstatIfExists(claimedPath)) {
      try {
        renameSync(claimedPath, lockPath);
      } catch {
        // Preserve both pathnames when a concurrent owner prevents safe restoration.
      }
    }
    throw error;
  }
}

function inspectExistingLock(lockPath: string, coordinate: string, hooks: CpcImportHooks) {
  const snapshot = safeReadRegularFile(lockPath, "CPC import lock");
  if (!snapshot) {
    return { retry: true };
  }
  let document: unknown;
  try {
    document = JSON.parse(decodeUtf8(snapshot.bytes));
  } catch {
    throw new Error(`CPC import lock is untrusted and will not be removed: ${lockPath}`);
  }
  if (!trustedLockDocument(document, coordinate)) {
    throw new Error(`CPC import lock is untrusted and will not be removed: ${lockPath}`);
  }
  if (document.hostname !== hostname()) {
    throw new Error(`CPC import lock is owned by another host and will not be removed: ${lockPath}`);
  }
  if (processIsLive(document.pid)) {
    throw new Error(`CPC import is already active for ${coordinate} (pid ${document.pid})`);
  }
  hooks.afterStaleLockValidated?.({ coordinate, lockPath });
  const claimedPath = claimImportLockPath(lockPath, snapshot, "stale-claim");
  unlinkSync(claimedPath);
  return { retry: true };
}

function acquireImportLock(root: string, classificationVersion: string, hooks: CpcImportHooks = {}): CpcImportLock {
  const coordinate = `cpc:${classificationVersion}`;
  const lockDirectoryRelative = "library/.pcr-builder-state/cpc-import";
  const lockDirectory = ensureManagedDirectory(root, lockDirectoryRelative);
  const lockPath = path.join(lockDirectory, `cpc-${classificationVersion}.lock`);
  const ownerToken = randomUUID();
  const document = {
    schema_version: LOCK_SCHEMA_VERSION,
    coordinate,
    owner_token: ownerToken,
    pid: process.pid,
    hostname: hostname(),
    created_at_utc: new Date().toISOString(),
  };
  const bytes = Buffer.from(`${JSON.stringify(document, null, 2)}\n`);

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const identity = createExclusiveFile(lockPath, bytes);
      return { bytes, coordinate, identity, lockPath, ownerToken };
    } catch (error) {
      if (errorCode(error) !== "EEXIST") {
        throw error;
      }
      inspectExistingLock(lockPath, coordinate, hooks);
    }
  }
  throw new Error(`Unable to acquire CPC import lock for ${coordinate}`);
}

function releaseImportLock(lock: CpcImportLock, hooks: CpcImportHooks = {}) {
  hooks.beforeLockReleaseClaim?.({ lockPath: lock.lockPath });
  const claimedPath = claimImportLockPath(
    lock.lockPath,
    { ...lock.identity, bytes: lock.bytes },
    "release-claim",
  );
  unlinkSync(claimedPath);
}

function readSourceFile(source: string) {
  const stats = lstatIfExists(source);
  if (!stats) {
    throw new Error(`CPC source file not found: ${source}`);
  }
  if (!stats.isFile() || stats.isSymbolicLink()) {
    throw new Error(`CPC source must be a regular non-symlink file: ${source}`);
  }
  const value = safeReadRegularFile(source, "CPC source");
  if (!value) {
    throw new Error(`CPC source file not found: ${source}`);
  }
  return value.bytes;
}

function legacyPcrExpectedFiles(leaf: CpcIdentityLeaf, classificationVersion: string) {
  return new Map([
    ["manifest.yaml", Buffer.from(cpcLeafManifest(leaf, classificationVersion))],
    [PCR_EN_FILE, Buffer.from(cpcLeafMarkdown(leaf, "en-US"))],
    [PCR_ZH_FILE, Buffer.from(cpcLeafMarkdown(leaf, "zh-CN"))],
    ["structured.yaml", Buffer.from(cpcStructuredYaml(leaf, classificationVersion))],
  ]);
}

function inspectLegacyPcrTarget(root: string, leaf: CpcIdentityLeaf, classificationVersion: string) {
  const relativePath = leaf.pcr_dir;
  const absolutePath = managedTargetPath(root, relativePath);
  const stats = lstatIfExists(absolutePath);
  const expectedFiles = legacyPcrExpectedFiles(leaf, classificationVersion);
  if (!stats) {
    return { exists: false, relativePath, absolutePath, expectedFiles };
  }
  if (!stats.isDirectory() || stats.isSymbolicLink()) {
    throw new Error(`Legacy CPC PCR target is not a safe directory: ${relativePath}`);
  }
  const names = readdirSync(absolutePath).sort();
  if (
    names.length !== LEGACY_PCR_FILES.length
    || names.some((name, index) => name !== [...LEGACY_PCR_FILES].sort()[index])
  ) {
    throw new Error(
      `Legacy CPC PCR target must be absent or exactly match the four-file scaffold: ${relativePath}`,
    );
  }
  for (const [fileName, expectedBytes] of expectedFiles.entries()) {
    const snapshot = fileSnapshot(root, `${relativePath}/${fileName}`, "Legacy CPC PCR file");
    if (!snapshot.exists || !snapshot.bytes.equals(expectedBytes)) {
      throw new Error(
        `Legacy CPC PCR target contains authored, material, partial, or modified content: ${relativePath}`,
      );
    }
  }
  return {
    exists: true,
    relativePath,
    absolutePath,
    expectedFiles,
    directoryIdentity: { dev: stats.dev, ino: stats.ino },
  };
}

function assertLegacyPcrTarget(root: string, target: LegacyTarget) {
  const current = inspectLegacyPcrTarget(
    root,
    target.leaf,
    target.classificationVersion,
  );
  if (target.created || target.exists) {
    if (!current.exists) {
      throw new Error(`Legacy CPC PCR target changed concurrently: ${target.relativePath}`);
    }
  } else if (current.exists) {
    throw new Error(`Legacy CPC PCR target appeared concurrently: ${target.relativePath}`);
  }
}

function stageLegacyPcrDirectory(root: string, target: LegacyTarget) {
  const parentRelative = path.posix.dirname(target.relativePath);
  const parent = ensureManagedDirectory(root, parentRelative);
  const stagePath = path.join(parent, `.${path.basename(target.absolutePath)}.cpc-${randomUUID()}.tmp`);
  mkdirSync(stagePath, { mode: 0o755 });
  const stageStats = lstatSync(stagePath);
  const stageIdentity = { dev: stageStats.dev, ino: stageStats.ino };
  try {
    for (const [fileName, bytes] of target.expectedFiles.entries()) {
      createExclusiveFile(path.join(stagePath, fileName), bytes, { mode: 0o644 });
    }
    if (lstatIfExists(target.absolutePath)) {
      throw new Error(`Legacy CPC PCR target appeared concurrently: ${target.relativePath}`);
    }
    assertOwnedPath(stagePath, stageIdentity, "directory");
    renameSync(stagePath, target.absolutePath);
    target.created = true;
  } finally {
    removeOwnedPath(stagePath, stageIdentity, "directory");
  }
}

function validateImportOptions(options: BuilderOptions): asserts options is CpcImportOptions {
  const allowedOptions = new Set([
    "__testHooks",
    "_",
    "classification-version",
    "help",
    "legacy-scaffolds",
    "root",
    "source",
    "source-url",
  ]);
  const unknownOption = Object.keys(options).find((key) => !allowedOptions.has(key));
  if (unknownOption) {
    throw new Error(`Unknown CPC import option: --${unknownOption}`);
  }
  if (
    options.__testHooks !== undefined
    && (
      options.__testHooks === null
      || typeof options.__testHooks !== "object"
      || Array.isArray(options.__testHooks)
      || Object.values(options.__testHooks).some((hook) => typeof hook !== "function")
      || Object.keys(options.__testHooks).some(
        (name) => ![
          "afterLegacyScaffolds",
          "afterStaleLockValidated",
          "beforeCommit",
          "beforeLockReleaseClaim",
          "beforeMappingCommit",
        ].includes(name),
      )
    )
  ) {
    throw new Error("Internal CPC import test hooks must be a supported callback object");
  }
  const positionals=options._;
  if ((Array.isArray(positionals) || typeof positionals === "string") && positionals.length > 0) {
    throw new Error(`Unexpected CPC import argument: ${positionals[0]}`);
  }
  if (
    options["legacy-scaffolds"] !== undefined
    && options["legacy-scaffolds"] !== true
  ) {
    throw new Error("--legacy-scaffolds is a boolean flag and does not accept a value");
  }
  for (const key of ["root", "source", "source-url", "classification-version"]) {
    if (options[key] === true) {
      throw new Error(`--${key} requires a value`);
    }
  }
}

function jsonBytes(value: unknown) {
  return Buffer.from(`${JSON.stringify(value, null, 2)}\n`);
}

function artifactFromBaseline(root: string, relativePath: string, bytes: Buffer, label: string): CpcArtifact {
  return { relativePath, bytes, label, baseline: fileSnapshot(root, relativePath, label) };
}

function preflightInitTargets(root: string) {
  for (const relativePath of REQUIRED_DIRS) {
    managedTargetPath(root, `${relativePath}/.cpc-init-check`);
  }
  for (const relativePath of INIT_WRITE_TARGETS) {
    fileSnapshot(root, relativePath, "PCR initialization file");
  }
}

function prepareInitDirectories(root: string) {
  for (const relativePath of REQUIRED_DIRS) {
    ensureManagedDirectory(root, relativePath);
  }
}

function requireCoverageSourceDescriptor(classificationVersion: string) {
  const descriptor = findCoverageSourceDescriptor("cpc", classificationVersion);
  if (!descriptor) {
    throw new Error(
      `CPC ${classificationVersion} requires a registered coverage source descriptor before import`,
    );
  }
  return descriptor;
}

function importCpcWhileLocked({
  root,
  options,
  source,
  sourceBytes,
  entries,
  nodes,
  leaves,
  classificationVersion,
  coverageSource,
  legacyScaffolds,
}: {root:string;options:CpcImportOptions;source:string;sourceBytes:Buffer;entries:CpcCsvEntry[];nodes:CpcClassificationNode[];leaves:CpcClassificationNode[];classificationVersion:string;coverageSource:ReturnType<typeof requireCoverageSourceDescriptor>;legacyScaffolds:boolean}) {
  preflightInitTargets(root);
  const hooks = options.__testHooks ?? {};
  const leafCodes = new Set(leaves.map((leaf) => leaf.code));
  const mappingPath = coverageSource.mappingPath;
  const leafSlugsPath =
    `classifications/systems/cpc/${classificationVersion}/normalized/leaf-slugs.json`;
  const existingMapping = readExistingMapping({
    root,
    relativePath: mappingPath,
    classificationVersion,
    leafCodes,
  });
  if (legacyScaffolds) {
    assertLegacyScaffoldMapping(existingMapping.document, mappingPath);
  }
  const inventory = legacyScaffolds
    ? readLegacyLeafInventory({
        root,
        relativePath: leafSlugsPath,
        classificationVersion,
      })
    : null;
  const legacyPlan = legacyScaffolds
    ? planLegacyCompatibility({
        leaves,
        mappingDocument: existingMapping.document,
        leafInventory: inventory!.document,
      })
    : null;

  const rawRelativePath =
    `classifications/systems/cpc/${classificationVersion}/raw/${path.basename(source)}`;
  const metadataRelativePath =
    `classifications/systems/cpc/${classificationVersion}/raw/source-metadata.yaml`;
  const rawBaseline = fileSnapshot(root, rawRelativePath, "CPC raw source evidence");
  if (rawBaseline.exists && !rawBaseline.bytes.equals(sourceBytes)) {
    throw new Error(
      `Existing CPC raw evidence has different bytes and will not be overwritten: ${rawRelativePath}`,
    );
  }
  const metadataBaseline = fileSnapshot(root, metadataRelativePath, "CPC source metadata");
  const metadata = sourceMetadata({
    classificationVersion,
    metadataSnapshot: metadataBaseline,
    sourceFile: path.basename(source),
    sourceSha256: sha256Bytes(sourceBytes),
    sourceUrl: options["source-url"],
  });

  const classificationArtifacts = [
    { relativePath: rawRelativePath, bytes: sourceBytes, label: "CPC raw source evidence", baseline: rawBaseline },
    {
      relativePath: metadataRelativePath,
      bytes: metadata.preserveExactBytes
        ? metadataBaseline.bytes!
        : Buffer.from(renderYaml(metadata.document)),
      label: "CPC source metadata",
      baseline: metadataBaseline,
    },
    artifactFromBaseline(
      root,
      `classifications/systems/cpc/${classificationVersion}/normalized/hierarchy.json`,
      jsonBytes({
        schema_version: 1,
        classification_system: "CPC",
        classification_version: classificationVersion,
        status: "scaffold",
        nodes,
      }),
      "CPC normalized hierarchy",
    ),
    artifactFromBaseline(
      root,
      coverageSource.normalizedLeavesPath,
      jsonBytes({
        schema_version: 1,
        classification_system: "CPC",
        classification_version: classificationVersion,
        status: "scaffold",
        leaves,
      }),
      "CPC normalized leaves",
    ),
    artifactFromBaseline(
      root,
      `classifications/systems/cpc/${classificationVersion}/normalized/paths.json`,
      jsonBytes({
        schema_version: 1,
        classification_system: "CPC",
        classification_version: classificationVersion,
        status: "scaffold",
        paths: nodes.map((node) => ({
          code: node.code,
          title: node.title,
          path_codes: node.path_codes,
          path_titles: node.path_titles,
          is_leaf: node.is_leaf,
        })),
      }),
      "CPC normalized paths",
    ),
  ];

  const legacyTargets = (legacyPlan?.legacyLeaves ?? []).map((leaf) => ({
    ...inspectLegacyPcrTarget(root, leaf, classificationVersion),
    leaf,
    classificationVersion,
    created: false,
  }));
  const inventoryBytes = legacyPlan ? jsonBytes(legacyPlan.identityInventory) : null;
  const inventoryArtifact = legacyPlan
    && (inventory!.snapshot.exists || legacyPlan.appendedInventoryEntries.length > 0)
    ? {
        relativePath: leafSlugsPath,
        bytes: inventoryBytes!,
        label: "Legacy CPC leaf identity inventory",
        baseline: inventory!.snapshot,
      }
    : null;
  const mappingDocumentToCommit = legacyPlan?.mergedMapping ?? existingMapping.document;
  const mappingBytes = Buffer.from(renderYaml(mappingDocumentToCommit));
  const mappingNeedsWrite = existingMapping.sourceText === null
    || (legacyPlan?.appendedMappings.length ?? 0) > 0;

  hooks.beforeCommit?.({ root, mappingPath });
  for (const artifact of classificationArtifacts) {
    assertFileSnapshot(root, artifact.relativePath, artifact.baseline, artifact.label);
  }
  assertFileSnapshot(root, mappingPath, existingMapping.snapshot, "CPC classification mapping");
  if (inventoryArtifact) {
    assertFileSnapshot(root, leafSlugsPath, inventoryArtifact.baseline, inventoryArtifact.label);
  }
  for (const target of legacyTargets) {
    assertLegacyPcrTarget(root, target);
  }

  // The importer initializes only after every source, mapping, inventory, and
  // legacy PCR target has passed its lock-protected preflight.
  prepareInitDirectories(root);
  init({ root });
  let classificationChanged = false;
  for (const artifact of classificationArtifacts) {
    classificationChanged = writeArtifactIfChanged(root, artifact) || classificationChanged;
  }

  let createdPcrRecords = 0;
  let preservedPcrRecords = 0;
  for (const target of legacyTargets) {
    if (target.exists) {
      preservedPcrRecords += 1;
    } else {
      stageLegacyPcrDirectory(root, target);
      createdPcrRecords += 1;
    }
  }
  hooks.afterLegacyScaffolds?.({ root, mappingPath });

  let inventoryChanged = false;
  if (inventoryArtifact) {
    inventoryChanged = writeArtifactIfChanged(root, inventoryArtifact);
  }

  // Mapping is the commit marker. Revalidate its original baseline and every
  // installed classification source projection and referenced scaffold immediately
  // before installing any new legacy edge.
  hooks.beforeMappingCommit?.({ root, mappingPath });
  for (const artifact of classificationArtifacts) {
    assertInstalledArtifact(root, artifact);
  }
  assertFileSnapshot(root, mappingPath, existingMapping.snapshot, "CPC classification mapping");
  for (const target of legacyTargets) {
    assertLegacyPcrTarget(root, target);
  }
  if (inventoryArtifact) {
    const currentInventory = fileSnapshot(root, leafSlugsPath, inventoryArtifact.label);
    if (!currentInventory.exists || !currentInventory.bytes.equals(inventoryBytes!)) {
      throw new Error(`Legacy CPC identity inventory changed before mapping commit: ${leafSlugsPath}`);
    }
  }

  let mappingAction = "preserved_exact_bytes";
  let mappingChanged = false;
  if (mappingNeedsWrite) {
    commitFileFromBaseline(
      root,
      mappingPath,
      mappingBytes,
      existingMapping.snapshot,
      "CPC classification mapping",
    );
    mappingChanged = true;
    mappingAction = existingMapping.sourceText === null
      ? (legacyPlan ? "created_legacy_edges" : "created_empty")
      : "appended_legacy_edges";
  }

  const messages = [
    `CPC import mode: ${legacyScaffolds ? "legacy_leaf_pcr_scaffolds" : "classification_only"}.`,
    `Imported ${entries.length} CPC rows with ${nodes.length} nodes and ${leaves.length} leaf classes for CPC ${classificationVersion}.`,
    `Mapping action: ${mappingAction} (${mappingPath}).`,
  ];
  if (legacyPlan) {
    messages.push(
      `Legacy mappings appended: ${legacyPlan.appendedMappings.length}; PCR records created: ${createdPcrRecords}; preserved: ${preservedPcrRecords}; files created: ${createdPcrRecords * LEGACY_PCR_FILES.length}; already-mapped leaves skipped: ${leaves.length - legacyPlan.legacyLeaves.length}.`,
      "Do not use --legacy-scaffolds for new classification imports.",
    );
  } else {
    messages.push("PCR records created: 0; classification leaves do not define canonical PCR identity.");
  }
  if (classificationChanged || inventoryChanged || mappingChanged) {
    messages.push(
      "Coverage/catalog state: stale until npm run catalog:build regenerates source-fingerprinted artifacts.",
    );
  } else {
    messages.push("Coverage/catalog state: source inputs unchanged; verify with npm run catalog:check.");
  }
  messages.push("Next: review accepted mappings, then run npm run catalog:build in the target repository.");
  return messages;
}

export function importCpc(options: BuilderOptions = {}) {
  validateImportOptions(options);
  const legacyScaffolds = options["legacy-scaffolds"] === true;
  const classificationVersion = String(options["classification-version"] ?? "3.0");
  if (classificationVersion.length > 32 || !/^\d+(?:\.\d+)*$/u.test(classificationVersion)) {
    throw new Error(`Invalid CPC classification version: ${classificationVersion}`);
  }
  if (!options.source) {
    throw new Error(`--source is required when importing CPC ${classificationVersion}`);
  }
  const coverageSource = requireCoverageSourceDescriptor(classificationVersion);
  const source = path.resolve(String(options.source));
  if (path.extname(source).toLowerCase() !== ".csv") {
    throw new Error(`CPC source must be a CSV file: ${source}`);
  }

  // Validate the exact source bytes before creating repository state or calling init.
  const sourceBytes = readSourceFile(source);
  const entries = readCpcCsv(sourceBytes, classificationVersion);
  const { nodes, leaves } = buildCpcModel(entries);
  const root = rootFromOptions(options);
  if (legacyScaffolds) {
    const mappingPath = coverageSource.mappingPath;
    const preflightMapping = readExistingMapping({
      root,
      relativePath: mappingPath,
      classificationVersion,
      leafCodes: new Set(leaves.map((leaf) => leaf.code)),
    });
    assertLegacyScaffoldMapping(preflightMapping.document, mappingPath);
  }
  const hooks = options.__testHooks ?? {};
  const lock = acquireImportLock(root, classificationVersion, hooks);
  try {
    return importCpcWhileLocked({
      root,
      options,
      source,
      sourceBytes,
      entries,
      nodes,
      leaves,
      classificationVersion,
      coverageSource,
      legacyScaffolds,
    });
  } finally {
    releaseImportLock(lock, hooks);
  }
}

export const scaffoldCpc = importCpc;
