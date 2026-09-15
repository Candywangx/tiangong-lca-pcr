---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.burglar-or-fire-alarms-and-similar-apparatus
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Burglar or fire alarms and similar apparatus

## 1. Scope and Applicability

This PCR applies to the factory-gate production of complete electrical apparatus whose principal function is to detect intrusion, burglary, fire, smoke, heat, flame, or another declared alarm condition and/or to issue, control, display, or transmit the associated alarm signal. Covered configurations include self-contained detectors and alarms, manual call points, alarm control and indicating equipment, and purpose-built audible or visual alarm devices when placed on the market as burglar-, intrusion-, or fire-alarm apparatus.

The product boundary is the apparatus in its declared market state, including prescribed batteries or accumulators, labels, instructions, primary packaging, and manufacturer-supplied accessories needed for the declared function. The foreground manufacturing boundary starts when materials, components, and packaging arrive at the manufacturing site and ends when conforming packaged apparatus leaves the site or the manufacturer's last logistics platform. Upstream production is represented by linked product-input datasets.

Excluded are parts sold only as parts; generic bells, sirens, indicator panels, or other signalling apparatus without an alarm-system purpose; signalling equipment for cycles or motor vehicles; electromechanical traffic-control equipment; installation and building modification services; alarm receiving or monitoring services; evacuation drills and real or spurious alarm events; use-stage electricity and maintenance; and end-of-life collection or treatment. A downstream cradle-to-grave study may add distribution, installation, use, maintenance, and end-of-life modules without changing this manufacturing dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.burglar-or-fire-alarms-and-similar-apparatus |
| classification_refs | CPC 3.0: 46921, exact classification context |
| covered_products | Complete burglar or intrusion alarms; fire, smoke, heat, flame, or multi-criteria detectors and alarms; manual fire-alarm call points; alarm control and indicating equipment; purpose-built alarm sounders or visual alarm devices supplied as alarm apparatus |
| excluded_products | Parts sold separately; generic signalling apparatus; vehicle or cycle alarms; traffic-control equipment; installation, monitoring, maintenance, and disposal services; gas-measurement equipment whose principal function is quantitative measurement rather than alarm signalling |
| representative_product | A packaged, electrically powered alarm apparatus with a populated printed circuit board, declared enclosure, alarm sensing/signalling elements, labels, instructions, and any prescribed battery or accessories |
| production_route | Receipt of materials and purchased subassemblies; enclosure forming when performed on site; electronic and mechanical assembly; firmware loading or configuration; calibration and functional/safety testing; labelling and packaging |
| market_state | Conforming finished and packaged apparatus at the factory gate or manufacturer's last logistics platform, with declared function, configuration, power mode, supplied accessories, and reference service life |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared burglar/intrusion-detection, fire-detection, and/or alarm signalling function of the selected apparatus configuration |
| How much | The documented quantity and configuration of apparatus represented by 1 kg of conforming packaged product at the manufacturing gate |
| How well | Meet the declared applicable product standard, sensing or signalling performance, reliability, autonomy, environmental class, and alarm-interface requirements |
| How long or cycle | The manufacturer-declared reference service life; the manufacturing dataset itself is normalized to the factory-gate reference flow and does not include use-stage replacements unless they are supplied or prescribed with the product |
| reference_flow_link | `finished_alarm_apparatus` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Burglar or fire alarms and similar apparatus `2f2aac87-87f8-49da-bb7f-87bb4a532eba` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alarm function and product family; detector or signalling principle; model and hardware/firmware configuration; applicable standard and performance class; wired, mains, battery, or hybrid power mode; prescribed battery chemistry, capacity, and replacements; supplied accessories and mounting parts; packaged and product-only mass; reference service life; manufacturing site, geography, technology, and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Finished packaged apparatus and mass-based inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all material, component, packaging, product, and waste masses to 1 kg of conforming packaged reference product. Report product-only and packaging masses separately before normalization. |
| `electricity_energy` | Purchased manufacturing electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ using 1 kWh = 3.6 MJ; do not include upstream power-plant emissions as foreground elementary flows. |
| `item_to_mass` | Batteries, assembled boards, accessories, and other item-count records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts to mass only from product-specific measured net mass and documented count; retain both count and mass evidence. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | Foreground manufacturing dataset | Include received materials and components, their on-site transformation, electronic and mechanical assembly, firmware loading or configuration, calibration and testing, labels, instructions, packaging, manufacturing energy, and treatment-bound manufacturing wastes through the factory gate or manufacturer's last logistics platform. | `pep-pcr-ed4-2021`; `pep-psr-0019-ed1-2023` |
| `boundary_complete_bom` | Material and component completeness | Identify every material, component, packaging item, prescribed consumable, and manufacturer-supplied accessory needed for the declared function. Add any product-specific exchange not represented by the common rows below as a separate atomic inventory row. | `pep-pcr-ed4-2021`; `pep-psr-0019-ed1-2023` |
| `boundary_stage_exclusions` | Downstream and non-product activities | Exclude distribution beyond the last logistics platform, installation and building work, use electricity, maintenance visits, alarm events or drills, end-of-life operations, capital goods not proportional to output, administration, R&D, marketing, and employee services; disclose any downstream module added by the study. | `pep-pcr-ed4-2021`; `pep-psr-0019-ed1-2023` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Materials, purchased subassemblies, packaging, prescribed consumables, and supplied accessories as received at the alarm-apparatus manufacturing site |
| starting_condition_role | purchased_input |
| product_classification_scope | Complete burglar or fire alarm apparatus within the semantic boundary of CPC 46921; parts and services remain outside this PCR identity |
| recursive_input_rule | If a purchased input is itself complete alarm apparatus in this category, record it once as a product input and link its supplier dataset; do not recursively reproduce its manufacturing inventory inside the foreground process |
| upstream_dataset_requirement | Use geographically, temporally, technologically, and product-state representative upstream datasets for each material, component, energy, packaging, and waste-treatment exchange; identify proxies and their limitations |
| disclosure | Declare the manufacturing site, reporting period, alarm family and performance class, power mode, bill-of-materials coverage, product-only and packaging masses, supplied consumables/accessories, allocation method, excluded flows, and downstream stages omitted or added |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `alarm_apparatus_manufacturing` | Alarm apparatus manufacture, test, and packaging | required | Applies to every foreground package; individual material, component, battery, scrap, and packaging rows apply only when the declared BOM or site records show that exchange | foreground manufacturing | 1 kg conforming packaged alarm apparatus |

