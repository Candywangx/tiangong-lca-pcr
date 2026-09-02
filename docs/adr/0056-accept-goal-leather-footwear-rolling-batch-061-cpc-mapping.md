---
title: Accept Goal leather and footwear rolling batch 061 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal leather and footwear rolling production batch 061
  - when resolving CPC 29210
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0056-accept-goal-leather-footwear-rolling-batch-061-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Leather and Footwear Rolling Batch 061 CPC 3.0 Mapping

## Decision

Accept the exact CPC 29210-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` material PCR with a deterministic projection and a 50-card `atomic_flows: v1` inventory. Centralized builder lint introduced no target-specific findings and reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 29210 | Saddlery and harness, for any animal, of any material | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.saddlery-and-harness-for-any-animal-of-any-material` | `850d448a-711c-4151-8745-7aece3fc2acb` |

## Consequences

- CPC 3.0 has 340 accepted mappings and 2,537 unmapped leaves.
- The alias registry has 2,537 entries.
- The material catalog has 342 PCRs and 2,536 legacy scaffolds.
