---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-household-appliances
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ambient own-account wholesale of unpowered packed household fridge-freezers

## 1. Scope and Applicability

This PCR defines the physical ambient own-account B2B wholesale service for manufacturer-released packed electric household refrigerator-freezers which remain unpowered through receipt,holding,handling and accepted resale. Actual model/serial/configuration and original sealed circuit,charge/foam/other actually included constituents and package condition qualify the consignment. The appliance is merchandise,not an operated refrigeration machine for this service.

Exclude manufacture,compressor operation/demonstration/standby use,food cold storage,installation,charging/recovery/disassembly/repair,deliberate repacking,dedicated cold logistics,retail and fee agency. Actual incidents,quarantine,returns and known waste/release remain recorded; any extra actual specialist operation needs bounded scope review and complete coverage,not an invented default or omission.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-household-appliances |
| classification_refs | CPC3.0:61044; narrower:44811unpowered packed household fridge-freezer ambient own-account service |
| covered_products | Completed physical commercial B2B wholesale consignments of actual released packed unpowered household fridge-freezers |
| excluded_products | Manufacture; running/demonstrating/installing/charging/recovering/dismantling/repairing appliances; cold storage/logistics; retail/agency |
| representative_product | Accepted commercial consignment with actual model/serial,unpowered/circuit/source-constituent state,pack net/tare and actual condition/gates |
| production_route | Released packed unpowered appliance receipt -> ambient stock/handling/dispatch -> actual B2B acceptance; real exceptions and fates |
| market_state | Completed physical trade service; unchanged unpowered appliance and inherited constituents are nonexchange merchandise |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed ambient own-account unpowered packed household fridge-freezer wholesale consignment service |
| How much | 1 Item(s),one unique accepted commercial consignment,not one appliance,package,kg,charge or money |
| How well | Actual manufacturer/model/serial,unpowered and original circuit/charge/pack condition with buyer-agreed gate and recorded exceptions |
| How long or cycle | Actual receipt/holding/dispatch/return/acceptance and incident periods plus assigned idle/cleanup,cutoffs and full shared-asset life |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed ambient own-account unpowered packed household fridge-freezer wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | manufacturer_released_packed_household_electric_fridgefreezer; actual_manufacturer_model_serial_configuration; actual_unpowered_state_and_no_compressor_demo; factory_sealed_circuit_source_identity_charge_state; actual_inherited_foam_oil_battery_if_included; actual_accessories_and_original_package_instances; net_appliance_mass_and_original_package_tare; actual_transit_package_damage_acceptance_state; actual_receipt_stock_dispatch_acceptance_periods; ownership_resale_business_buyer; actual_incident_constituent_fates_and_receivers; actual_resource_provider_carrier_treatment_scope |

N>0 is actual unique accepted service count after documented reversals. Failed/quarantined/incident/unfinished-period work needs evidenced responsible cohort attribution even if no accepted service completes in that period.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Reference output is 1 Item(s),one commercial acceptance service,not appliance count or any constituent mass. |
| appliance_mass | nonexchange merchandise | Count and Mass | appliance units; packages; kg | Record actual unique serial/package gross,tare and net appliance mass with actual native factors/units/sources; net includes retained charge/foam/accessories. Do not add parent appliance and contained material masses as new stock. |
| constituent_state | incident materials | actual native source property | kg; actual state units | Use actual factory species/charge/foam/oil/battery record and unit/state/basis/source; composition/fate and direct measurement must match source. Conditional hazard is not a quantitative flow or all-material release. |
| native_support | all inventory | actual native property | actual native unit | Verify native material/provider/asset/medium property and unit conversion. Generic electricity requires actual Energy support,no thermal-content property or charge-to-service conversion. Verified electricity using an ILCD reference property named Net calorific value is allowed on its independently confirmed electrical-energy basis and unit group; the label does not authorize fuel heating-value factors. |


## 5. System Boundary

