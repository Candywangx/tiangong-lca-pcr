---
pcr_id: pcr.own-account-folded-wool-knit-jumper-wholesale
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of factory-packed folded wool-knit jumpers

## 1. Scope and Applicability

This PCR covers own-account merchant wholesale of factory-finished folded and packed knitted wool-containing jumpers/pullovers, including actual declared blends, through ordinary ambient receiving, stock/pack-condition records, electric handling and actual business-buyer acceptance. Actual style/size/piece count, fibre composition and its basis/source, whole-garment net mass including integral trims, pack tare, moisture method/sample/basis and visible or supplier-evidenced condition define each case. Wool naming does not imply 100% wool.

Exclude greasy-wool/scouring/topmaking/yarn/knitting/garment manufacture and finishing, laundering, steam/ironing, repair/redye, garment chemical/pest treatment, supplier primary opening/repacking, hanging/reforming as a processing route, and dedicated temperature/humidity intervention without review. Also exclude other apparel/fur/retail/agency and standalone storage/transport. Household cleaning, vacuum bags, silica, cedar, mothballs and home inspection schedules are not required operations. Non-invasive records or representative traceable supplier measurements may support quantities/condition; no compulsory destructive opening/sampling is introduced.

Every actual garment/blend-fibre and inherited-pack production stage, including embodied upstream of lost material, belongs to a separate factory-finished/packed commodity system. Compatible assigned original-gate demand and actual loss adjustment with sole owner/existing coverage are mandatory outside this service before full-chain use. Merchant resources, real rejected-goods handling and receiver treatment remain once.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-folded-wool-knit-jumper-wholesale |
| classification_refs | CPC 3.0:61033; narrower factory-packed folded wool-containing knitted jumper merchant service |
| covered_products | Own-account ambient wholesale of manufacturer-finished folded/packed knitted pullovers with actual wool/blend composition declared |
| excluded_products | Raw/scoured wool/yarn/fabric/garment manufacture, other clothing/fur, garment washing/steam/repair/treatment/repacking or unreviewed dedicated climate intervention; retail/feeagency/standalone warehouse |
| representative_product | Actual style/size/SKU/source lot folded factory pack through a unique B2B accepted consignment, actual composition not fixed pure wool |
| production_route | Factory final garment finishing/fold/pack release -> merchant receiving/stock/pack-condition records -> ordinary ambient handling/holding -> buyer acceptance |
| market_state | Completed merchant service with actual garment count/mass/trim/composition/moisture/condition and handover qualifiers, not a new wool or jumper manufacturing output |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account factory-packed folded wool-knit jumper wholesale service |
| How much | 1 Item(s) |
| How well | Actual style/size/wool-blend composition/source, count/net garment incl integral trims, moisture/pack/condition and buyer-adopted criteria qualify acceptance |
| How long or cycle | Actual factory release/merchant receipt/holding/dispatch/buyer acceptance and linked open cohorts, no standard garment storage life |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account factory-packed folded wool-knit jumper wholesale consignment |
| reference_flow_property | 01846770-4cfe-4a25-8ad9-919d8d378345 |
| reference_unit_group | 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| reference_unit | Item(s) |
| required_qualifiers | supplier_id; product_sku; style_id; size; source_lot_id; finished_garment_pack_gate; folded_pack_state; fibre_composition; composition_basis; composition_source; garment_piece_count; net_garment_mass; integral_trim_scope; mass_unit; moisture_value; moisture_basis; moisture_method; sample_time; moisture_source; inherited_pack_tare; merchant_id; buyer_gate; reporting_period; actual_storage_conditions |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N is final unique accepted commercial consignment, not individual jumper, carton, invoice or wool kg. |
| garment_pack_basis | commodity audit | Mass; Count | kg; Item(s) | Whole net garment includes actual integral trims/internal labels; inherited external pack/insert/support tare separate. Garment count is physical qualifier, no standard per-piece mass. |
| fibre_moisture_basis | analytical audit | declared native property | declared native unit | Actual blend fraction basis/source and moisture component/method/sample/time/state explicit. A dry-fibre label fraction does not apply blindly to whole as-received garment incl trims. Only representative compatible component/whole measurements may support conversions; no 100% wool or standard regain. |
| supply_receiver_native | actual new supplies/outlets | native property | native unit | Actual packing unit/per-piece mass or measured Mass/Volume with density-temperature/conversion source required. |
| physical_equivalence | providers/assets | Count | Item(s) | Match actual completed physical package or complete whole-asset equivalent/native unit with full coverage; other actual native units need appropriate expansion. |
| freight_native | freight | mass*distance | kg*km | Use actual complete as-transported garment+packing/support mass times km and real disjoint share, not wool-fibre mass. |
| species_native | direct_species | Mass | kg | Actual species/medium/particle identity and measured or justified matched activity/factor/composition/fate; captured fibres or chemical product purchase do not prove release. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Factory-finished folded/packed knitted wool-containing jumper release, actual style/size/composition/trim/pack and condition traceable |
| starting_condition_role | Merchant physical own-account ambient wholesale add-on after complete garment factory release |
| product_classification_scope | Narrower apparel wholesale subset; actual finished garment commodity system independent |
| recursive_input_rule | Do not consume/respin raw wool, re-knit garments or recursively manufacture traded apparel inside service. Merchandise stock/demand is non-exchange audit; actual service supplies/providers separately scoped. |
| upstream_dataset_requirement | Separate original factory-finished/packed garment system covers all actual wool/blend-fibre production and applicable post-shear scouring/topmaking/spinning/knitting/assembly/finishing/fold/packing stages once. Greasy-wool farmgate dataset alone omits downstream manufacture; add every missing actual stage outside service with compatible assigned demand/loss coverage. |
| disclosure | Actual style/size/SKU/blend basis/source, count/net garment incl trims, pack tare/moisture method/sample/time/state and condition; manufacturer/merchant/buyer periods; source-gate assigned quantity/unit/state/source/allocation/conversion/loss-owner/existing coverage; physical resources/providers/full-life assets/carriers/receivers |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| finished_garment_boundary | all traded garments | Exclude all garment/blend manufacture/finishing/inherited packing and lost upstream; separate linked baseline reaches actual factory release, not greasy wool or yarn alone. |  |
| fold_condition_context | actual product/pack records | Record factory folded pack, visible/supplier-evidenced shape/moisture/insect/mould condition and buyer criteria. Woolmark consumer care gives qualitative folded/moisture/insect context only; no household washing, vacuum bag, silica, cedar, mothball or frequency becomes wholesale instruction/input/emission. | woolmark-wool-storage-context |
| no_unreviewed_treatment | whole route | No garment washing/steam/ironing/repair/redye/product-contact pest treatment, opening/repacking or dedicated climate intervention, including actual contracted processing. Such acts require fresh scope/module review; no hidden intervention under hygiene package. |  |
| periods_and_attempts | stock/actual events | Retain actual source/lot/style/size/consignment/event/period and opening/receipts/dispatch/returns/reject/closing/internal moves. Failed/unfinished resources carry even when only final unique buyer acceptance creates N. Condition score or observation alone is not physical destruction or loss. |  |
| physical_owners | all resources/outlets | Direct utilities/supplies/provider/carrier/full-life asset/receiver treatment have one actual owner. No finance/margin, automatic household care or avoided-production credit substitutes physical evidence. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ambient_wholesale` | Factory-packed folded-jumper merchant stock handling and handover | required | Actual manufacturer-released folded/packed wool-containing knitted jumpers under merchant ownership through ordinary ambient stock/handling and actual B2B acceptance | One physical merchant service with garment/style/size/composition/state/pack/period responsibility, no manufacturing/preservation node | `accepted_service` |

The true node owns receiving/check/holding/electric handling and actual warehouse-surface hygiene. Garment/inherited pack quantities and condition are a non-exchange commodity ledger; conditional actual supplies/providers/assets/receiver/species expand from records. Shape damage, suspect insects/mould, usable returns, retained rejects, actual discard and direct release remain distinct states.

### Process: Factory-packed folded-jumper merchant stock handling and handover (`ambient_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable purchased electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual source meters/charging/event scope and all-user causal driver intervals including idle/hygiene/open work needed; no standard energy per jumper, garment manufacturing load or assumed dehumidifier use.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable purchased cleaning water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Require real meters/cleaning-event quantities and actual source/treatment scope; no household wool wash procedure, liquid-to-garment ratio or water purchase=effluent equality.

