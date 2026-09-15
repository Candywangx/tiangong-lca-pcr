---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.binoculars-monoculars-and-other-optical-telescopes-other-astronomical-instruments-excep-73ac0c3f
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Binoculars, monoculars and other optical telescopes; other astronomical instruments, except instruments for radio-astronomy; compound optical microscopes

## 1. Scope and Applicability

This PCR covers factory-gate foreground production of optical instruments within CPC 3.0 code 48314: binoculars, monoculars, other optical telescopes, non-radio astronomical instruments, and compound optical microscopes. It applies to a declared model and configuration. It excludes radio-astronomy instruments, simple magnifiers, electron or scanning-probe microscopes, separately sold cameras and detectors, use, maintenance, distribution, and end-of-life. Optical-element fabrication, optomechanical fabrication, and electronics integration are included only when performed inside the reporting foreground; purchased assemblies instead cross the boundary as separately identified product inputs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.binoculars-monoculars-and-other-optical-telescopes-other-astronomical-instruments-excep-73ac0c3f |
| classification_refs | CPC 3.0: 48314 |
| covered_products | Binoculars; monoculars; optical telescopes; non-radio astronomical instruments; compound optical microscopes |
| excluded_products | Radio-astronomy instruments; electron and scanning-probe microscopes; simple magnifiers; separately sold cameras or detectors |
| representative_product | One declared, saleable optical instrument model at the factory gate |
| production_route | Conditional in-house optical-element fabrication, optomechanical fabrication, and electronics integration, followed by required assembly, alignment, testing, and final packaging |
| market_state | Finished, quality-released, factory-gate instrument in its declared shipment configuration |

The current official CPC structure establishes the classification boundary (`un-cpc-3-0-structure-2025`). Manufacturing sources establish that grinding, polishing, centering, cleaning, coating, optomechanical operations, assembly, alignment, and testing are plausible route steps, but they do not establish universal inclusion or numerical defaults (`koehler-et-al-2021-optics-manufacturing`; `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing`).

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A quality-released instrument within the declared covered product family and model configuration |
| How much | 1 kg net mass of finished instrument |
| How well | Meets the manufacturer's declared optical, mechanical, electrical, and acceptance-test specifications |
| How long or cycle | At factory gate; no use-duration equivalence is asserted |
| reference_flow_link | `r24_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Binoculars, monoculars and other optical telescopes, other astronomical instruments, except instruments for radio-astronomy, compound optical microscopes `d2f8e7e0-b94f-4ea8-a75d-19f3ef90a8c7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | instrument family; model and configuration; optical design; magnification and aperture or numerical aperture; optical material and coating; powered or digital features; included accessories; net instrument mass; shipment packaging status; production geography; technology; reporting period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent field. Net instrument mass excludes removable shipment packaging; every included packaging component is recorded separately.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `r24_reference_product` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass after quality release and before removable shipment packaging; normalize all exchanges to exactly 1 kg. |
| `material_mass` | Material, component, adhesive, packaging, and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated mass records; convert supplier units to kg and document moisture, concentration, and gross-to-net corrections when material. |
| `electricity_energy` | Electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered electricity to MJ using 3.6 MJ per kWh; do not combine electricity with fuels, heat, or compressed air. |
| `water_mass` | `r03_process_water` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass measurement; if volume is measured, document temperature, density, reference conditions, and conversion. |
| `internal_transfer_balance` | Internal intermediate input/output pairs | Mass | kg | Use the same foreground flow identity and equal normalized quantity on both sides of each internal transfer; purchased substitutes must be separately identified inputs. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, blanks, components, assemblies, electricity, water, adhesive, and packaging as received at the reporting site |
| starting_condition_role | Foreground gate; upstream production and delivery are represented by linked background datasets |
| product_classification_scope | Finished instruments within the semantic boundary of CPC 3.0 code 48314 |
| recursive_input_rule | A purchased instrument or assembly within the same broad category remains a named purchased product input and must not recursively invoke this PCR inside the same foreground model |
| upstream_dataset_requirement | Link each purchased input and utility to a geographically, technologically, and temporally representative background dataset without duplicating its upstream inventory |
| disclosure | Declare which conditional processes are in-house, which subassemblies are purchased, facility sharing, coating route, electronics content, packaging configuration, cut-offs, and excluded operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all processes | Include all on-site operations from receipt of starting inputs through quality release and final packaging; exclude use, distribution, maintenance, and end-of-life. | `un-cpc-3-0-structure-2025`; `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing` |
| `boundary_conditional_routes` | `optical_element_fabrication`; `optomechanical_component_fabrication`; `electronics_integration` | Include a conditional process only when performed within the reporting foreground; otherwise record each purchased replacement assembly as its own input to the first consuming process. | `koehler-et-al-2021-optics-manufacturing`; `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing` |
| `boundary_background_separation` | purchased inputs and utilities | Do not repeat extraction, material production, electricity generation, or supplier operations already represented by linked background datasets. | `eu-pef-2021-method` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `optical_element_fabrication` | Optical-element fabrication | conditional | Performed in-house rather than represented by purchased finished optical elements | Produces finished optical elements by grinding, polishing, cleaning, and related finishing | 1 kg net reference product |
| `optomechanical_component_fabrication` | Optomechanical-component fabrication | conditional | Metal housings, barrels, stages, or mounts are machined in-house | Produces model-specific optomechanical components | 1 kg net reference product |
| `electronics_integration` | Electronics integration | conditional | The declared model contains powered or digital functions assembled in-house | Produces the configured electronics subassembly | 1 kg net reference product |
| `instrument_assembly_alignment_testing` | Instrument assembly, alignment, and testing | required | Always | Integrates applicable optical, mechanical, and electronic subassemblies and releases an unboxed instrument | 1 kg net reference product |
| `final_packaging` | Final packaging | required | Always; zero quantities are permitted only for packaging components demonstrably absent | Adds the declared shipment packaging and produces the reference product | 1 kg net reference product |

