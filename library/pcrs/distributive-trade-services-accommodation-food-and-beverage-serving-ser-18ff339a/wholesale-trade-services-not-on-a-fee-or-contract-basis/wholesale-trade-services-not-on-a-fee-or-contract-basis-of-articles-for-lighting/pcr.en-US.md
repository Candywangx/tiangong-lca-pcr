---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-articles-for-lighting
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of boxed integrated-LED ceiling luminaires

## 1. Scope and Applicability

This PCR covers the physical own-account B2B merchant service of new manufacturer-boxed mains integrated-LED ceiling luminaires, unpowered and without battery, from ownership receipt through ordinary ambient stock/completeness/condition management and handling to actual buyer accepted resale. Actual model/SKU, integral LED module/driver configuration, body/diffuser/mounting plate, manufacturer-defined included components/hardware versus optional separately sold installation hardware, whole-fixture/pack quantities, net/tare state and adopted acceptance must be recorded. A missing separately sold item is not automatically an incomplete supplied fixture.

Exclude bare replacement bulbs, battery/emergency/portable and other lighting configurations, fixture/component manufacturing, disassembly/repair, installation/wiring/commissioning, energizing/powered tests/demo, user operation or routine product cleaning, repacking, retail/fee agency and storage-only. In this route performed inspections are unpowered visual/document/completeness checks, not hidden electrical tests or assembly. Any actual changed work needs reviewed scope before modelling; neither inherited boxes nor ordinary ambient storage activates a preservation/packaging production node.

All complete fixture/LED/driver/body/diffuser/hardware/inherited-pack manufacturing including upstream embodied in loss stays outside this add-on. Actual original complete boxed-fixture source-gate assigned demand and identical baseline-stage/loss coverage must be linked separately once before complete-chain use. Actual merchant handling and declared receiver treatment are here once. Manufacturer page/manual context identifies one real integrated mains product and material/pack distinctions only: no numeric power/lumens/life/weight/compliance or consumer installation/care instruction becomes a merchant default or guarantee.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-articles-for-lighting |
| classification_refs | CPC3 61043; narrower integrated-LED ceiling luminaire46533 within lighting group465 |
| covered_products | Actual own-account ambient service for new originally boxed unpowered mains integrated-LED ceiling luminaires without battery |
| excluded_products | Bare bulbs; battery/emergency/portable configurations; manufacturing/repair/energizing/test/demo/installation/user use; retail/agency/storage-only |
| representative_product | Actual manufacturer-defined complete fixture/model/part/pack state through an accepted commercial consignment |
| production_route | Complete manufacturer boxed-fixture gate -> ownership receipt/unpowered ambient stock/handling -> accepted B2B resale |
| market_state | Counted commercial service; fixture pieces, modules/parts, packaging and ratings remain separate merchandise metadata/audit |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account boxed integrated-LED ceiling-luminaire wholesale consignment |
| How much | 1 Item(s) |
| How well | Actual manufacturer-complete integrated-LED ceiling fixture, unpowered/no-battery configuration, quantity/state and commercial acceptance; no automatic installed safety or operating-life guarantee |
| How long or cycle | Real receipt/ambient holding/handling/acceptance interval, with separate stock/reporting and asset phases; no user lighting cycle |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account boxed integrated-LED ceiling-luminaire wholesale consignment |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_gate; model_SKU_lot_ids; integrated_LED_driver_configuration; mains_unpowered_no_battery_evidence; body_diffuser_mountingplate_state; manufacturer_included_component_manifest; included_vs_separate_hardware; whole_fixture_package_component_mapping; actual_native_counts_net_tare_basis; actual_pack_condition_acceptance; actual_start_end_duration_unit; site_campaign_period; original_complete_boxed_gate; assigned_gate_demand_loss_owner |

