---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.inland-waterway-operation-services-excl-cargo-handling
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Inland waterway operation services excluding cargo handling

## 1. Scope and Applicability

Cover operation and maintenance of artificial/natural inland waterways and canals/canalized rivers; locks, boat lifts, weirs and sluices; canal vessel traction from shore by tractors or locomotives other than tugboat; and lightships, light vessels, buoys and channel markers serving inland navigation. The shoreline traction route is explicitly included and is distinct from tugboat service. [Source: `un-cpc3-67512`]

Each dataset fixes one service subtype and functional extent. A representative event is one identified vessel passage through a specified reach and stated facilities. A separately contracted maintenance or navigation-aid availability event instead specifies its accepted reach/asset, delivered condition, coverage interval and served traffic. These are separate qualified events, not interchangeable counts; channel maintenance is not restricted to a convenient lock example.

Exclude container/non-container cargo handling (67110/67190), storage/warehousing (672), inland docking pilotage and tugboat-assisted docking/undocking (67522), vessel cargo/passenger carriage and the customer vessel propulsion inventory. Hydropower, flood control, irrigation and other shared functions require explicit causal allocation; no generated-electricity credit or burden share is assumed from co-location.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.inland-waterway-operation-services-excl-cargo-handling |
| classification_refs | CPC 3.0 67512 |
| covered_products | Inland channel/canal operation and maintenance, navigation structures/aids and non-tugboat shore traction; separately qualified service events |
| excluded_products | Cargo handling; warehousing; docking pilotage/tugboat assistance; vessel carriage; unallocated hydropower/flood-control inventory |
| representative_product | One qualified inland-navigation infrastructure service event for a specified vessel passage and reach |
| production_route | Establish declared navigable/asset condition → actual operation/maintenance/shore traction/aids → verified service completion or interval acceptance |
| market_state | Verified inland navigation support delivered for a defined reach/asset, quality and period |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver the explicitly specified inland-navigation infrastructure service |
| How much | One accepted event with actual route length, vessel/traffic extent, lockages/traction and service interval declared |
| How well | Declared navigable depth/width, water level, vessel/draft/load envelope, aid availability and delivered maintenance condition; actual acceptance criteria |
| How long or cycle | Actual passage/operation interval or separately defined accepted maintenance/availability coverage period |
| reference_flow_link | `navigation_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Inland navigation infrastructure service event |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | reach/asset and start/end interfaces; service subtype and accepted extent; artificial/natural waterway; actual route length; vessel dimensions/draft/load and served traffic; water level/flow; lock/lift/weir/sluice operations and shared lockages; shore-traction method/distance; aid configuration/coverage; maintenance/dredging scope; passage or availability interval; operator/subcontract boundary; hydropower/flood/irrigation allocation; water source/return basin; asset life denominator; electricity origin/voltage |

item is the singular alias of verified Item(s). It counts one specified service event, not a vessel manufactured, freight tonne-kilometre, generic navigation kilometre, lock cycle independent of occupants or cubic metre of water. Do not convert a whole maintenance period into passage events without actual traffic/utilization attribution. Internal stages and multiple aids serving the same declared event do not create duplicate full outputs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `service_event` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Use cp_service to count one accepted event with its exact service extent. Keep passage, shared-lock, shore-traction and independently sold maintenance/availability scenarios separate. |
| `water_balance` | river_water; returned_water | Volume | m3 | Record source/return, pumping, lock transfer, reuse and losses separately. Through-lock volume is not automatically consumptive use; reuse is not a fresh withdrawal. |
| `sediment_basis` | riverbed_sediment; dredged_sediment; suspended_sediment | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured dry solids, wet mass, moisture and carrier water; use actual solids fraction, never an assumed sediment/slurry density or zero resuspension. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared inland reach/asset and initial navigation/water/sediment condition; installed infrastructure is not burden-free |
| starting_condition_role | foreground_start |
| product_classification_scope | Inland navigation infrastructure operation/maintenance and non-tugboat shore traction |
| recursive_input_rule | Subcontracted same-category operation or maintenance enters as an evidenced service with scope; do not duplicate its energy, sediment handling or assets |
| upstream_dataset_requirement | Actual energy/material supply, construction/equipment manufacture/retirement and sediment/waste management; no assumed free public assets |
| disclosure | Service event extent; navigation/other-function allocation; source/return water; sediment characterization; actual traffic/availability; infrastructure lifetime/utilization and missing upstream scope |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_all_routes` | Include actual canal/channel maintenance, lock/lift/weir/sluice service, shore-tractor/locomotive traction and navigation aids as applicable. Do not substitute excluded tugboat docking for shore traction. | un-cpc3-67512 |
| `boundary_water` | Track lockages, reservoir/river supply, back-pumping and operating levels using actual records. Distinguish transfers, return, evaporation and consumptive losses; no default lock-water or pumping coefficient. | crt-water-management |
| `boundary_sediment` | Include actual maintenance dredging, characterization, resuspension and management destination. Dredged-material acceptability depends on physical/chemical/biological properties and local destination; do not presume all material harmless or beneficially used. | epa-inland-sediment |
| `boundary_assets` | Include supported construction, replacement, maintenance and retirement shares of actual channel works, structures, traction and aids. Screen additional actual fuels, batteries, coatings, emissions and ecological transformation separately; missing data are not zero. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| navigation | Operate and maintain declared inland navigation service | required | Actual service subtype and conditional operations | foreground_production | per reference flow |

