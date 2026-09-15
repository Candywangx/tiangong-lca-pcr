import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import path from "node:path";

import { pinFirstAuthorContract, recordAuthorTurnContract } from "./author-contract.mjs";
import { resolveAuthorSubmission } from "./author-submission.mjs";
import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError, selectRecovery } from "./errors.mjs";
import { auditReportedUuids, mergeVerifiedCommonUuids, verifySourceLocators } from "./evidence-audit.mjs";
import { withGoalLockAsync } from "./lock.mjs";
import { compileAuthorPrompt } from "./prompt-compiler.mjs";
import { auditHybridSearchReceipts, isReusableCommonUuidAudit } from "./uuid-search-receipts.mjs";
import { assessRequiredReview, reviewTimeRemaining, failedReview } from "./review-assessment.mjs";
import { findUuidEnrichmentCandidates } from "./uuid-enrichment-audit.mjs";
import { activeAuthorCount, buildIntegrationSnapshot, dispatchCandidates } from "./scheduler.mjs";
import { applyTaskTransition } from "./state-machine.mjs";
import { ensureGoalWorktree } from "./worktrees.mjs";
import { extractCompletedTurnReport, inspectAuthorCommit, reviewAuthorWorktree, completeAuthorReviewIdentity } from "./author-review.mjs";
import { appendGoalCacheReceipt, listGoalCacheReceipts } from "./goal-cache.mjs";
import { validateAuthorReport } from "./author-gates.mjs";
import { selectGoalRuntimeBaseCommit } from "./runtime-baseline.mjs";
import { resolveAuthorContentBaseCommit } from "./author-baseline.mjs";
import { auditBoundaryReview } from "./boundary-review.mjs";
import { ensureMaterialsRoot, queryMaterials, resolveMaterialsRoot } from "../lib/shared-materials.mjs";
import { trialModel, trialDispatchState, observeTrialTurn, observeTrialReview, trialCacheObservation, assertTrialControls, trialSemanticApproved } from "./model-trial.mjs";
import { readTrialTurnUsage } from "./trial-usage.mjs";

