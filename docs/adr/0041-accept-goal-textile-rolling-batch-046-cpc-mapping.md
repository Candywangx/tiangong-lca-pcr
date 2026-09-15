---
title: Accept Goal textile rolling batch 046 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 046
  - when resolving CPC 27220
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0041-accept-goal-textile-rolling-batch-046-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 046 CPC 3.0 Mapping

## Decision

Accept one exact CPC 3.0-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` / `authored_methodology` material PCR with a deterministic projection and an `atomic_flows: v1` inventory.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 27220 | Woven carpets and textile floor coverings, not tufted or flocked | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.carpets-and-other-textile-floor-coverings-woven-not-tufted-or-flocked` | `d54c5255-fc7f-4613-86da-08cf2afe8632` |

## Consequences

- CPC 3.0 has 313 accepted mappings and 2,564 unmapped leaves.
- The alias registry has 2,564 entries.
- The material catalog has 315 PCRs and 2,563 legacy scaffolds.
