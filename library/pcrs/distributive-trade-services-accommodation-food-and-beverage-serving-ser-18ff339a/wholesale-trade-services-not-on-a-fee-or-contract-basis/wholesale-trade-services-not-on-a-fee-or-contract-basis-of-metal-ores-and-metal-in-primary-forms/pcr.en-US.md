---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-metal-ores-and-metal-in-primary-forms
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of new primary nonalloyed aluminium standard remelting ingots

## 1. Scope and Applicability

Own-account B2B ambient wholesale of NEW FACTORY-CAST PRIMARY NONALLOYED ALUMINIUM STANDARD REMELTING INGOTS in actual original supplier heat/grade/individual-ingot or bundle/strap/dunnage presentation. Actual standard ingot form only, not the entire manufacturer portfolio: t-bars, low-profile sows, foundry alloys, rolling/extrusion billets/profiles and scrap excluded. No merchant remelt/alloy/refine/saw/machine/polish/new assay/ingot wash/use is prescribed. Manufacturer sources establish qualitative primary nonalloyed standard-ingot and upstream-stage questions, not uniform purity/grade/ingot weight/bundle count/density/energy/low-carbon/recycled-zero/dust/recovery-credit claims. As-received net mass, metallic/elemental Al, surface oxide and moisture each retain actual chemistry/state/source basis; stain/quarantine is not waste or release.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-metal-ores-and-metal-in-primary-forms |
| classification_refs | CPC 3.0:61092 narrower; actual supplied goods41431 within414 |
| covered_products | Actual new primary nonalloyed standard aluminium remelting ingot own-account merchant service |
| excluded_products | Alloys/t-bars/sows/billet/profile/scrap, fee agency/retail/rental, manufacture and merchant remelt/refine/alloy/saw/machine/polish/new assay/wash/use |
| representative_product | Actual grade/heat/source analysis and standard shape, individual/bundle counts and member scope, as-received net mass/surface oxide/moisture, original strap/dunnage/pack |
| production_route | Actual complete primary casthouse release -> owned merchant record/condition receipt/ambient hold/electric handling -> final B2B acceptance after reversals |
| market_state | Completed merchant service; purchased/resold ingot and inherited contents/pack remain nonexchange linked commodity, no remelt or metal production service |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actual final completed owned/resold B2B consignment of declared new primary nonalloyed standard remelting ingots |
| How much | 1 Item(s) |
| How well | Real ownership/resale business buyer/final gate/source/reversals, actual heat/grade/primary nonalloyed standard form, net-state/oxide-moisture/bundle/pack and original commodity link, no new assay required |
| How long or cycle | Actual release/receipt/hold/dispatch/acceptance/reversal times/native durations/timezones/source and stock/meter/full-asset phases, no universal holding life |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account wholesale consignment of new primary nonalloyed aluminium standard remelting ingots |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; actual_grade; heat_id; primary_nonalloyed_evidence; standard_remelting_ingot_shape; heat_analysis_record; source_cast_release_record; original_bundle_ingot_membership; original_supplier_presentation; strap_dunnage_material_identity; as_received_net_mass_coverage; surface_condition_record; oxide_chemistry_identity; ingot_count; bundle_count; net_as_received_ingot_mass; strap_dunnage_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Count | Item(s) | Unique actual final owned/resold B2B acceptance after reversals, N>0; ingot/bundle/metal kg/purity/price not service count. |
| received_net_pack | cp_ingots; cp_freight; cp_outlets | Mass | kg | Same actual heat/shape/state/method single-ingot versus bundle and strap/dunnage net/gross/oxide-moisture scope. EACH compatible count once/TOTAL unchanged; no universal ingot/bundle or generic density. |
| chemical_state | cp_ingots; cp_outlets; cp_environment | Mass | kg | Oxide chemistry/mass basis and actual original-state equivalence separate from metallic/elemental Al, lost source demand and species releases. Independent component/retained unit/basis/method/state/source/sampletime and density-temperature units, nonadditive whole streams. |
| NET_supply_driver | cp_supplies | Mass | kg | Actual NET material receipts exclude container tare; same-stock return convention and each numerator/denominator own native evidence with positive compatible denominator. |
| packed_freight | freight | Mass * Length | t*km | Actual packed received ingots/surfaces/strap-dunnage/support cargo, only noncargo tare; EACH count once/TOTAL unchanged, each unique loadleg share INSIDE SUM then N once. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | New factory-cast primary nonalloyed aluminium standard remelting ingots at actual supplier release, actual grade/heat chemistry and original single-ingot/bundle/strap/dunnage packing, declared as-received surface oxide/moisture state. |
| starting_condition_role | Actual complete primary cast-metal release for merchant add-on, not raw alumina, scrap, alloy/billet/profile or a remelted/use-ready transformation. |
| product_classification_scope | CPC 3.0:61092 narrower standard primary nonalloyed aluminium-ingot service; actual goods41431 in414, not all metals/ores or scrap recycling. |
| recursive_input_rule | Purchased/resold ingots, inherited surface contents/straps/dunnage/pack and commercial returns are nonexchange merchandise stock/throughflow, not service metal input, remelt stock or another wholesale service. |
| upstream_dataset_requirement | Link actual complete bauxite mining/alumina refining/electrolytic primary-metal production/casthouse casting/actual finish/release/original pack gate, including all embodied lost commodity outside service once; raw alumina alone is incomplete. Quantify actual original assigned demand, native chemistry/state equivalence, baseline/additional stage/loss coverage and exclusive owner. Actual missing stages or additional original commodity demand MUST be integrated into the linked commodity system outside this service exactly once before complete-chain use. A pending plan or merely recorded amount is insufficient. Require completed integration status, actual dataset/link, timestamp/timezone, source, exclusive owner, integrated native quantity/basis and coverage/once evidence; unverified or incomplete integration blocks complete-chain use. |
| disclosure | Actual primary/nonalloyed standard-shape/grade/heat analysis/source, bundle membership and net/gross/oxide/moisture/pack bases, no new merchant assay, conditions/times/ownership/final buyer gate, original all-terminal/source-loss integration evidence and gaps. No grade/purity/ingot weight/density/low-carbon/recycled-zero/energy/recovery-credit defaults. |

