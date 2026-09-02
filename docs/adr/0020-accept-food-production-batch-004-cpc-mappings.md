---
title: Accept food production batch 004 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing food PCR production batch 004
  - when resolving CPC 21631, 21632, 21641, 21652, 21662, or 21672
  - when regenerating aliases, coverage, or the material catalog after this batch
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0020-accept-food-production-batch-004-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/**
lastReviewedAt: 2026-08-10
lastReviewedCommit: null
---

# Accept Food Production Batch 004 CPC 3.0 Mappings

## Decision

Accept the six CPC 3.0-to-PCR edges below after repository-owner approval of the six-Worktree food production workflow and scheduler review of every completed author task. Each accepted target is a bilingual, four-file, `candidate` / `authored_methodology` PCR whose canonical identity, CPC scope, source evidence, Tiangong reference flow, structured projection, and target validation findings were reviewed.

The accepted edges are recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This ADR is their durable acceptance reference.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 21631 | Sunflower-seed and safflower-seed oil, crude | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sunflower-seed-and-safflower-seed-oil-crude` | `e48ecaca-7bfe-427a-a117-7eeeb8253565` |
| 21632 | Sunflower-seed and safflower-seed oil, refined | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sunflower-seed-and-safflower-seed-oil-refined` | `1b88e515-861e-4552-b494-67bb3d645aa7` |
| 21641 | Rape, colza and mustard oil, crude | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rape-colza-and-mustard-oil-crude` | `092932e3-7b6d-430d-b6e5-722b8f4e1c6d` |
| 21652 | Palm oil, refined | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.palm-oil-refined` | `029b6008-a809-4d77-8612-47451f7c98fa` |
| 21662 | Coconut oil, refined | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.coconut-oil-refined` | `570397b9-62ae-4576-b584-56691c7fed08` |
| 21672 | Olive oil, refined | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.olive-oil-refined` | `4637b050-f60f-4ebb-af43-5128ebf416bf` |

## Review Notes

- All six product flows are public `state_code=100` product flows with exact CPC/product-form semantics and Mass as the quantitative reference property.
- Public process identities were used only where their product identity was independently confirmed; private drafts, semantically incorrect inventories, and unreviewed process quantities were excluded.
- Numeric values without sufficiently strong category-specific evidence remain explicit, replaceable `reasoned_estimate` QA ranges rather than production defaults.
- The accepted mappings do not publish these candidate PCRs; methodology review and lifecycle publication remain separate controls.

## Consequences

- The CPC 3.0 mapping contains 121 accepted positive edges after this batch.
- Deterministic alias regeneration removes the six accepted targets' former terminal aliases and leaves 2,756 aliases.
- CPC 3.0 coverage becomes 121 mapped, 2,756 unmapped, and 0 unknown leaves.
- The material catalog contains 123 PCRs.
