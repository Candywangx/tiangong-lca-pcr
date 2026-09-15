---
title: Accept CPC 3.0 21590 mapping to modified animal fats PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-08-07
---

# Accept CPC 3.0 21590 Mapping to Modified Animal Fats PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `21590`, “Animal fats and their fractions, partly or wholly
hydrogenated, inter-esterified, re-esterified or elaidinised, whether or not refined, but not further prepared,” to:

`pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.animal-fats-and-their-fractions-partly-or-wholly-hydrogenated-inter-esterified-re-ester-b1928cc5`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived empty scaffold in place as a canonical, classification-independent material PCR. CPC remains mapping
context and does not own the PCR identity.

## Semantic Scope Check

Both sides cover bulk animal fats and animal-fat fractions modified by partial or complete hydrogenation, chemical
or enzymatic interesterification, re-esterification, elaidinisation, or a declared combination, including refined
forms that have not been further prepared. The PCR separately excludes unmodified rendered fats, vegetable or
microbial fats, formulated shortenings and spreads, finished foods, fatty-acid products, biodiesel, and hydrotreated
fuels. Its required qualifiers preserve source animal or source-fat family, route sequence, degree of modification,
grade, refining state, specification, geography, technology, period, and delivery state.

This reviewed semantic boundary is scope-equivalent to normalized CPC 3.0 leaf `21590`. The canonical directory and
PCR id use a semantic product slug without a classification code.

## Methodology Need

Modified animal-fat production needs category-specific rules beyond classification:

- separate conditioning, hydrogenation, non-hydrogenation modification, and finishing processes;
- route-conditional hydrogen, nickel catalyst, enzyme, reagent, recovery, filtration, bleaching, deodorisation,
  vacuum, wastewater, residue, and direct-release records;
- source-fat traceability, route and grade qualifiers, batch-normalized mass, hydrogen and water balances, catalyst
  recovery, and product-conformity evidence;
- explicit allocation hierarchy for shared utilities, recovered fat, catalyst, residues, internal recycle, and
  multifunctional operations;
- foreground collection protocols, calculation rules, data-quality requirements, provisional-range disclosure, and
  validation rules.

These rules establish an independent material methodology need; the classification leaf alone did not create the
PCR identity.

## Evidence and Identity Status

Codex CXS 211-1999 and Regulation (EC) No 853/2004 support animal-fat source identity, raw-material eligibility,
hygienic handling, rendering and refining context. The European Commission JRC Food, Drink and Milk BREF
(JRC118627, 2019) supports the route decomposition for hydrogenation, interesterification, nickel catalyst,
filtration, bleaching, deodorisation, vacuum, catalyst recovery and technique-specific wastewater. Commission
Recommendation (EU) 2021/2279 supports functional-unit completeness, foreground-data quality, cut-off disclosure,
system boundary and allocation hierarchy. UNSD CPC 3.0 supplies only the external classification wording.

Tiangong lookup confirms the exact CPC-matched reference product flow
`d4cec444-0873-445d-b0ef-04e9c796eced`, Mass flow property
`93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass unit group
`93a60a57-a4c8-11da-a746-0800200c9a66`, and selected public utility, material, wastewater, catalyst and elementary
flows. The exact reference flow currently contains an incorrect general-comment reference to “216 Vegetable oils”;
the manifest records that data-quality issue. The two exact Tiangong process candidates are draft identity findings
only. A generic route-appropriate purchased-hydrogen product flow and several route-specific reagent and residue
flows remain unresolved and are explicit review items, not invented proxies.

## Consequences

- Deterministic alias regeneration omits the former terminal alias for this PCR id.
- CPC 3.0 coverage resolves `21590` to the candidate material PCR while readiness remains separate from mapping.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The material catalog and accepted CPC mapping each gain one entry after coordinated catalog publication.
- The PCR retains bilingual aligned methodology and a deterministic structured projection.
- Methodology review, route-specific identity completion, provisional-range replacement where publication-critical,
  and correction or review of the Tiangong reference-flow comment remain necessary before active status or
  publication.
