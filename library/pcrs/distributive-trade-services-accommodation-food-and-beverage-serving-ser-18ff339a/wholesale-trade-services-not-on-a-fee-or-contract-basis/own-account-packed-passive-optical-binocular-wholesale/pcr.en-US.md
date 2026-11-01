---
pcr_id: pcr.own-account-packed-passive-optical-binocular-wholesale
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of manufacturer-packed passive optical binoculars

## 1. Scope and Applicability

Applies to actual own-account B2B merchant service for manufacturer-packed passive, non-electronic optical binoculars. Keep actual model, serial/lot, magnification/objective, supplied kit/accessory and package state. Ordinary receipt checks, ambient holding and electric handling lead to actual buyer acceptance; no mandatory opening or optical performance testing.

A manufacturer example establishes that glass/coatings/body, caps/strap and optional accessories can have distinct roles; actual sealed nitrogen is inherited merchandise, not a warehouse gas purchase or purge. Model-specific resin condition can matter to actual acceptance, without making repair or a release automatic (`nikon_model`; `nikon_condition`). Numerical manufacturer specifications are not defaults for this methodology.

All merchandise upstream including actual embodied lost goods stays outside this service. Original finished manufacturer-packed gate demand and exclusive loss coverage must be quantified in a linked commodity system before complete-chain use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-packed-passive-optical-binocular-wholesale |
| classification_refs | CPC 3.0: 61052 (narrower); goods 48314 within 483 |
| covered_products | Own-account ambient B2B wholesale service for manufacturer-packed passive non-electronic optical binocular kits. |
| excluded_products | Cameras; laser-ranging/electronically stabilized/digital binoculars; telescopes/microscopes; optical manufacturing/coating/assembly; activation/demo; repair/alignment; purge/recovery; installation; fee agency, retail or standalone storage. |
| representative_product | A declared actual finished binocular model and supplied kit configuration, not a universal Nikon specification. |
| production_route | Manufacturer complete finished-kit release, merchant receipt/condition and stock checks, ambient hold/electric handling, actual business-buyer acceptance. |
| market_state | Completed commercial service; merchandise remains a separately audited purchased/resold stock, not a consumed service input. |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Commercial wholesale receipt, ordinary ambient holding/handling and accepted handover for an actual declared passive binocular kit consignment. |
| How much | 1 completed accepted commercial consignment; declare actual kit/pair counts and net/packaged mass independently. |
| How well | Actual manufacturer release/pack records, model/serial/configuration, packaging and observed condition plus actual buyer acceptance criteria. No mandatory opening, powered demonstration, alignment test or universal waterproof qualification. |
| How long or cycle | Actual supplier release, receipt, holding, dispatch and final acceptance timestamps/time zone/duration/native units; unfinished or rejected attempts retain resources across periods. |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account wholesale consignment of manufacturer-packed passive optical binoculars |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; source_release_gate; manufacturer; model; serial_or_lot_ids; passive_non_electronic_configuration; magnification; objective_diameter; optical_body_state; actual_accessory_scope; kit_count; net_kit_mass_basis; inherited_pack_tare; inherited_sealed_content_state; warehouse_site; receipt_dispatch_acceptance_times; buyer_acceptance; reporting_period |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N counts unique actual accepted commercial consignment IDs at the declared final gate once. It does not count binocular pairs, pieces, lenses, cartons or currency. |
| configuration_mass | merchandise audit | Mass; Count; Length | kg; Item(s); native declared length | Keep body mass, complete actual kit mass, separately included caps/strap/case and inherited pack tare distinct. Published weight requires actual same-model configuration/method equivalence; do not infer all accessory mass by an unspecified weight difference. Actual magnification and objective diameter include native units/source without universal numeric defaults. |
| content_and_state | conditional inherited content audit | Mass; native composition | kg; recorded native units | Factory-sealed gas/content is inherited merchandise. If quantifying content, retain native quantity/unit/state/composition/source and independently evidenced fate; do not infer charge, leak, purge or recovery from waterproof/fog claims. Unknown remains unknown, not zero. |
| physical_conversion | all material/utility/outlet amounts | Actual required property | native and target units | Retain source quantity/unit, method/state/time; piece-to-mass needs actual per-piece mass/configuration source; volume-to-mass needs density/unit/temperature-unit/source. Component quantity and moisture/fluid basis never inherit whole-stream unit by assumption. |
| factor_release | direct_species | Mass | kg | Identify species/particle and medium before binding. Document measurement or activity/factor units/source, composition and release fraction only when factor boundary requires them; no SDS composition or stock deficit equals released mass. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual fully manufactured/coated/assembled/finished and manufacturer-packed passive binocular kit released by supplier, with included accessories and sealed content if actually present. |
| starting_condition_role | supplier_release_gate for this service add-on; no optical fabrication or purge embodied in merchant physical operations. |
| product_classification_scope | CPC 3.0 61052 narrower optical binocular own-account merchant service; goods48314 is context, not the service reference. |
| recursive_input_rule | Same-category purchased/resold merchandise is nonexchange stock here. Trace original source gate and exclusive assigned quantity outside the service rather than recursively feeding a wholesale service as the whole binocular. |
| upstream_dataset_requirement | Linked commodity system must cover all actual material/glass/body production, optical forming/coating/assembly, accessories, final manufacture/sealed contents and inherited packing through actual supplier release. Raw glass/resin or unfinished optical dataset alone is inadequate; add missing real stages exactly once outside service. |
| disclosure | Declare actual original release gate/state/unit/source, assigned original demand/all-exit allocation, genuine loss adjustment owner/coverage and excluded stages. Service alone cannot claim complete product-chain coverage. |

