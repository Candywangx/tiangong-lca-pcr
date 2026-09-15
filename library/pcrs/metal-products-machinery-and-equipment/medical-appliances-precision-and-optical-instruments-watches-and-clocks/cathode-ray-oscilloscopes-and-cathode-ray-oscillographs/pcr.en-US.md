---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.cathode-ray-oscilloscopes-and-cathode-ray-oscillographs
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cathode-ray oscilloscopes and cathode-ray oscillographs

## 1. Scope and Applicability

This PCR covers factory-gate production of complete electrical test-and-measurement instruments that display a waveform on a cathode-ray tube, including instruments that make a permanent cathode-ray waveform record. It excludes digital or LCD oscilloscopes without a cathode-ray display, standalone cathode-ray tubes, monitors and televisions, generic meters, probes and accessories, repair, use, and end-of-life treatment. It applies to new packaged instruments; refurbished products require a separately declared route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.cathode-ray-oscilloscopes-and-cathode-ray-oscillographs |
| classification_refs | CPC 3.0: 48242 (exact classification context) |
| covered_products | Complete cathode-ray oscilloscopes; complete cathode-ray oscillographs that display and record electrical waveforms |
| excluded_products | Digital/LCD oscilloscopes without a cathode-ray display; standalone cathode-ray tubes; monitors; televisions; probes; parts; accessories; repair services; refurbished instruments |
| representative_product | Packaged, calibrated cathode-ray oscilloscope ready for sale |
| production_route | Purchased component receipt, instrument assembly, calibration and electrical safety testing, and protective packaging |
| market_state | New, complete, packaged instrument at the manufacturer factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete cathode-ray oscilloscope or cathode-ray oscillograph that displays an input signal as a cathode-ray waveform and, when applicable, records it |
| How much | 1 kg of packaged reference product |
| How well | Conforming to the declared model specification and passed calibration, functional, and applicable measuring-circuit safety tests |
| How long or cycle | One completed manufacturing cycle to factory-gate release; use life is outside the boundary |
| reference_flow_link | `finished_instrument` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cathode-ray oscilloscopes and cathode-ray oscillographs `0b3b194a-85eb-4034-8599-9f44eb63f98b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; oscilloscope or oscillograph; analogue bandwidth; channel count; recording capability; CRT type and size; mains rating; applicable measuring-circuit category; calibration status; packaging included; production geography; production period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | packaged reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net packaged-product mass on calibrated scales; include sale packaging and exclude pallets and reusable transport fixtures. |
| `component_mass` | material and component inputs and waste outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert receipt, issue, return, and waste records to a consistent mass basis and disclose it. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Convert metered kWh using 1 kWh = 3.6 MJ; disclose voltage, grid geography, losses, and meter allocation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased CRTs, boards, housings, conductors, packaging, and electricity cross the manufacturing-site receiving boundary |
| starting_condition_role | Cradle-to-gate upstream products supplied to the foreground instrument-manufacturing system |
| product_classification_scope | Complete cathode-ray oscilloscopes and cathode-ray oscillographs, independent of model-specific bandwidth or channel count |
| recursive_input_rule | A same-category instrument entering for incorporation or remanufacture is a separate input with its own upstream dataset; it is not silently folded into the reference product |
| upstream_dataset_requirement | Every purchased product and energy input requires a geographically and technologically representative upstream dataset or an explicit data gap |
| disclosure | Declare purchased-versus-in-house component boundaries, board population state, CRT type, housing material, packaging configuration, rework, test duration, electricity allocation, exclusions, and cut-offs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground manufacturing | Include component receipt, instrument assembly, calibration and electrical safety testing, packaging, direct wastes, and packaged output. | `us-epa-desktop-computer-displays-lca-2001`; `iec-61010-2-030-2017` |
| `boundary_rule_2` | purchased inputs | Keep upstream CRT, board, metal, plastic, copper, packaging, and electricity production in linked upstream datasets; do not duplicate them in foreground assembly. | `us-epa-desktop-computer-displays-lca-2001` |
| `boundary_rule_3` | exclusions | Exclude capital equipment, employee travel, distribution, use, repair, and end-of-life unless the study expands and reports them separately. | `eu-jrc-ilcd-lca-detailed-guidance-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `instrument_assembly` | Instrument mechanical and electrical assembly | required | All products | Foreground production | kg assembled product sent to test |
| `calibration_and_safety_test` | Calibration, functional test, and electrical safety test | required | All products; programme follows declared model and market requirements | Foreground conditioning | kg conforming product sent to packaging |
| `protective_packaging` | Protective packaging | required | Each packaging component is recorded only when present in the declared configuration | Foreground packaging | 1 kg packaged reference product |

### Process: Instrument mechanical and electrical assembly (`instrument_assembly`)

#### Inputs

##### Product flows

###### Cathode-ray tube (`cathode_ray_tube`)

Record the finished tube issued to assembly and retain its specification and supplier.

