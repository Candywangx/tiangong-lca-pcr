---
pcr_id: pcr.ambient-own-account-wholesale-of-packaged-cotton-bed-linen-sets
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ambient own-account wholesale of packaged cotton bed-linen sets

## 1. Scope and Applicability

This PCR owns the physical ambient warehouse service for manufacturer-released packaged cotton bed-linen sets purchased and resold on own account to business buyers. Intake is the actual released finished/sewn packed-set gate; completion is actual documented buyer acceptance with exact set component and condition qualifiers. Cotton refers to declared actual fibre composition,not an assumed universal purity or net mass.

Exclude filled pillows/duvets and mattresses,cultivation/ginning,spinning,weaving,dyeing/finishing,cutting/sewing,set manufacture,consumer use/laundering,retail,fee agency,active conditioning and deliberate washing/ironing/repair/repacking/reassembly. Actual accidents,incomplete sets and returns are recorded; any real extra operation requires bounded scope review,not an assumed zero.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ambient-own-account-wholesale-of-packaged-cotton-bed-linen-sets |
| classification_refs | CPC3.0:61032; narrower: ambient packaged cotton bed-linen-set own-account service |
| covered_products | Actual accepted physical B2B wholesale consignments of finished packaged cotton bed-linen sets |
| excluded_products | Upstream textile/set manufacture; other household textiles; consumer washing/use; retail/agency; active treatment/repacking |
| representative_product | One accepted commercial consignment with actual set bill-of-components,dimensions,fibre composition,net mass/moisture/tare and package condition |
| production_route | Released packaged-set receipt -> ambient stock/handling/picking -> dispatch -> actual business acceptance with real exceptions |
| market_state | Physical trade service; finished unchanged packaged sets remain nonexchange merchandise |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed ambient own-account packaged cotton bed-linen-set wholesale consignment service |
| How much | 1 Item(s),one unique accepted commercial consignment; no fixed sets,pieces,kg,area or margin conversion |
| How well | Actual manufacturer/SKU component completeness,sizes,fibre/pack state and buyer-agreed quality with recorded exceptions |
| How long or cycle | Actual receipt/holding/picking/dispatch/returns/acceptance periods,assigned idle/cleanup and cutoffs plus full-life asset use |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed ambient own-account packaged cotton bed-linen-set wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | manufacturer_released_sewn_packed_cotton_bedlinen; actual_manufacturer_SKU_set_id; actual_required_components_and_parent_child_links; actual_set_piece_counts_and_component_dimensions; fibre_and_nonfibre_composition_basis; net_textile_mass_moisture_and_primary_tare; actual_package_condition_and_completeness; actual_receipt_holding_dispatch_acceptance_periods; ambient_temperature_humidity_observation_basis; ownership_resale_business_buyer; actual_quality_and_return_disposition; actual_provider_transport_treatment_scope |

N>0 is unique accepted service count after evidenced reversals. Incomplete/failed/quarantined/cross-period activity retains responsible cohort attribution even if no service completes this period.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_service | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Reference output is 1 Item(s),one commercial consignment service,not one bed-linen set. |
| set_piece_dimension | merchandise | Count and actual Length/Area | sets; pieces; actual dimensions | Record actual parent set and component types,counts,sizes/dimension units/methods/sources. Neither fixed piece-per-set nor rectangular nominal area substitutes actual finished component mass. |
| textile_mass_state | merchandise/loss | Mass | kg | Separate actual gross package,primary tare,net textiles,fibre/nonfibre composition and moisture basis/unit/method/source/sample state/time. Measured state conversions are alternate views,not duplicated inputs/losses; moisture deficit is not cotton loss. |
| native_support | all exchanges | actual native property | actual native unit | Actual material/provider/asset units and conversions require their own verified identity/support. No price-to-Count,seedcotton/lint-to-finishedset or genericEnergy substitution. |


## 5. System Boundary

