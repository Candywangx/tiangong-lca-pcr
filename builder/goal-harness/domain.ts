import type { UnknownRecord } from '../../packages/pcr-core/src/types.ts';
export type { UnknownRecord } from '../../packages/pcr-core/src/types.ts';

/** Persisted extensions remain unknown. Known execution/evidence fields are
 * narrowed at the reader boundary; these types never authorize a state upgrade. */
export interface GoalFinding extends UnknownRecord {
  code: string; message?: string; details?: UnknownRecord;
  phase?: string; origin?: string; failure_kind?: string; retryable?: boolean;
  subject_id?: string | undefined; author_reported?: boolean;
}
export interface GoalCheck extends UnknownRecord {
  phase?: string; check_id: string; subject_id?: string; status: string;
  applicable?: boolean; reason?: string; findings?: GoalFinding[]; depends_on?: GoalCheckDependency[];
}
export interface GoalCheckDependency { phase?: string; check_id: string; subject_id?: string }
export interface AuthorContractVersions {
  authoring_contract_version: 1 | 2; author_draft_schema_version: 1 | 2; author_report_schema_version: 1;
}
export interface AuthorTurnContract extends AuthorContractVersions { thread_id?: string | null | undefined; turn_id: string }
export interface GoalTrialControls {
  harness_sha256: string; policy_sha256: string; config_sha256: string; cache_sha256?: string;
}
export interface GoalTrialAssignment extends UnknownRecord {
  task_id: string; model: string; pair_id?: string; difficulty?: string; rationale?: string;
  effort?: string; cpc_code?: string; pcr_path?: string; action?: string;
}
export interface GoalTaskTrial extends UnknownRecord { trial_id?: string; task_id?: string; model: string; pair_id?: string; difficulty?: string; rationale?: string; effort?: string; controls?: GoalTrialControls }
export interface GoalModelTrial extends UnknownRecord {
  id: string; assignments: GoalTrialAssignment[]; controls: GoalTrialControls;
  control_history?: {controls: GoalTrialControls; at: string; reason: string}[];
}
export interface TrialUsage extends UnknownRecord {
  status?: string; reason?: string | null; tokens?: Record<string, number> | null;
  observed_model?: string | null; observed_reasoning_effort?: string | null; source_sha256?: string | null;
  started_at?: string | null; completed_at?: string | null;
}
export interface GoalTrialTurn extends UnknownRecord {
  thread_id?: string | null | undefined; turn_id?: string | null | undefined;
  model?: string | undefined; effort?: string | undefined; usage?: TrialUsage;
}
export interface GoalTrialReview extends UnknownRecord { key: string; ok: boolean; category: string; findings: GoalFinding[] }
export interface GoalTask extends UnknownRecord {
  id: string; state: string;
  goal_id?: string; cpc_code?: string; pcr_id?: string | null; pcr_path?: string; allowed_files?: string[];
  queue_action?: string; queue_order?: number; product_name_en?: string; product_name_zh?: string | null;
  attempt?: number | undefined; repair_count?: number; repair_resume_count?: number; infrastructure_resume_count?: number;
  execution_continue_count?: number; execution_recheck_count?: number; evidence_recheck_count?: number;
  uuid_enrichment_generation?: number; uuid_search_contract_version?: number;
  authoring_contract_version?: number; author_draft_schema_version?: number; author_report_schema_version?: number;
  thread_id?: string | null | undefined; turn_id?: string | null | undefined; worktree_path?: string | null | undefined;
  author_branch?: string | null | undefined; author_commit?: string | null; last_author_commit?: string | null;
  author_base_commit?: string; author_content_base_commit?: string;
  author_model?: string; author_reasoning_effort?: string;
  report_path?: string | null | undefined; report_sha256?: string | null; report_complete?: boolean;
  submission_path?: string | null; submission_sha256?: string | null;
  failure_code?: string; failure_message?: string; failure_details?: UnknownRecord;
  updated_at?: string; valid_at?: string|null; landed_at?: string; integration_snapshot_id?: string|null;
  dispatched_at?: string; repair_started_at?: string; integration_commit?: string;
  transition_ids?: string[]; previous_thread_ids?: string[]; previous_worktree_paths?: string[];
  author_turn_contracts?: AuthorTurnContract[]; author_start_intent?: UnknownRecord;
  repair_history?: UnknownRecord[]; uuid_enrichment_history?: UnknownRecord[];
  infrastructure_resume_history?: UnknownRecord[]; execution_continue_history?: UnknownRecord[];
  evidence_recheck_history?: UnknownRecord[]; execution_recheck_history?: UnknownRecord[];
  infrastructure_resume_pending?: boolean; execution_continue_pending?: boolean;
  repair_resume_pending?: boolean; execution_recheck_pending?: boolean; evidence_recheck_pending?: boolean;
  coordinator_hold?: UnknownRecord | null; coordinator_hold_history?: UnknownRecord[];
  model_trial?: GoalTaskTrial|undefined; trial_turns?: GoalTrialTurn[]; trial_reviews?: GoalTrialReview[];
  trial_safety_incidents?: (UnknownRecord & {status: string})[]; trial_semantic_review?: UnknownRecord;
  pending_gate_findings?: GoalFinding[]; review_assessment?: UnknownRecord;
}
export interface GoalSnapshot extends UnknownRecord {
  id: string; goal_id?: string; state?: string; task_ids?: string[];
  author_commits?: (string | null | undefined)[]; result_keys?: string[];
  integration_commit?: string | null; base_commit?: string | null; created_at?: string | null;
  landed_at?: string | null; validated_at?: string | null; worktree_path?: string | null | undefined;
}
export interface GoalState extends UnknownRecord {
  tasks: GoalTask[]; snapshots: GoalSnapshot[]; stopped: boolean;
  last_event_sequence: number; last_event_hash: string | null;
  goal_id?: string; config_path?: string; updated_at?: string; model_trials?: GoalModelTrial[];
  baseline?: UnknownRecord; runtime_baseline?: UnknownRecord; plan?: UnknownRecord;
  verified_common_uuids?: UnknownRecord[]; landed_path_fingerprints?: Record<string, UnknownRecord>;
}
export interface GoalEvent extends UnknownRecord {
  sequence: number; event_id: string; at: string; type: string; payload: UnknownRecord;
  previous_hash: string | null; hash: string;
}
export interface GoalEventInput { event_id?: string; at?: string; type: string; payload?: UnknownRecord }
export interface GoalTools extends UnknownRecord {
  codex?: string; tiangong_cli_root?: string; flow_hybrid_search_root?: string; paper_search?: string;
  credentials_env_file?: string; materials_root?: string;
}
export interface GoalConfig {
  schema_version: 1; goal_id: string; project_root: string; target_category_path: string; target_category_relative: string;
  classification_system: string; classification_version: string; cpc_selector: {mode: 'target_category'; value: 'all' | string[]};
  policy_prompt_path: string; artifact_store: string; author_slots: number; integration_batch_size: number;
  skip_cpc_list: string[]; author_timeout_seconds: number;
  retry_policy: {max_attempts: number; max_repairs: number; backoff_seconds: number};
  tools: GoalTools & {codex: string}; baseline: {tracked_roots: string[]; untracked_allowlist: string[]};
  codex: {sandbox: string; approval_policy: string; project_id?: string; model?: string; reasoning_effort?: string};
  integration: {final_partial_batch: boolean; decided_by?: string};
}
export interface ReviewAssessment extends UnknownRecord {
  valid: boolean; phase: string; commit_sha?: string; findings: GoalFinding[];
  checks?: GoalCheck[]; required_checks?: GoalCheck[];
}
export interface EvidenceEnvelope<T = UnknownRecord> {
  valid: boolean; results: T[]; checks: GoalCheck[]; findings: GoalFinding[];
  legacy?: boolean; missing?: boolean;
}
export interface GoalAuthorReport extends UnknownRecord {
  schema_version?: number; commit_sha?: string; pcr_path?: string;
  hybrid_search_receipt_ids?: string[];
  uuid_audits?: UnknownRecord[]; rejected_uuid_candidates?: UnknownRecord[];
  sources?: UnknownRecord[]; inventory?: UnknownRecord;
}

