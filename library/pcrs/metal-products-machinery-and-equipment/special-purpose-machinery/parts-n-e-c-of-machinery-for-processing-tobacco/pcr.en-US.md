---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-n-e-c-of-machinery-for-processing-tobacco
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts n.e.c. of machinery for processing tobacco

## 1. Scope and Applicability

This rule covers the factory-gate production of an accepted, separately supplied part whose declared function is in machinery for processing tobacco. The part, its drawing or part number, material grade, compatible machine, manufacturing route, and acceptance condition must be identified. A machined alloy-steel component is the representative route; the inventory cards name its concrete exchanges. For another verified material or route within this category, the data producer must add equally specific exchanges and route records before using the dataset. The cited metal-fabrication sources establish applicable process and collection requirements, not a universal recipe or benchmark for tobacco machinery parts. [Sources: `un-cpc-3-2025-notes`, `eu-pef-2021-annex-i`, `us-epa-clean-lines-2007`, `djordjevic-2018-conveyor`]

Complete tobacco-processing machinery, food or grain machinery parts, general packaging-machine parts, tobacco itself, installation, machine operation, repair service, and part disposal are outside this product rule. A part used only for packaging is not assigned here without evidence that it is a tobacco-processing-machine part. [Source: `un-cpc-3-2025-notes`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-n-e-c-of-machinery-for-processing-tobacco |
| classification_refs | CPC 3.0 44523, parts n.e.c. of machinery for processing tobacco; classification does not determine the foreground route. |
| covered_products | Separately supplied accepted components identified for tobacco-processing machinery, including a machined metal replacement part when its machine function is documented. |
| excluded_products | Complete machines, parts of food or grain machinery, generic packaging-machine parts without the required tobacco-processing function, raw tobacco, and manufacturing services without part ownership. |
| representative_product | One accepted machined alloy-steel part, with declared drawing, grade and compatible tobacco-processing machine. |
| production_route | Incoming material and purchased components, fabrication or machining, inspection, and conditional packing at one declared facility; disclose outsourced operations. |
| market_state | Accepted finished part ready to leave the producer's gate, excluding transport packaging from its net mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of one accepted finished part for tobacco-processing machinery. |
| How much | One accepted finished unit whose net mass is M kg. |
| How well | Conforms to the declared drawing, material grade, dimensions and acceptance record. |
| How long or cycle | One production and acceptance cycle; service life is outside the factory-gate model. |
| reference_flow_link | finished_part |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Parts n.e.c. of machinery for processing tobacco `19c3afd3-63c6-43fa-8d60-03b77f0370ce` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Part description and drawing or part number; compatible processing machine and function; material grade; configuration; production route and site; acceptance state; measured net mass M; reporting period. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `one_unit_basis` | all inventory rows | As declared for each atomic flow | As declared for each atomic flow | Collect each exchange per one accepted finished unit of the same configuration; retain original meter or scale records and the allocation of shared production records. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare the material and purchased-component state at the producer's receiving gate, including grade, pre-processing, supplier and quantities. |
| starting_condition_role | Foreground part fabrication starts with received materials and components; their upstream production is represented by linked background datasets. |
| product_classification_scope | An accepted part for tobacco-processing machinery, independent of the particular CPC code assigned to its inputs. |
| recursive_input_rule | A separately purchased part in the same category is a measured product input with its own supplier dataset; stop product-category tracing at that input. |
| upstream_dataset_requirement | Link material, purchased component, electricity, packaging and waste-treatment processes to geographically and technologically appropriate upstream datasets. |
| disclosure | Report receiving state, outsourced steps, site, reporting period, route, excluded stages and any unmodelled exchange. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | foreground production | Include received inputs, on-site fabrication, machining, inspection, internal handling, conditional packing, and manufacturing waste up to the accepted part leaving the facility. | `eu-pef-2021-annex-i`; `us-epa-clean-lines-2007` |
| `boundary_upstream` | product inputs | Include upstream production and inbound transport through linked datasets; keep their quantities separate from on-site fabrication records. | `eu-pef-2021-annex-i` |
| `boundary_exclusions` | later life stages | Exclude distribution after the producer gate, installation, machine use, repair and end of life from this cradle-to-gate result, and disclose those exclusions. | `eu-pef-2021-annex-i`; `djordjevic-2018-conveyor` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `part_fabrication` | Part fabrication, inspection and dispatch preparation | required | Accepted part is manufactured at the declared producer facility. | Foreground production; oil and corrugated-box exchanges apply only when those routes are used. | One accepted finished unit of the declared configuration. |

### Process: Part fabrication, inspection and dispatch preparation (`part_fabrication`)

#### Inputs

##### Product flows

###### Alloy-steel bar input (`alloy_steel_bar`)

Record hot-rolled alloy-steel bar crossing the receiving gate for the representative machined-metal route. Use the actual grade and purchased mass; this row applies only when the part's bill of materials confirms this bar form. [Sources: `us-epa-clean-lines-2007`, `djordjevic-2018-conveyor`]

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: Measured alloy-steel bar input attributable to one accepted finished unit; include material consumed by rejected parts in the numerator and divide by accepted units only.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alloy_bar`
- Sources: `us-epa-clean-lines-2007`; `djordjevic-2018-conveyor`

###### Purchased electricity (`purchased_electricity`)

Record metered alternating-current electricity attributable to fabrication, inspection and dispatch preparation. Retain the metering boundary and any allocation from a shared meter. [Sources: `eu-pef-2021-annex-i`, `djordjevic-2018-conveyor`]

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered purchased electrical energy attributable to one accepted finished unit in MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `djordjevic-2018-conveyor`

###### Mineral-oil cutting fluid (`mineral_oil_cutting_fluid`)

Include this separate formulated-fluid input only when the declared machining route uses mineral-oil cutting fluid; record replenishment entering the process, not circulating inventory. Its exact public TianGong flow identity remains unresolved. [Source: `us-epa-clean-lines-2007`]

- Selected flow: Mineral-oil cutting fluid
- Flow property / unit: Mass / kg
- Amount rule: Measured net replenishment attributable to one accepted finished unit when wet machining with this fluid is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_fluid`
- Sources: `us-epa-clean-lines-2007`

###### Corrugated shipping box (`corrugated_box`)

Include the mass of a corrugated board box only when this accepted part is shipped in that box; identify any shared box allocation. [Source: `eu-pef-2021-annex-i`]

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured corrugated-box mass attributable to one accepted finished unit when this packaging is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_box`
- Sources: `eu-pef-2021-annex-i`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished part (`finished_part`)

The accepted part is the reference output. Record only the measured net part mass of the declared configuration, excluding transport packaging. [Source: `un-cpc-3-2025-notes`]

- Selected flow: Parts n.e.c. of machinery for processing tobacco `19c3afd3-63c6-43fa-8d60-03b77f0370ce`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025-notes`

##### Waste flows

###### Steel machining chips (`steel_machining_chips`)

Record chips removed from the alloy-steel workpiece and sent to the documented waste or recycling route. Keep contaminated and clean chips separately in the producer's records when treatment differs. [Source: `us-epa-clean-lines-2007`]

- Selected flow: Steel scrap, machining chips `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel machining-chip waste attributable to one accepted finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chips`
- Sources: `us-epa-clean-lines-2007`

###### Spent cutting oil (`spent_cutting_oil`)

Include this waste only when mineral-oil cutting fluid is consumed and a separately collected spent-oil stream leaves the site. Document treatment and any retained oil in chips. [Source: `us-epa-clean-lines-2007`]

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent cutting oil attributable to one accepted finished unit when this waste stream occurs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spent_oil`
- Sources: `us-epa-clean-lines-2007`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | part fabrication | Assign measured material, energy, packaging and waste directly to the part configuration wherever the records permit. | `eu-pef-2021-annex-i` |
| `allocation_shared` | shared equipment and meters | For a shared record, document the physical driver and accepted-unit denominator; retain the unallocated total and reconciliation before attributing the exchange to this part. | `eu-pef-2021-annex-i` |
| `allocation_scrap` | chips and spent oil | Record the outgoing waste mass and its actual treatment route; do not silently subtract a recycling credit or count the same chip mass as both retained product and waste. | `eu-pef-2021-annex-i`; `us-epa-clean-lines-2007` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `part_fabrication` | accepted reference product | acceptance and weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration or representative accepted unit | declared reporting period | production site | M = accepted net mass of one complete unit of the same configuration | scale calibration; acceptance and configuration record |
| `cp_alloy_bar` | `part_fabrication` | alloy-steel bar input | purchase and issue records | material grade; stock form; received mass; issued mass; rejected units; accepted units | Reconcile receipts and production issue weights for the declared configuration. | kg | each production lot | declared reporting period | production site | attributable alloy-steel bar mass / accepted units | supplier grade certificate; stock and batch reconciliation |
| `cp_electricity` | `part_fabrication` | purchased electricity | meter and production logs | meter boundary; MJ used; accepted units; machine operating period | Read a calibrated electricity meter and document any shared-meter attribution. | MJ | each production lot | declared reporting period | production site | attributable electricity / accepted units | meter calibration; readings and allocation log |
| `cp_cutting_fluid` | `part_fabrication` | mineral-oil cutting fluid | issue and refill log | fluid formulation; replenishment mass; accepted units; wet-machining status | Weigh or reconcile fresh fluid issued less returned unused fluid. | kg | each production lot using wet machining | declared reporting period | production site | attributable cutting-fluid replenishment / accepted units | issue records; formulation identification; inventory reconciliation |
| `cp_box` | `part_fabrication` | corrugated shipping box | packaging issue log | box specification; box mass; packed accepted units | Weigh boxes or use traceable supplier mass per box and reconcile units packed. | kg | each packing lot | declared reporting period | production site | attributable corrugated-box mass / accepted units | supplier specification; packaging issue record |
| `cp_chips` | `part_fabrication` | steel machining chips | scrap weight and dispatch log | chip mass; metal grade; contamination; accepted units; destination | Weigh collected chips and reconcile on-site stock and dispatch. | kg | each production lot | declared reporting period | production site | attributable steel-chip mass / accepted units | weighbridge ticket; scrap and destination record |
| `cp_spent_oil` | `part_fabrication` | spent cutting oil | waste storage and dispatch log | spent-oil mass; fluid identity; accepted units; treatment destination | Weigh separately collected spent oil and reconcile storage and dispatch. | kg | each waste dispatch and production lot | declared reporting period | production site | attributable spent cutting-oil mass / accepted units | waste manifest; weighing and treatment record |

### Calculation Rules

The collection protocols allocate each measured exchange directly per accepted unit. No external per-unit factor or item-to-mass conversion is imposed; the measured net mass M remains the reference quantity for that unit.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | finished part and inputs | Retain drawing, compatible machine, material grade, route, acceptance state, and supplier identity. | Approved drawing, bill of materials, acceptance and supplier records. |
| `quality_coverage` | foreground exchanges | Reconcile material input, accepted part mass, rejects, chips and other recorded waste for the same period and configuration; explain any gap. | Batch mass balance and stock reconciliation. |
| `quality_time` | meter and waste records | Use a common declared reporting period and show the allocation of shared utilities and waste to accepted units. | Dated meter, production and waste logs. |
| `quality_uncertainty` | unverified amounts and background data | Disclose estimates, missing exact flow identities, data age, geographic and technology mismatches, and excluded stages. | Data-quality statement and source documentation. |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_part` | reference output | Reject a dataset without the compatible tobacco-processing machine, part identifier, accepted configuration and measured net mass M. | `un-cpc-3-2025-notes` |
| `validate_exchange` | every inventory row | Verify direction, physical flow type, property, unit, inclusion condition, collection protocol and one accepted-unit basis; keep an unresolved UUID blank until exact identity is confirmed. | `eu-pef-2021-annex-i` |
| `validate_balance` | metal route | Reconcile recorded alloy-steel input, accepted part mass, chips, rejects and stock change without inventing a yield or scrap range. | `us-epa-clean-lines-2007` |
| `validate_waste` | conditional oil route | Include spent cutting oil only when the documented wet-machining route produces it; retain treatment evidence and avoid duplicate chip or oil accounting. | `us-epa-clean-lines-2007` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process data package for one declared accepted part configuration. |
| downstream_use | Link to a process and lifecyclemodel for factory-gate assessment of the separately supplied part. |
| allowed_use | Configuration-specific manufacturing inventory with verified product and flow identities. |
| excluded_use | A generic benchmark for all tobacco machinery parts or a use-phase and end-of-life result. |
| required_metadata | Part and machine identity; drawing; grade; route; site; period; measured M; suppliers; inclusion conditions. |
| required_quality_disclosure | Measurement records, shared-record allocation, missing or proxy background data, and unresolved cutting-fluid UUID. |
| update_trigger | Change in part configuration, material, route, site, period, supplier, flow identity or measured inventory. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-2025-notes` | official_guidance | CPC Ver. 3.0 Explanatory Notes, UNSD, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product boundary and neighbouring machinery/parts subclasses. |
| `eu-pef-2021-annex-i` | official_guidance | Annex I. Product Environmental Footprint Method, European Commission, 2021, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Manufacturing stage boundary, upstream inputs, waste and foreground data disclosure. |
| `us-epa-clean-lines-2007` | official_guidance | Clean Lines: Strategies for Reducing Your Environmental Footprint — Metal Fabrication Operations, U.S. EPA, November 2007, https://www.epa.gov/sites/default/files/2015-03/documents/fabrication.pdf | Applicable machining, chips and cutting-fluid process decomposition; no numeric benchmark adopted. |
| `djordjevic-2018-conveyor` | literature | LCA of the Manufacturing Stage of the Laboratory Belt Conveyor, FME Transactions 46(3), 2018, https://www.mas.bg.ac.rs/_media/istrazivanje/fme/vol46/3/18_m_djordjevic_et.pdf | Machinery fabrication and electricity-record method analogue; different product and no quantitative transfer. |
