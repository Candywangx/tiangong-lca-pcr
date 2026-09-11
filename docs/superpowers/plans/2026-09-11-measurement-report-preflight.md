# Measurement consistency and prepared author reports

> **For agentic workers:** Use superpowers:subagent-driven-development for bounded implementation and independent reviews. The user approved this design and implementation in a separate branch on 2026-09-11.

**Goal:** Detect inconsistent PCR normalization before submission and assemble receipt-derived report fields without another model transcription.

**Architecture:** A bounded Builder checker consumes existing Markdown projections; it reports unknown relationships explicitly. New Harness tasks pin an authoring contract, seal finalized evidence, prepare immutable reports and submit references. Legacy tasks, published PCRs, quarantined results and exhausted repair budgets are unchanged.

**Tech stack:** Node.js ESM, node:test, Ajv, existing YAML/Markdown parsers, Git worktrees, Goal event/cache receipts.

**Workspace:** `.worktrees/measurement-report-preflight`, branch `codex/measurement-report-preflight`, base `01cf5d12f176a5e39d0bcbf25b239206a1bbd4a7`. This is the clean committed takeover runtime, which includes the saved receipt diagnostics examined during design. Never mutate the production Goal or its authors from development tests.

## Representation decision

- PCR prose remains the canonical F1 methodology; no new top-level projection schema or formula engine.
- Measurement check results are F3: status, coverage, findings, locations, rule version; unrecognized relationships cannot become pass.
- Report drafts preserve author judgment. Prepared reports and finalization attestations are F4: task/attempt/turn, commit, exact artifact hashes, immutable identities and independently checked receipt lineage.
- Only rejected candidate fields and referenced receipt membership are generated from evidence. Explicit identity/decision conflicts fail. Other claims remain subject to existing independent quality and evidence audits.
- New tasks pin the contract at initial dispatch; existing tasks without it retain legacy behavior. Explicit `pcr:check` opts a target current/revision workspace into enforcement. General lint uses report-only measurement findings.

## Chunk 1: Builder measurement gate

### Task 1: Real regression fixtures and bounded checker

Files: create `builder/lib/measurement-consistency.mjs`, `builder/lib/measurement-consistency.test.mjs`, `builder/fixtures/measurement-44125/`; modify `builder/lib/lint-rules.mjs`.

- [x] Extract canonical bilingual evidence from immutable author commit `c883916c5099932527a5df72b0c28166be719c6c`; include provenance and no private runtime logs.
- [x] Write and run a failing regression demonstrating that a `1 kg` reference with per-machine inventory and no conversion must fail.
- [x] Implement `checkMeasurementConsistency({ english, chinese })` using existing referenceFlowDefinition, functionalUnit, measurementRules, processInventory amount/basis, collectionProtocols and calculationRules. Return `status: pass|error|manual_review`, `findings`, and coverage counts. A finding identifies language/file, row/rule/protocol where applicable, code, actual values and remedy.
- [x] Support direct same-reference quantities, symbolic machine mass M with per-item inventory, and the explicit per-item to 1 kg formula `q_ref = q_item / M`. Do not compare exchange numerator units (MJ electricity, kg steel) directly against output units.
- [x] Require variable M, kg unit, net/configuration scope, collection method and appropriate input/rule links. Missing concrete M is allowed; missing method or conversion is not. Document exact supported bilingual phrases/formula grammar; other formulas remain manual review.
- [x] Compare independently parsed EN/ZH quantity, denominator, M declaration and conversion direction. Shared wrong semantics still fail. Unsupported/contradictory wording must not pass on a nearby matching keyword.
- [x] Hook the checker into `inspectPcrDirectory` with `measurementPolicy: report|enforce` (default report); keep existing problems/warnings compatibility and add structured measurement results.
- [x] Run `node --test builder/lib/measurement-consistency.test.mjs builder/lib/atomic-flow-lint.test.mjs builder/lib/markdown-projection.test.mjs`; require zero failures.

### Task 2: Single-PCR read-only check

Files: create `builder/lib/pcr-check.mjs`, `builder/cli/pcr-check.test.mjs`; modify `builder/cli/index.mjs`, `package.json`.

