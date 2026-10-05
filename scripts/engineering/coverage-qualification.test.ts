import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { collect } from "./coverage.ts";
import { assertCoverageQualificationBinding, coverageSelection, parseCoverageCollectArguments, qualificationBinding, validateCoverageCommand } from "./coverage-qualification.ts";
import { writeQualificationPlan } from "./qualification-plan.ts";

function put(root: string, file: string, content: string): void {
  mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
  writeFileSync(path.join(root, file), content);
}
function fixture(t: test.TestContext) {
  const base = realpathSync(mkdtempSync(path.join(tmpdir(), "pcr-measurement-qualification-"))), root = path.join(base, "source");
  mkdirSync(root);
  t.after(() => rmSync(base, { recursive: true, force: true }));
  put(root, "package.json", '{"type":"module"}');
  put(root, "config/coverage.json", JSON.stringify({ schemaVersion: 1, roots: ["src", "scripts", "packages"], pendingPrefixes: [], exclusions: [], thresholds: { lines: 0, functions: 0, branches: 0 }, critical: [] }));
  put(root, "src/value.ts", "export function choose(value: boolean): number { return value ? 1 : 0; }\n");
  put(root, "docs/content.md", "tracked documentation content\n");
  const git = (...args: string[]) => execFileSync("git", args, { cwd: root, stdio: "pipe" });
  git("init", "-q");
  git("config", "user.name", "measurement fixture");
  git("config", "user.email", "measurement@example.invalid");
  git("add", ".");
  git("commit", "-qm", "Qualification measurement source");
  return { base, root, planFile: path.join(base, "qualification.json"), run: path.join(base, "measurements") };
}
const moduleUrl = new URL(`./coverage${path.extname(new URL(import.meta.url).pathname)}`, import.meta.url).href;
const qualificationUrl = new URL(`./qualification-plan${path.extname(new URL(import.meta.url).pathname)}`, import.meta.url).href;
function docsBuild(root: string, program: string): void {
  put(root, "packages/pcr-docs/package.json", JSON.stringify({ type: "module", scripts: { build: "node build.ts" } }));
  put(root, "packages/pcr-docs/build.ts", program);
}
const documentationCommand = ["npm", "--prefix", "packages/pcr-docs", "run", "build"] as const;
function metadata(file: string): Record<string, unknown> { return JSON.parse(readFileSync(file, "utf8")) as Record<string, unknown>; }

test("explicit collector argument parsing preserves generic commands and accepts only instrumented selections", () => {
  assert.deepEqual(parseCoverageCollectArguments(["--", "node", "app.ts"]), { command: ["node", "app.ts"] });
  assert.deepEqual(parseCoverageCollectArguments(["--qualification-plan", "plan.json", "--selection", "core", "--", "node", "app.ts"]), {
    qualification: { planFile: "plan.json", selection: "core" }, command: ["node", "app.ts"],
  });
  assert.equal(coverageSelection("documentation"), "documentation");
  for (const value of ["corpus", "all", "unknown", ""]) assert.throws(() => coverageSelection(value), /Invalid instrumented/);
  for (const args of [[], ["--"], ["--qualification-plan", "plan.json", "--", "node"],
    ["--selection", "core", "--qualification-plan", "plan.json", "--", "node"],
    ["--qualification-plan", "plan.json", "--selection", "core", "--unknown", "node"],
    ["--qualification-plan", "plan.json", "--selection", "corpus", "--", "node"]]) assert.throws(() => parseCoverageCollectArguments(args), /requires|Invalid instrumented/);
});

test("command validation rejects arbitrary subsets, other plans, wrong selections and incomplete docs builds", () => {
  const root = path.resolve("/qualification-root"), options = { planFile: "qualification.json", selection: "core" as const };
  const command = ["node", "scripts/engineering/qualification-plan.ts", "run", "qualification.json", "core", "core.json"];
  assert.doesNotThrow(() => validateCoverageCommand(root, command, options));
  assert.doesNotThrow(() => validateCoverageCommand(root, ["node", "scripts/engineering/qualification-plan.ts", "run", path.resolve(root, "qualification.json"), "core", "core.json"], options));
  for (const wrong of [command.slice(0, 5), [...command, "extra"], ["node", "--test", "some.test.ts"],
    command.map((value, index) => index === 3 ? "foreign.json" : value), command.map((value, index) => index === 4 ? "builder" : value)]) {
    assert.throws(() => validateCoverageCommand(root, wrong, options), /does not execute/);
  }
  assert.doesNotThrow(() => validateCoverageCommand(root, documentationCommand, { planFile: "qualification.json", selection: "documentation" }));
  assert.throws(() => validateCoverageCommand(root, ["npm", "run", "docs:build"], { planFile: "qualification.json", selection: "documentation" }), /complete documentation build/);
});

test("fresh measurement binding rejects old same-source invocations and malformed or foreign selection records", t => {
  const { root, planFile, base } = fixture(t);
  const first = writeQualificationPlan(root, planFile), second = writeQualificationPlan(root, path.join(base, "next-plan.json"));
  assert.equal(first.planHash, second.planHash);
  const expected = qualificationBinding(second, "core"), old = qualificationBinding(first, "core");
  assert.throws(() => assertCoverageQualificationBinding(old, expected), /stale/);
  assert.doesNotThrow(() => assertCoverageQualificationBinding(expected, expected));
  for (const value of [undefined, null, {}, { ...expected, selection: "builder" }, { ...expected, planHash: "foreign" }, { ...expected, extra: true }]) {
    assert.throws(() => assertCoverageQualificationBinding(value, expected), /missing, stale/);
  }
});

