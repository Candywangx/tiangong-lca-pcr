---
pcr_id: pcr.other-land-passenger-transport-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other land passenger transport service

## 1. Scope and Applicability

This PCR covers the complete actual urban/suburban residual land passenger transportation function: scheduled cable-operated funicular, teleferic, ski-lift and similar services; other scheduled passenger transport by mechanized land vehicle not elsewhere classified; and actual non-scheduled vehicles with driver providing land passenger transport not elsewhere classified. All qualifying actual mechanisms remain within scope even when an example card or numerical dataset is unavailable. Declare the actual urban/suburban service extent and geographic responsibility; do not import another subclass's single-city/contiguous-city or arbitrary distance condition. Scheduling is required for the first two families; the third has an actual non-scheduled with-driver transport function, not an invented schedule.

Residual n.e.c. eligibility requires an actual documented neighboring-function review: urban/suburban railway and scheduled public-road/tram/trolley services, mixed-mode scheduled service, special-user scheduled road service, taxi/non-scheduled airport shuttle, chauffeured passenger-car hire, man/animal-powered operator-provided conveyance, local coach charter, sightseeing, waterborne and interurban service have their own actual boundaries. In particular sightseeing-bus services are excluded. A new technology, autonomous controller, cable, wheels, leisure setting, booking method or unusual vehicle is not by itself residual-classification evidence. Unknown actual eligibility blocks completed data; it does not justify shrinking this full PCR to cable-only.

One reference item is one actual passenger completing one independently defined qualifying conveyance, with actual function, origin/destination, internal stops/return boundary, mechanism, service quality, extent and duration/time window. Do not force equal distance, vertical gain or duration across real services. Internal drive/vehicle/transfer nodes, engagements or intermediate boarding do not add final outputs within the same declared conveyance. If an independent return is a different declared service, its completion is evidenced separately; a return already included in one output is not counted again. Operators, crew, safety personnel, vehicle movements, offered seats, tickets, access passes, availability hours and passenger-distance are different quantities. Empty positioning, waiting, starts, standby, test/retrieval, failure/partial service and necessary support retain causal burdens. N=0 has no finite per-item result.

Actual accompanying luggage, animals and other items carried without extra charge, and included incidental guides, food/drink and other transport support not separately charged, remain in the delivered transport. Determine each actual native supplied product/provider, recipe/content, quality and fate; no universal meal or guide amount is assumed. Leisure motive alone does not turn ordinary transport into sightseeing; a primary sightseeing/entertainment/resort-access/availability product is not silently converted into completed passenger transport. Freight-only facilities, bare no-driver rental or full vehicle availability/hire-only functions require their own product decisions. Separately sold independent outputs use actual subdivision/allocation.

Include all actual supplies and source/traction/storage/auxiliary mechanisms, stations/paths/site works, loaded/empty/return duties, operator and support responsibility, required equipment, maintenance/wear/releases, complete capital/renewals and retirement once. An actual non-cable, driver or ancillary branch must be modelled with its native method below, not an assumed cable factor. Electric/renewable, downhill or automated operation proves no zero lifecycle or non-exhaust burden. No generic occupancy, energy intensity, lifetime, load proportionality, mgh-derived electrical demand, nominal-power-hours estimate or avoided-alternative benefit is supplied. Sources support their stated context; complete boundary and actual collection equations are explicit PCR choices.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-land-passenger-transport-service |
| classification_refs | CPC3.0 64119; exact dedicated full residual scope after actual functional eligibility review |
| covered_products | Actual urban/suburban scheduled cable passenger service, other scheduled mechanized land passenger service n.e.c., and non-scheduled land passenger vehicles with driver n.e.c.; actual included free accompanying loads and incidentals |
| excluded_products | Actual functions belonging to neighboring transport/sightseeing/hire classes, especially sightseeing-bus64132; freight-only, bare no-driver rental, primary access/entertainment/availability or other nontransport functions |
| representative_product | Completed urban or suburban other-land passenger conveyance |
| production_route | Actual eligible passenger completion; complete coupled cable or actual other mechanized/with-driver movement; native energy/storage/auxiliaries; site/incidentals/operator support; full assets/maintenance/fates |
| market_state | Actual fulfilled eligible passenger transport, evidenced by real completion and declared mode/extent/quality/time |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actual qualifying urban/suburban other-land passenger transport, scheduled cable or other scheduled mechanized n.e.c. or non-scheduled with-driver n.e.c. |
| How much | One actual passenger completes one independently declared eligible conveyance |
| How well | Actual residual eligibility, operator/driver responsibility, mode/mechanism, OD/stops/return, safety/accessibility, accompanying loads and included incidentals/quality evidenced |
| How long or cycle | Actual declared transport extent and completion duration/time window; operating/support period and complete asset lives separately recorded |
| reference_flow_link | completed_ride |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed urban or suburban other-land passenger conveyance |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual urban_suburban extent and geographic responsibility;actual residual eligibility and neighboring-function review;scheduled cable or scheduled othermechanized or nonscheduled withdriver;real operator/driver/passenger roles;actual mode and architecture;OD/stops/internalchanges/return boundary;horizontal_vertical_distance;direction;actual extent/quality/accessibility/duration;completion and positive actual passenger cohort N;period_season;main_auxiliary_standby_retrieval energy and storage;complete coupled drive/vehicle mechanism;carrier/required equipment;path/site/guideway/road responsibility;free accompanying loads and actual incidentals;native provider demand and exact covered cells;asset original/replacement/maintenance/retirement stages;all-user complete-life compatible duty;actual species and receiving medium/subcompartment;uncertainty |

