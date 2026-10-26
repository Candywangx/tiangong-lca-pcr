---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.refrigerated-storage-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Refrigerated storage services

## 1. Scope and Applicability

Refrigerated warehousing that maintains an identified lot of goods in an explicitly declared chilled or frozen state between warehouse acceptance and release. Include receiving checks, put-away, temperature/humidity control, storage, attributable internal movement, picking and dispatch readiness when included in the storage contract. A consignment may enter at its agreed storage temperature or undergo blast freezing associated with the storage contract. Include the associated freezing operation and its actual utilities, refrigerant balance, support and equipment shares; distinguish it from specialized food freezing sold independently, which is outside this category. [Source: `un-cpc-refrigerated`] Goods and their pre-existing packaging remain custody items, with losses tracked separately from service output. A refrigerated-storage reference does not represent production of the stored food or any freight movement.

Exclude ambient warehousing, bulk liquid/gas tank storage, freight transport, standalone cargo handling, food manufacturing, retail display and household refrigeration. Contracted ancillary handling is included once; independently purchased cargo handling must not be counted again. Declare actual product condition, temperature band, capacity utilization and time coverage. Compare only equivalent storage conditions; there is no universal safe temperature or energy intensity. FAO's meat-specific guidance supports the relevance of operating conditions and records, not universal conditions for all commodities. [Source: `fao-cold-equipment`; `fao-cold-operation`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.refrigerated-storage-services |
| classification_refs | CPC 3.0 67210 |
| covered_products | Contract refrigerated storage of identified chilled or frozen lots, including associated blast freezing when performed; constituent operations actually included in the contract |
| excluded_products | Ambient warehousing; bulk tank storage; initial chilling/freezing/thawing sold separately; freight; standalone handling; goods production |
| representative_product | One tonne-day of accepted refrigerated storage under one declared condition stratum |
| production_route | Accept lot → perform associated blast freezing when contracted → put away → maintain monitored conditions → retrieve and release |
| market_state | Delivered refrigerated custody service with identified lot, agreed conditions and recorded residence time |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Maintain a declared lot in the agreed chilled or frozen condition |
| How much | 1 tonne-day, calculated from actual net stored mass and elapsed storage time |
| How well | Declared commodity/state, temperature band, humidity where relevant, monitoring coverage and documented acceptance/deviation criteria |
| How long or cycle | 24 hours equivalent residence of one tonne, including attributable receipt/release operations spread over actual residence time |
| reference_flow_link | `storage_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Refrigerated storage service, declared condition |
| Reference flow property | Mass*time `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` |
| Reference unit group | Units of mass*time `59f191d6-5dd3-4553-af88-1a32accfe308` |
| Reference unit | tday |
| Required qualifiers | warehouse and room; lot/commodity; chilled/frozen state; net mass excluding packaging; accepted temperature and humidity limits; temperature history and excursions; actual arrival/release timestamps; receipt/dispatch boundary; reporting period; occupancy; associated-freezing inclusion and batch state/temperature/energy; refrigeration type and each refrigerant; supply region/voltage; provider/owned asset coverage |

Here tday means one tonne-day: 1,000 kg held for 24 hours. The local text token tday is an explicit alias of the archived unit group's formal unit t*d, not a newly registered unit. Export actual data in formal unit t*d: 1 tday = 1 t*d; use the unit group's recorded conversion to its reference unit kg*a. Define total delivered service S by integrating each lot's net mass in tonnes over its actual residence time in days; sum only equivalent condition strata. Partial days use actual timestamps. Inventory numerator quantities attributed to a stratum are divided by its positive S. Empty-room conditioning remains a burden allocated to delivered service; it does not generate fictitious occupied tonne-days. Exceptional temperature failures and spoiled lots are recorded and disclosed; failed service is not added to conforming output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `storage_basis` | reference product | Mass multiplied by time | tday | Obtain net lot mass and timestamps using cp_service; 1 tday = 1 tonne × 1 day; 1 day = 24 hours. Do not use a pallet-day or nominal room capacity without measured conversion. |
| `condition_strata` | reference product | Mass*time | tday | Separate different commodity states, temperature bands and associated-freezing inclusion; preserve the same denominator in activity allocation and collection. |
| `refrigerant_balance` | ammonia_air; r134a_air; co2_air | Mass | kg | Resolve each refrigerant species separately with cp_refrigerant; additions alone do not establish atmospheric release. |
| `asset_basis` | asset normalization denominator | Mass*time | tday | Use documented lifetime service and observed utilization using cp_assets; financial depreciation is not physical service life. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted consignment at the recorded incoming condition; associated blast freezing, when performed, establishes the declared storage state; installed warehouse and refrigeration equipment with disclosed upstream production shares |
| starting_condition_role | foreground_start |
| product_classification_scope | Refrigerated custody service and contract-included internal handling; no goods production or freight transport |
| recursive_input_rule | A separately purchased refrigerated-storage stage enters with its own verified upstream service inventory; identify serial stages and include each once. Internal transfers within the same facility do not create another full storage service. |
| upstream_dataset_requirement | Supply-specific electricity; actual water/material/refrigerant production; wastewater/waste treatment; asset manufacture and end of life where attributed |
| disclosure | Initial condition; service condition strata; internal handling cutoff; occupancy; losses; own/provider split; asset life; omitted upstream data |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_service` | Include attributable refrigeration and room support from acceptance through release; include associated blast freezing as a distinct metered operation with recorded batch mass and incoming/outgoing state. Its energy and support burdens are attributed to the same lot storage service; freezing does not itself create extra storage tonne-days. Independently sold specialized food freezing is excluded. |  |
| `boundary_assets` | Screen building, refrigeration plant, pallets, maintenance and end-of-life burdens; assign actual upstream shares and disclose gaps. Never count an asset component both within an aggregate provider dataset and separately. |  |
| `boundary_losses` | Track missing/spoiled goods by lot and cause; disclose custody loss and its treatment separately. Where upstream replacement production is included in the study boundary, identify its separate product dataset; do not relabel lost goods as an emission or storage output. |  |
| `boundary_species` | Screen every actual refrigerant and release. The example species cards are conditional; add one chemically specific card for each other actual refrigerant and each elementary constituent released from a blend. | epa-refrigerant-balance |

