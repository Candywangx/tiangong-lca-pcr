import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

import { GoalEventStore } from "./event-store.mjs";
import { harvestGoalAuthors } from "./orchestrator.mjs";
import { prepareAuthorReport, resolvePreparedReport } from "./report-preparation.mjs";
import { resolveAuthorSubmission } from "./author-submission.mjs";
import { runHybridSearchWithReceipt, recordHybridCandidateDirectRead, finalizeHybridSearchReceipt } from "./uuid-search-receipts.mjs";
import { flattenProcessInventory } from "./author-gates.mjs";
import { parsePcrMarkdownToStructured, structuredProjectionYaml } from "../lib/markdown-projection.mjs";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { inspectPcrDirectory } from "../lib/lint-rules.mjs";

const evidence = JSON.parse(readFileSync(new URL("./fixtures/44125-rejection-differences.json", import.meta.url)));
const candidate = evidence.findings[0];
const git = (cwd, args) => execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
// This stub isolates the submission transport from PCR content quality. Tests below
// also exercise the default reviewer to show that the author's booleans cannot bypass it.
const reviewed = () => ({ valid: true, builder: { measurement: { status: "pass", coverage: { complete: true } } }, sync: { first_run_clean: true, second_run_clean: true } });

function fixture(t, { repair = false, conflictingMaterial = false, materialTransform = null } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "pcr-prepared-intake-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "Prepared Intake Test"]);
  git(root, ["config", "user.email", "test@example.invalid"]);
  writeFileSync(path.join(root, ".gitignore"), "library/.pcr-builder-state/\n.worktrees/\n");
  const runtimeCli = fileURLToPath(new URL("../cli/index.mjs", import.meta.url));
  // Review worktrees run the real Builder CLI from this checkout. Only the tiny
  // temporary repo and its authorized PCR are mutated, never the runtime tree.
  writeFileSync(path.join(root, "package.json"), JSON.stringify({ scripts: {
    "pcr:sync-structured": `"${process.execPath}" "${runtimeCli}" sync-structured --root .`,
  } }));
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "baseline"]);
  const baseline = git(root, ["rev-parse", "HEAD"]);
  const pcrPath = conflictingMaterial
    ? "library/pcrs/metal-products-machinery-and-equipment/special-purpose-machinery/straw-or-fodder-balers-including-pickup-balers"
    : "library/pcrs/machinery/general/baler";
  mkdirSync(path.join(root, pcrPath), { recursive: true });
  const files = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map(name => `${pcrPath}/${name}`);
  for (const file of files) writeFileSync(path.join(root, file), conflictingMaterial
    ? readFileSync(new URL(`../fixtures/measurement-44125/${path.basename(file)}`, import.meta.url))
    : `fixture ${file}\n`);
  materialTransform?.(path.join(root, pcrPath));
  git(root, ["add", ...files]);
  git(root, ["commit", "-qm", "author four files"]);
  const commit = git(root, ["rev-parse", "HEAD"]);
  const stateDir = path.join(root, "library/.pcr-builder-state/goals/prepared-intake");
  const task = {
    id: "cpc:3.0:44125", cpc_code: "44125", pcr_path: pcrPath, queue_action: "create_new",
    state: repair ? "authoring_repair" : "authoring", attempt: 1, repair_count: repair ? 1 : 0,
    thread_id: "thread-1", turn_id: "turn-1", worktree_path: root, allowed_files: files,
    author_base_commit: baseline, authoring_contract_version: 2,
    ...(repair ? { repair_history: [{ repair_count: 1, turn_id: "turn-1", original_commit: baseline, started_at: "2026-09-11T00:00:00.000Z", ended_at: null }] } : {}),
  };
  const store = new GoalEventStore({ stateDir });
  store.initialize({ goal_id: "prepared-intake", baseline: { commit: baseline }, tasks: [task], snapshots: [], stopped: false });
  const draft = {
    schema_version: 1, cpc_code: "44125", product_name_en: "Baler", product_name_zh: "打捆机", pcr_path: pcrPath,
    queue_action: "create_new", files, sources: [], uuid_audits: [], receipt_ids: [],
    inventory: { total_rows: 0, matched_rows: 0, unresolved_rows: 0, unresolved: [] },
    reference_product_uuid_confirmed: false, ranges: [], bilingual: { aligned: true, en_inventory_rows: 0, zh_inventory_rows: 0 },
    structured_sync: { first_run_ok: true, second_run_clean: true, schema_valid: true },
    validate: { ok: true, exit_code: 0, known_shared_artifact_only: false, summary: null },
    complexity_justification: null, cartesian_expansion_review: null, methodology_necessity_approved: null,
    commit_sha: commit, unresolved_issues: [], boundary_review: null,
  };
  const draftPath = path.join(stateDir, "author-draft.json");
  writeFileSync(draftPath, JSON.stringify(draft));
  const config = { goal_id: "prepared-intake", project_root: root, tools: {}, retry_policy: { max_repairs: 2 } };
  const options = { config, stateDir, taskId: task.id, draftPath, cwd: root, reviewFn: reviewed };
  return { root, stateDir, task, store, draft, draftPath, config, options, commit, files };
}

