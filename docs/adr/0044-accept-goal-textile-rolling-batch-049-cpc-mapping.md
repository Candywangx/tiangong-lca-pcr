---
title: Accept Goal textile rolling batch 049 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 049
  - when resolving CPC 27912
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0044-accept-goal-textile-rolling-batch-049-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 049 CPC 3.0 Mapping

## Decision

Accept one exact CPC 3.0-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` / `authored_methodology` material PCR with a deterministic projection and an `atomic_flows: v1` inventory.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 27912 | Tulles, other non-woven/non-knitted/non-crocheted net fabrics, and lace | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.tulles-and-other-net-fabrics-except-woven-knitted-or-crocheted-fabrics-lace-in-the-piec-fbc8e173` | `50009892-d697-4047-8df6-0d07a25cf0bb` |

## Consequences

- CPC 3.0 has 316 accepted mappings and 2,561 unmapped leaves.
- The alias registry has 2,561 entries.
- The material catalog has 318 PCRs and 2,560 legacy scaffolds.
