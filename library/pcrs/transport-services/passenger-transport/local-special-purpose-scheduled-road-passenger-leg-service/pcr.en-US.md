---
pcr_id: pcr.local-special-purpose-scheduled-road-passenger-leg-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Local special-purpose scheduled road passenger leg service

## 1. Scope and Applicability

This dedicated PCR covers actual completed local special-purpose scheduled road passenger legs under the actual64114inclusion clauses: predetermined routes/timetables for a specified user segment such as college or enterprise within a single city or contiguous-city group; scheduled urban/suburban shuttles including airport shuttles; and pupil school-bus home-school or school-school transport, including rural areas. The rural school clause is not deleted by imposing the general urban geography sentence on every subtype.

Airport shuttle is an explicitly included scheduled service function. Sale to any airport traveller does not by itself exclude it, and a general all-user urban bus route merely stopping at an airport is not automatically an airport-shuttle product. Declare actual shuttle purpose, geography, timetable, service users and accountable organiser/carrier delivery. Non-scheduled airport shuttle/taxi64115, chauffeured-car hire64116, ordinary public route64112 and sightseeing64132 are distinct interfaces; do not select by vehicle ownership, passenger affiliation, an institutional logo or repeated timetable alone.

For school/college/employee services, retain actual commissioning and continuing transport responsibilities, eligibility, service calendars/shifts, attendance-linked completion evidence, stop/handover and accessibility/safety duties. Eligible enrolment/employee headcount, attendance, invoices, authorised seats, contract vehicle-hours and standby availability are not completed passenger output. Actual school/shift/airport changes, no-shows, unsuccessful pickups, empty/failed/cancelled/repositioning and support duties remain causally assigned before positive actualN normalization; N=0 has no finite per-leg intensity.

Actual motor-bus, tramway, trolleybus and similar road mechanisms may fulfil this specific service function; their inclusion depends on actual product and technical evidence, not on assuming every school route uses a bus or every vehicle has the same equipment. Retain complete traction/grid/contact/wheelrail/tyre/road/site/capital/maintenance/retirement responsibilities and every actual unrepresented identity. No universal escort/lift/restraint/heater, fuel, life, occupancy, calendar ratio, regeneration fraction or quantitative range is prescribed.

Include actual provided transport incidentals such as accompanying baggage/items/animals, accessibility assistance or operational escorts when part of the service; do not infer them universally from another classification note. On-duty drivers/escorts/attendants are support rather than extra passenger outputs. Education, employer production, flight operation and independently fulfilled care/teaching remain separate products; no school-attendance, productivity, health or avoided-parent-car credit is assumed. Whole-vehicle/driver hire or capacity availability with no completed legs is a different fulfilment function and cannot be converted to invented passenger counts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.local-special-purpose-scheduled-road-passenger-leg-service |
| classification_refs | CPC3.0 64114 only; exact dedicated full officialscope |
| covered_products | Actual completed local special-purpose scheduled road legs for specifiedsegments, scheduledurban/suburbanshuttles inclairport, and pupilhome-school/school-school inclrural, with actual mechanisms and support |
| excluded_products | Ordinarypublic64112; nonscheduledtaxi/airporttransfer64115; chauffeuredhire64116; sightseeing64132; wholevehicleavailability; institutionalvehicle/repeatedcharter without qualifyingactualfunction |
| representative_product | Completed local special-purpose scheduled road passenger leg |
| production_route | Actual eligible special-purpose scheduled boarding-to-alighting leg, commissioned/own transport duties, calendar/support and full actual vehicle/traction/grid/site lifecycle |
| market_state | Actually completed qualified special-purpose scheduled transport, not eligibility/attendance/unusedcontractcapacity |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed local special-purpose scheduled road passenger leg |
| How much | 1 actual passenger completing one eligible local special-purpose scheduled road leg |
| How well | Actual inclusionclause/purpose/access/route/OD/distance/calendar/timetable/quality/handover/accessibility/support |
| How long or cycle | Actual boarding-to-alighting leg and attributed full period/lifecycle duties |
| reference_flow_link | completed_special_local_leg |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed local special-purpose scheduled road passenger leg |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_64114_inclusion_clause; local_specific_user_route_or_scheduled_urban_shuttle_or_pupil_rural_clause; actual_school_enterprise_airport_purpose_and_eligibility; organiser_carrier_subcontractor_responsibility; school_calendar_shift_airport_schedule; actual_stop_OD_and_passenger_distance_distribution; actual_completed_leg_N_and_period; actual_vehicle_tram_trolley_similar_mechanism; actual_quality_handover_accessibility_support; passenger_driver_escort_roles; empty_failed_no_show_waiting_duty; actual_included_transport_items; traction_AC_DC_regeneration_and_losses; sameasset_alluser_life; native_provider_coverage_fates_uncertainty |

