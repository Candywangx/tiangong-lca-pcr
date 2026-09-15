---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-for-measuring-length-for-use-in-the-hand-including-measuring-rods-and-tapes-b639b90a
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Instruments for measuring length, for use in the hand (including measuring rods and tapes, micrometers and callipers) n.e.c.

## 1. Scope and Applicability

This PCR covers cradle-to-factory-gate production of portable instruments whose primary function is direct hand-use measurement of length, including material measures such as rods and tapes, external or internal micrometers, and callipers not elsewhere classified. It covers analogue, mechanical-digital, and electronic-digital variants when length measurement remains the primary function.

The PCR excludes gauge blocks and other reference standards, fixed or coordinate measuring machines, geodetic or surveying instruments, non-contact electronic distance meters, instruments whose primary measurand is not length, separately supplied parts and accessories, distribution, use, repair, and end-of-life. A data package may extend the boundary, but shall disclose and separately inventory the extension.

The product is a tested and, where claimed, calibrated instrument packaged for dispatch at the manufacturer's factory gate. The declared instrument family, construction, indication type, measuring range, scale interval or resolution, accuracy class or maximum permissible error, net mass, packaging, and conformity basis distinguish concrete products within this category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-for-measuring-length-for-use-in-the-hand-including-measuring-rods-and-tapes-b639b90a |
| classification_refs | CPC 3.0: 48233 |
| covered_products | Hand-use measuring rods and tapes; callipers; internal, external, and depth micrometers; analogous portable direct-contact length instruments n.e.c. |
| excluded_products | Gauge blocks and reference standards; fixed, coordinate, geodetic, surveying, and non-contact distance-measuring systems; non-length instruments; separately supplied parts and accessories |
| representative_product | A packaged, conforming hand-held calliper, micrometer, measuring rod, or measuring tape with declared metrological characteristics |
| production_route | Receipt of semi-finished metals or polymers; precision forming, machining or moulding; conditional scale marking and surface finishing; assembly; metrological verification or calibration; packaging |
| market_state | Finished, verified, packaged instrument at the manufacturing factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and provision at factory gate of a hand-held instrument whose primary function is measuring length |
| How much | 1 kg net mass of conforming finished instrument, excluding packaging |
| How well | Declared instrument family, indication type, measuring range, scale interval or resolution, accuracy class or maximum permissible error, construction, and conformity basis |
| How long or cycle | One completed factory-gate production batch; expected service life is disclosed but is not the normalization basis |
| reference_flow_link | hand_held_length_instrument_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming instrument output |
| Reference product flow | Hand-held length measuring instrument |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | instrument family and model; analogue, dial, mechanical-digital or electronic-digital indication; measuring range; scale interval or resolution; accuracy class or maximum permissible error; principal materials, grades and recycled content; surface finish; net instrument mass; packaging specification; factory geography; production period; electricity supply mix; verification or calibration procedure and traceability; expected service life |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The reference-product UUID is intentionally unresolved: the bounded hybrid search returned no exact public state-100 hand-held length-instrument product flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and all normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net mass from conforming finished instruments after final verification and before packaging. Exclude packaging, rejected units, fixtures, and calibration artefacts. Normalize batch exchanges by total conforming net instrument mass. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter readings and allocation basis. Convert kWh to MJ using exactly 3.6 MJ per kWh; do not mix site generation, purchased electricity, and exported electricity. |
| `water_mass_conversion` | Process water and cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass measurement. When volume is measured, retain volume, temperature, and the stated density source used for conversion; do not silently assume density. |
| `material_and_waste_mass` | Material inputs and segregated wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-received input mass and as-dispatched waste mass by declared composition and state. Do not net scrap value, recycling credit, moisture, or attached fluid from the physical mass record. |

## 5. System Boundary

