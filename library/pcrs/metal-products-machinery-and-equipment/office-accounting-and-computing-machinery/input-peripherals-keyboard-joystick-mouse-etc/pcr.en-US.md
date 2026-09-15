---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.input-peripherals-keyboard-joystick-mouse-etc
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Input peripherals (keyboard, joystick, mouse etc.)

## 1. Scope and Applicability

This PCR covers separately supplied computer keyboards, mice and joysticks that convert human actions into computer input. It defines a production foreground package for dry final assembly, functional testing and packing from purchased finished components. The declared unit is a mass-normalized production unit, not equal input service across devices. Integrated laptop keyboards, scanners, displays, computers, software and repair services are excluded. The semantic need is configuration-specific electronics assembly with component-boundary reconciliation and model-specific acceptance testing; shared material rules alone do not establish a complete peripheral dataset. Sources: `un-cpc-3-0-structure-2025`, `logitech-product-lifecycle-approach`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.input-peripherals-keyboard-joystick-mouse-etc |
| classification_refs | CPC 3.0: 45261 |
| covered_products | Separately supplied keyboards; mice; computer joysticks |
| excluded_products | Integrated computer assemblies; scanners; displays; software; repair services |
| representative_product | One finished wired keyboard model; mouse and joystick datasets use their own configuration and acceptance evidence |
| production_route | Purchased finished components → dry assembly → functional test → packing |
| market_state | New, tested, ready for shipment; model and supplied accessories declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Produce a specified human-input peripheral meeting its acceptance specification |
| How much | 1 kg net accepted finished devices of one model; report corresponding item count |
| How well | Pass declared key actuation, pointer tracking or axis response tests as applicable; declare interface compatibility |
| How long or cycle | One manufacturing delivery cycle; no default service life. Downstream comparison requires declared lifetime and use intensity |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Input peripherals (keyboard, joystick, mouse etc.) `fc64e9b7-ebef-47f8-a44c-25b47d5a3a32` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model and device function; wired/wireless interface; keyboard mechanism or sensor/axis technology; acceptance tests; net device mass and item count; supplied battery chemistry/capacity; included cable/receiver; bill-of-material revision; assembly site/year; upstream component boundaries; packaging mass separately |

Declare every required qualifier in dataset metadata or linked product records. A missing qualifier makes the reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | reference_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize by accepted output net mass, excluding shipping packaging. Retain measured kg/item for conversion; do not use a category-average device mass. |
| energy_conversion | electricity | Net calorific value | MJ | Convert metered kWh to MJ using 3.6 MJ/kWh. Preserve grid, voltage and loss boundary. |
| component_boundary | assembly | Mass | kg | Weigh complete purchased subassemblies; disclose included parts so sensors, switches, connectors and battery electronics are not counted twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished purchased components received at assembly gate |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0: 45261 |
| recursive_input_rule | A purchased finished peripheral is a separately recorded upstream input for a declared rework route, never a zero-burden recursive copy of this output. Rework requires a separately extended process map. |
| upstream_dataset_requirement | Link manufacturing datasets for each purchased component and inbound transport leg; record boundary, geography, technology, period and treatment links for wastes. |
| disclosure | Report gate-to-gate assembly separately from the linked cradle-to-gate result. This production module is not a complete final-product footprint. |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | assembly | Include component receipt, assembly, functional test, packing, rework electricity and manufacturing rejects. Supplier moulding, board fabrication and soldering stay in linked component datasets when already included. | `logitech-product-lifecycle-approach` |
| boundary_extension | dataset | Add product distribution, use/recharging, replacement batteries and end-of-life in separately declared downstream scenarios before a full life-cycle claim. Do not report this assembly module as such a claim. | `logitech-carbon-impact-methodology` |
| boundary_completeness | assembly | Reconcile every BOM item and every site exchange to an atomic inventory row or a documented upstream inclusion. The listed conditional rows are a starting inventory, not permission to omit keycaps, feet, receivers or non-ABS housings. Add actual part-specific exchanges before dataset acceptance. Wet cleaning, soldering or moulding on site requires an expanded process map with each chemical, utility, waste and emission separately recorded. | `logitech-product-lifecycle-approach` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly | Final assembly, test and packing | required | All models within the declared dry-assembly route | foreground_production | 1 kg net accepted devices |

