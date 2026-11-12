---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-games-and-toys
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of boxed painted wooden construction toy sets

## 1. Scope and Applicability

Applies to actual manufacturer-complete non-electronic painted wooden construction block toy sets, owned and resold by a merchant through ordinary ambient B2B wholesale. Start at the actual complete finished painted/clear-coated boxed supplier gate, record receipt/completeness/condition/stock/handling, and end at actual buyer acceptance. No manufacturing, cutting, repainting, cleaning, repacking, assembly, play/demo, product testing, electronic/battery toy operation, retail, fee agency or storage-only service is included. Actual manufacturer material/part/finish and age-label evidence qualify the lot; one example manufacturer SKU is no universal specification.

The service inventory excludes all merchandise and inherited pack manufacturing, including that associated with losses. A separately quantified complete finished-source commodity demand adjustment, compatible with original native unit/state and identical baseline stage/loss coverage, must be linked once before complete-chain readiness. Actual physical service and declared waste transport/treatment remain included once. Purchase price, margin, set/piece count and value are not the service reference quantity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-games-and-toys |
| classification_refs | CPC3 61053 games/toys wholesale; narrower boxed construction toy sets of38540 within385 |
| covered_products | Actual owned/resold B2B consignment service for complete original-box non-electronic painted wooden construction block toy sets |
| excluded_products | Raw wood/unfinished blocks/parts basket, electronic toys; manufacture, repaint, cleaning, repack, assembly, play/demo/testing, retail, fee agency, storage-only |
| representative_product | Actual complete supplier SKU/lot with sourced set-part count/shapes/material/paint/clear-coat, original box, quantity/state and accepted business gate |
| production_route | Complete finished boxed supplier gate -> ownership receipt/ambient stock/condition handling -> commercial buyer acceptance |
| market_state | Physical service Count; actual sets/parts and wood/moisture/paint/lacquer/box masses remain nonexchange commodity audit |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account boxed painted wooden construction-toy-set wholesale consignment |
| How much | 1 Item(s) |
| How well | Actual supplier-complete boxed non-electronic painted wooden set with sourced completeness/material/finish/quantity/condition and buyer criteria; no future play/safety/conformity guarantee |
| How long or cycle | Actual receipt-to-acceptance time/duration, separate stock/reporting periods and full asset lifecycle phases |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account boxed painted wooden construction-toy-set wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_acceptance; actual_SKU_lot_set_ids; set_part_genealogy_completeness; parts_shapes_native_counts; actual_wood_material_evidence; factory_paint_clearcoat_state; original_box_pack_inclusions; complete_finished_supplier_gate; net_gross_tare_native_basis; moisture_component_method_state_time_source; actual_age_label_buyer_criteria_source; actual_start_end_duration_unit; site_campaign_reporting_period; source_gate_assignment_loss_coverage_owner |

N>0 counts unique real final business-accepted commercial consignments after reversals, not sets, blocks, kg or sales value; failed/rejected/unfinished cross-period resources remain.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| native_set_part | commodity audit | Count for native set/part audit; Mass for declared finished masses | Native set/part counts; kg for declared net/gross/tare mass | Record actual set/part/package IDs and native counts, gross/pack/nonproduct tare/net complete set mass, material and factory finish. Convert set-to-part only through sourced actual BOM/genealogy and exclusive same-state scope; missing one part never automatically becomes whole-set kg or demand. | ikea-construction-toy |
| independent_components | component measurements | Mass for component mass; mass fraction for reported content | kg; actual wet/dry-basis fraction or % | Any separately measured wood, moisture, paint/lacquer or package quantity needs native unit/basis/method/sample state/time/source and representativeness; percentage wet/dry bases and actual temperature/unit/conditioning are explicit. Component audits are not additional whole-set inventory or universal composition factors. |  |
| actual_conversion | all quantities | Actual measured native property and dimensionally compatible target property | Actual native unit -> compatible target unit with explicit factor units | Keep native quantity/unit/basis/source and explicit target unit, factor unit/basis/source. Mass-volume conversion needs actual applicable density/unit/temperature/temperature_unit/source; no nominal package weight, density, forty-part or age multiplier. |  |
| accepted_denominator | all service resources | Count for accepted-service denominator; each row retains actual native property | Item(s) denominator; actual physical row unit per Item(s) | Attribute actual resources directly or with compatible positive complete all-consumer physical drivers, retaining idle/failed/rejected/unfinished work. Divide assigned cohort totals by N once; Count support does not identify toy sets or merchant service. |  |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete manufacturer-finished painted/clear-coated non-electronic wooden construction toy set, actual original-box contents/material/quantity/state evidence |
| starting_condition_role | Inherited finished merchandise for own-account physical wholesale, not new woodworking/painting/assembly or play |
| product_classification_scope | Narrower61053/group385 service for38540 construction toys, not all games/toys manufacture |
| recursive_input_rule | Traded whole sets/parts/retained wood moisture/factory paint/lacquer/inherited boxes remain nonexchange stock, not service-consumed wood/paint/solvent/water. |
| upstream_dataset_requirement | Separate complete finished supplier gate includes actual wood preparation/shaping, part manufacture, paint/clear-coat finishing, set completion/release and original packaging as applicable. Raw wood/unfinished blocks/parts-only predecessor misses finished stages. |
| disclosure | Actual set/part genealogy, completeness/material/finish/native quantity/component state/age-label source, commercial gate/time, finished-source assignment/coverage and service/provider/asset/freight/receiver owners/unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| finished_gate | commodity interface | All commodity wood/paint/lacquer/set completion/pack manufacture, including lost upstream, remains outside service. Link complete original-gate demand once through actual exclusive quantity/state/sourced assignment and identical baseline loss coverage; actual physical service/receiver treatment is included once. |  |
| manufacturer_limits | toy_wholesale | Actual manufacturer example solid birch/acrylic paint/clear acrylic lacquer informs material/finish/pack questions only. Forty parts, age/dimensions/pack weight/conformity-test marketing are not universal specification, assurance or warehouse activity; consumer dry-cloth care is not merchant cleaning. | ikea-construction-toy |
| state_unknown | commodity state | Completeness/missing part/damage/wet-mass change, real fragments/discard and species release are distinct. Unknown stock residual is neither zero nor proof of whole-set loss, water/paint volatilisation or dust. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| toy_wholesale | Boxed painted wooden construction-toy merchant receipt and handover | required | Actual complete original-box non-electronic painted wooden construction-toy own-account B2B handover | Physical receipt, condition/completeness, stock, handling and commercial handover without play/assembly/painting/testing | `accepted_service` |

