---
pcr_id: pcr.private-rail-sleeping-compartment-journeys
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Private rail sleeping-compartment journeys

## 1. Scope and Applicability

Actually fulfilled EXCLUSIVE private sleeping-compartment accommodation on a moving rail service. Actual operator inventory, physical coach/compartment configuration, assignment, prepared sleeping facility, access and acceptance records establish the product. Whole-compartment exclusivity, rather than a particular number of beds, en-suite geometry, brand or fare, defines delivery. Independently sold shared berths, reclining/ordinary seats, a stationary assigned residential room, passenger transport alone, dining alone and unused bookings/capacity are excluded. A paid supplement or bundled ticket establishes neither physical fulfilment nor environmental allocation. [unsd-cpc3-63290; cs-room-supplements; nightjet-sleeping; nightjet-private]

The distinct method need is segment-specific moving accommodation sharing train/coach bodies, traction, auxiliary supply, rail/station/depot infrastructure and empty/preparation duties with other services and users. Follow actual train formation split/join, segment coach membership and accommodation/transport stage owners. Include the accommodation's evidenced physical share of movement and full-life assets; do not omit them because a travel ticket is separate or add a second full-train transport dataset. Actual supplier-owned duties remain physical responsibilities. [cs-current-trains; cs-traction-depot-eir-2025]

This reviewed route uses actual completed third-party traction/rail movement and coach/depot service interfaces, with explicit complete physical coverage OR completed exclusive missing-stage supplements. No independent self-operated locomotive, industrial laundry, power plant or food-production technology is presumed. Ordinary actual room preparation, cleaning, utilities, attendant/response, linen handoffs and sanitation remain mandatory. Actual uncovered independent conversion/production needs reviewed route/module expansion before use, never a scope deletion. Included breakfast/food, lounges and other actual package duties require complete real providers or reviewed real production and completed missing stages; optional independently sold dining remains another output. [cs-during-trip; nightjet-sleeping]

One reference is one actual fulfilled exclusive compartment accommodation episode of ONE declared journey/service-version and supplied quality, not one passenger, bed, ticket, passenger-km, hotel-night or fixed24hours. Collect actual route, actual segment distances/time, occupancy and amenities separately. Do not pool materially different durations/routes/configurations/packages without reviewed physical equivalence. Interrupted/partial/reassigned service is reconciled from actual provision and acceptance: delay or a room move alone does not cancel genuinely delivered accommodation, nor does a charge prove undelivered accommodation. Necessary failure, cancellation/no-show, empty coach movement, stabling and readiness burdens retain actual responsible owners even when targetN=0.

Primary sources support qualitative product/route questions only. Published capacities, fares, service times and example meals are not universal inventory factors, lifetimes, physical fractions or guarantees. Missing generic ranges and UUIDs remain explicit evidence gaps with mandatory actual collection and final-exchange verification; no invented values or zero defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.private-rail-sleeping-compartment-journeys |
| classification_refs | CPC3.0:63290 narrower actual private exclusive sleeping-compartment service; not whole n.e.c. accommodation leaf |
| covered_products | Actual exclusively supplied prepared sleeping-compartment accommodation for a declared fulfilled rail journey/service episode |
| excluded_products | Shared single berths; seat-only service; stationary residential or visitor lodging; transport or dining alone; unfulfilled booking/capacity |
| representative_product | Actual train/coach/compartment, exclusive assignment, supplied-state/acceptance, journey version and segment formation, duration, occupants, package and full physical duty matrix |
| production_route | Actual coach/compartment preparation and provider handoffs -> actual exclusive sleeping accommodation through declared segments -> supplied-service acceptance, turnover and receiver/repair/carry |
| market_state | Supplied accommodation service; rolling-stock/rail/fitout/textiles are service assets, not new merchandise per journey |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actually fulfilled private rail sleeping-compartment journey |
| How much | 1 Item(s) |
| How well | One actual exclusively supplied sleeping compartment for one declared accepted equivalent journey/service-version, actual prepared sleeping facility/access/attendant/package/physical acceptance and real configuration; not guest/berth/seat count |
| How long or cycle | Actual supplied accommodation episode start/end/timezones/UTC-offset/DST and elapsed duration, actual movement segments/coach changes, preparation/stock/reporting and full asset-life phases; no fixed night/24hours |
| reference_flow_link | fulfilled_private_sleeping_compartment_journey |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Actually fulfilled private rail sleeping-compartment journey |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_operator_train_coach_compartment_configuration; actual_exclusive_sleeping_not_sharedberth_or_seat; declared_equivalent_journey_service_version_package; actual_supplied_access_ready_acceptance_and_partial_state; actual_episode_segments_splitjoin_moves_reversals; native_start_end_timezone_DST_distance_duration; actual_guests_berths_seats_separate_not_reference; alluser_transport_lodging_dining_staff_and_other_consumers; necessary_empty_reposition_stabling_idle_failure_owner_and_carry; complete_provider_or_exclusive_completed_missing_stage_matrix; alluser_full_rollingstock_rail_station_depot_fitout_textile_life; actual_food_linen_water_refrigerant_material_species_receiver_scope; each_operand_native_unit_basis_method_state_time_source |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| journey_identity | fulfilled_private_sleeping_compartment_journey | Count | Item(s) | N_target counts unique actually fulfilled exclusive compartment accommodation episodes of declared equivalent service-version after physical assignment/move/segment/interruption/reversal reconciliation. Same episode across train split or coach change counts once; independently supplied different compartment episodes are separate. No multiplication by persons/beds/seats/route-km; no charge or nominal capacity as provision. Actual partials require separately described supplied output and responsibility, not automatically a full reference or zero. |
| native_operands | all values | Actual supported native property | Actual native unit | Each independent measurement, numerator, denominator, share, conversion, concentration, density, factor, duration and lifetime operand keeps its own native_unit; basis; method; state; sample_time; source_ref plus raw value, record ID and uncertainty. These are per operand, not one shared row-level provenance badge. Material/phase/time/site compatibility and dimensional conversion precede arithmetic. |
| segment_units | complete_traction_movement_service | Actual supported service property; Count when truly counted | Actual native operation unit; Item(s) only actual counted operation | Actual train/coach-segment movement, passenger transport, compartment accommodation, berth/seat/day configuration and cargo freight are different quantities. No bed-seat equivalence or passenger-km-to-compartment conversion without actual state, members and evidenced physical driver; never convert money into physical service. |
| water_state | supplied_water, contained_wastewater, water_vapour_air, direct_water_outfall; supplied_water_liquid_tap | Volume; Mass | m3; kg | Actual source/tank/receiver/environment and water/moisture state govern identity and quantity. Actual compatible density-temperature conversion only; supply, retained stock/moisture, contained transfer, direct liquid outfall, vapour and dissolved constituents are distinct nonadditive views. Unknown residual is not an emission or zero. |
| freight_units | supply_freight | Mass * distance | kg*km | Each unique actual cargo-leg retains wet carried goods plus packaging/support payload; remove only actual vehicle/noncargo tare. EACH repeated actual leg uses evidenced repeat_count once; TOTAL records unchanged. Keep THAT-record target_share inside sum; normalize positive same-scopeN once. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual operable private sleeping compartment and actual train/coach/segment physical service, prepared access/linen/water/package state and complete traction/depot/provider-stage evidence |
| starting_condition_role | Operating accommodation and full physical service-asset life; existing leased coach/rail/station/depot is not burden-free |
| product_classification_scope | Narrower63290 actual exclusive sleeping compartment; stationary boardinghouse/residentialclub, independently sold berth, seat and transport/dining alone excluded |
| recursive_input_rule | Do not purchase identical final compartment accommodation again as its own input. Complete actual traction/coach/laundry/food/support providers replace only matching physical duties; same coverage not added again through direct energy/assets/receivers |
| upstream_dataset_requirement | Complete actual energy/water/material/food/textile and provider production plus rolling-stock/fitout/equipment/rail/station/depot manufacture-install-maintain-replace-EOL with all users/periods once. Actual missing duties must be completed integrated once with source, native quantities/state/time, owner and explicit coverage/exclusion links before full-chain use |
| disclosure | Actual exclusive service/version/acceptance/partial/move/formation and all consumers; native segment/service/stock/task/lifetime ledgers; necessary empty/idle/failure pool ownership and carry; complete stage owners/providers/receivers and source/identity gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| exclusive_service | sleeping_compartment_service | Actual exclusive sleeping accommodation and service acceptance govern provision; commercial supplement/ticket grouping does not determine quantity or physical allocation. Exclude independently supplied shared berth and seat equivalents. | cs-room-supplements; nightjet-sleeping; nightjet-private |
| moving_shared_boundary | all moving duties | Enumerate actual train/coach/segment membership and split/join, all sleeping/seated/dining/staff and other real consumers plus accommodation-versus-transport outputs. Assign actual traction, auxiliaries, empty/depot moves, readiness and full vehicle/rail/station/depot life once by native evidenced duty/causal drivers, not fare ratios, bed capacity or a second full-train background. | cs-current-trains; cs-traction-depot-eir-2025 |
| provider_complete | provider and own stages | Build actual stage-owner/coverage matrix: physical stage, asset/operation, segment/site/time, provider dataset and native quantity, actual covered components and exclusions. Use lifecycle-complete matching provider OR exclusive underlying duties. Actually missing stages require completed actual evidence-linked integration; a list of planned supplements, outsourcing label or missing report is insufficient. Unclear overlap or missing actual stage blocks complete-chain use. | cs-traction-depot-eir-2025 |
| included_package | actual food and ancillary | Include actual package food/sanitation/linen/lounge/response duties, with complete upstream material/preparation/operation/waste/assets/transport once. Independent dining-car goods remain separate physical outputs sharing real resources. Provider labels cannot erase uncovered cooking/holding/serving, and real unreviewed independent production/traction routes require reviewed expansion before use. | cs-during-trip; nightjet-sleeping |
| complete_asset_land | assets and land | Complete all-user rolling-stock/fitout/equipment/textile/rail/station/depot life and actual land occupation/transformation stage interfaces once. Covered provider/asset land is not repeated. Observed and sourced remaining life/equivalent service or actual terminated total must close full burden; target annualN is not asset lifetime. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sleeping_compartment_service | Private rail sleeping-compartment accommodation and actual support | required | Actual fulfilled exclusive sleeping compartment and declared equivalent journey/service-version | Continuous coach/common readiness and actual segment movement, preparation/turnover/linen/maintenance task events; full real all-user transport-accommodation responsibility | fulfilled_private_sleeping_compartment_journey |

One integrated accommodation node, not another reference for a train split, coach move, cleaning task or supplier handoff. Actual service episodes overlap continuous vehicle/common operations and distinct task batches. Enumerate all intended sleeping/shared-berth/seat/transport/dining/lounge/other service outputs and handoffs in cp_journeys/cp_rail before extracting target inventory; useful used-material handoffs and waste remain distinct. Failed/out-of-order compartments, incomplete preparation, rejected linen/supplies and interrupted service keep original event/source IDs and actual repair/reclean/redeploy/unused-return/useful-transfer/held/receiver paths. Unresolved failure is not accepted accommodation; retained actual burden is not erased.

### Process: Private rail sleeping-compartment accommodation and actual support (`sleeping_compartment_service`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`accommodation_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Actual alternating-current electricity at point of use `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Binding: `fixed`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_energy; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range evidence need: Source/location/voltage, actual meter interval, shared train/coach consumers and actual upstream coverage; no kWh/guest or nameplate default.

###### Actual externally delivered useful heat (`purchased_useful_heat_delivered_heat`)

Only actual useful heat delivered across this node boundary on an evidenced energy basis. Keep supply/return state, temperature grade, coverage and actual loss ownership. This generic heat identity does not assert natural gas, steam mass, boiler efficiency or a temperature. Cooling, fuel energy and unsupported steam-to-energy cases remain outside this identity.

- Selected flow: Actual externally delivered useful heat `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- Binding: `fixed`
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_energy; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range evidence need: Actual useful delivery, native temperature/enthalpy and independent conversion metadata/provider losses and equipment.

###### Actual liquid treated tap-water supply (`supplied_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_water; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Range evidence need: Actual source/tank/stock/meter, transfer ID and all-user/event linkage; no litre/passenger or assumed retention technology.

###### Actual independently recorded synthetic detergent supply (`cleaning_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Actual independently recorded synthetic detergent supply `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_stock; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Range evidence need: SKU/composition/state, gross-net-tare, prepared solution and native EACH/TOTAL conversion, matched unused returns.

###### Actual complete attributable traction and rail-movement service (`complete_traction_movement_service`)

Actual provider-defined completed physical train/coach-segment operation only, carrying its evidenced traction/auxiliary supply, upstream energy, relevant rolling-stock/track/station/depot life and empty/readiness duties to the documented extent. Count is a real operation unit, not a ticket/invoice; non-counted native services require an actual supported concrete exchange and reviewed dimensional reconciliation. Own missing stages are completed exclusively before full-chain use.

- Selected flow: Actual complete attributable traction and rail-movement service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_rail; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rail`
- Range evidence need: Actual contract deliverable/native unit, train/coach/segment formation, distance/time, auxiliary scope, all consumers and full covered-stage matrix; no fare ratio or nominal bed share.

###### Actual complete coach preparation and depot maintenance service (`complete_coach_depot_service`)

Actual counted completed physical cleaning/inspection/repair/preparation/stabling operation with explicit service boundary. Coach moves already covered by rail provider are not repeated; direct resource rows contain only uncovered duties.

- Selected flow: Actual complete coach preparation and depot maintenance service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_providers; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`
- Range evidence need: Actual completed operation quantity and native basis, depot/coach/event IDs, equipment/water/chemicals/energy/effluent/assets/transport coverage.

###### Actual completed external or central linen care (`external_linen_care`)

Actual completed wash/dry/finish care measured on actual dry-textile basis when kg is used; never wet-soiled gross. Provider wash resources, equipment, transport and rental manufacture are disjoint from own uncovered duties. Other actual contracted native basis requires evidenced conversion, not a kg/night default.

