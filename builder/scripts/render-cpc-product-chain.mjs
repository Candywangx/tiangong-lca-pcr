import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  fsyncSync,
  lstatSync,
  openSync,
  readFileSync,
  realpathSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { TextDecoder } from "node:util";

import {
  getVerifiedPcrProjection,
  resolveClassification,
} from "../../packages/pcr-core/src/index.mjs";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  analyzeCpcProductChain,
  renderCpcProductChainReport,
} from "../lib/cpc-product-chain.mjs";
import { assertCpcProductChain } from "../lib/schema-contracts.mjs";

const REPOSITORY_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const FATAL_UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });
const READ_FLAGS =
  fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0) | (fsConstants.O_NONBLOCK ?? 0);
const WRITE_FLAGS =
  fsConstants.O_WRONLY
  | fsConstants.O_CREAT
  | fsConstants.O_EXCL
  | (fsConstants.O_NOFOLLOW ?? 0);

export const DEFAULT_SOURCE_PATH = "builder/planning/cpc-product-chain-pilot.yaml";
export const DEFAULT_REPORT_PATH = "builder/planning/cpc-product-chain-pilot.md";

function managedPath(root, relativePath, label) {
  const normalizedRoot = path.resolve(root);
  const normalizedRelative = path.posix.normalize(relativePath);
  if (
    normalizedRelative !== relativePath
    || path.posix.isAbsolute(relativePath)
    || relativePath === ".."
    || relativePath.startsWith("../")
    || relativePath.includes("\\")
    || relativePath.includes("\0")
  ) {
    throw new Error(`${label} path is not a safe repository-relative path: ${relativePath}`);
  }
  return path.join(normalizedRoot, ...relativePath.split("/"));
}

function assertDirectoryChain(root, directoryPath, label) {
  const normalizedRoot = path.resolve(root);
  const rootStats = lstatSync(normalizedRoot);
  if (rootStats.isSymbolicLink() || !rootStats.isDirectory()) {
    throw new Error(`${label} repository root is not a regular directory: ${normalizedRoot}`);
  }
  const relative = path.relative(normalizedRoot, directoryPath);
  let current = normalizedRoot;
  for (const segment of relative.split(path.sep).filter(Boolean)) {
    current = path.join(current, segment);
    const stats = lstatSync(current);
    if (stats.isSymbolicLink()) {
      throw new Error(`${label} parent contains a symbolic link: ${current}`);
    }
    if (!stats.isDirectory()) {
      throw new Error(`${label} parent is not a directory: ${current}`);
    }
  }
  const realRoot = realpathSync(normalizedRoot);
  const realDirectory = realpathSync(directoryPath);
  const contained = path.relative(realRoot, realDirectory);
  if (path.isAbsolute(contained) || contained === ".." || contained.startsWith(`..${path.sep}`)) {
    throw new Error(`${label} parent escapes the repository root: ${directoryPath}`);
  }
  return rootStats;
}

function regularFileSnapshot(root, relativePath, label, { allowMissing = false } = {}) {
  const filePath = managedPath(root, relativePath, label);
  assertDirectoryChain(root, path.dirname(filePath), label);
  let pathStats;
  try {
    pathStats = lstatSync(filePath);
  } catch (error) {
    if (allowMissing && error?.code === "ENOENT") return null;
    throw error;
  }
  if (pathStats.isSymbolicLink()) {
    throw new Error(`${label} path must not be a symbolic link: ${relativePath}`);
  }
  if (!pathStats.isFile()) {
    throw new Error(`${label} path must be a regular file: ${relativePath}`);
  }

  let descriptor;
  try {
    descriptor = openSync(filePath, READ_FLAGS);
    const opened = fstatSync(descriptor);
    const current = lstatSync(filePath);
    if (
      !opened.isFile()
      || opened.dev !== pathStats.dev
      || opened.ino !== pathStats.ino
      || opened.dev !== current.dev
      || opened.ino !== current.ino
    ) {
      throw new Error(`${label} path changed while it was being opened: ${relativePath}`);
    }
    return {
      bytes: readFileSync(descriptor),
      dev: opened.dev,
      ino: opened.ino,
    };
  } finally {
    if (descriptor !== undefined) closeSync(descriptor);
  }
}

