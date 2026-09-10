---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.ignition-wiring-sets-and-other-wiring-sets-of-a-kind-used-in-vehicles-aircraft-or-ships
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships

## 1. Scope and Applicability

This PCR applies to the foreground manufacture of complete electrical wiring sets or harness assemblies made for installation in vehicles, aircraft, or ships. A covered product is an assembled and routed set of insulated conductors with the terminations, connector housings, seals, splices, shielding, protective coverings, identification, and securing items required by its declared design. It may carry low-voltage, high-voltage, signal, data, ignition, control, or mixed circuits.

The PCR is application-neutral across road vehicles, including electric and hybrid vehicles, aircraft, and ships. A concrete data package may represent a product family or a specific design, but it shall declare the application family and design qualifiers. The PCR does not treat an individual cable, wire, terminal, connector, sleeve, or prepared component kit as the finished reference product. It also excludes wiring assemblies for buildings, stationary machinery, appliances, and telecommunications equipment unless they are manufactured as a set for installation in a covered vehicle, aircraft, or ship.

The foreground gate-to-gate boundary begins with purchased wires, cables, terminals, connectors, seals, coverings, labels, and other components received at the manufacturing site. It includes preparation, termination, splicing when used, harness forming, protective assembly, marking, inspection, electrical testing, rework, and packaging at the manufacturing site. Upstream production of purchased inputs is represented by linked upstream datasets; installation, operation, maintenance, and end-of-life of the vehicle, aircraft, ship, or installed harness are outside this foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.ignition-wiring-sets-and-other-wiring-sets-of-a-kind-used-in-vehicles-aircraft-or-ships |
| classification_refs | CPC 3.0: 46330 (exact classification context; mapping acceptance is governed separately) |
| covered_products | Complete ignition wiring sets and other complete electrical wiring sets or harness assemblies made for vehicles, aircraft, or ships, including low-voltage, high-voltage, signal, data, control, and mixed-circuit harnesses when supplied as an assembled set |
| excluded_products | Single insulated wires or cables; individual terminals, connectors, seals, grommets, sleeves, tapes, ties, or other parts; prepared component kits and incomplete subassemblies; wiring assemblies for buildings, appliances, stationary machinery, or telecommunications equipment; complete vehicles, aircraft, or ships |
| representative_product | A finished, tested, application-qualified wiring harness supplied at the manufacturing plant gate with permanently attached components and protective elements |
| production_route | Purchased-component preparation; cutting and stripping; crimping, soldering, welding, or splicing as applicable; connector assembly; harness forming and protection; marking; inspection and electrical testing; rework; packaging |
| market_state | Finished manufactured product at plant gate, before installation into a vehicle, aircraft, or ship |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished and conforming ignition wiring set or other wiring set made for a vehicle, aircraft, or ship |
| How much | 1 kg net mass of accepted finished wiring set |
| How well | Complete according to the declared bill of materials and drawing, with applicable inspection and electrical acceptance tests passed |
| How long or cycle | One production lot or reporting-period output normalized to 1 kg of accepted product at the plant gate |
| reference_flow_link | The reference amount is the accepted output mass of the Tiangong product flow identified below |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | application family (road vehicle, aircraft, or ship); harness function and circuit type; declared voltage class; conductor material and gauge or cross-section range; insulation and jacket system; connector and termination technology; shielding and protective-covering configuration; production geography and site; production period; applicable drawing or bill-of-material revision; applicable acceptance and test specification; treatment of supplied packaging |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted finished wiring-set output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net accepted-product mass with calibrated equipment. Include conductors, insulation, permanent connectors, terminals, seals, grommets, shielding, labels, tapes, sleeves, tubes, ties, clips, and other permanently attached items. Exclude reusable fixtures and separately reported packaging. |
| `lot_normalization` | all foreground inputs and outputs | Mass for material rows; the metered unit for utilities | kg for material rows; recorded utility unit before conversion | Aggregate the same production lot or reporting period for the numerator and denominator, then divide by accepted finished-product mass to report each row per 1 kg reference flow. |
| `component_no_double_count` | purchased sets, subassemblies, and individual components | Mass | kg | If a purchased subassembly is recorded as one input, do not also record its embedded wires, terminals, connectors, or coverings as separate inputs unless the subassembly dataset expressly excludes them. |
| `mass_reconciliation` | material inputs, accepted output, scrap, rejects, retained work in progress, and stock change | Mass | kg | Reconcile measured material inputs against accepted product, exported scrap or waste, rejected product, work-in-progress change, and inventory change for the same period; document rather than force-close any residual. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased wires, cables, contacts, terminals, connector housings, seals, coverings, labels, packaging, and any purchased subassemblies received at the wiring-set manufacturing site |
| starting_condition_role | Upstream product inputs to the foreground manufacturing system |
| product_classification_scope | Complete wiring sets manufactured for vehicles, aircraft, or ships; component-only and non-transport applications are outside the reference-product scope |
| recursive_input_rule | A purchased complete wiring set or sub-harness within the same product category is recorded once as a product input with a linked upstream dataset and declared mass and role. Do not recursively reconstruct the supplier foreground unless it is inside the reporting organisation's operational boundary. |
| upstream_dataset_requirement | Every material or component input contributing to the finished wiring set shall have an applicable upstream dataset or a disclosed data gap; supplier-specific data are preferred for compositionally or technologically significant inputs. |
| disclosure | Declare the site, reporting period, product family or design basis, production stages under operational control, outsourced stages, supplied-versus-site-added components, packaging treatment, rework loop, scrap destinations, and excluded downstream installation or use stages. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_manufacturing` | foreground process scope | Include on-site component preparation, termination and splicing as applicable, connector assembly, harness forming and protective covering, marking, inspection, electrical testing, rework, and packaging. | ipc-whma-a-620; nasa-std-8739-4a-change-4 |
| `boundary_upstream_linking` | purchased inputs | Keep purchased material and component production outside the foreground gate-to-gate system while linking each material input to an upstream dataset or disclosing the gap. | iso-14044-2006; eu-pef-method-2021 |
| `boundary_recursive_wiring_sets` | purchased same-category wiring sets or sub-harnesses | Record the purchased set once at the point it crosses the foreground boundary and do not expand it into supplier operations unless those operations are within the declared foreground control boundary. | eu-pef-method-2021 |
| `boundary_downstream_exclusions` | downstream stages | Exclude installation into the vehicle, aircraft, or ship, use-phase electrical losses, maintenance, removal, and end-of-life unless a broader study explicitly adds those stages outside this gate-to-gate dataset. | iso-14044-2006; eu-pef-method-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | Wire, cable, and termination preparation | required | Always; combine only when records cannot be separated, and disclose the aggregation | Prepare conductors, shields, terminals, seals, and connectorized leads for harness formation | prepared leads and subassemblies transferred to harness assembly |
| `harness_assembly` | Harness forming and protective assembly | required | Always | Route, branch, secure, cover, identify, and complete the physical harness assembly | assembled harness transferred to final test and finishing |
| `testing_finishing_packaging` | Inspection, electrical testing, rework, and packaging | required | Always; specific tests and packaging operations follow the declared design and acceptance specification | Confirm conformity and produce accepted finished wiring sets at the plant gate | 1 kg accepted finished wiring set |

### Process: Wire, cable, and termination preparation (`component_preparation`)

#### Inputs

##### Product flows

###### Insulated wires and cables (`insulated_wires_cables`)

Record all purchased insulated conductors, multicore cables, shielded cables, and specialty cables cut or prepared for the wiring set. Quantity comes from receiving, issue, return, and stock-change records reconciled to the reporting period.

- Selected flow: Application-appropriate insulated wire and cable inputs selected from Tiangong for the declared material and cable construction
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass minus unused returned mass, adjusted for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `ipc-whma-a-620`; `nasa-std-8739-4a-change-4`

###### Terminals, connectors, seals, and termination materials (`termination_components`)

Record contacts, terminals, connector housings, seals, grommets, splice devices, solder, and other termination materials added during preparation. Use item-level quantities and measured or supplier-declared masses.

- Selected flow: Product-specific terminal, connector, sealing, and termination-material flows; no single generic component flow is imposed
- Flow property / unit: Mass / kg
- Amount rule: item count multiplied by verified unit mass, or direct issued mass where available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_materials`
- Sources: `ipc-whma-a-620`; `nasa-std-8739-4a-change-4`

