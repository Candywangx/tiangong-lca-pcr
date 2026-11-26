---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-grains-and-oilseeds-and-oleaginous-fruit-5545d18f
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Retail services for sealed dry whole food wheat

## 1. Scope and Applicability

This PCR is a narrower service methodology associated with CPC 3.0 62111, retaining the existing PCR identity. It covers only non-specialized physical-store retail of sealed dry whole food wheat. Different species, grades, packs and store configurations are measured as homogeneous strata, not deemed equivalent by classification. The following projectable rules and protocols carry the mandatory boundary, quantity and completeness requirements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-grains-and-oilseeds-and-oleaginous-fruit-5545d18f |
| classification_refs | CPC 3.0 62111; narrower |
| covered_products | Incremental non-specialized physical-store retail service for dry whole food wheat, accepted in sealed supplier packs and handed to the customer in those packs; stratify food grade, wheat species, pack specification and store route. |
| excluded_products | Seed for sowing, feed, oilseeds, oleaginous fruits, other cereal species, flour, cooked grain, bulk dispensing, repacking, processing, chilled storage, online fulfilment, wholesale and independent delivery. |
| representative_product | Retail services for sealed dry whole food wheat; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Store receipt and acceptance; sealed ambient holding and display; manual handling; checkout and buyer handover. No grain opening or fumigation. Store utilities are metered electricity and water; any additional actual route requires completed exchange expansion before dataset use. |
| market_state | Completed buyer handover of intact, accepted supplier-packed food wheat, preserving the declared moisture and quality specification. Retailer retains responsibility for its rejects, stock losses and returns. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Retail service completing buyer handover of sealed dry whole food wheat |
| How much | Service corresponding to 1 kg net wheat per reference flow |
| How well | Sealed, intact and meeting the declared buyer acceptance grade and moisture specification |
| How long or cycle | Store receipt to buyer handover; cp_stock corrects carry-over stock and attributable returns; disclose actual residence time |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Physical-store retail service for sealed dry whole food wheat |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | non-specialized store and country; reporting dates; food wheat species and grade; supplier pack and net mass; delivered-receipt supply gate; moisture wet basis; acceptance specification; opening/closing stock; returns cut-off and corrections; residence time; energy supply and building/asset configuration; waste recipients; allocation evidence |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_reference | reference product | Mass | kg | Reference mass is only the throughput of qualified goods serviced. Wet-basis net mass excludes packs; use the same moisture specification within one stratum. Unknown moisture cannot support dry-mass conversion; comparing wet-basis changes requires measured moisture and dry-matter conservation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Sealed wheat physically arriving at retailer receipt and acceptance; record supplier-delivery scope |
| starting_condition_role | Incremental retail foreground at receipt gate; lost-goods upstream background separately attributed |
| product_classification_scope | CPC 3.0 62111; narrower |
| recursive_input_rule | Same-category retail service inputs require verified non-overlapping gates; never recursively add the same store service |
| upstream_dataset_requirement | Match actual supply region, period, technology and gate; separately match lost packaged wheat, electricity, complete assets and waste treatment scopes |
| disclosure | Disclose service/goods composition, loss responsibility, shared attribution, asset cohorts, treatment destinations and all unknowns |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| b_scope | retail | Only the declared sealed dry whole-food-wheat physical-store route is covered. Keep each quality/specification stratum separate; neither the shared CPC label nor equal kg makes food wheat equivalent to seeds, feed or oilseeds. The classification association is narrower. | un-cpc3-62111 |
| b_gates | retail | Start at retailer receipt, including unloading/acceptance effort, quarantine, sealed storage/display, checkout, cleaning, stock administration, buyer handover, returns attributable to that service, and downstream treatment of retailer waste. End at buyer handover for qualified goods and verified treatment boundaries for waste. Supplier delivery up to receipt is outside foreground and is in the matched goods background; exclude buyer travel, consumption and buyer packaging disposal. | jrc-retail-2013 |
| b_goods_loss | wheat_loss_input | Qualified goods production and their original packs remain in the downstream goods system. Within this service, include only L/Q kg of packaged wheat background for irreversible retailer losses L, at the same delivered-receipt gate, including the lost share of original packaging and supplier transport. Do not include all incoming goods here. A downstream product-plus-service result adds 1 kg of the matched delivered-receipt goods background plus this service, so lost goods production is included once. Supplier returns with documented recovery remain transferred stock; unrecovered or unknown disposition is not assumed recovered. |  |
| b_stock | retail | Keep merchandise ledgers separate from inventory exchanges. Record opening stock, supplier receipts, customer returns, closing stock, supplier returns, gross buyer handovers, damaged grain and moisture change by lot. Internal moves are not new receipts, sales or outputs. Distinguish physical customer returns R from financial refunds/discounts. Q = H - R - F, where H is physical buyer-handover mass, R is physically returned mass reversing that cohort handover, and F is final disqualified handover mass retained by the buyer without a physical return. A price concession with unchanged acceptance does not change physical mass or Q. Trace all reversals to original handover IDs. Failed customer-retained wheat is not automatically retailer grain waste: record its actual recipient, status and final disposition, include its lost-goods background in L, and add the specific terminal transfer or treatment card under b_expansion before completeness. Do not count F as qualified service. Resale enters only the new handover after reversal of the original. Positive Q is required for normalization; retain every Q=0 burden in an unnormalized report or the prospectively declared same-configuration 12-month pool, never delete it or select a pool retrospectively to improve the result. |  |
| b_capital | building_input,pallet_input,till_input,lighting_input,broom_input | Include manufacture, maintenance and terminal treatment of the complete building shell and fixed infrastructure, wooden pallets, complete tills, complete LED luminaires and complete brooms used by the service. Use manufacture-to-installed/commissioned-gate asset backgrounds, including construction/installation and upstream delivery, but excluding operation, maintenance and terminal treatment. The building package excludes every separately modelled till, pallet, broom and LED luminaire whether fixed or movable. A background containing terminal treatment must have that module verifiably removed before use with the paired terminal card; otherwise it is incompatible and blocks completion. Complete devices include their components; do not add their steel, electronics, lamps or wood again. Use asset cohorts and documented service-life allocation in c_capital, with paired terminal flows for that same cohort; no second charge for actual period retirement. Include refurbishment and maintenance replacements using separate exact material/device cards when they are not already included in a verified complete-asset background. Ownership versus lease does not remove responsibility; a verified leased supply may replace, never overlap, the owned asset scope. |  |
| b_expansion | all inventory rows | Inspect equipment, contracts, invoices, safety sheets, maintenance and waste records for each reporting period. Any actual fuel, heat, refrigeration/refrigerant, chemical cleaner, pest-control agent, powered transport, additional packaging, information/telecom service, consumable, asset, maintenance part, direct dust/emission or waste not represented by a card blocks completeness until a specific card with direction/type, state, property/unit, measurement protocol, quantity, attribution and treatment/receiving medium has been added to both languages and resynced. No generic other-material/other-service row or omission is allowed. Evidence-confirmed absence is not_applicable; unknown is unresolved and cannot be zero. Opening bags, grain treatment, repacking, cooking or buyer delivery falls outside this route and requires a separate applicability decision. |  |
| b_waste | grain_waste,paper_waste,film_waste,wastewater | Follow each actual waste carrier to its recipient and treatment. Grain waste excludes separately measured bag/liner mass; paper and polyethylene wastes contain only those actual streams. A contaminated or inseparable composite requires its own identified waste card rather than fictional pure-material splitting. Sewage is a waste output to treatment, never an elementary emission to water. Do not add constituent emissions to the untreated carrier; treatment datasets own their emissions unless that treatment is explicitly expanded. Sold recoverable goods remain goods only with quality, acceptance and destination evidence; no automatic recycling/substitution credit. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Sealed-wheat receiving holding display checkout and handover | required | Actual declared-route service including attributable return/loss and terminal capital provision | foreground retail service | retail_service |

