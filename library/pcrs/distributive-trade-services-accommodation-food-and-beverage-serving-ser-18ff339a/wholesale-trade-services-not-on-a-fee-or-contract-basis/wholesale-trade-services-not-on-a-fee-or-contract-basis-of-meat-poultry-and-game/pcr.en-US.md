---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-meat-poultry-and-game
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account chilled bovine half-carcass wholesale services

## 1. Scope and Applicability

This PCR covers a merchant purchasing and reselling inspected, already slaughtered and primary-chilled bovine half carcasses through an operated hanging cold-room facility and an actual business-buyer acceptance gate. Receipt state/temperature verification, active refrigeration maintaining chilled condition, rail handling, hygiene, appropriate physical overhead and agreed cold-chain logistics form one bounded preservation responsibility. Carcass-body mass includes its declared bone/fat/tissue state; the reference output is the completed commercial wholesale service rather than meat kg.

Exclude live-animal production/trade, slaughter, dressing and primary chilling; cutting, deboning, mincing, cooking, freezing, thawing and a deliberate ageing/maturation programme; fee agency, retail and separately sold storage or transport. Chilled holding does not mean zero natural postmortem change: actual slaughter/chill/receipt/hold/dispatch dates, condition changes and buyer criteria remain recorded. Receipt of incompletely primary-chilled material cannot be silently treated as ordinary maintenance cold load. Actual excluded processing, even if outsourced, needs a reviewed route extension. This service add-on contains no cattle, slaughter, carcass or primary-chilling manufacturing burden, including embodied upstream of lost commodity; a compatible original-gate commodity loss adjustment is required separately once.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-meat-poultry-and-game |
| classification_refs | CPC 3.0:61023 Wholesale trade services, not on a fee or contract basis, of meat, poultry and game; narrower already-primary-chilled bovine hanging halves |
| covered_products | Actual complete own-account B2B consignment service maintaining inspected primary-chilled bovine half carcasses in an operated hanging cold room |
| excluded_products | Live animals; slaughter/primary chilling; offal or boneless cuts as reference; deliberate ageing, cutting/freezing/thawing or other meat processing; agency/retail/storage-only/transport-only |
| representative_product | Own-account chilled bovine half-carcass wholesale services |
| production_route | Supplier inspected and completed-primary-chill release -> merchant receiving/weight/condition check -> active chilled hanging preservation/handling -> actual B2B consignment acceptance |
| market_state | Completed counted service; merchandise remains declared chilled bone-in half-carcass state with actual natural postmortem/condition/time history, not assumed invariant tissue |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account chilled bovine half-carcass wholesale consignment service |
| How much | 1 Item(s) |
| How well | Actual supplier inspection/primary-chill release and merchant maintained chilled-state records meet declared buyer acceptance criteria, with carcass IDs, body mass/tare and actual times/conditions; no universal safety or shelf-life guarantee |
| How long or cycle | Actual receipt-to-accepted-buyer window with slaughter/primary-chill history, all cold/hygiene/reject/idle events, stock/unfinished periods and actual asset lifecycle attribution |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account chilled bovine half-carcass wholesale consignment |
| reference_flow_property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | own_account_ownership_resale; site_room; consignment_id; carcass_source_ids; bovine_species_class; bone_in_half_state; inspection_release; completed_primary_chill_evidence; supplier_original_gate; actual_body_net_mass_and_tare; half_count; slaughter_receipt_hold_dispatch_acceptance_times; actual_core_surface_temperatures_and_units; natural_condition_change; adopted_buyer_criteria; rail_hook_space_and_load_scope; cold_provider_transport_boundaries; commodity_loss_state_quantity_owner_adjustment |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `commercial_count` | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N>0 counts unique final accepted commercial consignments, not half carcasses, invoices, rail movements or kg. One is reference normalization only; retain actual merchandise quantities as comparability qualifiers. |
| `carcass_mass_state` | merchandise and carcass_waste; carcass_waste_atomic_case | Mass | kg with declared state | Weigh actual body mass net of hooks/gambrels/supports/inherited packaging; bone/fat/tissue remain included as declared. No assumed half/live-to-carcass/boneless conversion. Observe drip, evaporation and state change separately; unexplained shrink is not automatic discarded meat or pollutant emission. |
| `thermal_history` | received/maintained carcasses | temperature and time observations | actual temperature and duration units | Retain probe location/core/surface, actual measurement unit, time interval, received state and actual applicable gate/criterion. Historical manual temperatures, durations and densities are not present legal thresholds or fixed process recipes. |
| `actual_native_once` | all flows and driver records | actual exchange/driver property | actual native unit | Preserve Count/Volume/Mass/transport and source conversions, all-user driver units and actual provider completion scope. Normalize an attributed cohort total once; electricity property/group and other native support are independently verified, not inferred from Count or fuel calorific value. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actually inspected, already slaughtered and completed-primary-chilled bone-in bovine halves at supplier release and merchant receipt, with carcass IDs, net state/mass and real time/temperature/condition records |
| starting_condition_role | Usable before-state for bounded downstream cold preservation and own-account merchant service, not live animal or unchilled slaughter output |
| product_classification_scope | Narrower hanging chilled-bovine-half wholesale service within CPC61023 group211 meat |
| recursive_input_rule | Commodity carcasses remain non-exchange inventory audit; do not recursively create their production or the same wholesale input. Supplier/provider/transfer scopes and gates are distinct once-only links. |
| upstream_dataset_requirement | Complete actual electricity, supplies, service, cold/rail asset lifecycle, carrier and waste treatment datasets; separately compatible already-slaughtered/inspected/completed-primary-chilled half-carcass commodity system at the actual supplier gate and quantified once-only loss adjustment |
| disclosure | Source inspected/primary-chilled gate; actual carcass/body/tare/state; time/temperature/natural-change/acceptance; all-user room/rail/cold scope, events/providers/carriers/assets, refrigerant supply/charge/recovery/release, actual waste/drip/water and loss interface owner |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `preserved_before_after` | chilled_wholesale | The usable before-state is documented inspected completed-primary-chilled halves; the maintained after-state is those traceable halves accepted at an actual chilled buyer gate with observed history/condition. Active cold holding and its service inputs are included. Routine natural postmortem change is disclosed; deliberate ageing, first chilling and other excluded processing require a different reviewed route. | fao-meat-cold-preservation |
| `merchandise_addon` | all commodity scope | Exclude all cattle production, slaughter/dressing/primary chilling and full carcass merchandise manufacture from every service exchange, including manufacturing attributable to merchandise losses. Quantify actual compatible state/unit loss and link original commodity-gate upstream adjustment with sole owner/source/existing-coverage check exactly once outside this service before final complete-chain use. |  |
| `physical_cold_scope` | chilled_wholesale | Include actual receiving/rail movement/maintained refrigeration/defrost/idle/hygiene/acceptance and attributable failed/rejected events. Separate supplier primary-chill completion from merchant maintenance load. Providers/carriers include their actual cooling resources once; no relabeling outsourced meat processing as storage. |  |
| `rail_hygiene_context` | hanging handling | Hanging carcass handling and hygiene/cold-chain responsibilities differ from stacked frozen meat or boxed cuts. Actual rails/hooks, spacing/load and adopted room/transport procedures are collected; historical layout, climate, density and cleaning recipe examples are not defaults or a safety certification. | fao-meat-coldstore-operations |
| `fluids_and_assets` | refrigeration and direct scope | Distinguish new supply, installed historical charge, internal recovery/recharge, unused new returns, actual useful recovered export, contained waste and actual species release. Full asset life and provider/current-event scope are reconciled once; no onsite combustion or direct environmental abstraction in this purchased-electricity/water route. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `chilled_wholesale` | Active chilled preservation and hanging half-carcass merchant handover | required | Actual purchase/resale of inspected completed-primary-chilled bovine halves and bounded operated cold maintenance through buyer acceptance | Preservation/stabilization responsibility with usable chilled before/after gates; receiving, cold/rail handling and hygiene events retained | `accepted_service` |

