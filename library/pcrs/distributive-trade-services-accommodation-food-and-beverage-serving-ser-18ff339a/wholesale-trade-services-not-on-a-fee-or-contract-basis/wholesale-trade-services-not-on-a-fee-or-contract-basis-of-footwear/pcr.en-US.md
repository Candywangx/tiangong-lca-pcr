---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-footwear
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of boxed leather-upper shoes with PU components

## 1. Scope and Applicability

This PCR defines ordinary ambient own-account wholesale of new manufacturer-boxed non-sports leather-upper shoes with evidenced PU sole components, from actual ownership receipt to accepted business-buyer resale. Actual style/size system/colour, left/right identities and matching, complete pair/box contents, material configuration, net footwear versus inherited packaging, manufacture/component dates and prior history, ambient/quality conditions and contract gate must be declared. Counted commercial service is distinct from footwear pairs or pieces.

Exclude shoe/component manufacture, sports/protective/special footwear, replacement soles, repair/polishing/chemical treatment, use/wear demonstrations, automatic destructive testing, reconditioning or repacking, retail/agency and storage-only. Real performed inspection or sample testing retains actual sampled items, returned/removed state, resource/treatment ownership and uncertainty. A changed operated preservation or treatment requires new scope/module review; inherited boxes and ambient placement do not constitute such an intervention.

All completed shoe/component/inherited box/insert manufacture including lost upstream remains outside this service add-on. Link actual complete originally boxed shoe-gate assigned demand and identical existing stage/loss coverage once outside before whole-chain readiness; actual physical handling and receiving treatment remain included once. Historical SATRA technical articles support qualitative material/package and PU-history distinctions only, not universal age limits, legal thresholds, tests or emission/loss factors.

Performed sampling here means representative non-wear measurement or laboratory material specimens, with real preparation/receiver scope. Wear/use testing and product treatment are not hidden inside provider services; an actual commissioned operation of that kind needs a new reviewed scope before inventory construction.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-footwear |
| classification_refs | CPC3 61034; narrower boxed leather-upper non-sports shoe wholesale within293 |
| covered_products | Own-account ambient B2B commercial service for new originally boxed leather-upper shoes with actual PU sole components |
| excluded_products | Other sole-material substitution without evidence; manufacturing/repair/treatment/wear/repacking; sports/protective/special shoes; retail/agency/storage-only |
| representative_product | Actual style/size matched new boxed shoe lot with complete material/date/history/condition evidence through an accepted consignment |
| production_route | Complete manufacturer boxed-shoe gate -> ownership receipt/ambient stock/handling -> accepted B2B resale |
| market_state | Counted physical service; footwear pairs/singles/materials/boxes remain non-exchange merchandise audit |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account boxed leather-upper PU-component shoe wholesale consignment |
| How much | 1 Item(s) |
| How well | Actual new boxed matched shoes, component/material/date/condition/quantity and buyer acceptance, no automatic future wear-life guarantee |
| How long or cycle | Real receipt/ambient holding/handling/acceptance interval, separately recording earlier component/manufacture history, stock/reporting and asset phases |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account boxed leather-upper PU-component shoe wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_gate; style_size_system_colour; matched_left_right_pair_ids; actual_piece_pair_box_quantities; leather_upper_and_PU_component_evidence; complete_supplier_boxed_gate; sole_component_manufacture_history; shoe_manufacture_release_history; net_shoe_pack_tare_state; actual_moisture_method_condition; actual_temperature_humidity_exposure; actual_start_end_duration_unit; quality_sample_acceptance_reversal; source_gate_assigned_demand_loss_owner |

