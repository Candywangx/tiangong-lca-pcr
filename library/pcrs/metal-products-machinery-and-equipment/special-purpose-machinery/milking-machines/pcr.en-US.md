---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.milking-machines
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Milking machines

## 1. Scope and Applicability

This rule covers production of one accepted, complete vacuum and pulsation milking machine at the factory gate, including declared fitted milking assemblies. Bucket, pipeline and recorder configurations are included when their bill of materials and acceptance record identify the delivered configuration. It excludes dairy processing and cooling machinery, loose replacement parts, installation services, operation on farm, cleaning during use, and end of life. The foreground inventory covers attributed component preparation, assembly and acceptance testing; supplied components carry linked upstream datasets. The boundary is grounded in `un-cpc-3-2025` and equipment architecture in `fao-milking-machine`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.milking-machines |
| classification_refs | CPC 3.0 44131 Milking machines (`un-cpc-3-2025`) |
| covered_products | Complete vacuum and pulsation milking machines, including bucket and pipeline configurations |
| excluded_products | Dairy processing machinery; separately sold parts; installation service; on-farm operation |
| representative_product | One accepted complete milking machine of a declared configuration |
| production_route | Component preparation where performed, purchased-part receipt, assembly and acceptance testing |
| market_state | Factory-gate accepted complete machine, excluding transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One complete accepted milking machine |
| How much | M kg of the same accepted configuration |
| How well | Passed documented factory acceptance for the declared configuration |
| How long or cycle | One delivered machine; use duration is outside this production inventory |
| reference_flow_link | finished_machine |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Milking machines `39d43e6f-0404-4124-bbea-9999523eddb4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; configuration; vacuum and pulsation arrangement; included milk-contact assembly; accepted net mass M; factory-gate state |

When constructing a foreground data package, the required qualifiers must be declared in the dataset or equivalent process notes.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |

## 5. System Boundary

Include attributable incoming supplied components and materials, factory electricity, outgoing accepted machines and separately recorded production waste. Upstream burdens of supplied flows are linked through datasets, with no recursive recreation of this product category. Exclude use, farm installation and disposal unless a separate study extends the boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory receipt of purchased components and raw sheet, with supplier state and on-site fabrication route declared |
| starting_condition_role | Foreground start for manufacturing records |
| product_classification_scope | Complete milking machines; CPC 3.0 44131 is classification context only |
| recursive_input_rule | If an incoming complete milking machine is used, record it as an upstream product input and disclose its source dataset rather than recursively reclassifying it as new output |
| upstream_dataset_requirement | Link upstream datasets for each purchased component and material with documented geography and technology |
| disclosure | Disclose configuration, purchased versus fabricated components, missing component records, test energy, waste route and factory-gate cut-off |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture_assembly | Manufacture, assembly and acceptance test | required | All accepted complete milking machines | Foreground production | per one accepted finished machine |

### Process: Manufacture, assembly and acceptance test (`manufacture_assembly`)

#### Inputs

##### Product flows

###### Stainless steel sheet (`steel_sheet`)

Only if the accepted machine includes sheet fabricated on site; record sheet issued to this model, excluding sheet embodied in a purchased component.

- Selected flow: Stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Only if the accepted machine includes sheet fabricated on site; record sheet issued to this model, excluding sheet embodied in a purchased component.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`

###### Vacuum pump (`vacuum_pump`)

Record the purchased vacuum pump fitted to the accepted machine.

- Selected flow: Vacuum pump
- Flow property / unit: Mass / kg
- Amount rule: Record the purchased vacuum pump fitted to the accepted machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `fao-milking-machine`

###### Milking pulsator (`pulsator`)

Record the purchased pulsator fitted to the accepted machine.

- Selected flow: Milking pulsator
- Flow property / unit: Mass / kg
- Amount rule: Record the purchased pulsator fitted to the accepted machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `fao-milking-machine`

###### Teatcup cluster (`teatcup_cluster`)

Record the purchased teatcup cluster fitted to the accepted machine; exclude separately listed tubing from this quantity.

