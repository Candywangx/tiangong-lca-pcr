---
title: Accept CPC 3.0 04452 mapping to farmed clams, cockles and ark shells PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-07-24
---

# Accept CPC 3.0 04452 Mapping to Farmed Clams, Cockles and Ark Shells PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `04452`, "Farmed clams, cockles and ark shells, live, fresh or chilled", to:

`pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-clams-cockles-and-ark-shells-live-fresh-or-chilled`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived scaffold in place as a canonical, classification-independent material PCR; CPC remains mapping context
and does not own the PCR identity.

## Semantic Scope Check

The PCR covers farmed clams, cockles and ark shells supplied live, fresh or chilled, in shell, from grow-out
aquaculture through landing-site handling. It excludes wild-caught clams, cockles and ark shells (CPC 04451),
frozen, smoked, dried, salted or in-brine products, processed clam meat, and live clams supplied as seed, bait or
for ornamental use. That boundary is scope-equivalent to the normalized CPC 3.0 leaf `04452`.

The canonical slug is semantic and contains no classification code. The record contains the four required files,
an authored English methodology, an aligned Chinese rendering, a deterministic structured projection, and the
confirmed TianGong reference product-flow identity.

## Methodology Need

Farmed clams, cockles and ark shells need category-specific rules that are not supplied by classification alone:

- a landing-site-gate functional unit expressed as 1 kg drained live weight in shell;
- a declared starting condition at clam seed (spat) delivered to the grow-out farm, with a same-category recursive
  input rule for live clams moved between farms;
- grow-out, harvesting, and landing-site washing, depuration, grading and chilling process boundaries;
- nutrient balance rules for net nitrogen and phosphorus exchange with coastal water, including net removal by
  filter-feeding stock;
- economic-value allocation for shared inputs in multi-species polyculture;
- foreground stocking, fertilization, fuel, electricity, gear, harvest, handling, and effluent collection protocols;
- explicit data-quality, normalization, mass-closure, and publication validation rules.

These rules establish a material methodology need independent of CPC coverage.

## Evidence and Identity

The reference product flow was selected and confirmed through the sibling TianGong CLI as
`Farmed clams, cockles and ark shells, live, fresh or chilled`, UUID
`4a6625c6-2c26-4618-aaab-4ea8949e5635`, with Mass flow property UUID
`93a60a56-a3c8-11da-a746-0800200b9a66` and Units of mass unit group UUID
`93a60a57-a4c8-11da-a746-0800200c9a66`. The PCR cites CPC Version 3.0, the FAO Cultured Aquatic Species
Information Programme fact sheet for Ruditapes philippinarum, FAO FishStat aquaculture production statistics, and
ISO 14044:2006 for its identity, process decomposition, market state, and allocation constraints. Provisional
quantity guardrails are labelled `reasoned_estimate` and remain replaceable by reviewed evidence; five flow
candidates without a confirmed Tiangong UUID are tracked in `manifest.yaml` review metadata for re-lookup before
publication.

## Consequences

- The old terminal alias for the same PCR id is omitted by deterministic alias regeneration.
- CPC 3.0 coverage resolves `04452` to this material PCR.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The material catalog and accepted CPC mapping each gain one entry.
- CPC 3.0 coverage becomes 6 mapped, 2,871 unmapped, and 0 unknown across 2,877 leaves.
- The legacy alias registry becomes 2,871 terminal locators.
- The PCR remains `candidate / authored_methodology` with an aligned Chinese rendering until a separate methodology
  review authorizes `active / reviewed_methodology`.
