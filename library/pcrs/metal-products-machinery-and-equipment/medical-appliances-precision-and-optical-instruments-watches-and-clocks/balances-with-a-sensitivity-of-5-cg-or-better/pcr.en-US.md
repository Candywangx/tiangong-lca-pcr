---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.balances-with-a-sensitivity-of-5-cg-or-better
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Balances with a sensitivity of 5 cg or better

## 1. Scope and Applicability

This PCR covers complete mechanical or electronic balances whose declared sensitivity is 5 cg (50 mg) or better, including precision and analytical laboratory balances supplied with or without weights. It applies to cradle-to-gate production of one complete, tested balance in its standard sales configuration and packaging.

The PCR excludes weighing machinery less sensitive than this threshold, loose weights, separately supplied parts or accessories, automatic industrial weighing systems, and weighing services. Use-phase electricity, maintenance, calibration services, distribution beyond the factory gate, and end-of-life are excluded unless a study explicitly extends the boundary and reports them separately. Manufacturer-specific material examples support inventory completeness but do not restrict the category to one brand or sensing technology.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.balances-with-a-sensitivity-of-5-cg-or-better |
| classification_refs | CPC 3.0: 48231, exact |
| covered_products | Complete balances with declared sensitivity of 5 cg (50 mg) or better, including precision and analytical balances, with or without weights |
| excluded_products | Less-sensitive weighing machinery; automatic industrial weighing systems; loose weights; separately supplied parts and accessories; calibration or weighing services |
| representative_product | Electronic laboratory balance with a load cell, populated control PCB, display, metal and polymer housing, weighing pan, optional draft shield, protective cover, power supply and standard protective packaging |
| production_route | Aggregated cradle-to-gate material and component supply, housing and pan fabrication where performed, electronic and mechanical assembly, adjustment, performance testing, cleaning and final packaging |
| market_state | Complete tested balance in the standard sales configuration at the factory gate; product mass excludes external shipping pallet and secondary distribution packaging unless supplied as part of the sales unit |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of the mass-weighing function by a complete high-sensitivity balance |
| How much | One complete balance in the declared standard sales configuration |
| How well | Declared sensitivity of 5 cg (50 mg) or better; maximum capacity, readability or scale interval, repeatability, accuracy class where applicable, and supplied accessories are declared |
| How long or cycle | One manufactured and accepted unit at the factory gate; no service-life performance is implied |
| reference_flow_link | `balance_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s) |
| Reference product flow | Balance with a sensitivity of 5 cg or better (Tiangong UUID unresolved) |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | sensitivity and its test basis; maximum capacity; readability or scale interval; repeatability; accuracy class and legal-metrology status where applicable; sensing principle; internal or external adjustment; product mass; included power supply, weights, draft shield and accessories; packaging configuration; manufacturing geography; reference year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | reference product and accepted output | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Normalize inventory to one accepted, complete balance. Record rejected units separately and do not count them in the denominator. |
| `component_mass_basis` | material, component, packaging and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use dry or as-delivered mass consistently as appropriate to the purchased product; disclose coatings, moisture, inserts and excluded accessories that materially affect mass balance. |
| `electricity_energy_basis` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity in its source unit, convert kWh to MJ using 1 kWh = 3.6 MJ, and disclose voltage level, grid geography and whether on-site losses are included. |
| `sensitivity_threshold` | product identity | Mass increment | cg and mg | Verify that the declared sensitivity is no worse than 5 cg; use the exact identity 5 cg = 50 mg = 0.05 g and do not substitute readability, verification scale interval or discrimination threshold without explaining the relationship. |

## 5. System Boundary

The cradle-to-gate model includes upstream production of inventoried materials, components, electricity and sales packaging plus foreground fabrication, assembly, adjustment, performance testing and packaging. Supplier processes are represented by compatible upstream datasets. Direct facility exchanges are not duplicated in supplier datasets.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Product-specific bill of materials and supplier component states at receipt, together with site utility and waste records for the manufacturing period |
| starting_condition_role | Primary foreground evidence for the aggregated cradle-to-gate manufacturing model |
| product_classification_scope | Complete balances within this PCR; separately sold parts, accessories, weights and other weighing machinery remain outside this category |
| recursive_input_rule | A same-category balance used as a test or reference instrument is capital equipment, not a consumed balance input. A balance incorporated for resale must be disclosed and represented by a separate upstream dataset rather than recursively applying this PCR inside the same foreground process. |
| upstream_dataset_requirement | Each purchased material or component requires a geographically and technologically representative upstream dataset matching composition and product state; component datasets must not double count material production already decomposed in the bill of materials. |
| disclosure | Declare foreground sites, supplier-versus-in-house fabrication split, sensing technology, product and packaging mass, sensitivity basis, included accessories, allocation choices, electricity geography, data year, cut-offs and any extended life-cycle modules. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | cradle_to_gate_model | Include upstream production of every inventoried material, component, electricity and packaging input plus foreground fabrication, assembly, adjustment, testing and packaging through the accepted factory-gate output. | `un-cpc-3-0-structure-2025`; `mettler-toledo-me-reference-manual` |
| `boundary_rule_2` | route_specific_operations | Include an in-house fabrication operation only when it is performed by the reporting site; otherwise represent the received component with a compatible supplier dataset and prevent double counting of its constituent material route. |  |
| `boundary_rule_3` | extended_modules | Report use, maintenance, calibration services, distribution and end-of-life separately when brought into scope; they are not part of this cradle-to-gate reference result. |  |
| `boundary_rule_4` | metrological_identity | Retain evidence that the output satisfies the 5 cg-or-better identity and distinguish sensitivity from discrimination, repeatability and warm-up characteristics. | `oiml-r76-1-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `balance_manufacture` | Balance material supply, fabrication, assembly, adjustment, testing and packaging | `required` | Always; route-conditioned material and waste rows are marked not applicable only with supplier or process evidence | Aggregated foreground manufacturing and cradle-to-gate compilation | One accepted complete balance at the factory gate |

