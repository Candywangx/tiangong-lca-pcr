---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-leather-goods-and-travel-accessories
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Counter retail service for Longchamp L1500987001 black cowhide handbags

## 1. Scope and Applicability

This candidate specifies a partial incremental, cashless, walk-in counter retail service in a non-specialized store for one homogeneous original Longchamp Le Pliage Xtra XS black handbag, reference L1500987001. The original product page specifies cowhide, 17 x 14 x 10 cm, dark-silver-colour hardware, a polyamide/polyester recycled jacquard lining, zip/snap closure and a removable adjustable strap. It is specification evidence, not an LCI or a complete material bill. Supplier lot records must verify species, tanning/finish/coating, lining proportions, thread, adhesive, hardware alloy/plating, strap, labels/trademarks and the complete original presentation/transport packaging BOM; unknown quantities never become pure-leather mass. One prospectively fixed signed packaging configuration is required per pool. No substitution of reference10291987001 or another colour/model is allowed. Actual store assortment and transaction records must prove the non-specialized channel; the manufacturer brand site does not prove that channel. Dark silver describes colour, not silver composition; dimensions never establish net mass.

The service starts with documented custody at the store receiving gate and ends at a final-valid customer acceptance, with later acceptance history corrected. No store delivery, gift wrapping, printed receipt, repair, conditioning cream, waterproofing, re-packing, detached component sale or permanent demonstrator is included. Sampling uses photographs; no actual display asset is silently taken from stock. The allowed facility has documented absence of all stationary fuel combustion and refrigerants, including landlord systems, and uses electric resistance heating/natural ventilation. Unknown absence blocks completeness. Goods of CPC2831 and291, other292 goods and leather wholesale are excluded; this is a narrower candidate under62156, not whole-leaf coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-leather-goods-and-travel-accessories |
| classification_refs | CPC3.0:62156; narrower; Non-specialized store retail trade services, of leather goods and travel accessories |
| covered_products | Counter retail service for Longchamp L1500987001 black cowhide handbags |
| excluded_products | The service starts with documented custody at the store receiving gate and ends at a final-valid customer acceptance, with later acceptance history corrected. No store delivery, gift wrapping, printed receipt, repair, conditioning cream, waterproofing, re-packing, detached component sale or permanent demonstrator is included. Sampling uses photographs; no actual display asset is silently taken from stock. The allowed facility has documented absence of all stationary fuel combustion and refrigerants, including landlord systems, and uses electric resistance heating/natural ventilation. Unknown absence blocks completeness. Goods of CPC2831 and291, other292 goods and leather wholesale are excluded; this is a narrower candidate under62156, not whole-leaf coverage. |
| representative_product | Longchamp L1500987001; black; cowhide; complete original lot-defined pack |
| production_route | ambient counter receipt, cashless sale, documented returns; partial incremental service |
| market_state | complete new functional pack; complete damaged returns separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Counter retail service for Longchamp L1500987001 black cowhide handbags |
| How much | 1 Item(s); Q distinct final-valid original IDs |
| How well | exact SKU/BOM, completeness, customer acceptance and event traceability |
| How long or cycle | one fixed12-month pool plus replacement late-return history; a_reference |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Counter retail service for Longchamp L1500987001 black cowhide handbags |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | SKU and complete lot BOM; packaging configuration; pool and correction version; acceptance and custody events; SFOT original-source responsibility; partial boundary; whole-store and landlord absence gates; support module denominators and deduplication |

