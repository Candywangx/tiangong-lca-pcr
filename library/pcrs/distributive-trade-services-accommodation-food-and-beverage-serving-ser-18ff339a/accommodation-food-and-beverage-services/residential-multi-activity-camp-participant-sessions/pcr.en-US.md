---
pcr_id: pcr.residential-multi-activity-camp-participant-sessions
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Residential multi-activity camp participant-sessions with on-site catering

## 1. Scope and Applicability

For an actually delivered residential GENERAL MULTI-ACTIVITY recreational holiday camp package containing overnight accommodation, food provision and recreation together, with actual on-site ingredient preparation/cooking. Actual operator programme, service records and physical kitchen route establish applicability. Specialist sports-instruction camps, day camps, lodging alone, bare pitches, permanent student/worker accommodation, clinical care and paper bookings/fees/capacity are outside this scope. A camp offering recreation or incidental instruction is not automatically a specialist sports-instruction product; the actual programme purpose and combined bundle decide. The distinction follows official CPC3.0 63130 versus92912, not marketing words alone.

One reference is one actually fulfilled participant-session in ONE declared equivalent package-version/duration/profile. Do not equate unequal two-day and week programmes or nutritional/age/activity/meal profiles without a reviewed physical equivalence and separate qualifiers. Actual duration is collected, not a universal number of nights, hours, meals, activities or participants. A participant declining a genuinely provided meal/activity may still have received the declared camp package; reservation, nominal menu, kitchen capacity or advance payment alone does not prove provision. Partial fulfilment is an actual separately described output/responsibility, not a complete session or automatic zero resource.

Two nodes retain actual lodging/readiness/activity/support and actual food storage/preparation/mixing/cooking/holding/serving/dishwashing/clean-down. The kitchen hands actual evidenced meal-provision service to the camp, without creating another final camp session. Actual food mass, served/declined covers, refill portions, prepared-food stocks, preparation waste, unserved discard, plate returns, packaging and air vapour remain distinct native views. Provider and direct duties overlap only in nonadditive traceability; one covered physical stage has one burden owner.

Include actual operational inputs, upstream food and supplies including losses, full building/siteworks/fitout/FF&E/kitchen/activity gear/tableware/linen life, necessary idle/failure duties and actual receiver duties across all consumers/periods. Independent industrial food processing, preservation, water treatment, energy conversion or industrial laundry not evidenced by this route requires reviewed expansion; this does not erase ordinary actual washing, holding, cooking or laundering duties. Guest travel and guest-brought product manufacture are separate unless actually within the declared responsibility.

Primary operator sources establish qualitative current operations, not universal recipes, yields, temperatures, safe-food legal conditions, meal/day counts or generic inventory ranges. Unresolved identity and unavailable generic ranges remain explicit evidence gaps with mandatory actual collection; they do not justify guessed values, UUIDs or zeros.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.residential-multi-activity-camp-participant-sessions |
| classification_refs | CPC3.0:63130 narrower actual general multi-activity residential recreational camp bundle with on-site catering; sports-instruction camps92912 excluded |
| covered_products | Actually fulfilled participant-session of one declared equivalent residential multi-activity package containing overnight accommodation, food and recreation |
| excluded_products | Day-only, lodging-only, bare pitch, specialist sports instruction, permanent residence, paper rights/bookings/fees or nominal capacity; unequal programme profiles as equivalent sessions |
| representative_product | One actual participant/package-version/duration/profile session with physical lodging, evidenced food provision and recreation plus responsible support |
| production_route | Actual programme preparation/readiness -> actual on-site food preparation and meal-provision handoff -> fulfilled residential multi-activity session and actual confirmation/reversal |
| market_state | Physical fulfilled combined participant-session; actual supplied food state, service availability/acceptance and duration retained; fees/bookings nonexchange trace only |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actually fulfilled residential multi-activity camp participant-session |
| How much | 1 Item(s) |
| How well | One declared equivalent package-version/duration/profile with overnight accommodation, actual food provision and recreation; participant/service acceptance and reversals evidenced, not a booking or eaten-meal count |
| How long or cycle | Actual programme start/end/local time/UTC offsets/DST and elapsed duration; meal occasions, stock/reporting and full asset-life phases separately retained; no fixed24hours or default nights |
| reference_flow_link | `camp_participant_session` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Actually fulfilled residential multi-activity camp participant-session |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | actual_camp_operator_site_programme_package_version; equivalent_duration_profile_and_cohort; actual_overnight_accommodation_food_recreation_bundle; general_multi_activity_not_specialist_sports_instruction; actual_on_site_ingredient_preparation_cooking; actual_start_end_time_zone_UTC_offset_DST_resolution; fulfilled_participant_acceptance_and_reversals; partial_output_own_scope_and_pool_failure_responsibility; actual_meal_provision_gate_prepared_ready_held_available; internal_transfer_same_state_native_quantity_finalN_once; served_declined_refill_prepared_remaining_plate_native_views; ingredient_supplied_state_moisture_bone_skin_packaging_distinction; all_guest_support_staff_visitors_other_session_consumers; full_life_asset_all_user_observed_sourced_remaining_driver; provider_direct_stage_exclusivity_completed_missing_stage_integration; native_quantity_unit_basis_method_state_sampletime_source; zero_N_and_zero_handoff_actual_responsibility_resolution |

N_target counts unique actually fulfilled participants in exactly the declared package-version/duration/profile after actual reversals. Same-day or partial delivery is not a whole session. A meal decline does not cancel an otherwise fulfilled service; actual package gate matters. Different actual profiles/cohorts may share resources but cannot silently share one undifferentiated denominator. The Count support property/unit does not verify the semantic participant-session product identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| session_profile_count | final output | Count | Item(s) participant-session | Count actual fulfilled unique participant/package-version/duration/profile after reversals, with actual overnight-food-recreation gate and times. Do not substitute bookings, participant-days, meal counts, capacity or fixed24h. Unequal sessions retain qualifiers/separate outputs. | unsd-cpc3-2025; pgl-multiactivity-current |
| meal_transfer_native | internal kitchen/camp | Count and independent Mass | Actual meal-provision covers/events Item(s), independent food kg | Both internal sides use same transferID/state/actual native service quantity/receiver scope and same positive N_target once. Actual prepared-ready-held-available service evidence, not merely planned menu or eaten food; served, declined, refills and masses remain independent. Count is not equal nutrition or food mass. | pgl-menus-current |
| native_food_states | actual ingredients/food/waste | Mass; actual composition water | kg actual as-received/prepared/as-served and independent dry/water bases | Supplied raw/prepared/cooked state, moisture/bone/skin and actual packaging tare distinct. Only water-only SAME sample w_wet=m_water/m_as_received and r_dry=m_water/m_nonwater imply w_wet=r_dry/(1+r_dry), percent first. Loss-on-drying with other volatiles is not water. No universal yield. | pgl-chef-job |
| native_physical_conversion | actual quantities/factors | Actual compatible property | Native mass/volume/density/energy/time/count and factor units | Every independent operand carries value/unit/basis/method/state/sampletime/source. EACH item amount uses actual count once; TOTAL unchanged. Density matches actual state and temperature; kWh, MJ and fuel/calorific kinds require actual supported conversion and not double application. |  |
| once_same_target | all resources | Native row property and Count denominator | Physical resource per Item(s) actual participant-session | Assign actual target duty directly OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver, then divide positive same-profile N_target once. Include necessary same-pool idle/failure burden with real-output responsibility. Already-per-reference unchanged; N0 retains linked source/receiver/resolution, unassigned blocks completeness. |  |
| asset_life_service | assets/reusables/providers | Actual native asset and lifetime driver | Compatible job/alluser observed+sourced remaining full-life units | Full life includes manufacture/install/maintain/actual replacements/EOL; complete allusers observed plus evidenced remaining service/termination. Annual sessions, nominal capacity or invented years are not complete lifetime; one provider-covered stage or actual underlying stage. |  |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual general multi-activity residential camp and actual on-site catering route with specified package-version/duration/profile and physical supply responsibility |
| starting_condition_role | Ready camp and kitchen are operating starting states with full-life asset responsibility inside boundary, not burden-free existing buildings |
| product_classification_scope | Narrower63130 all-inclusive overnight-food-recreation package; independently verified product/route need, not creation solely from classification leaf |
| recursive_input_rule | Do not purchase the same final camp or complete internal meal service again. Kitchen ingredients/provider-covered preparation and direct duties retain exclusive gates; same internal transfer quantity is one linked service, not two external burdens. |
| upstream_dataset_requirement | Actual supplied-state food/supplies/utilities and provider/asset manufacture-install-maintain-replacement-EOL must match physical scope. Missing actual stages need completed linked source/native quantity/state/time/owner integration once before complete final package use. |
| disclosure | Actual equivalent package/duration/cohort and partials, physical meal provision gate/native food fates, alluser staff/visitor/session allocation, shared assets/providers, covered stages, necessary idle/failure, N0/zero-handoff carry and identity/evidence gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| bundle_route_gate | target package | Overnight accommodation, food and recreation actual bundle remain inside; specialist sports-instruction excluded. Real kitchen route has ingredient preparation/cooking, not fictitious outsourcing selected for convenience. | unsd-cpc3-2025; pgl-multiactivity-current; pgl-chefs-current |
| complete_exclusive_life | all duties | Include actual food/upstream losses, lodging/activity/support/cleaning and full assets/reusables life and receivers. One lifecycle-complete provider OR underlying stages. Actually missing duties must be completed integrated once with source/quantity/state/time/owner/exclusion before full-chain use. | pgl-code-practice-2025 |
| zero_handoff_no_erasure | kitchen/camp integration | Zero actual meal handoff cannot convey kitchen burdens through a zero exchange. Actual necessary camp-owned kitchen resources must be actually integrated once through exclusive sourced resource supplement/aggregation with source/receiver/owner/coverage links; no fictional positive meal. Incomplete integration blocks complete package use. |  |
| qualitative_source_limit | all evidence | PGL current pages and June2025 Code of Practice describe actual qualitative route. Do not make example nights, meals/day, portions, recipe/temperature/safety/law or lifetime universal requirements/factors; collect actual site evidence. | pgl-multiactivity-current; pgl-menus-current; pgl-code-practice-2025 |

 Actual camp/activity/kitchen site land occupation and real land transformation interfaces belong to the actual site/asset/provider coverage matrix when inside selected full-chain responsibility. Collect actual spatial/temporal boundary, prior/after state and native area/time or transformation unit/basis/method/state/sampletime/source and actual coverage owner. Covered identical asset/provider interfaces are not repeated. Uncovered actual interfaces must be completed integrated once, with actual source/native quantity/state/time/owner/coverage before full-chain use; otherwise incomplete. Do not infer land class/conversion/factor from a marketed camp site, and do not equate land quantities to Count asset units.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| camp_session_service | Residential multi-activity camp session integration | required | Actual fulfilled equivalent residential overnight-food-recreation camp programme | Final participant-session with actual lodging/activity/support and exclusive internal meal provision input | `camp_participant_session` |
| on_site_meal_preparation | Actual on-site food preparation and meal provision | required | Actual on-site ingredient preparation/cooking for camp and all actual other consumers | Actual food supply/prep/mix/cook/hold/serve/clean-up and internal meal-provision handoff; actual native output quantity, not fixed one meal/session | `kitchen_meal_handoff` |

Actual programme/session/time-profile service and continuous readiness/refrigeration overlap real recipe/preparation/cooking/holding/serving/dishwashing/clean-up batches. Capture actual recipe version/composition, supplied-state ingredients, operation used (not every dish must be mixed/heated), node input-to-prepared-food state change, completed service gate and own preparation/distribution/remaining/plate records. No independent preservation product, postharvest conditioning plant or energy conversion is implied by ordinary washing/cold holding/cooking. Actual independently delivered new processes require reviewed route expansion.

Both internal sides carry identical transferID, actual prepared-ready-held-available service state, real occasion/participant/receiver/acceptance scope, native count and same finalN normalization once. Menu, reservations, nominal covers and nutrition are not measured output. Serving/refill/decline/mass views are nonadditive evidence, not independent duplicated services. Staff meals necessary to camp support follow actual camp responsibility; other sessions/visitors retain actual own output responsibilities, no automatic exclusion.

Off-spec/raw/overproduced/prepared/held food follows actual rework/reheat/redeployment/retained WIP/accepted usable transfer/discard routes with source-batch destination and quantity/state/time. Rework loops do not become new upstream purchases or extra final camp sessions. Rejected or partially performed sessions retain real physical resources and separate scope. Necessary same-pool failed/cancel/no-show/standby work remains in total and actual real-output responsibility. Crossperiod source/receiver/resolution links and unknowns survive until resolved; unassigned duty blocks completeness.

### Process: Residential multi-activity camp session integration (`camp_session_service`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`camp_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Actual alternating-current electricity at point of use `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Binding: `fixed`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_utilities`

Range evidence need: Actual native meter/interval scope, direct or complete all-user driver, source and idle responsibility; no electricity per camper/day or nameplate default.

###### Actual liquid treated tap-water supply (`camp_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_utilities`

Range evidence need: Actual supplier/source meters, native volume/time, enduse/all-user attribution and independently measured fates; no standard litres per participant or camp duration.

###### Actual externally delivered useful heat (`camp_purchased_thermal_delivered_heat`)

Only actual useful heat delivered across this node boundary on an evidenced energy basis. Keep supply/return state, temperature grade, coverage and actual loss ownership. This generic heat identity does not assert natural gas, steam mass, boiler efficiency or a temperature. Cooling, fuel energy and unsupported steam-to-energy cases remain outside this identity.

- Selected flow: Actual externally delivered useful heat `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- Binding: `fixed`
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_utilities`

Range evidence need: Actual supplier/delivery energy, native property-unit/state/temperature and provider losses/assets boundary; no comfort-temperature or boiler-efficiency default.

###### Actual independently recorded synthetic detergent supply (`camp_consumables_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Actual independently recorded synthetic detergent supply `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_supplies; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_supplies`

Range evidence need: Actual net material stock excluding packaging tare, EACH/TOTAL and item/mass/density factors if used, actual tasks/users/unused-return match; no standard kit or dose.

###### Actual camp textile laundry service on its declared native basis (`camp_laundry_service`)

Actual completed accommodation/cleaning textile laundering, with dry-textile service mass or evidenced actual provider unit. Dirty wet freight, dry cloth and new textile manufacture are different. Complete wash/dry/finish/water/energy/chemical/effluent/freight/assets coverage or actual missing-stage supplements once.

- Selected flow: Actual camp textile laundry service on its declared native basis
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_textiles; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_textiles`

Range evidence need: Actual batches, linen identity/conditioning/dry basis, performed rewash and all-client share, exact provider/rental textile coverage; no kg per camper or fixed washing schedule.

###### Actual internal meal-provision service handoff to the camp programme (`camp_internal_meals`)

Same actual kitchen-to-camp meal provision event and transfer scope as kitchen_meal_handoff: actual completed service/availability/served/declined states, native cover count and independent as-served food mass. This is an INTERNAL service link, not another externally purchased meal or another ingredient burden.

- Selected flow: Actual internal meal-provision service handoff to the camp programme
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_meal_receipts; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_meal_receipts`

Range evidence need: Actual transfer/batch/meal occasion/participant-cohort, source/receiver duty, native result and exact coverage; do not fix meal count to1session or assume equal nutrition/impact.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actually fulfilled residential multi-activity camp participant-session (`camp_participant_session`)

One actual participant completing the declared overnight+food+general recreational camp package and duration/profile, after documented acceptance/reversals. Not a room-night, booking, advertised capacity, planned meal total or fixed24hours. Declined available meal/activity does not automatically reject a supplied camp session.

- Selected flow: Actually fulfilled residential multi-activity camp participant-session
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_sessions`

Range evidence need: Actual session/profile/package-version/duration/site/participant/physical lodging and provided duties; partial delivery needs actual scope/ownership, no universal session equivalence.

##### Waste flows

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`camp_direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil carbon dioxide emitted to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_releases; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_releases`

Range evidence need: Exact species/basis/particle/medium/native measurement or actual activity-factor with needed composition/fate/state metadata; full factors not fraction-multiplied twice.

###### Actual separately evidenced fossil methane emitted to air (`camp_direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil methane emitted to air `08a91e70-3ddc-11dd-9610-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_releases; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_releases`

Range evidence need: Exact species/basis/particle/medium/native measurement or actual activity-factor with needed composition/fate/state metadata; full factors not fraction-multiplied twice.

###### Actual separately evidenced nitrous oxide emitted to air (`camp_direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced nitrous oxide emitted to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_releases; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_releases`

Range evidence need: Exact species/basis/particle/medium/native measurement or actual activity-factor with needed composition/fate/state metadata; full factors not fraction-multiplied twice.

### Process: Actual on-site food preparation and meal provision (`on_site_meal_preparation`)

#### Inputs

##### Product flows

###### Actual liquid treated tap-water supply (`kitchen_recipe_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_recipes; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_recipes`

Range evidence need: Actual recipe/batch/addition native amount/state/source and independently compatible density/temperature/composition if converted; no automatic all-water retained or waste.

###### Actual liquid treated tap-water supply (`kitchen_operating_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_utilities`

Range evidence need: Actual source/meter/enduse/native volume/time, recipe-water exclusions and independent effluent/retained/direct fates; no all-supply-to-sewer assumption.

###### Actual alternating-current electricity at point of use (`kitchen_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Actual alternating-current electricity at point of use `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Binding: `fixed`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_utilities`

Range evidence need: Actual meter/interval-average power and matching elapsed duration/conversions, complete users/periods and camp common-meter exclusions.

###### Actual externally delivered useful heat (`kitchen_purchased_thermal_delivered_heat`)

Only actual useful heat delivered across this node boundary on an evidenced energy basis. Keep supply/return state, temperature grade, coverage and actual loss ownership. This generic heat identity does not assert natural gas, steam mass, boiler efficiency or a temperature. Cooling, fuel energy and unsupported steam-to-energy cases remain outside this identity.

