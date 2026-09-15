---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43211-and-43219-parts-of-reaction-engines-other-than-76da9d5c
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Parts for hydraulic or pneumatic power engines and motors, and for reaction engines other than turbo-jets

## 1. Scope and Applicability

This PCR covers cradle-to-factory-gate foreground data production for separately supplied, newly manufactured parts of linear-acting hydraulic or pneumatic power engines and motors, other hydraulic or pneumatic power engines and motors, and reaction engines other than turbo-jets. The composite boundary follows the official CPC 3.0 identity while requiring every data package to declare the actual part family, part number or drawing revision, material, precursor state, manufacturing route, and surface condition.

It covers the reporting facility's machining and any directly controlled heat treatment, aqueous cleaning, surface treatment, assembly, and inspection applied to the declared part. It excludes complete engines and motors; turbo-jets, turbo-propellers, and their parts; unrelated pumps, compressors, valves, and parts; repair, overhaul, and remanufacture; capital equipment; product use, maintenance, and end-of-life; and outbound distribution beyond the factory gate. Upstream production of purchased preforms, chemicals, fuels, electricity, and water is represented by linked upstream datasets rather than duplicated in the foreground inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43211-and-43219-parts-of-reaction-engines-other-than-76da9d5c |
| classification_refs | CPC 3.0: 43251, Parts for the goods of subclasses 43211 and 43219; parts of reaction engines other than turbo-jets (exact classification context; currently unmapped) |
| covered_products | Separately supplied finished parts for linear-acting hydraulic or pneumatic cylinders; separately supplied finished parts for other hydraulic or pneumatic power engines and motors; separately supplied finished parts for reaction engines other than turbo-jets |
| excluded_products | Complete engines or motors; turbo-jet and turbo-propeller parts; pumps, compressors, valves, or unrelated machinery parts; repaired, overhauled, or remanufactured parts; tooling; production equipment; packaging not integral to the saleable part |
| representative_product | A conforming, machined and finished load-bearing or pressure-containing engine or motor part supplied as a new replacement or original-equipment component |
| production_route | Receipt of a declared material-specific forged or cast preform; precision machining; route-dependent heat treatment and aqueous cleaning or surface treatment; final inspection and release |
| market_state | New, finished, inspected part at the reporting facility factory gate, with preservation coating only when part of the declared saleable state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A separately supplied part that meets the declared drawing, material, dimensional, surface-condition, and acceptance requirements for the identified hydraulic or pneumatic engine or motor, or non-turbojet reaction engine |
| How much | 1 kg net mass of conforming finished part |
| How well | Released by the reporting facility against the declared drawing revision and applicable inspection or test plan; rejected parts and removable packaging are excluded from conforming output mass |
| How long or cycle | One production lot through factory-gate release; service life and use cycles are outside this cradle-to-gate PCR |
| reference_flow_link | The reference flow is the measured net mass of conforming finished parts represented by `out_finished_part` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished CPC 43251 engine or motor part |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part family and intended host equipment; part number and drawing revision; material specification and alloy grade; incoming precursor form; manufacturing and heat-treatment route; surface treatment and preservation state; inspection or test acceptance basis; production site and geography; production period; new-production factory-gate state |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A dataset that omits any required qualifier has an incomplete reference-flow definition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | conforming finished part and all mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh conforming finished parts without removable packaging and normalize every inventory amount to 1 kg of that output. Preserve measured lot totals and the normalization calculation. |
| `material_mass_balance` | precursor inputs, conforming output, metal scrap, and stock change | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use one dry or as-received mass basis consistently within each declared material stream. Record retained work in progress and inventory change separately before checking the lot mass balance. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered electrical-energy quantity. When the source meter reports kWh, convert using 1 kWh = 3.6 MJ and retain the original meter value. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas at the supplier's declared reference temperature and pressure; disclose those reference conditions and any conversion from meter conditions. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | reporting-facility manufacturing | Include directly controlled receipt, machining, route-dependent heat treatment, aqueous cleaning or surface treatment, assembly, inspection, rework within the lot, and waste handling through the point each exchange leaves the foreground boundary. | `eu-jrc-sf-bref-2024`; `eu-jrc-stm-bref-2006`; `us-epa-aerospace-neshap-2015` |
| `boundary_upstream_links` | purchased inputs | Keep every purchased preform, electricity, fuel, water, and chemical as a visible product input linked to an upstream dataset whose geography, technology, product state, and delivery boundary are disclosed. |  |
| `boundary_route_conditions` | conditional operations | Include natural gas only when directly fired heat treatment occurs, and include process water, sodium hydroxide, cleaning wastewater, and waste alkaline liquor only when the declared aqueous alkaline-cleaning route uses or generates those atomic exchanges. | `eu-jrc-sf-bref-2024`; `eu-jrc-stm-bref-2006` |
| `boundary_exclusions` | outside-scope life-cycle stages | Exclude capital equipment, tooling production, building infrastructure, employee travel, use, maintenance, repair, overhaul, remanufacture, end-of-life, and distribution beyond the reporting facility gate unless the study goal explicitly expands the boundary and reports that expansion separately. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Material-specific forged or cast preforms, purchased consumables, and purchased utilities received at the reporting-facility boundary in their declared supply states |
| starting_condition_role | The starting condition separates upstream preform and utility production from the directly controlled part-manufacturing foreground |
| product_classification_scope | Separately supplied new parts within the composite CPC 43251 identity; classification context does not make complete engines, turbojet or turboprop parts, or unrelated machinery parts part of this PCR |
| recursive_input_rule | If an input is itself a finished part within this PCR category, record it once as a visible purchased product input with its own upstream dataset; do not recursively reproduce its manufacturing inventory inside the receiving process |
| upstream_dataset_requirement | Link every purchased precursor, material, chemical, fuel, electricity, and water input to an upstream dataset matching the declared material or product state, geography, technology, and delivery boundary |
| disclosure | Disclose part family, drawing revision, alloy and material specification, precursor form, heat-treatment and surface-treatment route, internal rework, outsourced operations, site, production period, and all boundary deviations |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_part_manufacturing` | Integrated part machining, route-dependent finishing, inspection, and release | required | Applies to every foreground data package; route-conditional cards are recorded only when their stated material or operation applies | Foreground manufacturing from received preform to conforming finished part | 1 kg conforming finished part at factory gate |

### Process: Integrated part machining, route-dependent finishing, inspection, and release (`integrated_part_manufacturing`)

#### Inputs

##### Product flows

###### Low-alloy steel forged preform (`in_alloy_steel_forging`)

Record the separately purchased forged preform when the declared part is manufactured from low-alloy steel forging stock.

- Selected flow: Low-alloy steel forging
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass issued to the conforming production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources:

###### Aluminium-alloy casting preform (`in_aluminium_alloy_casting`)

Record the separately purchased casting preform when the declared part is manufactured from an aluminium-alloy casting.

- Selected flow: Aluminium-alloy casting preform
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass issued to the conforming production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources:

###### Nickel-alloy forged preform (`in_nickel_alloy_forging`)

Record the separately purchased forged preform when the declared reaction-engine part is manufactured from nickel-alloy forging stock.

- Selected flow: Nickel-alloy forging
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass issued to the conforming production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources:

###### Purchased electrical energy (`in_electricity`)

Record metered electricity used by machining equipment and attributable auxiliaries, heat-treatment or surface-treatment equipment, inspection, and directly controlled waste handling.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: measured electricity attributable to the production lot, including justified allocation of shared meters
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_consumable_records`
- Sources:

