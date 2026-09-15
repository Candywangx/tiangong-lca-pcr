---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.apparatus-based-on-the-use-of-x-rays-or-of-alpha-beta-or-gamma-radiations
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Apparatus based on the use of X-rays or of alpha, beta or gamma radiations

## 1. Scope and Applicability

This PCR governs foreground data packages for complete apparatus that generates, contains, controls, detects, or images with X-rays or alpha, beta, or gamma radiation. It covers medical imaging, industrial non-destructive testing (NDT), and security inspection equipment. Every data package shall identify both the radiation basis (`x_ray`, `alpha`, `beta`, `gamma`, or `multi`) and the application (`medical`, `industrial_ndt`, or `security_inspection`).

The category is intentionally heterogeneous. A complete apparatus may be fixed, mobile, cabinet, gantry, or source-exposure equipment, but one model or one application shall not represent the whole category. The foreground product configuration, production site, reference year, workload, and delivery boundary govern the result.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.apparatus-based-on-the-use-of-x-rays-or-of-alpha-beta-or-gamma-radiations |
| classification_refs | CPC 3.0: 48110 — Apparatus based on the use of X-rays or of alpha, beta or gamma radiations (exact) |
| covered_products | Complete, tested apparatus using X-rays or alpha, beta, or gamma radiation for medical imaging, industrial NDT, or security inspection, including fixed, mobile, cabinet, gantry, and source-exposure configurations when delivered as operable equipment. |
| excluded_products | Buildings, examination rooms, bunkers, site shielding, HVAC, and complete facilities outside the delivered equipment; radiopharmaceuticals, contrast agents, films, test pieces, and replacement radioactive-source consumables; standalone radiation detectors or measuring instruments; parts and subassembly kits; imaging, inspection, or irradiation services; non-ionizing millimetre-wave equipment. |
| representative_product | A declared complete equipment configuration selected by radiation basis and application. No single medical scanner, industrial radiography device, security scanner, component, or facility is a category-wide proxy. |
| production_route | Major-component supply; enclosure, frame, gantry, and shielding fabrication or procurement; radiation generator or source-holder, detector, high-voltage power supply, controls, and cooling integration; final assembly; calibration and safety acceptance; packaging; and delivery or installation only when included in the declared delivery boundary. |
| market_state | Finished, safety-tested apparatus at the declared delivery boundary. The default is manufacturer factory gate; delivered-and-installed equipment is a separate declared boundary. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete apparatus based on X-rays or alpha, beta, or gamma radiation, in the declared radiation and application configuration. |
| How much | 1,000 kg of finished apparatus. |
| How well | The equipment configuration declares the radiation source or generator, detector, high-voltage power supply, integral shielding, frame or gantry, cooling system, controls, workload scenario, and delivery boundary, and has passed the manufacturer's applicable calibration and safety acceptance. |
| How long or cycle | One completed production batch normalized to the reference amount. If use, maintenance, or end-of-life is included, the declared service life and workload scenario also apply. |
| reference_flow_link | Production mix at plant for CPC 48110 apparatus, UUID `f2980f85-95d2-48e8-9b72-8c0f38650d2f`, version 01.01.000, verified with state_code 100. |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Apparatus based on the use of X-rays or of alpha, beta or gamma radiations; production mix, at plant `f2980f85-95d2-48e8-9b72-8c0f38650d2f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | `radiation_basis`; `application`; `equipment_configuration`; `fixed_or_mobile`; `generator_or_sealed_source`; `detector_technology`; `high_voltage_power_supply`; `shielding_scope`; `frame_or_gantry_scope`; `cooling_system`; `workload_scenario`; `delivery_boundary`; `geography`; `reference_year` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure finished apparatus mass at the declared delivery boundary. Include integral fluids, integral shielding, installed electronics, and any integral sealed-source assembly; record packaging separately. Normalize all production amounts to 1,000 kg. |
| `component_mass_balance` | purchased and fabricated components | Mass | kg | Use product-specific bill-of-material and production records. Separately report the radiation generator or integral source assembly, detector and signal chain, high-voltage power supply, shielding and enclosure, frame or gantry, cooling system, and controls and cabling. |
| `radioactive_source_descriptor` | integral or operational radioactive source | Activity plus radionuclide identity | Bq | Declare radionuclide, activity reference date, whether the source is integral at delivery, and whether replacements are included. Activity is a configuration descriptor and shall not replace the mass reference flow. |
| `workload_energy` | use-phase electricity when included | Energy | kWh | Derive electricity from measured or manufacturer-recorded power and duration by operating mode. Declare examinations, scans, exposures, operating hours, standby, cooling, and shutdown assumptions as applicable; do not import a workload from another apparatus model. |
| `delivery_transport` | outbound transport when included | Transport service | tkm | Calculate each leg from shipped mass including packaging multiplied by route distance. Keep installation materials and energy separate from transport. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased major components and raw materials received at the apparatus manufacturing boundary, with supplier datasets linked upstream. |
| starting_condition_role | Prevent recursive re-manufacturing of same-category apparatus while retaining visible component and material inputs. |
| product_classification_scope | Complete CPC 48110 apparatus; not a complete medical, industrial, or security facility and not a standalone CPC 48241 detector or measuring instrument. |
| recursive_input_rule | If a complete same-category apparatus is consumed as an input, retain it as a purchased product flow and link a verified upstream dataset; do not unfold another copy of this foreground production route. |
| upstream_dataset_requirement | Use supplier-specific datasets where available; otherwise use geographically, technologically, and temporally representative datasets and disclose substitutions. |
| disclosure | Declare radiation basis, application, equipment configuration, all required component scopes, workload scenario, delivery boundary, geography, reference year, exclusions, and substitutions. |

The following boundary rules are normative:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | cradle-to-factory-gate production | Include major-component supply, apparatus assembly and integration, calibration and safety acceptance, and packaging and dispatch. | `iaea-industrial-radiography`; `iaea-nuclear-medicine`; `epa-security-scanning` |
| `boundary_delivery` | delivery and installation | Exclude outbound delivery and installation at the factory-gate boundary; include and separately report them only when the declared delivery boundary extends to the customer site. | `malta-healthcare-eee` |
| `boundary_source_consumables` | radioactive and imaging consumables | Keep radiopharmaceuticals, replacement sealed sources, contrast agents, films, and test pieces outside the reference product. Include them only as separately identified operational or test inputs when the declared stage requires them; never use their mass as the apparatus reference flow. | `iaea-industrial-radiography`; `iaea-nuclear-medicine` |
| `boundary_use_scenario` | use and maintenance | Include use and maintenance only under a declared service-life and workload scenario with mode-specific electricity, cooling, consumables, replacements, and maintenance records. | `malta-healthcare-eee`; `thiel-radiology-lca` |
| `boundary_facility_exclusion` | buildings and site infrastructure | Exclude the complete facility, room shielding, bunker, building HVAC, and unrelated hospital, factory, or airport operations. Include only shielding, enclosure, cooling, frame, gantry, and controls physically delivered as part of the equipment. | `iaea-industrial-radiography`; `epa-security-scanning` |
| `boundary_end_of_life` | decommissioning and waste treatment | Include decommissioning and end-of-life only when downstream stages are declared; separate regulated radioactive-source management from equipment dismantling and jurisdiction-specific electrical-equipment treatment. | `eu-weee` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_supply` | Major-component and material supply | required | Always | Records the product-specific radiation subsystem, detector, power, shielding, mechanical, cooling, and control configuration received for assembly. | Mass-normalized purchased and fabricated inputs per 1,000 kg finished apparatus. |
| `apparatus_assembly` | Apparatus assembly and integration | required | Always | Integrates electrical, radiation, shielding, mechanical, cooling, and control subsystems. | Integrated apparatus output mass. |
| `calibration_acceptance` | Calibration and safety acceptance | required | Always | Tests function, image or inspection performance, interlocks, and applicable radiation-safety characteristics before release. | Tested apparatus output mass and test records. |
| `packaging_dispatch` | Packaging and dispatch | required | Always | Packages and releases the reference product at the declared factory-gate boundary. | 1,000 kg finished apparatus. |
| `outbound_delivery_installation` | Outbound delivery and installation | conditional | Include when `delivery_boundary` extends beyond manufacturer factory gate. | Models route-specific transport, on-site assembly, commissioning, and installation materials without adding the full facility. | Delivered apparatus and transport service. |
| `use_maintenance` | Use and maintenance | conditional | Include when the study covers operation or a life-cycle stage beyond delivery. | Models declared workload, operating modes, cooling, consumables, source replacement, and maintenance. | Declared service life and workload scenario. |
| `decommissioning_eol` | Decommissioning and end-of-life | conditional | Include when the study covers decommissioning or end-of-life. | Separates equipment dismantling and material treatment from licensed radioactive-source management. | Apparatus mass sent to each treatment route. |