function sameSnapshot(left, right) {
  return left === null
    ? right === null
    : right !== null
      && left.dev === right.dev
      && left.ino === right.ino
      && left.bytes.equals(right.bytes);
}

function temporaryRelativePath() {
  return path.posix.join(
    path.posix.dirname(DEFAULT_REPORT_PATH),
    `.${path.posix.basename(DEFAULT_REPORT_PATH)}.tmp`,
  );
}

function writeReportAtomically(root, report) {
  const outputPath = managedPath(root, DEFAULT_REPORT_PATH, "CPC product-chain report");
  const temporaryPath = managedPath(
    root,
    temporaryRelativePath(),
    "CPC product-chain temporary report",
  );
  const baseline = regularFileSnapshot(
    root,
    DEFAULT_REPORT_PATH,
    "CPC product-chain report",
    { allowMissing: true },
  );
  const existingTemporary = regularFileSnapshot(
    root,
    temporaryRelativePath(),
    "CPC product-chain temporary report",
    { allowMissing: true },
  );
  if (existingTemporary) {
    throw new Error(`CPC product-chain temporary report already exists: ${temporaryRelativePath()}`);
  }

  let descriptor;
  let temporaryIdentity;
  let ownsTemporary = false;
  try {
    descriptor = openSync(temporaryPath, WRITE_FLAGS, 0o600);
    ownsTemporary = true;
    temporaryIdentity = fstatSync(descriptor);
    if (!temporaryIdentity.isFile()) {
      throw new Error(`CPC product-chain temporary report is not a regular file: ${temporaryRelativePath()}`);
    }
    writeFileSync(descriptor, report, "utf8");
    fsyncSync(descriptor);

    const currentTemporary = lstatSync(temporaryPath);
    if (
      currentTemporary.isSymbolicLink()
      || !currentTemporary.isFile()
      || currentTemporary.dev !== temporaryIdentity.dev
      || currentTemporary.ino !== temporaryIdentity.ino
    ) {
      throw new Error(`CPC product-chain temporary report changed before publication: ${temporaryRelativePath()}`);
    }
    const currentOutput = regularFileSnapshot(
      root,
      DEFAULT_REPORT_PATH,
      "CPC product-chain report",
      { allowMissing: true },
    );
    if (!sameSnapshot(baseline, currentOutput)) {
      throw new Error(`CPC product-chain report changed before publication: ${DEFAULT_REPORT_PATH}`);
    }
    assertDirectoryChain(root, path.dirname(outputPath), "CPC product-chain report");
    renameSync(temporaryPath, outputPath);
    ownsTemporary = false;
  } finally {
    if (descriptor !== undefined) closeSync(descriptor);
    if (ownsTemporary) {
      try {
        const current = lstatSync(temporaryPath);
        if (current.dev === temporaryIdentity?.dev && current.ino === temporaryIdentity?.ino) {
          unlinkSync(temporaryPath);
        }
      } catch (error) {
        if (error?.code !== "ENOENT") throw error;
      }
    }
  }
}

function projectionField(structured, fieldPath) {
  let current = structured;
  for (const segment of fieldPath.split(".")) {
    if (current === null || typeof current !== "object" || !Object.hasOwn(current, segment)) {
      throw new Error(`PCR evidence field path is missing at ${fieldPath}: ${segment}`);
    }
    current = current[segment];
  }
  if (typeof current !== "string" || current.trim().length === 0) {
    throw new Error(`PCR evidence field path does not resolve to a non-empty string: ${fieldPath}`);
  }
  return current;
}

