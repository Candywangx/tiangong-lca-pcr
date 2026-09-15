---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.other-bars-and-rods-of-iron-or-non-alloy-steel-not-further-worked-than-forged-hot-rolle-f7af5b63
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other bars and rods of iron or non-alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded, but including those twisted after rolling

## 1. Scope and Applicability

This PCR applies to straight or otherwise non-irregularly-coiled bars and rods of iron or non-alloy steel whose final material-shaping operation is forging, hot rolling, hot drawing, hot extrusion, or twisting after rolling. It covers the foreground transformation of declared steel feedstock into saleable bars or rods at the hot-working facility gate.

Products in irregularly wound coils, stainless or other alloy steel products, open sections, wire, cold-formed or cold-finished bars and rods, and bars or rods further worked by machining, coating, plating, or other downstream fabrication are excluded. A dataset shall identify the grade, geometry, hot-working route, surface condition, delivery form, and whether twisting after rolling is used.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.other-bars-and-rods-of-iron-or-non-alloy-steel-not-further-worked-than-forged-hot-rolle-f7af5b63 |
| classification_refs | CPC 3.0: 41242 |
| covered_products | Other bars and rods of iron or non-alloy steel not further worked than forged, hot-rolled, hot-drawn, or extruded, including bars and rods twisted after rolling |
| excluded_products | Irregularly wound hot-rolled coils; stainless or other alloy steel bars and rods; open sections; wire; cold-finished products; coated, plated, machined, or otherwise further-worked products |
| representative_product | Straight merchant-length hot-worked iron or non-alloy steel bar or rod, uncoated and ready for shipment |
| production_route | Declared route: forging, hot rolling, hot drawing, hot extrusion, or hot rolling followed by twisting; route-specific steps and fuels shall be disclosed |
| market_state | Net saleable mass at the hot-working facility gate, after cooling, straightening, cutting, inspection, and ordinary uncoated finishing |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of an uncoated iron or non-alloy steel bar or rod in the declared hot-worked state |
| How much | 1,000 kg net saleable product |
| How well | Conforming to the declared grade, dimensions, dimensional tolerances, surface condition, mechanical-property specification, and delivery form |
| How long or cycle | One production lot delivered at the hot-working facility gate; no use-stage duration is represented |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other bars and rods of iron or non-alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded, but including those twisted after rolling |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | iron or non-alloy steel grade and composition specification; cross-sectional shape and nominal dimensions; dimensional tolerance; hot-working route; reheating technology; surface condition; straight length or other delivery form; twisting-after-rolling status; net product mass; facility geography; production period; upstream steelmaking route and recycled-content basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-based material flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry saleable mass after crop ends, scale, and rejected product are removed; weighbridge, certified scale, or reconciled production-ledger mass shall be used. |
| `energy_conversion` | alternating-current electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity in kWh in raw records and convert to MJ with 1 kWh = 3.6 MJ; disclose supplier mix, geography, voltage, technology, and delivery boundary. |
| `gas_volume_conditions` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record meter reference temperature, pressure, compressibility convention, and whether the value is standard or actual volume; do not combine volumes with different reference conditions. |
| `water_balance` | process water and descaling wastewater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Distinguish withdrawal, make-up, recirculated flow, consumed water, and discharged wastewater; only make-up crossing the product-system boundary is an input. |

## 5. System Boundary

The foreground boundary begins with separately identified steel billets, blooms, bar blanks, or equivalent iron/non-alloy-steel feedstock received by the hot-working facility. It includes feedstock conditioning when performed, heating or reheating, descaling, the declared hot-working route, route-specific intermediate or post-heating, cooling, straightening, cutting, ordinary uncoated finishing, inspection, on-site material handling, directly associated emission control, and treatment of process wastewater attributable to the product.

