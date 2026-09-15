---
title: Accept Goal textile rolling batch 051 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 051
  - when resolving CPC 27922 or 27992
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0046-accept-goal-textile-rolling-batch-051-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 051 CPC 3.0 Mappings

## Decision

Accept two exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Both targets are bilingual `candidate` / `authored_methodology` material PCRs with deterministic projections and `atomic_flows: v1` inventories.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 27922 | Nonwovens | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.nonwovens` | `dd37c0b0-8d07-452a-a62a-aaffa8c42b61` |
| 27992 | Rubber thread and cord, textile covered; textile yarn and strip, impregnated or covered with rubber or plastics | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.rubber-thread-and-cord-textile-covered-textile-yarn-and-strip-impregnated-or-covered-wi-6aa4e1b5` | `45e76d26-21e8-40f1-af58-1cc181d6832f` |

## Consequences

- CPC 3.0 has 319 accepted mappings and 2,558 unmapped leaves.
- The alias registry has 2,558 entries.
- The material catalog has 321 PCRs and 2,557 legacy scaffolds.
