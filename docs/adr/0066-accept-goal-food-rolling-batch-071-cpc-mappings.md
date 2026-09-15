---
title: Accept Goal food rolling batch 071 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 071
  - when resolving CPC 21137, 21138, 21143, 21144, 21145, or 21151
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0066-accept-goal-food-rolling-batch-071-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 071 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Each target is a bilingual candidate material PCR with a deterministic projection and an atomic-flows-v1 inventory. Central lint found no target-specific error; only the repository-owner-excluded CPC 01961 and CPC 01962 baseline remains.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21137 | Meat of camels and camelids, frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-camels-and-camelids-frozen | 207 | 75e4eb25-986c-4684-ad73-33ba3528f571 |
| 21138 | Meat of horses and other equines, frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-horses-and-other-equines-frozen | 151 | b1d61fc0-90f2-4ef0-959b-b62596caca1a |
| 21143 | Meat of geese, frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-geese-frozen | 206 | db06aea8-9943-4aac-b938-0c63d670a883 |
| 21144 | Meat of turkeys, frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-turkeys-frozen | 190 | 2cf4dbce-c2cf-4ca6-a1bc-5366fad13063 |
| 21145 | Meat of guinea fowl, frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-guinea-fowl-frozen | 163 | 4671befd-6e3d-446b-a29e-d8db90e539ef |
| 21151 | Edible offal of cattle, fresh, chilled or frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-cattle-fresh-chilled-or-frozen | 163 | a6673976-2ef4-4502-b9f5-bbc57099bb40 |

## Evidence and Verification

- UN CPC 3.0 and the retained exact-byte source define each product leaf and its exclusions.
- Tiangong flow-hybrid-search and public state-code-100 direct reads confirmed an exact Product flow with Mass and kg for every reference product.
- EC JRC SA BREF JRC135916, DOI 10.2760/18199, supports process, utility, cleaning, wastewater, co-product, waste, and direct-emission structure.
- Recommendation (EU) 2021/2279 supports company-specific foreground data, complete LCI, allocation, transparency, data quality, and verification.

## Consequences

- CPC 3.0 has 370 accepted mappings and 2,507 unmapped leaves.
- The alias registry has 2,507 entries.
- The material catalog has 372 PCRs and 2,506 legacy scaffolds.
