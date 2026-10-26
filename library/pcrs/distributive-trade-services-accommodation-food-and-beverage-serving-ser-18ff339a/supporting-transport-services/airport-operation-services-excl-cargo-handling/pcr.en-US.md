---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.airport-operation-services-excl-cargo-handling
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Airport operation services excluding cargo handling

## 1. Scope and Applicability

Cover passenger air-terminal and airfield ground-facility operation, including runway operation and actual airport-facility upkeep. Distinguish whole public-airport operation from a separately contracted terminal, apron or runway facility service; each actual dataset fixes one facility/function extent and coverage interval. Conditional terminal and airfield processes below are included only when within that extent. [Source: `un-cpc3-67610`]

Exclude cargo/baggage handling (67110/67190), independently sold runway cleaning/snow removal (94510), ATC (67620), independent aircraft towing/upkeep/hangar support (67630), aircraft repair and airline carriage. Airport facility minor maintenance remains included. Aircraft propulsion/APU, airline baggage equipment and passenger access transport are separate linked scopes, not automatically airport-operator emissions.

Necessary cleaning/snow/pavement-treatment support may enter an airport-operation inventory once as a scoped upstream service. Direct support materials are used only when that support inventory is explicitly decomposed and replace, rather than duplicate, its aggregate supplier input. Neither a cleaning event nor a deicing quantity becomes the airport-operation reference.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.airport-operation-services-excl-cargo-handling |
| classification_refs | CPC 3.0 67610 |
| covered_products | Qualified whole-airport or defined passenger-terminal/airfield/runway operation service |
| excluded_products | Cargo/baggage handling; standalone runway cleaning/snow removal; ATC; independent aircraft upkeep/towing/hangar/repair; airline carriage |
| representative_product | One accepted airport-facility operation event for a declared configuration, functional extent and coverage interval |
| production_route | Establish declared facility condition → operate actual terminal/airfield functions and maintenance/support → close interval and verify delivered availability/service |
| market_state | Airport infrastructure operation delivered under declared operator, airline, tenant and contractor boundaries |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver the stated airport infrastructure operating function |
| How much | One accepted event with fixed whole-airport or specified facility extent, actual passenger/movement scale and exact coverage interval |
| How well | Actual declared operating availability, terminal access/capacity, runway/airfield condition, safety/accessibility and acceptance requirements; not an invented universal service grade |
| How long or cycle | Exact event/operating interval from declared start to accepted close, with opening/closure/standby and delivered service recorded |
| reference_flow_link | `airport_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Airport infrastructure operation service event |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | airport/site; whole public airport versus terminal/apron/runway contract; facility area/layout/configuration; included functions; exact start/end and duration; opening/closure/standby and achieved availability; actual passengers and movements with counting rules; aircraft class and runway occupancy where relevant; climate/weather; operator/airline/tenant/contractor split; cleaning/snow support and supplier coverage; deicer chemistry/drainage; asset scope/life denominator; electricity region/voltage |

item is the singular alias of verified Item(s). It counts one specified accepted operation event/interval, not automatically one passenger, aircraft movement, runway use, hour or cleaning action. Events with different facility/function/period extent are not equivalent merely because each is counted once. Any per-passenger or per-movement readout needs measured matched counts and explicit causal attribution; a landing and take-off cannot silently count as one or two events by convenience.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `operation_event` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use cp_event accepted event with its exact facility, functions and interval. Passenger count, movement count and whole-airport event are distinct recorded dimensions without default equivalence. |
| `deicer_mass` | potassium_acetate; sodium_formate | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record actual whole formulation mass and measured/certified active fraction separately. Product mass is not pure chemical, nitrogen load or directly discharged mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared airport/facility configuration and initial operating condition; public installed infrastructure is not burden-free |
| starting_condition_role | foreground_start |
| product_classification_scope | Passenger-terminal/airfield/runway infrastructure operation, not cargo handling or independent cleaning |
| recursive_input_rule | Subcontracted same-category airport operation enters as scoped supplier service; reconcile included utilities/assets and do not duplicate local inventories |
| upstream_dataset_requirement | Actual utilities/materials, infrastructure/equipment manufacture/retirement, necessary cleaning/snow support and wastewater/waste management |
| disclosure | Whole-airport versus facility event; passenger/movement/interval counts; conditional processes; operator/supplier split; aircraft/ATC exclusion; upstream coverage and asset life |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_airport` | Include actual passenger-terminal and airfield/runway operating functions and facility upkeep in the declared event. A terminal-only service does not include an entire airport; shared whole-airport inventory must not be attached again to each runway/terminal. | un-cpc3-67610 |
| `boundary_support` | Standalone runway cleaning/snow removal remains outside the reference. Necessary upstream support is recorded once through supplier inventory or its explicitly replaced decomposition. | un-cpc3-67610 |
| `boundary_runoff` | Distinguish pavement versus aircraft deicing sources, actual chemical formulation, collected effluent, treatment and directly discharged substances. Site-specific fate matters; no regulatory collection percentage or impact factor becomes a default inventory parameter. | epa-airport-deicing |
| `boundary_assets` | Include actual facility construction, replacement, maintenance and retirement shares with documented life/utilization. Screen additional actual chemicals, refrigerants, consumables, noise/land/ecological effects and wastes individually; a short card list is not a zero-burden exemption. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| terminal | Operate passenger-terminal facilities | conditional | Terminal function included in declared contract/event | foreground_production | per reference flow |
| airfield | Operate airfield, apron and runway facilities | conditional | Airfield function included; necessary support interfaces recorded separately | foreground_production | per reference flow |
| shared | Reconcile shared airport support and accepted event | required | Actual selected facility extent only | foreground_production | per reference flow |

