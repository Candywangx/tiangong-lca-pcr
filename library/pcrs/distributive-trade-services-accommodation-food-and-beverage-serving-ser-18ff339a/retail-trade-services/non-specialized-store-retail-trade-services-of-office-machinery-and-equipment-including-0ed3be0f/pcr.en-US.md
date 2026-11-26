---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-office-machinery-and-equipment-including-0ed3be0f
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Pickup retail services for original-pack factory-assembled office filing cabinets

## 1. Scope and Applicability

This candidate defines incremental pickup retail services for complete factory-assembled office filing cabinets in unopened original transport packaging. Any manufacturer, drawer count, size, finish or lock option within this product family may qualify, with actual supplier/material/configuration/BOM strata kept separate. Verify the actual cabinet, drawers, rails, handles, label frames, supplied locks/keys, accessories and all packaging as one original complete product; they are not independent cabinet-service outputs. Obtain actual lot, material grades, coating, component quantities, package composition and assembly evidence from the supplier. Nominal dimensions, price-list options, images and shipping weight are specification context, not measured net mass, occupied volume, LCI or safety/compliance approval.

The channel is a documented physical non-specialized store with a genuinely mixed assortment, its receiving/storeholding/pickup activities and final customer acceptance at that store. No source inspected establishes stock or availability at any actual branch. This is an applicability gate: signed branch assortment, ownership-of-stock, dated receipts, pickup and acceptance evidence must demonstrate this route before using the PCR. A website category, marketplace shipping listing or non-exclusive brand licence does not establish it. Specialized office-furniture dealers, direct factory dispatch, delivery/installation, assembly/unboxing service, rekeying, repair, demonstration, rental and cabinet use/storage function are outside this narrow service. An opened/damaged or unassembled customer transfer needs its own reviewed state-specific extension, atomic cards and bilingual projection before completeness; it cannot use the intact-pack handover cards.

