---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.solar-water-heaters
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Solar water heaters

## 1. Scope and Applicability

This rule covers an accepted complete solar water heater as sold, including its collector, storage tank, and connection components supplied in the declared configuration. Flat-plate and evacuated-tube routes are in scope and must be declared. The foreground starts when purchased stock, glazing, insulation, and components enter the factory and ends with the packaged finished heater at the factory gate. Upstream material and energy production connect through background datasets. Installation, operation, maintenance, and end of life are outside this manufacturing dataset. Standalone collectors, tanks, parts, photovoltaics, and electric-only water heaters are excluded. The manufacturing decomposition follows chapter 8, Tables 70 and 71 of `greening-2013`; its UK operation scenario and case values are not generic manufacturing values.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.solar-water-heaters |
| classification_refs | CPC 3.0 44826: Solar water heaters; `un-cpc-3-2025` |
| covered_products | Complete factory-made solar water heaters with collector and storage tank, flat-plate or evacuated-tube |
| excluded_products | Standalone collectors, standalone tanks, components, photovoltaics, electric-only heaters, site-built custom installations |
| representative_product | One accepted complete solar water heater of declared configuration |
| production_route | Collector fabrication; storage tank fabrication; final assembly and packaging |
| market_state | Packaged at factory gate; packaging mass excluded from net product mass M |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete device for heating domestic water using solar thermal energy |
| How much | One accepted finished machine of declared configuration with net mass M kg |
| How well | Record collector type, tank volume, rated performance and supplied parts; no universal performance value |
| How long or cycle | One unit at factory delivery; service life is outside this manufacturing dataset |
| reference_flow_link | `a_finished` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Solar water heaters `9ede182c-cfec-4513-a405-b17db74ed710` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; same configuration; collector technology; tank volume; supplied pump and heat-transfer fluid; packaging; accepted net mass M; factory location and period |

A foreground data package must declare the required qualifiers in metadata or equivalent process records.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Quantity and state of purchased materials and components entering the manufacturing facility |
| starting_condition_role | Foreground entry; upstream production covered by traceable background datasets |
| product_classification_scope | Complete CPC 44826 solar water heaters; any purchased complete heater is separately identified |
| recursive_input_rule | Do not recursively use this rule to model a purchased complete heater used as an input; link it as a distinct upstream dataset and disclose its quantity |
| upstream_dataset_requirement | Link upstream material, energy, and purchased-component datasets compatible with geography, technology, and time |
| disclosure | Declare configuration, supply state, purchased components, plant processes, packaging boundary, and exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_1` | manufacturing boundary | Include collector, tank, assembly, and supplied packaging; record actual inputs and wastes for the applicable configuration. | `greening-2013` |
| `boundary_2` | life-cycle stages | Model installation, operation, maintenance, and end of life separately; this manufacturing dataset ends at the factory gate. | `greening-2013` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `collector` | Collector fabrication | required | none | foreground manufacturing | per one accepted finished machine |
| `tank` | Storage tank fabrication | required | none | foreground manufacturing | per one accepted finished machine |
| `assembly` | Final assembly and packaging | required | none | foreground manufacturing | per one accepted finished machine |

### Process: Collector fabrication (`collector`)

#### Inputs

##### Product flows

###### Frame steel sheet (`c_steel_sheet`)

Include when all collector routes; use records for the same accepted configuration.

- Selected flow: Low-alloy steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_collector_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collector_bom`
- Sources: `greening-2013`

###### Flat-plate absorber copper sheet (`c_copper_sheet`)

Include when flat-plate collector only; use records for the same accepted configuration.

- Selected flow: Copper sheet `30cc5ca3-6198-4f82-8016-284f1b15d01b`
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_collector_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collector_bom`
- Sources: `greening-2013`

###### Flat-plate glazing (`c_flat_glass`)

Include when flat-plate collector only; use records for the same accepted configuration.

- Selected flow: Low-iron flat glass
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_collector_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collector_bom`
- Sources: `greening-2013`

###### Evacuated glass tube (`c_glass_tube`)

Include when evacuated-tube collector only; use records for the same accepted configuration.

- Selected flow: Borosilicate glass tube
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_collector_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collector_bom`
- Sources: `greening-2013`

###### Collector frame aluminium sheet (`c_aluminium_sheet`)

Include when when aluminium framing is installed; use records for the same accepted configuration.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_collector_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collector_bom`
- Sources: `greening-2013`

###### Collector manufacturing electricity (`c_electricity`)

Include when all collector routes; use records for the same accepted configuration.

