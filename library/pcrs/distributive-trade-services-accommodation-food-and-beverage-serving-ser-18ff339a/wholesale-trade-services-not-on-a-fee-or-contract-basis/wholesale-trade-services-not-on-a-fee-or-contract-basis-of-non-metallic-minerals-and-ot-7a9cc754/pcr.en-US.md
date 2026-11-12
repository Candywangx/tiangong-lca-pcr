---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-non-metallic-minerals-and-ot-7a9cc754
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of original bagged washed and graded natural quartz sand

## 1. Scope and Applicability

This PCR covers one actual completed own-account B2B wholesale consignment of supplier-finished washed and graded NATURAL QUARTZ silica sand received in original CLOSED bags at its actual moisture/presentation state. Identify actual SKU/lot/grade, natural quartz versus other mineral phases, actual wash/grade and any supplier drying already performed, bag/pack closure and net wet sand/gross pack/tare. Ordinary ambient receipt/records, bag-condition checks, holding and electric handling are included; site ventilation/cleanup only if actually operated. Manufacturer preparation is not a merchant technology. No merchant washing, screening, drying, coating, grinding, blending, opening/rebagging, new assay, foundry regeneration or consumer use. Bulk, silica flour, cristobalite, calcined/resin-coated/blended products and changed presentation require separate review; do not combine supplier portfolio options. Sources support qualitative route questions only, not uniform purity/particle fraction/bag size/density/hold/loss or current legal/medical advice. [sibelco-silica; holcim-silica-sds-2024]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-non-metallic-minerals-and-ot-7a9cc754 |
| classification_refs | CPC 3.0:61099 narrower; actual goods15310 Natural sands within153 |
| covered_products | Actual original-closed-bag washed-graded natural-quartz sand merchant service at final business-buyer acceptance |
| excluded_products | Bulk/flour/cristobalite/calcined/coated/blended products, merchant processing/rebagging/use, fee agency/retail/standalone mineral treatment |
| representative_product | Actual SKU/lot/natural-quartz/washed-grade/any supplier dry evidence, original closed bag, sample-defined water/analysis/particle class and net/tare state |
| production_route | Supplier finished extraction/wash/grade/actual drying if performed/fill-original-pack release -> own-account receipt/ambient hold/electric handling -> final B2B acceptance after reversals |
| market_state | Completed commercial service; original sand/water/bags audited as nonexchange commodity throughflow/stock, not consumed service input |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| what | Actual completed owned/resold consignment of original closed-bag supplier-finished washed-graded natural-quartz sand to actual business buyer |
| how_much | 1 Item(s) |
| how_well | Actual merchant/ownership/resale/buyer/final gate/source/reversals, SKU/lot/grade/mineral identity, original bag closure, net/tare/water sample and analytical/particle basis; no default purity/mesh/bag mass |
| how_long_or_cycle | Actual supplier-release/receipt/hold/dispatch/final-acceptance/reversal times/timezones/source and stock/meter/full-asset periods; paired carry retains original source identity, not new N/demand |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account wholesale consignment of original bagged washed and graded natural quartz sand |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_SKU; actual_grade; source_lot; bag_ids; natural_quartz_evidence; supplier_wash_grade_evidence; supplier_dry_actual_or_not; original_closed_bag_evidence; original_presentation_state; net_as_received_sand_mass; bag_pack_tare; sample_component_scope; water_wet_or_dry_basis; oxide_normalized_or_absolute_basis; composition_sum_basis; particle_class_definition; density_temperature_unit; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| final_count | accepted_service | Count | Item(s) | Unique final owned/resold B2B consignments after reversals, N>0; not bag count or kg sand |
| native_mass | all Mass cards | Mass | kg | Actual same-state net/gross/tare and EACH/TOTAL conversions, component/whole membership exclusive |
| water_utility | site_water; site_water_liquid_tap | Volume | m3 | Actual supply volume or actual density/temperature-compatible mass conversion, not inherited bag moisture |
| electricity_unit | electricity; electricity_ac | Energy | kWh | Actual delivered site electricity; no fuel-specific calorific-value factor substitute or supplier dry-processing factor Verified electricity using an ILCD reference property named Net calorific value is allowed on its independently confirmed electrical-energy basis and unit group; the label does not authorize fuel heating-value factors. |
| freight_work | freight | Mass*Length | t*km | Actual whole packed cargo and native leg distance/conversions, each share inside unique SUM/N |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-finished natural-quartz sand after extraction/wash/grade and actual supplier drying only if performed, originally filled closed bags, declared actual moisture/presentation/pack state |
| starting_condition_role | Received finished packed-goods gate for merchant-service add-on, not raw quarry sand or current merchant mineral processing |
| product_classification_scope | CPC 3.0:61099 narrower wholesale service; actual natural sand15310. Silica portfolio chemistry does not establish common SKU/gate |
| recursive_input_rule | Purchased/resold sand, retained water and original bags/packing stay nonexchange merchandise stock/throughflow; do not recursively input another wholesale service or raw quartz as the finished commodity |
| upstream_dataset_requirement | Link complete ACTUAL extraction/wash/grade/actual supplier drying if performed/original bag filling/pack/release gate, not raw quarry sand alone. All traded-merchandise upstream including originally produced lost quantity remains outside this service, quantified at compatible original state with stage/loss owner and baseline coverage. Actually missing supplier-gate stages or additional original sand demand MUST be integrated outside this service exactly once before complete-chain use, with completed status/dataset-link/time/timezone/source/exclusive owner/integrated native quantity and matching stage/loss coverage/once evidence; a pending plan or recorded amount is insufficient. |
| disclosure | Declare actual supplier route/moisture/grade/phase/analytical and particle basis, original pack/gross-net, ownership/buyer/gate/time; original-source assignment/carry/all-terminal/baseline/additional/loss and completed integration, provider/assets/freight/receiver ownership and unresolved evidence |

