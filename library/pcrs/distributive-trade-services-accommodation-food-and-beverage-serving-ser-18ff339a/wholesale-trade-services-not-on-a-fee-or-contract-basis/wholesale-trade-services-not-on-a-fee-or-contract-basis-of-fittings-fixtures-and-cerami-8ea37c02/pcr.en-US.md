---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-fittings-fixtures-and-cerami-8ea37c02
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of boxed glazed vitreous-china vessel washbasins

## 1. Scope and Applicability

For actual complete factory-fired/glazed vitreous-china vessel washbasins supplied in original cartons and owned/resold through ordinary ambient physical B2B wholesale. Record actual model/BOM, body/glaze and underside state, faucet/drain/overflow/hole configuration and INCLUDED versus separately sold components, native count/net-gross-tare/condition and real commercial gate. Manufacturer example features are configuration questions, never universal design or fixed accessories. This route excludes raw clay/unfired bodies, other sanitary materials/products, firing/glazing/crushing/repair/washing/repacking, installation/countertop cutting, faucet/drain/hydraulic testing and installed consumer water use, retail, fee agency or storage-only service.

All complete commodity/body/glaze/included-component/original-pack production, including upstream associated with actual losses, is outside this service add-on. Separately quantify and link the actual complete finished supplier gate, original native state/unit/quantity/conversion and exclusive demand assignment after identical baseline stage/loss coverage once before whole-chain readiness. Actual physical service and declared receiver transport/treatment are included once. Basin pieces, fragment mass, price/margin and an installed fixture function do not replace the counted commercial-consignment service.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-fittings-fixtures-and-cerami-8ea37c02 |
| classification_refs | CPC3 61062 fittings/fixtures/ceramic sanitary wholesale; narrower vessel washbasins37210 within class3721 |
| covered_products | Actual complete original-carton fired/glazed vitreous-china vessel washbasin own-account ambient B2B consignment service |
| excluded_products | Clay/unfired body, other fixtures/materials and separately traded fittings alone; manufacture/repair/wash/repack/installation/cutout/testing/use, retail/agency/storage-only |
| representative_product | Actual supplier-complete model/lot with native intact/fragment/component genealogy, body/glaze/holes/overflow/included-versus-separate fittings and original carton at buyer acceptance |
| production_route | Complete fired/glazed packaged supplier gate -> merchant ownership receipt/ambient stock/condition handling -> final business acceptance/resale |
| market_state | Physical service Count, with actual basin/included component/body/glaze/fragment/pack quantities as nonexchange commodity audit |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account boxed glazed vitreous-china vessel-washbasin wholesale consignment |
| How much | 1 Item(s) |
| How well | Actual complete original-carton glazed vitreous-china vessel basin with sourced configuration/quantity/condition and final business acceptance, not installed performance or future warranty |
| How long or cycle | Actual receipt-to-FINAL-acceptance cycle, distinct stock/reporting periods and complete asset phases; no-acceptance periods retain resources |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account boxed glazed vitreous-china vessel-washbasin wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_purchase_ownership_resale; actual_business_buyer; final_acceptance_gate_source_reversals; model_SKU_lot_basin_ids; complete_BOM_included_vs_separate; vitreous_body_glaze_underside_state; actual_faucet_drain_holes_overflow; original_carton_pack_inclusions; native_intact_fragment_component_counts; actual_net_gross_tare_basis; independent_component_method_state_time_source; complete_fired_glazed_supplier_gate; actual_start_end_timezone_duration_unit_source; site_campaign_reporting_period; original_gate_assignment_coverage_owner |

