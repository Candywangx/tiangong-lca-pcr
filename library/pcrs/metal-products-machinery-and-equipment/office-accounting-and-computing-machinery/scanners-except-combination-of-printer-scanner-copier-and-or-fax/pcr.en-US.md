---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.scanners-except-combination-of-printer-scanner-copier-and-or-fax
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Scanners (except combination of printer, scanner, copier and/or fax)

## 1. Scope and Applicability

This PCR covers standalone computing-input scanners that digitize documents or images, including flatbed and sheet-fed models. Exclude integrated printer/scanner/copier/fax combinations, medical diagnostic scanners, three-dimensional metrology scanners and barcode-only readers. The manufacturing module delivers tested equipment at the factory gate. Optical architecture, accepted image quality, test losses and the supplied accessory configuration require product-specific collection; printer consumable assumptions do not apply. Scope follows `un-cpc-3-0-structure-2025` and the scanner distinction in `epa-imaging-equipment-v3-1`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.scanners-except-combination-of-printer-scanner-copier-and-or-fax |
| classification_refs | CPC 3.0: 45262; `un-cpc-3-0-structure-2025` |
| covered_products | Standalone flatbed and sheet-fed image scanners |
| excluded_products | Multifunction imaging equipment; medical, 3D metrology and barcode-only scanners |
| representative_product | Standalone document scanner with declared model and sensor architecture |
| production_route | Purchased component integration, calibration, acceptance testing and packing |
| market_state | New, tested scanner with declared supplied accessories at factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Digitization of declared original formats |
| How much | Manufacturing declared unit: 1 kg net accepted scanner equipment; convert to one complete scanner using measured kit mass m |
| How well | Declare optical resolution, color depth, document size, simplex/duplex throughput and acceptance test criteria; do not equate kg with scanning performance |
| How long or cycle | One manufacturing and acceptance cycle. Service comparison requires separately declared lifetime pages and years; no default lifetime |
| reference_flow_link | scanner_output = 1 kg; manufacturing burden per scanner equals burden per kg multiplied by m. This is a partial manufacturing module, not a complete service comparison. |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Scanners (except combination of printer, scanner, copier and/or fax) `9111cdf0-20a6-465c-a7cb-4b8a0fbc4968` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; flatbed or sheet-fed; CIS or CCD; illumination; optical resolution; color depth; original size; duplex mode; rated throughput and test settings; net kit mass; supplied adapter and cable; manufacturing site and period; gate condition; upstream boundary |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | scanner_output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted kits separately from packaging. Use model-specific count × measured kit mass; never substitute shipping weight. |
| `electricity_units` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain meter kWh and convert by 1 kWh = 3.6 MJ. Nameplate power is not measured factory energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished purchased components and empty packaging received at assembly plant |
| starting_condition_role | Supplier-linked assembly foreground; raw-material and component production upstream |
| product_classification_scope | Standalone computing-input scanners; not scanner parts as finished product |
| recursive_input_rule | A purchased complete scanner requires a separate assembly/refurbishment route with its own supplier inventory; never recursively expand the same complete-scanner output as its own input |
| upstream_dataset_requirement | Link each component to matching supplier production and delivery datasets. Missing upstream coverage is a disclosed gap, never zero burden. |
| disclosure | Report component manufacture locations, purchased/on-site split, accessory and packaging scope, and exclusions |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `manufacturing_boundary` | manufacturing | Include assembly, calibration, testing, rework and packing with linked upstream supply and factory waste treatment. Disclose excluded distribution, use and end-of-life stages; never claim a full life cycle from this module. | `ghg-protocol-product-standard-2011` |
| `bom_completeness` | foreground | Reconcile the actual bill of materials. Cards below are common atomic exchanges, not a universal bill. Add each installed CCD module, feed roller, fastener, alternative housing, cushion or actual factory chemical as its own identified exchange when present. Verify absence rather than assume zero. Avoid double counting supplier assemblies and their internal parts. | `epson-gts55-scanner-parts`; `epson-v19-v39-scanner-parts` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `scanner_assembly` | Assembly, calibration, testing and packing | required | All in-scope manufacturing records | Integrated foreground production; retain operation-level meters | 1 kg accepted net scanner equipment |

### Process: Assembly, calibration, testing and packing (`scanner_assembly`)

#### Inputs

##### Product flows

###### Moulded ABS scanner housing (`housing`)

Only when the installed housing is ABS; use the supplier part mass, not resin feedstock.

- Selected flow: Moulded ABS scanner housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`

###### Populated scanner control circuit board (`board`)

Record the populated board as received. Exclude the image-sensor module if separately purchased.

- Selected flow: Populated scanner control circuit board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`

###### Contact image sensor module (`sensor`)

inclusion_condition: CIS design. Record complete purchased CIS module including its integral illumination.

- Selected flow: Contact image sensor module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`

###### Stepper motor (`motor`)

inclusion_condition: stepper drive installed. Record purchased motor mass and rated output.

- Selected flow: Stepper motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`

###### Finished scanner glass platen (`glass`)

inclusion_condition: flatbed design. Record finished optical platen, not unworked sheet glass.

- Selected flow: Finished scanner glass platen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`

###### AC/DC power adapter (`adapter`)

inclusion_condition: adapter supplied with the product. Do not add an adapter to a USB-powered model that ships without one.

- Selected flow: AC/DC power adapter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`

###### USB cable (`cable`)

inclusion_condition: USB cable supplied. Record cable with connectors; do not replace it by ribbon cable.

- Selected flow: USB cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`

###### corrugated board boxes (`box`)

inclusion_condition: corrugated shipping box used. Record actual empty box mass.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_components`

###### Electricity (`electricity`)

Meter assembly, calibration, functional testing, rework and packing electricity over the same production period.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