N is actual eligible completed passengers in the same independently defined service scope and cohort/period. Reconcile partial/failed and cross-period duties before normalization once; a vehicle-trip, hour, carrier Count or passenger-km is not interchangeable with this service output. Required qualifiers enter actual data; unknown is not zero.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_and_distance | all inventory rows | Native compatible property | Actual native unit | Actual Count/person rides, carrier trips, seats, tickets, time and person-distance remain distinct; actual horizontal/vertical geometry does not change the Count reference. |
| native_energy_mass | all inventory rows | Native compatible property | Actual native unit | Preserve actual native units/property/state. Compatible kWh uses 3.6 MJ/kWh, not a fuel heating-value factor. Volume/mass, carbon/nitrogen and compound-basis conversions require actual compatible evidence. |
| mode_and_composition | all inventory rows | Native compatible property | Actual native unit | Use the actual branch, energy state, substance/mixture and gate. Fuel supply/stock withdrawal/actual burning/other fates differ; a whole blend with composition ledger OR replacing component inputs must close mass/coverage, never both. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual eligible transport function, installations/vehicles, drivers where required, service completion, duty/source/provider records and independent supply gates |
| starting_condition_role | Actual foreground interfaces, not zero-burden historic assets or a permission to omit upstream supply |
| product_classification_scope | Full actual three64119 residual land passenger families within6411 urban/suburban context, determined through neighboring-function review; not a cable-only or technology-keyword subset |
| recursive_input_rule | An inclusive same-function subservice replaces only its documented covered cells; no recursive new completed ride output |
| upstream_dataset_requirement | Actual native identity, technology, geography, period, quality and stage coverage for supplies/assets/providers/treatment |
| disclosure | Actual branches, completion, coupled energy, full users/life/period, incidentals, boundaries and mandatory gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| complete_service | other_land_service | Include every actual eligible cable, other scheduled mechanized or non-scheduled with-driver duty and causally necessary upstream supplies, site/road/guideway, actual loads/incidentals, operator support, maintenance, capital and retirement once. Crew/driver/rescue personnel support the service rather than automatically being passenger outputs. An incomplete scope is not a complete lifecycle. | unsd-cpc3-64119; cableway-lifecycle-2025 |
| aerial_branch | other_land_service | For actual aerial cabin/chair modes collect suspension/support/haul/tension ropes, grips, carrier/empty return patterns, towers, station conveyors, controls and braking states. A cabin and a chair are different supplied assemblies. | cableway-subsystems-2016 |
| funicular_branch | other_land_service | For actual funicular/guided rope-hauled modes retain track/guideway/wheels/support structures, rope attachments, fixed-track braking and their actual wear/fates. Coupled cars and counterweights belong to the actual common drive boundary; no independent zero/negative downhill burden is presumed. | cableway-subsystems-2016 |
| surface_tow_branch | other_land_service | For actual surface ski tow, evidence the prepared path, tow device and appropriately equipped person engagement/completion. Collect attributable grooming/snowmaking/water/additives/land/support where actually needed; do not include all resort skiing or assume these duties absent. Required skis/boards/attachments need actual service-supplied versus personal responsibility and a justified materially necessary equipment lifecycle boundary; ownership alone is not a zero-burden rule. Any actual supplementary human/animal task or mechanism requires its real physical/source/care responsibility assessment; primary man/animal conveyance is checked against its neighboring actual function. | cableway-subsystems-2016 |
| energy_recovery | other_land_service | Use actual metered whole coupled-drive energy and mode records. Separate gross import/export, storage, losses, brake dissipation and internal recovery. A gravitational or counterweight contribution is not an unmeasured electricity product; external export is represented once with compatible native quality, without a duplicate netting/credit. | ghg-product-2011 |
| provider_and_asset_gate | other_land_service | Assign each manufacture/supply/install/use/maintenance/renewal/retirement cell to one compatible provider or foreground owner. A native provider intensity q_u first multiplies actual compatible demand A_u and justified cohort/all-user share, then /positive N once. Provider hours/vehicle-km/passenger-km/trips are not completed person-services; only an exactly equivalent one-whole-reference provider result needs no further normalization. Exact covered cells replace the matching foreground cells. Whole installation/vehicle and original/replacement component supply cannot overlap. Actual delivered manufacture quantity uses the same physical asset/cohort compatible positive complete-all-user useful-duty share, then/N; manufacture identity does not become a full-life transport result. Uncovered phases are completed separately. | ghg-product-2011 |
| incidental_inclusions | other_land_service | Actual transport-supplied accompanying luggage/animals/items and incidental guides/food not separately charged remain in the delivered service. Resort access, entertainment/sightseeing experience and availability are different fulfilment objects, not silently converted to completed rides. | unsd-cpc3-64119 |
| other_mechanized_branch | other_land_service | For each actual eligible non-cable scheduled mechanized service record installed/vehicle configuration, route/control, guideway/road/support/contact, main and auxiliary drive and actual operating states. Distinguish self-propelled vehicles from central/coupled drive; record whole-system gross imports, internal transfers/storage, empty returns, standby/start/test/rescue, exported quality and all users once. Wheel/tyre/rail/rack/contact, linear primary coil/reaction plate, levitation/guidance/control and any other actual mechanism retain their own native assets, source energy, maintenance/wear and receiving fates. A linear motor does not imply levitation or zero contact wear. Technical cases supply physical interface questions, not evidence a real service belongs here. Missing actual quantities/identity block completed data, not the mechanism from scope. | land-native-mechanisms |
| nonscheduled_driver_branch | other_land_service | For actual non-scheduled vehicle-with-driver n.e.c. passenger delivery, collect accepted OD/extent/time/quality and passenger completion, actual dispatch/vehicle/driver, loaded/empty positioning, waiting/idling/traffic, interruptions/returns/recovery and dedicated driver support. Retain all causal resource use and all users including no-output duties; paid time, vehicle hire, dispatch counts and nominal seats do not prove passenger completions. Identify actual rolling/guide/contact/drive/auxiliary equipment and energy/fuel, charging/refuelling, climate/accessibility, maintenance and disposal at native gates; do not apply cable energy or road stationary-source factors by default. Driver ordinary subsistence/metabolism is a disclosed boundary convention with sensitivity, not physical zero or a fictitious labour-fuel exchange; actual work-specific food/safety/business support remains assessed. | unsd-cpc3-64119; ipcc-mobile-2006 |
| actual_source_storage_cooling | other_land_service | For each actual combustion, electric/battery, fuel-cell, magnetic, mechanical or other source, preserve source delivery state and technology, converter/charge/discharge/storage losses and auxiliary/conditioning responsibility. Do not count internal traction electricity or recovered energy again as purchased input. Actual fuel/oxidizer/cell/refrigerant/cryogen supplies, compounds and source-specific air/water/soil/wear events require their own native rows and evidence; fuel-cell water vapour is not automatically collected waste. If separately modelled initial battery/equipment or cryogenic firstfill is not included in whole manufacture, treat it at its actual delivered long-term asset/inventory gate and compatible complete-all-user life attribution, retaining stock/recovery/fates. Period topups/replacements use actual period stocks/use/fate and causal share, not whole initial fill as maintenance; internal circulation/recondensation/transfers/retention are not new consumption. No theoretical mgh/nominalpower/load-ratio factor replaces actual source measurement or independently supported actual-operation model with uncertainty. | ghg-product-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| other_land_service | Eligible other-land passenger delivery and attributed full lifecycle | required | Every actual declared eligible64119 family | reference_process | completed_ride |