The authored core contains final service accounting, original failed-goods supplier-background coupling, physical custody satellites, operating alternating current and intact-package waste dispatch. It is expressly partial until boundary rule b_completion supplies all actual support modules. It is never a complete retail-business footprint by itself. Classification applicability is narrower than CPC3.0 62183, whose official note also includes metal-frame seats (38111), office furniture (3812) and office/accounting machinery and parts (451). External accepted mappings and their ADRs remain authoritative; this PCR does not accept or permanently reject a mapping.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-office-machinery-and-equipment-including-0ed3be0f |
| classification_refs | CPC 3.0 62183; narrower |
| covered_products | Original unopened complete factory-assembled office filing cabinets for store pickup; actual material, dimensions, drawer/lock configuration and complete supplier pack BOM fixed per homogeneous pool. |
| excluded_products | Other office furniture, seats, machines, components, assembly and delivery |
| representative_product | Pickup retail services for original-pack factory-assembled office filing cabinets; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Store receipt → holding → customer pickup → final acceptance; intact-package custody failures |
| market_state | New factory-assembled welded-case office file cabinet in unopened original shipping package |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Pickup retail service for the specified original cabinet package |
| How much | One distinct final-valid original-package service |
| How well | Same actual factory-assembled office filing cabinet configuration and intact original contents/package accepted; no installation claim |
| How long or cycle | One prospectively declared pool period, corrected for late events at original pool/version |
| reference_flow_link | service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Pickup retail service for one original-pack factory-assembled office filing cabinet |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | branch mixed assortment and actual stock; original model/configuration/lot/BOM; intact factory assembly/package; receiving and pickup gates; final acceptance cutoff; Q and S/F/T/O source ledger; partial support scope and completion version |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | service; failed_pack; goods_handover; supplier_return; transfer_out; external_failure | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count actual whole original cabinet packages or distinct finalized services as specified; kg and drawer capacity cannot replace count. |
| m_energy | operating_ac | Net calorific value | MJ | 1 kWh=3.6 MJ; a_energy; final AC_MJ/Q. |
| m_waste | packaged_waste | Mass | kg | Use direct whole accepted consignment net kg under cp_waste; no catalog ship weight default. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual store receipt of full original packaged cabinet |
| starting_condition_role | foreground_receiving_gate |
| product_classification_scope | Narrower office furniture subset of CPC3.0 62183 |
| recursive_input_rule | Service is never recursively substituted for cabinet production; failed_pack carries original supplier product F once under b_source. |
| upstream_dataset_requirement | B_o is the supplier-signed full cabinet/original-package manufacturing vector at supplier dispatch, excluding all dispatch-to-receiving transport. Complete F inbound transport separately under a_transport and b_completion; no steel proxy or receiving-gate manufacturing vector. |
| disclosure | Partial core plus mandatory b_completion; no whole-business completeness before actual added cards |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| b_gate | all inventory rows | Start at signed physical receipt of the complete original package into the named store; B_o and failed_pack include supplier manufacture plus original packaging at dispatch only and exclude inbound transport. Transport from that dispatch gate to actual receiving is a mandatory separate completion source under a_transport and b_completion, with actual atomic transport exchange cards and protocols before completeness. If an offered supplier dataset bundles that exact segment, require verified stage-separated dispatch B_o and the matched segment source vector, and count the segment once in the inbound completion; never leave it inside failed_pack or add a second segment. Unseparable or unknown bundled scope is incomplete. End at final-valid store pickup acceptance or the actual recipient/state exit. Exclude customer travel and subsequent cabinet installation/use. Store operation for failures and zero-sale periods remains included. Protocol cp_goods establishes gates and configuration. | un-cpc-62183; hon-pricer; hon-storage |
| b_source | failed_pack; service; goods_handover; supplier_return; transfer_out; external_failure; packaged_waste | Apply a persistent original source ledger per original package ID. For each homogeneous full supplier manufacturing/original-package vector B_o at supplier dispatch (no inbound transport), partition source-equivalent quantities S_o/F_o/T_o/O_o exactly once: S final-valid customer original; F failed responsibility retained by this retail pool including confirmed lost original, condemned original and externally retained unaccepted original unless a signed continuing responsibility assigns it T; T signed continuation to supplier/another pool/asset; O unresolved or unsold stock retained open. S+F+T+O equals UNIQUE original acquired source equivalents with versioned corrections; physical return and resale never acquire B_o again. The goods balance receipt_count means external physical stock receipts only, excluding the separately counted physical_customer_return_count. Original ownership follows b_source regardless of a repeated physical receipt. Final-valid S production is outside incremental service and belongs once to a separately declared GOODS system; failed_pack is the real Product input N_F/Q and carries sum(F_o*B_o)/Q once for dispatch manufacture/original packaging only. Its F portion of dispatch-to-receiving transport is excluded from this core card and must be added as a distinct actual completion source under b_gate and a_transport; S inbound belongs to GOODS, while T/O original transport responsibility continues with the same original source ledger. Physical supplier_return, transfer_out, external_failure and goods_handover are explicitly uncharacterized custody satellites only, not extra manufacturing inputs; packaged_waste is a characterized Waste output requiring complete treatment. A responsibility transfer is not a new physical movement. Physically verified O stock carries its unassigned original source to the next period without reacquisition; unknown O identity/amount/fate blocks completeness; no automatic waste assumption for customer retention. |  |
| b_package | failed_pack; packaged_waste | B_o must match actual factory-assembled office filing cabinet full cabinet and original packing: steel case/drawers/reinforcements and suspension, aluminium pulls/label holders, locks/keys, follower blocks, coatings and every actual original packing constituent. Require signed supplier model/lot inventory and the exact dispatch manufacturing/original-package boundary excluding inbound transport; whole-package vector is used exclusively. Do not model a full cabinet as pure steel kg or infer a component environmental vector by mass fraction. If actual component responsibility differs, this whole-package method is unavailable until an extension supplies verified component original vectors, quantity/property/unit cards and source conservation with those parts removed from the whole vector. Real complete packaged waste may stay intact only with signed receiver acceptance of its actual constituents/state and matching complete treatment; otherwise add disjoint actual state/material cards before completeness. | hon-pricer; hon-storage |
| b_absence | all inventory rows | This route admits no on-site fuel combustion, purchased heat/steam, refrigerant equipment, product processing, unboxing, added customer packaging, printing or wet cleaning within its core. cp_support requires a dated all-equipment/all-period audit including landlord/shared plant, handling and standby equipment, circuits and cleaning contractor scopes. True occurrence or unknown absence means this narrow route cannot claim completeness: first extend the PCR with real atomic species/carrier cards, executable measurement and outside-environment transfer methods where relevant, bilingual rules and normal projection. An appliance name or an electricity meter does not prove absence. Electricity supply and provider-background plant impacts remain in their matched datasets. |  |
| b_completion | all inventory rows | The core is partial and omits F inbound transport. The mandatory completion must supply its actual segment source, atomic exchange cards and protocols under b_gate/a_transport before any complete retail-service claim; supplier-bundled exact segments are separated and counted only once as specified in b_gate. Before complete retail-service use, cp_support must enumerate every actual facility, light/fan, shelf/rack, handling aid, checkout/ICT/network endpoint, payment/admin/security backend, cleaning system and capital source with its actual object/model/BOM, site/time, source/pool/version, included stages and overlap check. Add actual atomic exchange cards/protocols to this PCR in both languages and sync; a list of module names is insufficient. Apply a_energy to all operating AC, a_asset to each homogeneous capital package and its disjoint maintenance/retirement/asset transport, a_digital to network/payment/admin/camera and a_transport to receiving/return/waste/support transport. Cleaning uses an actual verified full contractor lifecycle service with measured cleaned-area m2 per event and allocation of the source vector by this pool cleaned area / all served cleaned area for that event; require full actual constituents/operation/capital/treatment coverage, exclude those included sources from other modules, and no fictitious generic cleaning bundle. Other necessary exchanges not covered by those methods block completeness until a concrete extension. Use c_complete to combine original raw numerators and disjoint completion numerators once; original S merchandise remains excluded. | ghg-product |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Original-pack cabinet receiving, holding and pickup | required | Declared narrow route | foreground_service | service |
| residual | Whole packaged cabinet dispatch for treatment | conditional | Actual condemned whole packaged cabinet and signed complete receiver coverage | waste_dispatch | service |

