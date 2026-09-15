---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tube-or-pipe-fittings-of-steel-other-than-cast-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tube or pipe fittings, of steel other than cast-steel

## 1. Scope and Applicability

This PCR applies to finished wrought or otherwise non-cast steel fittings used to join, branch, reduce, redirect, close, or terminate tube and pipe runs. Covered products include butt-welding elbows, bends, tees, reducers, caps and ends; threaded or socket-welding fittings; and steel flanges when they meet the declared product-category boundary. Carbon, low-alloy, alloy, and stainless steel grades are included when the fitting is not produced as a cast-steel fitting.

Cast-iron fittings, cast-steel fittings, unconverted tubes or pipes, valves, installation services, use, maintenance, and end-of-life are excluded. The foreground gate begins with purchased steel tube, pipe, billet, and other separately identified production inputs received at the fitting plant and ends with unpackaged conforming fittings at the factory gate. Packaging may be added only by a separately declared downstream packaging process and is not part of this reference product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tube-or-pipe-fittings-of-steel-other-than-cast-steel |
| classification_refs | CPC 3.0: 41293, exact mapping context |
| covered_products | Non-cast steel elbows, bends, tees, reducers, caps, ends, threaded fittings, socket-welding fittings, butt-welding fittings, and flanges for tube or pipe systems |
| excluded_products | Cast-iron or cast-steel fittings; tubes and pipes sold without conversion to fittings; valves; installation services; packaging unless separately declared |
| representative_product | A finished steel butt-welding elbow, tee, reducer, cap, end, or comparable fitting conforming to the declared specification |
| production_route | Cutting and preparation followed by pipe forming, hot forming, forging, welding, machining, heat treatment, cleaning, pickling, galvanizing, and finishing as applicable to the declared fitting |
| market_state | Finished, inspected, unpackaged fitting at the factory gate; steel grade, dimensions, connection type, heat-treatment state, and coating state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished non-cast steel fitting that joins, branches, reduces, redirects, closes, or terminates a declared tube or pipe run |
| How much | 1 kg of conforming finished fitting at the factory gate |
| How well | Meets the declared fitting geometry, connection type, steel grade, dimensions, tolerances, heat-treatment state, surface condition, and applicable quality specification |
| How long or cycle | One factory-gate production reporting period; service life and use are not modelled |
| reference_flow_link | 1 kg of conforming finished fitting output equals 1 kg of the reference product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tube or pipe fittings, of steel other than cast-steel `927f577f-735f-45ce-915c-5cac28802501` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fitting type and connection type; nominal size and wall thickness or schedule; steel grade and material specification; pipe-forming, forging, or welded-fabrication route; heat-treatment state; surface and coating state; conformance standard; plant geography; reporting period; upstream steel dataset identity; scrap and spent-acid destination |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and steel-bearing material balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh conforming, unpackaged finished fittings after final inspection; exclude rejected fittings, removable transport fixtures, and packaging. |
| `gas_reference_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record the meter reference temperature and pressure and convert all reported gas volumes to one declared reference condition before aggregation. |
| `electricity_energy_basis` | purchased electricity | Energy | kWh | Preserve metered electricity in kWh; if source records use MJ, apply 1 kWh = 3.6 MJ and retain the original record and conversion. |
| `solution_mass_basis` | sodium hydroxide and hydrochloric acid solutions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered solution mass and concentration separately; do not mix solution mass with dry active-substance mass. The selected hydrochloric-acid row represents 30% delivered solution. |
| `mass_normalization` | all mass-based inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg reference product | Normalize reporting-period totals by conforming finished fitting mass from the same plant, route, and reporting period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel tube, pipe, or billet and separately identified auxiliary inputs received at the fitting plant |
| starting_condition_role | Foreground conversion gate; purchased-input production remains represented by linked upstream datasets |
| product_classification_scope | Finished non-cast steel tube or pipe fittings; cast-iron and cast-steel fittings are outside scope |
| recursive_input_rule | If a purchased input is itself a fitting in this PCR category, record it as a separate product input with its upstream dataset and do not recursively expand its fitting manufacture inside the same foreground process |
| upstream_dataset_requirement | Link each purchased steel form, electricity supply, fuel, gas, water, chemical, and zinc input to a geographically and technologically representative upstream dataset; disclose substitutions and missing datasets |
| disclosure | Declare steel form and grade, fitting type, route, heat treatment, joining operations, pickling and galvanizing applicability, reference conditions for gas, factory geography, reporting period, and waste destinations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_conversion_operations` | on-site fitting manufacture | Include on-site cutting, heating and metal treatment, pipe forming or forging, welding, machining, cooling and finishing, heat treatment, cleaning, inspection, and testing when those operations occur. | `eu-jrc-sf-bref-2024` |
| `boundary_surface_treatment` | on-site pickling or galvanizing | Include on-site degreasing, pickling, fluxing, hot-dip galvanizing, rinsing, and finishing only when performed for the declared product route; otherwise mark every related atomic flow not applicable. | `eu-jrc-fmp-bref-2022` |
| `boundary_upstream_inputs` | purchased inputs | Keep production of purchased steel and auxiliary inputs outside the foreground conversion gate but connect each input to an upstream dataset. | `eu-jrc-fmp-bref-2022` |
| `boundary_category_exclusions` | product identity | Exclude cast-iron and cast-steel fittings and unconverted tube or pipe products from the reference product. | `unsd-cpc-3-0-structure-2025` |
| `boundary_downstream` | downstream life cycle | Exclude distribution packaging, installation, use, maintenance, and end-of-life unless a study explicitly adds separate downstream processes. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `steel_fitting_manufacture` | Integrated manufacture of non-cast steel tube or pipe fittings | required | Required for every covered product; individual input and output cards state route conditions | Foreground conversion from purchased steel form to conforming finished fitting | 1 kg conforming finished fitting at factory gate |

