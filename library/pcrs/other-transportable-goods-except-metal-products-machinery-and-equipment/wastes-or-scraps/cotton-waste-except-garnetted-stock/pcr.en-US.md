---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.cotton-waste-except-garnetted-stock
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unbleached ungarnetted cotton comber noil for spinning

## 1. Scope and Applicability

This PCR covers one specific cotton production residue: unbleached short fibres separated by cotton combing, independently collected and inspected/cleaned as actually needed, and first released against an explicit spinning-feedstock specification. It synthesizes an integrated ginned-cotton preparation/combing route with segregated noil handling. The historical USITC route and present supplier noil description are complementary primary evidence; they are not one contemporary factory or SKU. No numerical plant inventory, standard yield, purity, fibre-length range or bale mass is prescribed.

Cotton carding waste and yarn/hard waste are neighbouring streams, not synonyms for this reference. The named CPC leaf does not make every cotton waste a covered product. Do not use a wool/silk noil method, cottonseed-linter route or fabric-garnetting route for this fibre. Actual legal status and receiver acceptance must be collected; this supply methodology does not grant an exemption.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.cotton-waste-except-garnetted-stock |
| classification_refs | CPC3.0:39214; narrower |
| covered_products | One segregated unbleached ungarnetted cotton comber-noil spinning-feedstock stratum |
| excluded_products | seed cotton; cotton linters; cottonseed hulls; card strips; yarn hard waste; mixed sweepings; wool/silk waste; garnetted cotton; bleached absorbent cotton; long sliver; yarn |
| representative_product | Unbleached ungarnetted cotton comber noil for spinning |
| production_route | Start at received ginned cotton bales; include receiving and opening/cleaning, carding, actual drawing/lap preparation needed for combing, combing separation, segregated noil collection, dry inspection and actual mechanical cleaning, sampling and first quality release for a named spinning customer specification. Include suction, dust filtration, compression and attributable maintenance. Model the actual route; purchased finished noils plus packing alone cannot represent this integrated production dataset. |
| market_state | loose or compressed unbleached noil at first spinning-quality release with subsequent cohort-specific storage/packing/dispatch service disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | cotton comber noil feedstock for subsequent spinning |
| How much | 1 kg net noil at new first quality release |
| How well | actual declared spinning receiver specification for purity and length plus measured moisture/trash/contamination; no medical specification implied |
| How long or cycle | one original first-release production cohort; later services retain Qc |
| reference_flow_link | first_release_noil |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Cotton waste, except garnetted stock `706d76ad-229e-4559-81bf-6b8619cbe6be` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | comber source line and lot; ginned virgin cotton origin and prior preparation; ungarnetted unbleached short-fibre form; cotton purity and measured foreign-fibre contamination; fibre length distribution and receiver spinning specification; measured plant trash and neps; free moisture and declared as-released mass basis; oil or finish identity and retained content when present; first quality release Q and original cohort Qc; opening and closing WIP plus unused non-WIP vectors; gross physical V distinct from attributional A; joint co-output allocation evidence; legal transfer status and receiver acceptance; site and technology; representative production and service periods; actual packaging composition and full component balances; native identity restrictions and provider compatibility |

Every qualifier is required in the actual dataset metadata or exchange context; a justified absence must remain explicit. The generic Product flow is at plant with unspecified treatment and no fixed noil grade, CAS or geography. It is restricted here to the stated comber-origin unbleached ungarnetted spinning feedstock. The identity does not establish receiver acceptance, legal status or composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| meas_reference | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | All rows are per 1 kg reference flow; Q is newly first released net fibre mass. Protocols collect raw unnormalized numerators; calc_normalize performs A/Q once. ClosingFG is already inside Q once. |
| meas_moisture | cotton and physical mass ledger | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep as-released wet mass and independently measured free-water fraction w; dry cotton and actual trash/contamination form separate measured partitions. m_dry=m_as_received*(1-w) only after defining non-water constituents. No default regain, oil fraction or density. Do not add assay partitions to the purchased whole mass. |
| meas_service | services | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Service numerator is assigned to original Qc; H is not a denominator. Gross V balances remain independent of A and n. |
| meas_energy | electrical rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Keep raw kWh; the verified energy unit group has reference MJ and kWh factor3.6. Do not interpret the property name as fuel combustion or apply a calorific factor to cotton. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | ginned virgin cotton lint in traceable bales before opening/carding; source and moisture declared |
| starting_condition_role | foreground input gate; carry actual upstream cotton supply once |
| product_classification_scope | Only unbleached ungarnetted cotton short fibres separated at the comber are the reference product. Keep card strips, blowroom waste, lap/sliver/roving waste and yarn hard waste separate. Exclude seed cotton, linters removed from cottonseed, hulls, mixed floor sweepings, wool/silk waste, garnetted fabric/yarn, bleached absorbent cotton, long combed sliver and yarn from reference Q. Classification 39214 is broader than this noil boundary; 39215 cannot substitute for it. |
| recursive_input_rule | same-category noil receipts retain prior process state and inherited upstream vector once; never rebuild the same ginning/combing history or count returned noil as newly produced |
| upstream_dataset_requirement | Ginned cotton carries representative cultivation and ginning supply through one linked upstream dataset; do not invent a zero-burden waste cut-off for a valuable noil. Distinguish integrated combing from an explicitly contracted upstream combing service with its actual burden vector; never add a purchased noil and rebuild the same cotton/combing history. Outbound transport after the stated dispatch gate and downstream blending/spinning are outside this foreground boundary. |
| disclosure | input state; actual equipment; all co-outputs; product/waste status; original cohort; moisture; source/utility restrictions; all production failures; stocks; later service period and packaging |

