---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-waste-and-scrap-and-material-d3bd17a6
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of already sorted and baled postconsumer old corrugated containers

## 1. Scope and Applicability

Own-account B2B wholesale of ALREADY SORTED AND BALED POSTCONSUMER OLD CORRUGATED CONTAINERS (OCC), original supplier bales, ordinary ambient hold and electric handling to actual industrial recycling-buyer acceptance. Excludes new paper, mixed unsorted collections and merchant collecting, sorting, opening, baling/rebaling, pulping, recycling, drying or conditioning/use. Actual extra work needs reviewed scope. Postconsumer origin requires actual evidence; the old-container label or the 2019 buyer example alone does not prove every batch origin. The buyer example cites 2016 specifications and supplies qualitative grade, binding, moisture, nonpaper and receiver questions only; no numerical threshold, bale mass, load, packaging prohibition, current law or universal recipe. Traded OCC is a nonexchange secondary-commodity audit, distinct from the final Count merchant service. Actual Product/Waste handoff evidence is independent of price. Prior collection/sort/bale/pack and declared prior-system inheritance/cutoff remain outside this service once, neither automatic full virgin-box burden nor zero burden/recycling credit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-waste-and-scrap-and-material-d3bd17a6 |
| classification_refs | CPC 3.0:61095 narrower; supplied goods39241 within392 |
| covered_products | Actual original already sorted-baled postconsumer OCC merchant service to industrial recycling buyers |
| excluded_products | New paper, unsorted collection, merchant opening/sorting/baling/rebaling/pulping/recycling/conditioning/use; fee agency/retail/standalone waste collection |
| representative_product | Actual original bale/source batch/grade/postconsumer handoff and reviewed prior-burden decision, wire/staple/nonpaper/water gross-net convention and receiver status |
| production_route | Actual already sorted-baled source gate -> owned merchant receipt/condition/ambient hold/electric handling -> actual final industrial B2B acceptance after reversals |
| market_state | Completed commercial service, with secondary OCC stock/throughflow and inherited bindings separately audited as nonexchange commodity |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actual completed owned/resold industrial recycling-buyer consignment of original sorted-baled postconsumer OCC |
| How much | 1 Item(s) |
| How well | Actual ownership/resale/business buyer/final gate/source/reversals plus postconsumer origin/recovery handoff, reviewed prior-burden decision, actual grade/bales/received-state/legal status; no universal contamination or humidity threshold |
| How long or cycle | Actual source handoff/receipt/holding/dispatch/final acceptance/reversal times, timezone/source and stock/meter/full-asset periods. Same-stock closing-to-opening carry is not new source demand or N. |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account wholesale consignment of already sorted and baled postconsumer old corrugated containers |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_grade; source_batch; bale_ids; postconsumer_origin_evidence; already_sorted_baled_evidence; recovery_handoff_id; recovery_handoff_gate; cutoff_or_inheritance_decision; prior_burden_method; prior_burden_dataset_link; receiver_legal_Product_Waste_status; legal_status_evidence; original_bale_membership; wire_staple_membership; bale_count; bale_gross_mass; net_received_OCC_mass; water_sample_component_scope; water_wet_or_dry_basis; original_bale_pack_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| final_count | accepted_service | Count | Item(s) | Unique real FINAL owned/resold industrial B2B acceptances after reversals, N>0; bale/kg/fibre-yield/price not service count. |
| bale_component_mass | cp_occ; cp_outlets | Mass | kg | Actual gross/net convention, external binding/pack tare versus retained staples/nonpaper/water and original membership. Whole/component views nonadditive; no universal bale weight. |
| water_dry_basis | cp_occ | Mass | kg | Actual water-only wet fraction versus same-sample dry water/nonwater ratio, percent converted first. Dry nonwater includes nonpaper and is not dry fibre or recycling yield; ambiguous buyer humidity not actual water fraction. |
| NET_supply_shares | cp_supplies | Mass | kg | NET material receipts exclude container tare; own native numerator/denominator basis/source and positive compatible denominator, stock return convention exclusive. |
| actual_cargo_work | freight | Mass * Length | t*km | Cargo actual received bale/water/wires/staples/nonpaper/pack/support once; EACH count once/TOTAL unchanged, only noncargo tare, each unique loadleg share inside SUM then N once. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual already sorted and baled postconsumer OCC in original supplier bales at declared recovery/preparation handoff, actual grade/origin/bindings/nonpaper/water/pack and legal Product/Waste status with evidence. |
| starting_condition_role | Received secondary-material gate for a merchant-service add-on, not new corrugated-box production or current collection/sorting/baling/pulping/recycling. |
| product_classification_scope | CPC 3.0:61095 narrower original postconsumer OCC-bale merchant service; actual goods39241. Legal commodity status and final Count service identity are separate. |
| recursive_input_rule | Purchased/resold OCC, original wires/staples/nonpaper/water and commercial returns stay nonexchange commodity stock/throughflow. Do not recursively model another wholesale service, current recycling or full virgin-box production as consumed service input. |
| upstream_dataset_requirement | Link the complete ACTUAL received sorted-baled gate: attributable collection, sorting, baling and original packing already performed, plus a reviewed explicit prior-system burden-inheritance/cutoff/allocation decision tied to actual postconsumer origin and recovery handoff. Neither automatic full virgin-box burden nor automatic zero/recycling credit. Quantify original assigned demand and exclusive source-stage/loss coverage outside this service once; unresolved prior treatment blocks complete-chain use. |
| disclosure | Declare actual origin/recovery handoff, prior product-system links and reviewed burden method/decision/source/owner/time/coverage, receiver legal status, original bale/grade/gross-net/wire-staple/nonpaper/water definitions, ownership/final buyer gate, all-terminal/carry/source integration evidence and gaps. |

