---
title: Accept Goal textile rolling batch 050 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 050
  - when resolving CPC 27913
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0045-accept-goal-textile-rolling-batch-050-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 050 CPC 3.0 Mapping

## Decision

Accept one exact CPC 3.0-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` / `authored_methodology` material PCR with a deterministic projection and an `atomic_flows: v1` inventory.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 27913 | Embroidery in the piece, in strips or in motifs | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.embroidery-in-the-piece-in-strips-or-in-motifs` | `0fed9734-6186-489c-a6a0-cca6894e944d` |

## Consequences

- CPC 3.0 has 317 accepted mappings and 2,560 unmapped leaves.
- The alias registry has 2,560 entries.
- The material catalog has 319 PCRs and 2,559 legacy scaffolds.
