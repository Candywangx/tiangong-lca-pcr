import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

import { CodexAppServerAdapter } from "./app-server.mjs";
import { ensureGoalAppServerDaemon } from "./app-server-daemon.mjs";
import { loadGoalConfig } from "./config.mjs";
import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { integrateGoalSnapshot } from "./integration.mjs";
import { landGoalSnapshot } from "./landing.mjs";
import { withGoalLock } from "./lock.mjs";
import { dispatchGoalAuthors, harvestGoalAuthors } from "./orchestrator.mjs";
import { planGoal } from "./planner.mjs";
import { createSyntheticBaseline } from "./synthetic-baseline.mjs";
import { ensureCorepackToolPath } from "./tooling.mjs";

export async function runGoalCommand(command, options) {
  if (command === "doctor") return doctorCommand(options);
  if (command === "plan") return planCommand(options);
  if (command === "status") return statusCommand(options);
  if (command === "stop") return stopCommand(options);
  if (command === "start") return startCommand(options);
  if (command === "resume") return startCommand({ ...options, resume: true });
  if (command === "integrate") return integrateCommand(options);
  if (command === "land") return landCommand(options);
  throw new GoalHarnessError("GOAL_COMMAND_UNKNOWN", `Unknown Goal command: ${command ?? "<missing>"}`);
}

export async function doctorCommand({ configPath }) {
  const config = requireConfig(configPath);
  const checks = [];
  checks.push(commandCheck("git", ["--version"]));
  checks.push(commandCheck(process.execPath, ["--version"], "node"));
  checks.push(commandCheck("corepack", ["pnpm", "--version"], "corepack_pnpm", { timeout: 30_000 }));
  checks.push(moduleCheck("ajv", config.project_root));
  checks.push(pathCheck("policy_prompt", config.policy_prompt_path, "file"));
  checks.push(pathCheck("target_category", config.target_category_path, "directory"));
  if (config.tools.tiangong_cli_root) {
    checks.push(pathCheck("tiangong_cli_root", config.tools.tiangong_cli_root, "directory"));
    checks.push(commandCheck(process.execPath, ["bin/tiangong-lca.js", "--version"], "tiangong_cli", { cwd: config.tools.tiangong_cli_root }));
  }
  if (config.tools.paper_search) {
    checks.push(pathCheck("paper_search_path", config.tools.paper_search, "file"));
    checks.push(commandCheck(config.tools.paper_search, ["--help"], "paper_search"));
  }
  if (config.tools.flow_hybrid_search_root) {
    checks.push(pathCheck("flow_hybrid_search_root", config.tools.flow_hybrid_search_root, "directory"));
    const temporaryToolState = mkdtempSync(path.join(tmpdir(), "tiangong-goal-doctor-tools-"));
    try {
      const runtime = ensureCorepackToolPath(temporaryToolState);
      checks.push(commandCheck(process.execPath, ["scripts/run-flow-hybrid-search.mjs", "--help"], "flow_hybrid_search", {
        cwd: config.tools.flow_hybrid_search_root,
        env: runtime.environment,
        timeout: 60_000,
      }));
    } finally {
      rmSync(temporaryToolState, { recursive: true, force: true });
    }
  }
  const packageDocument = JSON.parse(readFileSync(path.join(config.project_root, "package.json"), "utf8"));
  for (const script of ["validate", "pcr:sync-structured", "aliases:build", "aliases:check", "catalog:build", "catalog:check", "viewer:build", "tiangong-pcr"]) {
    checks.push({ name: `npm_script:${script}`, ok: Boolean(packageDocument.scripts?.[script]), detail: packageDocument.scripts?.[script] ?? null });
  }
  const codexCheck = commandCheck(config.tools.codex, ["--version"], "codex");
  checks.push(codexCheck);
  checks.push({ name: "node_websocket", ok: typeof WebSocket === "function", detail: typeof WebSocket === "function" ? "available" : "Node.js global WebSocket is required" });
  checks.push(commandCheck(config.tools.codex, ["app-server", "--help"], "codex_app_server_listener"));
  if (codexCheck.ok) {
    const adapter = new CodexAppServerAdapter({ command: config.tools.codex });
    try {
      const result = await adapter.doctor();
      checks.push({ name: "codex_app_server", ok: true, detail: { durable_threads: true, thread_list_available: Array.isArray(result.thread_list?.data) } });
      const project = config.codex?.project_id
        ? { id: config.codex.project_id, configured: true }
        : await adapter.findProjectByRoot(config.project_root);
      checks.push({ name: "codex_project_binding", ok: Boolean(project?.id), detail: project ? { id: project.id, configured: Boolean(project.configured) } : { project_root: config.project_root, required: true } });
    } catch (error) {
      checks.push({ name: "codex_app_server", ok: false, detail: { code: error.code, message: error.message, required_interface: error.details?.required_interface } });
    } finally {
      await adapter.close();
    }
  }
  const ok = checks.every((check) => check.ok);
  return { config: publicConfig(config), checks, ok, next_action: ok ? `Run goal:plan -- --config ${configPath} --dry-run` : "Resolve failed doctor checks; visible authors will not be dispatched." };
}