The inventory is an additive physical wholesale service,not a stand-alone bed-linen footprint. Actual manufacturer packaged-set and buyer gates govern quality; the SFERRA consumer guide is qualitative context only. Stock/allocation calculations below are declared PCR methodology,not quantitative manufacturer care factors.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Manufacturer-released finished cotton bed-linen sets already cut,sewn,finished,assembled and packaged as actually supplied |
| starting_condition_role | Nonexchange merchandise stock/throughflow including original finished textiles and primarypack |
| product_classification_scope | Narrower packaged cotton bed-linen-set own-account subset of61032 made-up textiles271 |
| recursive_input_rule | Actual upstream physical providers need complete disjoint gates; do not recursively create same trade or repeat included logistics/assets |
| upstream_dataset_requirement | Complete compatible released sewn finished packed-set commodity baseline outside service; seed cotton,lint or fabric alone lacks actual spinning/weaving/dyeing-finishing/cutting/sewing/set-assembly/packaging stages. Assemble missing relevant stages once. Real resource/provider/receiving datasets require complete native scope |
| disclosure | All qualifiers; set/component/dimension/fibre/net/moisture/tare/stock/period evidence; actual original-gate assigned demand/state/loss conversions,other exits,coverage/owner/integration; full resources/assets/providers/carriers/receivers |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all inventory | Exclude ALL merchandise textile and primarypack manufacture including lost merchandise from service exchanges. Outside this additive service,require a compatible released sewn/finished packed-set baseline with separately quantified original-gate assigned demand/state change/loss,other exits,existing loss coverage and owner integrated once before whole-chain completeness. Actual loss handling and receiving treatment remain service duties once. |  |
| boundary_sets | set/component stock | Declare actual manufacturer bill-of-components,types (such as sheets/pillowcases only when supplied),sizes and fibre/accessory composition. Count a chosen merchandise hierarchy once; do not add full sets to their contained pieces or equate a set/piece with reference service. An incomplete set may retain usable components; no whole-set loss without actual disposition evidence. |  |
| boundary_care | ambient unchanged merchandise | SFERRA consumer care text motivates actual label,moisture/light/ventilation condition questions only. It does not mandate washing,ironing,freezing,unwrapping or replacing factory packs in wholesale. No numerical warehouse regime,detergent dose or product lifetime is imported. | sferra-care-public |
| boundary_extra | actual operations | The selected route has ambient electric handling/stock,not active textile drying,humidity treatment,combustion,repair,sewing,reassembly or repacking. Actual additional operation/fuel/working fluid requires explicit bounded route review and complete exchanges,not omission or zero. Carrier-owned conditioning and overlap belong in actual carrier scope. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| packaged_bedlinen_trade | Ambient packaged cotton bed-linen stock and own-account wholesale | required | Actual released packaged-set ownership purchase/resale and physical B2Bacceptance | One receiving/stock/picking/dispatch responsibility; batch order/cleanup jobs share warehouse periods and assets | `accepted_service` |

Normal packaged sets stay unchanged. Condition observation and added outer order materials do not create textile manufacture,preservation or independent grading nodes. Actual incomplete/return/discard paths remain in this node; expand conditional real material/provider/waste/substance/native identities instead of treating missing evidence as zero.

### Process: Ambient packaged cotton bed-linen stock and own-account wholesale (`packaged_bedlinen_trade`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`warehouse_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Assigned metered electricity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Need actual period meters and causal occupancy/handling/all-consumer drivers with scope; no energy per set from product labels.

###### Actual liquid treated tap-water supply (`premises_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Assigned measured supplied volume / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need source/meter,use and measured contained/direct/retained paths; textile moisture observation does not quantify water intake or evaporation.

###### Actual independently recorded synthetic detergent supply (`housekeeping_materials_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Assigned native preparation supply / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need actual receipts,use,dilution and density/temperature/unit sources; preparation and contained active views cannot become duplicate inputs.

###### Actual separately recorded polyethylene packaging film (`additional_outer_packing_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual new packing supply / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Require native count/area/length/mass,material,stock/tare and actual conversion; no mandatory replacement wrapping or fixed bag per set.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed ambient own-account packaged cotton bed-linen-set wholesale consignment service (`accepted_service`)

One unique completed commercial B2B ownership-resale consignment accepted for declared packaged sets and their actual component completeness/size/quality. Merchandise set count and component piece counts are separate.

