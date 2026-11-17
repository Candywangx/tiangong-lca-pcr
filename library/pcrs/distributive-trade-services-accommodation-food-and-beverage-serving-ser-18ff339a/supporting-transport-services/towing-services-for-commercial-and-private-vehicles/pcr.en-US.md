---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.towing-services-for-commercial-and-private-vehicles
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Towing services for commercial and private vehicles

## 1. Scope and Applicability

Cover towing distressed commercial/private vehicles and towing other vehicles, including removal for parking violations. Each dataset specifies the vehicle and incident class, origin/destination, actual towing/loading apparatus and mission extent. Breakdown recovery and parking-enforcement removal are separately qualified scenarios, not one undifferentiated average. [Source: `un-cpc3-67440`]

Include actual dispatch/preparation, attributable approach, on-scene setup/winching/loading, tow or recovery transport, unloading and custody handoff, plus the attributable empty/repositioning and cleanup share. Flatbed, wheel-lift, dolly and other actual configurations require their own records and qualifiers. The DVSA guide supports equipment diversity only; it is not adopted as a universal operating or legal permission.

Exclude ordinary vehicle freight unconnected to towing/recovery, roadside repair without towing, subsequent repair, scrapping, vehicle sale and impound/storage after handoff. The customer vehicle remains the object of the service: its original manufacture and routine running fuel are not new towing-service production. Record any actual recovery-caused spill, damage or incremental customer-engine activity separately with causality and responsibility, without assuming zero or full vehicle replacement.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.towing-services-for-commercial-and-private-vehicles |
| classification_refs | CPC 3.0 67440 |
| covered_products | Completed vehicle towing/recovery or other vehicle-removal task, including parking-violation removal, with explicit vehicle and method |
| excluded_products | Ordinary vehicle freight; standalone repair; subsequent storage, scrapping and vehicle manufacture |
| representative_product | One completed towing task for one identified vehicle between specified interfaces |
| production_route | Dispatch → approach → secure/load → tow/recover → unload/handoff; attributable repositioning and cleanup retained |
| market_state | Accepted vehicle-relocation service with recorded custody and operator scope |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete the declared towing transfer of one identified vehicle |
| How much | One completed task, with actual vehicle mass/class, method, loaded distance, approach/reposition distance and waiting extent |
| How well | Actual acceptance, custody handoff, vehicle condition and manufacturer-compatible recovery requirements; no assumed universal tow method or damage tolerance |
| How long or cycle | From dispatch acceptance through vehicle handoff, plus allocated actual repositioning/cleanup; waiting and unsuccessful attributable attempts remain included |
| reference_flow_link | `towing_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed vehicle towing task |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | task/vehicle identifier; breakdown/enforcement/other reason; commercial/private class; measured or traceable vehicle mass and load; powertrain/driven axles and condition; towing method; origin/destination and acceptance; approach/loaded/repositioning route distance; winch/loading and waiting hours; failed attempts; operator and subcontract boundary; equipment configuration; depot/cleanup share; observation period; electricity region/voltage |

item is the singular alias of verified Item(s), counting one accepted task for one identified vehicle. It is not a tonne-kilometre, towing-kilometre, fee, vehicle mass or a whole truck lifetime. Different vehicle/method/distance/incident scenarios remain separate. A multi-vehicle mission requires evidenced vehicle/task attribution; equal division and a free return leg are not defaults.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `completed_task` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count one cp_task accepted vehicle handoff once. Dispatch, hooking, towing and unloading within that task are stages, not four complete service outputs. |
| `phase_reconciliation` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Retain all actual loaded/empty distances and power-take-off/idling hours by phase. Mileage cannot replace measured fuel or imply zero scene energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified requested vehicle at stated location and condition, with actual towing configuration available |
| starting_condition_role | foreground_start |
| product_classification_scope | Qualified towing/recovery task including breakdown and parking-removal scenarios |
| recursive_input_rule | Subcontract towing stages enter as evidenced upstream services; prevent duplicate own-fleet fuel, distance and manufacturing shares for the same stage |
| upstream_dataset_requirement | Actual energy supply, consumables, configured vehicle/equipment production/retirement and waste treatment with component coverage |
| disclosure | Vehicle/incident/method; dispatch and delivery interfaces; mission phases; empty/repositioning allocation; failed tasks; recovery damage; depot and asset-life denominators |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_tow` | Include actual service stages and vehicle relocation for breakdown or other towing reasons. Keep customer vehicle manufacture/routine use and independent repair/storage outside; only actual attributable recovery activity enters. | un-cpc3-67440 |
| `boundary_configuration` | Declare the actual configured recovery equipment, including lifting/loading apparatus and winch where present. One method is not presumed suitable or energetically equivalent for every customer vehicle. | dvsa-recovery-equipment |
| `boundary_energy` | Record fuel by actual tow-vehicle/engine and activity, including idling and empty phases. Separate purchased electric energy and upstream energy supply from direct mobile combustion. | epa-mobile-combustion |
| `boundary_atomic` | Add every actual separately identified fuel, refrigerant, maintenance part, spill-cleanup material, waste and emission species omitted from the initial cards. Check depot dispatch/cleaning and asset burden coverage; absent equipment needs recorded applicability. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| towing | Dispatch, recover/tow and hand off identified vehicle | required | Actual incident, configured equipment and conditional rows | foreground_production | per reference flow |