### Process: Operate passenger-terminal facilities (`terminal`)

#### Inputs

##### Product flows

###### Low-voltage alternating current electricity (`terminal_electricity`)

Actual terminal lighting, HVAC, security, passenger circulation and operator IT electricity; record region/voltage and exclude tenant/airline/baggage-handling loads outside scope.

- Selected flow: Low-voltage alternating current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_terminal_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_terminal_energy`
- Sources:

###### Natural gas (`natural_gas`)

Conditional on actual terminal heating/hot water; preserve composition and meter conditions with evidenced volume conversion, not a generic density.

- Selected flow: Natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_terminal_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_terminal_energy`
- Sources:

###### Tap water (`water`)

Actual terminal sanitation, facility cleaning and passenger water use; segregate tenants, aircraft supplies and baggage/cargo services.

- Selected flow: Tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_terminal_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_terminal_energy`
- Sources:

###### 1,1,1,2-Tetrafluoroethane refrigerant (`r134a_supply`)

Conditional on actual R134a terminal cooling; record service stocks, equipment charge and recovery. Other refrigerants require their own specific rows and no default leak rate.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_terminal_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_terminal_refrigerant`
- Sources:

###### Airport passenger terminal building (`building`)

Actual terminal building manufacture/retirement share; declare building, landlord, tenant and apron component scope, supported lifetime and utilization.

- Selected flow: Airport passenger terminal building
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_terminal_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_terminal_assets`
- Sources:

###### Passenger boarding bridge (`boarding_bridge`)

Conditional on airport-operated bridge; actual supported manufacturing share, coverage and utilization. Airline aircraft and baggage equipment remain separate.

- Selected flow: Passenger boarding bridge
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_terminal_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_terminal_assets`
- Sources:

###### Passenger-terminal air-conditioning unit (`hvac`)

Conditional on actual installed unit; manufacturing/retirement share excludes electricity and refrigerant already recorded separately.

- Selected flow: Passenger-terminal air-conditioning unit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_terminal_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_terminal_assets`
- Sources:

#### Outputs

##### Waste flows

###### Passenger-terminal sanitary wastewater (`sanitary_wastewater`)

Actual collected terminal sanitary effluent transferred to treatment; exclude tenant/aircraft effluent outside operator boundary and separate stormwater.

- Selected flow: Passenger-terminal sanitary wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_terminal_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_terminal_waste`
- Sources:

#### Outputs

##### Elementary flows

###### 1,1,1,2-Tetrafluoroethane, to air (`r134a_air`)

Actual terminal R134a release from reconciled stock/equipment-charge/service/recovery records; no purchase-equals-leak or standard leak percentage.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_terminal_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_terminal_refrigerant`
- Sources:

### Process: Operate airfield, apron and runway facilities (`airfield`)

#### Inputs

##### Product flows

###### Low-voltage alternating current electricity (`airfield_electricity`)

Actual airfield lighting, signs, facility controls and attributable ground-facility energy where this voltage applies; ATC/radio-navigation and aircraft energy are separate.

- Selected flow: Low-voltage alternating current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_energy`
- Sources:

###### Potassium-acetate pavement deicing solution (`potassium_acetate`)

