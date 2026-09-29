---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.continuous-action-elevators-and-conveyors-for-goods-or-materials-specially-designed-for-dd6e8554
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Continuous-action elevators and conveyors, for goods or materials, specially designed for underground use

## 1. Scope and Applicability

This rule covers manufacture and factory release of a complete continuous-action conveyor or elevator specially designed to move goods or materials underground. Belt-equipped and armored chain-equipped routes are included when their delivered configuration is declared. The model stops at factory acceptance. Underground installation, operation, maintenance, replacement and end of life are outside the foreground boundary. A rubber belt sold alone, a general-purpose conveyor and a mine cutter are separate products. [un-cpc-3-2025; cowan-1975-face-haulage]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.continuous-action-elevators-and-conveyors-for-goods-or-materials-specially-designed-for-dd6e8554 |
| classification_refs | CPC 3.0:44411, classification context only |
| covered_products | Complete underground-duty continuous-action goods conveyors or elevators, including configured belt or armored chain systems |
| excluded_products | General-purpose conveyors; stand-alone belting or spare parts; personnel lifts and skip hoists; coal or rock cutters; onsite mine civil works |
| representative_product | One accepted complete underground goods conveyor of a declared belt or chain configuration |
| production_route | Structural fabrication, drive integration, selected belt or chain integration, factory acceptance; purchased components enter with upstream datasets |
| market_state | Accepted, configured machine supplied at factory gate without transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Continuous transport of goods or materials in the declared underground setting |
| How much | One accepted complete configured machine |
| How well | Declared belt or chain route, design capacity, length, drive and underground-duty requirements verified by acceptance record |
| How long or cycle | One factory acceptance and release event; operational service life is disclosed separately, not assumed here |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Continuous-action elevators and conveyors, for goods or materials, specially designed for underground use `609af8a1-d52f-4af9-9baf-fefe36a22a50` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | accepted configuration; underground application; belt or chain route; capacity; length; drive specification; included modules; net mass M and weighing record |

M is measured at dataset production. All inventory amounts refer to the same one accepted finished machine and configuration; the PCR does not prescribe a machine weight.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `electricity_unit` | `factory_electricity` | Energy | MJ | Report attributable metered electricity in MJ; convert kWh records with 1 kWh = 3.6 MJ and retain the original meter record. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel plate, welding wire, drive parts, belting or chain assemblies enter as specified inputs; record their supplier state and datasets. |
| starting_condition_role | Factory-gate product-making foreground, including configured assembly and acceptance. |
| product_classification_scope | Underground-duty continuous-action material transport machine; do not substitute the general-purpose conveyor category. |
| recursive_input_rule | A purchased complete underground conveyor used as a subassembly is an explicitly recorded same-category input with its own upstream dataset; do not recursively fabricate it again in this foreground. |
| upstream_dataset_requirement | Provide upstream production datasets for every purchased material and component, especially steel, belt, motor, chain and idlers. |
| disclosure | Declare route, included modules, material grades, underground-duty specifications, acceptance basis and exclusions. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system | Include fabrication, component integration, metered production electricity, offcuts and factory acceptance of the supplied machine; exclude mine installation and use. | `djordjevic-2018-conveyor-lca`; `cowan-1975-face-haulage` |
| `boundary_route` | belt_or_chain_route | Include only the declared belt or chain route and its atomic component rows; disclose absent route as not applicable. | `cowan-1975-face-haulage` |
| `boundary_belt_upstream` | purchased_belt | Keep rubber compounding, calendering and vulcanization in a supplier upstream dataset when belting is purchased. | `unido-1990-rubber-belts` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabricate_frame` | Structural fabrication | `required` | always | Structural fabrication of configured supports and frames | per one accepted finished machine |
| `fit_drive` | Drive integration | `required` | always | Install the declared drive and initial lubricant | per one accepted finished machine |
| `fit_belt` | Belt and idler integration | `conditional` | Include when the declared machine uses a belt transport route | Install the specified belt and idlers | per one accepted finished machine |
| `fit_chain` | Chain integration | `conditional` | Include when the declared machine uses an armored chain transport route | Install the specified chain assembly | per one accepted finished machine |
| `factory_energy` | Shared factory electricity | `required` | always | Attribute metered production and acceptance electricity once | per one accepted finished machine |
| `accept_machine` | Acceptance and factory release | `required` | always | Confirm the complete configured machine and its net mass | per one accepted finished machine |

### Process: Structural fabrication (`fabricate_frame`)

#### Inputs

##### Product flows

###### Steel plate for structural fabrication (`steel_plate`)

Structural plate enters frame cutting, forming and joining. Record actual grade and thickness.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Measure steel plate charged to the accepted machine, including cutting offcuts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_materials`
- Sources: `djordjevic-2018-conveyor-lca`

###### Flux-cored welding wire (`flux_wire`)

Conditional route: flux-cored welding of structural joints. Other filler processes require their own atomic exchange.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Measure consumed wire only when the declared fabrication route uses flux-cored arc welding.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_materials`
- Sources: `djordjevic-2018-conveyor-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel fabrication offcuts (`steel_scrap`)