- Selected flow: Completed ambient own-account packaged cotton bed-linen-set wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sets`

Range evidence need: Need actual accepted gate and manufacturer/SKU,set components/sizes,fibre composition,net textile mass/moisture/tare and period/condition; no fixed pieces per set or set=service conversion.

##### Waste flows

###### Discarded packaged cotton bed-linen set (`discarded_packaged_sets_atomic_case`)

Conditional on independently recorded actual Discarded packaged cotton bed-linen set. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_packaged_sets`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded packaged cotton bed-linen set
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured whole-package waste / N; cp_sets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sets`

Range evidence need: Need set/piece genealogy,actual textile/pack/tare mass and moisture/disposition,plus original finished-gate loss conversion/owner; missing pillowcase does not prove every component was lost.

###### Actual separately collected paper packaging waste (`separated_pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual removal/contamination,tare,native units and recovery/treatment gate; every received set does not imply a discarded wrapper or recycling credit.


###### Actual separately collected metal packaging waste (`separated_pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual removal/contamination,tare,native units and recovery/treatment gate; every received set does not imply a discarded wrapper or recycling credit.


###### Actual separately collected plastic packaging waste (`separated_pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual removal/contamination,tare,native units and recovery/treatment gate; every received set does not imply a discarded wrapper or recycling credit.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_accepted | all inventory | Normalize actual assigned quantities by positive unique accepted N once,using evidenced physical cohort/period drivers. Include failed orders,incomplete/quarantined stock,returns,idle/cleanup and unfinished-period duties; no activity deletion when current N=0. Do not use sales value or margin as physical service count. |  |
| allocation_merchandise | nonexchange stock | Close actual assigned opening,net receipts,buyer returns,closing,accepted transfers,supplier returns,other external exits and discard by exclusive set/component states. Incomplete/quarantine movements remain internal. Distinguish lost component textile from remaining usable pieces,original tare and moisture/state change; use actual original finished-set gate quantities/conversions,coverage owner and completed once-only commodity integration. Seed cotton,lint or woven fabric alone omits finished set stages. |  |
| allocation_materials | new supplies and return | Let S=assigned opening+true external net receipts-closing including retained recovered materials. Gross supply INPUT S with separate same-scope matched usable return OUTPUT OR consumed-only INPUT S-return omitting that outward exchange. No numerical S+return input,double deduction,internal recovery as new receipt or removal of nonreturned waste/spill upstream supply burden. |  |
| allocation_shared | resources/assets/providers | For compatible measured periods,use cohort physical driver/all-consumer driver on complete resource scope. Full-life asset equivalents use compatible cohort driver/complete lifetime driver across all users/periods,with manufacture,maintenance/cleaning,replacements and EOL. Establish observed life or history plus evidenced remainder/termination,source/units,uncertainty,sensitivity and update. Complete provider representation replaces overlapping own scope rather than adding it. |  |
| allocation_outlets | actual waste and direct releases | Use actual mutually exclusive whole-package or separated textile/packing/cleanup quantities and actual receiver,transport/treatment once. Wet stream and its moisture/fibre/material fractions are composition views,not extra additive outlets. No automatic recycling/substitution credit or waste deduction from supply. Direct species require actual medium and supported fate; stock/moisture deficit is unresolved until explained. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sets | packaged_bedlinen_trade | completed consignment and nonexchange set/component stock | Original physical event,meter/scope and source ledger | consignment_id; lot_id; manufacturer; SKU; set_id; component_id; component_type; required_components; actual_component_count; set_count; piece_count; count_unit; parent_child_links; dimensions; dimension_unit; dimension_method; dimension_source; fibre_composition; composition_basis; composition_source; accessory_material; textile_net_mass; gross_pack_mass; primary_tare; mass_unit; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_state; sample_time; supplier_evidence_date; temperature; temperature_unit; humidity; humidity_unit; observation_time; opening; gross_receipts; receipt_tare; net_receipts; buyer_returns; closing; accepted_transfer; supplier_returns; incomplete_internal; quarantine_internal; other_exits; actual_discard; disposition; actual_fate; receipt_time; dispatch_time; acceptance_time; ownership_gate; buyer_gate; original_gate_dataset_id; original_gate_reference; assigned_source_quantity; assigned_source_unit; source_gate_state; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_basis; loss_conversion; loss_conversion_unit; loss_conversion_source; state_change_evidence; burden_owner; already_included_loss_coverage; separate_pack_fate; integration_result; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Link actual accepted consignment to manufacturer set bill-of-components and stock movements; measure actual dimensions/fibre/net/moisture/tare and record incomplete/usable return/discard states. Translate actual whole/partial loss to compatible original sewn packed gate,not assumed whole-set or lint loss.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); sets; pieces; kg; declared dimensions and condition units | each actual event and relevant meter period | complete assigned periods/cutoffs and lifetime evidence | actual single-node duties and all shared consumers | per reference flow | Original/calibration records,compatible units/conversion/state sources,complete responsibility and uncertainty |
| cp_power | packaged_bedlinen_trade | actual electricity and period shares | Original physical event,meter/scope and source ledger | meter_id; start; end; opening_reading; closing_reading; energy_unit; device_scope; idle_cleanup; cohort_driver; cohort_driver_unit; all_consumer_driver; all_consumer_driver_unit; attribution_share; share_source; provider_coverage; source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter complete operation periods and compatible physical cohort/all-consumer drivers,including idle/cleanup and unfinished responsibility. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | each actual event and relevant meter period | complete assigned periods/cutoffs and lifetime evidence | actual single-node duties and all shared consumers | per reference flow | Original/calibration records,compatible units/conversion/state sources,complete responsibility and uncertainty |
| cp_water | packaged_bedlinen_trade | actual water and physical outlets | Original physical event,meter/scope and source ledger | source_id; period; supplied_volume; retained_volume; collected_volume; volume_unit; outlet; receiver; composition; composition_basis; composition_source; density; density_unit; temperature; temperature_unit; evaporation_evidence; fate_basis; fate_source; treatment_coverage; transport_coverage; source; attribution_share; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect meter/outlet sampling records and distinguish supplied water,collected liquid,actual direct media and supported retention/evaporation,without deficit inference. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3; actual composition units | each actual event and relevant meter period | complete assigned periods/cutoffs and lifetime evidence | actual single-node duties and all shared consumers | per reference flow | Original/calibration records,compatible units/conversion/state sources,complete responsibility and uncertainty |
| cp_materials | packaged_bedlinen_trade | new service supplies and matched external returns | Original physical event,meter/scope and source ledger | material_id; SKU; formulation; active_fraction; carrier_fraction; fraction_basis; fraction_source; opening; gross_receipts; receipt_tare; net_receipts; internal_issue; internal_recovery; closing_including_recovered; actual_use; matched_unused_external_return; source_scope_match; receiver; stock_representation; native_unit; conversion_factor; conversion_unit; density; density_unit; temperature; temperature_unit; conversion_source; fate; fate_basis; source; attribution_share; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Maintain each actual native supply stock and return provenance; use gross supplied S with independent matched outward return OR consumed-only matched S-return with corresponding outward exchange omitted. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native supply units | each actual event and relevant meter period | complete assigned periods/cutoffs and lifetime evidence | actual single-node duties and all shared consumers | per reference flow | Original/calibration records,compatible units/conversion/state sources,complete responsibility and uncertainty |
| cp_provider | packaged_bedlinen_trade | completed external physical jobs and overlap | Original physical event,meter/scope and source ledger | provider_id; job_id; native_quantity; native_unit; completion_gate; completion_time; operating_coverage; electricity_coverage; full_asset_coverage; maintenance_EOL_coverage; transport_empty_coverage; treatment_coverage; upstream_dataset; overlap_owner; cohort_driver; all_consumer_driver; driver_unit; attribution_share; source; N | Verify actual physical completion/native quantity and complete supply boundary before excluding own overlapping resources; invoice cost is not quantity. | Item(s); actual provider units | each actual event and relevant meter period | complete assigned periods/cutoffs and lifetime evidence | actual single-node duties and all shared consumers | per reference flow | Original/calibration records,compatible units/conversion/state sources,complete responsibility and uncertainty |
| cp_assets | packaged_bedlinen_trade | full-life shared/reusable asset responsibility | Original physical event,meter/scope and source ledger | asset_id; asset_native_unit; manufacture_scope; maintenance_cleaning_scope; replacement_scope; EOL_scope; owner; provider_overlap; cohort_driver_identity; cohort_driver; cohort_driver_unit; lifetime_driver_identity; lifetime_driver; lifetime_driver_unit; all_user_driver; all_period_scope; observed_history; observed_unit; evidenced_remaining_use; remainder_unit; remainder_source; termination_basis; uncertainty; sensitivity; update_evidence; source; N | Use compatible complete-life all-user driver attribution,observed life or history plus evidenced remaining use/termination with sources and uncertainty; retain real reuse/return stock. | Item(s); actual compatible driver units | each actual event and relevant meter period | complete assigned periods/cutoffs and lifetime evidence | actual single-node duties and all shared consumers | per reference flow | Original/calibration records,compatible units/conversion/state sources,complete responsibility and uncertainty |
| cp_transport | packaged_bedlinen_trade | actual leg/load and complete carrier scope | Original physical event,meter/scope and source ledger | leg_id; origin; destination; carrier; period; gross_load; load_tare; net_load; load_unit; distance; distance_unit; load_conversion_factor; load_conversion_unit; load_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; empty_run_coverage; carrier_conditioning_coverage; commodity_service_owner; cohort_driver; all_consumer_driver; driver_unit; attribution_share; share_source; source; N | Match actual load/distance/conversions and all-user shares to each leg scope,including empty operation and carrier conditioning if present; each responsibility once. | kg*km; actual native leg units | each actual event and relevant meter period | complete assigned periods/cutoffs and lifetime evidence | actual single-node duties and all shared consumers | per reference flow | Original/calibration records,compatible units/conversion/state sources,complete responsibility and uncertainty |
| cp_waste | packaged_bedlinen_trade | exclusive whole/part solids and receiver | Original physical event,meter/scope and source ledger | event_id; lot_id; set_id; component_id; material; whole_or_part; count; count_unit; wet_mass; dry_mass; mass_unit; fibre_fraction; nonfibre_fraction; fraction_basis; fraction_source; moisture; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_state; sample_time; supplied_material_link; dry_cleaning_material_mass; retained_fluid_quantity; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; contaminant_composition_basis; stream_exclusion_ids; stream_exclusion_quantity; stream_exclusion_unit; contamination; gross; tare; net; origin; actual_fate; receiver; transfer_gate; transport_coverage; recovery_treatment_scope; commodity_loss_link; attribution_share; all_consumer_driver; driver_unit; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Weigh actual separate textiles/packing/cleanup and their contained composition without overlap with whole sets; evidence physical receiver and full transport/treatment. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual component/count units | each actual event and relevant meter period | complete assigned periods/cutoffs and lifetime evidence | actual single-node duties and all shared consumers | per reference flow | Original/calibration records,compatible units/conversion/state sources,complete responsibility and uncertainty |
| cp_species | packaged_bedlinen_trade | actual direct substances/media | Original physical event,meter/scope and source ledger | event_id; source_process; substance; receiving_medium; measured_release; release_unit; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; component_fraction; fraction_basis; fraction_source; fate_fraction; fate_basis; fate_source; measurement_source; uncertainty; attribution_share; all_consumer_driver; driver_unit; N | Identify real direct source/substance/medium then measure or apply compatible activity-factor/composition/fate evidence once. No stock deficit or routine-laundry microfibre factor substitutes actual wholesale release. | kg; actual compatible activity units | each actual event and relevant meter period | complete assigned periods/cutoffs and lifetime evidence | actual single-node duties and all shared consumers | per reference flow | Original/calibration records,compatible units/conversion/state sources,complete responsibility and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | Actual assigned quantity / positive unique N once; accepted_service is 1 Item(s). | assigned quantity; N; linked protocol | exchange quantity per reference flow |  |
| supply_stock | materials and usable_material_return | Let S=assigned opening+true external net receipts-closing including retained recovered materials. Gross supply INPUT S with separate same-scope matched usable return OUTPUT OR consumed-only INPUT S-return omitting that outward exchange. No numerical S+return input,double deduction,internal recovery as new receipt or removal of nonreturned waste/spill upstream supply burden. | opening; external net receipts; closing including retained recovery; same-scope matched return; representation; cp_materials | nonduplicated supply and outward-return quantities |  |
| shared_lifetime | power/assets/providers/freight | For compatible measured periods,use cohort physical driver/all-consumer driver on complete resource scope. Full-life asset equivalents use compatible cohort driver/complete lifetime driver across all users/periods,with manufacture,maintenance/cleaning,replacements and EOL. Establish observed life or history plus evidenced remainder/termination,source/units,uncertainty,sensitivity and update. Complete provider representation replaces overlapping own scope rather than adding it. | meter periods; resource scope; cohort/all-user/lifetime drivers/units; history/remainder/termination sources; cp_assets | attributed resources/full-life asset equivalents |  |
| original_set_demand_loss | commodity outside service | Exclude ALL merchandise textile and primarypack manufacture including lost merchandise from service exchanges. Outside this additive service,require a compatible released sewn/finished packed-set baseline with separately quantified original-gate assigned demand/state change/loss,other exits,existing loss coverage and owner integrated once before whole-chain completeness. Actual loss handling and receiving treatment remain service duties once. Close actual assigned opening,net receipts,buyer returns,closing,accepted transfers,supplier returns,other external exits and discard by exclusive set/component states. Incomplete/quarantine movements remain internal. Distinguish lost component textile from remaining usable pieces,original tare and moisture/state change; use actual original finished-set gate quantities/conversions,coverage owner and completed once-only commodity integration. Seed cotton,lint or woven fabric alone omits finished set stages. | original finished-set dataset/gate; assigned demand; set/component state/quantity; dimensions/fibre/net/moisture/tare; loss unit/conversion/source; other exits/coverage/owner/integration result; cp_sets | quantified original finished-set demand/loss burden outside service |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_actual_identity | all inventory | Verify actual concrete flow,state/gate,property/unit and medium before final use; configuration-dependent umbrellas expand by actual identity. | Full details/support proof |
| quality_sets | merchandise | Actual set/component completeness,size,composition and measured net/moisture/tare with exclusive dispositions; no universal set recipe or fibre yield. | Manufacturer bill-of-components,measured lot and receiver records |
| quality_scope | all responsibilities | Complete commodity integration outside service and actual native operating/provider/full-life asset/carrier/receiving scope once,with uncertainty and updates. | Original gate/conversion/coverage,meter/lifetime/receiver/integration proof |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_electricity | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `warehouse_electricity` under `cp_power`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_power`; actual source-linked native records |
| premises_water | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `premises_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| housekeeping_materials | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `housekeeping_materials` under `cp_materials`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_materials`; actual source-linked native records |
| additional_outer_packing | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `additional_outer_packing` under `cp_materials`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_materials`; actual source-linked native records |
| external_physical_jobs | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `external_physical_jobs` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| complete_life_assets | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `complete_life_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| assigned_freight | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `assigned_freight` under `cp_transport`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_transport`; actual source-linked native records |
| usable_material_return | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_material_return` under `cp_materials`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_materials`; actual source-linked native records |
| discarded_packaged_sets | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_packaged_sets` under `cp_sets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_packaged_sets_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_sets`; actual source-linked native records |
| separated_textile_waste | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separated_textile_waste` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| separated_pack_waste | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separated_pack_waste` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| contained_cleanup_liquid | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_cleanup_liquid` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| spent_housekeeping_solids | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `spent_housekeeping_solids` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| actual_direct_substances | packaged_bedlinen_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_direct_substances` under `cp_species`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_species`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### warehouse_electricity

