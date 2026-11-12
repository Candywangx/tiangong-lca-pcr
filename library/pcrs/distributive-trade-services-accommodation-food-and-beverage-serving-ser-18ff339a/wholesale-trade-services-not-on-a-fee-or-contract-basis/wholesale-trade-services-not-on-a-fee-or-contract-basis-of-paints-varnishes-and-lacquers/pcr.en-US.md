---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-paints-varnishes-and-lacquers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of sealed ready-mixed waterborne acrylic-copolymer interior matt paint

## 1. Scope and Applicability

Applies to actual factory-filled original SEALED READY-MIXED waterborne acrylic-copolymer-emulsion interior MATT paint pails traded on own account to business buyers. Actual SKU/batch/color/base/formulation, native fill/wetmass/volume-density-temperature and pail/pack/headspace/seal state govern. Ordinary warehouse receipt/hold/electric handling ends at real final acceptance after reversals; no opening/tinting/application assumed.

Primary manufacturer material supports nominal product chemistry and a ready-mixed example (`dulux-pds-2025`), not universal composition/density/color/pail size or warehouse application instructions. VOLUME solids and in-can VOC content have distinct bases from mass solids and actual species emissions; neither establishes a release or zero. Original filled-pail paint/water/binder/pigment/headspace are merchandise audits, not consumed service inputs.

All complete formulated filled-pack upstream including embodied actually lost commodity stays outside service. Before complete-chain use, quantify original-gate assigned demand and exclusive actual loss plus baseline stage/loss coverage outsideonce. Actual service incident capture/receiver disposal/treatment remains here once, with whole/retained/absorbed/free/liquid/species views exclusive.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-paints-varnishes-and-lacquers |
| classification_refs | CPC 3.0:61064 (narrower); actual goods35110 within351 |
| covered_products | Own-account B2B ambient merchant service for actual factory-formulated/filled original SEALED READY-MIXED waterborne acrylic-copolymer-emulsion interior MATT paint pails. |
| excluded_products | Merchant tinting/mixing/thinning/opening/decanting/repacking/application/brush washing/curing; solvent-borne, two-component or aerosol paint; other coatings; fee agency/retail/standalone storage. |
| representative_product | Actual ready-mixed SKU/batch/color/base/formulation and original sealed pail/label/fill/headspace state, not a mandatory brand/color/pail volume or nominal composition. |
| production_route | Factory final formulated filled sealed release; merchant ownership/resale and B2B receipt/condition records, ordinary ambient hold/electric handling, actual final business acceptance after reversals. |
| market_state | Completed commercial service; paint/inherited pail/pack/headspace remains nonexchange merchandise stock, not consumed water/binder/pigment service inputs. |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actual commercial receipt/ordinary ambient holding/handling and accepted B2B handover of declared original sealed ready-mixed waterborne matt paint consignment. |
| How much | 1 completed commercial consignment; actual pail counts, fill/paint volume, wet net mass and whole-pail cargo are separate quantities. |
| How well | Actual supplier final ready-mixed formulation/fill/seal/batch/color/base records and buyer acceptance criteria; observed seal, leak, container and exposure condition. No universal application performance, VOC-emission guarantee, color/size/storage threshold or test. |
| How long or cycle | Actual supplier release/receipt/hold/dispatch/acceptance/reversal event times/time zones/time sources/duration and representative state/exposure records. Canceled/open/reversed/rejected resources retain actual cohort/period. |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account wholesale consignment of original sealed ready-mixed waterborne acrylic-copolymer interior matt paint |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer; final_acceptance_after_reversals; original_supplier_release_gate; manufacturer_SKU_batch; ready_mixed_color_base_formulation; waterborne_acrylic_copolymer_interior_matt_state; pail_seal_fill_condition; actual_pail_count; net_wet_paint_mass_volume_basis; density_temperature_source; solids_water_composition_basis; original_pail_pack_headspace_state; receipt_hold_dispatch_acceptance_times; site_period |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N is unique FINAL actual merchant-owned/resold B2B consignment acceptance after reversals. Collect merchant/ownership-purchase-resale evidence/business buyer/actual gate/source/reversal IDs; supplier receipt alone is insufficient. Normalize only with N>0 and final evidence; otherwise retain event resources without fictitious reference/division. |  |
| wet_paint_volume_mass | merchandise audit | Mass;Volume;Count | kg;actual native volume;Item(s) | Paint net wet mass is distinct from label capacity, pail/headspace envelope and whole sealed-pail mass. Wet mass=actual compatible net paint volume*actual formulation/state density using native-unit conversion and density temperature-unit/method/source/sampletime. Gross-minus-tare alone needs explicit retained headspace/other-content scope; do not default their mass to zero or equate net fill volume with capacity. |  |
| solids_water_basis | paint and component audits | Mass;Volume;actual composition | kg;native volume;explicit mass-or-volume fraction | Keep solids VOLUME fraction versus MASS fraction, sample/formulation/color/base/method/state/source and units distinct. Volume solids cannot multiply wet mass to obtain dry solids; compatible measured mass solids may do so. Water is separately evidenced; 1-solids is not automatically pure water because other volatiles/components may exist. No application/dry-film output is created. | dulux-pds-2025 |
| extent_components_cargo | all physical quantities | Mass;Volume;Count | native quantities and target units | Every operand retains native unit/basis/method/state/source/sampletime and conversion-unit/source; density adds temperature-unit/source. EACH multiplies matching actual count once, TOTAL remains total. Whole paint/pail/pack/headspace/support cargo stays intact except noncargo tare; retained component quantities/fates have their own units/bases, not inherited whole-stream unit. |  |
| species_content | direct_species | Mass;actual species | kg species;actual native composition basis | In-can VOC content/maximum or nominal pigment/binder/water/solids is not actual species release or zero. Identify species/particle and receiving medium independently; measured release or applicable activity-factor requires actual composition/fate only if not already included. Unknown leak/spill/stock difference is not emission or zero. | dulux-pds-2025 |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual manufacturer-complete formulated filled original SEALED READY-MIXED waterborne acrylic-copolymer interior matt paint pails at original supplier release, with actual formulation/batch/color/base/fill/pack/headspace state. |
| starting_condition_role | Original finished formulation-and-filled-pack commodity gate for merchant add-on, not raw binder/water/pigment or applied/cured paint. |
| product_classification_scope | CPC 3.0:61064 narrower own-account paint merchant service;35110 commodity context, not service quantity. |
| recursive_input_rule | Purchased/resold paint/pails remain nonexchange stock; link original actual formulated filled sealed gate demand outside service, not recursive wholesale service or raw-component proxy for the whole merchandise. |
| upstream_dataset_requirement | Linked commodity covers all actual raw materials/binder/pigment/additives, formulation/manufacturing, factory filling/sealing and inherited pail/pack/headspace state through original release once. Raw water/binder/pigment alone or unmatched application/cured-film dataset is incomplete; add missing real stages outside service without overlap. |
| disclosure | Declare actual complete source gate/native quantity/state/source, assigned original demand/direct mapping or complete terminal-exit cohort, conversions, additional missing stages/native quantities and exclusive actual loss owner/adjustment/baseline stage/loss coverage. Service alone not complete paint product-chain footprint. |

