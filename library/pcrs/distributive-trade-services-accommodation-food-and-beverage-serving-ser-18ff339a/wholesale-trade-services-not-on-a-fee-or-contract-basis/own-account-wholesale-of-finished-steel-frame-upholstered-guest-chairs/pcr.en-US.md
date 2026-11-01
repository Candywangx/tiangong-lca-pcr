---
pcr_id: pcr.own-account-wholesale-of-finished-steel-frame-upholstered-guest-chairs
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of finished steel-frame upholstered guest chairs

## 1. Scope and Applicability

This PCR covers new complete factoryfinished four-leg primarily steel-frame office guest/meeting chairs with upholstered SEAT AND BACK and glides, in the actual finished shipped assembly state and original packaging, through ambient merchant-owned/resold B2B physical wholesale. Require actual SKU/BOM/finish/glide/pack and included-versus-separate components. Exclude casters, gas lifts/task mechanisms, tablet arms, nesting/tandem seats/stools, primarily wooden-frame or bare-plastic chairs, manufacture/upholstery/refinishing/repair/merchant assembly, load testing, occupied seating use, retail/fee agency/storage-only. Actual added operations require route review; source options cannot be combined into a fictional SKU.

This is a service add-on. Complete actual material supply, steel forming/welding, polymer/foam manufacture and molding, upholstery, selected finish, assembly/release/original-pack production including lost upstream stays outside service. Quantify/link matched complete original-gate demand after exclusive source assignment and identical baseline stage/loss coverage once before complete-chain readiness. Actual physical handling and receiver transport/treatment stay inside once. Traded chairs are merchandise stock, not this service input, occupied-seat service or warehouse capital.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-wholesale-of-finished-steel-frame-upholstered-guest-chairs |
| classification_refs | CPC3 61083 includes38111 seats primarily metalframe; this fourleg upholsteredguestchair route is narrower, not all3812/451 office goods |
| covered_products | New complete fourleg primarily steelframe seat-and-back upholstered guest/meetingchair glide-equipped ambient ownaccount B2B consignment service |
| excluded_products | Caster/gaslift/tabletarm/nesting/tandem/stool/primarilywoodframe/bareplastic; manufacture/merchantassembly/upholstery/refinish/repair/loadtest/occupieduse; retail/agency/storageonly |
| representative_product | Actual SKU/lot chair-part genealogy, frame/foam/textile/shell/finish/fasteners/glides and actual included arms/accessories, finished shippingassembly/pack/native mass-count-state at FINAL gate |
| production_route | Complete finished manufacturer assemblyrelease/originalpack suppliergate -> ownership receiving/ambient stock/condition-completeness handling -> FINAL B2B acceptance/resale |
| market_state | Counted physical wholesale service; actual chair/component/pack/native quantity-state remains nonexchange commodity audit |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account finished steel-frame upholstered guest-chair wholesale consignment |
| How much | 1 Item(s) |
| How well | Actual complete new fourleg primarily steelframe seat-and-back upholstered glided chairs, sourced SKU/parts/state/quantity/condition/business acceptance; no stacking/load/future use/life guarantee |
| How long or cycle | Actual receipt-to-FINAL gate, separate stock/reporting periods/full asset phases; no-acceptance event resources retained |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account finished steel-frame upholstered guest-chair wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_purchase_ownership_resale; actual_B2B_buyer; FINAL_gate_time_source_reversals; actual_model_SKU_lot_chair_ids; fourleg_primarily_steel_frame_evidence; seat_AND_back_upholstered_glides; actual_frame_shell_foam_textile_BOM; actual_finish_fastener_glide_inclusions; included_versus_separate_arms_accessories; factoryfinished_shippingassembly_pack_state; native_chair_part_count_net_gross_tare; independent_component_moisture_finish_basis; component_method_state_sampletime_source; actual_start_end_timezone_duration_unit_source; complete_source_assignment_baseline_coverage_owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| chair_part_native | commodity counts/mass | Count; Mass | Actual native chair/part counts and kg with explicit units | Trace actual chair IDs/SKU/pack and included-versus-separate BOM, actual finished assembled shipping state. Piece/kit/glide/pad quantity converts only through sourced actual genealogy, not nominal chairs-per-carton or missing-part=whole-chair loss. | ki-strive-current |
| component_state | independent frame/foam/textile/shell/finish/glide | Actual component Mass/Area/Volume or composition property | Each actual native unit and dimensional conversion unit | Each independently measured component/moisture/finish has unit/basis/method/state/sampletime/source and representative population. Do not derive steel mass from tube geometry/nominalgrade or foam from source thickness; density conversion needs actual material/state/density unit/temperature_unit/source. | ki-strive-technical-2020 |
| water_definition | actual component water audit | Mass; water-only mass fraction/ratio | Actual water/asreceived wet fraction or compatible drywater/nonwater ratio | Only same actual sample/definitions: w_wet=m_water/m_as_received; m_nonwater=m_as_received*(1-w_wet); if r_dry=m_water/m_nonwater then w_wet=r_dry/(1+r_dry), percent-to-ratio first. LOD other volatiles is not water or finish emission; unknown moisture is not zero. |  |
| FINAL_reference | service inventory | Count denominator; actual row native physical property | Item(s) denominator; actual physical resource unit per Item(s) | Require actual purchase/ownership/resale/B2Bbuyer/FINALgate/time/source/resolved reversals. Assign complete actual users/events/periods then /positive unique FINAL N once; N0 resources retained without division. Count support is measurement, not chair or service identity. |  |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | New complete factoryfinished fourleg primarily steelframe guest/meeting chairs, upholstered seat AND back, actual glides/BOM/finish/inclusions/shipped assembly/original packs/native quantity-state |
| starting_condition_role | Inherited complete manufactured assembled/released merchandise for physical wholesale, not rawsteel/foam/polymer or new warehouse seating asset |
| product_classification_scope | Narrower61083 via38111 only; does not cover all seats,3812 furniture or451 machinery |
| recursive_input_rule | Keep actual traded chairs/retained components/moisture/finish/inherited pack/returns/closing in nonexchange commodity audit; no automatically consumed steel/foam/textile/finish or service capital. |
| upstream_dataset_requirement | Separate matched complete material/steel forming-welding/polymer-foam molding/upholstery/selectedfinish/assemblyrelease/originalpack suppliergate including actual configuration. Rawsteel/foam resin or unassembled part basket alone omits finished stages. |
| disclosure | Actual SKU/lot chair-part BOM/glide/finish/inclusions/shippingassembly/pack/native quantity/net-gross-tare/component water-method-state-time-source, FINAL gate/time, full original source assignment/baselinecoverage and service/provider/asset/freight/receiver owners/unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| complete_commodity | commodity interface | Complete actual manufacture/assemblyrelease/originalpack including real lost upstream stays outside service; original-gate demand and identical baseline stage/loss coverage separately linked once, actual service/receiver transport/treatment once. |  |
| source_limits | guest_chair_wholesale | KI current options page and agedJan2020 technical specification provide qualitative actual-configuration questions. Do not merge all options or another brand into one SKU, or default tube dimensions/steelgrade/foamthickness/fractions/finish/glide material/weight/stackload/life/warranty. Manufacturer tests are not new merchant procedures. | ki-strive-current; ki-strive-technical-2020 |
| unknown_fate | commodity state | Missing glide/torn pad/scuff/dampness is distinct from actual component or wholechair discard. Unknown stock deficit is not wholechair loss/species emission/zero; chrome presence not chromiumVI release or automatic recycling. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| guest_chair_wholesale | Finished guest-chair merchant receipt and FINAL business handover | required | Actual complete factoryfinished fourleg steel-frame seat-and-back upholstered glided chair owned/resold FINAL B2B handover | Actual receipt/completeness-condition/stock/handling/commercial acceptance without manufacture/assembly/upholstery/refinish/loadtest/use | `accepted_service` |