###### Actual independently recorded synthetic detergent supply (`hygiene_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable actual new hygiene supply mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual SKU/formulation/product mass, stock/unused-return/receiver and composition-fate evidence needed; no home-care supply kit or pest-chemical dose/release assumption.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account factory-packed folded wool-knit jumper wholesale consignment (`accepted_service`)

One actual unique business-buyer accepted commercial service for factory-finished folded/packed knitted pullovers containing declared wool and any actual blend fibres. Actual style/size/SKU/lot/fibre-composition basis, garment pieces/net mass including integral trims, source/moisture/pack/date/condition and buyer gate qualify the service. Wool naming does not assume 100% wool, and one reference is not one jumper or wool kilogram.

- Selected flow: Completed own-account factory-packed folded wool-knit jumper wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_garment`

Range evidence need: Actual commercial acceptance plus matching style/size/fibre label-source/net/tare/moisture/condition evidence required; no standard wool percentage, jumper size/mass, consignment piece count or quality tolerance.

##### Waste flows

###### Discarded wool knitted jumper (`garment_waste_atomic_case`)

Conditional on independently recorded actual Discarded wool knitted jumper. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `garment_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded wool knitted jumper
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable discarded garment-stream mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_garment`

Range evidence need: Need actual style/size/composition/state, piece/mass/pack-inclusion evidence and receiver disposition; no condition-score=loss, label fibre percentage=emission, or default landfill/recycling route.

###### Actual separately collected paper packaging waste (`packaging_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separately collected packing-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Real component/net quantities/condition/remaining contents/receiver needed; no default retail bag weight or every pack removed on receipt, no automatic recycled-material substitution.


