---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.aircraft-launching-gear-deck-arrestor-or-similar-gear-ground-flying-trainers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Aircraft launching gear; deck-arrestor or similar gear; ground flying trainers

## 1. Scope and Applicability

This PCR applies to factory-gate production of a complete, acceptance-tested item of aircraft launching gear, deck or runway arresting gear, similar aircraft launch/recovery gear, or a ground-based flight training device. It covers the configuration delivered under one purchase or production order, including manufacturer-controlled fabrication, treatment, assembly, software configuration, functional testing, and delivery preparation.

The category includes steam or electromagnetic launching equipment and controls, arresting engines and controls, shore-based arresting systems, and ground flight simulators or flight training devices. Product family, qualification basis, performance class, installed options, net mass, and packaged mass must be declared. The NAVSEA fleet-maintenance manual substantiates the launch/recovery equipment boundary and quality-assurance performance verification; the U.S. Navy operational report documents representative ashore and shipboard functional testing; FAA Part 60 substantiates objective and subjective qualification of flight training devices (`navsea-jfmm-alre-2024`, `us-navy-ford-alre-test-2017`, `faa-part-60-fstd`).

Aircraft and spacecraft engines, complete aircraft, ship or airfield civil works, carrier or runway structures, training services, site installation, use, maintenance, and end-of-life are excluded. Upstream production of purchased materials, components, electricity, fuels, and chemicals is represented by linked supplier datasets rather than duplicated in the foreground.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.aircraft-launching-gear-deck-arrestor-or-similar-gear-ground-flying-trainers |
| classification_refs | CPC 3.0: 43134, exact (`un-cpc-3-0-2025`) |
| covered_products | complete aircraft launching gear; deck or runway arresting gear and similar recovery gear; ground-based flight simulators and flight training devices |
| excluded_products | aircraft engines; complete aircraft; ships, runways, buildings, and fixed civil works; installation, training, maintenance, repair, use, and end-of-life services |
| representative_product | one configured and acceptance-tested equipment item or contracted system delivery at the manufacturer gate |
| production_route | purchased components and materials -> conditional metal fabrication -> conditional surface treatment/coating -> subsystem integration and assembly -> configuration and acceptance testing -> delivery preparation |
| market_state | new, complete, acceptance-tested equipment in the delivered factory-gate configuration, with reusable transport fixtures identified separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provision of one complete aircraft launch/recovery equipment item or one ground flight training device with the declared function and configuration |
| How much | one delivered equipment item or contracted system delivery |
| How well | conforms to the declared purchase specification, product-family performance class, safety requirements, and documented acceptance-test criteria |
| How long or cycle | one manufacturing and acceptance cycle; design service life is metadata and is not used to scale the factory-gate inventory |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | measured net mass of 1 accepted delivered item |
| Reference product flow | Aircraft launching gear, deck-arrestor or similar gear, ground flying trainers `26408ad7-8d1b-4d01-946e-e40d87aa0f2f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family; model and configuration; launch/recovery/training function; performance or qualification class; principal power technology; net mass; packaged mass; included controls and auxiliaries; acceptance-test basis; manufacturing geography; reporting period; factory-gate delivery condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the net mass of the one complete contracted equipment delivery that passed the declared acceptance basis; disclose the item count, the modules that jointly constitute the item, retained fluids, and the exclusion of delivery packaging from net mass. |
| `mass_accounting` | materials, intermediate products, wastes, packaging, and oils | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured or reconciled dry/net mass as applicable; record moisture, retained fluid, coating, and packaging conventions and reconcile material inputs to product, waste, and measured loss. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter readings and convert kWh to MJ using the exact identity 1 kWh = 3.6 MJ; disclose voltage level, geography, losses, and meter boundary. |
| `gas_volume` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | Report volume at the supplier or meter reference conditions and disclose temperature, pressure, and any conversion to the reference conditions. |
| `allocation_consistency` | shared facility records | applicable row property | row reference unit | Use one reporting period and one documented driver for each shared-meter disaggregation; the driver must be physically related to the consuming operation and must not double count idle or rework burdens. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | purchased materials, components, utilities, fuels, and process chemicals as received at the reporting manufacturer's gate |
| starting_condition_role | foreground entry condition for manufacturer-controlled production; upstream burdens are supplied by linked datasets |
| product_classification_scope | complete equipment within the semantic boundary stated in sections 1 and 2, independent of the classification code used to locate this PCR |
| recursive_input_rule | a same-category purchased launch/recovery or training-device item is recorded as an atomic product input with its own upstream dataset and is not recursively decomposed inside this foreground package |
| upstream_dataset_requirement | each purchased product, fuel, utility, and chemical must link to a geographically and technologically representative upstream dataset; supplier-specific datasets are preferred for major components and metals |
| disclosure | declare make-versus-buy decisions, outsourced treatment, excluded installation or civil works, test-energy boundary, rework, packaged condition, reporting period, sites, and any same-category purchased item |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all product families | Include manufacturer-controlled fabrication, treatment, assembly, configuration, acceptance testing, and delivery preparation up to release at the factory gate; exclude installation, use, maintenance, and end-of-life. | `navsea-jfmm-alre-2024`; `faa-part-60-fstd` |
| `boundary_conditional_routes` | route-specific operations | Include each conditional process only when it occurs under the reporting manufacturer's operational or financial control; otherwise record the purchased treated component or service and link its upstream dataset without duplicating burdens. | `ec-stm-bref-2006`; `ec-sts-bref-2020` |
| `boundary_testing` | acceptance testing | Include utilities, fuels, test fluids, replaced parts, wastes, and direct emissions from all factory acceptance, objective, subjective, functional, or representative-load tests required before delivery. | `navsea-jfmm-alre-2024`; `us-navy-ford-alre-test-2017`; `faa-part-60-fstd` |
| `boundary_capital_goods` | production and test infrastructure | Exclude factory buildings and general-purpose capital equipment by default; disclose and include product-specific dies, fixtures, or test rigs when required by the study goal or when their contribution is expected to be material. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `metal_fabrication` | Metal cutting, forming, welding, and machining | conditional | include when structural or mechanical parts are fabricated under the reporting boundary | foreground component manufacture | kg accepted fabricated component |
| `surface_treatment` | Metal pretreatment, finishing, and coating | conditional | include each aqueous, electrolytic, chemical, or organic-coating route performed under the reporting boundary | foreground surface protection | m2 treated surface and kg accepted treated component |
| `subsystem_assembly` | Subsystem integration and final assembly | required | always include manufacturer-controlled mechanical, hydraulic, electrical, electronic, and software integration | foreground assembly | one assembled equipment configuration |
| `acceptance_testing` | Configuration verification and acceptance testing | required | always include tests required to release the equipment; individual fuel or hydraulic rows remain conditional on the test route | foreground testing | one accepted equipment configuration and test-hour record |
| `delivery_preparation` | Preservation, packaging, and factory-gate release | required | always include release inspection and the actual delivered packaging; rows are zero only when the named packaging component is demonstrably absent | foreground delivery preparation | one factory-gate reference item |

### Process: Metal cutting, forming, welding, and machining (`metal_fabrication`)

#### Inputs

##### Product flows

###### Carbon steel plate incorporated in fabricated parts (`mf_carbon_steel_plate`)

Record the issued mass of carbon steel plate that crosses into in-house cutting, forming, welding, or machining for the reference product.

- Selected flow: Carbon steel plate (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: net issued mass from material issue and return records, excluding unopened returned stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_bom_records`
- Sources:

