---
pcr_id: pcr.air-sightseeing-flight-programme-service
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Air sightseeing flight programme service

## 1. Scope and Applicability

This PCR covers one actual participant completing an operator-fulfilled aerial-viewing sightseeing flight programme. Programme duration, scenery/interpretation quality, actual trajectory/altitude, constituent flights, operator, geography, period and all included contents qualify the service. A circular flight or fixed arrival airport is not mandatory: weather-dependent balloon landing/retrieval remains inside its real fulfilled programme.

Actual fixed-wing aircraft, rotorcraft, gliders, hot-air/gas balloons and airships share this completed viewing function while retaining different physical interfaces. No branch is inferred present. Other mechanisms fulfilling the same passenger aerial-viewing function require actual technical/quantity/identity obligations before use; absence of a generic factor or UUID is not a product exclusion.

Ordinary A-to-B air transport is outside even when a passenger enjoys its view. Aircraft-with-operator availability under customer operational control, mere reservations/unfulfilled vouchers, primary piloting lessons or active jump/adventure/competition functions are different service objects. Names of aircraft or activities alone do not decide function: actual contract, operator responsibilities and completion evidence do.

Include actual contracted transfers/chase/recovery, launch/tow, interpretation, food and other incidentals, flight/ground/site/capital/maintenance and retirement responsibilities. A separately fulfilled multiactivity holiday cannot be stripped into this output without explicit actual subdivision. Existing passenger-transport results supply only documented compatible interfaces; they are not automatically equivalent sightseeing programmes.

No default occupancy, flight distance/duration, fuel recipe, useful life, emission factor, range or climate advantage is prescribed. ICAO ICEC v13.1 August 2024 is a scheduled-flight operational CO2 calculator, not complete lifecycle/non-CO2 evidence or a universal sightseeing/rotor/glider/balloon/airship model. Full lifecycle and allocation formulas below are explicit PCR design choices; source cases provide physical questions, not universal values.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.air-sightseeing-flight-programme-service |
| classification_refs | CPC 3.0 64134; exact function |
| covered_products | Completed participant operator-fulfilled aerial-viewing flight programme; actual fixedwing/rotor/glider/hotair/gasballoon/airship and other qualifying mechanisms with mandatory complete actual interfaces |
| excluded_products | Ordinary A-B air transport; customer-controlled aircraft availability; reservation only; primary piloting/active jump/adventure/competition; independently fulfilled multiactivity holiday |
| representative_product | One actual participant completes the declared aerial-viewing programme |
| production_route | Actual flight/lift/launch mechanism plus included ground/recovery/interpretation and full attributed lifecycle |
| market_state | Actually fulfilled programme qualified by duration, view/interpretation quality and included content |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed participant air sightseeing flight programme |
| How much | 1 actual participant completing the whole declared programme |
| How well | Actual viewing/interpretation quality, mechanism, class, trajectory/altitude and included content |
| How long or cycle | Actual agreed programme beginning through fulfilled end including actual included ground/recovery content |
| reference_flow_link | completed_programme |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed participant air sightseeing flight programme |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | sightseeing_function; whole_programme_content; actual_participant_completion_N; operator_and_responsibilities; aircraft_lift_launch_propulsion_mechanism; actual_trajectory_altitude_geography; duration_quality_class; constituent_flights_and_included_ground_support; period_all_user_duty; fuel_gas_ballast_state_and_fates; provider_coverage; same_asset_all_user_life; actual_species_medium; uncertainty_and_LCIA_gaps |