N>0 counts actual unique final accepted commercial consignments after reversals, not fixtures/packages/modules/lumens/watts/life-hours. Failed/unfinished/rejected periods retain actual resources.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Count | Item(s) | Use unique real merchant commercial acceptance, not fixture-piece counts or packaging lines. Count support does not identify the product. |
| whole_part_pack | merchandise | Actual count; Mass | Actual piece/part/package unit; kg | Map manufacturer whole-fixture identity to actual LED/driver/body/diffuser/mounting hardware and packs. Included parts versus separately sold hardware require actual manifest/contract. Net fixture mass excludes actual box/inserts/tare; listed package mass is not automatically net fixture mass or bare-module mass. |
| unpowered_ratings | commodity metadata | Actual model/state evidence | Actual source-native ratings, not service functional units | Record unpowered/no-battery and actual model lineage from real supplier evidence; product power/lumens/lifetime are not wholesale electricity/illumination quantities. No installation or power verification is assumed. |
| conversion_basis | all actual exchanges | Compatible native property | Actual native unit | Collect gross/net/tare and actual count-to-mass evidence when needed, plus factor/unit/basis/source and density/unit/temperature/source where applicable. Do not assume standard components/pack counts or nominal mass. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplier-complete original-box new mains integrated-LED ceiling fixture, unpowered/no-battery, model/part/included-versus-separate hardware/pack/quantity/condition evidence |
| starting_condition_role | Inherited complete physical commodity for merchant service, not manufacture, energizing or installed lighting output |
| product_classification_scope | Narrower61043 lighting wholesale within46533 sole-LED ceiling fixture; not proof of bare-bulb or all lighting classification |
| recursive_input_rule | Keep traded fixture/parts/inherited packs as non-exchange stock; do not consume or recursively manufacture the same fixture as operating electricity, materials or installation service. |
| upstream_dataset_requirement | Separate complete original boxed-fixture gate with actual LED/module/driver/electrical/body/diffuser/included hardware manufacture, assembly/release and inherited packing; bare bulb/module/driver/metal predecessor alone is incomplete. |
| disclosure | Actual whole-part/pack lineage and included hardware, unpowered/no-battery and condition/quantity/time/gate; assigned original demand/loss with all service/asset/provider/freight/treatment owners and gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commodity_manufacture | whole fixture and parts/packs | All inherited fixture/component/pack production including embodied upstream losses remains outside service. Actual physical handling and declared receiving treatment remain here once. |  |
| manufacturer_state | luminaire_wholesale | Use actual manufacturer model/included-content and unpowered condition evidence. One integrated wired-in example distinguishes complete fixture, material and separately sold hardware; no product rating, pack weight, user cleaning/installation or safety mark becomes a universal operation/quantity/guarantee. | ikea-integrated-ceiling-fixture; ikea-integrated-fixture-manual |
| ambient_only | actual merchant work | Inherited boxes/ordinary ambient stock are not a new packaging/preservation node. No energizing/electrical test/demo/wiring/assembly/commissioning is allowed under provider support; actual changed work requires reviewed scope. |  |
| period_exit | all actual events | Index actual model/lot/package/consignment/campaign/period plus receipt/check/cleaning/idle/failed/unfinished/dispatch/return/final acceptance. Missing included parts, crushed packaging, damaged diffuser/body and real fragments need actual receiver fates; unknown stock is not discarded whole fixture or species. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| luminaire_wholesale | Unpowered boxed ceiling-luminaire merchant service | required | Actual own-account B2B acceptance of complete boxed integrated-LED ceiling fixtures, unpowered/no battery | Physical receipt/completeness/state/stock/handling/handover without installed or illumination service | `accepted_service` |

Commercial consignments overlap warehouse campaigns/continuous support. Link real unpowered visual/document checks, cleaning/changeover/idle/rejected/unfinished resources before assignment to accepted cohorts. No assumption opens every box, dismantles modules or powers tests. Actual missing included driver/mounting plate or damaged diffuser is checked against manufacturer contents; separately sold screws are not an included-part shortage. Real quarantine/return/downgrade/discard has a receiver path, with no assumed repair/dismantling. No-acceptance periods retain resources, explained across periods before a single per-N normalization.

### Process: Unpowered boxed ceiling-luminaire merchant service (`luminaire_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual native quantity assigned through cp_energy and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual warehouse meter intervals and all-user/lot shares with idle/failed work retained; no rated-watts times storage-hours or energy-per-luminaire default.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual native quantity assigned through cp_supplies and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need purpose-specific meter/issue quantity, supplier coverage and actual fates; moisture in packaging or cleaning-water receipts are not a measured wastewater volume.

###### Actual separately recorded polyethylene packaging film (`new_outer_protection_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_supplies and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual inherited/new level, SKU/native count/area/mass and conversion evidence; pallet loops use full-life assets and no fixed packaging weight is copied from a product page.

###### Actual independently recorded synthetic detergent supply (`operating_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_supplies and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need SKU/formulation/concentration and net stock supply/returns plus cleanup carrier/absorbed contents and receiver evidence. Mere presence of electronics, plastics or a chemical hazard label does not establish a purchase or emission.

###### Actual separately identified supplied diesel fuel (`fuel_supply_diesel_supply`)

Only actual independently identified diesel within this operating-fuel requirement. The generic identity is Mass/kg; record actual fuel formulation, supplier, supply gate and native stock scope. When native quantity is litres, final kg conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no catalogue default density or heating value. Supplied stock and burned fuel are separate records. Other fuels remain residual and neither fuel purchase nor unexplained imbalance proves combustion or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Actual native quantity assigned through cp_supplies and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need opening/net receipts/closing/usable return and mutually exclusive burn/waste/loss, with density/temperature/conversion evidence where used; purchased fuel is not assumed consumed in accepted consignments.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account boxed integrated-LED ceiling-luminaire wholesale consignment (`accepted_service`)

