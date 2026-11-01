---
pcr_id: pcr.worker-hostel-exclusive-single-room-place-days
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Worker hostel exclusive single-room place-days

## 1. Scope and Applicability

This PCR applies only to self-catering private single-person furnished bedrooms continuously assigned to workers in a workers hostel or camp. Record the actual worker-accommodation purpose, operator/site and assignment, including seasonal or short-term arrangements without imposing a default stay duration. Student residence, visitor accommodation and unrelated residential purposes are separate outputs. A work roster, employment benefit or paid licence does not establish delivered accommodation. Hot-bedded shift sharing, shared bedrooms, whole apartments and catered camp production routes are outside this selected single-room route.

N_target is the sum of actual nonoverlapping fulfilled exclusive resident room-place time divided by the sourced matching service-day duration in one frozen compatible site/profile. Each resident-assignment-service-day ID and its actual start/end/timezone/UTC-offset/DST/elapsed interval is reconciled once. Count only after actual initial resident handover/receipt and real entry arrangements are established, and only while that private single-person bedroom is operable, accessible, exclusively retained against other users and supported by declared accommodation duties. Temporary absence may count only with continuing actual access/readiness/retention evidence; physical presence every night is not required. Initial unreceived offers, paid no-shows, cancelled/terminated/released/closed/unusable or repurposed intervals are not fulfilled time. Actual replacement room segments under one continuing resident service make one nonoverlapping place-time output with both rooms resources retained. Do not add old/new rooms or turn two shift residents into two exclusive whole-room days. Unknown handover, condition, access, exclusivity or time blocks output, not default fulfillment. Source the local day convention and actual duration; do not assume24hours or convert fees/weeks/terms/months/occupied nights to room-days.

Include real room availability/readiness, utilities including actual resident shared-appliance use, access/response, performed/failed/declined turnover/cleaning/repair, actual operator linen/laundry and full-life site/building/fitout/bed-mattress/furniture/HVAC/textile/common-equipment responsibility across all actual consumers and periods. Necessary idle/unavailable/failed/no-show duties stay in responsible pools; they do not create output or vanish with occupancy statistics.

Selected route is a self-catering single-room residential accommodation operation with actual shared kitchen/dining/bathroom/common facilities, furnishing, utilities, access/support, cleaning and laundry responsibility. Resident self-prepared food purchase/manufacture and ordinary private travel are outside this selected accommodation product; actual operator-supplied package duties and resident-origin handling remain. Any real included meal, transport or other ancillary duty requires physically matched complete provider coverage or actual exclusive completion of missing underlying stages once, with native quantities, source, owner and coverage links. A true self-operated kitchen, transport, energy-conversion or industrial-laundry production route requires reviewed module/process expansion before application; a generic service card cannot swallow it. Missing quantities or coverage block a complete package. Restaurant existence, employment benefit or cash credit alone neither proves housing-package inclusion nor licenses deleting a real obligation. Current catered worker-village offers are not automatically in scope.

Current university and worker residence examples support physical collection questions, not universal numeric or legal rules. Prices, month/term lengths, cleaning or linen schedules, meal counts, room counts, occupancy factors, service lifetimes, chemical/leak factors and UUIDs are not inferred. Incomplete identities, quantities or duties remain explicit actual-data/use restrictions; missing UUID or generic range alone is not a principle error.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.worker-hostel-exclusive-single-room-place-days |
| classification_refs | CPC 3.0:63220 (narrower) |
| covered_products | This PCR applies only to self-catering private single-person furnished bedrooms continuously assigned to workers in a workers hostel or camp. Record the actual worker-accommodation purpose, operator/site and assignment, including seasonal or short-term arrangements without imposing a default stay duration. Student residence, visitor accommodation and unrelated residential purposes are separate outputs. A work roster, employment benefit or paid licence does not establish delivered accommodation. Hot-bedded shift sharing, shared bedrooms, whole apartments and catered camp production routes are outside this selected single-room route. |
| excluded_products | Unreceived paid/no-show offers; released/closed/unusable/repurposed periods; shared bedroom/hot-bedded shift turnover/couple/family/whole self-contained units; occupied visitor-night or nominal capacity conversion; mobile sleeper or recreation camp package; true unreviewed onsite production or incomplete included meal/transport/package scope |
| representative_product | Actually delivered worker-hostel exclusive single-room place-day |
| production_route | Actual received room handover -> continuously maintained exclusive private-room residential availability plus real common services -> actual move/release/termination and physical next-use/receiver handoffs |
| market_state | Delivered maintained residential accommodation service, not sale of room/bed/assets, ownership, employment benefit, paper licence or booking |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actually delivered worker-hostel exclusive single-room place-day |
| How much | 1 Item(s) |
| How well | One established resident in one actual exclusively retained operable private single bedroom, real ongoing access/readiness and actual complete selfcatering accommodation/package duty; no human-presence-every-night requirement |
| How long or cycle | Sourced actual local residential service-day duration with actual fulfilled nonoverlapping time, timezone/UTC-offset/DST/elapsed intervals; term/vacation/roster/task/stock/reporting/full-life phases kept distinct |
| reference_flow_link | worker_hostel_room_day |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Actually delivered worker-hostel exclusive single-room place-day |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers |actual_site_operator_and_purpose_neutral_residential_scope; actual_private_single_person_bedroom_configuration; resident_assignment_and_initial_received_handover; actual_operable_readiness_access_exclusive_retention; eligible_absence_and_closed_released_terminated_exclusion; service_day_source_start_end_timezone_UTC_DST_elapsed; move_segments_unique_resident_place_time; actual_selfcatering_shared_kitchen_bathroom_common_facilities; actual_provider_cleaning_laundry_package_fullstage_coverage; all_resident_visitor_conference_nonresident_consumers; necessary_idle_failed_N0_pool_final_resolution; full_alluser_building_furnishing_textile_asset_life; every_native_operand_unit_basis_method_state_time_source; actual_receiver_substance_medium_and_onceonly_handoff; verified_worker_hostel_or_camp_purpose_and_continuous_assignment |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `assigned_room_reference` | worker_hostel_room_day | Count | Item(s) | Apply physical_residential_delivery to actual initial received handover and continuing exclusive operable access/readiness. Use unique resident assignment/service-day time segments under fulfilled_place_days; actual absent presence status is distinct from delivery. Initial unreceived/no-show or closed/released/repurposed time cannot count, regardless of charges. Preserve one continuing resident output through actual move segments, without duplicate room-time. |
| `exclusive_room_time` | worker_hostel_room_day and all room resources | Count and actual native time/area | Item(s) and actual native time/area units | Use actual private single-bedroom IDs with nonoverlapping resident assignment, room-readiness and service-day time segments. Shared household kitchen/bathroom does not mean a shared sleeping bedroom. Hot-bedding, sub-day shift turnover, couples/family/multiple sleeping spaces or whole apartment cannot be converted through nominal room/site counts. Actual shift sleeping hours do not alone change a continuously assigned residential product. Partial time enters only with source-backed same-profile duration and all actual duties; any unsupported equivalence blocks use. |
| `linen_state_conversion` | laundry_service; linen_lifetime; freight | Mass; actual native textile count | Actual dry textile kg; independent wet/conditioned/cargo units | Actual service dry mass, conditioned cloth, used wet freight and reusable manufacture are distinct. Same sample water-only definitions and percent-to-ratio evidence required before dry/wet conversion. Other volatile loss-on-drying/soil is not pure water or fibre. |
| `native_operands` | all inventory rows | Actual compatible native property | Actual native units | Every quantity, numerator/denominator, repetition, conversion, density/temperature, asset equivalence, activity/factor/composition/fate has independent native unit/basis/method/state/sampletime/source. Unknown basis or unsupported physical equivalent blocks calculation/binding, not zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actually operated selfcatering residence with identified private single-person bedroom, established received handover/assignment and continuing actual exclusive operable access/readiness records |
| starting_condition_role | Real maintained accommodation and complete service-asset responsibility; existing ownership/facility is not burden-free |
| product_classification_scope | This PCR applies only to self-catering private single-person furnished bedrooms continuously assigned to workers in a workers hostel or camp. Record the actual worker-accommodation purpose, operator/site and assignment, including seasonal or short-term arrangements without imposing a default stay duration. Student residence, visitor accommodation and unrelated residential purposes are separate outputs. A work roster, employment benefit or paid licence does not establish delivered accommodation. Hot-bedded shift sharing, shared bedrooms, whole apartments and catered camp production routes are outside this selected single-room route. |
| recursive_input_rule | Do not buy the identical final assigned place-day as its own input. A complete real provider replaces only its actual physically matched underlying duties; do not erase or double model the independent residence |
| upstream_dataset_requirement | Actual utilities/materials/provider supply; complete site/building/fitout/furnishing/bed/mattress/HVAC/textile manufacture-install-maintain-replace-EOL all users/periods once. Real included duties require full physical provider or reviewed actual production-route expansion and exclusive actual completion of missing stages |
| disclosure | Actual assignment/initial receipt/access/readiness/exclusive retention/absence/unavailability/time/substitution/release; actual package, all real output/consumer handoffs and necessary idle/failure/N0 closure; native quantity/source/lifecycle/provider/receiver/species/medium gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `physical_residential_delivery` | residence_operation | N_target is the sum of actual nonoverlapping fulfilled exclusive resident room-place time divided by the sourced matching service-day duration in one frozen compatible site/profile. Each resident-assignment-service-day ID and its actual start/end/timezone/UTC-offset/DST/elapsed interval is reconciled once. Count only after actual initial resident handover/receipt and real entry arrangements are established, and only while that private single-person bedroom is operable, accessible, exclusively retained against other users and supported by declared accommodation duties. Temporary absence may count only with continuing actual access/readiness/retention evidence; physical presence every night is not required. Initial unreceived offers, paid no-shows, cancelled/terminated/released/closed/unusable or repurposed intervals are not fulfilled time. Actual replacement room segments under one continuing resident service make one nonoverlapping place-time output with both rooms resources retained. Do not add old/new rooms or turn two shift residents into two exclusive whole-room days. Unknown handover, condition, access, exclusivity or time blocks output, not default fulfillment. Source the local day convention and actual duration; do not assume24hours or convert fees/weeks/terms/months/occupied nights to room-days. | southampton-2026-27; stantony-2026-27; ucl-home-2026-27 |
| `complete_life` | all assets and resources | Collect complete manufacture, installation, fitout, maintenance, actual replacement and end-of-life for buildings, beds/mattresses, furnishings, equipment, textiles and reusable supports across all users and periods. Compatible lifetime driver is observed all-user history plus sourced remaining productive-equivalent service OR actual terminated total, with each independent native quantity/equivalence/unit/basis/method/state/time/source, uncertainty, sensitivity and update. Annual N_target is not lifetime. Calendar/capacity-time drivers must include idle responsibility in attributable numerators too; productive-service drivers require complete actual and sourced remaining use and full burden closure. One complete asset/provider coverage OR exclusively supplemented missing stages, never both; missing actual stages must actually be integrated once with native quantities/source/owner/coverage links before full-chain use. |  |
| `actual_package_route` | accommodation and actual providers | Selected route is a self-catering single-room residential accommodation operation with actual shared kitchen/dining/bathroom/common facilities, furnishing, utilities, access/support, cleaning and laundry responsibility. Resident self-prepared food purchase/manufacture and ordinary private travel are outside this selected accommodation product; actual operator-supplied package duties and resident-origin handling remain. Any real included meal, transport or other ancillary duty requires physically matched complete provider coverage or actual exclusive completion of missing underlying stages once, with native quantities, source, owner and coverage links. A true self-operated kitchen, transport, energy-conversion or industrial-laundry production route requires reviewed module/process expansion before application; a generic service card cannot swallow it. Missing quantities or coverage block a complete package. Restaurant existence, employment benefit or cash credit alone neither proves housing-package inclusion nor licenses deleting a real obligation. Current catered worker-village offers are not automatically in scope. | exeter-residences; ucl-home-2026-27; skilouise-staff; stayover-route-limit |
| `complete_consumers_and_periods` | all resources | Declare all resident/visitor/conference/tenant and nonresident common consumers across term, vacation, roster, actual absence/readiness, maintenance, replacement, idle and asset-life periods. Trace direct tasks first; record compatible resource-specific physical attribution, carry source/recipient/final resolution and full pool closure. Do not use student-only occupied nights, annual N, payment or nominal room capacity as a universal all-user/lifetime denominator. Actual direct task/meter trace first, OR compatible raw quantity*target_driver/positive COMPLETE all_consumer_driver for that resource scope. Enumerate all real assigned residents, other rooms/visitor/conference/ancillary/tenant and nonresident common users and periods. Necessary same-pool vacancy, standby, blocked-room, failed/cancelled/no-show duties enter pool resource totals before allocation to real output responsibility. Nominal capacity, merely listing idle records, or deleting closed days cannot leave burden unowned. Crossperiod carry retains source, receiving period and final resolution links; unresolved responsibility blocks the final package. Divide assigned target total by positive EXACT same-scope N_target once; already-per-reference records are not divided again; N_target=0 retains raw resources without division. | exeter-residences |
| `route_and_evidence_limits` | all methods | Sources demonstrate real room/service arrangements and collection questions only. No rent, tax, legal deadline, day length, room count/dimension, cleaning interval, meal count, useful-life value, occupancy factor or emissions factor is imposed. These are foreground collection and proposed accounting rules, not equations quoted from operators. Independent real production technologies require reviewed scope/module expansion; no boiler/chiller/generator/industrial laundry/onsite kitchen assumed. |  |
| `actual_land_interfaces` | site building and providers | Actual site/land occupation and any evidenced historical or new transformation are physical interfaces separate from Count assets. Collect actual area, occupation duration/interval, land state/source/location and any real from-to transformation state/date/area, lifecycle stage and responsible owner. Use native area*time for occupation and native area for actual transformation, with sourced native conversion only where required. Do not infer a habitat/soil class, land-type conversion factor or a transformation merely because the current site exists; unknown applicable historical/new transformation is a data gap. Land embodied in a complete building/site/provider is linked as the same physical interface and not added twice. Actually complete a real missing land duty once before full-chain use; a disclosure or asset count cannot substitute for physical area/time. |  |
| dedicated_classification_gate | worker_hostel_room_day | This PCR applies only to self-catering private single-person furnished bedrooms continuously assigned to workers in a workers hostel or camp. Record the actual worker-accommodation purpose, operator/site and assignment, including seasonal or short-term arrangements without imposing a default stay duration. Student residence, visitor accommodation and unrelated residential purposes are separate outputs. A work roster, employment benefit or paid licence does not establish delivered accommodation. Hot-bedded shift sharing, shared bedrooms, whole apartments and catered camp production routes are outside this selected single-room route. Dedicated scope eligibility and the actual completed output gate must both be evidenced. Keep other classifications and incompatible configurations out of N_target, but retain all real other consumers, idle duties and full-lifecycle burdens in their appropriate resource pools. Unknown eligibility blocks use; it is not zero. | unsd-cpc3-residential |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| residence_operation | Assigned single-room residential accommodation and actual common support | required | Actual initial received private-room handover and continuing fulfilled exclusive operable access/readiness | Continuous residential availability with actual task/turnover/repair/linen/absence/term/vacation/roster periods | worker_hostel_room_day |