###### Cutting fluid supplied to machining (`in_cutting_fluid`)

Record the net fresh cutting-fluid product entering machining after deducting separately documented unopened returns; declare formulation, dilution, and recirculation state.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: measured net fresh cutting-fluid mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_consumable_records`
- Sources:

###### Natural gas for directly fired heat treatment (`in_natural_gas`)

Record this flow only when gaseous natural gas is combusted inside the foreground boundary for heating or heat treatment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: supplier-meter or calibrated submeter volume attributable to the production lot at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_consumable_records`
- Sources:

###### Process water for aqueous cleaning and rinsing (`in_process_water`)

Record process water only when it crosses the foreground boundary for aqueous cleaning, rinsing, bath make-up, or directly associated cleaning operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered water mass or volume converted using documented density and meter conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_bath_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Sodium hydroxide used in alkaline cleaning (`in_sodium_hydroxide`)

Record sodium hydroxide only when the declared cleaning route uses it; retain the product supply state and concentration rather than assuming pure dry chemical.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of sodium-hydroxide product charged to the cleaning bath, with supply concentration disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_bath_records`
- Sources: `eu-jrc-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished engine or motor part (`out_finished_part`)

Record only parts released against the declared drawing and acceptance plan; exclude rejects, work in progress, and removable packaging from the conforming output mass.