Include actual electric lifting,picking,lighting,stock terminals and idle/cleanup periods attributable to the route. Ordinary ambient storage is not evidence of an active drying or climate-treatment process.

Residual inventory requirement after the independently identified cases `warehouse_electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Metered electricity for ambient bed-linen warehouse operations
- Flow property / unit: Energy / kWh
- Amount rule: Assigned metered electricity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Need actual period meters and causal occupancy/handling/all-consumer drivers with scope; no energy per set from product labels.

#### premises_water

Water is for evidenced premises/equipment cleaning only; normal packaged merchandise receives no laundering,wetting or steam treatment here. Any environmental intake uses its real source exchange.

Residual inventory requirement after the independently identified cases `premises_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual water supplied for warehouse housekeeping
- Flow property / unit: Volume / m3
- Amount rule: Assigned measured supplied volume / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need source/meter,use and measured contained/direct/retained paths; textile moisture observation does not quantify water intake or evaporation.

#### housekeeping_materials

Record actual commercial material/SKU,active/carrier basis and actually supplied wipes,absorbents or filters in their native units,without prescribed use. Do not import consumer laundry detergent,softener,bleach or care-guide doses into unopened bed-linen trade.

Residual inventory requirement after the independently identified cases `housekeeping_materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual supplied premises-cleaning preparations
- Flow property / unit: Mass / kg
- Amount rule: Assigned native preparation supply / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need actual receipts,use,dilution and density/temperature/unit sources; preparation and contained active views cannot become duplicate inputs.

#### additional_outer_packing

Only new outer cases,protective sheets,labels or ties actually supplied for this service. Finished set wrapping,inserts and sewn care labels inherited from the factory belong to commodity manufacture outside the service.

Residual inventory requirement after the independently identified cases `additional_outer_packing_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual additional order-consolidation packing materials
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual new packing supply / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Require native count/area/length/mass,material,stock/tare and actual conversion; no mandatory replacement wrapping or fixed bag per set.