### Boundary Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| merchant_scope | Include actual ownership/B2B receipt/condition/stock/hold/electric handling, warehouse hygiene/incident capture and actual new outer transit protection, attributed infrastructure/freight and actual receiver handling/treatment. Inherited sealed pail and ordinary ambient observation do not establish active preservation/formulation/filling. |  |
| no_application_processing | No merchant tint/mix/thin/open-decant/application/cure/brushwashing, forced spill settling/drying, solvent/two-part/aerosol route or dedicated climate intervention. Actual extra work including contracted work needs reviewed route; manufacturer application/cleanup instructions are not merchant inputs/factors. | dulux-pds-2025 |
| actual_product_condition | Manufacturer ready-mixed formulation/storage context supports actual SKU/state/closed-pail/exposure questions only. No fixed color/pailvolume/composition/density/solids/temperature/holdtime, application coverage/coats/thinning/pressure/recoat/curing or disposal recipe is a wholesale default. Volume-solids and in-can VOC are not mass composition/emissions. | dulux-pds-2025 |
| commodity_outside_once | All complete formulated filled-pack upstream including embodied actual lost commodity remains outside add-on. Quantified original-gate assigned demand and exclusive actual loss adjustment/native basis/source/owner/baseline stage/loss coverage once required before complete-chain use; actual service spill capture/disposal/treatment stays here once. Unknown loss not zero. |  |
| retained_stream_exclusivity | Whole pail retained paint/headspace, separate packaging residual, absorbed cleanup solids, free contained paint, hygiene liquid and independent species/medium are exclusive physical views. Leaks/spills/stock differences not automatic VOC/water emissions or whole-pail waste; actual receiver/treatment and component fate decide, no automatic recycling/substitution credit. |  |


## 6. Process Inventory Structure

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sealed_paint_wholesale | Sealed ready-mixed paint wholesale | required | Actual declared original sealed ready-mixed paint own-account B2B consignment | final_service | accepted_service |


### Process: Sealed ready-mixed paint wholesale (`sealed_paint_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: native_interval_quantity*service_driver_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual interval/meter/native all-user driver and delivered-electricity provider/property support needed; no power or kWh per pail/tonne default.

###### Actual liquid treated tap-water supply (`hygiene_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: actual_utility_quantity*service_driver_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Metered native volume or documented density conversion, real hygiene interval/all-user share and source needed; no paint-water content or brush-cleaning factor substitutes.

###### Actual independently recorded synthetic detergent supply (`hygiene_materials_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: selected_supply_input/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual formulation, standalone inventory/unused outward pairing and native whole-material amount/unit/extent/composition/conversion needed; supply quantity alone is no spent waste.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account wholesale consignment of original sealed ready-mixed waterborne acrylic-copolymer interior matt paint (`accepted_service`)

Actual completed merchant-owned/resold B2B commercial consignment after final buyer acceptance and reversals, with actual original factory-sealed ready-mixed SKU/batch/color/base/formulation and filled-pail state. One pail, litre, kilogram, painted m2 or margin is not service count.

- Selected flow: Completed own-account wholesale consignment of original sealed ready-mixed waterborne acrylic-copolymer interior matt paint
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_paint`

Range evidence need: Actual merchant ownership/resale, business buyer/gate/source/reversal evidence, original filled-paint gate and actual count/net wet mass-volume-density/pack/headspace/time qualifiers needed; no fixed pail size/color/count.

##### Waste flows

###### Discarded original pail containing ready-mixed waterborne matt paint (`whole_pail_waste_atomic_case`)

Conditional on independently recorded actual Discarded original pail containing ready-mixed waterborne matt paint. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `whole_pail_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded original pail containing ready-mixed waterborne matt paint
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual source pail/batch/seal/fill state, whole net quantity/extent/retained-content boundary and receiver classification/treatment required; no full-pail waste or recycling rate inferred.

###### Actual separately collected paper packaging waste (`packaging_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual material/contamination/retained wet paint native amount/unit/state/source, parent pail/pack and receiver classification needed; no theoretical empty-pail tare as actual waste quantity.


###### Actual separately collected metal packaging waste (`packaging_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual material/contamination/retained wet paint native amount/unit/state/source, parent pail/pack and receiver classification needed; no theoretical empty-pail tare as actual waste quantity.


###### Actual separately collected plastic packaging waste (`packaging_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual material/contamination/retained wet paint native amount/unit/state/source, parent pail/pack and receiver classification needed; no theoretical empty-pail tare as actual waste quantity.

###### Discarded free ready-mixed waterborne matt paint (`free_paint_waste_atomic_case`)