Commercial consignments overlap warehouse batches/continuous support periods. Link real receipt/document-visual model/completeness-condition, existing or actual representative measurement sources, facility cleanup/changeover/idle/cancelled/failed/rejected/quarantined/unfinished/dispatch/FINAL events to lots/periods. No everychair load test/routine unpacking/dismantling. Missing parts/torn upholstery/scuff/wet damage follow actual supplierreturn/closing-pending/usefulother/receiver-discard decisions, not default replacement/refinish/repack/part removal. Actual new work including contracted work needs route review; real representative sample removal/return/fates retain burden once. N0 retains resource/event/period/evidenced-cohort ownership without division/drop, positive FINAL N normalization once.

### Process: Finished guest-chair merchant receipt and FINAL business handover (`guest_chair_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively assigned physical quantity / N under cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need real meter intervals and complete all-user/event assignment including idle, failed and unfinished work and provider coverage; no electricity per chair or warranty-year.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need source/purpose/native supply interval and independent measured fates; purchased water or chair moisture is not wastewater volume.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual use/incident/net stock/composition and spent carrier/absorbed liquid/captured fragment evidence, not source care examples or assumed upholstery consumption.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native opening/net receipts/closing/return/fates, fuel identity and compatible density-temperature/conversion source; supplied fuel does not prove burn.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account finished steel-frame upholstered guest-chair wholesale consignment (`accepted_service`)

One unique real FINAL business-accepted commercial consignment of actual new four-leg primarily steel-frame guest/meeting chairs, upholstered seat AND back, with glides and complete actual shipped factoryfinished state/original packs. Chair/pad/glide count, kg or occupied sitting time is not the service reference.

- Selected flow: Completed own-account finished steel-frame upholstered guest-chair wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Need merchant purchase/ownership/resale/B2Bbuyer/FINAL gate-source/reversals, actual SKU/lot chair-part BOM/finish/glides/native quantity/assembly-pack state/condition/time. No universal brand/steel grade/foam/weight/stacking/life/warranty or performance guarantee.

##### Waste flows

###### Discarded complete finished steel-frame upholstered guest chair (`discarded_chairs_atomic_case`)

Conditional on independently recorded actual Discarded complete finished steel-frame upholstered guest chair. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_chairs`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete finished steel-frame upholstered guest chair
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_chairs
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chairs`

