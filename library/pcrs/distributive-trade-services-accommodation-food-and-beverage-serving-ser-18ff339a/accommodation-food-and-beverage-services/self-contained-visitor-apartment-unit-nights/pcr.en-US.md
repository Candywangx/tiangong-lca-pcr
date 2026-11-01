---
pcr_id: pcr.self-contained-visitor-apartment-unit-nights
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Self-contained visitor apartment unit-nights

## 1. Scope and Applicability

This PCR covers actual accommodation provided in one physically indivisible self-contained visitor apartment/studio with private kitchen and bathroom and less-than-daily housekeeping. Real unit plans and bookable delivery records must confirm the topology; lock-off/connecting parent-child combinations, multi-unit combined products and shared-bed accommodation are excluded. Self-check-in is a researched access mode, not a claim of no personnel or zero service. Physical applicability does not change solely because the matching unit is held under a timeshare regime. CPC63112 is therefore a proxy coordinate: its official legal coverage excludes timeshare and includes rooms without kitchens, while this physical method is narrower in facilities but may cross tenure. [unsd-cpc3-63112; unsd-cpc3-63113; numa-faq; numa-studio-context]

No universal floor area, guest capacity, cleaning schedule, linen mass, stay length, lifetime, temperature, utility intensity, leak rate or numerical range is supplied. Actual ancillary coverage and operator versus guest responsibilities must be declared. HCMI public context is operational carbon context only, not a full LCA boundary or a default factor. [wsha-hcmi-context]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.self-contained-visitor-apartment-unit-nights |
| classification_refs | CPC3.0:63112 proxy; actual physical applicability not determined by tenure alone |
| covered_products | Actual indivisible private self-contained visitor apartment-unit-nights, kitchen/bathroom and less-than-daily housekeeping, declared real access/support/ancillary scope |
| excluded_products | Lock-off/connecting parent-child or multi-unit combined products, shared beds/dorms, permanent/semipermanent residence, institutional care/camp and unreviewed independent food/recreation packages |
| representative_product | Actual property/unit plan, independent unit_id, kitchen/bathroom/appliances, local service-night, visitor party/stay length and delivered service records; no brand numeric defaults |
| production_route | Actual ready-unit/access/support -> occupied unit and common-facility operation -> actual turnover/non-daily housekeeping/linen -> checkout/receiver/maintenance event linkage |
| market_state | Delivered occupied accommodation unit-night with real service-level/period qualifiers; not a sold asset, booking right, available room or point |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actually provided occupied private indivisible self-contained visitor apartment-unit-night |
| How much | 1 Item(s) |
| How well | Actual private kitchen/bathroom, non-lockoff topology, visitor active service, less-than-daily housekeeping and real included ancillary/utility/linen scope; occupancy and quality are declared, not universal |
| How long or cycle | One actual local service-night according to sourced property calendar/timezone/DST and delivered interval; actual stay length/arrival-departure and turnover periods retained, no fixed24h |
| reference_flow_link | occupied_unit_night |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Actual occupied self-contained visitor apartment-unit-night |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Number of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | property_id; operator_id; unit_id; unit_plan_source; indivisible_non_lockoff_confirmation; private_kitchen_bathroom_scope; bookable_unit_inventory_link; visitor_stay_id; service_night_id; actual_guest_count; actual_arrival_departure; local_night_definition; time_zone; DST_rule_source; room_change_transfer_ids; complimentary_status; cancellation_no_show_reversal_ids; actual_housekeeping_service_regime; actual_cleaning_linen_events; included_ancillary_scope; meter_provider_coverage; reporting_period |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| unit_night_count | occupied_unit_night | Count | Item(s) | One actual delivered occupied private indivisible unit-night, linked to active visitor stay and local service-night calendar after reversal. Multiple guests do not multiply unit-night; multiple actual units do. Not booking, guest-night, available-unit-night, point or assumed fixed hours. |
| native_record_scope | all inventory rows | actual compatible property | actual native units and each row target unit | Each quantity/driver keeps native unit, basis, method, state, source and sample/event time. Raw versus already attributed/per-reference quantities are exclusive. Supported conversions and each-total/repeat scope required; a source numerical specification is not automatically a foreground measurement. |
| linen_water_basis | cp_linen; cp_fates | Mass | kg | Identify clean-dry, conditioned, used-wet or whole loaded textile and container tare separately. Actual water/wet-sample fraction differs from water/dry-nonwater ratio; compatible same-sample definitions and percent conversion precede use. Soiling/other volatiles are not automatically water or fibre loss. |
| water_medium | cp_water; cp_environment; cp_fates | Mass; Volume | kg; m3 | Use actual supplied water volume, compatible density-temperature mass conversion only when needed; no input-water minus one outlet equals vapour or wastewater. Vapour is actual water species to air, contained receiver liquid is Waste, actual direct discharge needs species/medium evidence. |
| unique_packed_work | freight | Mass * Length | t*km | Unique load and leg, actual full packed textile/supply/retained-fluid/support cargo, independent noncargo tare. EACH times actual count once, TOTAL unchanged; each record own share inside SUM, same-scope positive N once. |


## 5. System Boundary

| rule_id | Rule | source_ids |
| --- | --- | --- |
| real_route | Include actual reservation/access/remote support, continuous unit/common-facility occupied and vacant operation, turnover and less-than-daily housekeeping, actual linen service, maintenance, supplies and real receiver handoffs. Self-check-in does not establish absence of personnel or cleaning. Actual operation, not a brand label or ownership regime, establishes resources. |  |
| unit_topology | Only actual single physically indivisible privately supplied self-contained visitor apartment/studio with private kitchen and bathroom. Require unit plan, independent access and bookable delivery inventory evidence. Exclude lock-off parent-child combinations, connecting or combined multi-unit products and shared-bed accommodation. Unknown topology does not default to indivisible. |  |
| service_resource_boundary | Actual electricity/heat/hot-cold water and operator-provided appliance/fixture use during the stay, including kitchen loads, are accommodation resources. No food provision is not proof of zero cooking energy. Guest travel and independently bought food/personal goods are outside the selected service; actual operator-provided supplies, snacks or bundled ancillary services require their real supply/coverage, not silent exclusion. Actual separately supplied outputs/common tenants remain competing responsibility records. |  |
| full_chain_assets | This is accommodation production, not traded-merchandise wholesale. Attribute full building/site/fit-out/furniture/HVAC/appliance/linen lifecycles, maintenance/replacement/retirement/EOL and upstream actual utility/material/provider production. A rent/management fee or a timeshare point is not physical asset service. Complete supplied service datasets replace only their proven matching physical scope. Missing real upstream stages or treatment must actually be integrated once with completed dataset/link/timezone/source/owner/quantity/coverage evidence before full-chain use; a pending plan is insufficient. |  |
| period_vacancy | Declare real reporting, meter, night-calendar, cleaning-run, stock and full-asset phases. Available unsold, canceled/no-show, blocked/maintenance and open-stay periods retain actual standby/cleaning/support and assets; do not manufacture occupied nights or erase N=0 resources. Paired cross-period stock/linen/asset carry retains source and prior attribution, not a new purchase, manufacture or service night. |  |
| laundry_interface | Use actual operator linen processing events, on-site direct resources only if actually performed within reviewed equipment/operation, OR actual complete contracted laundry scope. Guest personal laundry availability does not prove operator linen processing. Identify washing/drying/finishing, electricity/heat/fuel, chemicals, water/effluent/treatment, textile rental/manufacture, assets and transport coverage separately; expand actual missing resources once, remove overlap only when covered once elsewhere. No industrial laundry/boiler conversion technology is inferred from the accommodation label. |  |
| fates_and_refrigerant | Supplied water, retained moisture, separately contained liquid receiver transfer and actual direct water vapour to air are different states/roles. Actual mixed streams retain nonadditive component audits; unrelated material/species/receiver exchanges expand separately. HVAC/appliance factory charge, current standalone makeup, unused supply returns, recovered closing, useful export, contained waste and direct species remain exclusive with their own owner/native evidence. Top-up, stock discrepancy, odour or label establishes neither release nor zero. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual ready private indivisible self-contained visitor apartment unit, real kitchen/bathroom/appliance/linen/service inventory, actual access/housekeeping arrangements and beginning reporting/asset state |
| starting_condition_role | Accommodation service production boundary, including attributable infrastructure and supply upstream; not exclusion of all pre-existing building burden |
| product_classification_scope | CPC3.0:63112 proxy; less-than-daily housekeeping contextual fit, kitchen/private indivisible physical subset may also occur under timeshare tenure; no exact/narrower set claim |
| recursive_input_rule | Actual complete upstream cleaning/laundry/digital/ancillary/utility services enter only their real disjoint physical scope. Do not recursively input the same completed apartment-night again or duplicate provider-covered utility/assets; actual owner-use/tenure is not another physical service input |
| upstream_dataset_requirement | Actual full utility/material/textile/building/fitout/equipment/provider production and final treatment coverage once. Missing real stages must actually integrate with completed dataset/link/timezone/source/owner/native quantities/coverage before complete-chain claim, not a pending plan |
| disclosure | Actual unit plan/indivisibility, guest/stay/night calendars and occupancy, available/vacant/blocked/cancel/no-show resources, cleaning/linen/ancillary tasks and site/provider/receiver full-life ownership plus unresolved actual data |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| apartment_unit_service | Self-contained visitor apartment-unit service | required | Actual supported indivisible private kitchen/bathroom visitor unit and delivered occupied service-night | foreground | occupied_unit_night |

One integrated accommodation node owns the actual continuous occupied/vacant facility operation and indexed access/turnover/stayover/linen/maintenance tasks, rather than artificial manufacture or traded-product storage nodes. Real upstream providers have separate responsibility/transfer records and matching complete services. Other actual property consumers/outputs remain fully enumerated in allocation records; they are not additional copies of this reference output.

### Process: Self-contained visitor apartment-unit service (`apartment_unit_service`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Actual alternating-current electricity at point of use `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Binding: `fixed`
- Flow property / unit: Energy / kWh
- Amount rule: sum(exclusive actual attributed electricity records)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual interval kWh or supported interval-average power-duration, import registers/factors, duty coverage and complete all-user pool numerator/denominator including necessary vacancy/failed work; no per-night benchmark.

