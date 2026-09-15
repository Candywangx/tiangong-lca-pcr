---
title: Accept Goal food rolling batch 084 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 084
  - when resolving CPC 21119, 21181, 21693, 23530, 23914, or 24131
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
  - when an unresolved Tiangong reference-product flow is confirmed
checkPaths:
  - docs/adr/0082-accept-goal-food-rolling-batch-084-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-24
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 084 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and integrated through the serialized shared-file gate. Each target is a bilingual `candidate` / `authored_methodology` PCR with a current structured projection, an atomic inventory contract, localized Chinese flow displays, and no empirical amount range derived from a single source or single point. Exact reference-product UUIDs remain blank and explicitly unresolved rather than using semantic proxies.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21119 | Other meat of mammals, fresh or chilled | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-of-mammals-fresh-or-chilled` | 74 | unresolved |
| 21181 | Pig meat cuts, salted, dried or smoked (bacon and ham) | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-meat-cuts-salted-dried-or-smoked-bacon-and-ham` | 105 | unresolved |
| 21693 | Modified vegetable oils and fractions | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-oils-and-their-fractions-partly-or-wholly-hydrogenated-inter-esterified-re-es-25ec8f8e` | 67 | unresolved |
| 23530 | Flavoured or coloured refined sugar; maple sugar and syrup | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.refined-cane-or-beet-sugar-in-solid-form-containing-added-flavouring-or-colouring-matte-09d71d87` | 80 | unresolved |
| 23914 | Tea or maté extracts, essences, concentrates and preparations | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.extracts-essences-and-concentrates-of-tea-or-mate-and-preparations-with-a-basis-thereof-d5c511dd` | 110 | unresolved |
| 24131 | Spirits and liqueurs at about 40% alcohol by volume | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.spirits-liqueurs-and-other-spirituous-beverages-of-an-alcoholic-strength-by-volume-of-a-33de9cd9` | 104 | unresolved |

## Verification

- The retained UN CPC 3.0 source defines each full product boundary; broad leaves use an explicitly declared representative product or mutually conditional route instead of combining all products into one default inventory.
- Ordinary web discovery and OpenAlex or paper-search attempts were followed by official-page, DOI, publisher, repository, or full-text verification. Search snippets and abstracts were not accepted as final evidence.
- Tiangong identities were accepted only when an exact public state-code-100 flow was available. No broader, narrower, or process-output proxy was substituted. Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66`, and kg remain the reference basis.
- Dispatcher inspection found equal bilingual card counts and row ordering, localized Chinese card titles, selected-flow names and amount rules, no collection-label inventory flows, zero unsupported amount ranges, current structured fingerprints, and zero target errors.

## Consequences

- Six formerly unmapped CPC leaves become accepted positive mappings to canonical material PCRs.
- Alias, catalog, material index, CPC coverage, and viewer data are regenerated from repository truth.
- Reference-product and inventory UUID follow-up remains explicit and does not authorize fabricated or proxy UUIDs.
- Range warnings remain visible until at least two independent, boundary-compatible original sources support a reasoned range.
