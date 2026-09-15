---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.television-cameras
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: canonical
---

# Television cameras

## 1. Scope and Applicability

This PCR governs foreground data packages for complete television cameras classified to CPC 3.0 code 47213. It covers cameras whose principal function is professional or system-oriented acquisition of moving images for broadcast and television production, security, conferencing, or industrial vision, when the declared product is semantically a television camera under this leaf.

The data package shall identify the intended use and physical form. Relevant forms may include studio, system, box, fixed, dome, bullet, panoramic, modular, PTZ, thermal, line-scan, area-scan, or other industrial-vision cameras, but form alone does not establish CPC identity. Digital still cameras, video camera recorders or camcorders, webcams classified outside this leaf, mobile-phone camera modules, loose image sensors, lenses, recording appliances, and other components are excluded. A single professional model, camera family, or narrow form shall not be extrapolated to the entire category without a documented, homogeneous product-family rule.

The foreground profile covers purchased components and materials, camera assembly, configuration and functional testing, packaging, and factory-gate release. Use-phase electricity, network infrastructure, external recording systems, installation, maintenance, and end-of-life treatment are outside the foreground manufacturing inventory unless explicitly included in a separately declared downstream scenario.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.television-cameras` |
| classification_refs | CPC 3.0 `47213` — Television cameras; exact mapping intent, with final shared mapping maintained outside this PCR |
| covered_products | Complete television cameras for broadcast/television production, security, conferencing, or industrial vision when their declared identity is within CPC 47213 |
| excluded_products | Digital still cameras; video camera recorders and camcorders; out-of-scope webcams; mobile-phone camera modules; loose sensors, lenses, boards, housings, and other parts; standalone recorders; products classified to another CPC leaf |
| representative_product | The actually manufactured, complete camera configuration represented by the foreground records; no category-wide default model |
| production_route | Supplier-produced sensor/optical, electronic, enclosure/mechanical, thermal-management, power, and accessory parts; camera assembly and configuration; functional test; packaging and factory-gate release |
| market_state | Finished new television camera at the factory gate; refurbished, remanufactured, repaired, or used products require a separate declaration and route |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished television camera matching CPC 3.0 code 47213 and the declared use, form, sensor/optical configuration, performance, recording/network functions, power arrangement, accessories, enclosure/electronics/thermal configuration, and market state |
| How much | `1 kg` net mass of unpackaged finished camera at the factory gate |
| How well | Conforms to the declared resolution, frame rate, image-acquisition functions, interfaces, power arrangement, included-accessory configuration, functional-test acceptance, and applicable market requirements |
| How long or cycle | One factory-gate production output; service life is not embedded in the mass reference and shall be declared separately for downstream use-stage modelling |
| reference_flow_link | TianGong Product flow `ce2c0eb5-09e4-487a-a0f9-0c8e9844f999` — Television cameras |

| Field | Value |
| --- | --- |
| Reference amount | `1` |
| Reference product flow | Television cameras `ce2c0eb5-09e4-487a-a0f9-0c8e9844f999` |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | `kg` |
| Required qualifiers | CPC identity and product name; intended application and camera form; sensor technology, count, format/size, shutter and spectral or colour characteristics as applicable; integrated or interchangeable optical path, lens mount, focal/zoom/iris/filter/stabilization configuration as applicable; resolution, frame rate, scanning mode, bit depth/colour or HDR mode and codec/output mode as applicable; local recording/storage, network, audio, metadata, PTZ, analytics and control functions as applicable; AC/DC/PoE/battery power arrangement; included power supply, battery, cables, mounts, controllers and other accessories; enclosure/housing, PCB/electronics, thermal-management hardware, packaging, manuals and labels; production route, geography, reference period and market state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_product_mass` | Reference product output | Mass | kg | Measure or reconcile the net mass of unpackaged, functionally accepted cameras; exclude packaging and separately supplied accessories unless physically integrated into the declared camera. |
| `measure_material_component_mass` | Purchased materials, components, accessories, packaging and solid wastes | Mass | kg | Use purchase, receiving, BOM, weighing, or waste records for the represented configuration and period; preserve material/component identity rather than reporting an unexplained aggregate. |
| `measure_energy` | Assembly, configuration, test and packaging energy | Energy | kWh | Use metered or reconciled site records; if shared, allocate only under Section 7 and disclose the allocation driver. |
| `measure_reject_and_scrap` | Rejected units, scrap, recovered parts and treatment routes | Mass | kg | Prevent double counting between input reconciliation, product output, internal rework and waste output; record destination and any returned material separately. |

