---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-printers-used-with-data-processing-machines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other printers used with data processing machines

## 1. Scope and Applicability

This PCR produces a factory assembly and acceptance-test foreground package for single-function printers connectable to a computer or network, excluding inkjet and laser technology. Impact dot-matrix, direct thermal and thermal-transfer printing share the assembly boundary but retain separate print-mechanism and test-consumable conditions. The semantic distinction is the marking mechanism and its consumables, not merely a classification leaf. Sources: `un-cpc-3-0-notes-2025`, `epson-lx350-specifications`, `zebra-zd400-specifications`.

The default is a gate-to-gate manufacturing module. It is not a complete product footprint or a printing-service comparison. Upstream component production and transport must be linked for a cradle-to-gate result; distribution, use, maintenance and end-of-life require a separately declared downstream model. In-house component fabrication requires measured additional atomic exchanges before this assembly module can represent that site.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-printers-used-with-data-processing-machines |
| classification_refs | CPC 3.0: 45265; `un-cpc-3-0-structure-2025` |
| covered_products | Connectable single-function impact and thermal printers; other marking technologies require explicit mechanism and consumable disclosure. |
| excluded_products | Inkjet printers; laser printers; multifunction printing/scanning/copying/fax devices; non-connectable stand-alone printers; additive-manufacturing machines; separate printer parts. |
| representative_product | Computer-connected impact dot-matrix printer, declared model and configuration. |
| production_route | Purchased housing, populated control board, power supply and integrated print mechanism; assembly, firmware configuration, acceptance testing and packing. |
| market_state | New, tested complete printer at factory gate; packaging separately accounted. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete printer capable of reproducing digital input on declared media. |
| How much | 1 kg net accepted printer output as a declared manufacturing unit; retain the model-specific mass per device. |
| How well | Pass documented connectivity, feed and print-quality acceptance criteria; declare resolution, printable width, speed and media compatibility. |
| How long or cycle | One manufacturing delivery cycle. Service-life duration and lifetime print throughput are not assumed and must be collected for downstream service comparisons. |
| reference_flow_link | finished_printer |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other printers used with data processing machines `ab2017fe-300f-4fa2-ab9c-10bfd897b2d7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model; marking technology; single-function/connectivity evidence; net mass per device; included power supply and starter ribbon; resolution; print width; speed and test pattern; media/coating; factory/country; reporting period; firmware; purchased-subassembly boundary. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | finished_printer | Mass | kg | Measure the declared supplied configuration; exclude shipping packaging. Device count equals net batch mass divided by measured model mass only for a homogeneous model batch. |
| electricity_unit | electricity | Net calorific value | MJ | Preserve delivered electricity; convert kWh to MJ using 3.6. Record voltage and grid mix; do not add upstream generation emissions as direct factory emissions. |
| consumable_mass | Testing consumables | Mass | kg | Convert sheets or ribbon length using measured area density or mass per length; retain cores, cartridge shells, test consumption and shipped remainder separately in the balance. |

## 5. System Boundary

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_assembly | foreground | Include receipt/issue, integration, acceptance testing, rework and packing through accepted factory-gate delivery, with test consumables and rejects. |  |
| boundary_partial | result_scope | Report gate-to-gate results as partial; disclose all linked upstream datasets and exclusions. Do not claim full-life-cycle GHG-standard conformity from this module. | ghg-protocol-product-standard |
| boundary_routes | technology | Apply only the actual mechanism and consumable route. Direct thermal paper and impact ribbon are not interchangeable. | epson-lx350-specifications; zebra-zd400-specifications; zebra-thermal-media |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished subassemblies received at the assembly site. |
| starting_condition_role | Foreground assembly input boundary. |
| product_classification_scope | CPC 3.0: 45265 |
| recursive_input_rule | A purchased complete same-category printer is an input with its own upstream dataset; do not recursively unfold this PCR or count its parts again. Disclose refurbishment separately from new manufacture. |
| upstream_dataset_requirement | Match each purchased assembly to a supplier/technology-specific production dataset, preserving its included parts and delivered state; identify gaps before claiming cradle-to-gate coverage. |
| disclosure | Make/buy split, assembly coverage, subassembly contents, transport coverage, metered activities and omitted life-cycle stages. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly | Printer assembly, test and packing | required | All covered factory assembly packages | Foreground production | 1 kg finished_printer |

The cards describe purchased atomic components for the declared assembly route, not raw-material substitutes. Reconcile the supplier and site bills of materials. Any additional housing resin, separate cable, fastener, adhesive, solvent, packaging insert or waste actually crossing the boundary must receive its own specific exchange and measured amount in the foreground package. No residual “other materials” row is permitted.

### Process: Printer assembly, test and packing (`assembly`)

#### Inputs

##### Product flows

###### ABS printer housing (`housing`)

Only for a purchased moulded ABS housing; record net issues, returns and rejects.

- Selected flow: ABS printer housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Populated printer controller printed circuit board (`pcb`)

Purchased controller board including fitted components; exclude any board already in a purchased print mechanism.

- Selected flow: Populated printer controller printed circuit board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Printer switched mode power supply (`supply`)

Include internal or supplied external power supply with its integral cable; do not count it again inside another assembly.

- Selected flow: Printer switched mode power supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Dot matrix printer mechanism assembly (`mechanism`)

inclusion_condition: impact printing route. Purchased integrated chassis, printhead, drive and paper-feed mechanism; supplier bill of materials defines included parts.

- Selected flow: Dot matrix printer mechanism assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Thermal printer mechanism assembly (`thermal`)

inclusion_condition: direct thermal or thermal transfer route. Purchased integrated printhead, chassis and media-drive mechanism; identify actual technology and included parts.

- Selected flow: Thermal printer mechanism assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Electricity (`electricity`)

Meter assembly, firmware loading, testing, rework and packing electricity together; include attributable shared equipment using recorded operating time.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Printer inked ribbon cartridge (`ribbon`)

inclusion_condition: impact printer testing or supplied starter cartridge. Record cartridge mass and distinguish consumed test fraction from shipped remainder.

- Selected flow: Printer inked ribbon cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Wax thermal transfer printer ribbon (`transfer_ribbon`)

inclusion_condition: wax-ribbon thermal transfer route. Measure issued roll mass and returns, retaining formulation and core mass separately.

- Selected flow: Wax thermal transfer printer ribbon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### paper, woodfree, uncoated (`paper`)

inclusion_condition: testing on uncoated woodfree paper. Weigh paper consumed by the factory acceptance test, including repeat tests.

- Selected flow: paper, woodfree, uncoated `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Thermal printing paper (`thermal_paper`)