### Process: Dispatch, recover/tow and hand off identified vehicle (`towing`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Actual diesel burned by the towing vehicle and its engine-driven lifting system; retain loaded, empty, idling and power-take-off phases without counting the same engine fuel twice.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Petrol (`petrol`)

Conditional on actual petrol-powered towing/support equipment attributable to this mission; keep distinct from customer vehicle routine fuel.

- Selected flow: Petrol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Low-voltage alternating current electricity (`electricity`)

Conditional on actual electric tow-truck charging, electric winch and depot/dispatch electricity; record supply region/voltage and measured charger losses. Avoid duplicate battery-side and grid-side electricity.

- Selected flow: Low-voltage alternating current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Hydraulic lubricating oil (`hydraulic_oil`)

Actual hydraulic make-up/replacement allocated to the identified lifting/winch equipment; distinguish stored stock, consumed additions and drained oil.

- Selected flow: Hydraulic lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Engine lubricating oil (`engine_oil`)

Conditional on combustion towing vehicle maintenance; use actual oil service quantities and supported mission-share attribution.

- Selected flow: Engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Tap water (`water`)

Actual attributable towing-equipment cleaning water, not an assumed customer-car washing service. Record meter/collection basis.

- Selected flow: Tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Steel winch wire rope (`wire_rope`)

Conditional on actual steel rope; record rope grade, replacement mass and reuse/life utilization. Do not charge a new rope to every mission or duplicate rope already in full equipment manufacture.

- Selected flow: Steel winch wire rope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Polyester vehicle-securing strap (`strap`)

Actual strap manufacture/replacement share with reuse records; distinguish vehicle tie-down from customer freight packaging.

- Selected flow: Polyester vehicle-securing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Truck tyre (`tyre`)

Actual towing-vehicle replacement tyre share, with measured tyre quantity/mass and supported use life; avoid duplicating initial tyres in the vehicle manufacturing dataset.

- Selected flow: Truck tyre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Vehicle recovery truck (`tow_truck`)

Manufacture/retirement share of the actual configured recovery truck. Declare flatbed, wheel-lift or other actual apparatus, powertrain and upstream component scope.

- Selected flow: Vehicle recovery truck
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Vehicle-recovery winch (`winch`)

Conditional on a separately modelled actual winch; manufacturing share only if not already included in complete recovery-truck inventory. Operation energy is recorded in energy rows once.

- Selected flow: Vehicle-recovery winch
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

#### Outputs

##### Product flows

###### Completed vehicle towing task (`towing_output`)

Accepted handoff of one identified vehicle at the declared destination; retain its entire attributable mission input, without treating the customer vehicle itself as newly manufactured output.

- Selected flow: Completed vehicle towing task
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_task`
- Sources:

##### Waste flows

###### Waste hydraulic oil (`waste_hydraulic`)

Actual segregated drained hydraulic oil with contamination and treatment destination; oil still in equipment is not waste output.

- Selected flow: Waste hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Waste engine lubricating oil (`waste_engine_oil`)

Actual segregated engine-maintenance waste oil; distinguish hydraulic oil and service-provider included disposal.

- Selected flow: Waste engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded steel winch wire rope (`waste_rope`)

Actual retired steel rope mass and treatment; no default recycling credit.

- Selected flow: Discarded steel winch wire rope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded truck tyre (`waste_tyre`)

Actual replacement tyre sent to documented treatment; distinguish retreading and material loss during use.

- Selected flow: Discarded truck tyre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Towing-equipment washing wastewater (`wastewater`)

Actual collected washing effluent with contamination and treatment; spill cleanup streams require their own specific identities.

- Selected flow: Towing-equipment washing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Actual tow-truck/support-engine fossil combustion from fuel-specific measured carbon basis or documented factor; upstream fuel production stays separate.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-mobile-combustion`

###### Methane, fossil, to air (`methane`)