### Process: Operate and maintain declared inland navigation service (`navigation`)

#### Inputs

##### Product flows

###### Low-voltage alternating current electricity (`electricity`)

Actual grid supply to lock drives, boat lifts, pumping/back-pumping, signals and shore traction where this voltage applies; meter by function and record region. Onsite photovoltaic or other power needs its own generation/asset boundary, without duplicated supply burdens.

- Selected flow: Low-voltage alternating current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Diesel fuel (`diesel`)

Conditional on actual operator dredger, light vessel, towpath tractor/locomotive or maintenance equipment diesel; distinguish assets and functions. Customer vessel propulsion fuel is outside this input.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Hydraulic lubricating oil (`hydraulic_oil`)

Actual gate/lift/traction equipment make-up or replacement; preserve stock changes and avoid assuming every installation is hydraulic.

- Selected flow: Hydraulic lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Steel tow cable (`tow_cable`)

Conditional on actual canal towpath traction other than tugboat; allocate supported replacement/reuse and avoid duplicating initial cable manufacture.

- Selected flow: Steel tow cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Epoxy maintenance coating (`coating`)

Conditional on actual coating maintenance; record whole formulation, solvent/water content, application and waste. Other formulations are separate rows, not a generic paint pool.

- Selected flow: Epoxy maintenance coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Ready-mixed concrete (`concrete`)

Actual navigation civil-work construction/repair inventory share with specified grade and supported service life; exclude quantities included in a complete upstream lock/structure dataset.

- Selected flow: Ready-mixed concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Structural steel (`steel`)

Actual gate, bank or navigation-structure construction/repair steel share; distinguish initial works and replacements and avoid duplicated complete-asset scope.

- Selected flow: Structural steel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Navigation-lock gate drive (`lock_drive`)

Conditional on actual lock drive; document configuration and manufacture/retirement utilization denominator. Boat lifts use their own actual equipment identity.

- Selected flow: Navigation-lock gate drive
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Navigation boat lift (`boat_lift`)

Conditional on actual boat-lift service; record lift configuration, accepted vessel extent and actual use over evidenced lifetime utilization.

- Selected flow: Navigation boat lift
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Towpath tractor (`tractor`)

Conditional on actual bank-based non-tugboat canal towing; record tractor model, traction route and supported lifetime utilization.

- Selected flow: Towpath tractor
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Towpath traction locomotive (`locomotive`)

Conditional on actual towpath locomotive traction; do not relabel tugboat assistance as this land-equipment exchange.

- Selected flow: Towpath traction locomotive
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Navigation light buoy (`buoy`)

Conditional on actual light buoy; record lamp, power supply, battery and maintenance coverage and supported manufacturing share. Separately model replaced battery only if not already included.