function sealRejectedCandidate(f) {
  const receiptId = "receipt-44125";
  const query = runHybridSearchWithReceipt({
    stateDir: f.stateDir, taskId: f.task.id, cwd: f.root, query: "finished baler", randomId: () => receiptId,
    toolConfig: { flow_hybrid_search_root: "/unused-local-test-tool" },
    runner: () => ({ status: 0, stdout: JSON.stringify({ data: [{ id: candidate.uuid }] }) }),
  });
  recordHybridCandidateDirectRead({
    stateDir: f.stateDir, taskId: f.task.id, cwd: f.root, receiptId, uuid: candidate.uuid,
    tiangongCliRoot: "/unused-local-test-tool", reader: () => ({
      uuid: candidate.uuid, state_code: 100, base_name_en: "Baler subassembly", base_name_zh: "打捆机组件",
      response_sha256: `sha256:${"a".repeat(64)}`,
    }),
  });
  const decisionsPath = path.join(f.stateDir, "candidate-decisions.json");
  writeFileSync(decisionsPath, JSON.stringify([{ uuid: candidate.uuid, ...candidate.expected, general_comment_review: "Factory gate unfinished subassemblies only." }]));
  finalizeHybridSearchReceipt({ stateDir: f.stateDir, taskId: f.task.id, cwd: f.root, receiptId, decisionsPath });
  f.draft.receipt_ids = [receiptId];
  writeFileSync(f.draftPath, JSON.stringify(f.draft));
  return { decisionsPath: path.join(path.dirname(query.receipt.result_path), `${receiptId}.decisions.json`) };
}

function submission(f) {
  return { schema_version: 2, prepared_report: prepareAuthorReport(f.options), boundary_review_report: null, failure: null };
}

function completedAdapter(task, wire) {
  return { async readThread() {
    return { thread: { turns: [{ id: task.turn_id, status: "completed", items: [{ type: "agentMessage", text: JSON.stringify(wire) }] }] } };
  } };
}