- Selected flow: Actual externally delivered useful heat `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- Binding: `fixed`
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_utilities`

Range evidence need: Actual supplier/delivery/useful energy and native meter/state/temperature/source, complete alluser share and identical direct coverage exclusions.

###### Actual independently recorded synthetic detergent supply (`kitchen_cleaning_materials_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Actual independently recorded synthetic detergent supply `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_supplies; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_supplies`

Range evidence need: Actual native net material stocks excluding packaging tare, matched unused return, duties and composition/density where used; no sanitation recipe, dose or presumed sterilant emission.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual internal meal-provision service handoff to the camp programme (`kitchen_meal_handoff`)

Actual completed kitchen provision at identified meal occasion/cohort/participant scope: service availability, served/declined status, true cover count, prepared/served/remaining food mass separately. Exactly paired with camp_internal_meals as internal service, not another final camp session or another purchased provider burden.

- Selected flow: Actual internal meal-provision service handoff to the camp programme
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_meal_deliveries; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_meal_deliveries`

Range evidence need: Actual transfer/batch/destination/package/service acceptance and physical meal evidence; Count does not mean same food mass/nutrition or one meal per camp reference.

##### Waste flows

###### Actual discarded unserved prepared food (`kitchen_unserved_food_waste`)

Actual discarded prepared food never handed over as a served dish or offered meal mass at its actual measurement gate. Retained prepared stock, real usable transfer and actual plate returns are distinct. If real bins co-collect these categories, one receiver total with nonadditive origin audit, not extra additive outputs.

This identity covers only discarded human-food or beverage material in its actual measured state. Packaging, tableware, cleaning chemicals and non-food preparation residues need their own identities. Keep distinct actual receiver streams separate. For a genuine co-collected mixture containing non-food material, verify the whole-stream identity and retain this food-origin view only as a non-additive audit.

- Selected flow: Actual discarded unserved prepared food `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fates`

Range evidence need: Actual batch/time/state/native net amount and disposition/receiver, co-collection membership and storage/prep/plate exclusions; no prepared-minus-planned residual as discard.

###### Actual returned plate and dining leftovers waste (`kitchen_plate_waste`)

Actual post-service customer/staff/visitor plate material received into kitchen responsibility, independently weighed/classified. It does not subtract an already delivered meal service, become new ingredient manufacture, or repeat upstream food burden. Shared actual mixture total and origin views are not additive.

This identity covers only discarded human-food or beverage material in its actual measured state. Packaging, tableware, cleaning chemicals and non-food preparation residues need their own identities. Keep distinct actual receiver streams separate. For a genuine co-collected mixture containing non-food material, verify the whole-stream identity and retain this food-origin view only as a non-additive audit.

- Selected flow: Actual returned plate and dining leftovers waste `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fates`

Range evidence need: Actual served-meal/return/event/native quantity/receiver and foreign items/moisture/component scope, allconsumers; no consumption guessed from served minus unknown.

###### Actual separately collected paper packaging waste (`kitchen_packaging_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected paper packaging waste `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fates`

Range evidence need: Actual packaging identity/net quantity/tare-state/content/receiver and coverage; do not subtract food bone/skin as supply-container tare.

###### Actual separately collected metal packaging waste (`kitchen_packaging_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Actual separately collected metal packaging waste `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fates`

Range evidence need: Actual packaging identity/net quantity/tare-state/content/receiver and coverage; do not subtract food bone/skin as supply-container tare.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`kitchen_direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil carbon dioxide emitted to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_releases; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_releases`

Range evidence need: Exact substance/particle/basis/medium/native measurement or actual activity-factor/state/composition/fate/time/source; complete factors not multiplied again, unknown not zero.

###### Actual separately evidenced fossil methane emitted to air (`kitchen_direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil methane emitted to air `08a91e70-3ddc-11dd-9610-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_releases; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_releases`

Range evidence need: Exact substance/particle/basis/medium/native measurement or actual activity-factor/state/composition/fate/time/source; complete factors not multiplied again, unknown not zero.

###### Actual separately evidenced nitrous oxide emitted to air (`kitchen_direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced nitrous oxide emitted to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_releases; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_releases`

