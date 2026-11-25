---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-photographic-optical-and-precision-equipment
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Factory-sealed passive 8×42 binocular kit counter retail service in a non-specialized store

## 1. Scope and Applicability

A bounded non-specialized-store counter service for one actual factory-sealed passive 8×42 binocular kit configuration, with no cells or electronic stabilization. This is a partial incremental service; it does not represent the full CPC leaf, merchandise manufacture, or complete store operation. Manufacturer specifications anchor the optical object, not actual package BOM, battery absence, supply impacts or retail performance. Eligibility, failed-goods responsibility and fixed completion duties below are normative PCR design choices; the general GHG source does not prescribe this exact retail method or confer whole-standard conformity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-photographic-optical-and-precision-equipment |
| classification_refs | CPC 3.0 62152; narrower; goods group 483 |
| covered_products | One prospectively selected supplier SKU/version of a new, factory-sealed Nikon PROSTAFF P3 8×42 complete retail kit; unchanged binocular, original accessories and original full retail package remain together. |
| excluded_products | 10×42 and other models; batteries and electronic or stabilized optics; cameras; lenses sold separately; components; second-hand or opened kits; optical testing, calibration, fitting, nitrogen filling, repair, demonstration, cleaning of merchandise, delivery and online fulfilment. |
| representative_product | Nikon PROSTAFF P3 8×42, roof prism, central focusing, 8-fold magnification, 42 mm objective; source nikon-p3-spec distinguishes this from 10×42. Manufacturer device weight is not the actual full-kit or waste mass. |
| production_route | Supplier receipt → dry ambient storage → exterior seal/model check and paperless point-of-sale → physical counter handover → final acceptance/return reconciliation. No opening, powered merchandise test or added bag. |
| market_state | New original sealed complete kit; actual regional accessory list, body/caps/strap/case/manual and package body/closure/liners/labels/adhesives are established from supplier BOM, not inferred from a device specification. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Counter retail handling of one unopened complete binocular kit. |
| How much | One finally accepted service for one distinct original kit ID. |
| How well | Exact selected SKU/version, intact seal, correct complete-kit handover and final valid acceptance under declared policy. No optical or calibration test is claimed. |
| How long or cycle | One declared pool P from receipt/storage/counter handling through acceptance horizon, with later-event original-pool corrections. |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Factory-sealed passive 8×42 binocular kit counter retail service in a non-specialized store |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | store and non-specialized channel; supplier SKU and kit version; original ID and seal; passive no-cell confirmation; actual complete kit/package BOM; P dates and acceptance horizon; final-valid Q set; S/F/O/T source ownership; actual meter boundary; partial modules and source versions |

