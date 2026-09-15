import { spawn } from "node:child_process";
import { measureProcessTree, assertBuildBudget } from "./resource-budget.mjs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
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
for (const args of [
  ["scripts/generate.mjs"],
  ["node_modules/next/dist/bin/next", "build"],
  ["scripts/verify.mjs"],
]) {
  const stageStart = Date.now();
  const child = spawn(process.execPath, args, {
    cwd: app,
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: "1",
      NODE_OPTIONS: "--max-old-space-size=4096",
    },
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
    process.exit(typeof status === "number" ? status : 1);
  }
  assertBuildBudget({
    buildMs: Date.now() - started,
    peakResidentBytes,
    memoryMeasurement,
  });
}
const metrics = {
  buildMs: Date.now() - started,
  peakResidentBytes,
  memoryMeasurement,
  stages,
};
fs.writeFileSync(
  path.join(app, ".generated/build-metrics.json"),
  JSON.stringify(metrics),
);
console.log(JSON.stringify(metrics));
