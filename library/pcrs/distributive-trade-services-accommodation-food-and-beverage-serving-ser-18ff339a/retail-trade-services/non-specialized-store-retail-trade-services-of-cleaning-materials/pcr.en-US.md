---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-cleaning-materials
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Incremental walk-in retail service for Cif Professional Cream Cleaner Lemon 7508636 original 2 L bottles

## 1. Scope and Applicability

This candidate defines one original 2 L micro-particle scouring-cream bottle retail service, not cleaning performance. CPC35334 is within3533 and the62176 commodity boundary. Verify the actual abrasive formulation and retail channel before applicability; complete SERVICE requires every real atomic source and identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-cleaning-materials |
| classification_refs | CPC3.0 62176; External accepted mapping/ADR is authoritative; proposed narrower is not an acceptance decision. |
| covered_products | Incremental walk-in retail service for Cif Professional Cream Cleaner Lemon 7508636 original 2 L bottles |
| excluded_products | Other SKU/concentration/state; specialized stores; online/delivery; refill; merchandise use/manufacturing |
| representative_product | Cif Professional Cream Cleaner Lemon 7508636; original 2 L bottle; hard-surface micro-particle scouring cream; actual lot complete formulation/packaging BOM independently verified before use. |
| production_route | Mixed-assortment physical supermarket, walk-in/ambient/intact counter handover |
| market_state | Abrasive cream suspension in a complete original bottle; not pure surfactant, dishwashing detergent, water, dry powder or abrasive-particle mass alone. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Incremental receiving-to-qualified physical-counter retail service for the specified complete original bottle |
| How much | 1 finally valid original-ID service; Q is distinct final-valid count of the same-configuration period pool |
| How well | Correct SKU/lot/intact closure/recipient and accepted quantity-condition under service_count |
| How long or cycle | Prospectively declared receipt/storage/handover period with late-return cutoff and original-pool corrections; no zero-sale deletion |
| reference_flow_link | service_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Incremental walk-in retail service for Cif Professional Cream Cleaner Lemon 2 L original bottles |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | original SKU and formulation/lot; complete packaging BOM; mixed physical-store channel; receiving/counter gates; qualified acceptance and cutoff; Q and S/F/T/O; original source/owner/pool/version; partial core and mandatory completion status; measurement uncertainty; unbound identities |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | service_output | Number of items | Item(s) | Reference amount is1 accepted service item, never converted from2L, active mass or price; collect Q under cp_goods. |
| carrier_mass | failed_bottle; wash_water; dry_wipe; rinsate; wet_wipe; used_bottle | Mass | kg | Actual whole-carrier net kg, formulation-origin kg and whole-pack count are separate under direct_quantities, cleaning_origin and physical_ledgers. |
| selected_energy_identity | core_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | The selected AC identity has one reference energy property. Keep actual attributed quantities in the row unit;1kWh=3.6MJ in its unit group. Convert once before combining with a source expressed in another energy unit or supplying the reference-MJ exchange; never convert the same numerator twice or infer a supplier mix. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Same-configuration original packs inspected at physical-store receipt, with traceable original background vectors |
| starting_condition_role | retail_service_gate |
| product_classification_scope | Named micro-particle cream subset of 35334 scouring pastes/powders/other scouring preparations; 3533 -> 62176, excluding the 35322 dishwashing-detergent route. |
| recursive_input_rule | Only four named physical satellites are non-characterized; never exclude F original input, actual janitorial pack or Waste treatment; S once only in downstream GOODS |
| upstream_dataset_requirement | Original full-formulation/full-container and transport vector conserved by original-ID S/F/T/O; manufacturer specification does not replace LCI |
| disclosure | Disclose partial core and actual completion status of every module; no whole-store completeness claim; external mapping/ADR authoritative |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | retail; hygiene | Admit only Diversey/Pro Formula Cif Professional Cream Cleaner Lemon 7508636 original 2 L bottle, one actual complete formulation/closure/label/liner lot per pool. Manufacturer page establishes hard-surface cleaning micro-particles; its linked 2021-09-19 v05.2 SDS lists calcium carbonate but is not a complete current-batch formula. Verify actual current label/SDS and supplier full BOM evidence of scouring particles; never adopt old SDS percentages or nominal density. A nonabrasive washing preparation containing only dissolved surfactants is outside this route and needs classification review. Nominal 2 L, ingredient ranges, marketing and recommended use never establish measured kg/dose or compliance limits. Require actual store, complete original pack, current use and classification compatibility. | un-cpc62176; un-cpc35334; cif-product; cif-sds |
| channel_gate | retail | Require actual mixed-assortment physical supermarket planogram, store address and timestamped receipts for this SKU. The manufacturer product page and its distributor links establish a real product only, not an eligible mixed physical branch, local stock, purchase or customer use. Walk-in selection, ambient intact storage and counter handover only; online fulfilment, refill/decanting, demonstrations, dilution for sale, customer delivery and detergent manufacturing are excluded routes. Verify dedicated route has no combustion or refrigerant-bearing equipment; shared facility HVAC remains a required completion module. Unknown route evidence blocks applicability. | cif-sds; cif-product |
| core_boundary | retail; hygiene | This is a partial incremental core from inspected store-receiving gate to qualified physical counter acceptance, including rehandling, reverse events, dedicated metered electricity, failed-original background and the specified spill-tray hygiene. Successful merchandise manufacturing and its upstream transport belong to downstream GOODS, excluded from SERVICE. The necessary facility, ICT, network, payment, security, administration, other cleaning, capital and transport modules must be completed under module_completion before complete retail SERVICE is claimed. Actual Waste outputs always require treatment; only customer_pack and supplier_pack and transfer_pack and external_pack are physical non-characterized custody satellites. failed_original is an actual characterized Product input. | jrc-retail; ghg-product |
| source_ownership | failed_original; customer_pack; supplier_pack; transfer_pack; external_pack | For every original homogeneous whole-pack manufacturing plus inbound-transport source vector V_s at receiving, conserve original unit IDs exactly in S/F/T/O: S final accepted customer goods; F failed-source responsibility in this SERVICE; T named continuing owner; O unresolved/open stock. Rehandling/resale never repeats V_s. Physical supplier return needs actual signed receiving owner and background continuation, otherwise retain O. Theft, confirmed missing and unopened external failure carry original-source F unless a documented continuing T accepts it. Revoked acceptance without physical return transfers the original event from S to F or evidenced T; money-only adjustment with acceptance intact leaves S. Full-pack source F follows its original source once even if several later physical waste carriers descend from it; do not duplicate original backgrounds per carrier. If component responsibilities differ, replace the whole-pack input by verified component-quantity Product cards and supplier component vectors conserving V_s; mass fractions never split an environmental vector. |  |
| state_gate | retail; hygiene | Inspect seals and weigh/look for leaks every handling shift and every incident; sealed does not imply zero evaporation/leakage. Existing custody satellites admit intact original bottles only. Failed_bottle admits actual contained damaged bottle with liquid and original cap/label, only when receiver signs acceptance of those actual constituents/state. Wet_wipe, used_bottle and rinsate similarly require signed state/constituent acceptance and complete treatment boundary; no license/photo alone. Opened external transfer, free detergent liquid, dry powder, unidentified gas release, different wipe material, unknown recipient/state or unresolved mass residual blocks completeness until a named state-specific atomic card, protocol, identity and bilingual projection are added. Do not turn unknown into zero or mix an incompatible waste by wording. |  |
| module_completion | retail; hygiene | Before claiming complete SERVICE, inventory actual necessary functions and install named atomic extension cards under their real process, direction, type and property/unit, with cp_modules evidence and this PCR fixed methods. Facility electricity/heat/imported water, lighting and fan fixtures, shell fit-out, shelving, reusable spill trays, checkout/printer, ICT hardware/server operation, network access, payment processing, cameras/capture-storage, administration, actual receipts/labels, opened receiving cases/film, wipe outer wrapping, other actual cleaning, repairs, capital retirement and every actual transport leg require positive inclusion or signed physical/provider absence evidence. Consumables follow consumable_sources; capital follows asset_lifetime. A contract bundle may remain one service only with exact provider object, measured denominator and enumerated included energy/transport/maintenance/EOL, mutually exclusive with constituent cards. Internet access does not include payment/admin/security backend by assumption. Unknown fuel/refrigerant scope blocks completion: inspect equipment/species and service records; include actual equipment loss, capture, nonair transfer, stocks and final outside medium through separately reviewed species-specific cards/control-volume protocols, or prove this source absent. Never substitute generic zero gas factors. | jrc-retail |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Original-bottle walk-in counter retail | required | Verified route/configuration only | incremental_service | service_output |
| hygiene | Utility-sink spill-tray washing and absorption | conditional | Actual occurrence; signed absence for nonapplicability, unknown blocks | ancillary_hygiene | service_output |