Every required qualifier must be declared in the data package; missing qualifiers make its reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | retail_service; failed_kit; gross_handover; continuing_transfer | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count complete original kit objects or service as stated on each exact row; no kg/device-mass conversion. Q is distinct final-valid original IDs, not transaction count. |
| electricity_unit | pos_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Measured kWh × 3.6 gives MJ; source identity is point-of-use AC with supply/voltage unspecified. |
| whole_carrier_mass | kit_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Actual net whole unopened-kit carrier kg; no device catalog mass default and no double component subtraction. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Original sealed actual supplier kit received at store; no rework before acceptance. |
| starting_condition_role | foreground service gate |
| product_classification_scope | Narrower group483 optical complete kits only; group482 precision/control goods are outside this route. |
| recursive_input_rule | Do not recurse through another retail service; retain its evidenced actual source boundary and exclude overlap in completion_sum. |
| upstream_dataset_requirement | Actual complete supplier kit supply including original inbound, partitioned by S/F/O/T; verified electricity and treatment providers. |
| disclosure | Partial incremental boundary, actual source/recipient states, zero-output pools and all mandatory completion gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all processes | Apply only after supplier specification/BOM and full-store plus landlord survey confirm passive non-stabilized optics without cell/electronics, sealed contained nitrogen, no optical bench/calibration lamp/target, no demonstrator, no lens-cleaning media, no printed receipt/label or retailer packaging. This route admits only all-electric unconditioned dry premises: no combustion fuel, refrigerant equipment, refrigerated stock, heat network or gas service anywhere in the allocated site/landlord boundary. Record equipment register, utility contracts and dated walkthrough; an unknown or present excluded source blocks this route, never establishes zero. Nitrogen sealed inside the device is not an elementary emission. | nikon-p3-spec |
| boundary_gate | failed_kit; gross_handover; continuing_transfer; kit_waste | Keep each original kit ID and supplier lot through every receipt, handover and return. Original complete manufacturing and supplier-to-store inbound transport belong together at first store receipt and are conserved once per original ID as S/F/O/T responsibility: S finally valid customer product, F retailer loss/condemnation or externally retained nonaccepted product, O open stock, T signed continuing supplier/other-system responsibility. A resale changes that SAME original owner, never creates manufacture again. The failed_kit input is the actual F supply share, including original accessories/package and inbound transport once; it is not excluded as a custody satellite. S background stays in the downstream customer product system, O stays deferred with the original source, and T carries its signed background onward; a supplier return cannot erase it. Retain the full original source vector by source ID; component splits require verified supplier vectors conserving that boundary, never arbitrary mass fractions. |  |
| boundary_physical | gross_handover; continuing_transfer; kit_waste | Use a goods-only custody count balance: C_close = C_open + R_supplier + R_customer - H_gross - X_continue - D_condemn - L_missing. All terms are actual event counts; supplier receipt and customer return are separate gross inflows. H_gross includes every physical customer handover including unaccepted and repeat handovers, so never subtract external_nonaccepted again. X_continue contains mutually exclusive actual supplier/internal-system outward events, not background-only owner changes. Condemnation moves goods to held waste internally; held-waste close = held-waste open + D_condemn - W_dispatch_count, with actual waste dispatch not deducted twice from goods. Reconcile original IDs, counts and measured whole-kit kg independently. Only gross_handover and continuing_transfer physical product outputs are custody satellites excluded from co-product characterization; service and failed_kit input remain characterized. Lost goods and external nonacceptance have named final recipient/state and responsibility; neither automatically creates waste dispatch. |  |
| boundary_complete | all processes | This is a partial incremental counter-service dataset. Before a complete retail claim, mandatory completion modules are whole-premises lighting/fan/IT utility remainder, building/fixtures/shelves/security/checkout/network capital, cleaning and sanitary activity, actual return/transfer/waste transport, and waste treatment. All necessary actual devices, cleaners, media, carriers and maintenance enter named atomic bilingual cards/protocols and synced projection before completeness. No generic other-input row is allowed. Fixed calculation rules completion_energy, completion_assets, completion_cleaning, completion_transport and completion_sum govern those modules; absence must be evidenced and signed across site/landlord/provider boundaries. Unknown modules remain incomplete. The measured POS electricity is disjoint from the utility remainder; exclude it from a parent only when wiring/meter evidence shows that parent includes it. No subtraction from an independent disjoint meter. | ghg-product-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| counter_retail | Sealed-kit custody and paperless checkout | required | Eligible route and all P events | service | Q finally valid original IDs |
| residual | Whole unopened-kit waste dispatch | conditional | Actual dispatch to evidenced treatment; unknown is incomplete | residual | actual W_kit kg |
| support_completion | Mandatory fixed downstream modules | excluded_by_default | Required before complete retail claim; excluded from partial core until actual cards added | completion | same Q after compatible raw aggregation |

### Process: Sealed-kit custody and paperless checkout (`counter_retail`)

#### Inputs

##### Product flows

###### Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`pos_electricity`)

