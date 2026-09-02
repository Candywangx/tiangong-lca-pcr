---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-pelagic-fish-excluding-tunas-skipjack-or-stripe-bellied-bonito-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other pelagic fish (excluding tunas, skipjack, or stripe-bellied bonito), frozen

## 1. Scope and Applicability

This PCR covers the foreground preparation, freezing, finishing, packaging, and frozen storage of eligible pelagic finfish sold frozen as whole, round, headed, gutted, dressed, or comparable non-fillet presentations. The product may be individually frozen or block frozen and may be glazed, provided the presentation and glaze status are declared.

The category includes the pelagic species group described by CPC 3.0 subclass 21216, including herrings, sardines, sardinellas, brisling or sprats, mackerels, jack and horse mackerels, cobia, swordfish, and other pelagic fish not assigned to the excluded tuna/skipjack/stripe-bellied-bonito subclass. Species identity, scientific name where available, harvest area, production system, and presentation remain required lot-level qualifiers.

Excluded products are tunas, skipjack, stripe-bellied bonito, frozen fish fillets, frozen fish meat whether or not minced, frozen fish livers and roes, coated fish products, canned fish, smoked fish, dried or salted fish, and products for which the declared reference output includes cooking or another preservation route beyond freezing. CXS 190-1995 is a comparable quality and cold-chain reference only; its fillet scope does not bring fillets into this PCR.

The default foreground boundary begins with receipt of landed or supplied eligible fish at the freezing/processing facility and ends with 1 kg net frozen fish at the facility dispatch gate after the declared frozen-storage period. Capture or aquaculture, landing, inbound transport, downstream distribution, retail, cooking, consumption, and end-of-life are outside the foreground boundary and require separate upstream or downstream datasets when included in a study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-pelagic-fish-excluding-tunas-skipjack-or-stripe-bellied-bonito-frozen |
| classification_refs | CPC 3.0: 21216, exact scope reference |
| covered_products | Frozen eligible pelagic finfish in whole, round, headed, gutted, dressed, or comparable non-fillet presentations; glazed or unglazed; individually or block frozen |
| excluded_products | Tunas, skipjack, stripe-bellied bonito; fillets; minced or other fish meat; livers and roes; coated, canned, smoked, dried, salted, cooked, or otherwise preserved fish |
| representative_product | Net frozen eligible pelagic fish, packed for dispatch from a freezing/processing facility |
| production_route | Receipt and lot verification; sorting and preparation as applicable; freezing; optional glazing; packaging; frozen storage; dispatch |
| market_state | Frozen food product for human consumption, with species, presentation, glaze status, storage regime, and net mass declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of eligible frozen pelagic fish for human consumption at the freezing/processing facility dispatch gate |
| How much | 1 kg net fish mass, excluding glaze water and packaging |
| How well | Food-grade, lot-traceable product meeting the declared presentation, species, freezing, storage, and applicable food-safety specifications |
| How long or cycle | One completed production lot through the declared frozen-storage period to dispatch |
| reference_flow_link | `rf_other_pelagic_fish_frozen_net_mass` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net frozen fish mass |
| Reference product flow | Other pelagic fish (excluding tunas, skipjack, or stripe-bellied bonito), frozen `c8aa403f-97b6-44b2-afa8-862d825fec2f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species common name; scientific name where available; harvest area; wild-caught or aquaculture origin; supplier or vessel and lot identifier; product presentation; whole/round/headed/gutted/dressed state; individually or block frozen; freezing method; glaze status and glaze fraction; packaging configuration; net fish mass; receipt temperature; thermal-centre freezing endpoint; frozen-storage temperature and duration; facility geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net fish mass. Exclude glaze water and packaging from the reference amount and disclose their separately measured masses. |
| `lot_mass_balance` | Received fish, product, residues, glaze, and wastewater | Mass | kg | Use calibrated lot-level mass records on a consistent wet-mass basis and reconcile inputs, products, retained intermediates, residues, and measured liquid discharges. |
| `energy_units` | Electricity and fuels | Energy | kWh or MJ | Preserve the metered unit and conversion factor; do not mix electrical kWh and fuel lower-heating-value energy without an explicit conversion record. |
| `temperature_records` | Receipt, freezing, and frozen storage | Temperature | °C | Retain calibrated time-temperature records. For a quick-frozen route, verify a thermal-centre temperature of -18 °C or colder after thermal stabilization and continued deep-frozen storage. |
| `storage_duration` | Frozen storage | Time | day | Report actual lot-weighted storage duration and normalize storage energy to the reference product using product-mass-days. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Eligible landed or supplied pelagic fish received at the freezing/processing facility, with species, origin, presentation, supplier/vessel lot, inbound mass, and receipt temperature declared |
| starting_condition_role | Upstream product input to foreground frozen-fish preparation and preservation |
| product_classification_scope | Frozen non-fillet pelagic fish within the semantic scope represented by CPC 3.0 subclass 21216; classification is an external scope reference, not PCR identity |
| recursive_input_rule | If received fish is already frozen and falls in the same product category, record it as an upstream product input with a separately referenced upstream dataset; do not recursively reproduce its prior freezing inventory in this foreground package |
| upstream_dataset_requirement | Provide or cite species-, origin-, harvest/production-system-, and presentation-representative upstream datasets for received fish and other material or energy inputs |
| disclosure | Declare foreground gate, upstream cut, included preparation steps, freezing technology, glazing, packaging, storage duration, shared-utility allocation, co-product treatment, exclusions, and any data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | Foreground process system | Include receipt/verification, applicable preparation, freezing, optional glazing, packaging, frozen storage, on-site utilities, wastes, wastewater, and direct refrigerant losses through facility dispatch. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_upstream_inputs` | Received fish and purchased inputs | Link received fish, ice, water, energy carriers, refrigerants, and packaging to representative upstream datasets; do not treat missing upstream burdens as zero. | `eu-pef-2021-2279` |
| `sb_cold_chain` | Freezing and frozen storage | Include time-temperature-controlled freezing and storage operations and retain records sufficient to demonstrate the declared frozen state and food-safety controls. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `sb_exclusions` | Study boundary | Exclude capture/aquaculture, inbound transport, downstream distribution, retail, cooking, consumption, and end-of-life from this foreground package unless explicitly added with separate datasets and disclosed. | `unsd-cpc-3-2025`; `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | Receipt, sorting, and preparation | required | Always; individual preparation operations apply only when performed at the reporting facility | Foreground material reception and conditioning | per 1 kg net frozen fish at dispatch |
| `freezing` | Freezing | required | Always for fish frozen at the reporting facility; for already-frozen recursive input, record only re-freezing or temperature recovery actually performed | Foreground preservation | per 1 kg net frozen fish at dispatch |
| `finishing_packaging` | Glazing, finishing, and packaging | required | Packaging is required; glazing, washing, grading, and repacking are included when performed | Foreground finishing | per 1 kg net frozen fish at dispatch |
| `frozen_storage` | Frozen storage and dispatch | required | Always; report actual storage duration, including zero-day direct dispatch if supported | Foreground cold storage | per 1 kg net frozen fish and declared storage duration |

### Process: Receipt, sorting, and preparation (`receipt_preparation`)

#### Inputs

##### Product flows

###### Received wild pelagic fish (`received_wild_fish`)

Record the wet mass of wild-caught pelagic fish in this PCR scope crossing the facility gate and link it to a harvest-area-, species-, presentation-, and temperature-matched upstream dataset.

- Selected flow: Other wild pelagic fish (excluding tunas, skipjack, or stripe-bellied bonito), live, fresh or chilled `5e2db07e-9bba-476e-8c58-ff347637a51d`
- Flow property / unit: Mass / kg
- Amount rule: measured wild-caught lot input mass normalized to 1 kg net frozen fish at dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_traceability`
- Sources: `unsd-cpc-3-2025`; `codex-cxc-52-2003`

