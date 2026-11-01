---
pcr_id: pcr.interurban-scheduled-road-passenger-leg-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Interurban public scheduled road passenger leg service

## 1. Scope and Applicability

This dedicated PCR covers actual public interurban scheduled road passenger transport between non-contiguous cities over predetermined routes and timetables, available to all users. Actual motorbus, tramway, trolleybus and similar mechanisms remain in scope with their real physical/native interfaces. Do not substitute an arbitrary kilometre threshold, vehicle size, country border, an urban/contiguous-city condition or institutional eligibility for the actual non-contiguous-city service function.

Declare actual interurban service extent and each passenger boarding/final-alighting stopOD, distance/distribution, class/quality and period. Intermediate boarding/alighting at real route stops does not require invented city-centre endpoints, but a purely local ride is not automatically interurban merely because its vehicle also operates a longer route. Resolve actual service/cohort applicability from the offered and delivered extent; retain distinct local versus interurban strata rather than averaging away the difference.

One reference is one real completed public interurban scheduled passenger leg. Tickets/passes, reservations, departures, seats, boardings without completion, persondistance and an entire connected itinerary are different objects. A technical/rest stop or temporary reboarding does not by itself add output; a genuine independently delivered connection has its own leg, while an operational vehicle substitution preserving the same transport obligation is not automatically a new output. Define actual completion and responsibility through disruptions, shortturns/diversions, cross-period and carrier changes.

Include accompanying luggage, animals and other no-extra-cost items without multiplying passenger outputs. Distinguish actual separately sold cargo/mail/food/accommodation/other products and justify subdivision or shared physical allocation. On-duty driver/operating attendants are support, not passengers; actual transported relief crew require role evidence without double counting. Children/infants/free passengers count real persons, not assumed adult/seat/mass equivalents.

Retain actual complete long-route preparation, empty/deadhead/repositioning, waiting/border delays, driver change/rest and any required actual accommodation/sanitary/meal/accessibility/HVAC/terminal support within accountable service responsibilities, including failed or zero-passenger duties. Do not assume every vehicle has a toilet/berth, every route includes a meal/hotel, or every worker activity is a purchased labour/material exchange. Actual included necessary support cannot be deleted, and independently fulfilled products cannot be silently added. N is positive actual completed equivalent legs after causal whole-duty/all-user closure; N=0 gives no finite intensity.

Cover the entire declared transport leg and supporting lifecycle regardless of national statistical/fuel-accounting boundaries. Each actual country/segment/grid/fuel/provider gate, upstream supply, route/track/wire/vehicle/site asset, maintenance/replacements and retirement retains real ownership and native coverage. No carbon, occupancy, driver-rest-hour, meal, hotel-night, lifespan, regeneration share or numeric range is prescribed. Exclude actual urban/contiguous-city public function64112, special-purpose64114/64222 or interurban shuttle function, charter/hire, taxi/on-demand, sightseeing and integrated multimode final outputs after actual function review, not passenger destination labels alone.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.interurban-scheduled-road-passenger-leg-service |
| classification_refs | CPC3.0 64221 only; exact dedicated full officialscope |
| covered_products | Actual public scheduled road passenger legs on non-contiguous-city services by motorbus/tramway/trolleybus/similar, with actual servedextent/OD/quality/duty/lifecycle |
| excluded_products | Urban/contiguous-city public64112; actual specialpurpose64114/64222 or interurban shuttle; charter/hire/taxi/on-demand/sightseeing; integratedmultimode finaloutput |
| representative_product | Completed public interurban scheduled road passenger leg |
| production_route | Actual public interurban scheduled leg, complete actual intermediate/long-route/cross-border/support duty and vehicle/road/track/wire/grid/site lifecycle |
| market_state | Actually completed qualified interurban public transportleg, not pass/reservation/capacity or genericdistance output |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed public interurban scheduled road passenger leg |
| How much | 1 actual passenger completing one eligible public interurban scheduled road leg |
| How well | Actual non-contiguous-city serviceextent, stopOD/distance/intermediate stages, route/timetable, class/quality, mechanism and includedsupport |
| How long or cycle | Actual boarding-to-alighting leg and attributed full period/lifecycle duties |
| reference_flow_link | completed_public_interurban_leg |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed public interurban scheduled road passenger leg |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_noncontiguous_city_service_extent; public_all_user_route_and_timetable; actual_boarding_final_alighting_stopOD; actual_intermediate_segments_passenger_distance_distribution; through_reststop_reboarding_connections_substitution_and_completion; actual_class_quality_period_N; actual_motorbus_tram_trolley_similar_mechanism; actual_driver_change_rest_support_roles; actual_included_free_luggage_animals_items; actual_sanitary_meal_stay_accessibility_support; full_route_crossborder_carrier_provider_responsibility; empty_failed_zerooutput_preparation_duty; actual_supply_country_grid_fuel_gates; traction_AC_DC_recovery_losses_storage_export; sameasset_alluser_life; actual_other_products_native_allocation_and_fates_uncertainty |

