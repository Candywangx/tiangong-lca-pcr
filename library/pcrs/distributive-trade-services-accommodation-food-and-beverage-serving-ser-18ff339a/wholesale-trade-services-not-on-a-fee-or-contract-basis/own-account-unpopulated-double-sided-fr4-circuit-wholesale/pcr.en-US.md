---
pcr_id: pcr.own-account-unpopulated-double-sided-fr4-circuit-wholesale
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of factory-finished unpopulated double-sided rigid FR4 printed circuits

## 1. Scope and Applicability

Own-account business-buyer wholesale of actual factory-finished UNPOPULATED double-sided rigid FR4 printed circuits in original supplier single-board or panel presentation, ordinary ambient hold and electric warehouse handling. Bare identifies no mounted components; it does not mean unfinished copper-clad laminate, and it does not include populated cards, flexible/multilayer/metal-core circuits or loose raw materials. No merchant population/solder, electrical test, baking/desiccation/humidity control, depaneling, cleaning, repair or repack/use by default. Actual extra operations require route review. Manufacturer menus distinguish boards/panels and finish options; manufacturer quality records support material-batch/release trace questions, with an explicitly multilayer example sequence not universally applicable to two-layer boards. No universal geometry/foil/FR4 recipe/finish/test pass/UL-IPC-RoHS claim.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-unpopulated-double-sided-fr4-circuit-wholesale |
| classification_refs | CPC 3.0:61085 narrower; supplied goods47130 within471 |
| covered_products | Actual finished unpopulated two-conductive-layer rigid FR4 printed-circuit own-account merchant service |
| excluded_products | Raw laminate, populated/flexible/multilayer/metal-core circuits, fee agency/retail/hire, manufacture and merchant test/bake/depanel/assemble/repack/use |
| representative_product | Actual design revision/batch/passport or release, single-or-panel/net-board/rails/coupons and actual pattern/plating/finish/mask/legend/pack state |
| production_route | Complete original supplier printed-circuit release -> owned merchant receipt/ambient hold/electric handling -> final B2B acceptance after reversal |
| market_state | Completed commercial service, circuit merchandise remains nonexchange commodity, not current warehouse ICT asset |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account accepted B2B consignment of actual original-supplier unpopulated double-sided rigid FR4 printed circuits |
| How much | 1 Item(s) |
| How well | Actual ownership/resale/buyer final gate/source/reversals; design/material/two-layer/unpopulated and single/panel/rail/coupon/pack qualifiers and original source linkage, no universal merchant test |
| How long or cycle | Actual release/receipt/hold/dispatch/acceptance/reversal times/timezones/native duration and stock/meter/full-life asset periods, no uniform hold or shelf-life |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account wholesale consignment of factory-finished unpopulated double-sided rigid FR4 printed circuits |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; design_revision; batch_id; passport_or_release_record; unpopulated_evidence; two_conductive_layer_evidence; rigid_FR4_material_record; actual_copper_pattern_record; through_hole_plating_record; surface_finish_identity; soldermask_if_actual; legend_if_actual; supplier_single_or_panel_state; panel_board_rails_coupon_membership; original_pack_state; board_count; panel_count; net_board_area; net_board_mass; whole_panel_mass; original_pack_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Count | Item(s) | Unique final real owned/resold B2B acceptance after reversals, N>0; board/panel/copper area/mass not service count. |
| board_panel_geometry | cp_circuits | Area | m2 | Declare net plan area versus two-face purpose, actual outline/cutouts and received single/panel/rails/coupons membership; convert native dimensions/units/counts only with matching basis. |
| retained_copper | cp_circuits; cp_outlets | Mass | kg | Actual measured/design retained patterned copper and nonoverlapping hole-plating geometry/density; full board area*initial full foil thickness not retained post-etch mass without actual coverage. |
| native_components | cp_circuits; cp_outlets; cp_environment | Mass | kg | Independent component/retained water/fluid/finish/species units/basis/method/state/source/sampletime and density-temperature unit; component water wet/dry definition only, no LOD-other-volatiles-to-water. |
| packed_freight | freight | Mass * Length | t*km | Actual cargo includes supplied panel members/pack/support; native EACH times count once/TOTAL unchanged, only noncargo tare, unique loadleg own share inside SUM then N once. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual factory-finished UNPOPULATED double-sided rigid FR4 printed circuits at original supplier release, single boards or panels with declared net-board/rails/coupons, actual copper pattern/through-hole plating/finish/mask/legend and inherited pack. |
| starting_condition_role | Finished printed-circuit gate for a merchant add-on, not raw copper-clad laminate or populated component assembly/use state. |
| product_classification_scope | CPC 3.0:61085 narrower printed-circuit merchant service; supplied goods47130 within471; does not cover all electronics/telecommunications goods. |
| recursive_input_rule | Purchased/resold printed circuits and commercial returns are nonexchange merchandise stocks/throughflow. Do not recurse into consumed warehouse ICT assets, raw copper/resin/glass, manufacturing chemicals or another wholesale service. |
| upstream_dataset_requirement | Link full actual material manufacture and applicable two-layer pattern/drill/plating/etch/mask/finish/profile/release plus original packaging gate, all embodied lost commodity outside service once. Raw laminate alone or unmatched populated/multilayer inventory is incomplete. Quantify actual original assigned demand, stage/loss baseline/additional coverage, native conversion and one loss owner before complete-chain use. |
| disclosure | Actual design/batch/release/material, layer and unpopulated state, single/panel/rails/coupons and copper/finish/mask membership, quantities/geometry/pack/time/conditions, ownership/buyer gate, native source assignment/all exits and unresolved evidence. |

