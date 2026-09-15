---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stranded-wire-ropes-cables-plaited-bands-slings-and-the-like-of-iron-or-steel-not-elect-daef3066
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Stranded wire, ropes, cables, plaited bands, slings and the like, of iron or steel, not electrically insulated

## 1. Scope and Applicability

This PCR applies to non-electrically-insulated stranded wire, wire rope, cable, plaited band, sling, and like load-bearing or tension-transmitting products whose metallic wires are iron or steel. It supports factory-gate foreground data packages for products supplied in a declared construction and market state. Product-specific safety or conformity standards remain applicable and are not replaced by this PCR.

The foreground boundary begins with received steel wire and any declared core, lubricant, termination, and packing components. It includes stranding, closing or braiding, in-process lubrication, cutting, sling termination when applicable, production testing, marking, and packing. Steelmaking, wire-rod production, wire drawing, heat treatment, pickling, and metallic coating are upstream of this boundary unless separately declared and linked as foreground or upstream datasets. Electrically insulated conductors, copper or aluminium stranded products, barbed or fencing wire, chains, springs, and wire mesh are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stranded-wire-ropes-cables-plaited-bands-slings-and-the-like-of-iron-or-steel-not-elect-daef3066 |
| classification_refs | CPC 3.0: 42941 (exact classification context; mapping remains separately governed) |
| covered_products | Non-electrically-insulated iron or steel stranded wire, ropes, cables, plaited bands, slings, and like products, including bright, zinc-coated, or Zn-Al-coated wire constructions when the coating state is declared |
| excluded_products | Electrically insulated conductors; copper or aluminium stranded products; barbed or fencing wire; chains; springs; wire cloth, grill, netting, or fencing; lifting products outside the declared product specification |
| representative_product | Factory-gate steel wire rope or sling of declared construction, wire finish, core, nominal diameter, length, mass, strength grade, termination, lubricant state, and packing state |
| production_route | Received steel wire and components; stranding and closing or braiding; conditional lubrication and sling termination; production testing, marking, and packing |
| market_state | Finished, non-electrically-insulated product supplied at the factory gate, either in bulk length/coils/reels or as a fabricated sling assembly, as declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A conforming non-electrically-insulated stranded iron-or-steel wire product that transmits tensile load or provides the declared rope, cable, band, or sling function |
| How much | 1 kg net product mass, excluding separately reported transport packaging |
| How well | The declared construction, nominal diameter and length, wire finish, core type, rope or wire grade, minimum breaking-force or working-load specification where applicable, termination, lubrication state, and production-test status |
| How long or cycle | One factory-gate delivery of the declared finished product; service life and use cycles are outside this cradle-to-gate reference flow |
| reference_flow_link | The reference product output row `reference_product` from `integrated_fabrication` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product |
| Reference product flow | Stranded wire, ropes, cables, plaited bands, slings and the like, of iron or steel, not electrically insulated |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; steel or iron grade; wire finish or coating; construction and lay; core type; nominal diameter; supplied length; net product mass; rope or wire grade; declared mechanical specification; sling configuration and termination when applicable; lubricant state; production-test status; packing state; production site and geography; reporting period |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. A non-applicable qualifier must be marked explicitly rather than omitted. The reference-product UUID remains unresolved and must not be replaced with a merely similarly classified flow.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate net finished-product mass excluding separately reported reels, drums, pallets, strapping, and other transport packaging. Record the weighing basis and tare method. |
| `component_mass_consistency` | steel wire, core, terminations, lubricant, and packing inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert component receipts, issues, returns, and count-based records to kg using measured batch mass or documented supplier mass; retain the conversion record. |
| `electricity_energy_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh and convert to MJ using 1 kWh = 3.6 MJ; disclose the meter boundary and any allocated shared load. |
| `length_mass_reconciliation` | products also sold by length | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report measured net mass as the reference amount and retain supplied length and measured or declared mass per unit length as product qualifiers for reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received steel wire and separately received core, lubricant, termination, and packing components at the foreground site |
| starting_condition_role | Gate-to-gate fabrication start for the stranded product; upstream material production remains represented by linked supplier or background datasets |
| product_classification_scope | Non-electrically-insulated iron-or-steel stranded products described by the semantic boundary and referenced by CPC 3.0 code 42941 |
| recursive_input_rule | A purchased input already within this same stranded-product category is recorded as one product input with its supplier dataset and is not recursively decomposed inside this PCR; disclose its mass and processing state |
| upstream_dataset_requirement | Link geography-, technology-, grade-, and coating-representative datasets for received steel wire, core material, lubricant, termination components, packing components, and delivered electricity |
| disclosure | Declare whether wire drawing, heat treatment, pickling, coating, core manufacture, lubricant manufacture, termination manufacture, and packing manufacture occur upstream or inside another linked foreground dataset; identify exclusions and shared-meter allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground fabrication | Include stranding, closing or braiding, in-process lubrication, cutting, applicable sling termination, production testing, marking, and packing from received-component gate to finished-product factory gate. | `iso-2408-2017`; `iso-7531-1987` |
| `boundary_upstream_wire_processing` | received steel wire | Treat steelmaking, wire-rod production, wire drawing, heat treatment, pickling, and metallic coating as upstream unless their separately metered processes are intentionally brought into the study boundary; disclose and link the applicable datasets. | `eu-ferrous-metals-processing-bat-2022` |
| `boundary_no_electrical_insulation` | product identity | Exclude electrically insulated conductors and prevent classification similarity from broadening the material or insulation boundary. | `un-cpc-3-0-structure-2025` |
| `boundary_direct_exchanges` | site operations | Report all product, waste, and elementary exchanges that actually cross the declared foreground boundary; do not add upstream electricity emissions as direct site emissions. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_fabrication` | Integrated stranding, closing or braiding, finishing, testing, and packing | required | Always included for production of a finished reference product; flow-level conditions distinguish fibre-core, lubricated, sling-termination, reel-packed, and strapped variants | Foreground fabrication and factory-gate preparation | 1 kg net finished reference product |

