---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48261
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts and accessories for the goods of subclass 48261

## 1. Scope and Applicability

This PCR applies to dedicated parts and accessories for non-optical microscopes and diffraction apparatus. It covers a finished, quality-released part at the manufacturing gate and uses a precision-machined stainless-steel component as the representative route. The actual product configuration, material grade, manufacturing technology, geography, production period, and inclusion of outsourced operations shall be declared.

Complete microscopes and diffraction apparatus, optical microscopes and their parts, general-purpose laboratory supplies, installation services, use, maintenance, distribution, and end-of-life are excluded. Distribution packaging is outside the reference product and boundary. A product made by another route remains eligible only when its actual atomic material and energy exchanges replace or supplement the representative inventory and the route is disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48261 |
| classification_refs | CPC 3.0: 48282 — Parts and accessories for the goods of subclass 48261 |
| covered_products | Dedicated parts and accessories for microscopes other than optical microscopes and for diffraction apparatus |
| excluded_products | Complete instruments; optical microscopes and their parts; general-purpose supplies; services; distribution packaging |
| representative_product | Precision-machined stainless-steel component dedicated to a non-optical microscope or diffraction apparatus |
| production_route | Receipt of stainless-steel sheet, precision machining, inspection, and release at the manufacturing gate |
| market_state | Finished, quality-released, unpackaged part or accessory at the manufacturing gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished part or accessory dedicated to the function of a non-optical microscope or diffraction apparatus |
| How much | 1 kg of conforming finished product |
| How well | Meets the declared drawing, material grade, dimensional tolerances, surface condition, cleanliness, and acceptance criteria |
| How long or cycle | One production period represented by the foreground data, with no use-life equivalence claimed |
| reference_flow_link | The output row `finished_reference_product` realizes the functional unit after normalization to conforming output mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts and accessories for the goods of subclass 48261 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | instrument family and dedicated function; part number or drawing revision; material grade; manufacturing route; dimensional and surface acceptance criteria; cleanliness requirement; site geography; production period; allocation method; excluded operations |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net conforming product mass, excluding distribution packaging. Normalize period totals to 1 kg of conforming output. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity and convert kWh to MJ with 1 kWh = 3.6 MJ; disclose voltage level, grid geography, supplier mix, and whether losses are included. |

## 5. System Boundary

The foreground boundary begins when identified stainless-steel sheet is received by the manufacturing site and ends when the conforming unpackaged part is quality-released at the site gate. It includes precision machining, in-process handling, inspection, and directly attributable facility energy. Upstream production of purchased material and electricity shall be represented by suitable upstream datasets. Capital equipment, buildings, employee travel, distribution, use, maintenance, and end-of-life are outside the default boundary unless the study goal explicitly includes them.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Stainless-steel sheet received at the manufacturing site, identified by supplier, grade, form, and net mass |
| starting_condition_role | Purchased product input at the foreground gate |
| product_classification_scope | Dedicated parts and accessories for the complete goods classified in CPC 3.0 subclass 48261 |
| recursive_input_rule | A purchased input already within this PCR category is recorded once as an upstream product input; do not recursively reopen its foreground manufacture inside the same dataset |
| upstream_dataset_requirement | Use geography-, technology-, grade-, and delivery-representative upstream datasets for each purchased input and document substitutions |
| disclosure | Declare product configuration, material grade, route, outsourced operations, site, period, excluded operations, and whether any same-category input occurs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | foreground manufacturing | Include all site operations and direct exchanges needed to machine, inspect, and release the declared product during the represented period. |  |
| `boundary_02` | route variation | Record every additional route-specific material, energy, waste, and elementary exchange as a separate atomic row; absence shall be supported by process records. |  |
| `boundary_03` | purchased inputs | Model upstream burdens with suitable upstream datasets and do not duplicate those burdens as foreground elementary flows. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `precision_part_manufacturing` | Precision part manufacturing and release | required | Always included for the representative route; adapt the atomic exchange set to the declared product route | Foreground production | 1 kg conforming unpackaged product |

### Process: Precision part manufacturing and release (`precision_part_manufacturing`)

#### Inputs

##### Product flows

###### Stainless-steel sheet (`stainless_steel_sheet`)

Stainless-steel sheet crosses the site gate as the material stock for the representative machined component. Record the actual purchased grade and net mass consumed, adjusted for opening and closing stock.

- Selected flow: Stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Net stainless-steel sheet consumed from purchase and stock records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources:

###### Purchased electricity (`electricity`)

Purchased electricity crosses the site boundary to power machining, handling, inspection, and directly attributable support equipment. Record submetered consumption where available and document any allocation from a shared meter.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to the represented production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished part or accessory (`finished_reference_product`)

The quality-released unpackaged part or accessory is the reference output. Record conforming net mass separately from rejects and work in progress.

