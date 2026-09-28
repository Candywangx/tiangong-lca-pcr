---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fans-and-ventilating-or-recycling-hoods-of-the-domestic-type
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fans and ventilating or recycling hoods of the domestic type

## 1. Scope and Applicability

This rule produces a foreground data package for one complete domestic fan or domestic ventilating or recirculating hood at the factory gate. The declared configuration may be a stand-alone domestic fan, a fan-equipped extraction hood, a recirculating hood, or a hood served by an external air-handling unit. Declare whether a fan motor is integrated, supplied as a separate module, or absent. The Finnish cooker-hood EPD explicitly places its products in CPC 44815 and documents purchased-part assembly; the residential ventilation study distinguishes local fans, motorized kitchen hoods, and recirculating use (`swegon-casa-hood-epd-2022`; `eu-residential-ventilation-2009`). The EPD's site and product assumptions are case evidence, not universal quantities.

The system includes attributable upstream material and purchased-component supply, inbound transport, on-site fabrication when performed, final assembly, functional testing, and packaging through release of the saleable product. Installation, operating electricity, filter replacement in use, distribution after the factory gate, and end-of-life are outside this factory-gate dataset; downstream models may add them separately. Standalone non-domestic ventilation equipment and separately sold fan or hood parts have distinct product boundaries.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fans-and-ventilating-or-recycling-hoods-of-the-domestic-type |
| classification_refs | CPC 3.0: 44815; classification identity only |
| covered_products | Complete domestic fans; domestic ventilating hoods; domestic recirculating hoods |
| excluded_products | Non-domestic fans; separately sold fan/hood parts; installed ventilation service; operating-stage electricity |
| representative_product | One accepted domestic fan or hood of declared model and configuration |
| production_route | Purchased-component assembly; conditional on-site steel-sheet fabrication or polypropylene molding |
| market_state | Complete saleable appliance at factory gate, with transport packaging recorded separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared domestic air-moving, ventilation or recirculation function in a complete appliance. |
| How much | One accepted finished machine of the declared model and configuration. |
| How well | Declare rated airflow, motor presence and rating, filtration or extraction mode, and test acceptance criteria. |
| How long or cycle | One saleable product at the factory gate; service life and use schedule are separate downstream declarations. |
| reference_flow_link | finished_domestic_fan_or_hood |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Fans and ventilating or recycling hoods of the domestic type `d241cf7b-4dd0-49d5-89d1-2cf1905189ce` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product kind; model and configuration; integrated or external motor; ventilation or recirculation route; rated airflow; accepted net mass M; factory and reporting year |

When constructing a foreground data package, all Required qualifiers must be explicit in the dataset metadata, product description or process notes. M is measured for the same accepted machine configuration; it is not a fixed category weight.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_factory_gate | foreground system | Include attributable upstream components and their inbound transport, on-site fabrication where performed, assembly, testing and packaging through accepted factory-gate release. Exclude later use and end-of-life.  | `swegon-casa-hood-epd-2022` |
| boundary_configuration | product configuration | Disclose domestic fan versus hood, integrated-fan status, ducted versus recirculating route, and whether metal or polymer components are made on-site. | `swegon-casa-hood-epd-2022`, `eu-residential-ventilation-2009` |
| boundary_internal_transfer | same-category purchased input | Record a purchased completed fan or hood as an input with a separate upstream dataset; do not recursively count its own manufacturing inside this foreground plant. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components arrive at the production site in their actual supplied state; disclose which subassemblies are purchased. |
| starting_condition_role | Foreground factory-gate entry condition for component and material accounting. |
| product_classification_scope | Complete domestic fans and domestic ventilating or recirculating hoods; not separate saleable parts. |
| recursive_input_rule | If a complete same-category appliance is used as an input, use its separately identified upstream dataset and prevent recursive self-application. |
| upstream_dataset_requirement | Use specific upstream material, component and inbound-transport datasets matched to supplied states; disclose gaps. |
| disclosure | List model, configuration, integrated motor, ducted or recirculating mode, fabrication route and included packaging. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| component_fabrication | On-site component fabrication | conditional | Include when steel sheet is cut or formed, or polypropylene is molded at the reporting site. | Foreground fabrication and segregated scrap | per one accepted finished machine |
| final_assembly | Final assembly, testing and packaging | required | All finished domestic fan or hood configurations. | Foreground assembly and release | per one accepted finished machine |