N counts only actual unique FINAL commercial acceptances with reversals resolved; supplier receipt alone is insufficient. Basin counts, fragment kg, prices or specification sheets are not the service. Divide only when N>0; at N=0 retain failed/cancelled/unfinished period resources and evidenced cohort assignment, never divide by zero or silently drop them.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| native_configuration | commodity audit | Count for native intact/component records; Mass for declared masses | Actual basin/component counts; kg for stated net/gross/tare/fragment mass | Document actual complete fired/glazed configuration, included versus separate fittings, original carton and native count/mass/state/source. Convert intact-to-fragment/component only with real same-origin genealogy and compatible sourced method; partial fragments, chips or absent separately sold fittings do not establish whole-basin loss. | kohler-vessel-basin |
| independent_components | component/state measurements | Mass for component mass; actual reported content property | kg or actual reported content/moisture unit and basis | Independent body/glaze/part/pack/moisture quantities require their own native unit/basis/method/state/sampletime/source and representative scope. Whole-basin mass is not each component mass, and no absorption/hydraulic/product test or universal glaze percentage is prescribed. |  |
| dimensioned_conversion | all physical quantities | Actual measured property and dimensionally compatible target property | Native -> compatible target unit with explicit factor units | Every actual conversion has factor/unit/basis/method/state/time/source; mass-volume conversion needs applicable density/unit/temperature/temperature_unit/source. Nominal drawing dimensions/capacity and generic ceramic density cannot provide actual basin kg, transport payload or waste. |  |
| final_service_count | reference and service inventory | Count for FINAL service denominator; actual native physical property per row | Item(s) denominator; row native physical unit per Item(s) | Verify actual merchant purchase/ownership/resale, business buyer, final gate/source and reversals. Attribute complete actual events/users/periods first and normalize by positive FINAL N once; N=0 resources remain assigned without division. Count support does not identify basin goods or service. |  |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete fired/glazed vitreous-china vessel basin, actual body/glaze/underside/holes/overflow/BOM/included-versus-separate parts, original carton and native quantity/state |
| starting_condition_role | Inherited factory-finished sanitary merchandise for physical wholesale, not unfired clay/body, installation or operated manufacture |
| product_classification_scope | Narrower61062 for declared37210/class3721 vessel washbasins only; plastic sanitary3693 and ceramic pipes3736/other fixtures outside this route |
| recursive_input_rule | Keep traded complete basins/body/glaze/included parts/original packs and actual fragment/return stock as nonexchange commodity audit, not current service-consumed clay/glaze/metal/water. |
| upstream_dataset_requirement | Separate complete actual supplier gate includes relevant material sourcing/body preparation/forming/firing/glazing/final release and actual included components/original carton manufacture as applicable. Raw clay, unfired body or body-only dataset alone misses complete fired/glazed packaged stages. |
| disclosure | Actual model/BOM/holes/overflow/inclusions/body-glaze/net-gross-tare/state/native intact-fragment genealogy, independent measurements and commercial gate/time, complete native source demand/coverage and service/asset/provider/freight/receiver owners/unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| finished_gate_once | commodity interface | All complete basin/body/glaze/included-part/original-carton manufacture including actual lost upstream stays outside service. Original finished-gate demand and identical baseline stage/loss coverage are separately quantified/linked once; actual service/receiver transport/treatment is counted once. |  |
| example_configuration | basin_wholesale | Example manufacturer vitreous-china vessel/glazed underside/no faucet hole/no overflow/separate faucet-drain informs actual model-content checks only. Dimensions/color/hole design, required installation accessories, cutout template/cabinet width and install directions are not universal inventory/operation/material defaults. | kohler-vessel-basin |
| separate_fates | state audit | Cracks, glaze chips/fragments, whole-basin discard, pack damage, unknown deficit and direct release are distinct. No crack=whole-basin loss, ceramic/glaze content=emitted species, or automatic recycling credit. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| basin_wholesale | Boxed glazed vessel-basin merchant receiving and commercial handover | required | Actual complete original-carton glazed vitreous-china vessel-basin own-account FINAL B2B handover | Physical receipt/completeness/condition/stock/handling and commercial acceptance without installation/cutout/water testing | `accepted_service` |

Actual consignments overlap warehouse batches and continuous support intervals. Link receipt/document/visual completeness-condition checks, real representative condition measurements/sample removal-return-fate, facility cleanup/changeover/idle/cancelled/failed/rejected/unfinished/dispatch/FINAL acceptance to lots/periods. No every-carton opening or every-basin hydraulic test is required. Breakage/glaze chip/fragments/missing included parts/crushed cartons need unique actual quarantine/supplier-return/useful-other-exit/discard-receiver/sample paths; absent separately sold faucet/drain is not missing complete-basin content. No default repair/crushing/washing/repack/install; changed actual operation requires review. No-FINAL-acceptance periods retain all actual resources until evidenced period/cohort attribution and one normalization only at positive N.

### Process: Boxed glazed vessel-basin merchant receiving and commercial handover (`basin_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively attributed physical amount / N under cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need native meter intervals/readings/source, complete actual consumers/events including idle/failed work and provider coverage; no kWh per basin from furnace or installed fixture data.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need purpose/supplier/native volume/interval and actual fates with measurement sources; purchased water or installed basin capacity cannot quantify contained wastewater or outfall.

###### Actual separately recorded polyethylene packaging film (`new_outer_protection_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need added-versus-original pack level/SKU, measured net mass or evidenced count/area conversion and actual stock use; no complete new retail carton or pallet per accepted consignment.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need purpose/SKU/net stock/native composition and real cleanup carrier/absorbed contents/captured-fragment evidence. Glaze on merchandise does not establish purchased chemicals or direct emissions.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual exclusively attributed physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need opening/net receipts/closing and disjoint actual burn/nonburned fates, density-temperature/conversion units/bases/method/sources where relevant; receipts alone do not measure combustion.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account boxed glazed vitreous-china vessel-washbasin wholesale consignment (`accepted_service`)

One unique FINAL actual merchant-owned/resold B2B accepted consignment of complete factory-fired/glazed vitreous-china vessel washbasins in actual original cartons. Actual basin/BOM/holes/overflow/included-versus-separate parts/quantity/state/time qualify this service; it is not manufactured basin count, installed water performance or price.

- Selected flow: Completed own-account boxed glazed vitreous-china vessel-washbasin wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Need actual merchant/purchase-resale/buyer/final gate/source/reversals, model/lot, carton and complete BOM, body/glaze/net-tare/native counts/condition and actual time; no universal geometry/color/hole/overflow, supplied faucet/drain or installed-test claim.

##### Waste flows

###### Discarded complete glazed vitreous-china vessel washbasin (`discarded_basins_atomic_case`)

Conditional on independently recorded actual Discarded complete glazed vitreous-china vessel washbasin. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_basins`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete glazed vitreous-china vessel washbasin
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N under cp_basins
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_basins`

