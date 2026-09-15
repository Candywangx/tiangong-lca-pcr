---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other woven pile fabrics and chenille fabrics (other than terry towelling and narrow fabrics)

## 1. Scope and Applicability

This PCR applies to factory-gate production of woven pile fabrics and chenille fabrics classified as CPC 26830. It covers fabrics of textile materials that remain in the CPC 26830 “other” subclass after excluding the separately classified cotton and man-made-fibre subclasses. The fabric may be delivered greige or after declared pretreatment, dyeing, printing, mechanical finishing, or chemical finishing.

Terry towelling, narrow fabrics, carpets, tufted fabrics, knitted pile fabrics, apparel, made-up articles, and fabrics classified in the cotton or man-made-fibre woven-pile subclasses are excluded. A data package shall declare fibre composition, pile construction, fabric width, mass per unit area, finish state, wet-processing route, production geography, and gate condition.

This candidate PCR specifies foreground records and calculation methods. It provides no default or AI-estimated quantity ranges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics |
| classification_refs | CPC 3.0: 26830 |
| covered_products | woven pile fabrics and chenille fabrics of the CPC 26830 other-textile-material subclass, supplied greige or with declared finishing |
| excluded_products | terry towelling; narrow fabrics; cotton subclass 26810; man-made-fibre subclass 26820; carpets; tufted or knitted pile fabrics; apparel and made-up articles |
| representative_product | saleable woven pile or chenille fabric of declared non-cotton, non-man-made-fibre composition |
| production_route | yarn receiving and preparation; woven ground and pile/chenille formation; optional wet processing; final finishing, inspection, and dispatch |
| market_state | production mix at plant; finished product manufactured, with finish state and packaging boundary declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | provide a declared woven pile or chenille fabric with specified construction and finish |
| How much | 1 kg of saleable fabric at the declared conditioned or commercial mass basis |
| How well | meets the declared fibre composition, pile construction, width, mass per unit area, finish specification, and quality grade |
| How long or cycle | one production lot through the declared factory-gate route |
| reference_flow_link | mass of conforming saleable fabric leaving final inspection |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other woven pile fabrics and chenille fabrics (other than terry towelling and narrow fabrics) `91e48617-c5a4-423e-870d-696c311f7b05` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre composition by mass; ground and pile/chenille construction; fabric width; mass per unit area; finish state; colour or pattern where relevant; moisture or conditioning basis; quality grade; production geography; declared gate; packaging inclusion |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net conforming fabric mass at the declared conditioning or commercial mass basis; exclude cores, pallets, and dispatch packaging unless packaging inclusion is explicitly declared. |
| `area_to_mass` | fabric reported by area | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert square metres to kilograms only from lot-specific measured mass per unit area; retain specimen method, conditioning state, width, and test record. |
| `length_to_mass` | fabric reported by length | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert linear metres to kilograms only from the lot-specific measured mass per unit length or from width and mass per unit area; retain the measurement record. |
| `active_and_as_supplied_mass` | process chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each chemical as supplied and its active concentration separately; do not combine chemicals or silently substitute active-substance mass for formulated-product mass. |
| `energy_unit_preservation` | purchased electricity and heat | energy property of the selected flow | kWh or MJ | Retain meter or invoice units and document every conversion factor; do not convert steam mass to energy without measured or supplier-stated pressure, temperature, and enthalpy basis. |

## 5. System Boundary

