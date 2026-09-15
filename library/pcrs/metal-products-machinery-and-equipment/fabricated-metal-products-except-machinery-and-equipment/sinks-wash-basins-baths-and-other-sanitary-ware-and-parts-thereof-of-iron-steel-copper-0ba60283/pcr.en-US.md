---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.sinks-wash-basins-baths-and-other-sanitary-ware-and-parts-thereof-of-iron-steel-copper-0ba60283
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sinks, wash-basins, baths and other sanitary ware and parts thereof, of iron, steel, copper or aluminium

## 1. Scope and Applicability

This PCR covers factory-gate production of finished sinks, wash-basins, baths and other sanitary ware, and dedicated parts thereof, when the load-bearing or vessel body is made of iron, steel, copper or aluminium. It covers formed, fabricated or cast products supplied as complete fixtures or clearly identified dedicated parts.

Plastic and ceramic sanitary ware, taps and valves, cabinets, countertops, installation materials, building-site installation, use-stage water and cleaning, maintenance, demolition, and end-of-life treatment are excluded. Surface treatment, sound-deadening components and factory packaging are included when performed or added by the reporting manufacturer. A dataset shall declare the product form, complete-product or part status, principal metal and alloy grade, finish/coating, included accessories, manufacturing route, packaging state and factory gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.sinks-wash-basins-baths-and-other-sanitary-ware-and-parts-thereof-of-iron-steel-copper-0ba60283 |
| classification_refs | CPC 3.0: 42911 |
| covered_products | finished metal sinks, wash-basins, baths, sanitary vessels and dedicated parts made of iron, steel, copper or aluminium |
| excluded_products | plastic or ceramic sanitary ware; taps and valves; furniture and countertops; generic metal sheet, castings or parts not dedicated to sanitary ware |
| representative_product | factory-gate finished metal sink or wash-basin, including declared factory-applied finish, sound-deadening component and packaging |
| production_route | receipt of metal sheet or cast blank; cutting/forming or casting finishing; optional annealing and joining; washing; grinding/polishing; optional surface treatment and sound-deadening application; inspection; factory packaging |
| market_state | finished, inspected and uninstalled product or dedicated part at the manufacturing-site gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared washing, holding, draining or bathing function of a finished metal sanitary fixture, or the declared function of a dedicated part. |
| How much | 1 kg of finished product or dedicated part at the factory gate. |
| How well | Meets the declared dimensional, surface-finish, corrosion-resistance, leakage and product-specific performance specification. |
| How long or cycle | One factory-gate delivery; service life is outside this production-stage reference and shall be declared separately when used in comparative studies. |
| reference_flow_link | 1 kg net finished metal sanitary ware or dedicated part, excluding detachable transport packaging. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sinks, wash-basins, baths and other sanitary ware and parts thereof, of iron, steel, copper or aluminium `13e80a39-882f-40b2-a110-1221b48c3415` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product type; complete fixture or dedicated part; principal metal and alloy grade; net product mass; finish and coating; manufacturing route; included accessories; packaging state; manufacturing site and geography; reporting period; factory gate |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent data-package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry mass of the finished product or dedicated part; exclude detachable transport packaging from reference mass and inventory that packaging separately. |
| `metal_mass_measurement` | metal inputs, product and metal scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated receipt, issue, production and waste masses on a consistent dry basis; do not substitute nominal design mass for measured output without reconciliation. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity and convert kWh to MJ using 1 kWh = 3.6 MJ; declare whether internal generation and losses are included. |
| `gas_reference_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State pressure, temperature and dry/wet basis for reported gas volumes and apply one documented conversion basis consistently. |
| `water_mass_conversion` | process water and cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | When source records are volumetric, retain measured volume and convert to mass only with documented density and temperature assumptions. |

## 5. System Boundary

The foreground boundary starts with purchased metal sheet, coil or cast sanitary-ware blank received at the manufacturing-site gate. It includes onsite cutting, forming, annealing when used, joining, washing, grinding/polishing, conditional surface preparation, application of declared sound-deadening components, inspection and factory packaging. Upstream production and delivery of purchased materials and energy shall be represented by supplier-specific or otherwise representative cradle-to-site datasets. Building-site installation, use, maintenance and end-of-life are outside this PCR.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | purchased metal sheet, coil or cast sanitary-ware blank received at the manufacturing-site gate |
| starting_condition_role | physical starting material for foreground forming, fabrication or finishing |
| product_classification_scope | finished iron, steel, copper or aluminium sanitary ware and dedicated parts; CPC 3.0 42911 is an exact classification reference |
| recursive_input_rule | a purchased unfinished or finished input already within this product category is recorded as a distinct product input with its supplied state and upstream dataset; it is not recursively remanufactured in the foreground model |
| upstream_dataset_requirement | supplier-specific cradle-to-site datasets are preferred for metal stock, cast blanks, consumables, energy and packaging; substitutes shall match material grade, product state, geography, technology and reporting period |
| disclosure | declare product type, complete-product or part status, metal/alloy, incoming form, route, finish/coating, accessories, packaging, site, geography, reporting period and cut-off decisions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all datasets | Include controlled onsite manufacture through inspection and factory packaging and stop at the manufacturing-site gate; exclude installation, use, maintenance and end-of-life. | `elkay-undermount-sink-epd-2023` |
| `boundary_route_disclosure` | forming and finishing route | Include only route-applicable atomic exchanges and explicitly disclose annealing, joining, washing, polishing, surface treatment and sound-deadening operations. | `elkay-undermount-sink-epd-2023`; `usitc-drawn-stainless-steel-sinks-2024` |
| `boundary_upstream_inputs` | purchased inputs | Link each purchased input to a cradle-to-site dataset matching its declared material, state and supply geography. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| metal_sanitary_ware_manufacturing | Metal sanitary ware forming, finishing and packing | required | Include the actual forming or casting-finishing route and every onsite finishing and packing step controlled by the reporting manufacturer. | foreground manufacturing | 1 kg net finished metal sanitary ware or dedicated part |

### Process: Metal sanitary ware forming, finishing and packing (`metal_sanitary_ware_manufacturing`)

#### Inputs

##### Product flows

###### Further-worked stainless steel sheet (`stainless_steel_sheet`)

Record received stainless sheet when the declared steel route uses stainless flat-rolled stock.

- Selected flow: Flat-rolled products of stainless steel, further worked `add37984-82d6-4c91-85e3-9911c0135944`
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `elkay-undermount-sink-epd-2023`; `usitc-drawn-stainless-steel-sinks-2024`

###### Non-stainless steel sheet (`non_stainless_steel_sheet`)

Record one declared non-stainless steel sheet grade only when it is the product body material; its Tiangong identity remains unresolved.

- Selected flow: Non-stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources:

###### Cast-iron sanitary-ware blank (`cast_iron_sanitary_ware_blank`)

Record the received cast-iron vessel or part blank when the declared product follows a cast-iron finishing route; its Tiangong identity remains unresolved.

- Selected flow: Cast-iron sanitary-ware casting blank
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources:

###### Copper sheet (`copper_sheet`)

Record copper sheet only for the declared copper or copper-alloy sheet-forming route.

- Selected flow: Copper sheet `30cc5ca3-6198-4f82-8016-284f1b15d01b`
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources:

###### Aluminium sheet (`aluminium_sheet`)

Record aluminium sheet only for the declared aluminium or aluminium-alloy sheet-forming route.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources:

###### Purchased electricity (`electricity`)

Record metered purchased electricity used by forming, joining, finishing, washing, inspection and packing equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity allocated to the production order or reporting line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_inputs`
- Sources: `elkay-undermount-sink-epd-2023`