Range evidence need: Exact substance/particle/basis/medium/native measurement or actual activity-factor/state/composition/fate/time/source; complete factors not multiplied again, unknown not zero.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| real_outputs_not_components | camp/kitchen outputs | Final combined camp components are not co-products that remove lodging, meals or activities from the bundle. Actual other sessions/visitors/accepted usable food are real output responsibilities. Camp-support staff meals trace to actual camp support, not automatically an external output to delete. Actual partial service has its own physical scope; do not classify every failure as other product or charge every true partial product blindly to complete sessions. |  |
| complete_pool_responsibility | all resource pools | Actual direct trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver. All actual guests, support staff, visitors, other programmes and periods included. Necessary same-pool idle/standby/cancel/no-show/failed work stays in total and actual responsible real outputs; nominal capacity or simply recording unassigned ledger cannot erase it. Unknown responsibility blocks complete package. |  |
| once_same_profile | all rows | After real target responsibility assignment, divide positive N_target for exactly same package-version/duration/profile once. Already-per-reference unchanged; N0 retained with source/receiving/resolution links and no division. Different profiles need own quantities/denominators, not unqualified average sessions. |  |
| internal_meal_pair | two-node handoff | Same actual transferID, provision state, real participant/occasion/receiver gate, native quantity and same finalN on kitchen_meal_handoff and camp_internal_meals. Kitchen inventory attributed through actual internal service once. Do not add a purchased complete meal for those same duties or require internal meal amount=1 camp session. |  |
| zero_meal_real_integration | zero actual internal output | Zero handoff conveys no kitchen burden. Actually needed camp-owned kitchen resources must be actually integrated once via exclusive sourced resource supplement/aggregation with native quantity/source/receiver/time/owner/coverage. No invented positive meal; incomplete integration blocks complete package. |  |
| full_life_alluser | assets/providers | Full building/fitout/FF&E/kitchen/activity/reusable life includes manufacture/install/maintain/actual replacement/EOL using compatible job/complete alluser lifetime driver, observed+sourced remaining/termination/uncertainty/update. Necessary idle belongs to real pools; annualN or nominal capacity not lifetime. Full provider OR underlying covered duties; actual missing stages completed once before use. |  |
| stock_and_returns | ingredients/materials/fuel | Same-stock S=opening+net external receipts-closing including retained recovery. Gross S/N input plus matched UNUSED same-source/state return/N output OR consumed (S-return)/N input and OMIT matched output. No double deduction, loss removal, recovered USED-fluid offset, unrelated stock netting or automatic avoided-product credit. |  |
| receiver_nonadditive | food/fluids/assets/fates | Actual distinct received streams expand by substance/state/receiver. One measured genuine co-collected mixture with nonadditive component/origin views; never sum both. Whole/part/retained contents/capture/free liquid distinct. Identical fullasset/provider receiver transport/treatment once; useful transfers require actual accepted usable state, not recycling/donation labels. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_camp_utilities | camp_session_service | Actual node energy/fuel/water duties | Actual meter, interval and fuel-stock records | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; utility_identity; carrier_SKU; supplier_gate; meter_id; register_or_interval; meter_valid_version; reset_rollover_adjustment_source; already_applied_multiplier; actual_estimate_status; averaging_population; actual_device_cycling_idle_scope; actual_thermal_delivery_state; thermal_provider_scope; fuel_stock_scope; matched_unused_fuel_return; actual_source_location; purchased_or_direct_source; camp_kitchen_meter_boundary; recipe_water_exclusion; register_open; register_open_unit; register_open_basis; register_open_method; register_open_state; register_open_sample_time; register_open_source; register_close; register_close_unit; register_close_basis; register_close_method; register_close_state; register_close_sample_time; register_close_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; interval_quantity; interval_quantity_unit; interval_quantity_basis; interval_quantity_method; interval_quantity_state; interval_quantity_sample_time; interval_quantity_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; net_fuel_receipts; net_fuel_receipts_unit; net_fuel_receipts_basis; net_fuel_receipts_method; net_fuel_receipts_state; net_fuel_receipts_sample_time; net_fuel_receipts_source; fuel_closing_including_recovery; fuel_closing_including_recovery_unit; fuel_closing_including_recovery_basis; fuel_closing_including_recovery_method; fuel_closing_including_recovery_state; fuel_closing_including_recovery_sample_time; fuel_closing_including_recovery_source; unused_fuel_return; unused_fuel_return_unit; unused_fuel_return_basis; unused_fuel_return_method; unused_fuel_return_state; unused_fuel_return_sample_time; unused_fuel_return_source; actual_burn; actual_burn_unit; actual_burn_basis; actual_burn_method; actual_burn_state; actual_burn_sample_time; actual_burn_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_pressure; density_pressure_unit; density_pressure_basis; density_pressure_method; density_pressure_state; density_pressure_sample_time; density_pressure_source; useful_thermal_energy; useful_thermal_energy_unit; useful_thermal_energy_basis; useful_thermal_energy_method; useful_thermal_energy_state; useful_thermal_energy_sample_time; useful_thermal_energy_source; delivered_temperature; delivered_temperature_unit; delivered_temperature_basis; delivered_temperature_method; delivered_temperature_state; delivered_temperature_sample_time; delivered_temperature_source; water_supply_volume; water_supply_volume_unit; water_supply_volume_basis; water_supply_volume_method; water_supply_volume_state; water_supply_volume_sample_time; water_supply_volume_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual compatible registers including real reset/rollover adjustments OR actual integrated interval quantity; multiplier/conversion only when not already applied. Power*duration only same actual interval-average including cycling/holding/standby, not nameplate/instantaneous or integrated kWh again. Fuel stock and actual burn independent; net receipts exclude packaging/cylinder tare, retained recovery closing. Volume-density and temperature/pressure native sources required when used; useful purchased heat/cooling versus fuel/conversion assets/provider scope exclusive. Include actual lodging, activity, bathroom/hotwater/support and necessary readiness; actual kitchen component allocation separate, not whole meter counted twice. Supply water does not measure wastewater. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual energy kWh/MJ, fuel mass/volume, water m3 and each native conversion/state/time unit | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_camp_supplies | camp_session_service | Actual nonfood supplies and matched UNUSED returns | Net material stock and actual task issue/return | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; material_SKU; formulation_identity; actual_purpose; source_input_row; stock_scope_id; gross_or_consumed_view; matched_unused_return_id; actual_receiver_acceptance; internal_recovery_ids; EACH_or_TOTAL; composition_definition; composition_source; prepared_solution_concentrate_nonadditive; waste_fate_links; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_sample_time; opening_stock_source; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; receipt_container_tare; receipt_container_tare_unit; receipt_container_tare_basis; receipt_container_tare_method; receipt_container_tare_state; receipt_container_tare_sample_time; receipt_container_tare_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_stock_including_recovery; closing_stock_including_recovery_unit; closing_stock_including_recovery_basis; closing_stock_including_recovery_method; closing_stock_including_recovery_state; closing_stock_including_recovery_sample_time; closing_stock_including_recovery_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_sample_time; actual_count_source; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_sample_time; per_piece_mass_source; actual_use; actual_use_unit; actual_use_basis; actual_use_method; actual_use_state; actual_use_sample_time; actual_use_source; actual_loss; actual_loss_unit; actual_loss_basis; actual_loss_method; actual_loss_state; actual_loss_sample_time; actual_loss_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect each actual distinct SKU/state stock. Net external receipts exclude supply-container tare on compatible state/units; opening+net receipts-closing includes retained recovery once. Choose gross S/N INPUT with same-source/state UNUSED return/N OUTPUT OR consumed-only (S-unused_return)/N INPUT and OMIT matching OUTPUT. No double deduction, used recovered fluid, reusable asset or unrelated stock netting. Actual prepared solution OR concentrate+dilution components, never add both; water already in supplied solution is not another input. EACH actual count once, TOTAL unchanged; waste retains original supply burden. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Each actual material-native quantity, kg if compatible; independent item/volume/density/composition units | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_camp_assets | camp_session_service | Full-life assets/reusables and actual transfer/retirement | Actual complete asset/component life and all-user responsibility | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; asset_id; component_id; asset_BOM_role; actual_asset_state; actual_site_land_occupation_transformation_scope; land_prior_after_state; land_coverage_owner; actual_land_dataset_link; land_quantity; land_quantity_unit; land_quantity_basis; land_quantity_method; land_quantity_state; land_quantity_sample_time; land_quantity_source; physical_owner; operator_responsibility; node_component_scope; all_user_all_period_records; manufacture_install_scope; maintenance_event_ids; replacement_event_ids; EOL_scope; observed_history_source; remaining_service_source; termination_method_source; equivalence_definition_source; idle_capacity_responsibility_in_numerator; provider_fullasset_overlap; actual_retirement_or_usable_transfer; receiver_id; remaining_life_owner; whole_part_retained_content_exclusion; identical_EOL_transport_treatment_coverage; asset_native_quantity; asset_native_quantity_unit; asset_native_quantity_basis; asset_native_quantity_method; asset_native_quantity_state; asset_native_quantity_sample_time; asset_native_quantity_source; component_native_quantity; component_native_quantity_unit; component_native_quantity_basis; component_native_quantity_method; component_native_quantity_state; component_native_quantity_sample_time; component_native_quantity_source; job_used_driver; job_used_driver_unit; job_used_driver_basis; job_used_driver_method; job_used_driver_state; job_used_driver_sample_time; job_used_driver_source; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_sample_time; observed_all_user_driver_source; sourced_remaining_driver; sourced_remaining_driver_unit; sourced_remaining_driver_basis; sourced_remaining_driver_method; sourced_remaining_driver_state; sourced_remaining_driver_sample_time; sourced_remaining_driver_source; complete_lifetime_driver; complete_lifetime_driver_unit; complete_lifetime_driver_basis; complete_lifetime_driver_method; complete_lifetime_driver_state; complete_lifetime_driver_sample_time; complete_lifetime_driver_source; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_sample_time; driver_equivalence_source; actual_item_count; actual_item_count_unit; actual_item_count_basis; actual_item_count_method; actual_item_count_state; actual_item_count_sample_time; actual_item_count_source; native_unit_mass; native_unit_mass_unit; native_unit_mass_basis; native_unit_mass_method; native_unit_mass_state; native_unit_mass_sample_time; native_unit_mass_source; retired_net_mass; retired_net_mass_unit; retired_net_mass_basis; retired_net_mass_method; retired_net_mass_state; retired_net_mass_sample_time; retired_net_mass_source; retained_component_mass; retained_component_mass_unit; retained_component_mass_basis; retained_component_mass_method; retained_component_mass_state; retained_component_mass_sample_time; retained_component_mass_source |  Actual camp/activity/kitchen site land occupation and real land transformation interfaces belong to the actual site/asset/provider coverage matrix when inside selected full-chain responsibility. Collect actual spatial/temporal boundary, prior/after state and native area/time or transformation unit/basis/method/state/sampletime/source and actual coverage owner. Covered identical asset/provider interfaces are not repeated. Uncovered actual interfaces must be completed integrated once, with actual source/native quantity/state/time/owner/coverage before full-chain use; otherwise incomplete. Do not infer land class/conversion/factor from a marketed camp site, and do not equate land quantities to Count asset units. Inventory full camp buildings/siteworks/fitout/FF&E/shared systems, activity structures/gear/safety equipment/ICT, linen and supports manufacture-install-maintenance-actual replacement-EOL. Job, observed, sourced remaining and complete all-user lifetime drivers need own native evidence/equivalence/termination/uncertainty/update. Lifetime=observed+sourced remaining compatible all-user responsibility, not annualN or nominal capacity with idle shares omitted. Capacity/calendar drivers must assign necessary idle/standby shares to real responsible pools too. One full asset OR lifecycle-complete provider; actual omitted duties actually integrated once before use. Whole/part/mixture contents nonadditive; physical usable/Waste exits and remaining responsibility actual, identical EOL transport/treatment covered once. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual asset/component native quantity and compatible job/observed/remaining/lifetime driver; Item(s) equivalents only with evidence | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_camp_providers | camp_session_service | Actual complementary physical service result and coverage | Actual provider-native performed result/availability and completed stage matrix | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; provider_id; contract_service_id; actual_result_id; performed_available_declined_failed_status; actual_result_gate; native_result_definition; source_quality_acceptance; actual_other_clients; actual_service_covered_material_energy_water; covered_assets_laundry_freight_receiver; missing_actual_stages; completed_integration_dataset_link; integration_time; integration_time_zone; integration_owner_source; raw_converted_attributed_perreference_package_state; actual_direct_overlap_exclusions; actual_native_result; actual_native_result_unit; actual_native_result_basis; actual_native_result_method; actual_native_result_state; actual_native_result_sample_time; actual_native_result_source; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_sample_time; physical_equivalence_source; completed_missing_stage_quantity; completed_missing_stage_quantity_unit; completed_missing_stage_quantity_basis; completed_missing_stage_quantity_method; completed_missing_stage_quantity_state; completed_missing_stage_quantity_sample_time; completed_missing_stage_quantity_source | Collect actual complementary service in physical native unit/quality/scope, not fee/salary/order/hour automatically Item(s). Explicit result/availability evidence, material-energy-water/asset/laundry/freight/receiver responsibilities and all-client scope. Actual outsourced activity/support/cleaning only; parent camp bundle still includes food/lodging/recreation, not a lodging-only subtraction. Apply equivalence/share only if not already converted/attributed. Missing actual duties require completed linked native quantity/source/time/owner/coverage integration once before full-chain use; a planned supplement is not completion. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual provider-native result and evidenced dimensional equivalence; Item(s) only when truly supported | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_camp_fluids | camp_session_service | Actual named equipment-fluid stock, supply and distinct fates | Actual chemical/system/lot-role stock and recovery ledger | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; system_id; fluid_chemical_blend_SKU; composition_definition_source; lot_charge_role_id; disjoint_stock_role_membership; factory_charge_asset_owner; new_factory_receipt_not_opening_or_other_receipt; other_receipt_exit_named_exclusion_ids; standalone_supply_source; UNUSED_substock_id; same_source_same_state_unused_evidence; matched_unused_return_id; used_recovery_source_state; internal_charge_recovery_transfer_ids; retained_recovery_or_external_exit; receiver_id; usable_Waste_acceptance; whole_asset_part_capture_retained_content_exclusion; exact_species_medium_release_link; stock_view; treatment_transport_asset_provider_coverage; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_sample_time; opening_installed_source; opening_stored_excluding_recovered; opening_stored_excluding_recovered_unit; opening_stored_excluding_recovered_basis; opening_stored_excluding_recovered_method; opening_stored_excluding_recovered_state; opening_stored_excluding_recovered_sample_time; opening_stored_excluding_recovered_source; opening_recovered; opening_recovered_unit; opening_recovered_basis; opening_recovered_method; opening_recovered_state; opening_recovered_sample_time; opening_recovered_source; new_factory_charge_receipt; new_factory_charge_receipt_unit; new_factory_charge_receipt_basis; new_factory_charge_receipt_method; new_factory_charge_receipt_state; new_factory_charge_receipt_sample_time; new_factory_charge_receipt_source; net_standalone_receipts; net_standalone_receipts_unit; net_standalone_receipts_basis; net_standalone_receipts_method; net_standalone_receipts_state; net_standalone_receipts_sample_time; net_standalone_receipts_source; other_actual_receipts_excluding_named; other_actual_receipts_excluding_named_unit; other_actual_receipts_excluding_named_basis; other_actual_receipts_excluding_named_method; other_actual_receipts_excluding_named_state; other_actual_receipts_excluding_named_sample_time; other_actual_receipts_excluding_named_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored_excluding_recovered; closing_stored_excluding_recovered_unit; closing_stored_excluding_recovered_basis; closing_stored_excluding_recovered_method; closing_stored_excluding_recovered_state; closing_stored_excluding_recovered_sample_time; closing_stored_excluding_recovered_source; closing_recovered; closing_recovered_unit; closing_recovered_basis; closing_recovered_method; closing_recovered_state; closing_recovered_sample_time; closing_recovered_source; unused_standalone_return; unused_standalone_return_unit; unused_standalone_return_basis; unused_standalone_return_method; unused_standalone_return_state; unused_standalone_return_sample_time; unused_standalone_return_source; usable_used_recovery_export; usable_used_recovery_export_unit; usable_used_recovery_export_basis; usable_used_recovery_export_method; usable_used_recovery_export_state; usable_used_recovery_export_sample_time; usable_used_recovery_export_source; contained_fluid_waste; contained_fluid_waste_unit; contained_fluid_waste_basis; contained_fluid_waste_method; contained_fluid_waste_state; contained_fluid_waste_sample_time; contained_fluid_waste_source; retained_in_whole_asset_waste; retained_in_whole_asset_waste_unit; retained_in_whole_asset_waste_basis; retained_in_whole_asset_waste_method; retained_in_whole_asset_waste_state; retained_in_whole_asset_waste_sample_time; retained_in_whole_asset_waste_source; retained_in_part_waste; retained_in_part_waste_unit; retained_in_part_waste_basis; retained_in_part_waste_method; retained_in_part_waste_state; retained_in_part_waste_sample_time; retained_in_part_waste_source; actual_direct_release; actual_direct_release_unit; actual_direct_release_basis; actual_direct_release_method; actual_direct_release_state; actual_direct_release_sample_time; actual_direct_release_source; other_actual_exits_excluding_named; other_actual_exits_excluding_named_unit; other_actual_exits_excluding_named_basis; other_actual_exits_excluding_named_method; other_actual_exits_excluding_named_state; other_actual_exits_excluding_named_sample_time; other_actual_exits_excluding_named_source; explicit_unknown_residual; explicit_unknown_residual_unit; explicit_unknown_residual_basis; explicit_unknown_residual_method; explicit_unknown_residual_state; explicit_unknown_residual_sample_time; explicit_unknown_residual_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source | Trace every actual chemical/blend/system and disjoint stock/charge/lot role. Stored excludes separately listed recovered stock; factory receipt only actual new entry not also opening/other receipt, other terms exclude all named terms. Internal charge/recovery cancels, not new external supply. Reconcile independent actual receipts/stocks/exports/wastes/retained asset contents/measurements and explicit unknown; unknown/top-up not emission or zero. Factory charge upstream burden belongs once to fullasset or actual supplement. Only UNUSED same-source/state standalone substock actual matched unused return may use consumed-only deduction/OMIT. All USED recovered fluid, factory or standalone origin, has actual separate export state, not unused new material, no manufacturing deduction/negative input/automatic credit. Actual contained Waste and direct species/medium distinct; whole/part contents nonadditive. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual native chemical/blend/component mass and compatible sourced conversion; no default composition or leakage | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_camp_freight | camp_session_service | Unique actual cargo load-leg and its own resource share | Actual packed cargo, repetition and distance records | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; load_id; leg_id; unique_load_leg_key; cargo_membership_ids; EACH_or_TOTAL; actual_packed_wet_dry_state; original_added_pack_supports; gross_scope; noncargo_tare_scope; provider_delivered_coverage; receiver_transport_coverage; empty_return_coverage; direct_already_attributed_state; record_share_source; payload; payload_unit; payload_basis; payload_method; payload_state; payload_sample_time; payload_source; vehicle_gross; vehicle_gross_unit; vehicle_gross_basis; vehicle_gross_method; vehicle_gross_state; vehicle_gross_sample_time; vehicle_gross_source; vehicle_noncargo_tare; vehicle_noncargo_tare_unit; vehicle_noncargo_tare_basis; vehicle_noncargo_tare_method; vehicle_noncargo_tare_state; vehicle_noncargo_tare_sample_time; vehicle_noncargo_tare_source; repeated_load_count; repeated_load_count_unit; repeated_load_count_basis; repeated_load_count_method; repeated_load_count_state; repeated_load_count_sample_time; repeated_load_count_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_sample_time; payload_conversion_source; gross_conversion; gross_conversion_unit; gross_conversion_basis; gross_conversion_method; gross_conversion_state; gross_conversion_sample_time; gross_conversion_source; tare_conversion; tare_conversion_unit; tare_conversion_basis; tare_conversion_method; tare_conversion_state; tare_conversion_sample_time; tare_conversion_source; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_sample_time; distance_conversion_source; that_record_share; that_record_share_unit; that_record_share_basis; that_record_share_method; that_record_share_state; that_record_share_sample_time; that_record_share_source | Use actual whole as-carried payload OR compatible same-state vehicle gross minus ONLY vehicle/noncargo tare. Keep actual food/textile moisture and all carried packaging/containers/supports; edible dry food/dry laundry throughput not cargo. EACH actual compatible repetition once, TOTAL unchanged. THAT-record share from compatible target/positive complete all-consumer physical scope goes INSIDE unique SUM(payload*distance*that_record_share); native conversions before sum, positive same-target N once. Already attributed/share-applied or perreference not applied twice. Actual delivered-provider/receiver/empty-return duty reconciled once, guest travel not disguised as goods freight. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Each actual native mass/distance/count and compatible kg*km conversion | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_camp_fates | camp_session_service | Actual distinct receivers, genuine mixtures and direct water source | Actual source/event/receiver transfer and retained components | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; actual_stream_id; origin_material_asset_batch_participant; origin_guest_operator_provider; collection_responsibility; source_event_id; receiver_id; actual_useful_Waste_status_source; actual_usable_acceptance; contained_or_direct_medium; environmental_source_location; mixture_or_separate_stream; mixture_membership_source; nonadditive_origin_component_view; actual_plate_return_not_unserved; retained_prepared_stock_exclusion; whole_part_content_exclusions; actual_treatment_transport_owner; identical_asset_provider_EOL_coverage; unused_supply_return_match; composition_definition_source; actual_fate_source; actual_received_net_quantity; actual_received_net_quantity_unit; actual_received_net_quantity_basis; actual_received_net_quantity_method; actual_received_net_quantity_state; actual_received_net_quantity_sample_time; actual_received_net_quantity_source; actual_source_withdrawal_volume; actual_source_withdrawal_volume_unit; actual_source_withdrawal_volume_basis; actual_source_withdrawal_volume_method; actual_source_withdrawal_volume_state; actual_source_withdrawal_volume_sample_time; actual_source_withdrawal_volume_source; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_volume_basis; contained_effluent_volume_method; contained_effluent_volume_state; contained_effluent_volume_sample_time; contained_effluent_volume_source; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_sample_time; whole_stream_mass_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; food_retained_water; food_retained_water_unit; food_retained_water_basis; food_retained_water_method; food_retained_water_state; food_retained_water_sample_time; food_retained_water_source; retained_chemical_fluid; retained_chemical_fluid_unit; retained_chemical_fluid_basis; retained_chemical_fluid_method; retained_chemical_fluid_state; retained_chemical_fluid_sample_time; retained_chemical_fluid_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; actual_usable_transfer_mass; actual_usable_transfer_mass_unit; actual_usable_transfer_mass_basis; actual_usable_transfer_mass_method; actual_usable_transfer_mass_state; actual_usable_transfer_mass_sample_time; actual_usable_transfer_mass_source; actual_unserved_discard_mass; actual_unserved_discard_mass_unit; actual_unserved_discard_mass_basis; actual_unserved_discard_mass_method; actual_unserved_discard_mass_state; actual_unserved_discard_mass_sample_time; actual_unserved_discard_mass_source; actual_plate_return_mass; actual_plate_return_mass_unit; actual_plate_return_mass_basis; actual_plate_return_mass_method; actual_plate_return_mass_state; actual_plate_return_mass_sample_time; actual_plate_return_mass_source; actual_packaging_mass; actual_packaging_mass_unit; actual_packaging_mass_basis; actual_packaging_mass_method; actual_packaging_mass_state; actual_packaging_mass_sample_time; actual_packaging_mass_source | Record actual participant/operator-origin refuse, cleanup/packaging and effluent by distinct real state/receiver; guest-origin waste duties do not import guest-bought food/material production. Each distinct actual receiver stream expands separately; genuine physical mixture whole OR exclusive components, not both. Actual contained sewer/fluid is Waste, direct vapour requires Mass/air species evidence, no supply-minus-unknown residual as wastewater. Actual direct water abstraction source/quantity separate from purchased supply; independently owned plant requires reviewed route. Fullasset/provider receiver transport/treatment only once, actual missing treatment integrated. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Each actual stream/component native mass/volume/content; independent compatible density/temperature if used | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_camp_releases | camp_session_service | Actual exact species/particle and environmental medium | Actual independent measurement or compatible activity-factor method | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; event_id; actual_operation_system_batch; exact_species_identity; reported_component_or_blend_basis; particle_size_class; receiving_medium; environmental_location; measurement_population; factor_identity_source; factor_complete_composition_fate_coverage; composition_method_source; actual_fate_basis_source; gas_state_method; unknown_residual_status; contained_capture_exclusion; provider_asset_release_coverage; measured_species_quantity; measured_species_quantity_unit; measured_species_quantity_basis; measured_species_quantity_method; measured_species_quantity_state; measured_species_quantity_sample_time; measured_species_quantity_source; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion_factor; gas_conversion_factor_unit; gas_conversion_factor_basis; gas_conversion_factor_method; gas_conversion_factor_state; gas_conversion_factor_sample_time; gas_conversion_factor_source; gas_temperature; gas_temperature_unit; gas_temperature_basis; gas_temperature_method; gas_temperature_state; gas_temperature_sample_time; gas_temperature_source; gas_pressure; gas_pressure_unit; gas_pressure_basis; gas_pressure_method; gas_pressure_state; gas_pressure_sample_time; gas_pressure_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Establish actual exact substance/basis/particle and air/water/soil medium before concrete binding. Use independently measured species amount OR compatible actual activity*applicable factor, each native unit/basis/method/state/time/source. Apply composition/fate/gas conversion only when method actually requires it and factor has not already covered it. Water vapour is actual Mass-to-air evidence, never contained Waste; food moisture loss/boiling/top-up/stock discrepancy/odour alone neither quantifies release nor proves zero. Actual emitted refrigerant blend composition cannot be default supply mixture; captured/contained/provider-covered streams are not duplicate direct releases. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Each actual native species/activity/factor/fraction/gas temperature-pressure unit | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_utilities | on_site_meal_preparation | Actual node energy/fuel/water duties | Actual meter, interval and fuel-stock records | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; utility_identity; carrier_SKU; supplier_gate; meter_id; register_or_interval; meter_valid_version; reset_rollover_adjustment_source; already_applied_multiplier; actual_estimate_status; averaging_population; actual_device_cycling_idle_scope; actual_thermal_delivery_state; thermal_provider_scope; fuel_stock_scope; matched_unused_fuel_return; actual_source_location; purchased_or_direct_source; camp_kitchen_meter_boundary; recipe_water_exclusion; register_open; register_open_unit; register_open_basis; register_open_method; register_open_state; register_open_sample_time; register_open_source; register_close; register_close_unit; register_close_basis; register_close_method; register_close_state; register_close_sample_time; register_close_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; interval_quantity; interval_quantity_unit; interval_quantity_basis; interval_quantity_method; interval_quantity_state; interval_quantity_sample_time; interval_quantity_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; net_fuel_receipts; net_fuel_receipts_unit; net_fuel_receipts_basis; net_fuel_receipts_method; net_fuel_receipts_state; net_fuel_receipts_sample_time; net_fuel_receipts_source; fuel_closing_including_recovery; fuel_closing_including_recovery_unit; fuel_closing_including_recovery_basis; fuel_closing_including_recovery_method; fuel_closing_including_recovery_state; fuel_closing_including_recovery_sample_time; fuel_closing_including_recovery_source; unused_fuel_return; unused_fuel_return_unit; unused_fuel_return_basis; unused_fuel_return_method; unused_fuel_return_state; unused_fuel_return_sample_time; unused_fuel_return_source; actual_burn; actual_burn_unit; actual_burn_basis; actual_burn_method; actual_burn_state; actual_burn_sample_time; actual_burn_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_pressure; density_pressure_unit; density_pressure_basis; density_pressure_method; density_pressure_state; density_pressure_sample_time; density_pressure_source; useful_thermal_energy; useful_thermal_energy_unit; useful_thermal_energy_basis; useful_thermal_energy_method; useful_thermal_energy_state; useful_thermal_energy_sample_time; useful_thermal_energy_source; delivered_temperature; delivered_temperature_unit; delivered_temperature_basis; delivered_temperature_method; delivered_temperature_state; delivered_temperature_sample_time; delivered_temperature_source; water_supply_volume; water_supply_volume_unit; water_supply_volume_basis; water_supply_volume_method; water_supply_volume_state; water_supply_volume_sample_time; water_supply_volume_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual compatible registers including real reset/rollover adjustments OR actual integrated interval quantity; multiplier/conversion only when not already applied. Power*duration only same actual interval-average including cycling/holding/standby, not nameplate/instantaneous or integrated kWh again. Fuel stock and actual burn independent; net receipts exclude packaging/cylinder tare, retained recovery closing. Volume-density and temperature/pressure native sources required when used; useful purchased heat/cooling versus fuel/conversion assets/provider scope exclusive. Include actual preparation/cooking/refrigeration/holding/extraction/dishwashing/clean-down; recipe composition water separate by actual enduse, not removed altogether. Supply water does not measure wastewater. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual energy kWh/MJ, fuel mass/volume, water m3 and each native conversion/state/time unit | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_supplies | on_site_meal_preparation | Actual nonfood supplies and matched UNUSED returns | Net material stock and actual task issue/return | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; material_SKU; formulation_identity; actual_purpose; source_input_row; stock_scope_id; gross_or_consumed_view; matched_unused_return_id; actual_receiver_acceptance; internal_recovery_ids; EACH_or_TOTAL; composition_definition; composition_source; prepared_solution_concentrate_nonadditive; waste_fate_links; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_sample_time; opening_stock_source; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; receipt_container_tare; receipt_container_tare_unit; receipt_container_tare_basis; receipt_container_tare_method; receipt_container_tare_state; receipt_container_tare_sample_time; receipt_container_tare_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_stock_including_recovery; closing_stock_including_recovery_unit; closing_stock_including_recovery_basis; closing_stock_including_recovery_method; closing_stock_including_recovery_state; closing_stock_including_recovery_sample_time; closing_stock_including_recovery_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_sample_time; actual_count_source; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_sample_time; per_piece_mass_source; actual_use; actual_use_unit; actual_use_basis; actual_use_method; actual_use_state; actual_use_sample_time; actual_use_source; actual_loss; actual_loss_unit; actual_loss_basis; actual_loss_method; actual_loss_state; actual_loss_sample_time; actual_loss_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect each actual distinct SKU/state stock. Net external receipts exclude supply-container tare on compatible state/units; opening+net receipts-closing includes retained recovery once. Choose gross S/N INPUT with same-source/state UNUSED return/N OUTPUT OR consumed-only (S-unused_return)/N INPUT and OMIT matching OUTPUT. No double deduction, used recovered fluid, reusable asset or unrelated stock netting. Actual prepared solution OR concentrate+dilution components, never add both; water already in supplied solution is not another input. EACH actual count once, TOTAL unchanged; waste retains original supply burden. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Each actual material-native quantity, kg if compatible; independent item/volume/density/composition units | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_assets | on_site_meal_preparation | Full-life assets/reusables and actual transfer/retirement | Actual complete asset/component life and all-user responsibility | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; asset_id; component_id; asset_BOM_role; actual_asset_state; actual_site_land_occupation_transformation_scope; land_prior_after_state; land_coverage_owner; actual_land_dataset_link; land_quantity; land_quantity_unit; land_quantity_basis; land_quantity_method; land_quantity_state; land_quantity_sample_time; land_quantity_source; physical_owner; operator_responsibility; node_component_scope; all_user_all_period_records; manufacture_install_scope; maintenance_event_ids; replacement_event_ids; EOL_scope; observed_history_source; remaining_service_source; termination_method_source; equivalence_definition_source; idle_capacity_responsibility_in_numerator; provider_fullasset_overlap; actual_retirement_or_usable_transfer; receiver_id; remaining_life_owner; whole_part_retained_content_exclusion; identical_EOL_transport_treatment_coverage; asset_native_quantity; asset_native_quantity_unit; asset_native_quantity_basis; asset_native_quantity_method; asset_native_quantity_state; asset_native_quantity_sample_time; asset_native_quantity_source; component_native_quantity; component_native_quantity_unit; component_native_quantity_basis; component_native_quantity_method; component_native_quantity_state; component_native_quantity_sample_time; component_native_quantity_source; job_used_driver; job_used_driver_unit; job_used_driver_basis; job_used_driver_method; job_used_driver_state; job_used_driver_sample_time; job_used_driver_source; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_sample_time; observed_all_user_driver_source; sourced_remaining_driver; sourced_remaining_driver_unit; sourced_remaining_driver_basis; sourced_remaining_driver_method; sourced_remaining_driver_state; sourced_remaining_driver_sample_time; sourced_remaining_driver_source; complete_lifetime_driver; complete_lifetime_driver_unit; complete_lifetime_driver_basis; complete_lifetime_driver_method; complete_lifetime_driver_state; complete_lifetime_driver_sample_time; complete_lifetime_driver_source; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_sample_time; driver_equivalence_source; actual_item_count; actual_item_count_unit; actual_item_count_basis; actual_item_count_method; actual_item_count_state; actual_item_count_sample_time; actual_item_count_source; native_unit_mass; native_unit_mass_unit; native_unit_mass_basis; native_unit_mass_method; native_unit_mass_state; native_unit_mass_sample_time; native_unit_mass_source; retired_net_mass; retired_net_mass_unit; retired_net_mass_basis; retired_net_mass_method; retired_net_mass_state; retired_net_mass_sample_time; retired_net_mass_source; retained_component_mass; retained_component_mass_unit; retained_component_mass_basis; retained_component_mass_method; retained_component_mass_state; retained_component_mass_sample_time; retained_component_mass_source |  Actual camp/activity/kitchen site land occupation and real land transformation interfaces belong to the actual site/asset/provider coverage matrix when inside selected full-chain responsibility. Collect actual spatial/temporal boundary, prior/after state and native area/time or transformation unit/basis/method/state/sampletime/source and actual coverage owner. Covered identical asset/provider interfaces are not repeated. Uncovered actual interfaces must be completed integrated once, with actual source/native quantity/state/time/owner/coverage before full-chain use; otherwise incomplete. Do not infer land class/conversion/factor from a marketed camp site, and do not equate land quantities to Count asset units. Inventory full kitchen/dining building share, cooking/refrigeration/extraction/dishwashing equipment, counters, utensils, reusable tableware and supports manufacture-install-maintenance-actual replacement-EOL. Job, observed, sourced remaining and complete all-user lifetime drivers need own native evidence/equivalence/termination/uncertainty/update. Lifetime=observed+sourced remaining compatible all-user responsibility, not annualN or nominal capacity with idle shares omitted. Capacity/calendar drivers must assign necessary idle/standby shares to real responsible pools too. One full asset OR lifecycle-complete provider; actual omitted duties actually integrated once before use. Whole/part/mixture contents nonadditive; physical usable/Waste exits and remaining responsibility actual, identical EOL transport/treatment covered once. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual asset/component native quantity and compatible job/observed/remaining/lifetime driver; Item(s) equivalents only with evidence | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_providers | on_site_meal_preparation | Actual complementary physical service result and coverage | Actual provider-native performed result/availability and completed stage matrix | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; provider_id; contract_service_id; actual_result_id; performed_available_declined_failed_status; actual_result_gate; native_result_definition; source_quality_acceptance; actual_other_clients; actual_service_covered_material_energy_water; covered_assets_laundry_freight_receiver; missing_actual_stages; completed_integration_dataset_link; integration_time; integration_time_zone; integration_owner_source; raw_converted_attributed_perreference_package_state; actual_direct_overlap_exclusions; actual_native_result; actual_native_result_unit; actual_native_result_basis; actual_native_result_method; actual_native_result_state; actual_native_result_sample_time; actual_native_result_source; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_sample_time; physical_equivalence_source; completed_missing_stage_quantity; completed_missing_stage_quantity_unit; completed_missing_stage_quantity_basis; completed_missing_stage_quantity_method; completed_missing_stage_quantity_state; completed_missing_stage_quantity_sample_time; completed_missing_stage_quantity_source | Collect actual complementary service in physical native unit/quality/scope, not fee/salary/order/hour automatically Item(s). Explicit result/availability evidence, material-energy-water/asset/laundry/freight/receiver responsibilities and all-client scope. Do not substitute an invented complete provider meal for actual on-site preparation, or add provider ingredients/cooking already covered by the kitchen. Apply equivalence/share only if not already converted/attributed. Missing actual duties require completed linked native quantity/source/time/owner/coverage integration once before full-chain use; a planned supplement is not completion. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual provider-native result and evidenced dimensional equivalence; Item(s) only when truly supported | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_fluids | on_site_meal_preparation | Actual named equipment-fluid stock, supply and distinct fates | Actual chemical/system/lot-role stock and recovery ledger | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; system_id; fluid_chemical_blend_SKU; composition_definition_source; lot_charge_role_id; disjoint_stock_role_membership; factory_charge_asset_owner; new_factory_receipt_not_opening_or_other_receipt; other_receipt_exit_named_exclusion_ids; standalone_supply_source; UNUSED_substock_id; same_source_same_state_unused_evidence; matched_unused_return_id; used_recovery_source_state; internal_charge_recovery_transfer_ids; retained_recovery_or_external_exit; receiver_id; usable_Waste_acceptance; whole_asset_part_capture_retained_content_exclusion; exact_species_medium_release_link; stock_view; treatment_transport_asset_provider_coverage; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_sample_time; opening_installed_source; opening_stored_excluding_recovered; opening_stored_excluding_recovered_unit; opening_stored_excluding_recovered_basis; opening_stored_excluding_recovered_method; opening_stored_excluding_recovered_state; opening_stored_excluding_recovered_sample_time; opening_stored_excluding_recovered_source; opening_recovered; opening_recovered_unit; opening_recovered_basis; opening_recovered_method; opening_recovered_state; opening_recovered_sample_time; opening_recovered_source; new_factory_charge_receipt; new_factory_charge_receipt_unit; new_factory_charge_receipt_basis; new_factory_charge_receipt_method; new_factory_charge_receipt_state; new_factory_charge_receipt_sample_time; new_factory_charge_receipt_source; net_standalone_receipts; net_standalone_receipts_unit; net_standalone_receipts_basis; net_standalone_receipts_method; net_standalone_receipts_state; net_standalone_receipts_sample_time; net_standalone_receipts_source; other_actual_receipts_excluding_named; other_actual_receipts_excluding_named_unit; other_actual_receipts_excluding_named_basis; other_actual_receipts_excluding_named_method; other_actual_receipts_excluding_named_state; other_actual_receipts_excluding_named_sample_time; other_actual_receipts_excluding_named_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored_excluding_recovered; closing_stored_excluding_recovered_unit; closing_stored_excluding_recovered_basis; closing_stored_excluding_recovered_method; closing_stored_excluding_recovered_state; closing_stored_excluding_recovered_sample_time; closing_stored_excluding_recovered_source; closing_recovered; closing_recovered_unit; closing_recovered_basis; closing_recovered_method; closing_recovered_state; closing_recovered_sample_time; closing_recovered_source; unused_standalone_return; unused_standalone_return_unit; unused_standalone_return_basis; unused_standalone_return_method; unused_standalone_return_state; unused_standalone_return_sample_time; unused_standalone_return_source; usable_used_recovery_export; usable_used_recovery_export_unit; usable_used_recovery_export_basis; usable_used_recovery_export_method; usable_used_recovery_export_state; usable_used_recovery_export_sample_time; usable_used_recovery_export_source; contained_fluid_waste; contained_fluid_waste_unit; contained_fluid_waste_basis; contained_fluid_waste_method; contained_fluid_waste_state; contained_fluid_waste_sample_time; contained_fluid_waste_source; retained_in_whole_asset_waste; retained_in_whole_asset_waste_unit; retained_in_whole_asset_waste_basis; retained_in_whole_asset_waste_method; retained_in_whole_asset_waste_state; retained_in_whole_asset_waste_sample_time; retained_in_whole_asset_waste_source; retained_in_part_waste; retained_in_part_waste_unit; retained_in_part_waste_basis; retained_in_part_waste_method; retained_in_part_waste_state; retained_in_part_waste_sample_time; retained_in_part_waste_source; actual_direct_release; actual_direct_release_unit; actual_direct_release_basis; actual_direct_release_method; actual_direct_release_state; actual_direct_release_sample_time; actual_direct_release_source; other_actual_exits_excluding_named; other_actual_exits_excluding_named_unit; other_actual_exits_excluding_named_basis; other_actual_exits_excluding_named_method; other_actual_exits_excluding_named_state; other_actual_exits_excluding_named_sample_time; other_actual_exits_excluding_named_source; explicit_unknown_residual; explicit_unknown_residual_unit; explicit_unknown_residual_basis; explicit_unknown_residual_method; explicit_unknown_residual_state; explicit_unknown_residual_sample_time; explicit_unknown_residual_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source | Trace every actual chemical/blend/system and disjoint stock/charge/lot role. Stored excludes separately listed recovered stock; factory receipt only actual new entry not also opening/other receipt, other terms exclude all named terms. Internal charge/recovery cancels, not new external supply. Reconcile independent actual receipts/stocks/exports/wastes/retained asset contents/measurements and explicit unknown; unknown/top-up not emission or zero. Factory charge upstream burden belongs once to fullasset or actual supplement. Only UNUSED same-source/state standalone substock actual matched unused return may use consumed-only deduction/OMIT. All USED recovered fluid, factory or standalone origin, has actual separate export state, not unused new material, no manufacturing deduction/negative input/automatic credit. Actual contained Waste and direct species/medium distinct; whole/part contents nonadditive. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual native chemical/blend/component mass and compatible sourced conversion; no default composition or leakage | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_freight | on_site_meal_preparation | Unique actual cargo load-leg and its own resource share | Actual packed cargo, repetition and distance records | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; load_id; leg_id; unique_load_leg_key; cargo_membership_ids; EACH_or_TOTAL; actual_packed_wet_dry_state; original_added_pack_supports; gross_scope; noncargo_tare_scope; provider_delivered_coverage; receiver_transport_coverage; empty_return_coverage; direct_already_attributed_state; record_share_source; payload; payload_unit; payload_basis; payload_method; payload_state; payload_sample_time; payload_source; vehicle_gross; vehicle_gross_unit; vehicle_gross_basis; vehicle_gross_method; vehicle_gross_state; vehicle_gross_sample_time; vehicle_gross_source; vehicle_noncargo_tare; vehicle_noncargo_tare_unit; vehicle_noncargo_tare_basis; vehicle_noncargo_tare_method; vehicle_noncargo_tare_state; vehicle_noncargo_tare_sample_time; vehicle_noncargo_tare_source; repeated_load_count; repeated_load_count_unit; repeated_load_count_basis; repeated_load_count_method; repeated_load_count_state; repeated_load_count_sample_time; repeated_load_count_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_sample_time; payload_conversion_source; gross_conversion; gross_conversion_unit; gross_conversion_basis; gross_conversion_method; gross_conversion_state; gross_conversion_sample_time; gross_conversion_source; tare_conversion; tare_conversion_unit; tare_conversion_basis; tare_conversion_method; tare_conversion_state; tare_conversion_sample_time; tare_conversion_source; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_sample_time; distance_conversion_source; that_record_share; that_record_share_unit; that_record_share_basis; that_record_share_method; that_record_share_state; that_record_share_sample_time; that_record_share_source | Use actual whole as-carried payload OR compatible same-state vehicle gross minus ONLY vehicle/noncargo tare. Keep actual food/textile moisture and all carried packaging/containers/supports; edible dry food/dry laundry throughput not cargo. EACH actual compatible repetition once, TOTAL unchanged. THAT-record share from compatible target/positive complete all-consumer physical scope goes INSIDE unique SUM(payload*distance*that_record_share); native conversions before sum, positive same-target N once. Already attributed/share-applied or perreference not applied twice. Actual delivered-provider/receiver/empty-return duty reconciled once, guest travel not disguised as goods freight. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Each actual native mass/distance/count and compatible kg*km conversion | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_fates | on_site_meal_preparation | Actual distinct receivers, genuine mixtures and direct water source | Actual source/event/receiver transfer and retained components | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; actual_stream_id; origin_material_asset_batch_participant; origin_guest_operator_provider; collection_responsibility; source_event_id; receiver_id; actual_useful_Waste_status_source; actual_usable_acceptance; contained_or_direct_medium; environmental_source_location; mixture_or_separate_stream; mixture_membership_source; nonadditive_origin_component_view; actual_plate_return_not_unserved; retained_prepared_stock_exclusion; whole_part_content_exclusions; actual_treatment_transport_owner; identical_asset_provider_EOL_coverage; unused_supply_return_match; composition_definition_source; actual_fate_source; actual_received_net_quantity; actual_received_net_quantity_unit; actual_received_net_quantity_basis; actual_received_net_quantity_method; actual_received_net_quantity_state; actual_received_net_quantity_sample_time; actual_received_net_quantity_source; actual_source_withdrawal_volume; actual_source_withdrawal_volume_unit; actual_source_withdrawal_volume_basis; actual_source_withdrawal_volume_method; actual_source_withdrawal_volume_state; actual_source_withdrawal_volume_sample_time; actual_source_withdrawal_volume_source; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_volume_basis; contained_effluent_volume_method; contained_effluent_volume_state; contained_effluent_volume_sample_time; contained_effluent_volume_source; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_sample_time; whole_stream_mass_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; food_retained_water; food_retained_water_unit; food_retained_water_basis; food_retained_water_method; food_retained_water_state; food_retained_water_sample_time; food_retained_water_source; retained_chemical_fluid; retained_chemical_fluid_unit; retained_chemical_fluid_basis; retained_chemical_fluid_method; retained_chemical_fluid_state; retained_chemical_fluid_sample_time; retained_chemical_fluid_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; actual_usable_transfer_mass; actual_usable_transfer_mass_unit; actual_usable_transfer_mass_basis; actual_usable_transfer_mass_method; actual_usable_transfer_mass_state; actual_usable_transfer_mass_sample_time; actual_usable_transfer_mass_source; actual_unserved_discard_mass; actual_unserved_discard_mass_unit; actual_unserved_discard_mass_basis; actual_unserved_discard_mass_method; actual_unserved_discard_mass_state; actual_unserved_discard_mass_sample_time; actual_unserved_discard_mass_source; actual_plate_return_mass; actual_plate_return_mass_unit; actual_plate_return_mass_basis; actual_plate_return_mass_method; actual_plate_return_mass_state; actual_plate_return_mass_sample_time; actual_plate_return_mass_source; actual_packaging_mass; actual_packaging_mass_unit; actual_packaging_mass_basis; actual_packaging_mass_method; actual_packaging_mass_state; actual_packaging_mass_sample_time; actual_packaging_mass_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Independently identify actual preparation residuals, unserved prepared discard, post-service plate returns, packaging, spent cleanup and effluent. Plate returns do not reverse delivered meal service or become new ingredient upstream production. A real common bin has ONE received total and nonadditive origin/component audit, not several additive outputs. Retained prepared stock/useful handoff is not automatically waste; recipient usable acceptance actual. Each distinct actual receiver stream expands separately; genuine physical mixture whole OR exclusive components, not both. Actual contained sewer/fluid is Waste, direct vapour requires Mass/air species evidence, no supply-minus-unknown residual as wastewater. Actual direct water abstraction source/quantity separate from purchased supply; independently owned plant requires reviewed route. Fullasset/provider receiver transport/treatment only once, actual missing treatment integrated. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Each actual stream/component native mass/volume/content; independent compatible density/temperature if used | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_releases | on_site_meal_preparation | Actual exact species/particle and environmental medium | Actual independent measurement or compatible activity-factor method | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; event_id; actual_operation_system_batch; exact_species_identity; reported_component_or_blend_basis; particle_size_class; receiving_medium; environmental_location; measurement_population; factor_identity_source; factor_complete_composition_fate_coverage; composition_method_source; actual_fate_basis_source; gas_state_method; unknown_residual_status; contained_capture_exclusion; provider_asset_release_coverage; measured_species_quantity; measured_species_quantity_unit; measured_species_quantity_basis; measured_species_quantity_method; measured_species_quantity_state; measured_species_quantity_sample_time; measured_species_quantity_source; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion_factor; gas_conversion_factor_unit; gas_conversion_factor_basis; gas_conversion_factor_method; gas_conversion_factor_state; gas_conversion_factor_sample_time; gas_conversion_factor_source; gas_temperature; gas_temperature_unit; gas_temperature_basis; gas_temperature_method; gas_temperature_state; gas_temperature_sample_time; gas_temperature_source; gas_pressure; gas_pressure_unit; gas_pressure_basis; gas_pressure_method; gas_pressure_state; gas_pressure_sample_time; gas_pressure_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Establish actual exact substance/basis/particle and air/water/soil medium before concrete binding. Use independently measured species amount OR compatible actual activity*applicable factor, each native unit/basis/method/state/time/source. Apply composition/fate/gas conversion only when method actually requires it and factor has not already covered it. Water vapour is actual Mass-to-air evidence, never contained Waste; food moisture loss/boiling/top-up/stock discrepancy/odour alone neither quantifies release nor proves zero. Actual emitted refrigerant blend composition cannot be default supply mixture; captured/contained/provider-covered streams are not duplicate direct releases. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Each actual native species/activity/factor/fraction/gas temperature-pressure unit | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_camp_sessions | camp_session_service | Final participant-session, profile and actual component fulfilment | Actual participant/programme/package and delivery records | intended_output_id; intended_output_scope; intended_output_recipient; actual_output_handoff_id; actual_output_gate_state; output_quantity; output_quantity_unit; output_quantity_basis; output_quantity_method; output_quantity_state; output_quantity_sample_time; output_quantity_source; record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; participant_id; booking_id_nonexchange; actual_session_id; programme_purpose_general_recreation_not_sport_only; package_scope_source; actual_declared_duration_profile; arrival_departure_records; local_overnight_definition_source; physical_lodging_record_links; meal_provision_event_links; actual_activity_provision_event_links; performed_available_declined_failed_replaced_state; actual_duty_acceptance; session_reversal_links; partial_delivery_scope_and_output; other_partial_output_responsibility; complimentary_status; cancel_noshow_closed_capacity_status; actual_pool_scope_id; crossprofile_non_equivalence_source; unique_fulfilled_participants; unique_fulfilled_participants_unit; unique_fulfilled_participants_basis; unique_fulfilled_participants_method; unique_fulfilled_participants_state; unique_fulfilled_participants_sample_time; unique_fulfilled_participants_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; actual_nights; actual_nights_unit; actual_nights_basis; actual_nights_method; actual_nights_state; actual_nights_sample_time; actual_nights_source; actual_meal_provision_covers; actual_meal_provision_covers_unit; actual_meal_provision_covers_basis; actual_meal_provision_covers_method; actual_meal_provision_covers_state; actual_meal_provision_covers_sample_time; actual_meal_provision_covers_source; actual_served_covers; actual_served_covers_unit; actual_served_covers_basis; actual_served_covers_method; actual_served_covers_state; actual_served_covers_sample_time; actual_served_covers_source; actual_activity_duration; actual_activity_duration_unit; actual_activity_duration_basis; actual_activity_duration_method; actual_activity_duration_state; actual_activity_duration_sample_time; actual_activity_duration_source | Enumerate EVERY actual intended programme/profile/partial service output, camp-support staff-meal responsibility, other-session/visitor meal output and accepted usable-food handoff by actual outputID, recipient, gate/state and native quantity/unit/basis/method/sampletime/source. Target final camp bundle components are not new co-products, real other outputs retain actual scope, and material returns/residues/waste are separately identified. Count each actually fulfilled participant-session once within one declared equivalent package/duration/profile and source-supported camp purpose. Actual lodging+food+multi-recreation duties all included. No reservation/payment/capacity/day-only/sports-only as target; different durations or contents not pooled into generic equal session. Guest declining truly provided meal/activity does not automatically reverse camp fulfilment. Partial supply records actual component services and accepted modified output responsibility; only actual equivalent target fulfilment enters N, no invented fractional session or automatic all-burden charge to another complete product. Actual complimentary physical fulfilment included; actual start/end/timezone/UTCoffset/DST retained, not24hour assumption. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Participant-session Item(s) plus independent actual time/night/meal/activity native units | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_camp_textiles | camp_session_service | Actual reusable textile care and complete laundry boundary | Actual linen batch/handoff/rewash and native dry/wet records | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; textile_id_pool; actual_material_construction; owned_rental_coverage; laundry_provider_batch_id; unique_transfer_ids; actual_linen_change_rewash_task; dry_mass_definition; conditioned_asreceived_state; water_only_sample_definition; same_sample_nonwater_definition; sample_population_source; actual_provider_all_client_records; wash_dry_finish_coverage; energy_water_chemicals_effluent_asset_freight_scope; rental_textile_manufacture_EOL_scope; completed_missing_duty_links; loss_repair_retirement_source; actual_laundry_service_quantity; actual_laundry_service_quantity_unit; actual_laundry_service_quantity_basis; actual_laundry_service_quantity_method; actual_laundry_service_quantity_state; actual_laundry_service_quantity_sample_time; actual_laundry_service_quantity_source; dry_textile_mass; dry_textile_mass_unit; dry_textile_mass_basis; dry_textile_mass_method; dry_textile_mass_state; dry_textile_mass_sample_time; dry_textile_mass_source; wet_carried_textile_mass; wet_carried_textile_mass_unit; wet_carried_textile_mass_basis; wet_carried_textile_mass_method; wet_carried_textile_mass_state; wet_carried_textile_mass_sample_time; wet_carried_textile_mass_source; actual_item_count; actual_item_count_unit; actual_item_count_basis; actual_item_count_method; actual_item_count_state; actual_item_count_sample_time; actual_item_count_source; actual_item_mass; actual_item_mass_unit; actual_item_mass_basis; actual_item_mass_method; actual_item_mass_state; actual_item_mass_sample_time; actual_item_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; asreceived_sample_mass; asreceived_sample_mass_unit; asreceived_sample_mass_basis; asreceived_sample_mass_method; asreceived_sample_mass_state; asreceived_sample_mass_sample_time; asreceived_sample_mass_source; dry_nonwater_sample_mass; dry_nonwater_sample_mass_unit; dry_nonwater_sample_mass_basis; dry_nonwater_sample_mass_method; dry_nonwater_sample_mass_state; dry_nonwater_sample_mass_sample_time; dry_nonwater_sample_mass_source; wet_water_fraction; wet_water_fraction_unit; wet_water_fraction_basis; wet_water_fraction_method; wet_water_fraction_state; wet_water_fraction_sample_time; wet_water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_sample_time; percent_to_ratio_factor_source | Use actual completed laundry service on matched dry-textile/native provider basis, not wet cargo or new textile per wash. Water-only same sample definitions w_wet=m_water/m_asreceived and r_dry=m_water/m_nonwater allow w_wet=r_dry/(1+r_dry) after actual percent conversion; other-volatile LOD/soil not water or pure fibre. Rewash/failed/unused duties consume actual resources once and do not create new camp output. Complete wash/dry/finish/chemicals/energy/water/effluent/assets/freight/rental-textile lifecycle service OR actual completed omitted-stage supplements once. Actual onsite industrial laundry requires route review; no standard kg/session or wash/lifetime cycle. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual dry-textile service kg or supported native laundry unit, independent item/wet mass/water units | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_camp_meal_receipts | camp_session_service | Same real internal meal-provision handoff and its own evidence | Actual source-receiver meal provision and quantity/state links | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; transfer_id; kitchen_source_node; camp_receiver_node; kitchen_batch_ids; actual_meal_occasion_id; actual_target_profile_participants; other_consumer_scope; actual_prepared_ready_held_available_evidence; actual_service_gate_and_acceptance; actual_performed_failed_declined_status; actual_transfer_state; actual_same_scope_native_amount_source; actual_served_vs_available_cover_definition; refill_not_extra_cover_source; actual_food_mass_state_and_composition; already_prepared_input_coverage; internal_not_external_provider; same_N_target_scope_source; zero_handoff_resource_integration_link; explicit_supplement_scope_owner; no_fictitious_positive_handoff; fulfilled_provision_covers; fulfilled_provision_covers_unit; fulfilled_provision_covers_basis; fulfilled_provision_covers_method; fulfilled_provision_covers_state; fulfilled_provision_covers_sample_time; fulfilled_provision_covers_source; actual_served_covers; actual_served_covers_unit; actual_served_covers_basis; actual_served_covers_method; actual_served_covers_state; actual_served_covers_sample_time; actual_served_covers_source; actual_declined_covers; actual_declined_covers_unit; actual_declined_covers_basis; actual_declined_covers_method; actual_declined_covers_state; actual_declined_covers_sample_time; actual_declined_covers_source; actual_refill_portions; actual_refill_portions_unit; actual_refill_portions_basis; actual_refill_portions_method; actual_refill_portions_state; actual_refill_portions_sample_time; actual_refill_portions_source; prepared_food_mass; prepared_food_mass_unit; prepared_food_mass_basis; prepared_food_mass_method; prepared_food_mass_state; prepared_food_mass_sample_time; prepared_food_mass_source; offered_food_mass; offered_food_mass_unit; offered_food_mass_basis; offered_food_mass_method; offered_food_mass_state; offered_food_mass_sample_time; offered_food_mass_source; as_served_food_mass; as_served_food_mass_unit; as_served_food_mass_basis; as_served_food_mass_method; as_served_food_mass_state; as_served_food_mass_sample_time; as_served_food_mass_source; retained_unserved_mass; retained_unserved_mass_unit; retained_unserved_mass_basis; retained_unserved_mass_method; retained_unserved_mass_state; retained_unserved_mass_sample_time; retained_unserved_mass_source; actual_plate_return_mass; actual_plate_return_mass_unit; actual_plate_return_mass_basis; actual_plate_return_mass_method; actual_plate_return_mass_state; actual_plate_return_mass_sample_time; actual_plate_return_mass_source; same_transfer_native_quantity; same_transfer_native_quantity_unit; same_transfer_native_quantity_basis; same_transfer_native_quantity_method; same_transfer_native_quantity_state; same_transfer_native_quantity_sample_time; same_transfer_native_quantity_source | Pair the SAME actual transfer ID, source/receiver nodes, participant/profile/occasion scope, provided service gate/state, native quantity and final N. Meal provision must have actual prepared/ready/held/available and real participant/service-event/acceptance evidence, not scheduled menu, nominal capacity or reserved headcount. Actual served/declined/available covers, refills, food offered/as-served mass/composition/remaining/plate return are distinct; refill not another cover by default, Count neither nutritional nor physical-impact equivalence. Do not fix handoff quantity to1camp reference or buy the same complete provider meal. Handoff is internal: kitchen burdens and parent internal service are linked once, not a second external production demand. Zero actual handoff does not transfer burden through a zero exchange: any real camp-owned necessary kitchen duty must be actually integrated as an exclusive sourced resource supplement/aggregation once with responsibility and coverage links, not a fictional positive meal. No actual integration means incomplete package. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual supported meal-provision occasion/cover Item(s), separate native food/state quantities, same actual final camp reference | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_meal_deliveries | on_site_meal_preparation | Same real internal meal-provision handoff and its own evidence | Actual source-receiver meal provision and quantity/state links | intended_output_id; intended_output_scope; intended_output_recipient; actual_output_handoff_id; actual_output_gate_state; output_quantity; output_quantity_unit; output_quantity_basis; output_quantity_method; output_quantity_state; output_quantity_sample_time; output_quantity_source; record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; transfer_id; kitchen_source_node; camp_receiver_node; kitchen_batch_ids; actual_meal_occasion_id; actual_target_profile_participants; other_consumer_scope; actual_prepared_ready_held_available_evidence; actual_service_gate_and_acceptance; actual_performed_failed_declined_status; actual_transfer_state; actual_same_scope_native_amount_source; actual_served_vs_available_cover_definition; refill_not_extra_cover_source; actual_food_mass_state_and_composition; already_prepared_input_coverage; internal_not_external_provider; same_N_target_scope_source; zero_handoff_resource_integration_link; explicit_supplement_scope_owner; no_fictitious_positive_handoff; fulfilled_provision_covers; fulfilled_provision_covers_unit; fulfilled_provision_covers_basis; fulfilled_provision_covers_method; fulfilled_provision_covers_state; fulfilled_provision_covers_sample_time; fulfilled_provision_covers_source; actual_served_covers; actual_served_covers_unit; actual_served_covers_basis; actual_served_covers_method; actual_served_covers_state; actual_served_covers_sample_time; actual_served_covers_source; actual_declined_covers; actual_declined_covers_unit; actual_declined_covers_basis; actual_declined_covers_method; actual_declined_covers_state; actual_declined_covers_sample_time; actual_declined_covers_source; actual_refill_portions; actual_refill_portions_unit; actual_refill_portions_basis; actual_refill_portions_method; actual_refill_portions_state; actual_refill_portions_sample_time; actual_refill_portions_source; prepared_food_mass; prepared_food_mass_unit; prepared_food_mass_basis; prepared_food_mass_method; prepared_food_mass_state; prepared_food_mass_sample_time; prepared_food_mass_source; offered_food_mass; offered_food_mass_unit; offered_food_mass_basis; offered_food_mass_method; offered_food_mass_state; offered_food_mass_sample_time; offered_food_mass_source; as_served_food_mass; as_served_food_mass_unit; as_served_food_mass_basis; as_served_food_mass_method; as_served_food_mass_state; as_served_food_mass_sample_time; as_served_food_mass_source; retained_unserved_mass; retained_unserved_mass_unit; retained_unserved_mass_basis; retained_unserved_mass_method; retained_unserved_mass_state; retained_unserved_mass_sample_time; retained_unserved_mass_source; actual_plate_return_mass; actual_plate_return_mass_unit; actual_plate_return_mass_basis; actual_plate_return_mass_method; actual_plate_return_mass_state; actual_plate_return_mass_sample_time; actual_plate_return_mass_source; same_transfer_native_quantity; same_transfer_native_quantity_unit; same_transfer_native_quantity_basis; same_transfer_native_quantity_method; same_transfer_native_quantity_state; same_transfer_native_quantity_sample_time; same_transfer_native_quantity_source | Enumerate EVERY actual intended programme/profile/partial service output, camp-support staff-meal responsibility, other-session/visitor meal output and accepted usable-food handoff by actual outputID, recipient, gate/state and native quantity/unit/basis/method/sampletime/source. Target final camp bundle components are not new co-products, real other outputs retain actual scope, and material returns/residues/waste are separately identified. Pair the SAME actual transfer ID, source/receiver nodes, participant/profile/occasion scope, provided service gate/state, native quantity and final N. Meal provision must have actual prepared/ready/held/available and real participant/service-event/acceptance evidence, not scheduled menu, nominal capacity or reserved headcount. Actual served/declined/available covers, refills, food offered/as-served mass/composition/remaining/plate return are distinct; refill not another cover by default, Count neither nutritional nor physical-impact equivalence. Do not fix handoff quantity to1camp reference or buy the same complete provider meal. Handoff is internal: kitchen burdens and parent internal service are linked once, not a second external production demand. Zero actual handoff does not transfer burden through a zero exchange: any real camp-owned necessary kitchen duty must be actually integrated as an exclusive sourced resource supplement/aggregation once with responsibility and coverage links, not a fictional positive meal. No actual integration means incomplete package. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual supported meal-provision occasion/cover Item(s), separate native food/state quantities, same actual final camp reference | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_food_stocks | on_site_meal_preparation | Actual ingredient input stocks and matched UNUSED source returns | Actual purchased/raw-prepared food state, net receipts and issues | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; ingredient_SKU; food_identity; purchased_raw_prepared_cooked_state; actual_supplier_gate; food_edible_asreceived_definition; food_water_bone_skin_definition; packaging_tare_definition; recipe_issue_batch_id; stock_pool_id; stock_internal_return_ids; same_source_state_unused_substock; matched_unused_external_return_id; nonfood_stock_record_link; actual_matched_stock_protocol; matched_source_row_id; gross_or_consumed_supply_convention; actual_storage_loss_receiver; food_upstream_preparation_coverage; component_membership_nonadditive; opening_food_stock; opening_food_stock_unit; opening_food_stock_basis; opening_food_stock_method; opening_food_stock_state; opening_food_stock_sample_time; opening_food_stock_source; gross_external_receipts; gross_external_receipts_unit; gross_external_receipts_basis; gross_external_receipts_method; gross_external_receipts_state; gross_external_receipts_sample_time; gross_external_receipts_source; supply_packaging_tare; supply_packaging_tare_unit; supply_packaging_tare_basis; supply_packaging_tare_method; supply_packaging_tare_state; supply_packaging_tare_sample_time; supply_packaging_tare_source; net_food_receipts; net_food_receipts_unit; net_food_receipts_basis; net_food_receipts_method; net_food_receipts_state; net_food_receipts_sample_time; net_food_receipts_source; internal_return_to_stock; internal_return_to_stock_unit; internal_return_to_stock_basis; internal_return_to_stock_method; internal_return_to_stock_state; internal_return_to_stock_sample_time; internal_return_to_stock_source; closing_food_stock; closing_food_stock_unit; closing_food_stock_basis; closing_food_stock_method; closing_food_stock_state; closing_food_stock_sample_time; closing_food_stock_source; issued_to_recipe; issued_to_recipe_unit; issued_to_recipe_basis; issued_to_recipe_method; issued_to_recipe_state; issued_to_recipe_sample_time; issued_to_recipe_source; unused_external_return; unused_external_return_unit; unused_external_return_basis; unused_external_return_method; unused_external_return_state; unused_external_return_sample_time; unused_external_return_source; actual_storage_discard; actual_storage_discard_unit; actual_storage_discard_basis; actual_storage_discard_method; actual_storage_discard_state; actual_storage_discard_sample_time; actual_storage_discard_source; other_actual_exits; other_actual_exits_unit; other_actual_exits_basis; other_actual_exits_method; other_actual_exits_state; other_actual_exits_sample_time; other_actual_exits_source; unknown_stock_residual; unknown_stock_residual_unit; unknown_stock_residual_basis; unknown_stock_residual_method; unknown_stock_residual_state; unknown_stock_residual_sample_time; unknown_stock_residual_source; asreceived_food_mass; asreceived_food_mass_unit; asreceived_food_mass_basis; asreceived_food_mass_method; asreceived_food_mass_state; asreceived_food_mass_sample_time; asreceived_food_mass_source; edible_food_mass; edible_food_mass_unit; edible_food_mass_basis; edible_food_mass_method; edible_food_mass_state; edible_food_mass_sample_time; edible_food_mass_source; food_water_mass; food_water_mass_unit; food_water_mass_basis; food_water_mass_method; food_water_mass_state; food_water_mass_sample_time; food_water_mass_source; bone_skin_mass; bone_skin_mass_unit; bone_skin_mass_basis; bone_skin_mass_method; bone_skin_mass_state; bone_skin_mass_sample_time; bone_skin_mass_source; dry_nonwater_mass; dry_nonwater_mass_unit; dry_nonwater_mass_basis; dry_nonwater_mass_method; dry_nonwater_mass_state; dry_nonwater_mass_sample_time; dry_nonwater_mass_source; actual_item_count; actual_item_count_unit; actual_item_count_basis; actual_item_count_method; actual_item_count_state; actual_item_count_sample_time; actual_item_count_source; per_item_mass; per_item_mass_unit; per_item_mass_basis; per_item_mass_method; per_item_mass_state; per_item_mass_sample_time; per_item_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source | Identify every actual food/beverage ingredient SKU and supplied state/gate, native asreceived/edible/wet/dry/bone/skin basis. Net material receipts exclude packaging tare, not real bone/skin/water. Track opening+net receipts+actual internal returns against closing/issues/unused outward/actual storage waste/other exits/unknown; internal issues/returns cancel in net upstream supply demand, not new manufacture. Gross S=opening+net external receipts-closing including retained stock, with matched UNUSED return separate OUTPUT OR consumed-only S-unused_return with matching OUTPUT OMITTED. Actual ingredient loss keeps upstream production burden; used prepared surplus/plate returns are not UNUSED original ingredients. Nonfood unused returns require linked actual cp_kitchen_supplies source stock and same-source/state match, no cross-SKU netting or duplicate original duty. Already-prepared purchased-food upstream cooking coverage explicit; do not repeat the same step. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Each actual ingredient/material native quantity and state, supported net kg/item/volume conversions | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |
| cp_kitchen_recipes | on_site_meal_preparation | Actual composition/treatment input state, prepared output and residuals | Actual recipe/batch, state conversion and independent fate records | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; recipe_id_version; actual_batch_id; actual_ingredient_issue_records; each_composition_input_role; pre_treatment_ingredient_state; actual_wash_cut_mix_cook_hold_operations; post_treatment_prepared_state; actual_handoff_links; recipe_composition_basis; actual_heat_time_temperature_method; actual_food_safety_acceptance_source; actual_bone_skin_peel_separation; actual_water_only_definition; same_sample_nonwater_definition; sample_population_source; actual_offspec_state; rework_reheat_return_parent_batch; actual_safe_reuse_or_discard_evidence; actual_residual_receiver; prepared_vs_served_vs_consumed_disjoint_states; no_residual_to_vapour_inference; opening_inprocess_mass; opening_inprocess_mass_unit; opening_inprocess_mass_basis; opening_inprocess_mass_method; opening_inprocess_mass_state; opening_inprocess_mass_sample_time; opening_inprocess_mass_source; net_ingredient_feed; net_ingredient_feed_unit; net_ingredient_feed_basis; net_ingredient_feed_method; net_ingredient_feed_state; net_ingredient_feed_sample_time; net_ingredient_feed_source; added_recipe_water; added_recipe_water_unit; added_recipe_water_basis; added_recipe_water_method; added_recipe_water_state; added_recipe_water_sample_time; added_recipe_water_source; other_actual_composition_input; other_actual_composition_input_unit; other_actual_composition_input_basis; other_actual_composition_input_method; other_actual_composition_input_state; other_actual_composition_input_sample_time; other_actual_composition_input_source; prepared_output_mass; prepared_output_mass_unit; prepared_output_mass_basis; prepared_output_mass_method; prepared_output_mass_state; prepared_output_mass_sample_time; prepared_output_mass_source; prep_separation_waste; prep_separation_waste_unit; prep_separation_waste_basis; prep_separation_waste_method; prep_separation_waste_state; prep_separation_waste_sample_time; prep_separation_waste_source; other_process_waste; other_process_waste_unit; other_process_waste_basis; other_process_waste_method; other_process_waste_state; other_process_waste_sample_time; other_process_waste_source; measured_evaporated_water_mass; measured_evaporated_water_mass_unit; measured_evaporated_water_mass_basis; measured_evaporated_water_mass_method; measured_evaporated_water_mass_state; measured_evaporated_water_mass_sample_time; measured_evaporated_water_mass_source; other_evidenced_direct_release; other_evidenced_direct_release_unit; other_evidenced_direct_release_basis; other_evidenced_direct_release_method; other_evidenced_direct_release_state; other_evidenced_direct_release_sample_time; other_evidenced_direct_release_source; closing_inprocess_mass; closing_inprocess_mass_unit; closing_inprocess_mass_basis; closing_inprocess_mass_method; closing_inprocess_mass_state; closing_inprocess_mass_sample_time; closing_inprocess_mass_source; explicit_batch_unknown; explicit_batch_unknown_unit; explicit_batch_unknown_basis; explicit_batch_unknown_method; explicit_batch_unknown_state; explicit_batch_unknown_sample_time; explicit_batch_unknown_source; actual_unserved_stock; actual_unserved_stock_unit; actual_unserved_stock_basis; actual_unserved_stock_method; actual_unserved_stock_state; actual_unserved_stock_sample_time; actual_unserved_stock_source; actual_plate_return_mass; actual_plate_return_mass_unit; actual_plate_return_mass_basis; actual_plate_return_mass_method; actual_plate_return_mass_state; actual_plate_return_mass_sample_time; actual_plate_return_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; asreceived_sample_mass; asreceived_sample_mass_unit; asreceived_sample_mass_basis; asreceived_sample_mass_method; asreceived_sample_mass_state; asreceived_sample_mass_sample_time; asreceived_sample_mass_source; dry_nonwater_sample_mass; dry_nonwater_sample_mass_unit; dry_nonwater_sample_mass_basis; dry_nonwater_sample_mass_method; dry_nonwater_sample_mass_state; dry_nonwater_sample_mass_sample_time; dry_nonwater_sample_mass_source; wet_water_fraction; wet_water_fraction_unit; wet_water_fraction_basis; wet_water_fraction_method; wet_water_fraction_state; wet_water_fraction_sample_time; wet_water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_sample_time; percent_to_ratio_factor_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; actual_cook_temperature; actual_cook_temperature_unit; actual_cook_temperature_basis; actual_cook_temperature_method; actual_cook_temperature_state; actual_cook_temperature_sample_time; actual_cook_temperature_source; actual_cook_duration; actual_cook_duration_unit; actual_cook_duration_basis; actual_cook_duration_method; actual_cook_duration_state; actual_cook_duration_sample_time; actual_cook_duration_source; actual_item_count; actual_item_count_unit; actual_item_count_basis; actual_item_count_method; actual_item_count_state; actual_item_count_sample_time; actual_item_count_source; unit_food_mass; unit_food_mass_unit; unit_food_mass_basis; unit_food_mass_method; unit_food_mass_state; unit_food_mass_sample_time; unit_food_mass_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Enumerate actual recipe composition inputs, pre-treatment supplied states and actual wash/cut/mix/cook/hold responsibilities within ONE kitchen node; not every dish forced into two-input mixing or identical heating. Actual prepared state/handoff, input roles, state quantities, off-spec/reheat/rework/return/retained/useful/discard routes and producing batch source mandatory. Per actual compatible batch opening_inprocess+net ingredient feed+actual added water+other real composition input reconciles prepared output+separation/process wastes+independently measured vapour/other actual release+closing_inprocess+explicit unknown. No imposed yield or balancing residual as water evaporation, wastewater or emission. Prepared output versus actual meal service/served/consumed portions and later plate returns distinct; internal rework no new ingredient upstream burden, resources retained. Same-sample water-only wet/dry fraction conversion only after percent-to-ratio with each operand own native metadata; LOD/nonwater volatiles not water, dry nonwater not pure edible food. Actual temperatures/time/acceptance sourced, no universal safety threshold or recipe. Actual direct target trace OR compatible actual quantity*target_driver/positive COMPLETE all_consumer_driver; every operand has native unit/basis/method/state/sampletime/source. Necessary same-pool standby/closed/cancel/no-show/failed duties enter its total, then actual real-output responsibility, not an unowned capacity share. Real other/partial output has its own evidenced scope; do not blindly charge it all to unrelated complete target sessions. Normalize assigned target quantity by positive same-profile N_target once; already-per-reference unchanged, N0 retains linked source/receiving/resolution. Unassigned responsibility blocks complete use. | Actual ingredient/food/component native mass, water volume and supported density/temperature, real cook time/temperature and counts | Each actual event/batch/transfer and compatible meter/stock/life period | Actual session, meal occasion, task, reporting/stock periods and full asset-life phases; carry source-receiver-resolution linked | Actual camp, kitchen, all consumers and actual providers/receivers within declared responsibility | per reference flow | Original native unit/basis/method/state/sampletime/source per independent operand; actual acceptance/calibration/coverage/population and uncertainty, unknown not zero |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| fulfilled_session_N | camp_participant_session | N_target=count(unique actually fulfilled participant-session IDs after reversals in same declared package-version/duration/profile). Actual overnight+food+recreation gate and start/end/timezone/UTC-offset/DST evidence mandatory; decline of genuinely offered service does not automatically remove N. Partial outputs remain own scope; bookings/capacity not output. | cp_camp_sessions | Actual equivalent fulfilled participant-session Count |  |
| target_pool_once | all actual resource rows | assigned_target_quantity=direct actual target trace OR compatible raw_quantity*target_driver/all_consumer_driver, all_consumer_driver>0 and complete actual scope. Include necessary same-pool idle/failed/cancel/no-show in totals and actual real-output responsibility. per_reference_quantity=assigned_target_quantity/positive same-profile N_target ONCE; already-per-reference unchanged, N0 retain linked source/receiver/resolution. | All applicable node-owned CPs; cp_camp_sessions | Exclusive actual per-reference physical duty |  |
| meal_provision_handoff | camp_internal_meals; kitchen_meal_handoff | actual_transfer_quantity=count actual fulfilled provision covers/events under one actual occasion/participant/receiver gate with prepared-ready-held-available evidence and acceptance. Scheduled menu/bookings/capacity not proof. Same transferID/state/nativequantity/finalN on both sides once. Actual served/declined/refill/prepared/offered/as-served/remaining/plate native views independent; refill not new cover by default. No assumption count=foodmass or equal nutrition. | cp_camp_meal_receipts; cp_kitchen_meal_deliveries | Paired actual meal-provision service quantity per final camp reference |  |
| zero_transfer_actual_resources | zero actual meal handoff | When actual_transfer_quantity=0, do not transport burdens by zero exchange or invent positive output. Actual necessary camp-owned kitchen duties require completed sourced native resource supplement/aggregation once, same finalN, explicit original source/receiver/owner/coverage/excluded overlap. Unresolved duty blocks full-package use. | cp_camp_meal_receipts; cp_kitchen_meal_deliveries; cp_camp_providers; cp_kitchen_providers | Actually integrated retained kitchen responsibility |  |
| food_stock_native | ingredients/unused supplies | Per actual SKU/supplied state stock, S=opening+net_external_receipts-closing_including_recovery; receipts exclude actual packaging/container tare, not food moisture/bone/skin. Actual issues/internal returns cancel external-demand ledger. Gross S/N with matched unused return/N OUTPUT OR consumed(S-return)/N and OMIT same OUTPUT. Upstream losses retain burden; prepared surplus/plate or used fluids not unused-stock returns. | cp_kitchen_food_stocks; cp_kitchen_supplies; cp_camp_supplies | Actual supplied-state upstream demand and exclusive returns |  |
| kitchen_batch_balance | real recipe/preparation/cooking batch | Actual opening_WIP+net_ingredient_feed+actual_added_water+other_real_composition = actual_prepared_output+actual_separation_process_waste+independently_measured_vapour_or_other_release+closing_WIP+explicit_unknown. Same native compatible batch/state boundary; real internal rework cancels external inputs. No invented yield, residual-as-vapour, dry/wet substitution or missing-as-zero. Prepared output, meal-provision service, served mass, consumed estimate and plate return are different linked nonadditive stages. | cp_kitchen_recipes; cp_kitchen_food_stocks; cp_kitchen_meal_deliveries; cp_kitchen_fates; cp_kitchen_releases | Actual batch, WIP and downstream disposition closure |  |
| water_state_conversion | food/textile water evidence | Only SAME sample water-only w_wet=m_water/m_as_received and r_dry=m_water/m_nonwater imply w_wet=r_dry/(1+r_dry), percent first via actual percent_to_ratio_factor. m_nonwater=m_as_received*(1-w_wet). Every independent quantity/fraction/conversion unit/basis/method/state/sampletime/source required. LOD with other volatiles not water; washing-water/process-water food content distinct. | cp_kitchen_recipes; cp_camp_textiles | Compatible actual water/nonwater native conversion |  |
| utility_actual | camp/kitchen utilities | Compatible (register_close-register_open+register_adjustment)*meter_multiplier*conversion_factor OR actual interval_quantity*conversion_factor. Apply each factor once only if not already applied. Same-interval actual average power*elapsed_duration includes cycling/holding/standby, never nameplate/instantaneous or kWh multiplied again. Useful purchased heat/cooling and underlying provider fuel/plant exclusive; recipe and operational water distinct actual use. | cp_camp_utilities; cp_kitchen_utilities; cp_kitchen_recipes | Actual exclusive supplied utilities/native burn |  |
| full_life_native | camp/kitchen assets | Actual asset_native_quantity*supported dimensional driver_equivalence*job_used_driver/positive complete_lifetime_driver. complete_lifetime_driver=observed_all_user_driver+sourced_remaining_driver with actual alluser scope/termination/state/time/uncertainty/update. Include necessary idle real-output duty, all manufacture-install-maintain-actual replacements-EOL. AnnualN/capacity not lifetime; actual missing stages completed once, then same finalN once unless already normalized. | cp_camp_assets; cp_kitchen_assets; cp_camp_providers; cp_kitchen_providers | Complete-life actual asset service |  |
| freight_record_share | actual unique freight | assigned_freight=SUM(unique actual load-leg: actual payload_kg*actual distance_km*THAT_record_share). Share complete compatible users inside sum. Actual packed wet food/textile/contents/supports retained; vehicle gross subtracts ONLY noncargo vehicle tare. EACH repeated count once, TOTAL unchanged. Already covered provider/receiver/empty legs once. Then same positive N_target once unless already normalized; N0 and necessary failed duty retained. | cp_camp_freight; cp_kitchen_freight | Actual kg*km per camp reference |  |
| fluid_disjoint_stock | actual fluid supplies/fates | Each opening store/installed charge, new factory receipt, standalone receipt, OTHER receipt/exit, internal recovery/charge, retained closing, usable export, contained waste, measured release and unknown has disjoint actual lot-role membership. Factory new receipt not opening/OTHER, OTHER excludes named fates, internal transfers cancel. Supply topup/residual not release or zero. USED recovery export actual-state product without new-manufacture deduction/negative input/automatic credit; only actual UNUSED same-source/state substock matched return eligible consumed deduction/OMIT output. | cp_camp_fluids; cp_kitchen_fluids; cp_camp_assets; cp_kitchen_assets | Exclusive native fluid ledger |  |
| actual_species | camp/kitchen direct species | Species quantity=actual measured species quantity OR compatible actual activity*actual emission factor with exact species/particle/medium. Needed composition/fate/native gas temperature/pressure conversion only once with each own unit/basis/method/state/sampletime/source; full factor fractions not reapplied. Unknown stock/batch residual or odour not emission/zero. Water vapour air Elementary Mass; actual contained water/fluids Waste, not direct release. | cp_camp_releases; cp_kitchen_releases; cp_kitchen_recipes | Actual evidence-supported species amount |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity_support | all exchanges | Expand every actual ingredient, utility, asset/service, receiver stream and exact species/medium by real supplied-state identity/property/unit; unresolved umbrella does not authorize mixed or dummy UUID. Count support proves unit only, not camp-session or meal-service identity. | Actual native site records and candidate/detail/support verification, explicit unresolved use limits |
| native_operands | all calculations | Each independent operand has value/unit/basis/method/state/sampletime/source including food components, wet/dry/water, density-temperature, each driver/lifetime phase, gas conversions and stock roles. Unknown/incompatible data block calculation, not zero. Actual CP fields are native single-node record keys. | 22 node-owned CPs and actual raw source records |
| complete_stage_and_pool | all responsibilities | Actual alluser guest/supportstaff/visitor/otherprogramme records, necessary idle/failure duties, full asset/provider stages and actual completed missing-stage/zero-handoff integration. True partial output keeps own scope; unassigned stages/shares/carry mean incomplete final package. | Source/receiver/owner/quantity/state/time/coverage and resolution links |
| range_limits | every card | Row-specific Range evidence needs require actual quantity/state/basis/coverage evidence, not a universal numeric interval. A real compatible empirical guardrail needs independent source/population/comparison; same-record min/max is not independent validation. Missing range is disclosed, never invented recipe/yield/portion/lifetime benchmark. | Actual site-specific measurements and independently matched evidence only |
| source_limits | operator sources | UNSD classification and PGL qualitative actual route evidence are not emissions, yields, safefood/legal thresholds, default duration/meal/day portions or assetlife. Actual site-specific applicability, evidence dates, measured/estimated portions and uncertainty/sensitivity/update disclosed. | Six bounded sources and actual operational records |
| complete_camp_electricity | camp_session_service | Expand each actual case under `camp_electricity` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_utilities` |
| complete_camp_water | camp_session_service | Expand each actual case under `camp_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_utilities` |
| complete_camp_purchased_thermal | camp_session_service | Expand each actual case under `camp_purchased_thermal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_utilities` |
| complete_camp_fuel | camp_session_service | Expand each actual case under `camp_fuel` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_utilities` |
| complete_camp_consumables | camp_session_service | Expand each actual case under `camp_consumables` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_supplies` |
| complete_camp_asset_life | camp_session_service | Expand each actual case under `camp_asset_life` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_assets` |
| complete_camp_reusable_gear | camp_session_service | Expand each actual case under `camp_reusable_gear` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_assets` |
| complete_camp_support_service | camp_session_service | Expand each actual case under `camp_support_service` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_providers` |
| complete_camp_freight | camp_session_service | Expand each actual case under `camp_freight` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_freight` |
| complete_camp_refrigerant_supply | camp_session_service | Expand each actual case under `camp_refrigerant_supply` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_fluids` |
| complete_camp_direct_water_withdrawal | camp_session_service | Expand each actual case under `camp_direct_water_withdrawal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_fates` |
| complete_camp_unused_supply_return | camp_session_service | Expand each actual case under `camp_unused_supply_return` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_supplies` |
| complete_camp_usable_asset_transfer | camp_session_service | Expand each actual case under `camp_usable_asset_transfer` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_assets` |
| complete_camp_usable_recovered_fluid | camp_session_service | Expand each actual case under `camp_usable_recovered_fluid` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_fluids` |
| complete_camp_guest_solid_waste | camp_session_service | Expand each actual case under `camp_guest_solid_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_fates` |
| complete_camp_spent_cleaning_solids | camp_session_service | Expand each actual case under `camp_spent_cleaning_solids` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_fates` |
| complete_camp_retired_asset_waste | camp_session_service | Expand each actual case under `camp_retired_asset_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_assets` |
| complete_camp_contained_effluent | camp_session_service | Expand each actual case under `camp_contained_effluent` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_fates` |
| complete_camp_contained_fluid_waste | camp_session_service | Expand each actual case under `camp_contained_fluid_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_fluids` |
| complete_camp_direct_species | camp_session_service | Expand each actual case under `camp_direct_species` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_camp_releases` |
| complete_kitchen_food_ingredients | on_site_meal_preparation | Expand each actual case under `kitchen_food_ingredients` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_food_stocks` |
| complete_kitchen_recipe_water | on_site_meal_preparation | Expand each actual case under `kitchen_recipe_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_recipes` |
| complete_kitchen_operating_water | on_site_meal_preparation | Expand each actual case under `kitchen_operating_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_utilities` |
| complete_kitchen_electricity | on_site_meal_preparation | Expand each actual case under `kitchen_electricity` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_utilities` |
| complete_kitchen_fuel | on_site_meal_preparation | Expand each actual case under `kitchen_fuel` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_utilities` |
| complete_kitchen_purchased_thermal | on_site_meal_preparation | Expand each actual case under `kitchen_purchased_thermal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_utilities` |
| complete_kitchen_cleaning_materials | on_site_meal_preparation | Expand each actual case under `kitchen_cleaning_materials` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_supplies` |
| complete_kitchen_asset_life | on_site_meal_preparation | Expand each actual case under `kitchen_asset_life` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_assets` |
| complete_kitchen_provider_service | on_site_meal_preparation | Expand each actual case under `kitchen_provider_service` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_providers` |
| complete_kitchen_refrigerant_supply | on_site_meal_preparation | Expand each actual case under `kitchen_refrigerant_supply` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_fluids` |
| complete_kitchen_freight | on_site_meal_preparation | Expand each actual case under `kitchen_freight` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_freight` |
| complete_kitchen_direct_water_withdrawal | on_site_meal_preparation | Expand each actual case under `kitchen_direct_water_withdrawal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_fates` |
| complete_kitchen_unused_supply_return | on_site_meal_preparation | Expand each actual case under `kitchen_unused_supply_return` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_food_stocks` |
| complete_kitchen_usable_recovered_fluid | on_site_meal_preparation | Expand each actual case under `kitchen_usable_recovered_fluid` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_fluids` |
| complete_kitchen_usable_food_transfer | on_site_meal_preparation | Expand each actual case under `kitchen_usable_food_transfer` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_fates` |
| complete_kitchen_preparation_waste | on_site_meal_preparation | Expand each actual case under `kitchen_preparation_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_recipes` |
| complete_kitchen_packaging_waste | on_site_meal_preparation | Expand each actual case under `kitchen_packaging_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_fates` |
| complete_kitchen_spent_cleaning_solids | on_site_meal_preparation | Expand each actual case under `kitchen_spent_cleaning_solids` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_fates` |
| complete_kitchen_retired_asset_waste | on_site_meal_preparation | Expand each actual case under `kitchen_retired_asset_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_assets` |
| complete_kitchen_contained_effluent | on_site_meal_preparation | Expand each actual case under `kitchen_contained_effluent` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_fates` |
| complete_kitchen_contained_fluid_waste | on_site_meal_preparation | Expand each actual case under `kitchen_contained_fluid_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_fluids` |
| complete_kitchen_direct_species | on_site_meal_preparation | Expand each actual case under `kitchen_direct_species` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_kitchen_releases` |


