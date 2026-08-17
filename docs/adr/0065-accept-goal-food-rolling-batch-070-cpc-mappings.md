---
title: Accept Goal food rolling batch 070 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 070
  - when resolving CPC 21123 through CPC 21125 or CPC 21134 through CPC 21136
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0065-accept-goal-food-rolling-batch-070-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 070 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges generated in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Each target is a bilingual `candidate` material PCR with a deterministic projection and an `atomic_flows: v1` inventory. Central validation found no target-specific PCR lint error; the only remaining PCR lint findings are the repository-owner-excluded CPC 01961 and CPC 01962 baseline.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21123 | Meat of geese, fresh or chilled | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-geese-fresh-or-chilled` | 160 | `a2ca6142-7a35-485f-85fd-3f19301fa6c5` |
| 21124 | Meat of turkeys, fresh or chilled | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-turkeys-fresh-or-chilled` | 166 | `653bdb6e-5456-4a7d-88d3-8493b1f27bc7` |
| 21125 | Meat of guinea fowl, fresh or chilled | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-guinea-fowl-fresh-or-chilled` | 148 | `8c683807-f79b-46a9-90e4-c005d506a98a` |
| 21134 | Meat of rabbits and hares, frozen | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-rabbits-and-hares-frozen` | 220 | `0204bc38-8047-4cbb-99cc-2cd7c41c626d` |
| 21135 | Meat of sheep, frozen | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-sheep-frozen` | 147 | `7a898ac1-b845-4943-bae3-94e7c24ae06d` |
| 21136 | Meat of goat, frozen | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-goat-frozen` | 102 | `cf1026b3-d517-4896-b54b-0ba4e919a40b` |

## Evidence and Verification

- UN CPC 3.0 and the retained exact-byte CPC source define the fresh-or-chilled and frozen product leaves and their explicit exclusions.
- Tiangong flow-hybrid-search and public state-code-100 direct reads confirmed one exact Product flow with Mass and kg for every accepted reference product.
- EC JRC SA BREF JRC135916, DOI 10.2760/18199, supports slaughter, dressing, cutting, chilling or freezing, cleaning, utility, wastewater, by-product, waste, and direct-emission process structure.
- Recommendation (EU) 2021/2279 supports company-specific foreground data, complete LCI, allocation, transparency, data-quality, and verification rules.

## Consequences

- CPC 3.0 has 364 accepted mappings and 2,513 unmapped leaves.
- The alias registry has 2,513 entries.
- The material catalog has 366 PCRs and 2,512 legacy scaffolds.
