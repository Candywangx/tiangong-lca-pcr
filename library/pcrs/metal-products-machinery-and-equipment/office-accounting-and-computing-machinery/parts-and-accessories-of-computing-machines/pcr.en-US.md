---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.parts-and-accessories-of-computing-machines
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Parts and accessories of computing machines

## 1. Scope and Applicability

This PCR supports foreground data packages for separately supplied computing-machine parts that do not themselves perform the function of a complete computer. The implemented routes are mechanical completion of a supplied steel chassis shell and acceptance testing of a supplied populated motherboard without CPU and BIOS ROM. These are separate product models, not co-products. The representative part is a bare steel chassis. The official classification distinguishes parts from computing machines, storage units and expansion cards (`un-cpc-3-0-structure-2025`); the two CBP rulings substantiate concrete chassis and incomplete-motherboard boundary examples (`cbp-n304809-2019`, `cbp-n025223-2008`). Their historic tariff rates and trade-agreement conclusions are not adopted.

This is an explicitly bounded final-assembly, testing and packing foreground model. Supplier fabrication, semiconductor production, PCB population, metal forming and surface treatment remain in upstream datasets; they are not burden-free exclusions. A site performing those operations must supply additional measured unit-process inventories before claiming complete coverage. Do not apply the twelve-row starting inventory unchanged to a different bill of materials. Every extra physical exchange must have its own atomic row, identity and collection record.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.parts-and-accessories-of-computing-machines |
| classification_refs | CPC 3.0 45290; classification identity source `un-cpc-3-0-structure-2025` |
| covered_products | Separately supplied computer chassis and incomplete motherboards; other solely or principally computing-machine parts require a declared product-specific inventory extension |
| excluded_products | Complete computers; functioning processing units; storage units; input/output peripherals; sound/video/network cards; bare printed circuits; integrated circuits sold separately; carrying cases; repair services |
| representative_product | Bare steel computer chassis, declared model and net mass |
| production_route | Supplied formed shell to mechanical completion, or supplied populated incomplete motherboard to acceptance testing; packing in both routes |
| market_state | New accepted part for OEM integration or replacement; no complete-computer function |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a specified computing-machine part for mechanical enclosure or declared board interface function |
| How much | 1 kg net accepted parts of one model; declare corresponding item count |
| How well | Meets the model drawing, mounting/interface requirements and documented acceptance test; unlike functions are not interchangeable |
| How long or cycle | One production and acceptance cycle to the factory gate; service life and host-computer use profile are not inferred |
| reference_flow_link | `chassis_product` is the representative output; a board-specific package uses `motherboard_product` as its sole reference and updates the concrete reference identity |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Steel computer chassis |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part model; part function; chassis or incomplete-board route; net mass per item; material composition; supplier starting state; CPU and BIOS presence; interface/drawing revision; acceptance test; production site; reporting period; packaging specification; upstream coverage; factory-gate boundary |