###### Received farmed pelagic fish (`received_farmed_fish`)

Record the wet mass of farmed pelagic fish in this PCR scope crossing the facility gate and link it to a production-system-, species-, presentation-, and temperature-matched upstream dataset.

- Selected flow: Other farmed pelagic fish (excluding tunas, skipjack, or stripe-bellied bonito), live, fresh or chilled `f752adf8-9415-415a-98f8-df1dd78d7a11`
- Flow property / unit: Mass / kg
- Amount rule: measured farmed-fish lot input mass normalized to 1 kg net frozen fish at dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_traceability`
- Sources: `unsd-cpc-3-2025`; `codex-cxc-52-2003`

###### Preparation water (`preparation_water`)

Record tap water used for washing, product cleaning, or preparation; product-contact water must meet the applicable potable-water requirement.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: measured water use assigned to the lot, net of separately measured recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg net frozen fish
  - Basis: facility preparation water assigned per 1 kg net frozen fish at dispatch
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ice for handling and temperature control (`handling_ice`)

Record ice consumed for lot handling and temperature control; exclude recovered meltwater only when it is measured and reused within the same system.

- Selected flow: Ice `24f9f87d-3f3e-49cb-9413-c7471f5d290b`
- Flow property / unit: Mass / kg
- Amount rule: measured issued ice less measured recovered ice returned to the same system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional handling-ice QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg net frozen fish
  - Basis: ice consumed per 1 kg net frozen fish at dispatch
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation low-voltage grid electricity (`preparation_electricity_low_voltage`)

Record only alternating-current low-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: process meter or documented allocation of facility meter readings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Preparation medium-voltage grid electricity (`preparation_electricity_medium_voltage`)

Record only alternating-current medium-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: process meter or documented allocation of facility meter readings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Preparation high-voltage grid electricity (`preparation_electricity_high_voltage`)

Record only alternating-current high-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, high-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: process meter or documented allocation of facility meter readings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

##### Waste flows



##### Elementary flows



#### Outputs

##### Product flows

###### Prepared pelagic-fish intermediate (`prepared_fish`)

Record the mass of the non-tuna pelagic-fish intermediate transferred to freezing after the preparation operations actually performed.

- Selected flow: Prepared non-tuna pelagic-fish intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated lot mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_traceability`

