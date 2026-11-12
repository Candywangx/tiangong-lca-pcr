---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-pharmaceutical-products
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of single-active paracetamol oral tablets in original blister cartons

## 1. Scope and Applicability

Applies to actual manufacturer-released SINGLE-ACTIVE paracetamol ORAL TABLETS in original intact manufacturer blisters and cartons, owned/resold through ordinary ambient physical B2B wholesale. Record actual SKU/batch, labelled or analytical strength and its basis, pack-tablet genealogy, whole-tablet/net-gross-tare, excipient/pack evidence, seal/expiry and actual stated storage/acceptance conditions. Exclude raw API, combination medicines, liquids or other forms, formulation/compounding/tableting, merchant blister opening/splitting/dispensing/repack/new assay or refrigeration, clinical treatment/use, retail, fee agency and storage-only. Existing source/batch records do not create new merchant testing.

The service excludes all actual complete API/excipient supply, formulation/tableting/finished release and original blister/carton manufacturing, including upstream associated with actual losses. A separately quantified original complete finished-gate demand adjustment in matching native quantity/unit/state/conversions, exclusive terminal assignment and identical baseline stage/loss coverage is linked outside once before whole-chain readiness. Actual physical merchant resources and declared receiver transport/treatment count once. Active dose, tablet count, package count, therapy, efficacy and money are not the reference service.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-pharmaceutical-products |
| classification_refs | CPC3 61073 pharmaceutical wholesale; narrower finished35260 single-active paracetamol oral tablets within352 |
| covered_products | Actual original-blister-carton released single-active paracetamol oral-tablet ambient own-account B2B consignment service |
| excluded_products | Raw API/combination medicines/other forms; manufacture, opening/splitting/dispensing/repack/new assay/coldchain/clinical use; retail/agency/storage-only |
| representative_product | Actual released SKU/batch with native strength-basis/whole-tablet/excipient/moisture/pack quantities and seal/expiry/condition through FINAL commercial gate |
| production_route | Complete released original-blister-carton supplier gate -> merchant ownership receipt/ambient stock/condition handling -> FINAL business acceptance/resale |
| market_state | Counted physical service; package/tablet/API/excipient/water/pack-layer amounts are separate nonexchange commodity audit, not dose-based output |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account single-active paracetamol oral-tablet wholesale consignment in original blister cartons |
| How much | 1 Item(s) |
| How well | Actual released single-active paracetamol oral-tablet SKU/strength-basis/seal/expiry/quantity/condition and FINAL business acceptance, without clinical efficacy/treatment/regulatory or remaining-life guarantee |
| How long or cycle | Actual receipt-to-FINAL-acceptance; separate stock/reporting periods and complete asset phases, with no-acceptance resources retained |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account single-active paracetamol oral-tablet wholesale consignment in original blister cartons |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_purchase_ownership_resale; actual_business_buyer; FINAL_gate_time_source_reversals; actual_SKU_batch_release_evidence; single_active_paracetamol_oral_tablet; label_analytical_strength_unit_basis_source; actual_pack_tablet_genealogy; whole_tablet_net_gross_tare_basis; excipient_water_pack_component_evidence; original_blister_carton_seal_state; expiry_label_date_source_conditions; independent_component_method_state_time_source; complete_released_finished_supplier_gate; actual_start_end_timezone_duration_unit_source; site_period_source_assignment_coverage_owner |

N is unique actual FINAL business-accepted consignments after reversals, not supplier receipts/invoices/doses/tablets/packages. Divide once only for N>0; N=0 retains cancelled/failed/quarantined/unfinished resource-period-cohort evidence without division or dropped burdens.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| pack_tablet_strength | commodity quantities | Count for native pack/tablet units; Mass for actual API/whole/component quantities | Actual pack/tablet counts; native strength mass per tablet; kg for stated masses | Use actual SKU/batch pack-tablet genealogy and native strength identity/unit/basis/source. Strength×compatible actual tablet count can quantify that defined API view through sourced unit conversion, not whole-tablet/excipient/pack mass; assay correction is applied only if the defined source method requires and has not already included it. No fixed strength/count or merchant opening/testing. | zentiva-paracetamol-original-pack |
| component_water_basis | independent component/water records | Mass; dimensionless actual water fraction or water/nonwater ratio | Actual mass unit; water fraction/ratio with explicit wet or dry basis | Each independent API/excipient/whole-tablet/water/pack-layer value needs native unit/basis/method/state/sampletime/source and representative scope. For water-only w_wet=m_water/m_as_received, m_dry=m_as_received*(1-w_wet). If r_dry=m_water/m_nonwater for the SAME sample/definitions, w_wet=r_dry/(1+r_dry); convert reported percent to ratio through explicit native factor first. Loss-on-drying with other volatiles is not automatically water; incompatible or unknown definitions block this conversion, not default zero. |  |
| native_conversion | all physical measurements | Actual native property and dimensionally compatible target property | Native -> compatible target unit with explicit factor units | Actual conversions need factor/unit/basis/method/state/time/source matching SKU/batch/quantity coverage. Density-volume conversion requires actual density/unit/temperature/temperature_unit/source. Tablet strength is not gross cargo mass; source pack layer construction and expiry are not universal quantity factors. |  |
| FINAL_service_denominator | reference and inventory | Count for FINAL service denominator; each actual row native physical property | Item(s) denominator; row physical unit per Item(s) | Verify merchant purchase/ownership/resale, B2B buyer, FINAL gate/source/reversals and unique accepted N. Complete direct/all-user/period attribution retains cancelled/failed/unfinished resources, then assigned total/positive FINAL N once; N=0 resources remain without division. Count support is not a tablet/API/service identity. |  |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-released single-active paracetamol oral-tablet batch in intact original manufacturer blisters/cartons, actual strength-basis/whole-mass/genealogy/seal/expiry/condition evidence |
| starting_condition_role | Inherited complete finished pharmaceutical merchandise for physical wholesale, not raw API, newly compounded/dispensed or clinically consumed material |
| product_classification_scope | Narrower61073 for declared finished35260 oral-tablet presentation only, not all352 pharmaceutical products/forms/routes |
| recursive_input_rule | Traded tablets/API/excipients/water/original blister/carton and actual returns/quarantine/closing stock remain nonexchange commodity audit, not service-consumed formulation chemicals or new packaging. |
| upstream_dataset_requirement | Separate complete matched supplier gate includes actual API/excipient manufacture, formulation/tableting/relevant finishing, finished batch release and original blister/carton manufacture as applicable. Raw paracetamol API or an ingredient basket alone is incomplete. |
| disclosure | Actual batch/SKU/strength identity-unit-basis-source/whole-tablet-component water definitions/pack genealogy/seal/expiry/conditions and FINAL gate/time, native source-terminal demand/baseline coverage plus service/asset/provider/freight/receiver owners/unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| complete_gate_once | commodity interface | All complete pharmaceutical API/excipient/formulation/tableting/release/original-blister-carton manufacture including actual lost upstream stays outside service. Complete original-gate demand and identical baseline stage/loss coverage are separately quantified/linked once; actual service/receiver transport/treatment once. |  |
| source_example_limits | tablet_wholesale | Manufacturer SmPC supports actual single-active oral-tablet identity/excipient/original-blister-carton/storage-expiry questions only. Example API strength does not establish whole-tablet mass; pack count/layer construction/shelf life are SKU-specific, not defaults; no clinical dosage/efficacy/use or regulatory assurance. | zentiva-paracetamol-original-pack |
| actual_status_fate | commodity state | Quarantine/expiry/broken seal/returns/samples/whole-pack discard, component-water change, unexplained residual and direct species are distinct. Expiry does not automatically establish disposal; active content proves neither emission nor zero release. New opening/testing/splitting/repack/coldchain requires explicit route review. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tablet_wholesale | Original-blister-carton paracetamol tablet merchant receipt and FINAL handover | required | Actual released original-blister-carton single-active paracetamol oral-tablet owned/resold FINAL B2B handover | Physical receipt/batch-seal-expiry-condition/stock/handling/commercial acceptance without opening/assay/dispensing/clinical use | `accepted_service` |