Upstream steelmaking, purchased energy and water supply, and off-site waste treatment remain linked upstream or downstream datasets. Downstream machining, cold finishing, coating, fabrication, distribution beyond the facility gate, use, and end-of-life are excluded. Capital goods, research and development, business travel, administration, accidents, and spills are excluded unless the study goal explicitly requires them.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Mass, grade, composition specification, geometry, temperature where relevant, surface condition, supplier, and upstream dataset identity for each received steel feedstock lot |
| starting_condition_role | The received feedstock is the foreground transformation input; upstream steelmaking burdens are supplied by linked datasets and are not recreated inside the hot-working process |
| product_classification_scope | Iron or non-alloy steel bars and rods in the CPC 41242 hot-worked, not-further-worked market state; classification is supporting context rather than canonical PCR identity |
| recursive_input_rule | A purchased input already within this same product category shall remain a separately identified upstream product flow with its own dataset; it shall not be merged with net output or counted as virgin semi-finished feedstock |
| upstream_dataset_requirement | Use supplier-specific or technologically and geographically representative datasets for feedstock steel, electricity, natural gas, water supply, and off-site treatment; disclose steelmaking route and recycled-content or scrap-accounting method |
| disclosure | Declare included hot-working route and steps, facility geography, production period, fuel and electricity supply, water recirculation boundary, internal scrap and scale loops, external recovery, emission-control scope, cut-offs, and allocation choices |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_steps` | foreground hot-working process | Include all declared on-site steps from received steel feedstock through net saleable bar or rod, including directly associated utilities, emission control, and wastewater treatment. | `eu-fmp-bat-2022`; `eu-sf-bref-2024`; `worldsteel-lci-methodology-2017` |
| `boundary_route_disclosure` | route selection | Declare whether the product is forged, hot-rolled, hot-drawn, hot-extruded, or twisted after rolling, and mark every route-conditional exchange as applicable or not applicable from production evidence. | `un-cpc-3-0-structure-2025`; `eu-fmp-bat-2022`; `eu-sf-bref-2024` |
| `boundary_no_double_counting` | linked upstream and recycling datasets | Keep upstream steelmaking and any recycling or avoided-burden module separate from foreground hot working and prevent double counting of scrap burdens or end-of-life credits. | `worldsteel-lci-methodology-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hot_working_and_finishing` | Integrated hot working and finishing of iron or non-alloy steel bars and rods | `required` | Include the actual route steps from feedstock receipt through net saleable product; route-specific exchanges are recorded only when supported by production records | Foreground production | 1,000 kg net saleable reference product |

### Process: Integrated hot working and finishing (`hot_working_and_finishing`)

#### Inputs

##### Product flows

###### Steel feedstock (`steel_feedstock`)

The received billet, bloom, bar blank, or equivalent steel workpiece is recorded as one grade- and state-specific product input. Separate rows shall be created in a concrete dataset when materially different grades or upstream steelmaking routes are used.

- Selected flow: Hot-working feedstock of iron or non-alloy steel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured received mass assigned to the reference-product lot, net of feedstock returned before processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `worldsteel-lci-methodology-2017`

###### Alternating-current electricity (`electricity_input`)

Electricity crossing the facility boundary for heating, drives, pumps, fans, cutting, straightening, controls, and directly associated treatment is recorded as one metered product input. Supplier and site voltage qualifiers shall accompany the selected TianGong flow.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered electricity assigned to the product lot and converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_metering`
- Sources: `eu-fmp-bat-2022`; `eu-sf-bref-2024`

###### Gaseous natural gas (`natural_gas_input`)

Natural gas is recorded only when it crosses the facility boundary for a directly associated furnace, heater, or thermal treatment included in the declared route. Do not substitute another gaseous or liquid fuel in this row.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered natural-gas volume assigned to the product lot; report zero or not applicable only when records demonstrate that natural gas is not used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product at the declared gas-volume reference conditions
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_metering`
- Sources: `eu-fmp-bat-2022`; `eu-sf-bref-2024`

###### Process-water make-up (`process_water`)

Fresh or externally supplied make-up water is recorded when it crosses the boundary for descaling, cooling, quenching, or directly associated treatment. Recirculated water within the facility is not counted again as an input. Water source, quality, delivery geography, density basis, and metering boundary shall be retained as foreground qualifiers.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered make-up water assigned to the product lot, excluding internal recirculation; convert volume records to kg with a documented water density at the stated reference conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-fmp-bat-2022`; `worldsteel-lci-methodology-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference bars or rods (`reference_product`)

The reference product is the net mass of conforming, uncoated iron or non-alloy steel bars or rods after cooling, straightening, cutting, inspection, and ordinary finishing required for shipment.

- Selected flow: Other hot-worked iron or non-alloy steel bars and rods
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1,000 kg net saleable product by reference-flow normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-3-0-structure-2025`; `worldsteel-lci-methodology-2017`

