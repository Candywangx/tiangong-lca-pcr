import { spawnSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { lstatSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { discoverSuites, FULL_CORPUS_TEST, REPOSITORY_ROOT, runTestFiles, selectSuite } from "./suites.ts";
import type { SuiteRunResult } from "./suites.ts";

export const SHARD_NAMES = ["harness", "core", "builder", "consumer", "docs", "engineering", "corpus", "general"] as const;
export type ShardName = typeof SHARD_NAMES[number];
export interface TestIdentity { readonly path: string; readonly sha256: string }
export interface QualificationPlan {
  readonly sourceHead: string;
  readonly sourceHash: string;
  readonly configurationHash: string;
  readonly nodeVersion: string;
  readonly tests: readonly TestIdentity[];
  readonly shards: Readonly<Record<ShardName, readonly string[]>>;
}
export interface QualificationDocument {
  readonly schemaVersion: 1;
  readonly qualificationId: string;
  readonly planHash: string;
  readonly plan: QualificationPlan;
}
export interface ShardReceipt {
  readonly schemaVersion: 1;
  readonly qualificationId: string;
  readonly planHash: string;
  readonly sourceHead: string;
  readonly sourceHash: string;
  readonly configurationHash: string;
  readonly shard: ShardName;
  readonly tests: readonly TestIdentity[];
  readonly instrumentation: "v8-requested" | "none";
  readonly execution: "node-test" | "empty-shard";
  readonly startedAt: string;
  readonly completedAt: string;
  readonly result: SuiteRunResult;
}

const POLICY_VERSION = "isolated-qualification-shards-v1";
const CONFIGURATION_PATHS = [".nvmrc", "package.json", "package-lock.json", "product-release.json", "config/coverage.json", "scripts/engineering/suites.ts", "scripts/engineering/qualification-plan.ts"];
function sha256(value: string | Buffer): string { return createHash("sha256").update(value).digest("hex"); }
function canonical(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value !== null && typeof value === "object") {
    return `{${Object.entries(value).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([key, entry]) => `${JSON.stringify(key)}:${canonical(entry)}`).join(",")}}`;
  }
  const encoded = JSON.stringify(value);
  if (encoded === undefined) throw new Error("Non-JSON qualification value");
  return encoded;
}
function git(root: string, args: readonly string[]): string {
  const result = spawnSync("git", ["-C", root, ...args], { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
  if (result.error !== undefined) throw result.error;
  if (result.status !== 0) throw new Error(`Cannot identify qualification source: ${result.stderr.trim()}`);
  return result.stdout;
}
function fileIdentity(root: string, filename: string): string {
  const file = path.join(root, filename), stat = lstatSync(file, { throwIfNoEntry: false });
  if (stat === undefined) return "missing";
  if (stat.isSymbolicLink()) throw new Error(`Qualification source must not be a symbolic link: ${filename}`);
  if (!stat.isFile()) throw new Error(`Qualification source is not a file: ${filename}`);
  return sha256(readFileSync(file));
}

/** Fixed repository ownership boundaries; callers never provide test path subsets. */
export function partitionTests(files: readonly string[]): Readonly<Record<ShardName, readonly string[]>> {
  const shards: Record<ShardName, string[]> = { harness: [], core: [], builder: [], consumer: [], docs: [], engineering: [], corpus: [], general: [] };
  const seen = new Set<string>();
  for (const file of [...files].sort()) {
    if (seen.has(file)) throw new Error(`Duplicate qualification test: ${file}`);
    seen.add(file);
    const shard: ShardName = file === FULL_CORPUS_TEST ? "corpus"
      : file.startsWith("builder/goal-harness/") || file.startsWith("builder/cli/goal") ? "harness"
      : file.startsWith("packages/pcr-core/") ? "core"
      : file.startsWith("builder/") ? "builder"
      : file.startsWith("packages/tiangong-pcr-cli/") || file.startsWith("packages/pcr-viewer/") || file.startsWith("tests/browser/") ? "consumer"
      : file.startsWith("packages/pcr-docs/") ? "docs"
      : file.startsWith("scripts/engineering/") ? "engineering" : "general";
    shards[shard].push(file);
  }
  for (const shard of SHARD_NAMES) Object.freeze(shards[shard]);
  return Object.freeze(shards);
}

/** Deterministic content; the separate document invocation ID prevents receipt reuse. */
export function createQualificationPlan(root: string): QualificationPlan {
  const files = selectSuite(discoverSuites(root), "all");
  const sourcePaths = [...new Set(git(root, ["ls-files", "--cached", "--others", "--exclude-standard", "-z"]).split("\0").filter(Boolean))].sort();
  const sourceHash = sha256(canonical(sourcePaths.map(filename => ({ path: filename, identity: fileIdentity(root, filename) }))));
  const configurationHash = sha256(canonical({ policy: POLICY_VERSION, shards: SHARD_NAMES, nodeVersion: process.version,
    configuration: CONFIGURATION_PATHS.map(filename => ({ path: filename, identity: fileIdentity(root, filename) })) }));
  const sourceHead = git(root, ["rev-parse", "HEAD"]).trim();
  if (!/^[a-f0-9]{40,64}$/.test(sourceHead)) throw new Error("Invalid source HEAD");
  return { sourceHead, sourceHash, configurationHash, nodeVersion: process.version,
    tests: files.map(filename => ({ path: filename, sha256: sha256(readFileSync(path.join(root, filename))) })), shards: partitionTests(files) };
}

export function writeQualificationPlan(root: string, filename: string): QualificationDocument {
  const plan = createQualificationPlan(root);
  const document: QualificationDocument = { schemaVersion: 1, qualificationId: randomUUID(), planHash: sha256(canonical(plan)), plan };
  mkdirSync(path.dirname(path.resolve(filename)), { recursive: true });
  writeFileSync(filename, `${JSON.stringify(document, null, 2)}\n`, { flag: "wx" });
  return document;
}
function record(value: unknown, keys: readonly string[], label: string): Record<string, unknown> {
  if (value === null || typeof value !== "object" || Array.isArray(value) || canonical(Object.keys(value).sort()) !== canonical([...keys].sort())) {
    throw new Error(`Invalid ${label} fields`);
  }
  return value as Record<string, unknown>;
}
function readJson(filename: string): unknown {
  const stat = lstatSync(filename);
  if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`Qualification artifact must be a regular file: ${filename}`);
  return JSON.parse(readFileSync(filename, "utf8")) as unknown;
}
export function readCurrentQualificationPlan(root: string, filename: string): QualificationDocument {
  const value = record(readJson(filename), ["schemaVersion", "qualificationId", "planHash", "plan"], "plan document");
  if (value["schemaVersion"] !== 1 || typeof value["qualificationId"] !== "string" || !/^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/.test(value["qualificationId"])) {
    throw new Error("Invalid qualification invocation identity");
  }
  const plan = createQualificationPlan(root), planHash = sha256(canonical(plan));
  if (canonical(value["plan"]) !== canonical(plan) || value["planHash"] !== planHash) throw new Error("Stale or modified qualification plan: source, configuration, or complete test membership differs");
  return { schemaVersion: 1, qualificationId: value["qualificationId"], planHash, plan };
}
function shardName(value: string): ShardName {
  const name = SHARD_NAMES.find(shard => shard === value);
  if (name === undefined) throw new Error(`Unknown qualification shard: ${value}`);
  return name;
}
function identities(plan: QualificationPlan, shard: ShardName): readonly TestIdentity[] {
  const selected = new Set(plan.shards[shard]);
  return plan.tests.filter(test => selected.has(test.path));
}

/** Receipts establish execution only. V8 ranges and source-accounted coverage remain separate evidence. */
export async function runQualificationShard(root: string, planFile: string, selectedShard: string, receiptFile: string): Promise<SuiteRunResult> {
  const shard = shardName(selectedShard), document = readCurrentQualificationPlan(root, planFile);
  if (lstatSync(receiptFile, { throwIfNoEntry: false }) !== undefined) throw new Error(`Receipt already exists: ${receiptFile}`);
  const files = document.plan.shards[shard], startedAt = new Date().toISOString();
  const instrumentation = process.env["NODE_V8_COVERAGE"] ? "v8-requested" : "none";
  const result = files.length === 0 ? { exitCode: 0, signal: null } : await runTestFiles(root, files.map(file => path.resolve(root, file)));
  if (result.exitCode !== 0 || result.signal !== null) return result;
  const after = readCurrentQualificationPlan(root, planFile);
  if (after.qualificationId !== document.qualificationId) throw new Error("Qualification invocation changed during execution");
  const receipt: ShardReceipt = { schemaVersion: 1, qualificationId: document.qualificationId, planHash: document.planHash,
    sourceHead: document.plan.sourceHead, sourceHash: document.plan.sourceHash, configurationHash: document.plan.configurationHash,
    shard, tests: identities(document.plan, shard), instrumentation, execution: files.length === 0 ? "empty-shard" : "node-test",
    startedAt, completedAt: new Date().toISOString(), result };
  mkdirSync(path.dirname(path.resolve(receiptFile)), { recursive: true });
  writeFileSync(receiptFile, `${JSON.stringify(receipt, null, 2)}\n`, { flag: "wx" });
  return result;
}
function receiptFiles(directory: string): readonly string[] {
  const stat = lstatSync(directory);
  if (!stat.isDirectory() || stat.isSymbolicLink()) throw new Error(`Receipts must use a regular directory: ${directory}`);
  return readdirSync(directory).sort().flatMap(name => {
    const file = path.join(directory, name), entry = lstatSync(file);
    if (entry.isSymbolicLink()) throw new Error(`Receipt must not be a symbolic link: ${file}`);
    if (entry.isDirectory()) return receiptFiles(file);
    if (!entry.isFile() || !name.endsWith(".json")) throw new Error(`Foreign receipt artifact: ${file}`);
    return [file];
  });
}
export interface QualificationVerification {
  readonly qualificationId: string;
  readonly planHash: string;
  readonly sourceHead: string;
  readonly shards: readonly ShardName[];
  readonly testCount: number;
  readonly status: "passed";
  readonly coverageEvidence: "separate-raw-measurements-required";
  readonly instrumentation: Readonly<Record<ShardName, "none" | "v8-requested">>;
}
export function verifyQualificationReceipts(root: string, planFile: string, directory: string): QualificationVerification {
  const document = readCurrentQualificationPlan(root, planFile), seen = new Set<ShardName>();
  const instrumentation: Record<ShardName, "none" | "v8-requested"> = { harness:"none", core:"none", builder:"none", consumer:"none", docs:"none", engineering:"none", corpus:"none", general:"none" };
  for (const filename of receiptFiles(directory)) {
    const value = record(readJson(filename), ["schemaVersion", "qualificationId", "planHash", "sourceHead", "sourceHash", "configurationHash", "shard", "tests", "instrumentation", "execution", "startedAt", "completedAt", "result"], "shard receipt");
    if (typeof value["shard"] !== "string") throw new Error("Invalid receipt shard");
    const shard = shardName(value["shard"]);
    if (seen.has(shard)) throw new Error(`Duplicate receipt shard: ${shard}`);
    seen.add(shard);
    const expected = { schemaVersion: 1, qualificationId: document.qualificationId, planHash: document.planHash, sourceHead: document.plan.sourceHead,
      sourceHash: document.plan.sourceHash, configurationHash: document.plan.configurationHash, shard, tests: identities(document.plan, shard),
      execution: document.plan.shards[shard].length === 0 ? "empty-shard" : "node-test", result: { exitCode: 0, signal: null } };
    for (const [key, entry] of Object.entries(expected)) if (canonical(value[key]) !== canonical(entry)) throw new Error(`Invalid or stale ${shard} receipt: ${key}`);
    if (value["instrumentation"] !== "none" && value["instrumentation"] !== "v8-requested") throw new Error(`Invalid ${shard} instrumentation disposition`);
    instrumentation[shard] = value["instrumentation"];
    for (const key of ["startedAt", "completedAt"]) {
      const timestamp = value[key];
      if (typeof timestamp !== "string" || !Number.isFinite(Date.parse(timestamp)) || new Date(timestamp).toISOString() !== timestamp) throw new Error(`Invalid ${shard} ${key}`);
    }
    if (String(value["completedAt"]) < String(value["startedAt"])) throw new Error(`Invalid ${shard} run interval`);
  }
  const missing = SHARD_NAMES.filter(shard => !seen.has(shard));
  if (missing.length !== 0) throw new Error(`Missing qualification receipts: ${missing.join(", ")}`);
  return { qualificationId: document.qualificationId, planHash: document.planHash, sourceHead: document.plan.sourceHead,
    shards: SHARD_NAMES, testCount: document.plan.tests.length, status: "passed", coverageEvidence: "separate-raw-measurements-required", instrumentation };
}

const USAGE = "Usage: node scripts/engineering/qualification-plan.ts plan <new-plan.json> | run <plan.json> <shard> <new-receipt.json> | verify <plan.json> <receipts-directory>";
export async function main(argv: readonly string[], root = REPOSITORY_ROOT): Promise<SuiteRunResult> {
  try {
    if (argv.length === 1 && (argv[0] === "--help" || argv[0] === "-h")) {
      console.log(`${USAGE}\nRequired shards: ${SHARD_NAMES.join(", ")}. Empty shards require an explicit successful no-op receipt.\nPlans and receipts must be stored outside authored source (for example .reports/qualification). Receipts prove execution; coverage requires separate raw measurements.`);
      return { exitCode: 0, signal: null };
    }
    if (argv[0] === "plan" && argv.length === 2 && argv[1] !== undefined) {
      const document = writeQualificationPlan(root, argv[1]);
      console.log(JSON.stringify({ qualificationId: document.qualificationId, planHash: document.planHash, sourceHead: document.plan.sourceHead,
        shards: SHARD_NAMES.map(shard => ({ shard, testCount: document.plan.shards[shard].length })) }));
      return { exitCode: 0, signal: null };
    }
    if (argv[0] === "run" && argv.length === 4 && argv[1] !== undefined && argv[2] !== undefined && argv[3] !== undefined) return await runQualificationShard(root, argv[1], argv[2], argv[3]);
    if (argv[0] === "verify" && argv.length === 3 && argv[1] !== undefined && argv[2] !== undefined) {
      console.log(JSON.stringify(verifyQualificationReceipts(root, argv[1], argv[2])));
      return { exitCode: 0, signal: null };
    }
    throw new Error(USAGE);
  } catch (error: unknown) {
    console.error(error instanceof Error ? error.message : String(error));
    return { exitCode: 2, signal: null };
  }
}
if (process.argv[1] !== undefined && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const result = await main(process.argv.slice(2));
  if (result.signal !== null) process.kill(process.pid, result.signal);
  else process.exitCode = result.exitCode ?? 1;
}