Actual commercial consignments overlap warehouse batches/continuous support periods. Link real receiving/document-visual batch/SKU/seal/expiry/condition checks, existing measurement-source records, facility cleanup/changeover/idle/cancelled/failed/rejected/quarantined/unfinished/dispatch/FINAL events to lots/periods. No every-blister opening or new assay is required. Real broken pack/tablet/condition deviation/expiry/return needs unique actual quarantine/supplier-return/closing-pending/useful-other-exit/discard receiver decision. Sample removals/returns keep quantity/fate/scope ownership without hiding new opening/assay/splitting/dispensing/repack. N=0 resources remain assigned to period/evidenced cohort without division/drop, with one normalization only at positive FINAL N.

### Process: Original-blister-carton paracetamol tablet merchant receipt and FINAL handover (`tablet_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively assigned physical amount / N under cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter/interval/native source and complete all-user event assignment including idle/failed periods and provider coverage; no tableting energy, per-dose or cold-room default.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual purpose/source/native volume/interval and independently evidenced fates; product moisture or a water receipt does not measure wastewater.

###### Actual separately recorded polyethylene packaging film (`new_outer_protection_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need added-versus-original pack levels and actual SKU/net mass or sourced native count/area conversion and stock; no universal foil/polymer/paper layer mass or complete new retail carton.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual SKU/purpose/net stock/composition and spent carrier/absorbed liquid/captured tablet-pack residue evidence where incidents occurred; product ingredient list is not a cleanup or emission quantity.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual exclusively assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native opening/net receipts/closing and disjoint measured fates with actual density/temperature/conversion sources as needed; receipts alone are not combustion.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account single-active paracetamol oral-tablet wholesale consignment in original blister cartons (`accepted_service`)

One unique FINAL real owned/resold B2B accepted commercial consignment of supplier-released single-active paracetamol oral tablets in actual original blisters/cartons. Actual SKU/strength basis/batch/pack genealogy/seal/expiry/condition/time qualify the service, not API dose, whole-tablet pieces, treatment, efficacy or price.

- Selected flow: Completed own-account single-active paracetamol oral-tablet wholesale consignment in original blister cartons
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Need actual merchant purchase/ownership/resale/buyer/FINAL gate/source/reversals and batch/SKU, actual label/analytical strength basis separate from whole mass, native pack-tablet counts, seal/expiry/storage-condition sources. No universal strength, pack count, shelf life or layer construction.

##### Waste flows

###### Discarded complete blister-carton paracetamol oral-tablet pack (`discarded_tablet_packs_atomic_case`)

Conditional on independently recorded actual Discarded complete blister-carton paracetamol oral-tablet pack. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_tablet_packs`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete blister-carton paracetamol oral-tablet pack
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical amount / N under cp_tablets
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tablets`