export function isRecord(value: unknown): value is UnknownRecord {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
export function field(value: unknown, key: string): unknown {
  if (value === null || (typeof value !== 'object' && typeof value !== 'function')) return undefined;
  const result: unknown = Reflect.get(value, key); return result;
}
export function record(value: unknown, label = 'Goal data'): UnknownRecord {
  if (!isRecord(value)) throw new TypeError(`${label} must be an object.`); return value;
}
export function array(value: unknown, label = 'Goal data'): unknown[] {
  if (!Array.isArray(value)) throw new TypeError(`${label} must be an array.`); return value;
}
export function records(value: unknown, label = 'Goal data'): UnknownRecord[] {
  const items = array(value, label); if (!items.every(isRecord)) throw new TypeError(`${label} must contain objects.`); return items;
}
export function strings(value: unknown, label = 'Goal data'): string[] {
  const items = array(value, label); if (!items.every((entry): entry is string => typeof entry === 'string')) throw new TypeError(`${label} must contain strings.`); return items;
}
export function text(value: unknown, label = 'Goal data'): string {
  if (typeof value !== 'string') throw new TypeError(`${label} must be a string.`); return value;
}
export function number(value: unknown, label = 'Goal data'): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) throw new TypeError(`${label} must be a finite number.`); return value;
}
export function errorMessage(error: unknown): string { return error instanceof Error ? error.message : String(error); }
export function errorCode(error: unknown): unknown { return field(error, 'code'); }
export function json(textValue: string): unknown { const value: unknown = JSON.parse(textValue); return value; }
export function jsonRecord(textValue: string): UnknownRecord { return record(json(textValue)); }