###### Actual separately collected metal packaging waste (`packaging_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separately collected packing-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Real component/net quantities/condition/remaining contents/receiver needed; no default retail bag weight or every pack removed on receipt, no automatic recycled-material substitution.


###### Actual separately collected plastic packaging waste (`packaging_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separately collected packing-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Real component/net quantities/condition/remaining contents/receiver needed; no default retail bag weight or every pack removed on receipt, no automatic recycled-material substitution.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| original_gate_assignment | garment merchandise | Assign actual complete factory-finished/packed source input to accepted cohort in compatible native state/unit/composition/moisture basis with source/allocation/conversion. Include evidenced original material and ordinary moisture/state-change share without treating it as fibre loss; returns/closing/other exits exclusive. Final dispatched garment mass plus waste is not automatically original-gate demand. Actual compatible loss adjustment and existing coverage owned once outside service; unknown mass/count differences unresolved, not default loss or zero. |  |
| all_user_attribution | actual service periods | Use real all-consumer source periods and causal handling/occupied-space-time or other justified native driver, with units/source/rationale, including idle/hygiene/failed/open attempts. Equal consignments, garment count or wool mass splits are not presumed. Unfinished work retains attribution without fictitious N. |  |
| supply_return_convention | new direct supplies | S=opening_supply+net_receipts-closing_supply. Gross input S/N with separately recorded actual matched native unused outward-return output OR consumed-only (S-usable_outward_return)/N with matching return exchange omitted and no extra deduction. Require same-scope standalone stock pairing; retained recovery is closing, inherited garment/asset contents do not reduce unrelated current supply. |  |
| complete_asset_life | shared_assets | asset_equivalent=(job_driver/life_driver)/N for one compatible complete asset and every user/period. Manufacture/maintenance/real replacements/retirement/end-of-life, observed history+sourced remainder and uncertainty/sensitivity/update explicit. Direct/provider/carrier overlaps removed only after same burden has one owner elsewhere; no per-turn new bin/pallet or duplicate rent/service+asset view. |  |
| actual_transfer_states | real returns/wastes | Usable commercial returns/retained rejects remain commodity states. Actual discarded garment stream includes only associated pack actually transferred together; separately removed pack/mixed hygiene/liquid streams are exclusive. Components/moisture/fibre analyses are nonadditive, no duplicate physical or species output. Receiver/treatment scope once, no default recycling/substitution benefit. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_garment` | ambient_wholesale | reference and non-exchange garment/pack/composition stock | garment_acceptance_stock_record | site_id; merchant_id; warehouse_id; supplier_id; cohort_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; ownership_resale_record; product_sku; style_id; size; source_lot_id; finished_garment_pack_gate; factory_release_date_time; folded_pack_state; wool_species_identity; fibre_composition; composition_unit; composition_basis; composition_source; component_id; component_mass; component_mass_unit; integral_trim_scope; integral_trim_mass; trim_mass_unit; internal_label_scope; primary_pack_material; pack_integrity; care_label_record; buyer_criteria; receipt_date_time; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; actual_storage_conditions; temperature; temperature_unit; humidity; humidity_unit; shape_condition; insect_observation; mould_observation; observation_method; supplier_condition_record; actual_condition_change; garment_piece_count; piece_unit; pieces_per_pack; pack_count; gross_quantity; primary_pack_tare; external_label_insert_tare; outer_pack_tare; pallet_support_tare; tare_unit; net_garment_mass; mass_unit; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_component_scope; moisture_source; sample_id; sample_time; sampling_representativeness; measurement_state; moisture_fraction; component_dry_mass; component_dry_mass_unit; component_fibre_fraction; fraction_basis; basis_conversion; conversion_source; opening_quantity; receipts; dispatch_quantity; supplier_return; buyer_return; closing_quantity; recovered_closing; stock_unit; stock_state; internal_transfer_id; retained_reject_quantity; actual_discard_piece_count; actual_discard_stream_mass; discard_mass_unit; transferred_pack_inclusion; actual_loss_fate; unknown_mass_difference; unknown_count_difference; discrepancy_investigation; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; assigned_moisture_state_change_share; state_share_unit; state_share_source; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Link actual factory finish/fold/pack release and merchant ownership to SKU/style/size/source lot/composition source and buyer criteria. Verify net whole garment including actual integral trims/internal labels after measured external packing/support tare, via non-invasive or representative traceable supplier measurements without mandated opening. Moisture/component sampling state/method/time/basis/representativeness and composition basis explicit; no blanket dry-wool conversion. Record actual visible/supplier condition, real returns/retained rejects/discards and compatible stock/unit differences. Trace original complete-garment source demand and actual compatible loss outside service once, exclusive other exits and existing coverage. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); actual whole-garment kg/pieces and component/moisture native units | each actual receipt/check/movement/rejection/acceptance/stocktake or evidenced condition/moisture observation | Factory release through merchant acceptance plus earlier/later stocks and failed/open cohorts | One actual merchant responsibility with independent factory commodity/buyer gates | per reference flow | Actual style/size/label-composition/release/buyer source; calibrated tare/net/representative component-moisture evidence and disposition investigation |
| `cp_supplies` | ambient_wholesale | new outer-packing/hygiene supplies and unused returns | supply_stock_record | site_id; cohort_id; event_id; period_id; supply_id; product_sku; product_state; native_property; native_unit; unit_definition; opening_supply; gross_receipts; receipt_tare; net_receipts; closing_supply; recovered_closing; actual_use; usable_outward_return; outward_return_id; return_receiver; supply_return_pair_id; same_scope_supply_match; selected_supply_view; per_piece_mass; per_piece_mass_unit; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion; conversion_source; composition; composition_basis; composition_source; actual_fate; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Record real new standalone product/native receipts/stock/use/closing and matched unused external return. Outer transit units vs inherited primary pack separate; no prescribed home-care materials. Select one gross-plus-return or consumed-only-omit-return view with actual unit/material/conversion/composition sources. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; Item(s); actual native units/conversions | each actual receipt/use/return/stock event | All supply/use/return periods including open work | Named direct service-supply scope excluding provider-contained resources | per reference flow | SKU/unit/calibrated netstock/return pairing and conversion/composition evidence |
| `cp_utilities` | ambient_wholesale | real source meters and all-user allocation | utility_period_driver_record | site_id; cohort_id; period_id; meter_id; utility_source; provider; meter_unit; opening_reading; closing_reading; import_quantity; export_quantity; direct_submeter_quantity; conversion; conversion_source; all_consumers; all_periods; consumer_driver; total_driver; driver_unit; driver_basis; driver_source; allocation_rationale; handling_events; occupied_space; space_unit; start_time; end_time; duration; duration_unit; idle_quantity; hygiene_event_id; equipment_charging_scope; actual_water_source; recirculation; actual_makeup; provider_overlap; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual import/export interval or matched submeter and disjoint scopes. Attribute complete all-user handling/space-time or justified driver, including idle/hygiene/failed/open resources. No garment wash/steam or unreviewed dedicated climate load; actual water supply separately evidenced. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh; m3; actual meter/driver units | each matched actual meter/user/event interval | All service source periods/users and idle/hygiene/open cohorts | Actual direct utility/supply treatment scope excluding provider overlap | per reference flow | Calibrated real source direction/interval and full causal consumer-driver evidence |
| `cp_provider` | ambient_wholesale | physical warehouse provider packages | physical_package_record | provider_id; package_id; native_quantity; native_unit; package_definition; equivalent_conversion; conversion_source; site_id; cohort_id; event_id; period_id; actual_start; actual_end; duration; duration_unit; included_energy; included_materials; included_assets; included_transport; included_treatment; non_product_contact_scope; excluded_resources; direct_overlap; other_provider_overlap; actual_completion; uncertainty | Collect actual completed equivalent physical unit and full resource/result scope. Non-product-contact monitoring/sanitation distinguished from real garment treatment/opening/repair, which requires route extension. Direct/provider/carrier/asset/receiver ownership reconciled once. | Item(s) equivalent or actual appropriately expanded native unit | each completed actual provider event | All package source/operation/treatment periods | Named physical warehouse provider scope with explicit exclusions | per reference flow | Actual completion/native conversion/contract resource and overlap matrix |
| `cp_assets` | ambient_wholesale | full-life warehouse/reusable handling infrastructure | asset_lifetime_driver_record | asset_id; asset_type; asset_identity; asset_equivalent_unit; dataset_scope; manufacture_coverage; maintenance_coverage; replacements; replacement_unit; retirement; end_of_life; history_start; history_end; observed_driver; observed_driver_unit; remaining_driver; remaining_driver_unit; remainder_source; life_driver; life_driver_unit; job_driver; job_driver_unit; all_consumers; all_periods; driver_basis; driver_source; reuse_cycles; actual_turns; uncertainty; sensitivity; update_trigger; direct_event_scope; provider_asset_coverage; carrier_asset_coverage; overlap_owner; conversion; conversion_source | Identify actual warehouse/racks/handlers/reusable bins/pallets/scales/monitor assets with matching full lifecycle manufacture/maintenance/real replacement/retirement/EOL. Observe complete all-user history and source remainder; compatible job/life driver units, uncertainty/update and physical overlaps explicit. No per-turn manufacture or rent duplication. | Item(s) equivalent; actual compatible lifetime/job-driver native units | each actual asset period/maintenance/replacement/retirement review | Full manufacture-to-EOL and all users/periods with history+sourced remainder | One real complete asset burden owner, direct/provider/carrier overlaps once | per reference flow | Full scope/history/remainder source, native drivers and uncertainty/sensitivity |
| `cp_freight` | ambient_wholesale | complete as-transported garment load | shipment_work_record | shipment_id; carrier_id; mode; supplier_gate; destination_gate; cohort_id; consignment_id; period_id; actual_start; actual_end; garment_payload_mass; integral_trim_scope; primary_pack_mass; inherited_outer_mass; added_pack_mass; transported_support_mass; mass_unit; whole_payload_mass; route_distance; distance_unit; load_share; share_basis; share_source; multi_drop_coverage; empty_leg_coverage; return_coverage; native_work_unit; work_conversion; conversion_source; carrier_energy_scope; carrier_asset_scope; direct_overlap; uncertainty | Collect real as-transported whole garment mass including trims, disjoint primary/inherited/added packing/supports, actual route distance/share and empty/return/multi-drop scope. Avoid wool fraction or dry-fibre replacing payload and avoid carrier energy/assets duplicated directly. | kg*km; actual payload/distance/native work units | each actual shipment/return leg | Agreed real gates and corresponding empty/return periods | Named actual carrier work/resource coverage | per reference flow | Actual compatible load/route/share and native conversions |
| `cp_outlets` | ambient_wholesale | actual separated packing/hygiene/liquid receivers | outlet_receiver_record | site_id; cohort_id; event_id; period_id; stream_id; material_identity; stream_state; classification; gross_quantity; tare_quantity; net_quantity; quantity_unit; remaining_garment_inclusion; transferred_pack_exclusion; composition; composition_basis; composition_source; retained_fibre; retained_fibre_unit; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; density; density_unit; density_temperature; density_temperature_unit; density_source; volume; volume_unit; conversion; conversion_source; pollutant_load; pollutant_unit; load_source; collection_method; receiver; transfer_id; receiver_acceptance; treatment_route; treatment_scope; provider_coverage; direct_release_exclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual separately damaged/removed outer pack, mixed used hygiene solids/captured fibres or contained surface-cleaning liquid in declared native stream state. Component/retained-fibre/moisture analyses nonadditive; actual garment-associated pack transferred already excluded. Receiver classification/acceptance/treatment and resource scope once, no laundry/washing inferred. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; m3; actual native stream units | each actual collection/transfer/receiver acceptance | Real residue/cleaning/receiver periods, retained stock separate | Actual contained receiver interface excluding direct environmental releases | per reference flow | Measured net stream/density/composition/moisture/load and real receiver treatment evidence |
| `cp_environment` | ambient_wholesale | actual direct species and receiving medium | direct_species_record | site_id; cohort_id; event_id; period_id; substance_identity; particle_size; receiving_medium; release_state; measured_mass; measured_mass_unit; activity; activity_unit; species_factor; factor_unit; factor_source; factor_scope; factor_complete; measured_whole_stream_release; whole_stream_unit; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; density; density_unit; density_source; conversion; conversion_source; retained_captured_quantity; receiver_treatment_coverage; applicability; calibration; uncertainty | Identify actual species/particle/medium before exchange identity. Measured species mass OR justified matched activity/factor OR measured whole-stream composition/fate with native conversion and applicability. Complete factor not multiplied by composition/fate again. Captured/contained materials, garment blend labels and moisture/condition observations alone do not establish a direct release or its absence. Actual species/medium and release evidence remain required; do not assume zero. | kg species; actual native activity/whole-stream/concentration units | each actual direct event or justified matched observation interval | Real release periods and source applicability, no inventory-residual proxy | Named actual direct environmental interface excluding contained receiver treatment | per reference flow | Calibrated measurement or matched factor/composition/fate and conversion evidence |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_consignment | accepted_service | N=count unique final accepted_consignment_ids at reference_gate_id; accepted_service=1 Item(s). | cp_garment | One actual complete commercial service with garment/style/size/composition/condition/time qualifiers |  |
| garment_component_audit | non-exchange garment | net_garment_mass=gross_quantity-primary_pack_tare-external_label_insert_tare-outer_pack_tare-pallet_support_tare, keeping actual integral trims/internal labels in garment net mass. Component dry mass, if genuinely needed and representatively measured, uses actual component_mass and compatible component moisture_fraction: component_dry_mass=component_mass*(1-moisture_fraction) for wet basis OR component_mass/(1+moisture_fraction) for dry basis. Apply actual component_fibre_fraction only on matching declared fraction_basis; do not multiply whole as-received trimmed garment by label wool percentage. Analytical views nonadditive. | cp_garment | Actual whole garment/tare/component/composition/moisture audit, no new manufacturing exchange |  |
| finished_gate_demand | non-exchange commodity | assigned_source_gate_quantity=actual compatible evidenced source_gate_input_quantity allocation/conversion to accepted cohort, including evidenced assigned_moisture_state_change_share, excluding exclusive returns/closing/other exits. commodity_source_gate_demand=assigned_source_gate_quantity/N outside service. Actual loss_adjustment_quantity/unit/basis/source/owner and already_included_loss_coverage reconcile once. Unknown differences not actual loss or species. | cp_garment; N | Separate factory-finished packed demand and quantified compatible upstream-loss interface |  |
| new_supply_stock | service supplies and unused returns | S=opening_supply+net_receipts-closing_supply; net_receipts=gross_receipts-receipt_tare. Gross supply S/N with separate matched usable_outward_return/N OR consumed-only (S-usable_outward_return)/N with matching return exchange omitted; retained recovery in closing, original scope/native units and conversion sources matched. | cp_supplies; N | Actual supplies and one selected unused-return convention per reference flow |  |
| meter_attribution | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | actual_meter_quantity=closing_reading-opening_reading on actual import/export direction OR matched direct_submeter_quantity; attributable_quantity=(actual_meter_quantity*consumer_driver/total_driver)/N for real disjoint all-user periods including idle/hygiene/open resources. | cp_utilities; N | Actual attributable purchased utilities per reference flow |  |
| physical_provider | provider_packages | provider_quantity=native_quantity*equivalent_conversion/N only for actual matching physically complete package, resources owned once. | cp_provider; N | Actual equivalent completed packages per reference flow |  |
| asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N; life_driver=observed_driver+remaining_driver with compatible native units, all-user full history/sourced remainder and actual lifecycle coverage, one view/no double normalization. | cp_assets; N | Complete actual asset equivalent share per reference flow |  |
| whole_load_freight | freight | whole_payload_mass=garment_payload_mass+primary_pack_mass+inherited_outer_mass+added_pack_mass+transported_support_mass with garment integral trims already included and all components disjoint; freight_work=whole_payload_mass*route_distance*load_share/N after real conversion/exclusive return/empty coverage. | cp_freight; N | Actual complete-load transport work per reference flow |  |
| contained_outlets | actual waste outlets | garment_waste=actual_discard_stream_mass/N on actual garment+associated-pack state if transferred together. Other outlet_quantity=(gross_quantity-tare_quantity)/N in actual native unit or actual volume/N with supported density-temperature as needed. Exclude already-transferred garment/pack and retained stock; components are nonadditive, receiver treatment once. | cp_garment; cp_outlets; N | Actual exclusive contained outlets in declared state per reference flow |  |
| species_mass | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_stream_release*composition*fate/N after compatible native source-backed conversion; select one. factor_complete forbids extra composition/fate; no whole-stream/species duplicate physical output. | cp_environment; N | Actual direct species mass with receiving medium per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| finished_style_state | received/accepted jumpers | Actual factory finish/fold/pack style/size/lot composition source and care/buyer condition criteria required, with real garment count/net/tare and non-invasive or representative supplier records; no pure-wool/default home care. | cp_garment factory/SKU/label/buyer state and record evidence |
| composition_moisture_loss | garment stock/actual fates | Whole garment incl trims differs textile/fibre/component analysis; actual moisture basis/method/sample/time/representativeness and compatible fraction basis. Shape/moth/mould/weight differences are not automatic disposal/loss/species. Finished-gate actual demand/loss owner/state/unit/source/coverage outside once. | Actual quantity/condition/stock/fate and separately quantified original-gate commodity link |
| physical_completeness | all resources and periods | Actual all-user native drivers/provider scope, full asset lifecycle/history/remainder/uncertainty and source/carrier/treatment owners including idle/hygiene/failed/open events once. | Source meter/supply/provider/asset/transport/receiver records |
| concrete_identity_ranges | actual expanded rows | Resolve actual SKU/package/asset/waste/species and native property/unit support before final data; quantitative ranges need comparable independent evidence, no invented benchmark. | Actual detail/support/receiver and empirical range applicability evidence |

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
| garment_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `garment_waste` under `cp_garment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `garment_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_garment`; actual source-linked native records |
| packaging_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packaging_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| hygiene_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| wastewater | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `wastewater` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Measure real electric handling/charging, lighting, record/inspection and ordinary ventilation or surface-cleaning equipment. This ambient route has no onsite combustion or dedicated temperature/humidity intervention, garment steam/ironing/laundering/drying. An actual additional physical operation requires scope/module review.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased electricity for folded-jumper warehouse operations
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable purchased electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual source meters/charging/event scope and all-user causal driver intervals including idle/hygiene/open work needed; no standard energy per jumper, garment manufacturing load or assumed dehumidifier use.

