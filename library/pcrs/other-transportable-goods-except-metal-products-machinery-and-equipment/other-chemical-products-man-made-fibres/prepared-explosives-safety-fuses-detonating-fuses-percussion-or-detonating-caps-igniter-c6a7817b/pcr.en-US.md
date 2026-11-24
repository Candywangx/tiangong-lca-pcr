---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.prepared-explosives-safety-fuses-detonating-fuses-percussion-or-detonating-caps-igniter-c6a7817b
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# First Union market accounting of factory-sealed civil prepared explosive finished products

## 1. Scope and Applicability

This product account covers complete factory-sealed civil prepared explosive finished products already manufactured and first made commercially available on the Union market. It does not describe manufacture or use. The complete article and its upstream inventory remain an indivisible opaque product dataset. Eligibility and mass are established from existing nontechnical administrative and environmental records; no opening, handling protocol or physical test is required.

The gate is each completed article’s first external commercial provision, including provision without payment. Internal acceptance, an advance order for an unfinished product, dispatch, customs entry, resale, a return or repackaging alone does not establish another first event. The product is the accounting object; a packaging or trade service alone cannot satisfy this method. Sources: `eu-first-market-2014`, `eu-blue-guide-2022`, `ec-evaluation-2025`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.prepared-explosives-safety-fuses-detonating-fuses-percussion-or-detonating-caps-igniter-c6a7817b |
| classification_refs | CPC 3.0:35450, accepted narrower scope under docs/adr/2026-11-22-accept-cpc-35450-first-eu-placement-sealed-civil-finished-product.md |
| covered_products | Whole factory-sealed civil prepared explosive finished articles at first Union market placement |
| excluded_products | Unfinished or unsealed goods; military products; fuses and initiation devices; pyrotechnic articles (35460); products of 35440; standalone packaging (85400), wholesale and transport services; subsequent market events |
| representative_product | One documented whole sealed civil finished article; no particular brand or technical design prescribed |
| production_route | Opaque existing finished-product A1–A3 inventory, bridged to the first Union market event; no technical route specified |
| market_state | Already manufactured, original factory seal retained, first external Union commercial provision |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Environmental account of a finished product at its first Union market placement |
| How much | 1 kg net complete finished article, excluding documented external packaging |
| How well | Matched product identity, original-seal attestation and unique first-market administrative evidence; no performance equivalence claimed |
| How long or cycle | One first-market event per individual finished article within a declared period |
| reference_flow_link | first_market_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Factory-sealed civil prepared explosive finished article |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | nontechnical product identifier; completed-item or lot linkage; original factory-seal attestation; first Union provision evidence and date; market cohort and period; net whole-article mass and packaging bridge; opaque source identity and gate; inclusion ledger; attribution and uncertainty |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_product_basis | reference product | Mass | kg | Use traceable existing whole-article net-mass records, with documented external packaging mass explicitly excluded, while its covered environmental burden is preserved. Neither gross packaged kg, internal-content mass nor sold-volume kg is interchangeable without a documentary bridge. Trade records are optional and must match the same article, event and unit; border crossing is not a condition. Sources: eurostat-net-mass; eurostat-manual-2026. |
| same_denominator | all inventory rows | Mass | kg | Every exchange is reported per 1 kg reference flow. Retain original numerator units and the same unique first-market net-mass cohort. Missing, estimated or rounded mass requires documented uncertainty and reconciliation; unresolved basis makes the study incomplete. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Already manufactured whole factory-sealed civil article represented by a verified opaque A1–A3 inventory |
| starting_condition_role | background_dataset |
| product_classification_scope | CPC 3.0:35450; narrower |
| recursive_input_rule | Link one whole-product upstream dataset once; do not recursively decompose the article or reconstruct its sources |
| upstream_dataset_requirement | Signed, gate-compatible, uncharacterised whole-product LCI with product/period identity and auditable inclusion/exclusion ledger; EPD scores alone are insufficient |
| disclosure | A1–A3 coverage, gate-to-event bridge, packaging basis, all added and unassignable burdens, exclusions and uncertainty; no full NPCR or full life-cycle conformity claim |