- Selected flow: Alternating current `a500e350-83b8-4347-894e-b81ecd418615`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record and allocate to accepted finished machines using cp_collector_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collector_energy`
- Sources: `greening-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Collector steel offcuts (`c_steel_scrap`)

Include when when steel cutting creates offcuts; use records for the same accepted configuration.

- Selected flow: Steel scrap `37997e0e-e34b-4ab9-a642-5d86f4333919`
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_collector_scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collector_scrap`
- Sources:

##### Elementary flows

### Process: Storage tank fabrication (`tank`)

#### Inputs

##### Product flows

###### Tank steel sheet (`t_steel_sheet`)

Include when all tank routes; use records for the same accepted configuration.

- Selected flow: Low-alloy steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_tank_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tank_bom`
- Sources: `greening-2013`

###### Tank insulation glass wool (`t_glass_wool`)

Include when when glass-wool insulation is fitted; use records for the same accepted configuration.

- Selected flow: Glass Wool `85977f80-d866-44ec-bac9-52cb2d9fb421`
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_tank_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tank_bom`
- Sources: `greening-2013`

###### Tank manufacturing electricity (`t_electricity`)

Include when all tank routes; use records for the same accepted configuration.

- Selected flow: Alternating current `a500e350-83b8-4347-894e-b81ecd418615`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record and allocate to accepted finished machines using cp_tank_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tank_energy`
- Sources: `greening-2013`

###### Tank heating natural gas (`t_natural_gas`)

Include when when pipeline-quality natural gas fires a manufacturing step; use records for the same accepted configuration.

- Selected flow: Pipeline-quality natural gas `7766e51e-0b64-4fbb-89cb-489c33293137`
- Flow property / unit: Volume / m3
- Amount rule: Record and allocate to accepted finished machines using cp_tank_fuel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tank_fuel`
- Sources: `greening-2013`

###### Tank test water (`t_tap_water`)

Include when when hydrostatic testing uses tap water; use records for the same accepted configuration.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_tank_test_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tank_test_water`
- Sources: `greening-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Tank steel offcuts (`t_steel_scrap`)

Include when when steel cutting creates offcuts; use records for the same accepted configuration.

- Selected flow: Steel scrap `37997e0e-e34b-4ab9-a642-5d86f4333919`
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_tank_scrap.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tank_scrap`
- Sources:

###### Discharged tank test water (`t_test_water_waste`)

Include when when test water leaves the process; use records for the same accepted configuration.

- Selected flow: Used hydrostatic-test water
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_tank_test_water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tank_test_water`
- Sources:

##### Elementary flows

### Process: Final assembly and packaging (`assembly`)

#### Inputs

##### Product flows

###### Connection copper pipe (`a_copper_pipe`)

Include when when copper pipe is supplied with the finished heater; use records for the same accepted configuration.

- Selected flow: Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_assembly_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `greening-2013`

###### Integral circulation pump (`a_pump`)

Include when active circulating package only; use records for the same accepted configuration.

- Selected flow: Circulation pump
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_assembly_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `greening-2013`

###### Factory-charged propylene glycol (`a_glycol`)

Include when when heat-transfer circuit is charged at the factory; use records for the same accepted configuration.

- Selected flow: Propylene glycol
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_assembly_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `greening-2013`

###### Corrugated board packaging (`a_cardboard`)

Include when when corrugated board is supplied as transport packaging; use records for the same accepted configuration.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Record and allocate to accepted finished machines using cp_assembly_bom.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `greening-2013`

###### Final assembly electricity (`a_electricity`)

Include when all assembly routes; use records for the same accepted configuration.

- Selected flow: Alternating current `a500e350-83b8-4347-894e-b81ecd418615`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record and allocate to accepted finished machines using cp_assembly_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources: `greening-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished solar water heater (`a_finished`)

Include when all accepted units; use records for the same accepted configuration.