Commercial consignments overlap warehouse batches and continuous support periods. Link actual receiving/document/visual completeness-condition checks, performed representative condition measurements and sample removal/return/fate, facility cleaning/changeover/idle/failed/rejected/unfinished/dispatch/accepted events to lots/periods. No every-box opening/every-block test or product testing is required. Missing parts, breakage, paint damage, contamination or crushed boxes need disjoint actual quarantine/supplier return/useful downgrade/discard receiver routes, without presumed repair/replacement-block/repainting/repacking. No-acceptance intervals retain burdens, reconciled across periods before one per-N normalization.

### Process: Boxed painted wooden construction-toy merchant receipt and handover (`toy_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively attributed physical amount / N from cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Require actual meter intervals, connected consumers and complete event/period attribution including idle/failed work; no kWh per block/set inferred from manufacturer finish.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed physical amount / N from cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require source/purpose, native volume meter and supply coverage plus actual fates; product moisture and purchased quantity do not establish wastewater.

###### Actual separately recorded polyethylene packaging film (`new_outer_protection_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require added-versus-inherited pack levels, actual SKU/mass or evidenced count/area conversion and unique stock/event links; no full new pack/pallet per consignment default.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual purpose, net receipt/stock/return, formulation and spent carrier/absorbed contents evidence; paint present on blocks neither measures new service supply nor release.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual exclusively attributed physical amount / N from cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require native opening/net receipts/closing and disjoint actual fates, density and temperature units/conversion sources when needed; purchases do not automatically equal combustion.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account boxed painted wooden construction-toy-set wholesale consignment (`accepted_service`)

One actual owned/resold B2B accepted consignment of manufacturer-complete non-electronic painted wooden construction block toy sets in actual original-box presentation. Actual sets/parts/finish/state qualify the physical service; it is not a manufactured toy-set exchange or a safety/play/lifetime promise.

- Selected flow: Completed own-account boxed painted wooden construction-toy-set wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Require actual commercial/ownership acceptance, set SKU/lot/parts genealogy and completeness, wood/paint/lacquer evidence, net/tare/moisture/condition/age-label source/time. No consignment=set, fixed forty parts, package weight=net, universal age or conformity guarantee.

##### Waste flows

###### Discarded complete boxed painted wooden construction-toy set (`discarded_toy_sets_atomic_case`)

Conditional on independently recorded actual Discarded complete boxed painted wooden construction-toy set. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_toy_sets`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete boxed painted wooden construction-toy set
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_toysets
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_toysets`

Range evidence need: Require actual disposition, set-to-part genealogy, native amount/state/net-tare and receiver/treatment coverage with exclusive original-gate correspondence; an incomplete box or weight deficit is not discarded mass.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Require actual species/medium measurement or compatible activity/factor with native units, composition, temperature and fate basis/source applied once; no universal finish-emission factor.


