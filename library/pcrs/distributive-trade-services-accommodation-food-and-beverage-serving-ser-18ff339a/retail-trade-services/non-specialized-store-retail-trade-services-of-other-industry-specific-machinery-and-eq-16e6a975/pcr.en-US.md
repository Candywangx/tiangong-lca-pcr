---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-other-industry-specific-machinery-and-eq-16e6a975
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Physical mixed-store retail and delivery of factory-packed Eurodib HBS-250L commercial slicers

## 1. Scope and Applicability

This PCR defines one narrow physical-store final-retail service with retailer delivery for an actual homogeneous commercial slicer original package. It is a partial incremental core with fixed mandatory support completion, not machine production/use, a complete store footprint or verified actual shop activity. No empirical quantities/ranges/defaults are supplied. All mandatory methods below are PCR design choices subject to independent scientific review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-other-industry-specific-machinery-and-eq-16e6a975 |
| classification_refs | CPC 3.0 62188; narrower subset of group445 food-processing machinery |
| covered_products | One actual region/revision/batch of complete factory-packed Eurodib HBS-250L commercial belt-driven 10in meat slicer, its installed standard stainless blade, sharpener, carriage/pusher, guards, cord, original accessories/manual and all original packaging, sold by a non-specialized physical mixed-assortment store to a final user and delivered unopened by that retailer. |
| excluded_products | Other HBS sizes/JS or successor variants, separately sold Teflon/replacement blades, used/refurbished/opened units, wholesale/resale procurement, internet/mail orders, specialized equipment stores, machine commissioning/slicing/cleaning/sharpening/lubrication/repair and customer subsequent use or disposal. No equivalence by nominal watts, blade diameter or shipping weight. |
| representative_product | HBS-250L commercial food-preparation slicer; exact batch nameplate, lock/guard version and signed complete packing list are required. Catalogue evidence establishes a real model, not the actual stock or complete BOM. |
| production_route | Physical mixed-store display selection and cashier payment -> sealed custody/storage and order preparation -> retailer-arranged unopened delivery -> named final-user handover and final valid acceptance, with all failed/reversed attempts and linked returns retained. |
| market_state | New complete factory package, never opened or powered during the covered retail route. Factory assembly/test/lubrication may exist within the original upstream vector; their absence is not inferred. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Physical mixed-store final retail and retailer-arranged unopened delivery of the defined slicer package |
| How much | 1 Item(s) |
| How well | Exact actual batch/package, on-site selection/payment, complete sealed state and latest valid signed final delivery acceptance |
| How long or cycle | One complete prospectively defined original-ID service cycle including all attempts, returns and subsequent corrections |
| reference_flow_link | service_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Physical-store retail and delivery service for one finally accepted factory-packed HBS-250L slicer |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual store and physical mixed-assortment/display/cashier evidence; final-retail customer use; actual region/revision/complete supplier packing BOM; original seal and original_ID history; delivery/recipient/acceptance state; prospective pool/cutoff/Q; S/F/T/O and source-stage scope; partial-core completion and provider overlap; uncertainty and version |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | service_output; failed_original; supplier_return; external_retention; internal_transfer | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count exact complete packages/events or defined final service as each rule requires, never net or shipping kg. |
| m_energy | ac_retail | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Actual kWh converts3.6MJ/kWh once; original quantities and Q are separate. |
| m_waste | sealed_slicer_waste | Mass | kg | Actual whole same-state consignment net mass; original pack count and constituent kg remain independent. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete original package accepted into retail custody, linked to supplier dispatch source and separately identified receiving transport |
| starting_condition_role | foreground_boundary |
| product_classification_scope | CPC3.0 62188; narrower |
| recursive_input_rule | Do not recurse physical custody outputs into new manufacture. Retain actual failed_original manufacture input and complete disjoint supporting providers under b_original/a_once. |
| upstream_dataset_requirement | Actual W_j dispatch manufacture/packing and separate I_j plus exact provider stages/denominators; final flow identity and field quantities unverified until collected |
| disclosure | Incremental service excludes S goods manufacture/inbound and customer subsequent machine use; partial core until fixed support completion. Historical official identity evidence is not fresh live observation or scientific approval. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_route` | retail; failure; custody | Applicability requires actual evidence of a non-specialized physical store with mixed goods displayed for selection and cashier payment, a receipt linking that on-site selection/payment to this unique package, and final-user rather than wholesale/resale purpose. Record store_ID, floor/display evidence, purchase_channel, cashier_receipt_ID, customer_use and delivery_order_ID. Internet/mail, wholesale and specialized-store transactions are excluded even when supplied by the same brand. The Costco delivery listing is model/channel discovery only: it does not prove a qualifying physical-store transaction, branch stock or retail rather than wholesale. Unknown channel blocks applicability, not a modeller choice. | un621; un62188; costco-hbs |
| `b_machine` | retail; failure; custody | Verify one actual HBS-250L region/revision/nameplate and complete original packing BOM. Standard installed blade/guard/sharpener and original packing remain one whole source; separately sold Teflon/replacement blades are excluded. The linked spec labels its 10in image HBS-250JS whereas the manual names HBS-250L; nominal thickness, dimensions/net mass and cheese claims conflict. Do not resolve those by choosing convenient catalogue numbers. Obtain actual supplier revision/configuration proof without opening retail goods. The route excludes opening, blade adjustment, powered testing, food contact, cleaning, oiling, sharpening and installation; any occurrence requires a state-specific reviewed extension with actual food/oil/cleaner/water/energy/waste cards before completeness. Manufacturer operating intervals are not retail energy defaults, machine waterproofing, food-use permission or safety approval. | eurodib-hbs; eurodib-manual; eurodib-spec |
| `b_original` | failure; custody | For each unique original package j retain dispatch-manufacture/original-packaging vector W_j and separate actual receiving-inbound vector I_j. New original acquisition and carried-in originals are disjoint; return/retry/resale never reacquires manufacture. Assign each original source once among S final successful goods, F failed/lost goods charged to this service, T a named successor/asset original owner, and O still open/unassigned; S+F+T+O=1 per original. No fractional component ownership is admitted by this homogeneous whole-package route. Retail excludes S manufacture and I_S; a separate downstream GOODS system may add each once. Include W_F through failed_original and I_F through mandatory transport completion. Supplier return is not automatically a credit: a signed named T successor or unresolved O is required. Missing original identity/background never becomes zero. | ghg2011 |
| `b_delivery` | retail; failure | Include all retailer-arranged dispatch, failed attempt, redelivery, empty return and actual linked customer/supplier-return transport and internal handling sources, including successful deliveries. Merchandise receiving-inbound is included only for F under b_original. Keep actual legs/event_ID and lifecycle scope disjoint; merchandise transport and asset/material transport keep separate original owners under c_transport/a_assets. A delivered-price label never proves activity quantity, stage coverage or allocation. No customer self-collection route is interchangeable with this delivered service. | ghg2011; costco-hbs |
| `b_support` | retail | This record is an explicit partial incremental core. Complete retail-service additionally requires actual facility/building/shelf, handling, checkout, lighting/fan/HVAC assets; facility heat/cooling/combustion/refrigerants; network/payment/receipt/admin/security; site cleaning and paper/extra delivery packaging/treatment. Determine actual presence, absence or unknown for every named source over all opening/closed/idle intervals, including leased/shared/landlord services. Use fixed c_transport/a_assets/c_digital/c_clean/c_material/c_species methods and actual atomic cards/protocols/providers before complete status. Complete contracted packages may remain intact only with verified exact objects, constituents/stages, physical activity/denominator and exclusions; distinct providers do not prove nonoverlap. Unknown presence, source identity or scope is explicit incompleteness. | ghg2011 |
| `b_identity` | retail; failure; custody | Only the adopted AC identity and count/mass/energy support chains have historical official direct-read evidence. AC is at use with unspecified voltage/provider/supply mix, not a verified electricity process. Bind each unverified service/goods/waste flow only after direct official UUID/status/name/state/type/property/unit/compartment and actual object matching. For actual losses or gas transfers bind the actual external receiver/medium, never infer outdoor emissions from internal leakage. UUID absence in this candidate is disclosed and blocks complete dataset identity, not an invented UUID. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Physical store, order and delivered service | required | Only b_route/b_machine qualifying actual transactions | foreground | service_output |
| failure | Original failed goods manufacture responsibility | conditional | Actual F original sources; b_original | foreground | failed_original |
| custody | Physical custody and complete sealed waste | conditional | Actual signed handovers/cutoff state or admitted complete waste | foreground | physical_custody_events |

### Process: Physical retail and delivered service (`retail`)

#### Inputs

##### Product flows

###### Store and handling electricity (`ac_retail`)

Actual disjoint metered site sources attributed under a_power; machine operation is outside this route.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: E_MJ/Q MJ
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_power`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finally accepted physical-store retail and delivery (`service_output`)