### Boundary Rules

| rule_id | Rule |
| --- | --- |
| merchant_route | Actual record/pack/surface-condition receipt, ordinary ambient hold/electric handling and final B2B handover. No merchant remelt, alloy/refine, saw/machine/polish, ingot wash, new assay or use; actual contracted extras also require reviewed scope. Inherited primary production/casting/oxide is not merchant technology. |
| original_commodity | All ingot/surface/pack upstream including actual embodied loss outside service exchanges once. Require compatible original assigned source demand and exclusive baseline/additional stage/loss owner coverage; actual service containment/receiver treatment once here. Actual missing stages or additional original commodity demand MUST be integrated into the linked commodity system outside this service exactly once before complete-chain use. A pending plan or merely recorded amount is insufficient. Require completed integration status, actual dataset/link, timestamp/timezone, source, exclusive owner, integrated native quantity/basis and coverage/once evidence; unverified or incomplete integration blocks complete-chain use. |
| metal_oxide_state | As-received net ingot mass excludes defined pack but may include declared retained oxide/moisture; elemental-metal quantity is a different measure. Oxide mass includes non-Al constituents; actual chemistry/state equivalence required, not original Al-metal loss or direct Al release. Oxidation/water mass change not automatically commodity loss or zero. |
| period_reject | Actual cohorts/source/stock/meter/full-asset periods and timezone explicit. Quarantine, staining or off-spec observations need real release/return/closing/discard decisions; unaccepted/open/reversed resources retained while final N excludes unresolved acceptances. Unknown losses never default zero. |
| stream_owners | Actual whole ingot/bundle, independent fragment/pack/capture/free contained fluid and metal/oxide/moisture/component/species views exclusive. Receiver/medium evidence determines fate, not metal value or surface appearance. Direct/provider/carrier/receiver utility/assets/freight/treatment one owner; no automatic remelt/recycling/avoided-production credit. |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| primary_aluminium_ingot_wholesale | Own-account primary nonalloyed standard aluminium-ingot wholesale | required | Actual specified primary-standard-ingot owned/resold B2B consignment | foreground | accepted_service |

Merchant consignment/cohort receipt/record/condition, ambient hold/electric handling, conditional hygiene/incident/changeover and actual handover/receiver events link real periods and all consumers. Open/quarantined/rejected resources remain. No merchant mining/refining/electrolysis/casting or metal-yield process from traded ingot identity.

### Process: Own-account primary nonalloyed standard aluminium-ingot wholesale (`primary_aluminium_ingot_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: sum(actual_utility_quantity*documented_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual native meter kWh period/all-consumer causal drivers and idle/open coverage, provider and energy-property support; no smelter kWh per aluminium tonne.

###### Actual liquid treated tap-water supply (`site_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: actual_utility_quantity converted to m3*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual supplier/meter volume, real hygiene event/period/native conversion/share and receiver coverage; no washwater inferred from oxide stain.

###### Actual independently recorded synthetic detergent supply (`service_consumables_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: selected actual gross or consumed NET material mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material identity/composition, NET opening/receipts/closing, native EACH/TOTAL/per-piece or density evidence and paired unused return; no default dust or cleanup ratio.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account wholesale consignment of new primary nonalloyed aluminium standard remelting ingots (`accepted_service`)

One real final owned/resold B2B accepted commercial consignment after reversals, actual heat/grade/nonalloyed-primary standard-ingot source/bundle/net-state/packing/time qualifiers. Service Count not ingot piece, bundle or kg elemental aluminium.

- Selected flow: Completed own-account wholesale consignment of new primary nonalloyed aluminium standard remelting ingots
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ingots`

Range evidence need: Need real merchant ownership/resale business buyer/gate/source/reversals and unique final acceptance, heat analysis/source grade/shape and actual counts/as-received net mass/strap-dunnage/condition/time; no ingots per service default.

##### Waste flows

###### Discarded complete primary nonalloyed aluminium standard ingot (`whole_ingot_bundle_waste_atomic_case`)

Conditional on independently recorded actual Discarded complete primary nonalloyed aluminium standard ingot. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `whole_ingot_bundle_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete primary nonalloyed aluminium standard ingot
- Flow property / unit: Mass / kg
- Amount rule: actual whole ingot-bundle receiver NET stream mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual decision/heat-parent membership/native transfer net-tare, metal/oxide/moisture chemistry and receiver classification/treatment; not scrap by surface appearance.

###### Actual separately collected paper packaging waste (`pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: actual separate packing receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual strap/dunnage identity/material/native net-tare and contamination contents/receiver fate, not inferred ingot count times nominal pack factor.


###### Actual separately collected metal packaging waste (`pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: actual separate packing receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual strap/dunnage identity/material/native net-tare and contamination contents/receiver fate, not inferred ingot count times nominal pack factor.