- Selected flow: Teatcup cluster
- Flow property / unit: Mass / kg
- Amount rule: Record the purchased teatcup cluster fitted to the accepted machine; exclude separately listed tubing from this quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `fao-milking-machine`

###### Silicone milk tube (`milk_tube`)

Only if the silicone milk tube is supplied separately from the teatcup cluster; record installed tube mass.

- Selected flow: Silicone milk tube
- Flow property / unit: Mass / kg
- Amount rule: Only if the silicone milk tube is supplied separately from the teatcup cluster; record installed tube mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources: `fao-milking-machine`

###### Electricity (`electricity`)

Record metered electricity attributable to fabrication, assembly and acceptance testing, per one accepted finished machine.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Record metered electricity attributable to fabrication, assembly and acceptance testing, per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Milking machines (`finished_machine`)

The accepted complete machine leaves the foreground process.

- Selected flow: Milking machines `39d43e6f-0404-4124-bbea-9999523eddb4`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Stainless steel sheet offcuts (`steel_scrap`)

Only when sheet is fabricated on site; record separately weighed offcuts leaving the process as waste.

- Selected flow: Stainless steel sheet offcuts
- Flow property / unit: Mass / kg
- Amount rule: Only when sheet is fabricated on site; record separately weighed offcuts leaving the process as waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_1 | shared_factory_inputs | Subdivide shared manufacturing processes using traceable records first; if subdivision is infeasible, allocate by a demonstrable physical causal relationship and disclose the basis. | eu-pef-2021 |
| allocation_2 | steel_offcuts | Report separately weighed stainless steel offcuts as a waste flow; do not credit unverified recycled substitution against this product. | eu-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | manufacture_assembly | reference product | acceptance weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | per machine | same production period | this factory | accepted net mass per machine | calibration certificate and acceptance record |
| cp_bom | manufacture_assembly | material inputs | bill of materials and issue records | model; configuration; part number; mass; issued quantity; accepted machine count | Reconcile actual issues installed in the model; do not double count purchased integrated assemblies and separately listed tubing. | kg | per batch | same production period | this factory | per one accepted finished machine | bill of materials, supplier invoice and issue record |
| cp_energy | manufacture_assembly | electricity input | meter and work order | meter reading; work order; accepted machine count; meter unit | Read attributable meters and acceptance-test logs; document conversion from meter unit to MJ. | MJ | per batch | same production period | this factory | per one accepted finished machine | meter calibration and work order |
| cp_scrap | manufacture_assembly | sheet waste | waste weighing record | waste grade; net mass; batch; destination; accepted machine count | Weigh sheet offcuts separately and reconcile with sheet issue batch. | kg | per batch | same production period | this factory | per one accepted finished machine | weigh ticket and waste transfer record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_1 | all inventory rows | Materials, energy, waste and acceptance records must be traceable to one model and configuration; disclose each missing item. | bill of materials, work order and meter records |
| dq_2 | reference product | Net mass excludes transport packaging and matches the accepted configuration. | calibrated weighing and acceptance records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_1 | reference_product | Check that `finished_machine` M kg equals `cp_mass` accepted net mass of the same configuration. |  |
| validation_2 | component_mass | Check that a purchased integrated assembly and separately listed tubing are not counted twice, and that sheet and offcuts appear only when fabrication occurs. | fao-milking-machine |
| validation_3 | inventory_completeness | Disclose missing component, energy and waste records; a blank is not zero. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing data package |
| downstream_use | production-stage projection to process and lifecyclemodel |
| allowed_use | production inventory for declared configuration and factory-gate boundary |
| excluded_use | does not represent farm use, installation or end of life |
| required_metadata | model, configuration, production site and period, M, acceptance state, component boundary |
| required_quality_disclosure | data gaps, upstream dataset representativeness, energy attribution and waste destination |
| update_trigger | material change in configuration, major suppliers or manufacturing route |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | product classification boundary |
| fao-milking-machine | official_guidance | https://www.fao.org/4/T0218E/T0218E02.htm | vacuum pump, pulsator and cluster architecture |
| eu-pef-2021 | official_guidance | https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf | shared-process allocation hierarchy |
