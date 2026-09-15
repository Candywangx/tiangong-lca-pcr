---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-other-vegetable-textile-fibres-woven-fabrics-of-paper-yarn
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Woven fabrics of other vegetable textile fibres; woven fabrics of paper yarn

## 1. Scope and Applicability

This PCR applies to woven fabrics made from vegetable textile-fibre yarns that fall within the residual CPC 26590 scope, and to woven fabrics made from paper yarn. It covers conversion from received yarn through warp preparation, optional sizing, weaving, any declared in-house wet treatment, inspection, and packaging to a mill-gate woven-fabric product. The foreground data package shall declare whether the product follows the other-vegetable-fibre route or the paper-yarn route and which conditional operations are performed.

The PCR does not cover cotton, silk, wool, flax, true-hemp, ramie, or jute woven fabrics that have their own CPC subclasses; special, knitted, crocheted, tufted, nonwoven, coated, laminated, or garment products; production of the fibre or yarn before the declared received-yarn boundary; or use and end-of-life stages. A dataset that includes dyeing, printing, coating, lamination, or garment manufacture shall model those operations under an applicable rule set rather than silently extending this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-other-vegetable-textile-fibres-woven-fabrics-of-paper-yarn |
| classification_refs | CPC 3.0: 26590, exact |
| covered_products | Woven fabrics of vegetable textile fibres remaining in CPC 26590 after the separately classified cotton, flax, true-hemp, ramie and jute categories; woven fabrics of paper yarn |
| excluded_products | Other separately classified natural-fibre woven fabrics; man-made-fibre woven fabrics; special, knitted, tufted and nonwoven fabrics; yarn as a final product; coating, lamination and garment manufacture |
| representative_product | Mill-gate woven fabric made from one declared other vegetable textile-fibre yarn or from paper yarn |
| production_route | Received yarn; warp preparation; optional sizing; weaving; conditional in-house pretreatment or bleaching; inspection; packaging |
| market_state | Grey or in-house-treated woven fabric at the mill gate, with treatment and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of woven fabric from a declared other vegetable textile-fibre yarn or paper yarn route |
| How much | 1 kg of conforming woven fabric at the declared mill-gate state |
| How well | Meets the declared composition, weave construction, areal density, width, moisture basis, treatment state and quality specification |
| How long or cycle | One representative production period or campaign with all included operations on the same temporal basis |
| reference_flow_link | The final conforming output of the last included foreground process |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of other vegetable textile fibres, woven fabrics of paper yarn `60d1ccca-cd64-48de-83c4-4ceec6af40a6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass (kg) `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | yarn route; fibre species or paper-yarn identity; fibre and blend mass fractions; weave construction; areal density; finished width; moisture basis; grey or treated state; sizing state; included wet operations; loom technology; production geography; production period; packaging inclusion |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference product on a net mass basis at the declared moisture and packaging state; convert measured masses to kg before normalization. |
| `internal_product_link` | Woven-fabric intermediate transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Match each internal woven-fabric output to the following process input on the same moisture and treatment basis and document any storage or sampling difference. |
| `energy_metering` | Electricity consumed by weaving, wet treatment and packing | Energy | kWh | Record metered electricity for the applicable process and allocation period; do not convert electricity to mass. |
| `compressed_air_metering` | Compressed air used by an air-jet loom | Volume | m3 | Record delivered compressed-air volume at the meter basis and disclose the pressure or standard-condition basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased or transferred other-vegetable-fibre yarn or paper yarn received at the weaving mill |
| starting_condition_role | Upstream product input; fibre preparation and yarn manufacture are represented by supplier-specific or secondary upstream datasets |
| product_classification_scope | CPC 3.0 code 26590 only, with route qualifiers separating other vegetable textile-fibre fabric from paper-yarn fabric |
| recursive_input_rule | A same-category woven-fabric input is recorded as an upstream product flow and linked to a separate dataset; its production is not recursively reproduced inside this foreground system |
| upstream_dataset_requirement | Use temporally and geographically representative upstream datasets for each purchased yarn, utility, chemical and packaging input, preserving the declared material identity |
| disclosure | Declare yarn origin, integrated versus purchased operations, sizing, loom technology, wet operations, waste treatment, packaging, geography, period and any excluded operation |

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `boundary_start_received_yarn` | Foreground starting boundary | Start at receipt of the declared other-vegetable-fibre yarn or paper yarn; include upstream fibre and yarn burdens through linked datasets, not as unreported cut-offs. | `un-cpc-3-0-26590`; `jrc-textiles-bref-2023` |
| `boundary_weaving_core` | Warp preparation and weaving | Include warp preparation, sizing when used, loom operation, on-site compressed air and humidification where applicable, material losses, internal transfers and waste generated by fabric production. | `eu-2022-2508-textiles-bat` |
| `boundary_conditional_wet` | In-house wet treatment | Include desizing, washing, scouring, bleaching or comparable wet treatment only when performed before the declared product leaves the mill; record water, energy, each chemical and each wastewater stream as separate exchanges. | `eu-2022-2508-textiles-bat`; `jrc-textiles-bref-2023` |
| `boundary_end_mill_gate` | Foreground ending boundary | End after inspection and the declared packaging operation with conforming woven fabric ready to leave the mill; exclude distribution, use and end of life. | `un-cpc-3-0-26590` |
| `boundary_actual_emissions` | Direct releases and wastes | Add one atomic inventory row for every relevant direct emission and waste identified by the site input-output inventory, permit, monitoring plan or treatment record; do not substitute a grouped pollutant or waste label. | `eu-2022-2508-textiles-bat` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `warp_prep_weaving` | Warp preparation, optional sizing and weaving | required | Always included | Converts received yarn into woven fabric | kg woven fabric leaving the loom and inspection point |
| `wet_treatment` | In-house wet treatment | conditional | Include when desizing, washing, scouring, bleaching or another wet treatment occurs before the declared mill gate | Converts grey woven fabric to the declared treated state | kg treated woven fabric output |
| `inspection_packaging` | Final inspection and packaging | required | Always included; packaging exchanges apply only when packaging is included in the declared reference product | Releases conforming mill-gate product | 1 kg reference woven fabric |

