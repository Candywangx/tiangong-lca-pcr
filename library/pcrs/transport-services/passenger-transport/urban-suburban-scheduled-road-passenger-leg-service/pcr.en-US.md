---
pcr_id: pcr.urban-suburban-scheduled-road-passenger-leg-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Urban-suburban public scheduled road passenger leg service

## 1. Scope and Applicability

This dedicated PCR covers public scheduled road passenger conveyance within a single city or contiguous cities, on predetermined routes and schedules and available to all users. Actual motorbus, tramway, trolleybus and similar mechanisms are included with their complete physical interfaces. Tram steel wheels/rails do not by themselves place it in 64111; classification follows actual 64112 service notes and route function.

Exclude specific-user-segment/school/worker special-purpose service64114, interurban service64221, railway64111, charter/hire, taxi/on-demand, sightseeing experience and integrated multimode final journey. Free accompanying luggage/animals/items remain part of the real passenger service; independently sold cargo/other outputs require actual subdivision or justified joint allocation. Do not infer public availability from a repeated timetable alone.

One reference is a real completed urban/suburban public scheduled road passenger leg, not a ticket, boarding count without completion, linked journey, vehicle departure, seat or passenger-km. Declare actual OD/stops/distance or distribution, service quality/period and mechanism. Equal Count outputs do not establish equivalent travel distance or service. Incomplete/empty/failed duties remain in the causal service pool before positive actual N normalization; N=0 has no finite intensity.

Full vehicle/traction/supply/site operation, manufacture, installation/refit, maintenance/replacements and retirement are mandatory declared PCR lifecycle choices. Sources support classification and physical questions, not universal fuel/voltage/occupancy/life/material factors. Actual electric traction remains dependent on upstream supply, network losses, assets and non-exhaust fates; no default zero-tailpipe=lifecycle-zero or generic quantitative range.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.urban-suburban-scheduled-road-passenger-leg-service |
| classification_refs | CPC 3.0 64112 only; exact dedicated full scope |
| covered_products | Actual public scheduled urban/suburban motorbus/tramway/trolleybus/similar road passenger leg within one city/contiguous cities |
| excluded_products | Railway64111; specific-user64114; interurban64221; charter/hire/taxi/on-demand/sightseeing; integrated multimode finaljourney |
| representative_product | Completed public urban-suburban scheduled road passenger leg |
| production_route | Actual dedicated urban public scheduled leg and complete attributed vehicle/traction/grid/site lifecycle |
| market_state | Actual completed qualified boarding-to-alighting leg, not unused transport right |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed public urban-suburban scheduled road passenger leg |
| How much | 1 actual passenger completing one eligible public urban/suburban scheduled road leg |
| How well | Actual route/stops/OD/distance, mechanism, timetable/quality/accessibility and includedcontent |
| How long or cycle | Actual boarding-to-alighting leg and attributed full period/lifecycle duties |
| reference_flow_link | completed_public_urban_leg |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed public urban-suburban scheduled road passenger leg |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | public_all_user_availability; single_city_or_contiguous_city_group; predetermined_route_and_schedule; actual_boarding_alighting_stop_OD; passenger_distance_distribution; completed_leg_N_and_period; motorbus_tramway_trolleybus_or_actual_similar_mechanism; actual_propulsion_and_offwire_states; traction_grid_contactline_AC_DC_gates; regeneration_losses_storage_export; actual_quality_accessibility; passenger_driver_support_roles; included_luggage_animals_items; other_users_cargo_allocation; failed_empty_deadhead_duty; provider_lifecyclecells; sameasset_alluser_life; actual_waste_species_medium_uncertainty |