### Process: Eligible other-land passenger delivery and attributed full lifecycle (`other_land_service`)

#### Inputs

##### Product flows

###### Actual AC at an occurring compatible drive supply gate (`drive_ac`)

Actual AC crossing the declared source/drive/transformer/converter gate for an occurring compatible cable or other eligible mechanism. Record same-boundary converter/charge and storage losses. Motor-side DC and stored/regenerated energy reused internally are not another purchased supply. Whole coupled-source quantity is attributed once across actual users, not separately duplicated per carrier or drive node.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_drive_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: cableway-lifecycle-2025

###### Actual non-drive terminal AC (`terminal_ac`)

Actual terminal lighting, control, passenger handling, conditioning or necessary maintenance demand, after excluding drive-gate/provider coverage. Allocate genuinely shared facilities across all actual users.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_uncovered_terminal_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: cableway-subsystems-2016

###### Actual diesel at an occurring compatible source (`diesel_supply`)

Conditional actual compatible diesel for an occurring stationary prime mover, standby/retrieval generator or actual compatible mobile duty. Stationary and mobile source/activity models remain distinct. Delivered grade/blend, net supply/stock-adjusted withdrawal, actual burned, spill/recovery and supply ownership differ; a whole blend with origin ledger OR matching replacing component supplies is exclusive. No default occurrence, heating value or carbon/nonCO2 factor.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_diesel_net_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: ipcc-stationary-2006; ipcc-mobile-2006

###### Actual mineral lubricating oil supply (`mineral_lube_oil`)

Only actual compatible mineral oil used in a documented gearbox, bearing or lubrication duty. Greases, synthetic oils, formulations and other chemicals require separate actual identities; input issues are not automatically leakage or spent-oil output.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: attributed_supplied_mineral_oil_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: cableway-subsystems-2016

###### Actual supplied tap water (`tap_water`)

Only supplied tap water of the matching quality/state, not direct environmental withdrawal, reclaimed water or assumed snowmaking supply. Native volume needs verified compatible support/state before conversion; independently identify actual wastewater, evaporation and retained water.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: attributed_tap_water_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: ghg-product-2011

###### Actual steel wire rope manufacture demand (`steel_wire_rope`)

Only an actual finished steel rope with declared construction, coating, lubrication and haul/support/tension role. Steel wire or raw steel is not the finished assembly. Initial/replacement rope and inclusive installation supply cannot overlap; manufacture-only quantity does not include use or disposal.

- Selected flow: Finished steel wire rope for cableway, delivered
- Flow property / unit: Mass / kg
- Amount rule: attributed_delivered_steel_wire_rope_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: cableway-subsystems-2016

###### Actual complete electric drive motor supply (`electric_motor`)

Only the actual complete motor configuration and manufacture gate. Record rating/control/technology and installation inclusion; a generic power/electricity exchange, motor part or full-life transport result is not a complete supplied motor. Other drives require actual independent records.

- Selected flow: Complete electric cableway drive motor, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_complete_motor_supply_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: cableway-subsystems-2016

###### Actual complete aerial passenger cabin supply (`aerial_cabin`)

Conditional aerial-cabin branch only; declare actual cabin, suspension/grip coverage and manufacture gate. It is not the complete cableway. Chair/funicular/tow carriers are different assemblies, not alternative names for this row.

- Selected flow: Complete aerial cableway passenger cabin, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_complete_aerial_cabin_supply_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: cableway-subsystems-2016

###### Actual complete funicular passenger car supply (`funicular_car`)

Conditional rope-hauled guided-track branch only, with actual wheels/track-braking/cable attachment inclusions. Do not inherit a powered rail-car or aerial-cabin UUID. Track and civil works remain separately owned unless expressly included.

- Selected flow: Complete funicular passenger car, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_complete_funicular_car_supply_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: cableway-subsystems-2016

###### Actual complete aerial lift chair supply (`chair_carrier`)

Conditional actual chair branch, specifying seat assembly, hanger/grip and protective fittings included. Chair count or offered seats do not establish completed people. Fixed versus detachable arrangements retain actual components and maintenance.

- Selected flow: Complete aerial cableway chair carrier, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_complete_chair_supply_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: cableway-subsystems-2016