###### Purchased connectorized leads and subassemblies (`purchased_subassemblies`)

Record complete purchased leads, branches, or sub-harnesses only when they cross the site boundary as identifiable products. Apply the recursive-input and no-double-count rules.

- Selected flow: Supplier-specific prepared lead or subassembly flow matching the purchased item
- Flow property / unit: Mass / kg
- Amount rule: measured received-and-consumed mass for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`

###### Preparation electricity and utilities (`preparation_energy`)

Record electricity and other metered utilities used for cutting, stripping, crimping, welding, soldering, cleaning, and local extraction. Allocate shared meters using documented machine time or another physical driver.

- Selected flow: Site- and period-appropriate electricity and utility product flows
- Flow property / unit: Metered utility property / metered unit
- Amount rule: submetered use or allocated shared-meter use for the preparation process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared leads and subassemblies transferred internally (`prepared_leads_output`)

Record the measured mass of prepared conductors, terminated leads, and subassemblies transferred to harness assembly as an internal intermediate output.

- Selected flow: Internal prepared-lead and subassembly flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or reconciled input mass less recorded preparation scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output transferred to harness assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_output_waste`

##### Waste flows

###### Wire, insulation, terminal, and connector preparation scrap (`preparation_scrap`)

Record conductor offcuts, stripped insulation, rejected crimps, damaged terminals, connector parts, and collected process residues by material and destination where records permit.