### Process: Original-bottle walk-in counter retail (`retail`)

#### Inputs

##### Product flows

###### Alternating current electricity (`core_electricity`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

X_electricity/Q under direct_quantities and pool_allocation.

The selected flow uses the single Net calorific value energy property. The inventory keeps its stated measured energy unit; Units of energy supports1kWh=3.6MJ. Apply this conversion once when expressing a kWh record in reference MJ, including compatible-source aggregation; retain the original kWh meter numerator and source attribution, without adding another electricity demand.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: X_core_electricity/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources:

###### Cif Professional Cream Cleaner Lemon abrasive scouring cream7508636, complete original2L filled bottle (`failed_original`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

N_F/Q under failed_source; whole-source manufacturing plus receiving-gate transport, never successful S.

- Selected flow: Cif Professional Cream Cleaner Lemon abrasive scouring cream7508636, complete original2L filled bottle
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_F/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources: `cif-product`

#### Outputs

##### Product flows

###### Incremental walk-in retail service for Cif Professional Cream Cleaner Lemon 2 L original bottles (`service_output`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

1 Item(s) of reference flow; Q under service_count.

- Selected flow: Incremental walk-in retail service for Cif Professional Cream Cleaner Lemon 2 L original bottles
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources:

###### Intact original Cif Professional7508636 2L filled bottle initially accepted at customer handover (`customer_pack`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Actual gross initially-accepted intact customer handover event units/Q; disjoint from external_pack; custody satellite only under physical_ledgers.

- Selected flow: Intact original Cif Professional7508636 2L filled bottle initially accepted at customer handover
- Flow property / unit: Number of items / Item(s)
- Amount rule: X_customer_pack/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources:

