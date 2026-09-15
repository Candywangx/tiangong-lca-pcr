---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.laser-printers-used-with-data-processing-machines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Laser printers used with data processing machines

## 1. Scope and Applicability

This PCR produces manufacturing foreground data for new, single-function laser printers accepting digital input from data processing machines. Monochrome and colour models share this rule, with configuration-specific records. Laser exposure, toner transfer and fusing distinguish the technology; LED-only devices, inkjet printers, multifunction devices, standalone copiers and replacement cartridges sold alone are excluded. Classification identity follows `un-cpc-3-0-structure-2025`; terminology follows `epa-imaging-equipment-v3-2-2021`.

The executable foreground route begins with purchased subassemblies and ends with tested, packed printers at the factory gate. It supports upstream-linked manufacturing datasets, not a complete printing-service comparison. Integrated component manufacture must be represented by linked supplier processes or an explicitly expanded atomic inventory before the dataset claims cradle-to-gate completeness.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.laser-printers-used-with-data-processing-machines |
| classification_refs | CPC 3.0: 45264 (`un-cpc-3-0-structure-2025`) |
| covered_products | New computer-connected single-function laser printers, monochrome or colour |
| excluded_products | Inkjet, LED-only and multifunction devices; standalone copiers; consumables alone; remanufacturing |
| representative_product | A declared model of single-function laser printer, without assigning a generic model mass |
| production_route | Purchased print engine and separately supplied components; assembly, factory test and packing |
| market_state | New tested hardware with declared starter consumables, ready for dispatch |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply laser-printing hardware converting electronic images to paper output |
| How much | Declared manufacturing unit: 1 kg net printer product; disclose model-specific kg per device |
| How well | Declared resolution, monochrome/colour capability, media size, duplex function and print speed; pass model acceptance test |
| How long or cycle | One manufacturing cycle through factory release; service lifetime and page volume are not assumed |
| reference_flow_link | Row printer; multiply per-kg inventory by measured kg/device for one device; mass equivalence is not functional equivalence |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Laser printers used with data processing machines `19a06db9-33d8-4f4d-b11a-3f43e6a4b2e1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model; laser exposure technology; single-function status; colour capability; resolution; media size; print speed and test mode; duplex configuration; net kg/device; starter cartridge and toner fill; included accessories; packaging mass separately; factory and country; reporting period; purchased-component boundary |

Declare every required qualifier in the foreground package. Net product mass includes the declared supplied cartridge and accessories but excludes shipping packaging and test paper.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mass_basis | printer and subassemblies | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh each declared configuration. Convert count records using measured component or device mass; never use shipping weight for product normalization. |
| electricity_units | factory electricity | Net calorific value | MJ | Preserve meter kWh records and convert with 1 kWh = 3.6 MJ. Power in W needs elapsed hours before conversion. TEC use-stage consumption is not factory energy. |
| paper_basis | test paper | Mass | kg | Calculate paper mass from sheet count, sheet area and measured grammage; distinguish sheets from printed sides. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_factory | foreground route | Include incoming component supply burdens, inbound freight links, assembly electricity, factory testing, packing and treatment links for factory waste. Exclude downstream distribution, customer paper, replacement consumables and use electricity from this manufacturing result; disclose these exclusions. | `lexmark-m5163-lca-2024` |
| boundary_components | purchased modules | Define the print engine as one purchased electromechanical assembly. Record its included chassis, drive, fuser, optical unit and wiring on a supplier BOM. Separately supplied housing, controller, power supply and cartridge must not also be included in the engine dataset. Add individually identified extra components and packaging when the actual BOM requires them. | `epa-imaging-equipment-v3-2-2021` |
| boundary_emissions | direct emissions | Screen factory measurements for ozone or other individual releases during tests and add each actual substance separately when present. Do not represent electricity upstream emissions as direct factory emissions or interpret absent measurements as zero. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased subassemblies at the receiving gate, with supplier manufacturing and freight links |
| starting_condition_role | Foreground assembly starting point, not a burden-free cut-off |
| product_classification_scope | CPC 3.0: 45264 |
| recursive_input_rule | A purchased complete laser printer is a same-category input with its own upstream dataset, never a print-engine proxy. A rework loop is internal and must not repeat original manufacturing burdens. |
| upstream_dataset_requirement | Compatible supplier product state, included components, geography, technology and reference property; disclose unresolved links |
| disclosure | Report site operations, outsourced steps, configuration coverage, excluded life stages and missing data |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly_test_pack | Assembly, factory testing and packing | required | All modeled products | Foreground manufacturing | 1 kg net accepted printer |

### Process: Assembly, factory testing and packing (`assembly_test_pack`)

The following rows describe the purchased-module route. A conditional row is included only when that item crosses the factory boundary separately; its absence must be supported by the supplier BOM. Shared collection protocols do not merge exchanges.

#### Inputs

##### Product flows

###### Laser printer print-engine assembly (`engine`)

Purchased engine crosses the assembly boundary; weigh net withdrawals with its documented included components. Inclusion condition: All purchased-engine configurations

- Selected flow: Laser printer print-engine assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Purchased engine crosses the assembly boundary; weigh net withdrawals with its documented included components.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom`
- Inclusion condition: All purchased-engine configurations