The foreground starts when semi-finished materials, components, process fluids, packaging, and purchased energy cross the manufacturing-site boundary. It ends with a conforming, packaged instrument ready for dispatch. Upstream production of those inputs and downstream treatment of wastes are represented by linked datasets, not recreated as foreground operations.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased semi-finished metals, polymer feedstocks or composite strip, process consumables, packaging components, and energy received at the instrument manufacturing site |
| starting_condition_role | Foreground gate for component fabrication, marking, assembly, metrological verification or calibration, and packaging |
| product_classification_scope | Portable hand-use instruments whose primary function is measuring length within the semantic boundary of this PCR |
| recursive_input_rule | A same-category instrument purchased as an input is recorded once as a product input with its own upstream dataset; its manufacture is not recursively expanded in this foreground |
| upstream_dataset_requirement | Every purchased material, consumable, energy carrier, packaging component, and externally treated waste shall link to a geographically and technologically representative upstream or treatment dataset |
| disclosure | Declare included sites, outsourced operations, cut-offs, instrument family and construction, process allocation, packaging, production period, electricity mix, waste destinations, and any extension beyond factory gate |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | cradle_to_factory_gate_foreground | Include precision forming, machining or moulding actually used; scale marking and finishing actually used; assembly; final inspection; metrological verification or calibration supporting the market claim; and packaging. | `oiml-r35-1-2007-amd-2014`; `iso-13385-1-2019`; `iso-3611-2023` |
| `boundary_variant_applicability` | route_conditioned_operations | Apply each material, process fluid, marking, and waste row only when its declared route condition is met. Do not model all instrument families or material constructions simultaneously. |  |
| `boundary_upstream_links` | purchased_inputs_and_waste_treatment | Link upstream production for every purchased input and treatment for every exported waste. Keep supplier transport outside this PCR unless the study explicitly extends the boundary and reports it separately. |  |
| `boundary_exclusions` | default_exclusions | Exclude capital equipment, buildings, employee travel, distribution, use, maintenance, repair, and end-of-life by default; disclose any material study-specific inclusion. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `precision_component_fabrication` | Precision component fabrication | `required` | Always include; apply individual material and fluid rows only to the declared product construction and fabrication route. | Foreground forming, machining, moulding, aqueous cleaning, and segregation of fabrication wastes | Net kg of conforming finished instrument attributable to the batch |
| `scale_marking_and_finishing` | Scale marking and finishing | `conditional` | Include when graduations, legends, coatings, plating, or other surface treatment occur at the reporting site. | Foreground marking and finish operations | Net kg of conforming finished instrument receiving the operation |
| `assembly_verification_packaging` | Assembly, metrological verification, and packaging | `required` | Always include assembly, final inspection, and packaging; include calibration activity when calibration is performed or claimed. | Foreground final assembly, verification or calibration, and packing | 1 kg net conforming instrument output |

### Process: Precision component fabrication (`precision_component_fabrication`)

#### Inputs

##### Product flows

###### Stainless steel sheet feedstock (`stainless_steel_sheet_input`)

Record stainless steel sheet entering fabrication only for instruments with stainless sheet components; declare alloy grade, thickness, recycled content, supplier, and as-received state.

- Selected flow: Stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the production batch, adjusted for documented returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`

###### Aluminium sheet feedstock (`aluminium_sheet_input`)

Record aluminium sheet entering fabrication only for products containing sheet aluminium; declare alloy, temper, thickness, recycled content, supplier, and surface state.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the production batch, adjusted for documented returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`

###### ABS copolymer granulate (`abs_granulate_input`)

Record moulding feedstock only for products with ABS components; declare grade, colour, additive package, recycled content, supplier, and moisture-conditioning basis.

- Selected flow: Acrylonitrile-butadiene-styrene (ABS) copolymer, granulate `8f1317c1-aa51-4524-8692-74079c923e2c`
- Flow property / unit: Mass / kg
- Amount rule: measured dry feed mass issued to the production batch, adjusted for documented returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`

###### Glass fibre reinforced polymer feedstock (`gfrp_input`)

Record composite feedstock only for applicable measuring-tape or rod constructions; declare resin system, fibre fraction, strip dimensions, coating, and supplier.

- Selected flow: glass fibre reinforced polymer `dab98d11-c76c-4d40-bac9-a3d082f1fb36`
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the production batch, adjusted for documented returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`

###### Fabrication electricity (`fabrication_electricity_input`)

Record purchased electricity used by forming, machining, moulding, cleaning, and directly supporting fabrication equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sub-metered electricity, or documented facility electricity allocated to fabrication by equipment runtime and rated or measured demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_electricity`

###### Aqueous cleaning process water (`process_water_input`)

Record process water only when aqueous cleaning or rinsing occurs in fabrication.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered water delivered to fabrication cleaning and rinsing, net of separately metered recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_water`

###### Cutting fluid (`cutting_fluid_input`)

