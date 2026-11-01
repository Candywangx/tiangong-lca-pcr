---
pcr_id: pcr.local-bus-coach-charter-mission-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Local bus and coach charter mission service

## 1. Scope and Applicability

This PCR covers actual non-scheduled chauffeur-driven hired bus and motor-coach charter transport missions within urban and suburban areas. The operator-accountable agreed mission defines actual group/recipient roles, vehicle duties, itinerary/destinations/stops/return, duration, quality and fulfilment acceptance. Typical predetermined route/timetable, general time/distance billing and frequent multiple destinations are not absolute gates. Declare real local geography/function and scheduling/control responsibility; a repeated client type, school/work party, published-looking itinerary, booking time or billing unit alone does not establish charter, scheduled special-user transport or full-client-control rental.

The reference is one actual completed local whole group charter mission, not one passenger transport leg, seat, available bus, vehicle-hour/day, driver shift, invoice/order or payment. A mission may genuinely require several concurrent vehicle duties, replacement vehicles, driver changes, internal transport legs and waiting; retain their complete actual membership/quantities without creating extra final mission outputs. A contract/order may contain several independently delivered missions: distinguish their true delivery boundaries and compatible quality rather than counting by document or fleet vehicle alone. Record actual passengers and segment occupancy as secondary exposure, never assumed capacity or a denominator dividing this whole mission into persons.

Actual charter mission fulfilment is proved against its real original agreed party/service extent, required itinerary/duration/quality, chronological amendments and accepted delivery. Retain early termination, interruption, partial/failed/no-show/cancelled duty and actual promised-versus-delivered extent. Do not shrink failed promised scope retrospectively to manufacture a successful full mission. A genuinely amended accepted mission or independent partial output needs its true scope and comparability. Do not import the car-hire rule that any stationary availability automatically delivers charter: count a standby/cancelled/no-passenger case only if the actual qualifying charter mission obligations and acceptance evidence independently establish completed mission fulfilment. Otherwise retain its causal burden without invented completed output. N counts comparable completed local missions; N=0 has no finite mission intensity.

The method covers all actual qualifying bus/coach propulsion configurations, not only the conditional diesel and battery-electric coach examples. Actual diesel/biofuel/hybrid, fuel-cell electric and other real drives require their own complete vehicle/native fuel supply, storage, power/control, auxiliary operation, maintenance/retirement and species/fate records. A manufacturer fuel-cell coach is a physical technology example, not proof of urban/suburban charter eligibility or zero lifecycle burden. Ordinary tram or other non-bus/coach products do not become this charter merely from carrying the same group. Missing data/UUIDs are completion gaps, not propulsion exclusions.

Exclude full-client-control bus rental with driver except chartering, sightseeing-bus experience as final function, ordinary public/special scheduled service, standalone booking and actual independent other modes. Judge who fulfils the actual group transport responsibility and what the customer controls. A charter taking a party to attractions is not automatically sightseeing; all actual included transport-incidental food/water/guide/accessibility/driver rest or overnight support remains in scope. Independently sold distinct products require subdivision/allocation, not silent omission. Full actual loaded/empty positioning/return/recovery, waiting, failure, driver/support/platform/site/road/charging and bus/component lifecycle duties remain covered once at real owners and all-user denominators.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.local-bus-coach-charter-mission-service |
| classification_refs | CPC3.0 64118 Local bus and coach charter services; dedicated full actual scope, exact |
| covered_products | Actual qualifying non-scheduled local urban/suburban operator-accountable hired bus/motor-coach group charter missions across all actual propulsion configurations |
| excluded_products | Full-client-control rental except charter; sightseeing final experience; scheduled public/special-user service; standalone booking; interurban/long-distance or non-bus/coach functions as such |
| representative_product | Completed local urban and suburban bus or coach charter mission |
| production_route | Actual agreed local group charter mission; all vehicle/driver/internal duties, incidentals and full lifecycle; evidenced accepted completion |
| market_state | Actually completed local charter mission at defined group/itinerary/duration/quality delivery gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed local urban and suburban bus or coach charter mission |
| How much | 1 actual completed local whole group charter mission |
| How well | Actual urban/suburban non-scheduled charter/control responsibility, group, fleet/driver continuity, itinerary/stops/return, duration, amendments and accepted quality |
| How long or cycle | Actual agreed and delivered local mission interval plus supporting full duty/asset lifecycle; chronological scope changes disclosed |
| reference_flow_link | completed_local_charter_mission |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed local urban and suburban bus or coach charter mission |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_64118_local_urban_suburban_geography; non_scheduled_operator_charter_vs_full_client_control; original_mission_group_extent_itinerary_stops_return; actual_vehicles_drivers_passengers_and_continuity; actual_duration_quality_accessibility; chronological_amendments_and_accepted_completion; partial_failed_cancelled_no_show_and_standby_evidence; actual_propulsion_native_supply_stock_and_fates; driver_and_included_incidental_function_boundaries; same_period_comparable_mission_strata; provider_native_demand_exact_covered_cells; same_asset_positive_all_user_useful_duty; known_substance_receiver_subcompartment_and_uncertainty |

