---
title: "CPC 3.0 69230: accepted narrower candidate mapping"
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: "2026-11-16"
---

# CPC 3.0 69230: accepted narrower candidate mapping

## Decision

Retain the accepted mapping to `pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.water-distribution-except-through-mains-on-own-account` with relation `narrower`. Acceptance metadata remains {"status":"accepted","decided_by":"codex-cpc69-main-agent","decided_at_utc":"2026-11-16T05:07:58.965Z","decision_ref":"docs/adr/cpc-69-69230-comprehensive-repair-20261116.md"}. This consolidated decision preserves the existing decision-maker and time; it does not assert a new scientific review.

## Applicability and rationale

Covered products: Own-account distribution service for bulk potable water by contracted dedicated road tanker, from supplier filling coupling to accepted unloading into recipient storage

Excluded products: Water commodity production and treatment; mains; bottled water; irrigation; broker-only intermediation; non-potable water; ship/rail/cart transport; downstream storage/dispensing

Production route: Operated dedicated contracted diesel tanker plus specified supplied loading/metering skid and reinforced EPDM hose; sodium-carbonate washing and sodium-hypochlorite disinfection when used; closed wastewater collection

This method covers the specified route and service gates within CPC 69230, rather than every product or configuration in that subclass. The accepted relation is narrower. CPC membership and separately covered upstream/downstream endpoints do not establish complete-chain applicability. The existing PCR identity and reference output are retained.

Reference: 1 m3; Potable-water road-tanker distribution service. All qualifiers, allocation denominators, service/physical exclusions and conditional activation requirements remain in the canonical bilingual PCR and its generated projection. Each active flow has one primary property/unit.

## Candidate limitations

Lifecycle remains candidate / authored_methodology; Chinese remains aligned. There are 39 conditional method cards, including 38 unbound flow identities and 1 rows retaining UUIDs. These counts do not mean every card is simultaneously active. Manifest row registries and completion conditions govern identity gaps. Official UUID responses, receipts, historical audit files and a separate review summary are not part of this change. Retaining a UUID does not make its verification independently reproducible from this change. Independent methodology review, translation certification and publication are not granted by this mapping decision.

## Canonical source

- [manifest.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/water-distribution-except-through-mains-on-own-account/manifest.yaml): SHA-256 `3f39033ce24be01f2e98cffaacf083d3060e141e24cd3365bbfd9a08c25486be`
- [pcr.en-US.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/water-distribution-except-through-mains-on-own-account/pcr.en-US.md): SHA-256 `b8146d314607d99ef9dfa9bb72dfdeaecdf869c27a6e9ac94a356f4f0f66c3d0`
- [pcr.zh-CN.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/water-distribution-except-through-mains-on-own-account/pcr.zh-CN.md): SHA-256 `e488be6356ca7bb66377c5ede37d3b9b4031934200d18c0401382400ef079356`
- [structured.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/water-distribution-except-through-mains-on-own-account/structured.yaml): SHA-256 `744034671b097740548fb94f35ea200275030dbb2f557f55625cc69d7af1d576`