Conditional on independently recorded actual Discarded free ready-mixed waterborne matt paint. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `free_paint_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded free ready-mixed waterborne matt paint
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual free collected quantity/unit/basis/state/density-temperature if converted, parent batch and receiver classification/treatment required; no original-pail deficit equals free paint or VOC emission.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| stock_events_and_count | Index actual SKU/batch/color/base/pail/consignment and physical event IDs by period: opening/receipts/closing, real useful returns/other terminal exits/retained rejects/actual spills-leaks-loss and receiver route. Verify ownership purchase/resale, B2B buyer and final gate/source/reversals. N only final unique actual acceptance after reversals; N>0 needed to divide. Canceled/open/rejected/reversed resources keep cohort/period attribution, no invented reference or zero resources. Internal/recovered closing stock not export. |  |
| original_source_assignment | Use evidenced direct source-to-target mapping OR complete compatible source cohort: assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers. Complete actual positive denominator includes every terminal driver quantity/unit/basis/method/state/source/link/owner: closing, useful other exits, returns and actual spilled/leaked/lost merchandise. Compatible original filled-paint/pail equivalence and conversion explicit; no accepted-only denominator or residual=loss. |  |
| original_commodity_demand | commodity_source_gate_demand=assigned_source_gate_quantity at actual complete original formulation+filled sealed pack state, including evidenced state-change share. Original input/assigned/baseline/additional stage quantities each need native unit/state/basis/method/source and actual conversion. Exclusive real loss adjustment/native unit/basis/source/owner and baseline stage/loss coverage reconcile once outside service. Final dispatch+discard not original demand; no incomplete rawcomponent baseline.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |  |
| supplies_and_returns | S=opening+net_receipts-closing includes retained usable recovery. Gross S/N input plus separate real matched unused outward return OR consumed-only (S-usable_outward_return)/N input and OMIT same paired output. Same standalone independently burdened supply scope/identity only; never net inherited paint/pail/headspace or asset against unrelated current input and never second credit. |  |
| all_consumer_attribution | Actual direct meters or causal same-unit native service/all-user physical drivers across all users/periods incl relevant idle/hygiene/open attempts. Each actual share numerator/denominator/basis/method/source and uncertainty retained. Pail-count/mass/equal-consignment split needs causal evidence; prices/margins no physical share. |  |
| full_asset_lifecycle | Matched complete manufacture/actual maintenance/replacement/retirement/EOL lifecycle uses compatible all-user job, observed history, sourced remainder and lifetime driver units/bases/methods/sources/equivalence/uncertainty/sensitivity/update. Allocate job_driver/lifetime_all_user_driver then /N once; supplier/provider/carrier/merchant asset ownership exclusive, no per-turn new pallet/full duplicate rent. |  |
| unique_load_leg_and_owner | One owner for direct/provider/carrier/asset/receiver treatment events. Freight SUM over unique load+leg records retains each record actual transport work*its documented service share INSIDE sum, then /N once. EACH cargo counted once/TOTAL unchanged; actual filled-pail/pack/support/headspace cargo retained, subtract only noncargo tare. Whole/component/cleanup/liquid/species and treatment views nonadditive; no default credit. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_paint | sealed_paint_wholesale | Merchandise and final owned-resold B2B service | Factory formulation/fill/seal and merchant/buyer event records | consignment_id; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; SKU; batch; color; base; formulation_id; formulation_source; ready_mixed_state; acrylic_copolymer_waterborne_interior_matt_state; supplier_release_gate; source_gate_state; pail_ids; pail_seal_state; fill_condition; label_capacity; capacity_unit; capacity_source; actual_pail_count; count_unit; count_basis; count_method; count_source; count_sample_time; paint_net_volume; volume_unit; volume_basis; volume_method; volume_state; volume_source; volume_sample_time; paint_net_wet_mass; mass_unit; mass_basis; mass_method; mass_state; mass_source; mass_sample_time; quantity_reporting_extent; count_multiplier; multiplier_unit; multiplier_basis; multiplier_method; multiplier_source; paint_density; density_unit; density_basis; density_state; density_temperature; density_temperature_unit; density_method; density_source; density_sample_time; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_source; conversion_sample_time; solids_fraction; solids_fraction_unit; solids_mass_or_volume_basis; solids_method; solids_state; solids_source; solids_sample_time; actual_water_content; water_content_unit; water_content_basis; water_content_method; water_content_state; water_content_source; water_content_sample_time; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_source; component_sample_time; headspace_content_identity; headspace_content_quantity; headspace_content_unit; headspace_content_basis; headspace_content_method; headspace_content_state; headspace_content_source; headspace_content_sample_time; headspace_composition; headspace_composition_unit; headspace_composition_basis; headspace_composition_method; headspace_composition_source; headspace_composition_sample_time; closed_pail_gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_source; gross_mass_sample_time; original_pail_pack_tare; tare_unit; tare_basis; tare_method; tare_state; tare_source; tare_sample_time; original_content_unknowns; condition_observation; actual_spill_leak_record; exposure_temperature; exposure_temperature_unit; exposure_temperature_method; exposure_temperature_source; exposure_time; actual_pail_orientation; source_release_time; receipt_time; dispatch_time; acceptance_time; reversal_time; time_zone; time_source; duration; duration_unit; duration_source; opening_stock; receipts; closing_stock; stock_unit; stock_basis; stock_method; stock_state; stock_source; return_ids; return_quantity; return_unit; return_basis; return_method; return_state; return_source; return_owner; useful_other_exit_ids; useful_other_exit_quantity; useful_other_exit_unit; useful_other_exit_basis; useful_other_exit_method; useful_other_exit_state; useful_other_exit_source; useful_other_exit_owner; actual_loss_quantity; actual_loss_unit; actual_loss_basis; actual_loss_method; actual_loss_state; actual_loss_source; actual_loss_fate; unfinished_resource_attribution; carried_resource_link; source_gate_input_quantity; source_gate_input_unit; source_gate_input_basis; source_gate_input_method; source_gate_input_state; source_gate_quantity_source; source_gate_allocation_mode; direct_assignment_source_ids; direct_assignment_quantity; direct_assignment_unit; direct_assignment_basis; direct_assignment_method; direct_assignment_state; direct_assignment_source; allocation_cohort_id; cohort_source_quantity; cohort_source_unit; cohort_source_basis; cohort_source_method; cohort_source_state; cohort_source_record; target_exit_driver; sum_exit_drivers; exit_driver_unit; exit_driver_basis; exit_driver_method; exit_driver_state; exit_driver_source; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; exit_original_filled_pail_equivalent; exit_equivalence_unit; exit_equivalence_basis; exit_equivalence_method; exit_equivalence_state; exit_equivalence_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_basis; assigned_source_gate_method; assigned_source_gate_state; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_source; exclusive_other_exit_coverage; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_stage_coverage; baseline_loss_coverage; additional_stage_quantity; additional_stage_unit; additional_stage_basis; additional_stage_method; additional_stage_state; additional_stage_source; additional_stage_owner; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_method; loss_adjustment_state; loss_adjustment_source; loss_owner; already_included_loss_coverage; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | Verify actual merchant ownership-purchase-resale, business buyer/gate/source/reversals; count unique final actual acceptances only. Match original ready-mixed SKU/batch/color/base/formulation, pail/fill/seal and native paint volume/wetmass/density-temp/pack/headspace evidence without opening by assumption. Record distinct volume/mass solids/water/composition bases. Reconcile real stocks/terminal exits and original direct mapping OR complete positive competing-driver cohort.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Item(s),kg,native volume/density/temperature/composition/time/driver units | Each receipt/condition/stock/dispatch/acceptance/reversal event and period close | Original source release to all terminal exits, crossperiod open/rejected/canceled resources | Actual supplier/merchant/buyer gates, sealed_paint_wholesale node | per reference flow | Supplier final filled-pack/formulation, calibrated native method/state/source/sampletime, actual ownership/B2B evidence and complete source/exits/loss coverage N>0 with final actual gate before normalization; no mere receipt proof or residual=loss. |
| cp_supplies | sealed_paint_wholesale | Actual new supplies and matched unused returns | Standalone material stock/external transfer record | supply_id; material_SKU; formulation; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; net_receipts; closing; stock_unit; stock_basis; stock_method; stock_state; stock_source; retained_recovery; unused_outward_return; return_unit; return_basis; return_method; return_state; return_source; return_receiver; same_supply_pairing; supply_convention; native_quantity; quantity_unit; quantity_basis; quantity_method; quantity_state; quantity_source; quantity_sample_time; reporting_extent; count_multiplier; multiplier_unit; multiplier_basis; multiplier_method; multiplier_source; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_temperature; density_temperature_unit; density_source; density_sample_time; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_source; service_driver; all_user_driver; driver_unit; driver_basis; driver_method; driver_source; service_driver_share; period; owner; embedded_provider_coverage; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect actual formulation/native stock/EACH-TOTAL quantity/basis/method/state/source/sampletime and same-stock usable outward receiver. Gross S input plus separate real paired output OR consumed-only deduct pair and OMIT output; current input excludes inherited paint/pail. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native supply units and compatible target conversion | Each actual stock/use/transfer/period close | Real stock interval and retained recovered closing quantity | Merchant standalone new supplies and actual external receiver | per reference flow | Receipts/calibrated stock, original supply/receiver pairing, method/state/units/density-temperature/conversion source Native conversion and causal physical share/N once; no automatic substitution credit. |
| cp_utilities | sealed_paint_wholesale | Actual warehouse utility attribution | Native meter interval and all-user driver record | utility_id; provider; geography; meter_id; native_interval_quantity; quantity_unit; quantity_basis; quantity_method; quantity_state; quantity_source; quantity_sample_time; interval_start; interval_end; time_zone; time_source; service_driver; all_user_driver; driver_unit; driver_basis; driver_method; driver_source; service_driver_share; actual_utility_quantity; density; density_unit; density_basis; density_state; density_method; density_temperature; density_temperature_unit; density_source; density_sample_time; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_source; included_provider_scope; overlap_exclusions; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual native quantity with interval/source/timezone and same-unit causal service/all-user driver, explicit conversion and /N. Distinguish actual measured/allocated and provider coverage; no paint thinning/application/brushwash water or mixing/cure energy. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh,m3 and native time/driver/conversion units | Each actual utility/driver interval | Actual collection interval incl relevant idle/hygiene/open resources | Real warehouse/electric handling utility meters and all users | per reference flow | Meter scope/source/state/sampletime and all-user causal driver native records Only actual interval utility/resource shares, inherited paintwater notutility. |
| cp_provider | sealed_paint_wholesale | Disjoint actual provider package | Physical native-equivalent and event coverage record | package_id; provider; physical_scope; actual_native_package_quantity; package_unit; quantity_basis; quantity_method; quantity_state; quantity_source; quantity_sample_time; physical_equivalence; equivalence_unit; equivalence_basis; equivalence_method; equivalence_state; equivalence_source; documented_share; share_numerator; share_denominator; share_driver_unit; share_driver_basis; share_driver_method; share_driver_source; covered_events; covered_energy; covered_materials; covered_assets; covered_transport; covered_treatment; excluded_scope; direct_resource_owner; service_period; time_zone; time_source; all_users; evidence_record; N | Collect actual physical quantity/equivalence/unit/basis/method/state/source, record-specific share numerator/denominator and resources/assets/carrier/treatment ownership. No hidden tint/mix/open/apply work. | Native physical service and matching driver units | Each real provider event/scope change | Actual service period/time source | Actual merchant-linked provider boundary | per reference flow | Provider native event equivalence and covered/excluded one-owner matrix Physical package*documented share/N once, no price or duplicate direct scope. |
| cp_assets | sealed_paint_wholesale | Complete-life shared infrastructure | Asset lifecycle/history/remainder service register | asset_id; asset_dataset_scope; manufacture_coverage; maintenance; replacement_events; retirement; end_of_life; event_quantity; event_unit; event_basis; event_method; event_state; event_source; event_time; time_zone; time_source; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; observed_all_user_driver; observed_driver_unit; observed_driver_basis; observed_driver_method; observed_driver_state; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_basis; remaining_method; remaining_state; remaining_source; lifetime_all_user_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_method; lifetime_driver_state; lifetime_driver_source; driver_equivalence; equivalence_unit; equivalence_basis; equivalence_method; equivalence_state; equivalence_source; all_consumers; all_periods; idle_and_open_use; uncertainty; sensitivity; update_trigger; supplier_merchant_provider_carrier_overlap; N | Collect full matching manufacture/actual maintenance/replacement/retirement/EOL; each job/observed/remaining/lifetime all-user driver native unit/basis/method/state/source/equivalence with uncertainty/sensitivity/update. Document supplier/provider/carrier/merchant disjointness. | Native asset equivalent and compatible physical job/life driver units | Each asset event and period update | Complete all-user observed life plus sourced remainder and EOL | Actual warehouse/equipment/reusable support consumers | per reference flow | Complete asset dataset, observed events and sourced remaining use/native equivalence/uncertainty job/lifetime ratio then /N once, not per-use new asset or rent plus duplicated whole lifecycle. |
| cp_freight | sealed_paint_wholesale | Unique actual load-leg cargo transport | Scale/payload/route/share record | load_id; leg_id; unique_load_leg_key; mode; carrier; origin; destination; route_scope; actual_count; count_unit; count_basis; count_method; count_source; cargo_mass_quantity; cargo_mass_unit; cargo_mass_basis; cargo_mass_method; cargo_mass_state; cargo_mass_source; cargo_mass_sample_time; cargo_mass_reporting_extent; cargo_mass_count_multiplier; multiplier_unit; multiplier_basis; multiplier_method; multiplier_source; actual_filled_pail_state; wet_paint_mass; wet_paint_mass_unit; wet_paint_mass_basis; wet_paint_mass_method; wet_paint_mass_state; wet_paint_mass_source; wet_paint_mass_sample_time; pail_lid_label_mass; pail_pack_mass_unit; pail_pack_mass_basis; pail_pack_mass_method; pail_pack_mass_state; pail_pack_mass_source; pail_pack_mass_sample_time; headspace_contents_mass; headspace_mass_unit; headspace_mass_basis; headspace_mass_method; headspace_mass_state; headspace_mass_source; headspace_mass_sample_time; actual_carried_outer_pack_support_mass; support_mass_unit; support_mass_basis; support_mass_method; support_mass_state; support_mass_source; support_mass_sample_time; noncargo_vehicle_container_tare; tare_unit; tare_basis; tare_method; tare_state; tare_source; tare_sample_time; payload_scope_source; whole_pack_payload; payload_unit; payload_basis; payload_method; payload_state; payload_source; payload_conversion; payload_conversion_unit; payload_conversion_source; distance; distance_unit; distance_basis; distance_method; distance_source; distance_conversion; distance_conversion_unit; distance_conversion_source; actual_transport_work; work_unit; work_basis; work_method; work_source; documented_service_share; share_numerator; share_denominator; share_driver_unit; share_driver_basis; share_driver_method; share_driver_source; record_allocation_owner; empty_return_coverage; carrier_fuel_assets; warehouse_overlap; event_time; time_zone; time_source; N | Identify unique load_id+leg_id and actual filled-pail/pack/headspace/support cargo. Use actual EACH*compatiblecount once OR TOTAL unchanged; subtract only noncargo tare. Convert real work per record, multiply THAT record share INSIDE unique sum, then /N once. Retain empty/carrierfuelasset ownership. | Native cargo mass/count/distance/work and converted t*km | Each actual unique load+leg and return | Actual included route/event intervals with time source | Actual carrier routes and warehouse overlap excluded | per reference flow | Scale boundary/each-total source/record share native driver and actual route/carrier coverage sum_unique_load_leg(actual_transport_work*documented_service_share)/N; reusable support stillcargo, wetpaint alone notwholeload. |
| cp_outlets | sealed_paint_wholesale | Actual exclusive receiver streams | Receiver acceptance/whole-stream and retained-content measurement | transfer_id; receiver; receiver_classification; treatment_boundary; treatment_owner; source_pail_batch_ids; parent_stream_id; pail_pack_headspace_membership; stream_identity; physical_state; native_quantity; quantity_unit; quantity_basis; quantity_method; quantity_state; quantity_source; quantity_sample_time; reporting_extent; count_multiplier; multiplier_unit; multiplier_basis; multiplier_method; multiplier_source; transfer_time; time_zone; time_source; whole_pail_exclusion; separate_pack_exclusion; absorbed_solids_exclusion; free_paint_exclusion; hygiene_liquid_exclusion; retained_paint_quantity; retained_paint_unit; retained_paint_basis; retained_paint_method; retained_paint_state; retained_paint_source; retained_paint_sample_time; retained_content_fate; component_identity; component_quantity; component_unit; component_mass_or_volume_basis; component_method; component_state; component_source; component_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_temperature; density_temperature_unit; density_source; density_sample_time; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_source; usable_transfer_record; waste_acceptance_record; source_stock_pairing; no_double_credit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Link pail/batch/parent stream and classify actual wholepail/separatepack/absorbedsolids/freepaint/hygieneliquid. Measure native net whole quantity/extent and independently audit retained paint/component/moisture/fluid with units/mass-volume basis/method/state/source/sampletime/fate. Actual receiver treatment once, no presumed settling/drying/recycling. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Native stream kg,m3,Item(s) and independently stated retained component units | Each real external transfer/incident | Actual transfer period/time source; retained closing stock separate | Actual merchant outlet and documented receiver/treatment boundary | per reference flow | Actual receiver acceptance/classification, measured native whole/retained-content basis and one treatment owner Net compatible quantity/N once; whole retained paint and separate transfers exclusive, not duplicated species. |
| cp_environment | sealed_paint_wholesale | Conditional actual direct species release | Species/receptor measurement or applicable activity-factor record | event_id; species_identity; particle_basis; receiving_medium; direct_measurement; measurement_unit; measurement_basis; measurement_method; measurement_state; measurement_source; sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_scope_complete; composition; composition_unit; composition_mass_or_volume_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_basis; fate_method; fate_state; fate_source; whole_stream_quantity; whole_stream_unit; whole_stream_basis; whole_stream_method; whole_stream_state; whole_stream_source; density; density_unit; density_basis; density_state; density_method; density_temperature; density_temperature_unit; density_source; density_sample_time; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_source; retained_captured_quantity; retained_captured_unit; retained_captured_basis; retained_captured_method; retained_captured_state; retained_captured_source; contained_transfer_exclusion; headspace_provenance; in_can_VOC_basis_source; stock_unknowns; provider_overlap; event_time; time_zone; time_source; N | Independently identify actual species/particle/receptor, use measured release OR actual applicable activity/factor with necessary mass/volume composition and release fate. No in-canVOCmax=emission or zero; retained headspace/capturedpaint/containedliquid excluded. Complete factor not remultiplied. | kg species and native activity/factor/composition/temperature/time units | Each real measured/supported event | Actual event/sample intervals and representativeness | Actual receiving medium beyond merchant boundary | per reference flow | Sampling/analysis/source or factor applicability/native activity/composition/fate and independent receptor proof Actual measurement/N OR supported species factor route/N only; unknown release remains unresolved. |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | accepted_service | N=count unique FINAL actual merchant-owned/resold B2B consignment acceptances after reversals, supported by merchant/ownership/buyer/gate/source/reversal records. Normalize only N>0; otherwise retain actual cohort/event resources without fictitious service/division. | cp_paint merchant/ownership-purchase-resale/buyer/final acceptance/reversal evidence | N and 1 Item(s) completed commercial service |  |
| wet_fill_mass | nonexchange merchandise | paint_wet_mass=actual_compatible_net_paint_volume*actual_paint_density after native unit conversion on matching formulation/state/temperature basis. Label capacity/headspace envelope and gross sealed-pail mass are not net paint volume or mass; gross-minus-tare needs actual other-content/headspace scope. | cp_paint actual volume/mass/density/tempunit/method/state/source/sampletime/conversions | Actual net wet paint audit without default density/headspace zero |  |
| solids_water_audit | nonexchange component audit | mass_solids=actual_wet_paint_mass*actual_compatible_MASS_solids_fraction only with measured matching mass basis. VOLUME solids fraction cannot multiply wet mass; if actual compatible volume audit used, keep volume-solids result distinct from mass. Actual water separately measured/evidenced, not automatically 1-solids; no applied/dry-film exchange. | cp_paint actual mass-vs-volume solids/water/component methods/state/source/native units | Nonadditive retained wet/component audit, no generic wet-dry conversion |  |
| original_gate_demand | commodity outside service | commodity_source_gate_demand=assigned_source_gate_quantity; actual direct mapping OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers with complete positive actual terminal drivers inclclosing/returns/usefulothers/spills/leaks/loss. Native source/assigned/baseline/additional stage quantities/state/method/source/equivalence and exclusive loss/stage coverage reconcile outside once.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | cp_paint complete original filled-pack/source/all-terminal/native allocation/loss/stage records | Quantified original finished formulated-filled-pack demand and unique upstream loss interface |  |
| supply_convention | actual new supplies | S=opening+net_receipts-closing; gross S/N plus actual same-stock usable_outward_return/N output OR consumed-only (S-usable_outward_return)/N and OMIT paired output. No inherited commodity/asset against unrelated supply or second credit. | cp_supplies native stock/extent/method/state/conversion and actual receiver pair | Exclusive supplies and outward usable unused returns |  |
| utility_allocation | actual utilities | service_driver_share=service_driver/all_user_driver on actual matching causal native basis; allocated_utility=native_interval_quantity*service_driver_share/N after supported conversion. | cp_utilities native meter interval/driver/method/state/source | Actual measured or allocated warehouse utility per service |  |
| provider_allocation | provider_packages | provider_quantity=actual_native_package_quantity*documented_share/N after physical equivalent/coverage; documented_share=share_numerator/share_denominator on compatible native driver basis/method/source. | cp_provider native equivalent/share and one-owner evidence | Disjoint actual physical provider package per service |  |
| asset_allocation | shared_assets | asset_equivalent=job_driver/lifetime_all_user_driver/N; lifetime_all_user_driver=compatible_observed_all_user_driver+compatible_sourced_remaining_driver. Full matching manufacture/maintenance/replacements/retirement/EOL and every driver native unit/basis/method/state/source/equivalence/uncertainty/update explicit. | cp_assets complete lifecycle job/observed/remaining/lifetime all-user records | All-user complete-life asset share per service |  |
| unique_freight_sum | freight | For EACH cargo_total=actual_each_compatible_cargo_mass*actual_compatible_count once; for TOTAL cargo_total=actual_total_compatible_cargo_mass unchanged. Cargo includes actual pail/paint/pack/headspace/support, subtract only noncargo tare. Per unique load+leg actual_transport_work=cargo_total_tonnes*actual_distance_km OR compatible native work; freight_quantity=sum_unique_load_leg(actual_transport_work*documented_service_share)/N. Each record share inside sum, /N once. | cp_freight unique load-leg/native cargo extent/count/distance/conversion/record share/coverage | Actual summed carrier work per service without duplicate load/leg/share/N |  |
| actual_outlets | receiver streams | outlet_quantity=actual_compatible_net_quantity/N; EACH quantity multiplies matching count once, TOTAL unchanged. Whole-pail retained paint/headspace, separatepack residual, absorbedpaintsolids, freecontainedpaint, hygieneliquid/components and independent species are exclusive. | cp_outlets native whole/retainedcomponent/mass-volume basis/state/parent/receiver/fate records | Actual receiver net transfer without duplicated paint/component/treatment |  |
| actual_release | direct_species | release_quantity=actual_measured_species_quantity/N OR compatible_activity*applicable_factor*required_composition*required_release_fraction/N. Omit extra composition/fate factors already included in complete species-release factor; retained/captured/contained stocks excluded. | cp_environment native measurement/activity/factor/mass-volume composition/fate/medium source | Actual identified species and medium, not in-can VOC content or zero |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| native_operands | Every actual quantity | Retain native unit/basis/method/state/sampletime/source and conversion units/source; density temperature-unit included. Match SKU/formulation/color/base and mass-vs-volume fractions. Missing evidence not zero. | Node-owned CP raw records and actual conversions |
| actual_received_state | Paint formulation/fill/pack | Actual ready-mixed original sealed finished filled-pack gate governs. Nominal manufacturer binder/solids/VOC/performance and application instructions are not universal recipe/density, service activity or actual species release. | Actual supplier final formulation/fill/seal records and source applicability |
| complete_commodity | Original source system | All real finished formulated-filled-pack stages and original input/assigned/baseline/additional native quantities, complete positive terminal drivers and exclusive actual loss owner/baseline stage/loss coverage outsideonce before complete-chain claim. | cp_paint linked commodity-system readback |
| final_actual_bindings | Expanded actual exchanges | Concrete actual SKU/provider/asset/receiver/species flow identity and property/unit detail support required before final package; Count support/candidate semantic card not actual verified flow. | Actual detail/support plus source native quantities and receiver records |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| hygiene_water | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| hygiene_materials | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_materials` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_outer_packing | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_outer_packing` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_packages | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_packages` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| shared_assets | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_count_returns | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_count_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| unused_mass_returns | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_mass_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| whole_pail_waste | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `whole_pail_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `whole_pail_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| packaging_waste | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packaging_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| hygiene_waste | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| free_paint_waste | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `free_paint_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `free_paint_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| contained_hygiene_liquid | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_hygiene_liquid` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species | sealed_paint_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Only actual warehouse lighting/electric handling metered or causally allocated. Factory formulation/filling, merchant tint/mixing or paint application/drying is not an assumed electricity input. Resources already inside a provider/carrier package require one owner.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse and electric paint-pail handling electricity
- Flow property / unit: Energy / kWh
- Amount rule: native_interval_quantity*service_driver_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual interval/meter/native all-user driver and delivered-electricity provider/property support needed; no power or kWh per pail/tonne default.

#### hygiene_water

Actual water supplied for warehouse surface hygiene or incident containment only. Paint-inherited water is merchandise, not utility input; no thinning, brush washing or application rinse. Record actual utility source and treatment/provider scope.

Residual inventory requirement after the independently identified cases `hygiene_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse hygiene water
- Flow property / unit: Volume / m3
- Amount rule: actual_utility_quantity*service_driver_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Metered native volume or documented density conversion, real hygiene interval/all-user share and source needed; no paint-water content or brush-cleaning factor substitutes.