### Process: Optical-element fabrication (`optical_element_fabrication`)

#### Inputs

##### Product flows

###### Optical glass pressing blank (`r01_optical_glass_blank`)

Record the net mass of optical glass blanks entering in-house optical-element fabrication.

- Selected flow: Optical Glass Pressing Blank `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass minus documented returns and unused carry-over attributable to the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_fabrication`
- Sources: `koehler-et-al-2021-optics-manufacturing`; `tamron-lens-manufacturing`

###### Electricity for optical-element fabrication (`r02_optics_electricity`)

Record only electrical energy used by in-house grinding, polishing, cleaning, coating, and supporting equipment within this process boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or allocated equipment electricity under `allocation_shared_resources`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_fabrication`
- Sources: `eu-pef-2021-method`; `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing`

###### Process water for optical-element fabrication (`r03_process_water`)

Record process water entering in-house grinding, polishing, and cleaning; cooling water in a closed loop is recorded only as net make-up water, not recirculated throughput.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded net process-water input, excluding recirculated volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_fabrication`
- Sources: `koehler-et-al-2021-optics-manufacturing`; `tamron-lens-manufacturing`

###### Cerium oxide polishing material (`r04_cerium_oxide`)

Record cerium oxide consumed as polishing material when used by the declared route.

- Selected flow: Cerium oxide `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- Flow property / unit: Mass / kg
- Amount rule: Inventory withdrawal plus opening stock minus closing stock, corrected for returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_fabrication`
- Sources: `tamron-lens-manufacturing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished optical element (`r05_finished_optical_element`)

Create a model- and route-specific foreground intermediate flow for finished optical elements transferred to assembly; do not substitute the CPC reference product flow.

- Selected flow: Finished optical element
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to instrument assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_fabrication`
- Sources: `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing`

##### Waste flows

###### Waste polishing media (`r06_waste_polishing_media`)

Record collected spent polishing media leaving the process for treatment or recovery; exclude material carried in separately measured wastewater.

- Selected flow: Waste polishing media `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched waste mass, net of container tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_fabrication`
- Sources: `koehler-et-al-2021-optics-manufacturing`; `tamron-lens-manufacturing`

###### Optical-process wastewater (`r07_optical_process_wastewater`)