N>0 counts unique actual final accepted commercial consignments after reversals. A pair/two singles/one box is not one service consignment; matching and physical counts are separately audited, with failed/unfinished cross-period resources retained.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| consignment_count | accepted_service | Count | Item(s) | Actual merchant commercial acceptance IDs, not footwear pair/piece/box count, price or invoice split. |
| matching_material_state | merchandise | Actual count; Mass | Declared pair/piece/box unit; kg | Verify real left/right/style/size-system match and box mapping; count complete pairs separately from single returns/fragments. Measure footwear net mass separately from boxes/tissue/spacers/sachets/cartons/tare and moisture/conditioning state; no kg per pair or universal sole composition. |
| history_condition | actual PU component and package | Actual time/state evidence | Actual date/duration/temperature/humidity units | Declare component-moulding/manufacture/release/transit/storage histories and sources, uncertainty and unknowns; warehouse receipt is not necessarily beginning of PU age. Actual PU identity and adopted quality evidence are required; anecdotes do not establish shelf life or emitted mass. |
| native_conversions | all exchanges | Compatible native property | Actual native units | Retain net/gross/tare, densities with unit/temperature/source, conversion factor/unit/basis/source and species-specific evidence where actually needed. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual released new boxed leather-upper non-sports matched shoes with verified PU sole component/material/date/history/pack/condition state |
| starting_condition_role | Complete inherited saleable boxed merchandise for physical merchant service, not new footwear production |
| product_classification_scope | Narrower293 leather-upper shoe wholesale within61034; no all-footwear or all-PU-aging average |
| recursive_input_rule | Do not consume or recursively manufacture traded shoes/PU/leather/boxes as this service inputs; retain original-gate stock/demand audit separately. |
| upstream_dataset_requirement | Separate complete originally boxed shoe dataset/stages for actual leather/PU/other components, assembly/finishing/release/inherited packaging; leather or PU-resin-only predecessor is incomplete. |
| disclosure | Actual pair/single/style/size/box and material/history/moisture/condition evidence, lot/period/event/acceptance, original-gate demand/loss and service/asset/provider/freight/treatment owners and gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commodity_upstream | shoes and inherited packaging | All commodity manufacturing including upstream lost portions remains outside service; actual physical handling and declared receiver treatment are counted here once. |  |
| moisture_package | boxed merchandise | Actual shoe/package moisture and temperature/humidity/condensation state need separate evidence and compatible component mass bases; internal condensation is not new utility water, direct outfall or chemical emission. Source technical tests/limits are not imposed as universal operations. | satra-cartons-moisture |
| PU_history | actual PU component | Apply qualitative moisture/time degradation context only after actual PU component is established. Record prior manufacture/transit/warehouse history and real condition; no fixed age/shelf-life, forced destructive testing, re-soling, discard or emitted-species factor. | satra-footwear-failures |
| event_periods | all actual jobs | Link campaign/lot/period, receipt/inspection/sample/cleaning/idle/failed/unfinished/dispatch/return and final acceptance. Missing/mismatched single shoes and actual fragments keep actual fate and resources; no stock residual becomes discarded pair or pollutant. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| shoe_wholesale | Boxed new leather-upper shoe merchant handling and acceptance | required | Actual merchant ownership/B2B acceptance of new original-box leather-upper shoes with actual PU sole component | Receipt/matching/state/stock/handling and commercial handover, no manufacture/repair/wear/treatment | `accepted_service` |

Commercial consignments overlap warehouse campaigns and continuous support intervals. Link performed inspection/sample/cleaning/changeover/idle/failed/rejected/unfinished events before attribution to actual accepted cohorts. Mismatches/missing singles, moisture/mould/box damage or real PU-component failure require actual quarantine/return/downgrade/discard; no assumed repair/re-soling or forced destructive tests. Real samples have separate removal/return/receiver records. No-acceptance periods retain resources, with cross-period allocation before one per-N normalization.

### Process: Boxed new leather-upper shoe merchant handling and acceptance (`shoe_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed native quantity from cp_energy, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need real meters/intervals and all shoe-lot/user attribution including failed/idle jobs; no standard kWh per pair or fixed storage age.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual meter/issue purpose, quantity and supplier boundary; moisture condensation or all received wastewater cannot quantify this supply.

###### Actual separately recorded polyethylene packaging film (`new_outer_protection_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need inherited/new level, actual SKU/count/area/mass and conversion evidence; reusable pallets use their full life and box age/damage does not prove new supply.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual stock/net receipts, concentration/composition and dry-cleanup material plus absorbed-liquid/fragment basis. A chemical mentioned in inherited PU/leather or an SDS is not a purchased service input or emitted species.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need opening/net receipts/closing/usable returns, actual burn and nonburned waste/loss records with conversions/density/temperature where used; purchase quantity is no burn default.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account boxed leather-upper PU-component shoe wholesale consignment (`accepted_service`)