test("actual shard collection records its explicit binding before execution and in finalized raw metadata", async t => {
  const { root, planFile, base, run } = fixture(t), observed = path.join(base, "observed.json"), receipt = path.join(base, "core.json");
  put(root, "scripts/engineering/qualification-plan.ts", `import {readFileSync,writeFileSync} from "node:fs";
    writeFileSync(${JSON.stringify(observed)}, readFileSync(${JSON.stringify(path.join(run, "run.json"))}));
    const {runQualificationShard}=await import(${JSON.stringify(qualificationUrl)});
    const result=await runQualificationShard(process.cwd(),process.argv[3],process.argv[4],process.argv[5]);
    process.exitCode=result.exitCode??1;`);
  put(root, "packages/pcr-core/value.unit.test.ts", 'import test from "node:test"; import {choose} from "../../src/value.ts"; test("actual measured shard",()=>{if(choose(true)!==1)throw new Error("bad");});');
  const plan = writeQualificationPlan(root, planFile), expected = qualificationBinding(plan, "core");
  const command = ["node", "scripts/engineering/qualification-plan.ts", "run", planFile, "core", receipt];
  assert.equal(await collect(root, run, command, { planFile, selection: "core" }), 0);
  const before = metadata(observed), final = metadata(path.join(run, "run.json"));
  assert.equal(before["status"], null);
  assertCoverageQualificationBinding(before["qualification"], expected);
  assert.equal(final["status"], 0);
  assert.equal(final["unchanged"], true);
  assertCoverageQualificationBinding(final["qualification"], expected);
  assert.equal(existsSync(receipt), true);
});

test("post-build invocation replacement records failed binding while same-source plan content remains unchanged", async t => {
  const { root, planFile, run } = fixture(t);
  docsBuild(root, `import {readFileSync,writeFileSync} from "node:fs";const file=${JSON.stringify(planFile)};const plan=JSON.parse(readFileSync(file,"utf8"));plan.qualificationId="00000000-0000-0000-0000-000000000000";writeFileSync(file,JSON.stringify(plan));`);
  const plan = writeQualificationPlan(root, planFile);
  await assert.rejects(() => collect(root, run, documentationCommand, { planFile, selection: "documentation" }), /Coverage qualification changed.*binding is missing, stale/);
  const final = metadata(path.join(run, "run.json"));
  assert.equal(final["status"], 0);
  assert.equal(final["unchanged"], false);
  assert.equal(typeof final["qualificationError"], "string");
  assertCoverageQualificationBinding(final["qualification"], qualificationBinding(plan, "documentation"));
});

test("documentation bytes outside the runtime coverage inventory remain bound and fail on post-build drift", async t => {
  const { root, planFile, run } = fixture(t);
  docsBuild(root, `import {writeFileSync} from "node:fs";writeFileSync(${JSON.stringify(path.join(root, "docs/content.md"))},"mutated documentation");`);
  writeQualificationPlan(root, planFile);
  await assert.rejects(() => collect(root, run, documentationCommand, { planFile, selection: "documentation" }), /Coverage qualification changed.*Stale or modified qualification plan/);
  const final = metadata(path.join(run, "run.json"));
  assert.equal(final["unchanged"], false);
  assert.match(String(final["qualificationError"]), /Stale or modified/);
});

test("invalid declared commands or already-stale plans fail before creating measurements", async t => {
  const { root, planFile, run } = fixture(t);
  const plan = writeQualificationPlan(root, planFile);
  await assert.rejects(() => collect(root, run, ["node", "--test", "arbitrary.test.ts"], { planFile, selection: "core" }), /does not execute/);
  assert.equal(existsSync(run), false);
  writeFileSync(planFile, JSON.stringify({ ...plan, planHash: "foreign" }));
  await assert.rejects(() => collect(root, run, documentationCommand, { planFile, selection: "documentation" }), /Stale or modified/);
  assert.equal(existsSync(run), false);
});

test("generic nested collection under a qualified parent retains its own fixture source with no inherited binding", async t => {
  const { root, planFile, run, base } = fixture(t), nestedRoot = path.join(base, "nested-source"), nestedRun = path.join(base, "nested-run");
  mkdirSync(nestedRoot);
  put(nestedRoot, "package.json", '{"type":"module"}');
  put(nestedRoot, "config/coverage.json", readFileSync(path.join(root, "config/coverage.json"), "utf8"));
  put(nestedRoot, "src/value.ts", "export const nestedValue = 1;\n");
  for (const args of [["init", "-q"], ["add", "."], ["-c", "user.name=Nested Fixture", "-c", "user.email=nested@example.invalid", "commit", "-qm", "Nested source"]]) {
    execFileSync("git", args, { cwd: nestedRoot, stdio: "pipe" });
  }
  docsBuild(root, `const {collect}=await import(${JSON.stringify(moduleUrl)});
    process.env.PCR_QUALIFICATION_PLAN="must-not-be-inherited.json";
    process.env.PCR_QUALIFICATION_SELECTION="core";
    const status=await collect(${JSON.stringify(nestedRoot)},${JSON.stringify(nestedRun)},[process.execPath,"-e","console.log('generic nested measurement')"]);
    process.exitCode=status;`);
  writeQualificationPlan(root, planFile);
  assert.equal(await collect(root, run, documentationCommand, { planFile, selection: "documentation" }), 0);
  const nested = metadata(path.join(nestedRun, "run.json"));
  assert.equal(nested["status"], 0);
  assert.equal(nested["unchanged"], true);
  assert.equal("qualification" in nested, false);
  assert.ok("qualification" in metadata(path.join(run, "run.json")));
});
