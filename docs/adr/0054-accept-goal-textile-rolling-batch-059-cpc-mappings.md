---
title: Accept Goal textile rolling batch 059 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 059
  - when resolving CPC 28235 or 28236
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0054-accept-goal-textile-rolling-batch-059-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 059 CPC 3.0 Mappings

## Decision

Accept two exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Both targets are bilingual `candidate` / `authored_methodology` material PCRs with deterministic projections and `atomic_flows: v1` inventories. Their centralized lint introduced no target-specific findings; the temporary battery-repair findings and the repository-owner-excluded CPC 01961/01962 findings are unrelated to these accepted targets.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28235 | Babies' garments and clothing accessories, of textile fabric, not knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.babies-garments-and-clothing-accessories-of-textile-fabric-not-knitted-or-crocheted` | `be638ef7-ac8c-4fde-a338-0535d81d5242` |
| 28236 | Track suits, ski suits, swimwear and other garments, of textile fabric, not knitted or crocheted n.e.c. | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.track-suits-ski-suits-swimwear-and-other-garments-of-textile-fabric-not-knitted-or-croc-281e84cd` | `686dfd81-1397-4b0b-b051-eedb1164e25d` |

## Consequences

- CPC 3.0 has 338 accepted mappings and 2,539 unmapped leaves.
- The alias registry has 2,539 entries.
- The material catalog has 340 PCRs and 2,538 legacy scaffolds.