#### external_physical_jobs

Only completed physically defined Count jobs at actual contract gate with complete resources/assets. Providers measured by mass,time,area-time or transport need their corresponding native identity instead.

- Identity requirement: Actual complete counted outsourced bed-linen handling jobs
- Flow property / unit: Count / Item(s)
- Amount rule: Assigned completed native jobs / N; cp_provider.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need provider resource/asset/transport/treatment coverage and completion units,not procurement price or an order automatically equated with one job.

#### complete_life_assets

Cover actual buildings,racks,handling/IT equipment and reusable pallets/containers across all consumers; include manufacture,maintenance/cleaning,replacements and end-of-life with unique owner.

- Identity requirement: Whole-life warehouse,handling and reusable-container equivalents
- Flow property / unit: Count / Item(s)
- Amount rule: Attributed complete asset equivalents / N; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Require compatible all-user cohort/lifetime driver identities/units,observed history and evidenced remainder/termination/source,sensitivity/update; actual return trips do not create another asset.

#### assigned_freight

Use actual legs with complete carrier/load/empty coverage and any carrier-owned conditioning. State which inbound/outbound leg belongs to commodity or service to prevent duplicated logistics.

- Identity requirement: Actual assigned bed-linen,supply and waste freight
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Assigned actual load-distance / N; cp_transport.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: Need measured gross/tare/net load,route distance and conversion factors/units/sources plus actual share/all-user drivers,not nominal capacity or guessed kilometres.

