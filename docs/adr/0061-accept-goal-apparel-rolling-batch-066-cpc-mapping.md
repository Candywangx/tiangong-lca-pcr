---
title: Accept Goal apparel rolling batch 066 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal apparel rolling production batch 066
  - when resolving CPC 28250
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0061-accept-goal-apparel-rolling-batch-066-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Apparel Rolling Batch 066 CPC 3.0 Mapping

## Decision

Accept the exact CPC 28250-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` material PCR with a deterministic projection and a 53-card `atomic_flows: v1` inventory. Centralized builder lint introduced no target-specific findings and reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28250 | Garments made up of felt or nonwovens; garments made up of textile fabrics impregnated or coated with plastics, rubber or other materials | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.garments-made-up-of-felt-or-nonwovens-garments-made-up-of-textile-fabrics-impregnated-o-38230521` | `3c972aa8-6aa5-4724-8a61-694aef1b09fe` |

## Consequences

- CPC 3.0 has 348 accepted mappings and 2,529 unmapped leaves.
- The alias registry has 2,529 entries.
- The material catalog has 350 PCRs and 2,528 legacy scaffolds.