This is the separately measured post-industrial steel waste stream.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measure segregated steel offcuts leaving fabrication; do not net them from steel input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_scrap`
- Sources: `djordjevic-2018-conveyor-lca`

##### Elementary flows

### Process: Drive integration (`fit_drive`)

#### Inputs

##### Product flows

###### Underground conveyor drive electric motor (`drive_motor`)

The electric drive is part of the supplied machine; its Tiangong identity needs review before dataset release.

- Selected flow: Underground conveyor drive electric motor
- Flow property / unit: Mass / kg
- Amount rule: Measure purchased drive-motor mass for the accepted configuration; record the underground-duty specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drive_components`
- Sources: `cowan-1975-face-haulage`; `djordjevic-2018-conveyor-lca`

###### Industrial lubricating oil (`lubricating_oil`)

Record the actual lubricant grade and charged mass, without assuming a generic oil dataset is exact.

- Selected flow: Industrial lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measure oil charged to the delivered drive or gearbox; exclude later maintenance refills.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drive_components`
- Sources: `djordjevic-2018-conveyor-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Belt and idler integration (`fit_belt`)

#### Inputs

##### Product flows

###### Vulcanized rubber conveyor belt (`rubber_belt`)

Conditional belt route; record reinforcement, underground fire-performance specification and supplier dataset separately.

- Selected flow: Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- Flow property / unit: Mass / kg
- Amount rule: Measure belt mass installed in the accepted machine when the belt route applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_belt_components`
- Sources: `cowan-1975-face-haulage`; `unido-1990-rubber-belts`

###### Conveyor idler roller assembly (`idler_roller`)

Conditional belt route. Bearing-only candidate flows are not a complete idler assembly.

- Selected flow: Conveyor idler roller assembly
- Flow property / unit: Mass / kg
- Amount rule: Measure complete idler assemblies installed in the accepted belt-equipped machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_belt_components`
- Sources: `rondum-1982-conveyor-installation`; `djordjevic-2018-conveyor-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Chain integration (`fit_chain`)

#### Inputs

##### Product flows

###### Armored face conveyor steel chain assembly (`steel_chain`)

Conditional chain route; record chain type and underground conveyor configuration.

- Selected flow: Armored face conveyor steel chain assembly
- Flow property / unit: Mass / kg
- Amount rule: Measure installed chain-assembly mass when the armored chain route applies.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chain_components`
- Sources: `cowan-1975-face-haulage`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Shared factory electricity (`factory_energy`)

#### Inputs

##### Product flows

###### Factory alternating-current electricity (`factory_electricity`)