- Selected flow: Actual completed external or central linen care
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_linen; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_linen`
- Range evidence need: Batch and own dry-method/moisture, actual rewash cycles, stock movements, provider full life and wash-effluent coverage.

###### Actual complete included food provision service (`included_food_service`)

Conditional actual included prepared food or meal-provision operation, not every journey by default and not eaten portions. Actual food/ingredients, preparation/holding/serving/dishes, waste/assets/transport must be completely covered by real provider or reviewed actual production expansion. Purchased independent dining outputs retain own burdens.

- Selected flow: Actual complete included food provision service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_package; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_package`
- Range evidence need: Actual package/meal provision acceptance, native service quantity and complete physical source/stage/receiver coverage; no universal meals, recipe or outsourced label replacing missing duties.

###### Actual completed external guest support service (`external_guest_support`)

Conditional actual access/response/lounge/other support operations with completed native basis and explicit full provider scope. Monetary fees alone do not establish an exchange or justify excluding common resources.

- Selected flow: Actual completed external guest support service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_providers; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`
- Range evidence need: Actual operation and acceptance records, consumers and equipment/ICT/material/energy/asset/transport scope.

##### Elementary flows

#### Outputs

##### Product flows

###### Actually fulfilled private rail sleeping-compartment journey (`fulfilled_private_sleeping_compartment_journey`)

One actual exclusively supplied sleeping compartment for the declared accepted accommodation service episode, not guest/berth/seat count, ticket, fixed night or passenger-km. Resolve moves, shared-to-private configuration, interruption/partial provision and physical acceptance without duplicating an episode.

- Selected flow: Actually fulfilled private rail sleeping-compartment journey
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_journeys`
- Range evidence need: Actual vehicle/coach/compartment identity, service-version/interval/route, exclusivity and supplied-state acceptance.

##### Waste flows

###### Actual separately collected paper packaging waste (`packaging_discard_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected paper packaging waste `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual material/contamination/dry-wet/receiver records and counted-to-mass conversion; no all-waste composite identity.

###### Actual separately collected metal packaging waste (`packaging_discard_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected metal packaging waste `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual material/contamination/dry-wet/receiver records and counted-to-mass conversion; no all-waste composite identity.

###### Actual separately collected used lubricating oil (`discarded_cleaning_maintenance_material_used_lubricating_oil`)

Only actual petroleum-based or synthetic lubricating oil used and contaminated through use, independently collected and transferred. Retain actual composition, water/contaminant state and receiver. Fresh oil, cooking oil, refrigerant, aqueous wastewater and residues retained in filters/equipment do not use this identity. No recycling or disposal route is assumed.

- Selected flow: Actual separately collected used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual species/material/mixture/contamination/hazard description and receiver proof; unknown does not become a generic inert stream.

##### Elementary flows

###### Actual water vapour emitted to air (`water_vapour_air`)

Only actual evidenced evaporation/vapour crossing to air, not receiver-bound liquid waste or an unexplained water balance residual.

- Selected flow: Actual water vapour emitted to air `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_water; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Range evidence need: Actual compatible water/moisture measurement or sourced model with each operand metadata and medium; no supply=evaporation.

###### Actual separately evidenced fossil carbon dioxide emitted to air (`direct_air_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil carbon dioxide emitted to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_emissions; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Range evidence need: Actual measurement or source-backed applicable factor, activity units/state/basis/time and constituent conversion; missing necessary emissions remain mandatory gaps.

###### Actual separately evidenced fossil methane emitted to air (`direct_air_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil methane emitted to air `08a91e70-3ddc-11dd-9610-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_emissions; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Range evidence need: Actual measurement or source-backed applicable factor, activity units/state/basis/time and constituent conversion; missing necessary emissions remain mandatory gaps.