The foreground boundary begins with yarns and process materials received at the fabric plant and ends with conforming CPC 26830 fabric after the declared final finishing and inspection step. Upstream production of purchased yarn, electricity, heat, water, and chemicals is linked through background datasets. Wet processing is included only when controlled by the reporting plant or performed by a fixed supplier included in the declared foreground route.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | yarn lots and process materials received at the woven-pile or chenille-fabric plant |
| starting_condition_role | disclosed foreground inputs connected to supplier-specific or market background datasets |
| product_classification_scope | CPC 26830 only, excluding cotton CPC 26810 and man-made-fibre CPC 26820 fabrics |
| recursive_input_rule | same-category fabric received for further processing remains an explicit input with mass, finish state, supplier, and upstream dataset; it is not recursively regenerated |
| upstream_dataset_requirement | each purchased yarn, energy carrier, water supply, and chemical requires a geographically and technologically representative upstream dataset or an explicit unresolved link |
| disclosure | declare fibre composition, yarn sourcing, weaving technology, pile-forming route, wet and dry finishing steps, subcontracted operations, packaging boundary, geography, reporting period, and excluded operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_control` | directly controlled and fixed-supplier operations | Include yarn preparation, weaving and pile/chenille formation, optional wet processing, final finishing, inspection, internally controlled utilities, and on-site waste or wastewater handling when they occur in the declared route. | `jrc-ilcd-2010`; `eu-textiles-bat-2022` |
| `boundary_background_links` | purchased inputs and external services | Keep every purchased yarn, material, energy, water, chemical, waste treatment, and subcontracted process as an explicit technosphere link; do not replace these links with unreported cut-offs. | `jrc-ilcd-2010` |
| `boundary_route_condition` | optional processing | Mark pretreatment, dyeing, printing, chemical finishing, mechanical finishing, and on-site wastewater treatment as included or not applicable from production evidence; absence cannot be assumed. | `eu-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_no_implicit_cutoff` | foreground exchanges | Record all actual yarns, chemicals, utilities, wastes, wastewater streams, and direct emissions as atomic exchanges. A cut-off requires a documented goal-and-scope criterion and completeness check. | `jrc-ilcd-2010`; `roos-textile-chemicals-2018` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| weaving_and_pile_formation | Weaving and pile/chenille formation | required |  | foreground fabric formation | kg unfinished conforming fabric |
| wet_processing | Pretreatment, dyeing, washing, and wet finishing | conditional | include when any aqueous preparation, bleaching, dyeing, printing wash-off, or wet chemical finish is controlled by the plant or declared fixed supplier | foreground wet processing | kg wet-processed conforming fabric |
| final_finishing_and_inspection | Final mechanical finishing and inspection | required |  | foreground final product release | kg saleable reference product |

### Process: Weaving and pile/chenille formation (`weaving_and_pile_formation`)

#### Inputs

##### Product flows

###### Ground-warp yarn received for the declared fabric lot (`ground_warp_yarn_input`)

This exchange is the single ground-warp yarn specification consumed by the lot; separate cards shall be added when composition, supplier, yarn count, or dye state differs.

- Selected flow: Ground-warp yarn of the declared CPC 26830 textile material
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of returned unused yarn
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources: `eu-textiles-bat-2022`

###### Effect yarn received for the declared fabric lot (`effect_yarn_input`)

This exchange is the one declared yarn specification forming the surface effect in the lot; different yarn specifications remain separate exchanges.

- Selected flow: Effect yarn of the declared CPC 26830 construction and textile material
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of returned unused yarn
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources: `eu-textiles-bat-2022`

###### Weft yarn received for the declared fabric lot (`weft_yarn_input`)

This exchange is the single weft-yarn specification consumed by the lot; every materially different weft yarn remains a separate exchange.

- Selected flow: Weft yarn of the declared CPC 26830 textile material
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass net of returned unused yarn
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources: `eu-textiles-bat-2022`

###### Purchased electricity used by weaving and pile formation (`weaving_electricity_input`)

This exchange records electricity metered or allocated to looms, pile-forming equipment, local extraction, and directly associated auxiliaries.

- Selected flow: Purchased medium-voltage electricity
- Flow property / unit: Net calorific value / kWh
- Amount rule: process-submeter reading; otherwise documented allocation from plant meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg unfinished conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_record`
- Sources: `eu-textiles-bat-2022`

#### Outputs

##### Product flows

###### Unfinished woven pile or chenille fabric (`unfinished_pile_fabric_output`)

This exchange is the conforming greige or otherwise unfinished intermediate leaving fabric formation before any declared wet processing and final inspection.