### Process: Integrated stranding, closing or braiding, finishing, testing, and packing (`integrated_fabrication`)

#### Inputs

##### Product flows

###### Steel wire feed (`steel_wire_input`)

Received steel wire is the metallic feed assembled into strands and the finished product. Record only wire crossing the site boundary and retain grade, coating, diameter, tensile strength, and supplier-dataset qualifiers.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass / kg
- Amount rule: Measured net steel-wire mass issued to conforming production, reconciled with returns, work in progress, product, and segregated waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources: `iso-2408-2017`

###### Purchased electricity (`electricity`)

Electricity drives stranding, closing or braiding, cutting, termination equipment, test equipment, ventilation, and packing within the declared meter boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to the reporting-period production, converted from kWh and normalized to conforming net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_meter_records`
- Sources:

###### Steel-wire-rope lubricant (`rope_lubricant`)

Record lubricant applied during stranding, closing, finishing, or preservation only when the declared product or process uses it. Subtract documented recoverable returns from issued mass.

- Selected flow: Steel-wire-rope lubricant
- Flow property / unit: Mass / kg
- Amount rule: Measured lubricant issued minus measured reusable return for the production batch; zero only with documented no-lubricant construction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources: `iso-2408-2017`

###### Fibre rope core (`fibre_core`)

Record the specific fibre core supplied for a fibre-core construction. This row is not applicable to wire-strand-core, independent-wire-rope-core, or coreless products.

- Selected flow: Fibre core for steel wire rope
- Flow property / unit: Mass / kg
- Amount rule: Measured received or issued fibre-core mass incorporated in conforming product, net of returned offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources: `iso-2408-2017`

###### Aluminium termination ferrule (`aluminium_ferrule`)

Record aluminium ferrules only for ferrule-secured sling eye terminations made within the foreground boundary. Other termination materials require their own concrete rows in the produced dataset.

- Selected flow: Aluminium ferrule for steel-wire-rope eye termination
- Flow property / unit: Mass / kg
- Amount rule: Ferrule count multiplied by measured or supplier-declared mass per ferrule, reconciled with rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_component_records`
- Sources: `iso-8793-1986`

###### Steel wire-rope thimble (`steel_rope_thimble`)

Record steel thimbles only when installed in sling eyes inside the foreground boundary. Retain the thimble specification and compatibility with the declared rope diameter.

