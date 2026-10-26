---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-air-transport
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other supporting services for air transport

## 1. Scope and Applicability

Reviewed scope covers four named aircraft-support families: aircraft firefighting/fire prevention, non-repair maintenance/upkeep, hangar service and aircraft towing. Each uses its own conditional physical process, qualified service block and measured denominator. Mapping is narrower than the open residual category; other unreviewed supporting functions are not automatically applicable. [Source: `un-cpc-air-support`]

Exclude aircraft cleaning (85340), disinfection/extermination (85310), passenger/freight brokerage (85610/85630), air-sea rescue (91260), general flight training (92919), runway cleaning/snow removal (94510), and aircraft repair. Non-repair upkeep cannot include overhaul, engine replacement, structural/component repair or repair-test campaigns merely because they occur in a hangar. No aircraft flight, cargo/passenger handling, airport-wide operation or fuel resale is implied.

| service_family | One counted block | Mandatory scenario extent |
| --- | --- | --- |
| fire | One actual 1-hour specified aircraft-fire prevention/standby block, OR one completed specified aircraft-fire response event, separated by mode | Standby: defined protected aircraft/activity/area, capability and coverage; event: aircraft/fire type and scale, actual dispatch/response/containment/recovery, resources and completion. Do not derive event frequency from standby count. |
| upkeep | One completed named non-repair upkeep task on one declared aircraft/configuration | Actual work order/procedure, task extent, equipment, consumables, duration and completion/check endpoint; incompatible tasks/configurations remain separate. |
| hangar | One declared aircraft occupying its specified hangar space for 24 actual hours | Aircraft dimensions/footprint, occupied/shared area, climate/temperature/ventilation/security and custody conditions; retain fractional days and actual occupancy. |
| towing | One completed defined aircraft tow from release point to accepted final position | Actual aircraft mass/gear/load, pushback/reposition/tow mode, tug/towbar or towbarless equipment, route distance, gradient, duration and hookup/loaded/wait/empty-return phases. |

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-air-transport |
| classification_refs | CPC 3.0 67630; narrower |
| covered_products | The four separately qualified families in section 1 only |
| excluded_products | Aircraft repair/cleaning/disinfection, brokerage, public air-sea rescue, general flight training, runway cleaning/snow removal and unreviewed residual functions |
| representative_product | One completed specified aircraft-towing task with actual aircraft mass, configuration, route and phases |
| production_route | Qualify one family/mode → execute its physical support process → verify task/event completion or actual coverage/custody hours → report one matched block |
| market_state | Completed physical support with a declared function, extent and acceptance, no cross-family equivalence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one exactly specified aircraft-support function |
| How much | One family/mode-specific block defined in section 1, never pooled across modes |
| How well | Actual recorded task, protection, custody or accepted-position criteria and outcome; no assumed safety certification or guaranteed avoided accident |
| How long or cycle | Actual complete task/event; fire standby one actual hour; hangar one actual 24-hour occupancy block; retain fractional time blocks and actual resource-restoration boundary |
| reference_flow_link | `support_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed specified aircraft-support service block |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | one family and service mode; actual task/aircraft/site/date; start/end/acceptance interfaces; actual duration and physical extent; provider/customer responsibility; fire standby protection area/capability/actual hours or event footprint/response/recovery and agent formulation/containment; non-repair upkeep work order and task/procedure/equipment with repair exclusion; hangar aircraft dimensions/occupied area/actual hours/climate/ventilation/security and supplier scope; towing aircraft mass/gear/tow mode/tug powertrain/load/actual route distance and all phases; actual meters/materials/species/receivers; shared facilities/assets and whole-life denominator; uncertainty |

Declare every required qualifier in the data package. Item(s) counts the explicitly defined service block, not a common unit of functional equivalence. One towing task cannot substitute for a standby hour, fire incident, upkeep task or hangar day. Customer aircraft size/mass and actual distance/extent/time remain mandatory. No passenger-km, cargo tonne-km, avoided loss or invoice value is inferred.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| support_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count one fully qualified family/mode block with cp_completion. Reference amount and unique output must agree; no pooling different functions or physical extents. |
| time_blocks | support_output | Number of items | Item(s) | For standby, count actual specified coverage hours divided by 1 hour; for hangar, actual aircraft custody hours divided by 24 hours. Preserve fractions and scope; fees, scheduled availability and entry counts are not actual duration. |
| fuel_mass | fire_diesel; upkeep_jetfuel; tow_diesel | Mass | kg | Use actual fuel grade and measured consumption; volume-to-mass requires measured/supported batch density at declared temperature. Do not substitute aircraft flight fuel for support-equipment consumption. |
| concentrate | fire_foam | Mass | kg | Measure concentrate and dilution water separately with actual formulation/mixing evidence. Premix volume is not concentrate mass; no generic foam-to-PFAS factor is allowed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Defined aircraft/support request and actual protection, work-order, hangar-custody or tow-release gate; retain actual upstream support inputs/assets |
| starting_condition_role | foreground_start |
| product_classification_scope | Four reviewed named support families with non-repair and other explicit exclusions |
| recursive_input_rule | Subcontracted same-function support enters once with exact provider boundary and physical extent, removing overlapping owned inputs/assets |
| upstream_dataset_requirement | Actual fuels/electricity/water/agent/material supply, specific support equipment/facilities and actual waste treatment |
| disclosure | Family/mode, actual interfaces/duration/extent, customer aircraft status/ownership, provider overlap, restoration/rework, agents/contamination, asset-life evidence and omissions |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_fire | Include actual aircraft-fire prevention/standby resources or the specified response/containment/restoration event. Allocate genuine readiness testing and support on measured coverage; do not invent an incident or foam discharge for an uneventful hour. Exclude air-sea rescue and unrelated public functions. | un-cpc-air-support |
| boundary_foam | Record actual concentrate, water, equipment test method, captured runoff and individual uncaptured chemicals. Current FAA guidance distinguishes AFFF/F3 systems and optional testing methods; it supplies no universal discharge factor. Actual batch analysis/formulation and fate are required before naming PFAS species; historical contamination is separate. | faa-arff-test |
| boundary_upkeep | Include only documented non-repair maintenance/upkeep, actual consumables and integral checks. Identify each task against the applicable aircraft procedure; general FAA ground-service descriptions do not classify every servicing activity into this PCR. Separate excluded cleaning/repair and independent refuelling, and do not manufacture the customer aircraft again. | un-cpc-air-support; faa-ground-service |
| boundary_hangar | Include declared covered-space custody and actual lighting/ventilation/heating/doors/security, facility upkeep and life shares. Separately contracted aircraft upkeep/towing/fire service enters once only if part of the declared package; a hangar location does not turn repairs into hangar service. | un-cpc-air-support |
| boundary_towing | Include equipment dispatch, hookup, actual tow/pushback, waiting, acceptance, empty return and attributable support. Match aircraft mass/configuration and tug mode to actual route. Customer propulsion/APU is separately disclosed with explicit inclusion if integral, not assigned to tug combustion; independent flight/taxi stays outside. | faa-ground-service |

## 6. Process Inventory Structure

Select one family/mode per dataset and instantiate its conditional process followed by the unique completion output. Different modes require separate scenarios; do not merge their count denominators. Each card is one exchange; add each other actual chemical, energy carrier, replacement, waste and emission separately with correct units and receiver. Missing data is not zero.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fire | Aircraft-fire prevention or response | conditional | Only when this family is selected, with actual applicable exchanges | foreground | One qualified reference block |
| upkeep | Non-repair aircraft upkeep | conditional | Only when this family is selected, with actual applicable exchanges | foreground | One qualified reference block |
| hangar | Specified hangar custody | conditional | Only when this family is selected, with actual applicable exchanges | foreground | One qualified reference block |
| towing | Specified aircraft towing | conditional | Only when this family is selected, with actual applicable exchanges | foreground | One qualified reference block |
| completion | Qualified service completion | required | Unique completed declared block | foreground | One qualified reference block |

### Process: Aircraft-fire prevention or response (`fire`)

#### Inputs

##### Product flows

###### Diesel fuel, unblended, aircraft-fire service (`fire_diesel`)

Conditional on actual ARFF vehicle or pump consumption of this fuel; identify standby checks, dispatch, response, return and system restoration separately. No default accident or foam discharge per standby block.

- Selected flow: Diesel fuel, unblended, aircraft-fire service
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Electricity, aircraft-fire station supply (`fire_power`)

Meter actual station lighting, communications, charging and support in the declared prevention/standby/event boundary; separate other municipal tasks and already supplied charging.

- Selected flow: Electricity, aircraft-fire station supply
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Water, supplied for aircraft firefighting (`fire_water`)

Conditional on actual firefighting, system testing or preparation water. Record measured withdrawal, tank change, water in concentrate and actual recovery; do not count premixed foam water twice. Identify actual water source.

- Selected flow: Water, supplied for aircraft firefighting
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fire_material`

