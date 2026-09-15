---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.machines-and-appliances-for-testing-the-mechanical-properties-of-materials
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Machines and appliances for testing the mechanical properties of materials

## 1. Scope and Applicability

This PCR governs foreground data packages for the manufacture of complete machines and appliances whose principal function is testing mechanical properties of materials. Covered configurations include static tension, compression, flexure, hardness, impact, torsion, fatigue, and comparable mechanical-property testing systems when supplied as a complete machine or appliance. A universal testing machine is the representative product, but the declared configuration may use an electromechanical, servo-hydraulic, or other test principle.

The foreground boundary starts with receipt of purchased materials, parts, subassemblies, sensors, controllers, software-bearing hardware, and packaging at the manufacturing site and ends with a complete machine that has passed the applicable inspection, calibration, verification, and release checks at the plant gate. Upstream production of purchased inputs remains represented through linked upstream datasets. Distribution, installation at the customer, use-phase testing, maintenance, calibration after delivery, and end-of-life treatment are outside this manufacturing data package unless the declared study explicitly extends the boundary.

Standalone parts and accessories supplied separately are excluded because CPC 3.0 assigns parts and accessories for this subclass to 48285. Test services, laboratory operation, material test specimens, optical microscopes, physical or chemical analysis instruments, and general process-control equipment are also excluded. Fixtures, grips, extensometers, load cells, controllers, and software-bearing hardware are included only when they form part of the delivered complete-machine configuration.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.machines-and-appliances-for-testing-the-mechanical-properties-of-materials` |
| classification_refs | CPC 3.0:48262, exact scope reference |
| covered_products | Complete machines and appliances for testing mechanical properties of materials, including delivered load frame or body, drive and control system, force or displacement measurement chain, required software-bearing hardware, and configuration-specific integrated accessories |
| excluded_products | Standalone parts and accessories classified in CPC 3.0:48285; material-testing services; test specimens; optical microscopes; physical or chemical analysis instruments; general process-control equipment; customer-site use, maintenance, and end-of-life services |
| representative_product | A complete universal material testing machine configured for static tension and compression testing |
| production_route | Receipt and preparation of product-specific parts and subassemblies; conditional in-house fabrication and finishing; mechanical and electrical assembly; controller and software integration; inspection, calibration, verification, and final release; conditional sales packaging |
| market_state | Finished product, manufactured; production mix at plant; released in the declared delivered configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished machine or appliance for testing mechanical properties of materials, in the declared delivered configuration at the manufacturing plant gate |
| How much | 1 kg net mass of the released complete machine, excluding separately supplied accessories and outbound packaging unless explicitly included in the declared sales configuration |
| How well | Complete, functional, and released after the applicable general inspection, measurement-system calibration or verification, and configuration-specific performance checks |
| How long or cycle | One declared production period or production lot; service life and number of tests performed are reported as metadata when known but do not change the mass reference flow |
| reference_flow_link | The output `released_testing_machine` of process `calibration_verification_and_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Machines and appliances for testing the mechanical properties of materials `f88ff979-7acf-4c6d-8a10-710337b61179` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | test principle and supported test modes; rated force or capacity; drive type; frame or body configuration; force-measurement class or declared accuracy; displacement and strain-measurement configuration; included load cells, grips, fixtures, extensometers, controller, computer, and software-bearing hardware; net product mass; included and excluded accessories; packaging inclusion; production geography; production period; applicable release and calibration standards |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Released complete testing machine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground inventory to 1 kg of net released product mass. Weigh or derive net mass from a reconciled product-specific bill of materials, and state whether integrated accessories are included. |
| `input_mass_consistency` | Material, component, consumable, packaging, scrap, and waste mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert recorded mass units through Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; retain original units and conversion factors in the foreground records. |
| `energy_carrier_measurement` | Purchased electricity and fuels | Energy property of the selected exact carrier flow | kWh, MJ, or the carrier's reference unit | Record metered or invoice-supported quantities by carrier. Do not convert electricity to mass or combine different energy carriers before linking their exact upstream datasets. |
| `configuration_denominator` | Multi-model or multi-configuration production | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The allocation denominator shall contain only conforming released mass for the represented model or justified product family; rework and rejected units shall not inflate released output. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_purchased_inputs` | Purchased materials, parts, subassemblies, electronics, sensors, drives, controllers, and packaging | Record each material input that crosses the manufacturing boundary and link it to the most specific available upstream dataset consistent with material, technology, geography, and supplier state. Do not treat purchased components as burden-free. | `eu-pef-2021` |
| `boundary_foreground_operations` | Operations controlled by the manufacturing site | Include receiving and preparation, applicable machining or fabrication, surface treatment, assembly, wiring, controller and software integration, calibration and verification, rework, final inspection, and packaging when performed for the delivered configuration. | `eu-pef-2021`; `instron-3340-system-support` |
| `boundary_direct_flows` | Site energy, water, consumables, waste, and direct emissions | Include measured or otherwise traceable electricity, fuels, process water, consumables, waste and scrap, and direct elementary emissions for included operations. Absence of a default quantity is not permission to omit a flow. | `eu-pef-2021` |
| `boundary_release_evidence` | Calibration, verification, and release | Include the resources and rejected or reworked output attributable to applicable inspection, force-measurement verification, extensometer calibration, and performance-class confirmation; retain the applicable release standard and record identifier. | `iso-7500-1-2018`; `iso-9513-2012` |
| `boundary_exclusions` | Activities outside manufacturing | Exclude outbound distribution, customer-site installation, product use, routine post-delivery calibration and maintenance, and end-of-life unless the study explicitly expands the boundary. Disclose R&D, office, sales, infrastructure, and capital-equipment exclusions and include them when required by the declared study method or shown material. | `eu-pef-2021` |
| `boundary_no_data_cutoff` | Potentially relevant foreground flows | Do not omit a material or energy flow solely because data are unavailable. Document every exclusion, its reason, and the materiality check used; unresolved potentially significant exclusions make validation inconclusive. | `eu-pef-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, parts, subassemblies, electronics, sensors, drives, controllers, and packaging received at the manufacturing site in their documented supplier state |
| starting_condition_role | Manufacturing gate input; upstream production is represented by linked supplier-specific or suitable secondary datasets rather than repeated in the foreground process |
| product_classification_scope | Complete CPC 3.0:48262 testing machines and appliances; separately supplied CPC 3.0:48285 parts and accessories are outside the reference product |
| recursive_input_rule | A purchased or transferred input that is itself a complete CPC 3.0:48262 machine shall remain an explicit product input with its own upstream dataset; do not recursively reproduce its manufacture or silently merge its mass into generic machinery |
| upstream_dataset_requirement | Link every purchased material and component group to the most specific available upstream dataset, prioritizing supplier-specific data and matching material, manufacturing technology, geography, and delivered state |
| disclosure | Declare the represented model or product-family logic, test principle, rated capacity, drive and frame configuration, delivered measurement and accessory set, net product mass, packaging treatment, production site and period, in-house versus purchased operations, allocation method, exclusions, and data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_receipt_and_preparation` | Component receipt and preparation | required | Always; in-house machining, fabrication, cleaning, and surface finishing are included only when performed by the reporting site | Convert purchased materials, parts, and subassemblies into inspected, prepared inputs for assembly | kg prepared components and subassemblies transferred to assembly |
| `machine_assembly_and_integration` | Machine assembly and integration | required | Always; includes the delivered mechanical, electrical, sensing, control, and software-bearing configuration | Assemble the load frame or body, drive, load and displacement measurement chain, controller, wiring, safeguards, and integrated accessories | kg assembled machine transferred to release testing |
| `calibration_verification_and_release` | Calibration, verification, and release | required | Always; the exact checks depend on test principle, measurement system, and declared standard | Inspect and verify the machine, correct or record rework, and release the conforming finished product; include sales packaging when declared | 1 kg net released complete machine |

### Process: Component receipt and preparation (`component_receipt_and_preparation`)

#### Inputs

##### Product flows

###### Product-specific materials, parts, and subassemblies (`purchased_materials_components`)

Record all received structural metals, castings, machined parts, columns, screws or actuators, hydraulic or pneumatic items, enclosures, fasteners, cables, boards, power supplies, sensors, load cells, controllers, computers, and other product-specific inputs at the aggregation level supported by the product BOM and upstream datasets.

- Selected flow: Exact supplier-specific or technology-matched product flows selected during foreground package construction
- Flow property / unit: Mass / kg, or the exact reference property and unit of a component dataset with a retained mass conversion
- Amount rule: Received quantity attributable to conforming production, reconciled to purchase, stock, and BOM records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_receipts`
- Sources: `eu-pef-2021`; `instron-3340-system-support`