### Mandatory Inventory Completion Records

The following records are mandatory physical collection and case-expansion requirements, not single inventory exchanges. Every original node, direction, flow type, amount basis, protocol, stock/fate, provider/receiver and source obligation remains binding. References elsewhere to their identifiers refer to these requirements. Before completing a foreground dataset, expand every actual material, service, asset lifecycle, waste stream or substance/medium into separately identified exchanges with native quantities and exclusive coverage. Retained fixed cards cover only their actual supported cases; reconcile all residual actual cases without overlap. Missing identity, occurrence or quantity is unresolved, never zero or permission to omit. Internal paired handoffs and component audit views remain non-additive. Required full-life and provider stages must actually be completed once.

#### camp_electricity

Owner and original flow role: camp_session_service / inputs / product

Actual nonkitchen lodging, bathroom/hot-water/HVAC auxiliaries, activity equipment, ICT, common spaces, standby and support duties. Kitchen-meter/provider-included quantities are excluded only through exact coverage evidence, never by deleting necessary duty.

Residual inventory requirement after the independently identified cases `camp_electricity_ac`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual camp lodging activity and support electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_utilities`

Range evidence need: Actual native meter/interval scope, direct or complete all-user driver, source and idle responsibility; no electricity per camper/day or nameplate default.

#### camp_water

Owner and original flow role: camp_session_service / inputs / product

Actual purchased nonkitchen supply under declared use and shared scope. Reused or retained water is not automatically new purchase; supply is not sewer output. Real direct environmental abstraction has its own elementary identity.

Residual inventory requirement after the independently identified cases `camp_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual purchased camp lodging activity and cleaning water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_utilities`

Range evidence need: Actual supplier/source meters, native volume/time, enduse/all-user attribution and independently measured fates; no standard litres per participant or camp duration.

#### camp_purchased_thermal

Owner and original flow role: camp_session_service / inputs / product

Conditional measured useful thermal service at its actual gate/state. Covered provider fuel, electricity, generation plant and lifecycle duties are not direct duplicates. Actual independent on-site conversion requires reviewed route expansion.

Residual inventory requirement after the independently identified cases `camp_purchased_thermal_delivered_heat`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual purchased useful camp heating or cooling service
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_utilities`