- Selected flow: Destination- and material-specific waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass by waste stream; do not net revenue against material input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_output_waste`

##### Elementary flows

### Process: Harness forming and protective assembly (`harness_assembly`)

#### Inputs

##### Product flows

###### Prepared leads and subassemblies received internally (`prepared_leads_input`)

Record the same internal intermediate quantity transferred from component preparation, without adding upstream burden a second time.

- Selected flow: Internal prepared-lead and subassembly flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass equal to the corresponding internal output after reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`

###### Protective, securing, identification, and finishing materials (`protective_materials`)

Record tapes, sleeves, tubes, braid, shields, ties, clips, labels, boots, moulding or potting materials, and other items permanently added during harness forming.

- Selected flow: Product-specific protective, securing, identification, and finishing-material flows
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass or item count multiplied by verified unit mass, less unused returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_materials`
- Sources: `ipc-whma-a-620`; `nasa-std-8739-4a-change-4`

###### Harness-assembly electricity and utilities (`assembly_energy`)

Record electricity and other metered utilities for layout boards, taping, braiding, heat shrinking, moulding or potting when used, marking, ventilation, and assembly equipment.

- Selected flow: Site- and period-appropriate electricity and utility product flows
- Flow property / unit: Metered utility property / metered unit
- Amount rule: submetered use or allocated shared-meter use for harness assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled harness transferred to final test (`assembled_harness_output`)

Record the assembled but not yet accepted harness mass transferred to the final inspection, test, and packaging process.

- Selected flow: Internal assembled-harness flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or reconciled assembly input less recorded assembly waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per process output transferred to final testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_output_waste`

##### Waste flows

###### Assembly trim, protective-material waste, and rejected parts (`assembly_scrap`)