###### Natural gas (`natural_gas`)

Record natural gas only when it is combusted onsite for annealing, heating, curing or another declared manufacturing operation.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered standard-volume consumption for route-applicable onsite combustion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_inputs`
- Sources:

###### Process water (`process_water`)

Record supplied process water used for washing, rinsing or route-applicable surface preparation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balance water crossing the foreground boundary, net of documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_inputs`
- Sources: `elkay-undermount-sink-epd-2023`

###### Industrial oxygen (`industrial_oxygen`)

Record industrial oxygen only when purchased oxygen is consumed by a declared cutting or joining operation.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered or cylinder-inventory standard volume consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_consumables`
- Sources:

###### Sodium hydroxide (`sodium_hydroxide`)

Record sodium hydroxide only when it is consumed in a declared onsite cleaning or surface-preparation bath.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: active sodium-hydroxide mass from purchase, issue and concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_consumables`
- Sources:

###### Lubricating oil (`lubricating_oil`)

Record lubricating oil consumed as forming or drawing lubricant; exclude recovered oil recirculated internally.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: opening inventory plus receipts minus closing inventory and separately recorded recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_consumables`
- Sources: `elkay-undermount-sink-epd-2023`

###### Aluminium-oxide abrasive polishing media (`aluminium_oxide_abrasive`)

Record aluminium-oxide abrasive only when that specific abrasive is issued to grinding or polishing; its Tiangong identity remains unresolved.

- Selected flow: Aluminium-oxide abrasive polishing media
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus separately documented recoverable return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_consumables`
- Sources: `elkay-undermount-sink-epd-2023`

