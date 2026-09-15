---
title: Accept Goal textile rolling batch 042 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 042
  - when resolving CPC 27130
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0037-accept-goal-textile-rolling-batch-042-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 042 CPC 3.0 Mapping

## Decision

Accept the exact CPC 27130-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a complete bilingual `candidate` / `authored_methodology` material PCR with deterministic projection and 23 `atomic_flows: v1` exchanges.

The reference product UUID `e25f1284-93c9-4898-960e-3a91f026451b` was hybrid-discovered and directly read in Tiangong public state 100 as a Product flow with exact CPC 27130 semantics and Mass identity.

## Consequences

- CPC 3.0 has 308 accepted mappings and 2,569 unmapped leaves.
- The alias registry has 2,569 entries.
- The material catalog has 310 PCRs and 2,568 legacy scaffolds.