### Boundary Rules

| rule_id | Rule |
| --- | --- |
| merchant_operation | Actual document/pack/condition receipt, ordinary ambient hold/electric handling and final B2B handover only. No population/solder, baking/desiccation/humidity control, board testing/cleaning/depaneling/repack or use by default, including hidden contracted work; actual extras require review. |
| complete_commodity | All board/panel/rails/coupon/inherited component/finish/pack manufacture upstream including actual embodied loss stays outside service. Require quantified compatible original-gate assigned demand and exclusive once-only loss/stage coverage link before complete-chain use; actual physical service collection/receiver treatment once. |
| geometry_pattern_gate | Bare means unpopulated finished printed circuit, not raw full-foil laminate. Actual two-layer route does not inherit every multilayer step. Net-board area is not twice plan area unless declared face-area purpose; panel/rails/coupons and post-etch copper pattern/overlap must be sourced, not a full-foil rectangle mass assumption. |
| period_reject | Record actual cohorts/stock/meter/source/asset phases and timezone. Open/canceled/reversed/rejected lots retain resources and closing/return/useful/actual-loss exits, N excludes unresolved acceptance; scratch, oxidation or shortage alone is not loss/discard/emission/zero. |
| exclusive_owners | Actual whole circuit/panel, independent fragment/pack/mixed capture/liquid, retained copper/finish/glass-resin/moisture/fluid and species have exclusive membership and receiver/medium proof. Direct/provider/carrier/receiver utility/asset/freight/treatment coverage each once. Sold circuits not current ICT assets; no automatic metal recovery or credit. |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| unpopulated_circuit_wholesale | Own-account unpopulated double-sided FR4 printed-circuit wholesale | required | Actual specified owned/resold B2B consignment | foreground | accepted_service |

Merchant consignment/cohort service, with actual receipt/pack condition/ambient hold/electric handling, conditional site-hygiene/capture/changeover and final receiver/handover events. Link all resources to real stock/meter periods and consumers, including open/reject attempts; no merchant fabrication yield or inherited technology inferred.

### Process: Own-account unpopulated double-sided FR4 printed-circuit wholesale (`unpopulated_circuit_wholesale`)

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

Range evidence need: Need metered native kWh interval, actual all-user handling/space drivers, idle/open resources and delivered utility support; no energy per board area.

###### Actual liquid treated tap-water supply (`site_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: actual compatible utility volume*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual meter/supplier volume, hygiene event, matching period/conversion/share and receiver coverage; no board-wash quantity from area.

###### Actual independently recorded synthetic detergent supply (`hygiene_materials_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: selected actual gross or consumed supply mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material identity/formulation, native count/mass/density conversion, stock and matched unused return evidence; no prescribed solvent or absorbent dose.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account wholesale consignment of factory-finished unpopulated double-sided rigid FR4 printed circuits (`accepted_service`)

One actual final owned/resold B2B accepted commercial consignment after reversals, with actual design/batch/material/pattern/finish and supplier single-or-panel/rails-coupons/pack state. Count is service, not net board, panel, copper kg or m2.

- Selected flow: Completed own-account wholesale consignment of factory-finished unpopulated double-sided rigid FR4 printed circuits
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_circuits`

Range evidence need: Need real merchant ownership/resale, business buyer/gate/source/reversals and unique final acceptance, actual two-layer/unpopulated design batch/member/count/area/mass/pack/time qualifiers; no boards per consignment default.

##### Waste flows

###### Discarded complete unpopulated double-sided FR4 circuit-board panel (`whole_board_panel_waste_atomic_case`)

Conditional on independently recorded actual Discarded complete unpopulated double-sided FR4 circuit-board panel. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `whole_board_panel_waste`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded complete unpopulated double-sided FR4 circuit-board panel
- Flow property / unit: Mass / kg
- Amount rule: actual whole received-state transfer net mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual discard decision/design batch and panel membership, whole stream mass/retained content and receiver treatment; scratch or failed document does not prove whole panel waste.

###### Actual separately collected paper packaging waste (`separate_pack_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: actual separate pack receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual packing material/net-tare/contaminated mass, residue native units and receiver classification/treatment, not inferred dry-bag or desiccant quantity.


###### Actual separately collected metal packaging waste (`separate_pack_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: actual separate pack receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual packing material/net-tare/contaminated mass, residue native units and receiver classification/treatment, not inferred dry-bag or desiccant quantity.