#### hygiene_materials

Actual cleaning agent/wipe/absorbent/filter SKU/stock only when used. No prescribed detergent/solvent/desiccant/dose, paint binder/water/pigment purchase, consumer brushes or thinning material. Spent material later measured separately.

Residual inventory requirement after the independently identified cases `hygiene_materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse hygiene and incident capture materials
- Flow property / unit: Mass / kg
- Amount rule: selected_supply_input/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual formulation, standalone inventory/unused outward pairing and native whole-material amount/unit/extent/composition/conversion needed; supply quantity alone is no spent waste.

#### added_outer_packing

New actual outer carton/guard/film/seal only outside original closed paint pail. Factory pail/lid/label and inherited pack/headspace stay commodity. Reusable support belongs complete-life assets; no opening, decanting or repacking of paint prescribed.

- Identity requirement: Actual newly supplied external transit protection
- Flow property / unit: Count / Item(s)
- Amount rule: selected_supply_input/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual new protection unit/material/per-piece mass/each-total extent and ownership needed; no fixed pails per pallet or wrapping dose.

#### provider_packages

Actual native physical service/equivalence, causal share and covered energy/material/assets/carrier/treatment scope. Fee not physical quantity. Outsourced tint/mix/thin/open/decant/application/curing remains a route extension, not invisible merchant work.

- Identity requirement: Actual disjoint contracted warehouse package
- Flow property / unit: Count / Item(s)
- Amount rule: actual_native_package_quantity*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Actual provider physical unit/native driver numerator-denominator/source and exclusive coverage needed; no generic formulation/application or priced logistics proxy.

#### shared_assets

Actual building/racks/electric handlers/reusable pallets/cages/scales/monitors across all users/periods, full manufacture/maintenance/replacement/retirement/EOL. Original pail is not reusable merchant infrastructure by default. Keep provider/carrier/supplier support responsibility disjoint.

- Identity requirement: Full-life shared sealed-pail warehouse and handling assets
- Flow property / unit: Count / Item(s)
- Amount rule: job_driver/lifetime_all_user_driver/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Matched complete lifecycle, native job/observed/remaining/lifetime driver bases/methods/sources/equivalence and uncertainty/sensitivity/update needed; no new pallet each movement or assumed asset life.

#### freight

Cargo includes actual filled pail/lid/label, real headspace contents and shipped outer pack/support, not wet paint alone. Only noncargo vehicle/container tare subtracts. Unique actual load+leg records: EACH quantity multiplies compatible actual count once; TOTAL unchanged. Each record physical service share stays inside its sum before dividing by N once; carrier empty/fuel/assets one owner.

- Identity requirement: Actual transport of sealed filled paint pails
- Flow property / unit: Freight transport / t*km
- Amount rule: sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Actual gross cargo/native content/pack/support/noncargo tare boundaries, each-total extent/count, unique legs/distances/conversions/record-specific shares/empty coverage needed; no nominal volume or generic freight factor.

#### unused_count_returns

Usable unused actual new-supply units exported from same standalone independently burdened stock only. Closing recovery is not export. Traded sealed paint/pail returns remain merchandise events. Under consumed-only input deducting this same return, OMIT this output; no automatic substitution credit.

- Identity requirement: Actual paired unused new outer protection outward return
- Flow property / unit: Count / Item(s)
- Amount rule: actual_matched_unused_outward_units/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual original supply unit/state/source-stock and outward receiver pairing required; original paint pail or reusable pallet cannot become unused new-packing credit.

#### unused_mass_returns

Only actual usable unused hygiene material exported from same standalone source stock, with native net quantity. Gross input plus this paired output OR consumed-only minus it with output OMITTED, not two credits. Factory paint/raw components are not current hygiene supplies.

- Identity requirement: Actual paired unused warehouse material outward return
- Flow property / unit: Mass / kg
- Amount rule: actual_matched_unused_outward_mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual material SKU/state/net unit/density if used and same-stock receiver pairing required; merchant paint return does not net new hygiene input.

#### whole_pail_waste

Only actual receiver-accepted discarded pail at documented state with retained wet paint, lid/label/pack/headspace contents as included. Rejection, damaged seal, suspected freezing or stock deficit alone is not disposal. Whole-stream retained components are nonadditive audits, not additional paint/water/solids/emissions.

- Identity requirement: Actual discarded whole filled or partially filled paint-pail stream
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual source pail/batch/seal/fill state, whole net quantity/extent/retained-content boundary and receiver classification/treatment required; no full-pail waste or recycling rate inferred.

#### packaging_waste

Actually separated pail/lid/label/outer packing stream after real incident/receiver transfer; no routine emptying/decanting assumed. Retained paint belongs its measured whole stream and native component audit. Exclude packaging inside whole-pail or mixed cleanup stream; supplier labels do not make contaminated packaging empty.

Residual inventory requirement after the independently identified cases `packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual independently transferred pail or outer packaging waste
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual material/contamination/retained wet paint native amount/unit/state/source, parent pail/pack and receiver classification needed; no theoretical empty-pail tare as actual waste quantity.

