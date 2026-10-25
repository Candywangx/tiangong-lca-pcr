import {errorMessage} from "../../pcr-core/src/types.ts";
import { measureProcessTree, assertBuildResources, runMeasuredBuildStage, BuildStageFailure, type BuildStageMetrics } from "./resource-budget.ts";
import { relocationRequested, runRelocatedBuild, buildNodeOptions } from "./build-storage.ts";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(app, "../..");
const started = Date.now();
let peakResidentBytes = 0,
  memoryMeasurement = "process-tree-rss";
function sampleMemory() {
  let residentBytes = 0;
  try {
    residentBytes = measureProcessTree();
    peakResidentBytes = Math.max(peakResidentBytes, residentBytes);
  } catch (error) {
    memoryMeasurement = "unavailable";
    console.error("Memory measurement failed: " + errorMessage(error));
  }
  return { residentBytes, memoryMeasurement };
}
const stages: BuildStageMetrics[] = [];
/**
 * Run generation, Next export, exact static-route alias preparation, then verification in
 * `cwd`. The stages, their environment and every resource gate are identical
 * wherever this runs; relocation only moves where that is.
 */
async function runPipeline({ cwd, env }: {cwd:string;env:NodeJS.ProcessEnv}) {
  for (const args of [
    ["scripts/generate.ts"],
    ["node_modules/next/dist/bin/next", "build"],
    ["scripts/static-route-aliases.ts"],
    ["scripts/verify.ts"],
  ]) {
    await runMeasuredBuildStage({
      args, cwd, env, sample: sampleMemory,
      report(stage) {
        stages.push(stage);
        console.log(JSON.stringify({ event: "build-stage", ...stage }));
      },
    });
  }
}
let relocation: ReturnType<typeof relocationRequested> | undefined;
let relocated: Awaited<ReturnType<typeof runRelocatedBuild>> | null = null;
let failed = false;
let failure: string | undefined;
try {
  sampleMemory();
  assertBuildResources({ peakResidentBytes, memoryMeasurement });
  relocation = relocationRequested({ repoRoot, env: process.env });
  if (relocation.relocate) {
    // The checkout sits on a memory-backed mount (or an operator asked for this path): build on a
    // disk-backed scratch copy and publish only the export it verifies.
    relocated = await runRelocatedBuild({
      app,
      repoRoot,
      env: process.env,
      runPipeline,
      // Memory gates cover the copy phases too, and the final one runs after the
      // export is staged back and immediately before it replaces the live one.
      sample: sampleMemory,
      assertBudget: () =>
        assertBuildResources({
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
        NODE_OPTIONS: buildNodeOptions(process.env.NODE_OPTIONS),
      },
    });
  }
} catch (error) {
  // Reported here rather than by an unhandled rejection, so every cleanup this run owns has
  // already completed. A failed stage has set the exit status; anything else fails as 1.
  failed = true;
  failure = errorMessage(error);
  process.exitCode = error instanceof BuildStageFailure && error.stage.exitCode
    ? error.stage.exitCode : process.exitCode || 1;
  console.error(failure);
}
{
  const metrics = {
    status: failed ? "failed" : "passed",
    ...(failure ? { failure } : {}),
    buildMs: Date.now() - started,
    peakResidentBytes,
    memoryMeasurement,
    stages,
    ...(relocated
      ? {
          relocation: {
            reason: relocation?.reason ?? "not-started",
            sourceCommit: relocated.sourceCommit,
            copiedFiles: relocated.copied.files,
            copiedBytes: relocated.copied.bytes,
            export: relocated.published,
          },
        }
      : { relocation: { reason: relocation?.reason ?? "not-started" } }),
  };
  // Report only after relocated-build cleanup/atomic handoff has returned. A failure receipt
  // must never replace the last successful build metrics or claim its export was published.
  try {
    fs.mkdirSync(path.join(app, ".generated"), { recursive: true });
    fs.writeFileSync(path.join(app, failed ? ".generated/build-failure-metrics.json" : ".generated/build-metrics.json"), JSON.stringify(metrics));
  } catch (error) {
    const message = "Could not write build metrics: " + errorMessage(error);
    console.error(message);
    metrics.status = "failed";
    metrics.failure ??= message;
    process.exitCode = process.exitCode || 1;
  }
  console.log(JSON.stringify({ event: "build-result", ...metrics }));
}
