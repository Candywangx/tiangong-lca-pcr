---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-wallpaper-and-floor-coverings
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ambient own-account wholesale of original full sheet-vinyl flooring rolls

## 1. Scope and Applicability

Applies to actual ambient physical own-account B2B wholesale of complete original manufacturer-finished sheet-vinyl flooring rolls. Declare actual construction/design/source batch,unique roll IDs,full original state,source dimensions/net area-layered mass,core/pack and condition. No cut-length service,tiles/wallpaper,merchant unroll-relax/acclimation,installation/glue/weld/subfloor work or product cleaning/manufacture is assumed. One node owns intake,period stock,order handling,dispatch and business acceptance;real exceptions require explicit source-linked fates.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-wallpaper-and-floor-coverings |
| classification_refs | CPC3.0:61063;narrower original full sheetvinyl rolls36910 |
| covered_products | Completed physical own-account business consignment service for unchanged factoryfinished original full sheetvinyl rolls |
| excluded_products | Cut lengths,tiles,wallpaper,other flooring;manufacture,merchant unroll/relax/acclimate/install/glue/weld/subfloor/clean,retail/agency |
| representative_product | Actual completed commercial consignment with product/roll/batch/dimensions/layers/net area-mass/core-pack/condition/sourcegate qualifiers |
| production_route | Original finished-full-roll release/intake -> ambient stock/order handling -> dispatch -> final business acceptance |
| market_state | Physical service;finished rolls/core/original pack are nonexchange commodity stock,not consumed manufacture inputs |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed original-full-sheet-vinyl-roll own-account wholesale consignment service |
| How much | 1 Item(s),one unique completed business consignment,not roll/metre/m2/kg/currency |
| How well | Actual full-original manufacturer construction/design/batch/roll/dimensions/layers/core-pack/condition agreed gate |
| How long or cycle | Actual receipt/holding/dispatch/returns/final acceptance source timestamps/timezones,cutoffs,assigned idle/cleanup and full shared life |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed original-full-sheet-vinyl-roll own-account wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_manufacturer_finished_original_full_roll_state; actual_SKU_construction_design_batch_parent_roll_ids; actual_source_width_length_thickness_units_and_methods; actual_net_area_and_layered_flooring_mass_basis; actual_layer_BOM_composition_sample_state_source; actual_core_pack_presence_tare_and_retention; actual_condition_orientation_exposure_records; actual_merchant_ownership_purchase_resale_business_buyer; actual_final_acceptance_gate_source_reversal_records; actual_receipt_holding_dispatch_period_timezone_source; actual_exclusive_stock_return_whole_part_mixed_fates; actual_resource_provider_asset_carrier_receiver_coverage |

Source-verified ownership/resale and B2B final acceptance after reversals determine N. Supplier receipt alone is not completion;N=0 does not erase period/cohort resources and must not be used for division.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| reference_service | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Reference is 1 Item(s),one completed commercial service,not a full roll count or area. |  |
| net_roll_basis | nonexchange stock | Length; Area; Mass; areal mass | actual native length; m2; kg; actual areal-mass unit | Use unique source roll width/length/area and compatible actual net composite mass/areal mass methods;separate actual core/packing tare and retained contents. Layer/backing/wear remain product. Document independent native units/bases/methods/state/sampletime/sources and conversions;no merchant unrolling or generic PVC density inferred. |  |
| native_identity | actual conditional exchanges | actual native property | actual native unit | Actual SKU/provider/asset/waste/substance and medium must determine concrete property/unit support. Generic electricity Energy support cannot use thermal-content/Count substitute;layer composition or nominal area does not establish a service/material identity. Verified electricity using an ILCD reference property named Net calorific value is allowed on its independently confirmed electrical-energy basis and unit group; the label does not authorize fuel heating-value factors. |  |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Complete original full factoryfinished sheetvinyl roll with actual SKU/design/layered construction/batch/ID/source geometry/mass/core-pack/condition |
| starting_condition_role | Nonexchange manufactured flooring/core/original packing merchandise stock/throughflow |
| product_classification_scope | Narrower36910sheetvinyl-roll physical trade within61063floorcoverings,not all272/32194/3691goods |
| recursive_input_rule | Use complete disjoint actual provider/receiver gates;no recursive purchase of same wholesale output or duplicate resource/asset/carrier scope |
| upstream_dataset_requirement | Use complete actual layered finished-roll manufacturer release gate with relevant polymer/formulation,layer/backing/finish manufacture,winding/core/original packing or assemble missing stages once outside. Raw PVC,resin-only or a single layer dataset is not the complete product baseline. Match actual original quantity/unit/state/source,direct or allocated assigned demand,actual loss/state conversions,exclusive exits,owner and already-included coverage. |
| disclosure | All qualifiers,full-original source roll/area/net layered mass/core-pack/BOM/stock/condition/fates;original source assignment/loss/complete terminal records/conversions/coverage owner/completed integration;full resources/providers/assets/carriers/receivers and identity/Range gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_only | declared actual route | This foreground is the physical ambient wholesale add-on:actual receiving,stock/order handling,dispatch,records,assigned idle/housekeeping and actual exception handling. Complete traded flooring/core/original pack manufacture,including lost commodity upstream,stays outside every service exchange. A standalone whole-chain footprint requires that compatible baseline and completed original-gate loss adjustment once outside. |  |
| original_gate | declared actual route | Use complete actual layered finished-roll manufacturer release gate with relevant polymer/formulation,layer/backing/finish manufacture,winding/core/original packing or assemble missing stages once outside. Raw PVC,resin-only or a single layer dataset is not the complete product baseline. Match actual original quantity/unit/state/source,direct or allocated assigned demand,actual loss/state conversions,exclusive exits,owner and already-included coverage. |  |
| no_installation | declared actual route | No merchant cutting to length,unroll-relax/acclimate,install/glue/weld/subfloor preparation,product cleaning or layer manufacture is assumed. Product-specific published orientation/time/temperature/installation recipes do not create merchant quantities. Actual additional intervention needs separate complete boundary review. |  |
| provider_receiver | declared actual route | Actual native providers must include complete resource/full-life asset/carrier/empty-running and receiver treatment scope with one burden owner. Actual loss handling/treatment is inside service once;receiver emissions stay with receiving-treatment responsibility,not an additional merchant direct outlet. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| original_full_roll_trade | Original full-flooring-roll stock and own-account trade | required | Actual owned/resold ambient unchanged original-full-roll service with final B2B acceptance | Order/receipt/dispatch batches and actual cleanup periods share stock/handling infrastructure;exceptions remain same bounded responsibility | `accepted_service` |

No storage recommendation alone activates a preservation or installation process. Record actual period and source links for idle/cleanup,cancellations/unfinished duties,returns/closing and receiver paths. Actual variable material/provider/species/card configurations expand from real records;absence is not assumed zero.

### Process: Original full-flooring-roll stock and own-account trade (`original_full_roll_trade`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`warehouse_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed measured electricity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Need complete actual meter/equipment/provider periods and causal all-user drivers,not a roll-area heating allowance.

###### Actual liquid treated tap-water supply (`housekeeping_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Assigned actual supply / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need real supply,retained/collected/direct destinations,units and receiver composition; damp packaging or stock deficit does not establish evaporation/wastewater.

###### Actual independently recorded synthetic detergent supply (`housekeeping_consumables_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual native supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual SKU/native quantity,formulation fraction basis,stock and sourced density/temperature/conversions. Constituents do not add a second preparation input.