Actual AC supplied to the metered POS circuit including standby; merchandise has no powered test on this route. Provider/voltage/geography remain dataset evidence.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * E_POS / Q
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_energy`

###### Factory-sealed Nikon PROSTAFF P3 8×42 complete retail kit (`failed_kit`)

Actual manufactured complete-kit input attributable to F; do not omit manufacturing/packaging/inbound for loss, condemnation or final external nonacceptance. This burden input is not a second physical supplier receipt and is not a characterization-excluded satellite. Require complete original kit supply evidence; unknown BOM/background prevents completion.

- Selected flow: Factory-sealed Nikon PROSTAFF P3 8×42 complete retail kit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F/Q
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_custody`
- Sources: nikon-p3-spec

#### Outputs

##### Product flows

###### Factory-sealed passive 8×42 binocular kit counter retail service in a non-specialized store (`retail_service`)

One finally valid service per distinct original sealed kit ID. Service identity remains unbound; no merchandise flow UUID is substituted.

- Selected flow: Factory-sealed passive 8×42 binocular kit counter retail service in a non-specialized store
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_custody`

###### Factory-sealed Nikon PROSTAFF P3 8×42 complete retail kit (`gross_handover`)

Custody satellite output of the real complete original kit; all accepted, unaccepted and repeated outward events included. Its count does not determine Q and is not co-product production.

- Selected flow: Factory-sealed Nikon PROSTAFF P3 8×42 complete retail kit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: H_gross/Q
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_custody`

###### Factory-sealed Nikon PROSTAFF P3 8×42 complete retail kit (`continuing_transfer`)

Custody satellite physical output with signed recipient; background-only reassignment has no quantity here. The same original kit source continues with T.

