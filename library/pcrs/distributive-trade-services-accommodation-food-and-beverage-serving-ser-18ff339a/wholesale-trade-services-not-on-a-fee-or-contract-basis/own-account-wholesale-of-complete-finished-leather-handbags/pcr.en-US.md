---
pcr_id: pcr.own-account-wholesale-of-complete-finished-leather-handbags
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of complete finished leather handbags

## 1. Scope and Applicability

This rule covers actual complete factory-finished leather handbags, with actual lining, hardware/closures, included detachable straps/accessories and supplied original packaging, through ordinary ambient merchant-owned/resold physical B2B wholesale. Start from the actual complete finished supplier gate; include real receiving, document/visual completeness and condition records, stock/handling and commercial acceptance. Raw hides/tanned leather, unfinished panels, separately traded accessory-only goods or substitute bag materials do not constitute this complete handbag gate. Exclude tanning, cutting/sewing, finish application, repair, bag cleaning/conditioning, assembly/repacking, consumer wear, retail, fee agency and storage-only services.

The inventory is a service add-on. All actual complete commodity and inherited pack manufacture, including upstream production associated with real losses, remains outside this service. Before whole-chain readiness, separately quantify/link original finished-gate demand once with native unit/state/conversions, exclusive source assignment and identical baseline stage/loss coverage. Actual physical handling and declared receiver transport/treatment remain included once. Commercial price, margin, handbag pieces, component mass or brand value cannot replace the reference service count.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-wholesale-of-complete-finished-leather-handbags |
| classification_refs | CPC3 61056 leather goods/travel accessories wholesale; narrower finished leather handbags of29220/group292 |
| covered_products | Actual complete finished leather-handbag ambient own-account B2B consignment service |
| excluded_products | Raw hides/leather, unfinished panels/accessory-only or nonleather bags; tanning, cutting/sewing, coating, repair/cleaning/assembly/repack, consumer use, retail/agency/storage-only |
| representative_product | Actual complete supplier model/lot with native bag-component BOM, included-versus-separate straps/hardware/lining, finish and original package at accepted commercial gate |
| production_route | Complete finished supplier handbag gate -> ownership receipt/ambient stock/completeness-condition handling -> final B2B acceptance/resale |
| market_state | Counted physical wholesale service, while actual bag/component/net-tare/moisture/finish/pack quantities remain nonexchange commodity audit |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account complete finished leather-handbag wholesale consignment |
| How much | 1 Item(s) |
| How well | Actual complete leather handbag with sourced BOM/included accessories/finish, quantity/state and buyer acceptance criteria; no authenticity, future wear or lifetime guarantee from an example product |
| How long or cycle | Actual receipt/stock/handling/final acceptance interval, separate commodity/reporting periods and full asset lifecycle phases |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account complete finished leather-handbag wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_acceptance_gate; actual_model_SKU_lot_bag_ids; bag_component_genealogy; lining_hardware_closure_evidence; included_versus_separate_straps; actual_leather_material_finish_source; original_packaging_inclusions; complete_finished_supplier_gate; native_bag_component_counts; net_gross_tare_moisture_basis; component_method_state_sampletime_source; actual_start_end_duration_unit; site_campaign_reporting_period; source_gate_assignment_coverage_owner |