### Boundary Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| service_operations | Include actual merchant warehouse/electric handling/condition checks, real warehouse hygiene, actual added external transit protection, allocated infrastructure, assigned transport and actual waste handling/treatment. Ordinary inherited packing/sealing is no operated preservation process. |  |
| no_product_transformation | No merchant lens/body washing, optical alignment/repair/coating/assembly, product opening/repack, nitrogen supply/purge/recovery, powered demonstration or electronic operating use is assumed. Any actual such operation requires reviewed route extension; outsourcing does not remove it. |  |
| commodity_outside_once | All traded kit manufacture/inherited pack/content upstream including embodied discarded merchandise stays outside service, with mandatory quantified linked original-gate assigned demand and exclusive loss adjustment once before complete-chain use. Actual service disposal/treatment remains here once. Unknown loss is a blocker, not default zero. |  |
| retained_content | Actual whole-device or part waste retains included sealed contents in its whole stream. Content audit, separately transferred material and direct species release are exclusive; no independent gas transfer/purge/recovery is introduced by this route. Unknown charge or changed condition is not a released quantity. | nikon_model |
| qualitative_condition | Model-specific resin stickiness observation may inform actual acceptance/reject state. Manufacturer repair advice and model performance claims do not create merchant repair, chemical release, universal threshold, life or required dose. | nikon_condition |


## 6. Process Inventory Structure

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ambient_wholesale | Ambient packed binocular wholesale | required | Actual own-account specified passive binocular consignment | final_service | accepted_service |


### Process: Ambient packed binocular wholesale (`ambient_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: metered_interval_quantity*service_driver_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Metered intervals and all-user handling/space-time drivers, supplier and delivered-energy property support are required before setting an electricity-per-consignment guardrail.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: actual_water_quantity*service_driver_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual water meter/native volume or evidenced density conversion, cleaning interval and all-user share are needed; no per-kit cleaning-water benchmark is assumed.

###### Actual independently recorded synthetic detergent supply (`hygiene_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: selected_supply_input/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual SKU/formulation, unused supply stock and whole wipe/absorbent quantity with composition and native conversions are needed for each used material.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account wholesale consignment of manufacturer-packed passive optical binoculars (`accepted_service`)

One actually completed commercial wholesale service at business-buyer acceptance, identified by source-gate and kit/configuration/condition/period qualifiers. A binocular pair, retail set, objective lens or kilogram is merchandise and does not define this service count.

- Selected flow: Completed own-account wholesale consignment of manufacturer-packed passive optical binoculars
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_binocular`

Range evidence need: Actual accepted consignment, actual number/configuration of kits and native net/tare measurement basis must qualify this count; no fixed kits, kilograms or financial margin per consignment is set.

##### Waste flows

###### Discarded complete passive optical binocular kit (`whole_goods_waste_atomic_case`)

Conditional on independently recorded actual Discarded complete passive optical binocular kit. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `whole_goods_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete passive optical binocular kit
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual whole-device/kit boundary, mass basis, included pack/accessories/retained content and receiver classification/treatment coverage are needed; no rejection or unknown condition is assumed to be waste.

###### Actual separately collected paper packaging waste (`packaging_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Separate packing identity, net mass, contamination/retained fragments or fluid and transfer receiver are required; factory packing mass is not another new packing purchase on resale.


###### Actual separately collected metal packaging waste (`packaging_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Separate packing identity, net mass, contamination/retained fragments or fluid and transfer receiver are required; factory packing mass is not another new packing purchase on resale.