###### Actual externally delivered useful heat (`delivered_heat_delivered_heat`)

Only actual useful heat delivered across this node boundary on an evidenced energy basis. Keep supply/return state, temperature grade, coverage and actual loss ownership. This generic heat identity does not assert natural gas, steam mass, boiler efficiency or a temperature. Cooling, fuel energy and unsupported steam-to-energy cases remain outside this identity.

- Selected flow: Actual externally delivered useful heat `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- Binding: `fixed`
- Flow property / unit: Energy / MJ
- Amount rule: sum(exclusive compatible attributed delivered thermal energy)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need real provider supply meter, heating/cooling identity and quality/interval/native units/conversion and same-pool coverage, no assumed temperature or load from climate/room area.

###### Actual liquid treated tap-water supply (`supplied_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Actual liquid treated tap-water supply `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Binding: `fixed`
- Flow property / unit: Volume / m3
- Amount rule: sum(exclusive actual attributed supply volume records)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need real meters/provider invoices, native quantities and compatible density-temperature if mass-converted, all-user interval shares/pool and actual resource fate records; no litres per guest or wash allowance.

###### Actual independently recorded synthetic detergent supply (`cleaning_materials_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Actual independently recorded synthetic detergent supply `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed gross S OR consumed S-unused_outward_return, then /positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need each actual material identity/composition, NET opening/receipt/closing, EACH/TOTAL count/per-piece mass or density-temperature and matched return scope/source; no detergent or capture rate.

###### Actual complete contracted operator-linen processing service on declared textile basis (`laundry_service`)

Conditional actual laundry provider service for operator bedding/towels, not manufacture of clean textile or guest personal laundry by assumption. Actual mass basis is provider-accepted clean/dry or explicitly converted native state; count/pieces/batches expand to actual compatible native exchanges where needed. Washing/drying/finishing, energy/water/chemicals/effluent/treatment/assets/transport and rental scope mapped, gaps completed once.

- Selected flow: Actual complete contracted operator-linen processing service on declared textile basis
- Flow property / unit: Mass / kg
- Amount rule: sum(actual compatible attributed laundry-service quantity)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_linen`

Range evidence need: Need real provider/event/quality and clean-dry versus used-wet mass/tare conversion, complete operation/transport/linen-rental responsibility, no kg-per-night or fallback percent.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual occupied self-contained visitor apartment-unit-night (`occupied_unit_night`)

One actually delivered private indivisible kitchen/bathroom visitor unit-night with less-than-daily housekeeping and real included service scope. Active visitor service, local nightly calendar/timezone/DST, actual room changes/complimentary/reversal records define eligibility. Guest declining one cleaning task does not automatically reject delivered lodging. Not one booking, guest-night, point, capacity night or fixed24h.