Positive N counts unique real final business-accepted commercial consignments with reversals reconciled, not bags/straps/hardware pieces, kg or money. Failed/rejected/idle/unfinished cross-period resources retain attribution.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| bag_component_native | commodity audit | Count for native bag/accessory counts; Mass for stated finished mass | Actual native bag/component counts; kg for declared net/gross/tare | Use actual bag/BOM/pack IDs, native counts and measured finished mass, with included-versus-separately-sold components and original pack exclusions explicit. Actual sourced genealogy controls bag-to-part conversion; a missing included strap is not automatic whole-bag quantity/loss. | coach-finished-handbag |
| component_state | independent component measurements | Mass for component mass; mass fraction for reported moisture/content | kg; actual wet/dry-basis fraction or % | Each independently measured leather, lining, hardware, moisture or finish quantity has its own native unit/basis/method/state/sampletime/source and representative scope. No whole-bag mass, nominal leather fraction or assumed chemistry substitutes for component evidence. |  |
| native_conversion | all native quantities | Actual measured native property and dimensionally compatible target property | Native unit -> compatible target unit with explicit factor units | Record conversion method/factor/unit/basis/source for actual state. Mass-volume conversion requires applicable measured/evidenced density/unit/temperature/temperature_unit/source; no universal handbag dimensions, nominal kg/bag, finish recipe or strap-count multiplier. |  |
| actual_reference | all service resource quantities | Count for service denominator; actual native property for each physical resource | Item(s) denominator; actual physical row unit per Item(s) | Directly trace actual events or use compatible positive complete all-consumer physical drivers, retaining failed/idle/rejected/unfinished work. Assigned totals divide N once. Count support identifies a measurement chain, not a handbag or wholesale-service identity. |  |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete factory-finished leather handbag, actual lining/hardware/closure/included detachable straps and original pack, native counts/net-tare/material/finish/moisture-state evidence |
| starting_condition_role | Inherited complete finished merchandise for downstream own-account wholesale, not raw hide/leather preparation or new finishing |
| product_classification_scope | Narrower61056 covers declared finished handbag29220/group292 service only;61056 also includes other goods such as2831/291 outside this method |
| recursive_input_rule | Keep traded complete bags/included components/retained moisture and finishes/original packs as nonexchange stock audit. They are not service-consumed leather/textile/metal/chemicals/water. |
| upstream_dataset_requirement | Separate source dataset must reach the actual complete finished handbag supplier gate with relevant material supply, leather processing, cutting/sewing/assembly/finishing/complete accessory release and inherited packaging. Raw hide/tanned leather or a component basket alone omits finished stages. |
| disclosure | Actual bag-component BOM and inclusions, material/finish/native quantity/net-tare/moisture/independent component method-state-time-source, acceptance/time and complete native source assignment/loss coverage; service/asset/provider/freight/receiver owners and unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| complete_commodity | commodity interface | All complete bag/leather/lining/hardware/strap/finish/original-pack production including lost upstream stays outside service. Separately quantify/link actual original finished gate and identical baseline stage/loss coverage once; include actual physical service and declared receiver transport/treatment once. |  |
| primary_limits | handbag_wholesale | Actual manufacturer mixed leather/lining/hardware/closure/detachable-strap details support configuration/completeness questions only. Brand/dimensions/price/strap number/surface gloss do not establish chemical formulation, net mass, life/authentication or merchant care/testing procedure. | coach-finished-handbag |
| unknown_is_not_fate | state audit | Missing accessory, damage/scuff, wet-mass change, actual discard and releases are distinct. Unknown residual is not zero, whole-bag/leather loss or chemical emission; establish actual fate. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| handbag_wholesale | Finished leather-handbag merchant receipt, stock and accepted handover | required | Actual complete factory-finished leather-handbag own-account B2B acceptance | Physical receipt/stock/condition/completeness/handling/handover without manufacture/repair/cleaning/wear | `accepted_service` |

Merchant consignments overlap warehouse batches and continuous support intervals. Link real receipt/document/visual completeness-condition records and performed representative measurements with sample removal/return/fate, including cleanup/changeover/idle/failed/rejected/unfinished/dispatch/acceptance events, to lots/periods. No every-bag opening/test or wear/authentication activity is mandatory. Missing included straps, broken closures, staining or pack damage take disjoint actual quarantine/supplier-return/useful-other-exit/discard routes; do not assume dismantling/repair/replacement straps/cleaning/repack. No-acceptance intervals retain actual resources across periods until attributed before one per-N normalization.

### Process: Finished leather-handbag merchant receipt, stock and accepted handover (`handbag_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual uniquely assigned physical amount / N under cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter/readings and all-consumer/event allocation including idle, failed and unfinished work, with delivered/provider coverage; no electricity per bag from leather appearance or price.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual uniquely assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native volume, source/purpose/interval and supplier coverage, independently evidenced fates; a damp lining or water receipt is not wastewater quantity.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual SKU/purpose, net receipts/opening/closing/returns, composition and cleanup carrier/absorbed contents/source; finish presence cannot quantify warehouse chemicals or emissions.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual uniquely assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need grade/native stock, disjoint burn/usable-return/waste/loss evidence and applicable density/temperature/unit/source conversions, not an assumption that purchased fuel all burns.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account complete finished leather-handbag wholesale consignment (`accepted_service`)

One real merchant-owned/resold B2B accepted commercial consignment of supplier-complete finished leather handbags with actual BOM/included accessories and original packaging state. Actual quantity/completeness/material/finish/time qualify the service, not manufactured handbag pieces, brand value or future durability.

- Selected flow: Completed own-account complete finished leather-handbag wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Need actual ownership/acceptance and SKU/lot/BOM, bag-versus-included/separately-sold strap/hardware identity, net/tare/moisture/condition/native quantity/time; no fixed brand, dimensions, strap count, price or care/lifetime requirement.

##### Waste flows

###### Discarded complete finished leather handbag (`discarded_handbags_atomic_case`)

Conditional on independently recorded actual Discarded complete finished leather handbag. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_handbags`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete finished leather handbag
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_handbags
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handbags`

Range evidence need: Need actual disposition/BOM genealogy/native quantity/state/net-tare and receiver treatment scope with exclusive original-gate correspondence; surface scuff or unknown weight difference is not discarded leather/bag kg.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need identified species/medium measurement or compatible actual activity/factor, native units and factor coverage, composition/fate/temperature/pressure basis/source as needed once; no generic leather/finish emission factor.


###### Actual separately evidenced fossil methane emitted to air (`direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need identified species/medium measurement or compatible actual activity/factor, native units and factor coverage, composition/fate/temperature/pressure basis/source as needed once; no generic leather/finish emission factor.