##### Waste flows

###### Crop-end steel scrap (`steel_crop_scrap`)

Iron or non-alloy steel crop ends and rejected pieces leaving the foreground process for external recovery or treatment are recorded separately from internal returns. A change to product-flow treatment requires documented market and quality evidence. Grade, crop-end or reject origin, contamination, and destination remain foreground qualifiers.

- Selected flow: Iron and steel forming scrap `11d74955-1634-4ef7-94e9-b9e90783c510`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed external scrap mass assigned to the product lot; exclude internally recirculated pieces from boundary-crossing output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `worldsteel-lci-methodology-2017`

###### Hot-working mill scale (`mill_scale`)

Iron-oxide scale physically removed during reheating, descaling, hot working, or cooling is recorded as a distinct waste output when it crosses the foreground boundary. The selected UUID applies to scale generated during hot rolling and descaling and collected after separation from flume wastewater; a different route or separation state requires a separately verified exact flow.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or reconciled dry mass leaving for recovery or treatment, excluding scale retained in internal water-treatment inventories until it leaves the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-fmp-bat-2022`

###### Descaling wastewater (`descaling_wastewater`)

Wastewater containing suspended iron oxides from descaling and cooling is recorded only when it leaves the foreground water-treatment boundary. Internally recirculated water is excluded from this output.

- Selected flow: Descaling wastewater containing suspended iron oxides
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered discharge volume assigned to the product lot after internal recirculation and treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-fmp-bat-2022`; `worldsteel-lci-methodology-2017`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air`)

Direct fossil carbon dioxide from combustion equipment assigned to the included hot-working route is recorded as an elementary emission to air. Biogenic carbon dioxide, if any, shall not be included in this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Source-specific monitored or documented fuel-carbon-balance mass assigned to the product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-fmp-bat-2022`; `eu-sf-bref-2024`

###### PM10 to air (`pm10_air`)

Particulate matter with aerodynamic diameter not exceeding 10 micrometres is recorded for monitored channelled and quantified fugitive emissions attributable to heating, descaling, forging, rolling, cutting, and finishing.

