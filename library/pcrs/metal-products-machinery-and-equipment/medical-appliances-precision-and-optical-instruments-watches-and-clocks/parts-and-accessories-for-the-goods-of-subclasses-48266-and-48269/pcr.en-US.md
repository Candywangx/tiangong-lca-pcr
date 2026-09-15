---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48266-and-48269
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts and accessories for the goods of subclasses 48266 and 48269

## 1. Scope and Applicability

This PCR applies to a saleable part, subassembly, replacement part, or accessory designed specifically for (a) hydraulic or pneumatic automatic regulating or controlling instruments and apparatus or (b) other measuring, checking, regulating, or controlling instruments, appliances, and machines not elsewhere classified. It covers foreground manufacture from received materials and purchased components through fabrication, applicable surface treatment or electronics assembly, final inspection, and sale-unit packaging at the factory gate.

The producer shall declare the host-good subclass, part or accessory function, design revision, bill of materials, manufacturing route, surface finish, electronics content, accepted-unit mass, sale-unit packaging, geography, and reference period. This PCR excludes complete host instruments and apparatus, generic materials not yet made into a dedicated part, parts assigned to another CPC 4828 subclass, distribution, host-instrument assembly outside the reporting site, use, maintenance, and end-of-life.

Because the category is heterogeneous, this PCR does not define a default product recipe or a generic numerical inventory. The foreground package shall include each actual bill-of-material exchange and actual route-specific exchange as one atomic flow; the rows below are the common minimum pattern and apply only when their stated conditions are met.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclasses-48266-and-48269 |
| classification_refs | CPC 3.0: 48284 (exact classification context) |
| covered_products | Dedicated mechanical, hydraulic, pneumatic, electrical, or electronic parts, subassemblies, replacement parts, and accessories for goods of CPC 48266 or CPC 48269 |
| excluded_products | Complete goods of CPC 48266 or 48269; parts for other CPC 482 subclasses; generic raw materials; installation, repair, calibration, distribution, use, and end-of-life services |
| representative_product | One declared, accepted saleable part or accessory configuration with a product-specific bill of materials and route |
| production_route | Product-specific combination of forming, machining or moulding; conditional surface treatment; conditional electronics assembly; required final inspection and packaging |
| market_state | Factory-gate saleable part or accessory, tested and packaged as declared; unused |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a declared part or accessory with the specified fit, form, interface, and control or measurement-support function for one identified host-good design in CPC 48266 or 48269 |
| How much | 1 kg of accepted saleable part or accessory output at the factory gate |
| How well | Conforms to the producer's declared drawing revision, material specification, dimensional tolerances, interface requirements, and final acceptance test |
| How long or cycle | One factory-gate production reference period; service life is outside this cradle-to-gate reference flow |
| reference_flow_link | Accepted output mass of the declared product configuration, excluding rejected units and normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts and accessories for goods of subclasses 48266 and 48269 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | host-good subclass (48266 or 48269); part/accessory name and function; product and drawing revision; material grades and supplied forms; accepted-unit mass; manufacturing route and process ownership; surface finish and bath/coating chemistry when applicable; electronics and populated-board content when applicable; acceptance test; included sale-unit packaging; production geography; technology; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The reference-product UUID remains unresolved. A producer shall not substitute a complete instrument, a CPC 48281 part, or a differently classified sensing element as a proxy.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | reference product and mass-based material, waste, and packaging rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry or as-received mass consistently with the declared product and material specification. Weigh accepted output separately from rejects and normalize all inventory quantities to 1 kg accepted output. |
| `mu_piece_to_mass` | production and packaging records available only by piece or sale unit | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts using a documented representative measured mass for the same product revision and sale-unit configuration; retain sample size, scale resolution, and sampling date. |
| `mu_electricity` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter reading and convert kWh to MJ using 1 kWh = 3.6 MJ; do not mix purchased electricity with fuels or purchased heat. |
| `mu_gas_volume` | industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the supplier or meter reference conditions and convert all gas volumes to one declared temperature and pressure basis before aggregation. |
| `mu_solution_mass` | sodium hydroxide solution | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered solution mass and concentration separately; report the selected flow amount on the declared sodium-hydroxide product basis without silently converting solution mass to pure NaOH. |

