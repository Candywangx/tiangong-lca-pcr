---
pcr_id: pcr.own-account-boxed-unpowered-lcd-television-wholesale
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of factory-boxed unpowered LCD televisions with LED backlights

## 1. Scope and Applicability

This PCR covers own-account merchant wholesale of manufacturer-complete factory-boxed unpowered LCD televisions with LED backlights. The merchant records real model/serial/SKU/region, original pack and supplied configuration/completeness through ordinary ambient holding/electric handling and actual B2B acceptance. TV body, stand, panel, remote, cables/adapter and batteries are separate physical/configuration views; only actually factory-included items enter the inherited merchandise kit. A remote battery is not automatically present or consumed by this service.

Exclude component/panel/receiver manufacture, foreground activation/demo/electrical testing, software update, repair/disassembly/refurbishment, stand assembly, wall mounting/install, routine primary unpack/rebox, other display technologies, retail/fee agency and standalone transport/storage. Dedicated climate intervention or actual additional processing needs route/module review, including outsourced actions. Factory testing belongs to upstream manufacture; consumer operating/standby/annual energy ratings do not define warehouse input. Unpowered commercial acceptance uses actual declared criteria, without asserting unseen functional performance.

All actual complete receiver/accessory/inherited-pack manufacturing and lost merchandise embodied upstream stay outside this service add-on. A separate complete factory-release commodity system and compatible quantified assigned source-gate demand/loss with sole owner/existing coverage are mandatory before full-chain use. Actual service incident handling/waste receiver treatment remain once.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-boxed-unpowered-lcd-television-wholesale |
| classification_refs | CPC 3.0:61042; narrower factory-boxed unpowered LCD television with LED backlight own-account wholesale subset |
| covered_products | Actual factory-complete boxed LCD/LED-backlit TV model/configuration merchant service to B2B acceptance without powering goods |
| excluded_products | Bare panels/parts as reference, OLED/CRT/projector/other products; activation/demo/testing/software/repair/disassembly/mount/install/rebox; retail/agency/standalone logistics |
| representative_product | Actual model/serial/SKU/region factory-boxed configuration with actual stand/remote/adapter/cables/cells presence traced to commercial acceptance |
| production_route | Complete assembled/tested factory pack release -> merchant external-pack/model/configuration records -> ordinary ambient stock/electric handling -> buyer accepted unpowered gate |
| market_state | Completed commercial service qualified by actual TV/kit/pack quantities and condition, not a new TV piece, screen panel or operating-use dataset |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account factory-boxed unpowered LCD-LED television wholesale service |
| How much | 1 Item(s) |
| How well | Actual model/serial/configuration/accessory completeness, whole merchandise/pack mass basis and unpowered external condition/source and buyer-adopted criteria |
| How long or cycle | Actual factory release/receipt/holding/dispatch/buyer acceptance times and open stock/resource cohorts, no consumer-use lifetime or fixed warehouse duration |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account boxed unpowered LCD-LED television wholesale consignment |
| reference_flow_property | 01846770-4cfe-4a25-8ad9-919d8d378345 |
| reference_unit_group | 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| reference_unit | Item(s) |
| required_qualifiers | manufacturer_id; model; product_sku; region_configuration; serial_ids; factory_release_gate; boxed_unpowered_state; kit_component_scope; stand_inclusion_state; remote_inclusion_state; battery_inclusion_state; tv_piece_count; whole_merchandise_mass; mass_basis; inherited_pack_tare; condition_record; buyer_gate; merchant_id; reporting_period |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N counts actual unique final buyer-accepted consignment, not TV piece, accessory count, carton/pallet/invoice or financial margin. |
| complete_kit_mass | merchandise audit | Mass; Count | kg; Item(s) | Actual boxed gross minus actual inherited packaging/support tare yields complete merchandise; preserve TV body with/without stand basis and actual separately packed accessories. Panel/body/kit views nonadditive; count only components actually included once. |
| actual_native_units | new supplies and outlets | native property | native unit | Actual unit definition/per-piece mass or measured quantity with density unit/temperature-unit/basis/source and conversion factor units/source required. Whole stream quantity unit cannot silently serve component units. |
| package_asset_equivalent | providers/assets | Count | Item(s) | Match actual complete physical package or full-asset equivalent and native unit/resource scope, other actual native units need appropriate expansion. |
| freight_native | freight | mass*distance | kg*km | Actual complete as-transported load kg times actual km and disjoint share; body-without-stand or bare panel mass not payload default. |
| species_native | direct_species | Mass | kg | Actual species/medium/particle and measurement or matched factor/composition/fate/native conversions independent of device/component inventory or damage. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete factory assembled/tested/boxed LCD TV with LED backlight, model/serial/region and supplied kit/pack states traceable, goods unpowered in merchant route |
| starting_condition_role | Physical own-account ambient wholesale add-on after complete receiver factory release |
| product_classification_scope | Narrower radio/TV wholesale subset; complete actual receiver commodity system separately linked |
| recursive_input_rule | Do not create panel/electronics/stand/remote/battery manufacture or recursively consume traded TV as service supply. Commodity stock/source-gate demand is non-exchange audit; actual merchant utilities/supplies/providers independently scoped. |
| upstream_dataset_requirement | Separate factory-release commodity system includes actual panel/backlight/electronics/enclosure, actual stand/accessories/remote/cells/adapter/cables, assembly/factory testing and inherited packing once. Bare LCD panel/PCB alone is incomplete; add missing actual stages outside service with compatible assigned demand/loss owner and coverage. |
| disclosure | Actual manufacturer/model/serial/SKU/region/kit/stand/remote/cell presence and condition/mass basis/pack tare; source/merchant/buyer periods; source-gate assigned quantity/state/unit/source/allocation/conversion/exclusive exits/loss-owner/existing coverage; all real direct/provider/asset/carrier/receiver boundaries |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_factory_gate | all goods | All actual complete TV/configuration/inherited-pack manufacturing and lost embodied upstream outside service; factory testing included there, no panel-only baseline or separate service battery consumption. |  |
| model_specific_handling | received/accepted boxed goods | Actual model instructions and packaging/condition records govern handling/acceptance. Sony guide provides a specific LCD/LED model example, with/without stand distinction and transport panel/carton context, not universal masses/dimensions/person counts or instructions to activate/install. | sony-lcd-tv-model-handling |
| no_consumer_power | whole route | No TV demonstration/activation/operation/standby/software, repair/disassembly/mount/install/rebox or unreviewed dedicated climate processing, including actual contracted work. Consumer annual/rated/standby energy is not this warehouse electricity. |  |
| periods_stock_attempts | actual merchandise/events | Record serial/model/kit source, stock/returns/retained rejects/discards and event/period links with actual unpowered buyer acceptance. Unknown missing component/count/mass or panel damage not actual disposal/leak/species; investigate. Failed/open resources remain attributable though N only final unique accepted services. |  |
| physical_ownership | resources/outlets | Actual direct/provider/carrier/complete-asset/receiver treatment burden once, no financial substitute/automatic component salvage credit. Wholeunit, detachedparts, separately contained incident material, packing, mixed hygiene/liquid/species states exclusive. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ambient_wholesale` | Boxed unpowered television merchant receipt, holding and handover | required | Actual complete factory-boxed unpowered LCD/LED TV configurations under merchant ownership through ambient handling and accepted B2B gate | One physical commercial service with model/serial/kit/pack/condition/period responsibility, no activation/processing/preservation node | `accepted_service` |

One true node owns receipt/document/external-condition checks, stock/handling and actual warehouse-surface hygiene/incident handling. The TV/inherited kit/pack ledger is non-exchange merchandise audit. Each actual conditional product/provider/asset/waste/species expands from real records; no routine disassembly or hypothetical chemical spill is created.

### Process: Boxed unpowered television merchant receipt, holding and handover (`ambient_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable purchased warehouse electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual source meter periods, charging/equipment scope and all-user causal drivers including idle/open work needed; no rated TV watts, annual consumer label use or default equipment run-hours.

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

