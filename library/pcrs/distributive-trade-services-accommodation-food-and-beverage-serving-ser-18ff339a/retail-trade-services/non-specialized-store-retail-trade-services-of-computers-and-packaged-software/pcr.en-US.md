---
schema_version: 1
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-computers-and-packaged-software
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Retail services for factory-sealed complete compact desktop-computer packages

## 1. Scope and Applicability

This is a narrow, configuration-specific partial incremental retail-service method. The complete defining conditions and completion duties are b_scope through b_completion; collection and allocation methods are mandatory, not default industry measurements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-computers-and-packaged-software |
| classification_refs | CPC 3.0 62184; narrower; goods452 hardware subset |
| covered_products | Complete new factory-sealed compact desktop-computer packages in the b_scope/b_channel physical mixed-store route. |
| excluded_products | Components and incomplete kits; standalone software/licences/downloads; store assembly; opened, activated, demonstrated or used goods; customer use/end-of-life; full-business claims without completion. |
| representative_product | Retail services for factory-sealed complete compact desktop-computer packages; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Receiving -> sealed holding -> checkout -> documented onsite handover/acceptance, plus residual fate; b_channel |
| market_state | New unused factory-sealed complete original mini+cord+retail package; contained-cell state from lot/BOM, no assumed cell absence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Retail custody, checkout and accepted handover of b_scope package |
| How much | One finally valid distinct original-package acceptance; Q/Q |
| How well | Correct configuration, unused original seal, complete contents, named recipient and valid acceptance |
| How long or cycle | Declared pool receiving-to-acceptance cycle including failed attempts, closed/idle time and subsequent corrections |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted sealed compact desktop computer original-package retail service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_site; pool_period; pool_version; actual_part_number; hardware_revision; original_serial_set; region; configuration; original_BOM; contained_cell_state; factory_seal_state; no_operation; Q; S_F_T_O; supplier_vector_boundary; partial_core; missing_modules |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | retail_service; failed_pack; supplier_sealed; external_sealed; external_opened | Number of items | Item(s) | Keep service count, original-package equivalent count and physical event count separate; never convert nominal device mass/capacity to these counts. All final amounts per reference flow. |
| m_energy | store_ac | Net calorific value | MJ | 1kWh=3.6MJ; c_energy. Metered source attribution precedes one Q. |
| m_carrier | kit_waste; carton_waste; wrap_waste | Mass | kg | Actual entire dispatched carrier net kg; c_waste. Carrier kg never stand for supplier package production vector fractions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual homogeneous original package received into store custody; manufacturer dispatch vector and inbound responsibility retained under b_goods |
| starting_condition_role | Partial incremental retail service with explicit failed-goods background input |
| product_classification_scope | narrower; b_channel; external accepted mapping authority |
| recursive_input_rule | No recursive retail-service input; original whole-goods failed_pack remains characterized under b_core/b_goods |
| upstream_dataset_requirement | Original supplier manufacturing-at-dispatch vectors and separately evidenced inbound transport; no specification-derived LCI |
| disclosure | Partial core, missing sources/stages, actual scope, identity gaps, uncertainty and fixed completion duties |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| b_scope | receive; custody; checkout; residual | Apply to new complete compact desktop-computer packages, unused and factory-sealed at customer acceptance, in the declared mixed-store channel. Any manufacturer, processor architecture, memory/storage capacity, colour or regional supply configuration is eligible within this physical product family, using separate homogeneous BOM/source strata. Record actual part number, hardware/firmware revision, serial, region and lot. Verify the actual processor, board, memory, storage, enclosure, power supply or adapter, cord, contained cells, accessories, inserts, labels, inks, adhesives and closures as one complete original supplier BOM; no component is inferred present or absent from the specimen. Preinstalled operating-system/application provisioning is not a second retail output. Additional actual components require specific cards where they are separately represented; never duplicate an included supplier stage. | apple-mini-spec |
| b_channel | receive; checkout | Start at store receiving custody gate, end at documented physical customer handover and valid acceptance, retaining later corrections. Actual site must sell a mixed non-specialized assortment, with dated floor plan, assortment and warehouse transaction evidence for this configuration. The retained Costco menu demonstrates mixed product categories only; it establishes neither the actual desktop-computer configuration nor local availability. Actual named-branch stock and onsite handover for this configuration require field evidence. This is a narrower hardware route within CPC3.0 62184 goods452, not the whole452/478 leaf. Classification acceptance remains governed by external mapping and ADR records. | un-cpc62184; costco-mixed-mini |
| b_core | all inventory rows | The partial incremental core includes failed original-package production responsibility failed_pack, isolated store operational electricity store_ac, retail output retail_service, the explicitly named physical custody satellites supplier_sealed/external_sealed/external_opened, and actual terminal carriers kit_waste/carton_waste/wrap_waste. Only the three named Product custody satellites are non-characterized physical accounting outputs. Waste carriers require complete treatment. Original receipts and gross customer movement are raw QA, not additional characterized inputs. Failed_pack is a characterized Product input and is never excluded as custody. Complete service requires b_completion and a_completion; partial results must retain the partial label. |  |
| b_goods | failed_pack; retail_service | For every original homogeneous supplier package vector V_s at manufacturer dispatch, establish exclusive count-equivalent ownership S_s+F_s+T_s+O_s=N_source_s. S is finally valid accepted goods, F is confirmed lost/condemned/nonservice-retained goods whose original background remains charged to this service pool, T transfers original responsibility to a named continuing owner (including supplier-return owner or demonstrator asset), O is unresolved/open stock. Whole-package mode requires all constituents of each original unit to share that ownership. failed_pack=N_F/Q links the complete original manufacturing vector including original packaging, cord and factory provisioning exactly once. S production is excluded from this retail service; a distinct downstream GOODS system adds sum(S_s*V_s)/Q once. T and O cannot be relabelled zero burden. Missing supplier vector/BOM blocks quantified completeness. | apple-mini-spec |
| b_components | failed_pack; kit_waste; external_opened | Opening, diagnostic use, charging, software download/activation, replacement, repacking, resale as used or component separation cannot count as sealed output. Record actual changed state and actual contained-cell condition; neither maximum155W nor CPU/memory/storage specifications establish measured electricity or complete LCI. Whole original damaged kit may remain one actual waste carrier only when receiver signs acceptance for the full actual constituents/state including contained cells and packaging with matching treatment boundary. If constituents acquire different S/F/T/O owners, first add specific component Product inputs using verified original supplier component vectors and actual component quantities/units; remove those exact vectors from failed_pack. Never split environmental vectors by arbitrary mass/count shares or duplicate an adapter/cord/cell already included. | apple-mini-spec |
| b_route_absence | receive; custody; checkout; residual | Admit only electrically operated receiving/holding/checkout with no foreground combustion appliance, fuel handling, refrigerant-containing HVAC/cooling or on-site chemical cleaning in this core. Responsible operator shall inspect equipment register, all occupied/shared service spaces, service contracts and full-period event records and sign presence/absence by equipment/species/stage. Unknown is not absence. Real shared HVAC, fuel, cleaning, spill or additional carrier requires b_completion atomic expansion and route review before complete results; no default zero emission, leak or safe-handling approval follows from a specification. |  |
| b_completion | receive; custody; checkout; residual | Before any complete retail-service claim, complete a signed source/stage matrix covering building shell/fitout/lighting/fans, shelving/handling/checkout assets, ICT/network, payment backend, security camera/retention, administration, cleaning, capital manufacture/installation/maintenance/retirement and all required transport, plus outer transit packaging manufacture/first-use/inbound responsibility. Each actual homogeneous object/service/material/carrier must have named bilingual atomic cards, real process/direction/type, property/unit, amount, protocol, original vector and included-stage exclusions, synchronized before completeness. Existing complete signed packages can remain whole with their measured denominator and actual scope; constituent event/time/object overlap, not different provider IDs, decides deduplication. Apply a_shared/a_assets/a_digital/a_transport/a_cleaning/a_carriers/a_completion. Missing actual source or unknown condition blocks completeness rather than allowing modeller-selected methods. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receive | Receive original package | required | All original sources including no-sale | Source responsibility | per reference flow |
| custody | Sealed custody and store circuits | required | Full holding/idle period | Operational core and completion matrix | per reference flow |
| checkout | Handover and final acceptance | required | All attempts and corrections | Reference retail output | per reference flow |
| residual | Return/retention and actual terminal carriers | conditional | Any actual return/retention/dispatch; signed absence otherwise; unknown blocks completeness | Physical satellite and treatment | per reference flow |