- Selected flow: Actual occupied self-contained visitor apartment-unit-night
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_stays`

Range evidence need: Need real property/operator/unit plan/non-lockoff evidence, active stay-night delivery IDs and calendar, actual occupancy/length/room-change/complimentary/cancel-no-show-reversal and service-level/ancillary qualifiers; no standard party or hours.

##### Waste flows

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`direct_species_release_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil carbon dioxide emitted to air `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed measured species OR applicable activity-factor path with only necessary composition/fate, then /positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need real substance/particle definition/medium, independent mass or applicable source activity-factor and required composition/fate scope, capture/contained/asset ownership and sampling/time evidence; no unknown=zero or genericVOC mixture.

###### Actual separately evidenced fossil methane emitted to air (`direct_species_release_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced fossil methane emitted to air `08a91e70-3ddc-11dd-9610-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed measured species OR applicable activity-factor path with only necessary composition/fate, then /positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need real substance/particle definition/medium, independent mass or applicable source activity-factor and required composition/fate scope, capture/contained/asset ownership and sampling/time evidence; no unknown=zero or genericVOC mixture.

###### Actual separately evidenced nitrous oxide emitted to air (`direct_species_release_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: Actual separately evidenced nitrous oxide emitted to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed measured species OR applicable activity-factor path with only necessary composition/fate, then /positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need real substance/particle definition/medium, independent mass or applicable source activity-factor and required composition/fate scope, capture/contained/asset ownership and sampling/time evidence; no unknown=zero or genericVOC mixture.

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| service_count_scope | N is unique eligible actual occupied delivered_unit_night_service_id linked to actual unit_id/service_night_id from active visitor stay records, including complimentary eligible nights but excluding canceled/no-show/unprovided/duplicate room-change nights. Local night calendar, timezone/DST and actual delivery evidence determine cutover, not24h or payment. Record actual guest occupancy/stay length separately. Normalize only positive same-scope N; N0 preserves raw actual resources. |  |
| direct_and_shared | Trace actual interval/task resources directly where evidence permits. Otherwise allocate on an evidenced compatible physical causal driver across all actual unit classes, common facilities, tenants/ancillary services and periods including idle/vacancy/blocked/open events. Record complete all-user numerator/denominator quantities and native metadata. No default equal-unit, guest-count, area-only, maximum capacity, price/point or economic-margin split. Necessary standby/vacancy and failed/canceled/no-show work belonging to this actual accommodation-supply pool MUST enter that pool total before division by its real occupied N; merely listing a ledger does not remove their burdens. Separate another consumer/output only with actual responsibility evidence. N0 retains pool resources with source-to-carry-to-receiving-period-to-final-resolution links; unresolved attribution blocks the final package. |  |
| turnover_period | Link each turnover/stayover/reclean/maintenance/access event to actual stay/unit/period. Turnover resources belong once to their real served stay/cohort on an explicit causal rule; not one identical cleaning event per night. Failed/canceled/no-show work and rejected linen/consumables retain original resources and real reuse/reclean/return/discard paths without a new completed output. |  |
| full_life | Use complete manufacture/maintenance/replacement/retirement/EOL for building/fit-out/equipment/reusable linen. Compatible job_driver/lifetime_all_user_driver, lifetime=observed all-user history+sourced remaining service, actual equivalence and uncertainty/sensitivity/update. Annual occupied N is not whole asset life. Lifetime driver is a compatible complete all-user responsibility/service basis, never nominal saleable capacity or calendar hours while omitting corresponding idle responsibility from numerators. Every actual idle/blocked/failed obligation is assigned to its responsible pool/consumer once, not lost between lifetime denominator and occupied-output attribution. Shared ownership/lease/management/timeshare responsibility partitions actual physical lifecycle once, no duplicate provider/carrier or pre-existing asset burden. |  |
| provider_ancillary | Each real laundry/digital/cleaning/ancillary provider quantity has physical unit/equivalence and matching quality/service coverage. Explicitly separate raw package quantity from already converted/attributed quantity; multiply equivalence/share only where needed. Match all included material/energy/water/chemical/effluent/assets/transport and upstream scope. Bundled extra services cannot disappear; separate property outputs use documented all-consumer responsibility, not an automatic extra output credit. |  |
| supply_return | S=opening+net_receipts-closing, including retained recovery within closing; actual NET material receipts exclude supply-container tare. Gross INPUT S with separate matched usable unused outward OUTPUT OR consumed-only INPUT S-unused_outward_return with matching OUTPUT OMITTED. Only same-scope unconsumed standalone supply is netted, not recovered installed refrigerant/linen asset or unrelated stock. Apply actual resource attribution and same-scope N once, no extra return credit. |  |
| refrigerant_owner | Factory charge may already be in HVAC/appliance lifecycle. Track that source separately from standalone operating supply and installed/recovered stock. Recovery is internal transfer until real export, retained recovery is closing. Useful recovered installed charge may be exported without automatic credit; never subtract it from unrelated current makeup. Only matched unused same-scope standalone supply is eligible for consumed-only netting. Actual independent contained waste and direct species use their own quantities/fates and receiving ownership. |  |
| exclusive_receivers | Actual reusable/textile/asset/supply Product exits, separate wasted materials, genuine mixed capture, contained effluent/refrigerant waste and direct species have mutually exclusive physical membership. Retained components do not add another whole stream. Receiving transport/treatment/EOL belongs once; if a complete lifecycle/provider already covers the identical event, preserve physical audit and remove duplicate treatment exchange burden only through explicit coverage evidence, not omit real fate. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_stays | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual unit topology visitor stay and occupied service-night ledger | actual_guest_count; actual_guest_count_unit; actual_guest_count_basis; actual_guest_count_method; actual_guest_count_state; actual_guest_count_source; actual_guest_count_sample_time; actual_occupied_unit_nights; actual_occupied_unit_nights_unit; actual_occupied_unit_nights_basis; actual_occupied_unit_nights_method; actual_occupied_unit_nights_state; actual_occupied_unit_nights_source; actual_occupied_unit_nights_sample_time; available_unit_nights; available_unit_nights_unit; available_unit_nights_basis; available_unit_nights_method; available_unit_nights_state; available_unit_nights_source; available_unit_nights_sample_time; vacant_unit_nights; vacant_unit_nights_unit; vacant_unit_nights_basis; vacant_unit_nights_method; vacant_unit_nights_state; vacant_unit_nights_source; vacant_unit_nights_sample_time; blocked_unit_nights; blocked_unit_nights_unit; blocked_unit_nights_basis; blocked_unit_nights_method; blocked_unit_nights_state; blocked_unit_nights_source; blocked_unit_nights_sample_time; no_show_cancelled_nights; no_show_cancelled_nights_unit; no_show_cancelled_nights_basis; no_show_cancelled_nights_method; no_show_cancelled_nights_state; no_show_cancelled_nights_source; no_show_cancelled_nights_sample_time; delivered_interval_duration; delivered_interval_duration_unit; delivered_interval_duration_basis; delivered_interval_duration_method; delivered_interval_duration_state; delivered_interval_duration_source; delivered_interval_duration_sample_time; stay_length; stay_length_unit; stay_length_basis; stay_length_method; stay_length_state; stay_length_source; stay_length_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_source; same_scope_N_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; unit_id; unit_plan_source; indivisible_non_lockoff_confirmation; independent_access_source; private_kitchen_bathroom_scope; bookable_unit_inventory_link; visitor_stay_id; delivered_unit_night_service_id; room_change_parent_service_link; unit_time_segment_records; visitor_away_from_residence_evidence; service_night_id; night_calendar_definition; night_calendar_source; night_start_end_local; actual_arrival_departure; interval_start_end_UTC; DST_rule_source; room_change_transfer_ids; complimentary_status; cancellation_no_show_reversal_ids; service_delivery_evidence; actual_housekeeping_service_regime; actual_cleaning_linen_event_links; included_ancillary_scope; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker | Confirm actual single indivisible private kitchen/bathroom unit with unit plan, independent access and bookable delivered-unit scope; unknown/lockoff/combined/shared-bed routes excluded. Trace active visitor stay and actual delivered occupied unit-night using local night calendar/timezone/DST, actual checkin/out/room moves and reversal records, not price/booking/points. Actual unit/time segments of one substituted delivered service-night link to one delivered_unit_night_service_id, retaining both unit resources without duplicate N; actually separately supplied units have distinct IDs even under one booking. Complimentary actually provided eligible nights count; no-show/cancelled/unprovided do not. Guest temporarily away during active stay does not erase night. A guest declining or failed single cleaning task does not alone reject provided accommodation. Keep guest count/stay length and actual hours distinct. Necessary vacant/standby/maintenance/cancel/failed tasks and assets stay in responsible pool before real N division; N0 retains source/carry/receiving-period/resolution links and unresolved allocation blocks final package. | Actual unit-nights, guest counts and native duration units; reference Item(s) counts one eligible unit-night | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_utilities | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual electricity delivered thermal energy and fuel intervals | reading_start; reading_start_unit; reading_start_basis; reading_start_method; reading_start_state; reading_start_source; reading_start_sample_time; reading_end; reading_end_unit; reading_end_basis; reading_end_method; reading_end_state; reading_end_source; reading_end_sample_time; meter_factor; meter_factor_unit; meter_factor_basis; meter_factor_method; meter_factor_state; meter_factor_source; meter_factor_sample_time; integrated_energy; integrated_energy_unit; integrated_energy_basis; integrated_energy_method; integrated_energy_state; integrated_energy_source; integrated_energy_sample_time; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_source; interval_average_power_sample_time; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_source; elapsed_duration_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; fuel_net_quantity; fuel_net_quantity_unit; fuel_net_quantity_basis; fuel_net_quantity_method; fuel_net_quantity_state; fuel_net_quantity_source; fuel_net_quantity_sample_time; fuel_volume; fuel_volume_unit; fuel_volume_basis; fuel_volume_method; fuel_volume_state; fuel_volume_source; fuel_volume_sample_time; fuel_density; fuel_density_unit; fuel_density_basis; fuel_density_method; fuel_density_state; fuel_density_source; fuel_density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; density_pressure; density_pressure_unit; density_pressure_basis; density_pressure_method; density_pressure_state; density_pressure_source; density_pressure_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; all_user_interval_driver; all_user_interval_driver_unit; all_user_interval_driver_basis; all_user_interval_driver_method; all_user_interval_driver_state; all_user_interval_driver_source; all_user_interval_driver_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; utility_identity; meter_id; source_import_register; provider_id; interval_start; interval_end; interval_start_end_UTC; average_power_method; averaging_population; actual_duty_cycle_source; cycling_standby_fans_defrost_coverage; nameplate_instantaneous_exclusion; already_integrated_quantity_flag; thermal_vs_fuel_scope; guest_kitchen_appliance_hotwater_coverage; fuel_upstream_and_combustion_owner; provider_overlap; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual import registers/meter factors or supplier physical quantities for occupied/vacant/common/cleaning/guest kitchen-appliance-hotwater duties. Already integrated kWh is not multiplied by duration. Power-times-duration only actual interval-average including cycling/fans/defrost/idle on same actual elapsed interval, not instantaneous/nameplate. Real fuel volume conversion uses actual compatible density/temperature/pressure/state/source, not generic property. Delivered heat versus on-site fuel/conversion assets and combustion emissions have disjoint scope. Identify raw versus already attributed/perreference quantities and every native driver; necessary unproductive pool load remains, not standby zero or merely ledger disclosure. | Native electricity kWh, thermal MJ or supported source unit, actual fuel kg or native volume with sourced compatible conversions | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_water | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual water supply contained effluent and water-state ledger | meter_start; meter_start_unit; meter_start_basis; meter_start_method; meter_start_state; meter_start_source; meter_start_sample_time; meter_end; meter_end_unit; meter_end_basis; meter_end_method; meter_end_state; meter_end_source; meter_end_sample_time; meter_factor; meter_factor_unit; meter_factor_basis; meter_factor_method; meter_factor_state; meter_factor_source; meter_factor_sample_time; supply_volume; supply_volume_unit; supply_volume_basis; supply_volume_method; supply_volume_state; supply_volume_source; supply_volume_sample_time; supply_mass; supply_mass_unit; supply_mass_basis; supply_mass_method; supply_mass_state; supply_mass_source; supply_mass_sample_time; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_volume_basis; contained_effluent_volume_method; contained_effluent_volume_state; contained_effluent_volume_source; contained_effluent_volume_sample_time; contained_effluent_mass; contained_effluent_mass_unit; contained_effluent_mass_basis; contained_effluent_mass_method; contained_effluent_mass_state; contained_effluent_mass_source; contained_effluent_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; retained_water; retained_water_unit; retained_water_basis; retained_water_method; retained_water_state; retained_water_source; retained_water_sample_time; actual_water_vapour_mass; actual_water_vapour_mass_unit; actual_water_vapour_mass_basis; actual_water_vapour_mass_method; actual_water_vapour_mass_state; actual_water_vapour_mass_source; actual_water_vapour_mass_sample_time; direct_discharge_species_quantity; direct_discharge_species_quantity_unit; direct_discharge_species_quantity_basis; direct_discharge_species_quantity_method; direct_discharge_species_quantity_state; direct_discharge_species_quantity_source; direct_discharge_species_quantity_sample_time; water_stock_opening; water_stock_opening_unit; water_stock_opening_basis; water_stock_opening_method; water_stock_opening_state; water_stock_opening_source; water_stock_opening_sample_time; water_stock_closing; water_stock_closing_unit; water_stock_closing_basis; water_stock_closing_method; water_stock_closing_state; water_stock_closing_source; water_stock_closing_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; supply_id; meter_provider_id; interval_start; interval_end; direct_vs_provider_scope; sanitary_cleaning_laundry_stream_id; collection_transfer_id; receiver_id; receiver_treatment_scope; whole_stream_component_membership; retained_water_exclusion; actual_evaporation_measurement_source; actual_discharge_medium; sample_id; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect actual water supply for operator fixtures/kitchen/bath/housekeeping/real linen tasks and real all-user allocation. Independently identify actual sanitary/cleaning/laundry contained receiver stream quantities, composition and treatment. Density and temperature compatible if volume converted to mass; actual water vapour to air or direct discharge species requires independent evidence, not input minus effluent. Retained water in linen/cleanup/stock is nonadditive audit. Genuine mixed receiver stream remains one stream; actually different receiver streams expand separately. Actual external guest-origin constituents not inferred from standard guest load. | Actual native m3/L/kg and independently sourced composition/state conversions, not default water balance residual | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_operations | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual housekeeping turnover support and maintenance task events | task_quantity; task_quantity_unit; task_quantity_basis; task_quantity_method; task_quantity_state; task_quantity_source; task_quantity_sample_time; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_source; repeat_count_sample_time; task_duration; task_duration_unit; task_duration_basis; task_duration_method; task_duration_state; task_duration_source; task_duration_sample_time; served_unit_nights; served_unit_nights_unit; served_unit_nights_basis; served_unit_nights_method; served_unit_nights_state; served_unit_nights_source; served_unit_nights_sample_time; occupant_driver; occupant_driver_unit; occupant_driver_basis; occupant_driver_method; occupant_driver_state; occupant_driver_source; occupant_driver_sample_time; area_driver; area_driver_unit; area_driver_basis; area_driver_method; area_driver_state; area_driver_source; area_driver_sample_time; idle_resource_quantity; idle_resource_quantity_unit; idle_resource_quantity_basis; idle_resource_quantity_method; idle_resource_quantity_state; idle_resource_quantity_source; idle_resource_quantity_sample_time; failed_resource_quantity; failed_resource_quantity_unit; failed_resource_quantity_basis; failed_resource_quantity_method; failed_resource_quantity_state; failed_resource_quantity_source; failed_resource_quantity_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; task_id; task_type; stay_unit_night_links; scheduled_actual_declined_failed_status; turnover_stayover_changeover_id; batch_run_id; continuous_operation_interval; provider_or_direct_owner; cleaning_linen_return_reclean_reject_links; actual_operation_source; included_ancillary_responsibility; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker | Link real before-arrival/checkout/less-than-daily in-stay cleaning, access/support/maintenance and linen changes to actual stay/unit/period and task batch or continuous interval. Do not prescribe a brand schedule or create one cleaning each night. Declined/failed tasks retain actual resource work but do not automatically reject delivered lodging. Actual repeated/reclean/reject material paths keep original burden and real next-use/return/receiver links. Assign necessary vacancy/blocked/no-show/cancel work to responsible lodging pool; separate another product/tenant only with evidence, not omitted idle. | Actual native task/count/time/area or other compatible physical drivers with sourced conversions | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_supplies | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual NET cleaning laundry guest amenity and added service material stocks | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_source; receipt_gross_sample_time; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_source; container_tare_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; attributed_supply_quantity; attributed_supply_quantity_unit; attributed_supply_quantity_basis; attributed_supply_quantity_method; attributed_supply_quantity_state; attributed_supply_quantity_source; attributed_supply_quantity_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; material_SKU; formulation_identity; EACH_TOTAL_extent; supply_stock_scope; matched_unused_return_ids; gross_or_consumed_convention; provider_included_material_exclusion; reusable_linen_asset_exclusion; inherited_installed_fluid_exclusion; source_stock_carry_links; actual_guest_supply_inclusion; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record each actual separate formulation/SKU and native material state, not a uniform hygiene or guest kit. NET receipts exclude container tare on matching units. Reconcile opening+net receipts-closing with retained recovery inside closing; choose gross INPUT plus actual same-stock usable unused OUTPUT or consumed-only subtracting matched unused return and OMIT matching output. Include loss/spent supply burden; no unrelated installed refrigerant or durable linen netting. Native EACH/TOTAL and actual count/per-piece or density-temperature conversions, raw versus attributed state and actual all-user shares retained; provider materials covered once. | Actual native material units and compatible kg conversions, each actual independent SKU expanded | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_linen | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual reusable textile circulation laundry service and lifetime care records | textile_count; textile_count_unit; textile_count_basis; textile_count_method; textile_count_state; textile_count_source; textile_count_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; clean_dry_textile_mass; clean_dry_textile_mass_unit; clean_dry_textile_mass_basis; clean_dry_textile_mass_method; clean_dry_textile_mass_state; clean_dry_textile_mass_source; clean_dry_textile_mass_sample_time; conditioned_textile_mass; conditioned_textile_mass_unit; conditioned_textile_mass_basis; conditioned_textile_mass_method; conditioned_textile_mass_state; conditioned_textile_mass_source; conditioned_textile_mass_sample_time; used_wet_loaded_mass; used_wet_loaded_mass_unit; used_wet_loaded_mass_basis; used_wet_loaded_mass_method; used_wet_loaded_mass_state; used_wet_loaded_mass_source; used_wet_loaded_mass_sample_time; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_source; container_tare_sample_time; wet_sample_mass; wet_sample_mass_unit; wet_sample_mass_basis; wet_sample_mass_method; wet_sample_mass_state; wet_sample_mass_source; wet_sample_mass_sample_time; water_quantity; water_quantity_unit; water_quantity_basis; water_quantity_method; water_quantity_state; water_quantity_source; water_quantity_sample_time; w_wet; w_wet_unit; w_wet_basis; w_wet_method; w_wet_state; w_wet_source; w_wet_sample_time; w_dry; w_dry_unit; w_dry_basis; w_dry_method; w_dry_state; w_dry_source; w_dry_sample_time; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_source; percent_to_ratio_factor_sample_time; dry_nonwater_mass; dry_nonwater_mass_unit; dry_nonwater_mass_basis; dry_nonwater_mass_method; dry_nonwater_mass_state; dry_nonwater_mass_source; dry_nonwater_mass_sample_time; soil_quantity; soil_quantity_unit; soil_quantity_basis; soil_quantity_method; soil_quantity_state; soil_quantity_source; soil_quantity_sample_time; laundry_native_service_quantity; laundry_native_service_quantity_unit; laundry_native_service_quantity_basis; laundry_native_service_quantity_method; laundry_native_service_quantity_state; laundry_native_service_quantity_source; laundry_native_service_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; textile_lifecycle_event_quantity; textile_lifecycle_event_quantity_unit; textile_lifecycle_event_quantity_basis; textile_lifecycle_event_quantity_method; textile_lifecycle_event_quantity_state; textile_lifecycle_event_quantity_source; textile_lifecycle_event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; textile_id_batch; textile_material_BOM; bedding_towel_service_identity; change_wash_event_id; stay_unit_night_task_links; clean_dry_conditioned_soiled_basis; water_sample_id_component_scope; water_definition_source; LOD_other_volatiles_exclusion; EACH_TOTAL_extent; provider_id; care_quality_and_finish; wash_dry_finish_coverage; energy_water_chemicals_effluent_treatment_coverage; textile_rental_manufacture_repair_EOL_owner; transport_asset_scope; actual_on_site_laundry_equipment_route; manufacture_replacement_retirement_links; remaining_life_source; full_all_user_care_cycle_records; sensitivity_update_source; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker | Trace actual operator textiles, clean/dry/conditioned/used-wet/soiled masses, container tare and real change/wash/reclean/reject events. Guest washer availability is not operator-linen evidence. Water fraction only identified same sample and compatible wet/dry definition after percent conversion, other volatiles/soil not water/fibre. Real provider accepted mass/count/quality conversion supported, no kg per night. Explicit wash/dry/finish electricity/heat/fuel/water/chemicals/effluent/treatment/textile-rental/assets/transport coverage; add actual missing stages once with completed integration evidence. Textile manufacture/repair/replacement/EOL attribution uses full all-user observed plus sourced remaining compatible service, uncertainty/sensitivity/update; care already in supplied dataset is not counted again. Retired or usable linen transfer follows actual receiver, no new set per night. | Actual textile count/native clean-dry/conditioned/used-wet kg and provider native service unit; compatible life-driver equivalences | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_providers | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual laundry-external support property and included ancillary service coverage | actual_native_quantity; actual_native_quantity_unit; actual_native_quantity_basis; actual_native_quantity_method; actual_native_quantity_state; actual_native_quantity_source; actual_native_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; attributed_package_quantity; attributed_package_quantity_unit; attributed_package_quantity_basis; attributed_package_quantity_method; attributed_package_quantity_state; attributed_package_quantity_source; attributed_package_quantity_sample_time; integrated_missing_quantity; integrated_missing_quantity_unit; integrated_missing_quantity_basis; integrated_missing_quantity_method; integrated_missing_quantity_state; integrated_missing_quantity_source; integrated_missing_quantity_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; provider_id; contract_service_id; actual_event_ids; actual_delivered_quality; native_service_unit_definition; raw_converted_attributed_perreference_package_state; included_ancillary_obligation; actual_use_vs_availability_basis; material_energy_water_chemicals_effluent_treatment_asset_freight_matrix; operator_direct_overlap; upstream_dataset_link; missing_actual_stages; integration_status; integration_dataset_link; integration_time; integration_time_zone; integration_source; integration_owner; integration_coverage_once_evidence; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker | Obtain real physically completed provider task/package or actual included service obligation, native unit/quality/equivalence and source, not fee/point/order as physical quantity. Record raw/already converted/attributed/perreference state, only apply needed conversion/share once. Explicitly cover all materials/energy/water/chemicals/effluent/treatment/ICT/assets/linen-rental/transport and excluded direct overlaps. Missing actual stages/resource quantities must actually integrate once through completed dataset/link/timezone/source/owner/native quantity and coverage evidence before full-chain use; plan alone insufficient. Other real tenants/independent outputs retain responsibility and no pool standby vanishes. | Actual native service units and sourced physical equivalents; Item(s) only for real defined package where verified | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_assets | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual complete-life building fit-out equipment and infrastructure responsibility | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; retired_material_quantity; retired_material_quantity_unit; retired_material_quantity_basis; retired_material_quantity_method; retired_material_quantity_state; retired_material_quantity_source; retired_material_quantity_sample_time; retained_fluid_quantity; retained_fluid_quantity_unit; retained_fluid_quantity_basis; retained_fluid_quantity_method; retained_fluid_quantity_state; retained_fluid_quantity_source; retained_fluid_quantity_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; asset_id; asset_role_BOM; unit_building_common_scope; manufacture_source; maintenance_source; replacement_events; retirement_EOL_events; observed_history_boundary; remaining_life_source; all_user_all_period_records; idle_responsibility_in_numerator_and_denominator; nominal_capacity_not_lifetime_evidence; shared_ownership_lease_timeshare_responsibility; provider_carrier_overlap; current_EOLevent_treatment_coverage; initial_fluid_charge_owner; textile_lifecycle_exclusion; uncertainty_sensitivity_update_source; resource_source_event_link; unproductive_reason; necessary_pool_obligation_evidence; idle_failed_resources_in_pool_total; other_consumer_separation_evidence; carry_from_period_link; carry_to_receiving_period_link; carry_resolution_link; carry_resolution_status; unallocated_resource_blocker | Identify actual building/site/fitout/furniture/HVAC/appliances/access-ICT/real supports and full manufacture/maintenance/replacement/retirement/EOL; ownership/rent/timeshare fee not physical service. All-user observed history plus sourced remaining compatible life driver and actual equivalence, uncertainty/sensitivity/update. Lifetime denominator not annual occupiedN or nominal available capacity/calendar hours with idle responsibility missing from numerators. Necessary idle/blocked/failed obligations go to responsible pool/consumer once, all consumer periods closed. Textile lifecycle and provider/carrier-covered asset event separate. Actual EOL physical transfer/treatment has one owner; record identical lifecycle coverage to avoid double treatment without losing fate. | Actual native asset/event and job/history/remainder/lifetime driver units; sourced compatible physical equivalents | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_freight | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual unique packed load-leg supply linen maintenance and receiver movements | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_count_multiplier; cargo_count_multiplier_unit; cargo_count_multiplier_basis; cargo_count_multiplier_method; cargo_count_multiplier_state; cargo_count_multiplier_source; cargo_count_multiplier_sample_time; gross_load_mass; gross_load_mass_unit; gross_load_mass_basis; gross_load_mass_method; gross_load_mass_state; gross_load_mass_source; gross_load_mass_sample_time; cargo_container_pack_mass; cargo_container_pack_mass_unit; cargo_container_pack_mass_basis; cargo_container_pack_mass_method; cargo_container_pack_mass_state; cargo_container_pack_mass_source; cargo_container_pack_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_payload; whole_payload_unit; whole_payload_basis; whole_payload_method; whole_payload_state; whole_payload_source; whole_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_source; record_share_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; load_id; leg_id; unique_load_leg_key; cargo_EACH_TOTAL_extent; count_repeat_convention; cargo_membership; linen_water_pack_support_scope; empty_return_coverage; provider_receiver_overlap; actual_carrier_asset_fuel_coverage | Use actual unique load-leg and complete packed cargo or exclusive components, including real retained soiled-textile water/pack/carried support; do not use clean-dry textile alone as whole payload. EACH native quantity times actual compatible count once/TOTAL unchanged, noncargo carrier tare only. Each record actual sourced share inside unique work sum and positive same-scopeN once; already attributed/perreference record unchanged. Actual distance/mass native conversions and empty/provider/receiver boundaries complete, no guest travel by default. | Actual native kg/t and distance units to t*km with sourced factors, count and record-share basis | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_refrigerant | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual factory charge standalone supply installed recovery and outlet role ledger | factory_charge_quantity; factory_charge_quantity_unit; factory_charge_quantity_basis; factory_charge_quantity_method; factory_charge_quantity_state; factory_charge_quantity_source; factory_charge_quantity_sample_time; factory_charge_actual_receipt_in_period; factory_charge_actual_receipt_in_period_unit; factory_charge_actual_receipt_in_period_basis; factory_charge_actual_receipt_in_period_method; factory_charge_actual_receipt_in_period_state; factory_charge_actual_receipt_in_period_source; factory_charge_actual_receipt_in_period_sample_time; other_actual_receipts; other_actual_receipts_unit; other_actual_receipts_basis; other_actual_receipts_method; other_actual_receipts_state; other_actual_receipts_source; other_actual_receipts_sample_time; other_actual_exits; other_actual_exits_unit; other_actual_exits_basis; other_actual_exits_method; other_actual_exits_state; other_actual_exits_source; other_actual_exits_sample_time; standalone_receipt_gross; standalone_receipt_gross_unit; standalone_receipt_gross_basis; standalone_receipt_gross_method; standalone_receipt_gross_state; standalone_receipt_gross_source; standalone_receipt_gross_sample_time; supply_container_tare; supply_container_tare_unit; supply_container_tare_basis; supply_container_tare_method; supply_container_tare_state; supply_container_tare_source; supply_container_tare_sample_time; standalone_net_receipts; standalone_net_receipts_unit; standalone_net_receipts_basis; standalone_net_receipts_method; standalone_net_receipts_state; standalone_net_receipts_source; standalone_net_receipts_sample_time; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_source; opening_installed_sample_time; opening_stored; opening_stored_unit; opening_stored_basis; opening_stored_method; opening_stored_state; opening_stored_source; opening_stored_sample_time; opening_recovered; opening_recovered_unit; opening_recovered_basis; opening_recovered_method; opening_recovered_state; opening_recovered_source; opening_recovered_sample_time; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_source; closing_installed_sample_time; closing_stored; closing_stored_unit; closing_stored_basis; closing_stored_method; closing_stored_state; closing_stored_source; closing_stored_sample_time; closing_recovered; closing_recovered_unit; closing_recovered_basis; closing_recovered_method; closing_recovered_state; closing_recovered_source; closing_recovered_sample_time; actual_makeup_transfer; actual_makeup_transfer_unit; actual_makeup_transfer_basis; actual_makeup_transfer_method; actual_makeup_transfer_state; actual_makeup_transfer_source; actual_makeup_transfer_sample_time; recovery_transfer; recovery_transfer_unit; recovery_transfer_basis; recovery_transfer_method; recovery_transfer_state; recovery_transfer_source; recovery_transfer_sample_time; unused_standalone_return; unused_standalone_return_unit; unused_standalone_return_basis; unused_standalone_return_method; unused_standalone_return_state; unused_standalone_return_source; unused_standalone_return_sample_time; usable_recovered_export; usable_recovered_export_unit; usable_recovered_export_basis; usable_recovered_export_method; usable_recovered_export_state; usable_recovered_export_source; usable_recovered_export_sample_time; contained_waste; contained_waste_unit; contained_waste_basis; contained_waste_method; contained_waste_state; contained_waste_source; contained_waste_sample_time; direct_release; direct_release_unit; direct_release_basis; direct_release_method; direct_release_state; direct_release_source; direct_release_sample_time; retained_in_whole_asset_waste; retained_in_whole_asset_waste_unit; retained_in_whole_asset_waste_basis; retained_in_whole_asset_waste_method; retained_in_whole_asset_waste_state; retained_in_whole_asset_waste_source; retained_in_whole_asset_waste_sample_time; retained_in_part_waste; retained_in_part_waste_unit; retained_in_part_waste_basis; retained_in_part_waste_method; retained_in_part_waste_state; retained_in_part_waste_source; retained_in_part_waste_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_source; composition_fraction_sample_time; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_source; fate_fraction_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; asset_fluid_id; fluid_SKU; component_species_ids; composition_fraction_basis_source; fate_fraction_basis_source; source_charge_supply_provenance; fluid_lot_charge_role_partition; stored_excludes_separately_reported_recovered; factory_entry_not_in_opening_or_other_receipts; other_receipts_exclusion_ids; other_exits_exclusion_ids; factory_charge_supply_coverage_owner; standalone_supply_stock_scope; supply_gross_consumed_choice; matched_unused_supply_return_ids; installed_recovery_internal_transfer_ids; receiver_export_treatment_id; retained_whole_part_fate_exclusion; direct_species_medium_source; actual_stock_discrepancy_blocker | Trace actual named fluid/mixture and each source charge/standalone supply unit/basis/method/state/time/source. Initial factory charge may be inside asset lifecycle. opening_stored/closing_stored exclude the separately reported recovered substock; each lot/charge/role is in exactly one stock category. Factory charge is a new period receipt only when not already in opening or any other receipt, and other_actual_receipts/exits exclude all separately listed terms with actual exclusion IDs. Recovery is internal transfer, not new receipt. Reconcile opening/real receipts/installed transfers/recovery with closing installed-stored-recovered, useful export, contained waste, direct release and retained fluid following actual whole/part waste as nonadditive content audit. No topup=leak or discrepancy=release/zero. Gross standalone supply+matched unused output OR consumed input OMIT; only same-scope UNUSED standalone stock may be netted. Recovered factory charge exported cannot reduce unrelated current makeup. Actual composition/fate bases source and real receiver/medium/treatment once; no assumed refrigerant species or credit. | Each real fluid/component native kg or actual compatible volume-density-temperature conversion; retained whole/part contents nonadditive | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_fates | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual separate usable and waste receiver streams and retained components | native_transfer_quantity; native_transfer_quantity_unit; native_transfer_quantity_basis; native_transfer_quantity_method; native_transfer_quantity_state; native_transfer_quantity_source; native_transfer_quantity_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_source; whole_stream_mass_sample_time; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_source; container_tare_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_water; retained_water_unit; retained_water_basis; retained_water_method; retained_water_state; retained_water_source; retained_water_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; retained_textile_solid; retained_textile_solid_unit; retained_textile_solid_basis; retained_textile_solid_method; retained_textile_solid_state; retained_textile_solid_source; retained_textile_solid_sample_time; retained_capture_substrate; retained_capture_substrate_unit; retained_capture_substrate_basis; retained_capture_substrate_method; retained_capture_substrate_state; retained_capture_substrate_source; retained_capture_substrate_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; transfer_id; parent_material_textile_asset_ids; stream_id; material_identity; origin_guest_operator_provider; EACH_TOTAL_extent; whole_component_membership; separate_material_exclusion; mixed_capture_exclusion; contained_liquid_exclusion; retained_whole_asset_fluid_exclusion; receiver_id; receiver_Product_Waste_status; receiver_status_source; actual_usable_acceptance; treatment_transport_owner; upstream_lifecycle_identical_treatment_coverage; unused_supply_return_match; actual_export_not_closing; no_automatic_credit; sample_id | Track real reject/repair/reclean/reuse/return/discard and actual receiving status, not stain/odour/label as automatic waste or zero. Record each independent actual material/receiver stream separately; a real mixed stream remains whole with independent component quantities as nonadditive audit. Guest-origin waste treatment may be accommodation duty without importing all guest food production. Retained fluid in whole/part asset follows that stream, not extra fluid waste. NET quantity/actual EACH-TOTAL/native composition/density sources and parent links; current receiver treatment/transport versus identical full-life/provider coverage one owner once. Closing/internal carry not external export; consumed-only supply omits matched unused output. | Actual native independent receiver stream kg/count/volume and supported conversions; each retained component own unit/basis/method/state/time/source | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |
| cp_environment | apartment_unit_service | Actual node exchanges/events and explanatory physical responsibility audit | Actual independently evidenced resource uptake and direct species-medium releases | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; applicable_factor; applicable_factor_unit; applicable_factor_basis; applicable_factor_method; applicable_factor_state; applicable_factor_source; applicable_factor_sample_time; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_source; composition_fraction_sample_time; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_source; fate_fraction_sample_time; release_quantity; release_quantity_unit; release_quantity_basis; release_quantity_method; release_quantity_state; release_quantity_source; release_quantity_sample_time; resource_quantity; resource_quantity_unit; resource_quantity_basis; resource_quantity_method; resource_quantity_state; resource_quantity_source; resource_quantity_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; property_id; operator_id; event_id; reporting_period; pool_id; responsible_pool_owner; consumer_ids; all_consumer_driver_records; raw_converted_attributed_perreference_state; assignment_scope_ids; same_scope_N_source; time_zone; time_source; coverage_owner; overlap_exclusion; uncertainty_source; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; species_or_resource_identity; particle_class_definition; receiving_or_origin_medium; factor_scope_complete; composition_basis_source; fate_basis_source; factor_applicability_source; capture_contained_exclusions; water_vapour_phase_evidence; combustion_refrigerant_chemical_scope; measurement_location; sample_id; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Identify real resource/substance/particle and origin/receiving medium before elementary flow binding. Water vapour to air is not liquid waste or environmental liquid discharge. Use measured quantity OR applicable compatible activity-factor with only composition/fate needed and not already covered by complete factor. Retained/captured/contained quantities excluded, unknown stock gap/odour/SDS inventory not release or zero. Actual resource uptake independent of purchased product supply, no arbitrary oxygen/withdrawal mass from residual. Record native units/basis/method/state/time/source and actual owner/coverage. | Actual native species/resource kg and supported factor/measurement units; independent phase and medium identity | Each actual event and compatible meter/service/stock/life interval | Actual unit-night/stay/task/reporting periods and source-to-carry-to-resolution phases | Real property/unit/common areas and actual provider/receiver handoffs, every relevant consumer | per reference flow | Raw source/calibration/method with native unit/basis/state/source/sample or event time; actual ownership/coverage/uncertainty, unknown not zero |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| occupied_n | cp_stays | N=count_unique_eligible(delivered_unit_night_service_id) for actual active occupied visitor service after reversals and room-change reconciliation. A substitution within the same delivered service-night links all actual unit/time segments to one service_id without duplicate N; retain resources of both segments. Two separately provided units are distinct actual service_ids, not collapsed because one reservation. Use declared local service-night calendar/timezone/DST and actual interval; eligible complimentary service counts, canceled/no-show/unprovided nights do not. A declined, skipped or failed cleaning task alone does not make an actually delivered eligible accommodation night rejected. No division at N0; preserve raw pool resources through source/carry/receiving-period/resolution links; unknown responsibility blocks finalization. | Actual delivery/night/stay/topology/occupancy/transfer records | Actual same-scope occupied-unit-night denominator |  |
| resource_scope | cp_utilities; cp_water; cp_operations | For each record, raw attributed_resource=compatible_converted_raw_quantity*that_record_documented_share; already_attributed records use their actual attributed quantity unchanged. Sum mutually exclusive records for target_cohort, then q_per_reference=raw_target_cohort_quantity/positive_same_target_N only once. Already_per_reference values not divided again. Reconcile all consumers and complete periods before normalization. | Record scope, units/conversion, native numerator/denominator, all-user records, N | Actual attributed resource per one unit-night |  |
| meter_or_average | cp_utilities | Actual energy is directly integrated meter/import-register quantity or actual interval-average power*matching elapsed_duration after sourced native conversion. Average power must cover actual cycling/standby/fans/defrost in that interval; instantaneous/nameplate rating is not consumed energy. Already integrated kWh is not multiplied by duration. Purchased heat and fuel/on-site conversion scope exclusive; combustion species separately evidenced. | Native import registers/factor or actual interval-average/elapsed time and coverage | Actual site energy before attribution |  |
| supply_stock | cp_supplies | S=opening+net_receipts-closing including retained recovery in closing; net_receipts=receipt_gross-container_tare only on matching actual material/state units. Gross S INPUT plus paired unused_outward_return OUTPUT OR consumed S-unused_outward_return INPUT and OMIT matching OUTPUT. EACH quantities times matching actual count once/TOTAL unchanged; actual per-piece/density-temperature conversion. Raw all-user share then same-scope N once. | Actual net stocks, extent/count, conversions and matched unused return | Exclusive material input/return convention |  |
| linen_cycle | cp_linen | Count actual distinct textile IDs/batches and real wash/change events; clean_dry_textile_mass, used_wet_loaded_mass, contamination/retained water and container tare are separate. dry_nonwater_mass=wet_sample_mass*(1-w_wet) only actual water/as-received wet fraction; compatible same-sample w_dry=water/dry_nonwater converts w_wet=w_dry/(1+w_dry) after percent-to-ratio conversion. Dry nonwater may include soil and is not automatically clean fibre. Actual laundry service unit conversion and textile lifecycle driver require sourced compatible clean/used state, never nominalkg or number of beds. | Textile/event/mass/water definitions and provider service-unit source | Actual linen circulation/service and lifecycle allocation audit |  |
| complete_lifetime | cp_assets; cp_linen | lifetime_all_user_driver=compatible_observed_all_user_driver+compatible_sourced_remaining_driver. asset_equivalent=event_quantity*job_driver/lifetime_all_user_driver, summed over exclusive complete-life events; actual same-scope N once. Reusable linen manufacture/replacement/EOL follows observed+sourced remaining real use/care cycle service with all users and wastage retained; no new complete linen set each unit-night or annualN as lifetime. | Complete life event/native job-observed-remaining/equivalence/owner records | Full-life building/equipment/textile service burden |  |
| complete_provider | cp_providers | provider_service=sum(actual_native_quantity*physical_equivalence_if_not_already_converted*documented_share_if_not_already_attributed), with explicit raw/converted/attributed state. Native physical equivalence and all-user share must match provider unit/quality/coverage. Add actually missing upstream/material/energy/water/chemical/effluent/treatment/asset/freight stages once before complete-chain use with completed dataset/link/timezone/source/owner/quantity/coverage evidence; a pending plan is not completion. Then normalize same-scope N once. | Real physical packages, conversion-state and complete responsibility matrix | Actual complete disjoint upstream services |  |
| freight_sum | cp_freight | actual_payload=actual packed cargo mass, including actual retained textile water and all carried pack/support, excluding only true noncargo vehicle/container tare. EACH times matching actual_count once/TOTAL unchanged. Convert each unique load+leg payload/distance to transport_work. freight_per_reference=sum_unique_load_leg(transport_work*THAT_record_actual_share)/positive_same_scope_N. Already attributed/per-reference records are not shared/divided again; actual empty/provider/receiver scope owned once. | Native payload/gross-tare/count/distance/conversion/share/coverage records | Actual freight t*km per unit-night |  |
| fluid_roles | cp_refrigerant | Reconcile each actual fluid source/stock/state: opening_installed+opening_stored+opening_recovered+factory_charge_actual_receipt_in_period+standalone_net_receipts+other_actual_receipts equals closing_installed+closing_stored+closing_recovered+unused_standalone_return+usable_recovered_export+contained_waste+direct_release+retained_in_whole_asset_waste+retained_in_part_waste+other_actual_exits, with compatible native states and internal makeup/recovery transfers netted once. opening_stored and closing_stored EXCLUDE their separately reported recovered substocks; installed/stored/recovered roles are mutually exclusive by actual lot/charge/role IDs. Factory charge enters factory_charge_actual_receipt_in_period only for actual new entry not already in opening or any other receipt; other_actual_receipts and other_actual_exits exclude every separately enumerated term. Recovery from installed charge is an internal transfer, not a new receipt. Distinguish makeup delivery from installed transfer/release; separate actual mixture/components using sourced composition/fate basis and conversions. Unknown discrepancy is unresolved, not air release/zero. Factory-charge supply owner versus standalone supply coverage remains explicit. | Actual initial/operating stock, transfers/recovery/export/waste/direct species and source coverage | Exclusive physical refrigerant/heat-fluid role audit |  |
| water_receivers | cp_water; cp_fates; cp_environment | Reconcile actual supplied/other-proven water and stocks with separately measured/sourced contained effluent, retained liquid/moisture in actual materials, actual direct water-vapour to air and demonstrated other exits. Each actual mixture/component has native compatible state/density/temperature and independent source. Do not manufacture an outlet or close unknown discrepancy as vapour, sewage or pure-water release. Retained mixed-stream components nonadditive. | Actual water/native stocks/receiver states and independent phase quantities | Water state/receiver audit without residual inference |  |
| actual_outlets_species | cp_fates; cp_environment | Actual receiver_transfer_per_reference=compatible actual independent transfer quantity attributed to same cohort/positiveN; stock/internal transfer not export, consumed-only supply matching return omitted. release_mass=actual measured species mass OR compatible activity*applicable_species_factor, only required composition/fate not already covered by complete factor. Require real substance/particle class, air/water/soil medium and capture/contained exclusions, then actual attribution/N once. No measured material inventory/odour/label/stock residual proves release or zero. | Actual whole/component/exclusive receiver or native species-medium/factor evidence | Actual separate transfer and direct species quantities |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_unit_stay | cp_stays | Actual indivisible unit topology, kitchen/bathroom/service regime and active visitor unit-night delivery/calendar evidence; public example is not target floorplan or no-staff proof. | Unit plans/inventory/service records and actual stay/reversal evidence |
| native_temporal_quality | all protocols | Native units/basis/method/state/source/sample or event time, representative periods and uncertainty; actual DST elapsed time not nominal night hours. Meter calibration/conversion and raw/allocated/perreference scope retained. | Raw calibrated records and complete consumer/calendar coverage |
| lifecycle_provider_coverage | cp_assets; cp_linen; cp_providers | Full-life all-user observed+sourced remainder and real upstream/provider/receiver coverage; actual missing stages integrated with completed status/link/timezone/owner/quantity evidence before complete-chain use. | Complete life and disjoint physical responsibility matrix |
| fate_identity_gaps | cp_fates; cp_environment; cp_refrigerant | Actual species/medium/receiver and independent composition/state quantities required, not residuals. Unknown not assumed zero; generic ranges not mandatory absent range claim, actual quantity/uncertainty/acceptance still needed. | Actual transfer/measurement/applicable factor evidence with explicit unresolved limits |
| complete_electricity | apartment_unit_service | Expand each actual case under `electricity` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_utilities` |
| complete_delivered_heat | apartment_unit_service | Expand each actual case under `delivered_heat` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_utilities` |
| complete_site_fuel | apartment_unit_service | Expand each actual case under `site_fuel` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_utilities` |
| complete_supplied_water | apartment_unit_service | Expand each actual case under `supplied_water` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_cleaning_materials | apartment_unit_service | Expand each actual case under `cleaning_materials` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_supplies` |
| complete_guest_supplies | apartment_unit_service | Expand each actual case under `guest_supplies` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_supplies` |
| complete_refrigerant_supply | apartment_unit_service | Expand each actual case under `refrigerant_supply` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_refrigerant` |
| complete_property_provider | apartment_unit_service | Expand each actual case under `property_provider` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_providers` |
| complete_included_ancillary_service | apartment_unit_service | Expand each actual case under `included_ancillary_service` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_providers` |
| complete_full_life_assets | apartment_unit_service | Expand each actual case under `full_life_assets` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_assets` |
| complete_linen_lifecycle | apartment_unit_service | Expand each actual case under `linen_lifecycle` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_linen` |
| complete_freight | apartment_unit_service | Expand each actual case under `freight` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_freight` |
| complete_direct_resource_uptake | apartment_unit_service | Expand each actual case under `direct_resource_uptake` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_environment` |
| complete_unused_supply_return | apartment_unit_service | Expand each actual case under `unused_supply_return` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_usable_recovered_fluid | apartment_unit_service | Expand each actual case under `usable_recovered_fluid` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_refrigerant` |
| complete_usable_material_export | apartment_unit_service | Expand each actual case under `usable_material_export` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_separate_waste_materials | apartment_unit_service | Expand each actual case under `separate_waste_materials` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_spent_mixed_capture | apartment_unit_service | Expand each actual case under `spent_mixed_capture` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_retired_textile_asset_waste | apartment_unit_service | Expand each actual case under `retired_textile_asset_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_fates` |
| complete_contained_effluent | apartment_unit_service | Expand each actual case under `contained_effluent` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_water` |
| complete_contained_fluid_waste | apartment_unit_service | Expand each actual case under `contained_fluid_waste` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_refrigerant` |
| complete_direct_species_release | apartment_unit_service | Expand each actual case under `direct_species_release` into an independently identified exchange; complete all native quantity, state, source, receiver and coverage evidence from its full capture definition below before final use. Do not interpret a missing UUID or quantity as zero; retained fixed cases exclude their quantities from residual cases. | `cp_environment` |


### Mandatory Inventory Completion Records

The following records are mandatory physical collection and case-expansion requirements, not single inventory exchanges. Every original node, direction, flow type, amount basis, protocol, stock/fate, provider/receiver and source obligation remains binding. References elsewhere to their identifiers refer to these requirements. Before completing a foreground dataset, expand every actual material, service, asset lifecycle, waste stream or substance/medium into separately identified exchanges with native quantities and exclusive coverage. Retained fixed cards cover only their actual supported cases; reconcile all residual actual cases without overlap. Missing identity, occurrence or quantity is unresolved, never zero or permission to omit. Internal paired handoffs and component audit views remain non-additive. Required full-life and provider stages must actually be completed once.

#### electricity

Owner and original flow role: apartment_unit_service / inputs / product

Actual delivered electricity for unit/common operation, kitchen/appliance/hotwater/cooling/ventilation, real cleaning and digital-support site equipment under declared coverage. No kitchen/cooking or standby zero from absence of meal provision or self-access; provider-owned quantities separated without omission.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual accommodation electricity including occupied and standby duties
- Flow property / unit: Energy / kWh
- Amount rule: sum(exclusive actual attributed electricity records)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual interval kWh or supported interval-average power-duration, import registers/factors, duty coverage and complete all-user pool numerator/denominator including necessary vacancy/failed work; no per-night benchmark.

#### delivered_heat

Owner and original flow role: apartment_unit_service / inputs / product

Only real metered/supplied heat or cooling on its actual energy/quality boundary; not gas mass or nameplate HVAC demand. Exclude the same thermal duty from direct fuel/conversion inventory only after supplied complete service coverage is proved.

Residual inventory requirement after the independently identified cases `delivered_heat_delivered_heat`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual externally delivered heating or cooling service
- Flow property / unit: Energy / MJ
- Amount rule: sum(exclusive compatible attributed delivered thermal energy)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need real provider supply meter, heating/cooling identity and quality/interval/native units/conversion and same-pool coverage, no assumed temperature or load from climate/room area.

#### site_fuel

Owner and original flow role: apartment_unit_service / inputs / product

Conditional actual fuel identity/state/composition and net supply for heating/hotwater/backup or service equipment, only actual operating route. Metered gas-volume conversion needs compatible actual density/temperature/pressure/basis; no generic heating fuel. Actual combustion species and any conversion asset scope accounted once.

- Selected flow: Actual fuel supplied for reviewed on-site facility equipment
- Flow property / unit: Mass / kg
- Amount rule: sum(actual compatible attributed net fuel quantity)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual species/formulation and import/storage/consumption records, native mass or supported volume conversion, operating coverage and matched physical shares; not a fuel-specific calorific-value factor substituted for electrical energy.

#### supplied_water

Owner and original flow role: apartment_unit_service / inputs / product

Actual supply to operator-provided guest bathroom/kitchen/fixtures and real cleaning or linen care if performed, including necessary pool standby/leak duties with actual ownership. Inherited linen moisture or measured effluent is not another water input; no automatic supply=sewage.

Residual inventory requirement after the independently identified cases `supplied_water_liquid_tap`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual supplied water for accommodation and direct service tasks
- Flow property / unit: Volume / m3
- Amount rule: sum(exclusive actual attributed supply volume records)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need real meters/provider invoices, native quantities and compatible density-temperature if mass-converted, all-user interval shares/pool and actual resource fate records; no litres per guest or wash allowance.

#### cleaning_materials

Owner and original flow role: apartment_unit_service / inputs / product

Conditional SKU umbrella for actual agents/detergents/wipes/absorbents/filters only when supplied within direct coverage. Real independent formulations/native units expand separately; provider-included chemistry is not a second direct input. NET material excludes containers; no compulsory disinfectant/dose or wash cycle.

Residual inventory requirement after the independently identified cases `cleaning_materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual NET housekeeping laundry and incident consumables
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed gross S OR consumed S-unused_outward_return, then /positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need each actual material identity/composition, NET opening/receipt/closing, EACH/TOTAL count/per-piece mass or density-temperature and matched return scope/source; no detergent or capture rate.