Range evidence need: Need actual disposition/genealogy/native quantity/net-tare/state and receiver treatment with sourced original-gate equivalence; partial fragments or unknown mass deficit are not automatically one whole lost basin or emitted dust.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| events_all_users | all service resources | Assign actual direct events or actual quantity×compatible target_driver/positive complete all_consumer_driver using native units/bases/methods/states/times/sources and exclusive owners across all clients/periods. Keep idle/changeover/cancelled/failed/rejected/unfinished burdens. Count only unique FINAL accepted commercial consignments after reversals; normalize assigned total once only if N>0. At N=0 retain actual burden/period/cohort evidence without division. |  |
| complete_source_terminal | commodity interface | For each actual complete source lot/state choose ONE direct traced/measured assigned_gate_demand with quantity/unit/basis/method/state/time/source/direct evidence and exclusive terminal links OR assigned_gate_demand=actual_source_gate_quantity×target_driver/source_all_terminal_driver. The positive complete denominator sums compatible actual competing FINAL-accepted/useful-other/return/closing-carry/proven-loss terminal driver records, each quantity/unit/basis/method/state/time/source/link/owner. No accepted-only denominator, unknown loss zero, or direct+driver overlay. Record actual source/assigned/baseline/additional native quantity-unit-state-source and conversions, explicit exclusive loss owner and identical baseline stage/loss coverage; link required additional complete original-gate demand outside once. |  |
| supply_convention | service supplies | S=assigned opening+NET external receipts-closing including retained recoveries. Choose gross S/N plus actual matched unused external return OR consumed (S-return)/N and OMIT that matched return exchange. Internal loops/retained recoveries remain stock. Waste/consumption retains supply burden; no inherited ceramic/glaze/pack netting against unrelated current supply, negative input or automatic credit. |  |
| full_asset_owner | assets/providers | Assign full manufacture/maintenance/actual replacement/EOL by actual job-used_driver/complete all-consumer lifetime_driver with compatible native units/bases/methods/states/times/sources. Lifetime evidence includes observed history plus sourced remaining/termination, uncertainty/sensitivity/update and all consumers/periods. Use asset-equivalent OR lifecycle-complete provider once, never both or repeat N if already normalized. |  |
| fates_single_owner | commodity and service fates | Whole basin/fragment/body/glaze/included-part/pack views and mixed cleanup carrier/absorbed liquid/collected fragment versus free liquid/direct species remain exclusive/non-additive. Actual receiver transport/treatment has one scope owner after provider coverage; no default recycling credit. Rejected/unfinished/cancelled resources remain attributed without entering FINAL N. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | basin_wholesale | accepted_service | FINAL business acceptance | consignment_id; merchant_id; purchase_evidence; ownership_evidence; resale_evidence; business_buyer_id; acceptance_gate; acceptance_time; acceptance_source; reversal_ids; reversal_status_source; unique_FINAL_accepted_ids; N; N_period_cohort; model_SKU_lot_ids; basin_component_genealogy; actual_BOM; completeness_condition_evidence; buyer_criteria_source; start_time; start_time_source; end_time; end_time_source; time_zone; time_unit; duration; duration_unit; duration_method; duration_source; site_id; campaign_id; reporting_period; cancelled_failed_rejected_unfinished_ids; no_acceptance_resource_owner; attribution_owner | Collect actual merchant purchase/ownership/resale and named business-buyer final gate/source/reversal evidence. Count only unique FINAL acceptances after reversals for the stated period/cohort, not supplier receipts or invoices alone. Preserve cancellation/failure/reject/unfinished resource ownership and timestamps/timezone/duration method/unit/source; N=0 retains burdens without division. | Actual FINAL Count Item(s), actual timestamp and native duration | Each actual event or meter interval, traceable original records | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_basins | basin_wholesale | nonexchange basin stock and discarded_basins | finished intact/fragment/component state | source_lot_id; model_SKU; basin_ids; intact_fragment_ids; component_ids; actual_BOM; included_component_ids; separately_sold_faucet_drain; actual_faucet_holes; actual_overflow; underside_glaze_state; body_identity; glaze_identity; material_finish_source; original_carton_inclusions; buyer_criteria_source; genealogy_method; genealogy_source; completeness_condition; actual_native_quantity; native_unit; quantity_basis; quantity_method; quantity_state; quantity_sample_time; quantity_source; gross_mass; gross_unit; gross_basis; gross_method; gross_state; gross_sample_time; gross_source; packaging_tare; packaging_unit; packaging_basis; packaging_method; packaging_state; packaging_sample_time; packaging_source; net_finished_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; sample_representativeness; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_state; moisture_sample_time; moisture_source; conditioning_state; temperature; temperature_unit; temperature_source; opening; supplier_external_receipts; buyer_returns; closing; business_buyer_dispatch; supplier_returns; useful_other_exits; actual_discard; net_sample_removal; unknown_residual; stock_unit; stock_basis; stock_method; stock_state; stock_sample_time; stock_source; disposition_ids; receiver; treatment_coverage; actual_source_gate_quantity; source_gate_unit; source_gate_basis; source_gate_method; source_gate_state; source_gate_sample_time; source_gate_quantity_source; source_complete_stage_evidence; assignment_view; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_basis; assigned_gate_demand_method; assigned_gate_demand_state; assigned_gate_demand_sample_time; assigned_gate_demand_source; direct_assignment_evidence; exclusive_terminal_links; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; source_all_terminal_driver; source_all_terminal_driver_unit; source_all_terminal_driver_basis; source_all_terminal_driver_method; source_all_terminal_driver_state; source_all_terminal_driver_sample_time; source_all_terminal_driver_source; competing_terminal_driver_records; terminal_record_quantity; terminal_record_unit; terminal_record_basis; terminal_record_method; terminal_record_state; terminal_record_sample_time; terminal_record_source; terminal_record_link; terminal_record_owner; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_state; original_gate_conversion_time; original_gate_conversion_source; baseline_demand; baseline_demand_unit; baseline_demand_basis; baseline_demand_method; baseline_demand_state; baseline_demand_sample_time; baseline_demand_source; baseline_stage_loss_coverage; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_basis; additional_gate_demand_method; additional_gate_demand_state; additional_gate_demand_sample_time; additional_gate_demand_source; exclusive_loss_assignment; commodity_adjustment_owner; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Trace actual complete fired/glazed model/BOM/body/glaze/holes/overflow and included-versus-separate fittings/original carton. Actual intact/fragment genealogy and each native quantity, gross/tare/net or independently measured component/moisture has unit/basis/method/state/sampletime/source; no routine absorption/hydraulic test is required. Shared stock unit/basis/method/state/time/source applies to every compatible stock entry: supplier external receipts exclude buyer returns/internal loops, business-buyer dispatch excludes supplier return/useful-other exits, internal moves cancel. Keep real sample/discard/closing/return/other exits and unknown residual separate. Choose direct actual sourced original-gate assigned quantity OR positive complete compatible all-terminal drivers with each competing terminal record quantity/unit/basis/method/state/time/source/link/owner; no accepted-only or view overlay. Record actual source/assigned/baseline/additional native gate quantities and sourced conversion, exclusive loss ownership and identical complete-stage/loss coverage outside service once. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native intact/component counts, kg/net-gross-tare/fragment and declared component bases | Each actual event or meter interval, traceable original records | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_energy | basin_wholesale | electricity and real fuel burn | meter and burn activity interval | meter_id; energy_quantity; energy_unit; meter_start; meter_end; interval; source; operation_purpose; burn_quantity; burn_unit; burn_basis; burn_source; fuel_identity; conversion_factor; conversion_unit; conversion_basis; conversion_source; event_ids; period_ids; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual energy intervals and independently established fuel burn with native quantities/conversions/source. Document lighting/handling/support/idle/changeover/failed/unfinished consumers and complete physical driver assignment across periods. General record method/state/time/source applies to each actual quantity; delivered fuel or inherited firing does not establish merchant combustion. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual kWh and actual native fuel-burn unit | Each actual event or meter interval, traceable original records | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_supplies | basin_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | native stock and actual return/fate | supply_SKU; purpose; composition; composition_basis; composition_source; provenance_owner; period; opening; external_receipts_net; closing_including_retained_recovery; native_unit; quantity_basis; quantity_source; usable_external_return; return_unit; return_recipient; matched_input_id; matched_state_scope; internal_loop; retained_recovery; waste_quantity; waste_unit; burn_quantity; burn_unit; actual_fate_source; accounting_view; conversion_factor; conversion_unit; conversion_basis; conversion_source; density; density_unit; density_temperature; temperature_unit; density_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | External receipts are NET supply quantities excluding container tare. Shared native unit/basis/method/state/time/source applies to each compatible opening/receipt/closing/recovery/return/fate stock operand; any different component keeps its own native fields. Expand actual SKU/composition/purpose and conditional cleanup materials. S=opening+netreceipts-closing including retained recoveries: gross input+matched unused outlet OR consumed-only and OMIT matching outlet, with provenance/recipient. Check density-temperature/conversions and complete all-user physical drivers; factory glaze/body is not supply. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual supply native mass/volume or verified physical-result unit | Each actual event or meter interval, traceable original records | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_assets | basin_wholesale | shared_assets | all-user full-life asset service | asset_id; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; provider_scope; consumers; periods; used_driver; used_driver_unit; used_driver_basis; used_driver_source; observed_life_driver; observed_driver_unit; observed_history_source; remaining_life_driver; remaining_driver_unit; remaining_evidence_source; termination_evidence; lifetime_all_consumer_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; conversion_factor; conversion_unit; conversion_source; uncertainty; sensitivity; update_trigger; attribution_owner; already_per_reference; observed_driver_basis; remaining_driver_basis; conversion_basis; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; used_driver_method; used_driver_state; used_driver_sample_time; observed_driver_method; observed_driver_state; observed_driver_sample_time; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; lifetime_driver_method; lifetime_driver_state; lifetime_driver_sample_time | Identify actual assets, every consuming client/node/period and all manufacture/maintenance/replacement/EOL phases. Job-used, observed, remaining and total-lifetime drivers each preserve native unit/basis/method/state/time/source, with compatible conversions and sourced remaining/termination. Show observed plus evidenced remainder, uncertainty/sensitivity/update. Attribute one asset-equivalent OR lifecycle-complete provider, never both or repeated per-N share. | Actual compatible job/observed/remaining/lifetime driver units; supported asset-equivalent Item(s) | Each actual event or meter interval, traceable original records | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_providers | basin_wholesale | provider_services | performed physical result and coverage | provider_id; event_id; native_result; result_unit; result_basis; result_source; service_scope; measurement_method; sample_ids; sample_representativeness; sample_removed; sample_return; sample_fate; material_coverage; energy_coverage; asset_coverage; freight_coverage; receiver_treatment_coverage; excluded_testing_scope; period; conversion_factor; conversion_unit; conversion_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_owner; target_driver_basis; all_consumer_driver_basis; attribution_share; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | Record actual physical result/unit/basis/method/state/time/source and included materials/energy/assets/freight/receiver treatment. Actual document/visual completeness or representative condition measurement is distinct from excluded ceramic/hydraulic tests, repair/washing/installation. Preserve sample quantity/removal/return/fate and scope, not mandatory every-basin tests or currency/certificate service amounts. | Actual provider-native physical-result unit | Each actual event or meter interval, traceable original records | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_freight | basin_wholesale | freight | unique actual load-leg and its share | load_id; leg_id; cargo_ids; load_quantity; load_unit; load_basis_each_or_total; load_source; repeated_load_count; repetition_source; actual_packed_payload; payload_unit; payload_state; payload_source; vehicle_gross; vehicle_gross_unit; gross_source; vehicle_noncargo_tare; noncargo_tare_unit; tare_source; original_cargo_pack; added_cargo_pack; retained_moisture_finish; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_basis; distance_conversion_source; empty_return_coverage; delivered_provider_coverage; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; that_record_share; unique_scope_owner; already_per_reference; gross_conversion_factor; gross_conversion_unit; gross_conversion_basis; gross_conversion_source; tare_conversion_factor; tare_conversion_unit; tare_conversion_basis; tare_conversion_source; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; payload_basis; payload_method; payload_sample_time; gross_method; gross_state; gross_sample_time; tare_basis; tare_method; tare_state; tare_sample_time; distance_basis; distance_method; distance_state; distance_sample_time; that_record_share_basis; that_record_share_source | At each unique load-leg measure actual packed cargo OR same-state vehicle gross minus ONLY vehicle/noncargo tare. Retain original/new cargo packs, included parts and retained state; no component audit added again. Native payload/gross/tare/distance and conversions keep units/bases/methods/states/times/sources. EACH multiplies evidenced repeated-load count once; TOTAL is already total. THAT-record compatible complete-all-user share applies INSIDE sum(unique load,leg: packedpayload_kg×distance_km×that_record_share), then divide assigned sum by positive FINAL N once unless already normalized. Reconcile empty/return/delivered/provider scope; N=0 retains actual freight without division. | Actual native packed payload and distance converted compatibly to kg*km | Each actual event or meter interval, traceable original records | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_fates | basin_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | actual withdrawal, receiver and outfall measurements | event_id; source_location; receiving_location; receiving_medium; flow_identity; native_quantity; native_unit; quantity_basis; quantity_source; interval; composition; composition_basis; composition_source; fate_basis; fate_source; mixed_receiver_mass; mixed_mass_unit; mixed_mass_basis; mixed_mass_source; carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; free_liquid_volume; liquid_volume_unit; liquid_volume_source; density; density_unit; density_temperature; temperature_unit; density_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; nonadditive_view; attribution_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; record_method; record_state; record_sample_time; record_source; carrier_method; carrier_state; carrier_sample_time; absorbed_liquid_method; absorbed_liquid_state; absorbed_liquid_sample_time; collected_fragment_method; collected_fragment_state; collected_fragment_sample_time; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | Independently measure actual source withdrawal, received mixed solids, contained free liquid and direct environmental outfall. Each carrier/absorbed-liquid/collected-fragment operand keeps native unit/basis/method/state/time/source; free liquid has actual measured native volume, receiver composition/fate/transport/treatment. Shared record metadata governs compatible actual quantities, different components remain separate. Whole mixed stream/component/commodity views are non-additive. Density-temperature and conversion sources apply only where needed, never supplied water=effluent. | Actual native mass/volume compatibly converted to kg/m3 | Each actual event or meter interval, traceable original records | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_releases | basin_wholesale | direct_species | actual substance/particle and medium method | event_id; species_identity; particle_size; receiving_medium; measurement; measurement_unit; measurement_basis; measurement_source; activity; activity_unit; activity_basis; activity_source; factor; factor_unit; factor_basis; factor_source; factor_coverage; burn_fraction; burn_fraction_source; composition; composition_unit; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; time_interval; period; provider_coverage; nonadditive_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; measurement_method; measurement_state; measurement_sample_time; activity_method; activity_state; activity_sample_time; factor_method; factor_state; factor_reference_time; composition_method; composition_state; composition_sample_time; fate_method; fate_state; fate_time; conversion_method; conversion_state; conversion_time | Establish actual species/particle/receiving medium by measurement or compatible actual activity×factor with native unit/basis/method/state/time/source and factor coverage. Composition/fate/gas-concentration conversions apply only if method requires, once with relevant temperature/pressure units/sources. Ceramic/glaze content, captured fragments and unknown stock deficit do not quantify releases. | Actual species native quantity compatibly converted to kg | Each actual event or meter interval, traceable original records | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| final_resource_normalization | all service cards | N=unique FINAL real business acceptances after reversals for actual merchant ownership/resale. Attribute actual direct event OR quantity×compatible target_driver/positive complete all_consumer_driver with native unit/basis/method/state/time/source and all no-acceptance/other-user/period burdens. Assigned total/N once only if N>0; N=0 retains resource/period/cohort records without division. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual per-reference physical service inventory |  |
| basin_stock_state | commodity audit | At compatible native state, opening+supplier_external_receipts+buyer_returns-closing-business_buyer_dispatch-supplier_returns-useful_other_exits-actual_discard-net_sample_removal=unknown_residual. Supplier receipts exclude buyer-return/internal movement, buyer dispatch excludes other exits, internal moves cancel. Actual intact/fragment/body/glaze/part/pack genealogy and independently measured components remain separate non-additive views; no missing fitting/chip/residual=whole-basin loss/waste/species or zero. | cp_basins | Actual stock, exclusive exits and explicit unknown state |  |
| finished_source_demand | commodity interface | Choose sourced direct measured/traced original-gate assigned quantity and exclusive terminal evidence OR Qsource_actual×Dtarget/Dall_terminal. Dall_terminal>0 equals complete compatible competing FINAL-accepted/useful-other/returns/closing-carry/proven-loss terminal records, each quantity/unit/basis/method/state/time/source/link/owner. No accepted-only, unknown-loss zero or direct+driver overlay. Source/assigned/baseline/additional native quantity/unit/basis/method/state/time/source and original-gate conversion must be compatible; record exclusive loss owner and subtract only identical already-covered baseline stage/loss demand before linking required additional complete fired-glazed-packaged demand outside once. | cp_basins; cp_consignment | Separate quantified complete original-gate demand/loss interface |  |
| per_record_packed_freight | freight | For each unique load-leg use measured packedcargo OR same-state gross minus ONLY vehicle/noncargo tare, retaining all cargo packaging/included parts/state and excluding duplicate component views. EACH multiplies evidenced repeated count once, TOTAL unchanged. After compatible native conversions, assigned kg*km=sum(unique load,leg: actual_packed_payload_kg×actual_distance_km×that_record_share). The share belongs INSIDE each record sum with complete compatible all-user driver evidence. Divide assigned sum by positive FINAL N once unless already per reference; retain N=0 resources without division. | cp_freight; cp_consignment | Actual unique per-reference physical freight |  |
| actual_release_method | direct_species | Actual species/particle/medium quantity=measurement OR compatible actual activity×factor with native unit/basis/method/state/time/source and factor coverage. Apply required composition/fate or gas/concentration conversions once with temperature/pressure units/source; no ceramic/glaze or missing-mass release assumption. | cp_releases; cp_energy; cp_basins | Actual evidenced per-reference species |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_identity | all roles | Final exchanges require actual basin/model/BOM/body-glaze/component/source/receiver/provider/service/species identity and compatible native support. Count property/group is independent measurement support, not the completed commercial-service identity. | Actual supplier/lot/commercial evidence, detail/support verification |
| native_operand_evidence | all recorded operands | Each independent original/assigned/baseline/additional quantity, component/stock/fate, asset-used-observed-remaining-lifetime driver and freight gross/tare/cargo/distance/share needs compatible native unit/basis/method/state/time/source and explicit conversions. Representative sample/density-temperature evidence is required where used, never invented. | cp_basins; cp_assets; cp_fates; cp_freight; cp_supplies; cp_releases |
| completeness_unknowns | all interfaces | Disclose actual final-acceptance/reversal/cohort uncertainty, missing source/BOM/state/equivalence or terminal records, unknown stock/loss/fates and provider/receiver/asset-life gaps. N=0 resources remain. Per-card evidence needs and sensitivity/update statements are limitations, not quantitative defaults or final readiness. | Actual records, coverage matrix and lifetime/source evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| facility_water | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_water` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| new_outer_protection | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `new_outer_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| fuel_supply | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| discarded_basins | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_basins` under `cp_basins`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_basins_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_basins`; actual source-linked native records |
| other_wastes | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_wastewater | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| water_outfalls | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| direct_species | basin_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Use actual metered warehouse lighting, powered handling and business support. Firing/glazing, product water tests, installation/countertop cutting and household operation are outside this service.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual basin-wholesale warehouse electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively attributed physical amount / N under cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need native meter intervals/readings/source, complete actual consumers/events including idle/failed work and provider coverage; no kWh per basin from furnace or installed fixture data.