#### Outputs

##### Product flows

###### Scanners (except combination of printer, scanner, copier and/or fax) (`scanner_output`)

Record accepted scanner mass including declared supplied operational accessories, excluding all transport packaging.

- Selected flow: Scanners (except combination of printer, scanner, copier and/or fax) `9111cdf0-20a6-465c-a7cb-4b8a0fbc4968`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_output`

###### corrugated board boxes (`box_output`)

Record box mass leaving with scanners separately from net scanner mass; this is ancillary packaging, not an independently allocated co-product.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_output`

##### Waste flows

###### Discarded standalone scanner (`reject`)

inclusion_condition: irreparable complete scanner rejected at the factory. Record waste transfer mass and destination; internal rework is not a waste export.

- Selected flow: Discarded standalone scanner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period total divided by accepted net scanner mass; retain applicability and raw records
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted scanner equipment
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_output`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide_first` | shared_operations | Use dedicated line records first. Allocate remaining shared burdens using demonstrated physical drivers; justify economic allocation only where a physical relationship cannot be established. | `ghg-protocol-product-standard-2011` |
| `reject_accounting` | rejects | Carry test and rework burdens into accepted output. Do not allocate a negative burden to discarded scanners or ancillary shipping boxes. Document waste treatment separately and prevent duplicate recycling credits. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_components` | scanner_assembly | Purchased component and box | BOM and stock ledger | part id; composition; quantity; mass; receipts; opening/closing stock; returns; model | Weigh representative parts and reconcile issued quantities to stock | kg | Each batch | Declared complete production period | Assembly site and named suppliers | Net consumption / accepted scanner kg; count × measured part mass when needed | Scale calibration; supplier part drawing; stock reconciliation |
| `cp_energy` | scanner_assembly | Electricity | Meter and operating log | start/end readings; units; line; rework; operating time; allocation driver | Submeter assembly/test/packing and reconcile facility total | kWh | Each shift | Same period as accepted output | Assembly site | Allocated kWh × 3.6 / accepted scanner kg | Meter calibration; invoices; allocation worksheet |
| `cp_output` | scanner_assembly | Accepted scanners, shipped boxes and discarded scanners; separate records | Acceptance and dispatch ledger | accepted count; kit mass; box mass; reject mass; stock changes; destination; test settings | Weigh separately; reconcile acceptance, rework and dispatch records | kg | Each batch | Same complete production period | Assembly site and waste consignee | Each output mass / accepted net scanner kg | Test reports; scale checks; waste transfer records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all_rows | q_i = Q_i / M_good; M_good = accepted count × measured net kit mass. Use inventory-adjusted consumption, including failed-unit inputs. | Q_i; M_good | q_i |  |
| `balance_material` | mass | Reconcile input mass against accepted kits, shipped packaging, waste and stock change. Investigate residual against documented measurement uncertainty; no universal tolerance is imposed. | mass ledgers | residual explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `representativeness` | all_rows | Assess technology, geography, time, completeness and reliability of supplier and site records. | `ghg-protocol-product-standard-2011` |
| `configuration` | scanner_output | Retain model-specific BOM and acceptance settings. Do not average CIS and CCD models or ADF and flatbed configurations without production weighting and disclosure. | BOM; test report; production weights |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity_check` | reference | Reject multifunction equipment and missing required qualifiers; confirm mass normalization and exact flow identity. | `un-cpc-3-0-structure-2025`; `epa-imaging-equipment-v3-1` |
| `inventory_check` | inventory | Require every applicable row, its collection record and unit conversion. Blank UUID is an explicit identity gap, not permission to omit the exchange. Check BOM completeness, packaging separation, positive accepted mass and reconciled totals. |  |
| `boundary_check` | dataset | Block complete-life-cycle claims from this manufacturing-only module. Upstream dataset gaps and exclusions must remain visible. | `ghg-protocol-product-standard-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Model-specific manufacturing contribution; cradle-to-gate only with complete upstream links |
| excluded_use | Standalone full-life-cycle or scanner service comparison; proxy for multifunction printers |
| required_metadata | Required qualifiers; supplier boundaries; period; geography; production weighting; allocation |
| required_quality_disclosure | UUID gaps; upstream gaps; exclusions; measurement uncertainty; range evidence limitations |
| update_trigger | Model, BOM, sensor, supplier, site, test programme or packaging change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | UN Statistics Division, CPC 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-08 | Classification identity; row 45262 |
| `epa-imaging-equipment-v3-1` | `standard` | US EPA, ENERGY STAR Imaging Equipment, Version 3.1; https://www.energystar.gov/sites/default/files/asset/document/ENERGY%20STAR%20Version%203.1%20Imaging%20Equipment%20Specification_0.pdf; retrieved 2026-09-08 | Eligibility criteria section 1: scanner and multifunction definitions; no numerical efficiency limit adopted |
| `ghg-protocol-product-standard-2011` | `standard` | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-09-08 | Chapters 7–9: partial boundary disclosure, data quality and allocation hierarchy; adapted for this manufacturing module |
| `epson-gts55-scanner-parts` | `handbook` | Epson GT-S55/GT-S85 User Guide, Scanner Parts; https://files.support.epson.com/htmldocs/gts55_/gts55_ug/parts_1.htm; retrieved 2026-09-08 | Physical inspection checklist for cover, feed roller, DC inlet and USB connector; not a bill of materials or quantity source |
| `epson-v19-v39-scanner-parts` | `handbook` | Epson V19/V39 Scanner Parts; https://files.support.epson.com/docid/cpd6/cpd62790/source/scanners/source/product_info/references/v19_v39/v19_v39_parts.html; retrieved 2026-09-08 | Flatbed glass, carriage and USB port; route-specific physical inspection |