#### cleaning_water

Actual external utility water for warehouse floors/equipment only, with source/treatment and provider boundaries. No garment wash/rinse/steam or inferred water uptake from textile moisture. Record actual cleanup receiver/recirculation/make-up independently.

Residual inventory requirement after the independently identified cases `cleaning_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased warehouse-surface cleaning water
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable purchased cleaning water per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Require real meters/cleaning-event quantities and actual source/treatment scope; no household wool wash procedure, liquid-to-garment ratio or water purchase=effluent equality.

#### hygiene_supplies

Actual named surface-cleaning agents, wipes or other mass-measured service consumables expanded by SKU/state/unit. No mothballs, cedar, silica sachets, repellents or chemical treatment of garments is prescribed. Actual non-product-contact pest monitoring/sanitation, if contracted, has explicit provider resource boundaries; garment treatment requires separate route review.

Residual inventory requirement after the independently identified cases `hygiene_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse cleaning products and hygiene consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable actual new hygiene supply mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual SKU/formulation/product mass, stock/unused-return/receiver and composition-fate evidence needed; no home-care supply kit or pest-chemical dose/release assumption.

#### added_packing

Actual merchant-added outer transport cases/straps/protective units only, with defined material/unit and actual per-piece mass if converted. Factory primary pack/fold/seal/labels/hangers or inserts remain inherited merchandise audit; do not unpack/repack garments here. Reusable bins/pallets belong to assets.