###### Preparation energy and operating supplies (`preparation_energy_supplies`)

Record electricity, fuels, water, cutting fluids, cleaners, abrasives, coatings, treatment chemicals, and other supplies for receiving, inspection, cleaning, machining, fabrication, and surface finishing performed within the foreground site.

- Selected flow: Exact electricity, fuel, water, and consumable flows selected for the site and period
- Flow property / unit: Exact selected-flow reference property / reference unit
- Amount rule: Metered, invoice-supported, batch-issued, or otherwise traceable consumption allocated to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operations_energy_consumables`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared components and subassemblies (`prepared_components`)

Record the measured or reconciled mass transferred from preparation to final assembly. This internal product flow prevents double counting between preparation and assembly.

- Selected flow: Internal prepared-components transfer flow created for the foreground package
- Flow property / unit: Mass / kg
- Amount rule: BOM-reconciled transfer mass after recorded preparation losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_and_receipts`

##### Waste flows

###### Preparation scrap and waste (`preparation_scrap_waste`)

Record metal chips and offcuts, rejected parts, spent abrasives and fluids, wastewater, coating waste, and packaging waste by treatment destination when preparation occurs on site.

- Selected flow: Exact waste flow for each material and treatment route selected during foreground package construction
- Flow property / unit: Mass / kg, or volume with a documented density conversion where direct mass is unavailable
- Amount rule: Weighed or manifested waste attributable to represented production; reusable internal returns remain separately visible and are not counted as waste sent off site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_direct_emissions`

##### Elementary flows

###### Direct preparation emissions (`preparation_direct_emissions`)

Record measured or calculated releases from included machining, cleaning, coating, curing, or fuel combustion, including relevant air and water emissions. Do not invent zero emissions for an applicable operation.

- Selected flow: Exact elementary flow matching the emitted substance and environmental compartment
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or calculation from collected activity data using a cited applicable method or factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_direct_emissions`