### Boundary Rules

| rule_id | Rule |
| --- | --- |
| actual_route | Only declared receipt/ambient hold/handling and actual conditional site ventilation/hygiene/incidents/changeovers. Excluded processing remains excluded when contracted; actual extra operation needs reviewed route extension. No bag opening/new assay universal requirement. [sibelco-silica; holcim-silica-sds-2024] |
| merchandise_outside | Original sand/water/pack not service consumption; source-stage and loss demand outside once, actual service handling/receiver treatment inside once; full quarry-to-packed gate must match actual received state |
| analysis_and_fates | Wet/dry water, normalized oxide/XRF, mineral phase, particle class and bulk/true density are independent native evidence. Stock discrepancy/spill/product fines/quartz fraction not automatic loss/waste/direct species/zero. Retained whole/parts/capture/liquid/medium exchanges exclusive |
| periods_rejects | Actual receipt/hold/final acceptance/reversal and source/asset/receiver periods explicit; open/rejected/reversed quantities retain actual attribution. Final accepted N excludes unresolved rejects; real return/closing/useful exit/discard source linkage, no automatic recycling credit |
| owners | One owner for each direct/provider/carrier/receiver material, utility, asset and treatment event. Full-life warehouse/handler/ventilation/support covers all consumers, not a new pallet per bag; original bag manufacture stays with commodity |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| original_bagged_quartz_sand_wholesale | Original closed-bag natural-quartz sand own-account wholesale | required | Actual supplier-finished original closed-bag sand owned B2B resale final acceptance | foreground | accepted_service |

Actual receipt/hold/handling/site hygiene and conditional ventilation/incident/changeover events link original lot/bag/cohort/period/timezone/owner. Reject/return/closing/discard paths retain resource attribution; no current sand-processing production inferred.

### Process: Original closed-bag natural-quartz sand own-account wholesale (`original_bagged_quartz_sand_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual compatible metered electricity*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual interval kWh, meter/provider boundary, all-consumer native share and final N are needed to establish a site-specific distribution; no universal kWh/bag or quartz processing benchmark.

###### Actual liquid treated tap-water supply (`site_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual water supply*documented_share/N after sourced native conversion
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Metered net water quantity, volume or actual density/temperature-compatible mass conversion, cleaning events and shares are needed; no supplier washing water or default m3/tonne.

###### Actual independently recorded synthetic detergent supply (`service_consumables_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual NET S*documented_share/N, or consumed-only matching return convention
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual SKU/composition, NET receipts/opening/closing/recovery, unused returns, EACH/TOTAL and density/per-piece conversions are needed separately for each actual material; no uniform absorbent or filter rate.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account wholesale consignment of original bagged washed and graded natural quartz sand (`accepted_service`)

One actual commercially accepted consignment at the final industrial/business buyer gate after reversals, with real owned purchase/resale and actual supplier-finished original-closed-bag natural-quartz lot. Not one bag, kg sand, oxide assay or invoice row.

- Selected flow: Completed own-account wholesale consignment of original bagged washed and graded natural quartz sand
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sand`

Range evidence need: Real merchant/buyer/gate/source/reversal IDs, actual SKU/lot/wash-grade/any-supplier-drying/bag and net sand state, sample-water and analysis/particle-class definitions plus period records establish eligible N; no default bags/tonnes per consignment.

##### Waste flows

###### Discarded original bag containing washed graded natural quartz sand (`whole_bag_waste_atomic_case`)

Conditional on independently recorded actual Discarded original bag containing washed graded natural quartz sand. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `whole_bag_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded original bag containing washed graded natural quartz sand
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible discarded whole-bag transfer quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual discard decision, parent lot/bag, whole net/gross/tare and retained-component coverage, receiver transport/treatment needed; no standard reject percentage or automatic wet-bag discard.

###### Discarded loose washed graded natural quartz sand (`separate_sand_waste_atomic_case`)

Conditional on independently recorded actual Discarded loose washed graded natural quartz sand. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `separate_sand_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded loose washed graded natural quartz sand
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive loose discarded sand/fines quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual incident/parent lot, native wet/dry/sample component amount and receiver classification/treatment required; product particle-size fraction or stock deficit is not discarded amount or respirable release.

###### Actual separately collected paper packaging waste (`pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Actual separate pack with evidenced residues quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual pack composition/tare/residue native quantities, original-versus-added coverage and receiver required; no label mass as net sand or assumed clean recycling credit.


###### Actual separately collected metal packaging waste (`pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Actual separate pack with evidenced residues quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual pack composition/tare/residue native quantities, original-versus-added coverage and receiver required; no label mass as net sand or assumed clean recycling credit.


