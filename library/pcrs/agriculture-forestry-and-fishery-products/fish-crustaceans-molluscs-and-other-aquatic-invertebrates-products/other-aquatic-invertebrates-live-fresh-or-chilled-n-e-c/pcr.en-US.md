---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-aquatic-invertebrates-live-fresh-or-chilled-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other aquatic invertebrates, live, fresh or chilled, n.e.c.

## 1. Scope and Applicability

This PCR guides foreground data package construction for other aquatic invertebrates, live, fresh, or chilled, not elsewhere classified in the more specific PCR records for fish, crustaceans, molluscs, jellyfish, sea cucumbers, sea urchins, sponges, ornamental aquatic animals, or processed aquatic invertebrate products. It covers declared harvesting, collection, or legal gathering, onboard or field sorting, live holding or chilled holding, landing, grading, washing where performed, packaging, icing or temperature control, dispatch, and release at the declared gate.

Covered products include live, fresh, or chilled aquatic invertebrates of declared species or species group that remain unprocessed primary products and are not represented by a more specific canonical PCR. Excluded products are all products with a more specific PCR in this subdomain, frozen, smoked, dried, salted, brined, prepared, preserved, cooked, canned, ornamental, extracted, manufactured, or otherwise processed products, and residues or rejected biomass modelled as separate products.