### Process: Final assembly, test and packing (`assembly`)

#### Inputs

##### Product flows

###### ABS injection-moulded peripheral housing (`housing`)

inclusion_condition: When this ABS housing is fitted; identify one part number and resin grade.

- Selected flow: ABS injection-moulded peripheral housing
- Flow property / unit: Mass / kg
- Amount rule: Net issued housing mass, including rejected housings.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Populated printed circuit board (`pcb`)

inclusion_condition: When a purchased populated board is fitted; specify controller, sensor and radio content already included.

- Selected flow: Populated printed circuit board
- Flow property / unit: Mass / kg
- Amount rule: Net issued populated-board mass; do not add its mounted components again.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Keyboard key switch subassembly (`switch`)

inclusion_condition: Mechanical keyboard route, when separately purchased.

- Selected flow: Keyboard key-switch subassembly `941833e4-0249-45b4-abc8-1c0a6482f419`
- Flow property / unit: Mass / kg
- Amount rule: Net issued switch subassembly mass from count and measured part mass.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Keyboard silicone rubber membrane (`membrane`)

inclusion_condition: Membrane keyboard route, when separately purchased.

- Selected flow: Keyboard silicone rubber membrane
- Flow property / unit: Mass / kg
- Amount rule: Net issued membrane mass.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Joystick axis mechanism (`axis`)

inclusion_condition: Joystick route; supplied as one identified electromechanical axis subassembly.

- Selected flow: Joystick axis mechanism
- Flow property / unit: Mass / kg
- Amount rule: Net issued axis mechanism mass; declare included potentiometer or magnetic sensor.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Optical mouse sensor module (`sensor`)

inclusion_condition: Optical mouse route only when sensor module is not included in the populated board.

- Selected flow: Optical mouse sensor module
- Flow property / unit: Mass / kg
- Amount rule: Net issued module mass.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### USB cable (`cable`)

inclusion_condition: Wired peripheral or included charging cable.

- Selected flow: USB cable
- Flow property / unit: Mass / kg
- Amount rule: Net issued cable mass; include connectors in the cable assembly boundary.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Lithium-ion battery (`battery`)

inclusion_condition: Rechargeable model with a supplied lithium-ion battery.

- Selected flow: 3C Lithium Battery `000abc1e-59e3-4336-bfd6-66575a4b0bda`
- Flow property / unit: Mass / kg
- Amount rule: Net issued battery mass with chemistry, capacity and pack boundary.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### AA alkaline manganese dioxide battery (`alkaline`)

inclusion_condition: Model supplied with AA alkaline batteries.

- Selected flow: Alkaline battery `b8cd9a54-b808-450f-8aa6-3ea2a037c416`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Net issued cell count per accepted output kg; retain measured cell mass for BOM reconciliation. Replacements during use are outside this production package.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Steel screw (`screw`)

inclusion_condition: When screw fastening is used.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Net issued screw mass; record steel grade and coating.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Electricity (`electricity`)

inclusion_condition: All assembly, test and packing operations supplied with electricity.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered line electricity plus justified share of supporting electricity, divided by accepted output mass.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

###### Corrugated cardboard box (`carton`)

inclusion_condition: When a corrugated carton is used for shipment.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net issued carton mass including packing losses; exclude it from product net mass.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

#### Outputs

##### Product flows

###### Input peripherals (keyboard, joystick, mouse etc.) (`reference_product`)

inclusion_condition: One declared peripheral model per dataset; one physical finished product exchange, never a mix of device functions.

- Selected flow: Input peripherals (keyboard, joystick, mouse etc.) `fc64e9b7-ebef-47f8-a44c-25b47d5a3a32`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg accepted net finished-device output; supplied battery and integral cable included, retail carton excluded.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

##### Waste flows

###### Waste populated printed circuit board (`reject`)

