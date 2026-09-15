---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.units-performing-two-or-more-of-the-following-functions-printing-scanning-copying-faxing
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Units performing two or more of the following functions: printing, scanning, copying, faxing

## 1. Scope and Applicability

This PCR covers integrated document-imaging equipment providing at least two of printing, scanning, copying and faxing, in its tested saleable factory-gate state. Physically separate components qualify only if sold as one functionally integrated device. Exclude standalone single-function equipment, loose replacement parts and printing services. The distinction follows `un-cpc-3-0-structure-2025` and the historical product definition in `epa-imaging-equipment-v1-2`; the latter is not a claim of current certification eligibility.

The foreground route starts with purchased finished components and ends after assembly, firmware configuration, functional testing and packing. The method requires a non-overlapping bill of materials, separate test consumables, and reconciliation of rework and rejects. These requirements are specific to multifunction imaging equipment and justify a material PCR. This is a production dataset; it does not establish equal service from devices with different throughput, durability or functions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.units-performing-two-or-more-of-the-following-functions-printing-scanning-copying-faxing |
| classification_refs | CPC 3.0: 45266; `un-cpc-3-0-structure-2025` |
| covered_products | Functionally integrated multifunction document-imaging equipment |
| excluded_products | Single-function standalone machines; loose parts; printing services |
| representative_product | Assembled multifunction printer with document scanning and copying |
| production_route | Purchased-component assembly, configuration, testing and packing; disclose inkjet or electrophotographic technology |
| market_state | Tested new device at factory gate; declared starter-cartridge and accessory configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a tested multifunction document-imaging device |
| How much | 1 kg of saleable device; disclose measured kg per device and device count |
| How well | Pass model-specific tests for each declared function; disclose print speed, image resolution, colour capability, media size, duplexing and connectivity |
| How long or cycle | One completed production cycle; no assumed service lifetime. Service comparison requires a separate declared lifetime, page workload and operating-mode schedule |
| reference_flow_link | `reference_product`; device count equals reference mass divided by measured net device mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Units performing two or more of the following functions: printing, scanning, copying, faxing `3389a683-0d35-45b8-8b91-25cc03fab92c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; function combination; marking technology; new or refurbished state; production site and year; device net mass; included cartridge and accessory masses; print speed; resolution; media size; colour capability; duplexing; network configuration; test acceptance criteria |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `device_mass` | reference product | Mass | kg | Weigh the configured device including installed starter cartridges; exclude external packaging. Report separately any external accessories included in delivery. Do not infer mass from retail shipping weight. |
| `electricity_units` | assembly and test electricity | Net calorific value | MJ | Preserve metered electrical energy; convert kWh to MJ using 3.6. Do not treat electricity as a fuel mass or add upstream generation emissions as direct site emissions. |
| `cartridge_balance` | cartridges and test consumption | Mass | kg | Record incoming cartridge gross mass and delivered residual fill. Test ink or toner already withdrawn from those cartridges is not a second material input. Reconcile depletion, waste and delivered mass. |
| `paper_mass` | test paper | Mass | kg | Use measured paper mass or sheet count times measured sheet area times grammage. Distinguish sheets from printed sides and retain duplex information. |

## 5. System Boundary

1. Include all site assembly and test inputs, packaging, actual rejects and attributable electricity. Require upstream datasets for every purchased component; supplier fabrication is upstream rather than an unrecorded zero burden. The BOM collection protocol defines this foreground boundary.
2. Exclude customer operation, maintenance, distribution after the gate and final device disposal from the production result. A life-cycle extension must report these modules separately with workload, lifetime, geography, operating-mode energy and cartridge replacement records; the operating-mode distinction is supported by `epa-imaging-equipment-v1-2`.
3. Component cards represent disjoint purchased articles. A print-engine module must exclude any housing, chassis, board, power supply or cable already entered separately. Add a separately identified atomic exchange for every additional BOM item or actual site chemical, waste or emission; the common inventory is not permission to omit site-specific exchanges.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished components received at the assembly site |
| starting_condition_role | Foreground assembly input boundary |
| product_classification_scope | Integrated multifunction imaging device, CPC 3.0 45266 |
| recursive_input_rule | If a complete multifunction device enters for refurbishment, record it once as an input with prior-life burden convention; do not recursively expand identical device assembly without an explicit upstream dataset. Report refurbishment as a separate route |
| upstream_dataset_requirement | Supplier-specific or justified secondary datasets for components, cartridges, packaging and electricity with matching delivery state and geography |
| disclosure | BOM coverage; subcontracting; inbound transport treatment; device configuration; upstream dataset gaps; excluded life-cycle modules; refurbished input convention |

## 6. Process Inventory Structure

HP’s model-specific teardown identifies the scanner assembly, case, chassis, main circuit assembly, internal cables and power supply (`hp-officejet-9010-disassembly`). Use it as a decomposition example, and verify the actual model BOM; it establishes neither universal materials nor mass shares.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly_test | Assembly, configuration, testing and packing | required | All covered production datasets | foreground production | 1 kg saleable device |

### Process: Assembly, configuration, testing and packing (`assembly_test`)

#### Inputs

##### Product flows

###### ABS printer housing (`housing`)

Where a finished ABS housing is purchased separately; other polymers require separate specific rows.

- Selected flow: ABS printer housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where a finished ABS housing is purchased separately; other polymers require separate specific rows.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### Steel printer chassis (`chassis`)

Where a steel chassis is purchased separately from the print engine.

- Selected flow: Steel printer chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where a steel chassis is purchased separately from the print engine.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### Populated printer control circuit board (`board`)

Where a populated control board is purchased separately; exclude boards embedded in recorded modules.

- Selected flow: Populated printer control circuit board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where a populated control board is purchased separately; exclude boards embedded in recorded modules.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### Document-scanner module (`scanner`)

Where a document-scanner module is installed; exclude standalone scanner devices.

- Selected flow: Document-scanner module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where a document-scanner module is installed; exclude standalone scanner devices.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### Printer print-engine assembly (`engine`)

Where a complete print-engine assembly is purchased; declare marking technology and embedded parts; do not duplicate separately recorded components.

- Selected flow: Printer print-engine assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where a complete print-engine assembly is purchased; declare marking technology and embedded parts; do not duplicate separately recorded components.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### Printer power supply unit (`psu`)

Where a printer power supply is purchased separately from recorded modules.

- Selected flow: Printer power supply unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where a printer power supply is purchased separately from recorded modules.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### Insulated copper power cable (`cable`)

Where a copper power cable crosses the boundary separately; record insulation and termination state.

- Selected flow: Insulated copper power cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where a copper power cable crosses the boundary separately; record insulation and termination state.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### corrugated board boxes (`box`)

Where a corrugated shipping box is supplied; exclude the device mass and record delivered box output separately.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where a corrugated shipping box is supplied; exclude the device mass and record delivered box output separately.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### Uncoated printing paper (`paper`)

Where new uncoated paper is consumed in function tests; reused originals are not repeatedly entered.

- Selected flow: Uncoated printing paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where new uncoated paper is consumed in function tests; reused originals are not repeatedly entered.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### Filled black toner cartridge (`toner`)

Where the model uses a black toner cartridge; record gross issues and residual fill after testing; colour cartridges require individual added rows.

- Selected flow: Filled black toner cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where the model uses a black toner cartridge; record gross issues and residual fill after testing; colour cartridges require individual added rows.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### Filled black ink cartridge (`ink`)

Where the model uses a black ink cartridge; record gross issues and residual fill after testing; colour cartridges require individual added rows.

- Selected flow: Filled black ink cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where the model uses a black ink cartridge; record gross issues and residual fill after testing; colour cartridges require individual added rows.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom`