Range evidence need: Actual supplier/delivery energy, native property-unit/state/temperature and provider losses/assets boundary; no comfort-temperature or boiler-efficiency default.

#### camp_fuel

Owner and original flow role: camp_session_service / inputs / product

Only actual operated camp duty such as evidenced recreational fire or support equipment. No fire, vehicle, boiler, generator or specific fuel is presumed from a programme picture. Fuel net stock differs from independently supported burned activity and releases.

- Selected flow: Actual camp activity handling and support fuel supply
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_utilities`

Range evidence need: Actual carrier/grade/state, opening/net receipts/closing/unused return, duty/source and density-temperature when used; no emissions from stock discrepancy.

#### camp_consumables

Owner and original flow role: camp_session_service / inputs / product

Expand actual separate cleaning chemicals, paper/hygiene, crafts and activity/support materials by SKU/state/purpose. Prepared solution, concentrate, dilution water and active content are nonadditive views. Kitchen ingredients and kitchen-owned cleaning are not repeated.

Residual inventory requirement after the independently identified cases `camp_consumables_synthetic_detergent`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual camp cleaning hygiene activity and support consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_supplies; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_supplies`

Range evidence need: Actual net material stock excluding packaging tare, EACH/TOTAL and item/mass/density factors if used, actual tasks/users/unused-return match; no standard kit or dose.

