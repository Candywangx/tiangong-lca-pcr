---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.buckets-shovels-grabs-and-grips-for-cranes-excavators-and-the-like
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Buckets, shovels, grabs and grips for cranes, excavators and the like

## 1. Scope and Applicability

This PCR covers factory-gate production of completed interchangeable load-engaging or excavating attachments: buckets, shovels, grabs and grips made for cranes, excavators and similar machinery. It applies to welded plate constructions and to products incorporating purchased cast or forged wear parts. It excludes the host machine, hydraulic actuators sold separately, quick couplers sold separately, bulldozer blades, generic replacement parts not constituting the completed attachment, use, maintenance, distribution and end-of-life.

The foreground starts with purchased plate, purchased finished cast or forged parts when used, welding consumables, process gases, coating and electricity at the manufacturing site. Upstream production of these purchased inputs must be represented by separate supplier or background datasets. The product leaves the boundary inspected and ready for delivery, with its coating state declared.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.buckets-shovels-grabs-and-grips-for-cranes-excavators-and-the-like |
| classification_refs | CPC 3.0: 43580 |
| covered_products | Completed buckets, shovels, grabs and grips designed as attachments for cranes, excavators or similar machinery |
| excluded_products | Host machinery; standalone hydraulic actuators; standalone quick couplers; bulldozer blades; generic replacement parts; hand tools |
| representative_product | A welded alloy-steel excavator bucket with cutting edge and attachment interface |
| production_route | Purchased plate and optional purchased cast or forged wear parts; cutting and forming; welding and assembly; machining; optional protective coating; inspection |
| market_state | Finished attachment at factory gate, uncoated or coated as declared, without transport packaging unless packaging is explicitly added as an atomic flow |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one completed load-engaging or excavating attachment compatible with the declared host-machine interface and intended material-handling duty |
| How much | 1,000 kg net finished attachment mass |
| How well | Meets the declared drawing, material grades, rated capacity, interface dimensions, weld acceptance criteria and coating specification |
| How long or cycle | Factory-gate declared unit; service life is not normalized and must be disclosed separately if used downstream |
| reference_flow_link | The reference flow is the net mass of conforming completed attachments released at final inspection |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Buckets, shovels, grabs and grips for cranes, excavators and the like; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | attachment family; host-machine make or interface standard; rated volume or gripping capacity; net finished mass; principal plate and wear-part grades; cutting edge and tooth configuration; welded, cast or hybrid construction; coating state and coating system; manufacturing site and period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of conforming completed attachments after final inspection. Exclude removable shipping supports and transport packaging. Normalize every inventory amount to 1,000 kg reference product. |
| `energy_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity in its source unit and convert kWh to MJ using 1 kWh = 3.6 MJ; do not combine electricity with fuels or purchased heat. |
| `gas_mass_basis` | Industrial oxygen and carbon dioxide | Mass or source-record volume converted to mass | kg | Prefer supplier mass or cylinder mass difference. If volume is used, retain gas composition, pressure, temperature, reference conditions and the conversion factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased alloy-steel plate and, when used, purchased finished cast or forged wear parts and other listed consumables at the attachment manufacturing site |
| starting_condition_role | Foreground gate for cutting, forming, welding, assembly, machining, optional coating and final inspection |
| product_classification_scope | Completed machinery attachments corresponding to the semantic product boundary; classification mapping remains external to PCR identity |
| recursive_input_rule | A purchased completed attachment from this same category used as an input must remain a separately linked upstream product dataset and must not be recursively expanded inside this foreground process |
| upstream_dataset_requirement | Use supplier-specific datasets where available and otherwise geography-, technology- and product-state-representative background datasets for each purchased input |
| disclosure | Declare included manufacturing operations, outsourced operations, material grades, purchased-part content, coating route, scrap destination, site, geography, period and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | All foreground datasets | Include cutting, forming, welding, assembly, machining, applicable coating, final inspection, direct energy, listed consumables, generated steel scrap and measured direct releases from the manufacturing site. Keep steelmaking and production of purchased cast or forged parts upstream. | `eu-commission-pef-method-2021`; `ssab-hardox-bucket-welding-techsupport-29`; `eu-jrc-smitheries-foundries-bref-2024` |
| `boundary_outsourcing` | Outsourced operations | Include an outsourced operation when it produces the declared attachment before factory-gate release; identify the subcontractor process and do not omit its inputs, wastes or direct releases. | `eu-commission-pef-method-2021` |
| `boundary_additional_flows` | Site-specific exchanges | Add every material, fuel, process gas, waste and elementary emission that physically crosses the declared boundary as a separate atomic row when present; do not replace these exchanges with an umbrella utility, waste or emissions label. | `eu-commission-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| integrated_attachment_manufacture | Integrated attachment manufacture | required | Always include; individual flow cards state route conditions | Foreground cutting, forming, welding, assembly, machining, optional coating and inspection | 1,000 kg conforming completed attachment |

