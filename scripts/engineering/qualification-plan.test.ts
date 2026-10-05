import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { createQualificationPlan, partitionTests, readCurrentQualificationPlan, runQualificationShard, SHARD_NAMES, verifyQualificationReceipts, writeQualificationPlan } from "./qualification-plan.ts";
import type { QualificationDocument, ShardName, ShardReceipt } from "./qualification-plan.ts";
import { discoverSuites, FULL_CORPUS_TEST, REPOSITORY_ROOT, selectSuite } from "./suites.ts";

function write(root: string, filename: string, content: string): void {
  const file = path.join(root, filename);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, content);
}
function git(root: string, args: readonly string[]): void {
  const result = spawnSync("git", ["-C", root, ...args], { encoding: "utf8" });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
}
function fixture(t: test.TestContext, tests: readonly string[] = ["scripts/engineering/passing.test.ts"]): { root: string; planFile: string; receipts: string } {
  const base = mkdtempSync(path.join(tmpdir(), "pcr-qualification-fixture-")), root = path.join(base, "source with spaces");
  mkdirSync(root);
  t.after(() => rmSync(base, { recursive: true, force: true }));
  write(root, "package.json", '{"type":"module"}\n');
  write(root, "tracked.txt", "tracked qualification input\n");
  for (const filename of tests) write(root, filename, 'import test from "node:test"; test("independent real shard execution", () => {});\n');
  git(root, ["init", "-q"]);
  git(root, ["add", "."]);
  git(root, ["-c", "user.name=Qualification Fixture", "-c", "user.email=fixture@example.invalid", "commit", "-qm", "Fixture source"]);
  return { root, planFile: path.join(base, "plan.json"), receipts: path.join(base, "receipts") };
}
function successfulReceipt(document: QualificationDocument, shard: ShardName): ShardReceipt {
  return { schemaVersion: 1, qualificationId: document.qualificationId, planHash: document.planHash, sourceHead: document.plan.sourceHead,
    sourceHash: document.plan.sourceHash, configurationHash: document.plan.configurationHash, shard,
    tests: document.plan.tests.filter(test => document.plan.shards[shard].includes(test.path)), instrumentation: "none",
    execution: document.plan.shards[shard].length === 0 ? "empty-shard" : "node-test", startedAt: "2026-10-05T00:00:00.000Z", completedAt: "2026-10-05T00:00:01.000Z", result: { exitCode: 0, signal: null } };
}
function writeReceipts(document: QualificationDocument, directory: string): void {
  for (const shard of SHARD_NAMES) write(directory, `${shard}.json`, JSON.stringify(successfulReceipt(document, shard)));
}
function mutateReceipt(directory: string, shard: ShardName, mutate: (receipt: Record<string, unknown>) => void): void {
  const file = path.join(directory, `${shard}.json`);
  const receipt = JSON.parse(readFileSync(file, "utf8")) as Record<string, unknown>;
  mutate(receipt);
  writeFileSync(file, JSON.stringify(receipt));
}

test("fixed shard ownership partitions discovered tests exactly once and includes future declared tests", () => {
  const files = ["builder/goal-harness/new.unit.test.ts", "builder/cli/goal-new.integration.test.ts", "builder/lib/new.unit.test.ts",
    "builder/scripts/product-new.product.test.ts", "packages/pcr-core/new.unit.test.ts", FULL_CORPUS_TEST,
    "packages/tiangong-pcr-cli/new.integration.test.ts", "packages/pcr-viewer/new.integration.test.ts",
    "packages/pcr-docs/new.test.ts", "scripts/engineering/qualification-plan.test.ts", "future/new.unit.test.ts"];
  const shards = partitionTests(files);
  assert.deepEqual(SHARD_NAMES.flatMap(shard => shards[shard]).sort(), [...files].sort());
  assert.equal(new Set(SHARD_NAMES.flatMap(shard => shards[shard])).size, files.length);
  assert.deepEqual(shards.harness, files.slice(0, 2).sort());
  assert.deepEqual(shards.builder, files.slice(2, 4));
  assert.deepEqual(shards.core, [files[4]]);
  assert.deepEqual(shards.corpus, [FULL_CORPUS_TEST]);
  assert.deepEqual(shards.general, ["future/new.unit.test.ts"]);
  assert.deepEqual(partitionTests([...files].reverse()), shards);
  assert.throws(() => partitionTests([files[0]!, files[0]!]), /Duplicate qualification test/);
  const discovered = selectSuite(discoverSuites(REPOSITORY_ROOT), "all");
  const actual = partitionTests(discovered);
  assert.deepEqual(SHARD_NAMES.flatMap(shard => actual[shard]).sort(), discovered);
  assert.ok(actual.engineering.includes("scripts/engineering/qualification-plan.test.ts"));
});