#### camp_asset_life

Owner and original flow role: camp_session_service / inputs / product

Actual full shell/fitout/FF&E, bathrooms, common systems, support ICT and activity structures. Include manufacture/install/maintenance/replacement/EOL across all users/periods irrespective of owner/payment; kitchen asset overlaps resolved component-by-component.

- Selected flow: Complete-life camp buildings fitout and nonkitchen infrastructure service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_assets; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_assets`

Range evidence need: Actual asset/component/native quantity/equivalence, observed+sourced remaining full-life driver and allconsumer/idle ownership; no annualN as life or generic years.

#### camp_reusable_gear

Owner and original flow role: camp_session_service / inputs / product

Actual bed linen, reusable cleaning cloths, craft/activity/safety gear, storage/transport supports and equipment services with supported native count/mass/equivalence. Actual cleaning/laundering is separate only to extent not already in complete lifecycle/provider.

- Selected flow: Complete-life reusable camp textiles activity gear and supports
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_assets; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_assets`

Range evidence need: Actual items/pools/material/state, used/repair/loss/retirement histories, full observed+remaining life and activity/user equivalence; no one new set per camper or wash-count lifetime.

#### camp_support_service

Owner and original flow role: camp_session_service / inputs / product

Actual physically defined service results in evidence-native unit, including actually outsourced activity/cleaning/support duties and accepted scope. An invoice, staff wage/hour or advertised instruction is not automatically one Item(s). Do not replace actual onsite meal production with an invented provider.