###### Actual separately evidenced fossil methane emitted to air (`direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Require actual species/medium measurement or compatible activity/factor with native units, composition, temperature and fate basis/source applied once; no universal finish-emission factor.


###### Actual separately evidenced nitrous oxide emitted to air (`direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Require actual species/medium measurement or compatible activity/factor with native units, composition, temperature and fate basis/source applied once; no universal finish-emission factor.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_shared_period | all actual resources | First trace direct events or allocate with actual compatible target_driver/positive complete all_consumer_driver across periods, idle/failed/rejected/unfinished and other clients; record driver units/bases/sources and exclusive owners. Normalize assigned totals by accepted N once; no sales-price/margin allocation by default. |  |
| source_exclusive_assignment | commodity interface | For each original source lot/state select ONE view: directly traced/measured assigned_gate_demand with native unit/state/source/direct evidence and exclusive exit links; OR assigned_gate_demand=actual_source_gate_quantity × target_driver / positive complete source_all_exit_driver. The denominator sums compatible driver records for ALL competing accepted/useful-other-exit/returns/closing-carry/proven actual-loss exits, each quantity/unit/basis/source/link and one owner. Never use accepted-only denominator or overlay direct+driver views; actual loss burden assignment must identify its actual exit/group and exclusive owner. Unknown losses cannot be zero. Additional finished-gate demand and identical already-covered baseline demand use compatible original unit/state/source and evidenced conversions, linked outside service once. |  |
| supply_return_convention | service supplies | S=assigned opening+NET external receipts-closing including retained recoveries. Use gross S/N with real matched unused external return OR consumed (S-return)/N and OMIT that matched return exchange. Internal loops/retained recovery are stock; wasted/consumed supplies retain burden. Do not subtract inherited toy coat/parts from unrelated current supplies or create negative input/automatic credit. |  |
| full_asset_service | shared assets/providers | Attribute complete life manufacture/maintenance/actual replacement/EOL using actual used_driver/lifetime_all_consumer_driver in compatible units, observed history plus sourced remaining/termination, uncertainty/sensitivity/update. All nodes/periods consume once. Choose asset equivalent OR lifecycle-complete provider representation, not both; divide by N once only if not already normalized. |  |
| fate_nonadditive | actual waste/releases | Whole set/part/package and component wood/moisture/coat audits, mixed cleanup carrier/absorbed liquid/fragments, free wastewater and direct species are exclusive/non-additive views. Assign actual receiver transport/treatment once with provider coverage, no automatic recovery credit. Rejected/unfinished work is not accepted output and retains real resources. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | toy_wholesale | accepted_service | commercial acceptance | consignment_id; merchant_id; ownership_resale_evidence; business_buyer_id; acceptance_gate; acceptance_time; acceptance_source; reversal_ids; unique_accepted_count; N; set_SKU_lot_ids; set_part_genealogy; completeness_record; material_finish_evidence; age_label_source; buyer_criteria_source; start_time; end_time; time_unit; duration; duration_unit; site_id; campaign_id; reporting_period; failed_rejected_unfinished_ids; attribution_owner; start_time_source; end_time_source; duration_source; time_zone | Trace real ownership/resale and final buyer gate, resolve reversals and unique accepted IDs with actual lot/set/part/state criteria. Index failures/rejects/unfinished work, actual timestamps and duration unit/source; age-label metadata is not a safety guarantee. | Count Item(s); actual date/time and duration units | Each actual event/period, retain originals | Actual receipt-to-acceptance, cross-period stock and applicable full asset life | Actual merchant site/all relevant users and declared providers/receivers | per reference flow | Original records, meter/calibration/method/sample-state/unit/basis/conversion/source/coverage and uncertainty |
| cp_toysets | toy_wholesale | merchandise audit and actual discarded_toy_sets | finished set/part/pack genealogy | source_lot_id; set_SKU; set_ids; part_ids; part_shapes; part_counts; part_count_unit; part_count_source; set_part_genealogy; genealogy_source; completeness_state; material_identity; material_source; factory_paint_identity; clearcoat_identity; finish_source; original_box_inclusions; age_label; age_label_source; buyer_criteria_source; actual_native_quantity; native_unit; quantity_basis; quantity_source; gross_mass; gross_unit; gross_source; packaging_tare; packaging_unit; packaging_source; net_finished_mass; net_mass_unit; net_mass_basis; net_mass_source; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; sample_representativeness; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_source; conditioning_state; sample_time; temperature; temperature_unit; temperature_source; opening; receipts; buyer_returns; closing; dispatch; supplier_returns; useful_other_exits; actual_discard; net_sample_removal; unknown_residual; stock_unit; stock_state; stock_source; disposition_ids; receiver; treatment_coverage; actual_source_gate_quantity; source_gate_unit; source_gate_state; source_gate_quantity_source; source_complete_stage_evidence; assignment_view; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_state; assigned_gate_demand_source; direct_assignment_evidence; exclusive_exit_links; target_driver; target_driver_unit; target_driver_basis; target_driver_source; source_all_exit_driver; source_all_exit_driver_unit; source_all_exit_driver_basis; source_all_exit_driver_source; competing_exit_driver_records; exit_record_quantity; exit_record_unit; exit_record_basis; exit_record_source; exit_record_link; exit_record_owner; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_source; baseline_demand; baseline_demand_unit; baseline_demand_state; baseline_demand_source; baseline_stage_loss_coverage; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_state; additional_gate_demand_source; exclusive_loss_assignment; commodity_adjustment_owner; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Measure/trace actual complete finished set, parts and original packs in their native states. Maintain sourced genealogy and mutually exclusive stock exits, including sample removal/return. Independently measured wood/water/paint/lacquer needs own native quantity/unit/basis/method/state/sampletime/source, not whole-set kg. For each source lot select direct measured/traced assigned quantity with evidence OR Qsource_actual×Dtarget/positive complete all-exit driver; preserve each competing accepted/useful-other/return/closing/proven-loss driver record with quantity/unit/basis/source/link/owner, never accepted-only or duplicate views. Map compatible original-gate states through sourced conversions; assigned/additional/baseline demand each has unit/state/source and identical stage/loss coverage, outside service once. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native set/part/pack counts, kg or sourced quantity/state; component/moisture native bases | Each actual event/period, retain originals | Actual receipt-to-acceptance, cross-period stock and applicable full asset life | Actual merchant site/all relevant users and declared providers/receivers | per reference flow | Original records, meter/calibration/method/sample-state/unit/basis/conversion/source/coverage and uncertainty |
| cp_energy | toy_wholesale | electricity and actual burn activity | meter/fuel-use event | meter_id; energy_quantity; energy_unit; meter_start; meter_end; interval; source; operation_purpose; burn_quantity; burn_unit; burn_basis; burn_source; fuel_identity; conversion_factor; conversion_unit; conversion_basis; conversion_source; event_ids; period_ids; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual meters and real burn evidence, not fuel receipts alone. Link all actual facility/handling/idle/changeover/failed events and consumers before assigning to the accepted cohort; no painting/curing/play energy. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual kWh and fuel native quantity/unit | Each actual event/period, retain originals | Actual receipt-to-acceptance, cross-period stock and applicable full asset life | Actual merchant site/all relevant users and declared providers/receivers | per reference flow | Original records, meter/calibration/method/sample-state/unit/basis/conversion/source/coverage and uncertainty |
| cp_supplies | toy_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | native stock and matched transfer | supply_SKU; purpose; composition; composition_basis; composition_source; provenance_owner; period; opening; external_receipts_net; closing_including_retained_recovery; native_unit; quantity_basis; quantity_source; usable_external_return; return_unit; return_recipient; matched_input_id; matched_state_scope; internal_loop; retained_recovery; waste_quantity; waste_unit; burn_quantity; burn_unit; actual_fate_source; accounting_view; conversion_factor; conversion_unit; conversion_basis; conversion_source; density; density_unit; density_temperature; temperature_unit; density_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | External receipts are NET product quantity excluding container tare. Record actual SKU/state/purpose/stock/fates including cleanup carriers and formulation where used. S=opening+net receipts-closing with retained recoveries: gross supply plus matched unused return OR consumed-only subtraction and omit matched return exchange. Reconcile actual density/temperature/native conversions and complete consumer drivers. Factory toy paint/lacquer is not service supply. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Native kg/m3/L or actual compatible supply unit | Each actual event/period, retain originals | Actual receipt-to-acceptance, cross-period stock and applicable full asset life | Actual merchant site/all relevant users and declared providers/receivers | per reference flow | Original records, meter/calibration/method/sample-state/unit/basis/conversion/source/coverage and uncertainty |
| cp_assets | toy_wholesale | shared_assets | complete asset life and service driver | asset_id; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; provider_scope; consumers; periods; used_driver; used_driver_unit; used_driver_basis; used_driver_source; observed_life_driver; observed_driver_unit; observed_history_source; remaining_life_driver; remaining_driver_unit; remaining_evidence_source; termination_evidence; lifetime_all_consumer_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; conversion_factor; conversion_unit; conversion_source; uncertainty; sensitivity; update_trigger; attribution_owner; already_per_reference; observed_driver_basis; remaining_driver_basis; conversion_basis; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share | Enumerate actual assets and all consumers/periods, full manufacture/maintenance/real replacement/EOL. Compatible used/lifetime units and observed+sourced remaining/termination determine physical service, with uncertainty/sensitivity/update. Use complete asset equivalent OR lifecycle-covered provider once and apply N once. | Actual compatible used/lifetime driver units and Item(s) asset-equivalent when supported | Each actual event/period, retain originals | Actual receipt-to-acceptance, cross-period stock and applicable full asset life | Actual merchant site/all relevant users and declared providers/receivers | per reference flow | Original records, meter/calibration/method/sample-state/unit/basis/conversion/source/coverage and uncertainty |
| cp_providers | toy_wholesale | provider_services | performed result and coverage | provider_id; event_id; native_result; result_unit; result_basis; result_source; service_scope; measurement_method; sample_ids; sample_representativeness; sample_removed; sample_return; sample_fate; material_coverage; energy_coverage; asset_coverage; freight_coverage; receiver_treatment_coverage; excluded_testing_scope; period; conversion_factor; conversion_unit; conversion_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_owner; target_driver_basis; all_consumer_driver_basis; attribution_share | Verify performed physical results and coverage, distinguishing document/visual completeness or representative condition measurement from excluded play/assembly/destructive product testing. Actual sample amount/return/fate retains burdens. No currency or certificate-only service amount. | Actual provider-native physical result unit | Each actual event/period, retain originals | Actual receipt-to-acceptance, cross-period stock and applicable full asset life | Actual merchant site/all relevant users and declared providers/receivers | per reference flow | Original records, meter/calibration/method/sample-state/unit/basis/conversion/source/coverage and uncertainty |
| cp_freight | toy_wholesale | freight | unique actual load/leg | load_id; leg_id; cargo_ids; load_quantity; load_unit; load_basis_each_or_total; load_source; repeated_load_count; repetition_source; actual_packed_payload; payload_unit; payload_state; payload_source; vehicle_gross; vehicle_gross_unit; gross_source; vehicle_noncargo_tare; noncargo_tare_unit; tare_source; original_cargo_pack; added_cargo_pack; retained_moisture_finish; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_basis; distance_conversion_source; empty_return_coverage; delivered_provider_coverage; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; unique_scope_owner; already_per_reference; gross_conversion_factor; gross_conversion_unit; gross_conversion_basis; gross_conversion_source; tare_conversion_factor; tare_conversion_unit; tare_conversion_basis; tare_conversion_source; target_driver_basis; all_consumer_driver_basis; attribution_owner | Use measured packed payload OR same-state vehicle gross minus ONLY vehicle/noncargo tare. Retain original/added cargo packaging and retained product moisture/finish; component views do not add again. For unique load-leg records multiply evidenced repetition only if EACH, never TOTAL again. Convert native load/distance with factor units/bases/sources, assign once with compatible positive complete all-consumer shares, sum unique assigned kg*km and divide N once unless already per reference. Reconcile empty/return/delivered/provider coverage. | Native payload and distance converted to kg*km with compatible factors | Each actual event/period, retain originals | Actual receipt-to-acceptance, cross-period stock and applicable full asset life | Actual merchant site/all relevant users and declared providers/receivers | per reference flow | Original records, meter/calibration/method/sample-state/unit/basis/conversion/source/coverage and uncertainty |
| cp_fates | toy_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | actual withdrawal/receiver/outfall | event_id; source_location; receiving_location; receiving_medium; flow_identity; native_quantity; native_unit; quantity_basis; quantity_source; interval; composition; composition_basis; composition_source; fate_basis; fate_source; mixed_receiver_mass; mixed_mass_unit; mixed_mass_basis; mixed_mass_source; carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; free_liquid_volume; liquid_volume_unit; liquid_volume_source; density; density_unit; density_temperature; temperature_unit; density_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; nonadditive_view; attribution_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share | Measure actual source withdrawal or received mixed solids/free liquid or direct outfall independently. Each carrier/absorbed liquid/wood/coat fragment operand has native unit/basis/source; mixed whole versus components and commodity discard are non-additive. Record actual composition/fate/receiver/treatment and conversion/density/temperature evidence once; no purchased-water=effluent inference. | Actual native mass/volume, compatible kg/m3 | Each actual event/period, retain originals | Actual receipt-to-acceptance, cross-period stock and applicable full asset life | Actual merchant site/all relevant users and declared providers/receivers | per reference flow | Original records, meter/calibration/method/sample-state/unit/basis/conversion/source/coverage and uncertainty |
| cp_releases | toy_wholesale | direct_species | species/medium measurement or compatible activity method | event_id; species_identity; particle_size; receiving_medium; measurement; measurement_unit; measurement_basis; measurement_source; activity; activity_unit; activity_basis; activity_source; factor; factor_unit; factor_basis; factor_source; factor_coverage; burn_fraction; burn_fraction_source; composition; composition_unit; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; time_interval; period; provider_coverage; nonadditive_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; attribution_owner; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Establish actual chemical/species/particle/medium with measurement or compatible actual activity and factor coverage. Apply native composition/fate or gas/concentration conversion only when method requires, once with temperature/pressure units/sources. Do not infer emission from paint content, wood carbon, odour, mass deficit or missing part. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual species native quantity converted compatibly to kg | Each actual event/period, retain originals | Actual receipt-to-acceptance, cross-period stock and applicable full asset life | Actual merchant site/all relevant users and declared providers/receivers | per reference flow | Original records, meter/calibration/method/sample-state/unit/basis/conversion/source/coverage and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all service cards | Actual assigned amount=direct traced event OR actual resource×compatible target_driver/positive complete all_consumer_driver. Retain idle/failed/rejected/unfinished work, reconcile carry and all users, then assigned cohort total/N once. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual per-reference physical service inventory |  |
| set_part_stock | commodity audit | At a compatible native state, opening+receipts+buyer_returns-closing-dispatch-supplier_returns-useful_other_exits-actual_discard-net_sample_removal=unknown_residual. Actual set/part genealogies and material/moisture/paint/clearcoat component measurements remain separate non-additive audit views; missing part or residual is not whole-set loss/species. | cp_toysets | Reconciled stock, actual exits and explicit unknown state |  |
| complete_source_demand | commodity interface | Select direct measured/traced assigned_gate_demand with native unit/state/source/direct evidence and exclusive exits OR Qsource_actual×Dtarget/Dall_exits, Dall_exits>0=sum complete compatible competing accepted/useful-other/return/closing/proven-loss driver records, each quantity/unit/basis/source/link/owner. No accepted-only denominator or overlay of views. Convert actual complete finished-source states only by sourced method/factor/unit/basis. Assigned/additional/baseline demands retain own unit/state/source; link required additional stage/loss demand outside service once after identical baseline coverage, never generic loss multiplier. | cp_toysets; cp_consignment | Separately quantified complete original finished-gate demand/loss interface |  |
| unique_packed_freight | freight | For each unique load-leg use measured actual packedpayload OR same-state gross minus ONLY vehicle/noncargo tare; retain cargo packaging/moisture/finish and do not add component audits. EACH multiplies evidenced repetitions; TOTAL does not. Convert load×distance to kg*km with explicit factor units/bases/sources, assign once through compatible full-all-user share, sum unique assigned loads then /N once unless already per reference. | cp_freight | Actual exclusive per-reference freight |  |
| measured_species | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | Use measured actual species/medium OR actual compatible activity×factor with native units/bases/sources and factor coverage. Apply composition/fate/conversion only if required once, with relevant temperature/pressure units/sources; no wood/paint content or stock residual emission factor. | cp_releases; cp_energy; cp_toysets | Actual evidenced direct species quantity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| finished_identity | all identities | Final exchanges need actual set/part/material/finish, service/provider/source/receiver/species identity and compatible native support; Count support alone does not identify a commercial consignment. | Actual manufacturer/lot/commercial evidence and verified detail/support |
| native_components | commodity and mixed-waste components | Each independently measured part/wood/moisture/paint/lacquer/carrier/absorbed liquid/fragment has its own native unit/basis/method/state/source and sampletime where relevant; no whole-set or pack-weight substitution. | cp_toysets; cp_fates; cp_releases |
| coverage_unknowns | whole service and linked source | Disclose incomplete genealogy/state/stock/source assignment and original-gate coverage, unknown losses/fates, all-user lifetime remainder uncertainty and actual provider/treatment gaps. Candidate completeness is not final chain/data readiness. | Native records, coverage matrix, uncertainty and row-specific evidence needs |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| facility_water | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_water` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| new_outer_protection | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `new_outer_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| fuel_supply | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| discarded_toy_sets | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_toy_sets` under `cp_toysets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_toy_sets_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_toysets`; actual source-linked native records |
| other_wastes | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_wastewater | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| water_outfalls | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| direct_species | toy_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Meter actual warehouse lighting, handling and business-support consumption. No manufacture, assembly, painting, curing or powered toy demonstration is included.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual toy-wholesale facility electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively attributed physical amount / N from cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Require actual meter intervals, connected consumers and complete event/period attribution including idle/failed work; no kWh per block/set inferred from manufacturer finish.

#### facility_water

Include actual hygiene/support supply, separate from wood moisture and manufacturer paint/lacquer water. No merchant washing of blocks is assumed.

Residual inventory requirement after the independently identified cases `facility_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased facility water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed physical amount / N from cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require source/purpose, native volume meter and supply coverage plus actual fates; product moisture and purchased quantity do not establish wastewater.