### Process: Balance material supply, fabrication, assembly, adjustment, testing and packaging (`balance_manufacture`)

#### Inputs

##### Product flows

###### Stainless-steel material for pan and shield parts (`stainless_steel_input`)

Record stainless-steel sheet mass embodied in the pan and applicable shield parts, including attributable fabrication loss when that loss is not already included in the upstream component dataset.

- Selected flow: Stainless steel sheet (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: supplier bill-of-materials mass plus measured attributable fabrication input, normalized per accepted balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources: `mettler-toledo-me-reference-manual`

###### Aluminium-alloy material for housing (`aluminium_alloy_input`)

Record unwrought aluminium alloy entering the housing route, whether converted by the reporting site or attributed from a supplier bill of materials; do not add it separately when a complete housing dataset already includes the alloy burden.

- Selected flow: Aluminium alloy `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- Flow property / unit: Mass / kg
- Amount rule: verified aluminium-alloy mass attributable to one accepted balance, including route loss only once
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources: `mettler-toledo-me-reference-manual`

###### ABS granulate for moulded housing and shield parts (`abs_granulate_input`)

Record ABS granulate attributable to moulded housing or draft-shield parts. When finished parts are purchased, derive the resin mass from supplier records and do not add supplier moulding losses again.

- Selected flow: Acrylonitrile-butadiene-styrene (ABS) copolymer, granulate `8f1317c1-aa51-4524-8692-74079c923e2c`
- Flow property / unit: Mass / kg
- Amount rule: verified ABS mass embodied in product plus foreground moulding loss, without supplier-loss double counting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources: `mettler-toledo-me-reference-manual`

###### Plate glass for draft shield (`plate_glass_input`)

Record flat glass used in a supplied draft shield. Mark this atomic row not applicable only for a model sold without a glass draft shield.

- Selected flow: plate glass `491a7940-d102-4981-a2b8-81bf183987df`
- Flow property / unit: Mass / kg
- Amount rule: supplier bill-of-materials mass plus foreground cutting loss, when applicable, per accepted balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted complete balance fitted with a glass draft shield
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources: `mettler-toledo-me-reference-manual`

###### PET protective cover (`pet_cover_input`)

Record the PET protective cover mass when it is included in the standard product configuration.

- Selected flow: Polyethylene terephthalate `1ce0d026-923b-4339-a8ca-31e228475c75`
- Flow property / unit: Mass / kg
- Amount rule: verified mass of the supplied PET cover per accepted balance; mark not applicable when no cover is supplied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources: `mettler-toledo-me-reference-manual`

###### Load-measuring cell or weighing sensor assembly (`load_cell_input`)

Record one physically complete load-measuring cell or sensor assembly incorporated in the balance, with its sensing principle and supplier part identity.

- Selected flow: Load cell for a balance (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: supplier component mass attributable to one accepted balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources:

###### Populated control PCB assembly (`pcb_assembly_input`)

Record the populated PCB assembly controlling measurement, display and interfaces. Separately supplied peripheral accessories are excluded unless included in the standard sales configuration.

- Selected flow: Electronic components and PCB assemblies `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- Flow property / unit: Mass / kg
- Amount rule: supplier component mass attributable to one accepted balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources:

###### Purchased electricity for manufacturing and acceptance testing (`electricity_input`)

Record metered purchased electricity for fabrication, assembly, adjustment, warm-up and acceptance testing at the foreground site. Allocate shared building loads according to the documented allocation rule.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to the reporting product during the representative manufacturing period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_records`
- Sources:

###### Corrugated shipping box (`corrugated_box_input`)

Record the formed corrugated box included in the standard sales packaging; exclude reusable distribution containers reported outside the sales unit.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-declared box mass per accepted balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources:

###### Expanded-polypropylene protective packaging insert (`epp_packaging_insert`)

Record expanded-polypropylene protective inserts as one aggregated material exchange for the sales unit; do not substitute composition-unspecified foam.

- Selected flow: Expanded polypropylene foam (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-declared EPP insert mass per accepted balance; mark not applicable when another specifically inventoried protection system is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete balance (`balance_output`)

Record only complete balances that pass the declared acceptance tests and meet the category sensitivity threshold.

- Selected flow: Balance with a sensitivity of 5 cg or better (Tiangong UUID unresolved)
- Flow property / unit: Number of items / Item(s)
- Amount rule: counted accepted balances; normalize to exactly one accepted unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accepted_output`
- Sources: `un-cpc-3-0-structure-2025`; `oiml-r76-1-2006`

##### Waste flows

###### Post-industrial steel fabrication scrap (`steel_scrap_output`)

Record segregated steel offcuts and rejected steel parts leaving the foreground process for recovery or treatment.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: weighed steel scrap leaving the foreground process per accepted balance; mark not applicable when no steel fabrication occurs on site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Aluminium fabrication scrap (`aluminium_scrap_output`)

Record segregated aluminium runners, offcuts and rejected aluminium parts leaving the foreground process.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: weighed aluminium scrap leaving the foreground process per accepted balance; mark not applicable when no aluminium fabrication occurs on site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources:

###### ABS moulding scrap (`abs_scrap_output`)

Record segregated ABS sprues, runners and rejected ABS parts leaving the foreground process; do not combine them with other plastics or metals.

- Selected flow: ABS production scrap (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: weighed ABS scrap leaving the foreground process per accepted balance; mark not applicable when no ABS moulding occurs on site
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Rejected populated PCB assembly (`pcb_waste_output`)

Record populated PCB assemblies rejected and sent outside the foreground process for recovery or treatment; boards reworked and returned to production are not waste outputs.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected populated boards leaving the foreground process per accepted balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted complete balance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

No generic elementary-emission row is prescribed. Record a direct elementary emission only when a measured or calculated species-specific exchange crosses the foreground environment boundary, and add an atomic row with a verified Tiangong identity.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | foreground_subdivision | Prefer subdivision and direct metering for balance models, fabrication cells and acceptance-test stations before applying allocation. |  |
| `allocation_rule_2` | shared_site_electricity_and_waste | When direct metering is unavailable, allocate shared electricity and waste using a documented causal driver such as machine time, tested-unit time or measured mass throughput; accepted-unit count may be used only when product models have comparable resource intensity. |  |
| `allocation_rule_3` | scrap_and_recycling | Report scrap mass and receiving route explicitly. Do not subtract avoided virgin production or assign a recycling credit unless the chosen study method requires it and the allocation method is declared consistently. |  |
| `allocation_rule_4` | rejected_and_reworked_units | Exclude rejected units from the reference denominator; retain their attributable materials, electricity and waste in the foreground totals. Reworked units contribute only incremental rework burdens before acceptance. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_packaging` | `balance_manufacture` | material, component and packaging inputs | approved bill of materials; supplier declarations; receiving and weighing records | model_id; supplier_part_id; material_or_component_identity; composition; quantity_per_unit; measured_mass; included_accessories; packaging_configuration; supplier_geography; product_state | Reconcile the released bill of materials to measured product and packaging mass; verify supplier composition and prevent component/material double counting | kg and Item(s) | each engineering release and supplier change | production-weighted configuration for the reporting period | all foreground product models and supplying sites in scope | Sum verified input mass by atomic flow and divide by accepted balances; retain route-specific not-applicable evidence | signed bill-of-materials release; calibration record for scales; supplier specification; mass-reconciliation record |
| `cp_electricity_records` | `balance_manufacture` | purchased manufacturing electricity | calibrated meter, submeter and electricity-invoice records | meter_id; opening_reading; closing_reading; unit; voltage_level; grid_supplier; production_period; machine_or_test_time; accepted_units; rejected_units | Read calibrated meters or invoices and map submetered and allocated loads to fabrication, assembly, adjustment, warm-up and testing | kWh or MJ | monthly or production batch | at least twelve representative months or the complete shorter campaign | every foreground manufacturing site | Convert kWh to MJ and allocate with the declared causal driver; divide by accepted units while retaining rejected-unit burdens | meter calibration or invoice reconciliation; allocation-driver record; completeness check against site total |
| `cp_accepted_output` | `balance_manufacture` | accepted balance output | product specification, adjustment, acceptance-test and release records | model_id; serial_or_lot_id; sensitivity_declaration; sensitivity_test_basis; capacity; readability_or_scale_interval; repeatability; accuracy_class_if_applicable; sensing_principle; acceptance_status; product_mass; included_accessories | Count only units released after documented adjustment and acceptance testing | Item(s) and kg | each unit or statistically controlled lot | full reporting period | every foreground assembly and release site | Sum accepted units by model; production-weight model-specific inputs when reporting a family | traceable acceptance record; calibrated test weights; instrument test record; release authorization |
| `cp_waste_records` | `balance_manufacture` | segregated manufacturing wastes | scale tickets, waste transfer notes, recycler receipts and mass-balance records | waste_id; material_identity; gross_mass; tare_mass; destination; treatment_route; hazardous_status; production_period; accepted_units | Use calibrated floor-scale tickets, recycler receipts or mass-balance records; keep steel, aluminium, ABS and populated PCB waste separate | kg | each shipment with monthly reconciliation | same period as production and electricity records | every foreground manufacturing site | Net waste mass equals gross minus tare; allocate by direct process record or declared causal driver and divide by accepted units | scale calibration; waste transfer note; recycler receipt; material segregation audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | all inventory rows | normalized amount = reporting-period attributable amount / accepted complete balances | attributable input, electricity or waste amount; accepted balance count | amount per accepted balance |  |
| `calc_rule_2` | electricity_input | electricity_MJ = metered_kWh × 3.6; then apply only the documented foreground allocation fraction | metered kWh; allocation driver; accepted balance count | MJ per accepted balance |  |
| `calc_rule_3` | material_and_component_inputs | Sum net embodied material and supplier-attributed process loss once; if a complete component dataset is used, remove separately modelled constituent burdens that would duplicate it | bill of materials; component composition; supplier dataset boundary; route loss | non-duplicated input mass per accepted balance | `mettler-toledo-me-reference-manual` |
| `calc_rule_4` | waste_outputs | net waste mass = gross shipment mass - tare; normalized waste = attributable net waste / accepted balances | gross mass; tare mass; segregation identity; allocation driver; accepted balance count | kg waste per accepted balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity` | reference product | Demonstrate the 5 cg-or-better sensitivity threshold and declare capacity, readability or scale interval, repeatability, sensing principle and applicable accuracy class without treating these terms as interchangeable. | product specification; acceptance or type-test record; `un-cpc-3-0-structure-2025`; `oiml-r76-1-2006` |
| `dqr_mass_completeness` | bill of materials and packaging | Reconcile inventoried material, component and packaging mass to measured product and packaging mass; explain exclusions, coatings, fasteners, cables, power supplies, weights and accessories. | approved bill of materials; supplier composition; calibrated mass check; reconciliation statement |
| `dqr_temporal` | foreground activity data | Use a representative reporting period and align production, electricity and waste records; disclose shutdowns, product transitions and incomplete periods. | period coverage table; production ledger; utility and waste record reconciliation |
| `dqr_geography_technology` | upstream datasets | Match supplier geography, recycled content, alloy or polymer grade, component technology and electricity grid as closely as available; disclose proxies and sensitivity-test material substitutions. | supplier declaration; dataset metadata; proxy justification |
| `dqr_uuid_completeness` | Tiangong identities | Resolve every currently blank reference or inventory UUID before publication or retain the explicit unresolved review item; never replace it with a proxy identity. | finalized hybrid-search receipt and state-100 direct read |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | Confirm exactly one accepted balance is the reference amount and verify documented sensitivity is 5 cg (50 mg) or better. | `un-cpc-3-0-structure-2025`; `oiml-r76-1-2006` |
| `validation_rule_2` | inventory_reconciliation | Confirm all 15 prescribed atomic rows are present or carry documented not-applicable evidence, and confirm each collected or calculated row links to its collection protocol. |  |
| `validation_rule_3` | bilingual_uuid_identity | Confirm English and Chinese UUID-bearing flow names exactly match the state-100 Tiangong baseNames and that UUID, property and unit group agree across languages. |  |
| `validation_rule_4` | mass_and_route_consistency | Reconcile material, component, packaging and waste masses; confirm supplier components and their decomposed constituent materials are not double counted. | `mettler-toledo-me-reference-manual` |
| `validation_rule_5` | allocation_and_period | Confirm electricity and waste allocation uses the declared causal driver, rejected units remain outside the denominator, and production, utility and waste periods align. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-gate foreground dataset for manufacturing one accepted high-sensitivity balance |
| downstream_use | `secondary_dataset`; `background_dataset` when product configuration, geography, technology and data quality match the consuming study |
| allowed_use | Cradle-to-gate product footprints, procurement comparisons within an aligned functional and metrological specification, instrument-system LCAs, and scenario modelling with disclosed configuration |
| excluded_use | Direct comparison of balances with different sensitivity, capacity, accuracy class, accessories or life-cycle boundary without adjustment; use-phase or lifetime claims; proxying less-sensitive industrial weighing machinery |
| required_metadata | PCR id and version; model or production-weighted family; sensitivity and test basis; capacity; readability or scale interval; repeatability; accuracy class where applicable; sensing principle; product and packaging mass; included accessories; supplier-versus-in-house route; manufacturing and electricity geography; reporting period; allocation method; unresolved UUIDs and proxies |
| required_quality_disclosure | Bill-of-materials and mass-reconciliation coverage; temporal coverage; meter and scale quality evidence; supplier-data share; upstream dataset representativeness; allocation fractions; not-applicable rows; cut-offs; uncertainty and unresolved range evidence |
| update_trigger | Product redesign; sensing-technology change; material or packaging change exceeding the study significance threshold; supplier or manufacturing-site change; electricity-grid change; changed acceptance specification; reporting period older than the program requirement; resolution of a material UUID or evidence gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Exact CPC 48231 identity and 5 cg-or-better category threshold |
| `oiml-r76-1-2006` | `standard` | International Organization of Legal Metrology, OIML R 76-1:2006, Non-automatic weighing instruments - Part 1: Metrological and technical requirements - Tests, https://www.oiml.org/en/files/pdf_r/r076-1-e06.pdf (retrieved 2026-09-07) | Definitions of sensitivity, discrimination, repeatability and warm-up time; metrological qualifier discipline for applicable non-automatic balances |
| `mettler-toledo-me-reference-manual` | `handbook` | Mettler-Toledo GmbH, Precision and Analytical Balances: ME Reference Manual, document 30045655, 2020, https://www.mt.com/dam/P5/labtec/02_Analytical_Balances/08_ME/03_Documentation/03_Operating_Instructions/RM_ME_en.pdf (retrieved 2026-09-07) | Representative product construction evidence for ABS, die-cast aluminium, stainless steel, glass, PET and electrical supply; not a quantitative range source |