Range evidence need: Need actual status/event/receiver decision, native quantity/net-tare/batch genealogy and treatment coverage with original finished-gate equivalence. Retained tablets in whole discarded packs are not extra API/pack waste exchanges.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_all_user_events | all service resources | Assign actual direct events OR quantity×compatible target_driver/positive COMPLETE all_consumer_driver, with native unit/basis/method/state/time/source and exclusive all-client/period owners. Retain idle/changeover/cancelled/failed/rejected/quarantined/unfinished resources. FINAL N is unique real business acceptance after reversals; assigned total/N once only for N>0. At N=0 keep burden-period-cohort evidence without division; no dose/price allocation default. |  |
| complete_original_terminal | commodity interface | Per complete actual supplier lot/state choose actual direct measured/traced assigned_gate_demand with native quantity/unit/basis/method/state/time/source/direct proof/exclusive terminal links OR actual_source_gate_quantity×target_driver/source_all_terminal_driver. Positive COMPLETE denominator sums compatible competing FINALaccepted/usefulother/returns/closingcarry/proven actual-loss records, each quantity/unit/basis/method/state/time/source/link/owner. No accepted-only, unknown-loss zero or direct-driver overlay. Source/assigned/baseline/additional quantities and original-gate conversion match actual complete released tablet+pack state; explicit exclusive loss owner and identical baseline stage/loss coverage precede required additional demand linkage outside once. |  |
| service_supply_stock | service supplies | S=assigned opening+NET external receipts-closing including retained recoveries. Choose exactly one: (1) gross S/N as INPUT and actual matched unused external return/N as a separate OUTPUT; (2) consumed-only (S-return)/N as INPUT and OMIT that matched return OUTPUT. Do not add return quantity to input or deduct it twice. Internal loops/retained recoveries stay stock; actual wasted/consumed inputs retain burden. No inherited API/tablet/pack netting against unrelated current supply, negative inputs or automatic credits. |  |
| complete_life_assets | assets/providers | Assign complete manufacture/maintenance/real replacement/EOL with actual used_driver/COMPLETE lifetime_all_consumer_driver in compatible native units/bases/methods/states/times/sources. Observed history plus sourced remaining/termination, uncertainty/sensitivity/update and all consumers/periods are explicit. One asset-equivalent OR lifecycle-complete provider, never both or repeated N. |  |
| nonadditive_actual_fates | commodity/service fates | Whole packs retaining tablets, whole tablets/fragments/API/excipients/water/blister layers/cartons and mixed cleanup carrier/liquid/particles versus free liquid/direct species are non-additive/exclusive views. Actual receiver transport/treatment has one owner after provider coverage. Quarantine/expiry/return is a status until actual receiver disposition is evidenced, not automatic discard/emission. No recycling credit; no-acceptance resources remain outside FINAL N. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | tablet_wholesale | accepted_service | actual merchant FINAL acceptance | consignment_id; merchant_id; purchase_evidence; ownership_evidence; resale_evidence; business_buyer_id; acceptance_gate; acceptance_time; acceptance_source; reversal_ids; reversal_status_source; unique_FINAL_accepted_ids; N; N_period_cohort; model_SKU_lot_ids; pack_tablet_component_genealogy; actual_BOM; completeness_condition_evidence; buyer_criteria_source; start_time; start_time_source; end_time; end_time_source; time_zone; time_unit; duration; duration_unit; duration_method; duration_source; site_id; campaign_id; reporting_period; cancelled_failed_rejected_unfinished_ids; no_acceptance_resource_owner; attribution_owner | Trace actual merchant purchase/ownership/resale, B2B buyer, FINAL gate/time/source and resolved reversal IDs. Count unique actual FINAL commercial consignments for stated period/cohort, not receipts/invoices/packages/tablets/doses. Retain cancelled/failed/quarantined/unfinished resource ownership and native timestamp/timezone/duration method/unit/source; N=0 retains evidence/burden without division. | Actual FINAL Count Item(s), timestamp and native duration | Each actual event/meter interval, traceable originals | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_tablets | tablet_wholesale | nonexchange drug/pack stock and discarded_tablet_packs | released tablet/strength/component/pack audit | source_lot_id; model_SKU; batch_id; batch_release_evidence; single_active_identity; oral_tablet_form_evidence; pack_ids; blister_ids; tablet_ids; pack_tablet_genealogy; genealogy_method; genealogy_source; actual_BOM; API_identity; API_label_strength; API_label_strength_unit; API_label_strength_basis; API_label_strength_source; API_analytical_strength; API_analytical_strength_unit; API_analytical_strength_basis; API_analytical_strength_method; API_analytical_strength_state; API_analytical_strength_sample_time; API_analytical_strength_source; API_assay_scope; API_assay_coverage; strength_unit_conversion_factor; strength_conversion_unit; strength_conversion_basis; strength_conversion_method; strength_conversion_state; strength_conversion_time; strength_conversion_source; tablet_count; tablet_count_unit; tablet_count_basis; tablet_count_method; tablet_count_state; tablet_count_time; tablet_count_source; pack_count; pack_count_unit; pack_count_basis; pack_count_method; pack_count_state; pack_count_time; pack_count_source; tablets_per_actual_pack; pack_tablet_conversion_unit; pack_tablet_conversion_basis; pack_tablet_conversion_method; pack_tablet_conversion_state; pack_tablet_conversion_time; pack_tablet_conversion_source; excipient_identity; excipient_source; original_blister_layer_identity; original_carton_inclusions; seal_state; seal_state_source; expiry_label_date; expiry_date_source; actual_condition_record; condition_unit; condition_method; condition_time; condition_source; stated_storage_condition_source; receiver_disposition_decision; receiver_decision_source; buyer_criteria_source; m_as_received; m_as_received_unit; m_as_received_basis; m_as_received_method; m_as_received_state; m_as_received_sample_time; m_as_received_source; water_definition; nonwater_definition; water_fraction; water_fraction_unit; water_fraction_basis; water_fraction_method; water_fraction_state; water_fraction_sample_time; water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_conversion_factor; percent_conversion_unit; percent_conversion_basis; percent_conversion_method; percent_conversion_state; percent_conversion_time; percent_conversion_source; LOD_value; LOD_unit; LOD_basis; LOD_method; LOD_state; LOD_sample_time; LOD_source; LOD_other_volatiles_evidence; actual_native_quantity; native_unit; quantity_basis; quantity_method; quantity_state; quantity_sample_time; quantity_source; gross_mass; gross_unit; gross_basis; gross_method; gross_state; gross_sample_time; gross_source; packaging_tare; packaging_unit; packaging_basis; packaging_method; packaging_state; packaging_sample_time; packaging_source; net_finished_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; sample_representativeness; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_state; moisture_sample_time; moisture_source; conditioning_state; temperature; temperature_unit; temperature_source; opening; supplier_external_receipts; buyer_returns; closing; business_buyer_dispatch; supplier_returns; useful_other_exits; actual_discard; net_sample_removal; unknown_residual; stock_unit; stock_basis; stock_method; stock_state; stock_sample_time; stock_source; disposition_ids; receiver; treatment_coverage; actual_source_gate_quantity; source_gate_unit; source_gate_basis; source_gate_method; source_gate_state; source_gate_sample_time; source_gate_quantity_source; source_complete_stage_evidence; assignment_view; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_basis; assigned_gate_demand_method; assigned_gate_demand_state; assigned_gate_demand_sample_time; assigned_gate_demand_source; direct_assignment_evidence; exclusive_terminal_links; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; source_all_terminal_driver; source_all_terminal_driver_unit; source_all_terminal_driver_basis; source_all_terminal_driver_method; source_all_terminal_driver_state; source_all_terminal_driver_sample_time; source_all_terminal_driver_source; competing_terminal_driver_records; terminal_record_quantity; terminal_record_unit; terminal_record_basis; terminal_record_method; terminal_record_state; terminal_record_sample_time; terminal_record_source; terminal_record_link; terminal_record_owner; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_state; original_gate_conversion_time; original_gate_conversion_source; baseline_demand; baseline_demand_unit; baseline_demand_basis; baseline_demand_method; baseline_demand_state; baseline_demand_sample_time; baseline_demand_source; baseline_stage_loss_coverage; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_basis; additional_gate_demand_method; additional_gate_demand_state; additional_gate_demand_sample_time; additional_gate_demand_source; exclusive_loss_assignment; commodity_adjustment_owner; selected_API_view; n_tablets; n_tablets_unit; n_tablets_basis; n_tablets_method; n_tablets_state; n_tablets_sample_time; n_tablets_source; q_API_per_tablet; q_API_per_tablet_unit; q_API_per_tablet_basis; q_API_per_tablet_method; q_API_per_tablet_state; q_API_per_tablet_sample_time; q_API_per_tablet_source; matched_measurement_population; water_nonwater_sample_scope; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Trace actual SKU/batch/single-active oral form/release, original blister-carton BOM/pack-tablet genealogy/seal/expiry and stated/observed conditions. Keep labelled/analytical API strength identity/unit/basis/method/state/time/source separate from whole-tablet/excipient/water/pack mass and assay scope/coverage. Use existing compatible source measurements, not new merchant opening or assays. Each native component/gross/tare/net/water value preserves unit/basis/method/state/sampletime/source and representativeness; water-only wet fraction or dry water/nonwater ratio applies only same definitions/sample, percent converted first; LOD with other volatiles is not automatically water. Shared stock metadata applies to every compatible opening/receipt/dispatch/return/closing/status/discard/sample operand: supplier receipts exclude buyer returns/internal loops, buyer dispatch excludes other exits, internal moves cancel. Quarantine/expiry/breakage receiver decision and actual quantities remain distinct from disposal/release. Source/assigned/baseline/additional native quantity-state-unit metadata and direct actual trace OR positive COMPLETE competing all-terminal records inclclosing/returns/usefulothers/provenloss eachquantity/unit/basis/method/state/time/source/link/owner, sourced conversions/exclusive loss and identical baseline stage/loss coverage are outside once.  selected_API_view explicitly selects label or analytical source; n_tablets is matched batch/population tablet_count and q_API_per_tablet is selected API mass per tablet, each with native unit/basis/method/state/sampletime/source. w_wet is water-only water_fraction; r_dry is dry_water_ratio. m_as_received is the same actual sample material mass excluding packaging; m_dry is nonwater mass after water-only subtraction, not an arbitrary other-volatile loss-on-drying residue. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native pack/tablet counts, API strength and whole/component mass units, explicit water basis | Each actual event/meter interval, traceable originals | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_energy | tablet_wholesale | electricity and actual burn | meter and fuel-burn period | meter_id; energy_quantity; energy_unit; meter_start; meter_end; interval; source; operation_purpose; burn_quantity; burn_unit; burn_basis; burn_source; fuel_identity; conversion_factor; conversion_unit; conversion_basis; conversion_source; event_ids; period_ids; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual warehouse meter intervals and independent burn evidence with native unit/basis/method/state/time/source and conversions. Include lighting/handling/support/idle/changeover/failed/quarantined/unfinished consumers and periods with complete all-user physical drivers; manufacture/tableting/coldchain is not silently added. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual kWh and native fuel-burn quantities | Each actual event/meter interval, traceable originals | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_supplies | tablet_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | native stock, provenance and actual fates | supply_SKU; purpose; composition; composition_basis; composition_source; provenance_owner; period; opening; external_receipts_net; closing_including_retained_recovery; native_unit; quantity_basis; quantity_source; usable_external_return; return_unit; return_recipient; matched_input_id; matched_state_scope; internal_loop; retained_recovery; waste_quantity; waste_unit; burn_quantity; burn_unit; actual_fate_source; accounting_view; conversion_factor; conversion_unit; conversion_basis; conversion_source; density; density_unit; density_temperature; temperature_unit; density_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | External receipts are NET supplies excluding container tare. Shared native unit/basis/method/state/time/source covers each compatible opening/receipt/closing/recovery/return/fate operand; distinct components retain own units. Expand actual SKU/purpose/composition and conditional cleanup supplies only. S=opening+netreceipts-closing including retained recovery: gross+matched unused return OR consumed-only and OMIT matched outlet. Keep provenance/recipient, applicable density-temperature/conversions and complete all-user drivers; inherited API/tablets/blister are not service input. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual supply native mass/volume or supported physical unit | Each actual event/meter interval, traceable originals | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_assets | tablet_wholesale | shared_assets | complete all-user asset life | asset_id; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; provider_scope; consumers; periods; used_driver; used_driver_unit; used_driver_basis; used_driver_source; observed_life_driver; observed_driver_unit; observed_history_source; remaining_life_driver; remaining_driver_unit; remaining_evidence_source; termination_evidence; lifetime_all_consumer_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; conversion_factor; conversion_unit; conversion_source; uncertainty; sensitivity; update_trigger; attribution_owner; already_per_reference; observed_driver_basis; remaining_driver_basis; conversion_basis; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; used_driver_method; used_driver_state; used_driver_sample_time; observed_driver_method; observed_driver_state; observed_driver_sample_time; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; lifetime_driver_method; lifetime_driver_state; lifetime_driver_sample_time | Record actual shared assets and every consumer/client/node/period through manufacture/maintenance/replacement/EOL. Used/observed/remaining/lifetime drivers each keep native unit/basis/method/state/time/source and compatible conversion; observed history plus sourced remainder/termination, uncertainty/sensitivity/update. Choose asset-equivalent OR lifecycle-complete provider and apply N once, no fixed lifetime. | Actual compatible used/observed/remaining/lifetime units; supported asset-equivalent Item(s) | Each actual event/meter interval, traceable originals | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_providers | tablet_wholesale | provider_services | performed physical result and coverage | provider_id; event_id; native_result; result_unit; result_basis; result_source; service_scope; measurement_method; sample_ids; sample_representativeness; sample_removed; sample_return; sample_fate; material_coverage; energy_coverage; asset_coverage; freight_coverage; receiver_treatment_coverage; excluded_testing_scope; period; conversion_factor; conversion_unit; conversion_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_owner; target_driver_basis; all_consumer_driver_basis; attribution_share; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | Verify actual native physical result/unit/basis/method/state/time/source and included materials/energy/assets/freight/receiver treatment. Document-visual batch/seal/expiry/condition checking or reading supplier release records is not performed new assay/opening/dispensing. Do not hide new testing/repack/clinical work under provider. Actual removed stock/samples retain quantity/return/fate/scope ownership; any excluded operation needs route review. | Actual provider-native physical-result unit | Each actual event/meter interval, traceable originals | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_freight | tablet_wholesale | freight | unique load-leg and that-record share | load_id; leg_id; cargo_ids; load_quantity; load_unit; load_basis_each_or_total; load_source; repeated_load_count; repetition_source; actual_packed_payload; payload_unit; payload_state; payload_source; vehicle_gross; vehicle_gross_unit; gross_source; vehicle_noncargo_tare; noncargo_tare_unit; tare_source; original_cargo_pack; added_cargo_pack; retained_moisture_finish; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_basis; distance_conversion_source; empty_return_coverage; delivered_provider_coverage; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; that_record_share; unique_scope_owner; already_per_reference; gross_conversion_factor; gross_conversion_unit; gross_conversion_basis; gross_conversion_source; tare_conversion_factor; tare_conversion_unit; tare_conversion_basis; tare_conversion_source; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; payload_basis; payload_method; payload_sample_time; gross_method; gross_state; gross_sample_time; tare_basis; tare_method; tare_state; tare_sample_time; distance_basis; distance_method; distance_state; distance_sample_time; that_record_share_basis; that_record_share_source; gross_basis | Use actual packed cargo OR same-state vehicle gross minus ONLY vehicle/noncargo tare. Keep whole-tablet API/excipients/water and all original/added cargo packs; no component audit addition. Cargo/gross/tare/distance and conversion operands preserve native unit/basis/method/state/time/source. EACH multiplies evidenced repetition once, TOTAL unchanged. Sum unique load-leg(actual_packed_payload_kg×actual_distance_km×that_record_share), THAT-record complete compatible all-user share INSIDE sum, then /positive FINAL N once unless already normalized; reconcile empty/return/delivered/provider scope and retain N=0 freight without division.  gross_basis is that record actual native measured vehicle-plus-cargo mass scope/state; tare_basis and tare_source identify actual vehicle/noncargo-only scope/source, separate from load EACH/TOTAL repetition convention. Cargo packaging is never vehicle tare. | Actual native packed mass/distance compatibly converted to kg*km | Each actual event/meter interval, traceable originals | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_fates | tablet_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | actual withdrawal, receiver and outfall state | event_id; source_location; receiving_location; receiving_medium; flow_identity; native_quantity; native_unit; quantity_basis; quantity_source; interval; composition; composition_basis; composition_source; fate_basis; fate_source; mixed_receiver_mass; mixed_mass_unit; mixed_mass_basis; mixed_mass_source; carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; free_liquid_volume; liquid_volume_unit; liquid_volume_source; density; density_unit; density_temperature; temperature_unit; density_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; nonadditive_view; attribution_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; record_method; record_state; record_sample_time; record_source; carrier_method; carrier_state; carrier_sample_time; absorbed_liquid_method; absorbed_liquid_state; absorbed_liquid_sample_time; collected_fragment_method; collected_fragment_state; collected_fragment_sample_time; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | Independently measure actual source withdrawal, receiver mixed solids, contained free liquid or direct outfall. Carrier/absorbed liquid/captured tablet-pack particles each keep native unit/basis/method/state/time/source; whole mixed stream/component/commodity views are non-additive. Actual volume/composition/fate/receiver transport/treatment and relevant density-temperature/conversions require sources, shared metadata only for compatible quantities; purchased water or tablet ingredients are not wastewater. | Actual native mass/volume compatibly converted to kg/m3 | Each actual event/meter interval, traceable originals | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |
| cp_releases | tablet_wholesale | direct_species | actual species and receiving-medium evidence | event_id; species_identity; particle_size; receiving_medium; measurement; measurement_unit; measurement_basis; measurement_source; activity; activity_unit; activity_basis; activity_source; factor; factor_unit; factor_basis; factor_source; factor_coverage; burn_fraction; burn_fraction_source; composition; composition_unit; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; time_interval; period; provider_coverage; nonadditive_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; measurement_method; measurement_state; measurement_sample_time; activity_method; activity_state; activity_sample_time; factor_method; factor_state; factor_reference_time; composition_method; composition_state; composition_sample_time; fate_method; fate_state; fate_time; conversion_method; conversion_state; conversion_time | Identify actual chemical/species/particle and medium through measurement or compatible actual activity-factor method with native unit/basis/method/state/time/source and explicit factor coverage. A complete species factor already including composition/fate fractions is not multiplied again. Apply only required compatible fraction/gas-concentration conversions once with temperature/pressure units/sources; label strength, ingredients, expiry or LOD are not release quantity or zero evidence. | Actual species native quantity compatibly converted to kg | Each actual event/meter interval, traceable originals | Actual receipt-to-FINAL-acceptance, stock/reporting periods and applicable complete asset life | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| FINAL_resource_normalization | all service rows | N=unique actual FINAL business acceptance after reversals for actual merchant purchase/ownership/resale. Direct trace OR actual quantity×compatible target_driver/positive COMPLETE all_consumer_driver retains all cancelled/failed/quarantined/unfinished/idle/other-client/period burdens and native unit/basis/method/state/time/source. Assigned total/N once only N>0; N=0 retains actual burden-period-cohort evidence without division. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual per-reference physical service inventory |  |
| pack_tablet_stock | commodity audit | Compatible native stock: opening+supplier_external_receipts+buyer_returns-closing-business_buyer_dispatch-supplier_returns-useful_other_exits-actual_discard-net_sample_removal=unknown_residual. Supplier receipts exclude buyerreturn/internal moves, buyer dispatch excludes other exits, internal moves cancel. Match batch/pack-tablet/component genealogy and actual status/receiver decisions. Whole pack with retained tablets, tablet/API/excipient/water/layers are non-additive; expired/quarantined/broken stock or residual is not automatic waste/API release/zero. | cp_tablets | Actual stock, status, exclusive exits and unknown state |  |
| API_water_views | nonexchange component audit | m_API=n_tablets×q_API_per_tablet×strength_unit_conversion_factor only for matched actual API identity/strength unit/basis/assay coverage and tablet population, not whole-tablet mass. For water-only w_wet=m_water/m_as_received, m_dry=m_as_received*(1-w_wet). Same-definition/sample r_dry=m_water/m_nonwater converts w_wet=r_dry/(1+r_dry); reported percent converts first through recorded native factor. Existing assay correction is not repeated; LOD other volatiles is not automatically water, unknown/incompatible basis blocks conversion. | cp_tablets | Separate actual API and water/nonwater audit views, never added to whole mass |  |
| complete_original_demand | commodity interface | Choose actual sourced direct measured/traced original-gate assigned quantity with exclusive terminal proof OR Qsource_actual×Dtarget/Dall_terminal. Dall_terminal>0 equals COMPLETE compatible competing FINALaccepted/usefulother/returns/closingcarry/provenloss records each quantity/unit/basis/method/state/time/source/link/owner, no accepted-only or direct-driver overlay. Source/assigned/baseline/additional native quantity-unit-state metadata and sourced conversions must match actual released tablet+pack. Explicit exclusive loss owner and identical already-covered baseline stage/loss demand precede outside once-only linkage of required additional complete finished demand. | cp_tablets; cp_consignment | Separate quantified complete released original-gate demand/loss |  |
| unique_record_freight | freight | Use unique load-leg measured packedcargo OR same-state gross minus ONLY vehicle/noncargo tare, retaining whole tablets/API/excipients/water/all cargo packs without component duplication. EACH multiplies actual evidenced repeat count once, TOTAL unchanged. After native conversion assigned kg*km=sum(unique load-leg: actual_packed_payload_kg×actual_distance_km×that_record_share), THAT-record complete compatible all-user share INSIDE sum, /positive FINAL N once unless already normalized, retaining N=0 freight without division. | cp_freight; cp_consignment | Actual unique per-reference freight |  |
| actual_species_method | direct_species | Actual species/particle/medium quantity=measurement OR compatible actual activity×factor with native unit/basis/method/state/time/source and factor coverage. Complete species factors already including composition/fate fractions are not multiplied again; only required compatible fraction/gas-concentration conversions once with temperature-pressure units/sources. API strength/content, expiry or LOD is not emission or zero evidence. | cp_releases; cp_energy; cp_tablets | Actual evidenced per-reference species |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_strength_scope | all identities | Resolve actual released tablet/API-strength-basis/pack genealogy and each physical service/material/provider/source/receiver/species identity/support before final exchanges. Count support is independent from commodity or completed merchant service identity. | Actual batch/SKU/release/merchant records and verified native support/details |
| native_component_definitions | all measured operands | Original/assigned/baseline/additional source demand, API strength/count/assay scope, whole/excipient/water/pack, asset-used-observed-remaining-lifetime and freight gross-tare-cargo-distance-share each need compatible native unit/basis/method/state/time/source. Water-only wet/dry definitions and same sample, percent conversion and other-volatile LOD evidence are explicit; missing records do not justify new tests/default zero. | cp_tablets; cp_assets; cp_supplies; cp_freight; cp_fates; cp_releases |
| coverage_actual_status | all interfaces | Disclose actual FINAL/reversal/cohort and batch/seal/expiry/condition uncertainty, unknown stock/loss/fate, source-equivalence/terminal/baseline gaps, provider/receiver/full-life asset assumptions and row-specific evidence needs. Quarantine/expiry needs actual disposition, N=0 resources retained; candidate method is not clinical/regulatory or final-chain readiness. | Actual coverage/native records, source/lifetime evidence and sensitivity/update |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| facility_water | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_water` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| new_outer_protection | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `new_outer_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| fuel_supply | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| discarded_tablet_packs | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_tablet_packs` under `cp_tablets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_tablet_packs_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_tablets`; actual source-linked native records |
| other_wastes | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_wastewater | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| water_outfalls | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| direct_species | tablet_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Use actual warehouse lighting, handling and business support metering. API/excipient manufacture, formulation/tableting/release/blister packing, new assays, refrigeration or patient treatment are not this ambient merchant operation.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual tablet-wholesale warehouse electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively assigned physical amount / N under cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual meter/interval/native source and complete all-user event assignment including idle/failed periods and provider coverage; no tableting energy, per-dose or cold-room default.

#### facility_water

Record actual facility sanitation/support supply, separate from tablet water content, inherited blister/carton moisture and downstream use. No merchant formulation, tablet washing, opening or apparatus rinsing is assumed.

Residual inventory requirement after the independently identified cases `facility_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased warehouse-support water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual purpose/source/native volume/interval and independently evidenced fates; product moisture or a water receipt does not measure wastewater.