export function planCommand({ configPath, dryRun = false }) {
  const config = requireConfig(configPath);
  const stateDir = goalStateDir(config);
  if (!dryRun && existsSync(path.join(stateDir, "initial-state.json"))) {
    const state = new GoalEventStore({ stateDir }).rebuild();
    return { plan: state.plan, baseline: state.baseline, state, reused: true, next_action: `Run goal:start -- --config ${configPath} --slots 1` };
  }
  const plan = planGoal(config);
  if (dryRun) {
    const temporaryState = mkdtempSync(path.join(tmpdir(), "tiangong-goal-baseline-preview-"));
    try {
      const baseline = createSyntheticBaseline({
        projectRoot: config.project_root,
        goalId: config.goal_id,
        trackedRoots: config.baseline.tracked_roots,
        untrackedAllowlist: config.baseline.untracked_allowlist,
        stateDir: temporaryState,
        dryRun: true,
      });
      return { plan, baseline, next_action: `Inspect this dry run, then run goal:plan -- --config ${configPath}` };
    } finally {
      rmSync(temporaryState, { recursive: true, force: true });
    }
  }
  return withGoalLock(stateDir, "plan", () => {
    if (existsSync(path.join(stateDir, "initial-state.json"))) {
      const state = new GoalEventStore({ stateDir }).rebuild();
      return { plan: state.plan, baseline: state.baseline, state, reused: true, next_action: `Run goal:start -- --config ${configPath} --slots 1` };
    }
    const baseline = createSyntheticBaseline({
      projectRoot: config.project_root,
      goalId: config.goal_id,
      trackedRoots: config.baseline.tracked_roots,
      untrackedAllowlist: config.baseline.untracked_allowlist,
      stateDir,
    });
    const store = new GoalEventStore({ stateDir });
    const state = store.initialize({
      schema_version: 1,
      goal_id: config.goal_id,
      created_at: new Date().toISOString(),
      config: publicConfig(config),
      config_path: path.resolve(configPath),
      baseline,
      plan,
      tasks: plan.tasks,
      snapshots: [],
      default_official_source_seeds: plan.official_source_seeds,
    });
    return { plan, baseline, state, reused: false, next_action: `Run goal:start -- --config ${configPath} --slots 1` };
  });
}

export function statusCommand({ configPath }) {
  const config = requireConfig(configPath);
  const stateDir = goalStateDir(config);
  if (!existsSync(path.join(stateDir, "initial-state.json"))) {
    throw new GoalHarnessError("GOAL_NOT_PLANNED", `Goal state does not exist: ${config.goal_id}`);
  }
  const state = new GoalEventStore({ stateDir }).rebuild();
  return { state, next_action: state.stopped ? `Run goal:resume -- --config ${configPath}` : "Continue the next pending Goal operation." };
}

export function stopCommand({ configPath }) {
  const config = requireConfig(configPath);
  const stateDir = goalStateDir(config);
  if (!existsSync(path.join(stateDir, "initial-state.json"))) {
    throw new GoalHarnessError("GOAL_NOT_PLANNED", `Goal state does not exist: ${config.goal_id}`);
  }
  return withGoalLock(stateDir, "stop", () => {
    const store = new GoalEventStore({ stateDir });
    const state = store.rebuild();
    if (!state.stopped) {
      store.append({ event_id: `stop-${state.last_event_sequence + 1}`, type: "scheduling_stopped", payload: {} });
    }
    return { state: store.rebuild(), worktrees_preserved: true, next_action: `Run goal:resume -- --config ${configPath}` };
  });
}