This single true node performs the preservation intervention and merchant handover. It has one service output type; carcass body/condition/stock records are a non-exchange commodity audit rather than a second manufacture output. Every actual conditional fluid/SKU/provider/species/native unit expands only from foreground evidence. Actual residues, commercial returns, rejection, drip and direct releases retain distinct states and owners.

### Process: Active chilled preservation and hanging half-carcass merchant handover (`chilled_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable purchased electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Use source meters, cold-room/door/defrost logs, received temperature and disjoint all-consumer driver evidence before defining comparable energy limits; no historic manual cooling duration, kWh/kg or compressor capacity default.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable purchased sanitation water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual meter/cleaning records and compatible quantity/fate evidence are needed; do not infer carcass losses or sewer volume from water purchases or import historical cleaning schedules.

###### Actual independently recorded synthetic detergent supply (`cleaning_agents_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable mass-measured hygiene agent supply per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual SKU concentration/state/composition, receipt-stock-use-return records and procedure source; historical chlorine concentration or hazard classification is not a present consumption or release factor.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account chilled bovine half-carcass wholesale consignment (`accepted_service`)

A unique completed merchant purchase/resale consignment accepted by a business buyer, consisting of actual already-slaughtered/inspected/primary-chilled bovine halves kept chilled under documented conditions. N is commercial accepted consignment count, not halves, carcasses, kg, invoice or rail moves. Actual natural postmortem changes and elapsed times are disclosed.

