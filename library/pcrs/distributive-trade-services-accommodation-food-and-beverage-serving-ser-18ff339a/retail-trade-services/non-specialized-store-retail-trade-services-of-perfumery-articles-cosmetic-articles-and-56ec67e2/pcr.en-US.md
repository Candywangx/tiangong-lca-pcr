---
status: candidate
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-perfumery-articles-cosmetic-articles-and-56ec67e2
language: en-US
sync_with: pcr.zh-CN.md
---

# Incremental in-store retail service for original-wrapped Dr. Bronner unscented 5 oz soap bars

## 1. Scope and Applicability

This candidate fixes one actual manufacturer solid-bar configuration and a non-specialized physical-store route. It defines a reviewable partial incremental retail method; no site activity, LCI, scientific or safety approval is presumed. Support completion is mandatory and core rows cannot represent complete store operation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-perfumery-articles-cosmetic-articles-and-56ec67e2 |
| classification_refs | CPC 3.0 62175; non-specialized store retail trade services of perfumery articles, cosmetic articles and toilet soaps; UN explanatory note refers to goods class3532; proposed narrower applicability, subject to separate mapping acceptance. |
| covered_products | Incremental attended checkout and stock handling for one homogeneous manufacturer lot/configuration of Dr. Bronner Baby Unscented Pure-Castile Magic Bar Soap OBBA05, UPC018787782057, one nominal5oz/140g bar in its original paper wrapper, in a physical non-specialized mixed-assortment store. |
| excluded_products | Liquid soap, detergents sold by refill, perfumes, aerosols, testers, decanting, opened or damaged soap, customer use, online fulfilment, home delivery and specialist-only channels; no claim to cover the full3532 goods class. |
| representative_product | Manufacturer current OBBA05 product specification and historical BSBA05US7-02 label establish an actual soap product, not a supplier LCI or a measured retail observation. A first dataset needs physical lot label and supplier BOM/version reconciliation. |
| production_route | Store receiving gate -> ambient original-wrapped shelf stock -> attended electronic checkout -> physical customer handover -> confirmed final acceptance, with original-event return and rejection tracking. |
| market_state | Solid saponified formulation plus complete printed paper wrapper; original-wrapped does not mean hermetically sealed or zero water/volatile loss. No opening, sampling or washing in the admitted route. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Incremental receiving, shelf custody and attended electronic checkout service for the specified original-wrapped bar. |
| How much | One final-valid accepted original bar service, counted by distinct source-bar ID, not bar mass or transaction count. |
| How well | Correct lot/configuration, intact original wrapper and soap, physically delivered and accepted without an unresolved identity/state dispute; no scientific or safety approval is implied. |
| How long or cycle | Prospectively frozen same-store same-configuration cohort pool; include all opening, closed, idle and failure intervals until outcome closure; late changes replace the original pool version. |
| reference_flow_link | accepted_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Original-wrapped unscented 5 oz soap bar incremental in-store retail service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | store_id; physical_non_specialized_channel; OBBA05; UPC018787782057; manufacturer_lot; formulation_version; wrapper_BOM_version; receiving_gate; pool_id; pool_version; observation_period; acceptance_closure; support_completion_status |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | accepted_service | Number of items | Item(s) | Reference amount is1 Item(s), not5oz or kg; service_denominator defines the only Q. |
| electricity_conversion | checkout_ac | Energy | MJ | Measured kWh*3.6 gives MJ; convert once without changing the common denominator. |
| carrier_mass | condemned_pack | Mass | kg | Measure same-state consignment net kg; do not replace by nominal140g or count, or deduct inventory again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole original bar accepted into store custody at measured receiving gate, with identified supplier manufacturing and inbound-transport source vectors; quantity and background ownership are separate ledgers. |
| starting_condition_role | Incremental retailer service; successful merchandise manufacturing/inbound burden is outside this service and accompanies goods to the downstream goods system. |
| product_classification_scope | Only the original-wrapped solid bar route in identity table; non-specialized means mixed assortment, not a brand licensing status. |
| recursive_input_rule | Do not recursively add successful goods production or custody satellite outputs. This exclusion does NOT exclude failed_original_bar: its F source background is a characterized Product input exactly once. |
| upstream_dataset_requirement | Each original whole bar source V includes actual full finished formulation and original wrapper manufacturing, with disjoint inbound transport at the same receiving gate. Ingredient lists and nominal net mass do not quantify V. |
| disclosure | Core rows are a partial incremental foreground, never complete store operation. Mandatory support completion below precedes any completed-retail-service claim; unbound identities and missing supplier/site evidence remain explicit. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | all inventory rows | Admit only physically verified OBBA05/UPC018787782057 original-wrapped intact bars in the defined non-specialized store route. Record lot label, actual net soap and whole-pack mass, wrapper composition/printing/adhesive and supplier full finished formulation/BOM. Current page lists feed ingredients and explains sodium hydroxide is consumed; do not model a finished bar as pure oil or sodium hydroxide. Historical label and current page are different editions; reconcile actual lot (including Jojoba Oil/Wax naming) before background use. No ingredient mass fractions or package tare are inferred from ingredient order, nominal5oz/140g or online shipping weight. | bronner-product; bronner-label; un-cpc62175 |
| state_gate | failed_original_bar; customer_pack; supplier_return; condemned_pack | cp_stock records actual intactness, moisture change, contamination, missing units and incident history at each gate. Original paper wrap is not a zero-emission assumption. Any opening, wrapper damage, breakage, spill, measurable loss, suspected leakage/volatilization, testing or water contact suspends this route completeness. Before inclusion add real state-specific atomic carrier and species cards, single-process protocols, mass/state reconciliation, final recipient and complete treatment/background responsibility in BOTH languages; unresolved species, external pathway or state blocks a complete result. Internal store-air transfer is not automatically an elementary outdoor emission. Do not force an opened bar into an intact carrier or infer zero from no incident log. | bronner-product |
| goods_responsibility | failed_original_bar; customer_pack; supplier_return; condemned_pack | cp_stock preserves original source IDs from receiving through all resale/return events. Partition each original whole-source vector into final S (accepted goods), F (service failure/loss), T (named internal asset or supplier/other recipient responsibility) and O (open responsibility), fractions summing1 with no overlap. For this intact homogeneous route each individual original bar has one final owner; no mass split of its environmental vector. Charge failed_original_bar only actual N_F source-equivalent whole bars with supplier V and inbound source once. S is added once only in a separately declared downstream GOODS system. T keeps named receiving owner/source/version; transfer does not create a new manufacture. O remains unresolved and blocks complete characterization. A real supplier return physical movement and T responsibility are independent. If components acquire different owners, require verified supplier component inventory vectors, separate real component input cards and conserved original boundary/source IDs; exclude those portions from whole-pack F. |  |
| carrier_boundary | customer_pack; supplier_return; condemned_pack | Only customer_pack and supplier_return are non-characterized physical custody satellites, retaining actual intact states/recipient. condemned_pack is a real Waste output: direct consignment net kg of intact soap with original printed wrapper, only when receiver signs acceptance of exact soap/wrapper constituents/state and the verified treatment dataset covers this complete carrier. A license/photo alone is insufficient. Do not split the accepted complete carrier into soap and paper again or add treatment utilities/transport already included by provider. Missing treatment or rejection needs real disposition and blocks completion; a financial refund or externally retained unaccepted bar is never automatically retailer waste. |  |
| support_gate | all inventory rows | Before complete service reporting cp_support must inventory every actual facility, shelf, checkout, ICT, network, payment, security, administration, cleaning, capital and independent transport source. Core checkout electricity covers only its metered circuit. For each actual object and constituent lifecycle stage record present/absent/unknown, provider boundary and source IDs. Absence needs signed site inspection and equipment/contract evidence for the entire pool. Unknown blocks completion. Actual building, lighting, fan/HVAC, shelf, scanner/terminal, router, camera/storage, payment/admin backend and cleaning cannot disappear because they lack core cards. Apply fixed methods support_operating, support_assets, support_transport, support_cleaning and completion_join; add named real atomic cards and single-process protocols before a dataset is complete. Complete provider bundles may remain one genuine measurable service only with exact actual signed scope, original denominator and constituent/stage overlap checks; internet access does not include payment/admin/security backend by implication. This PCR does not leave boundary/driver/denominator choices to the modeller. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| checkout | Acceptance and dedicated checkout | required | all pool | foreground | Q |
| stock | Whole-bar stock and disposition | required | all pool | foreground | Q |
| support | Support source completion registry | conditional | Inventory mandatory before completeness; actual exchanges need added atomic cards. | support_completion | Q |

