---
title: Accept CPC 3.0 21261 mapping to preserved abalone PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when resolving CPC 3.0 code 21261
  - when auditing the preserved-abalone PCR identity
  - when generating the legacy PCR id alias registry
whenToUpdate:
  - when the CPC 21261 semantic scope or target PCR identity changes
checkPaths:
  - docs/adr/0015-accept-cpc-21261-preserved-abalone-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/meat-fish-fruits-vegetables-oils-and-fats/abalone-frozen-smoked-dried-salted-or-in-brine/**
lastReviewedAt: 2026-08-07
lastReviewedCommit: null
---

# Accept CPC 3.0 21261 Mapping to Preserved Abalone PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `21261`, “Abalone, frozen, smoked, dried, salted or in brine,” to:

`pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.abalone-frozen-smoked-dried-salted-or-in-brine`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived empty scaffold in place as a canonical, classification-independent material PCR. CPC remains mapping
context and does not own the PCR identity.

## Semantic Scope Check

Both sides cover saleable abalone preserved by one or more of freezing, smoking, drying, dry salting, or holding in
brine. The PCR keeps the preservation route, species, origin, product form, packaging, storage condition, geography,
technology, and reference period explicit. It excludes live, fresh, or merely chilled abalone; prepared meals and
compound foods; extracts; animal feed; shells as the reference product; and non-abalone molluscs.

This reviewed semantic boundary is scope-equivalent to normalized CPC 3.0 leaf `21261`. The canonical directory and
PCR id use a semantic product slug without a classification code.

## Methodology Need

Preserved-abalone production needs category-specific rules beyond classification:

- explicit raw reception and preparation, route-specific preservation, and packaging/cold-storage processes;
- route-conditional freezing, smoking, drying, salting, brining, thawing, water, salt, fuel, electricity, packaging,
  wastewater, saline effluent, shell, and product-loss records;
- net saleable mass, species and origin traceability, product-form and route qualifiers, batch mass and salt balances,
  moisture or water-activity evidence when claimed, and storage-temperature records;
- allocation rules for shells, edible coproducts, internal recycle, recovered brine, and shared utilities;
- foreground collection protocols, calculation rules, data-quality requirements, explicitly provisional screening
  ranges, and validation rules.

These rules establish an independent material methodology need; the classification leaf alone did not create the
PCR identity.

## Evidence and Identity Status

The FAO/Codex Code of Practice for Fish and Fishery Products supports the processing sequence and control points for
raw reception, potable water, freezing, frozen storage, salting, drying, smoking, packaging, and storage. Codex CXS
311-2013 supplies conditional smoke-dried fish benchmarks used only when the declared product and jurisdiction make
them applicable. The U.S. FDA Fish and Fishery Products Hazards and Controls Guidance supports recording controls for
temperature, drying, salting, reduced-oxygen packaging, labelling, and batch evidence. ISO 14044:2006 and the EU
Product Environmental Footprint method supply general LCA inventory, allocation, boundary, and data-quality framing.
UNSD CPC 3.0 supplies only the external classification wording.

Tiangong lookup confirms the exact reference product flow
`61e83c4f-6657-4762-9a2b-9423a54b7bd5`, Mass flow property
`93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass unit group
`93a60a57-a4c8-11da-a746-0800200c9a66`, the process identity “Abalone freezing and packaging”
`3bbf3739-f3d0-406b-818e-e3b4587ed621`, and selected public water, salt, packaging, wastewater, shell, wild-abalone,
and electricity flow identities. No suitable farmed live/fresh/chilled abalone product flow was confirmed; that gap
is retained as an explicit review item and the aquaculture-seedling flow is not substituted.

## Consequences

- Deterministic alias regeneration omits the former terminal alias for this PCR id.
- CPC 3.0 coverage resolves `21261` to the candidate material PCR while readiness remains separate from mapping.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The material catalog and accepted CPC mapping each gain one entry after coordinated catalog publication.
- The PCR retains bilingual aligned methodology and a deterministic structured projection.
- Methodology review, farmed raw-material identity completion when applicable, and replacement or acceptance of
  provisional screening ranges remain necessary before active status or publication.