Record the mixed aqueous waste stream from grinding, polishing, and cleaning only when it crosses the foreground boundary for on-site or off-site treatment.

- Selected flow: Optical-process wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass or measured volume converted with documented density, net of separately recorded recovered water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_element_fabrication`
- Sources: `koehler-et-al-2021-optics-manufacturing`; `tamron-lens-manufacturing`

##### Elementary flows

### Process: Optomechanical-component fabrication (`optomechanical_component_fabrication`)

#### Inputs

##### Product flows

###### Aluminium alloy stock (`r08_aluminium_alloy`)

Record aluminium alloy stock entering in-house machining of housings, barrels, stages, or mounts.

- Selected flow: Aluminium alloy `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass minus documented reusable remnants returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optomechanical_component_fabrication`
- Sources: `tochigi-nikon-lens-manufacturing`

###### Electricity for optomechanical fabrication (`r09_machining_electricity`)

Record electrical energy used by in-house machining and associated process equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or allocated equipment electricity under `allocation_shared_resources`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optomechanical_component_fabrication`
- Sources: `eu-pef-2021-method`; `tochigi-nikon-lens-manufacturing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Optomechanical component (`r10_optomechanical_component`)

Create a model-specific foreground intermediate flow for accepted machined housings, barrels, stages, or mounts transferred to assembly.

- Selected flow: Optomechanical component
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to instrument assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optomechanical_component_fabrication`
- Sources: `tochigi-nikon-lens-manufacturing`

##### Waste flows

###### Aluminium scrap (`r11_aluminium_scrap`)

Record aluminium scrap leaving the foreground for recycling or waste treatment, net of internal recirculation.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched scrap mass, net of tare and internally reused chips or remnants
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optomechanical_component_fabrication`
- Sources: `tochigi-nikon-lens-manufacturing`

##### Elementary flows

### Process: Electronics integration (`electronics_integration`)

#### Inputs

##### Product flows

###### Populated instrument-control printed circuit board assembly (`r12_populated_pcb_assembly`)

Record a purchased populated printed circuit board assembly only for powered or digital models integrated in-house.

- Selected flow: Populated instrument-control printed circuit board assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass issued to the reporting model, net of returned defective assemblies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics_integration`
- Sources:

###### Electricity for electronics integration (`r13_electronics_electricity`)

Record electrical energy used for in-house electronics integration and functional testing within this conditional process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or allocated workstation electricity under `allocation_shared_resources`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics_integration`
- Sources: `eu-pef-2021-method`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Electronics subassembly (`r14_electronics_subassembly`)

Create a configuration-specific foreground intermediate flow for the accepted electronics subassembly transferred to instrument assembly.

- Selected flow: Electronics subassembly
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to instrument assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronics_integration`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Instrument assembly, alignment, and testing (`instrument_assembly_alignment_testing`)

#### Inputs

##### Product flows

###### Finished optical element input (`r15_finished_optical_element_input`)

Record the internal transfer from `r05_finished_optical_element` when optical elements are made in-house. If purchased, add the exact purchased optical-element product input instead of using this internal row.

- Selected flow: Finished optical element
- Flow property / unit: Mass / kg
- Amount rule: Equal to the accepted internal transfer from `r05_finished_optical_element`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_instrument_assembly_alignment_testing`
- Sources: `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing`

###### Optomechanical component input (`r16_optomechanical_component_input`)

Record the internal transfer from `r10_optomechanical_component` when optomechanical parts are made in-house. If purchased, add each exact purchased component input instead.

- Selected flow: Optomechanical component
- Flow property / unit: Mass / kg
- Amount rule: Equal to the accepted internal transfer from `r10_optomechanical_component`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_instrument_assembly_alignment_testing`
- Sources: `tochigi-nikon-lens-manufacturing`

###### Electronics subassembly input (`r17_electronics_subassembly_input`)

For powered or digital models integrated in-house, record the internal transfer from `r14_electronics_subassembly`; otherwise omit it and record any purchased electronics input by its exact identity.