#### new_outer_protection

Only real service-added outer cartons, film, separators, straps and shipment labels are inputs. Original blister layers/leaflets/cartons remain inherited finished-product gate; no new primary pack per consignment. Reusable pallets/cases use lifetime service.

Residual inventory requirement after the independently identified cases `new_outer_protection_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual added shipment protection and labels
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need added-versus-original pack levels and actual SKU/net mass or sourced native count/area conversion and stock; no universal foil/polymer/paper layer mass or complete new retail carton.

#### operating_supplies

Expand actual equipment lubricants, facility cleaners, wipes, absorbents, filters and office consumables in native identity/use. Inherited API, excipients and blister materials are not current service chemical inputs; no tablet processing/testing or repacking is prescribed.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual facility maintenance and conditional incident-cleanup supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual SKU/purpose/net stock/composition and spent carrier/absorbed liquid/captured tablet-pack residue evidence where incidents occurred; product ingredient list is not a cleanup or emission quantity.

#### fuel_supply

Keep actual grade/supply stock distinct from burn, usable return and nonburned waste; reconcile hired handling/freight inclusion. Manufacturer synthesis/tableting fuel stays outside this service.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual owned warehouse-handling fuel stock
- Flow property / unit: Volume / L
- Amount rule: Actual exclusively assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native opening/net receipts/closing and disjoint measured fates with actual density/temperature/conversion sources as needed; receipts alone are not combustion.

#### provider_services

Use performed handling/storage/document-visual batch/seal/expiry/condition checks and facility/business support in native physical results. Reading a batch release record is not new API assay, tablet opening/testing, dispensing or a clinical service.

- Identity requirement: Actual physical tablet-wholesale support results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively assigned physical amount / N under cp_providers
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need actual result/unit/method/source and included materials/energy/assets/freight/treatment scope; trace pre-existing measurement records without introducing opening/assay under a generic provider. Any such new operation needs explicit route review.

#### shared_assets

Include actual facility/racks/handling/meters/ICT/reusable cases/pallets across all users/periods and full manufacture, maintenance, replacement and end-of-life. The pharmaceutical commodity and original blisters are not warehouse assets.

- Identity requirement: Full-life shared warehouse and reusable handling assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively assigned physical amount / N under cp_assets
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need job-used/observed/remaining/lifetime drivers each native unit/basis/method/state/time/source, observed plus sourced remainder/termination and uncertainty/sensitivity/update; no fixed life or full new pallet per dispatch.

#### freight

Cargo includes actual whole tablets with API/excipients/water and original plus added cargo packs in their retained state. Measured same-state vehicle gross subtracts ONLY vehicle/noncargo tare. Reconcile supplier-delivered/provider/empty-return coverage.

- Identity requirement: Actual original-packed tablet and service freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual exclusively assigned physical amount / N under cp_freight
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need unique load-leg payload/gross/tare/distance, EACH/TOTAL native factors and THAT-record share inside sum; API strength alone cannot supply tablet/cargo kg.

#### environmental_water

Only real merchant-operated environmental withdrawal belongs here, separately from purchased water, measured product moisture and manufacturer processing water.

- Identity requirement: Actual direct source-specific warehouse water abstraction
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual source/location/interval/native measurement/conversion boundary; a water-containing tablet or damp carton does not establish withdrawal.

#### usable_supply_returns

Only actual same-scope standalone supply SKU/state returns are service outlets. Consumed-only input OMITs the matched return exchange. Internal loops/recovered retained materials stay closing; drug/blister/carton returns remain nonexchange commodity stock.

- Identity requirement: Actual unused matched operating-supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical amount / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual recipient/native transfer and matched supply provenance; no inherited API/product/pack return against unrelated current supplies, negative input or automatic credit.

#### discarded_tablet_packs

Use actual documented receiver disposition/quantity/state for discarded whole packs retaining tablets, separate real tablet/fragments or original pack residues. Whole pack/tablet/API/excipient/water/layers are non-additive views. Quarantine, expiry or broken blister alone does not establish disposal quantity, API release or default replacement stock.

- Identity requirement: Actual discarded tablet packs, tablets/fragments or original packing
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical amount / N under cp_tablets
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tablets`