- Identity requirement: Actual additional outer transit packing units
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable new outer transit units per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual added unit/material/native stock and return records; no default household storage bag, vacuum packing, cedar or desiccant, standard pieces per carton or new primary bag per jumper.

#### provider_packages

Actual complete provider-defined physical package for agreed pack/state verification, warehouse sanitation, non-product-contact pest monitoring, handling or maintenance, with equivalent native unit and full resource coverage. Do not substitute margin/fee/invoice for resources. Outsourced laundering/steam/repair/redye/product treatment/repacking remains an excluded physical process requiring reviewed extension.

- Identity requirement: Completed physical warehouse inspection sanitation or handling packages
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable equivalent completed packages per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Actual contract completion, native unit/equivalence and energy/material/asset/treatment inclusion/exclusion required; no standard inspection frequency, household care routine or price-based resource-free Count.

#### shared_assets

Real warehouse/racks/electric handlers/reusable bins/pallets/monitoring/scales represented by a matching complete whole-asset equivalent. Manufacturing, maintenance, actual replacements, retirement/end-of-life cover all users and periods. Do not manufacture one new reusable carrier on each turn or duplicate provider rent and whole assets.

- Identity requirement: Actual complete-life warehouse and reusable folded-garment handling assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable whole-asset equivalents per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need identity/lifecycle scope, compatible native all-user job/life drivers, observed history and sourced remainder with uncertainty/sensitivity; no universal storage-rack lifetime or pallet/bin rotation count.