##### Waste flows

###### Rejected pelagic fish (`rejected_fish`)

Record whole fish rejected from the eligible lot as its own waste exchange.

- Selected flow: Rejected non-tuna pelagic fish
- Flow property / unit: Mass / kg
- Amount rule: measured rejected-fish mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_traceability`

###### Removed fish heads (`fish_heads`)

Record fish heads removed during preparation as their own waste exchange.

- Selected flow: Pelagic-fish heads
- Flow property / unit: Mass / kg
- Amount rule: measured removed-head mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_traceability`

###### Removed fish viscera (`fish_viscera`)

Record fish viscera removed during preparation as their own waste exchange.

- Selected flow: Pelagic-fish viscera
- Flow property / unit: Mass / kg
- Amount rule: measured removed-viscera mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_traceability`

###### Fish trimmings and offcuts (`fish_trimmings`)

Record fish trimmings and offcuts generated during preparation as their own waste exchange.

- Selected flow: Pelagic-fish trimmings and offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured trimming and offcut mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_traceability`

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving preparation, including product-contact water and melted ice, net of measured reuse and retained water.

- Selected flow: Wastewater from pelagic-fish preparation
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or calculated water balance assigned to the lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_ice_records`
- Range: Provisional preparation-wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg net frozen fish
  - Basis: discharged preparation wastewater per 1 kg net frozen fish at dispatch
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows



### Process: Freezing (`freezing`)

#### Inputs

##### Product flows

###### Prepared fish entering freezer (`fish_to_freezer`)

Record the measured mass, presentation, and entry temperature of the prepared non-tuna pelagic-fish intermediate loaded to the freezer.

- Selected flow: Prepared non-tuna pelagic-fish intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured freezer-load mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `codex-cxc-52-2003`

###### Freezing low-voltage grid electricity (`freezing_electricity_low_voltage`)

Record only alternating-current low-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: freezing-system meter or documented physical allocation of shared refrigeration electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Freezing medium-voltage grid electricity (`freezing_electricity_medium_voltage`)

Record only alternating-current medium-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: freezing-system meter or documented physical allocation of shared refrigeration electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Freezing high-voltage grid electricity (`freezing_electricity_high_voltage`)

Record only alternating-current high-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, high-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: freezing-system meter or documented physical allocation of shared refrigeration electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Freezing refrigerant R134a make-up (`freezing_refrigerant_r134a_makeup`)

Apply this row only when the refrigeration equipment serving this process uses R134a; record its make-up separately from every other refrigerant.

- Selected flow: Refrigerant, R134a `047bf9fb-8b5a-4070-8927-8df04e7241b3`
- Flow property / unit: Mass / kg
- Amount rule: allocated measured refrigerant additions reconciled with beginning charge, ending charge, recovery, and transfer records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Freezing refrigerant R404A make-up (`freezing_refrigerant_r404a_makeup`)

Apply this row only when the refrigeration equipment serving this process uses R404A; record its make-up separately from every other refrigerant.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Flow property / unit: Mass / kg
- Amount rule: allocated measured refrigerant additions reconciled with beginning charge, ending charge, recovery, and transfer records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Freezing refrigerant R717 (ammonia) make-up (`freezing_refrigerant_r717_makeup`)

Apply this row only when the refrigeration equipment serving this process uses R717 (ammonia); record its make-up separately from every other refrigerant.

- Selected flow: Refrigerant R717 (ammonia)
- Flow property / unit: Mass / kg
- Amount rule: allocated measured refrigerant additions reconciled with beginning charge, ending charge, recovery, and transfer records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Freezing refrigerant R744 (carbon dioxide) make-up (`freezing_refrigerant_r744_makeup`)

Apply this row only when the refrigeration equipment serving this process uses R744 (carbon dioxide); record its make-up separately from every other refrigerant.

- Selected flow: Refrigerant R744 (carbon dioxide)
- Flow property / unit: Mass / kg
- Amount rule: allocated measured refrigerant additions reconciled with beginning charge, ending charge, recovery, and transfer records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

##### Waste flows



##### Elementary flows



#### Outputs

##### Product flows

###### Frozen pelagic-fish intermediate (`frozen_fish_intermediate`)

Record frozen non-tuna pelagic fish leaving the freezer, including mass, freezing method, loading time, and verified thermal-centre endpoint.

- Selected flow: Frozen non-tuna pelagic-fish intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured freezer-unload mass linked to time-temperature records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `codex-cxc-52-2003`; `codex-cxs-190-1995`

##### Waste flows



##### Elementary flows

###### Freezing refrigerant R134a emitted to air (`freezing_refrigerant_r134a_air`)

Apply this elementary-flow row only when R134a is used and its calculated loss is released to air; keep the substance separate from every other refrigerant.

- Selected flow: HFC-134a, to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass-balance loss assigned to freezing, excluding documented recovery and transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Freezing refrigerant R404A emitted to air (`freezing_refrigerant_r404a_air`)

Apply this elementary-flow row only when R404A is used and its calculated loss is released to air; keep the substance separate from every other refrigerant.

- Selected flow: Refrigerant R404A, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass-balance loss assigned to freezing, excluding documented recovery and transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Freezing refrigerant R717 (ammonia) emitted to air (`freezing_refrigerant_r717_air`)

Apply this elementary-flow row only when R717 (ammonia) is used and its calculated loss is released to air; keep the substance separate from every other refrigerant.

- Selected flow: Ammonia, to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass-balance loss assigned to freezing, excluding documented recovery and transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Freezing refrigerant R744 (carbon dioxide) emitted to air (`freezing_refrigerant_r744_air`)

Apply this elementary-flow row only when R744 (carbon dioxide) is used and its calculated loss is released to air; keep the substance separate from every other refrigerant.

- Selected flow: Carbon dioxide (R744), to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass-balance loss assigned to freezing, excluding documented recovery and transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

### Process: Glazing, finishing, and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Frozen fish entering finishing (`fish_to_finishing`)

Record the frozen non-tuna pelagic-fish intermediate transferred to finishing and retain presentation and lot linkage.

- Selected flow: Frozen non-tuna pelagic-fish intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`