## 5. System Boundary

The required foreground boundary is cradle-to-factory-gate for the represented production configuration. It includes upstream datasets linked to purchased inputs and the foreground activities needed to deliver the finished camera. Use and end-of-life information is retained as metadata for downstream modelling but is not silently mixed into the manufacturing inventory.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate_manufacturing` | All represented production routes | Include supplier-gate materials and components, their transport where modelled, camera assembly, configuration, functional test, production losses, packaging, and factory-gate release. | `pep-ecopassport-pcr-ed4-2021`, `ghg-protocol-product-standard-2011` |
| `boundary_component_completeness` | Sensor/optical, PCB/electronics, enclosure/mechanical, thermal-management and power subsystems | Account for every material component or process that can be assessed; any exclusion requires a documented mass and significance check and shall not conceal a potentially significant impact. | `pep-ecopassport-pcr-ed4-2021`, `iec-62474-2018` |
| `boundary_packaging_accessories` | Primary/secondary packaging, manuals, labels and included accessories | Record packaging and additional elements separately from the 1 kg net camera reference; include their production and packaging-stage losses in the data package. | `pep-ecopassport-pcr-ed4-2021` |
| `boundary_use_and_eol_scenarios` | Downstream use and end-of-life | Exclude use electricity, external networks/recorders and end-of-life from the foreground manufacturing total unless a separately labelled scenario is requested; retain power, service-life, battery, PCB, cable, display and material-disclosure data needed for those scenarios. | `eu-weee-2012-19-eu`, `eu-rohs-2011-65-eu` |
| `boundary_variant_scope` | Product family or portfolio datasets | Combine models only when a documented homogeneous-family or extrapolation rule covers differences in form, sensor/optics, performance, functions, power, accessories and construction; never extrapolate one narrow professional model to the whole CPC category. | `pep-ecopassport-pcr-ed4-2021`, `ebu-tech-3335-2014` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials, components, energy carriers, packaging and services delivered to the relevant component, assembly or packaging site, with linked upstream datasets |
| starting_condition_role | `supplier_gate_component_and_material_inputs` |
| product_classification_scope | Complete CPC 3.0 `47213` television cameras only; qualifying technical form does not override the classification exclusions |
| recursive_input_rule | A complete television camera used as an input shall be recorded as a purchased same-category product with its supplier dataset; it shall not be silently decomposed or used to create a second canonical identity. Components are recorded under their actual component identities. |
| upstream_dataset_requirement | Link each purchased material, component, energy carrier, transport service, packaging item and treatment service to the most representative available upstream dataset; disclose supplier, geography, technology and temporal mismatches and do not merge unlike camera forms into an undocumented average. |
| disclosure | Declare sites, geography, reference period, product model/configuration coverage, included/excluded accessories, BOM coverage, energy and waste allocation, data gaps, substitutions, cutoff decisions, downstream scenario exclusions, and all family extrapolation rules. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_and_subassembly_supply` | Component and subassembly supply | `required` | Always; may be represented by supplier-linked upstream datasets rather than on-site foreground manufacture | Establish complete sensor/optical, electronic, mechanical/thermal, power and accessory inputs | Mass of qualified inputs delivered for the represented camera output |
| `camera_assembly_configuration_test` | Camera assembly, configuration and functional test | `required` | Always | Assemble the declared configuration and verify acquisition, interface, recording/network and power functions | Mass of unpackaged functionally accepted camera output |
| `packaging_and_release` | Packaging and factory-gate release | `required` | Always | Add declared packaging/manuals/labels and reconcile finished output | `1 kg` net unpackaged television camera output |

### Process: Component and subassembly supply (`component_and_subassembly_supply`)

#### Inputs

##### Product flows

###### Sensor and optical subassemblies (`sensor_optical_subassemblies_input`)

