---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.hand-tools-including-hand-tools-of-a-kind-used-in-agriculture-horticulture-or-forestry-278503d7
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Hand tools (including hand tools of a kind used in agriculture, horticulture or forestry, hand saws, files, pliers and metal cutting shears, hand-operated spanners, blow-lamps and clamps)

## 1. Scope and Applicability

This PCR applies to manually operated hand tools within the semantic boundary of CPC 3.0 subclass 42921, including agricultural, horticultural and forestry hand tools, hand saws, files, pliers, pincers, metal-cutting shears, hand-operated spanners and wrenches, blow-lamps, vices, clamps and comparable non-powered hand tools. It supports foreground production datasets from received materials and purchased components through forming or machining, route-specific heat treatment and surface finishing, final assembly, inspection and packaging at the factory gate.

The PCR excludes powered hand tools, interchangeable tool inserts and dies, machine knives, tool holders and machine-tool accessories, cutlery, scissors and knives classified outside CPC 42921, manufacturing or trade services, distribution, use, maintenance, sharpening, and end-of-life. A study may add excluded life-cycle stages, but it shall report them separately from this default factory-gate boundary.

Because this subclass contains products with different functions and routes, the data package shall identify one product model or a declared, production-weighted product group. Route-conditioned processes and flows are included only when they occur for that declared product or group.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.hand-tools-including-hand-tools-of-a-kind-used-in-agriculture-horticulture-or-forestry-278503d7 |
| classification_refs | CPC 3.0: 42921 (exact) |
| covered_products | Manually operated agricultural, horticultural and forestry tools; hand saws; files and rasps; pliers, pincers and metal-cutting shears; hand-operated spanners and wrenches; blow-lamps; vices, clamps and comparable non-powered hand tools |
| excluded_products | Powered hand tools; interchangeable tool inserts and dies; machine knives; tool holders and machine-tool accessories; cutlery, scissors and knives outside CPC 42921; manufacturing and trade services |
| representative_product | A finished, saleable manually operated hand tool with its declared metal body, handle or grip, surface finish and product-specific packaging |
| production_route | Received alloy-steel stock or purchased hand-tool blanks and parts → cutting, forming and machining → route-specific heat treatment → route-specific aqueous cleaning or pickling and finishing → handle or grip assembly → inspection and packaging |
| market_state | Finished non-powered hand tool, inspected and packaged for shipment at the factory gate; net tool mass is reported separately from packaging mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a declared manually operated hand tool that performs its stated mechanical function |
| How much | 1 kg net mass of finished hand tools at the factory gate |
| How well | Meets the declared product specification for tool type, dimensions, material grade, hardness or strength, surface finish and rated capacity where applicable |
| How long or cycle | Service life is not normalized into the reference amount; declare the warranted or expected service life, cycles or sharpening regime when relevant to comparison |
| reference_flow_link | The reference flow is exactly 1 kg net finished hand-tool output; packaging is excluded from reference mass and recorded as a separate input |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished hand tools |
| Reference product flow | Hand tools (including hand tools of a kind used in agriculture, horticulture or forestry, hand saws, files, pliers and metal cutting shears, hand-operated spanners, blow-lamps and clamps) `14c9d93f-f86e-4be7-8173-0b5c67c6d704` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product type and model or product-group definition; product-group production weighting; tool function; net tool mass; material composition and alloy grades; received stock or purchased-part state; forming and machining technologies; heat-treatment route; surface preparation and finish; handle or grip material; product-specific quality or rated-capacity specification; packaging system; manufacturing site and geography; data period; expected service life or cycle statement |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | Reference product and all mass-normalized rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the inventory to 1 kg net conforming hand-tool output. Exclude packaging from net reference mass and record packaging separately. |
| `measurement_material_mass` | Metals, chemicals, handles, resins, packaging, wastes and intermediate parts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-received or as-supplied mass. Declare alloy, formulation, solution concentration, moisture or recycled content when it changes upstream modelling. Do not report the mass of a solute as if it were the mass of its supplied solution. |
| `measurement_electricity` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity in its recorded unit and convert kWh to MJ using 1 kWh = 3.6 MJ. Declare grid geography, voltage and whether losses to the delivery point are included. |
| `measurement_natural_gas` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered delivered volume and its reference temperature and pressure. Do not apply a generic mass or energy conversion without supplier or measured composition data. |
| `measurement_water` | Process water and aqueous wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer measured mass. If volume is measured, convert using the measured or declared density and retain the volume, density, temperature and conversion record. |
| `measurement_internal_parts` | Semi-finished hand-tool blanks and parts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record transferred mass at each process boundary for process-level mass balance. Internal transfers cancel in an aggregated factory-gate inventory and shall not be counted as additional external product inputs. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Alloy-steel bar or rod, purchased semi-finished hand-tool blanks and parts, handle or grip components, chemicals, energy carriers and packaging are received at the manufacturing site in the states declared by the data package |
| starting_condition_role | Foreground gate for hand-tool fabrication and assembly; upstream production of every purchased input is represented by linked upstream datasets |
| product_classification_scope | Manually operated hand tools within CPC 3.0 subclass 42921; product identity is independent of the classification mapping |
| recursive_input_rule | A purchased finished or semi-finished input within the same hand-tool category is recorded once as an upstream product input with its own dataset and declared state; its upstream manufacture is not recursively reconstructed inside the current foreground system |
| upstream_dataset_requirement | Link representative upstream datasets for alloy-steel stock, purchased parts, electricity, natural gas, water, chemicals, handle or grip materials and packaging, matching geography, technology and supplied product state as closely as available |
| disclosure | Declare the product model or weighted product group, all included and omitted route stages, purchased-versus-in-house operations, material and energy states, allocation choices, treatment destinations, data period, site coverage and any added downstream stage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_process_chain` | foreground hand-tool production | Include all on-site cutting, forming, machining, heat treatment, surface preparation, finishing, assembly, inspection and packaging operations that occur for the declared product. Record omitted route stages as not applicable with evidence. | `us-epa-fabricated-metal-products-1995`; `us-epa-metal-products-machinery-2003` |
| `boundary_purchased_operations` | outsourced or purchased components | When a listed operation is outsourced or a component is purchased, record the purchased product input and use an upstream dataset that includes the outsourced operation; do not also model the same operation as on-site. | `us-epa-metal-products-machinery-2003` |
| `boundary_direct_emissions` | on-site combustion and treatment | Include direct elementary emissions from on-site fuel combustion and any measured route-specific surface-treatment emissions. Upstream emissions embedded in purchased electricity, fuels and materials remain in their upstream datasets. | `us-epa-fabricated-metal-products-1995` |
| `boundary_downstream_exclusion` | default factory-gate dataset | Exclude distribution, use, maintenance, sharpening and end-of-life from the default dataset. If added for a study, report the added stage and assumptions separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming_machining` | Metal cutting, forming and machining | `required` | Always include; if all blanks or parts are purchased, record only in-house trimming, drilling, grinding or other shaping and disclose the purchased state | Foreground body or jaw/blade production | kg semi-finished hand-tool blanks and parts transferred |
| `heat_treatment` | Heat treatment | `conditional` | Include when hardening, tempering, annealing, case hardening or another thermal treatment occurs on-site | Foreground mechanical-property development | kg heat-treated hand-tool blanks and parts transferred |
| `surface_finishing` | Aqueous surface preparation and finishing | `conditional` | Include when alkaline cleaning, acid pickling, rinsing, coating preparation or another aqueous finishing step occurs on-site | Foreground surface preparation and finish | kg surface-finished hand-tool parts transferred |
| `assembly_packaging` | Handle or grip assembly, inspection and packaging | `required` | Always include final inspection and packaging; include each handle or grip material only when present in the declared product | Foreground final product completion | 1 kg net finished hand tools |