### Process: Machine assembly and integration (`machine_assembly_and_integration`)

#### Inputs

##### Product flows

###### Prepared components and subassemblies input (`prepared_components_input`)

Transfer the prepared frame or body, drive, measurement-chain components, controller, wiring, safeguards, computers, and configuration-specific integrated accessories into assembly without adding upstream burdens a second time.

- Selected flow: Same internal prepared-components transfer flow used by `prepared_components`
- Flow property / unit: Mass / kg
- Amount rule: Equal to the upstream internal transfer quantity after any documented inter-process stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_integration`

###### Assembly energy and consumables (`assembly_energy_consumables`)

Record electricity, compressed air, fuels, lubricants, adhesives, solder, wiring consumables, cleaning materials, software-bearing media or hardware, and other assembly and integration inputs attributable to the delivered product.

- Selected flow: Exact energy-carrier and consumable product flows selected for the site and period
- Flow property / unit: Exact selected-flow reference property / reference unit
- Amount rule: Metered, invoice-supported, work-order-issued, or otherwise traceable consumption allocated to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_integration`
- Sources: `eu-pef-2021`; `instron-3340-system-support`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled machine ready for release testing (`assembled_machine`)

Record the complete assembled configuration entering final inspection and calibration, including the declared load frame or body, controller, measurement chain, safeguards, software-bearing hardware, and integrated accessories.

- Selected flow: Internal assembled-machine transfer flow created for the foreground package
- Flow property / unit: Mass / kg
- Amount rule: Measured or BOM-reconciled assembled mass transferred to release testing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_integration`
- Sources: `instron-3340-system-support`

##### Waste flows

###### Assembly waste and rejected components (`assembly_waste`)

Record rejected electronic or mechanical parts, cable and metal offcuts, spent consumables, and other waste leaving assembly by material and treatment destination. Reworked items remain in the rework loop and are not double counted as off-site waste.

- Selected flow: Exact waste flow for each material and treatment route selected during foreground package construction
- Flow property / unit: Mass / kg
- Amount rule: Weighed, counted with measured representative mass, or manifested waste attributable to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_integration`