#### usable_material_return

Only actual unused same-scope service materials transferred to external owner. Usable bed-linen buyer/supplier returns remain merchandise stock; recovered retained materials and reusable assets are not this export.

- Identity requirement: Actual matched unused added materials returned externally
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured usable external return / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need native same-scope provenance,quantity/state and receiver; gross supply S plus separate outward return OR net matched supply S-return omitting return exchange,without a second credit.

#### discarded_packaged_sets

Only actual documented waste decisions and receiver/treatment. Incomplete set,stain,damaged packaging,return or quarantine is not automatically whole-set disposal. Whole packed waste must exclude the same separated textiles/packaging.

- Identity requirement: Actually discarded packaged sets at waste handoff
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured whole-package waste / N; cp_sets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sets`

Range evidence need: Need set/piece genealogy,actual textile/pack/tare mass and moisture/disposition,plus original finished-gate loss conversion/owner; missing pillowcase does not prove every component was lost.

#### separated_textile_waste

Actual separated damaged components or collected spill/tear residues only. No routine cutting,repair,reassembly or fibre shedding is assumed. Expand actual fibre/material/state and receiver,excluding already-counted whole sets.

- Identity requirement: Actual separated bed-linen textiles and collected accidental residues
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated textile waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Require component quantities,net mass/fibre fractions/moisture method/state and actual receiving route; dry-mass change is not automatically dry cotton loss or atmospheric fibre.

#### separated_pack_waste

Only actual packaging physically removed at this boundary with material/tare and receiver. Inherited primarypack manufacture stays with commodity upstream; its actual service handling/treatment occurs here once.

Residual inventory requirement after the independently identified cases `separated_pack_waste_paper_pack`; `separated_pack_waste_metal_pack`; `separated_pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separated inherited and additional packing wastes
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual removal/contamination,tare,native units and recovery/treatment gate; every received set does not imply a discarded wrapper or recycling credit.