function makeMeasurementExplicit(directory) {
  for (const language of ["en-US", "zh-CN"]) {
    const zh = language === "zh-CN";
    const definition = zh
      ? "M = 同一配置的一台完整打捆机的验收净质量，单位 kg；采用 cp_reference_mass 采集。"
      : "M = accepted net mass of one complete baler of the same configuration in kg; collect using cp_reference_mass.";
    const method = zh
      ? "使用经校准的秤称量已验收的完整打捆机，排除运输包装；核对同一配置和验收记录。"
      : "Weigh the accepted complete baler on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record.";
    const file = path.join(directory, `pcr.${language}.md`);
    let markdown = readFileSync(file, "utf8")
      .replace(/\| (Reference amount|参考数量) \| 1 \|/u, "| $1 | M |")
      .replace(/^- (Normalization basis|归一化基准)[:：].*$/gmu, zh ? "- 归一化基准：每台验收成品打捆机" : "- Normalization basis: per one accepted finished baler")
      .replace(/^(- (?:Amount rule|数量规则)[:：])(?: One accepted finished baler with declared net mass and configuration\.|一台具有所声明净质量和配置的验收成品打捆机。)$/gmu, zh ? "$1 M 千克" : "$1 M kg");
    markdown = markdown.split("\n").map(line => {
      if (!line.startsWith("|")) return line;
      const cells = line.split("|");
      const id = cells[1]?.trim().replaceAll("`", "");
      if (id === "reference_mass") cells[5] = ` ${definition} `;
      if (id?.startsWith("cp_")) cells[11] = zh ? " 数量 / 验收打捆机数 " : " quantity / accepted balers ";
      return cells.join("|");
    }).join("\n");
    const protocol = "| cp_reference_mass | final_assembly_acceptance | accepted reference product | acceptance weighing record | " +
      (zh ? "配置；验收净质量 M" : "configuration; accepted net mass M") + ` | ${method}` +
      " | kg | each accepted machine | declared period | reporting facility | accepted net mass per machine | calibrated scale and acceptance record |";
    const calculationHeading = zh ? "### 计算规则" : "### Calculation Rules";
    writeFileSync(file, markdown.replace(`\n\n${calculationHeading}`, `\n${protocol}\n\n${calculationHeading}`));
  }
  const english = readFileSync(path.join(directory, "pcr.en-US.md"), "utf8");
  writeFileSync(path.join(directory, "structured.yaml"), structuredProjectionYaml(parsePcrMarkdownToStructured(english), { sourceMarkdown: english }));
}

// Capture synthetic external reads locally, while the production receipt seal,
// report assembly, PCR quality checks, and both sync executions remain real.
function populateMaterialReport(f) {
  const directory = path.join(f.root, f.task.pcr_path);
  const english = flattenProcessInventory(parsePcrMarkdownToStructured(readFileSync(path.join(directory, "pcr.en-US.md"), "utf8")));
  const chinese = flattenProcessInventory(parsePcrMarkdownToStructured(readFileSync(path.join(directory, "pcr.zh-CN.md"), "utf8")));
  const localized = new Map(chinese.map(row => [row.row_id, row]));
  const matched = [...new Map(english.filter(row => row.uuid).map(row => [row.uuid, row])).values()];
  const receiptId = "inventory-uuid-fixture";
  runHybridSearchWithReceipt({
    stateDir: f.stateDir, taskId: f.task.id, cwd: f.root, query: "synthetic fixture inventory candidates", limit: 50,
    randomId: () => receiptId, toolConfig: { flow_hybrid_search_root: "/unused-local-test-tool" },
    runner: () => ({ status: 0, stdout: JSON.stringify({ data: matched.map(row => ({ id: row.uuid })) }) }),
  });
  const reads = matched.map(row => ({
    uuid: row.uuid, state_code: 100, base_name_en: row.name, base_name_zh: localized.get(row.row_id).name,
    flow_type: row.flow_type, classifications: [], property: row.property_unit.split("/")[0].trim(),
    response_sha256: `sha256:${"a".repeat(64)}`,
  }));
  for (const actual of reads) recordHybridCandidateDirectRead({
    stateDir: f.stateDir, taskId: f.task.id, cwd: f.root, receiptId, uuid: actual.uuid,
    tiangongCliRoot: "/unused-local-test-tool", reader: () => actual,
  });
  const decisionsPath = path.join(f.stateDir, "inventory-decisions.json");
  writeFileSync(decisionsPath, JSON.stringify(reads.map(actual => ({
    uuid: actual.uuid, decision: "adopted", reason_code: null, reason: "Synthetic test evidence agrees with the concrete inventory flow.",
    general_comment_review: "Locally captured synthetic test candidate; no external service is used.",
  }))));
  finalizeHybridSearchReceipt({ stateDir: f.stateDir, taskId: f.task.id, cwd: f.root, receiptId, decisionsPath });
  f.draft.receipt_ids.push(receiptId);
  f.draft.uuid_audits = reads.map(actual => ({
    uuid: actual.uuid, hybrid_search_receipt_id: receiptId, state_code: actual.state_code,
    base_name_en: actual.base_name_en, base_name_zh: actual.base_name_zh, flow_type: actual.flow_type,
    classification: "", property: actual.property, unit_group: "Synthetic fixture units", semantic_review: "Locally captured test evidence matches the exact inventory identity.",
  }));
  const manifest = parseYaml(readFileSync(path.join(directory, "manifest.yaml"), "utf8"));
  const unresolved = manifest.review_metadata.unresolved.inventory_flow_uuids.map(row => ({ ...row, hybrid_search_receipt_ids: ["receipt-44125"] }));
  f.draft.inventory = { total_rows: english.length, matched_rows: english.filter(row => row.uuid).length, unresolved_rows: unresolved.length, unresolved };
  f.draft.bilingual = { aligned: true, en_inventory_rows: english.length, zh_inventory_rows: chinese.length };
  writeFileSync(f.draftPath, JSON.stringify(f.draft));
  return reads;
}