### Process: Receiving (`receive`)

#### Inputs

##### Product flows

###### Original complete compact desktop-computer retail package of the actual declared region (`failed_pack`)

Source-equivalent original complete supplier package input for the F-owned production burden, including cord and original retail packaging; not a second physical receipt. Only one homogeneous original configuration/vector is permitted. Each original source line keeps its actual matching vector; if model/BOM/manufacturing scope differs, add separate named input cards before quantified use rather than multiplying the aggregate count by one heterogeneous vector.

- Selected flow: Original complete compact desktop-computer retail package of the actual declared region
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_F/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving`
- Sources: `apple-mini-spec`

### Process: Sealed holding (`custody`)

#### Inputs

##### Product flows

###### Alternating current (`store_ac`)

Measured supply to the actual store receiving, holding and checkout circuits; this row does not imply opening or powering the sealed merchandise. Point-of-use voltage/provider unspecified identity requires an independently matched supply dataset.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: E_MJ/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity`
- Sources:

### Process: Checkout and handover (`checkout`)

#### Outputs

##### Product flows

###### Accepted sealed compact desktop computer original-package retail service (`retail_service`)

The service output is a finally valid acceptance of one distinct sealed complete configuration; actual series ownership and subsequent revocation determine Q. No computing performance or software license is delivered as a separate reference flow.