#### contained_cleanup_liquid

Actual collected premises-cleaning stream,not consumer laundry wastewater. Record real textile/cleaner contamination and actual receiver; wet solid and its contained liquid/component view must not be double outlets.

- Identity requirement: Actual collected warehouse-cleaning liquid to treatment
- Flow property / unit: Volume / m3
- Amount rule: Assigned measured collected liquid / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need volume/density/temperature with units,composition basis and receiving treatment/transport scope; fabric moisture deficit does not establish wastewater.

#### spent_housekeeping_solids

Only actually used and collected nonmerchandise cleaning materials,filters or mixed housekeeping solids. Record actual retained liquid,textile fibre,packing and chemical contamination as composition views; exclude matching whole/part solid and collected-liquid outlets already counted. Actual receiver/transport/treatment once,without assumed recycling credit.

- Identity requirement: Actual spent housekeeping wipes,absorbents and other collected solids
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured spent housekeeping solid mass / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need native supplied-material provenance,dry material/retained liquid/contamination basis and actual whole-stream gross/tare/net,stream exclusions,receiver and treatment. No default wipes/filter replacement or moisture deficit creates this waste.

#### actual_direct_substances

Only real measured or supported direct sources such as actual cleanup releases,with named substance/medium. Dust/microfibre,moisture vapour or chemical release is not inferred from textile ownership,wear/laundering literature or stock deficit.

