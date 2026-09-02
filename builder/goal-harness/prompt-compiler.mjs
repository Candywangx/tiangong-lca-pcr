import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const reportSchemaPath = fileURLToPath(new URL("../schemas/goal-author-report.schema.json", import.meta.url));

export function readAuthorReportSchema() {
  return JSON.parse(readFileSync(reportSchemaPath, "utf8"));
}

export function compileAuthorPrompt({ task, policyPromptPath, verifiedCommonUuids = [], tools = {} }) {
  const policyBytes = readFileSync(policyPromptPath);
  const policySha256 = `sha256:${createHash("sha256").update(policyBytes).digest("hex")}`;
  const allowedFiles = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"]
    .map((name) => `${task.pcr_path}/${name}`);
  const prompt = `You are one independent TianGong PCR author. Work only on the single PCR below in the Git worktree already assigned to this visible Codex task.

Assignment
- CPC: ${task.cpc_code}
- Product name (en-US): ${task.product_name_en}
- Product name (zh-CN): ${task.product_name_zh ?? "not yet available; author and verify a professional Chinese translation"}
- PCR target path: ${task.pcr_path}
- Queue action: ${task.queue_action}
- Goal policy fingerprint: ${policySha256}
- Classification precheck: ${formatItems(task.precheck_results)}
- Official source seeds: ${formatJson(task.official_source_seeds ?? [])}
- Directly verified reusable UUID audits: ${formatJson(verifiedCommonUuids)}

Exact write boundary
You may modify and commit exactly these four files, and nothing else:
${allowedFiles.map((entry) => `- ${entry}`).join("\n")}

Do not modify mappings, aliases, indexes, catalog, viewer artifacts, ADRs, Builder code, schemas, vocabularies, tests, package files, dependencies, or any other PCR. Do not copy methodology, inventory, numbers, ranges, or sources from another PCR. Other PCRs may be inspected only for identity/path existence.

Required repository contracts
Read AGENTS.md, builder/AGENTS.md, builder/docs/index.md, the create/translate workflows, evidence/source, Markdown, manifest, structured-projection, UUID-reference contracts, and the reference-flow, inventory-flow, process-map, measurement-unit, range, and source-evidence method notes named by the Goal policy. Read only vocabularies actually used by this PCR.

Method and evidence
- Establish a semantic product boundary; a CPC leaf alone is not permission to duplicate canonical PCR identity. If an existing material PCR covers the boundary, stop editing and return a machine report describing map_existing or manual review.
- Verify final evidence against official pages, PDFs, DOI landing/full text, standards, regulations, institutional reports, or peer-reviewed full text. Search/OpenAlex titles, abstracts, snippets, and metadata are discovery only.
- Never invent a DOI, URL, standard, regulation, author, year, number, UUID, or source id. Do not add "codex" to a source id unless the source is actually Codex Alimentarius.
- Every inventory row is one concrete atomic physical, chemical, waste, or energy exchange. Reject umbrella choices such as energy carriers, utilities, fuels, electricity/steam/fuel, packaging materials, cleaning chemicals, wastewater and residues, emissions to air, other materials/wastes, or a future route choice. Use inclusion_condition for conditional routes.
- Avoid species × tissue × state × route, variant × packaging × energy, or other Cartesian expansions. Above 120 rows provide an auditable complexity justification; above 180 redesign/compress by default; above 250 is unacceptable without separately approved methodology necessity.

UUID audit
Use hybrid search for candidate discovery, then directly read every adopted candidate with public state_code=100. Audit English and Chinese baseName, flow type, classification, property, unit group, product state, geography, technology, and generalComment. Never promote a proxy or unverified UUID to final. If no exact reference product or inventory flow exists, keep UUID empty and record the row as unresolved with an allowed reason code; this does not block the PCR. For every PCR, inventory total must equal UUID-matched rows plus explicitly unresolved rows. Use the directly read TianGong Chinese baseName for UUID-bearing Chinese rows.

Range override (authoritative over the Goal policy file)
- An externally inferred range needs at least two mutually independent sources, both verified in original text.
- The sources must have compatible system boundary, functional unit, and product state; explain geographic and technological differences. Give every final source an independence_key identifying its underlying publication/standard/report so one publication's scenarios cannot be double-counted.
- Do not mechanically use the minimum and maximum; scenarios from the same paper are not independent sources.
- A single value, lower = upper, an abstract/snippet, or an invented range is forbidden.
- If evidence is insufficient, keep the foreground collection requirement, omit the external range, and record an unresolved range-evidence need in the manifest. This does not block the PCR.
- Regulatory or standard limits are conformance/specification rules, not empirical ranges. A reasoned_estimate is provisional, source-id-free, and used only when it has real modeling or QA value.

Authoring sequence and commit
1. Author manifest.yaml, canonical pcr.en-US.md, and aligned pcr.zh-CN.md.
2. Generate structured.yaml only with: npm run pcr:sync-structured -- --pcr ${task.pcr_path}
3. Run the same sync command again and require no diff.
4. Run npm run validate. If it fails only because shared mapping/catalog artifacts are intentionally central, report the exact error and do not edit shared files.
5. Run git diff --name-only and git diff --check. Commit only the four authorized files.
6. Return only the JSON object required by the supplied output schema. The commit_sha must be the committed HEAD, sources must say what original text was verified and what it supports, UUID audits/rejections must be complete, and unresolved rows/ranges must be explicit.

If product identity is ambiguous, a required official boundary source cannot be verified, or the visible worktree is unsafe, fail closed in the report. Missing exact UUIDs and insufficient range evidence are unresolved conditions, not blockers.
`;
  return { prompt, policy_sha256: policySha256, allowed_files: allowedFiles, output_schema: readAuthorReportSchema() };
}

function formatItems(value = []) {
  return value.length > 0 ? value.join("; ") : "none recorded";
}

function formatJson(value) {
  return value.length > 0 ? JSON.stringify(value) : "none supplied";
}
