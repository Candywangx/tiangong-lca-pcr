---
title: Accept Goal textile rolling batch 054 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 054
  - when resolving CPC 28210, 28221, or 28222
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0049-accept-goal-textile-rolling-batch-054-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 054 CPC 3.0 Mappings

## Decision

Accept three exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Each target is a bilingual `candidate` / `authored_methodology` material PCR with a deterministic projection and an `atomic_flows: v1` inventory.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28210 | Panty hose, tights, stockings, socks and other hosiery, knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.panty-hose-tights-stockings-socks-and-other-hosiery-knitted-or-crocheted` | `c00d32b4-7e02-479b-8cae-d94b50ed1a7a` |
| 28221 | Men's or boys' suits, coats, jackets, trousers, shorts and the like, knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-suits-coats-jackets-trousers-shorts-and-the-like-knitted-or-crocheted` | `e5e9f30a-061b-4cbc-bdb3-3d86985acff6` |
| 28222 | Men's or boys' shirts, underpants, pyjamas, dressing gowns and similar articles, knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.men-s-or-boys-shirts-underpants-pyjamas-dressing-gowns-and-similar-articles-knitted-or-crocheted` | `833dd94b-bf2a-4273-99a9-e6bb3c59dedc` |

## Consequences

- CPC 3.0 has 327 accepted mappings and 2,550 unmapped leaves.
- The alias registry has 2,550 entries.
- The material catalog has 329 PCRs and 2,549 legacy scaffolds.