#### facility_water

Include actual facility hygiene/support water only. Finished ceramic/glaze/pack moisture and future washbasin water use are separate; no merchant basin washing or leak/overflow/faucet test is presumed.

Residual inventory requirement after the independently identified cases `facility_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased warehouse-support water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need purpose/supplier/native volume/interval and actual fates with measurement sources; purchased water or installed basin capacity cannot quantify contained wastewater or outfall.

#### new_outer_protection

Only real added outer cartons, pads, wrapping, straps and labels are current supplies. Original basin carton/inserts/protection accompany inherited finished merchandise; reusable cases/pallets belong to asset service.

Residual inventory requirement after the independently identified cases `new_outer_protection_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual added transit protection and dispatch labels
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need added-versus-original pack level/SKU, measured net mass or evidenced count/area conversion and actual stock use; no complete new retail carton or pallet per accepted consignment.

#### operating_supplies

Expand actual equipment lubricants, facility cleaners, wipes, absorbents, filters and administrative consumables in native identities. Factory glaze/body minerals and inherited packing are not new service inputs; no ceramic repair, resurfacing or product washing is assumed.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual maintenance and conditional broken-goods cleanup supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need purpose/SKU/net stock/native composition and real cleanup carrier/absorbed contents/captured-fragment evidence. Glaze on merchandise does not establish purchased chemicals or direct emissions.