###### Actual separately evidenced nitrous oxide emitted to air (`direct_air_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced nitrous oxide emitted to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_emissions; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Range evidence need: Actual measurement or source-backed applicable factor, activity units/state/basis/time and constituent conversion; missing necessary emissions remain mandatory gaps.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| physical_precedence | all quantities | First subdivide by actual separately metered/event/asset duty and physical stage; then use an actual justified causal driver for remaining inseparable duty, with all real consumers and periods. Document method, own native driver units/basis/state/time/source and sensitivity. No universal fare/revenue/berth/guest fraction. Different physical duties may require different drivers; compare credible alternatives and retain unsupported allocation as blocking evidence gap. |  |
| rail_partition | train/coach/segment/duty | For each actual duty k record B_k, actual segment/formation/configuration and complete consumer set. Use exclusive owner-stage partition plus evidenced target share a_target,k; every share is on that SAME duty/interval/basis, nonnegative, and all owner/consumer shares close B_k without overlap. Separate physical accommodation from passenger movement ownership within common coach/traction, rather than assigning full burden to both. Actual measured auxiliaries and separately owned prep split before shared movement allocation. Seat/day conversion uses actual configuration/time membership, not nominal bed=seat. | cs-current-trains; cs-room-supplements |
| necessary_pool | idle/empty/failure/N0 | Record actual necessity, causal responsibility and pool owner for unsold/failed/closed/stabled/empty/depot-reposition events. Allocate necessary pooled burdens with consistent all-user physical drivers across actual responsible products and periods, retaining true idle shares in numerator and denominator for calendar/capacity-time approaches. Productive-output drivers must carry full necessary idle burden to evidenced responsible products and close full pool. N_target=0 retains source/owner/stage/native quantity and actual carry/termination disposition without division; do not create journeys or hide unrelated work in target pool. Unresolved owner/final disposition blocks complete use. | cs-traction-depot-eir-2025 |
| asset_life | all assets/textiles/infrastructure | For actual asset/stage j use its complete uncovered burden and compatible target life-service share, based on observed all-user service history plus sourced remaining productive-equivalent service OR actual terminated total. Record actual life driver/equivalence and every independent native operand, uncertainty/sensitivity/update and period attribution. Complete all users/periods must close the whole burden; no annual targetN as whole lifetime or duplicate manufacture after repair/redeployment/internal transfer. Actual idle/native calendar allocation follows necessary_pool. |  |
| provider_gate | all providers and own duties | One completed lifecycle-matched provider OR exclusively completed uncovered underlying stages. Match physical duty/asset/stage/segment/site/time and source/receiver links; integrate real missing quantities and datasets once before complete-chain use and explicitly exclude overlap. The same final accommodation is not its own recursive input. Counted service cards require real counted physical operations; a different actual native deliverable must retain its supported unit and reviewed dimensional reconciliation. | cs-traction-depot-eir-2025 |
| stock_exclusive | unused/used supply returns | External receipts net of packaging/container tare still include real outbound UNUSED returns. Gross input is same-scope gross DRAWN supply S from stock_balance, not current receipts alone. EITHER input S plus matched same-source/identity/state unused return output OR input (S minus matched unused) and OMIT the return output. Never both deductions, nor net unrelated stocks. Used recovery/useful export is a separate fate with existing burden retained, not an unused new-material return or automatic avoided manufacture. Carry closing stock and earlier attribution with actual source IDs. |  |
| stream_fates | outputs and failures | Actual intended service outputs, partials, useful used materials, internal moves and waste/elementary releases retain their actual gates. Reclean/repair/return links original failed event and retained burden; no second accepted journey for correction. Split unlike material/species/medium/receiver; only genuine collected mixture is one stream with nonadditive component views. No unexplained residual or generic mixed waste as evidence of fate, zero or credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Every independent raw value, factor and derived operand has its OWN record: `operand_id; value; native_unit; basis; method; state; sample_time; source_ref; uncertainty`. Link each operand to its actual physical event/material/consumer/asset/interval; a single protocol-wide unit or citation cannot substitute the individual fields. Preserve raw versus converted, attributed and already-per-reference representations and dimensional transformations. Every protocol below owns ONLY `sleeping_compartment_service`; provider/receiver IDs are physical interfaces, not invented Process Map nodes. Actual numeric records and completed linked supplements are required before final full-chain data use, not merely a future collection plan.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_journeys | sleeping_compartment_service | reference and all real service consumers | assignment/service acceptance ledger | episode_id; service_version; operator; train_id; coach_id; compartment_id; configuration_version; exclusive_assignment_intervals; access_ready_state; actual_supplied_start_end; timezone_UTCoffset_DST; actual_guest_ids; move_id; segment_ids; actual_interruption_partial_acceptance; booking_charge_state; other_intended_output_id; other_output_recipient; other_output_gate; other_output_state; actual_handoff_time; actual_handoff_source; N_target; duplicate_reversal_id; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; N_target_uncertainty; other_output_quantity; other_output_quantity_unit; other_output_quantity_basis; other_output_quantity_method; other_output_quantity_state; other_output_quantity_sample_time; other_output_quantity_source; other_output_quantity_uncertainty; actual_guest_count; actual_guest_count_unit; actual_guest_count_basis; actual_guest_count_method; actual_guest_count_state; actual_guest_count_sample_time; actual_guest_count_source; actual_guest_count_uncertainty; actual_episode_elapsed_duration; actual_episode_elapsed_duration_unit; actual_episode_elapsed_duration_basis; actual_episode_elapsed_duration_method; actual_episode_elapsed_duration_state; actual_episode_elapsed_duration_sample_time; actual_episode_elapsed_duration_source; actual_episode_elapsed_duration_uncertainty; actual_segment_distance; actual_segment_distance_unit; actual_segment_distance_basis; actual_segment_distance_method; actual_segment_distance_state; actual_segment_distance_sample_time; actual_segment_distance_source; actual_segment_distance_uncertainty; actual_segment_duration; actual_segment_duration_unit; actual_segment_duration_basis; actual_segment_duration_method; actual_segment_duration_state; actual_segment_duration_sample_time; actual_segment_duration_source; actual_segment_duration_uncertainty; supplied_partial_duration; supplied_partial_duration_unit; supplied_partial_duration_basis; supplied_partial_duration_method; supplied_partial_duration_state; supplied_partial_duration_sample_time; supplied_partial_duration_source; supplied_partial_duration_uncertainty | Reconcile actual assignment, boarding/access/readiness, attendant and acceptance records with compartment/train plans; follow moves and changes through original episode ID; physically classify accepted complete declared version, separately described partials, failed and unprovided states. Record EACH actual independent other intended output with its own output ID, recipient/gate/state, actual handoff time/source and other_output_quantity with own native metadata; actual partial/seat/transport/dining quantities are not inferred from guestcount or targetN. Link same output ID to cp_rail membership/driver. Included meal/bed components of the same package are not a second independent co-product. Aggregation: Sum unique accepted equivalent target episodes N_target; keep other output native quantities/handoffs separate; apply normalize_once only to same accepted scope | Item(s); actual native time/distance qualifiers | Each actual assignment/episode/move/interruption/acceptance; reconcile each reporting close | Actual episode/service interval, preparation/reporting and cancellation/failure carry | Actual trains/coaches/segments/compartments and real consumers | per reference flow | Source plans; assignment and acceptance trail; complete episodes/moves/reversals and excluded-state review |
| cp_rail | sleeping_compartment_service | shared moving vehicle/traction transport interface | formation-segment-duty-coverage ledger | train_id; coach_id; formation_version; segment_id; segment_start_end; from_to_location; split_join_event; actual_service_mode; seat_day_conversion; sleeping_seated_dining_staff_other_members; linked_other_intended_output_id; actual_traction_auxiliary_meter_scope; physical_duty_id; provider_operation_id; covered_stage_ids; uncovered_stage_ids; necessary_empty_reposition_stabling_failure; pool_owner; carry_id; B_k; B_k_unit; B_k_basis; B_k_method; B_k_state; B_k_sample_time; B_k_source; B_k_uncertainty; actual_distance; actual_distance_unit; actual_distance_basis; actual_distance_method; actual_distance_state; actual_distance_sample_time; actual_distance_source; actual_distance_uncertainty; actual_duration; actual_duration_unit; actual_duration_basis; actual_duration_method; actual_duration_state; actual_duration_sample_time; actual_duration_source; actual_duration_uncertainty; actual_coach_mass; actual_coach_mass_unit; actual_coach_mass_basis; actual_coach_mass_method; actual_coach_mass_state; actual_coach_mass_sample_time; actual_coach_mass_source; actual_coach_mass_uncertainty; actual_carried_payload_mass; actual_carried_payload_mass_unit; actual_carried_payload_mass_basis; actual_carried_payload_mass_method; actual_carried_payload_mass_state; actual_carried_payload_mass_sample_time; actual_carried_payload_mass_source; actual_carried_payload_mass_uncertainty; actual_space_time; actual_space_time_unit; actual_space_time_basis; actual_space_time_method; actual_space_time_state; actual_space_time_sample_time; actual_space_time_source; actual_space_time_uncertainty; actual_seat_day_duration; actual_seat_day_duration_unit; actual_seat_day_duration_basis; actual_seat_day_duration_method; actual_seat_day_duration_state; actual_seat_day_duration_sample_time; actual_seat_day_duration_source; actual_seat_day_duration_uncertainty; actual_configuration_capacity; actual_configuration_capacity_unit; actual_configuration_capacity_basis; actual_configuration_capacity_method; actual_configuration_capacity_state; actual_configuration_capacity_sample_time; actual_configuration_capacity_source; actual_configuration_capacity_uncertainty; provider_native_quantity; provider_native_quantity_unit; provider_native_quantity_basis; provider_native_quantity_method; provider_native_quantity_state; provider_native_quantity_sample_time; provider_native_quantity_source; provider_native_quantity_uncertainty; actual_causal_driver; actual_causal_driver_unit; actual_causal_driver_basis; actual_causal_driver_method; actual_causal_driver_state; actual_causal_driver_sample_time; actual_causal_driver_source; actual_causal_driver_uncertainty; each_consumer_driver; each_consumer_driver_unit; each_consumer_driver_basis; each_consumer_driver_method; each_consumer_driver_state; each_consumer_driver_sample_time; each_consumer_driver_source; each_consumer_driver_uncertainty; all_consumer_driver_total; all_consumer_driver_total_unit; all_consumer_driver_total_basis; all_consumer_driver_total_method; all_consumer_driver_total_state; all_consumer_driver_total_sample_time; all_consumer_driver_total_source; all_consumer_driver_total_uncertainty; exclusive_stage_share; exclusive_stage_share_unit; exclusive_stage_share_basis; exclusive_stage_share_method; exclusive_stage_share_state; exclusive_stage_share_sample_time; exclusive_stage_share_source; exclusive_stage_share_uncertainty; actual_empty_duration; actual_empty_duration_unit; actual_empty_duration_basis; actual_empty_duration_method; actual_empty_duration_state; actual_empty_duration_sample_time; actual_empty_duration_source; actual_empty_duration_uncertainty; actual_reposition_distance; actual_reposition_distance_unit; actual_reposition_distance_basis; actual_reposition_distance_method; actual_reposition_distance_state; actual_reposition_distance_sample_time; actual_reposition_distance_source; actual_reposition_distance_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | Join actual coach consist/time/location and split/join records to movement/traction-provider delivery and energy scope. Partition on each real formation/consumer/state change; build separate accommodation and passenger-transport ownership of each shared physical duty. Measure driver appropriate to that duty (metered auxiliary energy, actual moved mass-distance, physical space-time or evidenced service use) without default precedence between unlike duties; justify actual causal choice and compare credible alternatives. Complete missing supplier stages with actual exclusive resource/asset/receiver records before combining. Aggregation: Use rail_partition and provider_gate; closure of every actual duty across all consumers/owners; no fare ratio, full-train duplication, berth=seat or blanket zero | Actual supported operation unit; native km; time; mass; energy; Count only actual defined operation | Every train/coach-segment/state change/provider delivery and close | Actual operated, empty/depot, stabled, failed and reporting/lifecycle periods | Actual formation segments plus real traction/depot/rail/station providers | per reference flow | Actual consist/movement/meter/provider native records; driver units and sensitivity; all-user and covered-stage reconciliation |
| cp_energy | sleeping_compartment_service | uncovered electricity/thermal/fuel | meter and fuel-stock operating ledger | energy_source; carrier_grade; supply_location_voltage; meter_id; actual_interval; reset_export_import; power_interval; thermal_delivery_state; equipment_duty; provider_exclusion; register_start; register_start_unit; register_start_basis; register_start_method; register_start_state; register_start_sample_time; register_start_source; register_start_uncertainty; register_end; register_end_unit; register_end_basis; register_end_method; register_end_state; register_end_sample_time; register_end_source; register_end_uncertainty; actual_average_power; actual_average_power_unit; actual_average_power_basis; actual_average_power_method; actual_average_power_state; actual_average_power_sample_time; actual_average_power_source; actual_average_power_uncertainty; actual_elapsed_time; actual_elapsed_time_unit; actual_elapsed_time_basis; actual_elapsed_time_method; actual_elapsed_time_state; actual_elapsed_time_sample_time; actual_elapsed_time_source; actual_elapsed_time_uncertainty; actual_thermal_quantity; actual_thermal_quantity_unit; actual_thermal_quantity_basis; actual_thermal_quantity_method; actual_thermal_quantity_state; actual_thermal_quantity_sample_time; actual_thermal_quantity_source; actual_thermal_quantity_uncertainty; actual_supply_temperature; actual_supply_temperature_unit; actual_supply_temperature_basis; actual_supply_temperature_method; actual_supply_temperature_state; actual_supply_temperature_sample_time; actual_supply_temperature_source; actual_supply_temperature_uncertainty; actual_return_temperature; actual_return_temperature_unit; actual_return_temperature_basis; actual_return_temperature_method; actual_return_temperature_state; actual_return_temperature_sample_time; actual_return_temperature_source; actual_return_temperature_uncertainty; actual_supply_enthalpy; actual_supply_enthalpy_unit; actual_supply_enthalpy_basis; actual_supply_enthalpy_method; actual_supply_enthalpy_state; actual_supply_enthalpy_sample_time; actual_supply_enthalpy_source; actual_supply_enthalpy_uncertainty; actual_return_enthalpy; actual_return_enthalpy_unit; actual_return_enthalpy_basis; actual_return_enthalpy_method; actual_return_enthalpy_state; actual_return_enthalpy_sample_time; actual_return_enthalpy_source; actual_return_enthalpy_uncertainty; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_opening_uncertainty; fuel_receipts_tare_only; fuel_receipts_tare_only_unit; fuel_receipts_tare_only_basis; fuel_receipts_tare_only_method; fuel_receipts_tare_only_state; fuel_receipts_tare_only_sample_time; fuel_receipts_tare_only_source; fuel_receipts_tare_only_uncertainty; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; fuel_closing_uncertainty; fuel_actual_burn; fuel_actual_burn_unit; fuel_actual_burn_basis; fuel_actual_burn_method; fuel_actual_burn_state; fuel_actual_burn_sample_time; fuel_actual_burn_source; fuel_actual_burn_uncertainty; actual_native_density; actual_native_density_unit; actual_native_density_basis; actual_native_density_method; actual_native_density_state; actual_native_density_sample_time; actual_native_density_source; actual_native_density_uncertainty; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_uncertainty; calorific_factor; calorific_factor_unit; calorific_factor_basis; calorific_factor_method; calorific_factor_state; calorific_factor_sample_time; calorific_factor_source; calorific_factor_uncertainty; actual_unit_conversion; actual_unit_conversion_unit; actual_unit_conversion_basis; actual_unit_conversion_method; actual_unit_conversion_state; actual_unit_conversion_sample_time; actual_unit_conversion_source; actual_unit_conversion_uncertainty; actual_target_driver; actual_target_driver_unit; actual_target_driver_basis; actual_target_driver_method; actual_target_driver_state; actual_target_driver_sample_time; actual_target_driver_source; actual_target_driver_uncertainty; actual_alluser_driver; actual_alluser_driver_unit; actual_alluser_driver_basis; actual_alluser_driver_method; actual_alluser_driver_state; actual_alluser_driver_sample_time; actual_alluser_driver_source; actual_alluser_driver_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use traceable aligned meter differences; if interval-average power is actually supported multiply by that SAME interval duration once and dimensionally convert. Never integrate kWh again. Reconcile actual thermal delivery and fuel stocks/burn; carrier purchases are not emissions. Separate traction/auxiliary/depot supply and provider-covered duties using cp_rail. Aggregation: Sum compatible duty quantities with actual record-specific target shares under rail_partition/normalize_once; incompatible carrier/state/time separate | kWh; MJ; kg; actual native measures/conversions | Each meter interval/refill/burn or actual delivery event | Aligned actual operating/shore/depot/readiness intervals and close | Actual responsible compartments/coaches/common/depot duties | per reference flow | Meter calibration/readout coverage; stock and native conversion source; actual provider overlap review |
| cp_water | sleeping_compartment_service | water supply/stock/receiver/environment | source-tank-fate ledger | source_id; source_type; tank_id; meter_id; fill_transfer_id; paired_receiver_transfer_id; internal_or_external_role; actual_stock_membership_id; terminal_fate_role; retained_moisture_closing_membership; enduse; contained_transfer_id; outfall_location_medium; pollutant_sample_link; provider_exclusion; source_supplied_quantity; source_supplied_quantity_unit; source_supplied_quantity_basis; source_supplied_quantity_method; source_supplied_quantity_state; source_supplied_quantity_sample_time; source_supplied_quantity_source; source_supplied_quantity_uncertainty; actual_direct_abstraction; actual_direct_abstraction_unit; actual_direct_abstraction_basis; actual_direct_abstraction_method; actual_direct_abstraction_state; actual_direct_abstraction_sample_time; actual_direct_abstraction_source; actual_direct_abstraction_uncertainty; tank_opening; tank_opening_unit; tank_opening_basis; tank_opening_method; tank_opening_state; tank_opening_sample_time; tank_opening_source; tank_opening_uncertainty; tank_closing; tank_closing_unit; tank_closing_basis; tank_closing_method; tank_closing_state; tank_closing_sample_time; tank_closing_source; tank_closing_uncertainty; fill_quantity; fill_quantity_unit; fill_quantity_basis; fill_quantity_method; fill_quantity_state; fill_quantity_sample_time; fill_quantity_source; fill_quantity_uncertainty; actual_enduse_quantity; actual_enduse_quantity_unit; actual_enduse_quantity_basis; actual_enduse_quantity_method; actual_enduse_quantity_state; actual_enduse_quantity_sample_time; actual_enduse_quantity_source; actual_enduse_quantity_uncertainty; cleaning_solution_water; cleaning_solution_water_unit; cleaning_solution_water_basis; cleaning_solution_water_method; cleaning_solution_water_state; cleaning_solution_water_sample_time; cleaning_solution_water_source; cleaning_solution_water_uncertainty; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_sample_time; retained_moisture_source; retained_moisture_uncertainty; actual_density; actual_density_unit; actual_density_basis; actual_density_method; actual_density_state; actual_density_sample_time; actual_density_source; actual_density_uncertainty; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_uncertainty; actual_evaporation; actual_evaporation_unit; actual_evaporation_basis; actual_evaporation_method; actual_evaporation_state; actual_evaporation_sample_time; actual_evaporation_source; actual_evaporation_uncertainty; contained_transfer_quantity; contained_transfer_quantity_unit; contained_transfer_quantity_basis; contained_transfer_quantity_method; contained_transfer_quantity_state; contained_transfer_quantity_sample_time; contained_transfer_quantity_source; contained_transfer_quantity_uncertainty; receiver_quantity; receiver_quantity_unit; receiver_quantity_basis; receiver_quantity_method; receiver_quantity_state; receiver_quantity_sample_time; receiver_quantity_source; receiver_quantity_uncertainty; direct_outfall_quantity; direct_outfall_quantity_unit; direct_outfall_quantity_basis; direct_outfall_quantity_method; direct_outfall_quantity_state; direct_outfall_quantity_sample_time; direct_outfall_quantity_source; direct_outfall_quantity_uncertainty; stored_carry_quantity; stored_carry_quantity_unit; stored_carry_quantity_basis; stored_carry_quantity_method; stored_carry_quantity_state; stored_carry_quantity_sample_time; stored_carry_quantity_source; stored_carry_quantity_uncertainty; actual_target_driver; actual_target_driver_unit; actual_target_driver_basis; actual_target_driver_method; actual_target_driver_state; actual_target_driver_sample_time; actual_target_driver_source; actual_target_driver_uncertainty; actual_alluser_driver; actual_alluser_driver_unit; actual_alluser_driver_basis; actual_alluser_driver_method; actual_alluser_driver_state; actual_alluser_driver_sample_time; actual_alluser_driver_source; actual_alluser_driver_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual source/tank fills and opening/closing/receiver handoffs at compatible physical state and intervals. Link each actual enduse/event and measured/modelled environmental fate. Independently measure actual emissions/outfalls; unexplained residual stays unresolved. For SAME declared boundary/interval add only mutually exclusive external terminal exits plus closing stocks. Enduse is an internal intermediate view, source-to-tank fill is one paired internal transfer when within this boundary, and contained handover versus same receiver acceptance is one paired quantity, never two exits. Retained moisture already inside closing material/water stocks is not added again. Preserve unique transfer/stock-membership roles and unknown actual fate before shared-user attribution. Aggregation: Apply water_fates and rail_partition/normalize_once; actual genuine mixture constituents are nonadditive; provider treatment counted once | m3; kg; native density/temperature/time and sample units | Each fill/empty/meter/enduse/outfall event and closing stock | Actual tank/enduse/receiver intervals plus stored cross-period carry | Actual source/coach/depot/common system and receiver/outfall | per reference flow | Actual tank/source/meter/receiver evidence, sample timing/state and fate closure; unresolved residual disclosure |
| cp_stock | sleeping_compartment_service | supplies/cleaners/parts and unused returns | material-specific physical stock ledger | SKU_material_formulation; supplier_source; lot; condition_unused_used; external_receipt_id; actual_outbound_unused_return_id; same_source_state_match; consumed_input_choice; used_recovery_id; transfer_id; EACH_TOTAL; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_sample_time; opening_stock_source; opening_stock_uncertainty; actual_external_receipt_tare_only; actual_external_receipt_tare_only_unit; actual_external_receipt_tare_only_basis; actual_external_receipt_tare_only_method; actual_external_receipt_tare_only_state; actual_external_receipt_tare_only_sample_time; actual_external_receipt_tare_only_source; actual_external_receipt_tare_only_uncertainty; actual_packaging_tare; actual_packaging_tare_unit; actual_packaging_tare_basis; actual_packaging_tare_method; actual_packaging_tare_state; actual_packaging_tare_sample_time; actual_packaging_tare_source; actual_packaging_tare_uncertainty; actual_unused_outbound_return; actual_unused_outbound_return_unit; actual_unused_outbound_return_basis; actual_unused_outbound_return_method; actual_unused_outbound_return_state; actual_unused_outbound_return_sample_time; actual_unused_outbound_return_source; actual_unused_outbound_return_uncertainty; actual_internal_in; actual_internal_in_unit; actual_internal_in_basis; actual_internal_in_method; actual_internal_in_state; actual_internal_in_sample_time; actual_internal_in_source; actual_internal_in_uncertainty; actual_internal_out; actual_internal_out_unit; actual_internal_out_basis; actual_internal_out_method; actual_internal_out_state; actual_internal_out_sample_time; actual_internal_out_source; actual_internal_out_uncertainty; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_sample_time; closing_stock_source; closing_stock_uncertainty; gross_drawn_supply_S; gross_drawn_supply_S_unit; gross_drawn_supply_S_basis; gross_drawn_supply_S_method; gross_drawn_supply_S_state; gross_drawn_supply_S_sample_time; gross_drawn_supply_S_source; gross_drawn_supply_S_uncertainty; consumed_input_quantity; consumed_input_quantity_unit; consumed_input_quantity_basis; consumed_input_quantity_method; consumed_input_quantity_state; consumed_input_quantity_sample_time; consumed_input_quantity_source; consumed_input_quantity_uncertainty; used_recovery_quantity; used_recovery_quantity_unit; used_recovery_quantity_basis; used_recovery_quantity_method; used_recovery_quantity_state; used_recovery_quantity_sample_time; used_recovery_quantity_source; used_recovery_quantity_uncertainty; actual_issue_use; actual_issue_use_unit; actual_issue_use_basis; actual_issue_use_method; actual_issue_use_state; actual_issue_use_sample_time; actual_issue_use_source; actual_issue_use_uncertainty; prepared_solution_quantity; prepared_solution_quantity_unit; prepared_solution_quantity_basis; prepared_solution_quantity_method; prepared_solution_quantity_state; prepared_solution_quantity_sample_time; prepared_solution_quantity_source; prepared_solution_quantity_uncertainty; dilution_water; dilution_water_unit; dilution_water_basis; dilution_water_method; dilution_water_state; dilution_water_sample_time; dilution_water_source; dilution_water_uncertainty; active_fraction; active_fraction_unit; active_fraction_basis; active_fraction_method; active_fraction_state; active_fraction_sample_time; active_fraction_source; active_fraction_uncertainty; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_sample_time; actual_count_source; actual_count_uncertainty; actual_unit_mass; actual_unit_mass_unit; actual_unit_mass_basis; actual_unit_mass_method; actual_unit_mass_state; actual_unit_mass_sample_time; actual_unit_mass_source; actual_unit_mass_uncertainty; actual_repeat_count; actual_repeat_count_unit; actual_repeat_count_basis; actual_repeat_count_method; actual_repeat_count_state; actual_repeat_count_sample_time; actual_repeat_count_source; actual_repeat_count_uncertainty; actual_density; actual_density_unit; actual_density_basis; actual_density_method; actual_density_state; actual_density_sample_time; actual_density_source; actual_density_uncertainty; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_uncertainty; responsibility_transfer_quantity; responsibility_transfer_quantity_unit; responsibility_transfer_quantity_basis; responsibility_transfer_quantity_method; responsibility_transfer_quantity_state; responsibility_transfer_quantity_sample_time; responsibility_transfer_quantity_source; responsibility_transfer_quantity_uncertainty; prior_burden_carry_quantity; prior_burden_carry_quantity_unit; prior_burden_carry_quantity_basis; prior_burden_carry_quantity_method; prior_burden_carry_quantity_state; prior_burden_carry_quantity_sample_time; prior_burden_carry_quantity_source; prior_burden_carry_quantity_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Count/weigh actual receipts and stocks at stated physical state; receipt NET means net of packaging tare only and is not already net of unused or used outbound returns. Pair same-source/identity/state UNUSED returns. Reconcile same-scope opening/inbound/closing and actual responsibility transfers to gross drawn supply S under stock_balance; choose S input plus separate matched unused output OR consumed (S minus matched unused) input with return output OMITTED. Keep used/recovered fates and prior burden independent; record actual solution preparation and components nonadditively. Aggregation: Apply stock_exclusive then actual duty attribution/normalize_once; no new purchase for internal transfer, no negative loss residual or used-return virgin credit | kg; Item(s); native concentration/volume/density as applicable | Each receipt/issue/unused return/use/recovery/stock close | Actual lot/event/reporting and retained-stock carry | Actual supplies/maintenance/cleaning duties and actual suppliers/receivers | per reference flow | Actual weights/counts/SKU/native conversions, same-source-state receipt-return evidence and explicit gross/consumed representation |
| cp_providers | sleeping_compartment_service | completed coach/depot/support service | physical delivery and covered-duty matrix | provider_id; operation_id; accepted_delivery; actual_counted_operation_definition; native_service_unit; covered_duty_stage_ids; asset_equipment_energy_material_water_effluent_freight_life_scope; actual_otherusers; direct_stage_exclusion; completed_missing_stage_record; source_dataset_link; region_technology_period; provider_native_quantity; provider_native_quantity_unit; provider_native_quantity_basis; provider_native_quantity_method; provider_native_quantity_state; provider_native_quantity_sample_time; provider_native_quantity_source; provider_native_quantity_uncertainty; actual_counted_operation_quantity; actual_counted_operation_quantity_unit; actual_counted_operation_quantity_basis; actual_counted_operation_quantity_method; actual_counted_operation_quantity_state; actual_counted_operation_quantity_sample_time; actual_counted_operation_quantity_source; actual_counted_operation_quantity_uncertainty; covered_stage_burden; covered_stage_burden_unit; covered_stage_burden_basis; covered_stage_burden_method; covered_stage_burden_state; covered_stage_burden_sample_time; covered_stage_burden_source; covered_stage_burden_uncertainty; actual_completed_missing_stage_quantity; actual_completed_missing_stage_quantity_unit; actual_completed_missing_stage_quantity_basis; actual_completed_missing_stage_quantity_method; actual_completed_missing_stage_quantity_state; actual_completed_missing_stage_quantity_sample_time; actual_completed_missing_stage_quantity_source; actual_completed_missing_stage_quantity_uncertainty; actual_target_driver; actual_target_driver_unit; actual_target_driver_basis; actual_target_driver_method; actual_target_driver_state; actual_target_driver_sample_time; actual_target_driver_source; actual_target_driver_uncertainty; actual_alluser_driver; actual_alluser_driver_unit; actual_alluser_driver_basis; actual_alluser_driver_method; actual_alluser_driver_state; actual_alluser_driver_sample_time; actual_alluser_driver_source; actual_alluser_driver_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | Read actual service acceptance and physical scope, not invoice value alone. Match each stage/operation/asset/segment/time to provider dataset and own duty records; validate actual quantity and native service basis. Integrate each uncovered actual stage once with completed native evidence and explicit direct exclusions. Count only actual defined physical operation; another native deliverable needs reviewed dimensional exchange. Aggregation: Use provider_gate; disjoint covered provider OR completed exclusive missing underlying stages; no planned placeholder as completion | Item(s) only actual counted service; actual native provider unit | Each accepted operation/provider dataset or scope change | Actual operation/coverage interval and asset/provider life | Actual coach/depot/common/guest support operation and complete supplier chain | per reference flow | Actual accepted service; detailed provider stage coverage and linked completed supplements/anti-overlap evidence |
| cp_linen | sleeping_compartment_service | actual completed linen care | linen cohort-stock-and-care batch ledger | item_cohort_material_construction; piece_id; EACH_TOTAL; dry_method; moisture_state; batch_id; rewash_event; native_service_basis; actual_provider_stage_scope; rental_manufacture_scope; receiver_effluent; transfer_id; actual_piece_count; actual_piece_count_unit; actual_piece_count_basis; actual_piece_count_method; actual_piece_count_state; actual_piece_count_sample_time; actual_piece_count_source; actual_piece_count_uncertainty; actual_unit_dry_mass; actual_unit_dry_mass_unit; actual_unit_dry_mass_basis; actual_unit_dry_mass_method; actual_unit_dry_mass_state; actual_unit_dry_mass_sample_time; actual_unit_dry_mass_source; actual_unit_dry_mass_uncertainty; actual_moisture; actual_moisture_unit; actual_moisture_basis; actual_moisture_method; actual_moisture_state; actual_moisture_sample_time; actual_moisture_source; actual_moisture_uncertainty; clean_opening; clean_opening_unit; clean_opening_basis; clean_opening_method; clean_opening_state; clean_opening_sample_time; clean_opening_source; clean_opening_uncertainty; clean_closing; clean_closing_unit; clean_closing_basis; clean_closing_method; clean_closing_state; clean_closing_sample_time; clean_closing_source; clean_closing_uncertainty; soiled_opening; soiled_opening_unit; soiled_opening_basis; soiled_opening_method; soiled_opening_state; soiled_opening_sample_time; soiled_opening_source; soiled_opening_uncertainty; soiled_closing; soiled_closing_unit; soiled_closing_basis; soiled_closing_method; soiled_closing_state; soiled_closing_sample_time; soiled_closing_source; soiled_closing_uncertainty; inwash_opening; inwash_opening_unit; inwash_opening_basis; inwash_opening_method; inwash_opening_state; inwash_opening_sample_time; inwash_opening_source; inwash_opening_uncertainty; inwash_closing; inwash_closing_unit; inwash_closing_basis; inwash_closing_method; inwash_closing_state; inwash_closing_sample_time; inwash_closing_source; inwash_closing_uncertainty; held_opening; held_opening_unit; held_opening_basis; held_opening_method; held_opening_state; held_opening_sample_time; held_opening_source; held_opening_uncertainty; held_closing; held_closing_unit; held_closing_basis; held_closing_method; held_closing_state; held_closing_sample_time; held_closing_source; held_closing_uncertainty; returned_quantity; returned_quantity_unit; returned_quantity_basis; returned_quantity_method; returned_quantity_state; returned_quantity_sample_time; returned_quantity_source; returned_quantity_uncertainty; rejected_quantity; rejected_quantity_unit; rejected_quantity_basis; rejected_quantity_method; rejected_quantity_state; rejected_quantity_sample_time; rejected_quantity_source; rejected_quantity_uncertainty; actual_completed_dry_mass; actual_completed_dry_mass_unit; actual_completed_dry_mass_basis; actual_completed_dry_mass_method; actual_completed_dry_mass_state; actual_completed_dry_mass_sample_time; actual_completed_dry_mass_source; actual_completed_dry_mass_uncertainty; actual_completed_washes; actual_completed_washes_unit; actual_completed_washes_basis; actual_completed_washes_method; actual_completed_washes_state; actual_completed_washes_sample_time; actual_completed_washes_source; actual_completed_washes_uncertainty; actual_rewash_count; actual_rewash_count_unit; actual_rewash_count_basis; actual_rewash_count_method; actual_rewash_count_state; actual_rewash_count_sample_time; actual_rewash_count_source; actual_rewash_count_uncertainty; actual_provider_native_quantity; actual_provider_native_quantity_unit; actual_provider_native_quantity_basis; actual_provider_native_quantity_method; actual_provider_native_quantity_state; actual_provider_native_quantity_sample_time; actual_provider_native_quantity_source; actual_provider_native_quantity_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | Reconcile actual linen IDs/cohorts and clean/soiled/in-care stocks with completed care and rewash events. Establish actual dry-textile mass/method for kg service, not wet gross or material purity. Check wash/dry/finish/water/chemicals/energy/effluent/equipment/transport/rental life coverage and supplement actual uncovered stages once. Aggregation: Sum actual completed care on compatible basis and attribute to true users; textile manufacture is separate full-life share, rewash is not new textile | kg dry textile or actual contracted native basis with evidenced conversion; actual pieces | Each actual textile transfer/care batch/rewash and stock close | Actual completed batches, reporting and full textile-life phases | Actual accommodation linen and actual external/central care provider | per reference flow | Actual batch/care acceptance, dry basis and compatible moisture evidence, stock reconciliation and supplier coverage |
| cp_assets | sleeping_compartment_service | rollingstock/fixedrail/fitout/textile full life | asset-cohort-stage-and-all-user-life ledger | asset_id; serial_cohort; actual_unit_material_configuration; manufacture_install_stage; maintenance_replacement_events; useful_repair_redeploy; actual_retirement_EOLevent; stage_owner; covered_provider_dataset; uncovered_stage_record; uncertainty_sensitivity; actual_asset_count; actual_asset_count_unit; actual_asset_count_basis; actual_asset_count_method; actual_asset_count_state; actual_asset_count_sample_time; actual_asset_count_source; actual_asset_count_uncertainty; actual_material_dry_mass; actual_material_dry_mass_unit; actual_material_dry_mass_basis; actual_material_dry_mass_method; actual_material_dry_mass_state; actual_material_dry_mass_sample_time; actual_material_dry_mass_source; actual_material_dry_mass_uncertainty; actual_stage_burden; actual_stage_burden_unit; actual_stage_burden_basis; actual_stage_burden_method; actual_stage_burden_state; actual_stage_burden_sample_time; actual_stage_burden_source; actual_stage_burden_uncertainty; observed_alluser_history; observed_alluser_history_unit; observed_alluser_history_basis; observed_alluser_history_method; observed_alluser_history_state; observed_alluser_history_sample_time; observed_alluser_history_source; observed_alluser_history_uncertainty; sourced_remaining_equivalent_service; sourced_remaining_equivalent_service_unit; sourced_remaining_equivalent_service_basis; sourced_remaining_equivalent_service_method; sourced_remaining_equivalent_service_state; sourced_remaining_equivalent_service_sample_time; sourced_remaining_equivalent_service_source; sourced_remaining_equivalent_service_uncertainty; actual_terminated_total; actual_terminated_total_unit; actual_terminated_total_basis; actual_terminated_total_method; actual_terminated_total_state; actual_terminated_total_sample_time; actual_terminated_total_source; actual_terminated_total_uncertainty; target_life_driver; target_life_driver_unit; target_life_driver_basis; target_life_driver_method; target_life_driver_state; target_life_driver_sample_time; target_life_driver_source; target_life_driver_uncertainty; alluser_life_driver; alluser_life_driver_unit; alluser_life_driver_basis; alluser_life_driver_method; alluser_life_driver_state; alluser_life_driver_sample_time; alluser_life_driver_source; alluser_life_driver_uncertainty; actual_equivalence_factor; actual_equivalence_factor_unit; actual_equivalence_factor_basis; actual_equivalence_factor_method; actual_equivalence_factor_state; actual_equivalence_factor_sample_time; actual_equivalence_factor_source; actual_equivalence_factor_uncertainty; actual_idle_driver; actual_idle_driver_unit; actual_idle_driver_basis; actual_idle_driver_method; actual_idle_driver_state; actual_idle_driver_sample_time; actual_idle_driver_source; actual_idle_driver_uncertainty; actual_replacement_quantity; actual_replacement_quantity_unit; actual_replacement_quantity_basis; actual_replacement_quantity_method; actual_replacement_quantity_state; actual_replacement_quantity_sample_time; actual_replacement_quantity_source; actual_replacement_quantity_uncertainty; actual_retirement_mass; actual_retirement_mass_unit; actual_retirement_mass_basis; actual_retirement_mass_method; actual_retirement_mass_state; actual_retirement_mass_sample_time; actual_retirement_mass_source; actual_retirement_mass_uncertainty; prior_burden_carry_quantity; prior_burden_carry_quantity_unit; prior_burden_carry_quantity_basis; prior_burden_carry_quantity_method; prior_burden_carry_quantity_state; prior_burden_carry_quantity_sample_time; prior_burden_carry_quantity_source; prior_burden_carry_quantity_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | Inventory actual relevant assets and complete physical life stages. Read provider and asset coverage by stage; actually integrate missing native manufacture/maintenance/replacement/EOL once. Establish observed all-user lifetime usage plus sourced remaining equivalent service with uncertainty/update, OR actual terminated total; record each operand independently. Native calendar/space-time allocation includes actual idle numerator as well as full denominator. Trace textile/part replacement and actual receiver fates without duplicate lifecycle purchase. Aggregation: Use asset_life and provider_gate then normalize_once; annual targetN is not lifetime; complete full-life closure across all users/periods | Item(s) actual asset unit; kg actual dry material; native service-time/distance/driver units | Each asset/stage/use/repair/replacement/retirement and evidence update | Full manufacture-install-use-maintain-replace-retire life across all users and relevant reporting phases | Actual locomotives/coaches/fitout/equipment/textiles and relevant rail/station/depot systems | per reference flow | Actual inventory, stage datasets, observed history and sourced remaining-life assumptions/sensitivity, full owner and receiver closure |
| cp_package | sleeping_compartment_service | actual included food/ancillary scope | service-version provision-stage ledger | journey_service_version; actual_included_food_support; provision_event; actual_acceptance_decline; independent_purchase_flag; food_prepared_state; real_provider_or_direct_route; actual_ingredients_upstream_preparation_holding_serving_dishes; waste_assets_freight_coverage; completed_missing_stage_ids; otherconsumer_driver; actual_native_provision_quantity; actual_native_provision_quantity_unit; actual_native_provision_quantity_basis; actual_native_provision_quantity_method; actual_native_provision_quantity_state; actual_native_provision_quantity_sample_time; actual_native_provision_quantity_source; actual_native_provision_quantity_uncertainty; actual_accepted_provision_count; actual_accepted_provision_count_unit; actual_accepted_provision_count_basis; actual_accepted_provision_count_method; actual_accepted_provision_count_state; actual_accepted_provision_count_sample_time; actual_accepted_provision_count_source; actual_accepted_provision_count_uncertainty; actual_declined_provision_count; actual_declined_provision_count_unit; actual_declined_provision_count_basis; actual_declined_provision_count_method; actual_declined_provision_count_state; actual_declined_provision_count_sample_time; actual_declined_provision_count_source; actual_declined_provision_count_uncertainty; actual_food_mass; actual_food_mass_unit; actual_food_mass_basis; actual_food_mass_method; actual_food_mass_state; actual_food_mass_sample_time; actual_food_mass_source; actual_food_mass_uncertainty; actual_ingredient_mass; actual_ingredient_mass_unit; actual_ingredient_mass_basis; actual_ingredient_mass_method; actual_ingredient_mass_state; actual_ingredient_mass_sample_time; actual_ingredient_mass_source; actual_ingredient_mass_uncertainty; actual_preparation_resource_quantity; actual_preparation_resource_quantity_unit; actual_preparation_resource_quantity_basis; actual_preparation_resource_quantity_method; actual_preparation_resource_quantity_state; actual_preparation_resource_quantity_sample_time; actual_preparation_resource_quantity_source; actual_preparation_resource_quantity_uncertainty; actual_discard_mass; actual_discard_mass_unit; actual_discard_mass_basis; actual_discard_mass_method; actual_discard_mass_state; actual_discard_mass_sample_time; actual_discard_mass_source; actual_discard_mass_uncertainty; actual_completed_missing_stage_quantity; actual_completed_missing_stage_quantity_unit; actual_completed_missing_stage_quantity_basis; actual_completed_missing_stage_quantity_method; actual_completed_missing_stage_quantity_state; actual_completed_missing_stage_quantity_sample_time; actual_completed_missing_stage_quantity_source; actual_completed_missing_stage_quantity_uncertainty; actual_target_driver; actual_target_driver_unit; actual_target_driver_basis; actual_target_driver_method; actual_target_driver_state; actual_target_driver_sample_time; actual_target_driver_source; actual_target_driver_uncertainty; actual_alluser_driver; actual_alluser_driver_unit; actual_alluser_driver_basis; actual_alluser_driver_method; actual_alluser_driver_state; actual_alluser_driver_sample_time; actual_alluser_driver_source; actual_alluser_driver_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | Compare actual package and actual supplied food/support records with provider operation and physical stage evidence. Declining actually provided food is distinct from no provision. Include real upstream ingredients/losses/preparation/operation/dishes/waste/assets/transport. Actual uncovered independent food production requires reviewed route/module expansion; a meal label or future plan does not fill it. Aggregation: Use included_package and provider_gate; separate optional purchases and complete actual shared duty attribution; no nominal meal/guest multiplier | Item(s) actual defined provision operation; actual native food/service quantities | Each package/version/provision/partial/independent purchase and supplier scope change | Actual journey provision/food batches and complete provider/asset life | Actual compartment package and actual providers/common dining users | per reference flow | Actual provision/acceptance and independent output evidence; completed physical source/provider/receiver scope matrix |
| cp_refrigerant | sleeping_compartment_service | standalone supply/installed charge/recovery/air fate | substance-and-equipment stock event ledger | substance_blend_components; cylinder_id; equipment_id; factory_charge_owner; event_id; source_method; uncertainty; provider_exclusion; standalone_opening; standalone_opening_unit; standalone_opening_basis; standalone_opening_method; standalone_opening_state; standalone_opening_sample_time; standalone_opening_source; standalone_opening_uncertainty; standalone_closing; standalone_closing_unit; standalone_closing_basis; standalone_closing_method; standalone_closing_state; standalone_closing_sample_time; standalone_closing_source; standalone_closing_uncertainty; installed_opening; installed_opening_unit; installed_opening_basis; installed_opening_method; installed_opening_state; installed_opening_sample_time; installed_opening_source; installed_opening_uncertainty; installed_closing; installed_closing_unit; installed_closing_basis; installed_closing_method; installed_closing_state; installed_closing_sample_time; installed_closing_source; installed_closing_uncertainty; recovered_opening; recovered_opening_unit; recovered_opening_basis; recovered_opening_method; recovered_opening_state; recovered_opening_sample_time; recovered_opening_source; recovered_opening_uncertainty; recovered_closing; recovered_closing_unit; recovered_closing_basis; recovered_closing_method; recovered_closing_state; recovered_closing_sample_time; recovered_closing_source; recovered_closing_uncertainty; new_factory_charge_entry; new_factory_charge_entry_unit; new_factory_charge_entry_basis; new_factory_charge_entry_method; new_factory_charge_entry_state; new_factory_charge_entry_sample_time; new_factory_charge_entry_source; new_factory_charge_entry_uncertainty; standalone_external_receipts_tare_only; standalone_external_receipts_tare_only_unit; standalone_external_receipts_tare_only_basis; standalone_external_receipts_tare_only_method; standalone_external_receipts_tare_only_state; standalone_external_receipts_tare_only_sample_time; standalone_external_receipts_tare_only_source; standalone_external_receipts_tare_only_uncertainty; other_external_receipts; other_external_receipts_unit; other_external_receipts_basis; other_external_receipts_method; other_external_receipts_state; other_external_receipts_sample_time; other_external_receipts_source; other_external_receipts_uncertainty; unused_same_source_state_returns; unused_same_source_state_returns_unit; unused_same_source_state_returns_basis; unused_same_source_state_returns_method; unused_same_source_state_returns_state; unused_same_source_state_returns_sample_time; unused_same_source_state_returns_source; unused_same_source_state_returns_uncertainty; useful_used_export; useful_used_export_unit; useful_used_export_basis; useful_used_export_method; useful_used_export_state; useful_used_export_sample_time; useful_used_export_source; useful_used_export_uncertainty; contained_waste_quantity; contained_waste_quantity_unit; contained_waste_quantity_basis; contained_waste_quantity_method; contained_waste_quantity_state; contained_waste_quantity_sample_time; contained_waste_quantity_source; contained_waste_quantity_uncertainty; whole_equipment_retained_exit_charge; whole_equipment_retained_exit_charge_unit; whole_equipment_retained_exit_charge_basis; whole_equipment_retained_exit_charge_method; whole_equipment_retained_exit_charge_state; whole_equipment_retained_exit_charge_sample_time; whole_equipment_retained_exit_charge_source; whole_equipment_retained_exit_charge_uncertainty; actual_installed_addition; actual_installed_addition_unit; actual_installed_addition_basis; actual_installed_addition_method; actual_installed_addition_state; actual_installed_addition_sample_time; actual_installed_addition_source; actual_installed_addition_uncertainty; actual_internal_recovery_transfer; actual_internal_recovery_transfer_unit; actual_internal_recovery_transfer_basis; actual_internal_recovery_transfer_method; actual_internal_recovery_transfer_state; actual_internal_recovery_transfer_sample_time; actual_internal_recovery_transfer_source; actual_internal_recovery_transfer_uncertainty; actual_independently_evidenced_air_release; actual_independently_evidenced_air_release_unit; actual_independently_evidenced_air_release_basis; actual_independently_evidenced_air_release_method; actual_independently_evidenced_air_release_state; actual_independently_evidenced_air_release_sample_time; actual_independently_evidenced_air_release_source; actual_independently_evidenced_air_release_uncertainty; other_identified_external_fates; other_identified_external_fates_unit; other_identified_external_fates_basis; other_identified_external_fates_method; other_identified_external_fates_state; other_identified_external_fates_sample_time; other_identified_external_fates_source; other_identified_external_fates_uncertainty; unresolved_difference; unresolved_difference_unit; unresolved_difference_basis; unresolved_difference_method; unresolved_difference_state; unresolved_difference_sample_time; unresolved_difference_source; unresolved_difference_uncertainty; actual_component_fraction; actual_component_fraction_unit; actual_component_fraction_basis; actual_component_fraction_method; actual_component_fraction_state; actual_component_fraction_sample_time; actual_component_fraction_source; actual_component_fraction_uncertainty; actual_container_tare; actual_container_tare_unit; actual_container_tare_basis; actual_container_tare_method; actual_container_tare_state; actual_container_tare_sample_time; actual_container_tare_source; actual_container_tare_uncertainty; actual_density; actual_density_unit; actual_density_basis; actual_density_method; actual_density_state; actual_density_sample_time; actual_density_source; actual_density_uncertainty; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_uncertainty; gross_drawn_supply_S; gross_drawn_supply_S_unit; gross_drawn_supply_S_basis; gross_drawn_supply_S_method; gross_drawn_supply_S_state; gross_drawn_supply_S_sample_time; gross_drawn_supply_S_source; gross_drawn_supply_S_uncertainty; consumed_input_quantity; consumed_input_quantity_unit; consumed_input_quantity_basis; consumed_input_quantity_method; consumed_input_quantity_state; consumed_input_quantity_sample_time; consumed_input_quantity_source; consumed_input_quantity_uncertainty; prior_burden_carry_quantity; prior_burden_carry_quantity_unit; prior_burden_carry_quantity_basis; prior_burden_carry_quantity_method; prior_burden_carry_quantity_state; prior_burden_carry_quantity_sample_time; prior_burden_carry_quantity_source; prior_burden_carry_quantity_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | Weigh/read actual containers/equipment/service records by actual substance/state. Separate standalone supply, installed equipment and recovered stocks; recovered opening/closing is SEPARATE and excluded from standalone opening/closing. Record actual new entering-equipment factory charge ONLY if not in installed opening, actual other external receipts, whole-equipment retained-content exit, used useful export, contained waste and independently evidenced air or unresolved fate at their actual gate/time. Receipts exclude only container tare unless explicit consumed representation chosen. Apply stock_exclusive for matched unused returns; used recovery never reduces new input as unused. Resolve actual atmosphere/receiver/useful/stored fates; topup or residual alone cannot prove air loss. Aggregation: Use refrigerant_fates, stock_balance, stock_exclusive and provider_gate; consolidated compartment audit is nonadditive to manufacture/service exchanges and whole-equipment content. One species/stage owner; retained recovery/old source burden carries once, normalize actual assigned amounts once | kg; native container/equipment readings and density/state as needed | Each supply/charge/recovery/transfer/release and closing stock | Actual event/equipment/reporting and recovered-stock carry | Actual responsible HVAC/refrigeration equipment and service/receiver boundaries | per reference flow | Actual substance/component and stock/charge/receiver evidence, complete compatible mass balance or justified direct measurement/model |
| cp_freight | sleeping_compartment_service | uncovered actual cargo transport | load-leg membership ledger | shipment_id; leg_id; origin_destination; carrier; payload_basis; distance_method; EACH_TOTAL; actual_target_membership; source_time; provider_coverage; actual_carried_wet_goods_mass; actual_carried_wet_goods_mass_unit; actual_carried_wet_goods_mass_basis; actual_carried_wet_goods_mass_method; actual_carried_wet_goods_mass_state; actual_carried_wet_goods_mass_sample_time; actual_carried_wet_goods_mass_source; actual_carried_wet_goods_mass_uncertainty; actual_packaging_support_mass; actual_packaging_support_mass_unit; actual_packaging_support_mass_basis; actual_packaging_support_mass_method; actual_packaging_support_mass_state; actual_packaging_support_mass_sample_time; actual_packaging_support_mass_source; actual_packaging_support_mass_uncertainty; actual_vehicle_noncargo_tare; actual_vehicle_noncargo_tare_unit; actual_vehicle_noncargo_tare_basis; actual_vehicle_noncargo_tare_method; actual_vehicle_noncargo_tare_state; actual_vehicle_noncargo_tare_sample_time; actual_vehicle_noncargo_tare_source; actual_vehicle_noncargo_tare_uncertainty; actual_payload_mass; actual_payload_mass_unit; actual_payload_mass_basis; actual_payload_mass_method; actual_payload_mass_state; actual_payload_mass_sample_time; actual_payload_mass_source; actual_payload_mass_uncertainty; actual_distance; actual_distance_unit; actual_distance_basis; actual_distance_method; actual_distance_state; actual_distance_sample_time; actual_distance_source; actual_distance_uncertainty; actual_repeat_count; actual_repeat_count_unit; actual_repeat_count_basis; actual_repeat_count_method; actual_repeat_count_state; actual_repeat_count_sample_time; actual_repeat_count_source; actual_repeat_count_uncertainty; actual_record_target_share; actual_record_target_share_unit; actual_record_target_share_basis; actual_record_target_share_method; actual_record_target_share_state; actual_record_target_share_sample_time; actual_record_target_share_source; actual_record_target_share_uncertainty; actual_target_membership_quantity; actual_target_membership_quantity_unit; actual_target_membership_quantity_basis; actual_target_membership_quantity_method; actual_target_membership_quantity_state; actual_target_membership_quantity_sample_time; actual_target_membership_quantity_source; actual_target_membership_quantity_uncertainty | Read actual load/route/weighing records, retain carried wet material/water/packaging/supports and remove only actual noncargo tare. Deduplicate load-legs and reconcile repeats. Establish THAT-load target share and provider-covered transport before computing compatible mass-distance. Aggregation: Apply freight_sum: sum(actual_payload_k * actual_distance_k * actual_repeat_k * actual_target_share_k) / positive same-scopeN once; TOTAL repeat=1 only as representation identity; no repeat or share outside sum | kg*km; native mass and distance units | Each actual unique shipment-leg/load/state change | Actual shipment and relevant reporting/stock-carry interval | Actual suppliers/linen/depot/receiver cargo legs; not passenger transport | per reference flow | Actual route/load/mass/count scope and provider exclusions; every factor own native metadata |
| cp_fates | sleeping_compartment_service | actual useful/waste handoffs | stream-specific receiver ledger | origin_event; stream_id; material_species_components; condition_dry_wet; actual_mixture_boundary; component_nonadditive_view; useful_or_waste_gate; receiver_id; transfer_acceptance; actual_treatment_dataset; provider_covered_stage; stored_open_close; unresolved_fate; actual_stream_quantity; actual_stream_quantity_unit; actual_stream_quantity_basis; actual_stream_quantity_method; actual_stream_quantity_state; actual_stream_quantity_sample_time; actual_stream_quantity_source; actual_stream_quantity_uncertainty; actual_component_fraction; actual_component_fraction_unit; actual_component_fraction_basis; actual_component_fraction_method; actual_component_fraction_state; actual_component_fraction_sample_time; actual_component_fraction_source; actual_component_fraction_uncertainty; actual_native_unit_mass; actual_native_unit_mass_unit; actual_native_unit_mass_basis; actual_native_unit_mass_method; actual_native_unit_mass_state; actual_native_unit_mass_sample_time; actual_native_unit_mass_source; actual_native_unit_mass_uncertainty; actual_native_density; actual_native_density_unit; actual_native_density_basis; actual_native_density_method; actual_native_density_state; actual_native_density_sample_time; actual_native_density_source; actual_native_density_uncertainty; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_uncertainty; stored_opening; stored_opening_unit; stored_opening_basis; stored_opening_method; stored_opening_state; stored_opening_sample_time; stored_opening_source; stored_opening_uncertainty; stored_closing; stored_closing_unit; stored_closing_basis; stored_closing_method; stored_closing_state; stored_closing_sample_time; stored_closing_source; stored_closing_uncertainty; useful_handover_quantity; useful_handover_quantity_unit; useful_handover_quantity_basis; useful_handover_quantity_method; useful_handover_quantity_state; useful_handover_quantity_sample_time; useful_handover_quantity_source; useful_handover_quantity_uncertainty; waste_handover_quantity; waste_handover_quantity_unit; waste_handover_quantity_basis; waste_handover_quantity_method; waste_handover_quantity_state; waste_handover_quantity_sample_time; waste_handover_quantity_source; waste_handover_quantity_uncertainty; actual_receiver_treatment_quantity; actual_receiver_treatment_quantity_unit; actual_receiver_treatment_quantity_basis; actual_receiver_treatment_quantity_method; actual_receiver_treatment_quantity_state; actual_receiver_treatment_quantity_sample_time; actual_receiver_treatment_quantity_source; actual_receiver_treatment_quantity_uncertainty; prior_burden_carry_quantity; prior_burden_carry_quantity_unit; prior_burden_carry_quantity_basis; prior_burden_carry_quantity_method; prior_burden_carry_quantity_state; prior_burden_carry_quantity_sample_time; prior_burden_carry_quantity_source; prior_burden_carry_quantity_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Inspect actual material/state and acceptance at each boundary; split different substances/materials/receivers unless genuine single collected mixture is evidenced. Keep mixture total and component audits nonadditive. Link actual completed receiver treatment and upstream lost goods once, resolve held carry and useful used material without automatic virgin credit. Aggregation: Use stream_fates, provider_gate and normalize_once; no unexplained residual or recycling label as accepted fate | kg; actual native count/volume conversion as applicable | Each actual discard/recovery/transfer/receiver acceptance and close | Actual originating events, storage and receiver treatment phases | Actual package/coach/depot and real receivers | per reference flow | Actual weigh tickets/material evidence/receiver and treatment acceptance, component closure and prior burden links |
| cp_emissions | sleeping_compartment_service | actual direct species to actual media | source-species-medium event ledger | physical_source_duty; species_or_particle_size; reporting_basis; receiving_medium_compartment; factor_native_unit_scope_source; provider_coverage; uncertainty; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; actual_activity_uncertainty; actual_measured_amount; actual_measured_amount_unit; actual_measured_amount_basis; actual_measured_amount_method; actual_measured_amount_state; actual_measured_amount_sample_time; actual_measured_amount_source; actual_measured_amount_uncertainty; actual_concentration; actual_concentration_unit; actual_concentration_basis; actual_concentration_method; actual_concentration_state; actual_concentration_sample_time; actual_concentration_source; actual_concentration_uncertainty; actual_same_sample_flow; actual_same_sample_flow_unit; actual_same_sample_flow_basis; actual_same_sample_flow_method; actual_same_sample_flow_state; actual_same_sample_flow_sample_time; actual_same_sample_flow_source; actual_same_sample_flow_uncertainty; actual_factor_value; actual_factor_value_unit; actual_factor_value_basis; actual_factor_value_method; actual_factor_value_state; actual_factor_value_sample_time; actual_factor_value_source; actual_factor_value_uncertainty; actual_species_conversion; actual_species_conversion_unit; actual_species_conversion_basis; actual_species_conversion_method; actual_species_conversion_state; actual_species_conversion_sample_time; actual_species_conversion_source; actual_species_conversion_uncertainty; actual_contained_recovery; actual_contained_recovery_unit; actual_contained_recovery_basis; actual_contained_recovery_method; actual_contained_recovery_state; actual_contained_recovery_sample_time; actual_contained_recovery_source; actual_contained_recovery_uncertainty; actual_unit_conversion; actual_unit_conversion_unit; actual_unit_conversion_basis; actual_unit_conversion_method; actual_unit_conversion_state; actual_unit_conversion_sample_time; actual_unit_conversion_source; actual_unit_conversion_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure real direct species or apply independently sourced factor valid for actual duty/technology/state/region/period and activity units. Link concentration to SAME compatible sample/interval flow; preserve substance versus elemental basis and medium. Missing necessary measurements/factors remain mandatory collection gaps, not zero or generic merged species. Aggregation: Use species_amount and stream_fates then normalize_once; expand each real substance/medium and avoid additive carrier/component double count | kg identified species; each native activity/concentration/factor/sample unit | Each actual monitored/event or justified representative interval | Actual responsible source/sample/operation interval with clear temporal coverage | Actual owned direct air/water/soil sources; excludes same provider-covered emissions | per reference flow | Actual calibration/sample and factor applicability; per-operand dimensional/basis proof; unresolved necessary emission requirements retained |
| cp_land | sleeping_compartment_service | actual uncovered occupation/transformation | spatial-phase-stage ownership ledger | land_interface_id; polygon; category_before_after; actual_start_end; transformation_event_id; site_asset_provider_stage; actual_consumer_driver; prior_covered_land_interface; source_uncertainty; actual_area; actual_area_unit; actual_area_basis; actual_area_method; actual_area_state; actual_area_sample_time; actual_area_source; actual_area_uncertainty; actual_interval_duration; actual_interval_duration_unit; actual_interval_duration_basis; actual_interval_duration_method; actual_interval_duration_state; actual_interval_duration_sample_time; actual_interval_duration_source; actual_interval_duration_uncertainty; actual_calendar_conversion; actual_calendar_conversion_unit; actual_calendar_conversion_basis; actual_calendar_conversion_method; actual_calendar_conversion_state; actual_calendar_conversion_sample_time; actual_calendar_conversion_source; actual_calendar_conversion_uncertainty; actual_transformation_from_area; actual_transformation_from_area_unit; actual_transformation_from_area_basis; actual_transformation_from_area_method; actual_transformation_from_area_state; actual_transformation_from_area_sample_time; actual_transformation_from_area_source; actual_transformation_from_area_uncertainty; actual_transformation_to_area; actual_transformation_to_area_unit; actual_transformation_to_area_basis; actual_transformation_to_area_method; actual_transformation_to_area_state; actual_transformation_to_area_sample_time; actual_transformation_to_area_source; actual_transformation_to_area_uncertainty; actual_consumer_driver_unit; actual_consumer_driver_basis; actual_consumer_driver_method; actual_consumer_driver_state; actual_consumer_driver_sample_time; actual_consumer_driver_source; actual_consumer_driver_uncertainty; actual_alluser_driver; actual_alluser_driver_unit; actual_alluser_driver_basis; actual_alluser_driver_method; actual_alluser_driver_state; actual_alluser_driver_sample_time; actual_alluser_driver_source; actual_alluser_driver_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | Read actual cadastral/site/rail/depot footprint and event history; establish nonoverlapping actual polygons/categories/intervals and real transformation before/after state. Cross-check full-life asset/provider land coverage by phase. Unknown land history is not inferred from a rail-site label. Aggregation: Use land_phase and rail_partition/normalize_once; no identical provider/asset land repeated or transformation each journey | m2*a occupation; m2 transformation; native area/time units | Each actual polygon/state/interval/transformation or coverage change | Actual occupation interval and true transformation date; asset/provider phases separate | Actual responsibility-matched rail/station/depot footprints, not total estate automatically | per reference flow | Actual spatial/time/state source, native dimensional proof, paired transformation and stage-owner anti-overlap |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | all nonreference exchanges | Q_target = sum(actual compatible Q_k * actual a_target,k) for unique real events/duties with share inside sum; Q_ref = Q_target / N_target only when same-scope N_target > 0. Already-per-reference amounts remain unchanged. Actual applicable stock_exclusive representation precedes this sum; N_target=0 follows necessary_pool without division. Each Q,share,N and conversion keeps its OWN native metadata and source. | actual native records; cp_journeys; rail_partition | Actual per reference quantity, or responsible unnormalized carry |  |
| accepted_episodes | reference service | N_target = count unique physically accepted equivalent exclusive-compartment service episodes after actual moves/formation changes/revisions/interruption/partial reconciliation. Count real accommodation fulfilment rather than price/passenger-distance. Actual unlike partials remain separately described outputs and pools, not arbitrary fractions of a complete episode. | cp_journeys; journey_identity | N_target |  |
| rail_duty_closure | moving/shared duties | Partition actual duty by actual train-coach-segment-configuration-time and ownership; sum assigned same-duty owner/consumer portions closes its full B_k. Apply physical_precedence and rail_partition before normalize_once. Stage/provider coverage and actual driver evidence determine portions; no prescribed numerical share or default transport subtraction. | cp_rail; cp_energy; cp_providers; all real consumers | Exclusive actual accommodation/other-output duty shares and closure |  |
| lifetime_service | asset stages | Attribute actual uncovered full-life stage burden using compatible actual target/all-user lifetime driver under asset_life. Observed history plus sourced remaining equivalent use OR actual terminated total closes full burden, including necessary idle treatment. Distinct full-life stages, annual-period allocations and current replacements do not repeat manufacture/EOL already included. | cp_assets; native observed/remaining/target driver operands; provider_gate | Actual completed lifecycle attribution |  |
| stock_balance | supplies and material state | At SAME source/material/state/burden-stage and attributed pool scope define S = attributed opening stock + inbound external receipts net of packaging/container tare ONLY + actual source-linked internal-in and signed necessary responsibility transfers - attributed closing stock - actual internal-out responsibility transfers. Closing retains real unused and recovered stock by separate compatible-state ledger; recovered stock must not also be inside standalone closing. Carry prior source/stage burden and retained stock to its actual next owner/period, without a new manufacture event. S is gross DRAWN supply, not purchases alone: stock_exclusive uses S with matched UNUSED output OR (S minus matched UNUSED) with output OMITTED. Used export/recovery/retained recovered stock retains actual old-stage burden and service carry; never net it as an unused NEW-material return or avoided new manufacture. Actual state transformations have paired transfer IDs and nonadditive parent/component audits, not arbitrary cross-state subtraction. Reconcile actual use/fates/losses and retained responsibility; unresolved difference or absent final carry blocks complete use. | cp_stock; cp_refrigerant; stock_exclusive | Compatible stock closure and exclusive exchanged quantities |  |
| energy_quantity | actual energy | Actual meter end-start with real resets/import/export OR actual SAME interval-average power * actual duration with dimensional conversion once. Thermal/fuel conversions use actual state and independent sourced native factors. Integrated energy never multiplied by time again; purchases are not automatically burned. | cp_energy; each native energy/time/conversion operand | Actual uncovered compatible energy/fuel quantity |  |
| water_fates | actual water | Within ONE declared boundary/period and compatible water/moisture state: opening stocks + actual EXTERNAL inflows = mutually exclusive actual EXTERNAL terminal exits + closing stocks + unresolved difference. Enduse is an internal intermediate view, not additional terminal exit; source supply/tank fill internal transfer and contained handover/same receiver acceptance are respectively paired single quantities, not duplicate entry/exit. Retained moisture already in closing material/water stocks is not separately added. Unique transfer IDs, internal/external and terminal/stock-membership roles prove exclusions. Actual vapour/outfall requires independent measurement or supported model; residual remains unknown. Genuine carrier mixture and species component audits are nonadditive, no supply=sewer/evaporation. | cp_water; actual sample/source/tank/receiver operands | Actual distinct water fates and disclosed unresolved difference |  |
| refrigerant_fates | actual refrigerant | For each SAME substance/component, boundary, phase and period use exclusive disjoint compartments: O_installed + O_standalone + O_recovered + new_factory_charge_entry + standalone_external_receipts_tare_only + other_external_receipts = C_installed + C_standalone + C_recovered + matched_UNUSED_returns + useful_USED_export + contained_waste + whole_equipment_retained_exit_charge + independently_evidenced_air_release + other_identified_external_fates + unresolved_difference. New factory entry belongs ONLY to equipment entering this boundary during period and absent from O_installed; its manufacture charge belongs once to equipment/provider, not another standalone refrigerant manufacture. Recovered O/C are SEPARATE from standalone O/C and cannot also be inside them. Internal additions/recovery transfer between compartments cancel only on the consolidated audit and do not become new input/output. Whole-equipment retained exit content is a nonadditive component of that equipment handoff, not a second charged refrigerant waste exchange. Used exports/recovery retain original burden and cannot reduce new manufacture as UNUSED return. No unmatched stock residual becomes release: absent independent fate evidence remains unresolved even if a balance closes. Reconcile native component fractions, factory/new-entry timestamps, every real external gate and covered provider stage; stock_exclusive and stock_balance determine actual manufacture/service exchange representation without duplicating this nonadditive audit. | cp_refrigerant; stock_balance; actual charge/recovery/receiver operands | Actual supply/useful/contained/air/stored fates without duplication |  |
| freight_sum | material cargo | Q_target_freight = sum(actual carried payload_k * actual leg_distance_k * actual repeat_k * actual target_share_k) over unique actual load-legs; EACH repeat only once, TOTAL unchanged. Payload includes carried wet content/packaging/supports, excludes only vehicle/noncargo tare. Apply normalize_once once after sum; actual passengers not freight cargo. | cp_freight; actual independent mass/distance/repeat/share operands | kg*km per reference on compatible units |  |
| species_amount | actual direct pollutant | Use actual measured substance amount OR actual activity * an independently sourced applicable factor with dimensional/state/basis conversion; concentration * SAME sample/interval flow only with compatible units. Preserve actual substance versus elemental basis, particle size, receiving medium and provider exclusions. Each actual exchange separate; missing necessary species/factors block complete use instead of default zero. | cp_emissions; cp_refrigerant; actual native activity/factor/sample/conversion operands | Actual species/medium amount |  |
| land_phase | actual land | Actual occupation = sum(nonoverlapping actual area * actual compatible interval duration) by land category/owner; actual transformation-from/to pairs share real event/footprint and are not annual/nightly repetitions. Reconcile provider/asset current/full-life land phases before attribution, native conversions and normalize_once. Unknown footprint/category/history is a collection gap. | cp_land; actual native area/time/calendar/event operands | Actual exclusive m2*a occupation and m2 transformation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| physical_service | reference and qualifiers | Declare actual equivalent service-version, exclusivity/sleeping readiness/access, configuration, supplied intervals/segments/package and acceptance, moves/reversals/partials; no fixed quantity or commercial proxy. | cp_journeys actual plans and acceptance |
| native_each_operand | every raw or derived operand | Require per-operand native_unit,basis,method,state,sample_time,source_ref,value and uncertainty; validate dimensions/state/time/consumer compatibility before arithmetic. No shared row badge or inferred unit conversion. | All CP independent operand records |
| actual_shared_closure | moving vehicle/energy/asset/pool | Actual formation and split/join/time membership, all users/outputs, chosen causal drivers and stage owners must close full duty. Necessary empty/stabled/failed/idle responsibility and N0/carry have actual final owner/disposition. | cp_rail; physical_precedence; necessary_pool |
| full_life_actual | providers and capital | Actual full-chain stage matrix includes manufacture-install-maintain-replace-EOL, upstream resources and actual receivers across all users; actual missing stages completed integrated once and identical coverage excluded before complete final data. | cp_providers/cp_assets completed dataset/source/native owner links |
| stock_state_fates | materials/water/refrigerants | Same-source/state UNUSED gross+return versus consumed/OMIT exclusive; used recovery retains burden; all actual mixtures/nonadditive components/medium and receiver fates evidenced, residual unresolved. | cp_stock/water/refrigerant/fates and actual acceptance |
| uncertainty_identity | ranges and identities | No unsupported numerical ranges/lifetimes/factors, default absent inputs or missing-data zero. Verify actual concrete exchange identity/property/unit before final TIDAS binding; conditional umbrella expands by actual distinct material/species/state/medium. | Actual source/measurement and verified identities, explicit missing-data/use limits |
| representative_route | duration/route/package aggregation | Single defined equivalent actual journey/service version; unlike actual routes/durations/packages/configurations are not silently averaged. Any reviewed physical equivalence and weighting retains every contributor, native driver/source and sensitivity. | Actual contribution/segment/version dataset and justified equivalence |
| complete_accommodation_electricity | sleeping_compartment_service | Expand each actual case under `accommodation_electricity` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_energy` |
| complete_purchased_useful_heat | sleeping_compartment_service | Expand each actual case under `purchased_useful_heat` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_energy` |
| complete_uncovered_operating_fuel | sleeping_compartment_service | Expand each actual case under `uncovered_operating_fuel` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_energy` |
| complete_supplied_water | sleeping_compartment_service | Expand each actual case under `supplied_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_cleaning_supplies | sleeping_compartment_service | Expand each actual case under `cleaning_supplies` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_stock` |
| complete_included_nonfood_supplies | sleeping_compartment_service | Expand each actual case under `included_nonfood_supplies` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_stock` |
| complete_reusable_textile_lifecycle | sleeping_compartment_service | Expand each actual case under `reusable_textile_lifecycle` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_rolling_stock_full_life | sleeping_compartment_service | Expand each actual case under `rolling_stock_full_life` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_rail_station_depot_full_life | sleeping_compartment_service | Expand each actual case under `rail_station_depot_full_life` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_maintenance_materials | sleeping_compartment_service | Expand each actual case under `maintenance_materials` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_stock` |
| complete_standalone_refrigerant_makeup | sleeping_compartment_service | Expand each actual case under `standalone_refrigerant_makeup` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_refrigerant` |
| complete_supply_freight | sleeping_compartment_service | Expand each actual case under `supply_freight` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_freight` |
| complete_direct_water_abstraction | sleeping_compartment_service | Expand each actual case under `direct_water_abstraction` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_land_occupation | sleeping_compartment_service | Expand each actual case under `land_occupation` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_land` |
| complete_land_transformation_from | sleeping_compartment_service | Expand each actual case under `land_transformation_from` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_land` |
| complete_matched_unused_supply_returns | sleeping_compartment_service | Expand each actual case under `matched_unused_supply_returns` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_stock` |
| complete_useful_used_material_handover | sleeping_compartment_service | Expand each actual case under `useful_used_material_handover` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_contained_wastewater | sleeping_compartment_service | Expand each actual case under `contained_wastewater` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_food_discard | sleeping_compartment_service | Expand each actual case under `food_discard` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_packaging_discard | sleeping_compartment_service | Expand each actual case under `packaging_discard` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_discarded_cleaning_maintenance_material | sleeping_compartment_service | Expand each actual case under `discarded_cleaning_maintenance_material` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_retired_textile | sleeping_compartment_service | Expand each actual case under `retired_textile` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_retired_asset_material | sleeping_compartment_service | Expand each actual case under `retired_asset_material` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_contained_refrigerant_waste | sleeping_compartment_service | Expand each actual case under `contained_refrigerant_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_refrigerant` |
| complete_direct_water_outfall | sleeping_compartment_service | Expand each actual case under `direct_water_outfall` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_direct_air_species | sleeping_compartment_service | Expand each actual case under `direct_air_species` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_emissions` |
| complete_direct_water_pollutants | sleeping_compartment_service | Expand each actual case under `direct_water_pollutants` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_emissions` |
| complete_direct_soil_species | sleeping_compartment_service | Expand each actual case under `direct_soil_species` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_emissions` |
| complete_direct_refrigerant_air | sleeping_compartment_service | Expand each actual case under `direct_refrigerant_air` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_refrigerant` |
| complete_land_transformation_to | sleeping_compartment_service | Expand each actual case under `land_transformation_to` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_land` |


### Mandatory Inventory Completion Records

The following records are mandatory physical collection and case-expansion requirements, not single inventory exchanges. Every original node, direction, flow type, amount basis, protocol, stock/fate, provider/receiver and source obligation remains binding. References elsewhere to their identifiers refer to these requirements. Before completing a foreground dataset, expand every actual material, service, asset lifecycle, waste stream or substance/medium into separately identified exchanges with native quantities and exclusive coverage. Retained fixed cards cover only their actual supported cases; reconcile all residual actual cases without overlap. Missing identity, occurrence or quantity is unresolved, never zero or permission to omit. Internal paired handoffs and component audit views remain non-additive. Required full-life and provider stages must actually be completed once.

#### accommodation_electricity

Owner and original flow role: sleeping_compartment_service / inputs / product

Actual compartment lighting/outlets, HVAC, hotwater auxiliaries, sanitation, access/response and preparation/idle duty. Distinguish on-train auxiliary supply, shore/depot supply and provider-covered traction/auxiliaries; no repeated integrated electricity.

Residual inventory requirement after the independently identified cases `accommodation_electricity_ac`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual accommodation and attributable auxiliary electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_energy; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range evidence need: Source/location/voltage, actual meter interval, shared train/coach consumers and actual upstream coverage; no kWh/guest or nameplate default.

#### purchased_useful_heat

Owner and original flow role: sleeping_compartment_service / inputs / product

Only actual delivered thermal service at its real state/plant boundary. Do not repeat electricity or fuel already inside that service.

Residual inventory requirement after the independently identified cases `purchased_useful_heat_delivered_heat`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual externally delivered useful heat or cooling
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_energy; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range evidence need: Actual useful delivery, native temperature/enthalpy and independent conversion metadata/provider losses and equipment.

#### uncovered_operating_fuel

Owner and original flow role: sleeping_compartment_service / inputs / product

Conditional actual separately owned maintenance/support fuel. Third-party traction fuel stays inside the completed matched provider or an explicitly reviewed exclusive supplement; no generic locomotive fuel added to full movement service.

- Selected flow: Actual uncovered operating fuel carriers
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_energy; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Range evidence need: Actual grade, stock reconciliation, burn versus receipt, own volume-density-temperature and combustion/coverage evidence; no diesel/electric mix default.

#### supplied_water

Owner and original flow role: sleeping_compartment_service / inputs / product

Actual coach tank fill, showers/washbasins/toilets, cleaning and responsible depot/common use. Tank fill is not automatically consumed water, sewage, evaporation or same-period allocation.

Residual inventory requirement after the independently identified cases `supplied_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual supplied accommodation and preparation water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_water; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Range evidence need: Actual source/tank/stock/meter, transfer ID and all-user/event linkage; no litre/passenger or assumed retention technology.