### Normative System Boundary Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_full_route | foreground_system | Start at received ginned cotton bales; include receiving and opening/cleaning, carding, actual drawing/lap preparation needed for combing, combing separation, segregated noil collection, dry inspection and actual mechanical cleaning, sampling and first quality release for a named spinning customer specification. Include suction, dust filtration, compression and attributable maintenance. Model the actual route; purchased finished noils plus packing alone cannot represent this integrated production dataset. | `usitc-comber-1990`; `gp-comber-noil`; `jrc-textiles-2023` |
| b_exclusive | reference_product | Only unbleached ungarnetted cotton short fibres separated at the comber are the reference product. Keep card strips, blowroom waste, lap/sliver/roving waste and yarn hard waste separate. Exclude seed cotton, linters removed from cottonseed, hulls, mixed floor sweepings, wool/silk waste, garnetted fabric/yarn, bleached absorbent cotton, long combed sliver and yarn from reference Q. Classification 39214 is broader than this noil boundary; 39215 cannot substitute for it. | `un-cpc3-2025`; `usitc-comber-1990`; `gp-comber-noil` |
| b_physical_burden | every_exchange | Keep gross physical quantities V and their source/destination partition independently from the attributional inventory vector A. Allocation changes burdens; it never rewrites the actual mass balance or invents a physical fibre input. An exported mixed collector total and its source partitions describe one transfer and one provider link; do not add them. A newly discovered actual exchange F must receive a specific atomic row; remove X only when it is an exact same-side duplicate already inside OTHER. Never use an undivided OTHER as a selected flow. The normalized A/Q view is environmental attribution; physical co-output cards retain gross V in the joint ledger and cannot offer a second supply provider carrying the same A. Never use A as the physically shipped mass or test physical conservation on allocated A. | `ilcd-attributional-2010` |
| b_release_service | production_and_finished_stock | Q is the net fibre mass newly passing the first spinning-feedstock quality release in the production cohort. Q includes that cohort remaining in closing finished goods once; do not add closingFG to Q again. Subsequent inspection, storage, compression, packaging, handling and dispatch are a separate service ledger assigned to the original released cohort Qc. Service throughput H and gross shipments S are not a new production denominator. Cancel internal noil transfers and their inherited vectors when combining modules. | `usitc-comber-1990`; `ilcd-attributional-2010` |
| b_inheritance | raw_material_WIP_and_unused_stock | At every physical gate retain opening/closing WIP, unused non-WIP inputs, first-release finished stock, returns and their exchange-by-exchange inherited vectors. Preserve all failed lots, Q0, start/stop, idle, cleanup and real rework loads. Consume opening WIP with its history; carry closing WIP history forward; unused unopened supplies retain procurement history separately. Do not subtract a stock correction twice from an already net issue. Reinspection and redispatch create no new Q. | `ilcd-attributional-2010` |
| b_actual_services | utilities_and_auxiliaries | The baseline is dry mechanical fibre separation. Mains water applies only to actual humidification or utility makeup; no washing, bleach, chemical dissolution, steam, boiler, drying heat or onsite combustion is assumed. If actually operated, retain its loads even when unauthorized or outside the intended route, report the route departure and add every purchased whole formulation, fuel, water return, waste and actual gas species separately before using the dataset. Purchased formulations are counted once; assays and carrier water are subsidiary balances. In-house preparation uses each actual purchased ingredient plus its real energy and losses. | `usitc-comber-1990`; `jrc-textiles-2023` |
| b_packaging | each_packaging_component | For each actual jute cloth, cotton cloth, steel wire and polypropylene strap maintain its own balance: opening empty + opening attached to WIP/FG + opening reusable stock + purchases P + external returns received ER = closing empty/attached/reusable + material on gross physical shipments S + external returns outward EO + waste W. Internal reuse I cancels between steps; it is neither another purchase nor noil Q nor an automatic coproduct. Keep inlet bale wrappings and outlet packaging separately by lot and component. | `usitc-comber-1990`; `ilcd-attributional-2010` |
| b_upstream | upstream_and_outsourced_interfaces | Ginned cotton carries representative cultivation and ginning supply through one linked upstream dataset; do not invent a zero-burden waste cut-off for a valuable noil. Distinguish integrated combing from an explicitly contracted upstream combing service with its actual burden vector; never add a purchased noil and rebuild the same cotton/combing history. Outbound transport after the stated dispatch gate and downstream blending/spinning are outside this foreground boundary. | `usitc-comber-1990`; `ilcd-attributional-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preparation | Ginned cotton preparation and joint combing | required | Actual ginned virgin cotton route; retain all co-outputs | joint production through physical separation | gross cotton throughput V and separate noil/long-sliver quantities |
| noil_release | Segregated noil collection cleaning and first release | required | Cleaning only as actually performed; inspection and release always documented | dedicated noil production | new first released noil Q |
| services | Finished-stock storage packing handling and dispatch | required | Actual services and packaging by original cohort | post-release service ledger; no new production | original cohort Qc; H and S only activity records |

### Process: Ginned cotton preparation and joint combing (`preparation`)

#### Inputs

##### Product flows

###### Ginned virgin cotton feedstock (`ginned_cotton`)

Receive traceable ginned fibre bales excluding seed and linters; retain fibre origin and bale coverings separately. A formal Cotton fabric identity with woven-fabric synonyms is incompatible with ginned raw lint regardless of a raw-cotton classification or generic raw-cotton comment. Keep this physically specific input unbound pending a compatible identity. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Ginned uncarded cotton lint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_material.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `usitc-comber-1990`

###### Metered electrical supply (`preparation_electricity`)

Use only CN grid-average consumption mix delivered below 1 kV to the user. Meter this stage including its suction and controls. This is not hydropower-only, power-plant production, medium/high-voltage electricity, purchased compressed air, heat or diesel. Record actual geography/voltage/provider; incompatible supply requires another verified atomic identity. Convert raw kWh to MJ using 3.6 before allocation. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: n per reference flow; raw records under cp_energy.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources: `jrc-textiles-2023`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Long-fibre combed sliver co-output (`long_combed_sliver`)

This Product flow is finished manufactured carded/combed cotton at plant. Here it is the physically separate long-fibre combed sliver from the same joint combing gate; never use it for short rejected noil. Declare actual presentation and cotton-only composition. Subsequent sliver drawing for yarn quality belongs to that co-output. Measure full gross V separately from burden allocation; this is not Q. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton, carded or combed `93976740-418a-40e3-8901-dbc34f0acdc6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_material.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `usitc-comber-1990`