Declare every qualifier in data-package metadata; a missing qualifier means incomplete definition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | retail_service; failed_original; returned_intact; returned_damaged; handover_intact; handover_damaged; supplier_intact; supplier_damaged | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count complete original packs/service; never infer kg from count; cp_goods; c_service; c_goods. |
| m_energy | counter_ac | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain raw kWh and convert numerator by3.6MJ/kWh only; cp_power; c_power. |
| m_waste | discarded_pack | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calibrated whole complete consignment net mass, separate count and commodity/component masses; cp_goods. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | documented original complete pack at store receiving gate |
| starting_condition_role | retail-service foreground gate with separated original background responsibility |
| product_classification_scope | CPC62156 narrower; complete specified cowhide handbag service only |
| recursive_input_rule | No same-service recursion; failed_original uses goods vector, not retail service again |
| upstream_dataset_requirement | B_u complete manufacturing/packaging/actual supplier-to-door vector; module source denominators and disjoint scopes |
| disclosure | partial incremental boundary; unbound identities and missing support explicitly block full result |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_gate | all inventory rows | Record original pack ID, receipt lot, full configuration, supplier vector ID/version and declared gate. Vector B_u covers original goods manufacturing plus every original package and actual supplier-to-store transport segment once. Customer use and end-of-life of successful merchandise are outside this incremental service. No assumed zero burden for unsold goods. | longchamp-l1500987001; ghg-product-2011 |
| b_custody | returned_intact; returned_damaged; handover_intact; handover_damaged; supplier_intact; supplier_damaged; discarded_pack | Only these seven named physical custody/waste rows are satellite physical accounting without another goods-production vector. They retain real recipient/state and count or actual whole-carrier mass. This exception does not cover failed_original, counter_ac, retail_service or any support/treatment input. Incoming original packs are raw receipt QA, not another characterized input. Repeated custody does not create another original B_u. | ghg-product-2011 |
| b_partial | all inventory rows | This projection covers counter-meter operation, failed-original responsibility and custody/dispatch only. Mandatory completion modules are site electrical services and network/payment, complete building/fixtures/counter-device capital, water-only microfiber cleaning and whole waste-carrier transport/treatment. Rules a_support, a_assets, a_clean and a_transport fix their quantities and assembly; they remain absent from this partial projection until explicit atomic cards and bilingual sync are supplied. No full retail-service result may be claimed from this projection alone. | jrc-retail-2013 |
| b_change | all inventory rows | Every actual additional exchange or detached bag/lining/strap/hardware/packaging descendant requires a specific state/material card and actual records before completeness; retain the same original ID and B_u ownership. A damaged complete pack is not an unspecified loose-component or mixed-store-waste flow. Unknown destination/loss, source/BOM, absence or provider coverage remains unresolved, never zero. | longchamp-l1500987001; jrc-retail-2013 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | Counter retail | required | all pool activity for the specified configuration | reference_process | 1 Item(s) retail_service |

### Process: Counter retail (`retail`)

#### Inputs

##### Product flows

###### Complete original L1500987001 retail pack at store receiving gate (`failed_original`)

Characterized original source-equivalent input linking only F-owned B_u once; physical receipts remain raw QA.

- Selected flow: Complete original L1500987001 retail pack at store receiving gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_F / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_goods`
- Sources: `longchamp-l1500987001`; `ghg-product-2011`

###### Alternating current (`counter_ac`)

Dedicated counter circuit; supplier background and actual voltage/geography remain required.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6 * E_counter / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources: `jrc-retail-2013`

###### Complete functional L1500987001 retail pack returned by customer (`returned_intact`)

Measured physical satellite under b_custody; recipient/state mandatory; no duplicate original vector.

- Selected flow: Complete functional L1500987001 retail pack returned by customer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: R_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_goods`
- Sources: `longchamp-l1500987001`; `ghg-product-2011`

###### Complete damaged L1500987001 retail pack returned by customer (`returned_damaged`)

Measured physical satellite under b_custody; recipient/state mandatory; no duplicate original vector.

- Selected flow: Complete damaged L1500987001 retail pack returned by customer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: R_d / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_goods`
- Sources: `longchamp-l1500987001`; `ghg-product-2011`

#### Outputs

##### Product flows

###### Counter retail service for Longchamp L1500987001 black cowhide handbags (`retail_service`)

Reference service output governed by final validity, not gross handovers.

- Selected flow: Counter retail service for Longchamp L1500987001 black cowhide handbags
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_goods`
- Sources: `longchamp-l1500987001`; `ghg-product-2011`

###### Complete functional L1500987001 retail pack handed to customer (`handover_intact`)

Measured physical satellite under b_custody; recipient/state mandatory; no duplicate original vector.

- Selected flow: Complete functional L1500987001 retail pack handed to customer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: H_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_goods`
- Sources: `longchamp-l1500987001`; `ghg-product-2011`

###### Complete damaged L1500987001 retail pack held by external customer (`handover_damaged`)

Measured physical satellite under b_custody; recipient/state mandatory; no duplicate original vector.

- Selected flow: Complete damaged L1500987001 retail pack held by external customer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: H_d / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_goods`
- Sources: `longchamp-l1500987001`; `ghg-product-2011`

