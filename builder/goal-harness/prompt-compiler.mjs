import { readAuthorSubmissionSchema } from "./author-submission.mjs";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const reportSchemaPath = fileURLToPath(new URL("../schemas/goal-author-report.schema.json", import.meta.url));

export function readAuthorReportSchema() {
  // Runtime v1 reports may omit the additive field; Codex requires every wire property.
  const schema = JSON.parse(readFileSync(reportSchemaPath, "utf8"));
  schema.required = [...new Set([...schema.required, "boundary_review"])];
  return schema;
}

export function compileAuthorPrompt({ task, policyPromptPath, verifiedCommonUuids = [], verifiedSourceReceipts = [], tools = {}, materials = null }) {
  const policyBytes = readFileSync(policyPromptPath);
  const policySha256 = `sha256:${createHash("sha256").update(policyBytes).digest("hex")}`;
  const allowedFiles = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"]
    .map((name) => `${task.pcr_path}/${name}`);
  const goalConfigPath = tools.config_path ?? "<ABSOLUTE_GOAL_CONFIG_PATH>";
  const tiangongCliRoot = tools.tiangong_cli_root ?? "<ABSOLUTE_TIANGONG_CLI_ROOT>";
  const hybridSearchRoot = tools.flow_hybrid_search_root ?? "<ABSOLUTE_FLOW_HYBRID_SEARCH_ROOT>";
  const credentialsEnvFile = tools.credentials_env_file ?? `${tiangongCliRoot}/.env`;
  const receiptCli = tools.receipt_cli ?? fileURLToPath(new URL("../cli/goal-uuid-search.mjs", import.meta.url));
  const receiptBackedCommonUuids = (task.authoring_contract_version === 2 ? [] : verifiedCommonUuids).filter((entry) => entry?.hybrid_search_receipt_id);
  let prompt = `You are one independent TianGong PCR author. Work only on the single PCR below in the Git worktree already assigned to this visible Codex task.

Assignment
- CPC: ${task.cpc_code}
- Product name (en-US): ${task.product_name_en}
- Product name (zh-CN): ${task.product_name_zh ?? "not yet available; author and verify a professional Chinese translation"}
- PCR target path: ${task.pcr_path}
- Queue action: ${task.queue_action}
- Goal policy fingerprint: ${policySha256}
- Classification precheck: ${formatItems(task.precheck_results)}
- Previous structured gate findings: ${formatJson(task.pending_gate_findings ?? [])}
- Previous validation details: ${task.validation_result ? JSON.stringify(task.validation_result) : "none supplied"}
- Official source seeds: ${formatJson(task.official_source_seeds ?? [])}
- Receipt-backed reusable UUID audits: ${formatJson(receiptBackedCommonUuids)}
- Hash-verified original-source cache receipts relevant to these seeds: ${formatJson(verifiedSourceReceipts)}

Exact write boundary
You may modify and commit exactly these four repository files:
${allowedFiles.map((entry) => `- ${entry}`).join("\n")}

Do not modify mappings, aliases, indexes, catalog, viewer artifacts, ADRs, Builder code, schemas, vocabularies, tests, package files, dependencies, or any other PCR. Do not copy methodology, inventory, numbers, ranges, or sources from another PCR. Other PCRs may be inspected only for identity/path existence.
The shared materials store is a production-side exception: query/read/register source files and fragment evidence there; never commit them or copy runtime paths/logs into canonical PCR files.

${materialsInstructions(materials)}

Required repository contracts
Read AGENTS.md, builder/AGENTS.md, builder/docs/index.md, the create/translate workflows, evidence/source, Markdown, manifest, structured-projection, UUID-reference contracts, and the reference-flow, inventory-flow, process-map, measurement-unit, range, and source-evidence method notes named by the Goal policy. Read only vocabularies actually used by this PCR.

Method and evidence
- Establish a semantic product boundary; a CPC leaf alone is not permission to duplicate canonical PCR identity. If an existing material PCR covers the boundary, stop editing and return an explicit boundary_review request using overlapping_pcr_identity for manual adjudication.
- Verify final evidence against official pages, PDFs, DOI landing/full text, standards, regulations, institutional reports, or peer-reviewed full text. Search/OpenAlex titles, abstracts, snippets, and metadata are discovery only.
- Never invent a DOI, URL, standard, regulation, author, year, number, UUID, or source id. Do not add "codex" to a source id unless the source is actually Codex Alimentarius.
- Every inventory row is one concrete atomic physical, chemical, waste, or energy exchange. Reject umbrella choices such as energy carriers, utilities, fuels, electricity/steam/fuel, packaging materials, cleaning chemicals, wastewater and residues, emissions to air, other materials/wastes, or a future route choice. Use inclusion_condition for conditional routes.
- Avoid species × tissue × state × route, variant × packaging × energy, or other Cartesian expansions. Above 120 rows provide an auditable complexity justification; above 180 redesign/compress by default; above 250 is unacceptable without separately approved methodology necessity.

UUID audit
Tool roots (exact):
- TianGong CLI: ${tiangongCliRoot}
- Flow hybrid search: ${hybridSearchRoot}
- Goal receipt CLI: ${receiptCli}

Never source, print, inspect, copy, or include .env content. The safe launcher loads it only inside Node with --env-file-if-exists. Run every candidate-discovery query from this assigned worktree through the receipt CLI:
node --env-file-if-exists=${credentialsEnvFile} ${receiptCli} query --config ${goalConfigPath} --task ${task.id} --query "<ONE CONCRETE FLOW QUERY>" --flow-type <product|waste|elementary> --limit 5

Start with five ranked candidates to keep direct audit bounded; increase the limit only when those candidates do not establish a defensible exact/no-exact conclusion. The query command performs authenticated hybrid search and returns a receipt id plus candidate UUIDs. Capture the public state_code=100 direct read for every candidate in that receipt using:
node --env-file-if-exists=${credentialsEnvFile} ${receiptCli} direct-read --config ${goalConfigPath} --task ${task.id} --receipt <RECEIPT_ID> --uuid <CANDIDATE_UUID>

After the direct read, put one adopted/rejected decision for every candidate in a top-level JSON array outside the repository (for example under /tmp). Each array item has uuid, decision, reason_code (null when adopted), reason, and general_comment_review. Then finalize the immutable search receipt:
node --env-file-if-exists=${credentialsEnvFile} ${receiptCli} finalize --config ${goalConfigPath} --task ${task.id} --receipt <RECEIPT_ID> --decisions <ABSOLUTE_DECISIONS_JSON>

Each decision must include a non-empty general_comment_review. Each finalized receipt binds the exact query, ranked candidate UUIDs/match metadata, tool version, non-sensitive endpoint id, raw-result SHA-256, every state_code=100 direct-read identity/property/unit-group/response hash, and candidate rejection reasons. Include every receipt id in hybrid_search_receipt_ids; link each adopted UUID with hybrid_search_receipt_id, each rejected candidate with receipt_id plus the same reason_code/reason, and each no_exact_candidate/manual_review_required unresolved row with hybrid_search_receipt_ids. A hybrid_search: true boolean is never evidence and is rejected. tiangong_cli_unavailable is an infrastructure-level retryable failure: stop UUID authoring and report the tool failure; never use it to bulk-mark unresolved rows.

Use hybrid search for candidate discovery, then directly read every adopted candidate with public state_code=100. Audit English and Chinese baseName, flow type, classification, property, unit group, product state, geography, technology, and generalComment. Never promote a proxy or unverified UUID to final. If no exact reference product or inventory flow exists, keep UUID empty and record the row as unresolved with an allowed reason code; this does not block the PCR. For every PCR, inventory total must equal UUID-matched rows plus explicitly unresolved rows. Use the directly read TianGong Chinese baseName for UUID-bearing Chinese rows. If the direct read has no Chinese baseName, set report uuid_audits[].base_name_zh to the exact empty string, retain the canonical English baseName in the Chinese Selected flow, and state in semantic_review that the TianGong Chinese baseName is unavailable; never invent an official Chinese name.
- Record every UUID-empty inventory row, including an unresolved reference product row, under manifest review_metadata.unresolved.inventory_flow_uuids as { row_id, reason_code, explanation }. The same row ids and reasons must appear in the author report inventory.unresolved array. Do not substitute a differently named manifest field; the Harness reads this exact path.

Range override (authoritative over the Goal policy file)
- An externally inferred range needs at least two mutually independent sources, both verified in original text.
- The sources must have compatible system boundary, functional unit, and product state; explain geographic and technological differences. Give every final source an independence_key identifying its underlying publication/standard/report so one publication's scenarios cannot be double-counted.
- Do not mechanically use the minimum and maximum; scenarios from the same paper are not independent sources.
- A single value, lower = upper, an abstract/snippet, or an invented range is forbidden.
- If evidence is insufficient, keep the foreground collection requirement, omit the external range, and record an unresolved range-evidence need in the manifest. This does not block the PCR.
- Record each such need under manifest review_metadata.unresolved.range_evidence_needs; do not invent a numeric range merely to remove a lint warning.
- Regulatory or standard limits are conformance/specification rules, not empirical ranges. A reasoned_estimate is provisional, source-id-free, and used only when it has real modeling or QA value.

Boundary-review request
For normal PCR results, set boundary_review to null and follow every authoring and quality requirement below. If the semantic product boundary remains unresolved or overlaps an existing material PCR, stop authoring and set boundary_review to an object with reason_code semantic_boundary_unresolved or overlapping_pcr_identity, a substantive summary of at least 20 characters, nonempty questions, and nonempty evidence entries with locator and observation. This requests unadjudicated manual review; it does not establish a completed PCR, map_existing decision, or accepted classification mapping.
- Preserve the assigned CPC, PCR path, queue_action, and files containing the exact four authorized paths. Set commit_sha to the actual current HEAD even when no new commit was made. Leave partial authorized work intact for review.
- Make no final inventory claims: set inventory total_rows, matched_rows, and unresolved_rows to 0 and unresolved to an empty array. Set uuid_audits and ranges to empty arrays and reference_product_uuid_confirmed to false; do not claim adopted final UUIDs or quantitative ranges.
- Make no alignment, sync or validation success claims: set bilingual.aligned and every structured_sync flag to false, and bilingual inventory row counts to 0. Set validate.ok to false, exit_code to -1, known_shared_artifact_only to false, and summary to "not run: boundary review requested" for unperformed validation.
- Searches already performed may appear in boundary_review.evidence as unadjudicated claims, not as final UUID adoption or verified methodology. Keep all other report fields accurate and use empty arrays where nothing was performed. Do not run sync, validate, or create a PCR completion commit merely to submit this request.
- Missing UUIDs, insufficient range evidence, and infrastructure outages are not boundary-review reasons. Report infrastructure failures accurately through the existing failure path.

Authoring sequence and commit (normal PCR results with boundary_review null)
1. Author manifest.yaml, canonical pcr.en-US.md, and aligned pcr.zh-CN.md.
2. Generate structured.yaml only with: npm run pcr:sync-structured -- --pcr ${task.pcr_path}
3. Run the same sync command again and require no diff.
4. Run npm run validate. If it fails only because shared mapping/catalog artifacts are intentionally central, report the exact error and do not edit shared files.
5. Run git diff --name-only and git diff --check. Commit only the four authorized files.
6. Return only the JSON object required by the supplied output schema. The commit_sha must be the committed HEAD, sources must say what original text was verified and what it supports, UUID audits/rejections must be complete, and unresolved rows/ranges must be explicit.

If product identity is ambiguous, a required official boundary source cannot be verified, or the visible worktree is unsafe, fail closed in the report. Missing exact UUIDs and insufficient range evidence are unresolved conditions, not blockers.
`;
  if (task.authoring_contract_version === 2) {
    prompt = prompt.replace(/Authoring sequence and commit \(normal PCR results with boundary_review null\)[\s\S]*?If product identity is ambiguous/u, `${preparedAuthorSequence(task, tools)}\n\nIf product identity is ambiguous`);
    prompt = prompt.replace('Include every receipt id in hybrid_search_receipt_ids; link each adopted UUID with hybrid_search_receipt_id, each rejected candidate with receipt_id plus the same reason_code/reason, and each no_exact_candidate/manual_review_required unresolved row with hybrid_search_receipt_ids.', 'In the draft, link each adopted UUID with hybrid_search_receipt_id and each no_exact_candidate/manual_review_required row with hybrid_search_receipt_ids. List any additional used receipt ids in receipt_ids. Omit rejected_uuid_candidates and the top-level hybrid_search_receipt_ids; preparation derives them from finalized evidence. Do not retype rejection reasons.');
    prompt += '\nContract 2 output: return exactly one non-null prepared_report, boundary_review_report or failure with schema_version 2; all three keys are required. Normal success is the preparation command JSON verbatim. For an explicit product-boundary referral place the complete legacy-format referral report described above in boundary_review_report. For unresolved measurement relationships return failure {code:"GOAL_MEASUREMENT_REVIEW_REQUIRED",message:"describe the relationship and affected rows"}; for infrastructure outage use GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE; other uncorrectable preflight problems use GOAL_AUTHOR_PREFLIGHT_FAILED. Failure/referral outputs are never completed PCR results. Legacy UUID caches are candidates only: capture and finalize new task-bound receipts before adoption.\n';
  }
  return { prompt, policy_sha256: policySha256, allowed_files: allowedFiles, output_schema: task.authoring_contract_version === 2 ? readAuthorSubmissionSchema() : readAuthorReportSchema() };
}