- Selected flow: Solar water heaters `9ede182c-cfec-4513-a405-b17db74ed710`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `greening-2013`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_1` | shared manufacturing resources | Prefer separately metered process and batch records; allocate shared meters by documented machine operating time or accepted production count and disclose the method. |  |
| `allocation_2` | steel offcuts | Report offcuts as distinct waste outputs; credit recycling only with separate evidence and consistent downstream boundary to avoid double counting. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | assembly | finished heater | weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit | representative production year | one declared factory | accepted net mass per machine | calibration certificate and acceptance record |
| `cp_collector_bom` | collector | stock materials | batch BOM | model; configuration; material code; issued mass; returned mass; accepted unit count | Reconcile stores issues and returns to accepted collector units. | kg | each production batch | representative production year | collector line | per one accepted finished machine | BOM and stores ledger |
| `cp_tank_bom` | tank | stock materials | batch BOM | model; configuration; material code; issued mass; returned mass; accepted unit count | Reconcile stores issues and returns to accepted tank units. | kg | each production batch | representative production year | tank line | per one accepted finished machine | BOM and stores ledger |
| `cp_assembly_bom` | assembly | supplied components | batch BOM | model; configuration; component code; issued mass; returned mass; accepted unit count | Reconcile purchased components and packaging to accepted finished heaters. | kg | each production batch | representative production year | assembly line | per one accepted finished machine | BOM and stores ledger |
| `cp_collector_energy` | collector | electricity | meter log | meter opening; meter closing; accepted unit count | Read allocated collector-line electricity meter and convert to MJ. | MJ | each production batch | representative production year | collector line | per one accepted finished machine | meter log and allocation record |
| `cp_tank_energy` | tank | electricity | meter log | meter opening; meter closing; accepted unit count | Read allocated tank-line electricity meter and convert to MJ. | MJ | each production batch | representative production year | tank line | per one accepted finished machine | meter log and allocation record |
| `cp_assembly_energy` | assembly | electricity | meter log | meter opening; meter closing; accepted unit count | Read allocated assembly-line electricity meter and convert to MJ. | MJ | each production batch | representative production year | assembly line | per one accepted finished machine | meter log and allocation record |
| `cp_tank_fuel` | tank | natural gas | fuel meter log | fuel meter opening; fuel meter closing; accepted unit count | Measure pipeline-quality natural gas volume from a calibrated meter. | m3 | each production batch | representative production year | tank line | per one accepted finished machine | fuel invoice and calorific-value record |
| `cp_collector_scrap` | collector | steel offcuts | weighed waste ledger | waste code; net offcut mass; accepted unit count | Weigh segregated collector steel offcuts. | kg | each production batch | representative production year | collector line | per one accepted finished machine | scale ticket and waste transfer note |
| `cp_tank_scrap` | tank | steel offcuts | weighed waste ledger | waste code; net offcut mass; accepted unit count | Weigh segregated tank steel offcuts. | kg | each production batch | representative production year | tank line | per one accepted finished machine | scale ticket and waste transfer note |
| `cp_tank_test_water` | tank | test water | water meter and discharge log | water meter; discharge meter; accepted unit count | Measure supplied and discharged hydrostatic-test water separately. | kg | each production batch | representative production year | tank line | per one accepted finished machine | water meter and discharge log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `batch_average` | shared batch records | Amount per machine = net batch quantity / accepted finished machines of the same configuration; exclude rework and rejects. | net batch quantity; accepted finished machine count | amount per machine |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_1` | all inventory rows | Keep the same configuration, production period, and measured units; reconcile batch acceptance counts. | batch ledger; calibration record |
| `dq_2` | conditional rows | Disclose route applicability and missing data; do not silently code an unobserved route as zero. | configuration list; process record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_1` | reference flow | Check a_finished is M kg; M comes from cp_mass for the same configuration and excludes transport packaging. |  |
| `validation_2` | materials and energy | Check batch coverage for inputs, offcuts, test water, and accepted output; disclose unreconciled mass differences. |  |
| `validation_3` | routes and scope | Check applicability of flat-plate and evacuated-tube rows and of pump, heat-transfer fluid, gas, and test water. | `greening-2013` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Solar water heater factory-gate foreground data package |
| downstream_use | May serve as `secondary_dataset` or `background_dataset` linked to installation, use, and end-of-life models |
| allowed_use | Manufacturing-stage modelling for matching configuration, geography, time, and product state |
| excluded_use | Do not use this factory-gate dataset as a full-life-cycle hot-water service or default performance for other technologies |
| required_metadata | model; collector route; tank volume; supplied components; M; factory; year; upstream datasets; allocation method |
| required_quality_disclosure | meter coverage; BOM completeness; waste fate; conditional-row applicability; gaps and estimates |
| update_trigger | Material change in product configuration, materials, energy mix, or manufacturing process |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product classification identity |
| `greening-2013` | literature | Benjamin Paul Greening, *Life cycle environmental and economic sustainability assessment of micro-generation technologies in the UK domestic sector*, 2013, University of Manchester, https://pure.manchester.ac.uk/ws/portalfiles/portal/54548470/FULL_TEXT.PDF | Manufacturing processes and candidate materials from Chapter 8, Tables 70–71; no general ranges |