## 5. System Boundary

The foreground boundary begins when specified materials, purchased parts, and consumables cross the reporting-site gate. It ends with the accepted part or accessory and declared sale-unit packaging at the factory gate. Include actual on-site forming, machining, moulding, washing, surface treatment, coating, electronics assembly, final inspection, testing, and packaging operations. Link upstream production of purchased materials, components, electricity, water, gases, chemicals, and packaging through representative upstream datasets. Exclude capital equipment unless the study goal explicitly requires it and discloses that extension.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received specified raw materials, purchased components or subassemblies, consumables, and packaging at the reporting-site gate |
| starting_condition_role | Upstream product inputs to product-specific foreground manufacturing |
| product_classification_scope | Dedicated parts and accessories for goods of CPC 48266 or CPC 48269; not the complete host goods and not parts assigned to other CPC 4828 subclasses |
| recursive_input_rule | A purchased input that is itself in this PCR category is recorded once as a product input with supplier identity, quantity, and an upstream dataset; do not recursively reproduce its manufacturing inside the receiving process |
| upstream_dataset_requirement | Use geography-, technology-, product-state-, and time-representative upstream datasets for every purchased input; disclose proxies and unresolved identities |
| disclosure | Declare process ownership, outsourced steps, material grades, supplied forms, surface chemistry, electronics content, packaging state, allocation, exclusions, and any departure from the common process pattern |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_product_specific_route` | all foreground processes | Include only the operations actually used for the declared product revision, and retain the route and process-ownership evidence. | `eu-pef-method-2021` |
| `sb_complete_inventory` | all included foreground processes | Record all known material, water, energy, product, waste, and elementary exchanges individually; do not hide route-specific exchanges in an umbrella row. | `eu-pef-method-2021` |
| `sb_surface_treatment_condition` | surface_finishing | Include aqueous electrochemical or chemical treatment, solvent cleaning, coating, degreasing, or adhesive application only when performed for the declared product, and record each actual chemical and emission species separately. | `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_forming_machining` | Material forming, machining, or polymer moulding | conditional | Include each operation performed at the reporting site to create the declared component geometry from received material | Foreground component fabrication | Accepted intermediate mass transferred to subsequent included steps |
| `surface_finishing` | Surface preparation and finishing | conditional | Include when aqueous, electrolytic, chemical, solvent, coating, degreasing, adhesive, or comparable finishing is applied | Foreground cleaning, protection, or functional finish | Finished component mass leaving the step |
| `electronics_assembly` | Electronics and populated-board assembly | conditional | Include when a populated printed wiring board or soldered electronic assembly is incorporated or produced | Foreground electronic subassembly production | Accepted populated assembly mass transferred to final inspection |
| `final_inspection_packaging` | Final assembly, inspection, testing, and sale-unit packaging | required | Always include final acceptance and output accounting; include each packaging row only when present in the declared sale state | Foreground completion and reference-product output | 1 kg accepted saleable part or accessory |

### Process: Material forming, machining, or polymer moulding (`material_forming_machining`)

#### Inputs

##### Product flows

###### Aluminium-alloy feedstock (`fm_aluminium_alloy`)

Record aluminium alloy only when it appears in the product-specific bill of materials; declare grade and supplied form.

- Selected flow: Aluminium alloy
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Mass of aluminium-alloy feedstock issued to the qualifying production orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fm_bom_receipts`
- Sources: `eu-pef-method-2021`

###### Stainless-steel sheet (`fm_stainless_steel_sheet`)

Record stainless-steel sheet only when it appears in the product-specific bill of materials; declare grade, thickness, and supplied finish.