Required qualifiers must be declared in package metadata,process notes,reference-flow comments or equivalent;missing qualifiers make the definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mission_count | reference product | Number of items | Item(s) | N is the positive number of actual completed, functionally compatible charter missions in the declared cohort. Prove delivered itinerary/party/quality against the mission acceptance rule; contracts, invoices, reserved seats, vehicle departures, party headcount or partial paid duty do not establish N. |
| actual_exposure | all inventory rows | Native compatible property | Actual native unit | Collect mission count, actual segment persons, vehicle duties, actual distance and elapsed/working/waiting duration separately. Passenger-distance may be disclosed from actual segments, but neither it nor vehicle-hours convert Count to a different reference by assumption. |
| native_chemistry | all inventory rows | Native compatible property | Actual native unit | Volume-to-mass needs actual compatible density/state. Electrical kWh uses verified3.6MJ/kWh only. Preserve fuel/carbon origin, solution concentration, species mass versus C/N/CO2-equivalent and real receiving subcompartment; no default conversions or generic exhaust molecule. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual operator-accountable mission,party/fleet/duty records and evidenced supply/provider gates |
| starting_condition_role | Actual collection/coverage interface,not zero upstream or historical asset burden |
| product_classification_scope | 64118 only: actual local urban/suburban non-scheduled hired bus/coach charter; all real qualifying propulsion; general/tipical route and billing notes not absolute |
| recursive_input_rule | Same-function subcontracted completed mission used once at actual native gate;expand only missing cells,no extra final mission |
| upstream_dataset_requirement | Actual provider/native quantity,boundary,technology,geography,period,lifecycle and quality compatible;missing phases mandatory |
| disclosure | Actual mission acceptance,party/vehicles/itinerary/duration,provider/owned cells,incidental functions,empty/failed duty,life/allocation and gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| mission_boundary | charter_mission | Declare one accepted mission delivery gate including its actual one-way/return itinerary and multi-stop waiting. Retain group, passengers, vehicles and operator/organiser roles without equating them. Actual empty, interrupted and failed operations carry attributable burden without completed-mission outputs. |  |
| provider_ownership | charter_mission | Assign every actual activity, provider, burden stage, vehicle and period one owner. Complete subcontracted transport or a purchased vehicle-with-driver/native-hour input is allowed only at its real supplied function/gate and coverage; it is not automatically the final charter mission. Adopt a complete provider result or the exact covered foreground constituents, never both. Missing phases remain mandatory. | ghg-product-standard-2011 |
| actual_incidentals | charter_mission | Determine actual included driver rest/accommodation, safety/accessibility support, onboard water/food and other incidental services from the agreed mission. Each actual supplier result needs native quantity and scope. A complete meal/hotel/support provider replaces covered energy/material/waste constituents; independently expanded ingredients/services cannot repeat it. Ordinary human subsistence is a disclosed boundary convention; actual dedicated work support still requires assessment, not a generic labour-energy factor. |  |
| fuel_and_energy | charter_mission | Use one verified whole fuel-blend input with composition/carbon-origin ledger OR actual physical component supplies replacing matching blend coverage, never both. Supplied, net-withdrawn, burned, spilled, recovered and transferred fuel are distinct; supply/withdrawal is not automatic combustion activity. Internal battery discharge/regeneration is not another external supply. Actual exports need their own verified identity/gate/quantity; no second avoided-energy credit. | ipcc-road-combustion-2006 |
| manufacture_scope | charter_mission | Delivered coach manufacture cards carry only verified manufacture/supply coverage. Same-asset complete-life duty allocates actual delivered native quantity and never creates a full-life transport identity. Independently complete uncovered operation, initial/replacement battery, maintenance, road/terminal/charger assets and retirement; provider-included fuel/direct emissions or phases replace the matching local quantities. |  |
| actual_fates | charter_mission | Independently identify collected wastewater, evaporation, spent oil, worn/retired materials, recovered products, each actual species and receiving medium/subcompartment, and actual treatment responsibility. Unknown stock loss or unserved passengers do not create an emission or waste by residual. Preserve actual biogenic/fossil source and particle-size overlap rules. |  |
| local_contract_fulfilment | charter_mission | Apply actual urban/suburban non-scheduled charter function and operator-versus-client control, not general billing/timetable notes as absolute tests. Preserve original and timestamped amended mission extent, fleet/driver continuity, actual quality and accepted delivery. No after-failure shrinking; partial/amended outputs require real independent acceptance and comparability. Standby/no-passenger case is not automatically mission completion by copying car-hire availability. |  |
| actual_native_provider_scaling | purchased_local_mission | For q_u per actual verified provider-native unit u, apply real compatible demand A_u times supported mission/all-user share and /N once. Matching whole-mission Count provider result covers its true stages only; actual hour/day/vehicle/distance/other function has its own identity and measured demand, not a relabelled mission. Owned legs are internal, not extra purchased missions or final outputs. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| charter_mission | Local bus/coach charter mission and attributed lifecycle | required | Actual completed declared charter missions;conditional physical rows by occurrence | foreground | completed_local_charter_mission |

All actual vehicle/driver/support duties and internal passenger legs/stops share the final completed local charter mission; they are not extra final outputs or purchased self-services. Conditional cards apply only to actual compatible identities/coverage; every other actual exchange requires mandatory atomic expansion.

### Process: Local bus/coach charter mission and attributed lifecycle (`charter_mission`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel_supply`)

Only actual supplied diesel/grade/blend compatible with the verified identity. Preserve component carbon origin and native stock/gate records. Whole-blend supply plus origin ledger and physical component supplies replacing it are alternative representations, never additive. Net withdrawal, actual burning, spill/recovery and transfer are separate; emissions use actual evidenced burned activity, not assumed supplied mass. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied. Confirm actual grade/formulation/state and native supplier gate; independently bridge any missing at-plant-to-receipt delivery/conditioning/storage/loss stages. External AC is not external DC or internal rectification/battery recovery; each actual other supply requires its own identity.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_operation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `ipcc-road-combustion-2006`