### Process: Physical-store retail (`retail`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_input`)

Metered point-of-use electricity attributable under a_subdivision; apply c_electricity using cp_energy. UUID identifies electricity only: provider, voltage, supply mix and losses remain required site-specific selections.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Potable water for wet cleaning (`water_input`)

Actual potable cleaning water where wet cleaning occurs; use cp_water, a_subdivision and c_normalize. Demonstrated dry-only cleaning makes this card not_applicable; unknown water use cannot be zero.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

###### Kraft paper carrier bag (`carry_bag_input`)

Extra kraft carry bags actually issued at checkout, if any; weigh uncoated kraft bags under cp_packaging and normalize with c_normalize. A different/coated material requires another identified card before completion. Do not add original supplier packs again.

- Selected flow: Kraft paper carrier bag
- Flow property / unit: Mass / kg
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Packaged dry whole food wheat at retail receipt (`wheat_loss_input`)

Attribute only measured irreversible loss L/Q under b_goods_loss and c_stock, using cp_stock. Background covers the same food grade and original pack delivered to retail receipt; it excludes retailer operations and terminal treatment. Never use the net sale Q or total receipts as this card amount.

- Selected flow: Packaged dry whole food wheat at retail receipt
- Flow property / unit: Mass of net wheat / kg
- Amount rule: Measured irreversible net wheat loss L / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`

###### Complete retail-premises building shell and fixed infrastructure (`building_input`)

One Item(s) is one complete documented asset of the declared configuration, not a component, hour or mass substitute. Apply cp_assets and c_capital; the building excludes separately listed movable assets. If absent use evidenced not_applicable, not a default count.

- Selected flow: Complete retail-premises building shell and fixed infrastructure
- Flow property / unit: Number of complete assets / Item(s)
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

###### Complete wooden pallet (`pallet_input`)

One Item(s) is one complete documented asset of the declared configuration, not a component, hour or mass substitute. Apply cp_assets and c_capital; the building excludes separately listed movable assets. If absent use evidenced not_applicable, not a default count.

- Selected flow: Complete wooden pallet
- Flow property / unit: Number of complete assets / Item(s)
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

###### Complete electronic checkout till (`till_input`)

One Item(s) is one complete documented asset of the declared configuration, not a component, hour or mass substitute. Apply cp_assets and c_capital; the building excludes separately listed movable assets. If absent use evidenced not_applicable, not a default count.

- Selected flow: Complete electronic checkout till
- Flow property / unit: Number of complete assets / Item(s)
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

###### Complete LED luminaire (`lighting_input`)

One Item(s) is one complete documented asset of the declared configuration, not a component, hour or mass substitute. Apply cp_assets and c_capital; the building excludes separately listed movable assets. If absent use evidenced not_applicable, not a default count.

- Selected flow: Complete LED luminaire
- Flow property / unit: Number of complete assets / Item(s)
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

###### Complete manual floor broom (`broom_input`)

One Item(s) is one complete documented asset of the declared configuration, not a component, hour or mass substitute. Apply cp_assets and c_capital; the building excludes separately listed movable assets. If absent use evidenced not_applicable, not a default count.

- Selected flow: Complete manual floor broom
- Flow property / unit: Number of complete assets / Item(s)
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Physical-store retail service for sealed dry whole food wheat (`retail_service`)

1 kg reference flow. Measure positive net buyer-handover Q with cp_stock and c_stock, then express one service for 1 kg net accepted wheat. Merchandise remains a separately combined goods system; neither the product wheat nor packaging mass is the service output.

- Selected flow: Physical-store retail service for sealed dry whole food wheat
- Flow property / unit: Mass of completed wheat throughput / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock`