Required qualifiers enter the actual foreground package. N is actual completed eligible passenger legs in the equivalent declared cohort/period, N>0. Completion, partial/failed/shortturn outcomes, actual segment/other-user distance and stock/cross-period duties close before normalization once. Drivers/staff supporting service are not additional passenger outputs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_distance | interurban_scheduled_road_service | Actual native compatible property | Actual native unit | Do not interchange passengerlegs/tickets/boardings/linkedjourneys/seats/vehicletrips/km/pkm. Actual passengerstop distance/distribution mandatory; a perpkm result needs its own supported basis, not relabelled Count. |
| native_conversion | interurban_scheduled_road_service | Actual native compatible property | Actual native unit | Preserve actual native properties/states; compatible kWh only verified3.6MJ/kWh. Volume-mass needs actual density/state; completeasset Count versus kg needs actual measured scope relationship. AC/DC are different identities/gates, conversion does not justify UUID substitution. |
| species_fates | interurban_scheduled_road_service | Actual native compatible property | Actual native unit | Keep kgcompound versus elementalC/N/S, fossil/biogenic, tyre/steel/contact sources, PMsize and actual air/water/soil/deposit/collected fates distinct. Refrigerant recharge notleak, water evaporation notwaste, capturedwear notdirectair. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual64221public non-contiguous-city route/cohort, actual stopOD/stages and carrier/whole-route/supply/grid/site/provider/asset responsibilities |
| starting_condition_role | Actual foreground/gate facts, not zero burden prior assets or electric supply |
| product_classification_scope | Only full64221public scheduled interurban road function, actual motorbus/tram/trolley/similar and non-contiguous-city extent, no fixedkmthreshold/nationalcutoff |
| recursive_input_rule | Subcontracted exact eligible service replaces covered native stagecells once, not additional self-recursive passenger output |
| upstream_dataset_requirement | Actual type/nativeunit/quality/technology/gate/geography/period/alluserlife/providercoverage for supply/assets/treatment |
| disclosure | Actual all-user duty/completion, AC_DC/regeneration/stock/fate/provider/asset/routecomparability and unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| interurban_scope | interurban_scheduled_road_service | Verify actual non-contiguous-city public scheduled service and actual served passenger extent/stopOD; no arbitrary distance threshold or urban/special-user condition. Actual whole-route/cross-border duty and native/provider lifecycle ownership are not truncated at national inventory boundaries. Distinct special-purpose/airport-shuttle or charter/availability products need their own actual qualification. | unsd-cpc3-64221; ghg-product-2011 |
| whole_service | interurban_scheduled_road_service | Include actual scheduled loaded/zero-passenger/empty/deadhead/reposition/layover/start/idle/failed/shortturned/rescue/preparation duties, passenger accessibility/HVAC/control and depot/stops/terminal support causally attributable to this service; other users/subcontractors owned once. | ghg-product-2011 |
| tram_physical | interurban_scheduled_road_service | For actual tramway retain wheel-rail/bogie/axle/traction/brake/rail/points/embedded or segregated track/return current, collector strip/pantograph/contactwire/substation and protection interfaces. Actual steelwear/grinding/lubrication/sanding/brake/collector maintenance and air/deposit/water/waste fates require independent evidence. Do not infer all these materials present or use generic road-tyre factors for tram steelwear. | ghg-product-2011 |
| trolley_physical | interurban_scheduled_road_service | Actual trolleybus retains rubber-tyre/road interface, two-pole/contact-wire/collector/return supply and actual off-wire battery/generator/auxiliary states. Match independent actual identities for battery/DC supply/fuel/converter and full wire/vehicle/site lifecycle; no trolleybus=ordinarybatterybus assumption. | ghg-product-2011 |
| energy_recovery | interurban_scheduled_road_service | Draw actual gate graph from upstream AC/provider to rectification/contactline/charger/storage/vehicle and external export. Assign losses once. Recovered braking to onboard/network/wayside storage/another vehicle is internal at a whole-network boundary; actual external transfer is separately metered. Braking resistor heat/dissipation or unavailable network acceptance is not automatically exported/avoided electricity. Gross versus net meters and all-user ownership explicit, no net-saving plus duplicate credit. | ghg-product-2011 |
| capital_provider | interurban_scheduled_road_service | Complete actual bus/tram/trolley/battery/road/track/wire/substation/charger/depot/stop/terminal manufacture, installation, renewal, use, maintenance and retirement responsibility. Delivered asset flow supports only verified manufacturing gate; useful life is allocation denominator only. Complete assembly versus same included initial components and actual inclusive provider coverage are exclusive. | ghg-product-2011 |
| long_route_support | interurban_scheduled_road_service | Account actual required preparation/driver relief/rest/border waiting/terminal access, safety/HVAC/accessibility and any actual furnished sanitary/cabin/meal/accommodation support according to carrier/provider responsibility. Actual physical quantities and coverage, not mandatory universal facilities/hours or invented worker-labour flows, determine exchanges. Independently supplied support replaces exactly covered ingredients/energy/assets/waste stages once. | ghg-product-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| interurban_scheduled_road_service | Public interurban scheduled road passenger-leg fulfilment and lifecycle | required | Actual full eligible64221function | foreground | completed_public_interurban_leg |

