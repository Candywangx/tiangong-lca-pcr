import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";

export function ensureCorepackToolPath(stateDir) {
  const binDir = path.join(stateDir, "tools", "corepack-bin");
  const pnpmPath = path.join(binDir, process.platform === "win32" ? "pnpm.cmd" : "pnpm");
  if (!existsSync(pnpmPath)) {
    mkdirSync(binDir, { recursive: true });
    try {
      execFileSync("corepack", ["enable", "--install-directory", binDir], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    } catch (error) {
      throw new GoalHarnessError("GOAL_COREPACK_SHIM_FAILED", `Cannot provision the runtime pnpm shim without changing repository dependencies: ${error.message}`);
    }
  }
  return { bin_dir: binDir, environment: { ...process.env, PATH: `${binDir}${path.delimiter}${process.env.PATH ?? ""}` } };
}

export function authenticatedHybridSearchDryRunCheck({
  tiangongCliRoot,
  flowHybridSearchRoot,
  credentialsEnvFile = null,
  runner = spawnTool,
  maxAttempts = 3,
  retryDelayMs = 1_000,
  sleeper = sleepSync,
}) {
  const name = "flow_hybrid_search_authenticated_preflight";
  if (!tiangongCliRoot || !flowHybridSearchRoot) return failedHybridPreflight(name, "tool_configuration");
  const envFileArg = `--env-file-if-exists=${credentialsEnvFile ? path.resolve(credentialsEnvFile) : path.join(tiangongCliRoot, ".env")}`;
  const temporary = mkdtempSync(path.join(tmpdir(), "tiangong-goal-hybrid-doctor-"));
  const requestPath = path.join(temporary, "request.json");
  writeFileSync(requestPath, `${JSON.stringify({ query: "electricity", filter: { flowType: "Product flow" }, match_count: 1, page_size: 1 })}\n`, { mode: 0o600 });
  try {
    const attempts = Number.isInteger(maxAttempts) && maxAttempts > 0 ? maxAttempts : 3;
    let lastResult;
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      lastResult = authenticatedHybridSearchAttempt({ name, tiangongCliRoot, flowHybridSearchRoot, envFileArg, requestPath, runner });
      if (lastResult.ok) {
        return attempt === 1 ? lastResult : { ...lastResult, detail: { ...lastResult.detail, attempts: attempt } };
      }
      if (attempt < attempts) sleeper(retryDelayMs);
    }
    return { ...lastResult, detail: { ...lastResult.detail, attempts } };
  } finally {
    rmSync(temporary, { recursive: true, force: true });
  }
}

function authenticatedHybridSearchAttempt({ name, tiangongCliRoot, flowHybridSearchRoot, envFileArg, requestPath, runner }) {
  try {
    const auth = runner(process.execPath, [
      envFileArg,
      path.join(tiangongCliRoot, "bin", "tiangong-lca.js"),
      "auth", "doctor-auth", "--json",
    ], { cwd: tiangongCliRoot });
    if (auth?.status !== 0) return failedHybridPreflight(name, "authenticated_session", { exit_code: auth?.status ?? null });
    let authResult;
    try { authResult = JSON.parse(String(auth.stdout ?? "")); } catch { return failedHybridPreflight(name, "authenticated_session_json"); }
    if (authResult.status !== "passed") return failedHybridPreflight(name, "authenticated_session_status");

    const liveQuery = runner(process.execPath, [
      envFileArg,
      path.join(flowHybridSearchRoot, "scripts", "run-flow-hybrid-search.mjs"),
      "--cli-dir", tiangongCliRoot,
      "--input", requestPath,
      "--json",
    ], { cwd: flowHybridSearchRoot });
    if (liveQuery?.status !== 0) return failedHybridPreflight(name, "hybrid_search_live_query", { exit_code: liveQuery?.status ?? null });
    let liveResult;
    try { liveResult = JSON.parse(String(liveQuery.stdout ?? "")); } catch { return failedHybridPreflight(name, "hybrid_search_live_query_json"); }
    const candidate = (Array.isArray(liveResult?.data) ? liveResult.data : [])
      .map((row) => row?.id ?? row?.uuid ?? row?.flow_id)
      .find((value) => /^[0-9a-f-]{36}$/iu.test(String(value ?? "")));
    if (!candidate) return failedHybridPreflight(name, "hybrid_search_no_candidate");
    const direct = runner(process.execPath, [
      envFileArg,
      path.join(tiangongCliRoot, "bin", "tiangong-lca.js"),
      "flow", "get", "--id", candidate, "--state-code", "100", "--json",
    ], { cwd: tiangongCliRoot });
    if (direct?.status !== 0) return failedHybridPreflight(name, "state_code_100_direct_read", { exit_code: direct?.status ?? null });
    let directResult;
    try { directResult = JSON.parse(String(direct.stdout ?? "")); } catch { return failedHybridPreflight(name, "state_code_100_direct_read_json"); }
    const returnedUuid = directResult?.flow?.flowDataSet?.flowInformation?.dataSetInformation?.["common:UUID"];
    if (directResult?.state_code !== 100 || String(returnedUuid ?? "").toLowerCase() !== String(candidate).toLowerCase()) {
      return failedHybridPreflight(name, "state_code_100_direct_read_mismatch");
    }
    return { name, ok: true, detail: { authenticated: true, live_query: true, state_code_100_read: true, credentials_redacted: true } };
  } catch {
    return failedHybridPreflight(name, "execution");
  }
}

function failedHybridPreflight(name, stage, extra = {}) {
  return { name, ok: false, detail: { code: "GOAL_HYBRID_AUTHENTICATED_PREFLIGHT_FAILED", stage, ...extra, credentials_redacted: true } };
}

function spawnTool(command, args, options) {
  return spawnSync(command, args, {
    ...options,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    timeout: 60_000,
    maxBuffer: 16 * 1024 * 1024,
  });
}

function sleepSync(milliseconds) {
  if (!Number.isFinite(milliseconds) || milliseconds <= 0) return;
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}