One integrated accommodation node owns actual room/common duties and task batches. cp_residence enumerates every intended residential, visitor/conference, tenant and ancillary output/handoff and every nonresident common user before target extraction. Useful materials, residues and wastes are distinct. Failed room/linen/task states retain original IDs and actual reclean/repair/redeploy/transfer/pending/discard paths without new accepted output. Shared self-catering appliances remain accommodation duties; true independent onsite production requires reviewed route/module/node expansion under actual_package_route.

### Process: Assigned single-room residential accommodation and actual common support (`residence_operation`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Actual alternating-current electricity at point of use `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Binding: `fixed`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_utilities; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Range evidence need: Actual meters/intervals or same-interval average power/time, room/resident/user boundary, complete competing consumers and necessary pool duty.

###### Actual externally delivered useful heat (`purchased_useful_heat_delivered_heat`)

Only actual useful heat delivered across this node boundary on an evidenced energy basis. Keep supply/return state, temperature grade, coverage and actual loss ownership. This generic heat identity does not assert natural gas, steam mass, boiler efficiency or a temperature. Cooling, fuel energy and unsupported steam-to-energy cases remain outside this identity.

- Selected flow: Actual externally delivered useful heat `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- Binding: `fixed`
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_utilities; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Range evidence need: Actual useful delivery quantities/native units, state/temperature/reference method and provider loss/energy/assets coverage, complete user drivers.

###### Actual liquid treated tap-water supply (`water_supply_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_utilities; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Range evidence need: Actual source/supplier/meter intervals/native quantities, hot/cold/end-use scope and all-user responsibility, independently collected fates.

###### Actual independently recorded synthetic detergent supply (`operating_materials_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Actual independently recorded synthetic detergent supply `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_supplies; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`
- Range evidence need: Actual SKU/composition/use/net material stocks excluding container tare, actual EACH/TOTAL and per-piece/density factors, matched UNUSED returns and packaging-production coverage.

###### Actual completed operator-linen laundry service (`laundry_service`)

Actual performed service on supported dry-textile throughput or actual compatible native provider result, not new textile or wet cargo. Complete wash/dry/finish/energy/water/chemical/effluent/fullasset/transport/rental scope OR actual missing supplements once.

- Selected flow: Actual completed operator-linen laundry service
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_linen; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_linen`
- Range evidence need: Actual batch/textile/room-assignment links, dry/conditioned/wet definitions/samples/conditioning and conversion source, rewash and complete all-client coverage; no kg/night or fallback percentage.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actually delivered worker-hostel exclusive single-room place-day (`worker_hostel_room_day`)

Actual established resident private-room service governed by physical_residential_delivery and fulfilled_place_days: one received single-bedroom assignment, continuously operable/access-ready/exclusive for actual fulfilled time. Eligible absence may qualify; initial unreceived paid-no-show, closure, release or reassignment does not. A continuing room move has one output and both resource segments.

- Selected flow: Actually delivered worker-hostel exclusive single-room place-day
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residence`
- Range evidence need: Actual private single-bedroom room/site/configuration; resident assignment and initial handover/receipt; operability/readiness/exclusive retention/access; sourced local service-day and actual time/DST; temporary absence, closure/release/substitution/termination/reversal and complete package/all-user responsibility.

##### Waste flows

###### Actual separately collected used lubricating oil (`independent_maintenance_waste_used_lubricating_oil`)

Only actual petroleum-based or synthetic lubricating oil used and contaminated through use, independently collected and transferred. Retain actual composition, water/contaminant state and receiver. Fresh oil, cooking oil, refrigerant, aqueous wastewater and residues retained in filters/equipment do not use this identity. No recycling or disposal route is assumed.

- Selected flow: Actual separately collected used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual source task/SKU/native net quantity/composition/density-temperature if used, receiver coverage and whole/part/mixture nonadditive exclusion links.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil carbon dioxide emitted to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_species; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Range evidence need: Exact substance/basis/particle/medium and independently measured native quantity OR compatible real activity-factor with every operand native metadata, composition/fate/gas state only needed once, and provider overlap exclusion.

###### Actual separately evidenced fossil methane emitted to air (`direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil methane emitted to air `08a91e70-3ddc-11dd-9610-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_species; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Range evidence need: Exact substance/basis/particle/medium and independently measured native quantity OR compatible real activity-factor with every operand native metadata, composition/fate/gas state only needed once, and provider overlap exclusion.

