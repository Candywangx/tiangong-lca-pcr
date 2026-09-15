---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.doors-windows-and-their-frames-and-thresholds-for-doors-of-iron-steel-or-aluminium
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Doors, windows and their frames and thresholds for doors, of iron, steel or aluminium

## 1. Scope and Applicability

This PCR governs cradle-to-gate foreground data packages for manufacturing finished, uninstalled doors, windows, their frames, and door thresholds whose load-bearing or framing material is iron, steel, aluminium, or their alloys. It applies to a complete product or to a separately marketed frame or threshold. The declared product may be glazed or unglazed and may include integral seals, hardware, thermal breaks, and factory-applied finishes when these are part of the delivered product configuration.

The PCR excludes wooden or plastics-framed products, curtain-wall systems, vehicle doors or windows, gates, shutters and blinds, standalone glazing, standalone hardware, installation at the building, use-stage operation and maintenance, and end-of-life. A producer shall identify the product form and material route and shall not average materially different door, window, frame-only, or threshold-only configurations unless the averaging rule and production-weighted shares are disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.doors-windows-and-their-frames-and-thresholds-for-doors-of-iron-steel-or-aluminium |
| classification_refs | CPC 3.0: 42120 (exact context reference) |
| covered_products | Finished iron, steel, or aluminium pedestrian doors and windows; their separately marketed frames; door thresholds; glazed or unglazed factory configurations |
| excluded_products | Wood- or plastics-framed products; curtain walls; vehicle closures; gates, shutters, and blinds; standalone glass or hardware; installation, use, and end-of-life services |
| representative_product | A factory-finished metal-framed pedestrian window or doorset, with the declared glazing, seals, hardware, and finish included in its bill of materials |
| production_route | Purchased metal profiles or formed sections are cut, machined, joined, optionally surface-treated, and assembled with the declared components; alternative metal and finish routes remain separately qualified |
| market_state | Quality-controlled, uninstalled, unpackaged finished product at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished iron-, steel-, or aluminium-framed door, window, frame, or door threshold conforming to the declared product configuration and intended use |
| How much | 1 kg net mass of accepted factory-gate product |
| How well | The declared dimensions, primary metal and alloy, product form, finish, glazing, seals, hardware, thermal-break configuration, and applicable performance specification are met |
| How long or cycle | One production batch; no service-life duration or use-stage performance is credited in this cradle-to-gate reference flow |
| reference_flow_link | The reference flow is the net accepted-product mass after final inspection, excluding reusable production fixtures and transport packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Doors, windows and their frames and thresholds for doors, of iron, steel or aluminium `9001a0d2-880c-41ca-9e98-18d421dfc46f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form (door, window, frame, or threshold); primary metal and alloy/grade; net product mass; dimensions; opening type; surface finish and coating route; glazing construction and gas fill when present; seal and thermal-break materials when present; hardware included; fire/security/thermal/acoustic or other declared performance; production site and geography; reporting period; factory-gate state |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-based inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry mass at the factory gate. Exclude reusable racks, tooling, and transport packaging from the reference amount; separately disclose any non-reusable packaging brought into scope. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter data and convert kWh to MJ by multiplying by 3.6; disclose grid mix, voltage level, geography, losses, and delivery boundary. |
| `gas_volume_conditions` | Gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume and the reference temperature, pressure, and dry/wet basis; do not combine gases or convert from mass without a documented composition and density basis. |
| `water_mass_basis` | Process water and aqueous waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass measurement. A volume-to-mass conversion shall use measured or supplier-declared density and the applicable temperature; retain the original meter value. |
| `treated_area_driver` | Surface finishing | Mass for inventory exchange; m2 as supporting driver | kg; m2 | Record coating and chemical inputs as exchange mass and separately retain treated metal area, line, bath chemistry, coating thickness, and rework rate as process drivers. |

## 5. System Boundary

The foreground boundary begins when purchased metal profiles or formed sections, integral components, energy carriers, and process chemicals enter the manufacturing site. It includes cutting, drilling, punching, forming, machining, joining, in-process movement, conditional surface preparation and finishing, curing or drying, glazing and hardware assembly, final inspection, rework, on-site waste segregation, and on-site treatment before wastes or emissions cross the site boundary. Upstream production of purchased inputs is represented by linked supplier-specific or appropriate background datasets. The boundary ends at the factory gate for the accepted, uninstalled, unpackaged product.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased profiles, formed sections, glazing units, seals, hardware, chemicals, and energy carriers at the manufacturing-site receiving boundary |
| starting_condition_role | Upstream products with separately linked supply datasets; not burden-free starting materials |
| product_classification_scope | Factory manufacture of finished iron-, steel-, or aluminium-framed doors, windows, frames, and door thresholds within the reviewed semantic boundary |
| recursive_input_rule | A purchased input already meeting this same finished-product category is recorded as an upstream product input with its own dataset and is not reopened into the present foreground manufacture |
| upstream_dataset_requirement | Supplier-specific datasets are preferred for metal alloy/grade, recycled content, coating state, glazing, seals, and hardware; otherwise use geographically and technologically representative datasets and disclose substitutions |
| disclosure | Declare product form, alloy/grade, recycled content when known, component bill of materials, finish route, treated area, glazing and hardware configuration, site, geography, reporting period, allocation, scrap destinations, wastewater treatment, and factory-gate state |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all datasets | Include all on-site manufacturing operations from receipt of purchased inputs through accepted-product inspection; exclude installation, use, and end-of-life unless a separately declared extended system is created. | `epd-international-windows-doors-cpcr-2026` |
| `boundary_product_scope` | product identity | Keep door, window, frame-only, and threshold-only configurations within the iron/steel/aluminium product boundary and disclose the exact represented configuration. | `un-cpc-3-0-structure-2025` |
| `boundary_surface_treatment` | conditional surface finishing | Include aqueous pretreatment, coating or anodizing operations, rinsing, drying/curing, wastewater treatment, sludge, and direct emissions whenever performed on site; otherwise link the purchased prefinished profile or outsourced-treatment dataset. | `eu-jrc-stm-bref-2006` |
| `boundary_additional_components` | product-specific bill of materials | Record every additional material or component crossing the foreground boundary as its own atomic exchange; do not substitute a collective hardware, packaging, chemical, or materials row. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_fabrication_assembly` | Integrated component fabrication and final assembly | required | Always included for the declared factory-gate product | Foreground cutting, machining, joining, glazing/hardware assembly, inspection, and scrap segregation | 1 kg accepted factory-gate product |
| `surface_finishing` | On-site aqueous pretreatment and coating/curing | conditional | Include only when cleaning, conversion coating, anodizing, powder coating, wet coating, galvanizing, curing, or drying occurs within the reporting site | Foreground surface preparation, finishing, and associated wastewater/waste management | 1 kg accepted product and declared treated metal area |