###### Segregated unreleased comber noil (`raw_noil_transfer`)

Generic Product flow at plant with unspecified treatment; no fixed grade, CAS, geography, noil yield or spinning acceptance is certified by this identity. Restrict this row to unbleached ungarnetted cotton short fibres originating specifically at the comber; exclude linters, seed cotton, card strips, yarn hard waste, cloth and mixed floor sweepings. Retain fibre length distribution, measured plant trash, free moisture, oil/finish contamination, cotton purity, source line/lot and actual receiver specification/status. The official Chinese name is broad and does not mean all recovered fibre is excluded; the English ungarnetted boundary controls. Transfer gross physical V with its inherited inventory vector; internal movements cancel on consolidation and do not create another procurement or first release. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton waste, except garnetted stock `706d76ad-229e-4559-81bf-6b8619cbe6be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_material.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

###### Recovered card-strip co-output (`card_strip_product`)

Conditional only for this specific separated cotton stream actually accepted as functional product. Record its gross mass and receiver separately; it is not comber noil and not reference Q. The same physical mass cannot also be discarded waste. Do not combine card strips with blowroom fibre or plant trash. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Recovered cotton card strips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_material.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `usitc-comber-1990`; `gp-comber-noil`

###### Recovered blowroom cotton co-output (`blowroom_fibre_product`)

Conditional only for this specific separated cotton stream actually accepted as functional product. Record its gross mass and receiver separately; it is not comber noil and not reference Q. The same physical mass cannot also be discarded waste. Do not combine card strips with blowroom fibre or plant trash. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Recovered blowroom cotton fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_material.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `usitc-comber-1990`; `gp-comber-noil`

##### Waste flows

###### Discarded cotton fibre (`preparation_discarded_cotton`)

Only cotton fibre actually discarded at this stage; exclude separately weighed plant matter and collector dust. Unreleased failed lots and post-release service rejects retain their distinct history and actual destination; no default zero burden or credit. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Discarded ungarnetted cotton fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Separated plant trash (`preparation_plant_trash`)

Conditional measured plant matter removed in this stage; weigh and characterize this actual stream with moisture and destination. Retained trash within noil is part of that noil mass and cannot be counted again as separated output. Mixed collector composition requires one total with nonadditive source partitions and no invented pure-species split. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton leaf and boll plant residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Captured cotton dust (`preparation_captured_dust`)

Weigh the actual captured cotton-dust stream and its composition, filter-bin opening/closing stock and destination. This waste is not an atmospheric elementary release; do not count the collector total again under plant trash or discarded fibre. Product recovery, if real, requires its own exclusive functional product row. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Captured cotton fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

##### Elementary flows

###### Residual particulate emission to air (`preparation_air_pm`)

Elementary emission to air with unspecified subcompartment and unspecified particle size. No fixed composition, stack height or characterization factor is provided. The native clinker example is not a cotton emission factor or a restriction to clinker. Use independently measured stage exhaust/fugitive particulate mass and retain actual controls, medium and sampling; no PM2.5/PM10 assumption. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `jrc-textiles-2023`; `ilcd-attributional-2010`

### Process: Segregated noil collection cleaning and first release (`noil_release`)

#### Inputs

##### Product flows

###### Metered electrical supply (`noil_release_electricity`)

Use only CN grid-average consumption mix delivered below 1 kV to the user. Meter this stage including its suction and controls. This is not hydropower-only, power-plant production, medium/high-voltage electricity, purchased compressed air, heat or diesel. Record actual geography/voltage/provider; incompatible supply requires another verified atomic identity. Convert raw kWh to MJ using 3.6 before allocation. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: n per reference flow; raw records under cp_energy.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources: `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Unreleased noil for cleaning and inspection (`raw_noil_receipt`)

Generic Product flow at plant with unspecified treatment; no fixed grade, CAS, geography, noil yield or spinning acceptance is certified by this identity. Restrict this row to unbleached ungarnetted cotton short fibres originating specifically at the comber; exclude linters, seed cotton, card strips, yarn hard waste, cloth and mixed floor sweepings. Retain fibre length distribution, measured plant trash, free moisture, oil/finish contamination, cotton purity, source line/lot and actual receiver specification/status. The official Chinese name is broad and does not mean all recovered fibre is excluded; the English ungarnetted boundary controls. Transfer gross physical V with its inherited inventory vector; internal movements cancel on consolidation and do not create another procurement or first release. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton waste, except garnetted stock `706d76ad-229e-4559-81bf-6b8619cbe6be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_material.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

###### Actual humidification makeup (`humidification_water`)

Conditional on actual humidification. Meter the supplied whole water stream and track water retained in fibre, emitted vapour, purge and stocks. Use a mass-based mains-water identity compatible with actual supply; a viscose-specific CTUe water definition is incompatible. This is not washing or a source abstraction; utility supply burden is linked once. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Mains water for cotton-room humidification
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_water.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water`
- Sources: `jrc-textiles-2023`

#### Outputs

##### Product flows

###### First spinning-quality noil release (`first_release_noil`)