###### Electricity consumed by fabrication equipment (`mf_electricity`)

Record metered or physically disaggregated purchased electricity for cutting, forming, welding, machining, extraction, and local support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: meter reading or shared-meter allocation to accepted fabrication work orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:

###### Industrial oxygen used for oxy-fuel operations (`mf_industrial_oxygen`)

Include only when oxygen is consumed in an in-boundary cutting, heating, or welding operation; record supplier or calibrated flow-meter volume.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200b9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: delivered volume adjusted for cylinder or tank inventory change at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 reference item using oxy-fuel operations
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:

###### Natural gas used for fabrication heat (`mf_natural_gas`)

Include only when gaseous natural gas is burned in in-boundary preheating, heat treatment, or drying associated with fabrication.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200b9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: metered consumption or inventory-adjusted delivered volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 reference item using natural-gas heat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fabricated metal component (`mf_fabricated_metal_component`)

Record the reconciled mass transferred from fabrication to treatment or assembly; this is an internal foreground intermediate.

- Selected flow: Fabricated metal component for aircraft launch, recovery, or training equipment (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured accepted mass transferred to the next foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted fabrication output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_bom_records`
- Sources:

##### Waste flows

###### Segregated carbon steel fabrication scrap (`mf_steel_scrap`)

Record offcuts, turnings, and rejected carbon steel removed from the foreground as one characterized waste stream; do not net recycled value against steel input.

- Selected flow: Carbon steel fabrication scrap (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: weighed segregated scrap leaving the fabrication process, net of verified internal remelt or reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from fabrication natural-gas combustion (`mf_fossil_co2`)

Include only direct combustion inside the fabrication boundary; upstream supply-chain emissions remain in the natural-gas dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: calculate from measured natural-gas consumption, supplier-specific carbon content, and documented oxidation fraction using `calc_direct_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 reference item using natural-gas heat
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:

### Process: Metal pretreatment, finishing, and coating (`surface_treatment`)

#### Inputs

##### Product flows

###### Process water for bath make-up and rinsing (`st_process_water`)

Record process water crossing the foreground boundary for aqueous bath make-up and rinsing; exclude closed-loop recirculation from repeated input counting.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: metered make-up and rinse-water mass, or volume converted with measured density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 reference item and disclosed treated surface area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `ec-stm-bref-2006`

###### Sodium hydroxide used in aqueous treatment (`st_sodium_hydroxide`)

Include only when sodium hydroxide is issued to cleaning, etching, bath maintenance, or wastewater treatment within the declared surface-treatment boundary; record active product mass and concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: inventory-adjusted mass of supplied sodium hydroxide product, with solution concentration disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 reference item and disclosed treated surface area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `ec-stm-bref-2006`

###### Surface coating product applied to equipment (`st_surface_coating`)

Include the single declared primer, paint, or protective coating product represented by this row; create additional atomic rows for other formulations rather than combining them.

- Selected flow: Solvent-borne protective surface coating (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: mass issued minus unopened return, with formulation, solids content, and transfer route disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 reference item and disclosed coated surface area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `ec-sts-bref-2020`

###### Electricity consumed by surface treatment (`st_electricity`)

Record electricity for electrochemical reactions, pumps, ventilation, extraction, drying, and other in-boundary treatment equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: treatment-line meter reading or physical allocation by operating time and rated load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 reference item and disclosed treated surface area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `ec-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted surface-treated metal component (`st_treated_component`)

Record the mass of accepted treated components transferred to assembly; this is an internal foreground intermediate.

- Selected flow: Surface-treated metal component for aircraft launch, recovery, or training equipment (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured accepted mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted surface-treatment output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment_records`
- Sources:

##### Waste flows

###### Spent surface-treatment process solution (`st_spent_process_solution`)

Record a single characterized spent bath or process solution leaving the foreground; different chemistries require separate atomic waste rows.

- Selected flow: Spent alkaline surface-treatment solution (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: weighed or volume-and-density-calculated spent alkaline solution sent to treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 reference item and disclosed treated surface area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources: `ec-stm-bref-2006`

###### Surface-treatment wastewater (`st_wastewater`)

Record the characterized aqueous effluent crossing to on-site or off-site wastewater treatment after internal recirculation; do not combine it with spent bath solution.

- Selected flow: Surface-treatment wastewater containing dissolved metals (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured discharge mass, or metered volume converted using measured density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 reference item and disclosed treated surface area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources: `ec-stm-bref-2006`

##### Elementary flows

###### Non-methane volatile organic compounds from coating (`st_nmvoc`)

Include direct release to air from the declared solvent-borne coating after captured solvent and abatement are accounted for.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured release or coating-solvent mass balance calculated with `calc_surface_material_balance`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 reference item and disclosed coated surface area
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment_records`
- Sources: `ec-sts-bref-2020`

### Process: Subsystem integration and final assembly (`subsystem_assembly`)

#### Inputs

##### Product flows

###### Fabricated metal component transferred into assembly (`as_fabricated_component`)

Record the mass of the linked foreground-fabricated or treated component consumed in assembly; do not add upstream burdens again.

- Selected flow: Fabricated metal component for aircraft launch, recovery, or training equipment (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: transferred mass reconciled to `mf_fabricated_metal_component` or `st_treated_component`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 assembled equipment configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_bom_records`
- Sources:

###### Electrical control cabinet installed in the equipment (`as_control_cabinet`)

Include only for a configuration with a separately purchased electrical control cabinet; record the actual model and quantity from the bill of materials.

- Selected flow: Electrical control cabinet (UUID unresolved)
- Flow property / unit: Number of items / item
- Amount rule: accepted units installed minus units removed before release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 assembled equipment configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_bom_records`
- Sources: `us-navy-ford-alre-test-2017`

###### Hydraulic power unit installed in the equipment (`as_hydraulic_power_unit`)

Include only for a hydraulic launch, recovery, securing, or control configuration and identify rated pressure and power.

- Selected flow: Hydraulic power unit (UUID unresolved)
- Flow property / unit: Number of items / item
- Amount rule: accepted units installed minus units removed before release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 assembled equipment configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_bom_records`
- Sources:

###### Visual display unit installed in a ground trainer (`as_visual_display_unit`)

Include only for a ground flight trainer configuration with a separately purchased display unit and declare display technology and configuration.

- Selected flow: Electronic visual display unit (UUID unresolved)
- Flow property / unit: Number of items / item
- Amount rule: accepted units installed minus units removed before release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 assembled ground flight trainer
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_bom_records`
- Sources: `faa-part-60-fstd`

###### Hydraulic oil initially charged to the equipment (`as_hydraulic_oil`)

Include only when hydraulic oil remains in the delivered configuration; declare grade and distinguish initial charge from test top-up.

- Selected flow: Anti-wear hydraulic oil (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: opening stock plus receipts minus closing stock and recovered oil, reconciled to retained product charge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 assembled hydraulic equipment configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_bom_records`
- Sources:

###### Electricity consumed by assembly and integration (`as_electricity`)

Record electricity for assembly tools, lifting, electronics integration, software loading, and assembly-area support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: assembly-area meter reading or documented physical allocation to the work order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 assembled equipment configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled equipment awaiting acceptance testing (`as_assembled_equipment`)

Record one configured assembly transferred to acceptance testing; this is an internal foreground intermediate.

- Selected flow: Assembled aircraft launch, recovery, or ground training equipment (UUID unresolved)
- Flow property / unit: Number of items / item
- Amount rule: accepted assembly count transferred to testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_and_output_records`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Configuration verification and acceptance testing (`acceptance_testing`)

#### Inputs

##### Product flows

###### Electricity consumed during acceptance testing (`at_electricity`)

Record electricity consumed by the equipment under test, simulators, loads, instrumentation, cooling, and test-area support during required acceptance tests.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: dedicated meter reading or power-time integration over the documented test sequence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_and_output_records`
- Sources: `us-navy-ford-alre-test-2017`; `faa-part-60-fstd`

###### Diesel fuel consumed by test auxiliary power (`at_diesel_fuel`)

Include only when a diesel-driven power pack, load system, or auxiliary generator operates inside the acceptance-test boundary.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: opening stock plus receipts minus closing stock and verified returns for the acceptance-test work order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 accepted reference item using diesel test power
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:

###### Hydraulic oil added during acceptance testing (`at_hydraulic_oil`)

Include only fresh anti-wear hydraulic oil added during test that is not already counted as retained initial charge; declare grade and disposition.

- Selected flow: Anti-wear hydraulic oil (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured top-up issued to the acceptance-test work order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted hydraulic equipment configuration
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_and_output_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Acceptance-tested equipment transferred for delivery preparation (`at_tested_equipment`)

Record only configurations that meet the declared release criteria; failed or reworked units remain within the reporting-period reconciliation.

- Selected flow: Acceptance-tested aircraft launch, recovery, or ground training equipment (UUID unresolved)
- Flow property / unit: Number of items / item
- Amount rule: count of configurations released by signed acceptance records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per acceptance-test output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_and_output_records`
- Sources: `us-navy-ford-alre-test-2017`; `faa-part-60-fstd`

##### Waste flows

###### Waste hydraulic oil removed after testing (`at_waste_hydraulic_oil`)

Record characterized test oil drained and sent off-site as waste; oil retained in the delivered product is excluded from this waste row.

- Selected flow: Waste anti-wear hydraulic oil (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured drained mass transferred to the named waste route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted hydraulic equipment configuration
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from diesel-powered acceptance testing (`at_fossil_co2`)

Include only direct test fuel combustion inside the foreground; upstream diesel emissions remain in the diesel dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: calculate from measured diesel mass, supplier-specific carbon content, and documented oxidation fraction using `calc_direct_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted reference item using diesel test power
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources:

### Process: Preservation, packaging, and factory-gate release (`delivery_preparation`)

#### Inputs

##### Product flows

###### Sawn timber used in the shipping crate (`dp_sawn_timber_crate`)

Include only the mass of new sawn timber incorporated in the delivered crate; identify treated timber and reusable fixtures separately.

- Selected flow: Sawn timber for a shipping crate (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: bill-of-material mass verified by purchase and packing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 packaged reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_release_records`
- Sources:

###### Polyethylene protective film used in packaging (`dp_polyethylene_film`)

Include only the mass of polyethylene film delivered with the product; other polymer films require separate atomic rows.

- Selected flow: Polyethylene protective film (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: bill-of-material mass verified by issue and packing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 packaged reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_release_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Factory-gate reference product (`reference_product`)

Record the measured net mass of one complete delivered configuration after acceptance and delivery preparation. The item count remains a required functional-unit and metadata declaration.

- Selected flow: Aircraft launching gear, deck-arrestor or similar gear, ground flying trainers `26408ad7-8d1b-4d01-946e-e40d87aa0f2f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: measured net mass of exactly 1 accepted and released reference item; report item count, net mass, and packaged mass separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: measured net mass of 1 reference item
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_release_records`
- Sources: `un-cpc-3-0-2025`; `navsea-jfmm-alre-2024`; `faa-part-60-fstd`

##### Waste flows

##### Elementary flows

Any additional material, component, utility, packaging component, waste, or direct emission that crosses a foreground process boundary and is not listed above must be added to the produced dataset as its own chemically or physically specific atomic row. It must not be folded into a plural “other materials,” “utilities,” or “wastes” row.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared production and test operations | Avoid allocation by separately metering or physically disaggregating work orders, process time, energy, material issues, tests, and waste for the declared reference configuration. |  |
| `allocation_shared_facility` | unavoidable shared facility burdens | When subdivision is not feasible, allocate by a documented physical driver that caused the burden, such as machine-hours weighted by rated load, treated surface area, measured mass throughput, or test power-time; do not use revenue unless no defensible physical relationship exists. |  |
| `allocation_scrap` | recovered metal and packaging | Report recovered material as a separate waste or secondary-material output and do not credit avoided primary production inside the foreground inventory; any recycling allocation is applied consistently in the downstream study and disclosed. |  |
| `allocation_rework` | rejected or reworked units | Assign rework and failed-test burdens to the accepted output of the same reporting period using traceable work-order records; disclose exceptional prototype or development burdens rather than silently averaging them into serial production. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_bom_records` | `metal_fabrication`; `subsystem_assembly` | material and component inputs; intermediates; retained oil | ERP issue/return, purchase, bill-of-material, weighbridge, and transfer records | work_order; material_or_component_id; grade_or_model; opening_stock; receipts; issued_quantity; returned_quantity; closing_stock; transferred_quantity; unit; net_mass | reconcile inventory movement to the as-built bill of materials and accepted transfer records | kg or item | each work order; reconcile monthly | at least 12 representative months or the complete production campaign when shorter | all reporting manufacturer sites | sum net issues and accepted transfers for reference-product work orders; allocate shared records only by the declared physical driver | signed material reconciliation; calibration record; as-built bill of materials; variance investigation |
| `cp_energy_and_fuel_records` | `metal_fabrication`; `subsystem_assembly`; `acceptance_testing` | electricity, natural gas, oxygen, diesel, and direct combustion calculation inputs | meter, cylinder/tank, invoice, and equipment run log | meter_id; opening_reading; closing_reading; delivery; opening_stock; closing_stock; reference_conditions; work_order; run_time; rated_load; fuel_carbon_content; oxidation_fraction | dedicated metering preferred; otherwise inventory balance or documented power-time disaggregation | MJ, m3, or kg | each batch or test; reconcile monthly | same reporting period as output | all in-boundary production and test areas | subtract opening from closing meter readings or reconcile stock; assign only by recorded work order and physical driver | meter calibration; invoice reconciliation; reference-condition record; run log; supplier fuel assay |
| `cp_surface_treatment_records` | `surface_treatment` | water, chemicals, coating, electricity, treated output, and NMVOC calculation inputs | bath log, meter, coating issue/return, area, production, and abatement records | bath_id; chemistry; concentration; make_up; drag_out; rinse_water; electricity; coating_issue; coating_return; solvent_fraction; captured_solvent; abatement_efficiency; treated_area; accepted_mass | reconcile each treatment line and formulation to accepted components | kg, MJ, or m2 | each bath addition and production batch; reconcile monthly | same reporting period as output | each in-boundary treatment line | sum net make-up and energy; avoid counting recirculation as new input; link treatment to accepted area and mass | bath analysis; meter calibration; formulation safety data; coating reconciliation; abatement monitoring; acceptance record |
| `cp_acceptance_and_output_records` | `subsystem_assembly`; `acceptance_testing` | assembled and tested intermediates; test electricity and oil | configuration, test, release, meter, and fluid issue records | serial_or_delivery_id; configuration; test_basis; test_start; test_end; objective_result; subjective_result; functional_result; electricity; oil_issue; oil_retained; rework; release_status | link signed test and release records to dedicated meters or logged equipment power-time | item, h, MJ, or kg | each acceptance sequence | complete reporting period | every reporting test facility | include all required attempts and rework for released items; exclude development tests only when separately identified and disclosed | signed test report; calibrated instrumentation; configuration baseline; nonconformance closure |
| `cp_waste_and_emission_records` | `metal_fabrication`; `surface_treatment`; `acceptance_testing` | steel scrap, spent solution, wastewater, waste oil, and direct emissions | scale ticket, manifest, discharge meter, laboratory analysis, and mass-balance record | waste_id; chemistry; hazardous_status; gross_mass; tare; discharge_volume; density; destination; recovered_mass; emission_measurement; work_order | weigh each shipment or meter each discharge; characterize chemistry before aggregation | kg | each shipment or discharge; reconcile monthly | same reporting period as output | all in-boundary generation points | sum by one characterized waste or emission identity and destination; subtract only verified internal reuse | calibrated scale or meter; laboratory report; waste manifest; mass-balance closure |
| `cp_packaging_and_release_records` | `delivery_preparation` | packaging inputs and factory-gate reference product | packing list, packaging bill, scale, and release record | serial_or_delivery_id; package_component; material_grade; component_mass; reusable_status; net_mass; packaged_mass; item_count; release_signature | reconcile actual packing materials and final weights to each released delivery | kg or item | each delivery | complete reporting period | all dispatch sites in scope | sum new packaging delivered with the product; report reusable fixtures separately; count only signed releases | packing list; calibrated scale; shipment photograph or inspection; signed release |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_item` | every inventory row | normalized amount = reporting-period amount assigned to conforming deliveries / count of conforming reference items; retain configuration-specific results when averaging would hide material differences | assigned row amount; released reference-item count; configuration identifier | row amount per reference item |  |
| `calc_electricity_conversion` | all electricity rows | electricity in MJ = metered electricity in kWh x 3.6 MJ/kWh | metered kWh | MJ electricity |  |
| `calc_inventory_balance` | issued materials, chemicals, oils, fuels, and packaging | net consumed = opening stock + receipts - closing stock - documented unopened returns - verified internal reuse; separately report retained product mass and characterized wastes | inventory movement and transfer records | reconciled net input, retained amount, and waste |  |
| `calc_direct_fossil_co2` | `mf_fossil_co2`; `at_fossil_co2` | fossil CO2 mass = measured fuel amount x supplier-specific fossil carbon content x documented oxidation fraction x 44/12; do not calculate when fuel composition or oxidation basis is missing | fuel amount; fossil carbon content; oxidation fraction | kg carbon dioxide (fossil) |  |
| `calc_surface_material_balance` | `st_nmvoc`; treatment losses | emitted coating solvent = solvent in net coating issue - solvent retained in coating - captured solvent - documented destruction; reconcile bath and rinse inputs to retained material, spent solution, wastewater, recovery, and measured releases | formulation, issue/return, capture, abatement, bath, rinse, waste, and discharge records | kg emitted NMVOC and treatment mass-balance residual | `ec-stm-bref-2006`; `ec-sts-bref-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_configuration` | reference product and purchased assemblies | Preserve serial or delivery identity, product family, configuration baseline, major options, performance or qualification class, and make-versus-buy status. | as-built bill of materials; configuration record; purchase specification; release certificate |
| `dq_temporal_coverage` | all foreground records | Cover at least 12 representative months; if the campaign is shorter, cover the complete campaign and disclose start/end dates, production volume, prototypes, shutdowns, and abnormal rework. | record-extract dates; production ledger; exception log |
| `dq_measurement` | metered and weighed rows | Use calibrated meters and scales appropriate to the measured quantity; document reference conditions for gases and density conversions for liquids. | calibration certificates; meter map; density and reference-condition records |
| `dq_completeness` | all process boundaries | Reconcile at least 95% of assigned input mass and energy by measured records; investigate rather than automatically cut off any single untracked flow expected to exceed 1% of reference-product mass or foreground energy. | signed reconciliation; variance investigation; added atomic rows |
| `dq_testing` | acceptance testing | Link each released item to its actual objective, subjective, functional, or representative-load test basis, attempts, energy, fluids, rework, and disposition. | signed test report; instrument list; nonconformance closure; `navsea-jfmm-alre-2024`; `us-navy-ford-alre-test-2017`; `faa-part-60-fstd` |
| `dq_outsourcing` | outsourced fabrication or treatment | Declare supplier, geography, process route, received state, and linked upstream dataset; do not claim zero burden for an outsourced operation. | purchase order; supplier declaration; incoming inspection; upstream dataset link |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | Fail when product family, configuration, function, qualification/performance class, net mass, packaged mass, acceptance basis, geography, reporting period, or factory-gate condition is missing. | `un-cpc-3-0-2025`; `navsea-jfmm-alre-2024`; `faa-part-60-fstd` |
| `validate_reference_count` | reference product | Require exactly one released reference item after normalization and a signed release record; a bundle of modules may count as one only when the contracted delivery boundary is explicit. |  |
| `validate_process_routes` | process map | Require assembly, acceptance testing, and delivery preparation; require each in-house fabrication, treatment, coating, hydraulic, fuel, and simulator route to activate its corresponding process and atomic rows. | `navsea-jfmm-alre-2024`; `us-navy-ford-alre-test-2017`; `faa-part-60-fstd`; `ec-stm-bref-2006`; `ec-sts-bref-2020` |
| `validate_atomic_inventory` | process inventory | Reject plural collection rows, combined utilities or fuels, proxy UUIDs, UUID/property/unit mismatches, and conditional rows without a documented applicability decision. |  |
| `validate_internal_links` | foreground intermediates | Require transferred amounts and identities to reconcile between fabrication, treatment, assembly, testing, and delivery-preparation processes without duplicate upstream burdens. |  |
| `validate_direct_emissions` | fuel and coating rows | Require direct fossil CO2 and NMVOC calculations when the corresponding in-boundary fuel combustion or solvent-borne coating occurs; require composition and abatement inputs or report the calculation as incomplete. | `ec-sts-bref-2020` |
| `validate_mass_energy` | foreground records | Require documented material and energy reconciliation, meter/reference-condition evidence, treatment recirculation treatment, waste destinations, and explanations for material residuals or shared-meter allocations. | `ec-stm-bref-2006` |
| `validate_test_release` | accepted output | Reject an output lacking the configuration-controlled acceptance record and required objective, subjective, functional, or representative-load test evidence for its declared product family. | `navsea-jfmm-alre-2024`; `us-navy-ford-alre-test-2017`; `faa-part-60-fstd` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for one configured, acceptance-tested equipment delivery at the manufacturer gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | product carbon footprint or LCA models that match the declared product family, configuration, performance/qualification class, make-versus-buy pattern, production geography, technology, acceptance-test boundary, and factory-gate state |
| excluded_use | complete aircraft, ship, runway, building, launch/recovery operation, pilot-training service, site installation, maintenance, use, or end-of-life without additional models; substitution among launch gear, arresting gear, and ground trainers without configuration review |
| required_metadata | canonical PCR id; product family; model/configuration; serial or delivery basis; performance/qualification class; included controls and auxiliaries; principal power technology; net and packaged mass; make-versus-buy and outsourced routes; sites and geography; reporting period; test basis; reference conditions; allocation drivers; upstream dataset links |
| required_quality_disclosure | completeness and reconciliation results; meter and scale calibration; gas reference conditions; treatment chemistry and area; coating formulation and abatement; test attempts and rework; waste characterization and destinations; unresolved UUIDs and range-evidence needs; deviations and cut-offs |
| update_trigger | changed product family or qualification basis; material configuration or mass change; changed launch/recovery/trainer technology; changed hydraulic, control, display, coating, test, or packaging route; supplier/geography change; reporting period older than five years; material meter, allocation, or completeness change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, *CPC Version 3.0 Structure*, code 43134, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved source hash verified 2026-09-05) | official classification identity and English title |
| `navsea-jfmm-alre-2024` | official_guidance | U.S. Naval Sea Systems Command, *Joint Fleet Maintenance Manual, Volume IV, Chapter 16: Aircraft Launch and Recovery Systems for Aircraft Carriers Only*, COMUSFLTFORCOMINST 4790.3 Rev D Change 4, 24 September 2024, https://www.navsea.navy.mil/Portals/103/Documents/SUBMEPP/JFMM/Volume_IV_D4.pdf (retrieved and original text verified 2026-09-11) | aircraft-carrier launch/recovery equipment boundary, production scope, and quality-assurance performance verification |
| `us-navy-ford-alre-test-2017` | official_guidance | U.S. Navy, *USS Gerald R. Ford Completes First Arrested Landing and Launch*, 29 July 2017, https://www.navy.mil/Press-Office/Press-Releases/display-pressreleases/Article/2252477/uss-gerald-r-ford-completes-first-arrested-landing-and-launch/ (retrieved and original text verified 2026-09-11) | EMALS/AAG system configuration and representative ashore/shipboard functional testing |
| `faa-part-60-fstd` | standard | U.S. Federal Aviation Administration, *14 CFR Part 60—Flight Simulation Training Device Initial and Continuing Qualification and Use*, consolidated rule and qualification performance standards, https://www.faa.gov/sites/faa.gov/files/about/initiatives/nsp/consolidated_version.pdf (retrieved 2026-09-05) | ground flight training-device boundary, configuration data, and objective/subjective qualification testing |
| `ec-stm-bref-2006` | official_guidance | European Commission, *Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-05) | conditional aqueous/electrolytic surface-treatment process, water, energy, chemicals, spent solutions, wastewater, and mass-balance controls |
| `ec-sts-bref-2020` | official_guidance | European Commission Joint Research Centre, *Surface Treatment Using Organic Solvents including Wood and Wood Products Preservation with Chemicals*, adopted December 2020, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf (retrieved 2026-09-05) | conditional aircraft and metal-goods coating, cleaning, and degreasing route |
