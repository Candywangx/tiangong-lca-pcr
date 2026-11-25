---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-household-appliances
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sealed HD9350/90 electric-kettle store-pickup retail service

## 1. Scope and Applicability

This PCR defines one explicitly partial incremental retail-operation module for a homogeneous lot of new Philips HD9350/90 1.7 L mains electric kettles, in their intact sealed original supplier boxes, received at a non-specialized store and physically collected there by the customer. Eligibility requires actual model/market variant, seal, complete original configuration, non-specialized channel and ambient storage evidence. The 2023 manufacturer specification identifies a kettle with separate 360-degree base, cord, removable filter, lid and controller; stainless-steel body is not a complete pure-steel appliance inventory. This is a narrower case of CPC 3.0 62144, whose explanatory note refers to goods of group 448; it does not cover that entire group.

Exclude installed or delivered appliances, loose spare parts, refrigerators, gas appliances, rechargeable/battery appliances, opened/repacked boxes, used goods, active display/boiling tests, repair, installation and consumer use. No demonstration kettle, boiling water, kettle washing or rated-power energy estimate belongs to this route. Counter visual inspection is of the closed box and labels only. Any opening, damage that changes the carrier configuration, test, repackaging, added bag/printed receipt, refrigerant plant or fuel combustion requires a concrete state-specific extension and bilingual cards before completeness; absence must be evidenced, never inferred from silence. Necessary support infrastructure is excluded only as the explicitly named modules governed by completion_modules, not as zero burdens.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-household-appliances |
| classification_refs | CPC 3.0 62144; narrower |
| covered_products | Sealed new complete HD9350/90 original-box customer pickup service |
| excluded_products | Exclude installed or delivered appliances, loose spare parts, refrigerators, gas appliances, rechargeable/battery appliances, opened/repacked boxes, used goods, active display/boiling tests, repair, installation and consumer use. No demonstration kettle, boiling water, kettle washing or rated-power energy estimate belongs to this route. Counter visual inspection is of the closed box and labels only. Any opening, damage that changes the carrier configuration, test, repackaging, added bag/printed receipt, refrigerant plant or fuel combustion requires a concrete state-specific extension and bilingual cards before completeness; absence must be evidenced, never inferred from silence. Necessary support infrastructure is excluded only as the explicitly named modules governed by completion_modules, not as zero burdens. |
| representative_product | HD9350/90 1.7 L 220–240 V electric kettle; original complete sealed configuration |
| production_route | Receive closed box → ambient rack custody → closed-box visual check → qualified physical customer pickup |
| market_state | New, unpowered and unopened; no added retail packaging or printing |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Incremental closed-box store-pickup retail operation |
| How much | One finally accepted original complete appliance-box ID |
| How well | Correct SKU, intact original seal and supplier-warranted full original configuration; actual physical handover and valid qualified acceptance |
| How long or cycle | One prospectively fixed same-configuration pool from store receipt through final acceptance and linked disposition/correction closure |
| reference_flow_link | pickup_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sealed HD9350/90 store-pickup retail service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual HD9350/90 market variant and supplier lot; complete original device/base/cord/filter/accessory and package BOM version; seal and unpowered unopened state; non-specialized store and ambient pickup route; receiving gate and original source IDs; prospective pool dates and final acceptance/revocation cutoff; actual meter and support-module coverage; goods and held-waste custody and background S/F/O/T ledger; electricity provider geography voltage and losses |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | pickup_service | Number of items | Item(s) | Reference is 1 Item(s) of retail service, not one kettle manufacturing exchange; use cp_custody and accepted_count. |
| electricity_unit | retail_power | Net calorific value | MJ | Use measured kWh ×3.6 MJ/kWh after attribution, then divide Q once; cp_power and electricity_calc. Kettle watts are not retail electricity. |
| whole_carrier_mass | sealed_package_waste | Mass | kg | Actual whole original-package consignment net mass; original package remains included. No device count or catalogue dimension substitutes for calibrated kg; cp_waste and waste_dispatch. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual intact original box at store receiving gate with complete supplier source identity |
| starting_condition_role | declared_supply_chain_entry |
| product_classification_scope | Narrower sealed-kettle pickup case within CPC 62144 group448 goods |
| recursive_input_rule | No recursive retail-service input; preserve supplier production source and receiving-gate transport separately |
| upstream_dataset_requirement | Same complete original package and gate-specific source for F, exact S vector for downstream coupling; unresolved supplier data block completeness |
| disclosure | Partial operation module; all necessary support modules, excluded S background and downstream completion obligations disclosed |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | retail; failures | Require closed original boxes of one evidenced HD9350/90 market configuration. Complete original package includes the entire kettle, base, cord, filter, control and lid assemblies, all supplied accessories/instructions and every actual original packaging component. Supplier BOM/source boundary must confirm this configuration; catalogue dimensions and recycled-content claims cannot establish masses or production vectors. Never split the original source vector by arbitrary component mass or count fractions. | philips-hd9350-spec |
| service_gate | pickup_service | Start at documented store receipt of the closed box; finish at actual physical handover plus qualified acceptance of that same original ID. Q counts distinct finally valid original IDs, with seal, correct SKU and complete supplier configuration warranted by traceable supplier records; no internal opening is presumed. Repeated handovers and resale of the same returned ID count once. Revocation removes its prior acceptance even without physical return; a financial discount/refund alone does not remove still-valid acceptance. Retention without qualified acceptance is not service. | retail-foreground-protocol |
| custody | retail; failures | Maintain a goods-only count balance: G_open + I + R = H + U + K + L + G_close, using gross customer physical handovers H and gross physical returns R, supplier handover U, internal condemnation K and actual external custody loss L. K transfers goods into held-waste stock, not outside custody. Separately W_open + K = D + W_close for intact whole-package waste counts; dispatch D removes held waste once, not goods twice. Track measured whole-package kg separately from counts; no service denominator is a stock-balance term. Unknown discrepancy or external recipient/state blocks physical completeness. Any observed external custody-loss L event lies outside these supplier/customer state-specific cards and requires an exact recipient/state extension before completeness; retain the entire original pool and its loss burden, never delete that cohort or relabel it as a customer retention. | retail-foreground-protocol |
| background_ownership | failed_original_package | At the identical receiving gate, assign each original supplier source once to S (final accepted goods), F (retailer-responsible irreversible failure), O (still open/held) or T (named continuing custodian/background owner), with S+F+O+T conserving each original source. Same-item returns replace prior states. The incremental service carries only F/Q of complete original manufacturing plus inbound-to-receiving transport in failed_original_package; S is excluded and downstream product systems must restore its exact source vector S/Q. O remains pending and T has named continuing responsibility including supplier return. Background reassignment creates no physical movement. No avoided-production credit on supplier returns. An unauthorized permanent demonstrator retains the SAME original source as T to the named asset; never F plus a second full new asset; such events block this no-demo route pending extension. | retail-foreground-protocol |
| route_absence | retail | Require site plans, circuit walkdown, purchase/service logs and event observations proving no kettle energization, added packaging/printing, fuel combustion or refrigerant equipment inside this module. Customer travel/use and delivery/installation are outside the route. Actual store heating/cooling, cleaning and infrastructure do not disappear: only the explicitly partial completion_modules method may exclude them here. Unknown presence is not zero; a refrigerant/fuel route is ineligible until a fully specified extension exists, not a choice of an unspecified future fuel. | retail-foreground-protocol |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Closed-box receiving, ambient custody and pickup | required | Every eligible service pool | foreground production | pickup_service |
| failures | Failed original-source responsibility and intact waste dispatch | conditional | Actual F source or actual sealed whole-package waste; prove absence from cp_background/cp_waste if none; unknown blocks completeness | failure handling | pickup_service |