###### Actual separately collected plastic packaging waste (`separate_pack_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: actual separate pack receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual packing material/net-tare/contaminated mass, residue native units and receiver classification/treatment, not inferred dry-bag or desiccant quantity.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule |
| --- | --- |
| causal_events | Direct assignment when real event links exist; otherwise sourced physical handling/occupied-space-time or compatible causal drivers over all consumers/periods including open/reject/idle work. No default board area, panel count, copper mass, price or revenue driver. |
| source_assignment | Outside service use actual direct source-to-target trace OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers only from positive complete compatible all-terminal records including closing/useful-other/returns/actual loss, each native quantity/unit/basis/method/state/source/link/owner. commodity_source_gate_demand=assigned_source_gate_quantity in original actual finished single/panel/rails-coupon/pack state including evidenced state-change share. Final shipped mass+discard is not source demand. Quantify baseline/additional/loss original quantities/conversions/stage/loss coverage and exclusive owner once.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| supply_returns | S=opening+net_receipts-closing including retained recovery. Gross input S/N plus separate actual matched usable unused outward output OR consumed-only (S-usable_outward_return)/N and OMIT matching return exchange. Only same-scope standalone service supply can be netted, not inherited board/copper/finish/pack or unrelated stock; no second credit. |
| asset_lifetime | Full manufacture/maintenance/replacement/retirement/EOL allocated by compatible job_driver/lifetime_all_user_driver. Lifetime is observed all-user use plus sourced remaining service over all users/periods, native equivalence, uncertainty/sensitivity/update, one direct/provider/carrier owner; sum then /N once. Traded circuits not asset input. |
| freight_receiver | Every unique load+leg own documented_service_share inside SUM then /N once. Cargo retains actual received board/panel/rails/coupons/pack/carried support, EACH compatible count once/TOTAL unchanged, subtract only noncargo carrier tare. Exclusive receiver/transport/treatment and whole/component views once; no default recycling/credit. |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_circuits | unpopulated_circuit_wholesale | Actual node exchanges/events and nonexchange audit quantities | Circuit design/batch, received single-or-panel state, ownership, source and stock ledger | board_count; board_count_unit; board_count_basis; board_count_method; board_count_state; board_count_source; board_count_sample_time; panel_count; panel_count_unit; panel_count_basis; panel_count_method; panel_count_state; panel_count_source; panel_count_sample_time; circuits_per_panel; circuits_per_panel_unit; circuits_per_panel_basis; circuits_per_panel_method; circuits_per_panel_state; circuits_per_panel_source; circuits_per_panel_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; net_board_mass; net_board_mass_unit; net_board_mass_basis; net_board_mass_method; net_board_mass_state; net_board_mass_source; net_board_mass_sample_time; whole_panel_mass; whole_panel_mass_unit; whole_panel_mass_basis; whole_panel_mass_method; whole_panel_mass_state; whole_panel_mass_source; whole_panel_mass_sample_time; rails_coupons_mass; rails_coupons_mass_unit; rails_coupons_mass_basis; rails_coupons_mass_method; rails_coupons_mass_state; rails_coupons_mass_source; rails_coupons_mass_sample_time; original_pack_tare; original_pack_tare_unit; original_pack_tare_basis; original_pack_tare_method; original_pack_tare_state; original_pack_tare_source; original_pack_tare_sample_time; whole_packed_cargo_mass; whole_packed_cargo_mass_unit; whole_packed_cargo_mass_basis; whole_packed_cargo_mass_method; whole_packed_cargo_mass_state; whole_packed_cargo_mass_source; whole_packed_cargo_mass_sample_time; board_length; board_length_unit; board_length_basis; board_length_method; board_length_state; board_length_source; board_length_sample_time; board_width; board_width_unit; board_width_basis; board_width_method; board_width_state; board_width_source; board_width_sample_time; board_thickness; board_thickness_unit; board_thickness_basis; board_thickness_method; board_thickness_state; board_thickness_source; board_thickness_sample_time; net_board_area; net_board_area_unit; net_board_area_basis; net_board_area_method; net_board_area_state; net_board_area_source; net_board_area_sample_time; panel_area; panel_area_unit; panel_area_basis; panel_area_method; panel_area_state; panel_area_source; panel_area_sample_time; rails_coupons_area; rails_coupons_area_unit; rails_coupons_area_basis; rails_coupons_area_method; rails_coupons_area_state; rails_coupons_area_source; rails_coupons_area_sample_time; retained_pattern_area; retained_pattern_area_unit; retained_pattern_area_basis; retained_pattern_area_method; retained_pattern_area_state; retained_pattern_area_source; retained_pattern_area_sample_time; retained_copper_thickness; retained_copper_thickness_unit; retained_copper_thickness_basis; retained_copper_thickness_method; retained_copper_thickness_state; retained_copper_thickness_source; retained_copper_thickness_sample_time; retained_copper_volume; retained_copper_volume_unit; retained_copper_volume_basis; retained_copper_volume_method; retained_copper_volume_state; retained_copper_volume_source; retained_copper_volume_sample_time; hole_plating_copper_volume; hole_plating_copper_volume_unit; hole_plating_copper_volume_basis; hole_plating_copper_volume_method; hole_plating_copper_volume_state; hole_plating_copper_volume_source; hole_plating_copper_volume_sample_time; copper_mass; copper_mass_unit; copper_mass_basis; copper_mass_method; copper_mass_state; copper_mass_source; copper_mass_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; component_wet_mass; component_wet_mass_unit; component_wet_mass_basis; component_wet_mass_method; component_wet_mass_state; component_wet_mass_source; component_wet_mass_sample_time; component_dry_mass; component_dry_mass_unit; component_dry_mass_basis; component_dry_mass_method; component_dry_mass_state; component_dry_mass_source; component_dry_mass_sample_time; water_wet_fraction; water_wet_fraction_unit; water_wet_fraction_basis; water_wet_fraction_method; water_wet_fraction_state; water_wet_fraction_source; water_wet_fraction_sample_time; water_dry_ratio; water_dry_ratio_unit; water_dry_ratio_basis; water_dry_ratio_method; water_dry_ratio_state; water_dry_ratio_source; water_dry_ratio_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; actual_loss_quantity; actual_loss_quantity_unit; actual_loss_quantity_basis; actual_loss_quantity_method; actual_loss_quantity_state; actual_loss_quantity_source; actual_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; target_exit_driver; target_exit_driver_unit; target_exit_driver_basis; target_exit_driver_method; target_exit_driver_state; target_exit_driver_source; target_exit_driver_sample_time; sum_exit_drivers; sum_exit_drivers_unit; sum_exit_drivers_basis; sum_exit_drivers_method; sum_exit_drivers_state; sum_exit_drivers_source; sum_exit_drivers_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; design_revision; batch_id; passport_or_release_record; unpopulated_evidence; two_conductive_layer_evidence; rigid_FR4_material_record; glass_resin_identity; actual_copper_pattern_record; through_hole_plating_record; surface_finish_identity; soldermask_if_actual; legend_if_actual; supplier_single_or_panel_state; panel_board_rails_coupon_membership; original_pack_state; component_membership; copper_area_face_and_coverage_basis; no_full_foil_after_etch_assumption; plating_overlap_exclusion; moisture_component_identity; water_wet_or_dry_basis; LOD_other_volatiles_exclusion; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; source_gate_allocation_source; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; receipt_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | Verify actual merchant purchase/resale, business buyer, final acceptance gate/source and reversals, not receipt alone. Trace design revision/batch/actual release, unpopulated two-conductive-layer rigid FR4 material, actual copper pattern/through-hole plating and finish/mask/legend if present. Declare single circuits versus panels and net-board/rail/coupon membership before counts, mass or area conversions; expected rails are not missing boards. Record geometry, face/coverage basis, retained copper versus initial foil, nonoverlapping hole plating, glass/resin/finish and pack through actual measurement/design/BOM sources. Each native quantity has unit/basis/method/state/source/sampletime. Original gate demand uses actual direct links OR positive complete compatible all-terminal drivers including closing/returns/useful others/real loss, with native quantities and link/owner per exit; preserve complete manufacture/release/original pack and stage/loss coverage.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Actual native quantity units and sourced compatible conversion, dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance times and cross-period retained resources | Real node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw record/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_supplies | unpopulated_circuit_wholesale | Actual node exchanges/events and nonexchange audit quantities | Actual warehouse hygiene, incident and added-protection supply records | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; material_identity; standalone_stock_scope; matched_return_ids; unused_return_convention; owner; inherited_board_pack_exclusion; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Collect actual agent/wipe/absorbent/filter and extra external protection materials only when used. Supplier board/mask/finish/pack/any inherited desiccant is merchandise, not current supply. No baking, desiccant addition, humidity intervention or board cleaning is assumed. Native EACH/TOTAL, composition and stock/return conversion evidence; choose gross input plus separate usable unused outward return OR consumed-only input omitting the paired return exchange. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native quantity units and sourced compatible conversion, dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance times and cross-period retained resources | Real node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw record/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_utilities | unpopulated_circuit_wholesale | Actual node exchanges/events and nonexchange audit quantities | Actual warehouse and electric merchant-handling utilities | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; provider; all_consumers; interval_start; interval_end; provider_overlap; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Meter real warehouse/handling demand and conditional site-hygiene supply, matching interval and all-consumer physical drivers. No PCB fabrication/plating/etch/solder/test/use power, board rinse, baking or assumed climate load. Separate measured and allocated data, actual provider/carrier coverage and native conversions. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Actual native quantity units and sourced compatible conversion, dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance times and cross-period retained resources | Real node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw record/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_provider | unpopulated_circuit_wholesale | Actual node exchanges/events and nonexchange audit quantities | Actual scoped warehouse-provider physical package | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; provider_id; contract_id; operation_scope; excluded_operations; utility_asset_freight_treatment_coverage; event_ids; owner; period_id; time_zone; time_source | Obtain actual package quantity/native physical equivalent, share and included utilities/assets/transport/treatment. Outsourced depaneling, inspection testing, baking, population/solder or repacking remains real extra work requiring reviewed route extension; no invisible manufacture package. No monetary or board-area shortcut. | Actual native quantity units and sourced compatible conversion, dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance times and cross-period retained resources | Real node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw record/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_assets | unpopulated_circuit_wholesale | Actual node exchanges/events and nonexchange audit quantities | Complete-life warehouse, handler and reusable-support register | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; manufacture; maintenance; replacement; retirement; end_of_life; all_consumers; all_periods; remaining_life_source; observed_boundary; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; traded_board_exclusion; period_id; time_zone; time_source | Identify actual warehouse/racks/handler/support assets independently of traded boards; sold printed circuits are not current warehouse ICT assets. Include full manufacture, maintenance, replacements, retirement/EOL, actual job/observed all-user use plus sourced remaining service, compatible native units/equivalence and all periods/users. Record uncertainty/sensitivity/update and exclude provider/carrier duplicate assets. | Actual native quantity units and sourced compatible conversion, dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance times and cross-period retained resources | Real node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw record/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_freight | unpopulated_circuit_wholesale | Actual node exchanges/events and nonexchange audit quantities | Unique load-leg packed-circuit freight records | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; received_board_panel_mass; received_board_panel_mass_unit; received_board_panel_mass_basis; received_board_panel_mass_method; received_board_panel_mass_state; received_board_panel_mass_source; received_board_panel_mass_sample_time; inherited_added_pack_mass; inherited_added_pack_mass_unit; inherited_added_pack_mass_basis; inherited_added_pack_mass_method; inherited_added_pack_mass_state; inherited_added_pack_mass_source; inherited_added_pack_mass_sample_time; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_state; actual_carried_support_mass_source; actual_carried_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; actual_single_panel_membership; rails_coupons_included_coverage; record_owner; empty_return_coverage; carrier_asset_fuel_coverage; N; time_zone; time_source | Use actual shipped single-board/panel configuration and packed cargo, including supplied rails/coupons, original/added packing and actual carried supports, even reusable. Net circuit area or copper mass is not whole payload. EACH compatible mass times actual count once/TOTAL unchanged; subtract only noncargo vehicle/container tare. Each unique load+leg applies its own sourced physical share inside work sum then /N once; retain native mass/distance/work conversions and empty/provider/receiver coverage. | Actual native quantity units and sourced compatible conversion, dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance times and cross-period retained resources | Real node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw record/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_outlets | unpopulated_circuit_wholesale | Actual node exchanges/events and nonexchange audit quantities | Exclusive circuit/panel, fragment, packaging and containment exits | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_copper; retained_copper_unit; retained_copper_basis; retained_copper_method; retained_copper_state; retained_copper_source; retained_copper_sample_time; retained_finish_mask; retained_finish_mask_unit; retained_finish_mask_basis; retained_finish_mask_method; retained_finish_mask_state; retained_finish_mask_source; retained_finish_mask_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; event_id; transfer_id; parent_design_batch_ids; board_panel_ids; rails_coupon_fragment_membership; whole_board_panel_exclusion; separate_fragment_exclusion; separate_pack_exclusion; mixed_cleanup_exclusion; contained_liquid_exclusion; component_identity; moisture_wet_or_dry_basis; retained_content_fate; receiver_id; receiver_classification; treatment_owner; usable_supply_return_link; actual_export_not_closing; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Record actual distortion, scratch, oxidation, breakage or reject decision and receiver, not full discard or metal release by observation alone. Follow original design/batch and received panel/board/rail/coupon genealogy. Whole stream includes retained glass/resin/copper/plating/finish/mask/moisture/fluid; independent actual fragment, pack, cleanup or liquid transfers exclude its membership. Each component/retained quantity has own native unit/basis/method/state/source/sampletime. Record actual useful export/waste classification, receiver/transport/treatment once, stock versus export and matched supply-return convention; no automatic depaneling, metal recovery or credit. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Actual native quantity units and sourced compatible conversion, dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance times and cross-period retained resources | Real node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw record/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |
| cp_environment | unpopulated_circuit_wholesale | Actual node exchanges/events and nonexchange audit quantities | Actual species/particle and receiving-medium evidence | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; particle_basis; receiving_medium; factor_scope_complete; composition_basis_source; contained_transfer_exclusion; release_owner; measurement_location; time_zone; time_source | Require real species or particle class and actual receiving medium, measured release or applicable activity/factor with only necessary composition/fate. Complete species factor already covering fractions must not multiply again. Native units, methods, sample state/time and applicability sources required; captured dust/wipes, retained copper/finish/resin and contained liquid excluded. No scratch, oxidation, glass/resin presence or stock gap becomes copper/particle/VOC emission or zero. | Actual native quantity units and sourced compatible conversion, dates/timezone retained | Each actual event and stock/meter/asset interval | Actual source/receipt/dispatch/acceptance times and cross-period retained resources | Real node site and explicitly owned handoffs, all relevant consumers | per reference flow | Raw record/calibration/method, native unit/basis/state/source/sampletime, exclusive owner/uncertainty; unknown not zero |