- Selected flow: Completed own-account chilled bovine half-carcass wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carcass`

Range evidence need: One is a counted service normalization, not an assumed batch mass or food-safety guarantee. Actual carcass IDs/body mass/tare, slaughter/primary-chill release and receipt/hold/acceptance times, conditions and buyer decision are required for comparability.

##### Waste flows

###### Discarded chilled bovine half-carcass (`carcass_waste_atomic_case`)

Conditional on independently recorded actual Discarded chilled bovine half-carcass. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `carcass_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded chilled bovine half-carcass
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable contained carcass-related waste per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carcass`

Range evidence need: Weigh actual distinct state/material and receiver, retain composition/state evidence where needed for loss adjustment and treatment. No fixed meat loss, bone fraction, drip percentage or stock residual amount.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `commodity_loss_once` | carcass merchandise | Keep every commodity manufacturing burden outside this add-on. Actual irreversible discarded material, observed state/fate and compatible original-gate quantity/basis/unit/source/owner are linked with existing loss coverage to one commodity-system upstream adjustment outside service. Do not treat all carcass weight decrease or aqueous drip kg as equal kg of discarded meat. Unknown loss or moisture/constituent basis is a gap to resolve, not default zero. |  |
| `cold_shared_driver` | room loads and all consumers | Use actual causal all-user/event/period evidence, evaluating hook/occupied-space-time against thermal/mass or other justified drivers and documenting compatibility. Include actual idle, door, defrost, cleaning and rejection burden; a simple mass proportion or equal consignment split is not presumed. Retain unfinished-order resources in linked open cohorts until actual acceptance/rejection without inventing N. |  |
| `asset_full_life` | shared_assets | asset_equivalent=(job_driver/life_driver)/N, with compatible drivers and one matching complete lifecycle across all consumers/periods. Include real manufacture/initial charge/maintenance/replacements/retirement/end-of-life, observed life/history or source-backed remainder and uncertainty/sensitivity/update. Direct/provider/current-event overlaps are removed from the corresponding asset coverage only after those same burdens are accounted once elsewhere. |  |
| `native_unused_return` | new supplies | S=opening_supply+net_receipts-closing_supply. Choose gross supply input S/N and separately represent the actual matching native-unit unused outward-return output, OR consumed-only input (S-usable_outward_return)/N with that return exchange omitted and no extra deduction. Recovered closing supply belongs to closing. Unused new and installed historical refrigerant recovery never merge; nonreturned waste/loss supply burden remains. |  |
| `recovery_and_outlets` | all actual outlets | Commercial carcass returns are commodity movements, not negative service or automatic credits. Useful recovered installed fluid is a real physical outlet only when accepted outward; retained recovery stays stock. Spent fluid is a Waste outlet. Actual drip, carcass discard, mixed wastewater and direct species are disjoint state views; no avoided production credit or duplicate whole-fluid/species outflow. |  |

The separately linked original-gate carcass commodity dataset must cover cattle production, slaughter/dressing and completed primary chilling through actual supplier release. A live-cattle farm dataset alone does not fill those missing upstream stages. Add compatible stages exactly once there, never silently omit them or add them inside this service.

For recovered installed fluid, identify whether its origin is initial factory charge already owned by an asset lifecycle dataset or a particular standalone operating supply. An actual useful recovered export does not reduce unrelated current make-up supply or create a negative input. Consumed-only deduction is permitted solely for an evidenced matching same-scope standalone supply-stock unused return; otherwise retain the initial-charge burden owner and record actual recovered Product transfer without automatic credit.

Trace the actual supplier-original-gate input and quantity assigned to the accepted consignment/cohort, including its evidenced ordinary moisture/state-change share. Do not set upstream commodity demand only from final dispatch body mass plus discarded mass: that would omit the burden of water originally present in the produced carcass. Use compatible original-gate state/unit and actual allocation/conversion evidence, with returns, closing stock and other exits allocated exclusively and existing loss coverage checked. This assignment does not infer edible-meat loss or pollutant species from a mass difference.


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_carcass` | chilled_wholesale | commercial reference and non-exchange chilled carcass stock/loss/state | carcass_acceptance_stock_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; ownership_resale_record; species_class; slaughter_date_time; primary_chill_release_id; primary_chill_completion_evidence; inspection_release_id; inspection_authority; applicable_acceptance_criteria; supplier_original_gate; receipt_date_time; receipt_core_temperature; receipt_surface_temperature; probe_location; temperature_unit; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; product_state; postmortem_history; deliberate_ageing_status; actual_condition_changes; core_surface_measurement_method; gross_weight; hook_gambrel_tare; other_support_tare; inherited_pack_tare; carcass_body_net_mass; mass_unit; opening_quantity; receipts; closing_quantity; recovered_closing; internal_transfer_id; buyer_dispatch; supplier_return; buyer_return; rejected_quantity; half_count; bone_in_state; actual_drip_quantity; drip_unit; drip_state; measured_evaporation; evaporation_unit; shrink_difference; discrepancy_investigation; actual_waste_mass; waste_state; loss_fate; loss_composition; loss_composition_basis; loss_composition_source; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_input_state; source_gate_quantity_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_source; assigned_moisture_state_change_share; moisture_state_share_unit; moisture_state_share_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Reconcile actual ownership and supplier inspected/primary-chilled release with each received half ID, carcass-body net weight after measured hooks/supports/pack tare, times and actual core/surface condition history. Count N final unique buyer-accepted commercial consignments, never halves or repeated documents. Track natural postmortem state, actual return/reject/drip/evaporation/unknown shrink separately; investigate differences. Unfinished resources remain linked open cohorts. Actual loss with compatible original-gate state/unit/source and one owner must be adjusted in the separate commodity system once. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); actual carcass-body kg and state-specific loss units | each receipt, temperature/condition observation, movement, acceptance, return and stocktake | All actual supplier release/receipt-to-buyer periods plus prior/later stocks, failed/repeated attempts and unfinished carry | One named merchant cold-room responsibility and actual commercial interfaces | per reference flow | Actual inspection/chill-release and buyer decisions, calibrated weights/tare/probes and investigated state/loss records |
| `cp_supplies` | chilled_wholesale | new supplies and unused current-input outward returns | supply_stock_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; sku; substance_material_identity; composition; composition_basis; composition_source; state; native_property; native_unit; opening_supply; gross_receipts; tare_receipts; net_receipts; closing_supply; recovered_closing_supply; actual_charge_to_circuit; circuit_event_id; usable_outward_return; return_receiver; return_transfer_id; used_quantity; waste_quantity; uncontained_loss; selected_return_view; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; temperature; temperature_unit; piece_mass; piece_mass_unit; piece_mass_source; provider_asset_inclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual native stock/delivery/gross-tare records by SKU and state, distinguishing unused supply from installed charge or historical recovery. S=opening_supply+net_receipts-closing_supply. Either gross input S/N and separately represented matching actual outward return, or consumed-only (S-usable_outward_return)/N with return exchange omitted/no further deduction. Recovered closing supply is already closing. Nonreturned wastes/losses retain supply burdens; provider/asset included events are not repeated. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | actual supply native unit, kg or Item(s) as appropriate | each supply, charge, use, return and stocktake | All selected operation and linked supply-stock periods | Same cold-preservation wholesale node and actual responsibility boundary | per reference flow | SKU/state/unit and input-return identity, calibrated quantity and source-backed conversion evidence |
| `cp_utilities` | chilled_wholesale | metered cold maintenance and hygiene water | cold_utility_meter_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; source_id; meter_id; meter_register_role; reading_start; reading_end; meter_factor; metered_quantity; native_unit; conversion_factor; conversion_unit; conversion_source; incoming_temperature_load; all_room_consumers; hook_occupancy; hook_occupancy_unit; rail_length; rail_length_unit; occupied_space; space_unit; occupancy_start; occupancy_end; occupancy_duration; occupancy_duration_unit; mass_driver; mass_driver_unit; thermal_driver; thermal_driver_unit; selected_driver; driver_unit; attribution_share; driver_rationale; baseline_idle_load; defrost_event; door_event; fan_event; cleaning_event; supplied_water; recirculated_water; cleaning_outflow; carcass_drip; condensate; defrost_water; measured_evaporation; fate_overlap_check; provider_inclusion; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual source import meters and disjoint cold-room events/periods, including arrival maintenance loads, door/defrost/fan/hygiene and baseline idle. Justify hook/space-time or appropriate thermal/mass driver with all actual users and compatible units; a kg ratio is not automatic. Attribute once; keep purchased water, drip/condensate/defrost/rinse and actual outlets distinct rather than infer losses or pollution. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh; m3; actual driver units | each metering interval and room/door/defrost/cleaning event | All cold-maintenance, loading, empty/idle and hygiene periods attributed to selected cohorts | Named room/source and every actual disjoint consumer | per reference flow | Calibrated meters/logs, complete all-consumer driver/rationale and non-overlapping water fates |
| `cp_provider` | chilled_wholesale | completed actual third-party physical packages | physical_service_completion | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; provider_id; package_id; physical_result; acceptance_id; completion_date_time; quantity; native_property; native_unit; upstream_dataset; upstream_unit; included_materials; included_utilities; included_assets; included_refrigerant; included_releases; included_transport; included_wastes; included_treatment; missing_scope; direct_overlap; uncertainty | Obtain actual physically completed inspection/hygiene/maintenance result and provider native quantity with complete upstream scope. Count only a genuine native-Count package; price/hours cannot be converted. Expand other actual native units. Split direct/provider refrigerant, transport and waste treatment scope once; excluded processing remains outside ordinary wholesale even if contracted. | actual provider native unit; Count only for package-native completion | each actual completed package and repeat event | All selected-cohort actual service events | Provider, supplier inspection and merchant responsibility split | per reference flow | Signed completion/results, matching native unit and coverage/no-overlap matrix |
| `cp_assets` | chilled_wholesale | shared cold-room, rails, hooks and refrigeration full-life burden | cold_asset_lifecycle_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; asset_id; asset_identity; full_lifecycle_dataset; lifecycle_unit; manufacture_scope; initial_charge_scope; maintenance_scope; replacement_events; replacement_scope; retirement_event; eol_scope; all_consumers; all_periods; job_driver; driver_unit; life_driver; life_driver_unit; observed_life; observed_history; evidenced_remainder; remainder_source; lifecycle_sources; current_direct_event_scope; provider_overlap; selected_view; uncertainty; sensitivity; update_trigger | Build actual asset inventory and complete manufacture/initial charge/maintenance/replacement/retirement/end-of-life coverage. Use compatible observed full-life driver or actual history plus sourced remaining use, covering all rooms/contracts/periods and all consumers. Choose one matching whole-asset-equivalent Count view; current separately inventoried supplies/releases/events are excluded from the corresponding asset maintenance portion to avoid overlap, not omitted overall. | asset-equivalent Item(s); actual compatible full-life driver unit | each use, maintenance, replacement and retirement event | Complete manufacture through every consuming period, replacement and end-of-life; selected consignment window separately linked | All actual consumers of named facility, plant and rail/hook assets | per reference flow | Full lifecycle sources, consistent all-user drivers, remainder and uncertainty/sensitivity evidence |
| `cp_freight` | chilled_wholesale | actual carcass carrier legs and cold-chain scope | chilled_shipment_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; shipment_id; leg_id; carrier; responsibility; carcass_net_load; load_unit; support_pack_load; total_payload; payload_kg; payload_conversion; payload_conversion_source; distance; distance_unit; distance_km; distance_conversion; distance_source; attribution_share; all_loads; empty_return; empty_service_coverage; carrier_refrigeration_scope; carrier_refrigerant_scope; carrier_asset_scope; source_commodity_inclusion; other_provider_inclusion; load_time; unload_time; carrier_condition_evidence; uncertainty | Reconcile actual transported payload, support/pack scope and true legs with carrier records, temperatures/handling gate and empty-return/full vehicle refrigeration boundary. No liveweight/boneless conversion or assumed kg per half; do not add supplier/provider included freight or vehicle refrigerant a second time. | kg*km | each actual outbound/inbound/return leg | All selected merchant-responsibility transport including attributable rejected returns | Merchant-carrier-supplier/provider interfaces | per reference flow | Weighbills, actual route/conversion and complete empty/cold-carrier scope |
| `cp_refrigeration` | chilled_wholesale | installed fluid charge, recovery and useful export audit | circuit_charge_recovery_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; circuit_id; fluid_identity; fluid_state; initial_factory_charge_or_operating_supply; initial_charge_dataset_id; initial_charge_burden_owner; standalone_supply_event_id; matched_supply_scope; supply_match_evidence; composition; composition_basis; composition_source; installed_charge_opening; installed_charge_closing; charge_unit; supply_charge_event; provider_charge_event; actual_charged_quantity; recovered_removed_quantity; recovery_cylinder_gross; recovery_cylinder_tare; recovery_net_quantity; recovery_retained_stock; recovery_recharged; useful_export_quantity; useful_receiver; useful_acceptance_id; waste_transfer_quantity; waste_receiver; waste_transfer_id; waste_material_state; waste_classification; waste_treatment_route; waste_treatment_scope; measured_whole_fluid_release; unaccounted_charge_difference; discrepancy_investigation; provider_asset_coverage; calibration; uncertainty | Use actual circuit maintenance/charge/recovery records and calibrated cylinder weights; distinguish new supply, historical installed fluid, recovered retained/recharged stock, actual useful export, unusable waste and measured release. Internal recovery/recharge is not external purchase or export. Investigate any charge difference; no top-up=emission assumption, no automatic negative purchase or avoided-product credit. Actual species quantification is independently documented in cp_environment. | kg of actual whole fluid with composition basis | each actual charge, maintenance, recovery, export/waste and opening/closing event | Selected events linked to circuit service periods and initial/historical stock | Named actual circuit and provider/merchant responsibility split | per reference flow | Calibrated cylinder/circuit records, destination acceptance, full fate/coverage and unresolved-difference evidence |
| `cp_outlets` | chilled_wholesale | contained hygiene/maintenance wastes and wastewater | waste_stream_receiver_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; stream_id; origin_event; material_identity; composition; composition_basis; composition_source; physical_state; native_property; native_unit; gross_quantity; tare; net_quantity; measured_volume; density; density_unit; density_temperature; density_temperature_unit; density_source; carcass_drip_inclusion; condensate_inclusion; defrost_inclusion; rinse_inclusion; stream_overlap_check; pollution_load; pollution_unit; load_method; load_source; receiver; transfer_id; waste_classification; treatment_route; treatment_scope; provider_inclusion; uncertainty | Measure actual disjoint waste streams and receiving treatment. Keep unusable recovered fluid, spent supplies, carcass waste/drip and cleaning aqueous mixtures by real state; wastewater composition characterizes the same fluid rather than an extra species exchange. Direct environmental outfall needs a separately reviewed Elementary exchange if actual, not a contained wastewater label. | actual native outlet unit, kg or m3 as appropriate | each actual waste/outflow transfer and sampling event | Every selected attributed sanitation, maintenance and discard period | Named site outlets and actual treatment receiving boundary | per reference flow | Weighed/metered quantities, stream characterization and receiver/treatment/no-overlap evidence |
| `cp_environment` | chilled_wholesale | actual direct species with independent release evidence | species_release_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; circuit_event_id; source_event; substance_identity; receiving_medium; particle_basis; measured_mass; mass_unit; activity; activity_unit; species_factor; factor_unit; factor_scope; factor_source; factor_complete; measured_whole_fluid_release; whole_release_unit; composition; composition_basis; composition_source; fate; fate_basis; fate_source; captured_or_contained_quantity; recovered_stock_quantity; conversion_factor; conversion_unit; conversion_source; temperature; temperature_unit; pressure; pressure_unit; provider_asset_inclusion; calibration; detection_limit; uncertainty | Identify actual emitted species/medium and use measured species mass, valid matched activity factor or actual measured whole-fluid release with compatible composition/fate as exclusive paths. Separate captured waste/recovered stock and nonadditive whole-fluid view; complete factor already contains its composition/fate. Neither refrigerant top-up, carcass mass difference, odour nor product hazard supplies a release factor. | kg by actual species/medium | each actual release and linked observation interval | All actual attributed direct sources/events/periods | Named actual merchant source, avoiding provider/carrier/asset repeated releases | per reference flow | Actual species/medium and measured/factor/composition/fate source compatibility with uncertainty/detection limits |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_consignment` | accepted_service | N=count unique final accepted_consignment_ids at reference_gate_id; accepted_service=1 Item(s). | cp_carcass | One actual complete commercial service with carcass/state/time/condition qualifiers |  |
| `carcass_stock` | merchandise audit; carcass_waste; carcass_waste_atomic_case | carcass_body_net_mass=gross_weight-hook_gambrel_tare-other_support_tare-inherited_pack_tare. Reconcile matching-state opening/receipts, buyer dispatch, actual external returns, closing including recovered closing, and observed fates; pair internal transfers. assigned_source_gate_quantity=compatible evidenced allocation of actual source_gate_input_quantity to the consignment/cohort, including assigned_moisture_state_change_share and excluding quantities assigned exclusively to returns, closing stock or other exits. commodity_source_gate_demand=assigned_source_gate_quantity/N in the separately linked original-gate commodity system, with actual source, state, unit, allocation/conversion and existing-loss coverage; never substitute final body mass plus discarded mass for that source-gate demand. actual_waste_mass/N is the actual contained carcass-waste quantity. Investigate shrink_difference with actual drip/evaporation/state evidence; no residual loss or emission inference. | cp_carcass; N | Non-exchange carcass stock/loss interface and actual state-specific contained outlet per reference flow |  |
| `new_supply_stock` | refrigerant_supply; cleaning_agents; added_covers; unused_count_returns; unused_mass_returns; cleaning_agents_synthetic_detergent | net_receipts=gross_receipts-tare_receipts; S=opening_supply+net_receipts-closing_supply; gross_input=S/N OR consumed_input=(S-usable_outward_return)/N under one chosen native-SKU convention. installed historical charge and recovered fluid are separate from this new-supply inventory. | cp_supplies; N | Actual new native supply/unused return per reference flow, without repeated return deduction |  |
| `cold_utilities` | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | metered_quantity=(reading_end-reading_start)*meter_factor on an appropriate source import register or actual direct compatible source measurement; utility_quantity=sum(metered_quantity*conversion_factor*attribution_share)/N, using actual complete all-user drivers/events/periods including idle. Preserve disjoint water-source/fate audit. | cp_utilities; N | Actual electrical or water import per reference flow |  |
| `physical_provider` | provider_packages | provider_quantity=quantity/N for an actual matching native-Count complete physical package; other native provider quantities require actual expansion. Add missing_scope once, remove direct_overlap with supplies/assets/carrier/treatment. | cp_provider; N | Lifecycle-complete actual provider service per reference flow |  |
| `asset_equivalent` | shared_assets | asset_equivalent=(job_driver/life_driver)/N with compatible full-life driver units and one matching whole-lifecycle asset inventory. | cp_assets; N | Actual full-lifecycle asset-equivalent Item(s) per reference flow |  |
| `freight_work` | freight | freight_work=sum(payload_kg*distance_km*attribution_share)/N. Retain actual load/support scope and conversion source; empty/refrigeration carrier coverage independent, not assumed empty loaded km. | cp_freight; N | Actual kg*km per reference flow with complete cold/empty carrier boundary |  |
| `refrigerant_fates` | recovered_refrigerant; unusable_refrigerant; refrigerant audit | recovery_net_quantity=recovery_cylinder_gross-recovery_cylinder_tare; useful_export=useful_export_quantity/N only when actual outward receiver acceptance exists; unusable_refrigerant=waste_transfer_quantity/N only for the separate actual unusable Waste transfer to an identified treatment. Reconcile installed opening/closing, real charging, actual recovery retained/recharged/exported/waste and independently established release with uncertainty. Investigate unaccounted_charge_difference; neither supply nor top-up is an automatic leak estimate. | cp_refrigeration; cp_supplies; cp_environment; N | Actual circuit/fate audit and useful recovered-fluid export per reference flow |  |
| `contained_outlets` | other_wastes; wastewater; unused_count_returns; unused_mass_returns | outlet_quantity=net_quantity/N for an actual distinct spent material/water stream in its own native unit; unused returns use usable_outward_return/N by matched supply unit. Pair actual receiver/treatment once; no added species view of contained waste. | cp_outlets; cp_supplies; N | Actual disjoint contained outlet per reference flow |  |
| `species_mass` | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_fluid_release*composition*fate/N after compatible basis/unit conversion, choose one valid path. factor_complete forbids multiplying composition/fate again; whole-fluid and species are nonadditive. | cp_environment; cp_refrigeration; N | Actual released species mass and receiving medium per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `chilled_gate` | received and accepted halves | Actual supplier inspection/completed-primary-chill evidence, carcass identities, calibrated temperatures/weights/tare, actual adopted criteria, natural condition/time history and buyer acceptance are required. No historical manual condition stands for present site compliance or shelf life. | cp_carcass source/condition and actual buyer records |
| `loss_state` | carcass/drip/water and commodity link | Distinguish carcass-body state, bone/fat/tissue, measured drips/evaporation, contained waste, commercial return and unknown shrink. Original-gate upstream loss adjustment uses actual compatible state/unit/source and one owner with existing-coverage check; unresolved composition cannot be silently equated to meat. | State-resolved stock/fate and separate commodity-loss evidence |
| `complete_resources` | coldroom/provider/assets/periods | Cover all actual consumers, idle/hygiene/door/defrost/return events, provider physical scope, native quantities and full asset lifecycle including direct-event overlaps, initial charge/recovery/replacement/end-of-life and evidenced remainder. | Scope matrices, meters/driver rationale, physical provider results and asset/circuit records |
| `identity_and_ranges` | actual expanded exchanges | Verify concrete product/waste/species/property/unit support before final data; actual native umbrellas remain expansion requirements. Future empirical limits need independent comparable evidence and applicability; no thresholds, leaks or loss factors invented here. | Concrete detail/support evidence and independent ranges |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| refrigerant_supply | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `refrigerant_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| cleaning_water | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| cleaning_agents | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_agents` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_covers | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_covers` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_packages | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_packages` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| shared_assets | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_count_returns | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_count_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| unused_mass_returns | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_mass_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| recovered_refrigerant | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `recovered_refrigerant` under `cp_refrigeration`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigeration`; actual source-linked native records |
| carcass_waste | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `carcass_waste` under `cp_carcass`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `carcass_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_carcass`; actual source-linked native records |
| unusable_refrigerant | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unusable_refrigerant` under `cp_refrigeration`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigeration`; actual source-linked native records |
| other_wastes | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| wastewater | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `wastewater` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species | chilled_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Measure actual refrigeration compressors, fans, defrost, rail handling, lighting and sanitation-related electric use, including allocated idle periods. The site uses purchased electricity, not onsite combustion. Maintenance of received chilled carcasses is distinct from completing unperformed primary chilling; record actual receipt/holding thermal loads and excursions.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased electrical energy for carcass cold holding
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable purchased electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Use source meters, cold-room/door/defrost logs, received temperature and disjoint all-consumer driver evidence before defining comparable energy limits; no historic manual cooling duration, kWh/kg or compressor capacity default.

