---
title: Accept Goal food rolling batch 072 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 072
  - when resolving CPC 21153, 21160, 21170, 21182, 21183, or 21184
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0068-accept-goal-food-rolling-batch-072-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 072 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and synchronized by the rolling scheduler. Each target is a bilingual candidate material PCR with a deterministic projection and an atomic-flows-v1 inventory. CPC 21184 required one central contract repair that replaced bilingual display phrases in Process Map inclusion cells with the controlled tokens `required` and `conditional`; structured synchronization then passed.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21153 | Edible offal of pigs, fresh, chilled or frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-pigs-fresh-chilled-or-frozen | 423 | 17a80845-90d9-42a4-8a70-fee47fe2b380 |
| 21160 | Edible offal of poultry, fresh, chilled or frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-poultry-fresh-chilled-or-frozen | 212 | c294500e-2de6-44fd-a578-a1534dafb1b4 |
| 21170 | Other meat and edible offal, fresh, chilled or frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-and-edible-offal-fresh-chilled-or-frozen | 676 | e67d4710-2094-4972-85a2-9e593546ae82 |
| 21182 | Bovine meat, salted, dried or smoked | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.bovine-meat-salted-dried-or-smoked | 221 | b022bdb0-0f92-4323-b5eb-2c5fb085bd19 |
| 21183 | Other meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-and-edible-meat-offal-salted-in-brine-dried-or-smoked-edible-flours-and-meal-032a0c3c | 314 | 47ac991c-00e2-4c29-8df0-7a7b867c3e97 |
| 21184 | Sausages and similar products of meat, offal or blood | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sausages-and-similar-products-of-meat-offal-or-blood | 433 | d4e41d5c-a905-4fb7-ad9d-8f442be1f833 |

## Evidence and Verification

- The retained exact-byte UN CPC 3.0 source defines every leaf boundary and exclusion.
- Tiangong flow-hybrid-search plus public state-code-100 direct reads confirmed an exact Product flow with Mass for every reference product.
- Official JRC, EU PEF, Codex, FAO, and route-specific regulatory or technical sources support the process, inventory, data-quality, and validation rules recorded by each PCR.
- The central scheduler generated every `structured.yaml` and rejects non-controlled machine values before projection replacement.

## Consequences

- CPC 3.0 has 377 accepted mappings and 2,500 unmapped leaves.
- The alias registry has 2,500 entries.
- The material catalog has 379 PCRs and 2,499 legacy scaffolds.
