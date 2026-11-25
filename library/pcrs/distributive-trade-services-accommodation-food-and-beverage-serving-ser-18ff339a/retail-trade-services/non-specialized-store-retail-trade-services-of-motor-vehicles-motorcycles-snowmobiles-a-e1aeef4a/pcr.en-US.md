---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-motor-vehicles-motorcycles-snowmobiles-a-e1aeef4a
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Mixed-assortment store retail service for new complete CURT 45036 loaded ball-mount units

## 1. Scope and Applicability

This candidate covers attended physical-store sale and store pickup of one homogeneous, new and unused, complete CURT 45036 original supply configuration. The original assembled ball mount has a factory-torqued 2-inch ball, 2-inch receiver shank, 2-inch drop, and original pin and clip. The actual supplier-lot packaging, closure, included instructions and all attached components define the indivisible original unit. This is a vehicle towing accessory of goods group 491, interpreted under 4912/49129, not a motorcycle, snowmobile, generic metal fitting or entire vehicle. UNSD 62181 expressly names goods groups 491 and 492; its broad title alone does not admit other goods. Runnings lists the same manufacturer SKU and UPC with store pickup and documents clothing, tools, pets and automotive departments: mixed assortment, not merely multiple brands. Applicability requires records for the actual physical store, not a website-wide assumption.

