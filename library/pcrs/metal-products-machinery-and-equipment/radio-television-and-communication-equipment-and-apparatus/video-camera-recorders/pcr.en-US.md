---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.video-camera-recorders
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Video camera recorders

## 1. Scope and Applicability

This PCR produces a manufacturing foreground data package for camcorders, digital or non-digital, and web cameras. Professional television/video cameras and cameras optimized mainly for still images are excluded, following `un-cpc-3-0-notes-2025`. Separate recorders without image capture are outside this semantic boundary. The common methodology is optical capture integration, electronic signal processing, functional testing and configuration-specific recording capability. Camcorders and web cameras shall be separate model records; do not average them by mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.video-camera-recorders |
| classification_refs | CPC 3.0: 47214 (`un-cpc-3-0-structure-2025`; `un-cpc-3-0-notes-2025`) |
| covered_products | Camcorders and web cameras; declare local recording or host-dependent capture |
| excluded_products | Professional television/video cameras; still-image-optimized digital cameras; standalone video recorders; phones; recording services |
| representative_product | A tested new consumer camcorder; a web camera is a separately qualified variant |
| production_route | Purchased finished component assembly, optical alignment, firmware loading, image and recording/host-interface test, packing |
| market_state | New, functional equipment at factory gate; product mass excludes transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide moving-image capture with declared local recording or host interface |
| How much | Manufacturing declaration for 1 kg of one specified finished model; report its equivalent equipment count |
| How well | Declare resolution, frame rate, codec/interface, optical configuration and acceptance test; model specifications are not category-wide limits (`sony-ax43a-specifications`) |
| How long or cycle | One manufacturing cycle. No service life is assumed; downstream functional studies must declare recording hours, lifetime and replacement requirements |
| reference_flow_link | finished_camera |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Video camera recorders `dcf8321d-003e-48d9-b233-1524a7547be9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; camcorder or web camera; recording architecture; sensor type; resolution and frame rate; lens configuration; firmware; product mass and count; included battery and accessories; production site and period; test protocol |

This is a declared manufacturing reference, not functional equivalence per kilogram. Declare every required qualifier in the foreground package. The Chinese category title is an authored translation; UUID displays retain TianGong names.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mass_count | finished_camera | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure model net mass m and accepted count N. Reference mass M=N×m; amount per kg=q/M. Declare battery/accessory inclusion and exclude packaging from M. |
| energy_conversion | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Keep meter kWh records and convert using 1 kWh=3.6 MJ; do not include upstream electricity emissions as direct site emissions. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| manufacturing_boundary | foreground | Include component assembly, optical alignment, firmware loading, acceptance testing, rework and factory packing. Link component production, inbound delivery and outgoing manufacturing-waste treatment upstream/downstream as appropriate. This is a partial manufacturing dataset, not a complete product footprint. | `ghg-product-standard-2011` |
| route_completeness | actual_site | The declared route starts with finished components. Where the site makes a component, solders, cleans or coats it, extend the process map with each actual atomic input and output and replace the overlapping purchased-component burden. Reconcile every BOM part, fastener, adapter and packaging component; no unlisted exchange may be silently omitted. | `ghg-product-standard-2011` |
| downstream_boundary | dataset_use | Distribution after factory gate, operation, replacement and end-of-life of the sold equipment are outside this manufacturing declaration. A life-cycle study must add these stages, including host equipment and recording media where required by the function, and disclose assumptions. | `ghg-product-standard-2011` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished lens, populated imaging board and finished enclosure delivered to assembly; no upstream component burdens are assumed zero |
| starting_condition_role | Foreground assembly entry; upstream burden linkage required |
| product_classification_scope | Camcorders and web cameras; declare local recording or host-dependent capture |
| recursive_input_rule | Do not feed the finished reference camera back into its own production. Rework stays within the same lot; purchased used cameras require a separately declared refurbishment route |
| upstream_dataset_requirement | Link supplier or representative upstream component datasets including delivery. Disclose geography, technology, time, recycled content and dataset boundary |
| disclosure | State actual bill of materials, make/buy boundary, included accessories, packaging, outsourced stages and excluded life-cycle stages |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly | Assembly and functional test | required | All declared models | foreground_production | Accepted model mass at packing exit |
| packing | Packing and release | required | All declared models | foreground_production | 1 kg |

These processes form one integrated foreground chain. Internal equipment transfer is not a second purchased exchange. Record the final reference output once at packing. Conditional cards require documented absence or an actual quantity.

### Process: Assembly and functional test (`assembly`)

#### Inputs

##### Product flows

###### Objective lens (`lens`)

Required; record the finished lens and mount supplied as one assembly

- Selected flow: Objective lenses for cameras, projectors or photographic enlargers or reducers `cfef9f14-3271-428b-bebe-47ded2db11d4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lens`

###### Imaging circuit board (`board`)

Required; declare sensor and processing electronics included on this board; separately record any additional board

- Selected flow: Populated camera imaging circuit board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_board`

###### ABS enclosure (`housing`)

inclusion_condition: ABS enclosure fitted; declare resin and finished state; extend separately for another material

- Selected flow: ABS plastic camera housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_housing`

###### LCD module (`display`)

inclusion_condition: integrated LCD fitted; do not include a separately owned host monitor

- Selected flow: Liquid crystal display module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_display`

###### Battery pack (`battery`)

inclusion_condition: supplied battery pack; specify chemistry, capacity and included electronics

- Selected flow: Lithium ion rechargeable battery pack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_battery`

###### USB cable (`cable`)

inclusion_condition: supplied USB cable; specify connector and length

- Selected flow: USB cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cable`

###### Microphone (`microphone`)

inclusion_condition: microphone fitted; exclude it here if already inside the purchased board module

