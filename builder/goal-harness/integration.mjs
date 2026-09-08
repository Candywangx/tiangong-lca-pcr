import { execFileSync, spawnSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { existsSync, lstatSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";

import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { withGoalLock } from "./lock.mjs";
import { buildIntegrationSnapshot } from "./scheduler.mjs";
import { applyTaskTransition } from "./state-machine.mjs";
import { ensureGoalWorktree } from "./worktrees.mjs";
import { runCachedViewerBuild } from "./derived-cache.mjs";
import { selectGoalRuntimeBaseCommit } from "./runtime-baseline.mjs";
import { finalizeIntegrationCompletion, persistIntegrationCompletion, readIntegrationCompletion } from "./integration-completion.mjs";

const MAPPING_RELATIONS = new Set(["exact", "broader", "narrower", "proxy"]);

export function assertAcceptedMappingDecision(entry, { materialPcrIds }) {
  if (!materialPcrIds.has(entry.pcr_id)) {
    throw new GoalHarnessError("GOAL_MAPPING_TARGET_NOT_MATERIAL", `Mapping target is not a reviewed material PCR: ${entry.pcr_id}`, { entry });
  }
  const acceptance = entry.acceptance ?? {};
  const decisionTime = Date.parse(acceptance.decided_at_utc ?? "");
  const valid =
    /^\d+$/u.test(String(entry.code)) &&
    typeof entry.label === "string" && entry.label.length > 0 &&
    typeof entry.pcr_id === "string" && entry.pcr_id.startsWith("pcr.") &&
    MAPPING_RELATIONS.has(entry.mapping_type) &&
    entry.confidence === "reviewed" &&
    acceptance.status === "accepted" &&
    typeof acceptance.decided_by === "string" && acceptance.decided_by.length > 0 &&
    Number.isFinite(decisionTime) && /Z$/u.test(acceptance.decided_at_utc) &&
    /^docs\/adr\/[a-zA-Z0-9._/-]+\.md$/u.test(acceptance.decision_ref ?? "");
  if (!valid) {
    throw new GoalHarnessError("GOAL_MAPPING_DECISION_INVALID", `Accepted mapping ${entry.code ?? "<missing>"} lacks reviewed relation or durable acceptance metadata.`, { entry });
  }
  return true;
}

export function mergeAcceptedMappings(document, additions, { materialPcrIds }) {
  if (document.schema_version !== 2 || document.status !== "current" || !Array.isArray(document.mappings)) {
    throw new GoalHarnessError("GOAL_MAPPING_DOCUMENT_INVALID", "Integrator requires a schema_version 2 current mapping document.");
  }
  const merged = structuredClone(document);
  for (const addition of additions) {
    assertAcceptedMappingDecision(addition, { materialPcrIds });
    const existing = merged.mappings.find((entry) => String(entry.code) === String(addition.code));
    if (existing) {
      assertAcceptedMappingDecision(existing, { materialPcrIds: new Set([...materialPcrIds, existing.pcr_id]) });
      if (stableJson(mappingEdgeIdentity(existing)) !== stableJson(mappingEdgeIdentity(addition))) {
        throw new GoalHarnessError("GOAL_MAPPING_EDGE_CONFLICT", `Classification code ${addition.code} already has a different positive edge.`, { existing, proposed: addition });
      }
      continue;
    }
    merged.mappings.push(structuredClone(addition));
  }
  merged.mappings.sort((left, right) => String(left.code).localeCompare(String(right.code)) || String(left.pcr_id).localeCompare(String(right.pcr_id)));
  return merged;
}

function mappingEdgeIdentity(entry) {
  return {
    code: String(entry.code),
    label: entry.label,
    pcr_id: entry.pcr_id,
    mapping_type: entry.mapping_type,
    confidence: entry.confidence,
  };
}

export function selectIntegrationBaseCommit(state, { projectRoot = null } = {}) {
  return selectGoalRuntimeBaseCommit(state, { projectRoot });
}

export function materializeAuthorCommitTree({ worktreePath, authorCommit, allowedFiles }) {
  if (!/^[a-f0-9]{40,64}$/u.test(String(authorCommit))) {
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Invalid author commit SHA: ${authorCommit}`);
  }
  const files = [...new Set(allowedFiles ?? [])].sort();
  if (files.length !== 4) {
    throw new GoalHarnessError("GOAL_INTEGRATION_AUTHOR_PATH_INVALID", `Author commit ${authorCommit} must materialize exactly four authorized files.`, { allowed_files: files });
  }
  git(worktreePath, ["restore", "--source", authorCommit, "--staged", "--worktree", "--", ...files]);
  return { author_commit: authorCommit, files };
}

export function prepareIntegrationWorkspace({ config, snapshot, baseCommit }) {
  const defaultPath = path.join(config.project_root, ".worktrees", "goals", config.goal_id, "integrations", snapshot.id);
  const defaultBranch = `codex/goal-${safeToken(config.goal_id)}-${snapshot.id}`;
  let worktreePath = snapshot.worktree_path ?? defaultPath;
  let branch = snapshot.branch ?? defaultBranch;
  let integrationAttempt = snapshot.integration_attempt ?? 1;
  const preservedWorktreePaths = [...new Set(snapshot.preserved_worktree_paths ?? [])];

  while (existsSync(worktreePath)) {
    const actualBranch = git(worktreePath, ["branch", "--show-current"]);
    if (actualBranch !== branch) {
      throw new GoalHarnessError("GOAL_INTEGRATION_WORKTREE_CONFLICT", `Integration worktree is on ${actualBranch}, expected ${branch}.`);
    }
    const dirty = gitStatus(worktreePath).length > 0;
    const head = git(worktreePath, ["rev-parse", "HEAD"]);
    if (!dirty && isAncestor(worktreePath, baseCommit, head)) {
      return { worktreePath, branch, integrationAttempt, preservedWorktreePaths };
    }
    preservedWorktreePaths.push(worktreePath);
    integrationAttempt += 1;
    worktreePath = `${defaultPath}-retry-${integrationAttempt}`;
    branch = `${defaultBranch}-retry-${integrationAttempt}`;
  }

  ensureGoalWorktree({ projectRoot: config.project_root, worktreePath, commit: baseCommit, branch });
  return { worktreePath, branch, integrationAttempt, preservedWorktreePaths: [...new Set(preservedWorktreePaths)] };
}

export function integrateGoalSnapshot({ config, stateDir, snapshotId = null, allowPartial = false, dryRun = false, commandRunner = runCommand }) {
  return withGoalLock(path.join(stateDir, "integration-operation"), "integrate", () => {
    const prepared = withGoalLock(stateDir, "integration-prepare", () => {
    const store = new GoalEventStore({ stateDir });
    let state = store.rebuild();
    let snapshot = selectSnapshot(state, snapshotId);
    if (!snapshot && allowPartial) {
      const candidate = buildIntegrationSnapshot({
        goalId: config.goal_id,
        tasks: state.tasks,
        batchSize: config.integration_batch_size ?? 6,
        snapshots: state.snapshots ?? [],
        allowPartial: true,
      });
      if (candidate) {
        snapshot = { ...candidate, state: "integration_pending", created_at: new Date().toISOString(), partial: candidate.task_ids.length < (config.integration_batch_size ?? 6) };
        if (!dryRun) {
          store.append({ event_id: `${snapshot.id}-created`, type: "snapshot_created", payload: snapshot });
          for (const taskId of snapshot.task_ids) {
            state = store.rebuild();
            let task = state.tasks.find((entry) => entry.id === taskId);
            task = applyTaskTransition(task, { transition_id: `${snapshot.id}-${taskId}-pending`, to: "integration_pending", at: new Date().toISOString() });
            task = { ...task, integration_snapshot_id: snapshot.id };
            store.append({ event_id: `${snapshot.id}-${taskId}-assigned`, type: "task_replaced", payload: { task } });
          }
          state = store.rebuild();
          snapshot = state.snapshots.find((entry) => entry.id === snapshot.id);
        }
      }
    }
    if (!snapshot) {
      throw new GoalHarnessError("GOAL_INTEGRATION_NOT_READY", "No pending six-result integration snapshot is available.", { allow_partial: allowPartial });
    }
    if (["validated", "landed"].includes(snapshot.state)) {
      const expectedState = snapshot.state === "landed" ? "completed" : "validated";
      const incomplete = snapshot.task_ids.filter((taskId) => state.tasks.find((task) => task.id === taskId)?.state !== expectedState);
      if (incomplete.length > 0) {
        throw new GoalHarnessError("GOAL_INTEGRATION_FINALIZATION_INCOMPLETE", "Snapshot and task completion states disagree; inspect legacy finalization evidence before landing or retrying.", { snapshot_id: snapshot.id, task_ids: incomplete });
      }
      return { snapshot, status: `already_${snapshot.state}`, next_action: snapshot.state === "validated" ? "Run goal:land for this validated snapshot." : "Continue the remaining Goal queue." };
    }
    if (!dryRun && snapshot.state === "integrating" && snapshot.operation_id) {
      const completion = readIntegrationCompletion({ stateDir, snapshotId: snapshot.id, operationId: snapshot.operation_id });
      if (completion) return { completion };
    }
    const tasks = snapshot.task_ids.map((taskId) => state.tasks.find((task) => task.id === taskId));
    if (tasks.some((task) => !task)) {
      throw new GoalHarnessError("GOAL_INTEGRATION_STATE_INVALID", `Snapshot ${snapshot.id} references a missing task.`);
    }
    const commandPlan = integrationCommands(config, tasks);
    if (dryRun) {
      return { snapshot, tasks: tasks.map(publicTask), commands: commandPlan, status: "dry_run", next_action: "Repeat goal:integrate without --dry-run." };
    }
    if (!config.integration?.decided_by) {
      throw new GoalHarnessError("GOAL_MAPPING_DECIDER_REQUIRED", "integration.decided_by is required before accepted mapping publication.");
    }
    const prior = state.snapshots.find((entry) => entry.id !== snapshot.id && ["integrating", "validated"].includes(entry.state));
    if (prior) throw new GoalHarnessError("GOAL_INTEGRATION_NOT_READY", `Finish and land prior snapshot ${prior.id} before starting another integration.`);

    const baseCommit = selectIntegrationBaseCommit(state, { projectRoot: config.project_root });
    const workspace = prepareIntegrationWorkspace({ config, snapshot, baseCommit });
    const { worktreePath, branch, integrationAttempt } = workspace;

    snapshot = {
      ...snapshot,
      state: "integrating",
      worktree_path: worktreePath,
      branch,
      base_commit: baseCommit,
      integration_attempt: integrationAttempt,
      preserved_worktree_paths: workspace.preservedWorktreePaths,
      started_at: snapshot.started_at ?? new Date().toISOString(),
      last_attempt_started_at: new Date().toISOString(),
      operation_id: randomUUID(),
    };
    store.append({ event_id: `${snapshot.operation_id}-integrating`, type: "snapshot_replaced", payload: { snapshot } });
    for (const selected of tasks) {
      state = store.rebuild();
      let task = state.tasks.find((entry) => entry.id === selected.id);
      if (task.state === "integration_pending") {
        task = applyTaskTransition(task, { transition_id: `${snapshot.id}-${task.id}-integrating`, to: "integrating", at: new Date().toISOString() });
        store.append({ event_id: `${snapshot.operation_id}-${task.id}-integration-started`, type: "task_replaced", payload: { task } });
      }
    }
    state = store.rebuild();
    return { snapshot, tasks, preparedTasks: tasks.map((selected) => state.tasks.find((task) => task.id === selected.id)), commandPlan, worktreePath, baseCommit };
    });
    if (prepared.completion) {
      verifyCompletionWorktree(prepared.completion);
      finalizeIntegrationCompletion({ stateDir, record: prepared.completion });
      if (prepared.completion.snapshot.state === "retryable_failure") {
        throw new GoalHarnessError(prepared.completion.snapshot.failure_code, prepared.completion.snapshot.failure_message);
      }
      return { snapshot: prepared.completion.snapshot, status: "validated", command_results: prepared.completion.command_results, next_action: "Run goal:land after reviewing the recovered snapshot and CAS preview." };
    }
    if (!prepared.worktreePath) return prepared;
    const { tasks, preparedTasks, commandPlan, worktreePath, baseCommit } = prepared;
    let { snapshot } = prepared;

    const headBefore = git(worktreePath, ["rev-parse", "HEAD"]);
    if (!snapshot.integration_commit && headBefore === baseCommit && gitStatus(worktreePath).length === 0) {
      for (const selected of tasks) {
        materializeAuthorCommitTree({
          worktreePath,
          authorCommit: selected.author_commit,
          allowedFiles: selected.allowed_files,
        });
      }
    }
    const decision = installAcceptedMappings({ config, worktreePath, snapshot, tasks });
    const commandResults = [];
    try {
      for (const command of commandPlan) {
        const execute = () => commandRunner({ cwd: worktreePath, command: command.command, args: command.args, name: command.name });
        commandResults.push(command.name === "viewer_build"
          ? runCachedViewerBuild({ root: worktreePath, stateDir, runner: execute })
          : execute());
      }
    } catch (error) {
      snapshot = { ...snapshot, state: "retryable_failure", failure_code: error.code ?? "GOAL_INTEGRATION_COMMAND_FAILED", failure_message: error.message, command_results: commandResults };
      const record = completionRecord({ config, prepared, snapshot, tasks: preparedTasks, commandResults });
      persistIntegrationCompletion({ stateDir, record });
      finalizeIntegrationCompletion({ stateDir, record });
      throw error;
    }

    const changedFiles = gitStatusPaths(worktreePath);
    assertIntegrationPaths({ changedFiles, tasks, decision });
    git(worktreePath, ["add", "--", ...changedFiles]);
    git(worktreePath, ["diff", "--cached", "--check"]);
    if (git(worktreePath, ["diff", "--cached", "--name-only"])) {
      git(worktreePath, ["commit", "-m", `feat(pcr): integrate ${snapshot.id}`]);
    }
    const integrationCommit = git(worktreePath, ["rev-parse", "HEAD"]);
    const integratedFiles = gitZ(worktreePath, ["diff", "--name-only", "-z", baseCommit, integrationCommit, "--"]);
    snapshot = {
      ...snapshot,
      state: "validated",
      integration_commit: integrationCommit,
      changed_files: integratedFiles,
      decision_ref: decision.decision_ref,
      accepted_codes: decision.additions.map((entry) => entry.code),
      command_results: commandResults,
      validated_at: new Date().toISOString(),
    };
    const finalizedTasks = preparedTasks.map((selected) => {
      let task = selected;
      if (task.state === "integrating") {
        task = applyTaskTransition(task, { transition_id: `${snapshot.id}-${task.id}-integrated`, to: "integrated", at: new Date().toISOString() });
        task = applyTaskTransition(task, { transition_id: `${snapshot.id}-${task.id}-validated`, to: "validated", at: new Date().toISOString() });
        task = { ...task, integration_commit: integrationCommit };
      }
      return task;
    });
    const record = completionRecord({ config, prepared, snapshot, tasks: finalizedTasks, commandResults });
    persistIntegrationCompletion({ stateDir, record });
    finalizeIntegrationCompletion({ stateDir, record });
    return { snapshot, status: "validated", command_results: commandResults, next_action: "Run goal:land after reviewing the validated snapshot and CAS preview." };
  });
}

function completionRecord({ config, prepared, snapshot, tasks, commandResults }) {
  const paths = snapshot.changed_files ?? gitStatusPaths(prepared.worktreePath);
  return {
    schema_version: 1, goal_id: config.goal_id, operation_id: prepared.snapshot.operation_id,
    prepared_snapshot: prepared.snapshot, prepared_tasks: prepared.preparedTasks,
    snapshot, tasks, command_results: commandResults,
    worktree_verification: completionWorktreeFingerprint(prepared.worktreePath, paths),
  };
}

function completionWorktreeFingerprint(root, paths) {
  return {
    head: git(root, ["rev-parse", "HEAD"]), status: gitStatus(root),
    files: Object.fromEntries([...paths].sort().map((relative) => {
      if (path.isAbsolute(relative) || relative.split("/").some((part) => !part || part === "." || part === "..")) {
        throw new GoalHarnessError("GOAL_INTEGRATION_COMPLETION_CORRUPT", "Completion has an unsafe output path.");
      }
      const file = path.join(root, relative);
      if (!existsSync(file)) return [relative, null];
      if (!lstatSync(file).isFile() || lstatSync(file).isSymbolicLink()) throw new GoalHarnessError("GOAL_INTEGRATION_COMPLETION_CORRUPT", "Completion output is not a regular file.");
      return [relative, createHash("sha256").update(readFileSync(file)).digest("hex")];
    })),
  };
}

function verifyCompletionWorktree(record) {
  const expected = record.worktree_verification;
  if (!expected || !isDeepStrictEqual(expected, completionWorktreeFingerprint(record.prepared_snapshot.worktree_path, Object.keys(expected.files ?? {})))) {
    throw new GoalHarnessError("GOAL_INTEGRATION_COMPLETION_CONFLICT", "Integration worktree no longer matches its completed operation; preserved without finalizing.");
  }
}

function installAcceptedMappings({ config, worktreePath, snapshot, tasks }) {
  const decidedAt = snapshot.created_at ?? new Date().toISOString();
  const decisionRef = allocateDecisionRef(worktreePath, config.goal_id, snapshot.id);
  const materialPcrIds = new Set();
  const additions = tasks.map((task) => {
    const manifestPath = path.join(worktreePath, ...task.pcr_path.split("/"), "manifest.yaml");
    const manifest = parseYaml(readFileSync(manifestPath, "utf8"));
    if (manifest.content_maturity !== "authored_methodology") {
      throw new GoalHarnessError("GOAL_MAPPING_TARGET_NOT_MATERIAL", `Integrated target is not authored methodology: ${task.pcr_path}`);
    }
    materialPcrIds.add(manifest.id);
    const classificationRef = (manifest.classification_refs ?? []).find((entry) =>
      String(entry.system).toLowerCase() === config.classification_system.toLowerCase() &&
      String(entry.version) === String(config.classification_version) &&
      String(entry.code) === String(task.cpc_code),
    );
    if (!classificationRef || !MAPPING_RELATIONS.has(classificationRef.mapping_type)) {
      throw new GoalHarnessError("GOAL_MAPPING_DECISION_INVALID", `PCR ${manifest.id} lacks a supported classification_ref for ${task.cpc_code}.`);
    }
    return {
      code: String(task.cpc_code),
      label: task.product_name_en,
      pcr_id: manifest.id,
      mapping_type: classificationRef.mapping_type,
      confidence: "reviewed",
      acceptance: {
        status: "accepted",
        decided_by: config.integration.decided_by,
        decided_at_utc: decidedAt,
        decision_ref: decisionRef,
      },
    };
  });
  const mappingRelative = `classifications/mappings/${config.classification_system}-${config.classification_version}-to-pcr.yaml`;
  const mappingPath = path.join(worktreePath, ...mappingRelative.split("/"));
  const mapping = parseYaml(readFileSync(mappingPath, "utf8"));
  const merged = mergeAcceptedMappings(mapping, additions, { materialPcrIds });
  writeFileSync(mappingPath, renderYaml(merged));
  const adrPath = path.join(worktreePath, ...decisionRef.split("/"));
  mkdirSync(path.dirname(adrPath), { recursive: true });
  if (!existsSync(adrPath)) {
    writeFileSync(adrPath, renderDecisionAdr({ config, snapshot, additions }));
  }
  return { mapping_relative: mappingRelative, decision_ref: decisionRef, additions };
}

function integrationCommands(config, tasks) {
  const selected = tasks[0];
  const prefix = config.target_category_relative.replace(/^library\/pcrs\//u, "");
  return [
    { name: "aliases_build", command: "npm", args: ["run", "aliases:build"] },
    { name: "catalog_build", command: "npm", args: ["run", "catalog:build"] },
    { name: "viewer_build", command: "npm", args: ["run", "viewer:build"] },
    { name: "validate", command: "npm", args: ["run", "validate"] },
    { name: "smoke_list", command: "npm", args: ["--silent", "run", "tiangong-pcr", "--", "list", "--path-prefix", prefix, "--format", "json"] },
    { name: "smoke_resolve", command: "npm", args: ["--silent", "run", "tiangong-pcr", "--", "resolve", "--classification", `${config.classification_system}:${config.classification_version}:${selected.cpc_code}`, "--format", "json"] },
    { name: "smoke_guidance", command: "npm", args: ["--silent", "run", "tiangong-pcr", "--", "guidance", "--pcr", selected.pcr_id, "--format", "json"] },
  ];
}

function runCommand({ cwd, command, args, name }) {
  const startedAt = new Date().toISOString();
  const result = spawnSync(command, args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], maxBuffer: 256 * 1024 * 1024 });
  if (result.status !== 0) {
    throw new GoalHarnessError("GOAL_INTEGRATION_COMMAND_FAILED", `${name} failed with exit ${result.status}`, {
      name, command, args, exit_code: result.status, stdout_tail: tail(result.stdout), stderr_tail: tail(result.stderr),
    });
  }
  if (name.startsWith("smoke_")) {
    try { JSON.parse(result.stdout); } catch (error) {
      throw new GoalHarnessError("GOAL_CONSUMER_SMOKE_INVALID", `${name} did not return valid JSON`, { cause: error.message, stdout_tail: tail(result.stdout) });
    }
  }
  return { name, command, args, exit_code: 0, started_at: startedAt, completed_at: new Date().toISOString(), stdout_tail: tail(result.stdout), stderr_tail: tail(result.stderr) };
}

function selectSnapshot(state, snapshotId) {
  if (snapshotId) return state.snapshots.find((snapshot) => snapshot.id === snapshotId) ?? null;
  return state.snapshots.find((snapshot) => ["integration_pending", "integrating", "retryable_failure"].includes(snapshot.state)) ?? null;
}

function allocateDecisionRef(root, goalId, snapshotId) {
  const adrDir = path.join(root, "docs", "adr");
  const existing = existsSync(adrDir) ? execFileSync("find", [adrDir, "-maxdepth", "1", "-type", "f", "-name", "[0-9][0-9][0-9][0-9]-*.md", "-printf", "%f\n"], { encoding: "utf8" }).trim().split("\n").filter(Boolean) : [];
  const next = Math.max(0, ...existing.map((name) => Number(name.slice(0, 4))).filter(Number.isFinite)) + 1;
  return `docs/adr/${String(next).padStart(4, "0")}-accept-${safeToken(goalId)}-${snapshotId}.md`;
}

function renderDecisionAdr({ config, snapshot, additions }) {
  return `# Accept ${config.classification_system.toUpperCase()} ${config.classification_version} mappings for ${snapshot.id}\n\n` +
    `- Status: accepted\n- Decided by: ${config.integration.decided_by}\n- Decided at (UTC): ${snapshot.created_at}\n- Goal: ${config.goal_id}\n- Snapshot: ${snapshot.id}\n\n` +
    `## Decision\n\n${additions.map((entry) => `- ${entry.code} (${entry.label}) -> \`${entry.pcr_id}\` as \`${entry.mapping_type}\`.`).join("\n")}\n\n` +
    `Each target passed the one-PCR author gates, material projection checks, bilingual/UUID/range review, and the serial integration validation. No manual-review candidate is accepted by this decision.\n`;
}

function assertIntegrationPaths({ changedFiles, tasks, decision }) {
  const authorFiles = new Set(tasks.flatMap((task) => task.allowed_files ?? ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map((file) => `${task.pcr_path}/${file}`)));
  const allowedExact = new Set([decision.mapping_relative, decision.decision_ref, "classifications/aliases/pcr-id-aliases.yaml", "library/catalog.yaml", "library/indexes/pcr-index.yaml"]);
  const allowedPrefixes = ["classifications/indexes/", "library/indexes/"];
  const unauthorized = changedFiles.filter((entry) => !authorFiles.has(entry) && !allowedExact.has(entry) && !allowedPrefixes.some((prefix) => entry.startsWith(prefix)));
  if (unauthorized.length > 0) {
    throw new GoalHarnessError("GOAL_INTEGRATION_PATH_UNAUTHORIZED", `Integration modified unauthorized shared paths: ${unauthorized.join(", ")}`, { unauthorized, changed_files: changedFiles });
  }
}

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function gitZ(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] }).toString("utf8").split("\0").filter(Boolean).sort();
}

function gitStatus(root) {
  return execFileSync("git", ["status", "--porcelain=v1", "-z", "--untracked-files=all"], { cwd: root, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] }).toString("utf8").split("\0").filter(Boolean);
}

function gitStatusPaths(root) {
  return gitZ(root, ["status", "--porcelain=v1", "-z", "--untracked-files=all"])
    .map((entry) => entry.slice(3))
    .map((entry) => entry.includes(" -> ") ? entry.split(" -> ").at(-1) : entry)
    .sort();
}

function isAncestor(root, ancestor, descendant) {
  try {
    execFileSync("git", ["merge-base", "--is-ancestor", ancestor, descendant], { cwd: root, stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function safeToken(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9._-]+/gu, "-").replace(/^-+|-+$/gu, "").slice(0, 48);
}

function publicTask(task) {
  return { id: task.id, cpc_code: task.cpc_code, pcr_id: task.pcr_id, pcr_path: task.pcr_path, author_commit: task.author_commit, state: task.state };
}

function tail(value, limit = 8000) {
  return String(value ?? "").slice(-limit);
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
