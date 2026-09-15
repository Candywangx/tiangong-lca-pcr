---
title: Accept Goal leather and footwear rolling batch 062 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal leather and footwear rolling production batch 062
  - when resolving CPC 29230 or CPC 29310
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0057-accept-goal-leather-footwear-rolling-batch-062-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Leather and Footwear Rolling Batch 062 CPC 3.0 Mappings

## Decision

Accept the exact CPC 29230-to-PCR and CPC 29310-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Both targets are bilingual `candidate` material PCRs with deterministic projections and `atomic_flows: v1` inventories. Centralized builder lint introduced no target-specific findings and reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 29230 | Watch straps, except of metal | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.watch-straps-except-of-metal` | `19a79c1e-d7a4-422d-b754-47ea82969f9f` |
| 29310 | Waterproof footwear, with outer soles and uppers of rubber or plastics, other than footwear incorporating a protective metal toe-cap | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.waterproof-footwear-with-outer-soles-and-uppers-of-rubber-or-plastics-other-than-footwe-4b94079f` | `c419cb3e-b7f4-44b5-9f7c-ed1ebfc6260b` |

## Consequences

- CPC 3.0 has 342 accepted mappings and 2,535 unmapped leaves.
- The alias registry has 2,535 entries.
- The material catalog has 344 PCRs and 2,534 legacy scaffolds.