###### Intact original Cif Professional7508636 2L filled bottle physically returned to supplier (`supplier_pack`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Actual intact supplier-return units/Q; source responsibility separately under source_ownership.

- Selected flow: Intact original Cif Professional7508636 2L filled bottle physically returned to supplier
- Flow property / unit: Number of items / Item(s)
- Amount rule: X_supplier_pack/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources:

###### Intact original Cif Professional7508636 2L filled bottle handed to another store (`transfer_pack`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Actual intact interstore-handover units/Q; named owner and original source retained.

- Selected flow: Intact original Cif Professional7508636 2L filled bottle handed to another store
- Flow property / unit: Number of items / Item(s)
- Amount rule: X_transfer_pack/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources:

###### Intact original Cif Professional7508636 2L filled bottle handed to external recipient without initial qualified acceptance (`external_pack`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Actual gross intact handover-event units lacking initial qualified acceptance/Q; disjoint from customer_pack. Revocation without new movement creates no additional physical output; retain actual recipient and subsequent state history.

- Selected flow: Intact original Cif Professional7508636 2L filled bottle handed to external recipient without initial qualified acceptance
- Flow property / unit: Number of items / Item(s)
- Amount rule: X_external_pack/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources:

##### Waste flows

###### Damaged Cif Professional7508636 original2L bottle containing residual liquid and original closure (`failed_bottle`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Actual direct dispatched whole wet carrier net kg/Q under direct_quantities and state_gate; treatment included by matched receiver dataset.

- Selected flow: Damaged Cif Professional7508636 original2L bottle containing residual liquid and original closure
- Flow property / unit: Mass / kg
- Amount rule: X_failed_bottle/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_goods`
- Sources:

### Process: Utility-sink spill-tray washing and absorption (`hygiene`)

#### Inputs

##### Product flows

###### Cif Professional Cream Cleaner Lemon abrasive scouring cream7508636, complete original2L filled bottle (`cleaner_pack`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Attributed janitorial complete packs first opened/Q, under cleaning_origin; separate actual purchase IDs from failed_original.

- Selected flow: Cif Professional Cream Cleaner Lemon abrasive scouring cream7508636, complete original2L filled bottle
- Flow property / unit: Number of items / Item(s)
- Amount rule: X_cleaner_pack/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`
- Sources: `cif-product`

###### Water supplied at utility-sink entrance (`wash_water`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Attributed actual entrance water kg/Q under direct_quantities; no dilution default.

- Selected flow: Water supplied at utility-sink entrance
- Flow property / unit: Mass / kg
- Amount rule: X_wash_water/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`
- Sources:

###### Dry disposable cellulose spill wipe without outer wrapping (`dry_wipe`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Attributed dry first-use wipe kg/Q under direct_quantities; actual cellulose composition required.

- Selected flow: Dry disposable cellulose spill wipe without outer wrapping
- Flow property / unit: Mass / kg
- Amount rule: X_dry_wipe/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`
- Sources:

#### Outputs

##### Waste flows

###### Aqueous utility-sink spill-tray rinsate containing Cif Professional formulation and measured soil (`rinsate`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Actual direct whole-liquid discharged net kg/Q; original formulation kg is an independent source balance, not this amount multiplier.

- Selected flow: Aqueous utility-sink spill-tray rinsate containing Cif Professional formulation and measured soil
- Flow property / unit: Mass / kg
- Amount rule: X_rinsate/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`
- Sources:

###### Used wet cellulose spill wipe containing Cif Professional formulation (`wet_wipe`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Actual dispatched complete wet wipe net kg/Q; retain actual water/dirt/formulation constituents under state_gate.

- Selected flow: Used wet cellulose spill wipe containing Cif Professional formulation
- Flow property / unit: Mass / kg
- Amount rule: X_wet_wipe/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`
- Sources:

###### Used original Cif Professional7508636 2L janitorial bottle with closure and liquid residue (`used_bottle`)

This card represents only this actual exchange; retain raw quantity, attribution and final normalization under the linked protocol and rules, with evidenced occurrence/absence.

Actual dispatched whole used bottle and closure net kg/Q, including measured residue; no separate duplicate residue output.