### Process: Metal cutting, forming and machining (`forming_machining`)

#### Inputs

##### Product flows

###### Alloy-steel bar or rod stock (`alloy_steel_bar_stock`)

Further-worked alloy-steel bar or rod is recorded when issued to on-site cutting, forging, forming or machining. Other actual metal stock forms are added as separate concrete product flows.

- Selected flow: Bars and rods of alloy steel, further worked than hot- or cold-processed `f72c06a2-f974-4d85-9308-b31cbb1d1b9a`
- Flow property / unit: Mass / kg
- Amount rule: measured as-issued alloy-steel stock mass minus documented unused material returned to controlled stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Forming and machining electricity (`forming_electricity`)

Purchased electricity crossing the process boundary is allocated from a dedicated meter or a documented machine-time allocation.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity consumed by cutting, forming and machining during the production period, allocated to conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-commission-environmental-footprint-2021`

###### Cutting fluid (`cutting_fluid`)

Cutting fluid is recorded when make-up fluid is supplied to machining. Record only net make-up crossing the boundary, not the gross recirculating bath inventory.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: measured cutting-fluid make-up mass issued to the process, net of unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Waste flows

None prescribed as an input.

##### Elementary flows

None prescribed as an input.

#### Outputs

##### Product flows

###### Semi-finished hand-tool blanks and parts after forming or machining (`formed_hand_tool_blank`)

This internal product flow carries the measured mass of conforming and work-in-progress parts transferred to the next applicable stage.

- Selected flow: Semi-finished metal hand-tool blanks and parts `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred out of forming and machining, excluding separately measured scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_mass`
- Sources:

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap`)