Record tapes, sleeves, ties, labels, moulding materials, rejected branches, and other assembly waste by material and destination where records permit.

- Selected flow: Destination- and material-specific waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by waste stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_output_waste`

##### Elementary flows

### Process: Inspection, electrical testing, rework, and packaging (`testing_finishing_packaging`)

#### Inputs

##### Product flows

###### Assembled harness received for testing (`assembled_harness_input`)

Record the internal assembled-harness mass entering final inspection and electrical testing, matching the upstream internal transfer.

- Selected flow: Internal assembled-harness flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass equal to the corresponding internal output after reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_finish_inputs`

###### Packaging and final finishing materials (`packaging_finishing_materials`)

Record packaging and any final labels, caps, protectors, or preservatives added after testing. Report packaging separately from net product mass and state whether it is included in the delivered dataset scope.

- Selected flow: Material-specific packaging and finishing product flows
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass or item count multiplied by verified unit mass, less unused returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_finish_inputs`

###### Test, rework, and packaging electricity (`test_finish_energy`)

Record metered electricity for continuity testing and any design-required insulation, dielectric, functional, or automated tests, plus rework and packaging equipment.

- Selected flow: Site- and period-appropriate electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or allocated shared-meter use for test, rework, and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_finish_energy`
- Sources: `ipc-whma-a-620`; `nasa-std-8739-4a-change-4`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished wiring set (`finished_wiring_set`)

Record only complete wiring sets that passed the applicable inspection and electrical acceptance requirements as reference-product output.