#### freight

Actual agreed inbound/outbound/return work for complete as-transported garments including integral trims plus inherited/added packing and transported supports. Declared wool percentage or dry fibre analysis is not payload mass. Carrier embedded energy/vehicle assets and empty/multi-drop/returns coverage need one owner.

- Identity requirement: Actual complete-load folded-jumper freight work
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributable complete-load freight work per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Actual gross/net load components, route distance and mutually exclusive share/native conversion sources required; no standard jumper mass, cartons per pallet, wool fraction to shipment or default road distance.

#### unused_count_returns

Only real unused additional Count packing returned externally, paired with original same-scope supplystock/unit and receiver acceptance. Internal movement and retained stock are not outputs. Select gross input plus this return OR consumed-only input with matching return exchange omitted; no double deduction.

- Identity requirement: Actual outward unused added-transit packing returns
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable unused packing units returned per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Require actual pair IDs/units/count/receiver and selected stock view; no assumed unused fraction, manufacturer pack credit or avoided-production benefit.

#### unused_mass_returns

Real unused mass-measured service product returned externally with exact state/net quantity and original same-scope standalone supply pairing. Garment commercial returns are separate commodity movements, not negative service or unused consumables. Spent wipes/agents remain waste.

- Identity requirement: Actual outward unused hygiene-supply returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable unused hygiene supply returned mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual product/state/original-scope/return pairing and calibrated net mass needed; no credit against unrelated current supply or factory-inherited goods/assets.