#### new_outer_protection

Only real service-added outer cartons, film, straps and labels are supplies. The original retail set box, internal trays and factory finish remain inherited commodity. Reusable crates/pallets use lifetime attribution.

Residual inventory requirement after the independently identified cases `new_outer_protection_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual added dispatch protection and labels
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require added-versus-inherited pack levels, actual SKU/mass or evidenced count/area conversion and unique stock/event links; no full new pack/pallet per consignment default.

#### operating_supplies

Expand actual equipment lubricants, cleaners, wipes, absorbents, filters and office supplies by native SKU/composition. Manufacturer acrylic paint/clear lacquer is not current service paint/solvent, and no repainting or block cleaning is prescribed.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual maintenance and conditional cleanup consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual purpose, net receipt/stock/return, formulation and spent carrier/absorbed contents evidence; paint present on blocks neither measures new service supply nor release.

#### fuel_supply

Track real grade and stock separately from actual burn, usable return and waste; reconcile hired handling and freight coverage before adding supply.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual owned handling fuel
- Flow property / unit: Volume / L
- Amount rule: Actual exclusively attributed physical amount / N from cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require native opening/net receipts/closing and disjoint actual fates, density and temperature units/conversion sources when needed; purchases do not automatically equal combustion.

#### provider_services

Use performed storage, handling, document/visual completeness checks, maintenance or business support in its actual native physical unit. Supplier safety labels or certificates alone are not a performed merchant test; play, assembly and destructive product testing are outside this route.

- Identity requirement: Actual wholesale support-service results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed physical amount / N from cp_providers
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Require performed result and included energy/material/assets/freight/receiver treatment; any actual representative condition measurement needs method/sample disposition without hiding excluded product tests.

#### shared_assets

Include actual building/racks/lifts/meters/ICT and reusable containers/pallets for all consumers/periods through full manufacture, maintenance, replacement and end-of-life. The traded toy set is merchandise, not warehouse equipment.

- Identity requirement: Complete-life shared warehouse and handling assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed physical amount / N from cp_assets
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Require compatible used/lifetime driver units, observed history plus evidenced remaining life/termination, full phase coverage and uncertainty/sensitivity/update; no standard service life or repeated full asset per trip.

#### freight

Use actual packed cargo including original and added cargo packaging, retained wood moisture and factory finish; vehicle/noncargo tare alone is subtracted from same-state gross. Avoid delivered/provider overlap.

- Identity requirement: Actual packed toy-set and operating freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual exclusively attributed physical amount / N from cp_freight
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Require unique load/leg IDs, EACH versus TOTAL basis, measured payload or gross/noncargo tare, native quantity-distance factors and complete all-user shares; no nominal part/set mass.

#### environmental_water

Only actual merchant-operated withdrawal crosses this boundary; inherited block/box moisture and ambient uptake do not establish extraction.

- Identity requirement: Actual direct source-specific water abstraction
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed physical amount / N from cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Require withdrawal source/location/meter interval/native conversion and non-overlap with purchased water; no wood-moisture-to-water-supply proxy.

#### usable_supply_returns

Only actual same-scope standalone supply SKU/state returns belong here. Consumed-only input accounting OMITs the matched return exchange. Internal loops/recovered retained stock stay closing; merchandise sets/parts/finish/box returns are stock audit.

- Identity requirement: Actual matched unused service-supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require recipient/native quantity and matched input provenance; no netting inherited factory coat or toy parts against unrelated current supplies, negative inputs or automatic credits.

#### discarded_toy_sets

Use actual separately evidenced receiver state/quantity for discarded sets, individual parts, fragments or mixed original packs. Whole set, component wood/moisture/coating and pack views are non-additive. Missing one block does not establish whole-set discard or upstream loss.

- Identity requirement: Actual discarded toy sets, parts, fragments or original packs
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_toysets
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_toysets`