One real accepted business-buyer consignment with merchant ownership/resale and new boxed non-sports leather-upper shoes having actual evidenced PU sole components. Matched left/right/style/size pairs and physical quantities qualify the service, not a manufactured shoe output.

- Selected flow: Completed own-account boxed leather-upper PU-component shoe wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Require actual pair/single/box IDs, material/component and date/history evidence, net/tare/moisture/condition/time and commercial gate; no pair=consignment, standard box contents or universal shelf life.

##### Waste flows

###### Discarded boxed leather-upper shoe with polyurethane components (`discarded_shoe_packs_atomic_case`)

Conditional on independently recorded actual Discarded boxed leather-upper shoe with polyurethane components. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_shoe_packs`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded boxed leather-upper shoe with polyurethane components
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_shoes, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shoes`

Range evidence need: Need actual fate/recipient/native mass and net/tare/component basis with treatment coverage and original-gate equivalence; missing partner, age or apparent crumbling alone is not whole-pair discarded mass or chemical release.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_operations | all service inventory | Assign actual direct event use first; shared warehouse/handling/support uses evidenced compatible physical drivers across ALL users/periods including idle/rejected/unfinished jobs. Divide actual attributed total by positive accepted N once, no automatic equal pair/order or monetary share. |  |
| asset_lifetime | shared_assets | Use complete manufacture/maintenance/replacement/end-of-life and compatible actual used/lifetime drivers. Lifetime is observed history plus sourced evidenced remaining/termination with uncertainty/sensitivity/update; one asset-equivalent or lifecycle-complete provider view, never both or twice per-N. |  |
| supply_stock | operating supplies | Per actual native standalone SKU/state S=attributed opening+net external receipts-closing including retained recoveries. Gross-with-outlets uses S/N and actual matched usable external return; consumed-only uses (S-matched return)/N and OMITs that return exchange. Waste/loss retains production, internal loops stay stock, no unrelated/negative netting. |  |
| original_boxed_gate | merchandise | Trace actual complete originally boxed shoe-gate quantity assigned to accepted demand, actual proven discard/state-change shares, closing and useful returns/other exits using original unit/state/component-to-pair conversion and exclusive allocations. One missing or returned single does not automatically mean a whole-pair loss. Additional linked demand=actual required original-gate demand minus identical existing demand/loss coverage in baseline, compatible stages and state once outside service; assemble missing shoe components/assembly/boxing if only leather/PU material data exist. No age, moisture or nominal-pair-weight multiplier. |  |
| receiver_views | all actual outlets | Treat whole mixed shoe-pack waste, component audits, cleanup carrier plus absorbed contents and free liquid as non-additive physical views; actual receiver/treatment has one owner. Useful shoe/box returns remain merchandise audit, no automatic avoided-manufacture credit. Unknown stock/source/receiver scope blocks complete-chain use. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | shoe_wholesale | accepted_service | Actual boxed-shoe commercial acceptance | site_id; campaign_id; period_id; consignment_id; supplier_id; contract_id; ownership_start; resale_risk; business_buyer; SKU; style; size; size_system; colour; new_unworn_state; leather_upper_evidence; PU_sole_component_evidence; pair_ids; left_right_matching; box_ids; actual_pair_quantity; pair_unit; actual_single_quantity; single_unit; actual_box_quantity; box_unit; supplier_release; complete_boxed_gate; adopted_quality_criteria; inspection_sample_scope; actual_start; actual_end; time_zone; duration; duration_unit; acceptance_record; reversal_id; N | Verify actual ownership/resale and final buyer acceptance with real matched original-box contents, materials/state/quantity and adopted quality criteria. | Item(s) | Each consignment/reversal | Actual linked event/stock/reporting and asset periods | Actual merchant and buyer gate | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_shoes | shoe_wholesale | merchandise; discarded_shoe_packs | Actual footwear/box/history and source-gate stock ledger | site_id; campaign_id; period_id; consignment_id; lot_id; event_id; event_time; time_zone; SKU; style; size; size_system; colour; pair_id; left_id; right_id; matching_status; pair_count; pair_unit; single_count; single_unit; box_id; box_count; box_unit; upper_material; sole_component_id; sole_component_material; PU_identity_source; actual_component_composition; composition_basis; composition_source; component_mould_date; component_date_source; shoe_manufacture_date; release_date; prior_transit_storage_history; history_source; history_unknown; gross_pack_mass; net_footwear_mass; shoe_mass_unit; box_tissue_spacer_sachet_mass; outer_pack_mass; tare_unit; mass_conversion_factor; conversion_unit; conversion_basis; conversion_source; moisture; moisture_unit; moisture_component_basis; moisture_wet_dry_basis; moisture_method; moisture_source; sample_selection; sample_time; sample_quantity; sample_unit; sample_representativeness; sample_removed; sample_returned; sample_fate; temperature; temperature_unit; relative_humidity; humidity_unit; conditioning_state; exposure_start; exposure_end; duration; duration_unit; condensation_observation; condition_method_source; material_condition; box_condition; defect_record; opening; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; closing; supplier_returns; useful_other_exits; actual_discard; discard_unit; discard_composition; discard_receiver; discard_treatment_scope; collected_fragment_quantity; fragment_unit; state_change; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_dataset; original_gate_conversion_method; original_gate_conversion_factor; original_conversion_unit; original_conversion_basis; original_conversion_source; component_to_pair_method; component_to_pair_factor; component_to_pair_unit; component_to_pair_basis; component_to_pair_source; exclusive_exit_allocation; source_stage_coverage; missing_upstream_stage; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_state; assigned_gate_demand_source; baseline_same_loss_coverage; baseline_covered_demand; baseline_demand_unit; baseline_demand_state; baseline_demand_source; assignment_driver; assignment_driver_unit; all_exit_driver; all_exit_driver_unit; allocation_method; allocation_source; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_state; additional_gate_demand_source; commodity_owner; adjustment_status; uncertainty; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Track actual matching/material/component/history and compatible measured net/tare/moisture/condition. Reconcile all counts and actual stock/exits/sample fates with original boxed-gate quantities and exclusive partial-pair shares. Record unknowns, never infer mass/species/discard solely from age, missing single or residual. Assigned/additional gate demand units and states must match the original-gate unit/state after any explicitly evidenced conversion, with dedicated quantity-source evidence; no implicit pair/single conversion. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual pair/piece/box and kg/state | Each stock/movement/condition/sample event | Actual linked event/stock/reporting and asset periods | Actual supplier-lot pair/single/box and complete original gate | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_energy | shoe_wholesale | electricity; fuel_supply | Actual support meter and burn records | site_id; period_id; consignment_id; asset_id; event_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; carrier; reading_start; reading_end; reading_unit; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; idle_inspection_cleaning_scope; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; nonburned_loss; closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual physical service and all-user shares; burn is measured separately or reconstructed only with complete disjoint native stock fates and investigated unknown losses. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual energy/fuel unit | Each actual interval | Actual linked event/stock/reporting and asset periods | All included service consumers | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_supplies | shoe_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | Actual supply/cleanup inputs and stock-return scope | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening; receipt_gross; receipt_tare; receipt_net; closing; retained_recovery; usable_external_return; return_recipient; matched_input_id; original_supply_owner; gross_consumed_view; omit_matched_return_exchange; actual_waste; actual_loss; inherited_new_pack_level; dry_cleanup_carrier_quantity; carrier_unit; actual_cleanup_event; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; actual_purpose; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record actual same-state native net receipts/stock/external returns and performed cleanup carriers; inherited shoe/package components are not newly supplied. Netting requires original same-scope provenance and omission of matched outlet. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual native SKU unit | Each receipt/issue/return/stocktake | Actual linked event/stock/reporting and asset periods | Actual standalone service supplies | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_assets | shoe_wholesale | shared_assets | Complete-life all-consumer asset records | site_id; period_id; consignment_id; asset_id; consumer_id; phase_id; event_date; manufacture_dataset; maintenance; replacement; end_of_life; driver_used; driver_used_unit; lifetime_driver; lifetime_driver_unit; observed_history; evidenced_remaining; remainder_source; termination; attribution_view; uncertainty; sensitivity; update_trigger | Match actual asset users/periods and all life stages with compatible used/lifetime drivers and sourced remaining use, keeping a single provider or asset-equivalent view. | Item(s) or actual lifecycle-native unit | Each asset event/period review | Actual linked event/stock/reporting and asset periods | All users and complete lifecycle | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_providers | shoe_wholesale | provider_services | Actual physical result and responsibility coverage | site_id; period_id; consignment_id; provider_id; service_id; event_date; completed_result; physical_quantity; native_unit; duration; duration_unit; performed_inspection_test_sample_scope; completion_evidence; material_coverage; energy_coverage; chemical_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_release_coverage; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; missing_coverage | Verify actual completed result/native unit, physical test scope and supplier certificate versus performed work; map full direct/provider responsibility and missing stages once. | Actual provider-native physical unit | Each actual result | Actual linked event/stock/reporting and asset periods | Actual external service responsibility | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_freight | shoe_wholesale | freight | Actual boxed cargo/leg and coverage ledger | site_id; period_id; consignment_id; leg_id; event_date; mode; provider_id; actual_cargo; cargo_unit; footwear_net_mass; inherited_box_insert_mass; outer_pack_mass; other_included_tare; tare_scope; load_conversion_factor; load_factor_unit; load_factor_basis; load_factor_source; distance; distance_unit; distance_conversion_factor; distance_factor_unit; distance_factor_basis; distance_factor_source; empty_return_scope; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; provider_native_unit; supplier_delivered_coverage; duplicate_leg_check | Use actual whole cargo and journey distance/native conversions, non-overlap share and real empty/return/provider/delivered-gate scope. | kg*km or actual native freight unit | Each included actual leg | Actual linked event/stock/reporting and asset periods | Actual merchandise/service/waste freight | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_fates | shoe_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | Actual mixed-cleanup/free-liquid/source-receiver ledger | site_id; period_id; consignment_id; event_id; event_time; time_zone; material_source; source_location; native_quantity; native_unit; dry_carrier_mass; carrier_unit; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; moisture_component_basis; composition; concentration; concentration_unit; composition_basis; composition_source; mixed_wet_mass; dry_mass; mass_unit; collected_free_volume; received_volume; volume_unit; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; purchased_direct_water; receiver; receiving_medium; treatment_dataset; treatment_coverage; direct_outfall; overlapping_component_view; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; uncertainty | Measure actual direct source and receiver native state, including mixed cleanup carrier/absorbed contents and separate free liquid. Whole-pack/component/mixed-solid/liquid views are non-additive, with one actual treatment owner and no assumed condensate discharge. | Actual native mass/volume and composition units | Each actual source/cleanup/receiver/outfall event | Actual linked event/stock/reporting and asset periods | Actual service source and receiving scope | per reference flow | Actual native records, state/method/calibration and one responsibility owner |
| cp_releases | shoe_wholesale | direct_species | Actual identified species/medium and method evidence | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; source_role; material_component_identity; actual_species; receiving_medium; particle_size_basis; measured_quantity; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; release_fraction; fate_basis; fate_source; gas_volume; volume_unit; pressure; pressure_unit; temperature; temperature_unit; molecular_conversion; conversion_unit; conversion_source; method; method_version; provider_coverage; uncertainty | Require actual source/species/medium measurement or compatible evidenced activity/factor with all operands; no PU/box/leather age/state residual or anecdote is an emission method. Complete factor is not multiplied again by composition/fate. | kg actual species with native operands | Each measured/modeled real interval | Actual linked event/stock/reporting and asset periods | Actual source and receiving medium | per reference flow | Actual native records, state/method/calibration and one responsibility owner |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all service rows | Assign actual direct event and evidenced all-user share, retaining failed/unfinished/idle burdens, then divide attributed total by positive accepted N once. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual per-reference inventory |  |
| stock_pair_state | merchandise | Reconcile compatible pair/single/box inventories separately: opening+external receipts+buyer returns-closing-physical dispatch-supplier returns-useful other exits-actual discard-net sample removal=unexplained residual. Link actual left/right matching and fragments, net shoe/pack/moisture/state measurements with uncertainty. Do not turn one unmatched single or mass residual into a whole discarded pair, age loss or species release. | cp_shoes | Audited actual counts/state/fates |  |
| gate_demand | merchandise interface | At complete original boxed-shoe gate, map actual accepted-demand and allocated proven discard/state-change demand plus exclusive closing/useful return/other-exit shares to source quantities in original state/unit. Actual component/single-to-original-pair method and conversions need sourced non-overlap allocation. Link only additional required demand not identically covered by baseline stage/loss outside service once; missing assembly/boxing beyond leather/PU predecessor is assembled outside. | cp_shoes; cp_consignment | Explicit separately linked original finished-gate demand |  |
| cargo_freight | freight | Actual kg*km=actual included footwear/pack/tare cargo converted to kg×actual distance converted to km, using explicit factors/bases/sources and non-overlapping shared/provider coverage. Other native units retain matching dataset support. | cp_freight | Actual native freight per reference |  |
| species_method | direct_species | Use actual species/medium measurement or compatible actual activity/burn and source-specific factor, retaining composition/fate/native concentration or pressure/temperature gas conversions only where needed once. Complete factors are not multiplied again; hydrolysis observation, absorbed moisture and unknown stock deficit give no emission amount. | cp_releases; cp_shoes; cp_energy | Actual evidenced species per reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity | all exchanges | Resolve actual shoe/service/material/chemical/receiver identity and native property support before final exchanges; Count support alone is neither shoe nor merchant service identity. | Actual detail/foreground and reference support chain |
| material_history | actual PU shoe/pack audit | Verify actual PU sole component, new state, left/right/style/size/box mapping, manufacture/component/prior history and applicable supplier/buyer quality criteria. Do not generalize consumer case ages to material shelf-life or force tests. | cp_consignment; cp_shoes; satra-footwear-failures |
| moisture_fates | merchandise and cleanup | Keep actual component moisture/sample/method/basis/time/temp/humidity and package/condensate/state uncertainty, separate useful exits/whole-pack waste/mixed cleanup/free liquid/species with measured receiver coverage. | cp_shoes; cp_supplies; cp_fates; satra-cartons-moisture |
| coverage_life | all service scope | Match complete finished original-gate stages and actual assigned demand/baseline loss outside, all asset phases/consumers/periods and direct/provider treatment/freight once; disclose unknowns and independent range gaps. | Scope matrix and full-life/actual quantitative evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| facility_water | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_water` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| new_outer_protection | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `new_outer_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| fuel_supply | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| discarded_shoe_packs | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_shoe_packs` under `cp_shoes`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_shoe_packs_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_shoes`; actual source-linked native records |
| other_wastes | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_wastewater | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| water_outfalls | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| direct_species | shoe_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Measure actual lighting, powered handling and performed inspection/business support. The service does not manufacture shoes, operate wear testing by default or create a dedicated conditioning process from ambient holding.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual boxed-shoe warehouse and handling electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributed native quantity from cp_energy, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need real meters/intervals and all shoe-lot/user attribution including failed/idle jobs; no standard kWh per pair or fixed storage age.

