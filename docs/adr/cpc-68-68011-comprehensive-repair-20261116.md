---
title: "CPC 3.0 68011: accepted narrower candidate mapping"
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: "2026-11-16"
---

# CPC 3.0 68011: accepted narrower candidate mapping

## Decision

Retain the accepted mapping to `pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.postal-services-related-to-letters` with relation `narrower`. Acceptance metadata remains {"status":"accepted","decided_by":"codex-cpc68-main-agent","decided_at_utc":"2026-11-16T04:50:42.199Z","decision_ref":"docs/adr/cpc-68-68011-comprehensive-repair-20261116.md"}. This consolidated decision preserves the existing decision-maker and time; it does not assert a new scientific review.

## Applicability and rationale

Covered products: Ordinary addressed paper-letter collection, sorting, domestic surface carriage and delivery under a documented USO, with all motor-road operations purchased from carriers and electrically operated or purchased-hot-water-heated postal facilities without onsite combustion or refrigerant equipment.

Excluded products: Courier/express, parcels, newspapers/periodicals, advertising leaflets/brochures, registered/insured/signature products, international or air/rail/sea carriage, self-operated motor fleets, onsite combustion and refrigerant-equipped facilities.

Production route: Acceptance/collection → address preparation and sorting → outsourced road linehaul → destination sorting → outsourced van collection/delivery rounds → correct delivery; actual redelivery, forwarding and final returns are retained in the cohort.

This method covers the specified route and service gates within CPC 68011, rather than every product or configuration in that subclass. The accepted relation is narrower. CPC membership and separately covered upstream/downstream endpoints do not establish complete-chain applicability. The existing PCR identity and reference output are retained.

Reference: 1 Item(s); Domestic ordinary addressed-letter delivery service, outsourced road carriage. All qualifiers, allocation denominators, service/physical exclusions and conditional activation requirements remain in the canonical bilingual PCR and its generated projection. Each active flow has one primary property/unit.

## Candidate limitations

Lifecycle remains candidate / authored_methodology; Chinese remains aligned. There are 46 conditional method cards, including 44 unbound flow identities and 2 rows retaining UUIDs. These counts do not mean every card is simultaneously active. Manifest row registries and completion conditions govern identity gaps. Official UUID responses, receipts, historical audit files and a separate review summary are not part of this change. Retaining a UUID does not make its verification independently reproducible from this change. Independent methodology review, translation certification and publication are not granted by this mapping decision.

## Canonical source

- [manifest.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/postal-services-related-to-letters/manifest.yaml): SHA-256 `a21b43011ee7be0d926e39138ffc44d574516f9ef4a442dd20ca342f83edadf7`
- [pcr.en-US.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/postal-services-related-to-letters/pcr.en-US.md): SHA-256 `6495517e30e277d19cb4a5136470b95dcdeb2f34f8d8f1b42b03f0bbdbdb8ebc`
- [pcr.zh-CN.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/postal-services-related-to-letters/pcr.zh-CN.md): SHA-256 `2af68f86c7b84859712628f3a2da6456d4e54b06163d7b3d279364b60f5d73e3`
- [structured.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/postal-services-related-to-letters/structured.yaml): SHA-256 `0c92e9c47d66836b2116c388cc32c329245780e1a423c2373ecb8481a27c0ae4`