###### Actual complete platter tow hanger supply (`platter_tow_device`)

Only an actual complete platter-type tow assembly in the surface-tow branch. T-bars and other devices need their own identity. Tow-device count is not persons; prepared path and required compatible skier equipment need explicit actual responsibility and lifecycle boundaries.

- Selected flow: Complete surface-lift platter tow hanger, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_complete_platter_hanger_supply_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: cableway-subsystems-2016

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed urban or suburban other-land passenger conveyance (`completed_ride`)

One actual passenger completes the independently declared qualifying urban/suburban other-land conveyance. Establish actual scheduled cable, other scheduled mechanized n.e.c. or non-scheduled with-driver n.e.c. function, OD/stops/return boundary, mode/extent/quality/time and actual incidentals. Internal vehicles, legs, drive nodes or transfers within that declared output do not create another final completion. Offered seats/tickets/access/availability and passenger-distance remain distinct; only an independently scoped and actually completed return is another service.

- Selected flow: Completed urban or suburban other-land passenger conveyance
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rides`
- Sources: unsd-cpc3-64119

###### Actual external regenerated AC export (`export_ac`)

Only separately measured compatible AC crossing the declared boundary in a gross-import/separate-export account. Gravity/counterweight assistance, internal reuse, DC storage or avoided imports are not automatically this product. Net-import reduction and a second export credit cannot both count the same recovery.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_external_regenerated_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: ghg-product-2011

##### Waste flows

###### Actual separately collected spent mineral oil (`spent_mineral_oil`)

Actual independently collected used mineral lubricating oil at generation before treatment. Record contaminants, water, tare and receiver; do not substitute oily water, absorbents, recovered fuel or a treatment result. A materially different co-collected mixture needs another identity.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_spent_mineral_oil_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fates`
- Sources: ghg-product-2011

###### Actual collected maintenance-wash wastewater (`wash_wastewater`)

Only the actual separately collected aqueous stream with evidenced composition and receiver gate. A direct discharge is its actual substance/medium exchange, not this waste; incoming water does not determine wastewater mass or dissolved constituents. Treatment and collection transport remain independently scoped.

- Selected flow: Collected cableway maintenance-wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_wash_wastewater_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fates`
- Sources: ghg-product-2011

###### Actual collected retired steel wire rope (`retired_steel_rope`)

Actual whole retired rope at its generation/handover gate with measured metal, coating, lubrication and contamination state. It is not clean raw steel scrap, treatment or wear particles. Separate recovered product versus waste status and receiver; no assumed recycling credit.

- Selected flow: Collected end-of-use steel wire rope with retained lubricant
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_retired_steel_rope_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fates`
- Sources: cableway-subsystems-2016

##### Elementary flows

###### Actual fossil CO2 released to air (`fossil_co2_air`)

Only actual direct fossil-origin CO2 mass, with independently supported combustion/source activity and compatible air subcompartment. Grid-generation emissions belong to their provider, not local exhaust. Separately identify bio-carbon and other origins; never species mass from CO2-equivalent results.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Do not erase known urban/non-urban or near-ground information to fit it; independently represent a known state with a verified compatible identity and no duplicate exchange.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_fossil_CO2_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-stationary-2006; ipcc-mobile-2006

###### Actual fossil CH4 released to air (`fossil_ch4_air`)

Only this actual substance/origin and receiving air state; compatible monitoring or separately justified technology/activity model is required. Other hydrocarbons, bio-methane and oil loss do not default to this identity or to zero.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Do not erase known urban/non-urban or near-ground information to fit it; independently represent a known state with a verified compatible identity and no duplicate exchange.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_fossil_CH4_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-stationary-2006; ipcc-mobile-2006

###### Actual N2O released to air (`n2o_air`)

Actual kg N2O in the compatible air subcompartment, not kg N, generic NOx or CO2-equivalent. Require actual source/technology applicability; no factor is supplied here and no conversion is silently inherited.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Do not erase known urban/non-urban or near-ground information to fit it; independently represent a known state with a verified compatible identity and no duplicate exchange.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_N2O_air_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-stationary-2006; ipcc-mobile-2006

###### Actual PM2.5 released to air (`pm25_air`)