- Selected flow: Unfinished CPC 26830 fabric of the declared construction and textile material
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output mass at the declared conditioning basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process reference output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_output_mass`
- Sources: `iso-3801-1977`

##### Waste flows

###### Yarn waste from weaving and pile formation (`weaving_yarn_waste_output`)

This exchange records the single yarn-waste material stream generated from start-up, end loss, broken ends, and loom cleaning for the declared composition.

- Selected flow: Yarn waste of the declared CPC 26830 textile material
- Flow property / unit: Mass / kg
- Amount rule: weighed waste transferred to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_and_destination`
- Sources: `eu-textiles-bat-2022`

###### Fabric edge and start-up offcuts from weaving (`weaving_fabric_offcuts_output`)

This exchange records one segregated offcut stream of the declared fabric composition and destination.

- Selected flow: CPC 26830 fabric offcuts of the declared construction and textile material
- Flow property / unit: Mass / kg
- Amount rule: weighed offcuts transferred to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg unfinished conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_and_destination`
- Sources: `eu-textiles-bat-2022`

### Process: Pretreatment, dyeing, washing, and wet finishing (`wet_processing`)

#### Inputs

##### Product flows

###### Unfinished fabric entering the wet-processing route (`wet_process_unfinished_fabric_input`)

This exchange records the exact unfinished intermediate lot entering aqueous processing.

- Selected flow: Unfinished CPC 26830 fabric of the declared construction and textile material
- Flow property / unit: Mass / kg
- Amount rule: measured input lot mass at the declared conditioning basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources: `iso-3801-1977`

###### Process water supplied to wet processing (`wet_process_water_input`)

This exchange records water crossing the wet-process boundary for preparation, baths, washing, rinsing, and equipment cleaning.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or tank-volume-derived water supplied, net of measured internal reuse returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_record`
- Sources: `eu-textiles-bat-2022`; `costa-textile-dyeing-2021`

###### Industrial-grade solid sodium hydroxide used in wet processing (`wet_process_sodium_hydroxide_input`)

This exchange applies only when solid industrial-grade sodium hydroxide is issued to the route; a solution of another concentration is a different exchange.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed or invoiced as-supplied mass issued to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_issue_record`
- Sources: `eu-textiles-bat-2022`; `roos-textile-chemicals-2018`

###### Hydrogen peroxide solution at 50% mass fraction used in wet processing (`wet_process_hydrogen_peroxide_input`)

This exchange applies only when the recorded bleaching formulation uses hydrogen peroxide solution at 50% mass fraction.

- Selected flow: Hydrogen peroxide solution, 50% in water `f151f740-6c3a-42b9-abed-e44220792750`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed, metered, or invoiced as-supplied solution mass issued to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg wet-processed conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_issue_record`
- Sources: `eu-textiles-bat-2022`; `roos-textile-chemicals-2018`

###### Purchased process heat supplied as steam (`wet_process_steam_heat_input`)

This exchange records heat delivered by purchased or separately metered steam to wet-processing equipment.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: heat meter or steam mass converted using recorded delivery state and enthalpy basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_heat_record`
- Sources: `eu-textiles-bat-2022`; `costa-textile-dyeing-2021`

###### Purchased electricity used by wet processing (`wet_process_electricity_input`)

This exchange records electricity used by preparation, dyeing, washing, extraction, drying auxiliaries, dosing, and directly associated pumps.

- Selected flow: Purchased medium-voltage electricity
- Flow property / unit: Net calorific value / kWh
- Amount rule: process-submeter reading; otherwise documented allocation from plant meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_record`
- Sources: `eu-textiles-bat-2022`; `costa-textile-dyeing-2021`

#### Outputs

##### Product flows

###### Wet-processed woven pile or chenille fabric (`wet_finished_fabric_output`)

This exchange is the conforming intermediate after the declared pretreatment, dyeing, washing, and wet-finishing sequence.

