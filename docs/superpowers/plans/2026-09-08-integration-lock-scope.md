# Integration Lock Scope Implementation Plan

> **For agentic workers:** Use the existing isolated Harness development worktree and TDD. Review checkpoints are required before production adoption.

**Goal:** Permit author queue progress during expensive serial integration commands without concurrent integrations or lost state updates.

**Architecture:** Hold a separate integration-operation lock throughout each snapshot operation. Hold the existing Goal lock for preparation and final state transactions, but release it during worktree-only construction and validation. Compare the prepared snapshot and task state against freshly rebuilt state before recording success or failure; fail closed on substitution. Persist completed operation results before reacquiring the Goal lock, then finalize the snapshot and selected tasks with one reducer event so interruption cannot strand partially transitioned tasks.

**Tech Stack:** Existing Node.js ESM, Git worktrees, append-only GoalEventStore, node:test.

## Chunk 1: Reproduce and isolate integration

- [x] Add a temporary Git fixture to `builder/goal-harness/integration.test.mjs`: a build callback acquires the Goal lock and appends a scheduling event, then tries a second integration which must be rejected.
- [x] Run `node --test --test-name-pattern='integration build permits' builder/goal-harness/integration.test.mjs`; confirm failure is GOAL_LOCKED on the queue update, not fixture setup.
- [ ] Update `builder/goal-harness/integration.mjs`: acquire the existing lock primitive under an integration-specific state subdirectory; prepare snapshot/tasks under the Goal lock; execute worktree-only commands outside the Goal lock; finalize under the Goal lock after comparing fresh snapshot/task records to the prepared records.
- [ ] Add a versioned, hash-verified integration completion journal under the Goal state directory before finalization. It binds operation ID, prepared snapshot and selected-task fingerprints, worktree, base/author commits, command results, outcome, changed-file hashes, and resulting commit. If the Goal lock is busy, retain journal/worktree and fail closed; resume verifies these bindings and finalizes without rerunning completed commands. Interrupted builds with no completion record retain the existing safe retry-worktree policy, with fresh persisted operation/event IDs.
- [ ] Extend `builder/goal-harness/event-store.mjs` with one integration-finalized reducer event covering the snapshot and selected task replacements. Append it under the Goal lock using the stable operation ID; retries reconcile an already appended event without new timestamps. Preserve all unrelated tasks, scheduling flags, snapshots and caches.
- [ ] Compare snapshot/task baselines captured after preparation transitions, never the whole Goal state. Detect selected-task or snapshot substitution before writing either success or failure. Verify integration commit/tree and journal output hashes before recovery.
- [ ] Add fixture coverage for successful and failed builds encountering a live finalization lock; resume must preserve command results and avoid event conflicts. Add interrupted finalization recovery, duplicate same/different-snapshot integration, selected-task/snapshot substitution on both outcomes, and an unrelated author result plus next snapshot surviving completion with a valid event hash chain.
- [ ] Verify an initially dirty main index/worktree remains byte-for-byte unchanged, not merely that an initially clean fixture stays clean.
- [ ] Document short state locks versus serial integration ownership in `builder/docs/tools/goal-harness.md`.

## Chunk 2: Verify and adopt

- [ ] Run `node --test builder/goal-harness/integration.test.mjs builder/goal-harness/lock.test.mjs`; expect no failures.
- [ ] Run `node --test builder/goal-harness/*.test.mjs`; expect all existing and new tests to pass without reduced assertions.
- [ ] Run `npm run validate`; expect all lint and library tests to pass.
- [ ] Review the exact diff and commit only these Harness changes and their plan.
- [ ] Allow the already-running old integration to finish without interrupting or changing its lock; validate/CAS-land it through existing commands.
- [ ] Adopt the committed runtime via normal resume, and verify a future integration permits same-Goal author review/refill while retaining a single integration writer.

## Review checkpoint

The initial plan review identified missing completion-lock contention recovery and crash-atomic finalization. The revised protocol above is required before implementation approval; do not ship a lock-only change. Existing fixture RED is confirmed as GOAL_LOCKED on queue-probe. No production lock has been changed.

## Verification checkpoint

The revised plan and implementation received independent approval. The implementation now uses the dedicated
integration lock, persisted immutable completion envelope, output verification, selected-state CAS, and one completion
event. Added coverage includes both outcome paths under state-lock contention, duplicate operations, seven correctly
checksummed identity substitutions, four concurrent selected-state substitutions, changed output bytes, legacy partial
finalization rejection, successful queue progress, and unchanged dirty main index/content.

- Harness: 129 tests passed, zero failures or skips.
- Full `npm run validate`: 617 tests, 613 passed, four existing skips, zero failures; lint passed.
- The original production snapshot completed and CAS-landed with its old runtime while this work stayed isolated.
- Production adoption and a live integration/refill overlap check remain pending at this checkpoint.

## Representation decision

- Entity/product role: durable integration completion, used for recovery and audited delivery state.
- Current maturity/consumers: existing production failure evidence; integration CLI and Goal event replay.
- Truth status/freedom level: F4 audit record, not author-reported methodology evidence.
- Representation: versioned hash-verified immutable JSON envelope and a single hash-chained completion event.
- Required evidence: bound operation/task/commit identity, output bytes, command results, selected-state CAS.
- Allowed mutations: append new operations only; no replacement of completed operation content.
- Evolution: incompatible Schema changes require explicit migration; corruption or changed inputs fails closed.
- Validation loop: temporary Git fixtures, full Harness suite, repository validate, then live production overlap.
