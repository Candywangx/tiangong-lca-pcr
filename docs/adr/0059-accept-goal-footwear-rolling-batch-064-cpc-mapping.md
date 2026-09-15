---
title: Accept Goal footwear rolling batch 064 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal footwear rolling production batch 064
  - when resolving CPC 29510
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0059-accept-goal-footwear-rolling-batch-064-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Footwear Rolling Batch 064 CPC 3.0 Mapping

## Decision

Accept the exact CPC 29510-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` material PCR with a deterministic projection and a 47-card `atomic_flows: v1` inventory. Centralized builder lint introduced no target-specific findings and reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 29510 | Footwear incorporating a protective metal toe-cap, except those covered in subclass 29320 | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-incorporating-a-protective-metal-toe-cap-except-those-covered-in-subclass-29320` | `7c000468-f61e-4e05-8509-52da9fd77874` |

## Consequences

- CPC 3.0 has 346 accepted mappings and 2,531 unmapped leaves.
- The alias registry has 2,531 entries.
- The material catalog has 348 PCRs and 2,530 legacy scaffolds.