### Process: Warp preparation, optional sizing and weaving (`warp_prep_weaving`)

#### Inputs

##### Product flows

###### Other vegetable textile-fibre yarn (`other_vegetable_yarn_input`)

Record this input only for the other-vegetable-fibre route and identify the single fibre species and yarn specification.

- Selected flow: Other vegetable textile fibre yarn
- Flow property / unit: Mass / kg
- Amount rule: measured net yarn issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg woven fabric output from warp preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_material_records`
- Sources: `un-cpc-3-0-26590`

###### Paper yarn (`paper_yarn_input`)

Record this input only for the paper-yarn route and retain the supplier yarn grade and paper composition.

- Selected flow: Paper yarn
- Flow property / unit: Mass / kg
- Amount rule: measured net paper yarn issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg woven fabric output from warp preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_material_records`
- Sources: `un-cpc-3-0-26590`

###### Modified-starch sizing chemical (`modified_starch_input`)

Record modified starch when it is applied as the single sizing-chemical exchange; other sizing chemicals require their own atomic rows.

- Selected flow: modified starch `09797370-6632-42aa-9d77-e9d41ff82c75`
- Flow property / unit: Mass / kg
- Amount rule: measured modified starch charged to the sizing bath, net of documented recovered material returned to the same batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg woven fabric output from warp preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_records`
- Sources: `eu-2022-2508-textiles-bat`

###### Process water for sizing (`process_water_sizing_input`)

Record supplied process water when sizing is performed at the foreground facility.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process water supplied to sizing, excluding separately metered reused water that does not cross the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg woven fabric output from warp preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_records`
- Sources: `eu-2022-2508-textiles-bat`

###### Electricity for warp preparation and weaving (`electricity_weaving_input`)

Record metered medium-voltage electricity consumed by warping, sizing, looms, local humidification and directly attributable auxiliaries.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity for the included equipment and production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg woven fabric output from warp preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_energy_records`
- Sources: `eu-2022-2508-textiles-bat`

###### Compressed air for air-jet weaving (`compressed_air_input`)

Record delivered compressed air only when an air-jet loom or another included operation consumes it.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: metered compressed-air volume allocated to the applicable looms at the disclosed pressure basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg woven fabric output from warp preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_energy_records`
- Sources: `eu-2022-2508-textiles-bat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Woven fabric leaving weaving (`woven_fabric_weaving_output`)

Record inspected woven fabric before any included wet treatment or final packaging.

- Selected flow: Woven fabrics of other vegetable textile fibres, woven fabrics of paper yarn `60d1ccca-cd64-48de-83c4-4ceec6af40a6`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of conforming and transferred woven fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production order or reporting-period output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_material_records`
- Sources: `un-cpc-3-0-26590`