inclusion_condition: direct thermal testing. Measure coated paper excluding the reusable holder; record coating, roll and liner configuration.

- Selected flow: Thermal printing paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Corrugated cardboard box (`box`)

inclusion_condition: corrugated shipping box is supplied. Record box mass outside the net printer reference mass.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

#### Outputs

##### Product flows

###### Other printers used with data processing machines (`finished_printer`)

Accepted complete printer at factory gate; reference output is 1 kg net product including its declared supplied power supply and starter cartridge, excluding shipping packaging.

- Selected flow: Other printers used with data processing machines `ab2017fe-300f-4fa2-ab9c-10bfd897b2d7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

##### Waste flows

###### Waste printed paper from printer testing (`paper_waste`)

inclusion_condition: ordinary paper test waste leaves the line. Weigh separately from thermal paper, and record recipient and treatment route.

- Selected flow: Waste printed paper from printer testing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Waste thermal printed paper (`thermal_waste`)

inclusion_condition: thermal test paper is discarded. Record coating chemistry and actual disposal route independently of ordinary paper recycling.

- Selected flow: Waste thermal printed paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Spent printer ribbon cartridge (`spent_ribbon`)

inclusion_condition: a spent impact ribbon cartridge is discarded during testing. Record total discarded cartridge mass and treatment destination.

- Selected flow: Spent printer ribbon cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

###### Waste rejected printer (`reject`)

inclusion_condition: a whole printer is scrapped after failed testing. Record actual mass; reworked units that eventually pass are not waste outputs.

- Selected flow: Waste rejected printer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Use the batch exchange ledger divided by accepted net printer mass; keep route-absent flows explicitly not applicable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted printer output
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_meter | shared_activities | First subdivide using batch records and submetering. If shared electricity remains, use documented machine operating time and load; justify the physical relationship. | ghg-protocol-product-standard |
| allocation_rework | rejects | Assign failed tests and rework to accepted output of the same model cohort. Record scrap as waste with its treatment burden; do not silently claim avoided virgin-material credits. |  |
| allocation_coproduct | saleable_outputs | If saleable co-products arise, document function and physical relationship; use economic allocation only if no defensible physical relationship exists, with price period and sensitivity disclosed. | ghg-protocol-product-standard |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_assembly | assembly | Every listed exchange | Batch ledger and meter record | model, batch, dates, technology, item id, supplied contents, issues, returns, stock change, accepted count/mass, rejects, test media/ribbon, meter readings, waste recipient | Reconcile weighed issues/returns with BOM, meter logs, acceptance records and waste transfers | kg; MJ; item | Each batch and meter interval | One disclosed consecutive production period including shutdown and rework; report seasonal representativeness | One factory and identified lines | Sum attributable quantities and divide by accepted net output mass; never average batch ratios without output weighting | Calibrations, supplier declarations, BOM version, traceable logs and balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | assembly | x_i = attributable batch quantity_i / accepted net batch printer mass. Use all batches of the reporting cohort. | cp_assembly | kg/kg; MJ/kg |  |
| balance | assembly | Issued material minus returns equals shipped material plus test waste and rejects plus net work-in-progress change; investigate residuals using measurement uncertainty. Packaging and consumables must remain distinguishable from net printer mass. | cp_assembly | Reconciled batch balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | reference_flow | Keep technology, interface, model and included accessories consistent with the weighed configuration. | cp_assembly; epson-lx350-specifications; zebra-zd400-specifications |
| coverage | assembly | Account for the entire BOM without double counting purchased assembly contents. List exclusions and uncertainty; missing exchange data are not zeros. | cp_assembly |
| range_evidence | amounts | Use measured foreground values. This PCR supplies no external amount ranges; model specifications are not independent production benchmarks. | cp_assembly |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_printer | Require positive accepted output mass, a declared model mass and all reference qualifiers; reject inkjet, laser and multifunction identities. | un-cpc-3-0-notes-2025 |
| validate_atomic | inventory | Every exchange must be atomic, dimensionally consistent, traceable to cp_assembly and assigned a real UUID or an explicit unresolved identity; reject umbrella flow rows. |  |
| validate_balance | assembly | Verify stock-adjusted mass balance, electricity allocation, test-repeat coverage, and route applicability. Investigate residuals rather than forcing closure with an invented exchange. |  |
| validate_scope | result | Require explicit partial-boundary disclosure and separate upstream/downstream additions; gate-to-gate results alone cannot support a service-life comparison. | ghg-protocol-product-standard |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Model-specific factory assembly input to a documented broader life-cycle system. |
| excluded_use | Unqualified full-life-cycle footprint, generic service comparison, or substitution for inkjet/laser manufacturing. |
| required_metadata | Reference qualifiers, time, geography, model, make/buy split, upstream links, process boundary and allocation. |
| required_quality_disclosure | Unresolved identities, missing exchanges, ranges not provided, balance residuals, uncertainty and representativeness. |
| update_trigger | Model/BOM/firmware or site changes; new metering, supply data, waste routes or resolved flow identities. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UNSD CPC 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-09 | Classification identity |
| un-cpc-3-0-notes-2025 | official_guidance | UNSD CPC 3.0 Explanatory Notes, p. 247; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retrieved 2026-09-09 | Connectability and excluded printer classes |
| epson-lx350-specifications | handbook | Epson LX-350 User Guide: Printer Specifications; https://files.support.epson.com/htmldocs/lx350_/lx350_ug/html/apspe_2.htm; retrieved 2026-09-09 | Impact printer example, paper/ribbon distinction and performance qualifiers; no quantity defaults |
| zebra-zd400-specifications | handbook | Zebra ZD400 Series Desktop Printers Specification Sheet; https://www.zebra.com/us/en/products/spec-sheets/printers/desktop/zd400-series.html; retrieved 2026-09-09 | Thermal technologies, connectivity and supplied power supply; no quantity defaults |
| zebra-thermal-media | handbook | Zebra ZD421/ZD621 User Guide: Types of Thermal Media; https://docs.zebra.com/us/en/printers/desktop/zd421-and-zd621-desktop-printers-user-guide/media/types-of-thermal-media.html; retrieved 2026-09-09 | Thermal roll media and liner distinctions |
| ghg-protocol-product-standard | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard, chapters 7 and 9; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-09-09 | Partial boundary disclosure and allocation hierarchy; GHG method only, not certification of this PCR |