Required qualifiers enter the actual foreground package. N is actual completed eligible passenger legs in the equivalent declared cohort/period, N>0. Completion, partial/failed/shortturn outcomes, actual segment/other-user distance and stock/cross-period duties close before normalization once. Drivers/staff supporting service are not additional passenger outputs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_distance | urban_scheduled_road_service | Actual native compatible property | Actual native unit | Do not interchange passengerlegs/tickets/boardings/linkedjourneys/seats/vehicletrips/km/pkm. Actual passengerstop distance/distribution mandatory; a perpkm result needs its own supported basis, not relabelled Count. |
| native_conversion | urban_scheduled_road_service | Actual native compatible property | Actual native unit | Preserve actual native properties/states; compatible kWh only verified 3.6 MJ/kWh. Volume-mass needs actual density/state; completeasset Count versus kg needs actual measured scope relationship. AC/DC are different identities/gates, conversion does not justify UUID substitution. |
| species_fates | urban_scheduled_road_service | Actual native compatible property | Actual native unit | Keep kgcompound versus elementalC/N/S, fossil/biogenic, tyre/steel/contact sources, PMsize and actual air/water/soil/deposit/collected fates distinct. Refrigerant recharge not leak, water evaporation not waste, capturedwear not direct air. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual64112public urban route/cohort, motorbus/tram/trolley/similar and all supply/grid/site/provider/asset gates |
| starting_condition_role | Actual foreground/gate facts, not zero burden prior assets or electric supply |
| product_classification_scope | Only full 64112 public scheduled urban/suburban road function, including actual tram/trolley mechanisms |
| recursive_input_rule | Subcontracted exact eligible service replaces covered native stagecells once, not additional self-recursive passenger output |
| upstream_dataset_requirement | Actual type/nativeunit/quality/technology/gate/geography/period/alluserlife/providercoverage for supply/assets/treatment |
| disclosure | Actual all-user duty/completion, AC_DC/regeneration/stock/fate/provider/asset/routecomparability and unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| whole_service | urban_scheduled_road_service | Include actual scheduled loaded/zero-passenger/empty/deadhead/reposition/layover/start/idle/failed/shortturned/rescue/preparation duties, passenger accessibility/HVAC/control and depot/stops/terminal support causally attributable to this service; other users/subcontractors owned once. | ghg-product-2011 |
| tram_physical | urban_scheduled_road_service | For actual tramway retain wheel-rail/bogie/axle/traction/brake/rail/points/embedded or segregated track/return current, collector strip/pantograph/contactwire/substation and protection interfaces. Actual steelwear/grinding/lubrication/sanding/brake/collector maintenance and air/deposit/water/waste fates require independent evidence. Do not infer all these materials present or use generic road-tyre factors for tram steelwear. | ghg-product-2011 |
| trolley_physical | urban_scheduled_road_service | Actual trolleybus retains rubber-tyre/road interface, two-pole/contact-wire/collector/return supply and actual off-wire battery/generator/auxiliary states. Match independent actual identities for battery/DC supply/fuel/converter and full wire/vehicle/site lifecycle; no trolleybus=ordinarybatterybus assumption. | ghg-product-2011 |
| energy_recovery | urban_scheduled_road_service | Draw actual gate graph from upstream AC/provider to rectification/contactline/charger/storage/vehicle and external export. Assign losses once. Recovered braking to onboard/network/wayside storage/another vehicle is internal at a whole-network boundary; actual external transfer is separately metered. Braking resistor heat/dissipation or unavailable network acceptance is not automatically exported/avoided electricity. Gross versus net meters and all-user ownership explicit, no net-saving plus duplicate credit. | ghg-product-2011 |
| capital_provider | urban_scheduled_road_service | Complete actual bus/tram/trolley/battery/road/track/wire/substation/charger/depot/stop/terminal manufacture, installation, renewal, use, maintenance and retirement responsibility. Delivered asset flow supports only verified manufacturing gate; useful life is allocation denominator only. Complete assembly versus same included initial components and actual inclusive provider coverage are exclusive. | ghg-product-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| urban_scheduled_road_service | Public urban scheduled road passenger-leg fulfilment and lifecycle | required | Actual full eligible64112 function | foreground | completed_public_urban_leg |

### Process: Public urban scheduled road passenger-leg fulfilment and lifecycle (`urban_scheduled_road_service`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