###### Actual separately evidenced nitrous oxide emitted to air (`direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced nitrous oxide emitted to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_species; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Range evidence need: Exact substance/basis/particle/medium and independently measured native quantity OR compatible real activity-factor with every operand native metadata, composition/fate/gas state only needed once, and provider overlap exclusion.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `delivered_resident_scope` | all accommodation resources | Only fulfilled_place_days from physical_residential_delivery may enter N_target. Actual resident purpose, bill, nominal capacity or occupied visitor-night cannot replace the actual delivered room-place time. Same-scope physical output and complete duties are mandatory. |  |
| `complete_output_set` | target and other consumers | Enumerate all actual assigned residential, visitor/conference, tenant and other physical service outputs and handoffs with native quantities and configuration/time. Nonresident kitchen/common/dining users remain real shared-resource consumers where present. Intended lodging/ancillary outputs differ from usable materials, residues and waste. No room plus its included bed double output, no assumed resident=visitor-night, no fee/revenue/employee/student status allocation or automatic recovery credit. Resource-specific actual direct trace first or evidenced compatible complete physical drivers. |  |
| `physical_pool_closure` | all resources | Actual direct task/meter trace first, OR compatible raw quantity*target_driver/positive COMPLETE all_consumer_driver for that resource scope. Enumerate all real assigned residents, other rooms/visitor/conference/ancillary/tenant and nonresident common users and periods. Necessary same-pool vacancy, standby, blocked-room, failed/cancelled/no-show duties enter pool resource totals before allocation to real output responsibility. Nominal capacity, merely listing idle records, or deleting closed days cannot leave burden unowned. Crossperiod carry retains source, receiving period and final resolution links; unresolved responsibility blocks the final package. Divide assigned target total by positive EXACT same-scope N_target once; already-per-reference records are not divided again; N_target=0 retains raw resources without division. |  |
| `complete_asset_life` | assets textiles and providers | Apply complete_life and actual_asset_equivalent to complete all-user actual observed and sourced remaining life or actual terminated life, including full site/building/fitout/furniture/textile manufacture-install-maintain-replace-EOL once. Keep calendar/idle versus productive-use driver responsibilities compatible; actual missing stages must be completed, not merely disclosed. |  |
| `material_stock_choice` | standalone operating materials | S=assigned opening+inbound external receipts measured as net material after container tare, with NO outbound return deducted-closing including retained recovery, with actual material receipts excluding container tare. Choose exactly one: gross S/N_target INPUT plus actual matched UNUSED external return/N_target separate OUTPUT; OR consumed-only (S-matched_unused_return)/N_target INPUT and OMIT that matched return OUTPUT. No adding returns to input, double deduction, unrelated negative netting or automatic avoided-production credit. Internal loops are not new external supply; spent material retains original supply burden. |  |
| `fluid_provenance_fates` | refrigerant supply recovery and exits | Execute actual_fluid_ledger with exclusive actual origin, installed/stored states and exits. UNUSED same-source supply returns alone qualify for matched consumed-only deduction/OMIT. USED recovered export retains original manufacture burden, is not new unused fluid and receives no automatic credit. |  |
| `failed_and_reworked_routes` | room linen support events | Identify actual unready/blocked/failed room or linen state and its originating task/period. Record actual reclean, repair, return/redeploy, usable external transfer, retained-pending or discard path. Rewash/reclean retains resources once, never creates extra accepted room-day or new textile purchase. Actual unresolved unprovided time cannot enter N_target; necessary failed/idle resources remain in responsible pool. Declined cleaning alone does not undo real delivery. Released room re-used by another has another actual output, not retained absence of the original resident. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_residence | residence_operation | worker_hostel_room_day and all physical service denominators | Actual assigned single-room delivery, availability and all-user ledger | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; fulfilled_place_time; fulfilled_place_time_unit; fulfilled_place_time_basis; fulfilled_place_time_method; fulfilled_place_time_state; fulfilled_place_time_sample_time; fulfilled_place_time_source; local_service_day_duration; local_service_day_duration_unit; local_service_day_duration_basis; local_service_day_duration_method; local_service_day_duration_state; local_service_day_duration_sample_time; local_service_day_duration_source; fulfilled_room_days; fulfilled_room_days_unit; fulfilled_room_days_basis; fulfilled_room_days_method; fulfilled_room_days_state; fulfilled_room_days_sample_time; fulfilled_room_days_source; occupied_resident_nights; occupied_resident_nights_unit; occupied_resident_nights_basis; occupied_resident_nights_method; occupied_resident_nights_state; occupied_resident_nights_sample_time; occupied_resident_nights_source; actual_resident_count; actual_resident_count_unit; actual_resident_count_basis; actual_resident_count_method; actual_resident_count_state; actual_resident_count_sample_time; actual_resident_count_source; room_area; room_area_unit; room_area_basis; room_area_method; room_area_state; room_area_sample_time; room_area_source; actual_assignment_duration; actual_assignment_duration_unit; actual_assignment_duration_basis; actual_assignment_duration_method; actual_assignment_duration_state; actual_assignment_duration_sample_time; actual_assignment_duration_source; competing_output_quantity; competing_output_quantity_unit; competing_output_quantity_basis; competing_output_quantity_method; competing_output_quantity_state; competing_output_quantity_sample_time; competing_output_quantity_source; room_id; building_id; configuration_version; configuration_effective_start; configuration_effective_end; actual_plan_source; single_private_bedroom_evidence; resident_id; resident_purpose_source; assignment_id; assignment_effective_start; assignment_effective_end; initial_handover_id; initial_handover_time; actual_resident_receipt_source; entry_key_access_source; exclusive_room_retention_source; actual_operability_readiness_source; actual_service_obligation_source; temporary_absence_start; temporary_absence_end; retained_access_absence_source; actual_closure_unavailability_intervals; actual_room_release_repurpose_source; cancellation_termination_keyreturn_records; delivered_assignment_service_day_id; local_service_day_definition; local_service_day_source; move_segment_ids; move_reversal_links; physical_fulfillment_source; complimentary_status; cleaning_declined_source; all_actual_other_consumers; all_intended_output_ids; output_handoff_records; necessary_idle_failure_pool_evidence; carry_source_record; carry_receiving_period; carry_final_resolution | Inspect actual room plan/single-bedroom configuration; link resident assignment to received handover, keys/access, room readiness and service obligation records. Join actual start/end/offset/DST, temporary absence, closure, release, substitute-room and termination/reversal records into nonoverlapping resident-time segments. Execute assigned_room_reference and fulfilled_place_days, retaining one continuing resident service ID across actual moves and both rooms resource segments. Enumerate every other intended output/handoff and common consumer with native quantity/driver. Apply physical_pool_closure; unknown handover/access/state/time blocks fulfillment. | Item(s) actual single-resident private-room place-day; actual separate native room-place time, local-day duration, occupied nights, area and all other output units | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_utilities | residence_operation | electricity; purchased_useful_heat; water_supply | Actual aligned meters and useful utility deliveries | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; register_start; register_start_unit; register_start_basis; register_start_method; register_start_state; register_start_sample_time; register_start_source; register_end; register_end_unit; register_end_basis; register_end_method; register_end_state; register_end_sample_time; register_end_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; interval_quantity; interval_quantity_unit; interval_quantity_basis; interval_quantity_method; interval_quantity_state; interval_quantity_sample_time; interval_quantity_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; thermal_delivery_temperature; thermal_delivery_temperature_unit; thermal_delivery_temperature_basis; thermal_delivery_temperature_method; thermal_delivery_temperature_state; thermal_delivery_temperature_sample_time; thermal_delivery_temperature_source; utility_identity; source_or_provider_id; meter_id; meter_interval; calibration_source; valid_version; reset_rollover_source; already_applied_factor; residence_room_shared_lighting_HVAC_scope; room_outlet_scope; bathroom_hotwater_scope; resident_kitchen_appliance_scope; useful_thermal_delivery_gate; provider_loss_asset_scope; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual compatible start/end registers and reset/rollover evidence, meter factor or actual interval total; do not combine alternatives. Integrated kWh is not multiplied by time. Only same-interval average power with actual cycling/standby and sourced duration/conversion may substitute. Collect private-room, common kitchen/bathroom/laundry/HVAC/support boundaries and complete compatible other consumers. Record actual purchased useful heat/cooling delivery state and provider loss/asset scope separately from underlying carriers; supplied water is not wastewater. Execute actual_utility and physical_pool_closure. | Native kWh/MJ or actual useful thermal unit, supplied m3 and independent native conversions/physical drivers | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_supplies | residence_operation | operating_materials; actual_fuels; unused_supply_returns | Actual native material and fuel stocks | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_sample_time; container_tare_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_including_recovery; closing_including_recovery_unit; closing_including_recovery_basis; closing_including_recovery_method; closing_including_recovery_state; closing_including_recovery_sample_time; closing_including_recovery_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; material_used; material_used_unit; material_used_basis; material_used_method; material_used_state; material_used_sample_time; material_used_source; fuel_burn; fuel_burn_unit; fuel_burn_basis; fuel_burn_method; fuel_burn_state; fuel_burn_sample_time; fuel_burn_source; per_item_mass; per_item_mass_unit; per_item_mass_basis; per_item_mass_method; per_item_mass_state; per_item_mass_sample_time; per_item_mass_source; item_count; item_count_unit; item_count_basis; item_count_method; item_count_state; item_count_sample_time; item_count_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; material_SKU; formulation_identity; material_use; stock_scope; EACH_TOTAL_extent; actual_recipe_source_if_used; concentrate_prepared_solution_nonadditive_view; unused_return_input_match; return_receiver; stock_convention; internal_transfer_ids; provider_included_supplies_scope; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record each actual SKU/formulation/purpose and opening, inbound external receipts measured as net material after container tare, with NO outbound return deducted, closing including retained recovery, actual material use/burn and matched same-state UNUSED returns. Exclude container tare; EACH/TOTAL, density-temperature and count-to-mass require actual compatible source evidence. Prepared solution versus concentrate/water/components are nonadditive; provider-covered supplies are not repeated. Execute actual_supply_stock and physical_pool_closure; no inferred fuel equipment or grade. | Actual native material/fuel mass, volume, count and applicable fractions; kg only through supported conversions | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_linen | residence_operation | laundry_service | Actual completed laundry batches and textile state | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; dry_textile_mass_processed; dry_textile_mass_processed_unit; dry_textile_mass_processed_basis; dry_textile_mass_processed_method; dry_textile_mass_processed_state; dry_textile_mass_processed_sample_time; dry_textile_mass_processed_source; conditioned_textile_mass; conditioned_textile_mass_unit; conditioned_textile_mass_basis; conditioned_textile_mass_method; conditioned_textile_mass_state; conditioned_textile_mass_sample_time; conditioned_textile_mass_source; wet_cargo_mass; wet_cargo_mass_unit; wet_cargo_mass_basis; wet_cargo_mass_method; wet_cargo_mass_state; wet_cargo_mass_sample_time; wet_cargo_mass_source; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_sample_time; container_tare_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; as_received_sample_mass; as_received_sample_mass_unit; as_received_sample_mass_basis; as_received_sample_mass_method; as_received_sample_mass_state; as_received_sample_mass_sample_time; as_received_sample_mass_source; wet_water_fraction; wet_water_fraction_unit; wet_water_fraction_basis; wet_water_fraction_method; wet_water_fraction_state; wet_water_fraction_sample_time; wet_water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_sample_time; percent_to_ratio_factor_source; rewash_quantity; rewash_quantity_unit; rewash_quantity_basis; rewash_quantity_method; rewash_quantity_state; rewash_quantity_sample_time; rewash_quantity_source; returned_textile_quantity; returned_textile_quantity_unit; returned_textile_quantity_basis; returned_textile_quantity_method; returned_textile_quantity_state; returned_textile_quantity_sample_time; returned_textile_quantity_source; unresolved_linen_difference; unresolved_linen_difference_unit; unresolved_linen_difference_basis; unresolved_linen_difference_method; unresolved_linen_difference_state; unresolved_linen_difference_sample_time; unresolved_linen_difference_source; linen_pool_id; textile_item_ids; provider_id; batch_id; task_id; transfer_id; served_room_stay_links; dry_mass_definition; sample_id; conditioning_method; sample_population; water_only_definition_source; other_volatile_soil_exclusion; wash_dry_finish_scope; energy_water_chemicals_effluent_scope; rental_textile_asset_freight_treatment_scope; complete_all_client_records; completed_missing_duty_links; rewash_parent_event | Link actual completed operator-linen provider batches to assignment/task/textile IDs, service scope and all clients. Measure actual supported dry-textile throughput or actual compatible native service result; collect sampled wet/conditioned/dry definitions and actual water/other-volatile/soil evidence before conversion. Rewash and failed duties retain resources without another room-day. Record wash/dry/finish/resources/effluent/transport/equipment/rental life coverage and exclusive completed missing stages. Resident self-service laundry is separate actual common equipment/utility use. Execute actual_linen_basis and physical_pool_closure; independent industrial laundry needs reviewed expansion. | Actual dry-textile kg or supported provider-native unit; separate wet/conditioned/sample and freight states | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_assets | residence_operation | linen_lifetime; building_room_assets; usable_asset_exports; retired_linen; retired_equipment; site_land_occupation; site_land_transformation | Complete all-user assets and lifecycle events | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; asset_native_quantity; asset_native_quantity_unit; asset_native_quantity_basis; asset_native_quantity_method; asset_native_quantity_state; asset_native_quantity_sample_time; asset_native_quantity_source; component_native_quantity; component_native_quantity_unit; component_native_quantity_basis; component_native_quantity_method; component_native_quantity_state; component_native_quantity_sample_time; component_native_quantity_source; job_used_driver; job_used_driver_unit; job_used_driver_basis; job_used_driver_method; job_used_driver_state; job_used_driver_sample_time; job_used_driver_source; observed_life_driver; observed_life_driver_unit; observed_life_driver_basis; observed_life_driver_method; observed_life_driver_state; observed_life_driver_sample_time; observed_life_driver_source; remaining_life_driver; remaining_life_driver_unit; remaining_life_driver_basis; remaining_life_driver_method; remaining_life_driver_state; remaining_life_driver_sample_time; remaining_life_driver_source; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_sample_time; lifetime_all_user_driver_source; driver_equivalence_factor; driver_equivalence_factor_unit; driver_equivalence_factor_basis; driver_equivalence_factor_method; driver_equivalence_factor_state; driver_equivalence_factor_sample_time; driver_equivalence_factor_source; retirement_net_mass; retirement_net_mass_unit; retirement_net_mass_basis; retirement_net_mass_method; retirement_net_mass_state; retirement_net_mass_sample_time; retirement_net_mass_source; usable_transfer_net_mass; usable_transfer_net_mass_unit; usable_transfer_net_mass_basis; usable_transfer_net_mass_method; usable_transfer_net_mass_state; usable_transfer_net_mass_sample_time; usable_transfer_net_mass_source; retained_component_quantity; retained_component_quantity_unit; retained_component_quantity_basis; retained_component_quantity_method; retained_component_quantity_state; retained_component_quantity_sample_time; retained_component_quantity_source; asset_id; component_id; asset_BOM_source; bed_mattress_locker_equipment_role; actual_room_bed_membership; manufacture_install_scope; maintenance_replacement_event_ids; EOL_scope; all_user_all_period_records; observed_history_source; remaining_life_source; actual_termination_source; idle_responsibility_in_numerators; equivalence_method_source; provider_rental_overlap; usable_or_waste_receiver; remaining_life_transfer_owner; whole_component_nonadditive_links; already_covered_EOL_transport_treatment; carry_source_record; carry_receiving_period; carry_final_resolution; site_occupied_area; site_occupied_area_unit; site_occupied_area_basis; site_occupied_area_method; site_occupied_area_state; site_occupied_area_sample_time; site_occupied_area_source; site_occupation_duration; site_occupation_duration_unit; site_occupation_duration_basis; site_occupation_duration_method; site_occupation_duration_state; site_occupation_duration_sample_time; site_occupation_duration_source; site_occupation_area_time; site_occupation_area_time_unit; site_occupation_area_time_basis; site_occupation_area_time_method; site_occupation_area_time_state; site_occupation_area_time_sample_time; site_occupation_area_time_source; land_transformation_area; land_transformation_area_unit; land_transformation_area_basis; land_transformation_area_method; land_transformation_area_state; land_transformation_area_sample_time; land_transformation_area_source; land_location; occupation_start; occupation_end; occupation_time_convention_source; land_state_source; transformation_from_state; transformation_to_state; transformation_date; historical_or_new_transformation_evidence; land_interface_id; land_lifecycle_stage; land_responsibility_owner; land_provider_asset_sameinterface_exclusion; land_missing_stage_completed_link; land_applicability_unknown_status | Inventory actual site/building/fitout, bed/mattress/furnishing/common equipment and supplied textiles by whole/component/event genealogy. Collect actual native quantity, supported dimensional equivalence, actual job-use and observed all-user plus sourced compatible remaining life or actual termination. Link manufacture/install/maintain/replace/EOL, real receivers, idle periods and remaining-life owner. Whole/part views and rental-covered textile stages are nonadditive. Execute complete_life, actual_asset_equivalent and physical_pool_closure; annual N is not lifetime. Collect actual native occupied area/time and independently evidenced historical/new transformation from-to/date/area, stage, owner, location/source; match the same land interface in provider/asset scopes. Execute actual_land_interfaces; no habitat/soil/factor or land-to-Count inference. | Actual native asset/component and compatible use/history/remaining/lifetime driver units; Item(s) asset-equivalent only with evidence; actual native land area, time and area*time (not Count) | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_tasks | residence_operation | operating tasks and bed/linen dispositions | Actual continuous duties and turnover/reclean events | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; performed_task_quantity; performed_task_quantity_unit; performed_task_quantity_basis; performed_task_quantity_method; performed_task_quantity_state; performed_task_quantity_sample_time; performed_task_quantity_source; task_duration; task_duration_unit; task_duration_basis; task_duration_method; task_duration_state; task_duration_sample_time; task_duration_source; cleaned_area; cleaned_area_unit; cleaned_area_basis; cleaned_area_method; cleaned_area_state; cleaned_area_sample_time; cleaned_area_source; actual_repeat_count; actual_repeat_count_unit; actual_repeat_count_basis; actual_repeat_count_method; actual_repeat_count_state; actual_repeat_count_sample_time; actual_repeat_count_source; served_room_days; served_room_days_unit; served_room_days_basis; served_room_days_method; served_room_days_state; served_room_days_sample_time; served_room_days_source; reclean_material_quantity; reclean_material_quantity_unit; reclean_material_quantity_basis; reclean_material_quantity_method; reclean_material_quantity_state; reclean_material_quantity_sample_time; reclean_material_quantity_source; task_id; task_kind; original_task_id; batch_or_continuous_interval; room_assignment_event_links; scheduled_performed_declined_failed_status; offspec_room_linen_state; actual_reclean_repair_redeploy_return_discard_decision; receiver_or_next_use_link; provider_direct_scope | Collect actual room/common access/readiness, cleaning/turnover/repair/linen tasks by original event and assignment/period. Distinguish requested/performed/declined/failed/repeated states and actual reclean/repair/redeploy/useful transfer/pending/discard paths. Continuous residence includes actual term/vacation/roster/absence phases; no universal cleaning frequency. Failed work keeps burden without accepted output; declined cleaning alone does not undo fulfilled delivery. Apply failed_and_reworked_routes and physical_pool_closure. | Actual native performed result/count/area/time and independently sourced compatible conversions | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_providers | residence_operation | contracted_support; included_ancillary_service | Completed physical provider and included ancillary duties | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; actual_native_service_quantity; actual_native_service_quantity_unit; actual_native_service_quantity_basis; actual_native_service_quantity_method; actual_native_service_quantity_state; actual_native_service_quantity_sample_time; actual_native_service_quantity_source; physical_equivalence_factor; physical_equivalence_factor_unit; physical_equivalence_factor_basis; physical_equivalence_factor_method; physical_equivalence_factor_state; physical_equivalence_factor_sample_time; physical_equivalence_factor_source; completed_missing_quantity; completed_missing_quantity_unit; completed_missing_quantity_basis; completed_missing_quantity_method; completed_missing_quantity_state; completed_missing_quantity_sample_time; completed_missing_quantity_source; actual_meal_quantity; actual_meal_quantity_unit; actual_meal_quantity_basis; actual_meal_quantity_method; actual_meal_quantity_state; actual_meal_quantity_sample_time; actual_meal_quantity_source; actual_activity_quantity; actual_activity_quantity_unit; actual_activity_quantity_basis; actual_activity_quantity_method; actual_activity_quantity_state; actual_activity_quantity_sample_time; actual_activity_quantity_source; unused_included_service_obligation; unused_included_service_obligation_unit; unused_included_service_obligation_basis; unused_included_service_obligation_method; unused_included_service_obligation_state; unused_included_service_obligation_sample_time; unused_included_service_obligation_source; provider_id; contract_package_id; actual_completed_task_ids; actual_package_inclusion_source; physical_native_unit_definition; quality_and_service_scope; actual_use_availability_obligation_basis; included_meal_ingredient_cooking_waste_coverage; included_activity_transport_asset_scope; materials_energy_water_assets_freight_receiver_matrix; complete_all_client_records; raw_already_converted_attributed_state; operator_direct_overlap; missing_stage_ids; completed_integration_dataset_link; integration_time; integration_time_zone; integration_source; integration_owner; integration_coverage_once; reviewed_kitchen_route_if_direct | Obtain actual delivered physical support/ancillary quantity, native unit/quality/equivalence and contract/inclusion/service records. Build actual all-client coverage/owner matrix for materials, energy/water, assets, residuals, freight and final treatment; match each duty exclusively to a complete provider or actually completed missing underlying stage. Fees, wage, benefits or labels are not quantities. Execute actual_provider_service and actual_package_route; true self-operated food/transport/conversion/industrial laundry requires reviewed route/module/node expansion before use. | Actual provider/meal/activity native physical unit and supported equivalent; Count Item(s) only if actually defined and compatible | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_refrigerants | residence_operation | refrigerant_supply; recovered_fluid_exports; contained_refrigerant_waste | Exclusive actual fluid origin stock and fate roles | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_sample_time; opening_installed_source; opening_stored_total; opening_stored_total_unit; opening_stored_total_basis; opening_stored_total_method; opening_stored_total_state; opening_stored_total_sample_time; opening_stored_total_source; new_factory_charge_entry; new_factory_charge_entry_unit; new_factory_charge_entry_basis; new_factory_charge_entry_method; new_factory_charge_entry_state; new_factory_charge_entry_sample_time; new_factory_charge_entry_source; net_standalone_receipts; net_standalone_receipts_unit; net_standalone_receipts_basis; net_standalone_receipts_method; net_standalone_receipts_state; net_standalone_receipts_sample_time; net_standalone_receipts_source; other_external_receipts; other_external_receipts_unit; other_external_receipts_basis; other_external_receipts_method; other_external_receipts_state; other_external_receipts_sample_time; other_external_receipts_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored_total; closing_stored_total_unit; closing_stored_total_basis; closing_stored_total_method; closing_stored_total_state; closing_stored_total_sample_time; closing_stored_total_source; unused_external_returns; unused_external_returns_unit; unused_external_returns_basis; unused_external_returns_method; unused_external_returns_state; unused_external_returns_sample_time; unused_external_returns_source; used_usable_export; used_usable_export_unit; used_usable_export_basis; used_usable_export_method; used_usable_export_state; used_usable_export_sample_time; used_usable_export_source; contained_waste_export; contained_waste_export_unit; contained_waste_export_basis; contained_waste_export_method; contained_waste_export_state; contained_waste_export_sample_time; contained_waste_export_source; retained_equipment_exit; retained_equipment_exit_unit; retained_equipment_exit_basis; retained_equipment_exit_method; retained_equipment_exit_state; retained_equipment_exit_sample_time; retained_equipment_exit_source; independently_evidenced_direct_release; independently_evidenced_direct_release_unit; independently_evidenced_direct_release_basis; independently_evidenced_direct_release_method; independently_evidenced_direct_release_state; independently_evidenced_direct_release_sample_time; independently_evidenced_direct_release_source; explicit_unknown; explicit_unknown_unit; explicit_unknown_basis; explicit_unknown_method; explicit_unknown_state; explicit_unknown_sample_time; explicit_unknown_source; opening_unused; opening_unused_unit; opening_unused_basis; opening_unused_method; opening_unused_state; opening_unused_sample_time; opening_unused_source; closing_unused; closing_unused_unit; closing_unused_basis; closing_unused_method; closing_unused_state; closing_unused_sample_time; closing_unused_source; retained_recovery_nonadditive; retained_recovery_nonadditive_unit; retained_recovery_nonadditive_basis; retained_recovery_nonadditive_method; retained_recovery_nonadditive_state; retained_recovery_nonadditive_sample_time; retained_recovery_nonadditive_source; blend_component_fraction; blend_component_fraction_unit; blend_component_fraction_basis; blend_component_fraction_method; blend_component_fraction_state; blend_component_fraction_sample_time; blend_component_fraction_source; system_id; chemical_or_blend_identity; composition_basis_source; lot_charge_role_ids; exclusive_stock_membership; factory_entry_opening_receipt_exclusion; other_receipt_exit_exclusion_ids; initial_charge_production_owner; unused_same_source_state_substock_evidence; matched_unused_return_id; used_recovery_transfer_ids; actual_used_export_state_source; internal_charge_recovery_ids; receiver_and_useful_acceptance; whole_part_mixed_content_exclusion; transport_treatment_provider_scope | Identify actual chemical/blend and each exclusive source/charge genealogy. Collect installed and stored opening/closing (retained recovered fluid is inside stored total), factory entry not already in opening, inbound standalone/other receipts measured after container tare with NO outbound return deducted, matched UNUSED returns, actual USED usable export, separate waste/retained-equipment exit and independently measured release; unresolved difference stays unknown. Record actual recipient/state/coverage. Execute actual_fluid_ledger, actual_species_amount where relevant and physical_pool_closure; top-up/recovery is not a leak measurement. | Actual chemical/blend/component native mass and state; no assumed refrigerant or leak factor | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_freight | residence_operation | freight | Unique actual packed load-leg and its own share | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; payload; payload_unit; payload_basis; payload_method; payload_state; payload_sample_time; payload_source; vehicle_gross; vehicle_gross_unit; vehicle_gross_basis; vehicle_gross_method; vehicle_gross_state; vehicle_gross_sample_time; vehicle_gross_source; vehicle_noncargo_tare; vehicle_noncargo_tare_unit; vehicle_noncargo_tare_basis; vehicle_noncargo_tare_method; vehicle_noncargo_tare_state; vehicle_noncargo_tare_sample_time; vehicle_noncargo_tare_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_sample_time; payload_conversion_source; gross_conversion; gross_conversion_unit; gross_conversion_basis; gross_conversion_method; gross_conversion_state; gross_conversion_sample_time; gross_conversion_source; tare_conversion; tare_conversion_unit; tare_conversion_basis; tare_conversion_method; tare_conversion_state; tare_conversion_sample_time; tare_conversion_source; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_sample_time; distance_conversion_source; that_record_target_driver; that_record_target_driver_unit; that_record_target_driver_basis; that_record_target_driver_method; that_record_target_driver_state; that_record_target_driver_sample_time; that_record_target_driver_source; that_record_all_consumer_driver; that_record_all_consumer_driver_unit; that_record_all_consumer_driver_basis; that_record_all_consumer_driver_method; that_record_all_consumer_driver_state; that_record_all_consumer_driver_sample_time; that_record_all_consumer_driver_source; that_record_share; that_record_share_unit; that_record_share_basis; that_record_share_method; that_record_share_state; that_record_share_sample_time; that_record_share_source; load_id; leg_id; unique_load_leg_key; EACH_TOTAL_extent; cargo_item_ids; actual_wet_dry_state; carried_pack_support_scope; noncargo_tare_definition_source; provider_laundry_upstream_receiver_overlap; actual_empty_return_coverage | Measure each actual unique packed load-leg including wet contents/pack/support; direct payload or compatible vehicle gross minus only noncargo vehicle tare. Source actual distance/native factors, EACH repetition versus TOTAL, THAT-record target and complete all-consumer physical driver inside the sum. Trace provider/laundry/receiver/empty-return coverage and retain failed duties. Execute actual_record_freight and physical_pool_closure. Ordinary resident travel is outside freight; real included transport remains actual_package_route responsibility. | Actual payload/distance/count/share units, converted compatible t*km when supported | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_fates | residence_operation | residence_solid_waste; spent_cleanup_mixture; independent_maintenance_waste | Actual distinct material receivers and true mixture views | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; received_net_quantity; received_net_quantity_unit; received_net_quantity_basis; received_net_quantity_method; received_net_quantity_state; received_net_quantity_sample_time; received_net_quantity_source; whole_mixture_mass; whole_mixture_mass_unit; whole_mixture_mass_basis; whole_mixture_mass_method; whole_mixture_mass_state; whole_mixture_mass_sample_time; whole_mixture_mass_source; carrier_mass; carrier_mass_unit; carrier_mass_basis; carrier_mass_method; carrier_mass_state; carrier_mass_sample_time; carrier_mass_source; absorbed_liquid_mass; absorbed_liquid_mass_unit; absorbed_liquid_mass_basis; absorbed_liquid_mass_method; absorbed_liquid_mass_state; absorbed_liquid_mass_sample_time; absorbed_liquid_mass_source; captured_fragment_mass; captured_fragment_mass_unit; captured_fragment_mass_basis; captured_fragment_mass_method; captured_fragment_mass_state; captured_fragment_mass_sample_time; captured_fragment_mass_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; actual_stream_id; origin_resident_operator_provider; source_item_asset_event; actual_material_identity; receiver_id; receiver_status_source; collection_responsibility; separate_stream_or_true_mixture; mixture_membership_source; whole_component_nonadditive_links; contained_free_liquid_exclusion; retained_asset_content_exclusion; provider_EOL_transport_treatment_coverage; actual_usable_acceptance_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect each actual distinct received stream by originating task/material/state and receiver, net native quantity, actual mixture/component membership and acceptance/treatment/freight owner. Whole true mixtures and audit components are nonadditive; retained equipment or absorbed fluid is not another independent exit. Resident-origin handling remains accommodation duty where actually provided without importing all personal goods manufacture. Execute actual_received_streams and physical_pool_closure; unknown fate is not zero or inferred discharge. | Each actual received stream native mass/count/volume and independent components; kg only with supported conversion | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_waterstate | residence_operation | water_withdrawal; contained_wastewater; direct_water_outfall | Actual water sources contained receivers and direct interfaces | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; contained_receiver_volume; contained_receiver_volume_unit; contained_receiver_volume_basis; contained_receiver_volume_method; contained_receiver_volume_state; contained_receiver_volume_sample_time; contained_receiver_volume_source; direct_outfall_volume; direct_outfall_volume_unit; direct_outfall_volume_basis; direct_outfall_volume_method; direct_outfall_volume_state; direct_outfall_volume_sample_time; direct_outfall_volume_source; water_supply_volume; water_supply_volume_unit; water_supply_volume_basis; water_supply_volume_method; water_supply_volume_state; water_supply_volume_sample_time; water_supply_volume_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; opening_water_stock; opening_water_stock_unit; opening_water_stock_basis; opening_water_stock_method; opening_water_stock_state; opening_water_stock_sample_time; opening_water_stock_source; closing_water_stock; closing_water_stock_unit; closing_water_stock_basis; closing_water_stock_method; closing_water_stock_state; closing_water_stock_sample_time; closing_water_stock_source; water_source_identity; source_location; meter_interval; receiver_id; contained_or_direct; actual_receiving_medium; actual_stream_composition_source; sample_id; free_liquid_vs_absorbed_scope; provider_laundry_effluent_overlap; transport_treatment_owner; unknown_water_balance_status | Collect source-specific water withdrawal or supplied volume independently from actual contained sewer/liquid receiver, direct environment outfall, water retained in materials/stock and independently evidenced air-vapour mass. Source each native volume/mass, density-temperature if converted, composition, location/medium, meter/sample/time and treatment owner. Do not derive fate from bill minus unknown balance. Apply actual_received_streams, actual_species_amount for vapour and physical_pool_closure; provider effluent is not repeated. | Actual native water/stream volume and independent mass/composition/density-temperature quantities | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |
| cp_species | residence_operation | direct_species | Actual named species and receiving-medium measurements | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; measured_species_quantity; measured_species_quantity_unit; measured_species_quantity_basis; measured_species_quantity_method; measured_species_quantity_state; measured_species_quantity_sample_time; measured_species_quantity_source; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; species_factor; species_factor_unit; species_factor_basis; species_factor_method; species_factor_state; species_factor_sample_time; species_factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion_factor; gas_conversion_factor_unit; gas_conversion_factor_basis; gas_conversion_factor_method; gas_conversion_factor_state; gas_conversion_factor_sample_time; gas_conversion_factor_source; gas_temperature; gas_temperature_unit; gas_temperature_basis; gas_temperature_method; gas_temperature_state; gas_temperature_sample_time; gas_temperature_source; gas_pressure; gas_pressure_unit; gas_pressure_basis; gas_pressure_method; gas_pressure_state; gas_pressure_sample_time; gas_pressure_source; measured_water_vapour_mass; measured_water_vapour_mass_unit; measured_water_vapour_mass_basis; measured_water_vapour_mass_method; measured_water_vapour_mass_state; measured_water_vapour_mass_sample_time; measured_water_vapour_mass_source; event_id; actual_source_operation; exact_species_or_particle_identity; reported_substance_basis; receiving_medium; location; factor_coverage_source; composition_basis_source; fate_method_source; contained_capture_exclusion; provider_asset_release_overlap; unknown_residual_status; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect independently measured exact chemical/blend component/particle mass and medium, or actual compatible activity and sourced factor with exact substance basis, scope, composition/fate and any required gas temperature/pressure conversion separately evidenced. Collect each native operand metadata, release location/time and capture/provider overlap; emitted blend need not match supplied blend. Execute actual_species_amount and physical_pool_closure; purchase/odour/top-up/residual/missing data proves neither occurrence nor zero. | Actual species mass and independent activity/factor/fraction/temperature/pressure native units | Each actual assignment/state/task/batch/meter/stock/lifecycle event and service interval | Actual service-day/absence/term/vacation/roster/task/reporting/stock/full-life phases; source/carry/receiving/final-resolution links | Actual private room/site; all real resident/visitor/conference/tenant/nonresident common consumers; actual provider/receiver | per reference flow | Each independent native operand unit/basis/method/state/sampletime/source plus scope/calibration/coverage/uncertainty; unknown/incompatible physical data block final use |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `fulfilled_place_days` | worker_hostel_room_day | N_target=SUM(unique compatible resident-assignment-service-day:actual fulfilled exclusive operable room-place elapsed time/source-backed matching service-day duration). Execute physical_residential_delivery with native same-sample interval/duration units and actual local day convention. Initial handover/access/readiness/exclusivity, closures/releases and actual move/reversal ledger govern fulfillment. One resident time segment only once; no fee/month/term or default 24-hour conversion. | cp_residence | Actual delivered single-room residential place-day N_target |  |
| `actual_resource_pool` | all service rows | Execute physical_pool_closure: actual direct trace first, otherwise compatible raw_quantity*target_driver/positive_complete_all_consumer_driver for THAT resource scope; preserve necessary idle/failure/cancelled duties and actual final resolution of carry/N0. Then positive exactly same-scope N_target once unless already per reference. | cp_residence; cp_utilities; cp_tasks; cp_providers | Actual exclusively attributed quantities per reference |  |
| `actual_utility` | electricity; purchased_useful_heat; water_supply; electricity_ac; purchased_useful_heat_delivered_heat; water_supply_liquid_tap | Actual utility quantity uses compatible (register_end-register_start+register_adjustment)*meter_multiplier*native_conversion_factor OR interval_quantity*native_conversion_factor, never both. Apply factors only if not already applied. Actual interval-average power*matching elapsed_duration converted compatibly only if not already integrated; no nameplate default. Purchased useful thermal delivery and direct carrier/assets separate. Actual complete user attribution then positive same-scope N_target once. | cp_utilities; cp_residence | Actual supplied utility per residential place-day |  |
| `actual_supply_stock` | operating_materials; actual_fuels; unused_supply_returns; operating_materials_synthetic_detergent | S=assigned opening+inbound external receipts measured as net material after container tare, with NO outbound return deducted-closing including retained recovery, with actual material receipts excluding container tare. Choose exactly one: gross S/N_target INPUT plus actual matched UNUSED external return/N_target separate OUTPUT; OR consumed-only (S-matched_unused_return)/N_target INPUT and OMIT that matched return OUTPUT. No adding returns to input, double deduction, unrelated negative netting or automatic avoided-production credit. Internal loops are not new external supply; spent material retains original supply burden. Retained recovery included in closing; actual fuel burn, waste and material use are independently reconciled, not equated to purchases. | cp_supplies; cp_residence | Exclusive supply/UNUSED-return representation |  |
| `actual_linen_basis` | laundry_service; linen_lifetime; freight | Laundry_service is actual completed dry-textile throughput or supported actual native service result, including evidenced rewash once. For SAME-sample water-only definitions w_wet=water_mass/as_received_sample_mass and r_dry=water_mass/nonwater_mass, w_wet=r_dry/(1+r_dry) and nonwater_mass=as_received_sample_mass*(1-w_wet); percent first uses sourced percent_to_ratio_factor. Other volatiles/soil not water or clean fibre. Wet cargo is not dry service or new manufacture. Actual provider life/operations/rental/transport/effluent coverage once, missing actual duties actually completed before use. | cp_linen; cp_assets; cp_residence | Actual independent textile service state and asset evidence |  |
| `actual_asset_equivalent` | linen_lifetime; building_room_assets | With compatible supported dimensional equivalence and positive complete lifetime_all_user_driver, asset_equivalent=asset_native_quantity*driver_equivalence_factor*job_used_driver/lifetime_all_user_driver. Lifetime driver is compatible observed_life_driver+sourced remaining_life_driver OR actual terminated total, covering all users/periods. Full real lifecycle once; provider-covered stages not repeated. Idle/calendar driver responsibility retained in target numerators, not annual N or nominal capacity as lifespan. Actual missing stages and carry links completed before full-chain use; assigned period/cohort equivalents then positive same-scope N_target once, already per-reference unchanged. | cp_assets; cp_residence; cp_providers | Supported complete-life asset service per reference |  |
| `actual_provider_service` | contracted_support; included_ancillary_service | Actual provider quantity=SUM(exclusive actual native quantity*supported physical equivalence only if not already converted*actual compatible documented share only if not already attributed). Require actual_package_route complete physical duties, native service quality and all-client scope; actual completed missing stages occur once. Then divide by positive exactly same-scope N_target once unless already per reference. | cp_providers; cp_tasks; cp_residence | Complete physical provider and actual ancillary service |  |
| `actual_record_freight` | freight | For each unique actual load-leg, packed payload is measured directly OR compatible vehicle_gross-vehicle_noncargo_tare after native conversions. Retain actual wet contents/pack/support. EACH multiplies actual repeat_count once, TOTAL unchanged. Assigned_work=SUM(unique load-leg:payload*distance*THAT_record_share) in compatible native work units, where THAT-record share uses actual compatible target/positive COMPLETE all-consumer driver INSIDE sum. Then positive exactly same-scope N_target once, already attributed/per-reference not repeated. Actual provider/laundry/receiver/empty-return coverage and necessary failed pool duties retained. | cp_freight; cp_residence | Actual unique transport work per reference |  |
| `actual_fluid_ledger` | refrigerant_supply; recovered_fluid_exports; contained_refrigerant_waste | Reconcile opening_installed+opening_stored_total+new_factory_charge_entry+net_standalone_receipts+other_external_receipts with closing_installed+closing_stored_total+unused_external_returns+used_usable_export+contained_waste_export+retained_equipment_exit+independently_evidenced_direct_release+explicit_unknown. Stored totals INCLUDE retained recovered substock: recovery is a nonadditive view, not another stock added. Lot/charge/role IDs are exclusive; new factory entry only if not in opening or another receipt, other receipts/exits exclude all named terms, internal charging/recovery cancels. Factory-charge production is in fullasset OR an explicit missing-stage supplement once. Consumed-only deduction/OMIT applies ONLY to same-source same-state evidenced UNUSED standalone substock and its matched unused return. All USED recovered fluid, whether original factory charge or later make-up, is recorded at actual useful export state, not automatically equivalent to unused new supply, not deducted from new manufacture and not a negative input/automatic credit. Retained content in whole/part/mixed waste is nonadditive, not an additional fluid exit. Top-up, recovery or unexplained residual establishes neither direct release nor zero. Here net_standalone_receipts is inbound material mass after container tare only: no outbound UNUSED return, USED recovery export or waste exit has already been deducted. Other external receipts use the same inbound-only convention and exclude every separately named entry. | cp_refrigerants; cp_assets; cp_species | Exclusive actual fluid origin stock and fates |  |
| `actual_received_streams` | all receiver interfaces | Each actual distinct received material/state/receiver has its own native net quantity/source. Choose genuine whole mixture OR exclusive component exchanges; audit components nonadditive. Retained liquids in cloth/whole equipment not additional free-liquid exit. Contained sewer/free liquid uses Waste; actual liquid environmental outfall uses Elementary with actual medium; actual air vapour needs Mass species. Purchased water minus unknown residual is not wastewater/outfall/vapour or zero. Provider/fullasset EOL/transport/treatment once, actual missing receiver duties explicitly completed. | cp_fates; cp_waterstate; cp_assets; cp_providers | Actual mutually exclusive Product Waste and Elementary interfaces |  |
| `actual_species_amount` | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | Species_quantity=independently measured actual species quantity OR compatible actual_activity*species_factor. Every operand native unit/basis/method/state/sampletime/source and exact reported substance/particle/medium. Apply actual composition/fate/gas conversion only when required and not already covered; gas temperature/pressure each sourced in compatible units. Actual emitted blend composition is not assumed supply composition. No stock residual/top-up/purchase/odour as release or zero. Complete resource attribution and positive same-target N_target once unless already per-reference; actual provider releases not duplicated. | cp_species; cp_refrigerants; cp_residence | Evidence-supported exact native species per reference |  |
| `actual_land_quantities` | site_land_occupation; site_land_transformation | Record actual unique compatible occupation area*actual evidenced duration in source-backed native area-time, or direct actual area-time record, never both. Record actual transformation area only for its evidenced from-to event. Apply actual_land_interfaces all-stage/all-user responsibility and same-interface asset/provider overlap exclusion; then positive exactly same-scope N_target once. No land quantity-to-Count conversion or inferred land class. | cp_assets; cp_residence; cp_providers | Actual native land occupation/transformation per reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `real_delivery_identity` | worker_hostel_room_day | Initial actual handover/receipt, physical private single room, continuing actual access/readiness/exclusive retention, local day/time and all reversals/moves/closures/absence evidence are mandatory. Neither purpose, paid licence nor belongings alone is output proof. | Actual room configuration, assignment, entry/handover and operational state/source ledger |
| `native_quantities` | all independent quantities | Every raw quantity, numerator/denominator, repetition, conversion/equivalence, density with temperature, activity, factor, composition/fate and duration has its own unit/basis/method/state/sampletime/source and compatible actual population/coverage. Unknown data block a calculation, not zero. | Node-owned full raw protocols and traceable calibration/source/coverage |
| `full_scope_closure` | resource pools providers and asset lives | Full real all-user/multi-period lifecycle, necessary idle/failure/N0 responsibility and actual included duties must close. Missing actual stages are actually completed once, not planned. Provider/source/receiver and carry-to-final-resolution gaps block full-chain use. | Actual physical scope/owner/coverage matrices, observed plus sourced remaining life, completed supplements, uncertainty/sensitivity/update |
| `range_and_identity_evidence` | all cards | No generic numerical range is mandatory. Actual source-backed ranges if claimed must be traceable and physically compatible; an empirical QA guardrail needs independent comparable evidence, not the same dataset extrema. Concrete identity and support verification and actual native data remain required before final exchange. | Actual site records, independent comparable acceptance evidence and verified identities; no guessed factors or UUIDs |
| complete_electricity | residence_operation | Expand each actual case under `electricity` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_utilities` |
| complete_purchased_useful_heat | residence_operation | Expand each actual case under `purchased_useful_heat` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_utilities` |
| complete_water_supply | residence_operation | Expand each actual case under `water_supply` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_utilities` |
| complete_actual_fuels | residence_operation | Expand each actual case under `actual_fuels` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_supplies` |
| complete_operating_materials | residence_operation | Expand each actual case under `operating_materials` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_supplies` |
| complete_linen_lifetime | residence_operation | Expand each actual case under `linen_lifetime` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_building_room_assets | residence_operation | Expand each actual case under `building_room_assets` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_contracted_support | residence_operation | Expand each actual case under `contracted_support` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_providers` |
| complete_included_ancillary_service | residence_operation | Expand each actual case under `included_ancillary_service` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_providers` |
| complete_refrigerant_supply | residence_operation | Expand each actual case under `refrigerant_supply` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_refrigerants` |
| complete_freight | residence_operation | Expand each actual case under `freight` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_freight` |
| complete_water_withdrawal | residence_operation | Expand each actual case under `water_withdrawal` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_waterstate` |
| complete_site_land_occupation | residence_operation | Expand each actual case under `site_land_occupation` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_site_land_transformation | residence_operation | Expand each actual case under `site_land_transformation` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_unused_supply_returns | residence_operation | Expand each actual case under `unused_supply_returns` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_supplies` |
| complete_usable_asset_exports | residence_operation | Expand each actual case under `usable_asset_exports` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_recovered_fluid_exports | residence_operation | Expand each actual case under `recovered_fluid_exports` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_refrigerants` |
| complete_residence_solid_waste | residence_operation | Expand each actual case under `residence_solid_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_spent_cleanup_mixture | residence_operation | Expand each actual case under `spent_cleanup_mixture` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_retired_linen | residence_operation | Expand each actual case under `retired_linen` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_retired_equipment | residence_operation | Expand each actual case under `retired_equipment` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_contained_wastewater | residence_operation | Expand each actual case under `contained_wastewater` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_waterstate` |
| complete_independent_maintenance_waste | residence_operation | Expand each actual case under `independent_maintenance_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_contained_refrigerant_waste | residence_operation | Expand each actual case under `contained_refrigerant_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_refrigerants` |
| complete_direct_water_outfall | residence_operation | Expand each actual case under `direct_water_outfall` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_waterstate` |
| complete_direct_species | residence_operation | Expand each actual case under `direct_species` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_species` |


### Mandatory Inventory Completion Records

The following records are mandatory physical collection and case-expansion requirements, not single inventory exchanges. Every original node, direction, flow type, amount basis, protocol, stock/fate, provider/receiver and source obligation remains binding. References elsewhere to their identifiers refer to these requirements. Before completing a foreground dataset, expand every actual material, service, asset lifecycle, waste stream or substance/medium into separately identified exchanges with native quantities and exclusive coverage. Retained fixed cards cover only their actual supported cases; reconcile all residual actual cases without overlap. Missing identity, occurrence or quantity is unresolved, never zero or permission to omit. Internal paired handoffs and component audit views remain non-additive. Required full-life and provider stages must actually be completed once.

#### electricity

Owner and original flow role: residence_operation / inputs / product

Actual private-room and shared lighting/HVAC, bathroom/hotwater auxiliaries, self-catering kitchen appliances, resident laundry/common/access/standby duties within real responsibility. Personal appliance energy remains actual room/common electricity when supplied. No occupied-nights-to-kWh, fee or nominal room fraction; complete provider-covered power not repeated.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual private room and shared lodging electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_utilities; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Range evidence need: Actual meters/intervals or same-interval average power/time, room/resident/user boundary, complete competing consumers and necessary pool duty.

#### purchased_useful_heat

Owner and original flow role: residence_operation / inputs / product

Conditional measured useful thermal service at actual delivery state/provider boundary; not the electricity running a chiller plus the same purchased cooling. Actual on-site independent conversion needs reviewed expansion.

Residual inventory requirement after the independently identified cases `purchased_useful_heat_delivered_heat`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual externally delivered useful heat or cooling
- Flow property / unit: Energy / MJ
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_utilities; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Range evidence need: Actual useful delivery quantities/native units, state/temperature/reference method and provider loss/energy/assets coverage, complete user drivers.

#### water_supply

Owner and original flow role: residence_operation / inputs / product

Actual resident bathroom, kitchen, housekeeping and declared support supply, separate from direct abstraction and already provider-covered laundry water. Supply volume is not sewer volume.

Residual inventory requirement after the independently identified cases `water_supply_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual purchased lodging and shared-facility water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_utilities; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Range evidence need: Actual source/supplier/meter intervals/native quantities, hot/cold/end-use scope and all-user responsibility, independently collected fates.

