---
title: Accept Goal textile rolling batch 057 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 057
  - when resolving CPC 28231 or 28232
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0052-accept-goal-textile-rolling-batch-057-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 057 CPC 3.0 Mappings

## Decision

Accept two exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Both targets are bilingual `candidate` / `authored_methodology` material PCRs with deterministic projections and `atomic_flows: v1` inventories. CPC 28231 was corrected under the centralized parser gate before acceptance.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28231 | Men's or boys' suits, coats, jackets, trousers, shorts and the like, of textile fabric, not knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-suits-coats-jackets-trousers-shorts-and-the-like-of-textile-fabric-not-kn-835c43d3` | `039191b4-8865-4c2e-83b4-afd3f17435c3` |
| 28232 | Men's or boys' shirts, singlets, underpants, pyjamas, dressing gowns and similar articles, of textile fabric, not knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-shirts-singlets-underpants-pyjamas-dressing-gowns-and-similar-articles-of-73979720` | `66e77e01-9118-4c94-a727-c8bbcf2d4eee` |

## Consequences

- CPC 3.0 has 334 accepted mappings and 2,543 unmapped leaves.
- The alias registry has 2,543 entries.
- The material catalog has 336 PCRs and 2,542 legacy scaffolds.
