# Local PCR Goal Harness

Use the Goal Harness when a reviewed policy prompt needs to schedule many one-PCR author tasks without keeping queue
truth in a long conversation. It is a local Node.js ESM CLI; it does not require a database service or web console.

## Configuration

The YAML configuration is validated by `builder/schemas/goal-harness-config.schema.json`. A minimal configuration is:

```yaml
schema_version: 1
goal_id: metal-products-cpc-3
project_root: /absolute/path/to/repository
target_category_path: /absolute/path/to/repository/library/pcrs/metal-products-machinery-and-equipment
classification_system: cpc
classification_version: "3.0"
cpc_selector:
  mode: target_category
  value: all
skip_cpc_list: []
author_slots: 6
integration_batch_size: 6
policy_prompt_path: /absolute/path/to/policy.txt
tools:
  codex: codex
  tiangong_cli_root: /absolute/path/to/tiangong-cli
  flow_hybrid_search_root: /absolute/path/to/flow-hybrid-search
  paper_search: /absolute/path/to/paper-search
  credentials_env_file: /absolute/path/to/tiangong-cli/.env # path only; contents are never persisted
retry_policy:
  max_attempts: 3
  max_repairs: 2
integration:
  decided_by: tiangong-lca-pcr-maintainers
```

`value: all` is always bounded by `target_category_path`. Repository-wide CPC selection is invalid. Use the baseline
tracked-root and exact untracked allowlists when the dirty starting tree contains task-relevant content. Credential,
`.env`, dependency, temporary, and runtime-state paths are rejected even if accidentally allowlisted.

## Commands

```bash
npm run goal:doctor -- --config <goal.yaml> [--format json]
npm run goal:plan -- --config <goal.yaml> --dry-run [--format json]
npm run goal:plan -- --config <goal.yaml>
npm run goal:start -- --config <goal.yaml> --slots 1
npm run goal:status -- --config <goal.yaml> [--format json]
npm run goal:resume -- --config <goal.yaml>
npm run goal:integrate -- --config <goal.yaml> [--snapshot <id>] [--allow-partial] [--dry-run]
npm run goal:land -- --config <goal.yaml> [--snapshot <id>] [--dry-run]
npm run goal:stop -- --config <goal.yaml>
npm run goal:uuid-audit -- --config <goal.yaml> [--apply] [--format json]
```

Start with one slot. `--allow-partial` is an explicit pilot/final-tail integration override; normal rolling operation
creates a snapshot from the earliest six valid results. Human output is the default. JSON failures keep stdout empty,
write a stable error code and details to stderr, and include a next action.

## State and recovery

Runtime state is stored at:

```text
library/.pcr-builder-state/goals/<goal-id>/
  initial-state.json
  events.jsonl
  state.json
  goal.lock
  baseline-*.index
  authors/<task-attempt>/
  cache/events.jsonl
  cache/{verified_common_uuids,uuid_query_receipts,source_original_text_receipts,source_locator_checks}/
  derived-cache/viewer/<input-sha256>/
  uuid-search-receipts/<task-id>/attempt-<n>/
  integrations/<snapshot-id>/
  landings/<snapshot-id>/
```

`events.jsonl` is append-only and hash chained; `state.json` is an atomically replaced projection. Worktree, Codex
thread/turn, author commit, baseline, validation, unresolved, snapshot, and landing identities are persisted. Repeating
`plan`, `resume`, `integrate`, or `land` reuses completed identities instead of creating duplicates.

`goal:stop` only stops dispatch. It does not remove a worktree, Codex thread, commit, report, snapshot, or user result.
After an interruption, inspect `goal:status`, fix the reported external condition if any, and repeat the same command.
An incomplete landing journal fails closed and must be inspected before recovery; never delete transaction state to
bypass it.

Run `goal:uuid-audit` while scheduling is stopped after a UUID evidence-contract change. The default is read-only. With
`--apply`, an affected result with a recoverable thread and worktree moves to `repair_requested` in place. Otherwise it
moves to infrastructure-level `retryable_failure` and retains its prior worktree, thread, report, and commit pointers
in `uuid_enrichment_history`; no prior artifact is deleted. A replacement enrichment-generation worktree is created
only when the original thread/worktree cannot be safely recovered.