### Process: Integrated component fabrication and final assembly (`integrated_fabrication_assembly`)

#### Inputs

##### Product flows

###### Aluminium extrusion profile (`aluminium_extrusion_profile`)

Record purchased aluminium extrusion profile only for aluminium-bearing configurations; declare alloy, temper, recycled content when known, supplier, coating state, and received mass.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net received mass consumed in accepted product plus measured process loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Cold-formed steel profile (`cold_formed_steel_profile`)

Record cold-formed iron or non-alloy-steel sections only for ferrous configurations; declare grade, section geometry, coating state, supplier, and received mass.

- Selected flow: Cold-forming shapes `f2eb1e33-3d42-40ef-a0da-2532cf491ddf`
- Flow property / unit: Mass / kg
- Amount rule: Net received mass consumed in accepted product plus measured process loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Insulating glass unit (`insulating_glass_unit`)

Record one factory-made insulating glass unit when it is integrated into the declared product; specify pane build-up, coatings, spacer, gas fill, and supplier. The exact Tiangong flow UUID remains unresolved.

- Selected flow: Insulating glass unit
- Flow property / unit: Mass / kg
- Amount rule: Net installed glazing mass plus measured breakage and rejected-unit loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### EPDM rubber gasket (`epdm_gasket`)

