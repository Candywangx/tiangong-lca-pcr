---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-other-machinery-and-equipment-n-e-c
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Non-specialized store retail service for original NIBCO NL998X8 full-port ball valves

## 1. Scope and Applicability

The declared object is an incremental physical retail service for one specified valve configuration. Supported normative rules below fix eligibility, attribution, completion and missing-data treatment. This candidate contains an explicitly partial core; actual field values, provider identities and independent scientific review remain to be completed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-other-machinery-and-equipment-n-e-c |
| classification_refs | CPC 3.0 62189; narrower; goods43240 |
| covered_products | Actual single-revision unused complete NL998X8 original configuration handled intact in the eligible mixed physical store |
| excluded_products | Other valve models/sizes/actuators/material states; generic machinery; wholesale/online/delivery; installation/testing/use and modified or dismantled goods |
| representative_product | NIBCO NL998X8; T-FP-600A-LF; 3/4 in female NPT x female NPT; standard lever |
| production_route | Actual mixed-assortment shelf choice → attended cashier/payment → physical intact pickup; receipt/return/cutoff reconciliation |
| market_state | New complete unused valve; actual supplier original individual packaging/BOM and lot verified before complete use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Physical store retail acceptance service for the specified complete valve |
| How much | One final-valid distinct original-unit service |
| How well | Exact lot/configuration, intact unused state, physical choice/cashier/pickup and signed acceptance under b_route/b_channel |
| How long or cycle | Prospective same-site/configuration cohort through cutoff and later acceptance/source revisions |
| reference_flow_link | service_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Retail service for one original NIBCO NL998X8 valve with final valid acceptance |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual mixed-store choice/cashier evidence; actual site/time and pool/cutoff; NL998X8 lot/revision; actual individual/master package BOM; intact unused gate and exclusions; latest valid acceptance; raw original source and S/F/T/O history; partial core and completion status; original units/denominators/provider scopes; uncertainty and unresolved identities |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | service_output; failed_original; supplier_return; internal_transfer; external_retention | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count actual single complete original units, not master cartons, nominal mass or rated hydraulic function. Final amounts per reference flow and common Q only. |
| m_energy | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert actual kWh by exactly3.6MJ/kWh under c_electricity; no rated valve power or operating energy. |
| m_waste | intact_valve_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure actual same-state whole net consignment; nominal manufacturer mass and carton shipping weight do not convert actual count to waste kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Complete unused same-lot original configuration at store receiving, source W_j at supplier dispatch separate from I_j transport |
| starting_condition_role | Retail custody entry, not proof of zero upstream burden |
| product_classification_scope | Narrower specified43240-valve retail service within62189; no full-leaf equivalence |
| recursive_input_rule | failed_original is actual F manufacture input only; named custody outputs are non-characterized satellites. Successful S goods belong only in downstream GOODS; never recurse entire merchandise manufacture into retail again. |
| upstream_dataset_requirement | Exact original W_j, I_j, individual/master packaging separation, actual provider/stage/denominator and S/F/T/O continuity |
| disclosure | Partial incremental core; unverified actual service/goods/waste identities and field sources must remain explicit until completion |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | retail; custody; residual | Only one actual lot/revision of NIBCO NL998X8, T-FP-600A-LF 3/4 in female NPT x female NPT full-port two-piece valve with standard lever is eligible. Preserve its complete original body/end cap, ball, seats, stem/packing, nuts, handle and actual individual original packaging. Record supplier BOM, lot labels and actual unit-versus-master-carton configuration; do not assume an individual factory seal or material composition from a photo. No other size, locking/extended handle, drain model NL999X8CL, solder/press valve, used or dismantled valve is equivalent. Nominal 0.660 lb, 0.30 kg, carton12 and pressure/temperature claims are identity information, never field mass, packing quantity, LCI or a compliance limit adopted here. The retained specification distinguishes chrome-plated lead-free brass ball for the 1/2–1 in group from stainless steel316 for larger sizes, with PTFE seats/packing and a plated-steel lever/stainless nut; actual lot evidence must preserve these role/state distinctions, not a pure-brass or stainless-ball proxy. | nibco-item; nibco-spec |
| b_channel | retail | Start when the actual mixed-assortment physical store takes custody of this original configuration; end at an identified customer physically taking the selected unit through an attended cashier with signed valid acceptance. Require actual dated assortment/display evidence, customer choice, cashier/payment and custody events. Online/mail-order/wholesale, delivery, installation, pressure/leak/flow testing, valve actuation demonstration, thread sealant/tape application, machining, washing, lubrication and disassembly are outside this route. Public product listings establish no actual branch stock or completed transaction. Factory manufacture/testing remains inside its original supplier source, not assumed absent. | un621; un62189 |
| b_source | retail; custody; residual | This is an incremental retail-service core. Exclude successful-merchandise S manufacture and its inlet transport from the service; the separately declared downstream GOODS system adds their same original S sources once. Include F original merchandise manufacture through failed_original and separate actual F inlet transport under c_transport. For each actual original unit source j retain W_j for manufacture including original individual packaging at supplier dispatch, and I_j for inlet transport separately; bundled stages require evidenced separation, otherwise incomplete. For each indivisible original valve source S/F/T/O are one-hot0/1 final responsibility flags, not component-mass fractions, and sum1: S has final valid service; F is irreversible retail responsibility not carried by another goods/asset system; T has a signed named successor carrying the same W_j/I_j; O is open/unresolved responsibility. Physical supplier returns alone do not imply T or a credit. Missing/lost goods retain F or explicit O, never disappear. A transferred demonstrator retains the SAME original source in asset T; no duplicate full F or new acquisition. Repeated receipts/returns never acquire W_j/I_j again. | ghg2011 |
| b_facility | retail | This bounded dry route requires full-period documented absence of on-site fuel combustion/backup/handling, refrigerant equipment and HVAC/purchased heat/cold over every included leased/shared/landlord-served zone. The facility manager must inventory actual equipment, owner, served area, temporary plant and service contracts during open/closed/idle/maintenance periods and sign applicable/absent/unknown. External fuel vehicles remain outside the included site gate. Unknown or actual presence blocks this route until a reviewed extension defines real species, activity, state, actual external medium and disjoint cards/protocols; an unplugged valve does not prove facility absence. |  |
| b_completion | retail | Core cards do not constitute a complete retail inventory. Before complete status add actual transport/handling, building/shelf, checkout/lighting/ICT/security and reusable cleaning-tool capital, event repairs/terminal carriers, network/payment/admin/camera capture and storage, facility water/cleaning formulation/containers/consumables and treatment, and actual receipt/extra wrapping sources using the fixed c_transport/c_assets/c_digital/c_clean/c_material/c_merge methods. Each actual homogeneous source needs its own atomic card, exact original unit, single-process protocol, provider scope and bilingual sync before completeness. Record named actual occurrence, signed absence or unknown; no generic combined exchange or discretion to choose another denominator/driver. A genuine complete contract bundle may remain intact only with signed object/constituent/stage/denominator coverage and no second included utilities, transport, repair or treatment. | jrc-retail |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Intact valve shelf/cashier service | required | b_route and b_channel satisfied | core | service_output |
| custody | Original-unit physical custody and cutoff states | conditional | Actual return/transfer/external retention occurs; preserve signed absence otherwise | satellite | supplier_return |
| residual | Intact original-unit waste dispatch | conditional | Actual whole-unit condemnation and receiver-admitted dispatch; zero/unknown documented separately | waste_handling | intact_valve_waste |