###### Synthetic fluorine-free hydrocarbon-fire foam concentrate (`fire_foam`)

Conditional on this specific actual concentrate, with manufacturer/product formulation, batch and verified qualification. Measure concentrate separately from dilution water and premix. This is not an assumed universal agent; AFFF or another real formulation needs its own individually specified row and composition evidence.

- Selected flow: Synthetic fluorine-free hydrocarbon-fire foam concentrate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fire_material`

###### Polypropylene oil-absorbent pad (`fire_pad`)

Conditional on actual use of this specific absorbent in the declared response; measure clean pad supply mass separately from captured accident fuel and trace actual stock/reuse. Do not assign production of the already spilled customer fuel to the new absorbent.

- Selected flow: Polypropylene oil-absorbent pad
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Configured aircraft firefighting vehicle (`fire_vehicle`)

Attribute actual vehicle/pump/tank configuration manufacture, maintenance and renewals using supported whole-life service utilization; no full vehicle per event or reset of life shares each year.

- Selected flow: Configured aircraft firefighting vehicle
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

###### Configured aircraft-fire station building (`fire_station`)

Conditional on actual station use; identify floor area and construction scope and supported whole-life protected-service utilization; exclude unrelated rescue/public operations by records.

- Selected flow: Configured aircraft-fire station building
- Flow property / unit: Area / m2
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

#### Outputs

##### Waste flows

###### Collected aircraft-fire foam runoff (`fire_runoff`)

Conditional on actual captured foam runoff with measured composition and source. Track real receiver/treatment and boundary gate; distinguish pre-existing accident fuel/contamination from added agent and service releases. Uncaptured releases require individual chemical/receiving-compartment rows, not an assumed wastewater treatment path.

- Selected flow: Collected aircraft-fire foam runoff
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Spent polypropylene oil-absorbent pad (`fire_absorbent`)

Conditional on this actual spill-control material used during the declared aircraft-fire response. Record clean pad mass, captured contaminant and actual disposal separately; no assumed hazardousness or recycled credit.

- Selected flow: Spent polypropylene oil-absorbent pad
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fire_co2`)