Only actual independently quantified size-class/source and air state, including applicable drive/support combustion or mechanical wear. PM10/total PM overlap cannot be added twice; retained dust, rope/rail/wheel fragments, deposits and runoff require their own actual fates.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Do not erase known urban/non-urban or near-ground information to fit it; independently represent a known state with a verified compatible identity and no duplicate exchange.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_PM2_5_air_kg / N
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
| subdivide_first | other_land_service | Subdivide dedicated duties/providers before any residual allocation. For each unavoidable shared burden record actual physical cause, complete compatible all-user denominator and sensitivity; no seat/capacity/fare share is a default. | ghg-product-2011 |
| coupled_drive_users | other_land_service | Allocate the measured common drive/support to actual directional/service cohorts using evidenced engineering/activity drivers and all actual users. Nonlinear load, counterweight and empty return behavior must be retained; passenger-km, vertical mgh or rated throughput alone is not proof of electricity consumed. N=0 has no finite per-passenger result; retain actual zero-output duties in their causal pool. | ghg-product-2011 |
| capital_life | other_land_service | For each same supplied asset/component, allocate actual manufacture quantity by cohort duty/positive compatible total life duty across all users, periods, seasons and relocation uses, then normalize once. Initial installation and renewals are different events; no brochure years or accounting depreciation substitutes for physical life. | ghg-product-2011 |
| other_outputs | other_land_service | Keep genuinely separate cargo, supplied meals/guide packages or other products in their actual native functions; subdivide first and justify residual causal shares. Do not add passengers, cargo kg, guides, food or ticket money as dimensionally equivalent outputs; incidental included items do not create fictitious co-products. | ghg-product-2011 |
| recovery | other_land_service | Record actual recovery/waste destinations and scope, without assumed avoided-bus/grid/virgin-material credits. Internal reused electricity/fuel/material is not another virgin input or export. Apply one disclosed recycling/allocation treatment with required physical exchanges retained. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rides | other_land_service | completed_ride | ride_completion_record | installation_id; actual_mode; cohort_id; origin_destination; horizontal_vertical_distance; direction; ride_id; boarding_engagement; alighting_disengagement; actual_persons; crew_role; completion; ticket_pass_reconciliation; season_period; sampling_uncertainty;actual_urban_suburban_extent;residual_function_neighbor_decision;scheduled_or_nonscheduled_withdriver;actual_driver_operator_roles;declared_extent_quality_time;internal_leg_return_output_scope | Reconcile actual boarding/engagement and completion evidence with carrier/dispatch/turnstile records and supported sampling. Count actual completed persons once; passes, offered places, cabin/chair/tow cycles or a resort visit do not prove N. Preserve partial/failed/rescue rides and their burdens; a return needs independent completion. Document actual adjacent functional exclusions before residual eligibility. Record actual urban/suburban extent/responsibility only, with no borrowed city-adjacency threshold. Define one coherent passenger conveyance before counting; internal nodes/vehicle changes/returns already included cannot create extra final outputs. Distinguish real passenger completion from driver/operator role and availability-only functions. | Item(s); actual m/km; time | each duty and period/lifetime interface | same complete cohort/period and necessary full life | actual eligible installation/vehicle/source/incidentals and all relevant users; cable and non-cable/nonscheduled actual responsibilities | per declared reference flow | actual logs/calibration/balance/coverage/uncertainty |
| cp_energy | other_land_service | drive_ac; diesel_supply; export_ac | coupled_drive_meter_stock_record | installation_id; architecture; gross_AC_import; export_AC; voltage_gate; converter_losses; storage_change; internal_regeneration; brake_dissipation; counterweight; loads_both_directions; empty_carriers; startup; standby; weather_shutdown; test_retrieval; fuel_blend; supply_stock_withdrawal_burn_spill_recovery_transfer; shared_owner;actual_cable_or_other_mechanism;vehicle_id;source_gate;mobile_or_stationary;charging_discharge_loss;HVAC_auxiliary;alluser_coupled_pool;actual_model_evidence | Measure the complete coupled drive and actual terminal interface by operating mode; retain loaded and empty returns, starts, standby, weather closures, tests and emergency recovery. Record both directions/all cohorts before allocation; descending load or gravity assistance does not establish an independently free/negative service. Keep gross import/export/internal recovery/losses distinct. Fuel net withdrawal = opening + receipts - closing - returns on a compatible boundary; separate actual burned, spilled, recovered and transferred fates. Use one compatible whole-blend supply plus composition/origin ledger OR component supplies replacing its coverage, never both. Only evidenced actual combustion drives direct emissions, never supply by assumption. Divide attributed native quantities by the same N once. For actual non-cable self-propelled or central-drive operation measure/independently model actual source/charge/storage/auxiliary losses, running/empty/idling/traffic/standby/test/rescue by source and all users before allocation. Preserve actual motor/guidance/control/cooling and fuel-cell or other conditioning supplies; internal source electricity/recovery cannot be purchased again. No mgh/nominal-power/load factor substitutes for actual supported operating evidence. | MJ; kWh; kg; actual fuel volume with supported state; time; actual load | each duty and period/lifetime interface | same complete cohort/period and necessary full life | actual eligible installation/vehicle/source/incidentals and all relevant users; cable and non-cable/nonscheduled actual responsibilities | per declared reference flow | actual logs/calibration/balance/coverage/uncertainty |
| cp_support | other_land_service | terminal_ac; tap_water | support_site_boundary_record | site_id; complete_provider_cells; actual_meter_and_water; drive_gate_overlap; conditioning; control; terminal_handling; land_occupation_transformation; path_geometry; construction_transport; shared_users; actual_driver;vehicle_guideway_road_site;free_accompanying_loads;actual_driver_dedicated_support;provider_q_u;native_demand_A_u;cohort_alluser_share | Meter actual supporting quantities and map each site/provider gate. Identify civil foundations, towers, terminals, tracks/tow corridor, temporary installation and maintenance/rescue support. Subdivide dedicated service, then allocate a measured shared residual by evidenced compatible all-user drivers. Snowmaking/grooming/gear/land effects activate only on actual relevant branches and require separate identities/quantities; neither all resort activity nor an assumed zero belongs to the ropeway. Normalize attributed native quantity/N. Record actual non-cable road/guideway/contact/station/depot and driver/accessibility/climate support responsibilities as well as cable paths. Actual included guides/food/accompanying loads remain in scope. For every native provider q_u, multiply real compatible A_u and justified cohort/all-user share, then/N once; only a one-whole-reference-equivalent result needs no additional normalization. Match exact covered cells before replacing foreground. | MJ; kg; actual area/time; native provider units | each duty and period/lifetime interface | same complete cohort/period and necessary full life | actual eligible installation/vehicle/source/incidentals and all relevant users; cable and non-cable/nonscheduled actual responsibilities | per declared reference flow | actual logs/calibration/balance/coverage/uncertainty |
| cp_maintenance | other_land_service | mineral_lube_oil | maintenance_component_balance | installation_component; task; actual_formulation; oil_stock_issues_recovery_losses; replaced_parts; rope_coating_lubrication; brake_rail_wheel_wear; coolant_refrigerant; provider_scope; actual_fate;actual_all_mechanisms;tyre_rail_wheel_rack_coil_reaction_guide_contactwear;source_storage_cooling_stock;initial_inventory_vs_period_topup | Use actual work orders, formulation certificates and component/fluid balances. Separately record new supplies, reuse, recovery, wastes and direct species; oil issue does not prove oil leakage or waste. Identify actual greases, chemicals, batteries, refrigerants, braking/grip/roller/track components and renewal cycles, each as its actual atomic record. Inclusive maintenance results replace their covered supplies/emissions once. Attribute actual task quantity/N. For actual non-cable drives/tyres/wheels/rail/rack/coil/reaction plate/levitation/contact/control/storage/cooling, read actual maintenance/stock and measured source/receiver wear records, not zero-wear inference from propulsion label. Independently separate supplies, replacement, recovery, contaminants/deposition/runoff/air/water/soil and waste. Initial long-term cryogen/battery/equipment inventory not included in whole supply is allocated at native delivered/lifetime gate with retained recovery; actual period topup/use/fate remains distinct, circulation/recondensation/retention not new supply. | kg; actual component quantities | each duty and period/lifetime interface | same complete cohort/period and necessary full life | actual eligible installation/vehicle/source/incidentals and all relevant users; cable and non-cable/nonscheduled actual responsibilities | per declared reference flow | actual logs/calibration/balance/coverage/uncertainty |
| cp_assets | other_land_service | steel_wire_rope; electric_motor; aerial_cabin; funicular_car; chair_carrier; platter_tow_device | complete_installation_life_register | asset_id; actual_mode; native_delivered_quantity; manufacturing_gate; initial_component_inclusion; construction_installation; replacements; all_life_duty; cohort_duty; all_users_periods; relocation_reuse; retirement; uncertainty;whole_vehicle_or_installation;guideway_contact_drive_control_auxiliary;manufacture_only_gate;source_storage_cooling_initial_inventory;native_cohort_wholelife_duty | Build the complete installation and required branch-equipment register, not only these example cards. For each same physical asset, use actual supplied manufacture quantity times cohort duty/compatible positive all-user complete-life duty, then/N. Choose complete installation supply OR its initial component bill without overlap; separately add uncovered replacements, operation, maintenance, installation/relocation and retirement/treatment. A manufacturing UUID conveys only its actual supply scope, never whole-life transport. Financial depreciation, rated capacity and a brochure life are not physical useful duty. For every actual non-cable vehicle/guide/contact/drive/control/source/storage/auxiliary/site asset register actual native manufacture and separately covered installation/renewal/maintenance/retirement stages; same physical cohort complete-all-user useful duty and independent native quantity are mandatory. Example cable assemblies do not limit required asset register. | kg; Item(s); actual duty units | each duty and period/lifetime interface | same complete cohort/period and necessary full life | actual eligible installation/vehicle/source/incidentals and all relevant users; cable and non-cable/nonscheduled actual responsibilities | per declared reference flow | actual logs/calibration/balance/coverage/uncertainty |
| cp_fates | other_land_service | spent_mineral_oil; wash_wastewater; retired_steel_rope | individual_stream_receiver_record | stream_id; actual_mixture_state; native_weight; water_contaminants; stock_change; waste_product_status; source_medium; receiver_gate; collection_transport; treatment_scope | Independently weigh/characterize each actual stream and retain receiver and treatment evidence. Reconcile supplies/stocks/recovery, physical residues and direct releases without creating residual mixtures. Product recovery, waste handover, collection transport and treatment are distinct responsibilities; avoid whole-asset/component waste duplication. No plant-mix UUID or clean scrap identity substitutes for an unmatched generation-gate contaminated rope. Attribute independent native fate quantity/N. | kg; actual receiver units | each duty and period/lifetime interface | same complete cohort/period and necessary full life | actual installation and all relevant users | per declared reference flow | actual logs/calibration/balance/coverage/uncertainty |
| cp_emissions | other_land_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air | source_species_medium_record | source_id; stationary_or_mobile; actual_technology; duty; actual_burned_fuel; measured_species_mass; model_source_version_unit; carbon_nitrogen_basis; size_class; medium_subcompartment; overlap; uncertainty;actual_mobile_or_stationary_technology;charge_cooling_fuelcell_or_other_source;actual_compound_size_origin_medium;uncaptured_wear_deposition_runoff | Use compatible measurements or fully supported source/technology/activity-specific models; record actual chemical basis and receiving compartment. Stationary-source methods are not automatically road/mobile factors or vice versa. Preserve other actual fuel origins, combustion and mechanical wear, refrigerants, water/soil/runoff species and uncharacterized releases. Do not derive a species from CO2-equivalent or input-stock deficit. Sum non-overlapping attributed native species/N. Actual mobile, stationary, fuel-cell, cooling/storage/contact and other sources need separately applicable species models/monitors, actual activity/chemical/origin/basis and receivers. National road fuel-sold or full-oxidation conventions are not actual site burning or complete species speciation; no transferred cable/stationary/mobile default factors. Known receiving subcompartment is retained. | kg of each species; size/medium-specific native units | each duty and period/lifetime interface | same complete cohort/period and necessary full life | actual eligible installation/vehicle/source/incidentals and all relevant users; cable and non-cable/nonscheduled actual responsibilities | per declared reference flow | actual logs/calibration/balance/coverage/uncertainty |
| cp_incidentals | other_land_service | completed_ride | actual_transport_bundle_record | actual_service_contract; included_guides_food_drink; actual_item_provider_formulation_quantity; guide_support; separately_charged_outputs; coverage_cells; completion_link;actual_free_luggage_animals_items;actual_native_provider_intensity;actual_compatible_demand;provider_coverage_matrix | Determine the actual delivered transport bundle. Where accompanying items/animals, guides, food or drink are included without separate charge, retain the actual service and independently identify every necessary food/material/provider/support record with native quantity and scope. No default meal, guide-hour or food recipe is prescribed. A complete supplied incidental result replaces only its covered constituents; separately charged products need actual subdivision/allocation. Unknown included content blocks complete-bundle use. Actual free accompanying luggage/animals/items influence compatible measured transport/support demand, not an additional fare/passenger output; animal passenger load is not presumed animal traction. For actual native incidental provider q_u use actual compatible A_u*cohortshare/N and replace exact included recipe/material/support/fate cells only. Unknown actual contents or native demand blocks completion. | actual item/material/provider native units | each duty and period/lifetime interface | same complete cohort/period and necessary full life | actual eligible installation/vehicle/source/incidentals and all relevant users; cable and non-cable/nonscheduled actual responsibilities | per declared reference flow | actual logs/calibration/balance/coverage/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_actual | other_land_service | For actual physical quantity attribute the compatible cohort/all-user share then/positive N once. For native provider intensity q_u first multiply actual compatible demand A_u and justified share, then/N; hour/vehicle-trip/animal-day/passenger-distance are not person-service Count. Only a provider already exactly equivalent to one whole declared reference bypasses further normalization; exact included cells replace foreground once. | cp_rides; cp_energy; cp_support; cp_maintenance; cp_fates; cp_emissions; cp_incidentals | attributed native quantity per reference flow | ghg-product-2011 |
| asset_duty | other_land_service | Delivered manufacture quantity times same-asset cohort duty/positive compatible complete-life all-user duty, then/N; lifetime allocates only actual supplied coverage. Retain independent uncovered install/operation/maintenance/retirement and component replacement ownership. | cp_assets | attributed native quantity per reference flow | ghg-product-2011 |
| coupled_energy | other_land_service | Use metered whole common drive quantities and actual operating/engineering evidence before causal cohort partition. Internal recovery changes measured demand, not a duplicate product. External exports use their actual separate gross gate; no assumed counterweight/occupancy/speed proportionality. | cp_energy | attributed native quantity per reference flow | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_mode_and_completion | other_land_service | Actual urban/suburban extent/responsibility, neighboring-function eligibility, family-specific scheduled or real non-scheduled with-driver status, architecture, OD/stops/return, extent/quality/time, actual passenger completions and period must be evidenced. Do not restrict fullscope to cable or assume technology alone proves n.e.c. Internal nodes cannot duplicate final completion; unknown actual eligibility/completion blocks data completion. | cp_rides |
| full_component_register | other_land_service | Complete all actual ropes/connections/drives/brakes/carriers/towers/stations/track/control/communication/rescue/civil assets and construction/install/relocation/renewal/retirement. Examples do not cover the installation; expand each uncovered actual component/native supply or compatible complete provider without overlap. | cp_assets |
| branch_path_gear_land | other_land_service | Resolve actual branch-specific path/track/land occupation/transformation, tow corridor preparation, required gear, snowmaking/grooming and other site/support obligations with physical quantities, provider ownership and justified boundaries. Each real water/material/land/service exchange is independent; unknown is not zero. | cp_support; cp_assets |
| other_energy | other_land_service | Every actual other fuel/heat/DC delivery/storage/renewable generation/standby/retrieval source requires its own exact identity/native quantity and coverage. Record evidenced non-use where absent. Whole blend versus replacing components is exclusive; supply, stock withdrawal, actual burning and other fates remain distinct. | cp_energy |
| other_materials_and_maintenance | other_land_service | Expand each actual grease/oil/coating/chemical/coolant/refrigerant/battery/worn part and maintenance/cleaning task separately with formulation, native units, quantities and provider scope; do not bind another substance or use an umbrella materials flow. | cp_maintenance |
| other_fates_and_species | other_land_service | Identify every actual physical residue, recovered product, wastewater outlet, exhaust/non-exhaust substance/size/medium and uncharacterized release. Expand source-specific native quantities independently; no generic NOx/VOC/dust UUID, no evaporation-as-waste or stock-deficit-as-emission. | cp_fates; cp_emissions |
| incidentals_and_providers | other_land_service | Resolve actual included guides/food/drink/accompanying services and all subcontracted operation/maintenance/construction/treatment results. Each actual specific product/provider needs native output quantity, compatibility and coverage cells; fees and ticket category do not prove coverage. Missing actual contents or provider scope blocks complete use. | cp_incidentals; cp_support |
| identity_and_scope | other_land_service | Every applicable exchange needs verified compatible identity/property/unit and actual quantity/evidence. Unresolved cards and absent generic ranges are honest candidate gaps, not final completion, zero exchanges or invented defaults. Disclose uncertainty and LCIA characterization gaps separately from physical inventory. | cp_rides; cp_emissions |
| noncable_native_obligations | other_land_service | Complete actual non-cable scheduled and non-scheduled-withdriver drives/vehicles/guideway/contact/source/storage/control/cooling/site/support using the actual native methods, not only a branch label. Include charged/imported/internal/recovered energy, idling/empty/standby/rescue/driver support, whole-asset/component original and replacement gates, source-specific emissions/wear/deposition/runoff and independent fates. Initial delivered long-term inventories versus period topups/circulation remain distinct; missing example card or quantity is incomplete data, not absent product. | cp_rides; cp_energy; cp_support; cp_maintenance; cp_assets; cp_fates; cp_emissions |
| atomic_actual_expansion | other_land_service | Every actual unrepresented energy/material/component/asset/provider/ingredient/accompanying support/waste/compound/particle/fate requires a unique atomic row_id, this existing parent process, direction/type, one specific actual identity/state/gate, verified UUID or explicit unresolved status, native property/unit/quantity/raw source, same-parent CP, evidenced calculation, exact provider coverage, receiver/subcompartment and uncertainty. Link triggering DQ id. No collector or selector flow, invented factor/range, missing-as-zero or erased known receiver; all actual included functions remain until evidence closes. | cp_rides; cp_energy; cp_support; cp_maintenance; cp_assets; cp_fates; cp_emissions; cp_incidentals |