###### Actual separately recorded polyethylene packaging film (`added_shipping_protection_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual new shipping material / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual native count/length/area/mass,material/stock and conversion evidence. Distinguish newly added material from inherited core/pack and reusable supports.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed original-full-sheet-vinyl-roll own-account wholesale consignment service (`accepted_service`)

One unique actual merchant-owned purchase/resale commercial consignment accepted by a business buyer for complete manufacturer-finished original full sheet-vinyl flooring rolls. Roll count,length,area and net layered-flooring mass describe merchandise and never replace this commercial completion unit.

- Selected flow: Completed original-full-sheet-vinyl-roll own-account wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rolls`

Range evidence need: Require actual manufacturer/product construction/design/batch/rollIDs/full-original state,source width-length-thickness,net area-mass/core/pack basis,condition/time and final acceptance after reversals. No fixed roll size,mass or service per roll.

##### Waste flows

###### Discarded original full vinyl-flooring roll (`discarded_whole_rolls_atomic_case`)

Conditional on independently recorded actual Discarded original full vinyl-flooring roll. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_whole_rolls`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded original full vinyl-flooring roll
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual whole receiver-load waste / N; cp_rolls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rolls`

Range evidence need: Need parent roll/source/state,count,gross/tare/retained core-pack/net flooring content,actual receiver and compatible original finished-gate loss conversion/owner/coverage.

###### Actual separately collected paper packaging waste (`separated_core_pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual separated core/pack / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual material/native count/length/mass,tare and content/whole-roll exclusions,receiver/carrier/treatment. Recyclability or returnable core does not prove recovery or credit.


###### Actual separately collected metal packaging waste (`separated_core_pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual separated core/pack / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual material/native count/length/mass,tare and content/whole-roll exclusions,receiver/carrier/treatment. Recyclability or returnable core does not prove recovery or credit.