This add-on covers actual warehouse and trade duties with real incidents,not a complete appliance footprint or an operational cold-chain service. Manufacturer user safety information is qualitative risk/context only; stock/source/allocation/fate mathematics below are declared PCR methods,not measured Bosch release factors.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual manufacturer-released packed household electric fridge-freezer,unpowered,original circuit/charge and included constituents documented |
| starting_condition_role | Nonexchange merchandise including inherited factory circuit fluid,foam and other included material,not service makeup or operating asset |
| product_classification_scope | Narrower unpowered packed44811household refrigerator-freezer service inside61044group448 |
| recursive_input_rule | Actual physical providers require disjoint complete gates; no recursive same sale or duplicate resource/treatment/transport coverage |
| upstream_dataset_requirement | Actual complete compatible released appliance baseline including cabinet/compressor/electrical/circuit factory charge/foam/accessories/packing as supplied,or missing production assembled once outside service. Metal/plastic/foam or an operating cold-room dataset alone is incomplete. Real resource/provider/receiver scope must be compatible |
| disclosure | All qualifiers; actual model/serial/pack/unpowered/circuit/sourcecharge and inherited material states; stock/period/incident source/fate proof; original-gate demand/loss/coverage owner/integration; full provider/carrier/assets/receiver treatment boundaries |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all inventory | ALL traded appliance manufacture,original packaging and inherited factory charge/foam/oil/battery if actually included,for sold AND lost merchandise,remain outside service exchanges. A complete compatible released packed sealed-circuit appliance baseline plus quantified original-gate assigned demand/state/loss/other exits/coverage owner must integrate once outside this service before whole-chain completeness. Actual incident handling/receiving treatment and actual direct release inside this trade boundary remain service burdens once. |  |
| boundary_unpowered | normal route | Receive and resell unpowered household fridge-freezers in ambient logistics with inherited sealed circuit. No compressor/demo/installation/charging/recovery/disassembly/repair or dedicated cold logistics is included. Real additional specialist intervention or conditioning must be explicitly reviewed and fully inventoried; exclusions cannot hide actual work or imply zero. |  |
| boundary_risk | condition and source | Bosch user safety text supports actual transit condition/heavy handling and conditional damaged-circuit risk questions only. Damage/risk is not measured release or assumed collection,venting,decomposition or charge loss. No consumer chilling/freezing/defrosting/power/room-size/installation instructions become merchant operations or factors. | bosch-fridge-safety |
| boundary_constituents | inherited materials | Factory charge and other included material are inherited nonexchange merchandise constituents,not operating makeup inputs. Trace actual source species/quantity/unit/state/provenance and retained/export/waste/direct fates; no top-up or recovery is presumed. Any actual separately transferred useful material has no automatic credit and cannot reduce unrelated independent supplies or create negative makeup. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| unpowered_fridge_trade | Ambient unpowered fridge-freezer stock and own-account trade | required | Actual own-account ambient unpowered appliance resale with B2Bacceptance | One receiving/stock/handling/dispatch responsibility; actual order/cleanup/incident batches share infrastructure over periods | `accepted_service` |

A fridge as merchandise does not create an operated refrigeration/preservation node. Normal appliance remains unpowered and packaged; conditional real incident material/direct paths expand by exact identity and actual receiver rather than assumed vent/recovery. Any actual extra specialist operation is explicitly reviewed before use of its complete scope.

### Process: Ambient unpowered fridge-freezer stock and own-account trade (`unpowered_fridge_trade`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`warehouse_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Assigned measured warehouse electricity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Need actual warehouse meter periods,complete device/provider scope and causal all-user driver evidence; energy label power or annual consumption is not measured trade energy.

###### Actual liquid treated tap-water supply (`housekeeping_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Assigned measured supplied water / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need supply/use,outlets/retention and native density/temperature/composition evidence where relevant; wet packing or incident observations do not quantify wastewater or evaporation.

###### Actual independently recorded synthetic detergent supply (`actual_cleanup_supplies_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual supplied material / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Require SKU/formulation/dry material/active-carrier basis,actual stock/use/returns,native conversion and density/temp/source; mixture and its contained parts are not additional inputs.

###### Actual separately recorded polyethylene packaging film (`extra_outer_materials_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual added outer supply / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need material/native count/area/length/mass,tare and stock/conversion evidence; inherited insulation foam is not interchangeable with new shipping-foam supply.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed ambient own-account unpowered packed household fridge-freezer wholesale consignment service (`accepted_service`)

One actual unique ownership-purchase/resale commercial B2B consignment accepted for declared model/serial/configuration,unpowered state,original sealed circuit/constituents and package/condition gate. Appliance/pallet/package counts are separate merchandise measures.

- Selected flow: Completed ambient own-account unpowered packed household fridge-freezer wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_appliances`

Range evidence need: Need actual completion and appliance manufacturer/model/serial,configuration,source charge identity/state,net/gross/tare,period and accepted exceptions; no appliance=service,kg,charge or energy-rating equivalence.

##### Waste flows

###### Discarded complete packed household fridge-freezer (`discarded_whole_appliances_atomic_case`)

Conditional on independently recorded actual Discarded complete packed household fridge-freezer. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `discarded_whole_appliances`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete packed household fridge-freezer
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual whole-unit waste / N; cp_appliances.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_appliances`

Range evidence need: Need actual serial/model,gross/net/pack tare,retained constituents,state/disposition and original finished-gate demand/loss conversion owner; actual receiving treatment boundary includes residual refrigerant/foam treatment once.

###### Actual separately collected paper packaging waste (`actual_pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/tare/contamination and exclusive whole/part/waste route with transport/treatment scope. Collection or recycling marking alone is not actual recovery credit.


###### Actual separately collected metal packaging waste (`actual_pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/tare/contamination and exclusive whole/part/waste route with transport/treatment scope. Collection or recycling marking alone is not actual recovery credit.


