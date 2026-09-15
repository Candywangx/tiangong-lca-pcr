---
title: Accept Goal apparel rolling batch 067 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal apparel rolling production batch 067
  - when resolving CPC 28238, CPC 28241, or CPC 28242
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0062-accept-goal-apparel-rolling-batch-067-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Apparel Rolling Batch 067 CPC 3.0 Mappings

## Decision

Accept the exact CPC 28238, CPC 28241, and CPC 28242 edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. All targets are bilingual `candidate` material PCRs with deterministic projections and 43-card, 59-card, and 45-card `atomic_flows: v1` inventories respectively. Centralized builder lint introduced no target-specific findings and reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28238 | Non-knitted textile clothing accessories and parts n.e.c. | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.handkerchiefs-shawls-scarves-veils-ties-cravats-gloves-and-other-made-up-clothing-acces-e3e3c0c4` | `4cbb1b61-4222-4c6b-8eb2-3e6622e784c7` |
| 28241 | Apparel of leather or of composition leather | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.apparel-of-leather-or-of-composition-leather` | `971103ee-8ef5-4165-853c-6a3e98a692d8` |
| 28242 | Clothing accessories of leather or of composition leather, except sports gloves | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.clothing-accessories-of-leather-or-of-composition-leather-except-sports-gloves` | `7b7924ae-e421-4da5-851e-51ab4012cfc8` |

## Consequences

- CPC 3.0 has 351 accepted mappings and 2,526 unmapped leaves.
- The alias registry has 2,526 entries.
- The material catalog has 353 PCRs and 2,525 legacy scaffolds.