###### Actual separately collected plastic packaging waste (`separated_core_pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual separated core/pack / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual material/native count/length/mass,tare and content/whole-roll exclusions,receiver/carrier/treatment. Recyclability or returnable core does not prove recovery or credit.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_N | declared actual route | Verify ownership-purchase/resale,B2B buyer and source acceptance/reversal records. N counts unique FINAL commercial acceptances after reversals,not supplier receipts,rolls/metres/area/mass or invoices. Canceled,failed,unfinished and reversed events retain actual resource-period/cohort responsibility;N=0 blocks division,not erases duties. |  |
| source_cohort | declared actual route | Original assigned source quantity is directly traced/measured with evidence OR original gate quantity * compatible cohort driver / positive complete all-terminal driver sum. Record each competing accepted transfer,closing/unsold/damaged retained,useful other exit,return and actual whole/part/mixed loss with native quantity/unit/basis/method/state/time/source,owner,original lot/cohort/period/conversion/exclusivity and numerator links. All refer to same compatible complete source cohort;no accepted-only denominator or intermediate movement twice. |  |
| stock_supplies | declared actual route | S=attributed opening+true external net receipts-closing including recovered retained supplies. Gross INPUT S with separate matched same-scope unused external OUTPUT OR consumed INPUT S-return with that OUTPUT omitted. No numerical S+return,double credit,new receipt from internal recovery or removal of nonreturned waste upstream burden. Inherited core/pack never reduces unrelated current supplies. |  |
| full_life | declared actual route | Resource share uses compatible actual cohort/all-user causal drivers. Asset equivalents use actual job/cohort used driver / complete all-user all-period lifetime driver,observed/history+sourced remaining use/termination. Every operand has native unit/basis/method/state/time/source and compatible conversion;full manufacture/maintenance-cleaning/replacements/EOL,uncertainty/sensitivity/update included. Complete provider replaces matching own scope. |  |
| exclusive_fates | declared actual route | Normal useful full rolls/returns are nonexchange merchandise. Actual useful separated material,whole-roll waste,separated composite/core/pack,mixed cleanup solids,independent liquid and named direct species require actual disjoint decisions/receivers. Whole waste retains whatever core/packing/liquid actually accompanies it;these contents and layer/BOM views are nonadditive audits,not repeated physical outlets or manufacture burdens. No presumed recycling/substitution credit. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rolls | original_full_roll_trade | Commercial final acceptance and source-linked full-roll stock | Actual physical source/event and compatible native operand ledger | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; consignment_id; acceptance_gate; acceptance_gate_source; final_acceptance_record_id; reversal_record_ids; reversal_source; N; manufacturer; product_SKU; construction; design; source_batch; original_roll_id; full_original_roll_evidence; no_merchant_unroll_cut_evidence; parent_roll_id; child_piece_id; record_extent_EACH_or_TOTAL; geometry_source_scope; mass_scale_id; calibration; sample_id; sample_representativeness; layer_BOM; layer_identity; layer_composition_method; layer_composition_source; layer_fraction_basis; actual_moisture_method; actual_moisture_source; core_material; core_presence; packing_material; packing_presence; packaging_exclusion_links; condition_damage; actual_orientation_record; source_label_instruction; receipt_timestamp; receipt_time_source; receipt_timezone; dispatch_timestamp; dispatch_time_source; dispatch_timezone; final_acceptance_timestamp; acceptance_time_source; acceptance_timezone; cutoff_period; stock_state; disposition; receiver; actual_treatment_scope; content_transfer_link; stream_exclusion_ids; unknown_discrepancy; original_gate_dataset_id; original_gate_reference; original_gate_stage_coverage; original_gate_loss_coverage; original_gate_quantity_source; direct_assignment_evidence; allocation_method; allocation_source; source_cohort_id; source_cohort_driver_record_ids; source_all_exit_driver_records; driver_record_id; driver_exit_state; driver_original_source_link; driver_source_cohort_id; driver_period; driver_owner; driver_exclusivity_key; driver_coverage_reconciliation; assigned_source_quantity_source; loss_burden_owner; already_included_loss_coverage; commodity_loss_link; completed_integration_result; roll_count; roll_count_unit; roll_count_basis; roll_count_method; roll_count_state; roll_count_sample_time; roll_count_source; roll_count_conversion_factor; roll_count_conversion_unit; roll_count_conversion_source; width; width_unit; width_basis; width_method; width_state; width_sample_time; width_source; width_conversion_factor; width_conversion_unit; width_conversion_source; length; length_unit; length_basis; length_method; length_state; length_sample_time; length_source; length_conversion_factor; length_conversion_unit; length_conversion_source; thickness; thickness_unit; thickness_basis; thickness_method; thickness_state; thickness_sample_time; thickness_source; thickness_conversion_factor; thickness_conversion_unit; thickness_conversion_source; area; area_unit; area_basis; area_method; area_state; area_sample_time; area_source; area_conversion_factor; area_conversion_unit; area_conversion_source; areal_mass; areal_mass_unit; areal_mass_basis; areal_mass_method; areal_mass_state; areal_mass_sample_time; areal_mass_source; areal_mass_conversion_factor; areal_mass_conversion_unit; areal_mass_conversion_source; gross_roll_mass; gross_roll_mass_unit; gross_roll_mass_basis; gross_roll_mass_method; gross_roll_mass_state; gross_roll_mass_sample_time; gross_roll_mass_source; gross_roll_mass_conversion_factor; gross_roll_mass_conversion_unit; gross_roll_mass_conversion_source; core_tare; core_tare_unit; core_tare_basis; core_tare_method; core_tare_state; core_tare_sample_time; core_tare_source; core_tare_conversion_factor; core_tare_conversion_unit; core_tare_conversion_source; other_pack_tare; other_pack_tare_unit; other_pack_tare_basis; other_pack_tare_method; other_pack_tare_state; other_pack_tare_sample_time; other_pack_tare_source; other_pack_tare_conversion_factor; other_pack_tare_conversion_unit; other_pack_tare_conversion_source; net_layered_flooring_mass; net_layered_flooring_mass_unit; net_layered_flooring_mass_basis; net_layered_flooring_mass_method; net_layered_flooring_mass_state; net_layered_flooring_mass_sample_time; net_layered_flooring_mass_source; net_layered_flooring_mass_conversion_factor; net_layered_flooring_mass_conversion_unit; net_layered_flooring_mass_conversion_source; actual_layer_fraction; actual_layer_fraction_unit; actual_layer_fraction_basis; actual_layer_fraction_method; actual_layer_fraction_state; actual_layer_fraction_sample_time; actual_layer_fraction_source; actual_layer_fraction_conversion_factor; actual_layer_fraction_conversion_unit; actual_layer_fraction_conversion_source; actual_moisture; actual_moisture_unit; actual_moisture_basis; actual_moisture_state; actual_moisture_sample_time; actual_moisture_conversion_factor; actual_moisture_conversion_unit; actual_moisture_conversion_source; holding_duration; holding_duration_unit; holding_duration_basis; holding_duration_method; holding_duration_state; holding_duration_sample_time; holding_duration_source; holding_duration_conversion_factor; holding_duration_conversion_unit; holding_duration_conversion_source; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; opening_conversion_factor; opening_conversion_unit; opening_conversion_source; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_sample_time; net_receipts_source; net_receipts_conversion_factor; net_receipts_conversion_unit; net_receipts_conversion_source; buyer_returns; buyer_returns_unit; buyer_returns_basis; buyer_returns_method; buyer_returns_state; buyer_returns_sample_time; buyer_returns_source; buyer_returns_conversion_factor; buyer_returns_conversion_unit; buyer_returns_conversion_source; closing_unsold; closing_unsold_unit; closing_unsold_basis; closing_unsold_method; closing_unsold_state; closing_unsold_sample_time; closing_unsold_source; closing_unsold_conversion_factor; closing_unsold_conversion_unit; closing_unsold_conversion_source; damaged_retained; damaged_retained_unit; damaged_retained_basis; damaged_retained_method; damaged_retained_state; damaged_retained_sample_time; damaged_retained_source; damaged_retained_conversion_factor; damaged_retained_conversion_unit; damaged_retained_conversion_source; accepted_transfer; accepted_transfer_unit; accepted_transfer_basis; accepted_transfer_method; accepted_transfer_state; accepted_transfer_sample_time; accepted_transfer_source; accepted_transfer_conversion_factor; accepted_transfer_conversion_unit; accepted_transfer_conversion_source; supplier_returns; supplier_returns_unit; supplier_returns_basis; supplier_returns_method; supplier_returns_state; supplier_returns_sample_time; supplier_returns_source; supplier_returns_conversion_factor; supplier_returns_conversion_unit; supplier_returns_conversion_source; useful_other_exits; useful_other_exits_unit; useful_other_exits_basis; useful_other_exits_method; useful_other_exits_state; useful_other_exits_sample_time; useful_other_exits_source; useful_other_exits_conversion_factor; useful_other_exits_conversion_unit; useful_other_exits_conversion_source; whole_roll_discard; whole_roll_discard_unit; whole_roll_discard_basis; whole_roll_discard_method; whole_roll_discard_state; whole_roll_discard_sample_time; whole_roll_discard_source; whole_roll_discard_conversion_factor; whole_roll_discard_conversion_unit; whole_roll_discard_conversion_source; separated_flooring_material; separated_flooring_material_unit; separated_flooring_material_basis; separated_flooring_material_method; separated_flooring_material_state; separated_flooring_material_sample_time; separated_flooring_material_source; separated_flooring_material_conversion_factor; separated_flooring_material_conversion_unit; separated_flooring_material_conversion_source; retained_flooring_in_mixed; retained_flooring_in_mixed_unit; retained_flooring_in_mixed_basis; retained_flooring_in_mixed_method; retained_flooring_in_mixed_state; retained_flooring_in_mixed_sample_time; retained_flooring_in_mixed_source; retained_flooring_in_mixed_conversion_factor; retained_flooring_in_mixed_conversion_unit; retained_flooring_in_mixed_conversion_source; retained_core_in_whole_waste; retained_core_in_whole_waste_unit; retained_core_in_whole_waste_basis; retained_core_in_whole_waste_method; retained_core_in_whole_waste_state; retained_core_in_whole_waste_sample_time; retained_core_in_whole_waste_source; retained_core_in_whole_waste_conversion_factor; retained_core_in_whole_waste_conversion_unit; retained_core_in_whole_waste_conversion_source; retained_pack_in_whole_waste; retained_pack_in_whole_waste_unit; retained_pack_in_whole_waste_basis; retained_pack_in_whole_waste_method; retained_pack_in_whole_waste_state; retained_pack_in_whole_waste_sample_time; retained_pack_in_whole_waste_source; retained_pack_in_whole_waste_conversion_factor; retained_pack_in_whole_waste_conversion_unit; retained_pack_in_whole_waste_conversion_source; original_gate_quantity; original_gate_quantity_unit; original_gate_quantity_basis; original_gate_quantity_method; original_gate_quantity_state; original_gate_quantity_sample_time; original_gate_quantity_conversion_factor; original_gate_quantity_conversion_unit; original_gate_quantity_conversion_source; assigned_source_quantity; assigned_source_quantity_unit; assigned_source_quantity_basis; assigned_source_quantity_method; assigned_source_quantity_state; assigned_source_quantity_sample_time; assigned_source_quantity_conversion_factor; assigned_source_quantity_conversion_unit; assigned_source_quantity_conversion_source; original_gate_loss_quantity; original_gate_loss_quantity_unit; original_gate_loss_quantity_basis; original_gate_loss_quantity_method; original_gate_loss_quantity_state; original_gate_loss_quantity_sample_time; original_gate_loss_quantity_source; original_gate_loss_quantity_conversion_factor; original_gate_loss_quantity_conversion_unit; original_gate_loss_quantity_conversion_source; source_cohort_driver; source_cohort_driver_unit; source_cohort_driver_basis; source_cohort_driver_method; source_cohort_driver_state; source_cohort_driver_sample_time; source_cohort_driver_source; source_cohort_driver_conversion_factor; source_cohort_driver_conversion_unit; source_cohort_driver_conversion_source; source_all_exit_driver; source_all_exit_driver_unit; source_all_exit_driver_basis; source_all_exit_driver_method; source_all_exit_driver_state; source_all_exit_driver_sample_time; source_all_exit_driver_source; source_all_exit_driver_conversion_factor; source_all_exit_driver_conversion_unit; source_all_exit_driver_conversion_source; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_sample_time; driver_quantity_source; driver_quantity_conversion_factor; driver_quantity_conversion_unit; driver_quantity_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Verify source merchant ownership purchase/resale and business buyer;N counts unique FINAL completed commercial acceptances after documented reversals,not supplier receipt. Preserve canceled/reversed/failed/unfinished resource-period attribution;do not divide if N=0. Trace actual original roll/source/batch/full state;use supplier dimensional/layer/mass records or actual non-destructive measurements with method/source/time,not assumed merchant unrolling. Reconcile layered-flooring net area/mass versus core/pack and exclusive stock/whole/part/mixed-content fates. Source assignment direct trace OR positive complete compatible all-terminal driver records includes closing/useful other exits/returns/actual loss with native quantities,bases,methods,sources,owners and source links;not accepted-only.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); rolls; actual native geometry/area/mass/content/duration units | Every actual event and matched measurement period | Complete duty/source/cohort cutoffs and all relevant asset periods | Actual node warehouse/order duties and all physical shared users | per reference flow | Native unit/basis/method/state/sample time/source,calibration,conversion,uncertainty and complete ownership |
| cp_power | original_full_roll_trade | Warehouse electricity and actual physical attribution | Actual physical source/event and compatible native operand ledger | meter_id; equipment_scope; period_start; period_end; timezone; timestamp_source; idle_housekeeping_scope; provider_overlap; uncertainty; opening_reading; opening_reading_unit; opening_reading_basis; opening_reading_method; opening_reading_state; opening_reading_sample_time; opening_reading_source; opening_reading_conversion_factor; opening_reading_conversion_unit; opening_reading_conversion_source; closing_reading; closing_reading_unit; closing_reading_basis; closing_reading_method; closing_reading_state; closing_reading_sample_time; closing_reading_source; closing_reading_conversion_factor; closing_reading_conversion_unit; closing_reading_conversion_source; actual_energy; actual_energy_unit; actual_energy_basis; actual_energy_method; actual_energy_state; actual_energy_sample_time; actual_energy_source; actual_energy_conversion_factor; actual_energy_conversion_unit; actual_energy_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter complete actual equipment/warehouse periods,including assigned idle/cleanup and unfinished orders;apply compatible causal cohort/all-user driver quantities with native units,bases,methods,sources. No area/installation-heating default. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | Every actual event and matched measurement period | Complete duty/source/cohort cutoffs and all relevant asset periods | Actual node warehouse/order duties and all physical shared users | per reference flow | Native unit/basis/method/state/sample time/source,calibration,conversion,uncertainty and complete ownership |
| cp_water | original_full_roll_trade | Actual housekeeping water and liquid fates | Actual physical source/event and compatible native operand ledger | source_id; event_id; period; timestamp_timezone; timestamp_source; composition_identity; composition_method; composition_source; receiver; treatment_scope; transport_scope; stream_exclusion_ids; retained_solid_content_link; fate_basis; fate_source; unknown_discrepancy; supplied_volume; supplied_volume_unit; supplied_volume_basis; supplied_volume_method; supplied_volume_state; supplied_volume_sample_time; supplied_volume_source; supplied_volume_conversion_factor; supplied_volume_conversion_unit; supplied_volume_conversion_source; collected_volume; collected_volume_unit; collected_volume_basis; collected_volume_method; collected_volume_state; collected_volume_sample_time; collected_volume_source; collected_volume_conversion_factor; collected_volume_conversion_unit; collected_volume_conversion_source; retained_volume; retained_volume_unit; retained_volume_basis; retained_volume_method; retained_volume_state; retained_volume_sample_time; retained_volume_source; retained_volume_conversion_factor; retained_volume_conversion_unit; retained_volume_conversion_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_conversion_factor; density_conversion_unit; density_conversion_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; temperature_conversion_factor; temperature_conversion_unit; temperature_conversion_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; composition_fraction_conversion_factor; composition_fraction_conversion_unit; composition_fraction_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual supply,use,retained/collected/direct outlets,composition,density/temperature units/sources and receiver treatment with whole/mixed-solid exclusions. Do not infer liquid or evaporation from a residual. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3; actual density/temperature/composition units | Every actual event and matched measurement period | Complete duty/source/cohort cutoffs and all relevant asset periods | Actual node warehouse/order duties and all physical shared users | per reference flow | Native unit/basis/method/state/sample time/source,calibration,conversion,uncertainty and complete ownership |
| cp_supplies | original_full_roll_trade | Actual native supply and unused external returns | Actual physical source/event and compatible native operand ledger | material_id; SKU; actual_use; formulation; fraction_method; fraction_source; source_scope_match; unused_return_record_id; external_receiver; usable_acceptance; stock_representation; actual_fate; fate_source; production_owner; inherited_core_pack_excluded; native_supply; native_supply_unit; native_supply_basis; native_supply_method; native_supply_state; native_supply_sample_time; native_supply_source; native_supply_conversion_factor; native_supply_conversion_unit; native_supply_conversion_source; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; opening_conversion_factor; opening_conversion_unit; opening_conversion_source; gross_receipts; gross_receipts_unit; gross_receipts_basis; gross_receipts_method; gross_receipts_state; gross_receipts_sample_time; gross_receipts_source; gross_receipts_conversion_factor; gross_receipts_conversion_unit; gross_receipts_conversion_source; receipt_tare; receipt_tare_unit; receipt_tare_basis; receipt_tare_method; receipt_tare_state; receipt_tare_sample_time; receipt_tare_source; receipt_tare_conversion_factor; receipt_tare_conversion_unit; receipt_tare_conversion_source; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_sample_time; net_receipts_source; net_receipts_conversion_factor; net_receipts_conversion_unit; net_receipts_conversion_source; internal_issue; internal_issue_unit; internal_issue_basis; internal_issue_method; internal_issue_state; internal_issue_sample_time; internal_issue_source; internal_issue_conversion_factor; internal_issue_conversion_unit; internal_issue_conversion_source; internal_recovery; internal_recovery_unit; internal_recovery_basis; internal_recovery_method; internal_recovery_state; internal_recovery_sample_time; internal_recovery_source; internal_recovery_conversion_factor; internal_recovery_conversion_unit; internal_recovery_conversion_source; closing_including_recovered; closing_including_recovered_unit; closing_including_recovered_basis; closing_including_recovered_method; closing_including_recovered_state; closing_including_recovered_sample_time; closing_including_recovered_source; closing_including_recovered_conversion_factor; closing_including_recovered_conversion_unit; closing_including_recovered_conversion_source; matched_unused_external_return; matched_unused_external_return_unit; matched_unused_external_return_basis; matched_unused_external_return_method; matched_unused_external_return_state; matched_unused_external_return_sample_time; matched_unused_external_return_source; matched_unused_external_return_conversion_factor; matched_unused_external_return_conversion_unit; matched_unused_external_return_conversion_source; active_fraction; active_fraction_unit; active_fraction_basis; active_fraction_method; active_fraction_state; active_fraction_sample_time; active_fraction_source; active_fraction_conversion_factor; active_fraction_conversion_unit; active_fraction_conversion_source; carrier_fraction; carrier_fraction_unit; carrier_fraction_basis; carrier_fraction_method; carrier_fraction_state; carrier_fraction_sample_time; carrier_fraction_source; carrier_fraction_conversion_factor; carrier_fraction_conversion_unit; carrier_fraction_conversion_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_conversion_factor; density_conversion_unit; density_conversion_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; temperature_conversion_factor; temperature_conversion_unit; temperature_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record native actual independent supply/stock/use with each operand method/state/time/unit/basis/source. S=opening+true external net receipts-closing including recovered retained supplies. Gross input S with separate same-scope matched unused outward OR consumed input S-return omitting that outward. Internal recovery is not new receipt;nonreturned waste/spill retains supply burden;inherited commodity core/pack never nets unrelated service supplies. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native supply/fraction/density/temperature units | Every actual event and matched measurement period | Complete duty/source/cohort cutoffs and all relevant asset periods | Actual node warehouse/order duties and all physical shared users | per reference flow | Native unit/basis/method/state/sample time/source,calibration,conversion,uncertainty and complete ownership |
| cp_provider | original_full_roll_trade | Native completed physical providers and complete gates | Actual physical source/event and compatible native operand ledger | provider_id; job_id; completed_gate; completion_timestamp; timestamp_timezone; timestamp_source; actual_operation; extra_operation_review; resource_scope; electricity_coverage; full_asset_coverage; maintenance_EOL_coverage; carrier_empty_scope; receiver_treatment_scope; upstream_dataset; overlap_owner; completed_native_jobs; completed_native_jobs_unit; completed_native_jobs_basis; completed_native_jobs_method; completed_native_jobs_state; completed_native_jobs_sample_time; completed_native_jobs_source; completed_native_jobs_conversion_factor; completed_native_jobs_conversion_unit; completed_native_jobs_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source | Confirm native physical job completion,quantity/unit and complete disjoint resources/full-life assets/carrier/receiver coverage. Actual extra cutting,conditioning or installation is separately reviewed;financial bill units are not silently Count jobs. | Item(s); actual native provider units | Every actual event and matched measurement period | Complete duty/source/cohort cutoffs and all relevant asset periods | Actual node warehouse/order duties and all physical shared users | per reference flow | Native unit/basis/method/state/sample time/source,calibration,conversion,uncertainty and complete ownership |
| cp_assets | original_full_roll_trade | All-user full-life shared assets | Actual physical source/event and compatible native operand ledger | asset_id; job_cohort_id; asset_native_unit; manufacture_scope; maintenance_cleaning_scope; replacement_scope; EOL_scope; all_period_scope; cohort_driver_identity; lifetime_driver_identity; observed_history_records; remaining_evidence; termination_evidence; burden_owner; provider_overlap; uncertainty; sensitivity; update_evidence; asset_equivalent; asset_equivalent_unit; asset_equivalent_basis; asset_equivalent_method; asset_equivalent_state; asset_equivalent_sample_time; asset_equivalent_source; asset_equivalent_conversion_factor; asset_equivalent_conversion_unit; asset_equivalent_conversion_source; cohort_used_driver; cohort_used_driver_unit; cohort_used_driver_basis; cohort_used_driver_method; cohort_used_driver_state; cohort_used_driver_sample_time; cohort_used_driver_source; cohort_used_driver_conversion_factor; cohort_used_driver_conversion_unit; cohort_used_driver_conversion_source; all_user_used_driver; all_user_used_driver_unit; all_user_used_driver_basis; all_user_used_driver_method; all_user_used_driver_state; all_user_used_driver_sample_time; all_user_used_driver_source; all_user_used_driver_conversion_factor; all_user_used_driver_conversion_unit; all_user_used_driver_conversion_source; observed_history_driver; observed_history_driver_unit; observed_history_driver_basis; observed_history_driver_method; observed_history_driver_state; observed_history_driver_sample_time; observed_history_driver_source; observed_history_driver_conversion_factor; observed_history_driver_conversion_unit; observed_history_driver_conversion_source; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; remaining_driver_source; remaining_driver_conversion_factor; remaining_driver_conversion_unit; remaining_driver_conversion_source; complete_lifetime_driver; complete_lifetime_driver_unit; complete_lifetime_driver_basis; complete_lifetime_driver_method; complete_lifetime_driver_state; complete_lifetime_driver_sample_time; complete_lifetime_driver_source; complete_lifetime_driver_conversion_factor; complete_lifetime_driver_conversion_unit; complete_lifetime_driver_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source | Keep job/cohort actual-equivalence quantity/unit/basis/method/state/time/source. Full-life compatible driver denominator includes all users/periods and observed/history plus evidenced remaining use or termination;record every native operand and conversion provenance. Include manufacture/maintenance-cleaning/replacement/EOL,uncertainty/sensitivity/update. A complete provider substitutes covered own burdens;no arbitrary annual fraction or flooring lifetime default. | Item(s); actual compatible driver/equivalence units | Every actual event and matched measurement period | Complete duty/source/cohort cutoffs and all relevant asset periods | Actual node warehouse/order duties and all physical shared users | per reference flow | Native unit/basis/method/state/sample time/source,calibration,conversion,uncertainty and complete ownership |
| cp_freight | original_full_roll_trade | Unique cargo-load-leg records and physical shares | Actual physical source/event and compatible native operand ledger | load_id; leg_id; unique_load_leg_key; origin; destination; carrier; period; timestamp_timezone; timestamp_source; load_extent_EACH_or_TOTAL; cargo_parent_child_ids; load_tare_role; cargo_support_pack_inclusion; empty_running_scope; carrier_resource_scope; commodity_service_owner; share_derivation; unknown_discrepancy; actual_repeat_count; actual_repeat_count_unit; actual_repeat_count_basis; actual_repeat_count_method; actual_repeat_count_state; actual_repeat_count_sample_time; actual_repeat_count_source; actual_repeat_count_conversion_factor; actual_repeat_count_conversion_unit; actual_repeat_count_conversion_source; gross_load; gross_load_unit; gross_load_basis; gross_load_method; gross_load_state; gross_load_sample_time; gross_load_source; gross_load_conversion_factor; gross_load_conversion_unit; gross_load_conversion_source; noncargo_tare; noncargo_tare_unit; noncargo_tare_basis; noncargo_tare_method; noncargo_tare_state; noncargo_tare_sample_time; noncargo_tare_source; noncargo_tare_conversion_factor; noncargo_tare_conversion_unit; noncargo_tare_conversion_source; direct_packed_payload; direct_packed_payload_unit; direct_packed_payload_basis; direct_packed_payload_method; direct_packed_payload_state; direct_packed_payload_sample_time; direct_packed_payload_source; direct_packed_payload_conversion_factor; direct_packed_payload_conversion_unit; direct_packed_payload_conversion_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source | Preserve independent gross/noncargo-tare/direct-payload native quantities,bases,methods,state,time,sources and compatible conversions. Keep actual shipped core,packaging and cargo supports. EACH reading multiplies actual sourced repeat count once;TOTAL unchanged. Each unique load+leg gets its own actual causal driver-derived share inside sum;no reused totals or parent+child cargo duplication. | kg*km; actual native load/distance/count units | Every actual event and matched measurement period | Complete duty/source/cohort cutoffs and all relevant asset periods | Actual node warehouse/order duties and all physical shared users | per reference flow | Native unit/basis/method/state/sample time/source,calibration,conversion,uncertainty and complete ownership |
| cp_fates | original_full_roll_trade | Actual separated useful,waste and mixed-content fates | Actual physical source/event and compatible native operand ledger | event_id; parent_roll_id; child_piece_id; original_source_link; material_identity; layer_identity; actual_BOM_or_analysis; composition_method; composition_source; sample_id; sample_representativeness; extent_EACH_or_TOTAL; transfer_class_Product_or_Waste; usable_acceptance_evidence; whole_part_mixed_view; supplied_material_link; content_transfer_link; stream_exclusion_ids; actual_fate; receiver; transfer_gate; transport_scope; treatment_recovery_scope; inherited_production_owner; already_included_coverage; commodity_loss_link; source_gate_conversion_evidence; unknown_discrepancy; native_count; native_count_unit; native_count_basis; native_count_method; native_count_state; native_count_sample_time; native_count_source; native_count_conversion_factor; native_count_conversion_unit; native_count_conversion_source; width; width_unit; width_basis; width_method; width_state; width_sample_time; width_source; width_conversion_factor; width_conversion_unit; width_conversion_source; length; length_unit; length_basis; length_method; length_state; length_sample_time; length_source; length_conversion_factor; length_conversion_unit; length_conversion_source; area; area_unit; area_basis; area_method; area_state; area_sample_time; area_source; area_conversion_factor; area_conversion_unit; area_conversion_source; gross; gross_unit; gross_basis; gross_method; gross_state; gross_sample_time; gross_source; gross_conversion_factor; gross_conversion_unit; gross_conversion_source; core_tare; core_tare_unit; core_tare_basis; core_tare_method; core_tare_state; core_tare_sample_time; core_tare_source; core_tare_conversion_factor; core_tare_conversion_unit; core_tare_conversion_source; other_pack_tare; other_pack_tare_unit; other_pack_tare_basis; other_pack_tare_method; other_pack_tare_state; other_pack_tare_sample_time; other_pack_tare_source; other_pack_tare_conversion_factor; other_pack_tare_conversion_unit; other_pack_tare_conversion_source; net_composite_mass; net_composite_mass_unit; net_composite_mass_basis; net_composite_mass_method; net_composite_mass_state; net_composite_mass_sample_time; net_composite_mass_source; net_composite_mass_conversion_factor; net_composite_mass_conversion_unit; net_composite_mass_conversion_source; layer_fraction; layer_fraction_unit; layer_fraction_basis; layer_fraction_method; layer_fraction_state; layer_fraction_sample_time; layer_fraction_source; layer_fraction_conversion_factor; layer_fraction_conversion_unit; layer_fraction_conversion_source; actual_moisture; actual_moisture_unit; actual_moisture_basis; actual_moisture_method; actual_moisture_state; actual_moisture_sample_time; actual_moisture_source; actual_moisture_conversion_factor; actual_moisture_conversion_unit; actual_moisture_conversion_source; dry_cleanup_carrier; dry_cleanup_carrier_unit; dry_cleanup_carrier_basis; dry_cleanup_carrier_method; dry_cleanup_carrier_state; dry_cleanup_carrier_sample_time; dry_cleanup_carrier_source; dry_cleanup_carrier_conversion_factor; dry_cleanup_carrier_conversion_unit; dry_cleanup_carrier_conversion_source; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_sample_time; retained_fluid_source; retained_fluid_conversion_factor; retained_fluid_conversion_unit; retained_fluid_conversion_source; retained_flooring; retained_flooring_unit; retained_flooring_basis; retained_flooring_method; retained_flooring_state; retained_flooring_sample_time; retained_flooring_source; retained_flooring_conversion_factor; retained_flooring_conversion_unit; retained_flooring_conversion_source; retained_core_pack; retained_core_pack_unit; retained_core_pack_basis; retained_core_pack_method; retained_core_pack_state; retained_core_pack_sample_time; retained_core_pack_source; retained_core_pack_conversion_factor; retained_core_pack_conversion_unit; retained_core_pack_conversion_source; stream_exclusion_quantity; stream_exclusion_quantity_unit; stream_exclusion_quantity_basis; stream_exclusion_quantity_method; stream_exclusion_quantity_state; stream_exclusion_quantity_sample_time; stream_exclusion_quantity_source; stream_exclusion_quantity_conversion_factor; stream_exclusion_quantity_conversion_unit; stream_exclusion_quantity_conversion_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_conversion_factor; density_conversion_unit; density_conversion_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; temperature_conversion_factor; temperature_conversion_unit; temperature_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record actual material,layer/BOM or representative analysis and each dry-carrier/retained-fluid/retained-flooring/core-pack operand own unit/basis/method/state/sampletime/source. Whole/part/core-pack/mixed retained views are nonadditive;physical outlet decision/receiver and complete transport/treatment once. Area-to-mass conversion matches actual parent construction,state and sampling;not assumed all PVC or nominal thickness density. Useful transfer is actual accepted destination,not recyclability credit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native geometry/area/content/condition units | Every actual event and matched measurement period | Complete duty/source/cohort cutoffs and all relevant asset periods | Actual node warehouse/order duties and all physical shared users | per reference flow | Native unit/basis/method/state/sample time/source,calibration,conversion,uncertainty and complete ownership |
| cp_species | original_full_roll_trade | Actual direct species and receiving media | Actual physical source/event and compatible native operand ledger | event_id; source_process; named_substance; receiving_medium; factor_complete; component_identity; fate_identity; measurement_method; measurement_source; uncertainty; receiver_scope_exclusion; measured_release; measured_release_unit; measured_release_basis; measured_release_method; measured_release_state; measured_release_sample_time; measured_release_source; measured_release_conversion_factor; measured_release_conversion_unit; measured_release_conversion_source; activity; activity_unit; activity_basis; activity_method; activity_state; activity_sample_time; activity_source; activity_conversion_factor; activity_conversion_unit; activity_conversion_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_sample_time; factor_source; factor_conversion_factor; factor_conversion_unit; factor_conversion_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; component_fraction_conversion_factor; component_fraction_conversion_unit; component_fraction_conversion_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; fate_fraction_conversion_factor; fate_fraction_conversion_unit; fate_fraction_conversion_source; cohort_driver; cohort_driver_unit; cohort_driver_basis; cohort_driver_method; cohort_driver_state; cohort_driver_sample_time; cohort_driver_source; cohort_driver_conversion_factor; cohort_driver_conversion_unit; cohort_driver_conversion_source; all_user_driver; all_user_driver_unit; all_user_driver_basis; all_user_driver_method; all_user_driver_state; all_user_driver_sample_time; all_user_driver_source; all_user_driver_conversion_factor; all_user_driver_conversion_unit; all_user_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source | Establish actual event,named substance and medium,then measured quantity or compatible activity-factor/composition/fate with each native unit/basis/method/state/time/source. Complete species factor is not multiplied by already covered composition/fate again. Unknown stock/length difference,polymer or odour is not direct emission evidence. | kg; actual compatible activity/fraction units | Every actual event and matched measurement period | Complete duty/source/cohort cutoffs and all relevant asset periods | Actual node warehouse/order duties and all physical shared users | per reference flow | Native unit/basis/method/state/sample time/source,calibration,conversion,uncertainty and complete ownership |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all exchanges | q=attributed actual physical quantity / positive N once;reference accepted_service is 1 Item(s). N is unique FINAL source-verified merchant-owned/resold B2B acceptance after reversals,not supplier receipt. Canceled/reversed/failed/unfinished resources retain actual period/cohort responsibilities;N=0 means do not divide. | actual attributed quantity; verified final N; protocol | quantity per reference flow |  |
| net_roll_area_mass | nonexchange roll stock | For each unique original parent roll,use compatible source-verified net width*full length (converted native length units once) for actual area,or documented directly measured source area; do not unroll by assumption. Net layered-flooring mass=actual gross roll mass-actual core tare-actual other external packing tare on compatible native bases. Alternatively area*actual matched construction/state areal mass with documented unit conversion/source and uncertainty. EACH measurement multiplies actual count once;TOTAL remains total. Backing/wear layers remain flooring,not tare;layer/content views are nonadditive. Nominal thickness*generic PVC density cannot replace actual areal mass/BOM. | unique parent roll; width/length/area/arealmass/gross/core/pack native units,bases,methods,state,time,sources; EACH/TOTAL; cp_rolls | nonduplicated net flooring area and composite mass audit |  |
| original_gate_assignment | commodity outside service | Original assigned source quantity is directly traced/measured with evidence OR original gate quantity * compatible cohort driver / positive complete all-terminal driver sum. Record each competing accepted transfer,closing/unsold/damaged retained,useful other exit,return and actual whole/part/mixed loss with native quantity/unit/basis/method/state/time/source,owner,original lot/cohort/period/conversion/exclusivity and numerator links. All refer to same compatible complete source cohort;no accepted-only denominator or intermediate movement twice. | actual original quantity/unit/state/source; direct evidence OR compatible source cohort and complete terminal records; allocation/conversion/native units/bases/methods/sources/owners; assigned quantity/loss/coverage/integration; cp_rolls | assigned complete finished-roll source demand/loss outside add-on |  |
| supply_stock | independent supplies | S=attributed opening+true external net receipts-closing including recovered retained supplies. Gross INPUT S with separate matched same-scope unused external OUTPUT OR consumed INPUT S-return with that OUTPUT omitted. No numerical S+return,double credit,new receipt from internal recovery or removal of nonreturned waste upstream burden. Inherited core/pack never reduces unrelated current supplies. | opening; external net receipts; recovered closing; same-scope matched unused outward; chosen convention; cp_supplies | nonduplicated supply and return quantities |  |
| full_life_share | assets and resources | Resource share uses compatible actual cohort/all-user causal drivers. Asset equivalents use actual job/cohort used driver / complete all-user all-period lifetime driver,observed/history+sourced remaining use/termination. Every operand has native unit/basis/method/state/time/source and compatible conversion;full manufacture/maintenance-cleaning/replacements/EOL,uncertainty/sensitivity/update included. Complete provider replaces matching own scope. | job/cohort used; allusers observed/history; sourced remaining/termination; complete lifetime; native equivalence units/bases/methods/sources; cp_assets | attributed complete asset equivalents/resources |  |
| packed_load_leg_sum | packed_freight | Sum over unique load_id+leg_id [(actual compatible packed payload kg)*(actual count ONLY if EACH,otherwise 1)*(actual converted distance km)*(THAT record actual causal share)] / positive N. TOTAL load unchanged. Payload is directly measured actual cargo OR compatible gross minus evidenced vehicle/noncargo tare;retain actual shipped core,wrapping and cargo supports. Gross/tare/payload/distance/count each has independent native unit,basis,method,state,time,source and compatible conversion factor/unit/source. Per-record share derived from actual compatible cohort/all-user drivers stays inside each summand,N once. Never add parent roll and its layers/core/pack again if already in gross cargo. | unique load/leg; EACH/TOTAL; count; gross/noncargo tare/direct payload and actual cargo support/pack; distance/conversions; per-record causal drivers/share; N; cp_freight | kg*km per service reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory | Verify actual concrete identity,state/gate/medium and native property/unit before final exchange use;unfinished configurations remain explicit. | Full actual identity and support detail proof |
| quality_roll | commodity and fates | Actual full-original parent roll geometry/layered mass/core-pack/BOM/state/sample and source record;no allPVC or missing-length-to-waste inference. | Actual manufacturer/lot source dimensions/areal-mass/BOM or representative analysis,condition/receiver records |
| quality_complete | whole route | Complete original finished-roll demand/loss assignment outside once with all-terminal source coverage and real receiver/resource/provider/carrier/full-life all-user duties once,uncertainty and update. | Source native conversions/competing records/ownership/loss integration,meters/full-life evidence and receiving gates |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_electricity | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `warehouse_electricity` under `cp_power`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_power`; actual source-linked native records |
| housekeeping_water | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `housekeeping_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| housekeeping_consumables | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `housekeeping_consumables` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_shipping_protection | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_shipping_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| external_physical_jobs | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `external_physical_jobs` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| full_life_assets | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `full_life_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| packed_freight | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packed_freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| matched_unused_supply_return | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `matched_unused_supply_return` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| actual_useful_flooring_material | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_useful_flooring_material` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| discarded_whole_rolls | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_whole_rolls` under `cp_rolls`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_whole_rolls_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_rolls`; actual source-linked native records |
| nonusable_flooring_parts | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `nonusable_flooring_parts` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| separated_core_pack_waste | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separated_core_pack_waste` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| spent_housekeeping_solids | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `spent_housekeeping_solids` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| collected_housekeeping_liquid | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `collected_housekeeping_liquid` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| identified_direct_species | original_full_roll_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `identified_direct_species` under `cp_species`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_species`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### warehouse_electricity