###### Actual separately collected plastic packaging waste (`actual_pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/tare/contamination and exclusive whole/part/waste route with transport/treatment scope. Collection or recycling marking alone is not actual recovery credit.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_accepted | all duties | Use positive unique actual accepted commercial N with causal physical cohort/period shares. Failed/quarantined/returned orders,idle/cleanup,incident response and unfinished-period duties remain attributed even when no service completes in a period; appliance/pallet counts or margins are not N. |  |
| allocation_goods | nonexchange commodity | Close assigned opening,net receipts,buyer returns,closing,accepted transfers,supplier returns,other external exits and actual whole/part losses with exclusive serial/constituent states. Quarantine is internal. Match original finished-appliance demand/state/loss and actual material loss to compatible original quantities/conversions/coverage owner once outside service; do not multiply a whole appliance burden by leaked kg or count already-included factory charge production again. |  |
| allocation_supplies | independent supplies and unused_supply_return | S=assigned opening+true external net receipts-closing including retained recovered independent supplies. Gross INPUT S plus separate same-scope matched unused OUTPUT OR consumed-only INPUT S-return omitting the matched output. Internal recovery is not new receipt,no numeric S+return,double deduction or removal of waste/spill upstream burden. Inherited factory-material export belongs to its separate source ledger,never subtracted from independent makeup/cleaning inputs. |  |
| allocation_full_life | shared resources/assets/providers | For compatible metered periods,use cohort physical driver/all-user driver on complete resource scope. Complete asset equivalent=compatible cohort driver/complete lifetime driver across users/periods; include manufacture,maintenance/cleaning,replacements,EOL,observed life or history plus sourced remainder/termination,units,uncertainty/sensitivity/update. Complete provider representation replaces overlapping own coverage rather than adding it. |  |
| allocation_incident | actual constituents and outlets | Reconcile each actual inherited species/material source with charge retained in opening/received/accepted/returned/closing appliances,material retained inside actually discarded whole appliances or transferred waste parts as nonadditive content audits linked to their physical waste outlets,actual separate usable external transfer,contained independent waste,absorbed contents in other waste and actual direct release. Recovery/retention is not a receipt or export; unknown discrepancy is a blocker. Whole appliance/part/packing/absorbed-fluid/independent-fluid streams and composition views are exclusive. Receiver treatment including residual charge/foam and its emissions is covered once; never add it as merchant direct release. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_appliances | unpowered_fridge_trade | accepted trade and nonexchange appliance/constituent stock | Original event,meter/scope/source and fate record | consignment_id; manufacturer; model; serial; configuration; included_accessories; sealed_circuit_state; source_charge_record; foam_agent_record; battery_if_actual_record; product_unit_count; count_unit; physical_package_instance_id; package_quantity; package_unit; package_dimensions; dimension_unit; dimension_method; dimension_source; gross_package_mass; package_tare; net_appliance_mass; mass_unit; mass_conversion_factor; mass_conversion_unit; mass_conversion_source; material_composition; composition_basis; composition_source; retained_constituent_state; temperature; temperature_unit; condition_time; transit_condition; unpowered_evidence; opening; gross_receipts; receipt_tare; net_receipts; buyer_returns; closing; accepted_transfer; supplier_returns; quarantine_internal; other_exits; actual_whole_discard; actual_part_exit; disposition; physical_fate; receipt_time; dispatch_time; acceptance_time; ownership_gate; buyer_gate; original_gate_dataset_id; original_gate_reference; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_quantity_source; allocation_method; allocation_source; direct_assignment_evidence; source_cohort_driver; source_cohort_driver_unit; source_all_exit_driver; source_all_exit_driver_unit; assigned_source_quantity; assigned_source_unit; assigned_source_quantity_source; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_basis; loss_conversion; loss_conversion_unit; loss_conversion_source; state_change_evidence; burden_owner; already_included_loss_coverage; retained_charge_pack_fates; integration_result; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Link accepted unpowered model/serial/pack and included constituents to real exclusive stock/return/damage/fates. Use actual original finished-appliance source quantity/state and direct-or-allocated native provenance for assigned demand/loss outside service,not charge-mass-to-whole-appliance equivalence.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); appliance units; packages; kg; actual state units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_power | unpowered_fridge_trade | warehouse electricity and actual physical attribution | Original event,meter/scope/source and fate record | meter_id; period_start; period_end; opening_reading; closing_reading; energy_unit; device_scope; idle_cleanup; cohort_driver; cohort_driver_unit; all_user_driver; all_user_driver_unit; attribution_share; share_source; provider_included_scope; source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter actual warehouse-device scope/periods including idle/cleanup; allocate by compatible complete all-user physical drivers,not appliance operating labels. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_water | unpowered_fridge_trade | actual water supply,contained liquid and direct paths | Original event,meter/scope/source and fate record | source_id; period; supplied_volume; retained_volume; collected_volume; volume_unit; actual_outfall; receiver; composition; composition_basis; composition_source; density; density_unit; density_source; temperature; temperature_unit; stream_exclusion_ids; evaporation_evidence; fate_basis; fate_source; transport_scope; treatment_scope; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual supply and outlet streams with composition/receiver,retained-fluid exclusions and supported direct fates. No defrost or refrigerant-water proxy inferred. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3; actual composition units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_materials | unpowered_fridge_trade | independent service supplies and matched returns | Original event,meter/scope/source and fate record | material_id; SKU; native_quantity; native_unit; formulation; active_fraction; carrier_fraction; fraction_basis; fraction_source; opening; gross_receipts; receipt_tare; net_receipts; internal_issue; internal_recovery; closing_including_recovered; actual_use; matched_unused_external_return; source_scope_match; external_receiver; stock_representation; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; temperature; temperature_unit; actual_fate; fate_basis; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Close actual native independent supplies/stock/return provenance. Gross S with separate matched return or consumed-only S-return omitting output. Inherited appliance charge/foam/battery never becomes this supply or a net deduction. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native supply units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_provider | unpowered_fridge_trade | actual completed external job and complete scope | Original event,meter/scope/source and fate record | provider_id; job_id; native_quantity; native_unit; completed_gate; completion_time; actual_operation; bounded_extra_operation_review; resource_scope; electricity_coverage; full_asset_coverage; maintenance_EOL_coverage; carrier_empty_scope; treatment_scope; receiver_direct_release_coverage; upstream_dataset; overlap_owner; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | Verify actual native completion and full resource/asset/transport/treatment/direct-release scope. Actual specialist work outside selected no-recovery/repair route must be declared/reviewed,not treated as generic zero-resource job. | Item(s); actual provider units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_assets | unpowered_fridge_trade | full-life shared infrastructure attribution | Original event,meter/scope/source and fate record | asset_id; asset_native_unit; manufacture_scope; maintenance_cleaning_scope; replacement_scope; EOL_scope; burden_owner; provider_overlap; cohort_driver_identity; cohort_driver; cohort_driver_unit; lifetime_driver_identity; lifetime_driver; lifetime_driver_unit; all_user_driver; all_period_scope; observed_history; observed_unit; evidenced_remaining_use; remainder_unit; remainder_source; termination_basis; uncertainty; sensitivity; update_evidence; source; N | Use full actual lifecycle and compatible all-user/period lifetime drivers with observed life or history plus evidenced remaining use/termination,uncertainty/sensitivity/update. Product fridge lifetime is not warehouse asset life. | Item(s); actual compatible driver units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_transport | unpowered_fridge_trade | actual packed loads,legs and carrier coverage | Original event,meter/scope/source and fate record | leg_id; origin; destination; carrier; period; physical_package_instances; gross_load; gross_load_source; load_tare; load_tare_role; load_tare_source; packed_payload_state; net_packed_load; load_unit; distance; distance_unit; distance_source; load_conversion_factor; load_conversion_unit; load_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; empty_scope; carrier_resource_scope; extra_conditioning_review; commodity_service_owner; cohort_driver; all_user_driver; driver_unit; attribution_share; share_source; source; N | Use actual complete packed cargo/route/conversions and causal shares; vehicle/noncargo tare must not remove appliance packing/retained charge,or repeat parent and included constituents. | kg*km; actual native leg units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_waste | unpowered_fridge_trade | actual exclusive whole/part/pack/cleanup solid streams | Original event,meter/scope/source and fate record | event_id; model; serial; physical_package_id; component_id; material; retained_charge_or_foam_or_battery; whole_or_part; native_count; count_unit; wet_mass; dry_mass; mass_unit; material_fraction; fraction_basis; fraction_source; moisture; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_state; sample_time; supplied_material_link; dry_cleanup_material_mass; retained_fluid_quantity; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; contaminant_composition_basis; stream_exclusion_ids; stream_exclusion_quantity; stream_exclusion_unit; contamination; gross; tare; net; origin; actual_fate; receiver; transfer_gate; transport_scope; treatment_recovery_scope; residual_charge_foam_treatment_coverage; commodity_loss_link; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual exclusive whole/part/pack/absorbed-liquid streams and content views,receiver and complete transport/treatment including residual charge/foam. Dismantling is not assumed. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual material/count units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_incident | unpowered_fridge_trade | actual inherited constituent stock/source/fate and release | Original event,meter/scope/source and fate record | event_id; model; serial; constituent_location; source_appliance_gate; source_material_identity; source_species; source_quantity; source_unit; source_state; source_quantity_basis; source_quantity_source; factory_charge_record; factory_charge_unit; composition; component_fraction; fraction_basis; fraction_source; source_material_production_owner; upstream_already_included_coverage; opening_retained_quantity; received_in_appliance_quantity; closing_retained_quantity; retained_in_whole_appliance_waste_quantity; retained_in_whole_appliance_waste_unit; retained_in_whole_appliance_waste_state; retained_in_whole_appliance_waste_source; retained_in_whole_appliance_waste_conversion_factor; retained_in_whole_appliance_waste_conversion_unit; retained_in_whole_appliance_waste_conversion_source; whole_appliance_waste_transfer_link; whole_appliance_waste_content_exclusion_link; retained_in_part_waste_quantity; retained_in_part_waste_unit; retained_in_part_waste_state; retained_in_part_waste_source; retained_in_part_waste_conversion_factor; retained_in_part_waste_conversion_unit; retained_in_part_waste_conversion_source; part_waste_transfer_link; part_waste_content_exclusion_link; returned_in_appliance_quantity; accepted_in_appliance_quantity; internal_transfer; actual_usable_external_export; usable_state_evidence; external_receiver; contained_external_waste; container_gross; container_tare; container_net; container_unit; retained_absorbed_other_stream; other_stream_exclusion_ids; actual_direct_release; release_unit; receiving_medium; measurement_source; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; fate_fraction; fate_basis; fate_source; density; density_unit; density_source; temperature; temperature_unit; actual_intervention; bounded_operation_review; transfer_gate; transport_treatment_scope; receiver_emission_owner; unknown_discrepancy; fate_record_id; fate_quantity_operand_id; fate_quantity_unit; fate_quantity_state; fate_quantity_source; fate_conversion_factor; fate_conversion_unit; fate_conversion_source; shared_source_unit_state_applicability; physical_outlet_link; retained_content_exclusion_link; uncertainty; source_gate_loss_conversion_link; integration_result; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | Reconcile actual inherited charge/foam-agent/oil/battery material source and retained merchandise stocks with real usable exports,contained waste/absorption and measured direct media. Unknown discrepancy stays unresolved. Material retained in discarded whole appliances or waste parts must be recorded as linked nonadditive content audits with actual quantity/unit/state/source/conversion and transfer/exclusion links. Every source/fate quantity operand is joined by fate_quantity_operand_id to its unit/state/source/conversion record; shared source unit/state needs explicit proven applicability per operand. Actual specialist recovery/destruction needs reviewed operation/receiver scope; no factorycharge-as-makeup,automatic leak or credit. | kg; actual source stock/activity/state units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |
| cp_species | unpowered_fridge_trade | other direct service species and media | Original event,meter/scope/source and fate record | event_id; source_process; substance; receiving_medium; measured_release; release_unit; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; component_fraction; fraction_basis; fraction_source; fate_fraction; fate_basis; fate_source; measurement_source; uncertainty; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | Identify actual independent service substance/medium,then measure or apply compatible source-backed activity/factor/composition/fate once. No invented mixture-to-species or residual release. | kg; actual compatible activity units | each actual event and matched meter period | complete assigned periods/cutoffs and lifetime evidence | all actual node duties and shared users | per reference flow | Original calibration,compatible unit/state/basis/conversion sources,complete responsibility and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | Actual assigned physical quantity / positive unique N once; accepted_service is 1 Item(s). | assigned quantity; N; protocol | quantity per reference flow |  |
| supply_stock | independent supplies and unused_supply_return | S=assigned opening+true external net receipts-closing including retained recovered independent supplies. Gross INPUT S plus separate same-scope matched unused OUTPUT OR consumed-only INPUT S-return omitting the matched output. Internal recovery is not new receipt,no numeric S+return,double deduction or removal of waste/spill upstream burden. Inherited factory-material export belongs to its separate source ledger,never subtracted from independent makeup/cleaning inputs. | opening; true receipts; recovered closing; matched unused outward; representation; cp_materials | nonduplicated independent supply/return quantities |  |
| full_life_share | resources/assets/providers | For compatible metered periods,use cohort physical driver/all-user driver on complete resource scope. Complete asset equivalent=compatible cohort driver/complete lifetime driver across users/periods; include manufacture,maintenance/cleaning,replacements,EOL,observed life or history plus sourced remainder/termination,units,uncertainty/sensitivity/update. Complete provider representation replaces overlapping own coverage rather than adding it. | meterperiod/resource scope; cohort/all-user/lifetime driver and unit; observed/history/remainder/termination/source; cp_assets | attributed complete resource/asset equivalents |  |
| net_appliance_mass | nonexchange serial/package | Net appliance mass=sum actual unique physical package instance(gross-original shipping-package tare),converted once by actual mass factor/unit/source. Keep retained charge/foam/accessories inside net product,not another added mass. Use either each-instance data or documented total,not total times count again. | serial/physical package; gross/tare; native mass conversion/source; cp_appliances | net appliance commodity mass,nonexchange audit |  |
| original_gate_assignment | commodity outside service | Use actual directly measured/traced assigned source quantity/unit/state/source with direct evidence; otherwise assigned quantity=actual original-gate quantity*compatible source cohort driver/source all-exit driver,with positive complete denominator,units,allocation method/source. Do not add direct and allocated views. Original-gate whole/partial demand/loss matches actual appliance/material states and source conversions/coverage owner,integration once outside service. | originalgate quantity/unit/state/source; direct evidence OR method/source/cohort/allexitdrivers/units; assignedquantitysource; conversion/loss/coverage owner; cp_appliances | reproducible source-gate assigned commodity quantity |  |
| packed_freight | actual_freight | For actual legs,sum[(measured packed cargo native load*load-to-kg factor)*(actual distance*distance-to-km factor)*actual share]/N. Packed cargo includes factory/additional cargo packing and retained constituents; measured vehicle/noncargo tare role excludes only noncargo,not product packing. Factors and allocated share have compatible units/source/all-user drivers; no appliance plus constituent cargo double count. | actual packedload/state or gross-noncargo tare; native load/distance; factors/units/sources; share/all-user drivers; N; cp_transport | kg*km per reference service |  |
| inherited_constituent_fates | cp_incident and actual inherited outlets | For each actual source material/species,state and period,source retained/opening+actual received-in-appliance quantity=accepted/returned/closing retained quantity+material retained in actual whole-appliance waste+material retained in actual part waste+actual usable separate export+independent contained waste+absorbed contents already in other waste+actual direct release+explicit unresolved discrepancy,using exclusive compatible native units and evidence. Internal recovery/transfer is internal,not a new receipt/export. Quantify release by direct measurement or supported compatible actual activity*factor; only an incomplete whole-fluid factor needs actual component/fate fractions,not a complete species-specific factor. Retained-in-whole/part-waste terms are nonadditive content audits of linked existing physical Waste outlets,not new fluid Waste exchanges or a second mass/treatment quantity. No discrepancy is automatically air or destroyed; receiver-treatment emissions including those retained materials remain receiver scope once. Each source/received/retained/accepted/returned/closing/whole-waste-content/part-waste-content/usable/contained/absorbed/direct/unknown quantity operand must have an identified fate record with native unit,state,source and actual compatible conversion factor/unit/source. A shared source unit/state is permitted only with explicit applicability and compatibility evidence for every joined operand; no unit/state/source is inferred. | source species/quantity/unit/state/source; retained stocks; material retained in whole-appliance and part Waste with transfer/exclusion links; real exports/waste/absorption exclusions; per-operand native unit/state/source/conversion record; direct measurement OR activity/factor/composition/fate units/bases/sources; receiver owner; cp_incident | nonduplicated inherited stock/fate quantities and actual species release |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory | Exact actual flow,state/gate,property/unit and receiving medium must be confirmed before final use; conditional categories expand actual identities. | Full details/support proof |
| quality_incident | source/fates | Actual factory source quantities and retained/usable/contained/absorbed/direct fates with explicit unresolved discrepancy,no charge-to-leak or whole/part duplicate. | Model/serial original charge/material sources and measured fates/receivers |
| quality_complete | all responsibilities | Complete actual resource/provider/carrier/full-life asset/receiver-treatment coverage and original finished-appliance commodity demand/loss integration once outside service. | Meter/scope/driver/lifetime/treatment and originalgate/conversion/coverage/integration |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_electricity | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `warehouse_electricity` under `cp_power`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_power`; actual source-linked native records |
| housekeeping_water | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `housekeeping_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| actual_cleanup_supplies | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_cleanup_supplies` under `cp_materials`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_materials`; actual source-linked native records |
| extra_outer_materials | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `extra_outer_materials` under `cp_materials`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_materials`; actual source-linked native records |
| external_physical_jobs | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `external_physical_jobs` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| complete_life_assets | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `complete_life_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| actual_freight | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_freight` under `cp_transport`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_transport`; actual source-linked native records |
| unused_supply_return | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_supply_return` under `cp_materials`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_materials`; actual source-linked native records |
| usable_inherited_incident_material | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_inherited_incident_material` under `cp_incident`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_incident`; actual source-linked native records |
| discarded_whole_appliances | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `discarded_whole_appliances` under `cp_appliances`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `discarded_whole_appliances_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_appliances`; actual source-linked native records |
| actual_separated_parts | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_separated_parts` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| actual_pack_waste | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_pack_waste` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| spent_cleanup_solids | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `spent_cleanup_solids` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| contained_cleanup_liquid | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_cleanup_liquid` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| contained_inherited_incident_waste | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_inherited_incident_waste` under `cp_incident`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_incident`; actual source-linked native records |
| actual_inherited_species_release | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `actual_inherited_species_release` under `cp_incident`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_incident`; actual source-linked native records |
| other_actual_direct_substances | unpowered_fridge_trade | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_actual_direct_substances` under `cp_species`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_species`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### warehouse_electricity