- Selected flow: Stainless-steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Mass of stainless-steel sheet issued to the qualifying production orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fm_bom_receipts`
- Sources: `eu-pef-method-2021`

###### Polycarbonate moulding feedstock (`fm_polycarbonate_granulate`)

Include this row only when polycarbonate is moulded or otherwise consumed for the declared product.

- Selected flow: Polycarbonate granulate `0c945ca0-edf2-41f3-ba9e-23af3e75c6d1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Mass of polycarbonate granulate issued to qualifying production orders, net of documented unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fm_bom_receipts`
- Sources: `eu-pef-method-2021`

###### Forming and machining electricity (`fm_electricity`)

Include purchased electricity consumed by forming, machining, moulding, and directly associated extraction or cooling equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or physically allocated purchased electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fm_utilities`
- Sources: `eu-pef-method-2021`

###### Oxygen for oxygen-assisted cutting (`fm_industrial_oxygen`)

Include only when industrial oxygen crosses the site boundary for cutting the declared part.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Supplier or meter volume at declared reference conditions allocated to qualifying production orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fm_utilities`
- Sources: `eu-pef-method-2021`

###### Wet-machining or cleaning water (`fm_process_water`)

Include only when process water is supplied for wet machining, rinsing, or inter-operation cleaning in this process.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or tank-balance water supplied to qualifying operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fm_utilities`
- Sources: `eu-pef-method-2021`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No routine elementary input is prescribed; add each actual resource extraction separately if it crosses the foreground boundary.

#### Outputs

##### Product flows

Accepted intermediates remain inside the foreground system and are not duplicated as external product exchanges.

##### Waste flows

###### Aluminium manufacturing scrap (`fm_aluminium_scrap`)

Include when aluminium offcuts, chips, or rejected aluminium parts leave the foreground process as waste.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed outgoing aluminium scrap attributable to qualifying orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fm_waste`
- Sources: `eu-pef-method-2021`

###### Stainless-steel manufacturing scrap (`fm_stainless_steel_scrap`)

Include when stainless-steel offcuts, chips, or rejected stainless parts leave the process as waste; preserve the alloy grade.

- Selected flow: Stainless-steel manufacturing scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed outgoing stainless-steel scrap attributable to qualifying orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fm_waste`
- Sources: `eu-pef-method-2021`

###### Polycarbonate manufacturing scrap (`fm_polycarbonate_scrap`)

Include when polycarbonate sprues, runners, purge, or rejected mouldings leave the process as waste.

- Selected flow: Polycarbonate production scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed outgoing polycarbonate scrap attributable to qualifying orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fm_waste`
- Sources: `eu-pef-method-2021`

##### Elementary flows

Record any directly measured or permitted emission as a separate chemical species and compartment; none is prescribed generically.

### Process: Surface preparation and finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Sodium hydroxide for alkaline treatment (`sf_sodium_hydroxide`)

Include only when sodium hydroxide is actually consumed in alkaline cleaning, etching, or another declared bath.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Delivered sodium-hydroxide product mass added to baths for qualifying orders, with concentration retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sf_inputs`
- Sources: `eu-jrc-stm-bref-2006`

###### Surface-treatment process water (`sf_process_water`)

Include process water supplied to active baths, rinses, and associated surface-treatment operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or tank-balance process water used by qualifying surface-treatment orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sf_inputs`
- Sources: `eu-jrc-stm-bref-2006`

###### Surface-treatment electricity (`sf_electricity`)

Include purchased electricity for baths, pumps, extraction, coating, curing, and directly associated equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or physically allocated electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sf_inputs`
- Sources: `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No routine elementary input is prescribed.

#### Outputs

##### Product flows

Finished intermediates remain inside the foreground system.

##### Waste flows

###### Metal-finishing wastewater (`sf_metal_finishing_wastewater`)

Include wastewater discharged to on-site or off-site treatment from the declared surface-treatment route; report bath chemistry and measured constituents separately in supporting records.

- Selected flow: Metal-finishing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or tank-balance wastewater leaving the process for treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sf_waste`
- Sources: `eu-jrc-stm-bref-2006`