Electric handling,lighting,records and assigned idle/housekeeping only where actually operated. A dry sheltered storage statement does not establish active conditioning,heating,unrolling or manufacturing energy.

Residual inventory requirement after the independently identified cases `warehouse_electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse and full-roll order electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed measured electricity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Need complete actual meter/equipment/provider periods and causal all-user drivers,not a roll-area heating allowance.

#### housekeeping_water

Actual premises or handling-equipment housekeeping only. Product cleaning,subfloor moisture tests,adhesive preparation and installed-floor maintenance are outside the declared route. Environmental abstraction if actual requires its own source identity.

Residual inventory requirement after the independently identified cases `housekeeping_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual supplied warehouse-housekeeping water
- Flow property / unit: Volume / m3
- Amount rule: Assigned actual supply / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need real supply,retained/collected/direct destinations,units and receiver composition; damp packaging or stock deficit does not establish evaporation/wastewater.

#### housekeeping_consumables

Only actually supplied native consumables for the warehouse service. No flooring cleaner,primer,adhesive,welding liquid or new wear-layer coating is prescribed. Actual formulation/carrier and packaging are distinct native records.

Residual inventory requirement after the independently identified cases `housekeeping_consumables_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual cleaning preparations,wipes,absorbents and filters
- Flow property / unit: Mass / kg
- Amount rule: Attributed actual native supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual SKU/native quantity,formulation fraction basis,stock and sourced density/temperature/conversions. Constituents do not add a second preparation input.

#### added_shipping_protection

Only new outer shipping straps,wraps,edge guards or labels actually supplied here. Original roll core,manufacturer wrapping and end protection remain inherited commodity production; no automatic per-roll replacement or merchant rewinding/repacking is required.

Residual inventory requirement after the independently identified cases `added_shipping_protection_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual added consignment shipping protection
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual new shipping material / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual native count/length/area/mass,material/stock and conversion evidence. Distinguish newly added material from inherited core/pack and reusable supports.

