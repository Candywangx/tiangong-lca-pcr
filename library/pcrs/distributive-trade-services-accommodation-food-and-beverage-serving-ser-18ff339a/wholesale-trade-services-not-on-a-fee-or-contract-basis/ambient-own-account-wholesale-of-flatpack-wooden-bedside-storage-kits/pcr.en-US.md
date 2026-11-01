---
pcr_id: pcr.ambient-own-account-wholesale-of-flatpack-wooden-bedside-storage-kits
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ambient own-account wholesale of flatpack wooden bedside storage kits

## 1. Scope and Applicability

This PCR covers actual physical ambient own-account B2B wholesale of manufacturer-complete finished flatpack wooden bedroom bedside storage/nightstand kits. The complete unassembled configuration is received in its actual original package collection and resold with business acceptance. Wooden includes actual wood-based/composite construction with declared metal/plastic/finish/hardware materials,not assumed pure solid wood.

Exclude raw wood/board production,furniture/component manufacture,office furniture,seating,assembled display/use,assembly/wall installation,repair/refinishing/repacking,active treatment/combustion,retail and fee-only agency. Actual incomplete/damaged/returned stock and exceptional physical fates are recorded; additional real operations need bounded review and complete expansion.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ambient-own-account-wholesale-of-flatpack-wooden-bedside-storage-kits |
| classification_refs | CPC3.0:61041; narrower: wooden bedroom bedside flatpack-kit own-account wholesale |
| covered_products | Completed physical commercial B2B wholesale consignments of actual manufacturer-complete packaged flatpack bedside storage kits |
| excluded_products | Raw board/wood,furniture manufacture,office/seating,merchant assembly/install/repair/repack,retail/agency |
| representative_product | Accepted commercial consignment with declared parent kit/configuration,all required packages/parts/hardware and net mixed-material/tare/state |
| production_route | Released complete unassembled packaged-kit receipt -> ambient stock/picking/dispatch -> actual business acceptance with traceable exceptions |
| market_state | Physical trade service,not newly assembled furniture; unchanged kit remains nonexchange merchandise |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed ambient own-account flatpack wooden bedside-storage-kit wholesale consignment service |
| How much | 1 Item(s),one unique completed accepted commercial consignment,not fixed kits,packages,pieces,kg or currency |
| How well | Exact manufacturer configuration and completeness,actual part/package state and buyer-agreed acceptance with real exceptions |
| How long or cycle | Actual receipt/holding/picking/dispatch/return/acceptance periods plus assigned idle/cleanup,cutoffs and full shared-asset lifetime |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed ambient own-account flatpack wooden bedside-storage-kit wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | manufacturer_complete_finished_packaged_bedroom_storage_kit; actual_manufacturer_SKU_configuration; actual_parent_kit_child_package_component_hardware_links; required_delivered_completeness_and_separately_sold_scope; actual_kit_package_part_counts_and_dimensions; actual_mixed_material_layer_composition; net_component_mass_moisture_basis_and_package_tare; actual_package_part_damage_and_usable_remaining_state; actual_receipt_storage_dispatch_acceptance_times; ownership_resale_business_buyer; actual_quality_and_exception_disposition; actual_provider_carrier_receiver_scope |

N>0 counts actual unique accepted service completions after documented reversals. Incomplete,rejected,quarantined and unfinished-period activity retains evidenced cohort responsibility even when no service completes in a period.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_service | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Reference output is 1 Item(s),one accepted commercial service,not a cabinet,child package or hardware count. |
| kit_package_units | merchandise | Count; actual dimensions | kits; packages; components; declared dimension units | Record exact parent configuration and all package/component quantities and actual included/separately sold scope. Native dimension and count conversions require method/unit/source; package mass is not net product mass. |
| mixed_material_state | merchandise/loss | Mass | kg | Measure net components and actual package tare,wood/board/coating/metal/plastic fractions and relevant moisture unit/basis/method/source/sample state/time. Alternate wet/dry/component views are not additive product or loss amounts. |
| native_support | all inventory | actual native property | actual native unit | Verify each actual material/provider/asset property/unit conversion and identity; no price-to-service,raw board-to-finished kit or substitute generic Energy property. |


## 5. System Boundary