Steel cuttings, turnings and rejected steel parts leaving the process for recovery or treatment are recorded separately from material returned internally to production.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing post-industrial steel-scrap mass, net of internally recirculated metal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Elementary flows

None prescribed. Add each measured direct elementary emission as one species-specific flow.

### Process: Heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Formed hand-tool blanks entering heat treatment (`heat_treatment_blank_input`)

Record the internal mass entering on-site heat treatment.

- Selected flow: Semi-finished metal hand-tool blanks and parts `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted by the heat-treatment operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_mass`
- Sources:

###### Heat-treatment electricity (`heat_treatment_electricity`)

Include electricity for electric furnaces, fans, pumps and directly associated controls when heat treatment occurs on-site.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered heat-treatment electricity allocated to treated conforming output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Heat-treatment natural gas (`heat_treatment_natural_gas`)

Include gaseous natural gas only when a gas-fired furnace or burner operates inside the foreground boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered delivered natural-gas volume consumed by heat treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

##### Waste flows

None prescribed as an input.

##### Elementary flows

None prescribed as an input.

#### Outputs

##### Product flows

###### Heat-treated hand-tool blanks and parts (`heat_treated_hand_tool_blank`)

Record the internal mass transferred from heat treatment to finishing or final assembly.

- Selected flow: Semi-finished metal hand-tool blanks and parts `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- Flow property / unit: Mass / kg
- Amount rule: measured conforming mass transferred after heat treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_mass`
- Sources:

##### Waste flows

None prescribed. Add each actual quench-medium waste, furnace-scale waste or rejected part as a separate concrete waste flow.

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas combustion (`heat_treatment_fossil_co2`)