#### cleaning_supplies

Owner and original flow role: sleeping_compartment_service / inputs / product

Expand each actual cleaner, disinfectant, wipe, absorbent or filter at supplied state. Concentrate, dilution water and active fraction are separate nonadditive views; packaging is not net formulation.

Residual inventory requirement after the independently identified cases `cleaning_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual cleaning and sanitary formulations and materials
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_stock; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Range evidence need: SKU/composition/state, gross-net-tare, prepared solution and native EACH/TOTAL conversion, matched unused returns.

#### included_nonfood_supplies

Owner and original flow role: sleeping_compartment_service / inputs / product

Actual toiletries, tissue, amenity kits and other physically supplied goods by material/SKU. No default kit or disposable use; reusable dispensers/supports belong to full assets.

- Selected flow: Actual included nonfood guest supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_stock; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Range evidence need: Actual provision/use/unused stock-return state and sourced unit mass; no nominal guest count proxy.

#### reusable_textile_lifecycle

Owner and original flow role: sleeping_compartment_service / inputs / product

Only actual manufacture/transport/maintenance/replacement/EOL share not already covered by rental/laundry provider. Actual dry textile mass/material/construction and all-user lifetime are separate from completed wash mass.

- Selected flow: Actual uncovered reusable textile lifecycle service
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual item stock/cohorts, dry mass, observed and sourced remaining service life or actual terminated total; no mass residual as lost linen.

#### rolling_stock_full_life

Owner and original flow role: sleeping_compartment_service / inputs / product

Actual locomotive/coach shell, fitout, beds/mattresses, sanitation/HVAC, furnishings/equipment and reusable supports with disjoint stage owners. Count actual asset units and attributed life-service fraction, not a newly built coach per journey. Provider-covered manufacture/maintenance/EOL is excluded only with actual coverage proof.

- Selected flow: Actual uncovered rolling-stock and accommodation fitout lifecycle
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual asset inventory/serial/configuration/mass or counted unit, all-user life history/remaining equivalence, actual manufacture-install-maintain-replace-retire scope.

#### rail_station_depot_full_life

Owner and original flow role: sleeping_compartment_service / inputs / product

Actual applicable rail/track, station/lounge/access, depot and fixed support assets with one physical stage owner and all-user native life-service driver. This is not a whole infrastructure asset charged each trip or an automatic land-free ready system.

- Selected flow: Actual uncovered rail station and depot infrastructure lifecycle
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual relevant infrastructure inventory/provider stage matrix, segment/service use and life driver; native land interfaces separately reconcile overlap.

#### maintenance_materials

Owner and original flow role: sleeping_compartment_service / inputs / product

Actual oils/lubricants, components and maintenance formulations each by material/state. New components already included in lifecycle/provider may not be charged again; used return/recovery is a distinct fate.

- Selected flow: Actual uncovered maintenance fluids and replacement materials
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_stock; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Range evidence need: Actual component/task replacement, material/mixture and own net stock/density/basis, matched new unused return versus used recovery.

#### standalone_refrigerant_makeup

Owner and original flow role: sleeping_compartment_service / inputs / product

Actual substance/blend supply by species/composition/state; installed factory charge belongs once to equipment/provider. Top-up is not automatically an atmospheric leak.

- Selected flow: Actual standalone refrigerant supply outside covered equipment
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_refrigerant; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Range evidence need: Actual cylinder/net stocks, installed opening/closing, recovery, unused returns and species/state at each event; no leak-rate default.

#### supply_freight

Owner and original flow role: sleeping_compartment_service / inputs / product

Actual unique cargo-leg delivered materials, wet linen/water content, packing and supports included in carried payload. Do not treat passenger movement as material freight or repeat provider transport.

- Selected flow: Actual uncovered supplies and linen freight
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_freight; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`
- Range evidence need: Own native payload/distance/method/time/source, EACH repeat versus TOTAL and actual target membership/share inside the sum.