###### Alternating current (`charging_ac`)

Actual AC imported at the declared charging interface, including only losses within that metered gate. Internal battery discharge/regeneration is not a second supply. Collect actual cabin/battery conditioning and auxiliary use inside their gate without assuming consumption from nominal battery capacity. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied. Confirm actual grade/formulation/state and native supplier gate; independently bridge any missing at-plant-to-receipt delivery/conditioning/storage/loss stages. External AC is not external DC or internal rectification/battery recovery; each actual other supply requires its own identity.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_operation.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `eea-electric-vehicles`

###### Alternating current (`support_ac`)

Actual compatible noncharging depot/terminal/dispatch electricity serving this mission pool, outside provider and charging coverage. Submeter before allocating shared support. A purchased accommodation/meal result may already own its energy; do not repeat it here. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied. Confirm actual grade/formulation/state and native supplier gate; independently bridge any missing at-plant-to-receipt delivery/conditioning/storage/loss stages. External AC is not external DC or internal rectification/battery recovery; each actual other supply requires its own identity.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `ghg-product-standard-2011`

###### Tap water (`tap_water`)

Actual supplied compatible tap water for coach cleaning/support. This is not bottled passenger drinking water or environmental abstraction. Keep actual native volume/state; supply does not establish wastewater or evaporation. Other supplied water qualities and drinking products need independent identities. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied. Confirm actual grade/formulation/state and native supplier gate; independently bridge any missing at-plant-to-receipt delivery/conditioning/storage/loss stages. External AC is not external DC or internal rectification/battery recovery; each actual other supply requires its own identity.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`

###### Detergent (`detergent`)

Only actual documented synthetic surfactant cleaning product compatible with this supplied identity/formulation gate. Disinfectants, soaps, solvents and other actual products are independent exchanges, not one generic cleaning collection. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied. Confirm actual grade/formulation/state and native supplier gate; independently bridge any missing at-plant-to-receipt delivery/conditioning/storage/loss stages. External AC is not external DC or internal rectification/battery recovery; each actual other supply requires its own identity.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_support.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`

###### Refrigerant, R134a (`r134a_supply`)

Only actual separately supplied single R134a matching supplier composition/purity and native delivery gate. No purity threshold or virgin/reclaimed-content claim follows from the flow name. Blends and contaminated recovered mixtures need separate identities. Original charge is owned once; recharge is not leakage and is not the atmospheric elementary flow. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied. Confirm actual grade/formulation/state and native supplier gate; independently bridge any missing at-plant-to-receipt delivery/conditioning/storage/loss stages. External AC is not external DC or internal rectification/battery recovery; each actual other supply requires its own identity.

- Selected flow: Refrigerant, R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`

###### Complete diesel touring motor coach at delivered manufacture gate (`diesel_coach`)

Only if the actual asset register proves this complete coach/configuration and native delivered manufacture count. Its flow covers verified manufacturing/supply only, not a full-life group transport result. Record original battery/components; do not add them again. Provider-included fuel/direct emissions, maintenance or retirement replace exact local quantities; missing phases and actual road/terminal/charging assets remain independent obligations. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied.

- Selected flow: Complete diesel touring motor coach at delivered manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard-2011`

###### Complete battery-electric motor coach at delivered manufacture gate (`electric_coach`)

Only if the actual asset register proves this complete coach/configuration and native delivered manufacture count. Its flow covers verified manufacturing/supply only, not a full-life group transport result. Record original battery/components; do not add them again. Provider-included fuel/direct emissions, maintenance or retirement replace exact local quantities; missing phases and actual road/terminal/charging assets remain independent obligations. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied.

- Selected flow: Complete battery-electric motor coach at delivered manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_assets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `ghg-product-standard-2011`

###### Hydrogen fuel supply for fuel-cell coach (`hydrogen_supply`)

Only actual independently supplied hydrogen molecule fuel at its evidenced purity, phase/state, pressure/temperature and provider handover gate. Do not infer gaseous/liquid storage, production pathway, heating value or fuel-cell grade from a generic name. Balance real supply/stock/transfer, actual consumed hydrogen and separate leak/vent/recovery; compression/liquefaction/delivery and conditioning losses need actual coverage. Hydrogen product is not its emitted species or water output; each real release/receiver and phase is independent.

- Selected flow: Hydrogen fuel supply for fuel-cell coach
- Flow property / unit: Mass / kg
- Amount rule: attributed_actual_net_hydrogen_supply_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_operation`
- Sources: `irizar-fuelcell-coach-2026`

###### Complete hydrogen fuel-cell electric motor coach at delivered manufacture gate (`fuelcell_coach`)

Only the actual complete matching fuel-cell electric motor-coach assembly at its manufacturer supply gate, with exact chassis/powertrain, stack/tank/battery/initial component coverage and delivered native quantity. The example does not prove local-charter use. Same-asset compatible studied duty / positive all-user useful-life duty allocates manufacture only; independently complete actual replacements, stack/tank/pack maintenance, use and retirement. Do not add contained initial components or rename a BEV/diesel vehicle as this assembly.

- Selected flow: Complete hydrogen fuel-cell electric motor coach at delivered manufacture gate
- Flow property / unit: Count / Item(s)
- Amount rule: attributed_actual_FCE_coach_manufacture_equivalents / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `irizar-fuelcell-coach-2026`

###### Completed local urban and suburban bus or coach charter mission (`purchased_local_mission`)

Only an actual completed provider whole local bus/coach charter mission matching real group/itinerary/duration/quality/geography and operator responsibility at its native Count gate. It is not a constituent passenger leg, vehicle-hour, hired availability or self-purchase of owned duties. Other actual supplier-native units/functions require independent concrete verified rows with real compatible demand/conversion. Provider-covered physical stage/vehicle/period cells replace only those exact local cells; add only uncaptured responsibilities and normalize once.

- Selected flow: Completed local urban and suburban bus or coach charter mission
- Flow property / unit: Count / Item(s)
- Amount rule: actual_matched_completed_provider_local_missions_attributed_to_cohort / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_provider`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed local urban and suburban bus or coach charter mission (`completed_local_charter_mission`)