##### Elementary flows

Record each measured air, water, or soil emission by chemical species and compartment; do not use a collective emissions row.

### Process: Electronics and populated-board assembly (`electronics_assembly`)

#### Inputs

##### Product flows

###### Populated printed wiring board (`ea_populated_printed_wiring_board`)

Include only when a populated printed wiring board is purchased or transferred into the declared electronics-assembly process.

- Selected flow: Populated printed wiring board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Product-specific populated-board mass issued to qualifying orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ea_bom`
- Sources: `eu-pef-method-2021`

###### Flux-free lead-free solder (`ea_lead_free_solder`)

Include only when flux-free lead-free solder is consumed; any separately consumed flux is a distinct product flow.

- Selected flow: Lead-free solder, flux-free `a78ab927-44b9-4978-a3e3-2b9fb20d3648`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Feeder issue or inventory-depletion mass attributable to qualifying orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ea_bom`
- Sources: `eu-pef-method-2021`

###### Electronics-assembly electricity (`ea_electricity`)

Include purchased electricity for placement, soldering, extraction, inspection, and directly associated line equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or physically allocated electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ea_energy_waste`
- Sources: `eu-pef-method-2021`

##### Waste flows

No waste input is prescribed.

##### Elementary flows

No routine elementary input is prescribed.

#### Outputs

##### Product flows

Accepted electronic subassemblies remain inside the foreground system.

##### Waste flows

###### Rejected populated printed wiring board (`ea_populated_board_scrap`)

Include rejected populated boards that leave the process as waste; do not use this flow for bare-board offcuts.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed rejected populated-board mass leaving qualifying orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ea_energy_waste`
- Sources: `eu-pef-method-2021`

##### Elementary flows

Record each directly measured soldering or cleaning emission by chemical species and compartment.

### Process: Final assembly, inspection, testing, and sale-unit packaging (`final_inspection_packaging`)

#### Inputs

##### Product flows

###### Corrugated-board sale box (`fi_corrugated_board_box`)

Include only when a corrugated board box is part of the declared factory-gate sale unit.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Packaging issue mass allocated by the actual number of accepted products per sale box
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fi_pack_energy`
- Sources: `eu-pef-method-2021`

###### Polyethylene protective film (`fi_polyethylene_packaging_film`)

Include only when polyethylene film is part of the declared factory-gate sale unit; other polymers require separate atomic rows.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Film issue mass allocated by the actual number of accepted products per packaged sale unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fi_pack_energy`
- Sources: `eu-pef-method-2021`

###### Final inspection and test electricity (`fi_electricity`)

Include purchased electricity for final assembly, inspection, test benches, and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or physically allocated electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fi_pack_energy`
- Sources: `eu-pef-method-2021`

##### Waste flows

No generic waste input is prescribed.

##### Elementary flows

No routine elementary input is prescribed.

#### Outputs

##### Product flows

###### Accepted reference product (`fi_reference_product`)

Record only units that pass the declared final acceptance test and are in the declared factory-gate sale state.

- Selected flow: Parts and accessories for goods of subclasses 48266 and 48269
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Accepted output mass normalized to exactly 1 kg reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fi_output`
- Sources: `eu-pef-method-2021`

##### Waste flows

Record each rejected final product by its actual material or assembly waste identity; do not create an umbrella reject row.

##### Elementary flows

