---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.inkjet-printers-used-with-data-processing-machines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Inkjet printers used with data processing machines


## 1. Scope and Applicability

This PCR describes new, computer-connected, single-function inkjet printers that deposit liquid ink droplets on print media. Thermal and piezoelectric designs share one methodology; declare the actual technology. Multifunction printer/scanner/copier/fax units, laser and impact printers, industrial printing presses, standalone copying machines, cartridges sold alone and remanufacturing are outside this production route. Sources: `un-cpc-3-0-structure-2025`, `epa-energy-star-imaging-equipment-3-2`.

The foreground is purchased-component assembly, priming, functional testing and packing at the factory gate. This is a production module for downstream life-cycle modelling. The component inventory is a representative starting set, not an exemption from collecting the complete product bill of materials. The protocol requires additional atomic exchanges for actual feed rollers, belts, harnesses, fasteners, ink containers, absorbent pads, cushioning and rejected components when not already included in a documented purchased assembly. Never assign the unaccounted remainder to an unspecified-material flow.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.inkjet-printers-used-with-data-processing-machines |
| classification_refs | CPC 3.0: 45263 (`un-cpc-3-0-structure-2025`) |
| covered_products | New single-function computer-connected inkjet printers |
| excluded_products | Multifunction devices; non-inkjet printers; standalone presses; consumables alone; remanufactured printers |
| representative_product | A declared model with purchased housing, chassis, controller, printhead, motor and power supply |
| production_route | Purchased-component assembly and testing, then packing |
| market_state | Accepted new printer at factory gate, including declared supplied ink and accessories; packaging separately quantified |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the production inventory of a printer accepting electronic input and producing specified printed output |
| How much | Declared production unit: 1 kg net configured printer; one printer equals its measured net mass m kg |
| How well | Declare model, media format, resolution, colour capability, duplexing and acceptance test; mass alone does not establish functional equivalence |
| How long or cycle | One declared production reporting period. A downstream service comparison must independently declare lifetime, page count, print coverage and duty cycle |
| reference_flow_link | All production amounts divided by accepted net printer output Q kg; multiply by m for one printer. This is not a lifetime printing-service functional unit |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Inkjet printers used with data processing machines `02f03b13-dc7c-4249-be05-1a895cc160b6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; single-function status; inkjet technology; supplied configuration; net mass per unit; ink formulation and fill; media format; resolution; colour and duplex capability; test protocol; factory and country; reporting period; supplier boundaries; packaging mass; grid voltage and geography |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | Printer output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Exclude transport packaging from reference mass; record supplied ink and accessories consistently with component inputs. Retain count and net mass measurement. |
| `electricity_conversion` | Purchased electricity | Net calorific value | MJ | Convert measured kWh to MJ using 3.6 MJ/kWh; do not infer electricity from equipment rated power without measured time and load. |
| `ink_mass` | Ink input | Mass | kg | Use formulated ink mass; convert volume only with formulation-specific density and temperature. Account separately for shipped ink, test deposition and captured purge ink. |


## 5. System Boundary

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `production_boundary` | foreground | Include purchased component assembly, production support, priming, test rework and packing; disclose exclusions and retain upstream dataset links for each purchased flow. | `ghg-protocol-product-standard` |
| `component_boundary` | purchased_parts | Supplier datasets must include the actual supplied state: moulding for housing, forming for chassis, mounted components for the controller and fabrication for the printhead. Raw resin, sheet steel or a bare board cannot substitute for finished components. |  |
| `lifecycle_extension` | downstream_use | Distribution, customer electricity, replacement ink and paper, maintenance and end-of-life are outside this production module and must be added for a full lifecycle. Do not claim full-product footprint or service equivalence from production-only results. | `ghg-protocol-product-standard` |
| `ink_boundary` | priming_testing | Include measured factory priming and test ink. Page-yield labels do not quantify factory consumption; retained purge ink is not an air emission. | `epson-ink-yields` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished components and formulated ink received at the assembly plant |
| starting_condition_role | Foreground entry boundary |
| product_classification_scope | Computer-connected single-function inkjet printer, CPC 45263 |
| recursive_input_rule | Do not recursively expand the internal tested-printer transfer. A purchased complete printer is not a component input for this new-assembly route and requires a separate declared route review. |
| upstream_dataset_requirement | Link geographically and technologically representative supplied-component, ink, paper, electricity and packaging datasets; disclose missing suppliers and transport coverage. |
| disclosure | Declare outsourced manufacturing, onsite operations, reporting period, yield, rework, component mass closure, packaging and all omitted stages. |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `assembly_test` | Assembly, priming and testing | required | Always | Foreground production | Accepted unpacked printer mass |
| `packing` | Packing | required | Always | Factory-gate delivery | 1 kg net configured printer |

### Process: Assembly, priming and testing (`assembly_test`)

#### Inputs

##### Product flows

###### Moulded ABS printer housing (`housing`)

Housing mass from the component bill of materials; include moulding in its supplier dataset.

- Selected flow: Moulded ABS printer housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

###### Steel printer chassis (`chassis`)

Record the purchased formed chassis mass and supplier fabrication boundary; not raw steel sheet.

- Selected flow: Steel printer chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

###### Populated printer controller circuit board (`pcb`)

Record the populated controller board mass, including mounted components; exclude separately counted power supply.

- Selected flow: Populated printer controller circuit board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

###### Inkjet printhead (`head`)

Record printhead mass and thermal or piezoelectric technology. Record attached fluid-path parts in its supplied configuration.

- Selected flow: Inkjet printhead
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

###### Small electric motor (`motor`)

Record installed drive motor mass and rated power; sum identical motors without combining different identities.

- Selected flow: Small electric motor `60ce5b4c-0a5b-4ee5-9f5a-ac3d2b69681c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