Record cutting fluid only for machining routes; declare formulation, concentration, make-up water treatment, reuse, and inventory-change basis.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: purchases plus opening inventory minus closing inventory and documented off-site returns for the batch period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_process_fluids`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated stainless steel machining scrap (`stainless_steel_scrap_output`)

Record clean stainless steel offcuts and swarf only when separately segregated; declare alloy, attached-fluid state, and destination.

- Selected flow: Stainless steel machining scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from the process to storage, recycler, or treatment, without avoided-burden credit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`

###### Segregated aluminium machining scrap (`aluminium_scrap_output`)

Record aluminium offcuts and swarf only when separately segregated; declare alloy, attached-fluid state, and destination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from the process to storage, recycler, or treatment, without avoided-burden credit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`

###### Segregated ABS moulding scrap (`abs_moulding_scrap_output`)

Record runners, purges, and rejected mouldings only when their ABS-only composition and destination are known.

- Selected flow: ABS moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: measured segregated ABS waste mass leaving controlled internal regrind loops
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`

###### Waste cutting oil (`waste_cutting_oil_output`)

Record this flow only for oil-based cutting routes; water-miscible spent fluid shall not be assigned this identity.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: measured shipment mass plus closing stored waste minus opening stored waste for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`

###### Wastewater from cleaning (`cleaning_wastewater_output`)

Record aqueous cleaning wastewater transferred to on-site or off-site treatment; keep any direct elementary discharge as a separately speciated flow.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass, or measured volume converted using recorded temperature and density basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`

##### Elementary flows

### Process: Scale marking and finishing (`scale_marking_and_finishing`)

#### Inputs

##### Product flows

###### Water-based marking ink (`water_based_marking_ink_input`)

Record one declared water-based ink formulation only when used to print or fill graduations or legends; other inks or coatings require their own atomic flow identities.

- Selected flow: Water-based marking ink
- Flow property / unit: Mass / kg
- Amount rule: issue mass minus documented unused return for the marked production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output receiving this marking route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_marking_materials`

###### Marking and finishing electricity (`marking_electricity_input`)

Record purchased electricity used by printing, engraving, laser marking, curing, or finishing equipment actually operated.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sub-metered electricity, or documented allocation by equipment runtime and rated or measured demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output receiving this process
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_marking_electricity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Assembly, metrological verification, and packaging (`assembly_verification_packaging`)

#### Inputs

##### Product flows

###### Assembly lubricating oil (`lubricating_oil_input`)

Record lubricating oil applied to sliding, screw, hinge, or retraction mechanisms; declare grade and application.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: issue mass minus documented unused return for the assembled production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`

###### Corrugated board box (`corrugated_box_input`)

Record the mass of corrugated board boxes supplied with the reference product; declare dimensions, board grade, recycled content, and units per shipment.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: packaging bill-of-material mass reconciled to boxes consumed for conforming shipped units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`

###### Polyethylene protective film (`polyethylene_film_input`)

Record polyethylene film only when supplied with the product as protective wrapping; declare polymer grade, thickness, recycled content, and mass.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: packaging bill-of-material mass reconciled to film consumed for conforming shipped units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`

###### Assembly, verification, and packaging electricity (`assembly_electricity_input`)

Record purchased electricity used by assembly tools, electronic configuration, verification or calibration equipment, and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: sub-metered electricity, or documented allocation by equipment runtime and rated or measured demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_electricity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming hand-held length measuring instrument (`hand_held_length_instrument_output`)

Record only units that pass the declared final inspection and metrological verification or calibration criteria. Packaging mass is excluded from this product flow.