Only actual lifting,picking,lighting,records equipment and attributable idle/cleanup. No appliance compressor,demo,standby rating or cooling-food energy enters this unpowered merchandise service.

Residual inventory requirement after the independently identified cases `warehouse_electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Electricity for actual ambient appliance handling and warehouse duties
- Flow property / unit: Energy / kWh
- Amount rule: Assigned measured warehouse electricity / N; cp_power.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_power`

Range evidence need: Need actual warehouse meter periods,complete device/provider scope and causal all-user driver evidence; energy label power or annual consumption is not measured trade energy.

#### housekeeping_water

Actual premises/equipment cleaning only. The route does not wash,defrost,make ice or humidify appliance merchandise. Separate actual environmental abstraction if present.

Residual inventory requirement after the independently identified cases `housekeeping_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual supplied warehouse-housekeeping water
- Flow property / unit: Volume / m3
- Amount rule: Assigned measured supplied water / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need supply/use,outlets/retention and native density/temperature/composition evidence where relevant; wet packing or incident observations do not quantify wastewater or evaporation.

#### actual_cleanup_supplies

Only actual native supplied materials for housekeeping or evidenced incident response. No routine sanitizer,sealant,refrigerant makeup,lubricant,battery or repair consumable is prescribed; factory constituents are not these supplies.

Residual inventory requirement after the independently identified cases `actual_cleanup_supplies_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual cleaning preparations,wipes,absorbents or filters supplied here
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual supplied material / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Require SKU/formulation/dry material/active-carrier basis,actual stock/use/returns,native conversion and density/temp/source; mixture and its contained parts are not additional inputs.

