---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.electronic-calculators-and-pocket-size-data-recording-reproducing-and-displaying-machin-ab87fa21
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Electronic calculators and pocket-size data recording, reproducing and displaying machines with calculating functions

## 1. Scope and Applicability

This PCR applies to factory-gate production of electronic calculators and pocket-size machines whose defining function is recording, reproducing or displaying data together with calculating functions. It covers assembly of purchased electronic and mechanical components, installation of the declared power-source configuration, functional testing, and release of unpackaged conforming product.

The PCR excludes cash registers, accounting machines, point-of-sale terminals, automated teller machines, general-purpose automatic data-processing machines, stand-alone storage units, component-only products, carrying cases, packaging, distribution, use, repair and end-of-life. Upstream manufacture of purchased components and electricity remains within the life-cycle model through linked upstream datasets, but outside foreground factory operations. The classification identity is supported by `un-cpc-3-0-structure-2025`; the electronics value-chain decomposition is supported by `unep-eco-i-electronics-2022`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.electronic-calculators-and-pocket-size-data-recording-reproducing-and-displaying-machin-ab87fa21 |
| classification_refs | CPC 3.0: 45130 (exact) |
| covered_products | Electronic desktop, handheld and pocket calculators; pocket-size data recording, reproducing and displaying machines with calculating functions |
| excluded_products | Accounting machines, cash registers, postage-franking machines, ticket-issuing machines, point-of-sale terminals, ATMs, general-purpose computers, stand-alone storage units, parts sold separately, covers and carrying cases |
| representative_product | A non-printing electronic calculator with a populated printed-circuit-board assembly, LCD module, keypad, enclosure and declared battery and/or photovoltaic power configuration |
| production_route | Assembly and functional testing from purchased components at the calculator manufacturing site |
| market_state | Conforming, unpackaged finished calculator at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a conforming electronic calculator or covered pocket-size calculating machine |
| How much | 1 kg of net conforming unpackaged finished product |
| How well | Complete declared model configuration; passed recorded display, keypad and calculating-function tests |
| How long or cycle | One reporting-period production output; no use-stage service life is represented |
| reference_flow_link | `finished_calculator_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Electronic calculators and pocket-size data recording, reproducing and displaying machines with calculating functions `1ac055b2-f5e3-46e4-9d11-31402df2ed75` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | calculator model or model family; calculation-function class; display type; power-source configuration; battery chemistry and form when applicable; photovoltaic-cell technology when applicable; net product mass; unpackaged factory-gate state; manufacturing site and geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-based component rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass excluding packaging. Calibrate scales and retain tare, sample and aggregation records. |
| `electricity_energy` | assembly electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter unit in raw records and convert to MJ with a validated unit conversion in the data system; do not mix purchased electricity with on-site fuel or heat. |
| `item_count_normalization` | photovoltaic-cell input | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count installed cells by applicable model, including cells in assembled rejects leaving the process, and normalize by net conforming output mass. |
| `production_normalization` | all foreground rows | row-specific property | row-specific unit | Normalize reporting-period inputs and outputs by net conforming unpackaged product mass from the same site and period; report data gaps and inventory reconciliation differences. |

## 5. System Boundary

The factory-gate boundary and exclusions below are declared PCR modelling choices. IEC 63366 is cited only for its public scope description; no compliance with its unexamined full requirements is asserted. The electronics manual supports generic value-chain decomposition, not calculator-specific component quantities or technologies.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased populated circuit-board assemblies, display modules, keypads, enclosures and applicable power components received at the calculator assembly site |
| starting_condition_role | Foreground factory-entry condition; upstream component manufacture is represented by linked upstream product datasets |
| product_classification_scope | Electronic calculators and pocket-size data recording, reproducing and displaying machines with calculating functions; excludes transaction machines and general-purpose computers |
| recursive_input_rule | If a complete calculator or same-category subassembly is purchased, record it once as a disclosed upstream input and do not recursively expand it again inside the same foreground system |
| upstream_dataset_requirement | Each purchased component and electricity flow requires a geographically and technologically representative upstream dataset or a disclosed proxy |
| disclosure | Declare model family, power configuration, component supply boundary, site geography, reporting period, test operations, excluded packaging and any proxy datasets |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | cradle-to-factory-gate model | Include linked upstream datasets for purchased components and electricity plus foreground component installation, final assembly, functional testing, conforming output and rejects. | `unep-eco-i-electronics-2022` |
| `boundary_rule_2` | excluded stages | Exclude packaging, distribution, use, repair and end-of-life from this factory-gate foreground dataset and state these exclusions in dataset metadata. |  |
| `boundary_rule_3` | conditional power routes | Include button-cell installation only for models receiving a button cell and photovoltaic-cell installation only for models receiving a photovoltaic cell; dual-power products include both. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `calculator_final_assembly` | Calculator component and final assembly | required | Always included for foreground calculator production | Foreground assembly and functional testing | Per 1 kg net conforming unpackaged finished product |
| `button_cell_installation` | Button-cell battery installation | conditional | Include only when the declared calculator model receives a primary button-cell battery | Conditional power-component installation | Per 1 kg net conforming unpackaged finished product |
| `photovoltaic_cell_installation` | Photovoltaic-cell installation | conditional | Include only when the declared calculator model receives a photovoltaic cell | Conditional power-component installation | Per 1 kg net conforming unpackaged finished product |

### Process: Calculator component and final assembly (`calculator_final_assembly`)

#### Inputs

##### Product flows

###### Populated printed-circuit-board assembly (`pcba_input`)

Record the mass of purchased populated board assemblies consumed in released and rejected calculator production.

- Selected flow: Electronic components and PCB assemblies `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass issued to the assembly line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming unpackaged finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `unep-eco-i-electronics-2022`