###### Actual separately collected plastic packaging waste (`packaging_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Separate packing identity, net mass, contamination/retained fragments or fluid and transfer receiver are required; factory packing mass is not another new packing purchase on resale.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| stock_and_attempts | Reconcile opening/receipts/closing, actual useful commercial returns, other useful exits, retained rejects and actual discard by serial/lot/configuration and period. Internal movements and recovered closing stock are not outward transfers. N includes final accepted commercial service only; open/rejected attempts retain real resource links and carried attribution. |  |
| source_quantity_attribution | Original commodity demand uses evidenced direct source-to-target assignment OR a complete compatible source cohort: assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers. Native all-exit driver records include useful other exits, returns, closing and actual loss with compatible original-kit equivalence/state and documented conversions. Never allocate a whole source cohort only over accepted target services or infer original kits from fragments. |  |
| original_gate_demand | Preserve actual raw original-gate demand and loss/stage integration at its physical assignment scope. Record assignment_scope_ids, quantity_basis=raw_target_cohort or per_reference, same_target_scope_N and source. Directtrace OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers uses complete compatible mutually exclusive all-exit records, actual state-change share and original-state equivalence. For an actual raw target-cohort quantity, commodity_source_gate_demand=assigned_source_gate_quantity remains the unnormalized physical ledger amount; actual external stage/loss integration and stock closure use that raw amount once. ONLY when combining with the 1 Item(s) service, derive q_per_reference=raw_assigned_to_that_same_scope/positive same_target_scope_N. Already per-reference quantities keep their normalization and are not divided again; a single-case raw scope has N=1. N=0 produces no normalized value. Require quantity/unit/state/source/allocation/conversion/sole owner and already-included loss coverage; finaldispatch-plus-waste or a stock residual does not establish source demand/loss. |  |
| new_supply_returns | S=opening+net_receipts-closing includes actual retained recovery. Either model gross supply S/N and separately record actual matched unused outward return, OR consumed-only (S-usable_outward_return)/N and OMIT that return exchange. Pair same standalone supply identity/scope; never deduct inherited accessory/pack/content against unrelated current supply or apply another credit. |  |
| all_consumer_service | Use measured direct resources or real causal space-time/handling/native physical drivers across all consumers/periods; include attributable idle/hygiene/open-attempt resources. Declare native driver units/source and allocation uncertainty. Mass, kit count or equal consignment shares require evidence; financial margins are no physical driver. |  |
| full_asset_life | One matched complete asset lifecycle includes manufacture, actual maintenance/replacement, retirement and end-of-life. lifetime_all_user_driver includes observed all-user history plus sourced remaining driver, units/equivalence, basis/source/uncertainty/sensitivity/update. Attribute job_driver/lifetime_all_user_driver once, not a new asset each turn; provider rents/carrier assets may already own it. |  |
| physical_scope_once | Keep provider/direct/carrier/asset/treatment responsibility matrix disjoint. Actual whole kit, parts, retained content/components, separate packing and mixed spent cleanup views are nonadditive. Actual receiver classification and treatment dataset boundary decide exchanges; no automatic avoided production credit. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_binocular | ambient_wholesale | Merchandise and accepted-service audit | Supplier/merchant stock and buyer event record | consignment_id; source_lot; source_release_gate; source_gate_state; manufacturer; model; serial_ids; passive_non_electronic_configuration; magnification; magnification_unit; magnification_source; objective_diameter; objective_unit; objective_source; body_material_record; coating_state_source; actual_accessory_scope; accessory_count; accessory_count_unit; accessory_source; kit_count; kit_count_unit; count_method; count_source; body_mass; net_kit_mass; mass_unit; mass_basis; mass_method; mass_source; inherited_pack_tare; tare_unit; tare_source; whole_pack_mass; whole_pack_mass_unit; whole_pack_mass_source; condition_observation; observation_time; acceptance_criterion_source; buyer_acceptance_id; supplier_release_time; receipt_time; dispatch_time; acceptance_time; time_zone; duration; duration_unit; duration_source; opening_stock; receipts; closing_stock; stock_unit; stock_state; stock_source; return_ids; return_quantity; return_unit; return_state; return_owner; useful_other_exit_ids; useful_other_exit_quantity; useful_other_exit_unit; useful_other_exit_state; useful_other_exit_owner; actual_loss_quantity; actual_loss_unit; actual_loss_state; actual_loss_source; actual_loss_fate; unfinished_resource_attribution; carried_resource_link; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; source_gate_allocation_mode; direct_assignment_source_ids; direct_assignment_quantity; direct_assignment_unit; direct_assignment_source; allocation_cohort_id; cohort_source_quantity; cohort_source_unit; cohort_source_state; cohort_source_record; target_exit_driver; sum_exit_drivers; exit_driver_unit; exit_driver_basis; exit_driver_source; all_exit_ids; all_exit_driver_records; exit_original_kit_equivalent; exit_equivalence_unit; exit_equivalence_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; upstream_missing_stages; upstream_stage_owner; sealed_content_present; sealed_content_identity; sealed_content_quantity; sealed_content_unit; sealed_content_state; sealed_content_basis; sealed_content_method; sealed_content_source; sealed_content_sample_time; sealed_content_conversion_factor; sealed_content_conversion_unit; sealed_content_conversion_source; sealed_content_density; sealed_content_density_unit; sealed_content_density_temperature; sealed_content_density_temperature_unit; sealed_content_density_source; content_composition; composition_unit; composition_basis; composition_method; composition_source; composition_sample_time; content_unknowns; content_fate_record; N; source_quantity_normalization_state; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | Match supplier kit release records, serial/lot and actual configuration; weigh/trace native net/tare scopes. Acceptance relies actual documented check without universal opening/test. Trace original source demand, all exits and inherited contents separately from service exchanges. Aggregation detail: Count N once; reconcile native kit/pack stock and assign source by evidenced direct mapping or compatible complete cohort all-exit drivers. No residual inferred as loss/emission. Record actual raw assignment scope and quantity_basis (raw_target_cohort or per_reference), linked same_target_scope_N/source. Keep actual outside stage/loss integration and physical stock closure raw; only derive a per-reference view for combination with 1 Item(s) service using the positive count of that same target scope, never redivide a per-reference quantity. | Item(s),kg and explicitly declared native configuration/content/driver/time units | Each receipt/condition/movement/dispatch/acceptance and period closure | Original source release through all target/other exits and crossperiod unfinished stocks | Actual merchant site and supplier/buyer gates with exclusive event IDs | per reference flow | Manufacturer record, calibrated scale method, stock reconciliation, buyer acceptance, source allocation/conversion/coverage and content unknown disclosure |
| cp_supplies | ambient_wholesale | Actual new supplies and matched unused returns | Material stock and outward transfer | supply_id; material_SKU; formulation; composition; composition_unit; composition_basis; composition_source; opening; net_receipts; closing; stock_unit; stock_source; retained_recovery; unused_outward_return; return_unit; return_receiver; same_supply_pairing; supply_convention; native_quantity; quantity_unit; quantity_source; per_piece_mass; per_piece_mass_unit; per_piece_mass_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; service_driver_share; driver_unit; driver_basis; driver_source; period; owner; embedded_provider_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect actual SKU receipts/opening/closing/native units and real unused outward receiver; distinguish new outer protection from inherited kit pack/accessories. Aggregation detail: Gross S input plus separate paired output OR consumed-only input omitting return exchange; document same-scope pairing and physical share. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Native Item(s),kg,L or other declared supply unit with conversions | Each supply stock/use/actual outward transfer and period closure | Actual supply interval and recovered closing stock | Merchant supply boundary and actual receiver only | per reference flow | Invoices/native stock measurements and actual pairing/conversion/provider coverage |
| cp_utilities | ambient_wholesale | Actual allocated warehouse utilities | Meter and causal-driver log | utility_id; provider; geography; meter_id; native_interval_quantity; quantity_unit; quantity_source; interval_start; interval_end; time_zone; service_driver; all_user_driver; driver_unit; driver_basis; driver_source; service_driver_share; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; included_provider_scope; overlap_exclusions; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use meter/native invoices, interval coverage and actual all-user space-time/handling shares; no equipment consumer electricity. Aggregation detail: Interval quantity times actual causal service share /N, keep direct versus allocated and provider overlap explicit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh,m3 and native driver/time/conversion units | Each meter/driver interval | Complete collection period including idle/open resources | Actual shared warehouse and handling meters | per reference flow | Meter scope, all-user driver records/native units, method and source |
| cp_provider | ambient_wholesale | Disjoint real contracted package | Physical provider scope record | package_id; provider; physical_scope; native_package_quantity; package_unit; quantity_source; physical_equivalence; equivalence_unit; equivalence_source; documented_share; share_driver_unit; share_driver_basis; share_driver_source; covered_events; covered_energy; covered_materials; covered_assets; covered_transport; covered_treatment; excluded_scope; direct_resource_owner; service_period; all_users; evidence_record; N | Obtain native physical equivalent, covered resources/assets/carrier/treatment and event owner matrix; do not hide excluded processing. Aggregation detail: Native quantity times evidenced share/N only after excluding duplicate direct/carrier/asset/treatment scopes. | Native physical package unit and share driver units | Each contract service/event and change | Actual provider service interval | Actual provider events linked merchant node | per reference flow | Provider scope/equivalence statement and exclusive event matrix |
| cp_assets | ambient_wholesale | Full asset lifecycle share | Asset and complete lifecycle driver register | asset_id; asset_dataset_scope; manufacture_coverage; maintenance; replacement_events; retirement; end_of_life; event_quantity; event_unit; event_source; job_driver; job_driver_unit; job_driver_source; observed_all_user_driver; observed_driver_unit; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_basis; remaining_source; lifetime_all_user_driver; lifetime_driver_unit; driver_equivalence; equivalence_unit; equivalence_source; all_consumers; all_periods; idle_and_open_use; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; N | Collect matched manufacture/maintenance/replacement/retirement/EOL coverage, observed all-user use and sourced future remainder with unit equivalence/uncertainty. Aggregation detail: job_driver/lifetime_all_user_driver/N; include all-user history/remainder, update sensitivity and exclude embodied assets in provider packages. | Native asset equivalents and compatible job/life driver units | Each asset event and period update | Full observed plus evidenced remaining lifetime and all users | Merchant infrastructure and actual disjoint provider responsibility | per reference flow | Asset dataset boundary, service logs, remainder source, native units and uncertainty |
| cp_freight | ambient_wholesale | Actual carrier work | Segment payload and route record | segment_id; mode; carrier; origin; destination; route_scope; whole_pack_payload; payload_unit; payload_source; payload_conversion; payload_conversion_unit; payload_conversion_source; distance; distance_unit; distance_source; distance_conversion; distance_conversion_unit; distance_conversion_source; actual_transport_work; work_unit; work_source; service_share; share_driver_unit; share_driver_basis; share_driver_source; empty_return_coverage; carrier_fuel_assets; warehouse_overlap; N | Collect actual full packed-kit payload, route distance and carrier native work, empty legs and covered fuels/assets. Aggregation detail: Convert compatible units and apply actual physical service share/N; do not repeat embedded carrier or warehouse resources. | Native payload,distance,work and converted t*km | Each actual segment | All included inward/outward/return segments and their real periods | Actual route/carrier boundary | per reference flow | Weighbridge/packing list, route/unit conversion, carrier dataset scope |
| cp_outlets | ambient_wholesale | Actual useful/waste physical transfers | Receiver accepted transfer and stream measurement | transfer_id; receiver; receiver_classification; treatment_boundary; treatment_owner; source_kit_ids; parent_part_ids; stream_identity; physical_state; native_quantity; quantity_unit; quantity_basis; quantity_method; quantity_source; transfer_time; whole_kit_exclusion; separate_part_exclusion; separate_pack_exclusion; retained_content_identity; retained_content_quantity; retained_content_unit; retained_content_state; retained_content_basis; retained_content_method; retained_content_source; retained_content_sample_time; retained_content_fate; component_identity; component_quantity; component_unit; component_basis; component_method; component_source; component_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; usable_transfer_record; waste_acceptance_record; source_stock_pairing; no_double_credit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Identify whole kit versus actual detached part/packing/mixed hygiene/liquid, measure native whole quantity and independent retained component/content audit with units/bases/source/fate. Aggregation detail: actual compatible net_quantity/N; content is inside whole transfer unless independently transferred and exclusively allocated. Count actual useful returns separately from waste, no presumed release/credit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Native stream Item(s),kg,m3 and independently stated component/content units | Each actual external transfer and incident | Transfer interval and retained closing stocks explicitly separate | Actual merchant outlet and documented receiver/treatment boundary | per reference flow | Receiver/classification acceptance, measured net/tare/state, parent linkage and exclusive contents/treatment |
| cp_environment | ambient_wholesale | Conditional real direct release | Species and receptor measurement or justified factor record | event_id; species_identity; particle_basis; receiving_medium; direct_measurement; measurement_unit; measurement_method; measurement_source; sample_time; activity; activity_unit; activity_source; factor; factor_unit; factor_basis; factor_source; factor_scope_complete; composition; composition_unit; composition_basis; composition_source; release_fraction; fate_basis; fate_source; whole_stream_quantity; whole_stream_unit; whole_stream_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; retained_captured_quantity; retained_captured_unit; retained_captured_basis; retained_captured_source; contained_transfer_exclusion; inherited_content_provenance; stock_unknowns; provider_overlap; N | Identify actual species/medium, trace measurement or applicable activity/factor and needed composition/fate, excluding retained/captured/contained transfer and unknown inherited content. Aggregation detail: Measured species/N OR supported activity factor with required composition/fate/conversions/N; complete factors not re-multiplied. | kg species plus native activity/factor/composition/temperature units | Each actual measured or supported release event | Actual event/sample intervals and representativeness | Actual release receptor outside merchant boundary | per reference flow | Sampling/analytical method or applicable factor/source, actual activity/state and independent receptor evidence |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | accepted_service | N=count unique actual buyer-accepted commercial consignment IDs at the declared final gate; do not count actual kits/pairs as service outputs. | cp_binocular buyer_acceptance_id/consignment_id/state/time | N and 1 Item(s) service reference |  |
| kit_mass_audit | merchandise nonexchange | whole_pack_mass=actual_net_kit_mass+actual_included_pack_tare only on same scope/state/method; body+included accessories are a nonadditive kit decomposition, not another service supply. | cp_binocular native quantities/configuration/unit/method/source | Native kit and actual pack quantity audit, no default model weight |  |
| original_gate_demand | commodity outside | Preserve actual raw original-gate demand and loss/stage integration at its physical assignment scope. Record assignment_scope_ids, quantity_basis=raw_target_cohort or per_reference, same_target_scope_N and source. Directtrace OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers uses complete compatible mutually exclusive all-exit records, actual state-change share and original-state equivalence. For an actual raw target-cohort quantity, commodity_source_gate_demand=assigned_source_gate_quantity remains the unnormalized physical ledger amount; actual external stage/loss integration and stock closure use that raw amount once. ONLY when combining with the 1 Item(s) service, derive q_per_reference=raw_assigned_to_that_same_scope/positive same_target_scope_N. Already per-reference quantities keep their normalization and are not divided again; a single-case raw scope has N=1. N=0 produces no normalized value. Require quantity/unit/state/source/allocation/conversion/sole owner and already-included loss coverage; finaldispatch-plus-waste or a stock residual does not establish source demand/loss. | cp_binocular original source quantities/native all-exit drivers/equivalence/owner/coverage | Quantified complete supplier-gate commodity demand and exclusive once-only linked loss adjustment outside service |  |
| supply_convention | actual supplies | S=opening+net_receipts-closing; select gross S/N input plus separate matched usable_outward_return/N OR consumed-only (S-usable_outward_return)/N input and OMIT paired output. | cp_supplies source stock/pairing/unit/conversion | Exclusive input/unused outward return convention without second credit |  |
| utilities | actual utilities | allocated_utility=native_interval_quantity*service_driver_share/N after compatible conversion; service_driver_share=service_driver/all_user_driver on evidenced causal same-unit basis. | cp_utilities interval and all-user native driver records/source | Actual utility per service, measured/allocated distinction |  |
| provider_scope | actual packages | provider_quantity=actual_native_package_quantity*documented_share/N only after physical scope/equivalence and exclusive event reconciliation. | cp_provider native equivalents/share units/source/coverage | Disjoint real provider package per service |  |
| asset_equivalent | shared_assets | asset_equivalent=job_driver/lifetime_all_user_driver/N; lifetime_all_user_driver=compatible_observed_all_user_driver+compatible_sourced_remaining_driver. Document actual replacements and EOL in matched complete life; evaluate uncertainty/sensitivity/update. | cp_assets complete lifecycle and native driver/conversion/source | Full-life all-user asset attribution per service |  |
| transport_work | freight | actual_transport_work=compatible_whole_pack_payload_tonnes*compatible_distance_km for actual mass-distance service, then multiply actual service_share/N; native carrier work takes precedence when equivalent. | cp_freight native payload/distance/conversions/share/empty-leg scope | Disjoint actual freight work per service |  |
| outlets | actual transfers | outlet_quantity=actual_compatible_net_quantity/N, whole stream with retained content. Parent-kit/part/packing/component audits are nonadditive; retained content is not independent release or recovery. | cp_outlets whole/native/component/content/state/receiver records | Exclusive actual receiver transfer quantity; retained stock and unknowns separately disclosed |  |
| release | direct_species | release_quantity=actual_measured_species_quantity/N OR compatible_activity*applicable_factor*required_composition*required_release_fraction/N; omit extra factors already included in complete species-release factor. | cp_environment native activity/factor/composition/fate/conversion/receptor evidence | Actual species and receiving-medium quantity, no default sealed charge/leak |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| native_operands | All cards and calculations | Every actual operand retains native unit/state/basis/method/source, sampling/time where relevant, conversion-factor units/source; absent record remains unresolved not zero. | Node-owned CPs and underlying actual records |
| representativeness | Model/configuration and provider | No universal Nikon weight/performance/accessory/gas/repair/life or humidity threshold; actual source/sku/site/time and all-user native shares govern. | Supplier model/kit pack, actual condition/acceptance and method/source |
| linked_chain | Commodity outside service | Complete finished packed optical kit supplier gate plus quantified original demand/loss owner/exclusive coverage required before complete-chain package; source missing stages disclosed and added once. | cp_binocular linked commodity-system readback |
| final_package | Actual exchanges | Bind each actual expanded material/provider/asset/waste/species to verified concrete identity and actual supported property/unit; semantic candidate cards are not final TIDAS exchange UUIDs. | Actual detail/support evidence and raw foreground package |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| cleaning_water | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| hygiene_supplies | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_supplies` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_packing | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_packing` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_packages | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_packages` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| shared_assets | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_count_returns | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_count_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| unused_mass_returns | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_mass_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| whole_goods_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `whole_goods_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `whole_goods_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| part_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `part_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| packaging_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packaging_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| hygiene_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| contained_liquid | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_liquid` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Only actual allocated warehouse lighting/handling/meter scope. This route consumes no binocular operating or demonstration electricity. Distinguish standalone measured utility from a provider package already covering it.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse and electric handling electricity
- Flow property / unit: Energy / kWh
- Amount rule: metered_interval_quantity*service_driver_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Metered intervals and all-user handling/space-time drivers, supplier and delivered-energy property support are required before setting an electricity-per-consignment guardrail.

#### cleaning_water

Actual warehouse surface hygiene water only if supplied. It is not optical washing, lens cleaning or water contained in traded equipment; source and receiver boundaries follow records.

Residual inventory requirement after the independently identified cases `cleaning_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse hygiene water
- Flow property / unit: Volume / m3
- Amount rule: actual_water_quantity*service_driver_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual water meter/native volume or evidenced density conversion, cleaning interval and all-user share are needed; no per-kit cleaning-water benchmark is assumed.