### Boundary Rules

| rule_id | Rule |
| --- | --- |
| actual_merchant_route | Actual record/pack/condition receipt, ordinary ambient stock/electric handling and final B2B handover. No merchant collection, opening, sorting, baling/rebaling, pulping, recycling, drying/conditioning or use assumed; outsourced extras require reviewed scope. Inherited preparation does not activate a current recovery technology. |
| secondary_origin_treatment | Postconsumer OCC is secondary because it originates from used packaging, subject to actual origin evidence. Link prior product systems and recovery handoff without importing a universal prior product recipe. This PCR requires one reviewed, documented inheritance/cutoff/allocation decision at that handoff, with actual included/excluded stages and prior/current/buyer duplicate checks; a pending decision is incomplete. Keep the linked secondary commodity outside service exchanges. |
| completed_source_integration | Missing ACTUAL preparation stages or additional original secondary-commodity demand MUST actually be integrated into the linked commodity system outside this service exactly once before complete-chain use. Require completed status, actual dataset/link, timestamp/timezone, source, exclusive owner, integrated native quantity/basis and stage/loss coverage/once evidence. A pending plan or recorded amount is insufficient. |
| stock_carry_horizon | Prior-period closing to next opening for the same stock carries original quantity/state/source/owner through one paired transfer. It is not a new source purchase/demand, service acceptance N or two competing terminal exits. Use one declared source-cohort horizon: internal carries are not two terminal drivers; final unshipped closing at that horizon is counted once. Open/rejected/reversed resources remain attributed. |
| native_fate_scope | Wet OCC mass is not dry fibre or actual recycling yield. Water fractions require actual water-only definition/sample/basis; ambiguous humidity and LOD other volatiles are not water fraction. Actual wire/staple/nonpaper/pack components and whole bale/capture/liquid/species are nonadditive. Real receiver Product/Waste status/classification and fate evidence required, not price alone; no automatic virgin-paper substitution or recovery credit. |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sorted_baled_occ_wholesale | Original sorted-baled postconsumer OCC own-account wholesale | required | Actual already sorted original postconsumer bale owned/resold industrial B2B consignment | foreground | accepted_service |

Actual consignment/cohort record/condition receipt, ambient hold/electric handling, conditional site hygiene/incident/changeover and final buyer/receiver events link every resource to actual periods and all consumers. Open/rejected resources remain. No current merchant recovery technology or pulp yield from secondary material identity. Original OCC preparation and reviewed prior burden/cutoff linkage stay outside service once.

### Process: Original sorted-baled postconsumer OCC own-account wholesale (`sorted_baled_occ_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: sum(actual_utility_quantity*documented_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual metered kWh interval/all-user causal drivers and idle/open coverage/provider support; no paper-mill or baler energy per bale.

###### Actual liquid treated tap-water supply (`site_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: actual_utility_quantity converted to m3*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual meter/supplier volume, event/period/native conversion/share and receiver, no water quantity from ambiguous humidity label.

###### Actual independently recorded synthetic detergent supply (`service_consumables_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: selected actual gross or consumed NET service material mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material identity/composition/NET stock receipts, EACH/TOTAL count-mass or density and matched unused return; no default dust-capture ratio.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account wholesale consignment of already sorted and baled postconsumer old corrugated containers (`accepted_service`)

One real final owned/resold industrial recycling-buyer accepted consignment after reversals, actual original OCC bales/grade/source/prior-burden decision/received-state water/nonpaper/pack/legal handoff qualifiers. Service Count not bale piece, wet kg, dry fibre or recycling yield.

- Selected flow: Completed own-account wholesale consignment of already sorted and baled postconsumer old corrugated containers
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_occ`

Range evidence need: Need actual ownership/resale/business buyer/final gate/source/reversals and origin/recovery-handoff/declared burden/legal status, actual bale counts/gross-net/sample water/nonpaper/period; no fixed bale mass/count.

##### Waste flows

###### Discarded complete received sorted postconsumer OCC bale (`whole_bale_waste_atomic_case`)

Conditional on independently recorded actual Discarded complete received sorted postconsumer OCC bale. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `whole_bale_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete received sorted postconsumer OCC bale
- Flow property / unit: Mass / kg
- Amount rule: actual whole-bale receiver NET stream mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual decision/bale-origin/parent membership, receiver status/transfer net-tare/composition/sample source and treatment, not automatic recycling of rejected bales.

###### Actual separately collected paper packaging waste (`pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: actual separate binding-pack receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need original wire versus staple/internal nonpaper membership, actual native net-tare/residues and receiver; buyerexample no-pallet rule not universal inventory.


###### Actual separately collected metal packaging waste (`pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: actual separate binding-pack receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need original wire versus staple/internal nonpaper membership, actual native net-tare/residues and receiver; buyerexample no-pallet rule not universal inventory.


