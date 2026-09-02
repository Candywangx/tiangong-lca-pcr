---
title: Accept CPC 3.0 23319 mapping to preparations used in animal feeding n.e.c. PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-07-25
---

# Accept CPC 3.0 23319 Mapping to Preparations Used in Animal Feeding n.e.c. PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `23319`, "Preparations used in animal feeding n.e.c.", to:

`pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.preparations-used-in-animal-feeding-n-e-c`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived scaffold in place as a canonical, classification-independent material PCR; CPC remains mapping context
and does not own the PCR identity.

## Semantic Scope Check

The PCR covers industrially manufactured complete and complementary compound feeds for livestock, poultry,
aquaculture and other non-pet animals, supplied as mash, meal, pellets, crumbles, or extruded feed. It excludes
retail dog or cat food (CPC 23311), lucerne (alfalfa) meal and pellets (CPC 23312), single feed materials,
stand-alone feed additives and premixtures, medicated feed, silage and forage, on-farm home mixing, and the animal
use phase. That boundary is scope-equivalent to the normalized CPC 3.0 leaf `23319`.

The canonical slug is semantic and contains no classification code. The record contains the four required files,
an authored English methodology, an aligned Chinese rendering, a deterministic structured projection, and the
confirmed TianGong reference product-flow identity.

## Methodology Need

Compound feed manufacture needs category-specific rules that are not supplied by classification alone:

- a dispatch-gate functional unit expressed as 1,000 kg of conforming compound feed on an as-fed basis;
- a declared starting condition at feed materials, additives, and packaging received at the feed-mill gate, with a
  same-category recursive input rule for fines, rework, and purchased compound feed used as an ingredient;
- a six-process foreground map with conditional inclusion of grinding, conditioning/pelleting, and
  cooling/screening driven by the declared feed form;
- measurement rules fixing as-fed mass, moisture declaration, electricity in kWh, boiler gas in m3, and bag counts
  with nominal fill mass;
- allocation rules for multi-formulation mills, internal rework, waste cut-off, and upstream co-product allocation
  consistent with the FAO LEAP feed guidelines and the PEFCR for feed;
- foreground collection protocols for weighbridge receipts, micro-ingredient dosing, utility meters, packaging,
  production output, waste, dust, and moisture testing;
- explicit data-quality, mass-closure, energy guardrail, and publication validation rules.

These rules establish a material methodology need independent of CPC coverage.

## Evidence and Identity

The reference product flow was selected and confirmed through the sibling TianGong CLI as `Assorted Feed`, UUID
`cb2b142b-0ed1-4d6f-9283-cfef94451a75`, with Mass flow property UUID `93a60a56-a3c8-11da-a746-0800200b9a66` and
Units of mass unit group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`. All sixteen referenced TianGong flow
identities were confirmed at state code 100. The PCR cites Regulation (EC) No 767/2009 for the compound-feed
product definition, the FAO LEAP guidelines for animal feeds supply chains and the EU PEFCR for feed for
food-producing animals for method, boundary, and allocation rules, the GFLI database for upstream ingredient
dataset requirements, and published feed-mill energy figures for QA guardrail ranges. Provisional quantity
guardrails are labelled `reasoned_estimate` and remain replaceable by reviewed evidence.

## Consequences

- The old terminal alias for the same PCR id is omitted by deterministic alias regeneration.
- CPC 3.0 coverage resolves `23319` to this material PCR.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The material catalog and accepted CPC mapping each gain one entry.
- CPC 3.0 coverage becomes 7 mapped, 2,870 unmapped, and 0 unknown across 2,877 leaves.
- The legacy alias registry becomes 2,870 terminal locators.
- The PCR remains `candidate / authored_methodology` with an aligned Chinese rendering until a separate methodology
  review authorizes `active / reviewed_methodology`.