- Selected flow: Steel wire-rope thimble
- Flow property / unit: Mass / kg
- Amount rule: Thimble count multiplied by measured or supplier-declared mass per thimble, reconciled with rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_component_records`
- Sources: `iso-2262-1984`

###### Wooden cable drum or reel (`wooden_cable_drum`)

Record a wooden cable drum or reel only when it crosses the factory gate with the product. State whether it is single-use, returnable, or pooled, and apply the declared reuse allocation rule.

- Selected flow: Packing cases, boxes, crates, drums and similar packings, of wood, cable-drums of wood `39feb4f9-43da-4106-aa3c-f52afb654078`
- Flow property / unit: Mass / kg
- Amount rule: Measured allocated drum or reel mass delivered with the reporting-period product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_records`
- Sources: `iso-2408-2017`

###### Steel packing band (`steel_baling_band`)

Record steel packing band only when used to secure the supplied coil, reel, or package and delivered with the product.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass / kg
- Amount rule: Measured steel-band mass issued to shipped product, net of unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: `iso-2408-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished reference product (`reference_product`)

This output is the conforming net finished product at the factory gate. Packaging mass is reported separately and is excluded from the 1 kg reference amount.

- Selected flow: Stranded wire, ropes, cables, plaited bands, slings and the like, of iron or steel, not electrically insulated
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net finished reference product by definition after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `un-cpc-3-0-structure-2025`; `iso-2408-2017`; `iso-7531-1987`

##### Waste flows

###### Segregated waste steel wire (`waste_steel_wire`)

Record trimmed wire ends, rejected wire, and irrecoverable steel-wire offcuts leaving the foreground process as segregated waste. Do not combine contaminated composite waste with this row.

- Selected flow: Segregated waste steel wire
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-steel-wire mass leaving the process, by declared recovery or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_wire_records`
- Sources:

##### Elementary flows