Exactly one actual accepted whole local urban/suburban bus/coach charter mission at its declared group/itinerary/duration/quality extent. Actual multiple vehicles, shifts, internal legs/stops or passenger counts are supporting activities, not extra outputs. Raw N is evidenced compatible completed mission records, not documents or fees; incomplete/cancelled/partial cases do not count by post hoc shrinking. Standby is not automatically completed transport: prove actual qualifying mission obligations delivered.

- Selected flow: Completed local urban and suburban bus or coach charter mission
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_missions`
- Sources: `unsd-coach-charter-2025`

##### Waste flows

###### Used lubricating oil (`spent_oil`)

Actual separately collected petroleum-based used oil at generation/handover before treatment. Preserve retained contents and net mass; oily water, filters, grease and treatment services are distinct. Collection does not prove recycling/disposal occurred. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`

###### Collected liquid coach-wash wastewater at generation gate (`wash_wastewater`)

Only the actual independent liquid wash outlet with retained composition and receiver gate. Measure it separately from supplied water; track stock, recycling, evaporation and separately handled sludge/oil. Direct discharge and treatment service are separate identities. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied.

- Selected flow: Collected liquid coach-wash wastewater at generation gate
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fossil`)

Only actual release of this exact substance/origin or particle class from owned sources, measured or calculated with independently supported applicable technology/fuel/control/activity evidence. Preserve species kg, not C/N or CO2-equivalent. Distinguish tailpipe, heater/reagent, non-exhaust and upstream/provider sources; do not add PM2.5 to overlapping PM10/total PM as independent releases. R134a leakage requires actual charge/addition/recovery/removal balance and method, not recharge or an unexplained residual. This identity is Emissions to air, unspecified. Use only when actual documented scope justifies that subcompartment; known urban/nonurban/near-ground or other specific receiving information requires a separately verified compatible row, not collapse or double counting. Unknown receiving scope blocks completion. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-road-combustion-2006`

###### methane (fossil) (`ch4_fossil`)

Only actual release of this exact substance/origin or particle class from owned sources, measured or calculated with independently supported applicable technology/fuel/control/activity evidence. Preserve species kg, not C/N or CO2-equivalent. Distinguish tailpipe, heater/reagent, non-exhaust and upstream/provider sources; do not add PM2.5 to overlapping PM10/total PM as independent releases. R134a leakage requires actual charge/addition/recovery/removal balance and method, not recharge or an unexplained residual. This identity is Emissions to air, unspecified. Use only when actual documented scope justifies that subcompartment; known urban/nonurban/near-ground or other specific receiving information requires a separately verified compatible row, not collapse or double counting. Unknown receiving scope blocks completion. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-road-combustion-2006`

###### nitrous oxide (`n2o`)

Only actual release of this exact substance/origin or particle class from owned sources, measured or calculated with independently supported applicable technology/fuel/control/activity evidence. Preserve species kg, not C/N or CO2-equivalent. Distinguish tailpipe, heater/reagent, non-exhaust and upstream/provider sources; do not add PM2.5 to overlapping PM10/total PM as independent releases. R134a leakage requires actual charge/addition/recovery/removal balance and method, not recharge or an unexplained residual. This identity is Emissions to air, unspecified. Use only when actual documented scope justifies that subcompartment; known urban/nonurban/near-ground or other specific receiving information requires a separately verified compatible row, not collapse or double counting. Unknown receiving scope blocks completion. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ipcc-road-combustion-2006`

###### particles (PM2.5) (`pm25`)

Only actual release of this exact substance/origin or particle class from owned sources, measured or calculated with independently supported applicable technology/fuel/control/activity evidence. Preserve species kg, not C/N or CO2-equivalent. Distinguish tailpipe, heater/reagent, non-exhaust and upstream/provider sources; do not add PM2.5 to overlapping PM10/total PM as independent releases. R134a leakage requires actual charge/addition/recovery/removal balance and method, not recharge or an unexplained residual. This identity is Emissions to air, unspecified. Use only when actual documented scope justifies that subcompartment; known urban/nonurban/near-ground or other specific receiving information requires a separately verified compatible row, not collapse or double counting. Unknown receiving scope blocks completion. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_emissions.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `eea-electric-vehicles`

###### HFC-134a (`r134a_air`)