###### Complete functional L1500987001 retail pack returned to supplier (`supplier_intact`)

Measured physical satellite under b_custody; recipient/state mandatory; no duplicate original vector.

- Selected flow: Complete functional L1500987001 retail pack returned to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: T_i / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_goods`
- Sources: `longchamp-l1500987001`; `ghg-product-2011`

###### Complete damaged L1500987001 retail pack returned to supplier (`supplier_damaged`)

Measured physical satellite under b_custody; recipient/state mandatory; no duplicate original vector.

- Selected flow: Complete damaged L1500987001 retail pack returned to supplier
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: T_d / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_goods`
- Sources: `longchamp-l1500987001`; `ghg-product-2011`

##### Waste flows

###### Complete condemned L1500987001 retail pack consigned as waste (`discarded_pack`)

Measured physical satellite under b_custody; recipient/state mandatory; no duplicate original vector.

- Selected flow: Complete condemned L1500987001 retail pack consigned as waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_dispatch / Q
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_goods`
- Sources: `longchamp-l1500987001`; `ghg-product-2011`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_reference | all inventory rows | Before activity, define one same-configuration12-month receiving/service pool and closing date plus return observation window; retain every failed and zero-sale period. Q is the count of distinct original IDs with exactly one final-valid qualified customer acceptance in that pool. A later revocation, including without physical return, reclassifies that ID and revises the original numerator, denominator and fates using dated replacement versions. Do not subtract revocations again from the final-valid set. A refund/discount with acceptance still valid leaves Q unchanged. Re-sale of a returned original creates no second ID or service. Q=0 makes the pool unnormalizable; carry its raw burdens into its predeclared same-configuration continuation, never delete it or switch products. | ghg-product-2011 |
| a_original | failed_original | For each received original u, mutually exclusive S/F/O/T ownership coefficients sum to1. S is final-valid sold background, F is retailer-responsible failure/loss/external retention without qualified acceptance, O is still-open stock/background and T is documented transfer to supplier or named internal asset. For whole original packs use one0/1 owner, never split the environmental vector by component mass. Sum B_u_S goes to a separately disclosed successful-merchandise module; N_F source-equivalent packs feed failed_original and each links its actual matching B_u_F exactly once. Retain separate original-source strata and actual N_F_source counts on this card; attach each distinct supplier vector only to its matching stratum, then sum compatible characterized numerators. A common SKU does not make different supplier vectors identical. O carries original versions; T retains signed continuing recipient responsibility, never vanishes. Physical supplier handover and background T are separate ledgers. Lost originals have F responsibility even with no waste carrier; unknown physical fate blocks completed use. Revise every historic ownership version; no raw receipt, custody output or waste descendant gets B_u again. | ghg-product-2011 |
| a_support | all inventory rows | Complete support assembly starts from disjoint original source numerators: site HVAC/lighting/security/socket electricity, network/payment provider services, cleaning, assets and waste treatment. Direct meter/subdivision precedes allocation. Parent meter subtraction is allowed only for physically included counter circuits; an independent disjoint meter is never subtracted. Split active and fixed/idle source pools with measured same-unit reconciliation. Allocate each source pool by one same-unit causal driver across all store beneficiaries: counter service active seconds, site area_m2*actual_h(m2*h), network active transaction seconds and fixed reserved_port_count*actual_h(port*h). For each disjoint source pool m use f_m=d_target_m/sum_all_b(d_b_m), with known positive same-unit denominator and all residual/unused shares assigned to the operator; all shares sum to1. If an active pool has no driver, keep it unresolved rather than invent a share. Include closed/idle/failed and unused capacity assigned to operator; never sum unlike drivers. For each external module retain source ID/version, original denominator d_m, unrounded normalized exchange x_mj and beneficiary share f_m. Restore raw compatible numerator n_mj=x_mj*d_m*f_m; if already beneficiary-attributed set f_m=1 and use driver records only as QA. Assemble each compatible exchange/property/unit numerator as X_core_j+sum disjoint external_n_mj, using source-ID/event/component exact deduplication; X_core_AC=3.6*E_counter, and the failed_original original-source strata already carry each F-owned B_u once, so no separate F vector is added. Physical custody satellites are not environmental vectors and never enter that sum. Restore any normalized core row by its original Q first, never add normalized rows to raw sources. Include the separately owned successful-merchandise module only when total product-through-retail is requested; divide by common final Q only once. Incompatible quantities stay separate. No arbitrary model choice is deferred to data producers. | jrc-retail-2013; ghg-product-2011 |
| a_assets | all inventory rows | For each actual complete building/fixtures package, shelf/cabinet, lighting/fan/heater and counter/scanner/payment/network device, fix a signed full-BOM manufacturing/installation vector with explicit package exclusions. Cover necessary objects in exactly one evidenced package or separate module. Persistent ledger holds every historical beneficiary exposure e_b and expected lifetime exposure L in the same unit: building/fixtures reserved m2*h, individual devices reserved h. Manufacturing/installation, operation, event maintenance and end-of-life are disjoint source scopes; a package containing end-of-life cannot also receive another terminal treatment vector. Current allocation is e_b/L; a new lifetime version replaces all prior allocations, never restarts manufacture. Fractions across all historical beneficiaries cannot exceed1. At actual retirement replace expected L by total actual exposure and allocate residual to all historic beneficiaries once; terminal complete-object carrier kg follows that final responsibility fraction once, without a second manufacture fraction. Direct net terminal weighing and BOM reconstruction are exclusive; removed parts are not subtracted twice. Operation electricity is separate; actual replacement/repair components are event-specific unless signed included in the complete package. | ghg-product-2011 |
| a_clean | all inventory rows | Allowed cleaning is measured water-only reusable microfiber wiping of actual store surfaces, no detergent/solvent/cream/polish. Signed site/landlord procurement and cleaning logs must establish absence of such formulations across the pool; any presence requires specific formulation/constituent and carrier cards before use under this PCR. Meter imported water W_in in kg; do not subtract internal reuse from an import meter. Use complete-cloth manufacturing and e_b/L cleaned-area m2 attribution with all historic versions as a_assets. Record actual dispensed water, whole wet spent cloth, retained wet cloth, and directly weighed whole collected cleaning liquid as disjoint final carriers. Intermediate used cloth later rinsed is a replacement state, not an additional terminal output. For each water source, imported-origin kg in retained cloth, dispatched cloth, collected liquid, evaporation and retained stock are mutually exclusive and sum to source kg; do not treat whole cloth/liquid kg as source-water kg. A separately added dry cloth is not water export. Measure whole final collected cleaning liquid by exactly one direct mode: W_liquid=gross_liquid_kg-tare_container_kg, or W_liquid=V_discharge*rho_measured using density sampled for that actual whole carrier at recorded temperature; the modes are mutually exclusive, with no water-balance reconstruction and no later evaporation/storage subtraction from the measured dispatch. Keep retained liquid/bucket residue and dispatched liquid/container residue separate; whole-container, wet-cloth and liquid terminal carriers have disjoint actual consignment IDs and no shared residue. Establish source-water-origin kg independently from water-content assays on each final carrier and source-linked opening/closing stocks, not from its whole-carrier kg; unknown other-water contribution blocks attribution. Unknown sinks or non-water cleaning block completeness. | jrc-retail-2013 |
| a_transport | all inventory rows | No retailer delivery is included. Original supplier-to-store transport is in B_u; waste collection and actual supplier-return transport are separate support sources with measured segments. For each actual segment s and beneficiary b allocate raw vehicle activity A_s by f_bs=(reserved_payload_kg_bs*actual_reserved_h_bs)/sum_b(reserved_payload_kg_bs*actual_reserved_h_bs). Record all beneficiaries, unused capacity assigned operator and empty/idle actual reserved hours; use observed distance for driving, observed stationary hours for time-based idle, never distance0 as zero activity. Empty trips require separately measured vehicle-km unless already evidenced in provider service. Provider-already-attributed consignment activity retains its allocation and uses this segment ledger only as QA. Reject missing coverage and double inclusion in B_u. | jrc-retail-2013 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | goods and service | custody_event_ledger | pool_id; original_id; SKU; supplier_lot; species; complete_BOM; package_configuration; original_vector_id; vector_version; receiving_gate; B_u; event_id; event_date; physical_state; recipient; acceptance_status; revocation_date; original_pool; C_open; I; R_i; R_d; H_i; H_d; T_i; T_d; D; L; C_close; Q; N_F; N_F_source; S; F; O; T; W_dispatch; gross_kg; tare_kg; uncertainty; correction_version | Scan every movement and acceptance by immutable original/event ID at receiving/counter/returns/waste gate, including refusals, re-sales and no-return revocations. Calibrated count reconciliation and scale net consignment weighing; supplier full component/BOM and delivered-original vector audit. Investigate discrepancy rather than replace with balance-derived dispatch. | Item(s); kg | every event and closing correction | entire fixed12-month pool and all later correction versions | store and actual external recipients | per reference flow | signed supplier records; acceptance log; calibrated scale; actual carrier receipt; source ownership audit |
| cp_power | retail | counter electricity | dedicated_meter | meter_id; circuit_boundary; start_kWh; end_kWh; E_counter; read_dates; downtime; calibration; supply_location; voltage; provider; included_circuits; source_id; version; Q | Measure dedicated counter/scanner/payment circuit through active, closed, failed and idle periods. Retain calibrated start/end kWh and outage gap records; no nameplate energy substitution. Exclude separately metered facility circuit; include only documented counter devices. | kWh | continuous; monthly reconciliation | same full pool including idle | declared counter circuit | per reference flow | meter calibration; circuit map; supplier bill |
| cp_support | retail | required completion modules | source_module_ledger | source_id; version; component; d_m; x_mj; n_mj; external_n_mj; X_core_j; X_core_AC; E_counter; B_u; N_F_source; f_m; d_target_m; d_b_m; area_m2; actual_h; reserved_port_count; already_attributed; property; unit; beneficiary; active_pool; idle_pool; driver_unit; driver_value; all_beneficiaries; absence_evidence; asset_id; full_package_BOM; e_b; L; lifetime_version; all_historic_allocations; retirement_mass; direct_or_BOM_mode; W_in; final_water_origin_destinations; wet_cloth_mass; dry_cloth_mass; W_liquid; gross_liquid_kg; tare_container_kg; V_discharge; rho_measured; density_temperature; direct_mode; water_content_assay; source_water_origin_kg; opening_liquid; closing_liquid; retained_bucket_residue; dispatched_container_residue; carrier_consignment_id; segment_id; A_s; reserved_payload_kg_bs; actual_reserved_h_bs; empty_km; stationary_h; provider_boundary; Q | Collect actual meter/provider/cleaning/weighing/asset/segment evidence under a_support/a_assets/a_clean/a_transport. Establish whole-store and landlord absence of fuel/refrigerants and non-water cleaners. No source may enter two modules; unknown absence, incomplete history, provider scope or carrier identity blocks completion. | source-specific kg; MJ; h; m2; vehicle-km | each event; continuous meters; monthly pool reconciliation | entire pool and all asset history | all actual beneficiaries and operator unused capacity | per reference flow | original provider denominator; full bill/meter balance; signed package boundaries; lifetime versions; no-overlap register |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_service | retail_service | Q=count(distinct final-valid original_id); retain final validity at correction version, not gross sales minus twice-counted revocations; output1 per reference flow. | original_id; acceptance_status; correction_version; Q; cp_goods | 1 Item(s) | ghg-product-2011 |
| c_goods | failed_original; returned_intact; returned_damaged; handover_intact; handover_damaged; supplier_intact; supplier_damaged; discarded_pack | Use each explicit card numerator/Q once; N_F is the number of whole original packs with F ownership and matching B_u, not all received packs. W_dispatch=gross_kg-tare_kg is directly measured complete waste consignment net kg; do not add generation or apply stock corrections again. SFOT and custody checks use a_original and v_conserve without inventing physical exchanges. | N_F; N_F_source; B_u; R_i; R_d; H_i; H_d; T_i; T_d; W_dispatch; gross_kg; tare_kg; Q; cp_goods | normalized card quantities | ghg-product-2011 |
| c_power | counter_ac | E_counter=end_kWh-start_kWh; electricity_MJ=3.6*E_counter/Q. The3.6MJ/kWh conversion changes numerator units only; retain all original-period electricity after later Q correction. | E_counter; start_kWh; end_kWh; Q; cp_power | electricity_MJ |  |
| c_completion | all inventory rows | Apply fixed a_support/a_assets/a_clean/a_transport methods: n_mj=x_mj*d_m*f_m; external_n_mj=n_mj for the disjoint external modules; final_exchange_j=(X_core_j+sum compatible disjoint external_n_mj)/Q. X_core_AC=3.6*E_counter; failed_original already links every actual F-owned B_u once, no additional F vector; exclude physical custody satellites from environmental-vector aggregation. Already attributed f_m=1; restore source denominators and replace historical versions before summing. Only explicitly declared identical exchange/property/unit records combine. | X_core_j; X_core_AC; E_counter; B_u; N_F_source; x_mj; d_m; f_m; d_target_m; d_b_m; n_mj; external_n_mj; Q; cp_support | final_exchange_j | ghg-product-2011; jrc-retail-2013 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_product | failed_original | Verify exact SKU and actual full lot BOM/pack configuration, not marketing composition or another country/model. Record missing values and supplier-gate-equivalent inventory source per original. | signed supplier BOM and original vector boundary |
| q_history | all inventory rows | Keep immutable events and replacement calculations with measured uncertainty, calibration, zero-output pools, late returns, all beneficiaries and supplier-background continuity; never delete adverse periods. | dated ledgers and balance exceptions |
| q_partial | all inventory rows | Mandatory unbound-row quantities/identities and support completion cannot be inferred from a finite candidate measurement check. Publish every limitation, absence gate and unfinished module. | flow receipts; module denominator/dedup register; signed absence evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | Each unbound row must resolve independently to an official record matching actual type, complete object/state and property/unit with original bytes and integrity-bound receipt before completed use. Historical verified property/unit support is not evidence that the specific service, goods, waste or provider flow exists. AC is point-of-use energy only; collect actual supply geography/voltage/provider and background before use. | ghg-product-2011 |
| v_conserve | all inventory rows | Reconcile total-custody count: C_close=C_open+I+R_i+R_d-H_i-H_d-T_i-T_d-D-L. H_i and H_d partition all gross customer exits, including never-accepted exits; they never overlap a separate refused-exit deduction. D is counted original packs actually dispatched as waste; condemnation is only goods-to-held-waste state change, not another exit. L is investigated physical loss with unknown recipient/state; no invented waste dispatch. Monetary adjustments and no-return acceptance revocations create no physical exit. Keep goods and held-waste substocks plus measured package/bag mass checks independently. | ghg-product-2011 |
| v_complete | all inventory rows | Pass only when Q>0; complete dated custody/SFOT and original vectors reconcile; every actual card has quantity/binding/provider evidence; zero-output periods persist; required support modules and absence gates are verified; compatible numerators and denominators deduplicate. Partial/inconclusive stays explicitly partial and cannot support complete-business, standard-conformity or comparative marketing claims. Do not infer species/BOM, zero emissions or methodology approval from this candidate check. | jrc-retail-2013; ghg-product-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | partial incremental foreground service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | qualified partial service with explicit mandatory support assembly |
| excluded_use | whole62156; wholesale leather; merchandise-production substitution; unsupported complete-business/comparative claims |
| required_metadata | all reference qualifiers, original source IDs, supplier gate, Q and raw event/pool versions |
| required_quality_disclosure | identity gaps; partial support; absence and source/BOM gaps; calibration and uncertainty |
| update_trigger | late acceptance change; original/pack/BOM/provider change; asset lifetime/retirement; revised measured records |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-62156 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62156 | CPC3.0 explanatory note:2831,291,292 boundary; classification only |
| longchamp-l1500987001 | handbook | https://www.longchamp.com/en/en/products/handbag-xs-L1500987001.html | Manufacturer product details for L1500987001; configuration screen only, not full BOM/LCI or generic handbag identity |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector,2013, EUR25998EN; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | Retail electricity, logistics, water/cleaning and waste screening, executive overview; no imported benchmark values |
| ghg-product-2011 | standard | GHG Protocol, Product Life Cycle Accounting and Reporting Standard,2011, chapter9 p63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General subdivision/physical allocation and consistent boundaries only; this PCR fixes its own prospective equations, not a conformity claim |
