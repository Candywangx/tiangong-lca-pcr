---
title: Accept Goal headgear rolling batch 065 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal headgear rolling production batch 065
  - when resolving CPC 28261
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0060-accept-goal-headgear-rolling-batch-065-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Headgear Rolling Batch 065 CPC 3.0 Mapping

## Decision

Accept the exact CPC 28261-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` material PCR with a deterministic projection and a 52-card `atomic_flows: v1` inventory. Centralized builder lint introduced no target-specific findings and reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28261 | Hat-forms, hat bodies and hoods of felt; plateaux and manchons of felt; hat-shapes, plaited or made by assembling strips of any material | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.hat-forms-hat-bodies-and-hoods-of-felt-plateaux-and-manchons-of-felt-hat-shapes-plaited-3c814837` | `ef72f4d7-8f9e-401f-bcff-8dc295e94396` |

## Consequences

- CPC 3.0 has 347 accepted mappings and 2,530 unmapped leaves.
- The alias registry has 2,530 entries.
- The material catalog has 349 PCRs and 2,529 legacy scaffolds.