### Process: Original valve retail (`retail`)

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Measured point-of-use retail electricity; supply technology/provider remain actual-data requirements.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: E_MJ/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_retail
- Sources:

###### Complete unused NIBCO NL998X8 ball valve in its original individual retail configuration (`failed_original`)

Original complete-valve manufacture/individual-packing source equivalent assigned to F, under c_goods. It excludes its separately completed inlet transport and the shared master carton.

- Selected flow: Complete unused NIBCO NL998X8 ball valve in its original individual retail configuration
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_retail
- Sources: nibco-item; nibco-spec

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Retail service for one original NIBCO NL998X8 valve with final valid acceptance (`service_output`)

The service of final-valid physical retail acceptance, rather than the material valve production output.

- Selected flow: Retail service for one original NIBCO NL998X8 valve with final valid acceptance
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: cp_retail
- Sources: nibco-item; nibco-spec

##### Waste flows

##### Elementary flows

### Process: Physical custody states (`custody`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete unused NIBCO NL998X8 ball valve in its original individual retail configuration (`supplier_return`)

Gross intact original units physically handed back to the named supplier; only custody is represented.

- Selected flow: Complete unused NIBCO NL998X8 ball valve in its original individual retail configuration
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_R/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_custody
- Sources: nibco-item; nibco-spec

###### Complete unused NIBCO NL998X8 ball valve in its original individual retail configuration (`internal_transfer`)

Gross intact original units handed to named internal asset/other custody; source T needs separate signed acceptance.

- Selected flow: Complete unused NIBCO NL998X8 ball valve in its original individual retail configuration
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_T/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_custody
- Sources: nibco-item; nibco-spec

###### Complete unused NIBCO NL998X8 ball valve in its original individual retail configuration (`external_retention`)

Cutoff stock-state satellite for intact original units already outside the store without final valid acceptance. Link original gross pickup; no new movement or automatic waste.

- Selected flow: Complete unused NIBCO NL998X8 ball valve in its original individual retail configuration
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_X/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_custody
- Sources: nibco-item; nibco-spec

##### Waste flows

##### Elementary flows

### Process: Whole-unit waste (`residual`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Condemned intact NIBCO NL998X8 valve with its original individual packaging accepted for complete treatment (`intact_valve_waste`)

One actual whole-carrier consignment containing the complete original unit in this specified state; all materials need receiver acceptance, not a pure brass scrap proxy. Under c_stock, only the unique finally accepted and actually completely treated net carrier quantity receives the matching complete-treatment provider; unsuccessful movement attempts remain raw custody/transport records.

