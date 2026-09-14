# Matched production model trial implementation plan

> Execute in the existing isolated Harness development worktree using TDD; review independently before production dispatch.

**Goal:** Run the user-approved six real PCR samples within the existing Goal and six-slot limit, without disturbing existing authors or weakening acceptance.

**Architecture:** Persist a bounded trial and immutable pair assignments in the existing hash-chained event log. Resolve model at actual author/repair turn creation. Keep measurements and review evidence separate from PCR truth. No global model toggling or replacement Goal.

**Tech stack:** Node ESM, node:test, existing GoalEventStore and Codex app-server.

## Representation decision

- Entity: matched model trial, assignment, turn measurement and review.
- Role/consumers: scheduler, evaluator and human report; audited experiment evidence, not PCR methodology.
- Level: F3 assignment contract; F4 append-only observations. Difficulty and semantic findings remain explanatory text with evidence, not claimed objective scores.
- Mutation: immutable initial allocation; append turns, findings, switches and landing outcomes. Unknown usage/cost is unavailable, never zero.
- Validation: temporary fixtures, real app-server parameters, existing full validate and receipt/semantic/CAS gates. Six-sample checkpoint; explicit second-stage registration only, maximum twelve.

## Approved allocation

All six are untouched promote_legacy tasks. Pair 1: 44111 Terra, 44112 Sol (simple metal tillage tools). Pair 2: 44114 Terra, 44113 Sol (metering/distribution machinery, medium complexity). Pair 3: 44125 Terra, 44126 Sol (complex agricultural machinery). These are a priori estimates, not equivalent products; remaining task differences must appear in the report. No create_new generalization.

## Tasks

- [ ] Add failing tests for atomic/idempotent allocation, bounded sample count, untouched queued tasks only, per-task actual model parameters, same-model repair once, Terra-to-Sol rescue without exceeding existing limit, severe-risk dispatch guard and non-trial preservation.
- [ ] Implement trial module and event projection; integrate narrowly in orchestrator. Freeze Harness/policy/retry fingerprints and capture cache baseline. Capture turn IDs/model/effort and initial/repair observations without duplicate counting.
- [ ] Add usage/report tests: cumulative counters must not be summed as turn usage; missing data unavailable; mixed-model success not Terra-independent; unsuccessful costs remain included.
- [ ] Verify tests and full validate, run real authenticated doctor, register assignments atomically, preview without dispatch. Preserve ongoing authors and use only natural vacant capacity.
- [ ] Review six actual results with hidden model labels where possible, retain semantic evidence references. Integrate through normal earliest-six snapshots and CAS. Report six before deciding whether to extend to twelve.

Cache policy: both arms use the same existing shared cache and query rules. Record pre-trial cache fingerprint plus per-turn injected evidence and cache observations. Report warm-cache exposure as a confounder; never attribute shared warming to model savings. Query latency unavailable where no measured trace exists.

Safety: fail closed for experiment integrity errors, not by stopping healthy non-trial authors. Infrastructure errors remain separately classified and measured. Serious evidence findings require review and block further Terra dispatch while unresolved; existing worktrees/turns are preserved.