Only within explicitly decomposed necessary pavement-treatment support, replacing an aggregated supplier-service input. Measure whole solution and actual active fraction; do not duplicate chemistry already included in purchased snow-clearance support.

- Selected flow: Potassium-acetate pavement deicing solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_materials`
- Sources: `epa-airport-deicing`

###### Sodium-formate pavement deicing granules (`sodium_formate`)

Conditional on this actual formulation in separately scoped airport support; record composition and whole-product mass. It is distinct from acetate solution and aircraft deicing chemicals.

- Selected flow: Sodium-formate pavement deicing granules
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_materials`
- Sources: `epa-airport-deicing`

###### Ready-mixed concrete (`concrete`)

Actual runway/taxiway/apron civil-works manufacturing and repair share; record grade, construction quantities and life utilization, excluding complete upstream asset duplicates.

- Selected flow: Ready-mixed concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_assets`
- Sources:

###### Asphalt pavement mixture (`asphalt`)

Conditional on actual bituminous pavement construction/replacement; retain formulation, quantity and supported service-life allocation rather than imposing a universal runway structure.

- Selected flow: Asphalt pavement mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_assets`
- Sources:

###### LED runway edge-light fixture (`runway_light`)

Conditional on this actual lighting technology; allocate equipment manufacture/replacement over supported life, separate metered electricity and preserve actual configuration.

- Selected flow: LED runway edge-light fixture
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_assets`
- Sources:

###### Runway sweeping support service (`sweeping_service`)

Purchased necessary upstream support only, with actual supplier boundary and activity. Standalone runway cleaning is outside this PCR reference; omit duplicate supplier-covered fuel/material/waste rows.

- Selected flow: Runway sweeping support service
- Flow property / unit: Time / h
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_services.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_services`
- Sources:

###### Runway snow-clearance support service (`snow_service`)

Purchased necessary upstream support only. Reconcile deicer/vehicle/waste inclusion; when decomposing supplier support in primary data, replace this aggregate rather than count both.

- Selected flow: Runway snow-clearance support service
- Flow property / unit: Time / h
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_services.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_services`
- Sources:

#### Outputs

##### Waste flows

###### Collected pavement-deicer runoff wastewater (`deicer_runoff`)

Actual collected pavement-support wastewater, with chemical composition and treatment destination. Distinguish aircraft-deicing drainage and avoid duplicate treatment embedded in supplier support.

- Selected flow: Collected pavement-deicer runoff wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_waste`
- Sources: `epa-airport-deicing`

###### Discarded pavement concrete (`concrete_waste`)

Actual removed concrete treatment share from airport pavement upkeep; no automatic aggregate-recycling credit.

- Selected flow: Discarded pavement concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_waste`
- Sources:

###### Discarded asphalt pavement mixture (`asphalt_waste`)

Actual removed asphalt stream with measured mass and fate; reuse/stock and disposal must not count the same mass twice.

- Selected flow: Discarded asphalt pavement mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_waste`
- Sources:

#### Outputs

##### Elementary flows

###### Ammonia, to freshwater (`ammonia`)

Only actual measured operator-attributable direct discharge, with species/compartment and support-service boundary. Total nitrogen, product urea mass and COD are not ammonia mass; total-ammonia or nitrogen-basis laboratory results require supported chemical-speciation and basis conversion before this molecular identity is used. Do not duplicate treatment-dataset releases.

- Selected flow: Ammonia, to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_airfield_runoff.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_airfield_runoff`
- Sources: `epa-airport-deicing`

### Process: Reconcile shared airport support and accepted event (`shared`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Actual airport-operator standby/maintenance equipment fuel; separate aircraft/tug/airline GSE and supplier-covered cleaning fuel to avoid double counting.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_shared_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shared_energy`
- Sources:

#### Outputs

##### Product flows

###### Airport infrastructure operation service event (`airport_output`)

One accepted event of the stated airport/facility extent and interval, with measured actual passenger/movement dimensions; not a separately counted cleaning or aircraft-operation output.

