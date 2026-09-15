---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43410-and-43420-parts-of-non-electric-bakery-ovens
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclasses 43410 and 43420; parts of non-electric bakery ovens

## 1. Scope and Applicability

This PCR applies to factory-gate production of finished parts intended exclusively or principally for furnace burners, mechanical stokers, mechanical grates, mechanical ash dischargers, industrial or laboratory furnaces and ovens, industrial induction or dielectric heating equipment, and non-electric bakery ovens. It covers an individually declared part or homogeneous part family made through one reported bill of materials and manufacturing route.

The foreground begins when purchased metals, castings, refractory ceramic components, process consumables, energy, and water enter the manufacturing site. It ends when the conforming part has passed final inspection and is ready to leave the factory gate. Complete burners, stokers, grates, ash dischargers, furnaces, ovens, bakery ovens, generic fasteners and bearings not identifiable as parts of the covered equipment, installation, use, maintenance, and end-of-life are outside this PCR.

Because the product category contains materially different parts and routes, the dataset shall declare the part identifier, host equipment, bill of materials, material grades, fabrication stages, surface condition, and included packaging. Each additional actual bill-of-materials item or generated waste not represented below shall be added to the foreground inventory as its own atomic exchange.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclasses-43410-and-43420-parts-of-non-electric-bakery-ovens |
| classification_refs | CPC 3.0: 43430 (exact) |
| covered_products | Finished replacement parts, spare parts, and identifiable subassemblies for goods in CPC 43410 and 43420, plus parts of non-electric bakery ovens |
| excluded_products | Complete equipment; electric domestic or commercial ovens; universal fasteners, bearings, valves, controls, and electrical components not specifically identifiable as covered-equipment parts; installation and repair services |
| representative_product | One finished fabricated, machined, cast, assembled, coated, or refractory-lined furnace, oven, burner, stoker, grate, ash-discharger, induction-heating, dielectric-heating, or non-electric bakery-oven part |
| production_route | Incoming-material preparation followed by the declared combination of cutting, forming, machining, joining, heat treatment, surface preparation, coating, assembly, and inspection |
| market_state | Conforming finished part at the manufacturer factory gate, with packaging inclusion explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a conforming, identifiable part for assembly into or maintenance of covered furnace, oven, burner, stoker, grate, ash-discharger, induction-heating, dielectric-heating, or non-electric bakery-oven equipment |
| How much | 1 kg of finished part |
| How well | Meets the declared drawing revision, material specification, dimensions, surface condition, inspection criteria, and intended host-equipment function |
| How long or cycle | Mass-based declared unit for an intermediate product; design life or replacement interval shall be disclosed when performance comparisons rely on service duration |
| reference_flow_link | 1 kg of conforming finished part at the manufacturer factory gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts for the goods of subclasses 43410 and 43420, parts of non-electric bakery ovens `4f1bd154-312e-48d6-8284-9ae52680a079` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part identifier and drawing revision; host-equipment type and part function; material composition and grade; production route and included operations; dimensions and finished mass; surface treatment or coating; refractory grade when applicable; factory-gate geography; production period; inspection and acceptance basis; packaging inclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net dry or as-supplied mass consistently; state which basis applies and normalize all results to 1 kg of accepted finished part. |
| `energy_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered energy and conversion factors; use 1 kWh = 3.6 MJ and do not relabel energy as mass. |
| `gas_volume_basis` | Natural gas, oxygen, and argon | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the temperature, pressure, wet/dry basis, and conversion used for every gas volume; do not combine different gases. |
| `water_mass_basis` | Process water and cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured mass or convert measured volume with a documented density and reference condition. |
| `emission_mass_basis` | Direct air emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report captured and uncaptured emissions separately when measured; disclose the test, balance, or calculation method. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and consumables accepted at the manufacturing-site receiving point, with supplier identity, product state, grade, recycled-content claim when used, and delivered quantity recorded |
| starting_condition_role | Gate-to-gate foreground starting condition; upstream extraction, material production, and inbound transport are represented by linked background datasets when included in the study goal |
| product_classification_scope | Parts covered by the reviewed semantic boundary corresponding exactly to CPC 3.0 subclass 43430, independent of directory identity |
| recursive_input_rule | A purchased input that is itself a covered part is recorded once as an atomic product input and linked to its upstream dataset; its manufacture is not reopened inside this foreground process |
| upstream_dataset_requirement | Link each purchased material, fuel, electricity, gas, water, coating, and covered-part input to a geographically, technologically, temporally, and product-state appropriate upstream dataset |
| disclosure | Declare the part family, route, site, period, included and excluded operations, upstream links, allocation choices, packaging inclusion, and every justified exclusion |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground system | Include all on-site operations from receiving the declared purchased inputs through final inspection and factory-gate readiness of the accepted part. | ec-pef-method-2021 |
| `boundary_route_condition` | Route-specific operations | Include cutting, forming, machining, welding, thermal cutting, heat treatment, blasting, cleaning, coating, and assembly only when performed for the declared part; identify every applicable operation and its exchanges. | us-epa-metal-fabrication-finishing-2008 |
| `boundary_inventory_completeness` | Inputs and outputs | Enumerate each actual bill-of-materials input, energy carrier, process gas, water stream, waste, and direct elementary emission as an atomic exchange; justify and disclose any exclusion. | ec-pef-method-2021 |
| `boundary_background_links` | Purchased inputs | Model upstream production and delivery with appropriate linked datasets rather than duplicating those processes inside the foreground. | ec-pef-method-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_part_manufacturing` | Integrated part fabrication, finishing, assembly, and inspection | `required` | Always; individual route operations and exchanges are recorded only when applicable to the declared part | Foreground production from received inputs to accepted factory-gate part | 1 kg accepted finished part |