Conditional on ARFF engine/pump combustion; use actual measured species or verified fuel/carbon evidence and real source boundary. Other actual chemicals require individual rows; no customer accident fire, aircraft voyage or avoided-fire credit.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Nitrogen monoxide, to air (`fire_no`)

Conditional on actual engine species release. Measure or apply independently verified source/duty/fuel-specific speciation, stating any NOx-equivalent convention; do not duplicate a NOx total in two species rows.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Nitrogen dioxide, to air (`fire_no2`)

Conditional on actual engine species release. Measure or apply independently verified source/duty/fuel-specific speciation, stating any NOx-equivalent convention; do not duplicate a NOx total in two species rows.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

### Process: Non-repair aircraft upkeep (`upkeep`)

#### Inputs

##### Product flows

###### Electricity, non-repair aircraft-upkeep equipment supply (`upkeep_power`)

Meter actual inspection, lubrication/servicing equipment, ground power and attributable support for the named non-repair task; no full hangar energy if already counted by the hangar supplier.

- Selected flow: Electricity, non-repair aircraft-upkeep equipment supply
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Polyol ester aircraft-turbine lubricating oil (`upkeep_oil`)

Conditional on actual routine lubrication/servicing using this identified oil grade. Record delivered and removed oil and replenishment; no engine overhaul, engine replacement or repair parts are included. Other actual lubricant chemistry requires its own row.