### Process: Major-component and material supply (`component_supply`)

#### Inputs

##### Product flows

###### Radiation generator or integral source assembly (`radiation_subsystem`)

Record the product-specific X-ray tube and generator or the integral sealed-source holder and exposure mechanism delivered into assembly. Distinguish generator equipment from radioactive-source consumables and record radionuclide and dated activity when an integral source is delivered.

- Selected flow: Manufacturer-specific radiation generator or integral source assembly; select verified upstream component datasets during dataset construction.
- Flow property / unit: Mass / kg; radionuclide and activity / Bq as a separate descriptor when applicable
- Amount rule: Net quantity received and consumed from the bill of materials, adjusted for inventory change and documented rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `iaea-industrial-radiography`; `iaea-nuclear-medicine`

###### Detector and signal chain (`detector_signal_chain`)

Record detector heads, arrays, scintillators or sensors, signal electronics, image or inspection processing hardware, and the equipment-dedicated workstation included in delivery.

- Selected flow: Manufacturer-specific detector and signal-chain components; select verified upstream component datasets during dataset construction.
- Flow property / unit: Mass / kg
- Amount rule: Net quantity received and consumed from the product-specific bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `fda-medical-xray`; `iaea-nuclear-medicine`

###### High-voltage power supply and power electronics (`high_voltage_supply`)