### Process: Component fabrication (`component_fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled unalloyed steel sheet (`cold_rolled_steel_sheet`)

Include only when the plant cuts or forms cold-rolled unalloyed steel sheet for a hood shell or fan part. Record net sheet input attributable to accepted finished machines; purchased finished housings are accounted for in the model-specific bill of materials instead.

- Selected flow: Cold-rolled unalloyed steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity per one accepted finished machine using cp_fabrication_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `eu-residential-ventilation-2009`

###### Polypropylene granulate for molding (`polypropylene_granules`)

Include only when the plant molds polypropylene housings or impellers. Identify resin grade and recycled content in foreground records; purchased molded components are accounted for by their specific product flows.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity per one accepted finished machine using cp_fabrication_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `eu-residential-ventilation-2009`

#### Outputs

##### Waste flows

###### Steel sheet offcuts (`steel_offcuts`)

Include segregated steel offcuts when on-site sheet cutting occurs. Record external waste transfer after any documented internal reuse.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity per one accepted finished machine using cp_fabrication_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_waste`
- Sources: `eu-residential-ventilation-2009`

###### Polypropylene molding scrap (`polypropylene_scrap`)

Include separately weighed polypropylene rejects and purges only when on-site molding occurs; subtract documented closed-loop regrind that remains inside the process.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity per one accepted finished machine using cp_fabrication_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_waste`
- Sources: `eu-residential-ventilation-2009`

### Process: Final assembly, testing and packaging (`final_assembly`)

#### Inputs

##### Product flows

###### Purchased electric motor (`electric_motor`)

Include a separately purchased electric motor only when the accepted configuration incorporates a fan and the motor is not already included in a purchased fan module. Record motor type, rated power and supplier mass.