###### Moulded ABS printer housing (`housing`)

Weigh the separately purchased finished housing, including rejects; no resin substitution. Inclusion condition: Housing supplied separately and verified as ABS; otherwise document the actual polymer component separately

- Selected flow: Moulded ABS printer housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh the separately purchased finished housing, including rejects; no resin substitution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom`
- Inclusion condition: Housing supplied separately and verified as ABS; otherwise document the actual polymer component separately

###### Populated printer-controller circuit board (`controller`)

Record net controller-board withdrawal mass; exclude boards already included in the engine. Inclusion condition: Controller supplied separately

- Selected flow: Populated printer-controller circuit board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record net controller-board withdrawal mass; exclude boards already included in the engine.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom`
- Inclusion condition: Controller supplied separately

###### Printer power-supply unit (`power_supply`)

Record the separately supplied complete power-supply mass and rating; exclude overlapping engine inventory. Inclusion condition: Power supply supplied separately

- Selected flow: Printer power-supply unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately supplied complete power-supply mass and rating; exclude overlapping engine inventory.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom`
- Inclusion condition: Power supply supplied separately

###### Laser printer toner cartridge (`cartridge`)

Record each physical cartridge with its declared toner fill and colour. Sum the same exchange over the actual configuration; distinguish shipped starter units from test-only consumption and retain stocks. Inclusion condition: Cartridge crosses the boundary separately from the engine

- Selected flow: Laser printer toner cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record each physical cartridge with its declared toner fill and colour. Sum the same exchange over the actual configuration; distinguish shipped starter units from test-only consumption and retain stocks.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom`
- Inclusion condition: Cartridge crosses the boundary separately from the engine

###### corrugated board boxes (`box`)

Record actual corrugated-box mass issued for shipping; packaging is outside net product mass. Inclusion condition: Corrugated box used for dispatch

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record actual corrugated-box mass issued for shipping; packaging is outside net product mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom`
- Inclusion condition: Corrugated box used for dispatch

###### Uncoated office printing paper (`paper`)

Measure test-paper consumption including retests; retain sheet size and grammage. Inclusion condition: Paper-output factory testing occurs

- Selected flow: Uncoated office printing paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure test-paper consumption including retests; retain sheet size and grammage.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_factory`
- Inclusion condition: Paper-output factory testing occurs

###### Electricity (`electricity`)

