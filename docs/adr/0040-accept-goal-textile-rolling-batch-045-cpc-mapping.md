---
title: Accept Goal textile rolling batch 045 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 045
  - when resolving CPC 27230
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0040-accept-goal-textile-rolling-batch-045-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 045 CPC 3.0 Mapping

## Decision

Accept one exact CPC 3.0-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a complete bilingual `candidate` / `authored_methodology` material PCR with a deterministic projection and an `atomic_flows: v1` inventory.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 27230 | Tufted carpets and textile floor coverings | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-tufted` | `a01ef31e-fdc6-48be-a681-0a418c22c0cc` |

## Consequences

- CPC 3.0 has 312 accepted mappings and 2,565 unmapped leaves.
- The alias registry has 2,565 entries.
- The material catalog has 314 PCRs and 2,564 legacy scaffolds.