#### facility_water

Record actual warehouse sanitation and real analytical-support water only when used. Inherited leather, box or air moisture is a state audit, not new cleaning water or a shoe-washing step.

Residual inventory requirement after the independently identified cases `facility_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased hygiene and facility water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual meter/issue purpose, quantity and supplier boundary; moisture condensation or all received wastewater cannot quantify this supply.

#### new_outer_protection

Use real extra outer carton/film/straps/labels only as actually added. Manufacturer shoe boxes, tissue, spacers and any inherited sachets belong to complete commodity state; no automatic new packing or moisture-control treatment is prescribed.

Residual inventory requirement after the independently identified cases `new_outer_protection_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual added shipping protection and handling labels
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need inherited/new level, actual SKU/count/area/mass and conversion evidence; reusable pallets use their full life and box age/damage does not prove new supply.

#### operating_supplies

Expand real cleaners, lubricants, wipes, absorbents, filters and sample consumables with native formulation/state and actual fates. No default polish, biocide, desiccant, leather treatment or repair adhesive is introduced; an actual changed treatment needs scope review.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse cleaners, maintenance and cleanup supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual stock/net receipts, concentration/composition and dry-cleanup material plus absorbed-liquid/fragment basis. A chemical mentioned in inherited PU/leather or an SDS is not a purchased service input or emitted species.