Generic Product flow at plant with unspecified treatment; no fixed grade, CAS, geography, noil yield or spinning acceptance is certified by this identity. Restrict this row to unbleached ungarnetted cotton short fibres originating specifically at the comber; exclude linters, seed cotton, card strips, yarn hard waste, cloth and mixed floor sweepings. Retain fibre length distribution, measured plant trash, free moisture, oil/finish contamination, cotton purity, source line/lot and actual receiver specification/status. The official Chinese name is broad and does not mean all recovered fibre is excluded; the English ungarnetted boundary controls. Q is new net fibre mass at the first documented spinning-quality release; closingFG from this cohort is already included once. Subsequent storage, packing and dispatch remain in services. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton waste, except garnetted stock `706d76ad-229e-4559-81bf-6b8619cbe6be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_release`
- Sources: `usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

##### Waste flows

###### Discarded cotton fibre (`noil_release_discarded_cotton`)

Only cotton fibre actually discarded at this stage; exclude separately weighed plant matter and collector dust. Unreleased failed lots and post-release service rejects retain their distinct history and actual destination; no default zero burden or credit. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Discarded ungarnetted cotton fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Separated plant trash (`noil_release_plant_trash`)

Conditional measured plant matter removed in this stage; weigh and characterize this actual stream with moisture and destination. Retained trash within noil is part of that noil mass and cannot be counted again as separated output. Mixed collector composition requires one total with nonadditive source partitions and no invented pure-species split. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton leaf and boll plant residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Captured cotton dust (`noil_release_captured_dust`)

Weigh the actual captured cotton-dust stream and its composition, filter-bin opening/closing stock and destination. This waste is not an atmospheric elementary release; do not count the collector total again under plant trash or discarded fibre. Product recovery, if real, requires its own exclusive functional product row. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Captured cotton fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Actual humidifier purge (`water_purge`)

Conditional actual liquid purge sent to its documented wastewater receiver; include measured suspended cotton material and dissolved additives in a subsidiary composition ledger. Do not call COD a chemical mass. No purge is assumed absent without operational evidence. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Humidifier purge water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_water.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water`
- Sources: `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Removed polypropylene contamination (`pp_contamination`)

Conditional only when tests identify polypropylene in a separately collected contamination stream; keep all other actually identified contaminants as separate named rows. No blanket assumption that noil is contamination-free; this is not the bag or strap purchase. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Removed polypropylene fibre contamination
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `usitc-comber-1990`; `gp-comber-noil`

##### Elementary flows

###### Residual particulate emission to air (`noil_release_air_pm`)

Elementary emission to air with unspecified subcompartment and unspecified particle size. No fixed composition, stack height or characterization factor is provided. The native clinker example is not a cotton emission factor or a restriction to clinker. Use independently measured stage exhaust/fugitive particulate mass and retain actual controls, medium and sampling; no PM2.5/PM10 assumption. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Net water vapour release (`water_vapour_release`)

Conditional ordinary H2O vapour emitted to air with unspecified subcompartment, CAS 7732-18-5, Mass/kg. The native synonym list contains heavy/tritiated-water noise; do not interpret those synonyms as permitting isotope substitution or as ordinary H2O evidence for another substance. Measure net vapour from actual humidification/fibre moisture change and inlet/outlet humidity/airflow; no reaction water and no dust-residual fit. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_water.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water`
- Sources: `jrc-textiles-2023`; `ilcd-attributional-2010`

### Process: Finished-stock storage packing handling and dispatch (`services`)

#### Inputs

##### Product flows

###### Metered electrical supply (`services_electricity`)

Use only CN grid-average consumption mix delivered below 1 kV to the user. Meter this stage including its suction and controls. This is not hydropower-only, power-plant production, medium/high-voltage electricity, purchased compressed air, heat or diesel. Record actual geography/voltage/provider; incompatible supply requires another verified atomic identity. Convert raw kWh to MJ using 3.6 before allocation. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: n per reference flow; raw records under cp_energy.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources: `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Internal receipt of first released noil (`released_noil_receipt`)

Generic Product flow at plant with unspecified treatment; no fixed grade, CAS, geography, noil yield or spinning acceptance is certified by this identity. Restrict this row to unbleached ungarnetted cotton short fibres originating specifically at the comber; exclude linters, seed cotton, card strips, yarn hard waste, cloth and mixed floor sweepings. Retain fibre length distribution, measured plant trash, free moisture, oil/finish contamination, cotton purity, source line/lot and actual receiver specification/status. The official Chinese name is broad and does not mean all recovered fibre is excluded; the English ungarnetted boundary controls. Transfer gross physical V with its inherited inventory vector; internal movements cancel on consolidation and do not create another procurement or first release. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton waste, except garnetted stock `706d76ad-229e-4559-81bf-6b8619cbe6be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_service.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

###### External returned noil (`returned_noil`)

