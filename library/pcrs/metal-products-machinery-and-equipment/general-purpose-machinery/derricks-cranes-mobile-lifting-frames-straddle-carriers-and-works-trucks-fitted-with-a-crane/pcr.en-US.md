---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.derricks-cranes-mobile-lifting-frames-straddle-carriers-and-works-trucks-fitted-with-a-crane
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Derricks; cranes; mobile lifting frames, straddle carriers and works trucks fitted with a crane

## 1. Scope and Applicability

This PCR applies to foreground manufacture of complete derricks, cranes, mobile lifting frames, straddle carriers, and works trucks fitted with a crane, from received materials and purchased components through fabrication, coating when performed, final assembly, factory acceptance testing, and release at the manufacturer's gate.

It excludes crane lorries as complete road vehicles, forklifts without a crane, lifting-equipment parts sold separately, installation and civil works at the customer site, repair services, use, maintenance, and end-of-life. A data package must identify the product family, structural configuration, rated lifting capacity, mobility and drive system, manufacturing site and year, coating route, and factory-gate state. The category breadth is handled by conditional atomic exchanges, not by averaging incompatible product variants.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.derricks-cranes-mobile-lifting-frames-straddle-carriers-and-works-trucks-fitted-with-a-crane |
| classification_refs | CPC 3.0: 43520 (`un-cpc-3-0-2025`) |
| covered_products | Complete derricks; fixed, mobile, bridge, gantry, tower and other cranes; mobile lifting frames; straddle carriers; non-road works trucks fitted with a crane |
| excluded_products | Crane lorries as complete road vehicles; forklifts and works trucks without a crane; separately sold crane parts; lifting-equipment manufacturing services; installation, repair and rental services |
| representative_product | A completed load-lifting or handling equipment item accepted after factory testing |
| production_route | Received metal products and purchased systems -> cutting/forming/machining -> structural joining -> surface preparation/coating when applicable -> final assembly and factory acceptance testing |
| market_state | Completed equipment at the manufacturer's gate, with included attachments and factory-supplied fluids declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of completed equipment that provides the declared load-lifting or load-handling function |
| How much | 1,000 kg of completed equipment at the manufacturer's gate |
| How well | Conforms to the declared product family, structural configuration, rated capacity, duty class, mobility and drive system, and has passed the manufacturer's acceptance criteria |
| How long or cycle | One completed factory-gate product; no operating life or lifting cycle is represented |
| reference_flow_link | `p04_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Derricks, cranes, mobile lifting frames, straddle carriers and works trucks fitted with a crane `dc26f89f-da63-4bc3-bf19-8585b187a85d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family and model; structural configuration; rated lifting capacity and duty class; fixed, rail, tyre or crawler mobility; electric, hydraulic or internal-combustion drive; attachments included; factory-supplied fluid state; coating system; manufacturing site and geography; production year; factory gate |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, the product description, reference-flow comment, or an equivalent field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1,000 kg of completed accepted product; exclude temporary lifting fixtures and reusable factory tooling from product mass. |
| `internal_mass_link` | internal fabricated, welded and coated structures | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure each internal intermediate consistently at transfer; the receiving process quantity must equal the supplying process quantity after any explicitly recorded storage change. |
| `energy_conversion` | electricity and fuels | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered units and document conversion factors; report electrical-energy MJ separately from fuel-energy or fuel-mass records. |
| `engine_count` | diesel engines | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Record engine item count and separately retain engine mass, rated power and model in the foreground evidence so product variants are not averaged without disclosure. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | all foreground processes | Include directly controlled cutting, forming, machining, joining, surface treatment performed by the manufacturer, final assembly, testing, on-site utilities, direct emissions, and generated wastes through factory-gate release. | `jrc-fabricated-metal-products-2015`; `uctug-et-al-heavy-machinery-2025` |
| `sb_purchased_inputs` | purchased materials, components, energy and treatment services | Record every purchased input as an atomic product or service link and require an upstream dataset matching material grade, component state, energy geography, and supplier technology. | `uctug-et-al-heavy-machinery-2025` |
| `sb_outsourced_operations` | outsourced fabrication, coating or treatment | Keep outsourced operations visible: record the intermediate sent and received plus the contracted operation dataset; do not treat outsourced burdens as zero. | `jrc-fabricated-metal-products-2015` |
| `sb_excluded_life_cycle` | installation, use, maintenance and end-of-life | Exclude post-gate installation, operation, maintenance and end-of-life from this manufacturing-gate package and disclose that exclusion; add them only in a separately declared lifecycle model. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | received metal products and purchased components at the manufacturing site |
| starting_condition_role | foreground manufacturing input gate |
| product_classification_scope | complete lifting equipment within the semantic boundary associated with CPC 3.0 43520 |
| recursive_input_rule | a purchased complete CPC 43520 product used as an input remains a separately quantified product input with its own upstream dataset; it is not absorbed into the foreground reference product |
| upstream_dataset_requirement | supplier- and geography-matched datasets for received metal products, components, electricity, fuels, chemicals and external treatment services |
| disclosure | declare product family, included components and attachments, material grades, purchased-versus-made component split, coating route, drive system, outsourced steps, factory-supplied fluids and gate condition |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p01_metal_preparation | Metal cutting, forming and machining | required |  | foreground fabrication | kg fabricated steel components transferred |
| p02_structural_joining | Structural joining | required |  | foreground fabrication | kg welded steel structure transferred |
| p03_surface_treatment | Surface preparation and coating | conditional | Include when blasting, chemical pretreatment, painting, galvanizing or another coating is performed within the declared foreground or by a contracted supplier. | foreground finishing | kg coated steel structure transferred |
| p04_assembly_testing | Final assembly and factory acceptance testing | required |  | foreground assembly and testing | 1,000 kg accepted reference product |