###### Actual separately collected plastic packaging waste (`pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Actual separate pack with evidenced residues quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual pack composition/tare/residue native quantities, original-versus-added coverage and receiver required; no label mass as net sand or assumed clean recycling credit.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule |
| --- | --- |
| completed_reference | N is unique FINAL real owned/resold B2B commercial consignment acceptance after reversals; actual merchant_id/ownership_purchase_resale_evidence/business_buyer_id/acceptance_gate/source/reversal required. N>0 before division; no bag/kg/price/invoice-line equivalence |
| source_assignment | Actual direct original-gate trace OR positive complete compatible source-cohort terminal allocation including final closing/useful-other/returns/proven loss, each native driver/link/owner. Include evidenced ordinary moisture/state-change share of original source quantity; not final net kg+discard kg. Internal closing-opening carries original quantity/state/source/owner without new demand or two terminals  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| causal_service_share | Direct native event assignment first, otherwise documented_share=numerator_driver/denominator_driver on positive compatible all-consumer causal basis, covering open/reject/idle and actual periods. No economic margin, dry quartz purity or particle yield as default driver |
| net_supply_returns | S=opening+net_receipts-closing with retained recovery separately reconciled; NET material receipts exclude container tare. Gross S/N INPUT with separate matched unused OUTPUT OR consumed (S-unused_outward_return)/N INPUT and OMIT matching return exchange. Same-scope standalone supply only, no inherited commodity credit |
| complete_life_assets | Full manufacture/maintenance/replacements/retirement/EOL each actual asset, all users/periods. Native compatible job_driver/(observed_all_user_driver+remaining_driver) with sourced remaining life/equivalence/uncertainty/sensitivity/update; lifetime whole pool not current observation alone |
| unique_freight_receivers | Each unique actual load-leg records own cargo/coverage/native share inside SUM then /N once. Actual whole/loose/pack/capture/liquid/usable return/species fates exclusive; receiver transport/treatment and provider scope once, no avoided-production credit by default |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sand | original_bagged_quartz_sand_wholesale | Actual node exchanges/events and nonexchange commodity audit | Original closed-bag natural-quartz lot, native analysis, stock and source-gate ledger | bag_count; bag_count_unit; bag_count_basis; bag_count_method; bag_count_state; bag_count_source; bag_count_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; whole_bag_gross_mass; whole_bag_gross_mass_unit; whole_bag_gross_mass_basis; whole_bag_gross_mass_method; whole_bag_gross_mass_state; whole_bag_gross_mass_source; whole_bag_gross_mass_sample_time; net_as_received_sand_mass; net_as_received_sand_mass_unit; net_as_received_sand_mass_basis; net_as_received_sand_mass_method; net_as_received_sand_mass_state; net_as_received_sand_mass_source; net_as_received_sand_mass_sample_time; bag_pack_tare; bag_pack_tare_unit; bag_pack_tare_basis; bag_pack_tare_method; bag_pack_tare_state; bag_pack_tare_source; bag_pack_tare_sample_time; retained_water; retained_water_unit; retained_water_basis; retained_water_method; retained_water_state; retained_water_source; retained_water_sample_time; wet_sample_mass; wet_sample_mass_unit; wet_sample_mass_basis; wet_sample_mass_method; wet_sample_mass_state; wet_sample_mass_source; wet_sample_mass_sample_time; water_quantity; water_quantity_unit; water_quantity_basis; water_quantity_method; water_quantity_state; water_quantity_source; water_quantity_sample_time; dry_nonwater_mass; dry_nonwater_mass_unit; dry_nonwater_mass_basis; dry_nonwater_mass_method; dry_nonwater_mass_state; dry_nonwater_mass_source; dry_nonwater_mass_sample_time; w_wet; w_wet_unit; w_wet_basis; w_wet_method; w_wet_state; w_wet_source; w_wet_sample_time; w_dry; w_dry_unit; w_dry_basis; w_dry_method; w_dry_state; w_dry_source; w_dry_sample_time; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_source; percent_to_ratio_factor_sample_time; LOI_quantity; LOI_quantity_unit; LOI_quantity_basis; LOI_quantity_method; LOI_quantity_state; LOI_quantity_source; LOI_quantity_sample_time; oxide_result; oxide_result_unit; oxide_result_basis; oxide_result_method; oxide_result_state; oxide_result_source; oxide_result_sample_time; analysis_normalization_total; analysis_normalization_total_unit; analysis_normalization_total_basis; analysis_normalization_total_method; analysis_normalization_total_state; analysis_normalization_total_source; analysis_normalization_total_sample_time; absolute_component_quantity; absolute_component_quantity_unit; absolute_component_quantity_basis; absolute_component_quantity_method; absolute_component_quantity_state; absolute_component_quantity_source; absolute_component_quantity_sample_time; quartz_phase_fraction; quartz_phase_fraction_unit; quartz_phase_fraction_basis; quartz_phase_fraction_method; quartz_phase_fraction_state; quartz_phase_fraction_source; quartz_phase_fraction_sample_time; particle_class_quantity; particle_class_quantity_unit; particle_class_quantity_basis; particle_class_quantity_method; particle_class_quantity_state; particle_class_quantity_source; particle_class_quantity_sample_time; grain_true_density; grain_true_density_unit; grain_true_density_basis; grain_true_density_method; grain_true_density_state; grain_true_density_source; grain_true_density_sample_time; bulk_packed_density; bulk_packed_density_unit; bulk_packed_density_basis; bulk_packed_density_method; bulk_packed_density_state; bulk_packed_density_source; bulk_packed_density_sample_time; bulk_volume; bulk_volume_unit; bulk_volume_basis; bulk_volume_method; bulk_volume_state; bulk_volume_source; bulk_volume_sample_time; void_fraction; void_fraction_unit; void_fraction_basis; void_fraction_method; void_fraction_state; void_fraction_source; void_fraction_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; proven_loss_quantity; proven_loss_quantity_unit; proven_loss_quantity_basis; proven_loss_quantity_method; proven_loss_quantity_state; proven_loss_quantity_source; proven_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; target_exit_driver; target_exit_driver_unit; target_exit_driver_basis; target_exit_driver_method; target_exit_driver_state; target_exit_driver_source; target_exit_driver_sample_time; sum_exit_drivers; sum_exit_drivers_unit; sum_exit_drivers_basis; sum_exit_drivers_method; sum_exit_drivers_state; sum_exit_drivers_source; sum_exit_drivers_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; integrated_additional_stage_quantity; integrated_additional_stage_quantity_unit; integrated_additional_stage_quantity_basis; integrated_additional_stage_quantity_method; integrated_additional_stage_quantity_state; integrated_additional_stage_quantity_source; integrated_additional_stage_quantity_sample_time; carry_original_source_quantity; carry_original_source_quantity_unit; carry_original_source_quantity_basis; carry_original_source_quantity_method; carry_original_source_quantity_state; carry_original_source_quantity_source; carry_original_source_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_SKU; actual_grade; source_lot; bag_ids; natural_quartz_evidence; supplier_wash_grade_evidence; supplier_dry_actual_or_not; original_closed_bag_evidence; original_presentation_state; net_tare_membership; sample_component_scope; water_definition_source; water_wet_or_dry_basis; LOI_other_volatiles_exclusion; analysis_method_identity; oxide_normalized_or_absolute_basis; composition_sum_basis; mineral_phase_method_source; particle_class_definition; no_new_merchant_sampling_processing; grain_vs_bulk_void_moisture_compatibility; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; terminal_horizon_id; cohort_horizon_start_end; carry_transfer_id; carry_original_state; carry_original_source_owner; closing_opening_pair_source; carry_not_new_source_demand; carry_not_new_service_acceptance; carry_not_two_terminal_exits; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; actual_missing_stage_ids; additional_stage_integration_status; additional_stage_integration_dataset_link; additional_stage_integration_time; additional_stage_integration_time_zone; additional_stage_integration_source; additional_stage_integration_owner; additional_stage_integration_coverage; additional_stage_integration_once_evidence; receipt_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | Trace real merchant owned purchase/resale and final business-buyer acceptance/source/reversals. Record actual natural-quartz washed-graded original supplier lot/bags and actual supplier drying only if performed, using existing supplier/lot records without prescribing merchant opening/sampling/processing. Each quantity retains its own native unit/basis/method/state/source/sampletime, gross-net-tare coverage and representative sample component. Water wet/dry/percent definitions are water-only on compatible same sample; LOI is not automatically water. Distinguish normalized oxide XRF, absolute chemical component and measured mineral phase/particle class; no conversion from oxide result to free quartz, elemental Si or release without compatible independent evidence. Grain/true density not packed bulk conversion unless actual void/moisture/bulk basis supported. Direct actual source trace OR positive complete compatible all-terminal native exit records incl final closing/useful others/returns/proven loss. Paired original closing-opening carry retains original quantity/state/source/owner, not new demand/N/two terminal exits. Actually missing supplier-gate stages or additional original sand demand MUST be integrated outside this service exactly once before complete-chain use, with completed status/dataset-link/time/timezone/source/exclusive owner/integrated native quantity and matching stage/loss coverage/once evidence; a pending plan or recorded amount is insufficient.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site, explicitly owned handoffs and every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_supplies | original_bagged_quartz_sand_wholesale | Actual node exchanges/events and nonexchange commodity audit | Actual NET hygiene/capture supplies and extra external protection | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; material_identity; net_material_receipt_excluding_container_tare; standalone_stock_scope; matched_return_ids; unused_return_convention; inherited_sand_pack_exclusion; owner; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Actual wipes/absorbents/filter media/hygiene material or added outer protection only if used; original sand/bags remain merchandise. NET receipts exclude container tare. EACH/TOTAL, sourced count-mass/density/composition and native shares retained. Gross supply input with matched unused outward output OR consumed-only input omitting the matching return exchange; no prescribed dust-control recipe or rebagging supply. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site, explicitly owned handoffs and every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_utilities | original_bagged_quartz_sand_wholesale | Actual node exchanges/events and nonexchange commodity audit | Actual ambient site, electric handling and operated ventilation/cleanup utilities | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; provider; all_consumers; interval_start; interval_end; provider_carrier_overlap; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Actual meter intervals and all-user causal native shares distinguish measured/allocated quantities. Warehouse ventilation or cleaning only if operated, not supplier sand washing/screening/drying/grinding/calcination or buyer use. Water service supply is distinct from retained moisture, traded sand and direct water release; provider/carrier overlap excluded. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site, explicitly owned handoffs and every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_provider | original_bagged_quartz_sand_wholesale | Actual node exchanges/events and nonexchange commodity audit | Actual bounded warehouse provider package | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; provider_id; contract_id; operation_scope; excluded_operations; utility_asset_freight_treatment_coverage; event_ids; owner; period_id; time_zone; time_source | Record actual physical package equivalence/operation/period/share and supply/utility/asset/freight/treatment coverage. Contracted wash/screen/dry/coat/grind/blend/rebag is still an actual extra operation requiring reviewed scope; no mineral-processing service or money-to-mass substitute for ambient wholesale. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site, explicitly owned handoffs and every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_assets | original_bagged_quartz_sand_wholesale | Actual node exchanges/events and nonexchange commodity audit | Complete-life warehouse, handler and actual reusable supports | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; full_life_asset_event; full_life_asset_event_unit; full_life_asset_event_basis; full_life_asset_event_method; full_life_asset_event_state; full_life_asset_event_source; full_life_asset_event_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; manufacture; maintenance; replacement; retirement; end_of_life; all_consumers; all_periods; remaining_life_source; observed_boundary; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; inherited_pack_exclusion; period_id; time_zone; time_source | Actual warehouse/racks/electric handler/operated ventilation/reusable supports: full manufacture, maintenance, replacements, retirement and EOL. All users/periods including open/reject/idle attribution with native compatible job, observed all-user plus sourced remaining equivalent life drivers; uncertainty/sensitivity/update and one provider/carrier owner. No new pallet per bag or inherited bag manufacture in service. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site, explicitly owned handoffs and every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_freight | original_bagged_quartz_sand_wholesale | Actual node exchanges/events and nonexchange commodity audit | Unique actual packed wet-sand load-leg freight | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; received_wet_sand_mass; received_wet_sand_mass_unit; received_wet_sand_mass_basis; received_wet_sand_mass_method; received_wet_sand_mass_state; received_wet_sand_mass_source; received_wet_sand_mass_sample_time; inherited_added_pack_mass; inherited_added_pack_mass_unit; inherited_added_pack_mass_basis; inherited_added_pack_mass_method; inherited_added_pack_mass_state; inherited_added_pack_mass_source; inherited_added_pack_mass_sample_time; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_state; actual_carried_support_mass_source; actual_carried_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; actual_sand_pack_membership; wet_moisture_pack_coverage; record_owner; empty_return_coverage; carrier_asset_fuel_coverage; N; time_zone; time_source | Cargo includes actual received sand and retained moisture plus all original/added bags/pack and actually carried supports once. EACH compatible mass times actual count once/TOTAL unchanged; subtract only noncargo carrier tare, not actual cargo bags/support. True grain density or dry quartz mass is not whole packed payload. Each unique load-leg own native documented share inside work sum then /N once, actual conversions/empty/provider/receiver coverage. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site, explicitly owned handoffs and every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_outlets | original_bagged_quartz_sand_wholesale | Actual node exchanges/events and nonexchange commodity audit | Exclusive actual whole-bag, sand, pack and containment exits | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; actual_compatible_native_transfer_quantity; actual_compatible_native_transfer_quantity_unit; actual_compatible_native_transfer_quantity_basis; actual_compatible_native_transfer_quantity_method; actual_compatible_native_transfer_quantity_state; actual_compatible_native_transfer_quantity_source; actual_compatible_native_transfer_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_sand; retained_sand_unit; retained_sand_basis; retained_sand_method; retained_sand_state; retained_sand_source; retained_sand_sample_time; retained_quartz; retained_quartz_unit; retained_quartz_basis; retained_quartz_method; retained_quartz_state; retained_quartz_source; retained_quartz_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; event_id; transfer_id; parent_bag_lot_ids; loose_material_ids; whole_bag_exclusion; separate_sand_exclusion; separate_pack_exclusion; mixed_capture_exclusion; free_fluid_exclusion; component_identity; sample_component_scope; water_definition_source; receiver_id; receiver_classification; receiver_status_evidence; treatment_owner; retained_content_fate; usable_supply_return_link; actual_export_not_closing; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Trace compromised/rejected/return/closing/discard decisions and actual receiver, not wetness/pack stain/stock residual automatically loss/waste/release/zero. Useful commercial sand returns stay nonexchange commodity ledger with source link. Whole discarded bag includes retained sand/moisture; separate actual loose sand, empty pack, mixed capture and free contained liquid exclude whole/other membership. Every retained component own native quantity/unit/basis/method/state/source/sampletime. No assumed bag opening, recycling recovery credit or treatment route; receiver/treatment/transport owned once. Consumed-only supply omits matched unused return; closing is not export. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site, explicitly owned handoffs and every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_environment | original_bagged_quartz_sand_wholesale | Actual node exchanges/events and nonexchange commodity audit | Actual released species/particle class and receiving medium | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; measured_species_mass; measured_species_mass_unit; measured_species_mass_basis; measured_species_mass_method; measured_species_mass_state; measured_species_mass_source; measured_species_mass_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; applicable_species_factor; applicable_species_factor_unit; applicable_species_factor_basis; applicable_species_factor_method; applicable_species_factor_state; applicable_species_factor_source; applicable_species_factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; particle_basis; receiving_medium; factor_scope_complete; composition_basis_source; contained_transfer_exclusion; release_owner; measurement_location; time_zone; time_source | Require actual emitted species/particle class and receiving medium, measured species quantity OR compatible activity/factor with only necessary composition/fate fractions. A complete species factor already covering fractions must not multiply them again. Product fines/respirable-size fraction, oxide XRF, SDS ingredient content, captured dust or spilled sand are not direct airborne/respirable emissions. Contained liquid receiver is not direct outfall; unknown not zero. | Actual native quantity units and sourced compatible conversions, dates/timezones retained | Every actual event and stock/meter/full-asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Real node site, explicitly owned handoffs and every relevant consumer | per reference flow | Raw record/method/calibration, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_sand | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals with actual merchant ownership/resale/business buyer/final gate/source. N>0 before division. Open/rejected/reversed resources retain actual periods; stock carry not new acceptance. | Ownership/buyer/final gate/reversal/time records | Unique actual completed service denominator N |  |
| wet_bag_components | cp_sand | Actual whole_bag_gross_mass/net_as_received_sand_mass/bag_pack_tare and original pack membership. EACH compatible mass*actual_count once/TOTAL unchanged; component sums only exclusive native views. Stock/moisture residual is not proven sand loss or pollutant. | Native bag/count/gross-net/tare and component records | Compatible received sand and whole-pack mass views |  |
| water_analysis_density | cp_sand | dry_nonwater_mass=wet_sample_mass*(1-w_wet) only actual water/as-received wet mass fraction on same identified sample/component. Same-definition dry water/nonwater ratio w_wet=w_dry/(1+w_dry), actual percent_to_ratio_factor first. LOI containing other volatiles not water. oxide_result normalized by analysis_normalization_total is not absolute_component_quantity, quartz_phase_fraction or elemental Si; require independent analytical/mineral basis and composition_sum_basis, no default chemistry conversion. bulk_volume*bulk_packed_density only with compatible actual void/moisture/state; grain_true_density not bulk density. | Same-sample water/LOI/oxide/mineral/particle/density native definitions and sources | Separate compatible dry-nonwater, analytical and bulk-mass views; no inferred release |  |
| original_source_demand | cp_sand | Actual direct trace OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers with positive complete compatible all-terminal native records incl final closing/useful others/returns/proven loss, each unit/basis/method/state/time/source/link/owner. commodity_source_gate_demand=assigned_source_gate_quantity in original finished packed state including evidenced moisture/state-change share; not dispatch+discard. Same-original closing-opening pair carries carry_original_source_quantity/state/source/owner, not new source demand/N/two terminals. Native baseline_quantity/additional_stage_quantity/loss_adjustment_quantity and exclusive original stage/loss coverage outside once.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Original gate/direct or complete terminal drivers/carry/baseline/additional/loss ledger | Assigned compatible original-source demand outside merchant service |  |
| completed_source_integration | cp_sand | Actually missing supplier-gate stages or additional original sand demand MUST be integrated outside this service exactly once before complete-chain use, with completed status/dataset-link/time/timezone/source/exclusive owner/integrated native quantity and matching stage/loss coverage/once evidence; a pending plan or recorded amount is insufficient. | Actual missing stages/integrated quantity/completed link-time-source-owner and coverage | Completed exclusive linked commodity integration before complete-chain use |  |
| utility_share | cp_utilities | documented_share=numerator_driver/denominator_driver with positive compatible all-consumer native basis. utility_per_service=sum(actual_utility_quantity*documented_share)/N after actual interval/conversion/provider exclusions; no supplier washing/drying or hypothetical ventilation load. | Actual metered utility/interval/native share/conversion | Actual utility per completed consignment |  |
| net_supply_stock | cp_supplies | S=opening+net_receipts-closing with retained_recovery reconciled, NET receipts exclude container tare. Gross S/N INPUT and separate paired unused_outward_return/N OUTPUT OR consumed (S-unused_outward_return)/N INPUT and OMIT matching return exchange. EACH count once/TOTAL unchanged, actual per_piece_mass/density/conversion and documented_share=numerator_driver/denominator_driver. | NET supply stock/actual unused returns/native material conversions and shares | Actual gross or consumed-only service supply with exclusive returns |  |
| provider_share | cp_provider | provider_per_service=sum(actual_native_package_quantity*physical_equivalence*documented_share)/N only where actual equivalence applies. documented_share=numerator_driver/denominator_driver positive native compatible basis; reconcile utilities/assets/freight/treatment once, no money conversion. | Actual package native quantity/equivalence and coverage/share | Physically scoped provider service per completed consignment |  |
| asset_lifetime_share | cp_assets | lifetime_all_user_driver=observed_all_user_driver+remaining_driver after sourced native compatibility/equivalence. Apply job_driver/lifetime_all_user_driver to full manufacture/maintenance/replacement/retirement/EOL events, all users/periods with uncertainty/sensitivity/update/provider-carrier exclusions; sum then /N once. | Full asset events/job/observed/sourced remaining equivalent life drivers | Complete-life all-user asset attribution per completed consignment |  |
| unique_freight_sum | cp_freight | Actual whole cargo retains received sand/water/all original-added pack/carried support once. EACH compatible cargo_mass_quantity*actual_count once/TOTAL unchanged, subtract only noncargo carrier tare. Sourced native mass/distance conversions to actual_transport_work; documented_service_share=numerator_driver/denominator_driver. freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N with THAT record share inside SUM then N once; actual empty/provider/receiver coverage disjoint. | Unique load-leg actual packed payload/distance/native share and conversions | Actual attributed freight work per completed consignment |  |
| actual_outlets_release | cp_outlets; cp_environment | outlet_per_service=actual_compatible_native_transfer_quantity/N with actual sourced EACH/TOTAL/net-tare/density conversion. Whole bag/loose sand/pack/mixed capture/free contained liquid and retained components exclusive, receiver/treatment once, closing not export, consumed-only OMIT unused return. release_mass=measured_species_mass OR compatible activity*applicable_species_factor with only necessary composition/release_fraction; complete factor already covering fractions not multiplied again. Actual species/particle/medium/sample-state/source and capture exclusions then /N once, not product fines/XRF/SDS/stock gap release. | Actual transfer/receiver and measured species or applicable native factor evidence | Exclusive actual receiver transfers/direct species per completed consignment |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| native_analysis | cp_sand | Actual natural quartz/washed grade/original bag and supplier-finished gate; each water/LOI/oxide/mineral/particle/density view keeps own representative sample, units/basis/method/state/source/time. Unknown not forced purity/water/emission/zero | Actual supplier lot/release/weigh/sample/method records, no uniform portfolio/SDS numeric value |
| source_chain | cp_sand | Full actual finished gate, original assigned source/loss coverage and complete terminal/carry native ledger; completed actual additional integration and exclusive source owner before complete-chain use | Direct trace or complete terminal records, baseline/additional/loss/native conversions and completed integration link-time-owner evidence |
| service_fates | all protocols | Real final owned B2B N after reversals, all-user native shares/full asset life and unique freight; conditional supply/receiver/species identities and actual quantities require actual data. Unresolved required evidence prevents final package readiness. Actual quantities with compatible native units, basis and traceable sources plus verified concrete identities/support are required before the final data package. A generic numerical Range is not independently mandatory. Any specification or externally sourced interval actually claimed or used needs traceable compatible evidence and basis; an empirical guardrail additionally needs independent comparable observations. Preserve actual acceptance criteria, required sample uncertainty and disclosed gaps without inventing values; absence of a generic range alone does not reject an otherwise evidenced package. | Actual raw records, calibrated methods, disjoint owner/receiver scope, uncertainty/sensitivity/update |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| site_water | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `site_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| service_consumables | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `service_consumables` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_protection | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_package | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_package` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| service_assets | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `service_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_supply_return | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_supply_return` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| usable_service_material_export | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_service_material_export` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| whole_bag_waste | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `whole_bag_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `whole_bag_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| separate_sand_waste | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separate_sand_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `separate_sand_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| pack_waste | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `pack_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| mixed_capture_waste | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `mixed_capture_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| free_contained_fluid | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `free_contained_fluid` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species_release | original_bagged_quartz_sand_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species_release` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Actual delivered electricity for this merchant site, lighting, handling and ventilation only when operated. Supplier extraction/wash/grade/drying and customer use are outside this service; no processing-energy factor from sand identity.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Electricity for actual sand-warehouse and electric handling operations
- Flow property / unit: Energy / kWh
- Amount rule: Actual compatible metered electricity*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual interval kWh, meter/provider boundary, all-consumer native share and final N are needed to establish a site-specific distribution; no universal kWh/bag or quartz processing benchmark.

#### site_water

Only actual utility water for site cleaning/incident response within declared operations; no prescribed wetting, sand wash, moisture adjustment or water retained in traded bags as service consumption.

Residual inventory requirement after the independently identified cases `site_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual site hygiene water supplied as service utility
- Flow property / unit: Volume / m3
- Amount rule: Actual water supply*documented_share/N after sourced native conversion
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Metered net water quantity, volume or actual density/temperature-compatible mass conversion, cleaning events and shares are needed; no supplier washing water or default m3/tonne.

