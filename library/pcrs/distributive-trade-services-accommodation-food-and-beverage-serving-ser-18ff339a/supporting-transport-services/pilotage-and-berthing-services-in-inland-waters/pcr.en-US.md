---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.pilotage-and-berthing-services-in-inland-waters
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Pilotage and berthing services in inland waters

## 1. Scope and Applicability

Pilotage in inland waters, including actual pilot-vessel services guiding a vessel into/out of a harbour or around navigation hazards, and tugboat assistance connected to docking/undocking inland vessels of all types. Each dataset fixes pilot-only, tug-berthing-only or an actual defined combined package with vessel/environment and task interfaces. [Source: `un-cpc-inland-pilotage`]

Exclude inland transport towing/pushing (65229), non-tug shore-path towing belonging to waterway operations (67512), coastal/transoceanic pilotage/berthing (67521), vessel salvage, cargo handling, warehousing and unrelated port operation. A long-distance barge transport tow is not a berth-assist task merely because it uses a tug. Customer vessel propulsion, cargo and manufacturing remain separate. [Source: `un-cpc-inland-pilotage`]

| service_variant | Counted task | Actual definition |
| --- | --- | --- |
| pilot_only | One completed defined inland pilotage task | Declare start/end of conduct, route/hazards, actual pilot transfer/boarding/landing, aided vessel and water conditions. No tug is assumed. |
| tug_berthing_only | One completed defined inland docking or undocking assist task | Declare docking versus undocking or an explicitly bounded shifting manoeuvre, berth, aided vessel, actual number/configuration/power of tugs, connection/release, duration and load. Do not include a transport tow. |
| combined_package | One completed exact pilotage-and-tug task package | Declare both actual component scopes, coordination and shared trips/standby; component and package outputs cannot duplicate the same work. |

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.pilotage-and-berthing-services-in-inland-waters |
| classification_refs | CPC 3.0 67522; exact |
| covered_products | Qualified inland pilotage, actual pilot transfer and tug docking/undocking tasks or their exactly defined package |
| excluded_products | Transport tow/push; non-tug shore towing; coastal pilotage; salvage; cargo/storage/port operations; customer voyage |
| representative_product | One completed specified inland undocking assist with actual aided vessel, tugs, water conditions, berth and connection/release times |
| production_route | Plan/dispatch → actual transfer and positioning → pilot conduct or tug connection/assist → actual release/landing → allocated return/reposition and support |
| market_state | Completed accepted task with actual operational records, not a tug-hour, tonnage or invoice without scope |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete the specified inland pilotage or tug-berthing function for the identified aided vessel |
| How much | One completed task with fixed variant, craft population and physical route/manoeuvre extent |
| How well | Actual agreed task endpoints, navigational/berthing conditions and completion specification met and recorded; local limits are actual evidence, not invented defaults |
| How long or cycle | Actual dispatch/transfer/service/release and allocated return/standby phases with timestamps; no universal task duration |
| reference_flow_link | `pilotage_task` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed specified inland pilotage or tug-berthing task |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | pilot_only/tug_berthing_only/combined_package; exact completed task and component gates; inland river/lake/port and actual water classification; route/start/end/berth; aided vessel length/beam/draft/displacement/load/propulsion status; actual water level/current/direction, weather/visibility, under-keel and bridge/lock clearance observations and local operating limits; actual transit/assist/idle/standby/reposition/return distances and times; pilot transfer route; tug/pilot-boat IDs and power/engine/bollard-pull configuration; actual engine duty and number of craft; lines/fenders; customer propulsion boundary; supply/shore power; operator/provider split; actual completion/quality and safety record; asset life and maintenance scope; location and period |