Range evidence need: Need actual stock/incident/fate/receiver/native mass-count correspondence, included component state and treatment coverage/sourcegate owner; do not turn part loss into whole-chair replacement or default recycling.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_all_users | service resources | Use direct actual trace OR quantity×compatible target_driver/positive COMPLETE all_consumer_driver, native unit/basis/method/state/time/source and all-client/period scope. Retain idle/changeover/cancelled/failed/quarantined/unfinished resources. Unique FINAL N after actual ownership-resale/B2B gate/reversals divides assigned total once only N>0; N0 preserves burden-period-cohort evidence. No price/chaircount/occupiedtime default driver. |  |
| complete_source_assignment | commodity interface | For each actual complete source lot/state choose direct measured/traced assigned_gate_demand with quantity/unit/basis/method/state/time/source/direct evidence/exclusive terminal links OR actual_source_gate_quantity×target_driver/source_all_terminal_driver. Positive COMPLETE denominator includes compatible competing FINALaccepted/usefulother/returns/closingcarry/provenloss records each quantity/unit/basis/method/state/time/source/link/owner, not accepted-only or overlay direct+driver views. Actual source/assigned/baseline/additional native states/quantities/conversions and exclusive loss owner match complete manufactured/assembled/released/packed chair gate. Same baseline stage/loss coverage precedes required additional outside once; unknown loss is not zero. |  |
| supply_stock | service supplies | S=assignedopening+NETexternalreceipts-closing including retained recoveries. Choose exactly one: (1) gross S/N as INPUT and actual matched unused external return/N as a separate OUTPUT; (2) consumed-only (S-return)/N as INPUT and OMIT that matched return OUTPUT. Do not add return quantity to input or deduct it twice. Internal loops/retained recovery remain closing. Waste/consumption retains supply burden; no inherited chair/component recovery against unrelated inputs or negative netting/automatic credit. |  |
| full_asset_life | assets/providers | Actual used_driver/COMPLETE lifetime_all_consumer_driver with compatible native metadata assigns complete manufacture/maintenance/real replacement/EOL across every consumer/period. Observed history+sourced remaining/termination, uncertainty/sensitivity/update required. One asset-equivalent OR lifecycle-complete provider and N once; warranty is not actual life. |  |
| exclusive_fates | stock/receiver | Whole chair retaining components/finish/glides, separately collected part/pack, mixed cleanup carrier-absorbedliquid-fragments, free contained liquid and directspecies are nonadditive/exclusive views. Actual receiver transport/treatment has one owner after provider coverage; quarantine/returns/pending not automatically waste or release, no default recycling credit. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | guest_chair_wholesale | accepted_service | actual merchant FINAL acceptance | consignment_id; merchant_id; purchase_evidence; ownership_evidence; resale_evidence; business_buyer_id; acceptance_gate; acceptance_time; acceptance_source; reversal_ids; reversal_status_source; unique_FINAL_accepted_ids; N; N_period_cohort; model_SKU_lot_ids; chair_part_pack_genealogy; actual_BOM; completeness_condition_evidence; buyer_criteria_source; start_time; start_time_source; end_time; end_time_source; time_zone; time_unit; duration; duration_unit; duration_method; duration_source; site_id; campaign_id; reporting_period; cancelled_failed_rejected_unfinished_ids; no_acceptance_resource_owner; attribution_owner | Trace actual merchant purchase/ownership/resale, named B2B buyer, FINAL gate/time/source and resolved reversals. N is unique actual FINAL commercial acceptances for period/cohort, not chair/pad/glide/carton quantity or occupied use. Receipt/invoice alone insufficient. Preserve cancelled/failed/quarantined/unfinished resources and time-zone/duration native method/unit/source; N0 no division. | Actual Count Item(s) and native timestamp/duration | Each actual event/meter interval with traceable originals | Actual receipt-to-FINAL, stock/reporting periods and full asset phases | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage/uncertainty |
| cp_chairs | guest_chair_wholesale | nonexchange chair/component stock; discarded_chairs | actual chair-part-state audit | model_SKU; chair_ids; source_lot_id; manufacturer_configuration_source; evidence_date; fourleg_primarily_steel_frame_evidence; seat_upholstery_evidence; back_upholstery_evidence; glide_identity; actual_BOM; steel_grade; steel_grade_source; frame_identity; frame_finish_identity; finish_state_source; shell_identity; foam_identity; upholstery_identity; fastener_identity; arm_inclusions; separately_sold_accessories; actual_component_inclusions; shipping_assembly_state; assembly_state_source; original_pack_inclusions; pack_ids; chair_count; chair_count_unit; chair_count_basis; chair_count_method; chair_count_state; chair_count_sample_time; chair_count_source; part_count; part_count_unit; part_count_basis; part_count_method; part_count_state; part_count_sample_time; part_count_source; chair_part_genealogy; genealogy_source; component_measurement_population; condition; condition_method; condition_time; condition_source; receiver_disposition_decision; receiver_decision_source; buyer_criteria_source; m_as_received; m_as_received_unit; m_as_received_basis; m_as_received_method; m_as_received_state; m_as_received_sample_time; m_as_received_source; m_water; m_water_unit; m_water_basis; m_water_method; m_water_state; m_water_sample_time; m_water_source; water_fraction; water_fraction_unit; water_fraction_basis; water_fraction_method; water_fraction_state; water_fraction_sample_time; water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; water_definition; nonwater_definition; percent_conversion_factor; percent_conversion_unit; percent_conversion_basis; percent_conversion_method; percent_conversion_state; percent_conversion_time; percent_conversion_source; LOD_value; LOD_value_unit; LOD_value_basis; LOD_value_method; LOD_value_state; LOD_value_sample_time; LOD_value_source; LOD_other_volatiles_evidence; finish_quantity; finish_quantity_unit; finish_quantity_basis; finish_quantity_method; finish_quantity_state; finish_quantity_sample_time; finish_quantity_source; composition_value; composition_value_unit; composition_value_basis; composition_value_method; composition_value_state; composition_value_sample_time; composition_value_source; composition_mass_or_volume; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_temperature; density_temperature_unit; density_temperature_source; density_source; native_conversion_factor; native_conversion_unit; native_conversion_basis; native_conversion_method; native_conversion_state; native_conversion_time; native_conversion_source; actual_native_quantity; native_unit; quantity_basis; quantity_method; quantity_state; quantity_sample_time; quantity_source; gross_mass; gross_unit; gross_basis; gross_method; gross_state; gross_sample_time; gross_source; packaging_tare; packaging_unit; packaging_basis; packaging_method; packaging_state; packaging_sample_time; packaging_source; net_finished_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; sample_representativeness; temperature; temperature_unit; temperature_source; opening; supplier_external_receipts; buyer_returns; closing; business_buyer_dispatch; supplier_returns; useful_other_exits; actual_discard; net_sample_removal; unknown_residual; stock_unit; stock_basis; stock_method; stock_state; stock_sample_time; stock_source; disposition_ids; receiver; treatment_coverage; actual_source_gate_quantity; source_gate_unit; source_gate_basis; source_gate_method; source_gate_state; source_gate_sample_time; source_gate_quantity_source; source_complete_stage_evidence; assignment_view; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_basis; assigned_gate_demand_method; assigned_gate_demand_state; assigned_gate_demand_sample_time; assigned_gate_demand_source; direct_assignment_evidence; exclusive_terminal_links; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; source_all_terminal_driver; source_all_terminal_driver_unit; source_all_terminal_driver_basis; source_all_terminal_driver_method; source_all_terminal_driver_state; source_all_terminal_driver_sample_time; source_all_terminal_driver_source; competing_terminal_driver_records; terminal_record_quantity; terminal_record_unit; terminal_record_basis; terminal_record_method; terminal_record_state; terminal_record_sample_time; terminal_record_source; terminal_record_link; terminal_record_owner; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_state; original_gate_conversion_time; original_gate_conversion_source; baseline_demand; baseline_demand_unit; baseline_demand_basis; baseline_demand_method; baseline_demand_state; baseline_demand_sample_time; baseline_demand_source; baseline_stage_loss_coverage; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_basis; additional_gate_demand_method; additional_gate_demand_state; additional_gate_demand_sample_time; additional_gate_demand_source; exclusive_loss_assignment; commodity_adjustment_owner; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Record actual SKU/lot chair IDs and actual complete frame/foam/shell/textile/finish/fastener/glide/included arm/accessory/original-pack BOM; verify fourleg steelprimary/seat AND back upholstery/glides and no excluded mechanism. Each independent chair/part/component/finish/moisture quantity has native unit/basis/method/state/sampletime/source and representative population; no nominal tube geometry/thickness/whole-chair fractions. Shipping assembly state and original inclusion genealogy govern chair-part equivalence, not automatic part-to-whole loss. Water-only wet/dry definitions and percent factor source distinct from LOD other volatiles; density conversions require actual material/state/temperature_unit/source. Use existing compatible records or actual representative measurement, no new routine assembly/disassembly/loadtest. Shared stock metadata covers compatible opening/supplier external receipts/buyerreturns/closing/businessbuyer dispatch/supplierreturns/usefulother/actualdiscard/net sample removal; receipts exclude buyerreturns/internalmoves, dispatch excludes separately recorded exits, internalmoves cancel. Source/assigned/baseline/additional native quantities with state/unit/basis/method/time/source, direct actual trace OR positive COMPLETE allterminal competing records inclclosing/returns/usefulother/provenloss eachquantity/unit/basis/method/state/time/source/link/owner and original-state conversions/exclusive lossowner/identicalbaselinecoverage link complete suppliergate outside once. Unknown residual or missing component does not establish wholechair loss/release/zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native chair/part counts, mass/area/volume/composition/moisture/finish and conversion units | Each actual event/meter interval with traceable originals | Actual receipt-to-FINAL, stock/reporting periods and full asset phases | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage/uncertainty |
| cp_energy | guest_chair_wholesale | electricity and actual burn | actual meter/burn interval | meter_id; energy_quantity; energy_unit; meter_start; meter_end; interval; source; operation_purpose; burn_quantity; burn_unit; burn_basis; burn_source; fuel_identity; conversion_factor; conversion_unit; conversion_basis; conversion_source; event_ids; period_ids; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Read actual lighting/handling/facility support meter intervals and independently evidenced burn. Compatible native quantity/basis/method/state/time/source/conversion, complete physical all-user/period drivers retain idle/cancelled/failed/unfinished events. No manufacturing, testing or seating-use energy from chair BOM. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual kWh and native burn quantity | Each actual event/meter interval with traceable originals | Actual receipt-to-FINAL, stock/reporting periods and full asset phases | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage/uncertainty |
| cp_supplies | guest_chair_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | actual supplies/returns | supply_SKU; purpose; composition; composition_basis; composition_source; provenance_owner; period; opening; external_receipts_net; closing_including_retained_recovery; native_unit; quantity_basis; quantity_source; usable_external_return; return_unit; return_recipient; matched_input_id; matched_state_scope; internal_loop; retained_recovery; waste_quantity; waste_unit; burn_quantity; burn_unit; actual_fate_source; accounting_view; conversion_factor; conversion_unit; conversion_basis; conversion_source; density; density_unit; density_temperature; temperature_unit; density_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | NET external receipts exclude supply container tare. Shared native unit/basis/method/state/time/source covers each compatible opening/receipt/closing/recovery/return/fate operand; independently differing components keep own units. Actual SKU/purpose/composition/use only, cleanup conditional. S=opening+netreceipts-closing including retained recovery, gross+matched unused return OR consumed-only OMIT matched outlet. Preserve provenance/recipient/actual density-temperature/conversion/alluser drivers; chair materials/inherited finish are merchandise, no unrelated negative offset/credit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual native supply physical unit | Each actual event/meter interval with traceable originals | Actual receipt-to-FINAL, stock/reporting periods and full asset phases | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage/uncertainty |
| cp_assets | guest_chair_wholesale | shared_assets | complete all-user asset life | asset_id; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; provider_scope; consumers; periods; used_driver; used_driver_unit; used_driver_basis; used_driver_source; observed_life_driver; observed_driver_unit; observed_history_source; remaining_life_driver; remaining_driver_unit; remaining_evidence_source; termination_evidence; lifetime_all_consumer_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; conversion_factor; conversion_unit; conversion_source; uncertainty; sensitivity; update_trigger; attribution_owner; already_per_reference; observed_driver_basis; remaining_driver_basis; conversion_basis; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; used_driver_method; used_driver_state; used_driver_sample_time; observed_driver_method; observed_driver_state; observed_driver_sample_time; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; lifetime_driver_method; lifetime_driver_state; lifetime_driver_sample_time | Identify actual facility/racks/handling/meters/ICT/reusable supports and every consuming node/client/period. Full manufacture/maintenance/real replacements/EOL; used/observed/remaining/lifetime drivers each native unit/basis/method/state/time/source and compatible conversion. Observed+sourced remainder/termination/uncertainty/sensitivity/update, one asset-equivalent OR complete provider/N once. Traded chairs or source warranty/stacking capacities do not establish merchant assets/life. | Actual used/observed/remaining/lifetime driver units; supported asset-equivalent Item(s) | Each actual event/meter interval with traceable originals | Actual receipt-to-FINAL, stock/reporting periods and full asset phases | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage/uncertainty |
| cp_providers | guest_chair_wholesale | provider_services | actual physical results/coverage | provider_id; event_id; native_result; result_unit; result_basis; result_source; service_scope; measurement_method; sample_ids; sample_representativeness; sample_removed; sample_return; sample_fate; material_coverage; energy_coverage; asset_coverage; freight_coverage; receiver_treatment_coverage; excluded_testing_scope; period; conversion_factor; conversion_unit; conversion_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_owner; target_driver_basis; all_consumer_driver_basis; attribution_share; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | Verify performed physical result native unit/basis/method/state/time/source and material/energy/asset/freight/receiver scope. Manufacturer assembly/test source is inherited evidence, not new merchant work. Actual representative measurements/samples keep population/removal/return/fate/owner; no hidden loadtest/assembly/upholstery/refinish/use including contracted activities, changed route needs review. | Actual provider-native physical-result unit | Each actual event/meter interval with traceable originals | Actual receipt-to-FINAL, stock/reporting periods and full asset phases | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage/uncertainty |
| cp_freight | guest_chair_wholesale | freight | unique load-leg THAT-record share | load_id; leg_id; cargo_ids; load_quantity; load_unit; load_basis_each_or_total; load_source; repeated_load_count; repetition_source; actual_packed_payload; payload_unit; payload_state; payload_source; vehicle_gross; vehicle_gross_unit; gross_source; vehicle_noncargo_tare; noncargo_tare_unit; tare_source; original_cargo_pack; added_cargo_pack; retained_moisture_finish; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_basis; distance_conversion_source; empty_return_coverage; delivered_provider_coverage; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; that_record_share; unique_scope_owner; already_per_reference; gross_conversion_factor; gross_conversion_unit; gross_conversion_basis; gross_conversion_source; tare_conversion_factor; tare_conversion_unit; tare_conversion_basis; tare_conversion_source; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; payload_basis; payload_method; payload_sample_time; gross_method; gross_state; gross_sample_time; tare_basis; tare_method; tare_state; tare_sample_time; distance_basis; distance_method; distance_state; distance_sample_time; that_record_share_basis; that_record_share_source; gross_basis | Use actual packed cargo OR same-state measured vehicle gross minus ONLY vehicle/noncargo tare. Retain all chair components/moisture/finish/original-added cargo packs/supports; no duplicate whole-part masses. gross_basis/tare_basis/source describe native vehicle-cargo/noncargo-only scopes separately from EACH/TOTAL. Native payload/gross/tare/distance/factors each unit/basis/method/state/time/source. EACH actual repetition once, TOTAL unchanged. sum(unique load-leg: packedkg×actualkm×that_record_share), THAT-record complete compatible alluser share INSIDE sum, then /positive FINAL N once unless already per-reference. Reconcile empty/return/provider coverage; N0 freight retained. | Actual native packed mass/distance converted compatibly to kg*km | Each actual event/meter interval with traceable originals | Actual receipt-to-FINAL, stock/reporting periods and full asset phases | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage/uncertainty |
| cp_fates | guest_chair_wholesale | environmental_water; other_wastes; contained_liquid_wastes; water_outfalls | actual source/receiver/mixed/free-liquid fates | event_id; source_location; receiving_location; receiving_medium; flow_identity; native_quantity; native_unit; quantity_basis; quantity_source; interval; composition; composition_basis; composition_source; fate_basis; fate_source; mixed_receiver_mass; mixed_mass_unit; mixed_mass_basis; mixed_mass_source; carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; free_liquid_volume; liquid_volume_unit; liquid_volume_source; density; density_unit; density_temperature; temperature_unit; density_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; nonadditive_view; attribution_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; record_method; record_state; record_sample_time; record_source; carrier_method; carrier_state; carrier_sample_time; absorbed_liquid_method; absorbed_liquid_state; absorbed_liquid_sample_time; collected_fragment_method; collected_fragment_state; collected_fragment_sample_time; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | Measure actual source water, received mixed cleanup solid, each independently contained free liquid or direct water outfall. Each carrier/absorbed liquid/collected chair-fabric-foam-finish-metal fragment has own native unit/basis/method/state/time/source, whole-mixture/part/component nonadditive. Actual native identity/volume/composition/receiver/transport-treatment for each free liquid; density-temperature/conversions only compatible evidence. Supplies/chair moisture/component presence do not quantify spent waste, water fates or chemical release. | Actual native mixed mass/free-liquid volume/water withdrawal-outfall unit | Each actual event/meter interval with traceable originals | Actual receipt-to-FINAL, stock/reporting periods and full asset phases | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage/uncertainty |
| cp_releases | guest_chair_wholesale | direct_species | actual species/medium/factor coverage | event_id; species_identity; particle_size; receiving_medium; measurement; measurement_unit; measurement_basis; measurement_source; activity; activity_unit; activity_basis; activity_source; factor; factor_unit; factor_basis; factor_source; factor_coverage; burn_fraction; burn_fraction_source; composition; composition_unit; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; time_interval; period; provider_coverage; nonadditive_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; measurement_method; measurement_state; measurement_sample_time; activity_method; activity_state; activity_sample_time; factor_method; factor_state; factor_reference_time; composition_method; composition_state; composition_sample_time; fate_method; fate_state; fate_time; conversion_method; conversion_state; conversion_time | Identify actual chemical/species/particle/receiving medium from measurement OR compatible actual event activity-factor native unit/basis/method/state/time/source. Steel/chrome/foam/polymer/powdercoat presence or missingmass is not species emission/zero or chromiumVI. Complete species factors already including composition/fate fractions are not multiplied again; only required compatible conversion/fractions once, actual temperature-pressure/units/sources if gas conversion used. | Actual native species quantity compatibly converted to kg | Each actual event/meter interval with traceable originals | Actual receipt-to-FINAL, stock/reporting periods and full asset phases | Actual merchant facility/all consumers and declared providers/receivers | per reference flow | Original quantity/unit/basis/method/state/sampletime/source, calibration/representativeness/coverage/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| actual_resources | all service cards | N=unique actual FINAL B2B acceptance after merchant ownership/resale and reversals. Direct trace OR quantity×compatible target_driver/positive COMPLETE all_consumer_driver retains all clients/periods/idle/cancelled/failed/quarantined/unfinished burdens/native metadata. Assigned total/N once only N>0; N0 preserves period/cohort evidence. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual per-reference physical service inventory |  |
| chair_stock | commodity audit | Compatible native stock: opening+supplier_external_receipts+buyer_returns-closing-business_buyer_dispatch-supplier_returns-useful_other_exits-actual_discard-net_sample_removal=unknown_residual. Receipts exclude buyerreturns/internalmoves, buyerdispatch excludes separately recorded exits, internalmoves cancel. Actual chair-part-pack/assembly-state genealogy governs equivalence; missing glide/pad is not wholechair loss, unknown mass not emission/zero. | cp_chairs | Actual stock and mutually exclusive terminal states |  |
| component_water | component audit | Only actual same-sample water-only w_wet=m_water/m_as_received: m_water=m_as_received*w_wet; m_nonwater=m_as_received*(1-w_wet). If compatible r_dry=m_water/m_nonwater then w_wet=r_dry/(1+r_dry), percent first through native factor. Independent component/finish actual native unit/basis/method/state/sampletime/source; density conversion only matching actual material/state/temperature. LOD other volatiles not water/emission; no universal chair mass/steel fraction/foam thickness. | cp_chairs | Nonadditive native chair/component-state audit |  |
| original_source | commodity interface | Choose sourced direct actual measured/traced assigned_gate_demand with exclusive terminal evidence OR Qsource_actual×Dtarget/Dall_terminal. Dall_terminal>0 equals COMPLETE compatible competing FINALaccepted/usefulother/returns/closingcarry/provenloss records, each quantity/unit/basis/method/state/time/source/link/owner, no accepted-only or direct-driver overlay. Actual source/assigned/baseline/additional native quantity-state metadata and original conversions/exclusive loss owner match full manufacture/assemblyrelease/originalpack chair gate. Identical already-covered baseline stage/loss demand precedes required additional complete outside link once. | cp_chairs; cp_consignment | Separate complete original-gate demand/loss link |  |
| record_freight | freight | After native conversion, actual packedpayload OR same-state vehiclegross minus ONLY vehicle/noncargo tare retains contents/all cargo packs without whole-part duplication. EACH actualcount once/TOTAL unchanged. Assigned kg*km=sum(unique load-leg: packedpayloadkg×actualkm×that_record_share), THAT-record complete compatible alluser share INSIDE sum then /positive FINAL N once unless already normalized. N0 freight retained. | cp_freight; cp_consignment | Actual unique per-reference freight |  |
| specific_species | direct_species | Actual species/particle/medium=measurement OR compatible actualactivity×factor, native unit/basis/method/state/time/source and factor coverage. Complete species factors already covering composition/fate fractions are not multiplied again; only required compatible fraction/gas conversions once with actual temperature-pressure/unit/source. Commodity material/finish presence/scuff/unknownstock is not release/zero or chromiumVI. | cp_releases; cp_energy; cp_chairs | Actual evidenced species per reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity | all roles | Verify actual fourleg steelprimary seat-and-back upholstered glided chair SKU/BOM/finish/inclusions/shipped assembly/pack and each material/provider/source/receiver/species native support before final exchanges. Cached18Oct2026 Count proof is measurement support, not new remote freshness or flow identity. | Actual current configuration/native records and declared verification scope |
| native_complete_scope | all operands | Every component/moisture/finish/source/assigned/baseline/additional/terminal/asset-used-observed-remaining-lifetime/payload-gross-tare-distance-share operand needs compatible native unit/basis/method/state/time/source; sourced conversions/density temperature unit when relevant. Actual unknowns block calculation rather than become zero. | cp_chairs; cp_assets; cp_freight; cp_fates; cp_releases |
| uncertainty | all interfaces | Disclose evidence age/SKU applicability and actual FINAL/reversal/condition/genealogy/source-terminal-baseline/loss/fate/asset-life/provider/receiver uncertainties and sensitivity/update. N0 resources retained. Method does not establish certification/load capacity/health or finished-chain readiness. | Actual coverage/source/lifetime evidence; row-specific Range evidence need |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| facility_water | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_water` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| new_outer_protection | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `new_outer_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| fuel_supply | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| discarded_chairs | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_chairs` under `cp_chairs`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_chairs_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_chairs`; actual source-linked native records |
| other_wastes | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_liquid_wastes | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_liquid_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| water_outfalls | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| direct_species | guest_chair_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Meter actual lighting, handling and facility/business support. No tube forming/welding, foam molding, upholstery, finishing, merchant assembly, load-testing or occupied-chair use is inferred.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual guest-chair wholesale electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively assigned physical quantity / N under cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need real meter intervals and complete all-user/event assignment including idle, failed and unfinished work and provider coverage; no electricity per chair or warranty-year.

