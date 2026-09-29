---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-used-in-the-milling-industry-or-for-the-working-of-cereals-or-dried-leguminou-52304b89
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Machinery for industrial grain milling and working of cereals or dried legumes

## 1. Scope and Applicability

This PCR covers the cradle-to-factory-gate production of one accepted, complete, non-farm machine whose declared function is industrial milling or other working of cereals or dried leguminous vegetables. A grain roller mill is the representative configuration, not a default bill of materials. The configuration, included drive and control equipment, site, and acceptance condition must be declared. Dedicated machines whose function is cleaning, sorting, or grading seed, grain, or dried legumes; farm-type machines; detached spare parts; whole milling plants; grain products; installation; use; and end-of-life are outside this product boundary. The official CPC category identifies the product, while the complete Diorit brochure supplies one concrete roller-mill example. `un-cpc-3-2025`; `buhler-diorit-2019`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-used-in-the-milling-industry-or-for-the-working-of-cereals-or-dried-leguminou-52304b89 |
| classification_refs | CPC 3.0 44513, exact product-category description; classification is not PCR identity. |
| covered_products | Accepted complete non-farm machines that mill or otherwise work cereals or dried legumes in an industrial setting. |
| excluded_products | Standalone grain or seed cleaning, sorting, or grading machines; farm-type machines; spare parts sold separately; entire plants; and milled food products. |
| representative_product | Configured industrial grain roller mill with declared casting, food-contact metal, drive, and control scope. |
| production_route | Purchased components, site fabrication or machining where performed, final assembly, and acceptance test. |
| market_state | Complete, accepted, net unpackaged machine at the manufacturer's factory gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an accepted complete machine for industrial milling or working of cereals or dried legumes. |
| How much | One accepted finished machine of the declared configuration. |
| How well | The machine meets its recorded factory acceptance specification for the declared grain or legume application and rated capacity. |
| How long or cycle | At factory-gate acceptance; this product reference does not assert a service lifetime or operating output. |
| reference_flow_link | `finished_machine_output` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Machinery used in the milling industry or for the working of cereals or dried leguminous vegetables other than farm-type machinery `777a709f-59dc-4927-843f-2e9546f5495e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Machine model and serial number; declared grain or legume application; rated capacity; complete configuration and included drive or controls; accepted net mass M; factory site and acceptance date. |

M is measured during foreground data production. It is the net mass of the same accepted machine whose material and energy exchanges are recorded per machine; transport packaging is excluded from M. `is-iso-14044-2006`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |

## 5. System Boundary

The foreground starts with purchased component and material receipts and on-site electricity entering the declared manufacturing site, and ends at acceptance of the net unpackaged complete machine. Record supplier processes as upstream datasets for purchased inputs rather than silently treating them as on-site fabrication. Include component machining, sheet fabrication, assembly, and acceptance testing only where the declared route performs them. The inventory separates one physical exchange per row. `is-iso-14044-2006`; `buhler-diorit-2019`.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased cast-iron frame casting, stainless-steel sheet and drive motor at the factory receipt boundary, with their supplier specifications and origin declared. |
| starting_condition_role | Documented purchased-input starting condition for the foreground machine factory. |
| product_classification_scope | Non-farm industrial machinery for milling or working cereals or dried legumes, not grain products or standalone grain cleaners. |
| recursive_input_rule | If a purchased input is itself a complete machine in this product category, record its distinct quantity and use a separate upstream machine dataset; do not expand the same factory foreground recursively. |
| upstream_dataset_requirement | Link each purchased component and electricity input to a representative upstream dataset with geography, technology, and product state disclosed. |
| disclosure | Disclose included components, subcontracted operations, test scope, exclusions, and any shared-process allocation. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | finished machine | Include documented material and energy receipts, attributable fabrication, assembly, test, and direct waste through acceptance of the unpackaged machine. | `is-iso-14044-2006` |
| `boundary_supplier_inputs` | purchased inputs | Link purchased components to upstream datasets and disclose any missing supplier processes or inputs. | `is-iso-14044-2006` |
| `boundary_exclusions` | product scope | Exclude factory-to-customer transport, installation, use and end-of-life from this factory-gate data package; disclose the exclusion. | `is-iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Component receipt and site fabrication | required | Include actual machining and sheet cutting performed for the declared configuration. | Foreground material and fabrication exchanges. | per one accepted finished machine |
| `assembly_acceptance` | Final assembly and acceptance | required | Include installed components and factory acceptance test for the declared configuration. | Finished-machine output and acceptance electricity. | per one accepted finished machine |