#### hygiene_waste

Actual spent wipes/absorbents/filters or incident capture stream including retained paint/liquid. Purchased dry supply, spent wet whole stream and absorbed paint/water/solids are separate nonadditive views. No paint settling, deliberate drying/cure or disposal recipe is prescribed.

- Identity requirement: Actual paint-bearing warehouse containment solids
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual spent net/wet amount/extent and retained paint/liquid/moisture/solid native quantity/unit/basis/method/source/sampletime/fate plus receiver evidence needed; no material receipt or spill estimate alone.

#### free_paint_waste

Real incident-collected free paint transferred independently to receiver, distinct from paint retained inside whole pail, separated packaging, absorbed solids or hygiene liquid. No merchant opening/decanting, mixing or intentional drying assumed. Match original batch/formulation and actual dilution/contamination state from records.

- Identity requirement: Actual separately contained free wet-paint waste
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual free collected quantity/unit/basis/state/density-temperature if converted, parent batch and receiver classification/treatment required; no original-pail deficit equals free paint or VOC emission.

#### contained_hygiene_liquid

Actual collected warehouse surface-cleaning/incident liquid to a receiver, not brush washing, paint application rinse, automatic drain or pure-water release. Paint/solids/water content needs compatible actual evidence. Separate this physical stream from free paint and absorbed/retained whole streams.

