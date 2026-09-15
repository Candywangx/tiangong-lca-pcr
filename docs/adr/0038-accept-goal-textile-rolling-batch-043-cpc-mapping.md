---
title: Accept Goal textile rolling batch 043 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 043
  - when resolving CPC 27180
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0038-accept-goal-textile-rolling-batch-043-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 043 CPC 3.0 Mapping

## Decision

Accept the exact CPC 27180-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a complete bilingual `candidate` / `authored_methodology` material PCR with deterministic projection and `atomic_flows: v1` inventory.

The reference product UUID `f646f2c3-aead-4a65-8904-8894b67221f8` was hybrid-discovered and directly read in Tiangong public state 100 as a Product flow with exact CPC 27180 semantics and Mass/kg identity.

## Consequences

- CPC 3.0 has 309 accepted mappings and 2,568 unmapped leaves.
- The alias registry has 2,568 entries.
- The material catalog has 311 PCRs and 2,567 legacy scaffolds.