Only actual compatible diesel engine/auxiliary duty with real grade/blend/gate. Whole delivered blend plus composition/carbon-origin ledger OR physical component supplies replacing matching coverage, never both. Supply/net withdrawal is not actual burn: retain stock, spills, recovered/reused and transfers independently.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_diesel_net_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`
- Sources: ipcc-road-rail-2006

###### Alternating current (`external_ac`)

Actual gross AC grid/provider supply at named depot, charger, traction-substation or site gate. Own rectification/network/charger/storage losses inside that gate remain included. If this represents own upstream supply, the same internally delivered DC/charge is not another upstream purchase; provider DC including upstream electricity replaces corresponding AC coverage.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_external_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_electric`
- Sources: skoda-trolleybus-case; siemens-regeneration-case

###### Direct current electricity delivered at traction contact gate (`purchased_traction_dc`)

Only actual independently purchased compatible DC at the vehicle/contact-line gate, with polarity/voltage/quality and provider losses/lifecycle coverage declared. Not an AC UUID. Own substation AC-to-DC is internal transfer, not duplicate supply. Separate bus charging, tram pantograph and trolley poles as actual row gates when their states/providers differ.

- Selected flow: Direct current electricity delivered at traction contact gate
- Flow property / unit: Energy / MJ
- Amount rule: attributed_externally_purchased_traction_DC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_electric`
- Sources: skoda-trolleybus-case; siemens-regeneration-case

###### Tap water (`wash_water`)

Only actual municipal/potable tap water cleaning supply, not raw abstraction/recycled/deionized water. Preserve supplied/retained/evaporated/collected/direct-release fates with actual density/state for volume-mass conversion.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: attributed_cleaning_tap_water_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_depot`
- Sources: ghg-product-2011

###### Refrigerant, R134a (`r134a_supply`)

Only actual separately supplied compatible single R134a formulation/purity/state. No blend/recovered mixture proxy. Initial charge included in asset supply cannot be repeated; recharge, stocks, recovery and actual leak differ.

- Selected flow: Refrigerant, R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- Flow property / unit: Mass / kg
- Amount rule: attributed_R134a_recharge_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ghg-product-2011

###### Complete diesel scheduled-passenger bus, delivered (`diesel_bus`)

Actual complete diesel motorbus only; not tram, trolleybus or whole-life passenger service. Delivered manufacturing/supply only. Same-asset all-user useful duty allocates that coverage, not whole-life operation/EoL. Independently complete uncaptured install/refit/maintenance/replacements/retirement; whole assembly and its same included initial components are exclusive.

- Selected flow: Complete diesel scheduled-passenger bus, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_diesel_bus_manufacture_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Complete battery-electric scheduled-passenger bus, delivered (`battery_bus`)

Actual complete battery-electric bus with explicit initial battery inclusion. Delivered manufacturing/supply only. Same-asset all-user useful duty allocates that coverage, not whole-life operation/EoL. Independently complete uncaptured install/refit/maintenance/replacements/retirement; whole assembly and its same included initial components are exclusive.

- Selected flow: Complete battery-electric scheduled-passenger bus, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_battery_bus_manufacture_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Complete steel-wheel electric tram passenger car, delivered (`tram_car`)

Actual complete steel-wheel electric tram assembly with bogie/traction/collector/brake/cabin scope; no assumed all trams are this configuration. Delivered manufacturing/supply only. Same-asset all-user useful duty allocates that coverage, not whole-life operation/EoL. Independently complete uncaptured install/refit/maintenance/replacements/retirement; whole assembly and its same included initial components are exclusive.

- Selected flow: Complete steel-wheel electric tram passenger car, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_tram_car_manufacture_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Complete overhead-wire electric trolleybus, delivered (`trolleybus`)

Actual complete rubber-tyred trolleybus with actual contact poles/traction and optional off-wire battery or generator scope. Delivered manufacturing/supply only. Same-asset all-user useful duty allocates that coverage, not whole-life operation/EoL. Independently complete uncaptured install/refit/maintenance/replacements/retirement; whole assembly and its same included initial components are exclusive.

- Selected flow: Complete overhead-wire electric trolleybus, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_trolleybus_manufacture_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Finished steel tramway rail, delivered (`steel_rail`)