This is a fallback PCR. A conforming dataset must state why a more specific product PCR does not apply, and must preserve the species or species-group identity needed for future mapping refinement.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-aquatic-invertebrates-live-fresh-or-chilled-n-e-c` |
| classification_refs | CPC 3.0 `04590`, `Other aquatic invertebrates, live, fresh or chilled, n.e.c.` |
| covered_products | live, fresh, or chilled aquatic invertebrates not covered by a more specific canonical PCR, sold as unprocessed primary product with declared species or species group |
| excluded_products | jellyfish; sea cucumbers; sea urchins; natural sponges; crustaceans; molluscs; fish; ornamental aquatic animals; frozen, smoked, dried, salted, brined, prepared, preserved, cooked, canned, extracted, manufactured, or processed products; residues, wastewater, bycatch, or rejected biomass as separate products |
| representative_product | other aquatic invertebrate live, fresh, or chilled at declared species or species group, harvest area, production or collection route, product state, wet or drained mass basis, packaging state, and declared gate |
| production_route | wild harvest or collection, declared aquaculture route where no specific PCR applies, onboard or field sorting, landing or receipt, live or chilled holding, washing where performed, packaging, temperature control, and declared gate release |
| market_state | live, fresh, or chilled n.e.c. aquatic invertebrate with declared species, route, collection method, product basis, holding condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | other aquatic invertebrates, live, fresh, or chilled, not elsewhere classified |
| How much | 1 kg |
| How well | declared species or species group, reason more specific PCR does not apply, live/fresh/chilled state, wet or drained mass basis, route, handling condition, packaging state, and gate |
| How long or cycle | one harvest, collection, aquaculture, landing, handling, sales lot, or reporting period normalized to marketable output |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other aquatic invertebrates `9e2938bd-46d5-4801-b52c-87c35caf9a07` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; n.e.c. justification; harvest, collection, or aquaculture route; area or site; gear or collection method; landing or receipt site; live, fresh, or chilled state; wet, drained, whole, cleaned, or declared product basis; holding duration and temperature or live-holding condition; packaging state; declared gate; intended use where known; permit, traceability, and unresolved Tiangong UUID substitutions |

Mass is the primary reference basis. Count, basket, tub, crate, sack, bin, volume, trip, or holding-unit records may be used only when net mass, tare, drainage method, product state, and sampling method are retained.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg other aquatic invertebrates in the declared live, fresh, or chilled product form. |
| `fallback_identity_check` | all datasets | PCR selection evidence | declared records | Dataset metadata must state why a more specific PCR does not apply and must retain species or species-group identity for future mapping. |
| `product_state_identity` | all datasets | Product state and handling evidence | declared records | Product records must prove live, fresh, or chilled state and must not mix frozen, dried, salted, brined, prepared, preserved, ornamental, or processed products with the reference product. |
| `wet_drained_mass_basis` | live, fresh, chilled, washed, drained, or iced records | Mass and drainage basis | kg | Product mass must state wet whole mass, drained mass, cleaned mass, ice-excluded mass, or another declared basis. Convert only with measured drainage or yield evidence. |
| `lot_identity` | harvest, collection, aquaculture, landing, sorting, and sales records | Mass, count, or volume | kg, item, basket, tub, crate, or m3 | Lot records must retain species or species group, route, area or site, gear or collection method, vessel, collector, farm, trip, lot, date, accepted mass, rejected mass, and permit where relevant. |
| `energy_fuel_ice_water_and_holding` | harvest, collection, aquaculture holding, washing, live holding, chilled holding, and dispatch | Energy, fuel, mass, volume, temperature, or time | kWh, MJ, L, kg, m3, deg C, or h | Record fuel, electricity, water, ice, oxygen, temperature, salinity where relevant, holding time, drainage, and discharge basis before normalization. |
| `packaging_basis` | baskets, tubs, crates, sacks, liners, labels, insulated containers, live packs, ice boxes, and pallets | Mass or item count | kg or item | Packaging and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

## 5. System Boundary

The default boundary covers foreground-controlled production or capture to the declared landing, holding, dispatch, packhouse, or delivery gate:

1. Wild harvest, gathering, collection, or declared aquaculture production when no more specific PCR applies, including gear or culture-unit operation, catch or stock handling, non-target material, bycatch, mortalities, and direct operating inputs.
2. Landing or receipt, grading, washing where performed, live holding or chilled holding, drainage, rejection, residue handling, temperature control, icing, packaging, storage, and declared gate release.
3. Delivery to the declared gate when the reference flow is delivered product beyond landing, receipt, dispatch, or packhouse gate.

Capital goods and long-lived vessels, gear, tanks, cages, holding systems, cold rooms, and infrastructure are included only when the declared data package scope requires them. Purchased stock, feed, ice, packaging, electricity, fuel, water, oxygen, and transport services require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_other_aquatic_invertebrate_harvest_collection_or_stocking_lot |
| starting_condition_role | n_e_c_aquatic_invertebrate_lot_identity_and_product_state |
| product_classification_scope | current CPC 3.0 product category `04590`, `Other aquatic invertebrates, live, fresh or chilled, n.e.c.` |
| recursive_input_rule | other aquatic invertebrates used as inputs to produce the reference product are recorded as declared harvest, collection, stocking, or receipt lots with species, route, product-state, and mass-basis disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | harvest, collection, aquaculture, supplier, landing, stock, feed, packaging, ice, fuel, electricity, water, oxygen, and delivery datasets where outside foreground control |
| disclosure | disclose species or species group, n.e.c. justification, route, harvest or production area, gear, culture system where relevant, landing or receipt site, live/fresh/chilled state, wet or drained mass basis, sorting and rejection, washing or holding water, temperature or ice use, holding duration, packaging state, intended use where known, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| production_harvest_collection_and_receipt | Production, Harvest, Collection, and Receipt | required | route, species or species group, and n.e.c. justification must be declared | foreground production/upstream bridge | accepted aquatic invertebrate lot entering live/fresh/chilled handling |
| sorting_holding_chilling_and_packout | Sorting, Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | marketable live, fresh, or chilled n.e.c. aquatic invertebrate |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond landing, receipt, dispatch, or packhouse gate | foreground transport | delivered product at declared gate |

### Process: Production, Harvest, Collection, and Receipt (`production_harvest_collection_and_receipt`)

#### Inputs

##### Product flows

###### Production, harvest, collection, or receipt inputs (`production_harvest_collection_or_receipt_inputs`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; route-specific stock, feed, gear, vessel service, culture material, collection input, water, ice, oxygen, or supplier input selected from foreground records
- Flow property / unit: Fuel, energy, mass, volume, item, time, or service quantity / L, kWh, MJ, kg, m3, item, h, or service unit
- Amount rule: measured or allocated harvest, collection, aquaculture, receipt, gear, water, fuel, electricity, stock, feed, and landing support inputs by route and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production, harvest, collection, or receipt lot and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_harvest_collection_and_receipt_records`
- Sources: `fao-code-responsible-fisheries-1995`, `codex-cxc-52-2003`
- Range: Provisional route input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: L, kWh, MJ, kg, m3, item, h, or service unit/1,000 kg marketable product
  - Basis: broad first-pass route input check across n.e.c. aquatic invertebrate products
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Bycatch, mortalities, rejected biomass, and receipt residues (`bycatch_mortalities_rejected_biomass_and_receipt_residues`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; route-specific bycatch, mortality, rejected organism, non-target material, wastewater, and residue flow selected from site records
- Flow property / unit: Mass, volume, or count / kg, m3, or item
- Amount rule: measured bycatch, mortalities, rejected organisms, non-target material, drainage or wastewater, residue mass, fate, disposal route, recovery route, and receiving environment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production, harvest, collection, or receipt lot and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_residue_bycatch_mortality_and_discharge_records`
- Range: Provisional receipt residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg residue/kg accepted lot
  - Basis: broad bycatch, mortality, rejection, drainage, and residue check at production or receipt
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted n.e.c. aquatic invertebrate lot (`accepted_n_e_c_aquatic_invertebrate_lot`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Other aquatic invertebrates `9e2938bd-46d5-4801-b52c-87c35caf9a07`
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted lot after receipt, sorting, rejection, mortality, drainage, and lot identification
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: accepted lot entering live, fresh, or chilled handling
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_harvest_collection_and_receipt_records`
- Range: Accepted lot mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg accepted lot/kg marketable product
  - Basis: broad lot-to-marketable mass-balance check before final sorting and drainage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Sorting, Holding, Chilling, and Pack-out (`sorting_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### Accepted lot entering final handling (`accepted_lot_entering_final_handling`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Other aquatic invertebrates `9e2938bd-46d5-4801-b52c-87c35caf9a07`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted n.e.c. aquatic invertebrate lot entering sorting, washing, drainage, live holding, chilling, or packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packout_product_state_and_mass_records`
- Sources: `codex-cxc-52-2003`
- Range: Final handling input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg accepted lot/kg marketable product
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

###### Sorting rejects, mortalities, drainage, wastewater, and packaging waste (`sorting_rejects_mortalities_drainage_wastewater_and_packaging_waste`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; route-specific rejected organisms, mortalities, drainage, wastewater, spent ice, packaging waste, and organic residue selected from site records
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured rejects, mortalities, drainage, wastewater, spent ice, packaging waste, residue mass, disposal route, recovery route, and receiving environment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_residue_bycatch_mortality_and_discharge_records`
- Range: Final handling residue QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg or m3/kg marketable product
  - Basis: broad reject, mortality, drainage, wastewater, spent ice, packaging waste, and residue check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Marketable live, fresh, or chilled n.e.c. aquatic invertebrate (`marketable_live_fresh_or_chilled_n_e_c_aquatic_invertebrate`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Other aquatic invertebrates `9e2938bd-46d5-4801-b52c-87c35caf9a07`
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
- Amount rule: include only when the declared reference flow is delivered beyond landing, receipt, dispatch, or packhouse gate; record distance, mode, load factor, live or chilled condition, and return logistics where relevant
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

###### Delivered n.e.c. aquatic invertebrate at declared gate (`delivered_n_e_c_aquatic_invertebrate_at_declared_gate`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Other aquatic invertebrates `9e2938bd-46d5-4801-b52c-87c35caf9a07`
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
| `single_reference_product_default` | marketable live, fresh, or chilled n.e.c. aquatic invertebrate output | Treat the declared reference product as the single reference product unless rejected biomass, bycatch, mortalities, or residues are intentionally recovered as co-products. | marketable mass, rejected mass, recovered co-product mass, destination, and revenue or physical relation where co-products are claimed | `mass-balance-identity` |
| `fallback_scope_priority` | all datasets | If a more specific canonical PCR exists for the species, route, or product state, use that PCR instead of this fallback category. | species, route, product state, classification mapping, and PCR selection note | `mass-balance-identity` |
| `bycatch_mortality_and_reject_handling` | bycatch, non-target material, mortalities, rejected biomass, and residues | Do not allocate away bycatch, mortalities, rejects, drainage, or residue by excluding them from the foreground package. Record fate and allocate only when a recovered co-product is documented. | bycatch mass, mortality mass, reject mass, drainage or wastewater, destination, disposal or recovery route | `fao-code-responsible-fisheries-1995` |
| `shared_route_allocation` | multi-species trips, shared aquaculture systems, or shared handling services | Allocate shared vessel fuel, gear service, stock inputs, feed, electricity, water, ice, oxygen, packaging, and handling by direct measurement, trip log, culture-unit record, accepted mass, holding time, package count, or another declared physical driver before economic allocation. | trip records, culture-unit records, accepted mass by species, service logs, package counts, holding time, and allocation driver | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_production_harvest_collection_and_receipt_records` | `production_harvest_collection_and_receipt` | route, species, harvest, collection, aquaculture, receipt, accepted lot | vessel log, collector log, farm log, landing note, receipt note, supplier invoice, permit, feed or stock record | species, route, area or site, gear or culture system, supplier, trip or batch, date, fuel, electricity, water, stock, feed, gross mass, rejected mass, accepted mass, landing or receipt site, n.e.c. justification | trip, farm, receipt, landing, supplier, permit, and weigh records | kg, L, kWh, MJ, item, date, area | each trip, production batch, receipt, or landing lot | full reporting period or declared season/cycle | vessel, collector, farm, harvest area, landing site, supplier, or packhouse | reconcile produced, collected, landed, or received mass minus rejects and losses to accepted lot; normalize to marketable output | landing tickets, scale records, farm logs, supplier records, permits, invoices, and operator sign-off |
| `cp_packout_product_state_and_mass_records` | `sorting_holding_chilling_and_packout` | sorting, drainage, product state, marketable output | sorting sheet, wash log, drainage record, temperature log, live-holding log, packout record, sales note | accepted mass, product state, wet or drained basis, washing, drainage time, temperature, holding duration, rejected mass, marketable mass, package count, destination | calibrated scales, handling logs, temperature records, packout records, and sales reconciliation | kg, item, deg C, h, date | each handling or packing lot | full handling and dispatch period | landing site, farm, holding unit, packhouse, dispatch gate | reconcile accepted lot mass minus rejects, mortalities, drainage, and handling losses to marketable output; normalize all flows to 1 kg reference product | scale calibration, temperature logs, packout sheets, sales records, and supervisor review |
| `cp_packaging_ice_chilling_and_dispatch_records` | `sorting_holding_chilling_and_packout` | water, ice, electricity, packaging, live holding, chilling | packaging invoice, ice log, water meter, electricity meter, temperature log, oxygen log, dispatch sheet | packaging material, item count, tare, ice mass, water, electricity, oxygen, temperature, holding time, lot, destination | invoices, meters, temperature records, and dispatch records | kg, item, m3, kWh, deg C, h | each packing lot and monthly reconciliation | handling and dispatch period | packhouse, live-holding unit, cold room, dispatch gate | allocate to product lots by measured lot, package count, product mass, holding time, or temperature-control zone | invoices, meter readings, temperature logs, dispatch sheets, and operator review |
| `cp_reject_residue_bycatch_mortality_and_discharge_records` | `production_harvest_collection_and_receipt`; `sorting_holding_chilling_and_packout` | bycatch, mortalities, rejected biomass, drainage, wastewater, residues, packaging waste | reject log, bycatch record, mortality log, wastewater record, disposal note, waste ticket | date, species or material, count, mass, volume, cause, fate, disposal route, recovery route, receiving environment | production, landing, handling, waste, and discharge records | kg, m3, item, date | each event and monthly reconciliation | full reporting period or season/cycle | vessel, farm, landing site, packhouse, discharge route, or waste route | sum by material and fate; reconcile to gross lot, accepted mass, marketable output, and disposal route | reject logs, mortality logs, waste transfer notes, discharge records, and supervisor review |
| `cp_delivery_records` | `delivery_to_declared_gate` | delivered product, transport energy, live or chilled delivery condition | delivery note, transport invoice, fuel record, route plan, temperature or live-holding log | origin, destination, distance, mode, load mass, fuel, electricity, ice, water, oxygen, temperature, live-holding duration, return logistics | carrier documents, vehicle logs, meter records, and dispatch reconciliation | kg, km, tonne-km, L, kWh, h, deg C | each delivery route | delivery period in declared scope | delivery route, vehicle, vessel, or carrier | calculate tonne-km and allocate fuel or service by load mass, distance, temperature zone, and return logistics where relevant | carrier invoice, route record, temperature log, and dispatch sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = collected amount / marketable reference product mass, with unit and product-state basis retained | collected amount, marketable product mass, product basis | kg, kWh, L, item, m3, or tonne-km per kg reference product | `mass-balance-identity` |
| `accepted_lot_balance` | production, harvest, collection, receipt | accepted lot = gross produced, harvested, collected, or received mass - rejected biomass - mortalities - documented losses | gross lot, received mass, rejects, mortalities, losses | accepted lot | `mass-balance-identity` |
| `product_state_yield` | sorting, drainage, and packout | marketable product mass = accepted lot mass - rejected mass - mortality mass - drainage or product-state loss - packaging tare and ice excluded from product basis | accepted mass, rejected mass, mortalities, drainage, product-state records, packout records | marketable live, fresh, or chilled mass | `codex-cxc-52-2003` |
| `delivery_tonne_kilometres` | delivered reference product | tonne-km = delivered product mass in tonnes x one-way or contract-declared route distance; allocate temperature-control or live-holding inputs by load share | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and lot | Species or species group, CPC category, n.e.c. justification, route, live/fresh/chilled state, wet or drained mass basis, area or site, and declared gate must be explicit. | reference flow metadata, PCR selection note, production or landing records, product-state logs, packout records, and sales or dispatch records |
| `dq_product_state` | all product rows | Dataset must not mix live, fresh, or chilled product with frozen, dried, salted, brined, prepared, preserved, ornamental, or processed product. | product descriptions, temperature logs, handling records, preservation records, and sales documents |
| `dq_mass_balance` | production, harvest, collection, receipt, sorting, drainage, and packout | Gross lot, accepted mass, rejects, mortalities, drainage, residues, and marketable product records must reconcile within declared tolerance; unexplained gaps require disclosure. | mass-balance worksheet, scale tickets, production or landing records, packout records, and supervisor review |
| `dq_temporal_coverage` | all foreground rows | Data must cover the declared harvest season, production cycle, handling lots, and dispatch period, or disclose partial-season, partial-cycle, partial-lot, or proxy coverage. | reporting calendar, trip or farm logs, handling logs, dispatch records, and coverage statement |
| `dq_boundary_disclosure` | all datasets | The dataset must disclose whether production, harvest, collection, stock, feed, water, ice, packaging, delivery, capital goods, and infrastructure are foreground, linked upstream datasets, or excluded by scope. | dataset boundary statement, supplier records, upstream dataset links, and scope declaration |

## 9. Validation Rules

| rule_id | Rule | Severity | Failure message |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | Reference product flow UUID equals `9e2938bd-46d5-4801-b52c-87c35caf9a07` unless a more specific Tiangong CPC 04590 product flow is documented. | error | Reference flow must use the other aquatic invertebrates CPC 04590 identity or document a reviewed replacement. |
| `val_fallback_scope` | Dataset states why no more specific canonical PCR applies. | error | n.e.c. fallback PCR requires a species and PCR-selection justification. |
| `val_product_state` | Product state is live, fresh, or chilled and excludes frozen, dried, salted, brined, prepared, preserved, ornamental, or processed product. | error | Product state is outside the live, fresh, or chilled n.e.c. aquatic invertebrate PCR scope. |
| `val_mass_basis` | Product mass basis is declared as wet, drained, cleaned, live, chilled, ice-excluded, or another stated basis. | error | Product mass basis is missing or ambiguous. |
| `val_required_qualifiers` | Required qualifiers are present in metadata or process notes. | warning | Reference flow qualifiers are incomplete. |
| `val_structured_sync` | `structured.yaml` is regenerated from the bilingual Markdown after edits. | error | Structured projection is out of sync with authored PCR Markdown. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for other aquatic invertebrates, live, fresh, or chilled, n.e.c. |
| downstream_use | `secondary_dataset`; `background_dataset`; foreground reference for process or lifecyclemodel construction when route and handling records are retained |
| allowed_use | LCA modelling of declared live, fresh, or chilled n.e.c. aquatic invertebrate product at landing, receipt, dispatch, packhouse, or delivered gate |
| excluded_use | any product with a more specific canonical PCR; ornamental aquatic animals; frozen, dried, smoked, salted, brined, cooked, canned, prepared, preserved, extracted, manufactured, or processed products; residues, wastewater, bycatch, mortalities, or rejected biomass as separate products; ecosystem-service claims without a separate reviewed method |
| required_metadata | canonical PCR id; CPC 3.0 code; species or species group; n.e.c. justification; route; harvest, collection, or production area; method or culture system; landing or receipt site; live/fresh/chilled state; wet or drained mass basis; product form; holding duration and temperature; packaging state; declared gate; geography; reporting period; data owner; unresolved UUID substitutions |
| required_quality_disclosure | fallback PCR justification, product state evidence, mass balance closure, wet/drained basis, temporal coverage, allocation basis, upstream dataset links, missing foreground records, proxy rows, and reasoned-estimate ranges used only for QA screening |
| update_trigger | new Tiangong flow identities for species-specific n.e.c. invertebrates, collection gear, vessel/diver service, culture inputs, stock, feed, ice, live-holding oxygen, bycatch, mortalities, residues, packaging, refrigerant, or delivery services; reviewed quantitative evidence for fuel, yield, mortality, drainage, ice, packaging, or chilling ranges; new specific PCR that supersedes this fallback; updated Codex, FAO, or legal requirements; classification mapping change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | live, fresh, chilled aquatic product handling, hygiene, transport, and product-state context |
| `fao-code-responsible-fisheries-1995` | official_guidance | FAO Code of Conduct for Responsible Fisheries, 1995, https://www.fao.org/fishery/docs/CDrom/aquaculture/a0805e/documents/Code%20of%20Conduct%20for%20Responsible%20Fisheries.pdf | responsible fishery operations, bycatch, habitat, route, and traceability disclosure context |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs plus growth or receipt minus rejects, mortalities, drainage, and losses under declared product basis | normalization, allocation, accepted-lot balance, yield, and delivery calculations |