Item(s) counts one explicitly defined task, with independent pilot-only/tug-only/package scenarios. Docking, undocking, shifted berth, aided-vessel dimensions and actual river conditions affect physical work; counts are not automatically equivalent. Retain actual engine/load/time and transfer/deadhead records even for a zero-distance berth manoeuvre. Neither tonne-km, tug-rated power nor one paid hour alone establishes task consumption.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| task_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count accepted tasks through cp_activity with fixed variant/extent; retries and package components do not increase whole-task count. |
| fuel_mass | diesel | Mass | kg | Measure task fuel by craft/engine/duty. Litres require traceable actual grade density/temperature; no fixed fuel per tug power or river distance. |
| water_receiver | river_water; river_return | Volume | m3 | Use actual abstraction/return volume and receiving compartment. Inland classification is not permission to copy seawater flows or assume every local receiver is identical. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified inland assisted vessel and accepted pilotage/berthing task with existing service craft and base; customer propulsion is separately owned activity |
| starting_condition_role | foreground_start |
| product_classification_scope | Inland pilot conduct/transfer and tug berthing only, excluding transport towing and coastal tasks |
| recursive_input_rule | Subcontracted pilot/tug component enters once with actual task scope and provider inventory; remove overlapping owned craft/fuel/assets |
| upstream_dataset_requirement | Actual fuels/electricity, service-craft/line/fender manufacture, base share, maintenance, crew transfer and real waste-reception/treatment inventories |
| disclosure | Task variant/interfaces, all service phases, actual inland conditions, crew/craft identities, customer propulsion/provider scope, water receiver, asset denominator and data gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_task | Include actual preparation/dispatch, pilot transfer/boarding/landing, tug positioning/connection/assist/release, actual wait/retry and allocated return/reposition, base support and task-related maintenance. Do not invent a pilot boat for shore boarding or a tug for pilot-only service. | un-cpc-inland-pilotage |
| boundary_interfaces | Retain actual agreed passage/task plan, pilot/master/tug communication, aided-vessel particulars and handover endpoints as task-definition evidence. UK MCA guidance informs record/interface structure; local inland water levels, currents, shallow reaches and bridge/lock clearance limits come from actual local records and are not imported numerical defaults. | mca-task-interfaces |
| boundary_energy | Separate service-craft fuel/charging/auxiliaries from customer ship propulsion and port facilities. Actual shore connection can replace an auxiliary-engine activity, but grid and charging burdens remain; do not claim zero lifecycle emissions from zero onboard combustion. EPA harbor-craft guidance is route evidence, not an inland fleet/factor default. | epa-harbor-craft |
| boundary_receiver | Screen actual cooling-water return, bilge/sewage reception, oil leaks, antifouling constituents, wake/propeller disturbance and underwater noise. Assign actual river/lake/brackish receiver and species; collected wastewater is not assumed direct river discharge. Chemical rows do not establish complete local ecological coverage. |  |

## 6. Process Inventory Structure

Instantiate one declared task variant and actual craft/conditions. Every flow card is atomic; add every other actual fuel, rope material, hydraulic fluid, refrigerant, coating, pollutant species and waste stream separately. Actual NOx or oil totals require specific identity/species treatment rather than being copied into individual flows. An electric task need not have combustion emissions, while idling or strong-current manoeuvres cannot be assigned zero fuel merely for short travelled distance.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| inland_task | Complete the defined inland pilotage/berthing task | required | One actual service variant; individual row conditions apply | foreground_production | per reference flow |

### Process: Complete the defined inland pilotage/berthing task (`inland_task`)

#### Inputs

##### Product flows

###### Diesel fuel, unblended (`diesel`)

Conditional on actual tug/pilot-boat or operator equipment consumption of this grade. Measure actual main/auxiliary engine use; other fuel grades/blends require their own specific rows. Assisted-vessel propulsion is not this fuel.