Conditional actual finished steel running rail of documented profile/grade/length/supply gate, not raw steel, ballast or complete track. Actual track/slab/sleeper/fastener/points/return-current/bonding/grinding and replacement fates need independent coverage; complete-track provider and its same initial rails are exclusive.

- Selected flow: Finished steel tramway rail, delivered
- Flow property / unit: Mass / kg
- Amount rule: attributed_finished_steel_rail_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Finished copper traction contact wire, delivered (`copper_contact_wire`)

Only actual copper contact wire with actual composition/profile/tension/location and manufacturing gate; copper alloy contact wire, messenger cable, insulated supply cable and collector strips are different actual identities. Installed overhead network/supports/switches/return conductors and maintenance/retirement remain independently covered.

- Selected flow: Finished copper traction contact wire, delivered
- Flow property / unit: Mass / kg
- Amount rule: attributed_finished_copper_contact_wire_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed public urban-suburban scheduled road passenger leg (`completed_public_urban_leg`)

One real passenger completes actual boarding-to-alighting public scheduled road conveyance within one city or contiguous-city group, by actual motorbus/tramway/trolleybus/similar mechanism. Actual route, stop OD, distance/distribution, timetable/period, quality and mechanism qualify it. Free riders/children count real persons, not adult/seat equivalents. Vehicle changes giving separately boarded legs are distinct; linked multimode journey or unused ticket is not this output.

- Selected flow: Completed public urban-suburban scheduled road passenger leg
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion`
- Sources: unsd-cpc3-64112

###### Alternating current (`external_export_ac`)

Only actual metered compatible AC exported outside the declared system, with provider/network credit/allocation method disclosed. Internal vehicle-to-vehicle/network/stationary-storage regeneration is not external exported product or second virgin supply. Do not net-reduce imports and claim a second credit for the same recovery; separate storage/network losses and brake-resistor dissipation.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_external_export_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_electric`
- Sources: siemens-regeneration-case

##### Waste flows

###### Used lubricating oil (`used_oil`)

Actual separately collected used petroleum lubricating oil at generation, composition/receiver documented. Not hydraulic fluid, oily wash water, rags or leaked chemical emission. Fresh formulation and retained/consumed/recovered/collected fates independently measured.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_petroleum_used_oil_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ghg-product-2011

###### Collected passenger-vehicle maintenance-wash wastewater (`wash_wastewater`)

One actual independently collected aqueous vehicle-wash stream before treatment with real composition/receiver/gate. Not direct environmental discharge, toilet sewage or a treatment result. Waste transport/treatment and dissolved/released substances stay distinct.

- Selected flow: Collected passenger-vehicle maintenance-wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_vehicle_wash_wastewater_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_depot`
- Sources: ghg-product-2011

###### Collected worn rubber passenger-bus tyres at generation (`spent_tyres`)

Actual rubber-tyred bus/trolleybus tyre retirement collection only, with real composition/contamination and receiver. Not steel tram wheel, airborne tyre PM, factory tyre production mix or assumed treatment/recycling product. Retreading/carcase reuse and collected versus released wear have independent actual fates.

- Selected flow: Collected worn rubber passenger-bus tyres at generation
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_worn_bus_tyres_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ghg-product-2011

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2_air`)

Actual kg fossil CO2 from actual burned/source activity, including separately evidenced reagent carbon when applicable; not fuel mass/biogenic CO2/upstream electricity exhaust.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known urban, non-urban or near-ground state to fit it; each actual known receiving state requires its independently verified compatible row without duplicate release.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_fossil_co2_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-road-rail-2006

###### methane (fossil) (`fossil_ch4_air`)

Actual fossil CH4 source and air state, not total VOC/natural-gas mixture or CO2e. Actual applicable engine/auxiliary/fugitive method required, no default factor or missing-as-zero.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known urban, non-urban or near-ground state to fit it; each actual known receiving state requires its independently verified compatible row without duplicate release.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_fossil_ch4_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-road-rail-2006

###### nitrous oxide (`n2o_air`)

