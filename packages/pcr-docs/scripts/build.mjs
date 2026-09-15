import { spawn, execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const started = Date.now();
let peakResidentBytes = 0,
  memoryMeasurement = "process-tree-rss";
function sampleMemory() {
  if (process.platform === "win32") {
    memoryMeasurement = "unavailable-on-windows";
    return;
  }
  try {
    const rows = execFileSync("ps", ["-axo", "pid=,ppid=,rss="], {
      encoding: "utf8",
      maxBuffer: 4 * 1024 * 1024,
    })
      .trim()
      .split("\n")
      .map((line) => line.trim().split(/\s+/u).map(Number));
    const owned = new Set([process.pid]);
    let changed = true;
    while (changed) {
      changed = false;
      for (const [pid, parent] of rows)
        if (owned.has(parent) && !owned.has(pid)) {
          owned.add(pid);
          changed = true;
        }
    }
    peakResidentBytes = Math.max(
      peakResidentBytes,
      rows
        .filter(([pid]) => owned.has(pid))
        .reduce((total, row) => total + row[2] * 1024, 0),
    );
  } catch {
    memoryMeasurement = "unavailable";
  }
}
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
  const monitor = setInterval(sampleMemory, 2000);
  sampleMemory();
  const status = await new Promise((resolve, reject) => {
    child.on("error", reject);
    child.on("exit", resolve);
  }).finally(() => clearInterval(monitor));
  stages.push({ command: args.join(" "), durationMs: Date.now() - stageStart });
  if (status !== 0) {
    console.error("PCR production build failed at " + args.join(" "));
    process.exit(typeof status === "number" ? status : 1);
  }
  if (Date.now() - started > 18 * 60 * 1000)
    throw new Error("PCR build exceeded its 18-minute budget.");
  if (peakResidentBytes > 6_000_000_000)
    throw new Error("PCR build exceeded the 6 GB process memory budget.");
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