#### fuel_supply

Keep actual grade/native supplied stock separately from actual burn/nonburned fates; do not duplicate a complete hired transport or handling package.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual owned handling and support fuel supply
- Flow property / unit: Volume / L
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need opening/net receipts/closing/usable returns, actual burn and nonburned waste/loss records with conversions/density/temperature where used; purchase quantity is no burn default.

#### provider_services

Expand completed real storage/handling/inspection/testing/hygiene/maintenance and business support in matching native units. Manufacturer certificates or a public SATRA article do not prove another performed destructive test. Only representative non-wear measurements or laboratory material specimens belong to this sampling role; no wear/use or product-treatment route is included.

- Identity requirement: Actual performed boxed-shoe wholesale support
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed native quantity from cp_providers, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need actual physical result/unit/sample scope and materials/energy/assets/freight/treatment responsibility; no number of shoes tested or test-life factor is fixed.

#### shared_assets

Attribute actual building/racks/lifts/meters/ICT and reusable pallet/container service over all real consumers and periods, including full maintenance/replacement/end-of-life.

- Identity requirement: Full-life warehouse, handling and reusable transport assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributed native quantity from cp_assets, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need manufacture, compatible used/lifetime driver units, observed history plus sourced remaining use/termination, uncertainty and sensitivity; no full new pallet per trip or universal asset life.

