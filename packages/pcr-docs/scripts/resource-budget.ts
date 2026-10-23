import {unknownField} from "../../pcr-core/src/types.ts";
export interface ProcessMeasureOptions {pid?:number;platform?:string;run?:(file:string,args:readonly string[],options:{encoding:"utf8";maxBuffer:number;timeout:number})=>string}
import { execFileSync, spawn } from "node:child_process";
import { errorMessage } from "../../pcr-core/src/types.ts";

export interface BuildStageMetrics {
  command: string;
  durationMs: number;
  peakResidentBytes: number;
  memoryMeasurement: string;
  status: "passed" | "failed";
  exitCode: number | null;
  failure?: string;
}
export class BuildStageFailure extends Error {
  readonly stage: BuildStageMetrics;
  constructor(stage: BuildStageMetrics, cause: unknown) {
    super(errorMessage(cause), { cause });
    this.stage = stage;
  }
}

/** Always report a completed attempt, including a zero-exit child rejected by the RSS gate. */
export async function runMeasuredBuildStage({
  args, cwd, env, sample, report,
}: {
  args: string[];
  cwd: string;
  env: NodeJS.ProcessEnv;
  sample: () => { residentBytes: number; memoryMeasurement: string };
  report: (stage: BuildStageMetrics) => void;
}): Promise<void> {
  const started = Date.now();
  const stage: BuildStageMetrics = {
    command: args.join(" "), durationMs: 0, peakResidentBytes: 0,
    memoryMeasurement: "process-tree-rss", status: "failed", exitCode: null,
  };
  const measure = () => {
    try {
      const current = sample();
      stage.peakResidentBytes = Math.max(stage.peakResidentBytes, current.residentBytes);
      if (current.memoryMeasurement !== "process-tree-rss") stage.memoryMeasurement = "unavailable";
    } catch {
      // Finish observing the child and reject its stage; never turn a failed monitor
      // into an uncaught timer error that skips the relocated build's cleanup.
      stage.memoryMeasurement = "unavailable";
    }
  };
  let monitor: ReturnType<typeof setInterval> | undefined;
  try {
    const child = spawn(process.execPath, args, { cwd, stdio: "inherit", env });
    // Install listeners before sampling: even an immediate spawn failure must be observed.
    const exited = new Promise<number | null>((resolve, reject) => {
      child.on("error", reject);
      child.on("exit", resolve);
    });
    monitor = setInterval(measure, 2000);
    measure();
    stage.exitCode = await exited;
    measure();
    if (stage.exitCode !== 0) throw new Error("PCR production build failed at " + stage.command);
    assertBuildResources(stage);
    stage.status = "passed";
  } catch (error) {
    stage.failure = errorMessage(error);
    throw new BuildStageFailure(stage, error);
  } finally {
    clearInterval(monitor);
    stage.durationMs = Date.now() - started;
    report(stage);
  }
}
/** Read-only process statistics; Windows uses its native CIM provider. */
export function measureProcessTree({
  pid = process.pid,
  platform = process.platform,
  run = execFileSync,
}: ProcessMeasureOptions = {}) {
  let rows: [number,number,number][];
  if (platform === "win32") {
    const output = run(
      "powershell.exe",
      [
        "-NoProfile",
        "-Command",
        "Get-CimInstance Win32_Process | Select-Object ProcessId,ParentProcessId,WorkingSetSize | ConvertTo-Json -Compress",
      ],
      { encoding: "utf8", maxBuffer: 4 * 1024 * 1024, timeout: 10000 },
    );
    const parsed: unknown = JSON.parse(output);
    rows = (Array.isArray(parsed) ? parsed : [parsed]).map((row) => [
      Number(unknownField(row,"ProcessId")),
      Number(unknownField(row,"ParentProcessId")),
      Number(unknownField(row,"WorkingSetSize")),
    ]);
  } else {
    const output = run("ps", ["-axo", "pid=,ppid=,rss="], {
      encoding: "utf8",
      maxBuffer: 4 * 1024 * 1024,
      timeout: 10000,
    });
    rows = output
      .trim()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [id, parent, kb] = line.trim().split(/\s+/u).map(Number);
        return [id ?? Number.NaN, parent ?? Number.NaN, (kb ?? Number.NaN) * 1024];
      });
  }
  if (
    !rows.some((row) => row[0] === pid) ||
    rows.some(
      (row) =>
        row.length !== 3 ||
        row.some((value) => !Number.isFinite(value) || value < 0),
    )
  )
    throw new Error("Process memory measurement is incomplete.");
  const owned = new Set([pid]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const [id, parent] of rows)
      if (owned.has(parent) && !owned.has(id)) {
        owned.add(id);
        changed = true;
      }
  }
  const bytes = rows
    .filter(([id]) => owned.has(id))
    .reduce((total, row) => total + row[2], 0);
  if (bytes <= 0) throw new Error("Process memory measurement returned zero.");
  return bytes;
}
export function assertBuildResources({
  peakResidentBytes,
  memoryMeasurement,
}: {peakResidentBytes:number;memoryMeasurement:string}) {
  if (memoryMeasurement !== "process-tree-rss" || !(peakResidentBytes > 0))
    throw new Error(
      "Production build requires working process-memory measurement.",
    );
  if (peakResidentBytes > 6_000_000_000)
    throw new Error("PCR build exceeded the 6 GB process memory budget.");
}