Declare every qualifier in the data package. Reference mass is a normalization choice, not evidence of functional equivalence. A motherboard-specific package must replace the representative chassis identity and acceptance specification with its actual board identity. A board with CPU and BIOS that has the character of a processing unit requires a separate boundary review (`cbp-n025223-2008`).

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | Reference part and material reconciliation | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net product mass; exclude packaging. Record item count and measured model-specific mass per item; do not convert across models with a generic coefficient. |
| `electrical_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered energy; 1 kWh = 3.6 MJ is an exact unit identity. Declare voltage, supply mix, site and time coverage. |
| `yield_basis` | All exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Divide batch exchanges by accepted net output of the same model and period; record rejects and rework separately so test failures remain burden-bearing. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `gate_boundary` | Product system | Use a disclosed cradle-to-gate intermediate-part inventory when the host use profile is unknown; include upstream supply, inbound logistics, assembly, testing, packaging and production-waste treatment. Exclude host use and host end of life together; disclose any separate downstream study. | `ghg-protocol-product-standard-2011` |
| `supply_link` | Purchased part inputs | Attach boundary-compatible upstream datasets to the supplied shell and populated board. An onsite activity cannot be hidden in a purchased-input label. Reconcile supplier and foreground coverage to prevent gaps or double counting. | |
| `test_boundary` | Acceptance tests | Count test-fixture electricity and rework in production. Test fixtures temporarily supplying CPU or BIOS are not shipped product inputs; consumptive replacements require their own inventory rows. | |
| `extension_completeness` | Additional operations | A real fuel, chemical, refrigerant loss, wastewater, incoming packaging waste or extra BOM component requires a separate measured atomic exchange. The representative dry finalization route assumes none without confirming site records. | |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier-produced formed and surface-finished chassis shell, or populated motherboard lacking CPU and BIOS ROM, awaiting final acceptance |
| starting_condition_role | Purchased intermediate; upstream fabrication remains linked background supply |
| product_classification_scope | Computing-machine parts; independently functioning machines and separately classified units remain outside this category |
| recursive_input_rule | Same-category input is recorded at its actual delivered state and linked once to a supplier dataset. Do not recursively instantiate this finishing process or count purchased and internally fabricated versions together. |
| upstream_dataset_requirement | Supply-specific cradle-to-delivery data covering raw materials, fabrication, yield, component manufacture and transport; if only factory-gate data exist, add inbound transport from actual shipment records |
| disclosure | Model, route, make/buy split, included tests, supplier coverage, transport endpoints, omitted exchanges with evidence and system-boundary limitations |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `chassis_completion` | Chassis mechanical completion | conditional | The declared product is a steel computer chassis assembled from a supplied shell | foreground production | 1 kg accepted net chassis |
| `board_acceptance` | Incomplete motherboard acceptance | conditional | The declared product is a supplied populated motherboard without CPU and BIOS ROM awaiting acceptance testing | foreground production | 1 kg accepted net motherboard |
| `packing` | Packing | required | Applies to the selected part model; each packaging exchange requires evidence of use | foreground packing | 1 kg accepted net part passing through packing |

Choose exactly one part route. Packing is measured separately and preserves net part identity and mass; do not add a second reference-product output or duplicate the internal transfer. The supplied shell and board routes require the upstream datasets specified in section 5.

### Process: Chassis mechanical completion (`chassis_completion`)

#### Inputs

##### Product flows

###### Chassis shell supplied for final assembly (`chassis_shell`)

Chassis route only; purchased shell incorporates the declared forming and surface treatment. Record receipt mass and supplier coverage.

- Selected flow: Formed steel computer chassis shell
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in kg and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis_materials`

###### Mechanical fastening (`screw`)

Include when steel screws are installed; reconcile issued mass, unused returns and retained mass.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in kg and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis_materials`

###### Chassis mechanical completion electricity (`chassis_electricity`)

Meter chassis mechanical completion electricity and its attributable support demand separately. Include idle and fixture demand where present; do not duplicate another process meter.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in MJ and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis_energy`

#### Outputs

##### Product flows

###### Accepted chassis output (`chassis_product`)

Chassis route only; weigh accepted net chassis and record count. This is the representative reference output, excluding packaging and complete-computer subassemblies.

- Selected flow: Steel computer chassis
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in kg and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis_output`

##### Waste flows

###### Rejected steel chassis (`steel_reject`)

Include discarded chassis from the mechanical route; exclude temporary rejects returned to the same batch. Record composition, mass and treatment destination.

- Selected flow: Steel scrap `9fe08808-a497-4b3c-8f8f-a8f6bbcae980`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in kg and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chassis_waste`

### Process: Incomplete motherboard acceptance (`board_acceptance`)

#### Inputs

##### Product flows

###### Board awaiting acceptance testing (`untested_board`)

Board route only; supplier completes PCB fabrication and component assembly. Record configuration, mass and upstream burden.

- Selected flow: Populated computer motherboard without CPU and BIOS ROM, untested
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in kg and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_board_materials`

###### Incomplete motherboard acceptance electricity (`board_electricity`)

Meter incomplete motherboard acceptance electricity and its attributable support demand separately. Include idle and fixture demand where present; do not duplicate another process meter.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in MJ and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_board_energy`

#### Outputs

##### Product flows

###### Accepted motherboard output (`motherboard_product`)

Board route only; record accepted board count and net mass. This replaces the representative reference product in a board-specific data package; never sum different part functions into one reference product.

- Selected flow: Computer motherboard without CPU and BIOS ROM, acceptance tested
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in kg and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_board_output`

##### Waste flows

###### Rejected populated board (`board_reject`)

Include irreparable populated-board rejects; retain hazardous-component and waste-transfer records. Treatment burdens belong to the product system.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in kg and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_board_waste`

### Process: Packing (`packing`)

#### Inputs

##### Product flows

###### Shipping carton (`box`)

Include when corrugated boxes are supplied with the part; weigh cartons separately from net product.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in kg and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_materials`

###### Protective polyethylene bag (`bag`)

Include only when this specific bag is used; record polymer grade, additives and mass. Electronic parts require declared electrostatic protection; ordinary LDPE is not presumed suitable.

- Selected flow: Low-density polyethylene protective bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in kg and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_materials`

###### Packing electricity (`packing_electricity`)