This is an additive physical trade service,not a complete furniture footprint. The manufacturer example informs kit/package/material identity questions only; stock/lifetime/allocation calculations are declared PCR method rather than numerical manufacturer logistics factors.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual released manufacturer-complete finished bedside-storage kit in original package collection,unassembled for downstream assembly |
| starting_condition_role | Nonexchange commodity stock/throughflow including finished parts/hardware and inherited packaging |
| product_classification_scope | Narrower wooden bedroom38170 bedside-storage flatpack subset within61041 household furniture,excluding38111/3812 |
| recursive_input_rule | Actual external physical providers require disjoint complete gates; no recursive resale of the same consignment or duplicate covered logistics/assets |
| upstream_dataset_requirement | Complete compatible actual finished unassembled packaged-kit baseline outside service,not raw timber/board alone. Include relevant finished wood-based parts,coatings/laminations,metal/plastic hardware,preparation/completeness and packaging or assemble missing manufacture stages once. Real resource/provider/receiver datasets must cover native scope |
| disclosure | All qualifiers; exact kit/package/part/hardware counts,material/net/tare/moisture/state and stock/period; actual original-gate demand/state/loss conversion/exits/coverage/owner/integration; complete asset/provider/carrier/receiver scope |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_service | all exchanges | ALL finished furniture/component/hardware and inherited packaging manufacture,including lost commodity upstream,is excluded from service exchanges. Before whole-chain completeness,integrate the complete compatible released flatpack-kit baseline and quantified original-gate assigned demand/state change/whole-part loss,other exits,owner/already-included coverage exactly once outside this add-on. Actual handling and receiving treatment of real losses remain inside once. |  |
| boundary_hierarchy | kit/package/component stock | Actual parent kit may span several packages with different components/hardware. Establish exact manufacturer configuration and included/separately sold scope; package count or individual component multiplicity is not kit count. Preserve remaining usable parts and real returns; partial missing/damaged item does not automatically discard the whole kit. | ikea-platsa-kit-public |
| boundary_operations | merchant activities | Manufacturer assembly,wall-fixing and user wipe-clean instructions describe downstream product use,not this merchant operation. The route excludes assembly/install/repair/repack,active conditioning and combustion. Actual additional operation,fuel or working fluid requires bounded review and complete inventory,not omission or blanket zero. | ikea-platsa-kit-public |
| boundary_sources | facts and numerical defaults | The actual IKEA bedside-kit page supports qualitative parent-package/component/material distinctions only. Do not impose that SKU package count,weight,dimensions,composition fractions or product instructions as wholesale defaults. Storage/condition and any direct release require actual foreground evidence. | ikea-platsa-kit-public |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bedside_kit_trade | Ambient flatpack bedside-kit stock and own-account trade | required | Actual own-account completed physical wholesale of manufacturer-complete packaged flatpack kit | Single receiving/stock/picking/dispatch responsibility; order/cleanup batches share warehouse infrastructure across periods | `accepted_service` |

No assembly node is implied by a kit or multi-package product. Normal goods remain packaged and unchanged; actual partial damage/returns/cleanup/receivers are routed within the bounded trade responsibility. Expand actual conditional material,provider,waste or substance/native identities; missing evidence is not zero.

### Process: Ambient flatpack bedside-kit stock and own-account trade (`bedside_kit_trade`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`handling_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Attributed actual electricity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Require actual period/device meter coverage and physical cohort/all-user drivers,not a manufacturer kit weight converted to energy.

###### Actual liquid treated tap-water supply (`housekeeping_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Assigned measured water / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need source,use and physical outlet/retention evidence. Board moisture or package dampness is not a measured water supply,effluent or evaporation amount.

###### Actual independently recorded synthetic detergent supply (`actual_cleaning_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native cleaning supply / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need supply/use/returns,formulation/active/carrier or dry-material basis and conversion/density/temperature sources; do not add mixture and its components twice.

###### Actual separately recorded polyethylene packaging film (`added_shipping_materials_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual new outer material / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need actual Count/Area/Length/Mass stock and material/tare/conversion sources; no replacement carton or protection mass per cabinet without evidence.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed ambient own-account flatpack wooden bedside-storage-kit wholesale consignment service (`accepted_service`)

One actual unique commercial ownership-resale consignment accepted by a business buyer for the declared complete unassembled product configuration and package/part condition. Kit,piece,hardware and child-package counts remain merchandise quantities.

- Selected flow: Completed ambient own-account flatpack wooden bedside-storage-kit wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kits`

Range evidence need: Need actual completion and SKU/configuration,parent-kit/child-package/component links,net mixed-material mass/tare/state and acceptance period; no kit=service or one-package=one-kit default.

##### Waste flows

###### Discarded complete flatpack wooden bedside-storage kit (`discarded_whole_kits_atomic_case`)

Conditional on independently recorded actual Discarded complete flatpack wooden bedside-storage kit. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_whole_kits`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete flatpack wooden bedside-storage kit
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured whole-kit waste / N; cp_kits.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kits`

Range evidence need: Need exact included packages/components,net product/pack/tare,moisture where relevant,actual disposition and compatible original finished-kit loss owner/conversion. No default all-wood or wholekit loss from missing hardware.

###### Actual separately collected paper packaging waste (`actual_pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/native mass/tare/contamination and real receiving recovery/treatment,excluding packaging already in whole-kit waste; collection alone does not earn recycling credit.