#### refrigerant_supply

Actual externally supplied refrigerant by complete substance/mixture identity, composition and state, recorded separately from the installed-circuit charge and historical recovered fluid. Supply/imports and top-ups do not equal atmospheric emissions. Include actual maintenance supply once against provider/asset scope.

- Identity requirement: Actual new refrigerant fluid supplied for the cold-room circuit
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable new refrigerant supply per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual fluid SKU, cylinder gross/tare/net, stock, charging records, unused returns and circuit/provider coverage with composition basis/source; no assumed fluid type, charge size, leak rate or top-up emission equality.

#### cleaning_water

Only actual externally purchased water for room/rail/equipment hygiene, with source, treatment and cleaning-period attribution; no direct environmental abstraction in this route. Keep product drip, defrost/condensate, supplied rinsewater, recirculation and actual wastewater streams separately identified.

Residual inventory requirement after the independently identified cases `cleaning_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased carcass-room and rail sanitation water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable purchased sanitation water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual meter/cleaning records and compatible quantity/fate evidence are needed; do not infer carcass losses or sewer volume from water purchases or import historical cleaning schedules.

#### cleaning_agents

Record actual named/formulated sanitation products and quantities on equipment or room surfaces under the operator adopted procedure, with receiver/fate. No mandatory disinfectant chemistry, recipe, dilution or dose is taken from historical guidance. Direct meat decontamination treatment is outside this route.

Residual inventory requirement after the independently identified cases `cleaning_agents_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual mass-measured room and rail hygiene agents
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable mass-measured hygiene agent supply per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual SKU concentration/state/composition, receipt-stock-use-return records and procedure source; historical chlorine concentration or hazard classification is not a present consumption or release factor.