Route gates: start at identified supplier dispatch of the actual received units (upstream responsibility is preserved below); retailer custody begins at receiving inspection. Record identity, completeness, unused condition, actual pack mass and configuration; quarantine mismatches. Hold on the actual shelf, pick, scan, authorize payment and hand over the complete original unit. End at final valid customer acceptance after the prospectively declared return-observation window, with later corrections retained. Refusal, payment failure, returned/reversed handover, confirmed loss, supplier return and internal transfer are distinct histories. No assembly, installation, retorque, trial towing, demonstration, resale of used units, opened/repacked component sales, delivery to home or customer driving is covered. Manufacturer capacities identify the model only; this PCR grants no compatibility, safety, regulatory or conformity approval. Manufacturer 7-1/2-inch length differs from the retailer 8-1/4-inch description; lot drawing, actual markings and measured geometry must resolve identity before use. Shipping weight is not measured product or waste mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-motor-vehicles-motorcycles-snowmobiles-a-e1aeef4a |
| classification_refs | CPC 3.0 62181; narrower |
| covered_products | New complete original CURT 45036 loaded ball-mount unit; original actual supply configuration only |
| excluded_products | Other SKUs; used or opened units; installation/repair/demo/trial towing; home delivery; entire vehicles; loose ball/pin sales |
| representative_product | CURT 45036; UPC612314005345; Runnings10350258 |
| production_route | Supplier dispatch -> physical mixed-store receiving/holding -> attended checkout/store pickup -> final acceptance |
| market_state | New unused complete original unit, no installation or use; actual lot-pack verification required |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Retail service for one new complete CURT 45036 original unit |
| How much | 1 Item(s) |
| How well | Exact actual supplier configuration accepted complete, unused and identity-matched by the customer |
| How long or cycle | One original-unit first retail ownership cycle, with observation window and later corrections |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Retail service for one new complete CURT 45036 original unit |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual store and mixed assortment; original lot and SKU/UPC; full original component/pack configuration; unused state; physical route gates; prospective pool and return window; final-valid original IDs Q; S/F/T/O source ownership; partial-module disclosure; actual supplier/transport/treatment scope; unresolved row identities |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | retail_service; failed_original; customer_handover; supplier_handover; internal_handover | Number of items | Item(s) | One accepted service is one homogeneous original-unit ownership cycle. Keep goods count independent of kg and never use towing km or manufacturer load ratings as denominator. |
| ac_energy | alternating_current | Net calorific value | MJ | Convert measured kWh to MJ by exact factor3.6; no supplier factor or voltage is inferred. |
| carrier_mass | damaged_unit_waste | Mass | kg | Actual complete carrier gross minus actual tare; package and material state matched, no catalog shipping weight. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified original supplier dispatch; retailer custody at receiving gate |
| starting_condition_role | incremental retail service; partial core |
| product_classification_scope | CPC62181 narrower; motor-vehicle receiver-hitch accessory inference in goods4912/49129, not equivalence to trailer manufacture492 |
| recursive_input_rule | No same-category retail-service recursion; F original Product input is included under original_source; only three named physical custody output satellites are uncharacterized |
| upstream_dataset_requirement | Supplier actual original vector and inbound sources with S/F/T/O conservation; appropriate utilities, complete waste treatment and mandatory support closure |
| disclosure | Partial incremental core until fixed completion methods are implemented and atomic modules verified; no complete-store claim from these cards alone |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | retail | Admit only the scope and gates above. Receiving, complete-unit holding and counter handover are the core. Record prospectively the same configuration, site and period pool; retain closed, failed and zero-sale periods. Q is distinct final-valid original-unit IDs, at most one service per original unit; physical returns and resale do not create new original IDs. Revocation removes final validity even without physical movement; financial-only adjustment does not. Q=0 is unnormalizable and cannot be deleted or replaced by a successful period. | un-cpc-62181; un-goods-49129; runnings-channel |
| original_source | failed_original; retail_service; customer_handover; supplier_handover; internal_handover; damaged_unit_waste | At the original supplier dispatch gate retain one actual whole-unit supplier manufacturing vector V_s and a separate inbound transport source. V_s is strictly manufacture and original supply packaging through supplier dispatch and EXCLUDES inbound transport. The core failed_original input carries only that dispatch-gate vector; F inbound transport is a mandatory omitted module under partial_completion and transport_ownership. An already transport-inclusive vector is inadmissible unless supplier inventory evidence separates those exact source stages; never add it beside the same independent inbound module. Original components, coatings, fasteners, instructions and lot packaging belong to that vector; the product webpage is not LCI or complete BOM. Partition each original source exactly once into S final-valid customer ownership, F failed service responsibility (destroyed, confirmed missing or failed externally retained), T named transferred responsibility, and O continuing original stock/unresolved ownership, with S+F+T+O=1. Service excludes S manufacturing and its inbound transport; a separate GOODS system may add S once. failed_original is an actual Product input N_F/Q of whole original units carrying their matching F vectors, not a custody satellite; include confirmed lost units despite no waste. Supplier returns carry named continuing T/O ownership and actual physical handover separately. Never infer F from cash refunds. An actual component divergence requires supplier component vectors and separate atomic input cards; exclude those exact source portions from the whole-unit vector, never split environmental vectors by mass. Prohibit completeness until resolved. | curt-model |
| physical_fates | customer_handover; supplier_handover; internal_handover; damaged_unit_waste | customer_handover, supplier_handover and internal_handover are exclusively named non-characterized physical Product custody satellites; no new manufacturing background is attached there. All gross external customer handovers H include accepted and never-accepted handovers once; a later no-movement revocation only changes the original event status. Goods-count balance is G_close=G_open+R_receive+R_customer-H-R_supplier-J_internal-C_condemned-L_missing+epsilon_goods. Condemnation is goods to held-waste conversion linked by event IDs and measured kg, not waste dispatch. Held-waste balance W_close=W_open+W_generated-W_dispatch-W_transfer-W_missing_confirmed+epsilon_waste in kg. W_dispatch is directly measured consignment net carrier kg without subtracting closing stock again. W_missing_confirmed is independently confirmed missing held-waste kg; epsilon_waste is a distinct signed unexplained residual. Both require incident IDs and fate investigation; unknown receiver/treatment remains incomplete and cannot create fictional dispatch/treatment. Count cannot be inserted into kg. Failed external retention retains recipient/state and F responsibility, never fictional retailer waste. Late returns replace the original pool numerator, Q, source ownership and fates with actual event dates; do not charge a new pool again. |  |
| partial_completion | all inventory rows | These core cards are a declared partial incremental inventory, not complete store operation. Before any complete-service claim, cp_completion must activate named atomic cards with actual process/direction/Product-Waste-elementary identity, state, medium, property/unit, measured numerator, protocol, background scope and bilingual sync for every actual omitted exchange. Required closure register: building/fixed fixtures/shelf/lighting/fan/HVAC capital and operation; receiving equipment; checkout/payment hardware; ICT/network; camera/security; administration; cleaning and imported water/effluent; mastercase/receipt/bag materials and wastes; goods/asset/material/waste transport. Evidence absence by site walk, circuit/asset plans, contracts, purchase/dispatch records and responsible signoff for the full period. The admitted facility route is electric receiving/checkout with ordinary unconditioned shelf holding; only electric-resistance/fan ventilation facility support may be completed here. Verify absence of combustion and refrigerant equipment serving this beneficiary by full-period equipment/contract/maintenance records and site inspection, including forklifts, backup generators and HVAC. Presence is outside this facility route, not zero; unknown absence blocks closure. Actual leakage, broken coating or opened packaging cannot default zero: add actual state-specific material/waste/species-path cards and measured carrier balances before completeness. |  |
| waste_boundary | damaged_unit_waste | Only an actually complete, unused condemned 45036 unit with its same actual supply packaging and all original pieces may use damaged_unit_waste. Measure the whole carrier, not nominal steel or the manufacturer shipping weight. Signed receiver acceptance must cover its actual steel, plating, coating, plastic/paper packaging and state, with a matching complete collection/treatment boundary. Do not also dispatch its components on other cards. Opened, partly missing, leaking or separately dispatched packaging requires distinct atomic extensions and measured disjoint carriers. Actual Waste output is characterized by treatment; it is not a physical Product satellite and has no automatic avoided-product credit. | curt-model |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Original-unit receiving, holding and counter handover | required | Actual homogeneous unused complete units in physical mixed store; core remains partial | foreground_service | 1 Item(s); retail_service |