### Process: Integrated manufacture of non-cast steel tube or pipe fittings (`steel_fitting_manufacture`)

#### Inputs

##### Product flows

###### Welded circular steel pipe feedstock (`input_welded_steel_pipe`)

Record this input only when a fitting is formed or fabricated from purchased welded circular pipe stock. Match grade, diameter, wall thickness, coating state, and supplier dataset to the declared fitting.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of welded circular steel pipe entering fitting manufacture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_feedstock`
- Sources:

###### Seamless circular steel tube feedstock (`input_seamless_steel_tube`)

Record this concrete flow only for a route that forms the fitting from purchased circular seamless steel tube. Its exact Tiangong UUID remains unresolved; do not substitute oil-and-gas line pipe, casing, non-circular tube, or welded pipe.

- Selected flow: Circular seamless steel tube feedstock
- Flow property / unit: Mass / kg
- Amount rule: measured mass of circular seamless steel tube entering fitting manufacture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_feedstock`
- Sources:

###### Non-alloy steel billet feedstock (`input_nonalloy_steel_billet`)

Record this input only for a forged or hot-formed non-alloy steel fitting route that begins with purchased billet.

- Selected flow: Billet `7de70586-42d8-40bb-a687-e0e0c05722e4`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of non-alloy steel billet entering the forging or hot-forming route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_feedstock`
- Sources:

###### Alloy steel billet feedstock (`input_alloy_steel_billet`)

Record this concrete flow only for a forged or hot-formed alloy-steel fitting route that begins with purchased billet. Its exact Tiangong UUID remains unresolved; an alloy-steel ingot is not a billet proxy.

- Selected flow: Alloy steel billet
- Flow property / unit: Mass / kg
- Amount rule: measured mass of alloy steel billet entering the forging or hot-forming route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_feedstock`
- Sources:

###### Purchased medium-voltage electricity (`input_electricity`)

Record metered electricity consumed by cutting, forming, welding, machining, heat treatment, pumps, ventilation, surface treatment, and finishing. The supply voltage, grid geography, supplier mix, and delivery boundary must be declared.

- Selected flow: Medium-voltage electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered purchased medium-voltage electricity consumed by the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources:

###### Gaseous natural gas (`input_natural_gas`)

Record this flow only when natural gas is combusted on site for heating, hot forming, heat treatment, or drying. State the meter reference conditions and exclude upstream supply-chain emissions from the direct-emission row.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered gaseous natural gas delivered to the fitting-manufacture process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources:

###### Industrial oxygen (`input_industrial_oxygen`)

Record this flow only for oxy-fuel cutting, heating, or another declared operation that consumes supplied industrial oxygen. Declare purity, pressure, volume reference conditions, and whether supply is delivered or generated on site.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered or supplier-recorded industrial oxygen consumed by the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources:

###### Process water (`input_process_water`)