Actual kg N2O with source/control/activity evidence, not kg N, NOx or CO2e.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known urban, non-urban or near-ground state to fit it; each actual known receiving state requires its independently verified compatible row without duplicate release.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_n2o_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-road-rail-2006

###### particles (PM2.5) (`pm25_air`)

Actual separately quantified airborne PM2.5 after controls from combustion or specific tyre/brake/wheel-rail/collector sources; retain actual source composition and nonoverlapping particle classes, captured/deposited/runoff fates independently. Not total dust residual.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known urban, non-urban or near-ground state to fit it; each actual known receiving state requires its independently verified compatible row without duplicate release.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_pm25_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ghg-product-2011

###### HFC-134a (`r134a_air`)

Actual single HFC134a mass released to actual air state, not recharge or CO2e. Balance initial/recharge/stored/recovered/retired charge and leak separately; no official Chinese baseName is available for this verified release identity, so retain its canonical name.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known urban, non-urban or near-ground state to fit it; each actual known receiving state requires its independently verified compatible row without duplicate release.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_r134a_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ghg-product-2011

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| all_users | urban_scheduled_road_service | First subdivide actual service strata and separable cargo/other products. Driver/operating attendants are support, not additional passenger outputs; actual infants/free passengers count persons. Allocate inseparable actual segment/route/depot/wire/track/road/asset duties across all real users with documented causal compatible physical drivers and sensitivity; no passenger/tonne-km addition, fixed occupancy or arbitrary ratio. | ghg-product-2011 |
| asset_native | urban_scheduled_road_service | For same asset actual delivered native quantity times cohort compatible duty/positive complete-life all-user useful duty, then/N. Actual hours/km/cycles/calendar/trackloading/wireuse are chosen by demonstrated causal relation, not financial depreciation or invented conversion. Manufacture allocation does not supply operation/maintenance/retirement; all uncovered stages independently completed. | ghg-product-2011 |
| provider_scaling | urban_scheduled_road_service | Purchased per-vehicle-km/hour/pkm/vehicle/maintenance/treatment result scales actual compatible attributed activity before /N. Per-pkm requires real passenger distance/membership, not capacity; already per-equivalent completed public urban leg is not divided again. Provider covers exact stage/flow cells, replacing only those same foreground exchanges; no freight/manufacturing UUID as Count passenger output. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | urban_scheduled_road_service | completed_public_urban_leg | operational_record | actual_public_eligibility; city_contiguity; route_schedule; stop_OD; completed_partial_failed; distance_distribution; passenger_staff_roles; period; N | Verify actual all-user availability and single/contiguous-city route, actual completion/passenger-stop cohort; separately record partial/shortturn/empty/zero-passenger duties and all actual segment users. Include causal duty in numerator then divide positive actual N once; no ticket/capacity/boardings shortcut. | Item(s) | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_fuel | urban_scheduled_road_service | diesel | operational_record | actual_engine_aux; grade_blend_origin; stock_open_receipts_close_returns; netwithdrawal_burn_spill_recovery; allusers_providercells | Measure actual grade/state native supplies/stocks and evidenced burn separately; wholeblend+composition ledger OR replacing component inputs, never both. Attribute real loaded/empty/idle/auxiliary compatible duty across actual users before /N; other real fuels independently expanded. | kg | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_electric | urban_scheduled_road_service | external_ac; purchased_traction_dc; external_export_ac | operational_record | gate_graph; AC_DC_voltage_polarity; meter_gross_net; rectifier_line_charger_storage_losses; pantograph_poles; regeneration_acceptance; resistor_heat; internal_external_transfer; allusers_providercells | Build actual physical ownership/gate energy balance: imports, real externally purchased DC, internal conversion/storage/recovery, actual external exports and dissipation separately. AC supply and same inclusive upstream DC exclusive; grid/network/braking energy not virgin supply twice. Use each measured compatible native quantity with actual whole-network/all-user sharing then/N; no assumed regeneration percentage. | MJ | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_depot | urban_scheduled_road_service | wash_water; wash_wastewater | operational_record | site_wash_cleaner; input_stock_fates; actual_stream_composition_receiver; losses; alluser_driver; provider_cells | Actual cleaning/site activities, water stock/use/evaporation/collected/direct fates and receiver/treatment gates independent. Collect every actual cleaner/material/utility/waste separately; do not infer wastewater from water input alone. Attribute actual all users then/N. | kg; actual native quantities | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_maintenance | urban_scheduled_road_service | r134a_supply; used_oil; spent_tyres | operational_record | actual_vehicle_track_wire_parts; formulation; service_renewal; input_stock_consumed_retained; tyre_steelwear_collected_release; refrigerant_stock_recovery_leak; receiver_transport_treatment | Record actual motorbus/tram/trolley and track/wire maintenance, replacement/retirement, each real material and native fate. Separate initial/recharge/stock/recovery/refrigerant leak, new oil/collected oil and tyre/steel wear/collected retired material. Actual treatment/transport coverage and all-user event allocation before/N, no assumed residual releases or recycling credit. | kg; Item(s); actual native quantities | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_assets | urban_scheduled_road_service | diesel_bus; battery_bus; tram_car; trolleybus; steel_rail; copper_contact_wire | operational_record | asset_id; actual_delivered_native_quantity; manufacturinggate; whole_components; initial_replacement; sameasset_cohort_duty; positive_complete_life_allusers; road_track_wire_substation_sites; retired_providercells | For each same asset native delivered manufacture quantity times supported cohort/positive total all-user life duty then/N, manufacture gate only. Native complete-vehicle Item(s) versus rail/wire kg needs actual support, no invented mass. Include uncaptured install/refit/use/maintenance/renewal/EoL independently, exact provider cells replacing duplicates; whole object versus initial components exclusive. | Item(s); kg | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_emissions | urban_scheduled_road_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air; r134a_air | operational_record | actual_source_substance_CAS; chemistry_C_N_S; size_composition; fuelburn_or_leak_wear_activity; medium_subcompartment; abatement_capture; deposit_runoff_waste; methodfactor_applicability; uncertainty; allusers | Independently measure/model each actual source/species/size/medium with documented compatible physical activity and method; chemical basis/carbon origin and control retained. Combustion, wheelrail/brake/tyre/contact wear and refrigerant fates separately evidenced, no supply=emission or CO2e-to-substance. Quantify actual air/deposit/water/collected split without invented fractions; all-user quantity/N, unknown is not zero. | kg specific substance | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| native_normalization | urban_scheduled_road_service | Actual compatible raw quantity times evidenced cohort/alluser shares; close all actual failed/empty/loaded/support/stock duties then divide positive N once. Compatible provider perkm/hour/pkm times actual native activity first, already equivalent each leg no second division. | cp_completion; cp_fuel; cp_electric; cp_depot; cp_maintenance; cp_emissions | Actual attributed native quantity per reference | ghg-product-2011 |
| asset_manufacture | urban_scheduled_road_service | Same asset actual delivered native quantity times compatible cohort/positive complete-life alluser usefulduty then/N, manufacturing gate only. Uncovered install/use/refit/replacement/maintenance/retirement separate, wholeinitialcomponent/providercoverage exclusive. | cp_assets | Actual attributed native quantity per reference | ghg-product-2011 |
| energy_stock_fates | urban_scheduled_road_service | Separately reconcile fuelstock supply/netwithdrawal/burn/spill/recovery and electrical grossimports/providerDC/internalconversion/storage/regeneration/export/losses/dissipation. Wholeblend vsreplacingcomponents exclusive. Actual compatible species/source activity and medium not fabricated from residual or metering mismatch. | cp_fuel; cp_electric; cp_emissions | Actual attributed native quantity per reference | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| scope_completion | urban_scheduled_road_service | Actual64112public-allusers, single/contiguous-city, predeterminedroute/schedule and completed leg evidence required; distinguish railway/specialuser/interurban/charter/tour. Include real accompanying free luggage/animals/items, real passengers versus driver/support. Actual stopOD/distance/period/quality/mechanism and positive N mandatory. | cp_completion |
| tram_wheelrail | urban_scheduled_road_service | For actual tram derive real bogie/wheels/axles/rails/points/sleepers_slab/fasteners/returncurrent/brakes/sanding/lubrication/grinding and noise interfaces from technical records. Every actual independently supplied/replaced material, emitted species/size/medium, captured grinding residue/deposit/runoff/waste and receiver gets independent identity/native amount; no generic tyrePM factor or default steelwear split. | cp_maintenance; cp_assets; cp_emissions |
| trolley_contact_power | urban_scheduled_road_service | For actual trolleybus/tram/similar record actual collector poles/pantograph/strip/contactwire/alloy/support/feed_return/substation/protection and native current/voltage/energy gates. Offwirebattery/generator, overhead charging and all actual hybridstates independent; actual each material/state/gate CP-linked row required, not all vehicles assumed same. | cp_electric; cp_assets; cp_maintenance |
| network_energy | urban_scheduled_road_service | Resolve each real gridAC/providerDC/contactline/charger/vehicle/waysidestorage/othervehicle boundary and loss, regeneration transfer/acceptance/resistor dissipation/external export with actual meters/balance and all users. Gross/net data and provider inclusions mutually exclusive; no arbitrary regeneration credit or assumed AC/DC identity conversion. | cp_electric |
| other_inputs | urban_scheduled_road_service | Identify every actual other fuel/hydrogen/heat/steam, electrolyte/battery chemistry, oil/hydraulicfluid/cleaner/disinfectant/SCR reagent/refrigerant, component/tyre/collector alloy/rail coating/sand/water state and independent service/utility. Each actual exchange gets unique rowID,oneexistingprocess,direction/type,singleidentity/state,UUIDorunresolved,nativeproperty/unit/amount/rawsource,sameparentCP,calculation,providergate/receiver/uncertainty. | cp_fuel; cp_electric; cp_depot; cp_maintenance |
| all_asset_life | urban_scheduled_road_service | Independently cover all actual vehicle/battery/road/track/slab/wire/pole/substation/storage/charger/depot/stop/terminal/land manufacture/install/refit/renewal/maintenance/retirement with same asset alluser life evidence. Native count/mass relationships measured, no defaultcapacity/life; wholeobject and same included initial components exclusive; no old/leased asset automaticallyzero. | cp_assets |
| all_fates | urban_scheduled_road_service | Expand each actual worn rail/wheel/collector/tyre/brake/battery/component, washwater/sludge/filter/oilymaterial/packaging and treatment/reuse/disposal state as actual single collection flow with composition/gate/receiver/transport/treatment. Direct water/soil/air substance releases distinct; evaporation/unknownloss not waste. | cp_depot; cp_maintenance; cp_emissions |
| all_species_media | urban_scheduled_road_service | Independently quantify actual CO, specific nitrogenoxides/hydrocarbons/ammonia, biogeniccarbon/reagentcarbon/refrigerants, nonoverlapping particles with actual chemistry/source and receiving air/water/soil/deposit states, brake/rail/wheel/contact wear and actual noise. No NOx/VOC/dust umbrella or captured-emitted duplication; unspecifiedair UUID cannot erase known urban/nonurban/nearground. Missing LCIA characterization does not zero physical releases. | cp_emissions |
| provider_full_closure | urban_scheduled_road_service | Actual provider service/nativeactivity/lifecyclecell mapping required for every subcontracted energy/operation/asset/maintenance/treatment result. Multiply compatible raw perkm/hour/pkm/native quantity and complete actual failed/zerooutput/support duty beforeN; already equivalent each leg not divided twice. Every uncovered stage mandatory; missing data blocks complete application, not zero. | cp_completion; cp_assets; cp_electric; cp_maintenance |