- Selected flow: Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass of accepted finished wiring sets; reference amount equals 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_output_tests`
- Sources: `ipc-whma-a-620`; `nasa-std-8739-4a-change-4`

##### Waste flows

###### Scrapped rejected wiring sets and test-damaged parts (`rejected_finished_waste`)

Record rejected units or parts that leave the rework loop as waste, classified by material and treatment destination where known. Do not count units still in rework as waste.

- Selected flow: Destination- and material-specific waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured mass of final rejects transferred out of the rework loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished wiring set
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_output_tests`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared site operations and meters | Avoid allocation by separately metering or subdividing preparation, assembly, test, rework, and packaging operations whenever practicable. | iso-14044-2006; eu-pef-method-2021 |
| `allocation_internal_rework` | internal rework and recovered work in progress | Keep burdens and material returns inside the same foreground system; do not create a co-product credit for an item that returns to production. | eu-pef-method-2021 |
| `allocation_multiple_products` | unavoidable shared burdens across distinct saleable products | Use a documented physical causal driver such as machine time, processed mass, or test time. If no physical relation reasonably represents burden causation, use a documented economic relation and disclose the method, period, prices, and sensitivity. | iso-14044-2006; eu-pef-method-2021 |
| `allocation_scrap_and_residues` | sold scrap, recyclable residues, and waste | Report the mass and destination as separate outputs. Do not subtract scrap revenue or an avoided burden from foreground inputs unless the broader study declares and applies a consistent recycling or substitution method. | iso-14044-2006; eu-pef-method-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_preparation` | wires, cables, terminals, connectors, seals, and purchased subassemblies | receiving, issue, return, BOM, unit-mass, and inventory records | item_id; material_or_component_description; supplier; quantity_received; quantity_issued; quantity_returned; unit_mass; opening_stock; closing_stock; lot_id; product_family | reconcile ERP or warehouse movements to verified BOM and unit-mass records | kg and item | each receipt and issue; aggregate monthly | representative reporting period or complete production campaign | all preparation lines in the declared site | sum consumed mass by item and product family; retain purchased subassemblies as single rows unless their datasets exclude embedded components | purchase record; BOM revision; calibrated scale or supplier mass evidence; stock reconciliation |
| `cp_component_energy` | `component_preparation` | preparation electricity and utilities | meter, submeter, equipment-runtime, and utility invoice records | meter_id; reading_start; reading_end; utility_type; machine_runtime; allocation_driver; production_lot | read submeters; allocate only shared consumption using a documented physical driver | metered utility unit | per shift or meter interval; aggregate monthly | same period as material and accepted-output records | all preparation equipment in the declared site | subtract meter readings and allocate shared use by machine time or another justified physical driver | meter identity; calibration or invoice; allocation worksheet |
| `cp_component_output_waste` | `component_preparation` | prepared-lead transfers and preparation scrap | transfer weighment, scrap-bin, rejection, and waste-dispatch records | lot_id; output_mass; scrap_material; scrap_mass; destination; date | weigh internal transfers and segregated scrap; reconcile to material inputs | kg | each transfer and waste dispatch; aggregate monthly | same period as component inputs | all preparation lines in the declared site | sum transfers and scrap by product family, material, and destination | scale calibration; transfer ticket; waste manifest; reconciliation record |
| `cp_assembly_materials` | `harness_assembly` | prepared leads and protective, securing, identification, and finishing materials | transfer, issue, return, BOM, count, and unit-mass records | item_id; description; quantity_issued; quantity_returned; unit_mass; transfer_mass; lot_id; product_family | reconcile internal transfers and warehouse issues to verified BOM and unit masses | kg and item | each transfer and issue; aggregate monthly | same period as accepted-output records | all harness assembly lines in the declared site | sum consumed mass by item and product family | BOM and drawing revision; scale or unit-mass evidence; stock reconciliation |
| `cp_assembly_energy` | `harness_assembly` | assembly electricity and utilities | meter, equipment-runtime, and utility records | meter_id; reading_start; reading_end; utility_type; runtime; allocation_driver; production_lot | read submeters; allocate shared consumption using documented physical drivers | metered utility unit | per shift or meter interval; aggregate monthly | same period as assembly material records | all assembly equipment in the declared site | subtract meter readings and allocate shared use by machine time or another justified physical driver | meter identity; calibration or invoice; allocation worksheet |
| `cp_assembly_output_waste` | `harness_assembly` | assembled-harness transfers and assembly waste | transfer weighment, scrap-bin, rejection, and waste-dispatch records | lot_id; output_mass; waste_material; waste_mass; destination; date | weigh internal transfers and segregated waste | kg | each transfer and waste dispatch; aggregate monthly | same period as assembly inputs | all assembly lines in the declared site | sum transfers and waste by product family, material, and destination | scale calibration; transfer ticket; waste manifest; reconciliation record |
| `cp_test_finish_inputs` | `testing_finishing_packaging` | assembled harnesses, packaging, labels, caps, and finishing inputs | transfer, issue, return, BOM, count, and unit-mass records | item_id; description; quantity_issued; quantity_returned; unit_mass; transfer_mass; lot_id; product_family | reconcile internal transfers and issued materials to verified BOM and unit masses | kg and item | each transfer and issue; aggregate monthly | same period as accepted-output records | all test, rework, and packaging areas in the declared site | sum consumed mass by item and product family; keep packaging separate from net reference-product mass | BOM and packaging specification; scale or unit-mass evidence; stock reconciliation |
| `cp_test_finish_energy` | `testing_finishing_packaging` | test, rework, and packaging electricity | meter, test-cycle, equipment-runtime, and utility records | meter_id; reading_start; reading_end; test_cycles; runtime; allocation_driver; lot_id | read submeters; allocate shared consumption using test cycles, machine time, or another physical driver | kWh | per shift or meter interval; aggregate monthly | same period as accepted-output records | all test, rework, and packaging equipment in the declared site | subtract meter readings and allocate shared use by documented physical driver | meter identity; calibration or invoice; test-equipment log; allocation worksheet |
| `cp_finished_output_tests` | `testing_finishing_packaging` | accepted output, inspection and test status, rework, and final rejects | scale, production, test, nonconformance, rework, and waste records | serial_or_lot_id; product_family; drawing_revision; net_mass; test_specification; test_result; rework_status; reject_mass; waste_destination; date | weigh accepted and rejected output and link test and inspection records to the lot or serial identity | kg and test status | each lot or unit as required by the acceptance specification; aggregate monthly | same period as all foreground inputs | all accepted output and final rejects from the declared site | sum accepted net mass and final reject mass; exclude unresolved work in progress from both until disposition | scale calibration; current drawing and BOM; test-equipment calibration; traceable inspection and test report; nonconformance disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_count_to_mass` | counted components and packaging | consumed mass = (issued item count - returned item count) × verified unit mass | issued count; returned count; verified unit mass | consumed mass by item in kg |  |
| `calc_net_material_consumption` | mass-issued materials | consumed mass = opening stock + receipts - closing stock - documented returns or transfers out | opening stock; receipts; closing stock; returns; transfers | consumed input mass in kg | eu-pef-method-2021 |
| `calc_normalize_reference_mass` | every foreground inventory row | normalized amount = reporting-period row amount / reporting-period accepted finished-product mass | aggregated row amount; accepted finished-product mass | amount per 1 kg accepted wiring set | iso-14044-2006; eu-pef-method-2021 |
| `calc_mass_reconciliation` | whole foreground system | residual = total material inputs - accepted net product - exported waste and scrap - final rejects - closing work-in-progress increase + opening work-in-progress decrease; investigate and disclose the residual without forced adjustment | material inputs; accepted product; waste; scrap; rejects; work-in-progress change; stock change | mass reconciliation and disclosed residual in kg | eu-pef-method-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_scope` | product identity and boundary | Retain the current drawing, bill of materials, application family, circuit and voltage class, product revision, site, period, included operations, outsourced operations, and packaging treatment. | approved drawing and BOM; routing; scope statement; product metadata |
| `dq_primary_records` | material, energy, waste, and output quantities | Use site records for foreground quantities. Supplier or generic secondary data may describe upstream production but shall not replace measured foreground consumption or output. | receiving and issue records; meters; invoices; scale tickets; production reports; waste manifests |
| `dq_temporal_alignment` | all foreground rows | Use one representative reporting period, normally 12 consecutive months or a complete production campaign, and align input, output, rework, stock-change, and waste records to that period. Disclose shutdowns, ramp-up, or exceptional production. | period register; production calendar; meter dates; stock records; campaign report |
| `dq_mass_completeness` | material balance | Include all bill-of-material items and measurable process additions, accepted product, scrap, final rejects, work-in-progress change, and stock change; explain unresolved residuals and missing supplier datasets. | mass-reconciliation worksheet; BOM coverage check; data-gap register |
| `dq_test_traceability` | inspection and electrical testing | Retain current acceptance procedures and traceable inspection and test results. At minimum record continuity testing; record insulation-resistance, dielectric-withstand, shielding, functional, or other tests when required by the declared application and specification. | test specification; calibrated-equipment record; lot- or serial-linked test report; nasa-std-8739-4a-change-4; ipc-whma-a-620 |
| `dq_allocation` | shared operations | Document every shared-meter or shared-process allocation driver and retain the calculation and sensitivity when a non-physical relation is used. | allocation worksheet; meter map; production statistics; iso-14044-2006; eu-pef-method-2021 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_complete_set_scope` | product identity | Confirm that the reference product is a complete wiring set for a vehicle, aircraft, or ship, not a single wire, cable, connector, terminal, component kit, incomplete subassembly, or complete transport equipment item. | ipc-whma-a-620 |
| `validate_reference_identity` | reference flow | Require product flow UUID `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and reference amount 1. |  |
| `validate_required_qualifiers` | functional unit and dataset metadata | Fail completeness when any required qualifier is absent or when the bill-of-material, drawing, test-specification, or packaging basis is not identifiable. | ipc-whma-a-620; nasa-std-8739-4a-change-4 |
| `validate_process_coverage` | foreground process inventory | Require all three process-map stages or a documented aggregation that preserves preparation, assembly, testing, rework, packaging, input, output, and waste coverage. | ipc-whma-a-620; nasa-std-8739-4a-change-4 |
| `validate_internal_transfers` | prepared-lead and assembled-harness internal flows | Confirm that each internal output has a matching downstream input and carries no duplicated upstream burden. | eu-pef-method-2021 |
| `validate_mass_reconciliation` | whole foreground system | Require a mass-reconciliation worksheet covering inputs, accepted product, waste, scrap, rejects, work-in-progress, and stock change; unresolved residuals must be disclosed and must not be forced into another row. | eu-pef-method-2021 |
| `validate_test_records` | accepted output | Require traceable inspection and continuity-test evidence for accepted product and all additional tests required by the declared design or acceptance specification. | ipc-whma-a-620; nasa-std-8739-4a-change-4 |
| `validate_allocation_disclosure` | shared burdens and scrap | Require the allocation driver, data period, calculations, and scrap or waste treatment to be disclosed; prohibit unexplained revenue netting or avoided-burden credits. | iso-14044-2006; eu-pef-method-2021 |
| `validate_no_unsourced_defaults` | all foreground amounts | Reject undocumented default quantities presented as measured or source-backed values. Foreground gaps shall remain explicit and replaceable. | iso-14044-2006; eu-pef-method-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for a finished wiring set at the manufacturing plant gate |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` and used as a component-production input to vehicle, aircraft, ship, process, or `lifecyclemodel` studies |
| allowed_use | Product-family or design-specific studies whose application, voltage, material, connector, protection, geography, period, test, and packaging qualifiers are compatible with the dataset |
| excluded_use | Single wires, cables, connectors, terminals, incomplete kits or subassemblies; non-transport wiring applications; installed-system use or end-of-life claims; comparison across incompatible designs without additional normalization and review |
| required_metadata | PCR id; product flow UUID; application family; harness function; circuit and voltage class; conductor and insulation system; connector and termination technology; shielding and protection; drawing and BOM revision; site and geography; reporting period; production route; outsourced stages; applicable test specification; packaging treatment; allocation method |
| required_quality_disclosure | Foreground-data coverage; meter and mass-measurement basis; BOM and supplier-data coverage; mass-reconciliation residual; rejected and reworked output; test coverage and traceability; allocation drivers; upstream dataset gaps; temporal, geographical, and technological representativeness |
| update_trigger | Change in drawing or BOM that materially changes composition; conductor, insulation, connector, termination, shielding, or protection technology change; voltage-class or application change; site or route change; material change in supplier mix, energy mix, scrap treatment, allocation method, test regime, packaging, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ipc-whma-a-620` | standard | IPC and WHMA, *Requirements and Acceptance for Cable and Wire Harness Assemblies*, official IPC description: https://www.ipc.org/ipc-validation-services-qualified-manufacturing-companies-qml-ipcwhma-620 (retrieved 2026-08-09) | Category meaning; assembly activities; crimped, mechanically secured, and soldered interconnections; inspection and test basis; process-control and acceptance-record expectations |
| `nasa-std-8739-4a-change-4` | standard | NASA-STD-8739.4A Change 4, *Workmanship Standard for Crimping, Interconnecting Cables, Harnesses, and Wiring*: https://standards.nasa.gov/node/283 (retrieved 2026-08-09) | Detailed process decomposition for forming, stripping, shielding, crimping, connector assembly, identification, cleaning, handling, testing, splicing, and quality assurance; test and record traceability for critical applications |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*: https://www.iso.org/standard/38498.html (retrieved 2026-08-09) | Goal and scope, inventory, allocation, reporting, limitations, and interpretation framework |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I, *Product Environmental Footprint Method*: https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-09) | Functional unit and reference flow framing; system boundary; inventory data quality; allocation hierarchy; normalization and reporting |