test("prepared repair intake records the submitted commit in existing repair history", async t => {
  const f = fixture(t, { repair: true });
  sealRejectedCandidate(f);
  const wire = submission(f);
  const result = await harvestGoalAuthors({ ...f, adapter: completedAdapter(f.task, wire), reviewFn: reviewed, verifySourcesFn: async () => [] });
  assert.equal(result.valid_results.length, 1);
  assert.equal(result.state.tasks[0].repair_history.at(-1).new_commit, f.commit);
  assert.equal(result.state.tasks[0].repair_count, 1);
  assert.ok(result.state.tasks[0].repair_history.at(-1).ended_at);
});

test("sealed decisions are assembled once and normal intake preserves the original draft", async t => {
  const f = fixture(t);
  sealRejectedCandidate(f);
  const draftBefore = readFileSync(f.draftPath);
  const wire = submission(f);
  const resolved = resolveAuthorSubmission({ stateDir: f.stateDir, task: f.task, wire });
  assert.deepEqual(resolved.report.rejected_uuid_candidates, [{
    uuid: candidate.uuid, receipt_id: "receipt-44125", reason_code: candidate.expected.reason_code, reason: candidate.expected.reason,
  }]);
  assert.deepEqual(readFileSync(f.draftPath), draftBefore);
  assert.deepEqual(submission(f), wire);
  assert.equal(f.store.readEvents().filter(event => event.type === "author_report_prepared").length, 1);
  let reviews = 0;
  const first = await harvestGoalAuthors({
    ...f, adapter: completedAdapter(f.task, wire), verifySourcesFn: async () => [],
    reviewFn: () => { reviews += 1; return reviewed(); },
  });
  assert.equal(first.valid_results.length, 1);
  assert.equal(first.state.tasks[0].author_commit, f.commit);
  assert.equal(first.state.tasks[0].report_path, resolved.report_path);
  assert.equal(first.state.tasks[0].repair_count, 0);
  const sequence = first.state.last_event_sequence;
  const second = await harvestGoalAuthors({ ...f, adapter: {}, reviewFn: () => assert.fail("accepted report must not be reviewed twice") });
  assert.equal(reviews, 1);
  assert.equal(second.state.last_event_sequence, sequence);
  assert.deepEqual(second.valid_results, []);
  assert.deepEqual(readFileSync(f.draftPath), draftBefore);
});

test("resumed author review resolves its bound prepared artifact without reading the old report path", async t => {
  const f = fixture(t);
  sealRejectedCandidate(f);
  const wire = submission(f);
  f.store.append({ event_id: "saved-author-review", type: "task_replaced", payload: { task: {
    ...f.task, state: "author_review", author_submission: wire, report_path: "/must-not-read-legacy-report",
  } } });
  const result = await harvestGoalAuthors({ ...f, adapter: {}, reviewFn: reviewed, verifySourcesFn: async () => [] });
  assert.equal(result.valid_results.length, 1);
  assert.equal(result.state.tasks[0].author_commit, f.commit);
});