- Selected flow: Factory-sealed Nikon PROSTAFF P3 8×42 complete retail kit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: X_continue/Q
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_custody`

### Process: Whole unopened-kit waste dispatch (`residual`)

#### Outputs

##### Waste flows

###### Discarded unopened Nikon PROSTAFF P3 8×42 complete retail kit (`kit_waste`)

One whole actual article carrier including original device/accessories/package, admitted only when receiving treatment contract accepts that full unopened state. Do not split out glass, body resin or contained nitrogen again. Lost goods have no fictitious carrier. Actual opened content requires state-specific extension before completion.

- Selected flow: Discarded unopened Nikon PROSTAFF P3 8×42 complete retail kit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_kit/Q
- Value mode: foreground_record (`foreground_record`)
- Specificity: site_specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: reference_flow (`reference_flow`)
- Evidence kind: collected_record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: nikon-p3-spec

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_pool | all processes | Declare pool P prospectively by store, same SKU/kit version, sealed route, calendar interval and acceptance horizon. Retain closed, idle, refused, reversed, failed and zero-sale periods in the same configuration pool. No successful-period selection. Q is the count of DISTINCT original kit IDs with final-valid acceptance in P at the stated cut-off; revoke acceptance even without a physical return, but retain acceptance for purely financial refunds/discounts. Do not subtract revocations again from that distinct final-valid set. One original resold kit yields at most one final service. Late events replace original-pool Q, numerator and S/F/O/T history with actual dates, not a new charge in the resale pool. Q=0 leaves the entire raw pool unnormalizable and reportable. |  |
| allocation_direct | pos_electricity; all completion modules | Subdivide and directly meter before allocation. For shared sources, separate measured active, idle and fixed-component numerator pools first and reconcile their same-unit sum to the parent. Allocate each pool using its own causal same-unit driver over ALL actual beneficiaries: active checkout seconds, reserved idle seconds, occupied floor-area×hours for premises, or device-reservation hours for IT. Record causality and positive/known total driver; never add unlike drivers or discard zero-driver periods. Allocate a fixed/idle pool by observed reservation duration including closed periods; if no beneficiary/reservation evidence exists, completeness is blocked. Sum only compatible attributed exchange amounts, then divide by Q once. No turnover/revenue allocation or avoided-production credit. | ghg-product-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | counter_retail | retail_service; failed_kit; gross_handover; continuing_transfer | event ledger | pool_ID; store; SKU; kit_version; supplier_BOM; passive_no_cell_confirmation; original_ID; serial_or_seal_ID; original_receipt_date; event_ID; event_type; event_date; physical_recipient; state; acceptance_cutoff; final_valid_original_ID; acceptance_revocation_date; financial_only_flag; C_open; R_supplier; R_customer; H_gross; X_continue; D_condemn; L_missing; C_close; held_waste_open; held_waste_close; W_dispatch_count; responsibility_S_F_O_T; source_vector_ID; original_inbound_ID; original_owner_version; N_F; Q | At store receiving door and counter, scan each actual supplier kit/seal ID and separately every customer return and physical outward event; signed acceptance and revocation records with original-ID links. Exterior check only; supplier BOM/specification confirms actual intact kit, no cell/electronics and no split contents. Every event including refusal/no-return revocation/failure/loss remains. Inventory counts independently checked by two-person stocktake. Calibration is not applicable to ID scans; test scanner/readability against retained labels. Retain packing lists, signed supplier/recipient ownership, source vectors, actual inbound scope and loss investigation. | Item(s) | every event and opening/closing stocktake | entire declared P plus all later corrections linked to P | single declared SKU/store; all original IDs and final recipients | per reference flow | supplier BOM; scan audit; signed acceptance/ownership; source-ID conservation |
| cp_energy | counter_retail | pos_electricity | meter record | meter_ID; meter_boundary; meter_open; meter_close; meter_multiplier; source_pool_ID; source_pool_kWh; beneficiary_ID; active_seconds; reserved_seconds; all_beneficiary_driver_seconds; interval_dates; calibration_certificate; Q | Dedicated plug/submeter at POS power supply, read at interval start/end including standby, refused transactions and closed periods. Record actual kWh and meter multiplier, mains interruptions, UTC timestamps, calibrated meter trace and circuit diagram. For shared POS, collect all beneficiaries active/reserved seconds and reconcile allocated kWh to measured full pool; measure rather than use nominal power. No optical battery/test energy exists only after boundary_route evidence. | kWh | interval readings with event/time logs | all P including idle/closed/failed periods | actual POS circuit and every shared beneficiary | per reference flow | calibration certificate; circuit inclusion proof; parent reconciliation |
| cp_waste | residual | kit_waste | consignment weighing | consignment_ID; original_ID; dispatch_date; gross_kg; external_container_tare_kg; W_kit; W_dispatch_count; held_waste_open; held_waste_close; D_condemn; destination; carrier_state; provider_scope; scale_ID; calibration_certificate; Q | At actual outgoing waste consignment, weigh whole unopened same-model kit(s), original accessories and packaging on calibrated scale and tare only external reusable collection container. Link each original ID and waste stock; recipient confirms no contents separation and actual treatment acceptance. Lost or externally held goods are not this stream. Open/dismantled kits require new state-specific cards before a complete result. Retain gross/tare slips, scale check weights, date and treatment/transport contract; generation and held stock are independently reconciled. | kg | each actual consignment | P dispatch dates plus original source/history | store waste dispatch and actual receiving treatment boundary | per reference flow | traceable scales; gross/tare; carrier-state and destination receipts |
| cp_completion | support_completion | mandatory partial-boundary completion | module ledger | parent_meter_kWh; wiring_boundary; included_submeters_kWh; disjoint_meter_kWh; source_pool_ID; E_k; d_bk; all_beneficiaries; reserved_idle_seconds; occupied_m2_hours; device_reserved_hours; asset_ID; model; complete_BOM; provider_scope; source_vector_ID; B_j; installation_ID; e_jbt; L_j_v; lifetime_version; all_prior_allocations; retirement_date; terminal_net_kg; final_beneficiaries; maintenance_event_ID; formulation_source_ID; formulation_kg; concentration; source_origin_kg_by_final_destination; original_container_closing_residual_source_kg; dispatched_container_residual_source_kg; container_plus_residual_net_kg; imported_water_kg; imported_water_m3; actual_density_kg_m3; water_temperature; internal_reuse_record; retained_stock_open_close; liquid_gross_kg; liquid_external_tare_kg; wet_wipe_net_kg; cleaner_container_net_kg; consignment_ID; cleaned_m2; scale_calibration; trip_ID; segment_ID; provider_attribution_scope; actual_loaded_km; actual_empty_km; actual_active_h; actual_empty_h; actual_idle_h; full_vehicle_payload_capacity_kg; reserved_payload_kg_bi; actual_reserved_h_bi; d_bi; A_i; A_bi; all_beneficiaries; unused_operational_responsibility_ID; fuel_or_electricity_amount; source_pool_split; q_mr; D_m; original_pool_ID; original_version; raw_A_mr; source_exchange_ID; source_overlap_register; A_core_r; Q; absence_register; site_landlord_equipment_register | At site/landlord utilities, asset locations, cleaning stores/drain dispatch and actual route/provider boundary, collect original meter/scale/time/route/provider source records and all driver units. Survey presence/absence before P and verify changes each interval. Collect entire operational P and all asset historical beneficiaries; retain official/supplier source documents and independent meter/stock checks. Calibrate each relevant meter/scale, time synchronization and capacity measure with dated certificates/checks. Fixed module calculations are in completion_energy; completion_assets; completion_cleaning; completion_transport; completion_sum; raw fields retain original source IDs and replacement versions. Add actual bilingual atomic cards before aggregation; unknown presence/identity/quantity/source coverage blocks completeness. | original unit per separate source pool | each source interval/event and each lifetime revision | all P and complete asset/source allocation history | all beneficiaries, site, landlord and provider included boundaries | per reference flow | calibration; original boundaries/BOM; signed absence; all-beneficiary reconciliation; prior-version correction |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_q | retail_service | Q = count(distinct final_valid_original_ID); service amount = Q/Q = 1 Item(s) per reference flow; if Q=0 no normalized result. | final_valid_original_ID; acceptance_cutoff; pool_ID; cp_custody | Q; retail_service |  |
| energy_mj | pos_electricity | E_POS = sum(attributed measured kWh for P); amount = 3.6 * E_POS / Q MJ per reference flow. Attribution follows allocation_direct; no device rated power or optical magnification substitutes for electricity. | meter_open; meter_close; meter_multiplier; source_pool_kWh; active_seconds; reserved_seconds; all_beneficiary_driver_seconds; Q; cp_energy | pos_electricity MJ per reference flow |  |
| failure_supply | failed_kit | N_F = count(distinct original IDs with F responsibility); amount = N_F/Q Item(s) per reference flow. Expand each original F supply vector once at first receiving gate; actual loss does not require physical waste. S/F/O/T partitions all original supplies including opening stock. | original_ID; source_vector_ID; original_inbound_ID; responsibility_S_F_O_T; original_owner_version; N_F; Q; cp_custody | failed_kit Item(s) per reference flow |  |
| physical_outputs | gross_handover; continuing_transfer | H_gross/Q and X_continue/Q Item(s) per reference flow are separate actual outward event totals; cp_custody maintains both goods and held-waste balances. Responsibility-only T is absent from X_continue. | event_ID; event_type; original_ID; H_gross; X_continue; C_open; R_supplier; R_customer; D_condemn; L_missing; C_close; held_waste_open; held_waste_close; W_dispatch_count; Q; cp_custody | gross_handover; continuing_transfer |  |
| waste_dispatch | kit_waste | W_kit = sum(actual consignment gross kg - actual external reusable container tare kg); amount = W_kit/Q kg per reference flow. Net weighing retains the entire unopened device/accessories/original packaging carrier. Do not subtract parts already absent; do not substitute 575 g device specification or apply a composition fraction. Waste generation/stock is a separate check, not a correction of dispatched kg. | consignment_ID; original_ID; gross_kg; external_container_tare_kg; dispatch_date; destination; W_kit; Q; cp_waste | kit_waste kg per reference flow | nikon-p3-spec |
| completion_energy | all completion modules | For every electricity numerator pool k and beneficiary b, E_bk = E_k*d_bk/sum_b(d_bk); use only one same-unit causal driver per k per allocation_direct. Meter coverage fixes whether E_k is a disjoint reading or parent less proven included POS submeter. Preserve idle/closed periods and full parent reconciliation. E_bk is kWh; raw utility MJ = 3.6*sum_k(E_bk), with no division by Q before completion_sum. Electricity source mix, voltage, geography and upstream delivery losses require actual provider evidence; point-of-use flow identity supplies none. | parent_meter_kWh; wiring_boundary; included_submeters_kWh; disjoint_meter_kWh; source_pool_ID; E_k; d_bk; all_beneficiaries; reserved_idle_seconds; occupied_m2_hours; device_reserved_hours; cp_completion | attributed raw utility MJ by source pool before division by Q | ghg-product-2011 |
| completion_assets | all completion modules | Maintain one persistent ledger per real complete asset j and all historical beneficiaries b,t. For each version v, a_jbt(v)=e_jbt/L_j(v), with sum_b,t(e_jbt)<=L_j(v); use device h, building occupied m2*h, shelf occupied m3*h, and reusable-cloth cleaned m2 as separate same-unit ledgers. L is positive evidenced expected total lifetime exposure, never a new lifetime each pool; unknown L blocks completion, and exposure exceeding L requires a replacement lifetime version before allocation. Source vector B_j times a_jbt is manufacturing/installation responsibility; every revision REPLACES all old historical allocations and posts differences. At retirement set L to actual total exposure, replace all versions, and assign any rounding/residual to documented final beneficiaries so total=1. Terminal whole-asset carrier kg is actual net kg times that SAME a_jbt once, not times another manufacturing fraction. Whole-net weighing and verified component reconstruction are exclusive; removed components cannot be subtracted twice. Operation and actual event maintenance/replacement are separate vectors unless a signed complete lifecycle package explicitly contains them; then remove duplicates. Included capital must name building shell, lighting/fan fixtures, shelf, security, POS and network hardware, foundations/installations and terminal scope. A stock kit made demonstrator transfers its SAME original source to T and this ledger rather than charging F and new acquisition. Such a changed route requires revised cards first. | asset_ID; model; complete_BOM; provider_scope; source_vector_ID; B_j; installation_ID; e_jbt; L_j_v; lifetime_version; all_prior_allocations; retirement_date; terminal_net_kg; final_beneficiaries; maintenance_event_ID; cp_completion | raw asset manufacturing/installation/terminal and actual maintenance responsibility before division by Q | ghg-product-2011 |
| completion_cleaning | all completion modules | For each actual formulation source lot s collect kg introduced and final mutually exclusive source-origin kg in unused return, retained stock, dry residue, wet wipe, free liquid and dispatched original-container residual. Original-container closing residual belongs to retained stock; residual actually dispatched is a separate final source-origin destination assigned ONLY to the container source share, never also to free liquid or wet wipe. The complete original container plus dispatched residual is another directly measured terminal carrier net kg and is NOT multiplied by its source-origin fraction. Used-to-rinsed is a replacement state, not another destination; sum final source-origin kg = source kg. Added water/dirt/container is excluded from source-origin kg. Imported water kg uses actual weighing or mass meter; volume readings convert only by imported_water_kg=imported_water_m3*actual_density_kg_m3 at recorded temperature. The import meter already excludes internal reuse; do not subtract reuse again. Whole liquid terminal carrier uses DIRECT net kg weighing only (gross less actual external container tare), not water-volume balance or source kg. Wet wipe and original cleaner container each use separate actual whole-carrier net kg and disjoint consignments; no double export with liquid. Record exact formulation/concentration, state, source, mass scales/calibration, water-meter boundary, dates, retained opening/closing stocks and destination. Reusable cloth manufacturing uses its own cleaned-m2 e/L asset ledger; its measured retirement carrier follows the same fraction once. Add each real cleaner, water, wipe, container and terminal stream as separately named cards before completion; unknown composition/destination is incomplete, never zero. | formulation_source_ID; formulation_kg; concentration; source_origin_kg_by_final_destination; original_container_closing_residual_source_kg; dispatched_container_residual_source_kg; container_plus_residual_net_kg; imported_water_kg; imported_water_m3; actual_density_kg_m3; water_temperature; internal_reuse_record; retained_stock_open_close; liquid_gross_kg; liquid_external_tare_kg; wet_wipe_net_kg; cleaner_container_net_kg; consignment_ID; cleaned_m2; scale_calibration; cp_completion | raw atomic cleaning inputs and disjoint complete terminal carrier kg before division by Q |  |
| completion_transport | all completion modules | Keep first-store inbound in the original S/F/O/T supply source once. For each actual separate return/transfer/waste segment i and beneficiary b, measure reserved_payload_kg_bi and actual_reserved_h_bi and fix d_bi=reserved_payload_kg_bi*actual_reserved_h_bi in kg*h for ALL beneficiaries. Split measured loaded, empty and stationary-idle source numerator pools; for each pool allocate A_bi=A_i*d_bi/sum_b(d_bi). Include unused operational responsibility as an identified beneficiary with evidenced payload-capacity kg and actual reserved hours; empty payload0 does not make reserved capacity0, and idle hours never use distance0. Record full vehicle payload capacity, dated reservations, actual loaded/empty km and active/empty/idle hours; no default capacity and no selection of another capacity unit. Every pool requires positive known same-unit total driver, full beneficiary and source reconciliation; unknown reservations/capacity/coverage block completion. A provider-already-attributed consignment vector is adopted once; segment and kg*h evidence is QA only and never multiplies it again. Verify empty/idle coverage in the actual provider scope; missing coverage requires a separately measured vehicle-km or vehicle-h service source with overlap removed before the SAME kg*h attribution. | trip_ID; segment_ID; consignment_ID; source_vector_ID; provider_attribution_scope; actual_loaded_km; actual_empty_km; actual_active_h; actual_empty_h; actual_idle_h; full_vehicle_payload_capacity_kg; reserved_payload_kg_bi; actual_reserved_h_bi; d_bi; A_i; A_bi; all_beneficiaries; unused_operational_responsibility_ID; fuel_or_electricity_amount; source_pool_split; cp_completion | raw source-specific attributed transport exchange quantities before division by Q | ghg-product-2011 |
| completion_sum | all inventory rows | For each external module m restore its normalized exchange q_mr to raw numerator A_mr=q_mr*D_m using its evidenced original denominator D_m, original pool/version and source/exchange identity. A provider-already-raw A_mr is not multiplied again. Reconcile all beneficiaries first; replace superseded lifetime/late-return versions. Merge only identical exchange identity+property+unit+boundary numerators, excluding exact source-ID overlaps; never add kg to MJ, custody outputs to manufacturing burden, or raw to normalized values. For each compatible row r final q_r=(A_core_r+sum_m A_mr)/Q. The failed_kit F source including original inbound is already in A_core_r; never add it again as a missing completion module. The customer product system adds sum(original S supply vectors)/Q with actual original source/inbound IDs, separately from this service, with no overlap of F/O/T; do not apply the service denominator to source vectors twice. Full retail completeness requires every named module, binding, source boundary and reconciliation evidence. | q_mr; D_m; original_pool_ID; original_version; raw_A_mr; source_exchange_ID; source_overlap_register; A_core_r; Q; cp_completion | complete compatible row quantities per reference flow; explicit unresolved-module list |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Verify each bound flow from official original response plus matching hash receipt, observed state, bilingual name, flow type, qualifiers, property/unit chain and carrier state. Unbound reference service, kit and waste identities remain unverified; before dataset completion obtain row-specific binding plus complete actual BOM, quantities and supply/treatment boundaries. Generic count property does not identify a service. | official responses and receipts; supplier BOM; source/destination scope |
| quality_pool | all processes | Keep raw records, actual event dates and all later replacement versions; record uncertainty, exclusions and closure delay. Every Q has an auditable distinct-ID final-valid set; every pool and source numerator reconciles including Q=0. No numerical loss, package mass, allocation factor, useful life or compliance threshold is supplied by this PCR. | event/stock reconciliation; version log; uncertainty register |
| quality_scope | support_completion | Disclose partial coverage until all fixed completion modules and corresponding bilingual cards are evidenced. Presence surveys cover the actual entire store/landlord boundary, not just selected merchandise. Battery absence requires supplier confirmation and actual model/BOM check, not silence in a public specification. Actual sealed nitrogen is contained product inventory, not inferred air discharge. | signed site/landlord survey; supplier confirmation; complete module/source audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | retail_service | Require exact same SKU/kit version and sealed state, Q final-valid original-ID set, dates/horizon and evidence of supplier passive/no-cell configuration. Reference display must equal retail_service selected name; it is a service identity, not binocular manufacture. | nikon-p3-spec |
| validate_responsibility | all processes | Require goods and held-waste balances, signed continuing recipients, conserved original source S/F/O/T, original F input and original inbound once. Nonaccepted external retention does not count as accepted service or automatic retailer waste. Late revocation corrects original numerator and Q even without return. Gross customer handovers are never reduced again by already included nonacceptance. |  |
| validate_modules | all inventory rows | Check each final basis.kind is reference_flow, amounts use common Q, process/protocol scope is one existing ID and sources resolve. Complete claims require compatible source restoration, no duplicate source IDs, full historical asset correction, empty/idle transport and cleaning source/whole-carrier reconciliation. Unknowns or opened/damaged-content state require specific atomic bilingual extension and recheck, not an assumed zero or a silently broader kit card. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Partial incremental retail service unit process, with explicit F supply responsibility. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same evidenced passive sealed-kit route with fixed mandatory completion and separate customer-product S supply. |
| excluded_use | Whole-leaf coverage; opened/electronic/calibrated merchandise; complete retailer footprint while modules remain missing; product manufacturing identity; unsupported comparative or compliance claim. |
| required_metadata | All qualifiers, original source/recipient boundaries, P/Q version, gross custody balances, S/F/O/T, provider scope and module completeness. |
| required_quality_disclosure | Unbound identities; missing actual BOM/quantity/background; partial boundary, unknown presence and zero-Q pools; calibration and all historical replacement corrections. |
| update_trigger | SKU/BOM/seal/route/source changes, added powered test or cell, new module evidence, late acceptance/return or asset-lifetime revision. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-62152 | official_guidance | UNSD CPC Version 3.0, code62152 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62152 | Classification includes group482 and group483; this scope selects only a group483 subset. |
| nikon-p3-spec | handbook | Nikon, PROSTAFF P3 8x42/10x42 official specification. https://imaging.nikon.com/sport-optics/lineup/binoculars/prostaff/prostaff_p3_x42/index.html | Actual 8×42 roof-prism central-focus model anchor and contained nitrogen distinction; no full-kit mass, BOM, no-cell proof, retail factor or treatment capability inferred. |
| ghg-product-2011 | standard | WRI/WBCSD, GHG Protocol Product Life Cycle Accounting and Reporting Standard (2011), chapter9, printed p63 / PDF p65. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General subdivision and physical allocation principles only; fixed service/asset/transport/cleaning formulae are explicit PCR design requirements, not claimed standard quotations or full-standard conformity. |