###### Actual separately evidenced nitrous oxide emitted to air (`direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need identified species/medium measurement or compatible actual activity/factor, native units and factor coverage, composition/fate/temperature/pressure basis/source as needed once; no generic leather/finish emission factor.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| resource_attribution | all service resources | Use actual direct event evidence, or quantity×compatible target_driver/positive complete all_consumer_driver with units/bases/sources and exclusive owners. Include idle/changeover/failed/rejected/unfinished and other customers/periods, reconcile carries and normalize assigned accepted-cohort total by N once. Price/margin are not physical drivers. |  |
| original_gate_assignment | commodity interface | For each actual complete source lot/state select either direct traced/measured assigned_gate_demand with native unit/state/source/direct evidence/exclusive exits OR assigned_gate_demand=actual_source_gate_quantity×target_driver/source_all_exit_driver. Positive source_all_exit_driver equals complete compatible competing accepted/useful-other-exit/returns/closing-carry/proven actual-loss records, each quantity/unit/basis/source/link/owner. Never accepted-only, missing-loss=zero or simultaneous direct+driver views. Explicit actual loss ownership prevents duplicate assignment. Preserve original/native assigned/additional/baseline demand unit/state/source and sourced conversions; link required additional demand outside once only after identical baseline stage/loss coverage. |  |
| operating_stock_returns | service supplies | Let S=assigned opening+NET external receipts-closing including retained recoveries. Use gross S/N and matched actual unused external return OR consumed (S-return)/N and OMIT matching return exchange. Internal loops/retained recoveries are stock. Actual waste/consumption retains supply burden; inherited handbag components/finish cannot be netted against unrelated current service supplies or create negative amounts/automatic credit. |  |
| asset_lifecycle | assets and providers | Full asset manufacture/maintenance/actual replacement/EOL is assigned with actual used_driver/complete lifetime_all_consumer_driver, compatible units and observed+sourced remaining life/termination. Keep uncertainty/sensitivity/update and all consumers/periods explicit. Use asset equivalent OR lifecycle-complete provider, never both; apply N once unless already per reference. |  |
| fate_ownership | all actual material fates | Whole handbags, individual component/pack and leather/lining/metal/moisture/finish audits are non-additive. Spent mixed carrier/absorbed liquid/collected fragment, free wastewater and actual direct species retain exclusive stream/receiver/treatment scope. Rejected/unfinished work remains burdened and outside N. No automatic salvage credit or duplicate receiver transport/treatment. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | handbag_wholesale | accepted_service | commercial handover | consignment_id; merchant_id; ownership_resale_evidence; business_buyer_id; acceptance_gate; acceptance_time; acceptance_source; reversal_ids; unique_accepted_count; N; model_SKU_lot_ids; bag_component_genealogy; completeness_record; material_finish_evidence; buyer_criteria_source; start_time; start_time_source; end_time; end_time_source; time_zone; time_unit; duration; duration_unit; duration_source; site_id; campaign_id; reporting_period; failed_rejected_unfinished_ids; attribution_owner | Match actual ownership/resale, buyer acceptance and reversal records to unique completed consignments and actual model/lot/component/completeness conditions. Record original timestamps/timezone/duration units/sources, site/campaign/period and no-acceptance events. Neither handbag count nor future care is the service result. | Actual accepted Count Item(s), date/time and native duration | Each actual event/meter interval with traceable original records | Actual service/stock/reporting periods and applicable full asset life | Actual merchant facility/all relevant users and declared providers/receivers | per reference flow | Original quantity/unit/basis/source, measurement/calibration/method/sample-state/coverage and uncertainty |
| cp_handbags | handbag_wholesale | nonexchange handbag stock and discarded_handbags | finished product/parts/pack audit | source_lot_id; model_SKU; bag_ids; component_ids; component_role; component_counts; component_count_unit; component_count_source; bag_component_genealogy; genealogy_source; actual_BOM; included_accessory_ids; separately_sold_accessories; strap_material_evidence; hardware_closure_evidence; lining_material_evidence; leather_material_evidence; material_source; factory_finish_identity; finish_source; completeness_state; original_pack_inclusions; buyer_criteria_source; actual_native_quantity; native_unit; quantity_basis; quantity_source; gross_mass; gross_unit; gross_source; packaging_tare; packaging_unit; packaging_source; net_finished_mass; net_mass_unit; net_mass_basis; net_mass_source; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; sample_representativeness; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_source; conditioning_state; sample_time; temperature; temperature_unit; temperature_source; opening; supplier_external_receipts; buyer_returns; closing; dispatch; supplier_returns; useful_other_exits; actual_discard; net_sample_removal; unknown_residual; stock_unit; stock_state; stock_source; disposition_ids; receiver; treatment_coverage; actual_source_gate_quantity; source_gate_unit; source_gate_state; source_gate_quantity_source; source_complete_stage_evidence; assignment_view; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_state; assigned_gate_demand_source; direct_assignment_evidence; exclusive_exit_links; target_driver; target_driver_unit; target_driver_basis; target_driver_source; source_all_exit_driver; source_all_exit_driver_unit; source_all_exit_driver_basis; source_all_exit_driver_source; competing_exit_driver_records; exit_record_quantity; exit_record_unit; exit_record_basis; exit_record_source; exit_record_link; exit_record_owner; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_source; baseline_demand; baseline_demand_unit; baseline_demand_state; baseline_demand_source; baseline_stage_loss_coverage; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_state; additional_gate_demand_source; exclusive_loss_assignment; commodity_adjustment_owner; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Measure/trace actual complete finished bag with included lining/hardware/straps and original pack. Preserve BOM and included-versus-separate accessory genealogy, native gross/net/tare and independent component/moisture unit/basis/method/state/sampletime/source. Track all disjoint stock/sample/return/useful-other/closing/discard exits and unknown residual. Choose direct actual assigned source quantity with evidence OR Qsource_actual×Dtarget/positive complete all-exit driver; keep every competing exit record quantity/unit/basis/source/link/owner. No accepted-only/direct-driver overlap. Record compatible original-state conversion and assigned/additional/baseline native unit/state/source with identical complete-stage/loss coverage outside service once.  Commodity receipts mean supplier external receipts only; buyer returns are separate and internal moves cancel in pairs. Dispatch means actual physical shipment to business buyers, excluding separately counted supplier returns/useful-other exits. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native bag/component/pack counts, kg and declared component/moisture bases | Each actual event/meter interval with traceable original records | Actual service/stock/reporting periods and applicable full asset life | Actual merchant facility/all relevant users and declared providers/receivers | per reference flow | Original quantity/unit/basis/source, measurement/calibration/method/sample-state/coverage and uncertainty |
| cp_energy | handbag_wholesale | electricity and actual fuel burn | meter and burn interval | meter_id; energy_quantity; energy_unit; meter_start; meter_end; interval; source; operation_purpose; burn_quantity; burn_unit; burn_basis; burn_source; fuel_identity; conversion_factor; conversion_unit; conversion_basis; conversion_source; event_ids; period_ids; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual meter intervals and distinct fuel-burn evidence with native factors/sources. Include lighting/handling/support/changeover/idle/failed/unfinished users and periods in complete physical-driver attribution before one N. Fuel delivery and inherited finish do not measure combustion. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual kWh and native burn quantity/unit | Each actual event/meter interval with traceable original records | Actual service/stock/reporting periods and applicable full asset life | Actual merchant facility/all relevant users and declared providers/receivers | per reference flow | Original quantity/unit/basis/source, measurement/calibration/method/sample-state/coverage and uncertainty |
| cp_supplies | handbag_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | supply stock and native fates | supply_SKU; purpose; composition; composition_basis; composition_source; provenance_owner; period; opening; external_receipts_net; closing_including_retained_recovery; native_unit; quantity_basis; quantity_source; usable_external_return; return_unit; return_recipient; matched_input_id; matched_state_scope; internal_loop; retained_recovery; waste_quantity; waste_unit; burn_quantity; burn_unit; actual_fate_source; accounting_view; conversion_factor; conversion_unit; conversion_basis; conversion_source; density; density_unit; density_temperature; temperature_unit; density_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | External receipts are NET supply quantity excluding container tare. Evidence actual SKU/purpose/formulation/stock/returns and fates, including conditional wipes/absorbents/filters, native density/temperature/conversion and complete all-user driver units/bases/sources. S=opening+netreceipts-closing includes retained recovery; use gross plus matched unused return OR consumed-only and OMIT matched outlet. No inherited handbag finish as current service supply. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual supply native kg/m3/L or supported physical unit | Each actual event/meter interval with traceable original records | Actual service/stock/reporting periods and applicable full asset life | Actual merchant facility/all relevant users and declared providers/receivers | per reference flow | Original quantity/unit/basis/source, measurement/calibration/method/sample-state/coverage and uncertainty |
| cp_assets | handbag_wholesale | shared_assets | complete lifetime service | asset_id; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; provider_scope; consumers; periods; used_driver; used_driver_unit; used_driver_basis; used_driver_source; observed_life_driver; observed_driver_unit; observed_history_source; remaining_life_driver; remaining_driver_unit; remaining_evidence_source; termination_evidence; lifetime_all_consumer_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; conversion_factor; conversion_unit; conversion_source; uncertainty; sensitivity; update_trigger; attribution_owner; already_per_reference; observed_driver_basis; remaining_driver_basis; conversion_basis; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share | Document actual shared assets, all consumers and periods, full manufacture/maintenance/real replacement/EOL, observed history plus sourced remaining/termination. Actual used/lifetime driver units/bases and any conversion must be compatible. Disclose uncertainty, sensitivity and update evidence. One asset-equivalent OR lifecycle-complete provider, one per-N representation. | Actual compatible lifetime-driver units and asset-equivalent Item(s) if supported | Each actual event/meter interval with traceable original records | Actual service/stock/reporting periods and applicable full asset life | Actual merchant facility/all relevant users and declared providers/receivers | per reference flow | Original quantity/unit/basis/source, measurement/calibration/method/sample-state/coverage and uncertainty |
| cp_providers | handbag_wholesale | provider_services | actual result and coverage | provider_id; event_id; native_result; result_unit; result_basis; result_source; service_scope; measurement_method; sample_ids; sample_representativeness; sample_removed; sample_return; sample_fate; material_coverage; energy_coverage; asset_coverage; freight_coverage; receiver_treatment_coverage; excluded_testing_scope; period; conversion_factor; conversion_unit; conversion_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_owner; target_driver_basis; all_consumer_driver_basis; attribution_share | Establish performed physical support result/unit/source and provider materials/energy/assets/freight/treatment coverage. Distinguish document/visual completeness or actual representative condition measurement from bag repair/cleaning/wear/authentication tests excluded here; record samples removed/returned/fated without assuming every bag is tested. | Actual provider-native physical result unit | Each actual event/meter interval with traceable original records | Actual service/stock/reporting periods and applicable full asset life | Actual merchant facility/all relevant users and declared providers/receivers | per reference flow | Original quantity/unit/basis/source, measurement/calibration/method/sample-state/coverage and uncertainty |
| cp_freight | handbag_wholesale | freight | unique actual packed load-leg | load_id; leg_id; cargo_ids; load_quantity; load_unit; load_basis_each_or_total; load_source; repeated_load_count; repetition_source; actual_packed_payload; payload_unit; payload_state; payload_source; vehicle_gross; vehicle_gross_unit; gross_source; vehicle_noncargo_tare; noncargo_tare_unit; tare_source; original_cargo_pack; added_cargo_pack; retained_moisture_finish; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_basis; distance_conversion_source; empty_return_coverage; delivered_provider_coverage; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; unique_scope_owner; already_per_reference; gross_conversion_factor; gross_conversion_unit; gross_conversion_basis; gross_conversion_source; tare_conversion_factor; tare_conversion_unit; tare_conversion_basis; tare_conversion_source; target_driver_basis; all_consumer_driver_basis; attribution_owner | For each unique load-leg use measured packed payload OR same-state vehicle gross minus ONLY vehicle/noncargo tare. Keep all original/added cargo packaging, included handbag components and retained moisture/finish; no duplicate component addition. Gross/tare/load/distance native conversions have factor units/bases/sources. EACH may multiply evidenced repeated-load count; TOTAL never repeats. Attribute complete all-user physical share once, sum unique assigned kg*km and divide N once unless already per reference; reconcile empty/return/delivered/provider coverage. | Native cargo and distance compatibly converted to kg*km | Each actual event/meter interval with traceable original records | Actual service/stock/reporting periods and applicable full asset life | Actual merchant facility/all relevant users and declared providers/receivers | per reference flow | Original quantity/unit/basis/source, measurement/calibration/method/sample-state/coverage and uncertainty |
| cp_fates | handbag_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | actual withdrawal and receiver/outfall state | event_id; source_location; receiving_location; receiving_medium; flow_identity; native_quantity; native_unit; quantity_basis; quantity_source; interval; composition; composition_basis; composition_source; fate_basis; fate_source; mixed_receiver_mass; mixed_mass_unit; mixed_mass_basis; mixed_mass_source; carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; free_liquid_volume; liquid_volume_unit; liquid_volume_source; density; density_unit; density_temperature; temperature_unit; density_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; nonadditive_view; attribution_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share | Measure actual withdrawal, mixed received solids, contained free liquid or direct outfall separately. Retain actual carrier/absorbed-liquid/fragment native units/bases/sources, composition/fate/receiver transport-treatment coverage, density/temperature and conversion evidence. Whole mixed stream and component audits are not additive to commodity discard or each other; water receipts do not establish effluent. | Actual native mass/volume converted compatibly to kg/m3 | Each actual event/meter interval with traceable original records | Actual service/stock/reporting periods and applicable full asset life | Actual merchant facility/all relevant users and declared providers/receivers | per reference flow | Original quantity/unit/basis/source, measurement/calibration/method/sample-state/coverage and uncertainty |
| cp_releases | handbag_wholesale | direct_species | actual species and receiving medium | event_id; species_identity; particle_size; receiving_medium; measurement; measurement_unit; measurement_basis; measurement_source; activity; activity_unit; activity_basis; activity_source; factor; factor_unit; factor_basis; factor_source; factor_coverage; burn_fraction; burn_fraction_source; composition; composition_unit; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; time_interval; period; provider_coverage; nonadditive_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; attribution_owner; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Require actual chemical/species/particle identity and receiving-medium evidence with real measurement or compatible activity-factor units/bases/sources and factor coverage. Apply composition/fate or gas/concentration conversions only as required once with temperature/pressure units/sources. Do not infer release from leather/plating chemistry, gloss, odour, time or missing mass. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual species native quantity compatibly converted to kg | Each actual event/meter interval with traceable original records | Actual service/stock/reporting periods and applicable full asset life | Actual merchant facility/all relevant users and declared providers/receivers | per reference flow | Original quantity/unit/basis/source, measurement/calibration/method/sample-state/coverage and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_normalization | all service rows | Trace direct actual events OR actual quantity×compatible target_driver/positive complete all_consumer_driver, with native units/bases/sources. Retain idle/failed/rejected/unfinished/other-user/period burdens, then divide unique assigned cohort total by accepted N once, not already-normalized values again. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual per-reference physical service inventory |  |
| bag_stock_state | commodity audit | At compatible native stock state: opening+supplier_external_receipts+buyer_returns-closing-dispatch-supplier_returns-useful_other_exits-actual_discard-net_sample_removal=unknown_residual. Match actual bag-component/pack genealogy and independent material/moisture/finish measurements with units/bases/method/state/sampletime/source. Missing accessory does not establish whole-bag loss; residual is not release/waste or zero. | cp_handbags | Explicit complete stock/exits and unresolved state |  |
| source_finished_demand | commodity interface | Choose direct traced/measured assigned quantity with unit/state/source/evidence/exclusive exits OR Qsource_actual×Dtarget/Dall_exits, Dall_exits>0 equals sum of complete compatible competing accepted/useful-other/returns/closing-carry/proven-loss driver records, each quantity/unit/basis/source/link/owner. No accepted-only or direct+driver overlay. Actual original-gate conversion has method/factor/unit/basis/source; assigned/additional/baseline demands each preserve unit/state/source. Link required complete finished-stage/loss demand outside once after identical existing baseline coverage, never generic loss multipliers. | cp_handbags; cp_consignment | Separate complete original finished source-demand/loss interface |  |
| unique_packed_freight | freight | Measure packed payload OR same-state vehicle gross minus ONLY vehicle/noncargo tare. Retain cargo packaging/handbag components/moisture/finish; component audits are nonadditive. Unique EACH loads multiply evidenced count only, TOTAL never again. Convert native payload×distance through factor units/bases/sources to kg*km, apply compatible complete all-user share once, sum unique assigned load-leg results and /N once unless already normalized. | cp_freight | Actual per-reference physical freight |  |
| actual_species | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | Use actual identified species/medium measurement OR compatible actual activity×factor with native units/bases/sources and complete factor coverage. Composition/fate/temperature-pressure or concentration conversions are method-dependent and apply once; material/plating/finish content and missing mass alone provide no emission quantity. | cp_releases; cp_energy; cp_handbags | Actual evidenced species per reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity_support | all rows | Resolve real complete-bag/component/material/finish and every service/provider/receiver/source/species identity with compatible native measurement support before final exchanges; Count support is distinct from merchant-service identity. | Actual supplier/BOM/lot/commercial records, verified details and native support |
| native_components | commodity/cleanup components | Require independent component quantity/unit/basis/method/state/sampletime/source and representative scope for leather/lining/hardware/moisture/finish or cleanup carrier/liquid/fragments; never substitute whole-bag mass, nominal composition or pack weight. | cp_handbags; cp_fates; cp_releases |
| coverage_life_unknown | all interfaces | Disclose actual genealogy/completeness/state/source assignment and baseline coverage gaps, unknown stock/loss/fates, provider/receiver scope, full all-user asset remaining-life evidence/uncertainty and row-specific range evidence needs. Authored candidate is not final dataset readiness. | Actual source/coverage matrix, foreground records and lifetime proof |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| facility_water | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_water` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| new_outer_protection | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `new_outer_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| fuel_supply | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| discarded_handbags | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_handbags` under `cp_handbags`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_handbags_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_handbags`; actual source-linked native records |
| other_wastes | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_wastewater | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| water_outfalls | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| direct_species | handbag_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Capture operated warehouse lighting, handling and business-support consumption in actual metered periods. No tanning, sewing, finish application, drying, repair or consumer use is included.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual handbag-wholesale electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual uniquely assigned physical amount / N under cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter/readings and all-consumer/event allocation including idle, failed and unfinished work, with delivered/provider coverage; no electricity per bag from leather appearance or price.