###### Glazing water (`glazing_water`)

When glazing is performed, record tap water applied and separately determine glaze mass so the reference amount remains net fish mass; product-contact water must meet the applicable potable-water requirement.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: measured glazing-water input assigned to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`
- Sources: `codex-cxs-190-1995`
- Range: Provisional glaze-water QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net frozen fish
  - Basis: glaze water applied per 1 kg net frozen fish at dispatch
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Plastic-film package component (`packaging_plastic_film`)

Record this packaging component separately when it is present in the declared package configuration; reusable returns must be measured separately.

- Selected flow: Plastic Film `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or measured component consumption less documented reusable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`
- Sources: `codex-cxs-190-1995`

###### Corrugated-board box (`packaging_corrugated_box`)

Record this packaging component separately when it is present in the declared package configuration; reusable returns must be measured separately.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or measured component consumption less documented reusable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`
- Sources: `codex-cxs-190-1995`

###### Expanded-polystyrene fish box (`packaging_expanded_polystyrene_box`)

Record this packaging component separately when it is present in the declared package configuration; reusable returns must be measured separately.

- Selected flow: Expanded-polystyrene fish box
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or measured component consumption less documented reusable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`
- Sources: `codex-cxs-190-1995`

###### Wood pallet (`packaging_wood_pallet`)

Record this packaging component separately when it is present in the declared package configuration; reusable returns must be measured separately.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or measured component consumption less documented reusable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`
- Sources: `codex-cxs-190-1995`

###### Paper packaging label (`packaging_paper_label`)

Record this packaging component separately when it is present in the declared package configuration; reusable returns must be measured separately.

- Selected flow: Packaging label, paper `d5890643-6859-42b5-9e05-556b072c6a8c`
- Flow property / unit: Mass / kg
- Amount rule: bill-of-materials or measured component consumption less documented reusable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`
- Sources: `codex-cxs-190-1995`

###### Finishing and packaging low-voltage grid electricity (`packaging_electricity_low_voltage`)

Record only alternating-current low-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: process meter or documented allocation of facility meter readings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Finishing and packaging medium-voltage grid electricity (`packaging_electricity_medium_voltage`)

Record only alternating-current medium-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: process meter or documented allocation of facility meter readings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Finishing and packaging high-voltage grid electricity (`packaging_electricity_high_voltage`)

Record only alternating-current high-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, high-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: process meter or documented allocation of facility meter readings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

##### Waste flows



##### Elementary flows



#### Outputs

##### Product flows

###### Packaged frozen fish before storage (`packaged_frozen_fish`)

Record the packaged frozen non-tuna pelagic-fish intermediate and separately retain gross packaged mass, net fish mass, glaze mass, packaging mass, and lot identity.

- Selected flow: Packaged frozen non-tuna pelagic-fish intermediate
- Flow property / unit: Mass / kg
- Amount rule: net fish mass calculated from verified product, glaze, and packaging measurements
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_glaze_records`
- Sources: `codex-cxs-190-1995`

