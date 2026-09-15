---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.calandering-or-other-rolling-machines-except-for-metals-or-glass
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Calandering or other rolling machines, except for metals or glass

## 1. Scope and Applicability

This PCR covers the manufacture and factory preparation of complete calendering, calandering, or other rolling machines that transform or finish paper, textiles, leather, rubber, plastics, or other non-metallic and non-glass sheet or web materials by passage between rollers. It covers mechanically complete machines, including their drive, roll assembly, controls, initial lubricant fill, factory acceptance testing, and delivery packaging.

Machines whose intended processing function is rolling metals or glass are excluded. Stand-alone cylinders, rolls, spare parts, foundations, installation at the customer site, distribution after the factory gate, use-stage electricity and consumables, maintenance, refurbishment, and end-of-life treatment are outside the declared cradle-to-factory-gate result. If a study extends the boundary, those stages shall be reported separately.

The category has a material methodology need because the product is a configurable capital good whose frame-supply route, roll construction, drive rating, controls, and factory testing materially affect its bill of materials and manufacturing energy. These variables are handled as declared qualifiers and mutually exclusive route conditions, not as separate canonical PCR identities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.calandering-or-other-rolling-machines-except-for-metals-or-glass |
| classification_refs | CPC 3.0: 43933 (exact classification context) |
| covered_products | Complete calendering, calandering, embossing, smoothing, laminating, compacting, or other roller-processing machines for non-metallic and non-glass sheet or web materials |
| excluded_products | Metal-rolling machines; glass-rolling machines; stand-alone cylinders or rolls; parts and accessories supplied separately; customer-site installation; machines whose principal function belongs to another specific machinery category |
| representative_product | Electrically driven multi-roll industrial calender with a fabricated frame, calender roll assembly, drive motor, electronic control unit, initial lubricant fill, factory acceptance test, and transport packaging |
| production_route | Purchased-component assembly with either in-house steel-plate fabrication or a purchased coated machine structure; mechanical/electrical integration; factory testing; packaging |
| market_state | New, complete, factory-tested, ready-for-delivery machine at the manufacturer's factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and factory provision of a complete roller-processing machine for non-metallic and non-glass sheet or web materials |
| How much | 1,000 kg net machine mass, excluding delivery packaging |
| How well | Meets the declared purchase specification and factory acceptance criteria for processed material, working width, roll count and material, roll diameter and finish, line force, speed, temperature-control capability, installed power, control architecture, guarding, and accessories |
| How long or cycle | One factory production and delivery-preparation cycle; use-stage service life is not included |
| reference_flow_link | `reference_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net machine mass |
| Reference product flow | Calendering or other rolling machine, except for metals or glass (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | processed material family; machine configuration and trade name; factory location and reporting period; net machine mass; working width; roll count, material, diameter and surface finish; line force; speed range; roll-temperature-control capability; installed power; motor rating and efficiency class; control architecture and voltage; frame-supply route; included accessories; packaging mass and material; factory acceptance test boundary |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, reference-flow comments, the product description, or an equivalent data-package field. The 1,000 kg reference amount is a normalization identity; the actual machine mass and number of machines represented shall also be disclosed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference machine and all mass-normalized material and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net machine mass after factory acceptance and before delivery packaging; normalize all amounts by multiplying the batch amount by 1,000 kg divided by total accepted net machine mass. |
| `packaging_separation` | Delivery packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure packaging separately from net machine mass; include packaging production in the cradle-to-gate inventory but do not add it to the reference amount. |
| `electricity_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh in source records and convert to MJ with 1 kWh = 3.6 MJ only in the normalized inventory; disclose grid geography, voltage level, supplier product, and treatment of losses. |
| `route_exclusivity` | Steel plate and purchased coated machine structure | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Declare whether the reporting facility fabricates the principal frame from steel plate or receives a coated machine structure; do not count both routes for the same frame mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_factory_gate` | Product system | Include upstream production and inbound transport of all reported materials, components, electricity, lubricants, and packaging; include in-house fabrication when performed, assembly, electrical integration, initial filling, factory acceptance testing, preparation, and management of manufacturing waste through the selected treatment input. Exclude customer-site installation, use, maintenance, and end of life unless separately reported. | `epd-international-machine-tools-pcr-2012-02-v4` |
| `boundary_route_disclosure` | Frame supply | Apply either the in-house steel-plate fabrication route or the purchased coated-structure route to the same principal frame. Disclose mixed sourcing and allocate only the measured mass share to each route. | `epd-international-machine-tools-pcr-2012-02-v4` |
| `boundary_capital_goods` | Manufacturing equipment and buildings | Exclude ordinary production capital goods and factory infrastructure from the foreground inventory unless the study goal explicitly includes them; any inclusion shall be disclosed separately and shall not change the product reference flow. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components at the point they enter the manufacturer-controlled supply chain or reporting facility |
| starting_condition_role | Upstream product inputs with supplier-specific or representative production datasets, followed by manufacturer-controlled core processes |
| product_classification_scope | Complete machines within the semantic boundary above; CPC 3.0 code 43933 is classification context and does not define a separate identity by itself |
| recursive_input_rule | A complete same-category machine used only as manufacturing equipment is capital equipment and is not recursively inventoried as a product input; a same-category machine purchased for resale shall be disclosed and excluded from the manufactured output quantity |
| upstream_dataset_requirement | Use supplier-specific datasets for principal structures, roll assemblies, motors, controls, lubricants, and packaging when available; otherwise use geographically and technologically representative background datasets and disclose substitutions |
| disclosure | Report frame route, component supplier geography, recycled-content claims, electricity product and geography, allocation basis, excluded accessories, packaging composition, and all departures from this boundary |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `frame_fabrication` | Principal frame fabrication | conditional | Include only when steel plate is cut, machined, formed, welded, or finished under the reporting manufacturer's control; exclude the purchased coated-structure mass represented in `machine_assembly_test`. | Foreground component fabrication | Net mass of accepted fabricated frame parts attributable to the reference machine |
| `machine_assembly_test` | Mechanical/electrical assembly and factory acceptance testing | required | Always include for a complete manufactured machine. | Foreground assembly, filling, integration, and testing | 1,000 kg accepted net machine mass |
| `delivery_packaging` | Delivery packaging preparation | required | Include packaging applied before the product leaves the factory gate. | Foreground delivery preparation | Packaging applied to 1,000 kg accepted net machine mass |

### Process: Principal frame fabrication (`frame_fabrication`)

#### Inputs

##### Product flows

###### Alloy steel plate for an in-house fabricated frame (`steel_plate`)

Record alloy steel plate crossing into manufacturer-controlled frame fabrication. Apply only to the in-house fabrication route and retain grade, thickness, surface state, recycled-content claim, supplier, and origin.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: measured net steel-plate receipts issued to accepted frame work orders, less documented returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net machine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Electricity for frame fabrication (`fabrication_electricity`)

Record purchased electrical energy consumed by cutting, forming, machining, welding, finishing, extraction, and directly supporting frame-fabrication equipment when the process is in scope.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or allocated meter difference for accepted frame work orders
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net machine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated low-alloy steel fabrication scrap (`low_alloy_steel_scrap`)

Record low-alloy steel offcuts and chips leaving the reporting facility as waste. Keep alloy grade, contamination state, mass, and treatment destination with the foreground record.

- Selected flow: Low-alloy steel scrap `afedcccd-b9f3-4941-8ba4-d3135b8abb67`
- Flow property / unit: Mass / kg
- Amount rule: measured outbound mass attributable to accepted frame work orders
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net machine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabrication_scrap`
- Sources:

##### Elementary flows

### Process: Mechanical/electrical assembly and factory acceptance testing (`machine_assembly_test`)

#### Inputs

##### Product flows

###### Purchased coated principal machine structure (`purchased_coated_machine_structure`)

Record a purchased coated and painted principal structure only for the externally fabricated frame route. The supplier boundary shall include fabrication and coating; do not combine this amount with the same frame mass under `steel_plate`.

- Selected flow: Coated and painted machine structures and components `b9bcd4e3-4971-448a-9077-1bc397c7c591`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted supplier-delivery mass installed in the reference machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net machine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Calender roll assembly (`calender_roll_assembly`)

Record the complete installed roll assembly as one purchased or internally transferred component. Its roll count, shell and core materials, surface treatment, dimensions, mass, supplier, and included bearings shall be declared; the Tiangong UUID remains unresolved.

- Selected flow: Calender roll assembly (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured accepted installed mass from the machine bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net machine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Principal electric drive motor (`electric_motor`)

Record the installed principal industrial AC drive motor. Declare rated output, voltage, efficiency class, mass, supplier, and whether auxiliary motors are included in this row.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted installed mass from the machine bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net machine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Electronic machine control unit (`electronic_control_unit`)

Record the installed electronic control unit as supplied. Declare control architecture, rated voltage, mass, supplier, and the boundary between the unit and separately inventoried drives or motors.

- Selected flow: Electronic control unit `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted installed mass from the machine bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net machine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Initial machinery lubricating-oil fill (`lubricating_oil`)

Record finished lubricating oil placed in the delivered machine before acceptance. Declare lubricant grade, viscosity, supplier, density used for any volume-to-mass conversion, and whether test oil remains in the product.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: measured lubricant mass retained in the accepted machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net machine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources:

###### Electricity for assembly and factory acceptance testing (`assembly_test_electricity`)

Record purchased electricity consumed by assembly tools, handling, controls commissioning, no-load and loaded acceptance tests, and directly supporting equipment. Exclude customer use-stage electricity.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or allocated meter difference for accepted machine work orders and tests
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net machine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Delivery packaging preparation (`delivery_packaging`)

#### Inputs

##### Product flows

###### Softwood lumber used in the delivery skid or crate (`softwood_packaging_lumber`)

Record only sawn softwood incorporated into the delivery skid, blocking, or crate. Moisture content, treatment, wood species group, mass, and reusable-packaging status shall be declared; the Tiangong UUID remains unresolved.

- Selected flow: Sawn softwood packaging lumber (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured dry-basis-equivalent mass applied to accepted machines
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net machine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_bom`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Ready-for-delivery calendering or rolling machine (`reference_machine`)

Record the accepted net mass of the complete machine after factory testing and before packaging mass is added. The machine product-flow UUID remains unresolved; do not substitute a glass product or a metal/glass rolling machine.

- Selected flow: Calendering or other rolling machine, except for metals or glass (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output of 1,000 kg accepted net machine mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Collection protocol: `cp_product_mass_acceptance`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Shared manufacturing processes | Avoid allocation by submetering, work-order material issue, direct labour or machine-time records, and separate waste weighing for the reference machine. | `epd-international-machine-tools-pcr-2012-02-v4` |
| `allocation_physical` | Residual shared burdens | When subdivision is not practicable, allocate fabrication electricity by measured machine-hours or equipment energy drivers, coating burdens by coated area, assembly burdens by recorded labour or station time, and handling burdens by handled mass; disclose the selected causal relationship. | `epd-international-machine-tools-pcr-2012-02-v4` |
| `allocation_economic_fallback` | Non-causal residual burdens | Use economic allocation only when no defensible physical relationship exists; report the value basis, reference period, affected share, and a sensitivity result. | `epd-international-machine-tools-pcr-2012-02-v4` |
| `waste_burden` | Manufacturing waste | Assign collection and treatment burdens to the product system until the selected waste flow reaches its documented end-of-waste point; do not credit recycling without a separately declared method. | `epd-international-machine-tools-pcr-2012-02-v4` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `frame_fabrication`; `machine_assembly_test` | Installed material and component inputs | ERP receipt, approved bill of materials, issue/return record, supplier mass declaration, and acceptance record | work_order; part_id; supplier; material_or_component; grade_or_model; gross_mass; returned_mass; installed_mass; geography; acceptance_status | Reconcile accepted BOM quantities to weighed or supplier-declared masses and subtract documented returns | kg | Each accepted machine or homogeneous production batch | Complete reporting period, normally at least 12 consecutive months or all units in a shorter disclosed campaign | All manufacturer-controlled sites producing the declared machines | Sum accepted installed masses by row and divide by accepted net machine mass, then multiply by 1,000 kg | Approved BOM revision, receiving record, scale calibration or supplier declaration, and work-order reconciliation |
| `cp_factory_electricity` | `frame_fabrication`; `machine_assembly_test` | Purchased electricity | Revenue meter, submeter, test log, and production work-order record | meter_id; opening_reading; closing_reading; test_kWh; operating_hours; work_order; accepted_mass; grid_geography; voltage; supplier_product; losses_boundary | Prefer dedicated submeters; otherwise subtract excluded loads and allocate the remaining meter difference using documented equipment power-hours | kWh | Per work order or test, aggregated monthly | Same period as accepted production; disclose shutdowns and abnormal tests | All reporting-facility meters serving included processes | Convert kWh to MJ and normalize to 1,000 kg accepted net machine mass under `calc_allocate_shared_electricity` | Meter calibration or utility invoice, allocation workbook, test record, and meter-boundary diagram |
| `cp_fabrication_scrap` | `frame_fabrication` | Low-alloy steel scrap output | Waste scale ticket, scrap-bin log, material issue record, and treatment receipt | alloy_grade; work_order; gross_bin_mass; tare_mass; contamination; destination; treatment; accepted_frame_mass | Weigh segregated low-alloy scrap and reconcile it to steel issued and accepted frame mass | kg | Each shipment with work-order attribution; aggregate monthly | Same period as in-house frame fabrication | Reporting-facility fabrication area and outbound waste boundary | Sum attributable net scrap mass and normalize to 1,000 kg accepted net machine mass | Calibrated scale ticket, segregation inspection, mass-balance reconciliation, and treatment receipt |
| `cp_packaging_bom` | `delivery_packaging` | Softwood packaging input | Packaging BOM, purchase record, moisture measurement, and packing checklist | work_order; wood_type; treatment; wet_mass; moisture_content; dry_basis_mass; reusable_status; accepted_machine_mass | Weigh lumber or reconcile piece dimensions and density, then convert to the declared mass basis | kg | Each packed machine | Complete reporting period | Final packing area | Sum packaging lumber applied to accepted machines and normalize to 1,000 kg accepted net machine mass | Packing checklist, scale or dimensional record, moisture record, and purchase specification |
| `cp_product_mass_acceptance` | `delivery_packaging` | Reference machine output | Final acceptance certificate, calibrated scale or reconciled engineering mass statement, and serial-number register | serial_number; configuration; net_machine_mass; packaging_mass; acceptance_date; accepted_status | Determine net accepted machine mass separately from packaging and rejected or reworked units | kg | Each accepted machine | Complete reporting period | Factory-gate output boundary | Sum accepted net machine mass; all reported flows are normalized to exactly 1,000 kg | Acceptance certificate, serial-number register, weighing evidence, and packaging subtraction record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | All inventory rows | normalized amount = attributable batch amount × 1,000 kg / accepted net machine mass represented by the batch | attributable row amount; accepted net machine mass | Row amount per 1,000 kg reference machine |  |
| `calc_allocate_shared_electricity` | `fabrication_electricity`; `assembly_test_electricity` | included kWh = submetered kWh, or facility meter difference minus documented excluded loads multiplied by the causal equipment power-hour share; normalized MJ = included kWh × 3.6 × 1,000 / accepted net machine mass | meter readings; excluded loads; equipment power and time; accepted net machine mass | MJ per 1,000 kg reference machine |  |
| `calc_scrap_reconciliation` | `low_alloy_steel_scrap` | attributable scrap = weighed segregated low-alloy scrap reconciled to issued steel minus returned stock and accepted incorporated steel | issued steel; returned stock; accepted incorporated steel; weighed scrap | kg low-alloy steel scrap per 1,000 kg reference machine |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference machine and components | Match serial number, configuration, BOM revision, supplier model, and all required qualifiers to the accepted product; do not mix metal/glass rolling machinery or separate parts into the output. | Acceptance certificate, serial register, approved BOM, purchase specification, and supplier records |
| `dq_measurement` | Mass and electricity | Use calibrated instruments or auditable supplier declarations; retain raw units, conversion factors, meter boundaries, tare corrections, and packaging subtraction. | Calibration certificates, invoices, scale tickets, meter diagrams, and calculation workbook |
| `dq_temporal` | Foreground activity data | Use a period representative of current production, normally at least 12 consecutive months; a shorter campaign shall include all accepted units and disclose why it is representative. | Dated production register, meter series, and completeness check |
| `dq_completeness` | Product mass and included processes | Reconcile BOM mass, installed components, initial lubricant, packaging, fabrication scrap, and accepted output; explain every excluded material or activity and quantify its known mass share. | Mass-balance worksheet, exclusion register, and reviewer sign-off |
| `dq_background` | Upstream datasets | Select datasets consistent with supplier geography, production technology, alloy or component state, electricity product, and reference year; disclose proxies and their contribution. | Dataset mapping table and representativeness assessment |
| `dq_primary_data` | Core processes | Use site-specific data for manufacturer-controlled fabrication, assembly, testing, packaging, and waste management. | Work orders, BOM records, meter data, packaging records, and waste tickets |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Product identity | Reject a data package that lacks the processed-material family, machine configuration, net mass, roll specification, installed power, control architecture, frame route, factory location, reporting period, and acceptance boundary. | `un-cpc-3-0-structure-2025` |
| `validate_reference` | Reference flow | Require exactly 1,000 kg accepted net machine mass after normalization, with packaging mass excluded from the reference amount and reported separately. |  |
| `validate_route` | Frame supply | Reject double counting of the same principal frame mass under both `steel_plate` and `purchased_coated_machine_structure`; mixed sourcing requires measured mass shares. |  |
| `validate_energy` | Electricity | Require raw kWh, the 3.6 MJ/kWh conversion, grid geography, voltage, supplier product, allocation basis, and treatment of losses; exclude use-stage electricity. | `epd-international-machine-tools-pcr-2012-02-v4` |
| `validate_mass_balance` | Materials and waste | Reconcile accepted product mass with installed BOM mass and explain differences, including removed machining mass, consumables, packaging, waste, returned stock, and measurement uncertainty. |  |
| `validate_uuid_gaps` | Unresolved identities | Keep the product-flow UUID, calender-roll-assembly UUID, and softwood-packaging-lumber UUID blank until an exact public state-100 identity is directly verified; never substitute a glass product, generic instrument, hardwood, or fibreboard candidate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground cradle-to-factory-gate production dataset for a declared complete machine configuration |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` for systems purchasing the declared machine when the user confirms configuration, geography, time, and boundary compatibility |
| allowed_use | Product-footprint modelling of the machine's manufacture; capital-goods scenarios; supply-chain screening; comparison of production configurations with equivalent functional and boundary qualifiers |
| excluded_use | Direct comparison of metal/glass rolling machinery; stand-alone rolls or parts; unqualified machine variants; use-stage performance comparison; customer-site installation; maintenance; end-of-life claims; automatic inference of service life or productivity |
| required_metadata | PCR id and version; machine trade name and configuration; all required qualifiers; factory geography; reporting period; accepted output mass and unit count; frame route; supplier dataset mapping; electricity attributes; packaging; allocation method; unresolved UUID status |
| required_quality_disclosure | Foreground coverage; meter and mass-balance completeness; supplier-specific versus generic data shares; proxy datasets; exclusions; allocation shares; uncertainty; validation findings; departures from this PCR |
| update_trigger | Change in machine configuration, roll construction, principal material or supplier route, factory process, electricity supply, control or drive architecture, packaging, allocation method, reporting period, or resolution of any currently blank UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Official CPC 43933 title and classification context |
| `epd-international-machine-tools-pcr-2012-02-v4` | Standard (`standard`) | EPD International, PCR 2012:02, Machine-tools for drilling, boring or milling metals and composite materials, version 4.0.0, 27 February 2024, https://api.prod.environdec.com/api/v2/EPDLibrary/Files/cfd6c3a3-b2ab-4705-5616-08dc2e3a662b/Data (retrieved 2026-09-06) | Analogous industrial-machinery system decomposition, core-process coverage, packaging inclusion, allocation hierarchy, foreground data quality, and electricity disclosure |
| `china-mof-2026-tariff-adjustment` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, 2026 Tariff Adjustment Plan, https://m.mof.gov.cn/czxw/202603/P020260326610286964491.pdf (retrieved 2026-09-06) | Professional Chinese terminology for tariff item 84201000 |