These mandatory actual row-expansion tasks are not inventory selector exchanges. Each actual material/asset/supply/provider/waste/species/state gets unique rowID, one existing parent process, direction/type, one concrete identity/UUIDorunresolved, native property/unit/amount/rawsource, sameparentCP, method/gate/receiver/uncertainty. Establish actual occurrence or evidenced nonuse. Unknown blocks completeness, neverzero or semantic exclusion.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_scope_count | urban_scheduled_road_service | Reject nonpublic/specialuser/interurban/railway misselection, tram exclusionsolelyrails, missing actualOD/completion/positive N, ticket/boarding/capacity substitutes or omitted empty/failed duty. | ghg-product-2011 |
| native_identity_closure | urban_scheduled_road_service | Reject umbrella/selector, incompatible AC_DC/Mass_Count/chemical/medium UUID, fabricated factor/range, unknown-as-zero or omitted required expansion; each CP exactlyoneexistingprocess and linkedrow sameparent. | ghg-product-2011 |
| lifecycle_energy_provider | urban_scheduled_road_service | Reject manufactureasset treatedwholelife, vehicle/track/wire/road/site/EoL omission, unsupportedalluserallocation, grossnet/regenerationdoublecredit or inclusiveproviderduplicate. Verify bilingual method/source/requiredqualifier alignment. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset/background_dataset only after actual full native/identity/quantity/lifecycle evidence |
| allowed_use | Only qualified actual public urban/suburban scheduled road passengerleg64112 with full actual mechanism/gates/distance/quality |
| excluded_use | Specialuser/interurban/railway/charter/taxi/tour/multimodefinaloutput; universalperpkm or electriczerolifecycleclaim |
| required_metadata | public_all_user_availability; single_city_or_contiguous_city_group; predetermined_route_and_schedule; actual_boarding_alighting_stop_OD; passenger_distance_distribution; completed_leg_N_and_period; motorbus_tramway_trolleybus_or_actual_similar_mechanism; actual_propulsion_and_offwire_states; traction_grid_contactline_AC_DC_gates; regeneration_losses_storage_export; actual_quality_accessibility; passenger_driver_support_roles; included_luggage_animals_items; other_users_cargo_allocation; failed_empty_deadhead_duty; provider_lifecyclecells; sameasset_alluser_life; actual_waste_species_medium_uncertainty |
| required_quality_disclosure | All unknown actual identities/quantities/provider/asset/life/energybalance/wearfate/LCIA gaps and comparability limits |
| update_trigger | Changed publiceligibility/cityroute/schedule/OD/quality/mechanism/grid/recovery/provider/assetlife/wear/source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-64112 | official_guidance | UNSD CPC 3.0 Explanatory Notes30June2025,printed358–359,64112; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Actual full public scheduled motorbus/tram/trolley/similar geography, included accompanying items and railway/specialuser exclusions; no numeric inventory or native Count rule. |
| ipcc-road-rail-2006 | official_guidance | IPCC2006Guidelines Vol2Ch3 §3.2pp3.10–3.16 and§3.4pp3.39–3.40; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Actual fuel/engine/control/urea/carbon-origin and electric upstream questions. National inventory scope/defaultsoldfuel/allcarbon assumptions not adopted as complete lifecycle or actual release factors. |
| skoda-trolleybus-case | handbook | Škoda26Tr manufacturer technical case,public snapshot2026-10-21; https://www.skodagroup.com/reference/en-pokus-trolejbus-26tr | Conditional actual DCwire/offwirebattery-or-generator/recovery/HVAC/accessibility interfaces only; no universal voltage/power/capacity/dimensions/life/factors adopted. |
| siemens-regeneration-case | handbook | Siemens PortlandTriMet light-rail regenerative storage technical case,public snapshot2026-10-21; https://www.mobility.siemens.com/us/en/portfolio/references/portland-trimet-light-rail-case-study.html | Actual braking-to-substation-storage-to-othervehicles energy question; technical case is not64112classification or generic tram saving/material factor. All numerical predictions/benefit claims excluded. |
| ghg-product-2011 | standard | GHGProtocol ProductLifeCycleAccountingReportingStandard2011,chapters7–9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Boundary/data/subdivision/allocation principles. Full track/wire/wear/site/retirement scope, specific collection/Count-leg and same asset formulas are explicitly authoredPCR choices requiring actual records, not universal source factors. |