Required qualifiers must enter the actual foreground package. N is actual completed participant programmes of an equivalent declared quality/content cohort in the complete period, N>0. Tickets, seats, sorties, party bookings, flight-hours and passenger-km are not this output. Retain unsuccessful/empty and stock/all-user closure before one normalization.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| native_units | air_sightseeing_service | Actual compatible native property | Actual native unit | Keep actual native quantities: count programme/aircraft, hours/cycles, fuel/gas/material mass and electrical energy distinct. Convert compatible kWh by verified 3.6 MJ/kWh only; volume-to-mass requires actual density/state, gas PVT actual purity/pressure/temperature/compressibility and method evidence. No aircraft weight invented to bind a Mass UUID to Count. |
| chemical_and_medium | air_sightseeing_service | Actual compatible native property | Actual native unit | Retain kg compound versus kg C/N/S, fossil/biogenic origins and actual phase/altitude/receiving medium; one species cannot stand for NOx/VOC/lead/particle mixtures. Noise/contrail LCIA quantities are not elementary substance masses. |
| stock_and_flow | air_sightseeing_service | Actual compatible native property | Actual native unit | Supply, stock withdrawal, combustion, retained gas/ballast, release, capture/recovery and transfer differ. Gross electricity import/internal storage/recovery/export differ; no implicit complete oxidation, venting or automatic recycling credit. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual sightseeing contract, complete programme, mechanism/aircraft/launch/site/provider/asset responsibilities |
| starting_condition_role | Actual interfaces, not zero-burden preexisting assets, free gas, launch or recovery |
| product_classification_scope | Sightseeing passenger air-transport function 64134; technical obligations are conditional to actual mechanism, not data-ready subset |
| recursive_input_rule | Purchased flight/launch/ground result replaces compatible exact cells after native activity scaling; never add self-recursive completed programme |
| upstream_dataset_requirement | Actual identity/native quantity/grade/physical gate/technology/geography/period and provider stage coverage; every uncovered stage independently completed |
| disclosure | Actual content/completion/mechanism/altitude, all duties and fates, providers/assets/all-user life and physical versus LCIA gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_duty | air_sightseeing_service | Retain actual taxi/start/warm-up/takeoff/hover/climb/cruise/descent/landing, tow/return, fan/inflation, launch attempts, failed/weather-aborted/zero-passenger/standby/repositioning/recovery duties causally attributable to the service pool, even when no participant completes that duty. Purchased actual providers replace only exact covered cells. | ipcc-aviation-2006; faa-glider-2024; faa-balloon-2024 |
| glider_launch | air_sightseeing_service | Actual aerotow includes towplane launch and return plus uncovered aircraft/engine/fuel/maintenance/capital; winch/auto launch includes actual power/rope/retrieval/ground support, selflaunch actual engine/battery interfaces. No engine on the sailplane does not mean zero lifecycle burden. A purchased inclusive tow result and its same included fuels/assets are exclusive. | faa-glider-2024 |
| lift_branches | air_sightseeing_service | Hot-air actual burner/cylinder/fan and ground recovery; gas-balloon actual lifting-gas storage/compression/fill/topup/vent/leak/recovery and ballast release/receiver; airship actual propulsion, lifting gas/ballonets, mast/winch/truck/mooring/hangar and ground crew are mandatory conditional interfaces. Lifting gas is not automatically fuel or wholly released each flight. | faa-balloon-2024; zeppelin-case-2026 |
| complete_lifecycle | air_sightseeing_service | Account for actual aircraft/envelope/basket/burner/cylinder/engine/rotor/battery/rope/winch/site/runway/terminal/hangar/mooring/ground-vehicle manufacture, installation, maintenance, replacements and retirement within the declared responsibility, subdividing all other users. Whole assemblies versus their included initial components are exclusive. | ghg-product-2011 |
| physical_releases | air_sightseeing_service | Retain actual species/carbon origin/chemical basis/phase/height/receiving medium. Captured fluids/particles are waste only at their real collection gate, not simultaneously emissions. Noise, contrail formation and other non-CO2 mechanisms need actual physical activity and explicit LCIA method/uncertainty, not arbitrary mass flows or a CO2 multiplier. Missing characterization does not make real physical releases zero. | ipcc-aviation-2006; icao-icec-2024 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| air_sightseeing_service | Participant aerial-viewing programme and attributed lifecycle | required | Actual eligible whole sightseeing programme | foreground | completed_programme |

### Process: Participant aerial-viewing programme and attributed lifecycle (`air_sightseeing_service`)

#### Inputs

##### Product flows

###### Actual Jet A-1 turbine fuel (`jet_a1`)

Only actual certified compatible Jet A-1 supply at the declared gate, grade/composition/provider documented. Not road diesel, generic kerosene, avgas or all aircraft fuel. Supply/withdrawal is not automatically burned fuel.

- Selected flow: Jet A-1 aviation turbine fuel
- Flow property / unit: Mass / kg
- Amount rule: attributed_Jet_A1_net_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_flight`
- Sources: ipcc-aviation-2006

###### Actual aviation gasoline 100LL (`avgas_100ll`)

Only actual 100LL supplied to compatible piston flight/tow/selflaunch engines. Retain lead-additive composition and all actual lead species/fates. Other avgas grades, unleaded products and road gasoline require distinct identities; no assumed lead factor.

- Selected flow: Aviation gasoline, grade 100LL
- Flow property / unit: Mass / kg
- Amount rule: attributed_avgas_100LL_net_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_flight`
- Sources: ipcc-aviation-2006

###### Actual propane burner supply (`propane`)