#### direct_water_abstraction

Owner and original flow role: sleeping_compartment_service / inputs / elementary

Only actual environmental withdrawal by source/compartment, exclusive of purchased supplied water and covered provider abstraction.

- Selected flow: Actual direct environmental water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_water; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Range evidence need: Actual source/site/meter and own native allocation and environmental compartment; unknown source remains unresolved.

#### land_occupation

Owner and original flow role: sleeping_compartment_service / inputs / elementary

Only actual scope-owned rail/station/depot land occupation by category, nonoverlapping footprint and interval. Provider/asset land already covered is not added again.

- Selected flow: Actual uncovered land occupation
- Flow property / unit: Area * time / m2*a
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_land; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_land`
- Range evidence need: Actual polygon/category/area/interval and calendar conversion, compatible all-user duty and owner; no total estate or ticket share default.

#### land_transformation_from

Owner and original flow role: sleeping_compartment_service / inputs / elementary

Only real source-backed transformation event and prior category, linked to actual asset/site and disjoint covered stages; not repeated each journey.

- Selected flow: Actual uncovered land transformation from prior state
- Flow property / unit: Area / m2
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_land; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_land`
- Range evidence need: Real before/after event evidence, date, polygon, category and native measurement/source; unknown transformation is not zero or presumed.