One actual accepted B2B merchant-owned consignment of new original-box unpowered mains integrated-LED ceiling luminaires without battery. Actual model/whole-part completeness and condition qualify the physical service; no light output or installed product is produced.

- Selected flow: Completed own-account boxed integrated-LED ceiling-luminaire wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consignment`

Range evidence need: Need SKU/model/module/driver/body/diffuser/mounting-plate and declared included-versus-separate hardware, actual fixture/pack counts/net-tare/state/time/gate; no piece=consignment, rated lumen-hour or universal box quantity.

##### Waste flows

###### Discarded complete boxed integrated LED ceiling luminaire (`discarded_luminaire_packs_atomic_case`)

Conditional on independently recorded actual Discarded complete boxed integrated LED ceiling luminaire. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_luminaire_packs`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete boxed integrated LED ceiling luminaire
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_luminaires and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_luminaires`

Range evidence need: Need actual disposition/recipient/native quantity and net/tare/composition, whole-to-part original-gate equivalent and real treatment coverage; packaging damage or absence of separately sold screws is not proof of whole-fixture discard.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_releases and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual chemical/source/medium and compatible measured quantity or activity/burn/factor/composition/fate with native conversions. Do not import bare-bulb substances or consumer operating emissions into an unpowered integrated fixture.


###### Actual separately evidenced fossil methane emitted to air (`direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_releases and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual chemical/source/medium and compatible measured quantity or activity/burn/factor/composition/fate with native conversions. Do not import bare-bulb substances or consumer operating emissions into an unpowered integrated fixture.