These are mandatory actual collection and independent expansion obligations, not umbrella exchanges. Establish actual occurrence or evidenced non-applicability, then independently represent process/direction/type, identity/native quantity, source and gate. Unknown blocks completion; the example list never deletes a required exchange.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_gate | other_land_service | Verify one actual completed-person reference, 1 Item(s), same positive N/cohort/period/mode/endpoints and actual incidentals in both languages. Crew, cabin/chair/tow counts, resort passes and uncompleted services cannot substitute. | ghg-product-2011 |
| energy_and_fuel_gate | other_land_service | Reconcile metered coupled energy, both directions/empty returns/standby/test/retrieval, storage/losses, internal versus external recovery and all-user allocation. Whole fuel blend/components exclusive; fuel withdrawal/burn/spill/recovery stocks close without unexplained residual or automatic supply=combustion. | ghg-product-2011 |
| coverage_and_fate_gate | other_land_service | Check manufacturing-only versus whole provider scope, complete installation/component initial supply/renewals, necessary branch path/gear/support, actual substance/media and separate physical waste/treatment responsibilities. No double provider, stock, recovery, capital or normalized quantity. | ghg-product-2011 |
| comparability | other_land_service | Compare only equivalent actual eligible other-land transport function/mode, endpoints/distance/vertical geometry, direction, passenger/service quality, period/season, duty/allocation and full lifecycle/incidentals. Equal counts or nominal capacities do not establish equivalent service; no universal intensity or advantage is authorized. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset/background_dataset only after complete actual foreground evidence and identity review |
| allowed_use | Actual residual-eligible urban/suburban completed passenger conveyance with matched scheduled cable/other scheduled mechanized/non-scheduled with-driver function, native mode/extent/quality/time/duty/incidentals/lifecycle |
| excluded_use | Universal pkm/intensity across unequal modes or extents; automatic technology-based residual classification; neighboring functional products, primary resort access/sightseeing/availability, bare no-driver rental; zero lifecycle/non-exhaust claim from drive label |
| required_metadata | Actual function and adjacent eligibility decision; urban/suburban extent/responsibility; scheduled/non-scheduled driver; operator/passenger roles; architecture/source/storage/auxiliary; OD/stops/return/time/quality; completionN; free accompanying loads/incidentals; full duty/site/gear/driver/provider/native demand and asset-life cells; receiver/fates/uncertainty |
| required_quality_disclosure | All actual/unresolved identities/quantities, operating/branch/provider/asset/fate coverage, sampling/model/life allocation uncertainty and LCIA gaps |
| update_trigger | Changed mode, route/geometry/duty, users/incidentals, carrier/drive/asset/provider/recovery configuration, evidence or service completion definition |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-64119 | official_guidance | UNSD CPC 3.0 ExplanatoryNotes,30June2025,p360,64119. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification cable/funicular/teleferic/ski and other n.e.c. branches; accompanying items and actual included free guides/food. Not a quantity factor or proof all leaf routes share this method. |
| cableway-subsystems-2016 | official_guidance | EU 2016/424 as adopted 9 March 2016, Article 3, Annex I/II, official reproduction. https://www.legislation.gov.uk/eur/2016/424/body/adopted?view=plain and https://www.legislation.gov.uk/eur/2016/424/annexes/adopted?view=plain | Dated technical whole-installation, suspended/guided/towed person mechanisms and component/interface questions. No current legal/safety-compliance advice, universal installed configuration or LCA factor adopted. |
| cableway-lifecycle-2025 | handbook | Doppelmayr, Our commitment to a better future: A contribution to greater sustainability, publisher 2025 URL, printed pp.16,20. https://www.doppelmayr.com/wp-content/uploads/2025/04/Brochure_Our_commitment_to_a_better_future_A_contribution_to_greater_stustainability_2025_eng.pdf | Manufacturer qualitative installation material/production/transport/operation/maintenance/retirement and measured-data questions only. No comparative carbon result, assumed life, utilization or universal rate; its PCF recycling boundary is not imposed on this PCR. |
| ipcc-stationary-2006 | official_guidance | IPCC 2006 Guidelines, Vol.2 Ch.2, sections 2.1–2.3, pp.2.6–2.11. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf | Actual stationary-source fuel/technology/activity basis only; no default oxidation/emission values adopted. Mobile duties need separately applicable evidence; national GHG reporting scope is not this complete multi-impact lifecycle. |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard 2011, chapters 7–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Boundary/data transparency and subdivision/physical allocation. Expanded complete capital/branch/incidentals scope and actual collection equations are explicit PCR choices, not generic factors or a capital mandate attributed to this standard. |
| ipcc-mobile-2006 | official_guidance | IPCC2006 Guidelines,Volume2,Chapter3,actual sections3.1–3.2 pp3.8–3.12. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Actual mobile source/fuel/technology/activity compatibility questions only. No default factor, full-oxidation, national fuel-sold=site-burned or biogenic-physical-zero convention adopted; actual source species and noncombustive/exhaust/other fates independently required. |
| land-native-mechanisms | official_guidance | Hitachi Review54(4),2005,actual Chongqing monorail bogie/tyre paragraph,p4. https://www.hitachi.com/ICSFiles/afieldfile/2005/12/26/r2005_04_107.pdf ; Japan Subway Association,actual wheel-supported linear-motor explanation. https://www.jametro.or.jp/tips/linear/how-linear-motor-works/ | Conditional actual physical wheel/tyre/inflation/control and primary-coil/reaction-plate interfaces. No claim actual cases are64119; no generic tyre/energy/life value or technology-based residual classification. Other actual native configurations require independent applicable records. |
