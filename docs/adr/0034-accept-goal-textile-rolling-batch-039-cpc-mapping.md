---
title: Accept Goal textile rolling batch 039 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 039
  - when resolving CPC 26880
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0034-accept-goal-textile-rolling-batch-039-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 039 CPC 3.0 Mapping

## Decision

Accept the exact CPC 26880-to-PCR edge generated in an independent desktop-visible Worktree and landed by the rolling scheduler. The target is a complete bilingual `candidate` / `authored_methodology` material PCR with deterministic projection and 40 `atomic_flows: v1` cards.

The reference product UUID `e9861e6a-cfb3-4e5f-8f40-e3990c2eb7fa` was hybrid-discovered and directly read in Tiangong public state 100 as a Product flow with exact CPC 26880 semantics and Mass/kg identity. Thirty-nine unresolved inventory identities remain concrete row-specific exchanges without fabricated UUIDs or AI amount ranges.

## Consequences

- CPC 3.0 has 304 accepted mappings and 2,573 unmapped leaves.
- The alias registry has 2,573 entries.
- The material catalog has 306 PCRs and 2,572 legacy scaffolds.