#### matched_unused_supply_returns

Owner and original flow role: sleeping_compartment_service / outputs / product

Only matched UNUSED same-source/same-identity/same-state returns when same-scope gross DRAWN supply S under stock_balance is the input. If input is already net of that return, OMIT this output; used/recovered material is not this row and earns no new-manufacture credit.

- Selected flow: Actual matched unused supply returns under gross accounting
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_stock; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stock`
- Range evidence need: Matched receipt-return IDs, condition/source/state/period, gross-versus-net choice and equal physical identity; no negative unexplained stock residual.

#### useful_used_material_handover

Owner and original flow role: sleeping_compartment_service / outputs / product

Actual useful receiver-accepted used materials, components or recovered substances, each separate actual material/condition/gate. Existing burden retained under stated attribution; not virgin/new manufacture avoidance by default.

- Selected flow: Actual useful used material handover
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual quality/intended use/receiver/gate and native quantity with prior burden/carry link; not inferred recycling from a label.

#### contained_wastewater

Owner and original flow role: sleeping_compartment_service / outputs / waste

Actual contained toilet/wash/cleaning water streams by compatible mixture and receiver route, including actual emptied tank events. Do not equate fill water or supplied volume to discharge or combine unrelated waste identities; treatment once.

- Selected flow: Actual contained wastewater receiver handover
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_water; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Range evidence need: Actual tank/open-close/moisture/receiver measurements and composition, transfer ID, stored carry and complete actual receiver treatment.

#### food_discard

Owner and original flow role: sleeping_compartment_service / outputs / waste

Conditional actual food/supply or plate/unserved discard inside declared package responsibility; record real edible/inedible/prepared state and moisture, never presume all guests receive meals.

- Selected flow: Actual food discard for receiver treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual event/stream/quantity/receiver/source and provider-versus-own waste coverage; upstream lost food not erased.

#### packaging_discard

Owner and original flow role: sleeping_compartment_service / outputs / waste

Each real material-specific discarded packaging stream with actual origin. Returnable support is not waste/new packaging purchase each use; genuine mixed collection retains nonadditive component audit.

Residual inventory requirement after the independently identified cases `packaging_discard_paper_pack`; `packaging_discard_metal_pack`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual packaging waste receiver handover
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual material/contamination/dry-wet/receiver records and counted-to-mass conversion; no all-waste composite identity.

#### discarded_cleaning_maintenance_material

Owner and original flow role: sleeping_compartment_service / outputs / waste

Conditional each actual spent cleaner/oil/filter/absorbent/component waste by identity/state and receiver route. This umbrella must expand to distinct real exchanges, not combine unrelated chemicals or waste types.

Residual inventory requirement after the independently identified cases `discarded_cleaning_maintenance_material_used_lubricating_oil`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual discarded cleaning or maintenance material streams
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual species/material/mixture/contamination/hazard description and receiver proof; unknown does not become a generic inert stream.

#### retired_textile

Owner and original flow role: sleeping_compartment_service / outputs / waste

Actual discarded reusable textile at actual dry/wet state, only when not already covered in provider/full lifecycle EOL. Wash mass and retired material mass are distinct.

- Selected flow: Actual uncovered retired textile receiver handover
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual retired cohort/item/state, material mass/moisture and receiver, lifecycle owner and exclusion matrix.

#### retired_asset_material

Owner and original flow role: sleeping_compartment_service / outputs / waste

Each actual retired asset/component/material receiver stream, exclusive of provider asset EOL already integrated. Reuse/repair/useful transfer is not automatic waste or new accepted accommodation.

- Selected flow: Actual uncovered retired asset material streams
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual asset/event/material mass and receiver fate, existing lifecycle burden and responsible all-user allocation.

#### contained_refrigerant_waste

Owner and original flow role: sleeping_compartment_service / outputs / waste

Actual contained recovered/discarded refrigerant by substance/blend/state and receiver; no automatic atmospheric emission, useful export or virgin credit.

- Selected flow: Actual contained refrigerant waste receiver handover
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_refrigerant; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Range evidence need: Native recovered opening/closing, receiver acceptance/treated fate, separate species and complete provider scope.

#### direct_water_outfall

Owner and original flow role: sleeping_compartment_service / outputs / elementary

Only real direct environmental outfall by receiving compartment and water identity, separate from contained receiver transfer and pollutant constituent views.

- Selected flow: Actual direct environmental water outfall
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_water; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Range evidence need: Actual outfall location/interval/state/composition/meter and owned treatment; unknown fate cannot pass as direct discharge.

#### direct_air_species

Owner and original flow role: sleeping_compartment_service / outputs / elementary

Conditional actual substance/particle/basis and air compartment for real owned duty; species expand individually. No universal CO2/NOx/SOx/VOC factor, combustion inferred from fuel purchase, or repeat provider emissions.

Residual inventory requirement after the independently identified cases `direct_air_species_co2_fossil_air`; `direct_air_species_methane_fossil_air`; `direct_air_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual direct nonrefrigerant species emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_emissions; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Range evidence need: Actual measurement or source-backed applicable factor, activity units/state/basis/time and constituent conversion; missing necessary emissions remain mandatory gaps.