test("plan content is deterministic while distinct invocations invalidate same-source receipts", t => {
  const { root, planFile, receipts } = fixture(t);
  assert.deepEqual(createQualificationPlan(root), createQualificationPlan(root));
  const first = writeQualificationPlan(root, planFile);
  const nextFile = path.join(path.dirname(planFile), "next.json"), second = writeQualificationPlan(root, nextFile);
  assert.equal(first.planHash, second.planHash);
  assert.notEqual(first.qualificationId, second.qualificationId);
  writeReceipts(first, receipts);
  assert.equal(verifyQualificationReceipts(root, planFile, receipts).status, "passed");
  assert.throws(() => verifyQualificationReceipts(root, nextFile, receipts), /stale.*qualificationId/);
  assert.throws(() => writeQualificationPlan(root, planFile), /EEXIST/);
});

test("source binding rejects changed tracked bytes, source HEAD, new tests and changed runner configuration", t => {
  const { root, planFile } = fixture(t);
  writeQualificationPlan(root, planFile);
  write(root, "tracked.txt", "modified\n");
  assert.throws(() => readCurrentQualificationPlan(root, planFile), /Stale or modified qualification plan/);
  write(root, "tracked.txt", "tracked qualification input\n");
  assert.doesNotThrow(() => readCurrentQualificationPlan(root, planFile));
  write(root, "scripts/engineering/new.test.ts", 'import test from "node:test"; test("new", () => {});');
  assert.throws(() => readCurrentQualificationPlan(root, planFile), /Stale or modified qualification plan/);
  rmSync(path.join(root, "scripts/engineering/new.test.ts"));
  write(root, "config/coverage.json", "{}\n");
  assert.throws(() => readCurrentQualificationPlan(root, planFile), /Stale or modified qualification plan/);
  rmSync(path.join(root, "config"), { recursive: true });
  git(root, ["-c", "user.name=Qualification Fixture", "-c", "user.email=fixture@example.invalid", "commit", "--allow-empty", "-qm", "Different HEAD"]);
  assert.throws(() => readCurrentQualificationPlan(root, planFile), /Stale or modified qualification plan/);
});

test("plan parser rejects incomplete membership, duplicate or missing shard definitions and unknown fields", t => {
  const { root, planFile } = fixture(t);
  const document = writeQualificationPlan(root, planFile);
  const invalid = [
    { ...document, extra: "unexpected" },
    { ...document, plan: { ...document.plan, tests: [] } },
    { ...document, plan: { ...document.plan, shards: { ...document.plan.shards, engineering: [] } } },
    { ...document, plan: { ...document.plan, shards: { ...document.plan.shards, core: document.plan.shards.engineering } } },
    { ...document, planHash: "foreign" },
  ];
  for (const value of invalid) {
    writeFileSync(planFile, JSON.stringify(value));
    assert.throws(() => readCurrentQualificationPlan(root, planFile), /Invalid|Stale or modified/);
  }
});

