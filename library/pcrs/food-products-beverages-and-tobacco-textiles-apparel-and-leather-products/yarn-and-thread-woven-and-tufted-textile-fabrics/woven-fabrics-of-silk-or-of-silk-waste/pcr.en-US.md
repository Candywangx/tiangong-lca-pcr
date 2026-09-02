---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-silk-or-of-silk-waste
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Woven fabrics of silk or of silk waste

## 1. Scope and Applicability

This PCR supports foreground data packages for woven fabrics made from natural silk filament yarn, yarn spun from silk waste, or a declared combination of those silk yarns. It covers receipt of yarn at the fabric mill, warping, conditional sizing, weaving, inspection, and, when performed within the reporting site, declared silk pretreatment, dyeing, printing, or finishing through the finished fabric at the plant gate.

It excludes cocoon production, reeling and yarn manufacture unless they are physically integrated and separately inventoried; knitted, tufted, non-woven, pile, chenille, narrow, and special fabrics; fabrics whose principal fibre is not silk or silk waste; garment manufacture; distribution; use; and end-of-life. A data package shall state whether its product is greige, unscoured, souple, degummed, dyed, printed, weighted, or otherwise finished. The minimum representative route is warping and weaving of silk yarn to saleable woven fabric; wet processing is conditional on the declared product state and site operations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-silk-or-of-silk-waste |
| classification_refs | CPC 3.0: 26510 - Woven fabrics of silk or of silk waste |
| covered_products | Woven fabrics whose textile material is natural silk filament yarn, yarn spun from silk waste, or a declared combination of those silk yarns |
| excluded_products | Silk yarn; fabrics principally of other fibres; knitted, tufted, non-woven, pile, chenille, narrow, or other special fabrics; carpets; garments and made-up articles |
| representative_product | Saleable woven silk fabric of declared yarn origin, construction, areal mass, finish state, and moisture condition |
| production_route | Yarn receipt, warping, conditional sizing, weaving, inspection, and conditional on-site silk wet processing |
| market_state | Production mix at plant gate, with greige or finished state explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Woven silk fabric meeting the declared construction and finish specification |
| How much | 1 kg |
| How well | Saleable output meeting the declared yarn composition, weave, areal mass, width, finish, quality grade, and moisture condition |
| How long or cycle | One production batch or reporting-period output at the plant gate; no use-stage duration is represented |
| reference_flow_link | `woven_silk_fabric_output` or `finished_woven_silk_fabric_output`, according to the declared final foreground process |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of silk or of silk waste `f7cf0661-025b-47cc-b5e2-d44b43e07e6b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | natural silk filament yarn share; silk-waste yarn share; weave and construction; areal mass; usable width; greige or finish state; dyeing, printing, weighting, and finishing status; quality grade; moisture condition; geography; technology; reporting period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and silk-material mass flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report dry or conditioned mass consistently. Declare the moisture condition and do not combine wet and conditioned masses without a recorded conversion. |
| `batch_mass_balance` | Each foreground process and reporting period | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record input, saleable output, silk waste, retained inventory, and other separately identified outputs on the same temporal and moisture basis; disclose unexplained imbalance. |
| `water_mass_conversion` | Process-water and wastewater rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | When a meter reports volume, convert to mass only with the recorded meter volume and a measured or documented density applicable to the stream and temperature. |
| `electricity_energy_conversion` | Electricity inputs | Net calorific value | MJ | Preserve metered kWh in raw records and convert to MJ with the exact physical conversion 1 kWh = 3.6 MJ; do not mix electricity with steam or fuel. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Silk filament yarn and/or yarn spun from silk waste received at the reporting mill gate, with supplier, yarn state, composition, moisture condition, and upstream dataset reference declared |
| starting_condition_role | Upstream product input to foreground fabric production |
| product_classification_scope | Woven silk fabrics covered by CPC 3.0 code 26510; the classification reference does not replace the semantic product and finish-state declaration |
| recursive_input_rule | A purchased woven silk fabric entering on-site wet processing shall reference a separate upstream dataset. An internally woven fabric is an internal transfer and shall not be counted again as a purchased input. |
| upstream_dataset_requirement | Supplier- or region-specific silk yarn data are preferred. Generic upstream data shall disclose geography, technology, time, yarn origin, and whether silk waste is included. |
| disclosure | Declare the plant gate, integrated or purchased starting material, yarn shares, sizing status, wet-processing operations, treatment of internal transfers, and all excluded life-cycle stages. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground_fabric_production | Include material and energy exchanges from yarn receipt through the declared saleable fabric at the plant gate; include wet processing only when it is performed within the reporting site or claimed product system. | `jrc-textiles-bref-2023` |
| `boundary_route_disclosure` | process_route | Distinguish warping, sizing, weaving, silk pretreatment, dyeing, printing, and finishing; do not infer an unreported wet process from the product name. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_atomic_chemicals` | chemicals_and_auxiliaries | Record every chemical product actually consumed as its own product-flow exchange with identity and amount; a chemicals total or formulation family is not an exchange. | `eu-textiles-bat-2022` |
| `boundary_waste_and_emissions` | outputs | Record each waste, wastewater, recovered material, and direct emission separately at the point it crosses the foreground boundary; do not net recovery against consumption. | `eu-textiles-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `warp_weave` | Warping, conditional sizing, and weaving | `required` | Always included for fabric manufactured from yarn within the foreground mill | Foreground fabric production | kg saleable woven silk fabric leaving this process |
| `wet_processing` | Silk pretreatment, dyeing, printing, and finishing | `conditional` | Include only operations performed within the reporting site or explicitly claimed product system | Foreground wet processing | kg saleable finished woven silk fabric leaving this process |

### Process: Warping, conditional sizing, and weaving (`warp_weave`)

#### Inputs

##### Product flows

###### Natural silk filament yarn input (`natural_silk_yarn_input`)

Record natural silk yarn received for the batch as a distinct product input. Do not combine it with yarn spun from silk waste.

- Selected flow: Natural Silk `eea5e113-2fbc-4fde-ac38-b938654f382c`
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned mass issued to the foreground batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable woven silk fabric from `warp_weave`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_weave_materials`
- Sources: `jrc-textiles-bref-2023`

