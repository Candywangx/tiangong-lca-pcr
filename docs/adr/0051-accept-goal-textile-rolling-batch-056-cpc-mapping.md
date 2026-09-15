---
title: Accept Goal textile rolling batch 056 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 056
  - when resolving CPC 28226 or 28228
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0051-accept-goal-textile-rolling-batch-056-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 056 CPC 3.0 Mappings

## Decision

Accept two exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. The targets are bilingual `candidate` / `authored_methodology` material PCRs with deterministic projections and `atomic_flows: v1` inventories.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28226 | Jerseys, pullovers, cardigans, waistcoats and similar articles, knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.jerseys-pullovers-cardigans-waistcoats-and-similar-articles-knitted-or-crocheted` | `eccda6b6-0639-4a61-8af1-4bea892ac61c` |
| 28228 | Track suits, ski suits, swimwear and other garments, knitted or crocheted n.e.c. | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.track-suits-ski-suits-swimwear-and-other-garments-knitted-or-crocheted-n-e-c` | `243b28b7-df13-4d19-a301-cdad8781f93b` |

## Consequences

- CPC 3.0 has 332 accepted mappings and 2,545 unmapped leaves.
- The alias registry has 2,545 entries.
- The material catalog has 334 PCRs and 2,544 legacy scaffolds.
