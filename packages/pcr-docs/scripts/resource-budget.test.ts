import test from "node:test";
import assert from "node:assert/strict";
import { measureProcessTree, assertBuildResources, runMeasuredBuildStage, BuildStageFailure, type BuildStageMetrics } from "./resource-budget.ts";
import { buildNodeOptions } from "./build-storage.ts";
import { isUnknownRecord } from "../../pcr-core/src/types.ts";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

test("static export bounds simultaneous page renders without raising either memory guard", async () => {
  // Load the real config without pulling Next's ambient NODE_ENV augmentation into Node tooling.
  const module: unknown = await import(new URL("../next.config.ts", import.meta.url).href);
  assert.ok(isUnknownRecord(module) && isUnknownRecord(module.default));
  const experimental = module.default.experimental;
  assert.ok(isUnknownRecord(experimental));
  assert.equal(experimental.cpus, 2);
  assert.equal(experimental.staticGenerationMaxConcurrency, 1);
  assert.match(buildNodeOptions(undefined), /--max-old-space-size=4096/u);
  assert.throws(() => assertBuildResources({ peakResidentBytes: 6_000_000_001, memoryMeasurement: "process-tree-rss" }));
});

test("failed build diagnostics do not replace the previous successful metrics or export", () => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "pcr-build-failure-"));
  const app = path.join(temporary, "packages/pcr-docs");
  const previous = '{"status":"passed","previous":true}';
  try {
    fs.mkdirSync(path.join(app, "scripts"), { recursive: true });
    fs.mkdirSync(path.join(temporary, "packages/pcr-core/src"), { recursive: true });
    fs.writeFileSync(path.join(temporary, "package.json"), '{"type":"module"}');
    for (const file of ["build.ts", "build-storage.ts", "resource-budget.ts"])
      fs.copyFileSync(new URL(file, import.meta.url), path.join(app, "scripts", file));
    fs.copyFileSync(new URL("../../pcr-core/src/types.ts", import.meta.url), path.join(temporary, "packages/pcr-core/src/types.ts"));
    fs.writeFileSync(path.join(app, "scripts/generate.ts"), "process.exit(17);\n");
    fs.mkdirSync(path.join(app, ".generated"));
    fs.writeFileSync(path.join(app, ".generated/build-metrics.json"), previous);
    fs.mkdirSync(path.join(app, "out"));
    fs.writeFileSync(path.join(app, "out/index.html"), "previous verified export");
    const result = spawnSync(process.execPath, [path.join(app, "scripts/build.ts")], {
      cwd: temporary, env: { ...process.env, PCR_BUILD_IN_SCRATCH: "1" }, encoding: "utf8", timeout: 30_000,
    });
    assert.equal(result.status, 17, result.stderr);
    const receipt: unknown = JSON.parse(fs.readFileSync(path.join(app, ".generated/build-failure-metrics.json"), "utf8"));
    assert.ok(isUnknownRecord(receipt));
    assert.equal(receipt.status, "failed");
    assert.ok(typeof receipt.peakResidentBytes === "number" && receipt.peakResidentBytes > 0);
    assert.ok(Array.isArray(receipt.stages) && receipt.stages.length === 1);
    const stage: unknown = receipt.stages[0];
    assert.ok(isUnknownRecord(stage));
    assert.equal(stage.status, "failed");
    assert.equal(stage.exitCode, 17);
    assert.match(result.stdout, /"event":"build-stage"/u);
    assert.match(result.stdout, /"event":"build-result","status":"failed"/u);
    assert.equal(fs.readFileSync(path.join(app, ".generated/build-metrics.json"), "utf8"), previous);
    assert.equal(fs.readFileSync(path.join(app, "out/index.html"), "utf8"), "previous verified export");
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
});