Range evidence need: Need actual meters/events/source-treatment and allocated intervals; no per-TV wash ratio or water-purchase=outfall assumption.

###### Actual independently recorded synthetic detergent supply (`hygiene_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable actual new hygiene/containment product mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual product/formulation/native stock/use/unused-return and composition/fate evidence required; no standard spill kit, battery chemistry, cleaning recipe or dose/release fraction.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account boxed unpowered LCD-LED television wholesale consignment (`accepted_service`)

One actual unique B2B accepted merchant commercial service for factory-boxed unpowered LCD receivers with LED backlight. Actual model/serial/region/SKU, box configuration and accessory completeness, stand and remote/cells only when actually included, whole merchandise/pack quantities, unpowered condition/source gate/period and buyer criteria qualify service. One reference is not a TV piece, bare panel, invoice or currency margin. Acceptance is the real declared unpowered commercial gate, not invented functional test.

- Selected flow: Completed own-account boxed unpowered LCD-LED television wholesale consignment
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tv`

Range evidence need: Actual manufacturer configuration/source release, box/serial and buyer acceptance evidence required; no fixed model, screen size, consignment unit count, remote-cell presence or quantity tolerance.

##### Waste flows

###### Discarded complete boxed LCD television kit (`whole_tv_waste_atomic_case`)

Conditional on independently recorded actual Discarded complete boxed LCD television kit. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `whole_tv_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete boxed LCD television kit
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable discarded whole-unit stream mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tv`

Range evidence need: Need actual serial/model/disposition/whole-stream mass and component/pack inclusion plus receiver treatment scope; no automatic whole-TV landfill, recycling yield or material release factor.

###### Actual separately collected paper packaging waste (`packaging_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separated packing-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual carton/cushion/film component/net quantity/state and receiver; no default foam/cardboard proportions, every carton discarded on receipt or recycled-material substitution.


###### Actual separately collected metal packaging waste (`packaging_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separated packing-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual carton/cushion/film component/net quantity/state and receiver; no default foam/cardboard proportions, every carton discarded on receipt or recycled-material substitution.


