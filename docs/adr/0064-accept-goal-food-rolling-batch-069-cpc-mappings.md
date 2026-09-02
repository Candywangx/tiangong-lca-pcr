---
title: Accept Goal food rolling batch 069 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 069
  - when resolving CPC 21112 or CPC 21114 through CPC 21118
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0064-accept-goal-food-rolling-batch-069-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 069 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges generated in six independent desktop-visible Worktrees and synchronized by the rolling scheduler. Each target is a bilingual `candidate` material PCR with a deterministic projection and an `atomic_flows: v1` inventory. Centralized builder lint introduced no target-specific findings and reported only the repository-owner-excluded CPC 01961 and CPC 01962 baseline findings.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21112 | Meat of buffalo, fresh or chilled | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-buffalo-fresh-or-chilled` | 59 | `e96ba1cf-ce0b-4a35-ac5b-8cabebb56116` |
| 21114 | Meat of rabbits and hares, fresh or chilled | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-rabbits-and-hares-fresh-or-chilled` | 100 | `6fb95713-8813-4a4e-a0cd-1a3139e8347a` |
| 21115 | Meat of sheep, fresh or chilled | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-sheep-fresh-or-chilled` | 67 | `f77c69e0-fe2f-421a-9f33-23b4a09bd9ba` |
| 21116 | Meat of goat, fresh or chilled | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-goat-fresh-or-chilled` | 66 | `20b4b0eb-d827-48d9-b744-d54842ba57ef` |
| 21117 | Meat of camels and camelids, fresh or chilled | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-camels-and-camelids-fresh-or-chilled` | 94 | `43edde93-b716-4329-93a4-2eb708e1e7e3` |
| 21118 | Meat of horses and other equines, fresh or chilled | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-horses-and-other-equines-fresh-or-chilled` | 72 | `ac93b427-13d9-411d-9521-36baea644bb5` |

## Evidence and Verification

- UN CPC 3.0 and the retained exact-byte CPC source define the six fresh-or-chilled product leaves and distinguish them from frozen meat and edible offal.
- Tiangong flow-hybrid-search and public state-code-100 direct reads confirmed one exact Product flow with Mass and kg for each accepted reference product.
- EC JRC SA BREF JRC135916, DOI 10.2760/18199, supports the slaughterhouse, cutting, chilling, cleaning, utility, wastewater, by-product, waste, and direct-emission process structure.
- Recommendation (EU) 2021/2279 supports the company-specific foreground data, complete LCI, allocation, transparency, data-quality, and verification rules.

## Consequences

- CPC 3.0 has 358 accepted mappings and 2,519 unmapped leaves.
- The alias registry has 2,519 entries.
- The material catalog has 360 PCRs and 2,518 legacy scaffolds.
