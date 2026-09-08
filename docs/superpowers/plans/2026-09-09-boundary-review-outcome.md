# Boundary-review outcome implementation plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development or superpowers:executing-plans. Each change starts with a failing test.

**Goal:** Preserve explicit unresolved methodology-boundary outcomes without counting them as PCRs or repeatedly demanding a finished PCR.

**Architecture:** Add a nullable request to the author report, audit task/worktree provenance independently, and route only explicit valid requests to unadjudicated manual_review. Add pre-acceptance coordinator holds for legacy reports; no automatic text-based classification.

**Tech Stack:** Node ESM, Ajv2020, existing Goal event store/lock and temporary Git fixtures.

## Chunk 1: Contract, safety audit and hold

Spec: `docs/superpowers/specs/2026-09-09-boundary-review-outcome-design.md`.

### Task 1: Report and prompt contract

- [ ] Add RED tests to `builder/goal-harness/quality-gates.test.mjs`: legacy report valid, explicit nullable request valid, malformed reasons/evidence rejected; compiled wire schema requires every property.
- [ ] Run `node --test builder/goal-harness/quality-gates.test.mjs builder/goal-harness/prompt-compiler.test.mjs`; observe missing request support, not fixture syntax failures.
- [ ] Add runtime-optional nullable `boundary_review` with reason_code, summary, questions, evidence locator/observation fields to `builder/schemas/goal-author-report.schema.json`; all nested keys required, no unsupported schema keywords.
- [ ] Update `readAuthorReportSchema` in `builder/goal-harness/prompt-compiler.mjs` to require the nullable field only in the wire schema. Add explicit no-content outcome instructions. Keep normal finished-PCR instructions.
- [ ] Run focused tests GREEN. Do not loosen inventory/source/UUID/range gates.

### Task 2: Independent request audit

- [ ] Add `builder/goal-harness/boundary-review.test.mjs` using real temporary Git repositories. Assert rejection of mismatched CPC/path/file list/HEAD, unrelated commit, unauthorized committed or dirty paths, symlinked target, missing questions/evidence, success claims and infrastructure rows; assert preservation/hashes of partial allowed edits.
- [ ] Run the test and observe RED because the audit API does not exist.
- [ ] Implement `auditBoundaryReview({task,report,baselineCommit,worktreePath})` in `builder/goal-harness/boundary-review.mjs`. Validate schema, identity, non-final report shape and actual Git topology/path sets. No writes; read target regular files without following symlinks; hash absent files as null and current bytes as SHA-256. Return request provenance, current HEAD/content baseline and unadjudicated status, never a validity result.
- [ ] Run tests GREEN, then add/report-size and file-read race failures if the chosen existing helpers do not already cover them.

### Task 3: Explicit legacy hold API

- [ ] Add temporary event-store tests in `builder/goal-harness/coordinator-hold.test.mjs`: allowed states, reject accepted/integrating/completed, report hash and expected task SHA mismatch, no-follow report read, dry-run, replay, release, stale operation id/payload, counters and worktree untouched.
- [ ] Run RED, then implement hold/release in `builder/goal-harness/coordinator-hold.mjs` using withGoalLock and append-only task_replaced. Require operation id, coordinator, substantive reason, expected task SHA and report SHA; no raw state.json edits. Bind operation identity to payload and preserve history. Reject report paths outside Goal authors/state root and oversized or symlinked reports.
- [ ] Run tests GREEN.

## Chunk 2: Scheduler and rollout

### Task 4: Orchestrator integration

- [ ] Add RED tests to `builder/goal-harness/orchestrator.test.mjs`: explicit original/repair reports become manual_review; preserve thread/worktree; no valid result or six-result snapshot; repeat harvest idempotent; empty slot refill; stopped scheduling unchanged; prose alone is not a referral; normal completed PCR still accepted.
- [ ] Add RED tests for held author terminal extraction without acceptance/interrupt, held repair-limit task excluded from retries/replacements, release permits subsequent review, and compiled repair prompt permits a boundary request without unconditional commit.
- [ ] Add an overdue held inProgress/pending author test: no interrupt or timeout repair transition. Test `scheduler.mjs` counts held running authors, excludes terminal held author_review from active slots, and refills the freed slot.
- [ ] Add author_review -> manual_review to `state-machine.mjs`. In harvest, preserve terminal report first; held task stays author_review without validation/promotion. Otherwise retain infrastructure rejection priority, validate full report, then call boundary audit when explicitly requested and append a transition with provenance before continuing. Other reports execute unchanged original gates.
- [ ] Exclude coordinator_hold from every dispatch/retry/repair candidate source, exempt held live turns from automatic timeout interrupts, and update `scheduler.mjs` slot accounting as above. Fix `compileRepairPrompt` wrapper to distinguish explicit boundary handoff from normal repair. Run focused tests GREEN.
- [ ] Document API/JSON state meanings, limits, legacy handling and recovery in `builder/docs/tools/goal-harness.md`.

### Task 5: Verification and real rollout

- [ ] Run all Harness tests: `node --test builder/goal-harness/*.test.mjs` (temporary dangerous-path fixtures only).
- [ ] Run `npm run validate` in isolated dev worktree; inspect actual counts/failures. Get independent code review; fix defects with RED tests first.
- [ ] Commit only named Harness/docs/test files. Confirm dirty main HEAD/index unchanged except previous authorized PCR landings; never merge over user modifications.
- [ ] Run real `goal:doctor` with current config; authentic hybrid/read gates must pass before dispatch.
- [ ] Keep production stopped while inspecting terminal legacy reports. Place explicit audited holds only after binding current task and report hashes; no prose-driven auto-conversion. Do not interrupt active writers.
- [ ] Use one original eligible task/repair with updated prompt/schema for a real explicit boundary outcome; if budget exhausted retain coordinator hold, do not reset counters. Confirm terminal outcome, no PCR acceptance, preserved files and durable review provenance before releasing unrelated scheduling.
- [ ] Resume original rolling-six production once tests/doctor/pilot pass. Hold unresolved boundary tasks separately; full Goal remains incomplete.
