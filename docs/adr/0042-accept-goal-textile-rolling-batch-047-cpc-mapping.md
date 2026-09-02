---
title: Accept Goal textile rolling batch 047 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 047
  - when resolving CPC 27320
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0042-accept-goal-textile-rolling-batch-047-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 047 CPC 3.0 Mapping

## Decision

Accept one exact CPC 3.0-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` / `authored_methodology` material PCR with a deterministic projection and an `atomic_flows: v1` inventory.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 27320 | Knotted netting, made-up nets and other articles of twine, cordage or rope | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.knotted-netting-of-twine-cordage-or-rope-made-up-nets-of-textile-materials-articles-of-264039fb` | `e3759580-0bc6-4410-a0fe-f8b239ba715d` |

## Consequences

- CPC 3.0 has 314 accepted mappings and 2,563 unmapped leaves.
- The alias registry has 2,563 entries.
- The material catalog has 316 PCRs and 2,562 legacy scaffolds.