- `opaque_coverage`: The selected whole-product dataset owns all utilities, packaging and waste already included. No factory burden may be added again. A separately reported ordinary exchange requires a precise signed upstream exclusion, actual environmental records and independent same-cohort attribution. If that cannot be established, flag the missing coverage and do not fill it with an impact indicator. Sources: nepd-4019-environmental; nepd-9418-environmental.

- `event_bridge`: Bridge the A1–A3 declaration gate to first market placement explicitly. A4/A5 declarations do not automatically belong to this event. Only actual documented ordinary additions attributable to this cohort within its declared environmental boundary are eligible; unrelated later packaging or transport is excluded. Disclose timing differences between the first-market event and the covered environmental burdens. No transport method is specified. Source: npcr-product-stage-2021.

- `packaging_bridge`: Use documentary definitions to distinguish the complete sealed article from each separable ordinary external package. Do not treat an integral product part as removable packaging or infer internal fractions. For applicable periods use eu-packaging-2025; earlier periods use then-applicable definitions. Statistical net kg and environmental declaration kg must be reconciled individually.

- `market_eligibility`: The already manufactured individual article must be supplied for distribution, consumption or use on the Union market. An invoice, payment, ownership, possession or statistical record within the Union alone does not prove that purpose or first placement. The eligible event can precede, coincide with or follow physical handover; record the separate dates. Sources: `eu-first-market-2014`, `eu-blue-guide-2022`.

- `custody_perimeter`: Declare an anonymous physical custody accounting perimeter and the period actually covered by the environmental inventory, separately from the market-event ledger. A first-market event outside this perimeter creates no fictitious receipt or dispatch in the declarant's physical stock records. Reconcile the event cohort to actual custody records only where applicable and show unmatched ownership and custody states explicitly.

- `burden_mass_distinction`: Net-article mass and environmental burden coverage are different boundaries. Excluding external packaging mass from the denominator does not remove its real product-delivery burden already included in the opaque inventory. Preserve that covered burden once; remove only evidenced duplicates. Distinguish first-seal original packaging from separable external packaging using nontechnical documentation, without inspecting product construction. Keep later recorded burdens attributable to the original cohort in a separate timing ledger; include only evidenced original-cohort obligations within the declared environmental boundary, updating that same cohort once rather than creating a second first-market event. Unknown later shares remain explicit study gaps.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| first_market | Whole-product first-market environmental account | required | Eligible completed sealed article and verified first Union provision | foreground | 1 kg net first-market finished product |

This is an accounting process, not a manufacturing operation. The whole-product input carries its opaque upstream inventory. Conditional ordinary additions below are candidates only when evidenced; absence requires an explicit not-applicable reason, never an invented zero. Additional ordinary exchanges require separate specific cards and evidence before a study is complete. No sensitive product inventory or operating data may be added.

### Process: Whole-product first-market account (`first_market`)

#### Inputs

##### Product flows

###### Factory-sealed civil prepared explosive finished article (`sealed_product_input`)

Required: one whole-product upstream coverage link at the prior declaration gate, unchanged physically at the first-market gate. This is an environmental inventory linkage, not evidence of a physical receipt into the declarant’s custody. Its coverage is verified with cp_coverage; losses, noneligible stock or missing burdens cannot be hidden by this one-to-one bridge.

- Selected flow: Factory-sealed civil prepared explosive finished article
- Flow property / unit: Mass / kg
- Amount rule: 1 kg of the same whole article represented by the reconciled opaque upstream dataset
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: method_formula
- Collection protocol: `cp_cohort`
- Sources: `eu-blue-guide-2022`, `npcr-product-stage-2021`

###### Corrugated cardboard outer carton (`outer_carton`)

Conditional: only the ordinary separable outer carton actually added for this cohort, absent from the opaque inventory. Never substitute this carton for the original product seal or assume every product uses it.

- Selected flow: Corrugated cardboard outer carton
- Flow property / unit: Mass / kg
- Amount rule: Documented attributable carton mass per reference flow
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_additions`
- Sources: `eu-packaging-2025`

###### Purchased electricity (`event_electricity`)

Conditional: only actual ordinary external-packaging electricity excluded from the upstream inventory and independently attributable to the cohort. Factory electricity already included is not added.

- Selected flow: Purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: Documented attributable ordinary packaging electricity per reference flow
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_additions`
- Sources: `nepd-4019-environmental`, `nepd-9418-environmental`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No direct elementary input is prescribed.