Review failures normally follow `author_review -> repair_requested -> authoring_repair -> author_review`. The repair
turn is sent to the original durable thread and worktree with structured gate findings. Repair count, deterministic
client message id, turn id, timestamps, old/new commits, and findings are persisted; repeated resume cannot create a
second turn for the same repair. A replacement task is allowed only after the configured repair limit or a recorded
thread/worktree/commit recovery failure.

### Explicit boundary review and coordinator holds

An author may return a non-null `boundary_review` with reason
`semantic_boundary_unresolved` or `overlapping_pcr_identity`, a substantive summary,
open questions, and evidence locators with observations. These observations are
unverified author claims, not accepted methodology or positive mapping evidence.
Ordinary completed-PCR reports use null; legacy reports may omit the field.
Free-text `manual_review_required` never substitutes for this explicit request.

The independent boundary auditor verifies task identity, actual HEAD and baseline
ancestry, authorized committed and dirty paths, and bounded no-follow file hashes.
It preserves partial four-file work without accepting it. A referral cannot claim
final inventory rows, adopted UUIDs, ranges, reference UUID confirmation, bilingual
alignment, sync or validation success. UUID infrastructure failure remains a retryable
failure, not a boundary-review workaround. Its report hash is explicitly canonical
JSON; it is distinct from the exact persisted report-byte hash used below.

For legacy reports needing coordinator inspection, the bounded library APIs in
`builder/goal-harness/coordinator-hold.mjs` are `holdCoordinatorTask`,
`releaseCoordinatorTask`, and `coordinatorTaskSha256`. Both operations take:

```js
{
  stateDir, task_id, operation_id, coordinator, reason,
  expected_task_sha256, expected_report_sha256, dry_run: true
}
```

Compute the task SHA using `coordinatorTaskSha256` on the current task rebuilt from
`GoalEventStore`, and the report SHA-256 on exact bytes at that task's `report_path`.
Inspect both before authorizing the operation. A dry run performs validation without
appending an event or changing the state projection; set `dry_run: false` on the same
request to apply. Use a new operation id and fresh hashes for release. Do not edit
`state.json` or reset retry/repair counters to accomplish either operation.

Only `authoring`, `authoring_repair`, `author_review`, `repair_requested`, and
`retryable_failure` tasks with a persisted report are eligible. Accepted or integrated
results require the correction workflow instead. The operation holds the Goal lock,
checks task/report CAS, rejects unsafe or larger-than-1-MiB report files, and appends
an audited `task_replaced` event. Linux descriptor-anchored no-follow reads are required;
unsupported secure traversal fails closed. Exact retries return the original receipt
without reinstating an old task snapshot; operation-id reuse with different input fails.

The audit retains actor, UTC time, reason, task/report hashes, current execution
provenance and separate report-path recording provenance. An older report does not
thereby become evidence from the current turn. Release clears `coordinator_hold` and
appends the hold/release pair to `coordinator_hold_history`, preserving execution
fields, counters, threads, worktrees and reports.

The scheduling contract is separate from the hold receipt: held tasks must be
excluded from normal dispatch, repairs, retry replacements and dry-run selection.
A held running turn continues and occupies its slot without automatic timeout
interruption. Its terminal report is retained at `author_review` without acceptance;
that terminal held task no longer occupies an author slot. Release permits review
again, not automatic acceptance. A valid explicit boundary referral is recorded as
unadjudicated `manual_review`, retaining its original queue action and file/report
provenance; it is not one of the six valid results and creates no accepted mapping.

For rollout, stop dispatch first, retain active turns and existing results, verify
the hold and referral scheduling tests and full validate, then run authenticated
doctor. Inspect legacy reports read-only and pin their current task/report hashes
before any explicit hold. Do not infer referrals from old report prose or rewrite
old reports. Validate one eligible original-thread outcome before restoring the
rolling pool; exhausted repair budgets remain visible for coordinator inspection
and must not be reset to manufacture a pilot.

If an idle visible thread omits the expected repair turn from its history, the adapter can recover that completed
turn from the local Codex session path returned by app-server. It requires a regular, non-symlink UTF-8 JSONL file
under the configured Codex home `sessions/`, matching session thread/worktree identity, and exactly one terminal
completion matching the final-answer message for the requested turn. Active threads and incomplete reports are never
accepted by this recovery. The Goal records the session SHA-256 and turn identity; all ordinary author quality gates
still run. The session contents are not copied into PCR files.