### Process: Integrated part fabrication, finishing, assembly, and inspection (`integrated_part_manufacturing`)

The process combines only those operations actually performed for the declared part. Facility totals shall be assigned to this process only after metering, engineering allocation, or another documented calculation connects them to the production period and accepted output.

#### Inputs

##### Product flows

###### Hot-rolled carbon-steel plate (`hot_rolled_carbon_steel_plate_input`)

Record this input when the declared bill of materials uses hot-rolled carbon-steel plate for shells, frames, ducts, grates, guards, or structural sections.

- Selected flow: Hot-rolled carbon-steel plate
- Flow property / unit: Mass / kg
- Amount rule: Net purchased plate mass charged to the declared part production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources:

###### Stainless-steel sheet (`stainless_steel_sheet_input`)

Record this input when the declared bill of materials uses stainless-steel sheet for corrosion-resistant or food-contact sections.

- Selected flow: Stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Net purchased stainless-steel sheet mass charged to the declared part production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources:

###### Grey-cast-iron casting (`grey_cast_iron_casting_input`)

Record this input when a purchased grey-cast-iron casting is machined or assembled into the declared part.

- Selected flow: Grey-cast-iron casting
- Flow property / unit: Mass / kg
- Amount rule: Net casting mass issued to the declared part production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources:

###### Shaped refractory ceramic component (`refractory_ceramic_component_input`)

Record this input when a shaped refractory ceramic component is incorporated into the declared part.

- Selected flow: Shaped refractory ceramic component
- Flow property / unit: Mass / kg
- Amount rule: Net refractory ceramic component mass issued to the declared part production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources:

###### Purchased electricity (`electricity_input`)

Record electricity consumed by cutting, forming, machining, welding, ventilation, dust collection, coating, assembly, inspection, and attributable auxiliary equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or documented allocated electricity for the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources:

###### Natural gas (`natural_gas_input`)

Record gaseous natural gas when directly consumed for heat treatment, coating cure, process heating, or another declared on-site operation.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume allocated to the declared production period at stated reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources:

###### Industrial oxygen (`industrial_oxygen_input`)