###### Actual separately collected metal packaging waste (`actual_pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/native mass/tare/contamination and real receiving recovery/treatment,excluding packaging already in whole-kit waste; collection alone does not earn recycling credit.


###### Actual separately collected plastic packaging waste (`actual_pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/native mass/tare/contamination and real receiving recovery/treatment,excluding packaging already in whole-kit waste; collection alone does not earn recycling credit.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_consignment | all inventory | Use positive unique actual buyer-accepted N with evidenced cohort/period physical drivers; assign canceled/failed/incomplete/quarantined/returned,idle/cleanup and unfinished-period duties. No current completed sale does not erase resource responsibilities. Margin/currency are not service quantities. |  |
| allocation_goods | nonexchange commodity stock | Reconcile attributed opening,net receipts,buyer returns,closing,accepted transfers,supplier returns,other exits,actual whole/part discard and retained usable parts without double counting parent and children. Internal quarantine/incomplete movements are not external exits. Quantify original finished-kit demand/loss and state conversion by actual package/component material/mass/tare evidence,owner/existing loss coverage and actual integration result outside service. Raw wood/board alone omits finished parts,coatings,hardware and packaging. |  |
| allocation_supplies | supplies and unused_supply_return | S=assigned opening+true external net receipts-closing including retained recovered supplies. Choose gross supply INPUT S with separate same-scope matched unused external OUTPUT OR consumed-only INPUT S-return omitting that same outward exchange. Internal recovery is not receipt; no numerical S+return input,double deduction,unrelated negative input or removal of waste/spill upstream burden. |  |
| allocation_fullscope | shared resources/assets/providers | Compatible-period resource attribution uses cohort physical driver/all-user driver on complete actual scope. Asset equivalent uses compatible cohort driver/complete lifetime driver across all users/periods with full manufacture,maintenance/cleaning,replacements and EOL. Evidence observed life or history plus sourced remaining use/termination,units,uncertainty,sensitivity/update. Complete external provider is an alternative to covered own resources/assets,not another additive burden. |  |
| allocation_outlets | actual waste and releases | Whole kit or actual separated components/packing/cleanup streams must be exclusive. Retained fluid and mixed-material fractions are composition views,not another physical outlet. Actual receiver,transport/treatment once with no automatic recovery/substitution credit or waste deducted from supply. Only actual identified substances with receiving medium and supported fate are elementary flows. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_kits | bedside_kit_trade | accepted consignment and physical kit/package/part stock | Actual original event,meter/scope and source ledger | consignment_id; manufacturer; SKU; kit_id; configuration_version; bedroom_function; parent_kit_quantity; kit_unit; child_package_id; physical_package_instance_id; mass_record_each_or_total; package_quantity; package_unit; component_id; component_quantity; component_unit; hardware_list; required_completeness; supplied_scope; separately_sold_parts; parent_child_links; count_factor; count_factor_unit; count_factor_source; package_dimensions; dimension_unit; dimension_method; dimension_source; gross_package_mass; package_tare; package_mass_conversion_factor; package_mass_conversion_unit; package_mass_conversion_source; net_component_mass; mass_unit; material_identity; material_fraction; layer_composition; fraction_basis; fraction_source; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_state; sample_time; supplier_evidence_date; temperature; temperature_unit; humidity; humidity_unit; observation_time; opening; gross_receipts; receipt_tare; net_receipts; buyer_returns; closing; accepted_transfer; supplier_returns; incomplete_internal; quarantine_internal; other_exits; actual_discard; actual_remaining_usable_parts; disposition; physical_fate; receipt_time; dispatch_time; acceptance_time; ownership_gate; buyer_gate; original_gate_dataset_id; original_gate_reference; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_quantity_source; allocation_method; allocation_source; direct_assignment_evidence; source_cohort_driver; source_cohort_driver_unit; source_all_exit_driver; source_all_exit_driver_unit; assigned_source_quantity; assigned_source_unit; assigned_source_quantity_source; source_gate_state; source_conversion_factor; source_conversion_unit; source_conversion_source; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_basis; loss_conversion; loss_conversion_unit; loss_conversion_source; state_change_evidence; burden_owner; already_included_loss_coverage; separate_pack_fate; integration_result; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Link real acceptance to exact manufacturer configuration,kit/child-package/hardware lists and actual delivered/returned/missing/damaged quantities. Measure original state/mixed material/net/tare and supported conversions for whole/partial original-gate commodity demand/loss outside service.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); kits; packages; components; kg; actual dimensions/conditions | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual duties of this node and shared users | per reference flow | Original calibration,compatible unit/state/conversion sources,complete responsibility and uncertainty |
| cp_power | bedside_kit_trade | actual electricity scope and period attribution | Actual original event,meter/scope and source ledger | meter_id; period_start; period_end; opening_reading; closing_reading; energy_unit; equipment_scope; idle_cleanup; cohort_driver; cohort_driver_unit; all_user_driver; all_user_driver_unit; attribution_share; share_source; provider_included_scope; source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual meters and compatible period drivers across all users,including nonproductive duties and any complete provider coverage. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual duties of this node and shared users | per reference flow | Original calibration,compatible unit/state/conversion sources,complete responsibility and uncertainty |
| cp_water | bedside_kit_trade | actual supply and water fates | Actual original event,meter/scope and source ledger | source_id; period; supply_volume; retained_volume; collected_volume; volume_unit; actual_outfall; receiver; composition; composition_basis; composition_source; density; density_unit; density_source; temperature; temperature_unit; retained_fluid_exclusion; evaporation_evidence; fate_basis; fate_source; transport_scope; treatment_scope; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual housekeeping supply and sample physical outlets; separate retained liquid,collected waste and real direct media using evidence,not balance residual. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3; actual compatible composition units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual duties of this node and shared users | per reference flow | Original calibration,compatible unit/state/conversion sources,complete responsibility and uncertainty |
| cp_materials | bedside_kit_trade | actual added supplies and same-scope unused exports | Actual original event,meter/scope and source ledger | material_id; SKU; native_quantity; native_unit; formulation; active_fraction; carrier_fraction; fraction_basis; fraction_source; opening; gross_receipts; receipt_tare; net_receipts; internal_issue; internal_recovery; closing_including_recovered; actual_use; matched_unused_external_return; source_scope_match; external_receiver; stock_representation; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; temperature; temperature_unit; actual_fate; fate_basis; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Reconcile each actual native supply/stock/return provenance. Gross supply input S and independent matched return output OR consumed-only S-return with return exchange omitted; no prescribed furniture care/assembly material. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native material units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual duties of this node and shared users | per reference flow | Original calibration,compatible unit/state/conversion sources,complete responsibility and uncertainty |
| cp_provider | bedside_kit_trade | completed outsourced physical service and coverage | Actual original event,meter/scope and source ledger | provider_id; job_id; native_quantity; native_unit; completed_gate; completion_time; resource_scope; electricity_coverage; full_asset_coverage; maintenance_EOL_coverage; carrier_empty_scope; treatment_scope; upstream_dataset; overlap_owner; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | Verify physical completion and native quantity with complete resource/lifecycle scope,then remove only proven overlapping own duties. | Item(s); actual provider units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual duties of this node and shared users | per reference flow | Original calibration,compatible unit/state/conversion sources,complete responsibility and uncertainty |
| cp_assets | bedside_kit_trade | complete-life warehouse and reusable asset allocation | Actual original event,meter/scope and source ledger | asset_id; asset_native_unit; manufacture_scope; maintenance_cleaning_scope; replacement_scope; EOL_scope; burden_owner; provider_overlap; cohort_driver_identity; cohort_driver; cohort_driver_unit; lifetime_driver_identity; lifetime_driver; lifetime_driver_unit; all_user_driver; all_period_scope; observed_history; observed_unit; evidenced_remaining_use; remainder_unit; remainder_source; termination_basis; uncertainty; sensitivity; update_evidence; source; N | Attribute full manufacture/maintenance/cleaning/replacements/EOL by compatible all-user lifetime drivers. Evidence observed life or history plus remaining use/termination and uncertainty/sensitivity/update; retained reuse not new receipt. | Item(s); compatible actual driver units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual duties of this node and shared users | per reference flow | Original calibration,compatible unit/state/conversion sources,complete responsibility and uncertainty |
| cp_transport | bedside_kit_trade | actual legs and complete carrier boundary | Actual original event,meter/scope and source ledger | leg_id; origin; destination; carrier; period; child_packages_in_load; gross_load; gross_load_source; load_tare; load_tare_role; load_tare_source; packed_payload_state; net_load; load_unit; distance; distance_unit; distance_source; load_conversion_factor; load_conversion_unit; load_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; empty_coverage; carrier_conditioning_coverage; commodity_service_owner; cohort_driver; all_user_driver; driver_unit; attribution_share; share_source; source; N | Measure actual packed load/route with compatible conversions and all-user share; carrier equipment/empty burden and commodity/service ownership must be explicit. | kg*km; actual native leg units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual duties of this node and shared users | per reference flow | Original calibration,compatible unit/state/conversion sources,complete responsibility and uncertainty |
| cp_waste | bedside_kit_trade | actual exclusive solid streams and receiving treatment | Actual original event,meter/scope and source ledger | event_id; lot_id; kit_id; child_package_id; component_id; material; layer_composition; whole_or_part; native_count; count_unit; wet_mass; dry_mass; mass_unit; material_fraction; fraction_basis; fraction_source; moisture; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_state; sample_time; supplied_material_link; dry_cleaning_material_mass; retained_fluid_quantity; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; contaminant_composition_basis; stream_exclusion_ids; stream_exclusion_quantity; stream_exclusion_unit; contamination; gross; tare; net; origin; actual_fate; receiver; transfer_gate; transport_scope; treatment_recovery_scope; commodity_loss_link; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Weigh actual whole/part mixed components,packaging or spent cleaning solids with retained-fluid/composition and explicit stream exclusions; actual receiver/transport/treatment once. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual component/native count units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual duties of this node and shared users | per reference flow | Original calibration,compatible unit/state/conversion sources,complete responsibility and uncertainty |
| cp_species | bedside_kit_trade | actual direct substance/medium evidence | Actual original event,meter/scope and source ledger | event_id; source_process; substance; receiving_medium; measured_release; release_unit; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; component_fraction; fraction_basis; fraction_source; fate_fraction; fate_basis; fate_source; measurement_source; uncertainty; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | Determine actual release source/substance/medium,then measure or apply supported compatible activity/factor/composition/fate once. No product-content or unexplained stock-deficit release. | kg; actual compatible activity units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual duties of this node and shared users | per reference flow | Original calibration,compatible unit/state/conversion sources,complete responsibility and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all exchanges | Actual attributed physical quantity / positive unique N once; accepted_service is 1 Item(s). | attributed quantity; N; protocol | quantity per reference flow |  |
| supply_stock | supplies and unused_supply_return | S=assigned opening+true external net receipts-closing including retained recovered supplies. Choose gross supply INPUT S with separate same-scope matched unused external OUTPUT OR consumed-only INPUT S-return omitting that same outward exchange. Internal recovery is not receipt; no numerical S+return input,double deduction,unrelated negative input or removal of waste/spill upstream burden. | opening; true external net receipts; closing including retained recovery; matched same-scope return; representation; cp_materials | nonduplicated supplied/returned quantity |  |
| fullscope_share | resources/assets/providers/freight | Compatible-period resource attribution uses cohort physical driver/all-user driver on complete actual scope. Asset equivalent uses compatible cohort driver/complete lifetime driver across all users/periods with full manufacture,maintenance/cleaning,replacements and EOL. Evidence observed life or history plus sourced remaining use/termination,units,uncertainty,sensitivity/update. Complete external provider is an alternative to covered own resources/assets,not another additive burden. | actual period/resource; cohort/all-user/lifetime drivers/units; history/remainder/termination sources; scope owner; cp_assets | attributed resources and full-life asset equivalents |  |
| original_kit_demand_loss | commodity outside service | ALL finished furniture/component/hardware and inherited packaging manufacture,including lost commodity upstream,is excluded from service exchanges. Before whole-chain completeness,integrate the complete compatible released flatpack-kit baseline and quantified original-gate assigned demand/state change/whole-part loss,other exits,owner/already-included coverage exactly once outside this add-on. Actual handling and receiving treatment of real losses remain inside once. Reconcile attributed opening,net receipts,buyer returns,closing,accepted transfers,supplier returns,other exits,actual whole/part discard and retained usable parts without double counting parent and children. Internal quarantine/incomplete movements are not external exits. Quantify original finished-kit demand/loss and state conversion by actual package/component material/mass/tare evidence,owner/existing loss coverage and actual integration result outside service. Raw wood/board alone omits finished parts,coatings,hardware and packaging. | original finished dataset/gate; assigned demand quantity/unit/state; kit/child/part fates; material/net/tare conversion/source; other exits/coverage/owner/integration result; cp_kits | quantified original-gate finished demand/loss burden outside service |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_net_kit_mass | nonexchange kit physical mass | Net complete-kit mass = sum over actual unique physical child-package instances of (gross package mass - actual original-package tare),each converted once to compatible kg by its evidenced factor/unit/source. Use either per-instance readings OR documented total expanded to unique instances,never multiply an already-total mass by package quantity. Net kit includes actual hardware/mixed finished components,not only board. Parent kit and constituent component/material views are not added again; missing instance prevents a complete-kit mass claim until resolved. | unique physical package instance; each/total flag; gross/tare; native mass/conversion units/factor/source; component/hardware inclusion; cp_kits | nonduplicated net finished-kit kg,nonexchange stock audit |  |
| calc_original_assignment | original commodity gate outside service | If direct assigned source quantity is actually measured/traced,use that quantity/unit/state/source and direct-assignment evidence. Otherwise assigned source quantity = actual original-gate quantity * compatible source cohort driver / source all-exit driver,with declared allocation method/source,positive complete denominator,units and exclusive exit coverage. Do not add direct and allocated representations. Convert whole/partial component losses to the same actual finished-kit gate using measured conversion/state sources; source demand and already-covered loss integrate once outside service. | original gate quantity/unit/state/source; direct assignment evidence OR allocation method/source/cohort and all-exit drivers/units; assigned quantity source; source conversions; cp_kits | reproducible attributed original-gate commodity quantity,not service exchange |  |
| calc_packed_freight | assigned_freight | For each actual leg,freight per reference = sum [(actual packed payload in native load unit * evidenced load-to-kg factor) * (actual distance * evidenced distance-to-km factor) * actual attribution share] / positive N. Establish packed payload by measured complete packed cargo,or measured gross load minus vehicle/noncargo tare with declared tare role; retain factory and added cargo packaging in payload. Each factor/share has compatible unit/basis/source and all-user driver evidence where allocated. Never add kit parent and child loads,substitute assembled dimensions/net board mass,or repeat carrier-owned included resources. | actual gross/vehicle-noncargo tare or packed payload/state; native load/distance; conversion factors/units/sources; actual share/all-user drivers; N; cp_transport | assigned kg*km per service reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all exchanges | Confirm each actual concrete identity,state/gate,property/unit and medium before final use; expand actual configuration-dependent rows. | Full detail/support proof |
| quality_kit | commodity | Exact configuration and parent/package/component/hardware mapping with measured net/tare/material/moisture state and real exclusive whole/partial disposition; no manufacturer example defaults. | Bill-of-components/packages,actual weights and receiver sources |
| quality_complete | all duties | Complete actual resource/provider/carrier/full-life asset/receiver scope once and complete original-kit commodity demand/loss integration outside service with uncertainty/update. | Original gate/conversion/coverage/integration and meter/lifetime/receiver evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| handling_electricity | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `handling_electricity` under `cp_power`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_power`; actual source-linked native records |
| housekeeping_water | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `housekeeping_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| actual_cleaning_supplies | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_cleaning_supplies` under `cp_materials`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_materials`; actual source-linked native records |
| added_shipping_materials | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_shipping_materials` under `cp_materials`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_materials`; actual source-linked native records |
| outsourced_jobs | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `outsourced_jobs` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| shared_life_assets | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_life_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| assigned_freight | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `assigned_freight` under `cp_transport`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_transport`; actual source-linked native records |
| unused_supply_return | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_supply_return` under `cp_materials`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_materials`; actual source-linked native records |
| discarded_whole_kits | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_whole_kits` under `cp_kits`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_whole_kits_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_kits`; actual source-linked native records |
| separated_furniture_parts | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separated_furniture_parts` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| actual_pack_waste | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_pack_waste` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| spent_housekeeping_solids | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `spent_housekeeping_solids` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| contained_cleanup_water | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_cleanup_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| actual_direct_substances | bedside_kit_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_direct_substances` under `cp_species`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_species`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### handling_electricity

Meter actual electric lifting,picking,lighting and warehouse records equipment,including assigned idle/cleanup. Do not infer assembly-tool or active climate loads from a flatpack label.

Residual inventory requirement after the independently identified cases `handling_electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual electricity for ambient furniture-kit storage and handling
- Flow property / unit: Energy / kWh
- Amount rule: Attributed actual electricity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Require actual period/device meter coverage and physical cohort/all-user drivers,not a manufacturer kit weight converted to energy.

