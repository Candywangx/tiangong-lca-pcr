---
title: Accept CPC 3.0 43540 mapping to lifts and moving walkways PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-07-30
---

# Accept CPC 3.0 43540 Mapping to Lifts and Moving Walkways PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `43540`, "Lifts, skip hoists, escalators and moving walkways", to:

`pcr.metal-products-machinery-and-equipment.general-purpose-machinery.lifts-skip-hoists-escalators-and-moving-walkways`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived scaffold in place as a canonical, classification-independent material PCR. CPC remains mapping context
and does not own the PCR identity.

## Semantic Scope Check

The PCR covers functionally complete manufactured lifts, skip hoists, escalators, and moving walkways at the
factory gate. Product subtype, rated load or capacity, speed, travel or rise, inclination where applicable, drive
technology, control configuration, declared service assumptions, and production route remain explicit dataset
qualifiers.

It excludes parts and subsystems sold separately unless a dataset explicitly defines such a narrower product,
building and shaft works, installation tools and temporary test loads, and transport packaging from the declared
product mass. Installation, operation, maintenance, modernization, and end-of-life are conditional downstream
lifecycle stages. The PCR does not treat lifts, skip hoists, escalators, and moving walkways as functionally
equivalent merely because CPC groups them in one leaf.

This product boundary is scope-equivalent to the normalized CPC 3.0 leaf `43540`. The canonical directory and id use
a semantic product slug and contain no classification code.

## Methodology Need

Production and assessment of this equipment category require category-specific rules that classification alone does
not provide:

- a complete factory-gate equipment reference flow based on dry product mass, supported by a declared bill of
  materials and product configuration;
- distinct component and material preparation, final assembly and integration, factory testing, packaging, and
  factory-release process coverage;
- explicit accounting for metals, electronics, drives, controls, lubricants, auxiliaries, utilities, packaging,
  production waste, rejects, direct emissions, and test energy;
- mass-balance, shared-utility allocation, scrap and recycling-route, and packaging-separation rules;
- conditional operation and maintenance modelling using subtype-specific service and energy-performance parameters
  rather than one category-wide use profile; and
- completeness, allocation, upstream-link, measurement, representativeness, and data-quality validation rules.

These rules establish a material methodology need independent of CPC coverage.

## Evidence and Identity Status

The United Nations CPC Version 3.0 classification identifies code `43540` with the exact label used by this
mapping. International EPD System PCR 2019:14, *Construction products*, and c-PCR-008, *Lifts*, provide the applicable
EPD framework and lift-specific product rules used by the candidate PCR. ISO 25745-1:2023 provides common
energy-performance measurement and verification rules, while ISO 25745-2:2015 and ISO 25745-3:2015 provide
subtype-specific treatment for lifts and for escalators and moving walks. European Commission Recommendation
(EU) 2021/2279 Annex I supplies the general Product Environmental Footprint rules used for lifecycle inventory,
reproducibility, and verification.

Tiangong CLI lookup confirms the public product flow `Lifts, skip hoists, escalators and moving walkways`
`71c9140f-5a21-4ba8-ac40-c272cdf45654`, with `state_code=100`, the exact CPC `43540` classification chain, Mass flow
property `93a60a56-a3c8-11da-a746-0800200b9a66`, and Units of mass unit group
`93a60a57-a4c8-11da-a746-0800200c9a66`, whose reference unit is kg.

Material-, component-, geography-, technology-, treatment-route-, and compartment-specific input, waste, utility,
and elementary-flow UUIDs remain dataset-level selections rather than invented generic identities. The current
candidate carries provisional range gaps and warnings that require independent review and better category evidence;
accepting the classification edge does not claim active methodology status, publication readiness, or functional
equivalence among the four product subtypes.

## Consequences

- Deterministic alias regeneration omits the old terminal alias for this PCR id.
- CPC 3.0 coverage resolves `43540` to this material PCR while runtime readiness exposes its
  `candidate / authored_methodology` lifecycle state.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The material catalog and accepted CPC mapping each gain one entry.
- Independent methodology review, resolution of provisional range evidence, and all publication preflight checks
  remain required before an `active` lifecycle transition or publication.