###### Actual separately evidenced nitrous oxide emitted to air (`direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_releases and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual chemical/source/medium and compatible measured quantity or activity/burn/factor/composition/fate with native conversions. Do not import bare-bulb substances or consumer operating emissions into an unpowered integrated fixture.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_shared_use | all service rows | Assign direct event quantities first. Shared warehouse/handling/support needs evidenced compatible physical drivers across ALL users/periods including idle/rejected/unfinished activity, then divide assigned total by positive accepted N once; no automatic equal fixture/invoice/revenue share. |  |
| asset_scope | shared_assets | Use full manufacture/maintenance/actual replacement/end-of-life with actual used/compatible lifetime driver, observed history plus sourced evidenced remainder/termination and uncertainty/sensitivity/update. Choose asset-equivalent or lifecycle-complete provider view once, never both or repeated per-N. |  |
| supply_return | operating supplies | For actual native standalone SKU/state S=assigned opening+net external receipts-closing including retained recovery. Gross-with-outlets uses S/N and real matched usable return; consumed-only uses (S-matched return)/N and OMITs that return exchange. Internal loops remain stock, waste/loss retains upstream production, no unrelated or negative netting. |  |
| original_whole_gate | merchandise | Reconcile actual complete original boxed-fixture source quantities to assigned accepted demand, proven discard/state-change demand, closing and useful returns/other exits in original unit/state with actual whole-part conversions and exclusive allocation. Missing/damaged one component is not automatically one whole-fixture loss. Additional linked demand=actual required original-gate demand minus identical baseline covered demand/loss, matching stages/state once outside service; assemble missing fixture manufacture/assembly/boxing beyond bare modules/materials outside. No rated lumen/watt/lifetime or nominal pack mass multiplier. |  |
| receiver_nonoverlap | all outlets | Whole discarded fixture/pack, LED/driver/body/diffuser/pack component audits, cleanup carrier+absorbed contents and free liquid are non-additive measured receiver views. Treatment has one owner; useful commodity returns remain stock audit and no automatic avoided-manufacture/recycling credit applies. Unknown source/receiver scope blocks complete-chain readiness. |  |
| commodity_link_scope | nonexchange commodity interface | Keep actual original-gate stock and completed external integration at their recorded raw quantities. Declare source_assignment_scope_id, actual target_consignment_ids/target_cohort_id and source_assignment_quantity_basis: single_consignment_case, target_cohort_total or already_per_reference. For a raw target-cohort total, source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N ONLY when the positive N covers exactly that assigned target scope, with actual native units/state/source and acceptance-reversal evidence; use that interface once when combining with 1 accepted_service. A single-consignment case with N=1 and an already-per-reference quantity are not divided again. Do not divide actual external stock/stage-integration records by service N or use whole-source-cohort N for a narrower assigned target; preserve raw quantities and an explicit once-only link. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | luminaire_wholesale | accepted_service | Actual unpowered fixture commercial acceptance | site_id; campaign_id; period_id; consignment_id; supplier_id; contract_id; ownership_start; resale_risk; business_buyer; model; SKU; lot_ids; integrated_LED_configuration; driver_configuration; mains_supply_evidence; no_battery_evidence; unpowered_state_record; manufacturer_release; original_boxed_gate; included_component_manifest; separate_hardware_manifest; actual_whole_fixture_quantity; fixture_unit; actual_package_quantity; package_unit; package_fixture_mapping; adopted_condition_acceptance; actual_start; actual_end; time_zone; duration; duration_unit; acceptance_record; reversal_id; N | Verify actual merchant ownership/resale and final buyer gate with model-defined complete included contents and unpowered/no-battery state; do not turn separate installation hardware or operating ratings into a service supply. | Item(s) | Each acceptance/reversal | Actual linked service/stock/reporting and asset periods | Actual merchant and buyer gate | per reference flow | Actual native records, scope/calibration/state evidence and uncertainty |
| cp_luminaires | luminaire_wholesale | merchandise; discarded_luminaire_packs | Whole fixture/part/pack and original-gate inventory | site_id; campaign_id; period_id; consignment_id; lot_id; event_id; event_time; time_zone; model; SKU; serial_or_batch_id; complete_fixture_id; LED_module_id; driver_id; body_id; diffuser_id; mounting_plate_id; actual_material_composition; composition_unit; composition_basis; composition_source; manufacturer_BOM_source; included_parts_hardware; separately_sold_hardware; supplied_component_counts; component_units; component_package_mapping; missing_included_item; unpowered_state; no_battery_evidence; fixture_count; fixture_unit; package_count; package_unit; gross_pack_mass; net_fixture_mass; fixture_mass_unit; inherited_pack_tare; other_tare; tare_unit; mass_conversion_factor; conversion_unit; conversion_basis; conversion_source; count_to_mass_factor; count_factor_unit; count_factor_basis; count_factor_source; actual_measurement_method; calibration; sample_selection; sample_time; sample_quantity; sample_unit; sample_representativeness; temperature; temperature_unit; relative_humidity; humidity_unit; moisture_if_measured; moisture_unit; moisture_component_basis; moisture_wet_dry_basis; moisture_method; moisture_source; condition_state; damage_record; opening; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; closing; supplier_returns; useful_other_exits; actual_discard; discard_unit; discard_composition; discard_receiver; discard_treatment_scope; collected_fragment_quantity; fragment_unit; state_change; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_dataset; original_gate_conversion_method; original_gate_conversion_factor; original_conversion_unit; original_conversion_basis; original_conversion_source; whole_part_method; whole_part_factor; whole_part_unit; whole_part_basis; whole_part_source; exclusive_exit_allocation; source_stage_coverage; missing_upstream_stage; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_state; assigned_gate_demand_source; baseline_same_loss_coverage; baseline_covered_demand; baseline_demand_unit; baseline_demand_state; baseline_demand_source; assignment_driver; assignment_driver_unit; all_exit_driver; all_exit_driver_unit; allocation_method; allocation_source; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_state; additional_gate_demand_source; commodity_owner; adjustment_status; uncertainty; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Track actual manufacturer whole-part/included-versus-separate BOM and unpowered state, net/tare measurements and every stock/return/receiver exit. Assigned/additional demand units/state must match actual original-gate basis after evidenced conversions with dedicated sources and exclusive whole-part allocations; preserve unknowns rather than assuming missing parts imply whole loss or emissions. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual fixture/part/package units and kg/state | Each stock/movement/condition event | Actual linked service/stock/reporting and asset periods | Actual manufacturer model/lot and complete original boxed gate | per reference flow | Actual native records, scope/calibration/state evidence and uncertainty |
| cp_energy | luminaire_wholesale | electricity; fuel_supply | Real warehouse meter and burn records | site_id; period_id; consignment_id; event_id; asset_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; carrier; reading_start; reading_end; reading_unit; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; idle_failed_cleaning_scope; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; nonburned_loss; closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual warehouse/service energy separately from unpowered merchandise; burn reconstruction requires complete disjoint native fates with unexplained loss investigated, not fuel-purchase equivalence. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual energy/fuel unit | Each actual interval/event | Actual linked service/stock/reporting and asset periods | All included warehouse/support consumers | per reference flow | Actual native records, scope/calibration/state evidence and uncertainty |
| cp_supplies | luminaire_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | Actual native stock, cleanup and matching return supply | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening; receipt_gross; receipt_tare; receipt_net; closing; retained_recovery; usable_external_return; return_recipient; matched_input_id; original_supply_owner; gross_consumed_view; omit_matched_return_exchange; actual_waste; actual_loss; inherited_new_pack_level; dry_cleanup_carrier_quantity; carrier_unit; actual_cleanup_event; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; actual_purpose; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect actual same-state net receipts/stock and real supply fates, identifying new outer/service support versus inherited fixtures/parts/packs. Same-scope return netting requires original provenance and omitted matched outlet; no mandatory product cleaning or installer hardware. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | Actual native SKU unit | Each receipt/issue/return/stocktake | Actual linked service/stock/reporting and asset periods | Actual standalone service supply | per reference flow | Actual native records, scope/calibration/state evidence and uncertainty |
| cp_assets | luminaire_wholesale | shared_assets | Complete-lifecycle all-user asset ledger | site_id; period_id; consignment_id; asset_id; consumer_id; phase_id; event_date; manufacture_dataset; maintenance; replacement; end_of_life; driver_used; driver_used_unit; lifetime_driver; lifetime_driver_unit; observed_history; evidenced_remaining; remainder_source; termination; attribution_view; uncertainty; sensitivity; update_trigger | Enumerate all real asset consumers/periods and complete life stages, compatible used/lifetime drivers and sourced evidenced remaining service. Keep one asset-equivalent or complete provider view. | Item(s) or actual lifecycle-native unit | Each asset event/period review | Actual linked service/stock/reporting and asset periods | All real consumers and complete asset life | per reference flow | Actual native records, scope/calibration/state evidence and uncertainty |
| cp_providers | luminaire_wholesale | provider_services | Actual unpowered physical result and scope | site_id; period_id; consignment_id; provider_id; service_id; event_date; completed_unpowered_result; physical_quantity; native_unit; duration; duration_unit; visual_document_completeness_scope; completion_evidence; material_coverage; energy_coverage; chemical_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_release_coverage; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; missing_coverage; changed_powered_or_installation_scope | Verify actual unpowered handling/visual/document/completeness result and native physical unit, reconciling all direct/provider responsibilities. Any energizing/testing/install/commission work is a scope change, not ordinary support. | Actual provider-native physical unit | Each actual result | Actual linked service/stock/reporting and asset periods | Actual external service responsibility | per reference flow | Actual native records, scope/calibration/state evidence and uncertainty |
| cp_freight | luminaire_wholesale | freight | Actual complete-boxed cargo and journey ledger | site_id; period_id; consignment_id; leg_id; event_date; mode; provider_id; actual_cargo; cargo_unit; fixture_component_mass; inherited_pack_mass; added_outer_pack_mass; other_included_tare; tare_scope; load_conversion_factor; load_factor_unit; load_factor_basis; load_factor_source; distance; distance_unit; distance_conversion_factor; distance_factor_unit; distance_factor_basis; distance_factor_source; empty_return_scope; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; provider_native_unit; supplier_delivered_coverage; duplicate_leg_check | Use actual transported whole fixture/part/pack/tare and real distance/native conversions; retain compatible non-overlap shares and actual provider/delivered/empty/return scope once. | kg*km or actual freight-native unit | Each actual included leg | Actual linked service/stock/reporting and asset periods | Actual merchandise/service/waste journey scope | per reference flow | Actual native records, scope/calibration/state evidence and uncertainty |
| cp_fates | luminaire_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | Actual source/receiver and mixed-cleanup records | site_id; period_id; consignment_id; event_id; event_time; time_zone; material_source; source_location; native_quantity; native_unit; dry_carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; moisture_component_basis; composition; concentration; concentration_unit; composition_basis; composition_source; mixed_wet_mass; dry_mass; mass_unit; collected_free_volume; received_volume; volume_unit; density; density_unit; density_source; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; purchased_direct_water; receiver; receiving_medium; treatment_dataset; treatment_coverage; direct_outfall; overlapping_component_view; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; uncertainty | Measure actual native source/received mixed solids and separate free liquids with component unit/basis/source, composition and treatment owner. Whole-pack/component/carrier-plus-absorbed/liquid/outfall roles are non-additive; dampness/incident alone gives none of their quantities. | Actual native mass/volume/composition units | Each actual source/cleanup/receiver/outfall event | Actual linked service/stock/reporting and asset periods | Actual source and receiving service scope | per reference flow | Actual native records, scope/calibration/state evidence and uncertainty |
| cp_releases | luminaire_wholesale | direct_species | Actual source/species/medium measurement and method | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; source_role; actual_component_identity; actual_species; receiving_medium; particle_size_basis; measured_quantity; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; release_fraction; fate_basis; fate_source; gas_volume; volume_unit; pressure; pressure_unit; temperature; temperature_unit; molecular_conversion; conversion_unit; conversion_source; method; method_version; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Require actual source/species/medium evidence and compatible measurement or activity/factor with complete native operands. No product rating/material presence/damage/stock deficit is a release method; complete factors are not multiplied again by composition/fate. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg actual species with native operands | Each actual measured/modeled interval | Actual linked service/stock/reporting and asset periods | Actual source and receiving medium | per reference flow | Actual native records, scope/calibration/state evidence and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all service rows | Assign actual direct and compatible all-user shares, retaining failed/rejected/unfinished/idle activity; divide assigned actual cohort total by positive accepted N only once. | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | Actual per-reference inventory |  |
| whole_part_stock | merchandise | Reconcile actual same-state fixture/part/package stocks separately: opening+external receipts+buyer returns-closing-physical dispatch-supplier returns-useful other exits-actual discard=unexplained residual. Pair internal movements and map included parts to complete fixture, keeping separately sold items outside that completeness definition. Independently reconcile actual net/gross/tare/state with uncertainty; missing one part or pack damage cannot identify whole-fixture loss or emissions. | cp_luminaires | Audited actual whole-part/pack state and fates |  |
| source_assignment | merchandise interface | Map actual complete original boxed-fixture gate quantities to accepted-demand and exclusive proven discard/state-change, closing/useful return/other-exit shares in original units/state. Any whole-part conversion and assignment/baseline/additional demand unit/state/source require actual evidenced compatibility and exclusive drivers. Additional linked demand accounts for identical existing stage/loss coverage once outside service; missing fixture assembly/boxing beyond module/material predecessors assembled outside. | cp_luminaires; cp_consignment | Explicit separately linked complete original-gate demand |  |
| transport_quantity | freight | Actual kg*km=actual included fixture/components/packing/tare cargo converted to kg×real distance converted to km with source factors/bases and non-overlap provider/shared scope once. Other native freight units retain exact supporting service. | cp_freight | Actual native freight per reference |  |
| release_evidence | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | Use actual species/medium measurement or compatible actual activity/burn and source-specific factor with required composition/fate/concentration/gas pressure/temperature conversions once. A complete factor is not multiplied again. An unpowered fixture label, broken part or unknown mass deficit provides no species amount. | cp_releases; cp_energy; cp_luminaires | Actual evidenced species per reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_completeness | all actual rows | Require real model/BOM/whole-part/material/service/species/receiver identity and native support before final exchanges; Count/lumen/fixture-piece identity is not counted commercial service identity. | Actual supplier manifests, detailed identity and support records |
| unpowered_boundary | luminaire_wholesale | Verify unpowered mains/no-battery route and actual manufacturer included-versus-separate content; no powered-test/install/user-cleaning or ratings multiplied into wholesale resources. | cp_consignment; cp_providers; actual model evidence |
| source_lifetime_fates | all responsibilities | Keep complete original boxed gate and actual unit/state/source demand/baseline loss outside, all users/full asset life/periods and receiver/provider/freight/treatment once. Mixed cleanup whole/part/solid/liquid evidence and unknowns remain explicit. | Coverage matrix, measurements and independent range data |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_energy`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_energy`; actual source-linked native records |
| facility_water | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_water` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| new_outer_protection | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `new_outer_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| operating_supplies | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `operating_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| fuel_supply | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fuel_supply` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_services | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| environmental_water | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `environmental_water` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| usable_supply_returns | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| discarded_luminaire_packs | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_luminaire_packs` under `cp_luminaires`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_luminaire_packs_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_luminaires`; actual source-linked native records |
| other_wastes | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_wastes` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_wastewater | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| water_outfalls | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `water_outfalls` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| direct_species | luminaire_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Meter actual lighting, electric lifts/handling and business support. The luminaires stay unpowered; nameplate power, luminous output or downstream lighting life is not a wholesale electricity input.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse and handling electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual native quantity assigned through cp_energy and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Need actual warehouse meter intervals and all-user/lot shares with idle/failed work retained; no rated-watts times storage-hours or energy-per-luminaire default.

#### facility_water

Use only actual facility cleaning/support water; no routine washing or damp-cloth cleaning of every boxed fixture is inferred from user care instructions.

Residual inventory requirement after the independently identified cases `facility_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased warehouse sanitation water
- Flow property / unit: Volume / m3
- Amount rule: Actual native quantity assigned through cp_supplies and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need purpose-specific meter/issue quantity, supplier coverage and actual fates; moisture in packaging or cleaning-water receipts are not a measured wastewater volume.