### Process: Alarm apparatus manufacture, test, and packaging (`alarm_apparatus_manufacturing`)

#### Inputs

##### Product flows

###### Purchased populated printed circuit board (`purchased_populated_pcb`)

Record the mass of each purchased populated printed circuit board that enters the apparatus. Use this row only when the assembled board crosses the site boundary as one physical subassembly; boards assembled on site require separate atomic component and bare-board rows in the foreground package.

- Selected flow: Populated printed circuit board assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of populated printed circuit board assemblies consumed in conforming production, adjusted for inventory change and segregated rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_inputs`
- Sources: `pep-pcr-ed4-2021`

###### ABS enclosure resin (`abs_granulate`)

Record ABS granulate when the enclosure or another ABS part is moulded at the reporting site. Do not use this row for a purchased finished enclosure or for another polymer.

- Selected flow: Acrylonitrile-butadiene-styrene (ABS) copolymer, granulate `8f1317c1-aa51-4524-8692-74079c923e2c`
- Flow property / unit: Mass / kg
- Amount rule: Measured ABS granulate issued to product-specific moulding, less documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_inputs`
- Sources: `pep-pcr-ed4-2021`

###### Cold-rolled steel sheet (`cold_rolled_steel_sheet`)

Record cold-rolled steel sheet used for an enclosure, bracket, shield, or mounting part when sheet forming occurs within the foreground site.

- Selected flow: Cold-rolled carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured cold-rolled steel sheet issued to the product, less documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_inputs`
- Sources: `pep-pcr-ed4-2021`

###### Aluminium sheet (`aluminium_sheet`)

Record aluminium sheet used for an enclosure, bracket, heat spreader, or mounting part when it crosses the foreground boundary in sheet form.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured aluminium sheet issued to the product, less documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_inputs`
- Sources: `pep-pcr-ed4-2021`

###### Copper wire (`copper_wire`)

Record uninsulated copper wire used in internal conductors, coils, or terminals when it crosses the foreground boundary as copper wire. Insulated cable must be represented by its own exact product flow.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass / kg
- Amount rule: Measured copper-wire mass issued to the product, less documented return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_inputs`
- Sources: `pep-pcr-ed4-2021`

###### Prescribed lithium primary battery (`lithium_primary_battery`)

Record each lithium primary battery shipped with the product or prescribed as an original consumable. Other battery chemistries and replacement batteries require separate atomic rows.

- Selected flow: Lithium primary battery
- Flow property / unit: Mass / kg
- Amount rule: Product-specific measured mass of lithium primary batteries supplied or prescribed for the declared reference service life
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_inputs`
- Sources: `pep-psr-0019-ed1-2023`