- Selected flow: Accepted sealed compact desktop computer original-package retail service
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_checkout`
- Sources: `ghg-product2011`

### Process: Residual fates (`residual`)

#### Outputs

##### Product flows

###### Sealed complete compact desktop computer package handed to supplier (`supplier_sealed`)

Actual intact supplier-return handoff across store gate, independently evidenced from continuing T background responsibility. This physical satellite has no second manufacturing characterization.

- Selected flow: Sealed complete compact desktop computer package handed to supplier
- Flow property / unit: Number of items / Item(s)
- Amount rule: physical_handover_count/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources:

###### Sealed complete compact desktop computer package retained without valid acceptance (`external_sealed`)

Actual recipient retains a complete sealed package despite failed/revoked service; recipient/state are measured, not automatically a waste stream. Background remains F or signed T under c_source.

- Selected flow: Sealed complete compact desktop computer package retained without valid acceptance
- Flow property / unit: Number of items / Item(s)
- Amount rule: sealed_retained_count/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources:

###### Opened complete compact desktop computer kit retained without valid acceptance (`external_opened`)

Actual opened complete kit retains original mini, cord and packaging with named recipient and recorded condition/use history; it cannot count as sealed output. Component loss/separation needs b_components extension.

- Selected flow: Opened complete compact desktop computer kit retained without valid acceptance
- Flow property / unit: Number of items / Item(s)
- Amount rule: opened_complete_retained_count/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources:

##### Waste flows

###### Discarded complete compact desktop computer original kit with cord and retail packaging (`kit_waste`)

Directly weighed actual complete terminal carrier, including actual contained cells and damaged/opened state. Admit only signed receiver acceptance and matching whole-carrier treatment; no second component waste/manufacturing flow for the same kit.

- Selected flow: Discarded complete compact desktop computer original kit with cord and retail packaging
- Flow property / unit: Mass / kg
- Amount rule: D_kit/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources:

###### Discarded corrugated transit carton outside original retail package (`carton_waste`)

Actual dispatch net mass of outer corrugated carton carrier, with real labels/tape included if accepted in that carrier; exclude the original retail box inside failed_pack/kit_waste and separately dispatched PE wrap.

- Selected flow: Discarded corrugated transit carton outside original retail package
- Flow property / unit: Mass / kg
- Amount rule: D_carton/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources:

###### Discarded polyethylene transit stretch film (`wrap_waste`)

Actual separately dispatched polyethylene stretch-film carrier from inbound handling; actual polymer/state and receiver are checked. Film remaining in another measured carrier is excluded here.

- Selected flow: Discarded polyethylene transit stretch film
- Flow property / unit: Mass / kg
- Amount rule: D_wrap/Q
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fates`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_pool | all inventory rows | Prospectively fix one configuration, site, receiving-gate scope and observation period pool, retaining every failed/closed/idle/zero-sale subcohort. Q is count of distinct original serials with final-valid qualified acceptance at cutoff; reacceptance of same serial counts once, actual revocation removes validity even without physical return, financial adjustment with valid acceptance does not. Q=0 is explicitly unnormalizable, retains raw burdens and must not be deleted or pooled retrospectively for convenience. Late returns replace original pool versions of Q, F/S/T/O and all numerators at actual event dates; they do not charge the new cohort again. | ghg-product2011 |
| a_shared | store_ac | Measure disjoint circuit electricity first. Where a parent contains a child circuit subtract it once; independent meters are not subtracted. Split residual measured kWh source pools into active equipment, reserved idle/fixed equipment and facility fixed components with complete sums matching parent; never sum unlike drivers. Active equipment uses logged occupied equipment-seconds; its idle/fixed pool uses measured reserved equipment-seconds across all beneficiaries including failed/empty reservations. Lighting/fan/facility pools use disjoint served floor-area m2 times actual duration h across all beneficiaries including empty reservations. For each source c and pool h, w_c_h=d_c_h/sum_all_h(d_c_h), E_h=sum_c(E_c*w_c_h). Positive source with zero/unknown total driver blocks completeness. Preserve closures and avoid repeating digital-module electricity already covered by provider. | ghg-product2011 |
| a_assets | custody; checkout; residual | For every actual homogeneous asset model/BOM/stage vector V_a, collect e_recorded_a_h in its ORIGINAL beneficiary pool: measured reserved device-hours for checkout/ICT/handling equipment and powered lighting/fan fixtures, each separate homogeneous model/source pool; served m2*h for building shell/passive fixed structures/shelving, in separate same-unit pools; actual cleaned m2 for a reusable wiping asset. Define matching expected lifetime exposure L_a in the same unit, f_a_h=e_recorded_a_h/L_a, retaining cumulative fractions<=1; neither nominal life nor expected exposures replace recorded numerator. At retirement E_actual_a=sum_all_h(e_actual_a_h) over ALL historical beneficiaries, f_final_a_h=e_actual_a_h/E_actual_a. Every lifetime/vector revision replaces all historic records with delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a. A residual fraction is QA, never a shortcut for changed exposures. Separate manufacture at dispatch, installation, maintenance events and retirement; whole-package included stages exclude duplicate modules. A demonstrator converted from original goods transfers the SAME original V_s to T and asset ledger, never full F plus new manufacture; removed original packaging and all asset transport follow the same versioned historical fractions. |  |
| a_digital | custody; checkout | For an internet provider interval i retain unique actual start/end, sourceh_i and all reserved endpoint-connection seconds r_i_h; n_i_h=sourceh_i*r_i_h/sum_all_h(r_i_h), including failed/empty reservations. Intervals never overlap or also become another active/idle/fixed source-hour. One payment authorization or administrative batch event j is retained once; measured actual processing seconds of its disjoint lines give p_j_h=t_j_h/sum_all_h(t_j_h), sum_h(p_j_h)=1, and allocate that event vector once. Internet does not cover unrelated backend processing. Camera source capture map uses timestamped actual field-of-view beneficiary footprint area times covered duration, disjoint zone/time, all beneficiaries/empty reservations, frozen original map/version; For each original capture zone/interval i, camera_fraction_i_h=(capture_area_m2_i_h*capture_duration_h_i_h)/sum_all_h(capture_area_m2_i_h*capture_duration_h_i_h). Allocate its capture-source vector by that fraction once; retention_source_i_h=(captured_bytes_i*retention_h_i)*camera_fraction_i_h with the original map despite later sale/retention. Collect real bytes and durations; 1GB=10^9bytes and1GiB=2^30bytes. Unknown scope/positive source with zero driver blocks completion. Skip owner allocation only for evidence already attributed to exact final owner/pool/version; provider interval/consignment attribution alone does not suffice. |  |
| a_transport | receive; custody; checkout; residual | Keep trip/segment c -> actual consignment/material/asset s -> final owner/pool/version h. Loaded source q_c uses one evidenced binding capacity: actual m_s/sum(m_s) for a demonstrated mass-constrained segment or v_s/sum(v_s) for demonstrated volume constraint, with measured gross mass/occupied volume and vehicle loading evidence; unknown/other binding constraint requires review and blocks complete use. Empty return source and stationary idle source are separately positive, allocated by measured reserved capacity*h with actual empty travel/idle duration and all beneficiaries; zero distance never erases idle fuel. q_h=sum_c_s(q_c*w_c_s*owner_s_h). Provider consignment-attributed q_c_s skips w only; source already assigned exact final owner/pool/version skips owner only. For goods inbound at receiving gate use original S/F/T/O: service includes F inbound once, S follows separate GOODS, T/O retain source responsibility. First-use supplies (including outer transit packaging not already in supplier scope) and asset/maintenance/retirement transport follow respective original owner fractions; asset transport is corrected over all historical beneficiaries. Exclude transport already included in original supplier/manufacturing/treatment package. | ghg-product2011 |
| a_cleaning | custody; residual | Completion for actual cleaning first adds one card per actual complete formulation input, entry water, reusable cloth/model and actual wet waste carrier. Fix each homogeneous original formulation source b by supplier lot, original measured net formulation m_b kg and manufacturing-at-dispatch vector V_b. V_b/m_b is its kg-basis background; signed source scope must state whether original bottle/closure/label manufacture is included, and excluded packaging needs its own actual source card without overlap. Keep the original source and all historical beneficiary pools through first use and final disposal. At each cutoff/version v, original-source conservation is m_b=sum_j(M_b_j_v)+confirmed_missing_b_v+signed_source_residual_b_v. M_b_j_v are mutually exclusive ORIGINAL formulation-origin kg, classified by actual final state and original owner: cumulative used-exported, spilled-exported, rinsate-origin-exported, dispatched-container-residue, measured other final export, currently retained-in-use, currently retained-opened-or-damaged residue, never-used-undamaged-factory-sealed stock, unused supplier return and unused onward transfer. Retained unused source can remain unassigned even when opened; the operational state and unassigned/first-use owner are independent recorded fields. Export totals accumulate from original receipt, while held states use current measured stock: do not drop earlier exports each period or count an intermediate used->rinsed/retained state twice. Every new event or correction replaces the affected original state/version, preserving source ID and all earlier event IDs; revise all affected historical owner records instead of recharging the current period. Apply c_clean_source for manufacture/inbound ownership. Never add newly introduced rinse water/dirt as formulation kg. Imports already exclude reuse: do not subtract reuse. Direct full-liquid dispatch mass is actual metered V_discharge*rho at measured temperature/composition or net weighing; no stock/evaporation deduction from direct dispatch. Whole wet cloth/container/liquid carriers require receiver acceptance of actual constituents and matching treatment; separate carriers are disjoint. Actual unknown fate/source residual blocks completeness. Add actual emission cards only with measured species/path/exterior medium; internal air and product labels never establish environmental discharge. |  |
| a_carriers | kit_waste; carton_waste; wrap_waste | Keep three distinct levels: actual same-state carrier/consignment total -> original source s within that carrier -> final owner/original pool/version h. Use exclusive direct_exact or source_share mode. In direct_exact, allocated_i_h=exact_owner_net_kg_i_h, the actual measured net kg already evidenced for that precise original source and final owner/original pool/version; do not multiply another source or owner fraction. In source_share, a_i_s=measured_source_origin_same_state_kg_i_s/sum_all_s(measured_source_origin_same_state_kg_i_s), sum_s(a_i_s)=1 and the complete sum of those source-origin kg reconciles to actual gross_kg_i-tare_kg_i. Then allocated_i_h=(gross_kg_i-tare_kg_i)*a_i_s*owner_s_h. Provider attribution to the carrier/consignment TOTAL does NOT remove a_i_s: the carrier can contain several original sources/SKUs. Only evidence already assigned to that particular original source permits provider_source_net_kg_i_s*owner_s_h without another a_i_s; only evidence assigned to the exact final owner/original pool/version permits skipping the already-proven owner factor. Record provider_attribution_level and its original-source/owner/pool/version evidence. Positive unassigned or unknown original-source/owner portions block completeness; retain them explicitly, never default zero or renormalize known shares to hide them. No additional composition/stock correction. Actual carrier treatment covers that whole carrier; separately modelled source components cannot repeat it. Outer cartons/film already used by supplier retain original supplier source-stage ownership; unwrapping never creates a new first use or another manufacture. Retailer-new supplies follow first actual use, unused stock/transfers carry their unassigned source. |  |
| a_completion | all inventory rows | Complete one compatible exchange/property/unit at a time: retain core raw numerator C_x_h (including failed_pack N_F and store_ac MJ, never their already divided display), external raw module R_x_k_h directly, or normalized external z_x_k_h restored by its evidenced ORIGINAL D_k_h. N_complete_x_h=C_x_h+sum_k(R_x_k_h)+sum_k(z_x_k_h*D_k_h); q_complete_x_h=N_complete_x_h/Q_h once. Raw and normalized modes are exclusive per original source ID. Apply still-missing final owner attribution before addition under a_assets/a_digital/a_transport. Verify source constituent/time/object/stage disjointness and original version; do not add kg to MJ, combine heterogeneous asset Items, lose included F/AC, repeat F or divide a module by Q twice. Report all missing atomic rows and completeness blockers. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_receiving | receive | failed_pack | Serial and source ledger | source_id; original_serial; actual_part_number; hardware_revision; lot; region; seal_photo; original_BOM; contained_cell_state; N_source_s; S_s; F_s; T_s; O_s; V_s; final_owner; original_pool; pool_version; G_open; receipts; customer_returns; internal_in; gross_customer_handover; initially_accepted; never_accepted; supplier_handover; internal_out; condemnation_count; confirmed_missing_count; observed_G_close; event_id; cutoff | Responsible receiving officer scans each actual serial/lot, documents complete original package and changed state, independently weighs source/transport packaging if needed; supplier-signed manufacturing dispatch vector and inbound stage map must reconcile to actual configuration. Count inventory at both cutoffs and follow every original source through return/resale. | Item(s) and separate kg evidence | Every event and both cutoffs | Full original pool and late corrections | Receiving dock and original supplier gate | per reference flow | Signed serial counts/BOM/vector boundaries; calibrated scale if used; officer and reviewer signature |
| cp_checkout | checkout | retail_service | Acceptance ledger | original_serial; acceptance_event; final_valid_serials; revocation_event; physical_return_event; financial_only_event; gross_customer_handover; initially_accepted; never_accepted; cutoff; pool_version; actual_site; mixed_assortment; seal_state; power_on_history | Checkout officer matches serial/configuration, factory seal and complete listed contents from supplier receiving evidence; records actual handover and qualified acceptance separately from payment. No opening/power-on check is performed as sealed acceptance. Audit late revocations and actual returns separately. | Item(s) | Every attempt and cutoff review | Whole declared pool including failed attempts | Named actual mixed-assortment store handover point | per reference flow | Time-stamped acceptance/return ledger, actual site assortment and no-operation evidence; responsible cashier/reviewer |
| cp_electricity | custody | store_ac | Metered electricity and driver intervals | circuit_id; source_id; start; end; E_kWh_c; meter_unit; parent_contains_child; occupied_equipment_seconds; reserved_equipment_seconds; served_area_m2; duration_h; d_c_h; w_c_h; provider_included_scope; original_pool; pool_version | Meter each disjoint receiving/holding/checkout supply circuit, include idle/closed intervals; operator maps parent/child boundary and logs every actual beneficiary reservation/served zone. Record supply geography/voltage/provider separately; check meter calibration, clock alignment and full source reconciliation. | kWh; equipment s; m2*h | Continuous interval data and period reconciliation | Full pool including zero-sale/idle | Named circuits at actual site | per reference flow | Meter calibration/unit log, circuit map, all-beneficiary driver schedule, accountable facilities officer |
| cp_fates | residual | supplier_sealed; external_sealed; external_opened; kit_waste; carton_waste; wrap_waste | Recipient state and terminal consignment ledger | event_id; original_serial; actual_recipient; actual_state; physical_handover_count; sealed_retained_count; opened_complete_retained_count; gross_kg; tare_kg; carrier_type; carrier_mode; attribution_level; measured_source_origin_same_state_kg_i_s; a_i_s; owner_s_h; source_id; final_owner; original_pool; pool_version; carrier_state; receiver; consignment_id; W_open; generated_kg; received_waste_kg; dispatched_kg; internal_waste_transfer_kg; confirmed_waste_missing_kg; observed_W_close; condemnation_count; generated_kit_kg; provider_attribution_level; provider_original_source_id; provider_final_owner; provider_original_pool; provider_pool_version; provider_source_net_kg_i_s; exact_owner_net_kg_i_h; unknown_source_origin_kg; unknown_owner_kg | Returns officer records each actual recipient and sealed/opened complete-kit state. Waste officer directly weighs each entire dispatched same-state carrier with calibrated scale and measured tare, keeps outer corrugated cartons and PE film disjoint from original retail package. Receiver signs actual constituents/contained-cell state and treatment/transport boundary. No default waste classification or license-only acceptance. | Item(s); separate kg | Every state/event/consignment and cutoff | Original pool plus later recipient corrections | Store return/held-waste zone and named receiver gate | per reference flow | Scale/tare calibration, signed manifests, recipient treatment model, count-kg event map; responsible waste officer |
| cp_support | custody | store_ac | Mandatory completion source ledger | source_id; stage; object_model; actual_BOM; original_unit; original_denominator; mode; source_boundary; included_stages; provider_included_scope; final_owner; original_pool; pool_version; e_recorded_a_h; L_a; e_actual_a_h; E_actual_a; V_old_a; V_new_a; f_old_a_h; f_new_a_h; sourceh_i; interval_start; interval_end; endpoint_id; r_i_h; t_j_h; event_line_id; capture_area_m2; capture_duration_h; capture_area_m2_i_h; capture_duration_h_i_h; captured_bytes_i; retention_h_i; capture_map_version; captured_bytes; retention_h; trip_c; segment_c; q_c; w_c_s; owner_s_h; attribution_level; m_s; v_s; capacity_constraint_evidence; reserved_capacity; empty_duration_h; idle_duration_h; formulation_source_kg; final_source_state; gross_kg; tare_kg; V_discharge; rho; measured_temperature; C_x_h; R_x_k_h; z_x_k_h; D_k_h; Q; absence_register; formulation_source_id; original_supplier_lot; m_b; V_b; I_b; source_scope_version; packaging_included_scope; original_receipt_date; cutoff_version_v; source_event_id; source_portion_id; state_before; state_after; original_owner; owner_assignment_status; M_b_j_v; cumulative_export_origin_kg; current_retained_origin_kg; unused_supplier_return_origin_kg; unused_transfer_origin_kg; confirmed_missing_b_v; signed_source_residual_b_v; virgin_first_use_withdrawal_kg; irreversible_pre_use_loss_kg; unused_condemnation_kg; g_first_b_h; G_first_b_h; f_b_h; f_old_b_h; f_new_b_h; V_old_b; V_new_b; actual_event_date; prior_source_version | Facilities/IT/accounts/logistics officers jointly capture original records for a_assets/a_digital/a_transport/a_cleaning/c_clean_source; use calibrated meters/scales, synchronized event clocks, measured space/time and provider constituent boundaries. This custody view retains the source matrix; every added atomic card receives a matching single-process view, never a multi-process protocol cell. Raw quantities retain original units; authors add bilingual cards and recompute before completeness.  Record original net formulation kg using calibrated mass records, each source-origin portion/state/owner transition and all historical first-use events; reconcile original receipt to cumulative exports plus current stocks, signed losses and unresolved residuals.| Actual unit per homogeneous source; seconds; m2*h; bytes*h; kg; m3 | Every event/interval; each lifetime version and final retirement | All original historical beneficiaries and observation periods | Actual store plus supplier/backend/transport/receiver boundaries | per reference flow | Signed matrix, calibration, original models, all-beneficiary shares, historic replacement deltas and reviewer evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_accept | retail_service | Q=count_distinct(final_valid_serials); output=Q/Q only when Q>0. Valid set is already corrected; do not subtract revoked IDs again. | final_valid_serials; original_serial; acceptance_event; revocation_event; physical_return_event; financial_only_event; cutoff; pool_version; cp_checkout | One accepted retail service |  |
| c_goods_balance | failed_pack | Goods-only count balance: G_close=G_open+receipts+customer_returns+internal_in-gross_customer_handover-supplier_handover-internal_out-condemnation_count-confirmed_missing_count; signed_goods_residual=observed_G_close-G_close. gross_customer_handover partitions initially_accepted and never_accepted exits without overlap. Revocation without movement is no second exit. Condemnation changes goods to held waste; dispatch is not another goods subtraction. | G_open; receipts; customer_returns; internal_in; gross_customer_handover; initially_accepted; never_accepted; supplier_handover; internal_out; condemnation_count; confirmed_missing_count; observed_G_close; original_serial; event_id; cp_receiving | Independent goods-count reconciliation |  |
| c_source | failed_pack | For original supplier source s, N_source_s=S_s+F_s+T_s+O_s; N_F=sum_s(F_s); failed_pack=N_F/Q. Keep actual F source-equivalent original package counts separate from physical return/recipient counts and waste kg. Retained externally without valid service remains F unless signed continuing T responsibility is established. Original complete vector V_s and original inbound source follow b_goods/a_transport. | N_source_s; S_s; F_s; T_s; O_s; V_s; source_id; original_serial; final_owner; original_pool; pool_version; Q; cp_receiving | Original whole-package production input per reference flow |  |
| c_energy | store_ac | E_MJ=3.6*sum_c(E_kWh_c*w_c_h); store_ac=E_MJ/Q. Apply a_shared to full metered pools; do not derive electricity from155W, CPU throughput or RAM/SSD capacity. | E_kWh_c; circuit_id; parent_contains_child; occupied_equipment_seconds; reserved_equipment_seconds; served_area_m2; duration_h; d_c_h; w_c_h; Q; cp_electricity | Attributable measured MJ per reference flow |  |
| c_custody | supplier_sealed; external_sealed; external_opened | Each satellite amount=sum(actual distinct physical event counts of its stated recipient/state)/Q. supplier handoff, sealed external retention and opened complete-kit external retention are disjoint event/state records. Background T/F labels do not create movements; physical customer handover with accepted service is in raw checkout ledger only. | event_id; original_serial; actual_recipient; actual_state; physical_handover_count; sealed_retained_count; opened_complete_retained_count; Q; cp_fates | Physical satellite counts per reference flow |  |
| c_waste | kit_waste; carton_waste; wrap_waste | D_carrier=sum(allocated_i_h) from a_carriers; D_kit/D_carton/D_wrap are respectively its kit/carton/wrap carrier_type values; amount=D_carrier/Q. No retained/reused stock deduction from directly dispatched kg. Independently W_close=W_open+generated_kg+received_waste_kg-dispatched_kg-internal_waste_transfer_kg-confirmed_waste_missing_kg; signed_waste_residual=observed_W_close-W_close. Actual kit condemnation_count links measured generated_kit_kg by event, never equating Item(s) to kg. Missing waste is not fictional dispatch/treatment. | gross_kg; tare_kg; carrier_type; carrier_mode; attribution_level; measured_source_origin_same_state_kg_i_s; a_i_s; owner_s_h; source_id; final_owner; original_pool; pool_version; carrier_state; receiver; consignment_id; W_open; generated_kg; received_waste_kg; dispatched_kg; internal_waste_transfer_kg; confirmed_waste_missing_kg; observed_W_close; condemnation_count; generated_kit_kg; event_id; Q; cp_fates; provider_attribution_level; provider_original_source_id; provider_final_owner; provider_original_pool; provider_pool_version; provider_source_net_kg_i_s; exact_owner_net_kg_i_h; unknown_source_origin_kg; unknown_owner_kg | Direct dispatch kg and separate typed waste-stock check |  |
| c_clean_source | custody; residual | For each original formulation source b, g_first_b_h is newly assigned original kg = virgin first-use withdrawal + irreversible pre-use spill/loss + unused-source condemnation, using disjoint event/portion IDs; a withdrawn portion spilled or rinsed later never enters g_first again. G_first_b_h=sum_original_history(g_first_b_h); f_b_h=G_first_b_h/m_b, sum_all_h(G_first_b_h)<=m_b. Remaining unassigned unused stock/return/transfer keeps its original manufacturing/inbound responsibility with its named continuing owner. The actual formulation Product input is G_first_b_h/Q kg with background V_b/m_b; equivalent raw manufacturing burden f_b_h*V_b is a calculation check, NEVER another input or second multiplier. Original inbound source I_b follows the SAME f_b_h, unless evidence already assigns exact final owner/original pool/version; transport consignment-only attribution does not remove that owner fraction. Reuse/retained/rinsed descendants retain their first-use owner and never repeat manufacture/inbound. For any source mass/vector/ownership correction replace every affected historical allocation by delta_b_h=f_new_b_h*V_new_b-f_old_b_h*V_old_b and replace inbound analogously; record actual event date and original version. Final source-state conservation uses a_cleaning, not a current-period-only balance. All raw manufacture/inbound numerators enter a_completion before one Q. | formulation_source_id; original_supplier_lot; m_b; V_b; I_b; source_scope_version; packaging_included_scope; original_receipt_date; cutoff_version_v; source_event_id; source_portion_id; state_before; state_after; original_owner; owner_assignment_status; M_b_j_v; cumulative_export_origin_kg; current_retained_origin_kg; unused_supplier_return_origin_kg; unused_transfer_origin_kg; confirmed_missing_b_v; signed_source_residual_b_v; virgin_first_use_withdrawal_kg; irreversible_pre_use_loss_kg; unused_condemnation_kg; g_first_b_h; G_first_b_h; f_b_h; f_old_b_h; f_new_b_h; V_old_b; V_new_b; actual_event_date; prior_source_version; source_id; final_owner; original_pool; pool_version; Q; cp_support | Original formulation manufacturing/inbound numerator and persistent source conservation |  |
| c_extension | all inventory rows | Use a_assets/a_digital/a_transport/a_cleaning/c_clean_source with cp_support for each new actual atomic exchange. Final aggregation is a_completion, with original-source raw or normalized mode recorded; same source never enters both. | e_recorded_a_h; L_a; e_actual_a_h; E_actual_a; V_old_a; V_new_a; f_old_a_h; f_new_a_h; sourceh_i; r_i_h; t_j_h; capture_area_m2; capture_duration_h; capture_area_m2_i_h; capture_duration_h_i_h; captured_bytes_i; retention_h_i; captured_bytes; retention_h; trip_c; segment_c; q_c; w_c_s; owner_s_h; attribution_level; m_s; v_s; reserved_capacity; empty_duration_h; idle_duration_h; formulation_source_kg; final_source_state; C_x_h; R_x_k_h; z_x_k_h; D_k_h; source_id; final_owner; original_pool; pool_version; Q; cp_support | Compatible completed raw numerators then one common normalization |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Unbound flow identity remains row-specific and unverified. Before quantitative complete use obtain official direct original response plus matching hash receipt, observed state, bilingual names/qualifiers, type, property/unit chain and compartment; then match actual supplier/treatment background. Count/unit support does not establish service or package identity. AC historical identity does not establish current supply technology or geography. | Original records, signed completeness matrix and bilingual parser/read audit |
| dq_quantities | all inventory rows | Actual field evidence, full pool coverage, responsible collector, dated site/period, calibration and signed reconciliation are required. Manufacturer specifications are configuration evidence only: no actual lot BOM, measured mass/energy, quantified LCI, environmental credit, safety/compliance approval or universal warehouse stock is inferred. All unknowns remain explicit; no invented range/default/factor. | Original records, signed completeness matrix and bilingual parser/read audit |
| dq_completion | receive; custody; checkout; residual | Report partial core and missing modules until b_completion matrix, every actual atomic added card/protocol, signed no-combustion/refrigerant applicability, receiver treatment and a_completion source reconciliation are complete. A presence/absence checkbox without full equipment/period evidence is insufficient. Cross-language audit includes actual parsed fields, source use, rule scope, Inputs, units, negations and exceptions. | Original records, signed completeness matrix and bilingual parser/read audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_accept | retail_service; failed_pack | Reject homogeneous sealed service applicability when configuration/region/part number/seal/unused state or actual mixed-store handover is unknown; retain altered returns as explicit physical fate, never sealed output. Validate final-valid distinct set, physical handover partition, typed goods and waste balances, S/F/T/O conservation and zero-Q failure. |  |
| v_sources | all inventory rows | Check every card raw total -> fixed attribution -> one Q; protocol process/flow_role must contain its row. No AC background factor from a generic identity; no F omission or S duplication; direct dispatch and signed residuals remain independent. Nonzero unexplained residual, missing waste, changed component ownership or unknown receiver/provider scope prevents a complete result. |  |
| v_completion | all inventory rows | A complete-service result must pass b_completion and a_completion including all historic asset replacements, all-beneficiary digital/space drivers, empty/idle transport sources, complete actual treatment and precise source-stage deduplication. Candidate metadata/aligned translation and mechanically passing projection never establish scientific, translation-review or publication approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Partial incremental retail-service foreground dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same exact configuration/route core; completed service only after b_completion/a_completion; distinct GOODS may add S once |
| excluded_use | Whole CPC leaf; standalone software/download/license; computing service; product-carbon-neutrality or safety claim; full business comparison from partial core |
| required_metadata | b_scope; b_channel; Q; original pool/version; S/F/T/O; source/stage boundaries; actual BOM and source identities |
| required_quality_disclosure | Partial scope/missing modules; unbound rows; unknowns; typed balance residuals; all-beneficiary/lifetime correction coverage |
| update_trigger | Configuration/BOM/site/route/provider change; late return/revocation; asset-life revision/retirement; original evidence or identity change |

## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62184 | official_guidance | United Nations CPC Version3.0 subclass62184 explanatory note — https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62184 | Includes goods452 and478; narrower hardware scope only |
| apple-mini-spec | standard | Apple, Mac mini(2024) Tech Specs — https://support.apple.com/en-us/121555 | Real configuration and box contents; stated specifications and limitations only, no quantified LCI/actual BOM/approval |
| costco-mixed-mini | official_guidance | Costco, retained Compare Products page menu — https://www.costco.com/CompareProductsDisplay?partNumbers=4000225148 | Mixed product-category menu only; no Mac SKU/configuration or local-availability evidence; actual named-site route is a field gate |
| ghg-product2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard(2011), chapters6,7,9 — https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Service-unit and subdivision/physical-allocation concepts only; PCR equations are declared collection methods; no whole-standard conformity claim |