Conditional on measured or supported specific-engine combustion methane; keep fuel origin, engine/control and activity explicit, not an assumed fraction of CO2.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-mobile-combustion`

###### Dinitrogen monoxide, to air (`nitrous_oxide`)

Actual supported engine N2O, with fuel, technology and model year or test record; do not treat it as nitrogen dioxide.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-mobile-combustion`

###### Nitrogen dioxide, to air (`nitrogen_dioxide`)

Conditional on actual measured/modelled NO2; total NOx requires evidenced speciation before it can use this identity.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Particulate matter below 2.5 micrometres, to air (`pm25`)

Actual supported PM2.5, with source and particle-size cutoff. Distinguish exhaust, tyre and brake wear and avoid overlapping aggregate particle totals.

- Selected flow: Particulate matter below 2.5 micrometres, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_mission` | Directly attribute task fuel/charging and scene operation first. Shared legs require actual route/time/load evidence; allocate approach and post-delivery repositioning consistently, without assuming every task returns to base. |  |
| `allocate_failures` | Retain task-attributable waiting, cancelled attempts and rework in matched comparable mission totals, and divide by accepted completed tasks. Zero completed output cannot support a fabricated per-task intensity. |  |
| `allocate_assets` | Allocate actual configured truck, winch and maintenance manufacture/retirement by documented use over supported lifetime use; reconcile initial/replacement components and cumulative shares capped at one life. No assumed truck mass, lifetime kilometres or winch capacity. |  |
| `allocate_custody` | Customer vehicles are service objects, not co-products or newly produced vehicles. Allocate actual recovery-caused damage/spill treatment transparently and keep subsequent repair/storage/scrapping in separate linked scopes. No avoided-damage or recycling credit by default. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | towing | towing_output | mission_record | task/vehicle ID; incident; vehicle mass/class/powertrain; method; origin/destination; dispatch/approach/load/tow/unload/handoff; empty/reposition distance; waiting; failed attempts; acceptance | Reconcile GPS/odometer, dispatch log, scene records and signed handoff by unique task; keep loaded and empty phases and caller cancellation distinct. | item | each mission | full task and matched support period | one declared vehicle/incident/method scenario | per reference flow | dispatch/GPS; handoff; vehicle evidence |
| cp_energy | towing | diesel; petrol; electricity; water | meter_record | row; vehicle/engine; fuel stock; measured fuel; charger readings; phase distance/hours; idling/PTO; depot task share; density/conditions | Use actual vehicle fuel/charging and water records with stock reconciliation; separate drive and PTO energy only when meters support the split. Volume conversion needs fuel-specific evidence. | row unit | each task and fuel/charging period | same period as cp_task | actual towing fleet and support | per reference flow | meters; fuel/charger ledger; phase log |
| cp_materials | towing | hydraulic_oil; engine_oil; wire_rope; strap; tyre | maintenance_record | specific material/part; issued/returned mass; replacement; reuse/life use; configuration; task share | Weigh actual maintenance/material quantities and document supported utilization shares; reconcile initial components and outsourced service contents. | kg | maintenance event and period | same fleet period as tasks | identified towing equipment | per reference flow | work orders; stock; reuse ledger |
| cp_assets | towing | tow_truck; winch | asset_record | asset ID; configuration; powertrain; manufacture/component scope; actual use; supported lifetime use; previous shares; retirement | Reconcile asset register, upstream manufacture and odometer/hour ledger with supported lifetime denominator; separately identify embedded winch/rope components. | item | asset update and matched period | asset life plus task period | actual towing equipment only | per reference flow | register; component scope; denominator evidence |
| cp_waste | towing | waste_hydraulic; waste_engine_oil; waste_rope; waste_tyre; wastewater | waste_record | specific stream; mass; composition; contamination; origin; treatment; destination; date; task/fleet share | Measure segregated maintenance/cleaning streams and reconcile manifests; customer spills and tyres left on the vehicle are not automatically operator waste. | kg | each waste event | same period as maintenance/task share | attributable towing operations | per reference flow | weighing; manifests; responsibility |
| cp_emissions | towing | fossil_co2; methane; nitrous_oxide; nitrogen_dioxide; pm25 | emission_record | species; fuel/carbon origin; engine/technology/year; activity; phase; model/test; source factor; control; compartment | Use actual measurements or cited vehicle/engine-specific methods with matched fuel and phase records. Preserve each species, origin and receiving compartment; keep supply emissions separate. | kg | test and matched mission period | same period as cp_task | actual mobile/support sources | per reference flow | test/model source; fuel and phase records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_task_intensity` | all inventory rows | Reconcile complete attributable mission exchanges and consistent approach/repositioning/support shares; divide matched comparable totals by accepted completed tasks. Phases cannot be omitted because no customer is onboard. | cp_task; cp_energy; cp_materials; cp_waste | per reference flow |  |
| `calc_assets` | tow_truck; winch | Apply allocate_assets using actual utilization and supported lifetime denominator, then normalize attributable period shares on cp_task. Unproven life or component overlap remains a disclosed review gap. | cp_assets; cp_task | per reference flow |  |
| `calc_emission_species` | fossil_co2; methane; nitrous_oxide | Use measured species mass or a cited fuel-/technology-specific method with actual phase activity and documented control. Fuel-based CO2 and activity-based CH4/N2O must retain their own actual bases; no universal fuel economy, mileage-only idling proxy, NOx-to-NO2 shortcut or default impact factor. | cp_emissions; cp_energy; cp_task | species mass per reference flow | epa-mobile-combustion |
| `calc_other_pollutants` | nitrogen_dioxide; pm25 | Use pollutant-specific measurement or an independently cited equipment/technology method with actual activity; preserve NO2 speciation and PM2.5 size cutoff. The GHG mobile-combustion source does not establish these pollutant factors. | cp_emissions; cp_energy; cp_task | species mass per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_task | towing_output | Require vehicle, incident, method, distance and handoff identity; separate parking-removal and breakdown routes. Fees and vehicle mass alone cannot establish function. | cp_task |
| dq_phase | all inventory rows | Reconcile full empty/loaded/scene/waiting/cleanup and failed-attempt coverage; maintain actual configuration and matched periods across fuel, charging and support. | cp_task; cp_energy |
| dq_assets | tow_truck; winch | Require evidenced lifetime/utilization and initial/replacement scope, with sensitivity for uncertain denominators. | cp_assets |
| dq_identity | all inventory rows | Verify exact flow/property/unit and official Chinese name before adoption. Missing UUIDs remain individual gaps, never a pooled fuel/material label or proof of full validation. | Direct-read support and unresolved register |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_task` | Require one towing_output of 1 item linked to one accepted vehicle relocation with declared start/end and method. Reject tonne-km, fees or repair-only jobs as substitutes. | un-cpc3-67440 |
| `validate_phase_boundary` | Verify dispatch, empty approach, scene work, loaded towing, handoff and actual repositioning attribution, including waits/retries. Reconcile subcontract stages and customer/repair/storage boundaries without double counting. |  |
| `validate_atomicity` | Each actual fuel, utility, part, asset, waste and emitted species requires its own specific exchange and same reference denominator. Audit component overlap, life shares and identity/upstream gaps; a parser pass is not methodology publication approval. |  |
| `validate_unit_export` | Treat item only as the singular local alias of the formal Number of items unit Item(s). Export Item(s) with the same numerical count and the fully qualified service definition; changing the display token does not change the flow property, service extent or normalization denominator. Do not convert a service item to time, mass, distance or a different family by relabelling its unit, or normalize an already per-reference quantity again. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | vehicle_towing_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified towing/recovery task component in an identified incident, vehicle-operation or enforcement scenario |
| excluded_use | Universal tow factor independent of vehicle/method/distance; original customer vehicle manufacture; complete repair, storage or scrapping footprint |
| required_metadata | All task qualifiers; phase distances/times; mission/support/subcontract allocation; energy origin; actual asset/component scope; upstream identities |
| required_quality_disclosure | Failed task and repositioning coverage; vehicle-mass/phase uncertainty; emissions method; life denominator; missing UUIDs/upstream inventory; damage and responsibility limits |
| update_trigger | Changed incident/vehicle class, route, towing apparatus, powertrain, fleet operation, contract boundary, maintenance or lifetime evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-67440 | official_guidance | UNSD CPC Version 3.0 subclass 67440 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67440 | Breakdown and other vehicle towing including parking-removal scope |
| dvsa-recovery-equipment | official_guidance | UK DVSA, Running a vehicle recovery business: driver and vehicle safety rules, updated 12 August 2025, section 2.1 physical construction. https://www.gov.uk/government/publications/guide-for-recovery-operations/running-a-vehicle-recovery-business-driver-and-vehicle-safety-rules | Equipment diversity and declared recovery configuration; UK context only, no universal legal or towing-method approval |
| epa-mobile-combustion | official_guidance | US EPA, Direct Emissions from Mobile Combustion Source, December 2023, Activity Data and mobile-combustion species. https://www.epa.gov/sites/default/files/2020-12/documents/mobileemissions.pdf | Fuel/activity and individual CO2, CH4, N2O accounting; excludes upstream supply/electricity methods, no default factor adopted; not full-LCA standard |