###### Spun silk-waste yarn input (`spun_silk_waste_yarn_input`)

Record yarn spun from silk waste separately when used in the batch. Do not combine it with natural silk filament yarn.

- Selected flow: Spun Silk `6c639604-29e8-44b6-be18-4e0ad97fdef8`
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned mass issued to the foreground batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable woven silk fabric from `warp_weave`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_weave_materials`
- Sources: `jrc-textiles-bref-2023`

###### Weaving electricity input (`weaving_electricity_input`)

Record electricity consumed by warping, sizing equipment when present, looms, inspection, and directly associated material handling within this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or an allocation from a reconciled site meter using recorded machine-hours and rated or measured demand
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable woven silk fabric from `warp_weave`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_weave_energy`
- Sources: `jrc-textiles-bref-2023`

###### Polyvinyl alcohol sizing-agent input (`pva_sizing_agent_input`)

Record polyvinyl alcohol only when it is actually applied to warp yarn at the reporting mill. Other sizing substances shall be additional, separately identified atomic product-flow rows in the foreground package.

- Selected flow: Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- Flow property / unit: Mass / kg
- Amount rule: weighed issue or supplier-delivery mass minus reconciled closing stock for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable woven silk fabric from `warp_weave`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_weave_chemicals`
- Sources: `jrc-textiles-bref-2023`

###### Sizing-liquor process-water input (`sizing_process_water_input`)

Record process water only when sizing liquor is prepared or sizing equipment is cleaned within this process.

- Selected flow: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- Flow property / unit: Mass / kg
- Amount rule: metered or batch-tank water mass attributable to sizing and associated cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable woven silk fabric from `warp_weave`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_weave_water`
- Sources: `jrc-textiles-bref-2023`

###### Loom lubricating-oil input (`loom_lubricating_oil_input`)

Record fresh lubricating oil added to looms and directly associated equipment. Keep recovered oil and waste oil as separate outputs when they cross the boundary.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: measured additions adjusted for opening and closing stock over the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable woven silk fabric from `warp_weave`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_weave_chemicals`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Woven silk fabric output (`woven_silk_fabric_output`)

Record the measured saleable fabric output when `warp_weave` is the last foreground process. When integrated wet processing follows, treat this flow as an internal transfer and use `finished_woven_silk_fabric_output` as the reference-flow link.

- Selected flow: Woven fabrics of silk or of silk waste `f7cf0661-025b-47cc-b5e2-d44b43e07e6b`
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned mass accepted as saleable output after inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_weave_outputs`
- Sources: `unsd-cpc-3-0`

##### Waste flows

###### Silk yarn and fabric waste output (`silk_waste_output`)

Record loom waste, damaged yarn, and rejected silk fabric that leave the foreground process as one silk-waste stream only when they share the same physical flow and destination record.

