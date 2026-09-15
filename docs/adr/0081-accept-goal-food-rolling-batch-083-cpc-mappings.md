---
title: Accept Goal food rolling batch 083 CPC 3.0 mappings and repairs
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 083
  - when resolving CPC 21681, 22300, 23511, or 23911
  - when auditing the CPC 22221 or 21267 quality repairs
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
  - when an unresolved Tiangong reference-product flow is confirmed
checkPaths:
  - docs/adr/0081-accept-goal-food-rolling-batch-083-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-24
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 083 CPC 3.0 Mappings and Repairs

## Decision

Accept four exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and integrate two independently inspected quality repairs in the same serialized snapshot. Each new target is a bilingual `candidate` / `authored_methodology` PCR with a current structured projection, atomic inventory, and localized Chinese flow displays. An exact reference-product UUID may remain blank only when `reference_product_flow_uuid` is explicitly registered as unresolved.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21681 | Cottonseed oil, crude | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cottonseed-oil-crude` | 53 | unresolved |
| 22300 | Eggs, in shell, preserved or cooked | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.eggs-in-shell-preserved-or-cooked` | 70 | unresolved |
| 23511 | Cane sugar | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cane-sugar` | 78 | unresolved |
| 23911 | Coffee, decaffeinated or roasted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.coffee-decaffeinated-or-roasted` | 73 | unresolved |

## Integrated Repairs

| CPC | Product | Change | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 22221 | Evaporated milk | Replaced coarse inventory and unsupported empirical ranges with an atomic dairy-process inventory; retained only the exact 1 kg reference-output normalization identity. | 83 | `e59aaeef-61a7-45af-b252-d70036a584d3` |
| 21267 | Octopus, frozen, smoked, dried, salted or in brine | Replaced the 37-card aggregate preservation inventory with 100 atomic cards across mutually conditional preparation, freezing, smoking, drying, salting/brining, packaging, sanitation, and wastewater routes. | 100 | `5c8cdbc1-2f53-47ac-aa4a-e44125c18761` |

The pre-integration bytes of these two dirty main-worktree targets were preserved without touching unrelated modifications in branch `codex/backup-main-dirty-b083-overlap` at commit `e5af7b27084da00af1a87a61931a79ad9e6a215a`.

## Verification

- The retained UN CPC 3.0 source defines each complete product boundary. Each target was checked against its full leaf rather than a narrow example.
- Ordinary web discovery and OpenAlex or paper-search attempts were followed by official-page, DOI, publisher, repository, or full-text verification. Search snippets and abstracts were not accepted as final evidence.
- Tiangong candidates were accepted only after public state-code-100 direct reads. No semantically broader or narrower product flow was substituted. Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg remain the reference basis.
- Dispatcher inspection found equal bilingual card counts and row ordering, localized Chinese card titles, selected-flow names and amount rules, no aggregate collection-label flows, no unsupported empirical ranges, current structured fingerprints, and zero target errors after deferred reference-flow identities were registered correctly.

## Consequences

- Four formerly unmapped CPC leaves become accepted positive mappings to canonical material PCRs.
- Existing accepted mappings for CPC 22221 and 21267 remain unchanged while their canonical PCR content is materially repaired.
- Alias, catalog, material index, CPC coverage, and viewer data are regenerated from repository truth.
- Unresolved product-flow UUIDs and empirical range evidence remain explicit follow-up work and do not authorize proxy UUIDs or fabricated ranges.