- Selected flow: Diesel fuel, unblended
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`
- Sources:

###### Electricity, shore supply to service craft (`craft_power`)

Conditional on actual electric/hybrid charging or at-dock auxiliary supply to the tug/pilot boat. Meter charging/auxiliary use and losses separately from customer ship energy; retain regional supply and actual avoided overlap with fuel.

- Selected flow: Electricity, shore supply to service craft
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Electricity, inland pilotage shore-base supply (`base_power`)

Meter actual task planning, communications, dispatch, lighting and service-base support; allocate measured shared loads and standby, excluding unrelated port functions.

- Selected flow: Electricity, inland pilotage shore-base supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Mineral engine lubricating oil (`engine_oil`)

Conditional on actual engine lubrication; collect grade and issued/returned/retired oil and attribute actual maintenance by supported engine activity.

- Selected flow: Mineral engine lubricating oil
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

Conditional on actual steering/winch hydraulic use and maintenance; distinguish this fluid from engine oil and record actual recovery/leaks.

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

###### Braided polypropylene towing rope (`towline`)

Conditional on this actual rope material; identify grade, diameter, measured mass and real replacement/utilization fraction. Steel-wire or other polymer ropes require separate rows, not a combined cable category.

- Selected flow: Braided polypropylene towing rope
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Vulcanized rubber tug fender (`fender`)

Conditional on actual fender use; identify design and manufacturing inventory, attribute supported use/replacement share and avoid repeat inclusion in the tug construction inventory.

- Selected flow: Vulcanized rubber tug fender
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Tap water (`water`)

Conditional on actual crew/base sanitation or service-craft cleaning; measure and distinguish water supplied to the assisted ship as a commodity.

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

###### Pilot transfer by petrol passenger car (`pilot_road_transfer`)

Conditional on actual task-related road transfer; record route, actual distance, occupancy and allocated passenger-distance. Boat transfer uses the pilot-boat operations instead; do not duplicate a provider-covered journey.

- Selected flow: Pilot transfer by petrol passenger car
- Flow property / unit: Passenger transport / person*km
- Amount rule: Attributable measured exchange amount per reference flow; cp_transfer.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transfer`
- Sources:

###### Configured inland berthing tugboat (`tug_share`)

Conditional on actual tug berthing; fix hull, propulsion, engine, power/bollard-pull and manufacturing scope, using supported whole-life activity and task use. Do not use the customer ship inventory.

- Selected flow: Configured inland berthing tugboat
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured inland pilot-transfer boat (`pilot_boat_share`)

Conditional on actual launch use; identify vessel/configuration and supported manufacture/renewal denominator. A shore-boarded pilot does not require an invented launch.

- Selected flow: Configured inland pilot-transfer boat
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured inland pilotage shore-base building (`base_share`)

Conditional on actual base building use; assign identified floor/shared area and supported service-life fraction, excluding whole-port assets not used by this task.

- Selected flow: Configured inland pilotage shore-base building
- Flow property / unit: Area / m2
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

##### Elementary flows

###### Water, freshwater, withdrawn from river (`river_water`)

Conditional on actual river-water intake for an open cooling circuit; record source, measured volume, recirculation and temperature. Another receiver/source needs a distinct matching flow.

- Selected flow: Water, freshwater, withdrawn from river
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_cooling.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cooling`
- Sources:

#### Outputs

##### Product flows

###### Completed specified inland pilotage or tug-berthing task (`pilotage_task`)

One task fixes pilot-only, tug-berthing-only or the exact combined package, vessel/environment and actual start/end interfaces; components are not independent whole-package outputs.

- Selected flow: Completed specified inland pilotage or tug-berthing task
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_activity`
- Sources:

##### Waste flows

###### Used mineral engine oil (`used_engine_oil`)

Conditional on actual segregated engine-oil removal; weigh and identify shore reception/treatment. Hydraulic waste oil requires its own stream if not genuinely collected as the same specified waste.

- Selected flow: Used mineral engine oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Oily service-craft bilge water (`bilge_water`)

Conditional on actual collected oily bilge water; measure volume/oil composition and actual shore reception/treatment. It is not a presumed direct discharge to the river.

- Selected flow: Oily service-craft bilge water
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

Conditional on actual crew wastewater; record measured or reconciled volume and real reception/onboard treatment scope. Actual environmental release needs separate species/receiver evidence.

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

###### Discarded polypropylene towing rope (`worn_rope`)

Conditional on actual retired polypropylene rope; weigh this stream separately and identify treatment/reuse; no automatic recycling credit.

- Selected flow: Discarded polypropylene towing rope
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

###### Water, returned to river (`river_return`)

Conditional on actual cooling-water return to the river; measure volume/temperature and actual chemical quality. Gross circulation is not freshwater consumption; thermal effects need separate site-method evidence.