### Process: Acceptance and dedicated checkout (`checkout`)

#### Inputs

##### Product flows

###### Metered alternating-current checkout electricity (`checkout_ac`)

Direct meter MJ crosses the checkout circuit boundary; retain raw interval/source and use support_operating attribution before E_core/Q. Historical point-of-use AC identity supplies no provider/grid/voltage performance.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: E_core/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`
- Sources:

#### Outputs

##### Product flows

###### Final accepted incremental retail service (`accepted_service`)

One final-valid accepted original-bar ID service; service_denominator defines Q and revokes original validity only once.

- Selected flow: Original-wrapped unscented 5 oz soap bar incremental in-store retail service
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources:

### Process: Whole-bar stock and disposition (`stock`)

#### Inputs

##### Product flows

###### Failed original whole-bar source responsibility (`failed_original_bar`)

The receiving-gate complete formulation and original-wrapper source vector finally assigned F enters the service once as N_F/Q; it is not a custody satellite.

- Selected flow: Dr. Bronner OBBA05 unscented whole soap bar with original printed paper wrapper at receiving gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_F/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`
- Sources: bronner-product; bronner-label

#### Outputs

##### Product flows

###### Gross original-wrapped customer handover custody satellite (`customer_pack`)

Gross physical intact original-wrapped handovers to the customer, including subsequently refused or reversed events, are counted as a non-characterized custody satellite; they do not define Q.