###### Printer AC DC power supply (`supply`)

Record complete power supply mass and supplied cable boundary; avoid counting the same circuit board twice.

- Selected flow: Printer AC DC power supply
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

###### inkjet ink (`ink`)

Measure ink issued minus returned stock, separating shipped fill from priming and test consumption. Instantiate each formulation separately; cartridge shells are not ink mass.

- Selected flow: inkjet ink
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

###### Uncoated woodfree printing paper (`paper`)

Weigh test paper or convert sheet counts with measured sheet area and grammage. Count test reprints.

- Selected flow: paper, woodfree, uncoated `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

###### Electricity (`electricity`)

Meter assembly, firmware loading, priming, testing and allocated production support electricity; preserve grid geography and voltage.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

#### Outputs

##### Product flows

###### Tested unpacked inkjet printer (`tested_printer_out`)

Weigh accepted unpacked printers with declared supplied configuration; transfer to packing without a second upstream burden.

- Selected flow: Tested unpacked inkjet printer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

##### Waste flows

###### Waste printed test paper (`waste_paper`)

Weigh discarded test sheets including deposited ink; record receiving treatment and exclude retained test records.

- Selected flow: Waste printed test paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

###### Rejected inkjet printer for recycling (`waste_printer`)

inclusion_condition: complete assembled printers rejected and sent off site. Record mass and treatment destination; internal rework is not a waste export.

- Selected flow: Rejected inkjet printer for recycling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly_test`

### Process: Packing (`packing`)

#### Inputs

##### Product flows

###### Tested unpacked inkjet printer (`tested_printer_in`)

Use the matched assembly transfer quantity; reconcile work-in-progress inventory changes.

- Selected flow: Tested unpacked inkjet printer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`

###### Corrugated cardboard box (`box`)

Record purchased box mass per shipped unit, including packing losses; disclose cushioning separately in the complete bill of materials.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`

###### Low density polyethylene packaging film (`bag`)

