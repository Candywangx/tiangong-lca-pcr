---
title: Accept Goal textile batch 033 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile PCR production batch 033
  - when resolving CPC 26310, 26320, 26340, 26380, 26410, or 26421
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0028-accept-goal-textile-batch-033-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Batch 033 CPC 3.0 Mappings

## Decision

Accept six exact CPC 3.0-to-PCR edges after repository-owner approval of the continuing Worktree Goal workflow and scheduler review of independent desktop-visible Codex tasks. Each accepted target is an in-place promotion of a retained leaf scaffold to one bilingual, four-file, `candidate` / `authored_methodology` PCR.

The scheduler re-ran structured sync in the main repository and applied the `atomic_flows: v1` gate. Inventory rows are atomic, bilingual machine identities are aligned, and unresolved inventory identities remain explicit rather than being replaced with collection labels. Reference products and adopted inventory UUIDs were accepted only after hybrid discovery and direct Tiangong state, type, semantic, property, and unit readback.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 26310 | Silk yarn and yarn spun from silk waste; silk-worn gut | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.silk-yarn-and-yarn-spun-from-silk-waste-silk-worn-gut` | `6c639604-29e8-44b6-be18-4e0ad97fdef8` |
| 26320 | Yarn of wool, containing 85% or more by weight of wool, not put up for retail sale | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-wool-containing-85-or-more-by-weight-of-wool-not-put-up-for-retail-sale` | `10c7de33-bef0-4310-98e7-734d8e2e4c9f` |
| 26340 | Yarn of wool, fine or coarse animal hair, or horse hair | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-wool-not-put-up-for-retail-sale-yarn-of-fine-or-coarse-animal-hair-or-of-horse-3d239b59` | `e4318719-55db-447b-8b6d-08a745a3dfb5` |
| 26380 | Yarn of vegetable textile fibres other than cotton; paper yarn | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-vegetable-textile-fibres-other-than-cotton-including-flax-jute-coir-and-true-he-66566500` | `bf8e0cc2-c99b-43a9-b306-d31a7fb8c11f` |
| 26410 | Sewing thread of man-made filaments or staple fibres | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.sewing-thread-of-man-made-filaments-or-staple-fibres` | `c98c206f-fee3-45d6-9549-b22eeb6b058b` |
| 26421 | Multiple or cabled man-made filament yarn, not put up for retail sale | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-man-made-filaments-multiple-or-cabled-other-than-sewing-thread-high-tenacity-ya-0a2734ab` | `d3526e15-e0a8-4d96-8688-2738fd9d20ba` |

## Rejected or Blocked Candidates

- CPC 26330 was not accepted because the only CPC-labelled candidate directly read back as the semi-finished product “Wool Top”, not the required finished blended wool yarn.
- CPC 26350 was not accepted because the CPC-labelled candidate “Dyed Cotton Yarns” was broader than cotton sewing thread.

## Consequences

- The CPC 3.0 mapping contains 285 accepted positive edges.
- Deterministic alias regeneration removes six accepted targets and leaves 2,592 aliases.
- CPC 3.0 coverage becomes 285 mapped, 2,592 unmapped, and 0 unknown leaves.
- The material catalog contains 287 PCRs; two existing material PCRs remain without accepted CPC mappings.