#### service_consumables

Conditional native material umbrella: identify every actual cleaning/capture material and compatible net supply stock. Do not prescribe wetting chemicals, respirator replacement or new filters per bag from supplier SDS recommendations.

Residual inventory requirement after the independently identified cases `service_consumables_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual hygiene, wipe, absorbent and filter materials
- Flow property / unit: Mass / kg
- Amount rule: Actual NET S*documented_share/N, or consumed-only matching return convention
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual SKU/composition, NET receipts/opening/closing/recovery, unused returns, EACH/TOTAL and density/per-piece conversions are needed separately for each actual material; no uniform absorbent or filter rate.

#### added_protection

Only actual outer protective packaging/straps used by the merchant, retaining supplier original closed bags. Original supplier bags/fill remain commodity upstream, and deliberate rebagging requires route review.

- Identity requirement: Actually added outer protection without opening original sand bags
- Flow property / unit: Mass / kg
- Amount rule: Actual added protection NET supply*documented_share/N using matched return convention
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual added-material identity/mass/count, source event and original-vs-added membership plus unused-return stock records are needed; no automatic pallet film or replacement bag quantity.

#### provider_package

Actual contracted receipt/hold/handling or site cleanup package with physical boundaries and disjoint supplies/utilities/assets/freight/treatment. A contractor performing excluded sand processing does not turn it into ordinary holding.

- Identity requirement: Actual physically defined merchant warehouse-provider service
- Flow property / unit: Count / Item(s)
- Amount rule: sum(actual_native_package_quantity*physical_equivalence*documented_share)/N where equivalence applies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Actual provider package, unit and physical-equivalence source/coverage and all-consumer share are needed; no currency-margin equivalence or generic mineral-treatment package.

#### service_assets

Actual facility/handler/operated ventilation/support assets, with full lifecycle and all users. Traded natural sand and original disposable bag are merchandise, not current service assets.

- Identity requirement: Allocated complete-life warehouse, handler and reusable support assets
- Flow property / unit: Count / Item(s)
- Amount rule: sum(full_life_asset_event*job_driver/lifetime_all_user_driver)/N with native equivalence
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Actual complete asset manufacture/maintenance/replacement/retirement/EOL inventory, all-user observed plus sourced remaining life drivers, uncertainty and update evidence required; no new pallet per bag or assumed asset years.

#### freight

Actual cargo includes wet-state sand, every carried original/added bag/pack and support once. EACH vs TOTAL and noncargo carrier tare are explicit; only actual reviewed freight covered, receiver/provider duplicates excluded.

- Identity requirement: Actual unique load-leg freight of packed as-received sand and service transfers
- Flow property / unit: Mass*Length / t*km
- Amount rule: sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Actual packed cargo native net/gross/tare/count, leg distances/conversions and each load-leg causal share/empty-return coverage required; grain density, nominal bag label and dry quartz amount not automatic payload.

#### unused_supply_return

Only actual compatible standalone service-supply unused return paired with gross input; consumed-only supply omits this exchange. Useful original sand returns stay nonexchange commodity, closing stock not export.

- Identity requirement: Actual matched unused service-supply material returned outward
- Flow property / unit: Mass / kg
- Amount rule: Actual matched unused outward native material quantity/N under gross-input convention
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual material/return link, net native amount, receiver and same-scope supply-stock provenance required; no return inferred from remaining stock or original sand/pack burden credit.

#### usable_service_material_export

Conditional actual usable service-material export separate from unused return and waste. Real receiver and retained-component state required; no automatic recycling credit or original sand resale as second service output.

- Identity requirement: Actual usable service or added-pack material exported
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive usable service-material transfer quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Evidence of actual export, material quality/composition and native compatible mass/receiver required; not retained closing, presumed recovered silica or avoided virgin material.

#### whole_bag_waste

Only real discard/receiver evidence makes a rejected or compromised whole bag waste. Includes retained sand, water and original packaging in its measured scope; do not additionally output their component masses.

- Identity requirement: Actual discarded whole original sand bags with retained contents
- Flow property / unit: Mass / kg
- Amount rule: Actual compatible discarded whole-bag transfer quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual discard decision, parent lot/bag, whole net/gross/tare and retained-component coverage, receiver transport/treatment needed; no standard reject percentage or automatic wet-bag discard.

#### separate_sand_waste

Actual loose sand/fines exiting to a waste receiver only, excluding retained whole-bag sand and mixed capture. Does not prescribe bag opening, screening or material regeneration, and is not direct airborne dust.

- Identity requirement: Actual separately collected discarded loose sand or fines
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive loose discarded sand/fines quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual incident/parent lot, native wet/dry/sample component amount and receiver classification/treatment required; product particle-size fraction or stock deficit is not discarded amount or respirable release.

#### pack_waste

Actual pack already separated by the real event, with residual sand/water content and receiving route stated. Exclude whole-bag/capture membership, no universal bag opening or clean polymer identity.

Residual inventory requirement after the independently identified cases `pack_waste_paper_pack`; `pack_waste_metal_pack`; `pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separate discarded bags, straps or external packaging
- Flow property / unit: Mass / kg
- Amount rule: Actual separate pack with evidenced residues quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual pack composition/tare/residue native quantities, original-versus-added coverage and receiver required; no label mass as net sand or assumed clean recycling credit.