- [x] Write CLI regressions for current/revision, missing/unsafe paths, stale projection, error/manual-review exit and JSON stdout/stderr contract.
- [x] Add `pcr:check -- --pcr <path> --workspace current|revision --format human|json`. Reuse resolvePcrWorkspacePaths and inspectPcrDirectory with lifecycle, bilingual and measurement enforcement; accept dirty author content without syncing/mutating it.
- [x] Return exit 0 only when target checks pass; findings that prevent completion are stable errors with details, stdout empty for JSON failures. Report measurement coverage so a skipped relationship is not success.
- [x] Verify current published files and releases remain unchanged, revision uses manifest.next.yaml, and no catalog/mapping dependency blocks the bounded target check.

## Chunk 2: Receipt sealing and report preparation

### Task 3: Finalized evidence and draft assembly

Files: modify `builder/goal-harness/uuid-search-receipts.mjs` and tests; create `builder/goal-harness/report-preparation.mjs` and tests, `builder/cli/goal-prepare-report.mjs` and tests, draft/submission schemas under `builder/schemas/`.

- [x] Add real rejected-reason original/paraphrase pairs from the saved 44125 review as a small fixture. Existing paraphrase audit tests remain strict.
- [x] Refactor/export receipt loading/auditing for programmatic reuse while preserving task retry and explicitly authorized cache reuse restrictions. Do not invent adoption or row applicability.
- [x] For pinned new tasks, finalize receipts with a recoverable immutable artifact set and a hash-bound append-only attestation. Hash query receipt, raw result, direct-read artifact and finalized decisions; distinguish canonical response hashes from exact file hashes. Missing historical attestations cannot be retroactively called verified.
- [x] Test tampered decisions/direct reads/results, missing candidates/decision, unsafe paths, duplicate finalization, conflicting finalization and interrupted writes. Preserve legacy finalization behavior for old tasks.
- [x] Define a draft by removing generated rejected-candidate and top-level receipt-list requirements from the existing author report contract, plus explicit receipt references. If an optional explicit generated value conflicts with evidence, fail rather than overwrite it.
- [x] Assemble every rejected candidate for the author's explicitly referenced task-scoped receipts; derive membership from adopted/unresolved/rejected references. Never infer row UUIDs, adoption, unresolved reasons, source applicability or success flags.
- [x] Run actual `reviewAuthorWorktree` including `runStructuredSyncDeterminism`, Schema/quality checks, target check, direct UUID audit and receipt audit against the assembled report; verify task/worktree/HEAD/allowlist and clean commit. Fail on measurement manual review. Source locator auditing remains independent intake work unless already performed by the author.
- [x] Persist draft, prepared report and binding manifest under the task's ignored state directory using bounded no-follow reads, atomic directory publication and deterministic content identity. Manifest binds goal/task/attempt/turn, commit, all four files, draft, report, evidence, rule version and actual check output.
- [x] Identical inputs reuse the artifact and do not modify repair counts. Different inputs create a new identity, preserve old drafts/reports, and must not allow old references to validate new content.
- [x] Expose `goal:prepare-report -- --config <goal.yaml> --task <id> --draft <absolute-json>` and return the ready report reference. CLI JSON errors keep stdout empty and report a stable code/details on stderr.

## Chunk 3: Pinned dispatch, independent intake and rollout

### Task 4: Integrate new tasks without changing old authors

Files: modify `builder/goal-harness/prompt-compiler.mjs`, `orchestrator.mjs`, `author-review.mjs`, `runtime-baseline.mjs`, related tests and config schema only if needed.

- [x] Add tests proving new initial tasks pin the contract, old repairs/replacements retain the original contract, and held/exhausted tasks are not reactivated.
- [x] Exclude unsealed legacy common-UUID caches for pinned tasks; these authors recapture/direct-read/finalize their own evidence. Legacy task cache behavior remains unchanged. Test this transition.
- [x] New normal author output is a small Schema-constrained submission reference; preserve explicit boundary-review and infrastructure-failure outputs without making them eligible completed reports. Unknown measurement relationships are not boundary-review claims or UUID gaps.
- [x] Teach intake to resolve references only under the bound task directory, verify every fingerprint and current commit, preserve exact report bytes, then run unchanged independent UUID/source/commit/projection/quality gates. Persist the original submission reference on the task and reverify it on every resumed author_review/evidence recheck; test cross-turn replay and post-intake tampering. A prepared result is not acceptance; strict measurement is rerun for pinned tasks.
- [x] Update prompt ordering: choose basis, author bilingual content, sync twice, check target, full validate, diff and four-file commit, prepare report, return reference. Mechanical errors are repaired in the current turn before submission; no counter mutation by preparation.
- [x] Add exact runtime installation paths for checker/CLI/schemas/docs and test new author worktrees contain complete dependencies. Do not install runtime or change production scheduling during development.