- Selected flow: Cathode-ray tube
- Flow property / unit: Mass / kg
- Amount rule: measured net mass issued minus unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `us-epa-desktop-computer-displays-lca-2001`

###### Printed wiring board (`printed_wire_board`)

Record the board issued to assembly and retain its population state and function.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: measured net board mass incorporated; declare bare or populated state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `us-epa-desktop-computer-displays-lca-2001`

###### Steel sheet for shields and enclosure parts (`steel_sheet`)

Record this exchange when steel sheet is incorporated in shields, chassis, or enclosure parts.

- Selected flow: Steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured net incorporated steel-sheet mass; record only when present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `us-epa-desktop-computer-displays-lca-2001`

###### Plastic housing (`plastic_housing`)

Record the complete housing issued to assembly and retain its polymer composition.

- Selected flow: Plastic housing `8751d2f6-df48-47d3-ac51-d34f96fbec96`
- Flow property / unit: Mass / kg
- Amount rule: measured net housing mass incorporated; disclose polymer and recycled content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `us-epa-desktop-computer-displays-lca-2001`

###### Copper wire (`copper_wire`)

Record wire incorporated outside purchased boards and CRT subassemblies to prevent double counting.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass / kg
- Amount rule: measured net incorporated wire outside purchased boards and CRT subassemblies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `us-epa-desktop-computer-displays-lca-2001`

###### Assembly electricity (`assembly_electricity`)

Record metered electricity attributable to mechanical and electrical assembly.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: allocated metered assembly electricity converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_electricity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Broken cathode-ray-tube glass (`broken_crt_glass`)

Record broken CRT glass separately because its composition and treatment differ from ordinary glass.

- Selected flow: Broken cathode-ray-tube glass waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred off the assembly line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste`
- Sources: `us-epa-desktop-computer-displays-lca-2001`

###### Rejected populated printed wiring board (`waste_populated_pwb`)

Record populated boards rejected before off-site recovery or treatment.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: measured rejected populated-board mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste`
- Sources: `us-epa-desktop-computer-displays-lca-2001`

###### Polystyrene housing scrap (`polystyrene_housing_scrap`)

Record housing scrap separately from packaging waste.

- Selected flow: Polystyrene housing scrap
- Flow property / unit: Mass / kg
- Amount rule: measured housing scrap mass; keep separate from packaging waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_waste`
- Sources: `us-epa-desktop-computer-displays-lca-2001`

##### Elementary flows

### Process: Calibration, functional test, and electrical safety test (`calibration_and_safety_test`)

#### Inputs

##### Product flows

###### Test electricity (`test_electricity`)

Record electricity used by powered instruments and test equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: allocated metered electricity for powered units and test equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_electricity`
- Sources: `iec-61010-2-030-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Protective packaging (`protective_packaging`)

#### Inputs

##### Product flows

###### Corrugated fibreboard box (`corrugated_box`)

Record the converted corrugated box included with the sale-ready instrument.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: measured mass consumed net of unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`

###### Expanded-polystyrene protective packaging (`expanded_polystyrene_packaging`)

Record moulded inserts when present in the declared packaging configuration.

- Selected flow: Expanded-polystyrene protective packaging
- Flow property / unit: Mass / kg
- Amount rule: measured insert mass consumed net of unused returns; record only when present
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged finished instrument (`finished_instrument`)

Record only conforming instruments released with the declared sale packaging.