- Selected flow: Parts and accessories for the goods of subclass 48261
- Flow property / unit: Mass / kg
- Amount rule: 1 kg after normalization from measured conforming output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_mass`
- Sources:

##### Waste flows

###### Stainless-steel machining scrap (`stainless_steel_scrap`)

Stainless-steel offcuts, chips, and turnings leaving the foreground boundary as one segregated material stream are recorded by net mass. Contaminated or mixed wastes shall be represented by separate atomic rows rather than combined with this stream.

- Selected flow: Stainless-steel machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated stainless-steel scrap leaving the site, adjusted for stored scrap inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_mass`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | foreground operations | Prefer subdivision and direct metering so exchanges are assigned to the declared product without allocation. |  |
| `allocation_02` | shared operations | When subdivision is not feasible, allocate shared electricity and material losses using a documented physical driver that reflects causality, such as machine time or processed mass; report the driver and allocated share. |  |
| `allocation_03` | stainless-steel scrap | Report scrap as a waste output and disclose its destination. Do not credit recycling or avoided primary material inside the foreground inventory unless the study applies and documents a separate consistent end-of-life method. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `precision_part_manufacturing` | stainless-steel sheet input | purchase, receiving, issue, and stock records | supplier; grade; form; received mass; issued mass; opening stock; closing stock; product link | Reconcile traceable material records to the represented product and period | kg | each receipt and issue; period close | Same production period as output | All included production areas at the site | issued mass plus opening stock minus closing stock, net of documented transfers | purchase documents; material certificates; stock reconciliation; scale calibration |
| `cp_electricity_meter` | `precision_part_manufacturing` | purchased electricity input | utility invoice, main meter, and submeter records | meter id; opening reading; closing reading; multiplier; kWh; production link; shared-meter driver | Read calibrated meters and reconcile submeters to the site total | kWh, converted to MJ | continuous or at least monthly | Same production period as output | Included equipment and directly attributable support loads | sum validated readings, subtract excluded loads, then apply documented shared-meter allocation | invoices; meter logs; calibration or verification records; allocation worksheet |
| `cp_output_mass` | `precision_part_manufacturing` | conforming reference output | production and quality-release records | part number; drawing revision; batch; accepted quantity; unit net mass or batch net mass; rejected quantity | Weigh accepted output or multiply verified unit net mass by accepted count | kg | each batch | Same production period as inputs | All conforming output from the included site | sum conforming net mass; exclude packaging, rejects, and unfinished work | calibrated scale record; release record; count-to-mass check |
| `cp_scrap_mass` | `precision_part_manufacturing` | stainless-steel scrap output | scrap scale tickets and scrap-stock records | waste stream id; material grade; measured mass; opening stock; closing stock; destination | Weigh segregated scrap and reconcile stored scrap inventory | kg | each dispatch and period close | Same production period as output | All included production areas at the site | dispatched mass plus closing stock minus opening stock, net of documented transfers | scale ticket; segregation record; inventory reconciliation; destination record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | all period inventory rows | normalized amount = validated period amount / conforming period output mass | validated row amount; conforming output mass from `cp_output_mass` | row amount per 1 kg reference flow |  |
| `calc_02` | electricity | electricity MJ = validated electricity kWh × 3.6 | validated kWh from `cp_electricity_meter` | MJ of purchased electricity |  |
| `calc_03` | stainless-steel mass balance | unaccounted steel = net steel input − conforming product steel mass − stainless-steel scrap output − net work-in-progress change; disclose components not made of steel | material, output, scrap, and work-in-progress records | reported mass-balance reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01` | product identity | Link every reported batch to the dedicated instrument function, part number or drawing revision, material grade, and release status. | drawing; bill of materials; material certificate; release record |
| `dq_02` | temporal consistency | Use the same production period for material, electricity, output, and scrap records; explain shutdowns, start-up batches, and stock corrections. | dated records and period reconciliation |
| `dq_03` | completeness | Reconcile purchased material and electricity to included operations and identify excluded loads, transfers, rejects, work in progress, and unmetered estimates. | mass balance; energy reconciliation; exclusion log |
| `dq_04` | representativeness | Declare site geography, production technology, capacity utilization, supplier geography, electricity supply, and whether the period is representative. | dataset metadata and production report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference flow | Confirm that the output is a dedicated part or accessory for a non-optical microscope or diffraction apparatus and that 1 kg excludes distribution packaging. | `un-cpc-3-0-structure-2025` |
| `validation_02` | inventory completeness | Confirm that English and Chinese inventories contain the same ordered row ids and UUIDs, and that every additional route exchange is recorded as one atomic flow. |  |
| `validation_03` | normalization | Recalculate every inventory amount against conforming output mass and verify the 3.6 MJ/kWh electricity conversion. |  |
| `validation_04` | balances and allocation | Review material-balance reconciliation, scrap destination, shared-meter allocation, stock changes, exclusions, and data-quality evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after review of representativeness |
| downstream_use | Foreground process modelling and downstream lifecycle models for non-optical microscope or diffraction-apparatus parts |
| allowed_use | Products within the declared dedicated function, material, route, geography, technology, and production-period qualifiers |
| excluded_use | Complete instruments, optical-microscope parts, materially different routes without added atomic exchanges, use-stage claims, and end-of-life claims |
| required_metadata | canonical PCR id; part identity; dedicated function; drawing revision; material grade; route; site geography; technology; production period; reference mass; electricity supply; upstream dataset choices; allocation; exclusions |
| required_quality_disclosure | primary-data share; meter and scale quality; temporal coverage; material balance; shared-load allocation; unresolved UUIDs; missing range evidence; data gaps and substitutions |
| update_trigger | Drawing or material change; manufacturing-route or site change; electricity-supply change; allocation change; material data gap closure; UUID resolution; or new independent range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official classification identity and the link from CPC 48282 to the goods of subclass 48261 |
