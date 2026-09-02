import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { auditReportedUuids, verifySourceLocators } from "./evidence-audit.mjs";
import { withGoalLockAsync } from "./lock.mjs";
import { compileAuthorPrompt } from "./prompt-compiler.mjs";
import { buildIntegrationSnapshot, dispatchCandidates } from "./scheduler.mjs";
import { applyTaskTransition } from "./state-machine.mjs";
import { ensureGoalWorktree } from "./worktrees.mjs";
import { extractCompletedTurnReport, reviewAuthorWorktree } from "./author-review.mjs";

export async function dispatchGoalAuthors({ config, stateDir, slots = config.author_slots, adapter, resumeStopped = false, dryRun = false }) {
  if (!Number.isInteger(slots) || slots < 1 || slots > 6) {
    throw new GoalHarnessError("GOAL_SLOTS_INVALID", "Author slots must be an integer from 1 through 6");
  }
  return withGoalLockAsync(stateDir, "dispatch", async () => {
    const store = new GoalEventStore({ stateDir });
    let state = store.rebuild();
    if (state.stopped && !resumeStopped) {
      throw new GoalHarnessError("GOAL_SCHEDULING_STOPPED", `Goal ${state.goal_id} is stopped; use resume explicitly.`);
    }
    if (state.stopped && resumeStopped) {
      store.append({ event_id: `resume-${state.last_event_sequence + 1}`, type: "scheduling_resumed", payload: {} });
      state = store.rebuild();
    }
    if (resumeStopped) {
      for (const failed of state.tasks.filter((task) => task.state === "retryable_failure" && (task.attempt ?? 0) < (config.retry_policy?.max_attempts ?? 3))) {
        let task = applyTaskTransition(failed, {
          transition_id: `${authorIdentity(config.goal_id, failed.cpc_code, failed.attempt ?? 1)}-requeue-${(failed.dispatch_cycle ?? 1) + 1}`,
          to: "queued",
          at: new Date().toISOString(),
        });
        if (failed.thread_id) {
          task = { ...task, worktree_path: null, author_branch: null, thread_id: null, turn_id: null };
        }
        store.append({ event_id: `${task.id}-requeued-${task.transition_ids.length}`, type: "task_replaced", payload: { task } });
      }
      state = store.rebuild();
    }

    const prepared = state.tasks.filter((task) => task.state === "preflight" && task.worktree_path && !task.thread_id);
    const selected = [...prepared, ...dispatchCandidates(state.tasks, { slots })].slice(0, slots);
    if (dryRun) {
      return { dispatched: [], would_dispatch: selected.map((task) => task.id), state, next_action: "Repeat without --dry-run to create visible author tasks." };
    }

    const dispatched = [];
    for (const selectedTask of selected) {
      state = store.rebuild();
      let task = state.tasks.find((entry) => entry.id === selectedTask.id);
      if (!task || task.thread_id || task.state === "authoring") continue;
      const reusePrepared = Boolean(task.worktree_path && !task.thread_id);
      const attempt = task.state === "preflight" || reusePrepared ? (task.attempt ?? 1) : (task.attempt ?? 0) + 1;
      const dispatchCycle = (task.dispatch_cycle ?? 0) + 1;
      const identity = authorIdentity(config.goal_id, task.cpc_code, attempt);
      const transitionIdentity = `${identity}-c${dispatchCycle}`;
      const worktreePath = task.worktree_path ?? path.join(config.project_root, ".worktrees", "goals", config.goal_id, "authors", identity);
      const branch = task.author_branch ?? `codex/${identity}`;
      ensureGoalWorktree({ projectRoot: config.project_root, worktreePath, commit: state.baseline.commit, branch });
      const compiled = compileAuthorPrompt({
        task: {
          ...task,
          precheck_results: [task.reason ?? "no precheck reason recorded", `coverage status: ${task.coverage_status ?? "unknown"}`],
          official_source_seeds: state.official_source_seeds?.[task.cpc_code] ?? state.default_official_source_seeds ?? [],
        },
        policyPromptPath: config.policy_prompt_path,
        verifiedCommonUuids: state.verified_common_uuids ?? [],
        tools: config.tools,
      });
      const taskStateDir = path.join(stateDir, "authors", identity);
      mkdirSync(taskStateDir, { recursive: true });
      writeFileSync(path.join(taskStateDir, "prompt.txt"), compiled.prompt);
      writeFileSync(path.join(taskStateDir, "output-schema.json"), `${JSON.stringify(compiled.output_schema, null, 2)}\n`);
      writeFileSync(path.join(taskStateDir, "prepared.json"), `${JSON.stringify({
        schema_version: 1,
        task_id: task.id,
        attempt,
        worktree_path: worktreePath,
        branch,
        policy_sha256: compiled.policy_sha256,
        allowed_files: compiled.allowed_files,
        prepared_at: new Date().toISOString(),
      }, null, 2)}\n`);

      if (task.state !== "preflight") {
        task = applyTaskTransition(task, {
          transition_id: `${transitionIdentity}-preflight`,
          to: "preflight",
          at: new Date().toISOString(),
        });
        task = { ...task, attempt, dispatch_cycle: dispatchCycle, worktree_path: worktreePath, author_branch: branch, allowed_files: compiled.allowed_files, policy_sha256: compiled.policy_sha256 };
        store.append({ event_id: `${transitionIdentity}-prepared`, type: "task_replaced", payload: { task } });
      }

      try {
        const visible = await adapter.createAuthorTask({
          worktreePath,
          title: `PCR ${task.cpc_code} · ${task.product_name_en}`,
          prompt: compiled.prompt,
          outputSchema: compiled.output_schema,
          sandbox: config.codex?.sandbox ?? "danger-full-access",
          approvalPolicy: config.codex?.approval_policy ?? "never",
          model: config.codex?.model ?? null,
          clientUserMessageId: `${config.goal_id}-${task.cpc_code}-attempt-${attempt}`,
          projectId: config.codex?.project_id ?? null,
        });
        task = applyTaskTransition(task, {
          transition_id: `${transitionIdentity}-authoring`,
          to: "authoring",
          at: new Date().toISOString(),
        });
        task = { ...task, ...visible, dispatched_at: new Date().toISOString() };
        store.append({ event_id: `${transitionIdentity}-dispatched`, type: "task_replaced", payload: { task } });
        dispatched.push(task);
      } catch (error) {
        task = applyTaskTransition(task, {
          transition_id: `${transitionIdentity}-dispatch-failed`,
          to: "retryable_failure",
          at: new Date().toISOString(),
        });
        task = { ...task, failure_code: error.code ?? "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE", failure_message: error.message };
        store.append({ event_id: `${transitionIdentity}-failed`, type: "task_replaced", payload: { task } });
        store.append({ event_id: `${transitionIdentity}-stop`, type: "scheduling_stopped", payload: { reason: task.failure_code } });
        throw error;
      }
    }
    return {
      dispatched,
      state: store.rebuild(),
      next_action: dispatched.length > 0 ? "Use goal:status or goal:resume to harvest completed visible tasks and refill slots." : "No dispatchable author task is available in the requested slots.",
    };
  });
}