test("resumed author review rejects changed finalized evidence before independent acceptance", async t => {
  const f = fixture(t);
  const { decisionsPath } = sealRejectedCandidate(f);
  const wire = submission(f);
  f.store.append({ event_id: "saved-author-review", type: "task_replaced", payload: { task: {
    ...f.task, state: "author_review", author_submission: wire, report_path: "/must-not-read-legacy-report",
  } } });
  const changed = JSON.parse(readFileSync(decisionsPath));
  changed.candidate_decisions[0].reason = candidate.claimed.reason;
  writeFileSync(decisionsPath, JSON.stringify(changed));
  const result = await harvestGoalAuthors({ ...f, adapter: {}, reviewFn: () => assert.fail("tampered receipt reached acceptance") });
  assert.equal(result.valid_results.length, 0);
  assert.equal(result.failures.length, 1);
  assert.equal(result.state.tasks[0].state, "repair_requested");
  assert.equal(result.state.tasks[0].repair_count, 0);
  assert.equal(result.state.tasks[0].pending_gate_findings[0].code, "GOAL_RECEIPT_INTEGRITY_MISMATCH");
});

test("saved evidence recheck revalidates prepared content and preserves exhausted repair counts", async t => {
  const f = fixture(t);
  sealRejectedCandidate(f);
  const wire = submission(f);
  const loaded = resolvePreparedReport({ stateDir: f.stateDir, task: f.task, submission: wire.prepared_report });
  f.store.append({ event_id: "saved-evidence-failure", type: "task_replaced", payload: { task: {
    ...f.task, state: "retryable_failure", failure_code: "GOAL_UUID_DIRECT_READ_FAILED", repair_count: 2,
    author_submission: wire, report_path: loaded.report_path,
  } } });
  writeFileSync(loaded.report_path, `${readFileSync(loaded.report_path, "utf8")}\n`);
  const result = await harvestGoalAuthors({ ...f, adapter: {}, reviewFn: () => assert.fail("modified report reached acceptance") });
  assert.equal(result.valid_results.length, 0);
  assert.equal(result.state.tasks[0].repair_count, 2);
  assert.equal(result.state.tasks[0].state, "retryable_failure");
  assert.equal(result.state.tasks[0].failure_code, "GOAL_REPAIR_LIMIT_REACHED");
  assert.equal(result.state.tasks[0].pending_gate_findings[0].code, "GOAL_REPORT_BINDING_MISMATCH");
  assert.equal(result.state.tasks[0].evidence_recheck_history.at(-1).status, "retryable_failure");
});

test("default preparation inspection rejects the real 44125 measurement conflict despite passing author claims", t => {
  const f = fixture(t, { conflictingMaterial: true });
  const { reviewFn, ...actualOptions } = f.options;
  assert.equal(f.draft.structured_sync.first_run_ok, true);
  assert.equal(f.draft.validate.ok, true);
  assert.throws(() => prepareAuthorReport(actualOptions), error => {
    assert.equal(error.code, "GOAL_AUTHOR_PCR_INVALID");
    assert.match(error.details.problems.join("\n"), /MEASUREMENT_/);
    return true;
  });
  assert.equal(f.store.readEvents().filter(event => event.type === "author_report_prepared").length, 0);
  assert.equal(f.store.rebuild().tasks[0].repair_count, 0);
});

test("a changed four-file author commit cannot reuse an earlier prepared reference", t => {
  const f = fixture(t);
  sealRejectedCandidate(f);
  const wire = submission(f);
  writeFileSync(path.join(f.root, f.files[1]), "edited PCR\n");
  git(f.root, ["add", f.files[1]]);
  git(f.root, ["commit", "-qm", "change authored PCR"]);
  assert.throws(() => resolveAuthorSubmission({ stateDir: f.stateDir, task: f.task, wire }), error => error.code === "GOAL_REPORT_COMMIT_INVALID");
});