###### Actual separately collected plastic packaging waste (`packaging_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separated packing-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual carton/cushion/film component/net quantity/state and receiver; no default foam/cardboard proportions, every carton discarded on receipt or recycled-material substitution.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| original_gate_assignment | TV merchandise | Assign actual complete factory-configured/boxed input to accepted cohort on compatible state/native unit/source/allocation/conversion. Actual stand/accessory/cell inclusion follows original kit records, not separate invented service supply. Returns/closing/other exits exclusive; actual irrecoverable wholeunit/component loss needs compatible original-gate adjustment quantity/state/unit/basis/source/owner/existing coverage once outside service. Finaldispatch plus waste or stock residual alone is not assigned source demand/loss; unknown actual state unresolved, not zero. |  |
| all_consumer_resources | actual service periods | Use actual all-user source periods and causal handling/space-time or other justified driver with native units/source/rationale, including idle/hygiene/failed/open attempts. TV piece count or equal consignment shares not presumed; no fictitious N for unfinished work. |  |
| new_supply_returns | new service supplies | S=opening_supply+net_receipts-closing_supply. Gross input S/N plus separate actual matching native unused outward-return output OR consumed-only (S-usable_outward_return)/N and omit matching return exchange/no extra deduction. Same-scope standalone supply pairing required; retained recovery in closing. Inherited kit/cells or asset components cannot offset unrelated current supplies. |  |
| full_asset_life | shared_assets | asset_equivalent=(job_driver/life_driver)/N for one matching complete asset/all users/periods; include manufacture/maintenance/actual replacements/retirement/EOL, observed history+sourced remainder and uncertainty/sensitivity/update. Direct/provider/carrier/current-event overlap removed only with same physical burden one owner elsewhere; no per-turn new pallet/rent-service+asset duplicate. |  |
| actual_outlet_views | actual transfer fates | Usable commercial return/retained rejected kit is commodity, not negative service. Actual wholeTV stream includes transferred components/pack once; separately detached parts/cells/incident material/packing/mixed hygiene/cleaning liquid require real quantities and receiver classification/scope. No component and whole overlap, no automatic chemical release or salvage/recycling benefit; actual treatment once. |  |

