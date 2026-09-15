# Prepared-report recovery implementation baseline

Implementation worktree: `.worktrees/prepared-review-recovery-impl`.
Branch: `codex/prepared-review-recovery-20260914`.
Production adoption is outside this development task.

## Three-way integration

- Prepared-report parent: `85e8b986de0dc04b29659604698cc011eb8c6406`.
- Old running Harness parent: `1c4ab051284501b066fc1d3f46c975c1192b06c2`.
- Common ancestor: `29b7956b9679f119e2d39d9983033daee69c8768`.
- Additional inspected synthetic runtime source: `68b4a004731b68e8c58c67db9ec25f5e836854c1`.

A normal Git three-way merge was used. Only orchestrator.mjs conflicted (eight hunks): preserve prepared contract pinning and receipt isolation, trial model/cache observation, trial semantic review, actual evidence-recheck outcome, and old live-capacity protection. Legacy evidence retries require the actual saved report to exist; a legacy locator by itself is not a prepared report. Both the old retry tests and prepared-intake tests are retained.

No file was replaced wholesale to settle a conflict. No production PCR or shared classification/catalog state was imported from the synthetic runtime. Its deletion of the trial modules, CLI, immutable trial checks and orchestrator trial hooks was deliberately excluded.

## Selected later recovery changes

The synthetic runtime stream-reading and event-ID lookup changes were integrated at method/call-site boundaries: event-store, coordinator-hold, integration-completion and reconciliation. The existing readEvents array API remains compatible with prepared-report and receipt-integrity consumers; iterateEvents provides bounded streaming. Trial reducer checks remain before durable log append, so rejected events cannot poison the event log. Tests verify rejected trial mutation leaves state and log bytes unchanged, locator-index recovery, complete chain verification, and 90 MB log replay under a 64 MB heap.

## Isolation evidence

Protected input fingerprints are recorded in `2026-09-14-protected-inputs.json`: original main index, production Goal state/event log and production configuration. Implementation commands use only the isolated worktree and temporary fixtures. Source plan and the user additions are retained here; no live doctor/start/resume/integrate/land command will be run against production.

## Validation

- First combined baseline: 1074 passed, 1 failed, 4 skipped. The failure identified conflicting legacy retry assumptions, resolved by requiring an existing saved report without dropping old-runtime retry support.
- Corrected prepared-intake + orchestrator tests: 78 passed, no skips.
- Stream/core/model-trial/coordinator/finalization/reconciliation tests: 105 passed.
- Prepared-intake/preparation/receipt-integrity/race tests: 42 passed.
- Full combined baseline: npm run validate passed; 1092 tests, 1088 passed, 4 existing skips, 0 failures.

## Additional accepted implementation requirements

- Execution-window exhaustion is an incomplete-check continuation, not an infrastructure incident and not a content repair; neither unrelated budget is consumed.
- Preparation failure results must be durable and verifiable directly by the scheduler, bound to the originating task/turn/draft/commit and retained as failures, never mistaken for ready prepared reports.