Required qualifiers enter the actual foreground package. N is actual completed eligible passenger legs in the equivalent declared cohort/period, N>0. Completion, partial/failed/shortturn outcomes, actual segment/other-user distance and stock/cross-period duties close before normalization once. Drivers/staff supporting service are not additional passenger outputs.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_distance | local_special_scheduled_road_service | Actual native compatible property | Actual native unit | Do not interchange passengerlegs/tickets/boardings/linkedjourneys/seats/vehicletrips/km/pkm. Actual passengerstop distance/distribution mandatory; a perpkm result needs its own supported basis, not relabelled Count. |
| native_conversion | local_special_scheduled_road_service | Actual native compatible property | Actual native unit | Preserve actual native properties/states; compatible kWh only verified3.6MJ/kWh. Volume-mass needs actual density/state; completeasset Count versus kg needs actual measured scope relationship. AC/DC are different identities/gates, conversion does not justify UUID substitution. |
| species_fates | local_special_scheduled_road_service | Actual native compatible property | Actual native unit | Keep kgcompound versus elementalC/N/S, fossil/biogenic, tyre/steel/contact sources, PMsize and actual air/water/soil/deposit/collected fates distinct. Refrigerant recharge notleak, water evaporation notwaste, capturedwear notdirectair. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual64114specified-user/shuttle/pupil ruralclause cohort and organiser/carrier responsibilities, mechanism/supply/grid/site/provider/asset gates |
| starting_condition_role | Actual foreground/gate facts, not zero burden prior assets or electric supply |
| product_classification_scope | Only complete64114local specialpurpose scheduled road function, retaining explicit scheduledairport and ruralpupil clauses, actual bus/tram/trolley/similar physical obligations |
| recursive_input_rule | Subcontracted exact eligible service replaces covered native stagecells once, not additional self-recursive passenger output |
| upstream_dataset_requirement | Actual type/nativeunit/quality/technology/gate/geography/period/alluserlife/providercoverage for supply/assets/treatment |
| disclosure | Actual all-user duty/completion, AC_DC/regeneration/stock/fate/provider/asset/routecomparability and unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| special_function_scope | local_special_scheduled_road_service | Apply actual64114inclusion clause and commissioning/carrier/shuttle/pupil function, not an imported universal exclusive-user test. Preserve scheduled urban/suburban airport shuttle even when airport travellers can buy tickets, and actual rural school home-school/school-school service under its explicit clause. Ordinary public urban service, nonscheduled taxi/airport transfer, chauffeured hire, sightseeing or a repeated charter/availability contract need separate actual functional assessment. | unsd-cpc3-64114 |
| whole_service | local_special_scheduled_road_service | Include actual scheduled loaded/zero-passenger/empty/deadhead/reposition/layover/start/idle/failed/shortturned/rescue/preparation duties, passenger accessibility/HVAC/control and depot/stops/terminal support causally attributable to this service; other users/subcontractors owned once. | ghg-product-2011 |
| tram_physical | local_special_scheduled_road_service | For actual tramway retain wheel-rail/bogie/axle/traction/brake/rail/points/embedded or segregated track/return current, collector strip/pantograph/contactwire/substation and protection interfaces. Actual steelwear/grinding/lubrication/sanding/brake/collector maintenance and air/deposit/water/waste fates require independent evidence. Do not infer all these materials present or use generic road-tyre factors for tram steelwear. | ghg-product-2011 |
| trolley_physical | local_special_scheduled_road_service | Actual trolleybus retains rubber-tyre/road interface, two-pole/contact-wire/collector/return supply and actual off-wire battery/generator/auxiliary states. Match independent actual identities for battery/DC supply/fuel/converter and full wire/vehicle/site lifecycle; no trolleybus=ordinarybatterybus assumption. | ghg-product-2011 |
| energy_recovery | local_special_scheduled_road_service | Draw actual gate graph from upstream AC/provider to rectification/contactline/charger/storage/vehicle and external export. Assign losses once. Recovered braking to onboard/network/wayside storage/another vehicle is internal at a whole-network boundary; actual external transfer is separately metered. Braking resistor heat/dissipation or unavailable network acceptance is not automatically exported/avoided electricity. Gross versus net meters and all-user ownership explicit, no net-saving plus duplicate credit. | ghg-product-2011 |
| capital_provider | local_special_scheduled_road_service | Complete actual bus/tram/trolley/battery/road/track/wire/substation/charger/depot/stop/terminal manufacture, installation, renewal, use, maintenance and retirement responsibility. Delivered asset flow supports only verified manufacturing gate; useful life is allocation denominator only. Complete assembly versus same included initial components and actual inclusive provider coverage are exclusive. | ghg-product-2011 |
| commissioned_support | local_special_scheduled_road_service | Define actual organiser/carrier/subcontractor responsibility matrix and actual transport handover, escort/accessibility/securement/HVAC/heater/terminal/waiting duties. Independently collect each actual supplied service/material/equipment or in-house operating activity, not an automatic headcount/labour flow or all-equipment recipe. Education/employer/flight products are not added solely because beneficiaries attend school, work or fly. | ghg-product-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| local_special_scheduled_road_service | Local special-purpose scheduled road passenger-leg fulfilment and lifecycle | required | Actual full eligible64114function | foreground | completed_special_local_leg |