#### mixed_capture_waste

Conditional actual spent cleanup/filter stream, including retained sand/water/fluid in measured whole-stream amount. Exclude separately transferred free fluid/whole bags/loose sand and direct emitted species.

- Identity requirement: Actual spent mixed capture, wipes, absorbents and filter solids
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive spent mixed-capture transfer quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual material input/event linkage, whole and retained-component native bases/source/sampletime and receiver treatment required; no SDS dust proportion or dry mass residual as captured waste.

#### free_contained_fluid

Only real separately collected liquid containing actual sand/components transferred to receiver. Not water retained in merchandise or absorbents, utility input, or direct environmental outfall; receiver treatment owned once.

- Identity requirement: Actual free contained cleanup liquid transferred to receiver
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusive free contained liquid native quantity/N after compatible conversion
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual collection/receiver event, whole liquid mass or compatible density/temperature-volume conversion and solids/water scope required; no default wastewater per sand tonne.

#### direct_species_release

Conditional species/medium umbrella only on actual release evidence. Quartz phase/product fines/normalized oxide/odour/stock gap or captured dust is not automatic elemental Si, respirable quartz, water discharge or zero emission.

- Identity requirement: Actual directly released identified species and particle class to actual medium
- Flow property / unit: Mass / kg
- Amount rule: Actual measured species OR compatible activity*applicable_species_factor with necessary composition/fate only, then /N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Actual species/particle definition, receiving medium, native measurement or applicable factor/activity/composition/fate scope and capture exclusion required; no ingredient/SDS/XRF fraction as emission factor.