#### facility_water

Only actual warehouse sanitation and support water is purchased here; leather or lining moisture, inherited finishes and original packaging are commodity state. No handbag cleaning or conditioning is presumed.

Residual inventory requirement after the independently identified cases `facility_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased facility-support water
- Flow property / unit: Volume / m3
- Amount rule: Actual uniquely assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native volume, source/purpose/interval and supplier coverage, independently evidenced fates; a damp lining or water receipt is not wastewater quantity.

#### new_outer_protection

Record real added shipment cartons, protection, labels or straps by SKU/pack level. Original dust bags, tissue, boxes and protective covers, if supplied, belong to the actual finished merchandise gate. Reusable transport devices use lifetime service.

- Identity requirement: Actual service-added outer protection
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual added-versus-inherited quantities, net mass or evidenced native-count/area conversion and stock provenance; no new complete retail packaging or pallet per bag/consignment default.

#### operating_supplies

Expand actual equipment lubricants, cleaners, wipes, absorbents, filters and administrative supplies by measured native formulation/use. Factory leather finish, adhesives, lining and metal coatings are inherited merchandise, not current service chemical inputs. No bag polishing/cleaning/refinishing is introduced.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual maintenance and conditional facility-cleanup supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual SKU/purpose, net receipts/opening/closing/returns, composition and cleanup carrier/absorbed contents/source; finish presence cannot quantify warehouse chemicals or emissions.

#### fuel_supply

Separate native supply stock from measured combustion and nonburned waste/returns; examine whether hired handling/freight already includes fuel.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual owned handling fuel stock supply
- Flow property / unit: Volume / L
- Amount rule: Actual uniquely assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need grade/native stock, disjoint burn/usable-return/waste/loss evidence and applicable density/temperature/unit/source conversions, not an assumption that purchased fuel all burns.

#### provider_services

Use real handling, storage, visual/document completeness/condition checking, facility maintenance and business-support results in their actual native units. A manufacturer description or certificate does not establish a performed merchant assay, authentication or wear test.

- Identity requirement: Actual physical wholesale support results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual uniquely assigned physical amount / N under cp_providers
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need actual performed result and materials/energy/assets/freight/receiver-treatment scope; representative condition measurement needs method and sample removal/return/fate, without hidden repair/cleaning or consumer-use testing.

#### shared_assets

Cover actual facility, racks, handling equipment, metering, ICT and reusable cases/pallets across all users and periods with full lifecycle phases. The sold handbag is never a warehouse asset.

- Identity requirement: Full-life shared storage, handling and reusable assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual uniquely assigned physical amount / N under cp_assets
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need manufacture, maintenance, real replacement/EOL, compatible used/lifetime drivers, observed history and sourced remaining/termination, with uncertainty/sensitivity/update; no universal years or new asset every trip.

#### freight

Transported payload includes actual bags with included straps/lining/hardware, retained moisture/finish and original plus added cargo packs. Measured gross subtracts only vehicle/noncargo tare. Reconcile provider/delivered/empty-return scope.

- Identity requirement: Actual packed handbag and operating freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual uniquely assigned physical amount / N under cp_freight
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need unique load-leg IDs, EACH/TOTAL convention, measured cargo or same-state gross/tare, conversion units/bases/sources and all-user share; no nominal bag mass or leather-only cargo.

#### environmental_water

Include only real merchant-operated environmental withdrawal, distinct from purchased water and merchandise moisture exchanges.

- Identity requirement: Actual direct warehouse source-water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual uniquely assigned physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual source/location/meter interval/native unit conversion and extraction boundary; humid leather/lining does not measure water withdrawal.

#### usable_supply_returns

Recognise actual same-scope standalone service-supply SKU/state export to a recipient. Consumed-only inputs OMIT the matched return exchange. Retained recovery/internal loops stay closing; handbag/strap/lining/pack returns remain commodity audit.

- Identity requirement: Actual unused matched operating-supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native transfer/recipient/input provenance and matching scope; inherited finish or accessory exports cannot reduce unrelated maintenance supply or create negative input/automatic credit.

#### discarded_handbags

Use real evidenced discarded complete bags, separately discarded straps/parts/fragments or mixed original packs at receiver state. Whole bag and leather/textile/hardware/moisture/finish component views are non-additive. A missing strap or damaged clasp alone does not establish whole-bag disposal or upstream loss.

- Identity requirement: Actual discarded handbags, included components or original packs
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_handbags
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handbags`

