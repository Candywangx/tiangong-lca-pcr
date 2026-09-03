import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import path from "node:path";

import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { auditReportedUuids, mergeVerifiedCommonUuids, verifySourceLocators } from "./evidence-audit.mjs";
import { withGoalLockAsync } from "./lock.mjs";
import { compileAuthorPrompt } from "./prompt-compiler.mjs";
import { auditHybridSearchReceipts } from "./uuid-search-receipts.mjs";
import { activeAuthorCount, buildIntegrationSnapshot, dispatchCandidates } from "./scheduler.mjs";
import { applyTaskTransition } from "./state-machine.mjs";
import { ensureGoalWorktree } from "./worktrees.mjs";
import { extractCompletedTurnReport, reviewAuthorWorktree } from "./author-review.mjs";
import { appendGoalCacheReceipt, listGoalCacheReceipts } from "./goal-cache.mjs";
import { validateAuthorReport } from "./author-gates.mjs";

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
        const replaceThreadInPlace = new Set(["GOAL_REPAIR_RESUME_FAILED", "GOAL_REPAIR_LIMIT_REACHED"]).has(failed.failure_code)
          && canReuseAuthorizedAuthorWorktree({ config, task: failed, baselineCommit: state.baseline.commit });
        const repairInPlace = Boolean(failed.thread_id && failed.worktree_path && (failed.repair_count ?? 0) < (config.retry_policy?.max_repairs ?? 2));
        let task = applyTaskTransition(failed, {
          transition_id: `${authorIdentity(config.goal_id, failed.cpc_code, failed.attempt ?? 1, failed.uuid_enrichment_generation)}-${replaceThreadInPlace ? "replace-thread" : (repairInPlace ? "repair" : "requeue")}-${(failed.dispatch_cycle ?? 1) + 1}`,
          to: replaceThreadInPlace ? "preflight" : (repairInPlace ? "repair_requested" : "queued"),
          at: new Date().toISOString(),
        });
        if (replaceThreadInPlace) {
          task = {
            ...task,
            previous_thread_ids: [...new Set([...(failed.previous_thread_ids ?? []), failed.thread_id])],
            thread_id: null,
            turn_id: null,
            repair_resume_pending: false,
            continuing_repair_after_thread_replacement: true,
            author_base_commit: failed.last_author_commit ?? failed.author_commit ?? failed.author_base_commit ?? state.baseline.commit,
            reason: "Continue the preserved repair worktree after the original visible thread and its one continuation both became unrecoverable.",
          };
        } else if (!repairInPlace && failed.thread_id) {
          task = { ...task, worktree_path: null, author_branch: null, thread_id: null, turn_id: null };
        }
        store.append({ event_id: `${task.id}-requeued-${task.transition_ids.length}`, type: "task_replaced", payload: { task } });
      }
      state = store.rebuild();
    }

    const repairRequests = state.tasks.filter((task) => task.state === "repair_requested" && task.thread_id && task.worktree_path);
    const repairCapacity = Math.max(0, slots - activeAuthorCount(state.tasks));
    const selectedRepairs = repairRequests.slice(0, repairCapacity);
    const prepared = state.tasks.filter((task) => task.state === "preflight" && task.worktree_path && !task.thread_id);
    const selected = [...selectedRepairs, ...prepared, ...dispatchCandidates(state.tasks, { slots: slots - selectedRepairs.length })].slice(0, slots);
    if (dryRun) {
      return { dispatched: [], would_dispatch: selected.map((task) => task.id), state, next_action: "Repeat without --dry-run to create visible author tasks." };
    }

    const dispatched = [];
    for (const selectedTask of selected) {
      state = store.rebuild();
      let task = state.tasks.find((entry) => entry.id === selectedTask.id);
      if (task?.state === "repair_requested") {
        const resumeExistingRepair = task.repair_resume_pending === true;
        const repairNumber = resumeExistingRepair ? (task.repair_count ?? 1) : (task.repair_count ?? 0) + 1;
        const repairResumeNumber = resumeExistingRepair ? (task.repair_resume_count ?? 0) + 1 : 0;
        const repairIdentity = resumeExistingRepair
          ? `${task.id}-repair-${repairNumber}-resume-${repairResumeNumber}`
          : `${task.id}-repair-${repairNumber}`;
        const compiled = compileAuthorPrompt({
          task: {
            ...task,
            precheck_results: [task.reason ?? "no precheck reason recorded", `coverage status: ${task.coverage_status ?? "unknown"}`],
            official_source_seeds: state.official_source_seeds?.[task.cpc_code] ?? state.default_official_source_seeds ?? [],
          },
          policyPromptPath: config.policy_prompt_path,
          verifiedCommonUuids: selectRelevantCommonUuids({ stateDir, task }),
          verifiedSourceReceipts: selectRelevantSourceReceipts({ stateDir, task, state }),
          tools: { ...config.tools, project_root: config.project_root, config_path: path.resolve(state.config_path ?? config.config_path ?? "") },
        });
        const prompt = compileRepairPrompt(task, compiled.prompt, { resumeExistingRepair });
        const outputSchema = compiled.output_schema;
        const taskStateDir = path.join(stateDir, "authors", authorIdentity(config.goal_id, task.cpc_code, task.attempt ?? 1, task.uuid_enrichment_generation));
        mkdirSync(taskStateDir, { recursive: true });
        const repairArtifactStem = resumeExistingRepair
          ? `repair-${repairNumber}-resume-${repairResumeNumber}`
          : `repair-${repairNumber}`;
        writeFileSync(path.join(taskStateDir, `${repairArtifactStem}-prompt.txt`), prompt);
        writeFileSync(path.join(taskStateDir, `${repairArtifactStem}-output-schema.json`), `${JSON.stringify(outputSchema, null, 2)}\n`);
        const visible = await adapter.startRepairTurn({
          threadId: task.thread_id,
          worktreePath: task.worktree_path,
          prompt,
          outputSchema,
          clientUserMessageId: repairIdentity,
          receiptStateDir: stateDir,
        });
        const startedAt = new Date().toISOString();
        task = applyTaskTransition(task, { transition_id: `${repairIdentity}-authoring`, to: "authoring_repair", at: startedAt });
        task = {
          ...task,
          ...visible,
          repair_count: repairNumber,
          repair_resume_count: repairResumeNumber,
          repair_resume_pending: false,
          repair_started_at: resumeExistingRepair ? task.repair_started_at : startedAt,
          repair_history: resumeExistingRepair
            ? appendRepairResumeTurn(task.repair_history, visible.turn_id)
            : [...(task.repair_history ?? []), {
              repair_count: repairNumber,
              turn_id: visible.turn_id,
              resume_turn_ids: [],
              started_at: startedAt,
              ended_at: null,
              original_commit: task.last_author_commit ?? task.author_commit ?? null,
              new_commit: null,
              gate_findings: task.pending_gate_findings ?? [],
            }],
        };
        store.append({ event_id: `${repairIdentity}-started`, type: "task_replaced", payload: { task } });
        dispatched.push(task);
        continue;
      }
      if (!task || task.thread_id || task.state === "authoring") continue;
      const reusePrepared = Boolean(task.worktree_path && !task.thread_id);
      const attempt = task.state === "preflight" || reusePrepared ? (task.attempt ?? 1) : (task.attempt ?? 0) + 1;
      const dispatchCycle = (task.dispatch_cycle ?? 0) + 1;
      const identity = authorIdentity(config.goal_id, task.cpc_code, attempt, task.uuid_enrichment_generation);
      const transitionIdentity = `${identity}-c${dispatchCycle}`;
      const worktreePath = task.worktree_path ?? path.join(config.project_root, ".worktrees", "goals", config.goal_id, "authors", identity);
      const branch = task.author_branch ?? `codex/${identity}`;
      ensureGoalWorktree({ projectRoot: config.project_root, worktreePath, commit: task.author_base_commit ?? state.baseline.commit, branch });
      const compiled = compileAuthorPrompt({
        task: {
          ...task,
          precheck_results: [task.reason ?? "no precheck reason recorded", `coverage status: ${task.coverage_status ?? "unknown"}`],
          official_source_seeds: state.official_source_seeds?.[task.cpc_code] ?? state.default_official_source_seeds ?? [],
        },
        policyPromptPath: config.policy_prompt_path,
        verifiedCommonUuids: selectRelevantCommonUuids({ stateDir, task }),
        verifiedSourceReceipts: selectRelevantSourceReceipts({ stateDir, task, state }),
        tools: { ...config.tools, project_root: config.project_root, config_path: path.resolve(state.config_path ?? config.config_path ?? "") },
      });
      const taskStateDir = path.join(stateDir, "authors", identity);
      mkdirSync(taskStateDir, { recursive: true });
      writeFileSync(path.join(taskStateDir, "prompt.txt"), compiled.prompt);
      writeFileSync(path.join(taskStateDir, "output-schema.json"), `${JSON.stringify(compiled.output_schema, null, 2)}\n`);
      writeFileSync(path.join(taskStateDir, "prepared.json"), `${JSON.stringify({
        schema_version: 1,
        task_id: task.id,
        attempt,
        uuid_search_contract_version: 1,
        author_base_commit: task.author_base_commit ?? state.baseline.commit,
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
        task = { ...task, attempt, dispatch_cycle: dispatchCycle, worktree_path: worktreePath, author_branch: branch, allowed_files: compiled.allowed_files, policy_sha256: compiled.policy_sha256, uuid_search_contract_version: 1 };
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
          receiptStateDir: stateDir,
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

export async function harvestGoalAuthors({
  config,
  stateDir,
  adapter,
  reviewFn = reviewAuthorWorktree,
  auditUuidsFn = auditReportedUuids,
  verifySourcesFn = verifySourceLocators,
  auditHybridSearchFn = auditHybridSearchReceipts,
  validateReportFn = validateAuthorReport,
  now = () => new Date(),
}) {
  return withGoalLockAsync(stateDir, "harvest", async () => {
    const store = new GoalEventStore({ stateDir });
    const validResults = [];
    const failures = [];
    let state = store.rebuild();
    const candidates = state.tasks.filter((task) => ["authoring", "authoring_repair", "author_review"].includes(task.state));
    for (const selected of candidates) {
      state = store.rebuild();
      let task = state.tasks.find((entry) => entry.id === selected.id);
      let report;
      if (task.state === "authoring" || task.state === "authoring_repair") {
        const wasRepair = task.state === "authoring_repair"
          || task.continuing_repair_after_thread_replacement === true
          || (Boolean(task.previous_thread_ids?.length) && task.repair_history?.at(-1)?.ended_at == null);
        const response = await adapter.readThread({ threadId: task.thread_id, includeTurns: true });
        const extracted = extractCompletedTurnReport(response, task.turn_id);
        if (extracted.status === "inProgress" || extracted.status === "pending") {
          if (!authorTimedOut(task, config.author_timeout_seconds, now())) continue;
          await adapter.interruptTurn({ threadId: task.thread_id, turnId: task.turn_id });
          const canResumeRepair = wasRepair && (task.repair_resume_count ?? 0) < 1;
          const repairResumeFailed = wasRepair && (task.repair_resume_count ?? 0) >= 1;
          const canRepairTimeout = canResumeRepair || (task.repair_count ?? 0) < (config.retry_policy?.max_repairs ?? 2);
          task = applyTaskTransition(task, { transition_id: `${task.id}-turn-${task.turn_id}-timeout`, to: canRepairTimeout ? "repair_requested" : "retryable_failure", at: now().toISOString() });
          task = {
            ...task,
            repair_resume_pending: canResumeRepair,
            failure_code: canResumeRepair
              ? "GOAL_REPAIR_TIMEOUT_RESUME_REQUIRED"
              : (repairResumeFailed ? "GOAL_REPAIR_RESUME_FAILED" : (canRepairTimeout ? "GOAL_AUTHOR_TIMEOUT_REPAIR_REQUIRED" : "GOAL_REPAIR_LIMIT_REACHED")),
            failure_message: `Visible author exceeded ${config.author_timeout_seconds} seconds; its worktree and partial result were preserved.`,
            pending_gate_findings: [{
              code: canResumeRepair ? "repair_timeout" : (repairResumeFailed ? "repair_resume_failed" : "author_timeout"),
              remediation: canResumeRepair
                ? "Continue the interrupted repair from the preserved worktree in one idempotent continuation turn; do not consume a new content-repair attempt."
                : (repairResumeFailed
                  ? "Create a replacement visible thread bound to this preserved worktree; do not restart from the synthetic baseline."
                  : "Continue from the preserved worktree in the same visible thread and finish the machine report."),
            }],
          };
          store.append({ event_id: `${task.id}-turn-${task.turn_id}-timeout-recorded`, type: "task_replaced", payload: { task } });
          failures.push(task);
          continue;
        }
        if (extracted.status !== "completed") {
          const canResumeRepair = wasRepair && (task.repair_resume_count ?? 0) < 1;
          const repairResumeFailed = wasRepair && (task.repair_resume_count ?? 0) >= 1;
          const canRepairTurn = canResumeRepair || (task.repair_count ?? 0) < (config.retry_policy?.max_repairs ?? 2);
          task = applyTaskTransition(task, { transition_id: `${task.id}-turn-${task.turn_id}-failed`, to: canRepairTurn ? "repair_requested" : "retryable_failure", at: new Date().toISOString() });
          task = {
            ...task,
            repair_resume_pending: canResumeRepair,
            failure_code: canResumeRepair
              ? "GOAL_REPAIR_TURN_RESUME_REQUIRED"
              : (repairResumeFailed ? "GOAL_REPAIR_RESUME_FAILED" : (canRepairTurn ? "GOAL_AUTHOR_TURN_REPAIR_REQUIRED" : "GOAL_REPAIR_LIMIT_REACHED")),
            failure_message: JSON.stringify(extracted.error ?? extracted.status),
            pending_gate_findings: [{
              code: canResumeRepair ? "repair_turn_interrupted" : (repairResumeFailed ? "repair_resume_failed" : "author_turn_failed"),
              remediation: canResumeRepair
                ? "Continue the current repair from the preserved worktree in one idempotent continuation turn; do not consume a new content-repair attempt."
                : (repairResumeFailed
                  ? "Create a replacement visible thread bound to this preserved worktree; do not restart from the synthetic baseline."
                  : "Resume in the same visible thread and preserved worktree."),
            }],
          };
          store.append({ event_id: `${task.id}-turn-${task.turn_id}-failure-recorded`, type: "task_replaced", payload: { task } });
          failures.push(task);
          continue;
        }
        report = extracted.report;
        const reportDir = path.join(stateDir, "authors", authorIdentity(config.goal_id, task.cpc_code, task.attempt ?? 1, task.uuid_enrichment_generation));
        mkdirSync(reportDir, { recursive: true });
        const reportPath = path.join(reportDir, wasRepair ? `author-report-repair-${task.repair_count}.json` : "author-report.json");
        writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
        task = applyTaskTransition(task, { transition_id: `${task.id}-turn-${task.turn_id}-review`, to: "author_review", at: new Date().toISOString() });
        task = { ...task, report_path: reportPath, last_author_commit: report.commit_sha };
        if (wasRepair) task = { ...finishLatestRepair(task, report.commit_sha, now().toISOString()), continuing_repair_after_thread_replacement: false };
        store.append({ event_id: `${task.id}-turn-${task.turn_id}-report`, type: "task_replaced", payload: { task } });
      } else {
        report = JSON.parse(readFileSync(task.report_path, "utf8"));
      }
      try {
        const unavailableRows = (report.inventory?.unresolved ?? []).filter((entry) => entry.reason_code === "tiangong_cli_unavailable");
        if (unavailableRows.length > 0) {
          throw new GoalHarnessError("GOAL_REPORTED_UUID_INFRASTRUCTURE_UNAVAILABLE", "tiangong_cli_unavailable cannot be accepted as unresolved PCR coverage; repair it now that Goal infrastructure preflight is healthy.", { retryable: true, row_ids: unavailableRows.map((entry) => entry.row_id) });
        }
        const reportSchema = validateReportFn(report);
        if (!reportSchema.valid) {
          throw new GoalHarnessError("GOAL_AUTHOR_RESULT_INVALID", `Author report failed ${reportSchema.errors.length} Schema check(s).`, { findings: reportSchema.errors.map((detail) => ({ code: "AUTHOR_REPORT_SCHEMA_INVALID", message: detail.message, detail })) });
        }
        if ((report.uuid_audits?.length ?? 0) > 0 && !config.tools?.tiangong_cli_root) {
          throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "tools.tiangong_cli_root is required to independently audit final UUIDs.");
        }
        const uuidReads = auditUuidsFn({ report, tiangongCliRoot: config.tools?.tiangong_cli_root });
        const evidenceAudit = {
          uuid_reads: uuidReads,
          hybrid_search_receipts: auditHybridSearchFn({ report, stateDir, task, verifiedUuidReads: uuidReads }),
          source_reads: await verifySourcesFn({ report, stateDir }),
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
        state = store.rebuild();
        const verifiedCommonUuids = mergeVerifiedCommonUuids(state.verified_common_uuids, evidenceAudit.uuid_reads);
        if (JSON.stringify(verifiedCommonUuids) !== JSON.stringify(state.verified_common_uuids ?? [])) {
          const previous = new Set((state.verified_common_uuids ?? [])
            .filter((entry) => entry?.hybrid_search_receipt_id)
            .map((entry) => `${entry.uuid}:${entry.hybrid_search_receipt_id}`));
          for (const entry of verifiedCommonUuids.filter((candidate) => !previous.has(`${candidate.uuid}:${candidate.hybrid_search_receipt_id}`))) {
            appendGoalCacheReceipt({
              stateDir,
              namespace: "verified_common_uuids",
              keyInput: { uuid: entry.uuid, semantic_scope: entry.semantic_review ?? null },
              tool: { name: "tiangong-cli-public-direct-read", version: "state-code-100-v1" },
              sourceFingerprint: entry.response_sha256,
              value: entry,
            });
          }
          store.append({
            event_id: `${task.id}-turn-${task.turn_id}-common-uuids`,
            type: "verified_common_uuids_updated",
            payload: { verified_common_uuids: verifiedCommonUuids },
          });
        }
        validResults.push(task);
      } catch (error) {
        if (task.state === "valid_result") {
          throw error;
        }
        const findings = error.details?.findings ?? [{ code: error.code ?? "GOAL_AUTHOR_REVIEW_FAILED", message: error.message }];
        const repairLimit = config.retry_policy?.max_repairs ?? 2;
        const repairable = isRepairableReviewFailure(error) && (task.repair_count ?? 0) < repairLimit;
        task = applyTaskTransition(task, {
          transition_id: `${task.id}-turn-${task.turn_id}-review-failed`,
          to: repairable ? "repair_requested" : "retryable_failure",
          at: new Date().toISOString(),
        });
        task = {
          ...task,
          failure_code: repairable ? "GOAL_AUTHOR_REPAIR_REQUIRED" : ((task.repair_count ?? 0) >= repairLimit ? "GOAL_REPAIR_LIMIT_REACHED" : (error.code ?? "GOAL_AUTHOR_REVIEW_FAILED")),
          failure_message: error.message,
          validation_result: error.details ?? null,
          pending_gate_findings: findings,
          repair_count: task.repair_count ?? 0,
          last_author_commit: report.commit_sha ?? task.last_author_commit ?? null,
        };
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

function compileRepairPrompt(task, currentAuthorPrompt, { resumeExistingRepair = false } = {}) {
  return [
    "Continue the same PCR in this same visible thread and the same worktree.",
    "Do not restart the PCR and do not modify files outside the original four-file allowlist.",
    "The complete current author contract follows. It supersedes the original turn's UUID receipt and output-report instructions.",
    currentAuthorPrompt,
    "Fix every structured gate finding below, rerun structured sync twice, validate, commit only the allowed files, and return a complete JSON report matching the output schema supplied to this repair turn.",
    JSON.stringify({
      repair_count: resumeExistingRepair ? (task.repair_count ?? 1) : (task.repair_count ?? 0) + 1,
      continuation_of_interrupted_repair: resumeExistingRepair,
      original_commit: task.last_author_commit ?? task.author_commit ?? null,
      allowed_files: task.allowed_files ?? [],
      gate_findings: task.pending_gate_findings ?? [],
    }, null, 2),
  ].join("\n\n");
}

function appendRepairResumeTurn(repairHistory, turnId) {
  const history = [...(repairHistory ?? [])];
  if (history.length === 0) return history;
  const latest = history.at(-1);
  history[history.length - 1] = {
    ...latest,
    resume_turn_ids: [...(latest.resume_turn_ids ?? []), turnId],
  };
  return history;
}

function finishLatestRepair(task, commit, endedAt) {
  const history = [...(task.repair_history ?? [])];
  if (history.length > 0) history[history.length - 1] = { ...history.at(-1), ended_at: endedAt, new_commit: commit ?? null };
  return { ...task, repair_history: history, repair_ended_at: endedAt };
}

function isRepairableReviewFailure(error) {
  return !new Set([
    "GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE",
    "GOAL_UUID_DIRECT_READ_FAILED",
    "GOAL_HYBRID_SEARCH_FAILED",
    "GOAL_HYBRID_SEARCH_UNAUTHENTICATED",
  ]).has(error.code);
}

function selectRelevantCommonUuids({ stateDir, task }) {
  const terms = `${task.product_name_en ?? ""} ${task.product_name_zh ?? ""}`.toLowerCase();
  const universal = /electric|water|natural gas|diesel|steam|oxygen|nitrogen|carbon dioxide|methane|sodium|refrigerant/iu;
  const entries = listGoalCacheReceipts({ stateDir, namespace: "verified_common_uuids" })
    .map((receipt) => receipt.value)
    .filter((entry) => entry?.hybrid_search_receipt_id);
  const latestByUuid = new Map(entries.map((entry) => [entry.uuid, entry]));
  return [...latestByUuid.values()]
    .filter((entry) => universal.test(String(entry.base_name_en ?? "")) || terms.includes(String(entry.base_name_en ?? "").toLowerCase()))
    .slice(0, 24);
}

function selectRelevantSourceReceipts({ stateDir, task, state }) {
  const seeds = state.official_source_seeds?.[task.cpc_code] ?? state.default_official_source_seeds ?? [];
  const seedText = JSON.stringify(seeds).toLowerCase();
  if (!seedText || seedText === "[]") return [];
  return listGoalCacheReceipts({ stateDir, namespace: "source_original_text_receipts" })
    .filter((receipt) => seedText.includes(String(receipt.value?.source_id ?? "").toLowerCase()) || seedText.includes(String(receipt.value?.locator ?? "").toLowerCase()))
    .slice(-12)
    .map((receipt) => ({ receipt_id: receipt.receipt_id, source_id: receipt.value?.source_id, locator: receipt.value?.locator, content_sha256: receipt.value?.content_sha256 }));
}

function authorIdentity(goalId, cpcCode, attempt, enrichmentGeneration = 0) {
  const safeGoal = String(goalId).replace(/[^a-z0-9._-]+/giu, "-").slice(0, 48);
  const safeCode = String(cpcCode).replace(/[^0-9a-z]+/giu, "-");
  const enrichment = enrichmentGeneration > 0 ? `-u${enrichmentGeneration}` : "";
  return `goal-${safeGoal}-${safeCode}${enrichment}-a${attempt}`;
}

function authorTimedOut(task, timeoutSeconds, at) {
  if (!Number.isFinite(timeoutSeconds) || timeoutSeconds <= 0 || !task.dispatched_at) return false;
  const started = Date.parse(task.dispatched_at);
  return Number.isFinite(started) && at.getTime() - started >= timeoutSeconds * 1000;
}

function canReuseAuthorizedAuthorWorktree({ config, task, baselineCommit }) {
  if (!task.thread_id || !task.worktree_path || !task.author_branch || !Array.isArray(task.allowed_files)) return false;
  try {
    const projectRoot = realpathSync(config.project_root);
    const worktreePath = realpathSync(task.worktree_path);
    const relative = path.relative(projectRoot, worktreePath);
    const requiredPrefix = path.join(".worktrees", "goals", config.goal_id, "authors") + path.sep;
    if (!relative.startsWith(requiredPrefix) || relative.includes(`..${path.sep}`)) return false;
    const head = execFileSync("git", ["rev-parse", "HEAD"], { cwd: worktreePath, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
    const branch = execFileSync("git", ["branch", "--show-current"], { cwd: worktreePath, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
    const expectedHead = task.last_author_commit ?? task.author_commit ?? task.author_base_commit ?? baselineCommit;
    if (head !== expectedHead || branch !== task.author_branch) return false;
    const dirty = new Set();
    for (const args of [
      ["diff", "--name-only", "-z"],
      ["diff", "--cached", "--name-only", "-z"],
      ["ls-files", "--others", "--exclude-standard", "-z"],
    ]) {
      const output = execFileSync("git", args, { cwd: worktreePath, encoding: "buffer", stdio: ["ignore", "pipe", "pipe"] });
      for (const entry of output.toString("utf8").split("\0").filter(Boolean)) dirty.add(entry);
    }
    const allowed = new Set(task.allowed_files);
    return [...dirty].every((entry) => allowed.has(entry));
  } catch {
    return false;
  }
}