- Selected flow: Actual external camp lodging activity and support service results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_providers; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_providers`

Range evidence need: Actual performed/available/failed result and native equivalent, material/utility/asset/freight/receiver matrix, allclients and completed supplements; no fee-based quantities.

#### camp_freight

Owner and original flow role: camp_session_service / inputs / product

Real declared camp supply/provider/receiver load-legs, with actual packed/wet cargo and carried supports. Guest journeys are separate unless explicitly part of declared package and reviewed as real service; not relabelled goods freight.

- Selected flow: Actual unique camp supply textile asset and receiver freight
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_freight; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_freight`

Range evidence need: Unique load-leg, native gross/noncargo tare/payload/distance, EACH/TOTAL actual count and THAT-record share inside sum; covered legs and empty-return scope once.

#### camp_refrigerant_supply

Owner and original flow role: camp_session_service / inputs / product

Actual independently supplied named fluid/blend for declared nonkitchen systems. Original factory charge is upstream-owned once by full asset or explicit supplement, not repeatedly purchased. Retained recovery and actual unused return are different.

- Selected flow: Actual standalone operating camp refrigerant or heat-transfer fluid supply
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_fluids; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_fluids`

Range evidence need: Actual source/chemical/system/charge/lot-role stocks, net receipts and real fates; actual native composition/density-temperature if used, no top-up-equals-leak.

#### camp_direct_water_withdrawal

Owner and original flow role: camp_session_service / inputs / elementary

Only actual directly operated abstraction at a stated environmental source, distinguished from purchased supply and upstream provider abstraction. Actual independent extraction/treatment plant requires scope review; missing source evidence is not zero.

- Selected flow: Actual direct source-specific camp water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_fates`

Range evidence need: Actual source/location/native volume/time/method/responsibility and allusers, no bill or occupancy proxy.

#### camp_unused_supply_return

Owner and original flow role: camp_session_service / outputs / product

Only matched same-source/state UNUSED standalone material returned to an actual external receiver. Gross supply S/N pairs this return/N OUTPUT, or consumed-only (S-return)/N INPUT omits that matched OUTPUT. No used equipment fluid, reusable asset or unrelated stock netting.

- Selected flow: Actual matched unused camp supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_supplies; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_supplies`

Range evidence need: Actual return/receipt provenance, unused acceptance/native net quantity/state and one stock convention; internal retained recovery is closing, no automatic credit.

#### camp_usable_asset_transfer

Owner and original flow role: camp_session_service / outputs / product

Conditional actual usable item or independent part transfer with received state and remaining-life/EOL ownership. Retirement, repair, redeployment, missing item or a recycling label does not prove usable external output.

- Selected flow: Actual usable camp textile gear and asset external transfers
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_assets; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_assets`

Range evidence need: Actual item/part/recipient/native net amount/conversion/date/remaining responsibility and nonadditive whole-part scope; no avoided manufacture credit.

#### camp_usable_recovered_fluid

Owner and original flow role: camp_session_service / outputs / product

Actual separately transferred USED recovered fluid at evidenced usable state. Whether factory or make-up origin, it is not automatically unused new supply, is not deducted from new manufacture and creates no negative input/automatic credit; retained recovery stays closing stock.

- Selected flow: Actual usable recovered camp equipment-fluid export
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_fluids; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_fluids`

Range evidence need: Actual chemical/quality/state/native mass/recipient/asset or supply genealogy and explicit fates; only truly UNUSED matched substock can use unused-return rule.

#### camp_guest_solid_waste

Owner and original flow role: camp_session_service / outputs / waste

Actual participant/operator-origin refuse for which camp collection/receiver treatment responsibility exists. Distinct real materials/receivers expand separately; only genuine co-collected streams use a measured mixture with nonadditive composition. Guest-brought food/material production is not thereby imported.

- Selected flow: Actual distinct participant and camp-service solid waste handoffs
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_fates`

Range evidence need: Actual origin/collection/event/stream/native net quantity/composition/receiver/transport-treatment owner; no standard camper waste factor or hypothetical mixture.

#### camp_spent_cleaning_solids

Owner and original flow role: camp_session_service / outputs / waste

Actual separately received wipes/filters/absorbents/packaging/residues by identity/state/receiver. Real wet mixed captures contain their measured carrier/liquid/fragment components once, not extra free-liquid/material streams.

- Selected flow: Actual spent camp cleaning capture materials and packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_fates`

Range evidence need: Actual task/source/material/whole-component membership/net amount/receiver; separate genuine streams, no supply receipts as waste amount.

#### camp_retired_asset_waste

Owner and original flow role: camp_session_service / outputs / waste

Actual discard/receiver status, independent whole or part, with all included liquid/content measured as nonadditive views. Physical EOL handoff remains traceable when identical fullasset/provider treatment already covers it; no second treatment burden.

- Selected flow: Actual discarded camp textiles equipment structures and components
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_assets; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_assets`

Range evidence need: Actual retirement/part/BOM/receiver/net amount and identical lifecycle-EOL coverage; no assumed life, missing-equipment loss or universal recycling fraction.

#### camp_contained_effluent

Owner and original flow role: camp_session_service / outputs / waste

Real sewer/receiver transfer with actual water/solid/chemical state and treatment coverage. Different actual streams expand, real mixed collection stays one nonadditive stream. It is not direct environmental water or purchased volume by assumption.

- Selected flow: Actual contained camp sanitary cleaning and equipment wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_fates`

Range evidence need: Actual independent receiver/meter/native volume/composition/density-temperature only if converted, shared responsibilities and laundry/kitchen exclusion.

#### camp_contained_fluid_waste

Owner and original flow role: camp_session_service / outputs / waste

Actual independent unusable recovered fluid handed to a treatment receiver, not direct air release. Fluid retained within whole/part equipment or capture mixture remains its nonadditive content rather than a second fluid waste.

- Selected flow: Actual contained camp refrigerant or transfer-fluid waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_fluids; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_fluids`

Range evidence need: Actual chemical/blend/native net quantity/receiver/stock origin and covered treatment/transport; top-up or recovery volume alone not waste/release.

#### camp_direct_species

Owner and original flow role: camp_session_service / outputs / elementary

Actual measured or compatible method-supported combustion/fluid/material/water species or particles, each actual medium. Water vapour to air is Elementary Mass; contained water/fluid is Waste. Unknown stock balance, odour or purchase is not occurrence, quantity or zero.

Residual inventory requirement after the independently identified cases `camp_direct_species_co2_fossil_air`; `camp_direct_species_methane_fossil_air`; `camp_direct_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual camp species-specific releases to identified environmental media
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_camp_releases; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_camp_releases`

Range evidence need: Exact species/basis/particle/medium/native measurement or actual activity-factor with needed composition/fate/state metadata; full factors not fraction-multiplied twice.

#### kitchen_food_ingredients

Owner and original flow role: on_site_meal_preparation / inputs / product

Expand every actual ingredient/component by identity, purchased raw/prepared/cooked/frozen/chilled state and exact gate. Actual net as-received food may contain moisture/bone/skin, which are not packaging tare or interchangeable edible dry matter. Ready-made supplied food retains its actual prior cooking coverage.

- Selected flow: Actual food ingredient and beverage inputs to on-site camp catering
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_food_stocks; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_food_stocks`

Range evidence need: Actual SKU/recipe issue/native stock/net receipts/edible and as-received definitions/unused return/storage loss, independent upstream production once; no universal menu, portion, yield or food mix.

#### kitchen_recipe_water

Owner and original flow role: on_site_meal_preparation / inputs / product

Only actual recipe/process water or supplied ice added to prepared food/drinks and its compatible input gate. Water already present in purchased ingredients/prepared food is not added again. Retained/evaporated/removed portions need their actual evidence, not a fixed fraction.

Residual inventory requirement after the independently identified cases `kitchen_recipe_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual added water and ice used as meal composition inputs
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_recipes; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_recipes`

Range evidence need: Actual recipe/batch/addition native amount/state/source and independently compatible density/temperature/composition if converted; no automatic all-water retained or waste.

#### kitchen_operating_water

Owner and original flow role: on_site_meal_preparation / inputs / product

Actual water not already recorded as recipe composition: ingredient washing, washing-up, cleaning and real equipment duties, with compatible scope. Actual cooking-water role selected from its real use, not by name; each physical litre belongs once.

Residual inventory requirement after the independently identified cases `kitchen_operating_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual kitchen washing cleaning equipment and operational water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_utilities`

Range evidence need: Actual source/meter/enduse/native volume/time, recipe-water exclusions and independent effluent/retained/direct fates; no all-supply-to-sewer assumption.

#### kitchen_electricity

Owner and original flow role: on_site_meal_preparation / inputs / product

Actual refrigeration/holding, preparation/cooking, extraction, lighting, dishwashing, clean-down and necessary standby/failure duties on actual devices. No instantaneous/nameplate-times-scheduled meals or technology inferred from brand.

Residual inventory requirement after the independently identified cases `kitchen_electricity_ac`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual kitchen preparation cooking holding and dishwashing electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_utilities`