#### actual_fuels

Owner and original flow role: residence_operation / inputs / product

Only actually operated reviewed equipment/mobile duties and real carrier/grade. No generator, boiler, resident ordinary travel or fuel mix inferred; upstream fuel once, burn and species separately evidenced.

- Selected flow: Actual accommodation-support fuel supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_supplies; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`
- Range evidence need: Actual net stock/receipts/closing/native grade, actual burn and supported density-temperature/state conversion if used.

#### operating_materials

Owner and original flow role: residence_operation / inputs / product

Expand each actual SKU/formulation, including cleaner, soap/tissue, wipe/absorbent/filter and support materials; actual dose/recipe not prescribed. Prepared solution/concentrate/water/component views nonadditive. Provider-covered inputs and durable linen not repeated here.

Residual inventory requirement after the independently identified cases `operating_materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual cleaning resident-amenity and support consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_supplies; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`
- Range evidence need: Actual SKU/composition/use/net material stocks excluding container tare, actual EACH/TOTAL and per-piece/density factors, matched UNUSED returns and packaging-production coverage.

#### linen_lifetime

Owner and original flow role: residence_operation / inputs / product

Only actual operator-owned or rented bedding/linen/textile supports with complete manufacture, care, replacement and end-of-life responsibility. Resident-owned personal bedding manufacture is outside this self-catering accommodation supply unless actually supplied/included; supplied bed/mattress and actual utility/waste duties remain. Laundry service is not new textile manufacture; actual rental-covered manufacture/life is not repeated.

- Selected flow: Complete-life reusable operator bedding and linen service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual textile identity/material/native pieces or mass/equivalence, job-use and observed+sourced remaining full life/termination/uncertainty and coverage; no assumed cycles/years.

#### building_room_assets

Owner and original flow role: residence_operation / inputs / product

Actual site/land alteration, building shell/fitout, bedroom bed/frame/mattress/furniture, kitchen/bathroom/HVAC/hotwater/laundry/ICT/access/common equipment and reusable supports. Manufacture, installation, maintenance, replacement and end-of-life apply across all actual users/periods irrespective of ownership. Whole asset/component/event views are nonadditive. Annual resident N is not lifetime. Actual land interfaces follow actual_land_interfaces separately; Count assets cannot substitute for physical area/time. Complete asset/provider land coverage is not repeated.

- Selected flow: Complete-life buildings bed frames mattresses and lodging equipment
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual BOM/native quantity/property/equivalence, room-site membership, full all-user observed+sourced remaining use/termination and manufacture-install-maintain-replace-EOL coverage; annual N not lifetime.

#### contracted_support

Owner and original flow role: residence_operation / inputs / product

Actual completed cleaning, maintenance, entry/readiness and physical response services at native quality/unit; not salary, licence fee, invoice or planned task. Complete matching material/utility/asset/transport/receiver stages replace only their actual underlying duties once; operator linen service remains separately evidenced.

- Selected flow: Actual physical cleaning maintenance access and response services
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_providers; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`
- Range evidence need: Actual task/result and room-site-stay/period links, native unit/equivalence, full provider all-client and covered versus missing duty matrix.