Published with-stand and without-stand masses are comparable only for the same actual model, configuration, state and measurement method. Do not infer stand mass or all supplied accessory mass by subtracting different guide figures; preserve actual source/method/uncertainty and configuration membership.


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_tv` | ambient_wholesale | reference and non-exchange boxed TV/configuration stock | tv_configuration_acceptance_record | site_id; merchant_id; warehouse_id; manufacturer_id; cohort_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; ownership_resale_record; model; product_sku; region_configuration; serial_ids; source_lot_id; factory_release_gate; factory_release_date_time; lcd_led_identity_source; boxed_unpowered_state; kit_component_scope; component_id; component_quantity; component_quantity_unit; component_quantity_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_source; stand_inclusion_state; body_mass_basis; body_mass_state; body_mass_method; tv_body_mass; body_mass_unit; body_mass_source; remote_inclusion_state; battery_inclusion_state; battery_identity_source; adapter_cable_inclusion; supplier_configuration_record; actual_model_instructions; buyer_criteria; pack_integrity; external_condition; panel_condition_source; shock_moisture_observation; observation_method; receipt_date_time; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; actual_storage_conditions; temperature; temperature_unit; humidity; humidity_unit; tv_piece_count; piece_unit; carton_count; boxed_gross_mass; gross_mass_unit; primary_pack_tare; accessory_pack_tare; inherited_outer_tare; transported_support_tare; tare_unit; whole_merchandise_mass; mass_unit; mass_basis; mass_source; opening_quantity; receipts; dispatch_quantity; supplier_return; buyer_return; closing_quantity; recovered_closing; stock_unit; stock_state; internal_transfer_id; retained_reject_quantity; actual_discard_quantity; discard_count_unit; actual_discard_stream_mass; discard_mass_unit; transferred_component_scope; transferred_pack_inclusion; detached_component_transfer_id; actual_loss_fate; unknown_count_difference; unknown_mass_difference; discrepancy_investigation; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Link actual manufacturer complete tested/boxed release to model/serial/region/SKU, real included stand/remote/cells/adapter/cables and unpowered merchant state. Use non-invasive or traceable representative manufacturer configuration/mass records, not compulsory opening/powering; actual body-with/withoutstand and component/wholekit scope prevent duplicate mass. Track real external condition/stock/usable returns/retained rejects/actual transfers; damage not functional failure or leak assumption. Assign complete original-gate demand and actual compatible loss with sources/conversion/sole owner/existing coverage outside service once. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); actual TV/component pieces and merchandise kg/native units | each real receipt/document/condition/movement/reject/acceptance/stocktake | Complete factory release through buyer gate, prior/later stocks and failed/open cohorts | One actual unpowered merchant responsibility and independent manufacturer/buyer interfaces | per reference flow | Actual model/serial/configuration/source mass/tare/buyer records and calibration/condition/disposition investigation |
| `cp_supplies` | ambient_wholesale | actual hygiene/outerpacking supply and unused returns | new_supply_stock_record | site_id; cohort_id; event_id; period_id; supply_id; product_sku; product_state; native_property; native_unit; unit_definition; opening_supply; gross_receipts; receipt_tare; net_receipts; closing_supply; recovered_closing; actual_use; usable_outward_return; outward_return_id; return_receiver; supply_return_pair_id; same_scope_supply_match; selected_supply_view; per_piece_mass; per_piece_mass_unit; per_piece_mass_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion; conversion_unit; conversion_source; composition; composition_basis; composition_source; actual_fate; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect actual named new standalone service SKU/unit stock/use/closing and matched unused outward return. Distinguish service hygiene/added outer pack from inherited completeTV/accessories/cells/packing; gross-plus-output OR consumed-only-omit-output with real native conversions and sources. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; Item(s); actual native units/conversions | each actual receipt/use/return/stock event | All supply/use/return periods including actual open work | Named direct service supply scope excluding provider-covered resources | per reference flow | Actual native unit/SKU/net stock/pairing/calibration and mass-density/conversion/composition sources |
| `cp_utilities` | ambient_wholesale | source utility meters and all-user attribution | utility_period_driver_record | site_id; cohort_id; period_id; meter_id; utility_source; provider; meter_unit; opening_reading; closing_reading; import_quantity; export_quantity; direct_submeter_quantity; conversion; conversion_unit; conversion_source; all_consumers; all_periods; consumer_driver; total_driver; driver_unit; driver_basis; driver_source; allocation_rationale; handling_events; occupied_space; space_unit; start_time; end_time; duration; duration_unit; idle_quantity; hygiene_event_id; equipment_charging_scope; actual_water_source; recirculation; actual_makeup; provider_overlap; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual import/export source interval OR matched direct submeter and disjoint physical scopes, with real all-user causal handling/space-time or justified drivers including idle/hygiene/failed/open periods. No powering TVs or consumer energy ratings, no unreviewed dedicated climate load. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh; m3; actual meter/driver units | each actual matched source/consumer/event interval | All service source periods/users/idle/hygiene/open cohorts | Actual direct utility/supply treatment boundary excluding provider overlap | per reference flow | Source meter calibration/real direction/period and complete causal driver evidence |
| `cp_provider` | ambient_wholesale | actual physical warehouse provider package | physical_package_record | provider_id; package_id; native_quantity; native_unit; package_definition; equivalent_conversion; conversion_unit; conversion_source; site_id; cohort_id; event_id; period_id; actual_start; actual_end; duration; duration_unit; included_energy; included_materials; included_assets; included_transport; included_treatment; excluded_resources; direct_overlap; other_provider_overlap; actual_completion; uncertainty | Obtain actual completed physical package/native conversion and full resource scope. Disjoint direct/provider/carrier/asset/receiver owners; TV activation/test/repair/disassembly/rebox/install are real separate scope, not hidden inside package. | Item(s) equivalent or actual appropriately expanded native unit | each real completed package | Actual package source/operation/treatment periods | Named physical warehouse provider with explicit exclusions | per reference flow | Actual completion/native equivalence/resource scope and overlap matrix |
| `cp_assets` | ambient_wholesale | complete warehouse/reusable handling lifetime | asset_lifetime_driver_record | asset_id; asset_type; asset_identity; asset_equivalent_unit; dataset_scope; manufacture_coverage; maintenance_coverage; replacements; replacement_unit; retirement; end_of_life; history_start; history_end; observed_driver; observed_driver_unit; remaining_driver; remaining_driver_unit; remainder_source; life_driver; life_driver_unit; job_driver; job_driver_unit; all_consumers; all_periods; driver_basis; driver_source; reuse_cycles; actual_turns; uncertainty; sensitivity; update_trigger; direct_event_scope; provider_asset_coverage; carrier_asset_coverage; overlap_owner; conversion; conversion_unit; conversion_source | Identify actual warehouse/racks/handlers/reusablecarriers/scales/monitors and matching whole lifecycle manufacture/maintenance/real replacement/retirement/EOL. Complete all-user observed history and sourced remaining driver with native units/uncertainty/update, direct/provider/carrier scope once; no per-turn new asset or rent duplicate. | Item(s) equivalent; compatible actual whole-life/job driver units | each actual asset-period/maintenance/replacement/retirement review | Full manufacture-to-EOL, all users/periods/history+sourced remainder | One complete actual asset burden owner and explicit overlaps | per reference flow | Actual lifecycle coverage/history/remainder source/compatible driver units and uncertainty/sensitivity |
| `cp_freight` | ambient_wholesale | actual complete boxed configuration payload | shipment_work_record | shipment_id; carrier_id; mode; supplier_gate; destination_gate; cohort_id; consignment_id; period_id; actual_start; actual_end; whole_merchandise_payload_mass; included_kit_scope; primary_pack_mass; inherited_outer_mass; added_pack_mass; transported_support_mass; mass_unit; mass_source; whole_payload_mass; route_distance; distance_unit; distance_source; load_share; share_basis; share_source; multi_drop_coverage; empty_leg_coverage; return_coverage; native_work_unit; work_conversion; work_conversion_unit; conversion_source; carrier_energy_scope; carrier_asset_scope; direct_overlap; uncertainty | Collect actual complete configured merchandise plus disjoint inherited/added packing/supports, actual route distance and exclusive share/empty/multi-drop/return work. Check body/stand/accessory/panel scope, native conversions and embedded carrier resources once. | kg*km; actual payload/distance/native work units | each real shipment and actual return leg | Actual agreed transport gates and matching empty/return periods | Named carrier work/resource coverage and exclusions | per reference flow | Real configured load/route/share/source and native conversion evidence |
| `cp_outlets` | ambient_wholesale | actual detached parts/incidentmaterial/pack/hygiene/liquid receivers | outlet_receiver_record | site_id; cohort_id; event_id; period_id; stream_id; parent_serial_id; component_id; separation_origin; material_identity; stream_state; classification; gross_quantity; tare_quantity; net_quantity; quantity_unit; quantity_source; whole_unit_exclusion; transferred_pack_exclusion; separate_part_exclusion; incident_material_exclusion; composition; composition_basis; composition_source; retained_component_quantity; retained_component_unit; retained_component_basis; retained_component_source; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; density; density_unit; density_temperature; density_temperature_unit; density_source; volume; volume_unit; conversion; conversion_unit; conversion_source; pollutant_load; pollutant_unit; load_source; collection_method; receiver; transfer_id; receiver_acceptance; treatment_route; treatment_scope; provider_coverage; direct_release_exclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual physically separate already-detached parts or separately contained incident material, packing, mixed spent hygiene or cleaning liquid by native stream state and parent/transfer IDs. No prescribed disassembly; actual separated origin evidenced. Wholeunit/components/pack/retained fluid analysis nonadditive with excluded overlaps. Receiver classification/acceptance/treatment scope once, composition/load independent of damage. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; m3; actual native component/stream units | each real incident/collection/transfer and receiver acceptance | Actual incident/hygiene/receiver periods, retained stock separate | Actual contained receiver interface excluding direct species releases | per reference flow | Actual net quantity/component-fluid basis/source/density/composition/load and receiver scope |
| `cp_environment` | ambient_wholesale | actual direct released species and medium | direct_species_record | site_id; cohort_id; event_id; period_id; substance_identity; particle_size; receiving_medium; release_state; measured_mass; measured_mass_unit; measurement_source; activity; activity_unit; activity_source; species_factor; factor_unit; factor_source; factor_scope; factor_complete; measured_whole_stream_release; whole_stream_unit; whole_stream_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; density; density_unit; density_source; conversion; conversion_unit; conversion_source; retained_captured_quantity; retained_captured_unit; receiver_treatment_coverage; applicability; calibration; uncertainty | Establish actual species/particle/medium and select measured species mass OR justified activity/factor OR measured whole-stream composition/fate with native unit/source conversions. Complete factor forbids extra composition/fate. Actual included component inventory, damage or contained receiver stream is not release evidence. | kg species; actual native activity/whole-stream/concentration units | each actual release event or justified matched monitoring interval | Actual direct release periods and evidence applicability, no inventory-residual proxy | Named actual direct environmental interface excluding receiver-contained treatment | per reference flow | Calibrated measurement or matched factor/composition/fate/source/native conversion evidence |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_consignment | accepted_service | N=count unique final accepted_consignment_ids at reference_gate_id; accepted_service=1 Item(s). | cp_tv | One actual complete commercial service with real configured unpowered kit/gate qualifiers |  |
| configured_mass_audit | non-exchange TV/kit | whole_merchandise_mass=boxed_gross_mass-primary_pack_tare-accessory_pack_tare-inherited_outer_tare-transported_support_tare on actual matching boundaries. Reconcile actual included components once; tv_body_mass with/withoutstand basis, barepanel, remote/cells/adapter views do not add twice to whole kit. Actual source/native unit of each quantity and calibration retained, no guide mass default. | cp_tv | Actual configuration/piece/whole-commodity/tare audit, not new manufacture |  |
| finished_gate_demand | non-exchange original commodity | assigned_source_gate_quantity=actual compatible evidenced source_gate_input_quantity allocation/conversion to accepted cohort excluding exclusively assigned returns/closing/other exits. commodity_source_gate_demand=assigned_source_gate_quantity/N outside service. Actual irrecoverable unit/part loss_adjustment_quantity/unit/basis/source/owner and already_included_loss_coverage reconcile once, no stock residual=loss or missingpart default. | cp_tv; N | Separate complete factory-configured demand and actual compatible loss upstream once |  |
| new_supply_stock | service new supplies/unused returns | S=opening_supply+net_receipts-closing_supply; net_receipts=gross_receipts-receipt_tare. Gross input S/N plus separately paired usable_outward_return/N OR consumed-only (S-usable_outward_return)/N with matching return exchange omitted. Retained recovery in closing and original same-scope native conversions/sources required. | cp_supplies; N | Actual service supplies and one unused-return convention per reference flow |  |
| meter_attribution | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | actual_meter_quantity=closing_reading-opening_reading on actual import/export direction OR matched direct_submeter_quantity; attributable_quantity=(actual_meter_quantity*consumer_driver/total_driver)/N for disjoint all-user periods including idle/hygiene/open resources. | cp_utilities; N | Actual warehouse purchased utility quantity per reference flow |  |
| physical_provider | provider_packages | provider_quantity=native_quantity*equivalent_conversion/N for evidenced matching completed physical package with full resource ownership once. | cp_provider; N | Actual equivalent completed package quantity per reference flow |  |
| asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N; life_driver=observed_driver+remaining_driver with compatible native units, all-user full lifecycle/observed history+sourced remainder and actual replacement/EOL, one view/no double normalization. | cp_assets; N | Actual complete asset-equivalent share per reference flow |  |
| whole_load_freight | freight | whole_payload_mass=whole_merchandise_payload_mass+primary_pack_mass+inherited_outer_mass+added_pack_mass+transported_support_mass on real disjoint components; freight_work=whole_payload_mass*route_distance*load_share/N after actual native conversion and exclusive return/empty coverage. | cp_freight; N | Actual configured whole-load freight work per reference flow |  |
| contained_outlets | actual waste outlets | whole_tv_waste=actual_discard_stream_mass/N on actual transferred wholeunit/kit/component/pack scope. Each other outlet_quantity=(gross_quantity-tare_quantity)/N in real native stream units OR actual volume/N with supported density-temperature conversion. Wholeunit, detachedparts, incident material, packing and mixed cleanup/liquid excluded from each other; retained stock/internal moves not exports; treatment once. | cp_tv; cp_outlets; N | Actual exclusive contained streams/receiver scopes per reference flow |  |
| species_mass | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_stream_release*composition*fate/N after matched native source-backed conversions; select one. factor_complete forbids extra composition/fate and whole-stream/species output physically not duplicated. | cp_environment; N | Actual direct species mass/receiving medium per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configured_unpowered_gate | received/accepted TV kits | Actual LCD/LED model/serial/region/factory pack and included configuration, unpowered merchant records and buyer criteria required. Supplied stand/remote/cells not assumed, acceptance not invented powered functional test. | cp_tv manufacturer/model/configuration/source/buyer records |
| mass_stock_fates | merchandise and actual outlets | Whole body/stand/panel/accessory/kit/pack native mass views compatible/nonadditive. Source complete-factory assigned demand/exclusive exits and actual loss owner/state/unit/source/existing coverage outside once; damage/missing stock not automatically discard/leak/species. | Actual configured stock/disposition and separate quantified commodity link |
| complete_physical_scope | all resource periods | Real all-user source/native drivers, complete providers/full-life assets history+remainder/replacement/EOL/uncertainty, direct/carrier/receiver scope including hygiene/failed/open work once. | Source meters/supplies/driver/provider/asset/carrier/treatment evidence |
| concrete_identity_ranges | actual expanded exchanges | Verify actual SKU/provider/asset/component/waste/species/native property-unit support before final data; empirical ranges need comparable source evidence, not model guide values. | Actual detail/support/receiver and numerical-range applicability evidence |

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
| whole_tv_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `whole_tv_waste` under `cp_tv`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `whole_tv_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_tv`; actual source-linked native records |
| detached_parts_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `detached_parts_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| incident_material_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `incident_material_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| packaging_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packaging_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| hygiene_waste | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| wastewater | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `wastewater` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species | ambient_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Actual electric logistics equipment/charging, lighting, records and surface-cleaning/ordinary ventilation for boxed unpowered goods. TV operating, standby, demonstration, activation and update electricity is outside this route; factory testing is upstream. No onsite combustion or dedicated climate intervention is assumed.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased warehouse-handling electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable purchased warehouse electricity per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Actual source meter periods, charging/equipment scope and all-user causal drivers including idle/open work needed; no rated TV watts, annual consumer label use or default equipment run-hours.

#### cleaning_water

Actual external supply for warehouse floors/equipment only, not washing television/remote/battery or inferred leakage. Actual source/treatment, recirculation/make-up and receiver scopes are independently evidenced; no utility hidden twice inside provider package.

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

Range evidence need: Need actual meters/events/source-treatment and allocated intervals; no per-TV wash ratio or water-purchase=outfall assumption.

#### hygiene_supplies

Actual named surface agents, wipes/absorbents or other mass-measured warehouse service products, by SKU/state/native unit. Only actual incident response consumption, not a prescribed kit or opening/cleaning the receiver. Factory remote cells, stand, power adapter/cables and inherited protective packing are merchandise constituents, not service-consumed supplies.

Residual inventory requirement after the independently identified cases `hygiene_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse cleaning and incident-containment supplies
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable actual new hygiene/containment product mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual product/formulation/native stock/use/unused-return and composition/fate evidence required; no standard spill kit, battery chemistry, cleaning recipe or dose/release fraction.