###### Assembled liquid-crystal display module (`lcd_module_input`)

Record the mass of calculator LCD modules consumed in released and rejected production.

- Selected flow: LCD module, assembled `daedcb7b-760e-4acf-9a1c-3adb472c4eba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or bill-of-materials mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming unpackaged finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `unep-eco-i-electronics-2022`

###### Moulded silicone-rubber calculator keypad (`silicone_keypad_input`)

Record only the finished keypad component crossing the assembly boundary; do not combine it with other rubber parts.

- Selected flow: Moulded silicone-rubber calculator keypad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or bill-of-materials mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming unpackaged finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `unep-eco-i-electronics-2022`

###### Injection-moulded ABS calculator enclosure (`abs_enclosure_input`)

Record the finished ABS enclosure component received for assembly, not ABS resin used at an upstream moulding supplier.

- Selected flow: Injection-moulded ABS calculator enclosure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or bill-of-materials mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming unpackaged finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `unep-eco-i-electronics-2022`

###### Purchased electricity for assembly and testing (`assembly_electricity_input`)

Record purchased electricity metered or allocated to component installation, final assembly and functional testing.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered electricity or documented allocation from an assembly-area meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming unpackaged finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming unpackaged finished calculator (`finished_calculator_product`)

Record net conforming product mass released after functional testing, excluding packaging.

- Selected flow: Electronic calculators and pocket-size data recording, reproducing and displaying machines with calculating functions `1ac055b2-f5e3-46e4-9d11-31402df2ed75`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Rejected finished electronic calculator (`rejected_calculator_waste`)

Record rejected assembled calculators when they leave the foreground process as waste; units returned for rework within the reporting period are not waste.

- Selected flow: Rejected finished electronic calculator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass of rejected assembled units sent to waste treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming unpackaged finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_waste_mass`
- Sources:

##### Elementary flows

### Process: Button-cell battery installation (`button_cell_installation`)

#### Inputs

##### Product flows

###### Primary button-cell battery (`button_cell_battery_input`)

Record this row only for calculator models receiving a new primary button-cell battery; otherwise the conditional process is absent.

- Selected flow: Primary button-cell battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured installed battery mass including the cell casing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming unpackaged finished product for applicable models
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom_mass`
- Sources: `unep-eco-i-electronics-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Photovoltaic-cell installation (`photovoltaic_cell_installation`)

#### Inputs

##### Product flows

###### Monocrystalline-silicon photovoltaic cell (`photovoltaic_cell_input`)

Record this row only for calculator models receiving a monocrystalline-silicon photovoltaic cell; otherwise the conditional process is absent.

