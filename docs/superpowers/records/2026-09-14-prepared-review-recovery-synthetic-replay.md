# Synthetic recovery replay

This is a reproducible development replay using synthetic fixtures. No production Goal, author task, session log, PCR record, or remote service was used. It is not a replay of the original production incident.

The executable record is `2026-09-14-prepared-review-recovery-synthetic-replay.mjs`; the measured results are in the adjacent `.json` file. Run from the implementation checkout:

```bash
node docs/superpowers/records/2026-09-14-prepared-review-recovery-synthetic-replay.mjs
```

The script exports the actual baseline runtime at `61d8fc44002ed9bb4baaa149e5d074af1a93e96c` into a temporary directory and runs the same synthetic scenarios against that code and the current implementation. Each scenario owns a temporary Git repository and Goal event store. The author adapter and review/evidence callbacks are synthetic. The baseline export and fixture repositories are removed after execution. The script writes only the adjacent result artifact in the implementation checkout.

| Injected condition | Baseline after recovery | Current implementation after recovery |
| --- | --- | --- |
| Source HTTP transport failure with trusted network metadata | Content repair; `repair_count=1`; one author continuation | Saved-evidence recheck; `repair_count=0`, `evidence_recheck_count=1`; no author continuation |
| Author execution window expires | Content repair; `repair_count=1` | Same-task continuation; `repair_count=0`, infrastructure counters remain zero, `execution_continue_count=1` |
| Verified content conflict | Content repair; `repair_count=1` | Content repair; `repair_count=1` |
| Receipt integrity conflict | Content repair; `repair_count=1` | Coordinator hold; `repair_count=0`; no continuation |
| Unclassified error with misleading “network timeout” prose | Content repair; `repair_count=1` | Coordinator hold; `repair_count=0`; no continuation |

Summing the recorded JSON rows, the four non-content conditions incorrectly consume **4 content repairs before and 0 after**. Across all five scenarios, the synthetic author-continuation adapter is called **5 times before and 2 after**; the two remaining calls are the execution-window continuation and the genuine content repair. Total content repairs across all five scenarios are 5 before and 1 after. These counts are measured adapter calls and budget-counter changes, not human scheduling interventions or measured production savings. They describe the recorded run and must be refreshed with the final implementation.

The script also injects a crash after a visible start has been durably observed. Recovery retains the same `client_user_message_id`, calls the synthetic creation adapter exactly once, and leaves the author attempt at one. The JSON records the synthetic identifier before and after recovery.

Six additional named regression tests passed in this run. They verify partial receipt success does not hide a preparation failure; the scheduler independently resolves a bound preparation failure and preserves content budgets; completed-report window exhaustion uses an evidence continuation without an author or infrastructure budget; exhausted content budgets do not prevent infrastructure continuation; an observed-start crash does not create another author; and a genuinely new enrichment generation receives a distinct start identity. The exact command and test names are recorded in the JSON.

The CLI change was separately verified with `node --test builder/cli/goal-prepare-report.test.mjs builder/goal-harness/errors.test.mjs`: 14 tests passed. A prior red run reproduced the old draft-repair advice for infrastructure, execution-window, integrity, unknown, and manual-review errors. JSON failures keep stdout empty, human failures include the same next-step advice, and the CLI invokes preparation only once without automatically performing recovery.

Limits: the five baseline/current comparisons exercise legacy-compatible transport reports with trusted test callbacks, not real methodology validation or network behavior. Prepared contract 2 failure proof and completed-review-window behavior are covered separately by the named tests. Adapter stubs do not establish real app-server behavior. No historical production failure was enrolled into the new recovery path. The artifact records current source fingerprints; rerun it after further implementation changes. Full repository validation is a separate integration check.