### Process: Cabinet pickup (`retail`)

#### Inputs

##### Product flows

###### Original complete packaged factory-assembled office filing cabinet (`failed_pack`)

Supplier-manufactured original cabinet and its full original packing at supplier dispatch, with F responsibility in this pool; B_o and this input exclude ALL inbound transport. N_F sums homogeneous whole-source equivalents under b_source, not waste kg. Require actual complete dispatch manufacturing/packing vector and cp_goods reconciliation before binding; F dispatch-to-receiving transport is mandatory separate completion with actual atomic cards under b_gate, never a core quantity on this card.

- Selected flow: Original complete packaged factory-assembled office filing cabinet
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_goods

###### Alternating current (`operating_ac`)

AC entering actual receiving/holding/handling/checkout and support circuits. Meter hierarchy, included circuit map and separate same-unit activity/idle/facility pools follow a_energy; the name does not prescribe voltage, provider or generation mix.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: AC_MJ/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_energy

#### Outputs

##### Product flows

###### Pickup retail service for one original-pack factory-assembled office filing cabinet (`service`)

One finalized pickup service of one distinct original intact package, linked to final-valid acceptance under a_goods and c_goods; cabinet drawer count, storage capacity and nominal dimensions do not measure retail service.

- Selected flow: Pickup retail service for one original-pack factory-assembled office filing cabinet
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: cp_goods
- Sources: ghg-product

###### Intact original packaged factory-assembled office filing cabinet handed to customer (`goods_handover`)

Gross actual physical handovers in the original intact-package state, only when initially accepted; never-accepted physical handovers belong exclusively to external_failure. Count each movement once. This custody satellite does not carry S manufacture or another service output.

- Selected flow: Intact original packaged factory-assembled office filing cabinet handed to customer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_customer/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_goods

###### Intact original packaged factory-assembled office filing cabinet returned to supplier (`supplier_return`)

Actual whole intact-package supplier handoff with signed receiving state and continuation of B_o responsibility; financial credit alone is not this movement. An opened return needs a state-specific extension.

- Selected flow: Intact original packaged factory-assembled office filing cabinet returned to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_supplier/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_goods

###### Intact original packaged factory-assembled office filing cabinet transferred to another stockholder (`transfer_out`)

Actual intact-package handoff to another stockholder with original ID and signed T continuation; an internal ledger reclassification without movement is not an output.

- Selected flow: Intact original packaged factory-assembled office filing cabinet transferred to another stockholder
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_transfer/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_goods

###### Intact original packaged factory-assembled office filing cabinet physically handed over without initial acceptance (`external_failure`)

Actual never-initially-accepted physical handover, disjoint from initially accepted goods_handover events. A later revocation without movement only changes original responsibility/status and creates no output here. Current externally held unaccepted originals are tracked separately for F/T, never automatic retailer Waste.

- Selected flow: Intact original packaged factory-assembled office filing cabinet physically handed over without initial acceptance
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_external/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_goods

### Process: Waste dispatch (`residual`)

#### Outputs

##### Waste flows

###### Rejected complete factory-assembled office filing cabinet in original shipping package for treatment (`packaged_waste`)

Direct measured net consignment mass of a real complete rejected cabinet plus its actual original package; receiver must explicitly accept that complete state and constituents under b_package. Cabinet count/condemnation is separate QA, not a second multiplication or inventory-stock subtraction from dispatch kg.