#### added_covers

Only actual countable new protective covers or identification consumables applied within wholesale, expanded by SKU; do not impose packaging on hanging chilled halves. Inherited wraps stay in the commodity audit. Hooks, gambrels, rails and reusable supports are life-attributed assets, not fresh covers per shipment.

- Identity requirement: Actual countable added carcass covers, seals or labels
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable new countable covers and labels per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Use actual piece/stock records and product identity; separate any actual independent measured mass view without adding it to the same physical count. No universal package-per-half or cover mass.

#### provider_packages

Actual completed physically defined native-Count packages with result and scope; actual other-native provider quantities require exchange expansion and support. Cover all provider inputs/assets/wastes/transport once, separate supplier inspection evidence from an automatically purchased new service. Outsourcing excluded processing does not make it part of ordinary storage.

- Identity requirement: Completed external physical hygiene, inspection or maintenance packages
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable completed provider packages per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Require package ID, physical result, actual native unit, completed quantity and upstream inclusion/overlap matrix; price, staff hours or a food certificate label do not establish one inventory package.

#### shared_assets

Actual cold-room fabric, refrigeration equipment, rails/hooks/gambrels, scales and reusable handling supports are represented by matching complete lifecycle fractions. Full scope includes manufacture, initial charge where applicable, maintenance/replacements/retirement/end-of-life with direct current-event resources identified once.