##### Waste flows

###### Warp-sizing wastewater (`warp_sizing_wastewater_output`)

Record untreated wastewater transferred from warp sizing to on-site or off-site wastewater treatment.

- Selected flow: Warp sizing wastewater `33617934-f2c0-4016-bb14-264de8396a2c`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or measured volume converted using a documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg woven fabric output from warp preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sizing_records`
- Sources: `eu-2022-2508-textiles-bat`

###### Yarn waste from weaving (`yarn_waste_output`)

Record loom waste, broken ends and unusable yarn removed from this process as one yarn-waste exchange.

- Selected flow: Yarn waste from weaving
- Flow property / unit: Mass / kg
- Amount rule: measured yarn waste leaving the foreground process, separated from fabric offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg woven fabric output from warp preparation and weaving
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_material_records`
- Sources: `eu-2022-2508-textiles-bat`

##### Elementary flows

### Process: In-house wet treatment (`wet_treatment`)

#### Inputs

##### Product flows

###### Woven fabric entering wet treatment (`woven_fabric_wet_input`)

Record the internal woven-fabric transfer on the same moisture basis as the upstream process output.

- Selected flow: Woven fabrics of other vegetable textile fibres, woven fabrics of paper yarn `60d1ccca-cd64-48de-83c4-4ceec6af40a6`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred into the declared wet-treatment operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_material_records`
- Sources: `jrc-textiles-bref-2023`

###### Process water for wet treatment (`process_water_wet_input`)

Record supplied process water crossing the foreground boundary for the included wet operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured supplied water, with recycled internal water reported separately in the water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_material_records`
- Sources: `eu-2022-2508-textiles-bat`

###### Sodium hydroxide for wet treatment (`sodium_hydroxide_wet_input`)

Record industrial-grade sodium hydroxide only when it is charged to an included scouring, pH-control or comparable operation.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured as-received sodium hydroxide charged, with concentration disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_material_records`
- Sources: `eu-2022-2508-textiles-bat`

###### Hydrogen-peroxide solution for bleaching (`hydrogen_peroxide_wet_input`)

Record the single hydrogen-peroxide solution exchange only when peroxide bleaching is included; disclose the as-received concentration.

- Selected flow: Hydrogen peroxide solution
- Flow property / unit: Mass / kg
- Amount rule: measured as-received solution charged to the bleaching operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg treated woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_material_records`
- Sources: `eu-2022-2508-textiles-bat`

###### Steam for wet treatment (`steam_wet_input`)

Record imported industrial steam when it crosses the foreground boundary for heating, washing, drying or curing.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass / kg
- Amount rule: metered delivered steam mass for the included wet-treatment operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_energy_records`
- Sources: `eu-2022-2508-textiles-bat`

###### Electricity for wet treatment (`electricity_wet_input`)

Record metered medium-voltage electricity consumed by included wet-treatment and directly attributable auxiliary equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity for the included wet-treatment equipment and production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_energy_records`
- Sources: `eu-2022-2508-textiles-bat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Treated woven fabric (`woven_fabric_wet_output`)

Record the declared treated woven fabric after the included wet operations and before final inspection and packaging.

- Selected flow: Woven fabrics of other vegetable textile fibres, woven fabrics of paper yarn `60d1ccca-cd64-48de-83c4-4ceec6af40a6`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of conforming treated woven fabric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per production order or reporting-period output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_material_records`
- Sources: `un-cpc-3-0-26590`

##### Waste flows

###### Textile-process wastewater (`textile_wastewater_output`)

Record wastewater from the included wet-treatment operations when it is transferred to water or wastewater treatment.

- Selected flow: Wastewater, textile process (to water) `48438fa9-4988-405c-ba44-646f134e2ecc`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass or measured volume converted using a documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg treated woven fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_effluent_records`
- Sources: `eu-2022-2508-textiles-bat`

##### Elementary flows

### Process: Final inspection and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Woven fabric entering final inspection (`woven_fabric_pack_input`)

Record the final internal woven-fabric transfer from weaving or from the included wet-treatment process.

- Selected flow: Woven fabrics of other vegetable textile fibres, woven fabrics of paper yarn `60d1ccca-cd64-48de-83c4-4ceec6af40a6`
- Flow property / unit: Mass / kg
- Amount rule: measured fabric mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference woven fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_records`
- Sources: `un-cpc-3-0-26590`

###### Paperboard roll core (`paperboard_core_input`)