#### added_packing

Actual merchant-added external transit cases/straps/supports with defined units/material and measured per-piece mass if converted. Factory carton/cushion/film/inserts/accessory boxes remain inherited kit audit, not newly supplied packing merely on resale. No routine primary unpack/rebox; reusable pallets/bins are complete-life assets.

- Identity requirement: Actual additional outer transit packing units
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable added transit packing units per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual new external unit/material/stock/return and per-unit mass sources needed; no universal carton/foam mass, new primary box per TV or automatic manufacturer reboxing procedure.

#### provider_packages

Actual complete provider-defined external pack/document verification, warehouse hygiene/incident handling or maintenance package with real equivalent completed unit and resource scope. No fee/margin/resource-free task proxy. Contracted activation/testing/software, repair/disassembly/mounting/installation or reboxing changes route and needs review.

- Identity requirement: Completed physical warehouse inspection sanitation or handling packages
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable equivalent completed physical packages per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Actual provider native unit/conversion, completed events and energy/material/asset/transport/treatment inclusions/exclusions required; no assumed technician count, duration or price equivalence.

#### shared_assets

Actual warehouse/racks/electric handling/reusable pallets/bins/scales/monitoring with matching complete asset equivalent and sole lifecycle owner. Cover manufacture/maintenance/actual replacements/retirement/EOL and all users/periods; no new pallet each turn or duplicate rental/wholeasset view.