### Process: Closed-box retail operation (`retail`)

#### Inputs

##### Product flows

###### Alternating current (`retail_power`)

Metered POS, lighting and fan operation assigned by electricity_calc; measured retail_MJ_per_service. Provider/voltage/supply geography/losses must be selected separately. No kettle use energy.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured attributed electricity in MJ per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_power`
- Sources: `retail-foreground-protocol`

#### Outputs

##### Product flows

###### Sealed HD9350/90 store-pickup retail service (`pickup_service`)

1 Item(s) per reference flow, from Q by accepted_count and cp_custody. This is the service output, not merchandise manufacturing.

- Selected flow: Sealed HD9350/90 store-pickup retail service
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_custody`
- Sources: `retail-foreground-protocol`

### Process: Failed source and terminal carrier (`failures`)

#### Inputs

##### Product flows

###### Complete sealed original HD9350/90 appliance package at store receiving gate (`failed_original_package`)

Use failure_source_count_per_service from original_background with exact supplier V_s; whole original kettle/base/cord/filter/accessories/instructions/package manufacturing plus inbound transport. Only F responsibility, not all I or supplier-return T. This is source-equivalent background input; gross merchandise movements remain cp_custody, not duplicate manufacturing exchanges.

- Selected flow: Complete sealed original HD9350/90 appliance package at store receiving gate
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured original-source failure package count per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_background`
- Sources: `retail-foreground-protocol`; `philips-hd9350-spec`

#### Outputs

##### Product flows

###### Intact sealed original HD9350/90 appliance package handed to supplier (`supplier_handoff_package`)

Measured gross actual supplier-handoff U/Q under physical_transfers. Keep original ID, actual recipient, intact sealed full package state and same-gate source responsibility T in the ledger. This is a physical product output, not a second manufacturing vector, automatic credit or invented movement from a background reassignment.

- Selected flow: Intact sealed original HD9350/90 appliance package handed to supplier
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured state-specific physical original-package count per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_supplier`
- Sources: `retail-foreground-protocol`

###### Intact sealed original HD9350/90 appliance package retained by unaccepted customer (`external_retained_package`)

Measure X_final/Q under physical_transfers for actual finally unaccepted external intact original packages, with identified recipient, seal/full configuration evidence, original gross handover event and no physical return. This state replaces any prior accepted disposition of that SAME original ID/event; acceptance revocation creates no second movement. Named F or T background responsibility follows original_background separately; neither creates avoided-production credit. Unknown recipient or opened/broken state blocks this card and completeness.