- Selected flow: Wet-processed CPC 26830 fabric of the declared construction and textile material
- Flow property / unit: Mass / kg
- Amount rule: measured conforming output mass at the declared conditioning basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process reference output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_output_mass`
- Sources: `iso-3801-1977`

##### Waste flows

###### Wet-process wastewater transferred for treatment (`wet_process_wastewater_output`)

This exchange records one wastewater stream with its transfer destination; direct discharge and transfer to treatment are different exchanges.

- Selected flow: Textile wet-processing wastewater transferred to treatment
- Flow property / unit: Mass / kg
- Amount rule: flow-metered wastewater mass or measured volume converted with recorded density, segregated by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg wet-processed conforming fabric output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_record`
- Sources: `eu-textiles-bat-2022`; `costa-textile-dyeing-2021`

### Process: Final mechanical finishing and inspection (`final_finishing_and_inspection`)

#### Inputs

##### Product flows

###### Unfinished fabric entering a dry-only final route (`final_unfinished_fabric_input`)

This exchange applies when the product bypasses wet processing and proceeds from fabric formation to final mechanical finishing and inspection.

- Selected flow: Unfinished CPC 26830 fabric of the declared construction and textile material
- Flow property / unit: Mass / kg
- Amount rule: measured input lot mass at the declared conditioning basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources: `iso-3801-1977`

###### Wet-processed fabric entering final finishing and inspection (`final_wet_finished_fabric_input`)

This exchange applies when the declared route includes wet processing before final mechanical finishing and inspection.

- Selected flow: Wet-processed CPC 26830 fabric of the declared construction and textile material
- Flow property / unit: Mass / kg
- Amount rule: measured input lot mass at the declared conditioning basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_mass`
- Sources: `iso-3801-1977`

###### Purchased electricity used by final finishing and inspection (`final_finishing_electricity_input`)

This exchange records electricity for raising, shearing, brushing, heat-setting auxiliaries, inspection, rolling, and directly associated extraction when these operations occur.

- Selected flow: Purchased medium-voltage electricity
- Flow property / unit: Net calorific value / kWh
- Amount rule: process-submeter reading; otherwise documented allocation from plant meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_record`
- Sources: `eu-textiles-bat-2022`

#### Outputs

##### Product flows

###### Saleable CPC 26830 reference product (`final_reference_product_output`)

This exchange is the conforming woven pile or chenille fabric released at the declared factory gate.

- Selected flow: Other woven pile fabrics and chenille fabrics (other than terry towelling and narrow fabrics) `91e48617-c5a4-423e-870d-696c311f7b05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net conforming product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product_mass`
- Sources: `un-cpc-v3-26830`; `iso-3801-1977`

##### Waste flows

###### Rejected fabric from final inspection (`final_rejected_fabric_output`)

This exchange records one rejected-fabric stream of the declared composition and destination.

