---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.natural-sponges-of-aquatic-animal-origin
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Natural sponges of aquatic animal origin

## 1. Scope and Applicability

This PCR guides foreground data package construction for natural sponges of aquatic animal origin placed on the market as harvested, landed, or primary prepared sponge product. It covers declared diving, cutting, hand collection, trawl or hook collection where legal, onboard handling, landing, washing or rinsing, draining, trimming of unusable tissue, drying or simple preservation where it remains a primary natural sponge product, packaging, storage, dispatch, and release at the declared gate.

Covered products include natural marine or freshwater animal sponges of declared species or commercial grade when sold as unprocessed, landed, washed, drained, dried, or simply prepared primary biomass. Excluded products are synthetic sponges, plastic foam sponges, shaped bath articles, chemically finished or manufactured sponge goods, composite cleaning products, cosmetic or medical finished articles, extracted compounds, and residues or damaged sponge biomass modelled as separate products.

A conforming dataset must retain species or commercial grade, harvest area, collection method, wet or dry mass basis, cleaning or drying state, and gate. Sponge bed management, permit, protected habitat, and regeneration practices must be disclosed when relevant.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.natural-sponges-of-aquatic-animal-origin` |
| classification_refs | CPC 3.0 `04920`, `Natural sponges of aquatic animal origin` |
| covered_products | natural aquatic animal sponges harvested, collected, landed, washed, drained, dried, or simply prepared as primary natural sponge product |
| excluded_products | synthetic sponges; plastic foam sponges; shaped, cut-to-retail, chemically finished, manufactured, composite, cosmetic, medical, or industrial sponge articles; extracted compounds; damaged biomass, waste, wash water, or trimming residues as separate products |
| representative_product | natural aquatic animal sponge at declared species or grade, harvest area, wet or dry mass basis, cleaning or drying state, packaging state, and declared gate |
| production_route | harvest or collection by diver, vessel, hand, hook, trawl, or declared legal method, landing, washing/rinsing, draining, trimming, simple drying or preservation where primary, packaging, storage, and declared gate release |
| market_state | harvested or primary prepared natural sponge with declared species or grade, collection method, wet/dry/cleaned/dried basis, quality grade, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | natural sponge of aquatic animal origin as harvested or primary prepared product |
| How much | 1 kg |
| How well | declared species or commercial grade, natural animal origin, harvest area, collection method, wet or dry mass basis, cleaning/drying state, packaging state, and gate |
| How long or cycle | one harvest trip, collection lot, landing lot, handling lot, sales lot, or reporting period normalized to marketable sponge output |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or commercial grade; natural aquatic animal origin; harvest or collection area; collection method; permit or access right where relevant; wet, drained, dry, cleaned, or simply prepared mass basis; drying or preservation state; quality grade; packaging state; declared gate; habitat, protected-area, bed regeneration, and unresolved Tiangong UUID substitutions |

Mass is the primary reference basis. Piece, bundle, sack, basket, crate, diver lot, or trip records may be used only when net mass, wet or dry basis, grade, tare, and sampling method are retained.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg natural sponge in the declared wet, drained, cleaned, dried, or primary prepared product basis. |
| `natural_origin_identity` | all datasets | Product identity and origin evidence | declared records | Dataset records must show natural aquatic animal sponge origin and must not mix synthetic, plastic, shaped manufactured, or chemically finished sponge articles with the reference product. |
| `wet_dry_cleaned_basis` | harvested, washed, drained, dried, or cleaned sponge lots | Mass and moisture or drying state | kg, %, or kg dry sponge | Product mass must state wet, drained, cleaned, dried, or declared basis. Convert between wet and dry basis only with measured moisture, drying yield, or retained lot evidence. |
| `harvest_lot_identity` | collection, landing, grading, and sales records | Mass, count, or lot | kg, item, bundle, sack, basket, or crate | Harvest records must retain species or grade, harvest area, method, diver/vessel/collector, trip, lot, landing date, accepted mass, rejected mass, and permit or access record where relevant. |
| `cleaning_preservation_basis` | washing, trimming, drying, disinfecting, bleaching, or preservation | Mass, volume, concentration, or energy | kg, L, %, kWh, MJ, or h | Simple primary preparation may be included only when it preserves natural sponge identity. Record water, chemical, drying energy, time, rejected tissue, and product-state conversion basis. |
| `energy_fuel_and_delivery_inventory` | diving, vessel operation, air compression, landing, drying, storage, and dispatch | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, compressed-air, drying, storage, and delivery units before normalizing to the reference flow. |
| `packaging_basis` | sacks, bales, cartons, liners, labels, reusable crates, and pallets | Mass or item count | kg or item | Packaging records must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

## 5. System Boundary

The default boundary covers foreground-controlled sponge harvest or collection to the declared landing, drying, dispatch, packhouse, or delivery gate:

1. Sponge harvesting or collection, including diver, vessel, hand, hook, trawl, or legal collection method, gear operation, access or permit compliance, and onboard handling.
2. Landing, grading, washing, rinsing, draining, trimming, simple drying or preservation where the product remains a primary natural sponge, residue handling, packaging, storage, and declared gate release.
3. Delivery to the declared gate when the reference flow is delivered product beyond landing, drying yard, dispatch, or packhouse gate.

Capital goods and long-lived vessels, diving equipment, air compressors, gear, tanks, drying structures, and infrastructure are included only when the declared data package scope requires them. Purchased fuel, electricity, compressed air, water, cleaning chemicals, packaging, and transport services require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_natural_sponge_harvest_or_collection_lot |
| starting_condition_role | aquatic_animal_sponge_lot_identity_and_product_state |
| product_classification_scope | current CPC 3.0 product category `04920`, `Natural sponges of aquatic animal origin` |
| recursive_input_rule | natural sponge collected as an input to primary sponge product is recorded as a declared harvest or collection lot with area, method, species or grade, wet/dry basis, and gate disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | fishing or collection trip records, supplier harvest records, landing documents, permit or traceability evidence, fuel, electricity, water, chemicals, packaging, and delivery datasets where outside foreground control |
| disclosure | disclose species or commercial grade, harvest or collection area, collection method, diver or vessel, permit or access right, habitat or protected-area status where relevant, wet/dry/cleaned/dried basis, washing, trimming, drying or preservation route, rejects and residues, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| harvest_collection_and_landing | Harvest, Collection, and Landing | required | harvest or collection lot must be declared | foreground production | landed natural sponge entering primary preparation |
| primary_preparation_drying_and_packout | Primary Preparation, Drying, and Pack-out | required | include cleaning, trimming, drying, or simple preservation when performed before declared gate | foreground conditioning and gate release | marketable natural sponge |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond landing, drying, dispatch, or packhouse gate | foreground transport | delivered natural sponge at declared gate |

### Process: Harvest, Collection, and Landing (`harvest_collection_and_landing`)

#### Inputs

##### Product flows

###### Harvest fuel, diving, gear, and collection inputs (`harvest_fuel_diving_gear_and_collection_inputs`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; route-specific diving service, compressed air, gear, basket, vessel service, seawater, or collection input selected from foreground records
- Flow property / unit: Fuel, energy, mass, volume, item, time, or service quantity / L, kWh, MJ, kg, m3, item, h, or service unit
- Amount rule: measured or allocated vessel fuel, air compression, diving service, gear use, collection inputs, and landing support by trip or lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest trip or landing lot and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_collection_and_landing_records`
- Sources: `fao-sponge-production`, `martinangeli-commercial-sponges-2022`
- Range: Provisional harvest input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: L, kWh, MJ, kg, m3, item, h, or service unit/1,000 kg marketable product
  - Basis: broad first-pass vessel, diver, gear, air compression, and landing support input check
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Damaged sponges, non-target material, and landing residues (`damaged_sponges_non_target_material_and_landing_residues`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; route-specific damaged sponge, rejected sponge, non-target material, tissue residue, wastewater, and disposal flow selected from site records
- Flow property / unit: Mass, volume, or count / kg, m3, or item
- Amount rule: measured rejected or damaged sponge, non-target material, residue mass, fate, disposal route, recovery route, and receiving environment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvest trip or landing lot and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_residue_and_discharge_records`
- Range: Provisional landing residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg residue/kg accepted landed sponge
  - Basis: broad reject, damaged sponge, tissue, and residue check at harvest and landing
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted landed natural sponge (`accepted_landed_natural_sponge`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453`
- Flow property / unit: Mass / kg
- Amount rule: calculated accepted landed sponge after sorting, rejection, drainage, and lot identification
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: accepted landed sponge entering primary preparation
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_collection_and_landing_records`
- Range: Accepted landing mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg accepted landed sponge/kg marketable product
  - Basis: broad landing-to-marketable mass-balance check before cleaning and drying
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Primary Preparation, Drying, and Pack-out (`primary_preparation_drying_and_packout`)

#### Inputs

##### Product flows

###### Accepted sponge entering primary preparation (`accepted_sponge_entering_primary_preparation`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted sponge entering washing, rinsing, trimming, drying, simple preservation, grading, or packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_product_state_and_mass_records`
- Sources: `fao-sponge-production`, `martinangeli-commercial-sponges-2022`
- Range: Primary preparation input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg accepted sponge/kg marketable product
  - Basis: broad wet-to-cleaned or wet-to-dry product-yield check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water, chemicals, energy, drying, and packaging inputs (`water_chemicals_energy_drying_and_packaging_inputs`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Packaging, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`; route-specific seawater, disinfectant, bleaching agent, preservation input, drying fuel, sack, bale, carton, or pallet selected from site records
- Flow property / unit: Mass, volume, energy, concentration, or item count / kg, L, m3, kWh, MJ, %, or item
- Amount rule: measured washing water, cleaning or preservation chemicals, drying energy, electricity, packaging, storage, and dispatch preparation quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_packaging_and_storage_records`
- Sources: `fao-sponge-production`
- Range: Provisional preparation input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg, L, m3, kWh, MJ, %, or item/1,000 kg marketable product
  - Basis: broad first-pass cleaning, drying, packaging, and storage input check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Trimming residues, wash water, and packaging waste (`trimming_residues_wash_water_and_packaging_waste`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; route-specific trimming residue, tissue residue, wash water, chemical bath, wastewater, packaging waste, and disposal flow selected from site records
- Flow property / unit: Mass or volume / kg, L, or m3
- Amount rule: measured trimming residues, wash water, spent bath, wastewater, packaging waste, disposal route, recovery route, and receiving environment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_residue_and_discharge_records`
- Range: Primary preparation residue QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg or m3/kg marketable product
  - Basis: broad reject, trimming, wash water, spent bath, packaging waste, and residue check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Marketable natural sponge (`marketable_natural_sponge`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output after declared cleaning, trimming, drying, packaging tare exclusion, and product-state normalization
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

###### Delivery fuel, electricity, and packaging support (`delivery_fuel_electricity_and_packaging_support`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; route-specific transport service, storage, drying protection, reusable packaging, or pallet support selected from site records
- Flow property / unit: Fuel, energy, mass, or transport service / L, MJ, kWh, kg, or tonne-km
- Amount rule: include only when the declared reference flow is delivered beyond landing, drying yard, dispatch, or packhouse gate; record distance, mode, load factor, moisture-protection condition, and return logistics where relevant
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

###### Delivered natural sponge at declared gate (`delivered_natural_sponge_at_declared_gate`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Natural sponges of aquatic animal origin `972e9d63-d123-4b6e-ad97-5b72d0735453`
- Flow property / unit: Mass / kg
- Amount rule: delivered mass at the declared gate, excluding transport packaging tare unless contractually part of the product basis
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
| `single_reference_product_default` | marketable natural sponge output | Treat the declared reference product as the single reference product unless trimming residues, damaged sponge, or non-target material are intentionally recovered as co-products. | marketable mass, rejected mass, recovered co-product mass, destination, and revenue or physical relation where co-products are claimed | `mass-balance-identity` |
| `habitat_and_reject_handling` | damaged sponge, non-target material, residues, and protected habitat disclosure | Do not allocate away rejected sponge, damaged material, or habitat disturbance by excluding them from the foreground package. Record fate and disclose bed or protected-area status where relevant. | damaged mass, reject mass, non-target material, harvest area, disposal or recovery route, permit, and habitat disclosure | `fao-sponge-production` |
| `shared_trip_and_preparation_allocation` | multi-product trips or shared preparation services | Allocate shared vessel fuel, diving support, electricity, water, drying, storage, and packaging by direct measurement, trip log, accepted mass, dry-mass output, holding or drying time, package count, or another declared physical driver before economic allocation. | trip records, landed mass, accepted mass, dry mass, service logs, package counts, drying time, and allocation driver | `mass-balance-identity` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_harvest_collection_and_landing_records` | `harvest_collection_and_landing` | harvest or collection, accepted landing, fuel, diver, gear, landing inputs | vessel log, diver log, collector log, landing note, catch ticket, fuel invoice, gear log, permit | species or grade, harvest area, method, diver, vessel or collector, trip, date, fuel, air compression, gear, gross sponge, rejected mass, accepted landed mass, landing site, permit | trip records, landing records, weigh tickets, diver logs, and permit or traceability documents | kg, L, kWh, MJ, item, h, date, area | each trip or landing lot | full reporting period or declared season | diver, vessel, collector, harvest area, landing site, or supplier | reconcile collected mass plus purchases minus rejects and losses to accepted landed sponge; normalize to marketable output | landing tickets, scale records, trip logs, diver logs, permits, invoices, and operator sign-off |
| `cp_preparation_product_state_and_mass_records` | `primary_preparation_drying_and_packout` | cleaning, drying, trimming, product state, marketable output | wash log, drying log, trimming record, grade sheet, packout record, sales note | accepted mass, wet/dry/cleaned basis, washing, drying time, drying temperature where relevant, rejected mass, grade, marketable mass, package count, destination | calibrated scales, handling logs, drying records, packout records, and sales reconciliation | kg, %, item, h, date | each preparation or packing lot | full handling and dispatch period | landing site, drying yard, packhouse, dispatch gate | reconcile accepted landed mass minus rejects, trimming, moisture loss, and handling losses to marketable output; normalize all flows to 1 kg reference product | scale calibration, drying logs, packout sheets, sales records, and supervisor review |
| `cp_preparation_packaging_and_storage_records` | `primary_preparation_drying_and_packout` | water, chemicals, electricity, drying fuel, packaging, storage | water meter, chemical invoice, electricity meter, drying fuel record, packaging invoice, storage log, dispatch sheet | water, chemical type, concentration, electricity, fuel, drying time, packaging material, item count, tare, lot, destination | invoices, meters, drying logs, and dispatch records | kg, L, m3, kWh, MJ, %, item, h | each preparation lot and monthly reconciliation | handling, storage, and dispatch period | preparation site, drying yard, storage room, dispatch gate | allocate to product lots by measured lot, product mass, dry-mass output, drying time, or package count | invoices, meter readings, drying logs, dispatch sheets, and operator review |
| `cp_reject_residue_and_discharge_records` | `harvest_collection_and_landing`; `primary_preparation_drying_and_packout` | damaged sponge, rejected sponge, trimming residue, wash water, wastewater, packaging waste | reject log, residue record, wastewater record, disposal note, waste ticket | date, species or material, count, mass, volume, cause, fate, disposal route, recovery route, receiving environment | landing records, handling records, waste tickets, and discharge records | kg, L, m3, item, date | each event and monthly reconciliation | full reporting period or season | vessel, landing site, preparation site, discharge route, or waste route | sum by material and fate; reconcile to collected mass, accepted mass, marketable output, and disposal route | reject logs, waste transfer notes, discharge records, and supervisor review |
| `cp_delivery_records` | `delivery_to_declared_gate` | delivered product, transport energy, moisture-protection condition | delivery note, transport invoice, fuel record, route plan, storage or moisture log | origin, destination, distance, mode, load mass, fuel, electricity, packaging support, moisture protection, return logistics | carrier documents, vehicle logs, meter records, and dispatch reconciliation | kg, km, tonne-km, L, kWh, h | each delivery route | delivery period in declared scope | delivery route, vehicle, vessel, or carrier | calculate tonne-km and allocate fuel or service by load mass, distance, storage condition, and return logistics where relevant | carrier invoice, route record, storage log, and dispatch sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = collected amount / marketable reference product mass, with unit and product-state basis retained | collected amount, marketable product mass, product basis | kg, kWh, L, item, m3, or tonne-km per kg reference product | `mass-balance-identity` |
| `accepted_landing_balance` | harvest and landing | accepted landed sponge = gross collected or received mass - rejected sponge - documented onboard or landing losses | gross collection, received mass, rejects, loss | accepted landed sponge | `mass-balance-identity` |
| `wet_to_dry_or_cleaned_yield` | cleaning, trimming, drying, and packout | marketable product mass = accepted landed mass - rejected mass - trimming - moisture loss according to declared wet, cleaned, or dry basis | accepted mass, rejected mass, trimming, moisture or drying records, packout records | marketable natural sponge mass | `fao-sponge-production` |
| `delivery_tonne_kilometres` | delivered reference product | tonne-km = delivered product mass in tonnes x one-way or contract-declared route distance; allocate storage or protection inputs by load share | delivered mass, distance, route, load factor, moisture-protection condition | tonne-km and delivered product inventory | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and harvest lot | Species or commercial grade, CPC category, natural aquatic animal origin, harvest area, method, wet/dry/cleaned basis, and declared gate must be explicit. | reference flow metadata, landing records, product-state logs, packout records, and sales or dispatch records |
| `dq_origin_and_habitat` | harvest or collection | Dataset must retain permit, access right, bed, habitat, protected-area, and regeneration or cutting practice disclosure where applicable. | permits, harvest logs, management records, area maps, and traceability documents |
| `dq_mass_balance` | harvest, landing, cleaning, drying, trimming, and packout | Collected mass, accepted landed mass, rejects, trimming, moisture loss, residues, and marketable product records must reconcile within declared tolerance; unexplained gaps require disclosure. | mass-balance worksheet, scale tickets, landing records, drying records, packout records, and supervisor review |
| `dq_temporal_coverage` | all foreground rows | Data must cover the declared harvest season, trip set, handling lots, drying lots, and dispatch period, or disclose partial-season, partial-lot, or proxy coverage. | reporting calendar, trip logs, handling logs, dispatch records, and coverage statement |
| `dq_boundary_disclosure` | all datasets | The dataset must disclose whether collection, landing, cleaning, drying, packaging, delivery, capital goods, and infrastructure are foreground, linked upstream datasets, or excluded by scope. | dataset boundary statement, supplier records, upstream dataset links, and scope declaration |

## 9. Validation Rules

| rule_id | Rule | Severity | Failure message |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | Reference product flow UUID equals `972e9d63-d123-4b6e-ad97-5b72d0735453` unless a more specific Tiangong natural sponge product flow is documented. | error | Reference flow must use the natural sponges of aquatic animal origin product identity or document a reviewed replacement. |
| `val_natural_origin` | Product is natural aquatic animal sponge and not synthetic, plastic, shaped manufactured, chemically finished, or composite sponge article. | error | Product identity is outside the natural aquatic animal sponge PCR scope. |
| `val_mass_basis` | Product mass basis is declared as wet, drained, cleaned, dried, or another stated basis. | error | Product mass basis is missing or ambiguous. |
| `val_required_qualifiers` | Required qualifiers are present in metadata or process notes. | warning | Reference flow qualifiers are incomplete. |
| `val_structured_sync` | `structured.yaml` is regenerated from the bilingual Markdown after edits. | error | Structured projection is out of sync with authored PCR Markdown. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for natural sponges of aquatic animal origin |
| downstream_use | `secondary_dataset`; `background_dataset`; foreground reference for process or lifecyclemodel construction when harvest and primary preparation records are retained |
| allowed_use | LCA modelling of declared natural aquatic animal sponge at landing, drying, dispatch, packhouse, or delivered gate |
| excluded_use | synthetic sponges; plastic foam sponges; shaped bath articles; chemically finished or manufactured sponge goods; composite cleaning products; cosmetic or medical finished articles; extracted compounds; damaged sponge biomass, residues, wastewater, or trimmings as separate products; ecosystem-service or regeneration claims without a separate reviewed method |
| required_metadata | canonical PCR id; CPC 3.0 code; species or commercial grade; natural animal origin; harvest or collection area; collection method; permit or access right; wet/dry/cleaned/dried mass basis; product grade; packaging state; declared gate; geography; reporting period; data owner; unresolved UUID substitutions |
| required_quality_disclosure | natural origin evidence, habitat and permit disclosure where relevant, mass balance closure, wet/dry/cleaned basis, temporal coverage, allocation basis, upstream dataset links, missing foreground records, proxy rows, and reasoned-estimate ranges used only for QA screening |
| update_trigger | new Tiangong flow identities for sponge species, collection gear, diver service, compressed air, cleaning chemicals, drying energy, residues, packaging, or delivery services; reviewed quantitative evidence for fuel, yield, moisture loss, trimming, drying, packaging, or habitat ranges; updated FAO, fishery management, or legal requirements; classification mapping change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sponge-production` | official_guidance | FAO, Sponge production chapter, https://www.fao.org/4/ac286e/AC286E02.htm | sponge fishery route, production context, harvest and handling boundary |
| `martinangeli-commercial-sponges-2022` | literature | Martinangeli et al., The global catch of commercial sponges (1950 to 2019), Sea Around Us PDF, https://s3.us-west-2.amazonaws.com/legacy.seaaroundus/researcher/dpauly/PDF/2022/Book%2C%2Bchapters%2C%2Breports/Martinangeli%2C%2BL.%2C%2BM.%2BFourt%2C%2BM.%2BButler%2C%2BA.%2BC.%2BTsikliras%2C%2BN.%2BSmith%2C%2BM.L.D.%2BPalomares%2C%2BB.%2BDerrick%2C%2BE.%2BChu%2Band%2BD.%2BPauly.%2B2022.%2B2022.%2BThe%2Bglobal%2Bcatch%2Bof%2Bcommercial%2Bsponges.pdf | commercial sponge catch context, species and fishery documentation uncertainty |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs minus rejects, trimming, moisture loss, and losses under declared product basis | normalization, allocation, landing balance, yield, and delivery calculations |