#### freight

Record actual transported shoes/boxes/tissue/spacers/cartons/pallet scope and real legs, not only net shoes or number of pairs. Retain actual supplier-delivered gate, return and empty/shared journey ownership.

- Identity requirement: Actual boxed-shoe cargo and physical service freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual attributed native quantity from cp_freight, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need actual cargo/tare and leg distance, conversion factors/bases/sources and all-user share/provider coverage; no nominal kg-per-pair or fixed carton capacity.

#### environmental_water

Include only measured direct extraction with source/location and purpose. Atmospheric moisture held by shoes or packaging does not establish an environmental service intake.

- Identity requirement: Actual direct warehouse source-water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed native quantity from cp_fates, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual source meter/interval and withdrawal boundary; purchased water remains Product and no formula converts leather moisture or shoe counts to water supply.

#### usable_supply_returns

Use only a real external transfer matching the same standalone operating SKU/state. Under consumed-only input OMIT this matched return exchange; retained recovery stays closing and commercial shoes/boxes remain non-exchange stock audit.

- Identity requirement: Actual matched unused service-supply external return
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_supplies, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need real recipient/native quantity and input provenance; no unrelated/negative supply netting, stock-as-return or automatic avoided-production credit.

#### discarded_shoe_packs

Track actual receiver quantities/composition for discarded whole boxes, single shoes, parts/fragments or performed-test samples. A received mixed whole-pack waste and its shoe/PU/leather/box component audit cannot create duplicate waste or manufacture here.

