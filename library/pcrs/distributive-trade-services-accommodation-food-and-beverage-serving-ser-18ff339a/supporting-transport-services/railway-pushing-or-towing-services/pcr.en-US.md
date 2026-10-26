---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.railway-pushing-or-towing-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Railway pushing or towing services

## 1. Scope and Applicability

A contracted railway pushing or towing operation on identified rail vehicles between declared task endpoints, including terminal yards, industrial sidings and similar rail locations. Cover actual shunting, positioning and assembly/disassembly movements where the delivered function is pushing/towing support, with coupling, braking checks and release only as part of that task. Record whether the operation is a push, tow, positioning move, yard shunt or a defined sequence; do not reduce the leaf to one engine model or one cargo subtype. The representative case is a completed qualified yard move; other pushing/towing configurations retain their own mandatory task extent and measured inventory. [Source: `un-cpc-67310`]

Exclude sale of a line-haul passenger/freight transport service, road towing, cargo loading/unloading, standalone infrastructure/traffic management and rail-vehicle manufacture sold as a product. A journey whose actual service is transporting cargo between origin and commercial destination is assessed under railway transport rather than relabelled as support. A switcher can perform train formation while line-haul engines move cargo long distances; attributable idle and auxiliary loads must remain in the real operation boundary. [Source: `epa-rail-facility`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.railway-pushing-or-towing-services |
| classification_refs | CPC 3.0 67310 |
| covered_products | Railway pushing/towing support with declared vehicles, endpoints, movement sequence and completion criterion; actual traction route |
| excluded_products | Line-haul transport sold as transport; cargo handling; road towing; independent infrastructure management; vehicle manufacture |
| representative_product | One completed railway pushing/towing task for an identified consist and declared endpoints |
| production_route | Dispatch and approach → couple/check → actual push/tow movements → secure and release → attributable return/standby |
| market_state | Accepted support operation under task order, with measured extent and completion evidence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Push or tow identified railway vehicles to the declared task endpoint |
| How much | One completed task; number of vehicles, net/gross mass, route distance, submoves and positioning extent declared |
| How well | Task-order vehicle integrity, destination, coupling/brake and safe-release acceptance criteria; no invented universal operating specification |
| How long or cycle | Complete task cycle including attributable approach, retries, return, idle and auxiliary operation |
| reference_flow_link | `pushing_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed qualified railway pushing or towing task |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | task/order ID; pushing/towing/shunting subtype; start and end locations; track segments; rail gauge/gradient where relevant; consist and vehicle IDs; wagon count; tare/cargo/gross mass; coupling/brake condition; movement distance and direction; number of submoves; traction source; engine/locomotive class; loaded and empty positioning; operating/idle/auxiliary time; reporting period; completion gate; owned/provider coverage |

item is the singular text alias of the group's formal unit Item(s); export Item(s). A task is the explicitly specified support operation, not an arbitrary time slice, each wagon, each push, or a tonne-kilometre. Split independently delivered tasks but do not count one task and its constituent moves as multiple full outputs. Pool only equivalent task extent/configuration; a declared range of task characteristics must retain measured activity distributions. Additional mass/distance/time observations characterize and allocate the task; they do not establish equivalence to freight transport. All inventory quantities refer to one accepted task with the same declared boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `task_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count completed task orders using cp_task, retaining endpoints and constituent moves. Failed attempts add burdens, not extra conforming outputs. |
| `task_extent` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Record actual consist mass, vehicle count, distance, gradients and operating/idle time; do not impose an average wagon mass or convert tonnes to task count without measured task records. |
| `traction_route` | diesel; traction_electricity | Mass; Energy | kg; kWh | Separate diesel fuel from external electricity; include auxiliary engines and charging loss once, with supply voltage and regeneration disposition declared. |
| `exhaust_species` | no_air; no2_air; pm25_air | Mass | kg | Disclose pollutant convention; NOx-as-NO2 and total PM are not automatically identical to individual species or size fractions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified task order and existing vehicles at declared position; installed locomotive and track with disclosed upstream shares |
| starting_condition_role | foreground_start |
| product_classification_scope | Railway pushing/towing support with actual task sequence; no automatic line-haul freight boundary |
| recursive_input_rule | Purchased pushing/towing by another provider enters with an identified upstream service and task overlap check; do not count its aggregate service and its diesel/electricity again. |
| upstream_dataset_requirement | Actual fuel/electricity/material supply, locomotive/track production shares, maintenance and waste treatment; disclose omissions |
| disclosure | Task endpoints; approach/return; idle and shared standby; traction and auxiliary supply; asset life; provider coverage; upstream gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_task` | Include dispatch/approach, coupling/checks, actual movement, retries, release and attributable return/idle/auxiliary operation within the contracted support cycle. Preserve task endpoint and line-haul separation. | un-cpc-67310; epa-rail-facility |
| `boundary_assets` | Screen locomotive, battery, track, switches, contact supply, maintenance and retirement burdens. Record each actual asset separately where not covered by an aggregate supplier inventory; no double counting of included components. |  |
| `boundary_actual` | Cards are conditional specific exchanges. Add one physically/chemically specific row for every present alternative fuel, coolant, material, replacement battery, waste or pollutant; absence of a card never implies zero. |  |
| `boundary_noise` | Record noise, vibration, spills and wear exposure screening with task/site conditions. Where inventory/impact methods require quantified releases, provide a validated quantity and appropriate flow identity; qualitative screening alone is not impact quantification. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| push_tow | Prepare, push or tow, and release railway vehicles | required | Actual contracted operation; individual route conditions apply | foreground_production | per reference flow |

### Process: Prepare, push or tow, and release railway vehicles (`push_tow`)

#### Inputs

##### Product flows

###### Diesel fuel, petroleum-derived (`diesel`)

Conditional on diesel traction or an auxiliary engine; include approach, pushing/towing, retries, return positioning and attributable idling. Identify grade, bio-content and engine; another fuel requires its own row.

- Selected flow: Diesel fuel, petroleum-derived
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Electricity, alternating current (`traction_electricity`)

Meter actual traction supply, battery charging losses, shore support and yard support separately before attribution; never equate a diesel-electric traction motor with purchased grid power.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Mineral lubricating oil (`lubricant`)

Conditional on actual oil servicing; reconcile stock, returned oil and locomotive allocation. Another chemistry needs a separate row.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Ethylene glycol coolant, aqueous solution, 50 percent by mass (`coolant`)

Conditional on this actual coolant formulation; preserve concentration and net additions after recovered liquid.

- Selected flow: Ethylene glycol coolant, aqueous solution, 50 percent by mass
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Urea solution, 32.5 percent by mass (`urea_solution`)

Conditional on an installed SCR system using this formulation; no assumption that every locomotive has SCR.

- Selected flow: Urea solution, 32.5 percent by mass
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Tap water (`water`)

Only actual cleaning or maintenance fresh water; separate from customer cargo and recirculated coolant.

- Selected flow: Tap water
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Silica sand, traction sanding grade (`sand`)

Conditional on actual adhesion sanding; record issued mass and track-side destination; specific constituents released require separate elementary rows.

- Selected flow: Silica sand, traction sanding grade
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Diesel-electric shunting locomotive (`diesel_locomotive`)

Conditional on this actual locomotive; share manufacturing, overhaul and retirement by evidenced lifetime service use. Exclude energy already included by a supplier aggregate service.

- Selected flow: Diesel-electric shunting locomotive
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Battery-electric shunting locomotive (`electric_locomotive`)

Conditional on this actual locomotive; disclose battery coverage, replacement and lifetime evidence; do not add an initial battery twice within the locomotive dataset.

- Selected flow: Battery-electric shunting locomotive
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Railway yard track (`track_share`)

Attribute manufacturing, installation and maintenance of the actual used track segment by documented service-life utilization; preserve rails/sleepers/ballast boundary of the upstream dataset.

- Selected flow: Railway yard track
- Flow property / unit: Length / m
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

#### Outputs

##### Product flows

###### Completed pushing/towing task (`pushing_service`)

Output is accepted under the same task-order endpoints and complete cycle recorded by cp_task.

- Selected flow: Completed qualified railway pushing or towing task
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_task`
- Sources:

##### Waste flows

###### Spent mineral lubricating oil (`waste_oil`)

Record actual collected waste oil and licensed treatment destination; no automatic recycling credit.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent ethylene glycol coolant (`waste_coolant`)

Conditional on coolant change or spill collection; identify composition and recovery/treatment boundary.

- Selected flow: Spent ethylene glycol coolant
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Locomotive cleaning wastewater (`wastewater`)

Conditional on actual washing; meter discharge and identify treatment; dissolved pollutants are not automatically air emissions.

- Selected flow: Locomotive cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent cellulose lubricating-oil filter (`waste_filter`)

Conditional on this actual filter design; separate retained oil already counted as waste_oil; another filter composition requires its own row.

- Selected flow: Spent cellulose lubricating-oil filter
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

###### Carbon dioxide, fossil, to air (`co2_air`)

Direct fossil fuel carbon release; use measured fuel carbon/oxidation evidence or actual exhaust measurements; supplier grid CO2 is upstream, not this row.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide, to air (`co_air`)

Measure or derive using a justified engine/duty-specific factor with explicit units; no generic standard limit as observed discharge.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen monoxide, to air (`no_air`)

Species-resolved exhaust release only; a NOx-as-NO2 total cannot be copied here without measured or justified speciation.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide, to air (`no2_air`)

Record separately from nitrogen monoxide; disclose analytical convention and any speciation uncertainty.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Sulfur dioxide, to air (`so2_air`)

Use actual sulfur content and supported oxidation or exhaust measurements; no assumed sulfur grade.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Particulate matter, aerodynamic diameter below 2.5 micrometres, to air (`pm25_air`)

Collect size-resolved combustion particulate mass; distinguish brake/rail wear and total PM so overlapping fractions are not counted twice.

- Selected flow: Particulate matter, aerodynamic diameter below 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_subdivision` | Prefer task-level fuel/energy metering and subdivide traction, approach, idle and auxiliary operation. Shared switcher operation is assigned using measured activity/load and documented causal drivers, not cargo revenue. |  |
| `allocate_complete_cycle` | Include attributable failed moves, return positioning and common standby in the supported service population. Reconcile task shares to the same fleet/site totals; idle time is not burden-free. | epa-rail-facility |
| `allocate_assets` | Attribute locomotive, track and replacement burdens using documented lifetime utilization and the task use share. Identify track maintenance and locomotive overhaul boundaries, with no assumed service life or automatic recycling benefit. |  |
| `allocate_regeneration` | Record imported electricity and returned energy with separate meter evidence and receiving system. Do not net unverified regeneration or count electricity generated internally from diesel as an additional purchased input. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | push_tow | pushing_service | task event log | order; subtype; vehicle IDs; endpoints; submoves; tare/cargo/gross mass; distance; gradient; loaded/empty approach; start/finish; failures; acceptance | Reconcile signed task completion, consist manifest, dispatch log, calibrated mass evidence and odometry/GNSS; retain each constituent movement once. | item | each task | complete declared operating period | identified yard/route and task configuration | per reference flow | signed completion; task log; scale evidence; odometry calibration |
| cp_energy | push_tow | diesel; traction_electricity | meter and fuel balance | locomotive/engine; fuel type; tank opening/closing; fuel deliveries; electricity import/export; traction/idle/auxiliary time; supply; task share | Use calibrated fuel-flow/tank balance and electrical meters including charging loss; reconcile traction states, auxiliary consumption and facility totals. | kg; kWh | meter interval and task | same period as cp_task | actual locomotive/circuit and task cycle | per reference flow | meter calibration; fuel stock reconciliation; electricity invoices; state logs |
| cp_material | push_tow | lubricant; coolant; urea_solution; water; sand | material balance | specific product; concentration; issue/return; opening/closing stock; service event; task share | Measure net material use, preserve formulation, and attribute maintenance/cleaning to actual operating activity. | kg; m3 | each issue/service event | same period as cp_task | assigned locomotive and operation | per reference flow | stock cards; invoices; supplier formulation; maintenance logs |
| cp_asset | push_tow | diesel_locomotive; electric_locomotive; track_share | asset service record | asset ID; upstream boundary; lifetime evidence; utilization; task activity; maintenance; replacement; retirement | Link specific assets to upstream production and end-of-life inventories; document physical lifetime and actual utilization; prevent aggregate/component duplication. | item; m | asset event and period reconciliation | evidenced life and operating period | actual locomotive and used track segment | per reference flow | asset register; maintenance/replacement records; supplier inventories |
| cp_waste | push_tow | waste_oil; waste_coolant; wastewater; waste_filter | waste transfer log | specific waste; amount; composition; destination; treatment boundary; service period; share | Measure each waste, reconcile transfer documentation and treatment coverage; distinguish retained fluids from filter material. | kg; m3 | each disposal event | same period as cp_task | assigned locomotive and actual receiver | per reference flow | waste manifest; receiver contract; composition evidence |
| cp_emission | push_tow | co2_air; co_air; no_air; no2_air; so2_air; pm25_air | exhaust measurement or documented calculation | engine; fuel carbon/sulfur; measured exhaust; species; size fraction; duty/load; time; factor reference/version/units if used; task share | Use actual exhaust measurements or explicitly justified engine/fuel/duty factors; resolve species and overlapping fractions; never use legal limits as measured emissions. | kg | duty interval and task attribution | same period as cp_task | named engine/task and receiving air compartment | per reference flow | measurement report; fuel assay; factor applicability; unit and load reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| task_denominator | pushing_service | Count completed independently specified task orders N for the declared equivalent configuration; N must be positive. Constituent pushes and wagons are task descriptors, not additional complete outputs. | cp_task | completed tasks N |  |
| exchange_attribution | all inventory rows | Attribute each measured exchange numerator to the same complete task boundary, then divide by positive N. Retain diesel/electric routes, empty approach and idle records; heterogeneous task configurations need distinct datasets or explicit activity distributions. | cp_task; cp_energy; cp_material; cp_waste | exchange amount per reference flow |  |
| emission_attribution | co2_air; co_air; no_air; no2_air; so2_air; pm25_air | Resolve actual species mass for each duty interval from measurement or the explicitly sourced factor and matching measured activity; sum only non-overlapping intervals and divide attributable amount by N. Do not invent factors or speciation shares. | cp_task; cp_emission; cp_energy | species mass per reference flow |  |
| asset_attribution | diesel_locomotive; electric_locomotive; track_share | Assign upstream asset production, maintenance and retirement by documented lifetime utilization and task share, with separate component boundaries; divide the attributed inventory by N. | cp_task; cp_asset | asset share per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_task | pushing_service | Complete endpoints, consist, masses, distance, task type and acceptance; no implicit tonne-kilometre service equivalence. | cp_task |
| dq_activity | all inventory rows | Time and fleet coverage match task denominator; disclose unmetered idle, shared standby, failed operations and uncertainty. | cp_task; cp_energy |
| dq_species | co2_air; co_air; no_air; no2_air; so2_air; pm25_air | Species/fraction identity and factor units applicable to real engine and duty; unresolved speciation remains a gap, not zero release. | cp_emission |
| dq_upstream | diesel_locomotive; electric_locomotive; track_share | Supported lifetime asset utilization and no duplicated supplier components; identify missing upstream datasets. | cp_asset |
| dq_identity | all inventory rows | Verify each actual flow UUID before linked data use; semantic candidates and archived support identities do not establish a newly verified flow. | direct identity verification |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_task` | Require unique output pushing_service at 1 item, complete mandatory qualifiers and positive completed task count. Reject line-haul transport relabelled as support and double counting of whole tasks plus their submoves. | un-cpc-67310 |
| `validate_energy` | Require fuel/electricity balances, route-specific conditions and approach/return/idle inclusion with shares matching fleet totals; reject grid energy invented for diesel-electric transmission. |  |
| `validate_species` | Require atomic inputs, wastes and elementary species; reject NOx total substituted as NO/NO2 or total PM duplicated with fine fractions; preserve actual data gaps. |  |
| `validate_boundary` | Disclose locomotive/track/maintenance/waste-treatment and provider coverage; partial foreground metering cannot claim complete upstream coverage or methodology approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unit-process railway pushing/towing support service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Equivalent specified support task with disclosed vehicle configuration, extent, traction route, complete cycle and asset boundary |
| excluded_use | Universal per-wagon or tonne-kilometre freight factor; arbitrary rail journey; different task extent without activity evidence |
| required_metadata | All task qualifiers; N and event distribution; traction/idle meters; engine/species evidence; upstream assets; allocation and receiver identities |
| required_quality_disclosure | Flow UUID gaps; missing exhaust/speciation data; metering coverage; shared idle; physical lifetime uncertainty; upstream omissions |
| update_trigger | Change in operation subtype, consist/extent, traction/engine, emissions controls, power supply, asset life, task boundary or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-67310 | official_guidance | UNSD, CPC Version 3.0, subclass 67310 Railway pushing or towing services. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67310 | Classification scope and supporting-service identity; classification does not supply a universal LCA factor. |
| epa-rail-facility | official_guidance | US EPA, Rail Facility Best Practices to Improve Air Quality. https://www.epa.gov/ports-initiative/rail-facility-best-practices-improve-air-quality | Switcher versus line-haul distinction and screening of idle/auxiliary duty; no numeric consumption/emission factor, regulatory limit or technology performance adopted. |