#### extra_outer_materials

Only actual newly added cases,straps,guards,labels or covers. Original carton,foam supports,films,accessory bags and factory packing stay with manufactured commodity outside service and are not repurchased each resale.

Residual inventory requirement after the independently identified cases `extra_outer_materials_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual additional outer shipping protection
- Flow property / unit: Mass / kg
- Amount rule: Assigned actual added outer supply / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need material/native count/area/length/mass,tare and stock/conversion evidence; inherited insulation foam is not interchangeable with new shipping-foam supply.

#### external_physical_jobs

Count only actual completed native contractual physical jobs with complete resources/assets and stated gate. Nonroutine charging,recovery,disassembly or repair is not silently authorized; any actual such provider intervention needs reviewed expanded operation and full coverage.

- Identity requirement: Actual completed counted external handling or incident-support jobs
- Flow property / unit: Count / Item(s)
- Amount rule: Assigned completed native jobs / N; cp_provider.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need actual completion unit,resource/asset/transport/treatment/direct-release coverage and overlap owner. Hour,mass,area-time or freight services require their own native exchange,not money-to-Count.

#### complete_life_assets

Include actual shared building,racks,lifts,IT/pallets/crates manufacture,maintenance/cleaning,replacements and end-of-life across users/periods. Traded refrigerator is merchandise,not a merchant refrigeration asset.

- Identity requirement: Full-life warehouse,handling and reusable-container equivalents
- Flow property / unit: Count / Item(s)
- Amount rule: Attributed complete asset equivalents / N; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need compatible cohort/lifetime driver identities/units,observed history and sourced remainder/termination,uncertainty/sensitivity/update. No product appliance lifetime or one reusable pallet per trip as service asset denominator.

#### actual_freight

Actual packed payload and legs,including declared carrier resources/empty running. This route is ambient unpowered goods logistics,not food cold-chain transport; any actual special conditioning requires explicit scope review.

- Identity requirement: Actual assigned freight for packed appliances,supplies and waste
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Assigned actual packed load-distance / N; cp_transport.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: Require measured packed cargo,vehicle/noncargo tare role,actual distances,native factors/units/sources and shares/all-user drivers; keep cargo packing/retained charge in actual gross cargo rather than count commodity constituents again.

#### unused_supply_return

Only unused actual independent service supplies at documented external receiver. Whole appliance returns,inherited charge/foam,retained recovered material and reusable assets are not netted against this supply ledger.

- Identity requirement: Actual matched usable unused service-material outward returns
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured same-scope unused outward / N; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

Range evidence need: Need native same-scope quantity/state/provenance: gross supply input S with separate matched output OR consumed-only S-return omitting that output,no second credit. Never subtract inherited factory-fluid export from unrelated cleaning supplies or create negative makeup.

#### usable_inherited_incident_material

Conditional actual separately transferred usable fluid/material with verified source and receiver,not presumed refrigerant recovery. Routine recovery/disassembly is excluded; any actual specialist intervention requires bounded reviewed extension. Fluid or charge retained in an appliance follows its actual accepted,returned,closing,discarded-whole-appliance or transferred-part fate; retention alone never creates a separate fluid export.

- Identity requirement: Actual usable inherited material transferred externally after incident
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual usable external transfer / N; cp_incident.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_incident`