- Selected flow: Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to the recorded recovery, treatment, or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable woven silk fabric from `warp_weave`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_warp_weave_outputs`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Silk pretreatment, dyeing, printing, and finishing (`wet_processing`)

#### Inputs

##### Product flows

###### Woven silk fabric entering wet processing (`woven_silk_fabric_wet_input`)

Record purchased woven silk fabric as an input; for an integrated site, identify the same amount as an internal transfer from `warp_weave` and do not count it again as a purchased upstream burden.

- Selected flow: Woven fabrics of silk or of silk waste `f7cf0661-025b-47cc-b5e2-d44b43e07e6b`
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned fabric mass charged to wet processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable finished woven silk fabric from `wet_processing`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_materials`
- Sources: `jrc-textiles-bref-2023`

###### Wet-process water input (`wet_process_water_input`)

Record process water entering silk pretreatment, dyeing, printing, finishing, washing, rinsing, and equipment cleaning when those operations occur on site.

- Selected flow: Process water `68ac99df-f4b9-43b9-8da3-661c7d51f356`
- Flow property / unit: Mass / kg
- Amount rule: metered water mass, segregated to the wet-processing process where measurements permit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable finished woven silk fabric from `wet_processing`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_water_wastewater`
- Sources: `eu-textiles-bat-2022`

###### Wet-processing electricity input (`wet_process_electricity_input`)

Record electricity used by wet-processing equipment, pumps, controls, mechanical dewatering, drying, and directly associated treatment equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or an allocation from a reconciled site meter using recorded equipment activity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable finished woven silk fabric from `wet_processing`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_energy`
- Sources: `eu-textiles-bat-2022`

###### Wet-processing steam input (`wet_process_steam_input`)

Record purchased or separately metered steam delivered to silk wet processing. Do not combine steam with electricity, direct fuel, or purchased heat.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass / kg
- Amount rule: metered steam mass or a supplier invoice reconciled to the wet-processing reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable finished woven silk fabric from `wet_processing`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_energy`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished woven silk fabric output (`finished_woven_silk_fabric_output`)

Record the measured saleable output after the declared wet-processing route and final inspection.

- Selected flow: Woven fabrics of silk or of silk waste `f7cf0661-025b-47cc-b5e2-d44b43e07e6b`
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned mass accepted as saleable finished output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_outputs`
- Sources: `unsd-cpc-3-0`

##### Waste flows

###### Textile wet-processing wastewater output (`textile_wet_processing_wastewater_output`)

Record wastewater leaving the wet-processing boundary to on-site treatment, off-site treatment, or direct discharge. Destination and treatment status are mandatory qualifiers.

