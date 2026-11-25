---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-construction-materials-and-flat-glass
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Pickup retail services for original-size clear annealed float-glass panes

## 1. Scope and Applicability

Applies to a prospectively defined manual rack and customer-collection route in an actual mixed-assortment store. This partial incremental core supplies complete glass custody, breakage responsibility, attributable electricity, additional kraft interleaf and rack lifecycle methods; mandatory support completion is specified below. Supplier specification establishes product feasibility, not LCI values or safe-use approval.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-construction-materials-and-flat-glass |
| classification_refs | CPC 3.0 62161; narrower |
| covered_products | Same-SKU uncut clear uncoated annealed monolithic float-glass retail service |
| excluded_products | Other building materials; processed glass; retailer cutting/delivery/installation |
| representative_product | Pickup retail services for original-size clear annealed float-glass panes; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Receipt; manual dry rack holding; intact pickup; final acceptance and fate reconciliation |
| market_state | Solid glass sheet, ambient dry state, edge/packaging specification declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Incremental retail custody and intact customer collection |
| How much | 1 kg |
| How well | Exact homogeneous SKU, final valid acceptance against declared edge/surface/dimension specification |
| How long or cycle | Declared receiving-to-final-acceptance cohort including late corrections |
| reference_flow_link | glass_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Retail service for customer-collected uncut clear annealed float glass |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU; manufacturer/lot; composition; actual dimensions/thickness/net kg; surface/edge acceptance; packaging; site mixed assortment; manual route; cohort and revision; provider geography/year; partial modules and completion |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_glass | glass_service; failed_original_glass; glass_cullet; supplier_glass_transfer; external_damaged_glass | Mass | kg | Actual glass net mass excludes interleaf, cradle and crate. Nominal thickness/area is not measured mass. Per reference flow equals per 1 kg service output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplier glass physically received, original background provenance retained |
| starting_condition_role | retail_service |
| product_classification_scope | CPC 3.0 62161 narrower |
| recursive_input_rule | Do not recursively input the same reference retail service or misidentify glass merchandise as that reference service. The failed_original_glass B_F/Q Product input remains mandatory and carries original production plus inbound transport. |
| upstream_dataset_requirement | Original production/inbound vector partitioned S/F/T/O; F input explicit |
| disclosure | Partial core and mandatory support completion; all unresolved identities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| scope_gate | glass_service | Admit one actual homogeneous SKU per pool: clear uncoated monolithic annealed float glass, supplier-cut rectangular stock sheets at original receiving dimensions, unchanged through sale. Record manufacturer/lot, composition declaration, measured net kg and length/width/thickness, edges, packaging and acceptance specification. Different thicknesses, sizes or treatments require separate pools. Non-specialized means evidenced mixed merchandise assortment; brand licensing is irrelevant. Other construction materials, mirrors, glass fibre, coated/toughened/laminated/insulating glass, cutting, grinding, installation and retailer delivery are outside this route. | un-cpc30-62161; guardian-clear-2021; guardian-types-2019 |
| service_gate | glass_service | Start at physical retailer receiving gate; end at documented customer collection and final valid acceptance of intact specified sheets. This is incremental retail service per 1 kg finally accepted glass, not glass production. The customer owns use/installation and post-handover transport. Record defects, failed pickup and acceptance revocation even without physical return. Discount/refund alone does not revoke acceptance. Repeated handovers of the same original sheet cannot create duplicate final-valid service. | jrc-retail-2013 |
| goods_responsibility | failed_original_glass | For each original source lot partition receiving-gate-equivalent glass kg B = B_S+B_F+B_T+B_O with unique source IDs. S finally accepted retains goods production plus inbound transport for downstream addition B_S/Q. F irrecoverably failed/lost and without continuing named owner is included as failed_original_glass B_F/Q with its original production and inbound transport vector. T transfers the SAME original vector to a signed supplier/external owner or internal use; O remains open inventory. A refund alone cannot move responsibility. Revise original pool on late returns; replace prior vectors, never add production again for resale. Only supplier_glass_transfer, external_damaged_glass and customer_kraft are non-characterized custody satellites. glass_cullet and waste_kraft are treatment-only waste outputs with actual collection/transport/treatment responsibility; never remove their treatment as satellites. None gives a new manufacture burden or avoided-production credit. | jrc-retail-2013 |
| route_presence | all inventory rows | Require observation and invoices proving no retailer glass cutting, wet processing, on-site combustion, refrigeration or motorized handling in this manual rack/pickup core. Unknown is not zero. Breaking during storage is included, not a cutting yield. Actual additional materials/operations need state-specific atomic cards/protocols in both languages and sync before completion; powered handling or cutting requires a separately reviewed route. | jrc-retail-2013 |
| package_boundary | glass_rack_package | The complete actual reusable glass A-frame rack package includes frame, pads, fasteners and initial finish, manufacturing/installation, evidenced maintenance and terminal treatment in one signed lifecycle model. Exclude operations electricity and merchandise/original shipping packaging. An evidenced complete rack is not steel kg. If package coverage cannot be demonstrated, completion is blocked until disjoint component/event modules replace it. No second rack acquisition or retirement waste exchange beside this package. | jrc-retail-2013 |
| support_completion | glass_service | Mandatory support modules cover building/fixed lamps and signs, checkout/IT/network and payment processing, security, store administration, cleaning/sanitation, HVAC, original shipping packaging/crates/returnable stillages, retailer-added paper supply, and all actual asset/repair/waste/empty-return transport. Prove occurrence/nonoccurrence by dated site walkthrough, contracts, meters, invoices, equipment ledger and consignment records; missing evidence is not zero. Core lighting and rack package are specifically isolated; include remaining actual support under support_drivers, support_transport, cp_modules and complete_modules. Goods inward freight is already in original S/F/T/O vector; it is not a second support trip. Original supplier packaging production and terminal fates are kept outside the original glass-only vector and inside retail support; if supplier vector contains packaging, expose and remove that exact subvector once before its separate module. Complete supplier-pack package and constituent-BOM modes are mutually exclusive per original package; all body/interleaf/pads/straps/crate constituents and disposal/return coverage must match actual source. Store rack and shipping stillage are different assets. No full retail-service claim until actual module-specific atomic cards/protocols and bilingual projection are supplied for every present support exchange; these fixed methods do not make uncollected modules complete. | jrc-retail-2013 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Glass retail custody and acceptance | required | Admitted manual dry route only | foreground | glass_service |