- Selected flow: Water, returned to river
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_cooling.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cooling`
- Sources:

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Conditional on actual service-craft/operator combustion release. Use actual fuel carbon/oxidation or measured release, keeping supplier electricity and customer propulsion separate.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Carbon monoxide, to air (`carbon_monoxide`)

Conditional on actual service-craft/operator combustion release. Use species-specific actual engine/duty evidence; an aggregate combustion-emission mass is not CO.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Nitrogen monoxide, to air (`nitrogen_monoxide`)

Conditional on actual service-craft/operator combustion release. Require measured or supported NO speciation; a NOx total is not automatically NO.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Nitrogen dioxide, to air (`nitrogen_dioxide`)

Conditional on actual service-craft/operator combustion release. Record NO2 independently from NO; preserve equivalent-mass and species conversion evidence rather than duplicating a NOx total.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Sulfur dioxide, to air (`sulfur_dioxide`)

Conditional on actual service-craft/operator combustion release. Use actual fuel-sulfur and oxidation/control evidence or measurement; no marine-fuel sulfur assumption for an inland craft.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_task | Subdivide pilot, tug and package scopes and unlike vessel/environment tasks first. Assign actual craft/engine fuel and charging by measured duty/time; distribute multi-job launch trips, return/reposition and standby by documented causal dispatch use and reconcile all jobs. Do not multiply a full fleet/day or full return voyage into every task. |  |
| allocate_assets | Maintain persistent tug, pilot-boat, fender, rope and base ledgers with supported whole-life activity/cycle denominators. Attribute only the actual task fraction and actual renewal share; cumulative manufacturing fractions across all jobs/periods must not exceed one or reset annually. Observed-period allocation distributes only the already attributed period share. Unknown lifespan/denominator requires review and sensitivity; no invented vessel mass. |  |
| allocate_provider | A contracted pilot/tug/transfer inventory replaces its covered fuel, equipment and waste once. Avoid fender/rope renewal already covered by the craft inventory. Customer propulsion, cargo, fees and successful vessel movement are not additional co-products; actual waste recycling receives no automatic credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_activity | inland_task | pilotage_task | Task, local-condition and dispatch ledger | variant/package; work order; aided vessel dimensions/draft/load/propulsion; actual inland route/berth; local water level/current; depth/bridge/lock clearance records; task gates/times; pilot transfer; craft IDs; actual assist/idle/reposition/return; shared dispatch; completion | Match actual task plan, pilot/master/tug handover and dispatch/position records. Retain measured local conditions and actual accepted task interfaces; count homogeneous tasks only and keep component/package lineage, wait/retry and return attribution. | Item(s) | each actual task/phase | full task and assigned support phases | all actual pilot/tug/transfer operators | per reference flow | task plans; handovers; AIS/GNSS or equivalent route logs; local hydrology; completion and dispatch reconciliation |
| cp_fuel | inland_task | diesel | Craft/engine fuel and duty ledger | craft/engine ID; power; actual duty/load/time; main/auxiliary fuel; grade; metered kg; stock; density/temperature if converted; assist/idle/transit phases | Use actual flow meters/stock balances by engine and task where possible. Reconcile duty logs, waiting and deadhead; a supported engine-specific load-time fuel method is allowed only with verified local parameters and uncertainty. No universal power-distance coefficient. | kg | each phase and monitoring interval | all represented service-craft operation | actual engines and operators | per reference flow | fuel meters; stock reconciliation; actual engine/duty records; parameter evidence |
| cp_energy | inland_task | craft_power; base_power | Electricity/charging and support ledger | meter; kWh; voltage/region; charger input/output/loss; actual vessel/base use; duty; standby; supplier coverage; customer electricity separation | Meter actual shore/charging/base loads and assign task share with measured dispatch/use. Avoid fuel/charging overlap in hybrid phases and keep upstream power generation separate from onboard releases. | kWh | each charging/base interval and phase | full represented operation and standby | actual craft/base/supply | per reference flow | calibrated meters; charge logs; supply records; task allocation |
| cp_material | inland_task | engine_oil; hydraulic_oil; towline; water | Specific material and maintenance ledger | individual grade/material; kg/m3; rope diameter/mass; issue/return; actual replacement; life/use evidence; stock; recovery and leaks | Measure each specific material separately and assign supported actual usage/replacement share. Do not allocate a full rope or oil change to every job; record recovery and waste destinations. | kg; m3 | each supply/maintenance/stock event | all attributable service support | actual service craft/base | per reference flow | weighing; stock/service logs; supplier composition; usage and material balance |
| cp_transfer | inland_task | pilot_road_transfer | Actual pilot-transfer journey ledger | route/mode; petrol vehicle; actual km; occupants; passenger share; purpose; package/provider overlap | Read actual task-related journeys and passenger-distance; another transport mode needs a separate flow. Reconcile shared transfers and provider-included travel rather than assuming one journey per job. | person*km | each actual journey | full actual task transfer scope | actual transfer operator | per reference flow | journey/dispatch logs; distance and occupancy records |
| cp_assets | inland_task | fender; tug_share; pilot_boat_share; base_share | Persistent craft/equipment/base ledger | asset ID/configuration; manufacture inventory; Item(s)/m2; task activity; supported lifetime/cycle denominator; actual renewal; prior cumulative fractions; period share; sensitivity | Link actual hull/engine/fender/base inventories to supported whole-life service utilization. Keep separately modelled consumables/renewals non-overlapping and conserve allocation fractions across all jobs and periods; unknown denominator requires review. | Item(s); m2 | each allocation and asset/renewal update | supported whole life and declared observation period | actual pilot/tug/shore assets | per reference flow | asset and utilization records; supported life; scope/cumulative reconciliation |
| cp_waste | inland_task | used_engine_oil; bilge_water; sewage; worn_rope | Segregated vessel-waste reception ledger | individual stream; measured kg/m3; oil/chemical composition; event; collection; onboard treatment; shore recipient; treatment/disposal | Measure each actual collected waste separately and trace onboard/shore treatment once. Do not treat delivered waste as a direct freshwater release or assume reception/treatment without records. | kg; m3 | each actual transfer/discharge period | all attributable service waste | actual craft and reception/treatment providers | per reference flow | reception tickets; weighing/meters; composition; treatment inventory |
| cp_cooling | inland_task | river_water; river_return | Actual freshwater cooling balance | source/receiving river; actual m3; temperatures; open/closed circuit; recirculation; loss; contamination; task duty | Measure actual intake/return and temperature, reconcile recirculation and consumed fraction; use actual local waterbody compartment. Thermal/ecological effects need explicit site evidence beyond volume balance. | m3 | each operating/monitoring interval | actual open cooling operation | actual inland river/craft | per reference flow | flow/temperature records; circuit configuration; water balance |
| cp_release | inland_task | fossil_co2; carbon_monoxide; nitrogen_monoxide; nitrogen_dioxide; sulfur_dioxide | Species-specific service-engine emission ledger | engine/fuel identity; actual load/time; fuel carbon/sulfur; measured species kg; air compartment; NO/NO2 speciation/equivalent basis; control conditions; method/factor applicability; uncertainty | Use actual species measurements or independently verified engine/fuel/duty-specific evidence. Separate main/auxiliary and customer/provider scopes; never copy NOx into both NO and NO2 or apply coastal fuel defaults. Other actual emissions/leaks require their own species/receiver records. | kg | each actual duty and representative monitoring | all represented onboard/operator emissions | actual service engines and receiving air | per reference flow | measurement reports; local fuel/engine evidence; duty/carbon/sulfur reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| task_attribution | all inventory rows | Assign actual operation, transfer, standby and maintenance to one homogeneous task variant/extent; divide by actual completed task count while retaining failed/retry work. Reference output is exactly 1 Item(s). | cp_activity; attributable measured totals | exchange amount per reference flow |  |
| asset_attribution | fender; tug_share; pilot_boat_share; base_share | Apply the supported task fraction of whole-life service to actual asset manufacture and actual renewal scope; period observations distribute only the attributed period share, conserving all cumulative fractions. | cp_assets; cp_activity | asset amount per reference flow |  |
| engine_species | fossil_co2; carbon_monoxide; nitrogen_monoxide; nitrogen_dioxide; sulfur_dioxide | Use actual species mass or verified engine/fuel/duty evidence; record every applied factor/unit and NOx-equivalent-to-species conversion basis in the dataset. No numerical factor or load default is supplied by this PCR. | cp_release; cp_fuel | individual species release per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_task | pilotage_task | Verify variant, actual inland water domain, vessel configuration, local current/water-level/clearance records and task gates. Keep pilot-only, tug-only and package results distinct. | cp_activity |
| quality_duty | all energy rows | Reconcile actual assist, transit, idle, standby, transfer and reposition. Do not infer consumption solely from distance, tug rated power or customer vessel displacement. | cp_activity; cp_fuel; cp_energy |
| quality_lifecycle | all asset rows | Substantiate life/cycle denominators and conserved craft/fender/base shares with maintenance overlap removed; unknown life/upstream scope prevents complete lifecycle claims. | cp_assets; cp_material |
| quality_water | all inventory rows | Verify actual freshwater/other inland receivers and real waste reception, chemical/leak identity, thermal/wake/noise coverage and uncertainty. Do not copy marine compartments or present missing evidence as zero. | cp_waste; cp_cooling; cp_release |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_task | Require unique pilotage_task output equal to 1 Item(s), with one fixed variant, actual vessel/river conditions, task interfaces and complete craft/transfer scope. No unqualified equal-task factor. |  |
| validate_classification | Reject transport towing/pushing, non-tug shore towing, coastal pilotage and salvage/handling/storage disguised as inland berthing. Validate pilot/tug package component lineage and prevent double count. | un-cpc-inland-pilotage |
| validate_boundaries | Separate customer propulsion, port infrastructure and supplier-covered fuel/assets from service-craft operation. Verify actual whole-task return/standby allocation and conserved asset life shares, not full craft inventories per job. |  |
| validate_atomic_water | Require specific fuel/rope/fender/waste/pollutant exchanges and verified actual applicability. Preserve NO/NO2 distinctions, water source/receiver and real treatment scope; identity and ecological gaps remain explicit without implying publication readiness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | inland_pilotage_berthing_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | A compatible inland pilotage/berthing task component with declared vessel, river conditions, interfaces and variant |
| excluded_use | Inland transport tow or full voyage, coastal pilotage, customer propulsion/port-infrastructure footprint, unqualified task comparisons or operational safety approval |
| required_metadata | pilot_only/tug_berthing_only/combined_package; exact completed task and component gates; inland river/lake/port and actual water classification; route/start/end/berth; aided vessel length/beam/draft/displacement/load/propulsion status; actual water level/current/direction, weather/visibility, under-keel and bridge/lock clearance observations and local operating limits; actual transit/assist/idle/standby/reposition/return distances and times; pilot transfer route; tug/pilot-boat IDs and power/engine/bollard-pull configuration; actual engine duty and number of craft; lines/fenders; customer propulsion boundary; supply/shore power; operator/provider split; actual completion/quality and safety record; asset life and maintenance scope; location and period |
| required_quality_disclosure | Identity/measurement and duty gaps; task/transfer/provider boundaries; freshwater/thermal/wake/noise scope; species factors; asset life and missing upstream evidence |
| update_trigger | Changed task variant, aided vessel, river conditions or clearance, route/berth, service craft/powertrain, fuel/supply, transfer plan, waste reception, provider or life/allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-inland-pilotage | official_guidance | UNSD CPC3.0 67522 explanatory note, consistent with draft PDF pp375–376. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67522 | Inland pilotage/pilot-vessel and tug docking/undocking scope; transport tow exclusion; no task factor |
| mca-task-interfaces | official_guidance | UK MCA, A guide to good practice on port and marine facilities, sections on pilotage, towage and passage planning, updated 15 April 2025. https://www.gov.uk/government/publications/a-guide-to-good-practice-on-port-marine-operations/a-guide-to-good-practice-on-port-and-marine-facilities | Task planning, pilot/master/tug coordination and handover record structure only; local inland operating limits are not inferred from UK examples |
| epa-harbor-craft | official_guidance | US EPA Harbor Craft Best Practices to Improve Air Quality, harbor-craft description and shore-power sections, web read 2026-10-23. https://www.epa.gov/ports-initiative/harbor-craft-hc-best-practices-improve-air-quality | Actual tug/pilot-craft and shore-power route separation; no universal inland engine, load, sulfur, voltage threshold or emission factor adopted |
