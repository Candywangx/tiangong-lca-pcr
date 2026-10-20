---
title: CPC 61 compatibility with Candy main inventory and CI contracts
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when reviewing the CPC 61 compatibility delivery
whenToUpdate:
  - when these PCR identities, completion obligations or compatibility evidence change
checkPaths:
  - docs/adr/2026-10-20-cpc61-github-compatibility.md
  - docs/evidence/cpc61-flow-uuid-verification-20261020.json
  - library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/wholesale-trade-services-not-on-a-fee-or-contract-basis/**
---

# CPC 61 compatibility decision

This first bounded delivery adapts six authored, unpublished candidate PCRs (CPC 61011, 61012, 61013, 61014, 61015, 61019) to the contracts at
`Candywangx/tiangong-lca-pcr@2110cdf3d5e8fb5a87a4773547c0dedb34a748a1`.
The existing individual CPC mapping decisions retain their narrower product-service boundaries and acceptance
evidence. This engineering decision does not approve the methodology or publish a PCR.

## Inventory representation

The input contained 136 flow-card locations, including 43 verified UUID locations and 93 unresolved cards.
A variable material, service, complete-life asset, waste, or species/medium requirement is not one atomic exchange.
The target authoring contract therefore requires a representation change, not a waiver of its atomic-flow check.

- Preserve all 43 UUID locations and their native amount rules, source evidence and occurrence guards.
- Retain the 6 specific reference wholesale-service cards with explicit unresolved product identity.
- Express 6 source-supported, physically specific commodity-waste cases as separate unresolved cards.
  These are conditional physical states, not assumed discard events or new treatment routes.
- Move 87 original variable requirements into section 8 as mandatory completion records, retaining their complete
  descriptions, native property/unit, quantity expression, evidence mode, collection protocol and range/evidence
  requirements. Add row-addressable data-quality obligations for every one of those records.
- Before final foreground use, identify and expand every actual material, provider result, complete-life asset duty,
  carrier, waste stream and elementary substance/source/medium into its own atomic exchange. Unknown occurrence,
  identity or quantity blocks completion; it is never zero, an omission, or a synthetic residual exchange.
- Keep physical whole-stream and retained-component views mutually exclusive. A whole-item case cannot absorb a
  separately collected fragment, liquid, packaging or cleanup carrier. Each actual record belongs to one exchange,
  and native totals are non-additive reconciliation audits.

The resulting inventory has 55 atomic cards: 43 UUID-bearing cards and 12 explicitly unresolved specific cards.
The 87 completion records remain mandatory. The reduction in card count is not resolution of 87 identities and
must not be represented as completed site data.

## Identity, language and support

[Portable direct-read evidence](../evidence/cpc61-flow-uuid-verification-20261020.json) contains 13 selected flow
records and the independently inspected referenced property/unit-group rows. Dataset versions and lookup context
belong in that evidence; canonical PCR UUIDs remain unversioned.

Both languages display the same UUID. Chinese selected-flow names use the exact official Chinese `baseName` in the
record, while headings and occurrence conditions preserve the product-specific modelling role. Remove obsolete
`Binding: fixed` and equivalent lines. Declare both `atomic_flows: v1` and
`localized_flow_names: tiangong_zh_v1` after this audit.

The generic AC flow expressly uses electrical MJ, with kWh equal to 3.6 MJ in its verified unit group. The ILCD
reference-property label `Net calorific value` alone does not reject that electrical-energy basis; it does not
permit substituting a fuel heating-value factor for electricity. Diesel has a mass reference: native litres require
actual compatible density, temperature/state, mass-per-volume unit and source before conversion to kg. No default
density or heating value is introduced.

Original source research ran 206 searches: 203 succeeded and three remained inconclusive because of two timeouts
and one server error. No near-match is selected for those failures. Commodity manufacturing scrap, virgin inputs,
landfill activities and unrelated receiver gates are not interchangeable with merchant waste.

## Method and integration protection

Reference units, declared commercial and physical gates, commodity-versus-service ownership, source integration,
allocation, stock/fate closure, provider/transport coverage, sources and numerical rules remain product-owned.
Remove unavailable module bindings rather than importing an older builder/module implementation; their substantive
period, allocation, rework and complete-lifetime obligations remain in the existing PCR rules and collection methods.
All PCRs stay `candidate` / `authored_methodology`; changed Chinese renderings are `aligned`, not automatically reviewed.

Integrate only these six canonical records and their existing individual mapping decisions. Preserve every pre-existing
target mapping and regenerate aliases, catalog, material/coverage indexes and the existing product-chain read model
with the target tools. No validator, schema, workflow, dependency, search budget or hosting limit is relaxed.

## Qualification boundary

The target workflow includes exact-source planning, runtime/migration/strict types, complete-library contracts,
changed-record deterministic checks, eight full-test shards where selected, web build, documentation sealing,
provider importer, four-platform offline and sealed packages, sealed-web browsers, coverage and the final gate.
Successful local PCR checks are not a substitute for those hosted checks. The delivery report records the actual
commands, results, environmental limitations and any remaining qualification separately.

## Bounded delivery

Only the six codes named above belong to this commit. All 60 source records have a separate local preparation checkpoint; the remaining 54 are deferred. Existing website, search, validator and hosting limits are unchanged. Each future batch must be measured against the then-current target; splitting cannot remove cumulative capacity limits.
