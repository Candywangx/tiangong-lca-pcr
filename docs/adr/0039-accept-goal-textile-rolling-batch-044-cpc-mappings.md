---
title: Accept Goal textile rolling batch 044 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 044
  - when resolving CPC 27170 or 27210
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0039-accept-goal-textile-rolling-batch-044-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 044 CPC 3.0 Mappings

## Decision

Accept two exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Both targets are complete bilingual `candidate` / `authored_methodology` material PCRs with deterministic projections and `atomic_flows: v1` inventories.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 27170 | Parachutes | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.parachutes` | `887e7332-42b2-496b-aea3-0e9308ff8f17` |
| 27210 | Knotted carpets and textile floor coverings | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-knotted` | `a718c51e-66e1-40e5-bd73-00cb16f1b722` |

## Consequences

- CPC 3.0 has 311 accepted mappings and 2,566 unmapped leaves.
- The alias registry has 2,566 entries.
- The material catalog has 313 PCRs and 2,565 legacy scaffolds.