###### Electricity (`electricity`)

All attributable assembly, configuration, test and packing electricity, including common loads allocated by cp_energy.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Inclusion condition: All attributable assembly, configuration, test and packing electricity, including common loads allocated by cp_energy.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`


#### Outputs

##### Product flows

###### Units performing two or more of the following functions: printing, scanning, copying, faxing (`reference_product`)

Accepted configured device mass excluding external packaging; include installed cartridge residuals.

- Selected flow: Units performing two or more of the following functions: printing, scanning, copying, faxing `3389a683-0d35-45b8-8b91-25cc03fab92c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Accepted configured device mass excluding external packaging; include installed cartridge residuals.
- Amount rule: Accepted device mass normalized to 1 kg; retain actual batch mass and count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output`


###### corrugated board boxes (`delivered_box`)

Delivered corrugated box mass as accompanying packaging; no co-product allocation or credit.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Delivered corrugated box mass as accompanying packaging; no co-product allocation or credit.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output`


##### Waste flows

###### Discarded printed test paper (`waste_paper`)

Where printed test sheets leave the site as segregated paper waste.

- Selected flow: Discarded printed test paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where printed test sheets leave the site as segregated paper waste.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output`


###### Discarded multifunction printer (`reject`)

Where a terminal rejected complete device leaves for treatment; internal repair and rework are not external waste outputs.

- Selected flow: Discarded multifunction printer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Inclusion condition: Where a terminal rejected complete device leaves for treatment; internal repair and rework are not external waste outputs.
- Amount rule: Net recorded exchange divided by accepted device mass for the same period; apply normalize.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted configured device, excluding external packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output`


## 7. Allocation and Co-product Handling