### Process: Local special-purpose scheduled road passenger-leg fulfilment and lifecycle (`local_special_scheduled_road_service`)

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

###### Completed local special-purpose scheduled road passenger leg (`completed_special_local_leg`)

One actual eligible passenger completes the declared64114local special-purpose scheduled road leg with actual purpose/inclusion clause, school/enterprise or shuttle context, route/stop OD/distance, calendar/timetable, quality/accessibility and included transport support. Scheduled urban/suburban airport shuttle may be ticketed to airport travellers without an exclusive-user rule; actual rural pupil home-school/school-school service is retained. Real children/infants/nonpay riders count persons, not adult/seat equivalents; driver/operating escort duties do not add passenger outputs.

- Selected flow: Completed local special-purpose scheduled road passenger leg
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion`
- Sources: unsd-cpc3-64114

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
| all_users | local_special_scheduled_road_service | First subdivide actual service strata and separable cargo/other products. Driver/operating attendants are support, not additional passenger outputs; actual infants/free passengers count persons. Allocate inseparable actual segment/route/depot/wire/track/road/asset duties across all real users with documented causal compatible physical drivers and sensitivity; no passenger/tonne-km addition, fixed occupancy or arbitrary ratio. | ghg-product-2011 |
| asset_native | local_special_scheduled_road_service | For same asset actual delivered native quantity times cohort compatible duty/positive complete-life all-user useful duty, then/N. Actual hours/km/cycles/calendar/trackloading/wireuse are chosen by demonstrated causal relation, not financial depreciation or invented conversion. Manufacture allocation does not supply operation/maintenance/retirement; all uncovered stages independently completed. | ghg-product-2011 |
| provider_scaling | local_special_scheduled_road_service | Purchased per-vehicle-km/hour/pkm/vehicle/maintenance/treatment result scales actual compatible attributed activity before /N. Per-pkm requires real passenger distance/membership, not capacity; already per-equivalent completed local special-purpose scheduled leg is not divided again. Provider covers exact stage/flow cells, replacing only those same foreground exchanges; no freight/manufacturing UUID as Count passenger output. | ghg-product-2011 |
| service_roles_calendar | local_special_scheduled_road_service | Match actual school/worker/shuttle cohorts by route, quality, calendar and completion. Supporting driver/escort duties allocated to the actual service are not completed passengers; genuinely transported staff/escorts require distinct actual role and no double count. Commissioned payments/enrolled users/expected attendance cannot setN or life share. Shared fleets/stops/depots/providers retain all actual user strata and nonservice duty with justified causal allocation. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | local_special_scheduled_road_service | completed_special_local_leg | operational_record | inclusion_clause; purpose; actual_school_or_enterprise_segment; airport_shuttle_function; rural_school_home_school_school_school; route_schedule; actual_stop_OD_distance; actual_eligible_passengers; completed_partial_failed_no_show; passenger_driver_escort_roles; period; N | Verify the actual applicable inclusion clause, continuing scheduled transport function, actual passengers and completed boarding-alighting stopOD legs in an equivalent quality/calendar cohort. Scheduled airport access need not be universally exclusive; pupilrural clause not overridden by genericurban restriction. Enrolledusers/attendance/tickets/contractcapacity are notN. Include actual unsuccessful/empty/failed/support duties in the causal numerator then divide positive actualN once; N=0 no finite intensity. | Item(s) | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_fuel | local_special_scheduled_road_service | diesel | operational_record | actual_engine_aux; grade_blend_origin; stock_open_receipts_close_returns; netwithdrawal_burn_spill_recovery; allusers_providercells | Measure actual grade/state native supplies/stocks and evidenced burn separately; wholeblend+composition ledger OR replacing component inputs, neverboth. Attribute real loaded/empty/idle/auxiliary compatible duty across actual users before /N; other real fuels independently expanded. | kg | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_electric | local_special_scheduled_road_service | external_ac; purchased_traction_dc; external_export_ac | operational_record | gate_graph; AC_DC_voltage_polarity; meter_gross_net; rectifier_line_charger_storage_losses; pantograph_poles; regeneration_acceptance; resistor_heat; internal_external_transfer; allusers_providercells | Build actual physical ownership/gate energy balance: imports, real externally purchased DC, internal conversion/storage/recovery, actual external exports and dissipation separately. AC supply and same inclusive upstream DC exclusive; grid/network/braking energy not virgin supply twice. Use each measured compatible native quantity with actual whole-network/all-user sharing then/N; no assumed regeneration percentage. | MJ | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_depot | local_special_scheduled_road_service | wash_water; wash_wastewater | operational_record | site_wash_cleaner; input_stock_fates; actual_stream_composition_receiver; losses; alluser_driver; provider_cells | Actual cleaning/site activities, water stock/use/evaporation/collected/direct fates and receiver/treatment gates independent. Collect every actual cleaner/material/utility/waste separately; do not infer wastewater from water input alone. Attribute actual all users then/N. | kg; actual native quantities | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_maintenance | local_special_scheduled_road_service | r134a_supply; used_oil; spent_tyres | operational_record | actual_vehicle_track_wire_parts; formulation; service_renewal; input_stock_consumed_retained; tyre_steelwear_collected_release; refrigerant_stock_recovery_leak; receiver_transport_treatment | Record actual motorbus/tram/trolley and track/wire maintenance, replacement/retirement, each real material and native fate. Separate initial/recharge/stock/recovery/refrigerant leak, new oil/collected oil and tyre/steel wear/collected retired material. Actual treatment/transport coverage and all-user event allocation before/N, no assumed residual releases or recycling credit. | kg; Item(s); actual native quantities | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_assets | local_special_scheduled_road_service | diesel_bus; battery_bus; tram_car; trolleybus; steel_rail; copper_contact_wire | operational_record | asset_id; actual_delivered_native_quantity; manufacturinggate; whole_components; initial_replacement; sameasset_cohort_duty; positive_complete_life_allusers; road_track_wire_substation_sites; retired_providercells | For each same asset native delivered manufacture quantity times supported cohort/positive total all-user life duty then/N, manufacture gate only. Native complete-vehicle Item(s) versus rail/wire kg needs actual support, no invented mass. Include uncaptured install/refit/use/maintenance/renewal/EoL independently, exact provider cells replacing duplicates; whole object versus initial components exclusive. | Item(s); kg | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_emissions | local_special_scheduled_road_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air; r134a_air | operational_record | actual_source_substance_CAS; chemistry_C_N_S; size_composition; fuelburn_or_leak_wear_activity; medium_subcompartment; abatement_capture; deposit_runoff_waste; methodfactor_applicability; uncertainty; allusers | Independently measure/model each actual source/species/size/medium with documented compatible physical activity and method; chemical basis/carbon origin and control retained. Combustion, wheelrail/brake/tyre/contact wear and refrigerant fates separately evidenced, no supply=emission or CO2e-to-substance. Quantify actual air/deposit/water/collected split without invented fractions; all-user quantity/N, unknownnotzero. | kg specific substance | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |
| cp_service_context | local_special_scheduled_road_service | completed_special_local_leg | operational_record | commissioner; organiser_carrier_subcontractor_matrix; actual_eligibility_and_users; schoolterm_days_shift_airportchanges; stop_handover; actual_escort_securements_accessibility_lift; HVAC_heater_idle_wait; actual_provider_nativeunit_quantity; other_users; failed_no_show_duties | Collect actual service contract/in-house responsibility and operational records for calendar/access/handover/required actual support. Establish actual presence or evidenced non-use of each equipment/personnel/support activity, and independently expand any purchased service/material/asset/fate with same-parent row/CP and native actual quantities. No automatic escort/lift/heater or labour exchange; internal staff duty differs purchased service. Match actual native provider activity/coverage, allocate all real users and causal empty/failed/standby duties beforeN; education/work/flight outcomes outside. | actual native service/activity quantities | each actual duty/event and period/life | complete cohort/period and required alluserlife | all actual road/rail/contactgrid/site/vehicle/provider users | per declared reference flow | actual logs/calibration/contracts/balances/provider/applicability/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| native_normalization | local_special_scheduled_road_service | Actual compatible raw quantity times evidenced cohort/alluser shares; close all actual failed/empty/loaded/support/stock duties then divide positiveN once. Compatible provider perkm/hour/pkm times actual native activity first, already equivalenteachleg no seconddivision. | cp_completion; cp_fuel; cp_electric; cp_depot; cp_maintenance; cp_emissions | Actual attributed native quantity per reference | ghg-product-2011 |
| asset_manufacture | local_special_scheduled_road_service | Sameasset actual delivered native quantity times compatible cohort/positive complete-life alluser usefulduty then/N, manufacturinggateonly. Uncovered install/use/refit/replacement/maintenance/retirement separate, wholeinitialcomponent/providercoverage exclusive. | cp_assets | Actual attributed native quantity per reference | ghg-product-2011 |
| energy_stock_fates | local_special_scheduled_road_service | Separately reconcile fuelstock supply/netwithdrawal/burn/spill/recovery and electrical grossimports/providerDC/internalconversion/storage/regeneration/export/losses/dissipation. Wholeblend vsreplacingcomponents exclusive. Actual compatible species/source activity and medium not fabricated from residual or metering mismatch. | cp_fuel; cp_electric; cp_emissions | Actual attributed native quantity per reference | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| special_purpose_clause | local_special_scheduled_road_service | Require actual64114local specified-user route/schedule, scheduledurban/suburbanshuttle or pupilhome-school/school-school includingrural clause; actual function/organiser/carrier/access/stopOD/quality/calendar and completion. Airport travellers ableto purchase are not automatically64112, publicrouteairportstop not automaticallyshuttle. Non-scheduled airport/taxi64115, chauffeuredhire64116, sightseeing64132 and institutionalownership/repetition-only classification rejected. | cp_completion; cp_service_context |
| tram_wheelrail | local_special_scheduled_road_service | For actual tram derive real bogie/wheels/axles/rails/points/sleepers_slab/fasteners/returncurrent/brakes/sanding/lubrication/grinding and noise interfaces from technical records. Every actual independently supplied/replaced material, emitted species/size/medium, captured grinding residue/deposit/runoff/waste and receiver gets independent identity/native amount; no generic tyrePM factor or default steelwear split. | cp_maintenance; cp_assets; cp_emissions |
| trolley_contact_power | local_special_scheduled_road_service | For actual trolleybus/tram/similar record actual collector poles/pantograph/strip/contactwire/alloy/support/feed_return/substation/protection and native current/voltage/energy gates. Offwirebattery/generator, overhead charging and all actual hybridstates independent; actual each material/state/gate CP-linked row required, not all vehicles assumed same. | cp_electric; cp_assets; cp_maintenance |
| network_energy | local_special_scheduled_road_service | Resolve each real gridAC/providerDC/contactline/charger/vehicle/waysidestorage/othervehicle boundary and loss, regeneration transfer/acceptance/resistor dissipation/external export with actual meters/balance and all users. Gross/net data and provider inclusions mutually exclusive; no arbitrary regeneration credit or assumed AC/DC identity conversion. | cp_electric |
| other_inputs | local_special_scheduled_road_service | Identify every actual other fuel/hydrogen/heat/steam, electrolyte/battery chemistry, oil/hydraulicfluid/cleaner/disinfectant/SCR reagent/refrigerant, component/tyre/collector alloy/rail coating/sand/water state and independent service/utility. Each actual exchange gets unique rowID,oneexistingprocess,direction/type,singleidentity/state,UUIDorunresolved,nativeproperty/unit/amount/rawsource,sameparentCP,calculation,providergate/receiver/uncertainty. | cp_fuel; cp_electric; cp_depot; cp_maintenance |
| all_asset_life | local_special_scheduled_road_service | Independently cover all actual vehicle/battery/road/track/slab/wire/pole/substation/storage/charger/depot/stop/terminal/land manufacture/install/refit/renewal/maintenance/retirement with sameasset alluser life evidence. Native count/mass relationships measured, no defaultcapacity/life; wholeobject and same included initial components exclusive; no old/leased asset automaticallyzero. | cp_assets |
| all_fates | local_special_scheduled_road_service | Expand each actual worn rail/wheel/collector/tyre/brake/battery/component, washwater/sludge/filter/oilymaterial/packaging and treatment/reuse/disposal state as actual single collection flow with composition/gate/receiver/transport/treatment. Direct water/soil/air substance releases distinct; evaporation/unknownloss not waste. | cp_depot; cp_maintenance; cp_emissions |
| all_species_media | local_special_scheduled_road_service | Independently quantify actual CO, specific nitrogenoxides/hydrocarbons/ammonia, biogeniccarbon/reagentcarbon/refrigerants, nonoverlapping particles with actual chemistry/source and receiving air/water/soil/deposit states, brake/rail/wheel/contact wear and actual noise. No NOx/VOC/dust umbrella or captured-emitted duplication; unspecifiedair UUID cannot erase known urban/nonurban/nearground. Missing LCIA characterization does not zero physical releases. | cp_emissions |
| provider_full_closure | local_special_scheduled_road_service | Actual provider service/nativeactivity/lifecyclecell mapping required for every subcontracted energy/operation/asset/maintenance/treatment result. Multiply compatible raw perkm/hour/pkm/native quantity and complete actual failed/zerooutput/support duty beforeN; already equivalenteachleg not divided twice. Every uncovered stage mandatory; missing data blocks complete application, notzero. | cp_completion; cp_assets; cp_electric; cp_maintenance |
| actual_support_and_responsibility | local_special_scheduled_road_service | For each actual transport commission/operation record beneficiary eligibility, calendar/shift/airport changes, handover and any actual required escort/accessibility/restraint/lift/HVAC/auxiliaryheater/waiting/idling/support. Actual children/infants countpersons; driver/operatingescort not another passenger output. Separate genuinely transported staff from service duties; separate organiser/carrier/subcontractor native coveredcells and all fleet/site users. Actual support/material/provider/asset/waste/emission gets independent sameparentCP row, source/nativequantity/gate/receiver; missing blocks use, no automatic personnel/equipment recipe or labour count. | cp_service_context; cp_completion; cp_fuel; cp_electric; cp_assets; cp_maintenance |

These mandatory actual row-expansion tasks are not inventory selector exchanges. Each actual material/asset/supply/provider/waste/species/state gets unique rowID, one existing parent process, direction/type, one concrete identity/UUIDorunresolved, native property/unit/amount/rawsource, sameparentCP, method/gate/receiver/uncertainty. Establish actual occurrence or evidenced nonuse. Unknown blocks completeness, neverzero or semantic exclusion.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_scope_count | local_special_scheduled_road_service | Reject incorrect64114purpose/eligibility/calendar/shuttle/pupil clause or ordinarypublic/taxi/hire/tour/availability substitutions, ruralpupil exclusion by genericurban restriction, blanket airport exclusion because tickets are available, missing actualOD/completion/positiveN or ticket/attendance/capacity substitutes and omitted failed/empty/support duty. | ghg-product-2011 |
| native_identity_closure | local_special_scheduled_road_service | Reject umbrella/selector, incompatible AC_DC/Mass_Count/chemical/medium UUID, fabricated factor/range, unknown-as-zero or omitted required expansion; each CP exactlyoneexistingprocess and linkedrow sameparent. | ghg-product-2011 |
| lifecycle_energy_provider | local_special_scheduled_road_service | Reject manufactureasset treatedwholelife, vehicle/track/wire/road/site/EoL omission, unsupportedalluserallocation, grossnet/regenerationdoublecredit or inclusiveproviderduplicate. Verify bilingual method/source/requiredqualifier alignment. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset/background_dataset onlyafteractual full native/identity/quantity/lifecycle evidence |
| allowed_use | Only actually qualifying64114completed local special-purpose scheduled leg with actual inclusionclause, responsibility/access/calendar/OD/quality/support/mechanism |
| excluded_use | Generalpublic/taxi/nonscheduledairport/hire/sightseeing/wholeavailability; education/work/flight outputs or universalpkm/zeroelectriclifecycle claim |
| required_metadata | actual_64114_inclusion_clause; local_specific_user_route_or_scheduled_urban_shuttle_or_pupil_rural_clause; actual_school_enterprise_airport_purpose_and_eligibility; organiser_carrier_subcontractor_responsibility; school_calendar_shift_airport_schedule; actual_stop_OD_and_passenger_distance_distribution; actual_completed_leg_N_and_period; actual_vehicle_tram_trolley_similar_mechanism; actual_quality_handover_accessibility_support; passenger_driver_escort_roles; empty_failed_no_show_waiting_duty; actual_included_transport_items; traction_AC_DC_regeneration_and_losses; sameasset_alluser_life; native_provider_coverage_fates_uncertainty |
| required_quality_disclosure | All unknown actual identities/quantities/provider/asset/life/energybalance/wearfate/LCIA gaps and comparability limits |
| update_trigger | Changed inclusionclause/purpose/eligibility/commissionercarrier/calendar/route/OD/quality/support/mechanism/grid/provider/assetlife/fate evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-64114 | official_guidance | UNSD CPC3.0 ExplanatoryNotes30June2025,printed359,64114 with adjacent64112/64115/64116/64132; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Actual specified-user local scheduled, urban/suburban scheduledshuttle and pupilhome-school/school-school includingrural clauses/exclusions. No universal exclusiveairportaccess, equipment/escort, numerical inventory or Countmethod supplied; note does not enumerate tram/trolley. |
| ipcc-road-rail-2006 | official_guidance | IPCC2006Guidelines Vol2Ch3 §3.2pp3.10–3.16 and§3.4pp3.39–3.40; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Actual fuel/engine/control/urea/carbon-origin and electric upstream questions. National inventory scope/defaultsoldfuel/allcarbon assumptions not adopted as complete lifecycle or actual release factors. |
| skoda-trolleybus-case | handbook | Škoda26Tr manufacturer technical case,publicsnapshot2026-10-21; https://www.skodagroup.com/reference/en-pokus-trolejbus-26tr | Conditional actual DCwire/offwirebattery-or-generator/recovery/HVAC/accessibility interfaces only; no universal voltage/power/capacity/dimensions/life/factors adopted. |
| siemens-regeneration-case | handbook | Siemens PortlandTriMet light-rail regenerative storage technical case,publicsnapshot2026-10-21; https://www.mobility.siemens.com/us/en/portfolio/references/portland-trimet-light-rail-case-study.html | Actual braking-to-substation-storage-to-othervehicles energy question; technical case is not64112classification or generic tram saving/material factor. All numerical predictions/benefit claims excluded. |
| ghg-product-2011 | standard | GHGProtocol ProductLifeCycleAccountingReportingStandard2011,chapters7–9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Boundary/data/subdivision/allocation principles. Full track/wire/wear/site/retirement scope, specific collection/Count-leg and sameasset formulas are explicitly authoredPCR choices requiring actual records, not universal source factors. |
| eu-special-regular-2009 | official_guidance | Regulation(EC)1073/2009 asadopted21October2009 Articles2/5, officialhistorical reproduction; https://www.legislation.gov.uk/eur/2009/1073/article/2/adopted?view=plain and https://www.legislation.gov.uk/eur/2009/1073/article/5/adopted?view=plain | Dated jurisdiction-specific regular/special/occasional comparison: organiser/carrier and repetition/contract alone insufficient. No current legal test, licensing obligation or universal exclusive-user airport requirement adopted. |
| epa-school-idle-2026 | official_guidance | US EPA SchoolBusIdleReduction, actualretainedpage updated28August2026; https://www.epa.gov/dera/school-bus-idle-reduction | Actual school waiting/idling and separate fuel/electric auxiliaryheater questions only; no idle-minute/fuelrate/enginewearmultiple/health/avoided-emission factor adopted or requirement every schoolbus uses aheater. |