#### included_ancillary_service

Owner and original flow role: residence_operation / inputs / product

Only actual included physical ancillary duty with complete native provider coverage or exclusive completed underlying missing stages under actual_package_route. Real food/transport production requires reviewed route/module/node expansion; no generic label, employment benefit or cash fee proves physical fulfillment or complete scope.

- Selected flow: Actual included physically complete ancillary provider duties
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_providers; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`
- Range evidence need: Actual contract/booking inclusion and physical delivery/availability obligation, native quality/quantity/provider coverage/other users. No default meal/day/activity or fee conversion; unresolved kitchen/production scope blocks full package.

#### refrigerant_supply

Owner and original flow role: residence_operation / inputs / product

Actual named chemical/blend supplied separately to reviewed accommodation systems. Initial factory charge already in asset life not purchased again; top-up is not leak quantity.

- Selected flow: Actual standalone operating refrigerant supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_refrigerants; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerants`
- Range evidence need: Actual chemical/state/SKU/net stock/charge genealogy and unused supply versus USED recovery, factory/standalone upstream owner, independent receiver/release evidence.

#### freight

Owner and original flow role: residence_operation / inputs / product

Only actual service-boundary unique load-legs after upstream/provider/receiver coverage. Payload retains actual wet linen, packs and carried supports; not dry laundry service mass, resident ordinary travel or a fixed shipment per night.