Conditional actual propane hot-air burner only, with real purity/cylinder state and supply gate. LPG mixtures, butane and other burner fuels are not pure propane. Record liquid/vapour transfers, pilot and inflation/flight/reheat burns, residual cylinder stock, vent/leak separately.

- Selected flow: Propane, liquefied, supplied to balloon burner
- Flow property / unit: Mass / kg
- Amount rule: attributed_liquid_propane_net_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_lift`
- Sources: faa-balloon-2024

###### Actual helium lifting-gas supply (`helium_supply`)

Only actual helium gas of documented purity and storage/delivery state. Record initial fill, top-up, contained inventory, recovery, leak and vent separately; a receipt is not a released mass. Hydrogen and other lifting gases need separate cards; helium does not imply a burner or propulsion fuel.

- Selected flow: Helium, supplied as lifting gas
- Flow property / unit: Mass / kg
- Amount rule: attributed_helium_receipts_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_lift`
- Sources: faa-balloon-2024; zeppelin-case-2026

###### Actual purchased AC for flight and ground support (`site_ac`)

Actual compatible external AC at each charging/winch/fan/compressor/hangar/site gate. Record battery input, charger/converter/storage losses and internal discharge separately; onboard generated power is not another purchase. Actual DC must have its own identity.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / MJ
- Amount rule: attributed_external_AC_MJ / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ground`
- Sources: ghg-product-2011

###### Actual road/fan gasoline supply (`ground_gasoline`)

Only actual compatible non-aviation-grade gasoline for ground/chase/inflation-fan duty, with grade and formulation evidence. Never substitute this unspecified gasoline for 100LL or another specified aviation fuel. Whole-blend/component and stock/burn guards apply.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass / kg
- Amount rule: attributed_ground_gasoline_net_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ground`
- Sources: faa-balloon-2024

###### Actual ground diesel supply (`ground_diesel`)

Only actual compatible ground tow/recovery/chase/generator duty; actual grade/blend and provider required. Not aircraft Jet A-1 or another aviation fuel. No prescribed support distance, occupancy or diesel share.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: attributed_ground_diesel_net_withdrawal_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ground`
- Sources: ghg-product-2011

###### Actual municipal water supplied for ballast (`ballast_tap_water`)

Only actual supplied municipal/potable tap water used as ballast with actual quality/state and stock. Not abstracted river water, sand ballast, cleaning water or released water. Record recovery and actual receiving medium of jettison separately; no automatic supply=release or volume-to-mass assumption.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: attributed_ballast_tap_water_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_lift`
- Sources: faa-balloon-2024; zeppelin-case-2026

###### Actual complete turboprop aircraft supply (`turboprop_aircraft`)

Actual specific complete single-engine turboprop assembly and included cabin/engine/initial components; not rotorcraft, generic aircraft mass or complete-life sightseeing service. This is verified delivered manufacturing/supply coverage only. Complete-life all-user duty is an allocation basis, not an assumption of operation/maintenance/retirement coverage. Independently add uncovered stages; inclusive provider stages replace exactly those same foreground exchanges.

- Selected flow: Complete single-engine turboprop passenger aircraft, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_turboprop_aircraft_manufacture_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Actual complete turbine helicopter supply (`turbine_helicopter`)

Actual complete single-turbine helicopter assembly with documented rotor/engine/cabin inclusions; not turboprop or another rotorcraft architecture. This is verified delivered manufacturing/supply coverage only. Complete-life all-user duty is an allocation basis, not an assumption of operation/maintenance/retirement coverage. Independently add uncovered stages; inclusive provider stages replace exactly those same foreground exchanges.

- Selected flow: Complete single-turbine passenger helicopter, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_turbine_helicopter_manufacture_items / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: ghg-product-2011

###### Actual complete unpowered sailplane supply (`unpowered_glider`)

Actual complete unpowered two-seat sailplane assembly only; no zero burden or implicit towplane/winch. Selflaunch engines/batteries and materially different complete assemblies need separate identities. This is verified delivered manufacturing/supply coverage only. Complete-life all-user duty is an allocation basis, not an assumption of operation/maintenance/retirement coverage. Independently add uncovered stages; inclusive provider stages replace exactly those same foreground exchanges.

- Selected flow: Complete unpowered two-seat sailplane, delivered
- Flow property / unit: Number of items / Item(s)
- Amount rule: attributed_unpowered_glider_manufacture_items / N
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

###### Completed participant air sightseeing programme (`completed_programme`)

One actual participant completing the whole declared aerial-viewing programme, with actual quality, duration, constituent flights and included support. Return flights, multiple launches or transfers within this programme do not create another programme. Pilots/crew/support workers are not sightseeing participants; actual nonpay participants count.