### Process: Integrated attachment manufacture (`integrated_attachment_manufacture`)

#### Inputs

##### Product flows

###### Alloy-steel plate (`steel_plate`)

Purchased structural and wear plate entering cutting and forming is recorded by grade and thickness.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass issued to the production orders, less documented unused plate returned unchanged to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_manufacturing_records`
- Sources: `ssab-hardox-bucket-welding-techsupport-29`

###### Purchased cast alloy-steel excavator bucket tooth (`cast_alloy_steel_bucket_tooth`)

Record this concrete bucket-tooth input only when a finished cast alloy-steel excavator bucket tooth is purchased and incorporated; UUID remains unresolved. Any adapter or other purchased part must be added as its own atomic row.

- Selected flow: Cast alloy-steel excavator bucket tooth; UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured received mass of bucket teeth incorporated into the production orders; zero only when the bill of materials demonstrates that no purchased cast bucket tooth is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_manufacturing_records`
- Sources: `ssab-hardox-bucket-welding-techsupport-29`; `eu-jrc-smitheries-foundries-bref-2024`

###### Industrial oxygen for cutting (`industrial_oxygen`)

Record oxygen only for oxygen-assisted cutting used by the declared production orders.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: supplier delivery or submetered oxygen volume, with reference conditions retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product produced with oxygen-assisted cutting
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_manufacturing_records`
- Sources: `ssab-hardox-bucket-welding-techsupport-29`

###### Flux-cored welding wire (`flux_cored_wire`)

Record flux-cored wire only when FCAW is used; other welding consumables must be added as separate atomic flows.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued mass minus sealed unused wire returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product welded using FCAW
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_manufacturing_records`
- Sources: `ssab-hardox-bucket-welding-techsupport-29`

###### Carbon-dioxide shielding gas (`carbon_dioxide_shielding_gas`)