###### Actual separately collected plastic packaging waste (`pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: actual separate packing receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual strap/dunnage identity/material/native net-tare and contamination contents/receiver fate, not inferred ingot count times nominal pack factor.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule |
| --- | --- |
| causal_events | Trace actual event-to-consignment/cohort; otherwise evidenced causal physical handling/space-time drivers over all consumers/periods including idle/open/reject work. documented_share=numerator_driver/denominator_driver on compatible native basis, positive denominator. No automatic ingot count, metal purity, bundle nominal mass or price/revenue allocation. |
| original_source_assignment | Outside service direct actual source-to-target trace OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers only with positive complete compatible all-terminal records including closing/useful-other/returns/proven loss, each native quantity/unit/basis/method/state/time/source/link/owner. commodity_source_gate_demand=assigned_source_gate_quantity in original primary standard-ingot/surface/pack state including evidenced state-change share; dispatch+discard or oxide mass is not original demand. Actual baseline/additional/loss quantities/conversion/coverage/exclusive owner once. Actual missing stages or additional original commodity demand MUST be integrated into the linked commodity system outside this service exactly once before complete-chain use. A pending plan or merely recorded amount is insufficient. Require completed integration status, actual dataset/link, timestamp/timezone, source, exclusive owner, integrated native quantity/basis and coverage/once evidence; unverified or incomplete integration blocks complete-chain use.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| net_supply_return | S=opening+net_receipts-closing includes retained recovery; net_receipts actual material NET excluding supply-container tare. Gross S/N plus separately recorded actual matched usable unused outward output OR consumed-only (S-usable_outward_return)/N and OMIT matching return exchange. Same-scope standalone supply only; not inherited ingot/oxide/strap/dunnage and no second credit. |
| full_asset_life | Actual full manufacture/maintenance/replacement/retirement/EOL by compatible job_driver/lifetime_all_user_driver. Lifetime=observed all-user usage+sourced remaining service with native equivalence, all periods/users, uncertainty/sensitivity/update; unique provider/carrier ownership and total/N once. No new support each bundle. |
| freight_receiver | Each unique load+leg its documented_service_share=numerator_driver/denominator_driver INSIDE SUM then /N once. Cargo actual received-state ingots/bundles/surface/strap/dunnage/pack/support, EACH compatible count once/TOTAL unchanged, subtract only noncargo carrier tare. Actual receiver transport/treatment and whole/component views exclusive once, no recovery credit default. |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_ingots | primary_aluminium_ingot_wholesale | Actual node exchanges/events and nonexchange commodity-state audit quantities | Actual primary-ingot grade/heat, net mass/chemistry/bundle, ownership and complete source ledger | ingot_count; ingot_count_unit; ingot_count_basis; ingot_count_method; ingot_count_state; ingot_count_source; ingot_count_sample_time; bundle_count; bundle_count_unit; bundle_count_basis; bundle_count_method; bundle_count_state; bundle_count_source; bundle_count_sample_time; ingots_per_bundle; ingots_per_bundle_unit; ingots_per_bundle_basis; ingots_per_bundle_method; ingots_per_bundle_state; ingots_per_bundle_source; ingots_per_bundle_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; net_as_received_ingot_mass; net_as_received_ingot_mass_unit; net_as_received_ingot_mass_basis; net_as_received_ingot_mass_method; net_as_received_ingot_mass_state; net_as_received_ingot_mass_source; net_as_received_ingot_mass_sample_time; net_bundle_ingot_mass; net_bundle_ingot_mass_unit; net_bundle_ingot_mass_basis; net_bundle_ingot_mass_method; net_bundle_ingot_mass_state; net_bundle_ingot_mass_source; net_bundle_ingot_mass_sample_time; gross_bundle_mass; gross_bundle_mass_unit; gross_bundle_mass_basis; gross_bundle_mass_method; gross_bundle_mass_state; gross_bundle_mass_source; gross_bundle_mass_sample_time; strap_dunnage_tare; strap_dunnage_tare_unit; strap_dunnage_tare_basis; strap_dunnage_tare_method; strap_dunnage_tare_state; strap_dunnage_tare_source; strap_dunnage_tare_sample_time; whole_packed_cargo_mass; whole_packed_cargo_mass_unit; whole_packed_cargo_mass_basis; whole_packed_cargo_mass_method; whole_packed_cargo_mass_state; whole_packed_cargo_mass_source; whole_packed_cargo_mass_sample_time; ingot_volume; ingot_volume_unit; ingot_volume_basis; ingot_volume_method; ingot_volume_state; ingot_volume_source; ingot_volume_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; heat_Al_mass_fraction; heat_Al_mass_fraction_unit; heat_Al_mass_fraction_basis; heat_Al_mass_fraction_method; heat_Al_mass_fraction_state; heat_Al_mass_fraction_source; heat_Al_mass_fraction_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_metal_mass; retained_metal_mass_unit; retained_metal_mass_basis; retained_metal_mass_method; retained_metal_mass_state; retained_metal_mass_source; retained_metal_mass_sample_time; oxide_quantity; oxide_quantity_unit; oxide_quantity_basis; oxide_quantity_method; oxide_quantity_state; oxide_quantity_source; oxide_quantity_sample_time; oxide_Al_mass_fraction; oxide_Al_mass_fraction_unit; oxide_Al_mass_fraction_basis; oxide_Al_mass_fraction_method; oxide_Al_mass_fraction_state; oxide_Al_mass_fraction_source; oxide_Al_mass_fraction_sample_time; elemental_Al_in_oxide; elemental_Al_in_oxide_unit; elemental_Al_in_oxide_basis; elemental_Al_in_oxide_method; elemental_Al_in_oxide_state; elemental_Al_in_oxide_source; elemental_Al_in_oxide_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; chemical_state_equivalence; chemical_state_equivalence_unit; chemical_state_equivalence_basis; chemical_state_equivalence_method; chemical_state_equivalence_state; chemical_state_equivalence_source; chemical_state_equivalence_sample_time; compatible_original_ingot_equivalent; compatible_original_ingot_equivalent_unit; compatible_original_ingot_equivalent_basis; compatible_original_ingot_equivalent_method; compatible_original_ingot_equivalent_state; compatible_original_ingot_equivalent_source; compatible_original_ingot_equivalent_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; actual_loss_quantity; actual_loss_quantity_unit; actual_loss_quantity_basis; actual_loss_quantity_method; actual_loss_quantity_state; actual_loss_quantity_source; actual_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; target_exit_driver; target_exit_driver_unit; target_exit_driver_basis; target_exit_driver_method; target_exit_driver_state; target_exit_driver_source; target_exit_driver_sample_time; sum_exit_drivers; sum_exit_drivers_unit; sum_exit_drivers_basis; sum_exit_drivers_method; sum_exit_drivers_state; sum_exit_drivers_source; sum_exit_drivers_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; integrated_additional_stage_quantity; integrated_additional_stage_quantity_unit; integrated_additional_stage_quantity_basis; integrated_additional_stage_quantity_method; integrated_additional_stage_quantity_state; integrated_additional_stage_quantity_source; integrated_additional_stage_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; actual_grade; heat_id; primary_nonalloyed_evidence; standard_remelting_ingot_shape; heat_analysis_record; source_cast_release_record; original_bundle_ingot_membership; original_supplier_presentation; strap_dunnage_material_identity; as_received_net_mass_coverage; surface_condition_record; oxide_chemistry_identity; composition_mass_basis; percent_to_ratio_source; oxide_metal_state_conversion_source; retained_content_membership; no_new_merchant_assay; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; source_gate_allocation_source; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; actual_missing_stage_ids; additional_stage_integration_status; additional_stage_integration_dataset_link; additional_stage_integration_time; additional_stage_integration_time_zone; additional_stage_integration_source; additional_stage_integration_owner; additional_stage_integration_coverage; additional_stage_integration_once_evidence; receipt_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | Establish actual merchant ownership purchase/resale, business buyer and final acceptance gate/source/reversals, not receipt alone. Trace actual primary nonalloyed standard shape/grade/heat and existing heat-analysis/cast-release records, without prescribing a new assay. Declare individual-ingot/bundle/strap/dunnage membership before native counts/mass. As-received net ingot excludes packing but declares any oxide/moisture coverage; it is not automatically pure elemental metal. Actual heat chemistry, oxide identity/fraction/state-equivalence and retained water/fluid each need independent native quantity/unit/basis/method/state/source/sampletime. Volume-density conversion only if actual representative geometry/density-temperature sources support it. Source assignment uses actual direct source-target trace OR positive complete compatible all-terminal drivers including closing/useful others/returns/proven loss, each native quantity/basis/state/source/link/owner; chemical-state gains or water changes cannot be unexamined loss. Actual missing stages or additional original commodity demand MUST be integrated into the linked commodity system outside this service exactly once before complete-chain use. A pending plan or merely recorded amount is insufficient. Require completed integration status, actual dataset/link, timestamp/timezone, source, exclusive owner, integrated native quantity/basis and coverage/once evidence; unverified or incomplete integration blocks complete-chain use.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Actual native quantity units and sourced compatible conversion, date/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Actual node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw records/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_supplies | primary_aluminium_ingot_wholesale | Actual node exchanges/events and nonexchange commodity-state audit quantities | Actual NET service consumable and additional external-protection stocks | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; material_identity; net_material_receipt_excluding_container_tare; standalone_stock_scope; matched_return_ids; unused_return_convention; inherited_ingot_strap_exclusion; owner; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect actual site-hygiene agents/wipes/absorbents/filters or added outer protection only when used. Net material receipts exclude supply-container tare; original ingot, oxide, straps and dunnage are commodity, not fresh service inputs. Native EACH/TOTAL, actual composition and count-mass/density conversions, opening/NET receipts/closing with retained recovery. Gross supply with separately matched usable unused outward return OR consumed-only supply omitting matching return exchange; no automatic re-strapping, polishing agent or inherited-material credit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native quantity units and sourced compatible conversion, date/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Actual node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw records/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_utilities | primary_aluminium_ingot_wholesale | Actual node exchanges/events and nonexchange commodity-state audit quantities | Actual warehouse/electric-handling and conditional site-hygiene utility meters | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; provider; all_consumers; interval_start; interval_end; provider_carrier_overlap; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Use actual interval meters/supplier quantities and native all-consumer causal numerator/denominator drivers. Actual lighting/handling/site hygiene only, measured versus allocated scope explicit. No alumina refining/electrolysis/casting/remelting or ingot sawing/polishing/washing demand, no primary-production energy factor multiplied into this service. Provider/carrier covered resources excluded. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native quantity units and sourced compatible conversion, date/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Actual node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw records/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_provider | primary_aluminium_ingot_wholesale | Actual node exchanges/events and nonexchange commodity-state audit quantities | Actual physically defined contracted merchant handling package | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; provider_id; contract_id; operation_scope; excluded_operations; utility_asset_freight_treatment_coverage; event_ids; owner; period_id; time_zone; time_source | Require actual physical package/equivalence/period/share and utility/material/assets/freight/treatment coverage. Contracted new assay, polishing, cutting, remelt/refine/alloy or use remains extra physical work requiring reviewed scope, not hidden logistics. No metal-price, grade-purity or ingot-capacity package factor. | Actual native quantity units and sourced compatible conversion, date/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Actual node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw records/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_assets | primary_aluminium_ingot_wholesale | Actual node exchanges/events and nonexchange commodity-state audit quantities | Full-life warehouse/handler/reusable-support assets and all-user records | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; manufacture; maintenance; replacement; retirement; end_of_life; all_consumers; all_periods; remaining_life_source; observed_boundary; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; traded_ingot_exclusion; period_id; time_zone; time_source | Identify real warehouse/racks/electric handlers/reusable support independent of traded ingots and inherited dunnage. Full manufacture, actual maintenance/replacement/retirement/EOL, job/observed all-user usage plus sourced remaining service, compatible native units/equivalence and every period/user including idle/open/reject. Record uncertainty/sensitivity/update and provider/carrier one-owner exclusions; no new pallet each bundle. | Actual native quantity units and sourced compatible conversion, date/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Actual node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw records/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_freight | primary_aluminium_ingot_wholesale | Actual node exchanges/events and nonexchange commodity-state audit quantities | Actual unique load-leg packed-ingot freight records | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; as_received_ingot_bundle_mass; as_received_ingot_bundle_mass_unit; as_received_ingot_bundle_mass_basis; as_received_ingot_bundle_mass_method; as_received_ingot_bundle_mass_state; as_received_ingot_bundle_mass_source; as_received_ingot_bundle_mass_sample_time; inherited_added_pack_mass; inherited_added_pack_mass_unit; inherited_added_pack_mass_basis; inherited_added_pack_mass_method; inherited_added_pack_mass_state; inherited_added_pack_mass_source; inherited_added_pack_mass_sample_time; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_state; actual_carried_support_mass_source; actual_carried_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; actual_ingot_bundle_membership; oxide_moisture_pack_coverage; record_owner; empty_return_coverage; carrier_asset_fuel_coverage; N; time_zone; time_source | Actual shipped individual ingots/bundles include as-received surfaces/moisture according to measured scope, original/added strap/dunnage/pack and carried supports even reusable. Metal-only or dry elemental-Al mass is not automatically whole cargo. EACH compatible mass times actual count once/TOTAL unchanged; only noncargo vehicle/container tare deducted. Each unique load+leg own native numerator/denominator service share inside work sum then /N once; actual distance/work conversions and empty/provider/receiver coverage. | Actual native quantity units and sourced compatible conversion, date/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Actual node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw records/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_outlets | primary_aluminium_ingot_wholesale | Actual node exchanges/events and nonexchange commodity-state audit quantities | Exclusive actual whole-ingot/bundle, fragment, pack and containment exits | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_metal; retained_metal_unit; retained_metal_basis; retained_metal_method; retained_metal_state; retained_metal_source; retained_metal_sample_time; retained_oxide; retained_oxide_unit; retained_oxide_basis; retained_oxide_method; retained_oxide_state; retained_oxide_source; retained_oxide_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; event_id; transfer_id; parent_heat_ingot_bundle_ids; fragment_ids; whole_ingot_bundle_exclusion; separate_fragment_exclusion; separate_pack_exclusion; mixed_capture_exclusion; free_contained_fluid_exclusion; component_identity; oxide_chemical_state_source; retained_content_fate; receiver_id; receiver_classification; treatment_owner; usable_supply_return_link; actual_export_not_closing; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Follow actual heat/ingot/bundle/fragment/packing genealogy and measured transferred state. Stain/oxidation/quarantine is not waste; require actual decision/receiver classification. Whole ingot/bundle includes measured retained metal/oxide/moisture/pack member scope; real independent fragments/pack/captured solids/free contained liquid exclude that membership. Each component/retained metal/oxide/water/fluid has own native units/basis/method/state/source/sampletime. Oxide chemical-Al content is not original metal loss or direct release. Real useful export/waste receiver transport/treatment once, no assumed remelt/recovery credit; retained stock not export, consumed-only supplies omit paired unused return. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native quantity units and sourced compatible conversion, date/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Actual node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw records/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_environment | primary_aluminium_ingot_wholesale | Actual node exchanges/events and nonexchange commodity-state audit quantities | Actual species/particle, chemical state and receiving-medium evidence | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; particle_basis; receiving_medium; factor_scope_complete; composition_basis_source; chemical_state_source; contained_transfer_exclusion; release_owner; measurement_location; time_zone; time_source | Require actual species/particle identity, chemical state and receiving medium before elementary identity selection. Use measured release or applicable native activity/factor with composition/fate only where factor needs them; complete species factor already covering proportions not multiplied again. Oxide on ingot, captured dust, metal presence, stock gap or moisture gain does not establish airborne elemental aluminium, species factor or zero. Retained/captured/contained receiver streams excluded, no primary smelting factor in warehouse releases. | Actual native quantity units and sourced compatible conversion, date/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance and cross-period retained resources | Actual node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw records/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_ingots | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals. Require real merchant ownership/resale business buyer/final gate/source/reversal evidence, N>0 before division. Canceled/open/quarantined/rejected/reversed resources remain in actual periods/cohorts, not invented final service. | Actual ownership/buyer/acceptance/reversal/time and heat-bundle records | Unique final completed service N |  |
| ingot_bundle_mass | cp_ingots | Use actual net_as_received_ingot_mass/net_bundle_ingot_mass with declared surface oxide/moisture coverage, separate strap_dunnage_tare and gross_bundle_mass on matching state. bundle_count*ingots_per_bundle only when actual heat/member counts match, never nominal universal. EACH compatible mass*actual_count once/TOTAL unchanged; ingot_volume*density only with actual representative volume/density-temperature native sources, not generic aluminium density. Whole ingot/metal/oxide/moisture views are nonadditive. | Actual count/member/net-gross-tare/volume-density-temperature measurements | Qualified as-received ingot/bundle and packing audit |  |
| oxide_elemental_state | cp_ingots; cp_outlets | Only actual compatible chemistry supports elemental_Al_in_oxide=oxide_quantity*oxide_Al_mass_fraction, actual mass-fraction basis after sourced percent-to-ratio conversion. This is chemical Al content in that oxide, not emitted Al, metallic Al, or proof of original source loss. Do not assume pure Al2O3, universal purity or subtract moisture/oxide without measured membership. Any original-metal/state-equivalent demand or loss requires actual chemical_state_equivalence and compatible_original_ingot_equivalent on source-gate basis with native conversion/state/source/time and existing coverage, not kg oxide=kg original metal. | Actual heat/oxide chemistry/mass basis and native original-state equivalence evidence | Qualified oxide/elemental/original-state audit without release inference |  |
| source_gate_demand | cp_ingots | Direct actual source trace OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers with positive complete compatible all-terminal native records inclclosing/useful-other/returns/proven loss. commodity_source_gate_demand=assigned_source_gate_quantity in complete original primary standard-ingot/surface/pack gate including evidenced state-change share. Reconcile original input/each exclusive exit, baseline_quantity/additional_stage_quantity/loss_adjustment_quantity native equivalence/conversion/state/coverage/exclusive owner once outside, not final shipped+discard or unexamined oxidation gain. Actual missing stages or additional original commodity demand MUST be integrated into the linked commodity system outside this service exactly once before complete-chain use. A pending plan or merely recorded amount is insufficient. Require completed integration status, actual dataset/link, timestamp/timezone, source, exclusive owner, integrated native quantity/basis and coverage/once evidence; unverified or incomplete integration blocks complete-chain use.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Actual direct/all-terminal source, original-state baseline/additional/loss/integration records | Linked actual complete primary-ingot demand/loss integrated outside once |  |
| utility_share | cp_utilities | documented_share=numerator_driver/denominator_driver on matching native causal units with positive denominator over all users. utility_per_service=sum(actual_utility_quantity*documented_share)/N after compatible conversion/interval and provider exclusions. No mining/refinery/electrolysis/casting/remelt energy factor assigned to merchant utility. | Actual native meter/utility/period/conversion and numerator-denominator records | Actual warehouse kWh and conditional water m3 per service |  |
| net_supply_stocks | cp_supplies | S=opening+net_receipts-closing including retained recovery; net_receipts material NET excluding container tare. Gross S/N plus paired actual unused outward output OR consumed (S-usable_outward_return)/N and OMIT matching return exchange. EACH count once/TOTAL unchanged, supported per-piece/density-temperature conversions and native documented_share=numerator_driver/denominator_driver; no inherited metal/strap/dunnage credit. | Actual NET supply stocks/native conversions/matched unused return/share drivers | Exclusive actual supplied or consumed service material |  |
| provider_share | cp_provider | provider_per_service=sum(actual_native_package_quantity*documented_share)/N with real physical_equivalence and disjoint operations/resources. documented_share=numerator_driver/denominator_driver, own native unit/basis/method/state/source/time and positive compatible denominator. No metal price, purity or remelt tonne equivalence without actual proof. | Actual physical package/equivalence/coverage and native driver records | Actual disjoint provider quantity per service |  |
| asset_lifetime_share | cp_assets | lifetime_all_user_driver=observed_all_user_driver+remaining_driver after compatible native equivalence and sourced remainder. Apply job_driver/lifetime_all_user_driver to full manufacture/maintenance/replacement/retirement/EOL, all users/periods, uncertainty/sensitivity/update and provider/carrier exclusions; sum then /N once. No new warehouse support each ingot/bundle. | Actual full-life asset/event/job-observed-remaining-native-equivalence records | Actual all-user infrastructure equivalents |  |
| unique_freight_sum | cp_freight | Cargo actual received-state ingot/bundle + exclusive inherited/added packing/strap/dunnage/carried supports, not assumed elemental-metal mass. EACH compatible mass*actual_count once or TOTAL unchanged; only noncargo carrier tare deducted. Native payload/distance convert actual_transport_work, documented_service_share=numerator_driver/denominator_driver with native positive compatible drivers. freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N, record share INSIDE SUM and N once, empty/provider/receiver scope disjoint. | Actual unique loadleg packed cargo/count/tare/distance/work/conversion/share evidence | Actual scoped packed freight t*km per service |  |
| actual_outlets | cp_outlets | outlet_per_service=actual_compatible_native_transfer_quantity/N after supported EACH/TOTAL/net-tare/density conversion. Whole ingot/bundle retains measured metal/oxide/moisture/pack members, exclusive from independent fragments/packing/capture/free fluid and explanatory components. Retained stock not export; consumed-only supplies omit matching return. Actual receiver classification/transport/treatment once, no automatic remelt/recovery/credit from metal value or surface stain. | Actual native transfers/component-state/parent/receiver/fate evidence | Actual exclusive product/waste receiver quantities |  |
| actual_species | cp_environment | release_mass=measured_species_mass OR compatible activity*applicable_species_factor with only composition/release_fraction required by that factor. Complete species factor already covering proportions must not multiply them again. Actual chemical state/medium/native unit-method-source-sampletime and capture/contained exclusions then /N once. No oxide mass/elemental content/metal presence/captured dust/stock-moisture change becomes direct aluminium release or zero. | Actual species/particle/chemistry/medium measured amount or applicable native factor chain | Actual independently evidenced species release per service |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_heat_state | cp_ingots | Actual primary standard form/heat-grade/source analysis and received mass/oxide/moisture/member/pack native records; no portfolio-wide purity/shape/weight or new assay default. | Actual source release/heat analysis/measurements and chemical-state basis |
| actual_complete_integration | all | Actual missing stages or additional original commodity demand MUST be integrated into the linked commodity system outside this service exactly once before complete-chain use. A pending plan or merely recorded amount is insufficient. Require completed integration status, actual dataset/link, timestamp/timezone, source, exclusive owner, integrated native quantity/basis and coverage/once evidence; unverified or incomplete integration blocks complete-chain use. | Actual completed linked dataset/status/timezone/source/owner/integrated quantities/coverage once, not pending plan |
| qualified_sources | hydro-remelt-ingots; hydro-primary-cycle | Qualitative nonalloyed/shape and upstream stage questions only, no default grade/purity/process ratios/energy/recycling credit or marketing carbon claim. | Actual primary source bodies and real foreground heat/supply records |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| site_water | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `site_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| service_consumables | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `service_consumables` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_protection | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_package | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_package` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| service_assets | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `service_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_supply_return | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_supply_return` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| usable_material_export | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_material_export` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| whole_ingot_bundle_waste | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `whole_ingot_bundle_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `whole_ingot_bundle_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| fragment_residue_waste | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `fragment_residue_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| pack_waste | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `pack_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| mixed_capture_waste | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `mixed_capture_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| free_contained_fluid | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `free_contained_fluid` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species_release | primary_aluminium_ingot_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species_release` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Only actual attributable warehouse/handling utility, no primary metal production, remelting, alloying or ingot machining/polishing demand.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual merchant warehouse and electric-handling electricity
- Flow property / unit: Energy / kWh
- Amount rule: sum(actual_utility_quantity*documented_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual native meter kWh period/all-consumer causal drivers and idle/open coverage, provider and energy-property support; no smelter kWh per aluminium tonne.

#### site_water

Conditional actual site-surface hygiene, not ingot washing/refining/cooling or new assay.

Residual inventory requirement after the independently identified cases `site_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse hygiene water supply
- Flow property / unit: Volume / m3
- Amount rule: actual_utility_quantity converted to m3*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual supplier/meter volume, real hygiene event/period/native conversion/share and receiver coverage; no washwater inferred from oxide stain.