Record one ethylene-propylene-diene monomer rubber gasket exchange when this seal is installed; do not use the row for other elastomers. The exact Tiangong flow UUID remains unresolved.

- Selected flow: EPDM rubber gasket
- Flow property / unit: Mass / kg
- Amount rule: Net gasket mass installed plus measured cutting loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Fabrication electricity (`fabrication_electricity`)

Record purchased electricity used by cutting, machining, forming, joining, assembly, inspection, extraction, and allocated supporting equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sub-metered use or documented allocation from site meter records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_gases`
- Sources:

###### Industrial oxygen (`industrial_oxygen`)

Record industrial oxygen only when supplied across the site boundary for oxy-fuel cutting or another declared fabrication operation; declare purity, pressure, and reference conditions.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Supplier-delivered or metered oxygen volume attributable to the represented product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_gases`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted factory-gate product (`finished_metal_door_window`)

Record the net mass of inspected product that meets the declared configuration and quality requirements.

- Selected flow: Doors, windows and their frames and thresholds for doors, of iron, steel or aluminium `9001a0d2-880c-41ca-9e98-18d421dfc46f`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net accepted-product mass by definition of the reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Segregated aluminium offcut scrap (`aluminium_scrap`)

Record aluminium offcuts and rejected aluminium components leaving the foreground as a segregated waste output; declare alloy/coating contamination and destination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated aluminium scrap leaving the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_mass`
- Sources:

###### Segregated steel offcut scrap (`steel_scrap`)

Record ferrous offcuts and rejected steel components leaving the foreground as a segregated waste output; declare grade/coating contamination and destination.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated steel scrap leaving the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_waste_mass`
- Sources:

##### Elementary flows

### Process: On-site aqueous pretreatment and coating/curing (`surface_finishing`)

#### Inputs

##### Product flows

###### Process water (`process_water`)

Record water delivered to on-site cleaning, bath make-up, rinsing, cooling associated with the finishing line, and wastewater treatment; exclude sanitary water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-balance process-water input attributable to the represented product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Sodium hydroxide (`sodium_hydroxide`)

Record sodium hydroxide only when used in an alkaline cleaning, etching, bath-maintenance, or wastewater-treatment step; retain solution concentration and active-product conversion.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass from purchase, issue, concentration, and inventory-change records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_chemicals`
- Sources: `eu-jrc-stm-bref-2006`

###### Powder coating (`powder_coating`)

Record powder coating only for a declared on-site powder-coating route; specify resin system, colour, supplier, coating thickness, recovered overspray, and cure schedule.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Issued powder minus returned reusable powder and closing inventory, assigned to accepted output and measured rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_chemicals`
- Sources: `eu-jrc-stm-bref-2006`

###### Finishing electricity (`finishing_electricity`)

Record electricity used by baths, pumps, ventilation, wastewater treatment, coating application, curing, drying, and allocated finishing-line support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sub-metered finishing-line use or documented allocation from site meter records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_gases`
- Sources: `eu-jrc-stm-bref-2006`

###### Natural gas for curing or drying (`natural_gas`)

Record gaseous natural gas only when combusted on site for bath heating, curing, or drying; declare composition, supplier, reference conditions, and combustion equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or supplier-invoiced volume assigned to the finishing line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_gases`
- Sources: `eu-jrc-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Metal-hydroxide wastewater-treatment sludge (`metal_hydroxide_sludge`)

Record dewatered sludge generated when metal-bearing finishing wastewater is precipitated and separated; declare dry solids, principal metals, hazardous classification, and destination. The exact Tiangong flow UUID remains unresolved.

- Selected flow: Metal-hydroxide wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet sludge leaving the site, with dry-solids fraction retained as a quality field
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `eu-jrc-stm-bref-2006`

###### Metal-bearing surface-treatment rinse wastewater (`metal_bearing_rinse_wastewater`)

Record aqueous rinse wastewater containing metals or finishing chemicals only when it crosses the site boundary for sewer discharge or external treatment; declare pH, principal metals/ions, treatment state, and destination. The exact Tiangong flow UUID remains unresolved.

- Selected flow: Metal-bearing surface-treatment rinse wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass or volume converted using documented density, net of separately metered non-process water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_wastes`
- Sources: `eu-jrc-stm-bref-2006`

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`fossil_carbon_dioxide`)

