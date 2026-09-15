---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48315
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts and accessories for the goods of subclass 48315

## 1. Scope and Applicability

This PCR applies to separately saleable parts and accessories that the producer identifies for use with liquid crystal devices n.e.c., lasers other than laser diodes, or other optical appliances and instruments n.e.c. in the CPC 48315 product family. It covers factory-gate production from received materials and components through the site-performed fabrication, cleaning, assembly, performance verification, and packaging steps declared for the product configuration.

The PCR excludes complete CPC 48315 devices; laser diodes; general-purpose fasteners, cables, power supplies, printed wiring boards, and similar goods when sold independently; optical fibres, optical elements, photographic goods, and other products classified separately; installation, use, maintenance, and end-of-life of the parent device; and upstream production already represented by linked supplier or background datasets. Every actual bill-of-material, utility, packaging, waste, and direct-emission exchange must be represented as an atomic dataset row even when it is not one of the common rows below. Classification context is evidence of scope, not by itself a methodology identity or accepted mapping.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48315 |
| classification_refs | CPC 3.0:48354, Parts and accessories for the goods of subclass 48315 (exact classification context) |
| covered_products | Dedicated mechanical, electrical, thermal-control, interface, housing, mounting, control, and subassembly parts or accessories separately supplied for one declared CPC 48315 device family |
| excluded_products | Complete CPC 48315 devices; laser diodes; general-purpose goods not identified for the parent device; and optical, photographic, electronic, or other products separately classified elsewhere |
| representative_product | One finished, separately saleable part or accessory for a declared liquid-crystal-device, non-diode-laser, or other CPC 48315 optical-appliance family |
| production_route | Receipt of product-specific materials and components; site-performed fabrication or forming where applicable; cleaning where applicable; assembly and performance verification; factory-gate packaging |
| market_state | Finished, conforming, and packaged at the manufacturing gate, with product family, compatibility, material state, manufacturing route, and delivery configuration declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished part or accessory that performs its declared structural, interface, electrical, thermal, mounting, control, or other specified function in a named CPC 48315 parent-device family |
| How much | 1 kg net mass of conforming finished part or accessory, excluding transport packaging |
| How well | Meets the producer-declared drawing, material grade, dimensional tolerance, cleanliness, interface, compatibility, and functional acceptance criteria applicable to the supplied product |
| How long or cycle | One factory-gate production and release cycle; no service life is asserted unless a separate study defines it |
| reference_flow_link | The net mass of the conforming output row `reference_product` equals the 1 kg functional-unit amount |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product |
| Reference product flow | Parts and accessories for the goods of subclass 48315 (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | parent-device family (liquid crystal device n.e.c., laser other than laser diode, or other optical appliance/instrument n.e.c.); part or accessory type and function; model and compatibility; material composition and supplied form; net product mass; manufacturing and cleaning route; acceptance specification and test; production site and geography; reference period; packaging configuration |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net conforming product mass after final acceptance and exclude transport packaging. Normalize all exchanges to exactly 1 kg of this net output. |
| `measurement_bom_mass` | Material, component, packaging, and solid-waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use product-specific BOM, issue/return, purchase, and weigh records. Declare grade, form, recycled content when known, and whether the amount is gross issued mass or net consumed mass. |
| `measurement_electricity` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity before normalization. Convert kWh to MJ using 1 kWh = 3.6 MJ and disclose any allocation from shared meters. |
| `measurement_water_mass` | Process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use metered or invoiced mass. A volume record may be converted only with a documented measured or supplier-specific density for the applicable state. |
| `measurement_wastewater_volume` | Cleaning wastewater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record the volume transferred to treatment or discharge. If derived from mass, retain the density and conversion record. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Product-specific raw materials, purchased components, cleaning agents, utilities, and packaging arrive at the foreground manufacturing site with amount, supplied form, supplier geography, and upstream dataset link recorded |
| starting_condition_role | purchased_input |
| product_classification_scope | Dedicated parts and accessories for one declared CPC 48315 parent-device family; classification acceptance remains outside this PCR |
| recursive_input_rule | A purchased part or accessory in this same semantic category is recorded once as an atomic product input and linked to its upstream dataset; do not expand the supplier dataset inside the foreground process or create a self-referential loop |
| upstream_dataset_requirement | Link every purchased material, component, energy carrier, water supply, packaging item, and off-site waste-treatment service to geographically and technologically representative upstream data; disclose missing or proxy links |
| disclosure | Declare the parent-device family, output function and compatibility, material and component BOM, site-performed route, outsourced steps, cleaning chemistry, acceptance tests, reference period, geography, yield, wastes, direct emissions, and packaging configuration |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | foreground_gate_to_gate | Include all site-performed fabrication, forming, cleaning, assembly, performance verification, rework, and packaging activities used for the declared product configuration, including supporting energy and waste handling attributable to them. | `eu-pef-method-2021` |
| `system_boundary_rule_2` | bill_of_materials_and_outputs | Use a product-specific BOM and company-specific manufacturing data. Record all known material, energy, water, product, waste, and direct elementary flows as individual exchanges; an unlisted actual flow is not a permitted cut-off. | `eu-pef-method-2021` |
| `system_boundary_rule_3` | conditional_routes | Include a conditional exchange only when the declared product and route use it; otherwise document the exchange as not applicable rather than assigning zero by assumption. |  |
| `system_boundary_rule_4` | excluded_life_cycle_stages | Exclude installation, use, maintenance, and end-of-life of the parent device from this factory-gate dataset. Any expanded study must model those stages separately without changing this reference flow. |  |
| `system_boundary_rule_5` | solvent_cleaning | When solvent cleaning occurs, include solvent purchases, inventory change, recovered or reused solvent, spent solvent, solvent in wastewater, and direct VOC emissions in a reconciled solvent balance. | `us-epa-industrial-cleaning-solvents-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `parts_manufacturing` | Parts and accessories manufacturing and factory-gate preparation | `required` | Always include; within this aggregate process, individual fabrication materials, cleaning exchanges, and packaging exchanges apply only when present in the declared product BOM and site route | Foreground manufacturing, acceptance, and factory-gate preparation | 1 kg net conforming finished part or accessory |

### Process: Parts and accessories manufacturing and factory-gate preparation (`parts_manufacturing`)

#### Inputs

##### Product flows

###### Wrought aluminium alloy for fabricated bodies or mounts (`wrought_aluminium_alloy`)

Record wrought aluminium alloy only when it is issued to and transformed within the foreground route; keep alloy grade and supplied form with the raw record.

- Selected flow: Wrought aluminium alloy (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured net consumed mass from product-specific issue, return, and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Stainless steel for fabricated bodies, fasteners, or mounts (`stainless_steel`)

Record stainless steel only when it is present in the product-specific BOM and crosses the foreground boundary for transformation or assembly.

- Selected flow: Stainless steel `84c2403f-5062-5d68-8276-838384d32b89`
- Flow property / unit: Mass / kg
- Amount rule: measured net consumed mass from product-specific issue, return, and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### ABS granulate for moulded housings or interfaces (`abs_granulate`)

Record ABS granulate only when an ABS part is moulded within the foreground route; declare resin grade, additives, and recycled content when known.

- Selected flow: Acrylonitrile-butadiene-styrene (ABS) copolymer, granulate `8f1317c1-aa51-4524-8692-74079c923e2c`
- Flow property / unit: Mass / kg
- Amount rule: measured net consumed granulate from product-specific issue, return, and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Copper wire rod for in-house conductor fabrication (`copper_wire_rod`)

Record copper wire rod only when it is drawn or otherwise transformed into an electrical or thermal conductor within the foreground route.

- Selected flow: Copper wire rod `99715c69-4245-44ff-a438-0e0d68377386`
- Flow property / unit: Mass / kg
- Amount rule: measured net consumed mass from product-specific issue, return, and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Purchased electricity (`electricity`)

Record electricity delivered to site equipment for the declared fabrication, cleaning, assembly, testing, rework, packaging, and attributable supporting operations.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to the declared product and reporting period, converted to MJ before normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources:

###### Process water for aqueous cleaning (`process_water`)

Record process water only when it is supplied for aqueous cleaning or rinsing of the declared product or its in-scope parts.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or invoiced process-water mass attributable to the declared cleaning route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- Sources:

###### Isopropanol for precision cleaning (`isopropanol`)

Record isopropanol only when it is used to clean the declared product, production parts, or dedicated product-contact tooling; distinguish fresh, recovered, and reused solvent in the raw records.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: purchased plus opening inventory minus closing inventory, returns, and transfers, reconciled with recovered solvent and outputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `us-epa-industrial-cleaning-solvents-2006`

###### Corrugated cardboard for factory-gate packaging (`corrugated_cardboard`)

Record corrugated cardboard only when it remains in the delivery configuration at the factory gate; other actual packaging materials must be added as separate atomic rows.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass assigned from the product-specific shipping configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

No waste input is prescribed. Any secondary material entering as a waste flow must be represented by its own atomic identity and route-specific evidence.

##### Elementary flows

No elementary input is prescribed. Any directly abstracted resource must be added as its own atomic elementary flow.

#### Outputs

##### Product flows

###### Conforming finished part or accessory (`reference_product`)

This is the declared reference output after acceptance testing and before shipment; the amount excludes transport packaging.

- Selected flow: Parts and accessories for the goods of subclass 48315 (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg net conforming finished product by definition of the reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_product_output`
- Sources: `eu-pef-method-2021`

##### Waste flows

###### Aluminium scrap from foreground fabrication (`aluminium_scrap`)

Record segregated aluminium chips, swarf, offcuts, and rejected aluminium pieces leaving the foreground process; declare alloy, contamination, recovery route, and destination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from the foreground process to recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:

###### Stainless-steel machining scrap from foreground fabrication (`stainless_steel_machining_scrap`)

Record stainless-steel chips, swarf, offcuts, and rejected stainless-steel pieces separately from carbon-steel waste and retain the alloy grade and destination.

- Selected flow: Stainless-steel machining scrap (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from the foreground process to recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:

###### Spent isopropanol cleaning solvent (`spent_isopropanol`)

Record spent isopropanol collected for on-site recovery, off-site recovery, or disposal separately from wastewater and lubricating oil.

- Selected flow: Spent isopropanol cleaning solvent (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured mass in waste manifests, recovery records, and closing waste inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_balance`
- Sources: `us-epa-industrial-cleaning-solvents-2006`

###### Wastewater from aqueous precision cleaning (`cleaning_wastewater`)

Record the aqueous cleaning effluent leaving the foreground process for treatment or discharge, with treatment state and contaminant profile retained as qualifiers.

- Selected flow: Wastewater `ba1c2ea5-0ea3-4981-a893-45a0650fea62`
- Flow property / unit: Volume / m3
- Amount rule: measured effluent volume transferred to treatment or discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources:

##### Elementary flows

###### Isopropanol emitted to air (`isopropanol_to_air`)

Record direct isopropanol releases from cleaning, storage, transfer, and drying after accounting for capture or abatement; do not include upstream solvent-production emissions.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured release or residual of a documented site solvent mass balance after recovered solvent, spent solvent, wastewater content, and retained solvent are subtracted
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming finished part or accessory
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `us-epa-industrial-cleaning-solvents-2006`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | independently_meterable_operations | Avoid allocation by subdividing and directly measuring product-specific material, energy, water, solvent, packaging, waste, and emission records wherever practicable. | `eu-pef-method-2021` |
| `allocation_rule_2` | shared_manufacturing_inputs | When direct measurement is unavailable, allocate a shared flow with a documented physical driver that reflects causality, in the order machine or process time, measured throughput, or net conforming product mass; do not allocate by revenue unless physical drivers are demonstrably unavailable. | `eu-pef-method-2021` |
| `allocation_rule_3` | scrap_recovery_and_waste_treatment | Report the full mass leaving as each waste flow and link the actual recovery or treatment route. Do not subtract an avoided-burden credit inside the foreground inventory; disclose any downstream recycling convention separately. |  |
| `allocation_rule_4` | rework_and_rejects | Assign rework energy and materials and unrecovered reject burdens to the product configuration that generated them, using product-specific records or the same causal driver as the originating operation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `parts_manufacturing` | Product-specific material inputs | BOM, issue/return transaction, purchase receipt, and stock record | material identity; grade; supplied form; supplier; lot; gross issued mass; returned mass; inventory change; recycled content; product model; conforming output mass | Reconcile the approved BOM to ERP and stores transactions and retain lot-level exceptions | kg | Per lot, aggregated for the reporting period | One representative production year or a complete declared campaign | All foreground operations at the declared manufacturing site | Sum net consumed mass by atomic material identity and divide by net conforming output mass | Approved BOM revision, transaction extract, supplier specification, scale calibration, and reconciliation sign-off |
| `cp_electricity` | `parts_manufacturing` | Purchased electricity | Meter, submeter, equipment log, and production record | meter identifier; opening and closing reading; kWh; equipment; process time; product model; reporting period; conforming output mass | Prefer direct submetering; otherwise allocate a reconciled site meter using documented equipment time or throughput | kWh and MJ | Monthly or per campaign | Same period as product output, normally 12 consecutive months | Declared site and all attributable in-scope operations | Convert kWh to MJ, subtract documented out-of-scope loads, allocate shared loads, and divide by net conforming output mass | Meter calibration or invoice reconciliation, allocation worksheet, and production log |
| `cp_cleaning_inputs` | `parts_manufacturing` | Aqueous cleaning inputs | Water meter, invoice, batch sheet, and cleaning-equipment log | water amount; source; cleaning line; batch; product model; reuse volume or mass; date; conforming output mass | Reconcile meter or invoice totals to batch and equipment records | kg | Per batch or monthly | Same period as product output | Declared site cleaning operations | Sum net water supplied after documented internal reuse and divide by net conforming output mass | Meter or invoice, batch sheets, density record when converted, and reconciliation |
| `cp_solvent_balance` | `parts_manufacturing` | Isopropanol input, waste, and direct air emission | Purchase, tank or container inventory, issue/return, recovery, waste manifest, wastewater analysis, and emission measurement | opening stock; purchases; transfers; closing stock; recovered mass; reused mass; spent-solvent mass; solvent in wastewater; product retention; measured air release; abatement capture; product model; output mass | Establish a closed-period solvent mass balance and investigate unexplained residuals | kg | Per batch with monthly or campaign closure | Complete reporting period aligned to product output | All isopropanol storage, transfer, cleaning, drying, recovery, and waste points at the site | Reconcile inputs to inventory change, recovery, wastes, retained solvent, and direct emissions; normalize each result to net conforming output mass | Inventory sheets, calibrated scales or meters, recovery logs, waste manifests, analytical results, emission records, and signed balance |
| `cp_packaging` | `parts_manufacturing` | Factory-gate packaging inputs | Packaging BOM, purchase specification, packing instruction, and sample weigh record | packaging item identity; material; unit mass; units per shipment; products per shipment; reused cycles where verified; product model | Weigh each packaging component or use supplier mass verified by periodic sample weighing | kg | Per packaging configuration and when it changes | Current shipping configuration within the reporting period | Packaging applied before the factory gate | Multiply verified unit mass by units used and allocate by products per shipment, then divide by net product mass | Approved packing instruction, supplier specification, sample scale record, and change control |
| `cp_waste_outputs` | `parts_manufacturing` | Material scrap and cleaning wastewater | Segregated bin weigh ticket, waste manifest, effluent meter, discharge record, and treatment transfer | waste identity; material or contaminant; mass or volume; date; product model or line; treatment state; recovery or treatment destination; output mass | Keep material-specific waste streams separate and reconcile internal logs to transporter or treatment records | kg or m3 | Per transfer, aggregated monthly | Same period as product output | All in-scope foreground operations and on-site collection points | Sum each atomic waste flow, allocate shared streams with documented causal drivers, and divide by net conforming output mass | Calibrated scale or flow meter, manifest, treatment receipt, analytical profile where relevant, and reconciliation |
| `cp_product_output` | `parts_manufacturing` | Conforming reference product | Production, final inspection, and shipment release record | product identity; parent-device family; model; compatibility; serial or lot; net mass; accepted quantity; rejected quantity; test result; date | Weigh or calculate verified net mass only after final acceptance; reconcile to released production | kg | Per lot | Same period as all foreground inputs and outputs | Declared manufacturing site | Sum accepted net product mass; use it as the denominator for all normalized exchanges | Calibrated scale, final inspection record, test record, release authorization, and production reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | normalized inventory rows | normalized amount = attributable reporting-period flow amount / net conforming reporting-period output mass | Atomic flow amount; net conforming output mass | Flow amount per 1 kg reference product | `eu-pef-method-2021` |
| `calculation_rule_2` | electricity | electricity (MJ/kg) = attributable electricity (kWh) × 3.6 / net conforming output mass (kg) | Metered or allocated kWh; conforming output mass | MJ per 1 kg reference product |  |
| `calculation_rule_3` | net material consumption | net consumed mass = opening stock + receipts + transfers in − closing stock − returns − transfers out; reconcile the result to BOM issues and measured waste | Inventory and transaction fields; BOM; waste mass | kg of each atomic input per 1 kg reference product |  |
| `calculation_rule_4` | isopropanol mass balance | direct unaccounted release = opening stock + purchases + transfers in − closing stock − transfers out − recovered solvent − spent-solvent waste − isopropanol in wastewater − verified product retention; replace the residual with direct measurement when available and do not report a negative result | Solvent inventory, purchase, transfer, recovery, waste, wastewater-analysis, retention, and measurement records | kg isopropanol to air per 1 kg reference product, with reconciliation residual disclosed | `us-epa-industrial-cleaning-solvents-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `data_quality_1` | Product and flow identity | Each row names one physical, chemical, energy, waste, or elementary exchange and carries its applicable form, grade, compartment, treatment state, and supplier or destination qualifiers. | Approved BOM, specifications, manifests, direct-read UUID audit, and atomic-flow review |
| `data_quality_2` | Completeness | Reconcile the product-specific BOM and all known inputs and outputs to production, inventory, utility, waste, and emissions records. Explain every excluded or unlinked actual exchange. | Completeness checklist, balances, reconciliation sign-off, and exception log |
| `data_quality_3` | Temporal representativeness | Use one representative 12-month period where continuous production exists, or a complete declared campaign for intermittent production; align all numerator and denominator records. | Dated source extracts, campaign definition, and period-alignment check |
| `data_quality_4` | Technological and geographical representativeness | Match site technology, material grades, cleaning route, electricity geography, supplier geography, and waste destinations; disclose proxies and their effect on interpretation. | Process description, supplier records, dataset metadata, and proxy register |
| `data_quality_5` | Measurement and uncertainty | Retain calibration status, measurement resolution, allocation basis, missing-data treatment, and material- or solvent-balance residuals; investigate material residuals before release. | Calibration certificates, allocation worksheet, uncertainty record, and reviewer sign-off |
| `data_quality_6` | Data verification | A reviewer independent of data preparation checks reference-flow normalization, UUID semantics, conditional-route applicability, balances, source links, and bilingual consistency. | Completed verification record and resolved findings |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | Confirm that `reference_product` is a conforming CPC 48354 part or accessory for a declared CPC 48315 parent-device family and that its net output is exactly 1 kg excluding transport packaging. | `un-cpc-3-0-structure-2025`; `eu-pef-method-2021` |
| `validation_rule_2` | required_qualifiers | Reject a dataset that omits parent-device family, part/accessory function, compatibility, composition, manufacturing route, acceptance specification, site, period, or packaging configuration. |  |
| `validation_rule_3` | atomic_inventory | Confirm that every actual BOM, utility, packaging, waste, and direct emission is represented by one atomic exchange with correct direction, flow type, property, unit, and route condition. | `eu-pef-method-2021` |
| `validation_rule_4` | tiangong_uuid_identity | Confirm every populated Tiangong UUID by a public state-100 direct read against English and Chinese baseName, flow type, classification, property, unit group, product state, geography, technology, and generalComment; keep unresolved rows blank rather than substituting proxies. |  |
| `validation_rule_5` | conditional_routes | Confirm that aluminium, stainless steel, ABS, copper, aqueous cleaning, isopropanol cleaning, and corrugated-cardboard rows are included only when the declared BOM and site route use them; add any different actual material or process flow as a separate atomic row. |  |
| `validation_rule_6` | mass_and_solvent_balance | Reconcile material input, conforming output, material-specific scrap, other actual outputs, and inventory change; where isopropanol is used, separately reconcile solvent input, recovery, waste, wastewater content, retention, and air release. | `us-epa-industrial-cleaning-solvents-2006` |
| `validation_rule_7` | data_quality_and_sources | Confirm period alignment, calibration, product-specific company data, upstream dataset links, proxy disclosure, calculation reproducibility, and source-id resolution before dataset release. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset for production of a named liquid-crystal device n.e.c., laser other than a laser diode, or other optical appliance/instrument n.e.c.; may also support a product-specific foreground assembly model |
| allowed_use | Factory-gate modelling of the declared part/accessory configuration where parent-device family, compatibility, composition, route, geography, technology, period, and packaging match the study |
| excluded_use | Direct comparison of unlike part functions or parent-device families; substitution for a complete CPC 48315 device; use-stage, maintenance, service-life, or end-of-life claims; or application to unreported materials and routes |
| required_metadata | PCR id and status; product and parent-device identity; function and compatibility; net reference mass; BOM and supplied forms; manufacturing, cleaning, test, rework, and packaging route; site and geography; reporting period; allocation; upstream datasets; waste destinations; unresolved UUIDs and proxies |
| required_quality_disclosure | Primary-data share; period coverage; calibration and reconciliation status; allocation drivers; material- and solvent-balance residuals; missing flows; proxy datasets; UUID audit status; data-quality review findings |
| update_trigger | Change in product function or compatibility, material or component BOM, manufacturing or cleaning technology, site or electricity geography, allocation driver, supplier mix, waste route, packaging configuration, acceptance test, or a material change in measured normalized exchanges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-09-07) | Official CPC 48354 title, hierarchy, and relation to CPC 48315 |
| `un-cpc-1-1-chinese-2004` | official_guidance | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (accessed 2026-09-07) | Professional Chinese terminology for parts and accessories and the CPC 48315 product family |
| `eu-pef-method-2021` | official_guidance | European Commission, Recommendation (EU) 2021/2279 on the Product Environmental Footprint method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (accessed 2026-09-07) | Functional-unit and reference-flow framing; product-specific BOM; company-specific manufacturing data; completeness; allocation; data quality; verification |
| `us-epa-industrial-cleaning-solvents-2006` | official_guidance | U.S. Environmental Protection Agency, Control Techniques Guidelines: Industrial Cleaning Solvents, EPA453/R-06-001, September 2006, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1009NYV.TXT (accessed 2026-09-07) | Conditional cleaning of parts, laser hardware and precision optics; solvent accounting; spent-solvent handling; direct VOC emissions |