- Selected flow: Wastewater, textile wet processing, to water `a60031a7-ea29-49ef-b578-90de910fcf8e`
- Flow property / unit: Mass / kg
- Amount rule: metered wastewater mass at the transfer or discharge point
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable finished woven silk fabric from `wet_processing`
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_water_wastewater`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground_processes | Avoid allocation by separately metering warping/weaving and wet-processing operations and by treating integrated intermediate fabric as an internal transfer. | `iso-14044-2006` |
| `allocation_shared_utilities` | shared_site_utilities | Allocate a shared meter only with a documented causal parameter such as measured operating time and demand, steam enthalpy and mass, or metered water use; disclose the parameter and reconciliation. | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_recovered_material` | recovered_silk_and_sizing_material | Report recovered silk, sizing material, and other recovered outputs separately. Do not subtract them from gross inputs or assign an avoided burden unless the downstream study declares and justifies that allocation method. | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_unavoidable` | residual_multioutput_process | If subdivision or a physical causal relation is not practicable, disclose the selected allocation basis, affected flows, and sensitivity; this PCR supplies no default economic factor. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_warp_weave_materials` | `warp_weave` | silk yarn inputs | Scale, issue, and stock records | batch_id; yarn_type; supplier; yarn_lot; opening_stock; issued_mass; return_mass; closing_stock; moisture_condition | Reconciled calibrated-scale and inventory records | kg | Each batch, reconciled monthly | Same period as output | All in-scope yarn stores and looms | Sum net issued mass by yarn type and batch, then normalize to saleable output | Scale calibration; lot trace; stock reconciliation |
| `cp_warp_weave_energy` | `warp_weave` | electricity input | Meter and equipment-activity records | meter_id; start_reading; end_reading; machine_id; operating_hours; measured_or_rated_demand; batch_id | Process submeter; otherwise reconciled site meter with documented causal allocation | kWh | Each batch or meter interval | Same period as output | Warping, sizing, looms, inspection, and associated handling | Sum metered kWh or allocated reconciled kWh and convert to MJ | Meter calibration; site-meter reconciliation; allocation worksheet |
| `cp_warp_weave_chemicals` | `warp_weave` | PVA sizing agent and lubricating oil inputs | Weighing, issue, purchase, and stock records | product_name; supplier; product_id; CAS_when_available; lot; issued_mass; returned_mass; opening_stock; closing_stock; process_step | Reconciled issue and stock records; every chemical product remains a separate row | kg | Each issue, reconciled monthly | Same period as output | Sizing and weaving equipment | Sum net consumed mass for each identified product; never aggregate unlike chemicals | Invoice or batch sheet; product specification; stock reconciliation |
| `cp_warp_weave_water` | `warp_weave` | sizing-liquor process water | Meter or batch-tank records | meter_id; volume; density; temperature; batch_id; use_step | Metered volume converted with stream-specific density, or direct mass measurement | kg | Each batch or meter interval | Same period as output | Sizing preparation and equipment cleaning | Sum water mass attributable to the process | Meter calibration; tank-volume check; density record |
| `cp_warp_weave_outputs` | `warp_weave` | saleable fabric and silk waste outputs | Scale, inspection, and transfer records | batch_id; output_mass; rejected_mass; waste_mass; moisture_condition; grade; destination | Calibrated scale linked to inspection and destination records | kg | Each batch | Same period as inputs | All in-scope looms and inspection points | Sum saleable output and each separately transferred waste stream | Scale calibration; inspection record; waste transfer note |
| `cp_wet_materials` | `wet_processing` | woven silk fabric input | Charge and batch records | batch_id; source_process_or_supplier; fabric_mass; moisture_condition; finish_state_in; internal_transfer_flag | Calibrated scale and batch charge record | kg | Each batch | Same period as wet output | All in-scope wet-processing lines | Sum charged fabric mass, separating purchased and internal transfers | Scale calibration; batch trace; supplier or internal-transfer record |
| `cp_wet_energy` | `wet_processing` | electricity and steam inputs | Utility meters and supplier records | utility_type; meter_id; start_reading; end_reading; steam_mass; electricity_kWh; batch_id; allocation_parameter | Process meters; otherwise reconciled supplier/site meters with documented causal allocation | kg steam; kWh electricity | Each batch or meter interval | Same period as wet output | Pretreatment, dyeing, printing, finishing, drying, and associated treatment | Sum each utility separately and normalize to saleable output | Meter calibration; invoice reconciliation; allocation worksheet |
| `cp_wet_water_wastewater` | `wet_processing` | process-water input and wastewater output | Water and effluent meters, discharge logs, and laboratory records | inlet_volume; inlet_density; effluent_volume; effluent_density; pH; temperature; destination; treatment_status; sampling_time; batch_id | Key-location meters and relevant wastewater monitoring | kg | Each batch or meter interval; wastewater parameters at permit or BAT-relevant frequency | Same period as wet output | All in-scope wet lines and discharge or transfer points | Convert each stream to mass with documented density; report inflow and each outflow separately | Meter calibration; sampling record; laboratory QA/QC; water balance |
| `cp_wet_outputs` | `wet_processing` | finished fabric output | Scale and final-inspection records | batch_id; finished_mass; moisture_condition; finish_state; dye_or_print_status; quality_grade; rejected_mass | Calibrated scale linked to final inspection | kg | Each batch | Same period as wet inputs | Final wet-process and inspection points | Sum saleable finished mass by declared product specification | Scale calibration; final-inspection record; batch release |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Divide each reporting-period exchange by the saleable mass linked to the selected reference-flow output; internal transfers cancel only within the same integrated package. | exchange amount; saleable output mass; route identifier | exchange per 1 kg reference product | `iso-14044-2006` |
| `calc_electricity_mj` | electricity rows | electricity_MJ = metered_electricity_kWh x 3.6 | reconciled metered kWh | MJ electricity |  |
| `calc_process_mass_balance` | each foreground process | imbalance = mass inputs - saleable product - separately identified waste and other outputs - closing inventory change; retain the signed result and explanation. | conditioned input masses; output masses; inventory change | process mass-balance record | `eu-textiles-bat-2022` |
| `calc_route_yield` | warp_weave and wet_processing | route_yield = saleable conditioned output mass / conditioned material input mass; calculate separately for each process and declared moisture basis. | conditioned material input; conditioned saleable output | process yield |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product, yarn, chemical, waste, and utility flows | Retain supplier name, product or stream identity, lot or meter reference, and the exact Tiangong UUID when resolved; never substitute a collection label for one exchange. | Supplier specification; batch record; meter or waste-transfer record; Tiangong identity reference |
| `dq_route` | foreground package | Identify every included unit operation and whether wet processing is integrated, purchased, or absent. | Process flow sheet; batch routing; site boundary diagram |
| `dq_temporal` | all foreground records | Use records from one declared, representative period and disclose shutdowns, abnormal production, rework, and stock changes. | Dated meter, production, stock, and maintenance records |
| `dq_completeness` | chemicals, water, energy, wastes, wastewater, and emissions | Reconcile annual and process-level input/output inventories. Add every actually consumed chemical, fuel, packaging component, waste, and direct emission as a separate atomic exchange even when this minimum inventory does not enumerate it. | Input/output inventory; invoices; chemical ledger; waste log; emissions and effluent monitoring |
| `dq_mass_balance` | warp_weave and wet_processing | Reconcile conditioned material input, saleable output, wastes, retained inventory, and measured losses; document every material residual. | Signed mass-balance worksheet and investigation note |
| `dq_wastewater` | wet_processing | Record wastewater flow, destination, treatment status, and relevant monitored parameters at the actual transfer or discharge point. | Meter and sampling logs; laboratory QA/QC; treatment or discharge record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | The reference product UUID, CPC 26510 identity, Mass property, Units of mass group, kg unit, and all required qualifiers shall be present and mutually consistent. | `unsd-cpc-3-0` |
| `validate_bilingual_inventory` | bilingual_markdown | English and Chinese process ids, directions, flow types, row ids, row order, selected UUIDs, controlled tokens, and rule-id order shall match exactly. |  |
| `validate_route_completeness` | foreground_processes | `warp_weave` is mandatory. Include `wet_processing` only when performed or claimed, and then include its water, electricity, steam when used, each actual chemical, wastewater, waste, and direct-emission exchange separately. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_atomic_flows` | process_inventory | Reject any card whose selected flow is a collection, selector, combined utility, combined chemical, combined waste, or unresolved placeholder rather than one atomic exchange. |  |
| `validate_internal_transfer` | integrated_route | The woven-fabric transfer between `warp_weave` and `wet_processing` shall be internal and counted once; a purchased fabric input shall carry a separate upstream dataset. | `iso-14044-2006` |
| `validate_mass_and_utility_reconciliation` | reporting_period | Reconcile material mass, electricity, water, steam, chemical issues, waste, and wastewater to the same production period and explain residuals or shared-meter allocations. | `eu-textiles-bat-2022` |
| `validate_no_unlabelled_estimates` | amounts | Reject AI-generated or undocumented numerical ranges. Amounts shall come from foreground records, explicit calculations from those records, or cited external evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for woven silk fabric |
| downstream_use | `secondary_dataset`; `background_dataset` when geography, technology, yarn route, finish state, and quality disclosures fit the downstream study |
| allowed_use | Foreground data-package construction and downstream process or lifecyclemodel projection for the declared fabric, route, site, and period |
| excluded_use | Garments, knitted or special fabrics, undisclosed fibre blends, cradle-to-gate claims without upstream yarn data, wet-finished claims when wet processing is omitted, or geography/technology extrapolation without justification |
| required_metadata | PCR id; CPC reference; product UUID; yarn origin and shares; construction and areal mass; finish state; moisture condition; geography; technology; site boundary; reporting period; allocation; upstream dataset references; data quality statement |
| required_quality_disclosure | Metering and scale coverage; mass-balance residual; shared-utility allocation; chemical-ledger completeness; wastewater destination and monitoring; unresolved identities; missing upstream data; abnormal operations |
| update_trigger | Material change in yarn route, fibre share, loom or sizing technology, wet-processing recipe, energy or water supply, wastewater treatment, allocation, site boundary, or product specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, subclass 26510, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Product-category scope and classification identity |
| `jrc-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf (retrieved 2026-08-12) | Silk characteristics; warping, sizing, weaving, silk pretreatment and dyeing process decomposition; utility and pollution pathways |
| `eu-textiles-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, 2022. https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-12) | Input/output inventory, water and energy monitoring, chemicals, waste, wastewater, and process-level data requirements |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, confirmed 2022. https://www.iso.org/standard/38498.html (retrieved 2026-08-12) | LCI consistency, allocation, reporting, and interpretation framework |