Record welding-grade carbon dioxide only when it is supplied as shielding gas.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: supplier mass or cylinder mass difference allocated to the production orders; document any volume-to-mass conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product welded with carbon-dioxide shielding
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_manufacturing_records`
- Sources: `ssab-hardox-bucket-welding-techsupport-29`

###### Industrial maintenance coating (`industrial_maintenance_coating`)

Record formulated protective coating only when applied before factory-gate release; formulation, solids content and VOC content are required qualifiers.

- Selected flow: Industrial Maintenance Coatings `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: mixed coating mass issued minus documented unused coating returned for reuse; separately account for disposed mixed coating as an added waste row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg coated reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_manufacturing_records`
- Sources: `eu-commission-pef-method-2021`

###### Purchased electricity (`electricity`)

Record electricity consumed by included cutting, forming, welding, machining, coating and inspection operations.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: submetered consumption or production-share allocation from site meters, converted under `energy_conversion`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_integrated_manufacturing_records`
- Sources: `eu-commission-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed attachment reference product (`reference_product`)

The conforming net finished mass released by final inspection is the reference product; the exact TianGong product UUID is unresolved.

- Selected flow: Buckets, shovels, grabs and grips for cranes, excavators and the like; UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1,000 kg net conforming finished attachment
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Sources: `un-cpc-3-0-structure-2025`; `eu-commission-pef-method-2021`

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record offcuts, rejected steel components and machining steel scrap leaving the foreground boundary as waste; disclose internal reuse and external recovery destination separately.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass leaving the production orders after subtracting documented clean offcuts returned unchanged to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_integrated_manufacturing_records`
- Sources: `eu-commission-pef-method-2021`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Production records | Prefer production-order metering, weighing and direct assignment. Subdivide operations before applying allocation. | `eu-commission-pef-method-2021` |
| `allocation_shared_operations` | Shared electricity and consumables | When separate metering is unavailable, allocate using a documented causal driver such as machine time, weld length, deposited weld mass, coating area or processed mass; do not default to revenue. | `eu-commission-pef-method-2021` |
| `allocation_scrap` | Steel scrap | Report the full measured scrap output and destination. Do not subtract an avoided-primary-steel credit inside the foreground inventory; apply any recycling model only in the downstream life-cycle model and disclose it. | `eu-commission-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_integrated_manufacturing_records` | integrated_attachment_manufacture | All listed input and output rows | Production orders, bills of materials, weigh tickets, stores issues and returns, gas delivery records, electricity meters, coating batch logs, scrap tickets and inspection release records | production_order_id; product_family; finished_mass_kg; plate_grade_mass_kg; cast_part_mass_kg; oxygen_m3; flux_cored_wire_kg; carbon_dioxide_kg_or_m3; coating_kg; electricity_kWh; scrap_kg; operating_hours; site; date | Reconcile material and utility records to released production orders and retain conversion factors and route flags | kg; m3; kWh; h | Per batch or production order, aggregated monthly | At least 12 consecutive representative months or the full campaign when production is shorter | All operations under operational control at the declared manufacturing site, including identified subcontracted operations | Sum each atomic exchange for conforming released production and normalize by total net conforming mass, with rejected units and stock returns reconciled | Calibrated meter records; supplier invoices; weigh tickets; signed production order; bill-of-material revision; coating batch sheet; scrap transfer ticket; inspection release |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | All mass rows | normalized amount = included exchange mass / conforming net finished mass × 1,000 | exchange mass; conforming finished mass | kg per 1,000 kg reference product | `eu-commission-pef-method-2021` |
| `calc_electricity` | electricity | electricity_MJ = included electricity_kWh × 3.6; normalized electricity = electricity_MJ / conforming net finished mass × 1,000 | included electricity kWh; finished mass kg | MJ per 1,000 kg reference product | `eu-commission-pef-method-2021` |
| `calc_gas_mass` | industrial_oxygen; carbon_dioxide_shielding_gas | Use supplier mass directly; if only volume is available, convert with documented composition, pressure, temperature and reference-condition factor before normalization | gas mass or volume; conversion factor; finished mass | kg or m3 per 1,000 kg reference product as required by the selected flow property | `eu-commission-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Match released production to drawing revision, attachment family, host interface, capacity, mass, material grades and coating state. | Bill of materials, drawing, inspection release and product data sheet |
| `dq_completeness` | Inventory | Reconcile plate, purchased parts, welding consumables, gases, coating, electricity, finished product and steel scrap; add any other physically present exchange as an atomic row. | Material balance, utility reconciliation and waste register |
| `dq_temporal` | Foreground data | Cover a representative continuous period and disclose shutdowns, rework campaigns, product-mix changes and abnormal batches. | Dated production and meter records |
| `dq_technology` | Conditional rows | Record route flags for purchased cast parts, oxygen-assisted cutting, FCAW, carbon-dioxide shielding and coating; do not report a conditional amount without the corresponding route. | Work instructions, machine logs, welding procedure and coating specification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Dataset identity | Confirm that the reference output is exactly 1,000 kg net conforming completed attachment and that all required qualifiers are present. | `un-cpc-3-0-structure-2025`; `eu-commission-pef-method-2021` |
| `validate_inventory_coverage` | Process inventory | Confirm that every physically present input, waste and direct elementary release is represented as one atomic exchange and that no umbrella utility, waste or emissions row is used. | `eu-commission-pef-method-2021` |
| `validate_mass_reconciliation` | Material balance | Investigate any unreconciled difference between metal inputs and finished product, returned stock, steel scrap and other declared metal outputs; document scale and measurement effects. | `eu-commission-pef-method-2021` |
| `validate_conditions` | Conditional rows | Require route evidence for cast parts, oxygen, flux-cored wire, carbon dioxide and coating; a non-applicable row must be supported by the bill of materials or process route. | `ssab-hardox-bucket-welding-techsupport-29`; `eu-jrc-smitheries-foundries-bref-2024` |
| `validate_uuid_status` | UUID references | Treat unresolved `reference_product` and `cast_alloy_steel_bucket_tooth` UUIDs as review findings and never substitute a broader or mismatched TianGong flow. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset suitable for later publication as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Product-system modelling of factory-gate completed machinery attachments and aggregation into `process` or `lifecyclemodel` records |
| allowed_use | Studies whose attachment family, construction route, material grades, host interface, manufacturing geography, period and coating state are represented |
| excluded_use | Complete cranes or excavators; standalone couplers or hydraulic actuators; use-phase service; repair; distribution; end-of-life; products with materially different manufacturing routes unless separately modelled |
| required_metadata | PCR id; product family; reference mass; site and geography; period; technology route; material grades; purchased-part content; welding process; coating state; allocation drivers; data sources; unresolved UUID status |
| required_quality_disclosure | Primary-data share; meter and weighing basis; temporal coverage; material-balance result; subcontracted operations; background dataset choices; data gaps; route-specific exclusions |
| update_trigger | Material change in product design, plate or wear-part grade, welding technology, coating system, supplier route, site energy mix, allocation method, production geography, or resolution of an unresolved UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-05 | Official product classification identity |
| `ssab-hardox-bucket-welding-techsupport-29` | Handbook (`handbook`) | SSAB, Welding of cutting edge to bucket and adapters to cutting edge, TechSupport 29, https://www.ssab.com/-/media/files/en/hardox/brochures/29-hardox-welding-of-cutting-edge-to-bucket-and-adapters-to-cutting-edge.pdf, retrieved 2026-09-05 | Bucket plate selection, joint preparation, welding methods and consumables |
| `eu-jrc-smitheries-foundries-bref-2024` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, 2024, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry, retrieved 2026-09-06 | Boundary for purchased cast or forged parts and upstream process disclosure |
| `eu-commission-pef-method-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated 30 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng, retrieved 2026-09-05 | Functional unit, reference flow, system boundary, allocation, foreground data quality and validation |