##### Elementary flows

### Process: Calibration, verification, and release (`calibration_verification_and_release`)

#### Inputs

##### Product flows

###### Assembled machine input (`assembled_machine_input`)

Transfer the assembled machine into final inspection and calibration without repeating component burdens.

- Selected flow: Same internal assembled-machine transfer flow used by `assembled_machine`
- Flow property / unit: Mass / kg
- Amount rule: Equal to the internal output entering release testing after documented stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_calibration_release`

###### Release-test energy, specimens, consumables, and packaging (`release_inputs`)

Record electricity, hydraulic or pneumatic energy, test specimens and expendable fixtures, calibration-related consumables, replacement items used in rework, and sales packaging included before the plant gate. Reference standards and reusable calibration equipment are reported as equipment metadata unless the declared study method requires their capital burden.

- Selected flow: Exact energy, consumable, test-material, replacement-part, and packaging flows selected for the site and delivered configuration
- Flow property / unit: Exact selected-flow reference property / reference unit
- Amount rule: Metered, issued, or purchase-supported quantity attributable to inspection, calibration, verification, rework, and declared packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_release`
- Sources: `iso-7500-1-2018`; `iso-9513-2012`; `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released testing machine (`released_testing_machine`)

This is the quantitative reference product. It is a complete CPC 3.0:48262 machine or appliance in the declared delivered configuration and has passed the applicable release checks.

- Selected flow: Machines and appliances for testing the mechanical properties of materials `f88ff979-7acf-4c6d-8a10-710337b61179`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net released product mass after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-0-2025`

##### Waste flows

###### Release-test waste and final rejects (`release_test_waste`)

Record consumed or damaged specimens, replaced components, discarded packaging, spent fluids, and final rejected machines or parts by treatment destination. Rework inputs and energy remain attributed to the conforming released output.

