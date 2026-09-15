---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.oil-filters-petrol-filters-and-air-intake-filters-for-internal-combustion-engines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Oil filters, petrol filters and air intake filters for internal combustion engines

## 1. Scope and Applicability

This PCR applies to factory production of finished oil filters, petrol filters and air-intake filters intended for internal combustion engines. It supports product-specific gate-to-gate foreground datasets for one declared filter design and production site. Upstream production of purchased materials and energy, distribution, installation, engine operation, filter replacement, and end-of-life treatment are outside the foreground process and require separate datasets when included in a study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.oil-filters-petrol-filters-and-air-intake-filters-for-internal-combustion-engines |
| classification_refs | CPC 3.0: 43915 |
| covered_products | Finished oil filters, petrol filters and air-intake filters specifically designed for internal combustion engines. |
| excluded_products | Diesel-fuel-only filters; general liquid or gas filtering machinery under CPC 43914; filter media sold separately; catalytic exhaust after-treatment devices; replacement, use and end-of-life services. |
| representative_product | One saleable filter of a declared type, design, filtration grade and delivery state. |
| production_route | Conversion and assembly of treated filter media with declared structural parts, sealing or bonding compounds and sale packaging. |
| market_state | Finished, quality-released and packaged at the manufacturing gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished oil filter, petrol filter or air-intake filter for an internal combustion engine. |
| How much | 1 kg net mass of quality-released finished filter, excluding tertiary transport packaging. |
| How well | Conforms to the declared product specification and the applicable performance test protocol for the selected filter type. |
| How long or cycle | One manufacturing batch or reporting-period production aggregate normalized to 1 kg of conforming output. |
| reference_flow_link | The reference product output row `reference_product` of process `filter_manufacture`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Oil filters, petrol filters and air intake filters for internal combustion engines `0e3e8dc9-4b71-41a8-9e9f-0a6b2938317c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | filter type; filtration medium and grade; rated flow or nominal size; applicable performance test protocol; product drawing or model; manufacturing site and geography; reporting period; net-product mass convention; packaging inclusion; quality-release state |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_mass_product_material_waste | Reference product, material inputs and solid or semi-solid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated mass records and normalize net amounts to 1 kg of conforming reference product. Do not substitute area or item counts without a documented mass conversion. |
| mu_electricity_energy | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered kWh to MJ using 1 kWh = 3.6 MJ; document meter boundary, voltage, grid geography and loss convention. |
| mu_direct_air_emission | Direct non-methane volatile organic compound release | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report measured or calculated release mass to air; exclude upstream emissions already represented in purchased-input datasets. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased treated filter paper, structural steel forms, end caps, PVC bonding or sealing compounds, electricity and corrugated boxes arrive at the factory gate. |
| starting_condition_role | These purchased exchanges cross the foreground boundary; their upstream production is represented by separate supplier datasets. |
| product_classification_scope | Finished CPC 43915 engine oil, petrol and air-intake filters only. |
| recursive_input_rule | Add each actually used material, energy carrier, auxiliary, packaging component, direct emission and waste as its own atomic exchange; do not replace them with umbrella flows. |
| upstream_dataset_requirement | Link each purchased exchange to a geographically, technologically and product-state-representative upstream dataset without importing its internal exchanges into this foreground process. |
| disclosure | Declare filter type, media, parts and compounds used, site, reporting period, rejected-product treatment, packaging boundary, and deviations from this gate-to-gate boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_required_operations | `filter_manufacture` | Include at the site all applicable dereeling, preheating, pleating, curing, cutting, clipping, retainer and end-cap preparation, assembly, compound application, final curing or cooling, quality control and sale-packaging operations. | `unido-automotive-filter-plant` |
| sb_purchased_inputs | Purchased inputs | Include the factory-gate quantities of every actually used material, auxiliary, energy and packaging component as separate exchanges; use conditional rows or add an atomic row when a listed compound or part is not applicable to the declared design. | `unido-automotive-filter-plant` |
| sb_direct_outputs | Direct outputs | Include conforming product, filter-paper offcuts, PVC waste when generated, steel scrap, cardboard packaging waste when generated, and directly released non-methane volatile organic compounds; add any other measured site waste or direct emission as a separate atomic exchange. | `unido-automotive-filter-plant` |
| sb_exclusions | Life-cycle stages | Exclude upstream production inside purchased datasets, capital goods unless material to the study, employee travel, distribution, installation, engine use, maintenance, replacement and end-of-life from the foreground process; disclose any study-level inclusion separately. |  |
| sb_type_performance | Product qualification | Use and declare the purchaser, regulatory or standard performance protocol applicable to the selected oil, petrol or air-intake filter type. Test burdens enter the inventory only when they occur within the reporting boundary. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| filter_manufacture | Engine-filter conversion, assembly, finishing, quality control and packaging | required | Always include for a finished filter dataset; retain only rows applicable to the declared design and add any missing actual atomic exchanges. | foreground production | 1 kg conforming finished filter |

### Process: Engine-filter conversion, assembly, finishing, quality control and packaging (`filter_manufacture`)

#### Inputs

##### Product flows

###### Treated filtration medium (`resin_treated_filter_paper`)

Resin-treated cellulose filter paper crosses the factory gate and is converted by pleating, curing and cutting. Record the paper grade and supplied curing state.

- Selected flow: Resin-treated cellulose filter paper
- Flow property / unit: Mass / kg
- Amount rule: Collect net issued mass minus documented return to stores, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `unido-automotive-filter-plant`

###### PVC plastisol (`pvc_plastisol`)

PVC plastisol is an atomic compound input used when the declared air-filter design binds or seals the media with plastisol. Omit this row when no plastisol is used.

- Selected flow: Polyvinyl chloride plastisol
- Flow property / unit: Mass / kg
- Amount rule: Collect batch-issued mass minus documented reusable return, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `unido-automotive-filter-plant`

###### PVC adhesive (`pvc_adhesive`)

PVC adhesive is recorded when the declared oil- or petrol-filter design uses it to bond the filter element. Omit this row when a different or no adhesive is used and record the actual compound separately.

- Selected flow: Polyvinyl chloride adhesive
- Flow property / unit: Mass / kg
- Amount rule: Collect batch-issued mass minus documented reusable return, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `unido-automotive-filter-plant`

###### Cold-rolled steel strip (`cold_rolled_steel_strip`)

Cold-rolled steel strip crosses the boundary when it is formed into clips or other declared structural parts. Record grade, coating state and thickness.

- Selected flow: Cold-rolled steel strip
- Flow property / unit: Mass / kg
- Amount rule: Collect issued mass minus documented reusable return, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `unido-automotive-filter-plant`

###### Expanded steel sheet (`expanded_steel_sheet`)

Expanded steel sheet crosses the boundary when it forms an inner or outer retainer. Record alloy, coating state, thickness and aperture specification.

- Selected flow: Expanded steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect issued mass minus documented reusable return, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `unido-automotive-filter-plant`

###### Stamped steel filter end cap (`stamped_steel_filter_end_cap`)

A stamped steel filter end cap is recorded as a purchased component when it crosses the factory gate. Record coating, dimensions and whether caps are purchased or made on site.

- Selected flow: Stamped steel filter end cap
- Flow property / unit: Mass / kg
- Amount rule: Collect accepted component mass issued to production, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `unido-automotive-filter-plant`

###### Purchased electrical energy (`electricity`)

Purchased electricity crosses the site meter boundary and powers applicable conversion, curing, assembly, finishing and quality-control operations. Keep on-site generated electricity as a separate row when applicable.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sum allocated metered kWh and convert to MJ, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `unido-automotive-filter-plant`

###### Corrugated sale box (`corrugated_board_boxes`)

Corrugated paperboard boxes cross the boundary when used as sale packaging for released filters. Exclude tertiary transport packaging outside the declared factory-gate product state.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Collect boxes issued minus reusable returns and normalize their mass to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `unido-automotive-filter-plant`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished engine filter (`reference_product`)

This is the quality-released finished filter at the factory gate and is the quantitative reference for all normalized exchanges.

- Selected flow: Oil filters, petrol filters and air intake filters for internal combustion engines `0e3e8dc9-4b71-41a8-9e9f-0a6b2938317c`
- Flow property / unit: Mass / kg
- Amount rule: Fixed at 1 kg of net conforming finished product.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Filter-paper offcuts (`filter_paper_offcuts`)

Record resin-treated cellulose filter-paper offcuts leaving production for the declared treatment route. Do not combine them with steel, PVC or general waste.

- Selected flow: Resin-treated cellulose filter-paper offcuts
- Flow property / unit: Mass / kg
- Amount rule: Collect segregated outbound mass plus documented stock change, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `unido-automotive-filter-plant`

###### PVC waste (`pvc_waste`)

Record segregated PVC compound waste arising from plastisol or PVC-adhesive use when generated. Declare whether it is cured or uncured and its treatment destination.

- Selected flow: PVC `cacd273c-d5c5-4f38-91c2-660d8a86498b`
- Flow property / unit: Mass / kg
- Amount rule: Collect segregated outbound mass plus documented stock change, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `unido-automotive-filter-plant`

###### Steel scrap (`steel_scrap`)

Record segregated steel cutting, stamping and trimming scrap leaving production. Do not net recycled scrap against purchased steel input.

- Selected flow: Steel scrap `e01acc57-fdaf-4176-89ab-6e0d85de7df4`
- Flow property / unit: Mass / kg
- Amount rule: Collect segregated outbound mass plus documented stock change, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `unido-automotive-filter-plant`

###### Cardboard packaging waste (`cardboard_packaging_waste`)

Record cardboard packaging waste generated inside the factory boundary, separate from corrugated boxes incorporated in the saleable product.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: Collect segregated outbound mass plus documented stock change, normalized to 1 kg of conforming product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `unido-automotive-filter-plant`

##### Elementary flows

###### Direct NMVOC release to air (`nmvoc_to_air`)

Record non-methane volatile organic compounds directly released from compound application and curing within the foreground site. Use measured exhaust mass or a documented compound mass balance and exclude upstream releases.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate direct release from measured exhaust or site compound mass balance, normalized to 1 kg of conforming product.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg conforming finished filter
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_direct_measurement | Process lines and meters | Prefer direct product-line measurement or submetering. Assign exclusively used inputs and outputs directly to the declared filter product. |  |
| al_mass_shared_operations | Shared conversion and assembly operations | When direct measurement is unavailable, allocate homogeneous shared-operation inputs and outputs by conforming product mass only after documenting that mass is a defensible driver. |  |
| al_causal_shared_energy | Shared curing, ventilation and quality-control energy | Use a causal driver such as equipment runtime multiplied by rated or measured load; use mass only when no better causal driver exists and disclose the sensitivity. |  |
| al_scrap_no_credit | Recyclable scrap and packaging waste | Report waste mass at the foreground boundary without avoided-burden credit. Any recycling credit or substitution belongs to the downstream study and must be disclosed separately. |  |
| al_rework | Internal rework | Keep material returned to the same production system inside the boundary; count only additional energy, losses and final outbound waste, preventing double counting of the reworked mass. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material_inputs | filter_manufacture | Each atomic material, component and sale-packaging input | inventory issue, purchase, batch or weigh record | item identity; grade or specification; opening stock; receipts; closing stock; return to stores; issued mass; lot; product family | Reconcile stores and batch records; convert item counts or area only with documented measured mass factors. | kg | Each batch with monthly reconciliation | At least one representative continuous 12-month period or the full production campaign | Declared manufacturing site and product line | Sum net consumed mass attributable to the declared product, then divide by conforming output mass. | Calibrated scale records, ERP extracts, invoices, bills of material and stock reconciliation. |
| cp_electricity | filter_manufacture | Purchased electricity | revenue meter, submeter or equipment energy log | meter identifiers; opening and closing readings; kWh; voltage; grid supplier; equipment runtime; allocation driver | Prefer product-line submetering; otherwise allocate site meter consumption with documented causal drivers. | kWh | Meter interval or monthly | Same period as product output | Declared site and included equipment | Sum attributable kWh, multiply by 3.6, and divide by conforming output mass. | Meter calibration, bills, submeter logs and allocation worksheet. |
| cp_product_output | filter_manufacture | Conforming product and rejected output | production and quality-release record | filter type; model; batch; gross output; rejected mass; rework; released net mass; packaging convention | Reconcile production totals with quality-release and weigh records. | kg | Each batch | Same period as inputs | Declared site and product line | Sum only quality-released net product mass under the declared packaging convention. | Quality release, calibrated scale records and production ledger. |
| cp_waste_outputs | filter_manufacture | Each segregated waste output | waste weigh ticket, container log and stock record | waste identity; contamination or curing state; treatment destination; opening stock; generated estimate; outbound mass; closing stock | Weigh each segregated stream and reconcile temporary storage stock change. | kg | Each shipment with monthly stock reconciliation | Same period as inputs | Declared site and included operations | outbound mass + closing stock - opening stock, divided by conforming output mass. | Weigh tickets, contractor receipts, container logs and stock reconciliation. |
| cp_direct_air_emissions | filter_manufacture | Direct NMVOC release to air | stack or workplace exhaust test and compound mass-balance record | compound input; VOC fraction; retained mass; captured mass; destroyed mass; exhaust flow; concentration; test duration | Prefer representative measured exhaust mass; otherwise use a documented site-specific compound mass balance. | kg | Representative test plus reporting-period reconciliation | Same period as compound use and product output | Declared site emission points serving included operations | Sum uncaptured direct release and divide by conforming output mass; do not include upstream emissions. | Laboratory report, sampling method, flow calibration, safety data and mass-balance worksheet. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_material_intensity | Atomic material and packaging input rows | net consumed mass = opening stock + receipts - closing stock - return to stores; intensity = attributable net consumed mass / conforming product mass | opening stock; receipts; closing stock; return to stores; attributable share; conforming product mass | kg input per kg reference product | `unido-automotive-filter-plant` |
| calc_electricity | Electricity row | electricity intensity = attributable metered kWh × 3.6 / conforming product mass | metered kWh; causal allocation driver; conforming product mass | MJ electricity per kg reference product |  |
| calc_waste_stock_change | Each waste row | waste generated = outbound waste + closing waste stock - opening waste stock; intensity = waste generated / conforming product mass | outbound waste; opening waste stock; closing waste stock; conforming product mass | kg waste per kg reference product |  |
| calc_nmvoc_release | Direct NMVOC row | direct release = measured exhaust mass, or compound input × VOC fraction - retained VOC - captured VOC - destroyed VOC; intensity = direct release / conforming product mass | exhaust measurement or compound input; VOC fraction; retained mass; captured mass; destroyed mass; conforming product mass | kg NMVOC to air per kg reference product |  |
| calc_mass_reconciliation | Foreground process | Reconcile total attributable material input with conforming product, outbound wastes, measured direct mass releases and documented stock change; investigate rather than force-close unexplained imbalance. | all mass inputs; product output; waste outputs; direct mass releases; stock changes | reported reconciliation and unexplained mass imbalance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_temporal | All foreground rows | Use one internally consistent representative period, normally 12 continuous months or the full campaign, and disclose shutdowns, abnormal batches and substitutions. | Dated production, meter, purchasing, waste and quality records. |
| dq_technological | Product and process | Match the declared filter type, media grade, structural design, bonding route, curing equipment and performance protocol. | Product drawing, bill of materials, work instructions and test declaration. |
| dq_geographical | Site and purchased inputs | Declare manufacturing geography, electricity supply region and supplier geography for material links. | Site metadata, utility contract and supplier records. |
| dq_completeness | Inventory | Reconcile all listed applicable atomic rows and add actual omitted materials, auxiliaries, energy carriers, wastes and direct emissions separately; justify zero or non-applicable rows. | Signed completeness checklist and mass/energy reconciliation. |
| dq_measurement | Quantitative records | Document instruments, calibration, conversions, allocation drivers and uncertainty or data gaps. | Calibration certificates, conversion worksheet and allocation file. |
| dq_identity | UUID-bearing exchanges | Preserve the audited TianGong base name, flow type, classification, property and unit group; keep unresolved UUIDs empty rather than adopting a proxy. | Finalized hybrid-search receipts and public state-100 direct reads. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_reference | Reference product | Require exactly one `reference_product` output fixed at 1 kg with the confirmed CPC 43915 product-flow UUID and mass unit group. | `un-cpc-3-0-structure-2025` |
| val_inventory_accounting | Inventory | Require every applicable actual exchange to be an atomic row and require total authored rows to equal UUID-matched plus explicitly unresolved rows. |  |
| val_units | Quantities | Require mass rows in kg and electricity in MJ; verify every conversion and normalization denominator. |  |
| val_conditionals | Design-specific rows | Require PVC plastisol, PVC adhesive, each structural part and associated waste only when used or generated; replace or supplement them with the actual atomic design-specific exchange. | `unido-automotive-filter-plant` |
| val_mass_balance | Foreground process | Require a documented mass reconciliation and investigation of unexplained imbalance; do not force the balance by adding an unspecified waste or emission. |  |
| val_performance | Product declaration | Require the declared filter type and applicable performance protocol, including restriction or differential pressure and filtration-performance attributes relevant to that type. |  |
| val_ranges | External ranges | Do not apply an external numeric range unless at least two mutually independent original sources have compatible boundary, functional unit and product state; otherwise retain foreground collection and the unresolved range-evidence need. |  |
| val_bilingual | Bilingual projection | Require identical process IDs, row IDs, UUIDs, calculation and normative rule IDs, controlled tokens and row order in English and Chinese. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific gate-to-gate foreground production dataset for a finished CPC 43915 engine filter. |
| downstream_use | Link to representative upstream datasets and, when needed, downstream distribution, use, replacement and end-of-life processes in a lifecycle model. |
| allowed_use | Comparative or non-comparative LCA when filter type, performance, product state, geography, technology, reporting period and boundary are compatible and disclosed. |
| excluded_use | Unqualified proxy for diesel-only fuel filters, general filtration machinery, loose filter media, exhaust after-treatment devices, use-phase performance or cradle-to-grave results. |
| required_metadata | PCR id; filter type and model; CPC code; media and grade; rated flow or nominal size; performance protocol; site and geography; period; technology; packaging convention; UUID audit status; allocation; data gaps. |
| required_quality_disclosure | Primary-data coverage; measurement and calibration; material and mass reconciliation; causal allocations; rejected-product and rework treatment; unresolved UUIDs; unresolved range evidence; deviations. |
| update_trigger | Change in filter design, media or compound formulation, structural parts, process equipment, energy supply, site, allocation basis, performance protocol, packaging, treatment route or representative period. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 43915 product identity and separation from adjacent CPC 43914. |
| unido-automotive-filter-plant | official_guidance | United Nations Industrial Development Organization, Small and Medium Enterprises Branch, Volume IV, Automotive Filter Plant, File Q47, https://downloads.unido.org/ot/48/20/4820501/vol4.pdf | Original-text-verified conversion, assembly, curing, quality-control, packaging, material and electricity process candidates; no numeric inventory range adopted. |