#### fuel_supply

Track actual fuel grade/native stock independently from burning, usable returns or waste, after checking hired handling/transport coverage. No kiln fuel is included from inherited fired condition.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual owned material-handling fuel supply
- Flow property / unit: Volume / L
- Amount rule: Actual exclusively attributed physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need opening/net receipts/closing and disjoint actual burn/nonburned fates, density-temperature/conversion units/bases/method/sources where relevant; receipts alone do not measure combustion.

#### provider_services

Use performed handling/storage, document/visual condition-completeness checks, facility maintenance and business support with actual physical results. A specification/installation sheet does not evidence a performed ceramic assay, hydraulic test, installation or merchant remediation.

- Identity requirement: Actual merchant physical support-service results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed physical amount / N under cp_providers
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need actual result/unit/source and materials/energy/assets/freight/receiver-treatment coverage; any representative condition measurement records method/sample disposition without prescribing every-basin testing or excluded processing.

#### shared_assets

Cover actual buildings/racks/lifts/meters/ICT and reusable transport supports across all users/periods and full manufacture, maintenance, replacement and end-of-life. The traded basin is not the warehouse fixture or an installed-service asset.

- Identity requirement: Full-life shared warehouse, lifting and reusable assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively attributed physical amount / N under cp_assets
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need job-used, observed, evidenced remaining/termination and complete-lifetime drivers, each native unit/basis/method/state/time/source, phase coverage and uncertainty/sensitivity/update; no standard asset life or full new support per trip.

