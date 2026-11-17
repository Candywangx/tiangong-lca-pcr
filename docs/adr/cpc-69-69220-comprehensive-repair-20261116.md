---
title: "CPC 3.0 69220: accepted narrower candidate mapping"
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: "2026-11-17"
---

# CPC 3.0 69220: accepted narrower candidate mapping

## Decision

Retain the accepted mapping to `pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.distribution-of-steam-hot-water-and-air-conditioning-supply-through-mains-on-own-account` with relation `narrower`. Acceptance metadata remains {"status":"accepted","decided_by":"codex-cpc69-main-agent","decided_at_utc":"2026-11-16T05:07:58.965Z","decision_ref":"docs/adr/cpc-69-69220-comprehensive-repair-20261116.md"}. This consolidated decision preserves the existing decision-maker and time; it does not assert a new scientific review.

## Applicability and rationale

Covered products: Own-account closed-loop liquid-water heating distribution with undosed purchased demineralized makeup, specified delivered network assets and actual onsite work inputs

Excluded products: Steam; chilled water; cooled air; glycol or chemical dosing; heat production; sale of water; fee/contract distribution

Production route: Source-gate heat transfer, insulated closed supply/return mains, circulation pumping, customer-gate heat exchange and acceptance

This method covers the specified route and service gates within CPC 69220, rather than every product or configuration in that subclass. The accepted relation is narrower. CPC membership and separately covered upstream/downstream endpoints do not establish complete-chain applicability. The existing PCR identity and reference output are retained.

Reference: 1 MJ; Own-account distribution service for accepted hot-water heating energy at declared customer gates. All qualifiers, allocation denominators, service/physical exclusions and conditional activation requirements remain in the canonical bilingual PCR and its generated projection. Each active flow has one primary property/unit.

## Candidate limitations

Lifecycle remains candidate / authored_methodology; Chinese remains aligned. There are 44 conditional method cards, including 42 unbound flow identities and 2 rows retaining UUIDs. These counts do not mean every card is simultaneously active. Manifest row registries and completion conditions govern identity gaps. Official UUID responses, receipts, historical audit files and a separate review summary are not part of this change. Retaining a UUID does not make its verification independently reproducible from this change. Independent methodology review, translation certification and publication are not granted by this mapping decision.

## Thermal accounting convention

The candidate method fixes the IAPWS-95 saturated-liquid triple-point internal-energy reference, converts each property implementation to that convention with one common enthalpy/internal-energy offset, and reconstructs historical origin ledgers before allocation. The proportional source-attribution policy is an explicit PCR convention, not an IAPWS-prescribed LCA allocation or independently observed tracing method. Changing the numerical software zero must leave the normalized inventory unchanged after conversion. The source, collection and validation requirements are in `thermal_reference`, `thermal_reference_history` and `validate_thermal_reference`. Product scope, reference output, identity, mapping acceptance and candidate review status are unchanged.

The carrier energy ledger and environmental heat inventory are separate. `Q_carrier_loss` retains full canonical advective enthalpy for conservation and origin attribution. `carrier_release_heat` computes direct liquid-release thermal loads relative to the measured undisturbed receiver state, with baseline energy kept only as reconciliation metadata; it does not predict a finite receiver's instantaneous temperature. `heat_fates`, `cp_heat` and `validate_heat_release` preserve single counting, waste-handover exclusions, missing-data/cooling limitations and original-cohort normalization. The EPA source supports the physical temperature-difference distinction; the LCI convention and soil comparator remain explicit candidate choices. Existing row identities, units and unresolved UUID declarations are unchanged.

## Canonical source

- [manifest.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/distribution-of-steam-hot-water-and-air-conditioning-supply-through-mains-on-own-account/manifest.yaml): SHA-256 `3bdeeb28f506553f0dbf1a6877e2ac440713d9a906305a6a0f39cbcc62d96a7a`
- [pcr.en-US.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/distribution-of-steam-hot-water-and-air-conditioning-supply-through-mains-on-own-account/pcr.en-US.md): SHA-256 `3184543a7dbc3a1897c9e2e6da569f7ce1edaedb36a0fb4b613a1588a45f9222`
- [pcr.zh-CN.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/distribution-of-steam-hot-water-and-air-conditioning-supply-through-mains-on-own-account/pcr.zh-CN.md): SHA-256 `1008dde474b43b0effef0a99f9589a24f592ccc60e92af3913832ff9caeebbde`
- [structured.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/distribution-of-steam-hot-water-and-air-conditioning-supply-through-mains-on-own-account/structured.yaml): SHA-256 `308e62b7a66224bb33b444dbd36b301a304402b1d4685cf8512e1ba1922e83c1`