- Selected flow: Electric motor for domestic fan
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity per one accepted finished machine using cp_purchased_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purchased_parts`
- Sources: `eu-residential-ventilation-2009`

###### Factory grid electricity (`grid_electricity`)

Include metered electricity attributable to assembly, configuration, functional testing and packaging. Disclose the site grid and any allocation from a shared meter.

- Selected flow: Grid electricity supplied to appliance assembly
- Flow property / unit: Energy / kWh
- Amount rule: Collect attributable quantity per one accepted finished machine using cp_electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `swegon-casa-hood-epd-2022`

###### Corrugated shipping box (`corrugated_box`)

Include a corrugated box when the accepted appliance is shipped in one. Record the actual box mass and account for reused transport packaging by documented reuse cycles.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity per one accepted finished machine using cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `swegon-casa-hood-epd-2022`

#### Outputs

##### Product flows

###### Accepted finished domestic fan or hood (`finished_domestic_fan_or_hood`)

Record one complete, accepted, saleable appliance of the declared configuration at the factory gate. Transport packaging is excluded from net product mass M.

- Selected flow: Fans and ventilating or recycling hoods of the domestic type `d241cf7b-4dd0-49d5-89d1-2cf1905189ce`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `swegon-casa-hood-epd-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared factory processes | First use separate meters, material issues, work orders and product-specific labor or machine hours. Allocate only unavoidable shared electricity and heat by recorded activity hours for the same site and period; disclose the driver. | `swegon-casa-hood-epd-2022` |
| allocation_scrap | fabrication waste | Keep documented internal regrind or rework inside the process. Record externally transferred offcuts as waste and disclose any economic credit separately; never credit the same mass twice. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | final_assembly | accepted reference product | weighing record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each model/configuration sample and every change | reporting year | reporting factory | accepted net mass per machine | calibration certificate; signed acceptance record |
| cp_fabrication_materials | component_fabrication | steel sheet and polypropylene input | issue and return ledger | material grade; issued mass; returned mass; model; accepted count | Reconcile weighed material issues, returns and bill of materials to accepted output. | kg | each production batch | reporting year | on-site fabrication | attributable net material mass / accepted machines | purchase and batch issue records |
| cp_fabrication_waste | component_fabrication | segregated steel and polypropylene waste | waste transfer ledger | material identity; gross scrap mass; internal return mass; accepted count | Weigh each separated waste stream and reconcile documented internal reuse and external transfer. | kg | each production batch | reporting year | on-site fabrication | external waste mass / accepted machines | scale and transfer records |
| cp_purchased_parts | final_assembly | purchased motor | supplier and issue record | motor specification; supplier mass; issued quantity; accepted count | Match motor specification and supplier mass to the accepted configuration and issue records. | kg | each model or supplier change | reporting year | reporting factory | attributable motor mass / accepted machines | supplier bill of materials; receiving record |
| cp_electricity | final_assembly | grid electricity | meter record | meter start; meter end; test cycle; accepted count; allocation driver | Read calibrated electricity meters for assembly, test and packaging, then reconcile any shared-meter allocation. | kWh | monthly and each production batch | reporting year | reporting factory | attributable electricity / accepted machines | meter calibration; work-order hours |
| cp_packaging | final_assembly | corrugated box | packing bill of materials | box specification; box mass; issued count; reuse count; accepted count | Weigh or use traceable supplier mass for each box issued to accepted products. | kg | each packaging specification change | reporting year | reporting factory | attributable corrugated box mass / accepted machines | packing record; supplier mass certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_unit_average | all inventory rows except finished_domestic_fan_or_hood | Per-machine amount = attributable batch amount divided by the count of accepted machines of the same configuration; deduct documented internal returns before division. | attributable batch amount; accepted machine count | per-machine exchange | `swegon-casa-hood-epd-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_bom | all purchased materials and parts | Reconcile the full model-specific bill of materials, including motors, electronics, filters, glass and packaging where present; add each missing exchange as a separate concrete flow before dataset release. | approved bill of materials; receiving records |
| dq_route | conditional fabrication and motor rows | Demonstrate the actual site route and accepted configuration; document omitted conditional rows as absent, not zero by default. | routing sheet; product specification |
| dq_mass | reference product | Verify M for the same accepted configuration and exclude transport packaging. | calibrated weighing and acceptance record |
| dq_period | all foreground quantities | Use one reporting period and site; document any supplier or meter gaps and allocation drivers. | dated ledgers; meter logs; supplier statements |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference product | Reject a dataset without a confirmed finished CPC 44815 product identity, one accepted configuration, measured net mass M in kg, and an output row of M kg. | `swegon-casa-hood-epd-2022` |
| validate_inventory | foreground inventory | Check every included material, energy, packaging and waste stream against the model bill of materials and site route; preserve one atomic exchange per flow. | `swegon-casa-hood-epd-2022`, `eu-residential-ventilation-2009` |
| validate_balance | fabrication and release | Reconcile material issue, internal return, finished-product mass and externally transferred scrap; explain residual differences without forcing a fixed yield. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for a complete domestic fan or hood at factory gate. |
| downstream_use | secondary_dataset; background_dataset for product-specific downstream process or lifecyclemodel. |
| allowed_use | Use only for the declared model/configuration, factory route, geography and reporting year, or disclose representativeness limits. |
| excluded_use | Do not infer use-stage performance, service life impacts or end-of-life from this factory-gate inventory. |
| required_metadata | Product kind; model; accepted M; motor configuration; airflow; ventilation/recirculation route; fabrication route; site; year; included packaging. |
| required_quality_disclosure | BOM completeness; meter and weighing evidence; allocation drivers; unresolved flow UUIDs; missing upstream datasets. |
| update_trigger | Model, motor, material, supplier, site, route, energy mix or packaging change. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `swegon-casa-hood-epd-2022` | Published dataset (`dataset`) | EPD Swegon CASA cooker hoods (2022), https://ecowise.lv/wp-content/uploads/2023/09/EPD.pdf | Finished cooker-hood identity, bill of materials, purchased-part assembly, factory inputs, packaging and allocation. |
| `eu-residential-ventilation-2009` | Official guidance (`official_guidance`) | Study on residential ventilation - Final report (2009), https://circabc.europa.eu/sd/a/773b634f-9e34-444c-9406-3693982e00b3/V%20_%20Ventilation%20_%20final%20report.pdf | Residential fan and motorized-hood boundary; fan material categories. Fan examples are not empirical hood ranges. |
