---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43142-including-regulators
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclass 43142, including regulators

## 1. Scope and Applicability

This PCR applies to factory production of finished parts designed principally for hydraulic turbines or water wheels and to dedicated turbine governing equipment (regulators or governors). Covered products include runner and blade parts, guide and regulating parts, shafts and housings when supplied as dedicated hydraulic-turbine parts, and mechanical, hydraulic, electrohydraulic, or electronic governing units supplied as CPC 43154 products.

The foreground boundary begins with received materials, blanks, purchased components, consumables, and packaging at the manufacturing site and ends with a conforming finished part or regulator released at the factory gate. Upstream production is represented by linked supplier or background datasets. The PCR excludes complete hydraulic turbines and water wheels, generators, civil works, penstocks, site erection, transport after the factory gate, use, maintenance, repair, and end-of-life. A generic fastener, valve, pump, electronic device, or metal product is excluded unless it is supplied and documented as a dedicated part of the covered goods.

The category is heterogeneous. The foreground data package shall identify the exact part or regulator, its material and manufacturing route, and every process that is applicable. It shall not average mechanically dissimilar part families or regulator designs unless the declared product mix, output mass, allocation, and variability are reported.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43142-including-regulators |
| classification_refs | CPC 3.0: 43154, exact mapping context |
| covered_products | Finished parts dedicated to hydraulic turbines or water wheels; turbine regulators or governors; accepted spare parts newly manufactured to the same factory-gate product specification |
| excluded_products | Complete hydraulic turbines or water wheels; generators; civil works and water conveyance structures; site installation; maintenance and repaired parts; generic components not documented as dedicated covered parts |
| representative_product | One finished hydraulic-turbine runner, blade, guide component, shaft, housing, or dedicated turbine regulator represented on a net mass basis |
| production_route | Material preparation and forming, machining and fabrication, route-dependent heat treatment and surface treatment, route-dependent regulator assembly and testing, final inspection, and packaging |
| market_state | New, conforming finished part or regulator at the factory gate, including packaging when supplied with the product |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a new, conforming part dedicated to a hydraulic turbine or water wheel, or a dedicated turbine regulator, ready for dispatch from the manufacturing site |
| How much | 1 kg net mass of accepted finished product; supplied packaging is inventoried separately and excluded from net product mass |
| How well | The declared part number or regulator model meets the applicable drawing, material grade, dimensional, surface, balance, pressure, electrical, and functional acceptance requirements |
| How long or cycle | One production-lot release at the factory gate; service life and use cycles are outside this reference flow and require a separate downstream scenario |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net accepted finished product |
| Reference product flow | Parts for the goods of subclass 43142, including regulators `253ad616-0836-4ed6-a457-935c76a309a3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part or regulator type and part number/model; net finished mass; primary material and grade; forming and fabrication route; heat-treatment state; surface-treatment or coating system; regulator control and hydraulic configuration when applicable; acceptance tests; site and country; production period; packaging state; recycled-content claim basis |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference flow comment, the product description, or an equivalent field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate the accepted finished product without separately supplied packaging, temporary transport fixtures, test fluids drained before dispatch, and rejected units. Reconcile lot output to released quantity. |
| `mass_input_normalization` | Material, chemical, waste, emission, and packaging rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the net amount crossing the foreground boundary to 1 kg accepted product. Record moisture, concentration, solids fraction, reuse, and returned quantities separately when they affect net mass. |
| `electricity_conversion` | Electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter readings in kWh and convert to the Tiangong reference unit using 1 kWh = 3.6 MJ. Do not include upstream grid losses in the foreground meter value. |
| `gas_reference_conditions` | Natural gas, industrial oxygen, and unresolved argon rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume with temperature, pressure, dry or wet basis, composition or purity, and conversion to the supplier billing reference conditions. |
| `product_mix_weighting` | Multi-product reporting period | Mass | kg | Weight process inputs and outputs by accepted product mass only after separating route-specific records. Disclose included part families and regulator models and test sensitivity to materially different products. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | Include all directly controlled operations from receipt of materials, blanks, components, and consumables through forming, machining, fabrication, applicable heat and surface treatment, regulator assembly, testing, final inspection, and packaging up to release at the factory gate. | `us-epa-mpm-development-document-2003`; `ridha-et-al-2023-hydraulic-turbine-failures` |
| `boundary_route_declaration` | process_applicability | Declare each process as applicable or not applicable for the reported product. Do not substitute an unreported average route for casting, forging, plate fabrication, machining, welding, heat treatment, coating, or regulator assembly. | `jrc-sf-bref-2024`; `ridha-et-al-2023-hydraulic-turbine-failures` |
| `boundary_upstream_links` | purchased_inputs | Link every purchased material, blank, component, energy carrier, chemical, and packaging exchange to a geographically and technologically representative upstream dataset; keep the received quantity visible as a product input. | `ec-pef-method-2021` |
| `boundary_waste_and_emissions` | foreground_releases | Include measured or calculated wastes, wastewater, and direct air emissions generated by applicable foreground operations after subtracting only documented internal reuse or recirculation. | `us-epa-mpm-development-document-2003`; `jrc-sf-bref-2024` |
| `boundary_exclusions` | downstream_and_capital_items | Exclude transport after the factory gate, site erection, use, maintenance, repair, and end-of-life. Exclude capital equipment unless the study goal explicitly includes it; disclose every such exclusion and do not exclude production tooling consumed as an input. | `ec-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials, blanks, purchased components, energy carriers, chemicals, and packaging received at the reporting manufacturing site |
| starting_condition_role | Foreground gate-to-gate starting point with upstream burdens carried by linked supplier or background datasets |
| product_classification_scope | Dedicated finished parts for hydraulic turbines and water wheels and dedicated turbine regulators within CPC 43154; classification is mapping context, not PCR identity |
| recursive_input_rule | If an input is itself a covered CPC 43154 part, keep it as a visible purchased product input and link its upstream dataset; do not unfold it into the same foreground process or count its manufacture twice |
| upstream_dataset_requirement | Each purchased input shall have a supplier-specific or representative upstream dataset with declared geography, technology, product state, and temporal coverage |
| disclosure | Declare part or regulator identity, route, site, period, product mix, upstream dataset choices, cut-offs, allocation, internal recycling, waste treatment, packaging, and all not-applicable process decisions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `manufacturing_and_assembly` | Material preparation, machining, fabrication, and mechanical assembly | `required` | Always include; mark individual atomic exchanges not applicable only when production records demonstrate their absence | Foreground manufacture of the dedicated part or mechanical portion of a regulator | Accepted output mass from the process allocated to the reference product |
| `heat_treatment` | Heat treatment and quenching | `conditional` | Include when the product drawing, material specification, welding procedure, or stress-relief route requires in-house heat treatment | Foreground thermal treatment | Treated product mass and furnace batch |
| `surface_treatment` | Cleaning and protective surface treatment | `conditional` | Include when alkaline cleaning, rinsing, blasting, painting, or another protective finish is performed at the reporting site | Foreground surface preparation and coating | Treated surface area and accepted product mass |
| `governor_assembly_and_test` | Turbine regulator assembly, fluid filling, and functional testing | `conditional` | Include for mechanical, hydraulic, electrohydraulic, or electronic turbine regulators assembled or tested at the reporting site | Foreground regulator production and acceptance test | Accepted regulator mass and tested unit count |
| `final_inspection_and_packaging` | Final inspection, release, and packaging | `required` | Always include; packaging rows apply only when the identified package crosses the factory gate with the product | Foreground release of the reference product | 1 kg net accepted product |