export async function harvestGoalAuthors({ config, stateDir, adapter, reviewFn = reviewAuthorWorktree }) {
  return withGoalLockAsync(stateDir, "harvest", async () => {
    const store = new GoalEventStore({ stateDir });
    const validResults = [];
    const failures = [];
    let state = store.rebuild();
    const candidates = state.tasks.filter((task) => task.state === "authoring" || task.state === "author_review");
    for (const selected of candidates) {
      state = store.rebuild();
      let task = state.tasks.find((entry) => entry.id === selected.id);
      let report;
      if (task.state === "authoring") {
        const response = await adapter.readThread({ threadId: task.thread_id, includeTurns: true });
        const extracted = extractCompletedTurnReport(response, task.turn_id);
        if (extracted.status === "inProgress" || extracted.status === "pending") continue;
        if (extracted.status !== "completed") {
          task = applyTaskTransition(task, { transition_id: `${task.id}-turn-${task.turn_id}-failed`, to: "retryable_failure", at: new Date().toISOString() });
          task = { ...task, failure_code: "GOAL_AUTHOR_TURN_FAILED", failure_message: JSON.stringify(extracted.error ?? extracted.status) };
          store.append({ event_id: `${task.id}-turn-${task.turn_id}-failure-recorded`, type: "task_replaced", payload: { task } });
          failures.push(task);
          continue;
        }
        report = extracted.report;
        const reportDir = path.join(stateDir, "authors", authorIdentity(config.goal_id, task.cpc_code, task.attempt ?? 1));
        mkdirSync(reportDir, { recursive: true });
        const reportPath = path.join(reportDir, "author-report.json");
        writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
        task = applyTaskTransition(task, { transition_id: `${task.id}-turn-${task.turn_id}-review`, to: "author_review", at: new Date().toISOString() });
        task = { ...task, report_path: reportPath };
        store.append({ event_id: `${task.id}-turn-${task.turn_id}-report`, type: "task_replaced", payload: { task } });
      } else {
        report = JSON.parse(readFileSync(task.report_path, "utf8"));
      }
      try {
        if ((report.uuid_audits?.length ?? 0) > 0 && !config.tools?.tiangong_cli_root) {
          throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "tools.tiangong_cli_root is required to independently audit final UUIDs.");
        }
        const evidenceAudit = {
          uuid_reads: auditReportedUuids({ report, tiangongCliRoot: config.tools?.tiangong_cli_root }),
          source_reads: await verifySourceLocators({ report }),
        };
        const review = reviewFn({
          projectRoot: config.project_root,
          baselineCommit: state.baseline.commit,
          worktreePath: task.worktree_path,
          task: { ...task, goal_id: config.goal_id },
          report,
          stateDir,
        });
        task = applyTaskTransition(task, { transition_id: `${task.id}-turn-${task.turn_id}-valid`, to: "valid_result", at: new Date().toISOString() });
        task = {
          ...task,
          author_commit: report.commit_sha,
          pcr_id: review.pcr_id ?? task.pcr_id,
          valid_at: new Date().toISOString(),
          validation_result: review,
          evidence_audit: evidenceAudit,
          unresolved_count: report.inventory?.unresolved_rows ?? review.counts?.unresolved ?? 0,
        };
        store.append({ event_id: `${task.id}-turn-${task.turn_id}-valid-result`, type: "task_replaced", payload: { task } });
        validResults.push(task);
      } catch (error) {
        if (task.state === "valid_result") {
          throw error;
        }
        task = applyTaskTransition(task, { transition_id: `${task.id}-turn-${task.turn_id}-review-failed`, to: "retryable_failure", at: new Date().toISOString() });
        task = { ...task, failure_code: error.code ?? "GOAL_AUTHOR_REVIEW_FAILED", failure_message: error.message, validation_result: error.details ?? null };
        store.append({ event_id: `${task.id}-turn-${task.turn_id}-invalid-result`, type: "task_replaced", payload: { task } });
        failures.push(task);
      }
    }
    state = store.rebuild();
    const snapshot = buildIntegrationSnapshot({
      goalId: config.goal_id,
      tasks: state.tasks,
      batchSize: config.integration_batch_size ?? 6,
      snapshots: state.snapshots ?? [],
    });
    if (snapshot) {
      store.append({ event_id: `${snapshot.id}-created`, type: "snapshot_created", payload: { ...snapshot, state: "integration_pending", created_at: new Date().toISOString() } });
      for (const taskId of snapshot.task_ids) {
        state = store.rebuild();
        let task = state.tasks.find((entry) => entry.id === taskId);
        task = applyTaskTransition(task, { transition_id: `${snapshot.id}-${taskId}-pending`, to: "integration_pending", at: new Date().toISOString() });
        task = { ...task, integration_snapshot_id: snapshot.id };
        store.append({ event_id: `${snapshot.id}-${taskId}-assigned`, type: "task_replaced", payload: { task } });
      }
    }
    return { valid_results: validResults, failures, snapshot, state: store.rebuild() };
  });
}

function authorIdentity(goalId, cpcCode, attempt) {
  const safeGoal = String(goalId).replace(/[^a-z0-9._-]+/giu, "-").slice(0, 48);
  const safeCode = String(cpcCode).replace(/[^0-9a-z]+/giu, "-");
  return `goal-${safeGoal}-${safeCode}-a${attempt}`;
}