##### Waste flows

###### Plastic-film packaging scrap (`plastic_film_packaging_scrap`)

Record this rejected packaging component as its own waste exchange and retain its measured destination record.

- Selected flow: Plastic-film packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured component scrap assigned to the lot by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`

###### Corrugated-board box packaging scrap (`corrugated_box_packaging_scrap`)

Record this rejected packaging component as its own waste exchange and retain its measured destination record.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: measured component scrap assigned to the lot by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`

###### Expanded-polystyrene fish-box scrap (`expanded_polystyrene_box_scrap`)

Record this rejected packaging component as its own waste exchange and retain its measured destination record.

- Selected flow: Expanded-polystyrene fish-box scrap
- Flow property / unit: Mass / kg
- Amount rule: measured component scrap assigned to the lot by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`

###### Broken wood-pallet waste (`wood_pallet_scrap`)

Record this rejected packaging component as its own waste exchange and retain its measured destination record.

- Selected flow: Broken wood pallet
- Flow property / unit: Mass / kg
- Amount rule: measured component scrap assigned to the lot by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`

###### Paper-label packaging scrap (`paper_label_packaging_scrap`)

Record this rejected packaging component as its own waste exchange and retain its measured destination record.

- Selected flow: Paper-label packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured component scrap assigned to the lot by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_glaze_records`

###### Finishing wastewater (`finishing_wastewater`)

Record wastewater from glazing and finishing, including glaze drainage and cleaning water assigned to finishing, net of measured reuse.

- Selected flow: Wastewater from glazing and fish finishing
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or calculated water balance assigned to the lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_glaze_records`
- Range: Provisional finishing-wastewater QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg net frozen fish
  - Basis: finishing wastewater per 1 kg net frozen fish at dispatch
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows



### Process: Frozen storage and dispatch (`frozen_storage`)

#### Inputs

##### Product flows

###### Packaged frozen fish entering storage (`fish_to_storage`)

Record the lot mass and entry temperature of the packaged frozen non-tuna pelagic-fish intermediate entering frozen storage.

- Selected flow: Packaged frozen non-tuna pelagic-fish intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass entering frozen storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`

###### Frozen-storage low-voltage grid electricity (`storage_electricity_low_voltage`)

Record only alternating-current low-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, low-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: metered storage electricity allocated by measured product-mass-days or a more causal documented driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish and declared storage day
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`

###### Frozen-storage medium-voltage grid electricity (`storage_electricity_medium_voltage`)

Record only alternating-current medium-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, medium-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: metered storage electricity allocated by measured product-mass-days or a more causal documented driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish and declared storage day
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`

###### Frozen-storage high-voltage grid electricity (`storage_electricity_high_voltage`)

Record only alternating-current high-voltage grid supply delivered to the equipment serving this process; keep every other voltage and supply scenario in its own row.

- Selected flow: Alternating current, high-voltage grid supply
- Flow property / unit: Energy / kWh
- Amount rule: metered storage electricity allocated by measured product-mass-days or a more causal documented driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen fish and declared storage day
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_dispatch_records`

###### Frozen-storage refrigerant R134a make-up (`storage_refrigerant_r134a_makeup`)

Apply this row only when the refrigeration equipment serving this process uses R134a; record its make-up separately from every other refrigerant.

- Selected flow: Refrigerant, R134a `047bf9fb-8b5a-4070-8927-8df04e7241b3`
- Flow property / unit: Mass / kg
- Amount rule: calculated refrigerant make-up assigned to storage by equipment charge and operating record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Frozen-storage refrigerant R404A make-up (`storage_refrigerant_r404a_makeup`)

Apply this row only when the refrigeration equipment serving this process uses R404A; record its make-up separately from every other refrigerant.

- Selected flow: Refrigerant R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- Flow property / unit: Mass / kg
- Amount rule: calculated refrigerant make-up assigned to storage by equipment charge and operating record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Frozen-storage refrigerant R717 (ammonia) make-up (`storage_refrigerant_r717_makeup`)

Apply this row only when the refrigeration equipment serving this process uses R717 (ammonia); record its make-up separately from every other refrigerant.