- Selected flow: Polyol ester aircraft-turbine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_upkeep_material`

###### Nitrogen, compressed, aircraft servicing (`upkeep_nitrogen`)

Conditional on actual nitrogen servicing, with supply pressure and delivered/recovered quantity. Distinguish cylinder supply from purchased gas and actual service venting; do not include an entire reusable cylinder per task.

- Selected flow: Nitrogen, compressed, aircraft servicing
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_upkeep_material`

###### Oxygen, compressed, aircraft servicing (`upkeep_oxygen`)

Conditional on actual oxygen replenishment within a declared non-repair servicing task; record grade, pressure and actual quantity under applicable aircraft procedures. This PCR supplies no safety instructions or authority to conduct the task.

- Selected flow: Oxygen, compressed, aircraft servicing
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_upkeep_material`

###### Jet A-1 fuel, non-repair functional check (`upkeep_jetfuel`)

Conditional on actual documented functional checks integral to the permitted non-repair task; identify fuel consumed, test duration and source. Exclude customer flight/taxi fuel, merely delivered fuel stock, engine repair testing and unrelated propulsion.

- Selected flow: Jet A-1 fuel, non-repair functional check
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Configured aircraft-upkeep test instrument (`upkeep_testset`)

Conditional on actual identified inspection/test instrument; use supported task utilization and useful life, calibration and actual renewal scope. Customer aircraft manufacture is not a service asset input.

- Selected flow: Configured aircraft-upkeep test instrument
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

#### Outputs

##### Waste flows

###### Used polyol ester aircraft-turbine lubricating oil (`upkeep_used_oil`)

Conditional on actual segregated removed oil; weigh and track actual receiver/treatment. No presumed discharge or automatic avoided virgin oil credit.

- Selected flow: Used polyol ester aircraft-turbine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`upkeep_co2`)

Conditional on documented non-repair functional-check combustion; use actual measured species or verified fuel/carbon evidence and real source boundary. Other actual chemicals require individual rows; no customer accident fire, aircraft voyage or avoided-fire credit.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

### Process: Specified hangar custody (`hangar`)

#### Inputs

##### Product flows

###### Electricity, aircraft-hangar supply (`hangar_power`)

Measure actual lighting, ventilation, door drives, monitoring and attributable common services for the fixed custody/space block. Separate metered customer equipment, upkeep supplier inputs and already counted shared fire station service.

- Selected flow: Electricity, aircraft-hangar supply
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Natural gas, hangar heating (`hangar_gas`)

Conditional on actual natural-gas heating; preserve metered gas composition/calorific basis, boiler efficiency boundary and actual climate/temperature requirement. Purchased heat or other actual fuel needs a separate row; never infer heating from floor area alone.

- Selected flow: Natural gas, hangar heating
- Flow property / unit: Energy / MJ
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Water, aircraft-hangar facility supply (`hangar_water`)

Conditional on actual facility sanitary or in-scope maintenance water; distinguish excluded aircraft cleaning/disinfection, fire-event water and customer servicing. Record actual source and receiving path.

- Selected flow: Water, aircraft-hangar facility supply
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Configured aircraft hangar building (`hangar_building`)

Identify building/door/floor configuration and actual covered footprint, supported construction life, area-time utilization and renewals. No new aircraft manufacture or full hangar construction per parked aircraft.

- Selected flow: Configured aircraft hangar building
- Flow property / unit: Area / m2
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

#### Outputs

##### Waste flows

###### Aircraft-hangar sanitary sewage (`hangar_sewage`)

Conditional on actual sanitary sewage attributable to this facility service; trace real sewer/treatment, not combined runoff or aircraft wash water. Add each other specific facility waste separately.

- Selected flow: Aircraft-hangar sanitary sewage
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`hangar_co2`)

Conditional on actual natural-gas boiler combustion; use actual measured species or verified fuel/carbon evidence and real source boundary. Other actual chemicals require individual rows; no customer accident fire, aircraft voyage or avoided-fire credit.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

### Process: Specified aircraft towing (`towing`)

#### Inputs

##### Product flows

###### Diesel fuel, unblended, aircraft tug (`tow_diesel`)

Conditional on actual combustion tug using this fuel; record loaded/empty positioning, hookup, actual tow, waiting and return. Customer aircraft propulsion/APU is separately disclosed and cannot become tug combustion.

- Selected flow: Diesel fuel, unblended, aircraft tug
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Electricity, aircraft-tug charging (`tow_power`)

Conditional on actual electric tug or charger; measure charger-side supply and losses once and match battery/cycle/aircraft mass. No conversion from electric tow count to diesel litres without independent physical evidence.

- Selected flow: Electricity, aircraft-tug charging
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Mineral hydraulic oil, aircraft tug (`tow_hydraulic`)

Conditional on actual hydraulic-system service; measure grade and actual consumed/replaced share over maintenance interval. Other oil grades or tyre/battery renewals require separate specific rows.

- Selected flow: Mineral hydraulic oil, aircraft tug
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Configured aircraft towing tractor (`tow_tug`)

Use actual towing mode, aircraft-mass capacity, powertrain and whole-life loaded/empty utilization to assign manufacturing, renewal and maintenance shares; supplier embodied assets are not repeated.

- Selected flow: Configured aircraft towing tractor
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

###### Configured aircraft towbar (`tow_bar`)

Conditional on actual towbar configuration/use; retain actual supported life and task share. Towbarless operations do not require this input.

- Selected flow: Configured aircraft towbar
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

#### Outputs

##### Waste flows

###### Used mineral hydraulic oil, aircraft tug (`tow_used_oil`)

Conditional on actual removed tug oil; preserve actual mass, segregated collection and real treatment. No forced oil change per completed tow.

- Selected flow: Used mineral hydraulic oil, aircraft tug
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`tow_co2`)

Conditional on tug combustion; use actual measured species or verified fuel/carbon evidence and real source boundary. Other actual chemicals require individual rows; no customer accident fire, aircraft voyage or avoided-fire credit.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Nitrogen monoxide, to air (`tow_no`)

Conditional on actual engine species release. Measure or apply independently verified source/duty/fuel-specific speciation, stating any NOx-equivalent convention; do not duplicate a NOx total in two species rows.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

###### Nitrogen dioxide, to air (`tow_no2`)

Conditional on actual engine species release. Measure or apply independently verified source/duty/fuel-specific speciation, stating any NOx-equivalent convention; do not duplicate a NOx total in two species rows.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange measured for the declared service block
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`