- Selected flow: Particulate matter, aerodynamic diameter <= 10 micrometres
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Monitored or mass-balance emission assigned to the product lot; channelled and fugitive quantities shall be retained separately in raw records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-fmp-bat-2022`; `eu-sf-bref-2024`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | product-specific hot-working burdens | Avoid allocation by metering or engineering subdivision by line, furnace, route, grade campaign, and product lot before any allocation is applied. | `worldsteel-lci-methodology-2017` |
| `allocation_mass_reconcile` | feedstock, product, scrap, and scale | Reconcile the steel mass balance. Internal returns remain inside the boundary and receive no second burden; outputs crossing the boundary remain separately reported with measured mass and destination. | `worldsteel-lci-methodology-2017` |
| `allocation_recovered_outputs` | externally recovered scrap and scale | Do not embed avoided-burden credits in foreground exchange quantities. If a downstream study applies system expansion or recycling credits, report the method, substituted function, geography, quality loss, and calculation separately and prevent double counting. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `hot_working_and_finishing` | `steel_feedstock`; `steel_crop_scrap`; `mill_scale`; reference-product verification | weighbridge, certified scale, and production ledger | lot_id; grade; route; feedstock_mass_kg; net_product_mass_kg; external_scrap_mass_kg; internal_return_mass_kg; dry_scale_mass_kg; destination | Record calibrated scale tickets and reconcile them to lot-level production records | kg | Each lot, aggregated monthly | At least 12 consecutive representative months or the full campaign for campaign production | All included lines and shared handling assigned to the declared product | Sum boundary-crossing masses by lot; keep internal returns separate; normalize each output to 1,000 kg net saleable product | Scale calibration, ticket-to-ledger reconciliation, destination records, and signed mass-balance review |
| `cp_electricity_metering` | `hot_working_and_finishing` | `electricity_input` | revenue/submeter readings and allocation log | meter_id; timestamp; opening_kWh; closing_kWh; line_status; route; lot_mass_kg; supplier; geography; voltage; technology; delivery_boundary | Use calibrated interval or shift meters; subtract documented non-production loads and allocate shared loads by causal operating data | kWh, converted to MJ | Each shift or batch, aggregated monthly | At least 12 consecutive representative months or the full campaign | All included equipment and directly associated treatment | Sum assigned kWh, multiply by 3.6 MJ/kWh, and normalize to 1,000 kg net saleable product | Meter calibration, invoice reconciliation, allocation worksheet, downtime log, and voltage/supplier evidence |
| `cp_natural_gas_metering` | `hot_working_and_finishing` | `natural_gas_input` | furnace meter and fuel invoice | meter_id; timestamp; opening_m3; closing_m3; reference_temperature; reference_pressure; compressibility_basis; furnace_id; route; lot_mass_kg | Use calibrated furnace or site meters and reconcile to invoices; allocate shared use from firing time and throughput | m3 at declared conditions | Each shift or batch, aggregated monthly | At least 12 consecutive representative months or the full campaign | Every included natural-gas-fired furnace or heater | Sum assigned volume at one declared reference condition and normalize to 1,000 kg net saleable product | Meter calibration, invoice reconciliation, reference-condition statement, and furnace operating log |
| `cp_water_balance` | `hot_working_and_finishing` | `process_water`; `descaling_wastewater` | intake, make-up, recirculation, discharge, and production meters | meter_id; timestamp; make_up_m3; water_density_kg_per_m3; density_reference_conditions; recirculated_m3; discharge_m3; treatment_status; route; lot_mass_kg | Read calibrated water meters, record the density basis used for mass conversion, and reconcile make-up, recirculation, evaporation/consumption, and discharge | m3 at meter and kg after documented density conversion | Daily or each campaign, aggregated monthly | At least 12 consecutive representative months or the full campaign | All included descaling, cooling, quenching, and wastewater-treatment systems | Count only boundary-crossing make-up and discharge; report process-water input in kg after density conversion and wastewater output in m3; allocate shared systems by measured line flow or documented causal throughput and normalize to 1,000 kg product | Meter calibration, density and reference-condition record, water-balance closure, discharge records, and treatment operating log |
| `cp_direct_air_emissions` | `hot_working_and_finishing` | `fossil_co2_air`; `pm10_air` | continuous or periodic monitoring and documented fuel-carbon balance | source_id; pollutant; concentration; gas_flow; sampling_duration; standard_conditions; channelled_or_fugitive; fuel_carbon_mass; oxidation_basis; operating_status; route; lot_mass_kg | Use source-specific monitoring or a documented fuel-carbon balance; retain channelled and fugitive results separately | kg per reporting period | Continuous aggregation or each compliant test campaign; reconcile monthly | At least 12 consecutive representative months and representative operating modes | All attributable heating, descaling, forging, rolling, cutting, finishing, and abatement sources | Sum valid source-specific mass over product operating periods, allocate shared sources causally, and normalize to 1,000 kg product | Monitoring method, instrument calibration, sampling report, standard-condition conversion, fuel certificate, and operating log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | every variable inventory row | amount per reference flow = assigned reporting-period amount / net saleable product mass x 1,000 kg | assigned flow amount; net saleable product mass | normalized row amount per 1,000 kg product | `worldsteel-lci-methodology-2017` |
| `calc_electricity_mj` | `electricity_input` | electricity_MJ = metered_electricity_kWh x 3.6 | metered kWh | MJ electricity |  |
| `calc_material_balance` | steel-bearing mass flows | unexplained_mass = feedstock_mass - net_product_mass - external_scrap_mass - dry_scale_mass - other separately identified steel-bearing outputs; investigate rather than force closure | lot-level mass records | disclosed mass-balance difference and closure percentage |  |
| `calc_water_boundary` | `process_water`; `descaling_wastewater` | report make-up input and final discharge separately; do not add internal recirculation to either boundary-crossing amount; convert make-up volume to mass with the documented density and reference conditions | make-up volume, water density, density reference conditions, recirculation, consumption estimate, discharge | kg process-water input and m3 wastewater output | `eu-fmp-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and steel feedstock | Retain grade/composition, dimensions, tolerance, route, surface condition, delivery form, lot identity, and upstream dataset linkage. | Certificate of analysis, product specification, inspection record, and supplier dataset identifier |
| `dq_technology` | hot-working process | Identify furnace and forming technology, route sequence, included finishing, fuel, electricity supply, emission controls, water recirculation, and shared-service allocation. | Process flow diagram, equipment register, operating logs, meter map, and allocation worksheet |
| `dq_time` | all foreground rows | Use a representative 12-month period where continuous production exists; for campaign production, cover the full campaign and disclose representativeness limitations. | Dated records, production calendar, downtime and abnormal-operation log |
| `dq_completeness` | inventory | Reconcile every known steel-bearing input and output, and document every excluded boundary-crossing exchange and its estimated significance; never omit a known hazardous or regulated emission through a general cut-off. | Mass-balance closure, exchange register, cut-off assessment, and reviewer sign-off |
| `dq_measurement` | meters, scales, and emission monitoring | Use calibrated instruments or reconcile secondary records to invoices and production ledgers; retain uncertainty and standard-condition conversions. | Calibration certificates, invoices, reconciliation worksheets, monitoring reports, and uncertainty statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | dataset identity | Reject the dataset when iron/non-alloy composition, product geometry, hot-working route, not-further-worked state, or required reference-flow qualifiers are missing or conflict with the declared product. | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | reference flow | Confirm that the reference output is exactly 1,000 kg net saleable product and that every variable row uses the same normalization denominator. | `worldsteel-lci-methodology-2017` |
| `validate_route_rows` | route-conditional exchanges | Require applicability evidence for each declared route-specific fuel, water, waste, and emission row; do not replace an unmeasured atomic exchange with a combined utility, waste, or emission category. | `eu-fmp-bat-2022`; `eu-sf-bref-2024` |
| `validate_mass_balance` | steel-bearing flows | Report feedstock, net product, external scrap, internal returns, scale, and other steel-bearing outputs separately and investigate any unexplained mass difference. | `worldsteel-lci-methodology-2017`; `eu-fmp-bat-2022` |
| `validate_double_counting` | upstream and recycling modelling | Confirm that upstream steelmaking, internal scrap loops, external recovery, and end-of-life credits are not counted twice. | `worldsteel-lci-methodology-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after methodology review and publication |
| downstream_use | Cradle-to-gate steel-product modelling when combined with representative upstream steel, energy, water, and treatment datasets; foreground comparison only when route, grade, geography, period, allocation, and data quality are equivalent |
| allowed_use | Product carbon footprints, environmental footprints, EPD-supporting studies, supply-chain screening, and lifecycle models within the declared geography, technology, grade, and market-state scope |
| excluded_use | Direct representation of irregular coils, alloy or stainless steel, cold-finished or coated products, downstream fabricated articles, use-stage functions, or public comparative assertions without a study-specific functional unit and review |
| required_metadata | PCR id and version; product grade and composition; dimensions and tolerance; route and equipment; surface and delivery state; facility geography; production period; upstream steelmaking route and recycled-content basis; supplier/voltage/fuel qualifiers; allocation and cut-offs |
| required_quality_disclosure | Primary-data share; temporal, geographical, and technological representativeness; meter and scale coverage; mass-balance closure; water boundary; emission-monitoring method; unresolved flow identities; uncertainty; exclusions; external treatment and recycling method |
| update_trigger | Material change in grade mix, route, furnace or forming technology, fuel or electricity supply, water system, emission control, facility geography, allocation/recycling method, product specification, or when foreground data become more than five years old |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, *CPC Ver. 3.0 Structure, 30 June 2025*, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Product classification identity, included hot-worked states, and not-further-worked boundary |
| `eu-fmp-bat-2022` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2022/2110, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110 (retrieved 2026-09-03) | Hot-rolling definition, process decomposition, direct-emission and water-system scope, and monitoring context |
| `eu-sf-bref-2024` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Smitheries and Foundries Industry*, EUR 40127, DOI: 10.2760/4805267 (retrieved 2026-09-03) | Forging-route process decomposition, heating, finishing, cooling, and directly associated environmental controls |
| `worldsteel-lci-methodology-2017` | `official_guidance` | World Steel Association, *Life Cycle Inventory Methodology Report*, 2017, https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-03) | Declared unit, system boundary, ancillary processes, co-product treatment, recycling disclosure, and data quality |
| `cfa-lca-database-guideline-appendix` | `official_guidance` | Carbon Footprint Alliance, *LCA Database Guideline, Chapter 6 Appendix*, https://www.carbonfootprint.network/en/docs/cifa-guidelines/lca-database-guideline/chapter-6-appendix/ (retrieved 2026-09-03) | Verified Chinese CPC 41242 product terminology |