1. Apply the BOM and meter protocol to subdivide model-specific assembly and testing before allocating common resources. Allocate shared electricity by measured station energy or documented machine-time and power observations; disclose the driver and denominator. Do not divide a device's manufacturing burden among its functions and then add it again for each function.
2. Record rejects and external waste treatment without an automatic avoided-virgin-material credit. Internal rework remains in the same batch balance; only terminal saleable output enters the normalization denominator. Report any alternative recycling allocation separately with the selected downstream method.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_bom | assembly_test | component, consumable and packaging exchanges | BOM and stock records | model; part number; material; quantity issued; returns; opening and closing stocks; component mass; supplier boundary; included subparts | Reconcile weighed BOM with warehouse issues and supplier invoices; retain cartridge residual-fill measurements | kg | each model and batch | Complete declared production period including rework | Assembly site and attributable subcontracted operations | Net issues divided by accepted device mass; exclude embedded duplicates | Scale calibration; BOM revision; invoices; signed stock reconciliation |
| cp_energy | assembly_test | electricity | submeter records | meter start and end; unit; station; model; time; grid region; voltage; shared-load allocation | Meter assembly and all function tests; document allocation where direct submetering is unavailable | MJ or kWh | each batch or shift | Same period as accepted output | Assembly and test stations plus attributable common loads | Sum allocated energy divided by accepted device mass | Meter calibration and station-time logs |
| cp_output | assembly_test | saleable device and waste | acceptance and waste records | serial count; configured net mass; tested functions; failed count; rework transfers; waste type and mass; destination | Weigh accepted devices and separate waste consignments; reconcile acceptance logs and waste transfer records | kg | each batch and consignment | Same period as input records | Assembly site gate | Sum terminal outputs by exchange; normalize by accepted device mass | Test reports; weighbridge tickets; waste manifests; mass reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | inventory | q_i = period net exchange_i / period accepted net device mass; exclude recovered internal rework from terminal outputs | cp_bom; cp_energy; cp_output | kg or MJ per kg device | |
| device_conversion | count reporting | device count = accepted device mass / measured configured mass per device; separate models before averaging | cp_output | count accompanying mass-based dataset | |
| mass_reconcile | material balance | Opening stock + receipts = closing stock + accepted device mass + external packaging output + waste outputs + documented losses; avoid counting embedded cartridges twice | cp_bom; cp_output | Signed balance with investigated discrepancy | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | reference product | Document each supported function and test outcome; retain model, technology and installed options | Product specification and acceptance test records; `epa-imaging-equipment-v1-2` |
| completeness | inventory | Reconcile complete disjoint BOM and waste ledger. Record any additional material as an individual exchange; missing data must not become a zero | cp_bom and cp_output |
| representation | upstream and energy | Record data year, geography, technology, supplier state, allocation and dataset boundary; explain substitutions | Supplier and meter records |
| uncertainty | amounts | Use foreground uncertainty and measured variability; do not infer an empirical range from one device or from an energy-efficiency limit | Calibration records, batch variability and uncertainty disclosure |

## 9. Validation Rules

1. Reject a reference definition missing its function combination, device configuration or kg-per-device conversion. Confirm that the selected device satisfies at least two functions under `un-cpc-3-0-structure-2025`.
2. Check complete BOM coverage, absence of duplicated subassemblies, cartridge depletion balance, positive accepted output and reconciliation of rework. Investigate balance residuals against documented measurement uncertainty; no arbitrary percentage tolerance is prescribed.
3. Require each inventory row's flow type, property and unit to agree with its selected identity. Missing flow identity or upstream dataset coverage must be disclosed and resolved before claiming complete database-linked coverage.
4. Check that all records share the declared production period and boundary; factory-gate results must not be advertised as whole-life or equal-service comparisons without the separate service scenario.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset for configured multifunction-device supply; process and lifecyclemodel projections of the foreground data package |
| allowed_use | Factory-gate production modelling with compatible device configuration and upstream coverage |
| excluded_use | Whole-life environmental claims without use and end-of-life modules; automatic function-by-function comparison; single-function machine substitution |
| required_metadata | model; functions; technology; kg per device; cartridge configuration; site; year; BOM coverage; allocation; upstream dataset links |
| required_quality_disclosure | missing flows; unresolved identities; meter coverage; uncertainty; upstream proxies; exclusions; material balance |
| update_trigger | BOM, technology, site, electricity mix, cartridge configuration or test-protocol change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations, CPC Version 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; retrieved 2026-09-09 | Verified row 45266; classification identity and scope |
| epa-imaging-equipment-v1-2 | standard | US EPA, ENERGY STAR Product Specification for Imaging Equipment, Version 1.2, definition 1.A.5 and operating-mode definitions; https://www.energystar.gov/sites/default/files/Imaging_Equipment_Program_Requirements%20v1_2.pdf ; retrieved 2026-09-09 | Historical functional-integration definition and operating-mode distinctions; no current certification claim or empirical amount range |
| hp-officejet-9010-disassembly | handbook | HP, Product End-of-Life Disassembly Instructions, OfficeJet Pro 9010 and Premier/9019, document c07585754, sections 1 and 3; https://www8.hp.com/h20195/v2/GetDocument.aspx?docname=c07585754 ; retrieved 2026-09-09 | Verified component locations and disassembly sequence support illustrative scanner, chassis, board, cartridge and power-supply decomposition; model-specific quantities are not category amounts |