- Selected flow: Condemned intact NIBCO NL998X8 valve with its original individual packaging accepted for complete treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_out/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_waste
- Sources: nibco-item; nibco-spec

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_once | retail; custody; residual | Prefer direct measured subdivision; for each remaining same-unit source pool k allocate N_k_h=N_k*d_k_h/sum_all_h(d_k_h). All actual beneficiaries, failed/zero-sale/empty reservations and closed periods remain. Require measured positive known denominator for positive N_k; unknown is not zero and known shares are not renormalized. Separate incompatible driver classes and reconcile their raw source pools to the parent. Do not add electricity, area-time and event seconds as one driver. No substitution/recycling credit is granted by custody or waste transfer. | ghg2011 |
| a_power | electricity | Use disjoint calibrated circuit/source intervals. Active cashier/label-printer tasks allocate measured active kWh by actual within-event unit-line processing seconds; idle/fixed checkout, router, camera, lamp/fan electricity uses reserved equipment seconds including empty/failed periods. Fixed facility common circuits use served area_m2*covered_h. Keep each class raw kWh separate and reconcile sum to its parent; subtract a submeter only if that parent includes it. E_h is the sum of compatible attributed kWh, excluding all merchandise operation prohibited by b_channel. | ghg2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_retail | retail | electricity; service_output; failed_original | Actual cashier, original source and support ledger | original_ID; pool_ID; site_ID; configuration; acceptance_version; final_valid_acceptance; cutoff; event_date; gross_pickup_count; refund_only; Q; source_ID; W_j; I_j; S_j; F_j; T_j; O_j; successor_ID; signed_source_handoff; carried_in_source_IDs; genuinely_new_source_IDs; N_F; W_F; I_F; N_R; N_T; N_X; gross_pickup_event_ID; cutoff_state; recipient_ID; meter_ID; parent_includes_submeter; interval_start; interval_end; opening_kWh; closing_kWh; active_kWh; idle_fixed_kWh; facility_kWh; line_processing_seconds; all_line_seconds; reserved_device_seconds; all_device_seconds; area_m2; covered_h; all_area_hours; E_h; E_MJ; trip_ID; segment_ID; provider_scope; original_unit; raw_or_normalized; original_denominator; loaded_vehiclekm; empty_vehiclekm; stationary_idle_vehicleh; loaded_km; empty_km; idle_h; consignment_kg_h; occupied_m3_h; binding_capacity_evidence; reserved_capacity_h; all_reservation_map; A_mode; d_h; all_mode_driver; N_mode_h; attribution_level; final_owner; original_pool; version; asset_ID; material_source_ID; model_BOM; stage_scope; V_v; V_old; V_new; vector_version; e_h; exposure_unit; L_v; lifetime_evidence; all_historical_exposures; e_actual_h; E; f_old_h; f_new_h; delta_h; event_repair_ID; replacement_ID; terminal_carrier_ID; measured_terminal_kg; asset_freight_source; source_quantity; source_unit; component_carrier_model; component_carrier_state; network_source_ID; source_hours; reserved_endpoint_seconds; all_endpoint_seconds; attempt_ID; event_source_raw; line_seconds_h; all_event_line_seconds; capture_ID; footprint_m2_i_h; covered_seconds_i_h; all_capture_area_seconds_i; f_i_h; capture_map_version; actual_capture_raw_i; capture_z_i; D_capture_i; capture_source_ID; capture_original_unit; capture_vector; capture_source_version; storage_source_ID; storage_mode; raw_storage_p; storage_original_unit; storage_D_p; storage_vector; retention_interval; retained_bytes_i; retention_seconds_i; b_i; b_p_i; packet_members; packet_time_scope; all_packet_byte_seconds_p; GB_GiB_mode; exact_owner_pool_version; source_portion_ID; m0_s; cumulative_final_export_s; current_factorysealed_unused_s; current_opened_unused_s; current_solution_s; current_surface_film_s; current_tool_bound_s; current_held_waste_s; known_missing_s; signed_residual_s; source_state_location; state_transition_ID; first_use_s_h; pre_use_loss_s_h; G_s_h; V_mfg_s; V_in_s; G_new; G_old; m0_new; m0_old; unused_transfer_s; current_unassigned_s; signed_unassigned_s; original_owner; all_historical_records; container_ID; container_count; complete_container_BOM; first_open_ID; preopen_loss_ID; reuse_absence; tool_ID; cleaned_m2; washing_source_ID; inlet_m3; discharged_m3; same_state_measured_density_kg_m3; temperature_C; wet_carrier_gross_kg; wet_carrier_tare_kg; receiver_acceptance; complete_treatment_scope; source_vector_version; cleaning_pass_ID; cleaned_m2_h; sum_all_cleaned_m2; individual_pack_BOM; master_carton_ID; actual_unit_IDs; carton_configuration; homogeneous_service_evidence; carton_vector_mfg; carton_vector_inlet; first_carton_open_ID; actual_unit_count; carton_S; carton_F; carton_T; carton_O; net_receipt_quantity; core_quantity; separate_wrap_quantity; first_use_quantity; pre_use_loss_quantity; cumulative_final_exports; current_unused; current_printed_WIP; current_used_retained; current_held; confirmed_missing_material; signed_material_residual; printed_WIP_source_IDs; print_meter_ID; material_original_unit; material_event_ID; G_e_h; source_receipt_quantity; original_source_vector; printed_line_area_h; all_printed_line_area; blank_cut_margin; responsible_pool; module_ID; z_j_r; D_j; N_j_r; N_core_r; N_r; W_out; exchange_identity; property; unit; state; medium; event_ID; object_ID; time_interval; stage; constituent_scope; ledger_ID; record_ID; supplier_BOM; lot_ID; revision_ID; instrument_ID; calibration_evidence; uncertainty; source_ID; event_date | The site inventory manager scans or assigns tamper-evident original_ID without actuating/unpacking the original valve; supplier signs exact configuration, individual/master packaging and manufacture-at-dispatch scope. Cashier logs actual physical choice/payment/custody/acceptance and later revisions. Energy technician records calibrated circuit start/end readings and a_power drivers daily, checks meter drift/load and reconciles parent bills. Logistics, asset, ICT and facilities owners obtain actual original contracts, versioned activity exports, all-beneficiary denominators and c_transport/c_assets/c_digital/c_clean/c_material fields before completing modules. Retain original ledger_ID/record_ID/source_ID and one observation per source; every actual extra card needs its own single-process protocol. Aggregation method: Apply c_q/c_goods/c_electricity and fixed support methods to raw data; restore zD, deduplicate and divide final Q once under c_merge; per reference flow | Item(s); kWh; MJ; actual source unit; kg; m3; m2; seconds; hours; byte*seconds | Each custody/payment/acceptance event, daily meters, every source/lifetime revision | Whole prospective pool, closed/idle/failure periods and complete asset/source history | Actual mixed physical site and named supplier/provider sources | per reference flow | Dated display/payment/acceptance records, supplier BOM/signatures, calibrated meters/scales, source scope and version/driver reconciliation |
| cp_custody | custody | supplier_return; internal_transfer; external_retention | Original physical events and cutoff state | original_ID; source_ID; W_j; I_j; S_j; F_j; T_j; O_j; successor_ID; signed_source_handoff; carried_in_source_IDs; genuinely_new_source_IDs; N_F; W_F; I_F; N_R; N_T; N_X; gross_pickup_event_ID; cutoff_state; recipient_ID; Q; opening; new_receipts; physical_customer_returns; physical_supplier_returns; transfer_in; gross_pickups; gross_supplier_returns; transfer_out; confirmed_missing; condemned_count; observed_close; predicted_close; signed_count_residual; condemnation_event_ID; opening_waste_kg; condemned_kg; dispatched_waste_kg; known_missing_waste_kg; observed_waste_close_kg; predicted_waste_close; signed_waste_residual; gross_consignment_kg; tare_kg; W_out; ledger_ID; record_ID; supplier_BOM; lot_ID; revision_ID; instrument_ID; calibration_evidence; uncertainty; event_date; waste_attempt_ID; original_consignment_ID; physical_dispatch_event_ID; return_event_ID; returned_original_ID; returned_gross_kg; returned_tare_kg; returned_waste_kg; treatment_receipt_ID; final_treatment_status; final_processed_gross_kg; final_processed_tare_kg; final_processed_net_kg; processed_original_IDs; treatment_scope; receipt_version; no_movement_revision | Inventory staff records each actual signed supplier/internal handover and current external-retention recipient/state. Count tagged originals, reconcile gross goods-only stock under c_stock daily and at cutoff. Shared original ledger/record/source IDs match cp_retail; custody views do not create another source or observation. An external cutoff state is QA of an original gross pickup, not a new movement. Aggregation method: c_goods physical quantities/Q once; c_stock stays raw; per reference flow Waste kg fields are a QA-only read of the same original cp_waste ledger_ID/record_ID/source_ID; cp_custody performs no second weighing, quantity attribution or normalization of that waste ledger. | Item(s); kg QA from original cp_waste ledger only; timestamps | Every physical event and cutoff/later correction | Original configuration pool and full return history | Named actual supplier, internal asset custodian and external recipient gates | per reference flow | Unique IDs, signed receipts/current-state proof, physical count and unresolved residual investigation; original consignment/return IDs and actual final-treatment reconciliation |
| cp_waste | residual | intact_valve_waste | Whole original-unit waste consignment | opening; new_receipts; physical_customer_returns; physical_supplier_returns; transfer_in; gross_pickups; gross_supplier_returns; transfer_out; confirmed_missing; condemned_count; observed_close; predicted_close; signed_count_residual; condemnation_event_ID; opening_waste_kg; condemned_kg; dispatched_waste_kg; known_missing_waste_kg; observed_waste_close_kg; predicted_waste_close; signed_waste_residual; gross_consignment_kg; tare_kg; W_out; Q; module_ID; raw_or_normalized; z_j_r; D_j; N_j_r; N_core_r; N_r; E_h; N_F; exchange_identity; property; unit; state; medium; source_ID; event_ID; object_ID; time_interval; stage; constituent_scope; attribution_level; original_pool; version; ledger_ID; record_ID; supplier_BOM; lot_ID; revision_ID; instrument_ID; calibration_evidence; uncertainty; event_date; original_ID; waste_attempt_ID; original_consignment_ID; physical_dispatch_event_ID; return_event_ID; returned_original_ID; returned_gross_kg; returned_tare_kg; returned_waste_kg; treatment_receipt_ID; final_treatment_status; final_processed_gross_kg; final_processed_tare_kg; final_processed_net_kg; processed_original_IDs; treatment_scope; receipt_version; no_movement_revision | At each condemnation record original_ID/event_ID and count separately from actual whole-carrier kg. At actual dispatch weigh calibrated gross and tare, retain receiver acceptance of entire valve, all included seats/packing/platings and original packaging, plus complete compatible treatment scope. Reconcile held waste daily/cutoff with known missing and signed residual separately; no count-to-kg nominal substitution or second stock subtraction. Shared ledger IDs retain one original source. Opened/dismantled/mixed contaminated carriers need a state-specific reviewed extension. Aggregation method: c_stock actual W_out/Q once; count balance independent; per reference flow At each actual rejection/physical return weigh actual returned gross/tare and link original_ID, original consignment, attempt and return event; record actual finally processed original IDs, complete treatment evidence, final gross/tare and latest status/receipt version under c_stock. Retain all failed/return transport sources under c_transport. Repeated attempts do not create condemnation/manufacture; no-movement status revisions replace the original record. Partial treatment/state changes require actual state-specific atomic extension and matched receiver scope before completeness. | kg; Item(s) QA only; timestamps | Every condemnation/dispatch/return and daily/cutoff stock | Full original pool including held waste through terminal receipt; actual final treatment status and every return/revision | Actual condemnation/storage/dispatch and named receiver gate | per reference flow | Calibrated tare scale, constituent acceptance, signed treatment contract and held-stock/missing reconciliation; original consignment/return IDs and actual final-treatment reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_q | service_output | Q=count distinct original_ID with latest signed final_valid_acceptance=true in the prospective same-site/configuration pool at cutoff. Service output is fixed1 Item(s) only when Q>0. A revoked ID is already absent; do not subtract it again. Retain gross pickup and every failed/repeated/refused attempt independently. Pure refunds with valid acceptance do not remove Q. Late reversals replace original Q and all original-pool numerators at actual dates; never shift to a new profitable pool. Q=0 stays unnormalizable with raw sources retained. | original_ID; pool_ID; site_ID; configuration; acceptance_version; final_valid_acceptance; cutoff; event_date; gross_pickup_count; refund_only; Q | Q; service_output | ghg2011 |
| c_goods | failed_original; supplier_return; internal_transfer; external_retention | For each original source j apply b_source once. N_F=sum_j(F_j) Item(s); W_F=sum_j(W_j*F_j). The actual failed_original exchange is N_F/Q, with manufacture-only provider per original-source equivalent W_F/N_F when N_F>0; expanding it yields W_F/Q once, never add W_F again. N_F=0 has no provider division. I_F=sum_j(I_j*F_j) is separate actual inbound completion. Preserve carried_in_source_IDs and genuinely_new_source_IDs as disjoint sets. Physical outputs use actual gross supplier return N_R/Q and internal transfer N_T/Q. External retention N_X/Q is distinct original IDs physically outside at cutoff without valid acceptance, a state QA view of original pickup, not a new movement or second stock subtraction. Each needs named recipient/current intact state and S/F/T/O responsibility; T is not inferred from movement. | original_ID; source_ID; W_j; I_j; S_j; F_j; T_j; O_j; successor_ID; signed_source_handoff; carried_in_source_IDs; genuinely_new_source_IDs; N_F; W_F; I_F; N_R; N_T; N_X; gross_pickup_event_ID; cutoff_state; recipient_ID; Q | N_F/Q; N_R/Q; N_T/Q; N_X/Q | ghg2011 |
| c_stock | supplier_return; internal_transfer; external_retention; intact_valve_waste | Goods-only predicted_close=opening+new_receipts+physical_customer_returns+physical_supplier_returns+transfer_in-gross_pickups-gross_supplier_returns-transfer_out-confirmed_missing-condemned_count. signed_count_residual=observed_close-predicted_close, positive excess and negative shortage. gross_pickups includes accepted and never-accepted exits once; external_retention/revocation with no new movement is not another exit. Condemnation internally changes goods to held waste. Independent kg ledger: predicted_waste_close=opening_waste_kg+condemned_kg+returned_waste_kg-dispatched_waste_kg-known_missing_waste_kg; signed_waste_residual=observed_waste_close_kg-predicted_waste_close. Link count and measured kg by condemnation_event_ID, never equate them. Each actual rejected/returned waste movement records original_ID, original_consignment_ID, waste_attempt_ID and return_event_ID; returned_waste_kg=sum actual returned_gross_kg-returned_tare_kg at the return gate. It adds to held waste, never new condemnation or a newly manufactured source. dispatched_waste_kg=sum actual (gross_consignment_kg-tare_kg) over every unique physical_dispatch_event_ID for stock reconciliation, including rejected attempts; it is distinct from treatment quantity. For each unique finally processed original unit record final_processed_net_kg=final_processed_gross_kg-final_processed_tare_kg from matched actual receiving/processing evidence, and W_out=sum final_processed_net_kg over unique processed_original_IDs with verified complete matching treatment. A mere dispatch, acceptance without actual processing, rejected/returned attempt or unresolved final_treatment_status does not receive a full-treatment provider. A no-movement acceptance/status revision replaces the original treatment_receipt_ID/receipt_version without another inventory movement. Partial treatment or altered physical state requires actual state-specific atomic cards, matched receiver/stage scope and original-source conservation before completeness; never assume zero or charge the whole attempt for partial work. All actual failed/rejected/return transport and handling activity remains under c_transport even when final W_out=0. W_out is direct finally processed net carrier quantity, with no second stock/reuse/composition/destination correction; W_out/Q and the full-treatment provider use this same actual mass and boundary once. | opening; new_receipts; physical_customer_returns; physical_supplier_returns; transfer_in; gross_pickups; gross_supplier_returns; transfer_out; confirmed_missing; condemned_count; observed_close; predicted_close; signed_count_residual; condemnation_event_ID; opening_waste_kg; condemned_kg; dispatched_waste_kg; known_missing_waste_kg; observed_waste_close_kg; predicted_waste_close; signed_waste_residual; gross_consignment_kg; tare_kg; W_out; Q; original_ID; waste_attempt_ID; original_consignment_ID; physical_dispatch_event_ID; return_event_ID; returned_original_ID; returned_gross_kg; returned_tare_kg; returned_waste_kg; treatment_receipt_ID; final_treatment_status; final_processed_gross_kg; final_processed_tare_kg; final_processed_net_kg; processed_original_IDs; treatment_scope; receipt_version; no_movement_revision | typed stock reconciliation; W_out/Q |  |
| c_electricity | electricity | E_MJ=3.6*E_h; electricity=E_MJ/Q. E_h is raw attributed kWh under a_power, not already-normalized kWh/service. Preserve actual point-of-use voltage/provider and time/location; generic AC identity does not establish supplier mix. | meter_ID; parent_includes_submeter; interval_start; interval_end; opening_kWh; closing_kWh; active_kWh; idle_fixed_kWh; facility_kWh; line_processing_seconds; all_line_seconds; reserved_device_seconds; all_device_seconds; area_m2; covered_h; all_area_hours; E_h; E_MJ; Q | E_MJ/Q |  |
| c_transport | service_output; failed_original | For each actual trip/segment collect separate raw loaded_vehiclekm, empty_vehiclekm and stationary_idle_vehicleh with matching provider original unit and energy/exhaust scope. Loaded mode driver d_h=consignment_kg_h*loaded_km only under evidenced binding weight capacity, or occupied_m3_h*loaded_km under binding volume; never combine kg and m3. Empty driver=reserved_capacity_h*empty_km; idle driver=reserved_capacity_h*idle_h using the SAME trip evidenced kg or m3 reservation map and actual powered idle duration. N_mode_h=A_mode*d_h/sum_all_h(d_h), including all beneficiaries and failed/empty reservations. Positive actual mode requires its own positive provider source and known positive driver total. Apply source→consignment→final original F/asset/material owner layers once; a provider consignment total skips only trip allocation, not missing final-owner shares. Asset/repair/retirement freight first belongs to its asset then c_assets historical fractions. Handling uses actual measured task/reserved seconds, no zero-tkm disappearance. | trip_ID; segment_ID; source_ID; provider_scope; original_unit; raw_or_normalized; original_denominator; loaded_vehiclekm; empty_vehiclekm; stationary_idle_vehicleh; loaded_km; empty_km; idle_h; consignment_kg_h; occupied_m3_h; binding_capacity_evidence; reserved_capacity_h; all_reservation_map; A_mode; d_h; all_mode_driver; N_mode_h; attribution_level; final_owner; original_pool; version; F_j; asset_ID; material_source_ID | attributed raw transport numerator | ghg2011 |
| c_assets | service_output | Each actual homogeneous model/BOM/stage vector V_v has measured original beneficiary exposure e_h and evidenced expected lifetime L_v in the SAME unit. Buildings/shelves use reserved served m2*h; checkout, lights/fans, handling and ICT/security devices use reserved device seconds; reusable cloth/mop uses actual cleaned m2 per unique pass. Provisional f_h=e_h/L_v, with persistent all-history source/pool records, sum fractions<=1 and investigated excess. At final retirement E=sum_all_h(e_actual_h)>0 and f_final_h=e_actual_h/E; replace EVERY historical fV record with delta_h=f_new_h*V_new-f_old_h*V_old for each lifetime/vector revision, not a new whole acquisition. Apply actual event repairs/replacement and complete terminal carrier/freight to that asset and the same historical fractions unless verified already in V. Direct complete retirement mass gross-tare excludes removed parts already; no second subtraction. Complete package and component vectors are exclusive, and acquisition/retirement counts only reconcile custody, not additional current consumption. Each repair/replacement/treatment event records its measured homogeneous source_quantity in source_unit, actual component/carrier model/state and signed scope; no repair material mass is renamed as another complete device. | asset_ID; model_BOM; stage_scope; V_v; V_old; V_new; vector_version; e_h; exposure_unit; L_v; lifetime_evidence; original_pool; all_historical_exposures; e_actual_h; E; f_old_h; f_new_h; delta_h; event_repair_ID; replacement_ID; terminal_carrier_ID; measured_terminal_kg; asset_freight_source; attribution_level; version; source_quantity; source_unit; component_carrier_model; component_carrier_state | versioned raw asset responsibility | ghg2011 |
| c_digital | service_output | Network raw source_hours allocate by beneficiary reserved_endpoint_seconds/all_endpoint_seconds for each unique source interval, including failed/empty reservations. Payment/admin unique attempts allocate event_source_raw*line_seconds_h/all_event_line_seconds including failed attempts. Positive sources need positive known all-beneficiary totals. For each original capture i freeze f_i_h=(footprint_m2_i_h*covered_seconds_i_h)/all_capture_area_seconds_i using actual disjoint footprints/time and every beneficiary. Capture production N_capture_i_h=actual_capture_raw_i*f_i_h in its verified original unit/vector/denominator; restore normalized capture_z_i*D_capture_i first. Undecomposed capture-production totals stay incomplete until each original capture source is verifiable; future retention cannot reallocate production. Storage fixed-byte interval b_i=retained_bytes_i*retention_seconds_i; split actual byte changes by timestamps. Exactly one mode per storage source p: direct per-capture raw_storage_p*f_i_h, OR actual aggregate storage total raw_storage_p*sum_i((b_p_i/all_packet_byte_seconds_p)*f_i_h). All packet members/time scope and positive sum b_p_i must reconcile. Frozen original maps never follow later sales/deletion. Direct raw byte-seconds and provider activity are alternative representations of the SAME storage exchange, not added together; preserve provider actual units/D/vector and distinct capture/storage IDs. 1GB=10^9bytes; 1GiB=2^30bytes. Skip only an already-applied exact final owner/pool/version layer; unknown shares block, no renormalization. Remove covered onsite electricity/network/asset overlap. | network_source_ID; source_hours; reserved_endpoint_seconds; all_endpoint_seconds; attempt_ID; event_source_raw; line_seconds_h; all_event_line_seconds; capture_ID; footprint_m2_i_h; covered_seconds_i_h; all_capture_area_seconds_i; f_i_h; capture_map_version; actual_capture_raw_i; capture_z_i; D_capture_i; capture_source_ID; capture_original_unit; capture_vector; capture_source_version; storage_source_ID; storage_mode; raw_storage_p; storage_original_unit; storage_D_p; storage_vector; retention_interval; retained_bytes_i; retention_seconds_i; b_i; b_p_i; packet_members; packet_time_scope; all_packet_byte_seconds_p; GB_GiB_mode; attribution_level; exact_owner_pool_version | separate raw digital numerators | ghg2011 |
| c_clean | service_output | Facility cleaning never washes/solvent-treats merchandise. For each formulation source s measure receipt net m0_s excluding its separate container. Persistent physical balance: m0_s=cumulative_final_export_s+current_factorysealed_unused_s+current_opened_unused_s+current_solution_s+current_surface_film_s+current_tool_bound_s+current_held_waste_s+known_missing_s+signed_residual_s. Every term is source-origin formulation kg, excluding added water/dirt; final exports are mutually exclusive named actual terminal paths. State changes replace the earlier stock; rinsing a film never adds a second original portion. Ownership independently uses unique source_portion_ID first_use_s_h plus disjoint pre_use_loss_s_h: G_s_h=(first_use_s_h+pre_use_loss_s_h), raw manufacture=G_s_h/m0_s*V_mfg_s and raw inlet=G_s_h/m0_s*V_in_s. m0_s=sum_all_h(G_s_h)+unused_transfer_s+current_unassigned_s+signed_unassigned_s. Keep all historical original owner/pool/version; revise each record by delta=(G_new/m0_new)*V_new-(G_old/m0_old)*V_old, manufacture/inlet separately. Unknown source stage separation is incomplete. Complete single-use containers including closure/liner/label/adhesive use actual homogeneous count once at first opening or disjoint preopening loss, not formulation kg fraction; actual refill/reuse needs a reviewed lifetime extension. Reusable cloth/mop follows c_assets cleaned_m2 exposure with separate actual tool washing sources. Water import is actual inlet m3; internal reuse is not another input or another deduction. Direct whole effluent kg=actual discharged_m3*same_state_measured_density_kg_m3, no supply-balance subtraction. Actual whole wet waste carrier netkg is measured gross-tare independently from contained source-origin kg, without another composition/destination fraction. Signed full-constituent receiver acceptance and complete treatment scope are required for a genuine mixed carrier; unmatched species/path needs concrete extension before completeness. Where a first-use cleaning event serves several pools, split that unique event withdrawal and complete first-open container source by actual cleaned_m2_h/sum_all_cleaned_m2 for all beneficiaries, including disjoint measured reserved failed-area cleaning passes. Record actual pass/portion IDs; shared source ownership is fixed at that event, never future sales. Positive withdrawal requires positive known all-area; source portions reused later retain first ownership. | source_ID; source_portion_ID; m0_s; cumulative_final_export_s; current_factorysealed_unused_s; current_opened_unused_s; current_solution_s; current_surface_film_s; current_tool_bound_s; current_held_waste_s; known_missing_s; signed_residual_s; source_state_location; state_transition_ID; first_use_s_h; pre_use_loss_s_h; G_s_h; V_mfg_s; V_in_s; G_new; G_old; m0_new; m0_old; V_new; V_old; unused_transfer_s; current_unassigned_s; signed_unassigned_s; original_owner; original_pool; all_historical_records; container_ID; container_count; complete_container_BOM; first_open_ID; preopen_loss_ID; reuse_absence; tool_ID; cleaned_m2; washing_source_ID; inlet_m3; discharged_m3; same_state_measured_density_kg_m3; temperature_C; wet_carrier_gross_kg; wet_carrier_tare_kg; receiver_acceptance; complete_treatment_scope; source_vector_version; cleaning_pass_ID; cleaned_m2_h; sum_all_cleaned_m2 | separate original-source and whole-carrier raw quantities | jrc-retail |
| c_material | service_output | Original individual packaging remains with each complete merchandise source W_j/I_j and must not appear again as an input. A master carton used for several valves is a separate actual homogeneous original source; record actual contained unit_IDs and verified packaging manufacture/inlet source vectors. At actual first carton opening assign the complete carton vector to those actual contents by equal unit count ONLY when all units have the same actual configuration and packaging service, otherwise this bounded route is incomplete until a specific reviewed causal method. Preserve S/F/T/O original carton shares and all later unit fates/versions, allocating its F share to retail and S to GOODS once; no environmental-vector split by estimated cardboard mass. Actual extra receipt paper/retail wrap each has original measured net source quantity excluding core/outer wrap, cumulative final exports and exclusive current unused/printed-WIP/used-retained/held stocks, missing and signed residual. First use/preuse loss assigns original manufacture and inbound once; unused transfers retain unassigned source, reuse never reacquires it. Printed WIP carries paper and actual printing source_IDs across periods with replacement versions. Direct dispatched carrier mass is independent. All actual extra material cards require explicit composition/condition and actual carrier/receiver before completeness. Keep each homogeneous material receipt and first-use/preuse-loss quantity in the same measured original unit. For each event e, its actual material quantity G_e_h is traced to the served original unit/pool; for a shared homogeneous print/label job, assign its measured consumed source quantity by actual printed line area_h/all_printed_line_area, not basket value or future sales, and retain blank/cut margins in the same job. A pre-use loss has a named actual responsible pool or remains explicitly unassigned. Source contribution=(G_e_h/source_receipt_quantity)*original_source_vector, separately for manufacture and inlet. Retain all historical allocations and replace changed quantity/source fractions using the same delta method as c_clean; only current unassigned stock transfers, not first-used stock, may carry an unassigned manufacturing source. | individual_pack_BOM; master_carton_ID; actual_unit_IDs; carton_configuration; homogeneous_service_evidence; carton_vector_mfg; carton_vector_inlet; first_carton_open_ID; actual_unit_count; carton_S; carton_F; carton_T; carton_O; material_source_ID; net_receipt_quantity; core_quantity; separate_wrap_quantity; first_use_quantity; pre_use_loss_quantity; cumulative_final_exports; current_unused; current_printed_WIP; current_used_retained; current_held; confirmed_missing_material; signed_material_residual; printed_WIP_source_IDs; print_meter_ID; original_owner; original_pool; version; material_original_unit; material_event_ID; G_e_h; source_receipt_quantity; original_source_vector; printed_line_area_h; all_printed_line_area; blank_cut_margin; responsible_pool | raw packaging/paper numerators | ghg2011 |
| c_merge | service_output; failed_original; intact_valve_waste | For each actual external source j retain raw N_j_r, or restore normalized z_j_r to N_j_r=z_j_r*D_j using its actual original denominator/unit/pool/version. Apply only missing source→consignment→final-owner fractions. For each identical actual exchange identity/property/unit/state/medium and compatible boundary r, N_r=N_core_r+sum_j(N_j_r) after event/object/time/stage/constituent overlap resolution. Core raw quantities are3.6*E_h MJ, N_F Item(s), W_out kg and service Q, never the displayed /Q values. Exclude custody-only satellite outputs and S merchandise backgrounds; include F manufacturing once. Then amount_r=N_r/Q once. Do not add raw to normalized quantities, kg to MJ or byte-seconds to attributed provider activity. Unknown original D, unit, source overlap, actual identity or mandatory atomic module keeps the dataset incomplete. | module_ID; raw_or_normalized; z_j_r; D_j; N_j_r; N_core_r; N_r; E_h; N_F; W_out; Q; exchange_identity; property; unit; state; medium; source_ID; event_ID; object_ID; time_interval; stage; constituent_scope; attribution_level; original_pool; version | completed compatible per-exchange inventory | ghg2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | retail; custody; residual | Verify exact original NL998X8 lot/standard lever/individual package and actual 621 in-store choice/cashier route, not online listing or another near-name model. Unknown BOM, opened/reworked goods or unresolved source state blocks completeness. | cp_retail; supplier lot/BOM, display and signed physical transaction |
| q_measurement | all inventory rows | Retain raw quantity/unit/denominator, calibrated method, coverage, owner/pool/version and uncertainty. Investigate signed residuals and missing/unknown fields; never zero-fill, clamp or fabricate defaults. No empirically verified range is supplied; sensitivity scenarios must remain labelled and cannot satisfy a missing actual source. | Instrument checks, raw source ledger, variance investigation and explicit incomplete register |
| q_complete | retail | Dataset producer must reconcile every named b_completion source with actual homogeneous cards/protocols/provider identities and exact stage overlap, including all zero-sale/failed/idle activity. Manager signatures establish actual absence only for their covered place/time. Historical official identities are not fresh observations; scientific review, actual measurements and provider bindings remain separate. | Complete occurrence/absence/unknown matrix, source scope contracts and c_merge exchange audit |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | service_output | Require Q>0, latest acceptance evidence, exact reference display/link/count unit and every qualifier; otherwise no normalized service. |  |
| v_sources | failed_original; intact_valve_waste | Require original-source S/F/T/O conservation, separate F manufacture/inlet and actual complete carrier provider. Custody-only rows do not carry an environmental supplier; actual Waste treatment is mandatory and not a custody exemption. |  |
| v_projection | all inventory rows | Require bilingual object/direction/type/UUID/unit/formula/basis/obligation alignment, every protocol actual process and affected row, current normal generated projection and original evidence match. A schema/fingerprint pass or localized/atomic marker does not establish scientific or release approval. |  |
| v_completion | retail | Apply b_facility, b_completion and c_merge; missing actual identity, named support source, raw denominator, route absence, treatment scope or independent review is disclosed. Never declare this partial core a complete merchandise life cycle or full CPC coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | After all actual identities/sources/modules and review conditions are met: specified physical retail service and disjoint downstream GOODS linkage |
| excluded_use | Whole valve manufacture/use, operating water/gas delivery, installation/testing, whole62189 or whole-service claims from this partial core |
| required_metadata | All reference qualifiers, source/owner/pool/version, actual site/configuration/route and provider/module scope |
| required_quality_disclosure | Actual data gaps, unbound identities, historical identity observations, residuals/uncertainty, partial scope and pending independent scientific review |
| update_trigger | Actual configuration/route change, late acceptance/source/lifetime revision, new provider scope or verified identity |