Range evidence need: Actual meter/interval-average power and matching elapsed duration/conversions, complete users/periods and camp common-meter exclusions.

#### kitchen_fuel

Owner and original flow role: on_site_meal_preparation / inputs / product

Only actual named carrier/SKU with native net stock and independent supported burn/use under actual kitchen route. Purchased useful thermal service and corresponding provider fuel/plant are not both counted. Actual species releases have their own evidence.

- Selected flow: Actual kitchen cooking and equipment fuel supply
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_utilities`

Range evidence need: Actual opening/net receipts/closing/unused return and duty, native volume-density-temperature or calorific kind only if used; no standard cooking fuel/efficiency/emission factor.

#### kitchen_purchased_thermal

Owner and original flow role: on_site_meal_preparation / inputs / product

Conditional actual metered thermal delivery/state with provider losses/fuel/assets scope. Do not add electrical chillers as a second purchased cold service or assume an independent boiler from hot meals.

Residual inventory requirement after the independently identified cases `kitchen_purchased_thermal_delivered_heat`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual externally delivered useful kitchen heating or cooling
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_utilities; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_utilities`

Range evidence need: Actual supplier/delivery/useful energy and native meter/state/temperature/source, complete alluser share and identical direct coverage exclusions.

#### kitchen_cleaning_materials

Owner and original flow role: on_site_meal_preparation / inputs / product

Actual cleaner/detergent, wipes/absorbers/filters and supplied serving/support materials by distinct SKU/state. Reusable dishware/utensils are full-life assets, not a new item each meal; concentrate/prepared solution/active content are nonadditive.

Residual inventory requirement after the independently identified cases `kitchen_cleaning_materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual kitchen cleaning sanitation serving and support materials
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_supplies; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_supplies`

Range evidence need: Actual native net material stocks excluding packaging tare, matched unused return, duties and composition/density where used; no sanitation recipe, dose or presumed sterilant emission.

#### kitchen_asset_life

Owner and original flow role: on_site_meal_preparation / inputs / product

Actual kitchen/dining building component share, cold/cooking/extraction/dishwash equipment, counters, utensils/tableware and supports full manufacture-install-maintain-replace-EOL. Shared shell/camp assets and provider equipment stages have one coverage owner.

- Selected flow: Complete-life kitchen dining refrigeration utensils and reusable equipment service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_assets; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_assets`

Range evidence need: Actual asset/BOM/native quantity/equivalence, allusers observed+sourced remaining lifetime/termination, reuse/repair/loss and uncertainty; no fixed cycles/years or annualN lifetime.

#### kitchen_provider_service

Owner and original flow role: on_site_meal_preparation / inputs / product

Only actually completed and physically defined complementary service at its actual gate/unit/quality. Complete purchased preparation replaces only exact upstream steps; this scope still requires actual onsite preparation. Do not buy the same complete meal provision as the internal source and duplicate ingredients/cooking.

- Selected flow: Actual complementary catering preparation and maintenance provider results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_providers; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_providers`

Range evidence need: Actual provider result/native equivalent and ingredient/utility/asset/freight/fate boundary, allclients and completed uncovered supplements; invoices/fees not counts.

#### kitchen_refrigerant_supply

Owner and original flow role: on_site_meal_preparation / inputs / product

Actual separately supplied named refrigeration/equipment fluid with source/stock provenance. Full asset factory charge production is owned once; internal recovered charge is not a new receipt or proof of release.

- Selected flow: Actual standalone operating kitchen refrigerant and transfer-fluid supply
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fluids; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fluids`

Range evidence need: Actual SKU/blend/system/native stocks/net supply/recovery and disjoint real fates; no generic refrigeration charge or leak factor.

#### kitchen_freight

Owner and original flow role: on_site_meal_preparation / inputs / product

Actual load-legs not already in delivered ingredient/provider/fullasset/receiver scope. Retain actual as-carried food moisture, packaging and supports; edible dry-food mass is not automatically whole cargo.

- Selected flow: Actual unique kitchen ingredient supply and receiver freight
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_freight; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_freight`

Range evidence need: Unique load-leg/native payload or gross-minus-noncargo tare/distance/EACH-TOTAL/count and THAT-record targetshare inside SUM, covered legs and empty travel once.

#### kitchen_direct_water_withdrawal

Owner and original flow role: on_site_meal_preparation / inputs / elementary

Only actual direct environmental supply attributable to kitchen, distinct from purchased water or a camp-meter pool already counted. New independent extraction/treatment requires route review; no source inferred from water bill.

- Selected flow: Actual direct source-specific kitchen water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fates`

Range evidence need: Actual source/location/native abstraction amount/method/interval and complete alluser/camp allocation, not occupancy/recipe residual.

#### kitchen_unused_supply_return

Owner and original flow role: on_site_meal_preparation / outputs / product

Actual unused same-SKU/source/state standalone food/material return only. Gross S/N INPUT with matched return/N OUTPUT OR consumed-only (S-return)/N INPUT with matching OUTPUT OMITTED. Used recovered fluids, prepared surplus/plate leftovers or unrelated supplies are not unused-stock netting.

- Selected flow: Actual matched unused kitchen food or supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_food_stocks; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_food_stocks`

Range evidence need: Actual separate source/return acceptance/native net amount/state and stock convention; each concrete supply return uses its proper stock record, no double credit.

#### kitchen_usable_recovered_fluid

Owner and original flow role: on_site_meal_preparation / outputs / product

Actual USED recovered refrigerant/transfer fluid usable external handoff, distinct retained closing and contained waste. Factory or standalone make-up origin does not make it UNUSED new supply or entitle it to manufacturing deduction/negative input/automatic credit.

- Selected flow: Actual usable recovered kitchen equipment-fluid export
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fluids; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fluids`

Range evidence need: Actual chemical/quality/native transferred mass/recipient/provenance/coverage, retained versus exported status independent.

#### kitchen_usable_food_transfer

Owner and original flow role: on_site_meal_preparation / outputs / product

Conditional actual surplus prepared food accepted for evidenced usable destination under actual applicable requirements, not automatically donate/reuse because unserved. Prepared-food handoff retains full original food/cooking burden and is not unused ingredient-stock return or avoided-production credit.

- Selected flow: Actual accepted usable prepared-food external handoff
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fates`

Range evidence need: Actual batch/state/recipient/usable acceptance/native net amount/composition/time, responsibility and complete other-consumer attribution; unknown safety/destination not usable output.

#### kitchen_preparation_waste

Owner and original flow role: on_site_meal_preparation / outputs / waste

Actual separately received peels/bones/trim, process residuals or used cooking material by actual identity/state/receiver. Food moisture/bone/skin are not packaging tare; captured cooking/cleaning mixture components are not extra whole streams. Original ingredient burden retained.

- Selected flow: Actual ingredient preparation and cooking residual waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_recipes; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_recipes`

Range evidence need: Actual batch/input-genealogy/native as-received and component amounts, disposition/receiver/transport-treatment scope; no universal edible fraction or preparation yield.

#### kitchen_packaging_waste

Owner and original flow role: on_site_meal_preparation / outputs / waste

Real separate packaging handoff by material/state/receiver, with food residues nonadditive if part of actual received mixture. Retained reusable containers/supports remain stock/asset service, not automatic waste from procurement.

Residual inventory requirement after the independently identified cases `kitchen_packaging_waste_paper_pack`; `kitchen_packaging_waste_metal_pack`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual independent ingredient and serving packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fates`

Range evidence need: Actual packaging identity/net quantity/tare-state/content/receiver and coverage; do not subtract food bone/skin as supply-container tare.

#### kitchen_spent_cleaning_solids

Owner and original flow role: on_site_meal_preparation / outputs / waste

Actual separate received spent cleaning/capture stream or genuine wet physical mixture. Carrier, captured food/grease/liquid and retained fragments are independently recorded nonadditive contents, not extra free effluent/species.

- Selected flow: Actual spent kitchen wipes filters absorbents and cleaning captures
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fates`

Range evidence need: Actual cleanup source/stream/native whole and component amounts/unit/state/method/time/source/receiver, exact mixture membership; no assumed capture rate.

#### kitchen_retired_asset_waste

Owner and original flow role: on_site_meal_preparation / outputs / waste

Real retirement/receiver state with whole/part/retained-fluid content nonadditive. If identical EOL treatment/transport is already in fullasset/provider lifecycle, keep linked physical handoff without repeating burden; actual missing treatment still integrated.

- Selected flow: Actual discarded kitchen dining equipment utensils and components
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_assets; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_assets`

Range evidence need: Actual asset/BOM/component/net native amount/receiver and original full-life/EOL owner, no automatic life/disassembly/recycling allocation.

#### kitchen_contained_effluent

Owner and original flow role: on_site_meal_preparation / outputs / waste

Actual sewer/receiver liquid transfer with real solids/oil/chemicals composition. Independently received streams expand; true mixed receiver stream uses one total with components nonadditive. Absorbed cleaning fluid/food moisture and air vapour are not added here by residual.

- Selected flow: Actual contained kitchen preparation cooking and dishwashing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fates; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fates`

Range evidence need: Actual source/batch/meter/native volume/composition/density-temperature only if converted, receiver and single treatment/transport duty; no water-use-equals-effluent.

#### kitchen_contained_fluid_waste

Owner and original flow role: on_site_meal_preparation / outputs / waste

Only actual independent unusable recovered equipment fluid sent to a receiver, not kitchen fat/food chemical assumed refrigerant, not direct air release. Equipment-retained or captured fluid stays nonadditive content of that stream.

- Selected flow: Actual contained kitchen refrigeration or equipment-fluid waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_fluids; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_fluids`

Range evidence need: Actual chemical/blend/source/native net transfer/fate/receiver and fullasset/provider/transport-treatment exclusion; no recovery-equals-leak or missing mass zero.

#### kitchen_direct_species

Owner and original flow role: on_site_meal_preparation / outputs / elementary

Actual measured or compatible source-supported cooking/combustion/refrigeration/material species and actual receiving medium. Water vapour needs actual Mass-to-air evidence; drains/contained fats/wastewater are Waste. No emissions inferred from recipe heating, odour, top-up or balancing residual.

Residual inventory requirement after the independently identified cases `kitchen_direct_species_co2_fossil_air`; `kitchen_direct_species_methane_fossil_air`; `kitchen_direct_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual kitchen species-specific environmental releases
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive target-responsibility quantity / positive same-profile N_target once under cp_kitchen_releases; already-per-reference records unchanged; N_target=0 retained without division.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kitchen_releases`

Range evidence need: Exact substance/particle/basis/medium/native measurement or actual activity-factor/state/composition/fate/time/source; complete factors not multiplied again, unknown not zero.


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| fulfilled_equivalent_bundle | final reference | Verify actual overnight+food+recreation general multi-activity package and on-site preparation/cooking; exclude specialist sports instruction. Actual unique fulfilled same-package-version/duration/profile N after reversals, times/UTC offsets/DST and servicegate. Declines of real provision not automatic cancellation; booking/capacity not output. | unsd-cpc3-2025; pgl-multiactivity-current |
| paired_provision_not_consumption | internal exchange | Both internal sides same transferID/state/nativeamount/receiver/occasion and same finalN once. Actual prepared-ready-held-available gate evidence, not planned menu/bookings/capacity. Served/declined/refills/foodmass/remaining/plate independent; no equalnutrition assumption. Zero handoff requires actually completed exclusive camp-owned resource integration, never zero exchange erasure or fictionalpositive output. | pgl-menus-current; pgl-chefs-current |
| food_native_closure | food stocks/process/fates | Verify raw/prepared/cooked supplied-state net food vs packaging tare vs food moisture/bone/skin; original upstream losses remain. Actual batch/WIP/rework balance keeps explicitunknown, independent vapour not residual. Separate preparation waste/unserved discard/plate/packaging/cleaning; genuine co-collection one measured stream with nonadditive component/origin views. Gross/consumed UNUSED return representation exclusive, useful transfer actual accepted usable state. | pgl-chef-job |
| staff_partials_idle_allusers | all allocation | Camp-support staffmeal duties retain actual camp responsibility. Real other sessions/visitors/partial deliveries have own physical responsibility, not automatic discarded or blindly all charged to complete sessions. Necessary same-pool failed/cancel/no-show/idle in total and actual real-output responsibility; allusers drivers native/complete. Positive exact-profile N once, already-normalized unchanged; N0/crossperiod source/receiver/resolution, unassigned blocks completeness. | pgl-chefs-current |
| full_life_provider_complete | capital/services | Complete building/siteworks/fitout/FF&E/kitchen/activity/reusable/linen life observed+sourced remaining alluser productive-equivalent driver/termination/native evidence, not annualN/capacity. Full provider OR actual covered underlying duties; missing actual stages must be actually completed integrated once with source/native quantity/state/time/owner/coverage. |  |
| native_freight_utility_fluid | resource calculations | Meter resets/factors/interval-average duty/conversions apply once, fuel stock not burn, recipewater not operatingwater duplicate. Unique actual packed load-leg with EACH/TOTAL count once and THAT-record share inside SUM/N once. Fluid disjoint opening/newfactory/standalone/OTHER/internal/closing/fates; USED export no manufactureoffset/negativeinput/credit. Exact contained Waste vs actual Elementary species/medium, vapour air Mass; missing residual not release/zero. |  |
| honest_evidence_identity | all methods | Actual semantic identity/support unresolved remains explicit before final use; checker pass not external verification or publication readiness. No invented UUID/ranges/factors/yields/recipes/portions/lifetimes. Source examples do not become default physical or legal rules. Missing actual quantity/coverage/lifetime/medium/resolution blocks complete use. | pgl-code-practice-2025; pgl-menus-current |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity and completeness review |
| downstream_use | One actually fulfilled equivalent residential general multi-activity participant-session with onsite food provision and full actual physical responsibility |
| allowed_use | Actual overnight-food-recreation package with actual onsite preparation/cooking, declared programme/package-version/duration/profile, actual provision acceptance and two-node exclusive actual inventory |
| excluded_use | Specialist sports instruction/day-only/lodging-only/capacity/bookings; unequal sessions pooled without qualifiers; food mass or nutrition inferred from count; missing kitchen responsibility via zero transfer; uncompleted asset/provider/pool/carry duties |
| required_metadata | All17 reference qualifiers; actual participant/package/duration/timestamps/DST/acceptance/reversals/partials; actual prepared-ready-held-available mealservice/native food state/stock/batch/fates/transfer; allguest-supportstaff-visitor-othersession duties; fullasset observed+sourced remaining life/native drivers/provider exactcoverage and completed actual integration |
| required_quality_disclosure | Actual source date/site/route/profile applicability, measured versus estimated native quantities, unresolved concrete identities/support/quantity/range/medium, unassigned alluser/carry/lifetime/provider/zero-handoff resources and uncertainty/sensitivity/update; no missing-as-zero or checker-ready publication assumption |
| update_trigger | Changed package/duration/profile/programmepurpose/deliverygate/actual recipe or cateringroute, mealservice transfer or decline handling, actual shareduser/staff responsibility, independent processing/preservation/conversion/laundry/watertreatment, fullasset/provider lifetime/coverage/fate/nativeconversion/identity evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3 explanatory notes30June2025, printed355,63130 and sports-instruction exclusion92912. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only: overnight+food+recreation/training all-inclusive camp versus sports instruction; no route intensity or default factor. |
| pgl-multiactivity-current | handbook | PGL Multi-Activity Camps current operator page, accessed2026-10-20, programme examples and FAQ inclusions. https://adventureholidays.pgl.co.uk/multi-activity-camps/ | Qualitative actual residential general multi-activity package includes accommodation/meals/activities/evening programme; variable examples not default nights/ages/meal counts/portion/lifetime. |
| pgl-chefs-current | handbook | PGL Chefs current recruitment page, accessed2026-10-20, Marchants Hill team prepares/serves guests and colleagues. https://jobs.pgl.co.uk/chefs/ | Primary actual on-site preparation/serving and staff-consumer scope; not proof of generic recipe/yield or universal external service. |
| pgl-chef-job | handbook | PGL Chef job description, undated document, first page duties; accessed2026-10-20. https://www.pgl.co.uk/Files/DocumentManagerDocuments/Recruitment/Job%20Descriptions/ChefFR23.pdf | Actual storage/preparation/cooking/serving, recipes/portions and kitchen/dining cleanup for guests/staff/visitors; filename not a publicationdate or currentlegal guarantee. |
| pgl-menus-current | handbook | PGL Menus and Mealtimes current operator page, accessed2026-10-20. https://adventureholidays.pgl.co.uk/menus-and-mealtimes/ | Qualitative varied meals/selfservice/refills and possible provision greater than amount eaten support separate actual provision and consumption views; no default3meals/day, portion, nutritional equivalence or legal temperature. |
| pgl-code-practice-2025 | handbook | PGL Code of Practice, coverJune2025; catering/accommodation/recreation sections, accessed2026-10-20. https://www.pgl.co.uk/Files/DocumentManagerDocuments/AdventureUK/PGL-Code-of-Practice.pdf | Dated qualitative real catering/fullboard dining, lodging and recreation duties. Separate catering facilities alone do not prove thirdparty outsourcing; no2026 legal or universal operating/factor commitment. |