Record the high-voltage generator, transformers, power electronics, distribution units, and equipment-dedicated power-conditioning hardware.

- Selected flow: Manufacturer-specific high-voltage and power-electronic components; select verified upstream component datasets during dataset construction.
- Flow property / unit: Mass / kg
- Amount rule: Net quantity received and consumed from the product-specific bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `iaea-industrial-radiography`

###### Integral shielding and enclosure (`shielding_enclosure`)

Record lead or other shielding, collimators, cabinets, protective curtains, interlocked enclosures, and housings physically delivered with the apparatus. Exclude room and bunker shielding.

- Selected flow: Product-specific shielding materials and enclosure components; select verified upstream material and component datasets during dataset construction.
- Flow property / unit: Mass / kg
- Amount rule: Net material and component quantities from bill-of-material and fabrication records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `iaea-industrial-radiography`; `epa-security-scanning`

###### Frame, gantry, cabinet, and motion system (`frame_gantry`)

Record the delivered mechanical frame, gantry or cabinet, patient or object handling system, actuators, bearings, and structural supports.

- Selected flow: Product-specific frame, gantry, cabinet, and motion components; select verified upstream datasets during dataset construction.
- Flow property / unit: Mass / kg
- Amount rule: Net quantity received and consumed from bill-of-material and fabrication records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `iaea-nuclear-medicine`

###### Integral cooling system (`cooling_system`)

Record chillers, pumps, heat exchangers, fans, coolant circuits, and initial coolant charge physically delivered as part of the apparatus; exclude building HVAC.

- Selected flow: Product-specific cooling equipment, parts, and initial coolant; select verified upstream datasets during dataset construction.
- Flow property / unit: Mass / kg
- Amount rule: Net quantity received and consumed from bill-of-material and initial-fill records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `iaea-industrial-radiography`

###### Controls, interlocks, cabling, and equipment IT (`controls_cabling`)

Record control panels, safety interlocks, embedded computers, equipment-dedicated workstation, cabling, and communications hardware included in the delivered configuration.