#### guest_supplies

Owner and original flow role: apartment_unit_service / inputs / product

Actual toiletries/tissue/refreshments or other supplied materials with real SKU/native quantity and coverage; do not treat guest self-procured food/personal goods as operator purchase or infer zero actual operator amenities. Actual independent products must expand, reused dishes/appliances go to lifecycle assets.

- Selected flow: Actual NET operator-provided guest supplies
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed gross OR consumed NET guest-supply quantity/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual SKU/pack contents/tare/dispensing stock and supply/return evidence, consumed versus reusable responsibility and included food/amenity scope; no standard kit per guest/night.

#### refrigerant_supply

Owner and original flow role: apartment_unit_service / inputs / product

Actual independently supplied fluid of named composition/state within maintenance operation only. Factory installed charge already attributed in asset lifecycle is not a new receipt each period. Makeup delivery, unused stock and actual installed transfer are distinct from direct release.

- Selected flow: Actual standalone operating refrigerant or heat-fluid supply
- Flow property / unit: Mass / kg
- Amount rule: actual attributed standalone gross supply OR same-scope consumed supply, then /positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need actual fluid SKU/component mass fractions with basis/source, NET supply stocks, factory/standalone burden owner and matched unused-return choice; no generic refrigerant, makeup=leak or unknown=zero.