- Selected flow: Electronics subassembly
- Flow property / unit: Mass / kg
- Amount rule: Equal to the accepted internal transfer from `r14_electronics_subassembly` when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_instrument_assembly_alignment_testing`
- Sources:

###### UV adhesive (`r18_uv_adhesive`)

Record UV-curing adhesive consumed in optical or mechanical bonding only when used by the declared assembly route.

- Selected flow: UV adhesive `6fe0476a-94ee-46e6-9d6d-e165a53ccd2a`
- Flow property / unit: Mass / kg
- Amount rule: Dispensed mass from batch records or opening stock plus receipts minus closing stock and documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_instrument_assembly_alignment_testing`
- Sources: `tamron-lens-manufacturing`

###### Electricity for assembly, alignment, and testing (`r19_assembly_electricity`)

Record electrical energy used by assembly tools, alignment stations, acceptance testing, and directly attributable support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or equipment power multiplied by logged operating time, with shared use allocated under `allocation_shared_resources`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_instrument_assembly_alignment_testing`
- Sources: `eu-pef-2021-method`; `tochigi-nikon-lens-manufacturing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unboxed quality-released instrument (`r20_unboxed_instrument`)

Create a model-specific foreground intermediate for the instrument that has passed acceptance testing but has not received removable shipment packaging.

- Selected flow: Unboxed quality-released optical instrument
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass transferred to final packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_instrument_assembly_alignment_testing`
- Sources: `tochigi-nikon-lens-manufacturing`

##### Waste flows

##### Elementary flows

### Process: Final packaging (`final_packaging`)

#### Inputs

##### Product flows

###### Unboxed quality-released instrument input (`r21_unboxed_instrument_input`)

Record the internal transfer from `r20_unboxed_instrument`; its quantity must equal the net reference-product mass.

- Selected flow: Unboxed quality-released optical instrument
- Flow property / unit: Mass / kg
- Amount rule: Equal to the transfer from `r20_unboxed_instrument`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`
- Sources:

###### Corrugated board box (`r22_corrugated_board_box`)