## 9. Validation Rules

| rule_id | Rule |
| --- | --- |
| final_reference | Require unique final real ownership/resale B2B acceptance/source/reversals with N>0, original supplier finished closed-bag natural-quartz state; reference name/link/unit and actual qualifiers align |
| native_analysis | Native water wet/dry same-sample percent first, no LOI=water, normalized oxide=absolute quartz/Si, true density=bulk or product fines=air release; representative methods/sources/units required |
| source_integration | Full actual original gate and assigned demand/loss with direct OR complete positive all-terminal native drivers incl final closing/useful other/returns/proven loss. Internal same-original carry not new demand/N/two terminal exits. Missing actual stages/additional demand already integrated outside once with completed link/time/source/owner/native coverage before complete-chain use  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| service_owners | NET supply gross+paired unused OUTPUT OR consumed OMIT matching output, full all-user observed+sourced remaining asset life, per-record unique freight share inside SUM/N once; provider/carrier/receiver coverage disjoint |
| fates_and_gaps | Actual whole/loose/pack/capture/liquid/components/species exclusive receiver/medium and treatment once; unknown not zero, no default loss/recycling credit.  Actual quantities with compatible native units, basis and traceable sources plus verified concrete identities/support are required before the final data package. A generic numerical Range is not independently mandatory. Any specification or externally sourced interval actually claimed or used needs traceable compatible evidence and basis; an empirical guardrail additionally needs independent comparable observations. Preserve actual acceptance criteria, required sample uncertainty and disclosed gaps without inventing values; absence of a generic range alone does not reject an otherwise evidenced package. Candidate status is not publication readiness |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground own-account merchant-service add-on per actual completed B2B consignment |
| downstream_use | Link once to complete actual extracted/washed/graded/actually dried if performed/original-filled-closed-bag commodity gate with original demand/loss and completed additional integration outside service |
| allowed_use | Actual supplier-finished original closed-bag washed-graded natural-quartz sand at its received moisture/grade/pack state, ambient owned B2B resale |
| excluded_use | Full sand material footprint alone, raw quarry predecessor as complete packed gate, bulk/flour/cristobalite/coated/calcined/blended goods, merchant processing/rebag/use, pending missing-stage integration treated complete |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_SKU; actual_grade; source_lot; bag_ids; natural_quartz_evidence; supplier_wash_grade_evidence; supplier_dry_actual_or_not; original_closed_bag_evidence; original_presentation_state; net_as_received_sand_mass; bag_pack_tare; sample_component_scope; water_wet_or_dry_basis; oxide_normalized_or_absolute_basis; composition_sum_basis; particle_class_definition; density_temperature_unit; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | Actual quantities/identities/ranges, same-sample water/LOI/oxide-mineral/particle/bulk-density basis, original-source complete terminal/carry/baseline/additional/loss integration, all-user asset remainder/native shares and actual receiver uncertainty |
| update_trigger | Actual SKU/lot/supplier route/drying/grade/mineral phase/moisture/pack, merchant operations, source boundary/assignment/coverage, asset/provider/receiver/species or conversion evidence changes |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| sibelco-silica | literature | https://www.sibelco.com/en/materials/silica | Actual silica portfolio distinctions support route/identity questions only; quartz/cristobalite, sand/flour and dry/wet/coated/calcined/crude are not one SKU. No uniform purity or physical defaults. |
| holcim-silica-sds-2024 | literature | https://www.holcim.com.au/sites/australia/files/docs/holcim-sds-glass-grade-silica-sand.pdf | Six-page supplier SDS revision1.1 dated14Oct2024: washed glass-grade sand/quartz identity and qualitative closed-container condition/actual containment/handling questions, not target lot BOM, current law, medical guidance, universal quartz/respirable fraction/density/exposure or emission factor. |
