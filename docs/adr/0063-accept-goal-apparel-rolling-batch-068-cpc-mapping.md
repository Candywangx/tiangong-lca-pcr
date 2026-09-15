---
title: Accept Goal apparel rolling batch 068 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal apparel rolling production batch 068
  - when resolving CPC 28243
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0063-accept-goal-apparel-rolling-batch-068-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Apparel Rolling Batch 068 CPC 3.0 Mapping

## Decision

Accept the exact CPC 28243-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` material PCR with a deterministic projection and an 88-card `atomic_flows: v1` inventory. Centralized builder lint introduced no target-specific findings and reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28243 | Apparel and clothing accessories of plastics (incl. gloves) | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.apparel-and-clothing-accessories-of-plastics-incl-gloves` | `8954bc88-041d-4f58-99ce-5d0b20fc794f` |

## Consequences

- CPC 3.0 has 352 accepted mappings and 2,525 unmapped leaves.
- The alias registry has 2,525 entries.
- The material catalog has 354 PCRs and 2,524 legacy scaffolds.