### Process: Component receipt and site fabrication (`component_fabrication`)

#### Inputs

##### Product flows

###### Purchased cast-iron frame casting (`frame_casting_input`)

Collect the mass of the accepted cast-iron frame casting received for the declared roller-mill configuration. The Diorit example has a cast-iron frame; other machine designs must disclose an inapplicable row rather than assume this material. `buhler-diorit-2019`.

- Selected flow: Cast-iron machine-frame casting
- Flow property / unit: Mass / kg
- Amount rule: Recorded accepted casting mass issued to one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_casting`
- Sources: `buhler-diorit-2019`

###### Food-contact stainless-steel sheet (`stainless_sheet_input`)

Collect the received stainless-steel sheet issued to food-contact components when the declared design uses this material. The Diorit example identifies stainless steel or other food-grade material for contact parts; it does not establish a universal stainless-steel quantity. `buhler-diorit-2019`.

- Selected flow: Stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Recorded stainless-steel sheet mass issued to one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stainless_sheet`
- Sources: `buhler-diorit-2019`

###### Electricity for component fabrication (`fabrication_electricity_input`)

Collect metered purchased grid electricity attributable to component machining or sheet fabrication performed at the site. The electricity identity remains pending because public candidates did not match the declared kWh property.

- Selected flow: Purchased grid alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity attributable to one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_electricity`
- Sources: `is-iso-14044-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap from sheet fabrication (`fabrication_steel_scrap_output`)

Record segregated steel scrap leaving on-site sheet cutting or machining. Do not create this waste row when no such fabrication occurs; record the destination and avoid crediting recycling without an explicit downstream model.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap dispatched per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_scrap`
- Sources: `is-iso-14044-2006`

##### Elementary flows

### Process: Final assembly and acceptance (`assembly_acceptance`)

#### Inputs

##### Product flows

###### Purchased drive motor (`drive_motor_input`)

Record the mass of the electric motor installed in the accepted configuration when the drive is supplied with the machine. Two otherwise similar public motor identities require review before UUID adoption. This is a conditional configured component, not a universal Diorit motor specification.

- Selected flow: Industrial electric drive motor
- Flow property / unit: Mass / kg
- Amount rule: Recorded per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drive_motor`
- Sources:

###### Electricity for acceptance testing (`test_electricity_input`)

Collect purchased grid electricity metered for factory acceptance tests of the declared machine configuration. Keep it separate from fabrication electricity.

- Selected flow: Purchased grid alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered acceptance-per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_electricity`
- Sources: `is-iso-14044-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete grain-milling machine (`finished_machine_output`)

The accepted net machine is the sole reference product output; its configuration and net mass match `cp_mass`. The public product flow describes the full CPC category, not a particular Bühler model.

- Selected flow: Machinery used in the milling industry or for the working of cereals or dried leguminous vegetables other than farm-type machinery `777a709f-59dc-4927-843f-2e9546f5495e`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared factory operations | Use machine-specific meter, job, and bill-of-material records to subdivide shared operations before allocating their exchanges. | `is-iso-14044-2006` |
| `allocation_physical` | inseparable shared operations | If subdivision is infeasible, use and document a causal physical relationship, such as measured machine time or processed mass, and retain the unallocated total and reconciliation. | `is-iso-14044-2006` |
| `allocation_other` | operations without a defensible physical relation | Document a justified alternative relation and sensitivity to the allocation choice; do not insert a default factor. | `is-iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_frame_casting` | `component_fabrication` | purchased frame casting | bill of materials and receipt | model; configuration; casting part id; received mass; issue count | Reconcile accepted casting receipt and part issue to the same machine configuration. | kg | each accepted machine | acceptance production lot | manufacturing site and declared suppliers | per one accepted finished machine | receipt, supplier specification, issue ledger |
| `cp_stainless_sheet` | `component_fabrication` | stainless-steel sheet | issue and cutting records | model; configuration; material grade; issue mass; returned mass | Weigh or reconcile traceable sheet issue records for the declared food-contact components. | kg | each accepted machine | acceptance production lot | manufacturing site | per one accepted finished machine | grade certificate, issue and return ledger |
| `cp_fabrication_electricity` | `component_fabrication` | purchased grid electricity | submeter or equipment log | meter start; meter end; job id; machine count | Submeter fabrication electricity or attribute a documented job-meter total to accepted machines. | kWh | each job or shift | acceptance production lot | manufacturing site | per one accepted finished machine | meter calibration, job log, allocation record |
| `cp_steel_scrap` | `component_fabrication` | post-industrial steel scrap | scrap dispatch record | waste code; scale ticket mass; destination; job id | Weigh segregated fabrication steel scrap and reconcile dispatched mass to the job. | kg | each dispatch | acceptance production lot | manufacturing site | per one accepted finished machine | scale ticket, waste transfer record |
| `cp_drive_motor` | `assembly_acceptance` | purchased drive motor | accepted bill of materials | model; configuration; motor part id; installed mass; quantity | Reconcile installed motor and supplier mass record with the acceptance configuration. | kg | each accepted machine | acceptance production lot | manufacturing site and declared supplier | per one accepted finished machine | bill of materials, supplier specification, acceptance record |
| `cp_test_electricity` | `assembly_acceptance` | purchased grid electricity | acceptance-test meter | meter start; meter end; test id; serial number | Meter the acceptance test or attribute a documented test-bay meter total to accepted machines. | kWh | each test | acceptance production lot | manufacturing site | per one accepted finished machine | test record, meter calibration, allocation record |
| `cp_mass` | `assembly_acceptance` | reference product | calibrated weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted machine | acceptance date | manufacturing site | accepted net mass per machine | scale calibration, weigh ticket, signed acceptance record |

