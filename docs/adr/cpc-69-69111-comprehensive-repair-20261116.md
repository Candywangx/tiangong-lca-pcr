---
title: "CPC 3.0 69111: accepted narrower candidate mapping"
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: "2026-11-16"
---

# CPC 3.0 69111: accepted narrower candidate mapping

## Decision

Retain the accepted mapping to `pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.transmission-of-electricity-on-own-account` with relation `narrower`. Acceptance metadata remains {"status":"accepted","decided_by":"codex-cpc69-main-agent","decided_at_utc":"2026-11-16T05:07:58.965Z","decision_ref":"docs/adr/cpc-69-69111-comprehensive-repair-20261116.md"}. This consolidated decision preserves the existing decision-maker and time; it does not assert a new scientific review.

## Applicability and rationale

Covered products: Own-account AC overhead network transmission service including associated substations and embedded dispatch/protection control

Excluded products: DC networks; underground/submarine cable routes; electricity generation or commodity supply; distribution; independent storage/conversion services; separately supplied FCAS; meter installation as a distinct service

Production route: AC line transport with associated transmission substations, switching, control and maintenance

This method covers the specified route and service gates within CPC 69111, rather than every product or configuration in that subclass. The accepted relation is narrower. CPC membership and separately covered upstream/downstream endpoints do not establish complete-chain applicability. The existing PCR identity and reference output are retained.

Reference: 1 kWh; AC electricity transmission service. All qualifiers, allocation denominators, service/physical exclusions and conditional activation requirements remain in the canonical bilingual PCR and its generated projection. Each active flow has one primary property/unit.

## Candidate limitations

Lifecycle remains candidate / authored_methodology; Chinese remains aligned. There are 27 conditional method cards, including 25 unbound flow identities and 2 rows retaining UUIDs. These counts do not mean every card is simultaneously active. Manifest row registries and completion conditions govern identity gaps. Official UUID responses, receipts, historical audit files and a separate review summary are not part of this change. Retaining a UUID does not make its verification independently reproducible from this change. Independent methodology review, translation certification and publication are not granted by this mapping decision.

## Canonical source

- [manifest.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/transmission-of-electricity-on-own-account/manifest.yaml): SHA-256 `d77983a9dcafc3adcb98694094398d2a77af4bdad5369e920792496fcaf291fc`
- [pcr.en-US.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/transmission-of-electricity-on-own-account/pcr.en-US.md): SHA-256 `cdb17723178a8959e097f064cc831fcd1fda53be601e159d8ab11a09e9dc801c`
- [pcr.zh-CN.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/transmission-of-electricity-on-own-account/pcr.zh-CN.md): SHA-256 `061fc44de4e69322a81e87e3874655cd4fb9f87250a5c6de4240b0ef29c6e2bb`
- [structured.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/transmission-of-electricity-on-own-account/structured.yaml): SHA-256 `779cc0dae65a312430c1192310bc24f62e91a8cb480335858715776ecba72904`