This row includes only direct fossil carbon dioxide released by on-site natural-gas combustion. It excludes upstream fuel-supply and purchased-electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: direct measured stack emission or carbon balance calculated from collected natural-gas quantity, supplier carbon content and documented oxidation fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion_emissions`
- Sources:

### Process: Aqueous surface preparation and finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Heat-treated or formed parts entering finishing (`finishing_part_input`)

Record the internal mass entering the on-site aqueous finishing route.

- Selected flow: Semi-finished metal hand-tool blanks and parts `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted by the surface-finishing operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_mass`
- Sources:

###### Process water for aqueous cleaning, pickling and rinsing (`finishing_process_water`)

Include supplied process water when it crosses the finishing boundary. Cooling water in a separate closed loop is not represented by this row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured water supplied to aqueous cleaning, pickling and rinsing, net of separately measured recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Sodium hydroxide for alkaline cleaning (`finishing_sodium_hydroxide`)

Include sodium hydroxide only when it is supplied to an alkaline cleaning bath. Declare whether the recorded mass is pure product or an as-supplied solution and state concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied sodium-hydroxide product mass added to the bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Hydrochloric acid solution at 32% concentration for pickling (`finishing_hydrochloric_acid_32`)

Include this row only when the supplied product is a 32% hydrochloric-acid solution used for pickling. A different concentration or acid is represented by its own concrete flow and is not assigned this UUID.

- Selected flow: Hydrochloric acid (32%) `9818ab8d-cd3a-4f22-ad22-f70cc3d72f37`
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied mass of 32% hydrochloric-acid solution added to the pickling bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Surface-finishing electricity (`finishing_electricity`)

Include electricity for bath heating, pumps, ventilation and directly associated finishing equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered surface-finishing electricity allocated to finished conforming parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

##### Waste flows

None prescribed as an input.

##### Elementary flows

None prescribed as an input.

#### Outputs

##### Product flows

###### Surface-finished hand-tool parts (`surface_finished_hand_tool_part`)

Record the internal mass transferred from surface finishing to assembly.

- Selected flow: Semi-finished metal hand-tool blanks and parts `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- Flow property / unit: Mass / kg
- Amount rule: measured conforming mass transferred after surface finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_mass`
- Sources:

##### Waste flows

###### Aqueous metal-finishing wastewater (`metal_finishing_wastewater`)

Record the combined aqueous discharge from cleaning, pickling and rinsing only after defining a consistent collection point. Do not combine separately managed treatment sludge or spent concentrated baths with this wastewater row.

- Selected flow: Aqueous metal-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge mass, or measured volume converted using retained density data, sent to on-site or off-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Elementary flows

None prescribed. Add each measured direct emission as one species-specific elementary flow; do not use an umbrella emissions row.

### Process: Handle or grip assembly, inspection and packaging (`assembly_packaging`)

#### Inputs

##### Product flows

###### Surface-finished or otherwise completed metal hand-tool parts (`assembly_part_input`)

Record the internal part mass entering final assembly and inspection.

- Selected flow: Semi-finished metal hand-tool blanks and parts `4427986b-3cc0-4879-99a1-7d5c2e7075a0`
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted by assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_mass`
- Sources:

###### Dimensioned, dried hardwood tool handle (`hardwood_tool_handle`)

Include this row only for a product assembled with a dimensioned, dried hardwood handle. Declare wood species, moisture basis, supplier and any upstream handle finishing.

- Selected flow: Dimensioned, dried hardwood tool handle
- Flow property / unit: Mass / kg
- Amount rule: measured mass of conforming hardwood handles issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Polypropylene granulate for an injection-moulded handle or grip (`polypropylene_granulate`)

Include this row only when polypropylene granulate is processed on-site into a handle or grip. Purchased moulded handles are recorded as their own purchased-component flow instead.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured polypropylene granulate issued to handle or grip moulding, net of controlled material returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Assembly and packaging electricity (`assembly_electricity`)

Include electricity for on-site handle or grip processing, assembly, inspection and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered assembly and packaging electricity allocated to conforming net product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Corrugated-board box (`corrugated_board_box`)

Include corrugated-board boxes issued as product-specific packaging. Pallets and other actual packaging components are added as separate concrete flows.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-board-box mass issued for the packaged reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

##### Waste flows

None prescribed as an input.

##### Elementary flows

None prescribed as an input.

#### Outputs

##### Product flows

###### Finished hand tools (`finished_hand_tool`)

The reference-product output is the net mass of conforming finished hand tools after inspection and before adding packaging mass.

- Selected flow: Hand tools (including hand tools of a kind used in agriculture, horticulture or forestry, hand saws, files, pliers and metal cutting shears, hand-operated spanners, blow-lamps and clamps) `14c9d93f-f86e-4be7-8173-0b5c67c6d704`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net conforming finished hand-tool output after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg net finished hand tools
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `eu-commission-environmental-footprint-2021`

##### Waste flows

None prescribed. Add each actual rejected product, plastic offcut, wood offcut or packaging waste as a separate concrete waste flow.