Range evidence need: Need actual disposition/BOM genealogy/native quantity/state/net-tare and receiver treatment scope with exclusive original-gate correspondence; surface scuff or unknown weight difference is not discarded leather/bag kg.

#### other_wastes

Include actual spent wipes/absorbents/filters/service-added packs and collected fragments; the receiver mixed stream includes actual carrier, absorbed liquid and captured material without duplicate component addition. No tanning sludge or sewing/cutting scrap is assumed.

- Identity requirement: Actual spent operating supplies and mixed cleanup solids
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need measured received mass, carrier/liquid/fragment native units/bases/sources and actual composition/treatment owner; supplies purchases or inherited finish content do not quantify spent waste.

#### contained_wastewater

Measure actual free liquid transferred to a receiver from performed facility work; keep separate from leather/lining moisture and liquid absorbed in cleanup solids. No handbag wash/tanning/finishing effluent is presumed.

- Identity requirement: Actual contained facility-work wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual uniquely assigned physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual received/collected volume, composition, event/source and transport/treatment coverage; purchased water, damp packs or wet wipes are not an effluent volume proxy.

#### water_outfalls

Record only actual direct crossing to an identified environmental receiving medium; contained receiver transfer is Waste. Merchandise moisture changes do not establish an outfall.

- Identity requirement: Actual direct service-water environmental outfall
- Flow property / unit: Volume / m3
- Amount rule: Actual uniquely assigned physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual location/medium, native volume/interval and composition/fate sources with conversions; a stain or cleanup event is insufficient discharge evidence.