### Process: Glass retail (`retail`)

#### Inputs

##### Product flows

###### Clear uncoated annealed float glass at retailer receiving gate, failed-original responsibility (`failed_original_glass`)

The physical exchange is specific to this card and measured under the linked protocol; the supported rules fix its attribution and provider boundary.

B_F/Q; original source production plus inbound transport only; not all receipts

- Selected flow: Clear uncoated annealed float glass at retailer receiving gate, failed-original responsibility
- Flow property / unit: Mass / kg
- Amount rule: B_F/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_glass
- Sources: jrc-retail-2013

###### Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`rack_electricity`)

The physical exchange is specific to this card and measured under the linked protocol; the supported rules fix its attribution and provider boundary.

E_MJ/Q using energy_total

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: E_MJ/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_energy
- Sources: jrc-retail-2013

###### Uncoated kraft paper interleaf newly introduced by retailer (`kraft_interleaf`)

The physical exchange is specific to this card and measured under the linked protocol; the supported rules fix its attribution and provider boundary.

P_used/Q using paper_balance; original supplier paper excluded here

- Selected flow: Uncoated kraft paper interleaf newly introduced by retailer
- Flow property / unit: Mass / kg
- Amount rule: P_used/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_paper
- Sources: jrc-retail-2013

###### Complete reusable glass A-frame rack lifecycle package for actual model (`glass_rack_package`)

The physical exchange is specific to this card and measured under the linked protocol; the supported rules fix its attribution and provider boundary.

R/Q using asset_fraction; manufacturing installation maintenance end-of-life included once

- Selected flow: Complete reusable glass A-frame rack lifecycle package for actual model
- Flow property / unit: Number of items / Item(s)
- Amount rule: R/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_assets
- Sources: jrc-retail-2013

#### Outputs

##### Product flows

###### Retail service for customer-collected uncut clear annealed float glass (`glass_service`)

The physical exchange is specific to this card and measured under the linked protocol; the supported rules fix its attribution and provider boundary.

1 kg; service through final-valid acceptance, goods vector S added downstream

- Selected flow: Retail service for customer-collected uncut clear annealed float glass
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_glass
- Sources: jrc-retail-2013

###### Intact clear annealed float-glass original sheets physically returned to supplier (`supplier_glass_transfer`)

The physical exchange is specific to this card and measured under the linked protocol; the supported rules fix its attribution and provider boundary.

supplier_handoffs/Q; non-characterized custody satellite, T owner signature required

- Selected flow: Intact clear annealed float-glass original sheets physically returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: supplier_handoffs/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_glass
- Sources: jrc-retail-2013

###### Damaged clear annealed float-glass sheets physically retained by external recipient (`external_damaged_glass`)

The physical exchange is specific to this card and measured under the linked protocol; the supported rules fix its attribution and provider boundary.

damaged_external_handoff/Q; non-characterized custody satellite; actual state and continuing owner or F required