Meter packing electricity and its attributable support demand separately. Include idle and fixture demand where present; do not duplicate another process meter.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect the batch quantity in MJ and divide by accepted net output mass for the same model and period; preserve raw records and route applicability.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted net part of one declared model
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_energy`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `separate_models` | Shared finishing equipment | Separate routes and meter dedicated operations first. For inseparable shared demand, use a justified physical driver such as occupied test time; use economic allocation only if physical causation cannot be established and document sensitivity. | `ghg-protocol-product-standard-2011` |
| `reject_burdens` | Rework and scrap | Retain rework and rejected-part production burdens in accepted output. Record waste treatment and any recycling allocation transparently; never deduct a presumed virgin-material credit from scrap mass alone. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_chassis_materials` | `chassis_completion` | Chassis shell and steel screws | Material ledger | model, lot, item identity, quantity issued, unused returns, stock change, mass per item, supplier, route | Weigh each material separately; reconcile issue records and BOM; retain upstream and shipment records | kg | Each lot | Declared representative production period covering normal and rework operation | Actual finalization site and named suppliers | Sum consumption by atomic flow and model; divide by accepted net model output | Calibrated scales, BOM revision, delivery notes, supplier coverage and receiving checks |
| `cp_chassis_energy` | `chassis_completion` | Electricity | Meter and test logs | meter start/end, kWh, test time, fixture load, idle load, model, lot, accepted output, allocation driver | Submeter or document an engineering allocation from measured loads and times | kWh then MJ | Each batch or logged test interval | Same period as material and output records | Chassis completion and its attributable support only | Convert kWh by 3.6; reconcile submeters to main meter before model allocation and normalization | Meter calibration, load records and unallocated-energy reconciliation |
| `cp_chassis_output` | `chassis_completion` | Accepted part | Production and quality ledger | model, configuration, counts started/accepted/reworked/rejected, net mass, test criteria and outcome | Weigh accepted units and reconcile lot disposition; document temporary test fixtures | kg and item count | Each lot | Same reporting period | Final acceptance gate | Accepted mass by model is the denominator; never pool chassis and board output | Drawing, signed test acceptance, scale evidence and traceable count reconciliation |
| `cp_chassis_waste` | `chassis_completion` | Each reject stream | Waste transfer ledger | stream identity, composition, hazardous components, mass, rework return, stock, destination, treatment route | Segregate and weigh each physical waste stream; reconcile transfers and storage change | kg | Each transfer with lot attribution | Same reporting period plus documented storage lag | Site and named waste receiver | Normalize net external discard by model accepted mass; attach treatment dataset without duplicating internal rework | Weigh tickets, receiver evidence and treatment-boundary check |
| `cp_board_materials` | `board_acceptance` | Populated incomplete motherboard | Material ledger | model, lot, item identity, quantity issued, unused returns, stock change, mass per item, supplier, route | Weigh each material separately; reconcile issue records and BOM; retain upstream and shipment records | kg | Each lot | Declared representative production period covering normal and rework operation | Actual finalization site and named suppliers | Sum consumption by atomic flow and model; divide by accepted net model output | Calibrated scales, BOM revision, delivery notes, supplier coverage and receiving checks |
| `cp_board_energy` | `board_acceptance` | Electricity | Meter and test logs | meter start/end, kWh, test time, fixture load, idle load, model, lot, accepted output, allocation driver | Submeter or document an engineering allocation from measured loads and times | kWh then MJ | Each batch or logged test interval | Same period as material and output records | Board acceptance testing and its attributable support only | Convert kWh by 3.6; reconcile submeters to main meter before model allocation and normalization | Meter calibration, load records and unallocated-energy reconciliation |
| `cp_board_output` | `board_acceptance` | Accepted part | Production and quality ledger | model, configuration, counts started/accepted/reworked/rejected, net mass, test criteria and outcome | Weigh accepted units and reconcile lot disposition; document temporary test fixtures | kg and item count | Each lot | Same reporting period | Final acceptance gate | Accepted mass by model is the denominator; never pool chassis and board output | Drawing, signed test acceptance, scale evidence and traceable count reconciliation |
| `cp_board_waste` | `board_acceptance` | Each reject stream | Waste transfer ledger | stream identity, composition, hazardous components, mass, rework return, stock, destination, treatment route | Segregate and weigh each physical waste stream; reconcile transfers and storage change | kg | Each transfer with lot attribution | Same reporting period plus documented storage lag | Site and named waste receiver | Normalize net external discard by model accepted mass; attach treatment dataset without duplicating internal rework | Weigh tickets, receiver evidence and treatment-boundary check |
| `cp_packing_materials` | `packing` | Each supplied packaging component | Material ledger | model, lot, item identity, quantity issued, unused returns, stock change, mass per item, supplier, route | Weigh each material separately; reconcile issue records and BOM; retain upstream and shipment records | kg | Each lot | Declared representative production period covering normal and rework operation | Actual finalization site and named suppliers | Sum consumption by atomic flow and model; divide by accepted net model output | Calibrated scales, BOM revision, delivery notes, supplier coverage and receiving checks |
| `cp_packing_energy` | `packing` | Electricity | Meter and test logs | meter start/end, kWh, test time, fixture load, idle load, model, lot, accepted output, allocation driver | Submeter or document an engineering allocation from measured loads and times | kWh then MJ | Each batch or logged test interval | Same period as material and output records | Packing and its attributable support only | Convert kWh by 3.6; reconcile submeters to main meter before model allocation and normalization | Meter calibration, load records and unallocated-energy reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `batch_normalization` | Each atomic exchange | q_i = Q_i / M_a; M_a is accepted net mass of the same model; reject zero or unknown denominators | Measured batch exchange Q_i and accepted mass M_a | Exchange per kg accepted part | |
| `count_conversion` | Item-count receipts | M = N times measured mean item mass for the same model and lot; retain sampling and variability | Count N and measured item mass | kg | |
| `material_check` | Part material | Issued material minus unused returns equals accepted retained material plus discarded material plus net work-in-progress change; investigate residuals against documented measurement uncertainty | Material ledger, output and waste records | Reconciliation residual | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | All part models | Record function, CPU/BIOS state, material and interface revision; do not infer a complete-computer service from a part mass | BOM, drawing, acceptance record; `cbp-n304809-2019`, `cbp-n025223-2008` |
| `coverage_quality` | Supplier and site linkage | Confirm where fabrication stops and finalization starts, including freight; quantify any missing coverage before using the package as a cradle-to-gate input | Supplier dataset scope, site process map and shipment records |
| `range_quality` | Exchange amounts | Use measured foreground quantities. No universal empirical consumption or yield range is prescribed for these heterogeneous parts; retain uncertainty from meters, sampling and allocation | Raw ledgers and uncertainty calculations |
| `route_quality` | Applicability | Distinguish measured zero, evidenced absence and missing data. Additional real components, process chemicals and waste streams require separate atomic rows | Site walkthrough, BOM, purchase and waste records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `one_reference` | Reference flow | Require one eligible part model, one reference output, 1 kg net basis and all qualifiers. Never sum chassis and motherboard outputs into an interchangeable product. | |
| `ledger_validation` | Quantities | Require a positive accepted-output denominator; reconcile count, mass, rejects, rework and stock movement with documented uncertainty. | |
| `boundary_validation` | Completeness | Verify every supplier/freight/treatment link and onsite exchange; reject a cradle-to-gate claim supported only by finalization electricity and purchased-part mass. | |
| `identity_validation` | UUIDs | Adopt only exact public flow identities of the right state, type, property and unit. A blank UUID remains an explicit identity gap and never licenses a proxy or omitted exchange. | |
| `comparability` | Downstream claims | Do not use mass-normalized parts for comparative assertions without matching function, interfaces, host use and lifetime. | `ghg-protocol-product-standard-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package; a reviewed complete package may become a secondary_dataset |
| downstream_use | background_dataset input to OEM computer assembly or replacement-part lifecycle models |
| allowed_use | Model-specific declared-boundary part supply; cradle-to-gate only when upstream, freight and treatment coverage are complete |
| excluded_use | Whole-computer footprint; universal part average; cross-function comparison; unqualified full life cycle claim |
| required_metadata | Model, route, configuration, item mass, period, site, supplier datasets, freight, tests, allocation, waste treatment and reference identity |
| required_quality_disclosure | Measured coverage, gaps, unit conversion, uncertainty, non-applicability evidence and upstream boundary reconciliation |
| update_trigger | BOM, material, supplier, test protocol, process location, yield, electricity supply or boundary changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations, CPC Version 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; retrieved 2026-09-09 | Product category identity and adjacent-category separation; no amount ranges |
| `cbp-n304809-2019` | official_guidance | US CBP ruling N304809, 27 June 2019; https://rulings.cbp.gov/api/getdoc/ny/2019/N304809 | Concrete steel computer chassis boundary and declared installed-component state; no current tariff rule adopted |
| `cbp-n025223-2008` | official_guidance | US CBP ruling N025223, 24 April 2008; https://rulings.cbp.gov/api/getdoc/ny/2008/N025223 | Motherboard without CPU/BIOS versus processing-machine state; no trade-agreement or tariff rule adopted |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, sections 7.3.7 and 9.3; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; retrieved 2026-09-09 | Intermediate-product boundary disclosure and allocation hierarchy, adapted to inventory collection; not a claim of multi-impact certification |
