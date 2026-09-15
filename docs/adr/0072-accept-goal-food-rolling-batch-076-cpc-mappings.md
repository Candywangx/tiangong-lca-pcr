---
title: Accept Goal food rolling batch 076 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 076
  - when resolving CPC 21132, 21139, 21142, 21155, 21156, or 21190
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0072-accept-goal-food-rolling-batch-076-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-20
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 076 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and centrally inspected, repaired where necessary, source-reviewed, and synchronized. Each target is a bilingual candidate material PCR with a deterministic projection and an atomic-flows-v1 inventory.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21132 | Meat of buffalo, frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-buffalo-frozen | 49 | be81d099-544d-4fdf-be56-81f76427d52f |
| 21139 | Other meat of mammals, frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-of-mammals-frozen | 37 | 1fc83e3b-ac93-4d3b-899e-eed337072097 |
| 21142 | Meat of ducks, frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-ducks-frozen | 31 | 658e0f63-44f8-4e3e-aeef-ccf1ab20a13f |
| 21155 | Edible offal of sheep, fresh, chilled or frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-sheep-fresh-chilled-or-frozen | 58 | 1f8ad4d0-18e1-4ee6-8006-0d578c5e07eb |
| 21156 | Edible offal of goat, fresh, chilled or frozen | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-goat-fresh-chilled-or-frozen | 64 | 378f6bb6-a27a-41ef-890a-2243f652a9fc |
| 21190 | Flours, meals and pellets of meat or meat offal, inedible; greaves | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.flours-meals-and-pellets-of-meat-or-meat-offal-inedible-greaves | 33 | c9d74b2c-9179-4330-a54e-f63cc2c86f95 |

## Evidence and Verification

- Retained UN CPC 3.0 source bytes define all six product boundaries.
- Tiangong flow-hybrid-search plus public state-code-100 direct reads confirmed every reference flow as Product/Mass with an exact or explicitly locked route identity and CPC classification.
- Native search and OpenAlex were used for discovery; only official originals and directly checked full text support authored rules. Search snippets, abstracts, and metadata alone support no rule or value.
- Central parser checks confirmed bilingual process and atomic-card coverage; route-level carrier placeholders were not accepted.
- Central structured synchronization passed for all six targets after targeted repairs.

## Consequences

- CPC 3.0 has 400 accepted mappings and 2,477 unmapped leaves.
- The alias registry has 2,477 entries.
- The material catalog has 402 PCRs and 2,476 legacy scaffolds.
