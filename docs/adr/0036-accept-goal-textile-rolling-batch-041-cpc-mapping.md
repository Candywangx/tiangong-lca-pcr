---
title: Accept Goal textile rolling batch 041 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 041
  - when resolving CPC 27160
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0036-accept-goal-textile-rolling-batch-041-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 041 CPC 3.0 Mapping

## Decision

Accept the exact CPC 27160-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a complete bilingual `candidate` / `authored_methodology` material PCR with deterministic projection and `atomic_flows: v1` inventory.

The reference product UUID `176ee965-23e5-444c-8b6c-9457334cae4c` was hybrid-discovered and directly read in Tiangong public state 100 as a Product flow with exact CPC 27160 semantics and Mass/kg identity.

## Consequences

- CPC 3.0 has 307 accepted mappings and 2,570 unmapped leaves.
- The alias registry has 2,570 entries.
- The material catalog has 309 PCRs and 2,569 legacy scaffolds.