#### housekeeping_water

Only evidenced warehouse/equipment cleaning; no furniture washing,humidifying,steam or consumer wipe-clean instruction is prescribed. Actual environmental abstraction needs its distinct native source.

Residual inventory requirement after the independently identified cases `housekeeping_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual supplied water for premises housekeeping
- Flow property / unit: Volume / m3
- Amount rule: Assigned measured water / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need source,use and physical outlet/retention evidence. Board moisture or package dampness is not a measured water supply,effluent or evaporation amount.

#### actual_cleaning_supplies

Specify actual premises-cleaning formulations,wipes,absorbents and filters only when used,with native supply units and material/composition basis. No furniture polish,glue,wall fixings or repair material is introduced by default.

Residual inventory requirement after the independently identified cases `actual_cleaning_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual cleaning preparations and consumables supplied here
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual native cleaning supply / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need supply/use/returns,formulation/active/carrier or dry-material basis and conversion/density/temperature sources; do not add mixture and its components twice.

#### added_shipping_materials

Only actual new outerwrap,edge guards,labels or shipping cases for this service. Factory cartons,padding,instructions,hardware bags and any included fixing kit inherit commodity production outside this service; a rescan is not repacking.

Residual inventory requirement after the independently identified cases `added_shipping_materials_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actually added outer dispatch-protection materials
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual new outer material / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need actual Count/Area/Length/Mass stock and material/tare/conversion sources; no replacement carton or protection mass per cabinet without evidence.

#### outsourced_jobs

A Count job requires a real contractual physical completion gate and complete resource/asset scope. Actual native mass/hour/area-time/freight providers require their corresponding concrete exchange,not invoice-to-Count conversion.

- Identity requirement: Actual completed counted external furniture-handling jobs
- Flow property / unit: Count / Item(s)
- Amount rule: Assigned actual completed jobs / N; cp_provider.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need quantity/unit/completion records and complete included electricity,assets,carrier/treatment scope and overlap owner; an order is not automatically a provider job.

#### shared_life_assets

Actual buildings,racks,lifting/IT equipment,pallets and reusable crates need manufacture,maintenance/cleaning,replacements and EOL across all users and periods. Retained/returned containers are stock movements,not freshly made assets per trip.

- Identity requirement: Complete-life shared warehouse and reusable handling-asset equivalents
- Flow property / unit: Count / Item(s)
- Amount rule: Attributed complete asset equivalents / N; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Require compatible cohort/lifetime drivers and units,observed history plus evidenced remainder/termination sources,uncertainty,sensitivity/update. A fully covered provider alternative cannot be added to the same own asset.

#### assigned_freight

Record actual leg/load/route and all-consumer shares where allocated. Disclose empty-operation and carrier-owned conditioning plus exclusive commodity/service transport responsibility.

- Identity requirement: Actual assigned transport of furniture packages,supplies and waste
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Assigned actual freight / N; cp_transport.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: Need gross/tare/net load,actual distance and compatible factors/units/sources; do not assume assembled dimensions equal packed cargo or every child package is another complete kit.

#### unused_supply_return

Only same-scope unused supplied materials at actual external transfer gate. Supplier/buyer furniture returns,remaining kit components,retained materials and reusable crates are different stock responsibilities; no automatic substitution credit.

- Identity requirement: Actual matched usable unused service-supply exports
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured matched outward supply / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Require native provenance/state/receiver: gross supply INPUT S and separate matched return OUTPUT OR consumed-only INPUT S-return omitting matched return exchange; never numerical S+return or unrelated negative input.

#### discarded_whole_kits

Only when the actual identified whole kit/package collection is discarded to a documented receiver. A lost fitting,one damaged child package,quarantine or buyer return does not establish all-part waste. Whole-kit mass must exclude those same parts separately counted elsewhere.

- Identity requirement: Actual discarded whole packaged furniture-kit collections
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured whole-kit waste / N; cp_kits.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kits`