- Selected flow: Microphone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_microphone`

###### SD card (`memory`)

inclusion_condition: supplied SD card; record capacity; host-owned media are outside this manufacturing declaration

- Selected flow: SD memory card
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_memory`

###### Assembly and test electricity (`electricity`)

Meter assembly, calibration, recording or host-interface test and rework energy; include allocated facility electricity

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`

#### Outputs

##### Waste flows

###### Rejected equipment (`reject`)

inclusion_condition: irreparable rejected equipment leaves for treatment; retain composition and hazardous-component information

- Selected flow: Discarded video camera recorder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reject`

### Process: Packing and release (`packing`)

#### Inputs

##### Product flows

###### Corrugated box (`box`)

inclusion_condition: corrugated box used; record box mass separately from equipment mass

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_box`

#### Outputs

##### Product flows

###### Accepted equipment (`finished_camera`)

Record accepted equipment net mass and count after functional testing; keep packaging outside reference mass

- Selected flow: Video camera recorders `dcf8321d-003e-48d9-b233-1524a7547be9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch exchange divided by accepted equipment net mass; reconcile receipts, returns and stock changes
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted model equipment, excluding packaging
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finished_camera`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| separate_models | shared_production | Subdivide by model and metered operation before allocating shared burdens. Allocate unavoidable common equipment electricity using documented processing time and load; do not use product mass alone across camcorders and web cameras. | `ghg-product-standard-2011` |
| yield_and_recycling | rejects | Charge rework and manufacturing rejects to accepted output of the same lot. Report outgoing waste mass and treatment separately; no avoided virgin-production credit is assigned in the foreground manufacturing inventory. Disclose the downstream recycling method. | `ghg-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lens | assembly | Objective lens | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_board | assembly | Imaging circuit board | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_housing | assembly | ABS enclosure | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_display | assembly | LCD module | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_battery | assembly | Battery pack | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_cable | assembly | USB cable | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_microphone | assembly | Microphone | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_memory | assembly | SD card | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_electricity | assembly | Assembly and test electricity | Meter log | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Submeter | MJ | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_reject | assembly | Rejected equipment | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_box | packing | Corrugated box | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |
| cp_finished_camera | packing | Accepted equipment | Batch record | lot; model; date; exchange quantity; unit; accepted mass; meter or scale ID; stock change; applicability | Weigh and reconcile BOM and warehouse/treatment records | kg | Each lot | One declared representative continuous production period; retain dates and downtime | Named factory and line | Sum physical exchanges and divide by accepted model mass; do not average lot ratios | Calibration; invoices; BOM; acceptance test; waste manifests as applicable |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all_rows | a_i=sum(q_i)/sum(M_accepted) for the same model and period; for electricity convert meter kWh to MJ first | protocol batch quantities and accepted mass | kg/kg or MJ/kg | `ghg-product-standard-2011` |
| yield | finished_camera | accepted count divided by completed test count; retain rework loops and irreparable reject count without counting rework twice | test and release logs | observed model yield, no default | `ghg-product-standard-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceability | all_rows | Retain primary records, calibration, supplier boundaries, period and geographic/technology representativeness. Record missing data and uncertainty explicitly. | `ghg-product-standard-2011` |
| configuration | model | Retain BOM revision, sensor/lens/recording configuration and functional-test criteria. Manufacturer specifications describe examples, not universal acceptance limits. | `sony-ax43a-specifications` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_check | reference_product | Reject records missing model, mass/count reconciliation, recording architecture, test evidence or required qualifiers. Separate professional cameras and still-image cameras from this category. | `un-cpc-3-0-notes-2025` |
| inventory_check | all_rows | Require measured or calculated quantities, protocol linkage, units, boundary-compatible upstream links and explicit applicability. Missing data are not zero. Prevent sensor double counting when supplied on the populated board. | `ghg-product-standard-2011` |
| balance_check | batch | Reconcile component receipts, stock changes, accepted equipment, rejects and packaging. Investigate differences against instrument uncertainty and BOM evidence; no unsupported universal tolerance is imposed. | `ghg-product-standard-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | manufacturing_foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing contribution for the specified model with upstream links |
| excluded_use | Standalone whole-life footprint; mass-based comparison of different camera functions |
| required_metadata | model; camcorder or web camera; recording architecture; sensor type; resolution and frame rate; lens configuration; firmware; product mass and count; included battery and accessories; production site and period; test protocol |
| required_quality_disclosure | Coverage, missing exchanges, UUID gaps, allocation, uncertainty and excluded stages |
| update_trigger | BOM, sensor, recording architecture, site, supplier, energy supply or test-route change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UNSD CPC 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-09 | Classification identity |
| un-cpc-3-0-notes-2025 | official_guidance | UNSD CPC 3.0 Explanatory Notes, pp. 256–257, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retrieved 2026-09-09 | Included camcorders and web cameras; exclusions |
| sony-ax43a-specifications | handbook | Sony FDR-AX43A specifications; https://www.sony.com.sg/electronics/handycam-camcorders/fdr-ax43a/specifications; retrieved 2026-09-09 | Component functions and model-specific qualifiers; no manufacturing ranges |
| sony-ax100-chinese-guide | handbook | Sony FDR-AX100/FDR-AX100E/HDR-CX900/HDR-CX900E Chinese Help Guide, model information; https://helpguide.sony.net/gbmig/45346571/v1/zh-cn/contents/TP0000433415.html; retrieved 2026-09-09 | Chinese term 摄录一体机 |
| ghg-product-standard-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–9; summary pp. 14–15; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-09-09 | Partial boundary disclosure, primary data, process map and allocation hierarchy; applied as method guidance, not a claim of complete footprint conformance |