- Identity requirement: Actual contained warehouse hygiene liquid
- Flow property / unit: Volume / m3
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Real collected volume or compatible mass-density-temperature conversion, composition/load/native component basis and receiver needed; utility intake or nominal paint-water fraction not effluent measurement.

#### direct_species

Only independently identified species/particle and receiving medium with actual measurement or applicable activity/factor/composition/fate. In-can VOC maximum/claim or nominal water/binder/solids is not emitted species, actual release fraction or zero; closed headspace is retained until independently evidenced release. Captured paint/contained liquid are transfers, not emissions.

- Identity requirement: Actual identified direct substance or particle release
- Flow property / unit: Mass / kg
- Amount rule: actual_measured_species_quantity/N OR actual_activity*applicable_factor*required_composition*required_release_fraction/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Actual substance/receptor/measurement or justified native activity-factor/composition/fate/conversion sources needed; complete release factor not multiplied twice by included composition/fate. No generic VOC, all-spill-to-air or empty-headspace assumption.

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| reference_gate_check | Actual output name/link/Count amount and N agree with real merchant ownership-purchase-resale/B2B buyer/final acceptance gate/source/reversal records and original sealed ready-mixed paint qualifiers; N>0 before division, open/canceled/reversed resources retained. |  |
| original_gate_check | Complete actual factory formulated filled sealed-pack state, every missing real stage and native original/assigned/baseline/additional quantity/source, direct assignment OR complete positive all-terminal drivers inclclosing/usefulothers/returns/spill/leak/loss and exclusive loss/stage coverage outsideonce. No rawbinderwaterpigment-only proxy or residual=loss.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |  |
| scope_check | No hidden merchant tint/mix/thin/open/decant/application/brushwash/cure/intentional settle-dry or solventtwo-part/aerosol route, including provider work; real extra operation needs reviewed extension. |  |
| basis_fate_check | Verify actual net wet paint versus pail/headspace/label volume, density-temperature and mass-solids versus volume-solids/water bases. Actual wholepails/separatepack/absorbedsolids/freepaint/hygieneliquid/retainedcomponents/species/receiver treatment exclusive; VOC content or unknown loss not release/zero. |  |
| resource_record_check | Native each-total cargo includes all actual carried filled-pail/pack/headspace/support subtracting only noncargo tare. Unique load-leg sum contains its OWN physical share before /N once. Complete all-user fullasset job/observed/remainder/lifetime native evidence/EOL and grossS+pairedout OR consumed-only OMITout match one-owner matrix. |  |
| binding_completeness_check | Final data exchange needs actual native quantity/conversion/source and concrete verified identity/property/unit. Candidate unresolved identities and empirical range gaps disclosed; automated pass not publication/full-chain readiness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Service add-on foreground for actual accepted merchant-owned/resold B2B original sealed ready-mixed waterborne acrylic-copolymer interior matt paint consignment. |
| downstream_use | Combine disjoint actual service with matched complete original formulated-filled sealed-pack commodity system and quantified exclusive original demand/loss outsideonce. |
| allowed_use | Actual declared ready-mixed SKU/batch/color/base/formulation/filledpail/seal/headspace state ordinary ambient wholesale with actual ownership/acceptance/resources/receivers. |
| excluded_use | Standalone whole paint product footprint; raw manufacture or tinting/formulation/application/drying/brushwashing, solvent/two-part/aerosol paint; retail/fee agency/unreviewed operation. |
| required_metadata | Actual merchant/ownership/B2B acceptance-reversal evidence, original formulation+filledpack gate/SKU/batch/color/base/seal/fill/count/netwet volume-mass-density-temp/composition basis/pack/headspace/time/site-period, original/baseline/additional/all-terminal native quantity/loss coverage and resource/asset/unique loadleg/receiver scopes. |
| required_quality_disclosure | Unresolved actual identity/support/quantity/range and native method/state/sample source, mass-volume composition distinction, retained/free/absorbed stream unknowns, actual unique load-leg shares, measured/allocated resources and full-life asset remainder uncertainty. |
| update_trigger | Actual source/formulation/color/base/fill/seal/route/provider/asset/loadleg/receiver/species change, revised native density/composition/allocation/loss/stage coverage or verified actual identity/source. |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| dulux-pds-2025 | handbook | Dulux Trade Diamond Matt PDS1026, issued08/25,3 pages. https://msp.images.akzonobel.com/prd/dh/eukddc/documents/dt_1026__diamond_matt_pdf.pdf | Qualitative nominal waterborne acrylic-copolymer composition, ready-mixed example and actual closed-pail/storage-state questions only. Volume solids is not mass fraction; in-canVOC not merchant release/zero. No universal color/size/recipe/density/performance or application/cleaning/disposal procedure. |