#### Outputs

##### Product flows

###### Factory-sealed civil prepared explosive finished article (`first_market_product`)

Required: same unchanged whole article at its unique first Union market event. This accounting reference does not assert physical dispatch or custody transfer. This output is not a service, another production yield or a repeated release.

- Selected flow: Factory-sealed civil prepared explosive finished article
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: method_formula
- Collection protocol: `cp_cohort`
- Sources: `eu-first-market-2014`, `eu-blue-guide-2022`

##### Waste flows

###### Waste corrugated cardboard (`carton_waste`)

Conditional: actual non-product-contact ordinary outer-carton waste attributable to the same event and not already counted. Product-related waste remains inside its verified opaque system; this card does not represent it. Retain actual waste-service coverage to avoid counting treatment twice.

- Selected flow: Waste corrugated cardboard
- Flow property / unit: Mass / kg
- Amount rule: Documented attributable ordinary carton waste per reference flow
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_additions`
- Sources: `eu-packaging-2025`

##### Elementary flows

No direct elementary output is prescribed. Environmental impact indicators cannot populate this section.

- `ordinary_addition_coverage`: A real carton movement is not automatically a new environmental burden. Record ordinary corrugated-cardboard carton kg, attributable purchased electricity kWh and ordinary waste corrugated-cardboard kg separately. For each, distinguish physical movement, existing upstream environmental coverage and an actual incremental uncovered burden. Unknown prior factory/packaging coverage blocks adding it: retain the original-unit total and the unresolved attribution/coverage status separately, without assuming zero or subtracting a covered burden. Later attributable additions or corrections retain the original cohort and its original positive denominator; they do not re-open an upstream technical inventory.

## 7. Allocation and Co-product Handling

- `attribution_first`: Directly attribute supported ordinary additions before allocating residual shared quantities. Require the original site/period accounting evidence, eligible products and matching denominators. Site totals alone do not establish the share for this first-market cohort.

- `shared_mass_case`: Mass allocation observed in nepd-4019-environmental is case evidence, not a universal default. If adopted, justify that common burden follows matched net whole-product output, reconcile allocated totals and test justified alternative attribution. Keep nepd-9418-environmental independent; do not transfer shares, site conditions or years. Keep verified upstream allocation sealed rather than reallocating it here.

- `stock_periods`: Keep original manufacturing burdens attached to the relevant articles across periods. Reconcile opening stock, additions, first-market placements, closing stock, returns and later movements without assigning a second upstream burden to the same article. Work in progress and failed output cannot enter the first-market mass denominator; document their environmental burden ownership. Let Q be current-period eligible first-market net kg. Q = 0 yields no new-cohort per-kg result. A separately evidenced positive original-cohort denominator Qc may support a later attributable ordinary-exchange supplement: divide only that incremental or corrected exchange by original Qc, never by Q and never repeat original product or upstream inventory. If Qc is unproven, retain the exchange total in its original unit as unresolved; do not discard it or invent a normalized result.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cohort | first_market | whole-product cohort | administrative_records | nontechnical article/lot identity; Union distribution/consumption/use purpose; actual custody perimeter and dates; event/handover timing bridge; completion and original-seal attestation; first Union provision evidence/date; unique event key; net article kg; external packaging kg/basis; opening/closing stocks; returns; later movements | Use existing signed nontechnical records; link each completed article once to the first-market event and its recorded net mass. Bridge any trade statistics explicitly; no customs event is required. Never unpack or perform tests. | kg | each event; period reconciliation | declared study period | same cohort and responsible accounting entity | per 1 kg reference flow | document provenance; mass basis; unique-event reconciliation; estimate/rounding uncertainty |
| cp_coverage | first_market | opaque inventory coverage | environmental_records | signed LCI identity/hash; source product/period; unit/gate; included utilities/packaging/waste; exclusions; conversion bridge; completeness; attribution evidence | Inspect only non-operational signed environmental scope and whole-product exchange evidence; reconcile A1–A3 ownership and exact event additions. Never reconstruct hidden inputs from impact scores. | kg; native exchange units | each source revision and cohort | matched source and study periods | documented source environmental system | per 1 kg reference flow | signed source, coverage ledger, no duplicate burdens |
| cp_additions | first_market | ordinary external additions | environmental_records | specific exchange; physical movement evidence; existing coverage status; incremental burden evidence; native amount/unit; period; current Q; original cohort key and positive Qc evidence; revision version and prior reported amount; attribution; exact upstream exclusion; package basis; eligible cohort; shared total; allocation evidence; uncertainty | Use existing ordinary packaging/utility environmental records only; verify actual additions and reconcile direct or justified shared attribution with the same cohort. Unassignable amounts remain a disclosed gap. | kg; kWh as appropriate to each atomic row | each accounting period and event linkage | same cohort period or documented carry-over | declared ordinary environmental account | per 1 kg reference flow | original records; exclusion proof; total reconciliation; sensitivity |

The following accounting identities apply to the same declared cohort. Closing physical custody stock equals opening physical custody stock plus documented actual receipts minus documented actual departures, with signed corrections; the first-market ledger is reconciled separately and must not invent these physical movements. Eligible first-market kg sums each completed article once. An attributable ordinary exchange total divided by those eligible kg gives its per-kg value in its original numerator unit. An optional residual mass allocation uses each evidenced product net mass divided by the matched total product net mass; reconcile all shares to the shared environmental total and test justified alternatives. These are accounting rules, not observed values or universal allocation defaults.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_denominator | first_market_product | Sum documentary net whole-article kg for the unique eligible first-market cohort; exclude repeated events and noneligible stock. Do not subtract internal product fractions. | cp_cohort | eligible net kg | eu-first-market-2014; eu-blue-guide-2022; eurostat-net-mass |
| normalise_ordinary | outer_carton; event_electricity; carton_waste | Divide each independently attributable ordinary exchange total by eligible net kg, retaining its native numerator unit. Same cohort and coverage ledger required; no eligible net kg means no new-cohort normalized result; a documented original-cohort supplement follows original_cohort_revision. | cp_cohort; cp_additions; cp_coverage | exchange per 1 kg reference flow | eurostat-net-mass; nepd-4019-environmental; nepd-9418-environmental |
| opaque_bridge | sealed_product_input | Use the signed whole-product inventory on its reconciled net-article basis once. Document any source-unit conversion without inferring hidden product contents; an unresolved bridge blocks a complete result. | cp_coverage; cp_cohort | one covered whole-product input per reference flow | npcr-product-stage-2021 |
| original_cohort_revision | outer_carton; event_electricity; carton_waste | When current Q = 0 and original Qc > 0 is evidenced, report only the attributable incremental/corrected ordinary exchange total divided by Qc, in its native numerator unit per original-cohort kg. Do not emit another whole-product input/output or repeat upstream inventory. Record replacement-versus-delta semantics and original account version so a correction replaces the previous amount once. Without proven Qc, preserve the native-unit total separately as unresolved. | cp_cohort; cp_additions; cp_coverage | original-cohort supplement or unnormalised unresolved total | eu-blue-guide-2022; nepd-4019-environmental; nepd-9418-environmental |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| first_event | cp_cohort | Separate method eligibility from study qualification: a study must prove its completed sealed product identity, unique first Union event and packaging-excluding mass. Public enterprise transactions are not required to establish the method. | eu-first-market-2014; eu-blue-guide-2022 |
| basis_conflicts | cp_cohort | Never merge trade net kg, production sold-volume kg or EPD kg without a matched bridge. Some production statistics include normal retail packaging; declarations may have different units. Do not assume every market event has a trade record. | eurostat-net-mass; eurostat-manual-2026; cp_cohort |
| coverage_quality | cp_coverage; cp_additions | Keep declarations, sites and years separate; quantify data uncertainty from actual records. Missing signed exchange coverage, unassignable shares and unverified identities remain explicit study gaps. No generic zero, factor or impact-to-inventory substitution is permitted. | nepd-4019-environmental; nepd-9418-environmental |

## 9. Validation Rules

- `validate_identity`: Reject a complete-result claim unless product completion, original seal, unique first Union provision, net whole-article mass and reference output linkage are evidenced. Neither shipment nor packaging service substitutes for that gate.

- `validate_coverage`: Require signed opaque upstream coverage, explicit packaging reconciliation, same-cohort additions and no duplicated upstream burdens. Missing coverage is inconclusive; EPD impact scores are not exchanges.

- `validate_period`: Reconcile cohort stock and burden ownership across periods, including returns, repeated movements, failed output and zero-placement periods. Do not accept a zero denominator, invented amount, UUID or allocation share.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset |
| allowed_use | Qualified non-operational whole-product first Union market environmental account |
| excluded_use | Manufacturing, composition, operation, performance, transport instruction, procurement, full EPD conformity, comparative functional claims or later-event datasets |
| required_metadata | product/cohort identity; market-event evidence; net mass bridge; period; source LCI identity and coverage; original/separable packaging; attributable additions; allocation and stock ledger |
| required_quality_disclosure | Study completeness, missing exchanges/UUIDs, incompatible bases, uncertainty, unassignable burdens and source review limitations; methodology status does not approve a study |
| update_trigger | Changed product identity, market scope, source inventory gate, packaging basis, allocation, source period or first-event definition |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| eu-first-market-2014 | official_guidance | Directive 2014/28/EU, Article 2(7)–(8); https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32014L0028 | First commercial provision only; administrative definition, no operational requirements. |
| eu-blue-guide-2022 | official_guidance | Blue Guide 2022, §2.3, OJ C247/20–21; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52022XC0629%2804%29 | Individual completed product, unique first placement and separation from physical delivery. |
| ec-evaluation-2025 | official_guidance | SWD(2025)266, Annex II note 167; https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A52025SC0266 | Relevance of civil finished-product sales; aggregate statistics supply no study mass or inventory. |
| eurostat-net-mass | official_guidance | Eurostat international trade in goods metadata, unit of measure; https://ec.europa.eu/eurostat/cache/metadata/en/ext_go_detail_sims.htm | Packaging-excluding statistical kg only with a documentary bridge to the same product cohort. |
| eurostat-manual-2026 | handbook | Eurostat user manual 2026, net mass, printed p.33; https://ec.europa.eu/eurostat/documents/3859598/23178546/KS-01-26-012-EN-N.pdf/a502437f-c3d2-b1c8-df8b-95ed12e992a0?t=1772723967663&version=1.0 | Missing, estimated and rounded statistical mass limitations. |
| eu-packaging-2025 | official_guidance | Regulation (EU) 2025/40, Article 3(1)(1), Article 71; https://eur-lex.europa.eu/eli/reg/2025/40/oj/eng/pdf | Documented integral-product versus ordinary external packaging boundary; application from 12 August 2026, earlier periods use then-applicable definitions. |
| npcr-product-stage-2021 | standard | NPCR 024:2021 v2.0, §§6.2, 7.2.1–2, 7.3.2; https://digi.epd-norge.no/pcr/epd-norges-pcr-register/ | Screened environmental modules only: distinguish A1–A3 from later A4/A5; no programme conformity claim. |
| nepd-4019-environmental | dataset | NEPD-4019-3055-EN, environmental Allocation paragraph p.3; https://digi.epd-norge.no/ | Case evidence of site utility/waste mass attribution, not a default factor; administrative and environmental excerpts only. |
| nepd-9418-environmental | dataset | NEPD-9418-9023, environmental Allocation / Data quality p.4; https://digi.epd-norge.no/ | Separate 2021 consumption/attribution case including packaging and energy; no pooling with another declaration. |
| unsd-cpc3-2026 | official_guidance | UNSD CPC 3.0 explanatory workbook, 23 October 2026, CPC3 row 1567 (35450); https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | Classification metadata only: 35450 refers to HS2022 3601–3603; 35460 to 3604; packaging-for-others is separate. |
| jrc-ilcd-mass | official_guidance | JRC ILCD reference identity: Mass, JRC68404; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC68404/lbna25198enn.pdf ; Units of mass, UUID 93a60a57-a4c8-11da-a746-0800200c9a66, default kg; https://eplca.jrc.ec.europa.eu/EF-node/datasetdetail/unitgroup.xhtml?uuid=93a60a57-a4c8-11da-a746-0800200c9a66&version=03.00.003 | Mass property and kg unit-group identity only; no product-flow identity or study applicability inferred. |