const taskStrings = ['goal_id','cpc_code','pcr_path','queue_action','product_name_en','author_base_commit','author_content_base_commit','author_model','author_reasoning_effort','failure_code','failure_message','updated_at','landed_at','dispatched_at','repair_started_at','integration_commit'];
const taskNullableStrings = ['valid_at','integration_snapshot_id','pcr_id','product_name_zh','thread_id','turn_id','worktree_path','author_branch','author_commit','last_author_commit','report_path','report_sha256','submission_path','submission_sha256'];
const taskNumbers = ['queue_order','attempt','repair_count','repair_resume_count','infrastructure_resume_count','execution_continue_count','execution_recheck_count','evidence_recheck_count','uuid_enrichment_generation','uuid_search_contract_version','authoring_contract_version','author_draft_schema_version','author_report_schema_version'];
const taskBooleans = ['report_complete','infrastructure_resume_pending','execution_continue_pending','repair_resume_pending','execution_recheck_pending','evidence_recheck_pending'];
const taskStringArrays = ['allowed_files','transition_ids','previous_thread_ids','previous_worktree_paths'];
const taskRecordArrays = ['repair_history','uuid_enrichment_history','infrastructure_resume_history','execution_continue_history','evidence_recheck_history','execution_recheck_history','coordinator_hold_history'];
function optionalFields(value: UnknownRecord, names: readonly string[], guard: (value: unknown) => boolean): boolean {
  return names.every(name => value[name] === undefined || guard(value[name]));
}
const isStrings = (value: unknown): value is string[] => Array.isArray(value) && value.every((entry): entry is string => typeof entry === 'string');
const isRecords = (value: unknown): value is UnknownRecord[] => Array.isArray(value) && value.every(isRecord);
export function isGoalFinding(value: unknown): value is GoalFinding {
  return isRecord(value) && typeof value.code === 'string' && optionalFields(value,['message','phase','origin','failure_kind','subject_id'],entry=>typeof entry==='string')
    && optionalFields(value,['retryable','author_reported'],entry=>typeof entry==='boolean') && optionalFields(value,['details'],isRecord);
}
function isAuthorTurnContract(value: unknown): value is AuthorTurnContract {
  return isRecord(value) && typeof value.turn_id === 'string' && (value.thread_id === undefined || value.thread_id === null || typeof value.thread_id === 'string')
    && (value.authoring_contract_version === 1 || value.authoring_contract_version === 2)
    && (value.author_draft_schema_version === 1 || value.author_draft_schema_version === 2) && value.author_report_schema_version === 1;
}
function isTrialControls(value: unknown): value is GoalTrialControls {
  return isRecord(value) && ['harness_sha256','policy_sha256','config_sha256'].every(key=>typeof value[key]==='string') && Object.values(value).every(entry=>typeof entry==='string');
}
function isTaskTrial(value: unknown): value is GoalTaskTrial {
  return isRecord(value) && typeof value.model === 'string' && optionalFields(value,['trial_id','task_id','pair_id','difficulty','rationale','effort'],entry=>typeof entry==='string') && optionalFields(value,['controls'],isTrialControls);
}
function isUsage(value: unknown): value is TrialUsage {
  return isRecord(value) && optionalFields(value,['status'],entry=>typeof entry==='string')
    && optionalFields(value,['reason','observed_model','observed_reasoning_effort','source_sha256','started_at','completed_at'],entry=>entry===null||typeof entry==='string')
    && optionalFields(value,['tokens'],entry=>entry===null||isRecord(entry)&&Object.values(entry).every(counter=>typeof counter==='number'));
}
function isTrialTurn(value: unknown): value is GoalTrialTurn {
  return isRecord(value) && optionalFields(value,['thread_id','turn_id'],entry=>entry===null||typeof entry==='string') && optionalFields(value,['model','effort'],entry=>typeof entry==='string') && optionalFields(value,['usage'],isUsage);
}
function isTrialReview(value: unknown): value is GoalTrialReview {
  return isRecord(value) && typeof value.key==='string' && typeof value.ok==='boolean' && typeof value.category==='string' && Array.isArray(value.findings) && value.findings.every(isGoalFinding);
}
export function isGoalTask(value: unknown): value is GoalTask {
  if (!isRecord(value) || typeof value.id !== 'string' || typeof value.state !== 'string') return false;
  return optionalFields(value,taskStrings,entry=>typeof entry==='string')
    && optionalFields(value,taskNullableStrings,entry=>entry===null||typeof entry==='string')
    && optionalFields(value,taskNumbers,entry=>typeof entry==='number'&&Number.isFinite(entry)) && optionalFields(value,taskBooleans,entry=>typeof entry==='boolean')
    && optionalFields(value,taskStringArrays,isStrings) && optionalFields(value,taskRecordArrays,isRecords)
    && optionalFields(value,['author_start_intent','failure_details','trial_semantic_review','review_assessment'],isRecord)
    && optionalFields(value,['coordinator_hold'],entry=>entry===null||isRecord(entry))
    && optionalFields(value,['author_turn_contracts'],entry=>Array.isArray(entry)&&entry.every(isAuthorTurnContract))
    && optionalFields(value,['model_trial'],isTaskTrial) && optionalFields(value,['trial_turns'],entry=>Array.isArray(entry)&&entry.every(isTrialTurn))
    && optionalFields(value,['trial_reviews'],entry=>Array.isArray(entry)&&entry.every(isTrialReview))
    && optionalFields(value,['trial_safety_incidents'],entry=>Array.isArray(entry)&&entry.every(item=>isRecord(item)&&typeof item.status==='string'))
    && optionalFields(value,['pending_gate_findings'],entry=>Array.isArray(entry)&&entry.every(isGoalFinding));
}
export function goalTask(value: unknown): GoalTask { if (!isGoalTask(value)) throw new TypeError('Persisted Goal task shape is invalid.'); return value; }
export function goalTasks(value: unknown): GoalTask[] { const items=array(value); if (!items.every(isGoalTask)) throw new TypeError('Persisted Goal task inventory is invalid.'); return items; }
export function isGoalSnapshot(value: unknown): value is GoalSnapshot {
  return isRecord(value) && typeof value.id==='string' && optionalFields(value,['task_ids'],isStrings) && optionalFields(value,['goal_id','state'],entry=>typeof entry==='string')
    && optionalFields(value,['integration_commit','base_commit','created_at','landed_at','validated_at','worktree_path'],entry=>entry===null||typeof entry==='string')
    && optionalFields(value,['result_keys'],isStrings) && optionalFields(value,['author_commits'],entry=>Array.isArray(entry)&&entry.every(commit=>commit==null||typeof commit==='string'));
}
export function goalSnapshot(value: unknown): GoalSnapshot { if (!isGoalSnapshot(value)) throw new TypeError('Persisted Goal snapshot shape is invalid.'); return value; }
export function goalSnapshots(value: unknown): GoalSnapshot[] { const items=array(value); if (!items.every(isGoalSnapshot)) throw new TypeError('Persisted Goal snapshot inventory is invalid.'); return items; }
export function trialControls(value: unknown): GoalTrialControls { if (!isTrialControls(value)) throw new TypeError('Persisted model trial controls are invalid.'); return value; }
export function modelTrial(value: unknown): GoalModelTrial {
  const valueRecord=record(value); const assignments=records(valueRecord.assignments);
  if (typeof valueRecord.id!=='string' || !assignments.every(isTrialAssignment)) throw new TypeError('Persisted model trial shape is invalid.');
  const controls=trialControls(valueRecord.controls);
  if (valueRecord.control_history !== undefined && (!Array.isArray(valueRecord.control_history) || !valueRecord.control_history.every(entry=>isRecord(entry)&&isTrialControls(entry.controls)&&typeof entry.at==='string'&&typeof entry.reason==='string'))) throw new TypeError('Persisted model trial control history is invalid.');
  return { ...valueRecord, id:valueRecord.id, assignments, controls };
}
function isTrialAssignment(value: unknown): value is GoalTrialAssignment {
  return isRecord(value) && typeof value.task_id==='string' && typeof value.model==='string' && optionalFields(value,['pair_id','difficulty','rationale','effort','cpc_code','pcr_path','action'],entry=>typeof entry==='string');
}
export function goalState(value: unknown): GoalState {
  const data=record(value); const tasks=goalTasks(data.tasks); const snapshots=goalSnapshots(data.snapshots ?? []);
  if (typeof data.stopped!=='boolean' || typeof data.last_event_sequence!=='number' || (data.last_event_hash!==null&&typeof data.last_event_hash!=='string')) throw new TypeError('Persisted Goal state shape is invalid.');
  if (!optionalFields(data,['goal_id','config_path','updated_at'],entry=>typeof entry==='string') || !optionalFields(data,['baseline','runtime_baseline','plan'],isRecord)
    || !optionalFields(data,['verified_common_uuids'],isRecords) || !optionalFields(data,['landed_path_fingerprints'],entry=>isRecord(entry)&&Object.values(entry).every(isRecord))) throw new TypeError('Persisted Goal metadata shape is invalid.');
  const trials=data.model_trials===undefined?undefined:array(data.model_trials).map(modelTrial);
  return { ...data, tasks, snapshots, stopped:data.stopped, last_event_sequence:data.last_event_sequence, last_event_hash:data.last_event_hash, ...(trials===undefined?{}:{model_trials:trials}) };
}
export function goalEvent(value: unknown): GoalEvent {
  const data=record(value); const payload=record(data.payload ?? {});
  if (typeof data.sequence!=='number' || typeof data.event_id!=='string' || typeof data.at!=='string' || typeof data.type!=='string'
    || typeof data.hash!=='string' || (data.previous_hash!==null&&typeof data.previous_hash!=='string')) throw new TypeError('Persisted Goal event shape is invalid.');
  return { ...data, sequence:data.sequence,event_id:data.event_id,at:data.at,type:data.type,payload,previous_hash:data.previous_hash,hash:data.hash };
}
