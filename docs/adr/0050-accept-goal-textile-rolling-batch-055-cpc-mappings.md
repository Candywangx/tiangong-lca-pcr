---
title: Accept Goal textile rolling batch 055 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 055
  - when resolving CPC 28223, 28224, or 28227
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0050-accept-goal-textile-rolling-batch-055-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 055 CPC 3.0 Mappings

## Decision

Accept three exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Each target is a bilingual `candidate` / `authored_methodology` material PCR with a deterministic projection and an `atomic_flows: v1` inventory.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28223 | Women's or girls' suits, coats, jackets, dresses, skirts, trousers, shorts and the like, knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-knitte-ab1a1a9a` | `06ca6094-ac7b-482e-a629-0def31609f23` |
| 28224 | Women's or girls' blouses, shirts, petticoats, panties, nightdresses, dressing gowns and similar articles, knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-blouses-shirts-petticoats-panties-nightdresses-dressing-gowns-and-simi-5803f0c3` | `b7c07ef2-cdde-46c1-88df-c1e4d030520e` |
| 28227 | Babies' garments and clothing accessories, knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.babies-garments-and-clothing-accessories-knitted-or-crocheted` | `7a9f33f2-9426-425d-abcf-bc483460969b` |

## Consequences

- CPC 3.0 has 330 accepted mappings and 2,547 unmapped leaves.
- The alias registry has 2,547 entries.
- The material catalog has 332 PCRs and 2,546 legacy scaffolds.