- Selected flow: Completed participant air sightseeing flight programme
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion`
- Sources: unsd-cpc3-air-sightseeing; papillon-case-2026; hotair-case-2026; zeppelin-case-2026

##### Waste flows

###### Actual separately collected used petroleum lubricating oil (`spent_oil`)

Actual separately collected used petroleum lubricating oil at generation with contamination and receiver. Not oily water, hydraulic fluid, kerosene drain, absorbent or new oil. Independently record actual fresh-oil formulation, consumed/retained/recovered/collected fates; no input-minus-output emission assumption.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_used_petroleum_oil_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ghg-product-2011

###### Actual collected aircraft wash wastewater (`wash_wastewater`)

One actual separately collected aqueous aircraft-wash stream at generation with composition and receiver. Not sanitary sewage, captured deicing liquid, direct water release or treatment service. Actual deicer/cleaner chemistry and their separate fates remain mandatory; water supply alone cannot establish this stream quantity/composition.

- Selected flow: Collected sightseeing-aircraft wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: attributed_collected_aircraft_wash_wastewater_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance`
- Sources: ghg-product-2011

##### Elementary flows

###### Actual direct fossil CO2 to air (`fossil_co2_air`)

Actual fossil-origin CO2 substance mass at actual source/flight phase/altitude, based on actual burned fuel or compatible measurement/model; not fuel mass, upstream exhaust or CO2-equivalent.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known altitude, upper-troposphere/lower-stratosphere, urban, non-urban or near-ground state to fit it; each actual known state requires an independently verified compatible row without duplicate release. This row does not automatically cover all flight phases.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_direct_fossil_CO2_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-aviation-2006

###### Actual direct fossil CH4 to air (`fossil_ch4_air`)

Actual fossil methane and receiving air state only, not total hydrocarbons, biogenic methane or unspecified natural gas. Source/engine/burner/phase-specific evidence required, not presumed zero or generic jet factor for all branches.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known altitude, upper-troposphere/lower-stratosphere, urban, non-urban or near-ground state to fit it; each actual known state requires an independently verified compatible row without duplicate release. This row does not automatically cover all flight phases.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_direct_fossil_CH4_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-aviation-2006

###### Actual direct N2O to air (`n2o_air`)

Actual kg N2O, not kg N, NOx or CO2-equivalent; source, technique, phase and medium evidence mandatory. No modern-engine qualitative statement is a universal zero for all engines/burners/support.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known altitude, upper-troposphere/lower-stratosphere, urban, non-urban or near-ground state to fit it; each actual known state requires an independently verified compatible row without duplicate release. This row does not automatically cover all flight phases.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_direct_N2O_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-aviation-2006

###### Actual direct SO2 to air (`so2_air`)

Actual SO2 substance, not elemental S, sulfate or all sulfur supplied. Actual fuel sulfur, oxidation/fate and release state need compatible evidence; no complete sulfur-to-SO2 assumption.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known altitude, upper-troposphere/lower-stratosphere, urban, non-urban or near-ground state to fit it; each actual known state requires an independently verified compatible row without duplicate release. This row does not automatically cover all flight phases.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_direct_SO2_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-aviation-2006

###### Actual direct water vapour release (`water_vapour_air`)

Actual water vapour substance at the actual source/altitude. Not liquid ballast, collected wastewater or contrail impact mass. Actual fuel-derived water, inlet/moisture and recovered water boundaries must be reconciled; do not treat vapour as waste or equate all supplied water with release.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known altitude, upper-troposphere/lower-stratosphere, urban, non-urban or near-ground state to fit it; each actual known state requires an independently verified compatible row without duplicate release. This row does not automatically cover all flight phases.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_direct_water_vapour_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: ipcc-aviation-2006

###### Actual helium released to air (`helium_air`)

Actual separately evidenced helium vent/leak mass and receiving air state from each balloon/airship/weather-balloon operation. Supply or unexplained inventory deficit is not release evidence. Retained/recovered gas is not emitted; hydrogen and other gases require separate identities.

This UUID applies only when the actual record expressly and justifiably retains the unspecified-air subcompartment. Never erase known altitude, upper-troposphere/lower-stratosphere, urban, non-urban or near-ground state to fit it; each actual known state requires an independently verified compatible row without duplicate release. This row does not automatically cover all flight phases.

