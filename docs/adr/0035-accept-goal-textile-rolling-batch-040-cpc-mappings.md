---
title: Accept Goal textile rolling batch 040 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 040
  - when resolving CPC 26890 or 27110
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0035-accept-goal-textile-rolling-batch-040-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 040 CPC 3.0 Mappings

## Decision

Accept two exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and landed by the rolling scheduler. Both targets are complete bilingual `candidate` / `authored_methodology` material PCRs with deterministic projections and `atomic_flows: v1` inventories.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 26890 | Woven fabrics of glass fibres | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-including-narrow-fabrics-of-glass-fibres` | `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f` |
| 27110 | Blankets and travelling rugs except electric blankets | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.blankets-and-travelling-rugs-except-electric-blankets` | `b7478885-d1a2-4ced-9240-4737fc0b8020` |

## Consequences

- CPC 3.0 has 306 accepted mappings and 2,571 unmapped leaves.
- The alias registry has 2,571 entries.
- The material catalog has 308 PCRs and 2,570 legacy scaffolds.