#### garment_waste

Actual rejected garments transferred to a waste receiver, with real garment mass including integral trims and any associated pack only if physically transferred in that same measured stream. Shape distortion, insects/mould observation or return alone does not prove discard or mass loss. Do not duplicate associated packaging under a separate physical output. Commodity upstream loss remains separately linked outside service; actual handling/treatment once.

- Identity requirement: Actual discarded jumpers in their declared transfer-pack state
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable discarded garment-stream mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_garment`

Range evidence need: Need actual style/size/composition/state, piece/mass/pack-inclusion evidence and receiver disposition; no condition-score=loss, label fibre percentage=emission, or default landfill/recycling route.

#### packaging_waste

Only actual already-separated/damaged packing from real incidents or outer handling, with material/state/remaining garment inclusion and receiver records. No routine primary opening/rebagging or new retail-pack manufacture. Exclude packaging already transferred with discarded garments or mixed cleanup waste.

Residual inventory requirement after the independently identified cases `packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separately removed damaged outer or inherited packing
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separately collected packing-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Real component/net quantities/condition/remaining contents/receiver needed; no default retail bag weight or every pack removed on receipt, no automatic recycled-material substitution.

#### hygiene_waste

Real used surface-cleaning wipes/absorbers/monitoring consumables or captured mixed solids, including actual retained fibres/moisture/agents only where measured in the stream state. Clean supply and constituent analysis remain nonadditive views. Captured fibre is not airborne emission; no fabric cutting or garment laundry residue is invented.