#### external_physical_jobs

Actual counted completion contracts only,with full physical resource/asset coverage. Providers billed in mass,time,area-time or freight require their own native exchanges. Cutting,acclimating,installing,welding and product treatment require a separate reviewed boundary if actually performed.

- Identity requirement: Actual completed native external roll-handling jobs
- Flow property / unit: Count / Item(s)
- Amount rule: Assigned completed actual native jobs / N; cp_provider.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need completed job identity/quantity/unit and complete resources,asset life,carrier and receiver coverage; invoice amount or roll count is not a job-service quantity.

#### full_life_assets

Include manufacture,maintenance/cleaning,replacements and EOL of actual shared buildings,racks,trolleys,lifting/record equipment,pallets or reusable roll supports. A single transport trip does not consume a new pallet; flooring service life is not asset lifetime.

- Identity requirement: Complete-life warehouse,racks,handling equipment and reusable supports
- Flow property / unit: Count / Item(s)
- Amount rule: Compatible complete asset equivalents / N; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need native job/cohort equivalence,all-user observed-history+sourced remaining/termination lifetime drivers,units/bases/method/sources,uncertainty,sensitivity and update evidence.

#### packed_freight

Use physically shipped complete cargo including actual roll core,wrapping and cargo supports. Remove only evidenced vehicle/noncargo tare. Complete carrier/empty-running scope and commodity-service ownership must be exclusive; net PVC,installed area or parent-plus-layer mass is not payload.