Record the net mass of corrugated board boxes included in the declared shipment configuration.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Packaging bill-of-material mass or measured box mass multiplied by units used, net of reused boxes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`
- Sources:

###### Polyethylene foam cushioning insert (`r23_polyethylene_foam_insert`)

Record polyethylene foam cushioning inserts only when included in the declared shipment configuration.

- Selected flow: Polyethylene foam cushioning insert
- Flow property / unit: Mass / kg
- Amount rule: Packaging bill-of-material mass or measured insert mass multiplied by units used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product (`r24_reference_product`)

Record exactly 1 kg net mass of the declared quality-released instrument; removable shipment packaging is not included in this amount.

- Selected flow: Binoculars, monoculars and other optical telescopes, other astronomical instruments, except instruments for radio-astronomy, compound optical microscopes `d2f8e7e0-b94f-4ea8-a75d-19f3ef90a8c7`
- Flow property / unit: Mass / kg
- Amount rule: Fixed at 1 kg after normalization from measured net finished-instrument mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_final_packaging`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | all processes | Collect model-, batch-, line-, or equipment-specific data and subdivide processes whenever feasible, avoiding allocation. | `eu-pef-2021-method` |
| `allocation_shared_resources` | shared electricity, water, consumables, and facility services | Allocate by a documented physical causal driver: metered consumption first, then equipment operating time multiplied by rated or measured demand, then batch processing time or mass only when demonstrably causal. Never allocate by revenue without showing that no physical relationship is practicable. | `eu-pef-2021-method` |
| `allocation_recycling_outputs` | `r06_waste_polishing_media`; `r11_aluminium_scrap` | Record the measured waste output at the foreground boundary without avoided-burden credit. Link downstream treatment or recycling consistently; disclose any alternative recycling convention outside this PCR result. | `eu-pef-2021-method` |
| `allocation_internal_transfers` | `r05_finished_optical_element`; `r10_optomechanical_component`; `r14_electronics_subassembly`; `r20_unboxed_instrument` and paired inputs | Internal transfers receive no independent environmental burden or co-product allocation; burdens remain in their producing foreground processes and transfer quantities must balance. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_optical_element_fabrication` | `optical_element_fabrication` | all inputs and outputs | meter, stock, transfer, and waste records | timestamps; batch/model; opening/receipts/issues/returns/closing; meter readings; output and waste mass | Reconcile batch and period records for the exact in-house route | kg; MJ | Per batch with monthly reconciliation | Representative continuous 12-month period or justified production campaign | Reporting site and declared equipment | Sum valid records, subtract returns and carry-over, allocate shared resources, then divide by net reference-product kg | Calibration, invoices, stock ledgers, meter logs, transfer tickets, waste manifests |
| `cp_optomechanical_component_fabrication` | `optomechanical_component_fabrication` | all inputs and outputs | stock issue, meter, transfer, and scrap records | timestamps; alloy grade; issued/returned mass; meter readings; accepted output; scrap mass | Reconcile issued stock, accepted transfers, and dispatched scrap | kg; MJ | Per batch with monthly reconciliation | Representative continuous 12-month period or justified production campaign | Reporting site and declared machines | Sum attributable records and normalize by net reference-product kg | Scale calibration, stock ledger, machine logs, scrap tickets |
| `cp_electronics_integration` | `electronics_integration` | all inputs and outputs | purchase issue, meter, and transfer records | timestamps; assembly part number; issued/returned mass; meter readings; accepted output | Reconcile accepted purchased boards, workstation energy, and internal transfers | kg; MJ | Per batch | Representative continuous 12-month period or justified production campaign | Reporting site and declared workstations | Sum attributable records and normalize by net reference-product kg | BOM, receiving records, meter or equipment logs, test and transfer records |
| `cp_instrument_assembly_alignment_testing` | `instrument_assembly_alignment_testing` | all inputs and outputs | transfer, dispensing, meter, and acceptance records | timestamps; model/configuration; transferred masses; adhesive stock or dispensing; energy; accepted and rejected units | Reconcile internal or purchased components, adhesive, energy, and accepted output | kg; MJ | Per production batch | Representative continuous 12-month period or justified production campaign | Reporting assembly and test site | Sum attributable records, apply documented physical allocation, divide by accepted net instrument mass | BOM, batch traveler, dispensing records, meter logs, alignment and acceptance-test records |
| `cp_final_packaging` | `final_packaging` | product and packaging inputs; reference output | transfer, BOM, scale, and packaging issue records | model/configuration; unboxed mass; packaging component/count/mass; finished net mass | Reconcile unboxed transfer, exact shipment configuration, and net reference output | kg | Per packaging configuration and batch | Same period as assembly records | Reporting packaging site | Sum each atomic packaging component separately; set normalized net reference output to 1 kg | Approved packaging BOM, scale calibration, issue records, finished-goods release |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | all inventory rows | normalized amount = attributable period amount / accepted net instrument mass in the same period | attributable exchange amount; accepted net instrument mass | exchange per 1 kg net reference product |  |
| `convert_electricity_to_mj` | `r02_optics_electricity`; `r09_machining_electricity`; `r13_electronics_electricity`; `r19_assembly_electricity` | MJ = metered kWh × 3.6 | metered or calculated kWh | MJ electricity |  |
| `calculate_stock_consumption` | stock-accounted materials | consumption = opening stock + receipts − closing stock − documented returns or transfers outside the studied production | reconciled stock records | kg consumed |  |
| `balance_internal_transfers` | paired internal intermediate rows | producing-process output quantity = consuming-process input quantity after common normalization | paired output and input records | balanced kg transfer |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all purchased inputs | Preserve exact flow identity, property, unit, geography, technology, supplier state, and product-state qualifiers; unresolved UUIDs remain explicit. | Direct-read UUID audit, BOM, supplier specification, and dataset metadata |
| `dq_temporal` | all foreground data | Prefer one representative continuous 12-month period; justify campaigns, extrapolation, shutdowns, rework, and abnormal production. | Dated source records and production log |
| `dq_metering` | electricity and water | Use calibrated submeters where feasible; disclose estimation, allocation driver, meter boundary, and conversion assumptions. | Calibration certificate, meter map, readings, and calculation sheet |
| `dq_mass_balance` | material-processing and internal-transfer processes | Reconcile material inputs with accepted output, waste, stock change, and documented losses; investigate material discrepancies. | Signed mass-balance worksheet and source records |
| `dq_route_disclosure` | all conditional processes | State included and excluded routes, purchased substitutes, coating route, powered/digital content, and packaging configuration. | Process map, BOM, supplier list, and dataset comment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Exactly one quantitative reference must resolve to UUID `d2f8e7e0-b94f-4ea8-a75d-19f3ef90a8c7`, Mass, kg, and an amount of 1 after normalization; all required qualifiers must be declared. | `un-cpc-3-0-structure-2025` |
| `validate_atomic_inventory` | all inventory rows | Every row must be one atomic exchange; UUID-empty rows must remain explicitly unresolved and no category label may replace a concrete flow. |  |
| `validate_conditional_routes` | conditional processes | Each conditional process must be marked included or not applicable with evidence; when excluded, its internally produced intermediates must not be counted and exact purchased substitutes must be added. | `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing` |
| `validate_internal_transfer_balance` | paired internal intermediates | Included internal output/input pairs must use the same foreground identity and equal normalized mass; no background burden may be attached twice. |  |
| `validate_electricity_separation` | electricity rows | Electricity must be reported in MJ and separately for each applicable process; fuels, heat, and compressed air must not be combined with it. | `eu-pef-2021-method` |
| `validate_packaging_and_net_mass` | final packaging | Reference amount must exclude removable shipment packaging, while each included packaging component is separately reported; absent components require configuration evidence. |  |
| `validate_allocation` | shared resources and waste outputs | Every non-direct assignment must identify the quantity, physical driver, records, formula, and affected products; waste outputs receive no avoided-burden credit in the foreground result. | `eu-pef-2021-method` |
| `validate_ranges` | all inventory rows | No numerical default or QA range may be inferred from this PCR; any added range requires verified boundary-compatible evidence and source identifiers. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for one declared optical-instrument model and configuration |
| downstream_use | Construction of TianGong foreground data packages and downstream process or lifecycle-model projections |
| allowed_use | Model-specific comparison or contribution analysis when functional performance, configuration, boundary, geography, technology, period, and data quality are compatible |
| excluded_use | Universal product-family average; use-phase or lifetime comparison; radio-astronomy, electron-microscope, or separately sold component claims; unsupported numerical defaults |
| required_metadata | Required reference qualifiers; site and period; included conditional routes; purchased assemblies; coating route; electronics content; packaging configuration; background links; allocation; cut-offs |
| required_quality_disclosure | Primary-data coverage, metering and estimation shares, mass-balance closure, unresolved flow identities, allocation drivers, data gaps, and deviations from this PCR |
| update_trigger | Material change in model configuration, optical design, mass, manufacturing route, supplier, site, energy mix, electronics, packaging, allocation, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, `https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv` | Official CPC 48314 English identity and classification boundary |
| `un-cpc-1-1-chinese` | official_guidance | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese, `https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf` | Verified professional Chinese rendering of the product-category wording |
| `koehler-et-al-2021-optics-manufacturing` | literature | Köhler et al., “Quantification of Carbonic Contamination of Fused Silica Surfaces at Different Stages of Classical Optics Manufacturing,” Materials 14(7), 1620, 2021, `https://doi.org/10.3390/ma14071620` | Classical optical grinding, lapping, polishing, water, coolant, and polishing-media process relevance |
| `tochigi-nikon-lens-manufacturing` | extension_guidance | Tochigi Nikon, “NIKKOR Lens Work Process (ニッコールレンズ作業工程),” `https://www.jp.nikon.com/company/corporate/group/ktn/businesses/imaging/process/` | Grinding, fine grinding, polishing, coating, barrel-component machining, electronics/FPC integration, assembly, operational checks, and final optical inspection route decomposition |
| `tamron-lens-manufacturing` | extension_guidance | Tamron, “Lens Manufacturing Process,” `https://www.tamron.com/global/monozukuri/tour/content.html` | Fine grinding, coolant circulation, polishing, cleaning, purified water, vacuum deposition, centering, and bonding route decomposition |
| `eu-pef-2021-method` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, `https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf` | Specific energy metering, subdivision, physical-causality allocation, and foreground/background consistency |