### Calculation Rules

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_circuits | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals. Actual merchant ownership/resale, business buyer and final gate/source/reversal required; N>0 for division. Canceled/open/rejected/reversed resources remain in actual cohorts/periods. | Actual ownership/buyer/final gate and acceptance/reversal records | Final unique service N |  |
| board_panel_geometry | cp_circuits | Use actual measured/design net_board_area and received single/panel membership. A rectangular length*width calculation only matches actual outline/cutouts basis; double-sided copper does not double plan area. Panel count*circuits_per_panel only with actual compatible membership; rails/coupons belong to original supplied panel, not extra net circuits or omitted source mass. EACH mass*actual_count once/TOTAL unchanged; packed mass retains actual original pack. | Native outline/length/width/area/thickness/count/mass membership and conversions | Qualified net-board versus received-panel geometry/mass audit |  |
| retained_copper_components | cp_circuits | Prefer actual measured or design-supported copper_mass. If geometry method used: copper_mass=sum(retained_copper_volume*density), including independently evidenced nonoverlapping hole-plating volume and actual retained patterned coverage/thickness on each face. Whole board area*initial full foil thickness is not post-etch retained copper absent actual coverage; do not double count plated copper already within measured/design total. Glass/resin/finish/mask/legend component views are nonadditive, actual identities/fractions required. | Actual retained geometry/coverage/holeplating exclusion and native density/temperature/source | Audited retained copper/components without full-foil default |  |
| source_gate | cp_circuits | Direct source trace OR assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers with positive complete all-terminal native records. commodity_source_gate_demand=assigned_source_gate_quantity at actual original finished unpopulated single/panel/rails-coupon/pack gate including evidenced state-change share; not dispatch+discard. Reconcile input/closing/returns/useful others/actual loss, baseline_quantity/additional_stage_quantity/loss_adjustment_quantity native conversions, actual missing stages, stage/loss coverage/owner once outside. Unknowns block complete-chain use, not zero.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. | Direct or full native terminal-driver/source and baseline/additional/loss evidence | Quantified original complete commodity demand/loss outside once |  |
| component_water | cp_circuits; cp_outlets | Only when needed and evidenced: component_dry_mass=component_wet_mass*(1-water_wet_fraction), actual water/as-received wet mass fraction for identified same component/sample. Compatible dry water/nonwater ratio converts water_wet_fraction=water_dry_ratio/(1+water_dry_ratio) after native percent conversion. Do not correct whole FR4/copper/finish from one component sample, and LOD containing other volatiles is not automatically water. Retained fluid quantities have own native identity/basis/source/fate. | Actual component water/fluid native measurement/method/sample/state/source and conversion | Qualified component moisture/fluid audit not inferred product loss |  |
| utility_share | cp_utilities | utility_per_service=sum(actual_utility_quantity*documented_share)/N with actual native interval/conversion and matching all-consumer causal drivers, provider overlap excluded. No fabrication/assembly/test/use/baking climate factor. | Native utility meter/driver/conversion/share records | Actual electricity/site water per service |  |
| supply_stock | cp_supplies | S=opening+net_receipts-closing including retained recovery. Gross S/N with separate paired usable outward output OR consumed (S-usable_outward_return)/N and OMIT matching return exchange. Actual EACH count conversion once/TOTAL unchanged, supported per-piece mass/density temperature and no inherited material credit. | Standalone native stocks/material/conversion and matched unused return | Exclusive supplied/consumed material convention |  |
| provider_share | cp_provider | provider_per_service=sum(actual_native_package_quantity*documented_share)/N with actual physical_equivalence and disjoint coverage. documented_share=share_numerator/share_denominator on compatible native causal units; not money or board count without equivalence. | Actual package/equivalence/share/native coverage | Actual disjoint provider service |  |
| full_asset_share | cp_assets | lifetime_all_user_driver=observed_all_user_driver+remaining_driver after native compatibility/equivalence and sourced remainder. Apply job_driver/lifetime_all_user_driver to complete manufacture/maintenance/replacement/retirement/EOL; all users/periods/uncertainty/sensitivity/update, sum then /N once, no traded PCB as current ICT asset. | Actual asset life events, job/observed/remainder/native driver equivalence | Actual complete-life all-user asset equivalents |  |
| unique_freight | cp_freight | Actual cargo=received board/panel including supplied rails/coupons+pack+carried support on exclusive compatible membership; actual EACH mass*actual_count once OR TOTAL unchanged, subtract only noncargo carrier tare. Native mass/distance convert actual_transport_work. freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N, each record share inside SUM and N once, empty/provider/receiver scope disjoint. | Unique load-leg native configuration/cargo/count/distance/conversion/share | Actual scoped freight t*km per service |  |
| actual_outlets_release | cp_outlets; cp_environment | outlet_per_service=actual_compatible_native_transfer_quantity/N after supported EACH/TOTAL/conversion. Whole supplied panel/board, independent fragment/pack/capture/liquid and retained components are exclusive. Retained stock not export; consumed-only supplies omit paired return. Actual receiver/treatment once, no automatic recovery credit. release_mass=measured_species_mass OR compatible activity*applicable_species_factor with only necessary composition/release_fraction; complete species factor already covering fractions must not multiply them again. Actual medium/native sources/capture exclusions then /N once, no material-presence or stock-gap emissions. | Actual native transfer/component/receiver or independent species/medium/factor chain | Exclusive actual receiver and species quantities |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_design | cp_circuits | Actual material/design revision/batch/release/member/finish/pack and native measurement sources, no uniform manufacturer menu values or recipe. | Actual supplier release/design/BOM/native measurements |
| complete_source | all | Original full finished-gate direct OR complete positive terminal assignment/loss and native stage/baseline/additional coverage outside once; all users/full asset observed+sourced remainder. Missing evidence blocks complete chain. | Exclusive source/loss/owner and period uncertainty audit |
| source_limit | eurocircuits-pool; eurocircuits-quality | Qualitative board/panel/options and actual traceability questions only; manufacturer multilayer example not all two-layer stages or universal test/regulatory claim. | Primary current body and actual foreground batch evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| site_water | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `site_water` under `cp_utilities`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_utilities`; actual source-linked native records |
| hygiene_materials | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `hygiene_materials` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| added_protection | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `added_protection` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| provider_package | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_package` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| service_assets | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `service_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| unused_supply_return | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_supply_return` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| usable_material_export | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_material_export` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| whole_board_panel_waste | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `whole_board_panel_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `whole_board_panel_waste_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| separate_fragment_waste | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separate_fragment_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| separate_pack_waste | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `separate_pack_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| mixed_capture_waste | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `mixed_capture_waste` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| contained_liquid | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_liquid` under `cp_outlets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_outlets`; actual source-linked native records |
| direct_species_release | unpopulated_circuit_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species_release` under `cp_environment`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_environment`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Actual attributable receipt/hold/dispatch utility only; no board manufacture, electrical test, populated-circuit use, baking or humidity control default.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual warehouse and electric merchant-handling electricity
- Flow property / unit: Energy / kWh
- Amount rule: sum(actual_utility_quantity*documented_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need metered native kWh interval, actual all-user handling/space drivers, idle/open resources and delivered utility support; no energy per board area.

#### site_water

Conditional real warehouse hygiene water, not circuit manufacture/rinse or consumer use; provider/treatment scope recorded.

Residual inventory requirement after the independently identified cases `site_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual site-hygiene water supplied to merchant
- Flow property / unit: Volume / m3
- Amount rule: actual compatible utility volume*documented_share/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