Only actual release of this exact substance/origin or particle class from owned sources, measured or calculated with independently supported applicable technology/fuel/control/activity evidence. Preserve species kg, not C/N or CO2-equivalent. Distinguish tailpipe, heater/reagent, non-exhaust and upstream/provider sources; do not add PM2.5 to overlapping PM10/total PM as independent releases. R134a leakage requires actual charge/addition/recovery/removal balance and method, not recharge or an unexplained residual. This identity is Emissions to air, unspecified. Use only when actual documented scope justifies that subcompartment; known urban/nonurban/near-ground or other specific receiving information requires a separately verified compatible row, not collapse or double counting. Unknown receiving scope blocks completion. Range evidence need: actual mission,quantity,provider and applicable source/method evidence are mandatory; no universal amount or factor range is supplied.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed compatible native quantity / N completed missions; cp_maintenance.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: `ghg-product-standard-2011`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| mission_first | charter_mission | Assign dedicated mission vehicles, crew duties and support directly before allocating shared pools. A group mission is the declared service output: its actual persons and vehicle legs are supporting exposure records, not additional final/co-product outputs. Do not divide the mission inventory by party size to manufacture the reference. |  |
| shared_physical | charter_mission | For residual common resources use actual supported causal drivers across every served mission/product and period. Actual vehicle-distance, occupied vehicle-time, area-time or measured resources may apply only with a demonstrated relationship; seats, quoted capacity, fares and equal fractions are not defaults. Person-distance and tonne-distance cannot be added as one unit. | ghg-product-standard-2011 |
| empty_failure | charter_mission | Keep actual pre/post positioning, standby, waiting, recovery and failed/partial missions in their evidenced service pool. N=0 retains its numerator for period/boundary resolution and has no finite per-mission intensity. Paid cancellation or unused coach availability is not an automatically completed charter mission. |  |
| asset_lifetime | charter_mission | For each physical coach/component, actual delivered manufacture count times studied compatible duty / positive documented same-asset all-user lifetime duty gives attributed manufacture quantity; then /N completed missions. Include actual scheduled/charter/other asset users in the denominator. Keep manufacture, replacements, repair and retirement disjoint; no annual purchase/depreciation/hire money stands in for native physical demand. |  |
| other_outputs | charter_mission | Separate independent freight, dining, accommodation, guiding or other actual products by subdivision or reviewed compatible allocation. Transport-incidental services actually included in the declared mission remain inside it. Actual energy/material recovery needs its own fate and declared method; no automatic avoided-car, fertilizer, virgin material or grid credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The completion,coverage,native scaling,allocation and bookkeeping equations are explicit PCR-designed methods;external sources support only their stated actual definitions/physical contexts. No claim UN,EU,Irizar,IPCC,EEA orGHGProtocol prescribes these full-life or local charter mission formulas. Missing generic ranges do not waive mandatory actual quantities.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_missions | charter_mission | completed_local_charter_mission | mission_and_party_ledger | mission_id;operator_control;organiser;actual_party;segment_persons;luggage;OD;itinerary;stops;return_scope;actual_duration;vehicles/replacements;quality;acceptance;partial/cancelled;period;actual_distance;original_promised_scope;timestamped_amendments;actual_delivered_quality;partial_failed_release;independently_accepted_output;operator_vs_client_control;local_geography;fleet_driver_replacement_continuity | Reconcile agreed transport mission and actual dispatch/party/itinerary/acceptance records. Define one-way/return and multi-stop scope before counting. N=sum actual completed functionally compatible missions; preserve actual passengers and each vehicle/leg as separate exposure records, not extra mission outputs. Missing acceptance/completion remains unresolved; payments do not create completion. Reconcile original and actual amended scope chronologically; no post-hoc failed-scope shrink, fee-as-completion or automatic car-availability output. Record real local charter mission boundaries across fleet/internal legs/driver changes; only actual accepted compatible completed missions enter N. | Item(s);persons;km;h | each actual mission;reconciled cohort | Same actual mission cohort/period;whole-life asset interfaces disclosed | Only actual attributable mission/provider/source cells;all users reconciled | per declared reference flow | Actual original records;scope/calibration;native-unit/source proof;uncertainty and closure |
| cp_operation | charter_mission | diesel_supply;charging_ac;hydrogen_supply | meter_stock_duty_ledger | mission/vehicle/duty;fuel_grade/blend;composition/carbon_origin;whole_vs_component_representation;supplied;opening/closing;net_withdrawal;actual_burn;spill;recovery;transfers;gross_AC;losses;storage;regeneration;export;loaded_empty_wait_failed;all_users;provider_scope;hydrogen_grade_phase_pressure;H2_stock_supply_reaction_leak_vent;external_DC_swap;actual_other_fuels_hybrid_duties | Use reconciled meters, fuel stocks and dispatch/auxiliary records. Keep whole-blend and replacement-component input representations exclusive, and supply/net withdrawal/burn/spill/recovery distinct. Direct emissions use evidenced actual burning/source activity. Assign actual compatible supply/energy quantities to missions with causal all-user drivers; divide by N once. For actual H2 or other alternative drives independently close native supply/storage/consumption/leak/vent/recovery and each phase/receiver; never infer a fuel product as its direct emission or water vapour as waste. | kg;kWh;native volume;km;h | each meter/stock/duty;full mission pool | Same actual mission cohort/period;whole-life asset interfaces disclosed | Only actual attributable mission/provider/source cells;all users reconciled | per declared reference flow | Actual original records;scope/calibration;native-unit/source proof;uncertainty and closure |
| cp_support | charter_mission | support_ac;tap_water;detergent | support_provider_and_procurement | mission/task;supplied_function;driver_rest/overnight;food/water/safety/accessibility;native_provider_unit;quantity;actual_scope;ingredient_or_provider_coverage;electricity/water/materials;all_users;stock;fates;uncertainty | Inspect actual mission inclusions, work orders, supplier records and meters. Independently identify each actual meal,water,hotel,safety,crew or other support result and its native unit; a complete provider replaces its covered foreground constituents. Exclude only evidenced unrelated/separately defined functions. Dedicated work support is assessed; no generic human-food fuel factor. Assign actual uncovered native quantities by causal drivers and divide by N once. | native supplier units;kWh;m3;kg | each actual task/provider/meter;aligned period | Same actual mission cohort/period;whole-life asset interfaces disclosed | Only actual attributable mission/provider/source cells;all users reconciled | per declared reference flow | Actual original records;scope/calibration;native-unit/source proof;uncertainty and closure |
| cp_maintenance | charter_mission | r134a_supply;spent_oil;wash_wastewater;r134a_air | maintenance_and_receiver_ledger | vehicle/equipment;refrigerant_CAS;supplied_grade/purity;original_final_charge;additions_removals_recovery;source;net_mass;contents;washwater;stocks/reuse/evaporation;receiver;treatment_scope;actual_medium;provider_scope | Read actual monitored balances, work orders, stock and receiver records. Distinguish refrigerant supply,atmospheric leakage and recovered product/waste; independently quantify spent oil and washwater with actual composition/fates. Never derive waste from water/fresh-oil inputs or use an unexplained charge deficit as leakage. Attribute non-overlapping event quantities and divide by N once. | kg;m3;actual native units | each maintenance/release/transfer;pool closure | Same actual mission cohort/period;whole-life asset interfaces disclosed | Only actual attributable mission/provider/source cells;all users reconciled | per declared reference flow | Actual original records;scope/calibration;native-unit/source proof;uncertainty and closure |
| cp_assets | charter_mission | diesel_coach;electric_coach;fuelcell_coach | same_asset_lifetime_register | asset/cohort;configuration;actual_delivered_count;manufacture_gate;original_battery/components;studied_compatible_duty;all_user_total_life_duty;other_charter/scheduled_uses;forecast_source;replacement;maintenance/retirement;provider_scope;uncertainty | Read actual supply/engineering/duty/retirement records. Match delivered quantity,studied duty and positive total lifetime duty to the same physical asset/cohort and all its users. Attributed manufacture=actual native delivered quantity times studied duty/total compatible lifetime duty; then /N. It covers manufacture only. Independently complete missing operation,replacement,maintenance,road/terminal/charger and retirement quantities; provider-covered phases replace matching local data. | Item(s);asset-native units;km;h | whole physical life and period/cohort shares | Same actual mission cohort/period;whole-life asset interfaces disclosed | Only actual attributable mission/provider/source cells;all users reconciled | per declared reference flow | Actual original records;scope/calibration;native-unit/source proof;uncertainty and closure |
| cp_emissions | charter_mission | co2_fossil;ch4_fossil;n2o;pm25 | species_source_medium_ledger | mission/vehicle/source;fuel/auxiliary/reagent;technology/control;actual_burn/activity;factor_source_version;native_factor_basis;species_mass;fossil_biogenic;particle_size;air_water_soil_subcompartment;scope_overlap;uncertainty | Measure actual sources or use independently supported applicable species/technology/fuel/control/activity methods. Reconcile basis and actual source coverage; preserve known receiving specificity and justify unspecified air. Aggregate only non-overlapping compatible species masses and divide by N once; neither supplied fuel nor CO2-equivalent automatically establishes a species release. | kg of each actual species | actual event or justified monitoring/model period | Same actual mission cohort/period;whole-life asset interfaces disclosed | Only actual attributable mission/provider/source cells;all users reconciled | per declared reference flow | Actual original records;scope/calibration;native-unit/source proof;uncertainty and closure |
| cp_provider | charter_mission | purchased_local_mission | provider_native_coverage_record | provider_ID;matched_local_mission_group_extent;native_unit_u;q_per_u;actual_demand_A_u;actual_conversion;covered_lifecycle_vehicle_period_cells;remaining_owner;all_user_share;normalization;uncertainty | Verify actual supplier function/native unit, group/itinerary/quality/duration/geography, real demand and complete covered-cell ledger. q_u*A_u*evidenced mission/all-user share/N once. Count only actual whole matching supplier mission; hour/day/leg/vehicle services need their own concrete identity and demand. Exact provider cells replace physical cells; only uncaptured responsibilities remain, and owned legs are not self-purchased. | Item(s);actual verified native supplier units | each actual mission;reconciled cohort | Same actual mission cohort/period;whole-life asset interfaces disclosed | Only actual attributable mission/provider/source cells;all users reconciled | per declared reference flow | Actual original records;scope/calibration;native-unit/source proof;uncertainty and closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_missions | all inventory rows | Attribute actual compatible native quantities to the functionally consistent mission cohort with evidenced direct/shared coverage,then divide by its positive completed-mission N once. Do not divide by passengers/occupancy or repeat final normalization. | cp_missions;cp_operation;cp_support;cp_maintenance;cp_assets;cp_emissions | native quantity per1Item(s) completed mission |  |
| asset_equivalence | diesel_coach;electric_coach | For each physical coach/component, actual delivered manufacture count times studied compatible duty / positive documented same-asset all-user lifetime duty gives attributed manufacture quantity; then /N completed missions. Include actual scheduled/charter/other asset users in the denominator. Keep manufacture, replacements, repair and retirement disjoint; no annual purchase/depreciation/hire money stands in for native physical demand. | cp_assets;cp_missions | native manufacture equivalents per reference |  |
| party_distance | charter_mission | Supplemental passenger-distance=sum actual persons on each segment times actual segment km. Actual party/vehicle/time records supplement the group-mission result and do not alter its Count reference. | cp_missions;cp_operation | supplemental passenger-distance and exposure |  |
| native_provider_contribution | purchased_local_mission | Actual q_u per verified native u times real compatible A_u times supported mission/all-user share /N once; covered physical cells replace exact local cells, not additive. Whole mission versus actual hours/day/vehicle/person-distance functions need verified dimensionally matching demand. | cp_provider;cp_missions;actual covered-cell ledger | exclusive provider contribution per reference flow |  |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| mission_fulfilment | completed_local_charter_mission | Require actual group mission/party,operator/organiser control,itinerary/return/stops,quality,duration,acceptance and positive completed N. Clarify charter versus scheduled person-leg,booking or renter-controlled availability using actual function,not timetable/payment alone. Unknown function or completion blocks production. | cp_missions |
| actual_energy | diesel_supply;charging_ac;support_ac | Expand each actual fuel/formulation/phase, auxiliary heater, external AC/DC/swap or actual energy export with native identity/quantity and full gate/loss coverage. All actual qualifying bus/coach propulsion remains applicable; missing native data blocks completion, not scope. Whole mixture with composition/origin ledger OR replacing components, never both; net withdrawal is not combustion. For actual fuel-cell H2 retain purity/state/pressure, storage/compression/supply, reaction consumption, separate leaks/vents and real water vapour/liquid/receiver fates, not waste by default. | cp_operation |
| actual_incidental_services | support_ac;tap_water;detergent | Identify every actual included meal/drinking product,driver overnight/rest facility,safety/accessibility,guide or other support at its real function/native output and provider boundary. Model actual included transport incidentals and separately define independent products; never delete an included component to fit the reference. Each supplier/ingredient/energy/waste coverage cell has one owner; missing identity/quantity/scope blocks completion. | cp_support |
| actual_materials | detergent;r134a_supply | Every actual lubricant,cleaner/disinfectant,reagent concentration,other refrigerant,tyre,spare or independently supplied component needs its exact formulation/state/native quantity and independent atomic exchange. Existing examples prove neither occurrence nor generic material coverage; missing needed data blocks completion. | cp_support;cp_maintenance |
| actual_assets | diesel_coach;electric_coach | Complete each actual configured coach,battery,road,depot,terminal,charger,safety/conditioning asset and its lifecycle components at native gates. Keep manufacture-only supply demand separate from operation,maintenance,replacement and retirement. Require positive same-asset all-user lifetime duty and uncertainty; missing phases or life evidence blocks complete use. | cp_assets |
| actual_providers | all inventory rows | Every real subcontracted transport,vehicle/driver,hospitality,repair,digital support or treatment result needs an independently verified actual native exchange,quantity and coverage/replacement matrix. No freight,asset,person-distance or money UUID is forced into the group-mission Count reference. Unknown provider scope blocks completion. | cp_missions;cp_support;cp_assets |
| actual_fates_species | spent_oil;wash_wastewater;co2_fossil;ch4_fossil;n2o;pm25;r134a_air | Expand every actual waste,retired whole asset/component,battery,sludge,filter,packaging,food residue,water fate,reused product,treatment service and every substance/particle/source/receiving subcompartment separately. Wholeobject/component,PM sizeclasses and factor-scope views must not overlap. Preserve wet/native/chemical bases and actual receiver responsibility; missing fate/species is not zero. | cp_maintenance;cp_emissions;cp_support;cp_assets |
| atomic_completion | all inventory rows | Each actual added exchange carries unique row_id,one actual process parent,direction/type,concrete UUID or registered unresolved identity,native property/unit,amount,source/recipient gate and a valid same-parent protocol linked to its triggering requirement_id. Actual non-use/provider inclusion needs affirmative evidence; generic range absence neither waives quantities nor permits guessed values. Preserve chemical/formulation/wet-dry basis, raw source, exact lifecycle/provider covered cells, receiver/known subcompartment and uncertainty for each actual row. | all declared collection protocols |
| actual_other_bus_coach_configurations | charter_mission | MANDATORY: actual diesel/biofuel, gas/liquid/other combustion, hybrid, BEV/fuel-cell and any other real qualifying bus/coach chassis/drive need independently defined native complete asset/initial components/tanks/stack/battery, external energy and auxiliary/reagent/control/safety/accessibility records. Collect all-user manufacture-use-maintenance-replacement-retirement and each actual species/waste/fate, not just the three assembly examples. A manufacturer medium/long-distance example neither proves local charter use nor restricts functional applicability. No universal factor, lifetime or zero-direct/whole-life claim. | cp_operation;cp_assets;cp_support;cp_maintenance;cp_emissions |
| original_scope_and_acceptance | completed_local_charter_mission | MANDATORY: original and actual timestamped changed contract, group/vehicles/driver responsibilities, local geography, actual itinerary/return/duration/quality and acceptance records. Define real mission membership versus multi-mission orders, fleet duties/replacements/internal legs and driver changes. Preserve failures/partial/cancelled/no-show duties and real independently accepted partial/amended outputs, without retrospective scope shrinking or fee-as-delivery. Zero-passenger standby needs actual qualifying mission fulfilment proof, not automatic hire-availability equivalence. | cp_missions;actual contract and accepted delivery history |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| mission_reference | charter_mission | One completed actual accountable group mission is1Item(s). Verify itinerary/party/return/stops/duration/quality and N>0; reject passengers,seats,coaches,invoices,hours or capacity as automatic completed-mission counts. |  |
| period_and_failure | charter_mission | Actual numerator,completed mission cohort,party/vehicle exposure and causal all-user drivers align. Retain empty,waiting,recovery,failed/partial and zero-output pools; N=0 has no finite mission intensity and does not delete burden. |  |
| provider_and_assets | charter_mission | Every phase has one owner; validate native provider functions and manufacture-only supply gates,positive same-asset lifetime ratios,initial/replacement battery and whole/component fates. A full-life provider replaces exact included local fuel/emission/support/capital quantities. |  |
| physical_closure | charter_mission | Check wholeblend/component exclusivity,supply/withdrawal/burn/spill/recovery,charger/depot/internal energy,gross exports,refrigerant balance,actual water/waste fates and particle overlaps. Direct species mass and receiving scope need actual proof; no default density,occupancy,factor,meal rate or life. |  |
| included_functions | charter_mission | Validate actual mission-incidental food/water,safety,driver rest/hotel support and separate products at their declared function. Included transport obligations cannot be dropped,capacity is not occupancy,and a sightseeing/tour-package or renter-controlled availability function cannot be relabelled charter mission. |  |
| atomic_and_profile | charter_mission | Each protocol process_id equals one existing processInventory.id and each card protocol exists at its own parent. Match bilingual rule/card/native/source fields and current projection fingerprints. Resolve actual identities/quantities/coverage/fates before downstream use; checker pass is not external verification or publication readiness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset only after all mandatory identity,quantity,coverage,fate and functional review requirements are complete |
| allowed_use | Actual qualified local urban/suburban non-scheduled bus/coach charter group mission with harmonized actual contract extent, vehicles/group, itinerary/duration/quality, propulsion/native lifecycle and accepted completion |
| excluded_use | Generic passenger-leg/pkm/hour/fleet/order output;client-full-control rental,sightseeing or scheduled service relabelled charter;automatic car-availability completion;failed scope shrunk to success;incomplete actual lifecycle |
| required_metadata | actual_64118_local_urban_suburban_geography;non_scheduled_operator_charter_vs_full_client_control;original_mission_group_extent_itinerary_stops_return;actual_vehicles_drivers_passengers_and_continuity;actual_duration_quality_accessibility;chronological_amendments_and_accepted_completion;partial_failed_cancelled_no_show_and_standby_evidence;actual_propulsion_native_supply_stock_and_fates;driver_and_included_incidental_function_boundaries;same_period_comparable_mission_strata;provider_native_demand_exact_covered_cells;same_asset_positive_all_user_useful_duty;known_substance_receiver_subcompartment_and_uncertainty |
| required_quality_disclosure | Actual mission/party/completion uncertainty;native identities/provider coverage;empty/failed pools;asset life forecasts;included functions;source/medium/fate;allocation and limitations |
| update_trigger | Changed mission function/party/itinerary/duration/quality,provider or vehicle/energy,asset life,incidental function,source/medium/fate or completion rule |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-coach-charter-2025 | official_guidance | UNSD,CPC3.0 Explanatory Notes,30June2025,printed/PDF pp360,362,64118/64223 charter and66011 exclusion. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Actual64118local urban/suburban non-scheduled charter/control and exclusions; typical route/timetable and general time/distance/multiple destinations are not absolute gates. Mission Count/acceptance and full propulsion/lifecycle formulas are PCR choices. |
| eu-occasional-service-2009 | official_guidance | Regulation(EC)1073/2009,as adopted21October2009,Articles2/5 official reproduction. https://www.legislation.gov.uk/eur/2009/1073/article/2/adopted?view=plain and https://www.legislation.gov.uk/eur/2009/1073/article/5/adopted?view=plain | Dated EU regular/special-regular/occasional-group comparison;periodicity alone is not conclusive. No universal current legal,licence or CPC test,party-size or mission formula inferred. |
| ipcc-road-combustion-2006 | official_guidance | IPCC,2006Guidelines,Vol2Ch3MobileCombustion,§3.2,pp3.10–3.16. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Fuel/activity/technology/control and reagent/carbon-origin distinctions only. No default road factor or national-inventory cut-off imported into lifecycle mission result. |
| eea-electric-vehicles | official_guidance | European Environment Agency,Electric vehicles,Overview. https://www.eea.europa.eu/en/topics/in-depth/electric-vehicles | Qualitative production/battery and persistent road/tyre/brake-wear lifecycle context only. No passenger-car average,coach consumption,range,asset life or numerical benefit transferred. |
| ghg-product-standard-2011 | standard | WRI/WBCSD,Product Life Cycle Accounting and Reporting Standard,2011,chapters6–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Functional/boundary/data disclosure and subdivision/justified physical allocation hierarchy. Expanded capital,mission delivery and duty equations are explicit PCR methods,not universal factors or capital mandates claimed from this standard. |
| irizar-fuelcell-coach-2026 | official_guidance | Irizar,La nueva generación del Irizar i6S Efficient H2 FCEV ya está aquí,29May2026. https://www.irizar.com/media-center/noticias/nueva-generacion-irizar-i6s-efficient-h2-fcev-ya-esta-aqui | Actual hydrogen fuel-cell/electric motor-coach technology example only; described medium/long-distance design does not prove local charter use. No range,refill time,capacity,vehicle life,zero-lifecycle/comparative benefit or universal gas phase/grade adopted. |