- Identity requirement: Actual packed full-roll,supply and waste freight
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Sum unique load-leg converted actual payload * distance * THAT record share,with actual repeat count only for EACH, / N once; cp_freight.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need actual load/leg IDs,EACH/TOTAL,count and separate gross/tare/payload native units/bases/method/source/conversion plus actual distance and record-specific share drivers.

#### matched_unused_supply_return

Only actual same-scope unused supplies physically transferred externally with provenance and usable acceptance. Useful original flooring returns remain merchandise stock; original cores/packing and retained reusable supports cannot create a credit against unrelated current service supplies.

- Identity requirement: Actual matched unused independent service-supply returns
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual matched unused outward / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need stock convention gross INPUT S with separate matched unused OUTPUT OR consumed INPUT S-return omitting that OUTPUT; no numeric S+return,double credit or removed waste burden.

#### actual_useful_flooring_material

Conditional actually separated useful material with original roll parent link,state/quantity and accepted receiver. It does not prescribe cutting/unrolling or recycling. Normal intact usable roll returns remain nonexchange merchandise; no automatic avoided PVC or manufacturing credit.

- Identity requirement: Actual useful separately transferred incident flooring material
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual useful material transfer / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual layer/composite basis,area/mass conversion and source/receiver/exclusion links. A short or missing length is not proof of usable fragment export.