- Selected flow: Navigation light buoy
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Navigation light vessel (`light_vessel`)

Conditional on actual lightship/light-vessel service; declare complete vessel manufacturing scope, fuel and stationed duration without treating it as customer transport.

- Selected flow: Navigation light vessel
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Maintenance cutter-suction dredger (`dredger`)

Conditional on this actual dredging configuration; other dredging types require their own specific row. Allocate manufacture over supported utilization, not a full dredger per passage.

- Selected flow: Maintenance cutter-suction dredger
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

##### Elementary flows

###### Freshwater from river, in situ (`river_water`)

Actual external freshwater abstraction/diversion crossing the declared environmental interface, with source basin and water level. Internal lock circulation and back-pumping are not repeated new withdrawals.

- Selected flow: Freshwater from river, in situ
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `crt-water-management`

###### Freshwater riverbed sediment solids, in situ (`riverbed_sediment`)

Actual in-situ material removed by navigation maintenance, with measured dry-solid mass and location; carrier/slurry water is recorded separately and is not sediment dry mass.

- Selected flow: Freshwater riverbed sediment solids, in situ
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_sediment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sediment`
- Sources: `epa-inland-sediment`

#### Outputs

##### Product flows

###### Inland navigation infrastructure service event (`navigation_output`)

One accepted navigation-infrastructure event with specified subtype, reach, function and interval; a customer vessel or cargo is not manufactured output.

- Selected flow: Inland navigation infrastructure service event
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_service`
- Sources:

##### Waste flows

###### Dredged freshwater sediment dry solids (`dredged_sediment`)

Actual characterized dry-solid sediment sent to declared treatment/disposal, with moisture/water balance retained. Product/beneficial-use status requires independent evidence and a single consistent route, not automatic recycling credit.