##### Waste flows

###### Rejected whole food wheat for treatment (`grain_waste`)

Actual irreversibly lost grain separately weighed under cp_waste and c_waste; include damaged/unsalable returns, exclude packaging tare and recoverable transfers. Link loss production to wheat_loss_input. A contaminated carrier requires explicit identity expansion.

- Selected flow: Rejected whole food wheat for treatment
- Flow property / unit: Mass / kg
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Uncoated kraft paper waste (`paper_waste`)

Actual separated uncoated kraft waste from retailer handling/extra bags, under cp_packaging, cp_waste and c_waste. Packaging attached to qualified buyer goods leaves with the goods and is excluded here.

- Selected flow: Uncoated kraft paper waste
- Flow property / unit: Mass / kg
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Polyethylene packaging film waste (`film_waste`)

Actual separately identifiable polyethylene transit/failed-pack liner film discarded by the retailer, under cp_packaging, cp_waste and c_waste. Apply only with documented composition; no generic mixed-plastics assumption.

- Selected flow: Polyethylene packaging film waste
- Flow property / unit: Mass / kg
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Store wet-cleaning wastewater to sewer treatment (`wastewater`)

Actual measured wet-cleaning effluent under cp_water and c_waste to an identified sewer/treatment recipient. Never model this carrier simultaneously as an elementary water emission or infer its mass solely from water input.

