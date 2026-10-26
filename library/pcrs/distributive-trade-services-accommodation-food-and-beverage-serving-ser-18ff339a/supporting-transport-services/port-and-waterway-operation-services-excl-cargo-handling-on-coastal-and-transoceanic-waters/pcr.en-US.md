---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.port-and-waterway-operation-services-excl-cargo-handling-on-coastal-and-transoceanic-waters
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Coastal and transoceanic port and waterway operation services, excluding cargo handling

## 1. Scope and Applicability

Operation of coastal/transoceanic wharves, docks, piers, quays and associated marine terminals including passenger facilities; shipping services provided by locks, boat lifts, weirs and sluices; and lighthouse, lightship/light-vessel, buoy, channel-marker and similar navigation-aid services. Each dataset fixes one actual function and physical service extent. Inland-waterway operations are another classification. [Source: `un-cpc-coastal-port`]

Exclude container/non-container stevedoring (67110/67190), port storage/warehousing (672), coastal pilotage and tug-assisted docking/undocking (67521), and customer marine transport. Actual navigation-maintenance dredging and facility maintenance are supporting operations attributable to the declared service, not extra generic port outputs. Distinguish initial capital dredging, later maintenance, sediment handling and unrelated development. [Source: `un-cpc-coastal-port`]

| service_family | Counted block | Required physical extent |
| --- | --- | --- |
| port_berth | One completed berth/facility-use block | Identify wharf/dock/pier/quay, coastal/oceanic setting, vessel dimensions/draft, occupied berth length/time, access gates and actual completion; exclude cargo handling, storage and pilot/tug berthing. |
| passenger_terminal | One completed defined passenger-terminal service block | Declare actual passenger population, facility area, transfer/processing function, duration and acceptance; passenger transport and baggage/cargo handling are separate. |
| lock_lift | One completed specified lockage or boat-lift cycle | Declare chamber/lift, vessels and dimensions, head, actual water/energy cycle, waiting/retry scope and start/end water-level interfaces; a cycle and one vessel-share of it are distinct definitions. |
| weir_sluice | One completed specified navigation-water-control block | Fix navigation water-level/flow service, opening/cycle or exact availability duration, geographic extent and other water-management functions; no undifferentiated whole-dam allocation. |
| navigation_aid | One completed defined aid-availability block | Fix lighthouse/lightship/buoy/marker ID, exact coverage, duty, availability start/end and duration, maintenance/callout coverage; never equate an aid-hour to a berth call. |

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.port-and-waterway-operation-services-excl-cargo-handling-on-coastal-and-transoceanic-waters |
| classification_refs | CPC 3.0 67511; exact |
| covered_products | Specified coastal/oceanic port, passenger-facility, navigation-structure and navigation-aid operation blocks |
| excluded_products | Cargo handling; warehousing; pilot/tug berthing; inland-waterway service; customer voyage and unrelated development |
| representative_product | One completed declared marine berth-use block with vessel size, berth length and actual occupied duration |
| production_route | Define service gates/extent → operate actual port/waterway facility → include attributable maintenance and support → verify completion/availability |
| market_state | Completed measured facility service with declared quality/availability and ownership boundary; fee or ship arrival alone is not an extent |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the specified coastal/oceanic port or waterway facility function |
| How much | One completed block with exact service-family physical extent from section 1 |
| How well | Actual vessel/access, water-level, passage or aid-availability specification met and evidenced; no universal service-grade assumption |
| How long or cycle | Exact actual start/end and duration or lock/lift operating cycle; standby/retry and support attribution disclosed |
| reference_flow_link | `port_block` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Specified completed coastal port/waterway service block |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | one service family and block definition; exact physical extent and actual completed population; coastal/transoceanic location; facility/aid/channel ID and coverage; actual interfaces/timestamps/duration; vessel/passenger dimensions and population when applicable; berth length/time or lock/lift head/cycle or navigation-aid availability; actual water source/return; asset ownership; operator/ship/provider split; cargo/storage/pilot/tug exclusions; shore energy and commodity-delivery boundary; maintenance dredging area/volume/mass/contamination/destination; asset life and allocation; actual quality/availability limits; geography and period |

