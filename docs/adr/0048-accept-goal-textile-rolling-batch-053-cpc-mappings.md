---
title: Accept Goal textile rolling batch 053 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 053
  - when resolving CPC 27993, 27995, or 28110
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0048-accept-goal-textile-rolling-batch-053-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 053 CPC 3.0 Mappings

## Decision

Accept four exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Each target is a bilingual `candidate` / `authored_methodology` material PCR with a deterministic projection and an `atomic_flows: v1` inventory.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 27993 | Metallized yarn | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.metallized-yarn` | `fae82400-7c2c-4779-a516-2c6dcdbee472` |
| 27994 | Woven fabrics of metal thread or metallized yarn n.e.c. | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.woven-fabrics-of-metal-thread-or-metallized-yarn-n-e-c` | `fc1c034a-6087-48d4-93ec-a57b94919068` |
| 27995 | Gimped yarn and strip; chenille yarn; loop wale-yarn | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.gimped-yarn-and-strip-chenille-yarn-loop-wale-yarn` | `b4b228c8-c8f8-4225-8e81-bebc83d9b8c8` |
| 28110 | Pile fabrics and terry fabrics, knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.pile-fabrics-and-terry-fabrics-knitted-or-crocheted` | `19330422-9245-41a2-9f99-a7c599c7c427` |

## Consequences

- CPC 3.0 has 324 accepted mappings and 2,553 unmapped leaves.
- The alias registry has 2,553 entries.
- The material catalog has 326 PCRs and 2,552 legacy scaffolds.