### Process: Material preparation, machining, fabrication, and mechanical assembly (`manufacturing_and_assembly`)

#### Inputs

##### Product flows

###### Steel plate input (`steel_plate`)

Record steel plate issued to the covered product when plate fabrication is used.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Net steel plate issued less documented same-grade returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `ridha-et-al-2023-hydraulic-turbine-failures`

###### Stainless steel plate input (`stainless_steel_plate`)

Record stainless steel plate only for products whose BOM and grade certificate require it; the Tiangong flow UUID remains unresolved.

- Selected flow: Stainless steel plate
- Flow property / unit: Mass / kg
- Amount rule: Net stainless steel plate issued less documented same-grade returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `ridha-et-al-2023-hydraulic-turbine-failures`

###### Fabrication electricity (`electricity_fabrication`)

Record electricity used by cutting, machining, grinding, welding, balancing, and mechanical assembly equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Allocated submetered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_meters`
- Sources: `us-epa-mpm-development-document-2003`

###### Industrial oxygen for thermal cutting (`industrial_oxygen`)

Record oxygen only when thermal cutting or another documented oxygen-consuming operation is used.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-inventory oxygen consumed at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_consumables`
- Sources: `us-epa-mpm-development-document-2003`

###### Argon shielding gas (`argon_shielding_gas`)