#### new_outer_protection

Record real service-added outer carton, film, straps or labels. Original luminaire boxes/inserts and product hardware belong to inherited merchandise; a separately sold installation screw is not automatically supplied by the merchant service.

Residual inventory requirement after the independently identified cases `new_outer_protection_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual added shipping protection and consignment labels
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_supplies and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual inherited/new level, SKU/native count/area/mass and conversion evidence; pallet loops use full-life assets and no fixed packaging weight is copied from a product page.

#### operating_supplies

Expand actual cleaners, lubricants, wipes, absorbents, filters and record consumables in native state. Replacement LED modules/drivers, installed wiring/fasteners and user product cleaning are not normal service inputs in this unpowered route.

Residual inventory requirement after the independently identified cases `operating_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse maintenance and cleanup supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_supplies and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need SKU/formulation/concentration and net stock supply/returns plus cleanup carrier/absorbed contents and receiver evidence. Mere presence of electronics, plastics or a chemical hazard label does not establish a purchase or emission.

#### fuel_supply

Keep actual grade/native fuel stock and real burn/nonburned fates; a complete contracted carrier or forklift package can already own this burden.

Residual inventory requirement after the independently identified cases `fuel_supply_diesel_supply`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual owned material-handling fuel supply
- Flow property / unit: Volume / L
- Amount rule: Actual native quantity assigned through cp_supplies and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need opening/net receipts/closing/usable return and mutually exclusive burn/waste/loss, with density/temperature/conversion evidence where used; purchased fuel is not assumed consumed in accepted consignments.

