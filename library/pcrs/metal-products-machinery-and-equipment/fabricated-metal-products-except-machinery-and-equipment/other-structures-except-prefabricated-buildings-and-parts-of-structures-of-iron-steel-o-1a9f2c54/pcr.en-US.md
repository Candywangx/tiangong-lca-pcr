---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.other-structures-except-prefabricated-buildings-and-parts-of-structures-of-iron-steel-o-1a9f2c54
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fabricated iron, steel or aluminium structures and structural parts

## 1. Scope and Applicability

This PCR applies to factory-gate production of iron, steel or aluminium structures and structural parts that have been cut, drilled, punched, formed, machined, welded, bolted, surface-prepared, coated, inspected or otherwise prepared for a declared structure or temporary structural-support function. Covered products include structural frames and components, prepared plates and profiles, pipe columns and other structural tubes, and props or similar equipment for scaffolding, shuttering or mine support. The product must be delivered in a project- or function-ready fabrication state; an unprepared mill product is an upstream input, not the reference product.

The boundary starts with purchased metal products and ancillary materials received at the reporting fabrication facility and ends with accepted fabricated product at that facility gate. It includes route-applicable internal handling, cutting, drilling, forming, machining, joining, surface preparation, finishing, inspection and rework. Upstream production and inbound supply of purchased inputs are represented by supplier-specific or otherwise appropriate background datasets. Installation, erection, use, maintenance, demolition, recycling after use, prefabricated buildings as complete products, and machinery-specific assemblies classified elsewhere are excluded. A subcontracted operation included in the delivered product state shall be represented by a disclosed supplier dataset and shall not also be counted as an on-site operation.