- Selected flow: helium `08a91e70-3ddc-11dd-9465-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: attributed_actual_helium_air_release_kg / N
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: faa-balloon-2024; zeppelin-case-2026

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_roles | air_sightseeing_service | Use actual participant programme cohort N and allocate real shared flight/launch/site duties across actual service users before normalization. Free/lap participants actually served count; pilots, crew, guides and chase staff are support, not extra passenger outputs. A charter party or seat capacity is not N. | ghg-product-2011 |
| hierarchy | air_sightseeing_service | First subdivide actually separable tourist/other-flight/transport/training/cargo/site products. For inseparable joint duty justify causal physical driver and sensitivity, retain allocated sums and incompatible units separately; never add passenger count to tonne-km. Economic allocation requires disclosed reason and actual prices/period only when physical relation cannot be supported. | ghg-product-2011 |
| asset_allocation | air_sightseeing_service | For each same asset use actual delivered native quantity times cohort compatible duty divided by positive complete-life all-user duty, then /N. Actual hours/cycles/calendar/corrosion/envelope or engine limits need service-specific causal evidence; no useful-life, depreciation, mass-per-aircraft or capacity assumption. This allocates verified manufacture only; actual use/maintenance/retirement remain independently completed. | ghg-product-2011 |
| provider_normalization | air_sightseeing_service | A purchased per-flight/per-hour/per-km/launch/transfer result scales by actual compatible attributed native activity before /N; an already per-equivalent-completed-programme result scales by actual programmes and is not divided twice. Declare included fuel/flight/ground/assets/fates cell by cell and remove only those same foreground cells. Freight or equipment results cannot substitute for this Count programme. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | air_sightseeing_service | completed_programme | operational_record | contract; function; programme_id; participants; staff_roles; completed_partial_cancelled; class; itinerary; duration; quality; contents; period; N | Reconcile actual participant-level fulfilment to whole programme and constituent flights/transfers, not tickets or launches. Fix equivalent content/quality cohort. Include causally allocated unsuccessful/empty duties in numerator before divide positive actual N once; N=0 yields no finite service intensity. | Item(s) | each duty/event and complete period/life | complete programme cohort and necessary all-user lifetime | all actual flight/launch/ground/site/maintenance providers and users | per declared reference flow | actual records/calibration/coverage/balances/applicability and uncertainty |
| cp_flight | air_sightseeing_service | jet_a1; avgas_100ll | operational_record | aircraft; engine; flight_phase; actual_trajectory_altitude; fuel_grade_composition; density_basis; open_receipts_close_returns; burn_spill_recovery_transfer; all_users; provider_cells | Collect actual aircraft/engine phased native activity and compatible fuel stocks/burn separately. Whole delivered blend with composition/carbon-origin ledger OR physical component supplies replacing matching blend coverage, never both. Document actual losses, unburned and captured/vented fates, allocate compatible all-user duty, then /N. | kg; actual native flight activity | each duty/event and complete period/life | complete programme cohort and necessary all-user lifetime | all actual flight/launch/ground/site/maintenance providers and users | per declared reference flow | actual records/calibration/coverage/balances/applicability and uncertainty |
| cp_lift | air_sightseeing_service | propane; helium_supply; ballast_tap_water | operational_record | branch; burner; fan; gas_species_purity_pressure; opening_fill_topup_closing; recovery_vent_leak; ballast_material_stock_release_receiver; airship_propulsion_mooring; launch_recovery | Close actual fuel/lifting gas/ballast native stocks and all fates on compatible gates, not residual-to-emission. Separate helium/H2, burner fuel and propulsive energy; actual compressed/cryogenic state and measured mass or supported PVT relationship required. Include ground/inflation/aborted duty and all users; normalize allocated quantity /N. | kg; actual native gas/material quantity | each duty/event and complete period/life | complete programme cohort and necessary all-user lifetime | all actual flight/launch/ground/site/maintenance providers and users | per declared reference flow | actual records/calibration/coverage/balances/applicability and uncertainty |
| cp_ground | air_sightseeing_service | site_ac; ground_gasoline; ground_diesel | operational_record | towplane_return; winch_auto; rope_retrieve; fan_chase_transfer; mast_truck; meter_gate; energy_stocks; charged_delivered; battery_losses; provider_cells; all_users | Record actual glider launch/return/retrieve and balloon/airship support plus included transfers and site duty. Each actual power/fuel/provider gate independent; do not count tow fuel again under inclusive tow result. Meter gross supplies, actual battery/charger losses and internal transfers; blend and stock/burn guards apply; attribute complete actual duty and /N. | MJ; kg; native support activity | each duty/event and complete period/life | complete programme cohort and necessary all-user lifetime | all actual flight/launch/ground/site/maintenance providers and users | per declared reference flow | actual records/calibration/coverage/balances/applicability and uncertainty |
| cp_bundle | air_sightseeing_service | completed_programme | service_record | included_content; interpretation; transfers; meals_actual_recipe; wrappers; staff_duty; providers; served_participants; failed_duty; other_site_users | Reconcile actual contracts, delivered incidental content and provider stage coverage. Independently expand actual ingredients/packaging/consumables/services and their fates. Provider native result times actual compatible activity before /N, no repeat division for equivalent per-programme results; all actual beneficiaries and staff-support duty accounted. | actual native quantities | each duty/event and complete period/life | complete programme cohort and necessary all-user lifetime | all actual flight/launch/ground/site/maintenance providers and users | per declared reference flow | actual records/calibration/coverage/balances/applicability and uncertainty |
| cp_maintenance | air_sightseeing_service | spent_oil; wash_wastewater | maintenance_record | actual_assembly_component; fluid_chemical_formulation; issue_stock_retained_consumed_collected; wash_deice; replacement; retirement; receiver; treatment_scope; all_users | Record actual inspections/repair/engine/battery/envelope/cable renewal and retirement/native materials and fates. Independently retain fresh-input and collected waste identity/composition/gate, direct releases and receiver transport/treatment; no assumed treatment or recycling credit. Allocate actual shared event duty and /N without readding initial included components. | kg; Item(s); actual native quantities | each duty/event and complete period/life | complete programme cohort and necessary all-user lifetime | all actual flight/launch/ground/site/maintenance providers and users | per declared reference flow | actual records/calibration/coverage/balances/applicability and uncertainty |
| cp_assets | air_sightseeing_service | turboprop_aircraft; turbine_helicopter; unpowered_glider | asset_record | asset_id; delivered_native_count_mass; gate; initial_components; install_refit; actual_life_hours_cycles_calendar; all_users; cohort_duty; replacements; retirement; provider_cells | For each same actual asset record delivered supply quantity and documented manufacture gate. Multiply by compatible cohort duty/positive complete-life all-user duty and /N. Never use a mass-only UUID for Item(s) without actual measured conversion. Life basis is allocation only; separately finish uncaptured install/refit/use/maintenance/retirement, provider-inclusive cells replacing exact duplicates. | Item(s); measured compatible native quantities | each duty/event and complete period/life | complete programme cohort and necessary all-user lifetime | all actual flight/launch/ground/site/maintenance providers and users | per declared reference flow | actual records/calibration/coverage/balances/applicability and uncertainty |
| cp_emissions | air_sightseeing_service | fossil_co2_air; fossil_ch4_air; n2o_air; so2_air; water_vapour_air; helium_air | monitoring_record | source; engine_burner_gas; burn_or_release_activity; species_CAS; carbon_origin; chemical_basis; method_factor_applicability; abatement; phase_trajectory_altitude; medium_subcompartment; stock_fates; uncertainty | Independently quantify every actual species and phase/height/receiving state through actual measurement or documented compatible source-specific method. No generic 3.16, all-jet factor, supply-to-release shortcut or invented methane/N2O zero. Known high-altitude or ground state remains distinct; physical inventory and LCIA characterization gaps separate. Attribute actual all-user releases /N. | kg specific substance; actual native physical activity | each duty/event and complete period/life | complete programme cohort and necessary all-user lifetime | all actual flight/launch/ground/site/maintenance providers and users | per declared reference flow | actual records/calibration/coverage/balances/applicability and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | air_sightseeing_service | Sum actual compatible attributable native duty quantities across whole programme, launch/ground/bundle/failed duties and all beneficiaries, then /positive N once. Already per-equivalent-programme results avoid repeat division; per-flight/hour/km results first multiply actual activity. | cp_completion; cp_flight; cp_ground; cp_bundle | Attributed native quantity per reference | ghg-product-2011 |
| fuel_gas_ballast_balance | air_sightseeing_service | On each compatible physical gate reconcile opening+receipts-closing-returns to separately evidenced burned/retained/transferred/spilled/vented/leaked/recovered fates; do not manufacture emission from residual. Whole blend with composition ledger OR actual component supplies replacing matching blend coverage. Gas inlet/air entrainment/ballonet are not all helium; actual purity and native mass balance required. | cp_flight; cp_lift; cp_ground; cp_emissions | Attributed native quantity per reference | ghg-product-2011 |
| same_asset_supply | air_sightseeing_service | Actual delivered native quantity times compatible cohort duty/positive complete-life same-asset all-user duty, then/N, allocates only verified manufacturing/supply gate. Independently finish uncovered installation/refit/operation/maintenance/replacements/retirement; no double whole-assembly initial components. | cp_assets; cp_maintenance | Attributed native quantity per reference | ghg-product-2011 |
| species_state | air_sightseeing_service | Actual compatible measurement or source-specific factor times actual burned/released native activity, preserving species/chemical basis/carbon origin/height/medium and abatement; no generic jet factor for balloons or arbitrary lifecycle CO2/nonCO2 multiplier. Separate physical gaps and LCIA limits. | cp_emissions | Attributed native quantity per reference | ghg-product-2011 |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| function_completion | air_sightseeing_service | Verify actual sightseeing function, whole content/quality/duration/trajectory and participant completion, not invoice/ticket or aircraft availability. Partial/aborted/empty/failed weather duty and all beneficiaries reconcile over complete period; positive N mandatory. | cp_completion; cp_bundle |
| actual_branch_inputs | air_sightseeing_service | For every actual engine/burner/electric/hybrid mechanism independently expand each specific fuel/grade/blend component where replacement chosen, lubricant/hydraulic fluid, refrigerant/agent, battery/charger, deicer/cleaner and supplied water. Record exact process/direction/type/identity/native amount/CP/source/gate. No road gasoline/diesel proxy for avgas/Jet A-1, and no no-tailpipe=lifecycle-zero rule. | cp_flight; cp_ground; cp_maintenance |
| glider_actual_interfaces | air_sightseeing_service | Determine actual aerotow/winch/auto/selflaunch/other mechanism, towplane full return, line retrieval and recovery all-user duty, rope/cable/fuel/power manufacture/replacements/maintenance/retirement. Actual purchased provider coverage is exclusive with its included quantities. Actual route technical evidence mandatory, not manufacturer defaults invented here. | cp_ground; cp_assets |
| lift_and_propulsion_states | air_sightseeing_service | For actual gas balloon/airship/thermal/hybrid branch expand helium/H2/other real gases by identity/purity/storage state, compressors/cylinders/topup/recovery/vent/leak, gas cells/ballonets/envelope/basket/burner/fan, propulsion and mooring/mast/winch/ground vehicles. Independently expand actual water/sand/other ballast input/recovery/release with receiver/native unit. Source chapter scope limits do not delete actual superpressure/hybrid interfaces. | cp_lift; cp_ground; cp_assets |
| all_assets_and_fates | air_sightseeing_service | Independently expand every actual whole assembly or uncovered initial component, runway/terminal/hangar/mooring/site and land interface with actual manufacture/native quantity/all-user life duty. Engine/rotor/battery/cell/envelope/rope changes, maintenance materials and each retirement/treatment state remain explicit. Choose whole assembly OR its same included initial components; no automatic zero for heritage/leased/shared assets. | cp_assets; cp_maintenance |
| actual_releases_and_wastes | air_sightseeing_service | Expand all actual species/medium/altitude states: carbon origins, CO, individually specified nitrogen oxides/hydrocarbons/aldehydes, nonoverlapping particle size/chemistry, lead compounds from actual leaded fuel, sulfur species, refrigerant/gas leaks, liquid ballast to actual receivers, spills and runoff; captured residues/filters/deicing liquids/sewage/food/packaging each get real separate collection identity and receiver. Unknown is not zero; mass balances are checks, not invented species. | cp_emissions; cp_maintenance; cp_bundle |
| altitude_and_climate | air_sightseeing_service | Preserve actual ground/flight phase/altitude and compatible subcompartment; never replace known upper-air by unspecified ground-air to obtain a UUID or characterization. Quantify actual physical noise/non-CO2/contrail relevant activity with declared method and uncertainty. Missing LCIA support is disclosed without erasing inventory or manufacturing a mass exchange from CO2e. | cp_emissions |
| provider_and_evidence_closure | air_sightseeing_service | Require row-addressable actual quantities, method applicability/calibration, provider exact lifecycle cells, included content and independent-source applicability. A compatible purchased flight/tow/transfer/meal result replaces only covered physical cells after actual native scaling. Missing data, collection states or range evidence blocks complete application, not repaired with universal factors or guessed values. | cp_completion; cp_flight; cp_lift; cp_ground; cp_bundle; cp_maintenance; cp_assets; cp_emissions |

These are mandatory row-addressable collection/expansion obligations, not inventory selector rows. Establish actual presence or evidenced non-use; each new actual exchange gets its own process, direction, type, concrete identity, native quantity, CP, source and physical/provider/receiver gate. Missing actual required data blocks complete application; examples do not imply other states absent.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_closure | air_sightseeing_service | Reject mismatched completion/quality/content, missing zero-output causal duties, finite N=0 intensity, tickets/capacity substituted for participants or repeated normalization. | ghg-product-2011 |
| identity_native_state | air_sightseeing_service | Reject umbrella/selector exchanges, mismatched UUID/native Count/Mass/medium/altitude, invented factors or unknown-as-zero. Require every actual branch expansion and stock/fate evidence before complete use. | ghg-product-2011 |
| coverage_asset_provider | air_sightseeing_service | Reject omitted launch/recovery/bundle/maintenance/capital/retirement, unsupported allocation, inclusive-provider double count or a delivered asset UUID treated as whole-life sightseeing. Every actual CP owns exactly one existing process and its linked rows. | ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset/background_dataset only with actual identities, quantities and complete qualified coverage |
| allowed_use | Actual equivalent whole participant aerial-viewing flight programme with declared mechanism/content/quality/trajectory/duty/lifecycle |
| excluded_use | Universal air transport/aircraft factor; mere ticket, seat, sortie, hour, aircraft availability, training/jump/adventure or unreviewed whole holiday bundle |
| required_metadata | sightseeing_function; whole_programme_content; actual_participant_completion_N; operator_and_responsibilities; aircraft_lift_launch_propulsion_mechanism; actual_trajectory_altitude_geography; duration_quality_class; constituent_flights_and_included_ground_support; period_all_user_duty; fuel_gas_ballast_state_and_fates; provider_coverage; same_asset_all_user_life; actual_species_medium; uncertainty_and_LCIA_gaps |
| required_quality_disclosure | All actual identity/quantity/provider/asset/all-user-life/stock/fate gaps, flight and ground altitude/medium, actual branch technical applicability and physical versus LCIA uncertainty |
| update_trigger | Actual programme/function/quality/content, mechanism/aircraft/engine/gas/fuel/launch, provider/asset/life/allocation or physical release/LCIA method changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-air-sightseeing | official_guidance | UNSD CPC 3.0 printed p361 subclass64134; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Sightseeing passenger air transport classification only; no aircraft recipe or completed-unit mandate. |
| ipcc-aviation-2006 | official_guidance | IPCC2006 Guidelines Vol2Ch3 §3.6 pp3.56–3.59; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | Actual engine/fuel/phases/altitude source questions; national GHG method, not lifecycle or universal branch factors. No numerical defaults adopted. |
| faa-balloon-2024 | handbook | FAA Balloon Flying Handbook FAA-H-8083-11B actual2024, ch2 systems, ch6 layout/launch, ch8 recovery, ch11 gas balloons; https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/Balloon_Flying_Handbook | Conditional actual burner/fan/gas/ballast/ground interfaces; ch11 mainly zero-pressure gas balloons. No universal purity, quantity, legal or safety prescription here. |
| faa-glider-2024 | handbook | FAA Glider Flying Handbook FAA-H-8083-13B actual2024 ch7 pp7-17–7-18 and7-30–7-31; https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/glider_handbook | Actual tow-return/winch/auto/selflaunch physical interfaces; flightmanual evidence required for actual equipment. Not proof every glider flight is sightseeing. |
| papillon-case-2026 | handbook | Papillon operator FAQ case, not an independent scientific factor; public snapshot2026-10-21; https://www.papillon.com/guest-services/frequently-asked-questions/ | Actual helicopter/fixedwing tour versus flighttime and included transfer/content questions, not universal durations/occupancy. |
| hotair-case-2026 | handbook | Hot Air Australia operator FAQ case, not an independent scientific factor; public snapshot2026-10-21; https://www.hotair.com.au/frequently-asked-questions-faq | Actual balloon trajectory/weather/landing and full service questions; not fixedOD, default breakfast or numerical programme recipe. |
| zeppelin-case-2026 | handbook | Deutsche Zeppelin-Reederei operator FAQ case, not an independent scientific factor; public snapshot2026-10-21; https://zeppelinflug.de/en/faqs | Actual aerial-viewing product and propulsion/helium/ballonet/mooring/ground interfaces; NT-specific quantities not generalized. |
| icao-icec-2024 | official_guidance | ICAO ICEC methodology actual v13.1 August 2024 §§1–3 pp3–4; https://icec.icao.int/Documents/Methodology%20ICAO%20Carbon%20Emissions%20Calculator_v13_Final.pdf | Operational scheduled-flight CO2 calculator scope/counterevidence only; not life cycle/non-CO2 or universal sightseeing factor. No factor adopted. |
| ghg-product-2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011 chapters7–9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Boundary/data/subdivision/allocation principles. Complete capital/launch/recovery/support boundary, Count programme and formulas are explicit PCR design choices, not quoted standard factors. |