test("an explicit measurement review outcome preserves exhausted repairs without accepting the author's judgment", async t => {
  const f = fixture(t);
  f.store.append({ event_id: "existing-repair-budget", type: "task_replaced", payload: { task: {
    ...f.task, repair_count: 2, last_author_commit: f.commit,
  } } });
  const wire = {
    schema_version: 2, prepared_report: null, boundary_review_report: null,
    failure: { code: "GOAL_MEASUREMENT_REVIEW_REQUIRED", message: "The linked collection denominator cannot be determined by the finite rules." },
  };
  const before = f.files.map(file => readFileSync(path.join(f.root, file)));
  const result = await harvestGoalAuthors({ ...f, adapter: completedAdapter(f.task, wire), reviewFn: () => assert.fail("manual outcome reached acceptance") });
  const task = result.state.tasks[0];
  assert.equal(task.state, "manual_review");
  assert.equal(task.measurement_review.status, "unadjudicated");
  assert.equal(task.measurement_review.message, wire.failure.message);
  assert.equal(task.repair_count, 2);
  assert.equal(task.last_author_commit, f.commit);
  assert.equal(task.author_commit, undefined);
  assert.deepEqual(result.valid_results, []);
  assert.equal(result.snapshot, null);
  assert.deepEqual(f.files.map(file => readFileSync(path.join(f.root, file))), before);
  const repeated = await harvestGoalAuthors({ ...f, adapter: {}, reviewFn: () => assert.fail("manual outcome was retried automatically") });
  assert.equal(repeated.state.last_event_sequence, result.state.last_event_sequence);
});

test("an explicit boundary envelope preserves its repair commit and receives only the boundary audit", async t => {
  const f = fixture(t, { repair: true });
  const { receipt_ids, ...report } = f.draft;
  report.hybrid_search_receipt_ids = [];
  report.rejected_uuid_candidates = [];
  report.bilingual.aligned = false;
  report.structured_sync = { first_run_ok: false, second_run_clean: false, schema_valid: false };
  report.validate = { ok: false, exit_code: 0, known_shared_artifact_only: false, summary: "Boundary decision required before completing the PCR." };
  report.boundary_review = {
    reason_code: "semantic_boundary_unresolved", summary: "Classification alone does not establish a distinct methodology boundary.",
    questions: ["Is a separate PCR needed?"], evidence: [{ locator: "https://example.invalid/source", observation: "Multiple product routes overlap." }],
  };
  const wire = { schema_version: 2, prepared_report: null, boundary_review_report: report, failure: null };
  const result = await harvestGoalAuthors({ ...f, adapter: completedAdapter(f.task, wire), reviewFn: () => assert.fail("boundary referral reached completion review") });
  const task = result.state.tasks[0];
  assert.equal(task.state, "manual_review");
  assert.equal(task.boundary_review_audit.status, "unadjudicated");
  assert.equal(task.boundary_review_audit.head_commit, f.commit);
  assert.equal(task.last_author_commit, f.commit);
  assert.equal(task.repair_history.at(-1).new_commit, f.commit);
  assert.equal(task.repair_count, 1);
  assert.deepEqual(result.valid_results, []);
  assert.deepEqual(result.failures, []);
});

test("preparation refuses an adopted UUID whose finalized receipt rejected it", t => {
  const f = fixture(t);
  sealRejectedCandidate(f);
  f.draft.uuid_audits = [{
    uuid: candidate.uuid, hybrid_search_receipt_id: "receipt-44125", state_code: 100,
    base_name_en: "Baler subassembly", base_name_zh: "打捆机组件", flow_type: "product",
    classification: "44125", property: "Mass", unit_group: "Units of mass", semantic_review: "Author now claims this candidate is the final product.",
  }];
  writeFileSync(f.draftPath, JSON.stringify(f.draft));
  const before = readFileSync(f.draftPath);
  assert.throws(() => prepareAuthorReport(f.options), error => error.code === "GOAL_REPORT_DECISION_CONFLICT");
  assert.deepEqual(readFileSync(f.draftPath), before);
  assert.equal(f.store.readEvents().filter(event => event.type === "author_report_prepared").length, 0);
});

