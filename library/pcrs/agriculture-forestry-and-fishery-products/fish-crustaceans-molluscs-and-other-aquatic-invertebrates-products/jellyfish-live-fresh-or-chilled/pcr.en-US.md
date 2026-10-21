---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.jellyfish-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Jellyfish, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides foreground data package construction for jellyfish placed on the market as live, fresh, or chilled product. It covers declared harvesting or collection, onboard sorting, draining where performed, live holding or chilled holding, landing, grading, washing where performed, packaging, icing or temperature control, dispatch, and release at the declared gate.

Covered products include edible or industrial jellyfish of declared species or species group when sold live, fresh, or chilled and still an unprocessed primary aquatic invertebrate product. Excluded products are live jellyfish for ornamental purpose, frozen jellyfish, smoked, dried, salted, brined, alum-cured, fermented, cooked, canned, prepared, preserved, extracted, or otherwise processed jellyfish products, and other aquatic invertebrates outside the jellyfish category.

The dataset must preserve the short-lived wet product state. If salting, alum treatment, drying, freezing, or other preservation changes the product identity, those processes belong to a different PCR or must be modelled as downstream processing outside this reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.jellyfish-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04530`, `Jellyfish, live, fresh or chilled` |
| covered_products | jellyfish harvested, collected, landed, sorted, live-held, fresh, or chilled as unprocessed primary aquatic invertebrate product |
| excluded_products | ornamental live jellyfish; frozen jellyfish; smoked, dried, salted, brined, alum-cured, fermented, cooked, canned, prepared, preserved, extracted, or otherwise processed jellyfish; non-jellyfish aquatic invertebrates; residues, trimmings, wastewater, or rejected biomass as separate products |
| representative_product | live, fresh, or chilled jellyfish at declared species or species group, harvest area, product state, wet mass basis, handling condition, packaging state, and declared gate |
| production_route | wild harvest or collection, onboard sorting or draining, landing, grading, washing where performed, live or chilled holding, packaging, icing or temperature control, and declared gate release |
| market_state | live, fresh, or chilled jellyfish with declared species, harvest area, gear or collection method, landing condition, drained or wet mass basis, product temperature or live-holding condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | jellyfish as live, fresh, or chilled primary product |
| How much | 1 kg |
| How well | declared species or species group, live/fresh/chilled state, wet or drained mass basis, harvest area, handling condition, packaging state, and gate |
| How long or cycle | one harvest trip, landing lot, handling lot, sales lot, or reporting period normalized to marketable jellyfish output |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; harvest or collection area; wild harvest, collection, or declared production route; gear or collection method; landing site; live, fresh, or chilled state; wet, drained, whole, bell, oral arm, or declared product basis; moisture or drainage basis where available; holding duration and temperature or live-holding condition; packaging state; declared gate; food, feed, industrial, or other declared intended use when known; catch documentation, permit, traceability, and unresolved Tiangong UUID substitutions |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field.

Mass is the primary reference basis. Basket, tub, crate, sack, bin, count, volume, or trip records may be used only when net mass, tare, drainage method, product state, and sampling method are retained.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg jellyfish in the declared live, fresh, or chilled product form. |
| `product_state_identity` | all datasets | Product state and handling evidence | declared records | Product records must prove live, fresh, or chilled state and must not mix frozen, dried, salted, brined, alum-cured, prepared, or preserved jellyfish with the reference product. |
| `wet_drained_mass_basis` | live, fresh, chilled, washed, drained, or iced records | Mass and drainage basis | kg | Product mass must state wet whole mass, drained mass, bell mass, oral-arm mass, ice-excluded mass, or another declared basis. Convert only with measured drainage or yield evidence. |
| `catch_lot_identity` | harvest, landing, sorting, and sales records | Mass, count, or volume | kg, item, basket, tub, crate, or m3 | Catch records must retain species or species group, harvest area, gear or collection method, vessel or collector, trip, lot, landing date, accepted mass, rejected mass, and intended use where known. |
| `water_temperature_and_holding` | washing, live holding, chilled holding, and discharge | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | Preserve water source, controlled water volume, salinity where relevant, temperature, holding time, drainage, and discharge basis. Ambient seawater is a boundary condition unless pumped, treated, exchanged, or discharged under foreground control. |
| `energy_fuel_and_ice_inventory` | vessel operation, landing, live holding, chilling, ice making or use, cold rooms, and dispatch | Energy, fuel, or mass | kWh, MJ, L, or kg | Record original electricity, fuel, ice, and energy carrier units before normalizing to the reference flow. |
| `packaging_basis` | baskets, tubs, crates, sacks, liners, labels, insulated containers, ice boxes, and pallets | Mass or item count | kg or item | Packaging and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

## 5. System Boundary

The default boundary covers foreground-controlled jellyfish harvest or collection to the declared landing, handling, dispatch, packhouse, or delivery gate:

1. Fishing, harvesting, or collection, including vessel or collector activity, gear operation, catch handling, bycatch or non-target material handling, and onboard draining or sorting where performed.
2. Landing, grading, washing where performed, live holding or chilled holding, drainage, rejection, residue handling, temperature control, icing, packaging, and declared gate release.
3. Delivery to the declared gate when the reference flow is delivered product beyond landing, dispatch, or packhouse gate.

Capital goods and long-lived vessels, gear, holding tanks, cold rooms, and infrastructure are included only when the declared data package scope requires them. Purchased ice, packaging, electricity, fuel, water, live-holding oxygen, and transport services require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_jellyfish_harvest_or_collection_lot |
| starting_condition_role | wild_aquatic_invertebrate_lot_identity_and_product_state |
| product_classification_scope | current CPC 3.0 product category `04530`, `Jellyfish, live, fresh or chilled` |
| recursive_input_rule | jellyfish harvested or collected as an input to live, fresh, or chilled market product are recorded as declared harvest or collection lots with area, gear, vessel or collector, species, product-state, and mass-basis disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | fishing or collection trip records, supplier harvest records, landing documents, permit or traceability evidence, packaging, ice, fuel, electricity, water, and delivery datasets where outside foreground control |
| disclosure | disclose species or species group, harvest or collection area, gear or collection method, vessel or collector, landing site, live/fresh/chilled state, wet or drained mass basis, sorting and rejection, washing or live-holding water, temperature or ice use, holding duration, packaging state, intended use where known, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| harvest_collection_and_landing | Harvest, Collection, and Landing | required | harvest or collection lot must be declared | foreground production | landed jellyfish lot entering live/fresh/chilled handling |
| sorting_holding_chilling_and_packout | Sorting, Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | marketable live, fresh, or chilled jellyfish |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond landing, dispatch, or packhouse gate | foreground transport | delivered jellyfish at declared gate |

### Process: Harvest, Collection, and Landing (`harvest_collection_and_landing`)

#### Inputs

##### Product flows

###### Fishing fuel, gear service, and collection inputs (`fishing_fuel_gear_service_and_collection_inputs`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; route-specific gear, vessel service, basket, tub, seawater, ice, or collection input selected from foreground records
- Flow property / unit: Fuel, mass, energy, volume, item, or service quantity / L, kg, MJ, kWh, m3, item, or service unit
- Amount rule: measured or allocated vessel fuel, gear use, collection inputs, onboard ice or water, and landing support by trip or lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest trip or landing lot and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_collection_and_landing_records`
- Sources: `fao-jellyfish-commodity-profile`, `brotz-pauly-jellyfish-fisheries-2017`
- Range: Provisional harvest input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: L, kg, MJ, kWh, m3, item, or service unit/1,000 kg marketable product
  - Basis: broad first-pass vessel, gear, collection, onboard water, and landing support input check
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Bycatch, rejected jellyfish, drainage, and landing residues (`bycatch_rejected_jellyfish_drainage_and_landing_residues`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; route-specific bycatch, non-target biomass, rejected jellyfish, drainage, wastewater, and residue flow selected from site records
- Flow property / unit: Mass, volume, or count / kg, m3, or item
- Amount rule: measured rejected jellyfish, bycatch, non-target material, drainage or wastewater, residue mass, fate, disposal route, recovery route, and receiving environment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest trip or landing lot and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_residue_bycatch_and_discharge_records`
- Range: Provisional landing residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg residue/kg accepted landed jellyfish
  - Basis: broad reject, bycatch, drainage, and residue check at harvest and landing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted landed jellyfish (`accepted_landed_jellyfish`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59`
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted landed jellyfish after sorting, rejection, drainage, and lot identification
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: accepted landed jellyfish entering live, fresh, or chilled handling
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_collection_and_landing_records`
- Range: Accepted landing mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg accepted landed jellyfish/kg marketable product
  - Basis: broad landing-to-marketable mass-balance check before final sorting and drainage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Sorting, Holding, Chilling, and Pack-out (`sorting_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### Accepted jellyfish entering final handling (`accepted_jellyfish_entering_final_handling`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted jellyfish entering sorting, washing, drainage, live holding, chilling, or packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packout_product_state_and_mass_records`
- Sources: `codex-cxc-52-2003`, `fao-jellyfish-commodity-profile`
- Range: Final handling input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg accepted jellyfish/kg marketable product
  - Basis: broad wet, drained, live, fresh, or chilled product-yield check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water, ice, electricity, packaging, and live-holding inputs (`water_ice_electricity_packaging_and_live_holding_inputs`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Packaging, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`; route-specific ice, seawater, oxygen, container, liner, refrigerant service, or pallet selected from site records
- Flow property / unit: Mass, volume, energy, or item count / kg, m3, kWh, or item
- Amount rule: measured washing or live-holding water, ice, electricity, oxygen, packaging, chilling, container, and dispatch preparation quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_ice_chilling_and_dispatch_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional final handling input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg, m3, kWh, or item/1,000 kg marketable product
  - Basis: broad first-pass water, ice, packaging, live-holding, and chilling input check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Sorting rejects, drainage, wastewater, and packaging waste (`sorting_rejects_drainage_wastewater_and_packaging_waste`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; route-specific rejected jellyfish, drainage, wastewater, spent ice, packaging waste, and organic residue selected from site records
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured rejected jellyfish, drainage, wastewater, spent ice, packaging waste, residue mass, disposal route, recovery route, and receiving environment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_residue_bycatch_and_discharge_records`
- Range: Final handling residue QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg or m3/kg marketable product
  - Basis: broad reject, drainage, wastewater, spent ice, packaging waste, and residue check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Marketable live, fresh, or chilled jellyfish (`marketable_live_fresh_or_chilled_jellyfish`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output after declared sorting, drainage, chilling, packaging tare exclusion, and product-state normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Range: Fixed reference output QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: fixed reference flow output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

### Process: Delivery to Declared Gate (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Delivery fuel, electricity, ice, and temperature-control support (`delivery_fuel_electricity_ice_and_temperature_control_support`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; route-specific transport service, ice, live-holding water, oxygen, refrigerant service, or reusable packaging support selected from site records
- Flow property / unit: Fuel, energy, mass, volume, or transport service / L, MJ, kWh, kg, m3, or tonne-km
- Amount rule: include only when the declared reference flow is delivered beyond landing, dispatch, or packhouse gate; record distance, mode, load factor, live or chilled condition, and return logistics where relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg delivered reference product or tonne-km
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_records`
- Range: Provisional delivery screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: tonne-km/1,000 kg reference product
  - Basis: broad first-pass delivery activity check when delivery is in scope
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Delivered jellyfish at declared gate (`delivered_jellyfish_at_declared_gate`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Jellyfish, live, fresh or chilled `f60402c9-806e-430e-bc77-851e2ff4dc59`
- Flow property / unit: Mass / kg
- Amount rule: delivered mass at the declared gate, excluding transport packaging tare and ice unless contractually part of the product basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: delivered reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery_records`
- Range: Delivered product mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg delivered reference product
  - Basis: delivered reference product mass after route allocation and product-state normalization
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

## 7. Allocation and Co-product Handling

| allocation_id | Applies to | Rule | Required data | Source |
| --- | --- | --- | --- | --- |
| `single_reference_product_default` | marketable live, fresh, or chilled jellyfish output | Treat the declared reference product as the single reference product unless rejected biomass, bycatch, or residues are intentionally recovered as co-products. | marketable mass, rejected mass, recovered co-product mass, destination, and revenue or physical relation where co-products are claimed | `mass-balance-identity` |
| `bycatch_and_reject_handling` | bycatch, non-target material, rejected jellyfish, and residues | Do not allocate away bycatch, rejects, drainage, or residue by excluding them from the foreground package. Record fate and allocate only when a recovered co-product is documented. | bycatch mass, reject mass, drainage or wastewater, destination, disposal or recovery route | `brotz-pauly-jellyfish-fisheries-2017` |
| `shared_trip_and_landing_allocation` | multi-species trips or shared landing services | Allocate shared vessel fuel, gear service, landing energy, water, ice, and packaging by direct measurement, trip log, catch mass, holding time, package count, or another declared physical driver before economic allocation. | trip records, landed mass by species, service logs, package counts, holding time, and allocation driver | `mass-balance-identity` |
| `delivery_allocation` | mixed-product delivery | Allocate delivery fuel, ice, live-holding, refrigeration, and reusable packaging loads by product mass, package count, trip, temperature-control zone, or tonne-km as applicable. | dispatch records, package counts, load mass, distance, temperature condition, and return logistics | `codex-cxc-52-2003` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_harvest_collection_and_landing_records` | `harvest_collection_and_landing` | harvest or collection, accepted landing, fuel, gear, landing inputs | vessel log, collector log, landing note, catch ticket, fuel invoice, gear log, permit | species, harvest area, gear, vessel or collector, trip, date, fuel, collection input, gross catch, rejected mass, accepted landed mass, landing site, intended use | trip records, landing records, weigh tickets, and permit or traceability documents | kg, L, MJ, item, date, area | each trip or landing lot | full reporting period or declared season | vessel, collector, harvest area, landing site, or supplier | reconcile catch plus purchases minus rejects and losses to accepted landed jellyfish; normalize to marketable output | landing tickets, scale records, trip logs, permits, invoices, and operator sign-off |
| `cp_packout_product_state_and_mass_records` | `sorting_holding_chilling_and_packout` | sorting, drainage, product state, marketable output | sorting sheet, wash log, drainage record, temperature log, live-holding log, packout record, sales note | accepted mass, product state, wet or drained basis, washing, drainage time, temperature, holding duration, rejected mass, marketable mass, package count, destination | calibrated scales, handling logs, temperature records, packout records, and sales reconciliation | kg, item, deg C, h, date | each handling or packing lot | full handling and dispatch period | landing site, holding unit, packhouse, dispatch gate | reconcile accepted landed mass minus rejects, drainage, and handling losses to marketable output; normalize all flows to 1 kg reference product | scale calibration, temperature logs, packout sheets, sales records, and supervisor review |
| `cp_packaging_ice_chilling_and_dispatch_records` | `sorting_holding_chilling_and_packout` | water, ice, electricity, packaging, live holding, chilling | packaging invoice, ice log, water meter, electricity meter, temperature log, oxygen log, dispatch sheet | packaging material, item count, tare, ice mass, water, electricity, oxygen, temperature, holding time, lot, destination | invoices, meters, temperature records, and dispatch records | kg, item, m3, kWh, deg C, h | each packing lot and monthly reconciliation | handling and dispatch period | packhouse, live-holding unit, cold room, dispatch gate | allocate to product lots by measured lot, package count, product mass, holding time, or temperature-control zone | invoices, meter readings, temperature logs, dispatch sheets, and operator review |
| `cp_reject_residue_bycatch_and_discharge_records` | `harvest_collection_and_landing`; `sorting_holding_chilling_and_packout` | bycatch, rejected jellyfish, drainage, wastewater, residues, packaging waste | reject log, bycatch record, wastewater record, disposal note, waste ticket | date, species or material, count, mass, volume, cause, fate, disposal route, recovery route, receiving environment | landing records, handling records, waste tickets, and discharge records | kg, m3, item, date | each event and monthly reconciliation | full reporting period or season | vessel, landing site, packhouse, discharge route, or waste route | sum by material and fate; reconcile to catch, accepted mass, marketable output, and disposal route | reject logs, waste transfer notes, discharge records, and supervisor review |
| `cp_delivery_records` | `delivery_to_declared_gate` | delivered product, transport energy, live or chilled delivery condition | delivery note, transport invoice, fuel record, route plan, temperature or live-holding log | origin, destination, distance, mode, load mass, fuel, electricity, ice, water, oxygen, temperature, live-holding duration, return logistics | carrier documents, vehicle logs, meter records, and dispatch reconciliation | kg, km, tonne-km, L, kWh, h, deg C | each delivery route | delivery period in declared scope | delivery route, vehicle, vessel, or carrier | calculate tonne-km and allocate fuel or service by load mass, distance, temperature zone, and return logistics where relevant | carrier invoice, route record, temperature log, and dispatch sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = collected amount / marketable reference product mass, with unit and product-state basis retained | collected amount, marketable product mass, product basis | kg, kWh, L, item, m3, or tonne-km per kg reference product | `mass-balance-identity` |
| `accepted_landing_balance` | harvest and landing | accepted landed jellyfish = gross jellyfish catch or received mass - rejected jellyfish - documented onboard or landing losses | gross catch, received mass, rejects, drainage or loss | accepted landed jellyfish | `mass-balance-identity` |
| `product_state_yield` | sorting, drainage, and packout | marketable product mass = accepted landed mass - rejected mass - drainage or product-state loss - packaging tare and ice excluded from product basis | accepted mass, rejected mass, drainage, product-state records, packout records | marketable live, fresh, or chilled mass | `codex-cxc-52-2003` |
| `delivery_tonne_kilometres` | delivered reference product | tonne-km = delivered product mass in tonnes x one-way or contract-declared route distance; allocate temperature-control or live-holding inputs by load share | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and harvest lot | Species or species group, CPC category, live/fresh/chilled state, wet or drained mass basis, harvest area, landing site, and declared gate must be explicit. | reference flow metadata, landing records, product-state logs, packout records, and sales or dispatch records |
| `dq_product_state` | all product rows | Dataset must not mix live, fresh, or chilled jellyfish with frozen, dried, salted, brined, alum-cured, prepared, or preserved product. | product descriptions, temperature logs, handling records, preservation records, and sales documents |
| `dq_mass_balance` | harvest, landing, sorting, drainage, and packout | Gross catch, accepted landed mass, rejects, drainage, residues, and marketable product records must reconcile within declared tolerance; unexplained gaps require disclosure. | mass-balance worksheet, scale tickets, landing records, packout records, and supervisor review |
| `dq_temporal_coverage` | all foreground rows | Data must cover the declared harvest season, trip set, handling lots, and dispatch period, or disclose partial-season, partial-lot, or proxy coverage. | reporting calendar, trip logs, handling logs, dispatch records, and coverage statement |
| `dq_boundary_disclosure` | all datasets | The dataset must disclose whether fishing, collection, landing, water, ice, packaging, delivery, capital goods, and infrastructure are foreground, linked upstream datasets, or excluded by scope. | dataset boundary statement, supplier records, upstream dataset links, and scope declaration |

## 9. Validation Rules

| rule_id | Rule | Severity | Failure message |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | Reference product flow UUID equals `f60402c9-806e-430e-bc77-851e2ff4dc59` unless a more specific Tiangong jellyfish product flow is documented. | error | Reference flow must use the jellyfish live, fresh, or chilled product identity or document a reviewed replacement. |
| `val_product_state` | Product state is live, fresh, or chilled and excludes frozen, dried, salted, brined, alum-cured, prepared, preserved, or ornamental jellyfish. | error | Product state is outside the jellyfish live, fresh, or chilled PCR scope. |
| `val_mass_basis` | Product mass basis is declared as wet, drained, whole, bell, oral arm, ice-excluded, or another stated basis. | error | Product mass basis is missing or ambiguous. |
| `val_required_qualifiers` | Required qualifiers are present in metadata or process notes. | warning | Reference flow qualifiers are incomplete. |
| `val_structured_sync` | `structured.yaml` is regenerated from the bilingual Markdown after edits. | error | Structured projection is out of sync with authored PCR Markdown. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for jellyfish, live, fresh, or chilled |
| downstream_use | `secondary_dataset`; `background_dataset`; foreground reference for process or lifecyclemodel construction when harvest and handling records are retained |
| allowed_use | LCA modelling of declared jellyfish live, fresh, or chilled product at landing, dispatch, packhouse, or delivered gate |
| excluded_use | ornamental live jellyfish; frozen, dried, smoked, salted, brined, alum-cured, cooked, canned, prepared, preserved, extracted, or processed jellyfish; non-jellyfish aquatic invertebrates; residues, wastewater, bycatch, or rejected biomass as separate products; ecosystem-service claims without a separate reviewed method |
| required_metadata | canonical PCR id; CPC 3.0 code; species or species group; harvest or collection area; gear or collection method; landing site; live/fresh/chilled state; wet or drained mass basis; product form; holding duration and temperature; packaging state; declared gate; geography; reporting period; data owner; unresolved UUID substitutions |
| required_quality_disclosure | product state evidence, mass balance closure, wet/drained basis, temporal coverage, allocation basis, upstream dataset links, missing foreground records, proxy rows, and reasoned-estimate ranges used only for QA screening |
| update_trigger | new Tiangong flow identities for jellyfish gear, vessel service, ice, live-holding oxygen, brine or salting exclusions, bycatch, residue, packaging, refrigerant, or delivery services; reviewed quantitative evidence for fuel, yield, drainage, ice, packaging, or chilling ranges; updated Codex, FAO, or legal requirements; classification mapping change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-jellyfish-commodity-profile` | official_guidance | FAO Knowledge Repository, aquatic products chapter 4.2 Jellyfish, https://openknowledge.fao.org/server/api/core/bitstreams/0aa558d4-57c7-498d-87f7-b9e37577882f/content/src/html/chapter-4.2.html | jellyfish product identity, product uses, and commodity context |
| `brotz-pauly-jellyfish-fisheries-2017` | literature | Brotz and Pauly, studying jellyfish fisheries and global catch context, Sea Around Us PDF, https://legacy.seaaroundus.s3.amazonaws.com/researcher/dpauly/PDF/2017/Books%26Chapters/Brotz%2B%26%2BPauly%2B2017%2BStudying%2Bjellyfish%2Bfisheries.pdf | jellyfish fisheries context, harvest and management uncertainty, bycatch and catch documentation context |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | live, fresh, chilled aquatic product handling, hygiene, transport, and product-state context |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs minus rejects, drainage, and losses under declared product basis | normalization, allocation, landing balance, yield, and delivery calculations |