- Selected flow: Used original Cif Professional7508636 2L janitorial bottle with closure and liquid residue
- Flow property / unit: Mass / kg
- Amount rule: X_used_bottle/Q
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hygiene`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| pool_allocation | core_electricity; cleaner_pack; wash_water; dry_wipe; rinsate; wet_wipe; used_bottle | Prefer disjoint direct meters and event subdivision. Allocate each measured same-unit source pool X_c separately: X_ch=X_c*d_ch/sum_all_h(d_ch). Active equipment uses measured occupied device seconds; idle/fixed device electricity uses actual reserved equipment seconds including closed/failed/zero-sale reservations; fixed physical facility sources use surveyed served-area*m2 time h. Do not add these drivers or create one mixed driver. Split measured active/idle/fixed source numerators first and reconcile their sum to the parent in its own unit. An independent disjoint meter is not subtracted again; subtract a child only from a parent that physically includes it. Same-configuration prospective pool retains failed and zero-output cohorts. Zero total driver or Q=0 is unnormalizable, never discarded. Hygiene direct spill events follow their origin pool; actual shared tray washing uses measured wetted tray area m2 within that washing batch, with all beneficiaries retained. | ghg-product |
| asset_lifetime | retail; hygiene | For each actual homogeneous asset/model/BOM/scope vector V_a separately, manufacturing/installation exposure e_ah/L_a uses occupied plus reserved device h for checkout/ICT/camera, measured occupied shelf-volume m3*h for shelving, served floor m2*h for building/lighting/fans, and measured cumulative cleaned wetted m2 for reusable spill trays; same-unit lifetime L_a includes all historical/current/future beneficiaries and empty reservations. Keep manufacture, operation, repair and EOL disjoint. At revised life/vector replace EVERY prior beneficiary amount with f_new_ah*V_new_a and record delta=f_new_ah*V_new_a-f_old_ah*V_old_a; at final retirement f_final_ah=e_actual_ah/sum_all_h(e_actual_ah). Residual1-sum_old_f is QA only, never all charged to retirement period. Separate repair and asset transport/EOL sources first belong to the asset then follow those SAME historical fractions/version replacements once. Whole terminal-device net weight and BOM reconstruction are exclusive; direct net weight already excludes removed parts. Whole packages containing repair/transport/EOL exclude duplicate modules. Cumulative finalized fractions sum1; provisional fractions must not exceed1. |  |
| digital_events | retail | Payment authorizations and administrative batches are unique original events; allocate their measured processing time to actual source-line work shares w_eh=t_eh/sum_all_h(t_eh), sum_h(w_eh)=1, including declined attempts/failed/other-SKU lines; no basket event is charged fully to every SKU. Admin employee source h uses measured task h; reserved idle employee h uses actual roster-reserved beneficiary h. Network active sources use measured transferred bytes; device idle/fixed sources use unique reserved device h. Retain provider connection source-hours connection_source_h in the unique actual nonoverlapping connection_interval_id ledger with its own evidenced measured denominator, not additional electricity. For each original source interval assign to this SKU/pool by connection_share_h=reserved_endpoint_connection_s_h/sum_all_h(reserved_endpoint_connection_s_h), the measured reserved endpoint-connection seconds of ALL beneficiaries; shares sum1 including empty reservations and failed events, without duplicate endpoint/interval seconds. Multiply actual source-hours by that share once; skip this owner reassignment only with exact final owner_id/pool_id/version evidence exact_final_owner_pool_version, not merely provider-level or connection-level attribution. Zero total seconds or unknown coverage blocks completeness. Camera capture source map is frozen at original capture: actual timestamped field-of-view disjoint beneficiary footprint m2*coverage h including empty reservations and all beneficiaries, mutually exclusive zone/time cells. Actual byte*h retention carries that original capture map, never current sales. Record original source/pool/map/version; GB=10^9 bytes and GiB=2^30 bytes, convert explicitly. No mixed bytes+h+tasks driver. |  |
| transport_ownership | retail; hygiene | For each actual trip segment t first assign source s by actual occupied mass kg share only where signed capacity records prove mass-limited carriage and volume nonbinding; volume m3 share only where volume binds and mass is nonbinding. Otherwise unknown/dual constraint blocks this method pending reviewed matching transport method. Preserve vehicle class, actual load/capacity units, route/distance, mass/volume, stationary idle duration h and all consignments. Allocate empty returning vehicle-km by measured reserved cargo-capacity*time per beneficiary for that actual segment; stationary idle fuel/service by reserved capacity*actual idle h; zero laden t*km never erases these. Next assign each actual source to final owner/pool/version by F share, cleaner first-use share or historical asset fraction. attribution_level=consignment skips only trip allocation; only exact final owner/pool/version evidence skips owner attribution. Verify provider covers actual empty/idle legs and included fuel/maintenance; add disjoint vehicle-km/idle-h source cards if absent, never overlap the loaded service. |  |
| consumable_sources | retail; hygiene | For each actual homogeneous paper/label/case/film/wipe-wrap source separately, measure net first-used material quantity x_use_s (paper includes its real coating and excludes separately measured core/wrapping). Assign its manufacturing plus inbound source to that first-use event/pool once; unused stock/returns/transfers carry unassigned original source, reuse never repeats manufacture/inbound. Printed intermediate stock retains BOTH original paper and measured printing-source responsibility with original source IDs/pool/version; later withdrawal replaces original allocations rather than charging twice. Where one actual material event serves several lines, assign measured material area/mass portions within that same homogeneous source with shares summing1. Record source and destination stock independently; directly measured dispatched waste kg is not corrected by stock again. Actual mixed carrier requires signed receiver constituent/state acceptance under state_gate; separately dispatched components remain disjoint. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | failed_original; service_output; customer_pack; supplier_pack; transfer_pack; external_pack; failed_bottle | event_stock_source | initially_accepted_handover_count; never_accepted_at_handover_count; raw_X_r; attributed_X_r; pool_id; original_id; supplier_source_id; lot; SKU; complete_BOM; label; seal; actual_fill_kg; tare_kg; gross_handover_id; physical_return_id; acceptance_id; final_acceptance; cutoff; return_link; prior_version; version; Q; owner_id; S; F; T; O; N_F; N_S; V_s; attribution_level; G_open; receipts; physical_customer_returns; gross_customer_handover; supplier_handover; internal_handover; condemnation_count; confirmed_missing_count; signed_goods_residual; W_open; condemned_actual_kg; other_waste_received_kg; dispatched_actual_kg; confirmed_missing_waste_kg; signed_waste_residual; receiver_state; inspection; scale_id; calibration | Trace unique original pack and source through receipts/scans/returns; weigh actual lot fill and full package/component BOM by traceable calibrated scales, supplier signed vector/scope and receiving documents; no catalog-tare default. Count event IDs and directly weigh each dispatched waste consignment; inspect intactness every shift and each incident. Follow service_count, physical_ledgers, failed_source and source_ownership; raw receipts are QA, not another characterized manufacture input. Final amounts per reference flow; keep zero-sale cohorts. | Item(s); kg | Every event, shift inspection, closing reconciliation and late correction | Entire declared period including closed/failed/late corrections | Actual store and named provider original sources | per reference flow | Calibrated scales/count scans, supplier vectors and labels, signed recipient/acceptance/revocation, daily inspection, full historical version links; unknown blocks completeness. |
| cp_energy | retail | core_electricity | meter_source | X_c; d_ch; raw_X_r; attributed_X_r; pool_id; source_id; meter_start; meter_end; meter_boundary; active_kWh; idle_kWh; fixed_kWh; occupied_device_s; reserved_device_s; all_beneficiaries; parent_child_map; calibration; version | Read dedicated stock/checkout circuit meters at consistent boundaries; log intervals and measured active/idle/fixed splits, occupied and reserved equipment seconds. Verify parent topology and meter calibration; do not infer watts from nameplates. Apply pool_allocation then direct_quantities; raw X_electricity remains kWh before final per reference flow. | kWh; s | Each meter interval, all open/closed shifts | Entire declared period including closed/failed/late corrections | Actual store and named provider original sources | per reference flow | Full all-beneficiary same-unit sum=parent; nonoverlap proof and uncertainty; unknown coverage blocks. |
| cp_hygiene | hygiene | cleaner_pack; wash_water; dry_wipe; rinsate; wet_wipe; used_bottle | cleaning_source_carrier | X_c; d_ch; raw_X_r; attributed_X_r; pool_id; source_id; bottle_initial_seal_state; first_open_at; damaged_at; cutoff_state; state_transition_id; source_measurement_id; measured_source_portion_id; retained_origin_kg; source_class; source_original_id; failed_original_parent_id; janitorial_original_id; first_open_id; complete_BOM; first_open_count; m_src_j; retained_unused; retained_wipe; retained_bottle; dispatched_bottle_residue; dispatched_wipe_origin; dispatched_rinsate_origin; verified_species_transfer; source_residual; water_volume; rho_actual; temperature; discharge_mode; direct_net_kg; first_use_mass; wetted_tray_m2; all_beneficiaries; spill_goods_original_id; dry_wipe_composition; actual_soil_kg; wet_carrier_id; receiver_state; calibration; version | Inspect and record each bottle initial seal, first opening, damage and cutoff state; under cleaning_origin assign each original source measurement ID/portion uniquely to retained_unused or retained_bottle, replacing the old record on each state transition. Identify merchandise-spill and janitorial original sources independently; independently receive janitorial packs; weigh first-opening source liquid and actual dose transfers; retain source-origin assay/tracer/validated transfer records for exclusive destinations. Weigh dry first-use cellulose wipes; meter entrance water with actual density/temperature. Directly weigh whole discharge liquid and wet carriers (or exclusive direct liquid volume*density); never reconstruct liquid from supply balance. Survey actual wetted tray area in shared batches; inspect absence/presence each shift and incident. Apply cleaning_origin, direct_quantities, pool_allocation and state_gate. Separate origin kg from wet kg and full-pack Count; all final card quantities per reference flow. | Item(s); kg; m3; kg/m3; m2 | Each opening/dose/washing/dispatch, daily stock, late correction | Entire declared period including closed/failed/late corrections | Actual store and named provider original sources | per reference flow | Scale/meter calibration and blanks, measured moisture/density/soil, signed receiver actual-constituent acceptance and complete treatment, source/stock reconciliation; unknown is not zero. |
| cp_modules | retail | core_electricity; failed_original | completion_extension | X_c; d_ch; all_beneficiaries; source_amount_e; trip_amount; source_share; owner_share; original_source_id; raw_X_r; attributed_X_r; x_use_s; material_source_id; first_use_event; unused_stock; printed_WIP; original_print_source; measured_material_portions; cleaned_wetted_m2_lifetime; function_register; actual_presence; signed_absence; source_id; constituent_scope; event_id; time; asset_id; lifecycle_stage; exchange_identity; property; unit; boundary; N_core_raw_r; N_external_raw_r; z_external_r; D_original_r; Q; owner_id; pool_id; version; V_a; e_ah; L_a; e_actual_ah; f_old_ah; f_new_ah; V_old_a; V_new_a; historical_pool; delta; served_m2h; occupied_m3h; reserved_device_h; task_h; roster_reserved_h; authorization_id; t_eh; w_eh; network_bytes; connection_source_h; reserved_endpoint_connection_s_h; all_connection_beneficiaries; connection_interval_id; exact_final_owner_pool_version; connection_interval; capture_map; field_of_view; zone_time; capture_m2h; retained_byteh; GB_or_GiB; trip_id; segment_id; capacity_kg; capacity_m3; actual_mass_kg; actual_volume_m3; capacity_binding_evidence; route_km; empty_vehicle_km; stationary_idle_h; reserved_capacity_time; attribution_level; original_denominator; provider_inclusions; species_control_volume | Survey functions and actual equipment/contracts with signed custodian; measure sources with calibrated meters/scales/timers, instrument byte and camera retention logs, survey area/volume/capture footprints with timestamps; obtain actual provider scope/vector and all historical beneficiaries, trip capacity and loaded/empty/idle records. For each unique connection interval collect actual provider source h and denominator; use calibrated synchronized clocks, endpoint connection logs and reservations to collect all-beneficiary reserved connection seconds including empty/failed reservations, deduplicating and reconciling each endpoint/interval; verify exact_final_owner_pool_version before omitting owner reassignment. Install real extension cards and their own one-process protocol views before completeness; cp_modules is a core audit view, not a fictitious module exchange. Follow module_completion, pool_allocation, asset_lifetime, digital_events, transport_ownership and completion_aggregation; retain raw original unit and denominator, then final per reference flow once. | Each original source unit separately; connection source h; reserved endpoint-connection s | Continuous operational intervals, each asset revision/event/trip, every original pool correction | Entire declared period including closed/failed/late corrections | Actual store and named provider original sources | per reference flow | Signed scope/exclusion matrix, calibration, full historical exposures, all-beneficiary totals, frozen capture map and capacity constraint proof; unknown or unsupported source blocks complete SERVICE. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_count | service_output | Q=count distinct original IDs with final-valid qualified acceptance at cutoff, after linked late-return/revocation replacements; count each ID once even after resale, never subtract revocations again from an already final-valid set. Gross handover, refund, physical return, rehandling and final validity are separate records. Qualify only correct SKU/lot intact closed bottle, correct physical counter recipient and accepted quantity/condition; no customer possession alone. Late returns revise the original pool numerator, denominator and S/F/T/O versions at actual event dates; new pools do not repeat allocations. | original_id; final_acceptance; cutoff; return_link; prior_version; pool_id | Q |  |
| physical_ledgers | customer_pack; supplier_pack; transfer_pack; external_pack; failed_bottle | Goods-only Count balance: G_close=G_open+receipts+physical_customer_returns-gross_customer_handover-supplier_handover-internal_handover-condemnation_count-confirmed_missing_count+signed_goods_residual. gross_customer_handover=initially_accepted_handover_count+never_accepted_at_handover_count, disjoint immutable actual event IDs. customer_pack reports the former and external_pack the latter, never a subset duplicated in both. Later acceptance/revocation or return changes final service/source responsibility, not the original physical event direction or initial handover category. Revocation without movement reclassifies original event only. Condemnation changes goods into held waste internally. Independent held-waste kg: W_close=W_open+condemned_actual_kg+other_waste_received_kg-dispatched_actual_kg-confirmed_missing_waste_kg+signed_waste_residual. Count is never kg. Link condemnation IDs to separately weighed whole carrier kg; dispatch directly uses actual consignment net kg, never deduct opening/closing or retained stock again. Signed unknown residuals remain investigated and block completeness. | G_open; receipts; physical_customer_returns; gross_customer_handover; initially_accepted_handover_count; never_accepted_at_handover_count; supplier_handover; internal_handover; condemnation_count; confirmed_missing_count; signed_goods_residual; W_open; condemned_actual_kg; other_waste_received_kg; dispatched_actual_kg; confirmed_missing_waste_kg; signed_waste_residual | G_close; W_close |  |
| failed_source | failed_original | N_F=sum_s original whole-bottle units assigned final F; input amount=N_F/Q. Bind the actual supplier full-formulation/full-container V_s once per original unit, including original receiving-gate inbound transport by transport_ownership. No pure surfactant or net-liquid-kg proxy for a complete pack. Successful S excluded from SERVICE; downstream GOODS may add N_S*V_s/Q once; T retains named responsibility and O retains open source. Failed original never disappears through satellite exclusions. | original_id; V_s; N_F; N_S; Q; attribution_level; owner_id; pool_id; version | failed_original |  |
| cleaning_origin | cleaner_pack; wash_water; dry_wipe; rinsate; wet_wipe; used_bottle | For EACH original source j separately retain source_class=goods_F or janitorial; a spilled merchandise source retains its same failed_original parent and receives no second cleaner_pack background. Janitorial cleaner uses different purchased original IDs from merchandise, even if the same7508636 formula is chosen for utility-sink washing of spill trays. Never convert retail goods to janitorial stock within this route. Charge the complete original janitorial pack manufacturing plus inbound source once to its first-opening event pool; shared first-opening events use that batch measured wetted tray-area shares summing1. Later withdrawals/reuse retain the same source and do not repeat manufacture/inbound. Unused closed stock/returns/transfers carry unassigned source. Independently allocate each source original liquid m_src_j kg to actual exclusive final destinations; link dispatched_bottle_residue to failed_bottle for goods_F and used_bottle for janitorial: retained unused; retained in wet wipe; retained in bottle; dispatched bottle residue; dispatched wet wipe; dispatched rinsate; verified outside species transfer. At cutoff classify each source ID and measured source portion once: retained_unused is original liquid stock only in never-used, undamaged, factory-sealed original bottles; retained_bottle is original liquid residue retained on site in already-opened or damaged original bottles, whether or not dosed yet, excluding retained_unused. Record each bottle initial seal, first opening, damage and cutoff state and original source measurement ID; the same measured source portion enters only one cutoff state. Unknown seal/state blocks completeness; a state transition replaces the old state for the same source and measured portion, never retains both old and new buckets. Used is intermediate: when used becomes rinsed replace its state, do not add a second destination. Use each source cumulative ledger through cutoff: m_src_j=retained_unused+retained_wipe+retained_bottle+dispatched_bottle_residue+dispatched_wipe_origin+dispatched_rinsate_origin+verified_species_transfer+source_residual, keeping original quantity and all historical destinations/version corrections; downstream period withdrawals do not create a new original source. New rinse water/dirt/dry wipe are not m_src_j. Require source-origin mass assay/tracer/validated actual dosing-transfer record; do not infer original formulation kg from whole wet carrier kg or label active%. No signed source residual may be hidden. Actual wet carrier kg, source-origin kg and full-pack count are distinct. | bottle_initial_seal_state; first_open_at; damaged_at; cutoff_state; state_transition_id; source_measurement_id; measured_source_portion_id; retained_origin_kg; source_class; source_original_id; janitorial_original_id; first_open_id; m_src_j; retained_unused; retained_wipe; retained_bottle; dispatched_bottle_residue; dispatched_wipe_origin; dispatched_rinsate_origin; verified_species_transfer; source_residual; Q | source_origin_balance |  |
| direct_quantities | core_electricity; wash_water; dry_wipe; failed_bottle; rinsate; wet_wipe; used_bottle | Retain actual raw direct/attributed numerators X_r first. Electricity is meter-end minus meter-start in kWh, converted once by3.6MJ/kWh if needed; wash-water input is actual entrance m3*rho_actual kg/m3, no second subtraction of internally reused water. Rinsate is DIRECT whole-liquid net mass kg at discharge (or exclusive direct discharge-volume*rho at measured temperature), never a supply-balance reconstruction. Failed_bottle, wet_wipe and used_bottle are direct dispatched whole-carrier net kg; no stock or source-composition factor applied again. Dry wipe original mass uses first-use weights excluding independent wrapping; unused stock/returns retain source and reused wipes never repeat manufacture. External labels/density/active percentage never replace actual calibrated measurements. Each final card amount=X_r/Q exactly once. | meter_start; meter_end; meter_boundary; water_volume; rho_actual; temperature; discharge_mode; direct_net_kg; first_use_mass; source_id; pool_id; Q | X_r/Q |  |
| completion_aggregation | all inventory rows | For each compatible exchange identity/property/unit/boundary r and original source/pool/version, N_complete_r=N_core_raw_r+sum disjoint N_external_raw_r+sum disjoint z_external_r*D_original_r. Preserve raw external numerators directly; only already normalized z is multiplied by its evidenced original D to restore raw. Apply pool_allocation, digital_events, asset_lifetime and transport_ownership at their actual source levels before aggregation. N_core_raw includes failed_original N_F and core_electricity raw numerator, not their displayed /Q card amounts. Compare constituents/event/time/asset/stage across source IDs to remove overlaps; different provider IDs alone prove nothing. Convert only compatible units, never kg+MJ or raw+normalized; final amount=N_complete_r/Q once. Omitted/unbound actual modules prevent a complete-business claim. | N_core_raw_r; N_external_raw_r; z_external_r; D_original_r; exchange_identity; property; unit; boundary; source_id; owner_id; pool_id; version; Q | N_complete_r/Q |  |
| card_numerators | all inventory rows | X_core_electricity=attributed metered kWh; failed_original raw numerator=N_F; X_customer_pack=initially_accepted_handover_count; X_supplier_pack=actual intact supplier-return count; X_transfer_pack=actual intact interstore count; X_external_pack=never_accepted_at_handover_count; X_failed_bottle=direct dispatched damaged whole-bottle kg. X_cleaner_pack=attributed first-open janitorial complete-pack count; X_wash_water=attributed entrance water kg; X_dry_wipe=attributed first-use dry cellulose kg; X_rinsate=attributed actual whole-liquid discharge kg; X_wet_wipe=attributed dispatched whole wet-wipe kg; X_used_bottle=attributed dispatched whole used-janitorial-bottle kg. Record raw direct amounts, then attributable amounts under source_allocation; final amount for each displayed X is X/Q, N_F/Q for failed_original, and exactly1Item(s) for service_output. No source-origin composition or stock correction multiplies direct terminal kg again. | gross_customer_handover; supplier_handover; internal_handover; initially_accepted_handover_count; never_accepted_at_handover_count; dispatched_actual_kg; first_open_count; water_volume; rho_actual; first_use_mass; raw_X_r; attributed_X_r; N_F; Q | card_raw_and_final_amounts |  |
| source_allocation | all inventory rows | For pool_allocation use X_ch=X_c*d_ch/sum_all_h(d_ch) with exact same-unit eligible source driver and all beneficiaries; direct source keeps original ownership without repeating this share. For digital_events use w_eh=t_eh/sum_all_h(t_eh), source_amount_h=source_amount_e*w_eh; camera/retention apply the frozen original capture_m2h share once. Connection sources use connection_share_h=reserved_endpoint_connection_s_h/sum_all_h(reserved_endpoint_connection_s_h), attributed_connection_h=connection_source_h*connection_share_h; only exact_final_owner_pool_version under digital_events omits repeat owner allocation. For asset_lifetime use provisional f_ah=e_ah/L_a and final f_ah=e_actual_ah/sum_all_h(e_actual_ah), replacing each historical pool delta=f_new_ah*V_new_a-f_old_ah*V_old_a. For transport_ownership use attributed_trip_source_amount=trip_amount*source_share and final_owner_amount=attributed_trip_source_amount*owner_share, skipping a level only with exact corresponding attribution_level evidence. These are source-numerator calculations, never another final/Q. | connection_source_h; reserved_endpoint_connection_s_h; all_connection_beneficiaries; connection_interval_id; exact_final_owner_pool_version; X_c; d_ch; all_beneficiaries; t_eh; source_amount_e; capture_m2h; e_ah; L_a; e_actual_ah; f_old_ah; f_new_ah; V_old_a; V_new_a; trip_amount; source_share; owner_share; attribution_level; original_source_id; owner_id; pool_id; version | attributed_X_r; historical_delta |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | Verify actual identity, state, lot, source and complete BOM/background scope separately from manufacturer specification; each presently unbound row must satisfy identity_gate. | Direct official originals/receipts plus supplier site records |
| q_coverage | retail; hygiene | Cover all periods and beneficiaries, including closed/failed/zero-sale pools, late replacements, raw source amounts and signed absence; unknowns and material residuals block completeness. | All event/meter/source/version ledgers and calibration uncertainties |
| q_modules | all inventory rows | Enforce module_completion with atomic bilingual cards and real collection fields before complete SERVICE; no downstream choice of driver, numerator boundary or final denominator is allowed. | Source-constituent overlap matrix and row/protocol reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_gate | all inventory rows | Reject completeness when Q<=0, acceptance/source/stock ledgers unresolved, actual source/recipient/state unverified, any needed module missing, unsupported driver, missing original denominator, duplicated provider scope or UUID identity not directly verified. Retain all zero-sale records and uncertainty. No safety, legal compliance, full GHG-standard conformity, scientific approval or publication approval follows from this candidate. |  |
| identity_gate | all inventory rows | All rows presently have no adopted Tiangong UUID. Before dataset completion bind each exact row using directly read official original response with matching recalculated-hash integrity receipt: public state, bilingual baseName, Product/Waste/Elementary direction/type, exact formulation/package or service boundary, reference property/unit chain and outside compartment where relevant. A search hit, UUID-shaped external UFI or manufacturer specification is not a flow binding or quantified LCI. Incompatible identity requires a different verified row, not silent substitution. |  |
| incident_gate | retail; hygiene | Require signed daily presence/absence inspection and actual incident reconciliation for contained and uncontained losses. Internal room-air detergent/alcohol source is not automatically outside elementary emission. Any occurring species needs species-specific measured inlet/outlet and air/capture stocks, actual recovery/nonair exports and final external medium; raw absolute, differential and blank-corrected measurements are exclusive modes with background removed once. Unknown or unexplained signed negative difference blocks completion; no zero clamp, automatic emission, uptake credit or sealed-pack default. Retain actual original formulation origin and measured terminal carriers without duplicated captures. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | partial_incremental_retail_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Incremental service for matching actual SKU/state/route; complete SERVICE only after fixed-method completion; GOODS adds S separately once |
| excluded_use | Dishwashing-function comparison; whole-leaf coverage; merchandise life cycle or complete-business claims without completion; different formulation/channel |
| required_metadata | Original IDs/lot/BOM/store/period/Q/original sources and versions/mapping authority/module status |
| required_quality_disclosure | All unbound identities, uncertainties, actual absences, completion gaps, residuals and zero-output pools |
| update_trigger | Actual configuration/source/route/acceptance/life/vector/late-return change, replacing all affected historical versions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62176 | official_guidance | UNSD CPC3.0 62176 explanatory note: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62176 | 3531/3533 classification scope; not mapping acceptance |
| un-cpc35334 | official_guidance | UNSD CPC3.0 35334: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/35334 | Scouring-preparation classification boundary; no field occurrence or full formulation proof. |
| cif-product | handbook | Pro Formula/Diversey Cif Professional Cream Cleaner Lemon 2L, product7508636: https://www.proformula.com/gb/en/products/cif-professional-cream-cleaner-lemon-2l/ | Actual product/code/2 L pack, hard-surface scouring micro-particles and rinse-after-use scope; no site stock, full BOM/LCI or default quantities. |
| cif-sds | handbook | Manufacturer-linked Cif Professional Cream Lemon SDS, 2021-09-19 v05.2, pp1-2: https://cdn.sanity.io/files/s229angm/production/8942f2a17386bbe01fa569950bbc0a35ae22f43f.pdf | Hard-surface use and historical calcium-carbonate constituent support only; not full current composition, default concentration/density, emission factor or safety approval. |
| ghg-product | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011, ch6–7,9: https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General service function/reference flow and subdivision-first principles; PCR-specific formulas are foreground design, no full-standard conformity claim |
| jrc-retail | official_guidance | JRC Best Environmental Management Practice in Retail Trade Sector2013 EUR25998EN, executive summary and energy/waste/water sections: https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail energy/water/chemicals/transport/waste inventory scope; no benchmark numerical adoption |