Record industrial oxygen when consumed in oxy-fuel cutting or another declared manufacturing operation.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-inventory oxygen volume allocated to the declared production period at stated reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: us-epa-metal-fabrication-finishing-2008

###### Solid carbon-steel welding wire (`solid_carbon_steel_welding_wire_input`)

Record solid carbon-steel welding wire only for welding routes that use this specific filler-metal state; do not substitute flux-cored wire or electrodes.

- Selected flow: Solid carbon-steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Net wire mass issued less returned unused wire for the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources: us-epa-metal-fabrication-finishing-2008

###### Industrial argon gas (`industrial_argon_gas_input`)

Record gaseous industrial argon when used as the welding shielding gas; mixtures and carbon-dioxide shielding gas require separate atomic rows.

- Selected flow: Industrial argon gas
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-inventory gaseous argon volume allocated to the declared production period at stated reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: us-epa-metal-fabrication-finishing-2008

###### Process water (`process_water_input`)

Record process water when used for wet cleaning, rinsing, cooling, or another declared on-site part-manufacturing operation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered water mass, or metered volume converted with documented density, allocated to the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources:

###### Solvent-borne epoxy protective coating (`solvent_borne_epoxy_coating_input`)

Record this coating only when the declared part receives a solvent-borne epoxy protective layer; other coating chemistries require separate atomic rows.

