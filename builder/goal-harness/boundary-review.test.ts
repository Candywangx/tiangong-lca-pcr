import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { syncBuiltinESMExports } from "node:module";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { auditBoundaryReview } from "./boundary-review.ts";
import type { BoundaryReviewOptions } from "./boundary-review.ts";
import type { TestContext } from "node:test";
import { record, array, field, errorCode } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";
function objectAt(value: unknown, ...keys: string[]) {let current=value;for(const key of keys)current=field(current,key);return record(current);}
function arrayAt(value: unknown,key:string) {return array(field(value,key));}
const audit = (input: BoundaryReviewOptions) => {
  assert.equal(typeof auditBoundaryReview,"function","boundary safety audit must exist"); return auditBoundaryReview(input);
};
const pcrPath = "library/pcrs/metals/basic/example";
const files = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map((file) => `${pcrPath}/${file}`);
function file(index:number):string {const value=files[index];assert.ok(value);return value;}
const git = (cwd: string, args: string[]) => execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
const sha = (bytes: Buffer) => createHash("sha256").update(bytes).digest("hex");

function fixture(t: TestContext) {
  const root = mkdtempSync(path.join(os.tmpdir(), "boundary-audit-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const main = path.join(root, "main");
  const worktreePath = path.join(root, "author");
  mkdirSync(main);
  git(main, ["init", "-q"]);
  git(main, ["config", "user.email", "fixture@example.invalid"]);
  git(main, ["config", "user.name", "Fixture"]);
  writeFileSync(path.join(main, "sentinel"), "main untouched\n");
  git(main, ["add", "sentinel"]);
  git(main, ["commit", "-qm", "baseline"]);
  const baselineCommit = git(main, ["rev-parse", "HEAD"]);
  git(main, ["worktree", "add", "--detach", worktreePath, baselineCommit]);
  const task = { id: "task-one", goal_id: "goal-one", thread_id: "thread-one", turn_id: "turn-one", cpc_code: "41111", pcr_path: pcrPath, allowed_files: [...files], worktree_path: worktreePath };
  const report: UnknownRecord = {
    schema_version: 1, cpc_code: "41111", product_name_en: "Example", product_name_zh: "示例", pcr_path: pcrPath,
    queue_action: "create_new", files: [...files], sources: [], hybrid_search_receipt_ids: [], uuid_audits: [], rejected_uuid_candidates: [],
    inventory: { total_rows: 0, matched_rows: 0, unresolved_rows: 0, unresolved: [] },
    reference_product_uuid_confirmed: false, ranges: [], bilingual: { aligned: false, en_inventory_rows: 0, zh_inventory_rows: 0 },
    structured_sync: { first_run_ok: false, second_run_clean: false, schema_valid: false },
    validate: { ok: false, exit_code: 0, known_shared_artifact_only: false, summary: "Not run: boundary review requested." },
    complexity_justification: null, cartesian_expansion_review: null, methodology_necessity_approved: null,
    commit_sha: baselineCommit, unresolved_issues: [], boundary_review: {
      reason_code: "semantic_boundary_unresolved", summary: "The available classification does not establish a distinct methodology boundary.",
      questions: ["Does this category need a separate canonical PCR?"],
      evidence: [{ locator: "https://example.invalid/source", observation: "Author believes multiple product routes overlap here." }],
    },
  };
  const input = { task, report, baselineCommit, worktreePath };
  const write = (file: string, text: string | Buffer) => { mkdirSync(path.dirname(path.join(worktreePath, file)), { recursive: true }); writeFileSync(path.join(worktreePath, file), text); };
  const commit = () => { git(worktreePath, ["add", "-A"]); git(worktreePath, ["commit", "-qm", "partial author work"]); report.commit_sha = git(worktreePath, ["rev-parse", "HEAD"]); };
  return { ...input, input, root, main, write, commit };
}

test("initial HEAD and absent files yield unadjudicated evidence without writes", (t) => {
  const f = fixture(t);
  const before = JSON.stringify(f.input);
  const result = audit(f.input);
  assert.equal(result.status, "unadjudicated");
  assert.equal(result.head_commit, f.baselineCommit);
  assert.equal(result.baseline_commit, f.baselineCommit);
  assert.equal(result.task_id, f.task.id);
  assert.equal(result.thread_id, f.task.thread_id);
  assert.equal(result.turn_id, f.task.turn_id);
  assert.equal(result.worktree_path, f.worktreePath);
  assert.equal(result.pcr_path, pcrPath);
  assert.deepEqual(result.files_sha256, Object.fromEntries(files.map((file) => [file, null])));
  assert.match(result.report_sha256, /^[0-9a-f]{64}$/u);
  assert.deepEqual(result.request, f.report.boundary_review);
  assert.equal(result.evidence_status, "unverified_author_claims");
  assert.deepEqual(result.path_audit.committed_paths, []);
  assert.deepEqual(result.path_audit.dirty_paths, []);
  assert.equal(JSON.stringify(f.input), before);
  assert.equal(git(f.main, ["status", "--porcelain"]), "");
  assert.equal(git(f.worktreePath, ["status", "--porcelain"]), "");
});

test("partial committed, staged and untracked authorized bytes are preserved and hashed", (t) => {
  const f = fixture(t);
  f.write(file(0), "committed partial\n"); f.commit();
  f.write(file(0), "dirty partial\n");
  f.write(file(1), "staged partial\n"); git(f.worktreePath, ["add", file(1)]);
  f.write(file(2), "untracked partial\n");
  const status = git(f.worktreePath, ["status", "--porcelain=v1", "-z"]);
  const result = audit(f.input);
  assert.deepEqual(result.path_audit.committed_paths, [file(0)]);
  assert.deepEqual(result.path_audit.dirty_paths, files.slice(0, 3).sort());
  for (const file of files.slice(0, 3)) assert.equal(result.files_sha256[file], sha(readFileSync(path.join(f.worktreePath, file))));
  assert.equal(result.files_sha256[file(3)], null);
  assert.equal(git(f.worktreePath, ["status", "--porcelain=v1", "-z"]), status);
  assert.equal(git(f.main, ["rev-parse", "HEAD"]), f.baselineCommit);
  assert.equal(readFileSync(path.join(f.main, "sentinel"), "utf8"), "main untouched\n");
});

for (const [name, mutate] of new Map<string,(f:ReturnType<typeof fixture>)=>void>([
  ["wrong CPC", (f) => { f.report.cpc_code = "99999"; }],
  ["wrong PCR path", (f) => { f.report.pcr_path = String(f.report.pcr_path)+"-other"; }],
  ["wrong report file list", (f) => { arrayAt(f.report,"files")[0] = "sentinel"; }],
  ["duplicate report files", (f) => { arrayAt(f.report,"files")[0] = arrayAt(f.report,"files")[1]; }],
  ["wrong task allowlist", (f) => { f.task.allowed_files[0] = "sentinel"; }],
  ["wrong worktree", (f) => { f.task.worktree_path = f.main; }],
  ["wrong HEAD", (f) => { f.report.commit_sha = "a".repeat(40); }],
  ["traversal", (f) => { f.task.pcr_path = "library/pcrs/a/../example"; f.report.pcr_path = f.task.pcr_path; }],
  ["missing boundary request", (f) => { delete f.report.boundary_review; }],
  ["null boundary request", (f) => { f.report.boundary_review = null; }],
  ["malformed inventory", (f) => { f.report.inventory = null; }],
  ["malformed unresolved", (f) => { objectAt(f.report,"inventory").unresolved = {}; }],
  ["unknown report field", (f) => { f.report.extra = true; }],
  ["empty evidence", (f) => { objectAt(f.report,"boundary_review").evidence = []; }],
  ["blank locator", (f) => { objectAt(f.report,"boundary_review","evidence","0").locator = " \n "; }],
  ["blank observation", (f) => { objectAt(f.report,"boundary_review","evidence","0").observation = " \t "; }],
  ["empty questions", (f) => { objectAt(f.report,"boundary_review").questions = []; }],
  ["blank question", (f) => { objectAt(f.report,"boundary_review").questions = [" \n "]; }],
  ["padded summary", (f) => { objectAt(f.report,"boundary_review").summary = "                 unsure                 "; }],
  ["inventory success claim", (f) => { objectAt(f.report,"inventory").total_rows = 1; }],
  ["reference product success claim", (f) => { f.report.reference_product_uuid_confirmed = true; }],
  ["bilingual success claim", (f) => { objectAt(f.report,"bilingual").aligned = true; }],
  ["bilingual row claim", (f) => { objectAt(f.report,"bilingual").zh_inventory_rows = 1; }],
  ["sync first run claim", (f) => { objectAt(f.report,"structured_sync").first_run_ok = true; }],
  ["sync second run claim", (f) => { objectAt(f.report,"structured_sync").second_run_clean = true; }],
  ["sync schema claim", (f) => { objectAt(f.report,"structured_sync").schema_valid = true; }],
  ["validation success claim", (f) => { objectAt(f.report,"validate").ok = true; }],
  ["shared artifact bypass", (f) => { objectAt(f.report,"validate").known_shared_artifact_only = true; }],
  ["blank validation summary", (f) => { objectAt(f.report,"validate").summary = "   "; }],
  ["missing validation summary", (f) => { objectAt(f.report,"validate").summary = null; }],
])) test(`rejects ${name}`, (t) => {
  const f = fixture(t); mutate(f);
  assert.throws(() => audit(f.input), (error) => typeof errorCode(error)==="string" && String(errorCode(error)).startsWith("GOAL_"));
});

for (const kind of ["committed", "dirty", "untracked", "staged", "reverted-history"]) test(`rejects unauthorized ${kind} path`, (t) => {
  const f = fixture(t);
  f.write("sentinel", "unauthorized\n");
  if (kind === "committed" || kind === "reverted-history") f.commit();
  if (kind === "reverted-history") { f.write("sentinel", "main untouched\n"); f.commit(); }
  if (kind === "untracked") f.write("unrelated", "unauthorized\n");
  if (kind === "staged") git(f.worktreePath, ["add", "sentinel"]);
  assert.throws(() => audit(f.input), (error) => errorCode(error) === "GOAL_BOUNDARY_REVIEW_PATH_INVALID");
});

test("ignored Harness dependencies do not count as untracked author edits", (t) => {
  const f = fixture(t);
  writeFileSync(path.join(f.main, ".git", "info", "exclude"), "node_modules/\n");
  f.write("node_modules/example/index.js", "export default 1;\n");
  assert.equal(audit(f.input).status, "unadjudicated");
});

test("report hash is canonical JSON with explicit provenance", (t) => {
  const f = fixture(t);
  const original = audit(f.input);
  f.input.report = Object.fromEntries(Object.entries(f.report).reverse());
  const reordered = audit(f.input);
  assert.equal(original.report_sha256, reordered.report_sha256);
  assert.equal(original.report_sha256_kind, "canonical_json");
});

for (const kind of ["bytes", "HEAD", "status"]) test(`rejects concurrent ${kind} change during file inspection`, (t) => {
  const f = fixture(t);
  f.write(file(0), "partial bytes\n");
  const originalRead = fs.readSync;
  let changed = false;
  t.mock.method(fs, "readSync", (fd: number, buffer: Buffer, offset: number, length: number, position: number | null) => {
    const count = originalRead(fd, buffer, offset, length, position);
    if (!changed && count > 0) {
      changed = true;
      if (kind === "bytes") f.write(file(0), "changed bytes\n");
      if (kind === "status") f.write("unrelated", "concurrent unrelated write\n");
      if (kind === "HEAD") git(f.worktreePath, ["commit", "--allow-empty", "-qm", "concurrent author commit"]);
    }
    return count;
  });
  syncBuiltinESMExports();
  t.after(() => { t.mock.restoreAll(); syncBuiltinESMExports(); });
  assert.throws(() => audit(f.input), (error) => errorCode(error) === "GOAL_BOUNDARY_REVIEW_CONCURRENT_CHANGE");
});

test("rejects unrelated Git history", (t) => {
  const f = fixture(t);
  git(f.worktreePath, ["checkout", "--orphan", "unrelated"]);
  f.write("sentinel", "other root\n"); f.commit();
  assert.throws(() => audit(f.input), (error) => errorCode(error) === "GOAL_AUTHOR_COMMIT_INVALID");
});

for (const kind of ["target", "parent", "worktree-parent"]) test(`rejects ${kind} symlink without following it`, (t) => {
  const f = fixture(t);
  if (kind === "target") { mkdirSync(path.join(f.worktreePath, pcrPath), { recursive: true }); symlinkSync(path.join(f.main, "sentinel"), path.join(f.worktreePath, file(0))); }
  if (kind === "parent") { mkdirSync(path.join(f.worktreePath, "library/pcrs/metals"), { recursive: true }); symlinkSync(f.main, path.join(f.worktreePath, "library/pcrs/metals/basic")); }
  if (kind === "worktree-parent") { symlinkSync(f.root, path.join(f.root, "alias")); f.input.worktreePath = path.join(f.root, "alias", "author"); f.task.worktree_path = f.input.worktreePath; }
  assert.throws(() => audit(f.input), (error) => typeof errorCode(error)==="string" && String(errorCode(error)).startsWith("GOAL_"));
});

test("rejects nonregular allowed file", (t) => {
  const f = fixture(t); mkdirSync(path.join(f.worktreePath, file(0)), { recursive: true });
  assert.throws(() => audit(f.input), (error) => errorCode(error) === "GOAL_BOUNDARY_REVIEW_FILE_INVALID");
});

test("rejects author reports exceeding the 1 MiB read limit", (t) => {
  const f = fixture(t);
  objectAt(f.report,"boundary_review").summary = "x".repeat(1024 * 1024 + 1);
  assert.throws(() => audit(f.input), {
    code: "GOAL_BOUNDARY_REVIEW_REPORT_INVALID",
    message: "Boundary author report exceeds the read limit.",
  });
});

test("rejects oversized allowed file", (t) => {
  const f = fixture(t); f.write(file(0), Buffer.alloc(16 * 1024 * 1024 + 1));
  assert.throws(() => audit(f.input), (error) => errorCode(error) === "GOAL_BOUNDARY_REVIEW_FILE_INVALID");
});

test("infrastructure unavailable wins over malformed referral and final claims", (t) => {
  const f = fixture(t);
  f.report.boundary_review = {};
  objectAt(f.report,"inventory").unresolved = [{ row_id: "electricity", reason_code: "tiangong_cli_unavailable" }];
  objectAt(f.report,"validate").ok = true;
  assert.throws(() => audit(f.input), (error) => errorCode(error) === "GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE" && field(field(error,"details"),"retryable") === true);
});

test("previous failed validation remains unadjudicated with explicit false flags", (t) => {
  const f = fixture(t);
  objectAt(f.report,"validate").exit_code = 1;
  objectAt(f.report,"validate").summary = "Earlier validation failed on incomplete authored content; boundary question remains unresolved.";
  assert.equal(audit(f.input).status, "unadjudicated");
});