- Selected flow: Damaged clear annealed float-glass sheets physically retained by external recipient
- Flow property / unit: Mass / kg
- Amount rule: damaged_external_handoff/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_glass
- Sources: jrc-retail-2013

###### Uncoated kraft interleaf handed to customer with glass (`customer_kraft`)

The physical exchange is specific to this card and measured under the linked protocol; the supported rules fix its attribution and provider boundary.

P_customer/Q; custody satellite; customer owns terminal treatment, paper manufacture already input

- Selected flow: Uncoated kraft interleaf handed to customer with glass
- Flow property / unit: Mass / kg
- Amount rule: P_customer/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_paper
- Sources: jrc-retail-2013

##### Waste flows

###### Clear uncoated annealed float-glass cullet dispatched from retailer (`glass_cullet`)

The physical exchange is specific to this card and measured under the linked protocol; the supported rules fix its attribution and provider boundary.

dispatched_cullet/Q; actual net dispatched kg, not condemned kg; treatment only

- Selected flow: Clear uncoated annealed float-glass cullet dispatched from retailer
- Flow property / unit: Mass / kg
- Amount rule: dispatched_cullet/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_glass
- Sources: jrc-retail-2013

###### Uncoated kraft interleaf waste separately dispatched (`waste_kraft`)

The physical exchange is specific to this card and measured under the linked protocol; the supported rules fix its attribution and provider boundary.

P_waste/Q; measured net consignment, treatment only