## Dirty baseline and landing

The harness uses a temporary `GIT_INDEX_FILE`, `git write-tree`, and `git commit-tree` to capture only approved current
bytes. It updates a private `refs/tiangong-goals/<goal-id>/baseline` ref and never changes the user's real index, HEAD,
branch, or dirty working tree. Authors and integrations run in `.worktrees/goals/<goal-id>/` from that synthetic
commit.

On resume, a clean, committed Harness development tree is projected through another temporary Git index onto the
latest landed integration commit. Only the reviewed Goal Harness/CLI/schema/docs, package-script, and viewer-test
paths are eligible. This immutable runtime baseline is recorded in Goal state and a private ref. Existing authors
retain their original `author_base_commit`; new authors and the next integration use the runtime baseline, and later
landed descendants become the cumulative base. Diverged histories or dirty runtime source paths fail closed. This
keeps the validated viewer/test optimization active without rewriting the original synthetic baseline or touching the
dirty primary working tree.

The approved runtime paths also include the shared-materials CLI, implementation, tests, and create-PCR guidance.
Run `goal:start` or `goal:resume` from the clean, committed checkout containing the desired Harness version (or invoke
that checkout's `builder/cli/goal.mjs` directly); a GitHub push alone does not update another local checkout or an
existing Goal runtime. New dispatches query the shared store and pass bounded candidates plus explicit query/read/register
commands to authors. Existing author turns keep their original prompts; subsequent repair turns receive the updated
instructions from the coordinator. The default materials directory is the Git common directory's `pcr-materials/`,
shared across linked worktrees; `tools.materials_root` can override it. See [shared materials](shared-materials.md).

Landing is staged and journaled. Every destination path is compared with the baseline or the last successfully landed
snapshot. Any byte mismatch produces `GOAL_LAND_CAS_CONFLICT` with exact paths and does not overwrite newer user
content. Author worktrees are retained after stop and successful landing for audit.

## Visible Codex tasks

The Harness starts one Goal-owned detached `codex app-server --listen ws://127.0.0.1:<port>` process idempotently and
records its PID, loopback endpoint, and logs under the ignored Goal state directory. Short-lived CLI invocations use
Node's WebSocket client for the initialize handshake, `project/list`, durable non-ephemeral `thread/start`,
`thread/name/set`, `turn/start` with an output Schema, and `thread/read`. Repair turns call `turn/start` directly on
the existing durable thread; they do not call `thread/resume` first because that would restart an interrupted prior
turn before queuing the repair. Closing a CLI client does not interrupt author turns.
Each thread is bound to one independent Git worktree and the current visible Codex project. If this interface or project binding is
unavailable, dispatch stops with `GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE` or `GOAL_CODEX_PROJECT_UNAVAILABLE`. There is
no fallback to `codex exec`, hidden subagents, or multiple writers in one directory.

Worktree setup creates an ignored real `node_modules/` directory whose direct entries are links to the project's
already-installed dependency tree. This gives Builder and copied-path viewer tests the same dependency baseline without
changing package metadata, installing versions, or adding a commit-tree path outside the assigned PCR files.

## Authenticated UUID search receipts

`goal:doctor` performs a live redacted `auth doctor-auth` check, a minimal authenticated hybrid query, and a public
`state_code=100` direct read of its returned candidate. It reports only stage booleans and never returns child-process stderr, tokens, session paths, or
`.env` contents. The author Prompt receives the exact TianGong CLI, hybrid-search, Goal config, and receipt-CLI paths.
It uses Node's `--env-file-if-exists=<tiangong-cli>/.env` option so authors never source or print credential files.

Every real candidate query must run from the assigned worktree through:

```bash
node --env-file-if-exists=<tiangong-cli>/.env <project>/builder/cli/goal-uuid-search.mjs query \
  --config <goal.yaml> --task <task-id> --query "<one concrete flow>" --flow-type product --limit 20
```

The command stores an immutable request/result receipt under
`uuid-search-receipts/<task-id>/attempt-<n>/`, including the exact query, top-level candidate flow UUIDs, exact-result
SHA-256, byte length, authenticated status, and task binding. After state-code and semantic review, finalize it with a
JSON decision for every candidate:

```bash
node --env-file-if-exists=<tiangong-cli>/.env <project>/builder/cli/goal-uuid-search.mjs direct-read \
  --config <goal.yaml> --task <task-id> --receipt <receipt-id> --uuid <candidate-uuid>
```

```bash
node --env-file-if-exists=<tiangong-cli>/.env <project>/builder/cli/goal-uuid-search.mjs finalize \
  --config <goal.yaml> --task <task-id> --receipt <receipt-id> --decisions /tmp/<decisions>.json
```

The finalized receipt includes ranked candidate match metadata, tool version/hash, non-sensitive endpoint identity,
public bilingual names, type, classification, property, unit group, general-comment review, decision and response
hash. The author report links adopted UUIDs, rejected candidates, and `no_exact_candidate`/`manual_review_required` rows to
finalized receipt ids. The reviewer recomputes result hashes and candidate projections. A self-reported
`hybrid_search: true` is not evidence. `tiangong_cli_unavailable` is never valid unresolved coverage; it makes the
whole author result an infrastructure-level retryable failure.

Goal caches are append-only and hash-bound to normalized input, tool version, query/source conditions, and response
fingerprint. Writes use a separate bounded cross-process lock so six authors cannot fork the event chain. Schema-stale
or damaged entries are misses. A damaged event log is preserved byte-for-byte in a recovery directory and is rebuilt
only from receipt/blob pairs whose hashes and in-cache paths verify; invalid receipts remain quarantined evidence.
Cached common UUIDs remain candidates whose row-specific semantic, geography, technology, state, property, and unit
fit must be checked. Source blobs can be reused only at the same verified content hash and still need PCR-specific
applicability. Prompt compilation injects only a bounded relevant subset, never the whole Goal history.

## Prepared reports for new authors

Untouched tasks pin `authoring_contract_version: 2` at initial dispatch. Tasks with a prior thread/worktree/attempt,
repairs, replacements, and legacy tasks without this pin retain their original contract. A pinned task keeps version 2
across repair turns. No existing author prompt is replaced in flight. Explicit single-PCR checks can also be used for
selected standalone draft/revision work; the Harness still authorizes exactly the four current PCR files.

The previous flow asked authors to copy receipt decisions into a full final report and often discovered mechanical
errors only at independent intake. Contract 2 uses this sequence:

1. Determine reference quantity, collection basis and conversion; define measured M when needed.
2. Author aligned English and Chinese PCRs, then sync structured.yaml twice.
3. Run `pcr:check` for that PCR and `npm run validate`; correct mechanical problems in this turn.
4. Commit exactly the four authorized files and write an original draft outside the tracked worktree.
5. Prepare the report, then return the generated JSON envelope verbatim.

```bash
# Run from the assigned author worktree. Use the runtime CLI path supplied by the task.
node <runtime>/builder/cli/goal-prepare-report.mjs \
  --config <absolute-goal.yaml> --task <task-id> --draft <absolute-draft.json> --format json
```

The draft follows `builder/schemas/goal-author-draft.schema.json`. It preserves the existing report's author-owned
identity, sources, adopted UUID/receipt links, semantic judgments, unresolved rows, counts, ranges, validation claims
and commit. Omit `rejected_uuid_candidates` and top-level `hybrid_search_receipt_ids`; use `receipt_ids` for additional
receipts whose candidates were rejected. The program derives receipt membership and copies every rejected candidate's
UUID, receipt id, reason code and exact finalized reason. If an optional explicitly supplied generated field disagrees,
it fails instead of overwriting it. Adoption decisions and UUID/row applicability are never invented or corrected.

For version 2, finalization validates receipt goal/task/attempt identity, candidate completeness, raw-result hash and
direct-read artifacts, then appends a hash-bound finalization attestation to the existing Goal event chain. Exact
retries recover an interrupted final publication using the attested decision bytes. A changed decision conflicts;
an already finalized unsealed historical artifact cannot be retroactively blessed. New tasks exclude legacy common
UUID audit caches from adopted evidence: capture, direct-read and finalize task-bound receipts. Shared raw-query and
original-source caches remain available under their existing rules. These artifacts use bounded regular-file,
no-follow reads and durable writes; secure traversal requires the existing Linux runtime.

Preparation verifies a clean bound worktree, exact four-file commit and current task/attempt/turn, audits receipt
integrity and adopted UUID identity, then invokes the actual Builder inspection and two deterministic sync runs in a
review worktree. It does not trust draft success booleans. It stores a separate immutable directory:

```text
authors/prepared-<task-hash>/<content-id>/
  draft.json
  report.json
  manifest.json
```

The manifest binds goal/task/attempt/turn, worktree, commit, four-file hashes, draft/report byte hashes, receipt
attestations and check contract. The complete directory is published before a ready event; incomplete or substituted
artifacts cannot become ready. Identical inputs reuse one reference and one ready event. Changed input creates a new
identity without overwriting previous reports; old references cannot validate the changed task, commit or evidence.
Preparation never changes repair counts. Normal output is:

```json
{
  "schema_version": 2,
  "prepared_report": {
    "prepared_report_id": "<64-hex-content-id>",
    "report_sha256": "sha256:<64-hex>",
    "commit_sha": "<author-commit>"
  },
  "boundary_review_report": null,
  "failure": null
}
```

Exactly one of the three outcomes is non-null. A product-boundary referral wraps the existing complete referral
report in `boundary_review_report` and still goes through the independent boundary audit. Unsupported measurement
relationships use `failure: {code: "GOAL_MEASUREMENT_REVIEW_REQUIRED", message: "<affected rows and relationship>"}`;
the task remains unadjudicated `manual_review`, with no completed result or counter reset. Infrastructure failures use
`GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE`; other uncorrectable preflight failures use `GOAL_AUTHOR_PREFLIGHT_FAILED`.
Neither failures nor referrals can count as completed PCRs.

Intake resolves only the stored reference under the bound task, rechecks every artifact and current commit, then runs
the ordinary independent report, source, UUID, quality and structured-sync gates. A resumed review or saved evidence
recheck resolves the original submission again; an earlier successful preparation is not permanent approval. Source
locator/original-evidence review and full integration validation still apply. Mechanical fixes after submission stay
within the existing repair limit.

Rollout of this change starts only after branch verification, through one naturally free author slot selected by the
main coordinator. Keep older PCRs, published versions, isolated results and running authors intact; report historical
findings without batch rewrites. Do not reinstall this runtime, dispatch a pilot, or restore 44125's exhausted repair
budget as a side effect of development. Broader rollout follows the pilot's same-turn correction, exact-reason,
independent-acceptance and legacy-preservation results.

## Gates

The author report Schema and commit-tree review enforce the exact four files, PCR path, material Builder contracts,
bilingual inventory order/row/UUID/source alignment, official Tiangong Chinese names, UUID direct-read audit,
authenticated hybrid-search receipts and candidate rejection decisions,
`total = matched + unresolved`, atomic flows, source-original verification, two-independent-source external ranges,
strict range bounds, reasoned-estimate labeling, anti-Cartesian-expansion thresholds, deterministic structured sync,
and author validation. Search/OpenAlex summaries are discovery-only evidence.

Integration is serial. It accepts only reviewed `exact`, `broader`, `narrower`, or `proxy` edges to material PCRs with
accepted status, decision maker, UTC time, and a durable generated ADR. It then runs aliases, catalog, coverage/viewer,
full validation, and public list/resolve/guidance checks before CAS landing is permitted.
An integration-specific operation lock remains held during the full build, while the Goal state lock is released
between preparation and finalization so author review/refill can proceed. Completion is durably recorded under
`integration-completions/<snapshot-id>/<operation-id>.json` before state finalization. The versioned, hashed record
binds the prepared snapshot/tasks, author commits, worktree, output fingerprints, and command results. Resume verifies
the worktree and selected-state CAS before applying one atomic `integration_finalized` event; a busy state lock does
not discard successful commands. Do not remove live locks or completion records. Changed outputs or selected tasks
fail closed. Older snapshots whose validated state disagrees with task states report
`GOAL_INTEGRATION_FINALIZATION_INCOMPLETE` and require evidence review rather than automatic landing advice.
The viewer derivation may be restored only from a same-input cache whose PCR, mapping, alias, catalog, coverage,
viewer-code, and core-code SHA-256 fingerprint and output-tree hash both match. Corruption rebuilds safely. Full
`npm run validate` still runs once for every six-result snapshot; its lint phase performs the authoritative
aliases/catalog checks, so integration does not repeat those identical checks immediately before validate.
