---
title: Accept Goal food rolling batch 074 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 074
  - when resolving CPC 23130, 23320, 23922, 23924, 23926, or 23927
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0070-accept-goal-food-rolling-batch-074-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 074 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and centrally inspected and synchronized. Each target is a bilingual candidate material PCR with a deterministic projection and atomic-flows-v1 inventory.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 23130 | Groats, meal and pellets of wheat and other cereals | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.groats-meal-and-pellets-of-wheat-and-other-cereals | 373 | d38c3022-dc92-41e0-83b7-6bc99fa5b392 |
| 23320 | Lucerne (alfalfa) meal and pellets | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.lucerne-alfalfa-meal-and-pellets | 94 | f984b084-e66e-4d11-8365-354ae0ad5a74 |
| 23922 | Chillies and peppers, dry (capsicum spp., pimenta), processed | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chillies-and-peppers-dry-capsicum-spp-pimenta-processed | 110 | fa9bf702-43d4-414e-a2da-0dad135e5df7 |
| 23924 | Anise, badian, coriander, cumin, caraway, fennel and juniper berries, processed | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.anise-badian-coriander-cumin-caraway-fennel-and-juniper-berries-processed | 182 | 1ae74dcb-8fbf-4b6d-a2d4-d2effa668cce |
| 23926 | Cloves (whole stems), processed | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cloves-whole-stems-processed | 167 | c848928e-35e4-4713-aba4-2f2d01ac641d |
| 23927 | Ginger, processed | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.ginger-processed | 217 | 5dfbf3ec-4630-4bae-bbc6-fc931194cf64 |

## Evidence and Verification

- Retained UN CPC 3.0 source bytes define all six product boundaries.
- Tiangong flow-hybrid-search plus public state-code-100 direct reads confirmed every reference flow as Product/Mass with exact base name and CPC.
- The CPC 23320 flow general comment incorrectly contains the unrelated heading "234 Bakery products"; the exact base name and CPC classification establish identity, and the defect is recorded rather than imported into methodology.
- Official UN, Codex, FAO, JRC, EU BAT/PEF, EPA, and applicable technical sources support the category-specific process and inventory structures.
- Central parser checks confirmed bilingual row order, process, direction, flow type, protocol and UUID parity; aggregate placeholder flow names were absent.
- Central structured synchronization passed for all six targets.

## Consequences

- CPC 3.0 has 388 accepted mappings and 2,489 unmapped leaves.
- The alias registry has 2,489 entries.
- The material catalog has 390 PCRs and 2,488 legacy scaffolds.