Range evidence need: Need species/material/state,actual usable gate/source-charge origin and external quantity. Factory manufacture burden remains assigned once in commodity system,no automatic credit or deduction from operating makeup or independently supplied stock.

#### discarded_whole_appliances

Only actual waste decision and receiver gate. Transit dent,quarantine,failed identifier,buyer return or possible circuit damage alone does not establish whole appliance waste or charge release. Retained charge,foam,oil,battery if present and packing are included in measured whole state,not counted again as separated outputs.

- Identity requirement: Actual discarded complete packed appliance units
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual whole-unit waste / N; cp_appliances.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_appliances`

Range evidence need: Need actual serial/model,gross/net/pack tare,retained constituents,state/disposition and original finished-gate demand/loss conversion owner; actual receiving treatment boundary includes residual refrigerant/foam treatment once.

#### actual_separated_parts

Only actual parts separated by an incident or a separately reviewed intervention,not presumed dismantling. Expand real metal/plastic/glass/electrical/foam/battery state and receiver,with retained fluid/content represented in composition rather than duplicated whole appliance or fluid streams.

- Identity requirement: Actual separately transferred appliance parts or collected incident debris
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual separated parts / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual part/material gross/tare/net,retained content,origin and whole/part/fluid exclusions plus receiver/treatment. Hazard label,foam mass or battery presence does not itself quantify release or disposal.

#### actual_pack_waste

Record only actual removal and external receiver. Foam insulation in the appliance and original protective shipping foam are distinct; retained original packaging continues as merchandise,not automatically warehouse waste.

Residual inventory requirement after the independently identified cases `actual_pack_waste_paper_pack`; `actual_pack_waste_metal_pack`; `actual_pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual removed manufacturer or added shipping-package waste
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured separated package waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need material/tare/contamination and exclusive whole/part/waste route with transport/treatment scope. Collection or recycling marking alone is not actual recovery credit.