Range evidence need: Require actual disposition, set-to-part genealogy, native amount/state/net-tare and receiver/treatment coverage with exclusive original-gate correspondence; an incomplete box or weight deficit is not discarded mass.

#### other_wastes

Record actual spent wipes, absorbents, filters and service-added packs; measured carrier plus absorbed liquid and collected wood/coat fragments form one mixed receiver stream. No manufacturing dust or repainting residue is invented.

- Identity requirement: Actual spent consumables and mixed cleanup solids
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Require receiver mixed mass and each carrier/absorbed-liquid/fragment native unit/basis/source and fate; component audits do not add again to the whole mixed waste or commodity discard.

#### contained_wastewater

Measure actual free liquid transferred to treatment from performed facility work, separate from retained toy moisture/coat and liquid held in cleanup solids. No block washing/paint shop effluent is assumed.

- Identity requirement: Actual contained facility wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed physical amount / N from cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Require actual collected/received native volume/composition/event/source and receiver/treatment scope; supplied water and wet wipe mass are not wastewater-volume estimates.

#### water_outfalls

Only measured actual environmental discharge is an outfall; contained transfer is Waste. Moisture exchange in wood/box remains product-state audit unless an actual relevant release is established.

- Identity requirement: Actual direct environmental service-water outfall
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed physical amount / N from cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Require actual receiving location/medium/interval/volume and composition/fate evidence with native factors; damp packaging or cleanup does not prove discharge.