- Selected flow: Dredged freshwater sediment dry solids
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_sediment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sediment`
- Sources: `epa-inland-sediment`

###### Waste hydraulic oil (`waste_oil`)

Actual segregated drained maintenance oil with contamination and treatment records; distinguish spilled oil and oil remaining in equipment.

- Selected flow: Waste hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded steel tow cable (`waste_cable`)

Actual retired shore-traction cable mass and destination; reuse stock is not discarded waste.

- Selected flow: Discarded steel tow cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Water, to river (`returned_water`)

Actual return flow crossing the declared boundary, with receiving basin, timing and water quality. Return is not assumed equal to abstraction; internal transfers are not counted twice.

- Selected flow: Water, to river
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `crt-water-management`

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Actual operator fuel combustion only, using measured carbon basis or cited applicable factors; customer vessel exhaust and upstream energy supply remain separate.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Suspended sediment, to freshwater (`suspended_sediment`)

Conditional on measured resuspension/release crossing the system boundary, with particle/composition/location. Do not assign the full excavated waste mass again as suspended release.

- Selected flow: Suspended sediment, to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_sediment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sediment`
- Sources: `epa-inland-sediment`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_direct` | Directly meter and attribute lock/lift, pump, traction, aid and dredging tasks first. Shared lockages require actual vessel/occupancy and operating evidence; do not assign a whole chamber cycle separately to every vessel. |  |
| `allocation_multiuse` | Separate navigation from hydropower, flood management, irrigation and recreation using causal engineering/operation evidence. Do not split by revenue or grant avoided-electricity credits by default; justify residual allocation and sensitivity. |  |
| `allocation_assets` | Allocate actual infrastructure/equipment manufacture and retirement over supported lifetime service utilization and current actual service share. Reconcile construction/replacement and complete-asset/component scope; cumulative shares cannot exceed one full life. |  |
| `allocation_period` | Keep passage-based and accepted maintenance/availability-period events separate. Traffic-based attribution needs actual traffic and service quality; retain standby, navigation closures and unsuccessful work attributable to maintained service. Do not divide by an invented future vessel count. |  |
| `allocation_sediment` | Dredged material is a managed physical stream, not a default co-product. Keep dry solids, carrier water, managed output and actual suspended release reconciled; independently justify any beneficial-use/product route without automatic substitution credit. | epa-inland-sediment |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | navigation | navigation_output | service_event_record | event ID; subtype; reach/asset; vessel/traffic extent; draft/load; route length; water level; lockages; shore traction; aid condition; accepted interval; completion | Reconcile actual passage/lock/traction records or independently contracted maintenance/availability acceptance; keep complete event stages and actual served extent. | item | each event and period | full declared service interval | one declared subtype/reach scenario | per reference flow | traffic/lock logs; surveys; acceptance |
| cp_energy | navigation | electricity; diesel | energy_record | meter/fuel; asset; task; operating/idle hours; power source; lock/pump/traction/dredging/aids; stock changes | Measure separate actual functional energy and reconcile supplier/stock records; isolate customer-vessel energy and shared non-navigation functions. | row unit | matched task and billing period | same period as cp_service | operator assets and declared support | per reference flow | meter calibration; fuel ledger; task records |
| cp_materials | navigation | hydraulic_oil; tow_cable; coating | material_record | specific material; grade/formulation; issued/returned mass; reuse; replacement; task/asset share | Weigh actual issue/return and document configuration/use life; separate coating composition and remaining/recovered material. | kg | each maintenance/task | same service/maintenance period | actual navigation assets | per reference flow | work orders; stock; formulation/use records |
| cp_assets | navigation | concrete; steel; lock_drive; boat_lift; tractor; locomotive; buoy; light_vessel; dredger | asset_record | asset/reach ID; construction/component scope; actual quantities; life utilization; current use; prior shares; replacement; retirement | Use asset registers, surveyed works, bills of quantities and operating ledgers; independently support each lifetime denominator and multi-function share. | row unit | asset/maintenance event and period | asset life and current service | actual reach and equipment | per reference flow | register; bills; life/utilization evidence |
| cp_water | navigation | river_water; returned_water | water_balance_record | source/receiving basin; inflow; outflow; storage change; lock transfer; back-pump; evaporation; other loss; timing; water quality | Use calibrated flows/levels and actual operation logs to distinguish external withdrawals/returns from internal transfer and reuse. Do not turn total lock transfer into consumption. | m3 | each operation and balance period | same interval as service | declared source/reach/return interfaces | per reference flow | flow calibration; water balance; basin records |
| cp_sediment | navigation | riverbed_sediment; dredged_sediment; suspended_sediment | sediment_record | dredge location; wet mass; dry solids; water content; particle/chemical/biological characterization; carrier water; managed destination; suspended release | Survey/sample actual material and reconcile dry-solid balances, moisture, management and actual releases. Characterization and destination evidence are specific to the job, not assumed harmlessness. | kg | each dredging task and sampling interval | matched maintenance/service period | actual dredged reach and disposal route | per reference flow | surveys; lab results; transfer manifests |
| cp_waste | navigation | waste_oil; waste_cable | waste_record | specific stream; measured mass; contamination; treatment; destination; asset/task share | Measure segregated maintenance streams and reconcile manifests; spills and discarded materials require distinct identities. | kg | each waste event | same maintenance/service period | attributable operator maintenance | per reference flow | weighing; manifests; work orders |
| cp_emissions | navigation | fossil_co2 | emission_record | species; source engine; fuel carbon; activity; test/model; factor source; compartment | Use actual operator-source measurements or a cited applicable fuel-specific method; retain source/technology and navigation share; customer-vessel emissions remain separate. | kg | test and activity period | same period as service | actual operator energy sources | per reference flow | test/model evidence; activity ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_service` | all inventory rows | Attribute actual measured period exchanges to the declared accepted service subtype and extent, applying documented shared-function and event attribution. Divide matched comparable totals by accepted events; do not convert availability periods to passages without actual evidence. | cp_service; actual functional records | per reference flow |  |
| `calc_water` | river_water; returned_water | Reconcile external inflow, external return, storage changes, evaporation and other actual losses, recording internal lock transfers and reuse separately. Report basin/time-specific withdrawal and return, not a default net consumptive volume. | cp_water; cp_service | volume per reference flow | crt-water-management |
| `calc_sediment` | riverbed_sediment; dredged_sediment; suspended_sediment | Use measured solids fraction to separate sediment dry mass and slurry water; reconcile in-situ removal with managed outputs, stock and actual suspended release. Contaminant releases require each measured species and compartment separately. | cp_sediment; cp_service | dry-solid mass per reference flow |  |
| `calc_assets` | concrete; steel; lock_drive; boat_lift; tractor; locomotive; buoy; light_vessel; dredger | Apply supported lifetime-use and actual navigation-use shares to construction/manufacture/retirement inventory; reconcile components and normalized current service attribution. Unknown future use or life remains an explicit review gap. | cp_assets; cp_service | asset share per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_extent | navigation_output | Require reach, service subtype, passage/interval, vessel/traffic and delivered navigation condition; a fee or generic kilometre is insufficient. | cp_service |
| dq_water | river_water; returned_water | Document source/return basin, timing and water quality; distinguish internal transfer, withdrawal and consumption. | cp_water |
| dq_sediment | riverbed_sediment; dredged_sediment; suspended_sediment | Characterize actual solids and destination; no assumed clean sediment, generic disposal factor or default beneficial use. | cp_sediment |
| dq_multiuse | all inventory rows | Require supported navigation versus other-function shares and actual life/utilization evidence, with uncertainty/sensitivity and upstream omissions. | functional records; cp_assets |
| dq_identity | all inventory rows | Verify exact flow/property/unit and Chinese name before adoption. Each missing UUID remains individual; parser success does not prove water/sediment identity or complete ecological coverage. | Direct support and unresolved register |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_service` | Require unique navigation_output of 1 item with complete declared subtype/extent, navigation quality and interval. Reject freight tonne-km and undefined lock/pass counts as substitutes. |  |
| `validate_scope` | Confirm all selected inland operation/maintenance routes, including non-tugboat towpath traction. Exclude cargo handling, warehousing, docking pilotage/tugs and customer vessel fuel/exhaust from this service. | un-cpc3-67512 |
| `validate_balances` | Reconcile water and sediment balances, actual shared-lock attribution, navigation/other-purpose allocation and infrastructure lifetime shares. Missing identity, emission, upstream or habitat-impact evidence must remain disclosed before a complete lifecycle claim. |  |
| `validate_unit_export` | Treat item only as the singular local alias of the formal Number of items unit Item(s). Export Item(s) with the same numerical count and the fully qualified service definition; changing the display token does not change the flow property, service extent or normalization denominator. Do not convert a service item to time, mass, distance or a different family by relabelling its unit, or normalize an already per-reference quantity again. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | inland_navigation_infrastructure_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified inland infrastructure service input to the matching navigation or maintenance scenario |
| excluded_use | Complete vessel freight footprint; docking tug/pilotage; universal lock factor; unallocated hydropower or automatic sediment-use credit |
| required_metadata | All reference qualifiers; source/return and sediment boundaries; actual events/intervals; multiuse allocation; asset/component lives and upstream identities |
| required_quality_disclosure | Navigation extent and downtime; water/sediment uncertainty; shared-function sensitivity; lifetime denominator; missing UUIDs/upstream/ecological evidence |
| update_trigger | Reach/depth/water-level change, dredging or sediment contamination, lock/traction/aids configuration, actual traffic, shared functions, energy or supported life evidence changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-67512 | official_guidance | UNSD CPC Version3.0 subclass67512 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67512 | Full inland navigation/maintenance/shore-traction/aids scope and explicit exclusions |
| crt-water-management | official_guidance | Canal and River Trust, Managing our water: Day to day, Monitoring and Management. https://canalrivertrust.org.uk/our-cause/looking-after-canals-and-rivers/managing-our-water/day-to-day | Operator primary account of actual lockage, reservoir, pumping and water monitoring; UK context, no per-lock coefficient adopted |
| epa-inland-sediment | official_guidance | US EPA, Inland Testing Manual under CWA Section404, physical/chemical/biological dredged-material evaluation description. https://www.epa.gov/cwa-404/inland-testing-manual-under-cwa-section-404 | Actual dredged-material characterization before destination choice; US disposal-evaluation context, not universal permit or lifecycle factor |
