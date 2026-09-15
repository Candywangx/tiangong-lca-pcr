import { spawn } from "node:child_process";
import { measureProcessTree, assertBuildBudget } from "./resource-budget.mjs";
import { relocationRequested, runRelocatedBuild } from "./build-storage.mjs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(app, "../..");
const started = Date.now();
let peakResidentBytes = 0,
  memoryMeasurement = "process-tree-rss";
function sampleMemory() {
  try {
    peakResidentBytes = Math.max(peakResidentBytes, measureProcessTree());
  } catch (error) {
    memoryMeasurement = "unavailable";
    console.error("Memory measurement failed: " + error.message);
  }
}
sampleMemory();
assertBuildBudget({
  buildMs: Date.now() - started,
  peakResidentBytes,
  memoryMeasurement,
});
const stages = [];
/**
 * Run the complete build pipeline — generation, the Next static export, then verification — in
 * `cwd`. The stages, their environment, their deadline and every budget gate are identical
 * wherever this runs; relocation only moves where that is.
 */
async function runPipeline({ cwd, env }) {
  for (const args of [
    ["scripts/generate.mjs"],
    ["node_modules/next/dist/bin/next", "build"],
    ["scripts/verify.mjs"],
  ]) {
    const stageStart = Date.now();
    const child = spawn(process.execPath, args, {
      cwd,
      stdio: "inherit",
      env,
    });
    let timedOut = false;
    const deadline = setTimeout(
      () => {
        timedOut = true;
        child.kill();
      },
      Math.max(1, 18 * 60 * 1000 - (Date.now() - started)),
    );
    const monitor = setInterval(sampleMemory, 2000);
    sampleMemory();
    const status = await new Promise((resolve, reject) => {
      child.on("error", reject);
      child.on("exit", resolve);
    }).finally(() => {
      clearInterval(monitor);
      clearTimeout(deadline);
    });
    if (timedOut) throw new Error("PCR build exceeded its 18-minute budget.");
    stages.push({ command: args.join(" "), durationMs: Date.now() - stageStart });
    if (status !== 0) {
      console.error("PCR production build failed at " + args.join(" "));
      // Set the failing status without exiting: the pipeline may be running inside a relocated
      // build, whose cleanup and staging removal must still run before the process ends.
      process.exitCode = typeof status === "number" ? status : 1;
      throw new Error("PCR production build failed at " + args.join(" "));
    }
    assertBuildBudget({
      buildMs: Date.now() - started,
      peakResidentBytes,
      memoryMeasurement,
    });
  }
}
const relocation = relocationRequested({ repoRoot, env: process.env });
let relocated = null;
let failed = false;
try {
  if (relocation.relocate) {
    // The checkout sits on a memory-backed mount (or an operator asked for this path): build on a
    // disk-backed scratch copy and publish only the export it verifies.
    relocated = await runRelocatedBuild({
      app,
      repoRoot,
      env: process.env,
      runPipeline,
      // The time and memory gates cover the copy phases too, and the final one runs after the
      // export is staged back and immediately before it replaces the live one.
      sample: sampleMemory,
      assertBudget: () =>
        assertBuildBudget({
          buildMs: Date.now() - started,
          peakResidentBytes,
          memoryMeasurement,
        }),
    });
  } else {
    await runPipeline({
      cwd: app,
      env: {
        ...process.env,
        NEXT_TELEMETRY_DISABLED: "1",
        NODE_OPTIONS: "--max-old-space-size=4096",
      },
    });
  }
} catch (error) {
  // Reported here rather than by an unhandled rejection, so every cleanup this run owns has
  // already completed. A failed stage has set the exit status; anything else fails as 1.
  failed = true;
  process.exitCode = process.exitCode || 1;
  console.error(error instanceof Error ? error.message : String(error));
}
if (!failed) {
  const metrics = {
    buildMs: Date.now() - started,
    peakResidentBytes,
    memoryMeasurement,
    stages,
    ...(relocated
      ? {
          relocation: {
            reason: relocation.reason,
            sourceCommit: relocated.sourceCommit,
            copiedFiles: relocated.copied.files,
            copiedBytes: relocated.copied.bytes,
            export: relocated.published,
          },
        }
      : { relocation: { reason: relocation.reason } }),
  };
  fs.mkdirSync(path.join(app, ".generated"), { recursive: true });
  fs.writeFileSync(
    path.join(app, ".generated/build-metrics.json"),
    JSON.stringify(metrics),
  );
  console.log(JSON.stringify(metrics));
}