#### direct_species

Expand only actual chemical/species/particle-size and receiving-medium evidence from real combustion, maintenance or incidents. Wood carbon, acrylic paint/clear lacquer content, odour, aging, missing part or stock deficit does not quantify CO2, VOC or dust.

Residual inventory requirement after the independently identified cases `direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual identified species and receiving-medium releases
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N from cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Require actual species/medium measurement or compatible activity/factor with native units, composition, temperature and fate basis/source applied once; no universal finish-emission factor.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| real_commercial_gate | accepted_service | Require N>0 actual unique owned/resold final business-accepted consignments after reversals with all sixteen qualifiers; no set/block/kg/price substitution. |  |
| set_part_finish | merchandise | Check actual complete set-part genealogy/count/shapes/box inclusions, actual wood/paint/clearcoat and native net/gross/tare/component/moisture state/unit/basis/method/sampletime/source. No universal forty parts/age/pack net mass/conformity guarantee. | ikea-construction-toy |
| actual_route_only | toy_wholesale | Link all batch/period/changeover/idle/failed/rejected/unfinished and real condition checks; actual missing/damaged/contaminated set/parts have unique quarantine/return/useful-other/discard/sample fates. No hidden assembly/play/testing/repaint/cleaning/repack route. |  |
| complete_exclusive_source | commodity interface | Verify complete finished-gate stages and original-unit/state/source demand with direct trace OR positive complete competing all-exit drivers, each quantity/unit/basis/source/link/owner incl closing/useful-other/return/proven loss, no accepted-only or direct+driver overlay. Unknown is no zero; baseline identical stage/loss coverage and required additional demand link outside once. |  |
| full_asset_all_users | all resources | Require actual all consumer/period driver records, full asset manufacture/maintenance/replacement/EOL, observed+sourced remaining/termination compatible units and uncertainty/sensitivity/update; no duplicate asset/provider or N. No-acceptance resources retain attribution. |  |
| stock_fates_freight | all physical inventory | Verify net-receipt/closing/recovery/matched-return provenance and gross+return OR consumed-only OMIT return, nonnegative unrelated scopes. Mixed/whole/component/free-liquid/species views non-additive with receiver treatment once. Freight retains original/new cargo packs/moisture/finish, subtracts only vehicle/noncargo tare, uses unique EACH/TOTAL loads, explicit native factors/full shares/N once. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/completeness review |
| downstream_use | Physical own-account toy-set wholesale service add-on separately linked to complete finished original source commodity demand/coverage |
| allowed_use | Actual manufacturer-complete original-box non-electronic painted wooden construction block toy-set B2B wholesale with compatible native set/part/finish/state evidence |
| excluded_use | Standalone toy footprint or play/safety/compliance claim; raw wood/unfinished parts/electronic toys; manufacture/assembly/play/testing/cleaning/repaint/repack; retail/agency/storage-only |
| required_metadata | Actual SKU/lot/set-part genealogy/completeness/shapes/native counts/material/paint/clearcoat/box/net-tare/component-moisture method/state/time/source/age-label and buyer-criteria source, real commercial gate/time/site/period, complete source assignment and baseline loss coverage, all service/asset/provider/freight/treatment owners |
| required_quality_disclosure | Identity/support/genealogy/measurement/sampling/state uncertainty, unknown stock/fates, actual complete source assignment/baseline scope gaps, all-user asset remainder assumptions and independent card evidence limitations |
| update_trigger | Changed actual set composition/material/finish/box/completeness/measurement/acceptance or active assembly/testing/cleaning/repaint/repack route; source gate/assignment/coverage, provider/asset/freight/treatment or conversion method |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-construction-toys | official_guidance | UNSD CPC3 explanatory notes (30 June2025),38540 construction toys and61053/group385. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: boxed wooden construction toy sets are a narrower games/toys wholesale scope, not all385 manufacture. |
| ikea-construction-toy | official_guidance | IKEA UNDERHALLA wooden building block set005.066.84, current public manufacturer materials/care/packaging body. https://www.ikea.com/us/en/p/underhalla-40-piece-wooden-building-block-set-multicolor-00506684/ | Qualitative actual solid-birch/acrylic-paint/clear-acrylic-lacquer set and original-pack/completeness questions only. No universal part count, age/safety/conformity promise, package-weight=net, lifetime or merchant play/cleaning/testing prescription. |