Image sensors, sensor boards, optical blocks, lenses, mounts, filters and stabilization parts that cross the supplier boundary shall be recorded for the represented configuration.

- Selected flow: Representative sensor and optical subassembly product flows; no category-wide UUID is prescribed
- Flow property / unit: Mass / kg
- Amount rule: Collect supplier/BOM quantity and mass by subassembly; do not substitute a complete camera or a single-model estimate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Qualified inputs for the represented camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_component_bom`
- Sources: `ebu-tech-3335-2014`, `iec-62474-2018`

###### PCB and electronic subassemblies (`pcb_electronics_input`)

Main boards, image-processing boards, network/recording/storage electronics, connectors, cables, audio/control electronics and populated PCBs shall be disaggregated to the level supported by supplier records.

- Selected flow: Representative PCB and electronic subassembly product flows; no category-wide UUID is prescribed
- Flow property / unit: Mass / kg
- Amount rule: Collect BOM quantity and mass by board or electronic subassembly and identify local recording, network, audio, metadata, PTZ, analytics or control functions as applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Qualified inputs for the represented camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_component_bom`
- Sources: `iec-62474-2018`, `onvif-profile-g`

###### Enclosure, mechanical and thermal parts (`enclosure_mechanical_thermal_input`)

Housing, chassis, fasteners, seals, motors, mounts, heat sinks, fans, thermal interfaces and other mechanical or thermal-management parts shall reflect the actual form and protection design.

- Selected flow: Representative material and part product flows; no category-wide UUID is prescribed
- Flow property / unit: Mass / kg
- Amount rule: Collect BOM quantity and mass by material or part family; identify active versus passive cooling and PTZ mechanics where applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Qualified inputs for the represented camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_component_bom`
- Sources: `pep-ecopassport-pcr-ed4-2021`, `axis-network-camera-types`

###### Power parts and included accessories (`power_accessories_input`)

Power boards, AC/DC supplies, PoE hardware, batteries, cables, mounts, controllers and other accessories supplied with the declared product shall be recorded separately.

- Selected flow: Representative power-part and accessory product flows; no category-wide UUID is prescribed
- Flow property / unit: Mass / kg
- Amount rule: Collect BOM and packing-list quantity and mass; identify whether each item is integrated, included, optional or excluded from the sale unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Qualified inputs for the represented camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_component_bom`
- Sources: `pep-ecopassport-pcr-ed4-2021`, `sony-brc-ptz-ip-camera-family`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified component set (`qualified_component_set_output`)

The reconciled set of parts transferred to camera assembly shall preserve the represented configuration and supplier links.

- Selected flow: Qualified television-camera component set; authoring-time role only
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted component inputs transferred to assembly after separately recording supplier rejects or losses.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Component set for the represented camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_component_bom`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Waste flows

##### Elementary flows

### Process: Camera assembly, configuration and functional test (`camera_assembly_configuration_test`)

#### Inputs

##### Product flows

###### Qualified component set (`qualified_component_set_input`)

The complete qualified component set enters assembly without losing its BOM and supplier traceability.

- Selected flow: Qualified television-camera component set; linked from `qualified_component_set_output`
- Flow property / unit: Mass / kg
- Amount rule: Transfer the measured qualified component-set mass from the preceding process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Unpackaged accepted camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_assembly_inputs_outputs`
- Sources: `pep-ecopassport-pcr-ed4-2021`

###### Assembly and test energy (`assembly_test_energy_input`)

Electricity and other energy used for assembly, firmware/configuration, calibration, burn-in and functional image/interface tests shall be collected for the represented sites and period.

- Selected flow: Site electricity or other energy-carrier product flow matching the actual supply
- Flow property / unit: Energy / kWh
- Amount rule: Meter directly or reconcile from auditable site/submeter records; shared use follows Section 7.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Unpackaged accepted camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_assembly_energy`
- Sources: `pep-ecopassport-pcr-ed4-2021`

###### Assembly consumables (`assembly_consumables_input`)

Solder, adhesives, cleaning agents, protective materials and other process consumables shall be recorded where used.

- Selected flow: Representative consumable product flows matching purchasing records
- Flow property / unit: Mass / kg
- Amount rule: Collect issue, purchase-minus-stock-change, or process records and reconcile recovery and disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Unpackaged accepted camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_assembly_inputs_outputs`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Waste flows

