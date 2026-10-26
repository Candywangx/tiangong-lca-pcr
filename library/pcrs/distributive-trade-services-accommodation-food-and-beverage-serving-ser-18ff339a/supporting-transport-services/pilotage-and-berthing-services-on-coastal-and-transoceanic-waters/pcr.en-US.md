---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.pilotage-and-berthing-services-on-coastal-and-transoceanic-waters
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Pilotage and berthing services on coastal and transoceanic waters

## 1. Scope and Applicability

Pilotage on coastal/transoceanic waters, including actual pilot-vessel support for harbour entry/exit or navigation around hazards, and tug assistance connected with docking/undocking vessels of all types in those waters. Declare pilotage-only, berthing-tug-only or an actual combined contract as a distinct task subtype. None is automatically one equivalent unit of the others. Pilot-vessel support is conditional on actual use, not mandatory simply because a pilot is engaged. [Source: `un-cpc-67521`; `imo-pilotage`]

Exclude inland-water equivalents (67522), coastal/open-sea transport towing or pushing (65219), salvage/refloating, cargo handling, storage and separately sold general port/waterway operation. The assisted vessel, its cargo and its own propulsion/auxiliary fuel belong to the customer shipping component, not the pilotage/tug company inventory. A combined shipping study may add that component explicitly once. Harbour location alone does not turn every tow into docking assistance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.pilotage-and-berthing-services-on-coastal-and-transoceanic-waters |
| classification_refs | CPC3.0 67521 |
| covered_products | Coastal/transoceanic pilotage and associated pilot vessels; docking/undocking tug assistance; distinctly qualified real combined tasks |
| excluded_products | Inland pilotage/berthing; transport towing; salvage; ship/cargo transport; cargo handling; standalone port operation |
| representative_product | One completed declared coastal pilotage or berthing-assistance task |
| production_route | Accept task/plan → actual pilot transfer/pilotage and/or berthing tug work → release/handoff → attributable return and standby |
| market_state | Delivered named marine assistance task with actual geographic and service interfaces |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Perform the declared pilotage, docking/undocking tug, or actual integrated assistance scope |
| How much | One accepted task for one identified assisted vessel and declared service team/extent |
| How well | Actual passage/berth task plan, ship limitations, pilot/master/tug communications and completion/handoff criteria; no universal tug capacity or weather limit assumed |
| How long or cycle | Complete contracted service cycle, including actual transfers, mobilization, tow assist, waiting/retries and return |
| reference_flow_link | `marine_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed qualified coastal pilotage or berthing-assistance task |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | task ID; pilotage/tug/combined subtype; coastal/ocean geographic limits and handoff; assisted vessel identity/type/GT/dimensions/draught/load condition; initial/final water area/berth; pilot transfer arrangement; actual route/distance/time; tug count/type/power/bollard pull; main/auxiliary/idle modes; wind/current/tide/visibility; defects/ship propulsion status; waiting/retries/return; completion; owned/provider coverage |

item is the singular alias of formal Item(s); export Item(s). Count the exact accepted subtype once, not each pilot transfer, tug or push. A pilotage-only task, one tug contribution and an integrated pilotage-plus-multiple-tug contract have different declared scopes. Keep separate datasets or independently justified activity distributions; no universal conversion based on GT, cargo mass, tariff or vessel call count. GT is vessel gross tonnage, not measured mass; net/gross cargo and displacement cannot be inferred from it.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `task_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_task binds actual subtype, service team and geographic endpoints; failed attempts add burden, not accepted output. |
| `craft_activity` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Record each service craft main/auxiliary engine, actual power/load/duration and travel, plus weather/tide and assisted ship condition. Installed power is not delivered energy or fuel. |
| `fuel_species` | pilot_mgo; tug_mgo; tug_lng; methane_air; so2_air | Mass | kg | Preserve actual fuel composition/carbon/sulfur and LNG loss evidence; no fuel-to-emission default based on tariff or vessel tonnage. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified accepted marine task with current vessel/berth state and available service craft; infrastructure/asset production shares disclosed |
| starting_condition_role | foreground_start |
| product_classification_scope | Coastal/transoceanic pilotage and docking/undocking tug assistance; separate inland and transport tow functions |
| recursive_input_rule | Purchased pilot transfer/pilotage/tug contribution enters once with exact task interface; do not duplicate aggregate provider fuel/assets or its parent integrated task |
| upstream_dataset_requirement | Actual service fuel/power/material production; craft/line/fender manufacture and maintenance; treatment; attributable shore/base infrastructure |
| disclosure | Subtypes and interfaces; craft roster and modes; approach/return/standby; assisted ship exclusions; supplier/asset boundaries; upstream gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_pilot` | Include actual passage preparation, pilot travel/transfer, onboard pilot activity and task communication; retain actual pilot-vessel energy and transfers where used. | imo-pilotage |
| `boundary_tug` | Include assigned tug mobilization, making fast, ship-assist manoeuvre, let-go, waiting/retries and return; identify craft and actual task conditions rather than assume a fixed tug-hour. | mca-port-towage |
| `boundary_ship` | Exclude assisted ship propulsion, hotel load, cargo and whole-voyage burdens from the service-craft module; a larger shipping system includes customer ship and assistance modules once. |  |
| `boundary_actual` | Screen actual craft assets/overhaul, ropes/fenders, battery replacement, bilge/sewage, cooling seawater/heat, coating/antifouling loss and spills. Add each actual exchange independently; card absence does not establish zero. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| task | Plan, coordinate, support and complete declared marine task | required | All declared subtypes; record actual common support and whole-task exchange accounting | foreground_production | per reference flow |
| pilotage | Conduct actual pilotage and pilot transfer | conditional | Actual contracted pilotage/pilot-transfer component only | foreground_production | per reference flow |
| berthing | Provide docking or undocking tug assistance | conditional | Actual docking/undocking tug component only; not a transport tow | foreground_production | per reference flow |

### Process: Conduct actual pilotage and pilot transfer (`pilotage`)

#### Inputs

##### Product flows

###### Marine gas oil, petroleum-derived (`pilot_mgo`)

Conditional pilot launch main/auxiliary engines: actual mobilization, pilot transfer, waiting and return fuel; no customer vessel propulsion.

- Selected flow: Marine gas oil, petroleum-derived
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Pilot transfer launch (`pilot_launch`)

Conditional on actual launch use; allocate production, overhaul and retirement by evidenced life and actual utilization, not vessel visits alone.

- Selected flow: Pilot transfer launch
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

### Process: Provide docking or undocking tug assistance (`berthing`)

#### Inputs

##### Product flows

###### Marine gas oil, petroleum-derived (`tug_mgo`)

Only assigned berthing tug main/auxiliary engines; retain push/pull, transit, loiter, retries and return activity.

- Selected flow: Marine gas oil, petroleum-derived
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Liquefied natural gas, marine fuel (`tug_lng`)

Only an actual LNG tug; preserve composition and measured engine/fuel-system methane loss. Do not assume LNG propulsion.

- Selected flow: Liquefied natural gas, marine fuel
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Steel wire towing rope (`steel_rope`)

Conditional on actual towing line type; attribute documented replacement/lifetime use and retain discarded line records.

- Selected flow: Steel wire towing rope
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### High-modulus polyethylene towing rope (`hmpe_rope`)

Conditional on actual HMPE line; not interchangeable with steel or another fibre rope.

- Selected flow: High-modulus polyethylene towing rope
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Rubber harbour-tug fender (`fender`)

Only an actual replacement fender not already inside tug lifetime inventory; identify composition and supported service use.

- Selected flow: Rubber harbour-tug fender
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Harbour-assist tugboat (`tug_asset`)

Actual specified tug, propulsion, bollard pull and configuration; allocate hull/engine/battery coverage once and state replacement boundaries.

- Selected flow: Harbour-assist tugboat
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

### Process: Plan, coordinate, support and complete declared marine task (`task`)

#### Inputs

##### Product flows

###### Electricity, alternating current (`electricity`)

Measure actual shore support and service-craft charging/shore power by craft and task, including losses; exclude customer ship electricity.

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

###### Mineral marine engine lubricating oil (`engine_oil`)

Only actual service-craft engine oil; reconcile top-up, stock and maintenance coverage.

- Selected flow: Mineral marine engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Mineral hydraulic oil (`hydraulic_oil`)

Only actual service winch/steering hydraulic use; another oil chemistry requires an independent row.

- Selected flow: Mineral hydraulic oil
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

Actual service-craft/shore cleaning and crew fresh water only; natural cooling seawater requires a separate elementary withdrawal row.

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

#### Outputs

##### Product flows

###### Completed declared marine assistance task (`marine_service`)

One task accepted at its specified coastal handoff. Whole-task waste/emission accounting below retains the actual source craft/engine and does not imply releases occur only at completion.

- Selected flow: Completed qualified coastal pilotage or berthing-assistance task
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

###### Spent mineral marine engine lubricating oil (`spent_engine_oil`)

Actual captured engine oil, with receiver and treatment; do not duplicate oil in bilgewater.

- Selected flow: Spent mineral marine engine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral hydraulic oil (`spent_hydraulic_oil`)

Actual captured hydraulic oil; maintain a distinct material/receiver balance.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded steel wire towing rope (`waste_steel_rope`)

Actual retired line to specified recycler/disposal; no automatic avoided-steel credit.

- Selected flow: Discarded steel wire towing rope
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded high-modulus polyethylene towing rope (`waste_hmpe`)

Actual retired polymer line; retain receiver and treatment boundary.

- Selected flow: Discarded high-modulus polyethylene towing rope
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Oily bilgewater (`bilgewater`)

Actual bilgewater sent to reception/treatment, with oil content and separation boundary; not automatically an ocean oil release.

- Selected flow: Oily bilgewater
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Service-craft sanitary sewage (`sewage`)

Conditional crew sanitary sewage; record actual reception/treatment or actual discharged constituent species separately.

- Selected flow: Service-craft sanitary sewage
- Flow property / unit: Volume / m3
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

Only service-craft fossil combustion; derive from actual fuel carbon/oxidation or exhaust, not ship gross tonnage.

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

Measured or explicitly justified actual engine/fuel/duty emission; no generic legal-limit substitute.

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

Species-resolved release; NOx-as-NO2 totals require justified speciation.

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

Record separately from NO with actual craft/engine source.

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

Use measured actual fuel sulfur and supported oxidation or exhaust analysis; no assumed sulfur grade.

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

Actual fine combustion particulate; avoid double count with total PM and other overlapping fractions.

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

###### Methane, fossil, to air (`methane_air`)

Conditional actual LNG-engine slip or service-craft fuel-system leakage; measure or justify explicitly, never equate all LNG use to release.

- Selected flow: Methane, fossil, to air
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
| `allocate_subtype` | Separate pilotage-only, tug-only and integrated contract output. In an integrated task allocate actual craft activity once; do not add full pilot and tug tasks as extra complete outputs. |  |
| `allocate_craft` | Prefer craft/engine/time fuel and energy meters; shared standby, empty repositioning, pilot transfers and retries use documented actual task activity and must reconcile to fleet totals. No tariff/GT proxy for fuel. |  |
| `allocate_assets` | Allocate craft production, overhaul, batteries, ropes and fenders by supported physical service life and actual utilization; distinguish replacement material from quantities embedded in an all-life supplier dataset. |  |
| `allocate_wastes` | Keep collected bilgewater, recovered oil and actual receiving-environment discharge distinct; no automatic recycling credit or bilgewater-to-ocean-emission equivalence. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | task | marine_service | foreground record | subtype; job ID; vessel/GT/dimensions/draught/condition; water limits; berth/endpoints; pilot/tug interfaces; roster; distance/time; weather/tide; attempts; acceptance | Reconcile job order, pilot/master/tug records, actual craft track and signed completion; split inland or transport-tow stages before counting. | item | each task | same task/reporting period | actual assigned craft and service boundary | per reference flow | job and track records; interface/completion evidence |
| cp_energy | task | electricity; pilot_mgo; tug_mgo; tug_lng | foreground record | craft/engine; fuel stock/flow; fuel carbon/sulfur/composition; main/auxiliary/idle; actual load/time; charging; return; share | Use actual fuel balances/meters and duty logs; measure shore/charging loss, distinguish pilot launch/tugs and exclude customer ship consumption. | kg; kWh | duty interval and task | same task/reporting period | actual assigned craft and service boundary | per reference flow | calibration; bunker balance; fuel assay; engine/charging logs |
| cp_material | task | engine_oil; hydraulic_oil; water; steel_rope; hmpe_rope; fender | foreground record | specific material; stock/issue/return; net consumption; replacement; task/craft share; maintenance coverage | Measure separate actual materials and net water intake, retain line/fender service-life evidence and exclude supplier-embedded replacements. | kg; m3 | issue/replacement and period | same task/reporting period | actual assigned craft and service boundary | per reference flow | stock cards; supplier specifications; maintenance logs |
| cp_asset | task | pilot_launch; tug_asset | foreground record | craft ID/type/propulsion; hull/engine/battery coverage; manufacture; overhaul; retirement; lifetime/use evidence | Bind actual craft to upstream inventories, document physical life and actual task utilization; avoid aggregate/component duplication. | item | asset change and period | same task/reporting period | actual assigned craft and service boundary | per reference flow | craft register; maintenance/use records; supplier boundary |
| cp_waste | task | spent_engine_oil; spent_hydraulic_oil; waste_steel_rope; waste_hmpe; bilgewater; sewage | foreground record | specific waste; craft; amount; oil/water composition; separation; receiver/treatment; task share | Measure each waste separately; reconcile reception and treatment records, separating recovered oil from the same bilgewater mass. | kg; m3 | each transfer | same task/reporting period | actual assigned craft and service boundary | per reference flow | reception receipts; waste manifests; composition |
| cp_emission | task | co2_air; co_air; no_air; no2_air; so2_air; pm25_air; methane_air | foreground record | craft/engine; fuel; actual mode/load/time; species/fraction; exhaust test or factor source/version/unit; methane loss; allocation | Measure exhaust/fuel-system releases or use explicitly justified engine/fuel/duty factors; resolve species and overlapping fractions; preserve unmeasured slip as gap. | kg | duty interval and task | same task/reporting period | actual assigned craft and service boundary | per reference flow | fuel/exhaust measurements; factor applicability; source and unit audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| task_denominator | marine_service | N = accepted completed tasks of the exact subtype, vessel-condition and service-team scope; require N positive. Components are not additional whole-task outputs. | cp_task | N |  |
| exchange_allocation | all inventory rows | Assign each measured exchange to actual craft/task activity and shared duty using documented physical drivers, then divide by N; retain all actual required/conditional components. | cp_task; cp_energy; cp_material; cp_waste | exchange per reference flow |  |
| asset_allocation | pilot_launch; tug_asset | Attribute manufacturing, overhaul and retirement by supported lifetime utilization and actual task share, then divide by N, retaining battery/component boundaries and uncertainty. | cp_asset; cp_task | craft share per reference flow |  |
| emission_allocation | co2_air; co_air; no_air; no2_air; so2_air; pm25_air; methane_air | Resolve actual species mass for each main/auxiliary/duty interval from measurement or explicitly justified compatible factors, sum non-overlapping intervals, allocate actual craft/task share and divide by N. | cp_emission; cp_energy; cp_task | species per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | marine_service | Subtype, water category, geographic handoffs, vessel/GT/draught and actual service team complete; no pilot/tug/combined equivalence by count alone. | cp_task |
| dq_activity | all inventory rows | Actual craft engines/modes, standby/retries/return and matching fuel/electricity periods; fleet shares reconcile without customer ship consumption. | cp_energy; cp_task |
| dq_species | co2_air; no_air; no2_air; so2_air; pm25_air; methane_air | Fuel sulfur/carbon and species/duty evidence; missing factor or methane-slip data remain explicit gaps, not zero. | cp_emission |
| dq_identity | all inventory rows | Verify actual flow identities before linked data use; support UUIDs are historical archive evidence, not fresh flow confirmation. | direct identity verification |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_scope` | Require coastal/ocean pilotage or docking-related tug function with explicit task interfaces; reject inland scope and transport towing/pushing under 65219. | un-cpc-67521 |
| `validate_reference` | Require unique marine_service at 1 item and positive completed task N; every subtype/team/vessel/geographic qualifier is mandatory, with no duplicate component/whole outputs. |  |
| `validate_balance` | Require individual fuel, material, waste and species rows with craft/engine evidence and reconciled fleet shares; reject client-vessel fuel in the service-craft module and supplier-covered duplicates. |  |
| `validate_quality` | State actual asset/maintenance, bilge/reception, cooling/coating/spill screening and upstream gaps; target check pass is not maritime safety/legal approval or complete shipping LCA. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unit-process coastal/ocean pilotage or berthing-assistance task |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Equivalent declared task subtype, vessel and water conditions, actual team and craft/asset boundaries |
| excluded_use | Inland pilotage; transport tow; whole-voyage freight; generic per-GT port-call factor; unqualified pilot/tug task conversion |
| required_metadata | All task qualifiers; N; craft duty/fuel/shore power; asset lives; rope/fender boundaries; waste reception; factor/species evidence |
| required_quality_disclosure | Flow UUID gaps; standby/fleet allocation; fuel/slip data; asset/component uncertainty; assisted-ship exclusions; upstream omissions |
| update_trigger | Task subtype/geographic regime, assisted-vessel conditions, tug/launch fleet, propulsion/fuel, duty/weather pattern, contract boundary or data-quality change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-67521 | official_guidance | UNSD CPC3.0 67521. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67521 | Pilotage/pilot-vessel and docking tug scope; transport-tow exclusion. |
| imo-pilotage | official_guidance | IMO, Pilotage. https://www.imo.org/en/ourwork/safety/pages/pilotage.aspx | Pilot local-navigation/communication and actual transfer context; no current legal requirement or quantitative factor adopted. |
| mca-port-towage | official_guidance | UK MCA, A guide to good practice on port and marine facilities, section4.6 (2025). https://www.gov.uk/government/publications/a-guide-to-good-practice-on-port-marine-operations/a-guide-to-good-practice-on-port-and-marine-facilities | Task-specific ship-assist conditions, tug roster and stages; no universal tug number, bollard pull, weather limit or legal compliance inference. |
| epa-harbor-craft | official_guidance | US EPA, Harbor Craft Best Practices to Improve Air Quality. https://www.epa.gov/ports-initiative/harbor-craft-hc-best-practices-improve-air-quality | Service-craft engine/shore-power and activity screening only; no emission/energy factor, default annual hours or technology benefit adopted. |