Generic Product flow at plant with unspecified treatment; no fixed grade, CAS, geography, noil yield or spinning acceptance is certified by this identity. Restrict this row to unbleached ungarnetted cotton short fibres originating specifically at the comber; exclude linters, seed cotton, card strips, yarn hard waste, cloth and mixed floor sweepings. Retain fibre length distribution, measured plant trash, free moisture, oil/finish contamination, cotton purity, source line/lot and actual receiver specification/status. The official Chinese name is broad and does not mean all recovered fibre is excluded; the English ungarnetted boundary controls. Conditional actual returns retain the original cohort Qc and inherited vectors; reverse the original delivery in its service ledger and add actual incremental rework only. No new Q. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton waste, except garnetted stock `706d76ad-229e-4559-81bf-6b8619cbe6be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_service.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

###### Cotton bale cloth — Purchased component (`cottoncloth_supply`)

Use one woven cotton cloth with verified composition and condition. Its native formal fabric name/synonyms agree with this article; the raw-cotton classification and generic raw-cotton comment are an isolated inconsistent classification/context, disclosed here, not permission to bind raw lint. No bleached/printed grade is implied. Conditional on actual use of this component at inlet or outlet. Purchased component: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Cotton bale cloth — External return received (`cottoncloth_external_return`)

Use one woven cotton cloth with verified composition and condition. Its native formal fabric name/synonyms agree with this article; the raw-cotton classification and generic raw-cotton comment are an isolated inconsistent classification/context, disclosed here, not permission to bind raw lint. No bleached/printed grade is implied. Conditional on actual use of this component at inlet or outlet. External return received: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Jute hessian bale cloth — Purchased component (`jutecloth_supply`)

Keep this specific physical material unbound until a compatible native identity is confirmed. Natural burlap evidence does not certify every fibre composition; verify actual jute hessian. Conditional on actual use of this component at inlet or outlet. Purchased component: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Woven jute hessian bale cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Jute hessian bale cloth — External return received (`jutecloth_external_return`)

Keep this specific physical material unbound until a compatible native identity is confirmed. Natural burlap evidence does not certify every fibre composition; verify actual jute hessian. Conditional on actual use of this component at inlet or outlet. External return received: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Woven jute hessian bale cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Steel baling wire — Purchased component (`steelwire_supply`)

Use cylindrical flexible iron/non-alloy steel wire from steel production, matching actual diameter, grade and coating; not flat steel band, copper rod or a wire rope assembly. Conditional on actual use of this component at inlet or outlet. Purchased component: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Steel baling wire — External return received (`steelwire_external_return`)

Use cylindrical flexible iron/non-alloy steel wire from steel production, matching actual diameter, grade and coating; not flat steel band, copper rod or a wire rope assembly. Conditional on actual use of this component at inlet or outlet. External return received: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Polypropylene baling strap — Purchased component (`ppstrap_supply`)

Keep this specific polypropylene strap unbound; a25kg seed bag, farm twine, cable tie or PP resin is not a ready baling strap. Conditional on actual use of this component at inlet or outlet. Purchased component: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Polypropylene baling strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Polypropylene baling strap — External return received (`ppstrap_external_return`)

Keep this specific polypropylene strap unbound; a25kg seed bag, farm twine, cable tie or PP resin is not a ready baling strap. Conditional on actual use of this component at inlet or outlet. External return received: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Polypropylene baling strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Gross physical noil dispatch (`gross_noil_dispatch`)

Generic Product flow at plant with unspecified treatment; no fixed grade, CAS, geography, noil yield or spinning acceptance is certified by this identity. Restrict this row to unbleached ungarnetted cotton short fibres originating specifically at the comber; exclude linters, seed cotton, card strips, yarn hard waste, cloth and mixed floor sweepings. Retain fibre length distribution, measured plant trash, free moisture, oil/finish contamination, cotton purity, source line/lot and actual receiver specification/status. The official Chinese name is broad and does not mean all recovered fibre is excluded; the English ungarnetted boundary controls. Record actual gross outward fibre including redelivery with cohort provenance; this is S, not a second production output Q. OpeningFG history and closingFG stay in the service stock reconciliation. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton waste, except garnetted stock `706d76ad-229e-4559-81bf-6b8619cbe6be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_service.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `usitc-comber-1990`; `gp-comber-noil`; `ilcd-attributional-2010`

###### Cotton bale cloth — Component physically leaving (`cottoncloth_outward`)

Use one woven cotton cloth with verified composition and condition. Its native formal fabric name/synonyms agree with this article; the raw-cotton classification and generic raw-cotton comment are an isolated inconsistent classification/context, disclosed here, not permission to bind raw lint. No bleached/printed grade is implied. Conditional on actual use of this component at inlet or outlet. Component physically leaving: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Jute hessian bale cloth — Component physically leaving (`jutecloth_outward`)

Keep this specific physical material unbound until a compatible native identity is confirmed. Natural burlap evidence does not certify every fibre composition; verify actual jute hessian. Conditional on actual use of this component at inlet or outlet. Component physically leaving: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Woven jute hessian bale cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Steel baling wire — Component physically leaving (`steelwire_outward`)

Use cylindrical flexible iron/non-alloy steel wire from steel production, matching actual diameter, grade and coating; not flat steel band, copper rod or a wire rope assembly. Conditional on actual use of this component at inlet or outlet. Component physically leaving: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Polypropylene baling strap — Component physically leaving (`ppstrap_outward`)

Keep this specific polypropylene strap unbound; a25kg seed bag, farm twine, cable tie or PP resin is not a ready baling strap. Conditional on actual use of this component at inlet or outlet. Component physically leaving: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Polypropylene baling strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

##### Waste flows

###### Discarded cotton fibre (`services_discarded_cotton`)

Only cotton fibre actually discarded at this stage; exclude separately weighed plant matter and collector dust. Unreleased failed lots and post-release service rejects retain their distinct history and actual destination; no default zero burden or credit. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Discarded ungarnetted cotton fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Separated plant trash (`services_plant_trash`)

Conditional measured plant matter removed in this stage; weigh and characterize this actual stream with moisture and destination. Retained trash within noil is part of that noil mass and cannot be counted again as separated output. Mixed collector composition requires one total with nonadditive source partitions and no invented pure-species split. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Cotton leaf and boll plant residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Captured cotton dust (`services_captured_dust`)

Weigh the actual captured cotton-dust stream and its composition, filter-bin opening/closing stock and destination. This waste is not an atmospheric elementary release; do not count the collector total again under plant trash or discarded fibre. Product recovery, if real, requires its own exclusive functional product row. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Captured cotton fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `usitc-comber-1990`; `jrc-textiles-2023`; `ilcd-attributional-2010`

###### Cotton bale cloth — Discarded component (`cottoncloth_waste`)

Use one woven cotton cloth with verified composition and condition. Its native formal fabric name/synonyms agree with this article; the raw-cotton classification and generic raw-cotton comment are an isolated inconsistent classification/context, disclosed here, not permission to bind raw lint. No bleached/printed grade is implied. Conditional on actual use of this component at inlet or outlet. Discarded component: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Discarded cotton bale cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Jute hessian bale cloth — Discarded component (`jutecloth_waste`)

Keep this specific physical material unbound until a compatible native identity is confirmed. Natural burlap evidence does not certify every fibre composition; verify actual jute hessian. Conditional on actual use of this component at inlet or outlet. Discarded component: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Discarded jute hessian cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Steel baling wire — Discarded component (`steelwire_waste`)