#### Outputs

##### Product flows

###### Unpackaged tested camera (`unpackaged_tested_camera_output`)

This intermediate is a complete camera that has passed the declared functional checks for image acquisition, performance mode, interfaces, recording/network functions and power arrangement.

- Selected flow: Unpackaged tested television camera; authoring-time intermediate role
- Flow property / unit: Mass / kg
- Amount rule: Weigh or reconcile accepted unpackaged output and record configuration-specific acceptance counts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Unpackaged accepted camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_assembly_inputs_outputs`
- Sources: `ebu-tech-3335-2014`, `basler-camera-selection-guide-2023`, `onvif-profile-g`

##### Waste flows

###### Assembly scrap and rejected units (`assembly_scrap_rejects_output`)

Scrap, rejected boards/parts, failed cameras and removed components shall be separated from rework returned within the measurement period.

- Selected flow: Representative waste flows by material and treatment destination
- Flow property / unit: Mass / kg
- Amount rule: Collect waste transfer, reject and rework records; do not count internally reworked material as final waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Unpackaged accepted camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_waste_rework`
- Sources: `pep-ecopassport-pcr-ed4-2021`, `eu-weee-2012-19-eu`

##### Elementary flows

### Process: Packaging and factory-gate release (`packaging_and_release`)

#### Inputs

##### Product flows

###### Unpackaged tested camera (`unpackaged_tested_camera_input`)

The accepted camera enters packaging while the reference-product mass remains net of packaging and separately supplied accessories.

- Selected flow: Unpackaged tested television camera; linked from `unpackaged_tested_camera_output`
- Flow property / unit: Mass / kg
- Amount rule: Transfer measured accepted camera mass from assembly and test.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Finished television camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_packaging_release`
- Sources: `pep-ecopassport-pcr-ed4-2021`

###### Packaging, manuals and labels (`packaging_materials_input`)

Primary and secondary packaging, manuals, labels and protective inserts shall be recorded by material and mass.

- Selected flow: Representative packaging-material product flows matching actual purchasing records
- Flow property / unit: Mass / kg
- Amount rule: Collect packing specification, BOM or issue records and separately identify reusable or returnable packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Finished television camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_packaging_release`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished television camera (`finished_television_camera_output`)

The reference output is the exact TianGong Product flow for CPC 47213 and represents the net mass of functionally accepted, unpackaged cameras.

