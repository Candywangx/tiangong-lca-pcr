---
title: Accept Goal food rolling batch 075 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 075
  - when resolving CPC 23180, 23921, 23923, 23925, 23928, or 23993
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0071-accept-goal-food-rolling-batch-075-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 075 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and centrally inspected, repaired where necessary, and synchronized. Each target is a bilingual candidate material PCR with a deterministic projection and an atomic-flows-v1 inventory.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 23180 | Mixes and doughs for the preparation of bakers' wares | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.mixes-and-doughs-for-the-preparation-of-bakers-wares | 94 | 0252f353-8398-4eab-9e26-6a13e4b4f06b |
| 23921 | Pepper (Piper spp.), processed | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.pepper-piper-spp-processed | 130 | 99d5d3c5-870f-458f-b492-a610d37c8034 |
| 23923 | Nutmeg, mace, cardamoms, processed | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.nutmeg-mace-cardamoms-processed | 38 | 55268cb7-f7b1-4d34-9c53-cc3f158b52d8 |
| 23925 | Cinnamon (canella), processed | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cinnamon-canella-processed | 40 | 3955425f-128e-48d4-b46e-04bf9ee70c22 |
| 23928 | Vanilla, processed | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.vanilla-processed | 66 | 34e7961c-4ef0-42f4-a62c-6231e257cd65 |
| 23993 | Eggs, not in shell, and egg yolks, fresh or preserved; egg albumin | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.eggs-not-in-shell-and-egg-yolks-fresh-or-preserved-egg-albumin | 46 | 8ee52550-935f-4209-b758-c2d060bba326 |

## Evidence and Verification

- Retained UN CPC 3.0 source bytes define all six product boundaries.
- Tiangong flow-hybrid-search plus public state-code-100 direct reads confirmed every reference flow as Product/Mass with exact base name and CPC.
- The CPC 23180 flow general comment incorrectly contains the unrelated heading "232 Starches and starch products, sugars and sugar syrups n.e.c."; exact base name, flow type, reference property, and CPC classification establish identity, and the defect is recorded rather than used as methodology evidence.
- Official UN, Codex, FAO, JRC, EU BAT/PEF, EPA, and applicable technical sources support category-specific process and inventory structures.
- Central parser checks confirmed bilingual row order, process, direction, flow type, protocol, description, and UUID parity; aggregate placeholder flow names were absent.
- Central repairs supplied missing per-card descriptions and corrected two malformed validation-source fields without changing atomic flow identities.
- Central structured synchronization passed for all six targets.

## Consequences

- CPC 3.0 has 394 accepted mappings and 2,483 unmapped leaves.
- The alias registry has 2,483 entries.
- The material catalog has 396 PCRs and 2,482 legacy scaffolds.