## 6. Process Inventory Structure

The cards are atomic exchanges, conditional on documented presence. Meter all relevant cold-room loads; actual diesel backup, alternative cleaners, other refrigerants, waste products and additional assets require their own specific rows and linked collection records. A missing card is not permission to omit a real exchange. No fuel use, refrigerant release or treatment credit is assumed by default.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cold_store | Receive, refrigerate, maintain and release stored lot | required | Actual contract and room configuration; row conditions apply | foreground_production | per reference flow |

### Process: Receive, refrigerate, maintain and release stored lot (`cold_store`)

#### Inputs

##### Product flows

###### Electricity, alternating current (`electricity`)

Use attributable holding refrigeration, fans, defrosting, lighting, controls and electric internal handling meters; exclude the separately recorded associated-freezing electricity and partition shared loads by measured thermal/service drivers.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Electricity for associated blast freezing (`freezing_electricity`)

Conditional on blast freezing performed with the warehouse service. Use the dedicated freezer meter and actual batch/temperature history; exclude this quantity from the holding-electricity card. Allocate each batch once to its actual stored lots, then to their positive delivered storage service. A standalone specialized freezing contract is outside this PCR.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_freezing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freezing`
- Sources: `un-cpc-refrigerated`

###### Tap water (`water`)

Conditional on actual water-cooled condensation or cleaning; record net fresh supply, not recirculating pump throughput.

- Selected flow: Tap water
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Ammonia, anhydrous (`ammonia_input`)

Only an ammonia circuit: record actual purchases and charge transfers, distinguish initial charge from replacement and supplier-covered equipment charge. Attribute consumed supply after stock/return corrections; purchases retained for a future period are not current consumption.

- Selected flow: Ammonia, anhydrous
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `epa-refrigerant-balance`

###### 1,1,1,2-Tetrafluoroethane, refrigerant R134a (`r134a_input`)

Only a verified R134a circuit; never substitute this pure refrigerant for a blend or another HFC. Correct purchases for stored stock and returns before attributing input consumption.

- Selected flow: 1,1,1,2-Tetrafluoroethane, refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `epa-refrigerant-balance`

###### Carbon dioxide, refrigerant R744 (`co2_input`)

Only an R744 circuit; retain supplier origin and actual charge inventory. Correct purchases for stored stock and returns before attributing input consumption.

- Selected flow: Carbon dioxide, refrigerant R744
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `epa-refrigerant-balance`

###### Polyol ester refrigeration compressor lubricant (`lubricant`)

Conditional on this actual lubricant chemistry; another lubricant is a separate specific exchange.

- Selected flow: Polyol ester refrigeration compressor lubricant
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Sodium hydroxide, aqueous solution, 30 percent by mass (`sodium_hydroxide`)

Conditional on actual cleaning with this concentration; inventory formulation mass and active concentration separately.

- Selected flow: Sodium hydroxide, aqueous solution, 30 percent by mass
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Wooden warehouse pallet (`pallet_share`)

Only owned pallets: attribute production and repair by documented lifetime uses; supplier-included pallets are not charged again.

- Selected flow: Wooden warehouse pallet
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Industrial screw refrigeration compressor (`compressor_share`)

Conditional on installed screw compressor; attribute upstream production using documented lifetime service. Other equipment designs require distinct rows.

- Selected flow: Industrial screw refrigeration compressor
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Insulated refrigerated warehouse building (`building_share`)

Attribute the building upstream dataset once, including its declared insulation boundary; exclude insulation already inside that dataset from separate component accounting.

- Selected flow: Insulated refrigerated warehouse building
- Flow property / unit: Area / m2
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Low-density polyethylene stretch film (`ldpe_film`)

Conditional on actual pallet wrapping provided by this storage service; customer-owned incoming packaging is a custody item, not newly produced film.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

#### Outputs

##### Product flows

###### Refrigerated storage service (`storage_service`)

One conforming service quantity with the same condition stratum and custody boundary as cp_service.

- Selected flow: Refrigerated storage service, declared condition
- Flow property / unit: Mass*time `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` / tday
- Amount rule: 1 tday
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources:

##### Waste flows

###### Cold-store cleaning wastewater (`cleaning_wastewater`)

Record actual wastewater to its named treatment destination; composition and treatment burden are required, with no treatment credit assumed.

- Selected flow: Cold-store cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent polyol ester refrigeration compressor lubricant (`spent_lubricant`)

Conditional on actual lubricant replacement; collect hazardous classification and receiving contractor evidence.

- Selected flow: Spent polyol ester refrigeration compressor lubricant
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded low-density polyethylene stretch film (`waste_ldpe`)

Conditional on discarded film within this service; distinguish recycling, incineration and disposal through separate dataset destinations, not an automatic avoided-production credit.

- Selected flow: Discarded low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Ammonia, to air (`ammonia_air`)

Only a reconciled ammonia loss to air; do not equate charge purchases with leakage.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `epa-refrigerant-balance`

###### 1,1,1,2-Tetrafluoroethane, to air (`r134a_air`)

Only reconciled R134a release to air, recorded as species mass before LCIA characterization.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `epa-refrigerant-balance`

###### Carbon dioxide, refrigerant release to air (`co2_air`)

Only actual R744 loss; disclose fossil/biogenic origin and receiving compartment before selecting its elementary identity.

- Selected flow: Carbon dioxide, refrigerant release to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `epa-refrigerant-balance`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_meters` | Prefer room/circuit submetering and subdivide receipt, storage and dispatch where separately sold. For shared utilities, document measured heat loads and operating drivers; do not allocate refrigerated and ambient activity by revenue or mass alone without causal justification. Reconcile all allocated shares to the facility total. |  |
| `allocation_service` | Within one equivalent condition stratum, divide its attributable inventory by actual delivered tonne-days; allocate common idle-room/support burdens transparently over the same reporting period. Distinct temperature bands require separate measured or engineering-supported shares. |  |
| `allocation_assets` | Use observed asset utilization and supported lifetime delivered service for manufacturing/maintenance/end-of-life shares; preserve a separate denominator for pallet use or building area before mapping its burden to tonne-days. Do not invent lifetimes or copy financial amortization. | fao-cold-operation |
| `allocation_recovery` | Report actual refrigerant transfers to recovery separately in the balance. Recovered stock is not an air emission and is not automatically a negative emission or virgin-production credit. | epa-refrigerant-balance |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | cold_store | storage_service | warehouse log | lot; commodity; state; net mass; arrival/release timestamps; temperature band; exceptions; internal transfers | Reconcile calibrated net-weight records, custody timestamps and monitored condition history; split records when mass or condition changes. | tday | each lot and condition interval | complete declared reporting period | named room and equivalent condition stratum | per reference flow | scale calibration; timestamp audit; temperature logger calibration; contract acceptance |
| cp_freezing | cold_store | freezing_electricity | freezing batch record | batch and lot IDs; net batch mass; incoming/outgoing temperature and state; freezer meter opening/close; freezer duration; allocation share; linked storage lots | Submeter the actual freezing operation, reconcile freezer bills and batch mass to the stored lots, record actual freezing acceptance and prevent overlap with holding refrigeration. Include each associated circuit in the species-specific refrigerant balance and asset ledger. | kWh | each freezing batch | same period and lot chain as cp_service | associated freezer and its actual stored lots | per reference flow | calibrated meter; batch log; temperature record; storage linkage and utility reconciliation |
| cp_utilities | cold_store | electricity; water | meter record | meter ID; opening/closing readings; room; circuit; operating period; share driver; supply specification | Use calibrated submeter differences; reconcile site invoices and shared-load shares; distinguish fresh water from recirculation. | kWh; m3 | meter interval | same period as cp_service | same room/condition stratum | per reference flow | meter calibration; invoices; meter coverage diagram; allocation reconciliation |
| cp_refrigerant | cold_store | ammonia_input; r134a_input; co2_input; ammonia_air; r134a_air; co2_air | mass balance | species; opening/closing cylinder stock; acquisition; offsite transfer; recovery; equipment charge at period start/end; service event; actual discharge compartment | Weigh/verify each species stock and equipment charge; reconcile purchases, contractor additions, recovery and charge changes. Avoid counting a contractor transfer and site-stock withdrawal twice. | kg | each transfer and period opening/close | same period as cp_service | named holding/freezer refrigeration circuit and allocated condition stratum | per reference flow | cylinder weighing; service records; recovery certificates; balance reconciliation |
| cp_materials | cold_store | lubricant; sodium_hydroxide; ldpe_film | material record | chemical/polymer identity; concentration; issued amount; returns; opening/closing stock; lot allocation | Reconcile stores issues, returns and physical consumption by named material; preserve concentration and supplier evidence. | kg | each issue and period balance | same period as cp_service | storage contract operations | per reference flow | stock cards; invoices; formulation specifications |
| cp_assets | cold_store | pallet_share; compressor_share; building_share | asset service record | asset ID; upstream dataset boundary; production burden; observed utilization; installation/retirement; maintenance; lifetime service evidence; allocated share | Link each asset to production and disposal inventories; record actual activity and documented lifetime service; review uncertain life scenarios separately. | item; m2 | asset change and annual reconciliation | documented lifetime and reporting period | owned assets attributable to the room | per reference flow | asset register; maintenance logs; supplier inventories; service-life evidence |
| cp_waste | cold_store | cleaning_wastewater; spent_lubricant; waste_ldpe | waste transfer record | specific waste; amount; receiving process; composition; date; treatment boundary; lot/site share | Meter/measure each waste separately and reconcile transfer notes to actual treatment; include treatment once. | kg; m3 | each transfer | same period as cp_service | storage operations and named receiver | per reference flow | waste manifests; treatment contract; laboratory composition where needed |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_integral | storage_service | S = sum of net lot tonnes multiplied by residence days for each unchanged condition interval; use actual elapsed hours divided by 24. Delivered reference output is 1 tday. | cp_service | delivered service S |  |
| inventory_attribution | all inventory rows | For each exchange, allocate the measured numerator to the declared condition stratum and divide by its positive delivered service S. Preserve numerator units and one common tonne-day denominator. | cp_service; cp_utilities; cp_materials; cp_waste | exchange amount per reference flow |  |
| species_loss | ammonia_air; r134a_air; co2_air | For each species, release = opening stored stock + acquisitions + opening equipment charge - closing stored stock - offsite transfers - closing equipment charge. Include recovered refrigerant in closing stock or offsite transfers once; investigate negative/unreconciled balances instead of clipping them. Divide attributable release by the same S. | cp_refrigerant; cp_service | species mass to air per reference flow | epa-refrigerant-balance |
| asset_attribution | pallet_share; compressor_share; building_share | Attribute the asset production, maintenance and disposal inventory using documented service utilization and lifetime delivered service, then the declared condition share and positive S. State uncertainty and prevent duplicate aggregate/component burdens. | cp_assets; cp_service | asset quantity share per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_conditions | storage_service | Complete lot mass-time and calibrated condition history; declare failures, missing intervals and goods losses without silently creating compliant output. | cp_service |
| dq_closure | all inventory rows | Reconcile purchased utilities, material stock, waste destination, equipment shares and delivered service over matching periods; no assumed default ranges. | cp_utilities; cp_materials; cp_assets; cp_waste |
| dq_refrigerant | ammonia_air; r134a_air; co2_air | Balance each actual species with charge and recovery changes; distinguish zero observed release from missing data; blend components need separate elementary identities. | cp_refrigerant; epa-refrigerant-balance |
| dq_identity | all inventory rows | Resolve flow/property/unit-group identities before database-linked use; a semantic atomic label does not establish a verified UUID. | supplier specifications; direct identity verification |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_reference` | Require one output linked as storage_service, 1 tday, positive delivered service and all condition/custody qualifiers; tonne-kilometres, pallet counts and nominal capacity cannot substitute for measured tonne-days. |  |
| `validate_balance` | Require each actual chemical, material, waste and air species as an independent row; reconcile refrigerant stock, equipment charge, acquisitions, recovery and offsite transfer before accepting release. | epa-refrigerant-balance |
| `validate_period` | Require matching activity/utility periods, shares summing to measured totals, supported lifetime asset allocation and explicit upstream gaps; a meter-only inventory cannot claim complete cradle-to-gate coverage. |  |
| `validate_double_count` | Reject duplicate initial cooling, external handling, customer packaging, supplier assets or freight burdens already in another included dataset. |  |
| `validate_unit_export` | Treat tday only as the local display alias of the formal Mass*time unit t*d: 1 tday = 1 t*d. Export the formal unit t*d, retaining the same physical quantity and reference denominator. If a receiving system requires the unit-group reference kg*a, apply the verified unit-group conversion once and retain its factor and provenance; never relabel an unchanged number as kg*a or normalize an already per-reference quantity again. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unit-process refrigerated-storage service inventory |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Equivalent commodity state, temperature/humidity band and custody/asset boundaries with disclosed allocation and period |
| excluded_use | Goods production; freight transport; initial freezing sold independently; universal cold-chain factor; direct use under incompatible temperature or occupancy conditions |
| required_metadata | All reference qualifiers; delivered S; meters and shares; refrigerant identities and balances; lifetime assets; waste destinations; collection/calculation provenance |
| required_quality_disclosure | UUID gaps; upstream coverage; temporal/condition completeness; exceptions and losses; uncertainty of allocation and asset service life |
| update_trigger | Change in room/commodity state, temperature band, refrigerant, electricity supply, occupancy, asset configuration, contract boundary or material data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-refrigerated | official_guidance | UNSD CPC 3.0 code 67210 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67210 | Associated blast freezing is included; independently contracted specialized food freezing is outside the subclass. Classification support only; no energy or temperature factor. |
| fao-cold-operation | official_guidance | FAO, Manual on meat cold store operation and management, Costs and investment / Storage and handling administration. https://www.fao.org/4/t0098e/t0098e06.htm | Cold-store activity and energy records; distinction between financial depreciation and working life. Meat context; no numeric cost, lifetime or energy factor adopted. |
| fao-cold-equipment | official_guidance | FAO, Manual on meat cold store operation and management, Refrigeration equipment. https://www.fao.org/4/t0098e/T0098E04.htm | Temperature, humidity and air-circulation monitoring relevance; no meat-specific temperature imposed on other goods. |
| epa-refrigerant-balance | official_guidance | US EPA, Direct Fugitive Emissions from Refrigeration, Air Conditioning, Fire Suppression, and Industrial Gases, section 2.3, equations 4–5. https://www.epa.gov/sites/default/files/2020-12/documents/fugitiveemissions.pdf | Species-specific refrigerant material-balance logic; not a product LCA boundary, leakage factor, GWP or jurisdictional applicability claim. |