#### hygiene_supplies

Expand only actual cleaning agents, wipes or absorbents used for warehouse hygiene/incidents with distinct material and stock records. Do not prescribe consumer optical cleaners, solvents, desiccants or a dose.

Residual inventory requirement after the independently identified cases `hygiene_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse cleaning and incident containment supplies
- Flow property / unit: Mass / kg
- Amount rule: selected_supply_input/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual SKU/formulation, unused supply stock and whole wipe/absorbent quantity with composition and native conversions are needed for each used material.

#### added_packing

Only actually new external transit cartons/cushions/seals crossing service boundary; inherited kit case/caps/strap and factory packing are merchandise. Repacking or optical-kit assembly is outside this route.

- Identity requirement: Actual added outer transport protection
- Flow property / unit: Count / Item(s)
- Amount rule: selected_supply_input/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual added outer unit, per-piece mass/material and new-versus-reusable role must be known; no carton count or protective-material allowance per kit is imposed.

#### provider_packages

Use actual physical package/native equivalent only with explicit resources, warehouse handling and asset/treatment coverage. Financial fees are not quantities. Optical repair, alignment, purge, coating and powered testing remain outside scope even if contracted.

- Identity requirement: Actual disjoint contracted warehouse package
- Flow property / unit: Count / Item(s)
- Amount rule: actual_native_package_quantity*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Provider unit, physical equivalence and covered event/resource matrix must be obtained; no generic outsourced-package factor or hidden product transformation is allowed.

#### shared_assets

Attribute actual warehouse/racks/electric handlers/reusable pallets/bins/scales and monitors across all users and periods including actual maintenance/replacements/retirement/end-of-life. Factory kit accessories are not service infrastructure.

- Identity requirement: Full-life warehouse and handling asset service
- Flow property / unit: Count / Item(s)
- Amount rule: job_driver/lifetime_all_user_driver/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Complete matched asset lifecycle, native driver units, observed history plus sourced remaining use and uncertainty are required; no new pallet/rack per consignment or assumed lifetime is used.

#### freight

Only actual owned transport segments not already covered elsewhere. Transport payload is whole actual kit/accessory plus packing load; declared net optical body mass alone is insufficient. Carrier assets/fuels/empty legs require one owner.

- Identity requirement: Actual allocated transport of packed binocular merchandise
- Flow property / unit: Freight transport / t*km
- Amount rule: actual_transport_work*documented_service_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Mode, loaded whole-pack mass, distance/unit conversions, empty-return coverage and carrier service scope need route-specific evidence; no default load, journey or kit mass is inferred.

#### unused_count_returns

Only actual outward usable unused units from the same standalone added-supply stock. Closing recovered stock is not an export; merchandise/accessories returned to supplier are nonexchange stock events here. Omit this exchange when matched return was deducted in consumed-only supply input.

- Identity requirement: Actual matched unused added packing outward return
- Flow property / unit: Count / Item(s)
- Amount rule: actual_matched_unused_outward_units/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual unit identity/condition, outward receiver and source-stock pairing are needed; no credit is inferred from reusable kit cases, packaging stock recovery or supplier merchandise returns.

#### unused_mass_returns

Usable unused actual hygiene material outward transfer from same standalone supply stock, with identity and native net mass. Gross-input convention retains the paired output; consumed-only convention omits it. No automatic avoided production credit.

- Identity requirement: Actual matched unused warehouse supply outward return
- Flow property / unit: Mass / kg
- Amount rule: actual_matched_unused_outward_mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual unopened/usable product, quantity unit, density if needed and same-stock receiver pairing are required; no returned-goods mass is netted against cleaning supply.

#### whole_goods_waste

Only actual receiver-accepted whole binocular/kit discard, retaining declared accessories, packaging and sealed contents where actually included. Match serial/lot and state; chipped lens/fog/sticky armour or commercial return alone is not disposal. Whole-stream content audits do not add separate material exchanges.

- Identity requirement: Actual discarded whole binocular kit stream
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual whole-device/kit boundary, mass basis, included pack/accessories/retained content and receiver classification/treatment coverage are needed; no rejection or unknown condition is assumed to be waste.

#### part_waste

Actual independently collected damaged parts/fragments linked to parent binocular/kit, if received or incident-detached and legally transferred. No routine dismantling/repair prescribed. Exclude parts already in whole-device waste and separately identify included retained material/content.

- Identity requirement: Actual separately transferred binocular part or fragment stream
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Parent-kit genealogy, actual lens/body/armour/cap material, native quantity/unit/composition and exclusive receiver fate are needed; fragment count is not original binocular count or airborne release.

#### packaging_waste

Actual physically separate carton/cushion/film/material waste; distinguish factory merchandise pack, added supply and retained reusable stock. Do not duplicate packing included with discarded whole kits/parts or mixed containment waste.

Residual inventory requirement after the independently identified cases `packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separately transferred packaging waste
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Separate packing identity, net mass, contamination/retained fragments or fluid and transfer receiver are required; factory packing mass is not another new packing purchase on resale.