- Selected flow: Store wet-cleaning wastewater to sewer treatment
- Flow property / unit: Mass / kg
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

###### Decommissioned complete retail-premises building shell and fixed infrastructure (`building_waste`)

Terminal provision for the same complete asset cohort as building_input; use cp_assets, cp_waste and c_capital. The downstream treatment model owns dismantling, component recovery and all resulting emissions; do not also add constituent wastes. Verify full-device treatment scope and recipient; unknown or incompatible scope blocks completion.

- Selected flow: Decommissioned complete retail-premises building shell and fixed infrastructure
- Flow property / unit: Number of complete waste assets / Item(s)
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

###### Decommissioned complete wooden pallet (`pallet_waste`)

Terminal provision for the same complete asset cohort as pallet_input; use cp_assets, cp_waste and c_capital. The downstream treatment model owns dismantling, component recovery and all resulting emissions; do not also add constituent wastes. Verify full-device treatment scope and recipient; unknown or incompatible scope blocks completion.

- Selected flow: Decommissioned complete wooden pallet
- Flow property / unit: Number of complete waste assets / Item(s)
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

###### Decommissioned complete electronic checkout till (`till_waste`)

Terminal provision for the same complete asset cohort as till_input; use cp_assets, cp_waste and c_capital. The downstream treatment model owns dismantling, component recovery and all resulting emissions; do not also add constituent wastes. Verify full-device treatment scope and recipient; unknown or incompatible scope blocks completion.

- Selected flow: Decommissioned complete electronic checkout till
- Flow property / unit: Number of complete waste assets / Item(s)
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

###### Decommissioned complete LED luminaire (`lighting_waste`)

Terminal provision for the same complete asset cohort as lighting_input; use cp_assets, cp_waste and c_capital. The downstream treatment model owns dismantling, component recovery and all resulting emissions; do not also add constituent wastes. Verify full-device treatment scope and recipient; unknown or incompatible scope blocks completion.

- Selected flow: Decommissioned complete LED luminaire
- Flow property / unit: Number of complete waste assets / Item(s)
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

###### Decommissioned complete manual floor broom (`broom_waste`)

Terminal provision for the same complete asset cohort as broom_input; use cp_assets, cp_waste and c_capital. The downstream treatment model owns dismantling, component recovery and all resulting emissions; do not also add constituent wastes. Verify full-device treatment scope and recipient; unknown or incompatible scope blocks completion.