#### service_consumables

Real agents/wipes/absorbents/filters only if used; NET supply excludes containers. Inherited ingot/oxide/strap/dunnage is merchandise, no service polishing agent or remelt additive default.

Residual inventory requirement after the independently identified cases `service_consumables_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual NET warehouse hygiene and incident-capture materials
- Flow property / unit: Mass / kg
- Amount rule: selected actual gross or consumed NET material mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material identity/composition, NET opening/receipts/closing, native EACH/TOTAL/per-piece or density evidence and paired unused return; no default dust or cleanup ratio.

#### added_protection

Only real new outer material without presumed rebundling/polishing/repack; original strap/dunnage/pack stays commodity and reusable service supports full-life assets.

- Identity requirement: Actual added external transit protection
- Flow property / unit: Mass / kg
- Amount rule: selected actual gross or consumed NET extra protection mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material/native net amount EACH/TOTAL and stock/return/reuse owner, not a strap count from nominal ingot/bundle standard.

#### provider_package

Real physical service equivalent and declared coverage; no hidden assay/cutting/remelt/refine/alloy/polish/use operation.

- Identity requirement: Actual disjoint contracted warehouse handling package
- Flow property / unit: Count / Item(s)
- Amount rule: sum(actual_native_package_quantity*documented_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need provider native physical unit/operation/period/numerator-denominator share and utility/assets/freight/treatment scope; metal price or purity not equivalent.

#### service_assets

Independent actual infrastructure/handler/support full manufacture/maintenance/replacement/retirement/EOL, all users/periods. Traded ingots/inherited dunnage not current consumed warehouse assets.

- Identity requirement: Actual complete-life warehouse handling and reusable-support assets
- Flow property / unit: Count / Item(s)
- Amount rule: sum_full_asset_equivalents(job_driver/lifetime_all_user_driver)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need real asset scope/events, actual job/observed all-user and sourced remainder native equivalent drivers/uncertainty; no life or new pallet per bundle.

#### freight

Actual packed received-state ingots/bundles with surface/packing/support scope; elemental-metal-only mass is not automatically payload. EACH/TOTAL and noncargo tare separate.

- Identity requirement: Actual unique load-leg freight for original-presentation ingots
- Flow property / unit: Mass * Length / t*km
- Amount rule: sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need actual measured bundle/ingot/pack/strap/dunnage/cargo membership and mass EACHTOTAL, actual count/route/conversions and record share/empty coverage; no generic density payload.

#### unused_supply_return

Only real outward export from matching standalone NET supply stock under gross-input convention; consumed-only omits this exchange. Commercial ingot/bundle return or inherited packing is nonexchange merchandise, not a supply deduction.

- Identity requirement: Actual matched unused usable NET service-material outward return
- Flow property / unit: Mass / kg
- Amount rule: actual matched NET unused outward material mass/N under gross convention only
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual same-stock supply identity/native net quantity/usability/receiver and nonclosing proof, no inherited strap/dunnage against unrelated new input.

#### usable_material_export

Conditional actual useful material/grade/state/content/receiver, distinct from commercial ingot stock and actual waste. Collection or metal value alone not recovery proof; no automatic remelt/avoided-production credit.

- Identity requirement: Actual independently accepted usable service or packing material export
- Flow property / unit: Mass / kg
- Amount rule: actual exclusive usable exported mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual material native mass/metal-oxide-fluid state and accepted receiver/transfer, exclude whole waste/captured/closing membership; no universal recovery fraction.

#### whole_ingot_bundle_waste

Only actual discard decision and receiver for original whole ingot/bundle with measured retained oxide/moisture/packing member scope. Quarantine, stain or oxide alone is not waste. Embodied original commodity loss outside once; actual physical collection/treatment once here.

- Identity requirement: Actual discarded whole supplied ingot or bundle stream with retained content
- Flow property / unit: Mass / kg
- Amount rule: actual whole ingot-bundle receiver NET stream mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual decision/heat-parent membership/native transfer net-tare, metal/oxide/moisture chemistry and receiver classification/treatment; not scrap by surface appearance.

#### fragment_residue_waste

Actual independent incident fragments/residue with parent heat/ingot link, metal/oxide/contaminant state and exclusion from whole/captured streams. Not presumed merchant cutting/dross generation or airborne aluminium.

- Identity requirement: Actual independently transferred ingot fragment or solid residue waste
- Flow property / unit: Mass / kg
- Amount rule: actual exclusive fragment-residue receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual fragment origin/native quantity/chemical state/retained constituents and receiver; oxide residue mass cannot stand for original aluminium metal mass or emissions.

#### pack_waste

Actual independent packing stream with attached metal/oxide/fluid/moisture measured within it, disjoint from whole-bundle/fragment/capture streams. No default unstrapping/repacking or clean recycling.

Residual inventory requirement after the independently identified cases `pack_waste_paper_pack`; `pack_waste_metal_pack`; `pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separately transferred straps dunnage or packaging waste
- Flow property / unit: Mass / kg
- Amount rule: actual separate packing receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual strap/dunnage identity/material/native net-tare and contamination contents/receiver fate, not inferred ingot count times nominal pack factor.