- Identity requirement: Full-lifecycle cold-room, refrigeration and hanging-rail asset equivalents
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable asset-equivalent quantity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Evidence must cover all consumers/periods and observed life or history plus sourced remainder, maintenance/replacement/end-of-life. Evaluate actual hook/space-time or justified thermal/mass driver compatibility; no default asset life, density, kg per hook or equal consignment split.

#### freight

Actual responsibility-bounded carrier legs not already in supplier commodity or provider datasets. Payload is weighed transported carcass-body mass with applicable packaging/transport load scope and separately known support tare, not boneless edible meat mass or live weight. Refrigerated vehicle energy/assets/refrigerant/empty legs require full carrier coverage once.

- Identity requirement: Actual chilled half-carcass freight and return transport work
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributable chilled freight work per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Require real leg distance, net load/state, conversion, load attribution and empty/refrigeration scope; no standard carcass weight, journey or truck cooling factor.

#### unused_count_returns

Usable unused new covers/labels or other actual Count-native consumables physically returned to a named receiver, matched to the same input SKU and state. Stock carried or recovered into closing is not an outward return. Commodity returns are separate merchandise records.

- Identity requirement: Actual unused countable current-operation consumable returns
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable unused counted consumable returns per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual input-return SKU/count/state and outward transfer evidence must select gross-input/separate-return or consumed-only/no-return-exchange convention; no duplicate return deduction or automatic avoided-product credit.