#### hygiene_waste

Whole actually transferred spent wipe/absorbent/filter stream with retained fragments/fluid composition audits. Distinguish purchased dry product from measured spent whole stream; do not add retained components again as waste or releases.

- Identity requirement: Actual spent warehouse hygiene or containment solids
- Flow property / unit: Mass / kg
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Spent stream actual wet/net mass, retained fluid/component native unit/basis/source and receiver evidence are needed; material supplied or lens damage does not establish spent waste quantity.

#### contained_liquid

Actual collected warehouse surface-cleaning liquid or contained incident liquid to a real receiver; no routine optical washing or purging. Quantity/composition/density-temperature and treatment provider coverage must match the physical stream.

- Identity requirement: Actual contained warehouse hygiene liquid
- Flow property / unit: Volume / m3
- Amount rule: actual_compatible_outlet_net_quantity/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual collected volume or compatible mass-density conversion, retained solids and receiver treatment records are needed; utility intake or visible condensation is not automatically this stream or direct water release.

#### direct_species

Expand only independently evidenced substance/particle identity and receiving medium. Factory nitrogen/waterproof claim, fog, sticky resin, glass breakage or missing inventory does not establish a species, quantity or emission. Captured fragments and contained cleanup streams are not airborne particles.

- Identity requirement: Actual identified direct species or particle release
- Flow property / unit: Mass / kg
- Amount rule: actual_measured_species_quantity/N OR actual_activity*applicable_factor*required_composition*required_release_fraction/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Species/medium, actual sampling or applicable activity-factor basis and native composition/fate/conversion evidence are required. A complete species-release factor must not be multiplied by composition/fate again; no sealed charge or leak factor is invented.

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| reference_gate_check | Match reference name/link to actual completed service output, N and declared buyer acceptance once, with actual non-electronic model/configuration/kit/pack/count/time qualifiers. |  |
| commodity_gate_check | Verify all actual missing upstream optical manufacture/accessories/finish/sealed content/inherited pack stages at original gate outside once, compatible source assigned quantity/all-exit allocation and actual loss coverage owner. Missing evidence blocks complete-chain claim.  Verify raw assignment_scope_ids/quantity_basis and same_target_scope_N; never use a normalized view to close actual cohort stock or integrate actual missing stages/loss. |  |
| scope_check | Confirm no merchant powered demo/repair/alignment/opening/gas purge/recovery or prescribed desiccant/cleaner use hidden in provider scope. Inherited nitrogen label is not new service input. |  |
| stock_receptor_check | Reconcile whole/part/pack/content stocks/returns/actual receiver exits exclusive. Unknown loss/condition/charge is not zero, actual discard, avoided production or direct species; captured fragments/cleanup liquids cannot also be air/water releases. |  |
| resource_owner_check | Check causal all-user intervals, full-life observed+sourced asset remainder/unit equivalence/uncertainty, provider/carrier/treatment owner and gross-plus-return versus consumed-only omitted-return convention. |  |
| identity_evidence_check | Require actual quantity/conversion/source/support and verified concrete UUID for each final exchange; retain unresolved candidate identities and evidence gaps without publication-ready assertion. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Service add-on foreground for actual completed own-account passive optical binocular wholesale consignment. |
| downstream_use | Combine disjoint service operations with quantified linked complete supplier-gate commodity system exactly once, preserving source state and loss coverage. |
| allowed_use | Actual declared passive non-electronic finished packed optical binocular kit ambient merchant route and observed native resources/receivers. |
| excluded_use | Stand-alone full binocular product footprint, camera/electronic binocular/operating use, universal consumer performance/repair/lifetime claim or fee agency. |
| required_metadata | Actual model/serial/configuration/accessory/pack/content state, original supplier gate/assigned demand/all exits/loss owner, count/nettare/native units, site/period/times/acceptance, provider/assets/freight/treatment scopes. |
| required_quality_disclosure | Unresolved flow/support identities; actual source-unit conversions, stock/content unknowns, all-user asset remainder uncertainty, measured versus allocated quantities and missing empirical ranges. |
| update_trigger | Actual route/configuration/source gate/provider/receptor change, new processing, revised measurement/allocation source, full-life asset remainder change or verified actual identity. |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| nikon_model | literature | Nikon, MONARCH M7 manufacturer release,2021-09-22. https://www.nikon.com/company/news/2021/0922_monarch_m7_01/ | Model-specific finished passive optical configuration, inherited sealed content and actual versus optional accessory distinction only; no numeric specification, operating, lifetime or gas quantity default. |
| nikon_condition | literature | Nikon Japan FAQ000056389,published2019-04-04 updated2026-10-08. https://nij.nikon.com/support/faq/products/article?articleNo=000056389 | Qualitative actual resin exterior condition/ageing/storage context only; no universal damage, storage limit, chemical release, repair operation or factor. |