- Identity requirement: Actual discarded boxed shoes, components or samples
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_shoes, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shoes`

Range evidence need: Need actual fate/recipient/native mass and net/tare/component basis with treatment coverage and original-gate equivalence; missing partner, age or apparent crumbling alone is not whole-pair discarded mass or chemical release.

#### other_wastes

Record actual used wipes/absorbents/filters, maintenance residues and new outer protection by receiver/native state. Mixed cleanup may include dry carrier plus collected moisture/fragment/chemical; component views are non-additive and do not duplicate discarded-shoe or contained-liquid waste.

- Identity requirement: Actual spent warehouse supplies and mixed cleanup solids
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_fates, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need received wet/dry mixed quantity, carrier/absorbed component composition/basis and receiver treatment; receipt of a wipe or visible residue does not establish spent quantity, and no recycling credit is automatic.

#### contained_wastewater

Record only actual free liquid transferred to treatment from performed sanitation/testing, distinct from moisture retained in shoes/boxes or absorbed in spent solid cleanup material. No routine shoe washing or PU treatment is assumed.

- Identity requirement: Actual collected hygiene or testing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed native quantity from cp_fates, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need collected/received volume/composition/interval and treatment owner; shoe moisture, supply water and wet wipe mass do not substitute for this volume or a direct outfall.

#### water_outfalls

Only actual water crossing a direct environmental outfall is this flow; collected free liquid sent to treatment is Waste and absorbed cleanup is its measured solid waste view.

- Identity requirement: Actual direct environmental water outfall
- Flow property / unit: Volume / m3
- Amount rule: Actual attributed native quantity from cp_fates, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need real outfall/location/native volume and composition/receiving medium; condensation inside a shoebox is internal state, not proof of discharge.

#### direct_species

Expand actual source/chemical/particle-size/medium only from measurement or an applicable method. PU deterioration, leather/box moisture change or product staining is not automatically CO2, VOC, microplastic, water vapour or another emitted species.

- Identity requirement: Actual evidenced operating or merchandise-origin release species
- Flow property / unit: Mass / kg
- Amount rule: Actual attributed native quantity from cp_releases, converted only on compatible evidence, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need real source/interval/species and medium, compatible activity/burn/factor/composition/fate plus required native gas/volume/concentration conversions. Age anecdotes, material hazard or unknown stock deficit supply no emission factor or fixed UUID.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| accepted_gate | accepted_service | Verify actual own-account final accepted commercial N>0 and all matching/material/quantity/history/condition qualifiers; shoes/pairs/boxes are not service count. |  |
| material_time | merchandise | Check evidenced PU identity and sole-component date/history through actual storage interval; no universal shelf-life from cases, no moisture/age residue-to-species/discard rule. | satra-footwear-failures |
| state_exits | shoe_wholesale | Require actual mismatched/missing/sampled/damaged/rejected/useful-return/downgrade/discard receiver paths and burden retention; do not silently introduce repair/re-soling/treatment/use. |  |
| finished_source | merchandise interface | Reconcile complete originally boxed source stages, original-unit/state/conversion and partial-pair exclusive assignments, actual demand/loss/closing/useful exits and identical baseline coverage once outside. |  |
| lifespan_coverage | all service resources | All users/events/periods and complete asset stages require compatible used/lifetime drivers, observed+sourced remaining/termination and one provider/asset/per-N view; failed/incomplete jobs do not disappear. |  |
| nonadditive_views | all actual inventory | Verify measured native supply/fates and original-owner scope; consumed-only omits matched return. Mixed whole pack/components/spent carrier absorbed contents/free liquid/outfall/species must not overlap or produce automatic avoided credits. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/completeness review |
| downstream_use | Physical boxed leather-upper PU-component shoe wholesale add-on linked separately to complete originally boxed commodity and actual assigned demand/loss |
| allowed_use | Actual new original-box non-sports leather-upper shoe consignment with evidenced PU sole component, matching pair/size/history/condition and business-buyer acceptance |
| excluded_use | Standalone shoe footprint; generic all-material footwear aging or fixed shelf life; manufacturing/repair/treatment/wear; test compliance recipe; retail/agency/storage-only |
| required_metadata | Actual SKU/style/size system/colour/left-right/pair/single/box/material/PU component/net/tare/moisture/date/prior history/condition/acceptance; site/lot/period; complete original gate demand/loss and every service/asset/provider/freight/treatment owner |
| required_quality_disclosure | Flow/support and prior-history gaps, component/moisture/sample/state uncertainty, mismatches/unknown stock/source-demand/receiver coverage, all-user lifetime assumptions and independent range limitations |
| update_trigger | Changed upper/sole component/presentation/history/condition/acceptance, repair/treatment/preservation operation, source-stage/loss coverage, measurement/test/provider/asset/freight/treatment scope |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-shoe-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025), printed page302,61034/group293. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: selected narrower new non-sports leather-upper boxed footwear merchant service. |
| satra-cartons-moisture | official_guidance | SATRA, Assessing cartons and cardboard boxes, February2018 public technical article. https://www.satra.com/bulletin/article.php?id=2024 | Qualitative footwear/packaging moisture/condensation and actual material/pack-state distinctions only; no test/stacking/legal threshold or universal countermeasure adopted. |
| satra-footwear-failures | official_guidance | SATRA, Learning from footwear failures – part1,2021 public technical article, cases5/6. https://www.satra.com/bulletin/article.php?id=2760 | Actual PU-specific moisture/time and whole post-component-manufacture history context; anecdotes are not numerical shelf-life, forced test, loss or chemical-emission factors. |