Record argon only when the declared welding procedure uses argon; the Tiangong flow UUID remains unresolved.

- Selected flow: Argon shielding gas
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-inventory argon consumed at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_consumables`
- Sources: `ridha-et-al-2023-hydraulic-turbine-failures`

###### Flux-cored welding wire (`flux_cored_wire`)

Record flux-cored wire only for a declared flux-cored welding procedure.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Wire issued less documented returns and recoverable unused wire
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `ridha-et-al-2023-hydraulic-turbine-failures`

###### Cutting fluid make-up (`cutting_fluid`)

Record fresh cutting fluid added to machining systems after subtracting documented return to inventory.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Purchased or issued cutting-fluid make-up attributable to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_consumables`
- Sources: `us-epa-mpm-development-document-2003`

###### Machining process water (`process_water_machining`)

Record process water added to machining, washing, or hydrostatic testing systems within this process.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water less documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `us-epa-mpm-development-document-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record segregated ferrous offcuts, chips, and rejected metal transferred from the foreground system as steel scrap.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outgoing scrap less documented internal remelting or reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfers`
- Sources: `jrc-sf-bref-2024`

###### Spent machining coolant (`spent_coolant`)

Record spent coolant removed from machining systems and transferred for treatment or recovery.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or tank-balance quantity transferred out of the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfers`
- Sources: `us-epa-mpm-development-document-2003`

##### Elementary flows

###### Particulate matter from grinding or blasting (`particulate_matter`)

Record controlled and fugitive particulate releases after abatement from applicable grinding, polishing, or blasting operations.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or calculation from collected operating records and a documented site-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `jrc-sf-bref-2024`

### Process: Heat treatment and quenching (`heat_treatment`)

#### Inputs

##### Product flows

###### Natural gas for furnace heat (`natural_gas_heat_treatment`)

Record gaseous natural gas only when an on-site fuel-fired furnace serves the covered product.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered furnace natural gas allocated to the treated batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: `jrc-sf-bref-2024`

###### Heat-treatment electricity (`electricity_heat_treatment`)

Record furnace, quench-system, and auxiliary electricity for the treated batch.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Allocated submetered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_meters`
- Sources: `jrc-sf-bref-2024`

###### Quench process water (`process_water_quench`)

Record fresh process water added to a water-quench system after internal recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered quench make-up water attributable to the treated batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `jrc-sf-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from furnace natural gas (`carbon_dioxide_fossil_heat_treatment`)

Record direct fossil carbon dioxide from on-site natural-gas combustion; exclude upstream supply-chain emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from collected fuel use and documented fuel carbon content
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `jrc-sf-bref-2024`

### Process: Cleaning and protective surface treatment (`surface_treatment`)

#### Inputs

##### Product flows

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide_surface_treatment`)

Record sodium hydroxide only when alkaline cleaning or bath treatment uses it.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Active sodium hydroxide added to the bath, derived from product mass and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment`
- Sources: `us-epa-mpm-development-document-2003`

###### Surface-treatment process water (`process_water_surface_treatment`)

Record fresh process water added for cleaning and rinsing after internal recirculation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered cleaning and rinse make-up water attributable to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `us-epa-mpm-development-document-2003`

###### Industrial maintenance coating (`industrial_maintenance_coating`)

Record formulated industrial maintenance coating applied to the product; do not substitute resin or pigment inputs unless coating formulation occurs inside the foreground boundary.

- Selected flow: Industrial Maintenance Coatings `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- Flow property / unit: Mass / kg
- Amount rule: Coating issued less returned coating, with solids and solvent or water fractions declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment`
- Sources: `ridha-et-al-2023-hydraulic-turbine-failures`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Oily metal-finishing wastewater (`oily_metal_finishing_wastewater`)

Record the segregated aqueous waste stream containing oil generated by applicable cleaning, rinsing, or surface-treatment operations; the Tiangong flow UUID remains unresolved.

- Selected flow: Oily metal-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or tank-balance quantity transferred to on-site or off-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfers`
- Sources: `us-epa-mpm-development-document-2003`