#### freight

Measure real transported complete basins/included parts plus original and added cargo packaging/retained state. If using same-state vehicle gross, subtract ONLY vehicle/noncargo tare, retaining all cargo packs; reconcile provider/delivered/empty-return scope.

- Identity requirement: Actual packed-basin and service freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual exclusively attributed physical amount / N under cp_freight
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need unique load-leg records, EACH/TOTAL basis, native payload/gross/tare/distance factor units/sources and THAT-record complete physical share inside the sum; no nominal basin mass or clay-only load.

#### environmental_water

Only actual merchant-operated environmental water abstraction belongs here, distinct from purchased water and product/pack state or downstream washbasin operation.

- Identity requirement: Actual source-specific direct warehouse withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need source/location/interval meter and native conversion boundary/source; a vessel basin or damp carton does not establish water extracted.

#### usable_supply_returns

Only real same-scope standalone operating-supply SKU/state transfer to a recipient is an outlet. Consumed-only inputs OMIT the matched return exchange. Retained recoveries/internal loops remain closing; basin/fragment/inherited pack returns remain commodity audit.

- Identity requirement: Actual matched unused service-supply external transfers
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual recipient/native amount/state and matched input stock/provenance; no inherited ceramic/glaze return against unrelated current maintenance supply, negative input or automatic recycling credit.