- Selected flow: Product-specific controls, interlocks, cabling, and equipment IT; select verified upstream datasets during dataset construction.
- Flow property / unit: Mass / kg
- Amount rule: Net quantity received and consumed from the product-specific bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `iaea-industrial-radiography`; `iaea-nuclear-medicine`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified major components and materials (`qualified_components`)

Transfer all accepted inputs to assembly using the same batch-specific mass ledger.

- Selected flow: Qualified major components and materials for apparatus assembly
- Flow property / unit: Mass / kg
- Amount rule: Sum of accepted component and material masses transferred to assembly
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_bom`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Apparatus assembly and integration (`apparatus_assembly`)

#### Inputs

##### Product flows

###### Qualified components and materials (`assembly_components`)

Record the accepted component and material mass entering assembly and retain the declared subsystem split.

- Selected flow: Qualified major components and materials for apparatus assembly
- Flow property / unit: Mass / kg
- Amount rule: Transferred quantity from `component_supply`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Assembly utilities and consumables (`assembly_utilities`)

Record metered electricity and measured welding, brazing, joining, cleaning, coating, gases, and other consumables used by the allocated production batch.

- Selected flow: Site-specific assembly electricity and consumables; select verified upstream datasets during dataset construction.
- Flow property / unit: Energy / kWh and Mass / kg, reported as separate inventory exchanges
- Amount rule: Metered or allocated site records after subtracting documented non-production loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg integrated apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Integrated apparatus awaiting acceptance (`integrated_apparatus`)

Record the integrated apparatus mass transferred to calibration and acceptance.

- Selected flow: Integrated apparatus awaiting calibration and safety acceptance
- Flow property / unit: Mass / kg
- Amount rule: Accepted input mass plus incorporated consumables minus separately recorded wastes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg integrated apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Waste flows

###### Assembly rejects and scrap (`assembly_waste`)

Record metal, electronic, shielding, cable, coolant, and mixed-material rejects by measured treatment route.

- Selected flow: Site-specific assembly waste by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled waste leaving the assembly process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg integrated apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Elementary flows

### Process: Calibration and safety acceptance (`calibration_acceptance`)

#### Inputs

##### Product flows

###### Integrated apparatus (`acceptance_apparatus`)

Record the integrated apparatus entering functional, image or inspection performance, interlock, and radiation-safety acceptance.

- Selected flow: Integrated apparatus awaiting calibration and safety acceptance
- Flow property / unit: Mass / kg
- Amount rule: Batch transfer record from `apparatus_assembly`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_records`
- Sources: `epa-security-scanning`; `iaea-nuclear-medicine`

###### Acceptance electricity, cooling, and test consumables (`acceptance_inputs`)

Record metered test electricity, cooling, calibration objects, films, test pieces, and any temporary source or radiopharmaceutical used for acceptance, each as a separate input and not as part of the reference product.

- Selected flow: Site- and configuration-specific acceptance utilities and consumables; select verified upstream datasets during dataset construction.
- Flow property / unit: Energy / kWh, Volume / m3, Mass / kg, and Activity / Bq as applicable and separately reported
- Amount rule: Metered utilities and issued-minus-returned consumables for accepted and rejected units in the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_records`
- Sources: `iaea-industrial-radiography`; `epa-security-scanning`; `iaea-nuclear-medicine`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted apparatus (`accepted_apparatus`)

Record only apparatus that passed the applicable configuration-specific calibration and safety acceptance.

- Selected flow: Accepted apparatus ready for packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of accepted apparatus released by the quality system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_records`
- Sources:

##### Waste flows

###### Acceptance rejects and consumed test materials (`acceptance_waste`)

Record rejected parts, consumed test objects, films, coolant, and other wastes by treatment route. Radioactive materials remain separately identified and under the applicable licensed route.

- Selected flow: Acceptance waste by material and treatment route
- Flow property / unit: Mass / kg and Activity / Bq as applicable and separately reported
- Amount rule: Measured waste and reject records for the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_records`
- Sources:

##### Elementary flows

### Process: Packaging and dispatch (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Accepted apparatus (`dispatch_apparatus`)

Record accepted apparatus entering packaging without substituting package gross mass for product mass.

- Selected flow: Accepted apparatus ready for packaging
- Flow property / unit: Mass / kg
- Amount rule: Batch transfer record from `calibration_acceptance`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch`
- Sources:

###### Packaging materials (`packaging_materials`)

Record crates, pallets, cushioning, films, desiccants, shock or tilt indicators, and reusable transport fixtures separately by material.

- Selected flow: Product-specific packaging materials; select verified upstream datasets during dataset construction.
- Flow property / unit: Mass / kg
- Amount rule: Issued-minus-returned packaging materials for the dispatched batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch`
- Sources: `thiel-radiology-lca`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product at declared factory gate (`reference_apparatus`)

This is the exact Tiangong reference product flow. Report net apparatus mass; packaging remains a separate inventory input and shipped-mass descriptor.

- Selected flow: Apparatus based on the use of X-rays or of alpha, beta or gamma radiations; production mix, at plant `f2980f85-95d2-48e8-9b72-8c0f38650d2f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1,000 kg finished apparatus
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Packaging and dispatch waste (`packaging_waste`)

Record packaging offcuts, damaged packaging, and dispatch rejects by measured material and treatment route.

- Selected flow: Packaging and dispatch waste by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled waste from the dispatched batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

The following allocation rules are normative:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | separable products, batches, and stages | Avoid allocation by subdivision, product-specific bills of material, batch records, sub-metering, and direct test records wherever practicable. | `thiel-radiology-lca` |
| `allocation_shared_operations` | shared assembly, utilities, testing, and site services | Allocate shared burdens first by a measured causal driver such as machine time, metered energy, test duration, or handled mass. If no causal driver is available, use mass allocation, justify it, and test the result against an alternative plausible driver. |  |
| `allocation_rework_rejects` | rework, rejects, and yield losses | Assign rework energy, consumed components, test burdens, and wastes to the batch that caused them when traceable; otherwise allocate with the same documented driver as the shared operation. |  |
| `allocation_recycling` | recycling, recovery, and disposal | Declare the selected recycling and end-of-life convention, keep input recycled content separate from output recovery credits, and prevent double counting across foreground and upstream datasets. | `eu-weee` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `component_supply` | radiation subsystem, detector, high-voltage supply, shielding, frame or gantry, cooling, controls, accepted components | bill of material, purchase, fabrication, inventory, and source certificate records | part id; material; subsystem; quantity; net mass; supplier; reject; radionuclide; activity; activity date | Reconcile product-specific engineering BOM to purchasing, fabrication, inventory movement, and supplier certificates; flag unweighed or estimated masses. | kg; Bq for the separate activity descriptor | each product configuration and production batch | complete batch; reference period disclosed | all manufacturing sites supplying the declared configuration | Sum accepted net quantities by subsystem; subtract returns; keep rejects and activity descriptors separate. | approved BOM; mass or scale record; supplier declaration; source certificate; reconciliation sign-off |
| `cp_assembly_records` | `apparatus_assembly` | components, utilities, consumables, integrated apparatus, scrap | batch traveller, meter, issue-return, production, and waste records | batch id; input mass; output mass; electricity; consumable; reject mass; waste route; operating time | Use dedicated meters and batch issue-return records where available; otherwise allocate shared records using the declared rule and driver. | kg; kWh; other recorded units converted and disclosed | each batch; utilities at least monthly where batch meters are absent | representative production period covering the batch | declared assembly site | Normalize reconciled batch totals to 1,000 kg integrated output; preserve separate flow rows. | meter record; batch traveller; material ledger; calibrated scale; waste ticket; allocation worksheet |
| `cp_acceptance_records` | `calibration_acceptance` | apparatus, test utilities, test consumables, accepted output, rejects | acceptance protocol, meter, issue-return, calibration, radiation-safety, and reject records | serial or batch id; test type; pass or fail; operating mode; duration; electricity; cooling; consumable; radionuclide; activity; waste | Link configuration-specific acceptance and calibration records to metered utilities and issued test consumables, including failed tests and retests. | kg; kWh; m3; Bq as applicable | every accepted unit or production batch | complete test and retest sequence | declared acceptance site | Sum accepted and rejected test burdens for the batch and normalize to accepted apparatus mass. | signed acceptance record; calibration certificate; safety test; meter log; issue-return record; waste manifest |
| `cp_packaging_dispatch` | `packaging_dispatch` | accepted apparatus, packaging, reference product, dispatch waste | packing list, scale, packaging issue-return, and dispatch records | product net mass; packaging material; packaging mass; gross shipped mass; reusable fixture; waste mass; dispatch date | Reconcile the final net product mass to packing and dispatch records and retain packaging as separate material inputs. | kg | each shipment and batch | complete dispatch batch | declared dispatch site | Sum product net mass separately from packaging and normalize to 1,000 kg reference product. | calibrated scale record; packing list; material issue-return; shipment record; waste ticket |
| `cp_delivery_installation` | `outbound_delivery_installation` | transport and installation | bill of lading, route, installer, and commissioning records | shipped mass; origin; destination; mode; distance; load factor; installation materials; energy; commissioning tests | Collect actual shipment legs and installation records when delivery is in scope; keep building works and room shielding outside unless supplied as equipment. | kg; km; tkm; kWh | each shipment and installation | complete delivery and commissioning period | declared route and customer site | Calculate each transport leg separately; sum installation inputs without merging them into apparatus mass. | carrier record; route evidence; installer log; commissioning acceptance |
| `cp_workload_use` | `use_maintenance` | workload, mode electricity, cooling, consumables, replacements, maintenance | device meter, power logger, service log, procurement, and workload records | radiation basis; application; examination or exposure count; mode; power; duration; standby; shutdown; cooling; consumable; part or source replacement; service life | Measure representative operating modes or use manufacturer-validated logs and link them to the declared workload; do not transfer another model's workload. | kWh; h; count; kg; m3; Bq as applicable | continuous logs or representative campaign; maintenance per event | declared service life or reporting period | declared use site and configuration | Calculate mode-specific totals for the declared workload and service life; report replacements and consumables separately. | meter or validated log; workload extract; service record; purchase record; source certificate |
| `cp_eol_records` | `decommissioning_eol` | dismantling, radioactive-source route, and material treatment | decommissioning plan, waste manifest, recycler, and source-return records | apparatus mass; component; radionuclide; activity; treatment route; recovery; disposal; transport | Reconcile the retired apparatus mass to dismantling outputs and licensed source return or disposal records under the applicable jurisdiction. | kg; Bq; tkm as applicable | each decommissioning event | complete decommissioning and treatment chain | declared use site and treatment routes | Sum mass by treatment route; keep radioactive-source management separate and report unresolved mass. | decommissioning certificate; licensed manifest; recycler receipt; mass balance; transport record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | all production inventory | Normalized amount = collected batch amount / accepted net apparatus mass × 1,000 kg. | collected batch amount; accepted net apparatus mass | amount per 1,000 kg finished apparatus |  |
| `calc_component_reconciliation` | component supply and assembly | Accepted components + incorporated consumables = integrated apparatus + separately recorded rejects and losses, within declared measurement uncertainty. | component masses; incorporated consumables; output mass; waste and reject mass | reconciled subsystem and process mass balance |  |
| `calc_delivery_tkm` | outbound delivery | Transport service for each leg = gross shipped mass in tonnes × actual leg distance in kilometres. | product net mass; packaging mass; transport fixture mass; distance | tkm by mode and leg |  |
| `calc_workload_energy` | use and maintenance | Scenario electricity = sum over operating modes of measured or validated mode power × mode duration for the declared workload; add separately measured cooling and standby loads only once. | power by mode; duration by mode; workload; cooling and standby records | kWh per declared workload and service life | `malta-healthcare-eee`; `thiel-radiology-lca` |
| `calc_replacement_inventory` | maintenance and source replacement | Lifetime replacement amount = recorded amount per replacement × declared replacement count; retain each part, coolant, and radioactive source as a separate exchange. | replacement event records; amounts; service life; replacement count | replacement inventory per declared service life |  |
| `calc_eol_balance` | decommissioning and end-of-life | Input retired apparatus mass = recovered material + reuse outputs + treatment waste + disposal + explicitly unresolved mass, within declared uncertainty. | decommissioning mass; route-specific outputs | end-of-life mass balance | `eu-weee` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | product identity | Records shall resolve to one declared radiation basis, application, complete equipment configuration, geography, and reference year; mixed portfolios shall be disaggregated or transparently weighted. | product specification; serial or configuration list; production mix calculation |
| `dq_primary_data` | required production stages | Use product- and site-specific BOM, batch, meter, calibration, packaging, and waste records. Document every allocation and secondary dataset substitution. | protocols `cp_component_bom` through `cp_packaging_dispatch`; allocation worksheet; dataset mapping log |
| `dq_workload` | conditional use stage | Workload and mode data shall match the declared apparatus configuration and use site or scenario; a single published scanner or facility result is not category-default evidence. | protocol `cp_workload_use`; meter records; workload extract; scenario statement |
| `dq_source_chain` | all external and upstream data | Record source id, version or publication date, retrieval date, geography, technology, and the decision supported. | source register; upstream dataset metadata; retrieval log |
| `dq_uncertainty` | collected and allocated values | Report measurement uncertainty, missing records, estimates, temporal coverage, and sensitivity to material allocation or workload assumptions. | calibration status; data-gap register; sensitivity results |