### Calculation Rules

No default numeric factor or machine weight is prescribed. Collected exchange totals are attributed to one accepted finished machine under the linked protocol. Retain shared-operation totals and allocation workings for review.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | reference product and inputs | Match part, meter, waste and mass records to the same model, serial number, configuration and accepted lot. | bill of materials; acceptance record |
| `dq_metering` | electricity and mass | Preserve calibrated meter or scale evidence and explain attribution when a shared meter is used. | calibration certificate; meter log; allocation worksheet |
| `dq_supply` | purchased components | Record supplier, material grade, quantity and upstream dataset match; disclose missing supplier data. | supplier specification; receipt; dataset metadata |
| `dq_completeness` | entire inventory | Reconcile purchases, installed mass, returned stock and waste without assuming a universal machine material mix. | material balance; issue and scrap records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | completed machine | Confirm one reference output with M kg accepted net mass, the exact product UUID, matching configuration, and a linked `cp_mass` record. | `is-iso-14044-2006` |
| `validate_inventory` | foreground exchanges | Confirm each selected flow denotes one physical exchange, every collected row has its protocol, and purchased inputs have compatible upstream datasets. | `is-iso-14044-2006` |
| `validate_allocation` | shared operations | Reconcile allocated totals with measured factory totals, document the physical or alternative relation, and disclose gaps. | `is-iso-14044-2006` |
| `validate_range_gap` | reported quantities | Use foreground records for all quantities; do not treat the Diorit example or a single report assumption as a machine-category empirical range. | `buhler-diorit-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for one accepted complete machine configuration. |
| downstream_use | `secondary_dataset` or `background_dataset` after review of boundary and source quality. |
| allowed_use | Model cradle-to-factory-gate production of a declared non-farm cereal or dried-legume milling machine. |
| excluded_use | Do not use as grain-milling operation, food-product production, whole-plant installation, or machine lifetime service dataset. |
| required_metadata | PCR id; model; serial or representative configuration; grain or legume application; rated capacity; site; period; M; included components; supplier geographies. |
| required_quality_disclosure | Actual versus allocated exchanges; upstream dataset coverage; missing UUIDs; missing range evidence; excluded processes; uncertainty and data age. |
| update_trigger | New model or material configuration, manufacturing route, electricity source, acceptance protocol, or reviewed flow identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official product identity and exclusions relative to adjacent CPC descriptions. |
| `buhler-diorit-2019` | `handbook` | Bühler, *Diorit Roller Mill MDDY/Z*, Version 2019, pp. 1–2. https://dam.buhlergroup.com/asset/af37413b24454efb8d6787644dcff3b0/Brochure_Roller_Mill_Diorit_2019.pdf | Complete concrete machine example, cast-iron frame, food-contact materials and declared configuration; no generic amount. |
| `is-iso-14044-2006` | `standard` | Bureau of Indian Standards, *IS/ISO 14044 (2006): Environmental Management—Life Cycle Assessment—Requirements and Guidelines*, §§ 4.2.3.3, 4.3.2, 4.3.4. https://fenix.ciencias.ulisboa.pt/downloadFile/2251937252647064/is.iso.14044.2006.pdf | System boundary, unit-process data collection, normalization and allocation hierarchy. |