test("a material PCR passes default preparation, both actual syncs, and independent default acceptance", async t => {
  const runtimePcr = fileURLToPath(new URL("../../library/pcrs/metal-products-machinery-and-equipment/special-purpose-machinery/straw-or-fodder-balers-including-pickup-balers/", import.meta.url));
  const runtimeFiles = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map(name => path.join(runtimePcr, name));
  const runtimeBefore = runtimeFiles.map(file => existsSync(file) ? readFileSync(file) : null);
  t.after(() => assert.deepEqual(runtimeFiles.map(file => existsSync(file) ? readFileSync(file) : null), runtimeBefore, "real sync must never touch the runtime checkout's PCR"));
  const f = fixture(t, { conflictingMaterial: true, materialTransform: makeMeasurementExplicit });
  sealRejectedCandidate(f);
  const reads = populateMaterialReport(f);
  const { reviewFn, ...options } = f.options;
  const prepared = prepareAuthorReport({ ...options, auditUuidsFn: () => reads });
  const loaded = resolvePreparedReport({ stateDir: f.stateDir, task: f.task, submission: prepared });
  assert.equal(loaded.manifest.checks.measurement.status, "pass");
  assert.equal(loaded.manifest.checks.measurement.coverage.complete, true);
  assert.equal(loaded.manifest.checks.sync.first_run_clean, true);
  assert.equal(loaded.manifest.checks.sync.second_run_clean, true);
  assert.equal(loaded.report.inventory.total_rows, 27);
  assert.equal(loaded.report.rejected_uuid_candidates[0].reason, candidate.expected.reason);
  assert.equal(git(f.root, ["status", "--porcelain=v1", "--untracked-files=all"]), "");
  const wire = { schema_version: 2, prepared_report: prepared, boundary_review_report: null, failure: null };
  const result = await harvestGoalAuthors({
    ...f, config: { ...f.config, tools: { tiangong_cli_root: "/unused-local-test-tool" } },
    adapter: completedAdapter(f.task, wire), auditUuidsFn: () => reads, verifySourcesFn: async () => [],
  });
  assert.equal(result.valid_results.length, 1);
  assert.equal(result.state.tasks[0].author_commit, f.commit);
  assert.equal(result.state.tasks[0].validation_result.builder.measurement.status, "pass");
  assert.equal(result.state.tasks[0].validation_result.sync.first_run_clean, true);
  assert.equal(result.state.tasks[0].validation_result.sync.second_run_clean, true);
});

for (const stale of [false, true]) test(`default preparation routes unsupported measurement to review only when no hard error exists (stale=${stale})`, t => {
  const f = fixture(t, { conflictingMaterial: true, materialTransform(directory) {
    makeMeasurementExplicit(directory);
    for (const language of ["en-US", "zh-CN"]) {
      const file = path.join(directory, `pcr.${language}.md`);
      writeFileSync(file, readFileSync(file, "utf8").replace(/^- (Normalization basis|归一化基准)[:：].*$/mu,
        language === "zh-CN" ? "- 归一化基准：按产品特定的方法确定" : "- Normalization basis: determined by a product-specific methodology"));
    }
    const englishFile = path.join(directory, "pcr.en-US.md");
    const english = readFileSync(englishFile, "utf8");
    writeFileSync(path.join(directory, "structured.yaml"), structuredProjectionYaml(parsePcrMarkdownToStructured(english), { sourceMarkdown: english }));
    if (stale) writeFileSync(englishFile, `${english}\n<!-- Canonical source changed after sync. -->\n`);
  } });
  sealRejectedCandidate(f);
  const reads = populateMaterialReport(f);
  const inspection = inspectPcrDirectory({ root: f.root, pcrDir: path.join(f.root, f.task.pcr_path), checkManifestLifecycle: true, checkBilingualRuleAlignment: true, measurementPolicy: "enforce" });
  assert.equal(inspection.measurement.status, "manual_review");
  assert.equal(inspection.problems.length > inspection.measurement.findings.length, stale);
  const { reviewFn, ...options } = f.options;
  assert.throws(() => prepareAuthorReport({ ...options, auditUuidsFn: () => reads }), error => {
    assert.equal(error.code, stale ? "GOAL_AUTHOR_PCR_INVALID" : "GOAL_MEASUREMENT_REVIEW_REQUIRED");
    assert.equal(error.details.measurement.status, "manual_review");
    return true;
  });
  assert.equal(f.store.readEvents().filter(event => event.type === "author_report_prepared").length, 0);
  assert.equal(f.store.rebuild().tasks[0].repair_count, 0);
});