#### unused_mass_returns

Only actual unused new current supply returned outward by identical fluid/chemical SKU and state with matched mass basis, separate from circuit-recovered historical refrigerant and from spent or contaminated waste. Do not net unrelated chemicals or fluid species.

- Identity requirement: Actual unused new mass-measured refrigerant or hygiene supply returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable unused current mass-measured supply returns per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require measured net return, actual receiver/transfer and exact input compatibility; closing inventory is not return, recovered circuit fluid cannot be an unused-new-supply return by assumption.

#### recovered_refrigerant

Actual circuit-recovered fluid removed and physically accepted for reuse/reclamation as a useful material at the declared handover; maintain origin, composition, state and receiver. Recovered fluid retained on site remains stock/charge, not an export. Unusable fluid for treatment belongs to its Waste state.

- Identity requirement: Actual useful recovered installed refrigerant exported for reuse
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable useful circuit-recovered refrigerant exports per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigeration`

Range evidence need: Use actual recovery cylinder gross/tare/net and destination acceptance plus circuit history; do not infer recovery from top-up, grant negative new-purchase quantities or avoided virgin refrigerant credits.

#### carcass_waste

Only physically collected actual rejected carcass material or separately identified drips sent to a documented receiver, with their own state/quantity and fate. Commercially acceptable supplier/buyer returns are merchandise movements. Drip is not all edible meat, and evaporation or unexplained weigh difference is not automatically this waste. Diluted rinsewater belongs to a disjoint wastewater stream.

- Identity requirement: Actual contained rejected carcass material and separately collected drips
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable contained carcass-related waste per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_carcass`

Range evidence need: Weigh actual distinct state/material and receiver, retain composition/state evidence where needed for loss adjustment and treatment. No fixed meat loss, bone fraction, drip percentage or stock residual amount.

#### unusable_refrigerant

Actual recovered installed-circuit fluid that is unusable and sent as a contained Waste to an identified receiving treatment, by measured mass, composition and state. It is neither useful Product recovery nor retained closing stock, ordinary cleaning wastewater, unused new supply return or an air release. Cover receiving treatment and provider responsibility once.