- Selected flow: Mono-Si PV cell `c447c8a4-7c92-4dc9-adb6-12e3d7af67b8`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: counted cells installed in released and rejected production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming unpackaged finished product for applicable models
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power_component_count`
- Sources: `unep-eco-i-electronics-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared assembly equipment and site utilities | Prefer sub-metering and process subdivision. When direct measurement is unavailable, allocate electricity using a documented causal driver such as machine operating time; do not allocate by revenue. |  |
| `allocation_rule_2` | multiple calculator models | Aggregate only models with the same declared product boundary and power-route logic. Otherwise calculate model-specific inventories before any production-weighted combination. |  |
| `allocation_rule_3` | rejects and recovered material | Report rejected calculators as waste at measured mass. Do not credit avoided virgin production inside this factory-gate dataset unless an explicitly expanded boundary and substitution method are separately declared. |  |

No co-product is expected from calculator assembly. If a site reports a saleable co-product, subdivide the producing operation or document the physical causal allocation method and the unallocated result.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom_mass` | `calculator_final_assembly`; `button_cell_installation` | mass of each purchased component consumed | approved bill of materials, receiving record, issue record and component mass measurement | model_id; supplier_part_id; component_flow; unit_mass; issued_quantity; returned_quantity; rejected_quantity; scale_id | Reconcile approved BOM with material issues and returns; verify unit mass by calibrated weighing | kg | each production lot, aggregated monthly | complete reporting period | all lines producing covered models at the declared site | sum net issued mass by atomic component and divide by net conforming output mass | BOM revision, purchase/issue records, scale calibration and reconciliation sign-off |
| `cp_assembly_electricity` | `calculator_final_assembly` | electricity for assembly and functional testing | meter readings and equipment operating records | meter_id; opening_reading; closing_reading; meter_unit; covered_equipment; operating_time; allocation_driver; excluded_loads | Read dedicated meter or allocate an assembly-area meter using documented operating time | meter unit and MJ after validated conversion | at least monthly | complete reporting period | declared assembly and testing equipment | subtract excluded loads, apply documented causal allocation and divide by net conforming output mass | meter identification, reading log, conversion record and allocation worksheet |
| `cp_finished_product_mass` | `calculator_final_assembly` | conforming unpackaged finished product | release quantity and verified net unit mass | model_id; released_quantity; sampled_unit_mass; packaging_tare; scale_id; release_status | Weigh unpackaged product samples by model and reconcile with released quantities | kg | each model and reporting period | complete reporting period | declared production site | sum released quantity multiplied by verified net unit mass | release records, sampling plan, scale calibration and tare record |
| `cp_reject_waste_mass` | `calculator_final_assembly` | rejected finished calculator waste | reject and waste-disposition records | model_id; reject_quantity; measured_mass; rework_return; disposition; waste_ticket | Weigh assembled rejects leaving the process and exclude units returned to in-period rework | kg | each waste shipment or production lot | complete reporting period | declared production site | sum disposed reject mass and divide by net conforming output mass | reject log, weighing record and waste-transfer evidence |
| `cp_power_component_count` | `photovoltaic_cell_installation` | installed photovoltaic-cell count | approved BOM and released/rejected unit counts | model_id; power_configuration; cells_per_unit; released_quantity; rejected_quantity; BOM_revision | Multiply verified cells per unit by units assembled for applicable models | Item(s) | each production lot, aggregated monthly | complete reporting period | all applicable covered models | sum installed cell count and divide by net conforming output mass | BOM approval, route declaration and production-count reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_component_mass` | mass-based component inputs | Net component mass per reference flow = (issued mass - same-state return-to-stock mass) / net conforming unpackaged product mass | component issue and return records; net conforming output mass | kg component/kg reference product |  |
| `calc_electricity` | assembly electricity | Electricity per reference flow = allocated assembly and testing electricity / net conforming unpackaged product mass | meter readings; excluded loads; allocation driver; validated unit conversion; output mass | MJ/kg reference product |  |
| `calc_product_mass` | reference product output | Net conforming mass = sum by model of released quantity multiplied by verified unpackaged unit mass | release quantities; sampled unit mass; packaging tare | kg conforming product |  |
| `calc_pv_count` | photovoltaic-cell input | Cell count per reference flow = sum of installed cells for applicable models / net conforming unpackaged product mass | cells per unit; assembled unit counts; output mass | Item(s)/kg reference product |  |
| `calc_reject_mass` | rejected calculator waste | Reject waste per reference flow = disposed assembled-reject mass / net conforming unpackaged product mass | reject weighing and disposition records; output mass | kg waste/kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and component identity | Retain model, supplier part, component state, power configuration and Tiangong UUID or documented unresolved status for every atomic row. | BOM, supplier specification, UUID audit and model-family declaration |
| `dq_temporal` | foreground activity data | Cover one complete representative reporting period and disclose shutdowns, start-ups, engineering lots and abnormal rejects. | dated production, meter and waste records |
| `dq_mass` | mass-based rows | Use calibrated weighing or documented unit-mass sampling and reconcile issued component mass, conforming output and reject disposition. | calibration certificates, sampling records and reconciliation worksheet |
| `dq_electricity` | electricity | Identify meter boundary, excluded loads, conversion and allocation driver; use a geography- and voltage-appropriate upstream electricity dataset. | meter diagram, readings, allocation worksheet and dataset metadata |
| `dq_completeness` | all inventory rows | Report all nine PCR rows as present, zero/not applicable under the declared conditional route, or explicitly unresolved; do not merge atomic components or waste. | completed inventory checklist and route declaration |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | product identity | Confirm CPC 45130 scope and reject accounting machines, transaction terminals, general-purpose computers, stand-alone storage units and separately sold parts. | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | reference flow | Confirm that the dataset output is exactly 1 kg net conforming unpackaged finished product and that all required qualifiers are present. |  |
| `validation_rule_3` | process and route completeness | Confirm final assembly is present and that button-cell and photovoltaic rows agree with the declared power configuration; dual-power models include both conditional processes. |  |
| `validation_rule_4` | inventory identity | Confirm every selected flow is one atomic exchange, UUID-bearing Chinese names match state-100 direct reads, and the four UUID-empty rows remain explicitly unresolved until exact identities are audited. |  |
| `validation_rule_5` | normalization and reconciliation | Confirm numerator records and net conforming output cover the same site and period; explain component-mass, product-mass and reject reconciliation differences without treating electricity as mass. |  |
| `validation_rule_6` | external ranges | Confirm no external empirical range is asserted until two independent original sources with compatible boundary, unit and product state support a synthesis. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | Factory-gate input for product LCAs, component supply-chain models and lifecyclemodel projections of covered calculator products |
| allowed_use | Use for the declared model family, power configuration, site geography, technology and reporting period, or as a disclosed proxy after representativeness review |
| excluded_use | Stand-alone representation of packaging, distribution, use, repair, end-of-life, accounting machines, POS terminals, ATMs, general-purpose computers or separately sold components |
| required_metadata | canonical PCR id; product model or family; CPC reference; calculation-function class; display type; power configuration; battery and photovoltaic qualifiers; net mass; factory-gate unpackaged state; site; geography; technology; reporting period; upstream datasets; allocation method; unresolved UUIDs |
| required_quality_disclosure | meter and scale coverage; BOM revision; sampling and calibration; production and reject reconciliation; conditional-route applicability; proxy datasets; exclusions; temporal, geographical and technological representativeness |
| update_trigger | Change in model family, PCB or display architecture, enclosure material, power configuration, supplier mix, assembly technology, site, electricity supply, allocation method or reporting period that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-08) | Product classification identity and exclusions |
| `iec-63366-2025` | Standard (`standard`) | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691 (retrieved 2026-09-08) | Public scope description only: generic EEPS LCA and product-specific-rule context; full standard requirements not verified |
| `unep-eco-i-electronics-2022` | Handbook (`handbook`) | SAICM Secretariat (2022), Eco—i Manual: Electronics Supplement, commissioned by UNEP in collaboration with World Resources Forum, p. 21, Figure PR.1-6, https://saicmknowledge.org/sites/default/files/resources/UNEP_Eco%E2%80%94i_Manual_Electronics_Supplement_.pdf (retrieved 2026-09-08) | Electronics value-chain and component/assembly process decomposition |