#### discarded_basins

Use actual independently evidenced receiver quantities/states for discarded complete basins, real fragments/parts or mixed original packs. Whole basin/body/glaze/part/pack component audits are non-additive. A crack/chip or missing separately sold drain does not establish whole-basin disposal or a new default replacement basin.

- Identity requirement: Actual discarded basins, ceramic fragments, included parts or original packs
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N under cp_basins
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_basins`

Range evidence need: Need actual disposition/genealogy/native quantity/net-tare/state and receiver treatment with sourced original-gate equivalence; partial fragments or unknown mass deficit are not automatically one whole lost basin or emitted dust.

#### other_wastes

Record actual spent wipes/absorbents/filters/service-added packaging and mixed collected debris in receiver state. Dry carrier, absorbed liquid and collected ceramic/glaze/pack fragments are component views of a mixed stream, not extra whole-basin or free-liquid waste. No crushing/firing sludge is invented.

- Identity requirement: Actual spent supplies and mixed cleanup solids
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need measured received mixed mass and each carrier/liquid/fragment native unit/basis/method/state/time/source, composition and treatment owner; product glaze or purchased wipes do not measure spent solids.

#### contained_wastewater

Measure actual free liquid collected/transferred for treatment from performed facility work, separately from liquid retained in cleanup solids or product/pack state. No basin washing, ceramic manufacture or installation flush is presumed.

- Identity requirement: Actual contained facility wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual collected/received native volume/composition/event/source and receiver transport/treatment coverage; water supply, basin capacity and wet carrier mass are not wastewater volume.

#### water_outfalls

Only actual direct crossing to a known environmental receiving medium is recorded; contained receiver transfer is Waste, and downstream installed-basin drainage is outside this merchant service.

- Identity requirement: Actual direct warehouse-water outfall to environment
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively attributed physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual location/medium/interval/native volume and composition/fate/conversion evidence; damp packaging or presence of a drain opening cannot establish direct outfall.

#### direct_species

Expand actual measured or method-supported species/chemical/particle size to an identified receiving medium from real fuel use, maintenance or incidents. Ceramic/glaze composition, collected chips, smell or stock deficit does not quantify silica/dust/metals/VOC/CO2.

- Identity requirement: Actual identified species and particle-size releases
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively attributed physical amount / N under cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual substance/medium identity, measurement or compatible activity/factor and native units/bases/method/state/time/source, composition/fate and gas/concentration conversion as required once; no generic glaze-release or missing-mass factor.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_final_owner | accepted_service | Require actual merchant_id, purchase/ownership/resale evidence, named B2B buyer, FINAL acceptance gate/time/source and resolved reversal IDs, unique FINAL N and all sixteen qualifiers. Supplier receipt, invoice or basin count alone is insufficient; divide only for N>0 and retain N=0 cancelled/failed/unfinished resources. |  |
| complete_native_basin | commodity | Verify actual complete fired/glazed model/BOM/underside/holes/overflow, included-versus-separately-sold faucet/drain/parts/original carton and independent intact-fragment/net-gross-tare/body-glaze/state native evidence. No fixed dimension/color, automatic fitting supply, hydraulic test/installation/cutout or raw clay/body-only full gate. | kohler-vessel-basin |
| actual_paths_only | basin_wholesale | Link all actual batch/period receipt/check/cleanup/changeover/idle/cancelled/failed/rejected/unfinished/dispatch/FINAL events, actual missing included part/breakage/chip/carton damage/sample to unique quarantine/return/useful-other/discard paths. No presumed repair/crushing/wash/repack/install; unknown residual never whole-basin loss, emission or zero. |  |
| source_all_terminal | commodity interface | Verify source/assigned/baseline/additional quantities with native unit/basis/method/state/time/source, sourced original-gate conversion and direct trace OR positive complete compatible competing all-terminal records inclclosing/returns/useful-other/proven loss each quantity/unit/basis/method/state/time/source/link/owner. No accepted-only denominator or direct-driver overlap; exclusive loss owner and identical baseline stage/loss coverage, required additional full-gate demand outside once. |  |
| full_asset_consumers | all resources | Check actual all-consumer/period driver records, full asset manufacture/maintenance/replacement/EOL, each job/observed/remaining/lifetime driver native unit/basis/method/state/time/source and observed+sourced remainder/termination uncertainty/sensitivity/update. Provider/asset/N scope single-owned, no-acceptance burdens retained. |  |
| stock_waste_record_freight | all fates and freight | Verify supply S/gross+matched unused-return OR consumed-only OMIT matched return, no unrelated negative netting/automatic recycling credit. Whole basin/component/mixed cleanup/free-liquid/direct-species views nonadditive, receiver transport/treatment once. Freight keeps cargo packs/included parts/state, subtracts only vehicle/noncargo tare, unique EACH/TOTAL/native factors and THAT-record share INSIDE sum before one positive-N normalization. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/completeness review |
| downstream_use | Physical boxed glazed vitreous-china vessel-basin wholesale add-on, separately linked to complete original fired/glazed packaged source demand/loss coverage |
| allowed_use | Actual complete factory-finished original-carton glazed vitreous-china vessel washbasins through ambient own-account FINAL B2B handover, with compatible native configuration/quantity/state evidence |
| excluded_use | Standalone basin footprint/installed water function; clay/unfired body/other sanitary materials/separate fittings alone; firing/glazing/crushing/repair/wash/repack/installation/cutout/testing/use; retail/agency/storage-only |
| required_metadata | Actual merchant purchase/ownership/resale/buyer/FINAL gate-source/reversals/N, model/BOM/body-glaze/underside/holes/overflow/included-versus-separate parts/original carton/native intact-fragment/net-gross-tare and independent component method/state/time/source, site/campaign/period, complete source terminal assignment/coverage and service/asset/provider/freight/receiver owners |
| required_quality_disclosure | Identity/support/acceptance/reversal/BOM/state/measurement/sampling uncertainty, unknown stock/loss/fates or original-equivalence/terminal records/baseline coverage, all-user asset remaining-life and per-record freight share assumptions, row-specific evidence gaps |
| update_trigger | Changed basin material/glaze/BOM/holes/overflow/inclusions/pack/state/measurement/acceptance/reversals or actual processing/install/test route, original source/assignment/coverage, asset/provider/freight/receiver or conversion method |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-sanitary-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025),37210 ceramic sanitary fixtures and61062 classes3693/3721/3736. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: declared fired/glazed vessel-basin wholesale is narrower than all61062 fixtures, plastics and pipes. |
| kohler-vessel-basin | official_guidance | Kohler K-26249IN Ribana vessel bathroom sink specification,2pages,dated21September2025. https://techcomm.kohler.com/techcomm/pdf/K-26249IN_spec_IN_Kohler_en.pdf | Qualitative actual vitreous-china/glazed-underside/holes/overflow and separate faucet-drain configuration questions only; no universal550mm/design/color/accessories, netmass/body-glaze recipe, test/installation/cutout/cabinet/water-use defaults or warranty/performance guarantee. |