function projectionInventoryField(structured, locator) {
  const prefix = `process_inventory.${locator.process_id}.${locator.direction}.${locator.flow_type}`;
  const processEntry = structured.process_inventory?.find(
    (candidate) => candidate.id === locator.process_id,
  );
  if (!processEntry) {
    throw new Error(`PCR evidence locator is missing process at ${prefix}`);
  }
  const rows = processEntry[locator.direction]?.[locator.flow_type];
  if (!Array.isArray(rows)) {
    throw new Error(`PCR evidence locator is missing inventory collection at ${prefix}`);
  }
  const row = rows.find((candidate) => candidate.row_id === locator.row_id);
  if (!row) {
    throw new Error(`PCR evidence locator is missing row at ${prefix}.${locator.row_id}`);
  }
  if (!Object.hasOwn(row, locator.field)) {
    throw new Error(
      `PCR evidence locator is missing field at ${prefix}.${locator.row_id}.${locator.field}`,
    );
  }
  const value = row[locator.field];
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(
      `PCR evidence locator field is not a non-empty string at ${prefix}.${locator.row_id}.${locator.field}`,
    );
  }
  return value;
}

function createResolvers(root) {
  const snapshots = new Map();
  const verifiedSnapshot = (pcrId) => {
    if (!snapshots.has(pcrId)) {
      snapshots.set(pcrId, getVerifiedPcrProjection({ root, pcrId }));
    }
    return snapshots.get(pcrId);
  };

  return {
    resolveNode({ node }) {
      const resolution = resolveClassification({
        root,
        system: "cpc",
        version: "3.0",
        code: node.code,
      });
      let pcr = null;
      if (resolution.mapping) {
        const snapshot = verifiedSnapshot(resolution.mapping.pcr_id);
        pcr = {
          ...structuredClone(snapshot.pcr),
          readiness: structuredClone(snapshot.readiness),
        };
      }
      return {
        code: String(resolution.coverage.code),
        label: resolution.coverage.label,
        coverage_status: resolution.coverage_status,
        pcr,
      };
    },
    resolvePcrEvidence({ evidence }) {
      const snapshot = verifiedSnapshot(evidence.pcr_id);
      const locator = structuredClone(evidence.locator);
      const value = locator.kind === "field"
        ? projectionField(snapshot.structured, locator.field_path)
        : projectionInventoryField(snapshot.structured, locator);
      return {
        pcr_id: snapshot.pcr.id,
        source_path: snapshot.source_structured,
        locator,
        value,
      };
    },
  };
}

export function buildOrCheckCpcProductChain(root, { checkOnly = false } = {}) {
  const source = regularFileSnapshot(
    root,
    DEFAULT_SOURCE_PATH,
    "CPC product-chain source",
  );
  const document = parseYaml(FATAL_UTF8_DECODER.decode(source.bytes));
  assertCpcProductChain(document, { source: DEFAULT_SOURCE_PATH });
  const analysis = analyzeCpcProductChain(document, createResolvers(root));
  const report = renderCpcProductChainReport(analysis);

  if (checkOnly) {
    let current;
    try {
      current = regularFileSnapshot(
        root,
        DEFAULT_REPORT_PATH,
        "CPC product-chain report",
      );
    } catch (error) {
      if (error?.code === "ENOENT") {
        throw new Error(`CPC product-chain report is missing: ${DEFAULT_REPORT_PATH}`);
      }
      throw error;
    }
    if (!current.bytes.equals(Buffer.from(report, "utf8"))) {
      throw new Error(`CPC product-chain report is stale: ${DEFAULT_REPORT_PATH}`);
    }
  } else {
    writeReportAtomically(root, report);
  }

  return {
    source_path: DEFAULT_SOURCE_PATH,
    report_path: DEFAULT_REPORT_PATH,
    check_only: checkOnly,
    analysis,
    report,
  };
}

function run() {
  const args = process.argv.slice(2);
  if (args.length > 1 || (args.length === 1 && args[0] !== "--check")) {
    throw new Error(`Unexpected CPC product-chain argument: ${args.join(" ")}`);
  }
  const checkOnly = args.length === 1;
  const result = buildOrCheckCpcProductChain(REPOSITORY_ROOT, { checkOnly });
  process.stdout.write(
    `CPC product-chain report ${checkOnly ? "is current" : "was rebuilt"}: ${result.report_path}\n`,
  );
}

const isDirectExecution =
  process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isDirectExecution) {
  try {
    run();
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
