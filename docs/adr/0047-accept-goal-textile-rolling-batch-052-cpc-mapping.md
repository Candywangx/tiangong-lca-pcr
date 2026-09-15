---
title: Accept Goal textile rolling batch 052 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 052
  - when resolving CPC 27921
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0047-accept-goal-textile-rolling-batch-052-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 052 CPC 3.0 Mapping

## Decision

Accept one exact CPC 3.0-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` / `authored_methodology` material PCR with a deterministic projection and an `atomic_flows: v1` inventory.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 27921 | Felt | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.felt` | `144717eb-3301-402a-89c8-3ba5a969425a` |

## Consequences

- CPC 3.0 has 320 accepted mappings and 2,557 unmapped leaves.
- The alias registry has 2,557 entries.
- The material catalog has 322 PCRs and 2,556 legacy scaffolds.