export async function dispatchGoalAuthors({
  config,
  stateDir,
  slots = config.author_slots,
  adapter,
  resumeStopped = false,
  dryRun = false,
  preDispatchCheck = null,
  faultInjector = () => {},
  now = () => new Date(),
}) {
  if (!Number.isInteger(slots) || slots < 1 || slots > 6) {
    throw new GoalHarnessError("GOAL_SLOTS_INVALID", "Author slots must be an integer from 1 through 6");
  }
  if (dryRun) {
    const state = new GoalEventStore({ stateDir }).rebuild();
    if (state.stopped && !resumeStopped) throw new GoalHarnessError('GOAL_SCHEDULING_STOPPED', `Goal ${state.goal_id} is stopped; use resume explicitly.`);
    const previewState = resumeStopped ? previewResumedState({config,state,now:now()}) : state;
    return {dispatched:[],would_dispatch:selectDispatchTasks(previewState,slots).map(t=>t.id),state,next_action:'Repeat without --dry-run to create visible author tasks.'};
  }
  return withGoalLockAsync(stateDir, "dispatch", async () => {
    const store = new GoalEventStore({ stateDir });
    let state = store.rebuild();
    if (state.stopped && !resumeStopped) {
      throw new GoalHarnessError("GOAL_SCHEDULING_STOPPED", `Goal ${state.goal_id} is stopped; use resume explicitly.`);
    }
    if (!dryRun && preDispatchCheck) await preDispatchCheck({ state });
    if (state.stopped && resumeStopped) {
      store.append({ event_id: `resume-${state.last_event_sequence + 1}`, type: "scheduling_resumed", payload: {} });
      state = store.rebuild();
    }
    if (resumeStopped) {
      state = holdExhaustedRecoveries(store, config, now());
      for (const failed of trialDispatchState(state).tasks.filter((task) => !task.coordinator_hold
        && task.state === "retryable_failure"
        && recoveryForTask(task, config, {now:now()}).eligible
        && !isSavedEvidenceRecheckTask(task))) {
        const requiresThreadReplacement = new Set(["GOAL_REPAIR_RESUME_FAILED", "GOAL_REPAIR_LIMIT_REACHED"]).has(failed.failure_code);
        const replaceThreadInPlace = requiresThreadReplacement
          && canReuseAuthorizedAuthorWorktree({ config, task: failed, baselineCommit: state.baseline.commit });
        const recovery = recoveryForTask(failed, config, {now:now()});
        const infrastructureRetry = recovery.action === "resume" || recovery.action === "defer";
        const infrastructureResumeInPlace = infrastructureRetry
          && canReuseAuthorizedAuthorWorktree({ config, task: failed, baselineCommit: state.baseline.commit });
        const repairInPlace = !requiresThreadReplacement && !infrastructureRetry
          && Boolean(failed.thread_id && failed.worktree_path && (failed.repair_count ?? 0) < (config.retry_policy?.max_repairs ?? 2));
        if (infrastructureRetry && !infrastructureResumeInPlace) {
          store.append({event_id:`${failed.id}-recovery-worktree-hold-${failed.transition_ids?.length ?? 0}`,type:'task_replaced',payload:{task:{...failed,coordinator_hold:{reason:'GOAL_RECOVERY_WORKTREE_UNAVAILABLE'}}}});
          continue;
        }
        const nextCycle = nextDispatchCycle(failed);
        const retryMode = replaceThreadInPlace
          ? "replace-thread"
          : (infrastructureResumeInPlace ? "infrastructure-resume" : (repairInPlace ? "repair" : "requeue"));
        let task = applyTaskTransition(failed, {
          transition_id: `${authorIdentity(config.goal_id, failed.cpc_code, failed.attempt ?? 1, failed.uuid_enrichment_generation)}-${retryMode}-${nextCycle}`,
          to: replaceThreadInPlace ? "preflight" : ((repairInPlace || infrastructureResumeInPlace) ? "repair_requested" : "queued"),
          at: new Date().toISOString(),
        });
        if (replaceThreadInPlace) {
          const authorContentBaseCommit = resolveAuthorContentBaseCommit({
            projectRoot: config.project_root,
            task: failed,
            fallbackCommit: state.baseline.commit,
          });
          task = {
            ...task,
            attempt: (failed.attempt ?? 1) + 1,
            previous_thread_ids: [...new Set([...(failed.previous_thread_ids ?? []), failed.thread_id])],
            thread_id: null,
            turn_id: null,
            repair_resume_pending: false,
            continuing_repair_after_thread_replacement: true,
            author_base_commit: failed.last_author_commit ?? failed.author_commit ?? failed.author_base_commit ?? state.baseline.commit,
            author_content_base_commit: authorContentBaseCommit,
            reason: "Continue the preserved repair worktree after the original visible thread and its one continuation both became unrecoverable.",
          };
        } else if (infrastructureResumeInPlace) {
          task = {
            ...task,
            dispatch_cycle: nextCycle,
            recovery_incident: recovery.incident,
            infrastructure_resume_pending: recovery.action === "resume",
            execution_continue_pending: recovery.action === "defer",
            recovery_source_turn_id: failed.recovery_source_turn_id ?? failed.turn_id,
            infrastructure_resume_target_state: hasOpenContentRepair(failed) ? "authoring_repair" : "authoring",
          };
        } else if (!repairInPlace && failed.thread_id) {
          const authorContentBaseCommit = resolveAuthorContentBaseCommit({
            projectRoot: config.project_root,
            task: failed,
            fallbackCommit: state.baseline.commit,
          });
          task = {
            ...task,
            previous_thread_ids: [...new Set([...(failed.previous_thread_ids ?? []), failed.thread_id])],
            previous_worktree_paths: [...new Set([...(failed.previous_worktree_paths ?? []), failed.worktree_path].filter(Boolean))],
            author_base_commit: selectRecordedAuthorBaseCommit({
              projectRoot: config.project_root,
              task: failed,
              baselineCommit: authorContentBaseCommit,
              fallbackCommit: failed.author_base_commit ?? state.baseline.commit,
            }),
            author_content_base_commit: authorContentBaseCommit,
            worktree_path: null,
            author_branch: null,
            thread_id: null,
            turn_id: null,
          };
        }
        store.append({ event_id: `${task.id}-requeued-${task.transition_ids.length}`, type: "task_replaced", payload: { task } });
      }
      state = store.rebuild();
    }

    const selected = selectDispatchTasks(state, slots);

    const dispatched = [];
    for (const selectedTask of selected) {
      state = store.rebuild();
      let task = state.tasks.find((entry) => entry.id === selectedTask.id);
      if (!task) continue;
      task = pinFirstAuthorContract(task);
      const materialsRoot = ensureMaterialsRoot(resolveMaterialsRoot({ cwd: config.project_root, root: config.tools?.materials_root }));
      const materialsQuery = queryMaterials({ root: materialsRoot, request: { product: task.product_name_en }, limit: 5 });
      const selectedUuids = task.authoring_contract_version === 2 ? [] : selectRelevantCommonUuids({ stateDir, task });
      assertTrialControls(task, config);
      const authorConfig = trialModel(task, config);
      const selectedSources = selectRelevantSourceReceipts({ stateDir, task, state });
      const cacheObservation = trialCacheObservation({ uuids: selectedUuids, sources: selectedSources, materials: materialsQuery });
      if (task?.state === "repair_requested") {
        const resumeExecution = task.execution_continue_pending === true;
        const resumeInfrastructure = task.infrastructure_resume_pending === true || resumeExecution;
        if (resumeInfrastructure) task = {...task,recovery_incident:recoveryIncident(task)};
        const resumeExistingRepair = task.repair_resume_pending === true;
        const repairNumber = resumeExistingRepair ? (task.repair_count ?? 1) : (task.repair_count ?? 0) + 1;
        const repairResumeNumber = resumeExistingRepair ? (task.repair_resume_count ?? 0) + 1 : 0;
        const infrastructureResumeNumber = (resumeExecution ? (task.execution_continue_count ?? 0) : (task.infrastructure_resume_count ?? 0)) + 1;
        const repairIdentity = resumeInfrastructure
          ? `${recoveryIdentity(task, resumeExecution ? "continue" : "resume")}-${infrastructureResumeNumber}`
          : (resumeExistingRepair
            ? `${task.id}-content-repair-${repairNumber}-resume-${repairResumeNumber}`
            : `${task.id}-content-repair-${repairNumber}`);
        const compiled = compileAuthorPrompt({
          task: {
            ...task,
            precheck_results: [task.reason ?? "no precheck reason recorded", `coverage status: ${task.coverage_status ?? "unknown"}`],
            official_source_seeds: state.official_source_seeds?.[task.cpc_code] ?? state.default_official_source_seeds ?? [],
          },
          policyPromptPath: config.policy_prompt_path,
          verifiedCommonUuids: selectedUuids,
          verifiedSourceReceipts: selectedSources,
          tools: { ...config.tools, project_root: config.project_root, config_path: path.resolve(state.config_path ?? config.config_path ?? "") },
          materials: materialsQuery,
        });
        const prompt = resumeInfrastructure
          ? compileInfrastructureResumePrompt(task, compiled.prompt, infrastructureResumeNumber)
          : compileRepairPrompt(task, compiled.prompt, { resumeExistingRepair });
        const outputSchema = compiled.output_schema;
        const taskStateDir = path.join(stateDir, "authors", authorIdentity(config.goal_id, task.cpc_code, task.attempt ?? 1, task.uuid_enrichment_generation));
        mkdirSync(taskStateDir, { recursive: true });
        const repairArtifactStem = resumeInfrastructure
          ? `${resumeExecution ? "execution-continue" : "infrastructure-resume"}-${infrastructureResumeNumber}`
          : (resumeExistingRepair
            ? `repair-${repairNumber}-resume-${repairResumeNumber}`
            : `repair-${repairNumber}`);
        writeFileSync(path.join(taskStateDir, `${repairArtifactStem}-prompt.txt`), prompt);
        writeFileSync(path.join(taskStateDir, `${repairArtifactStem}-materials-query.json`), `${JSON.stringify(materialsQuery, null, 2)}\n`);
        writeFileSync(path.join(taskStateDir, `${repairArtifactStem}-output-schema.json`), `${JSON.stringify(outputSchema, null, 2)}\n`);
        const started = await startAuthorWithIntent({store,task,clientUserMessageId:repairIdentity,target:resumeInfrastructure ? "continue" : "repair",start:()=>adapter.startRepairTurn({
          threadId: task.thread_id,
          worktreePath: task.worktree_path,
          additionalWorkspaceRoots: [materialsRoot],
          prompt,
          outputSchema,
          model: authorConfig.model ?? null,
          reasoningEffort: authorConfig.reasoning_effort ?? null,
          clientUserMessageId: repairIdentity,
          receiptStateDir: stateDir,
        })});
        task = started.task;
        const visible = started.visible;
        faultInjector("after_start_observed");
        const startedAt = new Date().toISOString();
        const resumedState = resumeInfrastructure ? (task.infrastructure_resume_target_state ?? "authoring") : "authoring_repair";
        task = applyTaskTransition(task, { transition_id: `${repairIdentity}-authoring`, to: resumedState, at: startedAt });
        task = {
          ...task,
          ...visible,
          report_complete:false,
          author_model: authorConfig.model ?? null,
          author_reasoning_effort: authorConfig.reasoning_effort ?? null,
          repair_count: resumeInfrastructure ? (task.repair_count ?? 0) : repairNumber,
          repair_resume_count: resumeInfrastructure ? (task.repair_resume_count ?? 0) : repairResumeNumber,
          repair_resume_pending: false,
          infrastructure_resume_pending: false,
          execution_continue_pending: false,
          execution_continue_count: resumeExecution ? infrastructureResumeNumber : (task.execution_continue_count ?? 0),
          execution_continue_history: resumeExecution ? [...(task.execution_continue_history ?? []), {
            incident_id: task.recovery_incident.id, resume_count: infrastructureResumeNumber,
            turn_id: visible.turn_id, source_turn_id: task.turn_id ?? null,
            started_at: startedAt, failure_code: task.failure_code ?? null,
          }] : (task.execution_continue_history ?? []),
          infrastructure_resume_target_state: null,
          infrastructure_resume_count: resumeInfrastructure && !resumeExecution ? infrastructureResumeNumber : (task.infrastructure_resume_count ?? 0),
          infrastructure_resume_history: resumeInfrastructure && !resumeExecution
            ? [...(task.infrastructure_resume_history ?? []), {
              incident_id: task.recovery_incident.id,
              resume_count: infrastructureResumeNumber,
              turn_id: visible.turn_id,
              started_at: startedAt,
              interrupted_turn_id: task.turn_id ?? null,
              failure_code: task.failure_code ?? null,
            }]
            : (task.infrastructure_resume_history ?? []),
          failure_code: resumeInfrastructure ? null : task.failure_code,
          failure_message: resumeInfrastructure ? null : task.failure_message,
          failure_details: resumeInfrastructure ? null : task.failure_details,
          pending_gate_findings: resumeInfrastructure && !hasOpenContentRepair(task) ? [] : task.pending_gate_findings,
          repair_started_at: resumeInfrastructure
            ? task.repair_started_at
            : (resumeExistingRepair ? task.repair_started_at : startedAt),
          repair_history: resumeInfrastructure
            ? (task.repair_history ?? [])
            : (resumeExistingRepair
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
            }]),
        };
        task = recordAuthorTurnContract(task,visible.turn_id);
        task = observeTrialTurn(task, { started_at: startedAt, cache: cacheObservation });
        store.append({ event_id: `${repairIdentity}-started`, type: "task_replaced", payload: { task } });
        dispatched.push(task);
        continue;
      }
      if (!task || task.thread_id || task.state === "authoring") continue;
      const reusePrepared = Boolean(task.worktree_path && !task.thread_id);
      const attempt = task.state === "preflight" || reusePrepared ? (task.attempt ?? 1) : (task.attempt ?? 0) + 1;
      const dispatchCycle = nextDispatchCycle(task);
      const identity = authorIdentity(config.goal_id, task.cpc_code, attempt, task.uuid_enrichment_generation);
      const transitionIdentity = `${identity}-c${dispatchCycle}`;
      const worktreePath = task.worktree_path ?? path.join(config.project_root, ".worktrees", "goals", config.goal_id, "authors", identity);
      const branch = task.author_branch ?? `codex/${identity}`;
      const authorBaseCommit = task.author_base_commit ?? selectGoalRuntimeBaseCommit(state, { projectRoot: config.project_root });
      const authorContentBaseCommit = resolveAuthorContentBaseCommit({
        projectRoot: config.project_root,
        task,
        fallbackCommit: authorBaseCommit,
      });
      ensureGoalWorktree({ projectRoot: config.project_root, worktreePath, commit: authorBaseCommit, branch });
      const compiled = compileAuthorPrompt({
        task: {
          ...task,
          precheck_results: [task.reason ?? "no precheck reason recorded", `coverage status: ${task.coverage_status ?? "unknown"}`],
          official_source_seeds: state.official_source_seeds?.[task.cpc_code] ?? state.default_official_source_seeds ?? [],
        },
        policyPromptPath: config.policy_prompt_path,
        verifiedCommonUuids: selectedUuids,
        verifiedSourceReceipts: selectedSources,
        tools: { ...config.tools, project_root: config.project_root, config_path: path.resolve(state.config_path ?? config.config_path ?? "") },
        materials: materialsQuery,
      });
      const taskStateDir = path.join(stateDir, "authors", identity);
      mkdirSync(taskStateDir, { recursive: true });
      writeFileSync(path.join(taskStateDir, "materials-query.json"), `${JSON.stringify(materialsQuery, null, 2)}\n`);
      writeFileSync(path.join(taskStateDir, "prompt.txt"), compiled.prompt);
      writeFileSync(path.join(taskStateDir, "output-schema.json"), `${JSON.stringify(compiled.output_schema, null, 2)}\n`);
      writeFileSync(path.join(taskStateDir, "prepared.json"), `${JSON.stringify({
        schema_version: 1,
        task_id: task.id,
        attempt,
        uuid_search_contract_version: 1,
        authoring_contract_version: task.authoring_contract_version ?? 1,
        author_base_commit: authorBaseCommit,
        author_content_base_commit: authorContentBaseCommit,
        worktree_path: worktreePath,
        branch,
        policy_sha256: compiled.policy_sha256,
        allowed_files: compiled.allowed_files,
        author_model: authorConfig.model ?? null,
        author_reasoning_effort: authorConfig.reasoning_effort ?? null,
        prepared_at: new Date().toISOString(),
      }, null, 2)}\n`);

      if (task.state !== "preflight") {
        task = applyTaskTransition(task, {
          transition_id: `${transitionIdentity}-preflight`,
          to: "preflight",
          at: new Date().toISOString(),
        });
      }
      task = { ...task, attempt, dispatch_cycle: dispatchCycle, author_base_commit: authorBaseCommit, author_content_base_commit: authorContentBaseCommit, worktree_path: worktreePath, author_branch: branch, allowed_files: compiled.allowed_files, policy_sha256: compiled.policy_sha256, uuid_search_contract_version: 1, author_model: authorConfig.model ?? null, author_reasoning_effort: authorConfig.reasoning_effort ?? null };
      store.append({ event_id: `${transitionIdentity}-prepared`, type: "task_replaced", payload: { task } });

      try {
        const clientUserMessageId = `${authorIdentity(config.goal_id, task.cpc_code, attempt, task.uuid_enrichment_generation)}-first-turn`;
        const started = await startAuthorWithIntent({store,task,clientUserMessageId,target:"author",start:()=>adapter.createAuthorTask({
          worktreePath,
          additionalWorkspaceRoots: [materialsRoot],
          title: `PCR ${task.cpc_code} · ${task.product_name_en}`,
          prompt: compiled.prompt,
          outputSchema: compiled.output_schema,
          sandbox: config.codex?.sandbox ?? "danger-full-access",
          approvalPolicy: config.codex?.approval_policy ?? "never",
          model: authorConfig.model ?? null,
          reasoningEffort: authorConfig.reasoning_effort ?? null,
          clientUserMessageId,
          projectId: config.codex?.project_id ?? null,
          receiptStateDir: stateDir,
        })});
        task = started.task;
        const visible = started.visible;
        faultInjector("after_start_observed");
        task = applyTaskTransition(task, {
          transition_id: `${transitionIdentity}-authoring`,
          to: "authoring",
          at: new Date().toISOString(),
        });
        task = { ...task, ...visible, dispatched_at: new Date().toISOString() };
        task = recordAuthorTurnContract(task,visible.turn_id);
        task = observeTrialTurn(task, { started_at: task.dispatched_at, cache: cacheObservation });
        store.append({ event_id: `${transitionIdentity}-dispatched`, type: "task_replaced", payload: { task } });
        dispatched.push(task);
      } catch (error) {
        if (task.author_start_intent?.visible) throw error;
        task = applyTaskTransition(task, {
          transition_id: `${transitionIdentity}-dispatch-failed`,
          to: "retryable_failure",
          at: new Date().toISOString(),
        });
        task = { ...task, failure_code: error.code ?? "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE", failure_message: error.message, failure_details:error.details ?? {origin:"app_server",failure_kind:"unknown",retryable:false}, coordinator_hold:{reason:"GOAL_AUTHOR_START_UNCERTAIN"} };
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

function selectDispatchTasks(state, slots) {
  state = trialDispatchState(state);
  const repairRequests = state.tasks.filter((task) => !task.coordinator_hold && task.state === "repair_requested" && task.thread_id && task.worktree_path);
  const repairCapacity = Math.max(0, slots - activeAuthorCount(state.tasks));
  const selectedRepairs = repairRequests.slice(0, repairCapacity);
  const prepared = state.tasks.filter((task) => !task.coordinator_hold && task.state === "preflight" && task.worktree_path && !task.thread_id);
  const liveCapacity = Math.max(0, slots - activeAuthorCount(state.tasks.filter(task => task.state !== "preflight")));
  return [...selectedRepairs, ...prepared, ...dispatchCandidates(state.tasks, { slots: slots - selectedRepairs.length })].slice(0, liveCapacity);
}

function previewResumedState({ config, state, now = new Date() }) {
  return {...state, stopped:false, tasks:state.tasks.map(task => {
    const recovery = recoveryForTask(task,config,{now});
    if (!recovery.eligible || isSavedEvidenceRecheckTask(task)) return task;
    if (['resume','defer'].includes(recovery.action)) return {...task,state:'repair_requested',infrastructure_resume_pending:recovery.action === 'resume',execution_continue_pending:recovery.action === 'defer'};
    return {...task,state:'repair_requested'};
  })};
}

// Pure planning is shared by cold preview, dispatch and saved-evidence harvest.
export function recoveryForTask(task, config = {}, {now = new Date()} = {}) {
  const completeReport = task.report_complete === true && Boolean(task.report_path && task.thread_id && task.worktree_path);
  const input = (task.failure_details
    ? {code:task.failure_code,details:task.failure_details}
    : task.pending_gate_findings?.length && task.failure_code !== 'GOAL_CODEX_USAGE_LIMIT_EXCEEDED'
      ? task.pending_gate_findings : {code:task.failure_code});
  const recovery = selectRecovery(input,{completeReport});
  const incident = recoveryIncident(task);
  const infraUsed = incident.legacy_infrastructure_used
    + (task.infrastructure_resume_history ?? []).filter(entry=>entry.incident_id === incident.id).length
    + (task.evidence_recheck_history ?? []).filter(entry=>entry.incident_id === incident.id).length;
  const executionUsed = (incident.legacy_execution_used ?? unboundExecutionCount(task))
    + (task.execution_continue_history ?? []).filter(entry=>entry.incident_id === incident.id).length
    + (task.execution_recheck_history ?? []).filter(entry=>entry.incident_id === incident.id && entry.progress_credited !== true).length;
  const retryAfter = Math.max(config.retry_policy?.backoff_seconds ?? 0,...recovery.findings.map(f=>f.details.retry_after_seconds ?? 0));
  const incidentHistory = [
    ["evidence_recheck", incident.legacy_infrastructure_used], ["infrastructure_resume", incident.legacy_infrastructure_used],
    ["execution_recheck", incident.legacy_execution_used ?? unboundExecutionCount(task)],
    ["execution_continue", incident.legacy_execution_used ?? unboundExecutionCount(task)],
  ].flatMap(([prefix, legacy]) => (task[`${prefix}_history`] ?? [])
    .filter(entry=>entry.incident_id === incident.id || (legacy > 0 && !entry.incident_id)))
    .map(entry=>entry.ended_at ?? entry.started_at).filter(Boolean).sort();
  const lastAt = incidentHistory.at(-1) ?? task.updated_at;
  const due = retryAfter === 0 || !lastAt || new Date(now).getTime() >= Date.parse(lastAt) + retryAfter * 1000;
  const allowed = ['resume','recheck'].includes(recovery.action) ? infraUsed < (config.retry_policy?.max_attempts ?? 3)
    : recovery.action === 'repair' ? (task.attempt ?? 0) < (config.retry_policy?.max_attempts ?? 3) && (task.repair_count ?? 0) < (config.retry_policy?.max_repairs ?? 2)
    : recovery.action === 'defer' && executionUsed < (config.retry_policy?.max_attempts ?? 3);
  return {...recovery,eligible:!task.coordinator_hold && task.state === 'retryable_failure' && allowed && due,
    infrastructure_used:infraUsed,execution_used:executionUsed,
    budget_exhausted:["resume","recheck","defer"].includes(recovery.action) && !allowed,
    backoff_seconds:retryAfter,incident};
}

function recoveryIncident(task) {
  if (task.recovery_incident?.status === 'open') return task.recovery_incident;
  const binding = { task_id:task.id, source_turn_id:task.turn_id ?? null,
    submission_path:task.submission_path ?? task.report_path ?? null,
    report_sha256:task.report_sha256 ?? task.submission_sha256 ?? null,
    commit:task.last_author_commit ?? task.author_commit ?? null,
    previous_incident_id:task.recovery_incident?.id ?? null };
  const legacyUsed = task.recovery_incident?.status === 'closed' ? 0
    : Math.max(task.infrastructure_resume_count ?? 0,task.infrastructure_resume_history?.length ?? 0)
      + Math.max(task.evidence_recheck_count ?? 0,task.evidence_recheck_history?.length ?? 0);
  return {id:createHash('sha256').update(JSON.stringify(binding)).digest('hex').slice(0,24),status:'open',binding,legacy_infrastructure_used:legacyUsed,
    legacy_execution_used:task.recovery_incident?.status === "closed" ? 0 : unboundExecutionCount(task)};
}

function unboundExecutionCount(task) {
  return ["execution_continue", "execution_recheck"].reduce((count, prefix) => {
    const history = task[`${prefix}_history`] ?? [];
    return count + history.filter(entry => !entry.incident_id).length
      + Math.max(0, (task[`${prefix}_count`] ?? 0) - history.length);
  }, 0);
}

function holdExhaustedRecoveries(store, config, now) {
  const state = store.rebuild();
  for (const task of state.tasks) {
    if (task.state !== "retryable_failure" || task.coordinator_hold) continue;
    const recovery = recoveryForTask(task, config, {now});
    if (!recovery.budget_exhausted) continue;
    const reason = recovery.action === "defer" ? "GOAL_EXECUTION_RECOVERY_LIMIT_REACHED" : "GOAL_INFRASTRUCTURE_RECOVERY_LIMIT_REACHED";
    store.append({event_id:`${task.id}-recovery-${recovery.incident.id}-${reason}`,type:"task_replaced",payload:{task:{
      ...task,recovery_incident:recovery.incident,coordinator_hold:{reason,incident_id:recovery.incident.id,
        limit:config.retry_policy?.max_attempts ?? 3,
        used:recovery.action === "defer" ? recovery.execution_used : recovery.infrastructure_used},
    }}});
  }
  return store.rebuild();
}

function recoveryIdentity(task, target) {
  return `${task.id}-recovery-${recoveryIncident(task).id}-${target}`;
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
  auditBoundaryReviewFn = auditBoundaryReview,
  now = () => new Date(),
  reviewBudgetMs = 60_000,
}) {
  return withGoalLockAsync(stateDir, "harvest", async () => {
    const store = new GoalEventStore({ stateDir });
    const deadline = Date.now() + reviewBudgetMs;
    const validResults = [];
    const failures = [];
    let state = holdExhaustedRecoveries(store, config, now());
    const candidates = state.tasks.map(task => {
      if (task.state !== 'retryable_failure' || task.coordinator_hold || task.authoring_contract_version === 2 || task.report_complete === true || !task.report_path) return task;
      try {
        const report = JSON.parse(readFileSync(task.report_path,'utf8'));
        return validateReportFn(report).valid ? {...task,report_complete:true} : task;
      } catch { return task; }
    }).filter((task) => ["authoring", "authoring_repair", "author_review"].includes(task.state)
      || (isSavedEvidenceRecheckTask(task) && recoveryForTask(task, config, {now:now()}).eligible));
    candidates.sort((a, b) => (a.review_window_started_at ?? "").localeCompare(b.review_window_started_at ?? ""));
    let assessedCount = 0;
    for (const selected of candidates) {
      if (assessedCount > 0 && Date.now() >= deadline) break;
      state = store.rebuild();
      let task = state.tasks.find((entry) => entry.id === selected.id);
      assessedCount++;
      if (selected.report_complete === true) task = {...task,report_complete:true};
      if (isSavedEvidenceRecheckTask(task)) {
        task = {...task,recovery_incident:recoveryIncident(task)};
        const executionRecheck = recoveryForTask(task).action === "defer";
        const prefix = executionRecheck ? "execution_recheck" : "evidence_recheck";
        const recheckCount = (task[`${prefix}_count`] ?? 0) + 1;
        const recheckIdentity = `${recoveryIdentity(task, executionRecheck ? "window-recheck" : "recheck")}-${recheckCount}`;
        const startedAt = now().toISOString();
        task = applyTaskTransition(task, {
          transition_id: `${recheckIdentity}-review`,
          to: "author_review",
          at: startedAt,
        });
        task = {
          ...task,
          [`${prefix}_count`]: recheckCount,
          [`${prefix}_pending`]: true,
          recovery_source_turn_id: task.recovery_source_turn_id ?? task.turn_id,
          [`${prefix}_history`]: [...(task[`${prefix}_history`] ?? []), {
            incident_id: task.recovery_incident.id,
            recheck_count: recheckCount,
            started_at: startedAt,
            ended_at: null,
            original_failure_code: selected.failure_code,
            report_path: task.report_path,
            thread_id: task.thread_id,
            turn_id: task.turn_id,
            worktree_path: task.worktree_path,
          }],
        };
        store.append({ event_id: `${recheckIdentity}-started`, type: "task_replaced", payload: { task } });
      }
      const reviewIdentity = task.execution_recheck_pending
        ? `${recoveryIdentity(task, "window-recheck")}-${task.execution_recheck_count}`
        : task.evidence_recheck_pending
        ? `${recoveryIdentity(task, "recheck")}-${task.evidence_recheck_count}`
        : `${task.id}-turn-${task.turn_id}`;
      if (task.coordinator_hold && task.state === "author_review") continue;
      let report;
      if (task.state === "authoring" || task.state === "authoring_repair") {
        const wasRepair = task.state === "authoring_repair"
          || task.continuing_repair_after_thread_replacement === true
          || (Boolean(task.previous_thread_ids?.length) && task.repair_history?.at(-1)?.ended_at == null);
        let response;
        if (!task.coordinator_hold) {
          task = {...task,review_window_started_at:new Date().toISOString()};
          store.append({event_id:`${task.id}-turn-${task.turn_id}-observation-${store.rebuild().last_event_sequence+1}`,
            type:"task_replaced",payload:{task}});
        }
        try {
          reviewTimeRemaining(deadline,{phase:"harvest",subjectId:task.id});
          response = await adapter.readThread({threadId:task.thread_id,includeTurns:true,
            expectedTurnId:task.turn_id,worktreePath:task.worktree_path,deadline});
        } catch (error) {
          const observation = selectRecovery(error);
          task = {...task,author_observation:{status:"incomplete",findings:observation.findings},
            ...(observation.action === "hold" && !task.coordinator_hold ? {coordinator_hold:{reason:error.code ?? "GOAL_AUTHOR_OBSERVATION_FAILED"}} : {})};
          store.append({event_id:`${task.id}-turn-${task.turn_id}-observation-incomplete-${store.rebuild().last_event_sequence+1}`,
            type:"task_replaced",payload:{task}});
          // An unavailable observation says nothing about whether the real author
          // is still running. Preserve its active turn; never start a replacement.
          continue;
        }
        if (task.model_trial) {
          const usage = readTrialTurnUsage({ sessionPath: response.thread?.path, sessionsRoot: adapter.sessionsRoot,
            threadId: task.thread_id, turnId: task.turn_id, worktreePath: task.worktree_path });
          task = { ...task, trial_turns: (task.trial_turns ?? []).map(t => t.thread_id === task.thread_id && t.turn_id === task.turn_id ? { ...t, usage, tokens: usage.tokens ?? "unavailable" } : t) };
        }
        if (response.session_recovery) task = { ...task, session_recovery: response.session_recovery };
        let extracted;
        try {
          extracted = extractCompletedTurnReport(response, task.turn_id);
        } catch (error) {
          if (task.coordinator_hold && error.code === "GOAL_AUTHOR_REPORT_PARSE_FAILED") {
            const terminal = response.thread?.turns?.find((turn) => turn.id === task.turn_id);
            extracted = { status: terminal.status, report: null, error: { code: error.code, message: error.message } };
          } else {
            if (error.code !== "GOAL_AUTHOR_TURN_MISSING") throw error;
            const anotherTurnIsActive = (response.thread?.turns ?? []).some((turn) =>
              turn.id !== task.turn_id && ["inProgress", "pending"].includes(turn.status),
            );
            if (task.coordinator_hold || anotherTurnIsActive) continue;
            extracted = { status: "missing", report: null, error: { code: error.code, message: error.message } };
          }
        }
        if (extracted.status === "inProgress" || extracted.status === "pending") {
          if (task.coordinator_hold || !authorTimedOut(task, config.author_timeout_seconds, now())) continue;
          await adapter.interruptTurn({ threadId: task.thread_id, turnId: task.turn_id });
          const timeoutIdentity = turnObservationIdentity(task, "timeout");
          const finding = {code:'GOAL_AUTHOR_TIMEOUT',message:`Visible author exceeded ${config.author_timeout_seconds} seconds; preserve its worktree.`,
            details:{phase:'author_execution',origin:'harness',failure_kind:'execution_window',retryable:true,subject_id:task.id}};
          task = applyTaskTransition(task,{transition_id:timeoutIdentity,to:'retryable_failure',at:now().toISOString()});
          task = {...task,failure_code:finding.code,failure_message:finding.message,failure_details:finding.details,
            recovery_action:'defer',pending_gate_findings:[finding],repair_resume_pending:false};
          task = observeTrialReview(task, { ok: false, findings: task.pending_gate_findings, at: now().toISOString(), durationMs: "unavailable" });
          store.append({ event_id: `${timeoutIdentity}-recorded`, type: "task_replaced", payload: { task } });
          failures.push(task);
          continue;
        }
        if (task.coordinator_hold) {
          const terminal = response.thread?.turns?.find((turn) => turn.id === task.turn_id);
          const raw = [...(terminal?.items ?? [])].reverse().find((item) => item.type === "agentMessage" && item.text?.trim())?.text ?? null;
          task = { ...task, author_turn_observation: { turn_id: task.turn_id, status: terminal?.status ?? extracted.status, extracted_status: extracted.status,
            error: extracted.error ?? terminal?.error ?? null, raw_final_message: raw } };
          if (extracted.report == null && raw != null) {
            try { extracted.report = JSON.parse(raw); } catch { /* Preserve the raw terminal message for operator inspection. */ }
          }
        }
        if (!task.coordinator_hold && isCodexUsageLimitFailure(extracted)) {
          const failureIdentity = turnObservationIdentity(task, "usage-limit");
          task = applyTaskTransition(task, { transition_id: failureIdentity, to: "retryable_failure", at: now().toISOString() });
          task = {
            ...task,
            failure_code: "GOAL_CODEX_USAGE_LIMIT_EXCEEDED",
            failure_details:{phase:"author_execution",origin:"app_server",failure_kind:"usage_limit",retryable:true,subject_id:task.id},
            failure_message: extracted.error?.message ?? "Codex author usage capacity is unavailable.",
            pending_gate_findings: [{
              code: "codex_usage_limit_exceeded",
              remediation: "Keep the visible thread and worktree intact; resume only after Codex usage capacity is available again.",
            }],
          };
          task = observeTrialReview(task, { ok: false, findings: task.pending_gate_findings, at: now().toISOString(), durationMs: "unavailable" });
          store.append({ event_id: `${failureIdentity}-recorded`, type: "task_replaced", payload: { task } });
          failures.push(task);
          continue;
        }
        if (!task.coordinator_hold && extracted.status !== "completed") {
          const failureIdentity = turnObservationIdentity(task, "failed");
          const failure = {code:extracted.error?.code ?? 'GOAL_AUTHOR_TURN_FAILED',message:JSON.stringify(extracted.error ?? extracted.status),
            details:{phase:'author_execution',origin:'app_server',failure_kind:'unknown',retryable:false,...extracted.error?.details}};
          const recovery = selectRecovery(failure);
          task = applyTaskTransition(task,{transition_id:failureIdentity,to:'retryable_failure',at:now().toISOString()});
          task = {...task,failure_code:failure.code,failure_message:failure.message,failure_details:failure.details,
            coordinator_hold:recovery.action === 'hold' ? {reason:failure.code} : null,
            recovery_action:recovery.action,pending_gate_findings:recovery.findings};
          task = observeTrialReview(task, { ok: false, findings: task.pending_gate_findings, at: now().toISOString(), durationMs: "unavailable" });
          store.append({ event_id: `${failureIdentity}-recorded`, type: "task_replaced", payload: { task } });
          failures.push(task);
          continue;
        }
        report = extracted.report;
        const reportDir = path.join(stateDir, "authors", authorIdentity(config.goal_id, task.cpc_code, task.attempt ?? 1, task.uuid_enrichment_generation));
        mkdirSync(reportDir, { recursive: true });
        const reportPath = path.join(reportDir, wasRepair ? `author-report-repair-${task.repair_count}.json` : "author-report.json");
        writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
        task = applyTaskTransition(task, { transition_id: `${task.id}-turn-${task.turn_id}-review`, to: "author_review", at: new Date().toISOString() });
        const reportedCommit = report?.commit_sha ?? report?.prepared_report?.commit_sha ?? report?.boundary_review_report?.commit_sha;
        task = { ...task, report_path: reportPath, report_complete:false, report_sha256:createHash("sha256").update(readFileSync(reportPath)).digest("hex"),
          ...(task.authoring_contract_version === 2 ? { author_submission: report, submission_path: reportPath } : {}),
          last_author_commit: reportedCommit ?? task.last_author_commit ?? null };
        if (wasRepair) task = { ...finishLatestRepair(task, reportedCommit, now().toISOString()), continuing_repair_after_thread_replacement: false };
        store.append({ event_id: `${task.id}-turn-${task.turn_id}-report`, type: "task_replaced", payload: { task } });
      } else {
        report = task.authoring_contract_version === 2 ? task.author_submission : JSON.parse(readFileSync(task.report_path, "utf8"));
      }
      if (task.coordinator_hold) continue;
      const trialReviewStarted = Date.now();
      task = { ...task, review_window_started_at: new Date().toISOString() };
      try {
        if (task.authoring_contract_version === 2) {
          const resolved = resolveAuthorSubmission({ stateDir, task, wire: task.author_submission, deadline });
          report = resolved.report;
          if (resolved.report_path) task = { ...task, report_path: resolved.report_path };
        }
        const unavailableRows = (Array.isArray(report?.inventory?.unresolved) ? report.inventory.unresolved : []).filter(entry => entry?.reason_code === "tiangong_cli_unavailable");
        const reportedFindings = unavailableRows.length ? [{code:"GOAL_REPORTED_UUID_INFRASTRUCTURE_UNAVAILABLE",
          message:"Author-reported tool unavailability requires independent observation.",
          details:{origin:"author_reported",phase:"report_gate",failure_kind:"unknown",retryable:false,row_ids:unavailableRows.map(entry=>entry.row_id)}}] : [];
        if (task.author_turn_observation?.turn_id === task.turn_id && task.author_turn_observation.extracted_status !== "completed") {
          throw new GoalHarnessError("GOAL_AUTHOR_TURN_REPAIR_REQUIRED", "Preserved held turn did not complete with a machine report.", { observation: task.author_turn_observation, findings: [...reportedFindings,{code:"GOAL_AUTHOR_TURN_REPAIR_REQUIRED",message:"Preserved held turn did not complete with a machine report."}] });
        }
        const reportSchema = validateReportFn(report);
        if (!reportSchema.valid) {
          throw new GoalHarnessError("GOAL_AUTHOR_RESULT_INVALID", `Author report failed ${reportSchema.errors.length} Schema check(s).`, { findings: [...reportedFindings,...reportSchema.errors.map((detail) => ({ code: "AUTHOR_REPORT_SCHEMA_INVALID", message: detail.message, detail }))] });
        }
        task = {...task,report_complete:true};
        if (report.boundary_review != null) {
          if(reportedFindings.length) throw new GoalHarnessError(reportedFindings[0].code,reportedFindings[0].message,{findings:reportedFindings});
          const authorContentBaseCommit = resolveAuthorContentBaseCommit({ projectRoot: config.project_root, task, fallbackCommit: task.author_base_commit ?? state.baseline.commit });
          const audit = await auditBoundaryReviewFn({ projectRoot: config.project_root, baselineCommit: authorContentBaseCommit, worktreePath: task.worktree_path, task: { ...task, goal_id: config.goal_id }, report, stateDir });
          task = applyTaskTransition(task, { transition_id: `${task.id}-turn-${task.turn_id}-boundary-review`, to: "manual_review", at: now().toISOString() });
          task = { ...task, author_content_base_commit: authorContentBaseCommit,
            boundary_review_audit: { ...audit, original_queue_action: task.queue_action }, queue_action: "manual_review" };
          store.append({ event_id: `${task.id}-turn-${task.turn_id}-boundary-review-recorded`, type: "task_replaced", payload: { task } });
          continue;
        }
        const phase = "harvest";
        const capture = operation => {
          try { return operation(); }
          catch (error) { return {valid:false,results:[],checks:[],findings:selectRecovery(error).findings}; }
        };
        const progressBinding = createHash("sha256").update(JSON.stringify({ policy: 2, phase, goal_id: config.goal_id,
          task_id: task.id, thread_id: task.thread_id, turn_id: task.turn_id, worktree_path: task.worktree_path,
          contract: task.authoring_contract_version, allowed_files: task.allowed_files, baseline: task.author_base_commit ?? state.baseline.commit,
          tools: config.tools, report })).digest("hex");
        const savedProgress = task.validation_result?.assessment?.progress ?? task.validation_result?.progress;
        const priorProgress = savedProgress?.binding === progressBinding ? savedProgress : {};
        const priorReview = priorProgress.binding ? task.validation_result?.review ?? task.validation_result : null;
        const authorContentBaseCommit = resolveAuthorContentBaseCommit({ projectRoot: config.project_root, task,
          fallbackCommit: task.author_base_commit ?? state.baseline.commit });
        let review;
        try { review = reviewFn({ projectRoot: config.project_root, baselineCommit: authorContentBaseCommit,
          worktreePath: task.worktree_path, task: { ...task, goal_id: config.goal_id }, report, stateDir,
          phase, deadline, verifiedUuidReads: [], priorReview }); }
        catch (error) { review = failedReview(error,{phase,task}); }
        if(reportedFindings.length) review = {...review,valid:false,findings:[...(review.findings??[]),...reportedFindings]};
        // Finish fixed evidence first. A later window can then spend its budget
        // on fresh UUID reads and their dependent adoption/quality checks.
        const readSources = async () => {
          try { return await verifySourcesFn({report,stateDir,collect:true,phase,deadline,priorProgress:priorProgress.sources}); }
          catch(error) { return {valid:false,results:[],checks:[],findings:selectRecovery(error).findings}; }
        };
        const sourceAudit = await readSources();
        const uuidAudit = capture(() => {
          if ((report.uuid_audits?.length ?? 0) > 0 && !config.tools?.tiangong_cli_root)
            throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "tools.tiangong_cli_root is required to independently audit final UUIDs.", {origin:"harness_probe",failure_kind:"configuration",retryable:false});
          return auditUuidsFn({ report, tiangongCliRoot: config.tools?.tiangong_cli_root, collect:true, phase, deadline,
            startAfter:priorProgress.uuids?.start_after });
        });
        const values = result => Array.isArray(result) ? result : result?.results ?? [];
        const uuidReads = values(uuidAudit);
        const receiptAudit = capture(() => auditHybridSearchFn({report,stateDir,task,verifiedUuidReads:uuidReads,collect:true,phase,deadline,
          startAfter:priorProgress.receipts?.start_after}));
        if (review.quality_context) review = completeAuthorReviewIdentity({review,task,report,verifiedUuidReads:uuidReads,phase,deadline});
        const evidenceAudit = { uuid_reads:uuidReads, hybrid_search_receipts:values(receiptAudit), source_reads:values(sourceAudit) };
        const enrichmentFindings = (task.uuid_enrichment_generation ?? 0) > 0
          ? findUuidEnrichmentCandidates({tasks:[task]},{stateDir}).flatMap(f => f.reasons.map(reason => ({code:"GOAL_UUID_ENRICHMENT_INCOMPLETE",message:reason,origin:"harness_review",failure_kind:"author_claim"}))) : [];
        const assessment = assessRequiredReview({phase,task,report,review,uuidAudit,receiptAudit,sourceAudit,
          enrichment:{valid:enrichmentFindings.length===0,task_id:task.id,commit_sha:report.commit_sha,findings:enrichmentFindings}});
        const completedCount = Object.keys(review.checkpoints ?? {}).length + (sourceAudit?.progress?.completed?.length ?? 0);
        const previousCompleted = priorProgress.completed_high_water ?? priorProgress.completed_count ?? 0;
        assessment.progress={binding:progressBinding,uuids:uuidAudit?.progress??null,receipts:receiptAudit?.progress??null,sources:sourceAudit?.progress??null,
          completed_count:completedCount,completed_high_water:Math.max(previousCompleted,completedCount),
          previous_completed_count:previousCompleted,
          continued_binding:priorProgress.binding === progressBinding};
        // The existing trial hold is reached only when all automatic checks have
        // completed and the sole remaining requirement is its semantic decision.
        if (!assessment.valid && assessment.findings.length > 0
          && assessment.findings.every(f=>f.code === "GOAL_TRIAL_SEMANTIC_REVIEW_REQUIRED")
          && assessment.checks.filter(c=>c.applicable!==false&&c.status!=="passed").every(c=>c.check_id==="semantic")) {
          task = observeTrialReview(task, { ok: true, at: now().toISOString(), durationMs: Date.now() - trialReviewStarted });
          task = { ...task, validation_result: {...review,assessment}, evidence_audit: evidenceAudit,
            coordinator_hold: { reason: "GOAL_TRIAL_SEMANTIC_REVIEW_REQUIRED", commit_sha: report.commit_sha },
            trial_automatic_gates_passed_at: now().toISOString() };
          store.append({ event_id: `${reviewIdentity}-trial-semantic-review`, type: "task_replaced", payload: { task } });
          continue;
        }
        if (!assessment.valid) {
          const decision = selectRecovery(assessment.findings);
          const primary = decision.findings.find(f => f.category === decision.category) ?? decision.findings[0];
          throw new GoalHarnessError(primary?.code ?? "GOAL_AUTHOR_REVIEW_INCOMPLETE", "Final acceptance has failed or incomplete required checks.", {
            ...primary?.details, ...assessment, review, evidence_audit:evidenceAudit,
          });
        }
        review = {...review,assessment};
        task = applyTaskTransition(task, { transition_id: `${reviewIdentity}-valid`, to: "valid_result", at: new Date().toISOString() });
        task = {
          ...task,
          author_content_base_commit: authorContentBaseCommit,
          author_commit: report.commit_sha,
          pcr_id: review.pcr_id ?? task.pcr_id,
          valid_at: new Date().toISOString(),
          validation_result: review,
          evidence_audit: evidenceAudit,
          unresolved_count: report.inventory?.unresolved_rows ?? review.counts?.unresolved ?? 0,
          failure_code: null,
          failure_message: null,
          pending_gate_findings: [],
        };
        if (task.recovery_incident?.status === "open") task = {...task,recovery_incident:{...task.recovery_incident,status:"closed",closed_at:now().toISOString(),closed_by:{turn_id:task.turn_id,commit:report.commit_sha,report_sha256:task.report_sha256}},recovery_source_turn_id:null};
        if (task.evidence_recheck_pending || task.execution_recheck_pending) task = finishEvidenceRecheck(task, { status: "valid_result" }, now().toISOString());
        task = observeTrialReview(task, { ok: true, at: now().toISOString(), durationMs: Date.now() - trialReviewStarted });
        store.append({ event_id: `${reviewIdentity}-valid-result`, type: "task_replaced", payload: { task } });
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
        const recovery = selectRecovery(error, {completeReport:task.report_complete === true});
        const findings = recovery.findings;
        const primaryCode = findings.find(f => f.category === recovery.category)?.code ?? error.code;
        if (recovery.action === "manual_review") {
          task = applyTaskTransition(task, { transition_id: `${reviewIdentity}-measurement-review`, to: "manual_review", at: now().toISOString() });
          task = { ...task, measurement_review: {
            status: "unadjudicated", message: error.message, submission_path: task.submission_path,
          }, pending_gate_findings: findings, validation_result: error.details ?? null,
            ...(error.details?.evidence_audit ? { evidence_audit:error.details.evidence_audit } : {}) };
          if (task.evidence_recheck_pending || task.execution_recheck_pending) task = finishEvidenceRecheck(task, { status: "manual_review" }, now().toISOString());
          task = observeTrialReview(task, {ok:false,findings,at:now().toISOString(),durationMs:Date.now()-trialReviewStarted});
          store.append({ event_id: `${reviewIdentity}-measurement-review-recorded`, type: "task_replaced", payload: { task } });
          failures.push(task);
          continue;
        }
        const repairLimit = config.retry_policy?.max_repairs ?? 2;
        const repairable = recovery.action === "repair" && (task.repair_count ?? 0) < repairLimit;
        task = applyTaskTransition(task, {
          transition_id: `${reviewIdentity}-review-failed`,
          to: repairable ? "repair_requested" : "retryable_failure",
          at: new Date().toISOString(),
        });
        task = {
          ...task,
          failure_code: repairable ? "GOAL_AUTHOR_REPAIR_REQUIRED" : (recovery.action !== "repair"
            ? primaryCode : ((task.repair_count ?? 0) >= repairLimit ? "GOAL_REPAIR_LIMIT_REACHED" : (error.code ?? "GOAL_AUTHOR_REVIEW_FAILED"))),
          failure_message: error.message,
          failure_details: { ...error.details, findings },
          recovery_action: recovery.action,
          coordinator_hold: recovery.action === "hold" ? {reason:primaryCode ?? "GOAL_UNKNOWN_FAILURE"} : task.coordinator_hold,
          validation_result: error.details ?? null,
          ...(error.details?.evidence_audit ? { evidence_audit:error.details.evidence_audit } : {}),
          pending_gate_findings: findings,
          repair_count: task.repair_count ?? 0,
          last_author_commit: report?.commit_sha ?? task.last_author_commit ?? null,
        };
        if (task.evidence_recheck_pending || task.execution_recheck_pending) task = finishEvidenceRecheck(task, { status: task.state, failure_code: task.failure_code }, now().toISOString());
        task = observeTrialReview(task, { ok: false, findings, at: now().toISOString(), durationMs: Date.now() - trialReviewStarted });
        store.append({ event_id: `${reviewIdentity}-invalid-result`, type: "task_replaced", payload: { task } });
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
    "For a completed PCR, fix every structured gate finding below, rerun structured sync twice, validate, commit only the allowed files, and return a complete JSON report matching the output schema supplied to this repair turn.",
    "For an explicit boundary_review referral, follow the boundary-review report contract above, preserve partial authorized work, report actual HEAD, and do not run sync, validation, or make a commit merely to satisfy completion gates.",
    JSON.stringify({
      repair_count: resumeExistingRepair ? (task.repair_count ?? 1) : (task.repair_count ?? 0) + 1,
      continuation_of_interrupted_repair: resumeExistingRepair,
      original_commit: task.last_author_commit ?? task.author_commit ?? null,
      allowed_files: task.allowed_files ?? [],
      gate_findings: task.pending_gate_findings ?? [],
    }, null, 2),
  ].join("\n\n");
}

function compileInfrastructureResumePrompt(task, currentAuthorPrompt, resumeCount) {
  const continuingRepair = hasOpenContentRepair(task);
  return [
    "Continue the same PCR in this same visible thread and the same preserved worktree after an infrastructure-only interruption.",
    "Do not restart the PCR, do not modify files outside the original four-file allowlist, and do not count this continuation as a content repair.",
    "The complete current author contract follows and supersedes the interrupted turn's tooling and output-report instructions.",
    currentAuthorPrompt,
    "For a completed PCR, resume from the files already present, complete all required checks, commit only the allowed files, and return a complete JSON report matching the supplied output schema.",
    "For an explicit boundary_review referral, follow the boundary-review report contract above, preserve partial authorized work, report actual HEAD, and do not run sync, validation, or make a commit merely to satisfy completion gates.",
    JSON.stringify({
      infrastructure_resume_count: resumeCount,
      continuing_content_repair: continuingRepair,
      repair_count: task.repair_count ?? 0,
      allowed_files: task.allowed_files ?? [],
      gate_findings: continuingRepair ? (task.repair_history?.at(-1)?.gate_findings ?? []) : [],
    }, null, 2),
  ].join("\n\n");
}

function hasOpenContentRepair(task) {
  const latest = task.repair_history?.at(-1);
  return Boolean((task.repair_count ?? 0) > 0 && latest && latest.ended_at == null);
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

function finishEvidenceRecheck(task, outcome, endedAt) {
  const prefix = task.execution_recheck_pending ? "execution_recheck" : "evidence_recheck";
  const history = [...(task[`${prefix}_history`] ?? [])];
  const progress = task.validation_result?.assessment?.progress ?? task.validation_result?.progress;
  const progressed = prefix === "execution_recheck" && progress?.continued_binding === true
    && progress.completed_count > progress.previous_completed_count
    && selectRecovery({ code: task.failure_code, details: task.failure_details }).action === "defer";
  if (history.length > 0) history[history.length - 1] = { ...history.at(-1), ended_at: endedAt, ...outcome,
    ...(progressed ? { progress_credited: true, progress_binding: progress.binding,
      completed_before: progress.previous_completed_count, completed_after: progress.completed_count } : {}) };
  return { ...task, [`${prefix}_pending`]: false, [`${prefix}_history`]: history };
}

export function isSavedEvidenceRecheckTask(task) {
  const recovery = recoveryForTask(task);
  return task?.state === "retryable_failure" && (recovery.action === "recheck"
    || (recovery.action === "defer" && task.report_complete === true));
}

function isCodexUsageLimitFailure(extracted) {
  return extracted?.error?.codexErrorInfo === "usageLimitExceeded";
}

function selectRelevantCommonUuids({ stateDir, task }) {
  const terms = `${task.product_name_en ?? ""} ${task.product_name_zh ?? ""}`.toLowerCase();
  const universal = /electric|water|natural gas|diesel|steam|oxygen|nitrogen|carbon dioxide|methane|sodium|refrigerant/iu;
  const entries = listGoalCacheReceipts({ stateDir, namespace: "verified_common_uuids" })
    .filter((receipt) => isReusableCommonUuidAudit({ stateDir, entry: receipt.value }))
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

function nextDispatchCycle(task) {
  let highest = Number.isInteger(task.dispatch_cycle) ? task.dispatch_cycle : 0;
  for (const transitionId of task.transition_ids ?? []) {
    const match = String(transitionId).match(/-c(\d+)-(?:preflight|authoring|dispatch-failed)$/u);
    if (match) highest = Math.max(highest, Number(match[1]));
  }
  return highest + 1;
}

function turnObservationIdentity(task, outcome) {
  const repairGeneration = task.state === "authoring_repair" || (task.repair_count ?? 0) > 0
    ? `repair-${task.repair_count ?? 0}-resume-${task.repair_resume_count ?? 0}`
    : "author";
  return `${task.id}-turn-${task.turn_id}-${repairGeneration}-${outcome}`;
}

function authorTimedOut(task, timeoutSeconds, at) {
  const currentRepair = task.repair_history?.at(-1);
  const activeTurnStartedAt = task.state === "authoring_repair"
    ? ((task.repair_resume_count ?? 0) > 0
      ? task.updated_at ?? task.repair_started_at ?? currentRepair?.started_at ?? task.dispatched_at
      : task.repair_started_at ?? currentRepair?.started_at ?? task.updated_at ?? task.dispatched_at)
    : task.dispatched_at;
  if (!Number.isFinite(timeoutSeconds) || timeoutSeconds <= 0 || !activeTurnStartedAt) return false;
  const started = Date.parse(activeTurnStartedAt);
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

function selectRecordedAuthorBaseCommit({ projectRoot, task, baselineCommit, fallbackCommit }) {
  const candidate = task.last_author_commit ?? task.author_commit;
  if (!candidate) return fallbackCommit;
  try {
    const inspected = inspectAuthorCommit({ projectRoot, baselineCommit, authorCommit: candidate });
    const allowed = new Set(task.allowed_files ?? []);
    return inspected.changed_files.every((entry) => allowed.has(entry)) ? candidate : fallbackCommit;
  } catch {
    return fallbackCommit;
  }
}

async function startAuthorWithIntent({store,task,clientUserMessageId,target,start}) {
  let intent=task.author_start_intent;
  if (!intent || intent.client_user_message_id !== clientUserMessageId) {
    intent={client_user_message_id:clientUserMessageId,target,source_turn_id:task.recovery_source_turn_id ?? task.turn_id ?? null,created_at:new Date().toISOString()};
    task={...task,author_start_intent:intent};
    store.append({event_id:`${clientUserMessageId}-start-intent`,type:'task_replaced',payload:{task}});
  }
  if (intent.visible) return {task,visible:intent.visible};
  const visible=await start();
  task={...task,author_start_intent:{...intent,visible}};
  store.append({event_id:`${clientUserMessageId}-start-observed`,type:'task_replaced',payload:{task}});
  return {task,visible};
}