Range evidence need: Need actual status/event/receiver decision, native quantity/net-tare/batch genealogy and treatment coverage with original finished-gate equivalence. Retained tablets in whole discarded packs are not extra API/pack waste exchanges.

#### other_wastes

Capture actual spent wipes/absorbents/filters/service-added packs and incident residues, with carrier/absorbed liquid/captured tablet-pack particles inside one mixed received stream. No formulation sludge, assay waste or manufacturing dust is invented.

- Identity requirement: Actual spent supplies and mixed warehouse cleanup residues
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need received mixed mass and each carrier/liquid/fragment native unit/basis/method/state/time/source, composition and treatment scope; new wipe receipt or ingredient presence does not quantify spent residue.

#### contained_wastewater

Measure actual free liquid collected/transferred from performed facility work, distinct from absorbed liquid in cleanup solids, tablet moisture and inherited packing. No tablet manufacture/wash/assay effluent is assumed.

- Identity requirement: Actual contained facility-work wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual collected/received native volume/composition/event/source and receiver transport/treatment, not supplied water, wet-wipe mass or medicine moisture as proxy.

#### water_outfalls

Only actual direct discharge to an identified environmental medium is represented. Contained receiver transfer is Waste; patient use/excretion and manufacturer discharge are outside this merchant operation.