This category needs a separate methodology record because project preparation, material yield, joining, finishing, rework and waste segregation create foreground rules that are absent from upstream basic-metal PCRs. The boundary is supported by the official CPC identity and by original-text evidence for steel and aluminium fabrication and surface-treatment operations (`unsd-cpc-3-0-structure-2025`, `aisc-sti-fabricated-hss-epd-2022`, `aec-aluminium-fabrication-services`, `eu-jrc-stm-bref-2006`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.other-structures-except-prefabricated-buildings-and-parts-of-structures-of-iron-steel-o-1a9f2c54 |
| classification_refs | CPC 3.0: 42190, exact mapping context |
| covered_products | Project- or function-prepared iron, steel or aluminium structures and structural parts; prepared structural plates, rods, angles, shapes, sections, profiles and tubes; scaffolding, shuttering or mine-support props and similar equipment |
| excluded_products | Complete prefabricated buildings; unprepared primary or semi-finished metal products; installation and erection services; doors, windows, machinery assemblies and other products classified under a more specific category; use and end-of-life services |
| representative_product | A factory-gate batch of accepted fabricated structural metal components ready for the declared structure, drawing or temporary-support duty |
| production_route | Receipt and verification of purchased metal products; project-specific cutting, drilling, forming or machining; welding and/or mechanical fastening; conditional surface preparation and coating; inspection, rework and factory-gate release |
| market_state | Net accepted mass at the fabricator gate, with material/alloy, grade or temper, geometry, preparation state, joining route, coating state, inspection status and destination market declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted iron, steel or aluminium structure or structural part prepared to the declared drawing, geometry and structural function |
| How much | 1,000 kg net accepted product at the reporting fabrication-facility gate |
| How well | Conforms to declared material/alloy, grade or temper, dimensions and tolerances, joining procedure, surface-preparation or coating specification, and inspection acceptance criteria |
| How long or cycle | One completed fabrication and acceptance batch; service life is outside this gate-to-gate boundary and is declared separately when relevant to comparison |
| reference_flow_link | 1,000 kg of the net accepted factory-gate reference product output `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Factory-gate fabricated structural metal component (exact TianGong flow unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | iron, steel or aluminium material and alloy; grade or temper; component and structural function; drawing or geometry; net product mass; joining route; surface-preparation and coating state; inspection standard and acceptance state; reporting facility and geography; reporting period; included on-site and subcontracted operations; upstream dataset identities; scrap destination |

When constructing a foreground data package, all `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions or equivalent fields. The unresolved category-wide product-flow UUID shall remain blank; a narrower pile, panel, excavator weldment or other product UUID shall not be substituted.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_rule_1` | Reference product and metal mass flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use dry, net accepted product mass excluding reusable transport racks and separately reported packaging. Record weighbridge, scale, certified piece-mass or drawing-derived mass method and reconcile it to production and inventory records. |
| `measurement_rule_2` | Electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered electricity quantity and convert kWh to MJ using 1 kWh = 3.6 MJ. Declare meter coverage and any allocation from shared meters. |
| `measurement_rule_3` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | State the temperature, pressure and wet/dry reference conditions for reported gas volume; do not combine oxygen with fuel gas. |
| `measurement_rule_4` | Material yield and waste mass balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile incoming metal by material family to accepted product, segregated metal waste, returned material, work in progress and measured stock change over the reporting period. Explain all residual imbalance. |
| `measurement_rule_5` | Coatings and treatment chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report purchased or replenished product mass. Additionally disclose solids content, active concentration or metallic content when needed for emission or coating-mass calculations; do not replace product mass with active-substance mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_start | Start at receipt of purchased metal products and ancillary materials at the reporting fabrication facility. Represent their prior production and inbound supply with explicit upstream datasets rather than recreating those burdens in the fabrication process. | `aisc-sti-fabricated-hss-epd-2022` |
| `boundary_rule_2` | foreground_operations | Include all site-controlled handling, cutting, drilling, punching, forming, machining, welding, mechanical fastening, route-applicable surface preparation or finishing, inspection, rework and waste handling needed to release the declared factory-gate product. | `aisc-sti-fabricated-hss-epd-2022`; `aec-aluminium-fabrication-services`; `eu-jrc-stm-bref-2006` |
| `boundary_rule_3` | conditional_finishing | Include abrasive preparation, aqueous cleaning, galvanizing, painting or other finishing only when it is part of the declared factory-gate product state. Identify on-site and subcontracted operations separately and prevent duplicate activity or transport burdens. | `aisc-sti-fabricated-hss-epd-2022`; `eu-jrc-stm-bref-2006` |
| `boundary_rule_4` | exclusions | Exclude erection, installation, use, maintenance, demolition, post-use recovery, capital equipment and employee commuting. Disclose any study-specific addition instead of silently changing the boundary. | `aisc-sti-fabricated-hss-epd-2022` |
| `boundary_rule_5` | elementary_emissions | Report only direct releases from processes inside the foreground boundary. Upstream electricity, fuel, metal and chemical emissions belong to their linked supplier datasets. | `eu-jrc-stm-bref-2006`; `uk-hse-welding-controls` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal products and ancillary materials physically received at the reporting fabrication facility, identified by material/alloy, product form, preparation state, quantity, supplier and upstream dataset |
| starting_condition_role | Foreground fabrication gate input; prior primary-metal, semi-finished-product and supplier transport burdens are upstream |
| product_classification_scope | Project- or function-prepared iron, steel or aluminium structures, structural parts and temporary structural-support equipment consistent with CPC 3.0 code 42190 |
| recursive_input_rule | A purchased input already prepared within this same product category is recorded as a same-category product input with its own supplier dataset and declared preparation state; do not recursively rebuild its fabrication or count it again as unprepared basic metal |
| upstream_dataset_requirement | Link every purchased metal, energy, fuel, chemical and subcontracted-operation input to geography-, technology-, grade- and state-appropriate upstream data, with proxy use and exclusions disclosed |
| disclosure | Declare material/alloy and grade or temper, input product form and preparation state, drawing or geometry, joining and finishing routes, reporting facility/geography/period, meter and allocation coverage, rework, outsourced operations, waste destinations and all deviations from this boundary |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `structural_metal_fabrication` | Structural metal preparation, joining, finishing and factory-gate release | `required` | All datasets; each route-conditioned exchange applies only when the corresponding material, joining, fuel or finishing route occurs inside the declared boundary | Foreground fabrication | 1,000 kg net accepted fabricated structural metal product |

### Process: Structural metal preparation, joining, finishing and factory-gate release (`structural_metal_fabrication`)

#### Inputs

##### Product flows

###### Hot-rolled structural section (`hot_rolled_section_input`)

Record this input only for products fabricated from hot-rolled large steel sections. Declare grade, section geometry, supplier, preparation state and upstream dataset.

- Selected flow: Hot-rolled large section `cbeefeb8-2dfc-48f5-b643-f35aed0d52a1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured mass received and consumed, corrected for stock change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `aisc-sti-fabricated-hss-epd-2022`

###### Structural steel plate (`steel_plate_input`)

Record one declared structural steel plate grade and incoming state when plate is cut or formed for the product. The exact TianGong flow UUID remains unresolved.

- Selected flow: Structural steel plate, declared grade and incoming state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured mass received and consumed, corrected for stock change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `aisc-sti-fabricated-hss-epd-2022`

###### Welded non-circular steel hollow section (`welded_hollow_section_input`)

Record this input for the welded non-circular hollow-section route. Other pipe or hollow-section forms require a separate concrete exchange and identity review.

- Selected flow: Tubes and pipes, of non-circular cross-section, welded, of steel `5b36ddd4-adb1-41da-9456-33e69e0f141c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured mass received and consumed, corrected for stock change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `aisc-sti-fabricated-hss-epd-2022`

###### Purchased aluminium extrusion profile (`aluminium_profile_input`)

Record this same-category input only when a prepared aluminium extrusion profile crosses the site boundary. Apply the recursive-input rule and declare alloy, temper, geometry and prior preparation.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured mass received and consumed, corrected for stock change and returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `aec-aluminium-fabrication-services`

###### Flux-cored welding wire (`flux_cored_wire_input`)

Record only for flux-cored arc welding performed inside the boundary; other consumables require their own atomic rows.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: issued mass minus unused wire returned to stores
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the flux-cored welding route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `aisc-sti-fabricated-hss-epd-2022`

###### Structural steel bolt (`structural_bolt_input`)

Record one declared structural bolt product when mechanical fastening occurs. Do not replace it with a plural steel-fasteners collection; the exact TianGong UUID remains unresolved.

- Selected flow: Structural steel bolt, declared grade and coating state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: installed bolt mass plus site-attributable rejected bolt mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the bolted route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `aisc-sti-fabricated-hss-epd-2022`

###### Electricity (`electricity_input`)

Record purchased electricity metered for fabrication equipment, material handling, extraction, treatment and route-applicable finishing. Exclude upstream emissions from direct site emissions.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered purchased electricity allocated to the declared product and converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `aisc-sti-fabricated-hss-epd-2022`; `eu-jrc-stm-bref-2006`

###### Natural gas (`natural_gas_input`)

Record gaseous natural gas only when it is combusted inside the boundary for heating, drying or thermal operations. Declare reference conditions and burner use.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200b9a66` / m3 / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered or invoiced natural-gas volume allocated to included operations at declared reference conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the natural-gas route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `eu-jrc-stm-bref-2006`

###### Industrial oxygen (`industrial_oxygen_input`)

Record industrial oxygen only for oxy-fuel cutting or another declared oxygen-consuming operation; do not combine it with fuel gas.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200b9a66` / m3 / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered or supplier-recorded oxygen volume consumed at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the oxy-fuel route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `aisc-sti-fabricated-hss-epd-2022`

###### Diesel fuel (`diesel_input`)

Record diesel only for site-controlled mobile equipment or generators inside the fabrication boundary; supplier transport fuel is upstream.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: tank issue or fuel-card mass allocated to included site equipment, with stock change reconciled
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for site diesel use
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel`
- Sources: `aisc-sti-fabricated-hss-epd-2022`

###### Process water (`process_water_input`)

Record process water only for aqueous cleaning, rinsing, wet cutting or an included treatment operation. Cooling water requires a distinct row if it crosses the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: metered or tank-balance process-water mass entering included operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the aqueous route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment`
- Sources: `eu-jrc-stm-bref-2006`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Record sodium hydroxide product mass only when used for an included alkaline cleaning, etching or bath-maintenance operation; declare solution concentration separately.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: purchased or replenished sodium-hydroxide product mass allocated to included baths
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the alkaline-treatment route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment`
- Sources: `eu-jrc-stm-bref-2006`

###### Cast-steel grit blasting medium (`steel_grit_input`)

Record new cast-steel grit added to a blasting system only when abrasive blasting occurs. The exact TianGong product UUID remains unresolved.

- Selected flow: Cast-steel grit blasting medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: purchased additions plus opening stock minus closing reusable stock and off-site returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the steel-grit blasting route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment`
- Sources: `aisc-sti-fabricated-hss-epd-2022`; `eu-jrc-stm-bref-2006`

###### Special-high-grade zinc metal (`shg_zinc_input`)

Record zinc metal only when hot-dip galvanizing is performed inside the boundary. Declare bath composition and distinguish zinc product mass from zinc content.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: purchased zinc metal plus opening bath inventory minus closing inventory, recovered dross and documented off-site returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted galvanized fabricated structural metal product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment`
- Sources: `eu-jrc-stm-bref-2006`

###### Solvent-borne epoxy primer (`epoxy_primer_input`)

Record one declared solvent-borne epoxy primer formulation when it is applied inside the boundary. The exact TianGong UUID remains unresolved; generic coating collections are not substitutes.

- Selected flow: Solvent-borne epoxy primer, declared formulation and solids content
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: issued coating product mass minus unopened returns, corrected for stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the epoxy-primer route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment`
- Sources: `eu-jrc-stm-bref-2006`

##### Waste flows

No waste flow enters this foreground process by default. If a site treats externally generated waste, model it as a separately declared process rather than folding it into fabrication.

##### Elementary flows

No elementary resource input is prescribed. Water supplied as a technosphere product is recorded as `process_water_input`.

#### Outputs

##### Product flows

###### Factory-gate fabricated structural metal product (`reference_product`)

This is the quantitative reference output. The exact category-wide TianGong product UUID is unresolved and shall remain blank until an exact public state-100 identity is confirmed.

- Selected flow: Factory-gate fabricated structural metal component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: normalize the accepted net output to exactly 1,000 kg after excluding rejected product, separately shipped packaging and reusable racks
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net accepted factory-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_mass`
- Sources: `unsd-cpc-3-0-structure-2025`

##### Waste flows

###### Segregated steel fabrication scrap (`steel_scrap_output`)

Record steel offcuts, punching slugs and machining chips leaving the boundary as one segregated steel-scrap waste flow; declare contamination and destination.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured dispatched mass plus closing stock minus opening stock of site-generated steel scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for steel-containing production
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_dispatch`
- Sources: `aisc-sti-fabricated-hss-epd-2022`

###### Segregated aluminium fabrication scrap (`aluminium_scrap_output`)

Record new aluminium offcuts and machining chips leaving the boundary separately from steel scrap; declare alloy mixing, contamination and destination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured dispatched mass plus closing stock minus opening stock of site-generated aluminium scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for aluminium-containing production
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_dispatch`
- Sources: `aec-aluminium-fabrication-services`

###### Dissolved-metal-bearing surface-treatment wastewater (`surface_treatment_wastewater`)

Record aqueous effluent containing dissolved metals from included cleaning, rinsing or treatment after any on-site recycle. The exact TianGong waste UUID remains unresolved; generic wastewater is not substituted.

- Selected flow: Dissolved-metal-bearing surface-treatment wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: metered or tank-balance wastewater mass transferred to sewer, treatment or off-site management, excluding internally recycled water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the aqueous-treatment route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment`
- Sources: `eu-jrc-stm-bref-2006`

###### Waste abrasive blasting media (`spent_blasting_media_output`)

Record blasting media that is no longer recirculated and leaves the boundary. Declare original medium, captured coating or metal contamination, hazardous classification and destination.

- Selected flow: Waste abrasive blasting media `45f09708-d116-43d2-96a2-f0918bf373d3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured waste media dispatched plus closing waste stock minus opening waste stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the abrasive-blasting route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_dispatch`
- Sources: `eu-jrc-stm-bref-2006`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2_air`)