- Selected flow: Uncoated kraft interleaf waste separately dispatched
- Flow property / unit: Mass / kg
- Amount rule: P_waste/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: cp_paper
- Sources: jrc-retail-2013

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| direct_first | all inventory rows | Core electricity is ONLY the glass-bay lighting circuit; checkout/IT and other support electricity belong to support modules. Take interval meter readings at every lighting on/off or beneficiary-reservation change. Partition measured kWh into mutually exclusive customer-active, lit-idle, and closed/standby interval pools k; their sum equals the circuit total. The fixed driver for EACH pool is reserved lit floor-area*time d_g_k = sum_i(A_reserved_g_i*duration_i) in m2*h, measured from marked bay/aisle plans and dated reservation logs for every merchandise beneficiary. Partition common aisle area into nonoverlapping reservations before collection; include empty-but-reserved floor area. Charge unused idle/closed capacity to the beneficiaries retaining that reservation, including zero-sale/failed cohorts. No unassigned common area or unowned idle is zero: require a prospective all-beneficiary reservation schedule, or block allocation. E_g = sum_k(E_k*d_g_k/sum_b d_b_k). Dedicated glass-only circuit has fraction one only with exclusive-reservation evidence. Reconcile all beneficiaries to measured total; never mix driver dimensions or allocate a provider-already-attributed quantity again. | jrc-retail-2013 |
| prospective_pool | glass_service | Declare same-SKU/site/route cohort window prospectively; retain all failures and zero-sale subperiods. Q is distinct final-valid original-sheet net kg after revision, not gross sales revenue or repeated handovers. An entirely zero-Q pool is unnormalizable and carried visibly pending its declared follow-up; never merge configurations to hide it. Reopen original version for late events and replace all affected numerators/denominators with actual event dates. | jrc-retail-2013 |
| support_drivers | glass_service | For every actual support source first use measured dedicated records, then separate active/idle/fixed source-numerator pools with exclusive event and meter boundaries. For each pool x_g_pool = x_pool*d_g_pool/sum_b d_b_pool using the fixed same-unit drivers below; reconcile sum_g x_g_pool=x_pool and retain every idle/failed beneficiary. Checkout/payment active source is allocated by measured processing seconds per beneficiary and all failed/reversed attempts; reserved idle terminal/network/security device electricity by reserved device-capacity*h across ALL beneficiaries including closed periods. Provider-attributed transaction processing is taken unchanged with transaction/event coverage; do not reallocate it by seconds. Network active source uses actual transferred bytes only when the provider source is byte-dependent; its idle/fixed source uses reserved bandwidth*h, never bytes plus hours. Store security and administration shared fixed sources use measured reserved store floor m2*h for every merchandise beneficiary; directly timed admin tasks use actual task seconds in a separate measured source pool. Cleaning consumable/water/effluent sources use measured cleaned floor m2 per event, with formulation-origin kg separate from added water/dirt; actual wet effluent discharge is measured carrier net kg or V_discharge*rho measured at discharge, with no supply-balance deduction. HVAC operational source uses metered conditioned-zone capacity*m2*h reservations separately by same thermal zone/setting; refrigerant/combustion presence requires specific species/fuel/leak/contained-transfer cards before completeness, not generic zero. Fixed building/lamps, checkout/network/security/HVAC assets use asset_fraction replacement/final-residual equations with separate actual model and exposure unit: m2*h for building/lighting/zone plant and reserved device-capacity*h for IT/security; never pool these different dimensions. Original reusable shipping stillage uses actual reserved load-capacity_kg*h per asset including empty return/idle reservation and the same lifetime equations. One-use original packaging uses actual complete package or exclusive full BOM vector once, allocated to its actual receiving source then S/F/T/O fate with signed owner; include retained/returned/customer/waste fates, never auto-dispose on receipt. Additional retailer paper manufacturing/supply remains core first-issue P_used; support transport is added only for a proven omitted transport stage. | jrc-retail-2013 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_glass | retail | glass_service; failed_original_glass; glass_cullet; supplier_glass_transfer; external_damaged_glass | foreground_record | pool_id; original_id; supplier_lot; composition; dimensions; thickness; net_kg; packaging_tare; scale_id; acceptance; final_acceptance; event_date; receipts; customer_returns; gross_customer_handovers; supplier_handoffs; external_handoffs; damaged_external_handoff; condemned; dispatched_cullet; Goods_open; W_open; B_S; B_F; B_T; B_O; recipient; state; original_vector; inbound_transport; Goods_close; W_close; confirmed_missing_goods; confirmed_missing_waste; unresolved_goods_delta; unresolved_waste_delta; stocktake; investigation_signoff | Tag each original sheet/fragment lineage at receipt; weigh glass net excluding measured packaging/rack tare on calibrated scale, document paired lot weights if individual safe weighing is unavailable. Log every custody movement and acceptance independently. Direct waste dispatch is consignment net mass, stock balance is QA only. Actual broken external handoffs remain separate from in-store waste. No nominal area*density conversion; unknown kg blocks service denominator. Match supplier original production/inbound vector to S/F/T/O receiving-gate equivalents. Stocktake both usable and held-waste glass at opening/closing. Confirm missing quantities only through signed lineage investigation; retain unknown signed residuals and block completeness under glass_stock. | kg | Each event; meters at interval boundaries | Whole prospective pool including closures and late corrections | Named store glass bay and all actual beneficiaries | per reference flow | Dated original records; calibrated instruments; calibration uncertainty and reconciliation signed by collector |
| cp_energy | retail | rack_electricity | foreground_record | meter_id; interval_start; interval_end; interval_state; E_k; A_reserved_g_i; duration_i; d_g_k; d_b_k; reservation_owner; floor_plan; all_beneficiaries; parent_boundary; voltage; supplier_year; geography; delivery_loss_boundary | Read calibrated actual glass-bay lighting circuit meter at each state/reservation transition. Photograph marked floor/aisle areas and measure m2; record reserved beneficiary and start/end hours even if empty or store closed. Interval E_k belongs to exactly one active/lit-idle/closed-standby state. Use the same m2*h reservation driver in each measured pool under direct_first. Reconcile total to circuit and bill boundary; assign every idle reservation and include zero-sale cohorts. Checkout/payment/network/security/admin and shared-building electricity are excluded here and collected under cp_modules; no nameplate or assumed off-state consumption. Unknown scope or unassigned reservation blocks allocation. | kWh | Each event; meters at interval boundaries | Whole prospective pool including closures and late corrections | Named store glass bay and all actual beneficiaries | per reference flow | Dated original records; calibrated instruments; calibration uncertainty and reconciliation signed by collector |
| cp_paper | retail | kraft_interleaf; waste_kraft; customer_kraft | foreground_record | source_id; paper_grade; coating; net_kg; moisture_state; P_open; P_received; P_close; P_customer; P_waste; held_used_stock; dispatch_id; P_unused_transfer; P_first; U_open; U_received; U_close; U_transfer; confirmed_missing_paper; unresolved_paper_delta; first_issue_owner; first_charge_receipt; supply_transport_scope | Only actual additional uncoated kraft interleaf introduced by retailer, not supplier-original interleaf. Weigh conditioned actual material net excluding cores/wrap. Track unused, reuse, customer transfer and waste independently; contaminated/mixed waste requires specific replacement card and provider before completeness. Separate never-issued P stock from already-used U stock on each count. Link first issue to original manufacturing/supply-transport charge receipt and continuing owner; no re-charge on reuse across periods. Follow paper_balance for unused transfers, used transfers and actual final fate; unknown residual blocks. | kg | Each event; meters at interval boundaries | Whole prospective pool including closures and late corrections | Named store glass bay and all actual beneficiaries | per reference flow | Dated original records; calibrated instruments; calibration uncertainty and reconciliation signed by collector |
| cp_assets | retail | glass_rack_package | foreground_record | asset_id; model; BOM; provider_vector_version; lifecycle_scope; original_vector; occupied_kg_a_g_i; reserved_unused_kg_a_g_i; duration_h_i; e_a_g; L_a_v; H_a; f_a_g_old; f_a_g_final; V_a_old; V_a_new; repair_event; replacement_event; retirement_dispatch; all_beneficiaries; previous_allocations; usable_rated_capacity_kg; reservation_owner | Verify actual rack model/BOM, rated usable capacity and signed complete-package vector, including manufacturing/installation, actual maintenance and terminal treatment plus their transport boundaries. Each occupancy/reservation change logs time, occupied kg and disjoint unused reserved kg for every beneficiary; assign entire usable capacity including idle/closed reservation. Evidence expected lifetime exposure using dated usage history and documented retirement plan, not assumed calendar years. At repair/retirement retain old version, actual event invoices/carrier records and replacement-vector scope map; remove the superseded modeled event, update V, then execute asset_fraction across ALL previous beneficiaries. No acquisition, repair, transport or retirement may appear both inside the package and outside it. One model/identical-vector group per card; otherwise add separate bilingual cards and sync before completeness. | Item(s); kg*h | Each event; meters at interval boundaries | Whole prospective pool including closures and late corrections | Named store glass bay and all actual beneficiaries | per reference flow | Dated original records; calibrated instruments; calibration uncertainty and reconciliation signed by collector |
| cp_modules | retail | glass_service | foreground_record | module_id; module_version; normalized_j_m; original_denominator_m; source_id; core_numerator_j; B_F; B_S; original_goods_vector_S_j; Q; actual_source_event_asset; lifecycle_scope; coverage_overlap_map; active_source; idle_source; fixed_source; processing_seconds; task_seconds; transferred_bytes; reserved_bandwidth; reserved_device_capacity; floor_area_m2; conditioned_zone_capacity; reservation_duration_h; all_beneficiaries; cleaned_area_m2; cleaner_origin_kg; externally_supplied_water; V_discharge; discharge_density; actual_wet_effluent_kg; utility_meter; fuel_species; refrigerant_species; leak_record; contained_transfer; waste_consignment; packaging_mode; complete_pack_BOM; original_pack_id; S_F_T_O_owner; first_charge_receipt; stillage_asset; stillage_reserved_capacity_kg; stillage_empty_return; trip_id; segment_id; provider_mode; provider_scope; measured_load_tonnes; actual_km; reserved_payload_capacity; duration_h; empty_vehicle_km; stationary_idle_h; measured_fuel; measured_energy; source_stage_overlap; x_pool; d_g_pool; d_b_pool; asset_id; model; exposure_unit; e_a_g; L_a_v; H_a; f_a_g_old; f_a_g_final; V_a_old; V_a_new; repair_event; retirement_dispatch; previous_allocations; absence_evidence; x_transport_a_v; f_a_g_v; e_a_g_actual; x_transport_a_old; x_transport_a_new; f_a_g_new; original_pool_id; original_pool_version; Q_g; prior_transport_attribution; first_issue_owner; P_first loaded_attribution_mode; target_gross_kg; whole_vehicle_gross_kg; target_payload_kg; all_other_payload_kg; provider_reference_basis; source_attribution_level | At opening and each configuration change perform signed site walkthrough and reconcile contracts/invoices to actual building/lighting/checkout/IT/network/payment/security/admin/cleaning/HVAC assets and services; record specific absence evidence for each nonpresent item, never infer zero from no invoice alone. Read dedicated meters and timestamped active/idle/fixed events. Measure floor/zone reservations in m2 and h, task/transaction seconds, bytes/bandwidth and device-capacity reservations separately; log every beneficiary and failed/zero-sale/closed interval. Apply fixed support_drivers, not a selectable driver menu. For each original packaging source verify actual full BOM/model or signed whole-package boundary exclusively, quantities, receiving/source/fate/first-charge records and actual empty stillage returns; no added-paper double charge. Collect trip-segment odometer/load/reservation/idle-fuel evidence and inspect provider coverage under support_transport for packaging/asset/repair/waste movements. Collect waste actual net consignment and treatment boundary, including transport coverage; subtract only proven overlap. Compare actual constituent/stage/time/event maps even if provider IDs differ. Any present unknown fuel/refrigerant/effluent or missing specific support exchange requires bilingual atomic cards/protocols and normal sync before full-service completion. For each asset/repair omitted transport trip, record asset_id, original transport-vector scope and prior attribution, and restore its historical asset exposure ledger. Apply support_transport to asset raw numerator, then asset_fraction exactly once; post replacements/deltas to original pool/version and revised Q_g. Check V-contained transport and prior historical allocation before any addition. Link paper supply to first-issue owner/P_first and packaging transport to original_pack_id/source ownership; reconcile receipt stock records to first-charge receipts without a second supply charge. | source-specific | Each event; meters at interval boundaries | Whole prospective pool including closures and late corrections | Named store glass bay and all actual beneficiaries | per reference flow | Dated original records; calibrated instruments; calibration uncertainty and reconciliation signed by collector |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_mass | glass_service | Q = sum of measured net kg of distinct final-valid original sheets in pool; acceptance revocations reclassify original IDs, do not subtract twice. Gross handovers/returns are separate physical events. | original_id; net_kg; final_acceptance; event_date; pool_id | Q | jrc-retail-2013 |
| glass_stock | glass_cullet | Goods_close = Goods_open+receipts+customer_returns-gross_customer_handovers-supplier_handoffs-external_handoffs-condemned-confirmed_missing_goods+unresolved_goods_delta; W_close = W_open+condemned-dispatched_cullet-confirmed_missing_waste+unresolved_waste_delta. All terms kg with disjoint movement IDs. Confirmed missing kg needs dated stocktake, original lineage and investigation signoff; it receives F original-source responsibility absent a signed continuing T owner, but is never invented as dispatched waste. Missing held waste retains its already assigned original F responsibility and never creates a second original manufacturing input. Unknown signed residual deltas are disclosed, investigated and block completeness, never default zero or automatically classified F. gross_customer_handovers includes all customer exits including damaged/unaccepted; external_handoffs only noncustomer nonsupplier exits. damaged_external_handoff tags a subset, not another subtraction. Condemnation moves goods to held waste internally; dispatch removes held waste once. | Goods_open; receipts; customer_returns; gross_customer_handovers; supplier_handoffs; external_handoffs; damaged_external_handoff; condemned; W_open; dispatched_cullet; confirmed_missing_goods; confirmed_missing_waste; unresolved_goods_delta; unresolved_waste_delta; stocktake; investigation_signoff; original_id | Goods_close; W_close; unresolved_goods_delta; unresolved_waste_delta | jrc-retail-2013 |
| energy_total | rack_electricity | For interval source pools fixed by direct_first, E_g_k = E_k*d_g_k/sum_b d_b_k with E_k measured kWh and d_g_k measured m2*h reserved lighting exposure. E_MJ = 3.6*sum_k E_g_k. All state pools and beneficiaries reconcile to total meter kWh. Nested subtraction only with actual parent inclusion; disjoint meters are never subtracted. Then E_MJ/Q once. | meter_id; interval_state; E_k; A_reserved_g_i; duration_i; d_g_k; d_b_k; parent_boundary; all_beneficiaries; Q | E_MJ/Q | jrc-retail-2013 |
| asset_fraction | glass_rack_package | Retain one actual rack a per card, or aggregate only identical model/BOM, complete lifecycle scope and identical provider-vector version; unequal rack models or vectors require separate atomic cards. For each asset ledger, interval e_a_g = sum_i((occupied_kg_a_g_i+reserved_unused_kg_a_g_i)*duration_h_i), with occupied and unused reservations disjoint and all rated usable capacity assigned to actual beneficiaries even idle/closed. L_a_v is evidenced expected total lifetime exposure in the same kg*h and must be at least accumulated all-beneficiary exposure; unknown/zero L blocks. f_a_g_v = e_a_g/L_a_v; R = sum_a f_a_g_v only within the identical group. At retirement H_a = sum_g e_a_g_actual, f_a_g_final = e_a_g_actual/H_a; residual r_a = 1-sum_g f_a_g_old; delta_a_g = f_a_g_final-f_a_g_old, with sum_g delta_a_g=r_a and sum_g f_a_g_final=1. Replace every prior beneficiary record by new numerator f_a_g_new*V_a_new, recording delta vector f_new*V_new-f_old*V_old, never adding a second whole asset. Actual dated repair/replacement and terminal dispatch update the complete package vector V_a_new and replace modeled events of the same scope; recalculate all history, including retired/zero-output beneficiaries. Different resulting provider vectors remain separate cards. End-of-life transport/carrier and maintenance already inside V are not separate foreground exchanges. | asset_id; model; BOM; provider_vector_version; occupied_kg_a_g_i; reserved_unused_kg_a_g_i; duration_h_i; e_a_g; L_a_v; H_a; f_a_g_old; f_a_g_final; V_a_old; V_a_new; repair_event; retirement_dispatch; all_beneficiaries; previous_allocations | R; delta_a_g; revised_asset_numerators | jrc-retail-2013 |
| complete_modules | glass_service | For each identical exchange identity/property/unit j, restore support module raw numerator u_j_m = normalized_j_m*original_denominator_m and attribute once under support_drivers. Complete retail-service numerator T_j = core_numerator_j+sum_m u_j_m, including core F/AC/paper/rack and disjoint support; complete_retail_j = T_j/Q. B_S is excluded from BOTH partial and complete retail-service. Only a separately declared downstream GOODS system uses goods_system_j = (T_j+original_goods_vector_S_j)/Q. original_goods_vector_S_j is the original receiving-gate vector weighted by B_S; inbound goods freight is already in that vector. Never add S to retail or twice to a downstream system. Compare actual physical source/event/asset, process interval, constituents and lifecycle-stage coverage for every module pair even when IDs differ. Remove proven overlapping subvector once with signed coverage/quantity map; differing IDs do not establish disjointness. Unknown nonseparable overlap blocks assembly. Preserve original source IDs, raw denominator/pool/version; never sum unlike units or add F twice. Omitted asset/repair transport under support_transport enters the historical pool g already assigned by the SAME asset lifetime ledger, using that pool revised Q_g; correction deltas replace that original pool version, not the current pool. Already lifetime-attributed transport and V-contained transport receive no second lifetime multiplier or duplicate module. | normalized_j_m; original_denominator_m; source_id; core_numerator_j; B_F; B_S; original_goods_vector_S_j; allocation_driver; module_version; coverage_overlap_map; Q; original_pool_id; original_pool_version; Q_g; prior_transport_attribution | complete_retail_j; goods_system_j | jrc-retail-2013 |
| paper_balance | kraft_interleaf | P_open and P_close contain ONLY never-issued unused retailer-added paper source stock. P_first = P_open+P_received-P_close-P_unused_transfer, with independently measured unused returns/transfers P_unused_transfer; charge its manufacturing and supply transport once at first issue: P_used = P_first. Already-used opening stock U_open is not P_open. U_close = U_open+P_first+U_received-P_customer-P_waste-U_transfer-confirmed_missing_paper+unresolved_paper_delta; all destinations disjoint, reuse within custody is internal and cancels. Each used-paper source retains its signed first-issue manufacturing owner across pools; later reuse adds only actual new handling burden, never repeats manufacturing or avoided-production credit. Custody transfer includes source/first-charge receipt, and actual terminal treatment belongs to its dispatching pool or signed customer owner. Unused transfer keeps original background with the continuing owner, not first-use input. Unknown residual blocks completion. Divide final corresponding row numerators by Q once. | P_open; P_received; P_close; P_unused_transfer; P_first; U_open; U_received; U_close; P_customer; P_waste; U_transfer; confirmed_missing_paper; unresolved_paper_delta; first_issue_owner; first_charge_receipt; source_id; Q | P_used/Q; P_customer/Q; P_waste/Q; U_close | jrc-retail-2013 |
| support_transport | glass_service | Use one mutually exclusive provider mode per actual trip/segment: (A) take an already-attributed complete consignment transport amount with proof it covers actual loaded, empty-return and stationary idle portions; do not multiply another allocation fraction. (B) collect loaded activity under the exclusive target_consignment or unassigned_vehicle modes defined below; reserved payload-capacity*time applies only to a matching unassigned whole-vehicle source vector. For empty vehicle segments use actual vehicle*km, and for stationary engine/equipment idle use actual h and measured fuel/energy, each with its own matching provider, allocated by same-unit reserved payload-capacity*time over that segment; never zero tonne*km as empty-trip evidence. Include empty shipping-stillage return reservation. Do not sum unlike driver units or activity units. Verify payload, empty and idle provider boundaries are disjoint, or remove exact overlapping fuel/energy/source stage once; unknown provider coverage blocks completion. Goods inward freight is charged solely with original goods vectors; packaging/asset/repair and waste transports are charged once in their actual package/treatment or explicit omitted-stage module. Apply complete_modules after actual source attribution. For an omitted asset/repair transport stage, trip attribution first assigns the raw transport source numerator to actual asset_id, x_transport_a; then the SAME asset ledger assigns x_transport_a_g_v = x_transport_a_v*f_a_g_v using its existing e_a_g/L_a_v or final e_a_g_actual/H_a. Return each attributed raw numerator to its ORIGINAL beneficiary pool g and divide by that pool revised Q_g only in complete_modules; never charge an asset retirement/repair trip wholly to current Q. A transport-vector revision replaces every original-pool numerator with x_transport_a_new*f_a_g_new and books delta x_transport_a_new*f_a_g_new-x_transport_a_old*f_a_g_old back to that original pool and version, with historical denominator corrections. If transport is already inside V_a, it follows the V_a replacement and is NOT an omitted-stage addition. If a provider quantity already belongs to a historical beneficiary, retain that attribution and do not multiply f again. Retailer-added paper omitted supply transport follows its first-issue manufacturing owner and P_first quantities under paper_balance; receipt is stock evidence, not a second charge. Original packaging omitted transport follows the SAME original package/source and its signed S/F/T/O or returnable-asset lifetime ownership, with prior attributed stages preserved. No receiving-pool charge followed by a repeated consumption-pool charge. Loaded t*km has exclusive modes: target_consignment=measured target_gross_kg*segment_km/1000, with NO further shared fraction; unassigned_vehicle=whole_vehicle_gross_kg*segment_km/1000*(target_payload_kg/whole_vehicle_gross_kg), only for a compatible mass-based provider with complete same-segment actual payload reconciliation and positive denominator. A provider exact target quantity stays unchanged. Reserved payload-capacity*time allocates only an otherwise unallocated WHOLE-VEHICLE source vector or the separately measured empty/idle source, not target-consignment t*km. Different provider activity/property units need actual separate atomic cards; never rename a vehicle-km vector as target t*km. Record loaded_attribution_mode and provider_reference_basis; the loaded mode must match its actual source and provider basis. | trip_id; segment_id; provider_mode; provider_scope; measured_load_tonnes; actual_km; reserved_payload_capacity; duration_h; all_beneficiaries; empty_vehicle_km; stationary_idle_h; measured_fuel; measured_energy; source_stage_overlap; original_vector_scope; Q; asset_id; x_transport_a_v; f_a_g_v; e_a_g_actual; x_transport_a_old; x_transport_a_new; f_a_g_old; f_a_g_new; e_a_g; L_a_v; H_a; original_pool_id; original_pool_version; Q_g; prior_transport_attribution; first_issue_owner; P_first; original_pack_id; S_F_T_O_owner | attributed_transport_raw_sources | jrc-retail-2013 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_mass | glass_service | No area/nominal thickness mass surrogate; calibrated net weights and exact same-SKU continuity mandatory. | Traceable primary ledgers and signed boundary reconciliation |
| quality_fates | glass_cullet | Waste treatment provider must accept actual clear-glass cullet contamination/state; weigh dispatch net and separately track container. No assumed recycling credit. | Traceable primary ledgers and signed boundary reconciliation |
| quality_module | glass_service | Partial core must be labelled partial until support_completion and complete_modules are evidenced, including original packaging and fixed lighting capital. | Traceable primary ledgers and signed boundary reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_identity | all inventory rows | No completeness claim until each row has verified exact physical identity, property/unit chain, provider boundary and original quantity evidence. An absent UUID remains an identity gap. Electricity UUID specifies AC only: collect voltage, supplier/year/geography and delivery/loss boundary. No environmental factors, densities, lifetimes or loss rates are defaulted. | jrc-retail-2013 |
| reconcile | glass_service | Close glass goods and held-waste balances separately; reconcile responsibility partition, packaging fate, all supplier/provider boundaries, meter pools and final-valid IDs. Include outside damaged retention with actual state/recipient, not assumed waste. Confirm no double source, no area-as-mass substitution, no cutting route leakage, and complete_modules before a full-service claim. Unknowns block completeness. | jrc-retail-2013 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | partial_incremental_retail_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching SKU and route only; full-service use after completion |
| excluded_use | Cutting, manufacturing, full leaf equivalence, safe-glazing approval or uncompleted whole-store claim |
| required_metadata | All reference qualifiers, source ownership, support boundaries and original denominator/version |
| required_quality_disclosure | Calibration/uncertainty, missing identity/provider, zero-Q pools and partial status |
| update_trigger | SKU/pack/route/provider/lifetime/acceptance change or late return |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc30-62161 | official_guidance | UNSD CPC Version 3.0 explanatory note https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62161 | Classification context only; narrower glass subset |
| guardian-clear-2021 | handbook | Guardian Clear Float Glass, ©2021, https://www.guardianglass.com/content/dam/guardianindustriesholdings/collateral/apac/Clear%20Float_English%20version.pdf | Stock sheet and further fabrication distinction, not LCI quantities or generic density |
| guardian-types-2019 | handbook | Guardian Residential Glass Technical Reference Guide, PDF page7 / printed5, https://www.guardianglass.com/content/dam/guardianindustriesholdings/collateral/usca/technical_climaguard_us_technical-reference-guide_0619.pdf | Annealed float glass versus heat-strengthened and tempered states; no strength factor adopted |
| jrc-retail-2013 | official_guidance | JRC Best Environmental Management Practice in the Retail Trade Sector, 2013 EUR25998EN, https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail supply chain, electricity, packaging/waste and logistics relevance; equations and partial boundary are explicit PCR design using foreground records, no benchmark or conformity claim |