Range evidence need: Need actual meter/supplier volume, hygiene event, matching period/conversion/share and receiver coverage; no board-wash quantity from area.

#### hygiene_materials

Individual actual agents/wipes/absorbents/filters only when used. Board glass/resin/copper/mask/finish or inherited pack desiccant is not new service material.

Residual inventory requirement after the independently identified cases `hygiene_materials_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual service hygiene and incident-capture consumables
- Flow property / unit: Mass / kg
- Amount rule: selected actual gross or consumed supply mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material identity/formulation, native count/mass/density conversion, stock and matched unused return evidence; no prescribed solvent or absorbent dose.

#### added_protection

Only real added protection without assumed opening/repack/desiccation. Inherited supplier pack stays commodity; reusable merchant supports use full-life allocation.

- Identity requirement: Actual extra external transit protection
- Flow property / unit: Mass / kg
- Amount rule: selected actual added gross or consumed material mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual material, quantity EACH/TOTAL native mass/stock and reuse/return ownership; no one dry bag or desiccant per board/panel default.

#### provider_package

Actual physically specified handling/site service only, coverage declared; outsourced depanel/test/bake/populate/solder/repack needs reviewed route, not hidden provider scope.

- Identity requirement: Actual disjoint contracted warehouse work package
- Flow property / unit: Count / Item(s)
- Amount rule: sum(actual_native_package_quantity*documented_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need provider unit/physical equivalent/event/share and utility/assets/freight/treatment exclusions; no price or net-board-area package factor.

#### service_assets

Separate real building/rack/handler/support across all users/periods; traded circuits are not current ICT assets. Include all manufacture/maintenance/replacement/retirement/EOL.

- Identity requirement: Actual full-life warehouse handling and reusable-support assets
- Flow property / unit: Count / Item(s)
- Amount rule: sum_full_asset_equivalents(job_driver/lifetime_all_user_driver)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need actual asset scope/events, observed all-user use+sourced remainder, compatible driver/equivalence and uncertainty/sensitivity; no life or new-support-per-panel factor.

#### freight

Actual single circuits or panels including received rails/coupons, packing and carried supports; preserve cargo scope independently of net-board area/copper mass.

- Identity requirement: Actual unique load-leg freight for received circuit presentation
- Flow property / unit: Mass * Length / t*km
- Amount rule: sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need actual packed mass, single/panel membership/count EACH/TOTAL, noncargo tare, distance/conversion and each load-leg share/empty coverage; no bare-board-only payload default.

#### unused_supply_return

Only actual exported unused service supply under gross input convention. Consumed-only input omits this exchange. Commercial circuit returns or inherited pack/material are nonexchange merchandise records.

- Identity requirement: Actual paired usable unused standalone supply outward return
- Flow property / unit: Mass / kg
- Amount rule: actual matched unused outward mass/N under gross input only
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need same-scope supply identity/native quantity, actual usable receiver/transfer and nonclosing proof; no inherited copper/finish/desiccant return against unrelated input.

#### usable_material_export

Conditional actual useful material export with real grade/state/receiver, disjoint from stock and waste. No assumed copper recovery or universal recycling/avoided-production credit.

- Identity requirement: Actual independently accepted usable service material export
- Flow property / unit: Mass / kg
- Amount rule: actual exclusive usable exported mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual usable material identity/native mass/component content and receiver acceptance, exclusive memberships; mere collection does not prove recovered product.

#### whole_board_panel_waste

Only actual discarded received single board/panel, including its rails/coupons if members, glass/resin/copper/plating/finish/mask and contents. Do not add constituents again. Embodied original commodity loss outside service once; actual receiver treatment here once.

- Identity requirement: Actual rejected whole supplied board or panel waste with retained constituents
- Flow property / unit: Mass / kg
- Amount rule: actual whole received-state transfer net mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual discard decision/design batch and panel membership, whole stream mass/retained content and receiver treatment; scratch or failed document does not prove whole panel waste.

#### separate_fragment_waste

Real independent fragments/rails/coupons only when separately transferred, with original genealogy and exclusions from whole-board/panel streams; no merchant depaneling or separation assumed. Copper/glass/resin/mask views remain explanatory unless separately real exits.

- Identity requirement: Actual independently transferred circuit fragment or separated material waste
- Flow property / unit: Mass / kg
- Amount rule: actual exclusive separate fragment/material mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual fragment parent/membership/material, native net mass and retained constituents, cause and receiver; not assume all fragments are copper scrap or airborne glass.

#### separate_pack_waste

Actual independent pack with retained residues/moisture/fluid recorded, disjoint from whole supplied package and other exits. No automatic unpack/repack or packaging credit.

Residual inventory requirement after the independently identified cases `separate_pack_waste_paper_pack`; `separate_pack_waste_metal_pack`; `separate_pack_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separately transferred circuit-packing waste and residues
- Flow property / unit: Mass / kg
- Amount rule: actual separate pack receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual packing material/net-tare/contaminated mass, residue native units and receiver classification/treatment, not inferred dry-bag or desiccant quantity.