- Identity requirement: Actual identified direct substances and receiving media
- Flow property / unit: Mass / kg
- Amount rule: Assigned supported actual substance release / N; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`

Range evidence need: Need measurement or compatible activity/factor/composition/fate values,units,bases and sources; complete species factors are not multiplied twice by composition/fate.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_service | Require unique actual commercial B2B acceptance,all qualifiers and positive N. Set count,piece count,pallet move,quarantine and canceled order do not automatically complete one reference service. |  |
| validate_set_identity | merchandise | Verify actual set bill-of-components,sizes,counts,fibre/nonfibre/net mass/moisture/tare and package condition at stated gate; no universal two/four-piece set,area-to-mass or cotton-lint-to-set conversion. |  |
| validate_scope | all duties | No consumer prewash/iron/freezer/wrapping instruction becomes an operation or input. Actual added treatment/repair/repacking needs reviewed expanded route; own/provider/carrier/full-life asset/receiving scopes must be complete and nonoverlapping. | sferra-care-public |
| validate_chain | commodity outside service | Original released sewn finished packed-set baseline must contain missing spinning/weaving/dyeing-finishing/cutting/sewing/assembly/primarypack stages once outside service,as actually relevant. Match assigned demand,state change and original-gate whole/partial loss amount/unit/conversion/source,other exits,owner/already-covered loss and actual integration result. |  |
| validate_native_fates | all exchanges | Verify native flow/property/unit support and quantitative provenance. Actual waste receiver/treatment and direct substance/medium/factor/composition/fate evidence are required; no invented fibre shedding,evaporation or whole-set discard from quality status. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual quantity and concrete identity review |
| downstream_use | Physical ambient own-account wholesale add-on to complete released packaged cotton bed-linen commodity chain |
| allowed_use | Actual declared set components/sizes/fibre/net/moisture/tare,package condition,period and accepted B2Broute |
| excluded_use | Standalone whole-bedlinen footprint; cotton/textile/set manufacture; consumer care/use; other household textiles; active treatment/repair/repacking; retail/agency; set=service or price proxy |
| required_metadata | All qualifiers,actual set/component stocks and losses,original finished-gate assigned demand/state/conversion/coverage/owner/integration,full resource/asset/provider/carrier/receiver boundaries |
| required_quality_disclosure | Unresolved concrete identities/support,foreground quantities/Range evidence,component/moisture/state/fate limits,source consumer context and lifetime/conversion uncertainty |
| update_trigger | Changed set bill-of-components,size/fibre/pack,warehouse operation,actual treatment,provider/asset/carrier/receiver scope,acceptance or demand/loss conversion evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-household | official_guidance | UNSD.CPC3.0 explanatory notes,division61,61032; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 271made-up textiles included in household-linen own-account wholesale; classification only. |
| sferra-care-public | handbook | SFERRA.Linen Care Guide,public manufacturer consumer text; https://www.sferra.com/a/page/linen-care-guide | Qualitative item-label,dry/ventilation/light condition questions. Consumer laundering/ironing/freezer/repacking/dose/lifetime advice is not a wholesale operation,default or quantitative factor. |