###### Manufacturing electricity (`manufacturing_electricity`)

Record purchased electricity consumed by on-site forming, assembly, firmware loading, calibration, functional testing, labelling, packaging, and directly attributable support equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or invoice-reconciled manufacturing electricity allocated to the reference product and converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_electricity`
- Sources: `pep-pcr-ed4-2021`

###### Corrugated-board shipping box (`corrugated_board_box`)

Record the corrugated-board box delivered with the product as primary or secondary packaging. Paper inserts and wooden pallets, when used, require separate atomic rows.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of corrugated-board boxes consumed for conforming packaged product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_inputs`
- Sources: `pep-psr-0019-ed1-2023`

###### Low-density polyethylene packaging film (`ldpe_packaging_film`)

Record low-density polyethylene film used to wrap, bag, or group the finished product. Do not combine it with other plastic packaging.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of PE-LD film consumed for conforming packaged product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_material_inputs`
- Sources: `pep-psr-0019-ed1-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming packaged alarm apparatus (`finished_alarm_apparatus`)

This is the quantitative reference output after final inspection and packaging. Product-only mass and packaging mass must also be retained as separate raw records.

- Selected flow: Burglar or fire alarms and similar apparatus `2f2aac87-87f8-49da-bb7f-87bb4a532eba`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg of conforming packaged reference product by definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Rejected populated printed circuit board (`waste_populated_pcb`)

Record populated printed circuit boards rejected or damaged at the manufacturing site and transferred for treatment; do not mix bare-board scrap or general electronic waste into this row.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of segregated rejected populated boards leaving the foreground site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: `pep-psr-0019-ed1-2023`

###### ABS manufacturing scrap (`abs_manufacturing_scrap`)

Record segregated ABS sprues, runners, offcuts, and rejected ABS parts leaving the site as one ABS waste stream; internally reground material returned to the same process is not an output.

- Selected flow: Waste ABS plastic
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of segregated ABS waste transferred off site, net of documented internal regrind returned to production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: `pep-psr-0019-ed1-2023`

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record segregated steel offcuts and rejected steel parts generated by the declared manufacturing process.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of segregated post-industrial steel scrap leaving the foreground site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: `pep-psr-0019-ed1-2023`

###### Aluminium scrap (`aluminium_scrap`)

Record segregated aluminium sheet offcuts and rejected aluminium parts generated by the declared manufacturing process.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of segregated aluminium scrap leaving the foreground site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: `pep-psr-0019-ed1-2023`

###### Copper scrap (`copper_scrap`)

Record segregated uninsulated copper-wire offcuts and rejected copper parts generated by the declared manufacturing process.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of segregated copper scrap leaving the foreground site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: `pep-psr-0019-ed1-2023`

###### Cardboard packaging waste (`cardboard_packaging_waste`)

Record corrugated-cardboard packaging waste generated before the finished product leaves the manufacturing boundary, such as damaged boxes and incoming component packaging managed by the manufacturer.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of segregated cardboard packaging waste leaving the foreground site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: `pep-psr-0019-ed1-2023`

###### Low-density polyethylene film waste (`ldpe_film_waste`)

Record segregated low-density polyethylene film waste generated from incoming component packaging or damaged finished-product film within the manufacturing boundary.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of segregated PE-LD film waste leaving the foreground site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged alarm apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: `pep-psr-0019-ed1-2023`

##### Elementary flows