- Selected flow: Airport infrastructure operation service event
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_event`
- Sources:

#### Outputs

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Actual airport-operated boiler/generator/support-equipment fossil combustion using actual fuel and cited method; aircraft propulsion/APU and purchased-electricity supply are not direct airport-operation emissions in this row.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_shared_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shared_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_facilities` | Use direct facility/function meters and actual space-time/activity records first. Public airport common burdens require causal allocation between terminal, runway, apron, tenants and airlines; do not automatically allocate by revenue, passengers or movements. |  |
| `allocate_period` | Retain attributable standby, closure, low-utilization and failed support in the defined operating event. Match all counts and meters to the same interval; terminal passengers and aircraft movements are separate dimensions, not universal equivalents. |  |
| `allocate_assets` | Apply actual-use/supported-lifetime-use shares to facility construction/equipment manufacture and retirement; reconcile complete-building/pavement/component scope and cumulative shares capped at one life. No invented runway structure, asset mass or life. |  |
| `allocate_support` | Supplier cleaning/snow support and its expanded chemical/fuel/waste inventory are alternatives for the same scope. Track operator/contractor responsibility and avoid counting the same runoff treatment or deicer burden twice. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_event | shared | airport_output | operation_event_record | event; facility/contract extent; functions; start/end; duration; opening/closure; availability; actual passengers; movements and counting rules; operator/tenant/airline split | Reconcile accepted operating/service interval with facility records and matched actual counts; retain sub-event interfaces without multiplying full airport outputs. | item | each event and interval | full specified operating interval | declared airport/facility extent | per reference flow | acceptance; operations records; matched counts |
| cp_airfield_assets | airfield | concrete; asphalt; runway_light | asset_record | asset/configuration; construction quantity; component scope; actual use; supported life use; prior shares; replacement/retirement | Reconcile actual building/pavement/equipment registers, bills and utilization with independently supported lifetime denominators and upstream component coverage. | row unit | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_airfield_energy | airfield | airfield_electricity | meter_record | row; meter; actual energy/water; source; operating period; function/tenant share; stock; density conditions | Use calibrated meters, supply records and task/zone attribution; reconcile actual stock and operator/airline boundaries. | row unit | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_airfield_materials | airfield | potassium_acetate; sodium_formate | formulation_record | specific product; whole mass; active fraction; supplier; application; collection; upstream-service coverage | Weigh actual issues/returns and obtain formulation evidence; direct support chemicals replace the aggregated supplier scope, not supplement it. | kg | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_airfield_runoff | airfield | ammonia | runoff_species_record | substance; outfall; flow; concentration; timing; receiving compartment; treatment; pavement/aircraft source; attribution | Use actual paired flow/concentration or measured species mass with treatment and source attribution; distinguish total nitrogen, ammonia and oxygen-demand indicators. | kg | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_airfield_services | airfield | sweeping_service; snow_service | supplier_service_record | provider; actual hours; task/area/weather; chemical/vehicle/waste inclusion; cleaning/snow scope | Match necessary upstream support to supplier primary inventory; hours are activity only, not an emission factor, and decomposition replaces supplier aggregates. | h | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_airfield_waste | airfield | deicer_runoff; concrete_waste; asphalt_waste | waste_record | specific stream; measured mass; composition; contamination; source; treatment; destination; supplier coverage | Measure segregated flows and reconcile treatment/transfer records; distinguish sanitary, pavement and aircraft sources and upstream included treatment. | kg | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_shared_emissions | shared | fossil_co2 | emission_record | species; actual stationary/mobile source; fuel; activity; test/model; factor source; compartment | Measure actual operator emissions or use cited applicable source/fuel method with matched activity; aircraft/APU and electricity supply remain separate. | kg | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_shared_energy | shared | diesel | meter_record | row; meter; actual energy/water; source; operating period; function/tenant share; stock; density conditions | Use calibrated meters, supply records and task/zone attribution; reconcile actual stock and operator/airline boundaries. | row unit | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_terminal_assets | terminal | building; boarding_bridge; hvac | asset_record | asset/configuration; construction quantity; component scope; actual use; supported life use; prior shares; replacement/retirement | Reconcile actual building/pavement/equipment registers, bills and utilization with independently supported lifetime denominators and upstream component coverage. | row unit | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_terminal_energy | terminal | terminal_electricity; natural_gas; water | meter_record | row; meter; actual energy/water; source; operating period; function/tenant share; stock; density conditions | Use calibrated meters, supply records and task/zone attribution; reconcile actual stock and operator/airline boundaries. | row unit | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_terminal_refrigerant | terminal | r134a_supply; r134a_air | refrigerant_balance | species; start/end stored stock; acquisition/disbursement; equipment charge change; service; recovery | Reconcile species stock and equipment-charge/service/recovery to quantify actual release; no default percentage or purchase-equals-leak. | kg | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |
| cp_terminal_waste | terminal | sanitary_wastewater | waste_record | specific stream; measured mass; composition; contamination; source; treatment; destination; supplier coverage | Measure segregated flows and reconcile treatment/transfer records; distinguish sanitary, pavement and aircraft sources and upstream included treatment. | kg | actual task/meter/maintenance interval | same interval as cp_event | declared process and operator/supplier scope | per reference flow | source records; calibration/stock; scope reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_operation` | all inventory rows | Attribute actual measured/collected exchanges to the exact facility/function/interval and apply documented shared-scope allocation. Normalize matched comparable totals by accepted events without automatically replacing the denominator with passengers, movements or hours. | cp_event; actual process protocols | per reference flow |  |
| `calc_assets` | concrete; asphalt; building; runway_light; boarding_bridge; hvac | Use actual construction/equipment quantities, current service use and independently supported lifetime utilization; reconcile cumulative and component shares before attribution to the event. Unknown life/utilization remains explicit. | asset protocols; cp_event | asset share per reference flow |  |
| `calc_runoff_species` | potassium_acetate; sodium_formate; deicer_runoff; ammonia | Reconcile whole formulation/active composition, collection, treatment and actual residual discharge with site records. Convert concentration with actual matched flow only; product mass, COD or total nitrogen cannot replace one emitted chemical species. | materials/waste/runoff protocols; cp_event | specific product/stream/species per reference flow | epa-airport-deicing |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_extent | airport_output | Require whole-airport versus facility extent, accepted interval, actual availability, passenger/movement definitions and operator boundary; a fee or airport name is insufficient. | cp_event |
| dq_support | sweeping_service; snow_service; potassium_acetate; sodium_formate | Prove support-service inclusion and alternative aggregate/decomposed accounting; preserve standalone cleaning exclusion and chemical specificity. | supplier and material records |
| dq_assets | concrete; asphalt; building; runway_light; boarding_bridge; hvac | Actual life/utilization, construction and component scope must be documented, with uncertainty and missing upstream burdens disclosed. | asset protocols |
| dq_identity | all inventory rows | Confirm exact flow/property/unit and Chinese names before adoption; unresolved flows remain individual and actual additional exchanges must be added atomically. | Direct support and unresolved register |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_operation` | Require unique airport_output of 1 item with accepted infrastructure-operation extent, functional quality and interval. Reject cleaning actions, automatic passenger/movement equivalence and aircraft carriage as substitutes. | un-cpc3-67610 |
| `validate_scopes` | Verify conditional terminal/airfield processes and complete-airport shared attribution; exclude baggage/cargo handling, ATC and independently sold runway cleaning/snow. Do not duplicate supplier support and expanded chemical/fuel/waste burdens. | un-cpc3-67610 |
| `validate_actual_flows` | Audit each actual utility, chemical, refrigerant, asset, waste and released substance with matched period/basis. Disclose identity, asset-life, runoff-treatment and upstream gaps; parser pass is not a full airport environmental or methodology approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | airport_infrastructure_operation |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified airport/terminal/airfield operating component in a scenario matching declared functions, interval and actual utilization |
| excluded_use | Complete flight/passenger footprint; standalone cleaning/snow service; universal per-passenger/per-movement airport factor; aircraft maintenance/towing/ATC |
| required_metadata | All reference qualifiers; conditional processes; actual counts/availability; supplier and tenant split; assets and upstream identities; chemical/runoff support boundaries |
| required_quality_disclosure | Event comparability; utilization and standby; life denominator; support overlap; water/refrigerant/runoff uncertainty; missing UUIDs/upstream/noise/land evidence |
| update_trigger | Changed facility scope/configuration, operating interval/passenger or movement profile, operator contract, maintenance/deicer route, energy, asset life or discharge evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-67610 | official_guidance | UNSD, Explanatory Notes of CPC Version3.0, subclass67610, February2025, with adjacent67620/67630 context. https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | Passenger-terminal/airfield/runway operation scope and explicit cargo/baggage/standalone runway-cleaning exclusions; no factors |
| epa-airport-deicing | official_guidance | US EPA, Airport Deicing Environmental Impact and Benefit Assessment, April2012, EPA-821-R-12-003, sections1.2–1.4 and2.1. https://www.epa.gov/sites/production/files/2015-06/documents/airport-deicing_environmental-impact-and-benefit-assessment-final-2012.pdf | Pavement versus aircraft chemical formulations and runoff pathways; site-specific monitored chemicals/treatment, no regulatory percentages, default doses or impact factors adopted |