- Identity requirement: Actual collected mixed warehouse hygiene residues
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable mixed hygiene-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual net transfer state/composition/retained-liquid/garment-pack exclusions and receiver evidence needed; no clean-supply=spent mass or default moth/mould/fibre-release amount.

#### wastewater

Actual collected surface-cleaning/incident liquid to a receiver with measured volume or compatible mass-density-temperature basis and actual load/source. No garment washing/steam/dry-cleaning water and no effluent inferred from garment moisture. Contained liquid differs from direct species/medium releases.

- Identity requirement: Actual contained warehouse-surface cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable contained cleaning-liquid volume per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual collection/receiver, conversion density/temperature and treatment/load scope required; no household wash-water ratio, default pollution factor or supply-to-drain fraction.

#### direct_species

Only actual measured or justified source-matched species and receiving medium, with particle size where relevant. Garment blend labels, moisture changes, moth/mould/odour observations, captured fibres and household pest-care advice do not establish chemical, biological, water-vapour or microfibre releases. Actual whole-stream composition/fate and release evidence are independent.

- Identity requirement: Actual independently identified directly released warehouse species
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable directly released species mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need actual identity/medium/particle, quantity/native conversion and factor/composition/fate applicability; no assumed mothball/cedar chemical, synthetic blend% to microplastics or moisture residual to air.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_check | accepted_service | N>0 unique final B2B accepted service with actual factory style/size/woolblend/garmentcount/net incltrims/tare/moisture/source/condition/time, not onejumper or woolkg. |  |
| processing_check | whole route | No garment manufacturing/wash/steam/ironing/repair/redye/pesttreatment/primary openingrepack or unreviewed dedicatedclimate operation, including contracted physical actions; no mandatory householdcare. |  |
| commodity_gate_check | non-exchange garment | Complete actual finishedpacked baseline includes missing actual postgreasywool and blend manufacturing stages once outside service; sourcegate assignedquantity/statechanges/exclusiveexits and actualcompatible lossunit/basis/source/owner/existingcoverage mandatory. No labelwool%=wholegarmentfibrekg or massdeficit=loss/species. |  |
| resource_owner_check | all service resources | All users/periods/drivernativeunits, idle/hygiene/open attempts, gross-plus-return OR consumed-only omitreturn, completeassetlife observed+sourcedremainder/EOL and direct/provider/carrier/treatment scope once. |  |
| fate_species_check | actual outlets | Usable commercialreturn/retainedreject vs realdiscard; garmenttransferredpack vs separatelyremovedpack/mixedhygiene/liquid disjoint. Actualspecies/medium independent, no householdchemical/condition/capturedfibre inferredrelease or automaticcredit. |  |
| bilingual_raw_contract | all authored content | Raw identity7/FU5/boundary6/reference6/profile7, all8CP12fields and10calculationbodies/output nonempty; orderedIDs/propertyunit/evidence/rawoperands/sourceURLs and deterministic projection align withoutpreprocessing. Pass not actualquality/finalUUIDproof. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset after actual foreground completion and concrete identity verification |
| downstream_use | Physical ambient folded wool-knit jumper merchant add-on linked to complete factory-finished/packed commodity demand and actual compatible loss once; not total delivered garment footprint |
| allowed_use | Actual declared factory-finished folded/packed wool-containing knitted jumper style/size/SKU/lot and B2B acceptance cohort with composition/trim/moisture/condition/period qualifiers |
| excluded_use | Greasy wool/yarn/garment manufacture, otherapparel/fur, wash/steam/repair/treatment/repack or climate intervention withoutreview, retail/agency/standalonewarehousing; householdcare mandate or durability/safety guarantee |
| required_metadata | Supplier/style/size/SKU/lot/factorypackrelease/merchant/buyer; wool-blend composition basis/source; actual garmentpieces/net includingtrims, externalpacktare, component/moisturemethod/basis/source/sampletime/representativeness; condition/stock/fates/periods; all-user service/provider/asset/carrier/receiver scope; originalgate assigned quantity/state/unit/source/allocation/conversion/lossowner/existingcoverage |
| required_quality_disclosure | Actual measurement/calibration and wholegarment/trim/component/composition/moisture compatibility; visible/supplier condition and real disposition/unknown differences; complete finishedgate stage and losscoverage; all-consumer driver/full-life sourcedremainder uncertainty; native support/identity/empiricalrange gaps |
| update_trigger | Style/size/fibreblend/garmenttrim/factorypack/state or acceptance changes; new garmentcare/producttreatment/repack/climate operations; changed warehouse/provider/asset/carrier/receiver scope; actual damage/discard/release or materialsource evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| woolmark-wool-storage-context | literature | Woolmark, How to store wool clothes. https://www.woolmark.com/care/how-to-store-wool-clothes/ | Primary wool-industry consumer qualitative folded-shape/moisture/insect storage context only. No household clean-first, vacuum, new storage bags, silica/cedar/mothballs, frequency, numeric warehouse condition or chemical/biological release instruction/default adopted. |