Record the paperboard core only when it leaves the mill with the fabric roll and is included in the declared packaging state.

- Selected flow: Paperboard roll core
- Flow property / unit: Mass / kg
- Amount rule: measured mass of paperboard roll cores assigned to conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference woven fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Polyethylene packaging film (`polyethylene_film_input`)

Record polyethylene film only when it leaves the mill with the fabric and is included in the declared packaging state.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured mass of polyethylene film assigned to conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference woven fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Electricity for inspection and packaging (`electricity_pack_input`)

Record metered medium-voltage electricity consumed by inspection, rolling and packaging equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity for inspection and packaging during the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference woven fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-2022-2508-textiles-bat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference woven-fabric product (`reference_woven_fabric_output`)

Record conforming mill-gate product on the declared moisture, treatment and packaging basis.

- Selected flow: Woven fabrics of other vegetable textile fibres, woven fabrics of paper yarn `60d1ccca-cd64-48de-83c4-4ceec6af40a6`
- Flow property / unit: Mass / kg
- Amount rule: measured net conforming product mass used as the reference denominator
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference woven fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_records`
- Sources: `un-cpc-3-0-26590`

##### Waste flows

###### Woven-fabric offcuts (`fabric_offcuts_output`)

Record woven-fabric offcuts rejected during final inspection or trimming separately from yarn waste.

- Selected flow: Woven-fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured offcut mass leaving final inspection and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference woven fabric output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-2022-2508-textiles-bat`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared foreground operations | Avoid allocation by separate metering, subdivision, production-order records or another demonstrated causal separation wherever practicable. | `iso-14044-2006` |
| `allocation_physical` | Unavoidable sharing among woven-fabric products | When subdivision is not practicable, use a documented physical relationship that reflects how material and energy demands change, such as machine time, loom picks or treated mass, and apply it consistently. | `iso-14044-2006` |
| `allocation_economic_fallback` | Shared burdens without a defensible physical relationship | Use economic allocation only as a documented fallback; retain price period, currency, product quantities and a sensitivity result. | `iso-14044-2006` |
| `allocation_recycling_and_waste` | Recovered sizing material, yarn waste, offcuts and wastewater treatment | Report recovered internal material as an internal loop without subtracting more than the measured input; model exported waste or recovered material as an output and disclose any credit or burden convention. | `iso-14044-2006`; `eu-2022-2508-textiles-bat` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_weaving_material_records` | `warp_prep_weaving` | `other_vegetable_yarn_input`; `paper_yarn_input`; `woven_fabric_weaving_output`; `yarn_waste_output` | Weighing and production-order records | flow identity; lot; opening mass; closing mass; issued mass; returned mass; output mass; waste mass; moisture basis | Calibrated scales reconciled to production orders and inventory movements | kg | Each lot or production order | Full representative production period | All included warping and weaving lines | Sum same-basis records by row_id, then divide by conforming woven-fabric mass | Calibration records; lot traceability; stock reconciliation; signed production report |
| `cp_sizing_records` | `warp_prep_weaving` | `modified_starch_input`; `process_water_sizing_input`; `warp_sizing_wastewater_output` | Batch sheet and meter records | batch id; chemical identity; concentration; chemical mass; supplied water; recovered water; wastewater volume or mass; density | Reconcile batch recipes, dosing records and water or effluent meters | kg | Each sizing batch | Full representative production period | All included sizing lines | Sum boundary-crossing inputs and outputs by row_id; prevent double counting of internal recovery | Dosing calibration; meter records; batch reconciliation; recovery log |
| `cp_weaving_energy_records` | `warp_prep_weaving` | `electricity_weaving_input`; `compressed_air_input` | Submeter and equipment-hour records | meter id; opening reading; closing reading; loom group; operating hours; air pressure basis; production output | Direct submeters preferred; documented engineering allocation only for shared meters | kWh; m3 | Each shift or meter interval | Full representative production period | All included warping, sizing and weaving equipment | Sum meter deltas and allocate shared service only by documented causal driver | Meter calibration; utility reconciliation; loom log; allocation worksheet |
| `cp_wet_material_records` | `wet_treatment` | `woven_fabric_wet_input`; `process_water_wet_input`; `sodium_hydroxide_wet_input`; `hydrogen_peroxide_wet_input`; `woven_fabric_wet_output` | Batch, dosing, meter and weighing records | batch id; fabric mass; moisture basis; chemical identity; concentration; charged mass; water meter readings; output mass | Reconcile process recipe, automated dosing, meters and fabric weights for each batch | kg | Each wet-treatment batch | Full representative production period | All included wet-treatment lines | Sum each atomic exchange by row_id and normalize to conforming treated-fabric mass | Batch sheet; dosing calibration; water balance; fabric weight record |
| `cp_wet_energy_records` | `wet_treatment` | `steam_wet_input`; `electricity_wet_input` | Utility meter records | meter id; opening reading; closing reading; batch id; process time; treated output | Direct utility meters preferred; shared use allocated by documented causal driver | kg; kWh | Each batch or meter interval | Full representative production period | All included wet-treatment equipment | Sum meter deltas and normalize to treated-fabric mass | Meter calibration; boiler or supplier statement; batch log |
| `cp_wet_effluent_records` | `wet_treatment` | `textile_wastewater_output` | Effluent meter and treatment-transfer records | discharge point; volume or mass; density; pH; temperature; treatment destination; sampling time | Meter the relevant stream at the process or treatment boundary and retain treatment-transfer evidence | kg | Each discharge interval or batch | Full representative production period | Every included wet-treatment discharge point | Sum the single wastewater stream after preventing overlap with internal reuse | Meter calibration; water balance; laboratory and transfer records |
| `cp_packaging_records` | `inspection_packaging` | `paperboard_core_input`; `polyethylene_film_input`; `electricity_pack_input`; `fabric_offcuts_output` | Packaging issue, meter and waste records | packaging identity; issued mass; returned mass; product order; electricity readings; offcut mass | Reconcile packaging stock, equipment meters and waste weights to released product | kg; kWh | Each production order or shift | Full representative production period | All included inspection and packing stations | Sum net packaging issue, metered energy and measured offcuts; normalize to reference product mass | Stock reconciliation; scale and meter calibration; waste ticket |
| `cp_final_product_records` | `inspection_packaging` | `woven_fabric_pack_input`; `reference_woven_fabric_output` | Quality-release and weighing records | roll id; route; composition; width; areal density; moisture basis; treatment state; gross mass; packaging mass; net mass; conformity status | Weigh released rolls and retain quality inspection and packaging deductions | kg | Each released roll or lot | Full representative production period | All conforming product leaving the declared mill gate | Sum net conforming mass only; exclude rejected output and excluded packaging | Calibration record; release certificate; roll traceability; rejection log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground inventory row | normalized amount = allocated boundary-crossing row amount / net conforming reference-product mass | row amount; allocation share; `reference_woven_fabric_output` | amount per 1 kg reference woven fabric | `iso-14044-2006` |
| `calc_internal_transfer_check` | Woven-fabric process links | Compare upstream woven-fabric output with downstream input on the same moisture basis; explain measured storage change, sampling or loss before normalization | upstream output mass; downstream input mass; moisture basis; documented change | reconciled internal transfer | `iso-14044-2006` |
| `calc_water_balance` | Sizing and wet treatment | supplied water + transferred-in water = product-retained water + wastewater + recovered/reused water + measured evaporation or documented balance difference | supplied water; wastewater; reuse; product moisture; evaporation | process water balance and completeness flag | `eu-2022-2508-textiles-bat` |
| `calc_mass_reconciliation` | Each production period | yarn and other material inputs shall be reconciled to conforming product, wastes, internal inventory change and documented process losses on consistent moisture bases | material inputs; outputs; wastes; stock change; moisture corrections | mass reconciliation and unexplained difference | `eu-2022-2508-textiles-bat` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and yarn input | Retain supplier and production records proving route, fibre or paper-yarn identity, blend fractions and exclusion from separately classified woven-fabric categories. | Supplier specification; bill of materials; CPC scope check; lot traceability |
| `dq_measurement` | Mass, energy, water, compressed air and effluent | Use calibrated direct measurement where available; document meter coverage, conversion factors, shared-meter allocation and uncertainty. | Calibration certificates; meter map; invoices; allocation worksheet |
| `dq_temporal` | Foreground reporting period | Use a representative period covering normal production and disclose shutdowns, trials, abnormal conditions and product-mix changes. | Production calendar; batch and downtime logs; abnormal-condition records |
| `dq_completeness` | Inputs, outputs, wastes and direct emissions | Reconcile the site input-output inventory to the PCR rows and add one atomic row for every relevant unlisted chemical, waste or direct emission. | Input-output inventory; chemical inventory; waste register; permit and monitoring records |
| `dq_wet_treatment` | Conditional wet-treatment process | Record recipe, chemical concentration, water balance, energy, effluent quantity, treatment destination and relevant monitored parameters for each included operation. | Batch sheets; automated dosing logs; meters; laboratory results; treatment records |
| `dq_uuid_traceability` | Tiangong identities | Use only UUIDs confirmed for the exact flow semantics; keep any non-exact identity absent and resolve the corresponding manifest review item before publication. | Hybrid retrieval result; direct state-code-100 flow read; review decision |

## 9. Validation Rules

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `validate_identity_scope` | Product identity | Fail validation if CPC 26590, yarn route, fibre or paper-yarn identity, weave construction, mass fractions, treatment state or excluded-category check is missing. | `un-cpc-3-0-26590` |
| `validate_reference_mass` | Reference flow | Require exactly 1 kg of the verified CPC 26590 Product flow with Mass as the reference property and kg as the reference unit; packaging and moisture basis shall be explicit. | `jrc-ilcd-flow-format-1-1` |
| `validate_process_route` | Process map | Require `warp_prep_weaving` and `inspection_packaging`; require `wet_treatment` only when the declared product state includes an in-house wet operation, and reject undeclared route extensions. | `jrc-textiles-bref-2023`; `eu-2022-2508-textiles-bat` |
| `validate_atomic_inventory` | Process inventory | Require one physical or chemical exchange per row_id, exact row order and bilingual UUID alignment; reject grouped utilities, chemicals, packaging, wastes or emissions. | `eu-2022-2508-textiles-bat` |
| `validate_records_and_period` | Foreground amounts | Require each non-not-applicable row to link to a collection protocol and retain measurement, temporal coverage, site scope and quality evidence for the same production period. | `eu-2022-2508-textiles-bat` |
| `validate_mass_and_water_balance` | Material and water reconciliation | Require documented mass reconciliation for each included process and a water balance when sizing or wet treatment is included; investigate unexplained differences rather than forcing a balance. | `eu-2022-2508-textiles-bat` |
| `validate_allocation` | Shared operations | Require evidence that subdivision or direct measurement was attempted, the chosen driver has a causal or otherwise documented basis, and any economic fallback includes sensitivity information. | `iso-14044-2006` |
| `validate_direct_releases` | Wastes and emissions | Require the site input-output inventory, permit and monitoring records to be checked for relevant wastes and direct releases; each included item shall be represented by its own exchange and treatment or receiving compartment. | `eu-2022-2508-textiles-bat` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for CPC 26590 woven fabric at a declared mill-gate state |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projection |
| allowed_use | LCI and LCA modelling where yarn route, product state, geography, technology, period, packaging and allocation match the study |
| excluded_use | Other separately classified fabrics, yarn production, special or nonwoven fabrics, undeclared dyeing or finishing, garments, use phase and end of life |
| required_metadata | Canonical PCR id; CPC code; yarn route; fibre or paper-yarn identity; composition; weave; areal density; width; moisture basis; treatment state; sizing and loom technology; geography; period; packaging; allocation; UUID review status |
| required_quality_disclosure | Meter coverage and calibration; temporal representativeness; mass and water reconciliation; chemical and waste completeness; treatment destinations; direct-emission review; shared-service allocation; unresolved identities |
| update_trigger | Change in yarn route, composition, loom technology, sizing chemistry, wet-treatment recipe, utility supply, wastewater treatment, packaging, allocation method, production geography or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-26590` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 26590, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/26590 | Product identity, included route and exclusions |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | Process decomposition, production of fabric and conditional wet-treatment boundary |
| `eu-2022-2508-textiles-bat` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, http://data.europa.eu/eli/dec_impl/2022/2508/oj | Input-output inventory, water/energy/material/waste monitoring, sizing chemicals, weaving energy, wet treatment and effluent controls |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including applicable amendments, https://www.iso.org/standard/38498.html | Inventory consistency, normalization, allocation and reporting |
| `jrc-ilcd-flow-format-1-1` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, ILCD Format 1.1 Documentation — Flow and unit-group data sets, https://eplca.jrc.ec.europa.eu/LCDN/downloads/ILCD_Format_1.1_Documentation/ILCD_FlowDataSet.html and https://eplca.jrc.ec.europa.eu/EF-node/showUnitgroup.xhtml?stock=EF3_1_background_processes&uuid=93a60a57-a4c8-11da-a746-0800200c9a66&version=03.00.003 | Reference flow property interpretation and Mass/kg reference-unit relationship |