Record only direct fossil carbon dioxide emitted by on-site combustion assigned to the finishing line; upstream electricity and fuel-supply emissions remain in linked upstream datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel carbon balance calculated from metered gas and documented carbon content, oxidation, and equipment allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted factory-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-stm-bref-2006`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared production and finishing lines | Prefer sub-metering, batch records, and physical subdivision. Do not allocate a site's unrelated production to the declared product. |  |
| `allocation_shared_utilities` | utilities serving multiple products | Allocate only residual shared utility use with a documented causal driver such as machine time, treated area, oven occupancy, or accepted mass; report the driver and share. |  |
| `allocation_scrap` | aluminium and steel scrap outputs | Record gross scrap mass and destination as waste outputs. Do not subtract an avoided-burden credit from foreground inputs; any recycling benefit or load belongs to the explicitly declared downstream model. |  |
| `allocation_rework` | rework and rejected products | Include rework energy and materials in the batch that generated them; return internally recycled material only once and retain a mass-balance record preventing double counting. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `integrated_fabrication_assembly` | metal profiles, glazing, gaskets, and additional atomic BOM inputs | purchase receipts, issue/return records, BOM, stock counts, reject logs | material identity; supplier; alloy/composition; opening stock; receipts; issues; returns; closing stock; accepted and rejected product assignment | Reconcile purchasing and stores ledgers to product-level BOM and production orders | kg | each batch; monthly reconciliation | representative reporting period, normally at least 12 consecutive months | all lines and stores serving the declared product | (opening + receipts - returns - closing) divided by accepted reference-product mass | calibrated scales; supplier certificates; inventory reconciliation; product BOM revision |
| `cp_energy_gases` | both processes | electricity, natural gas, and industrial oxygen | sub-meters, invoices, run-time logs | meter start/end; invoice quantity; reference conditions; line; machine hours; oven occupancy; accepted output | Prefer sub-metering; reconcile to site invoice and allocate only residual shared use by a causal driver | MJ for electricity; m3 for gases | continuous or per batch; monthly reconciliation | same period as production | all meters and equipment serving the declared boundary | eligible measured quantity divided by accepted product mass | meter calibration; invoice reconciliation; allocation worksheet; grid and fuel metadata |
| `cp_water_records` | `surface_finishing` | process water | water sub-meter, tank make-up, discharge records | meter readings; bath additions; rinse flow; density if converted; production assignment | Sub-meter the finishing line or reconcile tank and site water balances | kg and original m3 | continuous or daily; monthly reconciliation | same period as finishing production | finishing and associated on-site treatment only | net eligible water input divided by accepted product mass | meter calibration; balance closure; exclusion of sanitary water |
| `cp_finishing_chemicals` | `surface_finishing` | sodium hydroxide, powder coating, and each additional atomic chemical | purchase, issue/return, bath analysis, stock and recovery records | product identity; concentration; opening/closing stock; issued; returned; recovered overspray; bath additions; treated area; accepted output | Calculate active chemical or net coating consumption from auditable stock and concentration records | kg | each batch or shift; monthly reconciliation | same period as finishing production | each finishing line used by the declared product | net active input or net issued coating divided by accepted product mass | supplier SDS/TDS; concentration test; scale calibration; stock reconciliation |
| `cp_output_waste_mass` | `integrated_fabrication_assembly` | accepted product and segregated metal scraps | scale tickets, quality release, waste transfer records | gross/tare/net mass; alloy or grade; coating state; accepted/rejected status; destination | Weigh accepted output and each segregated scrap stream independently | kg | each batch or shipment | same period as production | all declared-product lines and waste areas | sum by stream divided by accepted product mass | calibrated scales; signed transfer notes; batch mass balance |
| `cp_finishing_wastes` | `surface_finishing` | metal-hydroxide sludge and metal-bearing rinse wastewater | discharge meters, laboratory results, sludge scale tickets, manifests | mass or volume; density; dry solids; pH; principal metals and ions; treatment state; destination | Meter liquid discharge and weigh sludge; sample according to site permit or operating plan | kg plus retained composition fields | each discharge or waste shipment | same period as finishing production | on-site finishing and treatment boundary | sum each chemically distinct stream divided by accepted product mass | meter/scale calibration; laboratory chain of custody; waste classification and transfer record |
| `cp_direct_air_emissions` | `surface_finishing` | direct fossil carbon dioxide | stack measurement or fuel carbon-balance records | gas consumption; carbon content; oxidation basis; stack result; equipment and product allocation | Use measured direct emissions or a transparent site-specific carbon balance without including upstream energy emissions | kg | per test and monthly calculation | same period as fuel use | combustion equipment within the declared site boundary | eligible direct fossil CO2 divided by accepted product mass | test report or fuel certificate; calculation sheet; meter reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | all inventory rows | normalized amount = eligible row quantity / net accepted reference-product mass | collected row quantity; accepted product mass | amount per 1 kg reference product |  |
| `calc_electricity` | electricity meters | electricity (MJ) = electricity (kWh) × 3.6 | original kWh reading | MJ |  |
| `calc_active_naoh` | sodium-hydroxide solution | active NaOH mass = solution mass × measured or supplier-declared NaOH mass fraction | solution mass; concentration | kg active NaOH |  |
| `calc_powder_net` | powder coating | net powder input = opening stock + receipts - returns - recovered reusable powder - closing stock | stock, receipt, return, and recovery records | kg powder consumed |  |
| `calc_mass_balance` | each product configuration and reporting period | Compare measured material inputs with accepted product, segregated scraps, measured wastes, stock change, and documented emissions; investigate unexplained imbalance before publication | material and output records | disclosed mass-balance closure |  |
| `calc_direct_co2` | on-site natural-gas combustion | Use stack measurement or calculate fossil CO2 from metered fuel, documented carbon content and oxidation, excluding upstream fuel and electricity emissions | fuel and carbon records | kg fossil CO2 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Product form, alloy/grade, dimensions, finish, glazing, seals, hardware, performance specification, and factory-gate state shall identify one reproducible configuration or a disclosed production-weighted group. | Product drawing; BOM; order code; declaration of performance or equivalent specification |
| `dq_temporal` | all foreground data | Use one consistent representative period and explain shutdowns, abnormal rework, missing months, and extrapolation. | Production calendar; meter and ledger coverage matrix |
| `dq_completeness` | material, utility, waste, and emission rows | Reconcile all meters, purchase/stock records, accepted output, rejects, scrap, wastewater, sludge, and direct emissions within the declared boundary; document genuinely absent conditional rows as not applicable. | Completeness checklist and mass/energy reconciliations |
| `dq_supplier` | upstream inputs | Retain supplier, geography, technology, recycled content when known, and product state for each linked upstream dataset; document any proxy. | Supplier certificate, invoice, and dataset-selection record |
| `dq_measurement` | measured quantities | Use calibrated or legally controlled meters and scales where applicable; retain units, reference conditions, conversion inputs, and uncertainty or resolution. | Calibration certificate; raw reading; conversion worksheet |
| `dq_unresolved_uuid` | unresolved flow identities | Keep the four UUID-empty rows semantically specific and prevent proxy UUID assignment until an exact public state-100 identity is directly audited. | UUID review record and unresolved manifest entry |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference flow | Confirm that the quantitative reference is exactly 1 kg net accepted product and that the selected product UUID, mass property, unit group, and factory-gate state agree. |  |
| `validation_configuration` | product identity | Reject a dataset missing product form, alloy/grade, dimensions, surface finish, glazing/seal/hardware configuration, intended performance specification, site, geography, or reporting period. | `epd-international-windows-doors-cpcr-2026` |
| `validation_boundary` | system boundary | Confirm inclusion of all on-site fabrication, assembly, finishing, rework, waste treatment, and direct-emission operations that occurred; confirm that excluded life-cycle stages are not silently included. | `eu-jrc-stm-bref-2006` |
| `validation_atomicity` | inventory | Reject collective rows for metals, components, utilities, fuels, chemicals, packaging, wastes, wastewater, or emissions; each exchange shall have one concrete identity and one property/unit. |  |
| `validation_conditional` | conditional rows | For every conditional row, require measured/calculated data when the route applies and a documented not-applicable statement when it does not. |  |
| `validation_mass_balance` | production period | Require an investigated material balance linking received inputs, stock change, accepted output, rework, scrap, sludge, wastewater solids, and other losses; do not accept unexplained double counting or recycling credit. |  |
| `validation_uuid` | UUID-bearing rows | Confirm every selected UUID by public state-code-100 identity, compatible flow type, classification, property, unit group, product state, geography/technology qualifiers, and general comment; keep unresolved rows blank. |  |
| `validation_ranges` | QA ranges | Do not infer an external range from one source or incompatible cases. Until two independent, boundary-compatible original sources exist, require foreground collection and retain the manifest range-evidence need. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or production-weighted secondary_dataset/background_dataset for the declared factory-gate configuration |
| downstream_use | Foreground process and lifecyclemodel construction for building-product manufacture where the exact material, configuration, geography, technology, and factory-gate boundary are compatible |
| allowed_use | Cradle-to-gate comparison or downstream modelling after checking alloy/grade, recycled content, dimensions, finish route, glazing/hardware composition, performance declaration, site, geography, period, and allocation |
| excluded_use | Installed door/window service, use-stage energy performance, maintenance, replacement, end-of-life, curtain-wall systems, vehicle closures, or another material/configuration without explicit extension |
| required_metadata | PCR id and version; product UUID; product form; product code; alloy/grade and recycled content when known; net mass and dimensions; finish and treated area; glazing, seals, thermal breaks, and hardware; performance specification; site and geography; reporting period; allocation; upstream datasets; unresolved UUIDs |
| required_quality_disclosure | Data coverage and completeness; meter and scale quality; supplier representativeness; mass-balance closure; rework and rejects; scrap destinations; wastewater/sludge composition and treatment; direct-emission method; all proxies and exclusions |
| update_trigger | Change in alloy/grade or recycled content, BOM or product form, glazing/thermal-break/hardware system, finish route, supplier geography or technology, factory/site, energy mix, waste treatment, allocation, performance specification, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 42120 product identity and iron/steel/aluminium material scope |
| `epd-international-windows-doors-cpcr-2026` | official_guidance | EPD International, Windows and doors (EN 17213), c-PCR 2019:14-c-PCR-007, version 1.0.1, https://www.environdec.com/pcr-library/pcr2019-14-c-pcr-007 (retrieved 2026-09-05) | Windows-and-doors construction-product EPD context and configuration disclosure |
| `eu-jrc-stm-bref-2006` | official_guidance | European Commission Joint Research Centre, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-05) | Conditional surface-treatment decomposition and collection of water, energy, chemicals, wastewater, sludge, and direct emissions |
| `china-nbs-metal-doors-windows-2017` | official_guidance | National Bureau of Statistics of China, 2017 National Economic Industry Classification Notes, metal door and window manufacturing, https://www.stats.gov.cn/xxgk/tjbz/gjtjbz/202008/P020200811608157848094.pdf (retrieved 2026-09-05) | Professional Chinese terminology and building-use metal-door/window interpretation |
