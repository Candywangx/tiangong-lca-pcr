---
title: Accept food production batch 007 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing food PCR production batch 007
  - when resolving CPC 23210, 23220, 23710, 23913, 23994, or 23996
  - when regenerating aliases, coverage, or the material catalog after this batch
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0023-accept-food-production-batch-007-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/**
lastReviewedAt: 2026-08-10
lastReviewedCommit: null
---

# Accept Food Production Batch 007 CPC 3.0 Mappings

## Decision

Accept the six CPC 3.0-to-PCR edges below after repository-owner approval of the six-Worktree production workflow and scheduler review of each completed visible Codex project task. Each target is a bilingual, four-file, `candidate` / `authored_methodology` PCR with reviewed identity, category scope, source evidence, Tiangong reference flow, structured projection, and target validation findings.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 23210 | Glucose and glucose syrup; fructose and fructose syrup; lactose and lactose syrup; invert sugar; sugars and sugar syrups n.e.c.; artificial honey; caramel | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.glucose-and-glucose-syrup-fructose-and-fructose-syrup-lactose-and-lactose-syrup-invert-dfd54172` | `8f56ee97-f5f8-4685-a958-74f586b40cd9` |
| 23220 | Starches; inulin; wheat gluten; dextrins and other modified starches | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.starches-inulin-wheat-gluten-dextrins-and-other-modified-starches` | `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3` |
| 23710 | Uncooked pasta, not stuffed or otherwise prepared | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.uncooked-pasta-not-stuffed-or-otherwise-prepared` | `540fef24-1038-48b8-8ee1-8cc415df780a` |
| 23913 | Green tea, black tea and partly fermented tea in immediate packings not exceeding 3 kg | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.green-tea-not-fermented-black-tea-fermented-and-partly-fermented-tea-in-immediate-packi-1fac4f77` | `549f6c0d-6dd6-488d-a7c4-b1d5821fe309` |
| 23994 | Vinegar and substitutes therefor obtained from acetic acid | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.vinegar-and-substitutes-therefor-obtained-from-acetic-acid` | `20393649-bcc3-43f0-a2df-1a99c0005e29` |
| 23996 | Yeasts; dead single-cell microorganisms; prepared baking powders | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.yeasts-active-or-inactive-other-single-cell-micro-organisms-dead-prepared-baking-powders` | `3ea5b163-5e50-4f40-bf13-8a6c3f10d1b6` |

## Review Notes

- All six reference flows are public `state_code=100` product flows with CPC identity and Mass as the quantitative reference property; the support chain resolves to Units of mass and kg.
- Dextrose monohydrate, generic starch, semi-dried noodles, and dried feed-grade yeast are representative forms within broader CPC categories. Their PCRs require the actual product form to be declared and the UUID to be replaced when a more specific real flow exists.
- The tea and vinegar flows match the CPC category but still require route, form, composition, and packaging qualifiers where relevant.
- Official UNSD, Codex, EU, EPA, FAO, JRC, ISO, and other authoritative evidence is used only for its stated scope. Search snippets are not evidence; HTTP 402 responses from web-search and llm-context were handled by opening official source text or extracting official PDFs.
- No unsupported quantitative range or default was introduced. Values without transferable evidence remain foreground measurements, documented calculations, or explicit data gaps.
- These accepted mappings do not publish the candidate PCRs; methodology review and lifecycle publication remain separate controls.

## Consequences

- The CPC 3.0 mapping contains 137 accepted positive edges after this batch.
- Deterministic alias regeneration removes the six accepted targets' former terminal aliases and leaves 2,740 aliases.
- CPC 3.0 coverage becomes 137 mapped, 2,740 unmapped, and 0 unknown leaves.
- The material catalog contains 139 PCRs.