- Identity requirement: Actual complete-life boxed-electronics warehouse and handling assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable complete asset-equivalent share per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need actual asset identity/native all-user job/life driver units, observed history and sourced remainder, uncertainty/sensitivity/update; no standard warehouse life or support cycles.

#### freight

Actual agreed receipt/dispatch/return transport uses complete factory-configured merchandise plus inherited/added packing and transported supports. Bare LCD panel, TV body without stand, or component material mass is not automatically payload. Carrier energy/vehicle assets and empty/multi-drop/return coverage owned once.

- Identity requirement: Actual complete boxed-television freight work
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributable complete-load freight work per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Actual configuration/load mass components, route distance/native conversion and real exclusive load shares needed; no guide model-weight/default dimensions, carrier occupancy or standard return-leg factor.

#### unused_count_returns

Actual unused Count packing returned externally and matched to original same-scope supplystock/unit and recipient acceptance. Retained/internal movements stay stock. Choose gross input plus separate matched return output OR consumed-only input omitting that return exchange; never duplicate deduction.

- Identity requirement: Actual outward unused additional transit-packing returns
- Flow property / unit: Count / Item(s)
- Amount rule: Actual attributable unused packing units returned per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual original pair/quantity/unit/receiver and chosen stock convention; no assumed return fraction, manufacturer-kit component credit or avoided packing benefit.