- Selected flow: Finished CPC 43251 engine or motor part
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of conforming finished parts released from the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_balance`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Low-alloy steel machining scrap (`out_low_alloy_steel_scrap`)

Record segregated low-alloy steel chips, offcuts, and rejected metal sent out as scrap when the low-alloy steel route applies.

- Selected flow: Low-alloy steel scrap `afedcccd-b9f3-4941-8ba4-d3135b8abb67`
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass plus justified closing stock change attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch_records`
- Sources:

###### Aluminium machining scrap (`out_aluminium_scrap`)

Record segregated aluminium chips, offcuts, and rejected metal sent out as scrap when the aluminium route applies.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass plus justified closing stock change attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch_records`
- Sources:

###### Nickel-alloy machining scrap (`out_nickel_alloy_scrap`)

Record segregated nickel-alloy chips, offcuts, and rejected metal sent out as scrap when the nickel-alloy route applies.

- Selected flow: Nickel-alloy machining scrap
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass plus justified closing stock change attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch_records`
- Sources:

###### Waste cutting oil from machining (`out_waste_cutting_oil`)

Record waste cutting oil only for an oil-based cutting-fluid route when the material leaves the foreground boundary for recovery or treatment.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to closed waste storage or an off-site recovery or treatment operator
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch_records`
- Sources: `us-epa-aerospace-neshap-2015`

###### Wastewater from aqueous cleaning (`out_cleaning_wastewater`)

Record cleaning rinse water leaving the process as wastewater separately from concentrated spent bath liquor.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass, or measured volume converted with documented density, crossing to treatment or sewer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_bath_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Waste alkaline liquor from bath replacement (`out_waste_alkaline_liquor`)

Record concentrated spent alkaline cleaning solution separately when a bath is partially or fully replaced and leaves the foreground process for treatment.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: measured spent-liquor mass removed from the bath and transferred to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_bath_records`
- Sources: `eu-jrc-stm-bref-2006`

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas combustion (`out_fossil_co2`)

