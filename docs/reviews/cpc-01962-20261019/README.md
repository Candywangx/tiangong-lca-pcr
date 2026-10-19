---
title: Fresh cut-flower methodology, identity and flow-card review
docType: reference
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
lastReviewedAt: "2026-10-19"
lastReviewedCommit: "090cd1b192151c924de6651a8b0e39d5e3975121"
---

# Fresh cut-flower review evidence

This directory preserves the evidence for the fresh, undyed cut-flower candidate and its accepted **narrower**
CPC 3.0 `01962` mapping. The mapping decision is [cpc-01962.md](../../adr/cpc-01962.md).
The PCR remains a candidate. A Git branch update is not PCR activation, publication, external certification or
upstream acceptance. This is the follow-up cut-flower review, not a fresh review of every PCR already in the branch.

## Contents

- [methodology-repairs.json](methodology-repairs.json): the four methodology findings, repairs and associated-rule checks.
- [flow-card-decisions.json](flow-card-decisions.json): one decision for each of the 50 cards, including its independent
  measurement, accounting, boundary or validation role and the reason for retaining its exchange position.
- [requirements-preserved.json](requirements-preserved.json): where the requirements remain after text consolidation.
- [identity-decisions.json](identity-decisions.json): all 50 identity decisions and the verified support references.
- [lookup-evidence.json.gz](lookup-evidence.json.gz): read-only lookup requests, candidate semantic datasets,
  128 published direct-read datasets, and canonical property/unit-group support rows.
- [evidence-integrity.json](evidence-integrity.json): archive hashes, byte counts and record counts.
- [verification.json](verification.json): delivery checks and explicit validation limitations.

## Outcome

All 50 cards were retained because they have an independent quantity, accounting, hand-off or verification role
within the existing six-stage process structure. The review rewrote their descriptions and shortened 45 repeated
amount explanations, reducing the inventory chapter by about 19% in each language. The product scope, final
purchased-stem reference, complete cradle-to-grave boundary and all existing collection/calculation rules remain.
The five special quantity expressions for the reference output, LUC directions and consumer hand-offs remain.

Ten cards use five verified flow UUIDs. Forty cards, including the fresh reference product flow, remain unresolved.
Number of items and its Item(s) unit group were independently verified. An unresolved identity does not establish
that a dataset is absent from the database; several candidates depend on actual source, receiving compartment,
composition, provider gate or treatment evidence. Actual quantities and supplier compatibility are separate checks.
Measurement roles include distinct quantity bases and source records, not a requirement to meter every modelled emission.

## Reading the compressed evidence

The archive is UTF-8 JSON compressed with gzip. For example:

```bash
gzip -dc docs/reviews/cpc-01962-20261019/lookup-evidence.json.gz > /tmp/cpc-01962-evidence.json
```

References ending in `#/queries/...`, `#/direct_reads/...` or `#/support/...` address the decompressed JSON.
Compression round-trip equality and both archive hashes are checked. Published semantic dataset payloads and
versions are retained; CLI account/author envelopes, authentication state, runtime caches and machine-local paths
are excluded. Hashes labelled `original_cli_*` describe the pre-filtering local responses, while
`evidence-integrity.json` binds the archived representation. Dataset versions remain in this evidence directory,
outside canonical PCR Markdown and the structured projection.

## Validation limits

The selected PCR's bilingual measurement check passes. Projection regeneration is deterministic and runtime
guidance accepts the generated content. Missing evidence-backed numerical ranges remain warnings; this review
does not invent amounts or ranges to remove them.

The complete local test suite cannot be claimed as passing. A separate test reproduces
`GOAL_ARTIFACT_UNSAFE` with `Secure traversal unavailable.` on this macOS host. The repository documents its
Linux-required full-validation boundary in [TypeScript engineering](../../typescript-engineering.md).
Current-source hosted CI remains required for a complete qualification result.
