import { spawn } from "node:child_process";
import { existsSync, lstatSync, mkdtempSync, readdirSync, realpathSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const SUITE_NAMES = [
  "unit", "contracts", "integration", "recovery", "docs", "offline", "product", "engineering", "browser",
] as const;
export type SuiteName = typeof SUITE_NAMES[number];
export type SuiteSelector = SuiteName | "all" | "root" | "portable-offline";
export type SuiteInventory = Readonly<Record<SuiteName, readonly string[]>>;

export const SUITE_DESCRIPTIONS: Readonly<Record<SuiteName, string>> = {
  unit: "Focused parsing, policy, calculation, and deterministic transformation tests.",
  contracts: "Schemas and compatibility contracts across authored and consumed data.",
  integration: "CLI, filesystem, Git, orchestration, and cross-component behavior.",
  recovery: "Interrupted transactions, journal replay, locks, and recovery behavior.",
  docs: "Public documentation export, rendering, storage, and hosting contracts.",
  offline: "Offline SQLite distribution, packaging, and network-free installation.",
  product: "Product identity, npm release, publication, and sealed website artifacts.",
  engineering: "Native TypeScript engineering tools and their command boundaries.",
  browser: "Compiled browser assets and real Chromium, Firefox and WebKit interactions.",
};

// Reviewed legacy membership uses extension-free paths so gradual .mjs -> .ts
// migration preserves suites. New tests outside docs/engineering must declare a
// suite as <name>.<suite>.test.<extension> or receive an explicit entry here.
const LEGACY_TESTS: Readonly<Partial<Record<SuiteName, readonly string[]>>> = {
  unit: [
    "builder/lib/cpc-product-chain.test",
    "builder/lib/lifecycle-policy.test",
    "builder/lib/markdown-table.test",
    "builder/goal-harness/errors.test",
    "builder/goal-harness/report-assembler.test",
    "builder/goal-harness/review-assessment.test",
    "packages/pcr-core/languages.test",
    "packages/pcr-core/projection-integrity.test",
  ],
  contracts: [
    "builder/lib/cross-layer-contract.test",
    "builder/lib/schema-contracts.test",
    "builder/lib/vocabulary-registry.test",
    "builder/goal-harness/author-contract.test",
    "builder/goal-harness/author-submission.test",
    "builder/goal-harness/phase2-dispatch-contract.test",
    "builder/goal-harness/phase2-prepared-contract.test",
    "builder/goal-harness/prompt-compiler.test",
    "builder/goal-harness/quality-gates.test",
    "packages/pcr-core/schema-contracts.test",
  ],
  integration: [
    "builder/cli/goal-prepare-report.test",
    "builder/cli/goal.test",
    "builder/cli/index.test",
    "builder/cli/pcr-check.test",
    "builder/lib/atomic-flow-lint.test",
    "builder/lib/cpc-scaffold.test",
    "builder/lib/lint-path-safety.test",
    "builder/lib/lint-report.test",
    "builder/lib/manifest-lifecycle-boundaries.test",
    "builder/lib/markdown-projection.test",
    "builder/lib/measurement-consistency.test",
    "builder/lib/pcr-document-history.test",
    "builder/lib/pcr-optional-language-lifecycle.test",
    "builder/lib/pcr-paths.test",
    "builder/lib/published-revision-state.test",
    "builder/lib/shared-materials.test",
    "builder/scripts/build-catalog.test",
    "builder/scripts/build-pcr-id-aliases.test",
    "builder/scripts/render-cpc-product-chain.test",
    "builder/goal-harness/app-server-daemon.test",
    "builder/goal-harness/app-server.test",
    "builder/goal-harness/author-review.test",
    "builder/goal-harness/boundary-review.test",
    "builder/goal-harness/commands.test",
    "builder/goal-harness/coordinator-hold.test",
    "builder/goal-harness/core.test",
    "builder/goal-harness/derived-cache.test",
    "builder/goal-harness/evidence-audit.test",
    "builder/goal-harness/git-safety.test",
    "builder/goal-harness/goal-cache.test",
    "builder/goal-harness/integration-finalization.test",
    "builder/goal-harness/integration.test",
    "builder/goal-harness/model-trial.test",
    "builder/goal-harness/orchestrator.test",
    "builder/goal-harness/planner.test",
    "builder/goal-harness/pinned-viewer-publisher-worker.test",
    "builder/goal-harness/prepared-intake.test",
    "builder/goal-harness/receipt-integrity-race.test",
    "builder/goal-harness/receipt-integrity.test",
    "builder/goal-harness/report-preparation.test",
    "builder/goal-harness/runtime-baseline.test",
    "builder/goal-harness/source-diagnostics.test",
    "builder/goal-harness/source-html.test",
    "builder/goal-harness/tool-auth-classification.test",
    "builder/goal-harness/trial-usage.test",
    "builder/goal-harness/uuid-enrichment-audit.test",
    "builder/goal-harness/uuid-search-receipts.test",
    "builder/goal-harness/viewer-publication.test",
    "builder/goal-harness/viewer-test-fixture.test",
    "packages/pcr-core/agentic-consumption.test",
    "packages/pcr-core/classification-coverage.test",
    "packages/pcr-core/document-bundle.test",
    "packages/pcr-core/index.test",
    "packages/pcr-core/module-document-bundle.test",
    "packages/pcr-core/pcr-id-aliases.test",
    "packages/pcr-viewer/viewer-build.test",
    "packages/tiangong-pcr-cli/agentic-cli.test",
    "packages/tiangong-pcr-cli/cli.test",
  ],
  recovery: [
    "builder/lib/catalog-artifact-transaction.test",
    "builder/lib/pcr-directory-transaction.test",
    "builder/goal-harness/event-store.test",
    "builder/goal-harness/lock.test",
    "builder/goal-harness/reconciliation.test",
    "builder/goal-harness/repository-coordinator.test",
    "builder/goal-harness/session-recovery.test",
    "packages/pcr-viewer/viewer-snapshot.test",
  ],
  docs: [
    "packages/pcr-docs/scripts/build-storage.test",
    "packages/pcr-docs/scripts/export-size.test",
    "packages/pcr-docs/scripts/generate.test",
    "packages/pcr-docs/scripts/hosting-contract.test",
    "packages/pcr-docs/scripts/language-policy.test",
    "packages/pcr-docs/scripts/markdown.test",
    "packages/pcr-docs/scripts/resource-budget.test",
    "packages/pcr-docs/scripts/source-history.test",
    "packages/pcr-docs/scripts/summaries.test",
  ],
  offline: ["packages/pcr-core/offline-library.test", "packages/pcr-core/full-corpus.offline.test"],
  product: [
    "builder/scripts/npm-release.test",
    "builder/scripts/product-identity.test",
    "builder/scripts/product-publish.test",
    "builder/scripts/product-release.test",
    "builder/scripts/product-web-materialize.test",
    "builder/scripts/product-web.test",
  ],
};

const TEST_EXTENSIONS = new Set([".js", ".mjs", ".cjs", ".ts", ".mts", ".cts"]);
const IGNORED_DIRECTORY_NAMES = new Set([".git", "node_modules", ".worktrees", ".superpowers"]);
const IGNORED_PATHS = new Set([
  "dist", "coverage", ".reports", ".edgeone", ".docpact/runs", "library/.pcr-builder-state",
  "packages/pcr-docs/.generated", "packages/pcr-docs/.next", "packages/pcr-docs/out",
  "packages/pcr-docs/public/generated",
]);

function isTestFilename(name: string): boolean {
  return /\.(?:test|spec)(?:\.|$)|^test(?:[-.]|$)|[-_]test(?:\.|$)/.test(name);
}

function isIgnoredDirectory(relativePath: string, name: string): boolean {
  return IGNORED_DIRECTORY_NAMES.has(name) || IGNORED_PATHS.has(relativePath) ||
    (relativePath.startsWith("packages/pcr-docs/") &&
      /^(?:\.generated-stage-|out\.stage-|out\.prev-)/.test(name));
}

/** Read source tests recursively; generated outputs and dependency copies are excluded. */
export function discoverTestFiles(root: string): readonly string[] {
  const files: string[] = [];
  function visit(relativeDirectory: string): void {
    for (const entry of readdirSync(path.join(root, relativeDirectory), { withFileTypes: true })) {
      const relativePath = relativeDirectory ? `${relativeDirectory}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        if (!isIgnoredDirectory(relativePath, entry.name)) visit(relativePath);
      } else if (entry.isSymbolicLink() && !isIgnoredDirectory(relativePath, entry.name) &&
        statSync(path.join(root, relativePath)).isDirectory()) {
        throw new Error(`Source directory must not be a symbolic link: ${relativePath}`);
      } else if (relativePath !== "tsconfig.test.json" && isTestFilename(entry.name)) {
        if (!entry.isFile()) throw new Error(`Test must be a regular file: ${relativePath}`);
        files.push(relativePath);
      }
    }
  }
  visit("");
  return Object.freeze(files.sort());
}

/** Every discovered test receives exactly one base suite, or discovery fails. */
export function classifyTestFiles(files: readonly string[]): SuiteInventory {
  const inventory: Record<SuiteName, string[]> = {
    unit: [], contracts: [], integration: [], recovery: [], docs: [], offline: [], product: [], engineering: [], browser: [],
  };
  const seen = new Set<string>();
  const seenStems = new Set<string>();
  for (const file of [...files].sort()) {
    if (path.posix.isAbsolute(file) || file.split("/").some(part => part === ".." || part === "." || part === "")) {
      throw new Error(`Test path must be repository-relative: ${file}`);
    }
    if (seen.has(file)) throw new Error(`Duplicate test path: ${file}`);
    seen.add(file);
    const extension = path.posix.extname(file);
    if (!TEST_EXTENSIONS.has(extension)) throw new Error(`Unsupported test extension: ${file}`);
    const stem = file.slice(0, -extension.length);
    if (seenStems.has(stem)) throw new Error(`Duplicate test implementations: ${stem}`);
    seenStems.add(stem);
    const candidates = SUITE_NAMES.filter(suite => {
      if (LEGACY_TESTS[suite]?.includes(stem)) return true;
      if (suite === "docs" && file.startsWith("packages/pcr-docs/")) return true;
      if (suite === "engineering" && file.startsWith("scripts/engineering/")) return true;
      return path.posix.basename(stem).endsWith(`.${suite}.test`) ||
        path.posix.basename(stem).endsWith(`.${suite}.spec`);
    });
    const [suite] = candidates;
    if (candidates.length > 1) throw new Error(`Multiple suites classify ${file}: ${candidates.join(", ")}`);
    if (suite === undefined) {
      throw new Error(`Unclassified test: ${file}. Declare <name>.<suite>.test.<extension> or review its explicit suite membership in scripts/engineering/suites.ts.`);
    }
    inventory[suite].push(file);
  }
  for (const suite of SUITE_NAMES) Object.freeze(inventory[suite]);
  return Object.freeze(inventory);
}

/** Removing a registered test requires reviewing and retiring its membership. */
export function validateRegisteredTests(files: readonly string[]): void {
  const stems = new Set(files.map(file => file.slice(0, -path.posix.extname(file).length)));
  const missing = SUITE_NAMES.flatMap(suite => LEGACY_TESTS[suite] ?? []).filter(stem => !stems.has(stem)).sort();
  if (missing.length > 0) {
    throw new Error(`Registered tests are missing; review their retirement in scripts/engineering/suites.ts:\n${missing.join("\n")}`);
  }
}

export function discoverSuites(root: string): SuiteInventory {
  const files = discoverTestFiles(root);
  // The installed tool knows its own complete repository. Independent fixture
  // roots may intentionally contain only a few tests and use the same classifier.
  if (realpathSync(root) === realpathSync(REPOSITORY_ROOT)) validateRegisteredTests(files);
  return classifyTestFiles(files);
}

export const FULL_CORPUS_TEST = "packages/pcr-core/full-corpus.offline.test.ts";
export const PORTABLE_OFFLINE_DISPOSITION = {
  excludedTest: FULL_CORPUS_TEST,
  reason: "The complete repository corpus is qualified separately by the mandatory Linux corpus shard; portable offline runs exercise bounded independent fixtures.",
} as const;

export function selectSuite(inventory: SuiteInventory, selector: string): readonly string[] {
  if (selector === "portable-offline") {
    return Object.freeze(inventory.offline.filter(file => file !== FULL_CORPUS_TEST));
  }
  if (selector === "all" || selector === "root") {
    return Object.freeze(SUITE_NAMES.flatMap(suite => inventory[suite]).sort());
  }
  const suite = SUITE_NAMES.find(name => name === selector);
  if (suite === undefined) throw new Error(`Unknown suite: ${selector}. Choose ${SUITE_NAMES.join(", ")}, all, root, or portable-offline.`);
  return inventory[suite];
}

export interface SuiteRunResult {
  readonly exitCode: number | null;
  readonly signal: NodeJS.Signals | null;
}

/** Run explicit paths without shell globbing, preserving Node's per-file isolation. */
export async function runSuite(root: string, selector: string): Promise<SuiteRunResult> {
  const files = selectSuite(discoverSuites(root), selector);
  if (files.length === 0) throw new Error(`Suite contains no tests: ${selector}`);
  return runTestFiles(root, files.map(file => path.resolve(root, file)));
}

/** Execute only current authored engineering members after the separate compiler step. */
export async function runEmittedSuite(root: string, selector: string): Promise<SuiteRunResult> {
  if (selector !== "engineering") throw new Error("Emitted suite supports engineering only.");
  const authored = selectSuite(discoverSuites(root), selector);
  if (authored.length === 0) throw new Error(`Suite contains no tests: ${selector}`);
  const files = authored.map(source => {
    if (!source.endsWith(".ts")) throw new Error(`Emitted engineering test requires authored .ts source: ${source}`);
    const file = path.resolve(root, "dist/test-engineering", source.replace(/\.ts$/u, ".js"));
    const stat = lstatSync(file, { throwIfNoEntry: false });
    if (!stat?.isFile() || stat.isSymbolicLink()) throw new Error(`Required emitted test is missing or not regular: ${file}`);
    return file;
  });
  return runTestFiles(root, files, ["--no-strip-types"]);
}

export async function runTestFiles(root: string, files: readonly string[], flags: readonly string[] = []): Promise<SuiteRunResult> {
  // macOS exposes /var as an OS alias. Canonicalize only this runner-owned
  // temporary root; application inputs must still satisfy their no-follow rules.
  const temporaryRoot = mkdtempSync(path.join(realpathSync(tmpdir()), "pcr-test-suite-"));
  try {
    const environment: NodeJS.ProcessEnv = { ...process.env, TMPDIR: temporaryRoot, TEMP: temporaryRoot, TMP: temporaryRoot };
    // A suite invoked by a test must launch an independent runner. Inherited
    // Node test context otherwise makes --test skip execution and report success.
    delete environment.NODE_TEST_CONTEXT;
    const child = spawn(process.execPath, [...flags, "--test", "--", ...files], {
      cwd: root,
      stdio: "inherit",
      env: environment,
    });
    let receivedSignal: NodeJS.Signals | null = null;
    const forwardInterrupt = (): void => { receivedSignal = "SIGINT"; child.kill("SIGINT"); };
    const forwardTerminate = (): void => { receivedSignal = "SIGTERM"; child.kill("SIGTERM"); };
    process.on("SIGINT", forwardInterrupt);
    process.on("SIGTERM", forwardTerminate);
    try {
      return await new Promise<SuiteRunResult>((resolve, reject) => {
        child.once("error", reject);
        child.once("exit", (exitCode, signal) => resolve(receivedSignal === null
          ? { exitCode, signal }
          : { exitCode: null, signal: receivedSignal }));
      });
    } finally {
      process.off("SIGINT", forwardInterrupt);
      process.off("SIGTERM", forwardTerminate);
    }
  } finally {
    rmSync(temporaryRoot, { recursive: true, force: true });
  }
}

function findRepositoryRoot(): string {
  let directory = path.dirname(fileURLToPath(import.meta.url));
  while (!existsSync(path.join(directory, "package.json"))) {
    const parent = path.dirname(directory);
    if (parent === directory) throw new Error("Cannot locate the repository package.json");
    directory = parent;
  }
  return directory;
}

export const REPOSITORY_ROOT = findRepositoryRoot();
const USAGE = "Usage: node scripts/engineering/suites.ts list [--json] | run <suite|all|root|portable-offline> | run-emitted engineering";

export async function main(argv: readonly string[], root = REPOSITORY_ROOT): Promise<SuiteRunResult> {
  try {
    if (argv.length === 1 && (argv[0] === "--help" || argv[0] === "-h")) {
      console.log(`${USAGE}\n${SUITE_NAMES.map(name => `${name}: ${SUITE_DESCRIPTIONS[name]}`).join("\n")}\nall/root: Every base suite exactly once, including docs and engineering.\nportable-offline: ${PORTABLE_OFFLINE_DISPOSITION.reason}`);
      return { exitCode: 0, signal: null };
    }
    if (argv[0] === "list" && (argv.length === 1 || (argv.length === 2 && argv[1] === "--json"))) {
      const inventory = discoverSuites(root);
      if (argv[1] === "--json") {
        console.log(JSON.stringify({ suites: inventory, aliases: { all: [...SUITE_NAMES], root: [...SUITE_NAMES] }, portableOffline: { files: selectSuite(inventory, "portable-offline"), disposition: PORTABLE_OFFLINE_DISPOSITION } }, null, 2));
      } else {
        for (const suite of SUITE_NAMES) console.log(`${suite}: ${inventory[suite].length} files — ${SUITE_DESCRIPTIONS[suite]}`);
        console.log(`all/root: ${selectSuite(inventory, "all").length} files`);
      }
      return { exitCode: 0, signal: null };
    }
    if (argv[0] === "run" && argv.length === 2 && argv[1] !== undefined) return await runSuite(root, argv[1]);
    if (argv[0] === "run-emitted" && argv.length === 2 && argv[1] !== undefined) return await runEmittedSuite(root, argv[1]);
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