Use cylindrical flexible iron/non-alloy steel wire from steel production, matching actual diameter, grade and coating; not flat steel band, copper rod or a wire rope assembly. Conditional on actual use of this component at inlet or outlet. Discarded component: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Discarded steel baling wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

###### Polypropylene baling strap — Discarded component (`ppstrap_waste`)

Keep this specific polypropylene strap unbound; a25kg seed bag, farm twine, cable tie or PP resin is not a ready baling strap. Conditional on actual use of this component at inlet or outlet. Discarded component: record its own P/I/ER/S/EO/W and opening/closing empty, WIP-attached, FG-attached and reusable stocks under b_packaging. Outward material distinguishes gross shipment attachment S from return to external owner EO; no automatic coproduct/provider credit. Internal I cancels and is not procurement. This is separate from fibre Q; do not multiply by a nominal bale weight. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Discarded polypropylene strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_packaging.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `usitc-comber-1990`; `ilcd-attributional-2010`

##### Elementary flows

###### Residual particulate emission to air (`services_air_pm`)

Elementary emission to air with unspecified subcompartment and unspecified particle size. No fixed composition, stack height or characterization factor is provided. The native clinker example is not a cotton emission factor or a restriction to clinker. Use independently measured stage exhaust/fugitive particulate mass and retain actual controls, medium and sampling; no PM2.5/PM10 assumption. Quantity n is the existing result of calc_normalize in Section 8; collecting raw records and reading n do not execute another division.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: n per reference flow; raw records under cp_environment.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_environment`
- Sources: `jrc-textiles-2023`; `ilcd-attributional-2010`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | joint_combing_and_shared_services | This PCR chooses attributional supply modelling for functional spinning feedstock. First assign dedicated noil collection, cleaning, testing and packaging directly; subdivide or virtually subdivide separable preparation, combing and services using quantitative process knowledge and submeter records. Identify joint cotton/combing burdens that actually remain shared with long combed sliver and other valuable outputs. | `ilcd-attributional-2010` |
| a_causality | each_remaining_exchange | For each remaining exchange test the determining physical causal relationship to each co-function; justify the chosen driver and measure it. Mechanical material throughput may determine conveying demand; combing required for long-sliver quality does not become noil-caused solely because noil mass exists. Do not apply a single mass share to every flow, and do not substitute correlation or a yield ratio for determining causality. | `ilcd-attributional-2010` |
| a_residual_value | genuinely_unresolved_joint_inventory | Only genuinely remaining joint exchanges use contemporaneous representative market values at the same joint process gate and actual state. Document values and quantities for every valuable co-output and a sensitivity check. Back out separately incurred noil cleaning, baling, packaging and freight from later delivered prices. No fixed share, free choice between physical and economic allocation, avoided-virgin-cotton credit or default substitution is allowed. | `ilcd-attributional-2010` |
| a_status | product_waste_and_receiver | Record actual legal status, ownership transfer, receiver acceptance, destination and functional use. The reference is a Product flow supply of accepted noil; waste treatment services require a separate suitable reference and cannot be represented by a negative noil supply. For each physical fibre quantity choose product transfer or discarded waste exclusively. Negative-value waste and end-of-life recovery require explicit true-joint-process/zero-value boundary assessment under ILCD; do not import that treatment scenario into this valuable production-residue supply. | `usitc-comber-1990`; `ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | preparation | gross cotton and co-output transfers plus inheritance | scale tickets and process-lot register | row_id; gate; lot; input state; gross V; dry cotton; free water; measured trash; contamination; opening WIP; closing WIP; unused non-WIP; inherited vector; receiver | Calibrated net weighing with tare; matched moisture/contaminant samples; link each combing line and separate co-output; no borrowed yield collect unnormalized V and inherited vectors; apply calc_stock then calc_allocate then calc_normalize once for per 1 kg reference flow | kg | each lot and shift | whole production cohort including all failures and Q0 | all manufacture gates including noil_release | per 1 kg reference flow | scale calibration; stock reconciliation; traceability; sampling results |
| cp_release | noil_release | first quality release | release certificates and weights | cohort_id; lot_id; first_release_id; Q; net fibre mass; tare; moisture; fibre purity; length; trash; neps; oil; spinning receiver specification; accepted status; failed quantity; closingFG included | Unique first-release event and calibrated net fibre scale; compare sampled properties with declared spinning specification; do not assume medical purity sum newly first released Q once including same-cohort closingFG; retain raw totals; unit row1kg references calc_normalize | kg | each first release | complete cohort once | noil release gate | per 1 kg reference flow | release signature; customer acceptance; scale and laboratory records |
| cp_energy | preparation | stage energy and shared services | meters and operation logs | row_id; process_id; voltage; geography; provider; readings; raw kWh; integrated amount; rate; duration; idle; cleanup; allocation driver | Submeter all three stages and reconcile invoices; distinguish integrated meter reading from power rate; use causal driver only after subdivision retain raw readings and units; calc_units then calc_allocate then calc_normalize once for per 1 kg reference flow | kWh; MJ | continuous with shift and invoice reconciliation | production and post-release service periods linked to original cohorts | preparation; noil_release; services | per 1 kg reference flow | meter calibration; invoices; voltage evidence; complete runtime log |
| cp_environment | noil_release | each solid reject and particulate outlet | waste tickets and environmental sampling | row_id; stage; source partition; waste status; receiver; opening bin; closing bin; gross mass; moisture; measured composition; outlet flow; temperature; pressure; sampling duration; actual particulate concentration; air medium | Weigh separately collected streams; characterize mixed total without adding its partitions; match environmental sampling to actual exhaust flow and time; no occupational-to-emission conversion raw mass and rate/integrated volume remain unnormalized; calc_units then calc_allocate then calc_normalize once for per 1 kg reference flow | kg; m3; h; mg/m3 | each removal plus representative operating states | all runs including startup shutdown idle and failures | preparation; noil_release; services and each outlet | per 1 kg reference flow | sampling report; calibration; receiver acceptance; total/partition reconciliation |
| cp_water | noil_release | actual humidification water and its exits | water meters humidity and purge records | row_id; ordinary H2O; supply amount; fibre moisture inlet/outlet; inlet/outlet humidity; actual airflow; temperature; pressure; net vapour; liquid purge; opening/closing water stock; density method | Measure each water path independently; evaluate actual humidification equipment and moisture change; any integral already reported is used once; no reaction water inferred retain unnormalized water balance; calc_units then calc_allocate then calc_normalize once for per 1 kg reference flow | kg; m3; h | each shift and material lot | same cohorts and water service period | actual humidification and its liquid/air outlets | per 1 kg reference flow | calibrated meter; humidity sample; purge analysis; independently measured density if needed |
| cp_service | services | FG storage returns and gross dispatch | cohort FG and shipment ledger | row_id; cohort_id; original Qc; H; S; openingFG; closingFG; inherited vector; external return; original delivery reversal; real incremental rework; service electricity; rejects | Link each movement to original first-release cohort; record physical outward/return separately and reconcile all historical burdens keep raw H/S/stocks and histories; apply calc_service then same calc_normalize once using original Qc for per 1 kg reference flow | kg; MJ; h | each movement and stock period | whole original cohort service period including future settlement | FG store packing and dispatch gates | per 1 kg reference flow | dispatch/return ticket; original cohort link; burden carry-forward and settlement |
| cp_packaging | services | one row per packaging component and movement | component receipts issues returns and stock register | row_id; component; inlet/outlet role; cohort; opening empty; opening attached WIP; opening attached FG; opening reusable; P; I; ER; S; EO; W; closing empty/attached/reusable; actual composition; supplier; net kg | Weigh each component and movement; reconcile b_packaging separately for cotton cloth jute cloth steel wire and PP strap; retain inlet bale wrapping history and outbound gross attachments retain unnormalized P/I/ER/S/EO/W and stocks; calc_packaging then calc_allocate then calc_normalize once for per 1 kg reference flow | kg | each receipt movement and closing stock | production and full original-cohort service period | all three process gates with component ownership | per 1 kg reference flow | component scale; composition certificate; purchase/return tickets; complete stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_units | all inventory rows | Convert each raw measurement in its own unit before allocation:1kWh=3.6MJ;1t=1000kg. Integrate true rates once over measured duration; do not reintegrate cumulative quantities. Use independently measured substance/state density only for a required volume-to-mass conversion. Preserve gross V unchanged by allocation. | raw_measurements; unit_factors; rate_or_integral; substance_state_density | converted_raw_vector | `ilcd-attributional-2010` |
| calc_stock | manufacture and unused input stocks | For each actual material and each inherited exchange vector reconcile opening WIP + newly introduced material = closing WIP + first-release output + separately identified co-outputs + actual rejects/releases. Reconcile unused non-WIP supplies separately: opening + receipts = closing + actual issues + outward returns. Apply only unposted corrections; already net issues are not corrected twice. Keep water and measured contamination partitions nonadditive to whole mass. | gross_V; opening_WIP; closing_WIP; unused_nonWIP; inherited_vectors; new_receipts; issues | cohort_raw_vectors | `ilcd-attributional-2010` |
| calc_allocate | all inventory rows | Assign dedicated/virtually subdivided vectors first; for each remaining exchange use documented determining physical causality under a_causality; only the genuine remainder follows a_residual_value at the same joint gate. Retain all co-function vectors and reconcile their sum to the unallocated vector. A is the attributable unnormalized numerator after unit conversion and stock inheritance; it is not gross physical V. | cohort_raw_vectors; dedicated_vectors; causal_drivers; same_gate_values | A | `ilcd-attributional-2010` |
| calc_service | services | Reconcile openingFG + first-release receipt + external fibre returns = closingFG + gross fibre shipments + actual service rejects/releases with original inherited vectors. Reverse the original delivery for returns without erasing history and add only real incremental rework. Assign all service loads to original cohort Qc; H and S are activity records. For overlapping periods retain cohort-specific carry-forward and later settlement. Internal transfers and history cancel in the combined model. | original_Qc; opening_FG; closing_FG; gross_shipments_S; returns; inherited_vectors; incremental_service | cohort_service_A | `ilcd-attributional-2010` |
| calc_packaging | each packaging component | Apply the full component balance in b_packaging to each card. Distinguish new purchases P, external returns received ER, gross outward attachment S, outward external-owner return EO and waste W. Internal reuse I cancels; no material is purchased twice. Maintain inbound and outbound ownership history without adding packaging to net noil Q. | P; I; ER; S; EO; W; opening_component_stocks; closing_component_stocks | component_raw_vectors | `usitc-comber-1990`; `ilcd-attributional-2010` |
| calc_normalize | all inventory rows | n=A/Q; A is the attributable unnormalized exchange numerator for the first-release cohort; Q is its newly first released net noil kg. This is the only division: cards and collection aggregation reference this same result. For services use the original cohort Qc in this same operator after calc_service; H is never a denominator. The first_release_noil row is 1 kg. If the applicable denominator Q (or original Qc for services) is zero retain the actual burdens without a unit result. | A; Q; original_Qc | n per 1 kg reference flow | `ilcd-attributional-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_trace | all rows | Link real operating records and gross quantities to a common lot/site/period; include every idle failed and Q0 state. No fabricated plant values or transferable supplier ranges. | production and stock ledgers; calibrated measurements |
| dq_native | UUID-bearing rows | Use official Chinese displays and complete per-card restrictions. Exact flow/property/unit chain is identity evidence only; verify each actual supplier and composition separately. Missing raw-lint and auxiliary UUIDs stay concrete and explicit. | native identity records and supplier evidence |
| dq_scope | source support | USITC1990 describes the route and unbleached uses; it is not a current legal ruling or modern inventory. G P supplier claims identify commercial noil and neighbours only. BREF broader wool/synthetic lubricant examples do not establish cotton oil dosage. ILCD is generic attributional method, not a noil plant measurement. | full source context and actual applicability assessment |
| dq_uncertainty | unit result and services | Disclose measurement uncertainty, incomplete supplier identity, causal-allocation support, stock inheritance, source/geographic mismatch and service-cohort settlement. Do not claim clinical purity, a universal yield or complete LCIA characterization. | uncertainty log; allocation sensitivity; cohort carry-forward |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference_and_all_bound_exchanges | Verify noil origin at the comber and actual spinning-feedstock acceptance. Enforce each native basename, form, route, geography, medium, type, CAS where present and reference property. Generic cotton-waste identity alone does not certify a noil grade or legal status. Reject fabric as ginned cotton, carded sliver as noil, linters as noil, and garnetted material as ungarnetted noil. | `un-cpc3-2025`; `usitc-comber-1990`; `gp-comber-noil` |
| v_quantity | production_service_and_consolidation | Reconcile full gross mass and separate dry cotton, free moisture, measured plant matter, contamination and actual auxiliaries at manufacture, FG/service and combined gates. Q includes closingFG once. Keep whole failed/zero-output campaigns and opening/closing WIP and unused non-WIP inheritance. Internal transfers cancel exactly; two unknown losses cannot be fitted from one residual. No reaction or structural-water production is inferred for mechanical separation. | `usitc-comber-1990`; `ilcd-attributional-2010` |
| v_once | all_inventory_rows | Trace raw measurements through unit conversion and allocation to A, then apply calc_normalize exactly once. Collection and aggregation retain unnormalized records. Cards consume that result; no second division. Q0 keeps burdens with no unit result. Services use original Qc, never H; returns preserve original history and record only real incremental rework. | `ilcd-attributional-2010` |
| v_emissions | air_water_and_waste | Environmental exhaust requires measured outlet conditions and flow with actual particulate sampling; workplace exposure is not an emission factor. Integrate a true rate once; an already integrated volume is not multiplied by time again. Independently measure substance-specific density at actual temperature/pressure when needed. Do not derive chemical species from COD, total VOC or a mass-balance residual. Report captured solids separately from atmospheric releases and treatment links once. | `jrc-textiles-2023`; `ilcd-attributional-2010` |
| v_packaging | every_packaging_card | Check each component balance P/I/ER/S/EO/W including empty, WIP-attached, FG-attached and reusable opening/closing stock. Shipment packaging follows gross physical dispatch including returns/redelivery; it does not change net fibre Q. Check recovered old packaging is not repurchased and no automatic material credit is issued. | `usitc-comber-1990`; `ilcd-attributional-2010` |
| v_complete | dataset_before_use | Verify current projection, all required qualifiers, sources, protocols, allocation evidence and all conditional actual exchanges. Missing operating records require collection; missing auxiliaries remain explicit identity gaps. An unresolved core reference identity or unresolved core route/terminal quality makes the dataset unusable and methodology draft. Scientific and translation approval are independent of mechanical checks. | `ilcd-attributional-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | spinning feedstock models with matched origin and noil state |
| allowed_use | attributional noil supply at new first release with explicitly attached original-cohort services and upstream cotton once |
| excluded_use | waste-treatment service; garnetted cotton; linters; clinical cotton; universal plant average; automatic substitution credit |
| required_metadata | comber source line and lot; ginned virgin cotton origin and prior preparation; ungarnetted unbleached short-fibre form; cotton purity and measured foreign-fibre contamination; fibre length distribution and receiver spinning specification; measured plant trash and neps; free moisture and declared as-released mass basis; oil or finish identity and retained content when present; first quality release Q and original cohort Qc; opening and closing WIP plus unused non-WIP vectors; gross physical V distinct from attributional A; joint co-output allocation evidence; legal transfer status and receiver acceptance; site and technology; representative production and service periods; actual packaging composition and full component balances; native identity restrictions and provider compatibility |
| required_quality_disclosure | Disclose measurement uncertainty, incomplete supplier identity, causal-allocation support, stock inheritance, source/geographic mismatch and service-cohort settlement. Do not claim clinical purity, a universal yield or complete LCIA characterization. |
| update_trigger | change in fibre origin/state; combing or cleaning route; contamination; receiver specification; utility identity; allocation; first-release gate; stock/service boundaries; packaging; stronger source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Structure and Explanatory Notes,30June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39214 and39215 classification titles plus adjacent textile waste categories; classification context only |
| usitc-comber-1990 | official_guidance | USITC Publication2334, Cotton Comber Waste, November1990, A-10–A-11 and A-28–A-29; https://www.usitc.gov/publications/22/pub2334.pdf | ginned cotton preparation and combing origin; unbleached noil used in spinning; separate handling and natural burlap; conditional dealer cleaning; historical route facts only, no modern amounts or legal claims |
| gp-comber-noil | literature | G P Group India, Cotton Comber Noil; https://www.gpgroupindia.com/cotton-comber-noil.html | first-party commercial noil origin and OE spinning use; adjacent flat-strip lickerin and yarn-waste distinctions; supplier specifications not transferred as PCR ranges |
| jrc-textiles-2023 | official_guidance | JRC Textiles Industry BREF,2023, sections2.4.2–2.4.3, PDF68–69; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | cotton preparation process context and actual auxiliary screening; neighbouring wool and synthetic oil percentages are inapplicable to cotton noil; no default oil recipe or emission quantity |
| ilcd-attributional-2010 | official_guidance | ILCD Handbook General guide for LCA Detailed guidance, First edition March2010,7.9.2–7.9.3, PDF275–292; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | generic attributional subdivision and exchange-specific determining physical causality; genuine residual common-gate market values; waste/recycling limitations; foreground collection implementation is this PCR synthesis without borrowed plant numbers |