##### Elementary flows

### Process: Turbine regulator assembly, fluid filling, and functional testing (`governor_assembly_and_test`)

#### Inputs

##### Product flows

###### Printed wire board for regulator control (`printed_wire_board`)

Record a printed wire board only when it is incorporated into the covered turbine regulator.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: Accepted board mass incorporated according to the regulator BOM
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `china-tax-scientific-import-list-2026`

###### Hydraulic fluid fill (`hydraulic_fluid`)

Record hydraulic fluid that remains in the regulator at dispatch plus documented test-fluid losses crossing the foreground boundary.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: Filled mass plus unrecovered test loss less drained and reused fluid
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_regulator_assembly`
- Sources: `china-tax-scientific-import-list-2026`

###### Regulator assembly and test electricity (`electricity_governor_test`)

Record electricity for regulator assembly equipment, hydraulic power units, control cabinets, and acceptance tests.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Allocated submetered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_meters`
- Sources: `china-tax-scientific-import-list-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Final inspection, release, and packaging (`final_inspection_and_packaging`)

#### Inputs

##### Product flows

###### Paper box (`paper_box`)

Record a paper box only when it is supplied with the covered product and crosses the factory gate.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: Mass of paper boxes issued to accepted product shipments
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Wooden pallet (`wooden_pallet`)

Record a EURO wooden pallet only when that pallet type accompanies the product across the factory gate; declare reuse count and ownership transfer.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Pallet mass allocated by documented trips when reused, otherwise full outgoing pallet mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Final-inspection electricity (`electricity_final_inspection`)

Record electricity used by final dimensional checks, non-destructive tests, pressure tests, balancing, and release equipment not already assigned to another process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Allocated submetered electricity converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_meters`
- Sources: `us-epa-mpm-development-document-2003`; `ridha-et-al-2023-hydraulic-turbine-failures`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished part or regulator (`reference_product`)

Record only accepted net finished product released from the factory gate; rejected products remain in waste or rework balances.