Meter assembly, test and packing electricity including attributable idle and retest energy; convert kWh to MJ. Inclusion condition: All configurations

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Meter assembly, test and packing electricity including attributable idle and retest energy; convert kWh to MJ.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_factory`
- Inclusion condition: All configurations

#### Outputs

##### Product flows

###### Laser printers used with data processing machines (`printer`)

Accepted net product mass divided by the same accepted net mass is 1 kg reference output; retain measured kg/device. Inclusion condition: All accepted products

- Selected flow: Laser printers used with data processing machines `19a06db9-33d8-4f4d-b11a-3f43e6a4b2e1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Accepted net product mass divided by the same accepted net mass is 1 kg reference output; retain measured kg/device.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_bom`
- Inclusion condition: All accepted products

##### Waste flows

###### Toner-printed office test-paper waste (`paper_waste`)

Weigh segregated discarded test sheets with retained toner; reconcile retained samples and paper stocks. Inclusion condition: Test sheets discarded from the factory

- Selected flow: Toner-printed office test-paper waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh segregated discarded test sheets with retained toner; reconcile retained samples and paper stocks.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Inclusion condition: Test sheets discarded from the factory

###### Rejected laser printer waste (`printer_waste`)

Weigh complete irreparable rejected printers leaving the factory; record cartridge removal and composition, excluding internal rework. Inclusion condition: Irreparable whole printer discarded

- Selected flow: Rejected laser printer waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh complete irreparable rejected printers leaving the factory; record cartridge removal and composition, excluding internal rework.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: Per 1 kg accepted net printer product
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Inclusion condition: Irreparable whole printer discarded


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_factory | shared assembly line | Use line submetering and configuration-specific withdrawals first. For inseparable shared electricity, allocate using logged equipment time multiplied by measured operating power and reconcile shares to the meter total under cp_factory. Disclose the driver and sensitivity; device mass alone is not an energy driver. |  |
| allocation_rejects | rework and waste | Charge actual reject and rework burdens to accepted production. Retain waste treatment burdens without speculative avoided-virgin-material credits. Record any saleable co-product separately and justify a specific allocation rule before using the dataset. | `lexmark-m5163-lca-2024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_bom | assembly_test_pack | component inputs and product output | BOM and scales | part number; configuration; received/issued/returned stock; component mass; accepted counts; net product mass; starter fill | Trace serial/BOM revisions to calibrated weighing and stock movements | kg; item | Each lot and BOM revision | One disclosed representative production year, or justified shorter full campaign | Declared factory and supplier modules | Net withdrawals divided by accepted net product kg; avoid nested BOM overlap | BOM; calibration; stock reconciliation |
| cp_factory | assembly_test_pack | electricity and test paper | meter and test log | kWh start/end; machine time and power; idle periods; test sheets; area; grammage; configuration; retests | Submeter line and test station; record warm-up and retest cycles; weigh paper | kWh; h; W; kg | Each shift and test campaign | Same period as cp_bom | Assembly and test stations | Sum actual attributable consumption then divide by accepted net kg | Meter calibration; power-time reconciliation; test settings |
| cp_waste | assembly_test_pack | paper and rejected printer waste | weighbridge and waste manifests | stream identity; mass; toner content; stock change; recovered/reworked status; receiver and treatment route | Weigh segregated streams and reconcile disposal documents | kg | Each dispatch and monthly reconciliation | Same period as cp_bom | Factory waste exit | Mass leaving factory divided by accepted net product kg; exclude internal rework transfer | Waste tickets; receiver records; inventory balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all rows | Q_ref = Q_attributable / M_accepted; M_accepted = sum of accepted device counts times measured net kg/device. Reference output equals 1 kg by normalization. | cp_bom; cp_factory; cp_waste | kg or MJ per kg printer |  |
| energy | electricity | E_MJ = 3.6 × metered kWh. Retain actual test duty; do not substitute weekly TEC or rated maximum power for measured factory energy. | cp_factory | MJ/kg | `epa-imaging-equipment-v3-2-2021` |
| mass_reconcile | physical materials | Reconcile net material inputs against product, segregated wastes and inventory change; explain residuals against measurement uncertainty. Packaging accompanies the shipment but is excluded from reference product mass. | cp_bom; cp_waste | documented balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | supplier data | Verify purchased assembly state and component coverage; never substitute primary polymer for a moulded housing or a complete printer for its engine. | cp_bom |
| quality_period | all activity data | Align site and reporting period; disclose sampling, missing meters, allocation, upstream proxies and unmeasured direct releases. No measured record means unknown, not zero. | cp_factory; cp_waste |
| quality_evidence | ranges and literature | Do not transfer case values across configurations. No external amount ranges are prescribed; collect primary values. The Lexmark report has inconsistent single-function/multifunction wording on page 3, so that passage is not used to define this category. | `lexmark-m5163-lca-2024` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference product | Require all reference qualifiers, positive accepted output and a measured net count-to-mass conversion. Reject multifunction or non-laser technology under this identity. | `un-cpc-3-0-structure-2025` |
| validate_inventory | inventory | Every included exchange needs an amount, unit, protocol evidence and consistent denominator. Check conditional applicability, BOM coverage, mass residuals and electricity allocation reconciliation. Unresolved flow or supplier identity must remain explicit. |  |
| validate_claim | dataset claim | A manufacturing result must not claim lifetime printing-service equivalence. A cradle-to-gate claim requires complete supplier and treatment links; omitted actual exchanges make completeness inconclusive. | `lexmark-m5163-lca-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset; process; lifecyclemodel |
| allowed_use | Manufacturing input for matching laser-printer configuration, geography and technology; service model only after adding use, consumables, distribution and end-of-life |
| excluded_use | Multifunction or inkjet manufacturing; direct service comparison per kg; certification or full lifecycle claims from this foreground inventory alone |
| required_metadata | All reference qualifiers; factory; time; BOM version; upstream supplier coverage; allocation; boundary |
| required_quality_disclosure | Measured versus estimated values; missing UUIDs and links; conditional applicability; uncertainty; excluded life stages; unresolved ranges |
| update_trigger | BOM, technology, supplier, factory, packaging, test duty or measurement method changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UN Statistics Division, CPC 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-08 | Classification identity and neighboring exclusions |
| epa-imaging-equipment-v3-2-2021 | standard | US EPA, ENERGY STAR Imaging Equipment Version 3.2, definitions 1.A, 1.B, 1.C and 1.E; https://www.energystar.gov/sites/default/files/ENERGY%20STAR%20Imaging%20Equipment%20Version%203.2%20Final%20Specification_0.pdf; retrieved 2026-09-08 | Printer, laser marking engine and operating-mode distinctions; no certification claim |
| lexmark-m5163-lca-2024 | literature | Lexmark, Life Cycle Assessment: Laser Printer M5163, issue 12/4/2024, pp. 5-6, 11-12; https://www.lexmark.com/content/dam/lexmark/documents/compliance/lca/M5163.pdf; retrieved 2026-09-08 | BOM and teardown evidence, separate hardware and consumables accounting; case-specific results are not defaults |