### Process: Public interurban scheduled road passenger-leg fulfilment and lifecycle (`interurban_scheduled_road_service`)

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

###### Completed public interurban scheduled road passenger leg (`completed_public_interurban_leg`)

One actual passenger completes the declared public scheduled interurban road leg on a service between non-contiguous cities, by actual motorbus/tramway/trolleybus/similar mechanism. Qualify actual served extent, boarding/final alighting stops, distance/distribution, timetable/period, quality/class and included accompanying luggage/animals/items. Intermediate or rest-stop step-off/reboarding and operational replacement do not automatically create another leg; independently joined connecting services have separately evidenced legs. A through-ticket alone neither proves one completed leg nor its distance.

- Selected flow: Completed public interurban scheduled road passenger leg
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion`
- Sources: unsd-cpc3-64221

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
| all_users | interurban_scheduled_road_service | First subdivide actual service strata and separable cargo/other products. Driver/operating attendants are support, not additional passenger outputs; actual infants/free passengers count persons. Allocate inseparable actual segment/route/depot/wire/track/road/asset duties across all real users with documented causal compatible physical drivers and sensitivity; no passenger/tonne-km addition, fixed occupancy or arbitrary ratio. | ghg-product-2011 |
| asset_native | interurban_scheduled_road_service | For same asset actual delivered native quantity times cohort compatible duty/positive complete-life all-user useful duty, then/N. Actual hours/km/cycles/calendar/trackloading/wireuse are chosen by demonstrated causal relation, not financial depreciation or invented conversion. Manufacture allocation does not supply operation/maintenance/retirement; all uncovered stages independently completed. | ghg-product-2011 |
| provider_scaling | interurban_scheduled_road_service | Purchased per-vehicle-km/hour/pkm/vehicle/maintenance/treatment result scales actual compatible attributed activity before /N. Per-pkm requires real passenger distance/membership, not capacity; already per-equivalent completed public interurban leg is not divided again. Provider covers exact stage/flow cells, replacing only those same foreground exchanges; no freight/manufacturing UUID as Count passenger output. | ghg-product-2011 |
| stage_cohort_support | interurban_scheduled_road_service | Use actual passenger memberships/distances and service quality on each operated segment, plus real cargo and supporting users, before aggregation to completed leg cohortN. Through riders remain one leg across its actual intermediate stages; genuine connections/substitution outcomes evidenced separately. Shared driver-rest/accommodation/terminal/maintenance duties retain actual all-user drivers and provider native quantities, no fixed per-passenger shares or omitted zero-output duty. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | interurban_scheduled_road_service | completed_public_interurban_leg | operational_record | noncontiguous_cities; actual_public_route_schedule; actual_served_extent_stopOD; distance_distribution; quality_class; segment_memberships; through_rest_stop_reboarding; genuine_connections_operational_substitution; intended_actual_completion; children_free_staff_roles; period; N | Verify actual non-contiguous-city public schedule/function and real passenger boarding/final-alighting extent/OD, intermediate segment memberships/distance and quality cohort. Reconcile technical/rest reboarding, actual continued obligation after substitution, separately joined connections and partial/failed outcomes. Tickets/capacity/movements notN; retain actual failed/empty/support and all-user duty beforepositiveN once, N0no finite intensity. | Item(s) | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_fuel | interurban_scheduled_road_service | diesel | operational_record | actual_engine_aux; grade_blend_origin; stock_open_receipts_close_returns; netwithdrawal_burn_spill_recovery; allusers_providercells | Measure actual grade/state native supplies/stocks and evidenced burn separately; wholeblend+composition ledger OR replacing component inputs, neverboth. Attribute real loaded/empty/idle/auxiliary compatible duty across actual users before /N; other real fuels independently expanded. | kg | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_electric | interurban_scheduled_road_service | external_ac; purchased_traction_dc; external_export_ac | operational_record | gate_graph; AC_DC_voltage_polarity; meter_gross_net; rectifier_line_charger_storage_losses; pantograph_poles; regeneration_acceptance; resistor_heat; internal_external_transfer; allusers_providercells | Build actual physical ownership/gate energy balance: imports, real externally purchased DC, internal conversion/storage/recovery, actual external exports and dissipation separately. AC supply and same inclusive upstream DC exclusive; grid/network/braking energy not virgin supply twice. Use each measured compatible native quantity with actual whole-network/all-user sharing then/N; no assumed regeneration percentage. | MJ | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_depot | interurban_scheduled_road_service | wash_water; wash_wastewater | operational_record | site_wash_cleaner; input_stock_fates; actual_stream_composition_receiver; losses; alluser_driver; provider_cells | Actual cleaning/site activities, water stock/use/evaporation/collected/direct fates and receiver/treatment gates independent. Collect every actual cleaner/material/utility/waste separately; do not infer wastewater from water input alone. Attribute actual all users then/N. | kg; actual native quantities | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_maintenance | interurban_scheduled_road_service | r134a_supply; used_oil; spent_tyres | operational_record | actual_vehicle_track_wire_parts; formulation; service_renewal; input_stock_consumed_retained; tyre_steelwear_collected_release; refrigerant_stock_recovery_leak; receiver_transport_treatment | Record actual motorbus/tram/trolley and track/wire maintenance, replacement/retirement, each real material and native fate. Separate initial/recharge/stock/recovery/refrigerant leak, new oil/collected oil and tyre/steel wear/collected retired material. Actual treatment/transport coverage and all-user event allocation before/N, no assumed residual releases or recycling credit. | kg; Item(s); actual native quantities | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_assets | interurban_scheduled_road_service | diesel_bus; battery_bus; tram_car; trolleybus; steel_rail; copper_contact_wire | operational_record | asset_id; actual_delivered_native_quantity; manufacturinggate; whole_components; initial_replacement; sameasset_cohort_duty; positive_complete_life_allusers; road_track_wire_substation_sites; retired_providercells | For each same asset native delivered manufacture quantity times supported cohort/positive total all-user life duty then/N, manufacture gate only. Native complete-vehicle Item(s) versus rail/wire kg needs actual support, no invented mass. Include uncaptured install/refit/use/maintenance/renewal/EoL independently, exact provider cells replacing duplicates; whole object versus initial components exclusive. | Item(s); kg | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_emissions | interurban_scheduled_road_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air; r134a_air | operational_record | actual_source_substance_CAS; chemistry_C_N_S; size_composition; fuelburn_or_leak_wear_activity; medium_subcompartment; abatement_capture; deposit_runoff_waste; methodfactor_applicability; uncertainty; allusers | Independently measure/model each actual source/species/size/medium with documented compatible physical activity and method; chemical basis/carbon origin and control retained. Combustion, wheelrail/brake/tyre/contact wear and refrigerant fates separately evidenced, no supply=emission or CO2e-to-substance. Quantify actual air/deposit/water/collected split without invented fractions; all-user quantity/N, unknownnotzero. | kg specific substance | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_long_route | interurban_scheduled_road_service | completed_public_interurban_leg | operational_record | carrier_subcontractor_segment_country; actual_grid_fuel_supplygate; full_route_and_preparation; driver_duty_relief_rest_role; actual_borderwait_delay; actual_sanitary_accessibility_HVAC_cabin; actual_meal_accommodation_native_units; actual_covered_stagecells; other_users; empty_failed_zerooutput_support | Collect actual entire route/cross-period/each-provider responsibilities, driver change/rest and physical support records, country/segment supply/native gates and all users. Determine actual presence or evidenced non-use of each facility/meal/stay/consumable/service and its actual lifecycle stages; no universal resthour/hotel/toilet/meal/personnel recipe. Actual purchased perkm/hour/personnight/meal/etc result times compatible actual attributed activity beforeN, exact covered cells replacing duplication; internal crew duty differs transported crew/purchased service. Whole leg not clipped by borders/statistics, actual failed/empty/standby preparation/rest-support burden retained. | actual native activity/service quantities | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| native_normalization | interurban_scheduled_road_service | Actual compatible raw quantity times evidenced cohort/alluser shares; close all actual failed/empty/loaded/support/stock duties then divide positiveN once. Compatible provider perkm/hour/pkm times actual native activity first, already equivalenteachleg no seconddivision. | cp_completion; cp_fuel; cp_electric; cp_depot; cp_maintenance; cp_emissions | Actual attributed native quantity per reference | ghg-product-2011 |
| asset_manufacture | interurban_scheduled_road_service | Sameasset actual delivered native quantity times compatible cohort/positive complete-life alluser usefulduty then/N, manufacturinggateonly. Uncovered install/use/refit/replacement/maintenance/retirement separate, wholeinitialcomponent/providercoverage exclusive. | cp_assets | Actual attributed native quantity per reference | ghg-product-2011 |
| energy_stock_fates | interurban_scheduled_road_service | Separately reconcile fuelstock supply/netwithdrawal/burn/spill/recovery and electrical grossimports/providerDC/internalconversion/storage/regeneration/export/losses/dissipation. Wholeblend vsreplacingcomponents exclusive. Actual compatible species/source activity and medium not fabricated from residual or metering mismatch. | cp_fuel; cp_electric; cp_emissions | Actual attributed native quantity per reference | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| interurban_reference_extent | interurban_scheduled_road_service | Actual non-contiguous cities, publicall-user route/schedule, real passenger servedextent/stopOD/distance/class/period/completion mandatory. No arbitrarykm threshold or inheritedurban/specificgroupcondition. Intermediate stops/rest reboarding not duplicatelegs, genuine separatelyfulfilled connections and operational substitutions have explicit completion/responsibility mapping. Local-only rides notautomaticallyinterurban fromwholevehicleroute, no inventedcitycentre endpoints foractualintermediatestops. | cp_completion; cp_long_route |
| tram_wheelrail | interurban_scheduled_road_service | For actual tram derive real bogie/wheels/axles/rails/points/sleepers_slab/fasteners/returncurrent/brakes/sanding/lubrication/grinding and noise interfaces from technical records. Every actual independently supplied/replaced material, emitted species/size/medium, captured grinding residue/deposit/runoff/waste and receiver gets independent identity/native amount; no generic tyrePM factor or default steelwear split. | cp_maintenance; cp_assets; cp_emissions |
| trolley_contact_power | interurban_scheduled_road_service | For actual trolleybus/tram/similar record actual collector poles/pantograph/strip/contactwire/alloy/support/feed_return/substation/protection and native current/voltage/energy gates. Offwirebattery/generator, overhead charging and all actual hybridstates independent; actual each material/state/gate CP-linked row required, not all vehicles assumed same. | cp_electric; cp_assets; cp_maintenance |
| network_energy | interurban_scheduled_road_service | Resolve each real gridAC/providerDC/contactline/charger/vehicle/waysidestorage/othervehicle boundary and loss, regeneration transfer/acceptance/resistor dissipation/external export with actual meters/balance and all users. Gross/net data and provider inclusions mutually exclusive; no arbitrary regeneration credit or assumed AC/DC identity conversion. | cp_electric |
| other_inputs | interurban_scheduled_road_service | Identify every actual other fuel/hydrogen/heat/steam, electrolyte/battery chemistry, oil/hydraulicfluid/cleaner/disinfectant/SCR reagent/refrigerant, component/tyre/collector alloy/rail coating/sand/water state and independent service/utility. Each actual exchange gets unique rowID,oneexistingprocess,direction/type,singleidentity/state,UUIDorunresolved,nativeproperty/unit/amount/rawsource,sameparentCP,calculation,providergate/receiver/uncertainty. | cp_fuel; cp_electric; cp_depot; cp_maintenance |
| all_asset_life | interurban_scheduled_road_service | Independently cover all actual vehicle/battery/road/track/slab/wire/pole/substation/storage/charger/depot/stop/terminal/land manufacture/install/refit/renewal/maintenance/retirement with sameasset alluser life evidence. Native count/mass relationships measured, no defaultcapacity/life; wholeobject and same included initial components exclusive; no old/leased asset automaticallyzero. | cp_assets |
| all_fates | interurban_scheduled_road_service | Expand each actual worn rail/wheel/collector/tyre/brake/battery/component, washwater/sludge/filter/oilymaterial/packaging and treatment/reuse/disposal state as actual single collection flow with composition/gate/receiver/transport/treatment. Direct water/soil/air substance releases distinct; evaporation/unknownloss not waste. | cp_depot; cp_maintenance; cp_emissions |
| all_species_media | interurban_scheduled_road_service | Independently quantify actual CO, specific nitrogenoxides/hydrocarbons/ammonia, biogeniccarbon/reagentcarbon/refrigerants, nonoverlapping particles with actual chemistry/source and receiving air/water/soil/deposit states, brake/rail/wheel/contact wear and actual noise. No NOx/VOC/dust umbrella or captured-emitted duplication; unspecifiedair UUID cannot erase known urban/nonurban/nearground. Missing LCIA characterization does not zero physical releases. | cp_emissions |
| provider_full_closure | interurban_scheduled_road_service | Actual provider service/nativeactivity/lifecyclecell mapping required for every subcontracted energy/operation/asset/maintenance/treatment result. Multiply compatible raw perkm/hour/pkm/native quantity and complete actual failed/zerooutput/support duty beforeN; already equivalenteachleg not divided twice. Every uncovered stage mandatory; missing data blocks complete application, notzero. | cp_completion; cp_assets; cp_electric; cp_maintenance |
| whole_route_support_providers | interurban_scheduled_road_service | Preserve whole actual interurban leg across countries/operating segments, source-specific energy/geography/native provider boundaries, actual long-route preparation/rest/change/wait/delay/recovery/empty/failed/zero-passenger responsibilities. Each actual cabin/sanitary/food/drink/accommodation/accessibility/driver support and all-user asset/event service gets independent rowID,oneparentprocess,direction/type,one identity/UUIDorunresolved,nativeproperty/unit/amount/rawsource,sameparentCP,method/coveredstage/gate/receiver/uncertainty. No universal facilities/meals/nights/resthours/labour-count assumption; missing actual included necessary support blocks completion, independently soldproducts subdivide without doublecount. | cp_long_route; cp_completion; cp_assets; cp_fuel; cp_electric; cp_depot; cp_maintenance |

These mandatory actual row-expansion tasks are not inventory selector exchanges. Each actual material/asset/supply/provider/waste/species/state gets unique rowID, one existing parent process, direction/type, one concrete identity/UUIDorunresolved, native property/unit/amount/rawsource, sameparentCP, method/gate/receiver/uncertainty. Establish actual occurrence or evidenced nonuse. Unknown blocks completeness, neverzero or semantic exclusion.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_scope_count | interurban_scheduled_road_service | Reject urban/contiguous-city/specialuser/charter misselection, arbitrary kilometre threshold or nationalcutoff, missing actual interurban servedextent/stopOD/completion/positiveN, duplicated reststop/through outputs, ticket/boarding/capacity shortcuts or omitted actual failed/empty/driver-support duties. | ghg-product-2011 |
| native_identity_closure | interurban_scheduled_road_service | Reject umbrella/selector, incompatible AC_DC/Mass_Count/chemical/medium UUID, fabricated factor/range, unknown-as-zero or omitted required expansion; each CP exactlyoneexistingprocess and linkedrow sameparent. | ghg-product-2011 |
| lifecycle_energy_provider | interurban_scheduled_road_service | Reject manufactureasset treatedwholelife, vehicle/track/wire/road/site/EoL omission, unsupportedalluserallocation, grossnet/regenerationdoublecredit or inclusiveproviderduplicate. Verify bilingual method/source/requiredqualifier alignment. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset/background_dataset onlyafteractual full native/identity/quantity/lifecycle evidence |
| allowed_use | Only actual qualifying64221completed public interurban scheduled road leg with declared servedextent/OD/distance/quality/mechanism and full support/provider/lifecycle |
| excluded_use | Urban/specialpurpose/charter/hire/taxi/tour/multimodefinalproduct; universalpkm, fixedkm classification or lifecyclezeroelectric claim |
| required_metadata | actual_noncontiguous_city_service_extent; public_all_user_route_and_timetable; actual_boarding_final_alighting_stopOD; actual_intermediate_segments_passenger_distance_distribution; through_reststop_reboarding_connections_substitution_and_completion; actual_class_quality_period_N; actual_motorbus_tram_trolley_similar_mechanism; actual_driver_change_rest_support_roles; actual_included_free_luggage_animals_items; actual_sanitary_meal_stay_accessibility_support; full_route_crossborder_carrier_provider_responsibility; empty_failed_zerooutput_preparation_duty; actual_supply_country_grid_fuel_gates; traction_AC_DC_recovery_losses_storage_export; sameasset_alluser_life; actual_other_products_native_allocation_and_fates_uncertainty |
| required_quality_disclosure | All unknown actual identities/quantities/provider/asset/life/energybalance/wearfate/LCIA gaps and comparability limits |
| update_trigger | Changed actual cityextent/publicroute/schedule/stopOD/stages/connections/quality/driver_support/crossborder/provider/nativeenergy/assetlife/fate evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-64221 | official_guidance | UNSD CPC3.0ExplanatoryNotes30June2025,printed362,64221 with adjacent64222; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Actual non-contiguous-city public predetermined route/schedule, motorbus/tram/trolley/similar and included free accompanying loads. No distance threshold, national cut-off, vehicle recipe or Count/duty/lifecycle formula supplied. |
| ipcc-road-rail-2006 | official_guidance | IPCC2006Guidelines Vol2Ch3 §3.2pp3.10–3.16 and§3.4pp3.39–3.40; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Actual fuel/engine/control/urea/carbon-origin and electric upstream questions. National inventory scope/defaultsoldfuel/allcarbon assumptions not adopted as complete lifecycle or actual release factors. |
| skoda-trolleybus-case | handbook | Škoda26Tr manufacturer technical case,publicsnapshot2026-10-21; https://www.skodagroup.com/reference/en-pokus-trolejbus-26tr | Conditional actual DCwire/offwirebattery-or-generator/recovery/HVAC/accessibility interfaces only; no universal voltage/power/capacity/dimensions/life/factors adopted. |
| siemens-regeneration-case | handbook | Siemens PortlandTriMet light-rail regenerative storage technical case,publicsnapshot2026-10-21; https://www.mobility.siemens.com/us/en/portfolio/references/portland-trimet-light-rail-case-study.html | Actual braking-to-substation-storage-to-othervehicles energy question; technical case is not64112classification or generic tram saving/material factor. All numerical predictions/benefit claims excluded. |
| ghg-product-2011 | standard | GHGProtocol ProductLifeCycleAccountingReportingStandard2011,chapters7–9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Boundary/data/subdivision/allocation principles. Full track/wire/wear/site/retirement scope, specific collection/Count-leg and sameasset formulas are explicitly authoredPCR choices requiring actual records, not universal source factors. |