No routine elementary output is prescribed.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | shared or multifunctional foreground operations | Avoid allocation by separately metering, timing, weighing, or otherwise subdividing processes and collecting only the exchanges directly attributable to the declared product. | `eu-pef-method-2021` |
| `al_physical_relationship` | shared exchanges that cannot be subdivided | Allocate using a documented causal physical relationship, such as machine time and rated or measured power for electricity, bath loading or treated surface area for finishing, or accepted mass throughput when it represents resource use. | `eu-pef-method-2021` |
| `al_other_relationship` | exchanges without a defensible physical relationship | Use another relationship, including economic allocation, only after documenting why subdivision and physical allocation are infeasible; report the data period, products, factors, and sensitivity. | `eu-pef-method-2021` |
| `al_scrap_no_credit` | manufacturing scrap and waste | Report scrap as an outgoing waste flow at the foreground boundary. Do not subtract an avoided-production credit inside this gate-to-gate inventory unless a separately declared downstream system-expansion study requires it. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fm_bom_receipts` | `material_forming_machining` | product-specific material inputs | approved bill of materials, purchase/receipt records, material issue and return records | product_revision; production_order; material_name; grade; supplied_form; quantity_issued; unopened_return; unit | Reconcile approved bill of materials to warehouse issues and returns for qualifying orders | kg | each production order, aggregated monthly | representative continuous 12 months or all batches if production is shorter | all reporting-site forming, machining, and moulding lines | Sum issued mass minus documented unopened returns; allocate only to qualifying orders and normalize by accepted output mass | controlled bill of materials, material certificates, calibrated scales, issue/return audit trail |
| `cp_fm_utilities` | `material_forming_machining` | electricity, industrial oxygen, and process water | utility meters, supplier invoices, cylinder/tank balances, machine logs | meter_id; opening; closing; unit; reference_conditions; machine_hours; production_order; allocation_driver | Prefer submetering; otherwise reconcile site totals and apply a documented physical driver | kWh, m3, kg | meter period and each cylinder/tank change | representative continuous 12 months or all batches if shorter | included forming, machining, moulding, extraction, and cooling equipment | Convert electricity to MJ; standardize gas volume; allocate by causal driver; normalize by accepted output mass | meter calibration, invoice reconciliation, machine log, reference-condition record |
| `cp_fm_waste` | `material_forming_machining` | material-specific manufacturing scrap | scrap-bin weights, waste transfer notes, reject records | material; alloy_or_polymer; source_order; gross_weight; tare; destination; date | Weigh each segregated material stream and reconcile with production mass balance | kg | each dispatch or batch | same period as material inputs | all included fabrication lines | Sum net outgoing mass by material and normalize by accepted output mass | calibrated scale, tare record, transfer note, material segregation check |
| `cp_sf_inputs` | `surface_finishing` | bath chemicals, rinse water, and electricity | bath make-up and replenishment logs, chemical receipts, meters | bath_id; chemistry; product_concentration; addition_mass; water_meter; electricity_meter; treated_order; treated_mass | Record each chemical separately and reconcile bath additions and utility meters to treated orders | kg, kWh | each addition and meter period | representative continuous 12 months or all campaigns if shorter | all included surface-treatment lines | Sum qualifying additions and metered utilities; convert electricity to MJ; normalize by accepted output mass | bath log, concentration analysis, supplier certificate, meter calibration |
| `cp_sf_waste` | `surface_finishing` | metal-finishing wastewater | discharge meter, tank transfer, wastewater manifest, analytical results | stream_id; volume_or_mass; density; bath_origin; constituents; destination; date | Meter or tank-balance each distinct wastewater stream and retain analytical characterization | kg | each discharge or transfer | same period as surface-treatment inputs | included baths, rinses, and local treatment | Convert to mass using measured density when needed; sum by distinct waste identity and normalize by accepted output mass | calibrated meter, tank reconciliation, laboratory report, waste manifest |
| `cp_ea_bom` | `electronics_assembly` | populated board and solder inputs | bill of materials, board receipts/issues, solder feeder and inventory records | product_revision; board_identity; board_mass; solder_identity; alloy; flux_state; issue_mass; return_mass; order | Reconcile product-specific electronics bill of materials to physical issues and returns | kg | each production order | representative continuous 12 months or all batches if shorter | included electronics assembly lines | Sum net issue mass by atomic input and normalize by accepted output mass | approved bill of materials, supplier certificate, calibrated balance, feeder reconciliation |
| `cp_ea_energy_waste` | `electronics_assembly` | electricity and populated-board rejects | line meter, equipment logs, reject log, reject weights | meter_id; kWh; line_hours; product_order; reject_board_identity; reject_mass; disposition | Submeter or physically allocate line electricity and weigh populated-board rejects separately | kWh, kg | shift or batch | same period as electronics inputs | included placement, soldering, extraction, and inspection equipment | Convert electricity to MJ; sum reject mass; normalize both by accepted output mass | meter calibration, equipment log, reject authorization, scale record |
| `cp_fi_pack_energy` | `final_inspection_packaging` | packaging and final-stage electricity | packaging specifications, issue records, test-bench meters, accepted counts | packaging_identity; packaging_mass; units_per_pack; issue_quantity; kWh; accepted_count; product_revision | Weigh packaging samples for the same specification and reconcile issues; meter or physically allocate final-stage electricity | kg, kWh | each packaging lot and meter period | representative continuous 12 months or all batches if shorter | final assembly, test, inspection, and sale-unit packaging | Allocate packaging by actual packed units; convert electricity to MJ; normalize by accepted output mass | packaging specification, sample-weigh record, issue reconciliation, meter calibration |
| `cp_fi_output` | `final_inspection_packaging` | accepted reference-product output | final inspection record, serial/lot register, accepted count, unit weights | product_revision; lot; accepted_count; rejected_count; unit_mass_sample; total_accepted_mass; test_result | Count only accepted units and determine output mass by total weighing or representative unit-mass sampling | kg | each lot | same period as all inventory records | all final acceptance points in the reporting site | Sum accepted output mass; use it as the denominator for all normalized exchanges | approved acceptance criteria, calibrated scale, sampling record, signed release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = qualifying allocated amount / accepted reference-product mass | allocated exchange amount; accepted output mass from `cp_fi_output` | amount per 1 kg accepted reference product | `eu-pef-method-2021` |
| `calc_electricity_conversion` | `fm_electricity`; `sf_electricity`; `ea_electricity`; `fi_electricity` | electricity (MJ) = metered electricity (kWh) × 3.6 | metered kWh | MJ of purchased electricity |  |
| `calc_piece_mass` | count-based material, packaging, or output records | mass = count × representative measured mass per piece for the same revision and specification | count; sample mean mass; sample size | kg |  |
| `calc_material_mass_balance` | aluminium, stainless steel, and polycarbonate routes | opening inventory + receipts - closing inventory = accepted internal/output mass + separately identified scrap + separately identified retained material; investigate unexplained difference | inventory, receipt, issue, return, output, and waste weights | reconciled material quantities and unexplained difference | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and all bill-of-material rows | Use one declared product and drawing revision; retain host-good subclass, function, accepted specification, and material/component identifiers. | approved drawing, bill of materials, specification, acceptance record |
| `dq_temporal_alignment` | all rows | Use the same representative reporting period for inputs, outputs, allocation drivers, and accepted production; disclose shutdowns, prototypes, rework, and abnormal campaigns. | dated meters, orders, logs, and production reconciliation |
| `dq_measurement` | mass, energy, water, and gas records | Use calibrated or verified instruments appropriate to the measured quantity; record resolution, calibration status, and any conversion assumptions. | calibration certificate, meter check, sample-weigh record |
| `dq_completeness` | all included processes | Reconcile the product-specific bill of materials, utilities, outputs, and each material-specific waste stream; explain omissions and mass-balance differences. | signed reconciliation and variance investigation |
| `dq_representativeness` | upstream datasets and allocations | Document geography, technology, time, product state, supplier, and allocation driver; disclose every proxy and why it is used. | dataset metadata, supplier record, allocation worksheet |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity_boundary` | dataset identity | Confirm the output is a dedicated part or accessory for a declared CPC 48266 or 48269 host good, not a complete instrument or a part classified elsewhere. | `un-cpc-3-0-structure-2025` |
| `vr_reference_output` | reference flow | Confirm accepted output equals 1 kg after normalization and rejected units are excluded from the reference product. | `eu-pef-method-2021` |
| `vr_route_condition` | process map and inventory | Confirm every included process and flow occurred for the declared revision, and every non-applicable conditional row is supported by route or bill-of-material evidence. | `eu-pef-method-2021`; `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020` |
| `vr_atomic_flows` | inventory | Reject umbrella material, utility, fuel, chemical, waste, wastewater, or emissions rows; each exchange must have one physical or chemical identity and one direction. | `eu-pef-method-2021` |
| `vr_uuid_semantics` | UUID-bearing flows | Confirm flow type, baseName, classification, product state, property, unit group, and foreground qualifier compatibility; do not use a proxy UUID. |  |
| `vr_mass_reconciliation` | material-forming routes | Reconcile each declared aluminium, stainless-steel, and polycarbonate input with accepted material, separately identified scrap, retained inventory, and explained difference. | `eu-pef-method-2021` |
| `vr_allocation` | shared processes | Verify subdivision was attempted first and every remaining allocation driver is causal, period-aligned, documented, and consistently applied. | `eu-pef-method-2021` |
| `vr_bilingual_alignment` | PCR implementation metadata | Preserve process ids, row ids, rule ids, UUIDs, controlled values, reference amount, and source ids across English and Chinese implementation views. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | product-specific foreground manufacturing dataset for one declared part or accessory configuration |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Cradle-to-gate modelling of the declared CPC 48284 part or accessory and its use as an input to a compatible host-good lifecycle model |
| excluded_use | Generic representation of all instrument parts; complete CPC 48266 or 48269 goods; other CPC 4828 parts; use-stage, maintenance, distribution, or end-of-life claims without added downstream modelling; comparative assertion across unlike designs without equivalence review |
| required_metadata | canonical PCR id; CPC context; host-good subclass; part/accessory function; product and drawing revision; accepted-unit mass; bill of materials; route; process ownership; surface chemistry; electronics content; packaging state; geography; technology; reference period; allocation; data quality; unresolved UUIDs and proxies |
| required_quality_disclosure | primary-data coverage by process and flow; meter and scale status; bill-of-material reconciliation; material mass-balance differences; allocation drivers; upstream dataset representativeness; exclusions; abnormal production; wastewater characterization; proxy and UUID gaps |
| update_trigger | change in host-good applicability, product revision, material grade or mass, supplied form, process route, surface chemistry, electronics design, packaging, supplier geography or technology, allocation basis, reference period, or a newly confirmed exact Tiangong UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, `https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv` (retrieved 2026-09-07) | Official CPC 48284 identity and separation from complete goods in subclasses 48266 and 48269 |
| `eu-pef-method-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, consolidated 30 December 2021, `https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230` (retrieved 2026-09-07) | Functional unit and reference flow; product-specific bill of materials and manufacturing data; complete process input/output collection; allocation hierarchy; data quality |
| `eu-jrc-stm-bref-2006` | official_guidance | European Commission Joint Research Centre, Surface Treatment of Metals and Plastics BREF, adopted August 2006, `https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics` (retrieved 2026-09-07) | Conditional inclusion of water-based electrolytic and chemical surface-treatment processes and associated activities |
| `eu-jrc-sts-bref-2020` | official_guidance | European Commission Joint Research Centre, Surface Treatment Using Organic Solvents BREF, adopted December 2020, `https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation` (retrieved 2026-09-07) | Conditional inclusion of coating, cleaning, degreasing, and adhesive application for metal and plastic goods |