Range evidence need: Need exact included packages/components,net product/pack/tare,moisture where relevant,actual disposition and compatible original finished-kit loss owner/conversion. No default all-wood or wholekit loss from missing hardware.

#### separated_furniture_parts

Expand only real nonusable board,wood,coated/laminated parts,metal/plastic hardware or collected debris with actual state/material/receiver. No routine sawing,sanding,repair or disassembly is prescribed; useful remaining parts are not automatically waste.

- Identity requirement: Actual separated furniture components and collected accidental residues
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual component waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual component wet/dry/material fractions and bonded layers,origin/loss link,receiver/treatment and whole-part exclusions. Composite board is not dry solid wood nor evidence of chemical release.

#### actual_pack_waste

Only packaging actually removed and transferred at this boundary. Inherited packing production remains commodity upstream; actual removal/transport/treatment occurs once inside service. Normal wholesale does not automatically discard each factory package.

Residual inventory requirement after the independently identified cases `actual_pack_waste_paper_pack`; `actual_pack_waste_metal_pack`; `actual_pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separated factory or additional package waste
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/native mass/tare/contamination and real receiving recovery/treatment,excluding packaging already in whole-kit waste; collection alone does not earn recycling credit.

#### spent_housekeeping_solids

Actual supplied cleaning materials and retained contamination only where used and collected. Retained fluid,debris and packaging fractions describe this stream,not additive duplicate liquid/part/pack outputs. Receiver/transport/treatment is recorded once.

- Identity requirement: Actual spent wipes,absorbents,filters and mixed housekeeping solids
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured collected spent solid / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need native supply link,dry material/retained-fluid quantity/unit/basis/source,whole stream gross/tare/net and explicit other-stream exclusion. No universal wipes or filter-change quantity.

#### contained_cleanup_water

Only real collected housekeeping liquid with actual contamination and receiving treatment scope; not furniture-washing effluent by assumption. Wet solid and its contained-fluid view must be exclusive physical outlets.

- Identity requirement: Actual contained warehouse-cleaning liquid at receiver gate
- Flow property / unit: Volume / m3
- Amount rule: Assigned measured contained cleanup liquid / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need actual volume/density/temperature units,composition basis,stream exclusions and receiver/treatment/transport; no moisture or package mass deficit becomes liquid waste.

#### actual_direct_substances

Identify actual measured or supported direct sources and media. Board resin/coating content,odour,damage or mass/moisture imbalance does not establish formaldehyde,VOC,dust,evaporation or any other release amount.

- Identity requirement: Actual identified direct substances and receiving media
- Flow property / unit: Mass / kg
- Amount rule: Assigned supported actual substance release / N; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`