No elementary-flow row is prescribed for the dry assembly boundary. If fuel combustion, coating, pickling, heat treatment, or another direct-emission operation is brought inside the declared foreground boundary, its concrete fuel, chemical, waste, and elementary exchanges must be added as separate atomic rows and supported by the applicable linked method.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared production lines and meters | Subdivide by product run, machine, or meter where records permit before applying allocation. |  |
| `allocation_shared_energy` | shared electricity and services | Allocate residual shared consumption using recorded machine operating time multiplied by rated or measured load; if unavailable, use a documented mass-throughput basis and disclose the sensitivity. |  |
| `allocation_no_avoided_scrap_credit` | waste steel wire | Report waste at the foreground boundary without an avoided-primary-steel credit. Any recycling substitution belongs to the downstream system model and must not be embedded in the foreground amount. |  |
| `allocation_reusable_packing` | returnable or pooled drums and reels | Allocate measured packing production burden over documented expected uses, include return logistics in the applicable system model, and disclose losses and the allocation denominator; do not assume reuse without records. |  |
| `allocation_no_co_product_default` | normal fabrication output | Treat the declared stranded product as the reference product and production rejects as waste. If another saleable co-product is intentionally produced, report it separately and document the physical or economic allocation selected for that dataset. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_records` | `integrated_fabrication` | steel wire, lubricant, fibre core, ferrule, and thimble inputs | purchase receipt, stores issue/return, batch traveller, component count, supplier specification | material identity; batch; quantity issued; quantity returned; unit; count; unit mass; product construction; supplier; coating or material grade | Reconcile receiving, stores, and batch records to conforming production; weigh representative count-based components when supplier mass is unavailable | kg and count | each batch; aggregate monthly | full reporting period, normally at least 12 consecutive months or the complete production campaign | all foreground lines producing the declared product | Sum net issues by concrete material and normalize to conforming net product mass; retain each material as a separate exchange | calibrated scale records; purchase documents; batch traveller; supplier certificate; reconciliation log |
| `cp_electricity_meter_records` | `integrated_fabrication` | purchased electricity | revenue meter, submeter, machine log, production log | meter start; meter end; kWh; meter boundary; downtime; machine hours; product mass; allocation key | Prefer dedicated submeters; otherwise reconcile site meter to included equipment and allocate documented shared load | kWh, converted to MJ | continuous or each shift; aggregate monthly | same reporting period as product output | included fabrication, testing, ventilation, and packing equipment | Net kWh multiplied by 3.6 and divided by conforming net product kg | meter calibration or utility invoice; reading log; allocation worksheet |
| `cp_packing_records` | `integrated_fabrication` | wooden drum and steel band delivered with product | packing bill, stores issue/return, shipment record, tare measurement, reuse register | packing identity; mass issued; mass returned; tare mass; shipment; product mass; ownership; expected uses; actual returns; losses | Weigh or use verified supplier mass; link each packing item to shipment and reuse status | kg and count | each shipment; aggregate monthly | same reporting period as product output | all factory-gate packing included in the data package | Sum single-use packing; for reusable packing apply the documented use denominator and normalize to net product kg | scale record; packing bill; shipment record; reuse ledger |
| `cp_output_batch_records` | `integrated_fabrication` | conforming finished output and qualifiers | production order, weigh ticket, test certificate, release record, packing list | product identity; construction; coating; core; diameter; length; net mass; strength grade; termination; lubrication; test status; rejects; packing state | Reconcile released output to weigh tickets and production/test records; subtract packaging tare | kg and m | each batch and shipment | full reporting period | all included production lines | Sum released net product mass; use it as the denominator for normalized inventory | calibrated scale; test certificate; release authorization; traceable batch identifier |
| `cp_waste_wire_records` | `integrated_fabrication` | segregated waste steel wire | waste container weight, transfer note, recovery receipt, batch scrap log | gross mass; tare; net mass; wire identity; contamination; source batch; destination; treatment route | Weigh segregated containers and reconcile internal scrap logs with outbound transfer records | kg | each container movement; aggregate monthly | same reporting period as product output | all included lines and trimming/termination stations | Sum net outbound waste steel wire by route and normalize to net product kg | scale record; transfer note; recovery receipt; mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | every non-reference inventory row | normalized amount = reporting-period exchange amount / reporting-period conforming net finished-product mass | exchange mass or energy; conforming net product mass | exchange per 1 kg reference product |  |
| `calc_electricity_mj` | electricity | electricity (MJ) = metered electricity (kWh) × 3.6; normalized electricity = electricity (MJ) / conforming net product mass (kg) | metered kWh; conforming net product mass | MJ/kg reference product |  |
| `calc_count_to_mass` | ferrules, thimbles, drums, or other count-recorded components | component mass = accepted component count × measured or verified supplier unit mass; reconcile rejects and returns separately | accepted count; unit mass; rejected count; returned count | kg of each concrete component |  |
| `calc_wire_mass_balance` | steel-bearing material | steel-wire input = net steel mass in conforming product + segregated waste steel wire + closing work-in-progress change + documented steel loss or other separately identified steel output | wire issues and returns; product composition; waste mass; work-in-progress | mass-balance residual and completeness finding |  |
| `calc_reusable_packing` | returnable wooden drum or reel | allocated packing mass per shipment = measured drum mass / documented expected uses, adjusted for recorded loss where the adopted system model requires it | drum mass; expected uses; return and loss records; shipped product mass | allocated kg packing per kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | product and material rows | Maintain batch-level linkage between the declared product construction and each steel-wire, core, lubricant, termination, and packing input; do not substitute a broader UUID for an unresolved exact flow. | batch traveller, supplier certificate, stores record, UUID audit status |
| `dq_mass_completeness` | reference product and steel-bearing flows | Reconcile steel-bearing inputs, product, waste, and work-in-progress; investigate and disclose the residual and excluded steel-containing exchanges. | signed mass-balance worksheet and inventory reconciliation |
| `dq_meter_coverage` | electricity | Cover all included operating, test, ventilation, and packing loads for the same temporal and site boundary as output; disclose shared-load allocation and unmetered equipment. | meter map, invoices or readings, machine logs, allocation worksheet |
| `dq_temporal_representativeness` | all foreground rows | Use the same representative reporting period, normally at least 12 consecutive months; for campaign production use the complete campaign and disclose why it is representative. | reporting-period statement and production schedule |
| `dq_conditional_rows` | core, lubricant, terminations, and packing | Mark each conditional atomic row as measured, calculated, or demonstrably not applicable for the declared product; omission without a product specification is not acceptable. | product specification, bill of materials, packing instruction, termination drawing |
| `dq_test_and_release` | reference product | Retain the applicable production-test, acceptance, marking, and release evidence for the declared product specification. | test certificate, inspection record, release authorization, marking record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_amount` | reference flow | Confirm that the reference output equals exactly 1 kg net finished product and that separately reported packaging is excluded from net product mass. |  |
| `validate_required_qualifiers` | product identity | Fail completeness when product form, material grade, wire finish, construction, core, size, supplied length, mechanical specification, termination where applicable, lubricant state, test status, packing state, site, geography, or reporting period is missing without an explicit not-applicable statement. | `iso-2408-2017`; `iso-7531-1987` |
| `validate_atomic_inventory` | process inventory | Confirm that each row is one concrete product, waste, or elementary exchange and that conditional construction variants did not create umbrella or Cartesian rows. |  |
| `validate_uuid_semantics` | Tiangong references | Confirm public state_code 100, base name, flow type, classification, property, unit group, and product state for every UUID; leave unresolved identities blank rather than selecting a proxy. |  |
| `validate_mass_balance` | steel-bearing flows | Recalculate the steel-wire mass balance and flag an unexplained residual or a missing steel-containing waste/output disclosure. |  |
| `validate_electricity_conversion` | electricity | Verify the kWh meter record, meter boundary, shared-load allocation, conversion by 3.6 MJ/kWh, and normalization denominator. |  |
| `validate_boundary_disclosure` | upstream processing | Confirm whether wire drawing, heat treatment, pickling, coating, component manufacture, and packing manufacture are upstream or separately included; verify that upstream electricity emissions are not reported as direct site emissions. | `eu-ferrous-metals-processing-bat-2022` |
| `validate_sling_components` | sling products | For fabricated slings, verify declared sling type, working-load or breaking-force basis, termination type, ferrule or thimble applicability, and production-test evidence. | `iso-7531-1987`; `iso-8793-1986`; `iso-2262-1984` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for a declared non-electrically-insulated iron-or-steel stranded wire product |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness and unresolved identities |
| allowed_use | Product-footprint, process, and lifecycle-model studies whose product construction, geography, technology, boundary, and reporting period are compatible with the declared dataset |
| excluded_use | Electrically insulated conductors; copper or aluminium stranded products; use-stage safety or service-life claims; substitution among materially different rope, cable, band, or sling constructions without adjustment; datasets that silently include upstream wire processing |
| required_metadata | canonical PCR id; product form; steel grade; wire finish; construction and lay; core; diameter; length; net mass; strength or load specification; termination; lubrication; test and release status; packing; site; geography; technology; reporting period; boundary; upstream datasets; allocation; unresolved UUIDs |
| required_quality_disclosure | coverage of material and energy records; mass-balance residual; meter coverage and shared-load allocation; count-to-mass factors; packing reuse denominator; waste routes; data gaps; exact-UUID status; source and collection-protocol versions |
| update_trigger | Change in product construction, material or coating, core, termination, lubrication, production route, equipment, energy supply, packing or reuse system, allocation method, site boundary, reporting period, applicable product standard, or resolution of a previously unresolved exact flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, code 42941, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | English classification identity and the iron-or-steel, non-electrically-insulated product boundary |
| `un-cpc-1-1-chinese-2002` | official_guidance | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, code 42941, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-05) | Verified professional Chinese product title for the unchanged classification identity |
| `iso-2408-2017` | standard | ISO 2408:2017, Steel wire ropes — Requirements, https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/06/66/66635.html (retrieved 2026-09-05) | Wire-rope scope, bright/zinc/Zn-Al product states, manufacture, testing, packing, marking, qualifiers, cores, and lubricant context |
| `iso-7531-1987` | standard | ISO 7531:1987, Wire rope slings for general purposes — Characteristics and specifications, https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/01/43/14308.html (retrieved 2026-09-05) | Sling and sling-assembly scope, type, working-load context, and manufacture |
| `iso-8793-1986` | standard | ISO 8793:1986, Steel wire ropes — Ferrule-secured eye terminations, https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/01/62/16220.html (retrieved 2026-09-05) | Conditional aluminium ferrule and eye-termination process context and quality control |
| `iso-2262-1984` | standard | ISO 2262:1984, General purpose thimbles for use with steel wire ropes — Specification, https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/00/70/7079.html (retrieved 2026-09-05) | Conditional steel thimble identity and compatibility qualifier |
| `eu-ferrous-metals-processing-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2110 of 11 October 2022 establishing BAT conclusions for the ferrous metals processing industry, https://eur-lex.europa.eu/eli/dec_impl/2022/2110/oj/eng (retrieved 2026-09-05) | Upstream wire drawing, lubricant handling, drawing dust, heat-treatment residues, and hot-dip wire coating process context used for boundary separation and disclosure |
