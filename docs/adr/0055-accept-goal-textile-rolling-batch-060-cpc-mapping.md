---
title: Accept Goal textile rolling batch 060 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 060
  - when resolving CPC 28237
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0055-accept-goal-textile-rolling-batch-060-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 060 CPC 3.0 Mapping

## Decision

Accept the exact CPC 28237-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` material PCR with a deterministic projection and a 46-card `atomic_flows: v1` inventory. Centralized builder lint introduced no target-specific findings and reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 28237 | Brassieres, girdles, corsets, braces, suspenders, garters and similar articles and parts thereof, whether or not knitted or crocheted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.brassieres-girdles-corsets-braces-suspenders-garters-and-similar-articles-and-parts-the-6c54077f` | `b1e1a830-20ee-40f3-a59d-87d1dc561706` |

## Consequences

- CPC 3.0 has 339 accepted mappings and 2,538 unmapped leaves.
- The alias registry has 2,538 entries.
- The material catalog has 341 PCRs and 2,537 legacy scaffolds.