- Identity requirement: Actual contained unusable recovered refrigerant for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable unusable recovered refrigerant waste per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigeration`

Range evidence need: Actual recovery and waste cylinder gross/tare/net, chemical composition/state, outward transfer, receiver and treatment evidence are required; do not infer unusable waste from top-up or recoverable charge differences.

#### other_wastes

Actual spent covers, cleaning residues and absorbents expanded by material/composition and receiving treatment. Keep each physical stream distinct from unused supply, dedicated useful or unusable recovered refrigerant cards and carcass waste; actual hazards and treatment are evidenced.

- Identity requirement: Actual contained spent packaging and hygiene materials
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable other contained waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Use real weigh/tare/state/receiver and treatment evidence; no assumed hazardous status, disposal rate or repeated carcass/refrigerant/wastewater stream.

#### wastewater

Actual measured aqueous cleaning outflow to an identified treatment receiver; identify any mixed carcass drip, defrost or condensate source before combining. Separately collected drips and recirculated water are not added again. Direct environmental outfall is not this contained Waste state and needs explicit reviewed Elementary expansion if actual.

- Identity requirement: Actual contained room-cleaning and associated aqueous wastewater to treatment
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable contained wastewater volume per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Use actual volume, density/state if converted, measured contaminant characteristics and receiver boundary; do not use potable-water purchase, carcass shrink or condensate as automatic pollution load.

#### direct_species

Actual released species and receiving medium, including refrigerant species only with appropriate evidence. Whole-fluid loss/composition/fate, actual circuit charge/recovery and other direct events remain auditable separately from supply; top-up is not a direct release quantity. Ordinary postmortem change, meat drip, odour or disinfectant hazard does not imply a named atmospheric pollutant.

- Identity requirement: Actual individually identified cold-room direct substance releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable direct species mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Use measured species mass, a valid matched activity-specific factor or measured whole-fluid release with compatible composition/fate. Record molecular/species and medium, whole-fluid nonadditivity and factor completeness; no automatic CO2, refrigerant or disinfectant emission factor.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `preservation_gate_check` | accepted_service | N>0 unique accepted merchant consignments, actual inspected completed-primary-chilled before-state and maintained chilled buyer gate, real carcass net quantities/tare/IDs and full temperature/time/condition records. Half count/kg/invoice/rail transfer is not service reference. |  |
| `excluded_processing` | all scope | Check no disguised primary-chill completion, cutting/deboning/freezing/thawing/deliberate ageing or other processing. Natural postmortem change is not asserted absent; actual history and acceptance criteria govern. Outsourced processing needs separate route review. |  |
| `carcass_and_loss` | merchandise and outlets | Reconcile actual body/tare/state and matched stocks/returns/closing/internal transfers, real drips/evaporation/discard and unresolved shrink. Confirm compatible original-gate loss adjustment occurs once outside service; no default loss zero or shrink=discarded meat/pollutant. |  |
| `cold_and_lifecycle` | all consumers/periods/providers/assets | Validate real hook/space-time or justified thermal/mass driver and units, full consumers/idle/cleaning coverage and one owner for direct/provider/transport/treatment. Asset complete manufacture/charge/maintenance/replacement/end-of-life with remainder/source uncertainty; no duplicate normalization or new-supply return subtraction. |  |
| `refrigerant_and_water` | all fluids and direct_species | Separate new supplies, installed charge, unused new returns, recovered retained/recharged/useful-exported fluid, dedicated unusable recovered refrigerant Waste and other actual spent waste and actual releases. Top-up is not emission. Distinguish contained cleaning effluent, drip/condensate/defrost and direct outfall; species/medium/factor/composition/fate independently evidenced and nonadditive. |  |
| `bilingual_projection` | all cards/rules/protocols | Raw bilingual six reference fields, actual output card link/name, row properties/units/evidence/protocol raw operands, source URLs and ordered rules must align with generated canonical projection. Automated consistency does not verify actual food quality or final exchange identity. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset after complete actual foreground collection and concrete exchange verification |
| downstream_use | Cold-preservation own-account wholesale-service add-on linked once to a separate original-gate carcass commodity system with compatible measured loss adjustment; not a whole delivered beef footprint. |
| allowed_use | The declared inspected primary-chilled bovine half-carcass merchant room/rail/consignment and actual accepted buyer gate, with real body quantities/tare, conditions/times and physical resource scope. |
| excluded_use | Live cattle or slaughter/primary-chilling manufacture; boneless cuts/offal as reference; deliberate ageing/cutting/freezing/thawing; fee agency/retail/standalone warehousing; safety/shelf-life guarantee or untracked loss interface. |
| required_metadata | Merchant ownership/site/room; carcass/source/consignment/cohort/period; inspection and completed-primary-chill release; gross/tare/body mass/bone-in state and halves; actual slaughter/receipt/hold/dispatch/acceptance times and core/surface conditions; real all-user cold/rail/provider/carrier/asset/refrigerant/water/waste scope; original-gate loss quantity/state/unit/source/sole owner and existing coverage |
| required_quality_disclosure | Probe/scale calibration and actual accepted criteria; natural condition change, excursions and unknown shrink investigation; all-consumer physical driver rationale and full asset/provider/period coverage; actual circuit supply/charge/recovery/fate and species evidence; actual effluent/drip/treatment and compatible commodity-loss link; identity and numerical range gaps |
| update_trigger | Changed received carcass/chill state, buyer criterion/condition or product history; added processing/ageing; changed room/cooling/circuit/rail/asset life/provider/carrier/water hygiene route; observed loss/excursion/release evidence or material source change |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| fao-meat-cold-preservation | official_guidance | FAO, Manual on meat cold store operation and management, Cold preservation of meat products. https://www.fao.org/4/t0098e/t0098e02.htm | Historical primary context distinguishing primary chilling and maintained chilled state, natural postmortem activity and weight/state change. No numerical temperature, duration, density, ageing programme or loss percentage adopted as default or present legal requirement. |
| fao-meat-coldstore-operations | official_guidance | FAO, Manual on meat cold store operation and management, Planning of cold storage. https://www.fao.org/4/t0098e/t0098e03.htm | Historical primary hanging-carcass rail/handling, received already-chilled storage, hygiene and transport context. Actual resources/procedures are collected; manual cleaning recipes, fixed layout/loading and operating examples are not PCR quantities or present law. |