###### Actual separately collected plastic packaging waste (`pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: actual separate binding-pack receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need original wire versus staple/internal nonpaper membership, actual native net-tare/residues and receiver; buyerexample no-pallet rule not universal inventory.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule |
| --- | --- |
| causal_service_share | Direct actual event-to-consignment trace, else supported physical handling/space-time causal drivers over every consumer/period including idle/open/reject work. documented_share=numerator_driver/denominator_driver, native compatible basis and positive denominator. No automatic bale count, wet mass, price or assumed fibre-yield share. |
| prior_secondary_burden | Record the reviewed prior-system treatment at actual recovery handoff: method, decision/source/owner/time, included/excluded prior product and collection/preparation stages, burden_transfer_quantity/native basis and prior_burden_dataset_link/coverage. Preserve that treatment across carry and final delivery. Prior-system burdens or credits already assigned to prior product or buyer must not also enter the service or source link. No universal all-virgin or zero-burden default. |
| original_source_assignment | Use actual direct source-target trace OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers only from positive complete compatible all-terminal records incl final closing/useful-other exits/returns/proven loss, each native quantity/unit/basis/method/state/time/source/link/owner. commodity_source_gate_demand=assigned_source_gate_quantity at original sorted-baled/pack state including evidenced state-change share, not final shipped mass+discard. Internal closing-opening carry preserves original source quantity/state/owner, never new source demand or duplicate terminal driver. Native baseline/additional/loss coverage outside once.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| NET_supply_returns | S=opening+net_receipts-closing including retained recovery; receipts are actual NET materials excluding supply-container tare. Gross INPUT S/N plus separately matched actual usable unused OUTPUT OR consumed-only (S-usable_outward_return)/N and OMIT matching return exchange. Same-scope standalone supply only, no inherited OCC/wire/pack deduction or second credit. |
| complete_life_assets | Full manufacture/maintenance/replacement/retirement/EOL attributed by compatible job_driver/lifetime_all_user_driver. Lifetime=observed all-user use+sourced remaining service, all consumers/periods/native equivalence/uncertainty/sensitivity/update; provider/carrier one owner and total/N once. No new support per bale. |
| unique_freight_receiver | Each unique load+leg its documented_service_share=numerator_driver/denominator_driver INSIDE SUM then /N once. Cargo actual wet bale/wire/staples/nonpaper/pack/support on exclusive measured membership; EACH compatible count once/TOTAL unchanged, only true noncargo tare excluded. Receiver transport/treatment and whole/component views one owner once, no automatic recovery or avoided-production credit. |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_occ | sorted_baled_occ_wholesale | Actual node exchanges/events and nonexchange secondary-commodity audit | Original-bale/postconsumer-origin, prior-burden, moisture, ownership and cross-period source ledger | bale_count; bale_count_unit; bale_count_basis; bale_count_method; bale_count_state; bale_count_source; bale_count_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; bale_gross_mass; bale_gross_mass_unit; bale_gross_mass_basis; bale_gross_mass_method; bale_gross_mass_state; bale_gross_mass_source; bale_gross_mass_sample_time; net_received_OCC_mass; net_received_OCC_mass_unit; net_received_OCC_mass_basis; net_received_OCC_mass_method; net_received_OCC_mass_state; net_received_OCC_mass_source; net_received_OCC_mass_sample_time; external_pack_tare; external_pack_tare_unit; external_pack_tare_basis; external_pack_tare_method; external_pack_tare_state; external_pack_tare_source; external_pack_tare_sample_time; wire_staple_quantity; wire_staple_quantity_unit; wire_staple_quantity_basis; wire_staple_quantity_method; wire_staple_quantity_state; wire_staple_quantity_source; wire_staple_quantity_sample_time; paper_component_quantity; paper_component_quantity_unit; paper_component_quantity_basis; paper_component_quantity_method; paper_component_quantity_state; paper_component_quantity_source; paper_component_quantity_sample_time; nonpaper_quantity; nonpaper_quantity_unit; nonpaper_quantity_basis; nonpaper_quantity_method; nonpaper_quantity_state; nonpaper_quantity_source; nonpaper_quantity_sample_time; wet_sample_mass; wet_sample_mass_unit; wet_sample_mass_basis; wet_sample_mass_method; wet_sample_mass_state; wet_sample_mass_source; wet_sample_mass_sample_time; water_quantity; water_quantity_unit; water_quantity_basis; water_quantity_method; water_quantity_state; water_quantity_source; water_quantity_sample_time; dry_nonwater_mass; dry_nonwater_mass_unit; dry_nonwater_mass_basis; dry_nonwater_mass_method; dry_nonwater_mass_state; dry_nonwater_mass_source; dry_nonwater_mass_sample_time; dry_paper_mass; dry_paper_mass_unit; dry_paper_mass_basis; dry_paper_mass_method; dry_paper_mass_state; dry_paper_mass_source; dry_paper_mass_sample_time; w_wet; w_wet_unit; w_wet_basis; w_wet_method; w_wet_state; w_wet_source; w_wet_sample_time; w_dry; w_dry_unit; w_dry_basis; w_dry_method; w_dry_state; w_dry_source; w_dry_sample_time; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_source; percent_to_ratio_factor_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; proven_loss_quantity; proven_loss_quantity_unit; proven_loss_quantity_basis; proven_loss_quantity_method; proven_loss_quantity_state; proven_loss_quantity_source; proven_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; target_exit_driver; target_exit_driver_unit; target_exit_driver_basis; target_exit_driver_method; target_exit_driver_state; target_exit_driver_source; target_exit_driver_sample_time; sum_exit_drivers; sum_exit_drivers_unit; sum_exit_drivers_basis; sum_exit_drivers_method; sum_exit_drivers_state; sum_exit_drivers_source; sum_exit_drivers_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; integrated_additional_stage_quantity; integrated_additional_stage_quantity_unit; integrated_additional_stage_quantity_basis; integrated_additional_stage_quantity_method; integrated_additional_stage_quantity_state; integrated_additional_stage_quantity_source; integrated_additional_stage_quantity_sample_time; carry_original_source_quantity; carry_original_source_quantity_unit; carry_original_source_quantity_basis; carry_original_source_quantity_method; carry_original_source_quantity_state; carry_original_source_quantity_source; carry_original_source_quantity_sample_time; burden_transfer_quantity; burden_transfer_quantity_unit; burden_transfer_quantity_basis; burden_transfer_quantity_method; burden_transfer_quantity_state; burden_transfer_quantity_source; burden_transfer_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_grade; source_batch; bale_ids; postconsumer_origin_evidence; already_sorted_baled_evidence; original_bale_membership; wire_staple_membership; external_tare_vs_retained_nonpaper_basis; water_sample_component_scope; water_definition_source; water_wet_or_dry_basis; LOD_other_volatiles_exclusion; dry_nonwater_not_fibre_yield; no_new_open_sort_assay; receiver_legal_Product_Waste_status; legal_status_evidence; legal_status_owner; legal_status_place_time; prior_product_system_ids; recovery_handoff_id; recovery_handoff_gate; recovery_handoff_time_timezone_source; prior_burden_method; cutoff_or_inheritance_decision; burden_decision_source; burden_decision_owner; burden_decision_time; prior_burden_dataset_link; prior_burden_coverage; prior_current_buyer_duplicate_exclusion; original_bale_pack_state; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; terminal_horizon_id; cohort_horizon_start_end; carry_transfer_id; carry_original_state; carry_original_source_owner; closing_opening_pair_source; carry_not_new_source_demand; carry_not_new_service_acceptance; carry_not_two_terminal_exits; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; actual_missing_stage_ids; additional_stage_integration_status; additional_stage_integration_dataset_link; additional_stage_integration_time; additional_stage_integration_time_zone; additional_stage_integration_source; additional_stage_integration_owner; additional_stage_integration_coverage; additional_stage_integration_once_evidence; receipt_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | Trace real merchant owned purchase/resale, industrial recycling buyer, final acceptance gate/source/reversals, not receipt or price alone. Require already sorted/baled postconsumer origin and actual original grade/bale IDs; existing supplier/sample records without prescribing bale opening, sorting or new assay. Declare gross/net convention and external wire/pack tare versus retained staples/nonpaper, all native quantities and units/basis/method/state/source/sampletime. Water fraction belongs to identified sample/component and water-only wet/dry definitions, not ambiguous buyer humidity or fibre yield. Record actual Product/Waste handoff evidence/owner/place/time independently of price. Link prior product origin and recovery handoff to reviewed inherited-burden/cutoff decision, method/source/owner/time/dataset coverage; neither automatic virgin-box burden nor zero/credit. Source allocation direct actual trace OR complete positive compatible all-terminal native records incl final closing/useful others/returns/proven loss. Prior closing to opening carries original quantity/state/source/owner on one transfer, not new source demand, new N or two terminal exits. Actual missing received-gate stages or additional original secondary-commodity demand MUST be integrated into the linked commodity system outside this service exactly once before complete-chain use. Require completed status, actual dataset/link, timestamp/timezone, source, exclusive owner, integrated native quantity/basis and stage/loss coverage/once evidence; a recorded amount or pending plan is insufficient.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs, every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_supplies | sorted_baled_occ_wholesale | Actual node exchanges/events and nonexchange secondary-commodity audit | Actual NET service supplies and extra outer protection | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; material_identity; net_material_receipt_excluding_container_tare; standalone_stock_scope; matched_return_ids; unused_return_convention; inherited_bale_wire_exclusion; owner; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Actual hygiene/wipe/absorbent/filter/additional external protection only if used; original OCC/wires/staples/pack are merchandise. NET material receipts exclude containers. Preserve EACH/TOTAL, composition/count-mass/density and same standalone stock/unused-return evidence. Gross supply with separate matched unused outward output OR consumed-only omitting that return exchange; no assumed rebaling wire or inherited-material credit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs, every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_utilities | sorted_baled_occ_wholesale | Actual node exchanges/events and nonexchange secondary-commodity audit | Actual ambient warehouse/electric-handling/site-hygiene utilities | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; provider; all_consumers; interval_start; interval_end; provider_carrier_overlap; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Real meter intervals/supplier quantities and all-user native causal numerator/denominator; separate measured/allocated coverage. No merchant collection/sorting/baling/rebaling/pulping/recycling/drying or humidity-control energy, no paper-mill yield factor. Actual provider/carrier overlap excluded. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs, every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_provider | sorted_baled_occ_wholesale | Actual node exchanges/events and nonexchange secondary-commodity audit | Actual physically bounded warehouse-provider package | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; provider_id; contract_id; operation_scope; excluded_operations; utility_asset_freight_treatment_coverage; event_ids; owner; period_id; time_zone; time_source | Actual physical equivalent/operation/share/period and material/utility/assets/freight/treatment coverage. Contracted open/sort/rebale/dry/pulp/recycle work remains real extra operation requiring reviewed scope. No generic recycling package, money-to-mass, price-based end-of-waste or fibre-yield equivalence. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs, every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_assets | sorted_baled_occ_wholesale | Actual node exchanges/events and nonexchange secondary-commodity audit | Complete-life actual warehouse/handler/reusable-support register | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; manufacture; maintenance; replacement; retirement; end_of_life; all_consumers; all_periods; remaining_life_source; observed_boundary; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; inherited_bale_pack_exclusion; period_id; time_zone; time_source | Actual warehouse/racks/electric handler/support full manufacture, maintenance/replacement/retirement/EOL; all users/periods and job/observed all-user plus sourced remaining native compatible equivalent drivers. Include idle/open/reject users, uncertainty/sensitivity/update and one provider/carrier owner. Inherited wire/pack not new current asset or one new pallet per bale. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs, every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_freight | sorted_baled_occ_wholesale | Actual node exchanges/events and nonexchange secondary-commodity audit | Actual unique load-leg original-bale freight records | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; received_bale_mass; received_bale_mass_unit; received_bale_mass_basis; received_bale_mass_method; received_bale_mass_state; received_bale_mass_source; received_bale_mass_sample_time; retained_wire_staple_nonpaper_mass; retained_wire_staple_nonpaper_mass_unit; retained_wire_staple_nonpaper_mass_basis; retained_wire_staple_nonpaper_mass_method; retained_wire_staple_nonpaper_mass_state; retained_wire_staple_nonpaper_mass_source; retained_wire_staple_nonpaper_mass_sample_time; inherited_added_pack_mass; inherited_added_pack_mass_unit; inherited_added_pack_mass_basis; inherited_added_pack_mass_method; inherited_added_pack_mass_state; inherited_added_pack_mass_source; inherited_added_pack_mass_sample_time; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_state; actual_carried_support_mass_source; actual_carried_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; actual_bale_component_membership; water_nonpaper_pack_coverage; record_owner; empty_return_coverage; carrier_asset_fuel_coverage; N; time_zone; time_source | Cargo is actual as-received bale(s), retained water/wire/staples/nonpaper according to measured scope, original/added pack and actual carried support even reusable. Dry fibre mass or buyer example pallet prohibition not payload. EACH compatible mass times actual count once/TOTAL unchanged; only true noncargo carrier tare excluded. Each load+leg own documented native share inside work sum then /N once, actual conversions/empty/provider/receiver scope. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs, every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_outlets | sorted_baled_occ_wholesale | Actual node exchanges/events and nonexchange secondary-commodity audit | Exclusive actual whole-bale, material, pack and containment exits | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_paper; retained_paper_unit; retained_paper_basis; retained_paper_method; retained_paper_state; retained_paper_source; retained_paper_sample_time; retained_nonpaper; retained_nonpaper_unit; retained_nonpaper_basis; retained_nonpaper_method; retained_nonpaper_state; retained_nonpaper_source; retained_nonpaper_sample_time; retained_wire_staples; retained_wire_staples_unit; retained_wire_staples_basis; retained_wire_staples_method; retained_wire_staples_state; retained_wire_staples_source; retained_wire_staples_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; event_id; transfer_id; parent_bale_source_ids; fragment_material_ids; whole_bale_exclusion; separate_material_exclusion; separate_pack_exclusion; mixed_capture_exclusion; free_fluid_exclusion; component_identity; water_sample_component_scope; water_definition_source; receiver_id; receiver_legal_Product_Waste_status; receiver_status_evidence; receiver_classification; treatment_owner; retained_content_fate; usable_supply_return_link; actual_export_not_closing; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Actual reject/return/closing/discard and receiver decision, not contamination or wetness automatically waste. Commercial useful OCC returns/exits remain nonexchange commodity audit with matching origin/burden linkage. Whole discarded bale includes retained paper/wire/staples/nonpaper/moisture; independent actual loose material/pack/mixed capture/contained liquid excludes its membership. Every retained component quantity has own native unit/basis/method/state/source/sampletime. Real receiver legal status/classification and physical treatment/transport one owner; no assumed bale opening, recycling yield or avoided virgin-paper credit. Consumed-only supply omits matched unused output; closing stock is not external return. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs, every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_environment | sorted_baled_occ_wholesale | Actual node exchanges/events and nonexchange secondary-commodity audit | Actual dust/species and receiving-medium evidence | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; particle_basis; receiving_medium; factor_scope_complete; composition_basis_source; contained_transfer_exclusion; release_owner; measurement_location; time_zone; time_source | Require actual species/particle class and receiving medium, measured release OR applicable native activity/factor with only necessary composition/fate proportions. Complete species factor already covering fractions not multiplied again. Captured fibre/dust/wires, retained moisture or stock difference is not air emission/decay/zero; contained receiver fluid not direct outfall. No pulp/recycling yield, original biogenic sequestration or virgin-paper factor as merchant emission. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site and explicitly owned handoffs, every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_occ | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals. Actual merchant ownership/resale, industrial business buyer/final gate/source/reversal required, N>0 before division. Opening/closing carry not a new N; open/rejected/reversed resources stay in real periods/cohorts. | Actual ownership/buyer/acceptance/reversal/time/bale records | Unique completed service denominator N |  |
| wet_bale_components | cp_occ | Use actual bale_gross_mass/net_received_OCC_mass/external_pack_tare with declared wire/staple/nonpaper/water scope. EACH compatible mass*actual_count once/TOTAL unchanged, actual native units/conversions. Do not subtract wires twice or assume gross minus binding equals dry paper. Commercial useful OCC exits remain nonexchange stock/source records, not extra service-product exchanges. | Actual bale count/native gross-net/member/pack measurements | Qualified as-received OCC and component ledger |  |
| water_nonwater | cp_occ | dry_nonwater_mass=wet_sample_mass*(1-w_wet), only actual water/as-received wet mass fraction on identified same sample/component. Compatible same-definition dry water/nonwater ratio converts w_wet=w_dry/(1+w_dry), after actual percent_to_ratio_factor. Ambiguous humidity or LOD with other volatiles not water fraction. Dry nonwater still includes nonpaper/wires where sampled; dry_paper_mass needs independent component evidence, no assumed fibre yield or merchant opening/sorting. | Actual sample/component water definitions/native quantities/method/state/source/time | Water and dry-nonwater audit, distinct from actual dry paper/yield |  |
| original_source_demand | cp_occ | Actual direct trace OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers using positive complete compatible final-terminal native records incl final closing/useful-other/returns/proven loss. commodity_source_gate_demand=assigned_source_gate_quantity at original sorted-baled/pack state including evidenced state-change share; not dispatch+discard. One cohort horizon, internal closing-opening pair carries carry_original_source_quantity/state/source/owner unchanged, not new source demand, N or two terminal drivers. Quantify baseline_quantity/additional_stage_quantity/loss_adjustment_quantity with original basis, coverage/owner once outside.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Actual original source/all-terminal/carry/native baseline/additional/loss records | Exclusive original sorted-baled commodity demand/loss |  |
| secondary_integration | cp_occ | Actual origin/recovery handoff and reviewed cutoff_or_inheritance_decision govern prior_burden_dataset_link/coverage and burden_transfer_quantity, neither automatic full virgin-box nor zero/credit. ACTUAL missing collection/sort/bale/pack stages/additional demand MUST be integrated outside service exactly once before complete-chain use; completed status/dataset-link/timezone/source/owner/integrated native quantity and stage/loss/once evidence required, pending plan insufficient. Prior/current/buyer duplicate exclusion retained. | Actual prior-system decision/handoff and completed integration records | Completed linked secondary-source treatment without duplicate burden |  |
| utility_share | cp_utilities | documented_share=numerator_driver/denominator_driver on positive compatible native all-consumer causal basis. utility_per_service=sum(actual_utility_quantity*documented_share)/N after real interval/conversion/provider exclusions; no baler/pulping/recycling factor. | Actual meter/native share/conversion/coverage | Actual warehouse kWh and conditional site water m3 per service |  |
| NET_supply_stock | cp_supplies | S=opening+net_receipts-closing with retained recovery, receipts actual NET material excluding containers. Gross S/N INPUT plus separate paired usable unused OUTPUT OR consumed (S-usable_outward_return)/N INPUT and OMIT matching return exchange. EACH count once/TOTAL unchanged, sourced per-piece/density conversion, documented_share=numerator_driver/denominator_driver; no inherited wire/paper credit. | Actual NET supply stock/native conversions/paired return/share drivers | Exclusive actual supplied/consumed material convention |  |
| provider_share | cp_provider | provider_per_service=sum(actual_native_package_quantity*documented_share)/N with actual physical_equivalence/coverage. documented_share=numerator_driver/denominator_driver, own native units/basis/method/state/source/time and positive compatible denominator, not price or assumed pulp yield. | Actual package/equivalence/coverage/native shares | Actual disjoint physical contracted service |  |
| asset_lifetime_share | cp_assets | lifetime_all_user_driver=observed_all_user_driver+remaining_driver after native compatibility/equivalence and sourced remainder. Apply job_driver/lifetime_all_user_driver to full manufacture/maintenance/replacement/retirement/EOL, all users/periods/uncertainty/sensitivity/update/provider-carrier exclusions; sum then /N once. | Actual complete-life events/native job-observed-remainder-equivalence | All-user full-life asset equivalents |  |
| unique_freight_sum | cp_freight | Actual whole cargo includes received water/wire/staples/nonpaper/pack/carried supports once. EACH compatible mass*actual_count once/TOTAL unchanged, only noncargo tare. Native mass/distance to actual_transport_work and documented_service_share=numerator_driver/denominator_driver. freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N, each share inside SUM then N once, actual empty/provider/receiver scope disjoint. | Actual unique loadleg/net-gross/cargo/count/distance/conversion/share records | Actual freight t*km per service |  |
| actual_outlets_release | cp_outlets; cp_environment | outlet_per_service=actual_compatible_native_transfer_quantity/N after sourced EACH/TOTAL/net-tare/density conversion. Whole bale and separate material/pack/capture/liquid/retained components exclusive; actual receiver status/treatment once, closing stock not export, consumed-only supplies OMIT paired return. release_mass=measured_species_mass OR compatible activity*applicable_species_factor with only necessary composition/release_fraction; complete species factor already covering proportions must not multiply them again. Actual medium/native source/sample/capture exclusions then /N once; no automatic dust/decay/sequestration/virgin-paper credit. | Actual native transfers/contents/status/receiver or independent species-medium-factor chain | Exclusive actual receiver and species quantities |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_grade_origin | cp_occ | Actual postconsumer origin/recovery handoff, already sorted-baled grade/binding/nonpaper/water/native net records, not old-container title or universal testliner recipe. | Actual supplier/origin/sample/receiver records |
| secondary_decision | cp_occ | Reviewed inheritance/cutoff/allocation and prior/current/buyer duplicate check plus complete ACTUAL preparation source gate. Pending burden decision or uncompleted missing-stage integration blocks complete-chain use. | Actual method/source/owner/time/dataset/coverage/completed integration |
| qualified_buyer_example | kruger-occ-2019 | Two-page 2019 buyer specification cites 2016 industry circular, qualitative questions only, no universal law/grade thresholds/payload/no-pallet policy. Humidity basis unspecified, not actual water mass fraction. | Actual dated PDF and actual foreground contract/sample evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| site_water | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `site_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| service_consumables | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `service_consumables` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_protection | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_package | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_package` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| service_assets | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `service_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_supply_return | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_supply_return` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| usable_service_material_export | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_service_material_export` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| whole_bale_waste | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `whole_bale_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `whole_bale_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| separate_material_waste | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separate_material_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| pack_waste | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `pack_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| mixed_capture_waste | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `mixed_capture_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| free_contained_fluid | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `free_contained_fluid` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species_release | sorted_baled_occ_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species_release` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Actual attributable warehouse/handling only; no current collection/sort/bale/rebale/open/pulp/recycle/dry or humidity-control process inferred from secondary goods.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual ambient warehouse and electric merchant-handling electricity
- Flow property / unit: Energy / kWh
- Amount rule: sum(actual_utility_quantity*documented_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual metered kWh interval/all-user causal drivers and idle/open coverage/provider support; no paper-mill or baler energy per bale.

#### site_water

Conditional actual site hygiene, not paper washing/pulping or moisture added to OCC; water retained in traded bales is merchandise.

Residual inventory requirement after the independently identified cases `site_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse site-hygiene water supply
- Flow property / unit: Volume / m3
- Amount rule: actual_utility_quantity converted to m3*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual meter/supplier volume, event/period/native conversion/share and receiver, no water quantity from ambiguous humidity label.

#### service_consumables

Real agent/wipe/absorbent/filter only if used, NET excluding supply-container tare. Original paper/wires/staples/nonpaper/pack remain commodity, not merchant sorting or rebaling supplies.

Residual inventory requirement after the independently identified cases `service_consumables_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual NET hygiene and incident-capture service materials
- Flow property / unit: Mass / kg
- Amount rule: selected actual gross or consumed NET service material mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material identity/composition/NET stock receipts, EACH/TOTAL count-mass or density and matched unused return; no default dust-capture ratio.

#### added_protection

Only real extra outer protection without opening/rebaling/repack assumption; original bale wire/pack stays commodity, reusable support complete-life asset.

- Identity requirement: Actual extra external transit protection supplied by merchant
- Flow property / unit: Mass / kg
- Amount rule: selected actual gross or consumed NET extra-protection mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material/native amount/stock-return ownership and cargo inclusion; buyer example prohibitions not a universal zero or prescribed wrapping.

#### provider_package

Actual physical warehouse/handling equivalent and covered resources only; sorting/rebaling/pulping/recycling by provider would be real extra route requiring review.

- Identity requirement: Actual disjoint contracted warehouse handling package
- Flow property / unit: Count / Item(s)
- Amount rule: sum(actual_native_package_quantity*documented_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need provider operation/native equivalent/period/driver shares and utility/asset/freight/treatment exclusions; neither OCC sale price nor assumed fibre yield defines package.

#### service_assets

Actual building/racks/handlers/supports separate from inherited bale wire/pack; full manufacture/maintenance/replacement/retirement/EOL across all users and periods.

- Identity requirement: Actual complete-life warehouse handling and reusable supports
- Flow property / unit: Count / Item(s)
- Amount rule: sum_full_asset_equivalents(job_driver/lifetime_all_user_driver)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need actual asset scope/job/observed all-user plus sourced remaining native compatible drivers/equivalence/uncertainty; no new pallet per bale or universal lifetime.

#### freight

Actual as-received whole cargo includes retained water/wires/staples/nonpaper/packing/support under measured membership; not dry fibre mass.

- Identity requirement: Actual unique load-leg freight for original sorted OCC bales
- Flow property / unit: Mass * Length / t*km
- Amount rule: sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need actual packed bale mass/count EACH/TOTAL/wire-pack membership, true noncargo tare/distance/conversion and each-record share/empty coverage; no example18ton payload rule.

#### unused_supply_return

Gross-input convention only for actual matching NET stock outward export. Consumed-only omits paired return exchange; commercial OCC returns/inherited wires are nonexchange commodity records.

- Identity requirement: Actual paired usable unused standalone service-supply outward return
- Flow property / unit: Mass / kg
- Amount rule: actual matched NET unused outward mass/N under gross convention only
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual same-stock material/NET quantity/usability/receiver, not closing stock or inherited paper-wire credit against unrelated supply.

#### usable_service_material_export

Conditional real independent useful service/pack material with grade/state/receiver proof and no automatic virgin-paper substitution credit. Commercial useful OCC exits stay in nonexchange source/stock ledger, not duplicate service product.

- Identity requirement: Actual accepted useful service or packaging material export
- Flow property / unit: Mass / kg
- Amount rule: actual exclusive useful service-material export mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual material/native quantity/retained paper-nonpaper-water content/receiver and explicit separation from traded OCC/closing/waste membership.

#### whole_bale_waste

Only actual discard/receiver classification, whole bale includes measured retained paper/wire/staples/nonpaper/water/packing members. Wetness or buyer rejection does not automatically discard; commodity prior burdens/loss remain linked outside once, actual physical treatment once here.

- Identity requirement: Actual discarded whole received OCC bale with retained constituents
- Flow property / unit: Mass / kg
- Amount rule: actual whole-bale receiver NET stream mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual decision/bale-origin/parent membership, receiver status/transfer net-tare/composition/sample source and treatment, not automatic recycling of rejected bales.

#### separate_material_waste

Only independently collected/transferred actual discarded material with parent bale and exclusive whole/capture membership; no merchant opening/sorting assumed. Expand distinct paper/metal/plastic etc by real receiver evidence, no single generic recycling flow.

- Identity requirement: Actual independently transferred loose incident paper or nonpaper waste
- Flow property / unit: Mass / kg
- Amount rule: actual exclusive separate-material receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual material identity/moisture/nonpaper/native mass/parent event/receiver classification; loose fibre retained/captured not automatic airborne dust or pulp yield.

#### pack_waste

Actual independent wire/pack stream only if externally transferred, with retained paper/water/contaminants within measured stream; excluded from whole bale and loose material/capture. No automatic de-wiring or rebaling.

Residual inventory requirement after the independently identified cases `pack_waste_paper_pack`; `pack_waste_metal_pack`; `pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separately transferred packing or binding waste with residues
- Flow property / unit: Mass / kg
- Amount rule: actual separate binding-pack receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need original wire versus staple/internal nonpaper membership, actual native net-tare/residues and receiver; buyerexample no-pallet rule not universal inventory.

#### mixed_capture_waste

Conditional real substrate/captured fibres-nonpaper-fluid-water in one mixed stream; captured contents not additional whole-stream waste or direct particles.

- Identity requirement: Actual spent wipes absorbents or filters with captured OCC-related material
- Flow property / unit: Mass / kg
- Amount rule: actual mixed capture receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need substrate and each retained component own native unit/basis/method/state/source/sampletime, incident genealogy and receiver, no fixed dust/wipe/absorption factor.

#### free_contained_fluid

Actual collected fluid with water/agent/paper/nonpaper mixture, separate from bale/capture retained water; not inferred bale-water discharge, pulp effluent or pure-water release.

- Identity requirement: Actual independently collected contained hygiene or incident liquid
- Flow property / unit: Mass / kg
- Amount rule: actual compatible contained fluid receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need real collection/native net quantity/density-temperature if converted, mixture/retained exclusions/receiver treatment; moisture reduction alone not a fluid outlet.

#### direct_species_release

Actual independent merchant-boundary species/particle and medium only; retained/captured fibres, wet-stock gap or biogenic origin does not establish emission, decay, sequestration or zero.

- Identity requirement: Actual identified species or particle release to evidenced medium
- Flow property / unit: Mass / kg
- Amount rule: actual compatible measured or justified species mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need actual species/particle/medium, native measured release or applicable activity-factor and only required composition/fate/source/capture exclusions, not recycling or virgin-paper default.

## 9. Validation Rules

| rule_id | Rule |
| --- | --- |
| final_reference | Reference output/name/link Count equals actual owned/resold industrial B2B final gate/source/reversals N>0; origin/grade/bale/net-state/legal status and source-decision qualifiers. Open/quarantine/reject resources retained. |
| secondary_source_treatment | Require actual postconsumer origin/recovery handoff, reviewed prior-system inheritance/cutoff/allocation decision/source/owner/time/coverage, complete actual collection-sort-bale-pack gate and duplicate prior/current/buyer exclusion. Neither automatic full virgin-box burden nor zero/credit. |
| completed_integration | Original direct OR positive complete compatible final-terminal native drivers incl closing/usefulothers/returns/provenloss with baseline/additional/loss coverage owner outside once. ACTUAL missing stages/additional demand MUST already integrate outside once with completed status/link-timezone-source-owner/integrated native quantity/coverage/once evidence; pending plan insufficient.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| carry_and_water | Same-stock closing-to-opening carries original quantity/state/source/owner, not new source demand/N/two terminal exits; one horizon and final closing once. Actual water-only wet/dry definitions/sample/percent factor; ambiguous humidity or LOD not water. Dry nonwater not fibre/yield, whole component memberships exclusive. |
| resources_and_actual_fate | No hidden merchant collection/sort/open/bale-rebale/pulp/recycle/use/climate route. NET material receipts exclude tare, own native numerator/denominator, gross INPUT+matched OUTPUT OR consumed OMIT, complete all-user asset observed+sourced remainder, each unique freight share inside SUM/N once. Actual receiver legal status/classification/medium/native species evidence, no automatic recycling/credit/stockgap-to-emission/zero. |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground own-account merchant-service add-on per final accepted industrial B2B consignment |
| downstream_use | Link once to compatible original sorted-baled postconsumer OCC commodity with reviewed prior burden/cutoff and completed actual source-stage/loss integration outside service, then actual recycling buyer gate |
| allowed_use | Actual already sorted original postconsumer OCC bales with origin/handoff/grade/legal status/native water/nonpaper/binding and stock records, ambient merchant operations |
| excluded_use | Full recovered-fibre or virgin-box footprint alone, new paper/unsorted collection/current sort-bale-rebale-open-pulp-recycle/use, pending prior-burden or missing-stage integration treated complete |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_grade; source_batch; bale_ids; postconsumer_origin_evidence; already_sorted_baled_evidence; recovery_handoff_id; recovery_handoff_gate; cutoff_or_inheritance_decision; prior_burden_method; prior_burden_dataset_link; receiver_legal_Product_Waste_status; legal_status_evidence; original_bale_membership; wire_staple_membership; bale_count; bale_gross_mass; net_received_OCC_mass; water_sample_component_scope; water_wet_or_dry_basis; original_bale_pack_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | Actual identities/ranges/native quantities, water wet/dry component sample definitions/nonpaper-wire coverage, prior-system decision/handoff/duplicate exclusion, original terminal/carry/source integration coverage, all-user asset remainder/native shares and freight/receiver uncertainty |
| update_trigger | Actual origin/grade/bale/binding/moisture/nonpaper/legal status/prior-burden decision/carry/source stages, merchant work/provider/assets/receiver/species or native conversion evidence changes |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| kruger-occ-2019 | literature | https://recycling.kruger.com/wp-content/uploads/sites/9/2019/04/Kruger_Recyclage_Specifications_Old_Corrugated_Containers_OCC11_Mars_2019_EN_v1.pdf | Dated 2019 two-page buyer OCC example citing 2016 industry circular: qualitative bale/binding/staple/nonpaper/moisture/receiver questions only. No universal testliner recipe, numerical acceptance/humidity/payload/bale-mass/no-pallet rule or current EN643 law. Actual postconsumer batch origin and water-fraction basis require records. |