#### direct_species

Expand only actual substance/species/particle-size and receiving medium supported by real combustion, maintenance or incident measurement/method. Leather chemistry, finish/gloss, metal plating, smell, ageing or missing mass does not quantify chromium, VOC, dust or CO2.

Residual inventory requirement after the independently identified cases `direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual evidenced chemical-species releases to a receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Actual uniquely assigned physical amount / N under cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need identified species/medium measurement or compatible actual activity/factor, native units and factor coverage, composition/fate/temperature/pressure basis/source as needed once; no generic leather/finish emission factor.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| accepted_commercial_count | accepted_service | Check actual owned/resold unique final B2B accepted consignment N>0, reversals and all sixteen qualifiers. Bags, straps, kg, brand prices and certificates do not substitute for counted physical service. |  |
| complete_native_bag | merchandise | Verify actual model/lot/BOM, included-versus-separate accessories, lining/hardware/closure/leather/finish/original-pack contents, native net/gross/tare/moisture/component unit/basis/method/state/sampletime/source. No universal strap count, brand specification, care or lifetime assumption. | coach-finished-handbag |
| actual_route_exits | handbag_wholesale | Index real receipt/condition/completeness/check/cleanup/changeover/idle/failed/rejected/unfinished/dispatch/acceptance events to lot/period. Missing/damaged/stained bags/accessories require actual mutually exclusive quarantine/return/useful-other/discard/sample paths, not presumed repair/cleaning/dismantling/repack/wear-test. |  |
| source_all_exit | commodity interface | Verify complete finished handbag supplier stages, native source evidence and direct actual assignment OR positive complete competing all-exit driver records quantity/unit/basis/source/link/owner including closing/returns/useful-other/proven loss. No accepted-only, direct+driver overlap, unknown-loss zero or accessory=whole-bag loss; original conversions and identical baseline stage/loss coverage link required additional demand outside once. |  |
| asset_all_users | all physical resources | Check all consumers/periods, actual compatible drivers and full asset manufacture/maintenance/replacement/EOL with observed+sourced remaining/termination and uncertainty/sensitivity/update. Failed/no-acceptance resources remain attributed; asset/provider/per-N representations never overlap. |  |
| stock_fate_freight_views | all physical fates | Verify supply S and matched provenance, gross+unused-return OR consumed-only OMIT matching return, no unrelated negative netting/automatic credit. Whole/component/mixed cleanup/free-liquid/direct-species views nonadditive and receiver transport/treatment once. Freight retains cargo packs/components/moisture/finish, subtracts only vehicle/noncargo tare, unique EACH/TOTAL and native conversion/share/N once. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/completeness review |
| downstream_use | Finished leather-handbag merchant physical service add-on, separately linked to complete original finished commodity source demand/loss coverage |
| allowed_use | Actual complete factory-finished leather handbags with actual BOM/included accessories and original pack through ambient own-account B2B accepted handover |
| excluded_use | Standalone handbag footprint, raw hides/tanned leather or incomplete/accessory-only goods, other bag materials; tanning/cutting/sewing/coating/repair/cleaning/repack/use; retail/agency/storage-only |
| required_metadata | Actual model/SKU/lot/bag-component BOM/included-versus-separate straps/hardware/lining/leather/finish/original pack, native counts/net-tare/moisture/component method/state/sampletime/source, buyer criteria/acceptance/time/site/period, complete original-gate assignment/conversion/baseline coverage and all service/asset/provider/freight/receiver owners |
| required_quality_disclosure | Identity/support/BOM/completeness/measurement/state/sampling uncertainty, unknown stock/loss/fates, original finished-gate assignment and baseline scope gaps, all-user full asset lifetime assumptions and row-specific evidence limitations |
| update_trigger | Changed bag material/BOM/included accessories/finish/pack/state/measurement/acceptance, actual repair/cleaning/assembly/repack/use route, source gate/assignment/coverage, provider/asset/freight/treatment or conversion method |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-handbag-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025),29220 handbags and61056 leather-goods wholesale including2831/291/292. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification support only; declared finished leather-handbag wholesale is narrower than all61056 leather/furskin/travel goods. |
| coach-finished-handbag | official_guidance | Coach Tabby Shoulder Bag26 CH857, actual public manufacturer Product Details. https://www.coach.com/products/tabby-shoulder-bag-26/CH857-B4/HA.html?COHNA=true | Qualitative actual finished leather/lining/hardware/closure/detachable-strap configuration and completeness questions only; no universal brand/model, dimensions, price, strap number, leather species, alloy, finish chemistry, pack/net mass, wear/lifetime/care or authentication defaults. |