export async function startCommand({ configPath, slots = null, dryRun = false, resume = false }) {
  const config = requireConfig(configPath);
  let effectiveConfig = config;
  const stateDir = goalStateDir(config);
  if (!existsSync(path.join(stateDir, "initial-state.json"))) {
    if (resume) throw new GoalHarnessError("GOAL_NOT_PLANNED", `Goal state does not exist: ${config.goal_id}`);
    planCommand({ configPath, dryRun: false });
  }
  const runtime = ensureCorepackToolPath(stateDir);
  const daemon = dryRun ? null : await ensureGoalAppServerDaemon({
    stateDir,
    command: config.tools.codex,
    environment: runtime.environment,
  });
  const adapter = new CodexAppServerAdapter({ command: config.tools.codex, endpoint: daemon?.endpoint ?? null, environment: runtime.environment });
  try {
    if (!dryRun) {
      await adapter.doctor();
      const configuredProject = config.codex?.project_id
        ? { id: config.codex.project_id }
        : await adapter.findProjectByRoot(config.project_root);
      if (!configuredProject?.id) {
        throw new GoalHarnessError(
          "GOAL_CODEX_PROJECT_UNAVAILABLE",
          `Codex app-server has no visible project whose root is ${config.project_root}`,
          { required_interface: "project/list + thread/start projectId", project_root: config.project_root },
        );
      }
      effectiveConfig = { ...config, codex: { ...config.codex, project_id: configuredProject.id } };
    }
    const harvest = resume && !dryRun
      ? await harvestGoalAuthors({ config: effectiveConfig, stateDir, adapter })
      : { valid_results: [], failures: [], snapshot: null };
    const result = await dispatchGoalAuthors({
      config: effectiveConfig,
      stateDir,
      slots: slots ?? config.author_slots,
      adapter,
      resumeStopped: resume,
      dryRun,
    });
    return { ...result, harvest, codex_project_id: effectiveConfig.codex?.project_id ?? null, app_server: daemon ? { endpoint: daemon.endpoint, pid: daemon.pid, reused: daemon.reused } : null };
  } finally {
    await adapter.close();
  }
}

export function integrateCommand({ configPath, snapshotId = null, allowPartial = false, dryRun = false }) {
  const config = requireConfig(configPath);
  const stateDir = goalStateDir(config);
  if (!existsSync(path.join(stateDir, "initial-state.json"))) throw new GoalHarnessError("GOAL_NOT_PLANNED", `Goal state does not exist: ${config.goal_id}`);
  return integrateGoalSnapshot({ config, stateDir, snapshotId, allowPartial, dryRun });
}

export function landCommand({ configPath, snapshotId = null, dryRun = false }) {
  const config = requireConfig(configPath);
  const stateDir = goalStateDir(config);
  if (!existsSync(path.join(stateDir, "initial-state.json"))) throw new GoalHarnessError("GOAL_NOT_PLANNED", `Goal state does not exist: ${config.goal_id}`);
  return landGoalSnapshot({ config, stateDir, snapshotId, dryRun });
}

export function goalStateDir(config) {
  return path.join(config.project_root, "library", ".pcr-builder-state", "goals", config.goal_id);
}

function requireConfig(configPath) {
  if (!configPath) throw new GoalHarnessError("GOAL_CONFIG_REQUIRED", "--config <goal.yaml> is required");
  return loadGoalConfig({ configPath });
}

function publicConfig(config) {
  return JSON.parse(JSON.stringify(config));
}

function commandCheck(command, args, name = command, options = {}) {
  try {
    const output = execFileSync(command, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 15_000, ...options }).trim();
    return { name, ok: true, detail: output.split("\n")[0] };
  } catch (error) {
    return { name, ok: false, detail: error.message };
  }
}

function moduleCheck(moduleName, cwd) {
  try {
    execFileSync(process.execPath, ["-e", `import('${moduleName}')`], { cwd, stdio: "ignore", timeout: 15_000 });
    return { name: `node_module:${moduleName}`, ok: true, detail: "available" };
  } catch (error) {
    return { name: `node_module:${moduleName}`, ok: false, detail: error.message };
  }
}

function pathCheck(name, value, type = null) {
  try {
    const stat = statSync(value);
    const typeOk = type === "file" ? stat.isFile() : type === "directory" ? stat.isDirectory() : true;
    return { name, ok: typeOk, detail: value };
  } catch (error) {
    return { name, ok: false, detail: `${value}: ${error.message}` };
  }
}