inclusion_condition: LDPE protective film is used. Record film mass and thickness; resin pellets are not converted film.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`

#### Outputs

##### Product flows

###### Inkjet printers used with data processing machines (`reference_product`)

Record accepted shipped printer mass excluding transport packaging; retain item count and net mass per configured unit.

- Selected flow: Inkjet printers used with data processing machines `02f03b13-dc7c-4249-be05-1a895cc160b6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the process-period quantity under the linked protocol, reconcile stock and normalize to accepted output Q.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted net configured printer at factory gate
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | shared_operations | Subdivide directly measured operations first. Allocate remaining shared production electricity with a documented causal driver such as metered machine time; use economic allocation only if physical relationships cannot be established, and disclose sensitivity. | `ghg-protocol-product-standard` |
| `reject_burden` | rejects_rework | Retain failed-test and rework burdens in the accepted-output denominator. Internal transfer carries its upstream burden once. Waste without economic value receives no production allocation; report treatment and any recycling convention explicitly, without an automatic avoided-production credit. | `ghg-protocol-product-standard` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_assembly_test` | `assembly_test` | Each component, ink, paper, electricity, transfer and waste row | BOM, meters, batch and waste records | part identity; supplier state; quantity; stock change; net unit mass; accepted and rejected count; meter readings; test ink split; destination; time | Weigh components and outputs; reconcile purchase and issue records; read calibrated electricity meter; retain full BOM and test logs | kg; MJ | Each batch and meter interval | One declared representative reporting period including normal losses and rework | Named assembly plant and supplier interfaces | Sum net quantities by atomic identity; divide by Q; reconcile internal transfers and stock | Calibration; invoices; supplier BOM; test acceptance; waste receipts; mass closure |
| `cp_packing` | `packing` | Transfer, box, film and accepted output | Packing and dispatch records | incoming printer mass; output count and net mass; box and film mass; losses; inventory | Weigh individual packing components; reconcile dispatch count and accepted printer mass | kg | Each dispatch batch | Same reporting period as assembly | Named packing plant | Net packaging issued divided by Q; packaging excluded from Q | Scales; packing BOM; dispatch reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalization` | All exchanges | q_i = A_i / Q; Q = sum of accepted shipped net configured printer mass. Keep the same reporting period and account for inventory changes. | A_i; Q | Quantity per kg printer |  |
| `unit_conversion` | One printer | q_item = q_i × m | q_i; m | Quantity per configured printer |  |
| `paper_conversion` | Test paper | Paper kg = sheet count × area in m2 × grammage in g/m2 / 1000 | Count; area; grammage | kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `bom_closure` | Purchased assemblies | Reconcile full component mass plus shipped ink against net printer mass. Document boundaries of each assembly and add missing concrete exchanges before dataset completion; do not invent a balancing flow. | Supplier BOM and weighing records |
| `period_scope` | All rows | Retain geography, technology, measurement uncertainty and period. Distinguish measured zero, absent exchange and missing data. No unsupported external ranges are prescribed. | Linked collection protocols |
| `ink_closure` | Ink | Reconcile issued ink with shipped ink, printed test deposition, captured purge and stock change. Add separately measured discarded ink or pads when exported. | Ink balance and waste receipts |


## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity_check` | reference_flow | Reject missing model qualifiers or a multifunction/non-inkjet product. Verify reference product state, net mass and the item-to-mass conversion. | `un-cpc-3-0-structure-2025` |
| `inventory_check` | inventory | Require one atomic exchange per row, matching property and unit, a linked protocol and either verified UUID or an explicit unresolved identity. Check complete BOM, positive Q and internal transfer balance. |  |
| `boundary_check` | dataset | Reject duplicate component/upstream burdens, packaging included in net reference mass, or production-only results labelled as a full lifecycle. Record external range evidence needs without fabricated bounds. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Factory production module for the declared configuration; upstream-linked production modelling after completeness checks |
| excluded_use | Standalone comparative service claims; complete product footprints without use and end-of-life; extrapolation to multifunction or remanufactured devices |
| required_metadata | All reference qualifiers; BOM; supplier links; production period; measurement and allocation methods; boundaries |
| required_quality_disclosure | UUID gaps; omitted exchanges; upstream coverage; uncertainty; unresolved range evidence; data representativeness |
| update_trigger | Model, configuration, supplier, process, grid or packaging change; new primary evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations, CPC 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-08 | Classification identity |
| `epa-energy-star-imaging-equipment-3-2` | standard | EPA, ENERGY STAR Imaging Equipment Version 3.2 Final Specification, definitions 1.A–1.C. https://www.energystar.gov/sites/default/files/ENERGY%20STAR%20Imaging%20Equipment%20Version%203.2%20Final%20Specification.pdf; retrieved 2026-09-08 | Printer and inkjet definitions; operating-mode terminology, not empirical consumption ranges |
| `ghg-protocol-product-standard` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, chapters 7–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; retrieved 2026-09-08 | Boundary disclosure, primary data and allocation hierarchy; this partial production dataset is not a complete product carbon footprint |
| `epson-ink-yields` | handbook | Epson, Ink Yields, Initial Ink and Printhead Maintenance sections. https://epson.com/ink-yield-cartridge-info; retrieved 2026-09-08 | Distinguish initial fill, maintenance consumption and residual ink from page yield |