#### direct_water_pollutants

Owner and original flow role: sleeping_compartment_service / outputs / elementary

Only actual identified direct-water pollutant species/basis and receiving compartment; constituent loads are nonadditive to a genuine carrier-water mixture, not another receiver wastewater flow.

- Selected flow: Actual direct species emitted to water
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_emissions; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Range evidence need: Actual concentration and SAME sample/interval water flow or mass measurement with independent native metadata and actual compartment.

#### direct_soil_species

Owner and original flow role: sleeping_compartment_service / outputs / elementary

Conditional real direct-soil releases by identified substance, state and compartment. A spill stock discrepancy alone proves neither released species amount nor zero.

- Selected flow: Actual direct species emitted to soil
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_emissions; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Range evidence need: Actual spill/containment/recovery/boundary records and compatible quantity, fate and species source.

#### direct_refrigerant_air

Owner and original flow role: sleeping_compartment_service / outputs / elementary

Only evidenced atmospheric species release at real equipment/event, expanded by actual blend component where needed. Keep standalone stock, installed charge, factory content and recovered receiver stocks separate; no topup=leak.

- Selected flow: Actual refrigerant species emitted to air
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_refrigerant; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Range evidence need: Actual full compatible mass/state/event reconciliation or sourced direct measurement/model, air medium and uncertainty.