- Selected flow: Refrigerant R717 (ammonia)
- Flow property / unit: Mass / kg
- Amount rule: calculated refrigerant make-up assigned to storage by equipment charge and operating record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Frozen-storage refrigerant R744 (carbon dioxide) make-up (`storage_refrigerant_r744_makeup`)

Apply this row only when the refrigeration equipment serving this process uses R744 (carbon dioxide); record its make-up separately from every other refrigerant.

- Selected flow: Refrigerant R744 (carbon dioxide)
- Flow property / unit: Mass / kg
- Amount rule: calculated refrigerant make-up assigned to storage by equipment charge and operating record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

##### Waste flows



##### Elementary flows



#### Outputs

##### Product flows

###### Net frozen fish at dispatch (`reference_frozen_fish_output`)

This is the reference product output after the declared storage period. Report net fish mass separately from glaze and packaging.

- Selected flow: Other pelagic fish (excluding tunas, skipjack, or stripe-bellied bonito), frozen `c8aa403f-97b6-44b2-afa8-862d825fec2f`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output of 1 kg net fish mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-2025`

##### Waste flows



##### Elementary flows

###### Frozen-storage refrigerant R134a emitted to air (`storage_refrigerant_r134a_air`)

Apply this elementary-flow row only when R134a is used and its calculated loss is released to air; keep the substance separate from every other refrigerant.

- Selected flow: HFC-134a, to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass-balance loss assigned to storage, excluding documented recovery and transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Frozen-storage refrigerant R404A emitted to air (`storage_refrigerant_r404a_air`)

Apply this elementary-flow row only when R404A is used and its calculated loss is released to air; keep the substance separate from every other refrigerant.

- Selected flow: Refrigerant R404A, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass-balance loss assigned to storage, excluding documented recovery and transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Frozen-storage refrigerant R717 (ammonia) emitted to air (`storage_refrigerant_r717_air`)

Apply this elementary-flow row only when R717 (ammonia) is used and its calculated loss is released to air; keep the substance separate from every other refrigerant.

- Selected flow: Ammonia, to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass-balance loss assigned to storage, excluding documented recovery and transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

###### Frozen-storage refrigerant R744 (carbon dioxide) emitted to air (`storage_refrigerant_r744_air`)

Apply this elementary-flow row only when R744 (carbon dioxide) is used and its calculated loss is released to air; keep the substance separate from every other refrigerant.

- Selected flow: Carbon dioxide (R744), to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: refrigerant mass-balance loss assigned to storage, excluding documented recovery and transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen fish at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | Multi-product facility and shared process lines | Prefer process subdivision, lot separation, and direct metering. Do not allocate a directly measured lot input or emission to unrelated products. | `eu-pef-2021-2279` |
| `alloc_physical_driver` | Shared utilities, water, refrigeration, storage, and cleaning | Allocate remaining shared flows using documented causal physical drivers such as metered energy, equipment operating time, mass throughput, cleaning events, or product-mass-days; disclose the driver and denominator. | `eu-pef-2021-2279` |
| `alloc_coproducts` | Marketable fish parts or other exported co-products | Where subdivision is not possible, use a demonstrated physical causal relationship; if no defensible physical relationship exists, use lot- or annual-period economic allocation based on recorded quantities and representative prices and disclose sensitivity. | `eu-pef-2021-2279` |
| `alloc_waste_and_recovery` | Residues, wastewater, packaging scrap, recovered refrigerant, and recycled materials | Classify outputs by actual legal and commercial status and destination. Do not assign avoided-burden credits inside this foreground package unless the downstream substitution method is explicitly declared and consistently applied. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_traceability` | `receipt_preparation` | received fish, prepared fish, residues, lot identity | scale tickets and lot records | species; scientific name if available; origin; supplier/vessel; lot id; presentation; inbound mass; prepared mass; residue mass by destination; timestamps | calibrated scales linked to lot traceability records | kg | every lot and material transfer | representative production period, at least all included lots | all reporting-facility lines in scope | sum masses by lot and normalize to verified net dispatch mass | calibration certificates; reconciliation record; supplier/landing records; disposition evidence |
| `cp_water_ice_records` | `receipt_preparation` | preparation water, ice, wastewater | meter, purchase, production, and discharge records | water meter readings; ice issues; recovered ice/water; wastewater meter or balance fields | process meters where available; otherwise documented facility balance and allocation | kg or m3 with density conversion | each production day or lot | same period as production inventory | all relevant preparation operations | net use and discharge allocated by causal process driver | meter checks; potable-water evidence; balance reconciliation |
| `cp_energy_records` | `receipt_preparation`; `freezing`; `finishing_packaging` | process electricity | meter and equipment records | meter start/end; equipment; operating hours; allocation driver; conversion factor | dedicated meter preferred; otherwise documented physical allocation | kWh | each lot, shift, or day | same period as production inventory | all in-scope equipment | sum by process and allocate to lots using documented causal driver | meter calibration or invoice reconciliation; allocation worksheet |
| `cp_freezing_records` | `freezing` | freezer load, temperature, time, and output | freezer batch and continuous logger records | lot id; load mass; entry temperature; start/end time; freezing method; thermal-centre measurements; unload mass; alarms; corrective actions | calibrated probes and continuous or batch time-temperature logs | kg; °C; h | every freezer batch or continuous lot | all included production lots | all in-scope freezers | link each lot to its actual freezing record; mass-weight aggregates only after lot checks | probe calibration; logger file; HACCP/CCP or equivalent control record |
| `cp_packaging_glaze_records` | `finishing_packaging` | glaze, net mass, packaging, scrap, wastewater | recipe/BOM, scales, water meter, and waste records | gross product mass; net fish mass; glaze mass; packaging mass by material; packaging scrap; water input; discharge; label claims | calibrated scales, packaging issue records, and water balance | kg | every lot and packaging configuration | all included production lots | all in-scope finishing and packaging lines | calculate lot net mass and material intensities, then mass-weight | scale calibration; label/net-content check; packaging specifications; water-quality evidence |
| `cp_storage_dispatch_records` | `frozen_storage` | storage duration, temperature, energy, and dispatch mass | warehouse management, temperature logger, and energy meter records | lot entry/exit; mass; entry/exit temperature; chamber temperature; alarms; kWh; storage zone; dispatch net mass | continuous chamber logging with lot timestamps and metered energy | kg; day; °C; kWh | continuous temperature; each lot movement; daily or billing-period energy | full storage period for all included lots | all in-scope cold rooms and dispatch zones | allocate energy by product-mass-days or more causal driver and normalize to dispatch net mass | logger calibration; alarm/corrective-action records; meter/invoice reconciliation |
| `cp_refrigerant_records` | `freezing`; `frozen_storage` | refrigerant make-up and emissions | equipment inventory and service records | substance; equipment id; opening/closing charge; additions; recovery; transfers; service loss; allocation driver | annual or campaign mass balance reconciled to service records | kg by refrigerant substance | every service event and inventory period | inventory period overlapping reported production | all in-scope freezing and storage refrigeration equipment | calculate loss by substance and allocate by equipment-specific causal driver | invoices; technician reports; recovery records; charge reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Glazed or packaged output | net fish mass = gross packed mass - measured glaze mass - packaging mass; for unglazed product, set glaze mass to measured zero | gross packed mass; glaze mass; packaging mass | kg net frozen fish | `codex-cxs-190-1995` |
| `calc_preparation_yield` | Receipt and preparation | preparation yield = prepared fish mass / received eligible fish mass; separately report excluded or diverted lots | prepared fish mass; received fish mass | kg/kg |  |
| `calc_water_balance` | Preparation and finishing | wastewater = water input + ice melt + other measured liquid input - product/glaze retention - measured reuse - evaporation or other measured destination | water, ice, retention, reuse, discharge records | kg wastewater |  |
| `calc_energy_intensity` | Each energy-using process | process energy intensity = process-metered or physically allocated energy / net reference output | meter readings; allocation driver; net fish mass | kWh/kg net frozen fish | `eu-pef-2021-2279` |
| `calc_storage_energy` | Frozen storage | storage energy intensity = allocated storage electricity / sum of product-mass-days; report lot storage duration separately | chamber electricity; lot mass; entry/exit timestamps | kWh/(kg·day) and kWh/kg lot | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | Refrigeration systems | refrigerant loss = opening charge + additions + received transfers - closing charge - recovered refrigerant - outgoing transfers, calculated separately by substance | charge inventory and service records | kg refrigerant emitted, subject to reconciliation |  |
| `calc_shared_flow_allocation` | Shared processes | allocate only residual shared flow after subdivision using the documented causal physical driver; retain numerator, denominator, and sensitivity for any economic fallback | shared-flow total; product driver values; price/quantity records if needed | allocated flow per product lot | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Product and received fish | Preserve one-to-one lot linkage for species, origin, supplier/vessel, presentation, production system, and dispatch product; excluded tuna/bonito categories and fillets must be detectably rejected from scope. | lot genealogy; species declaration; supplier/landing documents; product specification |
| `dq_measurement` | Mass, energy, water, temperature, and time | Use calibrated instruments where available, retain unit conversions, and document estimation and allocation whenever direct measurement is unavailable. | calibration records; meter logs; conversion worksheet; allocation record |
| `dq_temporal_coverage` | Foreground inventory | Cover a representative production period including seasonal species mix and operational variation; disclose excluded downtime, abnormal batches, and data gaps. | production calendar; lot list; completeness reconciliation |
| `dq_completeness` | Foreground boundary | Reconcile received fish, net product, residues, water/wastewater, energy, packaging, refrigerant, and cold-storage records; explain any material imbalance or missing flow. | signed mass and utility balances; exception log |
| `dq_food_safety_quality` | Product-contact operations and frozen chain | Retain potable-water evidence, sanitation prerequisites, hazard-control records, freezing endpoint, storage temperature, alarms, corrective actions, and net-content checks appropriate to the declared product. | HACCP/CCP or equivalent records; water tests; time-temperature logs; quality-release records |
| `dq_provisional_ranges` | All reasoned-estimate ranges | Treat provisional ranges only as QA screens, never as evidence that foreground values are correct; replace with reviewed evidence or accumulated foreground distributions before publication-critical use. | range-review record and replacement plan |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity_scope` | Product identity | Fail if species/category or presentation falls in an excluded tuna/bonito, fillet, fish-meat, liver/roe, coated, canned, smoked, dried, salted, or cooked scope, or if the required qualifiers are absent. | `unsd-cpc-3-2025` |
| `val_reference_mass` | Reference flow | Verify exactly 1 kg net fish mass and separate non-negative glaze and packaging masses; gross packaged mass must reconcile with declared components. | `codex-cxs-190-1995` |
| `val_mass_balance` | Lot and process mass | Check received fish against prepared fish, reference product, glaze retention, residues, wastewater solids where measured, and retained intermediates; flag unexplained imbalance for review. |  |
| `val_freezing_cold_chain` | Freezing and storage | Require lot-linked time-temperature evidence, freezing endpoint, storage duration, alarm handling, and dispatch condition; for a quick-frozen route, verify thermal-centre temperature reached -18 °C or colder after stabilization and was maintained deep frozen. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `val_food_safety_records` | Product-contact operations | Require water-quality, sanitation, hazard-control, product release, and traceability evidence appropriate to the facility and destination market; missing evidence makes validation inconclusive. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `val_allocation` | Shared processes and co-products | Verify subdivision was attempted, the selected allocation driver is causal and reproducible, exported co-products and wastes are classified by actual destination, and any economic fallback includes quantities, prices, period, and sensitivity. | `eu-pef-2021-2279` |
| `val_inventory_completeness` | Foreground package | Require accepted input, checks performed, checks skipped, findings, and completeness for fish mass, water, ice, energy, packaging, wastes, wastewater, refrigerants, freezing, and storage; do not interpret skipped checks as passed. | `eu-pef-2021-2279` |
| `val_provisional_estimates` | Reasoned-estimate ranges | Flag every provisional range as replaceable review evidence; values outside a range require explanation, while values inside a range do not establish conformity. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for frozen eligible pelagic fish at the processing-facility dispatch gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology, identity, evidence, and translation review |
| allowed_use | Species-, origin-, presentation-, technology-, geography-, time-, and storage-duration-matched LCA process or lifecycle model; supply-chain studies that add compatible upstream capture/aquaculture and transport datasets |
| excluded_use | Unqualified substitution for tuna/bonito products, fillets or fish meat, other preservation routes, unknown species/origin, retail or cooked products, or frozen products with materially different foreground boundaries |
| required_metadata | PCR id and version; product flow UUID; species and scientific name if available; origin and production system; harvest area; supplier/vessel lot; presentation; freezing method; glaze status and fraction; packaging; net mass; geography; period; storage temperature and duration; allocation method; upstream dataset references |
| required_quality_disclosure | Data coverage and representativeness; scale/meter/logger calibration; mass and utility balance; cold-chain and food-safety evidence; shared-utility and co-product allocation; provisional estimates; unresolved UUIDs; excluded processes and data gaps |
| update_trigger | Change in species or origin mix, product presentation, freezing or glazing technology, packaging, refrigeration system, storage duration, facility geography, allocation basis, applicable food-safety specification, Tiangong identity, or replacement of provisional ranges with reviewed evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `standard` | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, subclass 21216, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Product-category inclusion and exclusion boundary and classification wording |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/4/i2382e/i2382e.pdf (retrieved 2026-08-11) | Fish handling and preparation process structure, potable/product-contact water, freezing records, cold storage, hygiene, hazard control, and food-safety evidence |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius, CXS 190-1995, Standard for Quick-Frozen Fish Fillets, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B190-1995%252FCXS_190e.pdf (retrieved 2026-08-11) | Comparable quick-freezing, deep-frozen storage, glazing-water quality, packaging, label, and net-mass practices; not used to expand scope to fillets |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods to measure and communicate the life cycle environmental performance of products and organisations, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-11) | Life-cycle boundary framing, high-quality foreground data, reproducible allocation disclosure, dataset use, and verification |