- Selected flow: Cathode-ray oscilloscopes and cathode-ray oscillographs `0b3b194a-85eb-4034-8599-9f44eb63f98b`
- Flow property / unit: Mass / kg
- Amount rule: fixed normalization output of 1 kg packaged reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | separable production | Avoid allocation by separately metering assembly, test, and packaging and assigning model-specific component issues directly. | `eu-jrc-ilcd-lca-detailed-guidance-2010` |
| `allocation_rule_2` | shared utilities and wastes | Allocate shared electricity and waste using measured equipment time, test time, mass, or another causal physical driver; disclose it. | `eu-jrc-ilcd-lca-detailed-guidance-2010` |
| `allocation_rule_3` | saleable scrap | Report gross input, incorporated mass, scrap output, and credited recovery separately; do not subtract revenue or avoided burden without a declared method. | `eu-jrc-ilcd-lca-detailed-guidance-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_mass` | `instrument_assembly` | component inputs | ERP issue and return plus BOM | model; lot; component; issued; returned; board state; supplier | Reconcile stores movements and weigh representative components | kg | each lot; monthly aggregation | 12 representative months or full campaign | all in-scope assembly lines | net issued mass / packaged output mass | scale calibration; stock reconciliation; BOM revision |
| `cp_process_electricity` | `instrument_assembly`; `calibration_and_safety_test` | process electricity | submeter or allocated site meter | start; end; process hours; output mass; driver | Read calibrated meters and separate assembly from test where feasible | kWh | each shift or batch | same period as production | all lines and test stations | kWh × 3.6 / packaged output mass | meter calibration; allocation worksheet; downtime log |
| `cp_assembly_waste` | `instrument_assembly` | assembly waste | labelled container and transfer records | identity; composition; gross; tare; net; destination | Weigh each segregated stream before transfer | kg | each transfer | same period as production | all assembly lines | net mass by flow / packaged output mass | scale calibration; manifests; recovery certificates |
| `cp_packaging_mass` | `protective_packaging` | sale packaging | issue and return records | component; material; issued; returned; output mass | Reconcile stores and sample-weigh components | kg | each lot; monthly aggregation | same period as production | all packaging lines in scope | net consumed / packaged output mass | scale calibration; specification; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material` | component and packaging rows | (issued mass - unused returned mass) / released packaged-product mass | issue, return, and output records | kg input/kg reference product |  |
| `calc_electricity` | electricity rows | (metered kWh × 3.6) / released packaged-product mass | meter readings and output mass | MJ/kg reference product |  |
| `calc_waste` | waste rows | sum(gross container mass - tare) / released packaged-product mass | container weights and output mass | kg waste/kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all flows | Preserve supplier grade, component state, polymer, CRT composition, destination, and UUID decision; never use an umbrella flow. | specifications, BOM, manifests, UUID audit |
| `dq_temporal` | foreground inventory | Use 12 representative months or the complete campaign; disclose shutdowns, trials, and exceptional scrap. | dated meters, ERP, production, and waste records |
| `dq_completeness` | balances | Reconcile accepted output, rejects, returns, and wastes; explain residuals and cut-offs. | reconciliation worksheet and signed review |
| `dq_measurement` | scales and meters | Use calibrated instruments and retain status, resolution, and allocation worksheets. | certificates and meter logs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | product identity | Confirm a cathode-ray display and complete oscilloscope or oscillograph; reject digital/LCD-only instruments, parts, and monitors. | `un-cpc-3-0-structure-2025`; `teledyne-lecroy-oscilloscope-overview-zh` |
| `validation_rule_2` | reference flow | Confirm finished-product UUID, Mass, kg, 1 kg normalization, packaging boundary, and every required qualifier. |  |
| `validation_rule_3` | inventory | Require all 13 row ids or documented non-applicability for BOM-dependent rows; disclose UUID gaps and range-evidence needs. | `us-epa-desktop-computer-displays-lca-2001` |
| `validation_rule_4` | balances | Recalculate materials, electricity, waste, and output normalization; investigate duplicate board/CRT content and unexplained mass. | `eu-jrc-ilcd-lca-detailed-guidance-2010` |
| `validation_rule_5` | tests | Retain passed functional, calibration, and applicable measuring-circuit safety-test evidence. | `iec-61010-2-030-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for new cathode-ray oscilloscopes and cathode-ray oscillographs |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Cradle-to-gate studies with compatible model, technology, geography, time, packaging, and test scope |
| excluded_use | Digital/LCD oscilloscopes, monitors, televisions, standalone CRTs, refurbished products, use, repair, or end-of-life without separate modelling |
| required_metadata | model; type; bandwidth; channels; recording; CRT; mains; measuring category; calibration; board state; housing; packaging; site; period; allocation; cut-offs; UUID gaps |
| required_quality_disclosure | record coverage, calibration, BOM revision, supplier coverage, mass reconciliation, waste destinations, allocation drivers, exceptional scrap, UUID gaps, and missing range evidence |
| update_trigger | Material change in CRT, board, housing, packaging, site, test programme, allocation, upstream data, or confirmed TianGong identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official CPC 48242 identity |
| `un-cpc-1-1-chinese` | official_guidance | UN Statistics Division, Central Product Classification (CPC) Version 1.1, Chinese edition, Series M No. 77/Ver.1.1, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-07) | Official Chinese rendering of the unchanged CPC 48242 product title |
| `us-epa-desktop-computer-displays-lca-2001` | literature | US EPA, Desktop Computer Displays: A Life-Cycle Assessment, Volume 1, EPA 744-R-01-004a, December 2001, https://www.epa.gov/sites/default/files/2014-01/documents/computer_display_lca.pdf (retrieved 2026-09-07) | Analogous CRT decomposition, components, and assembly waste; no amount ranges transferred |
| `iec-61010-2-030-2017` | standard | IEC 61010-2-030:2017, Safety requirements for equipment having testing or measuring circuits, https://webstore.iec.ch/en/publication/31488 (retrieved 2026-09-07) | Measuring-circuit scope and safety-test qualification |
| `eu-jrc-ilcd-lca-detailed-guidance-2010` | official_guidance | European Commission Joint Research Centre, ILCD Handbook: General guide for Life Cycle Assessment - Detailed guidance, first edition, 2010, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf (retrieved 2026-09-07) | Scope and inventory review; subdivision/direct assignment to avoid allocation; causal physical allocation relationships |
| `teledyne-lecroy-oscilloscope-overview-zh` | handbook | Teledyne LeCroy, Oscilloscope technical overview (Chinese), https://zh-cn.teledynelecroy.com/oscilloscope/ (retrieved 2026-09-07) | Chinese terminology and CRT analogue-oscilloscope function |