### Process: Original-unit retail (`retail`)

#### Inputs

##### Product flows

###### Original failed-unit background input (`failed_original`)

N_F/Q; apply source_f and original_source. Actual dispatch-gate manufacturing/original-package vector only for F complete units; excludes inbound transport and all S/T/O portions; F inbound is mandatory completion.

- Selected flow: New complete CURT 45036 original supply unit
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_F/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sources`
- Sources: curt-model

###### Receiving and checkout electricity (`alternating_current`)

N_AC/Q; apply energy_pool and subdivide_sources. AC at point of use; actual supplier/location/voltage remain required for background selection.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: N_AC/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Final-valid retail service (`retail_service`)

1 Item(s); Q/Q=1 per reference flow, using service_count.

- Selected flow: Retail service for one new complete CURT 45036 original unit
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_events`
- Sources: un-cpc-62181; runnings-channel

###### Gross customer physical handover satellite (`customer_handover`)

N_H/Q; all gross customer handovers once; physical_fates and custody_count; non-characterized custody only.

- Selected flow: New complete CURT 45036 original supply unit
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_H/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_events`
- Sources: curt-model

###### Actual supplier physical return satellite (`supplier_handover`)

N_R/Q; actual complete unused returned units; physical_fates and custody_count; T/O background continues, non-characterized custody only.

- Selected flow: New complete CURT 45036 original supply unit
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_R/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_events`
- Sources: curt-model

###### Actual internal intact-unit transfer satellite (`internal_handover`)

N_J/Q; actual complete unused units transferred out; physical_fates and custody_count; named T owner, non-characterized custody only.