#### mixed_capture_waste

Conditional real mixed cleanup substrate and captured dust/finish/fluid/water within one stream; captured material is not direct species release or extra whole stream.

- Identity requirement: Actual spent wipes absorbents or filters with captured circuit-related material
- Flow property / unit: Mass / kg
- Amount rule: actual mixed capture receiver mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual substrate and captured/retained components with independent native units/bases/method/source/sampletime, incident and receiver; no default dust ratio.

#### contained_liquid

Actual independently collected service liquid with native water/agent/solid/fluid composition, not fabrication etchant or board rinse by assumption. Contained receiver transfer not direct outfall.

- Identity requirement: Actual contained merchant-hygiene or incident liquid transfer
- Flow property / unit: Mass / kg
- Amount rule: actual compatible contained liquid mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_outlets`

Range evidence need: Need actual collection/net quantity, compatible density-temperature if converted, mixing state/retained exclusions and receiver treatment; no copper-in-water default.

#### direct_species_release

Only independently evidenced release from merchant operation; no copper/resin/glass presence, scratch/oxidation or stock difference supplies species, medium or zero.

- Identity requirement: Actual identified species or particle release to evidenced medium
- Flow property / unit: Mass / kg
- Amount rule: actual compatible measured or justified species mass/N
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_environment`