### Task 5: Documentation, independent review and verification

Files: modify `AGENTS.md`, `builder/AGENTS.md`, `builder/README.md`, create/update workflows, measurement/reference rule notes and Harness docs; review README/docs architecture and authoring guide for routing changes.

- [x] Document before/after behavior, supported formulas, no invented machine weights, report field ownership, unknown coverage, commands and legacy compatibility.
- [x] Run focused tests after each component; obtain spec compliance review followed by code quality review and address material findings.
- [x] Run full `npm run validate` in this branch; preserve test output and verify `git diff --check` and final allowed implementation paths. No library/mapping/release/result edits.
- [x] Commit the verified implementation on this branch and retain its worktree. Provide branch, commits, validation evidence and coordinator handoff instructions.
- [ ] Coordinator-only next step: use one naturally free slot for a new task from the reviewed runtime; verify same-turn self-check, exact report reasons, independent acceptance and unchanged old task state before rollout. Do not reset 44125's exhausted budget or deploy automatically from this development task.

## Implementation evidence

- Real 44125 four-file fixture retains exact bytes and SHA-256 provenance from the immutable author commit; two original/paraphrased rejection pairs are captured separately.
- The finite checker has explicit declaration/application/protocol forms. Review found and regression-tested ambiguous scope, contradictory M definitions, uncalibrated methods, renamed/extra formulas, negated application, gross-mass aggregation, extra formula clauses, ambiguous Inputs and unlinked normalization symbols. Unknown wording remains incomplete; definite errors take precedence over manual-only routing.
- Target CLI tests use actual current/revision four-file inputs and snapshot every file/directory/symlink before/after. No catalog dependency; malformed UTF-8, unsafe files, stale projection, conflicts and manual review fail.
- Preparation/intake integration uses real Goal events, receipt finalization, clean Git commits and immutable report artifacts. It verifies exact rejected reasons, duplicate execution, cross-turn/task binding, current-commit changes, tamper on resumed intake, repair commit pointers, held/manual states and unchanged repair counts.
- A 27-row material fixture passes the default preparation and independent acceptance reviewers, including both actual sync runs in temporary review worktrees. External UUID responses/source fetches are local deterministic fixtures. Tests do not contact production services. A guard ensures sync does not touch the runtime checkout's canonical PCR files.
- Receipt finalization interruption and report publication-before-ready-event recovery are exercised; replay preserves one attestation/ready event. Secure read tests include byte-swap TOCTOU and symlink rejection, while legacy IO behavior remains covered.
- Runtime installation tests construct a temporary installed author runtime and execute both new command help entries, proving complete import/Schema/script paths are included. No production runtime installation or pilot dispatch has occurred.
- Existing four skipped tests remain baseline behavior; this change adds no skipped tests.

The remaining rollout checkbox is a coordinator handoff, not an incomplete code change. The branch is retained for the
requested naturally free-slot pilot; old/quarantined/exhausted tasks are not reactivated.

### Final branch verification

`npm run validate` completed with exit 0: 1,075 tests, 1,071 passed, zero failed and four pre-existing skips.
Final output is retained locally at `/tmp/pcr-measurement-report-final-validate.log`. The final independent review
approved the change and separately ran 90 focused tests successfully. `git diff --check` is clean; implementation
changes are limited to Builder/Harness, package scripts and documentation. There are no changed library PCRs,
classification mappings, published releases, consumer packages or production Goal state in this branch delivery.

The requested branch/worktree is kept for coordinator review. Runtime installation, merging and natural-slot pilot
execution are deliberately separate rollout steps; no new author was dispatched by this development task.