#### provider_services

Expand only performed storage/handling/unpowered visual or document/completeness inspection/hygiene/maintenance and business support. Manufacturer test certificates are inherited evidence; no powering, electrical test, demo, commissioning or installation is hidden here.

- Identity requirement: Actual unpowered handling and completeness-support service
- Flow property / unit: Count / Item(s)
- Amount rule: Actual native quantity assigned through cp_providers and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Need actual completed result/native unit and materials/energy/assets/freight/treatment coverage; public operating ratings or a certificate do not prove a performed wholesale test.

#### shared_assets

Include actual building, racks, lifts, measurement/ICT equipment and reusable handling/transport assets over all consumers and periods through complete lifecycle scope.

- Identity requirement: Lifecycle-attributed warehouse, handling and reusable assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual native quantity assigned through cp_assets and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need manufacture/maintenance/replacement/end-of-life, compatible used/lifetime driver units, observed history plus sourced remainder/termination, uncertainty/sensitivity/update; the goods advertised LED life does not describe warehouse asset life.

#### freight

Use actual transported complete fixture, included components, original and outer packing/tare scope for real legs. Do not replace cargo mass with bare LED module weight or luminaires counted as services.

- Identity requirement: Actual boxed-luminaire cargo and service freight
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Actual native quantity assigned through cp_freight and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need actual load/part/pack/tare scope, distance and compatible conversion/share sources with delivered-supplier, shared and empty/return coverage once; no fixed piece weight from packaging listings.