### Process: Metal cutting, forming and machining (`p01_metal_preparation`)

This process covers conversion of received steel plate into shaped and machined structural components. The JRC fabricated-metal report identifies forming and removing processes, while the heavy-machinery study reports cutting steel sheet, bending and subsequent assembly (`jrc-fabricated-metal-products-2015`; `uctug-et-al-heavy-machinery-2025`).

#### Inputs

##### Product flows

###### Steel plate (`p01_steel_plate`)

Steel plate crosses the foreground boundary as the principal load-bearing material input.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: measured received mass consumed, by steel grade and plate specification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `uctug-et-al-heavy-machinery-2025`

###### Electricity (`p01_electricity`)

Electrical energy operates the cutting, forming and machining equipment assigned to this process.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered cutting, forming and machining electricity, with allocation from shared meters when necessary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `jrc-fabricated-metal-products-2015`; `uctug-et-al-heavy-machinery-2025`

###### Process water (`p01_process_water`)

Process water crosses the boundary only for a declared wet-machining or aqueous-cooling route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water input only when wet machining or aqueous cooling crosses the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `jrc-fabricated-metal-products-2015`

#### Outputs

##### Product flows

###### Fabricated steel components (`p01_fabricated_steel_components`)

Accepted fabricated components leave metal preparation as an internal product transferred to joining.

- Selected flow: Fabricated steel components
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by component batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfer_mass`
- Sources:

##### Waste flows

###### Post-industrial steel scrap (`p01_steel_scrap`)

Segregated offcuts, chips and rejected components leave metal preparation as post-industrial steel scrap.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured segregated plate offcuts, machining chips and rejected steel components leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `jrc-fabricated-metal-products-2015`; `uctug-et-al-heavy-machinery-2025`

### Process: Structural joining (`p02_structural_joining`)

#### Inputs

##### Product flows

###### Fabricated steel components (`p02_fabricated_steel_components`)

Fabricated steel components enter joining as the internal product received from metal preparation.

- Selected flow: Fabricated steel components
- Flow property / unit: Mass / kg
- Amount rule: measured input mass linked to `p01_fabricated_steel_components`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfer_mass`
- Sources:

###### Flux-cored wire (`p02_flux_cored_wire`)

Flux-cored wire crosses the process boundary as a welding consumable when that welding procedure applies.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: measured wire issued minus returned wire when the declared welding procedure uses flux-cored wire
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `uctug-et-al-heavy-machinery-2025`

###### Industrial oxygen (`p02_industrial_oxygen`)

Industrial oxygen enters only when it is consumed in a declared cutting or joining operation.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered oxygen at declared reference conditions when oxygen is used for cutting or joining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gas`
- Sources:

###### Electricity (`p02_electricity`)

Electrical energy operates welding equipment and the process-specific extraction assigned to joining.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered welding and joining electricity, including extraction assigned to this process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `jrc-fabricated-metal-products-2015`; `uctug-et-al-heavy-machinery-2025`

#### Outputs

##### Product flows

###### Welded steel structure (`p02_welded_steel_structure`)

The accepted welded load-bearing structure leaves joining as an internal product.

- Selected flow: Welded steel structure
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass of accepted welded structure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfer_mass`
- Sources:

##### Elementary flows

###### Welding particulate matter to air (`p02_welding_particulate`)

Particulate matter generated by welding crosses the process boundary as a direct air emission after accounting for capture.

- Selected flow: Particulate matter from welding, emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack plus estimated uncaptured welding particulate, with capture efficiency and estimation method disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission`
- Sources: `jrc-fabricated-metal-products-2015`

### Process: Surface preparation and coating (`p03_surface_treatment`)

This conditional process records each performed finishing operation. The JRC source identifies finishing as a separate manufacturing group and highlights water, energy, consumables, emissions and hazardous or liquid waste; the heavy-machinery study identifies sandblasting, primer/coating, drying and waste paint (`jrc-fabricated-metal-products-2015`; `uctug-et-al-heavy-machinery-2025`).

#### Inputs

##### Product flows

###### Welded steel structure (`p03_welded_steel_structure`)

The welded structure enters the conditional surface-treatment process from structural joining.

- Selected flow: Welded steel structure
- Flow property / unit: Mass / kg
- Amount rule: measured input mass linked to `p02_welded_steel_structure`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfer_mass`
- Sources:

###### Primer (`p03_primer`)

Primer crosses the boundary as one specific coating product applied to the declared structure.

- Selected flow: Primer `e7084225-82a6-42d7-90e1-580a59a708cd`
- Flow property / unit: Mass / kg
- Amount rule: measured mixed primer consumed, net of returned unused material; declare chemistry and solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_material`
- Sources: `uctug-et-al-heavy-machinery-2025`

###### Process water (`p03_process_water`)

Process water enters aqueous cleaning, rinsing or coating preparation when those operations apply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured water entering aqueous cleaning, rinsing or coating preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `jrc-fabricated-metal-products-2015`

###### Sodium hydroxide (`p03_sodium_hydroxide`)

Sodium hydroxide enters as the active substance in an applicable alkaline-cleaning route.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: active sodium-hydroxide mass in alkaline cleaning solution added to the process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_material`
- Sources: `jrc-fabricated-metal-products-2015`

###### Electricity (`p03_electricity`)

Electrical energy operates the applicable preparation, ventilation, coating and curing equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered blasting, ventilation, coating and curing electricity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `jrc-fabricated-metal-products-2015`

###### Natural gas in the gaseous state (`p03_natural_gas`)

Gaseous natural gas enters when directly burned for booth make-up air or coating cure.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural gas at declared reference conditions used for booth make-up air or coating cure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gas`
- Sources: `jrc-fabricated-metal-products-2015`

#### Outputs

##### Product flows

###### Coated steel structure (`p03_coated_steel_structure`)

The accepted coated structure leaves surface treatment as an internal product transferred to assembly.

- Selected flow: Coated steel structure
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass of accepted coated structure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfer_mass`
- Sources:

##### Waste flows

###### Waste paint (`p03_waste_paint`)

Uncured paint residue and coating-contaminated material leave the process as one waste-paint exchange.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass / kg
- Amount rule: measured uncured paint residue and contaminated coating material leaving the process as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `jrc-fabricated-metal-products-2015`; `uctug-et-al-heavy-machinery-2025`

##### Elementary flows

###### Fossil carbon dioxide to air (`p03_fossil_co2`)

Fossil carbon dioxide from direct on-site natural-gas combustion crosses the boundary as an air emission.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate direct fossil carbon dioxide from on-site natural-gas combustion using recorded fuel composition and carbon balance; exclude upstream fuel emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission`
- Sources:

### Process: Final assembly and factory acceptance testing (`p04_assembly_testing`)

#### Inputs

##### Product flows

###### Coated steel structure (`p04_coated_steel_structure`)

The coated structure enters final assembly only when the declared surface-treatment route applies.

- Selected flow: Coated steel structure
- Flow property / unit: Mass / kg
- Amount rule: measured input linked to `p03_coated_steel_structure` when foreground surface treatment is included
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfer_mass`
- Sources:

###### Uncoated welded steel structure (`p04_uncoated_welded_structure`)

The welded structure enters final assembly directly only when foreground surface treatment is absent.