#### unused_mass_returns

Real unused mass-measured direct service product return, same standalone input scope and exact state/net mass. Commercial TV/accessory returns remain merchandise, not negative service supply. Used contaminated wipes/agents are waste.

- Identity requirement: Actual outward unused hygiene-supply returns
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable unused service supply mass returned per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actual product/state/original supply pairing and measured net outward quantity/recipient needed; no offset against unrelated input or manufacturer-included batteries/accessories.

#### whole_tv_waste

Only actual receiver-accepted discarded TV kit or whole unit with serial/configuration and associated stand/accessory/pack coverage recorded as transferred. Broken-panel observation or refused/returned stock alone is not discard or chemical release. Do not also transfer the same contained parts/cells/pack under separate output cards. Upstream commodity loss is linked outside service; actual handling/receiver treatment once.

- Identity requirement: Actual discarded television kits in declared transfer state
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable discarded whole-unit stream mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tv`

Range evidence need: Need actual serial/model/disposition/whole-stream mass and component/pack inclusion plus receiver treatment scope; no automatic whole-TV landfill, recycling yield or material release factor.

#### detached_parts_waste

Only actual physically separate parts/accessories/cells resulting from a recorded incident or received separate state and transferred to a specific receiver. No routine disassembly, battery removal or repair prescribed. Whole-unit/kit coverage and actual detached count/mass/state/classification prevent double-counting; actual chemistry/material follows records, not generic LCD or remote assumption.

- Identity requirement: Actual separately transferred already-detached electronic parts or accessories
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separately transferred detached-part waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual part/parent serial ID, separation origin, quantity/state/composition/receiver and whole-unit exclusion needed; no standard panel fraction, assumed battery chemistry or salvage/avoided production credit.

#### incident_material_waste

Conditional actual separately collected liquid/powder/fragments from a real incident, identified by physical state/composition and source component and receiver. Damage alone does not establish whether, or how much, LCD material, electrolyte or airborne pollutant has leaked or been released. Actual incident evidence is required; assume neither release nor zero. No dismantling/response recipe is supplied. Keep this stream separate from already counted whole parts, used absorbents, ordinary cleaning wastewater and direct species.

- Identity requirement: Actual separately contained nonaqueous incident material
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separately contained incident-material waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Real released/collected quantity, component/source/state/composition basis and transfer evidence required; no crack-to-leak equality, default fluid content or pure substance assumption.

#### packaging_waste

Actual already-separated outer or damaged inherited packing with material/state/remaining merchandise/receiver evidence. No ordinary opening/reboxing or new primary-pack manufacture is assumed. Exclude packing physically transferred with whole TV waste or retained mixed hygiene stream.

Residual inventory requirement after the independently identified cases `packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separately removed damaged television packing
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable separated packing-waste mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual carton/cushion/film component/net quantity/state and receiver; no default foam/cardboard proportions, every carton discarded on receipt or recycled-material substitution.

#### hygiene_waste

Actual used wipes/absorbents or mixed cleanup solids with measured retained fluid/particulate/agent state where present. Clean supply and component analyses are nonadditive views. Exclude separately transferred parts/incident liquid/packing and whole TV kit; captured material is not automatically direct emission.