Use metered energy and disclose the supply mix. Competing public flow identities require review.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Measure attributable factory electricity for fabrication, drive fit, belt or chain fit, and acceptance; allocate once to accepted machines.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_electricity`
- Sources: `djordjevic-2018-conveyor-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Acceptance and factory release (`accept_machine`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete underground conveyor (`finished_machine`)

The output is the accepted supplied machine including declared modules, drive and belt or chain, without transport packaging.

- Selected flow: Continuous-action elevators and conveyors, for goods or materials, specially designed for underground use `609af8a1-d52f-4af9-9baf-fefe36a22a50`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025`; `cowan-1975-face-haulage`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | material_and_component_inputs | Assign BOM and purchase records to the accepted configuration before applying any shared-shop allocation. | `djordjevic-2018-conveyor-lca` |
| `allocation_energy` | shared_factory_electricity | Submeter where possible; otherwise allocate period electricity by recorded machine-hours for the same included operations, and divide by accepted machines of that configuration. Report the rule and denominator. | `djordjevic-2018-conveyor-lca` |
| `allocation_scrap` | steel_scrap | Record segregated steel scrap as waste output; any recycling credit belongs in a separately declared downstream model. | `djordjevic-2018-conveyor-lca` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_frame_materials` | `fabricate_frame` | steel plate and conditional flux-cored wire | BOM and issue records | model; configuration; material grade; issued mass; return mass; accepted count | Reconcile material issue and returns to the same accepted configuration. | kg | each production lot | current representative production period | manufacturing site | per one accepted finished machine | purchase and store issue records |
| `cp_frame_scrap` | `fabricate_frame` | steel offcuts | weighed waste records | configuration; segregated steel scrap mass; accepted count | Weigh segregated offcuts leaving fabrication. | kg | each lot | same period as frame inputs | manufacturing site | per one accepted finished machine | calibrated scale and transfer ticket |
| `cp_drive_components` | `fit_drive` | motor and initial oil | supplier and assembly records | configuration; motor mass; lubricant grade; charged oil mass; accepted count | Match supplier component mass and assembly charge to the accepted serial number. | kg | each machine | acceptance period | manufacturing site | per one accepted finished machine | supplier specification and assembly record |
| `cp_belt_components` | `fit_belt` | belt and idlers | supplier and assembly records | configuration; belt mass; idler assembly mass; accepted count | Match purchased belt and idlers to the accepted belt-route machine. | kg | each machine | acceptance period | manufacturing site | per one accepted finished machine | supplier BOM and assembly record |
| `cp_chain_components` | `fit_chain` | steel chain assembly | supplier and assembly records | configuration; chain assembly mass; accepted count | Match purchased chain assembly to the accepted chain-route machine. | kg | each machine | acceptance period | manufacturing site | per one accepted finished machine | supplier BOM and assembly record |
| `cp_factory_electricity` | `factory_energy` | production electricity | meter and allocation record | start meter; end meter; kWh; machine-hours; accepted count | Read calibrated meter; attribute included production and acceptance operations once; convert kWh to MJ. | MJ | production period | same period as accepted machines | manufacturing site | per one accepted finished machine | meter record and allocation worksheet |
| `cp_mass` | `accept_machine` | accepted complete machine | acceptance weighing record | model; configuration; serial number; accepted net mass M | Use traceable weighing records for the accepted complete machine of the same configuration. | kg | each accepted machine | acceptance event | manufacturing site | accepted net mass per machine | traceable weighing and acceptance records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `energy_per_machine` | `factory_electricity` | Attributable period electricity divided by accepted machines of the same configuration, after documented machine-hour attribution. | period meter MJ; machine-hours; accepted count; `cp_factory_electricity` | MJ per accepted machine | `djordjevic-2018-conveyor-lca` |
| `scrap_fraction_check` | `steel_scrap` | Divide measured steel scrap by measured steel plate issued to the same configuration for a non-normative quality check. | `steel_scrap`; `steel_plate`; `cp_frame_scrap`; `cp_frame_materials` | scrap fraction | `djordjevic-2018-conveyor-lca` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all rows | Match material, component, energy and output records to the same accepted configuration and route. | BOM, serial number and acceptance record |
| `dq_upstream` | purchased inputs | Record supplier material grade, component specification, geography, data year and upstream dataset identity. | supplier documentation and dataset metadata |
| `dq_completeness` | all rows | Record zero or not applicable explicitly for absent conditional routes; do not omit applicable waste or electricity. | route declaration and reconciled logs |
| `dq_mass` | `finished_machine` | Record M from traceable net-mass weighing, excluding transport packaging. | weighing and acceptance records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference_product | Require CPC 44411 underground-duty machine identity, accepted configuration and matching reference-flow UUID. | `un-cpc-3-2025` |
| `validate_mass` | all_inventory_rows | Verify every amount is per the same one accepted finished machine and output is measured M kg. | `djordjevic-2018-conveyor-lca` |
| `validate_routes` | belt_and_chain_rows | Verify exactly the declared belt or chain route rows are applicable and their component specifications are disclosed. | `cowan-1975-face-haulage` |
| `validate_evidence` | external_ranges | Do not substitute case-study values for underground equipment ranges; obtain independent compatible originals before any external range is adopted. | `djordjevic-2018-conveyor-lca`; `cowan-1975-face-haulage` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for a configured underground continuous-action material conveyor |
| downstream_use | Secondary dataset or background dataset after review; process and lifecyclemodel projections use the same foreground record |
| allowed_use | Cradle-to-factory-gate comparison of disclosed underground machine configurations on the measured M kg per accepted machine basis |
| excluded_use | Unqualified general-purpose conveyors; operational transport service; mine installation, use and end of life |
| required_metadata | route; model; configuration; accepted count; length; capacity; drive; material grades; included modules; net mass M; geography; data year |
| required_quality_disclosure | source and age of each upstream dataset; UUID gaps; range-evidence gaps; allocation method; measured completeness |
| update_trigger | design change, belt-to-chain route change, supplier change, material grade change or new measured production data |

## 11. Data Sources

| source_id | title | type | reference | retrieved | used_for |
| --- | --- | --- | --- | --- | --- |
| `un-cpc-3-2025` | CPC Version 3.0 Structure | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 2026-09-26 | Official classification identity, rows 2194 and 2296 |
| `cowan-1975-face-haulage` | Study of Continuous Face Haulage Systems | `literature` | https://stacks.cdc.gov/view/cdc/235385/cdc_235385_DS1.pdf | 2026-09-26 | Underground belt and chain configurations, printed pages 44 and 54 |
| `rondum-1982-conveyor-installation` | Belt Conveyor Maintenance and Installation Procedures | `handbook` | https://stacks.cdc.gov/view/cdc/234436/cdc_234436_DS1.pdf | 2026-09-26 | Underground conveyor components and acceptance context, printed pages 8 and 32 |
| `djordjevic-2018-conveyor-lca` | LCA of the Manufacturing Stage of the Laboratory Belt Conveyor | `literature` | https://www.mas.bg.ac.rs/_media/istrazivanje/fme/vol46/3/18_m_djordjevic_et.pdf | 2026-09-26 | Fabrication operations and component types only; laboratory scale, no transferred values |
| `unido-1990-rubber-belts` | Manufacture of Rubber Conveyor Belts: Final Report | `official_guidance` | https://downloads.unido.org/ot/48/40/4840936/15001-20000_18498.pdf | 2026-09-26 | Purchased-belt upstream production sequence, printed page 35 |