- Selected flow: Welded steel structure
- Flow property / unit: Mass / kg
- Amount rule: measured input linked directly to `p02_welded_steel_structure` only when foreground surface treatment is not performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfer_mass`
- Sources:

###### Electric motor (`p04_electric_motor`)

One installed electric-motor product crosses the assembly boundary for an applicable electric drive.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of purchased AC lifting or travel motors installed; declare rated power and motor class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_component`
- Sources: `uctug-et-al-heavy-machinery-2025`

###### Hydraulic power unit (`p04_hydraulic_power_unit`)

One hydraulic power-unit product crosses the assembly boundary when hydraulic actuation applies.

- Selected flow: Hydraulic power unit
- Flow property / unit: Mass / kg
- Amount rule: measured mass of purchased hydraulic power units installed when the declared product uses hydraulic actuation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_component`
- Sources:

###### Diesel engine (`p04_diesel_engine`)

One non-road diesel-engine product crosses the assembly boundary for an applicable internal-combustion drive.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items / Item(s)
- Amount rule: counted non-road diesel engines installed when the declared product uses an internal-combustion drive
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_component`
- Sources: `uctug-et-al-heavy-machinery-2025`

###### Diesel fuel (`p04_diesel_fuel`)

Diesel fuel crosses the process boundary only when it is consumed during factory acceptance testing.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: measured diesel issued and consumed only during factory acceptance testing; exclude post-gate operating fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_test`
- Sources:

###### Electricity (`p04_electricity`)

Electrical energy operates final assembly, commissioning and electrical acceptance testing.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered final assembly, control commissioning and electrical acceptance-test energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources: `uctug-et-al-heavy-machinery-2025`

#### Outputs

##### Product flows

###### Completed accepted lifting equipment (`p04_reference_product`)

The accepted complete equipment leaves final assembly as the PCR reference product.

- Selected flow: Derricks, cranes, mobile lifting frames, straddle carriers and works trucks fitted with a crane `dc26f89f-da63-4bc3-bf19-8585b187a85d`
- Flow property / unit: Mass / kg
- Amount rule: fixed normalization output after acceptance testing, including declared attachments and factory-supplied fluids
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-2025`

##### Elementary flows

###### Fossil carbon dioxide to air (`p04_fossil_co2`)