#### land_transformation_to

Owner and original flow role: sleeping_compartment_service / outputs / elementary

Actual paired transformation event to evidenced new land category. Pair actual from/to same footprint/event; never repeat ongoing occupation as conversion.

- Selected flow: Actual uncovered land transformation to new state
- Flow property / unit: Area / m2
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_land; already-per-reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_land`
- Range evidence need: Same real event/polygon/date and compatible area units/source, stage owner and provider overlap proof.


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final output | Require matching real output card/name/reference link, 1 Item(s), verified Count supports and actual exclusive sleeping service qualifiers. No ticket/passenger-km/bed/seat/night equivalence, duplicate move/split output or unfulfilled/unknown episode counted. |  |
| validate_rail_partition | movement and shared resources | Require actual train-coach-segment-configuration/time/all-user ledger, formation split/join and real driver/coverage ownership. Accommodation/transport/dining shares close actual duty once; no full-train duplication or fare-driven omission. Actual idle/empty/reposition/stabling/failure ownership and N0 carry/disposition complete. | cs-current-trains; cs-traction-depot-eir-2025 |
| validate_providers_life | all providers and assets | Reject absent actual stage completion, generic outsourcing claims, pending supplements treated as actual, lifetime targetN denominator or omitted full vehicle/rail/station/depot/fitout/linen life. Check all-user observed+remaining sourced life OR actual terminated total, native driver compatibility, uncertainty and no repeated provider/own EOL or manufacturing stages. |  |
| validate_native | every operand/formula | Each independent raw/factor/share/duration/lifetime/conversion has native unit,basis,method,state,sample_time,source_ref. Reject incompatible material/time/unit/state, instant/nameplate energy, repeated integrated kWh*time, misplaced freight share/repeat and repeated normalization. |  |
| validate_stock_fates | actual supplies/water/refrigerants/receivers | External net receipt means tare removed only unless consumed choice explicit. Matched same-source/state UNUSED gross+return OR consumed-minus-return/OMIT exclusive; used recovery is not unused/virgin credit. Reject unidentified combined streams, wrong media, water vapour as liquid waste, inventory residual as emission and absent necessary collection treated as zero. |  |
| validate_failed_outputs | failed/partial/task states | Link each failed preparation/out-of-order/rejected linen/material/interruption event to actual repair/reclean/redeploy/return/held/receiver and burden owner. No failed or unresolved state as full accepted output; remedy/cleaning/handoff is not another journey. |  |
| validate_package_route | actual included food/support | Actual included goods/food/lounge/sanitation and all their physical stages remain complete once; independent dining is a real other output. Unreviewed actual independent engine/kitchen/laundry/conversion production or missing actual coverage blocks complete package use; no invented universal route or perguest quantity. | cs-during-trip; nightjet-sleeping |
| validate_evidence | final data and bilingual projection | Same boundaries, card/rule/protocol IDs, actual units and required metadata in EN/ZH/generated projection; actual sources support claimed scope. Missing generic ranges/UUIDs remain explicit limitations and necessary actual collection; no fabricated match/factor/source or unsupported full-chain/publication claim. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for actual private rail sleeping-compartment accommodation, with downstream process/lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset only after actual physical stage completion, source/identity verification and review for declared equivalent service/route/package |
| allowed_use | Actual exclusive sleeping-compartment service within evidenced moving-vehicle/transport/all-user/provider/lifecycle boundary and actual native quantities |
| excluded_use | Shared berth, seat-only, stationary room/day/night, full passenger transport or dining alone; unlike journey/package default equivalence; commercial allocation; missing actual stages/necessary quantities or unresolved final exchanges as complete verified data |
| required_metadata | Actual operator/geography/time, train/coach/compartment service-version and all segments/configurations, exclusivity/acceptance/partials, actual users/guests/package, provider/stage/receiver/asset and land ownership, native per-operand metadata and allocation/carry/normalization representation |
| required_quality_disclosure | Actual source coverage, physical driver alternatives/sensitivity, all-user lifetime assumptions/uncertainty, N0/idle/reposition/failure responsibility and actual disposition, actual completed missing stages/exclusions, unknown quantities/fates/identities and bounded use |
| update_trigger | Actual service route/formation/configuration/duration/package/provider/asset/lifetime or resource/receiver/driver/source/identity change; changed native data, supported coverage or unresolved-stage resolution |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-63290 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; printed356,30June2025 | Sleeping-car versus stationary semi-permanent accommodation in63290; separate dining-car service63310; classification scope only |
| cs-room-supplements | handbook | https://www.sleeper.scot/tickets/room-supplements | Actual commercially separate or bundled accommodation/rail travel; not physical allocation factor |
| cs-current-trains | handbook | https://www.sleeper.scot/about/our-trains/ | Actual sleeper/seated/dining/accessibility coach configurations, train split/join and variable segment formations; no universal fleet/capacity inventory |
| cs-traction-depot-eir-2025 | official_guidance | https://www.sleeper.scot/media/w10n35wj/csl088-3b-eir-response-s10-4-a-refusal-notice-class-66-locomotive-idling-in-inverness-csl.pdf ;3June2025,2pages | Actual third-party traction/depot service and coach moves; requested idling information not held, not a zero or quantity |
| cs-during-trip | handbook | https://www.sleeper.scot/help-support/during-your-trip/ | Actual included versus independently purchased food, room/ClubCar service differences; no universal menu, meal count or technology |
| nightjet-sleeping | handbook | https://www.nightjet.com/en/komfortkategorien/schlafwagen | Actual sleeping facilities, linen/attendant/food and shared-berth/private distinction; services vary by actual train |
| nightjet-private | handbook | https://www.nightjet.com/en/komfortkategorien/ganzes-abteil-buchen | Actual exclusive sleeper compartments distinguished from couchette/shared berth/seat products; no bed-count default |
