import assert from "node:assert/strict";
import test, { type TestContext } from "node:test";
import { isUnknownRecord } from "../../packages/pcr-core/src/types.ts";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
import { execFileSync, spawnSync, type SpawnSyncReturns } from "node:child_process";
import { syncBuiltinESMExports } from "node:module";
import { createHash } from "node:crypto";
import { init } from "./builder-operations.ts";
import { collectLintDiagnostics, lint } from "./lint-rules.ts";
import { saveLintReport } from "./lint-report.ts";

function fixture(t: TestContext, initialize = false) {
  const root = fs.mkdtempSync(path.join(fs.realpathSync(tmpdir()), "pcr-lint report 空間-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  if (initialize) init({ root });
  return root;
}
const reportPath = ".reports/pcr-lint.json";

import { formatLintSummary } from "./lint-report.ts";

test("22422 warnings keep terminal output bounded while diagnostic arrays remain complete", () => {
  const warnings = Array.from({ length: 22422 }, (_, index) => `PCR ${index}: missing range evidence`);
  const report = { status: "warnings", counts: { problems: 0, warnings: warnings.length }, problems: [], warnings };
  const before = JSON.stringify(report);
  const output = formatLintSummary(report);
  assert.ok(output.length <= 24, `unbounded terminal: ${output.length} lines`);
  assert.ok(output.join("\n").length < 12000);
  assert.match(output[0] ?? "", /0 errors, 22422 warnings/u);
  assert.equal(JSON.stringify(report), before);
});


test("full JSON retains every large diagnostic and output hash while summary stays bounded", (t) => {
  const root = fixture(t);
  const diagnostics = { problems: [], warnings: Array.from({ length: 22422 }, (_, n) => `${n}: ` + "x".repeat(700)) };
  const result = saveLintReport({ root, reportPath, diagnostics });
  const bytes = fs.readFileSync(path.join(root, reportPath));
  const report = json(bytes);
  assert.deepEqual(report.warnings, diagnostics.warnings);
  assert.deepEqual(report.counts, { problems: 0, warnings: 22422 });
  assert.equal(report.complete, true);
  assert.equal(result.exitCode, 0);
  assert.ok(result.messages.length <= 24);
  assert.ok(result.messages.join("\n").length < 12000);
  assert.ok(result.messages.at(-1)?.includes(createHash("sha256").update(bytes).digest("hex")));
});

test("clean, warning, mixed and incomplete reports preserve counts and failure policy", (t) => {
  const root = fixture(t);
  for (const diagnostics of [
    { problems: [], warnings: [] },
    { problems: [], warnings: ["w"] },
    { problems: ["e"], warnings: ["w"] },
    { problems: ["collection interrupted"], warnings: [], complete: false },
  ]) {
    const result = saveLintReport({ root, reportPath, diagnostics });
    const report = json(fs.readFileSync(path.join(root, reportPath)));
    assert.deepEqual(report.problems, diagnostics.problems);
    assert.deepEqual(report.warnings, diagnostics.warnings);
    assert.equal(report.complete, diagnostics.complete !== false);
    assert.equal(result.exitCode, diagnostics.problems.length || diagnostics.complete === false ? 1 : 0);
  }
});

test("source paths, links, shared files and invalid report parents are rejected without source writes", (t) => {
  const root = fixture(t);
  const diagnostics = { problems: ["original error"], warnings: ["original warning"] };
  const source = path.join(root, "source.json");
  fs.writeFileSync(source, "SOURCE");
  for (const output of ["source.json", "library/.pcr-builder-state/report.json", "../outside.json"]) {
    assert.throws(() => saveLintReport({ root, reportPath: output, diagnostics }), /original error[\s\S]*original warning/u);
  }
  fs.mkdirSync(path.join(root, ".reports"));
  const target = path.join(root, reportPath);
  fs.symlinkSync(source, target);
  assert.throws(() => saveLintReport({ root, reportPath, diagnostics }), /report destination/u);
  fs.unlinkSync(target);
  fs.linkSync(source, target);
  assert.throws(() => saveLintReport({ root, reportPath, diagnostics }), /report destination/u);
  fs.unlinkSync(target);
  fs.rmdirSync(path.join(root, ".reports"));
  fs.symlinkSync(root, path.join(root, ".reports"), "dir");
  assert.throws(() => saveLintReport({ root, reportPath, diagnostics }), /report directory/u);
  fs.unlinkSync(path.join(root, ".reports"));
  fs.writeFileSync(path.join(root, ".reports"), "FILE");
  assert.throws(() => saveLintReport({ root, reportPath, diagnostics }), /original error/u);
  assert.equal(fs.readFileSync(source, "utf8"), "SOURCE");
});

test("atomic report replacement failure retains unsaved diagnostics and cleans its temporary file", (t) => {
  const root = fixture(t);
  saveLintReport({ root, reportPath, diagnostics: { problems: [], warnings: ["old"] } });
  const before = fs.readFileSync(path.join(root, reportPath), "utf8");
  const original = fs.renameSync;
  fs.renameSync = () => { throw new Error("fixture rename failure"); };
  syncBuiltinESMExports();
  try {
    assert.throws(() => saveLintReport({ root, reportPath, diagnostics: { problems: ["new error"], warnings: ["new warning"] } }),
      /not saved[\s\S]*new error[\s\S]*new warning/u);
  } finally {
    fs.renameSync = original;
    syncBuiltinESMExports();
  }
  assert.equal(fs.readFileSync(path.join(root, reportPath), "utf8"), before);
  assert.deepEqual(fs.readdirSync(path.join(root, ".reports")), ["pcr-lint.json"]);
});

test("actual standalone CLI keeps legacy behavior and selects report mode explicitly", (t) => {
  const root = fixture(t, true);
  const cli = path.resolve("builder/cli/index.ts");
  const run = (...args: string[]) => spawnSync(process.execPath, [cli, "lint", "--root", root, ...args], { encoding: "utf8" });
  const legacy = run();
  assert.equal(legacy.status, 0, legacy.stderr);
  assert.equal(legacy.stdout, lint({ root }).join("\n") + "\n");
  assert.equal(fs.existsSync(path.join(root, reportPath)), false);
  const reported = run("--report", reportPath);
  assert.equal(reported.status, 0, reported.stderr);
  const report = json(fs.readFileSync(path.join(root, reportPath)));
  assert.deepEqual(report.problems, collectLintDiagnostics({ root }).problems);
  assert.deepEqual(report.warnings, collectLintDiagnostics({ root }).warnings);
  fs.rmSync(path.join(root, "library/catalog.yaml"));
  const expected = collectLintDiagnostics({ root });
  assert.throws(() => lint({ root }), /PCR library lint failed/u);
  const failed = run("--report", reportPath);
  assert.equal(failed.status, 1);
  const failureReport = json(fs.readFileSync(path.join(root, reportPath)));
  assert.deepEqual(failureReport.problems, expected.problems);
  assert.deepEqual(failureReport.warnings, expected.warnings);
  assert.equal(failureReport.status, "fail");
  assert.equal(run("--report", "source.json").status, 1);
  assert.equal(run("--report").status, 1);
  assert.equal(run("--report", reportPath, "--report", reportPath).status, 1);
});


test("Ubuntu CI command preserves failure exit and current complete evidence without stale reports", { skip: process.platform === "win32" }, (t) => {
  const workflow = fs.readFileSync(".github/workflows/validate.yml", "utf8");
  const command = workflow.split("      - name: Validate library contracts\n        run: |\n")[1]
    ?.split("\n      - name:")[0]?.split("\n").map((line) => line.slice(10)).join("\n");
  assert.ok(command);
  assert.match(workflow, /name: Preserve complete validation diagnostics\n\s+if: always\(\)/u);
  assert.match(workflow, /actions\/upload-artifact@043fb46d1a93c77aae656e7c1c64a875d1fc6a0a/u);
  assert.match(command, /node scripts\/engineering\/coverage\.ts collect "\$RUNNER_TEMP\/pcr-coverage\/validation" -- npm run validate/u);
  for (const mode of ["pass", "test-failure", "early-failure", "report-failure", "missing-report-success", "collector-failure", "stale"]) {
    const owned = fixture(t);
    const root = path.join(owned, "checkout"); fs.mkdirSync(root);
    // RUNNER_TEMP is outside the checkout in Actions. The actual collector deliberately
    // rejects repository-local artifacts outside .reports, so preserve that boundary here.
    const runnerTemp = path.join(owned, "runner");
    installCollectorFixture(root);
    const evidence = path.join(runnerTemp, "pcr-validation");
    fs.mkdirSync(evidence, { recursive: true });
    const bin = path.join(owned, "bin"); fs.mkdirSync(bin);
    const npmLog = path.join(owned, "npm-invocations.log");
    fs.writeFileSync(path.join(bin, "npm"), `#!/bin/sh
      [ "$*" = "run validate" ] || exit 91
      printf '%s\\n' "$FIXTURE_MODE" >> "$FIXTURE_NPM_LOG"
      echo "actual validation transcript"
      if [ "$FIXTURE_MODE" = early-failure ]; then echo "catalog failed" >&2; exit 17; fi
      if [ "$FIXTURE_MODE" = report-failure ]; then echo "Full diagnostics (unsaved): original finding" >&2; exit 1; fi
      if [ "$FIXTURE_MODE" = missing-report-success ]; then exit 0; fi
      mkdir -p .reports
      printf '{"all_diagnostics":["one","two"]}\\n' > .reports/pcr-lint.json
      if [ "$FIXTURE_MODE" = test-failure ]; then exit 23; fi
      exit 0
    `, { mode: 0o755 });
    if (mode === "stale") { fs.mkdirSync(path.join(root, ".reports")); fs.writeFileSync(path.join(root, reportPath), "STALE"); }
    const collection = path.join(runnerTemp, "pcr-coverage/validation");
    if (mode === "collector-failure") fs.mkdirSync(collection, { recursive: true });
    const run: SpawnSyncReturns<string> = spawnSync("sh", ["-c", command], { cwd: root, encoding: "utf8",
      env: { ...process.env, PATH: bin + path.delimiter + process.env.PATH, RUNNER_TEMP: runnerTemp, FIXTURE_MODE: mode, FIXTURE_NPM_LOG: npmLog } });
    const statuses: Record<string, number> = { pass: 0, "test-failure": 23, "early-failure": 17, "report-failure": 1, "missing-report-success": 1, "collector-failure": 1, stale: 1 };
    const expected = statuses[mode];
    assert.equal(run.error, undefined);
    assert.equal(run.status, expected, run.stderr);
    const transcript = fs.readFileSync(path.join(evidence, "validation.log"), "utf8");
    if (mode === "stale" || mode === "collector-failure") {
      assert.equal(fs.existsSync(npmLog), false, "Neither stale reports nor collector errors may dispatch validation");
      assert.equal(fs.existsSync(path.join(collection, "run.json")), false);
    } else {
      assert.equal(fs.readFileSync(npmLog, "utf8"), mode + "\n");
      const collected = json(fs.readFileSync(path.join(collection, "run.json")));
      assert.deepEqual(collected.command, ["npm", "run", "validate"]);
      assert.equal(collected.status, mode === "missing-report-success" ? 0 : expected);
      assert.equal(collected.unchanged, true);
      assert.equal(collected.node, process.version);
      assert.ok(Array.isArray(collected.sources) && collected.sources.length > 0);
    }
    if (mode === "collector-failure") assert.match(transcript, /EEXIST/u);
    if (["pass", "test-failure"].includes(mode)) {
      assert.equal(fs.readFileSync(path.join(evidence, "pcr-lint.json"), "utf8"), fs.readFileSync(path.join(root, reportPath), "utf8"));
    } else {
      assert.equal(fs.existsSync(path.join(evidence, "pcr-lint.json")), false);
      assert.match(transcript, mode === "stale" ? /pre-existing lint report/u : /report was not produced/u);
      if (mode === "report-failure") assert.match(transcript, /original finding/u);
    }
  }
});


/** Execute the real CI collector rather than a replacement wrapper or inferred command. */
function installCollectorFixture(root: string): void {
  const sourceRoot = path.resolve(".");
  const put = (relative: string, content: string | Buffer) => { const file = path.join(root, relative); fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, content); };
  put("package.json", fs.readFileSync(path.join(sourceRoot, "package.json")));
  put(".gitignore", "node_modules/\n.reports/\n");
  // This is the actual collector/import/preload closure. No fake compiler or capture code.
  for (const name of ["coverage.ts", "coverage-types.ts", "coverage-inventory.ts", "coverage-emission.ts", "coverage-mapping.ts", "coverage-capture.ts"]) {
    put("scripts/engineering/" + name, fs.readFileSync(path.join(sourceRoot, "scripts/engineering", name)));
  }
  put("config/coverage.json", JSON.stringify({ schemaVersion: 1, roots: ["scripts"], pendingPrefixes: [], exclusions: [],
    thresholds: { lines: 0, functions: 0, branches: 0 }, critical: [] }));
  fs.symlinkSync(path.join(sourceRoot, "node_modules"), path.join(root, "node_modules"), "junction");
  const git = (...args: string[]) => execFileSync("git", args, { cwd: root, stdio: "pipe" });
  git("init", "-q"); git("add", ".");
  git("-c", "user.name=Owned collector fixture", "-c", "user.email=fixture@example.invalid", "commit", "-qm", "Frozen actual collector fixture");
}

test("cleanup failure cannot replace the original unsaved diagnostics", (t) => {
  const root = fixture(t);
  const rename = fs.renameSync;
  const remove = fs.rmSync;
  fs.renameSync = () => { throw new Error("original rename failure"); };
  fs.rmSync = () => { throw new Error("cleanup failure"); };
  syncBuiltinESMExports();
  try {
    assert.throws(() => saveLintReport({ root, reportPath, diagnostics: { problems: ["all original errors"], warnings: ["all original warnings"] } }),
      /original rename failure[\s\S]*cleanup also failed[\s\S]*all original errors[\s\S]*all original warnings/u);
  } finally {
    fs.renameSync = rename;
    fs.rmSync = remove;
    syncBuiltinESMExports();
  }
  assert.equal(fs.existsSync(path.join(root, reportPath)), false);
});

test("explicit empty report values cannot fall back to successful legacy lint", (t) => {
  const root = fixture(t, true);
  const cli = path.resolve("builder/cli/index.ts");
  const run = (...args: string[]) => spawnSync(process.execPath, [cli, "lint", "--root", root, ...args], { encoding: "utf8" });
  for (const args of [["--report", ""], ["--report", " \t"], ["--report="], ["--report= \t"]]) {
    const result = run(...args);
    assert.equal(result.status, 1, `explicit ${JSON.stringify(args)} must not select legacy mode`);
    assert.equal(result.stdout, "");
    assert.match(result.stderr, /--report requires a non-empty value/u);
    assert.equal(fs.existsSync(path.join(root, reportPath)), false);
  }
  assert.equal(run().status, 0, "omitting report retains legacy behavior");
  assert.equal(fs.existsSync(path.join(root, reportPath)), false);
  for (const args of [["--report", reportPath], [`--report=${reportPath}`]]) {
    const result = run(...args);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(json(fs.readFileSync(path.join(root, reportPath))).complete, true);
    fs.unlinkSync(path.join(root, reportPath));
  }
});

function json(text: string | Buffer): Record<string, unknown> { const value: unknown = JSON.parse(String(text)); assert.ok(isUnknownRecord(value)); return value; }