Record process water entering cooling, cleaning, rinsing, pickling-bath make-up, or galvanizing-related operations. Cooling water recirculated entirely within the plant is not counted again; only net make-up crossing the boundary is recorded.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net process-water input crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources:

###### Sodium hydroxide solution (`input_sodium_hydroxide`)

Record this flow only when sodium hydroxide solution is used for alkaline degreasing or cleaning. Report delivered solution mass and concentration separately.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered mass of sodium hydroxide solution consumed by on-site cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_chemicals`
- Sources:

###### Hydrochloric acid solution at 30% (`input_hydrochloric_acid_30pct`)

Record this flow only when purchased 30% hydrochloric acid solution is used for on-site pickling. Other delivered concentrations require a distinct concentration-specific flow identity or a reviewed mass-of-solution conversion.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass / kg
- Amount rule: measured delivered mass of 30% hydrochloric acid solution consumed by pickling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_chemicals`
- Sources:

###### Special high grade zinc metal (`input_zinc_metal`)

Record this flow only when special-high-grade zinc metal is added to an on-site hot-dip galvanizing bath. Record total supplied metal mass, not zinc-content mass from an ore or concentrate flow.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of special-high-grade zinc metal charged to the galvanizing bath and attributable to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_chemicals`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished steel fitting (`output_reference_product`)

Record only finished fittings that pass the declared dimensional, material, heat-treatment, surface, and quality checks. Rejected fittings are not part of this output.

- Selected flow: Tube or pipe fittings, of steel other than cast-steel `927f577f-735f-45ce-915c-5cac28802501`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of conforming unpackaged finished fittings at the factory gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `bsi-bs-en-10253-2-2021-a1-2025`

##### Waste flows

###### Post-industrial steel scrap (`output_postindustrial_steel_scrap`)

Record separately collected steel offcuts, machining chips, forging flash, and rejected steel generated by the plant. Keep alloy grades and contaminated scrap separate in the underlying records and declare the receiving treatment route.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of post-industrial steel scrap leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

###### Spent hydrochloric-acid pickling liquor (`output_spent_pickling_acid`)

Record this concrete waste only when a hydrochloric-acid pickling bath is removed from service and crosses the plant boundary. Record its mass, acid concentration, dissolved-metal content, and treatment destination; the exact Tiangong waste UUID remains unresolved.

- Selected flow: Spent hydrochloric-acid steel pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: measured mass of spent hydrochloric-acid pickling liquor dispatched off site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished fitting produced over the bath service period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide (`output_fossil_carbon_dioxide`)

Record only direct fossil carbon dioxide emitted by on-site combustion assigned to fitting manufacture. Do not include upstream electricity, natural-gas supply, or purchased-material emissions in this elementary-flow row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or independently verified site record of direct fossil carbon dioxide assigned to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished fitting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | separately metered routes, lines, or batches | Subdivide fitting routes, lines, and batches and assign their directly measured steel, energy, chemical, water, waste, and emission records before applying allocation. |  |
| `allocation_shared_operations` | shared operations producing several fitting products | If subdivision is not practicable, use a documented physical driver that reflects consumption, such as machine time, furnace load, metered energy, or processed mass; use mass allocation only when no more representative measured driver exists. |  |
| `allocation_scrap` | post-industrial steel scrap | Treat steel scrap leaving the process as a waste flow at the foreground boundary; do not apply an avoided-production credit inside this process. A downstream recycling model may represent subsequent treatment separately. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steel_feedstock` | `steel_fitting_manufacture` | each declared steel feedstock card | receiving scale, purchase, and production issue records | material identity; heat or lot; steel grade; product form; dimensions; received mass; issued mass; supplier dataset | reconcile calibrated scale tickets and material issues to production lots | kg | per receipt and production lot | complete reporting period | all lines producing the declared fitting | sum only the applicable steel-form row and normalize by conforming output mass | scale calibration; heat certificates; purchase documents; lot reconciliation |
| `cp_energy_metering` | `steel_fitting_manufacture` | purchased electricity and natural gas | utility meters and invoices | meter id; opening and closing readings; unit; reference conditions for gas; allocation driver; downtime | read dedicated meters or allocate a reconciled plant meter with a documented physical driver | kWh; m3 | continuous or at least monthly | complete reporting period | all included equipment and shared utilities | subtract verified non-production use and normalize to conforming output mass | meter calibration; invoices; reconciliation; allocation worksheet |
| `cp_process_gases` | `steel_fitting_manufacture` | industrial oxygen | flow meter, cylinder, or tank delivery records | gas identity; purity; pressure; reference temperature; reference pressure; delivered and closing inventory | reconcile meters or deliveries and stock change to consumed gas | m3 | per delivery and reporting period | complete reporting period | oxy-fuel operations for the declared route | consumed volume equals deliveries plus opening stock minus closing stock, converted to declared conditions | supplier certificate; meter calibration; stock reconciliation |
| `cp_process_water` | `steel_fitting_manufacture` | process water | water meter and make-up records | meter readings; source; treatment; recirculation; make-up volume or mass; discharge linkage | meter net make-up crossing the process boundary | kg | continuous or at least monthly | complete reporting period | cooling, cleaning, rinsing, pickling, and galvanizing systems in scope | exclude internal recirculation and normalize net input to conforming output mass | meter calibration; water balance; invoice or abstraction record |
| `cp_surface_chemicals` | `steel_fitting_manufacture` | sodium hydroxide, 30% hydrochloric acid, and SHG zinc | purchase, batch-charge, bath-analysis, and stock records | chemical identity; concentration or grade; delivered mass; charged mass; opening and closing stock; bath id; applicable lots | reconcile deliveries, charges, and stock change for each separate chemical | kg | per charge and reporting period | complete bath service periods overlapping the reporting period | all cleaning, pickling, and galvanizing baths used for the declared product | attribute each chemical separately by measured product throughput through the bath | supplier certificate; concentration analysis; calibrated scale; stock reconciliation |
| `cp_product_output` | `steel_fitting_manufacture` | conforming reference product | final scale, inspection, and release records | product id; fitting type; connection; dimensions; grade; heat treatment; coating; mass; inspection result; release date | weigh and release only conforming unpackaged fittings | kg | per lot | complete reporting period | all declared fitting production lines | sum conforming mass by homogeneous declared product and route | scale calibration; inspection report; material certificate; release record |
| `cp_waste_dispatch` | `steel_fitting_manufacture` | post-industrial steel scrap and spent pickling acid | waste scale tickets, manifests, and bath replacement records | waste identity; alloy or contamination; mass; bath id; acid concentration; dissolved metals; date; destination; treatment | reconcile internal collection with off-site dispatch documents for each waste | kg | per dispatch and bath replacement | complete reporting period and complete bath service period | all included operations | sum each waste separately and attribute shared bath waste by product throughput through that bath | calibrated scale; waste manifest; bath analysis; licensed receiver record |
| `cp_direct_emissions` | `steel_fitting_manufacture` | direct fossil carbon dioxide | CEMS, stack-test-supported records, or verified facility emissions records | source id; fuel linkage; measured mass or verified reported mass; operating period; allocation driver | use direct measurement where available and reconcile the covered combustion sources to the natural-gas record | kg | continuous or reporting-period record | complete reporting period | on-site fossil combustion assigned to fitting manufacture | subtract excluded sources and normalize the assigned mass to conforming output | instrument QA records; emissions report; fuel-to-emission reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = reporting-period row total divided by reporting-period conforming unpackaged fitting mass | row total; conforming product mass | amount per 1 kg reference product |  |
| `calc_gas_condition_conversion` | natural gas and industrial oxygen | convert reported gas volume to the single declared reference temperature and pressure using the documented meter or supplier correction method before normalization | reported volume; temperature; pressure; compressibility method if used | m3 at declared reference conditions |  |
| `calc_steel_yield_check` | steel-bearing inputs and outputs | compare total applicable steel feedstock mass with conforming fitting mass plus steel scrap and other separately documented steel-bearing stock changes or residues | steel feedstock; conforming fitting; steel scrap; stock changes; separately documented residues | disclosed steel mass-balance difference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Fitting type, connection, dimensions, steel grade, manufacturing route, heat-treatment state, coating state, and conformance specification are complete and internally consistent. | release record; drawing; material certificate; inspection report |
| `dq_temporal_match` | all inventory rows | Input, output, waste, and direct-emission records cover the same declared reporting period; bath-service allocations state any period mismatch. | reporting-period reconciliation and bath-service worksheet |
| `dq_metering` | energy, gases, water, and mass records | Meters and scales have current calibration or a documented accuracy check; estimated substitutions are flagged and justified. | calibration certificates; invoice reconciliation; uncertainty note |
| `dq_route_completeness` | conditional operations | Every forming, forging, welding, heat-treatment, pickling, and galvanizing operation is declared present or absent, and all applicable atomic rows are completed. | route sheet; process flow diagram; production traveller |
| `dq_upstream_links` | purchased inputs | Each applicable purchased-input row links to a representative upstream dataset or reports the identity, geography, technology, and substitution gap. | dataset references and substitution log |
| `dq_mass_balance` | steel-bearing flows | Investigate and explain the steel mass-balance difference rather than forcing it to zero or hiding stock changes and residues. | signed reconciliation; inventory-change record; corrective-action note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Confirm the reference product is the exact non-cast steel fitting flow and not a cast fitting or unconverted tube or pipe. | `unsd-cpc-3-0-structure-2025` |
| `validate_reference_amount` | reference flow | Confirm exactly 1 kg of conforming unpackaged output is the normalization denominator and all rows use the same product and reporting period. |  |
| `validate_product_qualifiers` | product release | Confirm the declared fitting types, steel grades, dimensions, tolerances, inspection and testing requirements, and quality requirements are supported by product records and the applicable specification. | `bsi-bs-en-10253-2-2021-a1-2025` |
| `validate_route_rows` | process inventory | Confirm every route operation is declared and each conditional atomic flow is completed only when that operation occurs. | `eu-jrc-sf-bref-2024`; `eu-jrc-fmp-bref-2022` |
| `validate_solution_basis` | surface-treatment chemicals | Confirm sodium hydroxide and hydrochloric acid are reported as delivered solution mass with concentration and that the selected hydrochloric-acid flow is used only for a verified 30% solution. |  |
| `validate_waste_destination` | steel scrap and spent pickling acid | Confirm each waste has a measured mass, declared composition or contamination state, and named receiving treatment; do not merge scrap and acid waste. |  |
| `validate_direct_co2_boundary` | direct fossil carbon dioxide | Confirm the row contains only on-site fossil combustion emissions and excludes upstream electricity, natural-gas supply, and purchased-material emissions. |  |
| `validate_allocation` | shared operations | Confirm subdivision was attempted first and any remaining physical allocation driver, basis, and affected rows are disclosed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for finished non-cast steel tube or pipe fittings |
| downstream_use | May be published as a secondary_dataset or background_dataset for declared fitting types and manufacturing routes |
| allowed_use | Product LCAs and lifecycle models that match the declared steel grade, fitting type, route, dimensions, coating, geography, reporting period, and factory-gate boundary |
| excluded_use | Cast-iron or cast-steel fittings; unconverted pipe; valves; installation, use, or end-of-life; products with undisclosed route or material state |
| required_metadata | PCR id and version; product flow UUID; fitting type; connection type; nominal size and wall thickness; steel grade and specification; route; heat treatment; coating; geography; reporting period; upstream datasets; allocation; data quality |
| required_quality_disclosure | Foreground coverage; measured and estimated shares; meter and scale quality; steel mass-balance difference; conditional-process applicability; unresolved UUID substitutions; upstream dataset representativeness; waste destinations |
| update_trigger | Change in steel grade or feedstock form, forming or forging technology, heat-treatment fuel, electricity supply, pickling chemistry, galvanizing route, product specification, allocation driver, plant geography, or a material shift in foreground intensity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact CPC 41293 product identity and exclusion of cast-steel fittings |
| `bsi-bs-en-10253-2-2021-a1-2025` | Standard (`standard`) | BSI, BS EN 10253-2:2021+A1:2025, Butt-welding pipe fittings — Non-alloy and ferritic alloy steels with specific inspection requirements, https://knowledge.bsigroup.com/products/butt-welding-pipe-fittings-non-alloy-and-ferritic-alloy-steels-with-specific-inspection-requirements-2 | Representative butt-welding fitting types and required declaration of steel grade, dimensions, tolerances, inspection, testing, and applicable quality specification |
| `eu-jrc-sf-bref-2024` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, 2024, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry | Forging-route process decomposition: heating, metal treatment, forging or hammering, machining, cooling or finishing, and heat treatment |
| `eu-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Ferrous Metals Processing Industry BREF, 2022, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry | Downstream ferrous-metal boundary and conditional batch-galvanizing sequence of degreasing, pickling, fluxing, galvanizing, and finishing |