- Selected flow: Actual lodging supply linen asset and receiver freight
- Flow property / unit: Mass * distance / t*km
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_freight; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`
- Range evidence need: Actual load/leg/cargo/time/packed payload or compatible gross-minus-only-noncargo tare, distance, EACH/TOTAL/count, native conversion and THAT-record complete share inside sum/N once.

#### water_withdrawal

Owner and original flow role: residence_operation / inputs / elementary

Conditional actual operated environmental abstraction, distinct from purchased water or provider withdrawals. Exact source/location and actual responsible users required.

- Selected flow: Actual source-specific direct lodging water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_waterstate; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waterstate`
- Range evidence need: Actual source/medium/location native volume/meter interval and all-user duty; no water-bill, guest count or residual-as-withdrawal proxy.

#### site_land_occupation

Owner and original flow role: residence_operation / inputs / elementary

Actual physical land area-time occupation within full accommodation site lifecycle and all-user responsibility under actual_land_interfaces. Complete building/site/provider coverage is the same physical interface, not a second elementary exchange.

- Selected flow: Actual responsibility-specific site land occupation
- Flow property / unit: Area * time / actual native area*time unit
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual site location/land state/area, time interval/duration convention, native operands/conversions, lifecycle stage/owner, complete all-user lifetime attribution and matching provider/asset coverage.

