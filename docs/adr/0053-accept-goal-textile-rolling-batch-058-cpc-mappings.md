---
title: Accept Goal textile rolling batch 058 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 058
  - when resolving CPC 28233 or 28234
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0053-accept-goal-textile-rolling-batch-058-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 058 CPC 3.0 Mappings

## Decision

Accept two exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Both targets are bilingual `candidate` material PCRs with deterministic projections and `atomic_flows: v1` inventories. Builder lint reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28233 | Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and the like, of textile fabric, not knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-of-tex-3ce0e778` | `27320bfc-4629-4ed1-8139-2abf1f1ea14e` |
| 28234 | Women's or girls' blouses, shirts, singlets, petticoats, panties, nightdresses, dressing gowns and similar articles, of textile fabric, not knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-blouses-shirts-singlets-petticoats-panties-nightdresses-dressing-gowns-82c8e637` | `141dafee-dafa-4fef-9d44-e6e23a9fcff2` |

## Consequences

- CPC 3.0 has 336 accepted mappings and 2,541 unmapped leaves.
- The alias registry has 2,541 entries.
- The material catalog has 338 PCRs and 2,540 legacy scaffolds.