- Selected flow: Rejected complete factory-assembled office filing cabinet in original shipping package for treatment
- Flow property / unit: Mass / kg
- Amount rule: dispatch_kg/Q
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_waste

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| a_goods | failed_pack; service; goods_handover; supplier_return; transfer_out; external_failure; packaged_waste | Use cp_goods and c_goods. Declare same-configuration pool prospectively by branch, route and study period; include every attempted/failed and zero-sale cohort. Q is number of distinct original package IDs whose pickup acceptance is final-valid at cutoff; repeated collection, resale and reissue of one original never create another final service. Later acceptance revocation changes that original status even without physical return; purely financial refund with valid acceptance does not. Recompute original pool Q, F and all attributed numerators/version deltas; do not charge a late return again to a new pool. Q=0 is unnormalizable and retained with raw burdens, not deleted or transferred to successful days. Supplier returns retain signed continuing dispatch manufacturing/original-package responsibility and the separate original inbound-transport responsibility; a physical return does not collapse those source boundaries. |  |
| a_energy | operating_ac | First directly subdivide actual AC circuits and source intervals. For each overlapping parent/submeter subtract only verified physically included child energy once; disjoint meters are not subtracted. Split measured active, idle and fixed source-numerator pools with identical kWh units, reconciling their sum to the full parent including closed/failure/standby periods. Active handling/checkout/ICT pools allocate by measured equipment active task seconds; idle/fixed equipment pools by measured reserved equipment seconds including failed/empty reservations. Physical facility lighting/fan/fixed pools allocate by measured served area m2 × duration h, including vacant reserved space and all beneficiaries. For each source j use n_j=measured_kWh_j*driver_pool_j/sum_all_beneficiary_drivers_j. Drivers within one pool have one unit, never seconds plus m2*h or bytes. Positive source with unknown/zero total driver is unassigned and incomplete; no zero default. AC_MJ=3.6*sum(n_j); operating_ac=AC_MJ/Q. Require source technology/location/voltage delivery and upstream supply matched separately; no duplicate operating AC in provider or asset packages. | ghg-product |
| a_asset | all inventory rows | For each actual homogeneous asset/model/BOM and disjoint lifecycle-stage vector V, retain a permanent ledger across all beneficiaries h and periods. Measured original-pool exposure actual_e_recorded_h is device reserved operating/idle seconds for handling, checkout, ICT, lighting/fan fixtures and other powered tools; physical building/rack exposure is actual served area m2*h. Each asset uses its own same-unit expected lifetime L (evidenced future device seconds or m2*h) and f_h=actual_e_recorded_h/L; expected future exposure is never the numerator. Keep sum(f_h)<=1. Final retirement fixes actual_E=sum_all_h(actual_e_recorded_h), then replaces EVERY historical f_h*V by the SAME original-pool numerator actual_e_recorded_h/actual_E*V_final. Every lifetime/vector revision similarly records replacement and delta=f_new_h*V_new-f_old_h*V_old for each original pool/version; residual 1-sum(old f) is QA only. Actual manufacture/installation, repair-event parts/service, retirement treatment and independent asset transport belong to the asset first then follow these same historical fractions once; already exact-final-owner/pool/version quantities skip repeat ownership only. Verify complete building versus separate light/fan/rack capital coverage explicitly; provider-included maintenance/EOL excludes duplicate terminal carriers. A transferred stock cabinet converted to demonstrator transfers its SAME original B_o to asset T, never full F plus new manufacture; demonstration is outside this route until extended. | ghg-product |
| a_digital | all inventory rows | For each unique original network interval j collect actual provider source connection-hours source_H_j and measured reserved endpoint-connection seconds endpoint_s_hj across ALL beneficiaries including failed/empty reservations; n_hj=source_H_j*endpoint_s_hj/sum_all_h(endpoint_s_hj), with positive known sum. Interval/source identity and provider scope must be unique; exact final owner/pool/version attribution alone avoids repeat owner allocation. Network hours are service activity, not another electricity interval; remove actual electricity/capital already inside a verified provider lifecycle package. Payment authorization and administrative batches are unique original events; record actual within-event source-line processing shares w_hj measured from processing seconds with sum_all_h(w_hj)=1, including failed attempts; one multi-SKU basket is never one whole event for each SKU. Separate actual backend services unless one evidenced same-contract package covers their complete constituents and denominator. Camera source allocation freezes the original capture-period map: actual timestamped field-of-view footprints m2*covered duration h, disjoint zones/times, all beneficiary and vacant reservations. For EACH original capture source i freeze w_i_h=(footprint_m2_i_h*coverage_h_i_h)/sum_all_h(footprint_m2_i_h*coverage_h_i_h), with an actual measured, known positive denominator across ALL beneficiaries including vacant/empty reservations, disjoint zones/times and source/version. Attributed capture numerator is capture_source_numerator_i*w_i_h. The actual retained storage activity from that capture is storage_bytehours_i_h=stored_bytes_i*retention_h_i*w_i_h; keep the SAME frozen map across later retention periods, never recompute it from later sales. Match byte-hour activity to the actual provider storage source denominator and complete boundary before applying its vector; raw provider totals spanning several captures first allocate among those captures by their measured stored_bytes_i*retention_h_i/sum_all_i(stored_bytes_i*retention_h_i), then apply each frozen w_i_h once. Exact final owner/pool/version attribution skips only the already performed corresponding level. Record 1 GB=10^9 bytes and 1 GiB=2^30 bytes explicitly. Apply each provider source numerator and owner once; cp_support retains source_H_j, endpoint_s_hj, event seconds, byte-hours, map, scope and versions. |  |
| a_transport | all inventory rows | Apply trip/segment j -> actual consignment or asset/material o -> final original responsibility/pool/version h. For raw source_trip_numerator_j, attributed_raw_j_o_h=source_trip_numerator_j*driver_j_o/sum_all_o_driver_j_o*owner_fraction_o_h; each factor is omitted only at its already-evidenced attribution level, never twice. Define driver_j_o below and retain exact level in cp_support. Measure source numerator (fuel, vehicle-km or complete provider trip vector), actual route/empty/idle segments, signed load limits and actual binding capacity. Verified mass-limited loaded segment uses actual source mass*segment distance divided by all consignments mass*same distance; verified volume-limited uses actual occupied transport m3*distance in that same unit. Another/unknown binding limit needs a reviewed matching extension. Empty travel is a separate positive vehicle-km source allocated by measured capacity reservation*actual empty distance, not zero t*km; stationary idle is a separate positive duration source allocated by same-unit reserved capacity*measured idle seconds. Keep all beneficiaries and positive known denominator. Provider already assigned to consignment skips only vehicle allocation, then applies source F/first-use/asset historical owner fraction. Only exact final owner/pool/version scope skips that fraction. The core failed_pack input and its B_o exclude inbound transport. Mandatory completion must add the actual F dispatch-to-receiving transport sources, allocated with the same original F ownership and actual atomic cards/protocols before completeness; S inbound stays in GOODS and T/O follows continuing original responsibility. Match any supplier-bundled exact inbound segment under b_gate: separate its verified stage vector from dispatch B_o and use it once in completion, never duplicate that segment or silently call it core. Match asset lifecycle legs independently. Actual return/waste shipments are physical events independent of background transfers; no duplicate provider legs or treatment transport. | ghg-product |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | failed_pack; service; goods_handover; supplier_return; transfer_out; external_failure | Original-package event and responsibility ledger | branch_id; cohort_id; original_id; model; configuration; lot; BOM_version; original_pack_state; source_id; B_o; supplier_dispatch_vector_id; supplier_dispatch_scope; supplier_transport_included_segment_ids; verified_segment_vector_id; receiving_segment_id; N_F; Q; receipt_count; opening_goods_count; gross_customer_handover_count; initially_accepted_physical_handover_count; never_accepted_physical_handover_count; externally_retained_unaccepted_original_ids; physical_customer_return_count; supplier_handoff_count; transfer_handoff_count; condemnation_count; closing_goods_count; confirmed_missing_goods_count; signed_goods_residual; final_valid_original_ids; revoked_original_ids; never_accepted_handover_ids; financial_only_adjustment_ids; S_o; F_o; T_o; O_o; N_customer; N_supplier; N_transfer; N_external; recipient_id; acceptance_time; event_time; cutoff; source_version; original_pool; correction_version | Scan every actual package and movement at store receiving, holding, pickup and return; link supplier signed packing/BOM, dated mixed-assortment branch audit and final acceptance/revocation. Record gross customer handovers as the disjoint sum of initially_accepted_physical_handover_count and never_accepted_physical_handover_count; current external-unaccepted retention is a separate responsibility state. Do not subtract a handover class a second time. Goods-only count balance uses actual movements and condemnation_count; held waste uses its own kg ledger cp_waste. Inventory owner signs cutoff and late-correction trail. | Item(s); event IDs; original supplier vector units | Every event and cutoff revision | Whole prospectively declared period including zero-sale and late events | Named physical mixed store and same original lot/configuration | per reference flow | Signed receipts, BOM, event-ID audit, configuration photographs and independent ledger reconciliation |
| cp_energy | retail | operating_ac | Meter and equipment-reservation ledger | meter_id; circuit_id; source_id; interval_start; interval_end; opening_kWh; closing_kWh; parent_includes_child; measured_kWh_j; pool_kind; driver_pool_j; sum_all_beneficiary_drivers_j; active_task_seconds; reserved_equipment_seconds; served_area_m2; served_duration_h; beneficiary_id; failure_reservation; empty_reservation; n_j; AC_MJ; Q; calibration_date; uncertainty; voltage; provider; location; overlap_source_ids | Read calibrated actual circuit meters at interval boundaries, log activity/reservations throughout, and survey area/time where physically served. Energy technician verifies wiring and parent inclusion before subtraction; no rated equipment power × guessed time. Missing intervals stay unknown. | kWh; seconds; m2*h in separate pools; MJ | Each source interval and meter reset | Full study period including closure, idle and failures | All actual on-site circuits supporting declared route | per reference flow | Calibration, original readings, circuit map, all-beneficiary reservation totals and signed source reconciliation |
| cp_waste | residual | packaged_waste | Whole packaged cabinet waste custody and dispatch | consignment_id; original_id; receiver_id; treatment_scope; actual_constituents; carrier_state; gross_kg; tare_kg; dispatch_kg; opening_held_waste_kg; condemned_measured_kg; actual_waste_received_kg; actual_waste_returned_kg; closing_held_waste_kg; confirmed_missing_waste_kg; signed_waste_residual; scale_id; calibration_date; event_time; Q | Weigh actual whole consignment gross minus actual vehicle/container tare on calibrated scale at dispatch/receiver. Link each condemned original ID to independently measured kg when it enters held waste. Receiver signs complete composition/state and treatment chain. A licence or photograph alone is insufficient. | kg; linked original IDs | Each condemnation, custody movement and dispatch | Whole period plus opening/closing held waste | Store waste holding and signed receiver boundary | per reference flow | Scale calibration, weigh tickets, state and receiver composition acceptance, treatment and transport overlap check |
| cp_support | retail | failed_pack; operating_ac; service; goods_handover; supplier_return; transfer_out; external_failure | Support-source completion register | object_id; model; BOM; site_id; period; presence_absence; original_source_id; lifecycle_stage; provider_scope; attribution_level; final_owner; original_pool; source_version; raw_numerator; normalized_z; original_D; exchange_identity; property; unit; actual_e_recorded_h; expected_L; actual_E; f_old_h; f_new_h; V_old; V_new; delta; historical_beneficiary_id; source_H_j; endpoint_s_hj; event_id; processing_seconds_hj; processing_seconds_all_j; w_hj; capture_map_version; footprint_m2; coverage_h; footprint_m2_i_h; coverage_h_i_h; sum_all_h_footprint_coverage_m2h_i; w_i_h; capture_source_numerator_i; stored_bytes_i; retention_h_i; sum_all_i_storage_bytehours; storage_bytehours_i_h; capture_source_id; stored_bytes; retention_h; cleaned_area_pool_m2; cleaned_area_all_m2; trip_id; segment_id; segment_distance; source_mass; all_load_mass; source_volume; all_load_volume; binding_capacity_evidence; empty_distance; idle_seconds; reserved_capacity; all_reserved_capacity; source_trip_numerator_j; driver_j_o; sum_all_o_driver_j_o; owner_fraction_o_h; constituent_overlap_ids; supplier_dispatch_vector_id; supplier_dispatch_scope; supplier_transport_included_segment_ids; verified_segment_vector_id; receiving_segment_id; inbound_F_raw_row; inbound_S_raw_row; omission_reason | Audit every actual support object and provider contract before modelling, then record every interval/event and all historical asset exposures. Site technician and provider validate scope, absence and meter boundaries; measure reserved times and area with traceable clocks/surveys, actual transport capacity and dispatch, byte counters and event processing logs. Freeze camera capture map at capture; keep denominator provenance and versioned corrections. Lack of actual fields or unsupported bundled boundary remains incomplete. | Original exchange units; seconds; m2*h; bytes*h; provider hours; m2; kg*km or m3*km separately | Before scope selection then each interval/event/lifetime revision | All present and historical beneficiary periods | Entire route support including landlord/shared and contracted operations | per reference flow | Signed full constituent boundaries, calibration/reservation logs, all-beneficiary denominators and exact-source overlap audit |
| cp_support_waste | residual | packaged_waste | Support-source completion register | object_id; model; BOM; site_id; period; presence_absence; original_source_id; lifecycle_stage; provider_scope; attribution_level; final_owner; original_pool; source_version; raw_numerator; normalized_z; original_D; exchange_identity; property; unit; actual_e_recorded_h; expected_L; actual_E; f_old_h; f_new_h; V_old; V_new; delta; historical_beneficiary_id; source_H_j; endpoint_s_hj; event_id; processing_seconds_hj; processing_seconds_all_j; w_hj; capture_map_version; footprint_m2; coverage_h; footprint_m2_i_h; coverage_h_i_h; sum_all_h_footprint_coverage_m2h_i; w_i_h; capture_source_numerator_i; stored_bytes_i; retention_h_i; sum_all_i_storage_bytehours; storage_bytehours_i_h; capture_source_id; stored_bytes; retention_h; cleaned_area_pool_m2; cleaned_area_all_m2; trip_id; segment_id; segment_distance; source_mass; all_load_mass; source_volume; all_load_volume; binding_capacity_evidence; empty_distance; idle_seconds; reserved_capacity; all_reserved_capacity; source_trip_numerator_j; driver_j_o; sum_all_o_driver_j_o; owner_fraction_o_h; constituent_overlap_ids; supplier_dispatch_vector_id; supplier_dispatch_scope; supplier_transport_included_segment_ids; verified_segment_vector_id; receiving_segment_id; inbound_F_raw_row; inbound_S_raw_row; omission_reason | Audit every actual support object and provider contract before modelling, then record every interval/event and all historical asset exposures. Site technician and provider validate scope, absence and meter boundaries; measure reserved times and area with traceable clocks/surveys, actual transport capacity and dispatch, byte counters and event processing logs. Freeze camera capture map at capture; keep denominator provenance and versioned corrections. Lack of actual fields or unsupported bundled boundary remains incomplete.  This residual-process view shares identical original ledgers/record IDs for QA; never repeat measurement or normalization.| Original exchange units; seconds; m2*h; bytes*h; provider hours; m2; kg*km or m3*km separately | Before scope selection then each interval/event/lifetime revision | All present and historical beneficiary periods | Entire route support including landlord/shared and contracted operations | per reference flow | Signed full constituent boundaries, calibration/reservation logs, all-beneficiary denominators and exact-source overlap audit |
| cp_identity | retail | failed_pack; operating_ac; service; goods_handover; supplier_return; transfer_out; external_failure | Identity and background verification record | row_id; actual_object; actual_state; flow_type; UUID; official_name_en; official_name_zh; property_UUID; unitgroup_UUID; reference_unit; compartment; receipt_hash; original_hash; observed_state; source_boundary; quantity_method; unresolved_condition | Direct-read the official original and matching receipt, recompute hash and inspect exact bilingual object/type/property/unit/compartment for each actual row; confirm matched quantity and supplier/treatment background. | Identity fields and exact exchange unit | Before binding and on identity/source revision | Dataset evidence version | Actual supplier/receiver and selected row | per reference flow | Official original bytes and independently recomputed matching integrity receipt |
| cp_identity_waste | residual | packaged_waste | Identity and background verification record | row_id; actual_object; actual_state; flow_type; UUID; official_name_en; official_name_zh; property_UUID; unitgroup_UUID; reference_unit; compartment; receipt_hash; original_hash; observed_state; source_boundary; quantity_method; unresolved_condition | Direct-read the official original and matching receipt, recompute hash and inspect exact bilingual object/type/property/unit/compartment for each actual row; confirm matched quantity and supplier/treatment background.  This residual-process view shares identical original ledgers/record IDs for QA; never repeat measurement or normalization.| Identity fields and exact exchange unit | Before binding and on identity/source revision | Dataset evidence version | Actual supplier/receiver and selected row | per reference flow | Official original bytes and independently recomputed matching integrity receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_goods | failed_pack; service; goods_handover; supplier_return; transfer_out; external_failure | Q=count(distinct final_valid_original_ids); N_F=sum(F_o); N_customer=initially_accepted_physical_handover_count; N_supplier=supplier_handoff_count; N_transfer=transfer_handoff_count; N_external=never_accepted_physical_handover_count; gross_customer_handover_count=initially_accepted_physical_handover_count+never_accepted_physical_handover_count with disjoint event IDs. Goods-only balance: opening_goods_count+receipt_count+physical_customer_return_count-gross_customer_handover_count-supplier_handoff_count-transfer_handoff_count-condemnation_count-confirmed_missing_goods_count-closing_goods_count=signed_goods_residual. A revoked status alone adds no movement. b_source conservation is separate; service=1 Item(s) and other cards use their raw N/Q once. | final_valid_original_ids; revoked_original_ids; never_accepted_handover_ids; financial_only_adjustment_ids; F_o; S_o; T_o; O_o; opening_goods_count; receipt_count; physical_customer_return_count; gross_customer_handover_count; initially_accepted_physical_handover_count; never_accepted_physical_handover_count; externally_retained_unaccepted_original_ids; supplier_handoff_count; transfer_handoff_count; condemnation_count; confirmed_missing_goods_count; closing_goods_count; signed_goods_residual; N_external; Q | N_F; Q; N_customer; N_supplier; N_transfer; N_external; signed_goods_residual |  |
| c_energy | operating_ac | n_j=measured_kWh_j*driver_pool_j/sum_all_beneficiary_drivers_j under a_energy; AC_MJ=3.6*sum(n_j); final=AC_MJ/Q. | measured_kWh_j; driver_pool_j; sum_all_beneficiary_drivers_j; n_j; AC_MJ; Q; cp_energy | AC_MJ/Q |  |
| c_waste | packaged_waste | dispatch_kg=sum(gross_kg-tare_kg) of actual accepted dispatches, final=dispatch_kg/Q. Independent held-waste balance in kg: opening_held_waste_kg+condemned_measured_kg+actual_waste_received_kg-actual_waste_returned_kg-dispatch_kg-confirmed_missing_waste_kg-closing_held_waste_kg=signed_waste_residual. Condemnation_count is never kg; no stock subtraction from directly measured dispatch. | gross_kg; tare_kg; dispatch_kg; opening_held_waste_kg; condemned_measured_kg; actual_waste_received_kg; actual_waste_returned_kg; confirmed_missing_waste_kg; closing_held_waste_kg; signed_waste_residual; Q; cp_waste | dispatch_kg/Q; signed_waste_residual |  |
| c_support | all inventory rows | Apply a_asset to actual_e_recorded_h/expected_L and at final retirement actual_e_recorded_h/actual_E, replacing every historical fV. Apply a_digital source_H_j*endpoint_s_hj/sum_all(endpoint_s_hj), processing_seconds_hj/processing_seconds_all_j and frozen capture map to byte-hours. Apply a_transport only at missing attribution levels and b_completion cleaned_area_pool_m2/cleaned_area_all_m2. Retain raw exchange numerators and exact source/owner/pool/version before c_complete; no denominator choices are delegated. | actual_e_recorded_h; expected_L; actual_E; f_old_h; f_new_h; V_old; V_new; source_H_j; endpoint_s_hj; processing_seconds_hj; processing_seconds_all_j; w_hj; capture_map_version; footprint_m2; coverage_h; footprint_m2_i_h; coverage_h_i_h; sum_all_h_footprint_coverage_m2h_i; w_i_h; capture_source_numerator_i; stored_bytes_i; retention_h_i; sum_all_i_storage_bytehours; storage_bytehours_i_h; stored_bytes; retention_h; cleaned_area_pool_m2; cleaned_area_all_m2; segment_distance; source_mass; all_load_mass; source_volume; all_load_volume; binding_capacity_evidence; empty_distance; idle_seconds; reserved_capacity; all_reserved_capacity; source_trip_numerator_j; driver_j_o; sum_all_o_driver_j_o; owner_fraction_o_h; attribution_level; final_owner; original_pool; source_version; cp_support | Raw attributed support exchange numerators; complete historical replacement deltas |  |
| c_complete | all inventory rows | Per identical exchange identity/direction/type/property/unit and exact original pool/version, restore a normalized external module normalized_z by normalized_z*its evidenced original_D; already raw modules remain raw. First supply any missing trip->source->final-owner attribution under a_transport/a_asset/a_digital. Recover raw core numerators (N_F for dispatch manufacturing/original packing only, AC_MJ, physical N and dispatch_kg) from original ledgers, not a second already divided value. The core contains no F inbound-transport numerator: require its separately attributed inbound_F_raw_row from actual transport sources/cards under b_gate/a_transport, then include it once in disjoint external_raw_row. Record any matched supplier-bundled segment once in that completion and remove it from dispatch B_o; unresolved separation blocks completeness. final_row=(raw_core_row+sum(disjoint attributed external_raw_row))/Q. Compare actual constituent/event/time/asset/lifecycle scope to deduplicate exact original sources; distinct provider IDs alone do not prove independence. No kg+MJ, no raw+normalized, no double F, no omitted core. Record S dispatch manufacture/original packing sum(S_o*B_o)/Q and separately attributed inbound_S_raw_row/Q only in the separate GOODS system outside this service. | raw_numerator; normalized_z; original_D; exchange_identity; property; unit; original_source_id; attribution_level; final_owner; original_pool; source_version; constituent_overlap_ids; supplier_dispatch_vector_id; supplier_dispatch_scope; supplier_transport_included_segment_ids; verified_segment_vector_id; receiving_segment_id; inbound_F_raw_row; inbound_S_raw_row; N_F; AC_MJ; N_customer; N_supplier; N_transfer; N_external; dispatch_kg; S_o; B_o; Q; cp_support | Compatible complete rows per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_scope | all inventory rows | Require real branch channel, lot/configuration/BOM and all route presence/absence gates; no complete claim from a website or this partial core. | Signed branch/stock/receipt and cp_support scope audit. |
| q_lineage | all inventory rows | Retain original event/source identities, same-unit allocation totals, every historical asset replacement and provider constituent overlap proof. Investigate signed residuals without zero clamp or automatic environmental credit. | cp_goods; cp_energy; cp_waste; cp_support signed version ledgers. |
| q_bind | all inventory rows | Unresolved flow identities require row-specific quantity and matched supplier/treatment-boundary completion under v_identity before characterized use. Scientific review and translation review are separate gates. | cp_identity direct originals/receipts; independent methodological and bilingual review. |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | Every unbound row requires a fresh direct official identity read before a characterized dataset: verify exact object/state, input/output Product/Waste type, official bilingual names, property/unit chain, qualifiers, treatment boundary and environmental compartment if relevant. cp_identity records actual source/receipt hash. Historical AC identity establishes only unspecified point-of-use AC and the verified energy chain, not a local supply mix. No marketing/source/standard UUID may become a flow binding. |  |
| v_account | all inventory rows | Require cp_goods source conservation, distinct final-valid Q, goods-count and held-waste-kg balances, actual state-specific recipient evidence and c_complete compatible row aggregation. Confirmed missing goods/waste are separate from signed unexplained residuals; neither becomes fictional treatment. Unknowns, zero Q, unmatched mass/property, incomplete provider coverage or omitted actual module prohibit a complete claim. |  |
| v_qa | all inventory rows | Named store inventory owner signs each cohort, site energy technician signs meter hierarchy/calibration and circuit scope, supplier signs configuration/BOM/LCI, receiving/treatment providers sign physical state/scope and reviewer independently reconciles original IDs and all versions before delivery. Record data periods, sampling coverage, meter uncertainty/resolution, missing intervals and measured reconciliation residual without invented acceptance thresholds. Any unmet route gate remains unavailable rather than zero. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Candidate incremental retail-service dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Only exact declared narrow route after actual binding/measurement; complete claim only after b_completion |
| excluded_use | Whole CPC leaf, cabinet production/function, delivery/installation, whole-business claim from partial core |
| required_metadata | Configuration/BOM, branch evidence, pool/Q, original source/version/correction ledgers, support boundaries and all unresolved fields |
| required_quality_disclosure | Partial/incomplete modules, identity observations, uncertainty, missingness, zero pools and methodological review state |
| update_trigger | Any configuration/channel/state change, late acceptance event, supplier boundary or lifetime/module revision |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62183 | official_guidance | UNSD CPC3.0 62183, explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62183 ; retrieved 2026-10-30 | Classification scope only; not methodology approval |
| hon-pricer | handbook | HON 2026 Workspaces Pricer, printed pp699–700 / PDF pp738–739; https://res.cloudinary.com/hni-corporation/image/upload/v1693390891/HON/Marketing%20Resources/hon.com/Files/HON-Workspaces-Pricer.pdf ; retrieved 2026-10-30 | H314 dimensions, lock/finish options and listed supplied components only; no supplier LCI/actual BOM or field quantity |
| hon-storage | handbook | HON Metal Storage Lookbook, PDF pp5,9; https://res.cloudinary.com/hni-corporation/HON/Marketing%20Resources/hon.com/Files/hon-metal-storage-lookbook.pdf ; retrieved 2026-10-30 | Steel welded-case office vertical file identity and intended office use; not measured emissions, actual contents or safety approval |
| ghg-product | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard (2011), chapter6 printed pp28–31 and chapter9 printed p63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General service unit-of-analysis, subdivision and physical allocation principles; specific retail equations are declared PCR collection methods, no complete-standard conformity claim |