#### mixed_capture_waste

Conditional real substrate with retained fragments/oxide/dust/fluid/water as one mixed stream; captured material not direct species release or additional full-stream component waste.

- Identity requirement: Actual spent wipes absorbents or filters with captured incident material
- Flow property / unit: Mass / kg
- Amount rule: actual mixed capture receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need substrate and each retained component native unit/basis/method/state/source/sampletime, incident genealogy and receiver, no default dust/wipe or metal fraction.

#### free_contained_fluid

Actual free contained hygiene/incident liquid with real water/agent/metal-oxide solids composition, separate from moisture/fluid retained in whole/fragment/pack/capture. No ingot washing or refining liquid presumed; receiver transfer not outfall or pure-water release.

- Identity requirement: Actual independently collected contained service or incident fluid
- Flow property / unit: Mass / kg
- Amount rule: actual compatible contained fluid receiver NET mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual collection/net quantity, physical mixture/density-temperature if converted, retained exclusions and receiver treatment; no dissolved aluminium factor from metal presence.

#### direct_species_release

Only independently evidenced merchant-boundary species/particle chemical state and medium, not oxide on ingot/captured dust/metal presence/stock change or zero.

- Identity requirement: Actual identified species or particle release to demonstrated medium
- Flow property / unit: Mass / kg
- Amount rule: actual compatible measured or justified species mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need real species/particle/chemical identity and receiving medium, measured release or native applicable activity-factor with only necessary composition/fate/source and capture exclusions; no smelting emission factor.