#### environmental_water

Record only real source/location extraction for service operations, separate from purchased facility water and any moisture incident in inherited packs.

- Identity requirement: Actual direct source-water withdrawal
- Flow property / unit: Volume / m3
- Amount rule: Actual native quantity assigned through cp_fates and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need source meter/purpose/interval and physical withdrawal boundary; damaged cartons do not imply water abstraction or a litre-per-fixture factor.

#### usable_supply_returns

Only an actual same-scope standalone SKU/state return matches operating supply; consumed-only input OMITs its matching outlet. Internal recovery/retained reusable items remain closing stock, while useful commodity fixture/part returns remain merchandise audit.

- Identity requirement: Actual matched unused service-supply external return
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_supplies and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need real recipient/native transfer and matched original input/state ownership; no unrelated or negative netting, closing-stock return or automatic avoided-production credit.

#### discarded_luminaire_packs

Use actual receiver quantities and state for discarded whole fixtures, missing/damaged parts, fragments or original mixed packs; the LED/driver/metal/plastic/box component audit does not create duplicate waste or manufacturing inputs. No dismantling or recovery treatment is assumed.

- Identity requirement: Actual discarded luminaires, parts and original packs
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_luminaires and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_luminaires`

Range evidence need: Need actual disposition/recipient/native quantity and net/tare/composition, whole-to-part original-gate equivalent and real treatment coverage; packaging damage or absence of separately sold screws is not proof of whole-fixture discard.

#### other_wastes

Record actual spent wipes/absorbents/filters, maintenance fractions and added protection by native received state. Mixed cleanup carrier plus captured liquid/fragments/chemical is one compatible receiver view, not extra counted whole-product or liquid waste.

- Identity requirement: Actual operating waste and mixed cleanup solids
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_fates and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual received mixed mass, dry carrier/absorbed liquid/fragment units/basis/sources, composition and receiver treatment; broken-part residue alone does not quantify spent solids or justify recycling credit.

#### contained_wastewater

Record actual free liquid sent to treatment from performed facility work, separate from absorbed cleanup solids or internal moisture in packaging. No fixture washing, immersion or downstream user cleaning is assumed.

- Identity requirement: Actual contained facility-cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual native quantity assigned through cp_fates and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need collected/received volume, composition/basis, event/source and treatment owner; incoming cleaning water or wet-wipe mass is not this volume and no direct outfall is duplicated.

#### water_outfalls

Only actual water reaching a direct environmental outfall is recorded here, with real medium/quality. Contained transfer to treatment and absorbed cleanup remain their separate receiver roles.

- Identity requirement: Actual direct environmental service-water outfall
- Flow property / unit: Volume / m3
- Amount rule: Actual native quantity assigned through cp_fates and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Need actual location/interval native volume and composition/medium evidence; a damp box, incident report or sewer collection invoice does not establish direct discharge.

#### direct_species

Expand only measured or method-supported source/species/particle-size/medium for real combustion, maintenance, cleanup or commodity incidents. An LED label, driver/material presence, dampness, broken diffuser or stock shortage does not by itself establish mercury, VOC, dust or other emissions.

Residual inventory requirement after the independently identified cases `direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual evidenced operating or incident release species
- Flow property / unit: Mass / kg
- Amount rule: Actual native quantity assigned through cp_releases and compatible documented conversions, per reference consignment.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Need actual chemical/source/medium and compatible measured quantity or activity/burn/factor/composition/fate with native conversions. Do not import bare-bulb substances or consumer operating emissions into an unpowered integrated fixture.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| accepted_commercial | accepted_service | Verify actual unique own-account final B2B accepted consignment N>0 with full physical qualifiers, not fixture-piece/package/lumen/watt identity. |  |
| complete_model | merchandise | Require actual whole-fixture/component/pack mapping and included-versus-separate hardware manifest, real net/tare/native counts/condition; do not assume a bare lamp/module is complete46533 fixture. | ikea-integrated-ceiling-fixture; ikea-integrated-fixture-manual |
| unpowered_scope | luminaire_wholesale | Check no battery and unpowered ambient physical service, with no energizing/electrical testing/demo/install/commission/user cleaning hidden in providers. Any changed operation requires scope review. |  |
| source_gate_loss | merchandise interface | Reconcile actual complete original-boxed source stages, original-unit-state whole-part conversion, exclusive assigned/closing/useful exits and identical baseline stage/loss coverage once outside service; unknown stock cannot be default zero/loss. |  |
| all_users_life | all resources | Require all event/period/consumer links and manufacture/maintenance/replacement/EOL with compatible used/lifetime units, observed+sourced remaining and one per-N/provider/asset view; incomplete/failed work retains burden. |  |
| outlet_stock_views | all actual inventory | Verify native supply/fate/receiver/conversion sources, matched-return omission for consumed-only, non-additive whole fixture/components/mixed cleanup/free liquid/direct species and one treatment owner, with no automatic credits. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity/completeness review |
| downstream_use | Unpowered integrated-LED ceiling-fixture merchant service add-on linked separately to complete original boxed product and assigned demand/loss coverage |
| allowed_use | Actual new original-box mains integrated-LED ceiling luminaire, no battery/unpowered, matching model/included-content/pack/state and B2B acceptance |
| excluded_use | Standalone fixture footprint or bare bulb; illumination/use-hour functional unit; powered tests/demo/install/user use; battery/emergency/portable lighting; retail/agency/storage-only |
| required_metadata | Actual SKU/model/lot/whole-part and included-versus-separate hardware manifests, mains/unpowered/no-battery evidence, fixture/package/count/net-tare/condition/time/gate, site/period and original assigned demand/loss/service/asset/provider/freight/treatment owners |
| required_quality_disclosure | Flow/support/BOM/condition/quantity uncertainty and unknown stock/source demand/receiver coverage, all-user asset remainder assumptions, native conversion proof and independent range gaps |
| update_trigger | Changed model/module/driver/component/included hardware/presentation, battery or powered work/install scope, supplier gate/loss coverage, stock/fate/provider/asset/freight/treatment or measurement method |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-lighting-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025), printed pages252–253/303,46533 and61043/group465. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only: sole-LED integrated ceiling fixture within a narrower lighting wholesale service; no bare-bulb assumption. |
| ikea-integrated-ceiling-fixture | official_guidance | IKEA, KABOMBA integrated-LED ceiling lamp604.898.13, current public manufacturer product body/materials/packaging. https://www.ikea.com/us/en/p/kabomba-led-ceiling-lamp-matte-black-60489813/ | Qualitative complete integrated mains fixture, metal/plastic/diffuser and included-versus-separately-sold hardware/pack questions only; no ratings/weights/life/compliance/user-care/installation defaults. |
| ikea-integrated-fixture-manual | official_guidance | IKEA, KABOMBA AA-2260612-7, official manufacturer instructions, integrated non-changeable LED statement. https://www.ikea.com/us/en/assembly_instructions/kabomba-led-ceiling-lamp-matte-black__AA-2260612-7-2.pdf | Confirms actual example integrated LED identity; installation/power/compliance instructions remain downstream model context, not wholesale work or a test requirement. |