- Selected flow: Exact waste flow for each material and treatment route selected during foreground package construction
- Flow property / unit: Mass / kg
- Amount rule: Weighed, counted with measured representative mass, or manifested waste attributable to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_release`

##### Elementary flows

###### Direct release-test emissions (`release_test_direct_emissions`)

Record direct releases from fuel use, hydraulic-fluid losses, refrigerants, or other applicable release operations. Do not create a zero-valued elementary flow where no applicable source exists; retain the applicability assessment instead.

- Selected flow: Exact elementary flow matching the emitted substance and environmental compartment
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or calculation from collected activity data using a cited applicable method or factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg of net released complete machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_calibration_release`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Shared manufacturing lines, utilities, and release-test operations | First avoid allocation by subdividing processes, using model- or work-order-specific BOMs, and submetering or otherwise tracing activity data to the represented configuration. | `eu-pef-2021` |
| `allocation_physical_relationship` | Residual shared inputs and emissions after subdivision | When subdivision is not practicable, allocate using a documented physical relationship that reflects resource use, such as machine hours, test hours, measured energy demand, processed mass, or work-order time. Do not use product count when configurations differ materially in mass or processing. | `eu-pef-2021` |
| `allocation_other_relationship` | Shared burdens lacking a defensible physical relationship | Use economic or another justified relationship only after documenting why subdivision and physical allocation are not feasible; disclose the basis, period, product pool, and sensitivity of the result. | `eu-pef-2021` |
| `allocation_scrap_rework` | Scrap, reusable returns, rework, and rejects | Attribute consumables and energy used for rework to conforming released output; distinguish internally returned scrap from waste leaving the site and prevent double counting of internal transfers. Any recycling or avoided-burden modelling belongs to the declared downstream method and shall be disclosed separately. | `eu-pef-2021` |
| `allocation_no_unreported_coproduct` | Saleable by-products or recovered materials | Identify every saleable co-product or recovered material. If none occurs, state this explicitly; if one occurs, apply the declared allocation hierarchy and retain quantity, destination, and allocation evidence. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_receipts` | `component_receipt_and_preparation` | Purchased inputs and prepared-component transfer | Product-specific BOM, purchase and receipt records, stock movements, part mass records, supplier specifications | model_id; configuration_id; part_id; material_or_component; supplier; supplier_state; quantity_received; unit; measured_or_spec_mass; opening_stock; closing_stock; quantity_transferred; upstream_dataset_ref | Reconcile released serial numbers or work orders to the BOM, receipt, inventory, and measured or controlled part-mass records | original record unit and kg | Each lot or work order; aggregate at least monthly | Same representative period as released output, normally 12 consecutive months or the full production campaign if shorter | All sites contributing foreground preparation to the represented product | Sum attributable inputs, adjust for stock change, and normalize through `calc_reference_normalization`; retain model/configuration stratification | Approved BOM revision, purchase or receipt record, stock ledger, weighing/calibration evidence, supplier specification, upstream dataset selection record |
| `cp_operations_energy_consumables` | `component_receipt_and_preparation` | Preparation energy, water, supplies, and applicable in-house operations | Meter, invoice, batch issue, work-order, and operating log | operation_id; work_order; energy_or_supply_id; opening_reading; closing_reading; quantity; unit; allocation_driver; downtime; included_models | Prefer submetering and work-order issues; otherwise reconcile site meters or invoices to operating logs and a justified allocation driver | exact source unit | Continuous or per batch; aggregate monthly | Same representative period as released output | Each foreground preparation site | Subtract non-production use where evidenced, allocate under section 7, and normalize through `calc_reference_normalization` | Meter calibration, invoices, issue tickets, work orders, operating hours, allocation worksheet |
| `cp_waste_and_direct_emissions` | `component_receipt_and_preparation` | Preparation waste, scrap, and direct emissions | Weigh tickets, waste manifests, treatment records, emission monitoring, activity records and factors | waste_or_substance_id; quantity; unit; destination_or_compartment; treatment_route; internal_return; activity_data; factor; factor_source; calculation | Weigh or manifest waste by route; measure emissions or calculate from collected activity data using a cited applicable method | kg or exact monitoring unit | Per shipment, batch, or monitoring interval; aggregate monthly | Same representative period as released output | Each foreground preparation site | Separate internal returns from off-site waste, calculate emissions by substance and compartment, and normalize through `calc_reference_normalization` | Weigh ticket, manifest, laboratory or continuous-monitoring record, calculation sheet, source for factor |
| `cp_assembly_integration` | `machine_assembly_and_integration` | Internal component transfer, assembly inputs, energy, waste, and assembled-machine output | Work orders, serial-number build records, issue records, meters, BOM reconciliation, non-conformance and waste records | serial_or_lot; configuration_id; input_transfer_mass; assembly_input_id; quantity; unit; energy_reading; assembly_hours; rework_quantity; waste_quantity; waste_route; assembled_mass | Trace records to represented serial numbers, configurations, or work orders; reconcile internal transfers and assembled mass | original record unit and kg | Each work order or shift; aggregate monthly | Same representative period as released output | Every site performing final mechanical or electrical integration | Sum configuration-specific quantities, allocate only residual shared burdens under section 7, and normalize through `calc_reference_normalization` | Work order, BOM issue record, calibrated meter, non-conformance report, weighing record, waste manifest |
| `cp_calibration_release` | `calibration_verification_and_release` | Release-test inputs, calibration evidence, packaging, rework, rejects, and released product | Serial-level inspection and calibration records, applicable standard and class, test logs, meter and issue records, packaging BOM, release certificate, net mass | serial_id; configuration_id; applicable_standard; force_or_measurement_class; inspection_record; calibration_record; verification_result; test_energy; specimen_or_consumable; rework_parts; reject_mass; packaging_item; packaging_mass; net_released_mass; release_date | Link each released serial or sampled lot to applicable inspection, calibration, verification, rework, packaging, and net-mass records | exact source unit and kg | Each released serial or defined lot; energy aggregated at least monthly when serial metering is unavailable | Same representative period as released output | Every release and packaging site | Include failed attempts and rework attributable to conforming output, separate packaging, and normalize through `calc_reference_normalization` | Calibration certificate, traceable standard or procedure, inspection checklist, test log, release certificate, calibrated scale record, packaging specification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground input, waste, and direct emission | Normalized quantity = attributable quantity in the representative period / net mass of conforming released machines in the same represented product pool. Convert numerator and denominator to compatible units before division. | attributable quantity; net conforming released mass; unit conversion; allocation evidence | Quantity per 1 kg net released complete machine | `eu-pef-2021` |
| `calc_stock_adjusted_input` | Purchased inputs crossing a period boundary | Consumed input = opening stock + receipts - closing stock - documented returns, calculated for the same part, material, site, and period. | opening stock; receipts; closing stock; returns | Attributable consumed input | `eu-pef-2021` |
| `calc_mass_reconciliation` | Product, scrap, waste, emissions, and stock change | Reconcile mass-bearing inputs with released product, off-site waste, direct mass emissions, documented internal returns, and stock or work-in-progress change. Investigate and disclose the residual rather than forcing it to zero. | mass inputs; released mass; wastes; mass emissions; internal returns; stock and work-in-progress change | Mass-balance residual and reconciliation statement | `eu-pef-2021` |
| `calc_shared_activity_allocation` | Shared utilities and operations | Allocated quantity = shared measured quantity × represented product's documented driver / total driver for the same equipment, site, and period. The driver shall satisfy section 7. | shared quantity; product driver; total driver; allocation period | Attributable shared quantity | `eu-pef-2021` |
| `calc_internal_transfer_consistency` | Prepared-components and assembled-machine transfers | The output of the supplying foreground process shall equal the input to the receiving process after documented stock change; internal transfers carry no additional upstream burden. | supplying-process output; receiving-process input; inter-process stock change | Transfer reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_product_identity` | Reference product and product pool | Records shall identify model, configuration, test principle, rated capacity, drive and frame type, measurement system, integrated accessories, packaging treatment, and serial or lot population represented. | Product specification, BOM revision, configuration record, serial or lot register |
| `dqr_measurement_traceability` | Mass, energy, calibration, emissions, and allocation drivers | Retain instrument identity, calibration status, reading period, unit, conversion, and responsible record owner; calibration and verification evidence shall name the applicable standard, procedure, and achieved class or result. | Calibration certificate, meter log, test report, controlled procedure, conversion worksheet |
| `dqr_temporal_consistency` | All foreground records | Inputs, outputs, stock change, waste, and released mass shall cover the same representative period. A shorter campaign is acceptable only when it covers the full campaign and is disclosed. | Period reconciliation and coverage report |
| `dqr_site_completeness` | Multi-site manufacture | Include every site performing an operation within the declared foreground boundary and identify transfers between sites; do not represent one site as the complete route without justification. | Site map, routing, transfer records, site coverage matrix |
| `dqr_bom_and_supplier_data` | Purchased inputs | Use the product-specific BOM and prioritize supplier-specific or technology-, geography-, and state-matched upstream datasets. Disclose proxies and their mass share. | BOM, supplier specification, dataset-selection and proxy register |
| `dqr_completeness_and_gaps` | Potentially relevant flows | Document included and excluded operations and flows, missing-data treatment, materiality assessment, allocation, and unresolved gaps. No missing category-wide default may be replaced by an unlabelled estimate. | Completeness checklist, exclusions log, gap register, allocation worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference product UUID shall be `f88ff979-7acf-4c6d-8a10-710337b61179`, the reference flow property UUID shall be `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit-group UUID shall be `93a60a57-a4c8-11da-a746-0800200c9a66`, and the normalized reference amount shall be exactly 1 kg. | `unsd-cpc-3-0-2025` |
| `validate_category_scope` | Product identity | The represented output shall be a complete mechanical-properties testing machine or appliance within CPC 3.0:48262. A separately supplied part or accessory within CPC 3.0:48285, a testing service, or a non-mechanical analytical instrument shall fail category conformance. | `unsd-cpc-3-0-2025` |
| `validate_required_qualifiers` | Dataset metadata and reference-flow comment | Every qualifier listed in section 3 shall be present and consistent with the product specification, BOM, and release evidence. | `iso-7500-1-2018`; `iso-9513-2012`; `instron-3340-system-support` |
| `validate_process_coverage` | Foreground process map | All three required processes shall be represented. Every applicable in-house fabrication, finishing, assembly, software or controller integration, calibration, verification, rework, and packaging operation shall be included or explicitly justified as outside the delivered configuration. | `eu-pef-2021`; `instron-3340-system-support` |
| `validate_release_evidence` | Released product | Retain general inspection and applicable force-measurement calibration or verification evidence, achieved performance class or result, and extensometer calibration evidence when an extensometer is included. Missing applicable release evidence fails conformance. | `iso-7500-1-2018`; `iso-9513-2012` |
| `validate_bom_and_upstream_links` | Purchased materials and components | The product-specific BOM shall reconcile to the represented configuration, and each material or component group shall have an upstream dataset or an explicitly disclosed unresolved gap. Potentially material burden-free inputs fail conformance. | `eu-pef-2021` |
| `validate_allocation` | Shared inputs and operations | Allocation shall follow section 7 and retain the measured shared quantity, driver, denominator, period, product pool, and justification. Unsupported allocation or product-count allocation across materially different configurations fails conformance. | `eu-pef-2021` |
| `validate_mass_and_internal_transfers` | Mass-bearing inventory and foreground links | Internal transfer outputs and inputs shall reconcile after stock change, and the section 8 mass-balance residual shall be calculated, investigated, and disclosed. A forced or unexplained residual makes validation inconclusive. | `eu-pef-2021` |
| `validate_temporal_site_completeness` | Foreground evidence | Inputs, outputs, stock, waste, and released mass shall share a consistent period and cover all foreground sites. Missing site or period coverage without justification makes validation inconclusive. | `eu-pef-2021` |
| `validate_no_unlabelled_estimates` | Foreground quantities | Every quantity shall be collected, calculated from collected data, or explicitly identified under an approved modelling method. Unlabelled estimates, invented zeros, and unsupported category defaults fail conformance. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or explicitly defined product-family manufacturing dataset for a complete mechanical-properties testing machine at the plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Upstream supply of complete testing machinery in product systems; comparison or screening only when product configuration, boundary, geography, period, data quality, and allocation are compatible |
| excluded_use | Standalone parts or accessories; laboratory testing services; use-phase electricity or consumables; maintenance and calibration services after delivery; end-of-life modelling; claims comparing machines with materially different capacity, accuracy, configuration, or included accessories without functional adjustment |
| required_metadata | Canonical PCR id and version used; CPC 3.0:48262; model or product-family definition; test principle and modes; rated capacity; drive and frame type; force and strain measurement configuration; included controller, hardware, software-bearing equipment, load cells, grips, fixtures, extensometers, and other accessories; net mass; packaging treatment; site and geography; production period; allocation; upstream dataset selection; release standards and results; data gaps and exclusions |
| required_quality_disclosure | BOM coverage; supplier-specific and proxy dataset shares by mass; foreground site and temporal coverage; meter and mass-measurement traceability; calibration and release evidence; waste-route coverage; mass-balance residual; allocation drivers; exclusions; missing-data treatment; uncertainty or sensitivity relevant to the intended use |
| update_trigger | Change in product configuration or rated capacity; drive, frame, controller, measurement chain, or accessory redesign; material or supplier route change; manufacturing-site or process change; altered release or calibration standard; allocation or packaging change; representative data older than the declared validity period; newly available supplier data; unresolved gap becoming material |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes*, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-09) | Official CPC 48262 identity and separation of parts and accessories into CPC 48285 |
| `iso-7500-1-2018` | `standard` | ISO 7500-1:2018, *Metallic materials — Calibration and verification of static uniaxial testing machines — Part 1: Tension/compression testing machines — Calibration and verification of the force-measuring system*, https://www.iso.org/standard/72572.html (retrieved 2026-08-09) | General inspection, force-measurement calibration or verification, machine accessories for force application, and performance-class evidence for applicable static tension/compression machines |
| `iso-9513-2012` | `standard` | ISO 9513:2012, *Metallic materials — Calibration of extensometer systems used in uniaxial testing*, https://www.iso.org/standard/41619.html (retrieved 2026-08-09) | Calibration evidence for contacting and non-contacting axial or diametral extensometer systems when included |
| `instron-3340-system-support` | `handbook` | Instron, *3340 Series Single Column Table Frames — System Support*, M10-16280-EN, https://www.instron.com/en/resources/literature/3340-single-column-table-frames-system-support/ (retrieved 2026-08-09) | Representative testing-system component decomposition: load frame, controller, load string, load cell, grips or fixtures, extensometer, and testing software |
| `eu-pef-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, CELEX:32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-09) | Product-specific BOM and company-specific manufacturing data, foreground and upstream-data boundary, allocation hierarchy, data quality, completeness, verification, and disclosure rules |
