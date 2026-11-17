---
title: "CPC 3.0 69112: accepted narrower candidate mapping"
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: "2026-11-16"
---

# CPC 3.0 69112: accepted narrower candidate mapping

## Decision

Retain the accepted mapping to `pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.electricity-gas-and-water-distribution-on-own-account.distribution-of-electricity-on-own-account` with relation `narrower`. Acceptance metadata remains {"status":"accepted","decided_by":"codex-cpc69-main-agent","decided_at_utc":"2026-11-16T05:07:58.965Z","decision_ref":"docs/adr/cpc-69-69112-comprehensive-repair-20261116.md"}. This consolidated decision preserves the existing decision-maker and time; it does not assert a new scientific review.

## Applicability and rationale

Covered products: Own-account AC network distribution service characterized by named customer delivery energy; necessary operational control and existing-meter maintenance

Excluded products: Generation commodity; upstream transmission; end use; new meter installation; independent meter reading; storage/conversion; independent ancillary services

Production route: Metered entry → distribution transformation/conveyance/control → metered customer acceptance; necessary maintenance in parallel

This method covers the specified route and service gates within CPC 69112, rather than every product or configuration in that subclass. The accepted relation is narrower. CPC membership and separately covered upstream/downstream endpoints do not establish complete-chain applicability. The existing PCR identity and reference output are retained.

Reference: 1 kWh; Accepted AC electricity distribution service. All qualifiers, allocation denominators, service/physical exclusions and conditional activation requirements remain in the canonical bilingual PCR and its generated projection. Each active flow has one primary property/unit.

## Candidate limitations

Lifecycle remains candidate / authored_methodology; Chinese remains aligned. There are 23 conditional method cards, including 22 unbound flow identities and 1 rows retaining UUIDs. These counts do not mean every card is simultaneously active. Manifest row registries and completion conditions govern identity gaps. Official UUID responses, receipts, historical audit files and a separate review summary are not part of this change. Retaining a UUID does not make its verification independently reproducible from this change. Independent methodology review, translation certification and publication are not granted by this mapping decision.

## Canonical source

- [manifest.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/distribution-of-electricity-on-own-account/manifest.yaml): SHA-256 `f9a25cf5e21dca5ea7563499a8984cdb97c8c127faa6ba260330f03ca630ac9d`
- [pcr.en-US.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/distribution-of-electricity-on-own-account/pcr.en-US.md): SHA-256 `8ec927854d9d9c4a98bcf8b30cc2ca47513a17d7dd57a8d273a4601209b50b9d`
- [pcr.zh-CN.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/distribution-of-electricity-on-own-account/pcr.zh-CN.md): SHA-256 `27be208c31ce043f2a5f7b6d6ac6867014364d2d5cb16eab707f1bd732147b3d`
- [structured.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/electricity-gas-and-water-distribution-on-own-account/distribution-of-electricity-on-own-account/structured.yaml): SHA-256 `dfe5fc6ae4b360b401f77a29b00c5ba12a78fd8e253e38ab4566c017fb0a2b74`