- Selected flow: Intact original-wrapped Dr. Bronner OBBA05 bar handed to customer
- Flow property / unit: Number of items / Item(s)
- Amount rule: H_customer/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`
- Sources: bronner-product

###### Actual intact supplier handover custody satellite (`supplier_return`)

Actual physical intact original-wrapped handovers to the named supplier are a non-characterized custody satellite; quantity does not assign T responsibility automatically.

- Selected flow: Intact original-wrapped Dr. Bronner OBBA05 bar returned to supplier
- Flow property / unit: Number of items / Item(s)
- Amount rule: H_supplier/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`
- Sources: bronner-product

##### Waste flows

###### Dispatched intact soap and original-wrapper waste carrier (`condemned_pack`)

Direct net kg of the dispatched intact whole soap with original printed paper wrapper, excluding dispatch overpack; carrier_boundary requires signed receiver acceptance and matching complete treatment, without repeated stock deductions.

- Selected flow: Condemned intact Dr. Bronner OBBA05 soap bar with original printed paper wrapper for accepted complete treatment
- Flow property / unit: Mass / kg
- Amount rule: W_dispatch/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| support_operating | all inventory rows | Use cp_support source-numerator pools per exchange/property/unit. Submeter direct active work first; subtract a submeter only from a parent that actually contains it. Split active, idle and fixed components into mutually exclusive measured same-unit numerator pools that sum to the parent. Active device pools use measured task-reserved equipment seconds; idle/fixed checkout, ICT and network device pools use actual reserved equipment seconds across ALL beneficiaries including empty/closed reservations. Facility lighting/HVAC/fixed operation pools use measured served floor-area*m2*time*h as m2*h, with disjoint zone/time footprints and explicit empty reservations. Each pool uses e_h/sum_all(e_h) with e in that pool same driver unit, strictly positive/known total, retaining failures and zero-output cohorts. Never add seconds to m2*h or kWh to any driver. For network connection-hour service, each unique actual connection interval k has measured provider network_source_hours_k in h and beneficiary h has measured endpoint_reserved_connection_seconds_k_h in s. Allocate network_attributed_source_hours_k_h=network_source_hours_k*endpoint_reserved_connection_seconds_k_h/all_beneficiary_reserved_connection_seconds_k, where the denominator is the known positive sum of actual reserved endpoint connection seconds across ALL beneficiaries in interval k, including empty and failed reservations; shares sum1. First attribute these actual source-hours to the original SKU/pool/version; skip this attribution only when provider evidence already binds the exact final owner/pool/version, never merely an endpoint or consignment. Count the unique source connection service once; exclude equipment electricity or other operations already contained in that same provider scope, and do not treat connection-service h as overlapping active/idle/fixed equipment electricity hours. Payment authorization attempts and administrative batches are unique shared events: allocate actual line-level processing seconds within each event, shares sum1 including failed lines; a basket event cannot be whole-counted for every SKU. Security capture uses actual timestamped camera field-of-view beneficiary footprint m2*coverage h in disjoint zone/time plus empty reservations; freeze original source/pool/version map and allocate storage byte*h by that original map through all retention periods. Measured GB=10^9 bytes and GiB=2^30 bytes are distinct. Reject missing causal evidence rather than fall back to revenue or sales count. | ghg-allocation |
| support_assets | all inventory rows | cp_support identifies each homogeneous actual model/BOM/scope asset vector V separately: complete building excludes separately modelled shelves, lights/fans/HVAC and electronic devices unless verified included; each separate shelf/fixture/terminal/router/camera module excludes operations and independently modelled maintenance/EOL/transport. Declare complete-package versus disjoint stage mode from signed supplier scope; never both. For each asset and historical beneficiary-period h, e_h is actual task-reserved equipment h for electronic devices, actual occupied served m2*h for buildings/fixtures/shelves, and actual cleaned m2 for a reusable cleaning implement. Its expected L has exactly the same unit and spans all beneficiaries/lifetime. Provisional f_h=e_h/L; store all historical allocations, cumulative fractions<=1 and revise L before exceeding1, without dropping service intervals. At actual retirement replace EVERY historical allocation by f_final_h=e_actual_h/sum_all_h(e_actual_h). For each original pool/version post delta_h=f_new_h*V_new-f_old_h*V_old, including earlier periods; use the same replacement for packaging, independent asset/repair/retirement transport and terminal whole-device waste. Residual1-sum_old_f is QA only, never a current-period shortcut. Do not restart complete manufacture after replacement/lifetime revision, sum heterogeneous models as one Item(s), or charge manufacture plus the same complete lifecycle package. Measured whole terminal carrier excludes removed parts already; BOM reconstruction is a separately evidenced exclusive mode. Whole included treatment carriers and provider-contained components have no second foreground waste. | ghg-allocation |
| support_transport | all inventory rows | cp_support transport attribution has three levels: measured trip/segment source -> actual consignment/asset/material source -> final S/F/T/O or first-use/asset beneficiary-period owner. Preserve attribution_level, exact source, owner, pool and version. Trip source uses actual vehicle-km including measured empty distance and idle reserved vehicle h with nonzero fuel; never turn zero-load t*km into zero trip. For loaded capacity allocation fix driver to measured occupied m3 on that segment only when signed actual cube/volume capacity is binding and measured mass limit is satisfied; if actual mass constraint binds use separately reviewed mass-capacity route, not this volume route, before completeness. All beneficiary occupied/reserved m3 shares sum1, with empty capacity reserved to evidenced beneficiaries. Provider consignment allocation removes only repeat trip share. Only exact final owner/pool/version attribution skips owner fraction; original goods transport follows F fraction, unused support material follows its first-use owner, and asset transport follows all historical asset fractions. Include actual distance and background transport unit conversion supported by provider scope; measured litre fuel or vehicle-km is not automatically t*km. Compare constituents/time/event/stage, not different provider IDs, to remove overlaps. Unknown capacity or empty/idle coverage blocks completion. |  |
| support_cleaning | all inventory rows | Actual cleaning modules must add one specific real formulated input per product, imported supply water separately, and each actual complete terminal wet wipe/container/liquid waste carrier with receiver/treatment evidence. cp_support measures formulation-origin kg among unused retained, used retained, dispatched wipe, dispatched container residue, rinsate and confirmed loss as disjoint final destinations; intermediate used->rinsed is replacement, not another destination. Added rinse water/dirt is excluded from formulation kg; direct wet carrier kg is measured independently and not multiplied by formulation share again. Unused input stock carries original manufacture/inbound sources until first use; reused implements never repeat them. Import water meters already exclude internal reuse. Direct effluent mode is actual V_discharge*rho only, with measured same-state density, not supply minus reuse/storage. This route admits only direct measurement, no water-only reconstructed full-liquid carrier. Unknown discharge, spray/species or carrier composition requires actual atomic extension before completeness. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | checkout | accepted_service | acceptance ledger | original_bar_id; acceptance_event_id; final_valid_acceptance; revocation_event_id; physical_return_event_id; event_time; pool_id; pool_version; financial_adjustment; failure_reason | Scan lot/source IDs at each checkout/return; staff and customer acceptance record; audit all attempts and final status. | Item(s) | every event and each pool closure | entire original cohort and late outcomes | checkout and acceptance ledger | per reference flow | responsible cashier and independent stock controller sign versions; source-ID duplicate audit |
| cp_stock | stock | failed_original_bar; customer_pack; supplier_return; condemned_pack | source/state and custody ledger | original_source_id; lot; formulation_version; wrapper_BOM_version; actual_soap_net_kg; actual_whole_pack_kg; original_bar_id; event_id; event_time; intactness; moisture_change_kg; incident_status; final_recipient; S; F; T; O; V; ownership_version; G_open; G_close; received_count; physical_customer_return_count; physical_supplier_return_in_count; gross_customer_handover_count; supplier_handover_out_count; internal_transfer_out_count; condemnation_count; confirmed_missing_count; signed_unresolved_goods_residual; W_open; W_close; measured_condemnation_kg; other_measured_waste_receipts_kg; dispatched_net_kg; confirmed_missing_waste_kg; signed_unresolved_waste_residual_kg; consignment_id; receiver_signature; treatment_scope | Scan/barcode custody events; inspect actual wrapper/soap, supplier formula/BOM and receiving weights; weigh actual complete waste net carrier on calibrated scale excluding dispatch overpack; retain scale calibration/check-weight records and receiver acceptance. Stock controller investigates count/kg differences. | Item(s); kg | every movement and incident; opening/closing and dispatch | all receipts, failed/returned/retained bars and late corrections | receiving, shelf, customer and supplier gates; held-waste location | per reference flow | responsible stock controller; calibrated scales; supplier signed scope/BOM; receiver receipt; no inferred zero |
| cp_electricity | checkout | checkout_ac | direct meter ledger | meter_id; circuit_boundary; parent_meter_id; included_submeter_ids; opening_MJ; closing_MJ; kWh; E_core; task_reserved_equipment_seconds; idle_reserved_equipment_seconds; fixed_reserved_equipment_seconds; all_beneficiary_ids; interval; calibration_id; uncertainty; pool_id; source_version | Read dedicated checkout meter before/after each interval; convert measured kWh to MJ by3.6; technician verifies circuit coverage and meter calibration, cashier timestamps actual task reservations. Apply support_operating and reconcile all shares to actual source MJ. | MJ; kWh; s | each metered interval including closed/idle periods | full pool period and failure intervals | actual metered checkout circuit only | per reference flow | responsible technician; calibration/serial; parent-child reconciliation and uncertainty |
| cp_support | support | all inventory rows | support completion registry | object_id; model; BOM; lifecycle_stage; presence_status; absence_evidence; source_id; provider_scope; original_denominator; raw_or_normalized; raw_core_j_h; verified_raw_external_j_h; z_normalized_j_k; D_original_k; owner_fraction_k_h; Q_h; original_source_id; original_pool_id; original_version; attribution_level; overlap_key; exchange_identity; property; unit; active_source_numerator; idle_source_numerator; fixed_source_numerator; task_reserved_equipment_seconds; idle_reserved_equipment_seconds; fixed_reserved_equipment_seconds; facility_served_m2; duration_h; all_beneficiary_ids; empty_reservations; unique_connection_intervals; network_interval_id; network_interval_start; network_interval_end; endpoint_id; network_source_hours_k; endpoint_reserved_connection_seconds_k_h; all_beneficiary_reserved_connection_seconds_k; network_attributed_source_hours_k_h; payment_event_id; administrative_batch_id; line_processing_seconds; within_event_shares; camera_capture_source; capture_timestamp; field_of_view_m2; beneficiary_footprint_m2; coverage_h; frozen_capture_map_version; retained_bytes; retention_h; GB_or_GiB; V_old; V_new; e_h; L; e_actual_h; all_h; f_old_h; f_new_h; delta_h; retirement_event; terminal_whole_carrier_kg; trip_id; segment_id; vehicle_km; empty_km; idle_reserved_vehicle_h; measured_fuel; actual_binding_capacity; capacity_eligibility_evidence; occupied_m3; reserved_m3; mass_limit; actual_mass; actual_distance; final_owner; formulation_origin_kg; unused_retained_kg; used_retained_kg; dispatched_wipe_origin_kg; dispatched_container_residue_origin_kg; rinsate_origin_kg; confirmed_loss_origin_kg; wet_carrier_kg; V_discharge; rho; first_use_source_id; calibration_id; uncertainty; responsible_person | Site engineer inventories every source/object and compares signed contracts/provider original datasets; obtain direct submeter readings, actual reservations/area-time, actual network interval/source-hours (h) and all-beneficiary reserved endpoint connection seconds (s), event processing logs, field-of-view map, raw storage retention and asset lifetime histories. Survey actual occupied m3 and load mass by trip, weigh real cleaning inputs/carriers and directly meter effluent with same-state density. Record instrument units/serials, traceable calibration and check readings before deployment and at each period end; historian retains every replacement. No unsupported default factors or absence. | source-native unit; s; h; m2*h; byte*h; m3; kg; vehicle-km | each event, metered interval, unique network connection interval, capture interval, retention interval, asset revision and retirement | whole pool plus every affected historical beneficiary period | all actual facility/provider beneficiaries and stages | support_operating; support_assets; support_transport; support_cleaning; completion_join; retain raw or restore original D before one final/Q | responsible site engineer and independent reviewer; full-source reconciliation, signed boundaries and named atomic bilingual additions |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_denominator | accepted_service | Q=count(distinct original_bar_id with final_valid_acceptance=true in original pool/version). Revocation removes final validity once even without physical return; financial refund with acceptance retained does not. Keep refusals, reversals, retry attempts, physical returns, rework, missing goods and internal transfers as distinct events linked to the same original bar. Resale restores at most one final service. Pool is prospectively fixed by store/configuration, includes all failures/zero-sale periods and cannot be shifted to successful months; Q=0 is unnormalizable and retained. Late return/revocation revises original numerator, Q, S/F/T/O and source versions together, never duplicate-charged to a new pool. | original_bar_id; pool_id; pool_version; final_valid_acceptance; acceptance_event_id; revocation_event_id; physical_return_event_id; financial_adjustment; event_time; failure_reason | Q; original version replacement |  |
| stock_balance | customer_pack; supplier_return; condemned_pack; failed_original_bar | Goods-only count balance: G_close=G_open+received_count+physical_customer_return_count+physical_supplier_return_in_count-gross_customer_handover_count-supplier_handover_out_count-internal_transfer_out_count-condemnation_count-confirmed_missing_count+signed_unresolved_goods_residual. Gross customer handovers already include never-accepted handovers; do not subtract those again. Revocation with no movement is no new exit. Condemnation is an internal goods->held-waste change, not physical dispatch. Independent held-waste kg balance: W_close=W_open+measured_condemnation_kg+other_measured_waste_receipts_kg-dispatched_net_kg-confirmed_missing_waste_kg+signed_unresolved_waste_residual_kg. Link condemnation_count and measured_condemnation_kg by event IDs and actual scale, never equate them. Direct dispatched_net_kg is unchanged by opening/closing stock corrections. Count and mass residuals remain signed and investigated; any unresolved residual or unknown background owner blocks complete results. | G_open; G_close; received_count; physical_customer_return_count; physical_supplier_return_in_count; gross_customer_handover_count; supplier_handover_out_count; internal_transfer_out_count; condemnation_count; confirmed_missing_count; signed_unresolved_goods_residual; W_open; W_close; measured_condemnation_kg; other_measured_waste_receipts_kg; dispatched_net_kg; confirmed_missing_waste_kg; signed_unresolved_waste_residual_kg; event_id | independent goodsCount and held-wastekg reconciliation |  |
| core_amounts | checkout_ac; failed_original_bar; customer_pack; supplier_return; condemned_pack | Raw core numerators remain raw: E_core=sum direct metered checkout MJ attributed under support_operating; N_F=sum original whole bars finally assigned F once by source; H_customer=gross intact customer physical handovers; H_supplier=intact supplier physical handovers; W_dispatch=direct same-state consignment net kg. Final displayed amounts are respectively E_core/Q, N_F/Q, H_customer/Q, H_supplier/Q, W_dispatch/Q. accepted_service=Q/Q=1 Item(s) for Q>0. Satellite handovers never define Q. F Product input N_F/Q links each supplier whole-source vector once, and is not replaced by waste kg. Inbound transport already inside V is excluded from external transport. | E_core; N_F; H_customer; H_supplier; W_dispatch; Q; original_source_id; V; ownership_version | core per-reference quantities |  |
| completion_join | all inventory rows | For each compatible exact exchange identity/property/unit j in final original pool h: R_j_h=raw_core_j_h+sum verified_raw_external_j_h+sum(z_normalized_j_k*D_original_k*owner_fraction_k_h); final_j_h=R_j_h/Q_h. External raw numerators retain their actual source attribution directly; normalized modules first restore their evidenced original D, unit, source/pool/version. owner_fraction applies only where final owner/pool/version is not already allocated, under support_operating/support_assets/support_transport; otherwise it is1 with exact evidence. Keep raw_core_j_h even when core card display already shows /Q; never insert its normalized display as raw. Deduplicate actual overlapping source constituents/event/time/asset/stage before sum; distinct provider IDs alone do not prove disjointness. Add only identical compatible units row-by-row, never kg+MJ. Carry numerator replacements into historical pool h before one common Q division. New real rows/protocols, verified binding and supplier boundaries are required; a generic external-modules card is forbidden. A separate GOODS system adds verified S vectors exactly once after service responsibility conservation. | raw_core_j_h; verified_raw_external_j_h; z_normalized_j_k; D_original_k; owner_fraction_k_h; Q_h; network_interval_id; network_source_hours_k; endpoint_reserved_connection_seconds_k_h; all_beneficiary_reserved_connection_seconds_k; network_attributed_source_hours_k_h; original_source_id; original_pool_id; original_version; attribution_level; overlap_key | complete compatible exchange quantities per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| source_quality | all inventory rows | No quantified LCI, packaging tare or on-site quantity is established by the manufacturer webpage/label. Require signed actual lot formulation and packaging vector/BOM, stage coverage, geography/time, uncertainty and custody photos/weights; disclose primary-source version conflicts. | supplier original data and actual lot records |
| calibration_quality | all inventory rows | For every measured quantity retain instrument ID/unit, method, calibration validity, check-weight/reading, sampling coverage, uncertainty, raw event dates and responsible operator; close all gaps before a complete result. No silent zero or estimated default. | cp_stock; cp_electricity; cp_support; signed reconciliation |
| translation_quality | all inventory rows | Compare every row, direction/type, selected identity, unit, expression, basis kind, condition, negation, protocol raw field and formula inputs across both languages and actual generated projection. | bilingual parser comparison plus substantive reading |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| admissibility | all inventory rows | Require scope_gate/state_gate, source/BOM evidence and actual no-opening route observations; missing incidents or supplier evidence is unknown, never zero. Fuel/combustion and refrigerants are outside the admitted ambient core; full service support requires signed actual equipment/building provider records proving no uncovered combustion/refrigerant stage or verified covered complete provider package. An uncovered fuel/refrigerant needs real species/carrier methods and atomic bilingual extension before completeness, not a default emission factor. |  |
| identity_gate | all inventory rows | Every unbound row remains individually unverified. Before characterization bind one actual public Tiangong original response/receipt with recomputed hash and matching observed UUID, official bilingual name, flow type, direction, qualifiers, compartment/property/unit chain and background stage; identity binding alone proves no quantity, applicability or safety. The service output must remain candidate-unbound until its actual output row identity is verified. No UUID-shaped external label is a Tiangong identity. |  |
| closure | all inventory rows | Complete dataset requires Q>0, independent count/kg balances, closed S/F/T/O source ownership, direct meter and waste receipts, complete support inventory and source deduplication. Maintain all failures and zero-output pools; signed residuals are not automatic missing-goods quantities, credits or zeros. Reject missing treatment, state-specific carrier, owner, capacity, measurement, calibration or lifetime history. Report partial scope and unresolved evidence without a complete-business claim. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | partial_incremental_retail_foreground |
| downstream_use | secondary_dataset; background_dataset only after all completion and identity gates |
| allowed_use | Same physical-store original-wrapped OBBA05 configuration and gates, with pool/version-specific completion disclosure. |
| excluded_use | No complete-business, full3532, perfume/refill/tester, safety/compliance, supplier LCI or customer-use claim from this candidate. |
| required_metadata | All required qualifiers, Q, original supplier/source versions, S/F/T/O, actual site/channel, complete support scope, calibration and ownership corrections. |
| required_quality_disclosure | Candidate unverified row identities; missing foreground/BOM/provider/treatment evidence; partial scope, uncertainty, zero-output pools and historical replacements. |
| update_trigger | Lot/formula/wrapper, route/state, store/provider, source ownership, acceptance outcome, asset lifetime/retirement or new actual exchange changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62175 | official_guidance | UNSD CPC3.0 explanatory note62175 https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62175 | Official broad statistical boundary refers to goods3532, not a mandate for whole-leaf methodology. |
| bronner-product | handbook | Dr. Bronner OBBA05 Baby Unscented Pure-Castile Magic Bar Soap manufacturer specification https://www.drbronner.com/products/baby-unscented-pure-castile-bar-soap | Actual SKU/UPC, nominal pack and listed feed ingredients; no quantitative LCI, actual lot verification or safe-use approval. |
| bronner-label | handbook | Dr. Bronner historical label BSBA05US7-02 https://info.drbronner.com/wp-content/uploads/2016/11/bronner-US-bar-5oz-babyunscented-BSBA05US7-02.pdf | Historical5oz/140g solid bar label, formulation list and printed paper wrapper; actual current supplier lot/BOM must be reconciled. |
| ghg-allocation | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011 chapter9 printed p63 https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General subdivision and underlying physical relationship hierarchy; exact drivers and ledger methods are PCR design duties, not quoted source mandates or full-standard conformity. |
