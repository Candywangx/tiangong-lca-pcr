import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { closeSync, existsSync, mkdirSync, openSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import net from "node:net";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";

export async function ensureGoalAppServerDaemon({
  stateDir,
  command = "codex",
  environment = process.env,
  spawnFactory = (program, args, options) => spawn(program, args, options),
  portAllocator = allocateLoopbackPort,
  processAlive = isProcessAlive,
  readinessProbe = probeReady,
  readinessAttempts = 100,
  readinessDelayMs = 100,
} = {}) {
  const daemonDir = path.join(stateDir, "app-server");
  const manifestPath = path.join(daemonDir, "daemon.json");
  mkdirSync(daemonDir, { recursive: true, mode: 0o700 });
  if (existsSync(manifestPath)) {
    const current = readDaemonManifest(manifestPath);
    if (processAlive(current.pid)) {
      if (await readinessProbe(current.endpoint)) return { ...current, reused: true, manifest_path: manifestPath };
      throw unavailable("Recorded Goal app-server process is alive but its loopback listener is not ready", current, manifestPath);
    }
  }

  const port = await portAllocator();
  const endpoint = `ws://127.0.0.1:${port}`;
  const stdoutPath = path.join(daemonDir, "stdout.log");
  const stderrPath = path.join(daemonDir, "stderr.log");
  const stdout = openSync(stdoutPath, "a", 0o600);
  const stderr = openSync(stderrPath, "a", 0o600);
  let child;
  try {
    child = spawnFactory(command, ["app-server", "--listen", endpoint], {
      detached: true,
      stdio: ["ignore", stdout, stderr],
      env: environment,
    });
    child.unref();
  } catch (error) {
    throw unavailable(`Cannot start Goal app-server: ${error.message}`, { endpoint, pid: null }, manifestPath);
  } finally {
    closeSync(stdout);
    closeSync(stderr);
  }
  const record = {
    schema_version: 1,
    endpoint,
    pid: child.pid,
    command,
    started_at: new Date().toISOString(),
    stdout_path: stdoutPath,
    stderr_path: stderrPath,
  };
  for (let attempt = 0; attempt < readinessAttempts; attempt += 1) {
    if (await readinessProbe(endpoint)) {
      atomicWriteJson(manifestPath, record);
      return { ...record, reused: false, manifest_path: manifestPath };
    }
    if (readinessDelayMs > 0) await new Promise((resolve) => setTimeout(resolve, readinessDelayMs));
  }
  throw unavailable("Goal app-server did not become ready", record, manifestPath);
}

async function allocateLoopbackPort() {
  const server = net.createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const address = server.address();
  const port = typeof address === "object" && address ? address.port : null;
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  if (!Number.isInteger(port)) throw new GoalHarnessError("GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE", "Cannot allocate a loopback app-server port.");
  return port;
}

async function probeReady(endpoint) {
  try {
    const health = endpoint.replace(/^ws:/u, "http:").replace(/\/$/u, "");
    const response = await fetch(`${health}/readyz`, { signal: AbortSignal.timeout(1000) });
    return response.ok;
  } catch {
    return false;
  }
}

function isProcessAlive(pid) {
  if (!Number.isInteger(pid) || pid <= 1) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return error.code === "EPERM";
  }
}

function readDaemonManifest(manifestPath) {
  let value;
  try {
    value = JSON.parse(readFileSync(manifestPath, "utf8"));
  } catch (error) {
    throw new GoalHarnessError("GOAL_APP_SERVER_STATE_INVALID", `Cannot parse Goal app-server state: ${manifestPath}`, { cause: error.message });
  }
  if (value.schema_version !== 1 || !Number.isInteger(value.pid) || !/^ws:\/\/127\.0\.0\.1:[0-9]+$/u.test(value.endpoint ?? "")) {
    throw new GoalHarnessError("GOAL_APP_SERVER_STATE_INVALID", `Unsafe Goal app-server state: ${manifestPath}`, { record: value });
  }
  return value;
}

function atomicWriteJson(filePath, value) {
  const temporary = `${filePath}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx", mode: 0o600 });
  renameSync(temporary, filePath);
}

function unavailable(message, record, manifestPath) {
  return new GoalHarnessError("GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE", message, {
    endpoint: record.endpoint,
    pid: record.pid,
    daemon_state: manifestPath,
    required_interface: "codex app-server --listen ws://127.0.0.1:<port> with durable thread/start",
  });
}