Record only direct foreground fossil carbon dioxide attributable to natural-gas combustion; do not add upstream electricity or fuel-supply emissions to this elementary-flow row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate from attributable natural-gas consumption and documented fuel carbon content, oxidation fraction, and carbon-to-carbon-dioxide mass conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished part at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_and_consumable_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | mixed part families, alloys, routes, or production lots | Subdivide production by part family, alloy, route, machine cell, or lot and use direct meters, issue records, and time records before allocating shared burdens. |  |
| `allocation_shared_operations` | inseparable shared electricity, fuel, consumables, or waste | When subdivision or direct measurement is not feasible, allocate the shared exchange using the measured causal driver, in descending preference: machine or furnace time adjusted for rated load, treated surface area for surface operations, or conforming product mass. Record the driver and calculation. |  |
| `allocation_scrap_and_recycling` | metal scrap and recovered cutting oil | Report waste outputs at the foreground boundary without avoided-burden credit. If a downstream study models recycling or recovery benefits, keep that modelling outside this foreground process and disclose the method. |  |
| `allocation_rework` | internal rework before factory-gate release | Keep rework inputs and wastes in the originating lot. Do not create additional conforming product output for the same physical part. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `integrated_part_manufacturing` | precursor input, conforming output, work in progress, and stock change | weighbridge, scale, material-issue, routing, and release records | material identity; alloy; precursor mass; finished mass; reject mass; opening and closing stock; lot id; timestamp | calibrated weighing and production-record reconciliation | kg | each production lot | complete declared reporting period | all in-scope cells and outsourced steps reconciled to the reporting lot | sum accepted records by material and lot, reconcile stock change, then divide by conforming finished mass | calibration status; lot traceability; release record; reconciliation sign-off |
| `cp_utility_and_consumable_records` | `integrated_part_manufacturing` | electricity, natural gas, cutting fluid, and direct fossil carbon dioxide | submeters, supplier meters, issue and return records, and fuel-quality records | meter start and end; meter unit; allocation driver; fluid issue and return; gas reference conditions; carbon content; oxidation fraction; timestamp | calibrated meter reading and controlled-stores reconciliation | MJ; m3; kg | each lot or shift, aggregated monthly at most | complete declared reporting period | every in-scope cell, furnace, and attributable auxiliary | subtract verified returns and opening/closing stocks, allocate only shared meters by the declared causal driver, then normalize | meter calibration; supplier statement; issue voucher; allocation worksheet |
| `cp_cleaning_bath_records` | `integrated_part_manufacturing` | process water, sodium hydroxide, cleaning wastewater, and waste alkaline liquor | water meter, batch-make-up sheet, bath analysis, discharge meter, and waste-transfer record | water quantity; chemical product mass and concentration; bath volume; bath replacement; wastewater quantity; density; destination; lot id; timestamp | meter reading, controlled chemical issue, bath log, and waste-transfer measurement | kg; m3 | each make-up, discharge, or bath change | complete declared reporting period | all in-scope aqueous-cleaning lines | distinguish rinse wastewater from spent bath liquor, reconcile make-up and discharge, then normalize | meter calibration; chemical certificate; bath log; transfer manifest |
| `cp_waste_dispatch_records` | `integrated_part_manufacturing` | segregated metal scrap and waste cutting oil | container weights, stock records, and transfer manifests | waste identity; material grade; gross and tare mass; stock change; contamination; destination; lot allocation; timestamp | calibrated weighing and manifest reconciliation | kg | each container or dispatch | complete declared reporting period | all in-scope waste storage and dispatch points | subtract tare, include documented stock change, allocate only mixed-lot containers by measured contents or traceable lot records | scale calibration; photographs or composition record; signed transfer manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = accepted lot amount / net mass of conforming finished parts released from that lot | accepted exchange amount; conforming finished-part mass | exchange amount per 1 kg conforming finished part |  |
| `calc_material_reconciliation` | each declared alloy route | precursor input + opening work in progress - closing work in progress = conforming finished part + segregated scrap + other recorded material outputs + explained mass difference | precursor, product, scrap, other material outputs, and stock-change masses | lot mass-balance residual and reconciliation status |  |
| `calc_fossil_co2` | direct natural-gas combustion | direct fossil CO2 mass = attributable fuel carbon mass × oxidation fraction × 44/12; derive fuel carbon mass from measured gas and the documented supplier composition or carbon factor | natural-gas quantity; reference conditions; supplier carbon content or factor; oxidation fraction | kg direct fossil carbon dioxide |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | reference product and material inputs | Trace every reported lot to the part family, part or drawing number, revision, alloy specification, precursor form, route, and acceptance record. | routing and release records; material certificate; supplier record |
| `dq_temporal_completeness` | all foreground exchanges | Cover the full declared reporting period and account for shutdown, start-up, rework, and stock changes that affect in-scope production. | meter completeness check; production calendar; stock reconciliation |
| `dq_measurement_quality` | meters and scales | Use calibrated or verified equipment and retain unit, reference conditions, calibration status, and any conversion factors. | calibration certificate; meter specification; conversion worksheet |
| `dq_route_specificity` | conditional inventory rows | Mark every conditional row applicable or not applicable for the declared route and retain evidence for that decision. | process routing; work instruction; bath or furnace log |
| `dq_outsourced_operations` | outsourced heat or surface treatment | Keep the outsourced product flow visible, document whether its burdens are in a supplier dataset, and prevent double counting with on-site rows. | purchase order; supplier process declaration; boundary reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | product category and reference flow | Reject a data package that does not identify the part family, drawing revision, material specification, precursor form, manufacturing route, surface state, site, period, and factory-gate condition. | `un-cpc-3-0-structure-2025` |
| `validation_reference_mass` | normalization | Confirm that every reported amount is normalized to 1 kg net mass of conforming finished part and that removable packaging, rejects, and work in progress are not counted as reference output. |  |
| `validation_atomic_routes` | conditional inventory | Confirm that each applicable material, utility, chemical, waste, and elementary exchange is reported as its own atomic row; no combined utility, material, waste, or emissions category may substitute for a row. |  |
| `validation_mass_balance` | material flows | Reconcile each material-specific precursor input against conforming product, material-specific scrap, other material outputs, and stock change; investigate and disclose an unexplained residual. |  |
| `validation_energy_and_emissions` | natural gas and direct fossil carbon dioxide | When natural gas is reported, require its reference conditions and either a corresponding direct fossil carbon-dioxide calculation or an explicit documented reason the combustion occurs outside the foreground boundary. |  |
| `validation_cleaning_streams` | aqueous cleaning | When alkaline cleaning applies, distinguish process water, sodium-hydroxide product, cleaning wastewater, and spent alkaline liquor and prevent double counting between rinse water and bath replacement. | `eu-jrc-stm-bref-2006` |
| `validation_evidence_gaps` | candidate methodology use | Treat missing exact UUIDs and missing independent range evidence as disclosed candidate-methodology limitations; do not silently substitute proxy flows or invented numeric ranges. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for a declared finished engine or motor part |
| downstream_use | Secondary or background cradle-to-gate datasets for machinery, aerospace, hydraulic, pneumatic, and reaction-engine product systems after scope compatibility is confirmed |
| allowed_use | Part-specific cradle-to-gate modelling where product identity, material, route, geography, technology, time period, and factory-gate state match the consuming model |
| excluded_use | Direct representation of complete engines or motors, turbo-jet or turbo-propeller parts, repair or overhaul, generic metal products without part qualifiers, use-stage performance, maintenance, end-of-life, or an externally inferred benchmark range |
| required_metadata | canonical PCR id; part family; part number and drawing revision; host equipment; material and alloy; precursor state; machining, heat-treatment, cleaning and surface-treatment route; site and geography; production period; reference conditions; allocation drivers; outsourced-operation boundary; UUID gaps |
| required_quality_disclosure | metering and scale coverage; calibration; lot and material traceability; mass-balance residual; conditional-row applicability; rework; stock change; waste destinations; supplier-data representativeness; unresolved UUID and range-evidence needs |
| update_trigger | Change in part family, design revision, material or precursor state, manufacturing route, heat or surface treatment, site, energy supply, allocation driver, outsourced boundary, or evidence sufficient to resolve UUID or range gaps |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43251 product identity and hierarchy only; not quantitative methodology |
| `eu-jrc-sf-bref-2024` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, 2024, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry (retrieved 2026-09-05) | Process decomposition for forged or cast preforms, heating, machining, finishing, and heat treatment |
| `eu-jrc-stm-bref-2006` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Surface Treatment of Metals and Plastics BREF, adopted August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-05) | Conditional aqueous cleaning and surface-treatment boundary; separation of process water, alkaline chemistry, rinse wastewater, and spent alkaline solution |
| `us-epa-aerospace-neshap-2015` | Standard (`standard`) | United States Environmental Protection Agency, Aerospace Manufacturing and Rework Facilities NESHAP final rule, Federal Register 80 FR 76152, 7 December 2015, https://www.govinfo.gov/content/pkg/FR-2015-12-07/pdf/2015-30356.pdf (retrieved 2026-09-05) | Reaction-engine-part relevance of cleaning, coating, chemical milling, blasting, and controlled handling of spent solvent or coating wastes |