- Selected flow: Rejected CPC 26830 fabric of the declared construction and textile material
- Flow property / unit: Mass / kg
- Amount rule: weighed rejected mass transferred to the declared reuse, recycling, treatment, or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_and_destination`
- Sources: `eu-textiles-bat-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | separable products, lots, routes, and waste-treatment operations | Subdivide or meter separately before allocating shared inputs and outputs. | `iso-14044-2006`; `jrc-ilcd-2010` |
| `allocation_internal_recycling` | yarn, fabric, water, heat, or chemicals internally reused in the reporting period | Record the internal transfer once and reconcile it in the facility mass or energy balance; do not count both avoided virgin input and exported co-product credit. | `jrc-ilcd-2010`; `eu-textiles-bat-2022` |
| `allocation_shared_utilities` | utilities that cannot be submetered after reasonable effort | Allocate from a documented causal driver such as machine hours, metered operating time, bath volume, or measured heat demand; use mass only when no better physical relation exists. | `iso-14044-2006`; `jrc-ilcd-2010` |
| `allocation_saleable_coproduct` | saleable yarn, fabric, or recovered material co-products | Apply the ISO 14044 hierarchy, document the selected physical relationship or other justified method, and disclose sensitivity when the choice can materially change results. | `iso-14044-2006` |
| `allocation_waste_destination` | wastes and wastewater leaving the foreground | Keep each destination explicit and link the corresponding treatment service; no avoided-burden credit is assigned without a declared downstream modelling convention. | `jrc-ilcd-2010`; `eu-textiles-bat-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material_input_mass | weaving_and_pile_formation; wet_processing; final_finishing_and_inspection | each atomic yarn, fabric, or chemical input | receiving, stock-issue, return, and batch record | material id; supplier; composition; concentration where relevant; lot id; issued mass; returned mass; date; process | calibrated scale, tank meter, or reconciled invoice and stock issue | kg as supplied | per lot or issue | complete reporting period | every included production site and fixed-supplier operation | sum net issued mass by exact flow identity and normalize to conforming process output | calibration certificate, invoice, stock ledger, formulation, and batch ticket |
| cp_electricity_record | weaving_and_pile_formation; wet_processing; final_finishing_and_inspection | purchased electricity | submeter and operating log | meter id; start and end reading; timestamp; process; downtime; allocation driver if shared | calibrated submeter; shared meter only with documented causal allocation | kWh | continuous or per shift | complete reporting period | each included process area | subtract verified non-process use, aggregate by process, and normalize to conforming output | meter calibration, energy invoice reconciliation, and operating log |
| cp_fabric_output_mass | weaving_and_pile_formation; wet_processing | conforming intermediate fabric | production lot and quality release record | lot id; gross mass; tare; net mass; conditioning basis; width; mass per unit area; rejected mass | calibrated scale plus documented ISO 3801-compatible mass/area or mass/length measurement where conversion is used | kg | per lot | complete reporting period | each included process | sum net conforming output at one declared conditioning basis | scale calibration, specimen record, and quality release |
| cp_waste_mass_and_destination | weaving_and_pile_formation; final_finishing_and_inspection | each atomic solid waste stream | waste transfer and internal recovery record | waste id; composition; mass; container tare; date; destination; recovery status | calibrated scale or verified waste contractor record | kg | per transfer | complete reporting period | each included process | sum by exact waste identity and destination; reconcile internal recovery separately | weigh ticket, contractor receipt, and stock reconciliation |
| cp_process_water_record | wet_processing | Process Water | water meter and batch record | meter id; intake; reused return; batch id; process step; timestamp | calibrated flow meter or calibrated tank-volume change | kg or m3 with recorded density | continuous or per batch | complete reporting period | wet-processing area | calculate net supplied water by process and normalize to conforming wet-processed output | meter calibration, water balance, and batch log |
| cp_chemical_issue_record | wet_processing | each atomic process chemical | formulation, stock issue, invoice, and dosing record | chemical identity; CAS or colour index where available; supplier; concentration; as-supplied mass; batch id; process step | calibrated dosing meter or scale reconciled to stock movement | kg as supplied | per batch | complete reporting period | wet-processing area | sum by exact chemical and concentration; retain active-substance calculation separately | safety data sheet, formulation, calibration, invoice, and stock reconciliation |
| cp_steam_heat_record | wet_processing | Process heat from steam | steam or heat meter and delivery-state record | meter id; steam mass or heat; pressure; temperature; condensate return; timestamp; process | calibrated heat meter or steam meter with documented enthalpy calculation | MJ; source records may retain kg steam | continuous or per batch | complete reporting period | wet-processing area | aggregate net delivered heat by process and normalize to conforming output | calibration, boiler or supplier record, and enthalpy basis |
| cp_wastewater_record | wet_processing | textile wet-processing wastewater transferred to treatment | effluent flow and transfer record | stream id; flow; density if mass conversion is used; pH; temperature; destination; sampling period | calibrated flow meter and destination-specific transfer record | kg or m3 with recorded density | continuous; batch release where applicable | complete reporting period | each segregated wet-process stream and discharge point | aggregate by stream and destination; do not merge direct discharge with transfer to treatment | meter calibration, flow balance, sample chain of custody, and treatment receipt |
| cp_reference_product_mass | final_finishing_and_inspection | saleable reference product | final inspection and dispatch record | product id; lot id; fibre composition; construction; width; mass per unit area; gross mass; tare; net mass; conditioning basis; grade; finish state | calibrated scale and final quality release | kg | per lot | complete reporting period | every included site | sum conforming net product mass at the declared conditioning basis | scale calibration, ISO 3801-compatible test record, and release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange_to_reference | every foreground exchange | exchange amount divided by conforming reference-product mass for the same represented route and period | atomic exchange record; cp_reference_product_mass | exchange unit per 1 kg reference product | `iso-14044-2006`; `jrc-ilcd-2010` |
| reconcile_fabric_mass | each fabric-forming or finishing process | input fabric and yarn mass equals conforming fabric output plus separately identified waste, retained stock change, samples, and measured loss within documented uncertainty | cp_material_input_mass; cp_fabric_output_mass; cp_waste_mass_and_destination | process mass-balance residual and completeness flag | `eu-textiles-bat-2022` |
| convert_area_or_length_to_mass | fabric reported by m2 or linear m | measured area multiplied by lot-specific mass per unit area, or measured length multiplied by lot-specific mass per unit length | specimen record; width where needed; lot quantity | kg fabric at declared conditioning basis | `iso-3801-1977` |
| calculate_net_process_water | wet processing | supplied water minus measured water internally returned to the same process; report other reuse transfers separately | cp_process_water_record | kg or m3 net process water per 1 kg wet-processed output | `eu-textiles-bat-2022` |
| calculate_steam_heat | steam records | use direct heat measurement; otherwise calculate from measured steam mass and documented delivery/condensate enthalpy states | cp_steam_heat_record | MJ delivered process heat per 1 kg wet-processed output | `eu-textiles-bat-2022` |
| calculate_active_chemical | formulated chemicals | as-supplied mass multiplied by recorded active mass fraction; retain both values and do not overwrite the as-supplied inventory exchange | cp_chemical_issue_record | kg active substance as a companion calculation | `roos-textile-chemicals-2018` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every material and waste flow | Use one chemically or physically specific identity per exchange; retain supplier grade, fibre composition, concentration, colour index or CAS where applicable, and destination for waste. | supplier specification, safety data sheet, formulation, receiving record, and waste transfer record |
| dq_temporal | foreground records | Cover a representative continuous reporting period and all included routes; disclose shutdowns, trials, rework, and seasonal or campaign effects. | meter coverage report, production calendar, and exception log |
| dq_completeness | each process | Reconcile material, energy, water, wastewater, and waste records at process level; quantify and explain missing records rather than assigning zero. | process balance, meter/invoice reconciliation, and unresolved-data register |
| dq_measurement | measured quantities | Identify meter or scale, calibration status, reading frequency, unit, conversion factor, and allocation driver. | calibration certificate, raw readings, and calculation workbook |
| dq_route | product dataset | Match fibre composition, pile construction, finish state, wet-processing route, geography, technology, and packaging boundary to the represented product. | bill of materials, route card, product specification, and dataset metadata |
| dq_chemical_inventory | wet processing | Record every dye substance, carrier, salt, alkali, acid, bleaching agent, reducing agent, surfactant, softener, coating, flame retardant, water repellent, and cleaning chemical actually used as its own exchange; do not use aggregate “dyes” or “auxiliaries” rows. | formulation, dosing record, safety data sheet, and stock reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The selected reference flow UUID, Product flow type, CPC 26830 classification, Mass property, Units of mass unit group, and kg reference unit shall all be present and mutually consistent. | `un-cpc-v3-26830`; `jrc-ilcd-2010` |
| `validate_scope_exclusions` | product identity | Reject records for terry towelling, narrow fabrics, cotton subclass 26810, man-made-fibre subclass 26820, carpets, tufted fabrics, knitted pile fabrics, apparel, or made-up articles. | `un-cpc-v3-26830` |
| `validate_required_qualifiers` | dataset metadata | Fibre composition, pile/chenille construction, width, mass per unit area, finish state, conditioning basis, grade, geography, gate, wet-processing route, and packaging inclusion shall be declared. | `iso-3801-1977`; `jrc-ilcd-2010` |
| `validate_atomic_inventory` | all inventory exchanges | Every actual input, output, waste, wastewater stream, and direct emission shall be represented as one atomic exchange with exact identity and destination; aggregate labels and selector instructions fail validation. | `eu-textiles-bat-2022`; `roos-textile-chemicals-2018` |
| `validate_route_coverage` | process map | Weaving and final inspection are required; wet processing is included only when evidenced, and every included or omitted conditional process shall have a route record. | `eu-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_foreground_evidence` | quantitative inventory | Every amount shall come from a foreground record or a documented calculation from foreground records. Blank, estimated, default, or AI-generated quantity ranges do not conform. | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `validate_mass_balance` | yarn, fabric, chemical, water, wastewater, and waste records | Process-level balances shall reconcile inputs, conforming outputs, waste, stock change, reuse, and documented losses within the facility's stated measurement uncertainty. | `eu-textiles-bat-2022` |
| `validate_allocation` | shared operations and co-products | Apply subdivision first, disclose the allocation driver and denominator, and retain a sensitivity check when allocation choice can materially affect results. | `iso-14044-2006`; `jrc-ilcd-2010` |
| `validate_uuid_gate` | UUID-bearing rows | A UUID may be retained only after flow-hybrid-search discovery and Tiangong state-100 direct readback confirm exact flow identity, flow type, required qualifiers, and compatible property/unit; unresolved or rejected candidates remain blank. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | factory-gate CPC 26830 fabric datasets matching the declared composition, construction, finish state, route, geography, technology, quality grade, and conditioning basis |
| excluded_use | cotton or man-made-fibre woven-pile subclasses; terry or narrow fabrics; carpets; tufted or knitted pile fabrics; apparel; use-phase or end-of-life claims; routes with unresolved reference identity |
| required_metadata | canonical PCR id; reference-flow UUID; CPC code; fibre composition; construction; width; mass per unit area; conditioning basis; finish state; route; geography; technology; reporting period; allocation; packaging boundary |
| required_quality_disclosure | foreground coverage; meter and scale calibration; process balances; chemical and waste completeness; supplier/background links; unresolved UUIDs; excluded operations; uncertainty and allocation choices |
| update_trigger | material change to product scope, yarn composition, pile-forming technology, wet or dry finishing route, chemical formulation, energy or water system, waste destination, supplier mix, geography, allocation, or data age |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-26830` | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, code 26830, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | product category identity and exclusions |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | goal and scope, inventory, allocation, reporting, and review requirements |
| `iso-3801-1977` | standard | ISO 3801:1977, Textiles — Woven fabrics — Determination of mass per unit length and mass per unit area, confirmed 2023, https://www.iso.org/standard/9335.html | reference-mass measurement and area/length conversion |
| `jrc-ilcd-2010` | official_guidance | European Commission Joint Research Centre, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, EUR 24708 EN, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | reference flow, foreground/background boundary, completeness, data quality, and allocation |
| `eu-textiles-bref-2023` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry | textile process decomposition and route applicability |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, http://data.europa.eu/eli/dec_impl/2022/2508/oj | process-level records for materials, water, energy, chemicals, wastewater, waste, and emissions |
| `costa-textile-dyeing-2021` | literature | Costa et al. (2021), Analysis of the Environmental Life Cycle of Dyeing in Textiles, DOI:10.3303/CET2186122, https://www.cetjournal.it/cet/21/86/122.pdf | wet-processing inventory coverage for water, chemicals, and energy |
| `roos-textile-chemicals-2018` | literature | Roos et al. (2018), USEtox characterisation factors for textile chemicals based on a transparent data source selection strategy, DOI:10.1007/s11367-017-1330-y, https://link.springer.com/article/10.1007/s11367-017-1330-y | substance-specific textile chemical inventory and transparency |