- Selected flow: Solvent-borne epoxy protective coating
- Flow property / unit: Mass / kg
- Amount rule: Coating mass issued less returned unused coating for the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_consumable_records`
- Sources: us-epa-metal-fabrication-finishing-2008

##### Waste flows

No waste input is prescribed. If a recycled waste crosses into the process as a waste flow, add it as one separately identified atomic row and document its treatment role.

##### Elementary flows

No elementary input is prescribed. Add any directly measured resource extraction as its own elementary flow when it crosses the foreground boundary.

#### Outputs

##### Product flows

###### Accepted finished furnace, oven, burner, or bakery-oven part (`reference_part_output`)

Record only conforming output that has passed the declared inspection and acceptance criteria.

- Selected flow: Parts for the goods of subclasses 43410 and 43420, parts of non-electric bakery ovens `4f1bd154-312e-48d6-8284-9ae52680a079`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg reference flow of accepted finished part
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: un-cpc-3-0-structure-2025; ec-pef-method-2021

##### Waste flows

###### Carbon-steel fabrication scrap (`carbon_steel_scrap_output`)

Record segregated carbon-steel offcuts, chips, and rejected carbon-steel pieces leaving the process as waste.

- Selected flow: Carbon-steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated carbon-steel scrap mass generated in the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Stainless-steel fabrication scrap (`stainless_steel_scrap_output`)

Record segregated stainless-steel offcuts, chips, and rejected stainless-steel pieces leaving the process as waste.

- Selected flow: Stainless-steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated stainless-steel scrap mass generated in the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Refractory ceramic fabrication scrap (`refractory_ceramic_scrap_output`)

Record segregated shaped refractory ceramic offcuts and rejected pieces leaving the process as waste.

- Selected flow: Refractory ceramic fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured refractory ceramic scrap mass generated in the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Waste cutting oil (`waste_cutting_oil_output`)

Record spent oil-based cutting fluid removed from machining equipment and sent to recovery or treatment; water-miscible spent coolant requires a separate row.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: Measured waste cutting-oil mass removed in the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Spent abrasive blasting media (`spent_abrasive_blasting_media_output`)

Record blasting media removed from the blasting system and leaving for recovery or treatment.

- Selected flow: Waste abrasive blasting media `45f09708-d116-43d2-96a2-f0918bf373d3`
- Flow property / unit: Mass / kg
- Amount rule: Measured spent blasting-media mass generated in the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: us-epa-metal-fabrication-finishing-2008

###### Waste solvent-borne epoxy coating (`waste_solvent_borne_epoxy_coating_output`)

Record uncured solvent-borne epoxy coating, booth residue, and cleaning residue only when managed together as this single declared waste stream; separately managed solvents require separate rows.

- Selected flow: Waste solvent-borne epoxy coating
- Flow property / unit: Mass / kg
- Amount rule: Measured waste solvent-borne epoxy coating mass generated in the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: us-epa-metal-fabrication-finishing-2008

###### Aqueous parts-cleaning wastewater (`aqueous_parts_cleaning_wastewater_output`)

Record the aqueous wastewater stream discharged from parts cleaning and rinsing before any off-site treatment; other wastewater sources require separate rows.

- Selected flow: Aqueous parts-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered wastewater mass, or volume converted with documented density, discharged in the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to air (`carbon_dioxide_fossil_output`)

Record direct fossil carbon dioxide from on-site combustion of natural gas or another separately inventoried fossil fuel; exclude upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured direct emission or value calculated from verified fuel use, composition, and oxidation method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources:

###### Particulate matter to air, particle size unspecified (`particulate_matter_output`)

Record direct particulate matter released to unspecified air from applicable cutting, welding, machining, grinding, blasting, or coating operations after abatement.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Stack or workplace-exhaust measurement, material balance, or documented site-specific calculation for the declared production period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: us-epa-metal-fabrication-finishing-2008

###### Non-methane volatile organic compounds to air (`nmvoc_output`)

Record direct non-methane volatile organic compounds released to unspecified air from solvent-borne coating and cleaning operations after capture or abatement.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or coating-and-solvent mass balance using documented VOC content, transfer efficiency, capture, and destruction efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: us-epa-metal-fabrication-finishing-2008

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Shared fabrication, finishing, and utility processes | Prefer direct metering or subdivision by part family, production order, machine time, or batch so inputs and outputs attributable to the declared part are isolated. | ec-pef-method-2021 |
| `allocation_physical_relationship` | Shared processes that cannot be subdivided | Allocate using a documented causal physical relationship such as machine time, coating area, weld length, treated mass, or accepted output mass that represents the shared process driver. | ec-pef-method-2021 |
| `allocation_economic_fallback` | Shared processes lacking a defensible physical relationship | Use economic allocation only as a documented fallback, disclose prices, period, currency, and sensitivity, and do not use it to hide missing production records. | ec-pef-method-2021 |
| `allocation_scrap_treatment` | Metal scrap and other wastes | Report waste mass and treatment destination separately; do not assign an avoided-burden credit inside this gate-to-gate foreground unless the governing downstream study method explicitly requires and documents it. | ec-pef-method-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_consumable_records` | `integrated_part_manufacturing` | Metals, refractory components, welding wire, and coating inputs | Purchase, stores-issue, return, and bill-of-materials records | material identity; grade; supplier; received mass; issued mass; returned mass; production order; date | Reconcile bill of materials with weighed or invoiced issues and returns | kg | Per production order, aggregated monthly | At least one representative production year or the full shorter campaign | All lines producing the declared part at the reporting site | Sum net issued mass by atomic material and divide by accepted finished-part mass | Calibrated scale records, invoices, material certificates, stores reconciliation, and production-order traceability |
| `cp_energy_and_gas_records` | `integrated_part_manufacturing` | Electricity, natural gas, oxygen, and argon inputs | Meters, sub-meters, cylinder inventories, and invoices | opening and closing readings; purchases; returns; gas identity; temperature; pressure; wet/dry basis; allocation driver; production order | Use sub-metering where available; otherwise allocate documented net use with a causal physical driver | MJ or m3 | Per batch or monthly | Same period as output and at least one representative production year or full shorter campaign | All applicable equipment and auxiliary systems at the reporting site | Net use by atomic carrier or gas divided by accepted finished-part mass | Meter calibration, invoices, cylinder logs, conversion factors, and allocation worksheet |
| `cp_water_and_wastewater_records` | `integrated_part_manufacturing` | Process water input and aqueous parts-cleaning wastewater output | Water meters, batch sheets, tank-level records, and discharge records | source; meter readings; batch volume; density; discharge volume or mass; treatment destination; production order | Measure each water and wastewater stream separately; document density conversion when mass is derived from volume | kg | Per batch or monthly | Same period as output and at least one representative production year or full shorter campaign | All wet cleaning, rinsing, and cooling operations attributable to the declared part | Net stream mass divided by accepted finished-part mass | Meter calibration, tank calibration, batch sheets, discharge manifests, and mass-balance reconciliation |
| `cp_waste_records` | `integrated_part_manufacturing` | Segregated scrap, waste cutting oil, blasting media, and coating waste outputs | Scale tickets, waste manifests, container counts, and recovery records | waste identity; material grade; gross and tare mass; destination; treatment; date; production order | Weigh each atomic waste stream and reconcile storage changes over the reporting period | kg | Per shipment, aggregated monthly | Same period as output and at least one representative production year or full shorter campaign | All applicable waste collection points at the reporting site | Generation equals shipments plus closing stock minus opening stock, divided by accepted finished-part mass | Scale calibration, manifests, recycler receipts, stock records, and waste classification documentation |
| `cp_direct_air_emissions` | `integrated_part_manufacturing` | Fossil CO2, particulate matter, and NMVOC outputs | Stack tests, continuous or periodic measurements, fuel records, coating records, and abatement logs | pollutant; concentration; flow rate; test duration; fuel use and composition; VOC content; capture efficiency; destruction efficiency; operating hours; production order | Use representative measurement or a documented calculation tied to collected activity data; subtract only verified captured or destroyed quantities | kg | Per test and monthly activity record | Tests representative of the reporting period; activity data cover the same period as output | All applicable emission points and fugitive releases at the reporting site | Calculate pollutant mass for the period and divide by accepted finished-part mass | Test report, laboratory QA/QC, calibration, fuel analysis, coating technical data, abatement log, and calculation worksheet |
| `cp_finished_part_output` | `integrated_part_manufacturing` | Accepted reference-product output | Inspection, weighment, and production records | part identifier; drawing revision; accepted count; unit mass; total accepted mass; rejects; date | Weigh accepted output or multiply accepted count by verified unit mass; keep rejects separate | kg | Per production order | Same period as all allocated inputs and outputs | All lines producing the declared part at the reporting site | Sum accepted finished-part mass; normalize the inventory to 1 kg | Calibrated scale, inspection release, nonconformance log, and production reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | All inventory rows | normalized amount = period amount / accepted finished-part mass | Atomic period amount; accepted finished-part mass | Amount per 1 kg accepted finished part | ec-pef-method-2021 |
| `calc_electricity_mj` | Electricity input | electricity MJ = metered kWh × 3.6 | Metered kWh | MJ electricity |  |
| `calc_gas_reference_volume` | Natural gas, oxygen, and argon inputs | Convert measured volume to the declared temperature and pressure using the documented metering or gas-law method; do not combine gas species | Measured volume; temperature; pressure; compressibility if used | m3 at declared reference conditions |  |
| `calc_water_mass` | Water and aqueous wastewater | mass = measured volume × documented density when direct mass is unavailable | Measured volume; density | kg water or wastewater |  |
| `calc_direct_co2` | Fossil CO2 output | Apply a verified fuel-carbon and oxidation calculation to collected fuel use; exclude upstream fuel and electricity emissions | Fuel use; fuel carbon content; oxidation factor | kg direct fossil CO2 |  |
| `calc_period_reconciliation` | Shared input and waste records | net period amount = purchases or shipments + opening stock - closing stock - documented returns, with signs adjusted to the record type | Purchase, shipment, return, and stock records | Net amount attributable to the reporting period |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Reference product and material inputs | Maintain traceability from each production order to part identifier, drawing revision, host equipment, material grade, supplier, and inspection release. | Bill of materials, material certificates, traveller, inspection release, and production order |
| `dq_temporal_alignment` | All foreground exchanges | Use the same reporting period for accepted output and allocated inputs, wastes, and emissions; explain shutdowns, abnormal batches, and inventory carry-over. | Dated records and period reconciliation |
| `dq_meter_quality` | Energy, gases, water, wastewater, and weighed wastes | Use calibrated devices or document uncertainty and an alternative reconciliation when direct metering is unavailable. | Calibration certificates, meter checks, scale tickets, and uncertainty note |
| `dq_completeness` | Foreground inventory | Reconcile the bill of materials and process map against all atomic inputs, wastes, and direct emissions, including conditional operations actually performed. | Completeness checklist, mass balance, route record, and exclusion log |
| `dq_representativeness` | Published dataset | Disclose technological, geographical, and time-related representativeness and precision for the site and declared part family. | Data-quality assessment following ec-pef-method-2021 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm the output UUID, Mass property, mass unit group, 1 kg amount, part identifier, host-equipment role, and market state are mutually consistent. | un-cpc-3-0-structure-2025 |
| `validate_route_inventory` | Process map and inventory | Verify that every operation performed for the declared route is identified and that its materials, energy, gases, water, wastes, and direct emissions are recorded as atomic rows. | us-epa-metal-fabrication-finishing-2008 |
| `validate_mass_reconciliation` | Materials, accepted output, scrap, and stored work in progress | Reconcile input material mass with accepted output, segregated scrap, rejected product, process losses, and stock change; explain residuals. |  |
| `validate_energy_and_gases` | Electricity, natural gas, oxygen, and argon | Confirm meters, invoices, cylinder balances, reference conditions, conversion factors, and allocation drivers cover the same period as accepted output. |  |
| `validate_emissions` | Fossil CO2, particulate matter, and NMVOC | Confirm the emission method uses collected activity data or representative tests, accounts for verified abatement, and excludes upstream electricity emissions from direct outputs. | us-epa-metal-fabrication-finishing-2008 |
| `validate_allocation` | Shared processes | Confirm subdivision was attempted first and every retained allocation driver has a documented causal basis and sensitivity where material. | ec-pef-method-2021 |
| `validate_data_quality` | Dataset package | Confirm completeness, methodological consistency, technology, geography, time period, precision, documentation, nomenclature, and review disclosures are present. | ec-pef-method-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may serve as `background_dataset` after independent review and release controls |
| downstream_use | Construction of process or lifecyclemodel records for covered furnace, oven, burner, stoker, grate, ash-discharger, induction-heating, dielectric-heating, and non-electric bakery-oven parts |
| allowed_use | Use for the declared part family, material grades, route, site geography, technology, period, and factory-gate boundary when all required qualifiers and data-quality disclosures match |
| excluded_use | Complete equipment; unidentified generic machinery parts; different material or coating systems without adjustment; installation, use, maintenance, or end-of-life; comparative claims without functional-performance and lifetime equivalence |
| required_metadata | PCR id and version; part identifier; drawing revision; host equipment and function; material composition and grades; production route; included operations; factory-gate geography; reporting period; accepted mass; packaging inclusion; upstream dataset links; allocation method |
| required_quality_disclosure | Record coverage and reconciliation; measurement and allocation methods; uncertainty; data gaps; exclusions; technology, geography, time, and precision assessment; unresolved UUID or range limitations |
| update_trigger | Material change to drawing, host-equipment function, bill of materials, grade, route, coating, energy or gas supply, abatement, site, allocation method, or reporting period; new reviewed UUID or quantitative evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Product classification identity and separation of the parts category from complete equipment |
| `ec-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 (retrieved 2026-09-05) | Declared unit and reference flow, system boundary, allocation hierarchy, and data-quality requirements |
| `us-epa-metal-fabrication-finishing-2008` | Official guidance (`official_guidance`) | United States Environmental Protection Agency, Nine Metal Fabrication and Finishing Source Categories Area Source NESHAP brochure, https://www.epa.gov/sites/default/files/2016-06/documents/metfab_brochure.pdf (retrieved 2026-09-05) | Conditional fabrication and finishing operations, particulate and welding-fume controls, and process record structure |