One finally accepted original package service under c_pool, including retailer-arranged delivery; payment alone is not output.

- Selected flow: Physical-store retail and delivery service for one finally accepted factory-packed HBS-250L slicer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_pool`
- Sources: ghg2011

##### Waste flows

##### Elementary flows

### Process: Original failed source (`failure`)

#### Inputs

##### Product flows

###### Failed original complete supplier-dispatch source (`failed_original`)

Original homogeneous whole source carrying W_F/N_F dispatch-manufacture/packing once; actual F inbound remains separate.

- Selected flow: Complete factory-packed HBS-250L slicer at supplier dispatch
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F/Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_failure`
- Sources: ghg2011

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Physical custody and waste (`custody`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual sealed supplier handback (`supplier_return`)

Actual recipient-signed gross physical handback, not a manufacturing credit or proof of successor responsibility.

- Selected flow: Intact complete factory-packed HBS-250L slicer handed back to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_ret/Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

###### External original package without valid acceptance (`external_retention`)

Distinct original cutoff state linked to actual handover; neither a new movement nor automatic waste.

- Selected flow: Intact complete factory-packed HBS-250L slicer held by named external recipient without final valid acceptance
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_ext/Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

###### Original package transferred to named internal custody (`internal_transfer`)

Actual signed physical transfer, carrying the same original source to T where evidenced. A demonstrator opening/operation needs a separate route.

- Selected flow: Intact complete factory-packed HBS-250L slicer transferred to named internal custody
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_transfer/Q Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

##### Waste flows

###### Complete sealed condemned original package (`sealed_slicer_waste`)

Only actual intact sealed complete packages with signed acceptance of all actual equipment/accessory/packing constituents and final actual complete same-scope treatment under c_stock; weigh matching terminal consignment net once per unique original, excluding rejected/returned or merely received unprocessed attempts. Opened, leaking or dismantled units require distinct state-specific cards/provider scope before completeness.

- Selected flow: Condemned intact factory-packed HBS-250L complete slicer package accepted for whole-package treatment
- Flow property / unit: Mass / kg
- Amount rule: W_dispatch_kg/Q kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_power` | retail | Prefer disjoint calibrated meters. Split each measured electricity source into nonoverlapping active equipment, reserved-idle equipment and fixed facility pools, reconciling their kWh sum to the parent. Active checkout/handling uses measured event equipment-seconds; idle devices/lighting/fans use reserved device-seconds including zero-sale/closed beneficiaries; fixed facility pools, including HVAC electricity, use actual served reserved m2*seconds under c_species. For each homogeneous pool k, E_k_h=E_k*d_k_h/sum_all_h(d_k_h), with positive known denominator when E_k>0. Sum only compatible attributed kWh, E_h=sum_k E_k_h. Never sum seconds and area-time as one driver. Subtract a submeter only when physically inside that parent, never from an independent disjoint source. | ghg2011 |
| `a_assets` | retail | Keep a persistent ledger per actual homogeneous asset/model/BOM/scope vector V_v. Structures/shelves use measured reserved served-area seconds; powered handling/checkout/ICT/lamp/fan/HVAC devices use measured reserved device-seconds; reusable cleaning tools use actual cleaned m2 per pass. Current raw N_asset_h=(e_recorded_h/L_expected_v)*V_v, where measured e and evidenced expected lifetime L have the same unit and all beneficiaries are retained. Any L/V/source revision replaces every prior original-owner/pool record with delta=f_new_h*V_new-f_old_h*V_old; never restart acquisition. At retirement E_actual=sum_all_h(e_actual_h)>0 and f_final_h=e_actual_h/E_actual replaces every historical fV record. Acquisition/retirement counts reconcile stock only. Actual repair/replacements, asset freight and terminal carriers first belong to the asset, then follow its same historical f once; included whole-lifecycle package constituents are not added again. Unknown lifetime/BOM/stage separation blocks completeness. | ghg2011 |
| `a_once` | retail; failure; custody | Use original source/event/object/time/stage keys before module aggregation. Keep successful GOODS background outside the incremental retail service; F manufacture is the actual failed_original input, not an excluded custody satellite. Only supplier_return, external_retention and internal_transfer Product outputs are physical custody QA, without replacement credit or additional manufacturing demand. Actual waste requires its complete treatment, never a blanket satellite exclusion. Unknown fractions are not renormalized to known portions; no avoided-product credit is assumed. | ghg2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pool | retail | service_output | Physical selection/payment and final delivery acceptance ledger | store_ID; pool_ID; original_ID; configuration; cutoff; cashier_receipt_ID; delivery_order_ID; handover_event_ID; recipient_ID; final_valid_acceptance; acceptance_version; revocation_event_ID; event_date; Q; display_evidence; purchase_channel; customer_use; package_seal; nameplate_revision; complete_packing_BOM; return_event_ID; latest_notice_date | Store and delivery managers link cashier receipt to actual displayed-goods selection, original seal/label and signed supplier packing record without unpacking. Log every attempted/actual handover, recipient, acceptance/revocation and physical return with timestamps. Apply b_route/b_machine and c_pool; preserve original IDs/history and daily cutoff reconciliation. Aggregation method: Count latest final-valid originals; divide only after Q fixed | Item(s); timestamps; signed records | Every receipt/attempt/notice; daily reconciliation | Prospective full cohort including failed and zero-output cases | Actual physical mixed store and named delivery receiver | per reference flow | Receipt/channel proof, seal photos, supplier BOM, signed delivery and correction history |
| cp_power | retail | ac_retail | Calibrated disjoint electricity source ledger | E_h; E_MJ; source_meter_ID; source_event_ID; provider_included_charging; Q; E_k; pool_kind; d_k_h; all_beneficiary_drivers; parent_meter_ID; contained_submeter_ID; calibration_check; drift; source_interval; device_reserved_seconds; served_area_seconds | Read disjoint meters at interval start/end, reconcile daily to parent bills including idle/closed periods and supplier-included delivery charging. Record each actual active/idle/fixed driver separately for all beneficiaries. Check traceable meter load/zero/time drift at campaign start/end and after instrument changes. Apply a_power and c_power. Aggregation method: Raw attribution then3.6 conversion and one final Q | kWh; seconds; m2*seconds; MJ | Each meter interval/event; daily total | All opening, closed, idle and return intervals | Actual store, handling and dispatch circuits with coverage map | per reference flow | Calibrated meter records, bills and source/driver reconciliation |
| cp_failure | failure | failed_original | Original manufacture and responsibility register | original_ID; original_source_ID; carried_in_sources; new_sources; W_j; I_j; S_j; F_j; T_j; O_j; N_F; W_F; I_F; source_version; successor_ID; Q; complete_packing_BOM; dispatch_gate; inbound_scope; signed_T_successor; open_O_reason; loss_event_ID; original_ledger_ID | Supplier and inventory controller identify every carried-in/new original vector, dispatch manufacture/packing scope and separate inbound original source; preserve unique original assignment and later corrections. Check S/F/T/O and named successor evidence against receipt/return/loss IDs. Reuse original ledgers by IDs, no second measurement. Execute b_original and c_failure. Aggregation method: N_F/Q expands W_F/N_F once; separate I_F | Item(s); original vector units | Every original source and fate/version change | All original history across returned/resold and open cases | Supplier dispatch and actual receiving gate separately | per reference flow | Signed supplier stages/BOM, original-source conservation and successor evidence |
| cp_custody | custody | supplier_return; external_retention; internal_transfer; sealed_slicer_waste | Physical custody count and measured whole-waste register | opening_count; new_receipts; customer_returns; supplier_returns; transfer_in; gross_customer_handovers; gross_supplier_handovers; transfer_out; condemnation_count; confirmed_missing_count; observed_closing_count; predicted_closing_count; signed_residual_count; event_ID; opening_held_kg; condemned_kg; returned_waste_kg; dispatched_kg; known_missing_waste_kg; observed_held_kg; predicted_held_kg; signed_residual_kg; gross_kg; tare_kg; W_dispatch_kg; treatment_receipt_ID; terminal_original_ID; final_treatment_gross_kg; final_treatment_tare_kg; actual_treatment_status; actual_treatment_scope; complete_treatment_evidence; same_scope_provider; waste_attempt_ID; waste_return_ID; treatment_status_version; N_ext; N_ret; N_transfer; original_ID; seal_state; configuration; custody_event_ID; recipient_ID; recipient_signature; successor_ID; receiver_acceptance; actual_constituents; treatment_scope; scale_ID; calibration; external_at_cutoff; final_valid_acceptance | Scan originals at each actual custody gate and confirm intact complete factory seal from external evidence. Count physical events independently of acceptance and background ownership. Calibrated/tare-checked scale weighs actual complete waste consignments and held stock; receiver must sign actual constituent/state acceptance and complete treatment. Separately record each attempted dispatch/return and final unique-original complete-treatment gate, measured terminal net kg, treatment status/version and same-scope provider under c_stock. No full-treatment amount is inferred from a shipment alone. Investigate count/kg missing and residuals under c_stock; no virtual dispatch from a financial event. Aggregation method: Raw independent balances; N/Q or direct net kg/Q once | Item(s); kg; timestamps | Every movement/state/dispatch; daily and cutoff stock | All supplier/customer/internal custody and held-waste intervals | Actual physical gate and named supplier/recipient/treatment receiver | per reference flow | Seal/BOM evidence, signed recipient/receiver, scale calibration and transport manifest |
| cp_support | retail | service_output | Mandatory actual support completion source register | trip_ID; leg_ID; source_ID; A_k; original_unit; mode; loaded_km; empty_km; idle_h; c_k_h; consignment_kg; occupied_m3; reserved_capacity_k_h; capacity_unit; capacity_evidence; d_k_h; all_beneficiary_reservations; source_energy_exhaust_scope; attribution_level; final_owner; original_pool; source_version; F_j; material_source_ID; asset_ID; network_source_hours; reserved_endpoint_seconds_h; sum_all_endpoint_seconds; event_source_quantity; unique_event_ID; line_processing_seconds_h; sum_all_line_processing_seconds; capture_ID; footprint_m2_i_h; coverage_seconds_i_h; f_i_h; capture_map_version; actual_capture_source_i; capture_source_ID; capture_unit; capture_vector; z_i; D_i; actual_retained_bytes_i; actual_retention_h_i; storage_packet_ID; storage_mode; P_p; bytehours_p_i; storage_packet_members; storage_packet_time; storage_unit; storage_vector; storage_denominator; version; portion_ID; m0_s; cumulative_final_exports_source_kg; current_sealed_unused_source_kg; current_opened_unused_source_kg; current_solution_source_kg; current_film_source_kg; current_toolbound_source_kg; current_heldwaste_source_kg; confirmed_missing_source_kg; signed_residual_source_kg; first_use_kg_s_h; disjoint_preuse_loss_kg_s_h; G_s_h; V_manufacture_s; V_inbound_s; original_owner; unused_transfer_source_kg; unassigned_source_kg; all_historical_owner_records; G_old; G_new; m0_old; m0_new; V_old; V_new; container_ID; complete_container_BOM; first_open_event_ID; preopening_loss_event_ID; cleaned_m2; reserved_failed_cleaning_m2; all_cleaning_area; tool_ID; lifetime_cleaned_m2; water_import_m3; actual_discharge_m3; same_state_measured_density_kg_m3; temperature; gross_kg; tare_kg; receiver_ID; treatment_scope; model_BOM; source_unit; q0_s; first_use_quantity_s_h; preuse_loss_quantity_s_h; unused_transfer; current_unused; printed_WIP; used_retained; held_waste; cumulative_final_exports; confirmed_missing; signed_residual; print_job_ID; print_source_ID; print_processing_seconds_h; all_print_processing_seconds; print_energy; final_customer_handover; equipment_ID; equipment_owner; served_zone; interval; presence_state; source_stage; source_quantity; served_reserved_m2_seconds_z_t_h; all_served_reserved_m2_seconds_z_t; w_z_t_h; delivered_MJ; fuel_species; fuel_quantity; fuel_unit; fuel_state; V_fuel_m3; rho_same_state_kg_m3; m_fuel_kg; NCV_actual_MJ_kg; E_fuel_MJ; fuel_temperature; fuel_pressure; fuel_moisture; fuel_composition; fuel_reference_state; provider_combustion_scope; combustion_event_ID; combustion_mode; species_g; C_raw_g_out_i; C_raw_g_in_i; B_g_out_i; B_g_in_i; C_corr_g_out_i; C_corr_g_in_i; V_out_dry_ref_i; V_in_dry_ref_i; T_ref; P_ref; V_wet_actual; P_actual; T_actual; y_H2O; Z_ref; Z_actual; volume_state_mode; concentration_state; oxygen_normalization_absence; sampling_interval; synchronized_flow_concentration; duct_ID; all_external_inlet_outlet_inventory; retained_capture_change; N_comb_g; refrigerant_flux_mode; refrigerant_C_raw_g_out_i; refrigerant_C_raw_g_in_i; refrigerant_B_g_out_i; refrigerant_B_g_in_i; refrigerant_V_out_dry_ref_i; refrigerant_V_in_dry_ref_i; refrigerant_sampling_interval; all_refrigerant_external_openings; F_external_measured_g; opening_control_stock_g; imports_g; closing_control_stock_g; nonair_external_exports_g; R_g; recovery_ID; whole_equipment_transfer_ID; external_medium; vent_flux_measurement; capture_stock; calibration; absence_evidence; module_ID; raw_or_normalized; z_j_r; D_j; N_j_r; N_core_r; E_h; N_F; W_F; I_F; event_ID; object_ID; time_interval; lifecycle_stage; exchange_UUID; property_UUID; unit; state; medium; Q; asset_ID; model_BOM; V_v; vector_stages; e_recorded_h; L_expected_v; lifetime_unit; lifetime_evidence; e_actual_h; all_historical_records; f_old_h; f_new_h; V_old; V_new; repair_event_ID; terminal_carrier_ID; asset_freight_source_ID; measured_terminal_net_kg | Each actual logistics/facility/asset/ICT/cleaning/material manager records the fixed method raw fields, unique source/event IDs, actual physical measurement at its gate, instrument/calibration, all beneficiaries, source units/denominators and provider scope. Inventory full-period presence/absence/unknown including landlord/shared services. Execute b_support, c_transport, a_assets, c_digital, c_clean, c_material, c_species and c_complete. Add actual single-process atomic card protocols before completeness; this register is a ledger view, never one composite exchange. Aggregation method: Restore raw, apply only missing ownership layers, deduplicate and divide Q once | Each actual source unit separately; kg; m3; MJ; seconds; vehiclekm; vehicleh; byte*h; cleaned m2 | Each source/event/revision and interval; daily reconciliation; final retirement | Full original cohorts and all historical asset/material/capture beneficiaries | Named actual provider/asset/cleaning zone/source receiver and original pool | per reference flow | Actual contracts/stages, calibration/raw records, historical version replacement, all-beneficiary reconciliation and absence evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_pool` | service_output | Prospectively define one site/configuration cohort pool and observation cutoff before any outcomes. Q=count distinct original_ID with final_valid_acceptance=true after the latest signed acceptance/revocation history. Qualified delivery requires exact unopened package/nameplate-linked identity, actual named final-user physical receipt, accepted complete original state and no unresolved mismatch. Cashier payment alone is not Q. A financial refund with acceptance still valid changes no Q; revocation removes an ID even without physical return, already absent from this count and never subtracted again. Repeat deliveries/returns/resale of that original count once. Preserve event dates and all failed/zero-sale cohorts; later facts replace original pool numerator/denominator/fates with version deltas. Q=0 is unnormalizable, never deleted. The declared service exchange is1 Item(s) only when Q>0. | store_ID; pool_ID; original_ID; configuration; cutoff; cashier_receipt_ID; delivery_order_ID; handover_event_ID; recipient_ID; final_valid_acceptance; acceptance_version; revocation_event_ID; event_date; Q | Final service denominator Q; fixed service1 | ghg2011 |
| `c_stock` | supplier_return; external_retention; internal_transfer; sealed_slicer_waste | Goods-only predicted_closing_count=opening_count+new_receipts+customer_returns+supplier_returns+transfer_in-gross_customer_handovers-gross_supplier_handovers-transfer_out-condemnation_count-confirmed_missing_count. Gross handovers include every physically handed-over accepted or unaccepted event once; acceptance revocation without movement is no new exit. signed_residual_count=observed_closing_count-predicted_closing_count: positive unexplained excess, negative unexplained shortage. Condemnation is internal goods-to-held-waste, not dispatch. Independently, predicted_held_kg=opening_held_kg+condemned_kg+returned_waste_kg-dispatched_kg-known_missing_waste_kg; signed_residual_kg=observed_held_kg-predicted_held_kg with the same sign. Link count and weighed kg by event_ID without equating them. dispatched_kg and returned_waste_kg record every actual physical waste exit/return for stock QA only, regardless of receiver acceptance or treatment status. W_dispatch_kg=sum_unique_terminal_originals(final_treatment_gross_kg-final_treatment_tare_kg) includes only unique original-package portions with final actual complete whole-package treatment, measured directly at that matching terminal gate with treatment_receipt_ID, original_ID, complete treatment evidence and same-scope provider. It is not all attempted dispatch mass and has no additional stock/reuse deduction. Rejected/returned attempts, receipt without treatment and partial treatment cannot receive the complete-treatment provider or enter W_dispatch_kg as completed treatment. Retain their actual transport, handling and processing activities with actual scope under c_transport/c_complete; partial treatment or changed/opened states require concrete matching atomic extensions before completeness, never zero. Acceptance/status revisions without physical movement replace the original treatment/ownership record and all affected versions, not new stock exits or duplicate terminal original IDs. External retention N_ext counts distinct originals physically outside at cutoff without valid acceptance, not a second gross movement. Supplier N_ret and internal N_transfer count actual signed handover events; responsibility changes alone create no physical flow. | opening_count; new_receipts; customer_returns; supplier_returns; transfer_in; gross_customer_handovers; gross_supplier_handovers; transfer_out; condemnation_count; confirmed_missing_count; observed_closing_count; predicted_closing_count; signed_residual_count; event_ID; opening_held_kg; condemned_kg; returned_waste_kg; dispatched_kg; known_missing_waste_kg; observed_held_kg; predicted_held_kg; signed_residual_kg; gross_kg; tare_kg; W_dispatch_kg; treatment_receipt_ID; terminal_original_ID; final_treatment_gross_kg; final_treatment_tare_kg; actual_treatment_status; actual_treatment_scope; complete_treatment_evidence; same_scope_provider; waste_attempt_ID; waste_return_ID; treatment_status_version; N_ext; N_ret; N_transfer | Independent raw custody count and held-waste kg ledgers; normalized custody amounts N/Q and waste W_dispatch_kg/Q |  |
| `c_failure` | failed_original | Apply b_original per unique original j and retain W_j manufacture/original packing strictly at supplier dispatch, excluding I_j receiving freight. N_F=count originals assigned F; W_F=sum_j F_j*W_j and I_F=sum_j F_j*I_j, across carried-in/new sources and every original revision. failed_original=N_F/Q Item(s), expanding once with its exact aggregated source-equivalent W_F/N_F, only when N_F>0. At N_F=0 no division and no manufacture source. Do not additionally add W_F beside that expanded input; add disjoint I_F via c_transport/c_complete once. Positive W_F or I_F with unknown original source/type/configuration or denominator blocks completeness. If supplier bundles manufacturing/inbound, obtain verified stage separation, never omit or duplicate the segment. | original_ID; original_source_ID; carried_in_sources; new_sources; W_j; I_j; S_j; F_j; T_j; O_j; N_F; W_F; I_F; source_version; successor_ID; Q | Source-equivalent failed original input N_F/Q and separate raw I_F | ghg2011 |
| `c_power` | ac_retail | Use a_power to obtain raw attributed E_h kWh, including actual disjoint store receiving/storage/order/checkout/dispatch/return handling sources. E_MJ=3.6*E_h, ac_retail=E_MJ/Q MJ. A delivery-provider service already including vehicle charging excludes that charging from added facility electricity; retain source-meter/event evidence. No nominal150W times assumed runtime, no machine operation in this route. Unknown supply provider/geography/mix/voltage, grid losses or overlapping landlord billing remains explicit provider completion; the AC flow identity does not supply a generation dataset. | E_h; E_MJ; source_meter_ID; source_event_ID; provider_included_charging; Q | Attributed electricity MJ per reference service |  |
| `c_transport` | service_output | Per actual vehicle source/leg k use three disjoint measured modes: loaded vehiclekm, empty vehiclekm and stationary powered idle vehicleh. Match each mode to an actual provider in the same original activity unit with complete actual energy/exhaust coverage. For a proven mass-binding leg set c_k_h=measured consignment kg; for a proven volume-binding leg use occupied m3, never both or an unevidenced menu. Loaded driver d_k_h=c_k_h*loaded_km; empty driver d_k_h=reserved_capacity_k_h*empty_km; idle driver d_k_h=reserved_capacity_k_h*idle_h. Reserve capacity consistently in the evidenced same kg or m3 unit across all actual beneficiaries, including failed/empty reservations; positive raw activity A_k requires positive known sum_all_h(d_k_h). Raw N_k_h=A_k*d_k_h/sum_all_h(d_k_h). Apply only missing original-owner fractions after actual consignment assignment: F_j for merchandise inbound, all actual service delivery/return activity for this retail pool, first-use material owners under c_material/c_clean, and asset historical f under a_assets. Exact already-final-owner/pool/version skips only that evidenced layer; consignment-only attribution does not skip final owner. Internal electric/manual handling uses actual task seconds including idle reservations, not vehicle tkm. Unknown mode/provider/capacity/owner coverage is incomplete. | trip_ID; leg_ID; source_ID; A_k; original_unit; mode; loaded_km; empty_km; idle_h; c_k_h; consignment_kg; occupied_m3; reserved_capacity_k_h; capacity_unit; capacity_evidence; d_k_h; all_beneficiary_reservations; source_energy_exhaust_scope; attribution_level; final_owner; original_pool; source_version; F_j; material_source_ID; asset_ID | Raw measured transport/handling sources with single original-owner attribution | ghg2011 |
| `c_digital` | service_output | Allocate each unique actual network source-hours by reserved_endpoint_seconds_h/sum_all_endpoint_seconds, and each unique payment/admin source-event by actual line_processing_seconds_h/sum_all_line_processing_seconds; preserve failed events, empty reservations and all beneficiaries. For each original camera capture i freeze f_i_h=(footprint_m2_i_h*coverage_seconds_i_h)/sum_all_h(footprint_m2_i_h*coverage_seconds_i_h), with disjoint actual zone/time and original owner map/version. Capture production raw N_capture_i_h=actual_capture_source_i*f_i_h using its own original source_ID/unit/denominator/vector; normalized capture z_i restores raw z_i*D_i first. Indivisible multi-capture production totals remain incomplete until each actual original capture source is verifiable; no later retention driver. Storage raw bytehours_i=actual_retained_bytes_i*actual_retention_h_i, splitting variable stocks into fixed-byte intervals. For a single-capture storage provider raw total P_p assign P_p*f_i_h. For a multi-capture storage-only packet assign N_storage_p_h=P_p*sum_i((bytehours_p_i/sum_all_i(bytehours_p_i))*f_i_h), with actual complete packet members/time and original unit/vector/denominator. Single/aggregate storage modes are exclusive per source. Bytehours are a driver, not a second exchange beside provider activity. All positive sources require known positive denominators; missing members/maps remain incomplete without renormalizing known shares. GB=10^9bytes, GiB=2^30bytes. Skip only proven exact already-final owner/pool/version layers; remove included onsite electricity/assets/network before aggregation. | network_source_hours; reserved_endpoint_seconds_h; sum_all_endpoint_seconds; event_source_quantity; unique_event_ID; line_processing_seconds_h; sum_all_line_processing_seconds; capture_ID; footprint_m2_i_h; coverage_seconds_i_h; f_i_h; capture_map_version; actual_capture_source_i; capture_source_ID; capture_unit; capture_vector; z_i; D_i; actual_retained_bytes_i; actual_retention_h_i; storage_packet_ID; storage_mode; P_p; bytehours_p_i; storage_packet_members; storage_packet_time; storage_unit; storage_vector; storage_denominator; final_owner; original_pool; version | Separate raw network/event/capture/storage activities in actual provider units |  |
| `c_clean` | service_output | Facility cleaning is separate from prohibited machine cleaning. For each original formulation source measure net m0_s excluding its container. Persistent physical balance: m0_s=cumulative_final_exports_source_kg+current_sealed_unused_source_kg+current_opened_unused_source_kg+current_solution_source_kg+current_film_source_kg+current_toolbound_source_kg+current_heldwaste_source_kg+confirmed_missing_source_kg+signed_residual_source_kg. These source-origin portions exclude added water/dirt; every state transition replaces the old state, final exports and current stocks are exclusive, all history is retained. Each original portion_ID enters first_use_kg_s_h once; repeated application/rinsing/recovery creates no new first use. G_s_h=first_use_kg_s_h+disjoint_preuse_loss_kg_s_h. Allocate raw manufacture and inbound separately as (G_s_h/m0_s)*V_manufacture_s and (G_s_h/m0_s)*V_inbound_s, with total original-source ownership conserved across all historical owners, unused transfers and still-unassigned source stock/residual. Revise every prior owner with delta=(G_new/m0_new)*V_new-(G_old/m0_old)*V_old. Independent complete single-use containers including body/closure/liner/label/adhesive use actual count assigned once to first-opening owner or disjoint pre-opening loss, not G/m0; actual reusable container requires reviewed a_assets exposure method. Cleaning event shared source uses actual cleaned m2 per pass plus disjoint reserved failed/empty cleaning area, all beneficiaries in the same-unit denominator. Cloth/mop uses a_assets cleaned-m2 lifetime, washing events distinct. Water import is measured separately; direct whole effluent kg=actual_discharge_m3*same_state_measured_density_kg_m3, no reuse/storage subtraction. Actual waste carrier net kg is direct gross-tare; formulation portions and whole wet carriers are different quantities, no repeated composition fraction. Actual source loss/species/receiver not supported by real complete carrier/provider evidence is incomplete until atomic completion. | source_ID; portion_ID; m0_s; cumulative_final_exports_source_kg; current_sealed_unused_source_kg; current_opened_unused_source_kg; current_solution_source_kg; current_film_source_kg; current_toolbound_source_kg; current_heldwaste_source_kg; confirmed_missing_source_kg; signed_residual_source_kg; first_use_kg_s_h; disjoint_preuse_loss_kg_s_h; G_s_h; V_manufacture_s; V_inbound_s; original_owner; original_pool; unused_transfer_source_kg; unassigned_source_kg; all_historical_owner_records; G_old; G_new; m0_old; m0_new; V_old; V_new; source_version; container_ID; complete_container_BOM; first_open_event_ID; preopening_loss_event_ID; cleaned_m2; reserved_failed_cleaning_m2; all_cleaning_area; tool_ID; lifetime_cleaned_m2; water_import_m3; actual_discharge_m3; same_state_measured_density_kg_m3; temperature; gross_kg; tare_kg; receiver_ID; treatment_scope | Raw original formulation/container/tool/water/carrier numerators, each actual unit |  |
| `c_material` | service_output | For actual receipt paper or extra delivery packaging keep each homogeneous complete material/BOM original source s in its actual kg or count unit. Paper receipt net excludes measured core and separate wrapper; coating remains part of paper. Assign manufacture-at-dispatch/inbound source vectors once by first_use_quantity_s_h plus disjoint preuse losses over original received quantity q0_s; unused transfers/stock retain the same unassigned sources. Whole package count cannot use contents kg. Cumulative final exports+current exclusive unprinted-unused/printed-WIP/used-retained/held-waste stock+known missing+signed residual=q0_s, using original-source-equivalent units without added water/dirt. Printed WIP retains paper and actual print-energy original source/owner history; later withdrawal replaces prior allocations, never repeats them. Reuse creates no new manufacture. Keep actual final customer handover or signed complete mixed-carrier treatment disjoint from separately dispatched components; direct carrier net kg is not corrected again. Actual shared print job processing-seconds shares sum1 over all lines/failed prints; fixed printer idle/device capital uses a_power/a_assets. Every material/component/receiver needing a distinct identity requires its actual card before completeness. | material_source_ID; model_BOM; source_unit; q0_s; first_use_quantity_s_h; preuse_loss_quantity_s_h; unused_transfer; current_unused; printed_WIP; used_retained; held_waste; cumulative_final_exports; confirmed_missing; signed_residual; original_owner; print_job_ID; print_source_ID; print_processing_seconds_h; all_print_processing_seconds; print_energy; final_customer_handover; receiver_ID; gross_kg; tare_kg; source_version | Separate raw material and print-source numerators with persistent ownership |  |
| `c_species` | service_output | For each actual homogeneous served zone z and measured interval t, subdivide facility heat/cold/HVAC operational sources from active handling/checkout device sources. All disjoint facility-HVAC electricity, fuel, purchased heat/cold and actual facility species raw quantities use the SAME measured w_z_t_h=served_reserved_m2_seconds_z_t_h/sum_all_h(served_reserved_m2_seconds_z_t_h), including failed/zero-sale/closed beneficiaries. A positive source requires a positive known denominator; preserve original source/zone/interval/owner/version. a_power uses this facility driver for HVAC circuits; its active-device and reserved-device drivers remain distinct. Never add delivered thermal energy to its provider-included electricity/fuel, or operate an overlapping second energy module. For each actual fuel first retain its measured original physical amount/unit and state. If the matching provider requires mass, m_fuel_kg=V_fuel_m3*rho_same_state_kg_m3; liquid density and volume have the same measured temperature/composition, gas volume and density have the same absolute temperature/pressure/moisture/composition and reference state. If the provider instead requires energy, E_fuel_MJ=m_fuel_kg*NCV_actual_MJ_kg for the measured same moisture/composition mass basis. Never convert already-mass amounts by density, already-energy amounts by NCV again, or use HHV as NCV; measured mass alone does not require an energy conversion. Purchased thermal amount is actual supplier delivered MJ and exact stage scope, not fuel input inferred from a generic efficiency. Each fuel/upstream provider and combustion operation scope is disjoint. Direct combustion species use ONLY a measured absolute inlet/outlet mass-flux mode, not an emission-factor mode or already differential export. At each actual external exhaust and matched inlet, record synchronized interval absolute raw species concentrations C_raw_g_out_i/C_raw_g_in_i in mg per dry reference m3, independent instrument blanks B_g_out_i/B_g_in_i and integrated volumes V_out_dry_ref_i/V_in_dry_ref_i. C_corr=C_raw-B is applied once per channel; actual inlet background then subtracts once. For each measured volume interval all instruments must use the same declared T_ref/P_ref, dry basis, composition and no oxygen-normalized concentration. If a meter exports actual wet m3, convert once as V_dry_ref=V_wet_actual*(P_actual/P_ref)*(T_ref/T_actual)*(1-y_H2O)*(Z_ref/Z_actual), absolute K/Pa, actual measured water mole fraction and evidenced compressibility; do not re-correct already-dry-reference volumes. Integrated external net species kg N_comb_g=sum_i(C_corr_g_out_i*V_out_dry_ref_i-C_corr_g_in_i*V_in_dry_ref_i)*1e-6. Time-resolve changing flows/concentrations and integrate their matched increments, never multiply unrelated average states. The control boundary covers all actual inlet/outlet ducts and retained/captured species changes; any unmeasured outlet, capture/stock change or unexplained negative result makes this narrow direct mode incomplete until a specific measured matching extension. Negative results remain uncertainty, not zero clamp or uptake credit. Fuel provider combustion species already covered excludes this direct mode for the same original event/species/stage; separate actual upstream/operation coverage is mandatory. Raw absolute, blank-corrected and background-differential quantities cannot be mixed; already processed data without recoverable raw/blank records are incomplete under this mode. For each actual refrigerant species g use one fixed independent external-flux measurement mode refrigerant_flux_mode=absolute_inlet_outlet_massflux. At every actual control-volume external vent/containment exit and matched external inlet measure synchronized raw absolute refrigerant concentrations refrigerant_C_raw_g_out_i/refrigerant_C_raw_g_in_i and independent instrument blanks refrigerant_B_g_out_i/refrigerant_B_g_in_i, all mg per dry reference m3, plus measured integrated refrigerant_V_out_dry_ref_i/refrigerant_V_in_dry_ref_i over those same intervals. Use exactly the previously defined dry reference state, wet-volume conversion only where needed, no oxygen normalization and each channel blank/background subtraction once. F_external_measured_g=sum_i((refrigerant_C_raw_g_out_i-refrigerant_B_g_out_i)*refrigerant_V_out_dry_ref_i-(refrigerant_C_raw_g_in_i-refrigerant_B_g_in_i)*refrigerant_V_in_dry_ref_i)*1e-6 kg. Resolve changing concentrations/flows into synchronized increments; do not use unmatched average states, a modeller-selected rate/factor mode or residual-derived flux. All actual external openings and sampling intervals must be covered; unknown flux, state or inlet/outlet coverage is incomplete. Preserve actual external medium and measured retained/captured stocks; equipment-to-room leakage is internal, not that external flux. Reconcile R_g=opening_control_stock_g+imports_g-closing_control_stock_g-nonair_external_exports_g-F_external_measured_g, all same-interval species kg. R_g>0 is unexplained missing species and R_g<0 unexplained excess; neither is automatically an air emission or credit. Recovery and whole-equipment contained exports are nonair external exports only at actual external gates, each source portion once; internal recovery/transfers only replace internal locations. Do not also subtract the same recovery as another capture export. Attribute measured F_external_measured_g and eligible direct N_comb_g by the facility w_z_t_h once; exact final-owner quantities skip only the proven prior layer. Every actual fuel/refrigerant/emission/carrier needs named atomic cards, property/unit/actual medium and protocols/providers before completeness. Full-period actual plant/service presence/absence/unknown includes leased/shared/landlord equipment; absence requires signed evidence and unknown is not zero. | equipment_ID; equipment_owner; served_zone; interval; presence_state; source_ID; source_stage; source_version; original_owner; original_pool; source_unit; source_quantity; served_reserved_m2_seconds_z_t_h; all_served_reserved_m2_seconds_z_t; w_z_t_h; delivered_MJ; fuel_species; fuel_quantity; fuel_unit; fuel_state; V_fuel_m3; rho_same_state_kg_m3; m_fuel_kg; NCV_actual_MJ_kg; E_fuel_MJ; fuel_temperature; fuel_pressure; fuel_moisture; fuel_composition; fuel_reference_state; provider_combustion_scope; combustion_event_ID; combustion_mode; species_g; C_raw_g_out_i; C_raw_g_in_i; B_g_out_i; B_g_in_i; C_corr_g_out_i; C_corr_g_in_i; V_out_dry_ref_i; V_in_dry_ref_i; T_ref; P_ref; V_wet_actual; P_actual; T_actual; y_H2O; Z_ref; Z_actual; volume_state_mode; concentration_state; oxygen_normalization_absence; sampling_interval; synchronized_flow_concentration; duct_ID; all_external_inlet_outlet_inventory; retained_capture_change; N_comb_g; refrigerant_flux_mode; refrigerant_C_raw_g_out_i; refrigerant_C_raw_g_in_i; refrigerant_B_g_out_i; refrigerant_B_g_in_i; refrigerant_V_out_dry_ref_i; refrigerant_V_in_dry_ref_i; refrigerant_sampling_interval; all_refrigerant_external_openings; F_external_measured_g; opening_control_stock_g; imports_g; closing_control_stock_g; nonair_external_exports_g; R_g; recovery_ID; whole_equipment_transfer_ID; external_medium; vent_flux_measurement; capture_stock; calibration; absence_evidence | Actual attributed facility thermal/electric/fuel sources and directly measured external species, with independent signed residuals |  |
| `c_complete` | service_output | Only after all b_support conditions and actual flow/provider identities are satisfied, restore each external normalized exchange z_j_r to its own raw numerator N_j_r=z_j_r*D_j using exact original denominator/pool/version; raw modules retain N_j_r directly. Attribute only missing source->consignment->original owner fractions under the fixed methods. For each compatible exact exchange UUID/property/unit/state/medium and lifecycle boundary r, raw N_r=N_core_r+sum_j N_j_r after source/event/object/time/stage deduplication, then amount_r=N_r/Q once. Core raw includes3.6*E_h and failed_original N_F expanded W_F once, not the already-/Q card values; exclude S manufacture/inbound, three named custody Product satellites and provider-contained utilities/asset/repair/treatment already counted. Never add kg to MJ or count to mass, normalized values to raw, or whole packets beside their constituent expansions. Missing actual source/denominator/identity/stage/card/presence evidence keeps partial/incomplete status. | module_ID; raw_or_normalized; z_j_r; D_j; N_j_r; N_core_r; E_h; N_F; W_F; I_F; source_ID; event_ID; object_ID; time_interval; lifecycle_stage; exchange_UUID; property_UUID; unit; state; medium; original_owner; original_pool; version; Q | Complete compatible normalized exchange inventory only after actual completion | ghg2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_route | retail; failure; custody | Require actual physical mixed-store final-retail selection/payment, unopened single-batch identity and signed final delivery; channel/model/revision/BOM conflicts stay blocking. | cp_pool; signed store, supplier and recipient evidence |
| q_balance | retail; failure; custody | Retain every failed/zero-sale/open original and full source history. Reconcile typed physical count/held-kg and S/F/T/O, positive-driver shares, exact raw/normalized mode and all historical replacements; investigate signed residuals and uncertainty, never missing=0. | cp_failure; cp_custody; cp_power; cp_support and versioned conservation/overlap audit |
| q_complete | retail; failure; custody | No full-service dataset claim until every named support source has actual presence decision, atomic identity/amount/provider and fixed method collection; complete mixed treatment needs actual full constituent/state acceptance. No empirical ranges/defaults or scientific/compliance approval are supplied. | Source-bound completion register, original official binding records and provider coverage signed by responsible producer |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_applicability` | retail; failure; custody | Reject use if b_route/b_machine gates or required qualifiers lack evidence; exclude internet/wholesale, different hardware and open/powered routes. A catalogue match is insufficient. |  |
| `v_measure` | retail; failure; custody | Require Q>0, one normalized reference denominator, correct per-card property/unit and protocol process/row links. Check original F expansion once, actual direct waste kg and typed stock balances; do not replace count with net/shipping mass. |  |
| `v_provider` | retail; failure; custody | Reject complete status on unresolved actual flow/provider/medium, missing source/denominator, positive-source unknown/zero driver totals, unknown fates, unsupported carrier or overlapping source stages; preserve partial core disclosure and uncertainty. |  |
| `v_updates` | retail; failure; custody | Any late acceptance, physical return, source fate, packing/revision, provider scope or asset lifetime change replaces all affected original records and regenerates bilingual guidance/projection; no silent independent new pool. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Only the exact qualified delivered retail service after actual support completion; a GOODS+service system adds S upstream once separately |
| allowed_use | Review-required partial-core scenario until all named completion/identity/field-data conditions pass |
| excluded_use | Complete store footprint, machine life cycle/use, internet/wholesale/specialized-store service, other configurations, avoided-product claims or safety/compliance certification |
| required_metadata | All reference qualifiers, actual original source/recipient/channel/stages, unit/denominator, method/version and complete presence/provider register |
| required_quality_disclosure | Candidate methodology, partial core, each unverified flow/provider/quantity and conflict, original-data period/uncertainty, historical identity observation and scientific review status |
| update_trigger | Late acceptance/return/fate, original config/BOM, provider scope, method, lifetime or boundary change under v_updates |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un621 | official_guidance | UNSD CPC3.0 subclass-group621 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/621 | Physical non-specialized store channel; excludes unproven online delivery as evidence of that channel |
| un62188 | official_guidance | UNSD CPC3.0 62188 and group445, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62188 ; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/445 | Group445 actual commercial food-processing-machine subset; no full-leaf coverage claim |
| eurodib-hbs | handbook | Eurodib HBS-250L manufacturer product and regional locking-system pages, https://eurodib.com/product/hbs-250l/ ; https://eurodib.com/en-us/product/hbs-250l-can-en-us/ | Actual commercial model/functions and separately sold blade; conflicting regional information requires actual batch evidence |
| eurodib-manual | handbook | Eurodib Operation Instructions for Meat Slicer,2020, PDFpages3–7 and8–12, https://eurodibproductimages.blob.core.windows.net/eurodib-product-images/Eurodib/HBS250L/EURODB_HBS250L_UserManual_Bilingual_2020.pdf | Original HBS-250L identity/components and excluded downstream operating/cleaning/oiling/sharpening; conflicting cheese/waterproof claims remain unresolved, no retail runtime defaults |
| eurodib-spec | handbook | Eurodib HBS Slicers sheet linked as2020, actual PDFmetadata2018 and 10in image labelledHBS-250JS, https://eurodibproductimages.blob.core.windows.net/eurodib-product-images/Eurodib/HBS250L/EURODIB_HBS250L_SpecSheet_EN_2020.pdf | Counterevidence to automatic variant/spec/net-versus-shipping equivalence; not actual BOM, LCI or measured mass |
| costco-hbs | handbook | Costco Business Delivery, Eurodib10in slicer Item294577/modelHBS-250L, https://www.costcobusinessdelivery.com/p/-/eurodib-commercial-10-electric-meat-slicer/4201068265 | Real model listing and retailer delivery/return terms only; no proof of actual qualifying physical-store retail transaction or branch availability |
| ghg2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011, chapter6 PDFpage30 and chapter9 PDFpage65, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General functional service unit, subdivision and physical relationship principles; specific service/source/lifetime equations are declared PCR design, not mandates or full-standard conformity |