#### discarded_whole_rolls

Only real discard decision and receiver transfer. Physical whole-roll waste includes actual retained core/packing when sent together; net layered-flooring/core/pack values are nonadditive content views. Damage,quarantine,missing length or rejected delivery alone is not whole-roll disposal.

- Identity requirement: Actual discarded whole rolls with retained core and packing as present
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual whole receiver-load waste / N; cp_rolls.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rolls`

Range evidence need: Need parent roll/source/state,count,gross/tare/retained core-pack/net flooring content,actual receiver and compatible original finished-gate loss conversion/owner/coverage.

#### nonusable_flooring_parts

Only real separated incident parts or separately reviewed extra-operation material,not installation offcuts by assumption. Actual wear layer,body/backing and retained contents stay within composite pieces unless separately physically transferred.

- Identity requirement: Actual nonusable separated flooring pieces and collected incident material
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual nonusable material / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual parent/source area and composite net mass,layer BOMS or representative analysis,sampling/conversion and receiver/treatment/exclusion proof. No all-PVC mass or missing-length loss factor.

#### separated_core_pack_waste

Actual core/end protection/wrapping newly removed and transferred,or actual new service shipping packing waste. Inherited production remains commodity upstream; core/pack retained in whole roll waste is its content audit,not this second outlet. Flooring backing/wear layers are product,not tare.

Residual inventory requirement after the independently identified cases `separated_core_pack_waste_paper_pack`; `separated_core_pack_waste_metal_pack`; `separated_core_pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separately transferred roll-core and packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual separated core/pack / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual material/native count/length/mass,tare and content/whole-roll exclusions,receiver/carrier/treatment. Recyclability or returnable core does not prove recovery or credit.