function formatItems(value = []) {
  return value.length > 0 ? value.join("; ") : "none recorded";
}

function formatJson(value) {
  return value.length > 0 ? JSON.stringify(value) : "none supplied";
}

function materialsInstructions(materials) {
  const cli = fileURLToPath(new URL("../cli/materials.mjs", import.meta.url));
  const quote = value => `'${String(value).replaceAll("'", "'\\''")}'`;
  const command = `node ${quote(cli)}`;
  const root = materials ? ` --root ${quote(materials.root)}` : "";
  return `Shared source preparation — run before every external evidence need
Read builder/docs/tools/shared-materials.md. ${materials ? "The Harness has already executed this bounded product query:" : "Begin with a local query; the CLI resolves the shared Git common directory."}
${materials ? JSON.stringify({ root: materials.root, total_candidates: materials.total_candidates, next_offset: materials.next_offset, issues: materials.issues, candidates: materials.candidates.map(c => ({ id: c.id, title: c.source?.title.slice(0, 160), version: c.source?.version.slice(0, 100), state: c.state, reuse_original: c.reuse_original, reuse_extraction: c.reuse_extraction, gaps: c.gaps, fragments: c.fragments?.slice(0, 3).map(f => f.id) })) }) : ""}
1. Refine the product query by actual process and specific need (ranges, functional unit, boundary, allocation or collection requirements):
   ${command} query${root} --product '<product>' --process '<process>' --need '<specific question>' --limit 5
   Also query a known DOI/URL before fetching it. Pass --request /tmp/material-use.json for route, state, basis, unit, required_version and extractor requirements.
2. Read only relevant candidates: ${command} read${root} --id <record-id> --fragment <fragment-id> --request /tmp/material-use.json
   For an unverified extraction use --start-line N --end-line N (at most 100 lines/8192 bytes), retain original page/table/cell locations and footnotes, and verify against the original. Metadata is discovery only; it still needs content acquisition. A verified fragment does not verify an entire publication.
3. Check reuse_original/reuse_extraction and gaps. Reuse available valid original bytes without refetching the same version; reuse valid extraction without rerunning its tool. Never adopt a number on a local hit alone: check product, route, process, state, units, normalization, temporal relevance and limitations. Keep facts, case observations, conversions and inference distinct. A prior PCR conclusion or review approval is not evidence for this PCR.
4. Use existing external discovery/acquisition/extraction tools for uncovered, stale, mismatched or conflicting questions. Continue required independent-source and counterevidence checks; one case cannot establish an industry range. Do not repeat an already covered query merely because the author task changed. Keep unresolved gaps explicit.
5. Register each newly acquired original promptly (so another task can avoid downloading it), then register extraction and individually verified fragments:
   ${command} register${root} --input /tmp/material-registration.json
   Use the documented JSON fields, actual acquisition/verification times and extractor versions. The tool computes content hashes; do not invent provenance. Register metadata-only seeds as such. Do not store secrets or authenticated URLs. Only source citations and supported rules belong in PCR content; preparation files stay in the shared store or /tmp.
Local candidate hits are not adopted-evidence counts. Program checks cover integrity/version compatibility; you remain responsible for semantic applicability and evidence sufficiency. No new review stage or publication gate is added.
`;
}