- Selected flow: Hand-held length measuring instrument
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of all conforming finished instruments in the reporting batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product`
- Sources: `un-cpc-3-0-structure-2025`; `oiml-r35-1-2007-amd-2014`; `iso-13385-1-2019`; `iso-3611-2023`

##### Waste flows

###### Used lubricating oil (`used_lubricating_oil_output`)

Record lubricating oil removed from assembly or verification equipment and sent for treatment; do not combine it with cutting fluid.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: measured shipment mass plus closing stored waste minus opening stored waste for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_wastes`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_operations | Subdivide and meter instrument families, batches, and operations whenever technically feasible. Use allocation only for genuinely shared exchanges that cannot be separately measured. |  |
| `allocation_physical_mass` | residual_shared_exchanges | Allocate residual shared material, energy, water, and waste exchanges by conforming net instrument mass. If mass does not represent the causal driver, document and use a measured driver such as equipment runtime, cycle count, or occupied process time. |  |
| `allocation_scrap_no_credit` | exported_scrap_and_waste | Report each exported waste at its measured mass and destination. Do not subtract revenue or avoided virgin production from foreground exchanges; any recycling substitution or end-of-life credit belongs in a separately disclosed downstream model. |  |
| `allocation_rejects` | rejected_instruments_and_rework | Assign rework exchanges to the recovered conforming output and assign discarded rejects to the production batch that generated them. Disclose reject and rework masses; do not count rejected units as reference product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | precision_component_fabrication | Product-specific fabrication material | supplier receipt and batch issue/return record | material identity; grade; supplier; lot; opening mass; issued mass; returned mass; closing mass; batch id | Calibrated scale records reconciled to stores ledger and bill of materials | kg | Each issue and return; aggregate monthly | At least 12 consecutive representative months or complete shorter campaign | Each reporting site and declared product family | Sum net issued mass by atomic material and batch; divide by conforming net product mass | Scale identifier and calibration status; supplier certificate; lot trace; reconciliation variance |
| `cp_fabrication_electricity` | precision_component_fabrication | Fabrication electricity | meter and equipment allocation record | meter id; opening and closing reading; kWh; equipment runtime; demand; batch id | Dedicated meter preferred; otherwise documented runtime-demand allocation from facility meter | kWh and MJ | Continuous or each batch; aggregate monthly | At least 12 consecutive representative months or complete shorter campaign | Each reporting site | Convert kWh to MJ and divide electricity attributable to fabrication by conforming net product mass | Meter calibration or verification; allocation worksheet; facility-bill reconciliation |
| `cp_fabrication_water` | precision_component_fabrication | Process water | water meter or batch charge record | source; meter id; volume or mass; temperature; density source; recirculated quantity; batch id | Dedicated meter, tank mass, or validated batch-volume record | kg, with source volume retained | Each batch or daily; aggregate monthly | At least 12 consecutive representative months or complete shorter campaign | Each reporting site | Convert volume only with recorded density basis; exclude separately metered recirculation; divide by conforming net product mass | Meter check; density basis; water balance |
| `cp_fabrication_process_fluids` | precision_component_fabrication | Cutting fluid | purchase, make-up, return, and inventory record | formulation; concentration; purchase mass; opening stock; closing stock; returned mass; batch id | Stores mass balance supported by measured additions | kg | Each addition and inventory close; aggregate monthly | At least 12 consecutive representative months or complete shorter campaign | Each reporting site and machining technology | Purchases plus opening stock minus closing stock and returns; divide by conforming net product mass | Formulation record; inventory reconciliation; scale evidence |
| `cp_fabrication_wastes` | precision_component_fabrication | Segregated fabrication waste | waste scale ticket, container log, and storage inventory | waste identity; composition; container id; gross mass; tare; opening stock; closing stock; destination; batch link | Weigh each segregated waste transfer and reconcile storage change | kg | Each transfer; aggregate monthly | Same period as production denominator | Each reporting site | Shipments plus closing stock minus opening stock, allocated to causal batch; divide by conforming net product mass | Scale ticket; tare record; waste manifest; segregation audit |
| `cp_marking_materials` | scale_marking_and_finishing | Marking material | stores issue and return record | formulation; supplier; lot; issued mass; returned mass; batch id; marked product mass | Calibrated scale or supplier-container mass difference reconciled to stores | kg | Each marked batch | Complete included marking campaigns within reporting period | Each reporting site and marking technology | Net issue mass divided by conforming net product mass receiving the operation | Formulation sheet; lot trace; scale evidence |
| `cp_marking_electricity` | scale_marking_and_finishing | Marking and finishing electricity | meter and equipment allocation record | meter id; kWh; runtime; demand; batch id; operation | Dedicated meter preferred; otherwise documented runtime-demand allocation | kWh and MJ | Continuous or each batch; aggregate monthly | Complete included marking campaigns within reporting period | Each reporting site and marking technology | Convert kWh to MJ and divide by conforming net product mass receiving the operation | Meter check; runtime log; allocation worksheet |
| `cp_assembly_materials` | assembly_verification_packaging | Assembly lubricant and packaging component | supplier and batch issue record | atomic material identity; supplier; lot; issued mass; returned mass; packaging units; batch id | Calibrated scale and packaging bill-of-material reconciliation | kg | Each batch; aggregate monthly | At least 12 consecutive representative months or complete shorter campaign | Each reporting site and declared product family | Net consumed mass by atomic material divided by conforming net product mass | Supplier record; bill of materials; scale calibration status |
| `cp_assembly_electricity` | assembly_verification_packaging | Assembly, verification, and packaging electricity | meter and equipment allocation record | meter id; kWh; runtime; demand; operation; batch id | Dedicated meter preferred; otherwise documented runtime-demand allocation | kWh and MJ | Continuous or each batch; aggregate monthly | At least 12 consecutive representative months or complete shorter campaign | Each reporting site | Convert kWh to MJ and divide by conforming net product mass | Meter check; runtime log; allocation worksheet |
| `cp_assembly_wastes` | assembly_verification_packaging | Used lubricating oil | waste shipment and inventory record | waste identity; gross mass; tare; opening stock; closing stock; destination; period | Weighed transfer reconciled with stored waste | kg | Each transfer; aggregate monthly | Same period as production denominator | Each reporting site | Shipments plus closing stock minus opening stock; divide by conforming net product mass | Scale ticket; waste manifest; inventory reconciliation |
| `cp_finished_product` | assembly_verification_packaging | Conforming reference product | production, inspection, and net-mass record | model; batch id; unit count; unit net mass; conforming mass; rejected mass; rework mass; measuring range; resolution; accuracy criterion; calibration status | Calibrated balance plus signed final inspection and metrological verification or calibration record | kg | Every batch | Complete reporting period | Each reporting site and declared product family | Sum conforming net mass only; exclude packaging and rejected mass | Balance calibration; inspection results; calibration or verification certificate and uncertainty statement where applicable |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | Each purchased material and consumable | net input = purchases or issues + opening stock - closing stock - documented returns | Purchase or issue mass; opening stock; closing stock; returns; batch linkage | Net kg input per reporting period and per kg reference flow |  |
| `calc_normalized_exchange` | Every inventory exchange | normalized exchange = exchange attributable to conforming production / conforming net instrument mass | Atomic exchange record; allocation driver where needed; conforming net instrument mass | kg or MJ exchange per 1 kg reference flow |  |
| `calc_electricity_conversion` | All electricity rows | MJ = metered kWh × 3.6; retain original kWh and meter boundary | Metered or allocated kWh | MJ electricity per 1 kg reference flow |  |
| `calc_waste_inventory_change` | Stored waste outputs | generated waste = dispatched mass + closing stored mass - opening stored mass - documented incoming third-party waste | Scale tickets; opening and closing inventory; third-party receipts | kg generated waste per 1 kg reference flow |  |
| `calc_uncertainty_report` | Metrological verification or calibration result | Identify input quantities, evaluate standard uncertainties, combine them through the declared measurement model, and state expanded uncertainty with coverage factor and coverage probability. | Calibration standard certificate; repeat observations; resolution; environmental conditions; measurement model | Traceable uncertainty statement linked to the batch or model | `jcgm-100-2008` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Preserve model, family, indication type, measuring range, scale interval or resolution, accuracy or maximum permissible error, material construction, net mass, and packaging identity. | Product specification, bill of materials, inspection record, and `un-cpc-3-0-structure-2025`; use `oiml-r35-1-2007-amd-2014`, `iso-13385-1-2019`, or `iso-3611-2023` as applicable |
| `dq_temporal_coverage` | All foreground exchanges | Use at least 12 consecutive representative months unless production is a shorter campaign; explain shutdowns, abnormal lots, missing intervals, and extrapolation. | Dated meters, ledgers, production logs, and coverage calculation |
| `dq_mass_reconciliation` | Material and waste mass | Reconcile material issues, conforming product, returned stock, work in progress, rejects, and segregated wastes by declared material. Investigate and disclose material unexplained differences. | Signed mass-balance worksheet and calibrated-scale records |
| `dq_energy_reconciliation` | Electricity | Reconcile sub-metered and allocated electricity with the facility meter or invoice for the same time and site boundary. | Meter hierarchy, invoice, runtime records, and reconciliation result |
| `dq_metrological_traceability` | Verification and calibration | Identify reference standards, calibration status, environmental conditions, measurement points, acceptance criterion, result, and measurement uncertainty when calibration is claimed. | Traceability chain, calibration or verification record, uncertainty budget following `jcgm-100-2008` |
| `dq_completeness` | Inventory | Confirm applicability of every row and document omitted materials, surface treatments, coatings, electronics, batteries, packaging components, wastes, and direct elementary emissions. Add each applicable omitted exchange as one atomic row. | Applicability checklist, bill of materials, process walk-through, waste register, and permit review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_qualifiers` | reference_product | Reject a data package missing instrument family, model, indication type, measuring range, scale interval or resolution, accuracy or maximum permissible error, net mass, construction, factory geography, production period, or conformity basis. | `un-cpc-3-0-structure-2025`; `oiml-r35-1-2007-amd-2014`; `iso-13385-1-2019`; `iso-3611-2023` |
| `validate_reference_mass` | normalization | Confirm that the denominator is conforming net instrument mass, excludes packaging and rejects, and equals the sum of batch-level conforming product records after allocation. |  |
| `validate_boundary_and_routes` | process_coverage | Confirm inclusion of all applicable fabrication, marking or finishing, assembly, verification or calibration, and packaging operations; confirm that conditional material and waste rows are activated only for the declared route. |  |
| `validate_atomic_inventory` | inventory_rows | Confirm that each exchange is one physical, chemical, waste, or energy flow with direction, flow type, property, unit, amount rule, protocol, and route condition. Reject umbrella or combined exchanges. |  |
| `validate_uuid_semantics` | tiangong_references | For every populated UUID, confirm public state 100, exact baseName, flow type, classification, product state, property, unit group, and route suitability. Keep unresolved UUID cells blank rather than substituting proxies. |  |
| `validate_reconciliation` | foreground_records | Reconcile mass, electricity, water, production, reject, and waste records to the same site and period; disclose coverage, allocation, inventory changes, and unexplained differences. |  |
| `validate_metrological_evidence` | final_verification_or_calibration | Confirm that claimed calibration or conformity is supported by model-specific results, traceability, environmental conditions, acceptance criteria, and a stated uncertainty method where applicable. | `oiml-r35-1-2007-amd-2014`; `iso-13385-1-2019`; `iso-3611-2023`; `jcgm-100-2008` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground cradle-to-factory-gate production dataset for a declared hand-held length-measuring instrument family and manufacturing route |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product carbon footprint, comparative screening, supply-chain modelling, and lifecyclemodel construction when instrument function, route, geography, period, and boundary are compatible |
| excluded_use | Unqualified comparison across different instrument families, measuring ranges, accuracy levels, service lives, construction routes, or system boundaries; representation of use, maintenance, distribution, or end-of-life without explicit extension |
| required_metadata | PCR id and version; instrument family and model; indication type; measuring range; scale interval or resolution; accuracy or maximum permissible error; principal materials and recycled content; net mass; packaging; factory geography; production period; electricity mix; process route; verification or calibration basis; expected service life; allocation; cut-offs; source and protocol ids |
| required_quality_disclosure | Temporal and site coverage; foreground versus upstream status; meter and scale calibration; material, energy, water, and waste reconciliation; sampling and allocation; uncertainty and traceability for claimed calibration; unresolved UUIDs or range evidence; exclusions and data gaps |
| update_trigger | Material change to model construction, supplier mix, recycled content, fabrication or marking technology, electronics, packaging, electricity mix, site, allocation, calibration or verification basis, waste treatment, or a change exceeding the producer's documented significance threshold |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official CPC 48233 classification identity and covered-product wording |
| `oiml-r35-1-2007-amd-2014` | standard | OIML R 35-1:2007, Material measures of length for general use, Part 1: Metrological and technical requirements, including Amendment 2014, https://www.oiml.org/en/files/pdf_r/r035-1-e07.pdf (retrieved 2026-09-07) | Material-measure scope; nominal length, scale interval, indication, reference conditions, and accuracy-class qualifiers |
| `iso-13385-1-2019` | standard | ISO 13385-1:2019, Geometrical product specifications — Dimensional measuring equipment — Part 1: Design and metrological characteristics of callipers, https://committee.iso.org/standard/71149.html?browse=tc (retrieved 2026-09-07) | Calliper analogue, dial, and digital variants and required design or metrological-characteristic disclosure |
| `iso-3611-2023` | standard | ISO 3611:2023, Geometrical product specifications — Dimensional measuring equipment — Design and metrological characteristics of micrometers for external measurements, https://committee.iso.org/standard/77951.html?browse=tc (retrieved 2026-09-07) | External micrometer analogue, mechanical-digital, and electronic-digital variants and required metrological-characteristic disclosure |
| `jcgm-100-2008` | method_factor | JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement, https://doi.org/10.59161/JCGM100-2008E (retrieved 2026-09-07) | Evaluation and reporting of uncertainty for product verification or calibration evidence |