## 11. Data Sources

| Source id | Type | Reference | Use |
| --- | --- | --- | --- |
| un621 | official_guidance | UN CPC Version3.0 group621, explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/621 | Physical mixed-assortment display/customer-choice/cashier route; no proof of an actual branch transaction |
| un62189 | official_guidance | UN CPC Version3.0 subclass62189 and goods43240, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62189 ; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/43240 | Narrower machinery-valve subset; not all leaf products |
| nibco-item | handbook | NIBCO material NL998X8, T-FP-600A-LF catalog, https://catalog.nibco.com/item/ball-valves-7/t-fp-600a-lf-ball-valve---lead-free--brass--two-pi/nl998x8 | Actual model/standard lever/size/NPT identity; nominal mass not field measurement |
| nibco-spec | handbook | NIBCO Lead-Free Brass Ball Valves - Threaded, revised11/16/2021, printedpage46, https://media.nibco.com/m/236dcc33001a944c/original/T-FP-600A-LF-LL-Spec-Sheet.pdf | Complete multi-material valve and handle/size variants; actual lot/BOM still required, no operational default or approval adopted |
| ghg2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011, chapter9 PDFpage65, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General subdivision/physical allocation consistency; this PCR fixes its own service boundary and exact methods, no full-standard conformity claim |
| jrc-retail | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector,2013 EUR25998EN, PDFpage18, https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail source-completeness context only; no numerical benchmark adopted |