inclusion_condition: When failed boards are removed and sent off site.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: Weighed board waste sent to the identified treatment operator.
- Value mode: `calculated_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg net accepted finished devices of the declared model
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_shared | assembly | Separate model-specific operations by submetering or engineering records. For remaining common loads, use a demonstrated physical driver such as measured test-station time; use economic allocation only when physical relationships cannot be justified, with sensitivity and rationale disclosed. | `ghg-protocol-product-standard-2011` |
| allocation_recycling | assembly | Use a disclosed recycled-content convention for linked material datasets and manufacturing scrap. Keep treatment and recovery burdens explicit; do not automatically subtract hypothetical virgin-material credits from assembly electricity or component quantities. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_assembly | assembly | Components, electricity, accepted output and board waste | BOM; stock ledger; meter; test log; waste transfer | model; part_id; issued/returned counts; kg/item; opening/closing stocks; meter readings; test time; accepted count/net mass; rejected count; waste kg; supplier boundary | Weigh representative parts with calibrated balance; reconcile material ledger, accepted-device tests and waste tickets; submeter electricity | kg; item; kWh; station-hour | Each production lot; meter at shift boundaries | Declare consecutive production period covering normal load, changeovers and rejects; justify representativeness | Named assembly site and declared model revision | Sum net consumption and attributable energy over same period; divide by accepted net output kg | Calibration; invoices; BOM revision; acceptance tests; meter logs; supplier declarations; waste tickets |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | assembly | q_i = net consumed quantity_i / accepted net device mass. Reconcile net consumption using issues, returns and stock changes; do not subtract the same return twice. For the reference output q = M/M = 1. | cp_assembly records; accepted mass M > 0 | kg/kg, Item(s)/kg or MJ/kg |  |
| electricity_basis | electricity | q_E = (meter kWh assigned to model × 3.6) / M; allocation shares must sum to unity over all products served. | Meter differences; physical allocation driver; M | MJ/kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_coverage | assembly | Document technological, temporal and geographic representativeness, completeness and reliability. Retain primary measurement evidence for owned assembly operations. | `ghg-protocol-product-standard-2011`; cp_assembly |
| quality_bom | assembly | Reconcile full device mass and packaging separately to the BOM; identify missing exchanges and upstream overlaps before acceptance. Missing data are not zero. | cp_assembly |
| quality_ranges | assembly | Collect actual amounts. No external numerical range is prescribed; do not transfer a single model carbon footprint into component or energy ranges. | cp_assembly |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | Require one model, all reference qualifiers, accepted mass greater than zero and declared kg/item conversion. Reject cross-device comparisons based only on mass. |  |
| validate_inventory | assembly | Every applicable exchange must be one physical flow with a resolved or explicitly unresolved identity. Demonstrate absence for conditional rows not used. Require complete BOM and stock/output/waste reconciliation; investigate discrepancies against documented instrument uncertainty rather than an invented tolerance. |  |
| validate_boundary | dataset | Require upstream links, no component double counting and separate disclosure of gate-to-gate scope. A complete product footprint additionally requires downstream transport, use and end-of-life scenarios. | `logitech-carbon-impact-methodology` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Assembly module for a declared peripheral model; link upstream manufacture and downstream lifecycle scenarios |
| allowed_use | Production data package and process/lifecyclemodel projections with matching model and boundary |
| excluded_use | Unqualified full-life-cycle claims; direct ranking of keyboards against mice or joysticks; substitution for semiconductor or polymer manufacture |
| required_metadata | Model; BOM version; site; year; technology; output basis; component dataset links; grid; allocation; conditional-route decisions |
| required_quality_disclosure | Measurement provenance; completeness; representativeness; unresolved identities; omitted operations; uncertainty and absence of external ranges |
| update_trigger | Model/BOM, battery, supplier, site, test programme, energy mix or waste route change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-08 | Classification identity, row 45261; no quantitative evidence. |
| logitech-carbon-impact-methodology | literature | Logitech, Carbon Impact & LCA Methodology; https://www.logitech.com/en-us/sustainability/carbon-impact-methodology; retrieved 2026-09-08 | Sourcing and manufacturing; separate transport, use, battery and end-of-life scenarios. No numerical benchmark transferred. |
| logitech-product-lifecycle-approach | literature | Logitech, Product Lifecycle Approach; https://www.logitech.com/en-ae/sustainability/environment.html; retrieved 2026-09-08 | Assembly/testing boundary and upstream component manufacture; recycled content and supplier specifications. |
| ghg-protocol-product-standard-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 7–9 and 13; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-09-08 | Boundary disclosure, activity data quality, allocation hierarchy and reporting. Carbon-accounting source, not a claim of full LCA conformance. |
