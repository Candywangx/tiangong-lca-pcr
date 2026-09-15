import { execFileSync } from "node:child_process";
/** Read-only process statistics; Windows uses its native CIM provider. */
export function measureProcessTree({
  pid = process.pid,
  platform = process.platform,
  run = execFileSync,
} = {}) {
  let rows;
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
    const parsed = JSON.parse(output);
    rows = (Array.isArray(parsed) ? parsed : [parsed]).map((row) => [
      Number(row.ProcessId),
      Number(row.ParentProcessId),
      Number(row.WorkingSetSize),
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
        return [id, parent, kb * 1024];
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
export function assertBuildBudget({
  buildMs,
  peakResidentBytes,
  memoryMeasurement,
}) {
  if (memoryMeasurement !== "process-tree-rss" || !(peakResidentBytes > 0))
    throw new Error(
      "Production build requires working process-memory measurement.",
    );
  if (peakResidentBytes > 6_000_000_000)
    throw new Error("PCR build exceeded the 6 GB process memory budget.");
  if (buildMs > 18 * 60 * 1000)
    throw new Error("PCR build exceeded its 18-minute budget.");
}