#### property_provider

Owner and original flow role: apartment_unit_service / inputs / product

Only actual physically defined provider work/equivalent and complete service scope; actual direct staff work is not absent because remote reception. Contract fee/work-hour alone is not Item(s): retain actual native service exchanges and verified physical equivalence before final data package.

- Selected flow: Actual disjoint cleaning remote-support or property-operation package
- Flow property / unit: Count / Item(s)
- Amount rule: sum(exclusive actual compatible attributed physical packages)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need real delivered task/access/support/service unit and physical equivalence, allocation drivers and included materials/utilities/ICT/assets/freight/treatment matrix; no price-to-service conversion.

#### included_ancillary_service

Owner and original flow role: apartment_unit_service / inputs / product

Conditional actual bundled breakfast/parking/gym or other third-party service under accommodation contract, with actual quality/provision responsibility and physical native unit. Mere property label is not actual guest use or a numerical supply default, and a real included obligation must not disappear. Separately purchased guest services outside selected contract remain distinct.

- Selected flow: Actual operator-included external ancillary service
- Flow property / unit: Count / Item(s)
- Amount rule: actual complete attributed included service in verified native equivalent/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need real inclusion/use-or-availability obligation, supplier unit/quantity/quality and all coverage/all-user assignment evidence; no assumed breakfast, pool, gym or money equivalence.