#### facility_water

Actual sanitary/facility water is separate from foam/textile moisture and inherited finish. No routine chair washing, wet upholstery cleaning or paint treatment is assumed.

Residual inventory requirement after the independently identified cases `facility_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased warehouse support water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need source/purpose/native supply interval and independent measured fates; purchased water or chair moisture is not wastewater volume.

#### new_outer_protection

Only actual added protection/labels enter service supply. Original bags/cartons/foam supports and supplied chair components belong to the complete supplier gate; reusable transport aids use full-life allocation.

- Identity requirement: Actual service-added dispatch protection and labels
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need added-versus-inherited pack level/SKU/net mass or evidenced native count/area conversion and stock; no fresh complete chair carton per consignment.

#### operating_supplies

Expand actual lubricants, cleaners, wipes, absorbents, filters and office supplies by SKU/purpose. Traded upholstery/foam/steel/finish/glides are commodity components, not new service inputs; no cleaning/refinishing recipe.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual maintenance and conditional cleanup consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual use/incident/net stock/composition and spent carrier/absorbed liquid/captured fragment evidence, not source care examples or assumed upholstery consumption.

#### fuel_supply

Use real owned fuel stock distinct from actual burned, returned and unburned waste quantities; reconcile hired handling/freight coverage. Commodity finish is not fuel.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual handling-fuel supplies
- Flow property / unit: Volume / L
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native opening/net receipts/closing/return/fates, fuel identity and compatible density-temperature/conversion source; supplied fuel does not prove burn.

#### provider_services

Count performed storage/handling/document-visual model/completeness/condition and business support in actual physical results. Supplier assembly/test records do not create merchant assembly, upholstery, load-test or use.

- Identity requirement: Actual physical guest-chair wholesale support results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively assigned physical quantity / N under cp_providers
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need actual result/unit/method/source and material/energy/asset/freight/receiver coverage; new contracted assembly/testing requires route review and sample/fate attribution.

#### shared_assets

Include actual warehouse/racks/handling/meters/ICT/reusable dollies/pallets across all users/periods, manufacture/maintenance/replacement/EOL. Traded chairs and customer seating use are not warehouse capital; a source transport dolly is not automatically supplied.

- Identity requirement: Full-life shared facility and handling assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively assigned physical quantity / N under cp_assets
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need actual used/observed/remaining/lifetime drivers each native unit/basis/method/state/time/source, sourced remaining/termination, uncertainty/sensitivity/update and one asset OR complete provider. Warranty and stacking claim do not establish asset life or utilization.

#### freight

Payload retains actual complete chairs, moisture/finish, included parts and original/added cargo packs/supports. Same-state measured vehicle gross subtracts ONLY vehicle/noncargo tare, not cargo cartons or chair components.

- Identity requirement: Actual packed guest-chair and service freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual exclusively assigned physical quantity / N under cp_freight
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need unique load-leg actual payload/gross/noncargo tare/distance, EACH/TOTAL count and THAT-record share inside sum with native factors/sources; nominal chair mass/stack capacity or shipment count is insufficient.

#### environmental_water

Only actual merchant environmental water abstraction; purchased water and inherited component moisture stay separate.

- Identity requirement: Actual direct source-specific warehouse water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical quantity / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual source/location/interval/native volume/method and abstraction boundary; upholstery moisture does not proxy water withdrawal.

#### usable_supply_returns

Only actual same-scope unused supply SKU/state external returns; consumed-only input OMITs matched return exchange. Internal loops/retained recovery are closing; supplier/customer chair-part returns remain nonexchange stock.

- Identity requirement: Actual matched unused operating-supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual receiver/native transfer/matched input/provenance. Do not offset inherited chair/finish/pack recovery against unrelated current supply or create negative input/automatic credit.

#### discarded_chairs

Actual receiver decisions determine whole chairs retaining foam/textile/frame/finish/glides versus independent broken parts/pack. Whole and component views are nonadditive; a missing glide, torn pad, scuff or unknown mass does not prove whole-chair loss or metal/species release.

- Identity requirement: Actual discarded chairs, separately collected parts or original-pack residues
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_chairs
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chairs`