- Selected flow: Television cameras `ce2c0eb5-09e4-487a-a0f9-0c8e9844f999`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) / kg in Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: Set the quantitative reference to exactly `1 kg` net unpackaged camera mass; scale all other records to the same accepted output basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: `1 kg` net unpackaged finished television camera at factory gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_packaging_release`
- Sources: `unstats-cpc-3-0`, `pep-ecopassport-pcr-ed4-2021`

##### Waste flows

###### Packaging scrap (`packaging_scrap_output`)

Packaging cuttings, damaged packaging and other release-stage waste shall be reported separately from packaging delivered with the product.

- Selected flow: Representative waste flows by material and treatment destination
- Flow property / unit: Mass / kg
- Amount rule: Collect packaging-issue and waste transfer records and reconcile them with packaging inputs and shipped packs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Finished television camera output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `collect_packaging_release`
- Sources: `pep-ecopassport-pcr-ed4-2021`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-output or shared operations | First avoid allocation by submetering, separate work orders, time records, or process subdivision for the represented camera configuration. | `ghg-protocol-product-standard-2011`, `pep-ecopassport-pcr-ed4-2021` |
| `allocation_shared_operations` | Shared assembly, test, HVAC, compressed air and site services | When subdivision is not practical, use a documented physical driver that reflects causality, such as machine time, test time, measured energy, floor-time, or accepted mass; economic allocation is allowed only when physical relationships cannot reasonably represent the process and shall be disclosed. | `ghg-protocol-product-standard-2011`, `pep-ecopassport-pcr-ed4-2021` |
| `allocation_rework_scrap` | Rework, rejects and production scrap | Keep material returned to the same process inside the period out of final waste; allocate unrecovered losses to accepted output using measured configuration-specific records and report external treatment separately. | `pep-ecopassport-pcr-ed4-2021` |
| `allocation_recycling` | Recycled input and exported recyclable material | State the recycling allocation method, system boundary and any burden or credit explicitly; do not mix recycled-content and end-of-life credits without a consistent declared method. | `ghg-protocol-product-standard-2011`, `pep-ecopassport-pcr-ed4-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `collect_component_bom` | `component_and_subassembly_supply` | Purchased components, materials, power parts and accessories | Supplier declaration, approved BOM, purchase/receiving record, part mass | Part number; function; supplier; quantity; mass; material/substance declaration; sensor/optical/electronic/mechanical/thermal/power role; included-accessory status | Reconcile approved configuration BOM to received and accepted parts; retain supplier and material declarations | kg, item | Per configuration and reporting period | Same period as represented production, or documented supplier vintage | All represented suppliers and production sites | Quantity times verified part mass, with rejects and stock changes separated | Signed-off BOM; weighing record; supplier declaration; CPC/product identity record |
| `collect_assembly_inputs_outputs` | `camera_assembly_configuration_test` | Components, consumables, accepted cameras and rejected output | Work order, material issue, weighing, test and acceptance records | Configuration; input quantity/mass; consumables; output count/mass; sensor/optical setup; resolution; frame rate; interfaces; recording/network functions; power mode; test result | Reconcile work orders, material issues, accepted output and rejects by configuration | kg, item | Each batch or auditable reporting period | Representative production period | Every represented assembly/test site | Sum accepted records; preserve configuration strata before any family aggregation | Work-order reconciliation; test specification and result; calibrated scale record |
| `collect_assembly_energy` | `camera_assembly_configuration_test` | Assembly, configuration, calibration and test energy | Meter, submeter, equipment log or reconciled utility record | Meter IDs; start/end readings; energy carrier; process time; allocation driver; site; period | Direct metering preferred; otherwise reconcile auditable shared records under Section 7 | kWh | Meter interval or reporting period | Representative production period | Every represented assembly/test site | Sum metered use; allocate shared use only with disclosed causal driver | Meter calibration/status; utility invoice reconciliation; allocation worksheet |
| `collect_waste_rework` | `camera_assembly_configuration_test` | Scrap, rejects, rework, recovered parts and treatment | Reject log, rework order, waste transfer note, recycler record | Material/part; mass; cause; rework return; recovery; destination; treatment | Reconcile rejects to rework returns, recovered parts and exported wastes | kg | Each batch or reporting period | Representative production period | Every represented site | Count internal rework once and report only final exported waste | Mass-balance worksheet; signed waste transfer/treatment evidence |
| `collect_packaging_release` | `packaging_and_release` | Net camera output, packaging, manuals, labels and packaging waste | Packing specification, BOM, weighing, shipment and waste records | Net camera mass; packaging material/mass; manuals/labels; included accessories; packed count; reusable status; waste | Reconcile net product, packing specification, shipped units and packaging scrap | kg, item | Each configuration or reporting period | Representative production period | Every represented packaging/release site | Keep net camera, included accessories and packaging as separate quantities | Approved packing specification; shipment record; scale record; waste reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory records | normalized amount = period amount / accepted net camera mass in kg | Period input/output amount; accepted net unpackaged camera mass | Amount per `1 kg` reference product | `pep-ecopassport-pcr-ed4-2021` |
| `calc_component_mass` | BOM components and accessories | component mass = accepted quantity times verified unit mass; reconcile against measured camera mass, process losses and separately supplied accessories | Accepted quantity; verified part mass; net product mass; losses | Configuration-specific component mass | `iec-62474-2018`, `pep-ecopassport-pcr-ed4-2021` |
| `calc_packaging_mass` | Packaging delivered with product | packaging mass per reference = shipped packaging mass / shipped net camera mass; keep reusable packaging separate | Packaging issue/shipment mass; shipped net camera mass | Packaging kg per `1 kg` net camera | `pep-ecopassport-pcr-ed4-2021` |
| `calc_family_weighting` | Declared product-family datasets | family result = sum of configuration-specific normalized records times disclosed production or sales weights; use only configurations covered by the homogeneous-family rule | Configuration results; represented volumes; qualification matrix | Weighted family dataset and coverage disclosure | `pep-ecopassport-pcr-ed4-2021`, `ebu-tech-3335-2014` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_performance` | Product and reference flow | Demonstrate CPC 47213 identity and record use/form, sensor/optics, resolution/frame rate, recording/network, power and accessory qualifiers for every represented configuration. | Product specification, classification record, test specification and accepted configuration list |
| `dq_bom_completeness` | Materials and components | Reconcile BOM, net product mass, accessories and production losses; justify every excluded item and assess whether it can conceal a significant impact. | Approved BOM, measured masses, exclusion register and mass-balance check |
| `dq_primary_foreground` | Assembly, test, packaging and waste | Use site-specific primary records for represented sites and period; disclose proxy data and temporal, geographic or technology mismatches. | Meter/work-order/test/packing/waste records and documented data-quality assessment |
| `dq_supplier_materials` | Purchased electronics, optics, batteries, housings and cables | Retain supplier and material/substance declarations at the greatest available specificity, including applicable RoHS/WEEE-relevant information. | Supplier declarations, IEC 62474-compatible material declarations, compliance evidence |
| `dq_family_coverage` | Multi-model datasets | Preserve model/configuration strata, weighting data and qualification matrix; report the share not covered by primary records. | Family rule, configuration list, production/sales weights and coverage calculation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_exact_identity` | Reference product | Confirm the selected flow UUID, state code `100`, Product flow type, Mass reference property, Units of mass group, kg reference unit, name/body and CPC 47213 semantics; reject neighboring or component flows. | `unstats-cpc-3-0` |
| `validate_required_qualifiers` | Dataset metadata and reference flow | Fail completeness when intended use/form, sensor/optics, resolution/frame rate, recording/network functions, power/accessories, enclosure/PCB/thermal construction or packaging declaration is missing. | `ebu-tech-3335-2014`, `onvif-profile-g`, `basler-camera-selection-guide-2023`, `sony-brc-ptz-ip-camera-family` |
| `validate_exclusions` | Product scope | Reject digital still cameras, video camera recorders/camcorders, mobile-phone camera modules, loose components, standalone recorders and products assigned to another CPC leaf. | `unstats-cpc-3-0` |
| `validate_reference_mass` | Quantitative reference | Confirm exactly `1 kg` net unpackaged accepted camera mass and separate packaging and separately supplied accessories. | `pep-ecopassport-pcr-ed4-2021` |
| `validate_process_coverage` | Foreground process map | Confirm component/subassembly supply, assembly/configuration/test, production losses, packaging and factory-gate release are represented or explicitly linked and justified. | `pep-ecopassport-pcr-ed4-2021` |
| `validate_mass_reconciliation` | BOM, outputs and wastes | Reconcile component/material inputs with net product, included accessories, packaging, rejects, rework, scrap and stock changes without double counting. | `pep-ecopassport-pcr-ed4-2021` |
| `validate_allocation_disclosure` | Shared operations and recycling | Confirm allocation was first avoided, each remaining driver is causal and disclosed, and recycling burdens/credits use one consistent stated method. | `ghg-protocol-product-standard-2011`, `pep-ecopassport-pcr-ed4-2021` |
| `validate_family_extrapolation` | Multi-model or portfolio result | Reject category-wide or family-wide results derived from one narrow model without qualification matrix, configuration-specific data and documented weighting/extrapolation rule. | `pep-ecopassport-pcr-ed4-2021`, `ebu-tech-3335-2014` |
| `validate_data_quality` | Foreground and supplier data | Confirm reporting period/site coverage, measurement evidence, supplier specificity, proxy disclosures, exclusion register and material/substance evidence are present; otherwise report validation as incomplete. | `iec-62474-2018`, `eu-weee-2012-19-eu`, `eu-rohs-2011-65-eu` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for a declared CPC 47213 television-camera configuration or a documented homogeneous product family |
| downstream_use | Construction of TianGong LCA `process` and `lifecyclemodel` projections and separately declared use or end-of-life scenarios |
| allowed_use | Configuration-specific or qualified-family cradle-to-factory-gate modelling with linked upstream datasets and disclosed allocation/data quality |
| excluded_use | Automatic representation of digital cameras, camcorders/recorders, mobile camera modules, standalone parts, another CPC leaf, or the entire television-camera category from one model |
| required_metadata | Reference flow UUID and unit identities; CPC code; application/form; sensor/optics; resolution/frame rate; recording/network; power/accessories; enclosure/PCB/thermal configuration; packaging; sites/geography; period; route; market state; allocation and family rule |
| required_quality_disclosure | Primary-data share and coverage; supplier/BOM completeness; exclusions; proxies and mismatches; measurement and mass-balance evidence; uncertainty or limitation; family weighting; applicable material/substance declarations |
| update_trigger | Material change in classification, reference flow identity, camera configuration, sensor/optics, performance mode, recording/network or power architecture, BOM/materials, production site/route, packaging, allocation method, supplier data, regulations, or represented family |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0` | `official_guidance` | [United Nations Statistics Division, Central Product Classification (CPC), Version 3.0](https://unstats.un.org/unsd/classifications/Econ/CPC), accessed 2026-08-09 | CPC 47213 category identity and exclusion guard |
| `pep-ecopassport-pcr-ed4-2021` | `standard` | [PEP ecopassport, Product Category Rules for Electrical, Electronic and HVAC-R Products, Edition 4](https://register.pep-ecopassport.org/documents/public/PCR-4-EN), 2021, accessed 2026-08-09 | Production boundary, component and packaging completeness, foreground records, exclusion significance, allocation and product-family extrapolation |
| `ebu-tech-3335-2014` | `standard` | [European Broadcasting Union, EBU Tech 3335: Methods of measuring the imaging performance of television cameras](https://tech.ebu.ch/docs/tech/tech3335.pdf), 2014, accessed 2026-08-09 | Camera sensor/optical architecture, resolution/frame-rate and use-specific performance qualifiers |
| `iec-62474-2018` | `standard` | [IEC 62474:2018, Material declaration for products of and for the electrotechnical industry](https://webstore.iec.ch/en/publication/29857), accessed 2026-08-09 | BOM material/substance declarations and supplier evidence |
| `eu-weee-2012-19-eu` | `standard` | [Directive 2012/19/EU on waste electrical and electronic equipment](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012L0019), accessed 2026-08-09 | Component/material information and downstream battery, PCB, cable, display and plastics disclosure |
| `eu-rohs-2011-65-eu` | `standard` | [Directive 2011/65/EU on restriction of hazardous substances in electrical and electronic equipment](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32011L0065), accessed 2026-08-09 | Homogeneous-material, cable, spare-part and supplier compliance evidence |
| `ghg-protocol-product-standard-2011` | `method_factor` | [WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf), 2011, accessed 2026-08-09 | Life-cycle boundary, primary-data quality and allocation hierarchy |
| `onvif-profile-g` | `standard` | [ONVIF, Profile G for edge storage and retrieval](https://www.onvif.org/profiles/profile-g/), accessed 2026-08-09 | Network-camera recording, storage, audio, metadata and control qualifiers |
| `axis-network-camera-types` | `handbook` | [Axis Communications Academy, Get to know network camera product types](https://www.axis.com/en-id/learning/academy/elearning/get-to-know-axis-network-camera-product-types), accessed 2026-08-09 | Security-camera form variants; applied only after CPC 47213 identity is confirmed |
| `basler-camera-selection-guide-2023` | `handbook` | [Basler, Vision System Camera Selection Guide](https://www.baslerweb.com/en-us/learning/camera-selection/), accessed 2026-08-09 | Industrial-vision form, sensor, shutter, resolution and frame-rate qualifiers; no category default values |
| `sony-brc-ptz-ip-camera-family` | `handbook` | [Sony Professional, BRC PTZ IP camera family](https://pro.sony/en_CA/products/ptz-network-cameras/brc-ptz-ip-cameras), accessed 2026-08-09 | Broadcast/conference PTZ, sensor/optical, IP, control and power variability; not used for category-wide quantitative extrapolation |