function preparedAuthorSequence(task, tools) {
  const prepareCli = fileURLToPath(new URL("../cli/goal-prepare-report.mjs", import.meta.url));
  return `Authoring sequence and commit (contract 2 normal PCR results)
1. Determine the reference quantity, collection basis and conversion. Read builder/docs/methods/measurement-unit-rules.md for the supported finite bilingual forms. M is measured later; specify its method, net/configuration scope and rule/protocol links. Never invent a machine weight. Unknown relationships require review.
2. Author the canonical English PCR and aligned Chinese, then run npm run pcr:sync-structured -- --pcr ${task.pcr_path} twice; the second run must produce no diff.
3. Run npm run pcr:check -- --pcr ${task.pcr_path} --workspace current --format json. Fix every error in this turn; manual_review is not a pass. Repeat sync/check after edits.
4. Run npm run validate and keep the exact result. A target check does not substitute for full validation; shared artifact errors must be reported exactly and never repaired outside the allowlist.
5. Run git diff --name-only and git diff --check. Commit exactly the four authorized PCR files.
6. Write your draft outside the worktree according to builder/schemas/goal-author-draft.schema.json. Keep original author judgment and claims; omit program-derived rejected_uuid_candidates and top-level hybrid_search_receipt_ids. Adopted UUID links and unresolved row receipt links remain explicit; receipt_ids lists any additional task receipts.
7. Run node ${prepareCli} --config ${tools.config_path ?? '<ABSOLUTE_GOAL_CONFIG_PATH>'} --task ${task.id} --draft <ABSOLUTE_DRAFT_JSON> --format json. This repeats actual PCR/sync checks and audits UUID evidence. If it fails, repair the draft or PCR in this turn; resync and recommit content changes, then prepare again. It does not consume or reset Harness repair attempts.
8. Return the successful preparation JSON verbatim. The Harness reads the generated file by its hash-bound reference and independently rechecks it; never transcribe the whole generated report.`;
}