## 9. Validation Rules

The following validation rules are normative:

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | category and reference flow | Confirm CPC 3.0 code 48110 and exact Tiangong product flow UUID `f2980f85-95d2-48e8-9b72-8c0f38650d2f`; reject a standalone detector, subassembly kit, service, complete facility, non-ionizing scanner, or narrow model presented as the category. |  |
| `validate_variant_axes` | required qualifiers | Require both `radiation_basis` and `application`, plus equipment configuration, fixed or mobile state, generator or sealed-source status, detector technology, geography, and reference year. | `fda-medical-xray`; `iaea-industrial-radiography`; `iaea-nuclear-medicine`; `epa-security-scanning` |
| `validate_reference_uuid` | quantitative reference | Require Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, reference unit kg, and exactly 1,000 kg reference product output. |  |
| `validate_component_completeness` | component declaration | Require separate declarations for the radiation generator or source assembly, detector and signal chain, high-voltage supply, integral shielding, frame or gantry, cooling, and controls; permit `not_applicable` only with a configuration-specific explanation. | `iaea-industrial-radiography`; `iaea-nuclear-medicine`; `epa-security-scanning` |
| `validate_mass_balance` | production inventory | Reconcile component, assembly, acceptance, and packaging records to the net reference-product mass, with packaging and wastes separate and discrepancies explained within stated uncertainty. |  |
| `validate_workload` | use and maintenance when included | Require a configuration-specific workload and mode schedule, service life, power or electricity evidence, cooling, consumables, replacement, and maintenance assumptions; reject an undeclared single-model or single-facility proxy. | `malta-healthcare-eee`; `thiel-radiology-lca` |
| `validate_delivery_boundary` | delivery and installation | Require `delivery_boundary`; if beyond factory gate, require shipped mass, route, mode, distance, installation inputs, and commissioning records while excluding unrelated site construction. | `malta-healthcare-eee` |
| `validate_source_consumables` | radioactive and test consumables | Keep radiopharmaceuticals, replacement sources, contrast agents, films, and test pieces separate from apparatus mass; require radionuclide, dated activity, and licensed management route when radioactive material is present. | `iaea-industrial-radiography`; `iaea-nuclear-medicine` |
| `validate_facility_exclusion` | facility boundary | Confirm that room or bunker shielding, building HVAC, and unrelated hospital, factory, or airport activities are not used as a proxy for the delivered equipment. | `iaea-industrial-radiography`; `epa-security-scanning` |
| `validate_source_traceability` | evidence and upstream data | Require stable source ids and retrieval dates for external rules, and versioned identity, geography, technology, and temporal metadata for upstream datasets. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product- and site-specific foreground data package for manufacturing complete CPC 48110 apparatus, with conditional delivery, use, maintenance, and end-of-life extensions. |
| downstream_use | Publication as a TianGong foreground `process` and construction of a `lifecyclemodel` for the declared apparatus configuration and scenario. |
| allowed_use | Comparative or attributional modelling when radiation basis, application, configuration, workload, geography, reference year, delivery boundary, system boundary, and data quality match the study. |
| excluded_use | Representing a complete medical, industrial, or security facility; representing radiopharmaceuticals or replacement sources as the apparatus; representing standalone detectors, parts, services, or non-ionizing scanners; extrapolating one model or use site to the whole category without a disclosed production mix. |
| required_metadata | PCR id; CPC reference; Tiangong reference UUIDs; radiation basis; application; equipment configuration; generator or sealed-source status; detector; high-voltage supply; shielding; frame or gantry; cooling; workload; delivery boundary; service life when applicable; geography; reference year; production sites; source register. |
| required_quality_disclosure | Primary-data share; BOM and mass-balance coverage; meter and calibration coverage; allocation drivers; secondary-dataset substitutions; workload derivation; missing values; uncertainty; estimates; exclusions; sensitivity results. |
| update_trigger | Change in radiation or detector technology, apparatus configuration, shielding or cooling design, production route or site, energy and workload profile, delivery boundary, source-management practice, applicable end-of-life law, or any reference UUID or source evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-48110` | official_guidance | United Nations Statistics Division, CPC detail 48110, “Apparatus based on the use of X-rays or of alpha, beta or gamma radiations.” https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/48110 (retrieved 2026-08-09). | Official category title and apparatus-level identity context; the repository's CPC 3.0 source remains authoritative for the declared version. |
| `fda-medical-xray` | official_guidance | U.S. Food and Drug Administration, “Medical X-ray Imaging.” https://www.fda.gov/radiation-emitting-products/medical-imaging/medical-x-ray-imaging (retrieved 2026-08-09). | Medical X-ray modality split and the generator-to-detector imaging chain. |
| `iaea-industrial-radiography` | official_guidance | International Atomic Energy Agency, *Radiation Safety in Industrial Radiography*, IAEA Safety Standards Series No. SSG-11, 2011. https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1466_web.pdf (retrieved 2026-08-09). | Industrial X-ray and gamma-radiography configurations; generator, source container, shielding, controls, cables, collimation, cooling, and licensed source-management boundaries. |
| `iaea-nuclear-medicine` | handbook | International Atomic Energy Agency, *Nuclear Medicine Resources Manual, 2020 Edition*, IAEA Human Health Series No. 37, 2020. https://www-pub.iaea.org/MTCD/Publications/PDF/P1861_web.pdf (retrieved 2026-08-09). | Gamma-camera and nuclear-imaging equipment components, detector heads, electronics, workstations, gantries, patient handling, and separation of radiopharmaceuticals from equipment. |
| `epa-security-scanning` | official_guidance | U.S. Environmental Protection Agency, “Radiation and Airport Security Scanning.” https://www.epa.gov/radtown/radiation-and-airport-security-scanning (retrieved 2026-08-09). | Cabinet X-ray security use, integral shielding and interlocks, and testing, calibration, and maintenance requirements. |
| `malta-healthcare-eee` | official_guidance | Government of Malta, *Electric & Electronic Equipment Used in Health Care*, Green Public Procurement National Action Plan. https://gpp.gov.mt/wp-content/uploads/2023/05/Electric-and-Electronic-Equipment.pdf (retrieved 2026-08-09). | Configuration-specific installation, operating-mode, workload, energy, consumable, maintenance, spare-parts, and end-of-life information requirements. No document default value is adopted. |
| `thiel-radiology-lca` | literature | Thiel et al., “Environmental Life Cycle Assessment of a U.S. Hospital-based Radiology Practice,” *Radiology* 313(2), 2024, e240398. https://doi.org/10.1148/radiol.240398 (retrieved 2026-08-09). | Foreground BOM, packaging, delivery, mode-specific electricity, and workload data collection; its single-practice and equipment results are not category defaults. |
| `eu-weee` | standard | European Parliament and Council, Directive 2012/19/EU on waste electrical and electronic equipment (WEEE), consolidated text. https://eur-lex.europa.eu/eli/dir/2012/19/2018-07-04 (retrieved 2026-08-09). | Jurisdiction-dependent electrical-equipment collection and treatment boundary; apply only when the equipment and waste stream fall within the applicable legal scope. |