Fossil carbon dioxide from diesel burned during factory testing crosses the boundary as a direct air emission.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculate direct fossil carbon dioxide from diesel burned during factory testing using recorded fuel carbon content; exclude upstream fuel emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg completed accepted product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | processes producing multiple equipment models or components | Subdivide by production order, work centre, batch, meter or operating time before allocating shared burdens. |  |
| `al_physical_fallback` | residual shared energy, water and consumables | When subdivision is infeasible, allocate by the causal physical driver documented for that resource, such as machine time, treated surface area, weld length, coating mass or accepted product mass. | `jrc-fabricated-metal-products-2015` |
| `al_scrap_no_avoided_burden` | steel scrap and other recovered material leaving the gate | Record recovered material as a waste output with mass, quality and destination; do not subtract avoided primary production inside the foreground inventory. |  |
| `al_economic_last_resort` | inseparable co-products without a defensible physical relationship | Use economic allocation only as a last resort and disclose prices, currency, reference period, sensitivity and affected rows. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | p01_metal_preparation; p02_structural_joining | plate and welding-consumable input | purchase, issue and return records | order; material id; grade; gross mass; returned mass; batch; product order | calibrated scale plus traceable material ledger | kg | per receipt and issue | representative continuous 12-month period or complete production campaign | all foreground work centres | consumed mass = issued mass - returned usable mass; normalize by accepted product mass | calibration record; material certificate; batch-to-order reconciliation |
| `cp_process_energy` | p01_metal_preparation; p02_structural_joining; p03_surface_treatment; p04_assembly_testing | process electricity | submeter and machine log | meter id; start/end reading; machine power; run time; idle time; product order | submetering; where unavailable, rated power multiplied by logged operating time with load factor documented | MJ | per batch or monthly meter period | representative continuous 12-month period or complete production campaign | all included foreground work centres | subtract documented non-production load, assign shared use by causal driver, convert to MJ and normalize | meter calibration; machine log; reconciliation to site bill |
| `cp_process_water` | p01_metal_preparation; p03_surface_treatment | process-water input | meter and bath record | meter id; volume or mass; source; bath id; make-up; discharge | submeter or calibrated tank change | kg | per batch or monthly | representative continuous 12-month period or complete production campaign | included wet processes | sum net water crossing each process boundary; document density conversion | meter calibration; bath ledger; water balance |
| `cp_internal_transfer_mass` | p01_metal_preparation; p02_structural_joining; p03_surface_treatment; p04_assembly_testing | internal intermediate | transfer and production-order record | order; component or structure id; sending process; receiving process; mass; time | calibrated scale or engineering mass verified by periodic weighing | kg | each transfer batch | complete production campaign | all linked foreground processes | reconcile sending and receiving quantities before normalization | scale calibration; order traveller; reconciliation report |
| `cp_waste_mass` | p01_metal_preparation; p03_surface_treatment | steel scrap and waste paint | waste container and dispatch record | waste id; container tare; gross mass; composition; hazard class; destination; date | calibrated scale at container closure or dispatch | kg | each dispatch | representative continuous 12-month period or complete production campaign | all included work centres and waste stores | net mass = gross - tare; assign by labelled source or documented mass balance | calibration; consignment note; waste classification |
| `cp_process_gas` | p02_structural_joining; p03_surface_treatment | oxygen and natural gas | meter or cylinder record | gas id; volume; pressure; temperature; opening/closing meter; returned cylinder | calibrated meter or cylinder mass/volume reconciliation | m3 | per batch or monthly | representative continuous 12-month period or complete production campaign | included gas-consuming processes | convert to declared reference conditions and normalize | meter calibration; supplier record; reference-condition calculation |
| `cp_coating_material` | p03_surface_treatment | primer and alkaline cleaner | mixing and issue record | product id; batch; supplied mass; concentration; solids; mixed mass; returned mass; treated order | calibrated scale and formulation ledger | kg | each mix and coating batch | representative continuous 12-month period or complete production campaign | all included coating lines | calculate consumed product or active substance from issued-minus-returned mass and concentration | scale calibration; SDS; formulation; batch reconciliation |
| `cp_purchased_component` | p04_assembly_testing | installed motor, hydraulic unit and engine | bill of materials and installation record | component id; supplier; model; count; mass; rated capacity; product order | purchase/BOM reconciliation with periodic weighing | kg or Item(s) | each product order | complete production campaign | final assembly and included suppliers | sum installed quantities by exact component identity and normalize | supplier declaration; BOM; installation sign-off |
| `cp_factory_test` | p04_assembly_testing | acceptance-test diesel | issue and test log | product order; fuel batch; issued mass; returned mass; test start/end; test result | calibrated fuel issue meter or scale | kg | each test | complete production campaign | factory acceptance-test area | consumed mass = issued - recovered/returned fuel; exclude fuel remaining in declared product state | calibration; test record; fuel ledger |
| `cp_direct_emission` | p02_structural_joining; p03_surface_treatment; p04_assembly_testing | direct air emissions | monitoring and calculation record | source id; operating period; measured concentration and flow or fuel quantity/composition; capture efficiency; method | stack measurement or transparent mass-balance calculation from collected activity data | kg | each test campaign and reporting period | representative continuous 12-month period or complete production campaign | all direct foreground emission points | sum measured and calculated direct releases; exclude upstream emissions; normalize | accredited report or calculation sheet; instrument calibration; activity-data reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | every non-reference inventory row | normalized quantity = process quantity / accepted product mass * 1,000 kg | collected process quantity; accepted product mass | row quantity per 1,000 kg reference product |  |
| `calc_shared_energy` | shared process electricity | assigned energy = metered period energy * documented causal driver for the product order / total driver in the meter period | meter readings; operating time, machine time or another justified driver | MJ assigned to the product order | `uctug-et-al-heavy-machinery-2025` |
| `calc_active_naoh` | sodium-hydroxide input | active NaOH mass = solution mass added * measured or supplier-declared NaOH mass fraction | solution mass; concentration | kg active sodium hydroxide |  |
| `calc_fossil_co2` | direct fuel combustion | fossil CO2 = fuel mass or reference-condition volume * fossil carbon content * oxidation fraction * 44/12; disclose every factor and exclude upstream emissions | fuel record; composition; oxidation factor | kg fossil carbon dioxide to air |  |
| `calc_mass_reconciliation` | fabrication and assembly mass balance | received materials and components = accepted product + internal inventory change + wastes + quantified direct material losses, within documented measurement uncertainty | material, component, internal-transfer, waste and product mass records | reconciliation difference and completeness finding |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and components | Retain product model, configuration, rated capacity, drive type, attachments, BOM revision and accepted serial/order identifiers. | product specification; BOM; acceptance certificate |
| `dq_temporal` | foreground records | Use a representative continuous 12-month period or the complete production campaign; disclose shutdowns, prototypes and abnormal batches. | dated ledgers, meter series and production schedule |
| `dq_completeness` | all process rows | Reconcile mass, energy meters, purchased components, waste dispatches and direct emissions; explain every omitted applicable exchange. | reconciliation report and omission register |
| `dq_geography_technology` | upstream links | Match supplier geography, material grade, recycled content, electricity grid, fuel supply and component technology; disclose proxies. | supplier declarations and dataset metadata |
| `dq_measurement` | foreground measurements | Use calibrated instruments and retain unit conversions, meter coverage, allocation drivers, detection limits and uncertainty. | calibration certificates and calculation workbooks |
| `dq_conditional_routes` | coating, hydraulic and diesel routes | Mark each conditional process and exchange applicable or not applicable using documented product and routing evidence; never average absent routes into a product record. | routing sheet; product specification; process traveller |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_flow` | reference product | Confirm exactly 1,000 kg of accepted factory-gate product and all required qualifiers; the UUID, mass property and kg unit must match the reference-flow definition. |  |
| `vr_process_linkage` | internal intermediates | Confirm every internal supplying row has an equal receiving row after declared inventory change and that only one coated or uncoated structural route feeds final assembly. |  |
| `vr_atomic_inventory` | all inventory rows | Confirm every selected flow is one physical, chemical, waste, energy or elementary exchange and that conditional applicability is explicit. |  |
| `vr_mass_balance` | fabrication and assembly | Run `calc_mass_reconciliation`; investigate differences outside documented measurement uncertainty and prohibit unexplained negative waste or material values. |  |
| `vr_energy_boundary` | electricity and fuels | Reconcile process energy to site bills, exclude post-gate operating energy, and keep electricity, natural gas and diesel as separate exchanges. | `jrc-fabricated-metal-products-2015`; `uctug-et-al-heavy-machinery-2025` |
| `vr_direct_emissions` | fossil CO2 and welding particulate | Confirm only direct foreground releases are reported; retain monitoring or carbon-balance evidence and exclude upstream supply-chain emissions. |  |
| `vr_unresolved_evidence` | UUID and range review gaps | Before publication, resolve each manifest UUID gap and either add a compliant two-source empirical range or retain a reviewed, explicit evidence need without inventing a range. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing-gate datasets for complete lifting equipment matching the declared product family, configuration, capacity, drive, coating route, geography, year and included components |
| excluded_use | Comparative claims between unlike crane types or capacities without functional equivalence; crane-lorry manufacture as a road vehicle; installation, operation, maintenance or end-of-life modelling without added lifecycle processes |
| required_metadata | canonical PCR id; reference-flow UUID; product family/model; rated capacity and duty class; mobility and drive; attachments; factory-supplied fluids; BOM revision; coating route; manufacturing site/geography/year; outsourced steps; allocation; data coverage |
| required_quality_disclosure | foreground period and coverage; instrument calibration; meter allocation; mass reconciliation; conditional-route decisions; upstream proxies; unresolved UUID/range evidence; uncertainty and data-quality assessment |
| update_trigger | material change in product design, capacity class, drive system, bill of materials, steel grade, coating route, manufacturing technology, supplier geography, energy mix, allocation method or foreground data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0 structure*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-06-23; SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official CPC 43520 product-category identity and hierarchy only |
| `jrc-fabricated-metal-products-2015` | `official_guidance` | European Commission Joint Research Centre, *Background document on best environmental management practice in the Fabricated Metal Products sector*, December 2015, https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/inline-files/BEMP_FabMetProd_BackgroundReport.pdf (retrieved 2026-09-05) | Forming, removing, joining, finishing and assembly process decomposition; utilities, water, consumables, emissions and waste collection scope |
| `uctug-et-al-heavy-machinery-2025` | `literature` | Üçtuğ, F.G. et al., *Cradle-to-gate life cycle assessment of heavy machinery manufacturing: a case study in Türkiye*, The International Journal of Life Cycle Assessment 30 (2025), https://doi.org/10.1007/s11367-025-02462-7 (retrieved 2026-09-05) | Original-text manufacturing sequence for cutting, bending, welding, blasting, painting, drying, purchased-component assembly, testing, steel scrap and waste paint; no quantitative range adopted |