#### spent_housekeeping_solids

Only actual spent wipes,absorbents,filters or mixed solid stream. Dry carrier,retained fluid and retained flooring/pack contents have separate measured native views and parent/source links without adding another fragment/liquid output.

- Identity requirement: Actual spent housekeeping solids with retained liquid or flooring debris
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual collected spent solids / N; cp_fates.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need each dry/retained operand unit,basis,method,state,sample time,source,whole-stream closure and actual receiver/treatment; no presumed fibre/dust or wash yield.

#### collected_housekeeping_liquid

Only real separately collected stream at actual receiving-treatment gate. Liquid retained in whole/mixed solids is a nonadditive content audit,not this outlet. No adhesive wash,installation solvent,product-cleaning or subfloor runoff is assumed.

- Identity requirement: Actual independently collected warehouse-housekeeping liquid
- Flow property / unit: Volume / m3
- Amount rule: Assigned actual collected liquid / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Require measured volume/density/temperature units and sources,actual contamination/state/receiver/treatment and stream exclusions; moisture difference is not wastewater quantity.

#### identified_direct_species

Only actual supported event/substance and receiving medium. Flooring polymer/plasticiser/adhesive-compatible label,odour,scratch,missing area or stock deficit is not measured VOC,particle or water release. Application/installation and receiver-treatment emissions do not silently enter merchant direct scope.

- Identity requirement: Actual identified direct service substances to named media
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual measured or supported species quantity / N; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`

Range evidence need: Need compatible activity/factor/composition/fate or measurement native units/bases/method/source and medium. Complete species factor cannot multiply composition/fate again; no unknown-as-zero.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| final_reference | declared actual route | Require source merchant ownership/resale,B2B buyer and final post-reversal unique commercial gate with all qualifiers,N positive for normalization;receipt alone is insufficient. Retain no-N period/cohort duties without division. |  |
| roll_basis | declared actual route | Verify actual original full roll IDs,width/length/thickness,area/areal-mass units/method/source and construction-state,sample representativeness;core and external packing are not net flooring,while backing/wear layers are. No generic density,all-PVC conversion or double EACH/TOTAL multiplication. |  |
| source_fates | declared actual route | Require complete finished-roll gate,source quantity/unit/state/source and direct trace OR positive complete mutually exclusive all-terminal records includingclosing/useful-other/returns/loss,conversion/owner/already-covered loss and completed integration outside service once. Damage,missing length/area,quarantine,odour or residual does not establish whole discard,VOC or zero. Actual receiver/treatment and whole/part/retained views close without duplication. |  |
| scope_native | declared actual route | Check actual provider/carrier/resources/full-life assets and causal driver native operands/sources,allusers/periods,remaining evidence and single ownership. Freight unique load+leg EACH/TOTAL,countonce,cargo core-pack retained,record-specific share inside sum,N once. Final use requires actual quantities with compatible native units/state/source,verified concrete identities and actual acceptance/coverage evidence. A missing generic numerical Range alone does not block an otherwise evidenced actual package;disclose that gap without inventing bounds. A claimed source-backed interval requires traceable source and compatible basis;manufacturer specifications or regulatory limits do not automatically require a new independent sample. Only an empirical plausibility guardrail requires independent comparable reference evidence,not the same batch maximum validating itself. Actual source-specific acceptance intervals and uncertainty evidence remain required where applicable. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/quantitative completion |
| downstream_use | Physical ambient full-original-sheetvinyl-roll own-account wholesale add-on within complete finished-flooring chain |
| allowed_use | Actual original full factoryfinished construction/design/batch/roll/geometry/net-layered-mass/core-pack/condition/period and final buyer acceptance |
| excluded_use | Standalone flooring footprint;cut lengths/tiles/wallpaper;manufacture or merchant unroll-relax/acclimate/install/glue/weld/subfloor/clean;retail/agency;roll/area/mass/currency as service proxy |
| required_metadata | All qualifiers;original source geometry/layer-BOM/net-area-mass/core-pack/condition/stock/fates;source original/assigned demand/loss/state/conversion/terminal records/owner/coverage/integration;full provider/asset/carrier/receiver scope |
| required_quality_disclosure | Actual unverified identities/support,disclosed optional generic numerical Range gaps,native geometry/mass/BOM/fate/source conversion and full-life uncertainty |
| update_trigger | Changed SKU/construction/roll dimensions/core-pack/source,state/fates,warehouse extra operation,providers/assets/carrier/receiver or final acceptance/loss evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-floor-coverings | official_guidance | UNSD CPC3.0 explanatory notes,printed30561063group272/subclass32194/class3691: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Supports narrower36910sheetvinyl floorcovering trade inside61063;does not define this service unit or create a material recipe. |
| tarkett-roll-transport-storage | handbook | Tarkett Installation Instruction,12pages,Transport & storage/Handling and product-specific installation context: https://media.tarkett.com/docs/ID_INT_RR_Istallation_Instruction.pdf | Qualitative original-roll storage/handling,condition/batch and actual product-instruction questions only.2m versus ≥2m orientation statements overlap;no universal orientation,time/temperature/box count,unroll-relax,adhesive/weld/subfloor recipe,loss/recycling or quantitative BOM factor. Stock/source/allocation calculations are declared foreground methods,not values attributed to this installation manual. |