Record only direct fossil carbon dioxide from site-controlled natural-gas or diesel combustion. Do not include upstream electricity or fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: calculate from each measured fossil-fuel quantity using supplier carbon content or a disclosed jurisdictional combustion factor and oxidation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for direct fossil-fuel use
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-stm-bref-2006`

###### Non-methane volatile organic compounds to air (`nmvoc_air`)

Record NMVOC emitted to unspecified air only for solvent-containing coating or cleaning performed inside the boundary. Declare formulation, application efficiency and abatement.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: calculate from measured coating or solvent product mass, supplier VOC content, recovered solvent and measured capture or destruction performance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the solvent-containing route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-stm-bref-2006`

###### Nitrogen oxides to non-urban air or from high stacks (`nox_high_stack_air`)

Record this aggregate NOx flow only when included fuel combustion discharges to the candidate's declared non-urban/high-stack compartment. A different receiving compartment requires a different exact flow identity.

- Selected flow: Nitrogen oxides `191b44d4-90c9-465a-8802-93a651b4fd52`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured stack mass or fuel-by-equipment calculation using a disclosed factor, operating load and abatement performance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for qualifying combustion and compartment
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-stm-bref-2006`

###### Particulate matter from cutting, welding or blasting to air (`particulate_matter_air`)

Record one declared particulate-matter fraction emitted after capture from included cutting, welding or blasting. State the particle-size convention and compartment; the exact TianGong UUID remains unresolved.

- Selected flow: Particulate matter from metal fabrication emitted to air, declared particle-size fraction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured outlet and fugitive mass or an equipment-specific material balance using documented capture and control efficiencies
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted fabricated structural metal product for the emitting route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `uk-hse-welding-controls`; `eu-jrc-stm-bref-2006`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | independently_measured_work_orders | Avoid allocation by subdividing work orders, lines, booths and meters whenever the declared product can be measured independently. | `aisc-sti-fabricated-hss-epd-2022` |
| `allocation_rule_2` | shared_shop_resources | Allocate unavoidable shared electricity, fuel, handling, extraction and overhead material flows using a documented causal driver such as machine hours, arc hours, booth hours or equipment-specific throughput. Use product mass only when its relationship to resource use is demonstrated; report the driver and sensitivity. | `aisc-sti-fabricated-hss-epd-2022` |
| `allocation_rule_3` | scrap_and_recycling | Report steel and aluminium scrap at the measured boundary and declare destination. Do not credit avoided primary production inside this gate-to-gate foreground process, and do not duplicate recycling burdens or credits already present in upstream or downstream datasets. | `aisc-sti-fabricated-hss-epd-2022`; `aec-aluminium-fabrication-services` |
| `allocation_rule_4` | rejects_and_rework | Include burdens for in-boundary rework and rejected production in the denominator of net accepted product. Treat a separately sold co-product as a distinct output and document a reviewed causal allocation method before publication. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `structural_metal_fabrication` | Purchased metal and fabrication consumables | Purchase, goods-receipt, issue and stock records | flow identity; material/alloy; grade/temper; product form; supplier; lot; received mass; issued mass; returns; opening and closing stock; upstream dataset | Reconcile invoices and goods receipts to calibrated scale, certified piece mass or drawing mass and stores issues | kg | Per receipt and issue; monthly reconciliation | Complete reporting period, normally 12 consecutive months or a complete representative production campaign | All included fabrication buildings and stores at the reporting site | Sum consumed mass by atomic flow and work order; subtract documented returns and stock increase; normalize through `calc_reference_normalization` | Purchase documents, material certificates, scale calibration, stock ledger and upstream dataset link |
| `cp_energy_and_fuel` | `structural_metal_fabrication` | Electricity, natural gas, oxygen and diesel | Utility meter, tank, invoice and equipment-hour records | meter id; opening and closing readings; purchased quantity; reference conditions; equipment/area; operating hours; work order; allocation driver | Use dedicated meters where available; otherwise reconcile site totals and allocate with a causal driver | MJ; m3; kg | Continuous or per delivery, aggregated monthly | Same reporting period as product output | All included site-controlled equipment and buildings | Reconcile purchases and stock change, exclude supplier transport, allocate to included work orders and normalize through `calc_reference_normalization` | Meter calibration, invoices, tank reconciliation, equipment logs and allocation worksheet |
| `cp_surface_treatment` | `structural_metal_fabrication` | Process water, sodium hydroxide, blasting medium, zinc, primer and wastewater | Meter, bath, issue, formulation, stock and wastewater-transfer records | route; bath or booth id; input mass/volume; concentration; solids/VOC or metal content; opening/closing stock; recirculation; wastewater quantity; treatment and destination | Meter water and wastewater; reconcile chemical and coating issues to bath or booth inventory and product route | kg; m3 | Per batch or transfer; monthly reconciliation | Complete reporting period for each included finishing route | All on-site surface-preparation and finishing operations | Calculate net consumption after documented returns and recirculation; keep each chemical, coating and waste stream separate; normalize through `calc_reference_normalization` | Meter calibration, formulation SDS/TDS, bath analyses, stock records, waste manifests and treatment records |
| `cp_product_mass` | `structural_metal_fabrication` | Accepted product, rejects and work in progress | Dispatch, acceptance, scale, piece-count and production records | work order; material; drawing; piece count; gross and tare mass; accepted mass; reject mass; rework; work in progress; completion date | Determine net accepted mass by calibrated weighing or verified piece/drawing mass and reconcile to dispatch | kg | Per completed batch or dispatch | Complete reporting period | All accepted products from the reporting site | Sum accepted net mass, exclude reusable racks and separately reported packaging, then normalize the dataset to 1,000 kg | Acceptance record, inspection release, dispatch record, scale calibration and mass reconciliation |
| `cp_waste_dispatch` | `structural_metal_fabrication` | Steel scrap, aluminium scrap and spent blasting media | Waste scale, container, stock and manifest records | waste identity; material/alloy; contamination; gross/tare/net mass; opening/closing stock; transporter; destination; recovery/disposal route | Weigh each segregated waste shipment and reconcile temporary storage stock | kg | Per shipment; monthly reconciliation | Same reporting period as product output | All included fabrication and finishing areas | Dispatched mass plus closing stock minus opening stock; keep steel, aluminium and abrasive waste separate; normalize through `calc_reference_normalization` | Scale ticket, waste manifest, photos or segregation inspection and destination certificate |
| `cp_air_emissions` | `structural_metal_fabrication` | Direct fossil CO2, NMVOC, NOx and particulate matter | Fuel, coating, stack test, continuous monitor, capture-system and factor records | source equipment; fuel quantity; carbon content/factor; coating mass; VOC content; stack concentration; gas flow; operating time; particle-size fraction; capture/destruction efficiency; compartment | Prefer calibrated direct monitoring; otherwise use a documented source-specific mass balance or factor calculation | kg; m3; mg/Nm3; Nm3; h | Continuous, per batch or representative test as appropriate; aggregate monthly | Same reporting period as product output and representative operating modes | Every included combustion, coating, welding, cutting and blasting source | Calculate each pollutant separately; subtract only documented recovery or destruction; assign the correct receiving compartment; normalize through `calc_reference_normalization` | Calibration and stack-test reports, supplier analyses, factor source, maintenance records and abatement operating logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | normalized amount = reporting-period amount × 1,000 kg / reporting-period net accepted product mass | Reconciled atomic-flow amount; accepted product mass | Amount per 1,000 kg reference product |  |
| `calc_electricity_mj` | `electricity_input` | electricity MJ = metered kWh × 3.6 MJ/kWh | Metered and allocated kWh | Electricity in MJ |  |
| `calc_metal_mass_balance` | Steel and aluminium routes | incoming metal = accepted product metal + segregated metal waste + returned metal + closing work-in-progress/stock − opening work-in-progress/stock ± documented transfers; investigate and disclose residual | Material receipts, returns, product composition, waste and stock records | Material-family balance and unexplained residual |  |
| `calc_combustion_co2` | `fossil_co2_air` | Calculate separately for each fuel from measured fuel quantity × supplier carbon content or disclosed jurisdictional CO2 factor × applicable oxidation treatment; do not add upstream fuel emissions | Fuel records, supplier carbon content or factor, oxidation basis | Direct fossil CO2 mass |  |
| `calc_nmvoc` | `nmvoc_air` | NMVOC emitted = solvent-containing product mass × supplier VOC fraction − documented solvent recovery − documented destroyed VOC; address retained or reacted fractions explicitly | Product issues, formulation data, recovery and abatement records | Direct NMVOC mass to the declared air compartment | `eu-jrc-stm-bref-2006` |
| `calc_stack_pollutant` | `nox_high_stack_air`; `particulate_matter_air` | For direct measurement, emitted mass = concentration × standardized dry-gas flow × operating time with unit conversion; otherwise use a disclosed equipment- and pollutant-specific factor with measured activity and control efficiency | Stack test or monitor data, gas flow, hours, activity, factor and control performance | Direct pollutant mass by species/fraction and compartment | `eu-jrc-stm-bref-2006`; `uk-hse-welding-controls` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and all exchanges | Preserve one concrete flow identity per row. Match material/alloy, product state, flow type, property, unit and environmental compartment; keep unresolved UUIDs blank rather than using a proxy. | Material certificates, supplier specifications, finalized UUID audit receipts and unresolved manifest entries |
| `dq_temporal` | Foreground data | Use one internally consistent reporting period, normally 12 consecutive months or a complete representative campaign. Explain shutdowns, start-ups and atypical work mix. | Dated production, meter, purchase, stock, waste and emission records |
| `dq_mass_balance` | Steel and aluminium routes | Reconcile each material family from receipt through accepted product, waste, returns and stock change. Investigate rather than silently forcing unexplained residual to zero. | Signed mass-balance worksheet and source-record cross-check |
| `dq_route` | Conditional operations | For every conditional row, provide a value and evidence when the route applies or document `not_applicable` with drawing, process-plan or facility evidence. | Route matrix, traveler, work instruction, supplier record and process declaration |
| `dq_completeness` | Site boundary | Reconcile facility totals to included work orders and disclose exclusions, shared-meter allocation, subcontracting, rework, fugitive releases and waste destinations. | Site-to-product reconciliation and allocation worksheet |
| `dq_representativeness` | Upstream and direct data | Declare geography, technology, material grade/temper, reporting age and proxy use. Do not compare datasets with different preparation, finish or structural-performance states without adjustment. | Dataset metadata, supplier EPD/LCI references and representativeness assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | Confirm that the normalized `reference_product` output is exactly 1,000 kg net accepted product and that every required qualifier is present. |  |
| `validation_rule_2` | inventory_completeness | Confirm that every applicable material, consumable, energy, water, waste and direct-emission exchange is represented as one atomic row; no utilities, fuels, coatings, fasteners, wastes or emissions collection label may replace a concrete exchange. | `aisc-sti-fabricated-hss-epd-2022`; `eu-jrc-stm-bref-2006` |
| `validation_rule_3` | conditional_routes | Confirm each route-conditioned exchange has a collected/calculated amount or documented `not_applicable` evidence consistent with the process plan and declared market state. |  |
| `validation_rule_4` | mass_and_energy_reconciliation | Confirm accepted product, metal inputs, metal waste, returns and stock changes reconcile by material family; confirm electricity/fuel totals reconcile to meters, invoices and allocation drivers. Explain residuals. |  |
| `validation_rule_5` | boundary_and_double_counting | Confirm upstream input datasets, on-site operations and subcontracted operations are disclosed and mutually exclusive; direct emissions exclude upstream supply-chain emissions. | `aisc-sti-fabricated-hss-epd-2022` |
| `validation_rule_6` | flow_identity | Confirm every stored UUID remains public at state 100 and matches the authored English and Chinese baseName, flow type, classification, property and unit group. Keep the seven unresolved row UUIDs blank until exact candidates pass the same audit. |  |
| `validation_rule_7` | emissions | Confirm receiving compartment, chemical identity, particle-size fraction, calculation factor, capture/destruction efficiency and direct-versus-upstream status for each reported air emission. | `eu-jrc-stm-bref-2006`; `uk-hse-welding-controls` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after methodology review and publication controls |
| downstream_use | Foreground process packages and downstream process or lifecyclemodel projections for factory-gate fabricated iron, steel or aluminium structures and structural parts |
| allowed_use | Product-specific gate-to-gate modelling when material/alloy, grade or temper, geometry, fabrication route, joining, finish, site geography, period, upstream datasets and waste destinations match or are transparently adjusted |
| excluded_use | Unadjusted comparison of different structural functions, load capacities, design lives, product geometries, material systems, finish states or boundaries; representation of complete prefabricated buildings, erection, installation, use or end-of-life; replacement of unprepared mill-product datasets |
| required_metadata | Canonical PCR id; CPC mapping context; reference product and required qualifiers; reporting organization, facility, geography and period; material and product-state breakdown; included and subcontracted operations; meter and allocation coverage; upstream dataset identities; flow UUID status; waste destinations |
| required_quality_disclosure | Primary-data coverage; mass and energy reconciliation; allocation drivers and sensitivity; route-specific applicability; measurement and conversion methods; unresolved UUIDs and range-evidence needs; data age, geography, technology and proxy use; exclusions and uncertainty |
| update_trigger | New exact TianGong identities; new compatible independent range evidence; material change in product scope, fabrication or finishing technology, supplier datasets, allocation, site boundary, regulation, classification mapping or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04; cached bytes SHA-256 `sha256:5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official CPC 42190 English product identity and classification scope |
| `aisc-sti-fabricated-hss-epd-2022` | `dataset` | American Institute of Steel Construction and Steel Tube Institute, *Environmental Product Declaration: Fabricated Hollow Structural Sections*, declaration 4789556099.103.1, 3 February 2022, https://steeltubeinstitute.org/wp-content/uploads/2026/01/aisc_epd_fab-hss-1.pdf (retrieved 2026-09-05; downloaded PDF SHA-256 sha256:acdd62c1ad8b454474bf8475fbe022fdac456d76f179c518aeeb4aed7fef12c6) | Original-text product-state, process decomposition, boundary, fabrication inputs, scrap, data collection and shop-hour allocation evidence; no numeric range imported |
| `aec-aluminium-fabrication-services` | `extension_guidance` | Aluminum Extruders Council, *The Role of AEC and its Members*, https://aec.org/role-aec-and-its-members (retrieved 2026-09-04) | Original-text evidence for downstream aluminium cutting, machining, bending, welding, assembly and new fabrication scrap |
| `eu-jrc-stm-bref-2006` | `official_guidance` | European Commission Joint Research Centre, *Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-04) | Original-text finishing sequence, water, energy, chemical, wastewater, waste, dust and air-emission collection scope; no empirical range imported |
| `uk-hse-welding-controls` | `official_guidance` | UK Health and Safety Executive, *Controlling the risks from welding*, https://www.hse.gov.uk/Welding/welding-controls.htm (updated 2026-06-09; retrieved 2026-09-04) | Original-text welding-fume source, process/material/consumable qualifiers, extraction and abatement disclosure relevant to particulate inventory |