## 9. Validation Rules

| rule_id | Rule |
| --- | --- |
| final_reference | Match real owned/resold B2B final gate/source/reversal N>0 and output/name/link Count; actual grade/heat/form/net-state/bundle/pack qualifiers. Quarantine/open/reject resources retained. |
| original_stage_integration | Require actual full primary mine/refine/electrolysis/cast/finish/release/pack source, not raw alumina or unmatched alloy/scrap. Original direct OR positive complete all-terminal native source/loss/stage coverage owner once. Actual missing stages or additional original commodity demand MUST be integrated into the linked commodity system outside this service exactly once before complete-chain use. A pending plan or merely recorded amount is insufficient. Require completed integration status, actual dataset/link, timestamp/timezone, source, exclusive owner, integrated native quantity/basis and coverage/once evidence; unverified or incomplete integration blocks complete-chain use.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| chemical_identity | Check actual as-received metal/oxide/moisture/net-pack membership, heat-analysis mass fractions and chemical/original-state equivalence; oxide elemental Al not original metal loss or release. No staining/quarantine/stock-moisture gain becomes discard/emission/zero. |
| native_resources | NET supply receipts exclude container tare, every numerator/denominator native-source compatible positive basis, gross S+return OR consumed OMIT; full-life all-user observed+sourced remainder and unique loadleg eachshare INSIDE SUM/N once, actual provider/carrier/receiver exclusions. |
| actual_fate_route | No hidden merchant remelt/refine/alloy/saw/machine/polish/new assay/use. Whole ingot/bundle/fragment/pack/capture/freefluid/components/species exclusive with actual receiver/chemical-state/medium evidence, no automatic scrap recovery/credit or smelter species factor. |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground own-account merchant-service add-on per final completed commercial consignment |
| downstream_use | Link once to compatible complete primary standard-ingot original gate demand/loss and actual completed missing-stage integration outside service, with real buyer handover |
| allowed_use | Actual new primary nonalloyed standard remelting ingots with real heat/grade/chemistry/net-state/bundle/pack evidence and ambient merchant operations |
| excluded_use | Full primary-aluminium footprint alone, alloys/tbars/sows/billet/profile/scrap or remelt/refine/manufacture/use service, pending source-stage integration treated complete |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; actual_grade; heat_id; primary_nonalloyed_evidence; standard_remelting_ingot_shape; heat_analysis_record; source_cast_release_record; original_bundle_ingot_membership; original_supplier_presentation; strap_dunnage_material_identity; as_received_net_mass_coverage; surface_condition_record; oxide_chemistry_identity; ingot_count; bundle_count; net_as_received_ingot_mass; strap_dunnage_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | Actual identity/range/native amounts, as-received metal-oxide-water chemical equivalence/pack scope, original all-terminal demand/loss/stage integration completion, asset all-user remainder/native shares and freight/receiver overlap uncertainty |
| update_trigger | Actual heat/grade/shape/chemistry/bundle/pack/state, merchant work/source/loss/integration completion, lifetime/provider/carrier/receiver/species or conversion source changes |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| hydro-remelt-ingots | literature | https://www.hydro.com/en/global/aluminium/products/casthouse-products/remelt-ingots/ | Qualitative primary nonalloyed metal and separate standard-ingot versus t-bar/sow portfolio choices; actual grade/heat/presentation required. No uniform purity/grade/mass/density/low-carbon or recycled-zero factor. |
| hydro-primary-cycle | literature | https://www.hydro.com/en/global/aluminium/about-aluminium/aluminium-life-cycle/ | Qualitative bauxite mining/alumina refining/electrolytic primary-metal/casting-stage completeness questions only. No source numerical process ratio/energy/recycling percentage or carbon-neutral marketing claim is a merchant factor; actual primary nonalloyed route not presumed alloying. |
