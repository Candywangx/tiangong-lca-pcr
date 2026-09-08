# Boundary-review author outcomes

## Evidence and scope

Production reports for CPC 47171, 47172 and 47173 explicitly stopped at unresolved
parts-category methodology boundaries. They made no PCR commit. The prompt asks
authors to return such concerns, but harvest unconditionally runs finished-PCR
gates and sends the resulting empty-commit/alignment failures back for repair.
This change separates a request for semantic adjudication from a finished PCR.
It does not decide those three product boundaries or accept classification edges.

## Representation decision

- Entity: durable author boundary-review request and its scheduler audit.
- Role/consumers: author, scheduler, coordinator and eventual governance reviewer.
- Maturity: three actual reports demonstrate the missing outcome.
- Truth: author claim requiring adjudication, never accepted methodology.
- Level: F3 routing envelope; F1 semantic explanation and evidence observations.
- Shape: additive optional `boundary_review` on the existing v1 author report.
  It contains `reason_code` (`semantic_boundary_unresolved` or
  `overlapping_pcr_identity`), a substantive summary, nonempty open questions,
  and nonempty evidence observations (`locator`, `observation`).
- Evidence: report SHA-256, task/CPC/path, thread/turn, content baseline and HEAD,
  authorized committed/dirty path audit, and hashes of preserved target files.
  Evidence observations remain explicitly unverified claims until adjudication.
- Mutation: append-only task transition/audit; retain all worktrees and reports.
- Promotion: only a subsequent explicit classification decision may requeue;
  this branch cannot produce valid_result, completed, map_existing or an edge.
- Demotion: malformed/mismatched/unsafe requests fail existing repair/failure paths.
- Validation: real temporary Git fixtures, schema tests, harvest replay and dispatch
  tests, full Harness suite and repository validate; then actual stopped-goal review.

## Alternatives

1. Infer a disposition from prose keywords: rejected, because inventory unresolved
   reasons and genuine boundary adjudication are different entities.
2. Replace all author output with a new envelope: unnecessary migration and
   app-server output-schema risk for this bounded fix.
3. Add an explicit optional request to the current report: selected. Existing
   reports remain valid and completed-PCR gates remain unchanged.

## Contract and flow

Authors requesting adjudication still identify the exact assigned CPC/path and
four allowed files, current HEAD, and accurately report unperformed checks as
false/not run. They must not claim inventory rows, adopted final UUIDs, ranges,
confirmed reference UUID, successful sync, bilingual alignment or validation in
this request. Searches already performed may be described as evidence, not final
UUID adoption. Infrastructure failure or missing UUID/range evidence alone is not
a semantic-boundary reason.

After terminal-turn extraction and report persistence, harvest validates the full
report schema. If an explicit boundary_review exists, independently verify the
task identity and worktree: actual HEAD equals reported commit, HEAD descends from
the recorded content baseline, and both committed changes and dirty/untracked
paths are subsets of the four authorized paths. No files are modified by review.
Retained partial authorized work is allowed but never accepted as a valid PCR.
Record content hashes and the complete request as unadjudicated provenance.
Transition author_review to manual_review and set queue_action manual_review,
retaining the original action in the audit. Do not add to validResults, failures
requiring author repair, snapshots, mappings or completed counts. Dispatch then
fills the free slot from executable work. Repeated harvest/resume must not append
another request or start a duplicate turn.

Normal reports without boundary_review follow all existing gates. Free-text
manual_review_required and hybrid_search booleans never activate this branch.
Malformed explicit requests are errors, not valid PCRs and not accepted referrals.
Stopped scheduling stays stopped during harvest. Active authors are not interrupted.

## Legacy reports and production rollout

Do not silently rewrite existing reports or infer disposition from their prose.
Retain their report/turn provenance. Ask the original task for a schema-conforming
explicit disposition through the existing repair mechanism after the new prompt
is deployed; if its repair budget is exhausted, keep it isolated for coordinator
adjudication rather than reset counters. This is a classification question, not
permission to invent a representative product or duplicate a CPC leaf.

During implementation stop new dispatch only. Let active tasks finish and keep
their results isolated. Resume production only after full tests, validate, doctor
and a single real explicit boundary-review outcome demonstrate safe routing.
The original 522-task Goal remains incomplete; manual-review entries are reported
separately from landed PCRs and require explicit final disposition evidence.

## Files and verification

- `builder/schemas/goal-author-report.schema.json`: optional request schema.
- `builder/goal-harness/boundary-review.mjs`: independent safety audit and projection.
- `builder/goal-harness/orchestrator.mjs`: branch after schema validation, before
  finished-PCR evidence/content checks; preserve infrastructure rejection priority.
- `builder/goal-harness/state-machine.mjs`: author_review to manual_review.
- `builder/goal-harness/prompt-compiler.mjs`: explicit request instructions.
- `builder/goal-harness/boundary-review.test.mjs` and existing orchestrator,
  prompt/compiler and quality tests: TDD reproduction and negative cases.
- `builder/docs/tools/goal-harness.md`: routing, evidence and resume semantics.

Required negative tests: prose-only legacy report, wrong CPC/path/HEAD, unrelated
commit, unauthorized committed or dirty files, malformed request, success claims,
UUID infrastructure failure, no evidence/questions, and safe preservation of partial
authorized content. Required integration tests: same-thread repair outcome,
idempotent harvest, free-slot refill, stopped-goal preservation, five valid results
plus referral do not form a six-result snapshot, and normal valid PCR still does.