### Process: Qualified service completion (`completion`)

#### Outputs

##### Product flows

###### Completed specified aircraft-support service block (`support_output`)

One selected family and one physically qualified completed event/task or measured time block. Standby, response, upkeep, hangar custody and towing are not interchangeable outputs.

- Selected flow: Completed specified aircraft-support service block
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_family | Direct-meter actual mission/task/custody or readiness resources. Allocate shared support using documented causal duty, covered capacity/area-time, equipment runtime or task records and actual same-scenario output population. Do not use fee ratios or combine heterogeneous families as equivalent counts. |  |
| allocate_standby | For a readiness-hour dataset include attributable checks/training/maintenance that sustain the specified readiness over the observed coverage period, separating general flight training. Event datasets identify whether capacity/readiness share is included; do not charge the same station hour twice through both supplier and owned service. No assumed accident probability. |  |
| allocate_assets | Use supported whole-life actual service utilization to divide identified construction/manufacture and renewals. Retain area-time for buildings and appropriate duty/time/cycle use for equipment. All users/periods cumulative shares cannot exceed one life inventory; no annual reset, invented life or per-task whole asset. |  |
| allocate_pollution | Distinguish accident-origin fuel/fire/contamination from additional firefighting resources, captured transfers and incremental releases. Include actual service waste management once without inventing initial pollutant production burdens, avoided fire/pollution credit or automatic recycling substitution. |  |
| allocate_supplier | Purchased hangar, ARFF, towing or ground-power services must expose exact included utilities/assets/maintenance/response scope; reconcile owned rows and supplier coverage before summing. Keep customer aircraft propulsion and transferred fuel/gas custody separate from provider combustion. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | completion | support_output | Family-specific completion/coverage ledger | one family and service mode; actual task/aircraft/site/date; start/end/acceptance interfaces; actual duration and physical extent; provider/customer responsibility; fire standby protection area/capability/actual hours or event footprint/response/recovery and agent formulation/containment; non-repair upkeep work order and task/procedure/equipment with repair exclusion; hangar aircraft dimensions/occupied area/actual hours/climate/ventilation/security and supplier scope; towing aircraft mass/gear/tow mode/tug powertrain/load/actual route distance and all phases; actual meters/materials/species/receivers; shared facilities/assets and whole-life denominator; uncertainty | Reconcile actual completed named tasks/events with acceptance records. Standby count is measured qualified coverage hours divided by 1 hour; hangar count is actual identified-aircraft custody hours divided by 24. Preserve fractions, aircraft footprint, actual capability and all task phases. No fee or entry-count proxy. | Item(s) | each task/event or actual coverage/custody interval | complete observed same-scenario service period | actual selected function and responsibility gates | per reference flow | acceptance log; work order; dispatch/coverage record; timestamps; population reconciliation |
| cp_energy | fire; upkeep; hangar; towing | fire_diesel; fire_power; upkeep_power; upkeep_jetfuel; hangar_power; hangar_gas; tow_diesel; tow_power | End-use/source-specific meter ledger | source/grade; meter start/end; actual fuel deliveries/stock changes; temperature/density or gas calorific basis; kWh/MJ/kg; actual phase time/distance/load; charging losses; supplier overlap; shared support; actual blocks | Meter each actual energy exchange and trace vehicle, equipment, boiler, station or space end use. Reconcile inventories and observed actual same-scenario blocks; cover idling, waiting, return and restoration where in scope. Retain actual densities/calorific values with units and uncertainty. Customer aircraft fuel delivery is not service combustion; actual integral functional checks are separately identified. | kg; kWh; MJ | each actual phase and representative observation period | all in-scope direct and shared energy | actual equipment/space/source | per reference flow | calibrated meters; fuel balance; phase logs; actual allocation; supplier scope |
| cp_fire_material | fire | fire_water; fire_foam | Actual agent/water/containment ledger | prevention/standby/event; actual product manufacturer/formulation/batch; kg concentrate; m3 water/premix; actual dilution and density; test method; tank stock/recovery; actual captured/uncaptured volume; sampled species and receiving compartment | Measure actual concentrate supply/use and source water separately, correcting stock and recovery; state premix basis without double water. Use actual specification/testing/composition evidence; fluorine-free label does not prove absence of legacy contamination. If a specific chemical is identified as released, create its own measured species/receiver row; no aggregate PFAS or generic foam discharge factor. | kg; m3 | each actual use/test/event and stock period | actual selected fire-service boundary | actual equipment and product batch/site | per reference flow | product/batch records; actual tests; mass/water balance; containment and treatment tickets |
| cp_upkeep_material | upkeep | upkeep_oil; upkeep_nitrogen; upkeep_oxygen | Non-repair work-order material ledger | aircraft/configuration; named procedure/work order; material grade/composition; delivered/recovered kg; pressure/temperature; actual duration; task completion; repairs/cleaning excluded | Measure each actual task-specific supplied material. Identify retained product, removed waste and venting separately with actual composition/pressure evidence; cylinders and instruments use actual supported lifetime share. Require manufacturer/task applicability and flag repair work for exclusion, not generic upkeep inclusion. | kg | each task/material transfer | whole permitted non-repair work order | actual aircraft/support provider | per reference flow | work order; actual procedure; weigh/stock/pressure evidence; completion |
| cp_material | fire; hangar; towing | fire_pad; hangar_water; tow_hydraulic | Specific facility/tug material ledger | source; exact grade; actual kg/m3; issue/return; replacement interval; actual family task/time share; supplier scope | Measure actual single material and trace actual use or renewal, assigning the supported same-scenario share; never require an invented material use per block. Add each other actual material with its own row. | kg; m3 | each transfer/maintenance period | actual selected service period | actual facility/equipment | per reference flow | purchase/stock/meter/maintenance records; actual attribution |
| cp_assets | fire; upkeep; hangar; towing | fire_vehicle; fire_station; upkeep_testset; hangar_building; tow_tug; tow_bar | Whole-life support-asset ledger | actual configuration/BOM/construction boundary; ownership/provider; manufacture; renewals/maintenance/calibration; actual task cycles/runtime or area-time; supported life and utilization; shared roles; cumulative allocations | Use actual asset-specific construction/manufacture and supported whole-life utilization; attribute measured block share while conserving all users/periods. Separate initial/renewal inventory and supplier-included assets. Customer aircraft manufacture is outside support-asset numerator; missing life/denominator requires explicit review, never a convenient assumed life. | Item(s); m2 | each allocation and asset/renewal update | supported whole life and actual observation period | identified support vehicles/equipment/buildings | per reference flow | BOM/construction; actual utilization; life evidence; cumulative share conservation |
| cp_waste | fire; upkeep; hangar; towing | fire_runoff; fire_absorbent; upkeep_used_oil; hangar_sewage; tow_used_oil | Specific waste/receiver ledger | exact stream; actual kg/m3; composition/contamination; source task; pre-existing vs introduced pollutant; capture/transfer gate; treatment/disposal receiver and technology; provider overlap | Weigh/meter each actual stream and trace real receiver/treatment. Record actual fire runoff capture and each individual uncaptured chemical/compartment; pre-existing accident contamination is distinguished from service additions without claiming avoided burden. Do not infer sewer, hazardous classification, recycling or complete destruction. | kg; m3 | each transfer/release period | all attributable actual streams | actual task/site and treatment gates | per reference flow | transfer/receiver tickets; samples; mass/water balance; treatment evidence |
| cp_release | fire; upkeep; hangar; towing | fire_co2; fire_no; fire_no2; upkeep_co2; hangar_co2; tow_co2; tow_no; tow_no2 | Source/species-specific release ledger | actual source/fuel/engine/boiler/duty; carbon/oxidation; species mass; NOx equivalent and speciation; receiving air; applicable measured method/factor; uncertainty; accident vs additional service emissions | Measure each species or use verified actual source/duty/fuel-specific methods with explicit units/assumptions. Do not duplicate NOx total as NO and NO2 or merge aircraft accident combustion with service engine releases. Each other real combustion, vent, refrigerant or agent species needs its own chemical/compartment row; unknown is not zero. | kg | each actual source operation and representative monitoring | all represented in-scope sources | actual source and receiver | per reference flow | measurement; source/fuel logs; verified factors; carbon/species balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| family_attribution | all inventory rows | Assign actual individual exchanges to the declared family/mode and actual output population; divide attributable resources by completed same-scenario blocks. Reference output is exactly 1 Item(s), never a family-average count. | cp_completion; actual meters | individual exchange per reference flow |  |
| time_attribution | support_output | Standby blocks equal measured same-capability coverage hours divided by 1 hour; hangar blocks equal actual one-aircraft custody hours divided by 24 hours, retaining fractions and footprint. Do not convert fees into time. | cp_completion | actual time-block quantity |  |
| asset_attribution | fire_vehicle; fire_station; upkeep_testset; hangar_building; tow_tug; tow_bar | Apply supported actual block share of asset whole-life utilization to actual construction/manufacture and distinct renewals; conserve cumulative shares and remove supplier duplication. | cp_assets; cp_completion | asset amount per reference flow |  |
| species_accounting | fire_co2; fire_no; fire_no2; upkeep_co2; hangar_co2; tow_co2; tow_no; tow_no2 | Use actual species mass or independently verified source/duty/fuel-specific evidence with unit and oxidation/speciation convention documented in the dataset. No numerical emission factor or duty default is provided. | cp_release; cp_energy | individual species per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_function | support_output | Require all family/mode-specific functional extent, duration, aircraft configuration and completion conditions; no cross-family equivalence or PCR safety approval. | cp_completion |
| quality_fire | fire | Actual product/agent formulation, test method, containment and composition/fate evidence are needed. No presumed PFAS species absence/presence or accidental-fire frequency. | cp_fire_material; cp_waste |
| quality_upkeep | upkeep | Document a non-repair work order and applicable actual task procedure. Exclude repair/cleaning and separate transferred customer materials from actual service consumption. | cp_upkeep_material |
| quality_lifecycle | all asset rows | Support exact equipment/facility numerator, actual utilization and whole-life denominator with cumulative conservation; unsupported life prevents complete lifecycle claims. | cp_assets |
| quality_gaps | all inventory rows | Disclose missing identities, actual energy/material/agent/species, accident contamination distinction, waste receiver and noise/ecological method scope. Missing data and non-characterized impacts are not zero. | cp_energy; cp_waste; cp_release |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_output | Unique support_output product output must equal 1 Item(s) and match one exact completed task/event or actual coverage/custody block. Separate standby/event, task types and families. |  |
| validate_scope | Enforce non-repair and cleaning/disinfection/brokerage/air-sea-rescue/flight-training/runway-cleaning-snow exclusions. A hangar location cannot change excluded repair into covered support. | un-cpc-air-support |
| validate_sources | Separate actual support-equipment combustion, integral non-repair checks and customer flight/APU/accident sources. Require actual agent formulation and separately quantified chemical releases; do not infer PFAS or avoided-fire/pollution benefits. |  |
| validate_atomic_life | Require one specific exchange per card with its own correct property/unit, actual applicability and receiver; conserved life shares and supplier coverage. Unknown identities/denominators remain explicit and prevent unsupported completeness claims. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | other_aircraft_support |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | One compatible aircraft-fire, non-repair upkeep, hangar or towing component with the same function/mode, physical extent and actual interfaces |
| excluded_use | Cross-family benchmarks, whole aircraft flight/lifetime, repair/cleaning, rescue, training, airport-wide burden or implied safety/airworthiness authorization and avoided-fire claims |
| required_metadata | one family and service mode; actual task/aircraft/site/date; start/end/acceptance interfaces; actual duration and physical extent; provider/customer responsibility; fire standby protection area/capability/actual hours or event footprint/response/recovery and agent formulation/containment; non-repair upkeep work order and task/procedure/equipment with repair exclusion; hangar aircraft dimensions/occupied area/actual hours/climate/ventilation/security and supplier scope; towing aircraft mass/gear/tow mode/tug powertrain/load/actual route distance and all phases; actual meters/materials/species/receivers; shared facilities/assets and whole-life denominator; uncertainty |
| required_quality_disclosure | Task/aircraft/time representativeness, actual meters/agent and species evidence, pre-existing contamination, supplier/customer ownership, asset-life/receiver gaps and impact-method omissions |
| update_trigger | Changed family/mode/task/aircraft/route, readiness capability, hangar state/energy, agent formulation/test/containment, provider scope, real equipment configuration or life evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-air-support | official_guidance | UNSD CPC3.0 67630 explanatory note, shared draft PDF pp377–378. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67630 | Four named families and explicit exclusions; open residual title does not establish universal coverage |
| faa-ground-service | official_guidance | FAA AC00-34B, Aircraft Ground Handling, Servicing, and Marshalling, 17 July 2024, especially section13. https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_00-34B.pdf | Task/aircraft/equipment-specific servicing and towing context; not an emission factor, global safety rule or classification of all ground operations |
| faa-arff-test | official_guidance | FAA Part139 CertAlert26-03, AFFF and Synthetic Fluorine Free Foam testing, 5 August 2026. https://www.faa.gov/airports/airport_safety/certalerts/part_139_certalert_26_03 | Actual AFFF/F3 equipment and testing distinctions; no adoption of US intervals, universal formulation or quantitative release factors |