Item(s) counts one explicitly specified completed function, not an equivalent universal port call. Distinguish vessel-size/berth-time service, passenger-facility extent, lockage/head/water cycle and aid coverage/availability duration. Separate unlike functions and extents into different datasets; retain measured service population and any justified shared fractions. Neither gross tonnage, fee, tonnes of cargo nor an aid-year silently substitutes for the declared extent.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| block_extent | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Use cp_activity to count completed homogeneous service blocks with actual physical extent; components and whole calls cannot both count as independent full service. |
| sediment_basis | dredging; dredged_sand; copper_silt | Volume; Mass | m3; kg | Keep in-situ/bulk volume, wet mass, dry mass and water content separate. Convert only using actual measured sediment density/moisture for the same material and location. |
| lock_water | sea_abstraction; river_abstraction; water_sea | Volume | m3 | Measure actual abstraction, recirculation and return by source/receiving compartment; gross lock throughput and vessel displacement are not consumptive freshwater use. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing coastal/oceanic facility and customer vessel/passengers at the declared interface; actual port assets/utility upstream burdens are retained |
| starting_condition_role | foreground_start |
| product_classification_scope | Declared coastal/transoceanic port/waterway operation function excluding handling/storage/pilotage/tug berthing |
| recursive_input_rule | Same-function subcontracted support enters once with exact extent and supplier coverage; remove overlapping port-owned operations/assets |
| upstream_dataset_requirement | Actual energy/materials, marine facility/aid construction, maintenance/dredging, sediment transport/treatment/placement and waste inventories |
| disclosure | Actual function/extent, owners/providers, customer vessel and shore-energy split, capital/maintenance dredging, sediment status/destination, hydraulic balance and missing evidence |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_port | Include actual facility power, hydraulic operations, lighting, navigation aids, passenger support, drainage, standby and attributable cleaning/maintenance. Select actual routes; a buoy does not inherit a whole passenger terminal. | un-cpc-coastal-port |
| boundary_vessel | Separate customer vessel engines, cargo equipment, rail/road and port-owned maintenance/light vessels by actual activity and ownership. EPA source-sector guidance supports separating sources; it does not assign all harbor emissions to a port service. Meter shore supply and water/fuel delivery separately from port overhead. | epa-port-sources |
| boundary_dredging | Distinguish initial capital works and actual navigation maintenance. Characterize each dredged stream and actual transport, containment, treatment/reuse/placement destination before modelling its fate. EPA testing guidance supports characterization and route scrutiny, not assumed clean status or universal legal approval. | epa-sediment |
| boundary_releases | Screen actual dredging disturbance, contaminant mobilization, oil leaks, air emissions and water returns. Transferred sediment/waste is not automatically an elementary emission; sediment total contaminant content is not released mass. Habitat/seabed changes, turbidity and underwater noise require explicit site evidence and an appropriate impact method; chemical-flow cards alone cannot establish complete ecological coverage. |  |

## 6. Process Inventory Structure

Instantiate the selected service-family operation with its actual equipment and support. Each card is one physical/chemical exchange; add actual other fuels, chemicals, coatings, batteries, construction types, sediments and pollutant species separately. Dredging may be supplier excavation-only or owned work: use the matching actual inventory and never duplicate supplier fuel/equipment, sediment transport or treatment. Clean sand and contaminated silt are separate conditional streams; neither represents all marine sediments.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| port_operation | Operate the specified coastal port/waterway service | required | One declared function/extent and actual row conditions | foreground_production | per reference flow |

### Process: Operate the specified coastal port/waterway service (`port_operation`)

#### Inputs

##### Product flows

###### Marine terminal operational electricity (`terminal_power`)

Meter actual berth/terminal lighting, controls, passenger facilities, pumps and operator support. Separate electricity supplied to customer vessels and excluded cargo-handling equipment.

- Selected flow: Electricity, alternating current, marine-facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Navigation lock and lift electricity (`lock_power`)

Conditional on actual lock gates, navigation weirs/sluices, boat lifts or water-recovery pumps; measure specific cycles/head/duty and avoid overlap with terminal_power.

- Selected flow: Electricity, alternating current, marine-facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Marine navigation-aid electricity (`aid_power`)

Conditional on actual lighthouse, buoy or light-vessel electrical operation; identify power source, duty, battery losses and coverage interval. Onsite solar equipment burdens are not assumed zero.

- Selected flow: Electricity, alternating current, marine-facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Port-owned operation diesel (`diesel`)

Conditional on actual port-owned generator, light-vessel or maintenance craft using this fuel. Customer ship fuel is outside this row; different marine grades/blends require specific separate rows.

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

###### Terminal cleaning water (`water`)

Conditional on actual cleaning/sanitary support; exclude water delivered as a commodity to vessels and distinguish natural lock water from purchased tap water.

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

###### Sodium carbonate cleaner (`cleaner`)