Range evidence need: Need actual stock/incident/fate/receiver/native mass-count correspondence, included component state and treatment coverage/sourcegate owner; do not turn part loss into whole-chair replacement or default recycling.

#### other_wastes

Actual spent wipes/absorbents/filters/service-added packs and mixed captured fabric/foam/finish/metal debris retain received-mixture scope. Carrier/absorbed liquid/fragments are not extra duplicate streams. No disassembly, grinding or drying recipe.

- Identity requirement: Actual spent supplies and mixed cleanup solids
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need received mixture and each carrier/absorbed liquid/fragment native unit/basis/method/state/time/source, composition/receiver/treatment owner; new material receipts or component presence is not waste quantity.

#### contained_liquid_wastes

Only real separate free liquid or facility wastewater by native identity/state/composition/volume/receiver; separate from wet mixed solids, chair moisture and direct water outfall. No merchant chair-washing process is assumed.

- Identity requirement: Actual contained free liquid waste to receivers
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical quantity / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual collected/received volume and composition/native method-state-time-source with transport/treatment scope for each distinct liquid; purchased water is not liquid waste.

#### water_outfalls

Only real direct water to known environment medium; contained receiver transfers are Waste and chemical species need actual own evidence.

- Identity requirement: Actual direct warehouse water outfall
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical quantity / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual location/medium/interval/native water quantity/composition/fate and conversion; damp upholstery or supply water does not prove discharge.

