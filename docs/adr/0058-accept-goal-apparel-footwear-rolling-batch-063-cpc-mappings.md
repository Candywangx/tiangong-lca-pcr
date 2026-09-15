---
title: Accept Goal apparel and footwear rolling batch 063 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal apparel and footwear rolling production batch 063
  - when resolving CPC 28262, CPC 29410, or CPC 29420
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0058-accept-goal-apparel-footwear-rolling-batch-063-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Apparel and Footwear Rolling Batch 063 CPC 3.0 Mappings

## Decision

Accept the exact CPC 28262, CPC 29410, and CPC 29420 edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. All three targets are bilingual `candidate` material PCRs with deterministic projections and `atomic_flows: v1` inventories. Centralized builder lint introduced no target-specific findings and reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28262 | Hats and other headgear, of felt, plaited strips, knitted or crocheted material, lace or other textile fabric; hair-nets | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.hats-and-other-headgear-of-felt-or-plaited-or-made-by-assembling-strips-of-any-material-3a364230` | `b00baec8-ce3f-4e11-99c7-8a40167d2f4f` |
| 29410 | Ski-boots, snowboard boots and cross-country ski footwear | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.ski-boots-snowboard-boots-and-cross-country-ski-footwear` | `6e39a9ed-f49c-4ddc-8869-7d4c47551bbf` |
| 29420 | Tennis shoes, basketball shoes, gym shoes, training shoes and the like | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.tennis-shoes-basketball-shoes-gym-shoes-training-shoes-and-the-like` | `3fb395b7-1901-4a81-8b89-b8300bd9134e` |

## Consequences

- CPC 3.0 has 345 accepted mappings and 2,532 unmapped leaves.
- The alias registry has 2,532 entries.
- The material catalog has 347 PCRs and 2,531 legacy scaffolds.