- Selected flow: New complete CURT 45036 original supply unit
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_J/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_events`
- Sources: curt-model

##### Waste flows

###### Complete condemned-unit waste carrier (`damaged_unit_waste`)

N_W/Q; apply waste_dispatch and waste_boundary. Actual solid complete mixed carrier to accepted treatment; no nominal mass or avoided credit.

- Selected flow: Complete unused condemned CURT 45036 unit with original supply packaging
- Flow property / unit: Mass / kg
- Amount rule: N_W/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: curt-model

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide_sources | alternating_current; all inventory rows | Prefer disjoint direct meters and task records. For each same-unit source pool a split measured active, idle and fixed component numerators before attribution; their sum must reconcile to the parent (subtract a submeter only when contained). Allocate active receiving/scan equipment energy by metered task kWh; idle/fixed equipment, checkout and ICT sources by measured reserved device-hours of all beneficiaries including failed/empty reservations. Physical lighting/HVAC/facility fixed pools use measured served-area m2 times duration h across disjoint zones. Never add kWh, hours, m2*h, bytes or event counts as one driver. Allocate each same-unit pool q_a by e_a_c/sum_c(e_a_c), retain all periods, require positive known driver totals, then sum compatible exchange numerators. | ghg-allocation |
| asset_history | all inventory rows | Each homogeneous actual asset model/BOM/lifecycle vector V has its own lifelong ledger. Manufacturing+installation, operational utilities, event maintenance/replacements and terminal treatment are disjoint scopes; an evidenced complete package excludes its contained stages from outside modules. Building/fixtures use m2*h exposure; equipment/checkout/ICT use reserved equipment h. Reusable cleaning tools use actual cleaned surface m2 for each beneficiary; both e_recorded_h and L_expected and final e_actual_h/E_actual_all use cleaned m2 for that same tool model, never h. For each historical beneficiary pool h initially f_old_h=e_recorded_h/L_expected in that asset driver unit. e_recorded_h is the actual exposure of that original pool from calibrated measurement logs, never forecast future exposure; L_expected is the evidenced expected total lifetime exposure in the same unit; conserve all beneficiary/unused exposure, cumulative fractions<=1. On life/vector revision recompute every historical f_new_h and replace numerator by delta_h=f_new_h*V_new-f_old_h*V_old. At actual final retirement define E_actual_all=sum_all_h(e_actual_h), the measured exposure total across the complete history and every beneficiary, then f_final_h=e_actual_h/E_actual_all and apply replacement to EVERY historical pool. Never restart manufacturing or dump residual into current Q. Residual1-sum_old_f is QA, not replacement. Actual whole terminal net carrier already excludes removed parts; exclusive BOM reconstruction requires measured components, not another subtraction. Asset/repair/retirement transport first belongs to that exact asset and follows the same historical fractions/versions; already final-owner-attributed transport is not fractioned again. | ghg-allocation |
| backend_events | all inventory rows | Payment authorizations and administration batches are unique actual events j. Within each event measure source-line processing times t_j_c, freeze w_j_c=t_j_c/sum_c(t_j_c) with sum_c(w_j_c)=1 including failed attempts; allocate that event provider numerator once. Dedicated single-line events have measured share1; tagging a source is not whole-event ownership. Network provider packets use their actual single contract denominator and scope. For each unique original connection interval j measure actual reserved endpoint-connection seconds net_s_j_c by beneficiary including idle/failed reservations; w_net_j_c=net_s_j_c/sum_c(net_s_j_c), sum_c(w_net_j_c)=1 with positive known total. Apply this share to that interval provider-source numerator once, preserving original interval/pool/version. Do not count the same connection interval again or multiply it into overlapping active/idle/fixed device-electricity pools. For camera capture source j freeze a timestamped map of actual field-of-view protected/display area A_j_c_zone times coverage duration h_j_zone over disjoint zone-time, all beneficiaries and empty reservations: w_j_c=sum_zone(A_j_c_zone*h_j_zone)/sum_c_zone(A_j_c_zone*h_j_zone). Shared retention byte-hours retain this original source/version map, not later sales; GB=10^9 bytes, GiB=2^30 bytes. Provider internet access alone does not include payment, administration or security backends. |  |
| transport_ownership | all inventory rows | Use trip/segment k -> consignment source s -> final responsibility owner/pool/version h. With documented binding mass capacity use measured consignment mass-times-carried distance; with documented binding volume capacity use actual occupied volume-times-distance. Split measured moving-loaded, moving-empty and stationary-idle source numerators before allocation. Loaded driver d_loaded_k_s is mass_kg_s*carried_km_s or occupied_volume_m3_s*carried_km_s in the evidenced capacity mode; allocate each source numerator by d_loaded_k_s/sum_s(d_loaded_k_s). Empty source driver d_empty_k_s=reserved_capacity_k_s*empty_km_k and idle source driver d_idle_k_s=reserved_capacity_k_s*idle_h_k, using the actual prebooked kg or m3 capacity reserved by every beneficiary including failed consignments; allocate each separate source pool by its own driver sum. Freeze reservation records and require positive known totals; never sum these three driver dimensions. Empty trips retain measured vehicle-km and idle fuel/time even when t*km=0; unknown capacity or provider empty-route coverage blocks completion. A provider consignment-attributed amount skips only vehicle attribution; still multiply F, first-use or historical asset-owner fraction as applicable. Skip owner_fraction only when attribution_level already identifies exact original source, final owner, pool and version. Receiving transport of S follows excluded GOODS; F follows failed_original; T/O responsibility persists. | ghg-allocation |
| materials_cleaning | all inventory rows | Completion materials use actual homogeneous original source quantities; unused stock/return/transfer retains unassigned manufacturing and inbound transport. Assign manufacture/inbound once at first use; used/reused stock never repeats them. Cleaning imported water is actual external inflow, not reduced again by internal reuse. Record actual supplied formulation kg and mutually exclusive original-formulation destinations: used export, spill export, retained, unused and dispatched container residue; intermediate used-to-rinsed is replacement state. Whole wet wipe/container/rinsate kg is a distinct measured carrier, excluding no water by assumption and never multiplied again by source fraction. Direct effluent is measured V_discharge*rho at recorded temperature with calibration, not a supply-water reconstruction. Each actual chemical/water/carrier needs its own atomic card; real mixed carriers require receiver acceptance and complete treatment. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_events | retail | retail_service; customer_handover; supplier_handover; internal_handover | Original-unit custody and acceptance ledger | original_id; lot_id; manufacturer_sku; UPC; configuration; closure; included_pieces; actual_store_id; assortment_evidence; pool_id; observation_window; timestamp; timezone; event_id; recipient; state; H; R_receive; R_customer; R_supplier; J_internal; C_condemned; L_missing; G_open; G_close; epsilon_goods; final_valid; revocation_no_movement; financial_only; correction_version | At supplier dispatch and receiving inspect each actual unit/lot against markings, original components, signed packing list/drawing and packaging; resolve manufacturer/retailer length conflict by drawing and measured geometry. At each receipt/return/handover/refusal/transfer capture event and recipient; at window close verify acceptance and unique original ID, then preserve actual-date late corrections. Scan IDs and count; no vehicle-use km. Count opening/closing goods independently. Use service_count, custody_count and physical_fates; raw events first, each attributed numerator divided by Q once per reference flow. | Item(s) | Every event; physical stock at opening/closing; review at window end and every later correction | Full prospective pool including closed/failed/zero-sale days and late corrections | Actual mixed-assortment physical store and identified supplier dispatch | per reference flow | Signed stock count, barcode audit, lot photos/drawing, acceptance/return receipts and conflict resolution |
| cp_sources | retail | failed_original | Original supplier source-vector responsibility ledger | original_id; lot_id; source_id; n_original_s; source_vector_s; original_gate; exact_pack_BOM; component_vector_ids; manufacturing_scope; vector_gate; exact_excluded_inbound_stages; inbound_transport_source_id; S_s; F_s; T_s; O_s; recipient; state; final_owner_id; pool_id; version | Obtain supplier primary lot/BOM/manufacturing inventory and actual supply-pack boundaries at receiving; freeze original source ID and separately evidenced inbound transport. Each fate/correction updates exclusive S/F/T/O; physical transfer is independently linked to cp_events. Whole-source F uses complete original units only. If actual original components diverge, supplier component inventories and new atomic cards precede any complete result. source_f and original_source give raw N_F; keep S/T/O external to service; N_F/Q once per reference flow. | Item(s); original vector units | Each received source and every fate/version change | Original dispatch through final ownership, across periods | Actual supplier lot and all original-unit custodians | per reference flow | Primary vector provenance; source conservation; actual receipt/BOM; unresolved gaps signed |
| cp_energy | retail | alternating_current | Disjoint receiving and checkout electricity metering | source_pool_id; parent_meter_id; meter_contains_submeter; circuit_scope; equipment_id; meter_serial; calibration; resolution; start_kWh; end_kWh; kWh_a; active_idle_fixed; e_a_pool; e_a_c; all_beneficiaries; reserved_device_h; served_area_m2; duration_h; timestamp; uncertainty; provider; voltage; geography; delivery_boundary | At each actual receiving/checkout circuit use calibrated cumulative readings and interval/task log; map parent/submeters and disjoint scope. Record active kWh, idle/fixed source pools and all actual reserved equipment hours. Allocate facility fixed loads separately by measured served m2*h under subdivide_sources; retain closed hours. Verify voltage/provider background without inferring them from generic AC identity. energy_pool raw MJ; reconcile parent and each same-unit source; N_AC/Q once per reference flow. | kWh; h; m2 | Cumulative opening/closing plus interval and each task/state change | Full pool including idle, closed, failures | Mapped core receiving/checkout circuits only | per reference flow | Calibration, interval export, circuit plan, reservations, bills and source-pool reconciliation |
| cp_waste | retail | damaged_unit_waste | Complete condemned-unit waste dispatch ledger | condemnation_event_id; original_id; original_pieces; packaging_state; constituents; carrier_id; dispatch_id; receiver; acceptance_scope; treatment_scope; gross_kg; tare_kg; scale_id; calibration; timestamp; W_open; W_close; W_generated; W_dispatch; W_transfer; W_missing_confirmed; waste_incident_id; epsilon_waste; missing_residual; background_id | At condemnation count original units and weigh generated held waste; at actual dispatch tare and weigh each complete accepted carrier on a calibrated scale. Record actual original components and package constituents/state, signed receiver acceptance and complete treatment contract. Observe held-stock opening/closing separately; do not deduct these again from direct dispatch. Incomplete/opened carriers trigger atomic extension before use. waste_dispatch yields raw N_W; independent physical_fates kg QA; N_W/Q once per reference flow. | kg; Item(s) | Every condemnation/dispatch; held-waste opening/closing | Full pool and later corrected original consignments | Retail held-waste location and actual receiver gate | per reference flow | Scale calibration, tare/weight ticket, signed receiver acceptance, chain of custody and complete treatment match |
| cp_completion | retail | failed_original; alternating_current; retail_service; customer_handover; supplier_handover; internal_handover; damaged_unit_waste | Mandatory source-stage closure and module register | module_id; actual_process_id; actual_row_id; direction; flow_type; state; medium; property; unit; source_id; event_id; stage; boundary; provider_scope; raw_or_normalized; N_core_raw_r; N_external_raw_m_r; z_normalized_m_r; D_original_m; B_external_m_r; A_external_m_r; exact_final_owner_attribution; pool_id; owner_id; version; Q; active_idle_fixed; e_a_c; asset_model; asset_driver_unit; cleaned_surface_m2; cleaned_area_lifetime_m2; exact_BOM; V_old; V_new; e_recorded_h; L_expected; e_actual_h; E_actual_all; f_old_h; f_new_h; f_final_h; delta_h; terminal_carrier_kg; attribution_level; owner_fraction; trip_id; segment_id; consignment_id; capacity_basis; capacity_evidence; mass_kg; occupied_volume_m3; distance_km; empty_km; idle_h; idle_fuel; moving_loaded_numerator; moving_empty_numerator; stationary_idle_numerator; reserved_capacity_k_s; reservation_capacity_unit; carried_km_s; empty_km_k; idle_h_k; d_loaded_k_s; d_empty_k_s; d_idle_k_s; t_j_c; w_j_c; unique_connection_interval_id; net_s_j_c; w_net_j_c; network_contract_denominator; network_provider_numerator; camera_source_id; A_j_c_zone; h_j_zone; byte_h; GB_or_GiB; original_capture_map; first_use_id; formulation_source_kg; formulation_destinations; container_residue_kg; wet_carrier_kg; V_discharge; rho; temperature; calibration; absence_evidence; overlap_constituents | Before completeness and on every source/configuration change inspect actual facility, asset/circuit register, contracts, invoices, dispatches and all period records. For every required module in partial_completion create actual atomic card and single-process protocol before sync. Apply fixed methods subdivide_sources, asset_history, backend_events, transport_ownership and materials_cleaning with measured fields listed here; do not choose a new denominator or driver downstream. Freeze original camera map and event shares, all-beneficiary exposure, transport attribution levels and supplier boundaries; require matching source-scope evidence and recorded absence signoff. Apply the narrow no-combustion/no-refrigerant applicability gate in partial_completion to all supporting facility equipment and contracts. A positive or unknown condition cannot be completed under this route and remains explicitly outside-scope/incomplete, never a zero emission assumption. Damaged solid goods still require actual state/path-specific extension under waste_boundary. completion_sum retains raw and restores normalized original module numerators, deduplicates actual stages, final/Q once per reference flow. | Actual row-specific units; separate same-unit pools | Every module event/interval; asset history on every revision/retirement; closure before result | All mandatory support modules throughout original pool and full asset/source history | Actual store and all supplier/provider/receiver boundaries | per reference flow | Signed module inventory; measured drivers; source/owner/version receipts; all-history replacement audit; scope-overlap matrix; absent/unknown register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_count | retail_service | Q=count_distinct(original_id with final_valid=true); do not subtract revoked IDs again. Freeze pool/window, carry zero-output periods and version late returns. | original_id; final_valid; pool_id; observation_window; correction_version | Q |  |
| source_f | failed_original | N_F=sum_s(n_original_s*F_s). Whole-source F is0 or1 for each indivisible original unit; source_vector_s follows that same source once. S_s+F_s+T_s+O_s=1. Separate component vectors are mandatory before differing component fates. | n_original_s; S_s; F_s; T_s; O_s; source_vector_s | N_F |  |
| energy_pool | alternating_current | N_AC=3.6*sum_a(kWh_a*e_a_pool/sum_c(e_a_c)); direct disjoint kWh has share1. Apply subdivide_sources to actual same-unit source pools; never assume fixed-zero load. | kWh_a; e_a_pool; e_a_c; source_pool_id; active_idle_fixed; parent_meter_id | N_AC MJ |  |
| custody_count | customer_handover; supplier_handover; internal_handover | N_H=H; N_R=R_supplier; N_J=J_internal from gross physical event IDs, independent of Q and source ownership; physical_fates count and kg ledgers reconcile separately. | H; R_supplier; J_internal; G_open; G_close; R_receive; R_customer; C_condemned; L_missing; epsilon_goods | N_H; N_R; N_J |  |
| waste_dispatch | damaged_unit_waste | N_W=sum_dispatch(gross_kg-tare_kg). Use direct whole-carrier net mass once; W_close=W_open+W_generated-W_dispatch-W_transfer-W_missing_confirmed+epsilon_waste is independent QA. Link C_condemned count to measured W_generated by event ID, not nominal kg per item. | gross_kg; tare_kg; dispatch_id; W_open; W_close; W_generated; W_dispatch; W_transfer; W_missing_confirmed; waste_incident_id; epsilon_waste; condemnation_event_id | N_W kg |  |
| completion_sum | all inventory rows | For compatible exchange/property/unit/state/medium/boundary r: First restore each external source numerator B_external_m_r=N_external_raw_m_r in raw mode or z_normalized_m_r*D_original_m in normalized mode. If it is not already attributed to the exact final original owner/pool/version, apply the fixed subdivide_sources, asset_history, backend_events, transport_ownership or materials_cleaning first-use method as applicable exactly once to obtain A_external_m_r; if exact attribution is evidenced set A_external_m_r=B_external_m_r without repeating owner fractions. Then N_total_r=N_core_raw_r+sum_m(A_external_m_r) and x_r=N_total_r/Q once. Preserve raw core N_F/N_AC/N_W etc before their card division; external raw stays raw. Restore normalized modules only with evidenced original D and exact original source/pool/owner/version. Deduplicate actual constituents/events/time/assets/lifecycle stages, not just provider IDs; exclude overlapping F/AC. An incompatible unit/identity remains a separate row, never add kg to MJ or raw to normalized. | N_core_raw_r; N_external_raw_m_r; z_normalized_m_r; D_original_m; B_external_m_r; A_external_m_r; exact_final_owner_attribution; attribution_level; owner_fraction; e_recorded_h; L_expected; e_actual_h; E_actual_all; subdivide_sources; asset_history; backend_events; transport_ownership; materials_cleaning; cp_completion; source_id; pool_id; owner_id; version; Q | x_r |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | No exact unbound row is verified. Before operational use direct-read matching official public flow and receipt; check UUID, bilingual names, state, type, qualifiers, property/unit and medium; bind an actual geographically/temporally suitable background and measured quantity. A catalog count property does not verify a retail-service or merchandise identity. | Row-specific binding record; original response hash; supplier vector; meter/weighing record. |
| complete_scope | all inventory rows | Partial core remains partial until cp_completion closes every mandatory module with atomic cards, actual protocols and both-language sync. Missing/unknown coverage or failed acceptance evidence blocks a complete-service result. | Signed source-to-stage register, overlap matrix and absence proofs. |
| measurements | all inventory rows | Use traceable meter/scale serial, calibration validity, resolution, zero/tare, timestamp/timezone, uncertainty and complete period records. Missing quantity is unknown, not zero. Preserve negative signed residuals for investigation; no automatic clamp or credit. | Calibration certificates; reconciliation; signed investigations; frozen versions. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_acceptance | retail_service | Reject changed SKU/state/channel or unresolved length/configuration conflicts; require actual store assortment and original-lot identity. Q must be positive and final-valid unique IDs; finite measurement pass does not approve scientific applicability. | un-cpc-62181; curt-model; runnings-channel |
| balances | all inventory rows | Require physical_fates, original_source, source_f and all same-unit pool/asset history reconciliations. Confirm every true conditional exchange has a card/protocol/background; unknown remains incomplete. Satellite exclusions apply only to the three named Product custody outputs, never failed_original or Waste. |  |
| aggregation_gate | all inventory rows | Verify actual Inputs and raw fields for every applied rule, one source attribution and one Q division. Match protocol process_id and flow_role to actual row IDs. Complete claims require closure and no double-counted module constituents; candidate status is not scientific, translation-review or publication approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | candidate partial retail-service inventory |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same actual SKU/configuration/store route after applicability and binding review; complete service only after mandatory closure |
| excluded_use | Whole-store or all62181 coverage; vehicle-use impact; installation; safety certification; methodology-approved claim |
| required_metadata | Reference qualifiers; original source vectors; actual pool/Q; correction versions; all required modules and identity gaps |
| required_quality_disclosure | Partial core and any unknown module; measured uncertainty; historical UUID observations; original product-page limitations and unresolved length/pack evidence |
| update_trigger | SKU/pack/route change; late return; supplier background or asset lifetime revision; calibration/identity correction |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62181 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62181 | Official goods491/492 scope; category applicability, not a goods inventory |
| un-goods-49129 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/49129 | Motor-vehicle accessory interpretation; no claim that a manufacturer assigns this code |
| curt-model | handbook | https://www.curtmfg.com/part/45036 | Actual manufacturer model, assembled components, vehicle-receiver use and finish; specification only, no quantified LCI/full BOM/field mass or approval |
| runnings-channel | handbook | https://www.runnings.com/curttm-ready-tow-ball-mount-with-2-ball-45036.html ; https://www.runnings.com/about-us | Same SKU/UPC pickup listing and actual mixed assortment; store-specific stock/configuration still requires observation |
| ghg-allocation | official_guidance | https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; Chapter9 p63 | General subdivision/physical allocation principles only; PCR-specific drivers and completion methods are authored choices, no complete-standard conformity claim |