Conditional on actual use of this named chemical; every other cleaner/coating constituent or formulated product needs its own specific identity and quantity.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Navigation gate hydraulic oil (`hydraulic_oil`)

Conditional on actual gate/lift hydraulic maintenance; reconcile issues, stock, recovered oil and measured leaks. Other hydraulic fluids require separate rows.

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

###### Port mechanical lubricating oil (`lubricant`)

Conditional on actual port/aid machinery lubrication; exclude lubrication already included in a subcontracted maintenance inventory.

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

###### Mechanical bucket maintenance dredging (`dredging`)

Conditional on this actual outsourced excavation route only. Specify excavation-only coverage and measured in-situ volume; add actual sediment transport, placement and treatment separately. A supplier covering those stages replaces their overlapping rows. Other dredging methods require a different specific service.

- Selected flow: Mechanical bucket maintenance dredging service
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_dredging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dredging`
- Sources:

###### Marine quay construction share (`quay_share`)

Conditional on actual quay/wharf/pier use; fix construction type, exact geometry and length and supported vessel-size/occupancy utilization; do not assume one metre is equal across structures.

- Selected flow: Configured marine quay structure
- Flow property / unit: Length / m
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Passenger terminal construction share (`terminal_share`)

Conditional on actual passenger-facility service; identify floor and shared-area allocation, excluding unrelated retail or cargo facilities.

- Selected flow: Configured marine passenger terminal building
- Flow property / unit: Area / m2
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Navigation lock construction share (`lock_share`)

Conditional on actual lockage; specify chamber, gate, head, hydraulic configuration and whole-life supported service cycles.

- Selected flow: Configured marine-navigation lock
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Boat-lift manufacture share (`lift_share`)

Conditional on actual boat-lift service; identify rated/actual lifted vessel extent, mechanism and supported service-life utilization.

- Selected flow: Configured coastal boat lift
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Navigation weir construction share (`weir_share`)

Conditional on actual navigation-water-level regulation; separate flood-control, irrigation, ecological and power functions using explicit supported shares.

- Selected flow: Configured coastal-navigation weir
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Navigation sluice construction share (`sluice_share`)

Conditional on actual navigation sluice use; specify opening/cycle/water-level service, not an assumed full port asset per passage.

- Selected flow: Configured coastal-navigation sluice
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Lighthouse construction share (`lighthouse_share`)

Conditional on actual coastal navigation aid; define structure, light duty, coverage area, required availability interval and supported lifetime service.

- Selected flow: Configured marine lighthouse
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Navigation buoy manufacture share (`buoy_share`)

Conditional on actual buoy/channel marker; specify material, mooring, power and actual maintenance/replacement scope.

- Selected flow: Configured marine navigation buoy
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Light-vessel construction share (`lightship_share`)

Conditional on actual lightship service; identify hull/equipment inventory and actual availability/operation denominator, excluding customer vessel manufacture.

- Selected flow: Configured navigation light vessel
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

##### Elementary flows

###### Seawater withdrawn for navigation lock operation (`sea_abstraction`)

Conditional on actual seawater intake for declared lock/weir operation; measure by hydraulic cycle or calibrated flow, with salinity/source and reuse distinguished from freshwater.

- Selected flow: Water, seawater, withdrawn from sea
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_lockwater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lockwater`
- Sources:

###### River freshwater withdrawn for navigation operation (`river_abstraction`)

Conditional on actual river freshwater used by coastal navigation structures; record source, head and reuse. Do not substitute total vessel displacement for water withdrawal.

- Selected flow: Water, freshwater, withdrawn from river
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_lockwater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lockwater`
- Sources:

#### Outputs

##### Product flows

###### Specified completed coastal port/waterway service block (`port_block`)

One block fixes exactly one function and actual physical extent from the service-definition table; berth call, terminal visit, lockage and navigation-aid availability are not count-equivalent.

- Selected flow: Specified completed coastal port/waterway service block
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

###### Used gate hydraulic oil (`used_hydraulic`)

Conditional on actual segregated hydraulic oil removed for treatment; weigh and identify destination. Lubricating-oil waste is another specific stream if present.

- Selected flow: Used mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Contaminated marine-facility washwater (`washwater`)

Conditional on actual collected washwater; record composition, volume and treatment destination. Direct marine discharge needs separate substance-specific release evidence rather than a wastewater-treatment assumption.

- Selected flow: Contaminated marine-facility washwater
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Non-hazardous dredged marine sand transfer (`dredged_sand`)

Conditional on actual tested sand transferred to a specific placement/reuse/treatment route; record wet/dry mass, water content and composition. Do not infer non-hazardous status from appearance. Different sediment streams require separate rows.

- Selected flow: Dredged marine sand, characterized non-hazardous
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_dredging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dredging`
- Sources:

###### Copper-contaminated dredged silt transfer (`copper_silt`)

Conditional on an actual separately characterized copper-contaminated silt stream. Retain tests and actual treatment/containment route; total copper in transferred sediment is not a dissolved marine release. Other contaminants/streams require their own specific characterization.

- Selected flow: Dredged marine silt contaminated with copper
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_dredging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dredging`
- Sources:

##### Elementary flows

###### Navigation-operation water returned to sea (`water_sea`)

Conditional on actual return to the sea; measure destination/volume/salinity, separating recirculation, leakage, losses and returns to other compartments. Gross lock throughput does not equal consumptive freshwater use.

- Selected flow: Water, returned to sea
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_lockwater.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lockwater`
- Sources:

###### Port-owned fossil carbon dioxide release (`fossil_co2`)

Conditional on actual port-owned fossil combustion; measure or use verified fuel-carbon/oxidation evidence. Separate customer vessel exhaust, provider emissions already included and upstream grid emissions.

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

###### Copper released to marine water (`copper_sea`)

Conditional on actually established copper release from disturbance/leaching; require measured or validated fate evidence and marine receiving compartment. Sediment total content and moved waste mass alone do not establish released copper.

- Selected flow: Copper, to seawater
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
| allocate_function | Subdivide berth, terminal, hydraulic and aid functions before attribution. Use actual berth length-time/vessel dimensions, passenger-facility use, lock head/cycle/water activity or aid coverage/availability as causal drivers; retain failed cycles and standby. Unlike functions/counts are not pooled by fees or ship calls. |  |
| allocate_assets | Maintain persistent quay/terminal/lock/lift/weir/sluice/aid asset ledgers with supported whole-life service denominators. Allocate only actual navigation shares of multipurpose structures; no whole dam or whole aid fleet per vessel. Observed-period accounting distributes only the attributed period share; lifetime fractions across all users/periods cannot exceed one or reset annually. Unknown life/denominator requires review and sensitivity. |  |
| allocate_dredging | Attribute actual maintenance campaign by the supported channel/berth service population and interval benefited, with actual volume/material/destination. Initial capital dredging belongs to construction and cannot be repeated each maintenance period. Multipurpose dredging and reusable sediment require traced shares and actual routes; no automatic avoided-disposal or virgin-material credit. |  |
| allocate_scope | A supplier inventory replaces covered operations/assets once. Customer fuel, shore electricity sold as energy, cargo/passengers and navigation fees are not co-products of this support count. Split handling/storage/pilot/tug services and other water-management uses with transparent boundary reconciliation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_activity | port_operation | port_block | Completed function and extent ledger | family; facility/aid/channel; vessel/passenger population; dimensions/draft; berth length/time; lock/lift head/cycle; weir/sluice regulation; aid coverage/duty/availability; actual start/end; acceptance; exclusions | Match actual facility logs and interfaces to one defined block from section 1. Count homogeneous completed blocks only; retain actual extent, incomplete/retry activity and component/whole-block relationships. | Item(s) | each block or actual availability interval | full declared service and assigned support | all actual owners/operators/providers | per reference flow | berth/lock/aid logs; timing; coverage; acceptance; population reconciliation |
| cp_energy | port_operation | terminal_power; lock_power; aid_power | End-use electrical ledger | meter; kWh; supply/voltage; terminal loads; gate/lift/pump cycles/head; aid duty; standby; charging/battery loss; shore delivery; provider coverage | Submeter actual activities or reconcile measured equipment duty with total meters. Separate customer shore supply, cargo equipment and actual provider-covered energy; do not estimate lock energy from ship count alone. | kWh | each operation/meter interval | all included operation and standby | actual marine facilities/aid sites | per reference flow | calibrated meters; duty/cycle logs; shore/provider reconciliation |
| cp_fuel | port_operation | diesel | Port-owned fuel balance | craft/generator ID; fuel grade; actual kg; receipts/stocks; duty; density/temperature if converted; customer bunker delivery | Measure actual port-owned operation fuel and reconcile stocks; distinguish light-vessel/maintenance craft from customer vessels and excluded tug/pilot tasks. Supplier-covered fuel is not repeated. | kg | each actual use and stock period | full attributable operation | identified operator equipment | per reference flow | fuel logs; stock balance; actual vessel/equipment duty |
| cp_material | port_operation | water; cleaner; hydraulic_oil; lubricant | Specific material balance | individual substance; kg/m3; grade/composition; issue/return; stock; cleaning/maintenance event; actual leaks; water delivered to ship | Meter/weigh each specific exchange and reconcile stocks/returns. Keep ship commodity supply and natural hydraulic water separate from facility consumption. | kg; m3 | each actual event/stock period | all attributable maintenance and cleaning | actual port/aid assets | per reference flow | material records; calibrated weighing/meters; maintenance balance |
| cp_assets | port_operation | quay_share; terminal_share; lock_share; lift_share; weir_share; sluice_share; lighthouse_share; buoy_share; lightship_share | Persistent marine asset ledger | actual asset ID/type/geometry; m/m2/items; construction/manufacture; initial capital dredging; supported whole-life utilization; actual navigation/other-purpose share; cumulative prior fraction; period fraction; renewals | Match real assets to upstream inventories and supported whole-life service denominators. Keep initial and maintenance boundaries distinct, allocate only actual navigation service share and conserve cumulative fractions across all periods/users. Unknown life/denominator remains under review. | m; m2; Item(s) | each allocation and asset/maintenance update | supported whole life and declared observation interval | identified marine facilities/aid assets | per reference flow | engineering/asset records; actual utilization; supported life; multipurpose/cumulative reconciliation |
| cp_dredging | port_operation | dredging; dredged_sand; copper_silt | Dredging and sediment fate ledger | campaign; capital/maintenance; source area; in-situ volume; measured wet/dry mass/moisture/density; grain size; specific contaminant tests; supplier coverage; actual transport/distance; treatment/placement/reuse site; material destination; benefited service population/period | Use actual surveys/weighing and representative sediment characterization with provenance. Trace every material stream to actual transport and destination, retain treatment/placement records and avoid supplier overlap. Sediment tests do not establish release fraction or ecological approval by themselves. | m3; kg | each campaign/material transfer | actual campaign and supported benefited service interval | source channel/berth and all actual destinations | per reference flow | surveys; test reports; transport/placement tickets; wet/dry balance; supplier inventory |
| cp_lockwater | port_operation | sea_abstraction; river_abstraction; water_sea | Source-resolved hydraulic balance | source/receiving compartment; salinity; head; chamber/ship displacement; actual gate/pump cycle; measured intake/return; recirculation; actual freshwater loss | Measure actual flows or use validated hydraulic geometry/cycle balances with actual head and losses. Keep seawater, freshwater, recirculation and receiving destinations distinct; do not infer consumption from gross throughput. | m3 | each hydraulic cycle and monitoring interval | all represented navigation-water operation | actual coastal structure and water sources | per reference flow | calibrated flow records; geometry/head; source/return balance |
| cp_waste | port_operation | used_hydraulic; washwater | Specific maintenance waste ledger | stream; kg/m3; composition; event; recipient; actual treatment; leak distinction | Weigh/meter each collected stream and trace actual treatment. Environmental oil/chemical leakage requires its own substance and receiving-compartment evidence. | kg; m3 | each transfer/discharge period | all actual attributable maintenance | facility and treatment gate | per reference flow | waste tickets; composition; treatment and material balance |
| cp_release | port_operation | fossil_co2; copper_sea | Species/compartment release ledger | actual pollutant species; kg; air/seawater compartment; fuel consumed; carbon/oxidation; sediment mobilization/leaching measurements; fate model; provider/customer boundary; uncertainty | Use actual emissions measurements or a reviewed source-specific method. For marine contaminants distinguish total content, particulate transport, dissolved release and actual bioavailability assumptions. Do not assume all transferred copper is emitted; screen other actual species and ecological mechanisms separately. | kg | each actual source/event and representative monitoring | full represented emitting operation | actual operator/source and receiving compartment | per reference flow | measurements; validated scope/fate; fuel and material reconciliation; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| block_attribution | all inventory rows | Assign measured operation/support to one homogeneous function/extent, then divide by actual completed blocks with standby/retries included in attributed totals. Reference output is exactly 1 Item(s). | cp_activity; attributable measured totals | exchange amount per reference flow |  |
| maintenance_attribution | dredging; dredged_sand; copper_silt | Allocate actual campaign quantities to the documented channel/berth service interval/population benefited. Preserve material identity, actual volume/dry-wet mass conversion and destination; do not repeat initial capital work each period. | cp_dredging; cp_activity | actual campaign amount per reference flow |  |
| asset_attribution | quay_share; terminal_share; lock_share; lift_share; weir_share; sluice_share; lighthouse_share; buoy_share; lightship_share | Apply the supported block fraction to actual upstream construction/manufacture and conserve cumulative navigation/other-purpose shares; period observations distribute only the already attributed period share. | cp_assets; cp_activity | asset amount per reference flow |  |
| source_fate | fossil_co2; copper_sea | Use actual fuel-carbon/oxidation or measured/validated marine-release evidence for the specific source. Sediment contaminant content is an input to fate analysis, not an automatic elementary emission. | cp_release; cp_fuel; cp_dredging | specific release per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_extent | port_block | Require one exact function, geography, extent, duration/cycle and completed population; unlike berth/passenger/lock/aid blocks cannot be pooled by count. | cp_activity |
| quality_sediment | dredging; dredged_sand; copper_silt | Characterize actual sediment by source, grain size, contamination, wet/dry basis and destination. Uncharacterized sediment is not assumed clean, reusable or automatically harmless. | cp_dredging; epa-sediment |
| quality_lifecycle | all asset rows | Support life/service denominators, navigation-only shares, initial/maintenance distinction and conserved allocation; missing life/upstream evidence prevents complete lifecycle claims. | cp_assets; cp_dredging |
| quality_ecology | all inventory rows | Disclose chemical/species, hydraulic, seabed/habitat/turbidity/noise evidence gaps and actual impact-method coverage; a chemical inventory is not complete ecological assessment. | cp_release; cp_lockwater; site evidence |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_block | Require unique port_block output equal to 1 Item(s) with one physically defined function and actual extent; reject generic port-call or fee equivalence across service families. |  |
| validate_scope | Verify coastal/transoceanic function, customer/provider/owner interface and exclusions for cargo, storage, pilotage/tug berthing and inland-waterway services. | un-cpc-coastal-port |
| validate_sediment | Reconcile dredging campaign volumes/masses, tests, transport and actual destinations once; reject assumed clean material, omitted placement/treatment and conversion of total contaminant content directly to release. | epa-sediment |
| validate_sources_assets | Separate port-owned fuel, customer vessel exhaust, shore-energy delivery and upstream grid/provider emissions. Check hydraulic sources/returns, atomic flows, life denominators and cumulative shares at most one; retain identity/evidence/ecological coverage gaps explicitly. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | coastal_port_waterway_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Specified coastal/oceanic facility-service component with compatible function, extent, ship/passenger and maintenance scope |
| excluded_use | Complete voyage/port ecosystem footprint, cargo/storage/pilot/tug footprint, inland service or unqualified count-based comparison |
| required_metadata | one service family and block definition; exact physical extent and actual completed population; coastal/transoceanic location; facility/aid/channel ID and coverage; actual interfaces/timestamps/duration; vessel/passenger dimensions and population when applicable; berth length/time or lock/lift head/cycle or navigation-aid availability; actual water source/return; asset ownership; operator/ship/provider split; cargo/storage/pilot/tug exclusions; shore energy and commodity-delivery boundary; maintenance dredging area/volume/mass/contamination/destination; asset life and allocation; actual quality/availability limits; geography and period |
| required_quality_disclosure | Identity/measurement gaps; vessel/provider split; sediment characterization/fate limits; hydraulic and ecological coverage; asset life and upstream omissions |
| update_trigger | Changed function/extent, vessel limits, navigation structure/aid, source/return waters, dredging/placement route, energy, provider ownership or asset-life evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-coastal-port | official_guidance | UNSD CPC3.0 67511 explanatory note; consistent with draft PDF pp374–375. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67511 | Coastal/oceanic port, locks/lifts/weirs/sluices and aid scope; explicit handling/storage/pilot/tug exclusions; no factors |
| epa-port-sources | official_guidance | US EPA Port Emissions Inventory Guidance overview, current page read 2026-10-23. https://www.epa.gov/state-and-local-transportation/port-emissions-inventory-guidance | Port/vessel/mobile-source separation and inventory scoping only; no default engine, fuel, MOVES assumption or factor adopted |
| epa-sediment | official_guidance | US EPA Dredged Material Testing and Evaluation, current web page read 2026-10-23. https://www.epa.gov/marine-protection-permitting/dredged-material-testing-and-evaluation-permitting-under-marine | Sediment contamination characterization and destination-specific evaluation rationale; US permitting context is not global approval or an emission/reuse factor |