#### site_land_transformation

Owner and original flow role: residence_operation / inputs / elementary

Conditional actual evidenced land transformation with source-specific from/to state, area, event date and owner under actual_land_interfaces. Existing ownership or construction alone does not prove a specific ecological transformation; unknown relevant history stays a gap.

- Selected flow: Actual evidenced historical or new site land transformation
- Flow property / unit: Area / actual native area unit
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual historical/new event and land-state/source/area/date/location, each native basis/method, stage/owner and same-interface provider/asset nonduplication; no inferred soil/habitat category or conversion factor.

#### unused_supply_returns

Owner and original flow role: residence_operation / outputs / product

Actual same-source/state UNUSED independent supply export. Gross supply records this separate OUTPUT; consumed-only supply subtracts matched unused amount and OMITS this OUTPUT. Internal recovery/closing, USED refrigerant and inherited linen are not unused supply.

- Selected flow: Actual matched unused standalone supply returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_supplies; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`
- Range evidence need: Actual source-matched SKU/net quantity/receiver/unused acceptance and exclusive stock convention; no unrelated netting or automatic credit.

#### usable_asset_exports

Owner and original flow role: residence_operation / outputs / product

Actual external usable item/part transfer at its real received state and remaining-life responsibility. Retirement/repair/internal redeployment is not automatically usable export or a credit; whole/part masses nonadditive.

- Selected flow: Actual usable textile furnishing or equipment transfers
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual item genealogy/native net mass or supported count conversion, receiver/acceptance/time, remaining-life and already covered manufacture/EOL owner.

#### recovered_fluid_exports

Owner and original flow role: residence_operation / outputs / product

Actual useful external transfer of USED recovered chemical/blend, from original charge OR later make-up. Retained recovery stays stock. Not automatically unused new material, not deducted from new manufacture/current unrelated supply and no negative input or automatic avoided-production credit.

- Selected flow: Actual usable USED recovered-refrigerant exports
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_refrigerants; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerants`
- Range evidence need: Actual chemical/blend/composition/native net amount, USED-state quality/recipient acceptance, charge provenance and recovery-retained/export distinction; unused returns use separate matched card only.

#### residence_solid_waste

Owner and original flow role: residence_operation / outputs / waste

Actual paper/food/sanitary/pack and other independently received lodging streams with operator collection responsibility; each real distinct stream/receiver expands. Real co-collected mixtures retain whole mass with nonadditive composition. Resident-origin handling does not import all self-bought goods manufacture.

- Selected flow: Actual resident and operator lodging solid waste handoffs
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual stream/origin/collection duty/native net quantity/state/composition/receiver and transport/treatment owner after provider/lifecycle coverage, not persons-to-waste defaults.

#### spent_cleanup_mixture

Owner and original flow role: residence_operation / outputs / waste

Only actual collected wipes/filters/absorbents and retained liquids/fragments as received. Carrier/component/absorbed liquid are nonadditive audit views of a real mixture; independent free liquid or unrelated wastes remain separate.

- Selected flow: Actual genuinely mixed spent cleanup carriers
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual task/material/mixture source, gross/tare/net and independent component native metadata, receiver identity/state/transport/treatment; no capture-efficiency or residual pollutant assumption.

#### retired_linen

Owner and original flow role: residence_operation / outputs / waste

Actual independently discarded linen/textiles at true state/receiver, not every soiled/rejected/rewash item, missing piece or wash event. Actual EOL covered by full asset/rental service is a linked physical audit rather than extra treatment burden.

- Selected flow: Actual discarded operator bedding and reusable textiles
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual retirement/next-use decision/textile genealogy, native received wet/dry/soil/composition/source and one EOL transport/treatment owner.

#### retired_equipment

Owner and original flow role: residence_operation / outputs / waste

Actual whole/part asset discard under complete-life responsibility. Fluids/batteries/textile contents retained in the same transferred object are nonadditive, not extra component exits; actual separate streams have separate receivers.

- Selected flow: Actual discarded bed mattress furnishing or equipment streams
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_assets; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Range evidence need: Actual asset/part/mattress identity, discard state/net quantity/receiver, retained-content membership and already covered lifecycle EOL/transport/treatment.

#### contained_wastewater

Owner and original flow role: residence_operation / outputs / waste

Actual sewer/receiver or independent contained free liquid by own state/composition/quantity, not direct environmental outfall, vapour or supplied-water total. Provider-covered laundry effluent is not repeated.