Range evidence need: Need species/particle and actual medium, measured quantity or applicable native activity/factor with required composition/fate/source and captured/contained exclusions; no PCB-manufacturing factor.

## 9. Validation Rules

| rule_id | Rule |
| --- | --- |
| reference_gate | Check output/name/link Count and actual merchant ownership/B2B final source/gate/reversal, N>0; open/reject resources remain attributed. |
| original_gate | Require complete actual finished two-layer unpopulated single/panel/rails-coupon/pack source, not raw laminate/populated/multilayer substitute; native direct OR complete positive all-terminal drivers inclclosing/usefulothers/returns/loss and exclusive stage/loss coverage outside once.  Record assignment_scope_ids, quantity_basis (raw_target_cohort or per_reference), same_target_scope_N and source for each linked original-gate demand or loss quantity. Actual external stock/stage/loss integration uses its raw physical amount once. ONLY for combination with 1 Item(s) service, derive q_per_reference=q_raw_of_that_same_scope/positive same_target_scope_N; already per-reference quantities are not divided again, single-case raw scope has N=1, N=0 has no normalized value. |
| copper_geometry | Check plan/face area, outline/cutouts, board/panel/rail/coupon count/mass membership, actual retained copper pattern/coverage and plating overlap/native density; no full-foil postetch or universal finish/FR4 recipe. |
| physical_resources | No hidden merchant test/bake/desiccate/depanel/populate/solder/clean/repack/use/climate route. Full all-user life/assets/provider/receiver exclusions, gross supply+return OR consumed OMIT and unique loadleg recordshare inside SUM/N once. |
| actual_fate | Whole board/panel/fragment/pack/capture/liquid/component views nonadditive with actual receiver and species/particle/medium/native factor evidence. No scrap metal/airglass/VOC/recovery/credit/zero from oxidation/scratch/stock/material presence. |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground own-account merchant-service add-on per final accepted consignment |
| downstream_use | Link once to compatible complete original finished unpopulated printed-circuit gate demand/loss and actual handover system |
| allowed_use | Actual original supplier single/panel two-layer rigid FR4 unpopulated route with complete native records |
| excluded_use | Standalone complete PCB footprint, raw laminate/populated/flex/multilayer route, manufacturer processing/consumer use or unreviewed merchant test/bake/depanel/assembly/repack |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; design_revision; batch_id; passport_or_release_record; unpopulated_evidence; two_conductive_layer_evidence; rigid_FR4_material_record; actual_copper_pattern_record; through_hole_plating_record; surface_finish_identity; soldermask_if_actual; legend_if_actual; supplier_single_or_panel_state; panel_board_rails_coupon_membership; original_pack_state; board_count; panel_count; net_board_area; net_board_mass; whole_panel_mass; original_pack_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | Actual identity/range/native quantities, plan/face/pattern/plating and panel-member evidence, original complete source/loss/stage coverage, all-user asset remainder uncertainty and freight/receiver exclusions |
| update_trigger | Actual design/material/layer/finish/panel-membership/pack, merchant work/source allocation/loss, lifetime/provider/carrier/receiver/species or conversion evidence changes |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| eurocircuits-pool | literature | https://www.eurocircuits.com/services/standard-pool/ | Qualitative distinction between bare and assembled supply, single circuits/panels, FR4 and optional layer/foil/finish/mask/legend choices; no numeric menu/default recipe/test/regulatory claim. |
| eurocircuits-quality | literature | https://www.eurocircuits.com/technical-guidelines/quality/during-production/ | Actual material-batch/job-release/measurement/selected-finish traceability questions. Source states its example sequence is multilayer and not every step applies to single/double-sided boards; no mandatory merchant testing or manufacturer test-pass factor. |