- Selected flow: Parts for the goods of subclass 43142, including regulators `253ad616-0836-4ed6-a457-935c76a309a3`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net accepted finished product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_processes | Avoid allocation by separating production orders, batches, machines, meters, tanks, and test benches whenever records permit direct assignment to the covered product. | `ec-pef-method-2021` |
| `allocation_physical_driver` | inseparable_shared_burdens | When subdivision is not possible, allocate using a documented causal physical driver: machine or furnace time and power for energy, treated mass for batch processes, treated area for surface treatment, or measured throughput for utilities. Demonstrate the relationship and apply it consistently. | `ec-pef-method-2021` |
| `allocation_economic_last_resort` | no_physical_relationship | Use economic allocation only when subdivision and a relevant physical relationship are demonstrably unavailable. Use prices at the co-production point, disclose the period and currency, and provide sensitivity to a physical alternative. | `ec-pef-method-2021` |
| `allocation_scrap_status` | metal_scrap_and_rework | Keep internal rework and internal remelting inside the foreground balance. Record material leaving the site as waste unless documented product status and ownership transfer justify a co-product; disclose the chosen recycling or burden convention without double credit. | `ec-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `manufacturing_and_assembly`; `governor_assembly_and_test` | Metals, welding consumables, and regulator boards | BOM, material issue, return, supplier certificate | item id; grade; issued mass; returned mass; lot; supplier; accepted output | Reconcile ERP/BOM quantities to warehouse issue and return records | kg | Per production order | Complete reporting period | All in-scope lines | Sum net issues by atomic flow and allocate only under section 7 | Signed issue/return records and material certificates |
| `cp_energy_meters` | all applicable processes | Electricity and natural gas | Calibrated meter or submeter | opening and closing reading; unit; timestamp; equipment; batch; reference conditions for gas | Read dedicated meters; where shared, retain operating time and rated or measured power | kWh; m3 | Per batch or shift | Complete reporting period | All in-scope equipment | Subtract documented non-production use, apply section 7, convert electricity to MJ | Meter id, calibration status, and reconciliation to invoice |
| `cp_gas_consumables` | `manufacturing_and_assembly` | Industrial oxygen and argon | Bulk meter or cylinder inventory | gas identity; purity; opening stock; receipts; closing stock; returns; temperature; pressure | Mass or volume balance by gas identity | m3 | Per batch and monthly reconciliation | Complete reporting period | Welding and cutting stations | Convert to declared supplier reference conditions and allocate by documented use | Supplier certificates, cylinder log, and meter check |
| `cp_process_consumables` | `manufacturing_and_assembly` | Cutting fluid | Purchase, issue, make-up, return, and stock record | product id; formulation; concentration; opening stock; receipts; closing stock; return | Consumable mass balance | kg | Per batch with monthly reconciliation | Complete reporting period | All machining systems | Net make-up equals opening plus receipts minus closing minus returns | Inventory reconciliation and concentration measurement |
| `cp_process_water` | manufacturing, heat treatment, and surface treatment | Process-water make-up | Water meter and batch log | meter reading; source; quality; density; process; batch; recirculated amount | Calibrated meter or tank balance | kg or m3 | Per batch or shift | Complete reporting period | All in-scope water systems | Convert volume using measured or disclosed density; subtract only documented internal recirculation | Meter calibration and water balance |
| `cp_surface_treatment` | `surface_treatment` | Sodium hydroxide and coating | Bath and coating batch record | product id; concentration or solids; addition; return; bath volume; treated area; lot | Reconcile formulation, make-up, issue, and return records | kg | Per bath addition and product batch | Complete reporting period | All in-scope treatment lines | Calculate active sodium hydroxide and net formulated coating input | Batch sheets, concentration tests, and stock reconciliation |
| `cp_regulator_assembly` | `governor_assembly_and_test` | Hydraulic fluid fill | BOM, fill, drain, reuse, and test log | fluid id; grade; filled mass; drained mass; reused mass; test loss; regulator serial | Weigh or meter each fill and drain | kg | Per regulator | Complete reporting period | All in-scope regulator lines | Net crossing amount equals filled plus loss minus drained reuse | Calibrated filling device and serial-level test record |
| `cp_waste_transfers` | all applicable processes | Steel scrap, spent coolant, and oily wastewater | Scale ticket, tank balance, manifest, treatment receipt | waste id; mass or volume; composition; hazard class; date; destination; internal reuse | Weigh outgoing loads or reconcile calibrated tanks | kg | Each transfer | Complete reporting period | All in-scope waste collection points | Sum by atomic waste flow; subtract documented internal reuse only | Scale calibration, manifest, and treatment receipt |
| `cp_direct_emissions` | `manufacturing_and_assembly`; `heat_treatment` | Particulate matter and fossil carbon dioxide | Stack test, CEMS, fuel record, or site factor calculation | pollutant; concentration; flow; duration; fuel; carbon content; abatement; operating hours | Prefer direct measurement; otherwise calculate from collected activity and documented site-specific factor | kg | Per test or continuous record with batch linkage | Representative operation covering reporting period | All in-scope release points | Subtract captured material only when recovery is documented; normalize by allocated accepted output | Method, detection limit, calibration, factor source, and uncertainty |
| `cp_packaging` | `final_inspection_and_packaging` | Paper boxes and wooden pallets | Packing list, issue, return, and reuse log | package id; mass; units; shipment; reuse count; ownership transfer | Reconcile packaging issues to accepted shipments | kg | Per shipment | Complete reporting period | All dispatch points | Include only packaging crossing the gate; allocate reusable pallet mass by documented trips | Packing list, tare measurement, and reuse evidence |
| `cp_product_output` | `final_inspection_and_packaging` | Accepted reference product | Release, inspection, and scale record | part/model; serial or lot; gross mass; packaging tare; net mass; acceptance status; date | Weigh accepted output or reconcile verified engineering mass to release records | kg | Per unit or lot | Complete reporting period | All covered products | Sum accepted net mass; exclude packaging, rejected product, and unreleased work in progress | Scale calibration, release certificate, and rejection log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_input` | Material and consumable rows | Net input = opening stock + receipts - closing stock - documented returns to supplier or inventory - documented transfer to other products | Stock, purchase, issue, return, and transfer records | kg of atomic input attributable to the covered product |  |
| `calc_reference_normalization` | All inventory rows | Normalized amount = allocated flow amount / accepted net product mass | Flow amount; allocation result; accepted product mass | Amount per 1 kg reference product |  |
| `calc_electricity_mj` | Electricity rows | Electricity (MJ) = metered electricity (kWh) × 3.6 | Allocated meter reading | MJ per 1 kg reference product |  |
| `calc_fossil_co2` | `carbon_dioxide_fossil_heat_treatment` | Prefer measured direct CO2. Otherwise calculate complete fossil-carbon oxidation from collected fuel quantity, supplier carbon content, and molecular mass ratio; disclose oxidation assumptions and uncertainty. | Fuel quantity; carbon content; oxidation basis; accepted output | kg fossil CO2 per 1 kg reference product | `jrc-sf-bref-2024` |
| `calc_mass_reconciliation` | Metal manufacture | Reconcile metal inputs = accepted metal in product + post-industrial metal scrap + metal in other measured wastes + inventory change, after documented internal reuse | Net metal inputs; accepted product composition; scrap; other waste; stock change | Mass-balance closure and unexplained difference | `jrc-sf-bref-2024` |
| `calc_pallet_reuse` | `wooden_pallet` | Allocated pallet mass = pallet mass / verified number of trips when ownership and reuse records demonstrate repeated use; otherwise assign full outgoing mass | Pallet mass; reuse log; ownership transfer | kg pallet per 1 kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Identify part or regulator type, drawing or model, material grade, manufacturing route, acceptance standard, net mass, packaging state, site, and period. | Release certificate, drawing/BOM revision, material certificate, and scale record |
| `dq_route_completeness` | Process map | Declare every listed process applicable or not applicable and justify every exclusion with production records. Add separate atomic rows for actual purchased components, chemicals, gases, packaging items, wastes, and direct emissions not represented by the minimum inventory. | Route sheet, work order, process flow, and environmental register |
| `dq_temporal_coverage` | Foreground records | Use a continuous period representative of normal operation and include start-up, shutdown, rework, rejects, and maintenance consumption attributable to production. State gaps and extrapolation. | Dated records and coverage reconciliation |
| `dq_meter_quality` | Energy, water, gas, and emissions | Report meter id, calibration status, reading frequency, allocation driver, reference conditions, detection limits, and uncertainty where relevant. | Calibration certificate, meter log, and calculation workbook |
| `dq_mass_balance` | Materials and wastes | Reconcile major metal input, accepted product, internal reuse, scrap, and other waste. Investigate and disclose unexplained differences. | Signed mass-balance worksheet and stock records |
| `dq_upstream_representativeness` | Purchased product inputs | Document supplier, geography, technology, product state, temporal coverage, recycled content, and any proxy used for each upstream dataset. | Supplier data and dataset selection record |
| `dq_no_double_counting` | Shared processes and recycled material | Prevent double counting between foreground inputs, internal recycling, outgoing scrap, upstream recycled-content datasets, and any recycling credit. | Allocation and recycling convention statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference_product | Confirm that the reference output uses the exact CPC 43154 Tiangong flow, equals 1 kg accepted net product, excludes separately supplied packaging, and carries every required qualifier. | `un-cpc-3-0-structure-2025` |
| `validate_process_applicability` | process_map | Confirm that all required processes are represented and every conditional process has a documented applicable or not-applicable decision consistent with route records. | `us-epa-mpm-development-document-2003`; `ridha-et-al-2023-hydraulic-turbine-failures` |
| `validate_atomic_inventory` | process_inventory | Confirm that every row is one product, waste, energy, or elementary exchange and that no combined material, utility, packaging, waste, or emission collection is used as a selected flow. |  |
| `validate_inventory_accounting` | process_inventory | Confirm that every UUID-bearing flow uses the audited identity and units, each UUID-empty flow is explicitly unresolved, and the English and Chinese row ids, order, flow types, and UUIDs are identical. |  |
| `validate_mass_balance` | materials_and_output | Confirm accepted product, scrap, waste, internal reuse, and stock change reconcile to major material inputs within a site-defined tolerance; disclose the tolerance and unresolved difference. | `jrc-sf-bref-2024` |
| `validate_energy_and_emissions` | energy_and_direct_emissions | Confirm electricity conversion, gas reference conditions, fuel allocation, direct fossil CO2 scope, particulate abatement, and exclusion of upstream emissions from direct foreground rows. | `jrc-sf-bref-2024` |
| `validate_allocation` | multi_product_facility | Confirm subdivision was attempted first, the selected physical driver is causally relevant, and any economic fallback is justified and sensitivity-tested. | `ec-pef-method-2021` |
| `validate_source_and_range_status` | evidence | Confirm no literature case value is presented as an empirical range. Keep range evidence needs open until at least two independent, boundary-compatible original sources or reviewed foreground datasets support a range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for a declared hydraulic-turbine or water-wheel part or dedicated turbine regulator |
| downstream_use | May be linked with representative upstream datasets to build cradle-to-gate product systems and may feed process or lifecyclemodel projections |
| allowed_use | Product-specific or disclosed product-mix studies with matching part identity, material, route, regulator configuration, geography, technology, period, packaging state, allocation, and upstream datasets |
| excluded_use | Complete hydraulic turbines, generators, civil works, site installation, use, repair, maintenance, end-of-life, or an undisclosed generic average across dissimilar part and regulator families |
| required_metadata | PCR id and version state; product flow UUID; part/model and drawing revision; net mass; material and grade; process route; site and geography; reporting period; production volume; acceptance tests; packaging; allocation; upstream datasets; cut-offs; data-quality evidence |
| required_quality_disclosure | Primary-data share; temporal, geographical, and technological representativeness; meter and scale calibration; mass-balance closure; allocation sensitivity; missing records; proxy datasets; unresolved UUIDs; uncertainty; applicable and not-applicable processes |
| update_trigger | Material change to product design, material grade, manufacturing or regulator technology, energy mix, site, supplier chain, allocation, waste treatment, packaging, acceptance specification, or reporting period; or resolution of an open UUID or range-evidence need |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43154 identity and hierarchy |
| `china-tax-scientific-import-list-2026` | `official_guidance` | Shanghai Municipal Tax Service, Duty-free scientific-goods list, https://shanghai.chinatax.gov.cn/zcfw/zcfgk/jckss/202601/P020260121496216221695.pdf (retrieved 2026-09-05) | Professional Chinese tariff terminology distinguishing hydraulic-turbine regulators and other parts |
| `us-epa-mpm-development-document-2003` | `official_guidance` | U.S. EPA, Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products and Machinery Point Source Category, 2003, https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf (retrieved 2026-09-05) | Metal-parts operation decomposition; oily-operation wastewater; machining, cleaning, coating, testing, and welding boundary |
| `jrc-sf-bref-2024` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, JRC140209, 2024, https://publications.jrc.ec.europa.eu/repository/bitstream/JRC140209/JRC140209_01.pdf (retrieved 2026-09-05) | Forming, foundry, heat-treatment, resource, waste, and emission process structure |
| `ridha-et-al-2023-hydraulic-turbine-failures` | `literature` | Ridha, W. K. M.; Kashyzadeh, K. R.; Ghorbani, S., Common Failures in Hydraulic Kaplan Turbine Blades and Practical Solutions, Materials 16 (2023) 3303, https://doi.org/10.3390/ma16093303 | Hydraulic-turbine component casting, CNC machining, forging, grinding, polishing, balancing, welding, coating, assembly, and quality control |
| `ec-pef-method-2021` | `standard` | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint method, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 (retrieved 2026-09-05) | System-boundary disclosure and allocation hierarchy |