#### spent_cleanup_solids

Conditional actual collected solids with retained liquid/oil/chemical/particle contents from real cleaning or incident. Their contents are composition views,not extra liquid/fluid/part outlets; supplied cleaning-material origin and receiver stay traceable.

- Identity requirement: Actual spent cleanup wipes,absorbents,filters and mixed solids
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured actual spent solids / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need native supply link,retained-fluid amount/unit/basis/source,whole stream gross/tare/net,other-stream exclusions and actual treatment. Do not assume refrigerant is absorbed into a wipe from an unexplained charge deficit.

#### contained_cleanup_liquid

Only actual collected cleaning liquid with real composition and receiver. It is not defrost water by default; incident refrigerant/oil transferred as its own real contained stream must not be counted again here.

- Identity requirement: Actual contained warehouse-cleaning liquid to receiving treatment
- Flow property / unit: Volume / m3
- Amount rule: Assigned measured actual contained liquid / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need source,volume/density/temperature/composition units/bases and treatment/transport/exclusion evidence; no whole-appliance or fluid stock residual becomes wastewater.

#### contained_inherited_incident_waste

Conditional measured independently transferred refrigerant,oil or other actual incident material in container,to real receiving treatment. Actual recovery intervention if any needs separate reviewed scope. Retained-in-appliance charge/foam and absorbed fluid already in whole/part/cleanup waste are not this second outlet.