##### Elementary flows

None prescribed.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared equipment and multifunctional processes | Avoid allocation where practicable by submetering, production-order records, machine time, bath throughput or another subdivision that directly attributes inputs and outputs to the declared hand-tool product. | `eu-commission-environmental-footprint-2021` |
| `allocation_physical_relation` | residual shared burdens after subdivision | If subdivision is not practicable, use a documented causal physical relationship such as machine time, treated mass, bath throughput or occupied furnace capacity. Demonstrate why the relationship represents resource use or emissions. | `eu-commission-environmental-footprint-2021` |
| `allocation_other_relation` | multifunctional processes without a defensible physical relation | Use another relationship, including economic allocation only as a last step, and document why subdivision, system expansion and physical allocation were rejected, the prices and period used, and the sensitivity of results. | `eu-commission-environmental-footprint-2021` |
| `allocation_scrap_and_rework` | internal rework and outgoing steel scrap | Keep internal rework inside the foreground mass balance without treating it as a co-product. Record outgoing scrap quantity and destination separately; any recycling credit or burden belongs to the declared study method and shall not be embedded silently in the foreground amount. | `eu-commission-environmental-footprint-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `forming_machining`; `surface_finishing`; `assembly_packaging` | purchased and issued materials, chemicals, handles, resins and packaging | weighbridge ticket, purchase or issue record, formulation sheet, bill of materials | material identity; UUID when available; supplier; grade or formulation; concentration; gross and tare mass; issued mass; returned mass; lot; date; process and product order | reconcile purchase, issue and return records with calibrated scale or supplier mass evidence | kg | each receipt and issue; aggregate monthly | at least one representative 12-month production period or the full shorter campaign | all sites and lines producing the declared product | sum net material crossing each process boundary, allocate by production order, then divide by net conforming product mass | scale calibration; supplier specification; lot traceability; purchase-to-inventory reconciliation |
| `cp_energy_records` | `forming_machining`; `heat_treatment`; `surface_finishing`; `assembly_packaging` | purchased electricity and natural gas | utility meter, submeter, invoice and machine-hour record | meter start and end; unit; period; line; product order; downtime; allocation driver; gas reference conditions; grid and supplier | use dedicated meters where available; otherwise reconcile invoices to submeters and allocate documented residuals | kWh, MJ, m3 | continuous or per batch; aggregate monthly | same production period as product output | all included production lines and directly associated equipment | subtract non-production and excluded uses, allocate shared consumption with the approved physical driver, convert units, divide by net conforming product mass | meter calibration; invoice reconciliation; allocation worksheet; retained conversion record |
| `cp_intermediate_mass` | `forming_machining`; `heat_treatment`; `surface_finishing`; `assembly_packaging` | internal semi-finished hand-tool blanks and parts | batch traveller, production order and calibrated scale record | input mass; output mass; rejects; returned material; process stage; product order; timestamp | weigh or count with a verified unit-mass conversion at each process transfer | kg | each batch or production order | same production period as product output | every included transfer between foreground processes | aggregate stage transfers by product order; retain them for process mass balance and cancel internal transfers in the aggregated external inventory | scale calibration; batch reconciliation; documented count-to-mass factor where used |
| `cp_waste_mass` | `forming_machining` | post-industrial steel scrap | waste scale ticket and transfer record | waste identity; mass; contamination; internal return; destination; date; product order | weigh each container or shipment and reconcile accumulation to production orders | kg | each container or shipment; aggregate monthly | same production period as product output | all included cutting, forming and machining areas | sum outgoing scrap excluding internal returns, allocate shared containers by documented composition or production records, divide by net conforming product mass | calibrated scale; consignee ticket; destination evidence; mass-balance reconciliation |
| `cp_wastewater_records` | `surface_finishing` | aqueous metal-finishing wastewater | flow-meter, tank-transfer and laboratory record | discharge volume or mass; density; sampling point; date; batch; treatment destination; pH; relevant metals and contaminants | meter discharge at the defined collection point; convert volume using retained density if mass is not measured | kg | continuous or each discharge; composition at representative frequency | same production period as product output | all included aqueous cleaning, pickling and rinsing lines | sum discharge mass at the consistent boundary, exclude separately managed concentrated baths and sludge, divide by finished product mass | meter calibration; sampling plan; laboratory results; treatment transfer record |
| `cp_direct_combustion_emissions` | `heat_treatment` | direct fossil carbon dioxide | fuel meter, supplier composition, carbon analysis, oxidation record or stack measurement | fuel quantity; reference conditions; carbon content; fossil fraction; oxidation fraction; measured CO2; period; furnace; product order | use calibrated direct measurement or a transparent carbon balance based only on collected fuel-specific data | kg CO2 | each campaign or continuous; aggregate monthly | same production period as product output | all on-site natural-gas heat-treatment sources | sum direct fossil CO2 and allocate using measured furnace throughput or another causal physical driver; exclude upstream supply emissions | meter calibration; supplier certificate or laboratory analysis; calculation worksheet; stack test where available |
| `cp_product_output` | `assembly_packaging` | net conforming finished hand tools | production count, product weight, quality release and packaging record | product model; conforming count; unit net mass; total net mass; rejects; quality status; packaging mass; date; site | weigh net product before packaging or multiply conforming count by a verified model-specific net mass | kg | each batch or production order; aggregate monthly | same period as all inputs and outputs | all sites and lines in the declared dataset | sum conforming net product mass; use it as the denominator and normalize to exactly 1 kg | calibrated scale; quality release; model-specific mass verification; reconciliation to sales or warehouse receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_normalization` | all inventory rows | normalized amount = period amount attributable to the declared product ÷ net conforming product mass for the same period | attributable row amount; net conforming finished-hand-tool mass | row amount per 1 kg net finished hand tools |  |
| `calculation_electricity_conversion` | electricity recorded in kWh | electricity (MJ) = metered electricity (kWh) × 3.6 MJ/kWh | metered kWh | MJ electricity |  |
| `calculation_volume_to_mass` | process water or wastewater measured by volume | mass = measured volume × measured or declared density at the recorded conditions | volume; density; temperature where relevant | kg water or wastewater |  |
| `calculation_direct_fossil_co2` | on-site natural-gas combustion where direct measurement is unavailable | calculate fossil CO2 from collected fuel quantity, fuel-specific carbon content, fossil fraction and oxidation fraction; retain all input records and units | metered gas; reference conditions; carbon content; fossil fraction; oxidation fraction | kg direct fossil CO2 |  |
| `calculation_product_group_weighting` | datasets covering more than one hand-tool model | aggregate each model's attributable inventory using actual net production mass for the data period; do not use an unweighted average | model-level inventory; model-level net production mass | production-mass-weighted product-group inventory |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all product inputs | Verify product model, CPC boundary, material or chemical identity, supplied state and UUID semantics; do not reuse a UUID for a different concentration, stock form, polymer, waste or product state. | product specification, supplier documentation, direct-read identity audit and bill of materials |
| `dq_temporal` | all foreground records | Use a common representative period, normally 12 consecutive months; explain shorter campaigns, abnormal downtime and seasonal or product-mix effects. | dated meters, production orders, invoices and representativeness statement |
| `dq_completeness` | each included process | Reconcile material inputs, internal transfers, net product, scrap, wastewater and other wastes. Add every unlisted actual material, energy, waste or direct emission as one concrete atomic exchange. | process mass balance, route checklist, waste manifests and reconciliation record |
| `dq_measurement` | measured and converted amounts | Use calibrated instruments or documented supplier records and retain original units, conversions, allocation drivers and uncertainty or data-gap notes. | calibration certificates, invoices, meter logs and calculation workbook |
| `dq_geography_technology` | foreground and upstream datasets | Match the manufacturing geography, grid, fuel supply, material technology and treatment route as closely as available; disclose material mismatches. | dataset metadata and representativeness assessment |
| `dq_route_condition` | conditional processes and flows | Demonstrate applicability or non-applicability from the declared bill of materials, process route and site records. | routing sheet, process flow diagram, work instructions and product specification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm that the output is exactly 1 kg net conforming finished hand tools, the reference UUID is unchanged, packaging is excluded from net mass, and all required qualifiers are present. | `un-cpc-3-0-structure-2025` |
| `validation_process_route` | process map and inventory | Every process that occurs for the declared product shall have a matching inventory section and records; every conditional process omitted shall have documented non-applicability. | `us-epa-metal-products-machinery-2003` |
| `validation_atomic_flows` | inventory exchanges | Confirm that every row denotes one physical, chemical, waste, energy or elementary exchange. Reject collection labels, combined utilities, unspecified packaging, combined wastes and umbrella emissions. |  |
| `validation_mass_balance` | each foreground process and aggregated system | Reconcile input mass, internal transfers, conforming output, rejects, scrap, wastewater and inventory changes; investigate and disclose unexplained imbalance rather than forcing closure. | `us-epa-fabricated-metal-products-1995` |
| `validation_energy_boundary` | electricity, natural gas and direct carbon dioxide | Confirm units and reference conditions, prevent double counting between shared meters, and include only direct on-site fossil CO2 in the elementary-flow row. |  |
| `validation_chemical_state` | sodium hydroxide and hydrochloric acid | Confirm as-supplied mass and concentration. The hydrochloric-acid UUID in this PCR is valid only for the explicit 32% solution row. |  |
| `validation_unresolved_identity` | UUID-empty rows | Treat the metal-finishing wastewater and hardwood-handle UUIDs as unresolved; do not substitute evaporation condensate, rough wood, pallets or another proxy. |  |
| `validation_source_and_allocation` | evidence and shared burdens | Confirm source references, collection records, allocation hierarchy, drivers and sensitivity disclosures. | `eu-commission-environmental-footprint-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or production-mass-weighted foreground manufacturing dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Cradle-to-gate or broader LCA models for the declared hand-tool product or product group when geography, technology, product state, function and data period are representative |
| excluded_use | Direct comparison of tools with different functions, quality levels, rated capacities or service lives without an additional functionally equivalent basis; powered tools; interchangeable machine or hand-tool inserts; unqualified global averages |
| required_metadata | canonical PCR id; product model or weighted group; net reference mass; all required qualifiers; manufacturing sites and geography; data period; process-route applicability; purchased and outsourced operations; upstream dataset choices; allocation method; treatment destinations; unresolved UUIDs; added downstream stages |
| required_quality_disclosure | foreground coverage and representativeness; meter and scale quality; material and energy reconciliation; mass-balance gaps; allocation drivers and sensitivity; supplier-data quality; UUID audit state; range-evidence gaps; deviations and exclusions |
| update_trigger | material change in product design, alloy or handle composition, manufacturing route, heat treatment, surface finish, energy supply, site geography, packaging, allocation method, treatment route, supplier technology, or data older than the program's accepted representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official English product-category identity and exclusion boundary against adjacent CPC subclasses |
| `un-cpc-1-1-chinese` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, Series M No. 77, Ver. 1.1, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-05) | Professional Chinese terminology for unchanged subclass 42921 |
| `us-epa-fabricated-metal-products-1995` | `official_guidance` | United States Environmental Protection Agency, Profile of the Fabricated Metal Products Industry, EPA Office of Compliance Sector Notebook Project, September 1995, https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/fabmetsn.pdf (retrieved 2026-09-05) | Fabrication, surface-preparation and finishing process decomposition; material, water, chemical, scrap, wastewater and direct-emission inventory candidates |
| `us-epa-metal-products-machinery-2003` | `official_guidance` | United States Environmental Protection Agency, Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products & Machinery Point Source Category, 2003, https://19january2017snapshot.epa.gov/sites/production/files/2015-11/documents/mp-m_dd_2003.pdf (retrieved 2026-09-05) | Unit-operation sequence, hardware-sector route variability, cleaning, finishing and assembly boundary decisions |
| `eu-commission-environmental-footprint-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-09-05) | Multifunctionality and allocation hierarchy, data collection and quality principles |