- Selected flow: Decommissioned complete manual floor broom
- Flow property / unit: Number of complete waste assets / Item(s)
- Amount rule: Attributable service-cohort quantity of this exact exchange / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_subdivision | all inventory rows | First meter or record the actual task and subdivide dedicated use. Allocate each remaining shared end use using its determining physical driver: measured equipment power-time for electricity; occupied floor-area-time for building and general lighting; pallet position-time for pallets; checkout handling time for till; cleaned area-time for water/broom. Determine driver shares over all products using that end use, including other categories, with shares summing to one. Reconcile all shares to the total meter/asset pool before dividing by Q. Include idle, closed and no-sale intervals in each end-use pool. Allocate building-related common/base-load energy and circulation/office floor pools using measured occupied department floor-area-time across all categories; allocate equipment idle provision using its same full-pool causal user shares, including failed-service/return handling. Zero annual driver or an unassignable common pool remains unresolved with the full burden retained, never discarded or divided by an invented driver. Do not allocate the complete store solely over wheat sales or multiply a driver share twice. |  |
| a_unresolved | all inventory rows | If a causal driver or full shared-use denominator is missing, collect a time-and-motion/submeter study covering operating and idle periods and all users; until then retain unresolved attribution and block a complete dataset. Do not default to turnover, purchase value, equal shares or zero. No co-product allocation or negative burden is introduced for rejects; disposal costs or recovery revenue are disclosed separately from physical quantities. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_stock | retail | reference throughput and merchandise stock | ledger | lot; original handover/event ID; physical period; service cohort; supplier; species; food grade; pack; net kg; moisture wet basis; opening/closing; receipt; physical handover H; physical return R; final failed retained F; financial concession; onsite loss W; final disposition; dates | At store receiving and checkout reconcile calibrated net weighing/verified pack net weights to batch invoices and transaction/return IDs; count sealed packs and independently check sample weights; collect batch certificate or documented moisture sample, inspect pack integrity and quarantine records. Detailed aggregation: c_stock gives Q and L; retain all other-category counts for shared drivers; persist original-event ownership and all later actual return/replacement/waste numerator corrections; reconcile each physical period once across original and new-service cohorts | kg; moisture fraction | each movement; period-end physical count | same full reporting period plus traced later returns | whole store and wheat stratum | per reference flow | scale calibration; lot certificates; receipts; dated sales/returns; signed stock reconciliation |
| cp_energy | retail | electricity | meter | meter ID; start/end kWh; interval; circuit; power; run/idle hours; all-user shares; provider; voltage; delivery gate | Read point-of-use meter at store and relevant circuits; use logged equipment power-time study across open/closed hours where not separately metered; reconcile to invoice and whole-store circuit sum. Detailed aggregation: convert kWh to MJ once, apply a_subdivision and c_electricity | kWh; h | interval readings and monthly reconciliation | same full reporting period including closed hours | all store electricity end uses and other-category users | per reference flow | meter calibration; circuit map; study raw logs; invoice and balanced shares |
| cp_water | retail | potable cleaning water and sewage | meter | water meter; inlet/outlet volume; mass or density; temperature; evaporation/retention; cleaned area-time; recipient carrier_id; discharge_state; effluent_water_mass_fraction w_water; water_fraction_assay_and_uncertainty; water_in_purchased_formulations_materials; opening/closing water stocks by location; other export water components; external water vapour; signed_water_residual | Measure dedicated cleaning draws and discharged effluent at store; calibrate vessel/scale or meters, measure relevant water/effluent density if volume converted; separate staff/other-product use by measured cleaned area-time and reconcile water balance. Detailed aggregation: attribute once, then c_waste and c_normalize; unresolved loss balance blocks completion Measure whole-effluent density and its representative water fraction independently at the same discharge state; retain sampling, dry-solids/composition method and water in other actual sources/exports. Close the water-component control volume under c_waste; whole carrier kg is never a substitute for water kg. | kg; m3; kg/m3 | each cleaning batch; monthly check | same full reporting period | store wet-cleaning points and sewer handover | per reference flow | calibration; mass/volume test; cleaning log; water balance; sewer acceptance |
| cp_packaging | retail | extra kraft bag and original-pack wastes | weighing | material; composition; tare kg; issued bags; opening/purchases/closing; lost packs; recipient; linked grain lot | Weigh each exact bag/liner material at store; reconcile extra issued kraft carry bags to stock and packaging waste to damaged/rejected grain lots. Retained original packs of qualified goods are outside the service burden; lost original packs are already upstream in wheat_loss_input. Detailed aggregation: extra issued bag kg / Q; carrier waste separately / Q; avoid duplicate manufacture of lost original packs | kg | each material batch and waste dispatch | same full reporting period | checkout and store waste bins | per reference flow | tare calibration; material specifications; bag ledger; linked waste tickets |
| cp_assets | retail | complete capital assets and terminal cohorts | asset_register | asset cohort; exact complete configuration; count; commissioned date; original/revised service life; period years; all-period/all-beneficiary fraction ledger; previously assigned and remaining provision; premature retirement; replacement cohort; owner/lease; manufacture-only boundary; repair; all-user driver including idle; terminal plan and recipient | At store inventory the complete building shell/fixed infrastructure, pallets, till, LED luminaires and brooms; inspect owner plans, purchase and maintenance records, expected/actual service life and specific terminal route. Match upstream full-device scope to component exclusions. Record actual maintenance; expand uncovered parts before use. Detailed aggregation: c_capital pairs manufacture and terminal provision on same cohort; separately collect maintenance not already in background | Item(s); years; driver units | at commissioning/repair/retirement; annual audit | same reporting period and supported asset lifetime | entire asset cohort and all shared users | per reference flow | asset IDs; measured configuration; supported life study; owner terminal plan; full-scope supplier evidence |
| cp_waste | retail | grain, packaging and complete-asset waste | weighing_and_transfer | carrier identity; kg or complete Item(s); batch/cohort; treatment; recipient; destination fractions; transport gate; measured contamination | At retailer exit weigh each grain/paper/film stream excluding separate components; retain recipient acceptance and treatment scope. For complete assets use exact cohort count and verified complete-device dismantling/treatment dataset; count one intact defined asset, never an undefined pile. Terminal cohort amounts use c_capital; audit actual disposal records to update life and route, not as a second exchange. Detailed aggregation: c_waste or c_capital once; each carrier destination fractions total one | kg; Item(s) | every physical dispatch; annual cohort-plan audit | same period for operational waste; declared lifetime for capital | store to identified treatment boundaries | per reference flow | calibrated scale; recipient tickets; transport/treatment dataset gates; coherent cohort terminal plan |
| cp_conditions | retail | actual route and absence/completeness decisions | site_audit | equipment; contracts; chemical sheets; fuel/heat; refrigeration; transport; telecom; packaging; maintenance; emissions; occurrence; evidence; gap; responsible person | At start and end of period and on any operational change inspect site, invoices, equipment and service contracts; cross-check operator interview with records. For every b_expansion condition record present, evidenced absent or unknown; present requires exact additional exchange and protocol before dataset completion. Detailed aggregation: no numerical normalization; apply b_expansion and v_complete to all conditions | occurrence record | period start/end and every change | entire reporting period | whole store, contractors and wheat stratum | per reference flow | dated inspection; signed occurrence register; invoices; safety sheets; unresolved gap register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_normalize | all inventory rows | For each exchange, normalized amount = service_cohort_amount / Q; service_cohort_amount is the attributable service-cohort exchange quantity and Q is net completed kg from cp_stock. The numerator includes original-period operations plus all later actual return, replacement, handling and waste activity attributable to those original handovers. Persist event-to-cohort ownership, correct original-period Q and every affected numerator, and remove the same events from later-period new-service pools. Reconcile cohort allocations to each physical period meter and waste ledger once, even for cross-period events. Convert source units once before attribution; do not divide a per-kg background inventory by Q again. Physical inflows, wastes and internal stock are not forced to 1 kg. | service_cohort_amount; Q; cp_stock | exchange amount per 1 kg reference flow |  |
| c_electricity | electricity_input | Electricity MJ = metered kWh x 3.6, then apply a_subdivision once and divide by Q. Meter reconciliation includes lighting, ventilation, checkout and other electric loads inside the declared route; a supply dataset includes generation and network losses only to the declared delivery gate. | cp_energy; Q | MJ per reference flow |  |
| c_stock | wheat_loss_input,grain_waste,retail_service | Opening + supplier receipts + physical customer returns R = closing + supplier returns + physical buyer handovers H + physical grain waste W + measured moisture/outlier adjustment, all kg on the same wet basis. Q = H - R - F, with F the final disqualified buyer-retained mass excluding physically returned R; financial-only concessions with unchanged acceptance do not alter H, R or F. Explain every residual against instrument uncertainty, do not classify residual as an emission or set a default tolerance. L = W + F: measured irreversible onsite grain loss W plus final failed buyer-retained mass F; include proven destructive rejection/returned grain in W, excluding recoverable supplier returns and moisture-only change. Trace F to its documented final transfer/treatment route without inventing onsite waste. Keep physical-period stock reconciliation separate from corrected service-cohort attribution; include all later actual loss/return activities in the original cohort numerator once. Loss background = L/Q. | cp_stock; cp_waste | Q; L; kg loss background per reference flow |  |
| c_capital | building_input,pallet_input,till_input,lighting_input,broom_input,building_waste,pallet_waste,till_waste,lighting_waste,broom_waste | For each identical asset cohort, attributable lifetime provision = complete asset count x reporting-period years / supported service-life years x causal service share; divide by Q. Maintain a persistent ledger across every period and beneficiary for each commissioned cohort: cumulative assigned manufacture and paired terminal fractions must each remain at most one and close to one on final retirement. Apply the same ledger fraction and service share to that cohort terminal full-asset waste quantity. On revised service life, distribute only the previously unassigned residual across supported remaining use; never restart the complete asset. On premature retirement, allocate residual provision to actual historical beneficiaries using their persisted causal-use shares and correct their cohort reports; missing historical drivers retain unresolved residual, never zero or a new service-life reset. A replacement is a separately identified new asset cohort. Do not substitute actual-period retirements for the prorated terminal provision or add them twice. Maintenance not in the asset background uses actual period quantities / Q. Record service-life evidence, uncertainty, repair history and planned/actual terminal route; unknown life or terminal route blocks completion, never adopt an arbitrary default. | cp_assets; Q | Item(s) per reference flow |  |
| c_waste | grain_waste,paper_waste,film_waste,wastewater | Use measured separated carrier kg, each divided by Q. Whole effluent m_effluent=actual V_discharge*measured same-state whole-effluent rho_effluent, with no evaporation/retention deduction. Maintain an independent WATER-COMPONENT ledger: m_water,out=m_effluent*w_water, where w_water is the measured water mass fraction of that same actual discharged carrier; dissolved/suspended dry matter is not water. For one control volume reconcile all imported water components (separate water supply, water in purchased formulations/materials, and opening water stock)=water in effluent+water in other actual exports+actual external water-vapour transfer+closing water stock+signed investigated residual. Internal reuse is an internal transfer and cancels. A directly source-resolved water-kg amount receives no additional w_water. Determine each outlet water component from actual composition/traceable measurements; unknown water fractions or residuals block a water-closure claim, never correct direct effluent kg by that residual. Grain and packaging destination shares sum to one for each actual carrier; apply once. Already substance-based amounts/factors receive no additional composition fraction. | cp_water; cp_waste; Q; V_discharge; rho_effluent; w_water; water_in_formulations; opening_water_stock; closing_water_stock; other_export_water; external_vapour_water; signed_water_residual | kg per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | Before concrete dataset completion, bind every actual card to one verified flow and verify name, physical state, type, property/unit and receiving medium, including the reference service. Unbound candidate identities remain explicit, not zero and not approved; no proxy UUID is silently substituted. Confirm supplier/recipient and full gate scope separately from generic flow identity. | Direct record and supplier/recipient scope evidence |
| q_quality | retail_service | Declare buyer acceptance requirements, species, grade, net weight and moisture wet basis; verify incoming certification/lot checks and sealed-pack integrity. Collect moisture from a documented representative lot sample or traceable supplier batch certificate; do not open sale packs solely to create an inventory convention. Do not import generic FAO moisture, temperature or pest-treatment recommendations as default settings, food-safety limits or verified compliance. | Lot acceptance record and cp_stock |
| q_uncertainty | all inventory rows | Prospectively declare one same-configuration 12-consecutive-month reporting pool covering season, idle/no-sale intervals and stock carry-over; separate changed configurations. Keep every failed or Q=0 subperiod burden in that pool. If the complete pool has no positive Q, issue an unnormalized burden report and incomplete status; never erase the burden or choose future pooling after seeing the result. Use actual complete reporting-period records. Record instrument IDs, calibration, sampling error, missing intervals and replacement methods; a replacement estimate needs explicit basis, uncertainty and sensitivity. Missing identity, amount, driver, route or evidence blocks complete/approved output; preserve it as unknown pending collection. No numerical default consumption, yield, life or screening range is supplied. | Meter/scale calibration and gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_reference | retail_service | Require Q > 0, one linked output of 1 kg mass-throughput retail service, complete required qualifiers and consistent per-reference denominators in both languages. The service must never resolve to a wheat commodity UUID. |  |
| v_responsibility | wheat_loss_input,grain_waste | Reconcile cp_stock, loss makeup L/Q, packaging and recipient records; demonstrate that downstream goods background at 1 kg plus service covers qualified and lost goods once. Unknown supplier-return recovery or later returns prevents a final claim until corrected. No missing production burden or duplicate whole-receipt charge is allowed. |  |
| v_complete | all inventory rows | Pass only after every applicable exchange, upstream gate, shared allocation, asset cohort, treatment route and conditional expansion under b_expansion is measured or explicitly evidenced; verify all row/protocol/rule links and source hashes after sync. A schema/fingerprint pass or the atomic/localized marker is not scientific, translation or publication approval. Absent processes require positive absence evidence; unresolved scope is incomplete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Incremental receipt-to-handover retail service dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Combine only with 1 kg qualified food-wheat background at the declared gate, retaining service loss makeup; apply only to the same store route and qualified stratum |
| excluded_use | Not wheat production, whole CPC 62111 coverage, seed/feed or online delivery, food-safety certification or approved methodology |
| required_metadata | non-specialized store and country; reporting dates; food wheat species and grade; supplier pack and net mass; delivered-receipt supply gate; moisture wet basis; acceptance specification; opening/closing stock; returns cut-off and corrections; residence time; energy supply and building/asset configuration; waste recipients; allocation evidence |
| required_quality_disclosure | Flow identities, sources, allocation, loss responsibility, asset life/terminal scope, collection gaps, uncertainty and reconciliations; candidate methodology and unbound identities do not establish completed data |
| update_trigger | Update on grade/pack, store route, supply gate, assets, energy, returns, life/treatment, measurement or classification evidence change |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-62111 | official_guidance | UNSD CPC Version 3.0, subclass 62111; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62111 | Official classification and narrower relation; no retail methodology or consumption default |
| fao-storage-management | handbook | FAO, Manual of the prevention of post-harvest grain losses, section 5.2 Store management; https://www.fao.org/4/x5065e/x5065E0a.htm | Storage acceptance, holding, hygiene, movement records and moisture context; agricultural store guidance is not a retail-route default procedure or limit |
| jrc-retail-2013 | official_guidance | Schoenberger et al., Best Environmental Management Practice in the Retail Trade Sector, EUR 25998 EN (2013), DOI 10.2791/1775, sections 1.2, 2.1.6.5, 2.4.6; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail energy, store monitoring and waste-scope context; no transfer of benchmark numbers, performance claims or legal compliance |