No direct elementary flow is prescribed for the common assembly route. Record any measured site-specific direct emission as its own atomic elementary-flow row; do not copy upstream electricity or material-production emissions into the foreground process.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Product-specific foreground records | Avoid allocation by using product-specific BOM issues, meters, work orders, and segregated waste measurements whenever technically feasible. | `pep-pcr-ed4-2021` |
| `allocation_shared_assembly_mass` | Shared assembly, test, packaging, energy, and waste records | When shared primary data cannot be subdivided, allocate in proportion to the mass of conforming devices manufactured during the same reporting period. Any different physical or economic driver must better represent causality and be justified and disclosed. | `pep-psr-0019-ed1-2023` |
| `allocation_scrap_boundary` | Manufacturing scrap and recycling | Record each segregated scrap output and its treatment route without crediting avoided primary production inside the foreground manufacturing dataset; report any beyond-boundary recycling benefit separately. | `pep-pcr-ed4-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_material_inputs` | `alarm_apparatus_manufacturing` | Material, purchased-subassembly, battery, accessory, and packaging inputs | BOM, purchase/issue records, supplier declarations, and verified mass measurements | model; revision; lot; flow identity; supplier; material or component specification; gross issue; return to stock; item count; measured net mass; recycled content; supplied or prescribed status | Reconcile current product BOM with warehouse issues and returns; weigh representative items when records are count-based; retain supplier evidence | kg and item count before conversion | Per production lot with at least annual reconciliation | Prefer a continuous 12-month representative period; justify shorter or abnormal periods | Every manufacturing and packaging site contributing to the reference flow | Sum net consumed mass by exact flow and allocate only shared records according to section 7, then divide by conforming packaged output mass | Approved BOM revision; calibrated scale records; stock reconciliation; supplier specification; exception log |
| `cp_manufacturing_electricity` | `alarm_apparatus_manufacturing` | Manufacturing electricity | Submeter, machine meter, or invoice-reconciled energy record | meter id; reading start/end; kWh; production line; operating period; product mix; downtime; allocation driver; renewable contract attributes | Prefer product-line or equipment submetering; otherwise reconcile facility invoices to attributable manufacturing loads and documented allocation | kWh and MJ | Monthly or finer | Representative 12-month period where available | All sites performing included forming, assembly, testing, and packaging | Sum attributable kWh, allocate shared use under section 7, multiply by 3.6 MJ/kWh, and divide by conforming packaged output mass | Meter calibration; invoice reconciliation; production log; allocation worksheet |
| `cp_output_and_waste_mass` | `alarm_apparatus_manufacturing` | Conforming output and segregated manufacturing waste | Production count and mass records, reject logs, waste transfer notes, and weigh tickets | model; lot; conforming count; product-only mass; packaging mass; waste type; hazardous status; gross/tare/net mass; internal rework or regrind; destination; treatment route | Weigh conforming products and each segregated waste stream; exclude documented internal loops from external waste outputs | kg | Per lot for output and at each waste transfer | Same reporting period as material and electricity records | Every included manufacturing site and contracted treatment-bound transfer | Sum conforming packaged mass and each external waste flow separately; normalize to 1 kg conforming packaged output | Calibrated scale; reject disposition; waste-transfer certificate; mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_material_normalization` | Each material, component, battery, and packaging input | normalized input = (gross issue − return to stock − documented internal-loop return) / conforming packaged output mass | Flow-specific issue, return, internal-loop, and output-mass records from `cp_bom_material_inputs` and `cp_output_and_waste_mass` | kg input per kg reference product |  |
| `calc_electricity_normalization` | Manufacturing electricity | normalized electricity = allocated electricity in kWh × 3.6 / conforming packaged output mass | Metered or invoice-reconciled kWh, allocation driver, and output mass | MJ electricity per kg reference product |  |
| `calc_waste_normalization` | Each manufacturing waste output | normalized waste = external transferred net waste mass / conforming packaged output mass; exclude documented material returned to the same process | Flow-specific transfer mass, internal-loop return, and output mass | kg waste per kg reference product | `pep-psr-0019-ed1-2023` |
| `calc_mass_balance` | Manufacturing-period completeness check | Compare total recorded material, component, battery, and packaging inputs with conforming product, external waste, documented internal inventory change, and measured process losses; investigate and disclose the residual | All mass records for the common reporting period | Mass-balance residual and reconciliation statement |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and every exchange | Use the declared product revision and one chemically or physically specific flow per row. Preserve supplier grade, product state, recycled content, battery chemistry, waste contamination, and treatment-route qualifiers. | BOM, drawings, specifications, supplier declarations, Tiangong identity audit, waste records |
| `dq_temporal` | Foreground activity data | Use a representative period, preferably 12 consecutive months, and document shutdowns, abnormal production, missing months, and any shorter-period justification. | Dated meter, production, stock, and waste records; `pep-pcr-ed4-2021` |
| `dq_completeness` | Manufacturing inventory | Reconcile the current BOM and packaging list to inventory rows; quantify and justify exclusions; do not hide unrepresented materials, prescribed consumables, accessories, energy, or manufacturing waste in collection rows. | BOM-to-inventory reconciliation, mass balance, exclusion register; `pep-pcr-ed4-2021` |
| `dq_representativeness` | Multi-site and upstream data | Match geography, technology, product state, and time to the declared product; document site aggregation and every secondary-data proxy or adaptation. | Site-selection rationale, dataset metadata, proxy register; `pep-pcr-ed4-2021` |
| `dq_functional_qualifiers` | Reference flow | Document alarm family, sensing/signalling principle, applicable standard and performance class, power mode, prescribed consumables, supplied accessories, and reference service life so downstream use-stage modelling is reproducible. | Product certificate, declaration of conformity, technical data sheet, service-life statement; `iec-tc79-sbp-2026`; `pep-psr-0019-ed1-2023` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Dataset identity and quantitative reference | Confirm that the output is exactly 1 kg of conforming packaged apparatus and that product-only mass, packaging mass, model/configuration, alarm function, performance class, power mode, supplied accessories, and reference service life are declared. | `pep-psr-0019-ed1-2023` |
| `validate_atomic_inventory` | Every inventory exchange | Reject collection labels, combined materials, combined utilities, combined wastes, unverified UUID proxies, and Chinese UUID-bearing flow names that differ from the public Tiangong baseName. |  |
| `validate_bom_and_mass_balance` | Material completeness | Require BOM-to-inventory reconciliation and investigate the mass-balance residual; every omitted assessable material, component, package, energy flow, and waste stream must be quantified and justified. | `pep-pcr-ed4-2021` |
| `validate_energy_boundary` | Electricity and emissions | Confirm the 3.6 MJ/kWh conversion, common reporting period, documented allocation, and exclusion of upstream electricity emissions from foreground elementary outputs. |  |
| `validate_allocation` | Shared records | Confirm subdivision was attempted first; otherwise verify the mass allocation calculation or documented causal alternative and retain a sensitivity statement for material alternatives. | `pep-pcr-ed4-2021`; `pep-psr-0019-ed1-2023` |
| `validate_waste_routes` | Manufacturing waste | Confirm that each waste is physically specific, segregated or defensibly measured, net of internal loops, linked to a documented destination/treatment route, and not credited with beyond-boundary recycling inside the foreground result. | `pep-psr-0019-ed1-2023` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset |
| allowed_use | Product- and site-specific factory-gate inventories for burglar or fire alarm apparatus; building-product LCAs and cradle-to-grave models that add compatible distribution, installation, use, maintenance, and end-of-life scenarios |
| excluded_use | Direct comparison of apparatus with different alarm functions, performance classes, power modes, system configurations, service lives, or geographic requirements without functional equivalence and harmonized downstream scenarios |
| required_metadata | PCR id and version; product model/revision; alarm family and function; sensing/signalling principle; applicable standard and performance class; power mode; battery and accessory scope; product-only and packaging masses; reference service life; manufacturing geography, technology, sites, reporting period, allocation, BOM coverage, upstream dataset identifiers, and exclusions |
| required_quality_disclosure | Primary-data coverage; temporal, geographic, and technological representativeness; BOM and packaging completeness; mass-balance residual; meter and scale quality; supplier data quality; UUID gaps; secondary-data proxies; waste destinations; allocation sensitivity; unresolved empirical range needs |
| update_trigger | Product hardware, firmware function, sensing/signalling principle, enclosure material, PCB design, battery or power mode, supplied accessory, packaging, manufacturing site/technology, energy mix, allocation basis, applicable standard, or reference service life changes materially; or representative foreground data become older than the declared update policy |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-09-05) | Official product classification identity and hierarchy context |
| `iec-tc79-sbp-2026` | official_guidance | IEC Technical Committee 79, Strategic Business Plan, SMB/6268/R, https://assets.iec.ch/public/miscfiles/sbp/79.pdf (accessed 2026-09-05) | Alarm-system scope, local/remote alarm functions, performance, reliability, environmental, and interface qualifiers |
| `pep-pcr-ed4-2021` | standard | PEP ecopassport Programme, Product Category Rules for electrical, electronic and HVAC-R products, edition 4, 6 September 2021, https://pep-ecopassport.org/site/wp-content/uploads/2026/06/PCR-4-ed4-EN-2021-09-06-PCR-edition-4.pdf (accessed 2026-09-05) | Manufacturing boundary, component and packaging inclusion, allocation hierarchy, foreground collection, representativeness, completeness, and reporting rules |
| `pep-psr-0019-ed1-2023` | standard | PEP ecopassport Programme, PSR-0019 Fire Safety System, edition 1, 6 June 2023, https://register.pep-ecopassport.org/documents/public/PSR-0019-EN (accessed 2026-09-05) | Fire-alarm functions and qualifiers; prescribed consumables and accessories; manufacturing waste; shared-assembly mass allocation; supporting-record expectations |
| `cnca-gacc-2020-ccc-hs-reference` | official_guidance | Certification and Accreditation Administration of China and General Administration of Customs, reference table linking the compulsory product certification catalogue with 2020 commodity codes, https://www.cnca.gov.cn/zwxx/gg/lhfb/art/2023/art_0508b85ba88a452193a0f19f8d5eb68a.html (accessed 2026-09-05) | Professional Chinese category terminology for HS 8531100000 corresponding to burglar or fire alarm apparatus |