- Identity requirement: Actual contained spent warehouse hygiene or mixed containment solids
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable mixed hygiene/containment-solid mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Actual net stream/component native quantity/basis/source and retained-fluid evidence needed; no supplied absorbent=spent mass, assumed absorption ratio or default chemical leakage.

#### wastewater

Actual collected surface-cleaning liquid with measured volume or compatible net mass-density-temperature conversion, actual mixture/load and receiver/treatment. No receiver/remote/battery washing or direct electronics liquid discharge inferred. Incident nonaqueous liquids and contained/retained cleanup fluid remain separate states.

- Identity requirement: Actual contained warehouse-surface cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable contained surface-cleaning wastewater volume per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Require actual collection/receiver native volume or mass-density basis and load/treatment scope; no utility-water to drain equality, electronics leakage percentage or default pollutant load.

#### direct_species

Only actual species/receiving medium and particle identity when relevant, measured or supported by matched activity/factor or measured whole-stream composition/fate. Panel cracking, included cell chemistry, whole TV mass, smell or captured/contained incident materials are not direct chemical/metal/particulate release evidence.

- Identity requirement: Actual independently evidenced direct warehouse species releases
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable directly released species mass per reference flow
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Require actual identity/medium/particle, native quantity and factor/composition/fate/conversion applicability; no panel/LED/backlight default chemical species, battery stock loss=emission or SDS=release.

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_gate_check | accepted_service | N>0 actual unique final unpowered commercial accepted consignment, actualmodel/serial/kit/stand/remote/cells/netmass/pack/state/time; no TVpiece or barepanel Count reference. |  |
| no_power_processing | whole route | No foreground activation/demo/electricaltest/software/repair/disassembly/standassembly/mount/install/routineprimaryrebox or unreviewed climate intervention, including contracted work. Consumer usepower and factorytest not service utility. |  |
| commodity_gate_check | non-exchange goods | Complete actualfactory kit/inheritedpack manufacturing upstream coverage, sourcegate assignedquantity nativeunits/source/allocation/conversion/exclusiveexits and actualcompatible loss owner/existingcoverage outside once. Includedcell/accessory not newconsumedserviceinput, unknownstate not loss/emission/zero. |  |
| resource_owner_check | all service resources | Allusers/periods/causal native driver units and idle/hygiene/openattempts, supplygross+outward OR consumedonlyomitreturn, completeassetlife observed+sourcedremainder/EOL/uncertainty and direct/provider/carrier/receiver scope once. |  |
| outlet_species_check | actual fates | ActualwholeTV/associatedkitpack vs detachedparts/containedincidentmaterial/separatepack/mixedhygiene/wastewater disjoint with realreceiver classification/treatment. No damage-to-chemical or battery/panel composition-to-release default, no automatic salvagecredit. |  |
| bilingual_raw_contract | all content | Raw identity7/FU5/boundary6/reference6/profile7 and all8CP12fields/10calculationbody-output nonempty; exactorderedIDs/rawoperands/propertyunits/evidence/sourceURLs and deterministic projection align withoutpreprocessing. Pass not actualquality/finalUUIDproof. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset after actual foreground collection and concrete identity verification |
| downstream_use | Physical boxed unpowered LCD/LED TV merchant add-on with separate complete factory-configured/packed commodity demand and actual compatible loss once; not total delivered TV lifecycle or consumer operation |
| allowed_use | Actual LCD receiver/LEDbacklight model/serial/region/factory kit/pack and unpowered ambient ownaccount B2B gate with real configuration/accessory/mass/condition/period qualifiers |
| excluded_use | Otherdisplay/panel/componentmanufacture, TVactivation/demo/software/test/repair/disassembly/standassembly/mount/install/rebox or unreviewedclimate, retail/agency/standalonelogistics; functionalperformance/safety or consumerusepower guarantee |
| required_metadata | Manufacturer/model/serial/SKU/region/release/merchant/buyer; actual kit/component presence/state/count/massunit/basis/source, standwithwithout/remote/celladapter scope, inheritedpacktare; actualunpowered condition/periods; alluserresources/providers/fullassetlife/carrier/receivers; originalgate assigned quantity/state/unit/source/conversion/allocation/exclusiveexits/lossowner/existingcoverage |
| required_quality_disclosure | Modelguide applicability and actualconfiguration/wholemass/pack/component compatibility; externalcondition and realdisposition/unknown differences, no invented powercheck; fullfactorygate/quantified losscoverage; allusernative drivers and full-life sourcedremainder uncertainty; concrete flow/support/empiricalrange gaps |
| update_trigger | Model/displaytech/region/kit/accessory/cellpresence/pack/source/acceptance changes; introduced power/processing/install/rebox/climate; warehouse/provider/asset/carrier/receiver scope change; actualdamage/discard/release or materialsource evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| sony-lcd-tv-model-handling | handbook | Sony, KD-X75K/X74K family Television Reference Guide, 2022, 5-038-158-01(1). https://pro.sony/support/res/manuals/5038/ac33ccb749a17b7a3391ebffd0210489/50381580M.pdf | Primary specific-model LCD/LED identity, actual stand/body and regional accessory distinction, panel/carton transport context only. No universal model weights/dimensions/person counts, installation/activation steps, operating/standby/annual4h/day energy or legal/safety acceptance default adopted. |