Range evidence need: Need actual measurement or compatible activity/factor/composition/fate values,units,bases,sources and uncertainty. Complete species-specific factors cannot be multiplied again by component/fate fractions.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_service | Actual title purchase/resale,B2B acceptance,all qualifiers and positive unique N required. Neither finished-kit Count,child-package Count nor hardware piece Count binds the service reference. |  |
| validate_configuration | kit stock | Require manufacturer configuration,required versus separately sold parts,actual parent/child links,package/component quantities and mass/tare/material state; no universal package number or missing-part-to-wholekit loss factor. | ikea-platsa-kit-public |
| validate_chain | commodity outside addon | Original baseline must match actual released finished packaged unassembled kit and include relevant board/wood processing,finish/lamination,part/hardware manufacture,preparation/completeness and original packaging once,assembling missing stages outside service. Assigned original-gate demand/state/loss quantity/unit/basis/conversion/source,exclusive exits,owner/already-covered loss and actual integration result must close. |  |
| validate_scope | all service duties | Actual native units/support and full resource/provider/carrier/full-life asset/receiver coverage are mandatory. No user assembly/wall fix/care process or product operating lifetime becomes merchant data. Extra actual treatment/repair/conditioning needs reviewed expansion. | ikea-platsa-kit-public |
| validate_physical_fates | actual outputs | Require actual mutually exclusive whole/part/material/retained-fluid records and receiver treatment. Stock deficit,odour,product resin content and dampness are not measured waste,formaldehyde,VOC,dust or evaporation. Verify actual species/activity/factor/composition/fate units,bases and sources. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity and quantitative review |
| downstream_use | Ambient physical own-account wholesale add-on for complete released flatpack bedside-kit commodity chain |
| allowed_use | Actual declared manufacturer configuration,package/part/hardware completeness,mixed-material/net/tare/state and commercial acceptance stratum |
| excluded_use | Standalone whole furniture footprint; raw wood/board or furniture manufacture; office/seating; assembly/install/repair/repack or productuse; retail/agency; package/kit-to-service or money proxy |
| required_metadata | All qualifiers; actual parent/child stock and fates; original-kit assigned demand/state/loss conversion/exits/coverage owner/integration; complete resources/assets/providers/carriers/receivers |
| required_quality_disclosure | Unresolved actual identities/support,foreground quantities/Range evidence,configuration/material/state/fate/source limits and lifetime/conversion uncertainty |
| update_trigger | Changed kit/configuration/package/hardware/material,warehouse operation,actual extra treatment,provider/asset/carrier/receiver scope,acceptance or demand/loss conversion evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-furniture | official_guidance | UNSD.CPC3.0 explanatory notes,division61,61041; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Household furniture381 excluding38111and3812; wooden bedroom38170 fits narrower category,classification only. |
| ikea-platsa-kit-public | handbook | IKEA Japan.PLATSA bedside table,Article195.858.03,dated cached public materials/packaging text,page generated2026-04-07; https://www.ikea.com/jp/en/p/platsa-bedside-table-white-kalbaden-lively-pine-effect-s19585803/ | Actual example of complete product parent,multiple component packages and mixed materials; qualitative identity questions only. Dated cached snapshot generated2026-04-07,not a verified current storefront; SG and independently repeated JP access redirected to the product catalogue. No copied package counts/weights/dimensions or user assembly,fixing,care operation defaults. |