- Identity requirement: Actual direct environmental warehouse-water outfall
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical amount / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual location/interval/medium/native volume/composition/fate evidence and conversions; a water receipt or discarded blister does not demonstrate direct outfall.

#### direct_species

Expand only actual chemical/species/particle and receiving medium from real fuel use, maintenance or incidents using measurement or compatible method. Active strength, excipient list, water fraction, expiry, loss-on-drying or unknown mass deficit is neither an API emission factor nor proof of zero release.

- Identity requirement: Actual species-specific releases from evidenced service events
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical amount / N under cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual substance/medium measurement or compatible activity-factor identity/native units/bases/method/state/time/source and factor coverage; complete species factors already including fractions are not multiplied again, and actual composition/fate conversions apply only when required once.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_FINAL_merchant | accepted_service | Require actual merchant_id/purchase/ownership/resale, named B2B buyer, FINAL gate/time/source/resolved reversals, unique FINAL N and all sixteen qualifiers. Receipts/invoices/doses/tablets/packages insufficient. Normalize only N>0; N=0 cancelled/failed/quarantined/unfinished resources retain period/cohort evidence. |  |
| released_native_presentation | commodity | Verify actual single-active paracetamol oral-tablet release/SKU/batch, label versus analytical strength unit/basis/assay coverage distinct from whole-tablet/excipient/water/pack, native counts/genealogy and seal/expiry/stated-observed condition sources. No example strength, expiry, pack size/layer mass, dose/treatment or new opening/assay/coldchain default. | zentiva-paracetamol-original-pack |
| water_definition_match | water/nonwater audit | For dry=m_as_received*(1-w_wet), w_wet is water/as-received mass only. Dry water/nonwater ratio converts r_dry/(1+r_dry) only matching actual definitions/sample after percent-to-ratio conversion. Other-volatile LOD is not water proof; incompatible/unknown basis blocks conversion, not zero. API or whole-tablet assay coverage must not be multiplied twice. |  |
| actual_stock_routes | tablet_wholesale | Link actual batch/period receipt/check/cleanup/changeover/idle/cancelled/failed/rejected/quarantined/unfinished/dispatch/FINAL events. Expiry/broken seal/return/sample/pending/discard needs unique actual decision/receiver/fate/scope, not automatic whole-pack loss/API emission or hidden opening/testing/splitting/dispensing/repack. |  |
| complete_terminal_source | commodity interface | Check source/assigned/baseline/additional native quantity-unit-basis-method-state-time-source, sourced pack/tablet/component equivalence and direct trace OR positive COMPLETE all-terminal competing records inclclosing/returns/useful-other/provenloss each quantity/unit/basis/method/state/time/source/link/owner. No accepted-only/direct-driver overlay; exclusive loss owner and identical baseline stage/loss coverage, required complete released-tablet+pack demand outside once. |  |
| assets_stock_freight_fates | all resources | Verify all-user/period full assets and each used-observed-remaining-lifetime native driver, observed+sourced remainder/termination/uncertainty/update, single provider/asset/N scope. Supplies grossS+matched unused outlet OR consumed-only OMIT outlet, no unrelated negatives/credits. Wholepack-retainedtablet/component/mixedcleanup/free-liquid/species nonadditive receiver transport/treatment once. Packed freight retains wholetablet and all packs, ONLY vehicle/noncargo tare subtraction, unique EACH/TOTAL/native factors and THAT-record share INSIDE sum then positive FINAL N once. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/completeness review |
| downstream_use | Original-blister-carton single-active paracetamol oral-tablet physical wholesale add-on separately linked to complete released finished-source demand/loss coverage |
| allowed_use | Actual released single-active paracetamol oral tablets in intact original manufacturer blisters/cartons, ordinary ambient own-account FINAL B2B handover with compatible batch/strength/whole/component/seal/expiry/state evidence |
| excluded_use | Standalone medicine footprint/dose/treatment/efficacy/regulatory claims; rawAPI/combination/other forms; merchant opening/splitting/dispensing/repack/compounding/newtest/coldchain/clinicaluse; retail/agency/storage-only |
| required_metadata | Actual merchant purchase/ownership/resale/B2Bbuyer/FINALgate-source/reversals/N, SKU/batch/release/strengthidentity-unit-basis-assaycoverage/pack-tablet genealogy/whole/API/excipient/water definitions/originalblistercarton/seal/expiry/condition/native measurement-method-state-time-source, site/period, complete terminal source demand/baseline coverage and service/asset/provider/freight/receiver owners |
| required_quality_disclosure | Identity/support/FINAL/reversal/batch/strength/assay/waterdefinition/wholemass/pack/seal/expiry/condition uncertainty; unknown stock/loss/fate or source-equivalence/terminal/baseline gaps, all-user lifetime assumptions and per-record freight shares, row-specific evidence limits |
| update_trigger | Changed active/formulation/strength-basis/assay/watermethod/pack/release/seal/expiry/conditions/acceptance or actual opening/test/repack/dispensing/coldchain route; source assignment/coverage/provider/asset/freight/receiver/native conversion |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-pharmaceutical-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025),35260 medicaments and61073/group352 pharmaceutical wholesale. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only; declared released single-active paracetamol oral-tablet service is narrower than all61073 pharmaceuticals. |
| zentiva-paracetamol-original-pack | official_guidance | Zentiva Paracetamol500mg Tablets(P) SmPC, revision7February2025, manufacturer information on emc. https://www.medicines.org.uk/emc/product/9128/smpc | Qualitative actual single-active oral form, excipient/original-blister-carton/storage-expiry identity questions only. Label API strength is not whole-tablet mass; no universal strength, pack count/layer mass, shelf life, clinical dose/efficacy/use or regulatory/merchant-test/coldchain defaults. |