- Identity requirement: Actual contained nonusable inherited fluid or material at receiver gate
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured independent contained incident waste / N; cp_incident.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_incident`

Range evidence need: Need sourcecharge/material identity,container gross/tare/net,composition/fate basis/source,receiver/transfer/treatment coverage and stock exclusions. No default collection,destruction or automatic supply subtraction.

#### actual_inherited_species_release

Only evidenced actual direct incident species and medium from sealed charge,oil,foam agent or other included constituent. Factory charge amount,damage risk,odour or missing mass alone is not released mass. Keep downstream receiver-treatment emissions inside the actual provider treatment scope once,not duplicated as merchant direct releases.

- Identity requirement: Actual identified inherited-constituent species released to a receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Assigned measured or supported actual species release / N; cp_incident.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_incident`

Range evidence need: Need actual source quantity/species/state/unit/source,fate or complete species factor,component fractions/bases and evidence; no default venting,foam decomposition,charge=leak or battery-to-metal release.

#### other_actual_direct_substances

Actual non-inherited direct sources such as real supplied-cleaner spills require named substance/medium and supported measurement/activity. No generic total mixture,warehouse odour or unexplained water/material deficit is a species amount.

- Identity requirement: Other actual identified direct service substances and media
- Flow property / unit: Mass / kg
- Amount rule: Assigned supported actual direct quantity / N; cp_species.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`

Range evidence need: Require compatible activity/factor/composition/fate units,bases,sources and uncertainty; complete species-specific factors are not multiplied twice by composition and fate.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_completion | accepted_service | Require actual own-account B2B accepted commercial completion,all qualifiers and positive unique N. Appliance Count,pack Count,energy labels and refrigerant charge are not this Count service. |  |
| validate_unpowered | normal operation | Evidence manufacturer/model/serial,unpowered state,actual pack/transit/circuit/constituent condition. No user operating energy,cooling/defrosting,installation,recovery or repair is assumed; actual extra work requires declared reviewed inventory. | bosch-fridge-safety |
| validate_factory_fates | incident and inherited materials | Factory source material/species/quantity/unit/state/provenance and actual retained/usable/waste/absorbed/direct fates must be supported. Risk label,charge amount,odour or deficit is not release. Require explicit quantities/units/states/sources/conversions and transfer/exclusion links for material retained in whole-appliance Waste and part Waste; these are content audits,not extra fluid outputs. Every other source/fate quantity must have joined native unit/state/source/conversion evidence or explicitly documented compatible shared-source applicability. No factory production duplicated as makeup,unknown discrepancy set to zero,whole and part/fluid outputs doubled,or useful transfer netted from unrelated supplies. |  |
| validate_chain | commodity outside service | Use actual complete released packed household fridge-freezer baseline including cabinet/compressor/electrical/circuit/charge/foam/accessories/pack as actually supplied or assemble missing production once outside service. Original-gate assigned demand/state/loss quantities/conversions/source and exclusive exits/coverage owner/integration must match actual appliance/material states; direct release and receiving treatment inside service once. |  |
| validate_native_scope | all physical duties | Verify concrete native identity/property/unit and complete provider/carrier/shared full-life asset/receiver scope with all-user driver evidence. Actual independent and inherited sources remain distinct; no fuel-specific NCV/GCV factors for generic electricity,no fee-to-Count or consumer appliance life as warehouse-life default. Verified electricity using an ILCD reference property named Net calorific value is allowed on its independently confirmed electrical-energy basis and unit group; the label does not authorize fuel heating-value factors. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after concrete identity and quantitative evidence review |
| downstream_use | Physical ambient unpowered-appliance own-account wholesale add-on to complete released appliance commodity chain |
| allowed_use | Actual declared model/serial/configuration,pack/unpowered/circuit/sourcecharge states,period,acceptance and incident strata |
| excluded_use | Standalone full appliance footprint; operation/demo/coldchain/install/charge/recovery/disassembly/repair; commoditymanufacture; retail/agency; charge=leak or appliance=service conversion |
| required_metadata | All qualifiers; actual serial/sourcecharge/constituent/pack stock and incident fates; originalgate demand/state/loss/conversion/coverage owner/integration; complete resources/provider/carrier/assets/receiver scopes |
| required_quality_disclosure | Unresolved actual identities/support,foreground quantities/Range evidence,sourcecharge/fate discrepancies and actual receiver scope,manufacturer user-source limits,lifetime/conversion uncertainty |
| update_trigger | Changed model/configuration/constituents/charge/source/pack,warehouse operation,actual incident/intervention,provider/asset/carrier/receiver scope,acceptance or loss/fate evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-appliances | official_guidance | UNSD.CPC3.0 explanatory notes,division61,61044; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Household appliances448 includes44811household refrigerators/freezers; classification only. |
| bosch-fridge-safety | handbook | Bosch.Digital user manual,Safety for refrigerator-freezer; https://media3.bosch-home.com/Documents/8001162009/en-GB/1827680111033913867-layer.html | Primary user text: transit condition/heavy transport and conditional damaged-circuit risk only. No measured species/charge/default release,room size,power,cooling/defrosting/installation or universal quantitative warehouse requirement. |