###### Bitumen sound-deadening pad (`bitumen_sound_deadening_pad`)

Record the mass of factory-applied bitumen sound-deadening pads only when included in the delivered product; its Tiangong identity remains unresolved.

- Selected flow: Bitumen sound-deadening pad
- Flow property / unit: Mass / kg
- Amount rule: issued pad mass incorporated in accepted finished products
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_consumables`
- Sources: `elkay-undermount-sink-epd-2023`

###### Corrugated board box (`corrugated_board_box`)

Record corrugated boxes supplied with the product at the factory gate.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured or specification-verified box mass packed with accepted products
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `elkay-undermount-sink-epd-2023`

###### Paper instruction insert (`paper_instruction_insert`)

Record printed paper instructions supplied inside the product packaging.

- Selected flow: Packaging, paper insert `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- Flow property / unit: Mass / kg
- Amount rule: measured or specification-verified insert mass packed with accepted products
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `elkay-undermount-sink-epd-2023`

###### PET product label (`pet_product_label`)

Record a polyethylene-terephthalate product label only when supplied with the factory packaging; its Tiangong identity remains unresolved.

- Selected flow: Polyethylene-terephthalate product label
- Flow property / unit: Mass / kg
- Amount rule: measured or specification-verified label mass packed with accepted products
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_inputs`
- Sources: `elkay-undermount-sink-epd-2023`

##### Waste flows

No waste input is prescribed. Record any externally received waste only as a separate, reviewed route-specific addition.

##### Elementary flows

No elementary input is prescribed; product water and purchased gases are recorded above as product flows.

#### Outputs

##### Product flows

###### Finished metal sanitary ware or dedicated part (`finished_metal_sanitary_ware`)

Record accepted finished output at the declared factory gate on the net-product mass basis.

- Selected flow: Sinks, wash-basins, baths and other sanitary ware and parts thereof, of iron, steel, copper or aluminium `13e80a39-882f-40b2-a110-1221b48c3415`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted finished output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources:

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record segregated steel offcuts, trimmings, chips and rejected steel bodies leaving the foreground boundary.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass by declared steel grade and recovery destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `usitc-drawn-stainless-steel-sinks-2024`

###### Cast-iron scrap (`cast_iron_scrap`)

Record cast-iron finishing scrap and rejected cast-iron bodies separately from steel scrap; its Tiangong identity remains unresolved.

- Selected flow: Cast-iron scrap
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass and declared recovery destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:

###### Copper scrap (`copper_scrap`)

Record segregated copper offcuts, trimmings and rejected copper bodies leaving the foreground boundary.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass and declared recovery destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:

###### Aluminium scrap (`aluminium_scrap`)

Record segregated aluminium offcuts, trimmings and rejected aluminium bodies leaving the foreground boundary.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass and declared recovery destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:

###### Cleaning wastewater (`cleaning_wastewater`)

Record wastewater from washing, rinsing and route-applicable surface preparation when it leaves the foreground process for onsite or offsite treatment.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: metered or tank-balance mass discharged, with recirculated water excluded and treatment state declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `elkay-undermount-sink-epd-2023`

##### Elementary flows

###### Fossil carbon dioxide from onsite combustion (`carbon_dioxide_fossil`)

Record direct fossil carbon dioxide measured at the stack when natural gas or another fossil fuel is combusted within the declared foreground boundary; upstream electricity emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: directly monitored fossil carbon-dioxide mass attributed to the production order; otherwise a separately sourced calculation rule is required before using a calculated value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared forming, finishing and packing operations | Avoid allocation by sub-metering production lines, products, campaigns and waste streams wherever practical. |  |
| `allocation_physical_causality` | residual shared inputs and outputs | Use a documented physical causal driver such as machine time, metered energy, processed metal mass or counted packed units; use output mass only when no more causal driver is available and disclose the sensitivity. |  |
| `allocation_scrap_at_gate` | metal scrap outputs | Report scrap mass and state at the foreground gate without avoided-burden or substitution credit in the foreground inventory; downstream recycling scenarios belong outside this unit-process result. |  |
| `allocation_multiple_products` | complete fixtures and dedicated parts made in one reporting system | Keep separately measured product families separate; when inseparable, allocate by the documented causal driver and report the allocation factor for each reference product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material_inputs | metal_sanitary_ware_manufacturing | principal metal input | purchase, receipt and production-issue records | material id; alloy/grade; form; supplier; receipt mass; issued mass; return mass; production order; date | calibrated scale plus inventory reconciliation | kg | per receipt and production order | representative continuous 12-month period | all controlled manufacturing lines | sum net issued mass by material and route, then allocate and normalize to accepted output | calibration record; supplier certificate; stock reconciliation |
| cp_utility_inputs | metal_sanitary_ware_manufacturing | electricity, gas and process water | meter and invoice records | meter id; energy or volume; start/end readings; reference conditions; process line; reporting period | calibrated submeter preferred; invoice reconciliation for shared supply | MJ; m3; kg | monthly or finer | representative continuous 12-month period | all controlled manufacturing and shared auxiliary systems | subtract documented non-production use, allocate by causal driver and normalize to accepted output | meter calibration; invoice; reconciliation |
| cp_process_consumables | metal_sanitary_ware_manufacturing | oxygen, cleaning chemical, lubricant, abrasive and pad | purchase, issue, return and concentration records | material id; composition; concentration; issued mass/volume; returned mass; production order; date | inventory balance and batch/line issue record | kg; m3 | per batch or monthly | representative continuous 12-month period | all route-applicable onsite operations | opening stock plus receipts minus closing stock and recoverable returns; convert solution to active mass where required | inventory reconciliation; composition certificate; batch record |
| cp_packaging_inputs | metal_sanitary_ware_manufacturing | factory packaging | packaging specification and packing records | component id; material; unit mass; packed unit count; product family; date | verified component mass multiplied by packed units, checked against purchases | kg | per packaging specification and monthly | representative continuous 12-month period | final packing line | aggregate each atomic component separately and normalize to accepted net product mass | scale check; packaging specification; purchase reconciliation |
| cp_product_output | metal_sanitary_ware_manufacturing | accepted finished product | final inspection and dispatch records | product id; complete/part status; metal/alloy; finish; net mass; accepted quantity; rejection quantity; date | calibrated product scale or verified bill of mass reconciled to scale checks | kg | per batch or dispatch lot | representative continuous 12-month period | all controlled output lines | sum accepted net mass by product family; exclude detachable packaging | calibration record; inspection release; dispatch reconciliation |
| cp_waste_outputs | metal_sanitary_ware_manufacturing | metal scrap and cleaning wastewater | waste scale, container, meter and transfer records | waste id; material/grade; mass or volume; treatment state; destination; date; production line | calibrated scale, wastewater meter or tank balance | kg; m3 | per shipment or monthly | representative continuous 12-month period | all controlled operations and onsite pretreatment | segregate atomic waste streams, subtract documented internal recirculation and normalize to accepted output | weigh ticket; meter calibration; transfer note; water balance |
| cp_direct_emissions | metal_sanitary_ware_manufacturing | direct fossil carbon dioxide | continuous or periodic stack-monitoring records | source id; fossil fuel; concentration or mass rate; gas flow; operating time; production order; date | calibrated direct stack measurement | kg | continuous or test campaign matched to production | representative continuous 12-month period or justified campaign | all onsite fossil-combustion sources within the foreground boundary | integrate measured mass, attribute by causal operating record and normalize to accepted output | monitor calibration; test report; operating log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | every inventory exchange | exchange quantity divided by accepted net product mass | atomic exchange total; cp_product_output accepted net mass | exchange per 1 kg reference product |  |
| `convert_electricity_to_mj` | electricity records in kWh | MJ = kWh × 3.6 | metered kWh | MJ electricity |  |
| `calculate_active_naoh` | sodium-hydroxide solution | active NaOH mass = solution mass × verified mass fraction | issued solution mass; supplier or bath concentration | kg active NaOH |  |
| `reconcile_metal_mass` | each declared metal route | received/issued metal = accepted product metal + segregated metal scrap + measured stock change + quantified residual loss | cp_material_inputs; cp_product_output; cp_waste_outputs | material-specific mass-balance closure |  |
| `allocate_shared_operations` | shared utilities and consumables | shared total × documented causal allocation factor, followed by normalization to reference mass | meter or inventory total; causal driver by product; accepted output mass | allocated exchange per 1 kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Product records shall identify product type, complete/part status, principal metal, alloy/grade, finish/coating, included accessories and net mass. | product specification; bill of materials; inspection release |
| `dq_temporal_coverage` | all foreground records | Use a continuous representative 12-month period; shorter campaigns require seasonality, maintenance and product-mix justification. | dated record inventory and production schedule |
| `dq_metering` | mass, energy, gas and water | Instruments shall have valid calibration or documented reconciliation to invoices and stock balances. | calibration certificates and reconciliation |
| `dq_completeness` | process inventory | Reconcile purchased inputs, accepted outputs, scrap, wastewater, stock change and direct emissions; document every excluded exchange and cut-off decision. | signed mass/energy/water balance and exclusion register |
| `dq_route_specificity` | conditional exchanges | Mark a conditional row not applicable only with evidence that the operation or material was absent from the declared route. | process flow diagram; production order; material issue record |
| `dq_upstream_match` | background datasets | Supplier or substitute datasets shall match material grade/state, geography, technology and time; disclose mismatches and sensitivity for major metal inputs. | supplier EPD/dataset metadata and data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm exactly 1 kg net accepted finished product and exclude detachable packaging from reference mass. |  |
| `validation_identity_qualifiers` | dataset identity | Reject a data package missing product type, complete/part status, principal metal/alloy, finish/coating, manufacturing route, packaging state, site, geography, period or factory gate. | `un-cpc-3-0-structure-2025` |
| `validation_atomic_inventory` | all inventory rows | Confirm that every selected flow is one atomic exchange and that conditional rows have explicit applicability evidence. |  |
| `validation_metal_balance` | each metal route | Investigate any unreconciled difference among issued metal, accepted product metal, segregated scrap, stock change and quantified residual loss. |  |
| `validation_utility_and_waste_balance` | water, energy and waste | Cross-check meters, invoices, tank balances, waste transfers and accepted output over the same reporting period and site scope. | `elkay-undermount-sink-epd-2023` |
| `validation_uuid_and_units` | UUID-bearing flows | Confirm public state-100 identity, flow type, classification, property, unit group and reference unit before publication; unresolved rows remain explicit review items. |  |
| `validation_source_use` | external evidence | Use the listed sources only for the stated process or classification support; do not infer empirical ranges from a single product case. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | factory-gate modelling of metal sanitary ware or dedicated parts with matching product type, principal metal/alloy, manufacturing route, finish, packaging state, geography and period |
| excluded_use | plastic or ceramic sanitary ware; taps and valves; uninstalled product service; building installation; use-stage water and cleaning; maintenance; demolition; end-of-life; unmatched metal grades or routes without sensitivity review |
| required_metadata | reference-flow qualifiers; process map; site and geography; reporting period; metal/alloy and incoming form; finish/coating; accessories; packaging state; allocation; cut-offs; UUID resolution; foreground data coverage |
| required_quality_disclosure | temporal and site coverage; measurement and calibration; mass, energy and water reconciliation; conditional-route evidence; allocation factors; upstream dataset matches; unresolved UUIDs and range-evidence needs |
| update_trigger | material change in product family, principal metal/alloy, forming or casting route, joining/annealing, finish/coating, sound treatment, packaging, site, energy system, allocation, upstream datasets or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | official product classification identity and placement of CPC 42911 |
| `elkay-undermount-sink-epd-2023` | dataset | Elkay, Environmental Product Declaration: Stainless Steel Undermount Sinks, 2023. https://zurnelkay.com/getattachment/de14ecc9-75c1-47cb-b9c7-efecf00e1d5f/102-1_EPD_Elkay-Undermount-Sink.pdf?lang=en-US | representative manufacturing sequence; inclusion of washing, energy, water, manufacturing waste, sound-deadening pads and factory packaging; one-case packaging evidence only |
| `usitc-drawn-stainless-steel-sinks-2024` | official_guidance | U.S. International Trade Commission, Drawn Stainless Steel Sinks from China, Publication 5489, January 2024. https://www.usitc.gov/sites/default/files/publications/701_731/pub5489_0.pdf | starting material and manufacturing process decomposition for cutting, drawing, annealing, welding, grinding and buffing |