#### full_life_assets

Owner and original flow role: apartment_unit_service / inputs / product

Complete allocated building/site/fit-out/furniture/HVAC/appliances/digital-access and actual supports across all users and life phases, separate from reusable linen card. Actual existing/leased/shared ownership does not erase embodied burden. Real native asset units must expand if no justified Item(s) physical equivalent.

- Selected flow: Actual full-life building fit-out furniture equipment and infrastructure service
- Flow property / unit: Count / Item(s)
- Amount rule: sum(actual complete-life event equivalents*job_driver/lifetime_all_user_driver)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need actual asset inventory/manufacture/maintenance/replacement/EOL, full all-user observed+sourced remainder native drivers and pool idle responsibility, equivalence/uncertainty/sensitivity/coverage; no annualN or maximum capacity lifetime.

#### linen_lifecycle

Owner and original flow role: apartment_unit_service / inputs / product

Actual bedding/towel/textile manufacture, repair/replacement and EOL life equivalents on documented clean-dry textile basis, all real users/cycles and rejected material retained. Not a fresh set each night. Washing/care resources are counted once in actual direct or supplied laundry; dataset already including same care must have explicit overlap allocation, never erase that duty.

- Selected flow: Actual full-life reusable operator linen textile service
- Flow property / unit: Mass / kg
- Amount rule: sum(actual textile lifecycle event quantity*job_driver/lifetime_all_user_driver)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_linen`

Range evidence need: Need actual textile IDs/composition/native clean-dry quantities, circulation/repair/loss and observed+sourced remaining service-life drivers, upstream/care/EOL owner; no number of beds=kg or linen-life default.

#### freight

Owner and original flow role: apartment_unit_service / inputs / product

Actual linen/supply/maintenance/waste or other service movements within owned scope; guest travel is excluded from accommodation service unless specifically reviewed. Cargo includes actual soiled-water/packing/carried supports once, not dry linen alone.

- Selected flow: Actual unique load-leg service supply linen and receiver transport
- Flow property / unit: Mass * Length / t*km
- Amount rule: sum_unique_load_leg(actual_transport_work*THAT_record_share)/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need unique load-leg actual packed payload/EACH-TOTAL/count/noncargo tare, distance/native conversions and record share/empty/provider/receiver coverage, no kilometre or load default.

#### direct_resource_uptake

Owner and original flow role: apartment_unit_service / inputs / elementary

Only a real elementary resource identity/source-medium crossing the declared accommodation operation boundary, if required by actual operated system and balance. Purchased water/fuel remains product supply, not duplicated resource extraction; no atmospheric oxygen or other uptake from arbitrary residual.

- Selected flow: Actual independently evidenced environmental resource uptake
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed measured or justified resource mass/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need actual resource/species/origin medium and direct withdrawal/intake measurement or applicable native derivation with source/coverage; no assumed intake merely because combustion or air exists.

#### unused_supply_return

Owner and original flow role: apartment_unit_service / outputs / product

Gross-input convention only, actual unused usable supply exported from matched stock. Consumed-only input OMIT this exchange. Actual unused standalone refrigerant may return only from its matched supply stock; recovered installed fluid is not that unused return. Retained stock, recovered installed fluid, reusable linen/asset transfer or unrelated original source is not that supply-return deduction.

- Selected flow: Actual matched usable unused standalone supply exported
- Flow property / unit: Mass / kg
- Amount rule: actual matched attributed unused outward material mass/positive_same_scope_N under gross INPUT only
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual same-stock SKU/state/NET mass, source pairing and real usable receiver/transfer evidence, not closing stock or an automatic avoided-production credit.

#### usable_recovered_fluid

Owner and original flow role: apartment_unit_service / outputs / product

Actual independently accepted usable recovered fluid export, separate from retained installed/stored recovery and contained waste. Source may be factory charge already attributed in asset lifecycle; do not net it against unrelated current makeup. Physical transfer does not imply avoided-production credit.

- Selected flow: Actual usable recovered refrigerant or heat-fluid exported
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed usable recovered-fluid export mass/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need actual source-charge/standalone provenance, fluid mixture/components/native quantity and receiver/usability/export evidence, retained-closing and direct/waste exclusions; no export from mere recovery.

#### usable_material_export

Owner and original flow role: apartment_unit_service / outputs / product

Conditional real usable export excluding unused supply return, retained stock and commercial service reference. Actual receiver/state and retained contents required; distinct products expand native exchanges, no automatic reuse/recycling credit.

- Selected flow: Actual separately accepted usable textile material or asset-related export
- Flow property / unit: Mass / kg
- Amount rule: actual independent attributed usable export mass/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual material/textile/asset identity, native net quantity/retained moisture and real receiver acceptance plus lifecycle ownership/exclusivity, no hypothetical recovery fraction.

#### separate_waste_materials

Owner and original flow role: apartment_unit_service / outputs / waste

Conditional umbrella for each actual separately transferred paper/plastic/food/packaging or other real material receiver stream; expand unrelated actual streams separately. Actual guest-origin waste disposal may be service duty without importing production of all guest-bought food. No uniform mixture or mandated recycling.

- Selected flow: Actual independently transferred service and guest-origin solid waste
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed independent material transfer mass/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual origin/stream material/state, net/tare/retained contents, separate receiver classification/transport/treatment and scope, not purchase minus stock as waste or standard guest waste rate.

#### spent_mixed_capture

Owner and original flow role: apartment_unit_service / outputs / waste

Only real mixed spent stream with substrate/retained liquid/debris within measured whole transfer, not separately additive component outlets. Exclude actual separately transferred liquid/material and direct species; different independent receiver streams expand, genuine mixtures remain one stream.

- Selected flow: Actual spent mixed cleanup wipes absorbents or filters
- Flow property / unit: Mass / kg
- Amount rule: actual attributed mixed-capture net transfer mass/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual substrate input/cleanup event and whole mass plus each retained component native quantity/basis/method/state/time/source, receiver and exclusion links; no absorbent ratio or residual pollutant.

#### retired_textile_asset_waste

Owner and original flow role: apartment_unit_service / outputs / waste

Conditional actual textile/furniture/equipment/component waste streams, expanded by actual receiver/material status, with retained fluid/contents nonadditive. Real lifecycle EOL treatment matched once: identical treatment already included in full-life asset/provider coverage is not a second burden, while physical fate and actual missing treatment remain accounted.

- Selected flow: Actual independently discarded textiles equipment or asset-related material
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed independent retired-material transfer mass/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need real retirement/reject decision, original asset/textile/genealogy, whole/component/net-tare state and source/receiver/treatment coverage owner; no uniform lifespan or automatic whole-appliance discard.

#### contained_effluent

Owner and original flow role: apartment_unit_service / outputs / waste

Conditional actual contained/collected liquid receiver stream with real water/solids/chemicals/guest-origin composition. Independently routed sanitary/cleaning/laundry streams expand separately; genuine mixed receiver stream retains nonadditive components. Not direct environmental outfall, pure water or automatic supply-water total.

- Selected flow: Actual independently collected sanitary cleaning or laundry effluent to treatment
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed contained receiver effluent mass/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need actual volume/mass and compatible density-temperature, collection/source/receiver/treatment, retained-liquid exclusions and actual composition evidence; no sewage/COD factor from guest count or cleaning recipe.

#### contained_fluid_waste

Owner and original flow role: apartment_unit_service / outputs / waste

Only independently transferred real contained fluid waste with actual identity/composition/state and receiver/treatment, not direct atmospheric species. Fluid still in a retired appliance/component follows that whole stream and is nonadditive content audit rather than an extra fluid transfer.

- Selected flow: Actual contained spent refrigerant or heat-fluid waste
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed independent contained-fluid waste mass/positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need actual recovery/collection/transfer/source-charge ledger, mixture/components/fate/receiver and whole-asset/retained/direct exclusions, actual treatment ownership once; no default drain or leak.

#### direct_species_release

Owner and original flow role: apartment_unit_service / outputs / elementary

Conditional actual species/particle/medium umbrella, expanded into real independent exchanges. Include actual water vapour to air only when evidenced, and actual combustion/refrigerant/chemical/direct discharge species with native basis. Contained wastewater, captured material, inventory, odour or missing mass is not an elementary release or zero.

Residual inventory requirement after the independently identified cases `direct_species_release_co2_fossil_air`; `direct_species_release_methane_fossil_air`; `direct_species_release_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this residual exchange; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Selected flow: Actual released substance or particle to a demonstrated receiving medium
- Flow property / unit: Mass / kg
- Amount rule: actual compatible attributed measured species OR applicable activity-factor path with only necessary composition/fate, then /positive_same_scope_N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need real substance/particle definition/medium, independent mass or applicable source activity-factor and required composition/fate scope, capture/contained/asset ownership and sampling/time evidence; no unknown=zero or genericVOC mixture.


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| reference_delivery | Reference amount/name/link Count must identify one actual occupied private indivisible apartment-unit-night, after reversal; actual unit plan/bookable topology/visitor eligibility/calendar/room-change/DST evidence. Not booking/guest/available night/points or fixed24h. Unknown topology excluded. |  |
| resources_not_erased | Actual kitchen/appliance/hotwater/common-area/support and housekeeping resources included; no staff/cleaning/guest cooking zero from self-access or no meal sales. Vacant/blocked/cancelled/no-show/open intervals and N0 retain real resource/asset attribution. Necessary pool standby/failed obligations must enter the responsible accommodation pool total before real occupied N division; ledger-only disclosure is not an exclusion. A guest declining cleaning does not automatically remove an actually provided occupied night from N. |  |
| complete_life_and_users | Actual complete all-user building/fit-out/equipment/linen lifecycle, observed+sourced remainder and compatible positive drivers; every provider/carrier/ancillary/tenant and phase responsibility once. No annualN lifetime, point/fee physical driver, default area-only/equalguest split or repeated stock carry manufacture. |  |
| provider_laundry | Actual laundry textile state/service unit and full energy/water/chemicals/effluent/treatment/textile-rental/assets/transport coverage must match direct versus supplied service, native conversions and actual missing-stage completion. Guest washer availability not operator linen evidence. No unpaid/unmetered supplier scope treated zero. |  |
| quantity_return_freight | All operands retain own native units/bases/methods/states/eventtime/sources and converted/allocated scope; NET supplies exclude container tare, gross INPUT+paired OUTPUT OR consumed INPUT OMIT. EACH/TOTAL compatible actual count once, THAT-record freight share inside SUM/N once; already attributed/perreference values unchanged. |  |
| actual_fates | Actual water vapour Elementary to air distinct from contained liquid Waste/actual direct discharge species; whole/mixed/separate receiver memberships nonadditive. Refrigerant factory/standalone/unused/recovered closing/useful export/waste/direct roles explicit, no unrelated supply netting or makeup=emission. Actual receiver transport/treatment one owner; no automatic avoided-production credit. In fluid_roles, stored excludes separately counted recovered substock, factory entry excludes opening/other receipts, and other receipt/exit residual categories exclude every listed term by actual lot/charge/role partition; internal recovery is not external receipt. |  |
| evidence_and_language | Actual quantities/native source/verified concrete identity and property-unit support are needed for final exchanges; unresolved candidate identities and no generic numeric Range alone do not imply zero or invalidate the semantic method. Actually used specifications/external ranges need compatible traceable basis; empirical guardrails need independent comparable observations. ENZH rules/cards/CP raw IDs and official projection must align. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Actual accommodation foreground production per delivered occupied apartment-unit-night, with complete upstream/infrastructure and receiver interfaces |
| downstream_use | Combine disjoint verified actual upstream/provider/lifecycle/receiver services once; not an operating-GHG-only claim or a count of booking/tenure rights |
| allowed_use | Actual single indivisible private self-contained visitor unit, kitchen/bathroom and less-than-daily housekeeping, actual records; same physical method independent of matching tenure label |
| excluded_use | Unknown/lock-off/connecting parent-child/multi-unit combined/shared-bed topology, permanent/care/camp route, unsupported complete-chain claim or imported brand/default HCMI factor |
| required_metadata | property_id; operator_id; unit_id; unit_plan_source; indivisible_non_lockoff_confirmation; private_kitchen_bathroom_scope; bookable_unit_inventory_link; visitor_stay_id; service_night_id; actual_guest_count; actual_arrival_departure; local_night_definition; time_zone; DST_rule_source; room_change_transfer_ids; complimentary_status; cancellation_no_show_reversal_ids; actual_housekeeping_service_regime; actual_cleaning_linen_events; included_ancillary_scope; meter_provider_coverage; reporting_period |
| required_quality_disclosure | Actual quantities/property-unit identities, nightly/stay/guest/available-period distinction, all-user resource/raw-attributed scope/full asset observed-remainder and provider laundry/ancillary/fate coverage; uncertainty and unresolved limits |
| update_trigger | Actual unit topology/service regime/night-calendar/amenities/guest-support/resource/linen/provider/lifecycle/receiver/species or physical allocation evidence changes |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-63112 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/63112 | Actual title and explanatory note: less-than-daily housekeeping for visitors, excluding timeshare and semipermanent boarding in that classification. Title does not prove no staff or no cleaning. |
| unsd-cpc3-63113 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/63113 | Separate timeshare classification, not independent proof of another physical accommodation method. |
| numa-faq | literature | https://pages.numastays.com/faq | Public operational example: PIN access/digital reception, turnover and non-daily cleaning, actual optional extras/property-specific laundry. No universal cleaning frequency, dose, staff absence or outsourced-linen assertion. |
| numa-studio-context | literature | https://numastays.com/de/locations/germany/berlin/mitte/nook/extra-large-studio-with-kitchen | Published indexed manufacturer/operator unit context with private bathroom/kitchen; direct room-page amenities may be unhydrated. No actual target layout, non-lockoff topology, area, capacity or appliance inventory inferred; require actual unit records. |
| wsha-hcmi-context | literature | https://sustainablehospitalityalliance.org/resource/hotel-carbon-measurement-initiative/ | Public operational-carbon context: occupied-room daily metric and on-site energy/refrigerants/applicable outsourced operations. Not full LCA boundary or current full-methodology endorsement; no example/fallback/benchmark or exclusion imported. |