test("verifier requires the exact expected set and rejects foreign, duplicate, missing, stale, failure and membership receipts", t => {
  const { root, planFile, receipts } = fixture(t);
  const document = writeQualificationPlan(root, planFile);
  writeReceipts(document, receipts);
  const good = verifyQualificationReceipts(root, planFile, receipts);
  assert.deepEqual(good.shards, SHARD_NAMES);
  assert.equal(good.testCount, 1);
  assert.equal(good.coverageEvidence, "separate-raw-measurements-required");
  for (const [key, value] of [
    ["qualificationId", "00000000-0000-0000-0000-000000000000"], ["planHash", "foreign"], ["sourceHead", "foreign"],
    ["sourceHash", "foreign"], ["configurationHash", "foreign"], ["tests", []], ["result", { exitCode: 1, signal: null }],
    ["result", { exitCode: 0, signal: "SIGTERM" }], ["result", { exitCode: 0, signal: null, fake: true }],
    ["execution", "empty-shard"], ["instrumentation", "measured-coverage"], ["shard", "foreign"], ["startedAt", "invalid"],
    ["completedAt", "2026-10-04T00:00:00.000Z"], ["tests", [{ path: "foreign.test.ts", sha256: "foreign" }]],
  ] as const) {
    writeReceipts(document, receipts);
    mutateReceipt(receipts, "engineering", receipt => { receipt[key] = value; });
    assert.throws(() => verifyQualificationReceipts(root, planFile, receipts), /Invalid|stale|Unknown/);
  }
  writeReceipts(document, receipts);
  write(receipts, "duplicate.json", JSON.stringify(successfulReceipt(document, "engineering")));
  assert.throws(() => verifyQualificationReceipts(root, planFile, receipts), /Duplicate receipt shard/);
  rmSync(path.join(receipts, "duplicate.json"));
  rmSync(path.join(receipts, "corpus.json"));
  assert.throws(() => verifyQualificationReceipts(root, planFile, receipts), /Missing qualification receipts: corpus/);
  writeReceipts(document, receipts);
  mutateReceipt(receipts, "core", receipt => { receipt["extra"] = true; });
  assert.throws(() => verifyQualificationReceipts(root, planFile, receipts), /Invalid shard receipt fields/);
});

test("real shard execution records only success and empty no-op receipts, with coverage explicitly separate", async t => {
  const { root, planFile, receipts } = fixture(t);
  writeQualificationPlan(root, planFile);
  for (const shard of SHARD_NAMES) assert.deepEqual(await runQualificationShard(root, planFile, shard, path.join(receipts, `${shard}.json`)), { exitCode: 0, signal: null });
  assert.equal(verifyQualificationReceipts(root, planFile, receipts).status, "passed");
  const observed = JSON.parse(readFileSync(path.join(receipts, "engineering.json"), "utf8")) as ShardReceipt;
  assert.equal(observed.execution, "node-test");
  assert.equal(observed.tests.length, 1);
  assert.equal(JSON.parse(readFileSync(path.join(receipts, "corpus.json"), "utf8")).execution, "empty-shard");
  assert.throws(() => verifyQualificationReceipts(root, planFile, path.dirname(receipts)), /Foreign receipt artifact|Invalid shard receipt fields/);
  await assert.rejects(runQualificationShard(root, planFile, "arbitrary.test.ts", path.join(receipts, "invalid.json")), /Unknown qualification shard/);
  await assert.rejects(runQualificationShard(root, planFile, "engineering", path.join(receipts, "engineering.json")), /Receipt already exists/);
});

test("failed tests and post-execution source drift cannot produce successful receipts", async t => {
  const { root, planFile, receipts } = fixture(t);
  write(root, "scripts/engineering/passing.test.ts", 'import test from "node:test"; test("failure", () => { throw new Error("real failure"); });');
  writeQualificationPlan(root, planFile);
  const receipt = path.join(receipts, "engineering.json");
  assert.deepEqual(await runQualificationShard(root, planFile, "engineering", receipt), { exitCode: 1, signal: null });
  assert.equal(existsSync(receipt), false);
  rmSync(planFile);
  write(root, "scripts/engineering/passing.test.ts", `import { writeFileSync } from "node:fs"; import test from "node:test"; test("source drift", () => writeFileSync(${JSON.stringify(path.join(root, "tracked.txt"))}, "changed during run"));`);
  writeQualificationPlan(root, planFile);
  await assert.rejects(runQualificationShard(root, planFile, "engineering", receipt), /Stale or modified qualification plan/);
  assert.equal(existsSync(receipt), false);
});

test("receipt traversal rejects symbolic links and unexpected artifacts", t => {
  const { root, planFile, receipts } = fixture(t);
  const document = writeQualificationPlan(root, planFile);
  writeReceipts(document, receipts);
  write(receipts, "log.txt", "not a receipt");
  assert.throws(() => verifyQualificationReceipts(root, planFile, receipts), /Foreign receipt artifact/);
  rmSync(path.join(receipts, "log.txt"));
  symlinkSync(path.join(receipts, "engineering.json"), path.join(receipts, "alias.json"));
  assert.throws(() => verifyQualificationReceipts(root, planFile, receipts), /symbolic link/);
});

test("standalone real browser tests belong to the browser-equipped consumer shard", () => {
  const shards = partitionTests(["tests/browser/viewer.browser.test.ts"]);
  assert.deepEqual(shards.consumer, ["tests/browser/viewer.browser.test.ts"]);
  assert.deepEqual(shards.general, []);
});