- Selected flow: Actual contained sanitary cleaning and support wastewater transfers
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_waterstate; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waterstate`
- Range evidence need: Actual received/metered native volume and stream/composition/receiver/treatment/transport source, compatible density-temperature only when converted; retained water and genuinely mixed versus separate liquids distinct.

#### independent_maintenance_waste

Owner and original flow role: residence_operation / outputs / waste

Actual separately collected nonaqueous fluid/residue/consumable streams expanded by real identity/state/receiver, not all liquids into one generic waste. Retained equipment/mixture content excluded from this independent exit; contained is not air emission.

Residual inventory requirement after the independently identified cases `independent_maintenance_waste_used_lubricating_oil`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual independent maintenance material and nonaqueous waste streams
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_fates; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`
- Range evidence need: Actual source task/SKU/native net quantity/composition/density-temperature if used, receiver coverage and whole/part/mixture nonadditive exclusion links.

#### contained_refrigerant_waste

Owner and original flow role: residence_operation / outputs / waste

Actual independently transferred unusable recovered chemical/blend for treatment, distinct from retained stock, useful USED export, equipment-retained content and direct air release. Recovery/top-up alone does not determine waste or leak.

- Selected flow: Actual independent unusable recovered-refrigerant waste
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_refrigerants; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerants`
- Range evidence need: Actual chemical/native waste net quantity/state/receiver/transport/treatment/source and provenance; do not assume destruction factor or credit.

#### direct_water_outfall

Owner and original flow role: residence_operation / outputs / elementary

Only actual liquid water crossing directly to known environment; contained sewer/treatment handoff stays Waste. Unknown residual or purchased supply cannot create an outfall; air vapour is a separate mass species role.

- Selected flow: Actual direct lodging water outfall to a documented medium
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_waterstate; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waterstate`
- Range evidence need: Actual location/receiving medium/native direct volume/interval/composition/fate/source and responsibility; no default groundwater/sea/river identity.

#### direct_species

Owner and original flow role: residence_operation / outputs / elementary

Actual independently evidenced chemical/blend-component/particle and receiving medium from real operated duties or incidents. Water vapour requires actual mass to air; contained fluids/water stay waste. Purchases, odour, top-up, missing measurements and balance deficits establish neither occurrence nor zero.

Residual inventory requirement after the independently identified cases `direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual named lodging species releases to documented media
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed compatible native quantity / positive same-scope N_target once under cp_species; already per reference unchanged, N_target=0 retained without division
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Range evidence need: Exact substance/basis/particle/medium and independently measured native quantity OR compatible real activity-factor with every operand native metadata, composition/fate/gas state only needed once, and provider overlap exclusion.


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `valid_actual_assignment` | worker_hostel_room_day | Verify physical_residential_delivery, assigned_room_reference and fulfilled_place_days against actual received room handover, ongoing readiness/access/exclusive retention and all actual absences/closures/releases/substitutions/terminations. Initial unreceived or paid-no-show output is invalid. Same resident move keeps one fulfilled time output and both real room resource segments. |  |
| `valid_full_output_set` | outputs and shared scopes | Enumerate all actual assigned residential, visitor/conference, tenant and other physical service outputs and handoffs with native quantities and configuration/time. Nonresident kitchen/common/dining users remain real shared-resource consumers where present. Intended lodging/ancillary outputs differ from usable materials, residues and waste. No room plus its included bed double output, no assumed resident=visitor-night, no fee/revenue/employee/student status allocation or automatic recovery credit. Resource-specific actual direct trace first or evidenced compatible complete physical drivers. |  |
| `valid_resource_responsibility` | all resources | Verify physical_pool_closure and actual_resource_pool, complete compatible other consumers/periods and nonadditive shared duty ownership. Necessary idle/failure/N0 duties require real carry-to-final-resolution; no unknown burden may disappear. Positive exactly same-scope N_target divides actual assigned resource total once. |  |
| `valid_complete_life_package` | assets and providers | Verify complete_life, complete_asset_life and actual_asset_equivalent full observed plus sourced remaining life, full real provider/underlying stage coverage and actual completed supplements. Apply actual_package_route without dropping actual included food/transport or replacing self-operated production by a generic service label. Unreviewed real production expansion or incomplete package blocks use. |  |
| `valid_stock_and_fluid` | materials and refrigerants | Verify actual_supply_stock and actual_fluid_ledger. Opening/receipt/closing/UNUSED returns are exclusive; gross+return and consumed-only/OMIT conventions cannot mix. USED fluid recovery/export is separate actual received state, not a deduction from new material manufacture. Internal loop/stored recovery and retained equipment contents remain nonadditive. |  |
| `valid_distinct_streams` | receiver and environment flows | Expand each actual distinct material/state/receiver stream. True whole mixture/component/whole-object views are nonadditive. Contained sewer/fluid is Waste; actual direct liquid outfall uses documented environment; actual water vapour is Mass to air. Named species and independent actual source/measurement or compatible factor are mandatory. Unknown balance difference or failed identity lookup proves neither absence nor zero. Provider/fullasset/freight/treatment stages occur once. |  |
| `valid_basis_and_operations` | textile utility freight and every operand | Actual dry-textile laundry service is not new textile or wet cargo. SAME-sample water-only dry/wet conversion and sourced percent ratio are required; EACH repetition once and TOTAL unchanged. Packed freight retains contents/support; subtract only vehicle noncargo tare. Apply THAT-record compatible all-user share inside unique load-leg sum, then positive same-scope N_target once. Unsupported actual equivalence, medium, quantity or provider stage blocks data use. |  |
| `valid_truthful_candidate` | all concrete exchanges | Every final exchange requires verified actual identity/state/configuration/support and native measured/source-backed quantities with declared duties complete. Missing UUID or generic numeric range may remain an explicit restricted candidate gap; inventing a value or near UUID is prohibited. Checker pass is not proof of external binding, scientific review or publication readiness. |  |
| `valid_land_interfaces` | site_land_occupation; site_land_transformation | Actual site/land occupation and any evidenced historical or new transformation are physical interfaces separate from Count assets. Collect actual area, occupation duration/interval, land state/source/location and any real from-to transformation state/date/area, lifecycle stage and responsible owner. Use native area*time for occupation and native area for actual transformation, with sourced native conversion only where required. Do not infer a habitat/soil class, land-type conversion factor or a transformation merely because the current site exists; unknown applicable historical/new transformation is a data gap. Land embodied in a complete building/site/provider is linked as the same physical interface and not added twice. Actually complete a real missing land duty once before full-chain use; a disclosure or asset count cannot substitute for physical area/time. |  |
| validate_dedicated_classification_gate | worker_hostel_room_day | This PCR applies only to self-catering private single-person furnished bedrooms continuously assigned to workers in a workers hostel or camp. Record the actual worker-accommodation purpose, operator/site and assignment, including seasonal or short-term arrangements without imposing a default stay duration. Student residence, visitor accommodation and unrelated residential purposes are separate outputs. A work roster, employment benefit or paid licence does not establish delivered accommodation. Hot-bedded shift sharing, shared bedrooms, whole apartments and catered camp production routes are outside this selected single-room route. Dedicated scope eligibility and the actual completed output gate must both be evidenced. Keep other classifications and incompatible configurations out of N_target, but retain all real other consumers, idle duties and full-lifecycle burdens in their appropriate resource pools. Unknown eligibility blocks use; it is not zero. | unsd-cpc3-residential |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity and completeness review |
| downstream_use | Foreground and downstream models of one Actually delivered worker-hostel exclusive single-room place-day |
| allowed_use | This PCR applies only to self-catering private single-person furnished bedrooms continuously assigned to workers in a workers hostel or camp. Record the actual worker-accommodation purpose, operator/site and assignment, including seasonal or short-term arrangements without imposing a default stay duration. Student residence, visitor accommodation and unrelated residential purposes are separate outputs. A work roster, employment benefit or paid licence does not establish delivered accommodation. Hot-bedded shift sharing, shared bedrooms, whole apartments and catered camp production routes are outside this selected single-room route. |
| excluded_use | Unreceived paid/no-show offers; released/closed/unusable/repurposed periods; shared bedroom/hot-bedded shift turnover/couple/family/whole self-contained units; occupied visitor-night or nominal capacity conversion; mobile sleeper or recreation camp package; true unreviewed onsite production or incomplete included meal/transport/package scope |
| required_metadata | Actual operator/site/private bedroom/configuration and resident-assignment handover/access/readiness/exclusive-retention, actual received/absence/closure/release/substitution/termination/reversal; sourced day start/end/timezone/UTC-offset/DST/elapsed duration; real selfcatering/common/provider/package obligations; all actual resident/visitor/conference/tenant/nonresident outputs/handoffs; native all-user physical drivers, full asset/linen life/provider/receiver coverage and resolved crossperiod pools; actual land occupation area/time and evidenced historical/new transformation from/to/source/date/stage/owner with same-interface provider/asset coverage and completed missing duties |
| required_quality_disclosure | Actual measured versus estimated raw units/bases/methods/state/sampletime/source/calibration/coverage/uncertainty/sensitivity/update; concrete/support identity, native quantity, substance/medium/lifetime/assignment/coverage gaps. No generic range alone proves error or zero; any unresolved material physical duty blocks final chain use; unresolved applicable land history/state/quantity/owner/coverage blocks full-chain use |
| update_trigger | Actual assignment/exclusivity/room topology or service-day convention; package meal/transport/provider/laundry/common-user obligations; new actual independent production route; full asset life, stock provenance/fate/receiver, metering or identity evidence changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-residential | official_guidance | UNSD CPC Version3.0 explanatory notes30June2025,printed355–356; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only:63210 student institution residences excludes summer visitors and conferences to6311;63220 workers can be seasonal/shortterm. Does not define this physical reference or allocation formula. |
| stantony-2026-27 | handbook | https://www.sant.ox.ac.uk/study-here/accommodation/ | Current2026–27 continuous residence arrangements may span Christmas/Easter; furnished rooms/shared kitchens and bathrooms support current physical scope. No licence duration, rent or furnishing default imported. |
| exeter-residences | handbook | https://www.exeter.ox.ac.uk/students/accommodation/ | Vacation room moves and conference/admissions use, shared self-catering graduate kitchens, nonresident common-facility users and separate family-flat configurations require real period/output boundaries. No default residence term, charge or lifecycle value. |
| southampton-2026-27 | handbook | https://www.southampton.ac.uk/student-life/accommodation/fees-contracts/halls/agreement | One current operator identifies actual allocated/substituted rooms, entry keys, repair/service duties, possible cancelled late-arrival reassignment and package-dependent food/transport. Payment is not physical output. No legal conclusion or legal/time/meal default is imposed. |
| ucl-home-2026-27 | handbook | https://www.ucl.ac.uk/study/accommodation/current-residents/moving/welcome-information | Current2026–27 checkin room inventory, actual lockout support/maintenance/inspection, provider shared cleaning versus resident tidying, separate paid laundry/provider and resident supplies support collection questions. No service frequency or operating hours adopted as default. |
| skilouise-staff | handbook | https://www.skilouise.com/contact-us/careers-employment/ | Current CharlestonResidence has lockable single-person bedrooms, shared equipped kitchen/living/bath/laundry and confirmed allocation/tenancy distinct from application. Other shared/couple variants and employment shuttles/benefits require actual product/package evidence; no room count, rent, roster or automatic completed service claimed. |
| stayover-route-limit | handbook | https://stayover.com.au/accommodation | Current worker offer includes onsite chef-prepared food, variable rooms, servicing/laundry and checkout/key-return versus permanent-room exception. It limits automatic application: such real included food and production cannot be deleted or universally assumed covered by this accommodation method. Permanent-room label alone does not prove continuing access/readiness. |