- Selected flow: Intact sealed original HD9350/90 appliance package retained by unaccepted customer
- Flow property / unit: Number of items / Item(s)
- Amount rule: Measured state-specific physical original-package count per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_external`
- Sources: `retail-foreground-protocol`

##### Waste flows

###### Intact sealed complete HD9350/90 appliance-box waste (`sealed_package_waste`)

Use actual whole_carrier_kg_per_service from waste_dispatch; includes complete original device and original package once. Condemnation stock is not dispatch; provider scope must match actual intact whole carrier.

- Selected flow: Intact sealed complete HD9350/90 appliance-box waste
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched whole-carrier net kg per reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `retail-foreground-protocol`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| prospective_pool | retail; failures | Before observations fix a same-SKU/configuration/site/route pool and event cutoff. Include idle/closed periods, refused orders, repeated attempts, reversed acceptance and every failed or zero-sale subcohort. Attribute raw numerators before dividing once by final Q. Link late return/acceptance changes to original IDs and replace the original numerator, Q and fates together with version history; never shift them to a new successful cohort. Q=0 is explicitly unnormalizable with all raw amounts retained. | retail-foreground-protocol |
| power_allocation | retail_power | Use disjoint direct meters first. For a shared source separate measured active, idle and fixed lighting/fan numerator pools E_c in kWh, reconciling sum E_c to the parent after only included submeter deductions. Allocate each pool across every actual beneficiary b using a single causal same-unit positive driver d_bc: task-active seconds for active POS, reserved terminal-hours including idle for terminal idle, illuminated floor-area-hours for lighting, served floor-area-hours for a fan. No mixed driver sum; no numeric zero driver for a period with energy. Use electricity_calc. Keep all failed events as beneficiaries in the original pool. | ghg-product-2011; retail-foreground-protocol |
| physical_transfer_allocation | supplier_handoff_package; external_retained_package | These cards preserve actual physical product custody outputs only; they are not co-products or additional functions for allocation. Do not allocate retail numerators away from Q to these transfers or treat product outputs as negative background demand. Keep source responsibility S/F/O/T, actual terminal treatment and physical transfer quantities separate; the final source owner carries the original burden once without substitution or recycling credits. | retail-foreground-protocol |
| asset_responsibility | completion_modules | For each separately evidenced complete building, rack, POS terminal, lighting fixture, fan and handling trolley, choose direct subdivision or one causal beneficiary exposure e_jb in its declared unit and expected total lifetime exposure L_j in that SAME unit. Allocate manufacturing/installation vector V_j by e_jb/L_j; building/rack uses reserved m2*h, POS and fan/fixture/trolley use actual reserved service h including idle. Record all beneficiaries and historical versions, ensure cumulative fractions <=1, replace every previous allocation when L_j changes, and at actual retirement set final L_j=sum all lifetime exposures and correct all prior allocations. Separate event maintenance and actual terminal waste; no full asset purchase again beside exposure. Whole retired mass is direct net weighing OR exact component reconstruction, exclusive modes. Apply its final responsibility fraction once, never again a manufacture fraction. | ghg-product-2011; retail-foreground-protocol |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | retail | pickup_service | original-ID acceptance and custody event ledger | pool_id; original_id; event_id; model_variant; supplier_lot; BOM_version; seal_state; receiving_gate; source_id; event_time; physical_recipient; physical_state; H; R; U; K; L; I; G_open; G_close; W_open; D; W_close; package_kg; X_final; gross_handover_id; physical_return_id; continuing_owner; background_responsibility; final_acceptance; revocation; financial_only; cutoff |Prospectively freeze pool/route and cutoff. Scan each closed-box serial/traceable original ID on receipt, each physical handover/return, condemnation, waste dispatch and acceptance change; retain seal photos, supplier completeness warranty, signed acceptance and supplier/custodian receipt. Calibrated scale records actual whole-package kg separately. Investigate missing IDs and retained external unaccepted goods; do not infer waste. accepted_count and custody_balance; preserve gross movements and finally valid Q independently; per reference flow | Item(s); kg | Every event and opening/closing stock | Whole declared pool plus linked later corrections | Actual ambient receiving/rack/pickup footprint and all recipient states | per reference flow | Calibrated scale, timestamped scans, signed acceptance and chain of custody |
| cp_power | retail | retail_power | meter and shared driver ledger | pool_id; component_id; meter_id; calibration; meter_boundary; start_kWh; end_kWh; parent_kWh; included_submeter_ids; E_c; direct_kWh; beneficiary_id; d_bc; d_pc; driver_unit; active_s; reserved_terminal_h; illuminated_m2h; served_m2h; source_id; provider; voltage; geography; losses; Q |Read calibrated cumulative meters at opening/closing and source-component interval changes; map actual circuits and all beneficiaries. Direct meters or separately measured/reconciled active, idle and fixed-component numerator pools are exclusive. Log same-unit driver for every beneficiary and idle/closed/failure period; retain source and supply boundary records. Do not energize kettles to estimate retail power. electricity_calc; allocate raw kWh then convert 3.6 MJ/kWh and divide Q once; per reference flow | kWh; s; h; m2*h | Meter intervals and each activity/reservation interval | All operating and idle hours in pool | Only included circuits, no support-module duplication | per reference flow | Meter calibration, circuit walkdown, all-beneficiary driver reconciliation and electricity invoices |
| cp_background | failures | failed_original_package | source-vector and final background-owner ledger | pool_id; original_id; source_id; source_originals; actual_model_BOM; V_s; receiving_gate; inbound_transport_coverage; B_s_S; B_s_F; B_s_O; B_s_T; continuing_owner; physical_recipient; physical_state; replacement_version; Q |Obtain supplier primary inventory for one complete actual sealed configuration including original package and inbound transport to the declared gate, or exact manufacturing/component vectors with conserved source IDs; do not infer from main-body steel. Match each original ID and final responsibility to custody events. Supplier-return T retains named ongoing burden; failed external retention requires actual recipient/state and responsibility. Replace old source allocations on late events. original_background; source counts and vectors once; per reference flow | Item(s); source vector | Every original source and fate change | Original receipt history through final disposition | Same model, package, receiving gate and named source owners | per reference flow | Signed complete supplier BOM/inventory, gate-specific transport coverage and named owner receipts |
| cp_waste | failures | sealed_package_waste | intact whole-package terminal consignment | pool_id; consignment_id; original_id; seal_state; component_completeness; gross_kg; tare_kg; calibration; D; W_open; W_close; terminal_provider; treatment_admission; provider_transport_coverage; source_id; Q |At actual waste handover weigh the full closed appliance-box carrier on a calibrated scale and deduct only actual external consignment tare, not original package. Match complete contents and intact sealed state to original IDs and terminal acceptance. Held condemnation alone is not dispatch. Opened, leaking or stripped devices cannot use this card. waste_dispatch; actual net dispatched kg/Q once; per reference flow | kg; Item(s) | Each consignment; independent stock close | Whole pool and linked final dispatch | Actual held waste and admitted terminal boundary | per reference flow | Gross/tare slips, seal/content evidence and signed terminal route receipt |
| cp_supplier | failures | supplier_handoff_package | state-specific physical handover/retention view | pool_id; original_id; event_id; U; X_final; physical_recipient; physical_state; seal_state; component_completeness; gross_handover_id; physical_return_id; final_acceptance; revocation; source_id; continuing_owner; background_responsibility; Q | Read the same original cp_custody ledger and signed recipient records; verify closed complete original package at actual supplier dispatch or final unaccepted external retention. Retain actual handover ID and any return/revocation; do not remeasure or duplicate the original event. Complete source/background responsibility is linked separately without a physical credit. | Item(s) | Every dispatch and final external state change | Full original pool and linked late correction | Actual named supplier/customer and intact sealed original package | per reference flow | Signed receipt, current seal/configuration observation, same original event and source IDs |
| cp_external | failures | external_retained_package | state-specific physical handover/retention view | pool_id; original_id; event_id; U; X_final; physical_recipient; physical_state; seal_state; component_completeness; gross_handover_id; physical_return_id; final_acceptance; revocation; source_id; continuing_owner; background_responsibility; Q | Read the same original cp_custody ledger and signed recipient records; verify closed complete original package at actual supplier dispatch or final unaccepted external retention. Retain actual handover ID and any return/revocation; do not remeasure or duplicate the original event. Complete source/background responsibility is linked separately without a physical credit. | Item(s) | Every dispatch and final external state change | Full original pool and linked late correction | Actual named supplier/customer and intact sealed original package | per reference flow | Signed receipt, current seal/configuration observation, same original event and source IDs |
| cp_completion | retail | support modules | module presence, source, asset and route ledger | module_id; actual_model_BOM; provider_contract; source_ids; stage_id; module_pool; module_version; raw_numerator; numerator_unit; original_denominator; beneficiary_id; presence_evidence; meter_kWh; served_m2h; O_j; I_j; U_j; C_j; E_j; W_j; D_j; H_open_j; H_close_j; Z_open_j; Z_close_j; Z_dispatch_j; carrier_id; container_residue_source_kg; whole_container_residue_net_kg; gas_interval_id; delta_h; gas_measurement_mode; rate_in_kgph; rate_out_kgph; rate_differential_kgph; concentration_mgpm3; airflow_measured_m3ph; airflow_common_m3ph; T_measured_K; T_common_K; P_measured_abs; P_common_abs; water_mole_measured; water_mole_common; concentration_state_basis; gas_volume_conversion_evidence; blank_rate_kgph; source_attribution_mode; source_fraction; source_attribution_evidence; A_jk; G_k; species_inlet_kg; species_outlet_air_kg; capture_export_kg; other_exit_kg; delta_air_stock_kg; delta_capture_stock_kg; species_mode; blank_kg; source_component_origin_kg; composition; concentration; species_conversion; dilution_water_kg; external_carrier_kg; V_supply; rho_supply; rho_discharge; cloth_source_id; a_b; L_area; terminal_cloth_kg; laundry_cloth_kg; laundry_event; laundry_provider_coverage; formulation_kg; added_water_kg; unused_kg; source_destination_kg; wet_carrier_kg; V_discharge; rho; temperature; asset_id; V_j; e_jb; exposure_unit; L_j; L_final; lifetime_version; previous_allocations; repair_source_id; replacement_source_id; terminal_net_kg; provider_stage_coverage; segment_id; trip_id; mode; m_b; d_st; C_b; C_all; capacity_unit; reserved_payload_kg_bst; reserved_h_bst; available_payload_kgh; reservation_intervals; empty_km; idle_h; attributed_provider_amount; provider_coverage; normalized_quantity; exchange_id; property; unit; pool_id; Q |Inventory every named actual support object and operation with plans, contracts, measured raw records and all beneficiaries. Collect calibrated masses/meters, same-unit exposures, lifetime versions and actual terminal receipts for each complete asset; cleaning formulation/water/destination and container-residue dispatch by carrier_id; gas source/port interval rate or concentration/airflow records with actual temperature, absolute pressure, wet/dry basis and blank/source-attribution mode under cleaning_completion; and route mass/distance/capacity/empty/idle and provider boundaries. No actual observation is supplied by this PCR. Require missing specific atomic bilingual cards and identities before completion; absence requires source records. completion_modules; cleaning_completion; lifetime_calc; transport_completion; combine_modules; retain each raw numerator and original denominator, deduplicate exact sources and normalize once to Q; per reference flow | kg; MJ; Item(s); m2*h; h; t*km; vehicle-km | Each event, meter interval, module revision and asset lifetime revision | Full common pool and all relevant asset history | All actual necessary support beneficiaries and routes | per reference flow | Signed bounded contracts/BOM, calibrated ledgers, module-source deduplication and complete lifetime revisions |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_count | pickup_service | Q = count(distinct original_id where final qualified acceptance is valid at cutoff); repeated handover/resale stays one, revoked final acceptance is absent, not subtracted twice. For Q=0 retain raw pool, no normalized result. | original_id; final_acceptance; revocation; cutoff; pool_id | Q | retail-foreground-protocol |
| custody_balance | retail; failures | Goods-only: G_open+I+R-H-U-K-L-G_close=0; held-waste: W_open+K-D-W_close=0; quantify each original ID/event, reconcile whole-package kg separately. K is internal condemnation; D is later waste dispatch, not another goods deduction. | G_open; I; R; H; U; K; L; G_close; W_open; D; W_close; original_id; event_id; package_kg | goods_balance; held_waste_balance | retail-foreground-protocol |
| original_background | failed_original_package | For source s retain its complete original manufacturing+inbound-to-receiving vector V_s per one actual original package and final source-equivalent counts B_s_S; B_s_F; B_s_O; B_s_T. Their sum equals source originals. Service raw failure vector = sum_s B_s_F*V_s; downstream accepted-product vector = sum_s B_s_S*V_s/Q; T is named continuing responsibility, O is unresolved. Candidate input count = sum_s B_s_F/Q, linked separately to each actual V_s. No arbitrary kg apportionment of V_s; verified component source vectors are required for any later component separation. | source_id; V_s; B_s_S; B_s_F; B_s_O; B_s_T; source_originals; continuing_owner; Q | failure_source_count_per_service; failure_vector; downstream_S_vector | retail-foreground-protocol |
| physical_transfers | supplier_handoff_package; external_retained_package | Supplier output = U/Q using actual gross supplier dispatch count. External unaccepted output = X_final/Q, where X_final counts distinct actual externally retained original IDs with invalid final acceptance, evidenced intact sealed configuration and a named recipient, linked to the original H event and without a recorded return. A later reversal replaces that original state/output version; do not add another handover or repeat source manufacture. Keep accepted service Q, gross physical H/R/U and final X_final distinct. These physical product outputs have no automatic substitution or recycling credit; require named continued burden T or explicit retailer failure F, with exact original-source conservation. | U; X_final; original_id; gross_handover_id; physical_return_id; physical_recipient; physical_state; seal_state; component_completeness; final_acceptance; revocation; source_id; continuing_owner; background_responsibility; Q | supplier_physical_count_per_service; external_unaccepted_count_per_service | retail-foreground-protocol |
| electricity_calc | retail_power | For each disjoint component c, A_pc = E_c*d_pc/sum_b d_bc, or A_pc=direct measured kWh when already dedicated; these modes are exclusive. Reconcile sum_b A_bc=E_c, sum_c E_c=parent eligible kWh. Retail input = 3.6*sum_c A_pc/Q MJ per reference flow. Retain active/idle/fixed numerator splits and same-unit driver in each component; independent disjoint meters receive no parent subtraction. | E_c; d_pc; d_bc; beneficiary_id; component_id; direct_kWh; parent_kWh; meter_boundary; Q | retail_MJ_per_service | retail-foreground-protocol |
| waste_dispatch | sealed_package_waste | Raw whole-carrier waste kg = sum dispatched consignment gross_kg - tare_kg, with actual whole sealed package IDs and admitted terminal provider. Normalize its attributable raw kg/Q once. Direct dispatch is not reduced again by opening/closing held-waste stocks; those independently reconcile D. Whole original package includes all original packaging and device parts; no separate component waste or second packaging terminal beside this carrier. | consignment_id; original_id; gross_kg; tare_kg; terminal_provider; D; W_open; W_close; Q | whole_carrier_kg_per_service | retail-foreground-protocol |
| completion_modules | retail | Complete-service use requires separate actual modules for (1) complete building and fixed premises; (2) rack/counter, POS, lighting fixture, fan and trolley capital, installation, event maintenance and end-of-life; (3) actual store cleaning and heating/cooling; (4) post-receipt external stock-transfer/supplier-return/failed-stock transport and waste treatment not already in V_s or terminal provider. For each module identify actual model/BOM or signed bounded provider, raw ledger source IDs, pool/version, numerator unit, its original denominator and all beneficiaries; absence requires plans and records. Capital uses asset_responsibility and lifetime_calc, never omissions beside electricity. Only an evidenced electric-resistance/ventilation-only thermal route may complete this no-fuel/no-refrigerant design: meter kWh and allocate disjoint measured source pools by same-unit served m2*h; any actual fuel or refrigerant plant makes the route incomplete pending explicit atomic extension. Cleaning applies cleaning_completion using actual formulation-specific purchased kg, added water kg, retained unused kg and mutually exclusive source-origin destinations; direct weighed whole wet-waste carrier kg is separate from formulation-origin kg. Used-to-rinsed/retained is a replacement state, never another source destination. Water import is metered without subtracting internal reuse; direct effluent is V_discharge*rho at measured temperature, without evaporation/storage correction. Cleaning material, cloth, water, cleaner, effluent and terminal carriers each need specific bilingual cards and provider boundaries before completion. | module_id; actual_model_BOM; provider_contract; source_ids; module_pool; module_version; raw_numerator; numerator_unit; original_denominator; beneficiary_id; presence_evidence; meter_kWh; served_m2h; O_j; I_j; U_j; C_j; E_j; W_j; D_j; H_open_j; H_close_j; Z_open_j; Z_close_j; Z_dispatch_j; carrier_id; container_residue_source_kg; whole_container_residue_net_kg; gas_interval_id; delta_h; gas_measurement_mode; rate_in_kgph; rate_out_kgph; rate_differential_kgph; concentration_mgpm3; airflow_measured_m3ph; airflow_common_m3ph; T_measured_K; T_common_K; P_measured_abs; P_common_abs; water_mole_measured; water_mole_common; concentration_state_basis; gas_volume_conversion_evidence; blank_rate_kgph; source_attribution_mode; source_fraction; source_attribution_evidence; A_jk; G_k; species_inlet_kg; species_outlet_air_kg; capture_export_kg; other_exit_kg; delta_air_stock_kg; delta_capture_stock_kg; species_mode; blank_kg; source_component_origin_kg; composition; concentration; species_conversion; dilution_water_kg; external_carrier_kg; V_supply; rho_supply; rho_discharge; cloth_source_id; a_b; L_area; terminal_cloth_kg; laundry_cloth_kg; laundry_event; laundry_provider_coverage; formulation_kg; added_water_kg; unused_kg; source_destination_kg; wet_carrier_kg; V_discharge; rho; temperature | required_module_manifest | retail-foreground-protocol |
| cleaning_completion | completion_modules | For each actual formulation source j collect opening unused O_j, purchased I_j, supplier-return U_j, closing unused C_j and mutually exclusive final formulation-origin destinations E_j (effluent), W_j (actual wet-wipe carrier source kg by carrier_id), A_jk (each emitted species k as actual formulation-origin component kg, never inverse-concentration whole-mixture equivalent). O_j+I_j+H_open_j+Z_open_j=U_j+C_j+E_j+W_j+D_j+Z_dispatch_j+H_close_j+Z_close_j+sum_k A_jk; H_open_j/H_close_j are actual used/rinsed unresolved formulation-origin kg retained at opening/closing; Z_open_j/Z_close_j are original-source kg retained in used containers/residue stock; D_j is a separately measured actual dispatched dry-carrier source portion. Z_open_j/Z_close_j include only residues still physically held in containers; actual dispatched container residue enters Z_dispatch_j, measured as original formulation-source kg by carrier_id, never still in closing stock. W_j covers wet-wipe-origin portions only; the same residue cannot also enter E_j or W_j. The directly weighed whole dispatched container-plus-residue net kg is a separate treatment-carrier quantity including the actual container, not formulation-source kg; preserve its carrier_id, original source attribution and measured residue evidence without multiplying source fraction twice. Unknown residue/source partition blocks closure. These destinations are mutually exclusive, retain their original source IDs and exclude external water/dirt/container and external reaction atoms; used-to-rinsed/held is a replacement state, not another consumption. Actual component/element source conservation establishes A_jk once; never divide species kg by a formulation fraction and sum multiple whole-formulation equivalents. Unknown source portions block closure. Collect actual composition, concentration, species conversion, dilution-water kg and external dirt/cloth/container mass separately; absent species require formulation/process evidence, unknown blocks the module. Measure water import as V_supply*rho_supply and direct whole liquid discharge as V_discharge*rho_discharge at actual measured temperature; do not reconstruct whole effluent from a water-only balance, subtract evaporation or reuse from direct meters, or include outside cloth/container mass in source-origin kg. An internal volatile source is not an external elementary emission. For each species k separately reconcile actual source generation G_k plus measured raw inlet mass with measured external air outlet, actual external capture-carrier export, other actual exits and changes in both air and capture stocks; internal capture is not also an external export. Raw absolute inlet/outlet and already differential or blank-corrected readings are exclusive modes, removing the same background/blank once. Fix gas sampling to matched intervals i with actual delta_h_i in h and one declared mutually exclusive mode: mass-rate mode integrates each measured port species kg/h as M_port_k=sum_i rate_port_kgph_ki*delta_h_i; concentration mode integrates M_port_k=sum_i concentration_mgpm3_ki*airflow_common_m3ph_i*delta_h_i/1000000. Concentration and airflow must share the same actual or documented reference temperature, absolute pressure and wet/dry gas basis. When conversion is necessary, record kelvin T, absolute P and measured water mole fractions for both states and use airflow_common=airflow_measured*(P_measured_abs/P_common_abs)*(T_common_K/T_measured_K)*(1-water_mole_measured)/(1-water_mole_common), only with verified applicability of that gas-volume conversion; already matched volumes receive no conversion. Record calibration, port, interval, sampling coverage and conversion evidence; missing gas state or water data blocks concentration-mode conversion. Absolute inlet/outlet port integrations feed the control-volume balance separately; an already differential rate is integrated once without subtracting inlet again; an already blank-corrected rate is not blank-subtracted again. For uncorrected data integrate the matched blank kg/h over the same intervals and remove it once. Source attribution is either already source-resolved measured data or one evidenced source_fraction applied once to the corresponding integrated external species quantity; the modes are exclusive and already source-resolved/blank-corrected values receive no repeated fraction/correction. An assumed source fraction, catalogue ventilation rate or cleaner consumption cannot substitute for these raw measurements. Elementary atmosphere rows require actual external species kg, source attribution and complete control-volume evidence, not cleaner consumption or unknown zero. Investigate negative signed net observations, without zero clamp or unreviewed uptake credit. Actual external molecular species kg and formulation-origin component kg remain distinct; missing species/capture/stock/boundary data block completion. Source-origin quantities allocate manufacturing only; direct measured whole wet carrier mass determines treatment, not source composition multiplied again. For each complete reusable cloth record actual cleaned area a_b and total lifetime area L_area in m2; use f_b=a_b/L_area for its exact whole-cloth source, lifetime revisions replacing all historical beneficiaries and whole terminal kg*f_b once. No h unit for cloth area and no separate cloth acquisition beside its allocated source. Contracted laundering must specify actual cloth kg/event, provider-covered detergent/water/heat/electricity/effluent/transport stages and source IDs, excluding them from the store module; unknown provider coverage blocks completion. | O_j; I_j; U_j; C_j; E_j; W_j; D_j; H_open_j; H_close_j; Z_open_j; Z_close_j; Z_dispatch_j; carrier_id; container_residue_source_kg; whole_container_residue_net_kg; gas_interval_id; delta_h; gas_measurement_mode; rate_in_kgph; rate_out_kgph; rate_differential_kgph; concentration_mgpm3; airflow_measured_m3ph; airflow_common_m3ph; T_measured_K; T_common_K; P_measured_abs; P_common_abs; water_mole_measured; water_mole_common; concentration_state_basis; gas_volume_conversion_evidence; blank_rate_kgph; source_attribution_mode; source_fraction; source_attribution_evidence; A_jk; G_k; species_inlet_kg; species_outlet_air_kg; capture_export_kg; other_exit_kg; delta_air_stock_kg; delta_capture_stock_kg; species_mode; blank_kg; source_component_origin_kg; composition; concentration; species_conversion; dilution_water_kg; external_carrier_kg; V_supply; rho_supply; V_discharge; rho_discharge; temperature; cloth_source_id; a_b; L_area; previous_allocations; terminal_cloth_kg; laundry_cloth_kg; laundry_event; laundry_provider_coverage; source_id | disjoint_cleaning_source_and_carrier_numerators | retail-foreground-protocol |
| lifetime_calc | completion_modules | For actual asset j use f_jb=e_jb/L_j, in one declared unit per asset. At revision v recompute all previous beneficiary allocations V_j*f_jb,v and replace old versions, not charge only a new present fraction. At retirement use L_final=sum lifetime e_jb and redistribute residual across all historical beneficiaries. Actual event repair/replacement vectors have separate source IDs and their actual exposure assignments; no unrelated summed repair-material masses as complete-device acquisition. Terminal whole-carrier net kg times final f_jb once. Provider-included lifecycle stages are removed from separate modules, and all asset versions stay reconciled. | asset_id; V_j; e_jb; exposure_unit; L_j; L_final; lifetime_version; previous_allocations; repair_source_id; replacement_source_id; terminal_net_kg; provider_stage_coverage | replaced_lifetime_allocations; terminal_allocations | retail-foreground-protocol |
| transport_completion | completion_modules | For each actually missing segment s/trip t identify mode, gross cargo mass m_b kg, distance d_st km, the fixed capacity coordinate C_b=reserved_payload_kg_bst*reserved_h_bst in kg*h for each SAME actual segment s/trip t, with C_all=sum_b C_b over every actual beneficiary including empty and stationary idle reservations. Use actual segment reservation intervals and physical payload capacity; reconcile nonoverlapping reservations to available payload-kg*h, require known positive C_all and retain failed/zero-sale beneficiaries. No mass/time/distance selector or mixed-dimension capacity is allowed. A provider-already-attributed consignment amount is used once; segment data then verify coverage, never multiply allocation again. Otherwise loaded activity m_b*d_st/1000 t*km may be used only with provider evidence covering the actual loaded, empty-return and idle route. If empty/idle excluded, add a disjoint actual vehicle-km or vehicle-h service using its observed distance/time and C_b/C_all; never make zero tonnes an empty-trip zero. Require measured all-beneficiary capacity records; no generic unknown fuel. No duplicate transport inside V_s, supplier-return owner or waste-treatment provider. | segment_id; trip_id; mode; m_b; d_st; C_b; C_all; capacity_unit; reserved_payload_kg_bst; reserved_h_bst; available_payload_kgh; reservation_intervals; empty_km; idle_h; attributed_provider_amount; provider_coverage; source_id | disjoint_route_numerators | retail-foreground-protocol |
| combine_modules | retail; failures | For each external module recover raw compatible exchange numerator = its normalized quantity * its evidenced original denominator, with pool/version and source-ID trace. Deduplicate exact source/stage IDs against this module, V_s and all other modules. Add only identical exchange/property/unit numerators row by row; keep kg, MJ, item, t*km, vehicle-km and h separate. Divide the combined common-pool raw numerator by corrected Q exactly once; do not add already normalized rows to raw amounts. If bases/pools or original denominators cannot be reconciled, report the partial modules without a complete-service claim. | module_id; module_version; source_id; stage_id; normalized_quantity; original_denominator; exchange_id; property; unit; pool_id; raw_numerator; Q | compatible_combined_numerator_per_service | retail-foreground-protocol |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_scope | retail; failures | Document actual eligible variant, seals, untouched configuration, ambient route, absence observations and every needed support module; no unknown may be coded absent. | Supplier BOM/label/seal photos, site plans and event logs |
| q_period | retail; failures | Report prospective pool, event dates, cutoff, idle/failure subcohorts, Q and raw totals, late corrections and versions. Unresolved custody, O or Q=0 forbids final normalized result. | Linked original-ID event and version ledger |
| q_vectors | failed_original_package | Manufacturer brochure supports identity, not a complete manufacturing vector or package mass. Require same-gate actual complete supplier vector, conserved S/F/O/T responsibility and no later resale duplicate. | Supplier complete inventory, source-ID conservation and named continuing owners |
| q_measure | retail_power; sealed_package_waste | Preserve calibration, resolution, uncertainty and missing interval flags, all raw numerator units and actual provider/terminal scope. Do not clamp unexplained differences or substitute ratings as metering. | Calibration certificates, reconciled meter/scale ledgers and provider evidence |
| q_completeness | retail | This module alone is partial. Complete background use requires completed support modules, actual row-specific identities and quantities, aligned bilingual cards and exact-source/version/denominator aggregation. Do not infer compliance with a complete GHG or electrical safety standard. | Module manifest, bilingual parse, source hashes and reviewer completion record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| check_scope | retail; failures | Reject complete-service claims from this partial module. Confirm actual closed original package, route and required qualifiers; reconcile supported absence records and every named module. If opening, actual new consumable, test or damaged carrier exists, add specific measured atomic cards/protocols in both languages before declaring that dataset complete. No mandatory actual exchange may be dropped as an unknown zero. | retail-foreground-protocol |
| check_denominator | pickup_service | Require Q>0 and distinct final-valid original IDs. Recompute all late-event replacements; do not subtract revoked IDs twice after filtering final-valid IDs. Compare physical goods-only and held-waste balances independently; service acceptance without physical return changes Q/background only, not gross stock movement. | retail-foreground-protocol |
| check_background | failed_original_package; sealed_package_waste | Conserve every original source and exact complete configuration across S/F/O/T; retain final recipient/state evidence for external unaccepted goods and named owner of T. Unknown O or custody loss cannot establish a final result. Whole original-box waste may use sealed_package_waste only when actual whole closed carrier and treatment admission match; opened, dismantled, burnt or leaking carriers need distinct extensions. No double original production for later resale, supplier return or an asset transfer. | retail-foreground-protocol |
| check_measurement | retail_power; sealed_package_waste | Require calibrated complete-period meters and consignment gross/tare/net records. Reconcile parent boundaries, pool allocation sums and units, source IDs, provider overlap and one normalization. The electricity UUID does not specify generation mix, voltage or losses. Nominal kettle power, two-year guarantee, packaging dimensions and recycled-content promotion are not measured store activity, lifetime, full BOM or conformity limits. | philips-hd9350-spec; retail-foreground-protocol |
| check_identity | pickup_service; failed_original_package; sealed_package_waste | Unbound candidate rows remain specific unresolved identities. Before use as bound exchanges require independently read official original flow response plus matching integrity receipt, public state, bilingual names, product/waste type, configuration/route, property/unit and compartment match. Supplier background and treatment provider must match actual object, receiving gate and terminal carrier. A search result, catalogue similarity or service count unit does not prove identity or environmental background. | retail-foreground-protocol |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Partial incremental store-operation module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Comparable same-configuration sealed pickup after explicit applicability and required support completion |
| excluded_use | Full store/full appliance life cycle or all group448 goods; uncompleted standalone results as complete retail service; safety certification |
| required_metadata | Every required qualifier, pool/Q/source/owner ledger, event cutoff, electricity provider and module boundaries |
| required_quality_disclosure | Partial scope, identities, unresolved supplier/BOM data, actual presence evidence, missing modules, uncertainty and unnormalizable pools |
| update_trigger | Actual variant/package/channel change; new exchange; late acceptance/return; asset lifetime or provider-boundary revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62144 | official_guidance | UNSD CPC 3.0 62144, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62144 | Classification only: non-specialized-store services for group448 goods; narrower product/service case, no full-leaf claim |
| philips-hd9350-spec | handbook | Philips HD9350/90 specification, issue 2023-03-12, version 7.7.1, pp.1–3, https://www.documents.philips.com/assets/20211219/a86748c87fd3478ebc96ae03005308a5.pdf | Actual appliance identity and complete-device distinction only; no operating energy, mass, lifetime or supplier full inventory inferred |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter9 p.63, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Subdivision before allocation and physical relationship principles only; specific drivers are PCR foreground protocol choices, no complete-standard conformity claim |
| retail-foreground-protocol | method_factor | PCR-defined prospective foreground measurement/reconciliation method in sections4–9; dataset-specific source records must still be collected | Declared service/custody/source ownership, actual meter/scale collection and explicit partial-module completion methods; authored design, no supplied numeric observations |
