---
title: Accept food production batch 008 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing food PCR production batch 008
  - when resolving CPC 21431, 21435, 22270, 23992, 23998, or 24499
  - when regenerating aliases, coverage, or the material catalog after this batch
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0024-accept-food-production-batch-008-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/**
lastReviewedAt: 2026-08-10
lastReviewedCommit: null
---

# Accept Food Production Batch 008 CPC 3.0 Mappings

## Decision

Accept the six CPC 3.0-to-PCR edges below after repository-owner approval of the six-Worktree production workflow and scheduler review of each completed visible Codex project task. Each target is a bilingual, four-file, `candidate` / `authored_methodology` PCR with reviewed identity, category scope, source evidence, Tiangong reference flow, structured projection, and target validation findings.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 21431 | Orange juice | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.orange-juice` | `858ebbd0-452b-443d-9964-94ee3f2c1c57` |
| 21435 | Apple juice | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.apple-juice` | `3db6b381-99a9-4976-8955-aa9b65903844` |
| 22270 | Ice cream and other edible ice | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.ice-cream-and-other-edible-ice` | `00b6b084-f103-4934-9d2a-cf449572cf12` |
| 23992 | Soups and broths and preparations thereof | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.soups-and-broths-and-preparations-thereof` | `6cd389be-4748-4401-96a4-ecdc07c041a3` |
| 23998 | Meatless meat and meat substitutes | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.meatless-meat-and-meat-substitutes` | `f072db26-a3e4-4979-b9ad-d883d280bfe6` |
| 24499 | Other non-alcoholic caloric beverages, n.e.c. | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-non-alcoholic-caloric-beverages-n-e-c` | `b6cb89fa-5fac-4d09-85d6-f6e1934200b2` |

## Review Notes

- All six reference flows are public `state_code=100` product flows with the recorded CPC identity and Mass as the quantitative reference property; the support chain resolves to Units of mass and kg.
- Ice cream and carbonated beverage are representative forms inside broader CPC categories. Their PCRs require actual form, recipe, preservation, concentration, and packaging qualifiers where applicable, and require a more specific verified flow to replace the representative UUID.
- The fruit-juice PCRs distinguish direct/NFC, concentrate, and reconstituted routes. Reference quantity is net product mass at the declared factory-gate state; concentration and Brix are disclosed rather than silently normalized.
- Official UNSD, Codex, FAO, EU/JRC, ISO, GHG Protocol, and other authoritative sources are used only for their stated scope. Search snippets are not evidence; HTTP 402 responses from web-search and llm-context were handled by opening official source text or extracting official PDFs.
- No unsupported quantitative range or default was introduced. Values without transferable evidence remain foreground measurements, documented calculations, or explicit data gaps.
- These accepted mappings do not publish the candidate PCRs; methodology review and lifecycle publication remain separate controls.

## Consequences

- The CPC 3.0 mapping contains 143 accepted positive edges after this batch.
- Deterministic alias regeneration removes the six accepted targets' former terminal aliases and leaves 2,734 aliases.
- CPC 3.0 coverage becomes 143 mapped, 2,734 unmapped, and 0 unknown leaves.
- The material catalog contains 145 PCRs.