#### direct_species

Use actual chemical/species/particle/medium measurement or compatible real event method. Inherited powdercoat/chrome/foam/polymer chemistry, scuffing, missing mass or source health claims prove neither actual emission nor zero; chrome presence does not establish chromium(VI).

- Identity requirement: Actual identified species releases to documented media
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need exact species/medium and native measurement or activity-factor unit/basis/method/state/time/source and factor coverage. Complete species factors already including composition/fate fractions are not multiplied again; no fixed generic dust/VOC identity from chair BOM.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| real_FINAL | accepted_service | Require merchant purchase/ownership/resale, named B2B buyer, actual FINAL gate/time/source/resolved reversals, unique FINAL N and all16 qualifiers. Supplier receipt/chairpiece/invoice/usehours insufficient. N0 retains cancelled/failed/quarantined/unfinished period/cohort resources without division. |  |
| actual_configuration | commodity | Verify actual new fourleg primarily steelframe seat AND back upholstery/glides/actual complete BOM/finish/grade/inclusions/shipped assembly-originalpack. No merged brand/options, source gauge/foam/weight/stacking/warranty defaults or hidden merchant assembly/upholstery/refinish/loadtest/use. | ki-strive-current; ki-strive-technical-2020 |
| native_state | commodity quantities | Native chair-part genealogy and independent actual component/moisture/finish quantity-unit-basis-method-state-sampletime-source required. Missing part not wholechair loss, whole chair/component/pack nonadditive. Actual density-temperature/conversion or water-only wet/dry definitions match sample, percent first, LOD other volatiles not water/emission/zero. |  |
| source_once | commodity interface | Check native source/assigned/baseline/additional states/units/bases/methods/times/sources and original conversions, direct actual trace OR positive COMPLETE compatible competing allterminal records inclclosing/returns/usefulother/provenloss eachquantityunitbasismethodstatetimesourcelinkowner. Exclusive lossowner and identicalbaseline stage/loss coverage, complete manufactured assembled released packed gate outside once, no accepted-only/direct-driver overlay. |  |
| resources_once | all resources | Complete all-user/period full assets observed+sourced remaining/termination/native drivers/uncertainty/update and one asset OR provider/N once. Supplies grossS+matchedunusedreturn OR consumed-only OMIT matching outlet; no unrelatednegativeinput/credit. Freight allcontents/cargopacks retained ONLYvehicle/noncargotare, nativegross/tare/EACH-TOTAL/THATrecordshare INSIDEsum beforepositiveFINALNonce. Receiver transport/treatment once and N0 retained. |  |
| actual_fates | guest_chair_wholesale | Real batch-period cleanup/changeover/idle/cancelled/failed/rejected/quarantined/unfinished/dispatch/FINAL events, missingpart/damage/return/pending/sample/discard linked to unique actual receiver/owner. Wholechair/parts/mixedcleanup/freecontainedliquid/directspecies nonadditive. No default recycling, missingmass=release/zero, chromiumcontent=CrVI, complete speciesfactor fractions multiplied again. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/completeness review |
| downstream_use | Separate physical guest-chair wholesale add-on linked once to complete finished manufactured/assembled/released/originalpack suppliergate demand/loss coverage |
| allowed_use | Actual new factoryfinished fourleg primarily steelframe seat AND back upholstered glided guest/meetingchairs ambient ownaccount FINAL B2B consignment with actual native SKU/BOM/finish/shippingassembly/pack-state evidence |
| excluded_use | Standalone chair/occupiedseating/lifetime/loadcapacity/certification claim; casters/gaslift/tabletarm/nesting/tandem/stool/woodframe/bareplastic; manufacture/merchantassembly/upholstery/refinish/repair/loadtest/use, retail/agency/storageonly |
| required_metadata | Merchant purchase/ownership/resale/B2Bbuyer/FINALgate-source/reversals/N, SKU/lot/chair-part genealogy/framegrade-shell-foam-textile-finish-fastener-glide/included arms-vs-separateaccessories/BOM/shippingassembly-originalpack/nativecounts/net-gross-tare/independent componentwater-method-state-time-source, siteperiod/duration, complete sourceassignment/baselinecoverage and resource/provider/asset/freight/receiver owners |
| required_quality_disclosure | Actual identity/support/evidence-age/SKU applicability, FINAL/reversal/completeness/condition/measurement/genealogy/source-terminal-baseline/loss/fate/lifetime/provider uncertainties, actualnative conversions and row-specific evidence gaps |
| update_trigger | Changed actual chair frame/base/upholstery/glide/finish/BOM/inclusions/shippingassembly/pack/state/acceptance or assembly/testing/refinish/use operations, sourceassignment/coverage/provider/asset/freight/receiver/conversions/evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-guest-chair-wholesale | official_guidance | UNSD CPC3 explanatory notes (30June2025),38111 and61083 printed307. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: declared steelprimary chair service narrower61083 via38111, not whole leaf. |
| ki-strive-current | official_guidance | KI Strive Stack Chair current manufacturer product/options page. https://www.ki.com/products/name/strive-stack-chair/ | Qualitative distinct fourleg/upholstered seat-and-back/glide configuration questions; options not oneSKU, no stackcapacity/price/warranty/life/comfort claims as inventory/default. |
| ki-strive-technical-2020 | official_guidance | KI Strive Seating Price List, actual current download technical specifications page8 datedJanuary2020. https://ki.widen.net/content/dll3oqwos7/pdf/Strive-Seating-Price-List.pdf?u=vzbxfu | Aged qualitative example tubularsteel frame/PP/urethanefoam upholsteredseatback/selectedfinish/glides; actual SKU/BOM required, no universal gauge/dimensions/grade/foamthickness/mass/stacking/life/warranty/test/merchantoperation defaults or mixture of optional configurations. |