test("failed child stages retain their exit code, duration and sampled peak", async () => {
  const reports: BuildStageMetrics[] = [];
  await assert.rejects(runMeasuredBuildStage({
    args: ["-e", "process.exit(17)"], cwd: process.cwd(), env: process.env,
    sample: () => ({ residentBytes: 123456, memoryMeasurement: "process-tree-rss" }),
    report: stage => reports.push(stage),
  }), (error: unknown) => error instanceof BuildStageFailure && error.stage.exitCode === 17);
  assert.equal(reports.length, 1);
  assert.equal(reports[0]!.status, "failed");
  assert.equal(reports[0]!.peakResidentBytes, 123456);
  assert.ok(reports[0]!.durationMs > 0);
  assert.match(reports[0]!.failure!, /build failed/u);
});

test("zero-exit stages rejected by aggregate RSS never report passing", async () => {
  const reports: BuildStageMetrics[] = [];
  await assert.rejects(runMeasuredBuildStage({
    args: ["-e", "process.exit(0)"], cwd: process.cwd(), env: process.env,
    sample: () => ({ residentBytes: 6_000_000_001, memoryMeasurement: "process-tree-rss" }),
    report: stage => reports.push(stage),
  }), /6 GB process memory/u);
  assert.equal(reports[0]!.status, "failed");
  assert.equal(reports[0]!.exitCode, 0, "a successful child is distinct from resource qualification");
  assert.equal(reports[0]!.peakResidentBytes, 6_000_000_001);
});

test("unavailable monitoring finishes observing the child and rejects the stage", async () => {
  const reports: BuildStageMetrics[] = [];
  await assert.rejects(runMeasuredBuildStage({
    args: ["-e", "process.exit(0)"], cwd: process.cwd(), env: process.env,
    sample: () => { throw new Error("stats unavailable"); },
    report: stage => reports.push(stage),
  }), /working process-memory/u);
  assert.equal(reports[0]!.exitCode, 0);
  assert.equal(reports[0]!.memoryMeasurement, "unavailable");
  assert.equal(reports[0]!.status, "failed");
});

test("passing stage receipts retain real process and environment execution", async () => {
  const reports: BuildStageMetrics[] = [];
  await runMeasuredBuildStage({
    args: ["-e", "if (process.env.PCR_STAGE_TEST !== 'preserved') process.exit(9)"], cwd: process.cwd(),
    env: { ...process.env, PCR_STAGE_TEST: "preserved" },
    sample: () => ({ residentBytes: 1024, memoryMeasurement: "process-tree-rss" }),
    report: stage => reports.push(stage),
  });
  assert.equal(reports[0]!.status, "passed");
  assert.equal(reports[0]!.exitCode, 0);
  assert.equal(reports[0]!.failure, undefined);
});
test("resource accounting includes descendants and works with native Windows statistics", () => {
  assert.equal(
    measureProcessTree({
      pid: 10,
      platform: "linux",
      run: () => "10 1 100\n11 10 200\n12 11 300\n13 1 999",
    }),
    600 * 1024,
  );
  assert.equal(
    measureProcessTree({
      pid: 10,
      platform: "win32",
      run: () =>
        JSON.stringify([
          { ProcessId: 10, ParentProcessId: 1, WorkingSetSize: "1024" },
          { ProcessId: 11, ParentProcessId: 10, WorkingSetSize: "2048" },
        ]),
    }),
    3072,
  );
});
test("missing measurements cannot become a zero-memory successful production build", () => {
  assert.throws(
    () =>
      measureProcessTree({ pid: 10, platform: "linux", run: () => "11 1 200" }),
    /incomplete/,
  );
  assert.throws(
    () =>
      measureProcessTree({
        run: () => {
          throw new Error("ps unavailable");
        },
      }),
    /unavailable/,
  );
  for (const metrics of [
    { peakResidentBytes: 0, memoryMeasurement: "unavailable" },
    { peakResidentBytes: 123, memoryMeasurement: "unavailable" },
    { peakResidentBytes: 6_000_000_001, memoryMeasurement: "process-tree-rss" },
  ])
    assert.throws(() => assertBuildResources({ ...metrics }));
  assert.doesNotThrow(() =>
    assertBuildResources({
      peakResidentBytes: 1000,
      memoryMeasurement: "process-tree-rss",
    }),
  );
});
